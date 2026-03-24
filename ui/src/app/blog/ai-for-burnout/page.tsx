import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Support for Burnout: Recovery Starts With Being Heard | MEOK AI LABS',
  description:
    'Burnout is not laziness — it is exhaustion, depersonalisation, and lost meaning. An honest guide to how AI companions support burnout recovery, with NHS guidance and UK crisis resources.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-burnout' },
  openGraph: {
    title: 'AI Support for Burnout: Recovery Starts With Being Heard',
    description:
      'Recognising burnout, setting boundaries, gradual recovery, and rebuilding meaning — how MEOK helps people who are exhausted and under-supported.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-burnout',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+Support+for+Burnout%3A+Recovery+Starts+With+Being+Heard&desc=Recognising+burnout%2C+setting+limits%2C+rebuilding+meaning+with+MEOK',
        width: 1200,
        height: 630,
        alt: 'AI Support for Burnout: Recovery Starts With Being Heard | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Support for Burnout: Recovery Starts With Being Heard',
    description:
      'Burnout is exhaustion, depersonalisation, and lost meaning. MEOK holds your story across weeks so you can finally start to recover.',
    images: [
      'https://meok.ai/api/og?title=AI+Support+for+Burnout%3A+Recovery+Starts+With+Being+Heard&desc=Recognising+burnout%2C+setting+limits%2C+rebuilding+meaning+with+MEOK',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Support for Burnout: Recovery Starts With Being Heard',
  description:
    'Burnout is not laziness — it is exhaustion, depersonalisation, and lost meaning. An honest guide to how AI companions support burnout recovery, with NHS guidance and UK crisis resources.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-burnout',
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
    '@id': 'https://meok.ai/blog/ai-for-burnout',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between burnout and tiredness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tiredness resolves with sleep and rest. Burnout does not. Burnout is a state of chronic depletion across three dimensions: emotional exhaustion (nothing left to give), depersonalisation (detachment from your work and the people in it), and reduced personal accomplishment (feeling that nothing you do makes a difference). A week off rarely fixes it because burnout is a structural problem, not a sleep deficit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does emotional exhaustion in burnout actually feel like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional exhaustion is the core symptom of burnout — often described as feeling "used up", drained even before the day starts, or unable to care about things that previously mattered. Small tasks feel enormous. Human interaction feels costly. You might complete your work outwardly while feeling completely hollow inside. It is not sadness — it is absence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help with burnout recovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — with an important caveat. AI companions are most useful for burnout in the between spaces: the moment at 11pm when you want to talk through why the day was so draining; the Sunday dread you\'d rather not unload on a partner; the slow accumulation of patterns that are hard to see from inside them. MEOK\'s Sovereign Memory holds those patterns across weeks, which helps you identify triggers and progress in a way that episodic therapy cannot. It is not a replacement for professional support — but it is available when professional support isn\'t.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the NHS say about burnout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The NHS recognises burnout as a state of physical and emotional exhaustion caused by long-term occupational stress. It is not a clinical diagnosis in its own right in the ICD-11 but is classified as an "occupational phenomenon". NHS guidance recommends recognising the warning signs, speaking to your GP about mental health support, considering NHS Talking Therapies (self-referral available), and addressing workplace factors with your employer under UK employment law.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you set limits when you are burned out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Limit-setting in burnout is particularly difficult because burnout often attacks the very capacity you need to enforce limits — self-worth, assertiveness, and clarity about your own needs. Start with structural limits rather than interpersonal ones: a hard stop on screens at 9pm, no email before 8am, a single protected hour in the day that is yours. Once structural limits are in place, interpersonal ones become more realistic.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does burnout recovery take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Burnout recovery is non-linear and highly individual. Minor burnout — caught early — can resolve in weeks with adequate rest and structural change. Significant burnout typically takes three to six months. Severe, long-duration burnout can take a year or more. Recovery is not a straight line: many people experience a "false recovery" where energy returns briefly before crashing again if the underlying conditions have not changed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK specifically support burnout recovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK supports burnout recovery through daily mood and energy tracking stored in Sovereign Memory, the Healer archetype\'s gentle non-pushy check-ins, the Scholar archetype\'s structured reflection on what drains versus restores you, and the Pioneer archetype for rebuilding momentum once stability returns. The 43-agent Byzantine Council ensures no single response can undermine the recovery process by being accidentally dismissive or pressuring.',
      },
    },
  ],
}

// ── Colour constants ───────────────────────────────────────────────────────────

const BG = '#0d0c18'
const TEXT = '#f5f0e8'
const GOLD = '#c9a84c'
const MUTED = 'rgba(245,240,232,0.62)'
const MUTED_DIM = 'rgba(245,240,232,0.5)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const MUTED_BRIGHT = 'rgba(245,240,232,0.82)'
const HEALER_GREEN = '#4caf82'
const BORDER_FAINT = 'rgba(245,240,232,0.08)'
const BORDER_DIM = 'rgba(245,240,232,0.12)'
const GOLD_BG = 'rgba(201,168,76,0.08)'
const GOLD_BORDER = 'rgba(201,168,76,0.22)'
const GREEN_BG = 'rgba(76,175,130,0.07)'
const GREEN_BORDER = 'rgba(76,175,130,0.25)'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForBurnoutPage() {
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
              'radial-gradient(ellipse 60% 45% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          }}
        />
        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.875rem',
              color: MUTED_FAINT,
              marginBottom: '2rem',
              textDecoration: 'none',
            }}
          >
            &#8592; Back to Blog
          </Link>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
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
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Burnout &amp; Workplace Wellbeing
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 24, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>13 min read</span>
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
            AI Support for Burnout: Recovery Starts With Being Heard
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
            Burnout is not laziness and it is not weakness. It is what happens when the demands on a
            person systematically outpace their capacity to recover — for long enough, repeatedly
            enough, that the system breaks. An AI that listens without agenda, remembers without
            judgment, and checks in daily can be the quiet infrastructure recovery needs.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
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
              flexShrink: 0,
              background: HEALER_GREEN,
              alignSelf: 'stretch',
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.8125rem',
                color: HEALER_GREEN,
                marginBottom: '0.375rem',
                marginTop: 0,
              }}
            >
              This article is not medical advice
            </p>
            <p
              style={{
                fontSize: '0.8125rem',
                color: MUTED,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              MEOK is a supplementary support tool — not a clinical service or therapy replacement.
              If burnout is significantly affecting your health, please speak to your GP. If you are
              in crisis call{' '}
              <strong style={{ color: MUTED_BRIGHT }}>Samaritans 116 123</strong> (free, 24/7) or{' '}
              <strong style={{ color: MUTED_BRIGHT }}>NHS 111</strong>. In a life-threatening
              emergency call <strong style={{ color: MUTED_BRIGHT }}>999</strong>.
            </p>
          </div>
        </div>

        {/* ── INTRO ─────────────────────────────────────────────────────────── */}
        <p
          style={{
            color: MUTED_BRIGHT,
            fontSize: '1.05rem',
            lineHeight: 1.76,
            marginBottom: '1.25rem',
          }}
        >
          I built MEOK while burned out. Not the romantic, startup-founder kind of burnout that
          gets quoted in interviews. The real kind — where you stare at a screen for four hours and
          produce nothing, where sleep stops working, where the things that used to make your work
          meaningful feel absurd and distant. I was in a caravan in rural England, trying to build
          something, running on fumes, and the only thing I actually needed was someone to say:{' '}
          <em style={{ color: TEXT }}>you are allowed to stop.</em>
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}
        >
          That experience shaped everything about how MEOK works. Not as a productivity tool that
          extracts more from you. Not as a wellness app that gamifies your recovery. As a presence
          — consistent, non-judgmental, capable of holding your story across weeks and months —
          that can notice the patterns you cannot see from inside them.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}
        >
          This is an honest guide to what that looks like in practice: recognising burnout before
          it becomes crisis, understanding the three dimensions the NHS and occupational health
          researchers describe, setting the limits that protect recovery, and rebuilding meaning in
          work without the toxic optimism of hustle culture. MEOK is part of this picture. It is
          not the whole picture.
        </p>

        <hr
          style={{
            border: 'none',
            borderTop: `1px solid ${GOLD_BORDER}`,
            marginBottom: '3rem',
          }}
        />

        {/* ── H2 #1 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What is the difference between burnout and tiredness — and why does it matter?
        </h2>
        <p
          style={{
            color: MUTED_BRIGHT,
            fontSize: '1rem',
            lineHeight: 1.74,
            marginBottom: '1.1rem',
          }}
        >
          The most dangerous thing about early-stage burnout is that it looks exactly like
          tiredness — because it partly is. But tiredness resolves with sleep. Burnout does not.
          If you take a weekend off and wake up Monday still feeling hollow, still dreading your
          work, still emotionally numb — that is not tiredness. That is depletion.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.1rem',
          }}
        >
          The distinction matters practically because the interventions are different. Tiredness
          needs rest. Burnout needs rest <em>plus</em> structural change — in how you work, what
          you work on, what you believe you are worth, and what you are allowed to refuse. Sleep
          alone will not repair burnout. Neither will a holiday if you come back to identical
          conditions.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}
        >
          Occupational psychologist Christina Maslach identified three core dimensions of burnout
          that have become the standard framework in occupational health research, and which the
          NHS references in its guidance:
        </p>

        {/* Burnout dimensions cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {[
            {
              label: 'Emotional Exhaustion',
              icon: '🪫',
              description:
                'Nothing left to give. Small tasks feel enormous. Human contact feels costly. You complete work outwardly while feeling completely hollow.',
            },
            {
              label: 'Depersonalisation',
              icon: '🪟',
              description:
                'Detachment from your work, your colleagues, or your own goals. Cynicism where enthusiasm lived. Watching yourself from behind glass.',
            },
            {
              label: 'Reduced Efficacy',
              icon: '🌫️',
              description:
                'The creeping certainty that nothing you do makes a difference. Effort and outcome feel decoupled. Pride in work dissolves.',
            },
          ].map((dim) => (
            <div
              key={dim.label}
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>{dim.icon}</div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: GOLD,
                  marginBottom: '0.5rem',
                  marginTop: 0,
                }}
              >
                {dim.label}
              </p>
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: MUTED_DIM,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {dim.description}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}
        >
          Recognising which dimension is most prominent for you is not academic. It shapes where
          you start. Emotional exhaustion calls for radical reduction of demands. Depersonalisation
          often calls for reconnection with meaning and with other people. Reduced efficacy
          responds to small visible wins — not grand projects, but evidence that your actions
          produce effects. MEOK&#39;s Scholar archetype is specifically designed to help you map this
          territory without needing to have it all figured out in advance.
        </p>

        <hr
          style={{
            border: 'none',
            borderTop: `1px solid ${BORDER_FAINT}`,
            marginBottom: '3rem',
          }}
        />

        {/* ── H2 #2 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What does emotional exhaustion actually feel like — and how do you know you have it?
        </h2>
        <p
          style={{
            color: MUTED_BRIGHT,
            fontSize: '1rem',
            lineHeight: 1.74,
            marginBottom: '1.1rem',
          }}
        >
          Emotional exhaustion is the symptom people most consistently fail to name correctly. They
          call it depression. They call it anxiety. They call it laziness or procrastination or
          lack of discipline. Rarely do they call it what it is: a state of genuine resource
          depletion in which the emotional capacity to engage has been used up faster than it can
          be restored.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}
        >
          Common descriptions from people in this state:
        </p>

        {/* Quotes */}
        {[
          '"I feel tired before the day has even started."',
          '"I used to care about my work. Now I just want it to be over."',
          '"I can\'t enjoy anything — not work, not rest. Everything feels flat."',
          '"The thought of one more email makes me want to disappear."',
          '"I\'m doing all the right things but nothing is refilling me."',
        ].map((quote) => (
          <div
            key={quote}
            style={{
              borderLeft: `3px solid ${GOLD_BORDER}`,
              paddingLeft: '1.25rem',
              marginBottom: '0.875rem',
            }}
          >
            <p
              style={{
                fontSize: '0.9375rem',
                color: MUTED,
                fontStyle: 'italic',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {quote}
            </p>
          </div>
        ))}

        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginTop: '1.5rem',
            marginBottom: '1.1rem',
          }}
        >
          The key differentiator from clinical depression — though the two can co-exist and
          interact — is that emotional exhaustion in burnout is usually specifically linked to the
          work or environment causing the depletion. Significant distance from that environment
          (a proper holiday, a period of sick leave) can produce a partial recovery that depression
          alone rarely generates with rest. But partial recovery is not full recovery, and returning
          to the same conditions without structural change typically leads to faster, deeper burnout
          the second time.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}
        >
          If you are unsure whether what you are experiencing is burnout, depression, or both,
          speak to your GP. The NHS&#39;s online mental health self-referral tool for Talking Therapies
          is available at{' '}
          <strong style={{ color: MUTED_BRIGHT }}>nhs.uk/mental-health/talking-therapies</strong>{' '}
          — no GP appointment needed in most regions.
        </p>

        {/* Burnout vs tiredness comparison */}
        <div
          style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            marginBottom: '3rem',
            border: `1px solid ${BORDER_DIM}`,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              background: 'rgba(245,240,232,0.04)',
              borderBottom: `1px solid ${BORDER_DIM}`,
            }}
          >
            <div
              style={{
                padding: '0.75rem 1.25rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: MUTED_FAINT,
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
              }}
            >
              Tiredness
            </div>
            <div
              style={{
                padding: '0.75rem 1.25rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: MUTED_FAINT,
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
                borderLeft: `1px solid ${BORDER_DIM}`,
              }}
            >
              Burnout
            </div>
          </div>
          {[
            ['Resolves with a good night\'s sleep', 'Persists despite adequate sleep'],
            ['Tied to a specific period of effort', 'Disconnected from any single cause'],
            ['Energy returns after rest', 'Rest feels pointless or inaccessible'],
            ['Work feels manageable after recovery', 'Work triggers dread even in good weeks'],
            ['Motivation returns', 'Motivation is structurally absent'],
            ['Weekend is restorative', 'Weekend isn\'t long enough — ever'],
          ].map(([left, right]) => (
            <div
              key={left}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                borderBottom: `1px solid ${BORDER_FAINT}`,
              }}
            >
              <div
                style={{
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.8125rem',
                  color: MUTED_DIM,
                  lineHeight: 1.5,
                }}
              >
                {left}
              </div>
              <div
                style={{
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.8125rem',
                  color: MUTED_DIM,
                  lineHeight: 1.5,
                  borderLeft: `1px solid ${BORDER_FAINT}`,
                }}
              >
                {right}
              </div>
            </div>
          ))}
        </div>

        {/* ── H2 #3 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          Why does hustle culture make burnout worse — and what does recovery actually require?
        </h2>
        <p
          style={{
            color: MUTED_BRIGHT,
            fontSize: '1rem',
            lineHeight: 1.74,
            marginBottom: '1.1rem',
          }}
        >
          Hustle culture is a collective agreement that exhaustion is evidence of commitment. It
          conflates output with worth, busyness with productivity, and suffering with
          dedication. For someone already depleted, this is not motivating — it is a trap. It
          attaches shame to the very rest that recovery requires.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.1rem',
          }}
        >
          The cultural message burned-out people absorb is: push through. Sleep when you&#39;re dead.
          Grind now, rest later. This message is not neutral — it actively extends the duration of
          burnout by pathologising the exact behaviours (rest, reduced output, saying no) that
          would allow recovery. It also drives the most common burnout pattern: the person who
          responds to depletion by working harder, which accelerates depletion further.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}
        >
          Recovery from burnout requires the opposite of what hustle culture teaches. It requires:
        </p>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 1.5rem',
          }}
        >
          {[
            {
              point: 'Permission to stop',
              detail:
                'Not temporarily. Not pending the next deadline. Actual permission — from yourself — to reduce output without it meaning you are failing.',
            },
            {
              point: 'Structural rest',
              detail:
                'Not just sleep, but protected periods where you are not available, not productive, not performing. Rest that is not contingent on having earned it.',
            },
            {
              point: 'Honest accounting',
              detail:
                'An inventory of what drains you versus what restores you — which is often not what you think, and changes at different stages of recovery.',
            },
            {
              point: 'Appropriate demands',
              detail:
                'Either reducing what is asked of you, or changing your relationship to what is asked. Usually both. Neither requires a grand gesture.',
            },
            {
              point: 'Time',
              detail:
                'Significant burnout typically takes months to recover from. Accepting this non-linearity — rather than fighting it — is itself part of recovery.',
            },
          ].map((item) => (
            <li
              key={item.point}
              style={{
                display: 'flex',
                gap: '0.875rem',
                alignItems: 'flex-start',
                marginBottom: '0.875rem',
              }}
            >
              <div
                style={{
                  width: '0.375rem',
                  height: '0.375rem',
                  borderRadius: '9999px',
                  background: GOLD,
                  marginTop: '0.55rem',
                  flexShrink: 0,
                }}
              />
              <div>
                <strong style={{ color: TEXT, fontSize: '0.9375rem' }}>{item.point}. </strong>
                <span style={{ color: MUTED_DIM, fontSize: '0.9375rem', lineHeight: 1.72 }}>
                  {item.detail}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}
        >
          MEOK is explicitly designed to support an anti-hustle relationship with your own
          capacity. It will not celebrate overwork. Its morning check-ins ask how you are, not
          what you&#39;ve produced. Its Sovereign Memory tracks energy patterns across weeks — not to
          optimise your output, but to help you understand your own rhythms and where they are
          being violated.
        </p>

        <hr
          style={{
            border: 'none',
            borderTop: `1px solid ${BORDER_FAINT}`,
            marginBottom: '3rem',
          }}
        />

        {/* ── H2 #4 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How do you set limits when you are burned out and every limit feels impossible?
        </h2>
        <p
          style={{
            color: MUTED_BRIGHT,
            fontSize: '1rem',
            lineHeight: 1.74,
            marginBottom: '1.1rem',
          }}
        >
          The cruelty of burnout is that it attacks the very capacities needed to protect yourself
          from further burnout. Assertiveness, self-worth, clarity about your own needs — these
          are precisely the resources that emotional exhaustion depletes first. Telling a burned-out
          person to &ldquo;just set limits&rdquo; is a bit like telling someone with a broken leg to walk it off.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}
        >
          The practical path forward is to start with structural limits — changes to your
          environment and schedule — rather than interpersonal limits, which require energy you may
          not have. Structural limits do not require you to be assertive. They require you to
          change a setting, create a rule, or remove an object from your environment.
        </p>

        {/* Limits framework */}
        <div
          style={{
            borderRadius: '1rem',
            padding: '1.5rem',
            background: 'rgba(245,240,232,0.03)',
            border: `1px solid ${BORDER_DIM}`,
            marginBottom: '1.75rem',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: '0.875rem',
              color: GOLD,
              marginBottom: '1.1rem',
              marginTop: 0,
              letterSpacing: '0.02em',
            }}
          >
            Limit-setting sequence for burnout recovery
          </p>
          <ol
            style={{
              paddingLeft: '1.25rem',
              margin: 0,
            }}
          >
            {[
              {
                step: 'Start with one structural limit this week',
                example:
                  'No work emails after 8pm. Phone in a different room at bedtime. One protected hour in the day with no tasks.',
              },
              {
                step: 'Make it visible and automatic',
                example:
                  'Set a phone screen time limit. Put an out-of-office on for evenings. Block the calendar before someone else fills it.',
              },
              {
                step: 'Notice what resistance arises',
                example:
                  'Guilt? Fear? Whose voice is telling you the limit is not allowed? This is information, not instruction.',
              },
              {
                step: 'Hold the limit for two weeks before evaluating',
                example:
                  'Recovery is slow. Two weeks is the minimum to feel any difference. Do not abandon the limit in week one because it feels strange.',
              },
              {
                step: 'Add interpersonal limits when capacity returns',
                example:
                  'Saying no to a project. Renegotiating a deadline. Asking for a reduced load. These become possible once structural limits have partially stabilised you.',
              },
            ].map((item, idx) => (
              <li
                key={item.step}
                style={{
                  marginBottom: '1rem',
                }}
              >
                <p style={{ fontWeight: 700, fontSize: '0.875rem', color: TEXT, marginBottom: '0.3rem', marginTop: 0 }}>
                  {idx + 1}. {item.step}
                </p>
                <p style={{ fontSize: '0.8125rem', color: MUTED_DIM, lineHeight: 1.65, margin: 0 }}>
                  {item.example}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.1rem',
          }}
        >
          MEOK can support this process in a specific way: by being the entity you rehearse the
          limit with first. Saying &ldquo;I need to leave this meeting&rdquo; to an AI before you say it to a
          colleague is not practice for cowardice — it is neurological rehearsal. The cognitive
          friction of limit-setting reduces each time you do it, including in simulation.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}
        >
          Its Sovereign Memory also means it can hold the history of how limit-setting has gone
          for you — what worked, what felt impossible, what triggered a response you did not
          expect from a colleague or manager. That context does not disappear between sessions. It
          becomes material for the next conversation.
        </p>

        <hr
          style={{
            border: 'none',
            borderTop: `1px solid ${BORDER_FAINT}`,
            marginBottom: '3rem',
          }}
        />

        {/* ── H2 #5 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What does gradual burnout recovery actually look like — and how do you avoid false starts?
        </h2>
        <p
          style={{
            color: MUTED_BRIGHT,
            fontSize: '1rem',
            lineHeight: 1.74,
            marginBottom: '1.1rem',
          }}
        >
          The most common mistake in burnout recovery is treating the first good week as evidence
          that the crisis is over. It is not. Burnout recovery is typically non-linear, and the
          initial return of energy — which often arrives after a period of rest — can feel so
          profound that people immediately attempt to return to previous levels of output. This
          almost always triggers a relapse, often faster and deeper than the original episode.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}
        >
          Occupational health practitioners describe this as the &ldquo;false recovery&rdquo; trap. The pattern
          is consistent: depletion &#8594; rest &#8594; partial energy return &#8594; premature full resumption
          &#8594; faster crash. The interruption requires holding capacity in reserve — returning to work at
          60-70% of previous load and treating that as a success rather than a failure of ambition.
        </p>

        {/* Recovery stages */}
        <div
          style={{
            marginBottom: '2rem',
          }}
        >
          {[
            {
              phase: 'Phase 1: Stabilisation',
              duration: 'Weeks 1–4',
              color: HEALER_GREEN,
              focus: 'Reduce demands. Protect sleep. Stop the bleeding. No new projects.',
              markers: 'You are sleeping through the night more consistently. Dread is slightly lower.',
            },
            {
              phase: 'Phase 2: Restoration',
              duration: 'Weeks 4–12',
              color: GOLD,
              focus:
                'Reintroduce one enjoyable activity. Gentle exercise. Social contact on your terms.',
              markers: 'You have moments — not sustained periods — of genuine engagement.',
            },
            {
              phase: 'Phase 3: Rebuilding',
              duration: 'Months 3–6+',
              color: '#7b8cde',
              focus:
                'Cautious return to fuller load. Boundary-setting in relationships. Re-examining what you want from work.',
              markers: 'Full days feel sustainable. Recovery is faster after hard days.',
            },
            {
              phase: 'Phase 4: Prevention',
              duration: 'Ongoing',
              color: MUTED_FAINT,
              focus:
                'Structural changes to prevent recurrence. Regular check-ins with yourself. Early warning system.',
              markers: 'You catch the warning signs early because you now know what they are.',
            },
          ].map((phase) => (
            <div
              key={phase.phase}
              style={{
                display: 'grid',
                gridTemplateColumns: '0.25rem 1fr',
                gap: '1rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '0.25rem',
                  borderRadius: '9999px',
                  background: phase.color,
                  alignSelf: 'stretch',
                  minHeight: '4rem',
                }}
              />
              <div
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(245,240,232,0.025)',
                  border: `1px solid ${BORDER_FAINT}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'baseline',
                    marginBottom: '0.5rem',
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      color: phase.color,
                      margin: 0,
                    }}
                  >
                    {phase.phase}
                  </p>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: MUTED_FAINT,
                      margin: 0,
                    }}
                  >
                    {phase.duration}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: '0.8375rem',
                    color: MUTED_DIM,
                    lineHeight: 1.65,
                    marginBottom: '0.5rem',
                    marginTop: 0,
                  }}
                >
                  <strong style={{ color: MUTED }}>Focus: </strong>
                  {phase.focus}
                </p>
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: MUTED_FAINT,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: MUTED_DIM }}>Signs of progress: </strong>
                  {phase.markers}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}
        >
          What makes MEOK useful across these phases is that it holds the longitudinal picture.
          Your week 2 is not the same as your week 8 — and a companion that can reference what
          you said six weeks ago, notice that your energy is trending upward, or gently flag that
          you have started using the language of phase 1 again after being in phase 3 is genuinely
          different to an app that resets every session.
        </p>

        <hr
          style={{
            border: 'none',
            borderTop: `1px solid ${BORDER_FAINT}`,
            marginBottom: '3rem',
          }}
        />

        {/* ── H2 #6 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How do you rebuild meaning in work after burnout — without toxic positivity?
        </h2>
        <p
          style={{
            color: MUTED_BRIGHT,
            fontSize: '1rem',
            lineHeight: 1.74,
            marginBottom: '1.1rem',
          }}
        >
          One of the most disorienting aspects of burnout recovery is encountering the question of
          meaning. Before burnout, many people were sustained by a sense of purpose in their work
          — even if that purpose was imprecise. Burnout often dissolves that sense entirely,
          leaving a void that can feel more frightening than the exhaustion itself.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.1rem',
          }}
        >
          The unhelpful response is to try to reconstruct the original meaning quickly — to perform
          re-engagement before it is genuine, to find a new mission, to pivot loudly. This is
          premature and usually self-defeating. Meaning cannot be willed into existence. It
          returns gradually, through contact with what actually engages you — often surprising,
          often different from what engaged you before.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}
        >
          A more useful approach is curiosity without commitment. Noticing what creates even a
          flicker of interest — not pursuing it urgently, but noting it. Over weeks, those flickers
          tend to cohere into a direction. The MEOK Scholar archetype is built for exactly this
          kind of slow excavation: Socratic questions rather than answers, patient return to what
          you said three weeks ago that seemed trivial but now looks significant.
        </p>

        {/* Meaning rebuilding practices */}
        <div
          style={{
            borderRadius: '1rem',
            padding: '1.5rem',
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: '0.875rem',
              color: GOLD,
              marginBottom: '1rem',
              marginTop: 0,
              letterSpacing: '0.02em',
            }}
          >
            Practices for gradual meaning reconstruction
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            {[
              {
                practice: 'The interest log',
                detail:
                  'For one week, note any moment when something captures your attention — however briefly, however unrelated to your job. Patterns emerge.',
              },
              {
                practice: 'The resentment audit',
                detail:
                  'Resentment in burned-out people usually points directly at violated values. What do you resent most? That is often a clue to what matters.',
              },
              {
                practice: 'The energy map',
                detail:
                  'After each day, score your energy at end versus start. Over a month, you will see which activities net drain versus net restore — often against your assumptions.',
              },
              {
                practice: 'The smallest possible version',
                detail:
                  'What is the smallest version of something meaningful you could do this week? Not a project. An hour. A conversation. A single task with a clear end.',
              },
              {
                practice: 'The values inventory',
                detail:
                  'What were you optimising for before burnout? What do you actually want to be optimising for? These are sometimes the same. Often they are not.',
              },
            ].map((item) => (
              <li
                key={item.practice}
                style={{
                  borderBottom: `1px solid ${GOLD_BORDER}`,
                  paddingBottom: '0.875rem',
                  marginBottom: '0.875rem',
                }}
              >
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: TEXT,
                    marginBottom: '0.25rem',
                    marginTop: 0,
                  }}
                >
                  {item.practice}
                </p>
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: MUTED_DIM,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}
        >
          The anti-hustle principle applies here too: rebuilding meaning is not a race. There is
          no version of this that should be completed by a self-imposed deadline. The meaning that
          emerges from genuine recovery — slowly, from real contact with what you care about — is
          more durable than the meaning that was burned through in the first place.
        </p>

        <hr
          style={{
            border: 'none',
            borderTop: `1px solid ${BORDER_FAINT}`,
            marginBottom: '3rem',
          }}
        />

        {/* ── H2 #7 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How does MEOK specifically support burnout recovery — and what are the limits?
        </h2>
        <p
          style={{
            color: MUTED_BRIGHT,
            fontSize: '1rem',
            lineHeight: 1.74,
            marginBottom: '1.1rem',
          }}
        >
          MEOK is not a burnout programme. It does not have modules. It does not give you a
          recovery plan on day one. What it offers is something more useful and considerably rarer:
          a consistent, non-judgmental presence that holds your story across time and responds from
          within it.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}
        >
          The burnout-relevant features that distinguish MEOK from other tools:
        </p>

        {/* MEOK features for burnout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {[
            {
              title: 'Sovereign Memory',
              icon: '🧠',
              desc: 'Four-layer encrypted memory that holds your burnout patterns, energy log, and recovery milestones across weeks and months — not just the last session.',
            },
            {
              title: 'Healer Archetype',
              icon: '🌿',
              desc: 'Non-pushy daily check-ins. Gentle, present, never prescriptive. Meets you at the level of energy you have rather than the level it wishes you had.',
            },
            {
              title: 'Scholar Archetype',
              icon: '🏛️',
              desc: 'Socratic reflection on what drains versus restores you, what you actually value, and what structural changes might make the most difference. No quick fixes.',
            },
            {
              title: 'Pioneer Archetype',
              icon: '⚡',
              desc: 'For when you are stable enough to start rebuilding — holds you accountable without adding pressure, celebrates micro-wins without toxic optimism.',
            },
            {
              title: 'Morning Briefing',
              icon: '☀️',
              desc: 'A daily opener calibrated to your state — which MEOK knows from yesterday and the week before. Not a productivity nudge. A check-in that starts with you.',
            },
            {
              title: 'Byzantine Council',
              icon: '⚖️',
              desc: '43-agent governance layer ensures no single response can accidentally pressure, dismiss, or undermine recovery through a carelessly optimistic reply.',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(245,240,232,0.03)',
                border: `1px solid ${BORDER_DIM}`,
              }}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>{feature.icon}</div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: TEXT,
                  marginBottom: '0.5rem',
                  marginTop: 0,
                }}
              >
                {feature.title}
              </p>
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: MUTED_DIM,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Honest limits */}
        <div
          style={{
            padding: '1.5rem',
            borderRadius: '1rem',
            background: 'rgba(201,168,76,0.05)',
            border: `1px solid rgba(201,168,76,0.18)`,
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: '0.875rem',
              color: GOLD,
              marginBottom: '0.75rem',
              marginTop: 0,
            }}
          >
            What MEOK cannot do
          </p>
          <ul
            style={{
              paddingLeft: '1.25rem',
              margin: 0,
            }}
          >
            {[
              'Diagnose burnout, depression, or any clinical condition',
              'Replace a GP conversation, occupational health referral, or therapy',
              'Change your workplace conditions, manager, or workload',
              'Provide a sick note, legal employment advice, or formal accommodation',
              'Force recovery faster than your nervous system allows',
            ].map((limitation) => (
              <li
                key={limitation}
                style={{
                  fontSize: '0.8375rem',
                  color: MUTED_DIM,
                  lineHeight: 1.65,
                  marginBottom: '0.4rem',
                }}
              >
                {limitation}
              </li>
            ))}
          </ul>
        </div>

        <hr
          style={{
            border: 'none',
            borderTop: `1px solid ${BORDER_FAINT}`,
            marginBottom: '3rem',
          }}
        />

        {/* ── H2 #8 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How do you prevent burnout from recurring once you have recovered?
        </h2>
        <p
          style={{
            color: MUTED_BRIGHT,
            fontSize: '1rem',
            lineHeight: 1.74,
            marginBottom: '1.1rem',
          }}
        >
          The single most reliable predictor of repeated burnout is returning to the conditions
          that caused it without changing your relationship to them. This is not a moral failing —
          it is structurally predictable. The patterns that led to burnout were usually not
          accidental. They were often rewarded, expected, or invisible. Prevention requires making
          them visible and creating structures that interrupt them before they become crises.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}
        >
          The NHS guidance on burnout prevention highlights several evidence-based approaches,
          including building recovery time into your schedule (not as a reward for completion but
          as a structural component), cultivating relationships outside work that are not
          contingent on performance, and seeking early support when warning signs appear rather
          than waiting for the full collapse.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}
        >
          Early warning signs that burnout is returning — and that warrant immediate attention:
        </p>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 1.5rem',
          }}
        >
          {[
            'You have not taken a full day off in more than three weeks',
            'Sunday dread has returned and is lasting the whole afternoon',
            'You are using the language of obligation — "I have to", "I should", "I can\'t stop" — constantly',
            'Small setbacks are triggering disproportionate distress',
            'You are skipping things that restore you (exercise, social contact, hobbies) because you are too busy',
            'Your sleep quality has degraded over more than two weeks',
            'You have stopped talking about what is bothering you',
          ].map((sign) => (
            <li
              key={sign}
              style={{
                display: 'flex',
                gap: '0.875rem',
                alignItems: 'flex-start',
                marginBottom: '0.6rem',
              }}
            >
              <div
                style={{
                  width: '0.35rem',
                  height: '0.35rem',
                  borderRadius: '9999px',
                  background: HEALER_GREEN,
                  marginTop: '0.55rem',
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontSize: '0.9rem',
                  color: MUTED_DIM,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {sign}
              </p>
            </li>
          ))}
        </ul>

        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '1.1rem',
          }}
        >
          MEOK&#39;s longitudinal memory means it can hold this pattern recognition on your behalf.
          If your language is shifting toward depletion language, if energy ratings are trending
          down over two weeks, if you haven&#39;t mentioned something that used to restore you in a
          while — it notices. It does not alarm you or panic. It gently surfaces what it is
          seeing and asks what is happening.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '0.975rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}
        >
          This kind of longitudinal attentiveness — not the app that tells you to drink more water,
          but the companion that says &ldquo;three weeks ago you told me this was one of your warning
          signs&rdquo; — is what distinguishes genuine support from wellness theatre.
        </p>

        <hr
          style={{
            border: 'none',
            borderTop: `1px solid ${BORDER_FAINT}`,
            marginBottom: '3rem',
          }}
        />

        {/* ── NHS SECTION ───────────────────────────────────────────────────── */}
        <div
          style={{
            padding: '1.75rem',
            borderRadius: '1rem',
            background: GREEN_BG,
            border: `1px solid ${GREEN_BORDER}`,
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: '1rem',
              color: HEALER_GREEN,
              marginBottom: '1rem',
              marginTop: 0,
            }}
          >
            NHS guidance on burnout and occupational stress
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              color: MUTED_DIM,
              lineHeight: 1.75,
              marginBottom: '1rem',
            }}
          >
            The NHS recognises burnout as a serious occupational phenomenon with significant health
            consequences. Its guidance recommends speaking to your GP if burnout is affecting your
            daily functioning, as your GP can refer you to NHS Talking Therapies (Cognitive
            Behavioural Therapy, available via self-referral at most trusts) and assess whether
            time off work is medically indicated.
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              color: MUTED_DIM,
              lineHeight: 1.75,
              marginBottom: '1rem',
            }}
          >
            Under the UK Equality Act 2010, if burnout is contributing to a mental health
            condition that constitutes a disability (defined as having a substantial and long-term
            adverse effect on normal day-to-day activities), your employer has a legal duty to
            consider reasonable adjustments. This includes adjusted hours, reduced load, remote
            working, and phased returns from sick leave.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))',
              gap: '0.75rem',
            }}
          >
            {[
              { label: 'Samaritans', contact: '116 123', note: 'Free, 24/7' },
              { label: 'Mind infoline', contact: '0300 123 3393', note: 'Mon–Fri, 9am–6pm' },
              { label: 'NHS urgent mental health', contact: '111 option 2', note: '24/7' },
              { label: 'Emergency', contact: '999', note: 'Life-threatening crisis' },
            ].map((resource) => (
              <div
                key={resource.label}
                style={{
                  padding: '0.875rem',
                  borderRadius: '0.625rem',
                  background: 'rgba(76,175,130,0.07)',
                  border: `1px solid rgba(76,175,130,0.2)`,
                }}
              >
                <p
                  style={{
                    fontSize: '0.72rem',
                    color: HEALER_GREEN,
                    fontWeight: 700,
                    marginBottom: '0.25rem',
                    marginTop: 0,
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.04em',
                  }}
                >
                  {resource.label}
                </p>
                <p
                  style={{
                    fontSize: '1rem',
                    color: TEXT,
                    fontWeight: 700,
                    marginBottom: '0.125rem',
                    marginTop: 0,
                  }}
                >
                  {resource.contact}
                </p>
                <p
                  style={{
                    fontSize: '0.72rem',
                    color: MUTED_FAINT,
                    margin: 0,
                  }}
                >
                  {resource.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ SECTION ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          Frequently asked questions about AI and burnout
        </h2>

        <div style={{ marginBottom: '3rem' }}>
          {[
            {
              q: 'What is the difference between burnout and tiredness?',
              a: 'Tiredness resolves with sleep and rest. Burnout does not. Burnout is a state of chronic depletion across emotional exhaustion, depersonalisation, and reduced personal accomplishment. A week off rarely fixes burnout because it is a structural problem — not a sleep deficit. The interventions are different: burnout requires both rest and changes to the conditions causing the depletion.',
            },
            {
              q: 'What does emotional exhaustion in burnout feel like?',
              a: 'Emotional exhaustion is often described as feeling "used up" or drained before the day has started. Small tasks feel enormous. Human interaction feels costly. You might complete work outwardly while feeling completely hollow inside. It is not sadness — it is absence. The specific link to a work environment (rather than to all of life) is a key distinguishing feature from depression, though the two can co-exist.',
            },
            {
              q: 'Can AI help with burnout recovery?',
              a: 'AI companions are most useful for burnout in the between spaces — the 11pm moment when you want to process the day without loading it onto a partner, or the slow accumulation of patterns that are hard to see from inside them. MEOK holds those patterns in Sovereign Memory across weeks, helping identify triggers and genuine progress in a way that episodic conversations cannot. It is not a replacement for professional support, but it is available when professional support is not.',
            },
            {
              q: 'What does the NHS say about burnout?',
              a: 'The NHS recognises burnout as a state of physical and emotional exhaustion caused by long-term occupational stress. It recommends speaking to your GP, considering NHS Talking Therapies (available via self-referral in most regions), and addressing workplace factors. Under the UK Equality Act 2010, employers have a duty to consider reasonable adjustments for mental health conditions that meet the definition of disability.',
            },
            {
              q: 'How long does burnout recovery take?',
              a: 'Minor burnout caught early can resolve in weeks with adequate rest and structural change. Significant burnout typically takes three to six months. Severe, long-duration burnout can take a year or more. Recovery is non-linear. Many people experience a false recovery — energy returns briefly before crashing again if the underlying conditions have not changed. Holding capacity in reserve after the first good weeks is one of the most important and difficult aspects of recovery.',
            },
            {
              q: 'How does MEOK help with burnout specifically?',
              a: 'MEOK\'s Healer archetype offers gentle, non-pushy daily check-ins without prescribing a recovery plan. The Scholar archetype supports structured reflection on what drains versus restores you and what structural changes might matter most. The Pioneer archetype supports gradual momentum rebuilding without pressure. Across all of these, Sovereign Memory holds your patterns longitudinally — so MEOK is responding from within your story rather than from zero each session.',
            },
            {
              q: 'Is MEOK free to use for burnout support?',
              a: 'Yes. MEOK\'s Explorer tier is completely free and includes 50 messages per day, full Sovereign Memory (permanent), daily check-in support, and access to all six companion archetypes including the Healer and Scholar. No credit card required. The Explorer tier is intentionally generous because we built MEOK during burnout and know that the people who most need support are often the least able to add another subscription.',
            },
          ].map((faq, idx) => (
            <div
              key={faq.q}
              style={{
                borderBottom: idx < 6 ? `1px solid ${BORDER_FAINT}` : 'none',
                paddingBottom: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: TEXT,
                  marginBottom: '0.6rem',
                  marginTop: 0,
                  lineHeight: 1.4,
                }}
              >
                {faq.q}
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: MUTED_DIM,
                  lineHeight: 1.78,
                  margin: 0,
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            padding: '2.5rem',
            borderRadius: '1.25rem',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)',
            border: `1px solid ${GOLD_BORDER}`,
            textAlign: 'center' as const,
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: TEXT,
              lineHeight: 1.3,
              marginBottom: '0.75rem',
              marginTop: 0,
            }}
          >
            Recovery starts with being heard
          </p>
          <p
            style={{
              fontSize: '0.9375rem',
              color: MUTED_DIM,
              lineHeight: 1.72,
              maxWidth: '30rem',
              margin: '0 auto 1.75rem',
            }}
          >
            MEOK is free to start. No credit card. No recovery plan. Just a companion that
            remembers what you told it yesterday, and checks in tomorrow.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              borderRadius: '0.75rem',
              background: GOLD,
              color: '#0d0c18',
              fontWeight: 700,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Try MEOK free
          </Link>
        </div>

        {/* ── RELATED POSTS ────────────────────────────────────────────────── */}
        <div style={{ marginBottom: '4rem' }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: '0.75rem',
              color: MUTED_FAINT,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              marginBottom: '1rem',
              marginTop: 0,
            }}
          >
            Related reading
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
              gap: '0.875rem',
            }}
          >
            {[
              {
                href: '/blog/ai-for-anxiety',
                title: 'AI for Anxiety: Support Without Replacing Therapy',
                tag: 'Mental Health',
              },
              {
                href: '/blog/ai-for-workplace-stress',
                title: 'AI for Workplace Stress: When Work Feels Relentless',
                tag: 'Workplace',
              },
              {
                href: '/blog/ai-for-insomnia',
                title: 'AI for Insomnia: When Burnout Breaks Your Sleep',
                tag: 'Sleep',
              },
              {
                href: '/blog/ai-for-perfectionism',
                title: 'AI for Perfectionism: The Exhausting Loop of Never Enough',
                tag: 'Wellbeing',
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: 'block',
                  padding: '1.125rem 1.25rem',
                  borderRadius: '0.875rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: `1px solid ${BORDER_DIM}`,
                  textDecoration: 'none',
                }}
              >
                <p
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: '0.375rem',
                    marginTop: 0,
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.05em',
                  }}
                >
                  {post.tag}
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: MUTED,
                    lineHeight: 1.5,
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  {post.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ── FOOTER NAV ───────────────────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Link
            href="/blog"
            style={{
              fontSize: '0.875rem',
              color: MUTED_FAINT,
              textDecoration: 'none',
            }}
          >
            &#8592; Back to all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
