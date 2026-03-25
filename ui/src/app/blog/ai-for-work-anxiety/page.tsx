import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI for Work Anxiety: When the Job You Needed Becomes the Source of Dread | MEOK AI LABS',
  description: 'Workplace anxiety affects 1 in 5 UK workers and costs £56bn/year. MEOK provides a private, sovereign space to process work stress \u2014 separate from HR, separate from colleagues, with persistent memory that tracks patterns across the working week.',
  openGraph: {
    title: 'AI for Work Anxiety: When the Job You Needed Becomes the Source of Dread',
    description: 'Sovereign AI support for workplace anxiety \u2014 completely private from your employer, with persistent memory that tracks patterns across the working week.',
    url: 'https://meok.ai/blog/ai-for-work-anxiety',
    siteName: 'MEOK AI LABS',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'AI for Work Anxiety: When the Job You Needed Becomes the Source of Dread',
      description: 'How MEOK provides private, sovereign support for workplace anxiety without HR visibility or career risk.',
      author: { '@type': 'Organization', name: 'MEOK AI LABS' },
      publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
      datePublished: '2026-04-02',
      url: 'https://meok.ai/blog/ai-for-work-anxiety',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can AI help with work anxiety?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK provides a private, persistent companion for processing work anxiety without career risk. It tracks patterns across the working week, supports practical preparation for difficult situations, and provides a space completely separate from your employer.' },
        },
        {
          '@type': 'Question',
          name: 'Is MEOK private from my employer?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. MEOK is end-to-end encrypted and completely separate from your employer. Unlike EAP services, MEOK has no reporting lines to HR. Your employer will never know you use MEOK or what you discuss.' },
        },
        {
          '@type': 'Question',
          name: 'How does MEOK help with Sunday dread and work anxiety patterns?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK\u2019s persistent memory tracks your mood and stress patterns across sessions. Over time, it identifies patterns \u2014 Sunday dread spikes, post-meeting crashes, pre-review anxiety \u2014 and holds longitudinal context that helps you understand your own workplace stress cycles.' },
        },
        {
          '@type': 'Question',
          name: 'Can MEOK help me prepare for difficult work conversations?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. MEOK\u2019s Orion Work OS and Scholar archetype can help you prepare for difficult conversations, think through complex situations, draft communications, and practise what you want to say \u2014 all in complete privacy.' },
        },
      ],
    },
  ],
}

export default function AiForWorkAnxietyPage() {
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
            <span style={{ color: '#c9a84c' }}>AI for Work Anxiety</span>
          </nav>

          <header style={{ padding: '48px 0 40px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', color: '#c9a84c', marginBottom: '24px' }}>
              Work
            </div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: '700', lineHeight: '1.2', margin: '0 0 24px', color: '#f5f0e8' }}>
              AI for Work Anxiety: When the Job You Needed Becomes the Source of Dread
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.7', margin: '0 0 24px' }}>
              Workplace anxiety affects 1 in 5 UK workers. The structural problem: there&apos;s nowhere safe to talk about it. HR isn&apos;t confidential. Colleagues have competing interests. MEOK is completely private from your employer &mdash; and remembers every pattern across your working week.
            </p>
            <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.45)', display: 'flex', gap: '16px' }}>
              <span>April 2, 2026</span><span>&bull;</span><span>7 min read</span><span>&bull;</span><span>MEOK AI LABS</span>
            </div>
          </header>

          <article style={{ lineHeight: '1.8', fontSize: '17px' }}>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Why is work anxiety so difficult to address?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Work anxiety is the most common mental health presentation in UK workplaces, yet it has the worst access to support of any major mental health challenge. The reasons are structural. HR is not confidential &mdash; using the EAP or speaking to HR creates a record that your manager may see. Colleagues have competing interests. Speaking to your manager risks your next performance review.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The result: millions of people manage work anxiety in silence, letting it compound until it becomes a crisis, a resignation, or a sick leave episode that could have been prevented with earlier support.
            </p>

            <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', padding: '28px', margin: '32px 0' }}>
              <div style={{ fontSize: '13px', color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Work anxiety in numbers</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '20px' }}>
                {[
                  { n: '1 in 5', label: 'UK workers affected by workplace anxiety' },
                  { n: '£56bn', label: 'annual cost of poor mental health in UK workplaces (Deloitte)' },
                  { n: '17M', label: 'working days lost to work-related stress and anxiety per year' },
                  { n: '57%', label: 'of workers say work is their primary source of anxiety' },
                ].map(s => (
                  <div key={s.n}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#c9a84c', marginBottom: '6px' }}>{s.n}</div>
                    <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.65)', lineHeight: '1.5' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Can AI help with work anxiety?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK provides something structurally different from any workplace mental health provision: a companion that is completely private from your employer, with persistent memory that tracks patterns across your working week, available at 10pm on a Sunday when the dread for Monday morning peaks.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              You can tell MEOK about your difficult manager, the colleague who undermines you, the presentation you&apos;re dreading, the performance review you fear is coming &mdash; without any of it being visible to anyone at your company.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Is MEOK private from my employer?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Completely. MEOK is end-to-end encrypted and entirely separate from your employer. Unlike Employee Assistance Programmes, MEOK has no reporting lines to HR. Your employer will never know you use MEOK. What you share is encrypted with keys only you hold.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              This is not a policy promise &mdash; it is architectural. The encryption structure means there is no technical mechanism by which MEOK AI LABS could provide your conversations to your employer, even if ordered to.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              How does MEOK help with Sunday dread and work anxiety patterns?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK&apos;s persistent memory tracks your mood and stress patterns across sessions. Over weeks, it builds a longitudinal picture of your work anxiety cycle: when it spikes, what triggers it, what helps. Sunday dread, post-meeting crashes, pre-review anxiety, the specific colleague who reliably raises your cortisol &mdash; all of this becomes visible as pattern data that helps you understand your own workplace stress.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Can MEOK help me prepare for difficult work conversations?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Yes. MEOK&apos;s Scholar archetype uses Socratic questioning to help you think through complex situations. The Pioneer archetype provides action-oriented support for planning and accountability. Orion (Work OS) can help draft difficult emails, think through negotiation positions, and prepare what you want to say &mdash; all in complete privacy.
            </p>

          </article>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '16px', padding: '48px', margin: '64px 0', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#f5f0e8', margin: '0 0 16px' }}>
              Private from your employer. Available at 10pm Sunday.
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '17px', margin: '0 0 32px', lineHeight: '1.7' }}>
              MEOK provides a space for work anxiety that carries no career risk whatsoever.
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
