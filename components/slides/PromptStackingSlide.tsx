'use client'

import { motion } from 'framer-motion'
import { Layers, ClipboardList, Sparkles } from 'lucide-react'

interface ContextStackingSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const PRINCIPLES = [
  'This is not prompt magic; it is deliberate context design.',
  'We stack what the model must know: role, objective, tone, rules, and snippets.',
  'Every layer removes noise and pulls the model into our domain.',
]

const FLOW_STEPS = [
  {
    title: '1. Define role and outcome',
    detail: 'Example: "You are a compliance analyst. Summarize the key risks as a concise legal memo."'
  },
  {
    title: '2. Stack the context',
    detail: 'Add tone, decision criteria, glossary items, templates, and counter-examples.'
  },
  {
    title: '3. Request the deliverable',
    detail: 'Once aligned, ask for the final output. Expect around 40% less manual fixing.'
  },
]

export default function PromptStackingSlide({ onComplete, completedSections }: ContextStackingSlideProps) {
  const isCompleted = completedSections.includes('context-stacking')

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
          <h1 className="slide-title">Context Stacking - Personal Technique</h1>
          <p className="slide-subtitle text-primary-600">
            We teach the model how to think before we ask it to work.
          </p>
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
            <ul className="space-y-3 text-secondary-100 leading-relaxed">
              {PRINCIPLES.map((principle) => (
                <li key={principle}>- {principle}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Before vs After</h2>
            </div>
            <p className="text-secondary-200 leading-relaxed mb-4">
              Run a live demo comparing a cold prompt against the stacked prompt.
              The stacked version cuts manual cleanup by roughly 40% because the format,
              tone, and decision filters are already in place.
            </p>
            <div className="rounded-lg border border-primary-700/60 bg-primary-900/50 p-4 text-sm text-secondary-100">
              Reminder: the context window is a canvas. Every word you add becomes part of the instruction set.
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
            {FLOW_STEPS.map((step) => (
              <div key={step.title} className="rounded-lg bg-primary-900/60 border border-primary-700/60 p-4">
                <h3 className="text-sm font-semibold text-secondary-50 mb-2">{step.title}</h3>
                <p className="text-sm text-secondary-200 leading-relaxed">{step.detail}</p>
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
            className="px-6 py-3 rounded-lg bg-accent-500 text-primary-900 shadow-lg shadow-accent-500/30 hover:bg-accent-400 transition-colors"
          >
            Context stacking covered
          </button>
          {isCompleted && (
            <p className="text-sm text-accent-300 mt-3">Marked as completed.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
