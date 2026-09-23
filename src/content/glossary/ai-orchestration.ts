import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/ai-orchestration/',
  title: 'What Is AI Orchestration?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is AI Orchestration? Definition, How It Works, Examples and Limits | Eligoo',
  metaDescription: 'AI orchestration is the coordination of multiple AI agents, models and tools so that work flows between them in the right order with shared context, hand-offs, approvals and reporting. Definition, components, limits.',
  primaryKeyword: 'what is AI orchestration',
  secondaryKeywords: ['AI orchestration definition', 'AI orchestration meaning', 'agent orchestration', 'AI orchestration layer', 'orchestrating AI agents', 'AI orchestration platform'],
  term: 'AI orchestration',
  answer: 'AI orchestration is the coordination of multiple AI agents, models and tools so that work flows between them in the right order, with shared context, defined hand-offs, approval points and reporting. It is the layer that turns individual agents into a working team; without it, each agent is a separate tool a person has to operate by hand.',
  sections: [
    {
      kind: 'prose',
      heading: 'How it works',
      paragraphs: [
        'Orchestration answers four questions for every piece of work: who does it, what do they get, what do they hand on, and who has to approve it. An orchestration layer holds the answers as a plan — tasks with owners, inputs, outputs and gates — and executes it: assigning tasks, waiting for completion, passing outputs to the next owner, holding at approval points and escalating when something blocks.',
        'The orchestrator can be code (a fixed workflow engine), an agent (a coordinating model that plans and re-plans), or both. Code is predictable and cheap; an agent handles objectives that were not foreseen. Many systems use an agent to plan and code to enforce the gates and budgets, so that planning is flexible but sending, spending and publishing always wait for a person.',
        'Orchestration also covers models. Different roles may use different models, the same role may fall back to another provider when one fails, and each model call is metered so cost can be seen per role and per task.',
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'A plan: tasks, owners, dependencies and gates.',
        'A coordinator — code, an agent or both — that assigns, tracks and re-plans.',
        'A task board with statuses (working, planning, awaiting approval, idle, blocked, error).',
        'Hand-off contracts between roles: structured outputs that the next role expects.',
        'Shared state and a common activity log.',
        'An approvals queue that gates external actions regardless of which agent requests them.',
        'Model routing: which provider and model each role uses, with metering.',
        'Schedules and triggers for work that runs on time or on events.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'A quarterly sales objective broken into segment research, list building, outreach and reporting, each assigned to a different agent and gated at enrolment.',
        'A content programme where briefs flow to a writer, drafts to a creative agent for images, and finished posts to an approval before publishing.',
        'A paid-media plan where an agent proposes budgets and audiences and a person approves every spend change before it reaches the ad platform.',
        'A weekly cycle where a coordinator reviews goals, raises risks and re-assigns blocked tasks.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'Work flows between agents without a person relaying outputs by hand.',
        'One place to see what every agent is doing and what is waiting for approval.',
        'Gates and budgets are enforced centrally, not re-implemented in each agent.',
        'Roles can be re-assigned to different models without changing the plan.',
        'Blocked work is visible and escalated rather than silently stalled.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'An orchestrator that is itself an agent can plan badly; its plans should be visible and editable.',
        'Orchestration adds latency and cost — every hand-off is a model call and a status change.',
        'Poorly specified hand-offs are the most common failure: the next agent receives something it cannot use.',
        'Centralising gates is only useful if the gates are actually enforced; an orchestrator that can be bypassed provides no safety.',
        'For one agent doing one job, orchestration is unnecessary overhead.',
      ],
    },
    related([
      { label: 'What is a multi-agent system?', href: '/resources/glossary/multi-agent-system/' },
      LINKS.glWorkforce, LINKS.glAgent,
      { label: 'What is AI automation?', href: '/resources/glossary/ai-automation/' },
      LINKS.atlas, LINKS.operations, LINKS.aiWorkforce,
      { label: 'Guide: how to build an AI workforce', href: '/resources/guides/how-to-build-an-ai-workforce/' },
    ], 'Related concepts'),
    faq([
      { q: 'Is AI orchestration the same as workflow automation?', a: 'Workflow automation runs a fixed sequence of steps. AI orchestration coordinates agents that make their own decisions within roles, and adds planning, re-planning, model routing and approvals. A workflow engine is often one part of an orchestration layer.' },
      { q: 'Should the orchestrator be an agent or code?', a: 'Both, usually. An agent plans and adapts to objectives that were not foreseen; code enforces the gates, budgets and schedules that must never be skipped. Keeping the enforcement in code means a planning mistake cannot bypass an approval.' },
      { q: 'What does an orchestration layer need from each agent?', a: 'A clear role, a defined input and output, a status it reports honestly, and an explicit list of actions that need approval. The orchestrator can only coordinate what the agents make visible.' },
      { q: 'How does orchestration handle a failed task?', a: 'It should mark the task as failed, keep the log, and either retry, re-plan or escalate to a person — never silently drop it. Failed external actions in particular should return to a pending state rather than disappear.' },
    ], 'FAQs'),
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'In Eligoo the orchestrator is Atlas plus the platform’s own gates. Atlas turns objectives into an operating plan, assigns tasks to the other seven employees, keeps a weekly growth plan and a risk register, and is triggered to report back when a delegated task completes. The platform enforces the rest: tasks on a kanban board with defined statuses, goals reviewed hourly, automations that run at a set time, a workspace default model with per-employee model assignment across the customer’s connected AI providers, and a single approvals queue where sequence enrolment, calling campaigns, ad changes and off-calendar publishing wait. Failed executions return to pending and every decision is logged.',
      ],
    },
    cta('Give your AI agents a manager', 'Atlas plans, assigns and reports; the approvals queue keeps the outside world safe. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
