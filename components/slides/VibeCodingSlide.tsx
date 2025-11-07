'use client'

import { motion } from 'framer-motion'
import { Hammer, Wrench, Gauge, ServerCog } from 'lucide-react'

import { slideContent } from '@/lib/presentationContent'

interface CustomToolsSlideProps {
  onComplete: (sectionId: string) => void
  completedSections: string[]
}

export default function VibeCodingSlide({ onComplete, completedSections }: CustomToolsSlideProps) {
  const isCompleted = completedSections.includes('custom-tools')
  const content = slideContent.customTools

  const handleComplete = () => {
    if (!isCompleted) {
      onComplete('custom-tools')
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
              <Hammer className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Custom tools build</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              {content.toolHighlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 leading-relaxed">
              {content.toolOutcome}
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <ServerCog className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Reference architecture</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              {content.referenceArchitecture.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Fine-tuned models</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              {content.modelGains.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="card bg-gradient-to-br from-primary-50 to-white">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Case in production</h2>
            </div>
            <p className="text-sm text-primary-800 leading-relaxed">{content.caseStudy}</p>
            <div className="mt-4 rounded-lg bg-white/80 border border-primary-200 p-4 text-sm text-primary-700 leading-relaxed">
              {content.caseInsight}
            </div>
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
