import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/outbound-sales/',
  title: 'AI Outbound Sales',
  eyebrow: 'Use cases · Outbound sales',
  metaTitle: 'AI Outbound Sales — Research, Sequences, Calls and Booked Meetings from One AI Team | Eligoo',
  metaDescription: 'AI outbound sales with Eligoo: Radar builds the list, Maven and Sage write the sequence, Hook sends, calls and books, Ledger reports. Every enrolment and campaign is approved by a person.',
  primaryKeyword: 'AI outbound sales',
  secondaryKeywords: ['AI outbound sales agent', 'AI outbound automation', 'AI outbound prospecting', 'AI outbound email and calling', 'AI SDR for outbound', 'outbound sales automation'],
  answer: 'AI outbound sales is a prospecting motion run by AI employees end to end: build a target list, write and send a personalised sequence, call the contacts who do not reply, qualify and book meetings, and record the results. In Eligoo, Radar, Maven, Sage, Hook and Ledger each own a stage, and a person approves the list, the sequence and the calling campaign before anything reaches a prospect.',
  sections: [
    {
      kind: 'prose',
      heading: 'What the problem looks like',
      paragraphs: [
        'Outbound fails in most small B2B companies for a mundane reason: it is five jobs and nobody owns all five. Someone builds a list once. Someone writes a sequence and it is sent to everyone. Nobody calls the non-responders. Replies sit in an inbox. The CRM is updated when there is time. The motion stalls after a few weeks and the conclusion is that outbound does not work for this business.',
        'Hiring an SDR fixes the ownership problem at a cost, and the SDR still needs a list, a message and a manager. What is needed is a team that runs the whole chain consistently and reports honestly on which part of it is working.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo handles outbound sales',
      steps: [
        { title: 'Maven writes the plan', text: 'Segment, offer, messaging and what a qualified meeting means. Market research with web search supports each decision.' },
        { title: 'Radar builds the list', text: 'Accounts and contacts matching the segment, researched, enriched, verified, de-duplicated and scored, with existing customers and suppressed contacts removed.' },
        { title: 'Sage writes the sequence', text: 'Email steps, timing and call scripts, personalised from the verified facts on each contact rather than invented ones.' },
        { title: 'You approve enrolment', text: 'The list and sequence go to the approvals queue. Sends start from your own mailbox only after a person confirms.' },
        { title: 'Hook sends, calls and books', text: 'Sequences run on schedule; replies are read and classified; non-responders are called inside an approved campaign window; qualified contacts are booked with a brief.' },
        { title: 'Ledger reports and Atlas adjusts', text: 'Reply rate, positive reply rate, meetings booked and held, opt-outs and complaints by segment and step. Atlas uses the report to adjust the next week’s plan.' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'The outbound chain',
      stages: [
        { label: 'Research', owner: 'maven', detail: 'Segment, offer, messaging' },
        { label: 'Find prospects', owner: 'radar', detail: 'ICP-matched accounts and contacts' },
        { label: 'Enrich and verify', owner: 'radar', detail: 'Details, scores, de-duplication' },
        { label: 'Write', owner: 'sage', detail: 'Sequence and scripts' },
        { label: 'Approve', detail: 'Enrolment confirmed by a person' },
        { label: 'Email', owner: 'hook', detail: 'Sequence from your mailbox' },
        { label: 'Call', owner: 'hook', detail: 'Non-responders, inside the window' },
        { label: 'Qualify and book', owner: 'hook', detail: 'Questions, calendar event, brief' },
        { label: 'Report', owner: 'ledger', detail: 'Funnel, attribution, forecast' },
      ],
    },
    {
      kind: 'features',
      heading: 'What you get',
      items: [
        { title: 'Verified, scored lists', text: 'Names with evidence, not a bought spreadsheet.', icon: 'search' },
        { title: 'Personalised sequences', text: 'Each email personalised from checked facts about the contact and account.', icon: 'mail' },
        { title: 'Reply handling', text: 'Interested, not now, wrong person, opt-out, question, complaint — classified with the next action.', icon: 'layers' },
        { title: 'Calling on non-responders', text: 'AI voice calls inside the approved window, one line at a time, with transcripts.', icon: 'phone' },
        { title: 'Meetings with briefs', text: 'Calendar events with a summary of who the person is and what they said.', icon: 'calendar' },
        { title: 'Honest reporting', text: 'Meetings held, not just booked; opt-outs and complaints shown alongside the wins.', icon: 'chart' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: an equipment distributor opening a new territory',
      scenario: 'A distributor of industrial equipment has one salesperson for a territory it has never worked and no list.',
      steps: [
        'Maven writes the plan: two segments, one offer per segment, and a qualified meeting defined as a site with the equipment category and a stated need.',
        'Radar builds the list for both segments with maintenance and purchasing contacts, scored and de-duplicated.',
        'Sage writes a four-step sequence per segment and a call script; the salesperson approves both and the enrolment.',
        'Hook sends from the salesperson’s mailbox, classifies replies, calls the non-responders in an approved campaign window and books site visits.',
        'Ledger reports reply and meeting rates per segment and step; Atlas shifts the following week’s effort to the segment that responded.',
      ],
      outcome: 'The salesperson spends the first month on site visits rather than list building, and the company knows which segment in the territory is worth pursuing.',
    },
    employees(['maven', 'radar', 'sage', 'hook', 'ledger', 'atlas'], 'AI employees involved', undefined, {
      maven: 'Segment, offer, messaging, qualification criteria.',
      radar: 'List building, enrichment, verification, scoring.',
      sage: 'Sequence copy and call scripts.',
      hook: 'Sending, replies, calls, booking.',
      ledger: 'Funnel metrics, attribution, forecast.',
      atlas: 'Weekly plan and priorities.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Apollo for people search and enrichment; Serper.dev for research.',
        'Your own SMTP/IMAP mailbox for sends and reply detection with Message-ID de-duplication.',
        'Twilio, Telnyx, Plivo or Vobiz SIP trunks for calling.',
        'Google Workspace for calendar booking with a Meet link.',
        'Eligoo’s built-in CRM.',
      ],
    },
    pricingPointer('outbound'),
    faq([
      { q: 'What is AI outbound sales?', a: 'A prospecting motion where AI agents build the list, write and send the outreach, call the non-responders, qualify and book meetings, and record the results. In Eligoo it is run by a team of AI employees with a person approving each outward step.' },
      { q: 'Can AI replace an SDR?', a: 'It covers the repeatable parts of the role — list building, sequencing, calling, qualification, booking, CRM updates — consistently and at any hour inside your rules. It does not negotiate, build relationships over months or judge a difficult conversation; those go to your salespeople. See the comparison page for a fuller answer.' },
      { q: 'Does it send from our domain?', a: 'Yes. Hook sends from a mailbox you connect over SMTP and IMAP and reads replies from the same inbox. Nothing is sent from a shared Eligoo domain.' },
      { q: 'How is deliverability protected?', a: 'Sequences run only for approved contacts within the volume and timing limits on the sequence, personalisation is from verified facts, opt-outs and suppression lists are honoured, and replies are classified so complaints are seen. Mailbox warm-up and domain configuration remain your responsibility.' },
      { q: 'How quickly can outbound start?', a: 'Once a mailbox is connected and a list and sequence are approved, sends start on the sequence schedule. Calling needs a SIP trunk and a voice configuration; a browser test call lets you hear the agent first.' },
      { q: 'What reporting do we get?', a: 'Ledger reports reply rate, positive reply rate, meetings booked and held, opt-out and complaint rates by segment and step, with attribution and a forecast. Atlas summarises it in the weekly plan.' },
    ]),
    related([
      LINKS.outbound, LINKS.sales, LINKS.voice, LINKS.hook, LINKS.radar, LINKS.ucColdCalling, LINKS.ucLeadGen, LINKS.ucAppointments,
      { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' },
      { label: 'What is AI outbound sales?', href: '/resources/glossary/ai-outbound-sales/' },
      LINKS.cmpSalesSdr, LINKS.industries,
    ]),
    cta('Run outbound as a team, not a task', `Approve a list and a sequence, and let the five employees run the chain. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.useCases,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
