import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/guides/how-ai-voice-agents-work/',
  title: 'How AI Voice Agents Work',
  eyebrow: 'Guides · AI voice',
  metaTitle: 'How AI Voice Agents Work: STT, LLM, TTS, Telephony, Turn Detection and Latency Explained | Eligoo',
  metaDescription: 'The components of an AI voice agent — speech-to-text, a language model, text-to-speech and telephony — how turn-taking and interruptions are handled, where latency comes from, and how sales teams use them.',
  primaryKeyword: 'how AI voice agents work',
  secondaryKeywords: ['AI voice agent', 'what is an AI voice agent', 'AI voice agents for sales', 'AI voice agents for cold calling', 'AI voice agents for appointment setting', 'AI phone agent', 'voice AI pipeline', 'AI calling agent'],
  answer: 'An AI voice agent is software that holds a phone conversation on its own. It works as a loop: speech-to-text turns the caller’s words into text, a language model decides what to say next, text-to-speech turns that into audio, and a telephony connection puts the whole loop on a real phone number. The engineering is mostly about making that loop fast and natural — knowing when the caller has finished speaking, handling interruptions, and keeping the pause before each reply short.',
  sections: [
    {
      kind: 'prose',
      heading: 'What are the components of an AI voice agent?',
      paragraphs: [
        'Four parts, each usually from a different provider. Speech-to-text (STT) listens to the audio stream and produces a running transcript; it needs to be fast and to cope with accents, background noise and the caller talking over the agent. The language model (LLM) reads the transcript and the agent’s brief — who it is, what the call is for, what questions to ask, what it may not say — and produces the next reply; it can also call tools mid-conversation, such as checking a calendar. Text-to-speech (TTS) turns that reply into a voice; the choice of voice and provider decides how natural the agent sounds and which languages it can speak. Telephony connects all of this to the phone network: a SIP trunk from a carrier carries the call, and a media server handles the audio in real time.',
        'A fifth piece sits around the others: the orchestration that streams audio in and out, decides when each component runs, records the transcript and outcome, and applies the campaign rules — calling windows, pace, retries, suppression lists.',
      ],
    },
    {
      kind: 'steps',
      heading: 'What happens during a call?',
      steps: [
        { title: 'The call connects', text: 'For an outbound call the agent dials through the SIP trunk; for inbound the carrier routes the call to the media server and the agent is dispatched to it. Audio starts streaming in both directions.' },
        { title: 'The agent speaks first, or listens', text: 'Outbound calls usually open with the brief’s first message. Inbound calls usually let the caller speak. Either way the STT is already transcribing.' },
        { title: 'Turn detection decides when the caller has finished', text: 'The hardest part of the loop. Silence alone is a poor signal — people pause mid-sentence — so modern agents combine silence length with a model of whether the sentence is complete. Too eager and the agent talks over people; too patient and every reply feels slow.' },
        { title: 'The model decides the reply', text: 'The transcript so far, the brief and any tool results go to the language model, which produces the next thing to say and, if needed, an action: mark the lead qualified, offer a slot, end the call.' },
        { title: 'The reply is spoken, and can be interrupted', text: 'TTS streams the audio out. If the caller starts talking, interruption handling stops the agent’s speech, updates the transcript with what was actually heard, and goes back to listening.' },
        { title: 'The call ends and is written up', text: 'The transcript, an outcome, notes and — if enabled — a recording are stored. A booked meeting creates a calendar event; anything outside the agent’s boundary is flagged for a person.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'Where does latency come from, and why does it matter?',
      paragraphs: [
        'Every reply has to wait for the transcript to finalise, the model to respond and the first audio to be synthesised. Each stage adds delay, and the caller experiences the sum as the pause before the agent speaks. In human conversation that pause is short; if the agent’s is noticeably longer, people talk over it, repeat themselves or hang up.',
        'The levers are: streaming at every stage rather than waiting for complete outputs; a fast STT model; a language model chosen for response speed on conversational turns rather than raw capability; a TTS provider that starts audio quickly; and running the media server close to the telephony provider. Turn-detection settings trade latency against interruptions, which is why a well-built agent lets you tune them and test from the browser before any real call.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How are AI voice agents used in sales?',
      paragraphs: [
        'Three patterns account for most of the use. Cold and warm calling: dialling a verified list inside a window to confirm interest, ask qualification questions and offer a meeting — most effective when the list is good and the first sentence gives the person a reason to stay. Appointment setting and confirmation: booking a slot on the call, then calling again to confirm or reschedule, which is structured enough for an agent to do well. Inbound qualification: answering calls a small team would otherwise miss, collecting the essentials and either booking a callback or handing straight to a person.',
        'What the agent should not do on a sales call is negotiate, promise or handle a serious complaint. The right design escalates those — “a colleague will follow up” — and flags the call, so the human salesperson picks up exactly where their judgement is needed.',
      ],
    },
    {
      kind: 'list',
      heading: 'What makes an AI cold calling campaign work',
      items: [
        'A verified list with the wrong people removed: existing customers, suppression-list contacts, disconnected numbers.',
        'A brief with a short, specific first message, three or four qualification questions and clear objection handling.',
        'A calling window that matches the prospects’ working hours, a pace that does not hammer a line, and daily roll-over for no-answers.',
        'A definition of a booked meeting and what happens to it — calendar event, meeting brief, CRM record.',
        'A boundary: what the agent says when asked about price, contracts or anything sensitive, and how it hands off.',
        'A test call from the browser before the first real dial, and a review of the first day’s transcripts before the second.',
      ],
    },
    {
      kind: 'prose',
      heading: 'What compliance considerations apply?',
      paragraphs: [
        'Rules on automated calling, consent for recording, disclosure that the caller is speaking to an AI, calling hours and do-not-call registries vary by country and sometimes by state or sector. This guide cannot tell you what applies to you; check your jurisdiction, and the jurisdiction of the people you are calling, before running a campaign. A well-built platform gives you the controls to comply — suppression lists honoured on every campaign, calling windows, optional rather than default recording, and a configurable disclosure in the agent’s brief — but the responsibility for using them lawfully is yours.',
      ],
    },
    {
      kind: 'example',
      heading: 'Example: appointment setting for a solar installer',
      scenario: 'A residential solar installer receives web enquiries faster than its two surveyors can call them back, and enquiries go cold within a day.',
      steps: [
        'New enquiries are added to a calling campaign with a same-day window and a pace of one call at a time per line.',
        'The agent’s brief: confirm the address and roof type, ask about the monthly bill and ownership, and offer a survey slot from the surveyors’ calendar.',
        'Turn detection is set slightly patient because callers often check documents mid-sentence; a browser test call confirms it feels natural.',
        'Booked surveys become calendar events with the answers attached; callers who ask about pricing or finance are told a surveyor will call and are flagged.',
      ],
      outcome: 'Every enquiry is called the same day, surveyors arrive with the details already collected, and pricing conversations stay with people.',
    },
    {
      kind: 'list',
      heading: 'Pitfalls with AI voice agents',
      items: [
        'A long first message. If the agent talks for twenty seconds before the caller can respond, most calls end there.',
        'Testing on real prospects. Use browser test calls and your own phone first.',
        'Ignoring turn-detection settings. Interruptions and slow replies are usually a tuning problem, not a model problem.',
        'Letting the agent improvise on price. Put it outside the boundary.',
        'Recording by default without checking consent rules.',
        'A bad list. No voice stack fixes calling the wrong people.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How Eligoo does it',
      paragraphs: [
        'Eligoo’s voice agent is Hook, an AI employee that runs on a self-hosted LiveKit stack: a media server, SIP for telephony, egress for optional audio recordings, and an agents worker that runs the conversation loop. You connect a SIP trunk from Twilio (created automatically from your Account SID and Auth Token), Telnyx, Plivo or Vobiz. Speech-to-text defaults to Deepgram; voices come from ElevenLabs, OpenAI or Deepgram; the language model comes from your connected OpenAI, Anthropic, Google Gemini, Groq or OpenRouter account. Language, behaviour presets, turn detection and interruption settings are configurable, and Indian languages are available through supported providers.',
        'Outbound campaigns have a lead list, a calling window, a pace, daily roll-over and one line at a time; starting one is an approval. Inbound calls are dispatched to the same agent. Every call produces a transcript, an outcome and notes, with recording optional. A booked-meeting outcome creates a Google Calendar event with a Meet link when Google Workspace is connected, otherwise a task for Ledger. Pricing, promises, legal questions and serious complaints are outside Hook’s boundary and are flagged for a person.',
      ],
    },
    faq([
      { q: 'What is the difference between an AI voice agent and an IVR?', a: 'An IVR follows a fixed menu — press one for sales. A voice agent listens to free-form speech, keeps context, handles interruptions and can take actions during the call. It is a conversation, not a tree.' },
      { q: 'How natural does an AI voice agent sound?', a: 'That depends on the TTS provider and voice, the latency of the loop, and turn-detection tuning. A browser test call is the honest way to judge it for your brief and language.' },
      { q: 'Can an AI voice agent make cold calls?', a: 'Yes, to a list you approve inside a window you set. Check the calling, disclosure and recording rules in your jurisdiction and configure the agent accordingly.' },
      { q: 'Can it book appointments during the call?', a: 'Yes. The model can call a calendar tool mid-conversation to offer and confirm a slot. In Eligoo that creates a Google Calendar event with a Meet link when Google Workspace is connected.' },
      { q: 'Which languages can an AI voice agent speak?', a: 'Whatever the connected STT and TTS providers support. Major languages are widely covered; Indian-language transcription and voices are available through supported providers in Eligoo.' },
      { q: 'What happens when a caller asks something the agent should not answer?', a: 'A well-designed agent has a boundary. In Eligoo, Hook says a colleague will follow up, ends politely and flags the call so a person takes over.' },
    ]),
    related([
      LINKS.voice, LINKS.glVoice, { label: 'Glossary: AI cold calling', href: '/resources/glossary/ai-cold-calling/' }, LINKS.hook, LINKS.ucColdCalling, LINKS.ucAppointments,
      LINKS.cmpVoiceSdr, { label: 'AI cold calling workflow template', href: '/resources/templates/ai-cold-calling-workflow/' }, { label: 'Appointment setting workflow template', href: '/resources/templates/appointment-setting-workflow/' },
      { label: 'LiveKit integration', href: '/integrations/livekit/' }, { label: 'Deepgram integration', href: '/integrations/deepgram/' }, { label: 'ElevenLabs integration', href: '/integrations/elevenlabs/' },
    ]),
    {
      kind: 'sources',
      items: [
        { label: 'LiveKit Agents documentation', href: 'https://docs.livekit.io/agents/' },
        { label: 'LiveKit SIP documentation', href: 'https://docs.livekit.io/sip/' },
      ],
    },
    cta('Hear a voice agent on your own number', 'Connect a trunk, write the brief, place a browser test call. Campaigns start only when you approve them.'),
  ],
  breadcrumb: CRUMBS.guides,
  schema: ['Article', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
