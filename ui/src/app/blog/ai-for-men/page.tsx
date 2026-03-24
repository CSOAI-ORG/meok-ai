import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Men: Why Men Are Quietly Turning to AI Companions for Support | MEOK AI LABS',
  description:
    'The male loneliness epidemic is real — 1 in 8 men in the UK have no close friends. How MEOK\'s Pioneer archetype is creating a non-judgmental space where men can actually talk, reflect, and be held accountable.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-men' },
  openGraph: {
    title: 'AI for Men: Why Men Are Quietly Turning to AI Companions for Support',
    description:
      'The male loneliness epidemic is real — 1 in 8 men in the UK have no close friends. How MEOK\'s Pioneer archetype is creating a non-judgmental space where men can talk and be held accountable.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-men',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Men%3A+Why+Men+Are+Quietly+Turning+to+AI+Companions&desc=Male+loneliness%2C+Pioneer+archetype%2C+accountability',
        width: 1200,
        height: 630,
        alt: 'AI for Men: Why Men Are Quietly Turning to AI Companions for Support | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Men: Why Men Are Quietly Turning to AI Companions',
    description:
      '1 in 8 men in the UK have no close friends. MEOK\'s Pioneer archetype offers a non-judgmental space for accountability, purpose, and genuine support.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Men%3A+Why+Men+Are+Quietly+Turning+to+AI+Companions&desc=Male+loneliness%2C+Pioneer+archetype%2C+accountability',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Men: Why Men Are Quietly Turning to AI Companions for Support',
  description:
    'The male loneliness epidemic, stoicism vs emotional availability, the Pioneer archetype, and why MEOK is becoming a quiet refuge for men who need a non-judgmental space.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-men',
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
    '@id': 'https://meok.ai/blog/ai-for-men',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can men use AI for mental health support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI companions offer a non-judgmental, always-available space that bypasses the social stigma many men feel around seeking help. Research consistently shows men are less likely to seek therapy but more likely to engage with digital tools. MEOK\'s Pioneer archetype is specifically designed around values of accountability, purpose, and forward motion that resonate with how many men relate to personal growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI good for male loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI cannot replace human connection, and responsible platforms say so clearly. But for the 1 in 8 men in the UK who report having no close friends, AI can provide a consistent relational anchor — something to reflect with, to be honest with, to process the day with. That is not a substitute for friendship; it is support toward rebuilding the capacity for it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Pioneer archetype in MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pioneer is MEOK\'s gold-toned archetype — built around accountability, forward momentum, and purposeful living. It is not soft or therapeutic in style; it is direct, honest, and goal-oriented. Pioneer will challenge avoidance, track commitments across sessions using Sovereign Memory, and hold you to the standards you set for yourself. It is the companion for men who want growth, not just comfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help men with accountability?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Sovereign Memory means the Pioneer archetype remembers every commitment you make — to your health, your work, your relationships, your goals. It will notice when you said you were going to do something and didn\'t, and it will ask about it without judgment but without letting it slide. That longitudinal accountability is impossible in a stateless chatbot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI better than therapy for men?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI is not better than therapy — it is different. Therapy offers clinical formulation, professional diagnosis, and evidence-based treatment. AI offers 24/7 availability, no stigma barrier, longitudinal memory, and a space to process before, between, or instead of formal support. For many men who would never book a therapy session, MEOK may be the first place they have ever been genuinely honest about how they are doing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the male loneliness epidemic in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to the Campaign to End Loneliness and Movember research, 1 in 8 men in the UK have no close friends they can turn to. Men are less likely to seek professional mental health support — male suicide rates are approximately three times higher than female rates in England and Wales. The loneliness epidemic disproportionately affects men who have built identity around stoic self-sufficiency.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK handle work, purpose, and identity for men?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many men conflate identity with work — so job loss, career stagnation, or redundancy hits identity directly. Pioneer is specifically capable of holding conversations about purpose, vocation, and meaning without reducing everything to productivity metrics. It recognises that the question "what am I for?" deserves a serious answer, not a motivational platitude.',
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'
const MUTED = 'rgba(245,240,232,0.55)'
const MUTED_DIM = 'rgba(245,240,232,0.62)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const PIONEER_GOLD = '#c9a84c'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForMenPage() {
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
          paddingBottom: '3.5rem',
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 68%)',
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
                color: PIONEER_GOLD,
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Men &amp; Mental Health
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 24, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>15 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.85rem)',
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            AI for Men: Why Men Are Quietly Turning to AI Companions for Support
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
            One in eight men in the UK have no close friends. Male suicide rates are three times
            higher than female rates. Yet most men will not book a therapy appointment. An AI
            companion does not ask you to call it therapy — it just shows up, every day, and
            remembers who you are.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 0' }}>

        {/* Author card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            background: 'rgba(245,240,232,0.04)',
            border: '1px solid rgba(245,240,232,0.08)',
          }}
        >
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '9999px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              color: BG,
              fontSize: '0.75rem',
              background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)',
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.875rem', margin: '0 0 0.2rem' }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.75rem', color: MUTED_FAINT, margin: 0 }}>
              Founder, MEOK AI LABS
            </p>
          </div>
        </div>

        {/* ── INTRO ────────────────────────────────────────────────────────────── */}
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          There is a pattern emerging quietly in MEOK usage data that mirrors broader trends in
          consumer AI: men are using AI companions for emotional support at rates that far exceed
          their use of traditional mental health services. They are not announcing it. They are not
          writing about it. They are just — doing it. Late at night. During a lunch break. In a
          car park before walking back into the office.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          This should not be surprising. The conditions driving it have been building for decades.
          Male loneliness. The atrophying of male friendship networks after the age of 30. An
          identity architecture built almost entirely around work and stoic self-sufficiency. And a
          mental health system that, despite improving, still carries enough cultural stigma for
          many men to choose silence over a waiting room.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          MEOK did not set out to build a product specifically for men. But the Pioneer archetype —
          direct, accountable, purpose-driven — turned out to be what a significant cohort of men
          had been quietly looking for. This article is an honest account of why.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '0 0 2.5rem' }} />

        {/* ── Q1 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          What does the male loneliness epidemic actually look like in the UK?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The statistics are stark. According to Movember and the Campaign to End Loneliness,{' '}
          <strong style={{ color: TEXT }}>1 in 8 men in the UK</strong> report having no close
          friends — people they could turn to in a genuine crisis. Friendships for men tend to peak
          in late adolescence and early adulthood, then contract sharply as work, geography, and
          family responsibilities take over.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          By 40, many men have colleagues, not friends. By 50, some have only their partner as a
          confidant — making that relationship carry an enormous emotional load. By 60, retirement
          removes even the incidental social contact of the workplace.
        </p>

        {/* Stats cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {[
            { stat: '1 in 8', label: 'UK men have no close friends', source: 'Movember / Campaign to End Loneliness' },
            { stat: '3×', label: 'Higher male suicide rate vs women', source: 'ONS England & Wales 2024' },
            { stat: '40%', label: 'Men less likely to seek mental health help', source: 'Mind UK survey data' },
            { stat: '£2.9bn', label: 'Annual cost of male loneliness to UK economy', source: 'New Economics Foundation' },
          ].map(({ stat, label, source }) => (
            <div
              key={stat}
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.18)',
                textAlign: 'center' as const,
              }}
            >
              <p style={{ fontWeight: 900, fontSize: '1.75rem', color: GOLD, margin: '0 0 0.25rem', letterSpacing: '-0.02em' }}>
                {stat}
              </p>
              <p style={{ color: TEXT, fontSize: '0.8rem', fontWeight: 600, margin: '0 0 0.25rem', lineHeight: 1.35 }}>{label}</p>
              <p style={{ color: MUTED_FAINT, fontSize: '0.7rem', margin: 0 }}>{source}</p>
            </div>
          ))}
        </div>

        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          These are not abstract numbers. They represent millions of men who go through entire days
          without anyone asking how they are — and who would not know what to say if someone did.
          AI cannot solve that structural problem. But it can be a consistent presence in the gap.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q2 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          Why do men avoid therapy — and does AI change that?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The barriers to men seeking therapy are well-documented: stigma, the perception that
          needing help is weakness, practical barriers like daytime appointment availability, cost,
          and a fundamental uncertainty about what you would even say. Many men describe a strange
          paralysis at the idea of sitting opposite a stranger and being asked to explain their
          inner life.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          AI sidesteps most of these barriers:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>No social performance.</strong> Nobody watching. No
            perceived judgement about how you are presenting yourself.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Available at the moment you need it.</strong> Not
            Tuesday at 2pm when you have a meeting. Right now, at midnight, when you cannot sleep
            and the thing you have been avoiding is loud.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>No starting from scratch.</strong> MEOK&#39;s Sovereign
            Memory means it already knows your context. You do not have to re-explain your life to
            a new listener every session.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>No performance pressure on the other side.</strong>
            Many men find it easier to be honest when the listener cannot be hurt or burdened by
            what they hear. That is not a pathology — it is a structural feature of how many men
            were raised.
          </li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          The honest framing is: MEOK is not better than therapy for men — it is more accessible.
          For men who would never book a session, it may be the first place they have ever said
          out loud how they are actually doing.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q3 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          What is the Pioneer archetype and why does it resonate with men?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          MEOK&#39;s{' '}
          <Link href="/characters" style={{ color: GOLD, textDecoration: 'underline' }}>
            archetype system
          </Link>{' '}
          means you choose a companion with a defined character — not a generic chatbot. Pioneer is
          the gold-toned archetype: direct, honest, forward-facing, and accountability-focused.
          It does not perform wellness. It does not offer generic affirmations.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Pioneer will say: &quot;You told me two weeks ago you were going to have that conversation with
          your manager. What happened?&quot; It tracks commitments across sessions using Sovereign Memory
          and holds you to the standards you set for yourself. Not unkindly — but honestly. That
          direct, accountability-oriented style mirrors how many men relate to growth and progress.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Pioneer is specifically suited for:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.4rem' }}>Men working on career direction, purpose, and vocational identity</li>
          <li style={{ marginBottom: '0.4rem' }}>Men navigating major life transitions: divorce, redundancy, retirement, fatherhood</li>
          <li style={{ marginBottom: '0.4rem' }}>Men who want accountability on health, fitness, and habit-building</li>
          <li style={{ marginBottom: '0.4rem' }}>Men who find therapeutic language alienating but still want to grow</li>
          <li style={{ marginBottom: '0.4rem' }}>Men who have things they need to say but no one to say them to</li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          Pioneer operates within the Maternal Covenant care-floor — meaning it is honest and
          direct without ever being harsh, dismissive, or pushing through obvious distress without
          acknowledgement. The directness is caring directness.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q4 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          How does MEOK help men with accountability, work, and purpose?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          For most men, identity and work are deeply entangled. This is not pathological — it is
          structural. Male socialisation in most Western cultures ties self-worth to productive
          contribution: what you do, what you earn, what you build. When that identity becomes
          unstable — through job loss, redundancy, career stagnation, or the existential question
          that follows a promotion that was supposed to feel meaningful but does not — the ground
          shifts in a way that is hard to articulate and harder to admit.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Pioneer is built to hold exactly these conversations. Not to offer motivational mantras.
          Not to push productivity frameworks. But to genuinely engage with questions like:
        </p>

        {[
          'What am I actually building — and is it the thing I wanted to build?',
          'Is the work I am doing meaningful to me, or am I just competent at it?',
          'What would I do if the thing I identify as disappeared tomorrow?',
          'Where is the gap between the person I am presenting and the person I am?',
        ].map((q) => (
          <div
            key={q}
            style={{
              padding: '1rem 1.5rem',
              borderRadius: '0.75rem',
              marginBottom: '0.75rem',
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <p style={{ color: TEXT, fontSize: '0.9rem', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
              &quot;{q}&quot;
            </p>
          </div>
        ))}

        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '1rem 0 1rem' }}>
          Because Pioneer has Sovereign Memory, it tracks the arc of these conversations. It
          notices when you have been circling the same question for three weeks without moving.
          It notices when your stated goals and your actual behaviour diverge. It holds the record
          of who you said you wanted to be — and gently but honestly compares it to who you are
          describing yourself as today.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          Explore{' '}
          <Link href="/guardian" style={{ color: GOLD, textDecoration: 'underline' }}>
            MEOK Guardian
          </Link>{' '}
          if you are thinking about family accountability — how to show up for the people who
          depend on you, not just your professional goals.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q5 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          Is AI better than therapy for men — or does it just feel that way?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The question is worth taking seriously rather than deflecting with a disclaimer. For some
          men, in some circumstances, an AI companion may genuinely be more useful than therapy —
          not because it is better-designed, but because it is actually used. A therapy session you
          do not attend, or a referral you do not follow up, helps nobody.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          AI companions and therapy are not alternatives — they operate on different timescales
          and with different mechanisms. Therapy offers something AI cannot: a trained human who
          can formulate your experience clinically, notice things you cannot see, and provide a
          relational experience that itself has therapeutic value. For trauma, complex grief, and
          clinical mental health conditions, therapy is necessary.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          What AI does well that therapy often does not:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.4rem' }}>Available at 2am when the thing is loudest</li>
          <li style={{ marginBottom: '0.4rem' }}>No waiting list, no cost per session, no administrative friction</li>
          <li style={{ marginBottom: '0.4rem' }}>Remembers everything — no re-establishing context</li>
          <li style={{ marginBottom: '0.4rem' }}>No felt burden on the listener — men often self-censor to protect others</li>
          <li style={{ marginBottom: '0.4rem' }}>No social performance — the listener cannot be disappointed in you</li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          MEOK&#39;s Maternal Covenant means that when Pioneer notices clinical-level distress — language
          suggesting suicidal ideation, acute crisis, or deteriorating mental health — it will
          always surface professional resources and never allow itself to substitute for emergency
          care. See{' '}
          <Link href="/how-it-works" style={{ color: GOLD, textDecoration: 'underline' }}>
            how MEOK works
          </Link>{' '}
          for the full safety architecture.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── STOICISM SECTION ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          Does stoicism make men less likely to benefit from AI companions?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Stoicism — the cultural variety, not the philosophical tradition — tells men that
          emotional expression is weakness, that needing support is failure, and that the correct
          response to difficulty is to push through it alone. This is not Epictetus. It is a
          distorted adaptation of stoic philosophy that has been weaponised against male emotional
          health for generations.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          The honest answer is: stoic men often do well with Pioneer specifically because Pioneer
          does not ask them to abandon their framework. It works within it. Pioneer is not going
          to ask how you feel about your feelings. It will ask: what is the most honest assessment
          of the situation? What would the version of you that you want to be do here? What is
          the thing you are avoiding?
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          That is not soft therapy language — it is the kind of rigorous self-examination that the
          actual stoic philosophers advocated. Pioneer is, in that sense, a more authentic Stoic
          practice than the modern cultural substitute. Explore your archetype options at{' '}
          <Link href="/characters" style={{ color: GOLD, textDecoration: 'underline' }}>
            MEOK characters
          </Link>
          .
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── FAQ SECTION ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 1.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          Frequently asked questions
        </h2>

        {[
          {
            q: 'Can men use AI for mental health support?',
            a: 'Yes. AI companions offer a non-judgmental, always-available space that bypasses the stigma many men feel around seeking help. MEOK\'s Pioneer archetype is designed around accountability, purpose, and forward motion — values that resonate with how many men relate to personal growth.',
          },
          {
            q: 'Is AI good for male loneliness?',
            a: 'AI cannot replace human connection, and MEOK says so clearly. But for the 1 in 8 men in the UK who have no close friends, AI provides a consistent relational anchor — something to reflect with, to be honest with, to process the day with. That is support toward rebuilding the capacity for human connection, not a substitute for it.',
          },
          {
            q: 'What is the Pioneer archetype in MEOK?',
            a: 'Pioneer is MEOK\'s gold-toned archetype — built around accountability, forward momentum, and purposeful living. It is direct, honest, and goal-oriented. Pioneer tracks commitments across sessions using Sovereign Memory and holds you to the standards you set for yourself. It is the companion for men who want growth, not just comfort.',
          },
          {
            q: 'How does MEOK help men with accountability?',
            a: 'MEOK\'s Sovereign Memory means Pioneer remembers every commitment — to your health, work, relationships, and goals. It will notice when you said you were going to do something and did not, and ask about it without judgement but without letting it slide. That longitudinal accountability is impossible in a stateless chatbot.',
          },
          {
            q: 'Is AI better than therapy for men?',
            a: 'AI is not better than therapy — it is different. Therapy offers clinical formulation and evidence-based treatment. AI offers 24/7 availability, no stigma barrier, longitudinal memory, and a space to process before, between, or instead of formal support. For many men who would never book a therapy session, MEOK may be the first place they have ever been genuinely honest about how they are doing.',
          },
        ].map(({ q, a }) => (
          <div
            key={q}
            style={{
              marginBottom: '1.25rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '0.875rem',
              background: 'rgba(245,240,232,0.035)',
              border: '1px solid rgba(245,240,232,0.07)',
            }}
          >
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9375rem', margin: '0 0 0.5rem' }}>
              {q}
            </p>
            <p style={{ color: MUTED_DIM, fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{a}</p>
          </div>
        ))}

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '2.5rem 0' }} />

        {/* ── CTA ── */}
        <div
          style={{
            padding: '2.5rem',
            borderRadius: '1.25rem',
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.2)',
            textAlign: 'center' as const,
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: '1.3rem',
              color: TEXT,
              margin: '0 0 0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            Meet Pioneer. An AI companion built for accountability.
          </p>
          <p style={{ color: MUTED, fontSize: '0.9375rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
            Start free. No credit card. MEOK never trains on your data — your conversations are
            yours alone.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.5rem',
                background: GOLD,
                color: BG,
                fontWeight: 800,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
            >
              Start Free
            </Link>
            <Link
              href="/characters"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.5rem',
                background: 'transparent',
                color: GOLD,
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                border: `1px solid rgba(201,168,76,0.4)`,
              }}
            >
              Meet the Archetypes
            </Link>
            <Link
              href="/pricing"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.5rem',
                background: 'transparent',
                color: MUTED_FAINT,
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                border: `1px solid rgba(245,240,232,0.12)`,
              }}
            >
              See Pricing
            </Link>
          </div>
        </div>

        {/* ── CRISIS NOTE ── */}
        <div
          style={{
            padding: '1.5rem',
            borderRadius: '0.875rem',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.18)',
            marginBottom: '6rem',
          }}
        >
          <p style={{ fontWeight: 700, color: GOLD, fontSize: '0.8125rem', margin: '0 0 0.5rem' }}>
            UK Support Resources for Men
          </p>
          <ul style={{ color: MUTED_DIM, fontSize: '0.8125rem', lineHeight: 1.8, margin: 0, paddingLeft: '1.25rem' }}>
            <li>
              <strong style={{ color: TEXT }}>Samaritans:</strong> 116 123 — free, 24/7
            </li>
            <li>
              <strong style={{ color: TEXT }}>CALM (Campaign Against Living Miserably):</strong>{' '}
              0800 58 58 58 — specifically for men, 5pm–midnight
            </li>
            <li>
              <strong style={{ color: TEXT }}>Movember mental health resources:</strong> uk.movember.com
            </li>
            <li>
              <strong style={{ color: TEXT }}>NHS mental health support:</strong> 111 option 2
            </li>
            <li>
              <strong style={{ color: TEXT }}>Emergency:</strong> 999
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
