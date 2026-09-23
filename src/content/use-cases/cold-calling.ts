import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/cold-calling/',
  title: 'AI Cold Calling with an AI Voice Agent',
  eyebrow: 'Use cases · Cold calling',
  metaTitle: 'AI Cold Calling — Outbound Calls, Qualification and Booking with an AI Voice Agent | Eligoo',
  metaDescription: 'AI cold calling with Eligoo: Hook dials an approved list on your own number inside a calling window, qualifies each prospect, books meetings and logs a transcript and outcome for every call.',
  primaryKeyword: 'AI cold calling',
  secondaryKeywords: ['AI cold calling agent', 'AI cold calling software', 'AI voice agent for cold calls', 'automated cold calling', 'AI outbound calling', 'AI phone prospecting'],
  answer: 'AI cold calling is outbound telephone prospecting done by an AI voice agent instead of a person: the agent dials a list, holds a real conversation, asks qualification questions and books a meeting or records the outcome. In Eligoo the caller is Hook, working through a calling campaign that a person has approved, on a phone number you own, with a transcript and outcome logged for every call.',
  sections: [
    {
      kind: 'prose',
      heading: 'What the problem looks like',
      paragraphs: [
        'Cold calling works when it is done consistently, and it almost never is. Salespeople avoid it, SDRs burn out on it, and the first calls of a campaign get made while the last two hundred never do. The result is a list that has been half-worked, no reliable notes on who said what, and no way to know whether the script or the list was the problem.',
        'The other problem is timing. A decision-maker who did not reply to two emails may pick up the phone, but only if someone calls during the right window and follows up on the no-answers. That discipline is expensive to buy in people and easy to lose.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo handles cold calling',
      steps: [
        { title: 'Radar prepares the list', text: 'Contacts are verified, phone numbers enriched, duplicates removed and suppressed numbers excluded. Each contact carries the research Hook will reference on the call.' },
        { title: 'Maven and Sage write the brief', text: 'The goal of the call, the opening, the qualification questions, objection handling and what counts as a booked meeting. Behaviour presets cover common call types; you tune turn detection and interruption handling.' },
        { title: 'You hear it first', text: 'A browser test call lets you talk to Hook before anyone else does. Adjust the brief, the voice and the pace until it sounds right.' },
        { title: 'The campaign is approved', text: 'A calling campaign has a lead list, a calling window, a pace between calls and a daily roll-over. Starting it is an approval; nothing is dialled until a person confirms.' },
        { title: 'Hook calls, qualifies and books', text: 'Calls run one line at a time inside the window. Hook asks the questions, records the answers, offers a meeting slot and creates the calendar event. No-answers roll over to the next day.' },
        { title: 'Ledger reports', text: 'Every call has a transcript, an outcome and notes; recordings are optional. Ledger reports connects, qualified rate, meetings booked and decline reasons by segment.' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'Where the call sits in the outbound chain',
      stages: [
        { label: 'Verified list', owner: 'radar', detail: 'Numbers, roles, research' },
        { label: 'Call brief', owner: 'maven', detail: 'Goal, questions, objections' },
        { label: 'Email first', owner: 'hook', detail: 'Approved sequence, replies read' },
        { label: 'Call', owner: 'hook', detail: 'Inside the campaign window' },
        { label: 'Qualify', owner: 'hook', detail: 'Answers recorded on the lead' },
        { label: 'Book', owner: 'hook', detail: 'Calendar event and meeting brief' },
        { label: 'Report', owner: 'ledger', detail: 'Outcomes, reasons, attribution' },
      ],
    },
    {
      kind: 'features',
      heading: 'What the AI cold caller does',
      items: [
        { title: 'Dials on your own number', text: 'Calls go out over a SIP trunk you connect, so the caller ID is yours and the number stays with you.', icon: 'phone' },
        { title: 'Holds a real conversation', text: 'Free-form speech, context kept across the call, interruptions handled, objections answered from the brief.', icon: 'brain' },
        { title: 'Qualifies consistently', text: 'Every contact gets the same questions; every answer is stored on the lead.', icon: 'target' },
        { title: 'Books on the call', text: 'A slot is offered and confirmed; the calendar event with a meeting link is created when Google is connected.', icon: 'calendar' },
        { title: 'Escalates by design', text: 'Pricing, promises, complaints and anything sensitive are handed to a person with a note.', icon: 'shield' },
        { title: 'Logs everything', text: 'Transcript, outcome, notes and optional recording for each call, visible in the workspace.', icon: 'database' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: calling a list that email could not reach',
      scenario: 'An industrial equipment distributor has a list of plant maintenance heads who did not respond to a three-step email sequence.',
      steps: [
        'Radar enriches phone numbers for the non-responders and removes those on the suppression list.',
        'Maven writes a call brief that references the emails, asks whether the plant runs the equipment category in question and whether a service contract is in place, and offers a fifteen-minute call with a service engineer.',
        'The founder makes two browser test calls and shortens the opening.',
        'A campaign is created for weekday mornings at a modest pace and approved. Hook calls, qualifies and books; voicemails roll over to the next day.',
        'Ledger reports how many plants run the category, how many have a contract ending soon and which were booked.',
      ],
      outcome: 'The list is fully worked within the campaign window, the service engineer meets plants that confirmed the equipment and contract timing, and the reasons for every decline are recorded.',
    },
    employees(['hook', 'radar', 'maven', 'sage', 'ledger'], 'AI employees involved', undefined, {
      hook: 'Makes the calls, qualifies, books.',
      radar: 'Verified numbers and research per contact.',
      maven: 'Call goal, questions and objection handling.',
      sage: 'Call script wording.',
      ledger: 'Outcomes, reasons and attribution.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Telephony: Twilio, Telnyx, Plivo or Vobiz SIP trunks on Eligoo’s self-hosted LiveKit voice stack.',
        'Speech-to-text: Deepgram by default.',
        'Voices: ElevenLabs, OpenAI or Deepgram.',
        'Language model: from your connected OpenAI, Anthropic, Google Gemini, Groq or OpenRouter account.',
        'Google Workspace for calendar events with a Meet link.',
      ],
    },
    pricingPointer('calling'),
    faq([
      { q: 'Can an AI agent make cold calls?', a: 'Yes. Hook dials a list you approve, on a number you own, inside a calling window you set, and holds a conversation with the person who answers. It qualifies, books meetings and logs every call.' },
      { q: 'Is AI cold calling legal?', a: 'Rules on unsolicited calls, calling hours, caller identification and recording differ by country and sometimes by state. You are responsible for using lists and calling windows that are lawful where you operate. Eligoo honours suppression lists on every campaign and makes recording optional.' },
      { q: 'What happens if the person asks a question the agent cannot answer?', a: 'Hook answers from the brief and the research on the contact. Anything outside its boundary — price, commitments, complaints, detailed technical questions — is met with a promise that a colleague will follow up, and the call is flagged for a person.' },
      { q: 'How does the AI cold caller sound?', a: 'That depends on the voice you choose and the brief you write. Test calls from the browser let you hear it and adjust the opening, pace, interruption handling and voice before any real call.' },
      { q: 'How many calls can it make?', a: 'Campaigns run one call at a time per line at the pace you set, inside the window you set, and roll over unfinished contacts to the next day. Call minutes draw from your credit balance; telephony is billed by your trunk provider.' },
      { q: 'Does it call in Indian languages?', a: 'Call language is set in the voice configuration. Indian languages are available through the supported speech and voice providers; a test call shows you the result.' },
    ]),
    related([
      LINKS.voice, LINKS.sales, LINKS.glSdr, LINKS.hook, LINKS.industries, LINKS.ucAppointments, LINKS.ucOutbound,
      { label: 'AI cold calling workflow template', href: '/resources/templates/ai-cold-calling-workflow/' },
      { label: 'What is AI cold calling?', href: '/resources/glossary/ai-cold-calling/' },
      LINKS.cmpVoiceSdr,
    ]),
    cta('Let Hook work the list', `Connect a number, write the brief, make a test call from the browser, then approve the campaign. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.useCases,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
