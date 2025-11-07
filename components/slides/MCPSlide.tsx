'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Link2, ShieldCheck, BarChart3, Bot, PlayCircle } from 'lucide-react'

interface SlackBotSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const BENEFITS = [
  'Answers policy, document, and process questions directly inside Slack, Teams, WhatsApp, or Discord.',
  'Understands channel context, emojis, and permissions so responses stay human and on-brand.',
  'Cuts repetitive questions for HR, Legal, Compliance, and ops crews—less “where is…?” noise.',
]

const STACK = [
  { title: 'Middleware', detail: 'LangChain with Python (FastAPI) orchestrates prompts, memory, and routing.' },
  {
    title: 'Connectors',
    detail:
      'Slack & Teams bot APIs, WhatsApp Business, Discord webhooks, plus licensed OpenAI/Gemini endpoints (these paid tiers also ship freemium options).',
  },
  { title: 'Control', detail: 'Request limits, logging, and human escalation when confidence drops below threshold.' },
]

export default function MCPSlide({ onComplete, completedSections }: SlackBotSlideProps) {
  const isCompleted = completedSections.includes('slack-bot')

  const handleComplete = () => {
    if (!isCompleted) {
      onComplete('slack-bot')
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
          <h1 className="slide-title">Comms Bot - Slack · Teams · WhatsApp · Discord</h1>
          <p className="slide-subtitle text-accent-500">
            Purpose: remove daily friction by wiring chat platforms to licensed AI backends (with freemium moats if you need to prototype).
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
              <MessageSquare className="w-5 h-5 text-accent-600" />
              <h2 className="text-lg font-semibold">What it solves</h2>
            </div>
            <ul className="space-y-3 text-accent-600 leading-relaxed">
              {BENEFITS.map((benefit) => (
                <li key={benefit}>- {benefit}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-primary-200 bg-primary-50 p-4 text-sm text-accent-600 leading-relaxed">
              Internal metric: roughly 30% fewer "where is that file?" tickets in mixed chat environments.
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Link2 className="w-5 h-5 text-accent-600" />
              <h2 className="text-lg font-semibold">Reference architecture</h2>
            </div>
            <div className="space-y-3">
              {STACK.map((layer) => (
                <div key={layer.title} className="rounded-lg bg-white border border-primary-200 p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-accent-700 mb-1">{layer.title}</h3>
                  <p className="text-sm text-accent-600 leading-relaxed">{layer.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-4"
        >
          <div className="card">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-accent-700">
              <ShieldCheck className="w-4 h-4 text-secondary-500" />
              Guardrails
            </div>
            <p className="text-sm text-accent-600 leading-relaxed">
              Channel-aware permissions, PII filters, audit trail for prompts and responses—even when the bot hops between Slack, Teams, WhatsApp, or Discord.
            </p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-accent-700">
              <BarChart3 className="w-4 h-4 text-secondary-500" />
              Measurement
            </div>
            <p className="text-sm text-accent-600 leading-relaxed">
              Adoption dashboards: resolved questions, hot topics, GIF usage, and time saved per team.
            </p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-accent-700">
              <Bot className="w-4 h-4 text-secondary-500" />
              Demo idea
            </div>
            <p className="text-sm text-accent-600 leading-relaxed flex items-start gap-2">
              <PlayCircle className="w-4 h-4 text-secondary-500 mt-1 shrink-0" />
              <span>Ask "What is our travel policy?" and "Where is the vendor contract template?" to show contextual accuracy.</span>
            </p>
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
            className="px-6 py-3 rounded-lg bg-secondary-500 text-white shadow-lg shadow-secondary-500/30 hover:bg-secondary-400 transition-colors"
          >
            Slack bot covered
          </button>
          {isCompleted && (
            <p className="text-sm text-accent-500 mt-3">Marked as completed.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
