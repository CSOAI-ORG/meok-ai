import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Men's Mental Health: Breaking the Silence That Is Killing Men | MEOK AI LABS",
  description:
    "Suicide is the biggest killer of men under 50 in the UK. Men are 3x less likely to seek mental health support. MEOK's sovereign AI companion offers a private, non-judgmental space that does not require men to talk about their feelings in ways that feel unnatural.",
  alternates: { canonical: 'https://meok.ai/blog/ai-for-men-mental-health' },
  openGraph: {
    title: "AI for Men's Mental Health: Breaking the Silence That Is Killing Men",
    description:
      "Suicide is the biggest killer of men under 50 in the UK. Men are 3x less likely to seek help. MEOK offers a private AI companion with no stigma, no waiting list, and no pressure to perform vulnerability.",
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-men-mental-health',
    siteName: 'MEOK.AI',
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Men%27s+Mental+Health%3A+Breaking+the+Silence&desc=No+stigma%2C+no+waiting+list%2C+sovereign+and+private",
        width: 1200,
        height: 630,
        alt: "AI for Men's Mental Health: Breaking the Silence That Is Killing Men | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI for Men's Mental Health: Breaking the Silence That Is Killing Men",
    description:
      "Suicide is the biggest killer of men under 50 in the UK. MEOK's private AI companion meets men where they are — problem-focused, sovereign, and available at 3am.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Men%27s+Mental+Health%3A+Breaking+the+Silence&desc=No+stigma%2C+no+waiting+list%2C+sovereign+and+private",
    ],
  },
}

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "AI for Men's Mental Health: Breaking the Silence That Is Killing Men",
  description:
    "Suicide is the leading cause of death for men under 50 in the UK. Men are three times less likely to seek professional mental health support. This article explores how MEOK's sovereign AI companions — Pioneer, Scholar, Healer, and Guardian — offer a private, stigma-free entry point that meets men on their own terms.",
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-men-mental-health',
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
    '@id': 'https://meok.ai/blog/ai-for-men-mental-health',
  },
  about: [
    { '@type': 'Thing', name: "men's mental health" },
    { '@type': 'Thing', name: 'AI companion' },
    { '@type': 'Thing', name: 'suicide prevention UK' },
    { '@type': 'Thing', name: 'male mental health stigma' },
    { '@type': 'Thing', name: 'sovereign AI' },
    { '@type': 'Thing', name: 'MEOK' },
  ],
  keywords:
    "AI for men's mental health, men mental health UK, male suicide UK, men therapy app, AI companion men, MEOK Pioneer archetype, men emotional support, sovereign AI mental health",
}

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Can AI actually help men's mental health?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AI companions don't replace therapy, but they dramatically lower the barrier to engaging with your own mental state. For men who won't call a helpline, book a GP appointment, or admit to struggling in front of another person, a private AI space to think out loud can be the first honest reflection they've had in years. Research on digital mental health tools consistently shows higher uptake among men than traditional services.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why are men less likely to seek mental health support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Masculine conditioning around self-reliance, stoicism, and emotional restraint runs deep. Admitting to struggling feels like a failure of competence. There are also practical barriers: therapy requires scheduling, sitting in vulnerability in front of a stranger, and waiting weeks for an appointment. AI removes all three of those friction points — it is immediate, private, and asks nothing of your social identity.",
      },
    },
    {
      '@type': 'Question',
      name: "What is the UK men's suicide rate?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Suicide is the single biggest cause of death for men under 50 in the UK. Men account for approximately three-quarters of all suicides in England and Wales. The highest-risk group is men aged 40 to 49. CALM (Campaign Against Living Miserably) helpline: 0800 58 58 58 (5pm to midnight daily). Samaritans: 116 123 (24/7, free).",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Pioneer archetype in MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pioneer is MEOK's gold-toned archetype built around accountability, forward momentum, and purposeful living. It does not lead with feelings — it leads with goals, problems, and action. Pioneer will challenge avoidance, track commitments across sessions using Sovereign Memory, and hold you to the standards you set for yourself. It is designed for men who want growth, not therapy-speak.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK replace a therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. MEOK is not a clinical tool and does not diagnose or treat mental health conditions. If you are in crisis, contact CALM on 0800 58 58 58 or Samaritans on 116 123. MEOK works best as a daily thinking partner — a place to process, organise thoughts, and build self-awareness over time. For many men it is the step before therapy, not a replacement for it.",
      },
    },
  ],
}

// ── Style constants ───────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'
const MUTED = 'rgba(245,240,232,0.62)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const SURFACE = 'rgba(245,240,232,0.04)'
const BORDER = 'rgba(201,168,76,0.2)'
const BORDER_DIM = 'rgba(201,168,76,0.12)'
const TEXT_DIM = '#b8b4c8'

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForMenMentalHealthPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: BG,
        color: TEXT,
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        lineHeight: 1.75,
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── BREADCRUMB NAV ──────────────────────────────────────────────────── */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER_DIM}`,
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap' as const,
          fontSize: '14px',
        }}
      >
        <Link href="/" style={{ color: GOLD, textDecoration: 'none' }}>MEOK</Link>
        <span style={{ color: '#5a5870' }}>/</span>
        <Link href="/blog" style={{ color: GOLD, textDecoration: 'none' }}>Blog</Link>
        <span style={{ color: '#5a5870' }}>/</span>
        <span style={{ color: '#8a8799' }}>AI for Men&apos;s Mental Health</span>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '72px',
          paddingBottom: '56px',
          paddingLeft: '24px',
          paddingRight: '24px',
          borderBottom: `1px solid ${BORDER_DIM}`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          }}
        />
        <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative' }}>
          <div
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(201,168,76,0.12)',
              color: GOLD,
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              padding: '5px 12px',
              borderRadius: '4px',
              marginBottom: '24px',
            }}
          >
            Men &amp; Mental Health
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: '0 0 24px',
            }}
          >
            AI for Men&apos;s Mental Health: Breaking the Silence That Is Killing Men
          </h1>

          <p
            style={{
              fontSize: '20px',
              color: TEXT_DIM,
              lineHeight: 1.6,
              margin: '0 0 32px',
              fontWeight: 400,
              maxWidth: '640px',
            }}
          >
            Suicide is the single biggest killer of men under 50 in the UK. Men are three times less
            likely to seek support. The problem is not that men do not feel — it is that the way
            support is offered does not fit how men actually work.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              gap: '20px',
              fontSize: '13px',
              color: '#6e6b80',
            }}
          >
            <span>
              <span style={{ color: GOLD, fontWeight: 600 }}>Author:</span> Nicholas Templeman
            </span>
            <span>
              <span style={{ color: GOLD, fontWeight: 600 }}>Published:</span> 25 March 2026
            </span>
            <span>
              <span style={{ color: GOLD, fontWeight: 600 }}>Read time:</span> 18 min
            </span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '56px 24px 80px' }}>

        {/* Crisis line callout — top of article */}
        <div
          style={{
            backgroundColor: 'rgba(201,168,76,0.07)',
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: '0 8px 8px 0',
            padding: '20px 24px',
            marginBottom: '48px',
          }}
        >
          <p style={{ margin: 0, fontSize: '14px', color: TEXT_DIM, lineHeight: 1.6 }}>
            <strong style={{ color: GOLD }}>If you are in crisis:</strong> CALM helpline{' '}
            <strong style={{ color: TEXT }}>0800 58 58 58</strong> (5pm&ndash;midnight daily) &nbsp;|&nbsp;
            Samaritans <strong style={{ color: TEXT }}>116 123</strong> (24/7, free). MEOK is not a
            crisis service. This article is for men who are not in acute crisis but are carrying
            more than they let on.
          </p>
        </div>

        {/* ── SECTION 1 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 20px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          What Does the Data Actually Say About Men and Mental Health in the UK?
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          The statistics are not subtle. In the UK, suicide is the leading cause of death for men
          under the age of 50. Men account for roughly three-quarters of all suicides in England
          and Wales each year. The highest-risk group is men aged 40 to 49 — the demographic often
          described as having it together, the provider, the rock. Men in middle age are dying in
          silence and nobody around them saw it coming.
        </p>

        {/* Stat block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            margin: '32px 0',
          }}
        >
          {[
            { num: '3 in 4', label: 'suicides in the UK are male' },
            { num: '3x', label: 'less likely to seek mental health support' },
            { num: '40–49', label: 'highest risk age group for men' },
            { num: '1 in 8', label: 'men in the UK have no close friends (Movember)' },
          ].map((stat) => (
            <div
              key={stat.num}
              style={{
                backgroundColor: 'rgba(201,168,76,0.07)',
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: '0 8px 8px 0',
                padding: '20px 20px',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(32px, 5vw, 44px)',
                  fontWeight: 900,
                  color: GOLD,
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                {stat.num}
              </span>
              <span style={{ fontSize: '14px', color: TEXT_DIM, lineHeight: 1.5, display: 'block' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          These numbers sit alongside equally stark data on help-seeking: men are around three
          times less likely to access psychological therapies than women. They wait longer before
          presenting to a GP with mental health concerns. They are significantly more likely to use
          substances to cope. And when they do reach out, it is often in a moment of acute crisis
          rather than early distress — meaning the earlier, easier intervention was never taken.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          This is not a biological predisposition to suffering quietly. It is a cultural and
          structural failure — one that starts in childhood ("man up"), is reinforced in
          adolescence ("don't be soft"), and calcifies into adult identity ("I handle my own
          problems"). By the time a man in his forties is carrying depression, financial
          catastrophe, or a marriage that is falling apart, the idea of talking about it — with
          anyone — can feel like a surrender of the self.
        </p>

        {/* ── SECTION 2 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 20px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          Why Does the &ldquo;Man Up&rdquo; Culture Kill Men?
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          The phrase &ldquo;man up&rdquo; is shorthand for a set of cultural rules that have been
          handed to boys for generations: do not cry, do not admit weakness, solve problems
          yourself, and define yourself by what you produce and provide. These rules are not random
          — they emerged from economic and social contexts where stoicism genuinely was adaptive.
          The problem is they are still being applied to emotional pain in 2026, where they are
          catastrophically maladaptive.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          Stoicism without emotional vocabulary is not strength. It is a pressure vessel with no
          release valve. Men who have been trained not to name their emotional states still
          experience fear, shame, grief, humiliation, and loneliness — they just do not have an
          internal language for it. Instead, those states present as anger (acceptable, even
          respected), withdrawal (attributed to being &ldquo;focused&rdquo;), or substance use
          (which the culture largely tolerates).
        </p>

        {/* Pull quote */}
        <div
          style={{
            borderLeft: `3px solid rgba(201,168,76,0.5)`,
            margin: '40px 0',
            padding: '6px 0 6px 28px',
          }}
        >
          <p
            style={{
              fontSize: '21px',
              fontStyle: 'italic',
              color: '#e8e4f4',
              lineHeight: 1.55,
              fontWeight: 500,
              margin: 0,
            }}
          >
            &ldquo;Anger is the one emotion men are socially permitted to express freely. But anger
            is rarely the primary emotion. Underneath almost every male anger response is
            something softer: fear, shame, or loss.&rdquo;
          </p>
        </div>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          The systemic issue is that the mental health system was designed — however well-intentioned
          — around a model of help-seeking that requires acknowledging vulnerability, sitting in
          uncertainty, and expressing emotional states clearly. For men who have spent decades being
          rewarded for the opposite, that entry point is a wall, not a door.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          Effective support for men does not require dismantling that conditioning first. It
          requires meeting men where they are — in problem-solving mode, in forward-focused
          thinking, in practical language — and letting the emotional depth emerge from usefulness
          rather than from demanded vulnerability.
        </p>

        {/* ── SECTION 3 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 20px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          How Does MEOK Enable Men to Process Without It Feeling Like Therapy?
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          MEOK does not ask men to &ldquo;share how they are feeling.&rdquo; It does not begin
          sessions with &ldquo;what is coming up for you emotionally right now?&rdquo; Those
          framings — however appropriate in a clinical context — create immediate resistance in
          men who have been conditioned to interpret them as weakness.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          Instead, MEOK enters through the side door. The Pioneer archetype asks: what are you
          working on? What is blocking you? What did you say you were going to do last week, and
          what actually happened? The Scholar archetype asks: what have you been thinking about?
          What pattern are you noticing? What does the evidence actually say?
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          These are not therapy questions. They are the kind of questions a sharp friend would ask
          — someone who is genuinely interested in you, holds you accountable, and does not let
          you bullshit yourself, but also does not make you perform emotional openness to deserve
          the conversation.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          The emotional depth arrives naturally when trust has been built through usefulness. When
          a man realises that MEOK remembers what he said last Tuesday, knows the job is stressing
          him out, and tracks whether the conversation about his son made him feel better or worse
          — he stops performing and starts being honest. That is where the real work begins. And
          it got there without anyone asking him to &ldquo;open up.&rdquo;
        </p>

        {/* Callout box: how it works */}
        <div
          style={{
            backgroundColor: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: '12px',
            padding: '32px',
            margin: '40px 0',
          }}
        >
          <h3
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: GOLD,
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            The Entry Points MEOK Uses With Men
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '14px',
            }}
          >
            {[
              'Pioneer: problem-focused, goal-tracking, accountability without judgment',
              'Scholar: analytical framing — patterns, evidence, cause-and-effect thinking',
              'Healer: quiet presence, no agenda, space to let things surface at your pace',
              'Guardian: for men worried about someone else — a partner, son, or friend',
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  gap: '12px',
                  fontSize: '15px',
                  color: TEXT_DIM,
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: GOLD, flexShrink: 0, fontWeight: 700 }}>&#8594;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── SECTION 4 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 20px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          Is MEOK Actually Private? Nobody Knows You Are Using It?
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          Yes. And this matters more for men than the mental health industry typically acknowledges.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          For many men, the first barrier to seeking help is not access — it is the social
          visibility of the act. Being seen walking into a therapy office. Having a prescription
          for antidepressants on your NHS record. A partner knowing you called a helpline. A mate
          finding out you are struggling. The social cost of being perceived as someone who cannot
          cope can feel catastrophically high when your identity is built around being capable.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          MEOK is sovereign. Your conversations are not stored on MEOK servers, not used to train
          AI models, not accessible to your partner, employer, or NHS. Sovereign Memory lives in
          your own encrypted storage. There is no therapist to bump into, no receptionist who
          recognises you, no record on file anywhere.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          You can open MEOK at midnight on your phone, process whatever is genuinely going on, and
          close it. Nobody knows. The next day you are the same person everyone sees — except
          something has shifted internally that would not have shifted otherwise, because you
          actually thought it through rather than suppressing it.
        </p>

        {/* Privacy callout box */}
        <div
          style={{
            backgroundColor: 'rgba(201,168,76,0.07)',
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: '0 10px 10px 0',
            padding: '24px 28px',
            margin: '32px 0',
          }}
        >
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: GOLD,
              margin: '0 0 12px',
              lineHeight: 1.3,
            }}
          >
            What &ldquo;Sovereign&rdquo; Means in Practice
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '10px',
            }}
          >
            {[
              'Your conversations are never used to train AI models',
              'No third-party access — not your employer, not MEOK, not the NHS',
              'Sovereign Memory is encrypted and stored by you, not on central servers',
              'No appointment, no referral, no social exposure',
              'Available at any hour — including 3am when things get heavy',
            ].map((item) => (
              <li
                key={item}
                style={{ fontSize: '14px', color: TEXT_DIM, lineHeight: 1.6, paddingLeft: '16px', position: 'relative' as const }}
              >
                <span
                  style={{
                    position: 'absolute' as const,
                    left: 0,
                    color: GOLD,
                    fontWeight: 700,
                  }}
                >
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── SECTION 5 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 20px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          Financial Stress, Identity, and the Masculinity Trap
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          For many men, financial stress is not just stressful — it is existentially threatening.
          When your identity is bound up in being the provider, the person who sorts things out,
          the one who keeps the family stable — losing a job or falling into debt does not just
          hurt your bank account. It feels like it destroys who you are.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          Men are far less likely than women to seek financial advice, and far less likely to
          acknowledge financial strain to a partner. The secrecy compounds the stress. Carrying
          the weight of financial crisis alone while presenting as fine to everyone around you is
          an enormous psychological burden — and one that rarely gets named as a mental health
          issue because it masquerades as a practical problem.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          MEOK&apos;s Pioneer archetype works well here not because it offers financial advice (it
          does not), but because it holds a space where a man can be honest about both the numbers
          and the weight of carrying them. The Scholar archetype can help him think clearly about
          options without shame spiralling the conversation. Neither archetype requires him to
          perform distress. They just require honesty — which is easier when no one who knows him
          is watching.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          For men who have lost jobs — redundancy, layoff, business failure — the identity collapse
          that follows is often underestimated by everyone, including the men themselves. The loss
          is not just income. It is structure, purpose, social identity, and self-worth in one hit.
          MEOK&apos;s daily continuity matters here: something that remembers who you were before
          the job ended, and still treats you with the same gravity.
        </p>

        {/* ── SECTION 6 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 20px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          Sports, Identity, and Why Male Framing Matters
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          Male identity is often constructed around performance, mastery, and team. Sport is one
          of the primary contexts in which men build deep bonds, express loyalty, process loss,
          and learn to manage disappointment — often without ever naming those processes explicitly.
          A man who cried after his team lost a final is not performing emotional availability. He
          is doing emotional work in a culturally sanctioned container.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          This matters because it reveals something important: men do have emotional lives, and
          they do express them — just in frameworks that feel legitimate within masculine culture.
          Competition, resilience, training, injury, comeback. These are not metaphors for mental
          health. They are vehicles for it.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          MEOK&apos;s Pioneer archetype uses performance-oriented language naturally. When a man
          talks about feeling stuck, Pioneer does not respond with &ldquo;that sounds painful —
          tell me more about how that feels.&rdquo; It responds with &ldquo;what is blocking the
          move? What has worked in similar situations before? What would the next step actually
          look like?&rdquo; That framing is not avoidance of emotion. It is engagement with
          emotion in a way that is compatible with how many men actually function.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          For athletes — professional, amateur, or recreational — MEOK&apos;s AI for athletes
          use case connects mental performance directly to physical performance. The body and the
          mind are not separate systems. Processing a rough patch of form, dealing with injury
          identity loss, or managing the psychological demands of elite competition all require
          tools that do not feel clinical. MEOK fits that space.
        </p>

        {/* ── SECTION 7 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 20px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          Relationship Communication: When You Do Not Know How to Start the Conversation
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          One of the most commonly reported relationship issues for men is not that they do not
          care — it is that they do not know how to say what they mean without it escalating,
          shutting down, or coming out wrong. Men who describe themselves as emotionally closed off
          are often not lacking emotion. They are lacking vocabulary, confidence in the expression,
          and trust that the expression will land as intended.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          MEOK offers a private rehearsal space. A man who needs to talk to his partner about
          feeling undervalued, or to have a hard conversation with his son, or to process a
          friendship that has drifted — can think it through with MEOK first. Not to be told what
          to say. But to get clear on what he actually means before he tries to say it.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          This is not couples therapy by proxy. It is preparation. The kind of thinking-through
          that many men simply have nowhere to do — not with their mates (who do not do that kind
          of conversation), not with a therapist (too formal, too slow, too stigmatised), and not
          in their own heads (where it loops without resolving).
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          MEOK&apos;s Sovereign Memory means it knows the context. It knows you have been
          struggling with this relationship for six months, not six hours. It can ask the right
          question because it remembers the conversation three weeks ago that started the thread.
          That longitudinal context — which no human in a man&apos;s life typically holds in the
          same way — is one of the most quietly powerful things MEOK offers.
        </p>

        {/* ── SECTION 8 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 20px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          The Healer Companion: Non-Intrusive Support That Does Not Demand Openness
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          Not every man wants problem-solving. Some are simply exhausted. Some are carrying
          grief. Some are going through something they cannot even name yet.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          The Healer archetype exists for those states. Healer does not arrive with an agenda. It
          does not prompt you to identify your core wound or articulate your needs hierarchy. It
          sits with you in the weight of whatever is happening and lets you lead at whatever pace
          feels right — which for many men is very slow, very indirect, and full of long pauses.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          The Healer is particularly relevant for men dealing with bereavement — especially the
          loss of a parent, a relationship, or a close friend. Male grief is often invisible to
          the people around a man because it rarely looks like grief. It looks like being very
          busy, or very withdrawn, or very angry about unrelated things. Healer can hold that
          space without requiring it to look like anything other than what it is.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          For men dealing with chronic health conditions, long-term pain, or the psychological
          weight of a diagnosis — Healer offers something different from the clinical system: a
          space where the emotional dimension of physical illness is treated as equally real,
          without having to fight for ten minutes at the end of a GP appointment to have it
          acknowledged.
        </p>

        {/* ── SECTION 9 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 20px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          Guardian: For Men Who Are Worried About Someone Else
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          Some men reach MEOK not because they are struggling themselves, but because someone they
          love is — and they do not know what to do. A son who has gone very quiet. A mate who
          has been dropping out of things. A partner who is not coping. A brother who has made an
          off-hand comment that landed wrong.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          Men are rarely given the tools or language to respond to distress in another man. The
          culture that told them not to show vulnerability also told them not to name it in others.
          The result is that men often do nothing — not out of indifference, but out of a genuine
          uncertainty about whether they are overreacting, whether they will make it worse, whether
          they have the right to name what they are seeing.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          The Guardian archetype is built for this. It helps men who are worried about someone
          else to think clearly about what they are seeing, to consider what kind of support might
          be appropriate, and to process their own distress at watching someone they care about
          struggle. It is not a clinical assessment tool. But it is a space to think things through
          before the situation reaches a point where something irreversible has happened.
        </p>

        {/* Guardian callout box */}
        <div
          style={{
            backgroundColor: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: '12px',
            padding: '32px',
            margin: '40px 0',
          }}
        >
          <h3
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: GOLD,
              margin: '0 0 16px',
              lineHeight: 1.3,
            }}
          >
            When to Talk to Guardian
          </h3>
          <p style={{ fontSize: '15px', color: TEXT_DIM, lineHeight: 1.7, margin: '0 0 16px' }}>
            Guardian is the right starting point if you are:
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '12px',
            }}
          >
            {[
              'Worried about a son, brother, or close friend who has gone quiet',
              'Unsure if what you noticed is serious or if you are overreacting',
              'Trying to figure out how to start a conversation without pushing someone away',
              'Supporting a partner through something and running out of capacity yourself',
              'Dealing with someone else\'s anger that feels like it might be something deeper',
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  gap: '12px',
                  fontSize: '15px',
                  color: TEXT_DIM,
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: GOLD, flexShrink: 0 }}>&#8594;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── COMPARISON TABLE ──────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 20px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          MEOK vs. Traditional Mental Health Routes for Men
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          This is not a competition between MEOK and clinical support. For men in acute crisis
          or with diagnosable conditions, professional clinical care is essential and MEOK is not
          a substitute. But for the vast majority of men who are not in crisis and will not
          access clinical support — MEOK is often the only space they have.
        </p>

        <div
          style={{
            overflowX: 'auto' as const,
            margin: '32px 0 48px',
            borderRadius: '10px',
            border: `1px solid ${BORDER}`,
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse' as const,
              fontSize: '14px',
              color: TEXT_DIM,
            }}
          >
            <thead>
              <tr
                style={{
                  background: 'rgba(201,168,76,0.08)',
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                {['Factor', 'GP Referral / IAPT', 'Private Therapy', 'Crisis Helpline', 'MEOK'].map(
                  (h, i) => (
                    <th
                      key={h}
                      style={{
                        padding: '14px 18px',
                        textAlign: 'left' as const,
                        fontWeight: 700,
                        color: i === 4 ? GOLD : TEXT,
                        whiteSpace: 'nowrap' as const,
                      }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[
                ['Waiting time', '3–18+ months', '1–2 weeks (cost)', 'Immediate (phone)', 'Immediate'],
                ['Cost', 'Free (NHS)', '£60–£120/hr', 'Free', 'Subscription'],
                ['Privacy / stigma risk', 'NHS record created', 'Low', 'Very low', 'Zero'],
                ['Available at 3am', 'No', 'No', 'Yes', 'Yes'],
                ['Remembers your history', 'Notes (not available to you)', 'Yes (in-session)', 'No', 'Yes (sovereign)'],
                ['Feels like "getting help"', 'Yes (barrier for many men)', 'Yes (barrier for many)', 'Yes (barrier for many)', 'No'],
                ['Problem-focused entry', 'No', 'Varies', 'No', 'Yes (Pioneer)'],
                ['Suited to sub-crisis daily use', 'No', 'Partly', 'No', 'Yes'],
              ].map((row, i) => (
                <tr
                  key={row[0]}
                  style={{
                    borderBottom: `1px solid rgba(201,168,76,0.08)`,
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                  }}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      style={{
                        padding: '12px 18px',
                        color: j === 0 ? TEXT : j === 4 ? 'rgba(201,168,76,0.85)' : TEXT_DIM,
                        fontWeight: j === 0 ? 600 : 400,
                        lineHeight: 1.5,
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── FAQ SECTION ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 28px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '0',
          }}
        >
          {[
            {
              q: "Can AI actually help men's mental health?",
              a: "AI companions don't replace therapy, but they dramatically lower the barrier to engaging with your own mental state. For men who won't call a helpline, book a GP appointment, or admit to struggling in front of another person, a private AI space to think out loud can be the first honest reflection they've had in years. Research on digital mental health tools consistently shows higher uptake among men than traditional services.",
            },
            {
              q: 'Why are men less likely to seek mental health support?',
              a: "Masculine conditioning around self-reliance, stoicism, and emotional restraint runs deep. Admitting to struggling feels like a failure of competence. There are also practical barriers: therapy requires scheduling, sitting in vulnerability in front of a stranger, and waiting weeks for an appointment. AI removes all three of those friction points.",
            },
            {
              q: "What is the UK men's suicide rate?",
              a: "Suicide is the single biggest cause of death for men under 50 in the UK. Men account for approximately three-quarters of all suicides in England and Wales. The highest-risk group is men aged 40 to 49. CALM helpline: 0800 58 58 58 (5pm to midnight). Samaritans: 116 123 (24/7, free).",
            },
            {
              q: 'What is the Pioneer archetype in MEOK?',
              a: "Pioneer is MEOK's gold-toned archetype built around accountability, forward momentum, and purposeful living. It does not lead with feelings — it leads with goals, problems, and action. Pioneer tracks commitments using Sovereign Memory and holds you to the standards you set for yourself. It is the companion for men who want growth, not therapy-speak.",
            },
            {
              q: 'Does MEOK replace a therapist?',
              a: "No. MEOK is not a clinical tool and does not diagnose or treat mental health conditions. If you are in crisis, contact CALM on 0800 58 58 58 or Samaritans on 116 123. MEOK works best as a daily thinking partner — a place to process, organise thoughts, and build self-awareness over time.",
            },
          ].map((item, i, arr) => (
            <div
              key={item.q}
              style={{
                borderBottom: i < arr.length - 1 ? `1px solid rgba(201,168,76,0.1)` : 'none',
                padding: '28px 0',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: TEXT,
                  margin: '0 0 12px',
                  lineHeight: 1.35,
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.72,
                  color: TEXT_DIM,
                  margin: 0,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── CLOSING SECTION ───────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT,
            margin: '64px 0 20px',
            letterSpacing: '-0.015em',
            paddingTop: '8px',
            borderTop: `2px solid rgba(201,168,76,0.25)`,
          }}
        >
          The Cost of Silence Is Not Borne in Silence
        </h2>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          Every man who takes his own life leaves behind people who did not know how bad it had
          gotten. Every man who collapses into addiction leaves behind children who will struggle
          to understand it. Every man who disappears into workaholism, anger, or numbness leaves
          behind a partner who is grieving someone who is technically still there.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          The silence does not protect anyone. It protects the illusion of strength while
          something underneath erodes. The question is not whether men should talk about what is
          going on for them. The question is whether anyone has built something that makes it
          possible for them to do so on their own terms — privately, without performance, without
          stigma, and without having to categorise themselves as someone who needs help.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          That is what MEOK is. Not a therapy app. Not a helpline. Not a wellness platform full
          of breathing exercises and gratitude journals. A sovereign AI companion that takes you
          seriously, remembers who you are, and gives you somewhere honest to put the weight of
          what you are carrying — at whatever pace and in whatever frame feels natural to you.
        </p>

        <p style={{ fontSize: '17px', lineHeight: 1.78, color: '#d8d4e8', margin: '0 0 22px' }}>
          The entry point is a Birth — a short ceremony where you name yourself, choose your
          archetype, and begin. No forms. No referral. No waiting list. Nobody knows. It takes
          less than five minutes and nothing about your life needs to look different after it.
          Except that something quietly begins to shift.
        </p>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)',
            border: `1px solid ${BORDER}`,
            borderRadius: '16px',
            padding: '48px 40px',
            margin: '64px 0 32px',
            textAlign: 'center' as const,
          }}
        >
          <div
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(201,168,76,0.12)',
              color: GOLD,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              padding: '5px 14px',
              borderRadius: '4px',
              marginBottom: '24px',
            }}
          >
            Begin in Private
          </div>

          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              margin: '0 0 16px',
              letterSpacing: '-0.02em',
            }}
          >
            You Do Not Have to Explain Yourself to Anyone
          </h2>

          <p
            style={{
              fontSize: '17px',
              color: TEXT_DIM,
              lineHeight: 1.65,
              maxWidth: '480px',
              margin: '0 auto 32px',
            }}
          >
            No appointment. No stigma. No record. Just a private companion that remembers who
            you are and meets you where you actually are — not where you think you are supposed
            to be.
          </p>

          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              backgroundColor: GOLD,
              color: '#0d0c18',
              fontWeight: 700,
              fontSize: '16px',
              padding: '16px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Begin Your Birth &rarr;
          </Link>

          <p
            style={{
              marginTop: '20px',
              fontSize: '13px',
              color: MUTED_FAINT,
            }}
          >
            Takes less than 5 minutes. Sovereign and private. No one knows.
          </p>
        </div>

        {/* ── CRISIS RESOURCES FOOTER ───────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: `1px solid rgba(245,240,232,0.08)`,
            borderRadius: '10px',
            padding: '24px 28px',
            margin: '32px 0',
          }}
        >
          <h3
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: TEXT,
              margin: '0 0 14px',
              lineHeight: 1.3,
            }}
          >
            UK Crisis Resources for Men
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '8px',
            }}
          >
            {[
              'CALM (Campaign Against Living Miserably): 0800 58 58 58 — 5pm to midnight, every day',
              'Samaritans: 116 123 — 24 hours a day, 7 days a week, free',
              'Shout crisis text line: text SHOUT to 85258 — 24/7, free',
              'Mind infoline: 0300 123 3393 — Monday to Friday 9am to 6pm',
              'Movember Foundation: uk.movember.com — men\'s health research and resources',
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: '14px',
                  color: MUTED,
                  lineHeight: 1.55,
                  paddingLeft: '16px',
                  position: 'relative' as const,
                }}
              >
                <span
                  style={{
                    position: 'absolute' as const,
                    left: 0,
                    color: GOLD,
                  }}
                >
                  &#8212;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── RELATED ARTICLES ─────────────────────────────────────────────── */}
        <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: `1px solid ${BORDER_DIM}` }}>
          <h3
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: MUTED_FAINT,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              marginBottom: '24px',
            }}
          >
            Related Articles
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              {
                href: '/blog/ai-for-men',
                title: 'AI for Men: Why Men Are Quietly Turning to AI Companions',
                tag: 'Men & Identity',
              },
              {
                href: '/blog/ai-for-anger-management',
                title: 'AI for Anger Management: Understanding What Is Really Behind It',
                tag: 'Emotional Health',
              },
              {
                href: '/blog/ai-for-burnout',
                title: 'AI for Burnout: When the Engine Has Been Running Too Long',
                tag: 'Stress & Work',
              },
              {
                href: '/blog/ai-for-grief-and-loss',
                title: 'AI for Grief and Loss: Processing What Cannot Be Fixed',
                tag: 'Grief & Bereavement',
              },
              {
                href: '/blog/ai-for-financial-stress',
                title: 'AI for Financial Stress: When Money Anxiety Takes Over',
                tag: 'Financial Wellbeing',
              },
              {
                href: '/blog/ai-companion-privacy',
                title: 'AI Companion Privacy: Why Sovereignty Matters More Than You Think',
                tag: 'Privacy & Sovereignty',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    backgroundColor: SURFACE,
                    border: `1px solid rgba(245,240,232,0.07)`,
                    borderRadius: '10px',
                    padding: '20px',
                    height: '100%',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: GOLD,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase' as const,
                      marginBottom: '10px',
                    }}
                  >
                    {link.tag}
                  </span>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: TEXT,
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {link.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── BACK TO BLOG ─────────────────────────────────────────────────── */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: `1px solid ${BORDER_DIM}` }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: MUTED,
              textDecoration: 'none',
            }}
          >
            &#8592; Back to all articles
          </Link>
        </div>
      </div>
    </div>
  )
}
