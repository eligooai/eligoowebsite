import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/templates/ai-sales-workflow/',
  title: 'AI Sales Workflow Template',
  eyebrow: 'Templates',
  metaTitle: 'AI Sales Workflow Template — Segment, List, Sequence, Calls, Booking, Reporting | Eligoo',
  metaDescription: 'A copyable AI sales workflow: Maven defines the segment, Radar builds the list, Hook runs the approved sequence and calls, Ledger reports. Setup steps in Eligoo, approval points, inputs and KPI.',
  primaryKeyword: 'AI sales workflow',
  secondaryKeywords: ['AI sales workflow template', 'AI sales process', 'AI sales automation workflow', 'outbound sales workflow', 'AI sales pipeline', 'AI sales agent workflow'],
  answer: 'This workflow takes a sales objective from a defined segment to qualified meetings on a salesperson’s calendar, with the records kept straight throughout. Maven defines the segment and message, Radar builds and verifies the list, Hook runs the approved email sequence and phone calls and books meetings, Ledger reconciles the CRM and reports the funnel, and Atlas tracks the whole programme against its goal.',
  sections: [
    {
      kind: 'prose',
      heading: 'When to use this template',
      paragraphs: [
        'Use it when you sell to businesses, you know roughly who buys from you, and the bottleneck is that nobody has time to build lists, send consistent follow-ups and make first calls. It suits a founder-led sales team, a small team of salespeople who should be in meetings rather than spreadsheets, or a business entering a new segment or region it has not worked before.',
        'It is the longest template on this site because it is the complete outbound chain. If you only need one part — a calling campaign, a list, follow-up on existing leads — the shorter templates linked at the end cover each part on its own.',
      ],
    },
    {
      kind: 'workflow',
      heading: 'The workflow',
      intro: 'Each stage is owned by one employee. Stages marked optional can be skipped without breaking the chain.',
      stages: [
        { label: 'Set the objective', owner: 'atlas', detail: 'Goal, segment, timeframe; operating plan and tasks for the others' },
        { label: 'Define segment and message', owner: 'maven', detail: 'Ideal customer profile, positioning, messaging hierarchy, qualification criteria' },
        { label: 'Write the sequence', owner: 'sage', detail: 'Email steps and call script from the messaging; optional if you have copy' },
        { label: 'Build the list', owner: 'radar', detail: 'Find accounts and contacts, research, enrich, verify, de-duplicate, score' },
        { label: 'Enrol and send', owner: 'hook', detail: 'Approved sequence from your mailbox; replies read and classified' },
        { label: 'Call non-responders', owner: 'hook', detail: 'Calling campaign inside the window; optional if you do not use phone' },
        { label: 'Qualify and book', owner: 'hook', detail: 'Questions asked, meeting created with Meet link and a brief' },
        { label: 'Reconcile and report', owner: 'ledger', detail: 'CRM hygiene, funnel metrics, attribution, forecast' },
        { label: 'Review and re-plan', owner: 'atlas', detail: 'Weekly growth plan, risk register, next segment' },
      ],
    },
    {
      kind: 'steps',
      heading: 'Set it up in Eligoo',
      steps: [
        { title: 'Connect the accounts the chain needs', text: 'An AI provider account (OpenAI, Anthropic, Google Gemini, Groq or OpenRouter), your SMTP/IMAP mailbox, Google Workspace for calendar booking, Apollo for prospect search and, if you will call, a SIP trunk from Twilio, Telnyx, Plivo or Vobiz.' },
        { title: 'Give Atlas the objective', text: 'State the goal in one sentence — the segment, the outcome you want and the timeframe. Atlas produces an operating plan and creates the tasks for Maven, Radar, Hook and Ledger on the board.' },
        { title: 'Approve Maven’s segment and messaging', text: 'Review the ideal customer profile, the messaging hierarchy and the qualification questions. This is where a weak segment gets fixed; everything downstream inherits it.' },
        { title: 'Review Radar’s list', text: 'Radar finds contacts, enriches and verifies them, removes duplicates and anyone on your suppression list, and scores each for fit, intent and urgency. Check a sample before enrolment.' },
        { title: 'Approve sequence enrolment', text: 'Hook proposes the enrolment: which contacts, which sequence, what timing and volume limits. Approving it is the first outside-world action; nothing is sent before this.' },
        { title: 'Make a browser test call, then approve the calling campaign', text: 'If the sequence includes phone steps, hear the agent in the browser, adjust the brief, then approve the campaign with its lead list, calling window and pace.' },
        { title: 'Handle escalations from the approvals queue', text: 'Non-routine replies — pricing questions, complaints, anything commercial — arrive in the queue with Hook’s suggested response. Everything else runs unattended.' },
        { title: 'Read Ledger’s weekly report and Atlas’s growth plan', text: 'Funnel conversion by stage, attribution by segment and sequence, and the forecast. Atlas proposes the next week’s adjustments; you approve or redirect.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Approval points',
      items: [
        'Segment, messaging and qualification criteria (before Radar builds the list).',
        'Sequence enrolment — the contacts, the sequence and its limits.',
        'Starting the calling campaign.',
        'Any reply Hook classifies as non-routine: pricing, promises, complaints, legal or security questions.',
        'Atlas’s weekly plan changes when they alter the segment or the volume.',
      ],
    },
    {
      kind: 'list',
      heading: 'Inputs you need',
      items: [
        'A one-sentence objective with a segment and a timeframe.',
        'What you know about your best customers — industry, size, region, who signs.',
        'Your offer and any proof you can share (case notes, certifications you actually hold, references).',
        'A suppression list: current customers, opt-outs, competitors, anyone not to contact.',
        'A mailbox you are willing to send from and a calendar to book into.',
        'A phone number and SIP trunk if calls are part of the sequence.',
      ],
    },
    {
      kind: 'list',
      heading: 'Outputs and KPI',
      items: [
        'KPI: qualified meetings held.',
        'Watch alongside: positive reply rate, show rate, opt-out rate, complaint rate.',
        'A verified, scored prospect list in the CRM with source links.',
        'Every send, reply and call logged against the right record, with transcripts for calls.',
        'Meeting briefs for each booked meeting.',
        'A weekly funnel report with attribution by segment and sequence, and a forecast with its assumptions.',
      ],
    },
    {
      kind: 'example',
      heading: 'Example: an industrial components maker entering a new state',
      scenario: 'A components manufacturer wants to open a state where it has no customers, no distributor and no list, and its two salespeople are fully booked with existing accounts.',
      steps: [
        'Atlas turns “win first accounts in the new state this quarter” into a plan with tasks for Maven, Radar, Hook and Ledger.',
        'Maven researches the state’s manufacturing clusters, proposes two segments and a message that leads with lead time and local delivery rather than price.',
        'Radar builds a list of plants in the two segments, finds purchasing and plant-engineering contacts, verifies numbers and emails and scores each for fit.',
        'Hook sends the approved three-step sequence from the sales manager’s mailbox, answers routine information requests, and calls the contacts who opened but did not reply, inside afternoon hours.',
        'Booked discovery calls land on the salespeople’s calendars with a brief; Ledger keeps every touch on the record and reports which segment produced meetings.',
      ],
      outcome: 'The salespeople spend the quarter in discovery calls with plants that answered qualification questions, and the next quarter’s list is built from the segment that converted.',
    },
    faq([
      { q: 'Do I need all five employees for this workflow?', a: 'Radar, Hook and Ledger are essential — list, outreach and records. Maven is essential if you do not already have a written segment and message, and Atlas becomes valuable once you are running more than one programme. Sage is optional if you have your own copy.' },
      { q: 'How long does setup take?', a: 'Connecting accounts and writing the objective is the same day. The pace after that is set by how quickly you approve the segment, the list and the enrolment — the employees wait for you at each gate.' },
      { q: 'Can the workflow run without phone calls?', a: 'Yes. Leave out the calling stage and the sequence is email only. Add calls later by connecting a SIP trunk and approving a campaign.' },
      { q: 'What if a prospect asks about price?', a: 'Hook does not answer pricing, discount or contractual questions. The reply is flagged in the approvals queue with the context, and a person responds.' },
      { q: 'How is success measured?', a: 'Qualified meetings held is the KPI. The template deliberately does not give a target number; your first run sets the baseline and Ledger’s report shows where the funnel leaks.' },
    ]),
    related([
      LINKS.sales, LINKS.outbound, LINKS.leadGen, LINKS.voice, LINKS.maven, LINKS.radar, LINKS.hook, LINKS.ledger, LINKS.atlas,
      { label: 'Lead generation workflow template', href: '/resources/templates/lead-generation-workflow/' },
      { label: 'AI cold calling workflow template', href: '/resources/templates/ai-cold-calling-workflow/' },
      { label: 'Appointment setting workflow template', href: '/resources/templates/appointment-setting-workflow/' },
      { label: 'AI CRM workflow template', href: '/resources/templates/ai-crm-workflow/' },
    ]),
    cta('Run this sales workflow in your workspace', 'Connect a mailbox and a calendar, give Atlas the objective and approve each gate as it comes. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.templates,
  schema: ['HowTo', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
