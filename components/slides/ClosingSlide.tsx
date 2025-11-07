'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Share2, Download, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

import { slideContent } from '@/lib/presentationContent'

interface ClosingSlideProps {
  onComplete: (sectionId: string) => void
  completedSections: string[]
}

export default function ClosingSlide({ onComplete, completedSections }: ClosingSlideProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const content = slideContent.closing
  const isCompleted = completedSections.includes('closing')

  const handleComplete = () => {
    if (!isCompleted) {
      onComplete('closing')
    }
  }

  const handleDownload = async () => {
    try {
      setIsDownloading(true)
      const response = await fetch('/api/presentation')

      if (!response.ok) {
        throw new Error('Failed to generate presentation PDF')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = content.pdfFileName
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
      toast.success('Presentación descargada')
    } catch (error) {
      toast.error('No se pudo generar el PDF. Intenta nuevamente.')
    } finally {
      setIsDownloading(false)
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            {content.reflection}
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
              <Sparkles className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h2 className="text-lg font-semibold mb-1">Primary CTA</h2>
                <p className="text-sm text-slate-700 leading-relaxed">{content.primaryCta}</p>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">{content.primaryDescription}</p>
              </div>
            </div>
            <button
              className="inline-flex items-center gap-2 self-start md:self-center px-5 py-3 rounded-lg bg-primary-600 text-white shadow hover:bg-primary-700 transition-colors"
              onClick={handleComplete}
            >
              {content.confirmLabel}
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
            <h3 className="text-sm font-semibold text-slate-800 mb-2">Next step</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{content.feedback.nextStep}</p>
          </div>
          <div className="card">
            <h3 className="text-sm font-semibold text-slate-800 mb-2">Feedback loop</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{content.feedback.feedbackLoop}</p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-slate-800">
              <Share2 className="w-4 h-4 text-primary-600" />
              {content.shareTitle}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{content.shareDescription}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex justify-center"
        >
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-600 text-white shadow transition-colors disabled:cursor-not-allowed disabled:opacity-75 hover:bg-primary-700"
          >
            {isDownloading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            {isDownloading ? content.generatingLabel : content.downloadLabel}
          </button>
        </motion.div>

        {isCompleted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-primary-600 text-center"
          >
            {content.completedMessage}
          </motion.p>
        )}
      </div>
    </div>
  )
}
