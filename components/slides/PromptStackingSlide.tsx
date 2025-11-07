'use client'

import { motion } from 'framer-motion'
import { Layers, ClipboardList, Sparkles } from 'lucide-react'

import { slideContent } from '@/lib/presentationContent'

interface ContextStackingSlideProps {
  onComplete: (sectionId: string) => void
  completedSections: string[]
}

export default function PromptStackingSlide({ onComplete, completedSections }: ContextStackingSlideProps) {
  const isCompleted = completedSections.includes('context-stacking')
  const content = slideContent.contextStacking

  const handleComplete = () => {
    if (!isCompleted) {
      onComplete('context-stacking')
    }
  }

  return (
    <div className="slide-container">
      <div className="slide-content space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="slide-title">{content.title}</h1>
          <p className="slide-subtitle text-primary-600">{content.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Core Ideas</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              {content.principles.map((principle) => (
                <li key={principle}>- {principle}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Before vs After</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">{content.beforeAfter.description}</p>
            <div className="rounded-lg border border-primary-200 bg-primary-50 p-4 text-sm text-primary-800">
              {content.beforeAfter.reminder}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card"
        >
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-semibold">Express Workflow</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {content.workflow.map((step) => (
              <div key={step.title} className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                <h3 className="text-sm font-semibold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={handleComplete}
            className="px-6 py-3 rounded-lg bg-primary-600 text-white shadow hover:bg-primary-700 transition-colors"
          >
            {content.completionLabel}
          </button>
          {isCompleted && <p className="text-sm text-primary-600 mt-3">Marked as completed.</p>}
        </motion.div>
      </div>
    </div>
  )
}
