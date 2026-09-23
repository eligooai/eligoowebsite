import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/',
  title: 'AI Workforce Glossary',
  eyebrow: 'Resources · Glossary',
  metaTitle: 'AI Workforce Glossary — AI Agents, AI Employees, Voice Agents, SDRs and Automation Defined | Eligoo',
  metaDescription: 'Plain definitions of the terms used around AI employees and AI agents: AI workforce, AI SDR, AI voice agent, AI cold calling, agentic AI, multi-agent systems, AI orchestration and more.',
  primaryKeyword: 'AI glossary',
  secondaryKeywords: ['AI agent definition', 'AI employee definition', 'AI workforce definition', 'what is agentic AI', 'what is an AI SDR', 'what is an AI voice agent', 'AI automation terms'],
  answer: 'This glossary defines the twelve terms that come up most often when a business evaluates AI employees and AI agents. Each entry opens with a one- or two-sentence definition you can quote, then explains how the thing works, what it is made of, where it is used and where it falls short.',
  sections: [
    {
      kind: 'directory',
      heading: 'Terms',
      items: [
        { title: 'AI agent', text: 'Software that uses an AI model to pursue a goal on its own — reading inputs, choosing actions, calling tools and checking results until the task is done or a person is needed.', href: '/resources/glossary/ai-agent/' },
        { title: 'AI employee', text: 'An AI agent given a named role, a defined scope of work, its own tools, a KPI and an approval boundary, so it can be assigned work like a member of staff.', href: '/resources/glossary/ai-employee/' },
        { title: 'AI workforce', text: 'A set of AI employees that work together in one workspace under shared goals, coordination and approvals — a team rather than a collection of separate tools.', href: '/resources/glossary/ai-workforce/' },
        { title: 'AI SDR', text: 'An AI agent that does the top-of-funnel work of a sales development representative: researching prospects, sending outreach, handling replies, qualifying and booking meetings.', href: '/resources/glossary/ai-sdr/' },
        { title: 'AI voice agent', text: 'Software that conducts phone conversations autonomously using speech recognition, an AI model and text-to-speech.', href: '/resources/glossary/ai-voice-agent/' },
        { title: 'AI cold calling', text: 'The use of an AI voice agent to place first-contact calls to prospects, deliver an opening, handle the response and record an outcome.', href: '/resources/glossary/ai-cold-calling/' },
        { title: 'AI outbound sales', text: 'The use of AI agents to run the proactive side of selling — finding, contacting, following up and booking — instead of waiting for inbound enquiries.', href: '/resources/glossary/ai-outbound-sales/' },
        { title: 'Agentic AI', text: 'AI systems that plan and take actions towards a goal with limited supervision, rather than returning one answer to one prompt.', href: '/resources/glossary/agentic-ai/' },
        { title: 'Multi-agent system', text: 'A set of AI agents with distinct roles that hand work to each other, usually with one agent coordinating, to complete something none could do alone.', href: '/resources/glossary/multi-agent-system/' },
        { title: 'AI automation', text: 'Using AI models to carry out tasks that used to need a person to read, judge or write, usually combined with rule-based automation for the predictable parts.', href: '/resources/glossary/ai-automation/' },
        { title: 'AI orchestration', text: 'The coordination of agents, models and tools so that work flows between them in the right order with shared context, hand-offs, approvals and reporting.', href: '/resources/glossary/ai-orchestration/' },
        { title: 'AI revenue operations (AI RevOps)', text: 'Using AI agents to maintain and analyse the data behind the revenue process — CRM hygiene, funnel metrics, attribution, forecasting — so everyone works from verified numbers.', href: '/resources/glossary/ai-revenue-operations/' },
      ],
    },
    {
      kind: 'prose',
      heading: 'How these definitions are written',
      paragraphs: [
        'Every entry follows the same order. The definition comes first, in one or two sentences, without a preamble. Then a short section on how the thing works, a list of its components, generic examples of where it shows up, its benefits and — with equal weight — its limitations. Each entry closes with related concepts, a few questions people actually ask, and a short factual note on how the term applies inside Eligoo.',
        'The limitations sections are not decorative. An AI voice agent cannot negotiate; an AI SDR cannot repair a bad offer; a multi-agent system multiplies mistakes as easily as it multiplies output. Stating where a person is still better is part of defining the term honestly, and it is the part most vendor glossaries leave out.',
        'Terms overlap. “AI agent”, “AI employee” and “agentic AI” describe the same underlying technology at different levels of packaging, and the entries say so rather than pretending each is a separate invention. Where a term has a direct comparison page — AI employee vs AI agent, AI agent vs chatbot, AI voice agent vs human SDR — the entry links to it.',
      ],
    },
    {
      kind: 'related',
      heading: 'Continue reading',
      links: [LINKS.guides, LINKS.templates, LINKS.compare, LINKS.aiEmployees, LINKS.aiAgents, LINKS.aiWorkforce],
    },
    cta('See the terms in practice', 'Eligoo’s eight AI employees are working examples of most of the terms in this glossary. Start a free trial and watch them work in one workspace.'),
  ],
  breadcrumb: CRUMBS.resources,
  schema: ['CollectionPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
