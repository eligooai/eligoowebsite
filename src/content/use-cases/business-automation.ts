import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/business-automation/',
  title: 'AI Business Automation',
  eyebrow: 'Use cases · Business automation',
  metaTitle: 'AI Business Automation — Objectives to Operating Plan, Tasks, Automations and Approvals | Eligoo',
  metaDescription: 'AI business automation with Eligoo: Atlas turns objectives into an operating plan, assigns work to seven specialist AI employees, runs scheduled automations and keeps an approvals queue and activity log.',
  primaryKeyword: 'AI business automation',
  secondaryKeywords: ['AI business process automation', 'AI operations automation', 'AI workforce automation', 'agentic business automation', 'AI automation for small business', 'AI business automation platform'],
  answer: 'AI business automation is running a company’s growth operations — marketing, sales, outreach, calling, creative, revenue reporting — through AI employees that take an objective, plan the work, do it and report back, rather than through scripts that automate single steps. In Eligoo, Atlas converts objectives into an operating plan, assigns tasks to the other employees, runs scheduled automations and holds every outward action in an approvals queue.',
  sections: [
    {
      kind: 'prose',
      heading: 'What the problem looks like',
      paragraphs: [
        'Conventional automation joins tools together: when a form is submitted, add a row; when a row is added, send an email. It handles steps but not work. Nobody in that chain decides what the campaign should be, notices that replies have stopped, or moves effort to the segment that is responding. The founder is still the operating system.',
        'What a growing business needs automated is the operating layer itself: objectives turned into a plan, the plan into tasks with owners, the tasks done and reviewed, and exceptions raised to a person. That is management work, and it is what an AI employee that can delegate makes possible.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo handles business automation',
      steps: [
        { title: 'You set objectives', text: 'Growth targets, a new market, a launch, a pipeline goal — in plain language, with any constraints.' },
        { title: 'Atlas builds the operating plan', text: 'Objectives become a plan with tasks, owners, order and dependencies on the workspace kanban board. Atlas is the only employee that delegates.' },
        { title: 'Specialists do the work', text: 'Maven, Sage, Pixel, Radar, Hook, Ledger and Boost each work inside their Input → Decide → Act → Output → KPI → Approval boundary and report completion back to Atlas.' },
        { title: 'Automations run on schedule', text: 'Recurring work — a weekly list refresh, a monthly calendar, a daily reconciliation — runs at set times without being asked.' },
        { title: 'Goals are reviewed hourly', text: 'Atlas checks progress against goals, updates the risk register and re-plans when something is blocked or behind.' },
        { title: 'Approvals and the log', text: 'Anything that reaches the outside world waits in the approvals queue; every decision is written to the activity log; failed executions return to pending.' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'From objective to report',
      stages: [
        { label: 'Objective', detail: 'Set by you' },
        { label: 'Operating plan', owner: 'atlas', detail: 'Tasks, owners, dependencies' },
        { label: 'Execution', detail: 'Seven specialist employees' },
        { label: 'Approval', detail: 'Outward actions confirmed by a person' },
        { label: 'Review', owner: 'atlas', detail: 'Hourly goal check, risk register' },
        { label: 'Weekly growth plan', owner: 'atlas', detail: 'Results and next priorities' },
      ],
    },
    {
      kind: 'features',
      heading: 'What the operating layer gives you',
      items: [
        { title: 'Kanban board', text: 'Every task with its owner, status and history, visible in one place.', icon: 'layers' },
        { title: 'Employee statuses', text: 'Working, Planning, Awaiting approval, Idle, Blocked, Error — at a glance for every employee.', icon: 'users' },
        { title: 'Scheduled automations', text: 'Recurring work set to run at a time, with results logged.', icon: 'clock' },
        { title: 'Approvals queue', text: 'One place to confirm sequences, campaigns, launches and unplanned publishing.', icon: 'shield' },
        { title: 'Risk register', text: 'What is behind, blocked or uncertain, kept current by Atlas.', icon: 'target' },
        { title: 'Activity log and per-employee chat', text: 'Ask any employee what it did and why; every action is recorded.', icon: 'database' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a founder handing over the operating layer',
      scenario: 'The founder of a B2B services firm sets a quarterly goal of entering a neighbouring region and wants to stop being the person who remembers everything.',
      steps: [
        'Atlas turns the goal into a plan: market research, a target list, a sequence, a content calendar, a calling campaign and a reporting cadence, each assigned.',
        'Maven researches the region; Radar builds the list; Sage writes the sequence and calendar; Pixel produces the visuals; the founder approves in one sitting.',
        'Hook runs the sequence and calls; Sage publishes; Ledger reconciles and reports. A weekly list refresh and a daily CRM reconciliation run as automations.',
        'When replies drop in the third week, Atlas flags it in the risk register and reassigns Maven to revise the messaging; the revision goes to approval.',
        'Each Monday the founder receives the weekly growth plan: what happened, what is at risk, what needs approval.',
      ],
      outcome: 'The founder sets direction and approves, the plan runs and adjusts itself within the rules, and every decision is in the log.',
    },
    employees(['atlas', 'maven', 'sage', 'pixel', 'radar', 'hook', 'ledger', 'boost'], 'The whole workforce', undefined, {
      atlas: 'Plans, delegates, reviews, reports.',
      maven: 'Strategy and research.',
      sage: 'Content, SEO, publishing.',
      pixel: 'Creative production.',
      radar: 'Prospect intelligence.',
      hook: 'Outreach, calls, bookings.',
      ledger: 'CRM, reporting, forecast.',
      boost: 'Paid acquisition (optional).',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Google Workspace: Gmail, Drive, Docs, Sheets and Calendar.',
        'Your SMTP/IMAP mailbox, SIP trunk and social connections as each employee needs them.',
        'Your own OpenAI, Anthropic, Google Gemini, Groq or OpenRouter accounts, with a workspace default model and per-employee assignment.',
      ],
    },
    pricingPointer('the workforce'),
    faq([
      { q: 'What is AI business automation?', a: 'Running business operations through AI agents that plan and do work toward an objective, as opposed to tool-to-tool automations that execute single steps. In Eligoo it means Atlas turning your objectives into a plan and assigning it to specialist AI employees, with approvals and a log.' },
      { q: 'How is this different from a workflow automation tool?', a: 'A workflow tool runs a fixed sequence when triggered. Eligoo’s employees decide how to reach a goal within their boundaries, adapt when something is not working and report back. Fixed, recurring steps are still supported as scheduled automations.' },
      { q: 'Which processes does it cover?', a: 'Marketing, content, creative, prospecting, outreach, calling, appointment setting, CRM hygiene, reporting, forecasting and paid acquisition planning. It does not cover finance, HR, production or order management.' },
      { q: 'Who is in control?', a: 'You. Objectives come from you, outward actions wait for your approval, every employee has a defined boundary, and the activity log shows every decision. Employees stop at zero credits and wait when blocked rather than improvising.' },
      { q: 'Can I automate just one process?', a: 'Yes. Hire the employee for that process — Hook for follow-up, Sage for content, Ledger for CRM hygiene — and add Atlas when you want the coordination layer.' },
      { q: 'How is data kept separate?', a: `${FACTS.workspace} Provider keys are stored server-side and never sent to the browser, workspace data sits on the hosting provider’s encrypted disks with nightly backups retained for seven days, and data is deleted on request.` },
    ]),
    related([
      LINKS.aiAutomation, LINKS.operations, LINKS.atlas, LINKS.aiWorkforce, LINKS.aiEmployees,
      { label: 'How to automate business processes with AI', href: '/resources/guides/how-to-automate-business-processes-with-ai/' },
      { label: 'How to build an AI workforce', href: '/resources/guides/how-to-build-an-ai-workforce/' },
      { label: 'What is AI automation?', href: '/resources/glossary/ai-automation/' },
      { label: 'What is AI orchestration?', href: '/resources/glossary/ai-orchestration/' },
      LINKS.security,
    ]),
    cta('Hand Atlas the operating plan', `Set an objective, review the plan Atlas drafts, and approve the first week’s work. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.useCases,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
