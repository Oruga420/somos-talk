'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Brain,
  Target,
  Settings,
  BarChart3,
  RefreshCw,
  Zap
} from 'lucide-react'

interface AgentsSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

export default function AgentsSlide({ onComplete, onDownload, completedSections }: AgentsSlideProps) {
  const [currentConcept, setCurrentConcept] = useState(0)
  const isCompleted = completedSections.includes('agents')

  const concepts = [
    {
      title: "¿Qué es un Agent?",
      description: "Sistema de IA que toma decisiones autónomas usando herramientas y contexto",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      details: [
        "Puede usar múltiples herramientas",
        "Toma decisiones basadas en contexto",
        "Aprende y mejora con el tiempo",
        "Trabaja de forma autónoma"
      ]
    },
    {
      title: "Estructura de un Agent",
      description: "Los 4 componentes fundamentales de cualquier agent",
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      details: [
        "Goal: Objetivo claro y medible",
        "Tools: Herramientas disponibles",
        "Memory: Contexto y aprendizaje",
        "Reasoning: Lógica de decisión"
      ]
    },
    {
      title: "Cuándo usar Agents",
      description: "Situaciones ideales para implementar agents",
      icon: <Target className="w-8 h-8 text-green-500" />,
      details: [
        "Procesos largos y complejos",
        "Decisiones condicionales",
        "Tareas repetitivas automatizables",
        "Análisis de datos en tiempo real"
      ]
    }
  ]

  const agentExample = {
    name: "Content Curator Agent",
    goal: "Curar contenido relevante desde Google Sheets, buscar noticias, resumir y clasificar automáticamente",
    tools: ["Google Sheets API", "News API", "OpenAI API", "Email Service"],
    workflow: [
      "Lee lista de temas desde Google Sheets",
      "Busca noticias relevantes en tiempo real",
      "Analiza y resume cada artículo",
      "Clasifica por relevancia y categoría",
      "Actualiza la base de datos con nuevos contenidos",
      "Envía resumen semanal al equipo"
    ],
    metrics: [
      "Artículos procesados por día",
      "Precisión de clasificación",
      "Tiempo de respuesta promedio",
      "Satisfacción del equipo"
    ]
  }


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
            🤖 Agents: Sistemas Autónomos
          </h1>
          <p className="slide-subtitle text-primary-600">
            IA que piensa y actúa por sí misma
          </p>
        </motion.div>

        {/* Concepts */}
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

        {/* Example Agent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Ejemplo Práctico: Content Curator Agent</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="card">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{agentExample.name}</h3>
                <p className="text-gray-600">{agentExample.goal}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-blue-500" />
                    Herramientas
                  </h4>
                  <div className="space-y-2">
                    {agentExample.tools.map((tool, index) => (
                      <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Zap className="w-4 h-4 text-blue-500 mr-3" />
                        <span className="text-sm text-gray-700">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <RefreshCw className="w-5 h-5 mr-2 text-green-500" />
                    Flujo de Trabajo
                  </h4>
                  <div className="space-y-2">
                    {agentExample.workflow.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-sm text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-purple-500" />
                  Métricas de Éxito
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {agentExample.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <Target className="w-4 h-4 text-purple-500 mr-3" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Agent Design Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Framework de Diseño de Agents</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">🎯 Definir Objetivo</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Objetivo claro y medible</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Criterios de éxito definidos</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Restricciones y límites claros</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-green-600">🛠️ Seleccionar Herramientas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Settings className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">APIs necesarias para el objetivo</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Herramientas de procesamiento</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Sistemas de notificación</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">🧠 Configurar Memoria</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Brain className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Contexto persistente</span>
                  </li>
                  <li className="flex items-start">
                    <Brain className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Patrones de aprendizaje</span>
                  </li>
                  <li className="flex items-start">
                    <Brain className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Preferencias del usuario</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">🔄 Establecer Lógica</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <RefreshCw className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Proceso de decisión claro</span>
                  </li>
                  <li className="flex items-start">
                    <RefreshCw className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Condiciones y reglas</span>
                  </li>
                  <li className="flex items-start">
                    <RefreshCw className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Criterios de escalación</span>
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
