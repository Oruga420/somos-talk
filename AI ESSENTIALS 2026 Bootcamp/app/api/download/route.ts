import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const template = searchParams.get('template')

  if (!template) {
    return NextResponse.json({ error: 'Template parameter is required' }, { status: 400 })
  }

  try {
    const templatePath = join(process.cwd(), 'public', 'templates', `${template}.md`)
    const content = await readFile(templatePath, 'utf-8')
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/markdown',
        'Content-Disposition': `attachment; filename="${template}.md"`,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 })
  }
}
