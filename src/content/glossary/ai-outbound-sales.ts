import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/ai-outbound-sales/',
  title: 'What Is AI Outbound Sales?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is AI Outbound Sales? Definition, How It Works, Examples and Limits | Eligoo',
  metaDescription: 'AI outbound sales is the use of AI agents to run the proactive side of selling — finding prospects, contacting them by email and phone, following up and booking meetings. Definition, components, benefits and limits.',
  primaryKeyword: 'what is AI outbound sales',
  secondaryKeywords: ['AI outbound sales definition', 'AI outbound', 'AI outbound sales agent', 'automated outbound sales', 'AI outbound prospecting', 'AI outbound platform'],
  term: 'AI outbound sales',
  answer: 'AI outbound sales is the use of AI agents to run the proactive side of selling — finding prospects that fit a target profile, contacting them by email and phone, following up and booking meetings — rather than waiting for inbound enquiries. A person still sets the target, approves the message and takes the meetings.',
  sections: [
    {
      kind: 'prose',
      heading: 'How it works',
      paragraphs: [
        'Outbound is a chain of distinct jobs, and AI outbound sales assigns each to an agent with the right tools. A research step defines the segment, the offer and the message. A prospecting step finds accounts and contacts that match, enriches them with roles and contact details, verifies and de-duplicates them against the CRM and scores each for fit. An outreach step personalises and sends an approved sequence, reads the replies and places calls where the sequence calls for them. A booking step qualifies interested prospects and puts meetings on a calendar. A reporting step keeps the records straight and shows which segments and messages produced meetings.',
        'The person running outbound sets the objective, approves the sequence and the calling campaign, reviews escalated replies and attends the meetings. Their time moves from doing the outreach to deciding what outreach should happen.',
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'An ideal customer profile and a messaging framework, written down.',
        'A prospect data source and a research tool for finding and enriching contacts.',
        'A CRM or lead store with suppression lists and de-duplication.',
        'An outreach agent with a mailbox connection and an approved sequence.',
        'A voice agent with a phone line for call steps.',
        'A calendar connection for booking.',
        'Reporting on the whole funnel: contacts found, contacted, replied, qualified, met.',
        'An approvals queue for enrolment, calling campaigns and non-routine replies.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'A component manufacturer targeting OEMs in a new state: segment defined, list built, sequence sent, calls placed to non-responders, meetings booked for the sales engineer.',
        'A freight forwarder contacting exporters whose shipments fit its lanes, with a sequence referencing the specific trade route.',
        'A software company re-working a list of closed-lost accounts a year after the loss.',
        'A solar installer contacting commercial property owners in a district with a call-first sequence.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'The whole chain runs without a person copying lists between tools.',
        'Prospecting and outreach volume are no longer limited by the hours a small team has.',
        'Every touch is logged, so attribution — which segment and message produced the meeting — is available.',
        'Segments can be tested cheaply before committing a salesperson to them.',
        'Follow-up is complete and on time, which is where most manual outbound fails.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'AI does not fix a weak offer or the wrong segment; it executes whatever it is given consistently.',
        'Deliverability, opt-outs, unsolicited-contact rules and calling-hour rules are the business’s responsibility.',
        'Personalisation must come from verified facts. Invented details damage trust faster than a generic message.',
        'Negotiation, pricing, relationship-building and closing remain human work.',
        'Prospects increasingly recognise automated outreach; volume without relevance produces complaints, not meetings.',
        'It depends on connected systems — a mailbox, a phone line, a data source — and on their quality.',
      ],
    },
    related([
      LINKS.glSdr, LINKS.glVoice,
      { label: 'What is AI cold calling?', href: '/resources/glossary/ai-cold-calling/' },
      { label: 'What is AI revenue operations?', href: '/resources/glossary/ai-revenue-operations/' },
      LINKS.outbound, LINKS.sales, LINKS.leadGen, LINKS.ucOutbound, LINKS.radar, LINKS.hook, LINKS.cmpSalesSdr,
      { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' },
    ], 'Related concepts'),
    faq([
      { q: 'What is the difference between AI outbound sales and an AI SDR?', a: 'An AI SDR is one role — the outreach and qualification agent. AI outbound sales is the whole chain: research, prospecting, outreach, booking and reporting, usually spread across several agents.' },
      { q: 'Does AI outbound replace a sales team?', a: 'It replaces the list-building, first-touch and follow-up work. Discovery calls, demos, proposals and negotiation stay with people. Most teams find their salespeople spend more time in meetings and less in spreadsheets.' },
      { q: 'How do you keep AI outbound from becoming spam?', a: 'Verified lists, suppression lists, sequence volume limits, honest personalisation and a person approving every enrolment. Measuring qualified meetings held rather than emails sent also keeps the incentive right.' },
      { q: 'What data does AI outbound need to start?', a: 'A written target profile, an approved message, a mailbox, and a data source for finding contacts. A phone line if calls are part of the sequence. Existing CRM data helps with de-duplication and suppression.' },
    ], 'FAQs'),
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'Eligoo runs the outbound chain across four AI employees. Maven defines the segment, positioning and messaging; Radar finds accounts and contacts, researches them, enriches, verifies, de-duplicates against the CRM and scores fit, intent and urgency; Hook sends the approved sequence from the customer’s mailbox, reads replies, places AI calls on the customer’s phone line and books meetings; Ledger keeps the CRM clean and reports funnel metrics and attribution. Sequence enrolment and calling campaigns wait in the approvals queue, and Atlas tracks the programme against its goal.',
      ],
    },
    cta('Run outbound as a chain, not a spreadsheet', 'Define the segment, approve the sequence, and let Radar, Hook and Ledger do the rest. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
