import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/solutions/customer-support/',
  title: 'AI Customer Support Agent',
  eyebrow: 'Solutions · Customer support',
  metaTitle: 'AI Customer Support Agent — Inbound Calls Answered, Routine Replies Handled | Eligoo',
  metaDescription: 'Eligoo’s AI customer support agent answers inbound phone calls on your number, handles routine email replies from your mailbox and escalates everything non-routine to a person. Here is exactly what it does and does not do.',
  primaryKeyword: 'AI customer support agent',
  secondaryKeywords: ['AI customer service agent', 'AI support automation', 'AI phone support', 'AI customer service automation', 'AI support agent'],
  answer: 'An AI customer support agent answers customer contacts — calls and emails — using an AI model and the information you give it, and hands anything it should not handle to a person. In Eligoo, Hook answers inbound calls on your number and routine email replies from your mailbox; complaints, refunds, legal and security questions are escalated with the context attached.',
  character: 'hook',
  sections: [
    {
      kind: 'prose',
      heading: 'What Eligoo’s support agent does — and does not do',
      paragraphs: [
        'Eligoo is a growth workforce first, and its support capability is deliberately scoped. Hook can answer inbound calls routed to your number — identify the caller, answer questions from the brief you wrote, take a message, log the call with a transcript and an outcome, and book a follow-up. It can also answer routine email replies in threads it is already part of, and record opt-outs.',
        'It is not a ticketing system, there is no chat widget for your website, and it does not have access to your order or billing systems. Complaints, refund requests, legal and security questions and anything that sounds serious are outside Hook’s boundary: it tells the customer a colleague will follow up and flags the conversation for a person. If you need a full help-desk product, this is not it; if you need missed calls answered and routine replies handled without a person watching the inbox, it is.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How AI phone support works',
      steps: [
        { title: 'Route calls to Eligoo', text: 'Connect a SIP trunk from Twilio, Telnyx, Plivo or Vobiz and set inbound dispatch so calls to your number reach the agent.' },
        { title: 'Write the support brief', text: 'What the agent may answer, the facts it may use, the questions to ask, when to take a message, when to escalate.' },
        { title: 'Test from the browser', text: 'Talk to the agent before it takes a real call and adjust the brief, voice and pace.' },
        { title: 'Calls are answered and logged', text: 'Each call keeps a transcript, an outcome and notes; an escalation creates a task with the context for a person.' },
        { title: 'Follow-ups are booked', text: 'Where a call needs a callback or a meeting, Hook creates the calendar event and a brief.' },
      ],
    },
    {
      kind: 'features',
      heading: 'What the support agent can do',
      items: [
        { title: 'Answer inbound calls', text: 'Missed calls are answered, identified and logged instead of going to voicemail.', icon: 'phone' },
        { title: 'Answer from an approved brief', text: 'Facts you provide — hours, availability, process steps — answered consistently.', icon: 'check' },
        { title: 'Take messages and book callbacks', text: 'Messages become tasks; callbacks become calendar events.', icon: 'calendar' },
        { title: 'Handle routine replies', text: 'Straightforward questions in existing email threads answered from your mailbox.', icon: 'mail' },
        { title: 'Escalate with context', text: 'Anything outside the boundary goes to a person with the transcript attached.', icon: 'shield' },
        { title: 'Keep the record', text: 'Transcripts, outcomes and notes on every contact, in your workspace.', icon: 'database' },
      ],
    },
    employees(['hook', 'ledger', 'atlas'], 'Employees involved', undefined, {
      hook: 'Answers calls and routine replies; escalates.',
      ledger: 'Keeps contact records and reports volumes and outcomes.',
      atlas: 'Routes escalations and follow-up tasks.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Twilio, Telnyx, Plivo or Vobiz for inbound numbers on Eligoo’s self-hosted voice stack.',
        'Deepgram for transcription; ElevenLabs, OpenAI or Deepgram voices.',
        'Your SMTP/IMAP mailbox for email replies.',
        'Google Workspace for callbacks and meetings.',
      ],
    },
    pricingPointer('support'),
    faq([
      { q: 'Can the AI answer customer calls?', a: 'Yes. Inbound calls to a number you connect are answered by Hook, which works from a brief you write, takes messages, books callbacks and logs everything.' },
      { q: 'Can it process refunds or look up orders?', a: 'No. It has no access to order or billing systems, and refund requests are escalated to a person.' },
      { q: 'What happens with an angry customer?', a: 'Serious complaints are outside the boundary. The agent says a colleague will follow up and flags the call with the transcript for a person.' },
      { q: 'Is there a chat widget for my website?', a: 'Not today. Support runs over phone and email.' },
      { q: 'Does it replace my help desk?', a: 'No. It is best used to make sure calls are answered and routine replies are handled when nobody is available, with everything else routed to your team.' },
    ]),
    related([LINKS.voice, LINKS.hook, { label: 'Customer support use case', href: '/use-cases/customer-support/' }, LINKS.sales, LINKS.operations, { label: 'Twilio integration', href: '/integrations/twilio/' }, { label: 'SMTP/IMAP mailbox integration', href: '/integrations/email-mailbox/' }]),
    cta('Get missed calls answered', 'Connect a number, write the brief, test from the browser. Everything non-routine reaches a person.'),
  ],
  breadcrumb: CRUMBS.solutions,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
