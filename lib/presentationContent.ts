export interface BulletGroup {
  title?: string
  items: string[]
}

export interface PresentationSection {
  title: string
  subtitle?: string
  paragraphs?: string[]
  bulletGroups?: BulletGroup[]
  tags?: string[]
  cta?: string
}

export const presentationSections: PresentationSection[] = [
  {
    title: 'Welcome',
    subtitle: 'AI that amplifies human judgment',
    paragraphs: [
      'Somos - Assent.',
      'This session shows how we operate AI day to day: how we calibrate the room, stack context, and ship workflows that already drive value at Assent. No hype, just delivery.',
    ],
    bulletGroups: [
      {
        title: 'Concrete Playbooks',
        items: ['Context stacking, agents, and tooling we already run inside Assent.'],
      },
      {
        title: 'Real Use Cases',
        items: ['Slack, Legal, Finance, and Data Quality with impact metrics.'],
      },
    ],
    tags: ['Calibrate fast', 'Operate with guardrails', 'Share real playbooks'],
  },
  {
    title: 'Context Stacking - Personal Technique',
    subtitle: 'We teach the model how to think before we ask it to work.',
    bulletGroups: [
      {
        title: 'Core Ideas',
        items: [
          'This is not prompt magic; it is deliberate context design.',
          'We stack what the model must know: role, objective, tone, rules, and snippets.',
          'Every layer removes noise and pulls the model into our domain.',
        ],
      },
      {
        title: 'Before vs After',
        items: [
          'Run a live demo comparing a cold prompt against the stacked prompt. The stacked version cuts manual cleanup by roughly 40% because the format, tone, and decision filters are already in place.',
          'Reminder: the context window is a canvas. Every word you add becomes part of the instruction set.',
        ],
      },
      {
        title: 'Express Workflow',
        items: [
          '1. Define role and outcome — Example: "You are a compliance analyst. Summarize the key risks as a concise legal memo."',
          '2. Stack the context — Add tone, decision criteria, glossary items, templates, and counter-examples.',
          '3. Request the deliverable — Once aligned, ask for the final output. Expect around 40% less manual fixing.',
        ],
      },
    ],
  },
  {
    title: 'Slack Bot - Live FAQ for Internal Teams',
    subtitle: 'Purpose: remove daily friction by wiring Slack to OpenAI through a safe middleware layer.',
    bulletGroups: [
      {
        title: 'What it solves',
        items: [
          'Answers policy, document, and process questions without leaving Slack.',
          'Understands channel context and respects roles and permissions.',
          'Cuts repetitive questions for HR, Legal, and Compliance teams.',
          'Internal metric: roughly 30% fewer "where is that file?" tickets in high-volume teams.',
        ],
      },
      {
        title: 'Reference architecture',
        items: [
          'Middleware — LangChain with Python (FastAPI) orchestrates prompts, memory, and routing.',
          'Connectors — Slack Events API, OpenAI API, and internal repositories like SharePoint or Confluence.',
          'Control — Request limits, logging, and human escalation when confidence drops below threshold.',
        ],
      },
      {
        title: 'Operations',
        items: [
          'Guardrails — Channel-aware permissions, PII filters, audit trail for prompts and responses.',
          'Measurement — Adoption dashboards: resolved questions, hot topics, and time saved per team.',
          'Demo idea — Ask "What is our travel policy?" and "Where is the vendor contract template?" to show contextual accuracy.',
        ],
      },
    ],
  },
  {
    title: 'Agentic Workflows - Legal, Regulatory, Finance',
    subtitle: 'Goal: automate repetitive analytical tasks while preserving full traceability.',
    bulletGroups: [
      {
        title: 'Multi-step pipeline',
        items: [
          'Search: gather PDFs, folders, and internal APIs relevant to the request.',
          'Summarise: produce structured notes per section with consistent fields.',
          'Analyse: compare against internal policies and surface actionable insight.',
          'Deliver: output JSON, tables, or decks with citations for every data point.',
          'Tooling: LangGraph or Airflow to orchestrate, internal APIs as sources, human reviewers as the final gate.',
        ],
      },
      {
        title: 'Use cases',
        items: [
          'Legal — Summarise contracts or external policies. Flag risks, critical clauses, and gaps.',
          'Regulatory — Normalise reporting requirements and produce compliance matrices with traceability.',
          'Finance — Aggregate costs or risk signals by category and deliver reviewer-ready dashboards.',
        ],
      },
      {
        title: 'Guardrails',
        items: [
          'Example: "Scan these three regulatory PDFs, build a requirement matrix, and highlight critical changes." The agent returns a CSV ready for legal review in under five minutes.',
          'Scope limits per agent and centralised logs.',
          'Citations for every source in the final output.',
          'Mandatory human approval before final decisions.',
        ],
      },
    ],
  },
  {
    title: 'Custom Tools + Fine-tuned Models',
    subtitle: 'When a chatbot is not enough, we ship lightweight UIs or bespoke models that guarantee the outcome.',
    bulletGroups: [
      {
        title: 'Custom tools build',
        items: [
          'Lightweight front-ends (Streamlit, FastAPI, internal apps) with embedded AI.',
          'Users upload a spreadsheet; the tool cleans and standardises the data.',
          'Outputs are Snowflake-ready or CSV with automatic validations.',
          'Outcome: less manual effort, fewer errors, consistent deliverables for downstream analytics.',
        ],
      },
      {
        title: 'Reference architecture',
        items: [
          'Lightweight front-end for upload and validation.',
          'Python services orchestrate cleaning, enrichment, and generation with AI.',
          'Native integrations push results into Snowflake or internal APIs.',
        ],
      },
      {
        title: 'Fine-tuned models',
        items: [
          'Fine-tuned model (OpenAI or Bedrock) trained on labelled internal data.',
          'Understands our technical vocabulary and inconsistent part descriptions.',
          'Delivers ~25% higher accuracy versus zero-shot GPT and saves manual QA hours.',
          'Case in production: "500 rows - 30 seconds - clean schema." The model normalises supplier part descriptions and returns Snowflake-ready attributes. Data Quality reports multiple hours saved each week on manual validation.',
        ],
      },
    ],
  },
  {
    title: 'Showcase - Creative, Useful, Fun',
    subtitle: 'Goal: prove that AI is not only automation, it can elevate experiences too.',
    bulletGroups: [
      {
        title: 'ElevenLabs',
        items: [
          'Natural text-to-speech in English and Spanish.',
          'Perfect for fast demos, training videos, or inclusive content.',
          'Demo idea: generate your voice reading a technical line.',
        ],
      },
      {
        title: 'HeyGen',
        items: [
          'Lip-synced video avatars with multilingual support.',
          'Use text or audio to create a digital presenter.',
          'Demo idea: same script rendered in English and Spanish for onboarding.',
        ],
      },
      {
        title: 'Google AI Studio (Vibe Code)',
        items: [
          'Train small models to copy your tone and writing style.',
          'Example: friendly-but-concise emails for internal comms.',
          'Demo idea: compare neutral output vs. your vibe-coded version.',
        ],
      },
      {
        title: 'VS Code Plugins (Codex, Copilot, etc.)',
        items: [
          'Embedded AI to explain, refactor, or document code.',
          'Example: "explain this function" -> docstring plus suggested tests.',
          'Helps new engineers ramp up without slowing the team down.',
        ],
      },
    ],
  },
  {
    title: 'Closing - Scale Your Judgment with AI',
    paragraphs: [
      'AI does not replace human judgment; it scales it. Structure the context, automate the repetitive work, and protect time for thinking.',
      'Join La Sesh - open sessions, templates, and real workflows. Share your playbooks, iterate with the community, and bring live cases to refine together.',
    ],
    bulletGroups: [
      {
        title: 'Next step',
        items: ['Document which part of the stack you will pilot this week.'],
      },
      {
        title: 'Feedback loop',
        items: ['Bring results to La Sesh to tweak prompts, tools, or guardrails.'],
      },
      {
        title: 'Share the talk',
        items: ['Send the deck to the team to keep momentum and conversation alive.'],
      },
    ],
    cta: 'Marked as completed. Thank you!',
  },
]
