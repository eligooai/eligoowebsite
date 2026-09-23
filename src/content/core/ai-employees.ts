import type { PageContent } from '../types';
import { HOME, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/ai-employees/',
  title: 'AI Employees for Business',
  eyebrow: 'Product',
  metaTitle: 'AI Employees for Business — What They Are, How They Work, What They Cost | Eligoo',
  metaDescription: 'An AI employee is an AI system given a business role, tools, deliverables, a KPI and an approval boundary. Meet Eligoo’s eight AI employees and learn what they can automate.',
  primaryKeyword: 'AI employees',
  secondaryKeywords: ['AI employee', 'AI employees for business', 'AI employee platform', 'AI employee software', 'AI virtual employees', 'digital employees', 'AI workers', 'autonomous AI employees', 'AI employees for small business'],
  answer: 'An AI employee is an AI system that holds a business role — with its own inputs, decisions, actions, deliverables, KPI and approval boundary — rather than answering ad-hoc prompts. Eligoo provides eight AI employees covering operations, marketing strategy, content and SEO, creative, prospect research, sales and voice, revenue intelligence and paid acquisition.',
  hero: { secondary: { label: 'See pricing', href: '/pricing/' } },
  sections: [
    {
      kind: 'prose',
      heading: 'What is an AI employee?',
      paragraphs: [
        'An AI employee is an AI agent configured the way a job is configured. It has a role description that says what it receives, what it is allowed to decide, what actions it may take, what it must deliver, how it is measured and where it must stop and ask. That last part — the approval boundary — is what separates an employee from an assistant that will happily do whatever the last message asked.',
        'In Eligoo the role definitions are explicit. Radar, for example, may find, research, enrich, verify and score prospects, but may not contact them; contacting prospects is Hook’s job, and Hook may only run sequences you approved. Ledger may make reversible CRM hygiene changes with an audit trail, but may not delete a record or change closed-won revenue.',
        'The employees are persistent. They keep the context of your business, your goals and their previous work, and they sit on a shared board with statuses — Working, Planning, Awaiting approval, Idle, Blocked, Error — so you can see what each one is doing at any time.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How does an AI employee work?',
      steps: [
        { title: 'Input', text: 'Each role receives specific inputs: Maven gets product information and market signals; Hook gets a verified list and an approved sequence; Ledger gets CRM records and campaign data.' },
        { title: 'Decide', text: 'The employee makes the decisions its role allows — which segment to prioritise, whether an account fits the ICP, how to classify a reply — using the AI model you assigned to it.' },
        { title: 'Act', text: 'It uses its connected tools: web search, Apollo, your mailbox, the voice stack, social channels, fal.ai, Google Workspace, Meta Ads. Each employee only has access to the integrations its role needs.' },
        { title: 'Output', text: 'Deliverables land in the workspace as documents, records, assets, calendar entries or CRM updates, attached to the task that produced them.' },
        { title: 'KPI', text: 'Every role has a KPI that reflects business value, not activity — qualified meetings held rather than emails sent, organic conversions rather than follower counts.' },
        { title: 'Approval boundary', text: FACTS.approvals },
      ],
    },
    employees(['atlas', 'maven', 'sage', 'pixel', 'radar', 'hook', 'ledger', 'boost'], 'Meet the AI employees', 'Each has its own page with what it does, its tools, sample deliverables and how it hands work to the others.'),
    {
      kind: 'features',
      heading: 'What can AI employees do?',
      intro: 'The business tasks AI employees automate in Eligoo today.',
      items: [
        { title: 'Market and campaign strategy', text: 'Research, positioning, messaging hierarchy, campaign briefs and channel plans.', icon: 'brain' },
        { title: 'Content and SEO', text: 'Calendars, website copy, posts, newsletters, scripts, keyword research and publishing to your channels.', icon: 'pen' },
        { title: 'Creative production', text: 'Images, video, ad variants, thumbnails and resizes to platform specs.', icon: 'image' },
        { title: 'Prospect research', text: 'Account and contact discovery, enrichment, verification, de-duplication and scoring.', icon: 'search' },
        { title: 'Outreach and calls', text: 'Email sequences from your mailbox, AI phone calls on your number, reply handling, qualification, booking.', icon: 'phone' },
        { title: 'CRM and revenue reporting', text: 'Record hygiene, reconciliation, attribution, funnel metrics, forecasts and exception queues.', icon: 'chart' },
        { title: 'Paid acquisition', text: 'Campaign plans, audience specs, budget proposals and approved Meta Ads management.', icon: 'megaphone' },
        { title: 'Coordination', text: 'Objectives turned into task queues, hand-offs, exceptions and a weekly plan by Atlas.', icon: 'workflow' },
      ],
    },
    {
      kind: 'prose',
      heading: 'AI employee vs AI agent vs AI assistant',
      paragraphs: [
        'An AI assistant responds to you: you ask, it answers, and the conversation is the product. An AI agent acts: it is given a task, uses tools and works through steps until the task is done. An AI employee is an agent with a job — a standing role, a KPI, a place in a team and limits on what it may do without asking.',
        'All Eligoo employees are agents underneath. What makes them employees is the role definition, the persistence, the coordination by Atlas and the approval boundaries. The comparison pages go into the differences in more detail.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Can AI employees work autonomously?',
      paragraphs: [
        'Within their boundary, yes. Research, planning, drafting, analysis, enrichment, asset production and reporting run without you in the loop. Timed sequence sends, calling campaigns inside an approved window and scheduled automations also run unattended once approved.',
        'What does not happen autonomously is anything with an external consequence you have not authorised: enrolling contacts into a sequence, starting a calling campaign, publishing outside the approved calendar, launching or changing ad spend, negotiating price, making promises or answering legal and security questions. Those come to a person.',
      ],
    },
    pricingPointer('an AI employee'),
    faq([
      { q: 'What is an AI employee?', a: 'An AI system given a business role — defined inputs, decisions, actions, deliverables, a KPI and an approval boundary — that works persistently inside your workspace instead of answering one-off prompts.' },
      { q: 'How much does an AI employee cost?', a: 'Eligoo plans are priced per workspace and include a monthly credit allowance; model usage runs on your own AI provider account. Current plans, trial terms and top-up packs are on the pricing page.' },
      { q: 'What business tasks can AI employees automate?', a: 'Market research and campaign strategy, content and SEO, creative production, prospect research, email outreach and AI phone calls, qualification and booking, CRM hygiene and revenue reporting, and paid-campaign planning and management.' },
      { q: 'Can AI employees use my existing software?', a: 'They use the integrations you connect: your AI provider accounts, mailbox, telephony trunk, Google Workspace, social channels, Meta Ads, Apollo, Serper and fal.ai. The integrations directory lists what each one does.' },
      { q: 'Are AI employees suitable for a small business?', a: 'Yes — you can hire a single role and add others as the work justifies it. A small team often starts with Radar and Hook for pipeline, or Sage for content, with Atlas coordinating.' },
      { q: 'What happens when an AI employee is unsure?', a: 'Its role tells it when to ask. Low-confidence data is not treated as verified, unusual replies are flagged, and anything outside the boundary is escalated to a person with the context attached.' },
    ]),
    related([LINKS.aiAgents, LINKS.aiWorkforce, LINKS.aiAutomation, LINKS.cmpEmployeeAgent, LINKS.glEmployee, LINKS.sales, LINKS.marketing, LINKS.voice, LINKS.pricing, LINKS.security]),
    cta('Hire your first AI employee', 'Pick a role, connect the tools it needs and give it a task. Every outside-world action waits for your approval.'),
  ],
  breadcrumb: [HOME],
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
