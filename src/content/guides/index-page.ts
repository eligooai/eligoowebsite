import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta } from '../helpers';

const page: PageContent = {
  slug: '/resources/guides/',
  title: 'Guides to AI Employees, Voice Agents and Automation',
  eyebrow: 'Resources · Guides',
  metaTitle: 'Guides to AI Employees, AI Workforces, Voice Agents, AI SDRs and Business Automation | Eligoo',
  metaDescription: 'Long-form, practical guides: what an AI employee is, how to build an AI workforce, how AI voice agents work, what an AI SDR does, and how to automate business processes with AI.',
  primaryKeyword: 'AI employee guide',
  secondaryKeywords: ['what is an AI employee', 'how to build an AI workforce', 'how AI voice agents work', 'what is an AI SDR', 'how to automate business processes with AI'],
  answer: 'These guides explain the concepts behind an AI workforce in enough depth to act on them: what an AI employee is and how it differs from an agent or an assistant, how to build a workforce role by role, how a voice agent’s components fit together, what an AI SDR does and how it hands off, and a method for automating a business process with AI. Each is written to be answer-first, with steps, pitfalls and an honest account of where the approach does not fit.',
  sections: [
    {
      kind: 'directory',
      heading: 'AI employees',
      items: [
        { title: 'What Is an AI Employee? A Practical Guide', text: 'Definition, the difference from AI agents and AI assistants, how a role works, what can be automated and what cannot.', href: '/resources/guides/what-is-an-ai-employee/' },
      ],
    },
    {
      kind: 'directory',
      heading: 'AI workforce',
      items: [
        { title: 'How to Build an AI Workforce', text: 'What a workforce is, how it differs from a team of people, a step-by-step build, and what it looks like for a small business.', href: '/resources/guides/how-to-build-an-ai-workforce/' },
      ],
    },
    {
      kind: 'directory',
      heading: 'AI voice',
      items: [
        { title: 'How AI Voice Agents Work', text: 'Speech-to-text, the language model, text-to-speech and telephony; turn detection, interruptions and latency; sales, cold calling and appointment setting.', href: '/resources/guides/how-ai-voice-agents-work/' },
      ],
    },
    {
      kind: 'directory',
      heading: 'AI sales',
      items: [
        { title: 'What Is an AI SDR and How Does It Work?', text: 'Prospecting agents, outreach agents and appointment setters, the hand-off to account executives, and where AI SDRs fall short.', href: '/resources/guides/what-is-an-ai-sdr/' },
      ],
    },
    {
      kind: 'directory',
      heading: 'AI automation',
      items: [
        { title: 'How to Automate Business Processes With AI', text: 'AI agents versus workflow automation, and a method: map the process, separate rules from judgement, set the approval boundary, measure outcomes.', href: '/resources/guides/how-to-automate-business-processes-with-ai/' },
      ],
    },
    {
      kind: 'related',
      heading: 'Shorter reads',
      links: [LINKS.glossary, LINKS.compare, LINKS.templates, LINKS.research, LINKS.blog],
    },
    cta('Try what the guides describe', 'Hire an AI employee, give it a brief and a boundary, and see the first tasks move. Start with a free trial.'),
  ],
  breadcrumb: CRUMBS.resources,
  schema: ['CollectionPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
