import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/ai-employees/atlas/',
  title: 'Atlas — AI Business Operations Manager',
  eyebrow: 'AI employee · Leadership',
  metaTitle: 'Atlas — AI Business Operations Manager That Coordinates Your AI Workforce | Eligoo',
  metaDescription: 'Atlas is Eligoo’s AI operations employee: it turns your objectives into an operating plan, assigns tasks to the other AI employees, manages hand-offs and exceptions, and reports a weekly plan.',
  primaryKeyword: 'AI operations agent',
  secondaryKeywords: ['AI business operations agent', 'AI workflow agent', 'AI automation agent', 'AI orchestration', 'AI business manager'],
  answer: 'Atlas is Eligoo’s AI operations employee. It receives your objectives, budgets and constraints, turns them into an operating plan, assigns tasks to Maven, Sage, Pixel, Radar, Hook, Ledger and Boost, monitors progress, resolves conflicts and reports back. It is the only employee that delegates, and it may not change targets, budgets, pricing or offers without your approval.',
  character: 'atlas',
  sections: [
    {
      kind: 'prose',
      heading: 'What Atlas does',
      paragraphs: [
        'Atlas is the manager of the workforce. Its input is business objectives, revenue targets, budgets, channel constraints, active campaigns, funnel performance, the other employees’ outputs and any unresolved exceptions. From those it decides which objective has priority, which employee handles what, in which order, when to pause a workstream and when to escalate to you.',
        'Its actions are planning and coordination: creating operating plans, assigning tasks with enough detail for each employee to execute independently, coordinating hand-offs, monitoring performance, resolving conflicts and reprioritising. Atlas does work itself only when the work is genuinely its job — planning, briefings, reporting.',
        'Atlas is measured on achievement against the approved growth plan, qualified pipeline influenced, workstream completion rate and how quickly exceptions are resolved.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Atlas works',
      steps: [
        { title: 'You set an objective', text: 'In plain language, with any budget or constraint. Goals are reviewed on a schedule so drift is noticed.' },
        { title: 'Atlas plans', text: 'A weekly growth plan with priorities and assignments, plus the decisions that need you.' },
        { title: 'Tasks are assigned', text: 'One clear task per employee, visible on the shared board with a status.' },
        { title: 'Hand-offs are coordinated', text: 'When a delegated task completes, Atlas is triggered to review the output and report back to you.' },
        { title: 'Exceptions are handled', text: 'Blocked tasks, boundary hits and anomalies are routed — to another employee, to the approvals queue or to you.' },
        { title: 'Reporting', text: 'An executive summary, a risk register and the approval queue, updated with every cycle.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Tools and integrations Atlas uses',
      items: [
        'The workspace task board, goals, automations and approvals queue.',
        'Access to every connected integration when it needs context — Atlas is the one role with full visibility.',
        'Google Workspace for plans, summaries and calendars.',
        'The AI model you assign it from your connected provider account.',
      ],
    },
    {
      kind: 'features',
      heading: 'Sample deliverables',
      items: [
        { title: 'Weekly growth plan', text: 'Priorities, assignments and what changed since last week.', icon: 'calendar' },
        { title: 'Employee task queues', text: 'What each employee is working on, in order.', icon: 'workflow' },
        { title: 'Executive summary', text: 'What happened, what it produced, what needs you.', icon: 'chart' },
        { title: 'Risk register', text: 'What could stop the plan and what is being done about it.', icon: 'shield' },
        { title: 'Approval queue', text: 'The outside-world actions waiting for your decision.', icon: 'check' },
        { title: 'Exception reports', text: 'Blocked work and anomalies with the reason and the proposed fix.', icon: 'zap' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'How Atlas hands off to teammates',
      stages: [
        { label: 'Maven', owner: 'maven', detail: 'Research and strategy tasks' },
        { label: 'Radar', owner: 'radar', detail: 'Prospecting tasks' },
        { label: 'Sage and Pixel', owner: 'sage', detail: 'Content and creative tasks' },
        { label: 'Hook', owner: 'hook', detail: 'Outreach and calling tasks (after approval)' },
        { label: 'Boost', owner: 'boost', detail: 'Paid planning tasks' },
        { label: 'Ledger', owner: 'ledger', detail: 'Reporting tasks; evidence back to Atlas' },
      ],
    },
    employees(['maven', 'sage', 'pixel', 'radar', 'hook', 'ledger', 'boost'], 'Manages'),
    pricingPointer('Atlas'),
    faq([
      { q: 'Is Atlas included in every plan?', a: 'Atlas is included whenever more than one employee works together; it is the coordination layer of the workforce.' },
      { q: 'Can Atlas change my targets or spend?', a: 'No. It reprioritises within approved goals and budgets and may not change targets, total budgets, pricing, offers, customer promises, access permissions or strategic markets without your approval.' },
      { q: 'Do I talk to Atlas or to each employee?', a: 'Both. Give Atlas objectives and it delegates. Talk to an individual employee about its own work; if you ask it to delegate, it will point you to Atlas.' },
      { q: 'How does Atlas know when work is done?', a: 'Delegated task completion triggers Atlas to review the output and report back. Goals are reviewed on a schedule, and restarts re-queue any work in progress.' },
      { q: 'What if I want to schedule something for tomorrow?', a: 'Use a calling campaign or an automation with a set time. Tasks run immediately, so Atlas uses those mechanisms rather than future-dated tasks.' },
    ]),
    related([LINKS.operations, LINKS.aiWorkforce, LINKS.aiAgents, { label: 'What is AI orchestration?', href: '/resources/glossary/ai-orchestration/' }, { label: 'What is a multi-agent system?', href: '/resources/glossary/multi-agent-system/' }, LINKS.ledger, LINKS.hook]),
    cta('Give Atlas an objective', 'One goal in plain language becomes a plan, a set of tasks and a short list of decisions for you.'),
  ],
  breadcrumb: CRUMBS.employees,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
