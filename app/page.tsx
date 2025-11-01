'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  Download,
  CheckCircle,
  Clock,
  Users,
  Target
} from 'lucide-react'
import toast from 'react-hot-toast'

// Import slide components
import WelcomeSlide from '@/components/slides/WelcomeSlide'
import IntroAISlide from '@/components/slides/IntroAISlide'
import PromptStackingSlide from '@/components/slides/PromptStackingSlide'
import MCPSlide from '@/components/slides/MCPSlide'
import AgentsSlide from '@/components/slides/AgentsSlide'
import VibeCodingSlide from '@/components/slides/VibeCodingSlide'
import ClosingSlide from '@/components/slides/ClosingSlide'
import ScheduleBar from '@/components/ScheduleBar'

const slides = [
  { id: 'welcome', component: WelcomeSlide, title: 'Bienvenida' },
  { id: 'intro-ai', component: IntroAISlide, title: 'Introducción a la IA' },
  { id: 'prompt-stacking', component: PromptStackingSlide, title: 'Prompt Stacking' },
  { id: 'mcps', component: MCPSlide, title: 'MCPs' },
  { id: 'agents', component: AgentsSlide, title: 'Agents' },
  { id: 'vibe-coding', component: VibeCodingSlide, title: 'Vibe Coding' },
  { id: 'closing', component: ClosingSlide, title: 'Cierre' },
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
      toast.success('¡Sección completada! 🎉')
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

  // Autoplay desactivado

  const CurrentSlideComponent = slides[currentSlide].component

  // Keyboard navigation: Left/Right arrows to navigate slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const tag = target?.tagName
      const isEditable = target?.getAttribute('contenteditable') === 'true'
      if (tag === 'INPUT' || tag === 'TEXTAREA' || isEditable) return

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Navigation Header */}
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

      {/* Slide Counter removed as requested */}

      {/* Main Content */}
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

      {/* Slide Navigation Dots */}
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

      {/* Fixed Schedule Bar (right) */}
      <ScheduleBar currentSlideIndex={currentSlide} />
    </div>
  )
}
