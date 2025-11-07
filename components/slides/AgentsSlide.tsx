'use client'

import { motion } from 'framer-motion'
import { GitBranch, FileText, ShieldCheck, BookOpen } from 'lucide-react'

import { slideContent } from '@/lib/presentationContent'

interface AgenticSlideProps {
  onComplete: (sectionId: string) => void
  completedSections: string[]
}

export default function AgentsSlide({ onComplete, completedSections }: AgenticSlideProps) {
  const isCompleted = completedSections.includes('agentic-workflows')
  const content = slideContent.agenticWorkflows

  const handleComplete = () => {
    if (!isCompleted) {
      onComplete('agentic-workflows')
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
          className="card"
        >
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-semibold">Multi-step pipeline</h2>
          </div>
          <ul className="space-y-2 text-gray-700 leading-relaxed">
            {content.pipeline.map((step) => (
              <li key={step}>- {step}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">{content.tooling}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {content.useCases.map((useCase) => (
            <div key={useCase.title} className="card">
              <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-slate-800">
                <BookOpen className="w-4 h-4 text-primary-600" />
                {useCase.title}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{useCase.detail}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="card bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-semibold">Example</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{content.example}</p>
          </div>
          <div className="card bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-semibold">Guardrails</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              {content.guardrails.map((guardrail) => (
                <li key={guardrail}>- {guardrail}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
