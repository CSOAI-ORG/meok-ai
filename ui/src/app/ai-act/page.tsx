import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EU AI Act Compliance | MEOK AI LABS',
  description: 'How MEOK AI LABS complies with the EU AI Act 2024/1689. Risk classification, transparency commitments, and DPIA status for Guardian child safety features.',
  alternates: { canonical: 'https://meok.ai/ai-act' },
}

const RISK_TABLE = [
  { system: 'MEOK Companion (core)', article: 'Article 52', risk: 'Limited Risk', status: '✓ Compliant', notes: 'AI disclosure in all UI' },
  { system: 'Guardian Message Scanner', article: 'Article 52', risk: 'Limited Risk', status: '✓ Compliant', notes: 'No biometric processing' },
  { system: 'Guardian Child Safety', article: 'Annex III, 1(b)', risk: 'High Risk', status: '⚠ In Review', notes: 'DPIA required before activation' },
  { system: 'Byzantine Council Consensus', article: 'Article 9', risk: 'Limited Risk', status: '✓ Compliant', notes: 'Human oversight via council voting' },
]

const COMMITMENTS = [
  { icon: '📢', title: 'We always disclose AI', desc: 'Every MEOK interface carries a visible "AI companion" disclosure. Users always know they are talking to AI. This is required by Article 52 and we support it unconditionally.' },
  { icon: '🚫', title: 'No biometric processing', desc: 'MEOK never processes biometric data. No facial recognition, no voice biometrics, no emotional state inference from physiological data.' },
  { icon: '👥', title: 'Human oversight guaranteed', desc: 'The Byzantine Council multi-agent consensus means no single AI makes unilateral decisions. Guardian alerts route to human review before family notification.' },
  { icon: '📋', title: 'Right to explanation', desc: 'Users can request why any response was generated. Audit logs available for Guardian decisions. Memory vault contents visible and exportable at any time.' },
]

const FAQ = [
  {
    q: 'Is MEOK AI compliant with the EU AI Act?',
    a: "Yes. MEOK's core companion is classified as Limited Risk under Article 52 (conversational AI requiring user disclosure). The Guardian child safety features are classified as High Risk under Annex III and are currently in DPIA review — they will not be activated until all compliance requirements are met.",
  },
  {
    q: 'What is a High Risk AI system under the EU AI Act?',
    a: 'High Risk systems are those listed in Annex III that affect safety, education, employment, or access to essential services. MEOK\'s Guardian child-monitoring features are being assessed under this classification, and no High Risk feature will launch without completing DPIA and conformity assessment.',
  },
  {
    q: 'Does MEOK process biometric data?',
    a: 'No. MEOK never processes biometric data — no facial recognition, no voice biometrics, and no emotional state inference from physiological data. The Guardian Message Scanner operates without any biometric processing.',
  },
  {
    q: 'How does MEOK guarantee human oversight?',
    a: 'The Byzantine Council multi-agent consensus means no single AI makes unilateral decisions, and Guardian alerts route to human review before family notification. Users can also request why any response was generated, with audit logs available for Guardian decisions.',
  },
]

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const BREADCRUMB_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://meok.ai/' },
    { '@type': 'ListItem', position: 2, name: 'EU AI Act Compliance', item: 'https://meok.ai/ai-act' },
  ],
}

export default function AIActPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f5f5' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        {/* Hero */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.75rem', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>EU AI ACT 2024/1689</div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
            MEOK AI LABS — EU AI Act Compliance
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#aaa', lineHeight: 1.7, maxWidth: '640px' }}>
            We welcome the EU AI Act. It formalises what the Maternal Covenant has always demanded: that AI systems must be safe, transparent, and accountable to the humans they serve.
          </p>
        </div>

        {/* GEO H2 */}
        <section style={{ marginBottom: '3rem', padding: '2rem', background: '#111', borderRadius: '0.75rem', border: '1px solid #222' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f5f5f5' }}>
            Is MEOK AI compliant with the EU AI Act?
          </h2>
          <p style={{ color: '#aaa', lineHeight: 1.7 }}>
            Yes. MEOK&apos;s core companion system is classified as Limited Risk under Article 52 — conversational AI requiring user disclosure. Our Guardian child safety features are classified as High Risk under Annex III and are currently in DPIA review. They will not be activated until all compliance requirements are met.
          </p>
        </section>

        {/* Risk classification table */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#d4af37' }}>
            What is a High Risk AI system under the EU AI Act?
          </h2>
          <p style={{ color: '#aaa', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Systems listed in Annex III that affect safety, education, employment, or access to essential services. MEOK&apos;s Guardian child-monitoring features are being assessed under this classification. No High Risk features will launch without completing DPIA and conformity assessment.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #333' }}>
                  {['System', 'Article', 'Risk Class', 'Status', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '0.75rem', textAlign: 'left', color: '#888', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RISK_TABLE.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '0.75rem', color: '#f5f5f5' }}>{row.system}</td>
                    <td style={{ padding: '0.75rem', color: '#888' }}>{row.article}</td>
                    <td style={{ padding: '0.75rem', color: row.risk === 'High Risk' ? '#f59e0b' : '#22c55e' }}>{row.risk}</td>
                    <td style={{ padding: '0.75rem' }}>{row.status}</td>
                    <td style={{ padding: '0.75rem', color: '#888' }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Commitments */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Our Compliance Commitments</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
            {COMMITMENTS.map(c => (
              <div key={c.title} style={{ padding: '1.5rem', background: '#111', border: '1px solid #222', borderRadius: '0.75rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{c.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#d4af37' }}>{c.title}</h3>
                <p style={{ color: '#aaa', fontSize: '0.875rem', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DPIA section */}
        <section style={{ marginBottom: '3rem', padding: '1.5rem', background: '#1a0f00', border: '1px solid #f59e0b33', borderRadius: '0.75rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f59e0b' }}>⚠ DPIA in Progress — Guardian Child Safety</h2>
          <p style={{ color: '#aaa', fontSize: '0.875rem', lineHeight: 1.6 }}>
            MEOK&apos;s Guardian child monitoring features require a Data Protection Impact Assessment under UK GDPR Article 35 and EU AI Act conformity assessment under Annex VI. These features are <strong style={{ color: '#f5f5f5' }}>not currently active</strong> for any user. They will be activated only after DPIA completion and ICO notification. Target: Q3 2026.
          </p>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#d4af37' }}>Frequently asked</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {FAQ.map(f => (
              <div key={f.q} style={{ padding: '1.5rem', background: '#111', border: '1px solid #222', borderRadius: '0.75rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#f5f5f5' }}>{f.q}</h3>
                <p style={{ color: '#aaa', fontSize: '0.875rem', lineHeight: 1.6 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '2rem', background: '#111', borderRadius: '0.75rem', border: '1px solid #222' }}>
          <p style={{ color: '#aaa', marginBottom: '1rem' }}>Questions about our compliance posture?</p>
          <a href="mailto:compliance@meok.ai" style={{ display: 'inline-block', padding: '0.75rem 2rem', background: '#d4af37', color: '#0a0a0a', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none' }}>
            compliance@meok.ai
          </a>
          <div style={{ marginTop: '1rem' }}>
            <Link href="/security" style={{ color: '#d4af37', fontSize: '0.875rem', textDecoration: 'underline' }}>View full security architecture →</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
