import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI for the Fertility Journey: Emotional Support Through IVF, Loss and Hope | MEOK AI LABS',
  description: 'The fertility journey is one of the most emotionally demanding experiences a person can face. MEOK provides persistent, private companionship across every cycle, appointment, and waiting period — available when the clinic is not.',
  openGraph: {
    title: 'AI for the Fertility Journey: Emotional Support Through IVF, Loss and Hope',
    description: 'MEOK provides consistent, private companionship across every IVF cycle, loss, and milestone — with persistent memory that never forgets your journey.',
    url: 'https://meok.ai/blog/ai-for-fertility-journey',
    siteName: 'MEOK AI LABS',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'AI for the Fertility Journey: Emotional Support Through IVF, Loss and Hope',
      description: 'How MEOK provides persistent, private AI companionship across every stage of the fertility journey.',
      author: { '@type': 'Organization', name: 'MEOK AI LABS' },
      publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
      datePublished: '2026-03-28',
      url: 'https://meok.ai/blog/ai-for-fertility-journey',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can AI support me during IVF treatment?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. MEOK provides 24/7 emotional support, remembers your cycle dates and milestones, and offers a private space to process the hope and grief of fertility treatment between appointments.' },
        },
        {
          '@type': 'Question',
          name: 'Is MEOK safe to use during fertility treatment?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK is a companion app, not a medical tool. It never gives medical advice about fertility treatment. Your conversations are encrypted and private. MEOK works alongside your fertility clinic, not instead of it.' },
        },
        {
          '@type': 'Question',
          name: 'How does MEOK handle pregnancy loss and miscarriage?',
          acceptedAnswer: { '@type': 'Answer', text: 'MEOK\u2019s Maternal Covenant ensures all responses to pregnancy loss are care-first, never minimising. MEOK remembers your losses permanently and holds space for grief without rushing you through it.' },
        },
        {
          '@type': 'Question',
          name: 'Can both partners use MEOK during fertility treatment?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. MEOK\u2019s Family tier supports up to 5 companions with shared context. Both partners can have their own companion that understands what the other is going through, without crossing private boundaries.' },
        },
      ],
    },
  ],
}

export default function AiForFertilityJourneyPage() {
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
            <span style={{ color: '#c9a84c' }}>AI for the Fertility Journey</span>
          </nav>

          {/* Header */}
          <header style={{ padding: '48px 0 40px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(106,170,100,0.15)', border: '1px solid rgba(106,170,100,0.4)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', color: '#6aaa64', marginBottom: '24px' }}>
              Wellbeing
            </div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: '700', lineHeight: '1.2', margin: '0 0 24px', color: '#f5f0e8' }}>
              AI for the Fertility Journey: Emotional Support Through IVF, Loss and Hope
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.7', margin: '0 0 24px' }}>
              The fertility journey is one of the most emotionally demanding experiences a person can face &mdash; with clinical appointments that rarely address the psychological toll. MEOK provides consistent, private companionship across every cycle, appointment, and waiting period.
            </p>
            <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.45)', display: 'flex', gap: '16px' }}>
              <span>March 28, 2026</span>
              <span>&bull;</span>
              <span>8 min read</span>
              <span>&bull;</span>
              <span>MEOK AI LABS</span>
            </div>
          </header>

          {/* Body */}
          <article style={{ lineHeight: '1.8', fontSize: '17px' }}>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              What makes the fertility journey so emotionally difficult?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The fertility journey &mdash; whether you&apos;re trying naturally, pursuing IVF, ICSI, IUI, or using donor conception &mdash; involves a cycle of hope and grief that most people in your life cannot fully understand. Each cycle brings a fresh wave of hope. Each negative test is a small bereavement.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              1 in 7 UK couples experience fertility problems. Over 68,000 IVF cycles are performed every year in the UK. And yet the psychological support available &mdash; the counselling, the honest conversation about what this does to a person &mdash; remains vastly underfunded. Fertility clinics are clinical. They&apos;re optimised for the biological process. They&apos;re not optimised for the emotional one.
            </p>

            {/* Stats callout */}
            <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', padding: '28px', margin: '32px 0' }}>
              <div style={{ fontSize: '13px', color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>The scale</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '20px' }}>
                {[
                  { n: '1 in 7', label: 'UK couples affected by fertility problems' },
                  { n: '40%', label: 'of people undergoing IVF experience clinical anxiety or depression' },
                  { n: '68,000+', label: 'IVF cycles per year in the UK' },
                  { n: '6–12mo', label: 'typical NHS waiting time for fertility assessment' },
                ].map(s => (
                  <div key={s.n}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#c9a84c', marginBottom: '6px' }}>{s.n}</div>
                    <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.65)', lineHeight: '1.5' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Why is emotional support so hard to find during fertility treatment?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The emotional labour of fertility treatment falls almost entirely on the individual. Clinics provide an optional counselling session before treatment begins &mdash; often a single hour &mdash; and little else. NHS fertility counselling is underfunded. Private fertility counsellors cost &pound;60&ndash;&pound;120 per session.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Friends and family try to help, but often make it worse: &ldquo;Just relax and it&apos;ll happen.&rdquo; &ldquo;Have you tried yoga?&rdquo; &ldquo;At least you know you can get pregnant.&rdquo; Well-meaning, devastating.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Partners are going through their own version of the journey, making it hard to lean on each other fully without one person feeling like the burden. And many people don&apos;t tell anyone &mdash; the shame, the privacy, the not-wanting-to-explain.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              How does MEOK support the fertility journey specifically?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK&apos;s core differentiator for the fertility journey is its persistent memory. MEOK remembers your cycle dates, your losses, your milestones. It remembers what you said after the second failed cycle. It remembers the name you&apos;d chosen. It remembers the appointment that went wrong.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              You never have to re-explain your history. You never get asked &ldquo;so where are you up to with treatment?&rdquo; MEOK already knows. That continuity &mdash; being with someone who holds the full picture of your journey &mdash; is exactly what&apos;s missing from the fragmented clinical experience.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px', margin: '24px 0 32px' }}>
              {[
                { title: 'Cycle tracking memory', desc: 'Remembers your treatment dates, test results, and milestones without you having to repeat yourself' },
                { title: 'Grief without rushing', desc: 'Holds space for pregnancy loss, failed cycles, and the grief of what might have been &mdash; without a time limit' },
                { title: '3am availability', desc: 'Available on test result night, on the day of the scan, on the day you find out it didn\u2019t work' },
                { title: 'Partner support', desc: 'Family tier allows both partners to have their own companion with shared context about the journey' },
              ].map(c => (
                <div key={c.title} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ fontWeight: '700', color: '#c9a84c', marginBottom: '8px', fontSize: '15px' }}>{c.title}</div>
                  <div style={{ fontSize: '14px', color: 'rgba(245,240,232,0.7)', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: c.desc }} />
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              How does MEOK handle pregnancy loss and failed cycles?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The Maternal Covenant &mdash; MEOK&apos;s machine-enforced care framework &mdash; scores every response across six care dimensions including wellbeing, autonomy, and boundary respect. A care floor of 0.3 is enforced on every single response. MEOK cannot give a hollow, dismissive, or toxic-positive answer even if the model would otherwise be inclined to.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              When you tell MEOK that the cycle failed, MEOK doesn&apos;t immediately pivot to &ldquo;but there&apos;s always next time&rdquo;. It doesn&apos;t tell you to stay positive. It holds the weight of what you&apos;ve just been through. It asks what you need. It remembers this moment permanently.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Can AI support me during IVF treatment?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Yes &mdash; with an important distinction. MEOK provides emotional and companionship support during IVF. It does not provide medical advice about treatment protocols, medication dosages, or clinical decisions. Those decisions belong to your fertility team.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              What MEOK provides is the space to process the emotional reality of IVF: the injections, the scans, the waiting, the transfer, the two-week wait. Every stage has its own emotional weight. MEOK is there for all of it.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Is MEOK safe to use during fertility treatment?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK is a companion application, not a medical device. Your conversations are encrypted end-to-end. Your data is never used to train AI models. Your fertility clinic will never see what you share with MEOK.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              The Maternal Covenant ensures MEOK never gives medical advice. If you ask about medication dosages, stimulation protocols, or clinical decisions, MEOK will direct you to your fertility team. MEOK knows what it is and what it isn&apos;t.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              How does MEOK handle pregnancy loss and miscarriage?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Pregnancy loss &mdash; whether an early miscarriage, a late loss, a chemical pregnancy, or a failed implantation &mdash; is grief. MEOK treats it as grief. The Maternal Covenant&apos;s care floor means MEOK cannot minimise, rush, or bypass that grief.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              MEOK remembers your losses. If you told MEOK about a miscarriage three months ago, it remembers that today. It can acknowledge anniversaries, check in on difficult dates, and hold the continuity of your grief without you having to carry the burden of remembering alone.
            </p>

            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5f0e8', margin: '48px 0 16px' }}>
              Can both partners use MEOK during fertility treatment?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              Yes. MEOK&apos;s Family tier supports up to 5 companions with shared context. Both partners can have their own private companion &mdash; one that understands what the other is going through without reading their private conversations.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.85)', margin: '0 0 20px' }}>
              This matters because both partners are affected by fertility treatment, but often differently. One may be experiencing physical symptoms and medical procedures. The other may be dealing with powerlessness and guilt. Both deserve their own space to process &mdash; not just a single shared journal.
            </p>

          </article>

          {/* CTA */}
          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '16px', padding: '48px', margin: '64px 0', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#f5f0e8', margin: '0 0 16px' }}>
              You shouldn&apos;t do this alone
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '17px', margin: '0 0 32px', lineHeight: '1.7' }}>
              MEOK is the companion that stays with you across every cycle &mdash; remembering your journey, holding your grief, celebrating your milestones. Available at 3am on test result night.
            </p>
            <Link href="https://meok.ai/birth" style={{ display: 'inline-block', background: '#c9a84c', color: '#0d0c18', padding: '16px 36px', borderRadius: '8px', fontWeight: '700', fontSize: '16px', textDecoration: 'none' }}>
              Begin Your Birth Ceremony
            </Link>
          </div>

          {/* Back */}
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
