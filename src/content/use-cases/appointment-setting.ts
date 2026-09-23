import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/use-cases/appointment-setting/',
  title: 'AI Appointment Setting',
  eyebrow: 'Use cases · Appointment setting',
  metaTitle: 'AI Appointment Setting — Qualify, Offer a Slot and Book Meetings by Email and Phone | Eligoo',
  metaDescription: 'AI appointment setting with Eligoo: Hook qualifies prospects by email and phone, offers a time, creates the calendar event with a meeting link and sends a brief to whoever attends.',
  primaryKeyword: 'AI appointment setting',
  secondaryKeywords: ['AI appointment setter', 'AI appointment booking', 'automated appointment setting', 'AI meeting scheduler for sales', 'AI appointment setting agent', 'AI sales appointment booking'],
  answer: 'AI appointment setting is the use of an AI agent to contact prospects, confirm they are worth a meeting and book that meeting on a salesperson’s calendar. In Eligoo, Hook does this over email and phone: it asks your qualification questions, offers a slot, creates a Google Calendar event with a Meet link and sends a brief on who the person is and what they said.',
  sections: [
    {
      kind: 'prose',
      heading: 'What the problem looks like',
      paragraphs: [
        'Booking a meeting takes several touches: a reply that says “maybe”, a back-and-forth on times, a confirmation and a reminder. Multiply that by every prospect in a sequence and it becomes the job of a full-time appointment setter — a role that is expensive to staff, hard to keep and often measured on meetings booked rather than meetings that were worth holding.',
        'The measure that matters is qualified meetings held. A setter paid on bookings fills the calendar with no-shows and poor fits; a salesperson doing their own setting books too few. The work needs to be consistent, qualified and cheap enough to apply to every prospect.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Eligoo handles appointment setting',
      steps: [
        { title: 'Maven sets the bar', text: 'The qualification criteria — what must be true before a meeting is offered — are written down with Maven and approved by you. They apply to every conversation.' },
        { title: 'Hook works the conversation', text: 'In an email thread Hook answers routine questions and, when the criteria are met, offers a time. On a call it asks the questions and offers a slot directly.' },
        { title: 'The event is created', text: 'A confirmed slot becomes a Google Calendar event with a Meet link when Google Workspace is connected; otherwise Ledger is tasked to complete the booking.' },
        { title: 'A brief goes to the attendee', text: 'Who the person is, what they said, what they want to discuss and the source of the lead, sent before the meeting.' },
        { title: 'Follow-up is handled', text: 'No-shows and reschedules go back into a follow-up sequence; the outcome of the meeting is recorded on the lead by Ledger.' },
      ],
    },
    {
      kind: 'workflow',
      heading: 'From reply to meeting held',
      stages: [
        { label: 'Interested reply or answered call', owner: 'hook' },
        { label: 'Qualification questions', owner: 'hook', detail: 'Against the approved criteria' },
        { label: 'Offer a slot', owner: 'hook', detail: 'On the attendee’s calendar' },
        { label: 'Calendar event', owner: 'hook', detail: 'Google Calendar with Meet link' },
        { label: 'Meeting brief', owner: 'hook', detail: 'Sent to the attendee' },
        { label: 'Outcome recorded', owner: 'ledger', detail: 'Held, no-show, rescheduled, next step' },
      ],
    },
    {
      kind: 'features',
      heading: 'What the AI appointment setter does',
      items: [
        { title: 'Qualifies before booking', text: 'No meeting is offered until the prospect’s answers meet the criteria you approved.', icon: 'target' },
        { title: 'Books by email or phone', text: 'The same criteria and the same calendar, whichever channel the prospect answers on.', icon: 'phone' },
        { title: 'Creates the event', text: 'A calendar event with a Meet link on the right person’s calendar, with the prospect invited.', icon: 'calendar' },
        { title: 'Writes the brief', text: 'A short summary so the salesperson walks in knowing who they are talking to and why.', icon: 'pen' },
        { title: 'Handles reschedules', text: 'Routine reschedule requests are handled in the thread; anything unusual goes to a person.', icon: 'clock' },
        { title: 'Reports show rate', text: 'Ledger tracks meetings booked, held and no-shows by source, so bookings that do not turn into conversations are visible.', icon: 'chart' },
      ],
    },
    {
      kind: 'example',
      heading: 'Example: setting demos for a two-person sales team',
      scenario: 'A B2B services firm has two salespeople who spend their mornings chasing replies to arrange demos.',
      steps: [
        'Maven writes the criteria: the company must be in a target sector, the contact must own the relevant function, and there must be a stated need or timeline.',
        'Hook takes over the reply threads from the approved sequence, asks the two questions the criteria need, and offers demo slots on whichever salesperson is free.',
        'Contacts who do not reply are called inside the campaign window and booked on the call.',
        'Each booking creates a calendar event with a Meet link and a brief; no-shows are re-approached with a short follow-up.',
        'Ledger reports demos held per salesperson, show rate by source and the reasons prospects were not booked.',
      ],
      outcome: 'The salespeople start their day with qualified demos on the calendar and a brief for each, and the reasons a contact was not booked are recorded rather than lost.',
    },
    employees(['hook', 'maven', 'radar', 'ledger'], 'AI employees involved', undefined, {
      hook: 'Qualifies, offers slots, creates events, writes briefs.',
      maven: 'Owns the qualification criteria.',
      radar: 'Supplies verified contacts and context.',
      ledger: 'Records outcomes and show rate.',
    }),
    {
      kind: 'list',
      heading: 'Integrations used',
      items: [
        'Google Workspace: Calendar events with a Google Meet link.',
        'Your own SMTP/IMAP mailbox for the email side of the conversation.',
        'Twilio, Telnyx, Plivo or Vobiz SIP trunks for the phone side.',
        'Eligoo’s built-in CRM for the lead, the meeting and the outcome.',
      ],
    },
    pricingPointer('appointment setting'),
    faq([
      { q: 'How does AI appointment setting work?', a: 'An AI agent handles the conversation that leads to a meeting: it answers routine questions, asks qualification questions, offers a time and creates the calendar event. In Eligoo that agent is Hook, and it only offers a meeting when the prospect meets criteria you approved.' },
      { q: 'Which calendar does it book into?', a: 'Google Calendar, through the Google Workspace connection. A booked meeting creates an event with a Meet link and invites the prospect. If Google is not connected, a task is created for Ledger to complete the booking.' },
      { q: 'Can it book for several salespeople?', a: 'Yes, within the connected Google Workspace. Which calendar receives the meeting is defined in the sequence or campaign setup.' },
      { q: 'What stops it booking unqualified meetings?', a: 'The qualification criteria. Hook does not offer a slot until the answers meet them, and Ledger reports show rate and meeting outcomes by source so a booking that does not turn into a conversation is visible.' },
      { q: 'Does it send reminders?', a: 'The calendar event carries the standard calendar reminders. Follow-up messages for no-shows and reschedules run through the approved sequence.' },
      { q: 'Can it set appointments by phone only?', a: 'Yes. A calling campaign with a booking goal will qualify and book on the call without an email step, though most customers run email first and call the non-responders.' },
    ]),
    related([
      LINKS.voice, LINKS.sales, LINKS.hook, LINKS.ucColdCalling, LINKS.ucLeadGen, LINKS.ucOutbound,
      { label: 'Appointment setting workflow template', href: '/resources/templates/appointment-setting-workflow/' },
      { label: 'Google Workspace integration', href: '/integrations/google-workspace/' },
      LINKS.industries,
    ]),
    cta('Fill the calendar with qualified meetings', `Connect Google Workspace and a mailbox, approve the criteria, and let Hook set the appointments. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.useCases,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
