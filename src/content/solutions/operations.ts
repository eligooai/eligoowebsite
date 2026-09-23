import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/solutions/operations/',
  title: 'AI Operations Automation',
  eyebrow: 'Solutions · Operations',
  metaTitle: 'AI Operations Automation — Objectives Into Tasks, Hand-offs and a Weekly Plan | Eligoo',
  metaDescription: 'Eligoo’s AI operations layer, run by Atlas, turns business objectives into task queues for AI employees, manages hand-offs and exceptions, runs scheduled automations and reports a weekly plan.',
  primaryKeyword: 'AI operations automation',
  secondaryKeywords: ['AI operations agent', 'AI business operations', 'AI workflow automation', 'AI process automation', 'AI operations software', 'autonomous business operations'],
  answer: 'AI operations automation is the coordination layer of an AI workforce: turning objectives into tasks, assigning them to the right agents, managing hand-offs, catching exceptions and reporting. In Eligoo that layer is Atlas, the AI operations manager — the only employee that delegates — together with a shared task board, scheduled automations and an approvals queue.',
  character: 'atlas',
  sections: [
    {
      kind: 'prose',
      heading: 'What is AI operations automation?',
      paragraphs: [
        'Every business runs on a loop of objectives, tasks, hand-offs and reviews. Most of the loop is coordination: deciding what matters this week, who does what, what is blocked, what needs a decision. AI operations automation puts an AI agent in charge of that coordination for the work other AI employees do — so that a goal you state once becomes a stream of tasks, each with an owner, and you see the exceptions rather than the noise.',
        'Atlas is that agent. It receives your objectives, budgets and constraints, decides priority and sequencing, assigns tasks to Maven, Sage, Pixel, Radar, Hook, Ledger and Boost, monitors progress, resolves conflicts, reprioritises and reports. It may reprioritise within approved goals and budgets; it may not change targets, budgets, pricing, offers, customer promises or access permissions without your approval.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the operations layer works',
      steps: [
        { title: 'Objectives', text: 'You give Atlas goals in plain language. Goals are reviewed on a schedule so progress and drift are noticed without you asking.' },
        { title: 'Plan', text: 'Atlas produces a weekly growth plan: priorities, who does what, what is waiting for a decision.' },
        { title: 'Assign', text: 'Tasks go to the employees with enough detail to execute independently. Each appears on the shared board with a status.' },
        { title: 'Hand off', text: 'When an employee finishes, its output is attached and the next task is triggered; delegated completion triggers Atlas to report back.' },
        { title: 'Automate on a schedule', text: 'Recurring work runs as automations at a set time — a daily prospecting refresh, a weekly report — without a prompt.' },
        { title: 'Handle exceptions', text: 'Blocked tasks, low-confidence data, unusual replies and boundary hits surface in the exception list or the approvals queue.' },
      ],
    },
    {
      kind: 'features',
      heading: 'What you get',
      items: [
        { title: 'Weekly growth plan', text: 'Priorities and assignments for the week, with what changed since the last one.', icon: 'calendar' },
        { title: 'Task board', text: 'Every task with an owner, a status — Working, Planning, Awaiting approval, Idle, Blocked, Error — and its outputs.', icon: 'workflow' },
        { title: 'Approvals queue', text: 'The outside-world actions waiting for a decision, with the payload each one would execute.', icon: 'shield' },
        { title: 'Executive summary and risk register', text: 'What happened, what is at risk, what needs you.', icon: 'chart' },
        { title: 'Scheduled automations', text: 'Recurring tasks at a set time, owned by the right employee.', icon: 'clock' },
        { title: 'Activity log', text: 'Decisions and notable actions recorded for audit.', icon: 'database' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: one objective, one week',
      scenario: 'You tell Atlas: build a pipeline of qualified meetings with packaging converters in two states before the end of the month.',
      steps: [
        'Atlas assigns segment research to Maven, list building to Radar, sequence copy to Sage and, once the list exists, the sequence and a calling campaign to Hook.',
        'Radar finishes; Atlas reports the list size and confidence and asks you to approve enrolment.',
        'Hook runs the approved sequence; replies that are not routine appear as exceptions; a request for pricing is escalated to you.',
        'Ledger reconciles the CRM daily and reports meetings held by segment on Friday.',
        'Atlas writes the weekly plan: continue the converting segment, pause the other, propose a second sequence for review.',
      ],
      outcome: 'You made three decisions — approve enrolment, answer a pricing question, choose the next segment — and the rest ran.',
    },
    employees(['atlas', 'ledger', 'radar', 'hook', 'sage'], 'Employees involved'),
    pricingPointer('operations'),
    {
      kind: 'prose',
      heading: 'AI process automation vs workflow tools',
      paragraphs: [
        'Workflow tools execute a flow you designed in advance. Atlas decides the next step at run time within your goals, which is why it can handle a segment that stops converting or a task that gets blocked. The deterministic parts — timed sends, scheduled automations, campaign windows — are still plain scheduling.',
        FACTS.approvals,
      ],
    },
    faq([
      { q: 'What does Atlas actually decide?', a: 'Which objective has priority, which employee handles what, in which order, when to pause a workstream and when to escalate — within the goals and budgets you approved.' },
      { q: 'Can Atlas change my targets or budgets?', a: 'No. Targets, total budgets, pricing, offers, customer promises, access permissions and strategic markets require your approval.' },
      { q: 'How do I see what is happening?', a: 'The task board shows every task and status; the approvals queue shows what is waiting; the weekly plan and executive summary give the narrative.' },
      { q: 'Can I automate recurring work?', a: 'Yes. Automations run at a set time and create the task for the right employee — a daily list refresh, a weekly report, a monthly calendar.' },
      { q: 'What if an employee gets stuck?', a: 'The task shows as Blocked or Error with the reason, and it appears in Atlas’s exception list and report. Failed approved executions return to pending rather than retrying silently.' },
    ]),
    related([LINKS.atlas, LINKS.aiWorkforce, LINKS.aiAutomation, LINKS.revenue, { label: 'What is AI orchestration?', href: '/resources/glossary/ai-orchestration/' }, { label: 'Business automation use case', href: '/use-cases/business-automation/' }, LINKS.templates]),
    cta('Give Atlas one objective', 'See how it becomes a plan, a set of tasks and a short list of decisions for you.'),
  ],
  breadcrumb: CRUMBS.solutions,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
