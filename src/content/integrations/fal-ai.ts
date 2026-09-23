import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/fal-ai/',
  title: 'fal.ai Integration — AI Image and Video Generation',
  eyebrow: 'Integrations · Creative',
  metaTitle: 'fal.ai Integration — AI Image and Video Generation for Marketing Creative | Eligoo',
  metaDescription: 'Connect your fal.ai key and Pixel generates images and video for posts, ads and thumbnails, then edits them with ffmpeg inside your workspace. fal.ai bills you per generation; a person reviews before anything is published.',
  primaryKeyword: 'fal.ai integration AI creative',
  secondaryKeywords: ['AI image generation for marketing', 'AI video generation for ads', 'AI creative production agent', 'generate ad creative with AI', 'fal.ai for business'],
  answer: 'The fal.ai integration is how Pixel — the AI creative production agent — generates images and video. With your fal.ai API key connected, Pixel produces visuals to a brief from Sage, Boost or you, then trims, resizes, captions and converts them with ffmpeg inside the workspace, and places the results in the assets library for review. fal.ai bills you per generation on your own account; nothing Pixel makes is published without a person approving it.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with fal.ai?',
      paragraphs: [
        'fal.ai hosts generative image and video models behind a fast API. Eligoo uses it as Pixel’s generation engine: when a calendar item needs a product visual, an ad needs six creative variants, or a YouTube upload needs a thumbnail, Pixel writes the generation prompts from the brief, calls fal.ai with your key, and receives the media.',
        'Generation is only half of Pixel’s job. The other half runs locally in the workspace with ffmpeg: trimming and concatenating clips, resizing to each channel’s format, burning in captions, adjusting audio, converting formats and extracting thumbnails. Your own footage and photos can go through the same pipeline without any generation at all.',
        'Pixel never publishes. Every asset lands in the assets library with its brief and the prompt used, where it is reviewed before Sage schedules it or Boost includes it in an approval package.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Create a key at fal.ai', text: 'Sign up at fal.ai, add a payment method and generate an API key.' },
        { title: 'Add fal.ai in workspace settings', text: 'Paste the key under media providers. Eligoo verifies it, stores it server-side and shows it masked.' },
        { title: 'Pixel receives a brief', text: 'From Sage’s calendar, Boost’s creative matrix, Atlas’s task board or your chat message: what the asset is for, format, style, text to include, references.' },
        { title: 'Generate, then edit', text: 'Pixel calls fal.ai for the raw image or video, then applies ffmpeg edits — sizes for each channel, captions, thumbnails — in the workspace.' },
        { title: 'Review in the assets library', text: 'Assets, prompts and variants are there for you to approve, reject or ask for changes. Approved assets are used by Sage or Boost.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and fal.ai',
      items: [
        'Sent to fal.ai: the generation prompts Pixel writes, the chosen model and parameters, and — for image-to-image or reference-based generation — the reference images or clips you provided for that purpose.',
        'Received from fal.ai: the generated images and videos, which are stored in your workspace’s assets library.',
        'Kept in the workspace: all ffmpeg editing of generated or uploaded media happens inside Eligoo, not at fal.ai. Your own footage is only sent to fal.ai if a task explicitly uses it as a reference.',
        'Not sent: your CRM, calendar, documents or other integrations’ keys.',
        'Your API key stays server-side in your workspace and is never returned to the browser. Generation runs under your own fal.ai account, so fal.ai’s terms and the licence terms of the models you choose apply to the output.',
      ],
    },
    employees(['pixel', 'sage', 'boost'], 'Which AI employees use it', undefined, {
      pixel: 'Writes prompts, generates through fal.ai, edits with ffmpeg and files the results. The only employee that calls fal.ai.',
      sage: 'Briefs Pixel from the content calendar and publishes approved assets.',
      boost: 'Briefs Pixel with a creative test matrix and includes approved variants in ad approval packages.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Social visuals on a calendar', text: 'Images and short video for every scheduled post, sized per channel.', icon: 'image' },
        { title: 'Ad creative variants', text: 'A matrix of variants per angle and format for Boost’s tests.', icon: 'layers' },
        { title: 'Video edits from your footage', text: 'Trims, captions, resizes and thumbnails from clips you already have — no generation needed.', icon: 'sparkles' },
        { title: 'YouTube thumbnails', text: 'Generated or extracted thumbnails for each upload.', icon: 'check' },
      ],
    },
    pricingPointer('Pixel'),
    faq([
      { q: 'Can an AI employee create marketing images and videos?', a: 'Yes. Pixel generates them through fal.ai with your key and edits them with ffmpeg in the workspace, then files them for your review.' },
      { q: 'Which models does Pixel use?', a: 'Models available on fal.ai for image and video generation. Eligoo selects appropriate defaults; you can specify a preference in the brief.' },
      { q: 'Will generated images be posted automatically?', a: 'No. Pixel never publishes. Assets go to the assets library for review, and Sage publishes only approved items on an approved calendar.' },
      { q: 'Who pays for generation?', a: 'fal.ai bills your account per generation. Generated media also draws from your Eligoo credits at the platform rate on the pricing page.' },
      { q: 'Can Pixel edit videos I already have without generating anything?', a: 'Yes. Upload footage to the assets library and brief Pixel; ffmpeg edits do not use fal.ai at all.' },
      { q: 'Who owns the generated images?', a: 'Rights to generated output are governed by fal.ai’s terms and the licence of the model used. Review them before commercial use, especially for advertising.' },
    ]),
    related([
      LINKS.marketing, LINKS.pixel, LINKS.sage, LINKS.boost,
      { label: 'Content creation use case', href: '/use-cases/content-creation/' }, { label: 'Social media use case', href: '/use-cases/social-media/' },
      { label: 'Instagram integration', href: '/integrations/instagram/' }, { label: 'YouTube integration', href: '/integrations/youtube/' }, { label: 'Meta Ads integration', href: '/integrations/meta-ads/' },
    ]),
    { kind: 'sources', items: [{ label: 'fal.ai documentation', href: 'https://fal.ai/docs' }] },
    cta('Give Pixel a brief', `Connect fal.ai, describe the asset, and review the first variants in the library. ${FACTS.byok}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
