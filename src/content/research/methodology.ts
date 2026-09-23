import type { PageContent } from '../types';
import { CRUMBS, LINKS, faq } from '../helpers';

const page: PageContent = {
  slug: '/resources/research/methodology/',
  title: 'Research Methodology',
  eyebrow: 'Resources · Research',
  metaTitle: 'Research Methodology: Data Sources, Anonymisation, Sample Thresholds, Metric Definitions and Corrections | Eligoo',
  metaDescription: 'How Eligoo research is produced: aggregated telemetry from consenting workspaces and controlled experiments, anonymisation, minimum sample thresholds, metric definitions, limitations and corrections.',
  primaryKeyword: 'Eligoo research methodology',
  secondaryKeywords: ['AI voice agent benchmark methodology', 'AI SDR benchmark methodology', 'connect rate definition', 'qualified meeting rate definition', 'positive reply rate definition'],
  answer: 'Eligoo research uses two data sources — aggregated, anonymised telemetry from workspaces that opt in, and controlled experiments Eligoo runs itself — and no third-party statistics restated as our own. A report is not published until its sample is large enough to be meaningful; the threshold is stated in each report. Every metric is defined here before it is measured anywhere, and every report carries its limitations and a corrections record.',
  sections: [
    {
      kind: 'prose',
      heading: 'What data sources are used?',
      paragraphs: [
        'Platform telemetry. Eligoo’s workspaces generate operational records as employees work: tasks, approvals, sequence sends and replies, call outcomes and durations, published posts, CRM changes. For research we use only records from workspaces that have opted in, and only in aggregate: counts, rates and distributions across many workspaces, never one workspace’s numbers.',
        'Controlled experiments. Where a question needs a comparison — does a shorter first message change connect rate; does deeper personalisation change positive reply rate — Eligoo runs the experiment on its own campaigns or with consenting customers who agree to the design in advance. The design, the variable changed and everything held constant are described in the report.',
        'What is not used. Third-party statistics are not restated as our findings. If a report needs to reference an outside source for context it is cited as such and kept separate from what we measured. Individual transcripts, emails and contact records are not quoted, even anonymised, unless the workspace has explicitly agreed to a quoted example.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How is data anonymised?',
      paragraphs: [
        'Before any analysis, workspace identifiers are replaced with random keys that are not stored alongside customer accounts; contact details, names, company names, email content, transcripts and recordings are excluded from the research dataset entirely; and only derived fields — outcome codes, timestamps, durations, counts, categorical settings such as calling window or sequence length — are retained. Aggregates are reported only when enough workspaces contribute that no single one can be inferred from the figure. A workspace that opts out is removed from all future aggregates.',
      ],
    },
    {
      kind: 'prose',
      heading: 'What is the minimum sample before publication?',
      paragraphs: [
        'A report is not published until its sample is large enough to be meaningful; the threshold is stated in each report and depends on the metric. Rates on rare outcomes need more observations than rates on common ones, and comparisons between two settings need enough observations in each arm. Where a figure in a report rests on a smaller subset — one industry, one language — that subset’s size is stated next to the figure or the figure is withheld. We would rather publish fewer cuts than publish a cut that a handful of workspaces could move.',
      ],
    },
    {
      kind: 'list',
      heading: 'How are metrics defined?',
      intro: 'These are definitions, not results. Each report says which of them it uses and reports them exactly as defined here.',
      items: [
        'Connect rate: the share of attempted outbound calls in which a person answered and the conversation lasted beyond the first exchange, excluding voicemail, no-answer, busy and failed dials.',
        'Booked-meeting rate: the share of connected calls, or of enrolled contacts for email, whose recorded outcome is a booked meeting with a calendar event created.',
        'Qualified-meeting rate: the share of booked meetings that took place and were marked qualified by a person afterwards; this is the KPI Eligoo uses for its sales employee.',
        'Show rate: the share of booked meetings that took place, whether or not qualified.',
        'Positive reply rate: the share of enrolled contacts whose first reply was classified as interested or asking a question, excluding out-of-office and automated responses.',
        'Opt-out rate: the share of enrolled contacts who asked to stop, by any channel, during the sequence.',
        'Complaint rate: the share of enrolled contacts whose reply was classified as a complaint.',
        'Approval rate: the share of items in the approvals queue that a person approved without editing; the edit rate is the share approved after editing.',
        'Exception rate: the share of tasks in a process that were escalated to a person rather than completed by an employee.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How a report is produced',
      steps: [
        { title: 'The question is written first', text: 'Each report starts with one question it is designed to answer and the metrics, from the list above, that will answer it. Questions that would need data we do not collect are not taken on.' },
        { title: 'The data source is chosen and the design fixed', text: 'Telemetry, an experiment, or both. For an experiment the variable, the controls, the arms and the pre-registered analysis are written down before it runs.' },
        { title: 'The dataset is extracted and anonymised', text: 'Only opted-in workspaces, only derived fields, identifiers replaced, content excluded. The extraction is logged.' },
        { title: 'The sample is checked against the threshold', text: 'If the sample is below the stated minimum, the report waits. Subsets that are too small are dropped or marked.' },
        { title: 'Analysis is run as pre-registered', text: 'Metrics are computed exactly as defined. Exploratory findings that were not in the plan are labelled as such and never headline the report.' },
        { title: 'Limitations are written before conclusions', text: 'Who is in the sample, who is not, what could confound the result and what the report cannot say. The conclusions are then written within those limits.' },
        { title: 'Review, publication and versioning', text: 'A second person checks definitions and figures against the dataset. The report is published with a version, a date and the threshold it met. Changes after publication follow the corrections policy.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'What are the limitations of this research?',
      paragraphs: [
        'The sample is Eligoo customers who opted in, which is not the population of all businesses using AI agents; results describe what happens on this platform, with these employees and these boundaries. Telemetry measures outcomes as recorded by the platform and by people marking meetings and replies, and those markings can be inconsistent. Experiments run on a limited set of industries, languages and list types. Correlations in telemetry are not causal claims; only the controlled experiments support a causal reading, and only for the variable they changed. Every report states which of these apply to it.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How are corrections handled?',
      paragraphs: [
        'If an error is found in a published report — in a definition, a figure or an interpretation — the report is corrected in place, the version number is incremented, and a correction note at the top of the report states what changed and why. Material corrections are also noted on the research index. We do not silently edit figures. Anyone who spots a possible error can write to us through the contact link on the research page.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How should Eligoo research be cited?',
      paragraphs: [
        'Cite the report title, Eligoo as publisher, the version and date shown on the report, and the URL. Quote figures with the metric name as defined on this page, and with the sample size and any subset the figure applies to, so that readers can judge it. Do not cite draft figures shared under early access.',
      ],
    },
    faq([
      { q: 'Is customer data used in Eligoo research?', a: 'Only anonymised, aggregated data from workspaces that opted in. Contact details, content, transcripts and recordings are excluded from the research dataset, and no single workspace is identifiable in a report.' },
      { q: 'Why is there a minimum sample threshold?', a: 'Small samples produce figures that a few workspaces can move. A report is not published until its sample is large enough to be meaningful, and the threshold is stated in each report so readers can judge it.' },
      { q: 'Are the metric definitions the same as the KPIs in the product?', a: 'Where they overlap, yes. Qualified-meeting rate is defined here the way the platform measures its sales employee. The definitions on this page take precedence for research.' },
      { q: 'What happens if a report turns out to be wrong?', a: 'It is corrected in place, versioned and annotated with what changed and why. Material corrections are noted on the research index.' },
    ]),
    {
      kind: 'related',
      heading: 'Related pages',
      links: [LINKS.research, LINKS.security, LINKS.about, LINKS.glossary, { label: 'Privacy policy', href: '/p/privacy' }],
    },
    {
      kind: 'cta',
      title: 'Questions about the methodology',
      text: 'If you want to check a definition, propose a question, or discuss opting your workspace in or out of research aggregates, get in touch.',
      primary: { label: 'Talk to us', href: 'https://calendly.com/eligooai/30min' },
      secondary: { label: 'Back to research', href: '/resources/research/' },
    },
  ],
  breadcrumb: CRUMBS.research,
  schema: ['Article', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
