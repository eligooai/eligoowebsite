import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/ai-voice-agent/',
  title: 'What Is an AI Voice Agent?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is an AI Voice Agent? Definition, How It Works, Components and Limits | Eligoo',
  metaDescription: 'An AI voice agent is software that conducts phone conversations autonomously using speech recognition, an AI model and text-to-speech. How it works, its components, examples, benefits and limitations.',
  primaryKeyword: 'what is an AI voice agent',
  secondaryKeywords: ['AI voice agent definition', 'AI voice agent meaning', 'how do AI voice agents work', 'AI phone agent', 'conversational voice AI', 'AI calling agent'],
  term: 'AI voice agent',
  answer: 'An AI voice agent is software that conducts phone conversations autonomously using speech recognition, an AI model and text-to-speech. It listens to what the caller says, decides how to respond, speaks the reply in a synthetic voice and can take actions during the call, such as asking qualification questions or booking a meeting.',
  sections: [
    {
      kind: 'steps',
      heading: 'How it works',
      intro: 'A voice agent runs a real-time loop, many times a second, for the length of the call.',
      steps: [
        { title: 'Audio arrives over telephony', text: 'A SIP trunk or a browser session carries the caller’s audio to a media server that the agent is attached to.' },
        { title: 'Speech is transcribed', text: 'A speech-to-text model turns the audio into text as it is spoken, with turn detection deciding when the caller has finished a sentence.' },
        { title: 'The model decides what to say', text: 'The transcript, the conversation so far and the agent’s brief go to a language model, which produces the next reply and may call a tool — check a calendar, record an answer.' },
        { title: 'The reply is spoken', text: 'A text-to-speech model renders the reply in the chosen voice and streams it back over the call. If the caller interrupts, the agent stops and listens.' },
        { title: 'The outcome is recorded', text: 'At the end of the call the agent writes a transcript, an outcome, notes and, optionally, a recording to the system of record.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'Telephony: a phone number and a SIP trunk from a carrier, or a browser audio session.',
        'A media server that handles the real-time audio stream and the agent’s connection to it.',
        'Speech-to-text (STT) with turn detection and interruption handling.',
        'A language model, with a brief that defines the goal, the questions and what the agent may not do.',
        'Text-to-speech (TTS) with a chosen voice and language.',
        'Tools the agent can call mid-call: calendar, CRM, lead record.',
        'Recording and transcription storage, subject to consent rules.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'An outbound agent calling a verified list to confirm interest and book a discovery call.',
        'An inbound agent answering a business line after hours, qualifying the caller and taking a message or booking a slot.',
        'A follow-up agent calling leads who filled in a web form within minutes of the submission.',
        'A reminder agent confirming appointments the day before and offering to reschedule.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'Available for every call inside a defined window, with no queue and no missed calls.',
        'Consistent: asks every qualification question, every time, in the approved wording.',
        'Every call has a transcript and an outcome, so nothing depends on someone’s notes.',
        'Low cost per call, which makes it viable to call lists that would not justify a person’s time.',
        'Language and voice are configurable, including Indian languages through supported providers.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'It cannot negotiate, read tone reliably or handle a serious complaint; those calls need a person.',
        'Speech recognition degrades with noise, accents outside the model’s strengths and poor lines.',
        'Latency between turns is noticeable if any component is slow, and callers hang up on awkward pauses.',
        'Callers may disengage once they realise they are talking to software; the brief and the voice matter.',
        'Recording and unsolicited calling are regulated differently in each country; the business is responsible for consent and calling hours.',
        'It only knows what is in its brief and its tools. Questions outside that must be escalated, not improvised.',
      ],
    },
    related([
      { label: 'What is AI cold calling?', href: '/resources/glossary/ai-cold-calling/' },
      LINKS.glSdr, LINKS.glAgent,
      { label: 'What is AI outbound sales?', href: '/resources/glossary/ai-outbound-sales/' },
      LINKS.voice, LINKS.ucColdCalling, LINKS.ucAppointments, LINKS.hook, LINKS.cmpVoiceSdr,
      { label: 'Guide: how AI voice agents work', href: '/resources/guides/how-ai-voice-agents-work/' },
    ], 'Related concepts'),
    faq([
      { q: 'How is an AI voice agent different from an IVR?', a: 'An IVR follows a fixed menu (“press 1 for sales”). A voice agent listens to free-form speech, keeps the context of the conversation, handles interruptions and can act mid-call. The IVR is a tree; the agent is a conversation.' },
      { q: 'Can an AI voice agent make outbound calls?', a: 'Yes. Given a list, a calling window and a brief, it can dial out at a set pace, one line at a time, and record an outcome per call. Starting such a campaign should be a deliberate, approved step.' },
      { q: 'Does it sound like a person?', a: 'Modern text-to-speech voices are natural enough for most business calls, but the agent should not pretend to be human. A clear opening and a good brief matter more than the voice.' },
      { q: 'Which languages can a voice agent speak?', a: 'Whatever the connected speech-to-text and text-to-speech providers support. Major languages are well covered; Indian-language transcription and voices are available through supported providers and are set per agent.' },
      { q: 'Is every call recorded?', a: 'Only if recording is enabled. Transcripts are usually kept regardless. Consent requirements for recording differ by jurisdiction and are the business’s responsibility.' },
    ], 'FAQs'),
    {
      kind: 'sources',
      heading: 'Sources',
      items: [
        { label: 'LiveKit Agents documentation — voice AI pipelines', href: 'https://docs.livekit.io/agents/' },
        { label: 'LiveKit SIP — connecting telephony trunks', href: 'https://docs.livekit.io/sip/' },
      ],
    },
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'Eligoo’s voice agent is Hook, running on a self-hosted LiveKit stack: a media server, SIP for telephony, Egress for optional recordings and an agents worker. Customers connect a SIP trunk from Twilio, Telnyx, Plivo or Vobiz, choose speech-to-text (Deepgram nova-3 by default), a voice from ElevenLabs, OpenAI or Deepgram, and a language model from their own connected AI accounts. Calls run as outbound campaigns with a lead list, calling window and pace, or as inbound dispatch; each call keeps a transcript, an outcome and notes, and a booked meeting creates a Google Calendar event with a Meet link when Google is connected.',
      ],
    },
    cta('Hear an AI voice agent before it calls anyone', 'Connect a number, write the brief and make a browser test call. Starting a campaign is always an approval.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
