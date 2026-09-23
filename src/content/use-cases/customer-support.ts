import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/customer-support/',
  title: 'AI Customer Support',
  eyebrow: 'Use cases · Customer support',
  metaTitle: 'AI Customer Support — Inbound Calls Answered, Routine Emails Handled, Everything Else Escalated | Eligoo',
  metaDescription: 'Eligoo’s AI customer support is deliberately limited: Hook answers and logs inbound calls, replies to routine emails from your mailbox and escalates anything non-routine to a person. No ticketing system, no chat widget.',
  primaryKeyword: 'AI customer support',
  secondaryKeywords: ['AI customer support agent', 'AI phone support', 'AI customer service automation', 'AI support agent for small business', 'AI inbound call answering', 'AI email support'],
  answer: 'AI customer support in Eligoo means inbound phone calls answered and logged by an AI voice agent, routine email replies handled from your own mailbox, and everything non-routine escalated to a person with a note. Hook does this work. Eligoo does not provide a ticketing system or a live chat widget, and it is built for B2B companies whose support load is mostly calls and email.',
  sections: [
    {
      kind: 'prose',
      heading: 'What the problem looks like',
      paragraphs: [
        'In a small B2B company the support line rings while the person who should answer it is on site, and the shared inbox fills with questions that have the same six answers. Missed calls go to a voicemail nobody checks; routine emails wait a day because they are behind the difficult ones. Customers do not need a chatbot; they need the phone answered and the simple things dealt with promptly.',
      ],
    },
    {
      kind: 'prose',
      heading: 'What Eligoo does and does not do for support',
      paragraphs: [
        'What it does: answers inbound calls to a number you route to it, identifies the caller and the reason for the call, answers questions covered by the brief, captures details such as an order or job reference, logs a transcript and outcome, and creates a follow-up task or calendar event when one is needed. For email, Hook reads your connected mailbox, replies to routine questions from the approved answers and records the rest for a person.',
        'What it does not do: there is no ticketing system, no live chat widget for your website, no knowledge-base product and no customer portal. Anything commercial, contractual, technical beyond the brief, or a complaint is escalated rather than answered. If your support operation depends on tickets and chat, Eligoo is not the right tool for it; if it depends on the phone and the inbox, it is a practical fit.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo handles support',
      steps: [
        { title: 'You write the brief', text: 'The questions Hook may answer and the approved answers, what information to collect, and what must go to a person. Escalation rules are explicit.' },
        { title: 'Inbound calls are routed', text: 'Calls to a number on your SIP trunk are dispatched to the voice agent. It greets, identifies the caller, handles what the brief allows and logs the rest.' },
        { title: 'Routine emails are answered', text: 'Hook polls the connected mailbox, matches messages to known customers where it can, replies to routine questions and marks non-routine ones for a person. Replies that are not routine wait in the approvals queue.' },
        { title: 'Non-routine issues are escalated', text: 'A complaint, a refund request, a technical fault or anything outside the brief becomes a task with the transcript or thread attached, assigned to your team.' },
        { title: 'Everything is logged', text: 'Transcripts, outcomes and notes for calls; threads and classifications for email; all visible in the activity log and on the customer record.' },
      ],
    },
    {
      kind: 'features',
      heading: 'What is covered',
      items: [
        { title: 'Inbound call answering', text: 'Calls answered on your number, the reason captured and logged, with optional recording.', icon: 'phone' },
        { title: 'Routine email replies', text: 'Answers to the common questions, sent from your own mailbox.', icon: 'mail' },
        { title: 'Details captured', text: 'Order, job or account references, contact details and the request, written to the record.', icon: 'database' },
        { title: 'Escalation with context', text: 'A task for a person with the transcript or thread and the reason for escalation.', icon: 'users' },
        { title: 'Follow-up scheduling', text: 'A callback or visit booked on the calendar when the caller needs one.', icon: 'calendar' },
        { title: 'Boundaries', text: 'No commitments, refunds, technical diagnoses or complaint handling by the agent.', icon: 'shield' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a service company’s phone line',
      scenario: 'An equipment service company misses calls whenever its two office staff are on the phone or out, and the inbox is full of “when is my engineer coming” emails.',
      steps: [
        'The brief lists the questions Hook may answer — service hours, how to book, what to have ready for a visit — and the details to collect for a service request.',
        'Overflow and out-of-hours calls are routed to the voice agent; it captures the request, the site and the fault description and creates a task for the service coordinator.',
        'Routine emails asking about booking or hours are answered from the mailbox; anything about a fault, an invoice or a complaint is marked for a person.',
        'The coordinator starts each morning with a list of captured requests and escalations, each with a transcript or thread.',
      ],
      outcome: 'No call goes unanswered, routine questions are handled the same day, and the office staff deal only with the requests that need judgement.',
    },
    employees(['hook', 'ledger', 'atlas'], 'AI employees involved', undefined, {
      hook: 'Answers calls, replies to routine email, escalates.',
      ledger: 'Keeps the customer record and follow-up tasks accurate.',
      atlas: 'Assigns escalations and reports on volume.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Twilio, Telnyx, Plivo or Vobiz SIP trunks for inbound calls on Eligoo’s self-hosted voice stack.',
        'Deepgram for transcription; ElevenLabs, OpenAI or Deepgram voices.',
        'Your own SMTP/IMAP mailbox for email support.',
        'Google Workspace for callback and visit scheduling.',
      ],
    },
    pricingPointer('support'),
    faq([
      { q: 'Can an AI agent answer our support calls?', a: 'Yes. Hook answers calls routed to it on your number, handles the questions in the brief, captures the request and logs a transcript. Anything outside the brief is escalated to a person with the details.' },
      { q: 'Does Eligoo have a ticketing system?', a: 'No. Escalations become tasks in the workspace with the transcript or email thread attached. If you run a ticketing tool, your team continues to use it.' },
      { q: 'Does Eligoo offer a website chat widget?', a: 'No. Support in Eligoo is by phone and email only.' },
      { q: 'What happens with a complaint?', a: 'The agent acknowledges it, collects the details and tells the customer a person will follow up. It does not apologise on the company’s behalf beyond that, offer remedies or argue. The escalation carries the full transcript.' },
      { q: 'Can it answer questions about a specific order?', a: 'Only from what is in the brief or on the customer record in the workspace. Eligoo does not connect to order-management or ERP systems, so live order status is not available to the agent.' },
      { q: 'Will it reply to every email in our inbox?', a: 'No. It replies only to messages it classifies as routine and covered by the approved answers. Everything else is left for a person, and replies that are not routine wait in the approvals queue.' },
    ]),
    related([
      LINKS.support, LINKS.voice, LINKS.hook, LINKS.operations,
      { label: 'Email mailbox integration', href: '/integrations/email-mailbox/' },
      { label: 'Twilio integration', href: '/integrations/twilio/' },
      LINKS.cmpAgentChatbot, LINKS.glVoice,
    ]),
    cta('Get the phone answered', 'Route overflow calls to Hook, connect the support mailbox, and keep your people for the calls that need them.'),
  ],
  breadcrumb: CRUMBS.useCases,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
