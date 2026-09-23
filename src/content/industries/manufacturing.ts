import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/industries/manufacturing/',
  title: 'AI for Manufacturing Companies',
  eyebrow: 'Industries · Manufacturing',
  metaTitle: 'AI for Manufacturing Companies — Sales, Voice, Lead Generation and Marketing | Eligoo',
  metaDescription: 'Eligoo gives manufacturers eight AI employees that find OEM and distributor buyers, run outreach, call and qualify prospects, follow up on RFQs, produce content and keep the CRM honest.',
  primaryKeyword: 'AI for manufacturing companies',
  secondaryKeywords: ['AI employees for manufacturing', 'AI sales automation for manufacturing', 'AI lead generation for manufacturers', 'AI voice agents for manufacturing', 'AI cold calling for manufacturers', 'AI marketing automation for manufacturers', 'AI outbound sales for manufacturers'],
  answer: 'AI for manufacturing companies means using AI employees to do the commercial work that sits between the shop floor and the order book: finding buyers at OEMs and distributors, running outreach, calling and qualifying prospects, chasing quotations, producing product content and keeping the CRM accurate. Eligoo does this with eight AI employees in one workspace, coordinated by Atlas and gated by your approvals.',
  sections: [
    {
      kind: 'prose',
      heading: 'What AI employees do for manufacturing companies',
      paragraphs: [
        'Most manufacturers sell through a small team that also handles quotations, samples, technical questions and existing accounts. New business development is the first thing that stops when the team is busy. Eligoo’s AI employees take on the repeatable part of that work — building target lists, sending and following up on outreach, placing first calls, drafting product content and reconciling the CRM — so the people who know the product spend their time on qualified conversations and quotes.',
        'The employees work as a team rather than as separate tools. Radar builds a list of accounts that match the parts, materials or processes you sell. Maven decides which segment to go after first and what the message is. Sage writes the emails, product pages and LinkedIn posts. Hook sends the approved sequence, calls the contacts who do not reply and books meetings for your sales engineer. Pixel produces the images and short videos that make a capability credible. Ledger keeps the pipeline and quote status clean. Atlas assigns the work and reports back weekly.',
        'Everything that touches the outside world — enrolling contacts into a sequence, starting a calling campaign, publishing a post outside the approved calendar — waits for a person to approve it. Nothing goes to a customer or prospect on its own.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo works for manufacturing companies',
      intro: 'Each step is owned by one AI employee and hands off to the next. The whole chain is visible on the workspace kanban board.',
      steps: [
        { title: 'Radar identifies prospects', text: 'Radar searches for buyers, procurement managers, sourcing engineers and design engineers at OEMs, tier suppliers and distributors that use what you make — by industry, geography, company size and the signals you define, such as a new plant, a product launch or a hiring push in production. Each contact is verified, de-duplicated against your CRM and scored for fit and urgency.' },
        { title: 'Maven develops the campaign', text: 'Maven researches the segment and writes a campaign brief: which capability to lead with (tolerances, materials, certifications you hold, lead times, capacity), who the decision-maker and the influencer are, and what a first conversation should establish. Existing customers and suppression lists are excluded.' },
        { title: 'Sage creates content', text: 'Sage writes the outreach sequence, a capability one-pager, the case-study structure for your best accounts and a month of LinkedIn posts about processes, plant and people. Product and process pages are optimised for the terms buyers actually search.' },
        { title: 'Hook calls prospects', text: 'Hook sends the approved sequence from your own mailbox and calls the contacts who do not reply, inside a calling window you set. On the call it confirms whether the account buys the part or process you offer, the approximate annual volume, current supplier situation and the next sourcing event, then books a meeting with your sales engineer.' },
        { title: 'Pixel creates creatives', text: 'Pixel turns plant photos and CAD renders into clean product images, short process videos, thumbnails and ad variants, with captions and resizing for each channel. Nothing is published by Pixel; assets go to Sage or Boost for approval.' },
        { title: 'Ledger tracks revenue', text: 'Ledger records every touch against the right account, keeps quote and sample status current, reconciles duplicates left by trade shows and reports pipeline by segment, attribution by campaign and a forecast with the evidence behind it.' },
        { title: 'Atlas coordinates everything', text: 'Atlas turns your quarterly objective — say, three new distributor agreements in a region — into tasks for the others, reviews progress hourly, keeps a risk register, manages the approval queue and gives you a weekly growth plan.' },
      ],
    },
    {
      kind: 'features',
      heading: 'Manufacturing workflows Eligoo handles',
      items: [
        { title: 'RFQ and quotation follow-up', text: 'Quotes that went quiet get a follow-up email and a call at a set interval; the answer (won, lost, deferred, needs a revision) is written to the CRM with the reason.', icon: 'mail' },
        { title: 'Distributor and channel development', text: 'Find distributors and agents in a target territory, qualify them for lines carried and territory coverage, and book an introduction.', icon: 'globe' },
        { title: 'Trade show follow-up', text: 'Badge scans are de-duplicated, enriched and called within the week, referencing the stand conversation.', icon: 'users' },
        { title: 'Long sales cycle nurturing', text: 'Contacts who are not buying yet stay in a low-frequency sequence with capability updates, so you are in the file when the next sourcing round opens.', icon: 'clock' },
        { title: 'Capability and process content', text: 'Product pages, capability statements and LinkedIn posts written from your specifications, not marketing generalities.', icon: 'pen' },
        { title: 'Inbound enquiry answering', text: 'Calls to your sales line are answered, the enquiry is captured and logged, and anything technical or commercial is routed to a person.', icon: 'phone' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a precision machining company entering a new sector',
      scenario: 'A contract machining company with a strong automotive book wants to win medical-device work and has no one free to prospect.',
      steps: [
        'Atlas takes the objective and sets up the plan: a target list, a campaign, content and a calling campaign, each as a task with an owner.',
        'Radar builds a list of medical-device OEMs and contract manufacturers in the target region, with sourcing and quality contacts, and flags those that mention the materials and tolerances the company already runs.',
        'Maven writes the brief: lead with the quality system and traceability, acknowledge the sector change directly, and aim for a capability review call rather than a quote.',
        'Sage writes a four-step sequence and a capability one-pager; Pixel produces a short inspection-room video and clean part photos.',
        'After approval, Hook runs the sequence and calls non-responders, qualifying on part family, volume and current supplier status. Interested contacts are booked with the managing director.',
        'Ledger reports which message and which contact role produced the meetings, and which accounts asked for samples.',
      ],
      outcome: 'The company has a clean, qualified list of medical-device accounts, a set of capability-review meetings on the calendar and a CRM that shows exactly where each account stands.',
    },
    employees(['radar', 'maven', 'sage', 'hook', 'pixel', 'ledger', 'atlas'], 'The AI employees on a manufacturing team', undefined, {
      radar: 'OEM, tier and distributor buyer lists, verified and scored.',
      maven: 'Segment choice, capability positioning, campaign brief.',
      sage: 'Outreach copy, capability statements, product pages, LinkedIn.',
      hook: 'Sequences, calls, RFQ follow-up, meeting booking.',
      pixel: 'Product images, process videos, ad variants.',
      ledger: 'Quote status, pipeline, attribution, forecast.',
      atlas: 'Operating plan, assignments, weekly report.',
    }),
    pricingPointer('the team'),
    faq([
      { q: 'Can AI find buyers at OEMs and distributors for a manufacturer?', a: 'Yes. Radar searches for accounts and contacts by industry, role, location and size, researches each one with web search, verifies contact details and scores them. It does not contact anyone; it produces a list for you to approve before Hook starts.' },
      { q: 'Can an AI agent call procurement managers on our behalf?', a: 'Hook can. It calls from a phone number you own, follows a brief you approve, asks the qualification questions you define — part family, volume, supplier situation, next sourcing event — and books a meeting. Pricing, delivery promises and technical commitments are outside its boundary and are passed to a person.' },
      { q: 'How does Eligoo handle a long manufacturing sales cycle?', a: 'Contacts who are interested but not buying yet stay in a low-frequency sequence with capability updates, and Ledger tracks the next expected sourcing event on each account so that Hook follows up at the right time rather than every week.' },
      { q: 'Will it work with our existing CRM?', a: 'Eligoo has its own CRM inside the workspace where leads, statuses, meetings and activity live. Lists can be imported and exported. Ledger keeps those records clean with an audit trail and never deletes a record.' },
      { q: 'Can Eligoo write technical content about our processes?', a: 'Sage writes from the specifications, certifications and process descriptions you provide and from what is on your website. It does not invent capabilities. Anything published outside the approved content calendar waits for approval.' },
      { q: 'Do we need a marketing department to use this?', a: 'No. Many manufacturers start with Radar and Hook for outbound only, then add Sage and Pixel for content once the pipeline is moving. You can hire one employee, a team or the whole workforce.' },
    ]),
    related([
      LINKS.sales, LINKS.voice, LINKS.leadGen, LINKS.outbound, LINKS.marketing, LINKS.radar, LINKS.hook,
      { label: 'AI for packaging companies', href: '/industries/packaging/' },
      { label: 'AI for solar companies', href: '/industries/solar/' },
      { label: 'AI for freight forwarding companies', href: '/industries/freight-forwarding/' },
      { label: 'AI for industrial automation companies', href: '/industries/industrial-automation/' },
    ]),
    cta('Put an AI sales team behind your plant', `Start with a target list and one approved sequence, then add calling and content as the pipeline grows. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.industries,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
