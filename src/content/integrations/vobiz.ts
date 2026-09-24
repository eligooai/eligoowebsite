import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/vobiz/',
  title: 'Vobiz Integration — SIP Trunking for AI Calling in India',
  eyebrow: 'Integrations · Telephony',
  metaTitle: 'Vobiz Integration — SIP Trunking for AI Voice Agent Calls in India | Eligoo',
  metaDescription: 'Use a Vobiz SIP trunk with Eligoo to run AI phone calls on Indian numbers. Enter your trunk credentials, verify, test from the browser, and let Hook call and answer; Vobiz bills you for minutes.',
  primaryKeyword: 'AI voice agent India SIP trunk',
  secondaryKeywords: ['Vobiz SIP trunk AI calling', 'AI cold calling India', 'Indian phone number AI agent', 'AI voice agent for Indian businesses', 'SIP trunking India AI calls'],
  answer: 'The Vobiz integration connects a SIP trunk from Vobiz — a telephony provider popular with Indian businesses for Indian numbers — to Eligoo’s self-hosted voice stack. You enter the trunk credentials in Eligoo, and Hook makes and receives AI phone calls on your Indian number. Vobiz bills you for the minutes; Eligoo runs the conversation, transcript and outcome.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with Vobiz?',
      paragraphs: [
        'Getting a compliant Indian phone number onto an AI calling system is the first hurdle for most Indian companies, and it is the reason Vobiz is one of the four telephony providers Eligoo supports. Vobiz provides SIP trunking with Indian numbers; Eligoo’s LiveKit SIP gateway connects to that trunk and puts Hook on the line.',
        'Set-up is credential-based, like Telnyx and Plivo: you obtain the SIP details from Vobiz and paste them into your workspace. There is no API integration and Eligoo does not need a Vobiz account of its own. Once the trunk is verified, calling campaigns, inbound dispatch, transcripts and approvals work exactly as they do with any other trunk.',
        'For Indian markets the trunk is usually paired with Indian-language transcription and voices from the speech providers you connect, and with a calling window that matches local business hours. Compliance with Indian telecom and do-not-disturb rules remains your responsibility; suppression lists are honoured on every campaign to help with that.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Get a trunk from Vobiz', text: 'Arrange a SIP trunk and an Indian number with Vobiz. You will receive a SIP username, password and server address.' },
        { title: 'Enter the trunk in Eligoo', text: 'In workspace settings choose Vobiz under telephony and paste the credentials and the number. Eligoo checks them, stores them server-side and shows them masked.' },
        { title: 'Route inbound if needed', text: 'If the number should also receive calls, ask Vobiz to route inbound traffic to Eligoo’s SIP gateway address shown on the settings page.' },
        { title: 'Set language, voice and brief', text: 'Choose the call language, a speech-to-text provider, a voice and a model; write the brief; make a browser test call and a test call to a real Indian mobile.' },
        { title: 'Approve a campaign', text: 'Create a calling campaign with a lead list, an Indian business-hours window and a pace, and submit it for approval.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and Vobiz',
      items: [
        'Sent to Vobiz on each call: SIP signalling using your trunk credentials, the dialled number and the call media.',
        'Received from Vobiz: inbound call signalling and media for calls to your number, when routed to Eligoo.',
        'Not sent: prospect lists, transcripts, CRM data or other integrations’ keys. Vobiz sees phone numbers and audio only.',
        'Your SIP credentials are stored server-side in your workspace, masked in the interface, and never returned to the browser.',
        'Charges for minutes and the number appear on your Vobiz account under Vobiz’s terms.',
      ],
    },
    employees(['hook'], 'Which AI employees use it', undefined, {
      hook: 'Makes outbound campaign calls and answers inbound calls on the connected Vobiz number.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'AI cold calling on Indian numbers', text: 'Approved lists called from a local number during Indian business hours, with outcomes logged.', icon: 'phone' },
        { title: 'Regional-language calls', text: 'Set the call language and pick voices your speech providers support for Hindi and other Indian languages.', icon: 'globe' },
        { title: 'Inbound lead capture', text: 'Enquiries to your number answered and qualified when the team is on the floor or in meetings.', icon: 'clock' },
        { title: 'Appointment setting', text: 'Site visits and demos booked on the call, with a calendar event when Google is connected.', icon: 'calendar' },
      ],
    },
    pricingPointer('calling'),
    faq([
      { q: 'Can I run AI phone calls on an Indian number?', a: 'Yes. Connect a Vobiz SIP trunk with an Indian number and Hook calls and answers on it through Eligoo’s voice stack.' },
      { q: 'Why Vobiz rather than Twilio for India?', a: 'Vobiz is set up for Indian numbers and Indian telecom requirements, which is why many Indian customers choose it. Twilio availability in India varies; check both against your needs.' },
      { q: 'Is the Vobiz trunk created automatically?', a: 'No. You obtain the trunk from Vobiz and enter its SIP credentials in Eligoo manually.' },
      { q: 'Does Hook speak Indian languages?', a: 'Language support comes from the speech providers you connect. Set the call language in the voice configuration and confirm on a browser test call.' },
      { q: 'Who pays for the calls?', a: 'Vobiz bills you for minutes and the number, and your AI provider bills you for the model turns on your own key. Calling is included on Eligoo plans that list it; there is no per-minute charge from Eligoo. See the pricing page.' },
      { q: 'What about DND and consent rules?', a: 'You are responsible for lawful lists and calling hours in India. Eligoo honours suppression lists on every campaign and keeps a transcript and outcome for each call.' },
    ]),
    related([
      LINKS.voice, LINKS.hook, LINKS.ucColdCalling, LINKS.ucAppointments, LINKS.industries,
      { label: 'Twilio integration', href: '/integrations/twilio/' }, { label: 'Plivo integration', href: '/integrations/plivo/' }, { label: 'Deepgram integration', href: '/integrations/deepgram/' },
    ]),
    cta('Put Hook on an Indian number', `Enter your Vobiz trunk, set the language and make a test call. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
