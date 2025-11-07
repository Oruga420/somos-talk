export interface PresentationSection {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
  note?: string
}

export interface PresentationPage {
  id: string
  title: string
  subtitle?: string
  intro?: string
  sections: PresentationSection[]
  closingNote?: string
}

export const slideContent = {
  welcome: {
    hero: {
      eyebrow: 'Somos - Assent',
      title: 'AI that amplifies human judgment',
      description:
        'This session shows how we operate AI day to day: how we calibrate the room, stack context, and ship workflows that already drive value at Assent. No hype, just delivery.',
    },
    overview: [
      {
        title: 'Concrete Playbooks',
        description: 'Context stacking, agents, and tooling we already run inside Assent.',
      },
      {
        title: 'Real Use Cases',
        description: 'Slack, Legal, Finance, and Data Quality with impact metrics.',
      },
    ],
    mindset: {
      title: 'Mindset',
      summary:
        'Core belief: AI does not replace your expertise, it amplifies it. When we stack context, design guardrails, and build tools that match our workflows, AI becomes a multiplier for human judgment instead of a replacement.',
      tags: ['Calibrate fast', 'Operate with guardrails', 'Share real playbooks'],
    },
    ctaLabel: 'Room is ready - jump to Context Stacking',
  },
  contextStacking: {
    title: 'Context Stacking - Personal Technique',
    subtitle: 'We teach the model how to think before we ask it to work.',
    principles: [
      'This is not prompt magic; it is deliberate context design.',
      'We stack what the model must know: role, objective, tone, rules, and snippets.',
      'Every layer removes noise and pulls the model into our domain.',
    ],
    beforeAfter: {
      description:
        'Run a live demo comparing a cold prompt against the stacked prompt. The stacked version cuts manual cleanup by roughly 40% because the format, tone, and decision filters are already in place.',
      reminder: 'Reminder: the context window is a canvas. Every word you add becomes part of the instruction set.',
    },
    workflow: [
      {
        title: '1. Define role and outcome',
        detail: 'Example: "You are a compliance analyst. Summarize the key risks as a concise legal memo."',
      },
      {
        title: '2. Stack the context',
        detail: 'Add tone, decision criteria, glossary items, templates, and counter-examples.',
      },
      {
        title: '3. Request the deliverable',
        detail: 'Once aligned, ask for the final output. Expect around 40% less manual fixing.',
      },
    ],
    completionLabel: 'Context stacking covered',
  },
  slackBot: {
    title: 'Slack Bot - Live FAQ for Internal Teams',
    subtitle: 'Purpose: remove daily friction by wiring Slack to OpenAI through a safe middleware layer.',
    benefits: [
      'Answers policy, document, and process questions without leaving Slack.',
      'Understands channel context and respects roles and permissions.',
      'Cuts repetitive questions for HR, Legal, and Compliance teams.',
    ],
    metric: 'Internal metric: roughly 30% fewer "where is that file?" tickets in high-volume teams.',
    stack: [
      {
        title: 'Middleware',
        detail: 'LangChain with Python (FastAPI) orchestrates prompts, memory, and routing.',
      },
      {
        title: 'Connectors',
        detail: 'Slack Events API, OpenAI API, and internal repositories like SharePoint or Confluence.',
      },
      {
        title: 'Control',
        detail: 'Request limits, logging, and human escalation when confidence drops below threshold.',
      },
    ],
    guardrails: 'Channel-aware permissions, PII filters, audit trail for prompts and responses.',
    measurement: 'Adoption dashboards: resolved questions, hot topics, and time saved per team.',
    demo: 'Ask "What is our travel policy?" and "Where is the vendor contract template?" to show contextual accuracy.',
    completionLabel: 'Slack bot covered',
  },
  agenticWorkflows: {
    title: 'Agentic Workflows - Legal, Regulatory, Finance',
    subtitle: 'Goal: automate repetitive analytical tasks while preserving full traceability.',
    pipeline: [
      'Search: gather PDFs, folders, and internal APIs relevant to the request.',
      'Summarise: produce structured notes per section with consistent fields.',
      'Analyse: compare against internal policies and surface actionable insight.',
      'Deliver: output JSON, tables, or decks with citations for every data point.',
    ],
    tooling:
      'Tooling: LangGraph or Airflow to orchestrate, internal APIs as sources, human reviewers as the final gate.',
    useCases: [
      {
        title: 'Legal',
        detail: 'Summarise contracts or external policies. Flag risks, critical clauses, and gaps.',
      },
      {
        title: 'Regulatory',
        detail: 'Normalise reporting requirements and produce compliance matrices with traceability.',
      },
      {
        title: 'Finance',
        detail: 'Aggregate costs or risk signals by category and deliver reviewer-ready dashboards.',
      },
    ],
    example:
      '"Scan these three regulatory PDFs, build a requirement matrix, and highlight critical changes." The agent returns a CSV ready for legal review in under five minutes.',
    guardrails: [
      'Scope limits per agent and centralised logs.',
      'Citations for every source in the final output.',
      'Mandatory human approval before final decisions.',
    ],
    completionLabel: 'Agentic workflows covered',
  },
  customTools: {
    title: 'Custom Tools + Fine-tuned Models',
    subtitle:
      'When a chatbot is not enough, we ship lightweight UIs or bespoke models that guarantee the outcome.',
    toolHighlights: [
      'Lightweight front-ends (Streamlit, FastAPI, internal apps) with embedded AI.',
      'Users upload a spreadsheet; the tool cleans and standardises the data.',
      'Outputs are Snowflake-ready or CSV with automatic validations.',
    ],
    toolOutcome: 'Outcome: less manual effort, fewer errors, consistent deliverables for downstream analytics.',
    referenceArchitecture: [
      'Lightweight front-end for upload and validation.',
      'Python services orchestrate cleaning, enrichment, and generation with AI.',
      'Native integrations push results into Snowflake or internal APIs.',
    ],
    modelGains: [
      'Fine-tuned model (OpenAI or Bedrock) trained on labelled internal data.',
      'Understands our technical vocabulary and inconsistent part descriptions.',
      'Delivers ~25% higher accuracy versus zero-shot GPT and saves manual QA hours.',
    ],
    caseStudy:
      'Input vs output: "500 rows - 30 seconds - clean schema." The fine-tuned model normalises supplier part descriptions and returns Snowflake-ready attributes.',
    caseInsight: 'Data Quality reports multiple hours saved each week on manual validation.',
    completionLabel: 'Custom tools covered',
  },
  showcase: {
    title: 'Showcase - Creative, Useful, Fun',
    subtitle: 'Goal: prove that AI is not only automation, it can elevate experiences too.',
    highlights: [
      {
        id: 'elevenlabs',
        title: 'ElevenLabs',
        description: 'Natural text-to-speech in English and Spanish.',
        bullets: [
          'Perfect for fast demos, training videos, or inclusive content.',
          'Demo idea: generate your voice reading a technical line.',
        ],
      },
      {
        id: 'heygen',
        title: 'HeyGen',
        description: 'Lip-synced video avatars with multilingual support.',
        bullets: [
          'Use text or audio to create a digital presenter.',
          'Demo idea: same script rendered in English and Spanish for onboarding.',
        ],
      },
      {
        id: 'vibe-code',
        title: 'Google AI Studio (Vibe Code)',
        description: 'Train small models to copy your tone and writing style.',
        bullets: [
          'Example: friendly-but-concise emails for internal comms.',
          'Demo idea: compare neutral output vs. your vibe-coded version.',
        ],
      },
      {
        id: 'vs-code',
        title: 'VS Code Plugins (Codex, Copilot, etc.)',
        description: 'Embedded AI to explain, refactor, or document code.',
        bullets: [
          'Example: "explain this function" -> docstring plus suggested tests.',
          'Helps new engineers ramp up without slowing the team down.',
        ],
      },
    ],
    completionLabel: 'Showcase covered',
  },
  closing: {
    title: 'Closing - Scale Your Judgment with AI',
    subtitle: 'Structure context, automate the repetitive work, and protect time for thinking.',
    reflection:
      'AI does not replace human judgment; it scales it. Structure the context, automate the repetitive work, and protect time for thinking.',
    primaryCta: 'Join La Sesh - open sessions, templates, and real workflows.',
    primaryDescription:
      'Share your playbooks, iterate with the community, and bring live cases to refine together.',
    feedback: {
      nextStep: 'Document which part of the stack you will pilot this week.',
      feedbackLoop: 'Bring results to La Sesh to tweak prompts, tools, or guardrails.',
      share: 'Send the deck to the team to keep momentum and conversation alive.',
    },
    shareTitle: 'Share the talk',
    shareDescription: 'Send the deck to the team to keep momentum and conversation alive.',
    confirmLabel: 'Confirm closing',
    completedMessage: 'Marked as completed. Thank you!',
    downloadLabel: 'Descargar presentación (PDF)',
    generatingLabel: 'Generando PDF...',
    pdfFileName: 'somos-talk-presentation.pdf',
    closingNote: 'AI does not replace human judgment; it scales it. Gracias.',
  },
} as const

export type SlideContent = typeof slideContent

export const presentationPages: PresentationPage[] = [
  {
    id: 'welcome',
    title: slideContent.welcome.hero.title,
    subtitle: slideContent.welcome.hero.eyebrow,
    intro: slideContent.welcome.hero.description,
    sections: [
      {
        heading: 'What We Will Cover',
        bullets: slideContent.welcome.overview.map(
          (item) => `${item.title}: ${item.description}`,
        ),
      },
      {
        heading: slideContent.welcome.mindset.title,
        paragraphs: [slideContent.welcome.mindset.summary],
        bullets: slideContent.welcome.mindset.tags,
      },
    ],
  },
  {
    id: 'context-stacking',
    title: slideContent.contextStacking.title,
    subtitle: slideContent.contextStacking.subtitle,
    sections: [
      {
        heading: 'Core Ideas',
        bullets: slideContent.contextStacking.principles,
      },
      {
        heading: 'Before vs After',
        paragraphs: [slideContent.contextStacking.beforeAfter.description],
        note: slideContent.contextStacking.beforeAfter.reminder,
      },
      {
        heading: 'Express Workflow',
        paragraphs: slideContent.contextStacking.workflow.map(
          (step) => `${step.title}: ${step.detail}`,
        ),
      },
    ],
  },
  {
    id: 'slack-bot',
    title: slideContent.slackBot.title,
    subtitle: slideContent.slackBot.subtitle,
    sections: [
      {
        heading: 'What it solves',
        bullets: slideContent.slackBot.benefits,
        note: slideContent.slackBot.metric,
      },
      {
        heading: 'Reference architecture',
        paragraphs: slideContent.slackBot.stack.map(
          (layer) => `${layer.title}: ${layer.detail}`,
        ),
      },
      {
        heading: 'Operational notes',
        paragraphs: [
          `Guardrails: ${slideContent.slackBot.guardrails}`,
          `Measurement: ${slideContent.slackBot.measurement}`,
          `Demo idea: ${slideContent.slackBot.demo}`,
        ],
      },
    ],
  },
  {
    id: 'agentic-workflows',
    title: slideContent.agenticWorkflows.title,
    subtitle: slideContent.agenticWorkflows.subtitle,
    sections: [
      {
        heading: 'Multi-step pipeline',
        bullets: slideContent.agenticWorkflows.pipeline,
        note: slideContent.agenticWorkflows.tooling,
      },
      {
        heading: 'Use cases',
        paragraphs: slideContent.agenticWorkflows.useCases.map(
          (useCase) => `${useCase.title}: ${useCase.detail}`,
        ),
      },
      {
        heading: 'Example brief',
        paragraphs: [slideContent.agenticWorkflows.example],
      },
      {
        heading: 'Guardrails',
        bullets: slideContent.agenticWorkflows.guardrails,
      },
    ],
  },
  {
    id: 'custom-tools',
    title: slideContent.customTools.title,
    subtitle: slideContent.customTools.subtitle,
    sections: [
      {
        heading: 'Custom tools build',
        bullets: slideContent.customTools.toolHighlights,
        note: slideContent.customTools.toolOutcome,
      },
      {
        heading: 'Reference architecture',
        bullets: slideContent.customTools.referenceArchitecture,
      },
      {
        heading: 'Fine-tuned models',
        bullets: slideContent.customTools.modelGains,
      },
      {
        heading: 'Case in production',
        paragraphs: [slideContent.customTools.caseStudy],
        note: slideContent.customTools.caseInsight,
      },
    ],
  },
  {
    id: 'showcase',
    title: slideContent.showcase.title,
    subtitle: slideContent.showcase.subtitle,
    sections: slideContent.showcase.highlights.map((highlight) => ({
      heading: highlight.title,
      paragraphs: [highlight.description],
      bullets: highlight.bullets,
    })),
  },
  {
    id: 'closing',
    title: slideContent.closing.title,
    subtitle: slideContent.closing.subtitle,
    intro: slideContent.closing.reflection,
    sections: [
      {
        heading: 'Primary CTA',
        paragraphs: [slideContent.closing.primaryCta, slideContent.closing.primaryDescription],
      },
      {
        heading: 'Next steps',
        bullets: [
          slideContent.closing.feedback.nextStep,
          slideContent.closing.feedback.feedbackLoop,
          slideContent.closing.feedback.share,
        ],
      },
    ],
    closingNote: slideContent.closing.closingNote,
  },
]
