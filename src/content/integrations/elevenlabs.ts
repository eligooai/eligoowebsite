import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/elevenlabs/',
  title: 'ElevenLabs Integration — AI Voice Agent Voices',
  eyebrow: 'Integrations · Voice',
  metaTitle: 'ElevenLabs Integration — Natural Voices for AI Phone Calls | Eligoo',
  metaDescription: 'Use ElevenLabs voices for Eligoo’s AI voice agent on outbound and inbound calls. Connect your own ElevenLabs key, pick a voice, test it from the browser; ElevenLabs bills you for the audio generated.',
  primaryKeyword: 'ElevenLabs AI voice agent',
  secondaryKeywords: ['ElevenLabs voices for outbound calls', 'AI cold calling with ElevenLabs', 'ElevenLabs text-to-speech phone agent', 'bring your own ElevenLabs key', 'AI voice agent with ElevenLabs'],
  answer: 'The ElevenLabs integration gives Eligoo’s AI voice agent its voice. Connect your own ElevenLabs API key, choose a voice from your account, and Hook speaks with it on every outbound campaign call, inbound call and browser test call. ElevenLabs can also be used for transcription, though Deepgram is the default for that. ElevenLabs bills your account for the audio it generates.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with ElevenLabs?',
      paragraphs: [
        'When Hook decides what to say on a call, that text has to become speech quickly enough that the caller does not hear a gap. Eligoo streams each reply from the language model to ElevenLabs and plays the returned audio into the call through its self-hosted LiveKit stack. The voice you pick, and the way it handles pauses and interruptions, is a large part of how the agent comes across.',
        'ElevenLabs is one of three text-to-speech options, next to OpenAI and Deepgram. Teams tend to choose it when the naturalness of the voice matters — first-contact sales calls, appointment reminders to existing customers — and when they need a particular language or accent. Any voice in your ElevenLabs account can be used, including custom ones you have created there.',
        'ElevenLabs also offers speech-to-text, and Eligoo can use it for transcription. In practice most workspaces keep Deepgram nova-3 for listening and use ElevenLabs for speaking.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Create a key in ElevenLabs', text: 'Generate an API key in your ElevenLabs account on a plan with enough character allowance for your expected call volume.' },
        { title: 'Add ElevenLabs in workspace settings', text: 'Paste the key under speech providers. Eligoo verifies it, stores it server-side and shows it masked.' },
        { title: 'Pick a voice', text: 'In the voice agent configuration, select ElevenLabs as the text-to-speech provider and choose a voice from your account. Set the call language.' },
        { title: 'Test from the browser', text: 'Make a browser test call and listen: pace, pronunciation of your company and product names, how it handles being interrupted. Adjust the brief and the turn-detection settings until it sounds right.' },
        { title: 'Run campaigns and inbound', text: 'Once a calling campaign is approved, every call uses the chosen voice. Inbound calls to your number use it too.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and ElevenLabs',
      items: [
        'Sent to ElevenLabs: the text of each reply the agent is about to say, in real time during a call. If you also use ElevenLabs for speech-to-text, the caller’s audio stream.',
        'Received from ElevenLabs: synthesised audio, streamed into the call. Transcripts, if used for STT.',
        'Not sent: your prospect list, CRM records, the agent’s full brief, or other integrations’ keys. ElevenLabs sees the sentences spoken, not the reasoning behind them.',
        'Stored in your workspace: transcripts and optional recordings from Eligoo’s own pipeline. ElevenLabs is not used to store call audio.',
        'Your API key stays server-side in your workspace and is never returned to the browser. The traffic runs under your own ElevenLabs account, so ElevenLabs’ data terms apply.',
      ],
    },
    employees(['hook'], 'Which AI employees use it', undefined, {
      hook: 'Speaks with the chosen ElevenLabs voice on every call it makes or answers.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Outbound calling campaigns', text: 'Approved lists called inside a window with a voice you chose and tested.', icon: 'phone' },
        { title: 'Appointment setting', text: 'Hook offers a slot, confirms it and books the calendar event — in a voice that suits your brand.', icon: 'calendar' },
        { title: 'Inbound answering', text: 'Consistent, on-brand answering for calls that would otherwise go to voicemail.', icon: 'clock' },
        { title: 'Language-specific voices', text: 'Match the voice to the market — Indian-language and accented voices where your provider supports them.', icon: 'globe' },
      ],
    },
    pricingPointer('calling'),
    faq([
      { q: 'Does Eligoo support ElevenLabs voices for outbound calls?', a: 'Yes. Select ElevenLabs as the text-to-speech provider and pick a voice; Hook uses it on every outbound and inbound call.' },
      { q: 'Can I use a custom or cloned voice from my ElevenLabs account?', a: 'Voices available in your ElevenLabs account can be selected in Eligoo. You are responsible for having the rights to any voice you use on calls.' },
      { q: 'Can ElevenLabs transcribe calls too?', a: 'Eligoo can use ElevenLabs for speech-to-text, but Deepgram nova-3 is the default and the usual choice. You can mix providers — Deepgram for listening, ElevenLabs for speaking.' },
      { q: 'Who pays for ElevenLabs usage?', a: 'ElevenLabs bills your account for the audio generated. Eligoo credits cover call minutes on the platform side; rates are on the pricing page.' },
      { q: 'How do I keep the voice from sounding robotic on the phone?', a: 'Pick a conversational voice, keep Hook’s replies short in the brief, and tune interruption handling so the agent stops when the caller speaks. Browser test calls are the quickest way to iterate.' },
      { q: 'What happens if my ElevenLabs quota runs out mid-campaign?', a: 'Speech synthesis fails, the current call ends and the campaign pauses with an Error status and the reason in the activity log. Top up at ElevenLabs or switch the voice provider and resume.' },
    ]),
    related([
      LINKS.voice, LINKS.hook, LINKS.ucColdCalling, LINKS.ucAppointments, LINKS.cmpVoiceSdr,
      { label: 'Deepgram integration', href: '/integrations/deepgram/' }, { label: 'OpenAI integration', href: '/integrations/openai/' }, { label: 'LiveKit voice stack', href: '/integrations/livekit/' },
    ]),
    { kind: 'sources', items: [{ label: 'ElevenLabs documentation', href: 'https://elevenlabs.io/docs' }] },
    cta('Choose the voice your prospects will hear', `Connect ElevenLabs, pick a voice and make a browser test call. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
