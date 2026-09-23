import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/resources/guides/what-is-an-ai-sdr/',
  title: 'What Is an AI SDR and How Does It Work?',
  eyebrow: 'Guides · AI sales',
  metaTitle: 'What Is an AI SDR and How Does It Work? Prospecting Agents, Appointment Setters and AE Hand-off | Eligoo',
  metaDescription: 'A practical guide to AI SDRs: what they do, how prospecting agents and appointment setters fit together, how the hand-off to account executives works, and where they fall short.',
  primaryKeyword: 'what is an AI SDR',
  secondaryKeywords: ['AI SDR', 'how AI SDRs work', 'AI sales agent', 'AI prospecting agent', 'AI appointment setter', 'AI sales development representative', 'AI outbound sales', 'AI sales automation'],
  answer: 'An AI SDR is software that does the job of a sales development representative: it builds and works a prospect list, sends personalised outreach, reads and classifies replies, qualifies interested prospects by email or phone and books meetings for a salesperson. It runs to a schedule and inside limits — who it may contact, what it may say, what needs approval — and hands anything commercial to a person.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does an AI SDR actually do?',
      paragraphs: [
        'A human SDR’s week is a mix of list building, research, writing first emails, following up, answering routine replies, making calls, asking a few qualifying questions and booking meetings for account executives. Most of that is repeatable and specifiable, which is why it is the part of sales that AI agents took on first. An AI SDR is one or more agents given that job, measured the way an SDR is measured: qualified meetings held, positive reply rate, show rate, opt-out and complaint rate.',
        'What it is not: a closer, a negotiator or a relationship. An AI SDR opens conversations and qualifies them. The moment a conversation turns to price, terms or a serious objection, it should hand off — which is exactly what a good human SDR does too.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How do prospecting agents, outreach agents and appointment setters fit together?',
      paragraphs: [
        'The phrase “AI SDR” usually covers three distinct roles, and it is worth separating them because they need different levels of trust. A prospecting agent finds accounts and contacts that match the ideal customer profile, researches them, enriches and verifies details, de-duplicates against the CRM and suppression lists, and scores fit, intent and urgency. It never contacts anyone, so it can run fully unattended. An outreach agent personalises and sends an approved sequence from a real mailbox, reads replies, records opt-outs and answers routine questions; because it reaches customers, enrolment is the step that needs approval. An appointment setter — often the same agent as the outreach role — asks qualification questions by email or on the phone, offers a slot and books it, then writes a brief for whoever attends.',
        'Splitting the roles is what makes the whole thing safe. The finder can be wrong about a contact and nothing happens; the contactor can only send what a person approved; the setter can only book what the calendar allows.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How does an AI SDR work, step by step?',
      steps: [
        { title: 'The ideal customer profile is written down', text: 'Industries, company size, roles, regions, exclusions and what counts as a signal of intent. This is the prospecting agent’s input, and the quality of everything downstream depends on it.' },
        { title: 'Prospects are found, verified and scored', text: 'The prospecting agent searches, researches each account, finds contacts, enriches and verifies email and phone, removes duplicates and suppressed contacts, and produces a segmented list with a reason for each score.' },
        { title: 'A sequence is written and approved', text: 'Email steps, timing, call steps, personalisation rules and what the agent may say about the product. A person approves the sequence and the enrolment of contacts into it.' },
        { title: 'Sends run from your own mailbox', text: 'Timed sends go out from your connected address. Each email is personalised from verified facts about the contact, never invented ones.' },
        { title: 'Replies are read and classified', text: 'The agent polls the inbox, matches replies to conversations and classifies them: interested, not now, wrong person, opt-out, question, complaint. Routine questions are answered; anything else is flagged.' },
        { title: 'Interested prospects are qualified', text: 'By email or on a call the agent asks the questions you defined — need, timing, authority, fit — and records the answers on the lead.' },
        { title: 'A meeting is booked and briefed', text: 'The agent offers a slot, confirms it, creates the calendar event with a meeting link and writes a brief: who the person is, what they said, what they want to discuss.' },
        { title: 'The AE takes over', text: 'The conversation, outcome and next step are in the CRM. The salesperson runs the meeting; the agent handles the follow-up the AE asks for.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'How does the hand-off to account executives work?',
      paragraphs: [
        'The hand-off is where AI SDR projects succeed or fail. A booked meeting with no context is barely better than a cold call for the AE. The agent should deliver three things: a qualification record with the actual answers, not a score; a brief that reads like a colleague wrote it — who, what they said, what they want, what to avoid; and a clean CRM record with every touch logged so the AE can see the history. After the meeting, the AE’s notes and next step should flow back so the agent can run the agreed follow-up.',
        'The other hand-off is the escalation. When a prospect asks about price, wants a discount, raises a contractual point or complains, the agent should say a colleague will follow up and flag the conversation for a person immediately. That flag is the AE’s cue, and it should arrive with the whole thread attached.',
      ],
    },
    {
      kind: 'example',
      heading: 'Example: reactivating a dormant lead list',
      scenario: 'A freight forwarder has a few thousand enquiries from the last two years that were never followed up. Two salespeople handle live deals and have no time for the backlog.',
      steps: [
        'The prospecting agent de-duplicates the backlog against current customers and the suppression list, enriches missing details, and scores each contact by how recently and how specifically they enquired.',
        'A short three-step sequence is written — reference the original enquiry, ask whether the need still exists, offer a fifteen-minute call — and the top segment is enrolled after approval.',
        'Replies are classified as they arrive. “Still interested” replies get qualification questions; “wrong person” replies get a polite ask for the right contact; opt-outs are recorded.',
        'Qualified contacts who prefer a call are dialled inside an afternoon window; booked meetings land on a salesperson’s calendar with a brief.',
      ],
      outcome: 'The backlog is worked systematically, the salespeople only see contacts who confirmed a live need, and every outcome is in the CRM.',
    },
    {
      kind: 'list',
      heading: 'Where AI SDRs fall short',
      items: [
        'Senior prospects and large deals, where the first conversation is the start of a relationship a person should own.',
        'Markets you do not yet understand, where the value of early calls is what you learn, and a person learns faster.',
        'Complex or political objections that need improvisation.',
        'Anything commercial: price, terms, promises. These belong outside the boundary.',
        'Trust. A polite, consistent agent is not a colleague a prospect remembers.',
      ],
    },
    {
      kind: 'list',
      heading: 'Pitfalls when deploying an AI SDR',
      items: [
        'A vague ideal customer profile. Every downstream email inherits its imprecision.',
        'Personalisation from guesses. Only personalise from verified facts; invented details are worse than none.',
        'Measuring sends. The KPI is qualified meetings held; a sequence that books no-shows is a failure that looks like a success.',
        'No escalation path. Decide who receives flagged conversations and how quickly, before the first send.',
        'Sending from a shared domain. Use your own mailbox so replies come to you and your reputation is yours to manage.',
        'Skipping the calling test. Hear the voice agent from the browser before it dials a prospect.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How Eligoo does it',
      paragraphs: [
        'In Eligoo the AI SDR is two employees. Radar is the prospecting agent: Apollo people search, web research, enrichment, verification, de-duplication, fit/intent/urgency scoring and segmentation, with suppression lists honoured — and it never contacts prospects. Hook is the outreach agent and appointment setter: it personalises and sends approved sequences from your own SMTP/IMAP mailbox, polls for replies with de-duplication, records opt-outs, makes and takes AI phone calls on your own SIP trunk, asks your qualification questions and books meetings as Google Calendar events with a Meet link, plus a meeting brief. Ledger keeps the CRM clean and reports funnel metrics and attribution; Atlas sees it all in the weekly plan.',
        `Hook’s KPI is qualified meetings held. Sequence enrolment and starting a calling campaign are approvals; failed executions return to pending; every decision is logged. ${FACTS.approvals} Pricing, discounts, promises and complaints are outside Hook’s boundary and are flagged to a person.`,
      ],
    },
    faq([
      { q: 'What is an AI SDR?', a: 'Software that does a sales development representative’s job — prospecting, outreach, reply handling, qualification and booking — inside limits, and hands commercial conversations to a person.' },
      { q: 'How does an AI SDR find prospects?', a: 'From a written ideal customer profile it searches a people database and the web, enriches and verifies contacts, removes duplicates and suppressed contacts, and scores the rest. In Eligoo, Radar does this using Apollo and web search.' },
      { q: 'Does an AI SDR send from my email address?', a: 'It should. Eligoo connects your own mailbox over SMTP and IMAP; sends come from your address and replies are read from your inbox.' },
      { q: 'Can an AI SDR make phone calls?', a: 'Yes, with a voice stack and your own phone number. In Eligoo, Hook runs calling campaigns on your SIP trunk inside an approved window and qualifies and books on the call.' },
      { q: 'How is an AI SDR measured?', a: 'Qualified meetings held first; then positive reply rate, show rate, opt-out rate and complaint rate. Activity metrics like emails sent are not the KPI.' },
      { q: 'What happens when a prospect asks for pricing?', a: 'The agent does not negotiate. It says a colleague will follow up and flags the thread for your salesperson with the whole conversation attached.' },
    ]),
    related([
      LINKS.glSdr, { label: 'Glossary: AI outbound sales', href: '/resources/glossary/ai-outbound-sales/' }, LINKS.sales, LINKS.outbound, LINKS.leadGen, LINKS.hook, LINKS.radar,
      LINKS.cmpSalesSdr, { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' }, { label: 'AI follow-up workflow template', href: '/resources/templates/ai-follow-up-workflow/' },
      { label: 'Apollo integration', href: '/integrations/apollo/' }, { label: 'Email mailbox integration', href: '/integrations/email-mailbox/' },
    ]),
    cta('Put an AI SDR on your list', 'Connect your mailbox, let Radar build the list, approve the sequence, and let Hook book the meetings.'),
  ],
  breadcrumb: CRUMBS.guides,
  schema: ['Article', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
