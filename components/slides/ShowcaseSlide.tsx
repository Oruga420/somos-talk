'use client'

import { motion } from 'framer-motion'
import { Mic2, UserSquare, Sparkles, Code2 } from 'lucide-react'

interface ShowcaseSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const HIGHLIGHTS = [
  {
    title: 'ElevenLabs',
    icon: <Mic2 className="w-6 h-6 text-primary-600" />,
    description: 'Natural text-to-speech in English and Spanish.',
    bullets: [
      'Perfect for fast demos, training videos, or inclusive content.',
      'Demo idea: generate your voice reading a technical line.'
    ],
  },
  {
    title: 'HeyGen',
    icon: <UserSquare className="w-6 h-6 text-primary-600" />,
    description: 'Lip-synced video avatars with multilingual support.',
    bullets: [
      'Use text or audio to create a digital presenter.',
      'Demo idea: same script rendered in English and Spanish for onboarding.'
    ],
  },
  {
    title: 'Google AI Studio (Vibe Code)',
    icon: <Sparkles className="w-6 h-6 text-primary-600" />,
    description: 'Train small models to copy your tone and writing style.',
    bullets: [
      'Example: friendly-but-concise emails for internal comms.',
      'Demo idea: compare neutral output vs. your vibe-coded version.'
    ],
  },
  {
    title: 'VS Code Plugins (Codex, Copilot, etc.)',
    icon: <Code2 className="w-6 h-6 text-primary-600" />,
    description: 'Embedded AI to explain, refactor, or document code.',
    bullets: [
      'Example: "explain this function" -> docstring plus suggested tests.',
      'Helps new engineers ramp up without slowing the team down.'
    ],
  },
]

export default function ShowcaseSlide({ onComplete, completedSections }: ShowcaseSlideProps) {
  const isCompleted = completedSections.includes('showcase')

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
          <h1 className="slide-title">Showcase - Creative, Useful, Fun</h1>
          <p className="slide-subtitle text-primary-600">
            Goal: prove that AI is not only automation, it can elevate experiences too.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="card h-full">
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
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
            Showcase covered
          </button>
          {isCompleted && (
            <p className="text-sm text-primary-600 mt-3">Marked as completed.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
