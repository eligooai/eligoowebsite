import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/ai-cold-calling/',
  title: 'What Is AI Cold Calling?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is AI Cold Calling? Definition, How It Works, Examples and Limits | Eligoo',
  metaDescription: 'AI cold calling is the use of an AI voice agent to place first-contact phone calls to prospects, deliver an opening, handle the response and record an outcome. How it works, components, benefits and limitations.',
  primaryKeyword: 'what is AI cold calling',
  secondaryKeywords: ['AI cold calling definition', 'AI cold calling meaning', 'AI cold calling agent', 'automated cold calling', 'AI cold calls', 'can AI make cold calls'],
  term: 'AI cold calling',
  answer: 'AI cold calling is the use of an AI voice agent to place first-contact phone calls to prospects who have not asked to be contacted, deliver an opening pitch, handle the response and record an outcome such as interested, not interested, wrong number or call back later. It replaces the dialling and first conversation, not the sales process that follows.',
  sections: [
    {
      kind: 'prose',
      heading: 'How it works',
      paragraphs: [
        'A cold-calling campaign begins with a list: prospects that match a target profile, with verified phone numbers and any suppression list removed. The list, a calling window (for example weekday afternoons in the prospect’s time zone), a pace between calls and a brief for the agent are set up as a campaign, and a person approves it before the first call is placed.',
        'The voice agent then dials the list one line at a time. On each answered call it gives the opening the brief specifies, listens, responds to what the prospect says, asks one or two qualification questions if the prospect engages, and either offers a next step — a meeting, a callback, sending information — or closes politely. Unanswered numbers are retried inside the window; the campaign rolls over to the next day until the list is exhausted.',
        'Every call ends with a transcript, an outcome and notes on the lead record. Interested prospects go to a salesperson with a brief; declines are recorded with the reason so the list and the message can be improved.',
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'A verified prospect list with phone numbers, roles and any context worth referencing.',
        'A suppression list: existing customers, opt-outs and anyone who must not be called.',
        'A calling campaign definition: window, pace, retries and daily roll-over.',
        'An AI voice agent with a brief: opening, goal, qualification questions, objection handling, what to escalate.',
        'A phone number and SIP trunk the business controls.',
        'Outcome recording: transcript, outcome, notes and optional recording per call.',
        'A hand-off route for interested prospects: calendar booking or a task for a salesperson.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'Calling a list of manufacturers in a region to check whether they buy the component the business sells and who handles purchasing.',
        'Following up scanned trade-show badges within the week to confirm interest and offer a demo.',
        'Re-contacting old quotes that never converted to ask whether the need still exists.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'Every number on the list is called, in the window, at the pace set — no list is left half-worked.',
        'The opening and the questions are delivered the same way on every call.',
        'Outcomes are recorded automatically, so the list improves with each pass.',
        'Cost per dial is low, which makes it possible to test a new segment before assigning a person to it.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'Cold calling is regulated. Do-not-call registries, consent rules, calling hours and recording consent vary by country; the business is responsible for compliance.',
        'Answer rates on cold calls are low for anyone, human or AI. The agent improves consistency, not the fundamentals.',
        'A weak list or a weak opening produces a well-executed, unproductive campaign.',
        'The agent should not handle pricing questions, objections that need judgement, or hostile calls — it should escalate and end politely.',
        'Some prospects hang up when they realise they are speaking to software. Being clear and brief helps; pretending to be human does not.',
        'Human callers are better at building rapport, sensing hesitation and improvising with a difficult prospect.',
      ],
    },
    related([
      LINKS.glVoice, LINKS.glSdr,
      { label: 'What is AI outbound sales?', href: '/resources/glossary/ai-outbound-sales/' },
      LINKS.ucColdCalling, LINKS.voice, LINKS.sales, LINKS.hook, LINKS.cmpVoiceSdr,
      { label: 'AI cold calling workflow template', href: '/resources/templates/ai-cold-calling-workflow/' },
    ], 'Related concepts'),
    faq([
      { q: 'Can AI make cold calls?', a: 'Yes. An AI voice agent can dial a list, deliver an opening, respond to what the prospect says, ask qualification questions and record an outcome. Whether it should call a given list depends on the rules where the prospects are.' },
      { q: 'Is AI cold calling legal?', a: 'It depends on the country, on whether the prospect is a business or a consumer, and on whether the call is recorded. Many jurisdictions have do-not-call registries and calling-hour rules. Use lawful lists, honour suppression lists and check recording consent rules before starting a campaign.' },
      { q: 'Should the agent say it is an AI?', a: 'In several jurisdictions it must, and it is good practice everywhere. A short, honest opening loses fewer prospects than a discovered pretence.' },
      { q: 'What happens to interested prospects?', a: 'The agent offers the next step defined in the brief — usually a meeting slot, which becomes a calendar event — and the lead record is updated with the transcript and outcome so a salesperson can take over with full context.' },
      { q: 'How many calls can it make at once?', a: 'That is a campaign setting. A sensible default is one call at a time per line, at a pace that leaves room for retries inside the window, rather than dialling as fast as the trunk allows.' },
    ], 'FAQs'),
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'In Eligoo, cold calling is a calling campaign run by Hook on the customer’s own SIP trunk (Twilio, Telnyx, Plivo or Vobiz) over a self-hosted LiveKit voice stack. A campaign has a lead list — usually built and verified by Radar — a calling window, a pace, daily roll-over and one line at a time; starting it is an approval. Suppression lists are honoured, each call produces a transcript, an outcome and notes, recordings are optional, and a booked-meeting outcome creates a Google Calendar event with a Meet link or, if Google is not connected, a task for Ledger.',
      ],
    },
    cta('Run a cold-calling campaign you can audit', 'Verified list, approved brief, defined window, transcript on every call. Start with a free trial and a browser test call.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
