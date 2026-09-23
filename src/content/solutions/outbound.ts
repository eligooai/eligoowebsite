import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/solutions/outbound/',
  title: 'AI Outbound Sales',
  eyebrow: 'Solutions · Outbound',
  metaTitle: 'AI Outbound Sales — Research, Prospect, Email, Call, Qualify, Book | Eligoo',
  metaDescription: 'Eligoo runs outbound as one workflow: research → find prospects → enrich → personalise → email → call → qualify → book meeting → CRM, with AI employees owning each stage and approvals before anything goes out.',
  primaryKeyword: 'AI outbound sales',
  secondaryKeywords: ['AI outbound agent', 'AI outbound calling', 'AI outbound sales automation', 'AI cold calling', 'AI cold calling software', 'AI sales outreach', 'AI prospecting automation', 'automated outbound sales'],
  answer: 'AI outbound sales is the whole outbound chain run by AI employees: research, finding prospects, enrichment, personalisation, email, calls, qualification, meeting booking and CRM. In Eligoo each stage has an owner — Maven, Radar, Sage, Hook, Ledger — and the two actions that reach prospects, enrolling a sequence and starting a calling campaign, wait for your approval.',
  character: 'radar',
  sections: [
    {
      kind: 'workflow',
      heading: 'The outbound workflow',
      intro: 'This chain is the core of what Eligoo does. Every stage is a task with an owner and an output that the next stage consumes.',
      stages: [
        { label: 'Research', owner: 'maven', detail: 'Segment, offer, messaging framework' },
        { label: 'Find prospects', owner: 'radar', detail: 'Accounts and contacts that fit the ICP' },
        { label: 'Enrich', owner: 'radar', detail: 'Roles, emails, phones, context, source links' },
        { label: 'Personalise', owner: 'hook', detail: 'Sequence steps tailored from verified facts' },
        { label: 'Email', owner: 'hook', detail: 'Approved sequence from your mailbox' },
        { label: 'Call', owner: 'hook', detail: 'AI voice calls inside the campaign window' },
        { label: 'Qualify', owner: 'hook', detail: 'Questions asked, answers recorded' },
        { label: 'Book meeting', owner: 'hook', detail: 'Calendar event, Meet link, brief' },
        { label: 'CRM', owner: 'ledger', detail: 'Clean records, attribution, forecast' },
      ],
    },
    {
      kind: 'prose',
      heading: 'What is AI outbound sales?',
      paragraphs: [
        'Outbound is a chain of small judgements: does this company fit, who is the right person, what do we know about them, what should the first email say, was that reply a yes, is it time to call, are they qualified, when can they meet. Traditional outbound tooling automates the sending and leaves every judgement to a person. AI outbound sales gives those judgements to AI employees, within criteria you set, and keeps a person at the two points that matter: approving who gets contacted and how.',
        'Eligoo runs the chain as one workflow rather than a stack of separate tools. Radar’s output is Hook’s input; Hook’s outcomes are Ledger’s data; Atlas watches the whole thing and reprioritises when a segment is not converting.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How an outbound campaign runs',
      steps: [
        { title: 'Define the target', text: 'ICP, geographies, company size, roles, and the suppression list of who must not be contacted.' },
        { title: 'Radar builds and verifies the list', text: 'Apollo search and web research, then enrichment, verification, de-duplication against the CRM and scoring. Low-confidence records are marked, not passed off as verified.' },
        { title: 'Messaging is approved', text: 'Maven’s framework and Sage’s sequence copy, with your claims and offer. You approve the sequence once.' },
        { title: 'Enrolment is approved', text: 'You approve which contacts enter the sequence. Timed sends then run unattended from your mailbox.' },
        { title: 'Calls run in a campaign', text: 'A calling campaign with a lead list, a window and a pace is submitted for approval. Hook calls inside the window and rolls over daily.' },
        { title: 'Outcomes flow to the CRM', text: 'Replies, call outcomes, qualification answers and meetings are logged. Ledger reconciles and reports what converted.' },
      ],
    },
    {
      kind: 'features',
      heading: 'What AI outbound covers',
      items: [
        { title: 'AI prospecting automation', text: 'List building, enrichment and verification that runs continuously against your ICP.', icon: 'search' },
        { title: 'AI sales outreach', text: 'Personalised multi-step email sequences from your own address.', icon: 'mail' },
        { title: 'AI cold calling', text: 'Outbound campaigns on your number with transcripts, outcomes and optional recordings.', icon: 'phone' },
        { title: 'Follow-up', text: 'Timed follow-ups, reply-triggered next steps, retries inside the calling window.', icon: 'clock' },
        { title: 'Qualification and booking', text: 'Your criteria applied consistently; meetings created with a brief.', icon: 'calendar' },
        { title: 'Reporting', text: 'Meetings held, positive reply rate, show rate, opt-outs and which segments converted.', icon: 'chart' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: opening a new region',
      scenario: 'A freight forwarder wants to win importers in a region where it has no relationships yet.',
      steps: [
        'Maven researches the region’s import profile and proposes two segments and a messaging angle about lane coverage and transit reliability.',
        'Radar finds importers and their logistics decision-makers, enriches contact data, removes companies already in the CRM and scores each by fit.',
        'Sage writes a four-step sequence and a call script; you approve both along with the enrolment of the top-scored segment.',
        'Hook sends the sequence from the sales mailbox, classifies replies, and calls the contacts who opened but did not reply inside a weekday calling window you approved.',
        'Meetings are booked with the regional sales lead; Ledger reports which segment produced meetings held and which messaging step drew replies.',
      ],
      outcome: 'A region with no prior relationships has a pipeline, every contact was approved before being touched, and the next campaign starts from evidence rather than guesswork.',
    },
    employees(['maven', 'radar', 'sage', 'hook', 'ledger', 'atlas'], 'The outbound team'),
    {
      kind: 'list',
      heading: 'Integrations used in outbound',
      items: [
        'Apollo and Serper for prospect data and research.',
        'Your SMTP/IMAP mailbox for sends and replies.',
        'Twilio, Telnyx, Plivo or Vobiz trunks with Deepgram and ElevenLabs or OpenAI voices for calls.',
        'Google Workspace for calendar booking.',
        'Your connected AI provider for personalisation and classification.',
      ],
    },
    pricingPointer('outbound'),
    faq([
      { q: 'Can an AI agent make cold calls?', a: 'Yes. Hook places outbound calls inside an approved calling campaign on your own number. You are responsible for calling lists and hours that are lawful where you operate; suppression lists are honoured.' },
      { q: 'How is AI outbound different from a sequencing tool?', a: 'A sequencing tool sends what you wrote to a list you built. Eligoo builds and verifies the list, writes and personalises the sequence, reads and classifies replies, calls, qualifies, books and reports — with approval gates at enrolment and campaign start.' },
      { q: 'What stops it from contacting the wrong people?', a: 'Radar never contacts anyone; Hook only contacts the enrolments you approved; suppression lists and opt-outs are honoured; low-confidence records are flagged rather than treated as verified.' },
      { q: 'Can I run outbound without calls?', a: 'Yes. Email-only sequences are common. Add calls later by connecting a phone number and a voice configuration.' },
      { q: 'How do I measure it?', a: 'Hook’s KPI is qualified meetings held, alongside positive reply rate, show rate, opt-out rate and complaint rate. Ledger reports them with the underlying records.' },
    ]),
    related([LINKS.sales, LINKS.voice, LINKS.leadGen, LINKS.radar, LINKS.hook, LINKS.ucColdCalling, LINKS.ucOutbound, { label: 'What is AI outbound sales?', href: '/resources/glossary/ai-outbound-sales/' }, { label: 'AI cold calling workflow template', href: '/resources/templates/ai-cold-calling-workflow/' }, LINKS.industries]),
    cta('Run outbound as one workflow', `From research to booked meeting, with AI employees owning each stage. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.solutions,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
