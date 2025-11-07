import { presentationPages } from '../presentationContent'

const PAGE_WIDTH = 612
const PAGE_HEIGHT = 792
const MARGIN_X = 56
const MARGIN_Y = 56
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2

interface PdfObject {
  id: number
  content: string
}

const approxCharWidth = (fontSize: number) => fontSize * 0.5

const wrapText = (text: string, fontSize: number, maxWidth = CONTENT_WIDTH) => {
  const words = text.split(/\s+/).filter(Boolean)
  if (words.length === 0) return ['']
  const maxCharsPerLine = Math.max(4, Math.floor(maxWidth / approxCharWidth(fontSize)))

  const lines: string[] = []
  let currentLine = ''

  words.forEach((word) => {
    const candidate = currentLine.length > 0 ? `${currentLine} ${word}` : word
    if (candidate.length > maxCharsPerLine) {
      if (currentLine.length > 0) {
        lines.push(currentLine)
        currentLine = word
      } else {
        lines.push(candidate)
        currentLine = ''
      }
    } else {
      currentLine = candidate
    }
  })

  if (currentLine.length > 0) {
    lines.push(currentLine)
  }

  return lines
}

const escapePdfText = (text: string) =>
  text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\r/g, '').replace(/\n/g, ' ')

export const createPresentationPdf = () => {
  const objects: PdfObject[] = []

  const addObject = (content: string) => {
    const id = objects.length + 1
    objects.push({ id, content })
    return id
  }

  const updateObject = (id: number, content: string) => {
    const index = objects.findIndex((obj) => obj.id === id)
    if (index !== -1) {
      objects[index] = { id, content }
    }
  }

  const regularFontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
  const boldFontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')
  const pagesObjectId = addObject('')

  const pageIds: number[] = []

  presentationPages.forEach((page) => {
    let cursorY = PAGE_HEIGHT - MARGIN_Y
    const blocks: string[] = []

    const addBlock = (
      rawLines: string[],
      options: { font: 'regular' | 'bold'; fontSize: number; blockSpacing?: number; leading?: number; indent?: number } = {
        font: 'regular',
        fontSize: 12,
      },
    ) => {
      if (rawLines.length === 0) {
        return
      }

      const fontKey = options.font === 'bold' ? 'F2' : 'F1'
      const fontSize = options.fontSize
      const leading = options.leading ?? fontSize * 1.2
      const blockSpacing = options.blockSpacing ?? fontSize * 0.8
      const indent = options.indent ?? 0
      const blockHeight = fontSize + leading * (rawLines.length - 1)

      const startY = cursorY - fontSize
      cursorY -= blockHeight + blockSpacing

      const contentLines = rawLines.map((line) => escapePdfText(line))
      let block = 'BT\n'
      block += `/${fontKey} ${fontSize} Tf\n`
      block += `1 0 0 1 ${MARGIN_X + indent} ${startY} Tm\n`
      block += `(${contentLines[0]}) Tj`
      for (let i = 1; i < contentLines.length; i += 1) {
        block += `\n0 -${leading.toFixed(2)} Td\n(${contentLines[i]}) Tj`
      }
      block += '\nET\n'
      blocks.push(block)
    }

    const addParagraph = (text: string, font: 'regular' | 'bold', fontSize: number, blockSpacing?: number) => {
      const lines = wrapText(text, fontSize)
      addBlock(lines, { font, fontSize, blockSpacing })
    }

    const addBulletList = (items: string[]) => {
      items.forEach((item) => {
        const wrapped = wrapText(item, 11)
        const bulletLines = wrapped.map((line, index) => (index === 0 ? `• ${line}` : `  ${line}`))
        addBlock(bulletLines, { font: 'regular', fontSize: 11, blockSpacing: 8 })
      })
    }

    addParagraph(page.title, 'bold', 20, 14)
    if (page.subtitle) {
      addParagraph(page.subtitle, 'regular', 14, 16)
    }
    if (page.intro) {
      addParagraph(page.intro, 'regular', 12, 14)
    }

    page.sections.forEach((section) => {
      if (section.heading) {
        addParagraph(section.heading, 'bold', 14, 10)
      }
      section.paragraphs?.forEach((paragraph) => {
        addParagraph(paragraph, 'regular', 12, 10)
      })
      if (section.bullets) {
        addBulletList(section.bullets)
      }
      if (section.note) {
        addParagraph(section.note, 'regular', 11, 12)
      }
    })

    if (page.closingNote) {
      addParagraph(page.closingNote, 'bold', 12, 0)
    }

    const contentStream = blocks.join('')
    const streamLength = Buffer.byteLength(contentStream, 'utf8')
    const contentObjectId = addObject(`<< /Length ${streamLength} >>\nstream\n${contentStream}endstream`)

    const pageObjectId = addObject(
      `<< /Type /Page /Parent ${pagesObjectId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Contents ${contentObjectId} 0 R /Resources << /Font << /F1 ${regularFontId} 0 R /F2 ${boldFontId} 0 R >> >> >>`,
    )

    pageIds.push(pageObjectId)
  })

  updateObject(
    pagesObjectId,
    `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`,
  )

  const catalogId = addObject(`<< /Type /Catalog /Pages ${pagesObjectId} 0 R >>`)

  let pdf = '%PDF-1.4\n'
  const offsets: number[] = [0]

  objects.forEach((obj) => {
    offsets[obj.id] = Buffer.byteLength(pdf, 'utf8')
    pdf += `${obj.id} 0 obj\n${obj.content}\nendobj\n`
  })

  const xrefOffset = Buffer.byteLength(pdf, 'utf8')
  pdf += `xref\n0 ${objects.length + 1}\n`
  pdf += '0000000000 65535 f \n'
  for (let i = 1; i <= objects.length; i += 1) {
    const offset = offsets[i]
    pdf += `${offset.toString().padStart(10, '0')} 00000 n \n`
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`

  return Buffer.from(pdf, 'utf8')
}
