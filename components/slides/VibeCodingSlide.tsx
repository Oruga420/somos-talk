'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Palette,
  Type,
  Layers,
  Wand2
} from 'lucide-react'

interface VibeCodingSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

export default function VibeCodingSlide({ onComplete, onDownload, completedSections }: VibeCodingSlideProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const isCompleted = completedSections.includes('vibe-coding')

  const vibeSteps = [
    {
      title: "Tono",
      description: "Define la personalidad y actitud de tu marca",
      icon: <Type className="w-8 h-8 text-blue-500" />,
      examples: [
        "Profesional pero accesible",
        "Casual y divertido",
        "Autoritario y directo",
        "Empático y comprensivo"
      ]
    },
    {
      title: "Forma",
      description: "Establece el estilo de comunicación",
      icon: <Layers className="w-8 h-8 text-green-500" />,
      examples: [
        "Párrafos cortos y directos",
        "Uso de emojis moderado",
        "Preguntas retóricas",
        "Listas y bullet points"
      ]
    },
    {
      title: "Paleta Verbal",
      description: "Selecciona palabras y frases características",
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      examples: [
        "Términos técnicos específicos",
        "Jerga de la industria",
        "Frases motivacionales",
        "Expresiones únicas de marca"
      ]
    },
    {
      title: "Estructura Fija",
      description: "Define formatos y patrones consistentes",
      icon: <Wand2 className="w-8 h-8 text-orange-500" />,
      examples: [
        "Saludo + Propuesta + CTA",
        "Problema + Solución + Beneficio",
        "Historia + Lección + Acción",
        "Datos + Insight + Recomendación"
      ]
    }
  ]

  const vibeExamples = [
    {
      name: "Tech Startup",
      tone: "Innovador, dinámico, disruptivo",
      context: "Comunicación con inversores y usuarios",
      example: "🚀 Revolucionamos la industria con IA que piensa como tú. ¿Listo para el futuro? #InnovationFirst"
    },
    {
      name: "Consultoría Profesional",
      tone: "Experto, confiable, estratégico",
      context: "Propuestas y reportes ejecutivos",
      example: "Nuestro análisis revela oportunidades de optimización del 23%. Implementación recomendada: Q2 2024."
    },
    {
      name: "Coach Personal",
      tone: "Motivacional, empático, transformador",
      context: "Contenido inspiracional y seguimiento",
      example: "Tu transformación comienza con una decisión. Hoy es el día. ¿Qué vas a cambiar primero? ✨"
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
            🎨 Vibe Coding 101
          </h1>
          <p className="slide-subtitle text-primary-600">
            Enseña a la IA tu estilo único
          </p>
        </motion.div>

        {/* What is Vibe Coding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">¿Qué es Vibe Coding?</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Personaliza la IA a tu Estilo</h3>
              <p className="text-lg text-gray-600 mb-6">
                Vibe Coding es enseñar a la IA tu estilo, tono, estructura y reglas de comunicación 
                para que genere contenido que suene como tú.
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <strong>Tono</strong><br />
                  Personalidad única
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong>Forma</strong><br />
                  Estilo de comunicación
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <strong>Vocabulario</strong><br />
                  Palabras características
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong>Estructura</strong><br />
                  Patrones consistentes
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vibe Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Los 4 Pilares del Vibe Coding</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {vibeSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentStep ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="card">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {vibeSteps[currentStep].icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{vibeSteps[currentStep].title}</h3>
                <p className="text-gray-600">{vibeSteps[currentStep].description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Ejemplos:</h4>
                  <ul className="space-y-2">
                    {vibeSteps[currentStep].examples.map((example, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 Consejo:</h4>
                  <p className="text-sm text-gray-600">
                    {currentStep === 0 && "El tono debe ser consistente en todos tus canales de comunicación."}
                    {currentStep === 1 && "La forma debe facilitar la lectura y comprensión de tu audiencia."}
                    {currentStep === 2 && "Usa palabras que tu audiencia reconozca y valore."}
                    {currentStep === 3 && "La estructura debe ser predecible pero no repetitiva."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vibe Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Ejemplos de Vibes</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {vibeExamples.map((vibe, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="card group hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{vibe.name}</h3>
                <div className="space-y-3">
                  <div>
                    <strong className="text-sm text-gray-600">Tono:</strong>
                    <p className="text-sm text-gray-700">{vibe.tone}</p>
                  </div>
                  <div>
                    <strong className="text-sm text-gray-600">Contexto:</strong>
                    <p className="text-sm text-gray-700">{vibe.context}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <strong className="text-sm text-gray-600">Ejemplo:</strong>
                    <p className="text-sm text-gray-700 mt-1 italic">"{vibe.example}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vibe Creation Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Proceso de Creación de Vibes</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">📝 Paso a Paso</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm mr-4 mt-1 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Define tu tono</h4>
                      <p className="text-sm text-gray-600">¿Cómo quieres que suene tu marca?</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm mr-4 mt-1 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Establece la forma</h4>
                      <p className="text-sm text-gray-600">¿Cómo estructuras tu comunicación?</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm mr-4 mt-1 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Crea tu paleta verbal</h4>
                      <p className="text-sm text-gray-600">¿Qué palabras te caracterizan?</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm mr-4 mt-1 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Define estructuras fijas</h4>
                      <p className="text-sm text-gray-600">¿Qué patrones usas consistentemente?</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-green-600">💡 Consejos Prácticos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Analiza tu audiencia objetivo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Revisa contenido que admiras</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Prueba diferentes variaciones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Mantén coherencia entre canales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Evoluciona con el tiempo</span>
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
