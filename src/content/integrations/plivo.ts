import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/plivo/',
  title: 'Plivo Integration — SIP Trunking for AI Calling',
  eyebrow: 'Integrations · Telephony',
  metaTitle: 'Plivo Integration — Zentrunk SIP Trunking for AI Voice Agent Calls | Eligoo',
  metaDescription: 'Connect a Plivo Zentrunk SIP trunk to Eligoo and let the AI voice agent call and answer on your Plivo numbers. Enter the trunk credentials, verify, test; Plivo bills you for minutes.',
  primaryKeyword: 'Plivo AI voice agent',
  secondaryKeywords: ['Plivo Zentrunk AI calling', 'AI cold calling with Plivo', 'Plivo SIP trunk AI phone agent', 'SIP trunking for AI voice agents', 'Plivo outbound AI calls'],
  answer: 'The Plivo integration connects a Zentrunk SIP trunk from your Plivo account to Eligoo’s self-hosted voice stack, so Hook can place and receive AI phone calls on your Plivo numbers. You create the trunk in Plivo and enter its credentials in Eligoo; Plivo bills you for numbers and minutes, and Eligoo runs the call, the transcript and the outcome.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Plivo?',
      paragraphs: [
        'Zentrunk is Plivo’s SIP trunking product: it lets a SIP-capable system such as Eligoo’s LiveKit gateway send calls out through Plivo’s network and receive calls that arrive on Plivo numbers. In Eligoo, Plivo is one of four telephony options — alongside Twilio, Telnyx and Vobiz — and it is entered as trunk credentials rather than set up through an API.',
        'Teams pick Plivo when they already have numbers there, when its coverage or pricing suits their calling markets, or when they want a trunk that is entirely under their own configuration. Once the trunk is in, the calling experience is the same as with any other provider: approved campaigns, inbound dispatch, browser test calls, transcripts, outcomes and optional recordings.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Create a Zentrunk trunk in Plivo', text: 'In the Plivo console, create an outbound trunk with credential authentication and, for inbound, an inbound trunk. Assign a voice-capable number and note the SIP credentials and termination domain.' },
        { title: 'Enter the trunk in Eligoo', text: 'In workspace settings choose Plivo under telephony and paste the credentials and the number. Eligoo checks them, stores them server-side and shows them masked.' },
        { title: 'Route inbound to Eligoo', text: 'Set the Plivo inbound trunk’s destination to Eligoo’s SIP gateway address shown on the settings page.' },
        { title: 'Configure and test Hook', text: 'Choose speech-to-text, voice, model and behaviour preset; write the brief; make a browser test call and a real test call.' },
        { title: 'Approve a campaign', text: 'Build a calling campaign with a lead list, window and pace and submit it for approval. Calls are logged with transcript and outcome.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Plivo',
      items: [
        'Sent to Plivo on each call: SIP signalling using your trunk credentials, the dialled number and the call media.',
        'Received from Plivo: inbound signalling and media for calls to your number, when the inbound trunk is routed to Eligoo.',
        'Not sent: prospect lists, transcripts, CRM data or other integrations’ keys. Plivo sees numbers and audio only.',
        'Your trunk credentials are stored server-side in your workspace, masked in the interface, and never returned to the browser. No Plivo API key is required.',
        'Charges for minutes and numbers appear on your Plivo account under Plivo’s terms.',
      ],
    },
    employees(['hook'], 'Which AI employees use it', undefined, {
      hook: 'Makes outbound campaign calls and answers inbound calls on the connected Plivo trunk.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Outbound campaigns', text: 'Approved lists dialled inside a window at a set pace with retries and outcomes handled.', icon: 'phone' },
        { title: 'Inbound qualification', text: 'Calls to your Plivo number answered and qualified when the team is busy.', icon: 'clock' },
        { title: 'Meeting booking', text: 'Slots offered and confirmed on the call, with a calendar event when Google is connected.', icon: 'calendar' },
        { title: 'Regional numbers', text: 'Use Plivo numbers local to your calling markets.', icon: 'globe' },
      ],
    },
    pricingPointer('calling'),
    faq([
      { q: 'Can an AI voice agent use Plivo Zentrunk?', a: 'Yes. Create a Zentrunk trunk in Plivo, enter its credentials in Eligoo, and Hook calls and answers on the assigned number.' },
      { q: 'Is the Plivo trunk created automatically?', a: 'No. Automatic trunk creation is only available for Twilio. For Plivo you create the trunk in the Plivo console and paste the credentials.' },
      { q: 'Do I need a Plivo API key?', a: 'No. Eligoo uses the trunk’s SIP credentials only.' },
      { q: 'Who pays for the calls?', a: 'Plivo bills your account for minutes and numbers. Eligoo credits cover call minutes on the platform side; see the pricing page.' },
      { q: 'Can I switch from Plivo to another provider later?', a: 'Yes. Connect the new trunk, select its number on new campaigns and remove the old one when you are ready. Nothing else in the workspace changes.' },
    ]),
    related([
      LINKS.voice, LINKS.hook, LINKS.ucColdCalling, LINKS.ucAppointments,
      { label: 'Telnyx integration', href: '/integrations/telnyx/' }, { label: 'Vobiz integration', href: '/integrations/vobiz/' }, { label: 'Twilio integration', href: '/integrations/twilio/' },
    ]),
    { kind: 'sources', items: [{ label: 'Plivo documentation', href: 'https://www.plivo.com/docs' }] },
    cta('Bring your Plivo trunk to Eligoo', `Enter the Zentrunk credentials, test from the browser, approve a campaign. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
