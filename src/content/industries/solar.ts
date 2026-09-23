import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/industries/solar/',
  title: 'AI for Solar Companies',
  eyebrow: 'Industries · Solar',
  metaTitle: 'AI for Solar Companies — Commercial Rooftop Leads, Site Qualification, Tender Follow-up | Eligoo',
  metaDescription: 'Eligoo’s AI employees help solar EPCs, installers and module distributors find commercial rooftop owners and industrial buyers, qualify site and load on the phone, follow up on proposals and tenders, and report the pipeline.',
  primaryKeyword: 'AI for solar companies',
  secondaryKeywords: ['AI employees for solar', 'AI sales automation for solar', 'AI lead generation for solar companies', 'AI voice agents for solar', 'AI cold calling for solar companies', 'AI marketing automation for solar', 'AI outbound sales for solar'],
  answer: 'AI for solar companies means AI employees that find commercial and industrial rooftop owners, qualify them on site, load and ownership before a survey is booked, follow up on proposals and tenders, and keep every opportunity in the CRM. Eligoo gives solar EPCs, installers and distributors eight AI employees that do this in one workspace, with a person approving every campaign before it runs.',
  sections: [
    {
      kind: 'prose',
      heading: 'What AI employees do for solar companies',
      paragraphs: [
        'Commercial and industrial solar is sold to a facility owner or finance head who has to be found, educated and brought to a site survey, then walked through a proposal that may sit for months. Installers and EPCs typically have a thin sales team doing all of that alongside project handover. Eligoo’s AI employees take the front of the process — finding rooftop and land owners with a real load, qualifying them on the phone, booking surveys and chasing proposals — so engineers survey sites that are worth surveying and proposals do not go quiet.',
        'Radar finds factories, warehouses, cold stores, hospitals, schools and commercial buildings in your service area, with owner, operations and finance contacts. Maven decides which segment and which argument to lead with: tariff exposure, captive consumption, open-access, net metering, a capex or opex model. Sage writes the sequences, explainers and posts. Hook calls and qualifies on roof area, connected load, monthly bill, ownership and shading, then books the survey. Pixel produces site visualisations and short project videos. Ledger tracks surveys, proposals and tenders. Atlas runs the plan.',
        'The same team works for module and inverter distributors selling to installers: Radar builds the installer list, Hook qualifies on monthly volume and current brands, and Ledger tracks dealer accounts.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo works for solar companies',
      steps: [
        { title: 'Radar identifies prospects', text: 'Radar builds a list of commercial and industrial rooftop owners — manufacturing units, warehouses, cold storage, textile mills, hospitals, education campuses, commercial buildings — in the districts you serve, and for distributors a list of installers and EPCs. It verifies the owner, plant-head, facilities and finance contacts, researches each site with web search, removes existing customers and scores fit by likely load and roof.' },
        { title: 'Maven develops the campaign', text: 'Maven writes the brief per segment: the tariff and consumption argument for that kind of facility, whether to lead with a capex purchase or an opex model, what the objections are (roof condition, ownership, lease term, DISCOM approvals) and what a qualified survey looks like — owned roof, connected load above your threshold, decision-maker identified.' },
        { title: 'Sage creates content', text: 'Sage writes the outreach sequence, a plain-language explainer of savings drivers and the approval process, proposal follow-up emails, case-study outlines for completed plants and posts about commissioned projects. Service pages are built around the searches facility owners make about rooftop solar for their kind of building.' },
        { title: 'Hook calls prospects', text: 'Hook sends the approved sequence and calls the contacts who do not reply. On the call it confirms roof or land ownership, approximate roof area, connected load and monthly electricity spend, single- or multi-shift operation, and who decides — then books a site survey with your engineer. Proposals already issued get a follow-up call at a set interval.' },
        { title: 'Pixel creates creatives', text: 'Pixel produces rooftop visualisations from site imagery, before-and-after project images, short commissioning videos with captions, thumbnails and ad variants sized for each channel. All assets go to the library for approval.' },
        { title: 'Ledger tracks revenue', text: 'Ledger keeps survey, proposal, tender and approval status on each opportunity, reconciles duplicate leads from portals and events, reports pipeline by segment and capacity, attributes surveys to campaigns and maintains a forecast with the evidence behind it.' },
        { title: 'Atlas coordinates everything', text: 'Atlas turns a target — say, a number of surveys per month in a new district — into tasks for each employee, reviews progress hourly, keeps the risk register (permit delays, quiet proposals) and the approval queue, and reports weekly.' },
      ],
    },
    {
      kind: 'features',
      heading: 'Solar workflows Eligoo handles',
      items: [
        { title: 'Site and load qualification', text: 'Ownership, roof area, connected load, monthly bill and shift pattern confirmed on the call before an engineer visits.', icon: 'target' },
        { title: 'Survey booking', text: 'A qualified call ends with a survey slot on the engineer’s calendar and a brief of what the site owner said.', icon: 'calendar' },
        { title: 'Proposal and tender follow-up', text: 'Issued proposals and submitted tenders get scheduled follow-ups; outcomes and reasons are recorded.', icon: 'mail' },
        { title: 'Installer and dealer development', text: 'For distributors: find installers by territory, qualify on monthly volume and brands carried, book a commercial discussion.', icon: 'globe' },
        { title: 'Inbound enquiry handling', text: 'Calls from your website or listings are answered, the site details captured and a survey offered; technical questions go to a person.', icon: 'phone' },
        { title: 'Project content', text: 'Commissioning posts, explainers and case-study outlines from real plant data you provide.', icon: 'pen' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: an EPC opening a new industrial district',
      scenario: 'A rooftop solar EPC with a strong reference base in one industrial cluster wants surveys in a neighbouring district where it has no relationships.',
      steps: [
        'Atlas sets the objective as a monthly survey target and creates the list, campaign, content and calling tasks.',
        'Radar builds a list of manufacturing units and warehouses in the district with owner and plant-head contacts, and flags multi-shift plants and cold stores as high-load.',
        'Maven writes the brief: lead with the reference plants nearby, explain captive consumption savings in plain terms, offer a free survey rather than a proposal on the first call.',
        'Sage writes the sequence and a one-page explainer; Pixel produces a short video from the nearest commissioned plant.',
        'After approval, Hook runs the sequence, calls non-responders during business hours, qualifies on ownership, load and bill, and books surveys for the engineer.',
        'Ledger tracks surveys booked, surveys held, proposals issued and which segment converted, so the next month’s list is weighted accordingly.',
      ],
      outcome: 'The engineer’s calendar fills with surveys at owned sites with a real load, and every prospect in the district is in the CRM with its status and next step.',
    },
    employees(['radar', 'maven', 'sage', 'hook', 'pixel', 'ledger', 'atlas'], 'The AI employees on a solar team', undefined, {
      radar: 'Rooftop and land owner lists; installer lists for distributors.',
      maven: 'Segment, tariff argument, capex vs opex positioning, brief.',
      sage: 'Sequences, explainers, proposal follow-ups, project posts.',
      hook: 'Calls, site and load qualification, survey booking, follow-up.',
      pixel: 'Site visualisations, project videos, ad variants.',
      ledger: 'Survey, proposal and tender tracking, attribution, forecast.',
      atlas: 'Targets into tasks, risk register, weekly plan.',
    }),
    pricingPointer('the team'),
    faq([
      { q: 'Can AI generate commercial solar leads?', a: 'Radar builds lists of commercial and industrial facilities in your service area with verified decision-maker contacts, researched and scored. Those become leads once Hook has contacted and qualified them under a campaign you approved. Eligoo does not buy or resell lead lists.' },
      { q: 'How does the AI voice agent qualify a rooftop solar prospect?', a: 'It asks the questions you set — ownership, roof area, connected load, monthly electricity spend, shifts, decision-maker — records the answers on the lead and books a survey if the site clears your threshold. It does not quote a system size or a price; that goes to your engineer.' },
      { q: 'Can Eligoo follow up on tenders and proposals?', a: 'Yes. Issued proposals and submitted tenders are tracked by Ledger, and Hook makes a follow-up call or sends an email at the interval you choose, recording the outcome. Negotiation and revised commercial terms are handed to a person.' },
      { q: 'Does it work for residential solar?', a: 'The employees can run residential campaigns, but Eligoo is built for business-to-business sales. Commercial and industrial rooftops, distributors selling to installers and EPCs selling to developers are the fit.' },
      { q: 'Can it call in regional languages?', a: 'Call language is set in the voice configuration. Indian languages are available through the supported speech and voice providers; test calls from the browser let you check the result before any campaign runs.' },
      { q: 'What does the solar company need to provide?', a: 'Your service area, the facility types you target, your qualification threshold, a connected mailbox, a phone number on a supported SIP trunk and a calendar. Reference plants and photos make the content and creative far better.' },
    ]),
    related([
      LINKS.sales, LINKS.voice, LINKS.leadGen, LINKS.outbound, LINKS.marketing, LINKS.radar, LINKS.hook,
      { label: 'AI for manufacturing companies', href: '/industries/manufacturing/' },
      { label: 'AI for packaging companies', href: '/industries/packaging/' },
      { label: 'AI for freight forwarding companies', href: '/industries/freight-forwarding/' },
      { label: 'AI for industrial automation companies', href: '/industries/industrial-automation/' },
    ]),
    cta('Book more qualified site surveys', `Start with a facility list for one district and an approved sequence; add calling when the list is ready. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.industries,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
