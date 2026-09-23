import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/glossary/ai-revenue-operations/',
  title: 'What Is AI Revenue Operations (AI RevOps)?',
  eyebrow: 'Glossary',
  metaTitle: 'What Is AI Revenue Operations (AI RevOps)? Definition, How It Works and Limits | Eligoo',
  metaDescription: 'AI revenue operations (AI RevOps) is the use of AI agents to maintain and analyse the data behind the revenue process — CRM hygiene, funnel metrics, attribution and forecasting. How it works, components, benefits and limits.',
  primaryKeyword: 'what is AI revenue operations',
  secondaryKeywords: ['AI RevOps definition', 'AI RevOps meaning', 'AI revenue operations agent', 'AI CRM hygiene', 'AI sales forecasting', 'AI revenue intelligence'],
  term: 'AI revenue operations (AI RevOps)',
  answer: 'AI revenue operations (AI RevOps) is the use of AI agents to maintain and analyse the data behind a company’s revenue process — CRM hygiene, funnel metrics, attribution, forecasting and pipeline health — so that sales, marketing and leadership work from the same verified numbers. It automates the record-keeping and reporting side of revenue, not the selling.',
  sections: [
    {
      kind: 'prose',
      heading: 'How it works',
      paragraphs: [
        'Revenue operations exists because the data behind revenue is always drifting: duplicate contacts, deals with no next step, activities logged in email but not in the CRM, stages that mean different things to different people. A RevOps person spends much of their week finding and fixing that drift and then building reports on the corrected data. AI RevOps assigns that work to an agent.',
        'The agent reads the CRM, the mailbox activity, the calendar and the call outcomes; reconciles them; proposes or applies corrections with an audit trail; and produces the reports — funnel conversion by stage, attribution by source, a forecast with its assumptions stated, and a list of exceptions that need a human decision. Records it is unsure about go to an exception queue rather than being changed silently.',
        'The output is a set of numbers everyone can trust, updated continuously, with evidence attached. The person who used to build the reports now reviews exceptions and decides what the numbers mean.',
      ],
    },
    {
      kind: 'list',
      heading: 'Components',
      items: [
        'Read access to the CRM, mailbox activity, calendar and call records.',
        'Reconciliation logic that matches activity to records and finds gaps and duplicates.',
        'An audit trail for every change, so corrections can be reviewed and reversed.',
        'An exception queue for records the agent will not change on its own.',
        'Funnel, attribution, pipeline-health and forecast reports on a schedule.',
        'A rule that the agent never deletes records — it flags, merges on approval or corrects with a trail.',
      ],
    },
    {
      kind: 'list',
      heading: 'Examples',
      items: [
        'Finding leads that were emailed and called but have no activity logged, and writing the activity back to the record.',
        'Producing a weekly funnel report with stage-to-stage conversion and the deals that have not moved.',
        'Attributing booked meetings to the segment, sequence and channel that produced them.',
        'Flagging duplicate accounts created by different team members and queueing them for a merge decision.',
        'Publishing a forecast with the pipeline it was built from and the assumptions it depends on.',
      ],
    },
    {
      kind: 'list',
      heading: 'Benefits',
      items: [
        'Reports are built from reconciled data, not from whatever happened to be logged.',
        'Drift is caught continuously instead of at quarter end.',
        'Every correction has a trail, so the CRM stays trustworthy as it is cleaned.',
        'Attribution becomes possible because every touch is logged against the right record.',
        'The person doing RevOps spends time on decisions rather than spreadsheet repair.',
      ],
    },
    {
      kind: 'list',
      heading: 'Limitations',
      items: [
        'The agent can only reconcile what it can see. Activity in disconnected tools stays invisible.',
        'A forecast is a model of the pipeline, not a promise; its assumptions should be read as carefully as its number.',
        'Automated merges and corrections need a review path — hence the exception queue and the no-delete rule.',
        'Stage definitions, ICP and what counts as “qualified” are human decisions the agent applies, not decides.',
        'It does not fix a sales process that is not being followed; it makes the non-compliance visible.',
      ],
    },
    related([
      { label: 'What is AI outbound sales?', href: '/resources/glossary/ai-outbound-sales/' },
      LINKS.glSdr,
      { label: 'What is AI automation?', href: '/resources/glossary/ai-automation/' },
      LINKS.glEmployee, LINKS.revenue, LINKS.ledger, LINKS.sales,
      { label: 'AI CRM workflow template', href: '/resources/templates/ai-crm-workflow/' },
    ], 'Related concepts'),
    faq([
      { q: 'What is the difference between AI RevOps and AI sales?', a: 'AI sales agents talk to prospects — outreach, calls, booking. AI RevOps agents keep the records and reporting behind that work correct. One produces meetings; the other produces trustworthy numbers about them.' },
      { q: 'Can an AI RevOps agent change my CRM data?', a: 'It should be able to correct and enrich records with an audit trail, and it should never delete. Anything ambiguous belongs in an exception queue for a person to decide.' },
      { q: 'How accurate is an AI forecast?', a: 'As accurate as the pipeline data and the assumptions it is built on. The value of an AI forecast is that the assumptions are written down and the data has been reconciled first; it is still a projection.' },
      { q: 'Do I need a RevOps person if I have an AI RevOps agent?', a: 'Someone still has to define the stages, decide the exceptions and act on the reports. The agent removes the repair and reporting work; it does not remove the ownership.' },
    ], 'FAQs'),
    {
      kind: 'prose',
      heading: 'How Eligoo uses this',
      paragraphs: [
        'In Eligoo the AI RevOps role is Ledger, the AI revenue intelligence agent. Ledger keeps CRM hygiene with an audit trail, reconciles records against Hook’s email and call activity, maintains funnel metrics, an attribution report, a forecast and a pipeline-health view, and routes anything it will not change on its own to an exception queue. Ledger never deletes records. When a booked-meeting outcome cannot create a calendar event because Google is not connected, the follow-up lands with Ledger as a task, so nothing is lost between a call and the CRM.',
      ],
    },
    cta('Work from numbers you can trust', 'Ledger reconciles, reports and flags exceptions — with an audit trail and no deletions. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.glossary,
  schema: ['DefinedTerm', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
