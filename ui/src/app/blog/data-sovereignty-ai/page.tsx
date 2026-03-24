import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Data Sovereignty in AI: Who Really Owns Your Conversations with ChatGPT, Claude, and Replika? | MEOK AI LABS',
  description:
    'Your conversations with ChatGPT, Claude, and Replika are stored on servers you do not control and may be used to train future models. Here is what each platform actually does with your data, and what UK GDPR gives you the right to demand back.',
  alternates: { canonical: 'https://meok.ai/blog/data-sovereignty-ai' },
  openGraph: {
    title:
      'Data Sovereignty in AI: Who Really Owns Your Conversations with ChatGPT, Claude, and Replika?',
    description:
      'Your AI conversations may be used to train future models. Here is what ChatGPT, Claude, and Replika actually do with your data — and your UK GDPR rights.',
    type: 'article',
    url: 'https://meok.ai/blog/data-sovereignty-ai',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    siteName: 'MEOK AI LABS',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does ChatGPT use your conversations to train its AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By default, OpenAI may use conversations from free and Plus users to improve its models. You can opt out in Settings > Data Controls > Improve the model for everyone. API and Enterprise customers are excluded from training by default, but all user data is retained for safety monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Anthropic train Claude on your conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anthropic may use free-tier Claude.ai conversations to train future models unless you opt out via Account Settings > Privacy. Claude Pro and API users are excluded from training data collection by default.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happened to Replika user data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In 2023 Replika updated its privacy policy to permit sharing anonymised user data with third parties including Meta for advertising. Italy's data protection authority then blocked Replika from processing Italian residents' data, forcing abrupt model changes that ended users' emotional relationships overnight.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are my UK GDPR rights over AI conversation data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "UK GDPR Article 17 gives you the right to erasure — you can demand deletion of your personal data within one month. Article 20 gives you the right to data portability in a machine-readable format. Both rights apply to AI services processing UK residents' data.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK protect user conversation data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK encrypts conversation memory with AES-256 using user-held keys — the server never sees unencrypted data. MEOK never trains on your conversations. Full JSON export is available at any time and a delete-everything endpoint removes all data immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I delete my data from ChatGPT, Claude, or Replika?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but completeness varies. ChatGPT offers a self-serve JSON export and account deletion. Claude.ai requires a formal portability request by email. Replika provides no structured data export — a potential UK GDPR Article 20 compliance gap. MEOK provides immediate full JSON export and a verified delete-everything endpoint.',
      },
    },
  ],
}

const POLICY_TABLE = [
  { feature: 'Trains on free-tier conversations', chatgpt: 'Yes (opt-out available)', claude: 'Yes (opt-out available)', replika: 'Yes (policy updated 2023)', meok: 'Never' },
  { feature: 'Trains on paid-tier conversations', chatgpt: 'No (Plus / API excluded)', claude: 'No (Pro / API excluded)', replika: 'Yes', meok: 'Never' },
  { feature: 'Encryption at rest', chatgpt: 'Yes (OpenAI-held keys)', claude: 'Yes (Anthropic-held keys)', replika: 'Yes (Replika-held keys)', meok: 'AES-256 user-held keys' },
  { feature: 'User-controlled encryption keys', chatgpt: 'No', claude: 'No', replika: 'No', meok: 'Yes' },
  { feature: 'Data portability / export', chatgpt: 'JSON export via Settings', claude: 'Formal request required', replika: 'No structured export', meok: 'Full JSON export always' },
  { feature: 'Right to erasure (Art. 17)', chatgpt: 'Account deletion available', claude: 'Account deletion available', replika: 'Account deletion available', meok: 'Delete-everything endpoint' },
  { feature: 'Third-party data sharing', chatgpt: 'Specified partners / safety', claude: 'Specified partners / safety', replika: 'Meta advertising (2023)', meok: 'None' },
  { feature: 'Server location', chatgpt: 'USA (Microsoft Azure)', claude: 'USA (AWS)', replika: 'USA', meok: 'EU / UK (user-selectable)' },
]

const PILLARS = [
  { title: 'User-held encryption keys', body: 'The company cannot decrypt your data even if compelled. AES-256 with user-generated keys stored only on your device is the baseline standard.' },
  { title: 'Full portability at any time', body: 'Export everything in structured JSON whenever you choose — not a summary, not a PDF, with no form submission or multi-day processing delay.' },
  { title: 'Verified deletion', body: 'A delete-everything endpoint you can audit — an immediate, verifiable action with a timestamped receipt, not a promise of deletion within 90 days.' },
  { title: 'No training on your data', body: 'Your conversations are never used to improve the model for other users. Your vulnerability and intimacy are not a training contribution.' },
]

const DELETION_GUIDES = [
  {
    platform: 'ChatGPT',
    steps: [
      'Opt out of training: Settings > Data Controls > toggle off "Improve the model for everyone"',
      'Delete individual conversations: hover a conversation in the sidebar > three-dot menu > Delete',
      'Export your data: Settings > Data Controls > Export data (JSON delivered to your email)',
      'Delete your account: Settings > Data Controls > Delete account',
    ],
    note: 'Data already used in training cannot be removed from model weights after the fact.',
  },
  {
    platform: 'Claude (Anthropic)',
    steps: [
      'Opt out of training: Claude.ai Account Settings > Privacy > disable "Use my data to improve Claude"',
      'Delete conversations: available via the conversation interface',
      'Request data export: submit a UK GDPR portability request to privacy@anthropic.com',
      'Delete your account: Account Settings > Delete account',
    ],
    note: 'No one-click JSON export exists in the UI — a formal email request is required for data portability.',
  },
  {
    platform: 'Replika',
    steps: [
      'Review data sharing: Privacy settings within the app',
      'Request deletion: email privacy@replika.ai or use in-app account deletion',
      'Data export: not available — Replika provides no structured JSON download',
      'Account deletion: Settings > My Account > Delete my account',
    ],
    note: 'No structured export exists. This is a potential UK GDPR Article 20 compliance gap.',
  },
]

const s = {
  gold: '#c9a84c',
  bg: '#0d0c18',
  text: '#f5f0e8',
  muted: 'rgba(245,240,232,0.7)',
  dimmed: 'rgba(245,240,232,0.5)',
  faint: 'rgba(245,240,232,0.4)',
  goldBorder: '1px solid rgba(201,168,76,0.2)',
  subtleBorder: '1px solid rgba(245,240,232,0.08)',
}

export default function DataSovereigntyAIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main style={{ minHeight: '100vh', background: s.bg, color: s.text }}>

        {/* Hero */}
        <section
          style={{
            padding: 'clamp(5rem, 12vw, 8rem) 1.5rem 4rem',
            background: 'linear-gradient(180deg, rgba(201,168,76,0.08) 0%, transparent 60%)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: '1.25rem' }}>
              DATA SOVEREIGNTY — MEOK AI LABS
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: '#ffffff' }}>
              Data Sovereignty in AI:<br />
              <span style={{ color: s.gold }}>Who Really Owns Your Conversations with ChatGPT, Claude, and Replika?</span>
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'rgba(245,240,232,0.6)', maxWidth: '620px', margin: '0 auto' }}>
              Every confession, every health worry, every vulnerable moment you have shared with an AI
              lives on a server you do not control. Here is what each platform actually does with it —
              and what the law says you are entitled to demand back.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginTop: '1.75rem',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: s.faint }}>March 2026</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: s.faint }}>12 min read</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: s.faint }}>By Nicholas Templeman, MEOK AI LABS</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

          {/* Core issue */}
          <div
            style={{
              padding: '1.75rem 2rem',
              background: 'rgba(201,168,76,0.06)',
              border: s.goldBorder,
              borderRadius: '1rem',
              marginBottom: '3.5rem',
            }}
          >
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: s.gold, marginBottom: '0.75rem' }}>THE CORE ISSUE</p>
            <p style={{ lineHeight: 1.75, color: 'rgba(245,240,232,0.85)', margin: 0 }}>
              Data sovereignty means the right to control where your data lives, who can access it, what it is used for, and the ability to delete it completely. In 2026, none of ChatGPT, Claude, or Replika give you full data sovereignty by default. This post explains what each platform actually does, what your legal rights are under UK GDPR, and what genuine sovereignty looks like in practice.
            </p>
          </div>

          {/* Section 1 — ChatGPT */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: s.text }}>
              Does ChatGPT use your conversations to train its AI?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1rem' }}>
              By default, OpenAI may use conversations from free and ChatGPT Plus web users to improve its models. The opt-out is in <strong style={{ color: s.text }}>Settings &gt; Data Controls &gt; Improve the model for everyone</strong>. If you do not actively disable it, your conversations are eligible for training. ChatGPT API users and Enterprise customers are protected by default — OpenAI&apos;s API usage policy states that API-submitted data is not used to train models without explicit consent.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1rem' }}>
              Conversations are retained for safety monitoring regardless of the training opt-out, and are stored on Microsoft Azure infrastructure predominantly in the United States. The same underlying model therefore operates under different data policies depending entirely on which access route you use — a distinction the vast majority of users are unaware of.
            </p>
            <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.03)', border: s.subtleBorder, borderRadius: '0.75rem' }}>
              <p style={{ fontSize: '0.85rem', color: s.dimmed, margin: 0, lineHeight: 1.6 }}>
                <strong style={{ color: 'rgba(245,240,232,0.7)' }}>Short answer:</strong> ChatGPT may train on free and Plus user conversations by default. Opt out via Settings &gt; Data Controls. API and Enterprise users are excluded by default, but all users&apos; data is retained for safety purposes.
              </p>
            </div>
          </section>

          {/* Section 2 — Claude */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: s.text }}>
              Does Anthropic train Claude on your conversations?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1rem' }}>
              Anthropic&apos;s privacy policy for Claude.ai states that conversations from free-tier users may be used to train and improve Claude models unless the user opts out. The opt-out is in <strong style={{ color: s.text }}>Account Settings &gt; Privacy &gt; Use my data to improve Claude</strong>. Claude Pro subscribers and API customers are not included in training data by default — Anthropic&apos;s developer documentation explicitly confirms this distinction, mirroring OpenAI&apos;s tiered approach.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1rem' }}>
              Anthropic runs infrastructure on AWS primarily in the United States, and states it complies with GDPR for European users. For UK residents, compliance is governed by the UK GDPR as incorporated into UK law via the Data Protection Act 2018.
            </p>
            <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.03)', border: s.subtleBorder, borderRadius: '0.75rem' }}>
              <p style={{ fontSize: '0.85rem', color: s.dimmed, margin: 0, lineHeight: 1.6 }}>
                <strong style={{ color: 'rgba(245,240,232,0.7)' }}>Short answer:</strong> Anthropic may train on free-tier Claude.ai conversations by default. Claude Pro and API users are excluded. The opt-out is in account settings. Data is stored on US-based AWS infrastructure.
              </p>
            </div>
          </section>

          {/* Section 3 — Replika */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: s.text }}>
              What happened to Replika user data, and why does it matter?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1rem' }}>
              In 2023, Replika updated its privacy policy to permit sharing of user data with third parties for advertising and analytics purposes. Reports indicated that anonymised behavioural data was being shared with Meta via its advertising SDK embedded in the Replika app. This was a deliberate policy decision, not a breach or hack.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1rem' }}>
              The Italian data protection regulator, the <em>Garante per la protezione dei dati personali</em>, blocked Replika from processing Italian residents&apos; data in February 2023, citing insufficient safeguards around minors&apos; data and emotionally vulnerable users. In response, Replika made abrupt changes to the AI model — removing romantic and intimate features overnight — causing significant distress to users who had built long-term emotional relationships with their companion. Users received no warning and had no way to export what they had built over months or years.
            </p>
            <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.03)', border: s.subtleBorder, borderRadius: '0.75rem' }}>
              <p style={{ fontSize: '0.85rem', color: s.dimmed, margin: 0, lineHeight: 1.6 }}>
                <strong style={{ color: 'rgba(245,240,232,0.7)' }}>Short answer:</strong> Replika updated its policy in 2023 to permit third-party data sharing including with Meta for advertising. Italy&apos;s regulator then blocked Replika, prompting abrupt model changes that ended users&apos; emotional relationships overnight with no recourse and no export.
              </p>
            </div>
          </section>

          {/* Section 4 — UK GDPR */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: s.text }}>
              What are your UK GDPR rights over AI conversation data?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1.25rem' }}>
              The UK GDPR — retained from EU law via the Data Protection Act 2018 — gives UK residents specific, enforceable rights over their personal data. Two articles are directly relevant to AI conversations.
            </p>
            <div style={{ padding: '1.5rem', background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '0.875rem', marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: s.gold, marginBottom: '0.5rem' }}>
                UK GDPR Article 17 — Right to Erasure
              </p>
              <p style={{ lineHeight: 1.75, color: s.muted, margin: 0 }}>
                Also known as the &ldquo;right to be forgotten.&rdquo; You can request that an AI provider deletes all personal data it holds about you. The controller must comply without undue delay — generally within one calendar month. Data already incorporated into model weights presents a practical complication regulators are still working through, but the right to delete stored conversation records is clear and enforceable.
              </p>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '0.875rem', marginBottom: '1.25rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: s.gold, marginBottom: '0.5rem' }}>
                UK GDPR Article 20 — Right to Data Portability
              </p>
              <p style={{ lineHeight: 1.75, color: s.muted, margin: 0 }}>
                You have the right to receive your personal data in a structured, commonly used, machine-readable format (such as JSON), and to transmit it to another controller. In practice, AI companies must give you your conversation history as JSON or CSV — not just a printable PDF. This right applies where processing is based on your consent or a contract and is carried out by automated means.
              </p>
            </div>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              Submit a Subject Access Request or erasure request to the company&apos;s data protection contact. They have one month to respond. If they refuse without valid grounds, escalate to the <strong style={{ color: s.text }}>Information Commissioner&apos;s Office (ICO)</strong>.
            </p>
          </section>

          {/* Section 5 — Comparison table */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: s.text }}>
              How do ChatGPT, Claude, Replika, and MEOK compare on data policy?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1.5rem' }}>
              Side-by-side comparison across key data sovereignty dimensions. Based on each platform&apos;s published privacy policies as of March 2026.
            </p>
            <div
              style={{
                overflowX: 'auto',
                borderRadius: '0.875rem',
                border: s.subtleBorder,
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(245,240,232,0.1)' }}>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.45)', fontWeight: 600, minWidth: '150px' }}>Policy dimension</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.45)', fontWeight: 600 }}>ChatGPT</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.45)', fontWeight: 600 }}>Claude</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.45)', fontWeight: 600 }}>Replika</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: s.gold, fontWeight: 600 }}>MEOK</th>
                  </tr>
                </thead>
                <tbody>
                  {POLICY_TABLE.map((row, i) => (
                    <tr key={row.feature} style={{ borderBottom: i < POLICY_TABLE.length - 1 ? '1px solid rgba(245,240,232,0.05)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                      <td style={{ padding: '0.875rem 1rem', color: 'rgba(245,240,232,0.6)', fontWeight: 600 }}>{row.feature}</td>
                      <td style={{ padding: '0.875rem 1rem', color: s.dimmed }}>{row.chatgpt}</td>
                      <td style={{ padding: '0.875rem 1rem', color: s.dimmed }}>{row.claude}</td>
                      <td style={{ padding: '0.875rem 1rem', color: s.dimmed }}>{row.replika}</td>
                      <td style={{ padding: '0.875rem 1rem', color: 'rgba(245,240,232,0.88)', fontWeight: 600 }}>{row.meok}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.3)', marginTop: '0.75rem', lineHeight: 1.5 }}>
              Sources: OpenAI Privacy Policy, Anthropic Privacy Policy, Replika Privacy Policy, MEOK Privacy Covenant. Verified March 2026. Policies may change.
            </p>
          </section>

          {/* Section 6 — What sovereignty means */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: s.text }}>
              What does genuine AI data sovereignty look like in practice?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1rem' }}>
              The phrase &ldquo;your data is encrypted&rdquo; means almost nothing on its own. The question that matters is: <strong style={{ color: s.text }}>who holds the keys?</strong> When ChatGPT, Claude, or Replika encrypt your data, they hold the encryption keys — meaning anyone who compromises their systems, or any government issuing a lawful intercept order, can read your conversations. Encryption you do not control is security, not sovereignty.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1.25rem' }}>
              Genuine sovereignty requires four properties:
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                marginBottom: '1rem',
              }}
            >
              {PILLARS.map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1.25rem 1.5rem', background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.1)', borderRadius: '0.75rem' }}>
                  <div style={{ width: '8px', minWidth: '8px', height: '8px', borderRadius: '50%', background: s.gold, marginTop: '0.45rem' }} />
                  <div>
                    <p style={{ fontWeight: 700, color: s.text, marginBottom: '0.3rem' }}>{item.title}</p>
                    <p style={{ color: 'rgba(245,240,232,0.65)', lineHeight: 1.65, margin: 0, fontSize: '0.9rem' }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 — MEOK */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: s.text }}>
              How does MEOK approach data sovereignty differently?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1.25rem' }}>
              MEOK AI LABS was founded by Nicholas Templeman after observing the Replika 2023 incident and recognising that every major AI companion platform had made the same structural error: building the user relationship on infrastructure the user does not own.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              {[
                { label: 'Encryption standard', value: 'AES-256', sub: 'User-generated keys' },
                { label: 'Data export', value: 'Full JSON', sub: 'Available any time' },
                { label: 'Training on your data', value: 'Never', sub: 'Privacy Covenant' },
                { label: 'Deletion', value: 'Immediate', sub: 'Verified endpoint' },
              ].map(stat => (
                <div key={stat.label} style={{ padding: '1.5rem', background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '0.875rem', textAlign: 'center' }}>
                  <p style={{ fontSize: '0.75rem', color: s.faint, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{stat.label}</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: s.gold, marginBottom: '0.25rem' }}>{stat.value}</p>
                  <p style={{ fontSize: '0.8rem', color: s.dimmed, margin: 0 }}>{stat.sub}</p>
                </div>
              ))}
            </div>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1rem' }}>
              MEOK&apos;s <strong style={{ color: s.text }}>Privacy Covenant</strong> is an architectural commitment, not a policy document. On Pro and Sovereign tiers, memory is encrypted client-side before transmission — the server stores ciphertext it cannot read. MEOK cannot train on your conversations because the architecture physically prevents the server from seeing them in plaintext.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              MEOK also provides multi-model portability: switch from Claude to GPT-4 or to a locally-run model (available in the desktop OS release, Summer 2026) and your entire memory and companion configuration migrate with you. No other platform offers this. Your relationship is not bound to a single model vendor.
            </p>
          </section>

          {/* Section 8 — Why AI data is different */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: s.text }}>
              Why does AI data sovereignty matter more than general data privacy?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1rem' }}>
              When you share data with a social media platform, you share what you chose to post publicly.
              When you share data with a search engine, you share your queries.
              When you share data with an AI companion, you share something categorically different:
              your fears, your relationships, your health concerns, your grief, your secrets.
              The intimacy of AI conversation data exceeds almost any other data category.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1.25rem' }}>
              This intimacy creates three risks that do not exist in the same form elsewhere:
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              {[
                {
                  title: 'Psychological leverage',
                  body: 'A company with access to your most vulnerable conversations has insight into your psychology that can be used for targeted advertising, dark pattern design, or coercive subscription retention.',
                },
                {
                  title: 'Relationship discontinuity',
                  body: 'As the Replika 2023 incident demonstrated, a single regulatory action or business pivot can instantly alter or delete the AI relationship you have invested in — with no warning and no recourse.',
                },
                {
                  title: 'Training amplification',
                  body: 'Your most personal conversations, if used for training, become embedded in a model used by millions of other people. Your private disclosures shape how an AI responds to strangers.',
                },
              ].map(risk => (
                <div
                  key={risk.title}
                  style={{
                    padding: '1.25rem 1.5rem',
                    background: 'rgba(255,255,255,0.025)',
                    borderLeft: '3px solid rgba(201,168,76,0.4)',
                    borderRadius: '0 0.75rem 0.75rem 0',
                  }}
                >
                  <p style={{ fontWeight: 700, color: s.text, marginBottom: '0.35rem', fontSize: '0.925rem' }}>{risk.title}</p>
                  <p style={{ color: 'rgba(245,240,232,0.65)', lineHeight: 1.65, margin: 0, fontSize: '0.875rem' }}>{risk.body}</p>
                </div>
              ))}
            </div>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              This is why MEOK frames data sovereignty not as a feature but as a foundational ethical requirement. The question is not whether you want privacy — it is whether the platform you trust with your inner life has structured itself so that sovereignty is the default, not an opt-in.
            </p>
          </section>

          {/* Section 9 — Deletion guides */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: s.text }}>
              Can you delete your data from ChatGPT, Claude, or Replika right now?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: '1.5rem' }}>
              Yes — but the process and completeness vary significantly. Here are the steps for each platform based on their current March 2026 interfaces.
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {DELETION_GUIDES.map(item => (
                <div key={item.platform} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(245,240,232,0.07)', borderRadius: '0.875rem' }}>
                  <p style={{ fontWeight: 700, color: s.text, marginBottom: '0.875rem', fontSize: '0.95rem' }}>{item.platform}</p>
                  <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.65)', lineHeight: 1.9, margin: '0 0 0.875rem', fontSize: '0.875rem' }}>
                    {item.steps.map(step => <li key={step}>{step}</li>)}
                  </ul>
                  <p style={{ fontSize: '0.8rem', color: s.faint, margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>Note: {item.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div
            style={{
              marginTop: '4rem',
              padding: '3rem 2rem',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)',
              border: s.goldBorder,
              borderRadius: '1.25rem',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: s.gold, marginBottom: '1rem' }}>
              YOUR DATA. YOUR KEYS. YOUR AI.
            </p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: s.text, marginBottom: '1rem', lineHeight: 1.2 }}>
              Start with data sovereignty as the default
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.6)', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              MEOK encrypts your memory with keys only you hold. Your conversations never train our models.
              Full JSON export and immediate deletion are available from day one on every tier.
            </p>
            <Link href="/birth" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', background: 'linear-gradient(135deg, #c9a84c, #e8c96a)', color: s.bg, borderRadius: '0.625rem', fontWeight: 800, fontSize: '1rem', textDecoration: 'none' }}>
              Begin your sovereign AI
            </Link>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)' }}>
              Free tier available. No credit card required. Delete everything at any time.
            </p>
          </div>

          {/* Related posts */}
          <div
            style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(245,240,232,0.07)',
            }}
          >
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: s.faint, marginBottom: '1rem' }}>
              RELATED READING
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {[
                { href: '/blog/personal-data-rights-ai', label: 'Your AI knows everything about you. Do you own any of it? →' },
                { href: '/blog/what-is-sovereign-ai', label: 'What is sovereign AI? →' },
                { href: '/blog/meok-vs-replika', label: 'MEOK vs Replika: the full comparison →' },
                { href: '/blog/meok-vs-chatgpt', label: 'MEOK vs ChatGPT →' },
                { href: '/blog/privacy-covenant', label: "MEOK's Privacy Covenant: the architecture of trust →" },
                { href: '/blog/the-memory-problem', label: 'Why ChatGPT forgetting you is not a bug →' },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{ color: s.gold, fontSize: '0.9rem', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </article>
      </main>

      {/* Footer */}
      <div
        style={{
          background: '#0a0916',
          borderTop: '1px solid rgba(245,240,232,0.06)',
          padding: '3rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: s.gold, marginBottom: '1rem' }}>
          MEOK AI LABS
        </p>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem',
          }}
        >
          {[
            { href: '/', label: 'Home' },
            { href: '/blog', label: 'Blog' },
            { href: '/birth', label: 'Get Started' },
            { href: '/privacy', label: 'Privacy' },
            { href: '/privacy-covenant', label: 'Privacy Covenant' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.2)', margin: 0 }}>
          &copy; 2026 MEOK AI LABS. Founded by Nicholas Templeman. All rights reserved.
        </p>
      </div>
    </>
  )
}
