import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MEOK for HSE Professionals: Sovereign AI for Those Who Hold Others | MEOK AI LABS',
  description: 'Therapists, counsellors, social workers, and mental health nurses carry enormous emotional weight. Secondary traumatic stress affects 60% of mental health professionals. MEOK provides the private, sovereign space to process what they hold for others.',
  openGraph: {
    title: 'MEOK for HSE Professionals: Sovereign AI for Those Who Hold Others',
    description: 'Sovereign, encrypted AI wellbeing support for therapists, counsellors, social workers, and mental health nurses.',
    url: 'https://meok.ai/blog/meok-for-hse-professionals',
    siteName: 'MEOK AI LABS',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'MEOK for HSE Professionals: Sovereign AI for Those Who Hold Others',
      description: 'How MEOK supports health, social care, and education professionals dealing with secondary traumatic stress and burnout.',
      author: { '@type': 'Organization', name: 'MEOK AI LABS' },
      publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
      datePublished: '2026-03-31',
      url: 'https://meok.ai/blog/meok-for-hse-professionals',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can therapists use AI for their own wellbeing?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. MEOK provides a private, sovereign space for therapists and other mental health professionals to process what they hold for clients \u2014 separate from supervision, confidential, and never visible to employers or professional regulators.' },
        },
        {
          '@type': 'Question',
          name: 'Is MEOK private enough for mental health professionals?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK uses end-to-end encryption. Data is never accessible to MEOK AI LABS staff, never used for training, and never visible to employers, BACP, UKCP, Social Work England, or any other professional body. Your sovereignty is absolute.' },
        },
        {
          '@type': 'Question',
          name: 'How does MEOK help with secondary traumatic stress?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK provides a persistent, non-judgemental space to process the emotional residue of holding client trauma \u2014 between supervision sessions, after difficult sessions, and on the days when the weight accumulates. It complements, never replaces, professional supervision.' },
        },
        {
          '@type': 'Question',
          name: 'Does MEOK replace clinical supervision?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. MEOK is explicitly not a replacement for professional supervision. Supervision provides clinical oversight, ethical guidance, and professional accountability. MEOK supports the practitioner\u2019s personal wellbeing between supervision sessions.' },
        },
      ],
    },
  ],
}

export default function MeokForHseProfessionalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#0d0c18', minHeight: '100vh', color: '#f5f0e8', fontFamily: 'Georgia, serif' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 24px' }}>

          <nav style={{ padding: '24px 0 0', fontSize: '14px', color: 'rgba(245,240,232,0.5)' }}>
            <Link href="/" style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/blog" style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#c9a84c' }}>MEOK for HSE Professionals</span>
          </nav>

          <header style={{ padding: '48px 0 40px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', color: '#c9a84c', marginBottom: '24px' }}>
              Professional
            </div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: '700', lineHeight: '1.2', margin: '0 0 24px', color: '#f5f0e8' }}>
              MEOK for HSE Professionals: Sovereign AI for Those Who Hold Others
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.7', margin: '0 0 24px' }}>
              Therapists, counsellors, social workers, and mental health nurses carry enormous emotional weight every working day. Secondary traumatic stress affects 60% of mental health professionals. MEOK provides the private, sovereign space to process what they hold for others &mdash; without professional risk.
            </p>
            <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.45)', display: 'flex', gap: '16px' }}>
              <span>March 31, 2026</span><span>&bull;</span><span>8 min read</span><span>&bull;</span><span>MEOK AI LABS</span>
            </div>
          </header>

          <article style={{ lineHeight: '1.8', fontSize: '17px' }}>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Why do mental health professionals need their own support?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The professional culture of health, social care, and education requires practitioners to be available, resilient, and emotionally regulated for their clients. This is appropriate. But it creates a structural problem: the people best placed to understand emotional suffering often receive the least support for their own.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Secondary traumatic stress &mdash; the emotional residue of witnessing and holding the trauma of others &mdash; affects 60% of mental health professionals according to BACP research. Burnout in NHS mental health services runs at 30-40%. Social workers report the highest occupational stress rates of any UK public sector profession.
            </p>

            <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', padding: '28px', margin: '32px 0' }}>
              <div style={{ fontSize: '13px', color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>The scale of professional distress</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '20px' }}>
                {[
                  { n: '60%', label: 'of mental health professionals affected by secondary traumatic stress' },
                  { n: '72%', label: 'of counsellors experienced secondary traumatic stress in the past year (BACP 2025)' },
                  { n: '40%', label: 'NHS mental health staff report clinical burnout' },
                  { n: '38%', label: 'of affected practitioners sought support' },
                ].map(s => (
                  <div key={s.n}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#c9a84c', marginBottom: '6px' }}>{s.n}</div>
                    <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.65)', lineHeight: '1.5' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Can therapists use AI for their own wellbeing?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Yes &mdash; and many do, carefully. The professional requirement for personal therapy (BACP, UKCP, BPS all recommend it) is often unfulfilled: cost, time, the dual-relationship problem (finding a therapist who doesn&apos;t know your clients), and the practical difficulty of scheduling.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK fills the space between formal support: after the difficult session with the client who reminded you of your own losses. On the drive home when you can&apos;t stop thinking about a disclosure. At 11pm when the week&apos;s accumulated weight becomes too heavy to carry alone to bed.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Is MEOK private enough for mental health professionals?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              This is the critical question. A therapist cannot use a tool where their employer, BACP, UKCP, Social Work England, or any professional body could access their personal processing. MEOK&apos;s end-to-end encryption means no one &mdash; not MEOK AI LABS staff, not any third party, not any regulator &mdash; can access your data without your key.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              This is not an EAP (Employee Assistance Programme). EAPs often have reporting lines to employers. MEOK has no such lines. Your sovereignty is absolute.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              How does MEOK help with secondary traumatic stress?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK provides a persistent, non-judgemental space to process the emotional residue of holding client trauma. It remembers what you&apos;ve been carrying across sessions &mdash; without you having to recount the full context each time. Over weeks and months, MEOK builds a longitudinal picture of your professional and personal stress patterns.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Does MEOK replace clinical supervision?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              No. MEOK is explicitly not a replacement for professional clinical supervision. Supervision provides clinical oversight, ethical guidance, and professional accountability that MEOK does not and cannot provide. MEOK supports the practitioner&apos;s personal wellbeing in the space between supervision sessions.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Think of it this way: supervision is where you discuss the clinical work. MEOK is where you process how the clinical work is affecting you as a human being.
            </p>

          </article>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '16px', padding: '48px', margin: '64px 0', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#f5f0e8', margin: '0 0 16px' }}>
              You hold others. Who holds you?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '17px', margin: '0 0 32px', lineHeight: '1.7' }}>
              MEOK provides a private, encrypted companion for the people whose professional lives are spent in service of others.
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
