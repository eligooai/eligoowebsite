import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/ai-employees/hook/',
  title: 'Hook — AI Sales & Voice Agent',
  eyebrow: 'AI employee · Outreach & Sales',
  metaTitle: 'Hook — AI Sales & Voice Agent for Outbound, Cold Calling and Appointment Setting | Eligoo',
  metaDescription: 'Hook is Eligoo’s AI sales and voice employee: it personalises approved email sequences, makes AI phone calls, classifies replies, qualifies prospects and books meetings — inside the limits you set.',
  primaryKeyword: 'AI sales agent',
  secondaryKeywords: ['AI voice agent', 'AI cold calling agent', 'AI outbound agent', 'AI SDR', 'AI appointment setter', 'AI sales automation'],
  answer: 'Hook is Eligoo’s AI sales and voice employee. It takes a verified prospect list, sends the outreach sequence you approved, places AI phone calls on your own number, handles routine replies, asks qualification questions and books meetings on your calendar. Anything outside its approval boundary — pricing, promises, complaints — is handed to a person.',
  character: 'hook',
  sections: [
    {
      kind: 'prose',
      heading: 'What Hook does',
      paragraphs: [
        'Hook is the employee that talks to prospects. Its input is a prospect list that Radar has found and verified, the messaging framework Maven wrote and the outreach copy Sage prepared. Its output is conversations: sent emails, classified replies, completed calls, qualification records, meetings held and the CRM activity that goes with them.',
        'Hook decides which approved sequence to use for a contact, how much to personalise it, when to follow up, how to classify a reply, whether a response can be handled automatically and when to offer a meeting. It does not decide what you sell, at what price or to whom — those are approved before Hook starts.',
        'The measure of Hook’s work is qualified meetings held, not meetings booked. Positive reply rate, show rate, opt-out rate and complaint rate are tracked alongside it, so a sequence that books many no-shows is visible as a problem rather than a success.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Hook works',
      steps: [
        { title: 'Receives a list and a sequence', text: 'Radar hands over verified contacts with a fit score and rationale. The sequence — email steps, timing, call steps — is written with Maven and Sage and approved by you.' },
        { title: 'Enrolment is approved', text: 'Enrolling contacts into a sequence is the approval-gated step. Once approved, the timed sends run unattended from your connected mailbox.' },
        { title: 'Replies are read and classified', text: 'Hook polls the mailbox, matches replies to conversations, records opt-outs, answers routine questions and flags anything that needs a person.' },
        { title: 'Calls run inside a campaign', text: 'For phone steps, Hook uses the AI voice agent on your SIP trunk. Calling campaigns have a window, a pace and a lead list; starting one is an approval.' },
        { title: 'Qualification and booking', text: 'On a call or in a thread, Hook asks the questions you defined, records the answers and offers a meeting. Booked meetings create a calendar event with a Meet link and a briefing for whoever attends.' },
        { title: 'Hand-off', text: 'The conversation, outcome and next step are written to the CRM. Ledger reconciles the data; Atlas sees the results in the weekly plan.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Tools and integrations Hook uses',
      items: [
        'An SMTP/IMAP mailbox you connect — sends come from your address and replies are read from your inbox.',
        'Telephony via Twilio, Telnyx, Plivo or Vobiz SIP trunks on Eligoo’s self-hosted LiveKit voice stack.',
        'Deepgram for transcription; ElevenLabs, OpenAI or Deepgram voices for speech.',
        'Any language model from your connected OpenAI, Anthropic, Google Gemini, Groq or OpenRouter account.',
        'Google Workspace for calendar booking and meeting links.',
        'Eligoo’s built-in CRM for leads, statuses, meetings and activity.',
      ],
    },
    {
      kind: 'features',
      heading: 'Sample deliverables',
      items: [
        { title: 'Personalised outbound conversations', text: 'Each email in a sequence, personalised from verified facts about the contact — never invented ones.', icon: 'mail' },
        { title: 'Classified replies', text: 'Interested, not now, wrong person, opt-out, question, complaint — each with the suggested next action.', icon: 'layers' },
        { title: 'Call transcripts and outcomes', text: 'A transcript, an outcome, notes and an optional recording for every call.', icon: 'phone' },
        { title: 'Qualification records', text: 'The answers to your qualification questions, stored on the lead.', icon: 'target' },
        { title: 'Meeting briefs', text: 'Who the person is, what they said, what they want to discuss — sent before the meeting.', icon: 'calendar' },
        { title: 'Updated CRM activity', text: 'Every touch logged against the right record.', icon: 'database' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'How Hook hands off to teammates',
      stages: [
        { label: 'Radar', owner: 'radar', detail: 'Verified contacts, fit score, phone and email' },
        { label: 'Maven', owner: 'maven', detail: 'Messaging framework and qualification criteria' },
        { label: 'Sage', owner: 'sage', detail: 'Outreach copy and call scripts' },
        { label: 'Hook', owner: 'hook', detail: 'Sends, calls, qualifies, books' },
        { label: 'Ledger', owner: 'ledger', detail: 'CRM hygiene, attribution, forecast' },
        { label: 'Atlas', owner: 'atlas', detail: 'Priorities, exceptions, weekly plan' },
      ],
    },
    employees(['radar', 'maven', 'sage', 'ledger', 'atlas'], 'Works with'),
    pricingPointer('Hook'),
    faq([
      { q: 'Is Hook an AI SDR?', a: 'Hook covers what an SDR does — outreach, follow-up, qualification, booking — across email and phone. The difference is that Hook only runs sequences and campaigns a person has approved, and escalates anything commercial or sensitive instead of improvising.' },
      { q: 'Can Hook negotiate or offer a discount?', a: 'No. Price, discounts, contractual promises, legal and security questions and serious complaints are outside its boundary. Hook says a colleague will follow up and flags the conversation.' },
      { q: 'Does Hook send from my email address?', a: 'Yes. You connect a mailbox over SMTP and IMAP; Hook sends from it and reads replies from it. Nothing goes out from a shared Eligoo domain.' },
      { q: 'What stops Hook from emailing too many people?', a: 'Sequences run only for the contacts whose enrolment you approved, within the channel, timing and volume limits set on the sequence. Suppression lists and opt-outs are honoured on every send.' },
      { q: 'Can Hook call leads outside business hours?', a: 'Calling campaigns run inside the window you define and roll over to the next day. Nothing is dialled outside it.' },
      { q: 'What does Hook need from me to start?', a: 'A connected mailbox, an approved sequence, and a prospect list — usually built by Radar. For calls, a SIP trunk and a voice configuration. A browser test call lets you hear the agent before it calls anyone.' },
    ]),
    related([
      LINKS.voice, LINKS.sales, LINKS.outbound, LINKS.ucColdCalling, LINKS.ucAppointments, LINKS.radar, LINKS.ledger,
      { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' }, LINKS.cmpSalesSdr, LINKS.glSdr,
    ]),
    cta('Hire Hook', `Connect your mailbox and a phone number, approve a sequence, and let Hook work the list. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.employees,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
