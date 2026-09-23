import type { PageContent } from '../types';
import { HOME, LINKS, cta } from '../helpers';

const page: PageContent = {
  slug: '/compare/',
  title: 'Comparisons: AI Employees, Agents, Chatbots and Humans',
  eyebrow: 'Compare',
  metaTitle: 'Comparisons: AI Employees vs Agents, Chatbots, Assistants and Humans | Eligoo',
  metaDescription: 'Balanced comparisons of AI employees, AI agents, chatbots, ChatGPT, Claude, Grok, SDRs and agencies — where each wins, where it doesn’t, and how Eligoo fits.',
  primaryKeyword: 'AI employee vs AI agent',
  secondaryKeywords: ['AI agent vs chatbot', 'AI employee vs human', 'AI SDR vs human SDR', 'AI voice agent vs SDR', 'ChatGPT vs AI agents', 'AI marketing agent vs agency'],
  answer: 'These pages compare the things people confuse with each other or weigh against each other: AI employees and AI agents, agents and chatbots, assistants such as ChatGPT, Claude and Grok against agents, and AI employees against the people and agencies they might work alongside. Each comparison states plainly where the alternative is the better choice.',
  sections: [
    {
      kind: 'directory',
      heading: 'The comparisons',
      items: [
        { title: 'AI employee vs AI agent', text: 'Every AI employee is an agent; what turns an agent into an employee is a role, a KPI and an approval boundary.', href: '/compare/ai-employee-vs-ai-agent/', badge: 'Concepts' },
        { title: 'AI agent vs chatbot', text: 'A chatbot replies inside a conversation; an agent acts on systems towards a goal.', href: '/compare/ai-agent-vs-chatbot/', badge: 'Concepts' },
        { title: 'AI employee vs human employee', text: 'Repeatable work versus judgement, relationships, negotiation and accountability.', href: '/compare/ai-employee-vs-human/', badge: 'People' },
        { title: 'AI sales agent vs SDR', text: 'Volume, consistency and follow-up discipline against rapport and objection handling.', href: '/compare/ai-sales-agent-vs-sdr/', badge: 'People' },
        { title: 'AI voice agent vs human SDR', text: 'Who should be on the phone: structured calls at volume, or the conversations that need a person.', href: '/compare/ai-voice-agent-vs-human-sdr/', badge: 'People' },
        { title: 'AI marketing agent vs marketing agency', text: 'Recurring execution in your own accounts against senior strategy, craft and media relationships.', href: '/compare/ai-marketing-agent-vs-agency/', badge: 'People' },
        { title: 'ChatGPT vs AI agents', text: 'An assistant you converse with against software that acts; OpenAI models can power both.', href: '/compare/chatgpt-vs-ai-agents/', badge: 'Assistants' },
        { title: 'Claude vs AI agents', text: 'Anthropic’s assistant and models against agents built on them.', href: '/compare/claude-vs-ai-agents/', badge: 'Assistants' },
        { title: 'Grok vs AI agents', text: 'xAI’s assistant against agents — and where Grok stands with Eligoo today.', href: '/compare/grok-vs-ai-agents/', badge: 'Assistants' },
      ],
    },
    {
      kind: 'prose',
      heading: 'How we write these comparisons',
      paragraphs: [
        'A comparison page that always ends with the author’s product winning is not a comparison. On every page here the verdict comes first, both sides are defined on their own terms, the side-by-side table is written to be fair, and there is a section on when the alternative is the better choice. Where a person or an agency wins — judgement, relationships, negotiation, taste, accountability — we say so.',
        'We do not quote statistics we did not measure. Where Eligoo has a genuine limitation — for example, that Grok is not a supported provider — it is stated on the page. If you think a comparison is unbalanced, tell us and we will revise it.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How Eligoo fits',
      paragraphs: [
        'Eligoo is an AI workforce platform: eight AI employees working from one workspace, coordinated by Atlas. Each is an agent with a defined role, KPI and approval boundary, running on the AI provider accounts you connect. The comparisons above are meant to help you decide whether that is the right shape for your work — and, if it is, which parts of the work to give it.',
      ],
    },
    {
      kind: 'related',
      heading: 'Go deeper',
      links: [LINKS.glossary, LINKS.guides, LINKS.aiEmployees, LINKS.aiAgents, LINKS.aiWorkforce, LINKS.pricing],
    },
    cta('Decide with a trial rather than a table', 'Hire one employee, give it a real task, and compare the result with how the work gets done today.'),
  ],
  breadcrumb: [HOME],
  schema: ['CollectionPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
