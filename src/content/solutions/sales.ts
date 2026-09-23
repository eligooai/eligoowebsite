import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/solutions/sales/',
  title: 'AI Sales Agent',
  eyebrow: 'Solutions · Sales',
  metaTitle: 'AI Sales Agent — AI SDR for Outreach, Qualification and Meetings | Eligoo',
  metaDescription: 'Eligoo’s AI sales agent, Hook, runs approved email sequences from your mailbox, makes AI phone calls, classifies replies, qualifies prospects and books meetings — with Radar supplying verified leads.',
  primaryKeyword: 'AI sales agent',
  secondaryKeywords: ['AI sales automation', 'AI sales employee', 'AI sales software', 'AI SDR', 'AI sales development agent', 'AI outbound sales', 'AI prospecting'],
  answer: 'An AI sales agent does the work of a sales development representative — outreach, follow-up, reply handling, qualification and booking — using an AI model and connected tools. In Eligoo the sales agent is Hook: it works a list that Radar verified, sends sequences you approved from your own mailbox, calls on your own number, and books meetings on your calendar.',
  character: 'hook',
  sections: [
    {
      kind: 'prose',
      heading: 'What is an AI sales agent?',
      paragraphs: [
        'An AI sales agent is an AI employee that carries a conversation with a prospect from first touch to booked meeting. It writes and sends personalised outreach, reads and classifies replies, answers routine questions, asks qualification questions and offers a meeting when the criteria are met. It does not close deals; it produces qualified conversations for the people who do.',
        'The version of this people usually mean is an AI SDR. Eligoo’s Hook covers that role across email and phone, with one difference from a generic AI SDR product: it only runs sequences and campaigns a person has approved, and it escalates anything commercial or sensitive rather than improvising.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How AI sales automation works in Eligoo',
      steps: [
        { title: 'Radar builds the list', text: 'Accounts and contacts that fit your ICP, enriched from Apollo and web research, verified, de-duplicated and scored.' },
        { title: 'Maven and Sage prepare the messaging', text: 'A messaging framework and the sequence copy, written to your approved claims and offer.' },
        { title: 'You approve enrolment', text: 'Enrolling contacts into a sequence is the approval-gated step. Once approved, timed sends run unattended from your mailbox.' },
        { title: 'Hook works the replies', text: 'Replies are read from your inbox, matched to conversations and classified. Routine questions are answered; opt-outs are recorded; anything unusual is flagged.' },
        { title: 'Hook calls', text: 'Phone steps run through the AI voice agent inside a calling campaign you approved, with a window and a pace.' },
        { title: 'Meetings are booked and briefed', text: 'When the qualification criteria are met, Hook offers a slot, creates the calendar event and writes a brief for whoever attends.' },
      ],
    },
    {
      kind: 'features',
      heading: 'What the AI sales agent can do',
      items: [
        { title: 'Personalised sequences', text: 'Multi-step email sequences personalised from verified facts, sent from your own address.', icon: 'mail' },
        { title: 'Reply classification', text: 'Interested, not now, wrong person, opt-out, question, complaint — each with a next action.', icon: 'layers' },
        { title: 'AI phone calls', text: 'Outbound calls on your number inside approved campaigns; inbound answered and logged.', icon: 'phone' },
        { title: 'Qualification', text: 'Your questions asked in the thread or on the call; answers stored on the lead.', icon: 'target' },
        { title: 'Meeting booking', text: 'Calendar events with a Meet link and a meeting brief for the attendee.', icon: 'calendar' },
        { title: 'CRM activity', text: 'Every touch logged; Ledger reconciles and reports.', icon: 'database' },
      ],
    },
    employees(['hook', 'radar', 'maven', 'sage', 'ledger'], 'The AI sales team', undefined, {
      hook: 'Outreach, calls, qualification, booking.',
      radar: 'Verified prospects with fit scores.',
      maven: 'Messaging framework and qualification criteria.',
      sage: 'Sequence copy and call scripts.',
      ledger: 'CRM hygiene and pipeline reporting.',
    }),
    {
      kind: 'list',
      heading: 'Integrations the sales agent uses',
      items: [
        'An SMTP/IMAP mailbox you own — sends and replies go through your address.',
        'Twilio, Telnyx, Plivo or Vobiz for phone numbers; Deepgram, ElevenLabs or OpenAI for speech.',
        'Apollo and Serper (through Radar) for prospect data and research.',
        'Google Workspace for calendar booking with Meet links.',
        'Any model from your connected AI provider account.',
      ],
    },
    pricingPointer('the sales agent'),
    {
      kind: 'prose',
      heading: 'AI sales agent vs a human SDR',
      paragraphs: [
        'A human SDR reads a room, builds relationships and handles the conversations that do not fit a pattern. An AI sales agent is consistent, works every contact in the list, follows up on time and never forgets to log the call — but it cannot negotiate, and it should not try. In Eligoo those situations are escalated by design. The comparison page sets out where each is the better choice.',
        FACTS.approvals,
      ],
    },
    faq([
      { q: 'Is this an AI SDR?', a: 'Yes, in the sense that Hook does SDR work across email and phone. The difference from a generic AI SDR tool is that Hook only runs approved sequences and campaigns and escalates anything commercial or sensitive.' },
      { q: 'Does the AI sales agent send from my email address?', a: 'Yes. You connect a mailbox over SMTP and IMAP. Sends come from your address; replies are read from your inbox.' },
      { q: 'Can it negotiate or give discounts?', a: 'No. Pricing, discounts, contractual promises, legal and security questions and serious complaints are outside its boundary and go to a person.' },
      { q: 'How does it avoid spamming people?', a: 'Sequences only run for contacts whose enrolment you approved, within the channel, timing and volume limits on the sequence. Opt-outs and suppression lists are honoured on every send.' },
      { q: 'What does it need to get started?', a: 'A connected mailbox, an approved sequence and a list — usually built by Radar. Add a phone number and a voice configuration for calls.' },
    ]),
    related([LINKS.hook, LINKS.radar, LINKS.outbound, LINKS.voice, LINKS.leadGen, LINKS.cmpSalesSdr, LINKS.glSdr, { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' }, { label: 'Sales automation use case', href: '/use-cases/sales-automation/' }, LINKS.industries]),
    cta('Hire an AI sales agent', 'Connect your mailbox, approve a sequence and let Hook work the list Radar built.'),
  ],
  breadcrumb: CRUMBS.solutions,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
