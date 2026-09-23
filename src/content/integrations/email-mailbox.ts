import type { PageContent } from '../types';
import { CRUMBS, LINKS, cta, faq, related, employees, pricingPointer, FACTS } from '../helpers';

const page: PageContent = {
  slug: '/integrations/email-mailbox/',
  title: 'SMTP/IMAP Mailbox Integration — Outreach From Your Own Email',
  eyebrow: 'Integrations · Email',
  metaTitle: 'SMTP/IMAP Mailbox Integration — AI Outreach From Your Own Email Address | Eligoo',
  metaDescription: 'Connect any mailbox over SMTP and IMAP and Hook sends approved email sequences from your address, reads the replies in your inbox, records opt-outs and books meetings. Verified on connect; no shared sending domain.',
  primaryKeyword: 'AI email outreach from own mailbox',
  secondaryKeywords: ['SMTP IMAP AI sales agent', 'AI cold email from my own email address', 'AI email sequences own domain', 'AI reply handling IMAP', 'AI SDR email integration'],
  answer: 'The SMTP/IMAP mailbox integration connects an email account you own to Eligoo so Hook can send approved outreach sequences from your address and read the replies in your inbox. Any provider that offers SMTP and IMAP works — Google Workspace, Microsoft 365, or a hosting provider’s mailbox. Credentials are verified when you connect, stored server-side, and never shared; nothing is sent from an Eligoo domain.',
  sections: [
    {
      kind: 'prose',
      heading: 'What does Eligoo do with your mailbox?',
      paragraphs: [
        'Outreach only works from a real address with real sending history, which is why Eligoo does not provide one. Hook sends through your mailbox’s SMTP server, so every email carries your domain, your signature and your reputation, and lands in your Sent folder like anything you wrote yourself. It reads replies through IMAP, so a prospect’s answer is in your inbox and in Eligoo at the same time.',
        'Hook’s sending is bounded by approvals. A sequence — the steps, timing and copy — is written with Maven and Sage and approved by you; enrolling a list of contacts into it is a separate approval. After that the timed sends run unattended within the volume limits set on the sequence, suppression lists are checked on every send, and opt-outs are recorded the moment they arrive.',
        'Reply handling is where the integration earns its keep. Eligoo polls the inbox, matches incoming messages to conversations, de-duplicates by Message-ID so nothing is processed twice, and Hook classifies each reply: interested, not now, wrong person, question, opt-out, complaint. Routine questions get a drafted answer; anything commercial or sensitive is queued for a person.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the integration works',
      steps: [
        { title: 'Gather the mailbox settings', text: 'From your email provider: SMTP host and port, IMAP host and port, the address, and a password or app password. Providers with two-factor authentication usually require an app-specific password.' },
        { title: 'Connect and verify', text: 'In workspace settings choose Mailbox and enter the details. Eligoo logs in to both SMTP and IMAP to verify them before saving, then stores the credentials server-side and shows them masked.' },
        { title: 'Approve a sequence and an enrolment', text: 'Review the sequence copy and timing, then approve enrolling a specific list from Radar. Enrolment is the approval-gated step.' },
        { title: 'Sends and polling run', text: 'Hook sends each step at its time from your address. The inbox is polled for replies; each is matched, de-duplicated and classified.' },
        { title: 'Outcomes are written back', text: 'Replies, opt-outs, booked meetings and escalations are logged against the lead in the CRM. Ledger reconciles; Atlas sees the results in the weekly plan.' },
      ],
    },
    {
      kind: 'list',
      heading: 'What data flows between Eligoo and your mailbox',
      items: [
        'Sent through SMTP: the outreach emails and routine replies Hook sends, from your address, for contacts whose enrolment you approved.',
        'Read through IMAP: incoming messages, so replies to Hook’s emails can be matched to conversations. Eligoo looks for replies to its own threads; it does not process your unrelated mail into the CRM.',
        'Stored in the workspace: sent messages, matched replies, classifications, opt-outs and the Message-IDs used for de-duplication, attached to the lead record.',
        'Not done: mailbox rules are not changed, messages are not deleted, and your contacts list is not imported.',
        'Your SMTP and IMAP credentials are stored server-side in your workspace, masked in the interface and never returned to the browser. Disconnecting the mailbox pauses any running sequence.',
      ],
    },
    employees(['hook', 'radar', 'sage', 'ledger'], 'Which AI employees use it', undefined, {
      hook: 'Sends sequences, reads and classifies replies, records opt-outs and books meetings. The only employee that uses the mailbox.',
      radar: 'Supplies the verified list that gets enrolled.',
      sage: 'Writes the sequence copy with Maven’s messaging.',
      ledger: 'Reconciles outcomes into the CRM and reports reply, opt-out and meeting rates.',
    }),
    {
      kind: 'features',
      heading: 'What businesses can automate with it',
      items: [
        { title: 'Cold and warm email sequences', text: 'Personalised multi-step outreach to approved lists, from your own domain.', icon: 'mail' },
        { title: 'Reply triage', text: 'Every reply classified and routed within minutes of arriving; routine ones answered.', icon: 'layers' },
        { title: 'Follow-up after calls and events', text: 'Sequences that pick up after a Hook call, a trade show or an inbound enquiry.', icon: 'clock' },
        { title: 'Opt-out and suppression handling', text: 'Unsubscribes recorded automatically and honoured on every future send.', icon: 'shield' },
      ],
    },
    pricingPointer('outreach'),
    faq([
      { q: 'Can an AI sales agent send email from my own address?', a: 'Yes. Connect your mailbox over SMTP and IMAP and Hook sends from it. Nothing goes out from an Eligoo domain.' },
      { q: 'Which email providers work?', a: 'Any that offer SMTP and IMAP access: Google Workspace, Microsoft 365, and most hosting-provider mailboxes. Providers with two-factor authentication usually need an app password.' },
      { q: 'Will Eligoo read all my email?', a: 'It polls the inbox to find replies to the emails Hook sent and matches them by thread and Message-ID. Unrelated mail is not imported into the CRM.' },
      { q: 'How is sending volume controlled?', a: 'Each sequence has volume and timing limits, and only contacts whose enrolment you approved are sent to. Suppression lists and opt-outs are checked on every send. Warm up new domains gradually; Eligoo does not do that for you.' },
      { q: 'What happens to an opt-out?', a: 'It is recorded on the lead immediately, the contact is removed from the sequence and added to the suppression list, and the decision is logged.' },
      { q: 'Should I use a dedicated sending mailbox?', a: 'Many teams connect a dedicated address on their main domain or a secondary domain so outreach reputation is separate from personal mail. Either works; the choice is yours.' },
    ]),
    related([
      LINKS.sales, LINKS.outbound, LINKS.hook, LINKS.radar, LINKS.ucOutbound,
      { label: 'AI follow-up workflow template', href: '/resources/templates/ai-follow-up-workflow/' }, LINKS.cmpSalesSdr,
      { label: 'Google Workspace integration', href: '/integrations/google-workspace/' }, { label: 'Apollo integration', href: '/integrations/apollo/' }, { label: 'Twilio integration', href: '/integrations/twilio/' },
    ]),
    cta('Send from your own address, with a person in the loop', `Connect a mailbox, approve a sequence, and Hook works the list. ${FACTS.approvals}`),
  ],
  breadcrumb: CRUMBS.integrations,
  schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
  updated: '2026-09-23',
};

export default page;
