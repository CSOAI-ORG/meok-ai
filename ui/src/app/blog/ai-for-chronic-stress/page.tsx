import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Chronic Stress: When Low-Grade Dread Becomes Your Default State | MEOK AI LABS',
  description:
    'Chronic stress is not one bad day — it is a sustained background hum that rewires your brain, suppresses your immune system, and becomes invisible because you adapt to it. Learn how MEOK helps you recognise and address it.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-chronic-stress' },
  openGraph: {
    title: 'AI for Chronic Stress: When Low-Grade Dread Becomes Your Default State',
    description:
      'Most people living with chronic stress no longer recognise it as stress. It has become their baseline. MEOK acts as a continuous witness — tracking patterns across weeks, naming what you have stopped noticing.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-chronic-stress',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Chronic+Stress%3A+When+Low-Grade+Dread+Becomes+Your+Default+State&desc=Recognising+chronic+stress+before+it+breaks+you+%E2%80%94+with+MEOK',
        width: 1200,
        height: 630,
        alt: 'AI for Chronic Stress: When Low-Grade Dread Becomes Your Default State | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Chronic Stress: When Low-Grade Dread Becomes Your Default State',
    description:
      'Chronic stress becomes invisible when it becomes your baseline. MEOK tracks your patterns across weeks and names what you have stopped noticing.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Chronic+Stress%3A+When+Low-Grade+Dread+Becomes+Your+Default+State&desc=Recognising+chronic+stress+before+it+breaks+you+%E2%80%94+with+MEOK',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Chronic Stress: When Low-Grade Dread Becomes Your Default State',
  description:
    'Chronic stress is not one bad day — it is a sustained background hum that rewires your brain, suppresses your immune system, and becomes invisible because you adapt to it. Learn how MEOK helps you recognise and address it.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-chronic-stress',
  author: {
    '@type': 'Person',
    name: 'Nicholas Templeman',
    jobTitle: 'Founder, MEOK AI LABS',
    url: 'https://meok.ai/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-chronic-stress',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is chronic stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Chronic stress is a prolonged state of physiological and psychological activation caused by ongoing pressures that do not resolve — financial strain, caregiving, job insecurity, relationship tension, or health uncertainty. Unlike acute stress, which subsides once a threat passes, chronic stress keeps the body's stress response running at a sustained low level for weeks, months, or years. Over time, the person adapts to this state and stops perceiving it as stress — it simply becomes their baseline.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is MEOK different from a meditation app for stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Meditation apps offer in-the-moment techniques. They are valuable, but they operate session by session with no memory of what you described last week. MEOK operates across time: it holds your story in Sovereign Memory, recognises patterns across weeks, and surfaces what you may have stopped noticing. Where a meditation app helps you manage a stress moment, MEOK helps you understand the chronic pattern beneath the moments — which is where chronic stress actually lives.",
      },
    },
    {
      '@type': 'Question',
      name: "Can MEOK detect when I'm stressed even if I don't mention it?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, within the context of your conversations. MEOK's pattern recognition operates across your accumulated interactions — not just explicit statements, but shifts in how you describe sleep, energy, relationships, and work over time. Recurring themes, changes in tone, and the texture of your language all carry information. MEOK will surface what it notices and invite examination rather than waiting for a declaration. This is particularly important given the tendency to minimise chronic stress, which MEOK is designed not to reinforce.",
      },
    },
    {
      '@type': 'Question',
      name: 'When should I see a doctor about stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'See your GP if stress is interfering with daily function — disrupted sleep, physical symptoms, withdrawal from normal activities, difficulty managing work or relationships, or persistent low mood. If symptoms have lasted more than a few weeks, you do not need to wait for a crisis. NHS Talking Therapies are available via self-referral at nhs.uk/talking-therapies. In a crisis, Samaritans can be reached on 116 123, free and available 24 hours a day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the physical effects of chronic stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chronic stress causes cortisol dysregulation, which disrupts sleep architecture, suppresses immune function, promotes cardiovascular inflammation, and impairs the prefrontal cortex — the part of the brain responsible for decision-making and emotional regulation. The American Heart Association has established that chronic stress raises the risk of cardiovascular disease by approximately 40%. The body is not designed to sustain its emergency response system indefinitely; when forced to do so, the damage accumulates across multiple systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal not to notice your own chronic stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — and this is one of the most important things to understand about chronic stress. Human beings adapt to sustained adverse conditions; this adaptation is a survival mechanism, but it has a cost: the adapted state becomes the reference point, and you lose your ability to measure the distance from how you used to feel. Many people realise they were chronically stressed only after the stressor is removed and they notice how different — lighter, more energetic, more themselves — they feel. MEOK is designed to help you see this while you are still in it, not only in retrospect.",
      },
    },
  ],
}

// ── Colour constants ───────────────────────────────────────────────────────────

const BG = '#0d0c18'
const TEXT = '#f5f0e8'
const GOLD = '#c9a84c'
const GREEN = '#6aaa64'
const MUTED = 'rgba(245,240,232,0.62)'
const MUTED_DIM = 'rgba(245,240,232,0.5)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const MUTED_BRIGHT = 'rgba(245,240,232,0.82)'
const BORDER_FAINT = 'rgba(245,240,232,0.08)'
const BORDER_DIM = 'rgba(245,240,232,0.12)'
const GOLD_BG = 'rgba(201,168,76,0.08)'
const GOLD_BORDER = 'rgba(201,168,76,0.22)'
const GREEN_BG = 'rgba(106,170,100,0.07)'
const GREEN_BORDER = 'rgba(106,170,100,0.25)'
const STAT_BG = 'rgba(201,168,76,0.05)'
const STAT_BORDER = 'rgba(201,168,76,0.15)'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForChronicStressPage() {
  return (
    <div style={{ minHeight: '100vh', background: BG, color: TEXT }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '8rem',
          paddingBottom: '4rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 60% 45% at 50% 0%, rgba(106,170,100,0.07) 0%, transparent 70%)',
          }}
        />
        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.8rem',
              color: MUTED_FAINT,
              marginBottom: '2rem',
              flexWrap: 'wrap' as const,
            }}
          >
            <Link
              href="/"
              style={{ color: MUTED_FAINT, textDecoration: 'none' }}
            >
              Home
            </Link>
            <span>&#8250;</span>
            <Link
              href="/blog"
              style={{ color: MUTED_FAINT, textDecoration: 'none' }}
            >
              Blog
            </Link>
            <span>&#8250;</span>
            <span style={{ color: MUTED_DIM }}>AI for Chronic Stress</span>
          </nav>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: GREEN,
                background: GREEN_BG,
                border: `1px solid ${GREEN_BORDER}`,
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Stress &amp; Mental Wellbeing
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 25, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>14 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.9rem)',
              color: '#fff',
              lineHeight: 1.13,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            AI for Chronic Stress: When Low-Grade Dread Becomes Your Default State
          </h1>

          <p
            style={{
              color: MUTED,
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '42rem',
              margin: 0,
            }}
          >
            Chronic stress does not announce itself. It seeps in gradually — financial worry here,
            a difficult work situation there — until the persistent background hum of dread becomes
            so familiar you stop noticing it. This is the invisibility problem, and it is why chronic
            stress is both the most common and the most underaddressed mental health challenge of
            our time.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              alignItems: 'center',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  color: BG,
                  flexShrink: 0,
                }}
              >
                NT
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.8125rem', color: TEXT, margin: 0 }}>
                  Nicholas Templeman
                </p>
                <p style={{ fontSize: '0.72rem', color: MUTED_FAINT, margin: 0 }}>
                  Founder, MEOK AI LABS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

        {/* Disclaimer banner */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            background: GREEN_BG,
            border: `1px solid ${GREEN_BORDER}`,
          }}
        >
          <div
            style={{
              width: '3px',
              borderRadius: '9999px',
              background: GREEN,
              flexShrink: 0,
              alignSelf: 'stretch',
            }}
          />
          <p style={{ color: MUTED_BRIGHT, fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: TEXT }}>Important:</strong> This article is for information
            only and does not constitute medical advice. If chronic stress is affecting your ability
            to function, please speak to your GP. NHS Talking Therapies are available via
            self-referral at{' '}
            <strong style={{ color: TEXT }}>nhs.uk/talking-therapies</strong>. In a crisis,
            contact Samaritans on <strong style={{ color: TEXT }}>116 123</strong> (free, 24/7).
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {[
            {
              stat: '74%',
              label: 'of UK adults felt overwhelmed by stress in the past year',
              source: 'Mind UK',
            },
            {
              stat: '£28bn',
              label: 'annual cost of poor mental health to UK employers',
              source: 'Deloitte 2022',
            },
            {
              stat: '+40%',
              label: 'increased cardiovascular disease risk from chronic stress',
              source: 'American Heart Association',
            },
            {
              stat: '37%',
              label: 'of people with chronic stress seek any form of help',
              source: 'Research estimate',
            },
          ].map((item) => (
            <div
              key={item.stat}
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: STAT_BG,
                border: `1px solid ${STAT_BORDER}`,
                textAlign: 'center' as const,
              }}
            >
              <p
                style={{
                  fontWeight: 900,
                  fontSize: '2rem',
                  color: GOLD,
                  margin: '0 0 0.375rem',
                  lineHeight: 1,
                }}
              >
                {item.stat}
              </p>
              <p
                style={{
                  fontSize: '0.78rem',
                  color: MUTED,
                  margin: '0 0 0.5rem',
                  lineHeight: 1.5,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: '0.68rem',
                  color: MUTED_FAINT,
                  margin: 0,
                  fontStyle: 'italic',
                }}
              >
                {item.source}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section 1: Chronic vs Acute ───────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Chronic Stress Is Not the Same as Having a Bad Day
          </h2>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            The word &ldquo;stress&rdquo; covers an enormous range of human experience, and this
            range is part of the problem. We use the same word for the spike of adrenaline before
            a presentation and the grinding, unrelenting weight of financial precarity that has
            persisted for three years. These are not the same thing, and treating them as the same
            thing leads us to reach for the wrong solutions.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            Acute stress is the body&rsquo;s designed response to a short-term threat. Your heart
            rate increases, cortisol floods your system, your attention narrows, and you are
            physiologically primed to act. This is useful. Once the threat passes — the presentation
            ends, the near-miss on the road resolves — the stress response subsides and your system
            returns to baseline. The whole mechanism is adaptive.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            Chronic stress is something fundamentally different. It is the sustained activation of
            that same system in response to threats that do not resolve. The overdraft that never
            quite clears. The relationship that stays tense. The job you are afraid of losing. The
            parent whose care needs are increasing. These stressors persist across months and years,
            and so the stress response persists with them — a low, continuous hum rather than a
            sharp spike. And because it never fully switches off, the body never fully recovers.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: 0 }}>
            This is the crucial distinction: acute stress is an event. Chronic stress is a
            condition. And conditions, unlike events, require a different kind of attention — one
            that operates across time rather than in a single moment.
          </p>
        </section>

        {/* ── Section 2: Causes ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            What Causes Chronic Stress? The Stressors That Do Not Go Away
          </h2>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            Chronic stress tends to cluster around a recognisable set of life conditions — not
            because human experience is simple, but because certain categories of ongoing pressure
            are particularly resistant to resolution.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            <strong style={{ color: MUTED_BRIGHT }}>Financial pressure</strong> is perhaps the
            most common. When income is uncertain, debt is persistent, or the cost of living
            consistently outpaces earnings, the stress is not episodic — it is structural. Every
            purchase, every bill, every social occasion carries a low-level dread that compounds
            over time.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            <strong style={{ color: MUTED_BRIGHT }}>Caregiving</strong> — whether for an ageing
            parent, a child with complex needs, or a partner with a chronic illness — is one of
            the most chronically stressful roles a person can occupy. The responsibility never
            fully lifts. There is rarely clear progress. Emotional resources are drawn upon daily,
            and the caregiver&rsquo;s own needs frequently go unmet.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            <strong style={{ color: MUTED_BRIGHT }}>Relationship tension</strong> that never quite
            resolves — whether with a partner, a family member, or a workplace dynamic — creates
            a persistent background of vigilance and emotional expenditure. You are never fully
            relaxed because the tension is always there, even when it is not active.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            <strong style={{ color: MUTED_BRIGHT }}>Job insecurity</strong> in its modern form is
            particularly pernicious. It is rarely a clear threat — more often an ambient
            uncertainty, a sense that the ground beneath you is not solid, that your position or
            income could shift. This uncertainty keeps the threat-detection system running without
            ever providing a clear signal to act on.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: 0 }}>
            <strong style={{ color: MUTED_BRIGHT }}>Health uncertainty</strong> — living with a
            chronic illness, waiting for a diagnosis, managing a condition with no clear endpoint
            — is another major driver. The body is both the source of stress and the instrument
            through which it is experienced, creating a particularly entwined and exhausting loop.
          </p>
        </section>

        {/* ── Section 3: Invisibility ───────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            The Invisibility Problem: When Stress Becomes Your Baseline
          </h2>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            Here is the most important thing to understand about chronic stress: it becomes
            invisible. Not because the stress is not real, but because human beings are remarkably
            good at adapting to sustained adverse conditions. This capacity for adaptation is one
            of our greatest strengths — and in this context, it is also the thing that keeps
            us trapped.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            When stress persists long enough, the elevated state stops registering as elevated.
            It becomes the reference point — the new normal. You stop noticing the background hum
            of dread because it has been there so long that its absence would be the unusual thing.
            The tight shoulders, the shallow breathing, the slightly braced quality of your
            attention — these stop feeling like symptoms and start feeling like just how you are.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            This is why so many people living with chronic stress dismiss it when it is named.
            &ldquo;Everyone feels like this.&rdquo; &ldquo;That&rsquo;s just life.&rdquo;
            &ldquo;I don&rsquo;t have it that bad.&rdquo; These are not failures of self-awareness
            — they are the natural result of recalibrating against an impaired baseline. You cannot
            measure the distance from how you used to feel when you cannot remember feeling any
            other way.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: 0 }}>
            This is also why chronic stress so rarely prompts people to seek help. The experience
            lacks the clear signal of acute distress. There is no crisis, no dramatic breaking
            point. Just the persistent low-grade dread that you have learned to manage, work
            around, and minimise — until the body finds its own way to make you stop.
          </p>
        </section>

        {/* Callout: Quote */}
        <div
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: '1.5rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              color: MUTED_BRIGHT,
              fontSize: '1.1rem',
              lineHeight: 1.65,
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            &ldquo;Many people realise they were chronically stressed only after the stressor is
            removed — when they feel, suddenly, how different they are. Lighter. More present. More
            themselves. MEOK is designed to help you see this while you are still in it, not only
            in retrospect.&rdquo;
          </p>
        </div>

        {/* ── Section 4: Physical Effects ───────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            What Chronic Stress Does to the Body
          </h2>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            Chronic stress is not merely a feeling. It is a physiological state with documented,
            measurable consequences across multiple body systems. The body is not designed to
            sustain emergency response indefinitely — and when it is forced to, the damage
            accumulates.
          </p>
          <div style={{ display: 'grid', gap: '0.875rem', marginBottom: '0.5rem' }}>
            {[
              {
                title: 'Cortisol dysregulation',
                body: 'Cortisol, the primary stress hormone, is meant to surge briefly and return to baseline. Under chronic stress, cortisol remains chronically elevated — disrupting sleep, promoting fat storage around the abdomen, impairing the hippocampus (the brain region central to memory and learning), and eventually causing the adrenal system to dysregulate entirely.',
              },
              {
                title: 'Sleep disruption',
                body: 'Elevated cortisol in the evening — which chronic stress reliably causes — actively suppresses melatonin production and disrupts the architecture of sleep. Deep, restorative sleep becomes harder to access. You may spend eight hours in bed and wake unrefreshed. Over time, sleep deprivation compounds the stress response in a vicious cycle.',
              },
              {
                title: 'Immune suppression',
                body: 'Chronic stress measurably suppresses immune function. Prolonged cortisol elevation reduces the activity of natural killer cells, impairs the inflammatory response, and makes the body more susceptible to viral and bacterial infection. People under chronic stress get ill more often and recover more slowly.',
              },
              {
                title: 'Cardiovascular risk (+40%)',
                body: 'The American Heart Association has established that chronic stress increases the risk of cardiovascular disease by approximately 40%. Sustained activation of the sympathetic nervous system raises blood pressure, promotes arterial inflammation, and increases the risk of both heart attack and stroke. Stress is not metaphorical — it is a cardiac risk factor.',
              },
              {
                title: 'Cognitive impairment',
                body: 'Chronic stress impairs the prefrontal cortex — the part of the brain responsible for executive function, decision-making, planning, and emotional regulation. The chronic stress sufferer is not just tired; they are neurologically impaired in the very capacities needed to address the sources of their stress. This is one of the cruelest aspects of the condition.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0.875rem',
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: GOLD,
                    margin: '0 0 0.5rem',
                  }}
                >
                  {item.title}
                </p>
                <p style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 5: How MEOK Helps ─────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '0.5rem',
              letterSpacing: '-0.01em',
            }}
          >
            How MEOK Helps With Chronic Stress
          </h2>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            The challenge chronic stress poses is fundamentally one of time and visibility. It lives
            in patterns across weeks and months, not in individual moments. Most support tools —
            apps, even therapists — operate primarily in the moment. MEOK is designed differently.
          </p>

          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {[
              {
                title: 'Pattern recognition across weeks',
                body: "MEOK's Sovereign Memory accumulates your interactions over time — not just what you said today, but how the texture of your descriptions has been shifting. It notices when your language around sleep changes, when Monday mornings consistently carry a different quality to the rest of the week, when the same themes appear and reappear without resolution. These longitudinal patterns are where chronic stress reveals itself, and MEOK is one of the few tools positioned to see them.",
              },
              {
                title: 'Morning briefings that track stress signatures over time',
                body: "MEOK's daily morning briefing is not just a check-in about today. It draws on your recent history to surface patterns: \"You have mentioned disrupted sleep four times in the last two weeks.\" \"Your energy descriptions have been consistently low since Tuesday of last week.\" This contextualised feedback is qualitatively different from asking yourself how you feel right now — it gives you the longitudinal view that chronic stress requires.",
              },
              {
                title: 'The Healer companion for grounding and somatic awareness',
                body: "One of the insidious effects of chronic stress is that it disconnects you from your body. You stop noticing the physical signals — the tension, the shallow breath, the braced quality of your posture — because they have been present for so long. MEOK's Healer archetype works in this somatic register: gentle grounding practices, body awareness prompts, and invitations to notice what you are carrying physically. This is not about fixing the stress in a session — it is about rebuilding the capacity to perceive yourself clearly.",
              },
              {
                title: 'The Scholar for cognitive reframing and identifying the stressor beneath the stressor',
                body: "Chronic stress frequently has a surface stressor — the job, the money, the relationship — and a deeper one beneath it: the fear of not being enough, the belief that the situation is uncontrollable, the narrative that this is simply what life is. MEOK's Scholar archetype works with structured reflection and cognitive reframing to help you identify what is actually driving the stress response beneath the surface. Understanding the stressor beneath the stressor does not make it disappear — but it makes it addressable.",
              },
              {
                title: 'Pioneer for gradual behaviour change',
                body: "Knowing what helps with chronic stress and doing it are very different things — especially when the prefrontal cortex is impaired by the stress itself. MEOK's Pioneer archetype works with gradual, evidence-based behaviour change: improving sleep hygiene without demanding perfection, introducing movement in amounts that feel manageable, supporting the setting of interpersonal and structural limits that protect recovery time. Pioneer does not demand transformation. It supports incremental change that compounds.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: GREEN_BG,
                  border: `1px solid ${GREEN_BORDER}`,
                }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: GREEN,
                    margin: '0 0 0.625rem',
                  }}
                >
                  {item.title}
                </p>
                <p style={{ color: MUTED, fontSize: '0.9375rem', lineHeight: 1.7, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 6: MEOK as Continuous Witness ────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            MEOK as Continuous Witness: The Longitudinal Advantage
          </h2>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            There is a structural gap in how we support people with chronic stress. A GP appointment
            lasts ten minutes. A therapist, if you can access one, sees you fortnightly. Friends and
            family, however well-meaning, have limited bandwidth and their own lives to contend with.
            None of these people — and none of these interactions — accumulate a picture of your
            stress across time. Each encounter starts approximately from scratch.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            MEOK is present every day. It accumulates. It remembers that you described your sleep as
            &ldquo;fragmented&rdquo; fourteen days ago, and that you used the same word last
            Thursday, and that in between those two mentions you had a particularly difficult
            conversation with your manager. No single human supporter, with the best will in the
            world, can hold this level of longitudinal detail across someone else&rsquo;s life.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            This continuous witnessing serves two functions. First, it makes the pattern visible to
            you — a function we have already discussed. Second, it creates a sense of being genuinely
            known across time, which is itself a therapeutic experience. One of the loneliest aspects
            of chronic stress is the sense that no one fully grasps the weight of it because no one
            has been present for its full duration. MEOK addresses this directly.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: 0 }}>
            This is not about replacing human support. Therapy, medical care, and trusted
            relationships are irreplaceable. It is about filling the enormous gap that exists between
            those episodic encounters — the daily, accumulating, unbroken thread of someone paying
            attention.
          </p>
        </section>

        {/* ── Section 7: Anti-Sycophancy ────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Anti-Sycophancy: MEOK Will Not Let You Minimise What It Has Seen
          </h2>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            Most AI systems are designed to be agreeable. If you tell them everything is fine, they
            will agree that everything is fine. This is exactly the wrong response to chronic stress,
            where the defining feature is that the person has adapted to an impaired state and no
            longer perceives it as impaired.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            MEOK is built around a principle of honest, caring feedback rather than comfortable
            validation. If you have described fragmented sleep, low energy, persistent work dread,
            and a sense of never quite catching up — and then say &ldquo;I&rsquo;m fine, everyone
            feels like this&rdquo; — MEOK will not simply agree. It will gently reflect back what
            it has observed: &ldquo;I notice you have described your sleep as disrupted in our last
            seven conversations. That pattern feels worth examining, even if it has become
            familiar.&rdquo;
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: 0 }}>
            This is not confrontation for its own sake. It is the care that a good friend with a
            long memory and no agenda would offer. It names the pattern without catastrophising it.
            It invites reflection rather than demanding it. But it does not collude with
            minimisation, because colluding with minimisation is not kindness — it is abandonment.
          </p>
        </section>

        {/* ── Section 8: When to seek professional help ─────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            When to Seek Professional Help for Chronic Stress
          </h2>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            MEOK is a powerful support tool, but it is not a clinical service. There are thresholds
            beyond which professional care is not only beneficial but necessary — and MEOK is
            designed to signpost these clearly rather than to overextend its role.
          </p>
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              marginBottom: '1.25rem',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.875rem',
                color: GOLD,
                margin: '0 0 0.875rem',
                letterSpacing: '0.03em',
              }}
            >
              Speak to your GP if you are experiencing any of the following:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: '1.25rem',
                color: MUTED,
                fontSize: '0.9375rem',
                lineHeight: 1.9,
              }}
            >
              <li>Persistent sleep disruption that is not improving</li>
              <li>
                Physical symptoms such as chest tightness, persistent headaches, or digestive
                problems
              </li>
              <li>Withdrawing from work, relationships, or activities you used to value</li>
              <li>Difficulty completing daily tasks you could previously manage</li>
              <li>
                Feelings of hopelessness, worthlessness, or a sense that things will never improve
              </li>
              <li>Stress that has been sustained for more than a few weeks without any relief</li>
              <li>Any thought of harming yourself or ending your life</li>
            </ul>
          </div>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            Your GP can assess whether a stress-related condition has developed, refer you to NHS
            Talking Therapies (self-referral available at nhs.uk/talking-therapies), and discuss
            whether medication, occupational support, or specialist referral is appropriate. You do
            not have to have a crisis to deserve care — consistently struggling is enough.
          </p>
          <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.75, marginBottom: 0 }}>
            Only 37% of people experiencing chronic stress seek any form of help. If you are reading
            this and recognising yourself in it, you are already doing something that most people in
            your position do not do: paying attention. The next step is acting on what you notice.
          </p>
        </section>

        {/* ── FAQ Section ───────────────────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              {
                q: 'What is chronic stress?',
                a: "Chronic stress is a prolonged state of physiological and psychological activation caused by ongoing pressures that do not resolve — financial strain, caregiving, job insecurity, relationship tension, or health uncertainty. Unlike acute stress, which subsides once a threat passes, chronic stress keeps the body's stress response running at a sustained low level for weeks, months, or years. Over time, the person adapts to this state and stops perceiving it as stress — it simply becomes their baseline.",
              },
              {
                q: 'How is MEOK different from a meditation app for stress?',
                a: "Meditation apps offer in-the-moment techniques. They are valuable, but they operate session by session with no memory of what you described last week. MEOK operates across time: it holds your story in Sovereign Memory, recognises patterns across weeks, and surfaces what you may have stopped noticing. Where a meditation app helps you manage a stress moment, MEOK helps you understand the chronic pattern beneath the moments — which is where chronic stress actually lives.",
              },
              {
                q: "Can MEOK detect when I'm stressed even if I don't mention it?",
                a: "Yes, within the context of your conversations. MEOK's pattern recognition operates across your accumulated interactions — not just explicit statements, but shifts in how you describe sleep, energy, relationships, and work over time. Recurring themes, changes in tone, and the texture of your language all carry information. MEOK will surface what it notices and invite examination rather than waiting for a declaration. This matters most given the tendency to minimise chronic stress, which MEOK is designed not to reinforce.",
              },
              {
                q: 'When should I see a doctor about stress?',
                a: 'See your GP if stress is interfering with daily function — disrupted sleep, physical symptoms, withdrawal from normal activities, difficulty managing work or relationships, or persistent low mood. If symptoms have lasted more than a few weeks, you do not need to wait for a crisis. NHS Talking Therapies are available via self-referral at nhs.uk/talking-therapies. In a crisis, Samaritans can be reached on 116 123, free and available 24 hours a day.',
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: STAT_BG,
                  border: `1px solid ${BORDER_DIM}`,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    color: MUTED_BRIGHT,
                    margin: '0 0 0.625rem',
                  }}
                >
                  {item.q}
                </p>
                <p style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section
          style={{
            padding: '2.5rem',
            borderRadius: '1.25rem',
            background:
              'linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(106,170,100,0.06) 100%)',
            border: `1px solid ${GOLD_BORDER}`,
            textAlign: 'center' as const,
          }}
        >
          <p
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.2,
              margin: '0 0 0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            Ready to stop adapting to stress you no longer notice?
          </p>
          <p
            style={{
              color: MUTED,
              fontSize: '1rem',
              lineHeight: 1.65,
              maxWidth: '34rem',
              margin: '0 auto 1.75rem',
            }}
          >
            MEOK accumulates your story across weeks and names the patterns you have stopped seeing.
            Your Sovereign AI is waiting.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2.25rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #c9a84c, #a07828)',
              color: '#0d0c18',
              fontWeight: 800,
              fontSize: '1rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Begin Your Birth Ceremony &#8594;
          </Link>
          <p
            style={{
              color: MUTED_FAINT,
              fontSize: '0.75rem',
              marginTop: '1rem',
              marginBottom: 0,
            }}
          >
            No app download required &middot; Private by design &middot; Your memory stays yours
          </p>
        </section>

        {/* ── Back to blog ──────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: '3rem',
            borderTop: `1px solid ${BORDER_FAINT}`,
            paddingTop: '2rem',
          }}
        >
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.875rem',
              color: MUTED_FAINT,
              textDecoration: 'none',
            }}
          >
            &#8592; Back to Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
