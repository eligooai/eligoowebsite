import type { PageContent } from '../types';
import { HOME, LINKS, cta, related } from '../helpers';

const page: PageContent = {
  slug: '/industries/',
  title: 'AI for Industrial and B2B Companies',
  eyebrow: 'Industries',
  metaTitle: 'AI for Industrial and B2B Companies — Manufacturing, Packaging, Solar, Freight, Automation | Eligoo',
  metaDescription: 'How Eligoo’s AI employees work for manufacturing, packaging, solar, freight forwarding and industrial automation companies: prospecting, outreach, calling, content, creative, CRM and reporting in one team.',
  primaryKeyword: 'AI for industrial companies',
  secondaryKeywords: ['AI for B2B companies', 'AI employees for industrial companies', 'AI sales automation for B2B', 'AI lead generation for industrial companies', 'AI voice agents for B2B sales'],
  answer: 'Eligoo builds AI teams for industrial and business-to-business companies that sell through long cycles, quotations, distributors and trade shows. Each industry page below shows how the same eight AI employees are pointed at that industry: who Radar looks for, what Maven leads with, what Hook asks on the phone, and what Ledger reports.',
  sections: [
    {
      kind: 'prose',
      heading: 'One team, applied to each industry',
      paragraphs: [
        'Every industry page combines marketing, sales, voice, lead generation, outbound, CRM and analytics rather than describing a single tool. That reflects how the work actually happens in an industrial company: a list is built, a campaign is planned, content is written, prospects are called and qualified, creative is produced, revenue is tracked and someone coordinates it all. In Eligoo those seven jobs belong to Radar, Maven, Sage, Hook, Pixel, Ledger and Atlas, with Boost available when you run paid campaigns.',
        'What changes from industry to industry is the substance: what a good prospect looks like, which questions qualify them, how long the cycle runs and where deals go quiet. The pages below are written around those specifics. If your industry is not listed, the closest page will still show you how the team is configured; the same workflow applies to most B2B sales organisations.',
      ],
    },
    {
      kind: 'directory',
      heading: 'Industries',
      items: [
        { title: 'Manufacturing', text: 'Buyers and engineers at OEMs and distributors, RFQ follow-up, distributor development, trade-show follow-up and capability content.', href: '/industries/manufacturing/' },
        { title: 'Packaging', text: 'Brand owners and co-packers qualified by SKU count and volume, sample and quote follow-up, category campaigns and pack-shot creative.', href: '/industries/packaging/' },
        { title: 'Solar', text: 'Commercial rooftop and land owners qualified on site and load, survey booking, proposal and tender follow-up, installer development for distributors.', href: '/industries/solar/' },
        { title: 'Freight forwarding', text: 'Importers and exporters qualified by lane, mode and volume, rate-quote follow-up, lane campaigns and partner-agent development.', href: '/industries/freight-forwarding/' },
        { title: 'Industrial automation', text: 'Plant managers, OEMs and system integrators qualified on line, problem and timeline, site-visit booking, proposal and tender follow-up.', href: '/industries/industrial-automation/' },
      ],
    },
    related([LINKS.sales, LINKS.voice, LINKS.leadGen, LINKS.outbound, LINKS.marketing, LINKS.aiEmployees, LINKS.useCases]),
    cta('See the team configured for your industry', 'Start a free trial, describe your industry and target accounts, and Atlas will draft the first operating plan for your approval.'),
  ],
  breadcrumb: [HOME],
  schema: ['CollectionPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
