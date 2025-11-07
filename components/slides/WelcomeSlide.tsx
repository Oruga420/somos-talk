'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users } from 'lucide-react'

interface WelcomeSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const OVERVIEW_ITEMS = [
  {
    icon: <Sparkles className="w-6 h-6 text-secondary-600" />,
    title: 'Concrete Playbooks',
    description: 'Context stacking, agents, and tooling we already run inside Assent.'
  },
  {
    icon: <Users className="w-6 h-6 text-secondary-600" />,
    title: 'Real Use Cases',
    description: 'Slack, Legal, Finance, and Data Quality with impact metrics.'
  },
]

export default function WelcomeSlide({ onComplete, completedSections }: WelcomeSlideProps) {
  const isCompleted = completedSections.includes('welcome')

  return (
    <div className="slide-container">
      <div className="slide-content space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-accent-400 mb-4">
            Somos - Assent
          </p>
          <h1 className="slide-title">
            AI that amplifies human judgment
          </h1>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            This session shows how we operate AI day to day:
            how we calibrate the room, stack context, and ship workflows that already drive value at Assent.
            No hype, just delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="section-title text-center mb-10">What We Will Cover</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {OVERVIEW_ITEMS.map((item) => (
              <div key={item.title} className="card h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-50 border border-secondary-200 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-accent-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card bg-gradient-to-br from-secondary-50 to-primary-100 border border-primary-100">
            <h3 className="text-xl font-semibold mb-4">Mindset</h3>
            <p className="text-accent-600 mb-6 leading-relaxed">
              Core belief: AI does not replace your expertise, it amplifies it.
              When we stack context, design guardrails, and build tools that match our workflows,
              AI becomes a multiplier for human judgment instead of a replacement.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-secondary-50 px-3 py-1 text-sm font-medium text-accent-600 border border-secondary-200">
                Calibrate fast
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary-50 px-3 py-1 text-sm font-medium text-accent-600 border border-secondary-200">
                Operate with guardrails
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary-50 px-3 py-1 text-sm font-medium text-accent-600 border border-secondary-200">
                Share real playbooks
              </span>
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
            onClick={() => {
              if (!isCompleted) {
                onComplete('welcome')
              }
            }}
            className="px-6 py-3 rounded-lg bg-secondary-500 text-white shadow-lg shadow-secondary-500/30 hover:bg-secondary-400 transition-colors"
          >
            Room is ready - jump to Context Stacking
          </button>
          {isCompleted && (
            <p className="text-sm text-accent-500 mt-3">
              Marked as completed.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
