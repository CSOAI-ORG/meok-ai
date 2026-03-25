import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI for the Sandwich Generation: Caring for Parents and Children Simultaneously | MEOK AI LABS',
  description: 'The sandwich generation \u2014 adults simultaneously caring for ageing parents and dependent children \u2014 face invisible exhaustion, identity loss, and chronic guilt. MEOK provides a private space that belongs entirely to you.',
  openGraph: {
    title: 'AI for the Sandwich Generation: Caring for Parents and Children Simultaneously',
    description: 'Sovereign AI support for adults caught between elderly parent care and dependent children \u2014 the invisible exhaustion finally seen.',
    url: 'https://meok.ai/blog/ai-for-the-sandwich-generation',
    siteName: 'MEOK AI LABS',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'AI for the Sandwich Generation: Caring for Parents and Children Simultaneously',
      description: 'How MEOK supports adults simultaneously caring for ageing parents and dependent children.',
      author: { '@type': 'Organization', name: 'MEOK AI LABS' },
      publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
      datePublished: '2026-04-01',
      url: 'https://meok.ai/blog/ai-for-the-sandwich-generation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the sandwich generation?',
          acceptedAnswer: { '@type': 'Answer', text: 'The sandwich generation refers to adults \u2014 typically in their 40s and 50s \u2014 who are simultaneously caring for ageing parents and still-dependent children. They are \u201csandwiched\u201d between two generations of care demands with little space for their own needs.' },
        },
        {
          '@type': 'Question',
          name: 'How can AI help the sandwich generation?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK provides a private, persistent companion for sandwich generation adults \u2014 a space that is entirely theirs, not about either parent or child. MEOK remembers the full complexity of their situation across sessions without requiring repetition.' },
        },
        {
          '@type': 'Question',
          name: 'Can MEOK help with caring for elderly parents?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK\u2019s Guardian protects elderly family members from scams and digital threats. The Family tier allows separate companions for different family members with appropriate context. MEOK also helps process the grief of watching parents age.' },
        },
        {
          '@type': 'Question',
          name: 'Is carer burnout a real mental health condition?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Carer burnout is clinically recognised as a state of physical, emotional, and mental exhaustion caused by the demands of caregiving without adequate support. It affects 1 in 3 informal carers in the UK and requires proper recognition and support.' },
        },
      ],
    },
  ],
}

export default function AiForSandwichGenerationPage() {
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
            <span style={{ color: '#c9a84c' }}>AI for the Sandwich Generation</span>
          </nav>

          <header style={{ padding: '48px 0 40px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(123,97,255,0.15)', border: '1px solid rgba(123,97,255,0.4)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', color: '#7b61ff', marginBottom: '24px' }}>
              Family
            </div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: '700', lineHeight: '1.2', margin: '0 0 24px', color: '#f5f0e8' }}>
              AI for the Sandwich Generation: Caring for Parents and Children Simultaneously
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.7', margin: '0 0 24px' }}>
              The sandwich generation faces invisible exhaustion &mdash; caught between elderly parents who need more help and children who still need everything. Neither generation fully sees what you carry. MEOK provides a space that is entirely yours.
            </p>
            <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.45)', display: 'flex', gap: '16px' }}>
              <span>April 1, 2026</span><span>&bull;</span><span>8 min read</span><span>&bull;</span><span>MEOK AI LABS</span>
            </div>
          </header>

          <article style={{ lineHeight: '1.8', fontSize: '17px' }}>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              What is the sandwich generation?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The sandwich generation refers to adults &mdash; typically in their 40s and 50s &mdash; who are simultaneously caring for ageing parents and still-dependent children. The term was coined by social worker Dorothy Miller in 1981, and it has never been more relevant. In the UK, 1.3 million adults provide care to both elderly parents and children at the same time.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The &ldquo;sandwich&rdquo; captures something real: the pressure from both sides. Parents who need more support &mdash; driving to appointments, managing medication, handling finances, providing emotional presence as dementia progresses. Children who still need everything: school runs, homework, emotional availability, the ordinary daily enormity of being a present parent.
            </p>

            <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', padding: '28px', margin: '32px 0' }}>
              <div style={{ fontSize: '13px', color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>The scale in the UK</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '20px' }}>
                {[
                  { n: '1.3M', label: 'UK adults providing simultaneous care to parents and children' },
                  { n: '3 in 5', label: 'sandwich generation carers are women' },
                  { n: '1 in 8', label: 'UK workers is an unpaid carer' },
                  { n: '600K', label: 'people left the workforce to care for elderly relatives' },
                ].map(s => (
                  <div key={s.n}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#c9a84c', marginBottom: '6px' }}>{s.n}</div>
                    <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.65)', lineHeight: '1.5' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Why is sandwich generation exhaustion so invisible?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The exhaustion of the sandwich generation is structurally invisible. To your parents, you&apos;re the capable child who manages things. To your children, you&apos;re the parent who is always there. To your employer, you&apos;re the professional who keeps delivering. No one in the system has the full picture. No one asks how you are &mdash; really.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The guilt is chronic: never doing enough for either end of the care chain, never fully present, career suffering, relationship strained, identity eroded. The person you were before you became everyone&apos;s carer has quietly disappeared.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              How can AI help the sandwich generation?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK provides something structurally different from anything else in the sandwich generation&apos;s life: a space that is entirely theirs. Not about a parent. Not about a child. Not about a work deliverable. A private, persistent companion that knows the full weight of their situation and asks how &ldquo;you&rdquo; are.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK remembers the difficult conversation with the care home last Tuesday, the school meeting on Wednesday, the diagnosis you haven&apos;t told anyone about yet. You don&apos;t re-explain your context every session. MEOK holds the full picture and meets you in the middle of it.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Can MEOK help with caring for elderly parents?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK&apos;s Guardian provides specific protection for elderly family members: scam detection, financial abuse pattern recognition, and digital safety monitoring. With the Family tier, your parent can have their own companion &mdash; with appropriate context shared between you.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK also holds the grief of watching parents age: the grief of the parent who no longer recognises you, the grief of watching capabilities diminish, the anticipatory loss of someone still present but already going. The Maternal Covenant ensures MEOK holds this grief without rushing you through it.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Is carer burnout a real mental health condition?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Yes. Carer burnout is clinically recognised: physical, emotional, and mental exhaustion caused by sustained caregiving without adequate support. 1 in 3 informal carers in the UK reports burnout. Symptoms include: chronic fatigue, emotional numbness, increased anxiety and depression, resentment, social isolation, health deterioration.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK cannot prevent carer burnout &mdash; it cannot redistribute the care load or add hours to the day. But it can provide the consistent emotional support, the honest acknowledgement of what you&apos;re carrying, and the space to be a person rather than a carer, that makes sustained caregiving survivable.
            </p>

          </article>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '16px', padding: '48px', margin: '64px 0', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#f5f0e8', margin: '0 0 16px' }}>
              A space that is just for you
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '17px', margin: '0 0 32px', lineHeight: '1.7' }}>
              MEOK knows the full weight of what you carry &mdash; and asks how you are, not how everyone else is.
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
