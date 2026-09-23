import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/content-creation/',
  title: 'AI Content Creation',
  eyebrow: 'Use cases · Content creation',
  metaTitle: 'AI Content Creation — Website Copy, Posts, Newsletters, Scripts, Images and Video | Eligoo',
  metaDescription: 'AI content creation with Eligoo: Sage writes website copy, social posts, newsletters and scripts from your material, Pixel produces the images and video, and Maven keeps it on message.',
  primaryKeyword: 'AI content creation',
  secondaryKeywords: ['AI content creation for B2B', 'AI content writer', 'AI content marketing', 'AI content generation', 'AI video content creation', 'AI content production'],
  answer: 'AI content creation is the production of written and visual marketing material — website copy, posts, newsletters, scripts, images and video — by AI employees working from a brief and your own source material. In Eligoo, Sage writes and Pixel produces the visuals, following the positioning Maven set, and everything is reviewed before it is published.',
  sections: [
    {
      kind: 'prose',
      heading: 'What the problem looks like',
      paragraphs: [
        'A B2B company needs a steady supply of content — product pages, case-study drafts, a newsletter, social posts, video scripts, images for all of it — and rarely has anyone whose job that is. The founder or the sales team writes in bursts, an agency produces material that has to be corrected because it does not understand the product, and the website stays as it was three years ago.',
        'Content also has to stay consistent with how the company positions itself. Without a written messaging framework, every piece starts from scratch and says something slightly different.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo handles content creation',
      steps: [
        { title: 'Maven writes the framework', text: 'Positioning, the messaging hierarchy and the audience segments. Every piece Sage writes follows it, so the website, the newsletter and the posts say the same thing.' },
        { title: 'You supply the material', text: 'Product specifications, project details, photos, footage, notes from the engineers and whatever else is real. Sage writes from it and does not invent facts about your business.' },
        { title: 'Sage drafts', text: 'Website copy, product and service pages, social posts, newsletters, call and video scripts, each as a draft in the workspace with the brief it followed.' },
        { title: 'Pixel produces the visuals', text: 'Generated and edited images, short videos, trims, captions, resizes and thumbnails to a spec; ad variants when Boost needs them. Assets are stored in the library.' },
        { title: 'You review and it publishes', text: 'Approved social posts publish through Sage’s connections; website copy and newsletters are handed to you to publish in your own systems.' },
      ],
    },
    {
      kind: 'features',
      heading: 'Deliverables',
      items: [
        { title: 'Website and landing page copy', text: 'Product, service and industry pages structured around what buyers search for.', icon: 'globe' },
        { title: 'Social posts', text: 'Written per channel from the calendar, ready for approval and publishing.', icon: 'megaphone' },
        { title: 'Newsletters', text: 'Regular updates drafted from what happened this month — projects, launches, articles.', icon: 'mail' },
        { title: 'Scripts', text: 'Video scripts, call scripts and meeting outlines that match the messaging framework.', icon: 'pen' },
        { title: 'Images and video', text: 'Generated or edited from your source material, with captions, thumbnails and platform sizes.', icon: 'image' },
        { title: 'Case-study drafts', text: 'Structured from the facts you provide about a completed project, ready for the customer to review.', icon: 'layers' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: refreshing a component manufacturer’s website',
      scenario: 'A component manufacturer’s website lists products but explains nothing; the sales team keeps answering the same questions by email.',
      steps: [
        'Maven writes the positioning and a messaging hierarchy for the three buyer types the company sells to.',
        'Sage lists the questions sales keeps answering, drafts a page for each product family that answers them, and writes an FAQ per page.',
        'Pixel produces clean product images from the existing photos and a short process video for the capabilities page.',
        'The team reviews the drafts in the workspace, corrects two technical details, and publishes the pages on its own site.',
        'Sage turns the same material into a month of posts and a newsletter announcing the new pages.',
      ],
      outcome: 'The website answers the questions buyers actually ask, in the company’s own voice, and the sales team links to pages instead of retyping answers.',
    },
    employees(['sage', 'pixel', 'maven'], 'AI employees involved', undefined, {
      sage: 'Writes copy, posts, newsletters, scripts.',
      pixel: 'Images, video, edits, thumbnails.',
      maven: 'Positioning and messaging framework.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Google Drive and Docs for source material and drafts.',
        'fal.ai for image and video generation; ffmpeg for editing, captions and thumbnails.',
        'LinkedIn, Instagram, Facebook Pages, Threads and YouTube for publishing approved social content.',
        'Any language model from your connected OpenAI, Anthropic, Google Gemini, Groq or OpenRouter account.',
      ],
    },
    pricingPointer('content production'),
    faq([
      { q: 'Can AI create content for a technical B2B business?', a: 'Yes, when it works from real material. Sage writes from the specifications, project details and notes you provide and from your existing website, following the positioning Maven wrote. It does not invent capabilities or figures.' },
      { q: 'Who owns the content?', a: 'You do. Drafts, published posts and generated assets live in your workspace and can be exported.' },
      { q: 'Does Eligoo publish to our website?', a: 'No. Website copy is delivered as drafts for you to publish in your own CMS. Social posts publish through direct connections to the supported platforms.' },
      { q: 'Which AI model writes the content?', a: 'Whichever model you assign to Sage from your connected provider accounts. You can set a workspace default and override it per employee.' },
      { q: 'Can it produce video?', a: 'Pixel generates video through fal.ai and edits existing footage with ffmpeg — trims, concatenation, captions, audio and thumbnails. Longer produced pieces still benefit from a person directing the edit.' },
      { q: 'How do I keep the tone consistent?', a: 'Through Maven’s messaging framework and by correcting drafts in the workspace. Sage keeps to the approved positioning across every piece.' },
    ]),
    related([
      LINKS.marketing, LINKS.sage, LINKS.pixel, LINKS.maven,
      { label: 'Social media use case', href: '/use-cases/social-media/' },
      { label: 'SEO use case', href: '/use-cases/seo/' },
      { label: 'fal.ai integration', href: '/integrations/fal-ai/' },
      { label: 'Google Workspace integration', href: '/integrations/google-workspace/' },
    ]),
    cta('Get the content written', 'Share your material, approve the messaging framework and let Sage and Pixel produce the first month.'),
  ],
  breadcrumb: CRUMBS.useCases,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
