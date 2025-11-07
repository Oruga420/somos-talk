import { NextResponse } from 'next/server'
import PDFDocument from 'pdfkit'
import { PassThrough, Readable } from 'stream'
import { join } from 'path'
import { readFileSync } from 'fs'

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
  process.env.PDFKIT_DATA_DIR = join(process.cwd(), 'node_modules', 'pdfkit', 'js', 'data')

  const doc = new PDFDocument({ size: 'A4', margin: 48 })
  const stream = new PassThrough()
  doc.pipe(stream)

  const now = new Date()

  const fontPath = join(process.cwd(), 'public', 'fonts', 'OpenSans.ttf')
  const fontData = readFileSync(fontPath)
  doc.registerFont('OpenSans', fontData)

  doc
    .fillColor('#0a1b2e')
    .font('OpenSans')
    .fontSize(22)
    .text('Somos Talk - AI Patterns for Real Teams', { align: 'center' })

  doc
    .moveDown(0.5)
    .font('OpenSans')
    .fontSize(11)
    .fillColor('#15385a')
    .text(`Generated on ${now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}`, {
      align: 'center',
    })

  doc.moveDown(1.5)

  doc
    .font('OpenSans')
    .fontSize(12)
    .fillColor('#204c71')
    .text(
      'Inside this deck we walk through how Assent operationalises AI—from context design to agentic workflows and bespoke tools.',
      { align: 'left' }
    )

  doc.moveDown(1)

  SECTIONS.forEach((section) => {
    doc
      .font('OpenSans')
      .fontSize(14)
      .fillColor('#0f2741')
      .text(section.title, { underline: false })

    doc.moveDown(0.4)

    section.bullets.forEach((bullet) => {
      doc
        .font('OpenSans')
        .fontSize(12)
        .fillColor('#15385a')
        .text(`• ${bullet}`, { indent: 14, continued: false })
    })

    doc.moveDown(1)
  })

  doc
    .font('OpenSans')
    .fontSize(12)
    .fillColor('#12c3b0')
    .text('Join La Sesh to keep iterating with live workflows, templates, and community feedback.')

  doc.end()

  const webStream = Readable.toWeb(stream)

  return new NextResponse(webStream as unknown as ReadableStream, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="somos-talk-presentation.pdf"',
      'Cache-Control': 'no-store',
    },
  })
}
