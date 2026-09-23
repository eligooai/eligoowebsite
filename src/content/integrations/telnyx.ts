import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/telnyx/',
  title: 'Telnyx Integration — SIP Trunking for AI Calling',
  eyebrow: 'Integrations · Telephony',
  metaTitle: 'Telnyx Integration — SIP Trunking for AI Voice Agent Calls | Eligoo',
  metaDescription: 'Bring a Telnyx SIP trunk to Eligoo and let Hook make and receive AI phone calls on your Telnyx numbers. Enter the trunk credentials, verify, test from the browser; Telnyx bills you for minutes.',
  primaryKeyword: 'Telnyx AI voice agent',
  secondaryKeywords: ['Telnyx SIP trunk AI calling', 'AI cold calling with Telnyx', 'Telnyx AI phone agent', 'SIP trunking for AI voice agents', 'Telnyx outbound AI calls'],
  answer: 'The Telnyx integration connects a SIP trunk from your Telnyx account to Eligoo’s self-hosted voice stack so the AI voice agent can call out and answer on your Telnyx numbers. Unlike Twilio, the trunk is set up in Telnyx by you and its credentials are entered in Eligoo manually. Telnyx bills you for numbers and minutes; Eligoo handles the call.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Telnyx?',
      paragraphs: [
        'Telnyx is a carrier-grade telephony provider with SIP trunking and numbers across many countries, and a popular choice for teams that want direct control over routing and per-minute pricing. In Eligoo it is one of four ways to give Hook a phone line. You create a SIP connection in Telnyx, assign a number to it, and paste the connection’s SIP credentials into Eligoo; Eligoo’s LiveKit SIP gateway then registers against that trunk for outbound calls and receives inbound calls routed to it.',
        'The setup is a little more hands-on than Twilio, where Eligoo builds the trunk for you, but it suits teams that already run their telephony on Telnyx or need a number that Twilio does not offer in their market.',
        'Everything downstream of the trunk is identical: campaigns with windows and pace, inbound dispatch, transcripts, outcomes, optional recordings and the same approval gate before any campaign starts.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Create a SIP connection in Telnyx', text: 'In the Telnyx portal, create a credential-based SIP connection, assign a voice-capable number to it, and note the SIP username, password and the Telnyx SIP domain.' },
        { title: 'Enter the trunk in Eligoo', text: 'In workspace settings choose Telnyx under telephony, paste the SIP credentials and the number. Eligoo checks the credentials, stores them server-side and shows them masked.' },
        { title: 'Point inbound at Eligoo', text: 'For inbound calls, set the connection’s inbound routing in Telnyx to Eligoo’s SIP gateway address shown on the settings page.' },
        { title: 'Configure and test the agent', text: 'Choose speech-to-text, a voice, a model and a behaviour preset, write the brief, then make a browser test call and a test call to a real phone.' },
        { title: 'Approve a campaign', text: 'Create a calling campaign — lead list, calling window, pace — and submit it. Nothing is dialled until a person approves it.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Telnyx',
      items: [
        'Sent to Telnyx on each call: SIP registration and signalling using your trunk credentials, the dialled number, and the call media over the trunk.',
        'Received from Telnyx: inbound call signalling and media for calls to your number, when inbound routing points at Eligoo.',
        'Not sent: your prospect list, transcripts, CRM data or other integrations’ keys. Telnyx sees phone numbers and audio, not the agent’s brief or reasoning.',
        'Your SIP credentials are stored server-side in your workspace, masked in the interface, and never returned to the browser. Eligoo does not use the Telnyx API and does not need an API key.',
        'Call charges and number rental appear on your Telnyx account under Telnyx’s terms.',
      ],
    },
    employees(['hook'], 'Which AI employees use it', undefined, {
      hook: 'Places outbound campaign calls and answers inbound calls on the connected Telnyx trunk.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Outbound calling campaigns', text: 'Approved lists worked inside a calling window with per-call outcomes and daily roll-over.', icon: 'phone' },
        { title: 'Inbound answering', text: 'Calls to the Telnyx number are answered, qualified and logged when nobody is available.', icon: 'clock' },
        { title: 'Appointment setting', text: 'Meetings booked on the call, with a calendar event and Meet link when Google is connected.', icon: 'calendar' },
        { title: 'International numbers', text: 'Use Telnyx numbers in the markets you sell into so calls carry a local caller ID.', icon: 'globe' },
      ],
    },
    pricingPointer('calling'),
    faq([
      { q: 'Can an AI voice agent use a Telnyx SIP trunk?', a: 'Yes. Create a SIP connection in Telnyx, enter its credentials in Eligoo, and Hook calls and answers on the assigned number.' },
      { q: 'Does Eligoo create the Telnyx trunk automatically like it does for Twilio?', a: 'No. For Telnyx you create the SIP connection in the Telnyx portal and enter the credentials manually.' },
      { q: 'What do I need from Telnyx?', a: 'A voice-capable number, a credential-based SIP connection with a username and password, and — for inbound — the connection routed to Eligoo’s SIP gateway.' },
      { q: 'Who pays for the calls?', a: 'Telnyx bills your account for minutes and numbers. Eligoo credits cover call minutes on the platform side; rates are on the pricing page.' },
      { q: 'Can I connect more than one trunk?', a: 'You can connect trunks from several providers to a workspace and choose which number a campaign uses.' },
    ]),
    related([
      LINKS.voice, LINKS.hook, LINKS.ucColdCalling, LINKS.ucOutbound,
      { label: 'Twilio integration', href: '/integrations/twilio/' }, { label: 'Plivo integration', href: '/integrations/plivo/' }, { label: 'LiveKit voice stack', href: '/integrations/livekit/' },
    ]),
    { kind: 'sources', items: [{ label: 'Telnyx developer documentation', href: 'https://developers.telnyx.com' }] },
    cta('Bring your Telnyx trunk to Eligoo', `Enter the credentials, test from the browser, approve a campaign. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
