import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/sales-automation/',
  title: 'AI Sales Automation',
  eyebrow: 'Use cases · Sales automation',
  metaTitle: 'AI Sales Automation — Prospecting, Follow-up, Booking and CRM Hygiene with AI Employees | Eligoo',
  metaDescription: 'AI sales automation with Eligoo: Radar finds prospects, Hook runs sequences, calls, follow-ups and bookings, Ledger keeps the CRM and forecast honest. Salespeople keep the conversations that need them.',
  primaryKeyword: 'AI sales automation',
  secondaryKeywords: ['AI sales automation software', 'AI sales agent', 'AI sales employee', 'automated sales follow-up', 'AI CRM automation', 'AI sales pipeline automation'],
  answer: 'AI sales automation is the handing over of the repeatable parts of selling — prospecting, first contact, follow-up, qualification, meeting booking, CRM updates and forecasting — to AI employees, so salespeople spend their time on conversations that need judgement. In Eligoo, Radar, Hook and Ledger cover those parts under rules and approvals you set.',
  sections: [
    {
      kind: 'prose',
      heading: 'What the problem looks like',
      paragraphs: [
        'A salesperson’s week is mostly not selling: finding who to call, writing the same email again, chasing quotes that went quiet, updating the CRM, preparing a forecast. The parts that need a person — a demo, a negotiation, a site visit, a relationship — get whatever time is left. Managers see a pipeline that is out of date and a forecast built on hope.',
        'The fix is not to automate the salesperson but to automate around them: a consistent front end that produces qualified conversations, a follow-up discipline that never lapses, and a CRM that stays true without anyone typing.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo handles sales automation',
      steps: [
        { title: 'Radar keeps the top of the funnel full', text: 'Lists built to your profile, verified, scored and de-duplicated, on a schedule.' },
        { title: 'Hook makes contact and follows up', text: 'Approved sequences from your mailbox, replies classified, calls to non-responders inside a campaign window, follow-ups on quotes and proposals at the interval you set.' },
        { title: 'Hook qualifies and books', text: 'Your questions asked on every conversation; meetings created on the right calendar with a brief.' },
        { title: 'Salespeople take the hand-off', text: 'The demo, the negotiation, the site visit. Anything commercial or sensitive that reaches Hook is passed over with a note.' },
        { title: 'Ledger keeps the CRM and forecast honest', text: 'Every touch logged against the right record with an audit trail, duplicates reconciled, stale deals flagged in an exception queue, funnel metrics and a forecast with evidence.' },
        { title: 'Atlas runs the weekly plan', text: 'Priorities, risks and the approval queue reviewed, with a weekly growth plan for you.' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'What is automated and what is not',
      intro: 'Stages without an owner stay with your salespeople by design.',
      stages: [
        { label: 'Prospecting', owner: 'radar' },
        { label: 'Outreach and follow-up', owner: 'hook' },
        { label: 'Qualification and booking', owner: 'hook' },
        { label: 'Demo and proposal', detail: 'Your salesperson' },
        { label: 'Quote follow-up', owner: 'hook' },
        { label: 'Negotiation and close', detail: 'Your salesperson' },
        { label: 'CRM, pipeline, forecast', owner: 'ledger' },
        { label: 'Weekly plan', owner: 'atlas' },
      ],
    },
    {
      kind: 'features',
      heading: 'What you get',
      items: [
        { title: 'Follow-up that never lapses', text: 'Quotes, proposals and interested-but-not-yet contacts are followed up on schedule and the outcome recorded.', icon: 'clock' },
        { title: 'Qualified meetings with briefs', text: 'Salespeople walk into conversations knowing who, what and why.', icon: 'calendar' },
        { title: 'A CRM that stays true', text: 'Activity logged automatically, duplicates reconciled, nothing deleted, every change audited.', icon: 'database' },
        { title: 'An exception queue', text: 'Stale deals, missing fields and contradictions surfaced for a person rather than buried.', icon: 'shield' },
        { title: 'Funnel metrics and forecast', text: 'Stage conversion, pipeline health and a forecast with the evidence behind each number.', icon: 'chart' },
        { title: 'Approval boundaries', text: 'Enrolment, calling campaigns and non-routine replies wait for a person; pricing and commitments never come from the AI.', icon: 'lock' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a three-person sales team with a leaky pipeline',
      scenario: 'A B2B services company has three salespeople, a CRM nobody trusts and a habit of losing quotes to silence.',
      steps: [
        'Ledger reconciles the CRM — duplicates merged with an audit trail, stale deals flagged — and reports the true pipeline.',
        'Hook takes over quote follow-up: every issued quote gets an email and a call at set intervals, and the outcome is written to the deal.',
        'Radar builds a fresh list each month for the segment Maven picked; Hook runs the approved sequence and books meetings with briefs.',
        'The salespeople handle demos, proposals and negotiations; the CRM updates itself from Hook’s and Ledger’s work.',
        'Atlas reviews the forecast and exceptions weekly and assigns the next month’s list and campaign.',
      ],
      outcome: 'Quotes are followed up without exception, the forecast is built on recorded evidence, and the salespeople spend their time in conversations that need them.',
    },
    employees(['radar', 'hook', 'ledger', 'maven', 'atlas'], 'AI employees involved', undefined, {
      radar: 'Prospect lists on a schedule.',
      hook: 'Outreach, calls, follow-up, qualification, booking.',
      ledger: 'CRM hygiene, exceptions, funnel, forecast.',
      maven: 'Segments, messaging, qualification criteria.',
      atlas: 'Weekly plan and approvals.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Eligoo’s built-in CRM for leads, deals, meetings and activity; import and export of lists.',
        'Your own SMTP/IMAP mailbox for sequences and replies.',
        'Twilio, Telnyx, Plivo or Vobiz SIP trunks for calls.',
        'Google Workspace for calendar booking and Sheets for exported reports.',
        'Apollo and Serper.dev for prospect search and research.',
      ],
    },
    pricingPointer('the sales team'),
    faq([
      { q: 'What can AI automate in sales?', a: 'Prospecting, first contact, follow-up on replies and quotes, qualification, meeting booking, CRM updates, pipeline reporting and forecasting. Demos, negotiation, closing and relationship management stay with your salespeople.' },
      { q: 'Does Eligoo replace our CRM?', a: 'Eligoo includes its own CRM where its employees work. Lists can be imported and exported, so you can run it alongside an existing system, but there is no live two-way sync with third-party CRMs today.' },
      { q: 'Can the AI change or delete CRM records?', a: 'Ledger updates records with a full audit trail and never deletes them. Reconciliations and merges are logged and reversible from the log.' },
      { q: 'How is a follow-up cadence set?', a: 'On the sequence or campaign: the interval between touches, the channels, the number of attempts and the calling window. Hook follows it exactly and records each outcome.' },
      { q: 'What does the salesperson still do?', a: 'Everything that needs judgement or a relationship: demos, proposals, pricing, negotiation, difficult conversations and account management. Hook hands those over with a note whenever they reach it.' },
      { q: 'How quickly does it show results?', a: 'CRM reconciliation and quote follow-up start as soon as the mailbox and CRM data are connected. New pipeline from outbound depends on your sales cycle; Ledger reports the leading indicators — replies, meetings booked and held — from the first week.' },
    ]),
    related([
      LINKS.sales, LINKS.hook, LINKS.ledger, LINKS.radar, LINKS.revenue, LINKS.ucOutbound, LINKS.ucAppointments,
      { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' },
      { label: 'AI follow-up workflow template', href: '/resources/templates/ai-follow-up-workflow/' },
      { label: 'AI CRM workflow template', href: '/resources/templates/ai-crm-workflow/' },
      LINKS.cmpSalesSdr,
    ]),
    cta('Automate around your salespeople', `Connect the mailbox and calendar, approve the first sequence, and let Radar, Hook and Ledger take the repeatable work. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.useCases,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
