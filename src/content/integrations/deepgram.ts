import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/deepgram/',
  title: 'Deepgram Integration — Speech-to-Text for AI Voice Agents',
  eyebrow: 'Integrations · Voice',
  metaTitle: 'Deepgram Integration — Speech-to-Text and Voices for AI Phone Calls | Eligoo',
  metaDescription: 'Deepgram nova-3 is the default transcription behind Eligoo’s AI voice agent, and Deepgram voices are an option for speech. Connect your own key; Deepgram bills you directly for audio.',
  primaryKeyword: 'Deepgram AI voice agent',
  secondaryKeywords: ['Deepgram speech-to-text AI calling', 'Deepgram nova-3 phone agent', 'AI voice agent transcription', 'Deepgram TTS voices', 'bring your own Deepgram key'],
  answer: 'The Deepgram integration gives Eligoo’s AI voice agent its ears: Deepgram’s nova-3 model is the default speech-to-text for every call, streaming the caller’s words to the agent as they are spoken. Deepgram can also supply the voice the agent speaks with, as an alternative to ElevenLabs or OpenAI. You connect your own Deepgram key and Deepgram bills you for the audio processed.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Deepgram?',
      paragraphs: [
        'On a phone call the agent has to understand speech as it happens, not after the caller finishes. Eligoo streams the call audio from its LiveKit voice stack to Deepgram, receives interim and final transcripts in real time, and feeds them to the language model so Hook can decide what to say next. Turn detection and interruption handling rely on those transcripts arriving quickly, which is why nova-3 is the default.',
        'Deepgram is also one of three text-to-speech options. If you choose Deepgram voices, the agent’s replies are synthesised by Deepgram as well, so one key covers both directions of the conversation.',
        'The transcripts Deepgram returns are what you later read in the workspace: the full call transcript is stored with the lead, alongside the outcome, notes and the optional recording.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Create a key in the Deepgram console', text: 'Generate an API key in your Deepgram project.' },
        { title: 'Add Deepgram in workspace settings', text: 'Paste the key under speech providers. Eligoo verifies it with a test request, stores it server-side and shows it masked.' },
        { title: 'Choose the transcription settings', text: 'Deepgram nova-3 is selected by default for speech-to-text. Set the call language in the voice agent configuration; Deepgram covers the major languages and several Indian languages.' },
        { title: 'Optionally choose a Deepgram voice', text: 'Under text-to-speech, pick Deepgram and a voice, or keep ElevenLabs or OpenAI for speech while Deepgram handles listening.' },
        { title: 'Test, then run', text: 'Make a browser test call and read the live transcript to check recognition of your product names and place names. Then approve a calling campaign or enable inbound answering.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Deepgram',
      items: [
        'Sent to Deepgram: the caller’s audio stream during a call (and the agent’s reply text, when Deepgram is the voice provider). Browser test calls send audio the same way.',
        'Received from Deepgram: interim and final transcripts, and synthesised audio when Deepgram voices are used.',
        'Stored in your workspace: the final transcript, attached to the call record. Audio recordings, if enabled, are produced by Eligoo’s own recording pipeline, not by Deepgram.',
        'Not sent: your prospect list, CRM records, or other integrations’ keys. Deepgram only sees what is said on the call.',
        'Your API key stays server-side in your workspace and is never returned to the browser. The traffic runs under your own Deepgram account, so Deepgram’s data terms apply to it.',
      ],
    },
    employees(['hook'], 'Which AI employees use it', undefined, {
      hook: 'Every inbound and outbound call, and every browser test call, is transcribed through Deepgram by default.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Cold and warm calling campaigns', text: 'Hook works an approved list inside a calling window, understanding answers as they are spoken.', icon: 'phone' },
        { title: 'Inbound qualification', text: 'Missed calls are answered, the caller’s needs are captured in text and logged.', icon: 'clock' },
        { title: 'Searchable call history', text: 'Every conversation becomes a transcript Ledger and Atlas can read and report on.', icon: 'database' },
        { title: 'Multilingual calling', text: 'Set the call language per campaign for markets where English is not the first language.', icon: 'globe' },
      ],
    },
    pricingPointer('calling'),
    faq([
      { q: 'Does Eligoo use Deepgram for AI phone calls?', a: 'Yes. Deepgram nova-3 is the default speech-to-text for the AI voice agent. You connect your own Deepgram key.' },
      { q: 'Do I have to use Deepgram?', a: 'It is the default and the recommended choice for transcription. For speech output you can pick Deepgram, ElevenLabs or OpenAI independently.' },
      { q: 'Can Deepgram transcribe Indian languages on calls?', a: 'Deepgram supports several Indian languages; set the call language in the voice configuration and confirm recognition on a browser test call before running a campaign.' },
      { q: 'Who pays for Deepgram usage?', a: 'Deepgram bills your account for the audio processed, at its own rates. Calling is included on Eligoo plans that list it; there is no usage charge from Eligoo. See the pricing page.' },
      { q: 'Are call recordings made by Deepgram?', a: 'No. Recordings, when enabled, are produced by Eligoo’s self-hosted voice stack and stored in your workspace. Deepgram returns text, and audio only when used for voices.' },
    ]),
    related([
      LINKS.voice, LINKS.hook, LINKS.ucColdCalling, LINKS.ucAppointments, LINKS.glVoice,
      { label: 'ElevenLabs integration', href: '/integrations/elevenlabs/' }, { label: 'LiveKit voice stack', href: '/integrations/livekit/' }, { label: 'Twilio integration', href: '/integrations/twilio/' },
    ]),
    { kind: 'sources', items: [{ label: 'Deepgram developer documentation', href: 'https://developers.deepgram.com' }] },
    cta('Give your voice agent good hearing', `Connect Deepgram, set the language and make a test call. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
