import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/lead-generation/',
  title: 'AI Lead Generation with AI Employees',
  eyebrow: 'Use cases · Lead generation',
  metaTitle: 'AI Lead Generation — Find, Verify, Score and Qualify B2B Leads with AI Employees | Eligoo',
  metaDescription: 'AI lead generation with Eligoo: Radar finds and verifies accounts and contacts that fit your ICP, Hook contacts and qualifies them, Ledger keeps the records clean. Every campaign is approved by a person.',
  primaryKeyword: 'AI lead generation',
  secondaryKeywords: ['AI lead generation for B2B', 'AI lead generation agent', 'AI prospecting', 'automated lead generation', 'AI lead qualification', 'AI lead generation software'],
  answer: 'AI lead generation is the use of AI agents to find companies and contacts that match an ideal customer profile, verify and score them, make first contact and qualify their interest — work that a sales development team would otherwise do by hand. In Eligoo, Radar finds and scores the prospects, Hook contacts and qualifies them by email and phone, and Ledger keeps the resulting records accurate, all under a campaign a person has approved.',
  sections: [
    {
      kind: 'prose',
      heading: 'What the problem looks like',
      paragraphs: [
        'Most B2B teams do not have a lead shortage so much as a list problem. The list is old, half the contacts have moved, the same company is in the CRM three times under different spellings, and nobody has time to research who the real buyer is before sending anything. Outreach then goes to the wrong people with a generic message, reply rates are poor, and the conclusion drawn is that outbound does not work.',
        'The second problem is qualification. Even when a list is good, someone has to contact each person, ask a few questions and decide whether a meeting is worth a salesperson’s time. That step is repetitive and gets skipped when the team is busy, so unqualified meetings land on the calendar and qualified ones never get booked.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo handles lead generation',
      steps: [
        { title: 'Maven defines the profile', text: 'Maven turns your description of a good customer into an ideal customer profile: industry, size, geography, roles, and the signals that suggest need. It also writes the qualification criteria Hook will use.' },
        { title: 'Radar finds and researches accounts', text: 'Radar searches for matching companies and contacts, researches each with web search, enriches missing details, verifies what it finds and de-duplicates against your CRM and suppression lists. Each record gets a fit, intent and urgency score with the reasons.' },
        { title: 'You approve the list and the sequence', text: 'Radar never contacts anyone. The list, the sequence Sage wrote and the calling brief all go to the approvals queue; enrolment starts only when a person confirms.' },
        { title: 'Hook makes contact and qualifies', text: 'Hook sends the sequence from your own mailbox, reads replies, calls contacts who do not respond inside the calling window, asks the qualification questions and books a meeting when the answers clear the bar.' },
        { title: 'Ledger keeps the record honest', text: 'Every lead, status change and meeting is logged against the right record with an audit trail. Ledger reports which segments and messages produced qualified meetings and flags exceptions.' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'The lead generation chain',
      stages: [
        { label: 'Define ICP', owner: 'maven', detail: 'Profile, signals, qualification criteria' },
        { label: 'Find accounts', owner: 'radar', detail: 'Search by industry, size, role, location' },
        { label: 'Research and enrich', owner: 'radar', detail: 'Web research, contact details, verification' },
        { label: 'Score and segment', owner: 'radar', detail: 'Fit, intent, urgency with reasons' },
        { label: 'Approve', detail: 'List and sequence confirmed by a person' },
        { label: 'Contact', owner: 'hook', detail: 'Email sequence and calls' },
        { label: 'Qualify and book', owner: 'hook', detail: 'Questions answered, meeting created' },
        { label: 'Record and report', owner: 'ledger', detail: 'CRM, attribution, exceptions' },
      ],
    },
    {
      kind: 'features',
      heading: 'What you get',
      items: [
        { title: 'Scored prospect lists', text: 'Accounts and contacts with a fit score, the evidence behind it and source links, not just names.', icon: 'search' },
        { title: 'Verified contact details', text: 'Roles and details checked and enriched before anyone is contacted; duplicates and suppressed contacts removed.', icon: 'check' },
        { title: 'Segments', text: 'Lists broken into segments so that Maven and Sage can write to each one specifically.', icon: 'layers' },
        { title: 'Qualification records', text: 'The answers to your questions stored on each lead, with the outcome and next step.', icon: 'target' },
        { title: 'Booked meetings with briefs', text: 'A calendar event with a meeting link and a summary of who the person is and what they said.', icon: 'calendar' },
        { title: 'Source reporting', text: 'Which segment, message and channel produced qualified meetings, with the evidence.', icon: 'chart' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a software company entering a new vertical',
      scenario: 'A B2B software company with customers in one vertical wants to test a second one without hiring an SDR.',
      steps: [
        'Maven writes the ICP for the new vertical and the three questions that decide whether a company is a fit.',
        'Radar builds a list of companies in that vertical with the relevant operations and IT contacts, researches each, and scores them; contacts already in the CRM are excluded.',
        'Sage writes a short sequence for the segment. The list and sequence are approved.',
        'Hook sends, reads replies and calls the non-responders, qualifying with the three questions. Fits are booked with the founder.',
        'Ledger reports meetings held by company size and role, and which message step produced the replies.',
      ],
      outcome: 'The founder has a set of qualified conversations in the new vertical and a clear view of which sub-segment responded, without a hire or a bought list.',
    },
    employees(['maven', 'radar', 'sage', 'hook', 'ledger'], 'AI employees involved', undefined, {
      maven: 'Defines the profile and the qualification criteria.',
      radar: 'Finds, researches, verifies and scores prospects.',
      sage: 'Writes the outreach sequence.',
      hook: 'Contacts, qualifies and books.',
      ledger: 'Keeps records accurate and reports sources.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Apollo for people and company search and enrichment.',
        'Serper.dev (Google search API) for account research.',
        'Your own SMTP/IMAP mailbox for outreach and reply detection.',
        'Twilio, Telnyx, Plivo or Vobiz SIP trunks for calls on Eligoo’s self-hosted voice stack.',
        'Google Workspace for calendar events with a Meet link.',
        'Eligoo’s built-in CRM for leads, statuses and activity; lists can be imported and exported.',
      ],
    },
    pricingPointer('lead generation'),
    faq([
      { q: 'How does AI lead generation work?', a: 'An AI agent searches for companies and contacts that match a profile, researches each one, verifies and enriches the details, and scores them. A second agent contacts and qualifies them. In Eligoo those are Radar and Hook, and a person approves the list and the sequence before any contact is made.' },
      { q: 'Does Eligoo sell lead lists?', a: 'No. Radar builds lists for your workspace from Apollo search and web research, matched to your profile. Nothing is resold, and lists are not shared between workspaces.' },
      { q: 'Are the leads qualified or just names?', a: 'Radar produces scored, verified prospects. A prospect becomes a qualified lead once Hook has contacted them and their answers to your qualification questions clear the bar you set.' },
      { q: 'Can AI generate leads for a niche industry?', a: 'Yes, provided the industry has a definable profile and the companies can be found by search. Radar researches each account with web search, so a niche with few obvious keywords can still be worked from signals such as job posts, product pages and news.' },
      { q: 'How is a bad lead prevented from being contacted?', a: 'Suppression lists and existing customers are excluded before the list reaches you, duplicates are merged, and enrolment into a sequence is an approval. Opt-outs are recorded and honoured on every future send.' },
      { q: 'What does it cost per lead?', a: 'Eligoo is priced per workspace with a credit allowance, not per lead. Apollo search does not use Apollo credits; enrichment does, on your own Apollo account. Current plans are on the pricing page.' },
    ]),
    related([
      LINKS.leadGen, LINKS.radar, LINKS.hook, LINKS.outbound, LINKS.sales, LINKS.ucColdCalling, LINKS.ucAppointments, LINKS.ucOutbound,
      { label: 'Apollo integration', href: '/integrations/apollo/' },
      { label: 'Lead generation workflow template', href: '/resources/templates/lead-generation-workflow/' },
      LINKS.industries,
    ]),
    cta('Build your first qualified list', `Describe your ideal customer, approve the list Radar builds, and let Hook work it. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.useCases,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
