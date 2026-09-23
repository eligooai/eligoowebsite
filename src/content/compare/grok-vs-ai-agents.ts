import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/compare/grok-vs-ai-agents/',
  title: 'Grok vs AI Agents',
  eyebrow: 'Compare',
  metaTitle: 'Grok vs AI Agents: What’s the Difference? | Eligoo',
  metaDescription: 'Grok is xAI’s conversational assistant and model family; an AI agent is software that acts on tasks with tools. How they differ, when each fits, and where Grok stands with Eligoo today.',
  primaryKeyword: 'Grok vs AI agents',
  secondaryKeywords: ['Grok vs AI agent', 'is Grok an AI agent', 'xAI Grok for business', 'AI agent vs AI assistant', 'AI agents for business'],
  answer: 'Grok is the conversational assistant and model family from xAI, known for its integration with the X platform and real-time access to what is being posted there. An AI agent is software that takes a goal, uses tools and acts on business systems, usually unattended. Grok is something you converse with; an agent is something that does work. Eligoo does not support Grok as a model provider today.',
  sections: [
    {
      kind: 'prose',
      heading: 'What is Grok?',
      paragraphs: [
        'Grok is xAI’s assistant. It is available inside X and as a standalone app, and xAI also offers its models to developers through an API. Its distinctive trait is closeness to the X platform: it can draw on current posts and trends, which makes it useful for questions about what people are saying right now. Its tone is deliberately more informal than other assistants.',
        'Like other assistants, its unit of work is a conversation you are present for. It answers, drafts, summarises and searches; it does not run your prospecting on Tuesday night.',
      ],
    },
    {
      kind: 'prose',
      heading: 'What is an AI agent?',
      paragraphs: [
        'An AI agent is a program built around a language model that is given an objective, tools and limits, and works until the objective is met: plan, act, read the result, iterate, report. Its outputs are actions — records updated, emails sent, calls made, posts published — and it runs whether or not anyone is watching. The model inside could be from any provider; the agent is the harness of tools, task memory, definition of done and approval rules around it.',
      ],
    },
    {
      kind: 'table',
      heading: 'Side by side',
      columns: ['Dimension', 'Grok', 'AI agents'],
      rows: [
        ['What it is', 'An assistant product and model family from xAI', 'Software that acts on tasks with tools'],
        ['Distinctive strength', 'Real-time awareness of X, informal tone', 'Unattended execution inside limits'],
        ['How you use it', 'Conversation in X or the app; API for developers', 'Assign a role, a goal and limits; review the log'],
        ['Runs unattended', 'No', 'Yes'],
        ['Connected to your systems', 'Not out of the box', 'CRM, mailbox, phone, calendar, ad accounts'],
        ['Approval boundary', 'You, every turn', 'Defined once per role'],
        ['Best for', 'Live social context, quick answers, drafting', 'Recurring business work with side effects'],
        ['Availability in Eligoo', 'Not a supported provider today', 'Runs on OpenAI, Anthropic, Google Gemini, Groq or OpenRouter accounts'],
      ],
    },
    {
      kind: 'list',
      heading: 'When Grok is the better choice',
      items: [
        'You want to know what is being said on X right now about a topic, a competitor or your brand.',
        'You need quick, informal drafting or a second opinion, and you are present to review it.',
        'You are a developer who specifically wants xAI models in your own application.',
      ],
    },
    {
      kind: 'list',
      heading: 'When AI agents are the better choice',
      items: [
        'The work recurs and must happen without a person at the keyboard.',
        'The output is actions in your business systems, not a reply in a chat.',
        'You want a defined role, a KPI and an approval boundary around what the AI may do.',
        'Several roles hand work to each other and you want an auditable record.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How Eligoo fits',
      paragraphs: [
        `Eligoo’s AI employees are agents with a defined role, KPI and approval boundary, and they run on models from accounts you connect. ${FACTS.byok} Grok and xAI are not among the supported providers today, so an Eligoo workspace cannot be pointed at Grok models; if that changes it will be reflected on the integrations pages.`,
        `${FACTS.approvals} For research into what is being said on X, Maven uses web search rather than a direct X connection.`,
      ],
    },
    faq([
      { q: 'Is Grok an AI agent?', a: 'Grok is an assistant and a model family. It can search and draft within a conversation, but it does not act on your business systems unattended, which is what defines an AI agent.' },
      { q: 'Can I use Grok with Eligoo?', a: 'Not today. Eligoo supports OpenAI, Anthropic, Google Gemini, Groq and OpenRouter accounts for models. Note that Groq — the inference provider — is not the same as Grok.' },
      { q: 'Is Groq the same as Grok?', a: 'No. Groq is a company that runs open models on its own fast inference hardware and is a supported provider in Eligoo. Grok is xAI’s assistant and model family and is not supported.' },
      { q: 'Can an AI agent monitor X for me?', a: 'Eligoo does not connect to X directly. Maven can research public web sources with search, and Sage publishes to Instagram, Facebook Pages, Threads, LinkedIn and YouTube — not to X.' },
      { q: 'Which provider should I choose for agents instead?', a: 'Any of the supported ones works; the practical approach is to set a workspace default, assign a stronger model to planning roles and a faster one to high-volume roles, and compare results in the activity log.' },
    ]),
    related([
      LINKS.aiAgents, LINKS.glAgent, LINKS.integrations, { label: 'Groq integration', href: '/integrations/groq/' }, { label: 'OpenRouter integration', href: '/integrations/openrouter/' },
      { label: 'ChatGPT vs AI agents', href: '/compare/chatgpt-vs-ai-agents/' }, { label: 'Claude vs AI agents', href: '/compare/claude-vs-ai-agents/' },
      LINKS.cmpAgentChatbot,
    ]),
    cta('Run agents on a supported provider', 'Connect OpenAI, Anthropic, Google Gemini, Groq or OpenRouter, hire an employee and give it a job.'),
  ],
  breadcrumb: CRUMBS.compare,
  schema: ['Article', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
