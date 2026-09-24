import type { CtaSection, PageLink, RelatedSection, FaqSection, EmployeesSection, EmployeeName } from './types';

export const SITE = 'https://eligoo.in';
export const TRIAL_URL = '/app/sign-up?plan=plan_trial';
export const SIGN_IN_URL = '/app/sign-in';
export const BOOK_URL = 'https://calendly.com/eligooai/30min';

export const HOME: PageLink = { label: 'Home', href: '/' };
export const CRUMBS = {
  solutions: [HOME, { label: 'Solutions', href: '/solutions/' }],
  employees: [HOME, { label: 'AI employees', href: '/ai-employees/' }],
  industries: [HOME, { label: 'Industries', href: '/industries/' }],
  integrations: [HOME, { label: 'Integrations', href: '/integrations/' }],
  useCases: [HOME, { label: 'Use cases', href: '/use-cases/' }],
  compare: [HOME, { label: 'Compare', href: '/compare/' }],
  resources: [HOME, { label: 'Resources', href: '/resources/' }],
  guides: [HOME, { label: 'Resources', href: '/resources/' }, { label: 'Guides', href: '/resources/guides/' }],
  glossary: [HOME, { label: 'Resources', href: '/resources/' }, { label: 'Glossary', href: '/resources/glossary/' }],
  research: [HOME, { label: 'Resources', href: '/resources/' }, { label: 'Research', href: '/resources/research/' }],
  templates: [HOME, { label: 'Resources', href: '/resources/' }, { label: 'Templates', href: '/resources/templates/' }],
};

/** Standard closing CTA. */
export const cta = (title: string, text: string, secondary: PageLink = { label: 'Talk to us', href: BOOK_URL }): CtaSection => ({
  kind: 'cta', title, text, primary: { label: 'Start free trial', href: TRIAL_URL }, secondary,
});

export const related = (links: PageLink[], heading = 'Related pages'): RelatedSection => ({ kind: 'related', heading, links });

export const faq = (items: { q: string; a: string }[], heading = 'Frequently asked questions'): FaqSection => ({ kind: 'faq', heading, items });

export const employees = (names: EmployeeName[], heading: string, intro?: string, notes?: EmployeesSection['notes']): EmployeesSection => ({
  kind: 'employees', heading, intro, names, notes,
});

/** Pricing pointer used on product pages (the full live plans live on /pricing/). */
export const pricingPointer = (subject = 'this'): { kind: 'prose'; heading: string; paragraphs: string[] } => ({
  kind: 'prose',
  heading: 'Pricing',
  paragraphs: [
    `Eligoo is a platform subscription priced per workspace, not per seat. A plan includes a set of AI employees, team seats and features; there are no credits or usage charges from Eligoo. ${subject === 'this' ? 'The work' : subject} runs on your own AI provider key (OpenAI, Anthropic, Gemini or OpenRouter), stored in your workspace, and the provider bills you for model usage directly with no markup.`,
    'Current plans and trial terms are published live on the pricing page.',
  ],
});

/** Frequently reused facts, written once so every page says the same true thing. */
export const FACTS = {
  byok: 'Eligoo connects to the AI provider accounts you already have (OpenAI, Anthropic, Google Gemini, Groq or OpenRouter). Keys are stored server-side in your workspace and never sent to the browser.',
  approvals: 'Actions that reach the outside world — sending an outreach sequence, launching or changing ad spend, publishing outside an approved calendar, starting a calling campaign — wait in an approvals queue until a person approves them.',
  workspace: 'Each customer runs in its own workspace with its own data, connections, AI keys and settings.',
};

export const LINKS = {
  aiEmployees: { label: 'AI employees', href: '/ai-employees/' },
  aiAgents: { label: 'AI agents for business', href: '/ai-agents/' },
  aiWorkforce: { label: 'AI workforce', href: '/ai-workforce/' },
  aiAutomation: { label: 'AI business automation', href: '/ai-automation/' },
  pricing: { label: 'Pricing', href: '/pricing/' },
  security: { label: 'Security', href: '/security/' },
  about: { label: 'About Eligoo', href: '/about/' },
  marketing: { label: 'AI marketing automation', href: '/solutions/marketing/' },
  sales: { label: 'AI sales agent', href: '/solutions/sales/' },
  voice: { label: 'AI voice agent', href: '/solutions/voice/' },
  outbound: { label: 'AI outbound sales', href: '/solutions/outbound/' },
  leadGen: { label: 'AI lead generation', href: '/solutions/lead-generation/' },
  support: { label: 'AI customer support agent', href: '/solutions/customer-support/' },
  operations: { label: 'AI operations automation', href: '/solutions/operations/' },
  revenue: { label: 'AI revenue intelligence', href: '/solutions/revenue/' },
  atlas: { label: 'Atlas — AI operations manager', href: '/ai-employees/atlas/' },
  maven: { label: 'Maven — AI marketing strategist', href: '/ai-employees/maven/' },
  sage: { label: 'Sage — AI content & SEO', href: '/ai-employees/sage/' },
  pixel: { label: 'Pixel — AI creative production', href: '/ai-employees/pixel/' },
  radar: { label: 'Radar — AI prospect intelligence', href: '/ai-employees/radar/' },
  hook: { label: 'Hook — AI sales & voice agent', href: '/ai-employees/hook/' },
  ledger: { label: 'Ledger — AI revenue intelligence', href: '/ai-employees/ledger/' },
  boost: { label: 'Boost — AI paid acquisition', href: '/ai-employees/boost/' },
  industries: { label: 'Industries', href: '/industries/' },
  integrations: { label: 'Integrations', href: '/integrations/' },
  useCases: { label: 'Use cases', href: '/use-cases/' },
  compare: { label: 'Comparisons', href: '/compare/' },
  glossary: { label: 'Glossary', href: '/resources/glossary/' },
  guides: { label: 'Guides', href: '/resources/guides/' },
  templates: { label: 'Workflow templates', href: '/resources/templates/' },
  research: { label: 'Research', href: '/resources/research/' },
  blog: { label: 'Blog', href: '/resources/blog/' },
  ucColdCalling: { label: 'AI cold calling', href: '/use-cases/cold-calling/' },
  ucAppointments: { label: 'AI appointment setting', href: '/use-cases/appointment-setting/' },
  ucLeadGen: { label: 'Lead generation use case', href: '/use-cases/lead-generation/' },
  ucOutbound: { label: 'Outbound sales use case', href: '/use-cases/outbound-sales/' },
  glVoice: { label: 'What is an AI voice agent?', href: '/resources/glossary/ai-voice-agent/' },
  glSdr: { label: 'What is an AI SDR?', href: '/resources/glossary/ai-sdr/' },
  glEmployee: { label: 'What is an AI employee?', href: '/resources/glossary/ai-employee/' },
  glAgent: { label: 'What is an AI agent?', href: '/resources/glossary/ai-agent/' },
  glWorkforce: { label: 'What is an AI workforce?', href: '/resources/glossary/ai-workforce/' },
  cmpEmployeeAgent: { label: 'AI employee vs AI agent', href: '/compare/ai-employee-vs-ai-agent/' },
  cmpAgentChatbot: { label: 'AI agent vs chatbot', href: '/compare/ai-agent-vs-chatbot/' },
  cmpVoiceSdr: { label: 'AI voice agent vs human SDR', href: '/compare/ai-voice-agent-vs-human-sdr/' },
  cmpSalesSdr: { label: 'AI sales agent vs SDR', href: '/compare/ai-sales-agent-vs-sdr/' },
} as const;
