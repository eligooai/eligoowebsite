import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/livekit/',
  title: 'LiveKit — The Self-Hosted Voice Stack Behind Eligoo’s AI Calls',
  eyebrow: 'Integrations · Voice infrastructure',
  metaTitle: 'LiveKit — The Self-Hosted Voice Stack Behind Eligoo’s AI Phone Calls | Eligoo',
  metaDescription: 'Eligoo runs its own LiveKit server, SIP gateway, recording pipeline and agents worker for AI voice calls. You do not need a LiveKit account — here is what it does and how your trunk and providers plug in.',
  primaryKeyword: 'LiveKit AI voice agent',
  secondaryKeywords: ['self-hosted voice AI stack', 'LiveKit SIP AI calling', 'how AI phone calls work', 'AI voice agent infrastructure', 'LiveKit agents worker'],
  answer: 'LiveKit is the open-source real-time media platform that Eligoo runs, self-hosted, to carry every AI phone call: a media server, a SIP gateway that connects to your telephony trunk, an egress service that records audio when you enable it, and an agents worker that runs the AI voice agent inside each call. It is infrastructure, not a connection you make — you never need a LiveKit account.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with LiveKit?',
      paragraphs: [
        'An AI phone call is a loop: audio comes in from the phone network, is transcribed, is reasoned over by a language model, is turned back into speech, and goes out to the caller — all fast enough to feel like a conversation. Something has to hold that loop open, move the audio around with low latency, and let the agent interrupt or be interrupted. In Eligoo that something is LiveKit.',
        'Eligoo hosts the whole LiveKit stack itself rather than routing calls through a third-party voice-AI vendor. Four pieces run together: the LiveKit server, which handles the real-time media; the SIP service, which bridges the phone network to that media; Egress, which writes audio recordings when a workspace turns recording on; and an agents worker, which runs Hook’s voice agent in each call, wiring speech-to-text, the language model and text-to-speech together.',
        'What this means for you is that the only things you bring are the parts that are genuinely yours: a phone number on a SIP trunk, and the speech and model providers you want to pay for. The media handling in the middle is Eligoo’s responsibility.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      intro: 'There is no connect step for LiveKit. This is the path a call takes through it.',
      steps: [
        { title: 'You connect a trunk and providers', text: 'A SIP trunk from Twilio, Telnyx, Plivo or Vobiz gives the stack a phone number. Deepgram, ElevenLabs or OpenAI keys give it ears and a voice; a connected model provider gives it a brain.' },
        { title: 'A call is placed or received', text: 'Outbound, the agents worker asks the SIP service to dial the number over your trunk. Inbound, a call arriving on your number is dispatched to the worker and answered.' },
        { title: 'The agent runs inside the room', text: 'The worker joins the call as a participant, streams the caller’s audio to speech-to-text, sends the transcript to the model with Hook’s brief, and streams the reply through text-to-speech back into the call. Turn detection and interruption settings control who speaks when.' },
        { title: 'Outcomes are written back', text: 'When the call ends, the transcript, outcome, notes and — if enabled — the recording produced by Egress are stored in your workspace against the lead.' },
        { title: 'Browser test calls use the same path', text: 'A test call from the browser joins the same kind of room, minus the SIP leg, so what you hear in testing is what a prospect hears on the phone.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and LiveKit',
      items: [
        'Because LiveKit is hosted by Eligoo, call audio does not leave Eligoo’s infrastructure to reach a separate voice-AI vendor. It flows from your trunk into the LiveKit server and out to the speech and model providers you connected, under your own accounts.',
        'Stored in your workspace: transcripts, outcomes, notes, and audio recordings only when you enable recording. Recordings are kept alongside the lead record and can be deleted on request.',
        'Sent to your providers during a call: caller audio to the speech-to-text provider, transcript text plus the agent brief to the model provider, reply text to the text-to-speech provider.',
        'Sent to your telephony provider: the SIP signalling and media for the call, as with any call on your trunk.',
        'Not involved: any LiveKit Cloud account. Eligoo does not use LiveKit Cloud and you do not need to sign up for anything at LiveKit.',
      ],
    },
    employees(['hook'], 'Which AI employees use it', 'One employee talks on the phone; the others feed it and read its results.', {
      hook: 'Runs as the agent inside every call — outbound campaigns, inbound answering and browser test calls.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Outbound calling campaigns', text: 'A lead list dialled inside a calling window, one line at a time, with daily roll-over — after approval.', icon: 'phone' },
        { title: 'Inbound answering', text: 'Calls to your number are picked up, qualified and logged when nobody is free.', icon: 'clock' },
        { title: 'Optional recordings', text: 'Audio captured by Egress for review, stored in your workspace.', icon: 'database' },
        { title: 'Test before you dial', text: 'Iterate on the brief, voice and interruption settings from the browser.', icon: 'sparkles' },
      ],
    },
    faq([
      { q: 'Do I need a LiveKit account to use Eligoo’s AI voice agent?', a: 'No. Eligoo hosts LiveKit itself. You bring a SIP trunk and your speech and model provider keys.' },
      { q: 'Is Eligoo built on LiveKit Cloud?', a: 'No. Eligoo runs the open-source LiveKit server, SIP service, Egress and an agents worker on its own infrastructure.' },
      { q: 'Can I bring my own LiveKit deployment?', a: 'Not today. The stack is operated by Eligoo so that trunks, recordings and the agents worker behave the same in every workspace.' },
      { q: 'Where do call recordings live?', a: 'In your workspace, produced by Egress only when recording is enabled. Check consent rules for recording where you operate.' },
      { q: 'Why self-host instead of using a voice-AI API?', a: 'It keeps the call path under Eligoo’s control, lets you use your own trunk and provider accounts rather than a vendor’s bundle, and means the audio does not pass through an additional third party.' },
      { q: 'What affects call latency?', a: 'Mostly the speech-to-text, model and text-to-speech providers you choose and the region your trunk terminates in. A fast model such as one served by Groq and a low-latency voice noticeably shorten the pauses.' },
    ]),
    related([
      LINKS.voice, LINKS.hook, LINKS.ucColdCalling, LINKS.ucAppointments, LINKS.glVoice,
      { label: 'How AI voice agents work', href: '/resources/guides/how-ai-voice-agents-work/' },
      { label: 'Twilio integration', href: '/integrations/twilio/' }, { label: 'Deepgram integration', href: '/integrations/deepgram/' }, { label: 'ElevenLabs integration', href: '/integrations/elevenlabs/' },
    ]),
    { kind: 'sources', items: [{ label: 'LiveKit documentation', href: 'https://docs.livekit.io' }] },
    cta('Hear the voice stack for yourself', `Connect a trunk, write Hook’s brief and make a browser test call. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
