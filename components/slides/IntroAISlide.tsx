'use client'

import { motion } from 'framer-motion'
import { Target, Users, ListChecks, ArrowRight } from 'lucide-react'

interface QuickCheckSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const QUESTIONS = [
  '¿Quién ya usa ChatGPT o Copilot regularmente?',
  '¿Quién ha construido prompts largos o usa contextos guardados?',
  '¿Quién ha conectado IA con datos o procesos reales?',
]

export default function IntroAISlide({ onComplete, completedSections }: QuickCheckSlideProps) {
  const isCompleted = completedSections.includes('quick-check')

  const handleComplete = () => {
    if (!isCompleted) {
      onComplete('quick-check')
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
          <h1 className="slide-title">Quick Check · Dónde está la clase respecto a IA</h1>
          <p className="slide-subtitle text-primary-600">
            Objetivo: calibrar rápido el nivel del grupo para ajustar el ritmo y los ejemplos.
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
              <Target className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Cómo correrlo</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Usa una slide interactiva (tipo Mentimeter) o un simple show of hands. En menos de 3 minutos
              tenemos un mapa del grupo y ajustamos ejemplos y profundidad.
            </p>
            <ul className="space-y-3 text-gray-700">
              {QUESTIONS.map((question) => (
                <li key={question} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary-500 mt-1 shrink-0" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold">Lectura rápida</h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              No importa el punto de partida. El mensaje es claro: hoy se llevan patrones que escalan en cualquier nivel.
              Con base en las respuestas, enlazamos ejemplos junior o senior sin perder a nadie.
            </p>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 leading-relaxed">
              Frame explícito:
              <br />
              <strong>La IA no reemplaza tu expertise, la amplifica.</strong> Diseñamos contexto y usamos workflows para
              que el criterio humano escale sin perder control.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card bg-gradient-to-br from-primary-50 to-white"
        >
          <div className="flex items-center gap-3 mb-3">
            <ListChecks className="w-5 h-5 text-primary-600" />
            <h3 className="text-lg font-semibold">Tips para el facilitador</h3>
          </div>
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>• Pide ejemplos concretos cuando alguien ya conecta IA con datos reales.</li>
            <li>• Si hay resistencia, recuerda que veremos demos tácticas y métricas reales.</li>
            <li>• Usa los resultados para decidir qué demos corremos en vivo.</li>
          </ul>
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
            Quick Check listo
          </button>
          {isCompleted && (
            <p className="text-sm text-primary-600 mt-3">Marcado como completado.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
