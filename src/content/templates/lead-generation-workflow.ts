import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/templates/lead-generation-workflow/',
  title: 'Lead Generation Workflow Template',
  eyebrow: 'Templates',
  metaTitle: 'Lead Generation Workflow Template — Profile, Find, Enrich, Verify, Score, Segment | Eligoo',
  metaDescription: 'A copyable AI lead generation workflow: Maven defines the profile, Radar finds, enriches, verifies, de-duplicates and scores contacts, Ledger keeps the CRM clean. Setup steps, inputs, outputs and KPI.',
  primaryKeyword: 'lead generation workflow',
  secondaryKeywords: ['lead generation workflow template', 'AI lead generation process', 'B2B lead generation workflow', 'AI prospecting workflow', 'lead list building process', 'lead scoring workflow'],
  answer: 'This workflow produces a verified, scored, segmented list of prospects that fit your ideal customer profile, ready for outreach — without contacting anyone. Maven defines the profile and the scoring criteria, Radar finds accounts and contacts, researches, enriches, verifies, de-duplicates and scores them, and Ledger keeps the resulting records clean in the CRM.',
  sections: [
    {
      kind: 'prose',
      heading: 'When to use this template',
      paragraphs: [
        'Use it when your outreach is limited by the list rather than the message: you know who you want to reach but building and cleaning the list takes days, or the list you bought is full of duplicates, wrong roles and dead numbers. It also suits a business testing a new segment that wants to see the list before committing to outreach.',
        'This template stops at the list on purpose. Contacting the prospects is the sales, cold-calling or appointment-setting workflow; separating the two means you can review and approve the list before a single message goes out.',
      ],
    },
    {
      kind: 'workflow',
      heading: 'The workflow',
      stages: [
        { label: 'Define the profile', owner: 'maven', detail: 'Ideal customer profile, disqualifiers, scoring criteria for fit, intent and urgency' },
        { label: 'Find accounts', owner: 'radar', detail: 'Companies matching the profile from the prospect database and web research' },
        { label: 'Find contacts', owner: 'radar', detail: 'The roles that buy and the roles that influence, per account' },
        { label: 'Research and enrich', owner: 'radar', detail: 'Web research, missing emails and phones, recent signals, source links' },
        { label: 'Verify and de-duplicate', owner: 'radar', detail: 'Against the CRM and the suppression list' },
        { label: 'Score and segment', owner: 'radar', detail: 'Fit, intent, urgency; grouped for different messages' },
        { label: 'Keep the records clean', owner: 'ledger', detail: 'Audit trail, exception queue for ambiguous matches' },
      ],
    },
    {
      kind: 'steps',
      heading: 'Set it up in Eligoo',
      steps: [
        { title: 'Connect Apollo and Serper', text: 'Apollo provides people search (no Apollo credits) and enrichment (uses Apollo credits); Serper gives Radar Google search for research. Connect an AI provider account for the model.' },
        { title: 'Write the ideal customer profile with Maven', text: 'Industry, company size, region, roles, the signals that make an account worth contacting now, and the disqualifiers. Maven turns your description of good customers into a profile and scoring criteria.' },
        { title: 'Load your suppression list and existing CRM data', text: 'Current customers, opt-outs, competitors and any list you have already worked. Radar de-duplicates against them so no one is found twice.' },
        { title: 'Assign Radar the list-building task', text: 'Give the profile, the target size and the segments you want. Radar searches, researches each account, enriches contacts, verifies and scores.' },
        { title: 'Review a sample', text: 'Check a sample of accounts and contacts against your own judgement. Adjust the profile or the scoring with Maven if the sample is off; Radar re-runs.' },
        { title: 'Approve the list into the CRM', text: 'Approved records land in the CRM with their score, segment, rationale and source links. Ambiguous matches go to Ledger’s exception queue.' },
        { title: 'Schedule a refresh', text: 'Set an automation so Radar re-runs the search on a schedule and adds new matches, with the same verification and de-duplication.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Approval points',
      items: [
        'The ideal customer profile and scoring criteria.',
        'The sample review before the full list is written to the CRM.',
        'Exception-queue decisions on ambiguous duplicates or matches.',
        'Note: nothing in this workflow contacts a prospect, so there is no outreach approval. That comes in the workflow you run next.',
      ],
    },
    {
      kind: 'list',
      heading: 'Inputs you need',
      items: [
        'A description of your best customers and of the ones that were a poor fit.',
        'The roles you sell to and the roles that block or influence.',
        'Regions, industries and company sizes in and out of scope.',
        'A suppression list and your existing CRM export.',
        'A target list size and the segments you want it split into.',
      ],
    },
    {
      kind: 'list',
      heading: 'Outputs and KPI',
      items: [
        'KPI: share of the list that proves to be a genuine fit once contacted (measured by the outreach workflow that follows).',
        'Watch alongside: verification rate, duplicate rate, contacts per account, time from request to approved list.',
        'A list of accounts and contacts in the CRM with fit, intent and urgency scores.',
        'A rationale and source links per record, so anyone can see why it was included.',
        'Segments ready for different messages.',
        'An exception queue of ambiguous matches with Ledger’s recommendation.',
      ],
    },
    {
      kind: 'example',
      heading: 'Example: building a list of solar-ready commercial properties',
      scenario: 'A commercial solar installer wants to reach factory and warehouse owners in two districts, but its existing list is a mix of residential leads and companies it has already quoted.',
      steps: [
        'Maven turns the installer’s description of its best projects into a profile: roofed industrial premises above a size threshold, single-owner companies, no existing rooftop system, plus disqualifiers for leased premises.',
        'Radar finds companies in the two districts, identifies owners and facilities managers, researches each site, fills in missing emails and phones and links the sources.',
        'Radar removes everything already quoted and everything on the opt-out list, scores each account and splits the list into owner-occupied and multi-site groups.',
        'The installer reviews a sample, tightens the size threshold, and approves the re-run into the CRM; Ledger queues a handful of possible duplicates for a decision.',
      ],
      outcome: 'A segmented list of properties the installer has not approached, each with a reason for inclusion and a verified contact, ready for the appointment-setting workflow.',
    },
    faq([
      { q: 'Does this workflow contact anyone?', a: 'No. Radar never contacts prospects. The list is built, verified and approved first; outreach is a separate workflow with its own approval.' },
      { q: 'Where do the contacts come from?', a: 'Apollo people search for accounts and contacts, web research through Serper for context and signals, and your own CRM for de-duplication. Enrichment through Apollo uses your Apollo credits.' },
      { q: 'How is the list scored?', a: 'Against the criteria Maven wrote with you: fit (does the account match the profile), intent (signals that it is looking) and urgency (why now). Each record carries its rationale.' },
      { q: 'How do I keep the list fresh?', a: 'Schedule Radar to re-run the search as an automation. New matches go through the same verification and de-duplication, and Ledger keeps the records clean over time.' },
      { q: 'What happens with duplicates that are not obvious?', a: 'They go to Ledger’s exception queue with a recommendation. Ledger never deletes a record; a person decides.' },
    ]),
    related([
      LINKS.leadGen, LINKS.ucLeadGen, LINKS.radar, LINKS.maven, LINKS.ledger,
      { label: 'Apollo integration', href: '/integrations/apollo/' }, { label: 'Serper integration', href: '/integrations/serper/' },
      { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' },
      { label: 'AI cold calling workflow template', href: '/resources/templates/ai-cold-calling-workflow/' },
      { label: 'AI CRM workflow template', href: '/resources/templates/ai-crm-workflow/' },
    ]),
    cta('Build a list you would be happy to call', 'Define the profile with Maven, let Radar find and verify, approve the sample. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.templates,
  schema: ['HowTo', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
