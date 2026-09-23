import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/solutions/revenue/',
  title: 'AI Revenue Intelligence',
  eyebrow: 'Solutions · Revenue',
  metaTitle: 'AI Revenue Intelligence — Clean CRM, Attribution, Funnel Metrics and Forecasts | Eligoo',
  metaDescription: 'Eligoo’s AI revenue intelligence employee, Ledger, cleans and reconciles CRM data, reports attribution and funnel metrics, forecasts pipeline and flags leakage — with an audit trail and no deletions.',
  primaryKeyword: 'AI revenue intelligence',
  secondaryKeywords: ['AI revenue analytics', 'AI sales analytics', 'AI CRM automation', 'AI revenue operations', 'AI RevOps', 'AI sales intelligence', 'AI attribution'],
  answer: 'AI revenue intelligence is the use of an AI agent to keep revenue data trustworthy and to report what is actually producing pipeline and revenue — attribution, funnel metrics, forecasts and exceptions. In Eligoo that agent is Ledger: it cleans and reconciles CRM records with a full audit trail, never deletes, and reports with the evidence attached.',
  character: 'ledger',
  sections: [
    {
      kind: 'prose',
      heading: 'What is AI revenue intelligence?',
      paragraphs: [
        'Revenue reporting is only as good as the records underneath it, and records decay: duplicates, stale stages, missing sources, meetings that happened but were never logged. AI revenue intelligence puts an agent on that problem continuously — matching records, filling authorised fields, reconciling across systems, classifying attribution, computing funnel metrics and forecasting — and reports with the underlying records so a number can be checked.',
        'Ledger is the revenue employee in Eligoo. Its input is CRM records, campaign data, activity, meeting outcomes and the attribution model you approved. Its output is a clean CRM, an attribution report, a funnel dashboard, a revenue forecast, a pipeline health report and an exception queue. Its boundary is strict: reversible hygiene updates with an audit trail only, and no changes to closed-won revenue, invoices, commissions, contracts or customer status without approval.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How AI RevOps works in Eligoo',
      steps: [
        { title: 'Connect the data', text: 'Eligoo’s CRM holds leads, statuses, meetings and activity from Radar and Hook; campaign and content performance come from Sage and Boost; Google Sheets and Docs can hold what lives elsewhere.' },
        { title: 'Approve the attribution model', text: 'First touch, last touch or a weighted model — you decide once, and Ledger applies it consistently.' },
        { title: 'Clean and reconcile', text: 'Duplicates matched, authorised fields updated, exceptions raised for anything ambiguous. Every change is logged and reversible.' },
        { title: 'Measure', text: 'Funnel metrics by stage and segment, attribution by channel and campaign, forecast with a confidence level.' },
        { title: 'Flag', text: 'Leakage, stalled deals, data-quality problems and anomalies go to an exception queue for a person.' },
        { title: 'Report', text: 'Weekly pipeline health and revenue reports feed Atlas’s plan and your decisions.' },
      ],
    },
    {
      kind: 'features',
      heading: 'What Ledger delivers',
      items: [
        { title: 'Clean CRM', text: 'Matched records, filled authorised fields, duplicates resolved — with an audit trail.', icon: 'database' },
        { title: 'Attribution report', text: 'Which campaigns, sequences and channels produced pipeline and revenue under the approved model.', icon: 'chart' },
        { title: 'Funnel dashboard', text: 'Conversion by stage and segment, with the records behind each number.', icon: 'layers' },
        { title: 'Revenue forecast', text: 'A forecast with confidence and the assumptions stated.', icon: 'target' },
        { title: 'Pipeline health report', text: 'Stalled deals, coverage, ageing and leakage.', icon: 'shield' },
        { title: 'Exception queue', text: 'Anomalies and ambiguous records for a person to decide.', icon: 'check' },
      ],
    },
    employees(['ledger', 'atlas', 'hook', 'boost'], 'Employees involved', undefined, {
      ledger: 'Hygiene, attribution, forecast, exceptions.',
      atlas: 'Uses the evidence to reprioritise.',
      hook: 'Produces the activity and outcomes Ledger reconciles.',
      boost: 'Supplies paid performance for attribution.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Eligoo’s built-in CRM for leads, meetings and activity.',
        'Google Workspace — Sheets and Docs — for data that lives outside the workspace and for reports.',
        'Meta Ads insights through Boost for paid attribution.',
        'Your connected AI provider for matching, classification and narrative reports.',
      ],
    },
    pricingPointer('revenue intelligence'),
    faq([
      { q: 'Will the AI delete or change my revenue data?', a: 'No. Ledger makes only reversible hygiene updates with a full audit trail, and may not delete records or change closed-won revenue, invoices, commissions, contracts or customer status without approval.' },
      { q: 'How is attribution decided?', a: 'You approve the attribution model. Ledger applies it and reports attribution coverage so you can see how much revenue is actually attributable.' },
      { q: 'How accurate is the forecast?', a: 'Ledger reports a confidence level and the assumptions with every forecast, and tracks forecast error over time so accuracy is measured rather than claimed.' },
      { q: 'Does it work with my existing CRM?', a: 'Ledger works on Eligoo’s built-in CRM and on data you place in Google Sheets. Talk to us about the systems you use.' },
      { q: 'What is the KPI?', a: 'CRM completeness and accuracy, duplicate rate, attribution coverage, forecast error and reporting timeliness.' },
    ]),
    related([LINKS.ledger, LINKS.operations, LINKS.sales, LINKS.outbound, { label: 'What is AI revenue operations?', href: '/resources/glossary/ai-revenue-operations/' }, { label: 'AI CRM workflow template', href: '/resources/templates/ai-crm-workflow/' }, { label: 'Google Workspace integration', href: '/integrations/google-workspace/' }]),
    cta('Make the revenue numbers checkable', 'Approve the attribution model and let Ledger clean, reconcile and report — with the records attached.'),
  ],
  breadcrumb: CRUMBS.solutions,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
