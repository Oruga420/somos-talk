'use client'

import { motion } from 'framer-motion'
import { Sparkles, Target, Users } from 'lucide-react'

interface WelcomeSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const OVERVIEW_ITEMS = [
  {
    icon: <Sparkles className="w-6 h-6 text-primary-600" />,
    title: 'Concrete Playbooks',
    description: 'Context stacking, agents, and tooling we already run inside Assent.'
  },
  {
    icon: <Users className="w-6 h-6 text-primary-600" />,
    title: 'Real Use Cases',
    description: 'Slack, Legal, Finance, and Data Quality with impact metrics.'
  },
  {
    icon: <Target className="w-6 h-6 text-primary-600" />,
    title: 'Actionable Follow-up',
    description: 'Clear CTA: grab the templates and keep iterating with La Sesh.'
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
          <p className="text-sm uppercase tracking-[0.3em] text-primary-500 mb-4">
            Somos | AI Patterns
          </p>
          <h1 className="slide-title">
            AI that amplifies human judgment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
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
          <div className="grid md:grid-cols-3 gap-6">
            {OVERVIEW_ITEMS.map((item) => (
              <div key={item.title} className="card h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card bg-gradient-to-br from-primary-50 to-white">
            <h3 className="text-xl font-semibold mb-4">Mindset</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Core belief: AI does not replace your expertise, it amplifies it.
              When we stack context, design guardrails, and build tools that match our workflows,
              AI becomes a multiplier for human judgment instead of a replacement.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
                Calibrate fast
              </span>
              <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
                Operate with guardrails
              </span>
              <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
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
            className="px-6 py-3 rounded-lg bg-primary-600 text-white shadow hover:bg-primary-700 transition-colors"
          >
            Room is ready - jump to Context Stacking
          </button>
          {isCompleted && (
            <p className="text-sm text-primary-600 mt-3">
              Marked as completed.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
