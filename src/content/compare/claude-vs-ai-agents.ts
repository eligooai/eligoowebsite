import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/compare/claude-vs-ai-agents/',
  title: 'Claude vs AI Agents',
  eyebrow: 'Compare',
  metaTitle: 'Claude vs AI Agents: Assistant, Model or Agent? | Eligoo',
  metaDescription: 'Claude is Anthropic’s assistant and family of models; an AI agent is software that acts on tasks with tools. How they relate, when to use each, and how Claude models power Eligoo’s AI employees.',
  primaryKeyword: 'Claude vs AI agents',
  secondaryKeywords: ['Claude vs AI agent', 'is Claude an AI agent', 'Anthropic Claude for business', 'AI agents built on Claude', 'AI agent vs AI assistant', 'AI agents for business'],
  answer: 'Claude is Anthropic’s AI assistant and the family of language models behind it: you converse with it, and it answers, writes, analyses and reasons. An AI agent is software that takes a goal, uses tools and acts on systems, usually unattended. They are not rivals — agents are commonly built on Claude models. The assistant is for thinking with; the agent is for getting recurring work done.',
  sections: [
    {
      kind: 'prose',
      heading: 'What is Claude?',
      paragraphs: [
        'Claude is two things that share a name. It is the assistant product from Anthropic — a chat interface on the web and in apps where you ask questions, paste documents, draft and reason through problems. And it is the family of models underneath, available to developers through Anthropic’s API, which is what businesses use when they build their own software on Claude.',
        'As an assistant, Claude is well regarded for long documents, careful reasoning and writing that sounds like a person. As a model, it is one of the main choices for building agents, because it follows instructions and tool definitions reliably over many steps.',
      ],
    },
    {
      kind: 'prose',
      heading: 'What is an AI agent?',
      paragraphs: [
        'An AI agent is a program built around a language model that is given an objective, tools and limits, then left to work: plan, act, read the result, iterate, finish, report. It runs on a schedule or in response to events. Its outputs are changes in the world — a list built, a sequence sent, a meeting booked, a record reconciled — rather than replies in a chat.',
        'The model does the reasoning; the agent framework provides the tools, the memory of the task, the definition of done and the rules about what needs a person. Claude can be the model inside; it is not itself the agent.',
      ],
    },
    {
      kind: 'table',
      heading: 'Side by side',
      columns: ['Dimension', 'Claude', 'AI agents'],
      rows: [
        ['What it is', 'An assistant product and a model family', 'Software that acts on tasks with tools'],
        ['How you use it', 'Conversation, or API calls from your own code', 'Give it a role, a goal and limits; review what it did'],
        ['Runs unattended', 'The assistant: no. The model: only inside an agent', 'Yes'],
        ['Connected to your systems', 'Via your own integration work', 'Wired to CRM, mailbox, phone, calendar, ad accounts'],
        ['Memory', 'Conversation context; projects in the assistant', 'Task history, activity log, KPIs'],
        ['Approval boundary', 'You, every turn', 'Defined once per role'],
        ['Best for', 'Reasoning, long documents, drafting, building on the API', 'Recurring business work with side effects'],
        ['Cost', 'Assistant subscription, or API usage', 'Platform plus usage; model tokens billed by Anthropic to you'],
      ],
    },
    {
      kind: 'list',
      heading: 'When Claude is the better choice',
      items: [
        'You need to think something through with a capable assistant: a strategy memo, a contract, a long report.',
        'The task is one-off and you will review the output line by line.',
        'You are a developer building your own agent and want Claude as the model, with full control of the harness.',
        'Careful writing quality matters more than automation.',
      ],
    },
    {
      kind: 'list',
      heading: 'When AI agents are the better choice',
      items: [
        'The work recurs and someone needs to own it week after week.',
        'The output is actions in systems, not text for a person to read.',
        'Several roles hand work to each other and you want an auditable record.',
        'You want the benefit of Claude models without building and maintaining the agent framework yourself.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How Eligoo fits',
      paragraphs: [
        `Eligoo’s AI employees are agents that can run on Claude models. ${FACTS.byok} Connect your Anthropic account, set a Claude model as the workspace default or assign it to particular employees — many customers put a strong reasoning model on Atlas and Maven and a faster one on high-volume roles — and Anthropic bills the tokens to your account.`,
        `Each employee has a defined role, KPI and approval boundary. ${FACTS.approvals} You can also chat with any employee directly, which feels like using an assistant — except the employee has a task board and keeps working when you close the window.`,
      ],
    },
    faq([
      { q: 'Is Claude an AI agent?', a: 'Claude is an assistant and a model family. Agents are built on models like Claude; Claude by itself, in the chat interface, is not an agent in the sense of acting on your systems unattended.' },
      { q: 'Can I run Eligoo on Claude?', a: 'Yes. Connect your Anthropic account in the workspace, then choose Claude models as the default or per employee. Keys are stored server-side and masked in the interface.' },
      { q: 'Which Claude model should I use for agents?', a: 'That depends on the role. Reasoning-heavy roles such as planning and strategy benefit from a stronger model; high-volume roles such as classification can use a faster one. Eligoo lets you assign a model per employee so you can test both.' },
      { q: 'Do I need both Claude and Eligoo?', a: 'They serve different moments. Claude for thinking and drafting with you present; Eligoo for the recurring execution that runs on Claude models when you are not.' },
      { q: 'Can I mix Claude with other providers?', a: 'Yes. Eligoo supports OpenAI, Anthropic, Google Gemini, Groq and OpenRouter accounts, with a workspace default and per-employee assignment.' },
    ]),
    related([
      { label: 'Anthropic integration', href: '/integrations/anthropic/' }, LINKS.aiAgents, LINKS.glAgent, LINKS.aiEmployees,
      { label: 'ChatGPT vs AI agents', href: '/compare/chatgpt-vs-ai-agents/' }, { label: 'Grok vs AI agents', href: '/compare/grok-vs-ai-agents/' },
      LINKS.cmpAgentChatbot, LINKS.cmpEmployeeAgent,
    ]),
    cta('Run your AI employees on Claude', 'Connect your Anthropic account, pick a model per employee, and give Claude a job with a KPI and an approval boundary.'),
  ],
  breadcrumb: CRUMBS.compare,
  schema: ['Article', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
