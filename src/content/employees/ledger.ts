import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/ai-employees/ledger/',
  title: 'Ledger — AI Revenue Intelligence Agent',
  eyebrow: 'AI employee · Revenue',
  metaTitle: 'Ledger — AI Revenue Intelligence Agent for CRM Hygiene, Attribution and Forecasts | Eligoo',
  metaDescription: 'Ledger is Eligoo’s AI revenue intelligence employee: it cleans and reconciles CRM data with an audit trail, calculates funnel metrics, reports attribution, forecasts pipeline and flags leakage — and never deletes a record.',
  primaryKeyword: 'AI revenue intelligence',
  secondaryKeywords: ['AI sales analytics', 'AI CRM automation', 'AI revenue operations', 'AI attribution'],
  answer: 'Ledger is Eligoo’s AI revenue intelligence employee. It cleans and enriches CRM records, reconciles data across systems, calculates funnel metrics, produces attribution reports and forecasts, and flags leakage and data-quality exceptions. It makes only reversible hygiene updates with a full audit trail and may not delete records or change revenue, invoices or contracts without approval.',
  character: 'ledger',
  sections: [
    {
      kind: 'prose',
      heading: 'What Ledger does',
      paragraphs: [
        'Ledger measures. Its input is CRM records, campaign data, website analytics, sales activity, meeting outcomes, opportunity stages, revenue data, targets and the attribution model you approved. It decides record matching, duplicate detection, data-quality exceptions, attribution classification, forecast confidence and which anomalies need a person.',
        'Its actions are cleaning and enriching CRM records, reconciling data across systems, updating authorised fields, calculating funnel metrics, producing forecasts and flagging leakage. Its outputs are a clean CRM, an attribution report, a funnel dashboard, a revenue forecast, a pipeline health report and an exception queue.',
        'Ledger’s KPI is CRM completeness and accuracy, duplicate rate, attribution coverage, forecast error and reporting timeliness. It measures performance; Atlas manages the workforce with Ledger’s evidence.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Ledger works',
      steps: [
        { title: 'Reads the records', text: 'Leads, meetings and activity from Radar and Hook; campaign and content data from Sage and Boost; anything else you keep in Google Sheets.' },
        { title: 'Applies the attribution model', text: 'The model you approved, consistently, with attribution coverage reported.' },
        { title: 'Cleans and reconciles', text: 'Matches duplicates, fills authorised fields, reconciles across systems; every change logged and reversible.' },
        { title: 'Calculates', text: 'Funnel metrics by stage and segment, forecast with confidence and assumptions.' },
        { title: 'Flags', text: 'Leakage, stalled deals, anomalies and ambiguous records to the exception queue.' },
        { title: 'Reports', text: 'Pipeline health and revenue reports on a schedule, feeding Atlas’s weekly plan.' },
      ],
    },
    {
      kind: 'list',
      heading: 'Tools and integrations Ledger uses',
      items: [
        'Eligoo’s built-in CRM for leads, meetings, statuses and activity.',
        'Google Workspace — Sheets and Docs — for external data and reports.',
        'Meta Ads insights via Boost for paid attribution.',
        'The AI model you assign it for matching, classification and narrative.',
      ],
    },
    {
      kind: 'features',
      heading: 'Sample deliverables',
      items: [
        { title: 'Clean CRM', text: 'Duplicates resolved, fields filled, changes logged.', icon: 'database' },
        { title: 'Attribution report', text: 'Pipeline and revenue by channel, campaign and sequence.', icon: 'chart' },
        { title: 'Funnel dashboard', text: 'Conversion by stage and segment with the records behind it.', icon: 'layers' },
        { title: 'Revenue forecast', text: 'With confidence, assumptions and tracked error.', icon: 'target' },
        { title: 'Pipeline health report', text: 'Coverage, ageing, stalled deals, leakage.', icon: 'shield' },
        { title: 'Exception queue', text: 'What needs a person, and why.', icon: 'check' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'How Ledger hands off to teammates',
      stages: [
        { label: 'Hook', owner: 'hook', detail: 'Activity and outcomes in' },
        { label: 'Boost', owner: 'boost', detail: 'Paid performance in' },
        { label: 'Ledger', owner: 'ledger', detail: 'Reconcile, attribute, forecast' },
        { label: 'Atlas', owner: 'atlas', detail: 'Evidence into the weekly plan' },
        { label: 'You', detail: 'Decide the exceptions' },
      ],
    },
    employees(['atlas', 'hook', 'boost', 'radar'], 'Works with'),
    pricingPointer('Ledger'),
    faq([
      { q: 'Can Ledger delete records?', a: 'No. It makes only reversible hygiene updates with a full audit trail. Deleting records and changing closed-won revenue, invoices, commissions, contracts, customer status or financial records require approval.' },
      { q: 'How does it handle a duplicate it is not sure about?', a: 'It raises an exception for a person rather than merging on a guess.' },
      { q: 'Does it forecast on its own?', a: 'Yes, with a confidence level and the assumptions stated, and it tracks forecast error over time so accuracy is measured.' },
      { q: 'Where do the reports go?', a: 'Into the workspace and, if you like, into Google Docs or Sheets. Atlas uses them in the weekly plan.' },
    ]),
    related([LINKS.revenue, LINKS.operations, LINKS.hook, LINKS.atlas, { label: 'What is AI revenue operations?', href: '/resources/glossary/ai-revenue-operations/' }, { label: 'AI CRM workflow template', href: '/resources/templates/ai-crm-workflow/' }, { label: 'Google Workspace integration', href: '/integrations/google-workspace/' }]),
    cta('Hire Ledger', 'Approve an attribution model and get a clean CRM and checkable reports — with nothing deleted.'),
  ],
  breadcrumb: CRUMBS.employees,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
