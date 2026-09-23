import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/twilio/',
  title: 'Twilio Integration — Phone Numbers for AI Voice Agents',
  eyebrow: 'Integrations · Telephony',
  metaTitle: 'Twilio Integration — Phone Numbers and SIP Trunking for AI Voice Agents | Eligoo',
  metaDescription: 'Connect Twilio to Eligoo with your Account SID, Auth Token and a number; Eligoo creates the Elastic SIP trunk automatically and Hook makes and receives AI calls on your own Twilio number.',
  primaryKeyword: 'Twilio AI voice agent',
  secondaryKeywords: ['Twilio SIP trunk AI calling', 'AI cold calling with Twilio', 'Twilio Elastic SIP trunking AI agent', 'AI phone agent on Twilio number', 'Twilio outbound AI calls'],
  answer: 'The Twilio integration puts Eligoo’s AI voice agent on a phone number you own in Twilio. You enter your Account SID, Auth Token and the number to use; Eligoo creates and configures an Elastic SIP trunk in your Twilio account automatically and connects it to its self-hosted voice stack. From then on Hook dials out and answers on that number, and Twilio bills you for the calls.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Twilio?',
      paragraphs: [
        'Eligoo’s voice agent needs a route onto the public phone network, and Twilio is the most common way customers provide one. Rather than asking you to configure SIP trunking by hand, Eligoo uses Twilio’s API to create an Elastic SIP trunk in your account, point it at Eligoo’s LiveKit SIP gateway, and associate your chosen number with it. It is the only telephony provider Eligoo sets up automatically; Telnyx, Plivo and Vobiz are entered as trunk credentials.',
        'Once connected, the number behaves like any other line in a calling campaign: Hook places outbound calls inside the approved window, one at a time per line, and calls that arrive on the number are dispatched to the agent. Caller ID is your Twilio number, and the call records appear in your Twilio console as well as in Eligoo.',
        'Twilio remains your account throughout. Eligoo does not resell Twilio numbers or minutes, and you can remove the trunk from Twilio at any time — which stops Eligoo calling on it.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Have a Twilio number ready', text: 'Buy or choose a voice-capable number in your Twilio account, in the country you will be calling.' },
        { title: 'Enter your credentials', text: 'In workspace settings, choose Twilio under telephony and paste your Account SID and Auth Token, then select the number. Eligoo verifies the credentials against Twilio’s API before saving them server-side, masked.' },
        { title: 'Eligoo creates the trunk', text: 'An Elastic SIP trunk is created in your Twilio account with origination pointing to Eligoo’s SIP gateway, termination credentials for outbound calls, and your number attached. You will see it in the Twilio console.' },
        { title: 'Configure the agent', text: 'Choose speech-to-text, a voice, a language model and behaviour preset for Hook, and write the call brief. Make a browser test call.' },
        { title: 'Approve a campaign or enable inbound', text: 'Create a calling campaign with a lead list, window and pace and submit it for approval; or route the number’s inbound calls to the agent. Every call is logged with transcript and outcome.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Twilio',
      items: [
        'Sent to Twilio on connect: API calls, authenticated with your Account SID and Auth Token, to create and configure the Elastic SIP trunk and attach your number.',
        'Sent to Twilio on each call: SIP signalling (the number dialled, from your number) and the call media over the trunk, as with any call on a Twilio trunk.',
        'Received from Twilio: inbound call signalling and media for calls to your number, delivered to Eligoo’s SIP gateway.',
        'Not sent: your prospect list, transcripts, CRM data or other integrations’ keys. Twilio sees the phone numbers and the audio, not the agent’s reasoning.',
        'Your Account SID and Auth Token are stored server-side in your workspace, masked in the interface, and never returned to the browser. Call charges appear on your Twilio account under Twilio’s terms.',
      ],
    },
    employees(['hook'], 'Which AI employees use it', undefined, {
      hook: 'Makes every outbound campaign call and answers inbound calls on the connected Twilio number.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'AI cold calling', text: 'An approved list called inside a window at a set pace, with outcomes, transcripts and retries handled.', icon: 'phone' },
        { title: 'Trade-show and inbound follow-up', text: 'Warm leads called within days rather than weeks; missed inbound calls answered and qualified.', icon: 'clock' },
        { title: 'Appointment setting', text: 'Hook offers slots and books a Google Calendar event with a Meet link when Google is connected.', icon: 'calendar' },
        { title: 'Numbers per market', text: 'Connect the Twilio number local to the region you are calling so prospects see a familiar caller ID.', icon: 'globe' },
      ],
    },
    pricingPointer('calling'),
    faq([
      { q: 'Can an AI agent make calls from my Twilio number?', a: 'Yes. Connect Twilio with your Account SID, Auth Token and the number, and Hook calls out and answers on it.' },
      { q: 'Do I have to set up the SIP trunk myself?', a: 'No. Eligoo creates the Elastic SIP trunk in your Twilio account automatically and attaches your number. You can inspect it in the Twilio console.' },
      { q: 'Which Twilio permissions does Eligoo need?', a: 'The Account SID and Auth Token of the account (or subaccount) that owns the number, so it can create the trunk and place calls. A dedicated subaccount keeps Eligoo’s access and billing separate.' },
      { q: 'Who pays for the calls?', a: 'Twilio bills your account for minutes and the number at its own rates. Eligoo credits cover call minutes on the platform side; see the pricing page.' },
      { q: 'Can I use Twilio for Indian numbers?', a: 'That depends on Twilio’s number availability and regulatory requirements in India, which change. Many Indian customers use Vobiz instead; see the Vobiz integration page.' },
      { q: 'What happens if I delete the trunk in Twilio?', a: 'Calls stop. Any running campaign pauses with a Blocked status, and re-connecting Twilio in Eligoo recreates the trunk.' },
    ]),
    related([
      LINKS.voice, LINKS.hook, LINKS.ucColdCalling, LINKS.ucAppointments, LINKS.ucOutbound,
      { label: 'AI cold calling workflow template', href: '/resources/templates/ai-cold-calling-workflow/' },
      { label: 'Telnyx integration', href: '/integrations/telnyx/' }, { label: 'Vobiz integration', href: '/integrations/vobiz/' }, { label: 'LiveKit voice stack', href: '/integrations/livekit/' },
    ]),
    { kind: 'sources', items: [{ label: 'Twilio documentation', href: 'https://www.twilio.com/docs' }] },
    cta('Put Hook on your Twilio number', `Paste your credentials, let Eligoo build the trunk, make a test call. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
