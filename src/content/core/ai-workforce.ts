import type { PageContent } from '../types';
import { HOME, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/ai-workforce/',
  title: 'AI Workforce: Multiple AI Employees Coordinated Around Your Objectives',
  eyebrow: 'Product',
  metaTitle: 'AI Workforce — What It Is and How to Build One | Eligoo',
  metaDescription: 'An AI workforce is multiple persistent AI employees coordinated around business objectives. Learn how an AI workforce differs from a single assistant, how it is managed, and how Eligoo runs one.',
  primaryKeyword: 'AI workforce',
  secondaryKeywords: ['AI workforce platform', 'AI workforce software', 'digital workforce', 'AI employees', 'AI workforce automation', 'autonomous workforce', 'AI-powered workforce'],
  answer: 'An AI workforce is a group of persistent AI employees, each with a defined role, coordinated around business objectives by an operations layer and governed by human approval. Eligoo is an AI workforce platform: eight AI employees in one workspace, managed by Atlas, using your own AI accounts and the tools you connect.',
  character: 'atlas',
  sections: [
    {
      kind: 'prose',
      heading: 'What is an AI workforce?',
      paragraphs: [
        'A single AI assistant helps the person using it. An AI workforce works for the business: several AI employees with different roles share goals, context and a task board, and an operations manager keeps them pointed at the same objective. The unit of work is a task with an owner and a deliverable, not a chat.',
        'Three things make it a workforce rather than a collection of tools. Persistence — the employees keep working across days and remember what they did. Coordination — one role turns objectives into assignments and manages hand-offs. Governance — each role has an approval boundary, so the workforce can be autonomous where that is safe and supervised where it is not.',
        `${FACTS.workspace} ${FACTS.byok}`,
      ],
    },
    {
      kind: 'steps',
      heading: 'How an AI workforce is managed',
      steps: [
        { title: 'Objectives', text: 'You set goals in plain language. Atlas reviews them on a schedule and turns them into a weekly growth plan with priorities.' },
        { title: 'Task queues', text: 'Each employee has a queue on the shared board. Atlas assigns, sequences and reprioritises within the goals and budgets you approved.' },
        { title: 'Hand-offs', text: 'Outputs move between roles — Radar to Hook, Maven to Sage, Sage to Pixel, Hook to Ledger — and are attached to the tasks that produced them.' },
        { title: 'Exceptions', text: 'Blocked tasks, low-confidence data, unusual replies and anything outside a boundary surface in an exception list or the approvals queue.' },
        { title: 'Reporting', text: 'Ledger reports outcomes with evidence; Atlas writes an executive summary and a risk register; you adjust the objectives.' },
      ],
    },
    employees(['atlas', 'maven', 'sage', 'pixel', 'radar', 'hook', 'ledger', 'boost'], 'The Eligoo AI workforce', 'Hire the whole workforce, a department, or a single role. Atlas is included whenever more than one employee works together.'),
    {
      kind: 'features',
      heading: 'What an AI workforce can run',
      items: [
        { title: 'Pipeline', text: 'Research → prospects → enrichment → sequence → calls → qualification → meetings → CRM, as one chain.', icon: 'target' },
        { title: 'Content operations', text: 'Strategy → calendar → copy → creative → publishing → organic reporting.', icon: 'pen' },
        { title: 'Voice operations', text: 'Outbound calling campaigns and inbound answering on your own numbers, with transcripts and outcomes.', icon: 'phone' },
        { title: 'Revenue operations', text: 'CRM hygiene, attribution, funnel metrics, forecasts and exception queues.', icon: 'chart' },
        { title: 'Paid acquisition', text: 'Plans, audiences, tests and budgets prepared for approval; approved Meta Ads campaigns managed within stop rules.', icon: 'megaphone' },
        { title: 'Operations', text: 'Goals, tasks, automations at set times, hourly goal review and a weekly plan.', icon: 'workflow' },
      ],
    },
    {
      kind: 'prose',
      heading: 'AI workforce vs traditional employees',
      paragraphs: [
        'An AI workforce does not replace judgement, relationships or accountability, and it is not the right answer for negotiation, sensitive customer situations or decisions with legal weight. It is the right answer for high-volume, well-defined, tool-heavy work that a small team cannot cover — researching every account, following up every reply, calling every lead in the window, keeping every CRM record clean, producing every creative variant.',
        'The practical model is a small human team setting direction and approving actions, with an AI workforce doing the volume. The comparison pages discuss the trade-offs candidly.',
      ],
    },
    {
      kind: 'prose',
      heading: 'AI workforce for small businesses',
      paragraphs: [
        'A small business rarely needs all eight roles on day one. A common starting point is pipeline — Radar and Hook with Atlas coordinating — or content — Sage and Pixel. Because plans are per workspace and roles can be added later, the workforce grows with the work rather than with headcount.',
      ],
    },
    pricingPointer('the workforce'),
    faq([
      { q: 'What is an AI workforce?', a: 'Multiple persistent AI employees, each with a defined role, coordinated around business objectives by an operations layer and governed by human approvals.' },
      { q: 'How is an AI workforce different from using ChatGPT?', a: 'A chat assistant helps one person with one conversation at a time. A workforce runs standing roles with tools, a shared task board, hand-offs between roles, scheduled work and approval boundaries — and it keeps working when nobody is typing.' },
      { q: 'How do I build an AI workforce?', a: 'Connect your AI provider account and the tools each role needs, hire the roles, set objectives for Atlas, decide the approval settings and review the first weekly plan. The guide on building an AI workforce walks through each step.' },
      { q: 'Who manages the AI workforce?', a: 'Atlas, the AI operations manager, assigns and sequences work and reports to you. You manage Atlas: objectives, budgets, priorities and approvals stay with a person.' },
      { q: 'Can the workforce use different AI models?', a: 'Yes. A workspace default model plus per-employee assignment lets you choose, for example, a stronger model for Maven’s strategy work and a faster one for Hook’s reply classification.' },
    ]),
    related([LINKS.aiEmployees, LINKS.aiAgents, LINKS.aiAutomation, { label: 'How to build an AI workforce', href: '/resources/guides/how-to-build-an-ai-workforce/' }, LINKS.glWorkforce, { label: 'AI employee vs human employee', href: '/compare/ai-employee-vs-human/' }, LINKS.operations, LINKS.atlas, LINKS.pricing]),
    cta('Build your AI workforce', 'Start with one role or the whole team. Atlas coordinates; you approve what matters.'),
  ],
  breadcrumb: [HOME],
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
