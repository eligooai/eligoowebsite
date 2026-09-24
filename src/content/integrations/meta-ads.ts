import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/meta-ads/',
  title: 'Meta Ads Integration — AI Paid Acquisition',
  eyebrow: 'Integrations · Advertising',
  metaTitle: 'Meta Ads Integration — AI Paid Acquisition With Approval-Gated Spend | Eligoo',
  metaDescription: 'Connect your Meta ad account and let Boost read campaigns and insights, prepare approval packages and — only after approval — pause, activate, change budgets or launch. Every spend change waits for a person.',
  primaryKeyword: 'AI Meta Ads management',
  secondaryKeywords: ['AI marketing automation with Meta', 'AI paid acquisition Facebook ads', 'AI agent manage Meta Ads', 'Meta Ads automation with approval', 'AI ads specialist Meta'],
  answer: 'The Meta Ads integration connects your Meta ad account to Eligoo so Boost — the optional AI paid acquisition specialist — can read your campaigns, ad sets, ads and insights, prepare plans and approval packages, and carry out approved changes. Reading is continuous; pausing, activating, setting budgets and launching campaigns are approval-gated actions that wait for a person every time.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Meta Ads?',
      paragraphs: [
        'Boost works in your Meta ad account the way a careful media buyer would: it reads what is running and how it is performing, proposes what to do next in an approval package — audience specs, a creative test matrix, a budget proposal and stop rules — and then executes only the actions you approved. Meta Ads is the only advertising connector in Eligoo today; Google Ads and LinkedIn Ads plans are produced as documents, not executed.',
        'The separation between reading and acting is the point of the integration. Insights are pulled on a schedule so Boost’s reports and Ledger’s attribution stay current without anyone touching the account. Changes to the account — pause, activate, budget, bid, launch — each go through the approvals queue, are executed once, and are logged with who approved them. If an execution fails, the item returns to pending rather than being retried silently.',
        'Creative comes from Pixel, which produces ad variants to Boost’s test matrix, and messaging from Maven. Sage’s organic publishing uses separate Page and Instagram connections; Meta Ads permissions are not used for organic posts.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Sign in with Facebook and choose the ad account', text: 'In workspace settings choose Meta Ads and sign in with a user that has access to the ad account. The permissions requested cover reading and managing ads. Select the ad account this workspace may work in.' },
        { title: 'Boost reads the account', text: 'Campaign structure, status, budgets and insights are read on a schedule and summarised in Boost’s paid performance view.' },
        { title: 'Boost prepares an approval package', text: 'For a new campaign: objective, audiences, creative matrix from Pixel, budget and stop rules. For an existing one: the specific change and the reason. Nothing changes yet.' },
        { title: 'You approve', text: 'Each package or change sits in the approvals queue. Approve, edit or reject. Decisions are logged.' },
        { title: 'Boost executes and monitors', text: 'The approved change is applied through the Meta API. Boost keeps reading insights against the stop rules and raises the next proposal rather than acting on its own.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Meta Ads',
      items: [
        'Read from Meta: the ad accounts your user can access (to let you choose one), and for the chosen account the campaigns, ad sets, ads, their statuses and budgets, and performance insights.',
        'Written to Meta, only after approval: pausing or activating campaigns, ad sets or ads; setting budgets; creating and launching campaigns with approved audiences and creative. Each write corresponds to a logged approval.',
        'Not accessed: your Page inbox, organic posts, or accounts you did not select. Organic publishing uses the separate Facebook Pages and Instagram connections.',
        'Your access token is stored server-side in your workspace, never returned to the browser, and revoked when you disconnect or remove the app in Meta Business settings.',
        'Ad spend is charged by Meta to the payment method on your ad account, under Meta’s advertising terms. Eligoo does not handle ad payments.',
      ],
    },
    employees(['boost', 'pixel', 'maven', 'ledger'], 'Which AI employees use it', undefined, {
      boost: 'Reads the account, prepares approval packages and executes approved changes.',
      pixel: 'Produces the ad creative variants in Boost’s test matrix; never touches the ad account.',
      maven: 'Supplies positioning and messaging the campaigns follow.',
      ledger: 'Uses Boost’s reported results in attribution and revenue reporting.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Paid performance reporting', text: 'Campaign results read on a schedule and summarised against your goals.', icon: 'chart' },
        { title: 'Structured creative testing', text: 'A test matrix with variants from Pixel, launched as one approved package.', icon: 'layers' },
        { title: 'Budget proposals with stop rules', text: 'Boost proposes budget moves with the conditions under which it would propose stopping; you approve each one.', icon: 'shield' },
        { title: 'Lead-gen campaigns that feed sales', text: 'Approved lead campaigns whose results flow to Radar and Hook for follow-up.', icon: 'target' },
      ],
    },
    pricingPointer('Boost'),
    faq([
      { q: 'Can an AI agent manage my Meta Ads?', a: 'Boost can read your account, propose changes and execute the ones you approve. It does not change spend, budgets or campaign status on its own.' },
      { q: 'What exactly needs approval?', a: 'Launching a campaign, pausing or activating anything, changing a budget or bid. Reading insights and preparing proposals do not.' },
      { q: 'Does Eligoo run Google Ads or LinkedIn Ads?', a: 'No. Boost plans those channels but only Meta Ads is connected for execution today.' },
      { q: 'Where does the ad creative come from?', a: 'Pixel generates or edits images and video to Boost’s creative brief; you review them before they are part of an approval package.' },
      { q: 'Who pays for the ads?', a: 'Meta charges your ad account directly, and your AI provider bills the model usage on your own key. Boost is included on Eligoo plans that list paid ads; see the pricing page.' },
      { q: 'What happens if an approved change fails to apply?', a: 'The item returns to pending in the approvals queue with the error, and nothing is retried without a person seeing it.' },
    ]),
    related([
      LINKS.marketing, LINKS.boost, LINKS.pixel, LINKS.ledger,
      { label: 'Marketing automation use case', href: '/use-cases/marketing-automation/' }, { label: 'AI marketing agent vs agency', href: '/compare/ai-marketing-agent-vs-agency/' },
      { label: 'Facebook Pages integration', href: '/integrations/facebook-pages/' }, { label: 'Instagram integration', href: '/integrations/instagram/' }, { label: 'fal.ai integration', href: '/integrations/fal-ai/' },
    ]),
    { kind: 'sources', items: [{ label: 'Meta for Developers documentation', href: 'https://developers.facebook.com/docs' }] },
    cta('Put a media buyer on your Meta account that asks first', `Connect the ad account, review Boost’s first package, approve what you like. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
