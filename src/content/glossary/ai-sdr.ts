import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/ai-sdr/',
  title: 'What Is an AI SDR?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is an AI SDR? Definition, How It Works, Examples and Limits | Eligoo',
  metaDescription: 'An AI SDR is an AI agent that does the top-of-funnel work of a sales development representative: research, outreach, replies, qualification and booking. How it works, components, examples, benefits and limits.',
  primaryKeyword: 'what is an AI SDR',
  secondaryKeywords: ['AI SDR definition', 'AI SDR meaning', 'AI sales development representative', 'AI SDR agent', 'AI SDR vs human SDR', 'AI SDR software'],
  term: 'AI SDR',
  answer: 'An AI SDR (sales development representative) is an AI agent that does the top-of-funnel work a human SDR does: researching prospects, sending outreach by email or phone, reading and handling replies, asking qualification questions and booking meetings for a salesperson. It works from an approved list and an approved message and hands anything commercial or sensitive to a person.',
  sections: [
    {
      kind: 'steps',
      heading: 'How it works',
      steps: [
        { title: 'Receives a list and a sequence', text: 'The AI SDR starts with a prospect list — ideally verified and scored — and an outreach sequence of email and call steps that a person has approved.' },
        { title: 'Personalises and sends', text: 'Each message is adapted from verified facts about the contact (role, company, recent news) and sent from the business’s own mailbox at the times the sequence specifies.' },
        { title: 'Reads replies', text: 'Replies are matched to the conversation and classified: interested, not now, wrong person, question, opt-out, complaint. Routine replies get a routine answer; the rest are flagged.' },
        { title: 'Calls where the sequence says to', text: 'Phone steps are handled by an AI voice agent inside a calling window, with qualification questions asked on the call.' },
        { title: 'Qualifies and books', text: 'When a prospect shows interest, the AI SDR asks the qualification questions, offers a meeting slot and creates the calendar event and a brief for whoever attends.' },
        { title: 'Logs everything', text: 'Every send, reply, call and outcome is written to the CRM so the salesperson and the reporting see the same record.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'A language model for personalisation, reply classification and conversation.',
        'A mailbox connection (SMTP/IMAP) for sending and reading email.',
        'A voice stack — telephony, speech-to-text, text-to-speech — for phone steps.',
        'A sequence definition: steps, timing, channels and volume limits.',
        'Qualification criteria and an escalation rule for what the SDR may not answer.',
        'A calendar connection for booking.',
        'A CRM or lead store for records, statuses and suppression lists.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'Working a list of trade-show contacts with a three-step email sequence and a follow-up call.',
        'Re-contacting dormant leads in a CRM to check whether the need still exists.',
        'Running a first-touch sequence to a new segment defined by a marketing strategist.',
        'Answering routine inbound replies (“send me more information”) and booking discovery calls.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'Consistent follow-up: every contact gets every step, on time, with no forgotten threads.',
        'Coverage of lists that a human team would not have time to work.',
        'Personalisation from verified facts at a volume a person could not sustain.',
        'A complete record of each conversation in the CRM without manual logging.',
        'Cost per touch is low, so smaller segments become worth testing.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'It cannot fix a weak offer or a badly chosen segment; it only makes the outreach consistent.',
        'It should not negotiate, discount, make promises or handle complaints — those need a person.',
        'Deliverability and compliance are the sender’s responsibility: opt-outs, suppression lists and local rules on unsolicited contact still apply.',
        'Prospects who recognise automated outreach may respond worse; message quality matters more, not less.',
        'It relies on the quality of the list. Unverified contacts produce bounces and wasted steps.',
        'Human SDRs are better at reading a hesitant reply, building rapport and improvising on a difficult call.',
      ],
    },
    related([
      LINKS.glVoice,
      { label: 'What is AI cold calling?', href: '/resources/glossary/ai-cold-calling/' },
      { label: 'What is AI outbound sales?', href: '/resources/glossary/ai-outbound-sales/' },
      LINKS.glEmployee, LINKS.sales, LINKS.outbound, LINKS.hook, LINKS.cmpSalesSdr, LINKS.cmpVoiceSdr,
      { label: 'Guide: what is an AI SDR?', href: '/resources/guides/what-is-an-ai-sdr/' },
    ], 'Related concepts'),
    faq([
      { q: 'Can an AI SDR replace a human SDR?', a: 'It can do the repeatable part of the job — sequences, follow-up, first-pass qualification, booking — for approved lists and messages. It cannot replace the judgement, relationship-building and improvisation a good SDR brings to a difficult conversation. Most teams pair the two.' },
      { q: 'Does an AI SDR send from my email address?', a: 'It should. Sending from the business’s own mailbox keeps replies in the business’s inbox and keeps the sender reputation where it belongs. Be cautious of tools that send from a shared domain.' },
      { q: 'How is an AI SDR measured?', a: 'By qualified meetings held, not emails sent or meetings booked. Positive reply rate, show rate, opt-out rate and complaint rate should be tracked alongside, so a sequence that books no-shows is visible as a problem.' },
      { q: 'Is an AI SDR the same as an AI voice agent?', a: 'No. An AI voice agent is one channel — phone. An AI SDR covers the whole top-of-funnel role across email and phone and may use a voice agent for the call steps.' },
      { q: 'Is AI SDR outreach legal?', a: 'Rules on unsolicited email and calls differ by country and by whether the recipient is a business or a consumer. The business using the AI SDR is responsible for using lawful lists, honouring opt-outs and respecting calling hours where it operates.' },
    ], 'FAQs'),
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'In Eligoo the AI SDR role is Hook, the AI sales and voice agent. Hook personalises and sends approved email sequences from the customer’s own SMTP/IMAP mailbox, polls the inbox for replies, records opt-outs, places and receives AI phone calls on the customer’s SIP trunk, asks the qualification questions the customer defined and books meetings as Google Calendar events with a Meet link. Enrolling contacts into a sequence and starting a calling campaign are both approvals; pricing, promises and complaints are escalated to a person. Radar supplies the verified list and Ledger keeps the CRM record straight.',
      ],
    },
    cta('Put an AI SDR on your list', 'Connect a mailbox, approve a sequence and let Hook work the contacts Radar verified. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
