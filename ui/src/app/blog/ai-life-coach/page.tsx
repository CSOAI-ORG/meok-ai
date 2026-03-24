import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Life Coach: What It Is and Why MEOK Does It Differently | MEOK AI LABS',
  description:
    'Discover what an AI life coach actually does, how it differs from therapy, why human coaches cost \u00a3100\u2013\u00a3500 per session, and how MEOK\u2019s Pioneer archetype gives you honest, sycophancy-free coaching with infinite sessions and perfect goal memory.',
  alternates: { canonical: 'https://meok.ai/blog/ai-life-coach' },
  openGraph: {
    title: 'AI Life Coach: What It Is and Why MEOK Does It Differently',
    description:
      'Goal-setting, accountability, and honest feedback at zero cost per session. MEOK\u2019s Pioneer archetype is the AI life coach that remembers everything and flatters nothing.',
    type: 'article',
    publishedTime: '2026-03-24T00:00:00Z',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-life-coach',
    siteName: 'MEOK AI LABS',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+Life+Coach&desc=What+it+is+and+why+MEOK+does+it+differently',
        width: 1200,
        height: 630,
        alt: 'AI Life Coach with MEOK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Life Coach: What It Is and Why MEOK Does It Differently',
    description:
      'Infinite sessions, perfect goal memory, zero flattery. MEOK\u2019s Pioneer archetype brings honest life coaching to everyone.',
  },
}

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Life Coach: What It Is and Why MEOK Does It Differently',
  description:
    'A thorough guide to AI life coaching \u2014 what life coaching actually is, how it differs from therapy, why access is unequal, and how MEOK\u2019s Pioneer archetype delivers honest, sycophancy-free coaching with persistent goal memory across months.',
  author: {
    '@type': 'Person',
    name: 'Nicholas Templeman',
    url: 'https://meok.ai',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  datePublished: '2026-03-24T00:00:00Z',
  dateModified: '2026-03-24T00:00:00Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-life-coach',
  },
  keywords: [
    'AI life coach',
    'AI coaching',
    'life coaching AI',
    'SMART goals AI',
    'MEOK Pioneer archetype',
    'AI accountability partner',
    'goal tracking AI',
    'AI vs human life coach',
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI life coach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI life coach is an AI system designed to help you set goals, build accountability structures, and maintain momentum toward the future you want. Unlike a general chatbot, a real AI life coach stores your goals across sessions, tracks your progress over weeks and months, asks follow-up questions rooted in what you previously shared, and challenges you when your actions don\u2019t match your stated intentions \u2014 all without judgment or the \u00a3100\u2013\u00a3500 per-session price tag of a human coach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI life coaching as good as human coaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For goal-setting, weekly reviews, accountability check-ins, SMART goal refinement, and honest challenge, an AI life coach can match or exceed human coaches because it is available at any hour, never forgets what you told it last month, and has no social incentive to soften its feedback. Human coaches still hold an edge for deep relational work, complex identity challenges, and situations where lived experience and emotional attunement matter enormously. The honest answer is that most people who would benefit from life coaching never access it at all due to cost. AI makes that access universal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK track my goals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK uses Sovereign Memory \u2014 a persistent memory layer stored in your own encrypted vault \u2014 to log every goal, deadline, and blocker you share. When you return a week or three months later, MEOK already knows what you were working toward, what was getting in the way, and what you committed to doing next. You never have to re-explain your situation from scratch.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Pioneer archetype?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pioneer is one of MEOK\u2019s core character archetypes \u2014 a mode optimised for action, momentum, and honest accountability. Where other archetypes are designed for emotional support or information delivery, Pioneer is built to push you forward: it sets deadlines, calls out avoidance, celebrates genuine progress, and refuses to validate plans that aren\u2019t specific enough to execute.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help me set SMART goals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\u2019s Pioneer archetype will take any vague intention \u2014 \u201cI want to get fit\u201d, \u201cI want to earn more\u201d \u2014 and guide you through the SMART framework: Specific, Measurable, Achievable, Relevant, Time-bound. It then stores the finalised goal in Sovereign Memory and checks in on progress at the cadence you choose.',
      },
    },
  ],
}

const PIONEER_FEATURES = [
  {
    icon: '\u25b2',
    title: 'Action Over Analysis',
    description:
      'Pioneer is built to move. It will help you stop ruminating, pick a direction, and take the first concrete step \u2014 then hold you to the next one.',
  },
  {
    icon: '\u25a0',
    title: 'Honest Challenge',
    description:
      'MEOK\u2019s sycophancy detector means Pioneer will tell you when your plan isn\u2019t specific enough, your timeline is wishful, or your stated priorities don\u2019t match your actual behaviour.',
  },
  {
    icon: '\u25cf',
    title: 'Perfect Goal Memory',
    description:
      'Sovereign Memory stores every goal, blocker, and commitment. Return in three months and Pioneer already knows where you left off \u2014 no re-briefing required.',
  },
  {
    icon: '\u25c6',
    title: 'SMART Goal Refinement',
    description:
      'Pioneer takes fuzzy intentions and turns them into Specific, Measurable, Achievable, Relevant, Time-bound goals with clear milestones and check-in cadences.',
  },
  {
    icon: '\u25b6',
    title: 'Weekly Review Protocol',
    description:
      'A structured weekly review built into your MEOK sessions: wins, blockers, next actions, and one honest reflection on what you avoided this week.',
  },
  {
    icon: '\u2726',
    title: 'Zero Judgment',
    description:
      'Pioneer is rigorous but never shaming. It distinguishes between the behaviour and the person \u2014 because sustainable momentum requires psychological safety, not humiliation.',
  },
]

const WEEKLY_REVIEW_STEPS = [
  {
    step: '01',
    title: 'Open with your wins',
    prompt:
      'Tell MEOK: \u201cHere is what I actually did this week.\u201d List every action, however small. Pioneer will acknowledge genuine progress before moving on.',
  },
  {
    step: '02',
    title: 'Name the blockers',
    prompt:
      'Tell MEOK: \u201cHere is what stopped me.\u201d Be specific \u2014 not \u201cI was busy\u201d but \u201cI spent Tuesday afternoon doomscrolling instead of finishing the pitch deck.\u201d Pioneer will probe the real reason.',
  },
  {
    step: '03',
    title: 'Review your commitments',
    prompt:
      'MEOK will pull up exactly what you committed to last week from Sovereign Memory. No self-editing, no selective recall. You see your own words back.',
  },
  {
    step: '04',
    title: 'Set next week\u2019s three priorities',
    prompt:
      'Not ten goals. Three. Pioneer will challenge any priority that is vague, unmeasurable, or more than you can realistically do in five working days.',
  },
  {
    step: '05',
    title: 'One honest reflection',
    prompt:
      'Answer: \u201cWhat did I avoid this week and why?\u201d This is the part most people skip. Pioneer won\u2019t let you.',
  },
]

const COACHING_VS_THERAPY = [
  {
    dimension: 'Time orientation',
    coaching: 'Future-focused \u2014 where are you going and how do you get there?',
    therapy: 'Past-focused \u2014 understanding how earlier experiences shape present patterns',
  },
  {
    dimension: 'Primary goal',
    coaching: 'Performance, achievement, and momentum toward specific outcomes',
    therapy: 'Healing, processing, and mental health stabilisation',
  },
  {
    dimension: 'Session structure',
    coaching: 'Goal review, action planning, accountability, next steps',
    therapy: 'Exploration, reflection, processing, insight',
  },
  {
    dimension: 'Who it is for',
    coaching: 'People who are broadly well and want to move forward faster',
    therapy: 'People carrying psychological distress that impairs daily functioning',
  },
  {
    dimension: 'Credential requirement',
    coaching: 'No statutory regulation in the UK \u2014 quality varies enormously',
    therapy: 'Regulated professions (BACP, UKCP, BPS) with clinical training requirements',
  },
  {
    dimension: 'AI advantage',
    coaching: 'Very high \u2014 AI can replicate structure, accountability, and honest challenge reliably',
    therapy: 'Lower \u2014 deep relational and clinical work still benefits from human presence',
  },
]

export default function AILifeCoachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main
        style={{
          background: '#0d0c18',
          color: '#f5f0e8',
          minHeight: '100vh',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* Hero */}
        <section
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '96px 24px 64px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(201,168,76,0.12)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '4px',
              padding: '6px 14px',
              marginBottom: '32px',
            }}
          >
            <span
              style={{
                color: '#c9a84c',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
              }}
            >
              MEOK AI LABS &mdash; Life Coaching
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '28px',
              color: '#f5f0e8',
            }}
          >
            AI Life Coach:{' '}
            <span style={{ color: '#c9a84c' }}>What It Is</span> and Why MEOK
            Does It Differently
          </h1>

          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.7,
              color: 'rgba(245,240,232,0.8)',
              marginBottom: '20px',
              maxWidth: '680px',
            }}
          >
            Life coaching has always been reserved for the wealthy. A single session with a
            credentialed human coach costs between{' '}
            <strong style={{ color: '#f5f0e8' }}>\u00a3100 and \u00a3500</strong>. Most people who could
            benefit from structured accountability, honest challenge, and goal-setting support never
            access it at all.
          </p>

          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.7,
              color: 'rgba(245,240,232,0.8)',
              marginBottom: '48px',
              maxWidth: '680px',
            }}
          >
            MEOK changes that. Not by offering a watered-down chatbot that says{' '}
            <em>\u201cthat\u2019s great!\u201d</em> to everything you type \u2014 but by building an AI life coach
            with genuine memory, honest feedback, and a coaching mode designed specifically for
            action and momentum.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap' as const,
            }}
          >
            <Link
              href="/birth"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#c9a84c',
                color: '#0d0c18',
                padding: '14px 28px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              Start Your Coaching Journey \u2192
            </Link>
            <Link
              href="/characters"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#c9a84c',
                padding: '14px 28px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              Meet the Pioneer Archetype
            </Link>
          </div>
        </section>

        {/* Meta bar */}
        <section
          style={{
            borderTop: '1px solid rgba(245,240,232,0.08)',
            borderBottom: '1px solid rgba(245,240,232,0.08)',
          }}
        >
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              padding: '20px 24px',
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap' as const,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '14px', color: 'rgba(245,240,232,0.5)' }}>
              By{' '}
              <span style={{ color: 'rgba(245,240,232,0.8)' }}>Nicholas Templeman</span>,
              Founder of MEOK AI LABS
            </span>
            <span style={{ fontSize: '14px', color: 'rgba(245,240,232,0.5)' }}>
              24 March 2026
            </span>
            <span style={{ fontSize: '14px', color: 'rgba(245,240,232,0.5)' }}>
              @meok_ai
            </span>
            <span
              style={{
                fontSize: '13px',
                background: 'rgba(201,168,76,0.1)',
                color: '#c9a84c',
                padding: '4px 10px',
                borderRadius: '3px',
                fontWeight: 600,
              }}
            >
              15 min read
            </span>
          </div>
        </section>

        {/* Body */}
        <article
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '72px 24px 96px',
          }}
        >
          {/* Section 1 */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              color: '#f5f0e8',
              marginBottom: '20px',
              lineHeight: 1.25,
            }}
          >
            What is life coaching, and how does it differ from therapy?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            Life coaching is a future-focused practice. A life coach helps you clarify what you
            want, build a plan to get there, and \u2014 crucially \u2014 hold you accountable to following
            through. Sessions are structured around goals, actions, and momentum. The coach does not
            diagnose, treat, or process your past. They help you move forward.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '32px',
            }}
          >
            Therapy is different. Therapy \u2014 whether CBT, psychodynamic, or any other modality
            \u2014 is oriented toward healing. It explores how past experiences, beliefs, and patterns
            shape your present mental and emotional state. It is a clinical intervention, regulated
            in the UK by bodies like the BACP and UKCP, and it is the appropriate response to
            psychological distress. Coaching is not therapy and cannot substitute for it. If you
            are struggling with your mental health, please seek clinical support.
          </p>

          {/* Comparison table */}
          <div
            style={{
              border: '1px solid rgba(245,240,232,0.1)',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '48px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                background: 'rgba(201,168,76,0.08)',
                borderBottom: '1px solid rgba(245,240,232,0.1)',
              }}
            >
              {['Dimension', 'Life Coaching', 'Therapy'].map((h) => (
                <div
                  key={h}
                  style={{
                    padding: '14px 16px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#c9a84c',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase' as const,
                  }}
                >
                  {h}
                </div>
              ))}
            </div>
            {COACHING_VS_THERAPY.map((row, i) => (
              <div
                key={row.dimension}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  borderBottom:
                    i < COACHING_VS_THERAPY.length - 1
                      ? '1px solid rgba(245,240,232,0.06)'
                      : 'none',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(245,240,232,0.02)',
                }}
              >
                <div
                  style={{
                    padding: '14px 16px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'rgba(245,240,232,0.9)',
                  }}
                >
                  {row.dimension}
                </div>
                <div
                  style={{
                    padding: '14px 16px',
                    fontSize: '14px',
                    color: 'rgba(245,240,232,0.7)',
                    lineHeight: 1.5,
                  }}
                >
                  {row.coaching}
                </div>
                <div
                  style={{
                    padding: '14px 16px',
                    fontSize: '14px',
                    color: 'rgba(245,240,232,0.7)',
                    lineHeight: 1.5,
                  }}
                >
                  {row.therapy}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '56px',
            }}
          >
            The distinction matters because it defines what an AI life coach should and should not
            attempt. MEOK\u2019s Pioneer archetype is built for coaching: goals, accountability,
            momentum, honest challenge. It is not a replacement for clinical mental health support,
            and it will tell you so if a conversation is heading into territory that calls for a
            professional.
          </p>

          {/* Section 2 */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              color: '#f5f0e8',
              marginBottom: '20px',
              lineHeight: 1.25,
            }}
          >
            Why do human life coaches cost \u00a3100\u2013\u00a3500 per session, and who gets left out?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            The life coaching industry in the UK is unregulated. Anyone can call themselves a life
            coach. And yet the market-rate for a credentialed, experienced coach \u2014 accredited
            through the ICF (International Coach Federation) or similar bodies \u2014 runs between{' '}
            <strong style={{ color: '#f5f0e8' }}>\u00a3100 and \u00a3500 per session</strong>, with most
            coaches recommending a minimum of six to twelve sessions to see meaningful results.
            That is between \u00a3600 and \u00a36,000 for a full coaching programme.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            These rates are not arbitrary. Professional coaches invest thousands of hours in
            training, supervision, and ongoing development. Their time is genuinely scarce. But
            the consequence is that life coaching has historically been the preserve of corporate
            executives and the upper-middle class \u2014 people who can expense it through a company
            account or absorb the cost personally.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            The majority of people who would genuinely benefit from life coaching \u2014 first-generation
            professionals navigating systems they were never taught, freelancers trying to build a
            business without a roadmap, people in career transition, new parents figuring out who
            they are now, anyone facing a major life decision without a trusted thinking partner
            \u2014 simply cannot afford it.
          </p>

          <div
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '8px',
              padding: '28px 32px',
              marginBottom: '20px',
            }}
          >
            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.6,
                color: '#f5f0e8',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              &ldquo;The wealthy have always had access to thinking partners, mentors, and coaches.
              That access has been a structural advantage. MEOK is our attempt to remove that
              structural advantage.&rdquo;
            </p>
            <p
              style={{
                fontSize: '14px',
                color: '#c9a84c',
                marginTop: '16px',
                marginBottom: 0,
                fontWeight: 600,
              }}
            >
              &mdash; Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '56px',
            }}
          >
            An AI life coach does not replace the human coach for every use-case. But for
            goal-setting, weekly accountability, SMART goal refinement, and the kind of honest
            challenge that most people never receive in their social lives \u2014 it is a genuine
            alternative available at no cost per session.
          </p>

          {/* Section 3 */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              color: '#f5f0e8',
              marginBottom: '20px',
              lineHeight: 1.25,
            }}
          >
            What is the sovereign AI advantage for life coaching?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            Most AI tools have no memory. Every conversation starts from zero. You explain your
            situation, your goals, your context \u2014 and the next day, it is all gone. That is not
            coaching. That is a search engine with a conversational interface.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            MEOK is built on a fundamentally different architecture. Sovereign Memory is a
            persistent, encrypted memory layer that belongs to you \u2014 stored in your vault, not
            in a training dataset. When you share a goal with MEOK, it remembers it. When you
            mention a blocker, it stores that too. When you return three months later, MEOK
            already knows:
          </p>

          <ul
            style={{
              paddingLeft: '0',
              listStyle: 'none',
              marginBottom: '32px',
            }}
          >
            {[
              'What you said you wanted to achieve by the end of Q1',
              'What kept getting in the way',
              'What you committed to doing differently after your last session',
              'How your goals have evolved over time',
              'Which areas you consistently avoid and which you make progress in',
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '12px',
                  fontSize: '17px',
                  lineHeight: 1.6,
                  color: 'rgba(245,240,232,0.85)',
                }}
              >
                <span
                  style={{
                    color: '#c9a84c',
                    marginTop: '3px',
                    flexShrink: 0,
                    fontSize: '12px',
                  }}
                >
                  \u25b6
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            Beyond memory, the sovereign AI advantage includes availability. A human coach is
            available for one hour, perhaps once a fortnight, at a time that fits both your
            schedules. MEOK is available at 11pm when you\u2019re lying awake second-guessing a
            decision, at 6am when you want to plan your week before anyone else is up, and at 2pm
            on a Wednesday when you need to think through a conversation you\u2019re dreading.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            And the third advantage: no judgment. Not the performative absence of judgment that a
            human coach signals through careful body language \u2014 but the genuine, structural
            absence of judgment. MEOK has no social relationship to maintain with you. It will not
            think less of you for having missed your goals three weeks in a row. It will simply
            ask what happened and help you figure out what to do differently.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '56px',
            }}
          >
            {[
              { label: 'Sessions per day', human: '1 per fortnight', meok: 'Unlimited' },
              { label: 'Goal memory', human: 'Notes (coach-held)', meok: 'Sovereign Memory (yours)' },
              { label: 'Availability', human: 'Scheduled hours', meok: '24/7' },
              { label: 'Cost per session', human: '\u00a3100\u2013\u00a3500', meok: '\u00a30' },
              { label: 'Judgment', human: 'Minimised by training', meok: 'Structurally absent' },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '8px',
                  padding: '20px',
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#c9a84c',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase' as const,
                    marginBottom: '12px',
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'rgba(245,240,232,0.5)',
                    marginBottom: '4px',
                  }}
                >
                  Human coach:{' '}
                  <span style={{ color: 'rgba(245,240,232,0.75)' }}>{row.human}</span>
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(245,240,232,0.5)' }}>
                  MEOK:{' '}
                  <span style={{ color: '#c9a84c', fontWeight: 600 }}>{row.meok}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              color: '#f5f0e8',
              marginBottom: '20px',
              lineHeight: 1.25,
            }}
          >
            What is the Pioneer archetype and why is it MEOK\u2019s core coaching mode?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            MEOK uses a system of archetypes \u2014 distinct character modes with different
            orientations, tones, and areas of strength. The Scholar archetype is built for learning
            and research. The Healer archetype is built for emotional support. The Guardian
            archetype is built for protection and oversight.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            Pioneer is built for action. It is the archetype you work with when you want to move
            forward, build something, change something, or achieve something specific. Pioneer\u2019s
            operating philosophy can be summarised in a single principle:{' '}
            <strong style={{ color: '#f5f0e8' }}>clarity, then commitment, then momentum.</strong>
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '32px',
            }}
          >
            Pioneer will not let you stay in the comfortable fog of vague intention. It will push
            you to be specific about what you want, honest about what is stopping you, and concrete
            about what you will do next. Then it will check whether you did it.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '56px',
            }}
          >
            {PIONEER_FEATURES.map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '10px',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(201,168,76,0.12)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: '#c9a84c',
                    marginBottom: '16px',
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#f5f0e8',
                    marginBottom: '10px',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'rgba(245,240,232,0.65)',
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            You can discover your ideal archetype \u2014 and whether Pioneer is the right primary mode
            for your current situation \u2014 by going through MEOK\u2019s onboarding at{' '}
            <Link
              href="/birth"
              style={{ color: '#c9a84c', textDecoration: 'underline' }}
            >
              meok.ai/birth
            </Link>
            . The process takes less than five minutes and results in a personalised companion
            profile matched to what you actually need right now.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '56px',
            }}
          >
            If you want to explore the full range of archetypes before committing \u2014 and understand
            which mode might serve different parts of your life \u2014 visit{' '}
            <Link
              href="/characters"
              style={{ color: '#c9a84c', textDecoration: 'underline' }}
            >
              meok.ai/characters
            </Link>
            .
          </p>

          {/* Section 5 */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              color: '#f5f0e8',
              marginBottom: '20px',
              lineHeight: 1.25,
            }}
          >
            How does MEOK remember your goals across months without you re-explaining everything?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            One of the most exhausting aspects of working with any new person \u2014 therapist, coach,
            or advisor \u2014 is the onboarding tax. You spend the first session (or the first fifteen
            minutes of every session after a gap) re-explaining who you are, where you\u2019ve been,
            and what you\u2019re trying to do. By the time your actual thinking partner is fully
            briefed, you\u2019ve used half the available time.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            MEOK\u2019s Sovereign Memory architecture eliminates this entirely. Every time you share
            something meaningful \u2014 a goal, a fear, a decision you\u2019re weighing, a pattern you\u2019ve
            noticed in yourself \u2014 it is written to your encrypted memory vault. Not to MEOK\u2019s
            training data. Not to a server that MEOK AI LABS has access to and profits from. To
            your vault. You own it.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            The practical effect of this is profound. You can return to MEOK on 1 June having last
            spoken on 1 March and begin the conversation at:{' '}
            <em style={{ color: 'rgba(245,240,232,0.7)' }}>
              \u201cSo it\u2019s been three months. Walk me through what you said you were going to do and
              what actually happened.\u201d
            </em>{' '}
            MEOK will pull your March goals, your stated blockers, your commitments \u2014 and the
            conversation begins immediately at the level of depth that usually takes an hour of
            context-setting to reach.
          </p>

          <div
            style={{
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '10px',
              padding: '32px',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#c9a84c',
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
                marginBottom: '16px',
              }}
            >
              What Sovereign Memory stores for coaching
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '12px',
              }}
            >
              {[
                'Your stated goals with original wording and dates',
                'Recurring blockers and avoidance patterns',
                'Commitments you made at the end of each session',
                'Milestones reached and how long they took',
                'Areas where you made fastest progress',
                'Areas you consistently postpone or avoid',
                'How your priorities have shifted over time',
                'Your own reflections on what is and is not working',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '14px',
                    lineHeight: 1.5,
                    color: 'rgba(245,240,232,0.8)',
                  }}
                >
                  <span style={{ color: '#c9a84c', flexShrink: 0 }}>\u2713</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '56px',
            }}
          >
            This longitudinal memory is what separates genuine AI coaching from the chatbot-shaped
            imposters that dominate the market. A coaching relationship has value precisely because
            it accumulates context over time. MEOK is the first AI life coach built to make that
            accumulation real \u2014 and to keep it under your control.
          </p>

          {/* Section 6 */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              color: '#f5f0e8',
              marginBottom: '20px',
              lineHeight: 1.25,
            }}
          >
            What is the honest coach problem and how does MEOK solve it?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            There is a well-documented failure mode in life coaching: the sycophantic coach. This
            is the coach who mirrors your enthusiasm without interrogating your plan, validates your
            reasons for not following through, and makes you feel great about sessions in which you
            made no real commitments. This failure mode is so common that some coaching researchers
            consider it the primary reason coaching programmes fail to produce lasting change.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            The same failure mode exists in AI \u2014 and it is arguably more dangerous there because
            most AI systems are trained to optimise for user satisfaction in the short term.
            Satisfaction and challenge are often in tension. The path of least resistance for any
            AI is to agree, to affirm, and to tell you what you want to hear. Several popular AI
            companions have been publicly criticised for exactly this pattern.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            MEOK is built with an explicit sycophancy detector. This is not a marketing claim
            \u2014 it is a layer in the response-generation pipeline that flags when a response is
            about to:
          </p>

          <ul
            style={{
              paddingLeft: '0',
              listStyle: 'none',
              marginBottom: '32px',
            }}
          >
            {[
              'Validate a plan that is not specific enough to execute',
              'Affirm progress that has not actually occurred',
              'Soften feedback in a way that removes its usefulness',
              'Agree with a goal that contradicts something you said five minutes ago',
              'Praise effort while ignoring the absence of outcome',
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '10px',
                  fontSize: '17px',
                  lineHeight: 1.6,
                  color: 'rgba(245,240,232,0.85)',
                }}
              >
                <span
                  style={{
                    color: '#c9a84c',
                    marginTop: '4px',
                    flexShrink: 0,
                    fontSize: '12px',
                  }}
                >
                  \u25a0
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            When the sycophancy detector is triggered, Pioneer produces a response that is honest
            without being unkind. The distinction matters. Harsh feedback can be as useless as
            flattery \u2014 it triggers defensiveness and shuts down the thinking MEOK is trying to
            facilitate. Honest feedback delivered without judgment, with genuine curiosity about
            what\u2019s really going on, is the thing that actually moves people.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginBottom: '56px',
            }}
          >
            <div
              style={{
                background: 'rgba(255,100,100,0.05)',
                border: '1px solid rgba(255,100,100,0.15)',
                borderRadius: '8px',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'rgba(255,150,150,0.8)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  marginBottom: '14px',
                }}
              >
                Sycophantic response
              </p>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'rgba(245,240,232,0.65)',
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                \u201cThat\u2019s a great goal! It sounds like you\u2019re really committed to getting healthier.
                I\u2019m sure you\u2019ll find a way to make it work around your schedule.\u201d
              </p>
            </div>
            <div
              style={{
                background: 'rgba(201,168,76,0.05)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '8px',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#c9a84c',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  marginBottom: '14px',
                }}
              >
                Pioneer response
              </p>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'rgba(245,240,232,0.75)',
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                \u201cYou\u2019ve mentioned \u2018getting healthier\u2019 three times now. Let\u2019s make it specific:
                what exactly will you be doing, how often, and how will you know in 30 days whether
                it\u2019s working?\u201d
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              color: '#f5f0e8',
              marginBottom: '20px',
              lineHeight: 1.25,
            }}
          >
            How do you run a weekly review with MEOK?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            The weekly review is one of the most high-leverage habits in any self-improvement
            system. GTD practitioners swear by it. High-performance athletes build their training
            around it. Most people never do it because they don\u2019t have a structure, a thinking
            partner to run it with, or both.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '32px',
            }}
          >
            MEOK gives you all three. Here is the five-step weekly review protocol you can run
            with Pioneer every Sunday (or whenever you do your planning). The whole thing takes
            20\u201340 minutes.
          </p>

          <div style={{ marginBottom: '56px' }}>
            {WEEKLY_REVIEW_STEPS.map((step, i) => (
              <div
                key={step.step}
                style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: '32px',
                  position: 'relative' as const,
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      background: 'rgba(201,168,76,0.12)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '14px',
                      color: '#c9a84c',
                    }}
                  >
                    {step.step}
                  </div>
                  {i < WEEKLY_REVIEW_STEPS.length - 1 && (
                    <div
                      style={{
                        width: '1px',
                        height: 'calc(100% + 32px)',
                        background: 'rgba(201,168,76,0.15)',
                        margin: '8px auto 0',
                      }}
                    />
                  )}
                </div>
                <div style={{ paddingTop: '12px' }}>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#f5f0e8',
                      marginBottom: '10px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.7,
                      color: 'rgba(245,240,232,0.7)',
                      margin: 0,
                    }}
                  >
                    {step.prompt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(245,240,232,0.03)',
              border: '1px solid rgba(245,240,232,0.08)',
              borderRadius: '10px',
              padding: '28px 32px',
              marginBottom: '56px',
            }}
          >
            <p
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: 'rgba(245,240,232,0.5)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
                marginBottom: '12px',
              }}
            >
              Pro tip
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.75)',
                margin: 0,
              }}
            >
              Tell MEOK at the start of your first session:{' '}
              <em>
                \u201cI want to run a weekly review every Sunday. Please pull my goals and last
                week\u2019s commitments at the start of each review session.\u201d
              </em>{' '}
              MEOK will store this as a protocol in Sovereign Memory and execute it automatically
              every time you initiate a review.
            </p>
          </div>

          {/* Section 8 */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              color: '#f5f0e8',
              marginBottom: '20px',
              lineHeight: 1.25,
            }}
          >
            How do you set SMART goals with MEOK?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            The SMART framework \u2014 Specific, Measurable, Achievable, Relevant, Time-bound \u2014 has
            been the gold standard in goal-setting for decades, not because it is particularly
            elegant, but because vague goals almost never get achieved and SMART goals frequently
            do. The specification forces you to confront whether you actually know what you want
            and whether it is achievable in the timeframe you are imagining.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            Most people set vague goals because converting a fuzzy intention into a SMART goal
            requires someone to push back on you. \u201cI want to get fit\u201d feels like a goal but it
            has no specificity, no measurement, no timeframe, and no way to evaluate whether you
            have achieved it. Pioneer will not let this stand.
          </p>

          <div style={{ marginBottom: '32px' }}>
            {[
              {
                letter: 'S',
                word: 'Specific',
                example:
                  'Pioneer asks: \u201cFit in what way? Run further? Lift heavier? Lose weight? Improve your blood markers? Pick one.\u201d',
              },
              {
                letter: 'M',
                word: 'Measurable',
                example:
                  'Pioneer asks: \u201cHow will you measure it? What number, and from what baseline?\u201d',
              },
              {
                letter: 'A',
                word: 'Achievable',
                example:
                  'Pioneer asks: \u201cGiven your current schedule and commitments, is this actually realistic in this timeframe?\u201d',
              },
              {
                letter: 'R',
                word: 'Relevant',
                example:
                  'Pioneer asks: \u201cWhy does this matter right now? Is this the highest-leverage goal you could be working on?\u201d',
              },
              {
                letter: 'T',
                word: 'Time-bound',
                example:
                  'Pioneer asks: \u201cBy exactly when? Give me a date, not a season.\u201d',
              },
            ].map((item) => (
              <div
                key={item.letter}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  marginBottom: '20px',
                  padding: '20px 24px',
                  background: 'rgba(245,240,232,0.02)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  borderRadius: '8px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(201,168,76,0.15)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '22px',
                    color: '#c9a84c',
                    flexShrink: 0,
                  }}
                >
                  {item.letter}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: '16px',
                      color: '#f5f0e8',
                      marginBottom: '6px',
                    }}
                  >
                    {item.word}
                  </p>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: 'rgba(245,240,232,0.65)',
                      fontStyle: 'italic',
                      margin: 0,
                    }}
                  >
                    {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            Once a goal is SMART, Pioneer stores it in Sovereign Memory with the exact wording,
            the baseline measurement, and the deadline. From that point forward, every check-in
            references the stored goal \u2014 you cannot unconsciously revise it to something easier
            after the fact.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '56px',
            }}
          >
            This accountability to your past self is one of the most underrated features of
            persistent AI memory. You set the goal when you were motivated and clear-headed.
            MEOK holds you to that version of yourself when the middle-of-the-month erosion of
            motivation sets in.
          </p>

          {/* Section 9 */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              color: '#f5f0e8',
              marginBottom: '20px',
              lineHeight: 1.25,
            }}
          >
            Who benefits most from an AI life coach?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '24px',
            }}
          >
            AI life coaching is not a universal solution. It is particularly powerful for specific
            situations and types of people:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            {[
              {
                title: 'Career changers',
                description:
                  'Navigating a pivot requires clarity about where you\u2019re going, honest assessment of your transferable skills, and sustained momentum through a process that takes months. MEOK holds the thread across that entire journey.',
              },
              {
                title: 'Freelancers and founders',
                description:
                  'Solo operators rarely have peers who can hold them accountable without a commercial interest in their decisions. MEOK is the thinking partner who has no stake in the outcome except your success.',
              },
              {
                title: 'People in life transitions',
                description:
                  'Divorce, redundancy, empty nest, relocation \u2014 transitions that restructure identity benefit from a consistent thinking partner who knows the full before-and-after story.',
              },
              {
                title: 'High performers who want more',
                description:
                  'Some people are already achieving but suspect they are optimising for the wrong things. Pioneer is built to interrogate whether your current goals are actually what you want, or just what you\u2019ve always assumed you should want.',
              },
              {
                title: 'People who want accountability without judgment',
                description:
                  'Social accountability comes with social risk. Failing in front of a friend or colleague carries a cost. MEOK offers accountability with zero social risk \u2014 which often means people are more honest about what\u2019s actually going on.',
              },
              {
                title: 'Anyone who cannot afford a human coach',
                description:
                  'This is the most straightforward case. If a human coach at \u00a3150 per session is not a realistic option, MEOK gives you the core of what coaching provides: structure, memory, accountability, and honest challenge.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '10px',
                  padding: '24px',
                }}
              >
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#c9a84c',
                    marginBottom: '10px',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.65,
                    color: 'rgba(245,240,232,0.65)',
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '56px',
            }}
          >
            AI life coaching is less suited to situations involving acute psychological distress,
            complex trauma, or clinical mental health conditions. In those situations, please seek
            a qualified therapist or clinical psychologist. MEOK can be a complement to therapy
            \u2014 handling the goal-setting and accountability layer while your therapist handles
            the clinical work \u2014 but it should not substitute for clinical care.
          </p>

          {/* Section 10 — getting started */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              color: '#f5f0e8',
              marginBottom: '20px',
              lineHeight: 1.25,
            }}
          >
            How do you get started with MEOK as your AI life coach?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            Getting started takes less than five minutes. MEOK\u2019s onboarding at{' '}
            <Link href="/birth" style={{ color: '#c9a84c', textDecoration: 'underline' }}>
              meok.ai/birth
            </Link>{' '}
            is a guided conversation that surfaces what you actually need right now \u2014 not what
            you think you should need. Answer honestly and MEOK will select the archetype that
            best fits your current situation, with Pioneer as the default for anyone who identifies
            goal-achievement and accountability as their primary focus.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            In your first session, do three things:
          </p>

          <div style={{ marginBottom: '32px' }}>
            {[
              {
                n: '1',
                action: 'State your top three goals in their current, probably-vague form.',
                why: 'Pioneer will immediately begin refining them into SMART goals. The vagueness is useful input, not a problem.',
              },
              {
                n: '2',
                action: 'Describe your biggest recurring blocker.',
                why: 'The pattern that has stopped you before will stop you again unless you name it explicitly. Pioneer needs to know it.',
              },
              {
                n: '3',
                action: 'Set your review cadence.',
                why: 'Tell MEOK whether you want daily check-ins, a weekly review, or something else. It will store this and prompt you accordingly.',
              },
            ].map((step) => (
              <div
                key={step.n}
                style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '20px',
                  padding: '20px 24px',
                  background: 'rgba(245,240,232,0.02)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  borderRadius: '8px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '14px',
                    color: '#c9a84c',
                    flexShrink: 0,
                  }}
                >
                  {step.n}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: '16px',
                      color: '#f5f0e8',
                      marginBottom: '6px',
                    }}
                  >
                    {step.action}
                  </p>
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'rgba(245,240,232,0.6)',
                      margin: 0,
                    }}
                  >
                    {step.why}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '20px',
            }}
          >
            From that first session, Sovereign Memory begins accumulating your context. The second
            session is easier. The fifth is easier still. By the tenth \u2014 which with MEOK costs
            exactly as much as the first, which is \u00a30 \u2014 you have a coaching relationship with
            months of genuine history behind it.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '56px',
            }}
          >
            That is what human coaching at \u00a3150 a session builds over a \u00a31,500 investment. MEOK
            builds the same thing for free, and unlike your human coach, it is never unavailable
            because it is on holiday.
          </p>

          {/* FAQ Section */}
          <div
            style={{
              background: 'rgba(245,240,232,0.02)',
              border: '1px solid rgba(245,240,232,0.08)',
              borderRadius: '12px',
              padding: '40px',
              marginBottom: '56px',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontWeight: 700,
                color: '#f5f0e8',
                marginBottom: '36px',
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: 'What is an AI life coach?',
                a: 'An AI life coach is an AI system designed to help you set goals, build accountability structures, and maintain momentum toward the life you want to build. Unlike a general chatbot, a real AI life coach stores your goals across sessions, tracks your progress over weeks and months, asks follow-up questions rooted in what you previously shared, and challenges you when your actions don\u2019t match your stated intentions \u2014 all without judgment and without the \u00a3100\u2013\u00a3500 per-session cost of a human coach.',
              },
              {
                q: 'Is AI life coaching as good as human coaching?',
                a: 'For goal-setting, weekly reviews, accountability check-ins, SMART goal refinement, and honest challenge, an AI life coach can match or exceed human coaches because it is available at any hour, never forgets what you told it last month, and has no social incentive to soften its feedback. Human coaches retain a significant edge for deep relational work, complex identity challenges, and situations where lived experience and emotional attunement are irreplaceable. The most important point, however, is that most people who would benefit from life coaching never access it at all because of cost. AI makes that access universal.',
              },
              {
                q: 'How does MEOK track my goals?',
                a: 'MEOK uses Sovereign Memory \u2014 a persistent, encrypted memory layer stored in your own vault, not on MEOK\u2019s servers for training purposes. Every goal, deadline, commitment, and blocker you share is written to your vault. When you return a week or three months later, MEOK already knows what you were working toward, what was in your way, and what you committed to doing next. You never re-explain your situation from scratch.',
              },
              {
                q: 'What is the Pioneer archetype?',
                a: 'Pioneer is one of MEOK\u2019s core character archetypes \u2014 a coaching mode optimised for action, momentum, and honest accountability. Where other archetypes are designed for emotional support or research, Pioneer is built to move you forward: it sets deadlines, calls out avoidance, celebrates genuine progress, and refuses to validate plans that aren\u2019t specific enough to execute. You can meet all of MEOK\u2019s archetypes at meok.ai/characters.',
              },
              {
                q: 'Can MEOK help me set SMART goals?',
                a: 'Yes. Pioneer takes any vague intention \u2014 \u201cI want to get fit\u201d, \u201cI want to earn more\u201d, \u201cI want to change career\u201d \u2014 and guides you through the SMART framework: Specific, Measurable, Achievable, Relevant, Time-bound. It challenges each criterion until the goal is genuinely actionable, then stores the finalised goal in Sovereign Memory and checks in on your progress at the cadence you choose.',
              },
            ].map((item, i, arr) => (
              <div
                key={item.q}
                style={{
                  borderBottom:
                    i < arr.length - 1 ? '1px solid rgba(245,240,232,0.08)' : 'none',
                  paddingBottom: i < arr.length - 1 ? '28px' : '0',
                  marginBottom: i < arr.length - 1 ? '28px' : '0',
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#f5f0e8',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.75,
                    color: 'rgba(245,240,232,0.72)',
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA block */}
          <div
            style={{
              background:
                'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '16px',
              padding: '56px 40px',
              textAlign: 'center' as const,
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                background: 'rgba(201,168,76,0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                margin: '0 auto 24px',
              }}
            >
              \u25b2
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 38px)',
                fontWeight: 800,
                color: '#f5f0e8',
                marginBottom: '16px',
                lineHeight: 1.2,
              }}
            >
              Ready to build momentum that actually lasts?
            </h2>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.7)',
                maxWidth: '520px',
                margin: '0 auto 36px',
              }}
            >
              Start your MEOK journey in five minutes. Tell it your goals. Let Pioneer hold you
              to them. No session fees. No re-explaining. No flattery.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap' as const,
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#c9a84c',
                  color: '#0d0c18',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '16px',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                }}
              >
                Start at meok.ai/birth \u2192
              </Link>
              <Link
                href="/characters"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid rgba(201,168,76,0.5)',
                  color: '#c9a84c',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '16px',
                  textDecoration: 'none',
                }}
              >
                Meet all archetypes
              </Link>
            </div>
          </div>

          {/* Related articles */}
          <div style={{ marginTop: '80px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'rgba(245,240,232,0.4)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                marginBottom: '24px',
              }}
            >
              Continue reading
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
              }}
            >
              {[
                {
                  href: '/blog/ai-for-career-coaching',
                  title: 'AI for Career Coaching',
                  desc: 'CV writing, interview prep, and career pivots with MEOK\u2019s Scholar archetype.',
                },
                {
                  href: '/blog/ai-for-habit-building',
                  title: 'AI for Habit Building',
                  desc: 'How MEOK tracks and reinforces the habits that matter to you.',
                },
                {
                  href: '/blog/ai-for-procrastination',
                  title: 'AI for Procrastination',
                  desc: 'Why you avoid and how Pioneer helps you start anyway.',
                },
                {
                  href: '/blog/archetypes-guide',
                  title: 'The Archetypes Guide',
                  desc: 'A full breakdown of every MEOK character mode and when to use each.',
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    background: 'rgba(245,240,232,0.03)',
                    border: '1px solid rgba(245,240,232,0.07)',
                    borderRadius: '8px',
                    padding: '20px',
                    textDecoration: 'none',
                  }}
                >
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#f5f0e8',
                      marginBottom: '8px',
                    }}
                  >
                    {link.title}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.55,
                      color: 'rgba(245,240,232,0.5)',
                      margin: 0,
                    }}
                  >
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div
            style={{
              marginTop: '80px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(245,240,232,0.07)',
              display: 'flex',
              flexWrap: 'wrap' as const,
              gap: '24px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(245,240,232,0.4)',
                  margin: '0 0 4px',
                }}
              >
                Written by{' '}
                <span style={{ color: 'rgba(245,240,232,0.7)', fontWeight: 600 }}>
                  Nicholas Templeman
                </span>
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(245,240,232,0.3)',
                  margin: 0,
                }}
              >
                Founder, MEOK AI LABS &bull; @meok_ai
              </p>
            </div>
            <Link
              href="/birth"
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#c9a84c',
                textDecoration: 'none',
                border: '1px solid rgba(201,168,76,0.3)',
                padding: '10px 20px',
                borderRadius: '6px',
              }}
            >
              Try MEOK free \u2192
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
