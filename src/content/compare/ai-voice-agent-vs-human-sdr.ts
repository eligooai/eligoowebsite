import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/compare/ai-voice-agent-vs-human-sdr/',
  title: 'AI Voice Agent vs Human SDR',
  eyebrow: 'Compare',
  metaTitle: 'AI Voice Agent vs Human SDR: Who Should Make the Calls? | Eligoo',
  metaDescription: 'An AI voice agent makes consistent calls in any window and logs everything; a human SDR reads tone, handles hard objections and builds rapport. When each should be on the phone.',
  primaryKeyword: 'AI voice agent vs human SDR',
  secondaryKeywords: ['AI voice agent vs SDR', 'AI cold calling vs human cold calling', 'AI phone agent vs human', 'AI voice agent for sales', 'AI cold calling agent'],
  answer: 'An AI voice agent is software that holds a phone conversation on its own using speech-to-text, a language model and text-to-speech on a real phone line. A human SDR is a person making the same calls with instinct, rapport and the freedom to improvise. The AI agent is better at volume, consistency, calling-window coverage and logging; the human is better at reading tone, handling serious objections, negotiating and building the relationship that a large deal needs.',
  sections: [
    {
      kind: 'prose',
      heading: 'What is an AI voice agent?',
      paragraphs: [
        'An AI voice agent chains three components in real time: speech recognition to hear the caller, a language model to decide what to say, and a synthetic voice to say it, all connected to a phone number through telephony. It works from a brief — the first message, the goal of the call, qualification questions, how to handle common objections, what counts as a booked meeting — and it can take actions during the call, such as checking a calendar and confirming a slot.',
        'It is not an IVR menu. It listens to free-form speech, keeps the context, handles interruptions and can be tuned for pace and turn-taking. It is also not a person: it does not hear hesitation the way a person does, and it should not be asked to negotiate.',
      ],
    },
    {
      kind: 'prose',
      heading: 'What is a human SDR on the phone?',
      paragraphs: [
        'A human SDR making calls brings everything a script cannot: they notice when a prospect is busy and offer to call back, they pick up on a throwaway comment and turn it into the conversation, they handle a hostile reception without escalating it, and they can make a judgement call about whether this account is worth another attempt. They also have limited hours, get worn down by rejection, vary from call to call, and rarely log every outcome in the CRM the way a manager would like.',
      ],
    },
    {
      kind: 'table',
      heading: 'Side by side',
      columns: ['Dimension', 'AI voice agent', 'Human SDR'],
      rows: [
        ['Consistency', 'Same brief, same energy, every call', 'Varies by hour, mood and streak of rejections'],
        ['Calling-window coverage', 'Any window you set, with roll-over to the next day', 'Office hours; time zones cost coverage'],
        ['Reading tone and hesitation', 'Limited to what the transcript shows', 'Strong; the human edge'],
        ['Objection handling', 'Routine objections from the brief; escalates the rest', 'Improvises; can recover a bad start'],
        ['Negotiation', 'Never; flags for a person', 'Within authority'],
        ['Rapport and memorability', 'Polite, not personal', 'Prospects remember a good call'],
        ['Logging', 'Transcript, outcome, notes and optional recording on every call', 'Depends on discipline'],
        ['Cost per call', 'Call minutes and model usage', 'Salary and time; a small share of the day is talk time'],
        ['Compliance risk', 'Follows suppression lists and windows exactly; disclosure must be configured', 'Judgement helps; consistency does not'],
      ],
    },
    {
      kind: 'list',
      heading: 'When an AI voice agent is the better choice',
      items: [
        'The calls are structured: confirm interest, ask a few qualification questions, offer a slot.',
        'Volume is high and the list is verified — follow-ups after an event, reactivating old leads, confirming appointments.',
        'You need calls inside a specific window, across time zones, or on days your team is not working.',
        'You want every call transcribed, classified and written to the CRM without anyone typing.',
        'Inbound calls are going unanswered and you need first-line qualification before a person calls back.',
      ],
    },
    {
      kind: 'list',
      heading: 'When a human SDR is the better choice',
      items: [
        'The prospect is senior, the deal is large, and the first call is really the start of a relationship.',
        'The conversation is likely to go off-script: complex objections, competitive comparisons, political context.',
        'The call needs empathy — a complaint, a lapsed customer, a sensitive industry.',
        'You are still learning what the market thinks and want a person who can tell you afterwards.',
        'Any negotiation may happen on the call.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How Eligoo fits',
      paragraphs: [
        'Eligoo’s voice agent is Hook, running on a self-hosted LiveKit voice stack with your own SIP trunk from Twilio, Telnyx, Plivo or Vobiz. Transcription is Deepgram by default, voices come from ElevenLabs, OpenAI or Deepgram, and the language model comes from your own connected AI account. You write the brief, place a test call from the browser, and then submit a calling campaign — list, window, pace — for approval. Nobody is dialled until a person confirms.',
        'Calls produce a transcript, an outcome, notes and an optional recording. A booked meeting becomes a Google Calendar event with a Meet link when Google Workspace is connected. Pricing, promises, legal questions and serious complaints are outside Hook’s boundary; it says a colleague will follow up and flags the call for a person — which is where your human SDR or AE picks up.',
      ],
    },
    faq([
      { q: 'Can an AI voice agent make cold calls?', a: 'Yes, to a list you approve, inside a window you set. Rules for cold calling, recording and disclosure differ by country; check your jurisdiction and configure the agent accordingly. Suppression lists are honoured on every campaign.' },
      { q: 'Do prospects hang up on AI calls?', a: 'Some do, as some hang up on human cold calls. What matters is the list quality, the brief and whether the first sentence gives the person a reason to stay. A browser test call is the fastest way to hear how it lands before anyone real is dialled.' },
      { q: 'Should the agent say it is an AI?', a: 'Configure disclosure to match your jurisdiction and your values. Eligoo lets you set what the agent says about itself in the brief.' },
      { q: 'What happens when the caller gets angry or asks about price?', a: 'Both are outside the agent’s boundary. It de-escalates, says a colleague will follow up, ends the call politely and flags it for a person.' },
      { q: 'Can I use both an AI voice agent and human SDRs?', a: 'That is the most common arrangement: the agent handles first-touch and confirmation calls at volume, and the people handle the calls the agent flags and the meetings it books.' },
      { q: 'Which languages can the agent speak?', a: 'Language support comes from the speech and voice providers you connect; major languages and Indian languages are available through supported providers. Set the call language in the agent configuration.' },
    ]),
    related([
      LINKS.voice, LINKS.ucColdCalling, LINKS.ucAppointments, LINKS.hook, LINKS.glVoice,
      { label: 'Glossary: AI cold calling', href: '/resources/glossary/ai-cold-calling/' },
      LINKS.cmpSalesSdr, { label: 'AI cold calling workflow template', href: '/resources/templates/ai-cold-calling-workflow/' },
      { label: 'Guide: how AI voice agents work', href: '/resources/guides/how-ai-voice-agents-work/' },
    ]),
    cta('Hear the voice agent before it calls anyone', 'Connect a number, write the brief, make a browser test call. Campaigns start only when you approve them.'),
  ],
  breadcrumb: CRUMBS.compare,
  schema: ['Article', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
