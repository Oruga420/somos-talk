'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  ArrowRight,
  Target,
  Zap,
  RefreshCw
} from 'lucide-react'

interface PromptStackingSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

export default function PromptStackingSlide({ onComplete, onDownload, completedSections }: PromptStackingSlideProps) {
  const isCompleted = completedSections.includes('prompt-stacking')

  const concepts = [
    {
      title: "¿Qué es Prompt Stacking?",
      description: "Encadenar múltiples prompts para lograr resultados complejos y consistentes",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      details: [
        "Cada prompt tiene un propósito específico",
        "Los resultados se alimentan al siguiente prompt",
        "Permite crear flujos de trabajo automatizados",
        "Mejora la calidad y consistencia de los resultados"
      ]
    },
    {
      title: "Estructura Básica",
      description: "3 pasos fundamentales para cualquier stack de prompts",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      details: [
        "1. Definición del rol y objetivo",
        "2. Generación del resultado base", 
        "3. Refinamiento o evaluación automática"
      ]
    },
    {
      title: "Tipos de Stacking",
      description: "Diferentes formas de encadenar prompts según tu necesidad",
      icon: <RefreshCw className="w-8 h-8 text-green-500" />,
      details: [
        "Lineal: A → B → C",
        "Condicional: Si X entonces Y, sino Z",
        "Recurrente: Repetir hasta cumplir criterio"
      ]
    }
  ]

  const exampleFlow = [
    {
      step: 1,
      title: "Estratega de Marketing",
      prompt: "Eres un estratega de marketing. Define público objetivo y tono para un restaurante saludable en CDMX.",
      result: "Público: Profesionales 25-40 años, tono: fresco y confiable"
    },
    {
      step: 2,
      title: "Copywriter",
      prompt: "Con base en la respuesta anterior, genera 3 copies publicitarios.",
      result: "3 opciones de copy enfocadas en frescura y salud"
    },
    {
      step: 3,
      title: "Evaluador",
      prompt: "Evalúa los 3 copies y devuelve solo el más persuasivo.",
      result: "El copy más efectivo con justificación"
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
            🔗 Prompt Stacking 101
          </h1>
          <p className="slide-subtitle text-primary-600">
            Encadena prompts como un profesional
          </p>
        </motion.div>

        {/* Concepts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-12">Conceptos Fundamentales</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="card group hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {concept.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{concept.title}</h3>
                  <p className="text-gray-600 mb-4">{concept.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {concept.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Example Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Ejemplo Práctico: Campaña de Restaurante</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {exampleFlow.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  className="relative"
                >
                  <div className="card">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-3 text-primary-600">
                          {step.title}
                        </h3>
                        <div className="bg-gray-50 rounded-lg p-4 mb-3">
                          <p className="text-sm text-gray-700 font-mono">
                            "{step.prompt}"
                          </p>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-sm text-green-800">
                            <strong>Resultado:</strong> {step.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < exampleFlow.length - 1 && (
                    <div className="flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Mejores Prácticas</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-green-600">✅ Haz esto</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Sé específico en cada prompt</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Define criterios claros de evaluación</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Incluye contexto relevante</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Establece límites y restricciones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Pide justificaciones para decisiones</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-red-600">❌ Evita esto</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-700">Prompts demasiado vagos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-700">Falta de criterios de evaluación</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-700">No incluir contexto suficiente</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-700">Saltarse pasos del proceso</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-gray-700">No validar resultados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action buttons removed for presentation mode */}
      </div>
    </div>
  )
}
