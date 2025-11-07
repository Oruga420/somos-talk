import { NextResponse } from 'next/server'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { presentationSections } from '@/lib/presentationContent'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const pdfDoc = await PDFDocument.create()
  const pageMargin = 56
  const pageWidth = 595.28 // A4 width in points
  const pageHeight = 841.89 // A4 height in points

  const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const bodyFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  let page = pdfDoc.addPage([pageWidth, pageHeight])
  let y = pageHeight - pageMargin

  const drawText = (
    text: string,
    options: { font: any; size: number; color: ReturnType<typeof rgb>; lineHeight?: number; indent?: number }
  ) => {
    const { font, size, color, lineHeight = size * 1.4, indent = 0 } = options
    const words = text.split(' ')
    let line = ''
    const maxWidth = pageWidth - pageMargin * 2 - indent

    while (words.length > 0) {
      const testLine = `${line}${words[0]} `
      const testWidth = font.widthOfTextAtSize(testLine, size)

      if (testWidth > maxWidth) {
        if (y - lineHeight < pageMargin) {
          page = pdfDoc.addPage([pageWidth, pageHeight])
          y = pageHeight - pageMargin
        }
        page.drawText(line.trimEnd(), { x: pageMargin + indent, y, size, font, color })
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
      page.drawText(line.trimEnd(), { x: pageMargin + indent, y, size, font, color })
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

  presentationSections.forEach((section) => {
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

    if (section.subtitle) {
      drawText(section.subtitle, { font: bodyFont, size: 13, color: rgb(0.12, 0.35, 0.44) })
    }

    section.paragraphs?.forEach((paragraph) => {
      drawText(paragraph, { font: bodyFont, size: 12, color: rgb(0.12, 0.35, 0.44) })
      y -= 6
    })

    section.bulletGroups?.forEach((group) => {
      if (group.title) {
        drawText(group.title, { font: bodyFont, size: 13, color: rgb(0.05, 0.19, 0.29) })
        y -= 2
      }
      group.items.forEach((item) => {
        drawText(`• ${item}`, { font: bodyFont, size: 12, color: rgb(0.12, 0.35, 0.44), indent: 14 })
      })
      y -= 8
    })

    if (section.tags && section.tags.length > 0) {
      drawText(`Tags: ${section.tags.join(', ')}`, {
        font: bodyFont,
        size: 12,
        color: rgb(0.07, 0.76, 0.69),
      })
    }

    if (section.cta) {
      drawText(section.cta, { font: bodyFont, size: 12, color: rgb(0.07, 0.76, 0.69) })
    }

    y -= 6
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
