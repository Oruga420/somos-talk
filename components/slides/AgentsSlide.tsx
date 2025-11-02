'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Brain, Target, Settings, BarChart3, RefreshCw, Zap } from 'lucide-react'

interface AgentsSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

export default function AgentsSlide({ onComplete, onDownload: _onDownload, completedSections }: AgentsSlideProps) {
  const isCompleted = completedSections.includes('agents')

  const concepts = [
    {
      title: '¿Qué es un Agent?',
      description: 'Sistema de IA que toma decisiones autónomas usando herramientas y contexto',
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      details: [
        'Puede usar múltiples herramientas',
        'Toma decisiones basadas en contexto',
        'Aprende y mejora con el tiempo',
        'Trabaja de forma autónoma'
      ]
    },
    {
      title: 'Estructura de un Agent',
      description: 'Los 5 componentes fundamentales de cualquier agent',
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      details: [
        'Goal: Objetivo claro y medible',
        'Tools: Herramientas disponibles',
        'Memory: Contexto y aprendizaje',
        'Reasoning: Lógica de decisión',
        'Orquestación (Host): App donde vive el agente (ej. ChatGPT) que coordina subagentes y conexiones MCP'
      ]
    },
    {
      title: 'Cuándo usar Agents',
      description: 'Situaciones ideales para implementar agents',
      icon: <Target className="w-8 h-8 text-green-500" />,
      details: [
        'Procesos largos y complejos',
        'Decisiones condicionales',
        'Tareas repetitivas automatizables',
        'Análisis de datos en tiempo real',
        'Integraciones IoT y negocio con MCP (smart home, Tesla, CRM, finanzas)'
      ]
    }
  ]

  const agentExample = {
    name: 'Content Curator Agent',
    goal: 'Curar contenido relevante desde Google Sheets, buscar noticias, resumir y clasificar automáticamente',
    tools: ['Google Sheets API', 'News API', 'OpenAI API', 'Email Service'],
    workflow: [
      'Lee lista de temas desde Google Sheets',
      'Busca noticias relevantes en tiempo real',
      'Analiza y resume cada artículo',
      'Clasifica por relevancia y categoría',
      'Actualiza la base de datos con nuevos contenidos',
      'Envía resumen semanal al equipo'
    ],
    metrics: [
      'Artículos procesados por día',
      'Precisión de clasificación',
      'Tiempo de respuesta promedio',
      'Satisfacción del equipo'
    ]
  }

  const iotAgentExample = {
    name: 'IoT + Tesla Agent',
    goal: 'Controlar funciones del auto y de casa con voz o texto desde ChatGPT',
    tools: [
      'MCP Server para Tesla (vía Tesla Fleet API o GRAM a partir de OpenAPI)',
      'Home Assistant MCP (luces, clima, escenas)',
      'OpenAI API (razonamiento)',
      'Notificaciones (correo/Slack)'
    ],
    workflow: [
      'Preacondiciona el clima del Tesla y verifica batería',
      'Baja o sube ventanas bajo ciertas condiciones',
      'Activa modo noche en casa (luces, clima, escenas)',
      'Si hay alerta, envía notificación y registra el evento'
    ],
    metrics: [
      'Comandos ejecutados correctamente',
      'Latencia de respuesta',
      'Incidencias resueltas sin intervención humana',
      'Satisfacción del usuario'
    ]
  }

  const architecturePoints = [
    'Host (ChatGPT): aquí vive tu agente principal y su interfaz.',
    'Apps SDK: agrega lógica y pantallas ligeras dentro de ChatGPT.',
    'MCP Servers: publican herramientas y datos externos (tus APIs, docs, automatizaciones).',
    'Subagentes: especialistas por dominio que el host coordina.'
  ]

  const bestPractices = [
    'Empieza simple: una herramienta para leer y otra para crear.',
    'Describe bien cada herramienta: qué hace, qué necesita y qué devuelve.',
    'Cuida permisos: solo lo necesario.',
    'Prueba con ejemplos cortos antes de armar el flujo completo.'
  ]

  const commonUseCases = [
    'Análisis automático de documentos.',
    'Reportes semanales.',
    'Clasificación de correos.',
    'Sincronización de bases entre apps.'
  ]

  const integrationCards = [
    {
      title: 'Zapier MCP',
      color: 'text-blue-600',
      body: 'Acceso a más de 8,000 apps y 30,000 acciones (correo, archivos, proyectos, ventas, pagos, calendario).',
      tail: 'Ideal para flujos de negocio: contratos, carpetas, facturas, tareas.'
    },
    {
      title: 'Home Assistant MCP',
      color: 'text-green-600',
      body: 'Control de luces, clima y escenas en casa u oficina.',
      tail: 'Escenarios como "modo noche" o "llegando a casa".'
    },
    {
      title: 'Tesla (Fleet API) + GRAM',
      color: 'text-purple-600',
      body: 'Comandos como preacondicionar clima, revisar estado y controlar ventanas.',
      tail: 'GRAM convierte tu OpenAPI en un MCP server para enchufar tu API a ChatGPT.'
    }
  ]

  const realWorldScenarios = [
    {
      title: 'Operaciones de negocio',
      description: '"Se cerró el cliente X": genera contrato, carpeta, factura, tareas y notifica al equipo.'
    },
    {
      title: 'Smart home',
      description: '"Pon la casa en modo noche": luces, clima, seguridad y registro del evento.'
    },
    {
      title: 'Vehículo',
      description: '"Calienta el Tesla y baja ventanas traseras cuando llegue a 24 °C".'
    },
    {
      title: 'Contenido y soporte',
      description: '"Escribe el correo, adjunta el PDF y registra el ticket con prioridad".'
    }
  ]

  const handleMarkComplete = () => {
    if (!isCompleted) {
      onComplete('agents')
    }
  }

  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="slide-title">🤖 Agents: Sistemas Autónomos</h1>
          <p className="slide-subtitle text-primary-600">
            IA que piensa y actúa por sí misma
          </p>
        </motion.div>

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
                key={concept.title}
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
                  {concept.details.map(detail => (
                    <li key={detail} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-gray-600 max-w-4xl mx-auto mt-6 text-center">
            En ChatGPT, el agente principal (host) puede coordinar subagentes y herramientas externas a través de MCP y el Apps SDK. Eso permite que la IA no solo hable, sino que ejecute acciones reales con tus datos y sistemas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
                    {agentExample.tools.map(tool => (
                      <div key={tool} className="flex items-center p-3 bg-blue-50 rounded-lg">
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
                      <div key={step} className="flex items-start">
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
                  {agentExample.metrics.map(metric => (
                    <div key={metric} className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <Target className="w-4 h-4 text-purple-500 mr-3" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Ejemplo Práctico 2: IoT + Tesla Agent</h2>

          <div className="max-w-5xl mx-auto">
            <div className="card">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{iotAgentExample.name}</h3>
                <p className="text-gray-600">{iotAgentExample.goal}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-blue-500" />
                    Herramientas
                  </h4>
                  <div className="space-y-2">
                    {iotAgentExample.tools.map(tool => (
                      <div key={tool} className="flex items-center p-3 bg-blue-50 rounded-lg">
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
                    {iotAgentExample.workflow.map((step, index) => (
                      <div key={step} className="flex items-start">
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
                  {iotAgentExample.metrics.map(metric => (
                    <div key={metric} className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <Target className="w-4 h-4 text-purple-500 mr-3" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Arquitectura práctica en ChatGPT</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <ul className="space-y-3">
                {architecturePoints.map(point => (
                  <li key={point} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Framework de Diseño de Agents</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">🧭 Definir Objetivo</h3>
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
                  <li className="flex items-start">
                    <Settings className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Conecta herramientas vía MCP Servers (incluye Zapier MCP para miles de apps)</span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Si tu API es OpenAPI, genera un MCP server con GRAM y úsalo de inmediato</span>
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
                <h3 className="text-xl font-semibold mb-4 text-orange-600">🔁 Establecer Lógica</h3>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Consejos de implementación</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-lg font-semibold text-emerald-600 mb-4">✅ Mejores prácticas</h3>
              <ul className="space-y-3">
                {bestPractices.map(item => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">💡 Casos de uso comunes</h3>
              <ul className="space-y-3">
                {commonUseCases.map(item => (
                  <li key={item} className="flex items-start">
                    <Target className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Integraciones reales que puedes conectar</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {integrationCards.map(card => (
              <div key={card.title} className="card">
                <h3 className={`text-lg font-semibold mb-2 ${card.color}`}>{card.title}</h3>
                <p className="text-gray-700">{card.body}</p>
                <p className="text-gray-700 mt-2">{card.tail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Qué podrían ser en la vida real</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <ul className="space-y-3">
                {realWorldScenarios.map(item => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>: {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-center space-y-4"
        >
          <p className="text-gray-700 text-lg">
            Con ChatGPT como host, Apps SDK para la interfaz y MCP Servers para las acciones, tus agentes pasan de hablar a ejecutar.
          </p>

          <button
            onClick={handleMarkComplete}
            className={`btn-primary inline-flex items-center space-x-2 ${isCompleted ? 'opacity-50 cursor-default' : ''}`}
            aria-disabled={isCompleted}
          >
            <CheckCircle className="w-4 h-4" />
            <span>{isCompleted ? 'Sección completada' : 'Marcar como completada'}</span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
