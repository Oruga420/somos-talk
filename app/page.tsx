'use client'

import { useEffect, useState } from 'react'
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [completedSections, setCompletedSections] = useState<string[]>([])

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
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="fixed top-24 right-6 z-40 flex items-center space-x-4 rounded-full border border-primary-200 bg-white/90 px-4 py-2 shadow-lg shadow-primary-200/70 backdrop-blur-lg">
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg text-accent-600 transition-colors hover:bg-primary-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-lg text-accent-600 transition-colors hover:bg-primary-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-sm font-medium text-accent-500">
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
              completedSections={completedSections}
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
            className={`w-3 h-3 rounded-full border border-primary-200 transition-colors ${
              index === currentSlide
                ? 'bg-secondary-500 shadow shadow-secondary-500/40'
                : 'bg-primary-200 hover:bg-primary-300'
            }`}
          />
        ))}
      </div>

      <ScheduleBar currentSlideIndex={currentSlide} />
    </div>
  )
}
