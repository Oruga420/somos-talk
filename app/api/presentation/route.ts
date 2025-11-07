import { NextResponse } from 'next/server'

import { createPresentationPdf } from '@/lib/pdf/createPresentationPdf'

export async function GET() {
  const pdfBuffer = createPresentationPdf()

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="somos-talk-presentation.pdf"',
      'Content-Length': pdfBuffer.length.toString(),
    },
  })
}
