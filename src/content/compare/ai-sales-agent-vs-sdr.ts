import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/compare/ai-sales-agent-vs-sdr/',
  title: 'AI Sales Agent vs SDR',
  eyebrow: 'Compare',
  metaTitle: 'AI Sales Agent vs SDR: Which Should Run Your Outbound? | Eligoo',
  metaDescription: 'An AI sales agent runs prospecting, outreach, reply handling and booking inside set limits; an SDR brings judgement, rapport and objection handling. A candid comparison.',
  primaryKeyword: 'AI sales agent vs SDR',
  secondaryKeywords: ['AI SDR vs human SDR', 'AI SDR', 'AI sales agent', 'AI sales development representative', 'AI outbound sales', 'sales development representative'],
  answer: 'An AI sales agent is software that prospects, personalises outreach, handles routine replies, qualifies and books meetings without a person driving each step. A sales development representative (SDR) is a person who does the same job with judgement, rapport and the ability to improvise. The AI agent wins on volume, consistency and coverage; the SDR wins on relationships, objection handling and anything the playbook did not anticipate.',
  sections: [
    {
      kind: 'prose',
      heading: 'What is an AI sales agent?',
      paragraphs: [
        'An AI sales agent is an AI agent given the top of the sales funnel as its job. It works from a prospect list, decides which approved sequence fits each contact, personalises from verified facts, sends from a real mailbox, reads and classifies replies, asks qualification questions by email or phone and books a meeting when the prospect is ready. It runs to a schedule and a set of limits — volume per day, calling window, what it may and may not say.',
        'It is measured the way an SDR is: qualified meetings held, positive reply rate, show rate. What it cannot do is decide what you sell, to whom, or at what price; those are set before it starts.',
      ],
    },
    {
      kind: 'prose',
      heading: 'What is an SDR?',
      paragraphs: [
        'A sales development representative is the person whose job is to open conversations and qualify them before an account executive takes over. A good SDR reads a prospect’s tone, adapts on the fly, handles objections that were never in the script, knows when to push and when to leave it, and builds enough rapport that the hand-off to the AE feels warm. SDRs are also expensive to hire and train relative to their tenure, and a large part of their week is spent on list building, data entry and follow-up rather than conversation.',
      ],
    },
    {
      kind: 'table',
      heading: 'Side by side',
      columns: ['Dimension', 'AI sales agent', 'SDR'],
      rows: [
        ['Prospecting and list building', 'Continuous, from search and enrichment tools', 'Time-consuming; often the least-liked part of the job'],
        ['Personalisation', 'From verified facts on every contact, at any volume', 'Deeper on a few accounts, thin at volume'],
        ['Handling objections', 'Routine ones from the brief; escalates the rest', 'Improvises; the core skill'],
        ['Rapport', 'Polite and consistent, not personal', 'Genuine; prospects remember people'],
        ['Volume and coverage', 'Any calling window, every follow-up on time', 'Limited by hours; follow-ups slip'],
        ['Pricing and terms', 'Never; escalates by design', 'Can discuss within authority'],
        ['Data hygiene', 'Every touch logged automatically', 'Depends on discipline'],
        ['Cost', 'Subscription plus usage', 'Salary, tools, management, ramp-up, attrition'],
        ['Accountability', 'Bounded and logged; the business owns outcomes', 'Owns their number personally'],
      ],
    },
    {
      kind: 'list',
      heading: 'When an AI sales agent is the better choice',
      items: [
        'Your outbound is high-volume and the message is well understood — you know who to reach and what to say.',
        'Follow-up discipline is the bottleneck: leads go cold because nobody chased them.',
        'You need coverage outside office hours or across time zones without hiring for it.',
        'You cannot justify a full-time SDR yet, or your SDRs are spending most of their week on lists and admin.',
        'You want every conversation logged, classified and attributed without asking anyone to do it.',
      ],
    },
    {
      kind: 'list',
      heading: 'When an SDR is the better choice',
      items: [
        'Deals are large and few, and the first conversation sets the tone for a long relationship.',
        'The market is unfamiliar and the message is still being worked out — you need someone who learns from each call and tells you what they heard.',
        'Prospects are senior and expect to be handled by a person from the first touch.',
        'Objections are complex, commercial or political, and improvising badly would cost the deal.',
        'The sale requires trust that only a human can build before the AE is involved.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How Eligoo fits',
      paragraphs: [
        'In Eligoo the AI sales agent is Hook, working with Radar. Radar finds, enriches, verifies and scores prospects and never contacts them. Hook personalises and sends the sequence you approved from your own mailbox, reads replies, records opt-outs, calls on your own phone number, qualifies and books meetings on your calendar with a brief for whoever attends. Ledger keeps the CRM and the numbers honest.',
        `Hook’s KPI is qualified meetings held, not meetings booked. ${FACTS.approvals} Anything commercial — price, discounts, promises — is escalated to a person, which is where your SDR or AE takes over.`,
      ],
    },
    faq([
      { q: 'Can an AI sales agent replace an SDR?', a: 'It can take over the volume work — prospecting, first touch, follow-up, triage, booking — and it can do that for a team that has no SDR. It cannot replace the judgement and rapport an experienced SDR brings to a difficult conversation, so most teams end up with both: the agent working the list, the person working the conversations that matter.' },
      { q: 'How is an AI sales agent measured?', a: 'The same way you would measure an SDR: qualified meetings held, positive reply rate, show rate, opt-out and complaint rate. Eligoo tracks these on Hook so a sequence that books no-shows is visible as a problem.' },
      { q: 'Will prospects know they are talking to an AI?', a: 'Be transparent where the law or your values require it, and set the agent’s brief accordingly. Eligoo lets you configure what the agent says about itself; the choice is yours and your jurisdiction’s.' },
      { q: 'Does the AI send from my email address?', a: 'In Eligoo, yes: you connect your own mailbox over SMTP and IMAP, sends go from your address and replies are read from your inbox. Nothing goes out from a shared domain.' },
      { q: 'What happens when a prospect asks for a discount?', a: 'The agent does not negotiate. It says a colleague will follow up and flags the conversation, which is the hand-off to your salesperson.' },
    ]),
    related([
      LINKS.sales, LINKS.outbound, LINKS.hook, LINKS.radar, LINKS.ucOutbound, LINKS.glSdr,
      LINKS.cmpVoiceSdr, { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' },
      { label: 'Guide: what is an AI SDR?', href: '/resources/guides/what-is-an-ai-sdr/' },
    ]),
    cta('Let Hook work the list', 'Connect your mailbox, approve a sequence, and keep your salespeople for the conversations that need them.'),
  ],
  breadcrumb: CRUMBS.compare,
  schema: ['Article', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
