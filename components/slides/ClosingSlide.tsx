'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Share2, Download } from 'lucide-react'

interface ClosingSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

export default function ClosingSlide({ onComplete, completedSections }: ClosingSlideProps) {
  const isCompleted = completedSections.includes('closing')

  const handleComplete = () => {
    if (!isCompleted) {
      onComplete('closing')
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
          <h1 className="slide-title">Closing - Scale Your Judgment with AI</h1>
          <p className="text-xl text-secondary-200 max-w-3xl mx-auto mt-6 leading-relaxed">
            AI does not replace human judgment; it scales it.
            Structure the context, automate the repetitive work, and protect time for thinking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card bg-gradient-to-br from-primary-50 via-white to-slate-50"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-accent-400 mt-1" />
              <div>
                <h2 className="text-lg font-semibold mb-1">Primary CTA</h2>
                <p className="text-sm text-secondary-100 leading-relaxed">
                  Join La Sesh - open sessions, templates, and real workflows.
                </p>
                <p className="text-sm text-secondary-200 leading-relaxed mt-3">
                  Share your playbooks, iterate with the community, and bring live cases to refine together.
                </p>
              </div>
            </div>
            <button
              className="inline-flex items-center gap-2 self-start md:self-center px-5 py-3 rounded-lg bg-accent-500 text-primary-900 shadow-lg shadow-accent-500/30 hover:bg-accent-400 transition-colors"
              onClick={handleComplete}
            >
              Confirm closing
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-4"
        >
          <div className="card">
            <h3 className="text-sm font-semibold text-secondary-50 mb-2">Next step</h3>
            <p className="text-sm text-secondary-200 leading-relaxed">
              Document which part of the stack you will pilot this week.
            </p>
          </div>
          <div className="card">
            <h3 className="text-sm font-semibold text-secondary-50 mb-2">Feedback loop</h3>
            <p className="text-sm text-secondary-200 leading-relaxed">
              Bring results to La Sesh to tweak prompts, tools, or guardrails.
            </p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-secondary-50">
              <Share2 className="w-4 h-4 text-accent-400" />
              Share the talk
            </div>
            <p className="text-sm text-secondary-200 leading-relaxed">
              Send the deck to the team to keep momentum and conversation alive.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex justify-center"
        >
          <a
            href="/somos-talk-presentation.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-600 text-white shadow hover:bg-primary-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Descargar presentación (PDF)
          </a>
        </motion.div>

        {isCompleted && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-accent-300 text-center">
            Marked as completed. Thank you!
          </motion.p>
        )}
      </div>
    </div>
  )
}
