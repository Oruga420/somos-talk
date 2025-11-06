'use client'

import { motion } from 'framer-motion'
import { GitBranch, FileText, ShieldCheck, BookOpen } from 'lucide-react'

interface AgenticSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const USE_CASES = [
  {
    title: 'Legal',
    detail: 'Resume contratos o políticas externas. Identifica riesgos, cláusulas críticas y faltantes.'
  },
  {
    title: 'Regulatory',
    detail: 'Normaliza requisitos de reportes. Genera matriz de cumplimiento con trazabilidad.'
  },
  {
    title: 'Finance',
    detail: 'Agrupa costos o riesgos por categoría y entrega reportes listos para revisión.'
  },
]

const PIPELINE = [
  'Buscar material relevante (PDFs, carpetas internas, APIs).',
  'Resumir por sección con estructura homogénea.',
  'Analizar contra políticas internas y generar insight accionable.',
  'Armar salida estructurada (JSON, tabla o presentación).',
]

export default function AgentsSlide({ onComplete, completedSections }: AgenticSlideProps) {
  const isCompleted = completedSections.includes('agentic-workflows')

  const handleComplete = () => {
    if (!isCompleted) {
      onComplete('agentic-workflows')
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
          <h1 className="slide-title">Agentic Workflows · Legal, Regulatory & Finance</h1>
          <p className="slide-subtitle text-primary-600">
            Objetivo: automatizar tareas analíticas repetitivas con trazabilidad completa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card"
        >
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-semibold">Flujo de varios pasos</h2>
          </div>
          <ul className="space-y-2 text-gray-700 leading-relaxed">
            {PIPELINE.map((step) => (
              <li key={step}>• {step}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            Herramientas: LangGraph o Airflow para orquestar, APIs internas como fuentes, y revisores humanos como último paso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {USE_CASES.map((useCase) => (
            <div key={useCase.title} className="card">
              <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-slate-800">
                <BookOpen className="w-4 h-4 text-primary-600" />
                {useCase.title}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{useCase.detail}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="card bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-semibold">Ejemplo</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              “Lee estos 3 PDFs regulatorios, genera matriz de requisitos y señala cambios críticos”.
              El agente produce un CSV listo para revisión legal en menos de 5 minutos.
            </p>
          </div>
          <div className="card bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-semibold">Guardrails</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              <li>• Límites de alcance por agente y logs centralizados.</li>
              <li>• Evidencia de fuentes citadas en cada salida.</li>
              <li>• Revisión humana obligatoria antes de decisiones finales.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={handleComplete}
            className="px-6 py-3 rounded-lg bg-primary-600 text-white shadow hover:bg-primary-700 transition-colors"
          >
            Agentic workflows listos
          </button>
          {isCompleted && (
            <p className="text-sm text-primary-600 mt-3">Marcado como completado.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
