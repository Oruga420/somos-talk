'use client'

import { motion } from 'framer-motion'
import { Mic2, UserSquare, Sparkles, Code2 } from 'lucide-react'

import { slideContent } from '@/lib/presentationContent'

interface ShowcaseSlideProps {
  onComplete: (sectionId: string) => void
  completedSections: string[]
}

const highlightIcons: Record<string, JSX.Element> = {
  elevenlabs: <Mic2 className="w-6 h-6 text-primary-600" />,
  heygen: <UserSquare className="w-6 h-6 text-primary-600" />,
  'vibe-code': <Sparkles className="w-6 h-6 text-primary-600" />,
  'vs-code': <Code2 className="w-6 h-6 text-primary-600" />,
}

export default function ShowcaseSlide({ onComplete, completedSections }: ShowcaseSlideProps) {
  const isCompleted = completedSections.includes('showcase')
  const content = slideContent.showcase

  const handleComplete = () => {
    if (!isCompleted) {
      onComplete('showcase')
    }
  }

  return (
    <div className="slide-container">
      <div className="slide-content space-y-12">
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
          {content.highlights.map((item) => (
            <div key={item.id} className="card h-full">
              <div className="flex items-center gap-3 mb-3">
                {highlightIcons[item.id] ?? <Sparkles className="w-6 h-6 text-primary-600" />}
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
