import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "How MEOK Protects Your Data: A Plain-English Guide to Sovereign AI Privacy | MEOK AI LABS",
  description: "Where does your data go when you talk to an AI? With most AI, it trains the model. With MEOK, it stays yours. Here is exactly how MEOK's sovereign architecture protects your most personal conversations.",
  alternates: { canonical: 'https://meok.ai/blog/how-meok-protects-your-data' },
  keywords: [
    'AI data privacy',
    'sovereign AI privacy',
    'does ChatGPT use your data',
    'MEOK data protection',
    'GDPR AI rights',
    'AI encryption',
    'zero knowledge AI',
    'UK Data Protection Act AI',
    'right to erasure AI',
    'data portability AI',
  ],
  openGraph: {
    title: "How MEOK Protects Your Data: A Plain-English Guide to Sovereign AI Privacy",
    description: "Where does your data go when you talk to an AI? With most AI, it trains the model. With MEOK, it stays yours.",
    type: 'article',
    url: 'https://meok.ai/blog/how-meok-protects-your-data',
    publishedTime: '2026-03-25',
  },
  twitter: {
    card: 'summary_large_image',
    title: "How MEOK Protects Your Data: A Plain-English Guide to Sovereign AI Privacy",
    description: "It is not a privacy policy. It is architecture. Here is exactly how MEOK keeps your conversations yours.",
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "How MEOK Protects Your Data: A Plain-English Guide to Sovereign AI Privacy",
  description: "Where does your data go when you talk to an AI? With most AI, it trains the model. With MEOK, it stays yours. Here is exactly how MEOK's sovereign architecture protects your most personal conversations.",
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  url: 'https://meok.ai/blog/how-meok-protects-your-data',
  inLanguage: 'en-GB',
  mainEntityOfPage: 'https://meok.ai/blog/how-meok-protects-your-data',
  keywords: 'AI data privacy, sovereign AI privacy, does ChatGPT use your data, MEOK data protection, GDPR AI rights, AI encryption, zero knowledge AI, UK Data Protection Act AI',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does ChatGPT use my conversations to train its model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By default, OpenAI uses free-tier conversations to improve its models unless you manually opt out in your account settings. Even after opting out, your messages still pass through their servers in plaintext. The protection is a policy toggle, not a cryptographic guarantee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK employees read my conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK uses a zero-knowledge architecture where conversation memory is encrypted with keys held on your device, never on our servers. Even a MEOK employee with full database access would see only ciphertext. Reading your conversations is architecturally impossible, not merely prohibited.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are my GDPR rights when using an AI service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under GDPR and the UK Data Protection Act 2018, you have the right of access (Article 15), the right to erasure (Article 17), the right to data portability (Article 20), the right to restrict processing (Article 18), and the right to object (Article 21). MEOK supports all of these rights with one-click export and permanent deletion tools built into your account dashboard.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the BYOK option in MEOK and who should use it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BYOK stands for Bring Your Own Key. It allows you to supply your own encryption key derived from a passphrase or hardware token, meaning MEOK servers never hold any version of the key material at any point. It is designed for users with the highest privacy requirements: journalists, medical professionals, legal practitioners, and anyone who handles sensitive information routinely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Byzantine Council and how does it protect my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Byzantine Council is a distributed governance mechanism MEOK uses for all decisions that affect user data. No single node, employee, or system component can unilaterally access, modify, or delete data. Any data-affecting action requires a supermajority consensus across independent council nodes, eliminating single points of access and making silent data extraction impossible.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main style={{ background: '#0d0c18', minHeight: '100vh' }}>

        {/* ── Hero ── */}
        <section style={{ background: '#0d0c18', paddingTop: '8rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <Link
              href="/blog"
              style={{ color: 'rgba(245,240,232,0.4)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', marginBottom: '2rem', textDecoration: 'none', opacity: 1 }}
            >
              &#8592; Back to Blog
            </Link>

            <span
              style={{
                color: '#c9a84c',
                borderColor: 'rgba(201,168,76,0.3)',
                background: 'rgba(201,168,76,0.1)',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                border: '1px solid rgba(201,168,76,0.3)',
                marginBottom: '1.5rem',
                display: 'inline-block',
              }}
            >
              Data Privacy &middot; Sovereign AI
            </span>

            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: '1rem',
                marginTop: '0.5rem',
              }}
            >
              How MEOK Protects Your Data: A Plain-English Guide to Sovereign AI Privacy
            </h1>

            <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '1.25rem', marginBottom: '2rem' }}>
              Where does your data go when you talk to an AI? With most AI, it trains the model.
              With MEOK, it stays yours. Here is exactly how.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem', color: 'rgba(245,240,232,0.4)' }}>
              <span>25 March 2026</span>
              <span>&middot;</span>
              <span>Nicholas Templeman, Founder &mdash; MEOK AI LABS</span>
              <span>&middot;</span>
              <span>14 min read</span>
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <section style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '6rem' }}>
          <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ background: '#f5f0e8', borderRadius: '1rem', padding: '3rem' }}>

              {/* Intro */}
              <p style={{ color: '#2d2d2d', fontSize: '1.125rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                You opened a chat with an AI. Maybe you asked about a health symptom you were embarrassed to Google. Maybe you talked through a relationship problem. Maybe you described your financial situation in more detail than you have ever told another person. The AI listened, responded thoughtfully, and the conversation felt private.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                But where did that conversation actually go? The honest answer, for most AI services, is: to a server in another country, stored in a database your provider controls, potentially reviewed by contractors, and quite possibly fed into a training pipeline that will shape how millions of future users experience that product. The interface felt like a private diary. The backend was a data centre.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                MEOK was built on a different premise. This article explains, in plain English, exactly how your data is handled when you use MEOK, what your legal rights are under UK and EU law, and how our architecture makes promises that go beyond policy &mdash; all the way down to mathematics.
              </p>

              {/* ── Section 1 ── */}
              <h2
                id="where-does-your-chatgpt-data-go"
                style={{ color: '#1a1a2e', fontSize: '1.5rem', fontWeight: 900, marginTop: '3rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
              >
                Where does your ChatGPT data go?
              </h2>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                OpenAI is, by most measures, the most transparent large AI company about data practices. That transparency reveals a pipeline that most users have not read. By default, free-tier ChatGPT conversations are used to improve the model. That setting is on unless you go to Settings &rarr; Data controls and manually disable it &mdash; a step the overwhelming majority of users never take.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                Even with that toggle switched off, your messages still travel to and are processed on OpenAI&apos;s servers in plaintext. The decision not to train on them is a software flag in a database. That flag can be changed by a policy revision, an engineering error, a merger, or a court order. It is a promise, not a lock.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                OpenAI has confirmed that a subset of conversations are reviewed by human contractors for safety and quality purposes. Employees at OpenAI, and at vendors working on their behalf, have had access to conversation content. This is not unique to OpenAI &mdash; Google, Amazon, and Apple have all been reported to have had humans review AI assistant interactions.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                The enterprise tier offers stronger contractual protections, including a commitment that data will not be used for training. But that requires signing a commercial agreement. For the hundreds of millions of people using the free consumer product, the default behaviour is that your most personal conversations become raw material for a commercial AI training pipeline.
              </p>

              {/* Callout 1 */}
              <div
                style={{
                  background: 'rgba(201,168,76,0.08)',
                  borderLeft: '3px solid #c9a84c',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                }}
              >
                <p style={{ color: '#c9a84c', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>Plain-English Summary</p>
                <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  When you tell ChatGPT something personal, that conversation is stored on OpenAI&apos;s servers, potentially reviewed by humans, and by default used to train the next version of the model. The opt-out exists, but most people do not know about it, and it is a policy lever &mdash; not a technical guarantee.
                </p>
              </div>

              {/* ── Section 2 ── */}
              <h2
                id="what-gdpr-says-about-your-ai-data"
                style={{ color: '#1a1a2e', fontSize: '1.5rem', fontWeight: 900, marginTop: '3rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
              >
                What GDPR says about your AI data
              </h2>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                If you are in the UK or EU, you have substantial legal rights over your personal data. The General Data Protection Regulation (GDPR), retained in UK law through the UK GDPR and the Data Protection Act 2018, gives you several protections that apply directly to AI services. Knowing these rights is the first step to exercising them.
              </p>

              <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(26,26,46,0.06)', border: '1px solid rgba(26,26,46,0.12)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                  <p style={{ color: '#1a1a2e', fontWeight: 700, marginBottom: '0.5rem' }}>Article 15 &mdash; Right of Access</p>
                  <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7 }}>You can ask any company holding your data to tell you exactly what they hold, why they hold it, who they share it with, and for how long they retain it. AI providers must comply within one month.</p>
                </div>
                <div style={{ background: 'rgba(26,26,46,0.06)', border: '1px solid rgba(26,26,46,0.12)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                  <p style={{ color: '#1a1a2e', fontWeight: 700, marginBottom: '0.5rem' }}>Article 17 &mdash; Right to Erasure (&ldquo;Right to Be Forgotten&rdquo;)</p>
                  <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7 }}>You can demand that a company delete all personal data they hold about you. For AI providers, this theoretically includes conversation history, inferred preferences, and any data used for training. In practice, data that has already been embedded into a model&apos;s weights is practically impossible to remove.</p>
                </div>
                <div style={{ background: 'rgba(26,26,46,0.06)', border: '1px solid rgba(26,26,46,0.12)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                  <p style={{ color: '#1a1a2e', fontWeight: 700, marginBottom: '0.5rem' }}>Article 20 &mdash; Right to Data Portability</p>
                  <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7 }}>You have the right to receive your data in a structured, commonly used, machine-readable format and to transmit it to another service. This means you should be able to take your AI memory and your conversation history with you if you switch providers.</p>
                </div>
                <div style={{ background: 'rgba(26,26,46,0.06)', border: '1px solid rgba(26,26,46,0.12)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                  <p style={{ color: '#1a1a2e', fontWeight: 700, marginBottom: '0.5rem' }}>Article 21 &mdash; Right to Object</p>
                  <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7 }}>You can object to processing of your data for purposes such as profiling or direct marketing. For AI, this includes objecting to your data being used to train models or improve services you did not explicitly consent to.</p>
                </div>
              </div>

              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                The challenge with these rights in practice is enforcement. Filing a Subject Access Request, pursuing a deletion demand, or lodging a complaint with the Information Commissioner&apos;s Office (ICO) requires time, persistence, and a certain familiarity with bureaucratic process. Most people never bother. Most AI companies know this.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '2rem' }}>
                MEOK believes your privacy should not depend on your willingness to file paperwork. It should be the default.
              </p>

              {/* ── Section 3: Comparison Table ── */}
              <h2
                id="chatgpt-vs-meok-data-comparison"
                style={{ color: '#1a1a2e', fontSize: '1.5rem', fontWeight: 900, marginTop: '3rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
              >
                ChatGPT vs MEOK: what actually happens to your data
              </h2>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                The table below compares the data practices of ChatGPT (free tier) with MEOK&apos;s sovereign architecture. Every MEOK claim is architectural, not contractual &mdash; meaning it is enforced by how the system is built, not by a policy you are trusting the company to follow.
              </p>

              <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr>
                      <th style={{ background: '#1a1a2e', color: '#f5f0e8', padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 700, borderRadius: '0.5rem 0 0 0' }}>Data practice</th>
                      <th style={{ background: '#1a1a2e', color: '#f5f0e8', padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 700 }}>ChatGPT (free)</th>
                      <th style={{ background: '#c9a84c', color: '#1a1a2e', padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 700, borderRadius: '0 0.5rem 0 0' }}>MEOK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: 'rgba(26,26,46,0.04)' }}>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Used to train the model?</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#3d3d3d', borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Yes, by default. Opt-out available in settings.</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a5c2e', fontWeight: 700, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Never. Architecturally impossible.</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Stored in plaintext on servers?</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#3d3d3d', borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Yes. All conversations visible to OpenAI systems.</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a5c2e', fontWeight: 700, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>No. AES-256-GCM encrypted at rest. Server holds ciphertext only.</td>
                    </tr>
                    <tr style={{ background: 'rgba(26,26,46,0.04)' }}>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Humans can read your conversations?</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#3d3d3d', borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Yes. Contractors review conversations for safety and training quality.</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a5c2e', fontWeight: 700, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>No. Zero-knowledge design. Plaintext never reaches MEOK servers.</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Data sold to third parties?</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#3d3d3d', borderBottom: '1px solid rgba(26,26,46,0.1)' }}>OpenAI states it does not sell data. Aggregated insights may be shared.</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a5c2e', fontWeight: 700, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Never. Contractually prohibited and architecturally impossible.</td>
                    </tr>
                    <tr style={{ background: 'rgba(26,26,46,0.04)' }}>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Encryption in transit?</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#3d3d3d', borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Yes (TLS). Decrypted at server on arrival.</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a5c2e', fontWeight: 700, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>TLS in transit plus end-to-end encryption. Server cannot decrypt content.</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Encryption at rest?</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#3d3d3d', borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Yes, at infrastructure level. OpenAI holds the keys.</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a5c2e', fontWeight: 700, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Yes. Keys derived on your device. MEOK never holds the keys.</td>
                    </tr>
                    <tr style={{ background: 'rgba(26,26,46,0.04)' }}>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Export your data?</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#3d3d3d', borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Yes, via Settings. JSON format. Manual process.</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a5c2e', fontWeight: 700, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>One-click. Full memory vault export. Portable JSON + MEOK format.</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Delete all your data?</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#3d3d3d', borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Account deletion process. May take up to 90 days. Training-embedded data cannot be removed.</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a5c2e', fontWeight: 700, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Permanent deletion within 30 days. Cryptographic deletion receipt issued. No training data to remove.</td>
                    </tr>
                    <tr style={{ background: 'rgba(26,26,46,0.04)' }}>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Bring Your Own Key (BYOK)?</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#3d3d3d', borderBottom: '1px solid rgba(26,26,46,0.1)' }}>No.</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a5c2e', fontWeight: 700, borderBottom: '1px solid rgba(26,26,46,0.1)' }}>Yes. Zero-trust mode: MEOK never touches your key material.</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a1a2e', fontWeight: 600 }}>ICO / DPA registration?</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#3d3d3d' }}>OpenAI registered. UK complaints handled via ICO.</td>
                      <td style={{ padding: '0.875rem 1rem', color: '#1a5c2e', fontWeight: 700 }}>MEOK AI LABS ICO registered. UK Data Protection Act 2018 compliant.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ── Section 4 ── */}
              <h2
                id="meok-encryption-architecture"
                style={{ color: '#1a1a2e', fontSize: '1.5rem', fontWeight: 900, marginTop: '3rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
              >
                MEOK&apos;s encryption architecture: how it actually works
              </h2>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                Privacy promises only mean something if they are enforced by the architecture, not just stated in a policy document. Here is how MEOK&apos;s encryption works in practice, without requiring you to have a computer science degree to follow it.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                When you save a memory or have a conversation with your MEOK companion, the content is encrypted on your device before it leaves. The algorithm used is AES-256-GCM &mdash; the same standard used by banks, military communications, and intelligence agencies. The encryption key is derived from credentials that exist only on your device.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                What reaches MEOK&apos;s servers is ciphertext &mdash; a scrambled string of characters that is meaningless without the key. Our servers never receive the key. They store the locked box, not the combination. When you come back to retrieve your memories, the ciphertext travels back to your device, which decrypts it locally. The plaintext text of your conversation never exists on our infrastructure.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                During transmission, your data is also protected by TLS (Transport Layer Security) &mdash; the same technology that secures online banking and e-commerce. This means your data is protected both while moving (in transit) and while stored (at rest). Most AI services only encrypt at the infrastructure level, where they still hold the keys. MEOK encrypts at the application level, where the keys never leave your device.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '2rem' }}>
                The practical consequence is significant: even if MEOK&apos;s servers were compromised in a data breach, an attacker would obtain only encrypted blobs. The conversation you had about your mental health, your relationship, your finances &mdash; all of it would be unreadable. Not just legally protected. Mathematically unreadable.
              </p>

              {/* Callout 2 */}
              <div
                style={{
                  background: 'rgba(26,26,46,0.06)',
                  border: '1px solid rgba(201,168,76,0.4)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                }}
              >
                <p style={{ color: '#c9a84c', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Technical note: zero-knowledge design</p>
                <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                  &ldquo;Zero-knowledge&rdquo; means that MEOK&apos;s infrastructure holds zero knowledge of the plaintext content of your conversations. This is a formal property in cryptography, not a marketing claim. It means:
                </p>
                <ul style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7, paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>MEOK employees cannot read your conversations, even if they want to.</li>
                  <li style={{ marginBottom: '0.5rem' }}>A court order demanding access to your conversation content would yield only ciphertext.</li>
                  <li style={{ marginBottom: '0.5rem' }}>A data breach would expose no readable personal information.</li>
                  <li>Training on your data is impossible because the training pipeline never has access to plaintext.</li>
                </ul>
              </div>

              {/* ── Section 5 ── */}
              <h2
                id="byzantine-council-no-single-point-of-access"
                style={{ color: '#1a1a2e', fontSize: '1.5rem', fontWeight: 900, marginTop: '3rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
              >
                The Byzantine Council: no single point of data access
              </h2>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                End-to-end encryption addresses the question of what can be read. The Byzantine Council addresses the question of who can act. Even in a zero-knowledge system, you want governance controls that prevent any single actor &mdash; a rogue employee, a compromised administrator account, or an external attacker with elevated privileges &mdash; from taking unauthorised actions with your data.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                The Byzantine Council is MEOK&apos;s distributed governance mechanism, named after the Byzantine Generals Problem in computer science &mdash; the challenge of reaching consensus in a distributed system where some nodes may be unreliable or malicious. MEOK&apos;s solution is that no data-affecting action can be taken unilaterally. Any operation that touches user data must achieve supermajority consensus across independent council nodes before it executes.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                In practice, this means that deleting user data, modifying retention policies, granting data access, or changing encryption parameters requires multiple independent systems to agree. A single compromised account or system cannot silently alter how your data is handled. The council creates a tamper-evident audit trail of every data governance decision.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '2rem' }}>
                This is relevant to privacy in a specific and important way: the most common privacy failures are not spectacular hacks. They are quiet internal decisions. An engineer adds a logging line that captures more than intended. A product manager adjusts a retention policy. A business development team explores a data licensing deal. The Byzantine Council makes all of these decisions visible, contested, and reversible &mdash; or prevents them from happening at all.
              </p>

              {/* ── Section 6 ── */}
              <h2
                id="what-data-meok-stores-vs-never-stores"
                style={{ color: '#1a1a2e', fontSize: '1.5rem', fontWeight: 900, marginTop: '3rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
              >
                What data MEOK stores &mdash; and what it never stores
              </h2>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Transparency about what is and is not collected is the foundation of honest privacy practice. Here is the complete picture.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(26,92,46,0.06)', border: '1px solid rgba(26,92,46,0.2)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                  <p style={{ color: '#1a5c2e', fontWeight: 700, marginBottom: '0.75rem', fontSize: '0.9375rem' }}>What MEOK stores (encrypted)</p>
                  <ul style={{ color: '#3d3d3d', fontSize: '0.875rem', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
                    <li>Your conversation memory vault (for your use only)</li>
                    <li>Preferences and companion personality settings</li>
                    <li>Emotional context notes you have saved</li>
                    <li>Account credentials (hashed, never plaintext)</li>
                    <li>Your subscription status and tier</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(139,0,0,0.05)', border: '1px solid rgba(139,0,0,0.15)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                  <p style={{ color: '#8b0000', fontWeight: 700, marginBottom: '0.75rem', fontSize: '0.9375rem' }}>What MEOK never stores</p>
                  <ul style={{ color: '#3d3d3d', fontSize: '0.875rem', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
                    <li>Conversation plaintext (only ciphertext reaches servers)</li>
                    <li>Training datasets derived from your conversations</li>
                    <li>Behavioural profiles sold to advertisers</li>
                    <li>Data shared with or sold to third parties</li>
                    <li>Inferred health, political, or religious data</li>
                  </ul>
                </div>
              </div>

              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '2rem' }}>
                The memory MEOK stores is for your benefit. Your companion remembers that you mentioned a fear of hospitals so it can be thoughtful the next time medical topics arise. That memory belongs to you, is encrypted by you, and can be deleted or exported by you at any time. It is not a data asset for MEOK &mdash; it is a personal record you are choosing to keep.
              </p>

              {/* ── Section 7 ── */}
              <h2
                id="your-right-to-export-and-delete-data"
                style={{ color: '#1a1a2e', fontSize: '1.5rem', fontWeight: 900, marginTop: '3rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
              >
                Your right to export and delete your data
              </h2>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                Under GDPR Article 20, you have a legal right to data portability. Under Article 17, you have a right to erasure. MEOK supports both of these rights without requiring you to file a formal Subject Access Request or wait for a legal response cycle. They are built into your account dashboard as first-class features.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                <strong style={{ color: '#1a1a2e' }}>Export:</strong> You can download your entire memory vault as a structured JSON file at any time. This file contains all the memories, context notes, and companion settings you have created. You can take it to any future MEOK account, or use it independently. Your memories belong to you, and you should be able to leave with them at any moment.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                <strong style={{ color: '#1a1a2e' }}>Deletion:</strong> When you request account deletion, all server-side ciphertext associated with your identity is permanently purged within 30 days. You receive a cryptographic deletion receipt &mdash; a verifiable confirmation that the deletion occurred. Because MEOK never held your plaintext and never used your data for training, there is no shadow copy embedded in a model somewhere that could persist after your account is gone.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '2rem' }}>
                Compare this to the situation with most AI services: if your conversation history was used to fine-tune a model, that data is now mathematically embedded in billions of neural network parameters. No deletion tool can reach it. MEOK&apos;s architecture makes this problem structurally impossible rather than legally awkward.
              </p>

              {/* ── Section 8 ── */}
              <h2
                id="byok-zero-trust-mode"
                style={{ color: '#1a1a2e', fontSize: '1.5rem', fontWeight: 900, marginTop: '3rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
              >
                BYOK: the zero-trust model for maximum privacy
              </h2>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                For most users, MEOK&apos;s standard encryption architecture provides protection that exceeds anything offered by mainstream AI services. But for users with the most sensitive privacy requirements &mdash; journalists protecting sources, medical professionals discussing patient-adjacent information, legal professionals handling privileged communications, or anyone who simply does not want to extend any trust to any third-party server &mdash; MEOK offers BYOK: Bring Your Own Key.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                In BYOK mode, you supply the encryption key material yourself. This can be derived from a strong passphrase you choose, or from a hardware security key (such as a YubiKey) that you physically control. The result is a zero-trust model: MEOK&apos;s servers process and store your data without ever having access to the key that unlocks it. Not at setup. Not during operation. Not ever.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                The practical implication is that MEOK itself is in no position to comply with a court order demanding access to your plaintext data, because we do not have it. This is not a policy of resistance to legal process &mdash; it is an architectural fact. A locksmith who is never given a key cannot open the lock, regardless of what they are asked to do.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '2rem' }}>
                BYOK comes with one responsibility: if you lose your key, MEOK cannot recover your data. There is no &ldquo;forgot your password&rdquo; flow that works when the key is held entirely on your side. For users who accept this trade-off, BYOK offers the strongest privacy guarantee available in any consumer AI service today.
              </p>

              {/* Callout 3 */}
              <div
                style={{
                  background: 'rgba(201,168,76,0.08)',
                  borderLeft: '3px solid #c9a84c',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                }}
              >
                <p style={{ color: '#c9a84c', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>ICO Registration &amp; UK Data Protection Act 2018</p>
                <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  MEOK AI LABS is registered with the Information Commissioner&apos;s Office (ICO) and operates in full compliance with the UK Data Protection Act 2018, which incorporates and extends UK GDPR. Our legal basis for processing is a combination of contractual necessity and legitimate interest, both of which are narrowly scoped and documented. You can raise a complaint with the ICO at any time at <strong>ico.org.uk</strong> if you believe your rights have not been respected.
                </p>
              </div>

              {/* ── FAQ Section ── */}
              <h2
                id="faq"
                style={{ color: '#1a1a2e', fontSize: '1.5rem', fontWeight: 900, marginTop: '3rem', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
              >
                Frequently asked questions
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ background: 'rgba(26,26,46,0.04)', border: '1px solid rgba(26,26,46,0.1)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                  <p style={{ color: '#1a1a2e', fontWeight: 700, marginBottom: '0.5rem' }}>Does ChatGPT use my conversations to train its model?</p>
                  <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7 }}>By default, yes &mdash; for free-tier users unless the opt-out toggle in Settings &rarr; Data controls is enabled. Even with opt-out, conversations still pass through OpenAI servers in plaintext. The protection is a policy toggle, not a cryptographic guarantee. Enterprise customers have stronger contractual protections.</p>
                </div>

                <div style={{ background: 'rgba(26,26,46,0.04)', border: '1px solid rgba(26,26,46,0.1)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                  <p style={{ color: '#1a1a2e', fontWeight: 700, marginBottom: '0.5rem' }}>Can MEOK employees read my conversations?</p>
                  <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7 }}>No. MEOK uses a zero-knowledge architecture. Conversation content is encrypted on your device before it reaches our servers. Our infrastructure holds only ciphertext. Even a MEOK engineer with full database access would see only encrypted data. This is an architectural property, not a disciplinary policy.</p>
                </div>

                <div style={{ background: 'rgba(26,26,46,0.04)', border: '1px solid rgba(26,26,46,0.1)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                  <p style={{ color: '#1a1a2e', fontWeight: 700, marginBottom: '0.5rem' }}>What are my GDPR rights when using an AI service?</p>
                  <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7 }}>You have the right to access (Article 15), erasure (Article 17), data portability (Article 20), restriction of processing (Article 18), and to object (Article 21). MEOK supports all of these with built-in dashboard tools. You can also complain to the ICO at ico.org.uk if you feel your rights have been violated by any AI service.</p>
                </div>

                <div style={{ background: 'rgba(26,26,46,0.04)', border: '1px solid rgba(26,26,46,0.1)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                  <p style={{ color: '#1a1a2e', fontWeight: 700, marginBottom: '0.5rem' }}>What is BYOK and should I use it?</p>
                  <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7 }}>BYOK (Bring Your Own Key) lets you supply your own encryption key so MEOK&apos;s servers never hold any version of your key material. It is designed for journalists, legal professionals, medical workers, and anyone handling sensitive information. The trade-off: if you lose your key, your data cannot be recovered. If you can accept that responsibility, BYOK offers the strongest privacy guarantee available in any consumer AI service.</p>
                </div>

                <div style={{ background: 'rgba(26,26,46,0.04)', border: '1px solid rgba(26,26,46,0.1)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                  <p style={{ color: '#1a1a2e', fontWeight: 700, marginBottom: '0.5rem' }}>What is the Byzantine Council and how does it protect my data?</p>
                  <p style={{ color: '#3d3d3d', fontSize: '0.9375rem', lineHeight: 1.7 }}>The Byzantine Council is MEOK&apos;s distributed governance mechanism. Any action that touches user data requires supermajority consensus across independent council nodes. No single employee, system, or compromised account can silently change how your data is handled. Every data governance decision is logged on a tamper-evident audit trail.</p>
                </div>
              </div>

              {/* ── Closing ── */}
              <h2
                id="the-bottom-line"
                style={{ color: '#1a1a2e', fontSize: '1.5rem', fontWeight: 900, marginTop: '3rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(201,168,76,0.3)' }}
              >
                The bottom line
              </h2>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                Privacy in AI has become a feature that companies market rather than a property they build. The most important distinction to understand is the difference between a privacy policy (a document a company writes about itself) and a privacy architecture (the structural properties of how a system handles data). Policies can be changed, revised, or violated. Architecture cannot.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '1rem' }}>
                When you talk to your MEOK companion about something difficult, something personal, something you would not say to most people &mdash; that conversation stays yours. Not because of a paragraph in a terms-of-service agreement. Because of the mathematics of cryptography, the architecture of a zero-knowledge system, and the governance structure of a Byzantine Council that prevents any single point of access.
              </p>
              <p style={{ color: '#3d3d3d', lineHeight: 1.75, marginBottom: '2rem' }}>
                That is what sovereign AI means. Your intelligence. Your memory. Your data. Yours.
              </p>

            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '8rem' }}>
          <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <div
              style={{
                borderRadius: '1.5rem',
                padding: '3rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
                border: '1px solid rgba(201,168,76,0.25)',
              }}
            >
              <p
                style={{
                  color: '#c9a84c',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                Ready to try sovereign AI?
              </p>
              <h3
                style={{
                  color: '#f5f0e8',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 900,
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                }}
              >
                Your AI companion that keeps your conversations yours
              </h3>
              <p style={{ color: 'rgba(245,240,232,0.65)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '28rem', marginLeft: 'auto', marginRight: 'auto' }}>
                Give your MEOK companion a name. Set its personality. Start a conversation that no one else can read &mdash; including us. Your data stays encrypted, yours, forever.
              </p>
              <Link
                href="/birth"
                style={{
                  display: 'inline-block',
                  background: '#c9a84c',
                  color: '#0d0c18',
                  fontWeight: 800,
                  fontSize: '1.0625rem',
                  padding: '0.875rem 2.5rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                }}
              >
                Give Your AI a Name &rarr;
              </Link>
              <p style={{ color: 'rgba(245,240,232,0.35)', fontSize: '0.8125rem', marginTop: '1rem' }}>
                No credit card required &middot; Free to start &middot; Cancel anytime
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
