'use client'

import { motion } from 'framer-motion'
import { Layers, Target, ClipboardList, Sparkles } from 'lucide-react'

interface ContextStackingSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const PRINCIPLES = [
  'No es prompting mágico, es diseño de contexto.',
  'Apilamos lo que el modelo necesita saber: rol, objetivo, estilo, reglas y snippets.',
  'Cada capa reduce ruido y mueve al modelo hacia nuestro dominio.',
]

const FLOW_STEPS = [
  { title: '1. Define rol y objetivo', detail: 'Ejemplo: “Eres analista de cumplimiento. Resume riesgos clave en formato legal breve”.' },
  { title: '2. Apila contexto', detail: 'Incluye tono, estilo de decisión, glosario, plantillas y contraejemplos.' },
  { title: '3. Pide la tarea', detail: 'Con el modelo alineado, solicita el entregable final. Resultado: 40% menos corrección manual.' },
]

export default function PromptStackingSlide({ onComplete, completedSections }: ContextStackingSlideProps) {
  const isCompleted = completedSections.includes('context-stacking')

  const handleComplete = () => {
    if (!isCompleted) {
      onComplete('context-stacking')
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
          <h1 className="slide-title">Context Stacking · Técnica personal</h1>
          <p className="slide-subtitle text-primary-600">
            Enseñamos a la IA cómo pensar antes de pedirle la tarea.
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
              <Layers className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Idea central</h2>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              {PRINCIPLES.map((principle) => (
                <li key={principle}>• {principle}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Before vs After</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Demo en vivo: mostrar un prompt crudo versus el stacked prompt. El stacked reduce
              corrección manual en ~40%. La diferencia está en cómo definimos reglas, ejemplos y formato.
            </p>
            <div className="rounded-lg border border-primary-200 bg-primary-50 p-4 text-sm text-primary-800">
              Clave: la ventana de contexto es un canvas. Todo lo que colocas ahí forma parte del set de instrucciones.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card"
        >
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-semibold">Workflow express</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {FLOW_STEPS.map((step) => (
              <div key={step.title} className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                <h3 className="text-sm font-semibold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.detail}</p>
              </div>
            ))}
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
            Context stacking explicado
          </button>
          {isCompleted && (
            <p className="text-sm text-primary-600 mt-3">Marcado como completado.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
