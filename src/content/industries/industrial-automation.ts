import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/industries/industrial-automation/',
  title: 'AI for Industrial Automation Companies',
  eyebrow: 'Industries · Industrial automation',
  metaTitle: 'AI for Industrial Automation Companies — Plant and OEM Prospecting, Project Qualification | Eligoo',
  metaDescription: 'Eligoo’s AI employees help automation vendors, system integrators and control-panel builders find plant managers, OEMs and integrators, qualify projects on the phone, follow up on proposals and keep the pipeline clean.',
  primaryKeyword: 'AI for industrial automation companies',
  secondaryKeywords: ['AI employees for industrial automation', 'AI sales automation for industrial automation', 'AI lead generation for industrial automation', 'AI voice agents for industrial automation', 'AI cold calling for industrial automation', 'AI marketing automation for industrial automation', 'AI outbound sales for industrial automation'],
  answer: 'AI for industrial automation companies means AI employees that find plant managers, maintenance heads, OEM design teams and system integrators who buy automation, qualify them on the line, the problem and the project timeline, follow up on proposals and keep the opportunity record straight. Eligoo gives automation vendors, integrators and panel builders eight AI employees for this in one workspace, with a person approving every campaign.',
  sections: [
    {
      kind: 'prose',
      heading: 'What AI employees do for industrial automation companies',
      paragraphs: [
        'Automation is sold to engineers by engineers, and the sales cycle runs from a plant problem or a capex plan through a site visit, a proposal and often a tender. The people who can hold that conversation are also commissioning the last project. Eligoo’s AI employees handle the front end — finding plants and OEMs with a likely project, qualifying the problem and timing on the phone, booking the site visit and chasing proposals — so application engineers visit plants that have a real project.',
        'Radar finds manufacturing plants by sector, process and size, with plant-head, maintenance, electrical and projects contacts; for component vendors it finds OEMs and system integrators. Maven picks the application to lead with — retrofit, line upgrade, energy monitoring, SCADA, machine safety, robotics — and writes the brief. Sage writes sequences, application notes and posts. Hook sends, calls, qualifies on line, problem, budget window and decision path, and books the visit. Pixel produces product and installation visuals. Ledger tracks proposals, tenders and integrator accounts. Atlas keeps the plan on track.',
        'Integrators and distributors get the same team pointed at their own channel: finding end users for a principal’s product line, or qualifying integrator partners for a vendor.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo works for industrial automation companies',
      steps: [
        { title: 'Radar identifies prospects', text: 'Radar builds a list of plants by sector (pharma, food, automotive, chemicals, textiles, cement), process and size, with plant-head, maintenance, electrical, instrumentation and projects contacts; for component and software vendors it builds OEM and system-integrator lists. It picks up signals such as a new line, a capacity expansion, a quality or energy initiative or hiring in controls, verifies contacts and scores each account.' },
        { title: 'Maven develops the campaign', text: 'Maven writes the brief per application: the plant problem you solve (downtime, changeover, traceability, energy, safety compliance), the argument for your approach, who initiates and who approves at that kind of plant, the objections (existing vendor standard, downtime for installation, budget cycle) and what a qualified visit looks like — a named line, a stated problem, a timeline and a decision path.' },
        { title: 'Sage creates content', text: 'Sage writes the outreach sequence, application notes, proposal follow-up emails, case-study outlines for commissioned projects and posts about installations. Product and application pages are built around the searches plant engineers make about a specific problem or process.' },
        { title: 'Hook calls prospects', text: 'Hook sends the approved sequence from your mailbox and calls the contacts who do not reply, inside the calling window. On the call it confirms which line or process is in question, what the current control setup is, what problem is driving interest, whether there is a budget window or capex plan, and who else is involved — then books a site visit or a technical call with your application engineer.' },
        { title: 'Pixel creates creatives', text: 'Pixel produces product and panel images, installation and HMI visuals, short commissioning videos with captions, thumbnails and resized variants for LinkedIn, YouTube and ads. Assets go to the library; Pixel does not publish.' },
        { title: 'Ledger tracks revenue', text: 'Ledger keeps site-visit, proposal, tender and PO status on each opportunity, reconciles duplicate records from exhibitions and distributor leads, reports pipeline by application and sector, attributes visits to campaigns and maintains a forecast with the evidence behind it.' },
        { title: 'Atlas coordinates everything', text: 'Atlas turns an objective — a target number of site visits in a sector, a new application to launch, an integrator network to recruit — into assigned tasks, reviews progress hourly, keeps the risk register and approval queue, and sends a weekly plan.' },
      ],
    },
    {
      kind: 'features',
      heading: 'Automation workflows Eligoo handles',
      items: [
        { title: 'Project qualification', text: 'Line, current setup, driving problem, budget window and decision path confirmed before an engineer visits.', icon: 'target' },
        { title: 'Site visit and technical call booking', text: 'A qualified call ends with a slot on the application engineer’s calendar and a brief of what the plant said.', icon: 'calendar' },
        { title: 'Proposal and tender follow-up', text: 'Issued proposals and submitted tenders get scheduled follow-ups; outcomes and reasons are recorded.', icon: 'mail' },
        { title: 'Integrator and distributor recruitment', text: 'For vendors: find integrators by region and competence, qualify on projects and brands carried, book a partnership discussion.', icon: 'users' },
        { title: 'Exhibition and webinar follow-up', text: 'Every badge and registration is de-duplicated, enriched and called within the week.', icon: 'megaphone' },
        { title: 'Application content', text: 'Application notes, comparisons and installation posts written from your specifications and completed projects.', icon: 'pen' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a system integrator launching an energy-monitoring offer',
      scenario: 'A control-systems integrator with strong PLC and SCADA references wants to sell an energy-monitoring retrofit to mid-sized process plants.',
      steps: [
        'Atlas sets the objective as a monthly site-visit target and creates the list, campaign, content and calling tasks.',
        'Radar builds a list of process plants in the target region with plant-head, electrical and maintenance contacts, and flags plants with energy-efficiency commitments or recent expansion.',
        'Maven writes the brief: lead with visibility of energy per line and quick installation without downtime, expect the existing-vendor objection, and define a qualified visit as a named line, a stated energy concern and a budget window.',
        'Sage writes a four-step sequence and an application note; Pixel produces a dashboard walkthrough video and an installation image set.',
        'After approval Hook runs the sequence, calls non-responders, qualifies on line and problem, and books site visits with the application engineer.',
        'Ledger tracks visits held, proposals issued and POs received, and reports which sector and plant size converted.',
      ],
      outcome: 'The application engineer visits plants with a named line and a real energy concern, and every process plant in the region is in the CRM with its status and next step.',
    },
    employees(['radar', 'maven', 'sage', 'hook', 'pixel', 'ledger', 'atlas'], 'The AI employees on an automation sales team', undefined, {
      radar: 'Plant, OEM and integrator lists with verified engineering contacts.',
      maven: 'Application choice, plant-problem argument, brief.',
      sage: 'Sequences, application notes, proposal follow-ups, posts.',
      hook: 'Outreach, calls, project qualification, visit booking.',
      pixel: 'Product, panel and installation visuals, videos.',
      ledger: 'Visit, proposal, tender and PO tracking, attribution, forecast.',
      atlas: 'Objectives into tasks, risk register, weekly plan.',
    }),
    pricingPointer('the team'),
    faq([
      { q: 'Can AI find plant managers and OEMs that need automation?', a: 'Radar searches by sector, process, size and location, researches each plant or OEM with web search for expansion, quality and energy signals, verifies the engineering and projects contacts and scores them. It hands you a list for approval; it does not contact anyone.' },
      { q: 'How does the AI voice agent qualify an automation project?', a: 'Hook asks the questions you set — which line, current control setup, the driving problem, budget window, decision path — records the answers on the lead and books a site visit or technical call if the project fits. It does not specify a solution or a price; that goes to your engineers.' },
      { q: 'Can it handle technical questions on the call?', a: 'Hook can answer from the brief and the application notes you provide, at the level a first conversation needs. Detailed technical questions, compatibility with an existing system and any commitment are outside its boundary and are handed to a person with a note.' },
      { q: 'Does Eligoo follow up on tenders?', a: 'Yes. Submitted tenders are tracked by Ledger, and Hook makes follow-up calls or sends emails at the interval you choose, recording the outcome. Clarifications and commercial negotiation are handed to a person.' },
      { q: 'Can a vendor use it to recruit system integrators?', a: 'Yes. Radar builds integrator lists by region and competence, Hook qualifies them on projects, sectors and brands carried, and Ledger keeps the partner pipeline separate from end-user opportunities.' },
      { q: 'What do we need to start?', a: 'Your target sectors and applications, a qualification threshold, a connected mailbox, a phone number on a supported SIP trunk and a calendar. Application notes and commissioned-project details make the content and calls much stronger.' },
    ]),
    related([
      LINKS.sales, LINKS.voice, LINKS.leadGen, LINKS.outbound, LINKS.marketing, LINKS.radar, LINKS.hook,
      { label: 'AI for manufacturing companies', href: '/industries/manufacturing/' },
      { label: 'AI for packaging companies', href: '/industries/packaging/' },
      { label: 'AI for solar companies', href: '/industries/solar/' },
      { label: 'AI for freight forwarding companies', href: '/industries/freight-forwarding/' },
    ]),
    cta('Send your engineers to qualified projects', `Start with a plant list for one application and an approved sequence; add calling and proposal follow-up as opportunities open. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.industries,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
