'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Brain,
  Search,
  Image,
  Video,
  Mic,
  Zap
} from 'lucide-react'

interface IntroAISlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

export default function IntroAISlide({ onComplete, onDownload, completedSections }: IntroAISlideProps) {
  const isCompleted = completedSections.includes('intro-ai')

  const aiTypes = [
    {
      title: "Modelos de Lenguaje (LLMs)",
      examples: "ChatGPT, Claude, Gemini",
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      description: "Generan texto conversacional y creativo"
    },
    {
      title: "Modelos de Búsqueda",
      examples: "Perplexity, You.com",
      icon: <Search className="w-8 h-8 text-green-500" />,
      description: "Buscan y sintetizan información actualizada"
    },
    {
      title: "Modelos Generativos de Imagen",
      examples: "Midjourney, DALL-E, NanoBanana",
      icon: <Image className="w-8 h-8 text-purple-500" />,
      description: "Crean imágenes a partir de descripciones"
    },
    {
      title: "Modelos Generativos de Video",
      examples: "Runway, Pika Labs, Sora, Veo",
      icon: <Video className="w-8 h-8 text-pink-500" />,
      description: "Generan y editan video con IA"
    },
    {
      title: "Modelos de Voz/Audio",
      examples: "ElevenLabs, Suno, Udio",
      icon: <Mic className="w-8 h-8 text-orange-500" />,
      description: "Generan audio, música y voces sintéticas"
    },
    {
      title: "Modelos de Automatización",
      examples: "Zapier, Make, ChatGPT Automations",
      icon: <Zap className="w-8 h-8 text-red-500" />,
      description: "Automatizan tareas y flujos de trabajo"
    }
  ]

  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="slide-title">
            🤖 Introducción a la IA
          </h1>
          <p className="slide-subtitle text-primary-600">
            Qué es y qué no es la inteligencia artificial
          </p>
        </motion.div>

        {/* Custom GPTs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-5xl mx-auto">
            <div className="card">
              <h2 className="section-title mb-4">GPTs personalizados: crea tu propio asistente</h2>
              <p className="text-gray-700 mb-6">
                Los GPTs personalizados son versiones de ChatGPT configuradas para un objetivo específico. 
                Pueden tener instrucciones, archivos adjuntos y acciones conectadas a APIs externas.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Elementos clave</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary-500 mr-3 mt-2" />
                      <div>
                        <strong>Nombre y descripción</strong>
                        <div className="text-gray-600 text-sm">Define su propósito.</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary-500 mr-3 mt-2" />
                      <div>
                        <strong>Instrucciones</strong>
                        <div className="text-gray-600 text-sm">Cómo debe comportarse.</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary-500 mr-3 mt-2" />
                      <div>
                        <strong>Archivos</strong>
                        <div className="text-gray-600 text-sm">Base de conocimiento (PDFs, manuales, políticas, etc.).</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary-500 mr-3 mt-2" />
                      <div>
                        <strong>Acciones</strong>
                        <div className="text-gray-600 text-sm">Integraciones con otros servicios (p. ej., enviar correos, buscar info, crear tickets).</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Ejemplo de uso</h4>
                  <p className="text-sm text-gray-700">
                    Un GPT para soporte interno: lee manuales PDF, responde preguntas frecuentes, crea tickets en tu sistema y envía resúmenes por correo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What AI Is and Isn't */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6 text-red-600">❌ Lo que NO es la IA</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-700">No es magia ni reemplazo humano</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-700">No piensa como los humanos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-700">No tiene conciencia o emociones</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-700">No es infalible ni perfecta</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold mb-6 text-green-600">✅ Lo que SÍ es la IA</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Sistema estadístico que aprende patrones</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Aplica patrones a nuevas entradas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Produce salidas relevantes basadas en contexto</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Herramienta que amplifica capacidades humanas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Simple Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="card text-center bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">En palabras simples:</h2>
              <p className="text-xl text-gray-700 mb-4">
                <strong>La IA predice la palabra, imagen o acción más probable según tu contexto.</strong>
              </p>
              <p className="text-lg text-gray-600">
                Es como tener un asistente súper inteligente que ha leído millones de textos, 
                visto millones de imágenes y puede ayudarte a crear contenido basándose en patrones que ha aprendido.
              </p>
            </div>
          </div>
        </motion.div>

        {/* AI Tools Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-12">Tipos de herramientas que usarás</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card group hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-800 mb-1">Ejemplos:</p>
                  <p className="text-sm text-gray-600">{type.examples}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action buttons removed for presentation mode */}
      </div>
    </div>
  )
}
