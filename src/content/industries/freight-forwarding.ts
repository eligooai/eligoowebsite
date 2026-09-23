import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/industries/freight-forwarding/',
  title: 'AI for Freight Forwarding Companies',
  eyebrow: 'Industries · Freight forwarding',
  metaTitle: 'AI for Freight Forwarding Companies — Shipper Prospecting, Lane Qualification, Rate Follow-up | Eligoo',
  metaDescription: 'Eligoo’s AI employees help freight forwarders and NVOCCs find importers and exporters, qualify them by lane, mode and volume on the phone, follow up on rate quotes and keep the shipper pipeline in order.',
  primaryKeyword: 'AI for freight forwarding companies',
  secondaryKeywords: ['AI employees for freight forwarding', 'AI sales automation for freight forwarding', 'AI lead generation for freight forwarders', 'AI voice agents for freight forwarding', 'AI cold calling for freight forwarders', 'AI marketing automation for freight forwarding', 'AI outbound sales for freight forwarders'],
  answer: 'AI for freight forwarding companies means AI employees that find importers, exporters and manufacturers who ship on the lanes you serve, qualify them by mode, lane, volume and current arrangement, follow up on rate quotes, and keep every shipper in the CRM with its status. Eligoo gives forwarders and NVOCCs eight AI employees for this in one workspace, with every campaign approved by a person before it runs.',
  sections: [
    {
      kind: 'prose',
      heading: 'What AI employees do for freight forwarding companies',
      paragraphs: [
        'Forwarding is a relationship business with a high-volume front end. Winning a shipper means finding the right logistics or import manager, learning which lanes and modes they move, how many containers or kilos a month, who handles it today and when the contract is up — and then quoting quickly and following up until the first shipment. Sales people who also handle operations rarely get to the calling and follow-up. Eligoo’s AI employees do the prospecting, first calls, rate follow-up and record-keeping so your sales team spends its time on quotes with a real chance.',
        'Radar finds shippers by commodity, trade lane, port and company size, with logistics, import-export and procurement contacts. Maven decides which lane or vertical to attack and what to say about transit time, consolidation, customs handling or visibility. Sage writes sequences, lane guides and market updates. Hook sends, calls, qualifies on lane and volume and books a rate discussion. Pixel produces route maps, explainer videos and post creatives. Ledger keeps quote status and account records straight. Atlas assigns and reports.',
        'The same team supports agent-network development: finding overseas partner forwarders on a lane and qualifying them on volumes and services before your directors have the conversation.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo works for freight forwarding companies',
      steps: [
        { title: 'Radar identifies prospects', text: 'Radar builds a list of importers, exporters and manufacturers moving cargo on the lanes you serve — by commodity, origin and destination country, port, company size and signals such as a new export market, a new plant or a hiring push in supply chain. It verifies the logistics, import-export and procurement contacts, removes existing customers, and scores each shipper for fit and urgency.' },
        { title: 'Maven develops the campaign', text: 'Maven writes the brief per lane or vertical: what your service actually offers on that route (transit, consolidation, customs, project cargo, cold chain, visibility), the objection you will hear (long-standing incumbent, contract rates in place, credit terms), and what a qualified conversation must establish — mode, lane, monthly volume, current forwarder and the next rate review.' },
        { title: 'Sage creates content', text: 'Sage writes the outreach sequence, rate-quote follow-up emails, a lane or commodity guide, market updates on rates and capacity for your newsletter, and posts about shipments you have handled. Service pages are structured around the searches shippers make for forwarding on a specific lane or commodity.' },
        { title: 'Hook calls prospects', text: 'Hook sends the approved sequence from your mailbox and calls the contacts who do not reply, inside the calling window. On the call it confirms mode (sea, air, road, rail), main lanes, approximate monthly volume in TEU or kilos, incoterms usually used, who handles it today and when rates are reviewed, then books a call with your sales person for a quote.' },
        { title: 'Pixel creates creatives', text: 'Pixel produces route and lane graphics, short explainer videos on your process, thumbnails and resized variants for LinkedIn and ads, and captions for videos of warehouse and port operations. Assets go to the library for approval.' },
        { title: 'Ledger tracks revenue', text: 'Ledger keeps quote status, credit-approval status and first-shipment status on each shipper, reconciles duplicates from enquiries and events, reports pipeline by lane and vertical, attributes wins to campaigns and maintains a forecast with the evidence behind it.' },
        { title: 'Atlas coordinates everything', text: 'Atlas turns an objective — new shippers on a lane, a vertical to enter, a partner network to build — into assigned tasks, reviews progress hourly, keeps a risk register and the approval queue, and reports weekly.' },
      ],
    },
    {
      kind: 'features',
      heading: 'Forwarding workflows Eligoo handles',
      items: [
        { title: 'Lane and volume qualification', text: 'Mode, lanes, monthly volume, incoterms, incumbent and rate-review timing confirmed before a quote is prepared.', icon: 'target' },
        { title: 'Rate quote follow-up', text: 'Every quote gets a scheduled call and email; won, lost and deferred outcomes are recorded with the reason.', icon: 'mail' },
        { title: 'Lane-specific campaigns', text: 'One campaign per lane or vertical with messaging about what you actually do well on that route.', icon: 'globe' },
        { title: 'Contract-timing nurture', text: 'Shippers under contract elsewhere stay in a low-frequency sequence and are called before the review window.', icon: 'clock' },
        { title: 'Agent network development', text: 'Find and qualify partner forwarders overseas on volumes and services before a director call.', icon: 'users' },
        { title: 'Inbound enquiry capture', text: 'Calls to your sales line are answered, the shipment details captured and a callback booked; operational and rate questions go to a person.', icon: 'phone' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a forwarder building a new export lane',
      scenario: 'A mid-sized forwarder with a good consolidation service to one region wants exporters on a second lane where it has just signed a partner agent.',
      steps: [
        'Atlas sets the objective and creates the tasks: shipper list, campaign brief, content, calling campaign and reporting.',
        'Radar lists exporters of the target commodities to the new destination, with their logistics and export contacts, and flags companies that recently registered new export markets or opened plants.',
        'Maven writes the brief: lead with the weekly consolidation and door delivery through the new partner, expect the incumbent objection, and define a qualified conversation as lane, monthly volume and rate-review timing known.',
        'Sage writes a four-step sequence and a lane guide; Pixel produces a route graphic and a short explainer video.',
        'After approval Hook runs the sequence, calls non-responders, qualifies on lane and volume and books quote calls with the sales manager.',
        'Ledger tracks quotes issued, credit approvals and first shipments, and reports which commodities and company sizes converted.',
      ],
      outcome: 'The sales manager quotes shippers whose lane, volume and timing are already known, and the CRM shows every exporter on the lane with its status.',
    },
    employees(['radar', 'maven', 'sage', 'hook', 'pixel', 'ledger', 'atlas'], 'The AI employees on a forwarding sales team', undefined, {
      radar: 'Shipper and partner-agent lists with verified logistics contacts.',
      maven: 'Lane and vertical choice, service argument, brief.',
      sage: 'Sequences, lane guides, quote follow-ups, market updates.',
      hook: 'Outreach, calls, lane and volume qualification, quote-call booking.',
      pixel: 'Route graphics, explainer videos, ad variants.',
      ledger: 'Quote, credit and first-shipment tracking, attribution, forecast.',
      atlas: 'Objectives into tasks, risk register, weekly plan.',
    }),
    pricingPointer('the team'),
    faq([
      { q: 'Can AI find shippers for a freight forwarder?', a: 'Radar searches for importers, exporters and manufacturers by commodity, lane, port, size and location, researches each with web search, verifies the logistics and procurement contacts and scores them. It produces a list for you to approve; it never contacts a shipper itself.' },
      { q: 'How does the AI voice agent qualify a shipper?', a: 'Hook asks the questions you set — mode, lanes, monthly volume, incoterms, incumbent forwarder, rate-review timing — records the answers on the lead and books a quote call if the shipper fits. It does not quote rates or transit times; those go to your sales team.' },
      { q: 'Can it follow up on rate quotes?', a: 'Yes. Issued quotes are tracked by Ledger and Hook calls or emails at the interval you choose, recording whether the quote was accepted, declined or deferred and why. Rate negotiation is handed to a person.' },
      { q: 'Does Eligoo track shipments or handle documentation?', a: 'No. Eligoo covers sales and marketing: prospecting, outreach, calling, content, creative and CRM. Shipment tracking, bookings and documentation stay in your forwarding system.' },
      { q: 'Can it prospect overseas partner agents as well as shippers?', a: 'Yes. Radar can build a list of forwarders in a destination country by lane and service, Hook can qualify them on volumes and services, and Ledger keeps the partner pipeline separate from the shipper pipeline.' },
      { q: 'What do we need to start?', a: 'Your lanes and target commodities, a qualification threshold, a connected mailbox, a phone number on a supported SIP trunk and a calendar. Reference shipments and lane facts make the content and calls far more credible.' },
    ]),
    related([
      LINKS.sales, LINKS.voice, LINKS.leadGen, LINKS.outbound, LINKS.marketing, LINKS.radar, LINKS.hook,
      { label: 'AI for manufacturing companies', href: '/industries/manufacturing/' },
      { label: 'AI for packaging companies', href: '/industries/packaging/' },
      { label: 'AI for solar companies', href: '/industries/solar/' },
      { label: 'AI for industrial automation companies', href: '/industries/industrial-automation/' },
    ]),
    cta('Fill the lane with qualified shippers', `Start with a shipper list for one lane and an approved sequence; add calling and quote follow-up as the pipeline forms. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.industries,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
