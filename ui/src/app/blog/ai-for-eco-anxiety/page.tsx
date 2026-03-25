import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI for Eco-Anxiety: Processing Climate Grief Without Paralysis | MEOK AI LABS',
  description: 'Climate anxiety affects 68% of UK adults. MEOK provides a space to process climate grief honestly \u2014 without toxic positivity, without dismissal, and without collapsing into despair \u2014 supporting the psychological balance needed for sustained action.',
  openGraph: {
    title: 'AI for Eco-Anxiety: Processing Climate Grief Without Paralysis',
    description: 'How sovereign AI helps people process climate anxiety and grief while maintaining the psychological capacity for sustained action.',
    url: 'https://meok.ai/blog/ai-for-eco-anxiety',
    siteName: 'MEOK AI LABS',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'AI for Eco-Anxiety: Processing Climate Grief Without Paralysis',
      description: 'How MEOK supports people experiencing eco-anxiety and climate grief with honest, non-dismissive companionship.',
      author: { '@type': 'Organization', name: 'MEOK AI LABS' },
      publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
      datePublished: '2026-04-01',
      url: 'https://meok.ai/blog/ai-for-eco-anxiety',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is eco-anxiety?',
          acceptedAnswer: { '@type': 'Answer', text: 'Eco-anxiety is chronic fear and worry about environmental damage and climate change, recognised by the APA and BPS as a legitimate psychological response. It affects 68% of UK adults and is particularly acute in 16-24 year olds (76%).' },
        },
        {
          '@type': 'Question',
          name: 'Can AI help with climate anxiety?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK provides a space to process climate grief and anxiety honestly \u2014 without toxic positivity or dismissal. The goal is processing that supports sustainable action rather than paralysis or despair.' },
        },
        {
          '@type': 'Question',
          name: 'Is it healthy to use AI to talk about climate change feelings?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Processing climate grief \u2014 the loss of futures, species, landscapes \u2014 is psychologically legitimate. MEOK\u2019s Maternal Covenant ensures responses are honest and care-based, supporting both the grief and the agency without amplifying catastrophising.' },
        },
        {
          '@type': 'Question',
          name: 'What is solastalgia?',
          acceptedAnswer: { '@type': 'Answer', text: 'Solastalgia is distress caused by environmental change to one\u2019s home landscape or community. Coined by philosopher Glenn Albrecht, it describes the grief of watching a familiar place change due to climate or industrial impact \u2014 already affecting communities in flood plains, drought regions, and coastal areas.' },
        },
      ],
    },
  ],
}

export default function AiForEcoAnxietyPage() {
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
            <span style={{ color: '#c9a84c' }}>AI for Eco-Anxiety</span>
          </nav>

          <header style={{ padding: '48px 0 40px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(106,170,100,0.15)', border: '1px solid rgba(106,170,100,0.4)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', color: '#6aaa64', marginBottom: '24px' }}>
              Wellbeing
            </div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: '700', lineHeight: '1.2', margin: '0 0 24px', color: '#f5f0e8' }}>
              AI for Eco-Anxiety: Processing Climate Grief Without Paralysis
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.7', margin: '0 0 24px' }}>
              Climate anxiety is real, clinically recognised, and affects the majority of UK adults. MEOK provides a space to hold both the grief and the agency &mdash; processing what you feel without amplifying despair, supporting the psychological balance needed for sustained action.
            </p>
            <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.45)', display: 'flex', gap: '16px' }}>
              <span>April 1, 2026</span><span>&bull;</span><span>7 min read</span><span>&bull;</span><span>MEOK AI LABS</span>
            </div>
          </header>

          <article style={{ lineHeight: '1.8', fontSize: '17px' }}>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '40px 0 16px' }}>
              What is eco-anxiety?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Eco-anxiety &mdash; also called climate anxiety &mdash; is chronic fear, worry, and dread related to environmental damage and climate change. The American Psychological Association formally recognised it in 2017. The British Psychological Society followed in 2021. It is not a clinical disorder; it is a legitimate psychological response to a real threat.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              68% of UK adults report climate anxiety. Among 16-24 year olds, the figure is 76%. 40% of young adults say it affects their daily life. This is not a niche concern &mdash; it is a widespread psychological reality that mental health services are only beginning to address.
            </p>

            <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', padding: '28px', margin: '32px 0' }}>
              <div style={{ fontSize: '13px', color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>The scale of climate anxiety</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '20px' }}>
                {[
                  { n: '68%', label: 'of UK adults report climate anxiety' },
                  { n: '76%', label: 'of 16-24 year olds affected' },
                  { n: '40%', label: 'say it affects their daily life (Yale 2025)' },
                  { n: '10K+', label: 'species lost to extinction in the last 100 years' },
                ].map(s => (
                  <div key={s.n}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#c9a84c', marginBottom: '6px' }}>{s.n}</div>
                    <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.65)', lineHeight: '1.5' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Can AI help with climate anxiety?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK provides a space to process climate grief and anxiety honestly. The key word is honestly &mdash; MEOK doesn&apos;t offer toxic positivity (&ldquo;it&apos;ll be fine!&rdquo;) or dismissal (&ldquo;you&apos;re catastrophising&rdquo;). It holds the real emotional weight of what you feel about the climate while supporting processing that leads toward agency rather than paralysis.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The Trickster archetype is particularly useful for eco-anxiety: reframing despair into possibility, finding the choices within limits, breaking the spiral of helplessness. The Scholar archetype supports deeper philosophical exploration of meaning-making within crisis.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              What is solastalgia and how does MEOK help?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Solastalgia is distress caused by environmental change to one&apos;s home landscape &mdash; coined by philosopher Glenn Albrecht. It describes the grief of watching a familiar place change: the flood that took your childhood home, the drought that killed the forest you grew up in, the coastline that&apos;s no longer there.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK holds solastalgia as legitimate grief &mdash; because it is. The Maternal Covenant ensures MEOK never minimises this loss or rushes toward resolution before you&apos;re ready.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Is it healthy to use AI to talk about climate change feelings?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Yes. Processing climate grief is psychologically important. Suppressed climate grief leads to numbness, avoidance, and ultimately less capacity for sustained action. MEOK&apos;s sovereign memory tracks your climate journey over time &mdash; celebrating personal commitments, holding setbacks, building longitudinal perspective on your own engagement with this enormous challenge.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The goal MEOK supports is not positive thinking &mdash; it is honest thinking that maintains psychological stability and capacity for action. Both/and: holding the grief AND sustaining the agency.
            </p>

          </article>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '16px', padding: '48px', margin: '64px 0', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#f5f0e8', margin: '0 0 16px' }}>
              Hold the grief. Keep the agency.
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '17px', margin: '0 0 32px', lineHeight: '1.7' }}>
              MEOK provides honest companionship through climate grief &mdash; without toxic positivity, without dismissal, with persistent care.
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
