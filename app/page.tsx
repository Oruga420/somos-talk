'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import toast from 'react-hot-toast'

import WelcomeSlide from '@/components/slides/WelcomeSlide'
import PromptStackingSlide from '@/components/slides/PromptStackingSlide'
import MCPSlide from '@/components/slides/MCPSlide'
import AgentsSlide from '@/components/slides/AgentsSlide'
import VibeCodingSlide from '@/components/slides/VibeCodingSlide'
import ShowcaseSlide from '@/components/slides/ShowcaseSlide'
import ClosingSlide from '@/components/slides/ClosingSlide'
import ScheduleBar from '@/components/ScheduleBar'

const slides = [
  { id: 'welcome', component: WelcomeSlide, title: 'Somos: Opening' },
  { id: 'context-stacking', component: PromptStackingSlide, title: 'Context Stacking' },
  { id: 'slack-bot', component: MCPSlide, title: 'Slack Bot' },
  { id: 'agentic-workflows', component: AgentsSlide, title: 'Agentic Workflows' },
  { id: 'custom-tools', component: VibeCodingSlide, title: 'Custom Tools & Fine-tuning' },
  { id: 'showcase', component: ShowcaseSlide, title: 'Showcase' },
  { id: 'closing', component: ClosingSlide, title: 'Closing' },
]

declare global {
  interface Window {
    html2canvas?: (
      element: HTMLElement,
      options?: { scale?: number; backgroundColor?: string }
    ) => Promise<HTMLCanvasElement>
    jspdf?: {
      jsPDF: new (
        options?: {
          orientation?: 'p' | 'portrait' | 'l' | 'landscape'
          unit?: string
          format?: string | number[]
        }
      ) => {
        internal: { pageSize: { getWidth: () => number; getHeight: () => number } }
        addPage: () => void
        addImage: (
          imageData: string,
          format: string,
          x: number,
          y: number,
          width: number,
          height: number
        ) => void
        save: (filename: string) => void
        getImageProperties: (imageData: string) => { width: number; height: number }
      }
    }
  }
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [completedSections, setCompletedSections] = useState<string[]>([])
  const [isGeneratingPresentation, setIsGeneratingPresentation] = useState(false)
  const printableDeckRef = useRef<HTMLDivElement>(null)

  const progress = ((currentSlide + 1) / slides.length) * 100

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const markSectionComplete = (sectionId: string) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId])
      toast.success('Section marked as completed')
    }
  }

  const downloadTemplate = (templateName: string) => {
    const link = document.createElement('a')
    link.href = `/api/download?template=${templateName}`
    link.download = `${templateName}.md`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success(`Descargando ${templateName}...`)
  }

  const ensurePdfDependencies = async () => {
    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
        if (existingScript) {
          if (existingScript.dataset.loaded === 'true') {
            resolve()
            return
          }

          existingScript.addEventListener('load', () => resolve(), { once: true })
          existingScript.addEventListener('error', () => reject(new Error(`No se pudo cargar ${src}`)), {
            once: true,
          })
          return
        }

        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.dataset.loaded = 'false'
        script.onload = () => {
          script.dataset.loaded = 'true'
          resolve()
        }
        script.onerror = () => reject(new Error(`No se pudo cargar ${src}`))
        document.body.appendChild(script)
      })

    if (!window.html2canvas) {
      await loadScript('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js')
    }

    if (!window.jspdf?.jsPDF) {
      await loadScript('https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js')
    }

    if (!window.html2canvas || !window.jspdf?.jsPDF) {
      throw new Error('Dependencias para generar PDF no disponibles')
    }
  }

  const downloadPresentation = async () => {
    if (isGeneratingPresentation) {
      return
    }

    const container = printableDeckRef.current
    if (!container) {
      toast.error('No se pudo preparar la presentación para exportar')
      return
    }

    setIsGeneratingPresentation(true)
    const toastId = toast.loading('Generando presentación en PDF...')

    try {
      await ensurePdfDependencies()

      const html2canvas = window.html2canvas!
      const { jsPDF } = window.jspdf!

      if ('fonts' in document && 'ready' in document.fonts) {
        try {
          await document.fonts.ready
        } catch (error) {
          console.warn('No se pudo confirmar la carga de fuentes antes de exportar', error)
        }
      }

      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

      const slideElements = Array.from(container.querySelectorAll<HTMLElement>('[data-slide-index]'))
      if (slideElements.length === 0) {
        throw new Error('No se encontraron diapositivas para exportar')
      }

      const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' })
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const margin = 24

      for (let index = 0; index < slideElements.length; index += 1) {
        const slideElement = slideElements[index]
        const canvas = await html2canvas(slideElement, {
          scale: 2,
          backgroundColor: '#ffffff',
        })

        const imageData = canvas.toDataURL('image/png')
        const imageProps = pdf.getImageProperties(imageData)

        const printableWidth = pageWidth - margin * 2
        const printableHeight = (imageProps.height * printableWidth) / imageProps.width
        const yOffset = Math.max((pageHeight - printableHeight) / 2, margin)

        if (index > 0) {
          pdf.addPage()
        }

        pdf.addImage(imageData, 'PNG', margin, yOffset, printableWidth, printableHeight)
      }

      pdf.save('somos-talk-presentation.pdf')
      toast.success('Presentación exportada correctamente', { id: toastId })
    } catch (error) {
      console.error(error)
      toast.error('No se pudo generar el PDF de la presentación', { id: toastId })
    } finally {
      setIsGeneratingPresentation(false)
    }
  }

  const CurrentSlideComponent = slides[currentSlide].component

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      const tagName = target?.tagName
      const isEditable = target?.getAttribute('contenteditable') === 'true'

      if (tagName === 'INPUT' || tagName === 'TEXTAREA' || isEditable) {
        return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        nextSlide()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="fixed top-4 right-4 z-40 flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-sm text-gray-600">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      <div className="md:pr-72">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentSlideComponent
              onComplete={markSectionComplete}
              onDownload={downloadTemplate}
              onDownloadPresentation={downloadPresentation}
              completedSections={completedSections}
              isDownloadingPresentation={isGeneratingPresentation}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="fixed bottom-4 right-4 z-40 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? 'bg-primary-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      <ScheduleBar currentSlideIndex={currentSlide} />

      <div
        ref={printableDeckRef}
        aria-hidden="true"
        className="pointer-events-none absolute -left-[12000px] top-0 w-[1024px] space-y-6 bg-white"
      >
        {slides.map((slide, index) => {
          const SlideComponent = slide.component
          return (
            <div
              key={slide.id}
              data-slide-index={index}
              className="min-h-[576px] w-full rounded-xl border border-slate-200 bg-white p-10 shadow-sm"
            >
              <SlideComponent
                onComplete={() => {}}
                onDownload={() => {}}
                completedSections={[]}
                isDownloadingPresentation={false}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
