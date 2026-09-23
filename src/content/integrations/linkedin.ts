import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/linkedin/',
  title: 'LinkedIn Integration — AI Content Publishing',
  eyebrow: 'Integrations · Publishing',
  metaTitle: 'LinkedIn Integration — AI Publishing of Approved Posts to LinkedIn | Eligoo',
  metaDescription: 'Connect LinkedIn over OAuth and let Sage publish approved posts to your profile or company page on schedule. B2B content written by an AI employee, reviewed by you, published directly to LinkedIn.',
  primaryKeyword: 'AI LinkedIn publishing',
  secondaryKeywords: ['can an AI agent post to LinkedIn', 'automate LinkedIn posts with AI', 'AI LinkedIn content employee', 'LinkedIn company page AI posting', 'B2B content automation LinkedIn'],
  answer: 'The LinkedIn integration connects your LinkedIn profile or company page to Eligoo so Sage can publish the posts on your approved content calendar directly to LinkedIn. It is the channel most B2B customers care about most, so the workflow is deliberate: Maven sets the themes, Sage writes, you approve, Sage publishes on schedule and reports back.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with LinkedIn?',
      paragraphs: [
        'For manufacturers, exporters, solar installers and other B2B companies, LinkedIn is where buyers look before they reply to an email or take a call. Eligoo uses the LinkedIn connection to keep that presence current: Sage writes posts that follow the positioning Maven established, pairs them with visuals from Pixel where useful, and publishes each approved post through the LinkedIn API at its scheduled time.',
        'The connection is made with your own LinkedIn sign-in, so posts appear from your profile or from a company page you administer, exactly as if you had posted them. Eligoo does not use browser automation or a shared account, and it publishes only — it does not send connection requests, InMail or messages, and Hook’s outreach never runs on LinkedIn.',
        'Posting to LinkedIn is not the same as LinkedIn advertising. Boost’s paid work is limited to Meta Ads today; LinkedIn Ads is planning-only.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Sign in with LinkedIn', text: 'In workspace settings choose LinkedIn and sign in. LinkedIn shows the permissions requested, which cover posting on behalf of your profile and any company pages you administer.' },
        { title: 'Choose where to publish', text: 'Select your profile, a company page, or both as destinations. Tokens are stored server-side and shown as connected.' },
        { title: 'Approve a calendar', text: 'Sage proposes LinkedIn posts — themes, timings, any images or documents — alongside the rest of the content plan. You approve or edit.' },
        { title: 'Sage publishes', text: 'Approved posts go out at their times to the chosen destination. Each post link is recorded in the activity log.' },
        { title: 'Report', text: 'LinkedIn results are part of Sage’s organic performance report, with suggested themes for the next calendar.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and LinkedIn',
      items: [
        'Read from LinkedIn: your profile identity and the company pages you administer (to let you choose destinations), and details of the posts Eligoo published so they can be linked and reported.',
        'Written to LinkedIn: the posts Sage publishes — text, with images or video where the calendar includes them — at approved times.',
        'Not read: your connections, messages, feed, or other people’s profiles. Eligoo does not prospect on LinkedIn; Radar uses Apollo and web search instead.',
        'Your access token is stored server-side in your workspace, never returned to the browser, and revoked when you disconnect. LinkedIn tokens expire periodically and Eligoo prompts you to reconnect.',
        'Publishing runs under your LinkedIn account and is subject to LinkedIn’s API terms.',
      ],
    },
    employees(['sage', 'maven', 'pixel'], 'Which AI employees use it', undefined, {
      sage: 'Writes LinkedIn posts and publishes the approved ones.',
      maven: 'Defines positioning, themes and the messaging hierarchy the posts follow.',
      pixel: 'Produces visuals and short video for posts that need them; never publishes.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'A weekly LinkedIn rhythm', text: 'Posts written in your voice on approved themes, published on schedule from your profile or page.', icon: 'calendar' },
        { title: 'Case-study and capability posts', text: 'A completed project or a new capability turned into a post series from a short brief.', icon: 'building' },
        { title: 'Article repurposing', text: 'Website articles Sage wrote, condensed into LinkedIn posts that link back.', icon: 'layers' },
        { title: 'Outreach support', text: 'Prospects that Hook emails or calls see an active company page when they look you up.', icon: 'users' },
      ],
    },
    pricingPointer('publishing'),
    faq([
      { q: 'Can an AI agent post to LinkedIn?', a: 'Yes. Connect LinkedIn with your own sign-in and Sage publishes approved posts to your profile or company page through the LinkedIn API.' },
      { q: 'Can Eligoo send LinkedIn messages or connection requests?', a: 'No. The integration publishes posts only. Hook’s outreach runs over email and phone.' },
      { q: 'Does Eligoo run LinkedIn Ads?', a: 'Not today. Boost can plan LinkedIn campaigns but its only ad connector is Meta Ads.' },
      { q: 'Will posts look automated?', a: 'They appear from your profile or page like any other post. Whether they read as genuine depends on the brief and your edits — the calendar is yours to shape before approval.' },
      { q: 'Why does LinkedIn ask me to reconnect?', a: 'LinkedIn access tokens expire on a fixed schedule. Eligoo shows the connection as needing attention before publishing fails, and reconnecting takes one sign-in.' },
    ]),
    related([
      LINKS.marketing, LINKS.sage, LINKS.maven,
      { label: 'Content creation use case', href: '/use-cases/content-creation/' }, { label: 'Social media use case', href: '/use-cases/social-media/' }, { label: 'AI marketing workflow template', href: '/resources/templates/ai-marketing-workflow/' },
      { label: 'YouTube integration', href: '/integrations/youtube/' }, { label: 'Threads integration', href: '/integrations/threads/' }, { label: 'Facebook Pages integration', href: '/integrations/facebook-pages/' },
    ]),
    { kind: 'sources', items: [{ label: 'LinkedIn developer documentation', href: 'https://learn.microsoft.com/linkedin' }] },
    cta('Be present on LinkedIn every week', `Connect your profile or page, approve a calendar, and Sage publishes. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
