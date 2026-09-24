import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/ai-workforce/',
  title: 'What Is an AI Workforce?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is an AI Workforce? Definition, How It Works, Examples and Limits | Eligoo',
  metaDescription: 'An AI workforce is a set of AI employees working together in one workspace under shared goals, coordination and approvals. How it works, what it is made of, examples, benefits and limitations.',
  primaryKeyword: 'what is an AI workforce',
  secondaryKeywords: ['AI workforce definition', 'AI workforce meaning', 'AI workforce platform', 'digital workforce', 'AI workforce for small business', 'build an AI workforce'],
  term: 'AI workforce',
  answer: 'An AI workforce is a set of AI employees that work together in one workspace under shared goals, coordination and approvals — a team rather than a collection of separate AI tools. Each employee has a distinct role, and work is handed between them in a defined order with a person approving anything that reaches the outside world.',
  sections: [
    {
      kind: 'prose',
      heading: 'How it works',
      paragraphs: [
        'An AI workforce starts with an objective set by a person: more qualified meetings in a segment, a content programme for a launch, a clean CRM before the quarter closes. A coordinating employee turns the objective into an operating plan, breaks it into tasks and assigns each task to the employee whose role fits.',
        'The employees then work in a chain. In an outbound programme, a strategist defines the segment and message, a prospecting employee builds and verifies the list, a sales employee runs the approved outreach and calls, and a revenue employee keeps the records and reports what happened. Each hand-off is a task completion that the coordinator sees.',
        'Goals are reviewed on a schedule, exceptions are raised as risks, and everything that would send, spend or publish waits in a shared approvals queue. The person running the workforce spends their time on approvals and exceptions, not on the tasks themselves.',
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'Several AI employees with non-overlapping roles (strategy, content, creative, prospecting, outreach, revenue, paid media, operations).',
        'A coordinating employee — the one member that delegates and reports back.',
        'A shared workspace: one set of goals, tasks, connections, AI keys and data.',
        'A task board where every task, its owner and its status are visible.',
        'Goals with periodic review, so the plan is checked against results.',
        'A single approvals queue for all outside-world actions.',
        'An activity log covering every employee, so the workforce can be audited as a whole.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'A small manufacturer running outbound sales with a strategist, a prospector, a caller and a CRM keeper, and one founder approving campaigns.',
        'A marketing team using a strategist, a content employee and a creative employee to run a content calendar across five social channels.',
        'A services firm using a prospecting employee and a voice agent to re-contact dormant leads and book discovery calls.',
        'A revenue team using a revenue intelligence employee to keep pipeline data clean while the sales employee books meetings.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'Work flows between roles without a person copying output from one tool into another.',
        'One objective, one plan, one log: the business can see how the whole programme is going, not just each task.',
        'Approvals are centralised, so nothing is sent or spent without a person seeing it.',
        'Roles can be added as needed — start with one employee and grow to a team.',
        'The coordinator absorbs the planning and follow-up that would otherwise fall on the founder or manager.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'A workforce is only as good as the objective it is given; unclear goals produce busy, unproductive employees.',
        'Hand-offs multiply the effect of an early error — a poorly defined segment leads to a poorly targeted list and wasted outreach.',
        'It still needs a person for approvals, exceptions, relationships and anything commercial or sensitive.',
        'It depends on connected systems. A workforce with no mailbox, phone line or CRM can plan but not act.',
        'Running several employees consumes more model budget than one; provider spend has to be watched alongside output.',
      ],
    },
    related([
      LINKS.glEmployee, LINKS.glAgent,
      { label: 'What is a multi-agent system?', href: '/resources/glossary/multi-agent-system/' },
      { label: 'What is AI orchestration?', href: '/resources/glossary/ai-orchestration/' },
      LINKS.aiWorkforce, LINKS.aiEmployees,
      { label: 'Guide: how to build an AI workforce', href: '/resources/guides/how-to-build-an-ai-workforce/' },
      { label: 'AI employee vs human employee', href: '/compare/ai-employee-vs-human/' },
    ], 'Related concepts'),
    faq([
      { q: 'How is an AI workforce different from a multi-agent system?', a: 'A multi-agent system is the technical pattern: agents with roles that hand work to each other. An AI workforce is that pattern applied to a business, with named employees, KPIs, a task board, approvals and an activity log. The workforce is the product; the multi-agent system is the mechanism.' },
      { q: 'Do I need the whole workforce to start?', a: 'No. Most businesses start with the one or two roles that address their bottleneck — usually prospecting and outreach, or content — and add roles once the first ones are producing. The coordinating employee becomes useful once there are several employees to coordinate.' },
      { q: 'Who manages an AI workforce?', a: 'A person. The coordinating employee handles planning and delegation, but a human owner sets objectives, approves outside-world actions, handles exceptions and decides what the workforce should do next.' },
      { q: 'Can an AI workforce use my existing software?', a: 'Through connectors, yes — mailboxes, calendars, social accounts, ad accounts, contact databases and AI provider accounts are the usual ones. Which connectors exist depends on the platform; check the integrations list before assuming.' },
    ], 'FAQs'),
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'Eligoo is an AI workforce platform: eight AI employees that work from the cloud in one workspace, coordinated by Atlas, the AI business operations manager and the only employee that delegates. Tasks live on a kanban board, goals are reviewed hourly, delegated task completion triggers Atlas to report back, and every outside-world action waits in the shared approvals queue. Customers hire one employee, a team or the whole workforce, and every employee draws on the same connections, AI keys and activity log.',
      ],
    },
    cta('Build an AI workforce, one role at a time', 'Start with the employee that addresses your bottleneck and add the rest when you are ready. Free trial, no seat pricing.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
