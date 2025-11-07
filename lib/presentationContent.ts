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

export const presentationPages: PresentationPage[] = [
  {
    id: 'welcome',
    title: 'Somos: AI that amplifies human judgment',
    subtitle: 'Assent operating system for applied AI',
    intro:
      'Session plan: show how we calibrate rooms, stack context, and ship workflows that already drive value at Assent. No hype, just delivery.',
    sections: [
      {
        heading: 'What we will cover',
        bullets: [
          'Concrete playbooks: context stacking, agents, and tooling we run inside Assent.',
          'Real use cases: Slack, Legal, Finance, and Data Quality with impact metrics.',
        ],
      },
      {
        heading: 'Mindset',
        paragraphs: [
          'Core belief: AI does not replace expertise, it amplifies it. When we stack context, design guardrails, and build tools that match our workflows, AI becomes a multiplier for human judgment instead of a replacement.',
        ],
        bullets: ['Calibrate fast', 'Operate with guardrails', 'Share real playbooks'],
      },
    ],
  },
  {
    id: 'context-stacking',
    title: 'Context Stacking - Personal technique',
    subtitle: 'Teach the model how to think before asking it to work',
    sections: [
      {
        heading: 'Core ideas',
        bullets: [
          'This is not prompt magic; it is deliberate context design.',
          'We stack what the model must know: role, objective, tone, rules, and snippets.',
          'Every layer removes noise and pulls the model into our domain.',
        ],
      },
      {
        heading: 'Before vs after',
        paragraphs: [
          'Run a live demo comparing a cold prompt against the stacked prompt. The stacked version cuts manual cleanup by roughly 40% because the format, tone, and decision filters are already in place.',
          'Reminder: the context window is a canvas. Every word you add becomes part of the instruction set.',
        ],
      },
      {
        heading: 'Express workflow',
        bullets: [
          'Define role and outcome: “You are a compliance analyst. Summarize the key risks as a concise legal memo.”',
          'Stack the context: add tone, decision criteria, glossary items, templates, and counter-examples.',
          'Request the deliverable: once aligned, ask for the final output and expect around 40% less manual fixing.',
        ],
      },
    ],
  },
  {
    id: 'slack-bot',
    title: 'Slack Bot - Live FAQ for internal teams',
    subtitle: 'Remove daily friction by wiring Slack to OpenAI through a safe middleware layer',
    sections: [
      {
        heading: 'What it solves',
        bullets: [
          'Answers policy, document, and process questions without leaving Slack.',
          'Understands channel context and respects roles and permissions.',
          'Cuts repetitive questions for HR, Legal, and Compliance teams.',
        ],
        note: 'Internal metric: roughly 30% fewer “where is that file?” tickets in high-volume teams.',
      },
      {
        heading: 'Reference architecture',
        bullets: [
          'Middleware: LangChain with Python (FastAPI) orchestrates prompts, memory, and routing.',
          'Connectors: Slack Events API, OpenAI API, and internal repositories like SharePoint or Confluence.',
          'Control: request limits, logging, and human escalation when confidence drops below threshold.',
        ],
      },
      {
        heading: 'Operational notes',
        bullets: [
          'Guardrails: channel-aware permissions, PII filters, and an audit trail for prompts and responses.',
          'Measurement: adoption dashboards show resolved questions, hot topics, and time saved per team.',
          'Demo idea: ask “What is our travel policy?” and “Where is the vendor contract template?” to show contextual accuracy.',
        ],
      },
    ],
  },
  {
    id: 'agentic-workflows',
    title: 'Agentic workflows - Legal, Regulatory, Finance',
    subtitle: 'Automate repetitive analytical tasks while preserving traceability',
    sections: [
      {
        heading: 'Multi-step pipeline',
        bullets: [
          'Search: gather PDFs, folders, and internal APIs relevant to the request.',
          'Summarise: produce structured notes per section with consistent fields.',
          'Analyse: compare against internal policies and surface actionable insight.',
          'Deliver: output JSON, tables, or decks with citations for every data point.',
        ],
        note: 'Tooling: LangGraph or Airflow orchestrate steps, internal APIs supply sources, and human reviewers remain the final gate.',
      },
      {
        heading: 'Use cases',
        bullets: [
          'Legal: summarise contracts or external policies; flag risks, critical clauses, and gaps.',
          'Regulatory: normalise reporting requirements and produce compliance matrices with traceability.',
          'Finance: aggregate costs or risk signals by category and deliver reviewer-ready dashboards.',
        ],
      },
      {
        heading: 'Guardrails',
        bullets: [
          'Scope limits per agent and centralised logs.',
          'Citations for every source in the final output.',
          'Mandatory human approval before final decisions.',
        ],
        note: 'Example brief: “Scan three regulatory PDFs, build a requirement matrix, and highlight critical changes. Deliver a CSV ready for legal review in under five minutes.”',
      },
    ],
  },
  {
    id: 'custom-tools',
    title: 'Custom tools & fine-tuned models',
    subtitle: 'When a chatbot is not enough, ship lightweight UIs or bespoke models that guarantee outcomes',
    sections: [
      {
        heading: 'Custom tools build',
        bullets: [
          'Lightweight front-ends (Streamlit, FastAPI, internal apps) with embedded AI.',
          'Users upload a spreadsheet; the tool cleans and standardises the data.',
          'Outputs are Snowflake-ready or CSV with automatic validations.',
        ],
        note: 'Outcome: less manual effort, fewer errors, consistent deliverables for downstream analytics.',
      },
      {
        heading: 'Reference architecture',
        bullets: [
          'Lightweight front-end for upload and validation.',
          'Python services orchestrate cleaning, enrichment, and generation with AI.',
          'Native integrations push results into Snowflake or internal APIs.',
        ],
      },
      {
        heading: 'Fine-tuned models',
        bullets: [
          'Fine-tuned models (OpenAI or Bedrock) trained on labelled internal data.',
          'Understands technical vocabulary and inconsistent part descriptions.',
          'Delivers ~25% higher accuracy versus zero-shot GPT and saves manual QA hours.',
        ],
        note: 'Case in production: “500 rows - 30 seconds - clean schema.” The fine-tuned model normalises supplier part descriptions and returns Snowflake-ready attributes while Data Quality reports multiple hours saved each week on validation.',
      },
    ],
  },
  {
    id: 'showcase',
    title: 'Showcase - Creative, useful, fun',
    subtitle: 'AI elevates experiences in addition to automating tasks',
    sections: [
      {
        heading: 'Highlights',
        bullets: [
          'ElevenLabs: natural text-to-speech in English and Spanish. Demo: generate your voice reading a technical line.',
          'HeyGen: lip-synced video avatars with multilingual support. Demo: render onboarding scripts in English and Spanish.',
          'Google AI Studio (Vibe Code): train small models to copy tone and writing style. Compare neutral output vs. vibe-coded.',
          'VS Code plugins (Codex, Copilot, etc.): explain, refactor, or document code so new engineers ramp faster.',
        ],
      },
    ],
  },
  {
    id: 'closing',
    title: 'Closing - Scale your judgment with AI',
    subtitle: 'Structure context, automate the repetitive work, and protect time for thinking',
    sections: [
      {
        heading: 'Primary CTA',
        paragraphs: [
          'Join La Sesh: open sessions, templates, and real workflows. Share playbooks, iterate with the community, and bring live cases to refine together.',
        ],
      },
      {
        heading: 'Next steps',
        bullets: [
          'Document which part of the stack you will pilot this week.',
          'Bring results to La Sesh to tweak prompts, tools, or guardrails.',
          'Share the deck with the team to keep momentum and conversation alive.',
        ],
      },
    ],
    closingNote: 'AI does not replace human judgment; it scales it. Gracias.',
  },
]
