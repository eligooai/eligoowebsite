import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/multi-agent-system/',
  title: 'What Is a Multi-Agent System?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is a Multi-Agent System? Definition, How It Works, Examples and Limits | Eligoo',
  metaDescription: 'A multi-agent system is a set of AI agents with distinct roles that hand work to each other, usually with one coordinating, to complete what none could alone. How it works, components, examples and limits.',
  primaryKeyword: 'what is a multi-agent system',
  secondaryKeywords: ['multi-agent system definition', 'multi-agent AI', 'multi-agent system examples', 'multi-agent orchestration', 'agent teams', 'multi-agent workflow'],
  term: 'Multi-agent system',
  answer: 'A multi-agent system is a set of AI agents with distinct roles that share tasks and hand work to each other to complete something none of them could do alone, usually with one agent coordinating the others. Each agent has its own instructions and tools; the system is defined by how work and context move between them.',
  sections: [
    {
      kind: 'prose',
      heading: 'How it works',
      paragraphs: [
        'A single agent with every tool and every instruction becomes unreliable: its context fills with irrelevant material and it makes worse choices. A multi-agent system splits the work by role. Each agent gets a narrow brief, the tools that brief needs and nothing else, so it can be tested and trusted on its own job.',
        'Work enters through a coordinator, which breaks an objective into tasks and assigns each to the agent whose role fits. The agent completes the task and returns a result; the coordinator decides what happens next — another task, a re-plan, or a report to the person who set the objective. Some systems also let agents hand off directly to each other along a fixed chain.',
        'Shared context is the hard part. Agents need enough of what the others did to do their own work, without inheriting every intermediate step. Well-designed systems pass structured outputs (a list, a brief, a record) rather than raw transcripts, and keep a common log so a person can follow the whole chain.',
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'Two or more agents with distinct roles, instructions and tool sets.',
        'A coordinator or orchestrator that plans, assigns and tracks work.',
        'A task queue or board that holds the assignments and their status.',
        'Hand-off contracts: what one agent produces is what the next expects.',
        'Shared state: a common store of records the agents read and write.',
        'A single log across all agents, so the chain can be audited.',
        'Approval gates that apply regardless of which agent is acting.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'An outbound sales chain: a research agent, a prospecting agent, an outreach agent and a reporting agent, with a coordinator.',
        'A content pipeline: a strategist agent produces briefs, a writer agent drafts, a creative agent produces images, a publisher posts on approval.',
        'A software team of agents: one plans, one edits code, one runs tests and reports failures back.',
        'A customer-service system where a triage agent classifies and routes to specialist agents for billing, technical or account questions.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'Each agent is simpler, so it is easier to test, improve and trust.',
        'Roles can use different models — a cheaper model for classification, a stronger one for strategy.',
        'Work runs in parallel where tasks are independent.',
        'Responsibilities are explicit: when something goes wrong, the log shows which role did what.',
        'The system grows by adding a role, not by making one agent more complicated.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'Errors propagate. A bad output from one agent becomes a bad input for the next, and may look plausible by the time it reaches a person.',
        'Coordination overhead is real: more model calls, more latency and more cost than a single agent on a simple task.',
        'Poorly defined hand-offs cause agents to redo, skip or misinterpret work.',
        'Debugging a chain is harder than debugging one agent; a shared log is a necessity, not a luxury.',
        'For a single, simple task, a multi-agent system is over-engineering.',
      ],
    },
    related([
      LINKS.glAgent, LINKS.glWorkforce,
      { label: 'What is AI orchestration?', href: '/resources/glossary/ai-orchestration/' },
      { label: 'What is agentic AI?', href: '/resources/glossary/agentic-ai/' },
      LINKS.aiWorkforce, LINKS.atlas, LINKS.aiAgents,
      { label: 'Guide: how to build an AI workforce', href: '/resources/guides/how-to-build-an-ai-workforce/' },
    ], 'Related concepts'),
    faq([
      { q: 'When should you use several agents instead of one?', a: 'When the work has distinct stages that need different tools or expertise, when one agent’s context would be overloaded, or when you want each stage to be testable on its own. For a single well-bounded task, one agent is simpler and cheaper.' },
      { q: 'Does a multi-agent system need a coordinator?', a: 'Not always — a fixed chain can hand off directly. But once the work involves planning, re-planning or reporting back to a person, a coordinating agent makes the system far easier to run.' },
      { q: 'How do agents share information?', a: 'Through structured hand-offs (a list, a brief, a record) and a shared store, rather than by passing each other their full conversation. A common activity log lets a person see the whole chain.' },
      { q: 'Is a multi-agent system the same as an AI workforce?', a: 'A multi-agent system is the technical pattern. An AI workforce is that pattern applied to business roles, with named employees, KPIs, a task board, approvals and a log. Every AI workforce is a multi-agent system; the reverse is not always true.' },
    ], 'FAQs'),
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'Eligoo is a multi-agent system with Atlas as the coordinator. Atlas turns objectives into an operating plan and assigns tasks to Maven, Sage, Pixel, Radar, Hook, Ledger and Boost; when a delegated task completes, Atlas is triggered to report back. Hand-offs are structured — Radar passes a verified, scored list to Hook; Hook writes outcomes that Ledger reconciles — and all of it lives on one kanban board with one activity log. Each employee can be assigned its own model from the customer’s connected AI accounts, and the approvals queue applies to every employee alike.',
      ],
    },
    cta('See a multi-agent system with a manager', 'Set an objective for Atlas and watch the tasks flow to the right employees. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
