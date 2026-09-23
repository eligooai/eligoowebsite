import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta } from '../helpers';

const page: PageContent = {
  slug: '/resources/templates/',
  title: 'AI Workflow Templates',
  eyebrow: 'Resources · Templates',
  metaTitle: 'AI Workflow Templates — Sales, Cold Calling, Lead Generation, Marketing, Follow-Up and CRM | Eligoo',
  metaDescription: 'Seven ready-to-copy AI workflow templates that map a business process onto Eligoo’s AI employees, with each stage’s owner, the setup steps and the points where a person approves.',
  primaryKeyword: 'AI workflow templates',
  secondaryKeywords: ['AI sales workflow', 'AI cold calling workflow', 'lead generation workflow', 'AI marketing workflow', 'appointment setting workflow', 'AI follow-up workflow', 'AI CRM workflow'],
  answer: 'These are ready-to-copy workflows that map a common business process — outbound sales, cold calling, lead generation, marketing, appointment setting, follow-up, CRM upkeep — onto Eligoo’s AI employees. Each template names the stage chain, the employee that owns each stage, the setup steps in Eligoo, and the points where a person must approve before anything reaches the outside world.',
  sections: [
    {
      kind: 'directory',
      heading: 'Templates',
      items: [
        { title: 'AI sales workflow', text: 'The full outbound chain: segment, list, sequence, calls, booking and reporting across Maven, Radar, Hook and Ledger.', href: '/resources/templates/ai-sales-workflow/' },
        { title: 'AI cold calling workflow', text: 'A calling campaign from verified list to logged outcome, with a browser test call before approval.', href: '/resources/templates/ai-cold-calling-workflow/' },
        { title: 'Lead generation workflow', text: 'Define the profile, find and enrich contacts, verify, score and segment — a list ready for outreach, without contacting anyone.', href: '/resources/templates/lead-generation-workflow/' },
        { title: 'AI marketing workflow', text: 'Research to positioning to content calendar to published posts and a performance report, across Maven, Sage and Pixel.', href: '/resources/templates/ai-marketing-workflow/' },
        { title: 'Appointment setting workflow', text: 'Email and call steps that end in a calendar event with a meeting link and a brief for whoever attends.', href: '/resources/templates/appointment-setting-workflow/' },
        { title: 'AI follow-up workflow', text: 'Never lose a reply, a no-show or an old quote: classify, respond, re-contact and log.', href: '/resources/templates/ai-follow-up-workflow/' },
        { title: 'AI CRM workflow', text: 'Reconcile activity, fix records with an audit trail, queue exceptions and report the funnel on a schedule.', href: '/resources/templates/ai-crm-workflow/' },
      ],
    },
    {
      kind: 'prose',
      heading: 'How to use a template',
      paragraphs: [
        'Copy the stages. Each template lists a chain of stages in order; the chain is the process, and most businesses will keep it as it is and change only the details — the segment, the message, the calling window.',
        'Assign the employees. Every stage has an owner among Eligoo’s AI employees. If you have not hired that employee, the stage becomes manual or is skipped; the templates say which stages are essential and which are optional.',
        'Set the approval points. Each template marks the steps that wait for a person — sequence enrolment, starting a calling campaign, publishing outside the approved calendar, any spend change. Decide who in your team approves them before the workflow starts, not after the first request arrives.',
        'Measure the KPI. Every template names one outcome measure and the supporting measures to watch alongside it. The templates do not give target numbers; the right target depends on your market, and the first run establishes the baseline.',
      ],
    },
    {
      kind: 'related',
      heading: 'Continue reading',
      links: [LINKS.guides, LINKS.glossary, LINKS.useCases, LINKS.aiEmployees, { label: 'Solutions', href: '/solutions/' }],
    },
    cta('Copy a template into your workspace', 'Pick the process you want to run, hire the employees it needs and set the approval points. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.resources,
  schema: ['CollectionPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
