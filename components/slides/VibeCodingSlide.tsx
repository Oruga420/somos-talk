'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Palette, Sparkles } from 'lucide-react'

interface VibeCodingSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

type LinkItem = {
  label: string
  url: string
}

type ResourceCard = {
  title: string
  description: string
  link?: LinkItem
}

export default function VibeCodingSlide({ onComplete, onDownload: _onDownload, completedSections }: VibeCodingSlideProps) {
  const isCompleted = completedSections.includes('vibe-coding')

  const references: LinkItem[] = [
    { label: 'Karpathy en X', url: 'https://x.com/karpathy' },
    { label: 'Ars Technica', url: 'https://arstechnica.com' },
    { label: 'Simon Willison', url: 'https://simonwillison.net' }
  ]

  const distinctionLinks: LinkItem[] = [
    { label: 'Lectura rápida – Ars Technica', url: 'https://arstechnica.com' }
  ]

  const storyLinks: LinkItem[] = [
    { label: 'Contexto – Codemotion', url: 'https://www.codemotion.com' }
  ]

  const toolCards: ResourceCard[] = [
    {
      title: 'Replit AI / Replit Agent',
      description: '“Dile tu app” y te genera código con deploy rápido.',
      link: { label: 'Docs Replit Agent', url: 'https://docs.replit.com/replitai/agent' }
    },
    {
      title: 'Firebase',
      description: 'BaaS para auth, base de datos y hosting (Firestore, Auth y Hosting).',
      link: { label: 'Docs Firebase', url: 'https://firebase.google.com/docs' }
    },
    {
      title: 'Google AI Studio',
      description: 'Protótipa con Gemini 2.5 y usa “Get code” para llevarlo a tu stack.',
      link: { label: 'Google AI Studio', url: 'https://aistudio.google.com' }
    },
    {
      title: 'Lovable',
      description: '“Chatea y te arma” sitios y apps con cloud incluido.',
      link: { label: 'Lovable', url: 'https://lovable.dev' }
    },
    {
      title: 'Cursor IDE',
      description: 'IDE con agentes para flujos agentic en escritorio.',
      link: { label: 'Cursor', url: 'https://www.cursor.com' }
    }
  ]

  const idePlugins: ResourceCard[] = [
    {
      title: 'Google Cloud Code + Gemini Code Assist',
      description: 'Extensión en VS Code con soporte para Gemini.',
      link: { label: 'Cloud Code', url: 'https://cloud.google.com/code/docs' }
    },
    {
      title: 'GitHub Copilot + Copilot Chat',
      description: 'Modos de plan y chat integrados al IDE.',
      link: { label: 'Docs Copilot', url: 'https://docs.github.com/copilot' }
    },
    {
      title: 'Continue.dev',
      description: 'Trae tu propio modelo y corre agentes en VS Code o JetBrains.',
      link: { label: 'Docs Continue', url: 'https://docs.continue.dev' }
    },
    {
      title: 'OpenAI Apps SDK + MCP',
      description: 'Crea apps inside ChatGPT para extender tus flujos.',
      link: { label: 'Apps SDK', url: 'https://developers.openai.com/apps-sdk' }
    }
  ]

  const modelResources: ResourceCard[] = [
    {
      title: 'Google Gemini 2.5',
      description: 'Modelo fuerte en código y razonamiento.',
      link: { label: 'Blog Google', url: 'https://blog.google' }
    },
    {
      title: 'Anthropic Claude 4 / 4.5',
      description: 'Modelos con enfoque agentic y razonamiento profundo.',
      link: { label: 'Anthropic', url: 'https://www.anthropic.com' }
    },
    {
      title: 'OpenAI Codex 2025',
      description: 'Producto y CLI agentic para desarrollo. No es el Codex 2021 deprecado.',
      link: { label: 'Anuncio Codex 2025', url: 'https://openai.com/index/introducing-upgrades-to-codex/' }
    },
    {
      title: 'Meta Code Llama',
      description: 'Base open source para proyectos custom.',
      link: { label: 'LLaMA', url: 'https://www.llama.com' }
    }
  ]

  const possibilitiesLinks: LinkItem[] = [
    { label: 'POCs en un día – Ars Technica', url: 'https://arstechnica.com' },
    { label: 'Creatividad a producto – Financial Times', url: 'https://www.ft.com' },
    { label: 'Orquestación con servicios – Google Developers Blog', url: 'https://developers.googleblog.com' }
  ]

  const limitationsLinks: LinkItem[] = [
    { label: 'Seguridad y secretos – Ars Technica', url: 'https://arstechnica.com' },
    { label: 'Infra y datos – Cloud Code', url: 'https://cloud.google.com/code/docs' },
    { label: 'Calidad y mantenibilidad – Financial Times', url: 'https://www.ft.com' },
    { label: 'Reproducibilidad – Simon Willison', url: 'https://simonwillison.net' }
  ]

  const vibeCodingLinks: LinkItem[] = [
    { label: 'Blog Google', url: 'https://blog.google' },
    { label: 'AI Studio – Vibe Code', url: 'https://aistudio.google.com/vibe-code' },
    { label: 'Developers Blog', url: 'https://developers.googleblog.com' },
    { label: 'Chrome Unboxed', url: 'https://chromeunboxed.com' },
    { label: 'Tom’s Guide', url: 'https://www.tomsguide.com' },
    { label: 'Digital Applied', url: 'https://www.digitalapplied.com' }
  ]

  const rapidLinks: LinkItem[] = [
    { label: 'Apps SDK de OpenAI', url: 'https://developers.openai.com/apps-sdk' },
    { label: 'Apps en ChatGPT', url: 'https://openai.com' },
    { label: 'Conectar MCP local (Claude)', url: 'https://modelcontextprotocol.io/docs/develop/connect-local-servers' },
    { label: 'Docs MCP Claude', url: 'https://docs.claude.com/en/docs/mcp' },
    { label: 'Zapier MCP', url: 'https://zapier.com/mcp/chatgpt' },
    { label: 'GRAM', url: 'https://www.speakeasy.com/product/gram' },
    { label: 'Replit Agent', url: 'https://docs.replit.com/replitai/agent' },
    { label: 'Google AI Studio', url: 'https://aistudio.google.com' },
    { label: 'Firebase docs', url: 'https://firebase.google.com/docs' },
    { label: 'Vibe coding en prensa', url: 'https://arstechnica.com' }
  ]

  const markComplete = () => {
    if (!isCompleted) {
      onComplete('vibe-coding')
    }
  }

  const renderLinkList = (links: LinkItem[]) => (
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 underline"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )

  const renderResourceCards = (resources: ResourceCard[]) => (
    <div className="grid md:grid-cols-2 gap-6">
      {resources.map(resource => (
        <div key={resource.title} className="card h-full flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
          <p className="text-gray-700 flex-1">{resource.description}</p>
          {resource.link && (
            <a
              href={resource.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 underline"
            >
              {resource.link.label}
            </a>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="slide-title">🎨 Vibe Coding 101</h1>
          <p className="slide-subtitle text-primary-600">De idea a app en horas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">VIVE / Vibe Coding: qué es y de dónde sale</h2>
          <div className="card space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Vibe Coding es programar describiendo lo que quieres y dejando que la IA genere e itere el código.
              Tú evalúas por ejecución y resultados, no por leer cada línea. El término lo popularizó Andrej Karpathy
              en febrero de 2025.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Referencias</h3>
              {renderLinkList(references)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qué lo distingue</h3>
              <p className="text-gray-700 mb-4">
                A diferencia del “AI pair programming” clásico, aquí te enfocas en intención, prueba y ajuste.
                Menos revisión manual, más loop “pide–corre–corrige–repite”.
              </p>
              {renderLinkList(distinctionLinks)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">La historia que queremos contar</h3>
              <p className="text-gray-700 mb-4">
                Muchxs empezamos copiando y pegando código entre ChatGPT y el IDE, pegando errores de regreso hasta que jalaba.
                Ese ciclo hoy ya vive dentro de herramientas que lo aceleran.
              </p>
              {renderLinkList(storyLinks)}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="section-title text-center mb-8">Herramientas típicas para Vibe Coding</h2>
          {renderResourceCards(toolCards)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="section-title text-center mb-8">Plugins y extensiones en IDEs</h2>
          {renderResourceCards(idePlugins)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="section-title text-center mb-8">Modelos y herramientas de código fuertes hoy</h2>
          {renderResourceCards(modelResources)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title text-center mb-8">Posibilidades que habilita Vibe Coding</h2>
          <div className="card">
            <ul className="space-y-3 text-gray-700">
              <li>POCs en 1 día y “software para uno”.</li>
              <li>Baja la barrera entre creatividad y producto.</li>
              <li>Orquestación con apps y servicios desde IDEs y AI Studio.</li>
            </ul>
            <div className="mt-4">
              {renderLinkList(possibilitiesLinks)}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title text-center mb-8">Limitaciones técnicas a tener claras</h2>
          <div className="card">
            <ul className="space-y-3 text-gray-700">
              <li>Seguridad y secretos: llaves, auth, roles; se necesitan guardas.</li>
              <li>Infra y datos: latencia, cuotas, reglas de Firestore, costos.</li>
              <li>Calidad y mantenibilidad: el código puede salir frágil si no pruebas.</li>
              <li>Reproducibilidad: versiona prompts y estados si quieres builds repetibles.</li>
            </ul>
            <div className="mt-4">
              {renderLinkList(limitationsLinks)}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="section-title text-center mb-8">Vibe Coding: cómo se hace</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">El loop</h3>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>Digo la idea.</li>
                <li>La IA escribe el código.</li>
                <li>Corro, pego errores exactos en el chat.</li>
                <li>Repito hasta que jale.</li>
              </ol>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lo chido</h3>
              <ul className="space-y-3 text-gray-700">
                <li>POCs en un día.</li>
                <li>Cualquiera con ganas puede lanzar su mini app.</li>
                <li>Conecta APIs y bases sin pelearte con la infra.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ojo con los límites</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Seguridad y secretos importan.</li>
                <li>Bases de datos y costos hay que cuidarlos.</li>
                <li>El código de IA necesita pruebas y buenas prácticas.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mensaje final</h3>
              <p className="text-gray-700">
                Vibe Coding no reemplaza aprender. Te acelera. Si documentas, pruebas y versionas prompts, construyes en corto y sin quemarte.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Novedades en Google AI Studio (vibe coding)</h2>
          <div className="card space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qué hay de nuevo</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Vibe coding en AI Studio: convierte tu idea en una app funcional con un flujo guiado “prompt-to-app”.</li>
                <li>Experiencia mejorada para devs: ajustes y controles para enfocarte en construir.</li>
                <li>Entrada directa: “Vibe Code with Gemini” para pasar de prompt a producto compartible.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cómo se usa</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Entra a AI Studio y abre la experiencia de vibe coding.</li>
                <li>Describe tu app: objetivo, entradas, salidas, stack deseado.</li>
                <li>Pide “Get code” y llévalo a tu IDE o repo.</li>
                <li>Itera: corre, pega errores exactos y vuelve a pedir correcciones.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Links oficiales y guías recientes</h3>
              {renderLinkList(vibeCodingLinks)}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-16 space-y-8"
        >
          <h2 className="section-title text-center mb-8">Vibe Coding: recursos rápidos</h2>

          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Vibe Coding en 1 minuto</h3>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Describe con claridad lo que quieres construir.</li>
              <li>Pídele al modelo pasos y código completo.</li>
              <li>Corre el código y pega los errores exactos en el chat.</li>
              <li>Repite hasta que jale y agrega pruebas mínimas.</li>
            </ol>
            <p className="text-gray-700">
              <strong>Tip:</strong> combínalo con Context Stacking. Apila vocabulario y ejemplos del nicho antes de pedir el código.
            </p>
          </div>

          <div className="card space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">Plantilla de instrucciones para Vibe Coding</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Objetivo:</strong> Qué app quieres y para quién. Ej: “Todo app para ventas”.</li>
              <li><strong>Entradas:</strong> Datos que vas a dar. Ej: “CSV con clientes: name, email”.</li>
              <li><strong>Requisitos técnicos:</strong> Stack y librerías. Ej: “Next.js 14, Tailwind, Firebase Auth y Firestore”.</li>
              <li><strong>Estructura de salida:</strong> Archivos o rutas esperadas. Ej: “/, /login, /dashboard, .env.example”.</li>
              <li><strong>Criterios de éxito:</strong> Qué debe pasar para decir que funciona.</li>
              <li><strong>Pruebas mínimas:</strong> Qué probarás al final.</li>
              <li><strong>Restricciones:</strong> Lo que NO quieres.</li>
              <li><strong>Siguientes pasos automáticos:</strong> “Genera script de seed y un README con run, test y deploy”.</li>
            </ul>
          </div>

          <div className="card space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">Ejemplos de instrucciones</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Ejemplo A: CRUD con Firebase</strong><br />
                “SPA en Next 14 con login Google, CRUD tareas en Firestore y deploy a Vercel. Tailwind. .env.example con claves de Firebase. Reglas de seguridad: lectura anónima y lectura/escritura para usuarios logueados. README con setup y script de seed de 5 tareas.”</p>
              <p><strong>Ejemplo B: Landing en Replit</strong><br />
                “Landing con formulario y grid de features. HTML+Tailwind y endpoint que guarde submissions en JSON temporal. Botón de deploy en Replit y README con cómo clonar y publicar.”</p>
              <p><strong>Ejemplo C: Bot de soporte por correo</strong><br />
                “Script en Python que lea correos entrantes y genere respuestas base. Funciones para clasificar prioridad y crear borradores. .env.example y README con cómo correr en local.”</p>
            </div>
          </div>

          <div className="card space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">Tips y trucos de Vibe Coding</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Pide bloques de código completos listos para copiar.</li>
              <li>Pega los errores exactos. No los resumas.</li>
              <li>Pide siempre README con run, test y deploy.</li>
              <li>Pide pruebas mínimas o script de verificación.</li>
              <li>Versiona prompts y guarda un CHANGELOG corto por iteración.</li>
              <li>En AI Studio, usa “Get code” para llevarte el prompt a tu stack.</li>
            </ul>
          </div>

          <div className="card space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">Conecta MCP a tu Vibe Coding</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">En ChatGPT</h4>
                <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                  <li>Activa Developer Mode.</li>
                  <li>Crea una app con el Apps SDK.</li>
                  <li>Agrega tu servidor MCP remoto o local.</li>
                  <li>Prueba las tools desde el chat y pide acciones.</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">En Claude Desktop</h4>
                <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                  <li>Abre Configuración.</li>
                  <li>Agrega tu MCP local con la ruta de config.</li>
                  <li>Reinicia y valida que aparezcan las tools.</li>
                  <li>Úsalas desde el chat pidiendo acciones concretas.</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Zapier MCP</h4>
                <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                  <li>Genera tu URL segura de MCP en Zapier.</li>
                  <li>Conéctala en ChatGPT o Claude.</li>
                  <li>Pide acciones de correo, hojas, CRM, pagos y más.</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">GRAM para tus APIs</h4>
                <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                  <li>Sube tu OpenAPI a GRAM.</li>
                  <li>Publica un MCP server a partir de tu API.</li>
                  <li>Conéctalo y úsalo como tool.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Checklist seguridad y calidad</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Checklist de seguridad</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Nunca subas llaves reales al repo. Usa .env y .env.example.</li>
                  <li>Permisos mínimos en Firebase, GitHub y servicios externos.</li>
                  <li>Revisa costos y cuotas de APIs.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Checklist de calidad</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Lint y formateo activados.</li>
                  <li>README con setup y deploy probados.</li>
                  <li>Script de pruebas o pasos manuales claros.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Links útiles</h3>
            {renderLinkList(rapidLinks)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <button
            onClick={markComplete}
            className={`btn-primary inline-flex items-center space-x-2 ${isCompleted ? 'opacity-50 cursor-default' : ''}`}
            aria-disabled={isCompleted}
          >
            <Sparkles className="w-4 h-4" />
            <span>{isCompleted ? 'Sección completada' : 'Marcar como completada'}</span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
