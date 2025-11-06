'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Link2, ShieldCheck, BarChart3, Bot, PlayCircle } from 'lucide-react'

interface SlackBotSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const BENEFITS = [
  'Responde preguntas sobre políticas, documentos y procesos internos sin salir de Slack.',
  'Aprende del contexto del canal y respeta permisos/roles.',
  'Reduce fricción con HR, Legal y Compliance en preguntas repetitivas.',
]

const STACK = [
  { title: 'Middleware', detail: 'LangChain + Python (FastAPI) para orquestar prompts y memoria.' },
  { title: 'Conectores', detail: 'Slack Events API + OpenAI API + repos internos (SharePoint, Confluence).' },
  { title: 'Control', detail: 'Logs, límites por request y fallback a agente humano cuando hay baja confianza.' },
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
          <h1 className="slide-title">Slack Bot · FAQ vivo para equipos internos</h1>
          <p className="slide-subtitle text-primary-600">
            Propósito: reducir fricción diaria conectando Slack con OpenAI vía middleware seguro.
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
              <MessageSquare className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Qué resuelve</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              {BENEFITS.map((benefit) => (
                <li key={benefit}>• {benefit}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 leading-relaxed">
              Métrica interna: ~30% menos tickets de “¿dónde está…?” en equipos con alto volumen operativo.
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Link2 className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Arquitectura base</h2>
            </div>
            <div className="space-y-3">
              {STACK.map((layer) => (
                <div key={layer.title} className="rounded-lg bg-white border border-slate-200 p-4">
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">{layer.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{layer.detail}</p>
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
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-primary-600" />
              Guardrails
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Permisos alineados a canales, filtros de PII y auditoría de prompts/respuestas.
            </p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-slate-800">
              <BarChart3 className="w-4 h-4 text-primary-600" />
              Medición
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dashboards de adopción: cuántas preguntas resueltas, temas más buscados y tiempo ahorrado.
            </p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-slate-800">
              <Bot className="w-4 h-4 text-primary-600" />
              Demo sugerida
            </div>
            <p className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
              <PlayCircle className="w-4 h-4 text-primary-600 mt-1 shrink-0" />
              <span>Consulta “¿Cuál es la política de viajes?” y “¿Dónde está el template de contrato proveedor?” para mostrar precisión contextual.</span>
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
            className="px-6 py-3 rounded-lg bg-primary-600 text-white shadow hover:bg-primary-700 transition-colors"
          >
            Slack bot revisado
          </button>
          {isCompleted && (
            <p className="text-sm text-primary-600 mt-3">Marcado como completado.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
