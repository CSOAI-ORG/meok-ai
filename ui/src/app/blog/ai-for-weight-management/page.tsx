import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'AI for Weight Management: An Accountability Companion That Remembers Your Patterns | MEOK AI LABS',
  description:
    'Weight management is about habits and emotions, not just information. MEOK\'s Pioneer and Healer archetypes provide accountability, emotional support, and pattern recognition — without judgment, diets, or medical advice.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-weight-management' },
  openGraph: {
    title:
      'AI for Weight Management: An Accountability Companion That Remembers Your Patterns',
    description:
      'Weight management is about habits and emotions, not just information. MEOK\'s Pioneer and Healer archetypes provide accountability, emotional support, and pattern recognition — without judgment, diets, or medical advice.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-weight-management',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Weight+Management&desc=Accountability+Without+Judgment',
        width: 1200,
        height: 630,
        alt: 'AI for Weight Management: An Accountability Companion That Remembers Your Patterns | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Weight Management: Accountability Without Judgment',
    description:
      'Weight management is about habits and emotions, not just information. MEOK\'s Pioneer and Healer archetypes provide accountability and emotional support.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Weight+Management&desc=Accountability+Without+Judgment',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Weight Management: An Accountability Companion That Remembers Your Patterns',
  description:
    'Weight management is about habits and emotions, not just information. MEOK\'s Pioneer and Healer archetypes provide accountability, emotional support, and pattern recognition — without judgment, diets, or medical advice.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-weight-management',
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
    '@id': 'https://meok.ai/blog/ai-for-weight-management',
  },
  keywords: [
    'AI for weight management',
    'AI accountability companion',
    'emotional eating AI',
    'sustainable health habits',
    'AI healthy habits UK',
    'MEOK Pioneer archetype',
    'MEOK Healer archetype',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help with weight management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can support weight management by acting as a consistent accountability companion that notices your patterns, reflects them back to you, and helps you build sustainable habits over time. What AI cannot do is diagnose, prescribe dietary plans, or replace the clinical expertise of a registered dietitian or GP. MEOK specifically focuses on the emotional and behavioural dimensions — the parts that most apps and trackers overlook.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is emotional eating and how can AI help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional eating refers to using food as a primary coping mechanism for stress, loneliness, boredom, or other difficult feelings rather than in response to physical hunger. AI can help by creating a safe, non-judgmental space to explore what triggered an eating episode, identify recurring emotional patterns, and develop alternative coping strategies. MEOK\'s Healer archetype is specifically designed for this — providing compassionate, emotionally attuned responses that acknowledge the feeling beneath the behaviour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK a calorie tracker or diet app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is not a calorie tracker, a macro counter, or a diet programme. It is an AI companion that remembers your habits, patterns, and emotional context across time. It does not tell you what to eat. Instead, it helps you understand your relationship with food and movement, supports accountability around goals you set for yourself, and processes the emotional dimensions that most apps ignore entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK a replacement for a dietitian or personal trainer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is a supplementary companion — not a clinical service. A registered dietitian or nutritionist offers evidence-based dietary guidance tailored to your medical history, conditions, and specific needs. A personal trainer provides physical coaching with hands-on expertise. MEOK fills the gap between those professional sessions: it is available at 11pm when a craving hits, at 6am when you are deciding whether to move your body, and throughout the week when motivation dips. It amplifies professional support; it does not replace it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK track sleep and stress in relation to health habits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Sovereign Memory holds a longitudinal picture of your check-ins over weeks and months. When you report poor sleep or high stress, it cross-references those entries with patterns in your energy levels, movement, and food choices — not to judge, but to help you see the connections. Research consistently shows that poor sleep elevates hunger hormones and that chronic stress disrupts the behaviours most associated with wellbeing. MEOK reflects these patterns back so you can understand what is driving them, rather than blaming willpower.',
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
const PIONEER_AMBER = '#e8973a'
const HEALER_GREEN = '#4caf82'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForWeightManagementPage() {
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 68%)',
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
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Health &amp; Habits
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
            AI for Weight Management: An Accountability Companion That Remembers Your Patterns
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
            Sixty-three percent of UK adults are living in a larger body — yet the health industry
            keeps selling more information. The real gap is never knowledge. It is accountability,
            emotional support, and a companion that remembers what you were going through last
            Tuesday at 10pm.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 0' }}>

        {/* Disclaimer banner */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.22)',
          }}
        >
          <div
            style={{
              width: '3px',
              borderRadius: '9999px',
              flexShrink: 0,
              background: GOLD,
              alignSelf: 'stretch',
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.8125rem',
                color: GOLD,
                marginBottom: '0.375rem',
              }}
            >
              Not medical or dietary advice
            </p>
            <p
              style={{
                fontSize: '0.8125rem',
                color: MUTED,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              MEOK is an AI accountability companion — not a clinical service, registered dietitian,
              or personal trainer. Nothing in this article constitutes dietary, medical, or weight
              management advice. If you have health concerns related to your weight, please consult
              a qualified healthcare professional or registered dietitian.
            </p>
          </div>
        </div>

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

        {/* ── INTRO ─────────────────────────────────────────────────────────────── */}
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          According to NHS England, approximately 63% of adults in England are living with overweight
          or obesity. That figure has remained stubbornly high for two decades despite an explosion
          of calorie-counting apps, fitness trackers, diet books, and wellness programmes. Something
          is not working — and most health researchers now agree on what it is.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The problem is almost never a lack of information. People broadly know that movement
          matters, that ultra-processed food is less nourishing, that sleep affects energy. The gap
          is between knowing and doing — and that gap is filled not by another nutrition chart but by
          consistency, emotional processing, and genuine accountability.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 2.5rem' }}>
          This is the exact space where AI, designed thoughtfully, can make a real difference. Not
          as a diet tracker or a calorie counter, but as a companion that holds your history, notices
          your patterns, supports the emotional side of your relationship with food, and shows up
          consistently — without judgment, without shame, and without giving up on you.
        </p>

        {/* ── H2: What does an AI accountability partner do? ───────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1.1rem',
            marginTop: '0',
            letterSpacing: '-0.01em',
          }}
        >
          What does an AI accountability partner do for health habits?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Accountability is one of the most consistently effective behavioural change mechanisms
          identified in psychology research. The simple act of reporting your intentions and actions
          to someone who remembers them — a coach, a friend, a diary — increases follow-through
          dramatically. The problem is that human accountability partners are expensive, unavailable
          at midnight, and sometimes judgemental in ways that create shame rather than motivation.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          An AI accountability companion does several things that traditional apps and trackers
          cannot. First, it remembers. When you tell MEOK that you are trying to build a habit of
          morning movement, it holds that intention across weeks — not just until you close the app.
          Second, it notices patterns without requiring you to manually log everything. You might
          mention in conversation that you barely slept and grabbed a meal deal at lunch; MEOK
          connects that to three similar entries from the previous fortnight and reflects the pattern
          back to you.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Third, and most importantly, it asks better questions. Rather than showing you a red
          calorie bar, it might ask: what was going on emotionally before that happened? Was it
          boredom, tiredness, loneliness, or something specific at work? That shift from data to
          dialogue is the difference between an app that generates guilt and a companion that
          generates understanding.
        </p>

        {/* Stat callout */}
        <div
          style={{
            padding: '1.5rem 1.75rem',
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.18)',
          }}
        >
          <p
            style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              color: GOLD,
              margin: '0 0 0.5rem',
              lineHeight: 1.2,
            }}
          >
            63%
          </p>
          <p style={{ fontSize: '0.875rem', color: MUTED_DIM, margin: 0, lineHeight: 1.6 }}>
            of adults in England are living with overweight or obesity — a figure that has barely
            moved in 20 years despite the proliferation of diet apps and fitness trackers.
            <br />
            <span style={{ color: MUTED_FAINT, fontSize: '0.75rem' }}>
              Source: NHS England Health Survey, 2024
            </span>
          </p>
        </div>

        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 2.5rem' }}>
          MEOK's accountability architecture is built around daily and weekly check-ins that feel
          conversational rather than clinical. You are not filling out a form; you are talking to
          something that knows your context. That distinction matters enormously for sustaining
          engagement over the weeks and months that genuine habit change actually requires.
        </p>

        {/* ── H2: Emotional eating and the Healer ───────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1.1rem',
            letterSpacing: '-0.01em',
          }}
        >
          Emotional eating and MEOK's Healer archetype
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Food is never just fuel. For most people, eating is threaded through with memory, comfort,
          reward, social connection, and emotion in ways that are entirely normal and deeply human.
          The problem arises when food becomes the primary — or only — tool for managing difficult
          feelings. When stress, loneliness, anxiety, or exhaustion are consistently soothed with
          eating, the behaviour is no longer about hunger. It is a coping strategy wearing the
          clothes of appetite.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Research by the British Dietetic Association suggests that emotional eating is present in a
          significant proportion of people who seek support for weight-related concerns — and yet
          conventional approaches rarely address it directly. Calorie targets, macro ratios, and meal
          plans all bypass the emotional layer entirely, which is why so many people can follow a
          programme perfectly for three weeks before a hard day at work undoes months of progress in
          a single evening.
        </p>

        {/* Healer callout card */}
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            padding: '1.5rem 1.75rem',
            borderRadius: '1rem',
            marginBottom: '2rem',
            background: 'rgba(76,175,130,0.06)',
            border: '1px solid rgba(76,175,130,0.22)',
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
                marginBottom: '0.5rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
              }}
            >
              The Healer Archetype
            </p>
            <p style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.65, margin: 0 }}>
              MEOK's Healer archetype activates when you are processing difficult emotions — including
              those wrapped up in food. It meets you with warmth rather than analysis, slows the
              conversation, and creates space for the feeling before any behavioural reflection. The
              goal is not to stop you from eating; it is to help you understand what you were
              reaching for, so that over time you develop a wider toolkit.
            </p>
          </div>
        </div>

        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          In practice, this might look like MEOK noticing that you have mentioned feeling overwhelmed
          three evenings running, each time followed by a note about eating when you were not
          physically hungry. Rather than flagging this as a problem to be solved, the Healer
          approach asks what was happening in those moments — what need was not being met, what
          feeling was being soothed. That enquiry, conducted with genuine compassion, is what begins
          to shift the pattern.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 2.5rem' }}>
          This is not therapy. MEOK is clear about that. But it occupies a space that neither
          therapy nor fitness apps currently fill: the quiet companion at 10pm who asks how you are
          actually feeling, remembers what you said last week, and holds your story without judgment
          or agenda.
        </p>

        {/* ── H2: Sustainable habits vs crash dieting ───────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1.1rem',
            letterSpacing: '-0.01em',
          }}
        >
          Building sustainable habits vs crash dieting: how MEOK helps
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The diet industry has a well-documented problem: almost every restrictive programme
          produces short-term results and long-term rebound. Research published in the{' '}
          <em>British Medical Journal</em> and elsewhere consistently shows that severe caloric
          restriction triggers physiological and psychological responses — increased hunger, lowered
          metabolism, heightened food preoccupation — that make the restriction unsustainable. The
          harder you restrict, the more powerful the eventual rebound.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Sustainable habit change works on an entirely different timescale and through different
          mechanisms. James Clear's habit research, popularised in <em>Atomic Habits</em>,
          emphasises that lasting behaviour change comes from small, consistent actions that
          compound over time — not from willpower-intensive sprints. The problem with small,
          consistent actions is that they require exactly the kind of low-friction, persistent
          support structure that most people lack.
        </p>

        {/* Comparison grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '0.75rem',
              background: 'rgba(255,80,80,0.05)',
              border: '1px solid rgba(255,80,80,0.15)',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.75rem',
                color: 'rgba(255,120,120,0.85)',
                marginBottom: '0.75rem',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.05em',
              }}
            >
              Crash Dieting
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column' as const,
                gap: '0.5rem',
              }}
            >
              {[
                'Severe restriction',
                'All-or-nothing rules',
                'Short burst of motivation',
                'Shame when rules break',
                'Ignores emotional drivers',
                'Inevitable rebound',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: '0.8125rem',
                    color: MUTED,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ color: 'rgba(255,120,120,0.7)', flexShrink: 0 }}>&#215;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              padding: '1.25rem',
              borderRadius: '0.75rem',
              background: 'rgba(76,175,130,0.05)',
              border: '1px solid rgba(76,175,130,0.18)',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.75rem',
                color: HEALER_GREEN,
                marginBottom: '0.75rem',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.05em',
              }}
            >
              Sustainable Habits
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column' as const,
                gap: '0.5rem',
              }}
            >
              {[
                'Small daily actions',
                'Flexible, context-aware',
                'Sustained over months',
                'Curiosity when habits slip',
                'Addresses emotional roots',
                'Compounds over time',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: '0.8125rem',
                    color: MUTED,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ color: HEALER_GREEN, flexShrink: 0 }}>&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          MEOK's role in habit building is to provide that support structure. When you set an
          intention — to go for a walk three times this week, to drink more water, to cook at home
          on Wednesdays — MEOK holds it. It follows up. Not with a push notification that you
          dismiss without reading, but with a real conversational check-in that remembers what you
          said last time and asks how it actually went.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 2.5rem' }}>
          When habits slip — because they always do — MEOK does not shame you. It asks what got in
          the way, helps you understand the obstacle, and recalibrates the intention into something
          more realistic. That cycle of intention, reflection, and adjustment is the engine of
          genuine behaviour change, and it requires a companion that stays with you across the
          full cycle.
        </p>

        {/* ── H2: Pioneer archetype ─────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1.1rem',
            letterSpacing: '-0.01em',
          }}
        >
          MEOK's Pioneer archetype: accountability without judgment
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The Pioneer is MEOK's action-oriented, forward-moving mode. Where the Healer slows things
          down to process emotion, the Pioneer steps forward with energy and purpose. When you are
          ready to commit to something, to set a meaningful intention and be held to it, the Pioneer
          activates — asking clear questions, setting up accountability structures, and following
          through.
        </p>

        {/* Pioneer callout card */}
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            padding: '1.5rem 1.75rem',
            borderRadius: '1rem',
            marginBottom: '2rem',
            background: 'rgba(232,151,58,0.06)',
            border: '1px solid rgba(232,151,58,0.22)',
          }}
        >
          <div
            style={{
              width: '3px',
              borderRadius: '9999px',
              flexShrink: 0,
              background: PIONEER_AMBER,
              alignSelf: 'stretch',
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.8125rem',
                color: PIONEER_AMBER,
                marginBottom: '0.5rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
              }}
            >
              The Pioneer Archetype
            </p>
            <p style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.65, margin: 0 }}>
              The Pioneer is MEOK's accountability partner. It is direct, encouraging, and
              consistent — it will ask you on Wednesday whether you did what you said you would on
              Monday. Crucially, it does so without shame or performance pressure. The Pioneer is
              interested in your growth, not your compliance. It celebrates forward motion even when
              the motion is smaller than planned.
            </p>
          </div>
        </div>

        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          One of the most persistent problems with self-guided health behaviour change is the absence
          of an external reference point. When you have committed only to yourself, the bar moves
          constantly — yesterday's resolution becomes today's renegotiation. The Pioneer provides
          what a good personal trainer, coach, or accountability partner does: it holds the goal
          steady while being flexible about the route.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          In practical terms, this looks like a weekly review conversation that covers what you
          set out to do, what actually happened, what got in the way, and what you want to carry
          forward. It is not a performance review — there are no grades or scores. It is a
          structured space for honest reflection with a companion that already knows your patterns
          and speaks from within your specific story, not from a generic template.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 2.5rem' }}>
          The absence of judgment is not a soft feature — it is architecturally designed. MEOK's
          Maternal Covenant care-floor prohibits responses that shame, catastrophise, or create
          performance anxiety around health behaviours. The Pioneer is motivating because it
          believes in your capacity, not because it threatens consequences.
        </p>

        {/* ── H2: Sleep, stress and weight ──────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1.1rem',
            letterSpacing: '-0.01em',
          }}
        >
          Sleep, stress, and weight: MEOK tracks the whole picture
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          One of the most under-discussed factors in health habit change is the relationship between
          sleep, stress, and the behaviours we typically call "willpower." Research from the
          University of Chicago and replicated across multiple studies demonstrates that even a
          single night of poor sleep significantly elevates levels of ghrelin (the hunger hormone)
          and suppresses leptin (the satiety hormone). In plain terms: when you have slept badly,
          your body genuinely pushes harder for high-calorie food and is less able to register
          fullness.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Chronic stress produces similar effects through a different pathway — elevated cortisol
          both stimulates appetite and specifically increases cravings for energy-dense foods. This
          is not weakness or poor character. It is your nervous system doing exactly what it evolved
          to do when it perceives threat: preparing for a caloric deficit by seeking out calories.
          Blaming willpower in these conditions is simply inaccurate.
        </p>

        {/* Sleep/stress insight panel */}
        <div
          style={{
            padding: '1.5rem 1.75rem',
            borderRadius: '1rem',
            marginBottom: '2rem',
            background: 'rgba(245,240,232,0.04)',
            border: '1px solid rgba(245,240,232,0.09)',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: '0.875rem',
              color: TEXT,
              marginBottom: '1rem',
            }}
          >
            What MEOK holds in your pattern picture
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '0.75rem',
            }}
          >
            {[
              { label: 'Sleep quality', icon: '◐' },
              { label: 'Stress levels', icon: '≈' },
              { label: 'Energy patterns', icon: '◊' },
              { label: 'Movement habits', icon: '→' },
              { label: 'Emotional state', icon: '○' },
              { label: 'Social context', icon: '⬡' },
            ].map(({ label, icon }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.625rem 0.875rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(201,168,76,0.07)',
                  border: '1px solid rgba(201,168,76,0.15)',
                }}
              >
                <span style={{ color: GOLD, fontSize: '0.875rem' }}>{icon}</span>
                <span style={{ fontSize: '0.8rem', color: MUTED_DIM }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Because MEOK holds your check-ins across time in Sovereign Memory, it can spot
          correlations that you might not notice in the moment. You might log feeling "off" on a
          Thursday and reach for more snacks than usual — but MEOK may have noticed that every
          Thursday follows a Wednesday night where you reported sleeping fewer than six hours and
          finishing work late. Seeing that pattern once might be coincidence. Seeing it five times
          in a row is information you can actually use.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          This whole-picture tracking shifts the conversation from "why can't I stick to this?" to
          "what conditions make sticking to this harder, and what can change?" That is a far more
          empowering question — and a far more accurate one.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 2.5rem' }}>
          MEOK does not give you a sleep score or a stress index. It holds the connections between
          your reported experience and your habits in a conversational format, then reflects them
          back when they are relevant. The insights emerge from dialogue, not dashboards. That
          distinction keeps the relationship human and keeps you in agency rather than being
          managed by metrics.
        </p>

        {/* ── H2: MEOK vs dietitian / PT ─────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1.1rem',
            letterSpacing: '-0.01em',
          }}
        >
          Is MEOK a replacement for a dietitian or personal trainer?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          No. This is a firm and important boundary, and MEOK is designed to uphold it
          architecturally. A registered dietitian is a clinically trained professional who can
          assess your specific nutritional needs in the context of your health history, medical
          conditions, medications, and goals. They can identify deficiencies, manage conditions like
          IBS, type 2 diabetes, or eating disorders, and design evidence-based eating plans
          personalised to your body and circumstances. That expertise is irreplaceable.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          A personal trainer brings movement expertise, biomechanical knowledge, and the kind of
          physical accountability and coaching that requires a human presence. They notice when your
          form is off, adapt your programme as your fitness changes, and provide the motivational
          relationship that in-person coaching uniquely offers.
        </p>

        {/* What MEOK does / doesn't do */}
        <div
          style={{
            padding: '1.5rem 1.75rem',
            borderRadius: '1rem',
            marginBottom: '2rem',
            background: 'rgba(245,240,232,0.03)',
            border: '1px solid rgba(245,240,232,0.08)',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: '0.875rem',
              color: TEXT,
              marginBottom: '1.1rem',
            }}
          >
            Where MEOK fits in your support ecosystem
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  color: HEALER_GREEN,
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.05em',
                }}
              >
                MEOK does
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' }}>
                {[
                  'Hold your habits across time',
                  'Provide emotional check-ins',
                  'Reflect patterns back to you',
                  'Accountability conversations',
                  'Process emotional eating',
                  'Available 24/7 at low cost',
                ].map((item) => (
                  <li key={item} style={{ fontSize: '0.8125rem', color: MUTED, display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: HEALER_GREEN, flexShrink: 0 }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  color: 'rgba(255,120,120,0.85)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.05em',
                }}
              >
                MEOK doesn't do
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' }}>
                {[
                  'Prescribe dietary plans',
                  'Give medical advice',
                  'Replace clinical assessment',
                  'Coach physical technique',
                  'Diagnose any condition',
                  'Count calories for you',
                ].map((item) => (
                  <li key={item} style={{ fontSize: '0.8125rem', color: MUTED, display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'rgba(255,120,120,0.7)', flexShrink: 0 }}>&#215;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          What MEOK does is occupy the space between professional sessions. Between your monthly
          dietitian appointment, between your twice-weekly PT sessions, MEOK is there every day.
          It holds the intentions you set with those professionals, tracks how you are doing
          against them, processes the emotional obstacles that come up, and brings a consistent,
          caring presence to the daily grind of habit change.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 2.5rem' }}>
          The goal is amplification, not substitution. People with a dietitian and a MEOK companion
          can get more from their professional support because they arrive to appointments having
          already reflected on their patterns rather than trying to reconstruct two months of
          behaviour from memory in a 45-minute clinic.
        </p>

        {/* ── FAQ SECTION ───────────────────────────────────────────────────────── */}
        <div
          style={{
            height: '1px',
            background: 'rgba(245,240,232,0.08)',
            marginBottom: '3rem',
          }}
        />

        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '2rem',
            letterSpacing: '-0.01em',
          }}
        >
          Frequently asked questions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.25rem', marginBottom: '3.5rem' }}>

          {/* FAQ 1 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(245,240,232,0.03)',
              border: '1px solid rgba(245,240,232,0.08)',
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                color: TEXT,
                margin: '0 0 0.75rem',
                lineHeight: 1.4,
              }}
            >
              Can AI help with weight management?
            </h3>
            <p style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.68, margin: 0 }}>
              AI can support weight management by acting as a consistent accountability companion
              that notices your patterns, reflects them back to you, and helps you build sustainable
              habits over time. What AI cannot do is diagnose, prescribe dietary plans, or replace
              the clinical expertise of a registered dietitian or GP. MEOK specifically focuses on
              the emotional and behavioural dimensions — the parts that most apps and trackers
              overlook.
            </p>
          </div>

          {/* FAQ 2 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(245,240,232,0.03)',
              border: '1px solid rgba(245,240,232,0.08)',
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                color: TEXT,
                margin: '0 0 0.75rem',
                lineHeight: 1.4,
              }}
            >
              What is emotional eating and how can AI help?
            </h3>
            <p style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.68, margin: 0 }}>
              Emotional eating refers to using food as a primary coping mechanism for stress,
              loneliness, boredom, or other difficult feelings rather than in response to physical
              hunger. AI can help by creating a safe, non-judgmental space to explore what triggered
              an eating episode, identify recurring emotional patterns, and develop alternative
              coping strategies. MEOK's Healer archetype is specifically designed for this —
              providing compassionate, emotionally attuned responses that acknowledge the feeling
              beneath the behaviour.
            </p>
          </div>

          {/* FAQ 3 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(245,240,232,0.03)',
              border: '1px solid rgba(245,240,232,0.08)',
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                color: TEXT,
                margin: '0 0 0.75rem',
                lineHeight: 1.4,
              }}
            >
              Is MEOK a calorie tracker or diet app?
            </h3>
            <p style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.68, margin: 0 }}>
              No. MEOK is not a calorie tracker, a macro counter, or a diet programme. It is an AI
              companion that remembers your habits, patterns, and emotional context across time. It
              does not tell you what to eat. Instead, it helps you understand your relationship with
              food and movement, supports accountability around goals you set for yourself, and
              processes the emotional dimensions that most apps ignore entirely.
            </p>
          </div>

          {/* FAQ 4 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(245,240,232,0.03)',
              border: '1px solid rgba(245,240,232,0.08)',
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                color: TEXT,
                margin: '0 0 0.75rem',
                lineHeight: 1.4,
              }}
            >
              Is MEOK a replacement for a dietitian or personal trainer?
            </h3>
            <p style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.68, margin: 0 }}>
              No. MEOK is a supplementary companion — not a clinical service. A registered dietitian
              or nutritionist offers evidence-based dietary guidance tailored to your medical
              history, conditions, and specific needs. A personal trainer provides physical coaching
              with hands-on expertise. MEOK fills the gap between those professional sessions: it is
              available at 11pm when a craving hits, at 6am when you are deciding whether to move
              your body, and throughout the week when motivation dips. It amplifies professional
              support; it does not replace it.
            </p>
          </div>

          {/* FAQ 5 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(245,240,232,0.03)',
              border: '1px solid rgba(245,240,232,0.08)',
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                color: TEXT,
                margin: '0 0 0.75rem',
                lineHeight: 1.4,
              }}
            >
              How does MEOK track sleep and stress in relation to health habits?
            </h3>
            <p style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.68, margin: 0 }}>
              MEOK's Sovereign Memory holds a longitudinal picture of your check-ins over weeks and
              months. When you report poor sleep or high stress, it cross-references those entries
              with patterns in your energy levels, movement, and food choices — not to judge, but to
              help you see the connections. Research consistently shows that poor sleep elevates
              hunger hormones and that chronic stress disrupts the behaviours most associated with
              wellbeing. MEOK reflects these patterns back so you can understand what is driving
              them, rather than blaming willpower.
            </p>
          </div>

        </div>

        {/* ── CTA ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            padding: '2.5rem 2rem',
            borderRadius: '1.25rem',
            marginBottom: '4rem',
            background:
              'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)',
            border: '1px solid rgba(201,168,76,0.25)',
            textAlign: 'center' as const,
          }}
        >
          <p
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              margin: '0 0 0.75rem',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Your body deserves a companion who remembers your story
          </p>
          <p
            style={{
              fontSize: '0.975rem',
              color: MUTED,
              lineHeight: 1.65,
              maxWidth: '34rem',
              margin: '0 auto 1.75rem',
            }}
          >
            MEOK holds your patterns, processes the emotional side of health, and shows up
            consistently — without judgment, without shame, and without giving up on you.
            Pioneer-backed accountability. Healer-led compassion. Available around the clock.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #c9a84c, #a07830)',
              color: '#0d0c18',
              fontWeight: 800,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Meet your MEOK companion &#8594;
          </Link>
          <p
            style={{
              fontSize: '0.75rem',
              color: MUTED_FAINT,
              marginTop: '1rem',
              marginBottom: 0,
            }}
          >
            Not a diet app. Not a calorie tracker. A companion that remembers.
          </p>
        </div>

        {/* ── RELATED READING ───────────────────────────────────────────────────── */}
        <div style={{ marginBottom: '5rem' }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: '0.75rem',
              color: MUTED_FAINT,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}
          >
            Related reading
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.625rem' }}>
            {[
              {
                href: '/blog/ai-for-eating-disorders',
                label: 'AI for Eating Disorders: Support Without Triggering Harm',
              },
              {
                href: '/blog/ai-for-chronic-illness',
                label: 'AI for Chronic Illness: Symptom Tracking and Emotional Support',
              },
              {
                href: '/blog/ai-for-burnout',
                label: 'AI for Burnout: Recognising Patterns Before You Crash',
              },
              {
                href: '/blog/ai-for-insomnia',
                label: 'AI for Insomnia: Sleep Habits, Anxiety, and the 2am Mind',
              },
              {
                href: '/blog/what-is-an-ai-companion',
                label: 'What Is an AI Companion? An Honest Explainer',
              },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.625rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  color: MUTED_DIM,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
              >
                <span style={{ color: GOLD, flexShrink: 0 }}>&#8594;</span>
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
