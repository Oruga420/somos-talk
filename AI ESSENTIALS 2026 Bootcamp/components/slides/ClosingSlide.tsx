'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Target,
  Rocket,
  Users,
  Award,
  Share2,
  BookOpen,
  ArrowRight
} from 'lucide-react'

interface ClosingSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

export default function ClosingSlide({ onComplete, onDownload, completedSections }: ClosingSlideProps) {
  const isCompleted = completedSections.includes('closing')

  const achievements = [
    {
      title: "Prompt Stacking",
      description: "Aprendiste a encadenar prompts para resultados complejos",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      status: completedSections.includes('prompt-stacking')
    },
    {
      title: "MCPs",
      description: "Conectaste ChatGPT con herramientas externas",
      icon: <Rocket className="w-8 h-8 text-green-500" />,
      status: completedSections.includes('mcps')
    },
    {
      title: "Agents",
      description: "Diseñaste sistemas de IA autónomos",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      status: completedSections.includes('agents')
    },
    {
      title: "Vibe Coding",
      description: "Personalizaste la IA con tu estilo único",
      icon: <Award className="w-8 h-8 text-orange-500" />,
      status: completedSections.includes('vibe-coding')
    }
  ]

  const nextSteps = [
    {
      title: "Crea un GPT Personalizado",
      description: "Combina todo lo aprendido en un asistente personalizado",
      action: "Usa prompts, MCPs y tu vibe code para crear tu GPT",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Documenta tus Flujos",
      description: "Guarda tus mejores prácticas en Notion o Sheets",
      action: "Crea una biblioteca de flujos replicables",
      icon: <BookOpen className="w-6 h-6 text-green-500" />
    },
    {
      title: "Comparte tu Sistema",
      description: "Enseña a otros y mejora tu propio proceso",
      action: "Comparte tu conocimiento y aprende de la comunidad",
      icon: <Share2 className="w-6 h-6 text-purple-500" />
    }
  ]

  const resources: any[] = []


  const completedCount = achievements.filter(a => a.status).length
  const totalAchievements = achievements.length

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
            🎉 ¡Bootcamp Completado!
          </h1>
          {/* Subtitle removed as requested */}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-12">Lo que has logrado</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className={`card text-center group hover:shadow-2xl transition-all duration-300 ${
                  achievement.status ? 'ring-2 ring-green-500 bg-green-50' : 'opacity-60'
                }`}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Siguientes Pasos</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  className="card group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700">
                          <strong>Acción:</strong> {step.action}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Resources removed for presentation mode */}

        {/* Key Takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Puntos Clave del Bootcamp</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">🎯 Lo que Aprendiste</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Prompt Stacking para flujos complejos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">MCPs para automatización</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Agents para sistemas autónomos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Vibe Coding para personalización</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-green-600">🚀 Próximos Pasos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Implementa una técnica esta semana</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Crea tu primer GPT personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Documenta tus flujos exitosos</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Comparte conocimiento con otros</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="card bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-primary-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  "La IA no reemplaza la creatividad humana; la amplifica"
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Lo importante no es usarla, sino saber cómo combinarla con tu visión única.
                </p>
                <div className="text-lg text-primary-600 font-semibold">
                  ¡Sigue creando, innovando y transformando el mundo con IA! 🚀
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
