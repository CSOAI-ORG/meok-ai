import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Digital Sovereignty Explained: What It Really Means to Own Your AI Data | MEOK AI LABS',
  description:
    'Digital sovereignty is not a marketing phrase — it is a specific set of technical guarantees. ' +
    'Encryption keys you hold, data you can export as JSON, the right to delete everything, and a ' +
    'legal promise your conversations never train an AI model.',
  alternates: { canonical: 'https://meok.ai/blog/sovereignty-explained' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does digital sovereignty actually mean for AI users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Digital sovereignty means you hold the encryption keys to your data, you can export a complete copy at any time, you can delete everything permanently, and the platform cannot use your conversations to train its models. It is a technical guarantee, not a marketing claim.',
      },
    },
    {
      '@type': 'Question',
      name: "Why can't most AI companies give you true data sovereignty?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI platforms run centralised inference and training pipelines where user conversations flow into shared infrastructure. The architecture was never designed for user-held keys or isolated data stores — retrofitting sovereignty would break their model-improvement loops and is commercially disincentivised.',
      },
    },
    {
      '@type': 'Question',
      name: 'What UK GDPR rights do I have over my AI conversation data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UK GDPR gives you Article 15 (right of access), Article 16 (rectification), Article 17 (erasure — the right to be forgotten), and Article 20 (portability — receive your data in machine-readable JSON). These rights apply to every AI service processing data about UK residents.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean to hold your own encryption keys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "When you hold the encryption keys, the platform cannot read your data even if compelled by a court order or breached by an attacker. AES-256 with user-scoped keys means each user's data is encrypted with a key derived from their own credentials — the server stores ciphertext only.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK implement data sovereignty technically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK encrypts all conversation memory with AES-256 at rest using user-scoped keys. Your data is logically isolated and never enters a shared training pipeline. You can export a complete JSON archive via /api/user/data at any time, and a single verified request permanently erases every record.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I export my AI conversation data as JSON from MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. MEOK's /api/user/data endpoint returns a complete, machine-readable JSON export of every memory, preference, and conversation record associated with your account. The format is open and documented so you can import it into any other system or archive it locally.",
      },
    },
  ],
}

const gdprRights = [
  {
    article: 'Art. 15',
    right: 'Right of Access',
    description: 'Obtain a full copy of all personal data held about you, including the categories processed and their purpose.',
    meok: 'Instant JSON export via /api/user/data',
  },
  {
    article: 'Art. 16',
    right: 'Rectification',
    description: 'Correct inaccurate personal data without undue delay. AI memory entries can contain wrong facts about you.',
    meok: 'Edit or delete individual memory nodes',
  },
  {
    article: 'Art. 17',
    right: 'Right to Erasure',
    description: 'Have all personal data permanently deleted. Must be honoured within one calendar month of the request.',
    meok: 'Delete-everything endpoint, verified & irreversible',
  },
  {
    article: 'Art. 20',
    right: 'Portability',
    description: 'Receive data in a structured, machine-readable format and transmit it to another controller of your choosing.',
    meok: 'Open JSON schema, no proprietary lock-in',
  },
]

const sovereigntyPillars = [
  {
    label: 'Encryption keys you hold',
    detail: 'Your data is encrypted with a key derived from your credentials. The server stores ciphertext. Even if the platform is breached or served a court order, your conversations remain unreadable without your key.',
  },
  {
    label: 'Data you can export as JSON',
    detail: 'You can request a complete, machine-readable archive of every memory, preference, and conversation record — not a PDF summary, but raw JSON you own and can import anywhere.',
  },
  {
    label: 'The right to delete everything',
    detail: 'A single verified request causes every record to be permanently removed from all storage layers, including backups within a defined retention window.',
  },
  {
    label: 'No training on your conversations',
    detail: 'Your inputs are never routed into a model fine-tuning pipeline. This must be a technical constraint enforced by architecture, not a policy promise that can be silently changed.',
  },
]

const meokArchitecture = [
  {
    title: 'AES-256 at rest, user-scoped keys',
    body: 'Every memory node, conversation record, and preference is encrypted with AES-256. Keys are derived from user credentials at the storage layer. The database stores ciphertext — MEOK infrastructure operators cannot read your conversations.',
  },
  {
    title: 'Logically isolated data stores',
    body: "Your data lives in a user-scoped partition — never commingled with other users in a shared flat table that a training pipeline can sample. Isolation is enforced at the query layer, not just by convention.",
  },
  {
    title: 'No training pipeline routing',
    body: 'MEOK does not operate a model fine-tuning pipeline fed by user conversations. The models used for inference are separately trained foundation models. Your conversations are input to inference only — never output to a training data lake.',
  },
  {
    title: 'Full JSON export via /api/user/data',
    body: 'Authenticated GET requests return a complete JSON archive: every memory, preference, and metadata record. The schema is documented and open. No lock-in mechanism exists.',
  },
  {
    title: 'Verified delete-everything endpoint',
    body: 'A single authenticated DELETE request cascades deletion across all storage layers, including the backup retention window. The operation is logged, confirmed by email, and irreversible by design.',
  },
]

export default function SovereigntyExplainedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ minHeight: '100vh', background: '#0d0c18', color: '#f5f0e8' }}>

        {/* ── Hero ── */}
        <section
          style={{
            padding: 'clamp(5rem, 12vw, 8rem) 1.5rem 4rem',
            background: 'linear-gradient(180deg, rgba(201,168,76,0.08) 0%, transparent 60%)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: '1.25rem' }}>
              DIGITAL SOVEREIGNTY — MEOK AI LABS
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: '#ffffff' }}>
              Digital Sovereignty Explained:<br />
              <span style={{ color: '#c9a84c' }}>What It Really Means to Own Your AI Data</span>
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'rgba(245,240,232,0.6)', maxWidth: '640px', margin: '0 auto 2rem' }}>
              &ldquo;We respect your privacy&rdquo; appears in every AI company&rsquo;s terms of service.
              None of it means you own your data. Here is what sovereignty actually requires —
              technically, legally, and in practice.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'rgba(245,240,232,0.45)', flexWrap: 'wrap' }}>
              <span>Nicholas Templeman</span>
              <span style={{ color: 'rgba(201,168,76,0.4)' }}>·</span>
              <span>MEOK AI LABS</span>
              <span style={{ color: 'rgba(201,168,76,0.4)' }}>·</span>
              <span>March 2026</span>
              <span style={{ color: 'rgba(201,168,76,0.4)' }}>·</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)', marginBottom: '3rem' }}>
            The word &ldquo;sovereignty&rdquo; has been borrowed by every AI marketing team on the planet.
            It sounds authoritative and protective. It means almost nothing unless you can point at four
            concrete guarantees: encryption keys you hold, data you can export as structured JSON, a verified
            right to delete everything, and a contractual prohibition on training models with your conversations.
          </p>

          {/* Q1 – What sovereignty means */}
          <section style={{ marginBottom: '3.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
              What does digital sovereignty actually mean for AI users?
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#c9a84c', fontWeight: 600, marginBottom: '1.25rem', padding: '1rem 1.25rem', borderLeft: '3px solid #c9a84c', background: 'rgba(201,168,76,0.06)' }}>
              Digital sovereignty means you hold the encryption keys to your data, you can export a complete
              copy at any time, you can delete everything permanently, and the platform cannot use your
              conversations to train its models. It is a technical guarantee, not a marketing claim.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)', marginBottom: '1.25rem' }}>
              Sovereignty over your AI data requires exactly four technical properties to be present
              simultaneously. If any one is absent, the platform is offering privacy theatre. Audit them
              one by one when evaluating where you place your most personal conversations:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {sovereigntyPillars.map(item => (
                <li
                  key={item.label}
                  style={{ padding: '0.9rem 1.1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.14)', borderRadius: '8px' }}
                >
                  <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.35rem' }}>{item.label}</p>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.62)', margin: 0 }}>{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Q2 – Why most AI can't deliver it */}
          <section style={{ marginBottom: '3.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
              Why can&rsquo;t most AI companies give you true data sovereignty?
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#c9a84c', fontWeight: 600, marginBottom: '1.25rem', padding: '1rem 1.25rem', borderLeft: '3px solid #c9a84c', background: 'rgba(201,168,76,0.06)' }}>
              Most AI platforms run centralised inference and training pipelines where user conversations flow
              into shared infrastructure. The architecture was never designed for user-held keys — retrofitting
              sovereignty would break their model-improvement loops and is commercially disincentivised.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)', marginBottom: '1.25rem' }}>
              This is not a policy failure. It is an architecture failure. The companies that built today&rsquo;s
              large language model products designed their infrastructure around a core assumption: that
              conversations are training signal. Every message you send improves the model. That loop is the
              commercial engine — and it is fundamentally incompatible with user-held encryption keys.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)', marginBottom: '1.25rem' }}>
              The data path of a typical centralised AI service: your message hits a shared inference endpoint,
              is logged to a database with platform-managed keys, a background pipeline exports sampled
              conversations to a training data lake, and fine-tuning ingests that lake — your words baked into
              billions of floating-point weights. At step two, sovereignty is already gone. At step four,
              erasure becomes technically meaningless.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)' }}>
              Rebuilding this to support user-held keys requires fully isolated encryption contexts per user
              at the inference layer — dramatic cost increases and the loss of the training signal that funds
              the entire operation. This is why platform sovereignty commitments are almost always policy
              documents rather than technical guarantees.
            </p>
          </section>

          {/* Q3 – UK GDPR */}
          <section style={{ marginBottom: '3.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
              What UK GDPR rights do you have over your AI conversation data?
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#c9a84c', fontWeight: 600, marginBottom: '1.5rem', padding: '1rem 1.25rem', borderLeft: '3px solid #c9a84c', background: 'rgba(201,168,76,0.06)' }}>
              UK GDPR gives you Article 15 (access), Article 16 (rectification), Article 17 (erasure — the
              right to be forgotten), and Article 20 (portability — receive your data in machine-readable JSON).
              These rights apply to every AI service processing data about UK residents, wherever the company
              is incorporated.
            </p>
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(201,168,76,0.3)' }}>
                    {['Article', 'Right', 'What it covers', 'MEOK implementation'].map(h => (
                      <th
                        key={h}
                        style={{
                          padding: '0.65rem 0.9rem',
                          textAlign: 'left',
                          color: 'rgba(201,168,76,0.8)',
                          fontWeight: 700,
                          fontSize: '0.78rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          whiteSpace: 'nowrap',
                        }}
                      >{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {gdprRights.map((row, i) => (
                    <tr
                      key={row.article}
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}
                    >
                      <td style={{ padding: '0.8rem 0.9rem', color: '#c9a84c', fontWeight: 700, whiteSpace: 'nowrap' }}>{row.article}</td>
                      <td style={{ padding: '0.8rem 0.9rem', color: '#f5f0e8', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.right}</td>
                      <td style={{ padding: '0.8rem 0.9rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.55 }}>{row.description}</td>
                      <td style={{ padding: '0.8rem 0.9rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.55 }}>{row.meok}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)' }}>
              To exercise these rights, submit a Subject Access Request (SAR) to the data controller. They have
              one month to respond. Failure can be escalated to the Information Commissioner&rsquo;s Office
              (ICO), which can impose fines up to £17.5 million or 4% of global annual turnover.
            </p>
          </section>

          {/* Q4 – Encryption keys */}
          <section style={{ marginBottom: '3.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
              What does it mean to hold your own encryption keys?
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#c9a84c', fontWeight: 600, marginBottom: '1.25rem', padding: '1rem 1.25rem', borderLeft: '3px solid #c9a84c', background: 'rgba(201,168,76,0.06)' }}>
              When you hold the encryption keys, the platform cannot read your data even if compelled by a
              court order or breached by an attacker. AES-256 with user-scoped keys means each user&rsquo;s
              data is encrypted with a key derived from their own credentials — the server stores ciphertext only.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)', marginBottom: '1.25rem' }}>
              Most AI services use platform-managed keys. Their encryption protects against physical storage
              theft, but offers no protection against the company itself, its employees, its government, or a
              court order. The meaningful question is not whether AES-256 is used — it is{' '}
              <em>who holds the key</em>.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)' }}>
              In a properly implemented user-scoped key architecture, a unique encryption key is derived from
              your credentials using a key derivation function such as Argon2. Your conversations are encrypted
              with that key before they touch storage. The server stores only ciphertext. When you delete your
              account, destroying the key is equivalent to destroying the data — permanently and irreversibly.
            </p>
          </section>

          {/* Q5 – MEOK architecture */}
          <section style={{ marginBottom: '3.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
              How does MEOK implement data sovereignty technically?
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#c9a84c', fontWeight: 600, marginBottom: '1.25rem', padding: '1rem 1.25rem', borderLeft: '3px solid #c9a84c', background: 'rgba(201,168,76,0.06)' }}>
              MEOK encrypts all conversation memory with AES-256 at rest using user-scoped keys. Your data is
              logically isolated and never enters a shared training pipeline. You can export a complete JSON
              archive via <code style={{ fontFamily: 'monospace' }}>/api/user/data</code> at any time, and a
              single verified request permanently erases every record.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {meokArchitecture.map(item => (
                <div
                  key={item.title}
                  style={{ padding: '1.1rem 1.25rem', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '8px' }}
                >
                  <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.4rem' }}>{item.title}</p>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.62)', margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Q6 – JSON export */}
          <section style={{ marginBottom: '3.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
              Can you export your AI conversation data as JSON from MEOK?
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#c9a84c', fontWeight: 600, marginBottom: '1.25rem', padding: '1rem 1.25rem', borderLeft: '3px solid #c9a84c', background: 'rgba(201,168,76,0.06)' }}>
              Yes. MEOK&rsquo;s <code style={{ fontFamily: 'monospace' }}>/api/user/data</code> endpoint returns a
              complete, machine-readable JSON export of every memory, preference, and conversation record
              associated with your account. The format is open and documented so you can import it into any
              other system or archive it locally.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)', marginBottom: '1.25rem' }}>
              Article 20 UK GDPR guarantees data portability, but quality varies wildly. A vague HTML page or
              PDF summary is technically compliant but practically useless. Real portability means: a complete
              structured JSON file with a documented schema, all data not a curated subset, available on demand
              rather than subject to a 30-day processing window, and no proprietary encoding that requires the
              originating platform to decode.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)' }}>
              MEOK&rsquo;s export meets all four criteria and is available immediately via an authenticated API
              call — no support request, no waiting. If you delete your account after exporting, your local JSON
              file is the only copy that remains. MEOK cannot reconstruct your data from its own systems after a
              verified deletion. That is the point.
            </p>
          </section>

          {/* CTA */}
          <section
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '16px',
              marginBottom: '3.25rem',
            }}
          >
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: '1rem' }}>
              YOUR DATA. YOUR KEYS. YOUR AI.
            </p>
            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
              Experience sovereign AI for yourself
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.6)', maxWidth: '460px', margin: '0 auto 2rem' }}>
              MEOK gives you an AI companion that remembers you, adapts to you, and belongs entirely to you —
              with the encryption, portability, and deletion rights that sovereignty actually requires.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/"
                style={{ display: 'inline-block', padding: '0.85rem 2rem', background: '#c9a84c', color: '#0d0c18', fontWeight: 700, fontSize: '0.95rem', borderRadius: '8px', textDecoration: 'none', letterSpacing: '0.02em' }}
              >
                Try MEOK Free
              </Link>
              <Link
                href="/blog/how-sovereign-ai-works"
                style={{ display: 'inline-block', padding: '0.85rem 2rem', background: 'transparent', color: '#c9a84c', fontWeight: 600, fontSize: '0.95rem', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(201,168,76,0.35)', letterSpacing: '0.02em' }}
              >
                How Sovereign AI Works
              </Link>
            </div>
          </section>

          {/* Why MEOK was built this way */}
          <section style={{ marginBottom: '3.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
              Why MEOK was built on sovereign architecture from day one
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)', marginBottom: '1.25rem' }}>
              Founder Nicholas Templeman built MEOK after observing a consistent pattern: the most personal AI
              conversations — about health, grief, relationships, and identity — were happening on platforms whose
              commercial model depended on retaining and monetising that data. The intimacy of the use case and
              the exploitability of the architecture were running in direct opposition.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)', marginBottom: '1.25rem' }}>
              The alternative was not to build a better privacy policy. It was to build different infrastructure —
              one where sovereignty is enforced by cryptography, not promised by contract. AES-256 at rest with
              user-scoped keys. Logically isolated data stores. No training pipeline routing. Full JSON export
              always available. A verified delete-everything endpoint with no exceptions.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.78)' }}>
              These are not features that were retrofitted later. They are the architecture. You cannot bolt
              sovereignty onto a system designed around data collection any more than you can retrofit privacy
              onto a surveillance network. The decisions have to be made first, at the foundation, when the cost
              is highest and the commercial temptation to defer is greatest.
            </p>
          </section>

          {/* Related reading */}
          <section>
            <h3 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: '1rem' }}>
              Related reading
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem' }}>
              {[
                { href: '/blog/data-sovereignty-ai', label: 'Data Sovereignty in AI: Who Really Owns Your Conversations?' },
                { href: '/blog/why-meok-never-trains-on-you', label: 'Why MEOK Never Trains on Your Conversations' },
                { href: '/blog/personal-data-rights-ai', label: 'Personal Data Rights in the Age of AI' },
                { href: '/blog/how-sovereign-ai-works', label: 'How Sovereign AI Works Under the Hood' },
                { href: '/blog/what-is-sovereign-ai', label: 'What Is Sovereign AI? A Plain-Language Guide' },
                { href: '/blog/ai-memory-explained', label: 'AI Memory Explained: How MEOK Remembers You' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ display: 'block', padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', color: 'rgba(245,240,232,0.65)', fontSize: '0.88rem', lineHeight: 1.5, textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

        </article>

        {/* ── Footer ── */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.3)', marginBottom: '0.4rem' }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. Founded by Nicholas Templeman.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)', marginBottom: '1rem' }}>
            Sovereign AI — AES-256 encrypted &middot; User-held keys &middot; No training on your conversations
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { href: '/privacy', label: 'Privacy' },
              { href: '/terms', label: 'Terms' },
              { href: '/blog', label: 'Blog' },
              { href: '/blog/data-sovereignty-ai', label: 'Data Sovereignty' },
              { href: '/blog/how-sovereign-ai-works', label: 'How It Works' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.3)', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </main>
    </>
  )
}
