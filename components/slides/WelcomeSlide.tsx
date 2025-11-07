'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users } from 'lucide-react'

import { slideContent } from '@/lib/presentationContent'

interface WelcomeSlideProps {
  onComplete: (sectionId: string) => void
  completedSections: string[]
}

const overviewIcons = [Sparkles, Users]

export default function WelcomeSlide({ onComplete, completedSections }: WelcomeSlideProps) {
  const isCompleted = completedSections.includes('welcome')
  const content = slideContent.welcome

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
            {content.hero.eyebrow}
          </p>
          <h1 className="slide-title">{content.hero.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            {content.hero.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="section-title text-center mb-10">What We Will Cover</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.overview.map((item, index) => (
              <div key={item.title} className="card h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                  {(() => {
                    const Icon = overviewIcons[index % overviewIcons.length]
                    return <Icon className="w-6 h-6 text-primary-600" />
                  })()}
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
            <h3 className="text-xl font-semibold mb-4">{content.mindset.title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{content.mindset.summary}</p>
            <div className="flex flex-wrap gap-3">
              {content.mindset.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700"
                >
                  {tag}
                </span>
              ))}
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
            {content.ctaLabel}
          </button>
          {isCompleted && (
            <p className="text-sm text-primary-600 mt-3">Marked as completed.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
