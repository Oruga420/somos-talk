'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Share2 } from 'lucide-react'

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
          <h1 className="slide-title">Cierre · Escala tu criterio con IA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            La IA no reemplaza el criterio humano. Lo escala. 
            Estructura el contexto, automatiza lo repetitivo y deja más espacio para pensar.
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
                <h2 className="text-lg font-semibold mb-1">CTA principal</h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  👉 Join La Sesh — sesiones abiertas, plantillas y workflows reales.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  Comparte los playbooks, itera con la comunidad y trae tus casos para afinarlos en vivo.
                </p>
              </div>
            </div>
            <button
              className="inline-flex items-center gap-2 self-start md:self-center px-5 py-3 rounded-lg bg-primary-600 text-white shadow hover:bg-primary-700 transition-colors"
              onClick={handleComplete}
            >
              Confirmar cierre
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
            <h3 className="text-sm font-semibold text-slate-800 mb-2">Próximo paso</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Documenta qué parte del stack puedes pilotear esta semana.
            </p>
          </div>
          <div className="card">
            <h3 className="text-sm font-semibold text-slate-800 mb-2">Feedback loop</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Trae resultados a La Sesh para ajustar prompts, herramientas o guardrails.
            </p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-slate-800">
              <Share2 className="w-4 h-4 text-primary-600" />
              Comparte la charla
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Envía la presentación al equipo. Mantén viva la conversación y el momentum.
            </p>
          </div>
        </motion.div>

        {isCompleted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-primary-600 text-center"
          >
            Marcado como completado. ¡Gracias!
          </motion.p>
        )}
      </div>
    </div>
  )
}
