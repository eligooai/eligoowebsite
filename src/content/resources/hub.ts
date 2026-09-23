import type { PageContent } from '../types';
import { HOME, LINKS, cta } from '../helpers';

const page: PageContent = {
  slug: '/resources/',
  title: 'Resources',
  eyebrow: 'Resources',
  metaTitle: 'Resources — Guides, Glossary, Workflow Templates, Research and Blog on AI Employees | Eligoo',
  metaDescription: 'Guides, a glossary, workflow templates, research and the blog — written to answer the questions people ask about AI employees, voice agents, outbound sales and automation, with definitions first.',
  primaryKeyword: 'AI employee resources',
  secondaryKeywords: ['AI workforce guides', 'AI glossary', 'AI workflow templates', 'AI voice agent guide', 'AI SDR guide', 'AI automation guide'],
  answer: 'Eligoo’s resources are guides, a glossary, workflow templates, research and a blog, written to answer the questions people ask about AI employees, AI voice agents, outbound sales and business automation. Each piece opens with the answer, defines the terms it uses and says where a person is still the better choice.',
  sections: [
    {
      kind: 'directory',
      heading: 'What is here',
      items: [
        { title: 'Guides', text: 'Long-form answers to the big questions: what an AI employee is, how to build an AI workforce, how voice agents work, what an AI SDR does, how to automate a process.', href: '/resources/guides/' },
        { title: 'Glossary', text: 'Twelve terms defined in one or two quotable sentences, then how each works, its components, examples and limitations.', href: '/resources/glossary/' },
        { title: 'Workflow templates', text: 'Seven copyable workflows — sales, cold calling, lead generation, marketing, appointment setting, follow-up, CRM — with owners, setup steps and approval points.', href: '/resources/templates/' },
        { title: 'Research', text: 'Original findings from the platform’s own data, with the methodology published alongside.', href: '/resources/research/' },
        { title: 'Blog', text: 'Shorter pieces on running AI employees day to day: what worked, what did not, what changed.', href: '/resources/blog/' },
        { title: 'Comparisons', text: 'Balanced comparisons — AI employee vs AI agent, AI voice agent vs human SDR, AI marketing agent vs agency — that say where each side is better.', href: '/compare/' },
        { title: 'Use cases', text: 'How the employees are applied to lead generation, cold calling, appointment setting, social media, content, SEO and automation.', href: '/use-cases/' },
        { title: 'Integrations', text: 'Every connection the platform supports — AI providers, telephony, speech, social channels, email, calendar, prospect data — and what each enables.', href: '/integrations/' },
      ],
    },
    {
      kind: 'prose',
      heading: 'How we write',
      paragraphs: [
        'Answer first. The direct answer sits under the heading, before any context, so that a reader — or a search engine, or an AI assistant — does not have to dig for it.',
        'Define entities. When a page says “AI employee”, “AI SDR” or “Hook”, it says what that is, in the page, rather than assuming the reader arrived knowing.',
        'Say where humans are better. Every comparison, template and glossary entry states the limits: what the software should not be asked to do and where a person still wins. A resource that only lists benefits is marketing, not a resource.',
        'No invented numbers. We do not quote statistics we did not measure, benchmarks we did not run or customers we do not have. Where a claim needs evidence, the page links to the source; where we have none, the claim is not made.',
      ],
    },
    {
      kind: 'related',
      heading: 'Start with these',
      links: [
        { label: 'Guide: what is an AI employee?', href: '/resources/guides/what-is-an-ai-employee/' },
        { label: 'Guide: how AI voice agents work', href: '/resources/guides/how-ai-voice-agents-work/' },
        LINKS.glEmployee, LINKS.glVoice,
        { label: 'AI sales workflow template', href: '/resources/templates/ai-sales-workflow/' },
        LINKS.cmpEmployeeAgent, LINKS.aiEmployees,
      ],
    },
    cta('See the resources in practice', 'Everything described here is how Eligoo’s eight AI employees actually work. Start with a free trial and check the claims against the product.'),
  ],
  breadcrumb: [HOME],
  schema: ['CollectionPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
