import { NextResponse } from 'next/server'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

const SECTIONS: Array<{ title: string; bullets: string[] }> = [
  {
    title: 'Context Stacking',
    bullets: [
      'Design deliberate context before asking for output.',
      'Stack role, objective, tone, rules, and snippets to reduce noise.',
      'Result: ~40% less manual correction when compared to cold prompts.',
    ],
  },
  {
    title: 'Slack Bot',
    bullets: [
      'Connects Slack to OpenAI with guardrails and channel awareness.',
      'Answers policy and process questions without leaving chat.',
      'Internal teams report ~30% fewer “where is…?” tickets.',
    ],
  },
  {
    title: 'Agentic Workflows',
    bullets: [
      'Automate multi-step legal, regulatory, and finance reviews.',
      'Search, summarise, analyse, and deliver with traceability.',
      'Keep human approvals in the loop with logged evidence.',
    ],
  },
  {
    title: 'Custom Tools & Fine-tuned Models',
    bullets: [
      'Lightweight UIs for uploads and validation.',
      'Fine-tuned models that speak Assent’s technical language.',
      'Outputs land directly in Snowflake-ready formats.',
    ],
  },
  {
    title: 'Creative Showcase',
    bullets: [
      'ElevenLabs, HeyGen, Google AI Studio (Vibe Code), VS Code assistants.',
      'AI elevates demos, comms, and onboarding—beyond automation.',
    ],
  },
]

export async function GET() {
  const pdfDoc = await PDFDocument.create()
  const pageMargin = 56
  const pageWidth = 595.28 // A4 width in points
  const pageHeight = 841.89 // A4 height in points

  const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const bodyFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  let page = pdfDoc.addPage([pageWidth, pageHeight])
  let y = pageHeight - pageMargin

  const drawText = (text: string, options: { font: any; size: number; color: ReturnType<typeof rgb>; lineHeight?: number }) => {
    const { font, size, color, lineHeight = size * 1.4 } = options
    const words = text.split(' ')
    let line = ''

    while (words.length > 0) {
      const testLine = `${line}${words[0]} `
      const testWidth = font.widthOfTextAtSize(testLine, size)

      if (testWidth > pageWidth - pageMargin * 2) {
        if (y - lineHeight < pageMargin) {
          page = pdfDoc.addPage([pageWidth, pageHeight])
          y = pageHeight - pageMargin
        }
        page.drawText(line.trimEnd(), { x: pageMargin, y, size, font, color })
        y -= lineHeight
        line = ''
      } else {
        line = testLine
        words.shift()
      }
    }

    if (line.trim().length > 0) {
      if (y - lineHeight < pageMargin) {
        page = pdfDoc.addPage([pageWidth, pageHeight])
        y = pageHeight - pageMargin
      }
      page.drawText(line.trimEnd(), { x: pageMargin, y, size, font, color })
      y -= lineHeight
    }
  }

  const drawTitle = (text: string) => {
    const size = 24
    const textWidth = titleFont.widthOfTextAtSize(text, size)
    const x = (pageWidth - textWidth) / 2
    if (y - size * 1.6 < pageMargin) {
      page = pdfDoc.addPage([pageWidth, pageHeight])
      y = pageHeight - pageMargin
    }
    page.drawText(text, { x, y, size, font: titleFont, color: rgb(0.04, 0.11, 0.18) })
    y -= size * 1.8
  }

  const drawSubtitle = (text: string) => {
    const size = 12
    const textWidth = bodyFont.widthOfTextAtSize(text, size)
    const x = (pageWidth - textWidth) / 2
    if (y - size * 1.6 < pageMargin) {
      page = pdfDoc.addPage([pageWidth, pageHeight])
      y = pageHeight - pageMargin
    }
    page.drawText(text, { x, y, size, font: bodyFont, color: rgb(0.08, 0.22, 0.35) })
    y -= size * 2
  }

  drawTitle('Somos Talk - AI Patterns for Real Teams')
  drawSubtitle(
    `Generated on ${new Date().toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}`
  )

  drawText(
    'Inside this deck we walk through how Assent operationalises AI—from context design to agentic workflows and bespoke tools.',
    { font: bodyFont, size: 12, color: rgb(0.12, 0.35, 0.44) }
  )

  y -= 12

  SECTIONS.forEach((section) => {
    if (y - 24 < pageMargin) {
      page = pdfDoc.addPage([pageWidth, pageHeight])
      y = pageHeight - pageMargin
    }

    page.drawText(section.title, {
      x: pageMargin,
      y,
      size: 16,
      font: titleFont,
      color: rgb(0.05, 0.19, 0.29),
    })

    y -= 22

    section.bullets.forEach((bullet) => {
      const bulletText = `• ${bullet}`
      const words = bulletText.split(' ')
      let line = ''
      const size = 12
      const lineHeight = size * 1.4

      while (words.length > 0) {
        const testLine = `${line}${words[0]} `
        const testWidth = bodyFont.widthOfTextAtSize(testLine, size)

        if (testWidth > pageWidth - pageMargin * 2) {
          if (y - lineHeight < pageMargin) {
            page = pdfDoc.addPage([pageWidth, pageHeight])
            y = pageHeight - pageMargin
          }
          page.drawText(line.trimEnd(), { x: pageMargin + 12, y, size, font: bodyFont, color: rgb(0.12, 0.35, 0.44) })
          y -= lineHeight
          line = ''
        } else {
          line = testLine
          words.shift()
        }
      }

      if (line.trim().length > 0) {
        if (y - lineHeight < pageMargin) {
          page = pdfDoc.addPage([pageWidth, pageHeight])
          y = pageHeight - pageMargin
        }
        page.drawText(line.trimEnd(), { x: pageMargin + 12, y, size, font: bodyFont, color: rgb(0.12, 0.35, 0.44) })
        y -= lineHeight
      }
    })

    y -= 14
  })

  drawText('Join La Sesh to keep iterating with live workflows, templates, and community feedback.', {
    font: bodyFont,
    size: 12,
    color: rgb(0.07, 0.76, 0.69),
  })

  const pdfBytes = await pdfDoc.save()

  return new NextResponse(Buffer.from(pdfBytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="somos-talk-presentation.pdf"',
      'Cache-Control': 'no-store',
    },
  })
}
