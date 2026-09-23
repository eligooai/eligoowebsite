import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/industries/packaging/',
  title: 'AI for Packaging Companies',
  eyebrow: 'Industries · Packaging',
  metaTitle: 'AI for Packaging Companies — Find Brand Owners, Qualify SKUs and Volumes, Book Meetings | Eligoo',
  metaDescription: 'Eligoo’s AI employees help packaging manufacturers and converters find brand owners and co-packers, qualify by SKU and volume, follow up on samples and quotes, and produce content that sells the line.',
  primaryKeyword: 'AI for packaging companies',
  secondaryKeywords: ['AI employees for packaging', 'AI sales automation for packaging', 'AI lead generation for packaging companies', 'AI voice agents for packaging', 'AI cold calling for packaging companies', 'AI marketing automation for packaging', 'AI outbound sales for packaging'],
  answer: 'AI for packaging companies means AI employees that find the brand owners, co-packers and contract manufacturers who buy packaging, qualify them by product, SKU count and annual volume, follow up on samples and quotations, and keep the account record straight. Eligoo provides eight such employees in one workspace: research, campaign strategy, content, calling, creative, revenue tracking and coordination, with a person approving every outward action.',
  sections: [
    {
      kind: 'prose',
      heading: 'What AI employees do for packaging companies',
      paragraphs: [
        'Packaging is sold on specification, sample and price, and every new account starts with a conversation about what the buyer fills, how many SKUs they run and how many units a year they need. That first conversation is the bottleneck: a converter or corrugated plant usually has a handful of sales people who are also managing artwork approvals, tooling and reorders for existing accounts. Eligoo’s AI employees take the top of that funnel — list building, outreach, first calls, sample and quote follow-up — so the sales team meets buyers who are already qualified on product, volume and timing.',
        'Radar builds the account list: brands launching products, co-packers adding lines, food and beverage or personal-care manufacturers in a territory, with the procurement, packaging development and operations contacts at each. Maven decides which category to lead with and what to say about material, structure, print, lead time or sustainability. Sage writes the sequences and the product content. Hook sends, calls and books. Pixel produces pack shots, dieline visualisations and short line videos. Ledger tracks samples, quotes and reorders. Atlas keeps the whole thing on plan.',
        'Approval sits between the plan and the world. Sequences are enrolled, calling campaigns started and posts published only after a person confirms, and every decision is logged.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo works for packaging companies',
      steps: [
        { title: 'Radar identifies prospects', text: 'Radar finds brand owners, co-packers and contract fillers that use the formats you produce — flexible pouches, cartons, corrugated, labels, rigid containers — by category, size and territory. It picks up signals such as a new product line, a new facility or a sustainability commitment, verifies packaging development, procurement and operations contacts, and scores each account for fit and urgency.' },
        { title: 'Maven develops the campaign', text: 'Maven writes the campaign brief: which format and category to lead with, the substitution argument (material change, lighter structure, print quality, minimum run, lead time), who signs off on packaging at that kind of company, and what a qualified first meeting should confirm — SKU count, annual volume, current supplier and the next artwork or reorder window.' },
        { title: 'Sage creates content', text: 'Sage writes the outreach sequence, a format-by-format capability page, sample-request and quote follow-up emails, and social posts that show real jobs. Product pages are structured around the searches a packaging buyer makes: material, format, print process, run size.' },
        { title: 'Hook calls prospects', text: 'Hook runs the approved sequence from your mailbox and calls the contacts who do not reply, inside your calling window. It confirms what they fill, how many SKUs, approximate annual units, whether artwork is fixed, and when their current contract or reorder is due, then books a sample review or plant visit with your sales person.' },
        { title: 'Pixel creates creatives', text: 'Pixel produces pack shots, mock-ups of your structures with a prospect’s category in mind, short line and finishing videos, thumbnails and resized variants for LinkedIn, Instagram and ads. Assets go into the library for approval; Pixel never publishes.' },
        { title: 'Ledger tracks revenue', text: 'Ledger keeps sample, quotation and tooling status on each account, reconciles duplicate records from exhibitions and enquiries, reports pipeline by format and category, attributes meetings to campaigns and produces a forecast with its evidence.' },
        { title: 'Atlas coordinates everything', text: 'Atlas takes an objective — fill spare capacity on a specific line, open a new category, grow a territory — and turns it into assigned tasks, reviews progress hourly, keeps the risk register and the approval queue, and sends a weekly plan.' },
      ],
    },
    {
      kind: 'features',
      heading: 'Packaging workflows Eligoo handles',
      items: [
        { title: 'SKU and volume qualification', text: 'Every first conversation confirms product, SKU count, annual units and timing before a sales person is involved.', icon: 'target' },
        { title: 'Sample and quote follow-up', text: 'Samples sent and quotes issued get a scheduled follow-up call and email; the outcome and reason are written to the account.', icon: 'mail' },
        { title: 'Category campaigns', text: 'One campaign per category — snacks, beverages, personal care, pharma, e-commerce — with messaging and creative specific to it.', icon: 'layers' },
        { title: 'Exhibition follow-up', text: 'Every badge from a packaging or food-industry show is de-duplicated, enriched and called within the week.', icon: 'users' },
        { title: 'Reorder and contract timing', text: 'Accounts that are under contract elsewhere are nurtured until the renewal window, with a reminder task at the right time.', icon: 'clock' },
        { title: 'Format and material content', text: 'Capability pages, comparison articles and posts written from your specifications and finished jobs.', icon: 'pen' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a flexible packaging converter targeting snack brands',
      scenario: 'A converter with new pouch-making capacity wants to add regional snack brands to a customer base that is mostly private label.',
      steps: [
        'Radar lists snack brands in the target states with their packaging development and procurement contacts, and flags recent product launches and new SKUs seen on retailer sites.',
        'Maven positions the offer around short runs, quick artwork turnaround and a recyclable structure, and defines a qualified meeting as one where SKU count, volume and next reorder are known.',
        'Sage writes a three-step sequence and a pouch capability page; Pixel produces pack-shot mock-ups in the snack category and a short line video.',
        'The sequence is approved and Hook sends it, then calls non-responders to qualify and offer a sample pack. Interested brands are booked with the sales manager.',
        'Ledger tracks which samples were sent, which quotes followed and which brands asked for a plant visit, and reports it by brand size.',
      ],
      outcome: 'The sales manager spends her week in sample reviews with brands that fit the line, and the CRM shows every snack account, its status and the next step.',
    },
    employees(['radar', 'maven', 'sage', 'hook', 'pixel', 'ledger', 'atlas'], 'The AI employees on a packaging team', undefined, {
      radar: 'Brand owner and co-packer lists with verified packaging contacts.',
      maven: 'Category choice, substitution argument, campaign brief.',
      sage: 'Sequences, capability pages, follow-up emails, social posts.',
      hook: 'Outreach, calls, SKU and volume qualification, bookings.',
      pixel: 'Pack shots, mock-ups, line videos, ad variants.',
      ledger: 'Sample, quote and reorder tracking, attribution, forecast.',
      atlas: 'Objectives into tasks, weekly plan, approval queue.',
    }),
    pricingPointer('the team'),
    faq([
      { q: 'How does AI qualify a packaging buyer?', a: 'Hook asks the questions you define on a call or in an email thread: what they fill, how many SKUs, annual units, whether artwork is fixed, who their current supplier is and when the next reorder or contract review is. The answers are stored on the lead and used to decide whether to book a meeting.' },
      { q: 'Can AI find brand owners and co-packers that need packaging?', a: 'Radar searches by category, company size and territory, researches each account with web search for launch and facility signals, verifies the packaging, procurement and operations contacts and de-duplicates them against your CRM. It hands you a scored list; it does not contact anyone.' },
      { q: 'Can the AI voice agent handle a sample or quote follow-up call?', a: 'Yes. A follow-up campaign calls each contact at the interval you set, asks whether the sample was received and reviewed or the quote is being considered, records the answer and books the next step. Price changes and commercial commitments are handed to a person.' },
      { q: 'Can Eligoo produce packaging visuals?', a: 'Pixel generates and edits images and video, so it can produce pack shots, mock-ups and short line videos from your photos and renders. It does not replace structural design or artwork proofing, and it never publishes on its own.' },
      { q: 'Does Eligoo manage artwork approvals or job tickets?', a: 'No. Eligoo covers the commercial side: prospecting, outreach, calling, content, creative and CRM. Artwork workflow, estimating and production scheduling stay in the systems you use for them.' },
      { q: 'Which channels does Eligoo publish packaging content to?', a: 'Sage publishes approved posts to LinkedIn, Instagram, Facebook Pages, Threads and YouTube through direct connections, and writes website copy for you to publish on your site.' },
    ]),
    related([
      LINKS.sales, LINKS.voice, LINKS.leadGen, LINKS.outbound, LINKS.marketing, LINKS.radar, LINKS.hook,
      { label: 'AI for manufacturing companies', href: '/industries/manufacturing/' },
      { label: 'AI for solar companies', href: '/industries/solar/' },
      { label: 'AI for freight forwarding companies', href: '/industries/freight-forwarding/' },
      { label: 'AI for industrial automation companies', href: '/industries/industrial-automation/' },
    ]),
    cta('Fill the line with qualified packaging accounts', `Start with a category list and one approved sequence; add calling and creative when you are ready. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.industries,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
