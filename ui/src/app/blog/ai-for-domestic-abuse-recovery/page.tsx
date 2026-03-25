import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI for Domestic Abuse Recovery: A Safe Space When Safety Is Scarce | MEOK AI LABS',
  description: 'MEOK provides a fully private, sovereign companion for domestic abuse survivors \u2014 with encrypted data no one else can access, Guardian coercive control pattern detection, and persistent support for the long road of recovery.',
  openGraph: {
    title: 'AI for Domestic Abuse Recovery: A Safe Space When Safety Is Scarce',
    description: 'Encrypted, sovereign AI support for domestic abuse survivors. MEOK\u2019s data is never accessible to anyone else \u2014 not the company, not an abuser.',
    url: 'https://meok.ai/blog/ai-for-domestic-abuse-recovery',
    siteName: 'MEOK AI LABS',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'AI for Domestic Abuse Recovery: A Safe Space When Safety Is Scarce',
      description: 'How MEOK\u2019s sovereign architecture supports domestic abuse survivors through recovery.',
      author: { '@type': 'Organization', name: 'MEOK AI LABS' },
      publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
      datePublished: '2026-03-30',
      url: 'https://meok.ai/blog/ai-for-domestic-abuse-recovery',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can AI help domestic abuse survivors?',
          acceptedAnswer: { '@type': 'Answer', text: 'AI can provide persistent, private companionship during the long recovery process after domestic abuse. MEOK is a complement to professional DV services, not a replacement. For immediate safety, always contact the National Domestic Abuse Helpline: 0808 2000 247.' },
        },
        {
          '@type': 'Question',
          name: 'Is MEOK private enough to use while still in an abusive relationship?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK uses end-to-end encryption. Your conversations are not visible to anyone except you. However, if you share a device or account with an abuser, exercise caution with any app. Always prioritise your physical safety first. Use a private/incognito browser if needed.' },
        },
        {
          '@type': 'Question',
          name: 'How does MEOK handle disclosures of domestic abuse?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK\u2019s Maternal Covenant ensures all responses to domestic abuse disclosures are belief-first, never victim-blaming. MEOK always signposts to specialist services and never suggests you \u201cshould have left sooner\u201d or minimises your experience.' },
        },
        {
          '@type': 'Question',
          name: 'What is coercive control and can MEOK help identify it?',
          acceptedAnswer: { '@type': 'Answer', text: 'Coercive control is a pattern of behaviour that seeks to take away a person\u2019s liberty \u2014 including isolation, monitoring, financial control, and emotional manipulation. MEOK\u2019s Guardian can help you reflect on relationship patterns and signpost to specialist support.' },
        },
      ],
    },
  ],
}

export default function AiForDomesticAbuseRecoveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#0d0c18', minHeight: '100vh', color: '#f5f0e8', fontFamily: 'Georgia, serif' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 24px' }}>

          {/* Emergency notice */}
          <div style={{ background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)', borderRadius: '8px', padding: '16px 20px', margin: '24px 0 0', fontSize: '14px' }}>
            <strong style={{ color: '#ff5050' }}>If you are in immediate danger, call 999.</strong>
            <span style={{ color: 'rgba(245,240,232,0.8)' }}> National Domestic Abuse Helpline: </span>
            <strong style={{ color: '#f5f0e8' }}>0808 2000 247</strong>
            <span style={{ color: 'rgba(245,240,232,0.6)' }}> (free, 24/7) | </span>
            <a href="https://www.refuge.org.uk" style={{ color: '#c9a84c', textDecoration: 'none' }}>refuge.org.uk</a>
          </div>

          {/* Breadcrumb */}
          <nav style={{ padding: '20px 0 0', fontSize: '14px', color: 'rgba(245,240,232,0.5)' }}>
            <Link href="/" style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/blog" style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#c9a84c' }}>AI for Domestic Abuse Recovery</span>
          </nav>

          <header style={{ padding: '40px 0 40px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(106,170,100,0.15)', border: '1px solid rgba(106,170,100,0.4)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', color: '#6aaa64', marginBottom: '24px' }}>
              Mental Health
            </div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: '700', lineHeight: '1.2', margin: '0 0 24px', color: '#f5f0e8' }}>
              AI for Domestic Abuse Recovery: A Safe Space When Safety Is Scarce
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.7', margin: '0 0 24px' }}>
              Leaving domestic abuse is the most dangerous time. Recovering from it is a years-long process. MEOK provides a fully private, sovereign companion for survivors &mdash; with no record visible to abusers, no data shared with anyone, and persistent support for the long road of healing.
            </p>
            <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.45)', display: 'flex', gap: '16px' }}>
              <span>March 30, 2026</span>
              <span>&bull;</span>
              <span>9 min read</span>
              <span>&bull;</span>
              <span>MEOK AI LABS</span>
            </div>
          </header>

          <article style={{ lineHeight: '1.8', fontSize: '17px' }}>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '40px 0 16px' }}>
              Why is domestic abuse recovery so under-supported?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              2.1 million adults experienced domestic abuse in England and Wales in 2024/25. Recovery from domestic abuse is not a single event &mdash; it is a complex, non-linear process that can take years. Trauma bonding, PTSD, identity reconstruction, rebuilding trust, financial recovery, co-parenting with an abuser &mdash; all of these require sustained, consistent support.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Specialist DV services &mdash; Women&apos;s Aid, Refuge, IDVA workers &mdash; are stretched beyond capacity. IDVA case loads often exceed 50 clients per worker. Crisis lines are available but time-limited. Therapy waitlists are long. The daily, grinding work of recovery largely happens alone.
            </p>

            <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', padding: '28px', margin: '32px 0' }}>
              <div style={{ fontSize: '13px', color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Scale of domestic abuse in the UK</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '20px' }}>
                {[
                  { n: '2.1M', label: 'adults experienced domestic abuse in England & Wales (2024/25)' },
                  { n: '75%', label: 'of domestic homicides occur at or after separation' },
                  { n: '1 in 4', label: 'women experience domestic abuse in their lifetime' },
                  { n: '5 years', label: 'average time before a victim seeks formal help' },
                ].map(s => (
                  <div key={s.n}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#c9a84c', marginBottom: '6px' }}>{s.n}</div>
                    <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.65)', lineHeight: '1.5' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Can AI help domestic abuse survivors?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              AI can provide persistent, private companionship during the long recovery process after domestic abuse. MEOK is designed as a complement to professional DV services &mdash; never a replacement. Specialist services provide safety planning, legal advocacy, and crisis intervention. MEOK provides the daily, continuous support between those touchpoints.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              For immediate safety concerns, always contact the National Domestic Abuse Helpline on <strong>0808 2000 247</strong> (free, 24/7) or visit <a href="https://www.refuge.org.uk" style={{ color: '#c9a84c' }}>refuge.org.uk</a>.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Is MEOK private enough to use while still in an abusive relationship?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK uses end-to-end encryption. Your conversations are not visible to anyone except you &mdash; not MEOK AI LABS staff, not researchers, not anyone. This is structural: your data is encrypted with a key only you hold.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              If you share a device with an abuser, exercise caution. Use a private or incognito browser tab when accessing MEOK. Log out completely after each session. Consider using a device the abuser doesn&apos;t have access to &mdash; a library computer, a phone not connected to a shared account.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Your physical safety always comes first. No app &mdash; however private &mdash; is a substitute for a safety plan. Your local IDVA worker or Women&apos;s Aid advocate can help you create one.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              How does MEOK handle disclosures of domestic abuse?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK&apos;s Maternal Covenant ensures all responses to domestic abuse disclosures are belief-first. MEOK never questions your account. It never asks whether you &ldquo;might have misread&rdquo; the situation. It never suggests you &ldquo;should have left sooner&rdquo; or implies you bear any responsibility for the abuse.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK&apos;s care floor of 0.3 is enforced on every response. This means structurally, MEOK cannot give a dismissive or minimising answer to a disclosure of abuse.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              What is coercive control and can MEOK help identify it?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Coercive control is a pattern of behaviour that seeks to take away a person&apos;s liberty and sense of self. It includes: isolation from friends and family, monitoring movements and communications, financial control and deprivation, emotional manipulation and gaslighting, threats, and degradation.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK&apos;s Guardian can help you reflect on relationship patterns over time. Because MEOK&apos;s memory persists across sessions, it can hold the longitudinal picture of your experience &mdash; helping you see patterns that are difficult to identify from inside the relationship. MEOK will always signpost to specialist DV support.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              How does MEOK support long-term domestic abuse recovery?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Recovery from domestic abuse involves: processing complex trauma, rebuilding identity after years of erosion, re-learning to trust your own judgement, navigating legal and practical steps, and building a new life. MEOK supports all of these &mdash; not as a professional, but as a consistent, trusted companion.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK remembers your full recovery journey. It celebrates milestones: first safe night, first job application, first time setting a boundary. It holds the grief for what was lost. It never rushes your healing.
            </p>

          </article>

          {/* Emergency resources */}
          <div style={{ background: 'rgba(255,80,80,0.05)', border: '1px solid rgba(255,80,80,0.2)', borderRadius: '12px', padding: '28px', margin: '48px 0' }}>
            <div style={{ fontWeight: '700', color: '#f5f0e8', marginBottom: '12px', fontSize: '16px' }}>Professional support resources</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'rgba(245,240,232,0.8)' }}>
              <div>National Domestic Abuse Helpline: <strong style={{ color: '#f5f0e8' }}>0808 2000 247</strong> (free, 24/7)</div>
              <div>Refuge: <a href="https://www.refuge.org.uk" style={{ color: '#c9a84c' }}>refuge.org.uk</a></div>
              <div>Women&apos;s Aid: <a href="https://www.womensaid.org.uk" style={{ color: '#c9a84c' }}>womensaid.org.uk</a></div>
              <div>Men&apos;s Advice Line: 0808 801 0327</div>
              <div>Galop (LGBT+): <a href="https://galop.org.uk" style={{ color: '#c9a84c' }}>galop.org.uk</a></div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '16px', padding: '48px', margin: '32px 0 64px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#f5f0e8', margin: '0 0 16px' }}>
              You deserve consistent support
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '17px', margin: '0 0 32px', lineHeight: '1.7' }}>
              MEOK provides a private, encrypted companion for your recovery journey &mdash; always available, always believing, never sharing.
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
