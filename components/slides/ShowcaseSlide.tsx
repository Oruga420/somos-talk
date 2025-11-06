'use client'

import { motion } from 'framer-motion'
import { Mic2, UserSquare, Sparkles, Code2 } from 'lucide-react'

interface ShowcaseSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const HIGHLIGHTS = [
  {
    title: 'ElevenLabs',
    icon: <Mic2 className="w-6 h-6 text-primary-600" />,
    description: 'Text-to-Speech con voces naturales en español e inglés.',
    bullets: [
      'Ideal para demos rápidas, training videos o contenido inclusivo.',
      'Demo sugerida: tu voz generada leyendo una línea técnica.'
    ],
  },
  {
    title: 'HeyGen',
    icon: <UserSquare className="w-6 h-6 text-primary-600" />,
    description: 'Video avatars con lip-sync preciso y soporte multi-idioma.',
    bullets: [
      'Usa texto o audio para generar un presentador digital.',
      'Demo: mismo guion, dos idiomas (ES/EN) para onboarding o marketing.'
    ],
  },
  {
    title: 'Google AI Studio (Vibe Code)',
    icon: <Sparkles className="w-6 h-6 text-primary-600" />,
    description: 'Entrena modelos que imitan tu tono y estilo de escritura.',
    bullets: [
      'Caso: tono “friendly but concise” para correos internos.',
      'Demo: comparar salida neutral vs. salida con tu vibe.'
    ],
  },
  {
    title: 'VS Code Plugins (Codex, Copilot, etc.)',
    icon: <Code2 className="w-6 h-6 text-primary-600" />,
    description: 'IA integrada para explicar, refactorizar o documentar código.',
    bullets: [
      'Ejemplo: “explica esta función” → docstring + tests sugeridos.',
      'Onboarding más rápido para devs nuevos sin frenar entregas.'
    ],
  },
]

export default function ShowcaseSlide({ onComplete, completedSections }: ShowcaseSlideProps) {
  const isCompleted = completedSections.includes('showcase')

  const handleComplete = () => {
    if (!isCompleted) {
      onComplete('showcase')
    }
  }

  return (
    <div className="slide-container">
      <div className="slide-content space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="slide-title">Showcase · Creativo, útil y divertido</h1>
          <p className="slide-subtitle text-primary-600">
            Objetivo: probar que IA no sólo automatiza backend — también impulsa experiencias.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="card h-full">
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={handleComplete}
            className="px-6 py-3 rounded-lg bg-primary-600 text-white shadow hover:bg-primary-700 transition-colors"
          >
            Showcase mostrado
          </button>
          {isCompleted && (
            <p className="text-sm text-primary-600 mt-3">Marcado como completado.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
