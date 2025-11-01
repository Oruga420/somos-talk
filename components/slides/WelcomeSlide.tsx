'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Zap,
  Brain,
  Code,
  Palette,
  Target
} from 'lucide-react'

interface WelcomeSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

export default function WelcomeSlide({ onComplete, onDownload, completedSections }: WelcomeSlideProps) {
  const isCompleted = completedSections.includes('welcome')

  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="slide-title animate-bounce-gentle">
            🚀 AI Bootcamp
          </h1>
          {/* Subtítulo retirado según solicitud */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Aprende a dominar la IA como un profesional. Prompt Stacking, MCPs, Agents y Vibe Coding 
            en una experiencia práctica y conversacional.
          </p>
        </motion.div>

        {/* What You'll Learn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-12">¿Qué aprenderás hoy?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prompt Stacking</h3>
              <p className="text-gray-600">
                Encadena prompts para lograr resultados complejos y consistentes
              </p>
            </div>

            <div className="card text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">MCPs</h3>
              <p className="text-gray-600">
                Conecta ChatGPT con herramientas externas y automatiza tareas
              </p>
            </div>

            <div className="card text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agents</h3>
              <p className="text-gray-600">
                Crea sistemas de IA que toman decisiones autónomas
              </p>
            </div>

            <div className="card text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Palette className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vibe Coding</h3>
              <p className="text-gray-600">
                Enseña a la IA tu estilo y personalidad única
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technical Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Checklist Técnico</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  Requisitos Mínimos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>ChatGPT Plus o modelo GPT-4 activo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Navegador con pestañas múltiples</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Acceso a Google Sheets o Notion</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Micrófono (opcional para interacción)</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Target className="w-6 h-6 text-blue-500 mr-2" />
                  Lo que Obtendrás
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Comprensión operativa de cada técnica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Flujos listos para replicar</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Plantillas descargables</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Ejercicios prácticos guiados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cronograma retirado: ahora lo muestra la barra lateral fija */}

        {/* Botones y leyenda retirados según solicitud */}
      </div>
    </div>
  )
}
