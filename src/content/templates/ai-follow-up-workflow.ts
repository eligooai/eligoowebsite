import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/templates/ai-follow-up-workflow/',
  title: 'AI Follow-Up Workflow Template',
  eyebrow: 'Templates',
  metaTitle: 'AI Follow-Up Workflow Template — Replies, No-Shows, Old Quotes and Dormant Leads | Eligoo',
  metaDescription: 'A copyable AI follow-up workflow: Hook classifies every reply, answers the routine ones, re-contacts no-shows and old quotes on an approved cadence, and Ledger keeps every touch on the record. Setup and KPI.',
  primaryKeyword: 'AI follow-up workflow',
  secondaryKeywords: ['AI follow-up workflow template', 'automated follow-up process', 'AI lead follow-up', 'sales follow-up automation', 'follow-up sequence template', 'AI email follow-up'],
  answer: 'This workflow makes sure no reply, no-show, unanswered quote or dormant lead is forgotten. Hook reads every reply and classifies it, answers the routine ones, flags the rest, and re-contacts no-shows, old quotes and dormant leads on an approved cadence by email and phone; Ledger keeps every touch on the record and reports what came back to life.',
  sections: [
    {
      kind: 'prose',
      heading: 'When to use this template',
      paragraphs: [
        'Use it when the leads you already have are worth more than the leads you have not found yet: quotes that were sent and never chased, meetings that were missed and never rebooked, enquiries that got one reply and then silence. Most small sales teams lose more revenue here than at the top of the funnel, because follow-up depends on someone remembering.',
        'It works on its own, on top of your existing CRM data, or as the tail of the sales, cold-calling and appointment-setting workflows, which all produce replies and outcomes that need following up.',
      ],
    },
    {
      kind: 'workflow',
      heading: 'The workflow',
      stages: [
        { label: 'Find what needs following up', owner: 'ledger', detail: 'Unanswered replies, no-shows, quotes past their date, leads with no activity' },
        { label: 'Classify replies', owner: 'hook', detail: 'Interested, not now, question, wrong person, opt-out, complaint' },
        { label: 'Answer routine replies', owner: 'hook', detail: 'Information requests, scheduling, confirmations' },
        { label: 'Escalate the rest', owner: 'hook', detail: 'Pricing, promises, complaints to the approvals queue' },
        { label: 'Re-contact on cadence', owner: 'hook', detail: 'Approved follow-up sequence: email steps and a call step' },
        { label: 'Book or close out', owner: 'hook', detail: 'Meeting booked, or the lead marked with a reason and a next date' },
        { label: 'Record and report', owner: 'ledger', detail: 'Every touch logged; revived-lead report' },
      ],
    },
    {
      kind: 'steps',
      heading: 'Set it up in Eligoo',
      steps: [
        { title: 'Connect your mailbox and, if you will call, a phone line', text: 'Hook reads replies from the SMTP/IMAP mailbox you connect and sends from it; replies are matched to conversations and de-duplicated. A SIP trunk enables the call step.' },
        { title: 'Load the leads that need follow-up', text: 'Import your CRM data or let Ledger find them: quotes past their expected decision date, meetings marked no-show, leads with no activity for a period you choose.' },
        { title: 'Define the routine', text: 'Write the answers to the questions that come up every time — lead times, how to get a sample, where to find documentation. Hook answers these without asking.' },
        { title: 'Approve the follow-up sequence', text: 'A short sequence per situation: a no-show sequence, an old-quote sequence, a dormant-lead sequence. Each has email steps, timing, an optional call step and a stop rule.' },
        { title: 'Approve enrolment', text: 'Hook proposes which leads go into which sequence. Approving the enrolment is the outside-world action.' },
        { title: 'Set the calling window and approve the campaign', text: 'If a sequence includes a call step, set the window and pace, make a browser test call and approve the campaign.' },
        { title: 'Work the approvals queue', text: 'Replies Hook will not answer on its own — pricing, a complaint, a request that changes the deal — arrive with a suggested response. Everything else runs.' },
        { title: 'Read the revived-lead report', text: 'Ledger reports which leads came back, from which sequence, and which were closed out with a reason, so the cadence and the stop rules can be tuned.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Approval points',
      items: [
        'The routine answers Hook may give without asking.',
        'Each follow-up sequence and its stop rule.',
        'Enrolment of leads into a sequence.',
        'Starting the calling campaign for the call step.',
        'Any non-routine reply: pricing, discounts, complaints, legal or security questions, anything that changes what was quoted.',
      ],
    },
    {
      kind: 'list',
      heading: 'Inputs you need',
      items: [
        'Your existing leads, quotes and meeting records, or a connected CRM.',
        'The questions prospects ask repeatedly and the answers you are happy to give automatically.',
        'How long after a quote, a no-show or a last touch a lead should be followed up.',
        'The stop rule: how many touches before a lead is closed out, and what reason to record.',
        'A mailbox to send from and, optionally, a phone line.',
      ],
    },
    {
      kind: 'list',
      heading: 'Outputs and KPI',
      items: [
        'KPI: leads revived — dormant leads, no-shows or old quotes that progressed to a meeting or a decision.',
        'Watch alongside: reply-to-response time, share of replies handled without escalation, opt-out rate, leads closed out with a reason.',
        'Every reply classified and every touch logged against the lead.',
        'Meetings rebooked with calendar events and briefs.',
        'Leads closed out with a recorded reason and a next-contact date where appropriate.',
        'Ledger’s revived-lead report by sequence.',
      ],
    },
    {
      kind: 'example',
      heading: 'Example: chasing unanswered quotes at a solar installer',
      scenario: 'A solar installer sends detailed quotes and hears back from a fraction of them. The rest sit in a folder; nobody knows whether they went elsewhere, postponed or never read it.',
      steps: [
        'Ledger lists every quote older than the installer’s typical decision period with no recorded reply.',
        'The installer approves an old-quote sequence: a short email asking whether the quote is still under consideration, a second email with an answer to the most common objection, then a call.',
        'Hook sends from the installer’s mailbox, answers routine questions about subsidy paperwork and timelines, and flags a request for a revised price for the owner.',
        'Calls to the remaining silent quotes run in the afternoon window; each ends with an outcome: postponed with a date, went elsewhere with a reason, still interested, or unreachable.',
        'Ledger updates every quote record and reports which reason dominated.',
      ],
      outcome: 'Every quote has a status and a reason, the interested ones are back in the pipeline with a next step, and the owner learns which objection is costing the most quotes.',
    },
    faq([
      { q: 'Will Hook reply to every email?', a: 'It reads every reply in the connected mailbox that belongs to a conversation it is running, classifies it and answers only the routine ones you defined. Everything else is flagged with a suggested response.' },
      { q: 'How does Hook avoid over-contacting someone?', a: 'Each sequence has a stop rule — a maximum number of touches and a close-out reason — and opt-outs are recorded on the first request. Suppression lists are honoured on every send and call.' },
      { q: 'Can this run on leads that came from outside Eligoo?', a: 'Yes. Import the records, or let Ledger find candidates in the connected CRM. The sequence enrolment is approved before anything sends.' },
      { q: 'What happens to a lead that never responds?', a: 'After the stop rule it is closed out with a reason and, if you choose, a date to try again. Nothing is deleted; the history stays on the record.' },
    ]),
    related([
      LINKS.sales, LINKS.hook, LINKS.ledger, LINKS.ucAppointments,
      { label: 'Sales automation use case', href: '/use-cases/sales-automation/' },
      { label: 'Email mailbox integration', href: '/integrations/email-mailbox/' },
      { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' },
      { label: 'Appointment setting workflow template', href: '/resources/templates/appointment-setting-workflow/' },
      { label: 'AI CRM workflow template', href: '/resources/templates/ai-crm-workflow/' },
    ]),
    cta('Stop losing the leads you already paid for', 'Connect your mailbox, approve a follow-up sequence and let Hook chase what nobody had time to. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.templates,
  schema: ['HowTo', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
