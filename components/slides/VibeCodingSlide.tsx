'use client'

import { motion } from 'framer-motion'
import { Hammer, Wrench, Gauge, ServerCog } from 'lucide-react'

interface CustomToolsSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const TOOL_HIGHLIGHTS = [
  'Pequeños frontends (Streamlit, FastAPI, apps internas) con IA embebida.',
  'El usuario carga un Excel, la herramienta limpia y estandariza datos.',
  'Salida directa en formato Snowflake-ready o CSV con validaciones automáticas.',
]

const MODEL_GAINS = [
  'Modelo fine-tune (OpenAI o Bedrock) con datos etiquetados internos.',
  'Habla nuestro idioma técnico: entiende descripciones inconsistentes de piezas.',
  'Precisión +25% versus GPT genérico zero-shot. Ahorra horas de validación manual.',
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
            Cuando un bot no es suficiente, construimos UI ligera o modelos propios para asegurar resultados.
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
              <h2 className="text-lg font-semibold">Custom Tools Build</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              {TOOL_HIGHLIGHTS.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 leading-relaxed">
              Resultado: menos trabajo manual, menos errores y entregables homogéneos para downstream analytics.
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <ServerCog className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Arquitectura básica</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              <li>• Frontend ligero (Streamlit o React interno) para carga y validación.</li>
              <li>• Servicios en Python que orquestan limpieza y generación con IA.</li>
              <li>• Integraciones nativas a Snowflake o APIs internas para publicar resultados.</li>
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
              <h2 className="text-lg font-semibold">Fine-tuned Models</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              {MODEL_GAINS.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="card bg-gradient-to-br from-primary-50 to-white">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Caso real</h2>
            </div>
            <p className="text-sm text-primary-800 leading-relaxed">
              Input vs Output → “500 lines → 30 sec → clean schema”. 
              El modelo fine-tune entiende descripciones inconsistentes de piezas y devuelve atributos normalizados listos para Snowflake.
            </p>
            <div className="mt-4 rounded-lg bg-white/80 border border-primary-200 p-4 text-sm text-primary-700 leading-relaxed">
              Equipo de Data Quality reporta ahorro neto de varias horas semanales de validación manual.
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
            Custom tools & modelos listos
          </button>
          {isCompleted && (
            <p className="text-sm text-primary-600 mt-3">Marcado como completado.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
