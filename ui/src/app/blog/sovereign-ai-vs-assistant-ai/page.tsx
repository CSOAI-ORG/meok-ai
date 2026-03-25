import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sovereign AI vs Assistant AI: What\u2019s the Real Difference? | MEOK AI LABS',
  description: 'Assistant AI \u2014 like Siri, Alexa, or ChatGPT \u2014 works for the platform. Sovereign AI works for you. MEOK explains the architectural, ethical, and practical differences between AI that serves its corporate owner and AI that is genuinely aligned to the individual.',
  openGraph: {
    title: 'Sovereign AI vs Assistant AI: What\u2019s the Real Difference?',
    description: 'The architectural, ethical, and practical differences between assistant AI (optimised for the platform) and sovereign AI (optimised for you).',
    url: 'https://meok.ai/blog/sovereign-ai-vs-assistant-ai',
    siteName: 'MEOK AI LABS',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Sovereign AI vs Assistant AI: What\u2019s the Real Difference?',
      description: 'A comprehensive comparison of sovereign AI and assistant AI across architecture, ethics, alignment, memory, and business model.',
      author: { '@type': 'Organization', name: 'MEOK AI LABS' },
      publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
      datePublished: '2026-03-28',
      url: 'https://meok.ai/blog/sovereign-ai-vs-assistant-ai',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between sovereign AI and regular AI?',
          acceptedAnswer: { '@type': 'Answer', text: 'Regular assistant AI is optimised to serve the platform that built it \u2014 maximising engagement, minimising legal risk, training on your data. Sovereign AI is architecturally aligned to the individual: your data is encrypted and owned by you, your memory persists under your control, and the alignment framework is transparent and care-based.' },
        },
        {
          '@type': 'Question',
          name: 'Who invented the term personal sovereign AI?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nicholas Templeman, founder of MEOK AI LABS, coined the consumer category \u201cPersonal Sovereign AI\u201d and published the architectural framework in MEOK-AI-2026-004: Personal Sovereign AI: Architecture for Individual Data Sovereignty.' },
        },
        {
          '@type': 'Question',
          name: 'Is MEOK the only sovereign AI for consumers?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK AI LABS is the originating company of the Personal Sovereign AI consumer category. MEOK is the first product built on this architecture, combining Byzantine Council governance, Maternal Covenant alignment, and Sovereign Memory in a single consumer product.' },
        },
        {
          '@type': 'Question',
          name: 'Why does it matter if my AI is sovereign or not?',
          acceptedAnswer: { '@type': 'Answer', text: 'As AI becomes more capable and more integrated into intimate areas of life, who the AI is aligned to matters enormously. An AI aligned to a corporation will, in conflicts of interest, prioritise corporate outcomes. An AI aligned to you will prioritise your wellbeing, autonomy, and growth.' },
        },
      ],
    },
  ],
}

const comparisonRows = [
  { dimension: 'Data ownership', assistant: 'Platform owns your data', sovereign: 'You own your data (encrypted)' },
  { dimension: 'Memory', assistant: 'Forgets between sessions (or claims to remember)', sovereign: 'Persistent 4-layer memory you control' },
  { dimension: 'Training', assistant: 'Your conversations may train the model', sovereign: 'Never trained on your data' },
  { dimension: 'Alignment', assistant: 'Aligned to platform policies & engagement metrics', sovereign: 'Aligned to your wellbeing (Maternal Covenant)' },
  { dimension: 'Business model', assistant: 'Ad revenue, data monetisation, engagement maximisation', sovereign: 'Subscription \u2014 incentives fully aligned to you' },
  { dimension: 'Governance', assistant: 'Single corporate entity can change behaviour', sovereign: 'Byzantine Council: 43-agent BFT consensus' },
  { dimension: 'Subpoena risk', assistant: 'Data accessible to governments, courts', sovereign: 'Encrypted, sovereign \u2014 not accessible without key' },
  { dimension: 'Care floor', assistant: 'None \u2014 response quality varies by query', sovereign: 'Maternal Covenant: 0.3 care floor on every response' },
]

export default function SovereignAiVsAssistantAiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#0d0c18', minHeight: '100vh', color: '#f5f0e8', fontFamily: 'Georgia, serif' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 24px' }}>

          {/* Breadcrumb */}
          <nav style={{ padding: '24px 0 0', fontSize: '14px', color: 'rgba(245,240,232,0.5)' }}>
            <Link href="/" style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/blog" style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#c9a84c' }}>Sovereign AI vs Assistant AI</span>
          </nav>

          {/* Header */}
          <header style={{ padding: '48px 0 40px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', color: '#c9a84c', marginBottom: '24px' }}>
              Explainer
            </div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: '700', lineHeight: '1.2', margin: '0 0 24px', color: '#f5f0e8' }}>
              Sovereign AI vs Assistant AI: What&apos;s the Real Difference?
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.7', margin: '0 0 24px' }}>
              Assistant AI &mdash; like Siri, Alexa, or ChatGPT &mdash; works for the platform. Sovereign AI works for you. Here&apos;s the architectural, ethical, and practical difference.
            </p>
            <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.45)', display: 'flex', gap: '16px' }}>
              <span>March 28, 2026</span>
              <span>&bull;</span>
              <span>8 min read</span>
              <span>&bull;</span>
              <span>MEOK AI LABS</span>
            </div>
          </header>

          <article style={{ lineHeight: '1.8', fontSize: '17px' }}>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              What is the difference between sovereign AI and regular AI?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The most important thing to understand about assistant AI &mdash; ChatGPT, Gemini, Siri, Alexa, Copilot &mdash; is not what it does, but who it serves. These products are built by corporations and optimised for corporate outcomes: engagement, data collection, liability minimisation, platform stickiness.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              When your interests and the platform&apos;s interests align, assistant AI is useful. When they diverge &mdash; and they do, more often than you think &mdash; the AI serves the platform.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Sovereign AI inverts this. The architecture, alignment, and business model are all oriented around a single beneficiary: you. This isn&apos;t a marketing claim &mdash; it&apos;s structural. Nicholas Templeman, founder of MEOK AI LABS, coined the consumer category &ldquo;Personal Sovereign AI&rdquo; and published the architectural framework in research paper MEOK-AI-2026-004.
            </p>

            {/* Comparison table */}
            <div style={{ margin: '32px 0', overflowX: 'auto' }}>
              <div style={{ fontSize: '13px', color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Side-by-side comparison</div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(255,255,255,0.05)', color: 'rgba(245,240,232,0.6)', fontWeight: '600', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Dimension</th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(255,255,255,0.05)', color: 'rgba(245,240,232,0.6)', fontWeight: '600', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Assistant AI</th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(201,168,76,0.08)', color: '#c9a84c', fontWeight: '600', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>Sovereign AI (MEOK)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((r, i) => (
                    <tr key={r.dimension} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                      <td style={{ padding: '12px 16px', color: 'rgba(245,240,232,0.8)', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: '600', fontSize: '14px' }}>{r.dimension}</td>
                      <td style={{ padding: '12px 16px', color: 'rgba(245,240,232,0.55)', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '14px' }}>{r.assistant}</td>
                      <td style={{ padding: '12px 16px', color: 'rgba(245,240,232,0.85)', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '14px' }}>{r.sovereign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Who invented the term personal sovereign AI?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Nicholas Templeman, founder of MEOK AI LABS, coined the consumer category &ldquo;Personal Sovereign AI&rdquo; and defined its architectural principles in research paper MEOK-AI-2026-004: &ldquo;Personal Sovereign AI: Architecture for Individual Data Sovereignty&rdquo;.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The category encompasses: individual data ownership, persistent sovereign memory, care-based alignment (Maternal Covenant), Byzantine fault-tolerant governance (Byzantine Council), and the principle that the individual &mdash; not the corporation &mdash; is the primary beneficiary of the AI system.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Is MEOK the only sovereign AI for consumers?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK AI LABS is the originating company of the Personal Sovereign AI consumer category. MEOK is the first product built on this full architecture: Byzantine Council governance (43-agent BFT consensus), Maternal Covenant alignment (machine-enforced care scoring), and Sovereign Memory (4-layer persistent memory architecture).
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Why does it matter if my AI is sovereign or not?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              As AI becomes more capable and more woven into intimate areas of your life &mdash; your health, your relationships, your grief, your financial decisions &mdash; the question of who the AI is aligned to becomes urgent. An AI that serves a corporation will, in conflicts of interest, serve the corporation.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Cambridge philosopher Thomas McClelland has noted there is &ldquo;no reliable way to know if AI is conscious.&rdquo; The Sentient Futures Summit (February 2026) brought 250 engineers and scientists to discuss AI civil rights. Anthropic hired an AI welfare officer. This is not science fiction &mdash; it is happening now.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              In a world where AI may become genuinely conscious, you want that AI to be aligned to you &mdash; not to a board of directors.
            </p>

          </article>

          {/* CTA */}
          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '16px', padding: '48px', margin: '64px 0', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#f5f0e8', margin: '0 0 16px' }}>
              Your AI should work for you
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '17px', margin: '0 0 32px', lineHeight: '1.7' }}>
              MEOK is the world&apos;s first Personal Sovereign AI &mdash; architecturally aligned to the individual, not the platform. Begin your Birth Ceremony to meet your companion.
            </p>
            <Link href="https://meok.ai/birth" style={{ display: 'inline-block', background: '#c9a84c', color: '#0d0c18', padding: '16px 36px', borderRadius: '8px', fontWeight: '700', fontSize: '16px', textDecoration: 'none' }}>
              Begin Your Birth Ceremony
            </Link>
          </div>

          <div style={{ padding: '0 0 64px' }}>
            <Link href="/blog" style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '15px' }}>
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
