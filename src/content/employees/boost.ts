import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/ai-employees/boost/',
  title: 'Boost — AI Paid Acquisition Specialist',
  eyebrow: 'AI employee · Advertising',
  metaTitle: 'Boost — AI Paid Acquisition Specialist for Planning and Managing Approved Ads | Eligoo',
  metaDescription: 'Boost is Eligoo’s optional AI paid-acquisition employee: it plans campaigns, audiences, tests and budgets, prepares approval packages, and manages approved Meta Ads campaigns within stop rules. Nothing launches or spends without approval.',
  primaryKeyword: 'AI paid acquisition agent',
  secondaryKeywords: ['AI ads agent', 'AI Meta Ads automation', 'AI advertising agent', 'AI paid media employee'],
  answer: 'Boost is Eligoo’s AI paid acquisition employee, available as an optional role. From Maven’s brand and growth work it plans paid campaigns — channel fit, audiences, creative test matrix, budget split, bidding approach, stop rules and rollback plan — and prepares an approval package. With Meta Ads connected it builds and launches approved campaigns, monitors spend and pauses on stop rules. It may not launch, spend or change budgets, bids, audiences or claims without approval.',
  character: 'boost',
  sections: [
    {
      kind: 'prose',
      heading: 'What Boost does',
      paragraphs: [
        'Boost is the paid side of growth. Its input is Maven’s brand discovery and growth intelligence outputs, the ICP, offers, approved claims, campaign goals, budget proposals and past campaign performance. It decides channel fit — Google Ads, Meta Ads, LinkedIn Ads — audience definitions, the creative test matrix, budget split, bidding approach, stop rules and the rollback plan.',
        'Its actions are drafting campaign plans, audience specs, ad-copy briefs for Sage and Pixel, budget proposals and approval packages. Once the Meta Ads connector is connected, it builds and launches approved campaigns, monitors spend and pauses on stop rules. If a connector is not connected, Boost says so and delivers the plan only. Google Ads and LinkedIn Ads are planning-only today.',
        'Boost never invents market assumptions, audience evidence, budgets or commercial claims; it consumes Maven’s work. Its KPI is cost per qualified opportunity, pipeline from paid, and adherence to the approved budget and stop rules.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Boost works',
      steps: [
        { title: 'Receives the brief', text: 'Maven’s positioning and growth intelligence, the offer, approved claims and a campaign goal.' },
        { title: 'Plans', text: 'Channel fit, audiences, creative test matrix, budget split, bidding, stop rules and rollback plan.' },
        { title: 'Briefs creative', text: 'Ad-copy briefs to Sage and creative variants from Pixel.' },
        { title: 'Prepares the approval package', text: 'Everything a person needs to say yes: audiences, budget, creatives, stop rules.' },
        { title: 'Launches after approval', text: 'Through the Meta Ads connector; launches and spend changes are approval-gated actions.' },
        { title: 'Monitors and reports', text: 'Reads campaign insights, pauses on stop rules, proposes changes for approval, and reports attribution with Ledger.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Tools and integrations Boost uses',
      items: [
        'Meta Ads — read campaigns and insights; pause, activate, set budget and launch are approval-gated.',
        'Serper for research on audiences and competitors.',
        'Pixel’s ad variants from the media library and Sage’s ad copy.',
        'The AI model you assign it from your connected provider account.',
      ],
    },
    {
      kind: 'features',
      heading: 'Sample deliverables',
      items: [
        { title: 'Paid acquisition plan', text: 'Channels, audiences, tests, budget split, stop rules.', icon: 'megaphone' },
        { title: 'Campaign drafts', text: 'Ready to launch once approved.', icon: 'layers' },
        { title: 'Creative test matrix', text: 'Which variants run against which audiences.', icon: 'image' },
        { title: 'Budget proposal and approval package', text: 'The decision, with evidence, in one place.', icon: 'check' },
        { title: 'Performance and attribution report', text: 'Spend, results and pipeline from paid, reconciled with Ledger.', icon: 'chart' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'How Boost hands off to teammates',
      stages: [
        { label: 'Maven', owner: 'maven', detail: 'Brand and growth intelligence in' },
        { label: 'Boost', owner: 'boost', detail: 'Plan and approval package' },
        { label: 'Sage and Pixel', owner: 'pixel', detail: 'Ad copy and creative variants' },
        { label: 'You', detail: 'Approve launch and budget' },
        { label: 'Boost', owner: 'boost', detail: 'Launch, monitor, pause on stop rules' },
        { label: 'Ledger', owner: 'ledger', detail: 'Attribution and pipeline from paid' },
      ],
    },
    employees(['maven', 'sage', 'pixel', 'ledger', 'atlas'], 'Works with'),
    pricingPointer('Boost'),
    faq([
      { q: 'Can Boost spend money without me?', a: 'No. Launches, spend, budget, bid, audience and claim changes are all approval-gated. Boost can pause a campaign on the stop rules you approved.' },
      { q: 'Which ad platforms does it support?', a: 'Meta Ads is connected today for launching and managing approved campaigns. Google Ads and LinkedIn Ads are planning-only: Boost prepares the plan and tells you the connector is not connected.' },
      { q: 'Is Boost included in every plan?', a: 'Boost is an optional role, included on plans that list the paid-ads feature. Ad spend itself is billed by Meta to your ad account.' },
      { q: 'Where do the audiences and claims come from?', a: 'From Maven’s work and your approved claims. Boost is not allowed to invent market assumptions, audience evidence, budgets or commercial claims.' },
    ]),
    related([LINKS.marketing, LINKS.maven, LINKS.pixel, LINKS.ledger, { label: 'Meta Ads integration', href: '/integrations/meta-ads/' }, { label: 'Marketing automation use case', href: '/use-cases/marketing-automation/' }, LINKS.pricing]),
    cta('Add Boost to your workforce', 'Get a paid plan and an approval package before anything launches or spends.'),
  ],
  breadcrumb: CRUMBS.employees,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
