'use client'

import { motion } from 'framer-motion'
import { Hammer, Wrench, Gauge, ServerCog } from 'lucide-react'

interface CustomToolsSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  onDownloadPresentation?: () => void
  completedSections: string[]
}

const TOOL_HIGHLIGHTS = [
  'Lightweight front-ends (Streamlit, FastAPI, internal apps) with embedded AI.',
  'Users upload a spreadsheet; the tool cleans and standardises the data.',
  'Outputs are Snowflake-ready or CSV with automatic validations.',
]

const MODEL_GAINS = [
  'Fine-tuned model (OpenAI or Bedrock) trained on labelled internal data.',
  'Understands our technical vocabulary and inconsistent part descriptions.',
  'Delivers ~25% higher accuracy versus zero-shot GPT and saves manual QA hours.',
]

export default function VibeCodingSlide({ onComplete, completedSections }: CustomToolsSlideProps) {
  const isCompleted = completedSections.includes('custom-tools')

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
          <h1 className="slide-title">Custom Tools + Fine-tuned Models</h1>
          <p className="slide-subtitle text-primary-600">
            When a chatbot is not enough, we ship lightweight UIs or bespoke models that guarantee the outcome.
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
              <Hammer className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Custom tools build</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              {TOOL_HIGHLIGHTS.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 leading-relaxed">
              Outcome: less manual effort, fewer errors, consistent deliverables for downstream analytics.
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <ServerCog className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Reference architecture</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              <li>- Lightweight front-end for upload and validation.</li>
              <li>- Python services orchestrate cleaning, enrichment, and generation with AI.</li>
              <li>- Native integrations push results into Snowflake or internal APIs.</li>
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
              {MODEL_GAINS.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="card bg-gradient-to-br from-primary-50 to-white">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Case in production</h2>
            </div>
            <p className="text-sm text-primary-800 leading-relaxed">
              Input vs output: "500 rows - 30 seconds - clean schema."
              The fine-tuned model normalises supplier part descriptions and returns Snowflake-ready attributes.
            </p>
            <div className="mt-4 rounded-lg bg-white/80 border border-primary-200 p-4 text-sm text-primary-700 leading-relaxed">
              Data Quality reports multiple hours saved each week on manual validation.
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
            Custom tools covered
          </button>
          {isCompleted && (
            <p className="text-sm text-primary-600 mt-3">Marked as completed.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
