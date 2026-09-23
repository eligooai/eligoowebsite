import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related } from '../helpers';

const page: PageContent = {
  slug: '/resources/templates/ai-crm-workflow/',
  title: 'AI CRM Workflow Template',
  eyebrow: 'Templates',
  metaTitle: 'AI CRM Workflow Template — Reconcile, Clean, Queue Exceptions, Report the Funnel | Eligoo',
  metaDescription: 'A copyable AI CRM workflow: Ledger reconciles email, call and calendar activity against records, fixes them with an audit trail, queues exceptions and reports funnel, attribution and forecast on a schedule.',
  primaryKeyword: 'AI CRM workflow',
  secondaryKeywords: ['AI CRM workflow template', 'CRM hygiene workflow', 'AI CRM automation', 'CRM data cleaning process', 'AI sales reporting workflow', 'AI RevOps workflow'],
  answer: 'This workflow keeps CRM data trustworthy and turns it into reports without a person rebuilding spreadsheets. Ledger reconciles email, call and calendar activity against records, corrects and enriches them with an audit trail, queues anything ambiguous for a decision, never deletes, and produces the funnel, attribution, pipeline-health and forecast reports on a schedule; Atlas uses them in the weekly plan.',
  sections: [
    {
      kind: 'prose',
      heading: 'When to use this template',
      paragraphs: [
        'Use it when nobody trusts the CRM: duplicates, deals with no next step, activity that happened in email but was never logged, and a forecast that is really a guess. It suits any team where one person spends part of every week repairing data before they can report on it, and any business running the other templates on this site, all of which produce activity that needs to land on the right record.',
        'This template is about records and reporting, not outreach. Ledger never contacts a prospect; it makes the numbers about the prospects correct.',
      ],
    },
    {
      kind: 'workflow',
      heading: 'The workflow',
      stages: [
        { label: 'Collect activity', owner: 'ledger', detail: 'Sent emails, replies, calls with outcomes, meetings held, from connected sources' },
        { label: 'Reconcile', owner: 'ledger', detail: 'Match activity to records; find gaps, duplicates and stale stages' },
        { label: 'Correct with a trail', owner: 'ledger', detail: 'Log activity, fill fields, update stages; every change audited' },
        { label: 'Queue exceptions', owner: 'ledger', detail: 'Possible duplicates, conflicting data, stage disputes — for a person' },
        { label: 'Report', owner: 'ledger', detail: 'Funnel metrics, attribution, pipeline health, forecast with assumptions' },
        { label: 'Plan', owner: 'atlas', detail: 'Reports feed the weekly growth plan and risk register' },
      ],
    },
    {
      kind: 'steps',
      heading: 'Set it up in Eligoo',
      steps: [
        { title: 'Connect the activity sources', text: 'Your SMTP/IMAP mailbox for email activity, Google Workspace for calendar and meetings, and the voice stack if calls run through Eligoo. Import your existing CRM data.' },
        { title: 'Define the stages and what they mean', text: 'Write down each pipeline stage, the condition for entering it and what a record must have — a next step, an owner, a value. Ledger applies these definitions; it does not invent them.' },
        { title: 'Set the hygiene rules', text: 'How long a deal may sit without activity before it is flagged, which fields must be filled, how duplicates are recognised. Confirm the standing rule: Ledger never deletes.' },
        { title: 'Run the first reconciliation', text: 'Ledger matches activity to records, logs what was missing, fills fields it can source and queues everything ambiguous. Review the audit trail from the first run before scheduling it.' },
        { title: 'Work the exception queue', text: 'Possible duplicates, conflicting data and stage disputes arrive with Ledger’s recommendation. A person decides; Ledger applies the decision with a trail.' },
        { title: 'Schedule the reports', text: 'Set automations for the funnel report, the attribution report, pipeline health and the forecast, at the cadence you review them.' },
        { title: 'Feed the reports to Atlas', text: 'Atlas reads the reports into the weekly growth plan and the risk register, so a leaking stage or a slipping forecast becomes a planned action rather than a surprise.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Approval points',
      items: [
        'Stage definitions and hygiene rules.',
        'The first reconciliation’s audit trail before the workflow is scheduled.',
        'Every exception-queue decision: merges, conflicting data, stage disputes.',
        'Any change to the forecast assumptions.',
        'Note: this workflow takes no outside-world actions, so its approvals are all about data decisions.',
      ],
    },
    {
      kind: 'list',
      heading: 'Inputs you need',
      items: [
        'Your existing CRM data, or the records produced by the other Eligoo workflows.',
        'Pipeline stage definitions and required fields.',
        'The hygiene rules: inactivity thresholds, duplicate criteria, mandatory fields.',
        'Connected activity sources: mailbox, calendar, calls.',
        'Who owns exception decisions and how often reports are reviewed.',
      ],
    },
    {
      kind: 'list',
      heading: 'Outputs and KPI',
      items: [
        'KPI: share of pipeline records that pass the hygiene rules (complete, current, with a next step).',
        'Watch alongside: activity logged automatically versus manually, exception-queue turnaround, forecast variance against outcome.',
        'Every activity matched to a record, with an audit trail for each correction.',
        'An exception queue with recommendations and decisions recorded.',
        'Funnel conversion by stage, attribution by source and sequence, pipeline-health flags.',
        'A forecast with the pipeline it was built from and its assumptions written down.',
      ],
    },
    {
      kind: 'example',
      heading: 'Example: a distributor whose forecast never matched the quarter',
      scenario: 'An industrial distributor’s three salespeople each keep their pipeline differently. The monthly forecast is assembled from their word, and it is wrong in both directions.',
      steps: [
        'The owner writes down five stages with entry conditions and the fields each requires, and a rule that a deal with no activity for a set period is flagged.',
        'Ledger reconciles the mailbox and calendar against the pipeline, logs dozens of untracked conversations, fills missing next steps where the email makes them clear, and queues deals whose stage does not match their activity.',
        'The salespeople clear the exception queue in one sitting, with Ledger’s recommendation beside each item.',
        'The weekly funnel report and a forecast with stated assumptions replace the verbal round-up; Atlas adds the stalled deals to the risk register.',
      ],
      outcome: 'One pipeline with one set of definitions, a forecast the owner can question line by line, and salespeople who log less because the logging is done for them.',
    },
    faq([
      { q: 'Can Ledger delete records?', a: 'No. Ledger corrects, enriches, merges on approval and flags; it never deletes. Every change has an audit trail.' },
      { q: 'What goes to the exception queue?', a: 'Anything Ledger is not confident about: possible duplicates, activity that could match two records, stage changes that conflict with the definitions. Each arrives with a recommendation and a person decides.' },
      { q: 'How accurate is the forecast?', a: 'As accurate as the reconciled pipeline and the assumptions, which are written into the report so they can be challenged. It is a projection, not a promise.' },
      { q: 'Does this work with the CRM I already use?', a: 'Eligoo has a built-in CRM that the employees work in. You can import your existing data into it; check the integrations page for what connects directly.' },
      { q: 'How often should reconciliation run?', a: 'Daily is common for teams with active outreach; weekly for quieter pipelines. Reports run on the cadence you review them — a weekly funnel report and a monthly forecast is a typical starting point.' },
    ]),
    related([
      LINKS.revenue, LINKS.ledger, LINKS.atlas, LINKS.sales, LINKS.operations,
      { label: 'What is AI revenue operations?', href: '/resources/glossary/ai-revenue-operations/' },
      { label: 'Google Workspace integration', href: '/integrations/google-workspace/' },
      { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' },
      { label: 'Lead generation workflow template', href: '/resources/templates/lead-generation-workflow/' },
      { label: 'AI follow-up workflow template', href: '/resources/templates/ai-follow-up-workflow/' },
    ]),
    cta('Make the CRM the source of truth again', 'Define the stages, let Ledger reconcile, decide the exceptions. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.templates,
  schema: ['HowTo', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
