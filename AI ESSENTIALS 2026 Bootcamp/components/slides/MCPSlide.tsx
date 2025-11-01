'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Zap,
  Database,
  Settings,
  Play,
  ArrowRight
} from 'lucide-react'

interface MCPSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

export default function MCPSlide({ onComplete, onDownload, completedSections }: MCPSlideProps) {
  const [currentDemo, setCurrentDemo] = useState(0)
  const isCompleted = completedSections.includes('mcps')

  const mcpFeatures = [
    {
      title: "Conecta con Google Drive",
      description: "Lee, crea y modifica archivos directamente desde ChatGPT",
      icon: <Database className="w-8 h-8 text-blue-500" />,
      example: "Analiza todos los briefs de clientes en una carpeta específica"
    },
    {
      title: "Integra con Notion",
      description: "Sincroniza bases de datos y páginas automáticamente",
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      example: "Actualiza el CRM con información de nuevos leads"
    },
    {
      title: "Conecta Gmail",
      description: "Lee y responde emails, gestiona tu bandeja de entrada",
      icon: <Zap className="w-8 h-8 text-green-500" />,
      example: "Clasifica emails automáticamente y responde consultas comunes"
    }
  ]

  const demoSteps = [
    {
      title: "Configuración Inicial",
      description: "Conecta ChatGPT con tu fuente de datos preferida",
      steps: [
        "Abre ChatGPT y ve a Configuración",
        "Selecciona 'Conectar herramientas'",
        "Elige tu MCP (Google Drive, Notion, etc.)",
        "Autoriza el acceso a tu cuenta"
      ]
    },
    {
      title: "Primer Uso",
      description: "Realiza tu primera tarea automatizada",
      steps: [
        "Solicita: 'Lee el archivo X de mi Drive'",
        "Pide análisis: 'Resume el contenido y extrae insights'",
        "Solicita acción: 'Crea un documento con las conclusiones'",
        "Verifica el resultado en tu fuente de datos"
      ]
    },
    {
      title: "Automatización Avanzada",
      description: "Crea flujos de trabajo complejos",
      steps: [
        "Define el proceso: 'Cada lunes, analiza los briefs nuevos'",
        "Configura la lógica: 'Si hay más de 5, crea un resumen ejecutivo'",
        "Establece la acción: 'Envía el resumen por email al equipo'",
        "Monitorea y ajusta según sea necesario"
      ]
    }
  ]

  const useCases = [
    {
      title: "Gestión de Briefs",
      description: "Automatiza el análisis de briefs de clientes",
      workflow: [
        "Lee briefs desde Google Drive",
        "Extrae información clave (objetivos, público, presupuesto)",
        "Genera propuestas iniciales",
        "Guarda en Notion para seguimiento"
      ]
    },
    {
      title: "Análisis de Competencia",
      description: "Monitorea competidores automáticamente",
      workflow: [
        "Busca noticias y actualizaciones",
        "Analiza contenido de redes sociales",
        "Genera reportes semanales",
        "Alerta sobre cambios importantes"
      ]
    },
    {
      title: "Gestión de Contenido",
      description: "Crea y distribuye contenido de forma automática",
      workflow: [
        "Genera ideas de contenido",
        "Crea posts para diferentes plataformas",
        "Programa publicaciones",
        "Analiza performance y optimiza"
      ]
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
            🔌 MCPs: Model Context Protocol
          </h1>
          <p className="slide-subtitle text-primary-600">
            Conecta ChatGPT con el mundo real
          </p>
        </motion.div>

        {/* What are MCPs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">¿Qué son los MCPs?</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="card text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sistema Modular de OpenAI</h3>
              <p className="text-lg text-gray-600 mb-6">
                Los MCPs permiten conectar ChatGPT con fuentes externas y herramientas, 
                creando un ecosistema de automatización potente y flexible.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <strong>Reemplaza Zapier</strong><br />
                  Automatiza sin código
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <strong>Datos en Tiempo Real</strong><br />
                  Información siempre actualizada
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <strong>Centraliza Tareas</strong><br />
                  Todo desde un solo lugar
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-12">¿Qué permiten los MCPs?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mcpFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="card group hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Ejemplo:</strong> {feature.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Demo Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Demo Guiado: Primeros Pasos</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {demoSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDemo(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentDemo ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-2">{demoSteps[currentDemo].title}</h3>
                <p className="text-gray-600">{demoSteps[currentDemo].description}</p>
              </div>

              <div className="space-y-4">
                {demoSteps[currentDemo].steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setCurrentDemo((currentDemo + 1) % demoSteps.length)}
                  className="btn-primary"
                >
                  <Play className="w-4 h-4 mr-2 inline" />
                  Siguiente Paso
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Casos de Uso Reales</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                className="card group hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-700">Flujo de trabajo:</h4>
                  {useCase.workflow.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Consejos de Implementación</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-green-600">✅ Mejores Prácticas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Comienza con conexiones simples</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Prueba comandos básicos primero</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Documenta tus flujos exitosos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Monitorea el rendimiento regularmente</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">💡 Casos de Uso Comunes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Análisis automático de documentos</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Generación de reportes semanales</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Clasificación automática de emails</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Sincronización de bases de datos</span>
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
