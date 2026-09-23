import type { PageContent } from '../types';
import { HOME, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/ai-automation/',
  title: 'AI Business Automation',
  eyebrow: 'Product',
  metaTitle: 'AI Business Automation — Automate Processes With AI Agents and Approvals | Eligoo',
  metaDescription: 'AI business automation uses AI agents to run processes that need judgement — research, outreach, calls, content, reporting — with human approval at the steps that matter. See what Eligoo automates and how.',
  primaryKeyword: 'AI business automation',
  secondaryKeywords: ['AI automation platform', 'AI automation software', 'AI workflow automation', 'AI process automation', 'AI workflow agents', 'autonomous business automation', 'AI task automation'],
  answer: 'AI business automation is the use of AI agents to carry out business processes that involve judgement — reading, deciding, writing, talking — rather than only moving data between systems on fixed rules. Eligoo automates growth processes with AI employees that decide within a defined role and stop for approval before any action reaches a customer, channel or budget.',
  hero: { secondary: { label: 'See use cases', href: '/use-cases/' } },
  sections: [
    {
      kind: 'prose',
      heading: 'What is AI business automation?',
      paragraphs: [
        'Traditional automation follows rules: when a form is submitted, create a record; when a deal closes, send an email. It is reliable for structured steps and useless the moment a step needs interpretation. AI business automation covers the steps in between — qualifying a lead from a messy reply, writing a follow-up that references what the prospect actually said, deciding whether an account fits, summarising a call, spotting an anomaly in a forecast.',
        'The difference matters for what can be automated end to end. A lead-to-meeting process has a dozen judgement steps; with rule-based tools a person does all of them. With AI agents the person sets the criteria and approves the actions, and the agents do the judgement work at volume.',
      ],
    },
    {
      kind: 'features',
      heading: 'What business processes can AI automate?',
      intro: 'The processes Eligoo automates today, each mapped to the employees that run it.',
      items: [
        { title: 'Lead research and qualification', text: 'Find, enrich, verify and score prospects against your ICP.', icon: 'search' },
        { title: 'Outbound and follow-up', text: 'Personalised sequences from your mailbox, replies classified, follow-ups timed, opt-outs recorded.', icon: 'mail' },
        { title: 'Phone conversations', text: 'Outbound calling campaigns and inbound answering with qualification and booking.', icon: 'phone' },
        { title: 'Content and publishing', text: 'Calendar, copy, SEO briefs and publishing to your channels within an approved plan.', icon: 'pen' },
        { title: 'Creative production', text: 'Images, video, ad variants and resizes to spec.', icon: 'image' },
        { title: 'CRM hygiene and reporting', text: 'Duplicates, reconciliation, attribution, funnel metrics, forecasts, exception queues.', icon: 'database' },
        { title: 'Campaign planning', text: 'Audiences, tests, budgets and approval packages for paid campaigns.', icon: 'megaphone' },
        { title: 'Coordination', text: 'Objectives into tasks, hand-offs, exceptions, scheduled automations and a weekly plan.', icon: 'workflow' },
      ],
    },
    {
      kind: 'steps',
      heading: 'How to automate business processes with AI',
      steps: [
        { title: 'Map the process as it is', text: 'Write the steps down, including the ones a person does in their head. Mark which steps are rule-based and which need judgement.' },
        { title: 'Assign judgement steps to roles', text: 'Match each judgement step to an employee whose role covers it: fit decisions to Radar, reply handling to Hook, reporting to Ledger.' },
        { title: 'Set the approval points', text: 'Decide which actions must wait for a person. In Eligoo the defaults are sending, calling campaigns, off-calendar publishing and spend.' },
        { title: 'Connect the tools', text: 'Mailbox, telephony, channels, data sources and your AI provider account. Each role only gets the integrations it needs.' },
        { title: 'Run one objective end to end', text: 'Give Atlas a single, measurable objective and let the workforce run the process once with you approving each gate.' },
        { title: 'Measure and loosen', text: 'Review the KPI and the exception list. Keep the gates that caught something; relax the ones that only added delay.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'AI automation vs traditional automation',
      paragraphs: [
        'Use rule-based automation for anything deterministic: syncing fields, triggering notifications, moving records between stages. Use AI agents where the input is unstructured or the step needs a decision. Most real processes need both, and in Eligoo the rule-based parts — timed sends, scheduled automations, campaign windows, roll-overs — run as plain scheduling, while the judgement parts run through the employees.',
      ],
    },
    {
      kind: 'prose',
      heading: 'AI agents vs workflow automation',
      paragraphs: [
        'Workflow automation tools chain fixed steps with branches you define in advance. AI agents decide the next step at run time. That flexibility is why agents can handle a reply nobody anticipated, and why they need boundaries: an agent that can decide anything will eventually decide something you did not want. Eligoo answers that with role definitions and approvals rather than with a fixed flowchart.',
        FACTS.approvals,
      ],
    },
    employees(['atlas', 'radar', 'hook', 'sage', 'ledger', 'boost'], 'Employees that run automated processes'),
    pricingPointer('automation'),
    faq([
      { q: 'What is AI business automation?', a: 'Using AI agents to carry out the parts of a business process that need judgement — reading, deciding, writing, talking — with rule-based scheduling for the deterministic parts and human approval at the steps that reach the outside world.' },
      { q: 'What business processes can AI automate?', a: 'Lead research and qualification, outbound and follow-up, phone conversations, content and publishing, creative production, CRM hygiene and reporting, paid-campaign planning and the coordination between them.' },
      { q: 'Is AI automation reliable enough for customer-facing work?', a: 'It is reliable when the boundaries are right. Eligoo keeps customer-facing actions behind approvals, gives each role a clear list of what it may not do, and logs every decision so you can audit what happened.' },
      { q: 'How is this different from a no-code automation tool?', a: 'No-code tools execute flows you design in advance. Eligoo’s employees decide the next step at run time within a role, so they can handle inputs the flow did not anticipate. Many customers use both: rules for the plumbing, employees for the judgement.' },
      { q: 'How long does it take to automate a process?', a: 'It depends on the process and how many tools need connecting. A single objective — one sequence, one calling campaign, one content calendar — can run end to end as soon as the relevant integrations are connected and the first approvals are given.' },
    ]),
    related([LINKS.aiAgents, LINKS.aiEmployees, LINKS.aiWorkforce, LINKS.operations, { label: 'How to automate business processes with AI', href: '/resources/guides/how-to-automate-business-processes-with-ai/' }, { label: 'What is AI automation?', href: '/resources/glossary/ai-automation/' }, { label: 'AI business automation use case', href: '/use-cases/business-automation/' }, LINKS.templates]),
    cta('Automate one process end to end', 'Map it, assign the roles, set the approval points and let Atlas run it once. Then decide what to loosen.'),
  ],
  breadcrumb: [HOME],
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
