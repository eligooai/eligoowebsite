import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/solutions/voice/',
  title: 'AI Voice Agent for Business',
  eyebrow: 'Solutions · Voice',
  metaTitle: 'AI Voice Agent for Business — Outbound Calls, Qualification and Booking | Eligoo',
  metaDescription: 'Eligoo’s AI voice agent makes and receives phone calls, qualifies prospects, books appointments and logs every call — on your own phone numbers, with human approval before any campaign starts.',
  primaryKeyword: 'AI voice agent',
  secondaryKeywords: ['AI voice agent platform', 'AI phone agent', 'AI calling agent', 'AI voice automation', 'AI phone automation', 'AI voice assistant for business', 'AI voice sales agent', 'AI voice agent for outbound calls', 'AI voice agent for lead generation', 'AI voice agent for appointment booking'],
  answer: 'An AI voice agent is software that holds a phone conversation on its own: it transcribes what the caller says, decides what to say next with an AI model, and speaks the reply with a synthetic voice. In Eligoo the voice agent is Hook, an AI employee that places outbound calls, answers inbound calls, qualifies the person on the line, books meetings and writes the outcome back to your CRM.',
  character: 'hook',
  sections: [
    {
      kind: 'prose',
      heading: 'What is an AI voice agent?',
      paragraphs: [
        'An AI voice agent combines three components in real time: speech-to-text to hear the caller, a language model to understand and decide, and text-to-speech to answer. A telephony connection puts that loop on a real phone number so the agent can dial out or pick up.',
        'The difference between a voice agent and an IVR menu is that the agent is not following a fixed tree. It listens to free-form speech, keeps the context of the conversation, handles interruptions and objections, and can take actions mid-call — such as checking availability and booking a slot.',
        'Eligoo’s voice agent is part of an AI workforce rather than a standalone dialer. Hook works from a prospect list that Radar has verified, uses messaging that Maven and Sage prepared, and hands outcomes to Ledger, who keeps the CRM and reporting honest.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the AI voice agent works',
      steps: [
        { title: 'You connect a phone number', text: 'Bring a SIP trunk from Twilio, Telnyx, Plivo or Vobiz. Eligoo runs its own LiveKit media server, so calls are placed and received over your own trunk rather than a shared number pool.' },
        { title: 'You choose the voice stack', text: 'Pick speech-to-text (Deepgram by default), a language model from your connected AI accounts, and a voice from ElevenLabs, OpenAI or Deepgram. Each provider uses your own API key.' },
        { title: 'Hook gets a brief', text: 'The first message, goal of the call, qualification questions, objection handling and what counts as a booked meeting are set in the agent configuration. Behaviour presets cover common call types.' },
        { title: 'A campaign is approved', text: 'A calling campaign has a lead list, a calling window, a pace between calls and a daily roll-over. Starting it is an approval — nobody gets dialled until a person confirms.' },
        { title: 'Calls run and are logged', text: 'Each call produces a transcript, an outcome, notes and an optional recording. A booked meeting creates a Google Calendar event with a Meet link when Google Workspace is connected; otherwise Ledger is tasked with the follow-up.' },
      ],
    },
    {
      kind: 'features',
      heading: 'What the AI voice agent can do',
      items: [
        { title: 'Outbound calling campaigns', text: 'Dial a verified list inside a time window at a set pace, with one call at a time per line and automatic roll-over to the next day.', icon: 'phone' },
        { title: 'Inbound answering', text: 'Route calls to your number into the same agent so missed calls are answered, qualified and logged.', icon: 'clock' },
        { title: 'Conversational qualification', text: 'Ask the questions you define, classify the answer, and mark a lead as qualified, unqualified or needing a human.', icon: 'target' },
        { title: 'Appointment booking', text: 'Offer a slot, confirm it on the call and create the calendar event with the meeting link.', icon: 'calendar' },
        { title: 'Transcripts and recordings', text: 'Every call keeps a transcript, an outcome and notes; audio recording is optional and stored in your workspace.', icon: 'database' },
        { title: 'Browser test calls', text: 'Talk to the agent from the browser before it calls anyone, and iterate on the brief until it sounds right.', icon: 'sparkles' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'Where voice fits in the outbound workflow',
      intro: 'Voice is one stage of a longer chain. Each stage is owned by an employee, and the hand-offs are recorded in the workspace.',
      stages: [
        { label: 'Research', owner: 'maven', detail: 'Segment, offer and messaging' },
        { label: 'Find prospects', owner: 'radar', detail: 'Accounts and contacts that fit the ICP' },
        { label: 'Enrich and verify', owner: 'radar', detail: 'Phone numbers, roles, source links' },
        { label: 'Email', owner: 'hook', detail: 'Approved sequence, replies classified' },
        { label: 'Call', owner: 'hook', detail: 'AI voice call inside the campaign window' },
        { label: 'Qualify', owner: 'hook', detail: 'Questions answered, outcome recorded' },
        { label: 'Book meeting', owner: 'hook', detail: 'Calendar event and meeting brief' },
        { label: 'CRM and reporting', owner: 'ledger', detail: 'Clean record, attribution, forecast' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a follow-up campaign after a trade show',
      scenario: 'A packaging manufacturer returns from an exhibition with a stack of scanned badges and wants every warm contact called within the week.',
      steps: [
        'Radar de-duplicates the list against the CRM, enriches missing phone numbers and flags the contacts that are already customers or on the suppression list.',
        'Maven drafts a short call brief: reference the stand, confirm the interest noted on the badge, ask two qualification questions and offer a 20-minute call with a sales engineer.',
        'Hook runs a browser test call with the founder, then a calling campaign is created for weekday afternoons and submitted for approval.',
        'Calls run at the approved pace. Booked meetings land on the sales engineer’s calendar; voicemails and no-answers are retried inside the window; declines are recorded with the reason.',
        'Ledger reports meetings held, reasons for decline and which segments converted, so the next show’s list is better targeted.',
      ],
      outcome: 'Every contact is called, every outcome is in the CRM with a transcript, and the sales engineer only spends time on meetings that were qualified on the call.',
    },
    employees(['hook', 'radar', 'maven', 'ledger'], 'AI employees involved', undefined, {
      hook: 'Makes and receives the calls, qualifies and books.',
      radar: 'Supplies verified numbers and context for each call.',
      maven: 'Owns the messaging and the qualification criteria.',
      ledger: 'Logs outcomes, attribution and forecast.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used by the voice agent',
      items: [
        'Telephony: Twilio, Telnyx, Plivo or Vobiz SIP trunks connected to Eligoo’s self-hosted LiveKit server.',
        'Speech-to-text: Deepgram (default) or another supported provider using your key.',
        'Text-to-speech: ElevenLabs, OpenAI or Deepgram voices.',
        'Language model: any model from your connected OpenAI, Anthropic, Google Gemini, Groq or OpenRouter account.',
        'Calendar: Google Workspace for booking events with a Meet link.',
        'Email: an SMTP/IMAP mailbox for the sequences that usually run before and after calls.',
      ],
    },
    pricingPointer('calling'),
    {
      kind: 'prose',
      heading: 'AI voice agent vs alternatives',
      paragraphs: [
        'Compared with a human SDR, an AI voice agent is consistent, available inside any calling window and cheap per call, but it cannot negotiate, read a room or handle a serious complaint — in Eligoo those situations are escalated to a person by design. Compared with a standalone voice-AI product, Eligoo’s agent is already connected to the prospect research, email sequences and CRM around it, so there is no separate integration project to get calls flowing.',
        'For a fuller discussion see the comparison pages linked below.',
      ],
    },
    faq([
      { q: 'Can the AI voice agent make cold calls?', a: 'Yes. Hook places outbound calls to a list you approve, inside a calling window you set. Cold calling rules differ by country; you are responsible for using lists and calling hours that are lawful where you operate, and suppression lists are respected on every campaign.' },
      { q: 'What does a call sound like?', a: 'That depends on the voice you pick and the brief you write. You can place a test call from the browser and adjust the first message, pace and interruption handling before any real call is made.' },
      { q: 'Which languages does it support?', a: 'Language support comes from the speech and voice providers you connect. Deepgram, ElevenLabs and OpenAI voices cover the major languages; Indian-language transcription and voices are available through supported providers. Set the call language in the agent configuration.' },
      { q: 'Does it use my phone number?', a: 'Yes. You connect a SIP trunk from your telephony provider, so calls come from numbers you own and control.' },
      { q: 'What happens when the caller asks something the agent should not answer?', a: 'Pricing negotiation, contractual promises, legal and security questions and serious complaints are outside Hook’s approval boundary. The agent says a colleague will follow up and the call is flagged for a person.' },
      { q: 'Is every call recorded?', a: 'Recording is optional. When enabled, audio is stored in your workspace alongside the transcript. Check consent requirements for recording in your jurisdiction.' },
      { q: 'How is calling billed?', a: 'Calling is included on plans that list it; Eligoo does not meter minutes. Telephony, speech and AI providers bill you directly on your own accounts. Current plans are on the pricing page.' },
    ]),
    related([
      LINKS.sales, LINKS.ucColdCalling, LINKS.ucAppointments, LINKS.hook, LINKS.leadGen, LINKS.outbound,
      { label: 'Twilio integration', href: '/integrations/twilio/' }, { label: 'ElevenLabs integration', href: '/integrations/elevenlabs/' }, { label: 'Deepgram integration', href: '/integrations/deepgram/' },
      LINKS.cmpVoiceSdr, LINKS.glVoice,
    ]),
    {
      kind: 'sources',
      items: [
        { label: 'LiveKit Agents documentation — voice AI pipelines', href: 'https://docs.livekit.io/agents/' },
        { label: 'LiveKit SIP — connecting telephony trunks', href: 'https://docs.livekit.io/sip/' },
      ],
    },
    cta('Put an AI voice agent on your phone line', `Connect a number, write the brief, make a test call from the browser. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.solutions,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
