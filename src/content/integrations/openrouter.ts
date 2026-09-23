import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/openrouter/',
  title: 'OpenRouter Integration — Any Model Through One Key',
  eyebrow: 'Integrations · AI models',
  metaTitle: 'OpenRouter Integration — Any Model for AI Employees Through One Key | Eligoo',
  metaDescription: 'Connect one OpenRouter key and give Eligoo’s AI employees access to models from many providers. Assign different models per employee without managing several accounts; OpenRouter bills you directly.',
  primaryKeyword: 'OpenRouter integration for AI employees',
  secondaryKeywords: ['OpenRouter AI agents', 'one API key many models', 'bring your own OpenRouter key', 'multi-model AI workforce', 'OpenRouter business automation'],
  answer: 'The OpenRouter integration lets Eligoo’s AI employees reach models from many providers through a single OpenRouter API key. Add the key to your workspace, pick any model OpenRouter routes to as the default or per employee, and OpenRouter bills your account. It is the simplest way to try several models across the workforce without opening an account with each provider.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with OpenRouter?',
      paragraphs: [
        'OpenRouter is an aggregator: one key, one billing account, and a catalogue of models from different labs. In Eligoo it is treated as a provider like any other, so every employee can be assigned an OpenRouter model, and you can mix it with direct OpenAI, Anthropic, Gemini or Groq connections in the same workspace.',
        'It is most useful in three situations. When you want to compare models for a role — give Sage one model this week and another next week, and judge the drafts. When you want a model that none of the direct providers offer. And when you would rather have one invoice for model usage than four.',
        'The trade-off is that requests take one extra hop and OpenRouter’s own pricing and terms sit on top of the underlying provider’s. For most business workloads that is a fair exchange for the flexibility; for a latency-sensitive voice agent, test it before committing.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Create a key at OpenRouter', text: 'Generate an API key in your OpenRouter account and add credit or a payment method there.' },
        { title: 'Add OpenRouter as a provider', text: 'In workspace settings choose OpenRouter and paste the key. Eligoo verifies it with a test request and stores it server-side, masked in the interface.' },
        { title: 'Choose models by name', text: 'Pick any model in OpenRouter’s catalogue as the workspace default, and override per employee where a different model fits the role better.' },
        { title: 'Compare and settle', text: 'Change an employee’s model, review the next few outputs in the activity log, and keep the one that works. Assignments take effect on the next task.' },
        { title: 'Work runs under your account', text: 'Prompts go to OpenRouter with your key and are routed to the chosen model; output returns to the workspace and credits are consumed at the platform rate.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and OpenRouter',
      items: [
        'Sent to OpenRouter: the employee’s instructions and task context — briefs, records, reply text, transcripts, documents and chat history — which OpenRouter forwards to the underlying model provider.',
        'Received from OpenRouter: the model’s text output.',
        'Not sent: other integrations’ keys, audio, or data from other workspaces.',
        'Your API key stays server-side in your workspace and is never returned to the browser.',
        'Traffic runs under your own OpenRouter account, so both OpenRouter’s terms and the routed provider’s data terms apply. OpenRouter lets you restrict routing to providers you accept; configure that in your OpenRouter account if it matters to you.',
      ],
    },
    employees(['atlas', 'maven', 'sage', 'pixel', 'radar', 'hook', 'ledger', 'boost'], 'Which AI employees use it', 'Every employee can be assigned an OpenRouter model, which is what makes it handy for comparisons.', {
      sage: 'Try different writing models on the same calendar item.',
      atlas: 'A frontier reasoning model for planning without a separate account.',
      radar: 'An inexpensive model for scoring at volume.',
      hook: 'Test call-turn latency before using it on a campaign.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Model evaluation by role', text: 'Swap models per employee and compare outputs without changing anything else.', icon: 'layers' },
        { title: 'One model invoice', text: 'All model spend on one account, visible in OpenRouter’s dashboard.', icon: 'chart' },
        { title: 'Access to models without direct accounts', text: 'Use a lab’s model without opening an account with that lab.', icon: 'key' },
        { title: 'Everything the workforce does', text: 'Planning, research, content, prospecting, outreach, reporting — all on the models you route to.', icon: 'workflow' },
      ],
    },
    pricingPointer('each employee'),
    faq([
      { q: 'Can I use OpenRouter with AI employees?', a: 'Yes. Add an OpenRouter key to the workspace and assign any of its models as the default or per employee.' },
      { q: 'Do I still need OpenAI or Anthropic accounts if I use OpenRouter?', a: 'No. OpenRouter routes to those providers on your behalf. You can also connect them directly and use both.' },
      { q: 'Does OpenRouter work for the AI voice agent?', a: 'It can. Assign an OpenRouter model to Hook and make a browser test call; the extra routing hop adds some latency, so compare it with a direct provider before running a campaign.' },
      { q: 'Who bills me?', a: 'OpenRouter, on your own account, at its listed rates for the model used. Eligoo credits are consumed separately for the platform work.' },
      { q: 'Can I limit which providers OpenRouter routes to?', a: 'That is configured in your OpenRouter account, not in Eligoo. Eligoo sends the model name you chose; OpenRouter applies your routing preferences.' },
    ]),
    related([
      LINKS.aiEmployees, LINKS.pricing, LINKS.security,
      { label: 'OpenAI integration', href: '/integrations/openai/' }, { label: 'Anthropic integration', href: '/integrations/anthropic/' }, { label: 'Groq integration', href: '/integrations/groq/' },
    ]),
    { kind: 'sources', items: [{ label: 'OpenRouter documentation', href: 'https://openrouter.ai/docs' }] },
    cta('One key, every model, all eight employees', `Connect OpenRouter and assign models by role. ${FACTS.byok}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
