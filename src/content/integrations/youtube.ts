import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/youtube/',
  title: 'YouTube Integration — AI Video Publishing',
  eyebrow: 'Integrations · Publishing',
  metaTitle: 'YouTube Integration — AI Video Uploads With Title, Description and Thumbnail | Eligoo',
  metaDescription: 'Connect your YouTube channel over Google OAuth and let Sage upload approved videos with title, description, privacy setting and an optional thumbnail. Pixel edits the video; a person approves before upload.',
  primaryKeyword: 'AI YouTube publishing',
  secondaryKeywords: ['AI agent upload to YouTube', 'automate YouTube uploads', 'AI video employee YouTube', 'YouTube content calendar AI', 'AI generated video YouTube'],
  answer: 'The YouTube integration connects your channel to Eligoo through Google sign-in so Sage can upload approved videos with a title, description, privacy setting and an optional thumbnail. Pixel produces or edits the video and thumbnail, Sage writes the metadata and performs the upload, and every video is on an approved calendar or waiting in the approvals queue.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with YouTube?',
      paragraphs: [
        'Video is the most expensive content to produce and the easiest to let slip. Eligoo covers the mechanical part: Pixel generates short videos through fal.ai or edits your own footage with ffmpeg — trims, resizes, captions, concatenation, thumbnails — and Sage writes the title and description with the SEO keywords in mind, then uploads through the YouTube connection.',
        'The connection uses Google OAuth against your channel. It is separate from the Google Workspace connection, though both use a Google sign-in, because YouTube needs its own permissions. Sage can set the privacy status on upload — private, unlisted or public — so a common pattern is to upload as unlisted for a final check and switch to public on approval.',
        'Sage is the only employee that uploads. Pixel makes the file and thumbnail but never publishes.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Sign in with Google and pick the channel', text: 'In workspace settings choose YouTube and sign in with the Google account that owns or manages the channel. The permissions cover uploading and managing videos.' },
        { title: 'Connection is verified', text: 'Eligoo confirms the channel, stores the token server-side and shows it as connected.' },
        { title: 'Approve a video calendar', text: 'Sage proposes videos with briefs for Pixel, working titles, descriptions, tags and privacy settings. You approve or edit.' },
        { title: 'Pixel produces the video and thumbnail', text: 'Generated or edited to the brief and placed in the assets library for review.' },
        { title: 'Sage uploads', text: 'The approved video is uploaded with its title, description, privacy setting and thumbnail. The video link is recorded in the activity log and included in the organic performance report.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and YouTube',
      items: [
        'Read from YouTube: the channel identity for the signed-in account, and details of videos Eligoo uploaded so they can be linked and reported.',
        'Written to YouTube: the video file, title, description, privacy status and — when provided — a custom thumbnail, for each approved upload.',
        'Not read: your channel’s comments, subscribers, analytics beyond the uploaded items, or other channels.',
        'Your access token is stored server-side in your workspace, never returned to the browser, and revoked when you disconnect or remove access in your Google account.',
        'Uploads run under your Google account and are subject to YouTube’s API terms and community guidelines; you remain responsible for the content.',
      ],
    },
    employees(['sage', 'pixel', 'maven'], 'Which AI employees use it', undefined, {
      sage: 'Writes titles, descriptions and tags, and performs the upload with the chosen privacy setting.',
      pixel: 'Produces or edits the video and the thumbnail; never uploads.',
      maven: 'Sets the video themes as part of the channel plan.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Product and process videos', text: 'Short explainers generated to a brief or cut from footage you already have.', icon: 'image' },
        { title: 'Captioned social cuts', text: 'Pixel adds captions and resizes; Sage uploads and cross-references the post on other channels.', icon: 'sparkles' },
        { title: 'SEO-aware metadata', text: 'Titles and descriptions written from Sage’s keyword research.', icon: 'search' },
        { title: 'Review-then-publish', text: 'Upload as unlisted, review, switch to public on approval.', icon: 'check' },
      ],
    },
    pricingPointer('publishing'),
    faq([
      { q: 'Can an AI agent upload videos to my YouTube channel?', a: 'Yes. Connect the channel with Google sign-in and Sage uploads approved videos with title, description, privacy setting and thumbnail.' },
      { q: 'Does Eligoo make the videos too?', a: 'Pixel generates video through fal.ai and edits footage with ffmpeg. Whether a given video is good enough to publish is your call at review.' },
      { q: 'Can I review before it goes public?', a: 'Yes. Set the privacy to unlisted or private on upload, review the video on YouTube, and approve the switch to public.' },
      { q: 'Is the YouTube connection the same as Google Workspace?', a: 'No. They are separate connections with separate permissions, even if the same Google account is used for both.' },
      { q: 'Does uploading cost extra?', a: 'No. Publishing is included on plans that list it, with no per-post charges from Eligoo. YouTube itself does not charge for uploads; media generation is billed by fal.ai on your own account.' },
    ]),
    related([
      LINKS.marketing, LINKS.sage, LINKS.pixel,
      { label: 'Content creation use case', href: '/use-cases/content-creation/' }, { label: 'SEO use case', href: '/use-cases/seo/' },
      { label: 'fal.ai integration', href: '/integrations/fal-ai/' }, { label: 'LinkedIn integration', href: '/integrations/linkedin/' }, { label: 'Google Workspace integration', href: '/integrations/google-workspace/' },
    ]),
    { kind: 'sources', items: [{ label: 'YouTube Data API documentation', href: 'https://developers.google.com/youtube' }] },
    cta('Keep the channel moving', `Connect YouTube, approve a video calendar, and Pixel and Sage take it from there. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
