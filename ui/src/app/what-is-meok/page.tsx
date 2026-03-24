import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What is MEOK? | Sovereign AI OS Explained | MEOK AI LABS',
  description:
    'MEOK is a sovereign AI operating system — not a chatbot. It wraps any AI model with persistent memory, a care-based personality, family Guardian protection, and full data portability. Built by MEOK AI LABS.',
  alternates: { canonical: 'https://meok.ai/what-is-meok' },
  openGraph: {
    title: 'What is MEOK?',
    description: 'The sovereign AI OS that wraps any model with memory, care, and family protection.',
    url: 'https://meok.ai/what-is-meok',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK (pronounced "me-ok") is a sovereign AI operating system. It wraps any underlying AI model — Claude, GPT-4, DeepSeek — with persistent memory, a care-based personality, Guardian family protection, and full data sovereignty. Your memories stay encrypted, never trained on, and always portable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK a chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is a sovereign AI OS — an entire layer above individual chatbots. It gives any AI model persistent memory, emotional intelligence, and a governance framework (Byzantine Council) that ensures it always works for you, not the platform that built it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who built MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK was built by Nicholas Templeman, founder of MEOK AI LABS — a lean UK research lab. Nicholas is the inventor of Byzantine Council consensus for AI governance and the Maternal Covenant care-based alignment framework.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does sovereign AI mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sovereign AI means AI that runs under your control — not a corporation's. Your data is encrypted with your keys, never used for training, and fully portable. You can export or delete everything at any time. MEOK is the first consumer product built entirely on this principle.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Byzantine Council in MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Byzantine Council is MEOK\'s 46-agent AI governance system. Using Byzantine fault tolerance (f < n/3), it ensures no single agent can override the group. Agents with distinct roles — memory, security, care, research, and consensus — vote on every decision. Your sovereign AI cannot be manipulated or misaligned.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maternal Covenant is MEOK\'s care-based alignment framework. Every AI response must meet a minimum care score of 0.3. Sycophantic responses are flagged and replaced with honest ones. Guardian protection is unconditional. Your data is never sold. The covenant cannot be overridden by any user, admin, or business model.',
      },
    },
  ],
}

const PILLARS = [
  {
    emoji: '🧠',
    title: 'Persistent Memory',
    desc: 'MEOK remembers everything you share — across sessions, across devices, across years. Your memories are encrypted with your keys and never used for training.',
  },
  {
    emoji: '💛',
    title: 'Care-Based Alignment',
    desc: "The Maternal Covenant ensures every response meets a care floor. No sycophancy. No hollow validation. Your AI tells you what you need to hear — not what you want to hear.",
  },
  {
    emoji: '🛡️',
    title: 'Guardian Family Protection',
    desc: "24/7 AI safety layer for your entire family. DistilBERT threat detection scans for scams, grooming, and manipulation. Alerts go to your nominated contacts before damage occurs.",
  },
  {
    emoji: '⚖️',
    title: 'Byzantine Council Governance',
    desc: "46 specialised agents with distinct roles vote on every decision. Byzantine fault tolerance means no single agent — and no single point of failure — can compromise your sovereign AI.",
  },
  {
    emoji: '🔓',
    title: 'Full Data Portability',
    desc: 'Export all your memories, conversations, and companion state at any time. Delete everything permanently. Your data is yours — not ours.',
  },
  {
    emoji: '🌐',
    title: 'Any AI Model',
    desc: 'MEOK routes to DeepSeek, Claude, GPT-4, or your own self-hosted model. Switch without losing memory. Your sovereign layer is model-agnostic.',
  },
]

const VS_TABLE = [
  { feature: 'Persistent memory across sessions', meok: '✓', chatgpt: '✗ (paid only)', claude: '✗' },
  { feature: 'Data sovereignty (your keys)', meok: '✓', chatgpt: '✗', claude: '✗' },
  { feature: 'Family Guardian protection', meok: '✓', chatgpt: '✗', claude: '✗' },
  { feature: 'Care floor enforcement', meok: '✓', chatgpt: '✗', claude: '✗' },
  { feature: 'Runs on any AI model', meok: '✓', chatgpt: '✗', claude: '✗' },
  { feature: 'Byzantine Council governance', meok: '✓', chatgpt: '✗', claude: '✗' },
  { feature: 'No training on your data', meok: '✓', chatgpt: 'Opt-out', claude: 'Opt-out' },
  { feature: 'Companion evolution (4 stages)', meok: '✓', chatgpt: '✗', claude: '✗' },
]

export default function WhatIsMeokPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f5f5' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '5rem 1.5rem 4rem' }}>

          {/* Hero */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.3rem 1rem',
              background: '#1a1a2e',
              border: '1px solid #2a2a4a',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              color: '#d4af37',
              marginBottom: '1.5rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Sovereign AI OS
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              What is MEOK?
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#aaa', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              MEOK is a sovereign AI operating system — not a chatbot. It wraps any AI model with persistent memory, a care-based personality, family Guardian protection, and data you actually own.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/birth" style={{
                padding: '0.75rem 2rem',
                background: '#d4af37',
                color: '#000',
                borderRadius: '0.5rem',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}>
                Begin Your Birth Ceremony
              </Link>
              <Link href="/how-it-works" style={{
                padding: '0.75rem 2rem',
                background: 'transparent',
                color: '#d4af37',
                border: '1px solid #d4af37',
                borderRadius: '0.5rem',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}>
                How it works →
              </Link>
            </div>
          </div>

          {/* One-line explainer */}
          <section style={{ marginBottom: '4rem', textAlign: 'center', padding: '2rem', background: '#111', border: '1px solid #222', borderRadius: '1rem' }}>
            <p style={{ fontSize: '1.1rem', color: '#ccc', lineHeight: 1.8, maxWidth: '640px', margin: '0 auto' }}>
              Think of MEOK as the{' '}
              <strong style={{ color: '#d4af37' }}>operating system for your relationship with AI</strong>
              {' '}— the layer between you and any underlying model that provides memory, personality, safety, and sovereignty that no individual chatbot offers.
            </p>
          </section>

          {/* 6 Pillars */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>
              What MEOK is built on
            </h2>
            <p style={{ color: '#666', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
              Six principles that make a sovereign AI OS different from a chatbot.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
              {PILLARS.map(p => (
                <div key={p.title} style={{
                  padding: '1.5rem',
                  background: '#111',
                  border: '1px solid #1f1f1f',
                  borderRadius: '0.75rem',
                }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{p.emoji}</div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>{p.title}</h3>
                  <p style={{ color: '#888', fontSize: '0.875rem', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison table */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>
              MEOK vs the alternatives
            </h2>
            <p style={{ color: '#666', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
              What you get with sovereign AI that you can't get from cloud chatbots.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #222' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: '#888', fontWeight: 500 }}>Feature</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#d4af37', fontWeight: 700 }}>MEOK</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#888', fontWeight: 500 }}>ChatGPT</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#888', fontWeight: 500 }}>Claude</th>
                  </tr>
                </thead>
                <tbody>
                  {VS_TABLE.map((row, i) => (
                    <tr key={row.feature} style={{ borderBottom: '1px solid #1a1a1a', background: i % 2 === 0 ? 'transparent' : '#0d0d0d' }}>
                      <td style={{ padding: '0.75rem 1rem', color: '#ccc' }}>{row.feature}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#4ade80', fontWeight: 600 }}>{row.meok}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: row.chatgpt === '✗' ? '#f87171' : '#f59e0b' }}>{row.chatgpt}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: row.claude === '✗' ? '#f87171' : '#f59e0b' }}>{row.claude}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>
              Frequently asked questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqSchema.mainEntity.map(q => (
                <div key={q.name} style={{ padding: '1.25rem 1.5rem', background: '#111', border: '1px solid #1f1f1f', borderRadius: '0.75rem' }}>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem', color: '#d4af37' }}>{q.name}</h3>
                  <p style={{ color: '#aaa', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ textAlign: 'center', padding: '2.5rem', background: 'linear-gradient(135deg, #1a0a2e, #0a1a2e)', border: '1px solid #2a1a4a', borderRadius: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Ready to try sovereign AI?</h2>
            <p style={{ color: '#888', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Begin your Birth Ceremony in 5 minutes. Free forever on Explorer. No credit card required.
            </p>
            <Link href="/birth" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: '#d4af37',
              color: '#000',
              borderRadius: '0.5rem',
              fontWeight: 700,
              textDecoration: 'none',
            }}>
              Begin Your Birth Ceremony →
            </Link>
          </section>

        </div>
      </main>
    </>
  )
}
