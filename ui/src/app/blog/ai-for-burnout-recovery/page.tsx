import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Burnout Recovery: A Companion That Knows When to Push and When to Rest | MEOK AI LABS',
  description:
    'Burnout recovery is not a linear process. MEOK\u2019s sovereign AI tracks your energy patterns, holds you accountable without pushing you over the edge, and remembers the context that caused your burnout.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-burnout-recovery' },
  openGraph: {
    title: 'AI for Burnout Recovery: A Companion That Knows When to Push and When to Rest',
    description:
      'Burnout recovery is not a linear process. MEOK\u2019s sovereign AI tracks your energy patterns, holds you accountable without pushing you over the edge, and remembers the context that caused your burnout.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-burnout-recovery',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Burnout+Recovery%3A+A+Companion+That+Knows+When+to+Push+and+When+to+Rest&desc=Sovereign+AI+that+tracks+energy+patterns+and+never+pushes+a+depleted+user+over+the+edge',
        width: 1200,
        height: 630,
        alt: 'AI for Burnout Recovery: A Companion That Knows When to Push and When to Rest | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Burnout Recovery: A Companion That Knows When to Push and When to Rest',
    description:
      'Burnout recovery is not a linear process. MEOK\u2019s sovereign AI tracks your energy patterns and remembers the context that caused your burnout.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Burnout+Recovery%3A+A+Companion+That+Knows+When+to+Push+and+When+to+Rest&desc=Sovereign+AI+that+tracks+energy+patterns+and+never+pushes+a+depleted+user+over+the+edge',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Burnout Recovery: A Companion That Knows When to Push and When to Rest',
  description:
    'Burnout recovery is not a linear process. MEOK\u2019s sovereign AI tracks your energy patterns, holds you accountable without pushing you over the edge, and remembers the context that caused your burnout.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-burnout-recovery',
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
    '@id': 'https://meok.ai/blog/ai-for-burnout-recovery',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the WHO definition of burnout and its three dimensions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The World Health Organization classifies burnout as an occupational phenomenon in ICD-11, not a medical condition. It is defined by three dimensions: emotional exhaustion (feeling drained and depleted of energy), cynicism or depersonalisation (mental distance from your job, negative feelings toward your work), and reduced professional efficacy (feeling ineffective and that your contributions do not matter). All three dimensions must be addressed for genuine recovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does standard AI make burnout worse rather than better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard productivity AI is designed to maximise output. It surfaces tasks, sends reminders, encourages streaks, and pushes you toward goals. For a burned-out user, this is precisely the wrong approach. It adds demands to a system already running on empty, increases the sense of falling behind, and treats rest as a failure state rather than a recovery tool. An AI that cannot read your depletion level cannot safely support burnout recovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the care score floor and how does it prevent over-pushing during burnout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\u2019s care score is a live energy-and-wellbeing index derived from your check-ins, tone, patterns, and context stored in Sovereign Memory. When your care score drops below a configured floor threshold, MEOK automatically shifts behaviour: it stops surfacing task lists, pauses productivity nudges, routes interactions through the Healer archetype, and prioritises active listening over action prompts. The floor is a structural safeguard, not a manual toggle.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does sovereign memory help with burnout recovery compared to a standard AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard AI has no memory across sessions. Every conversation starts blank. For burnout recovery, this is clinically useless: you cannot track energy patterns over weeks, spot cyclical triggers, or demonstrate progress over months without continuity. MEOK\u2019s Sovereign Memory is private, persists indefinitely, and belongs to you. It can surface \u201cyou reported exhaustion every Monday for six weeks\u201d \u2014 the kind of pattern that reveals structural causes, not just symptoms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does burnout recovery realistically take and what does a non-linear recovery look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minor burnout caught early can resolve in four to eight weeks with adequate rest and structural change. Moderate burnout typically takes three to six months. Severe or long-duration burnout can take twelve to twenty-four months or longer. Recovery is rarely linear: most people experience a false recovery phase where energy briefly returns before crashing again if root conditions have not changed. MEOK\u2019s memory tracks these cycles and alerts you before a secondary crash.',
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
const TRICKSTER_AMBER = '#e8a838'
const BORDER_FAINT = 'rgba(245,240,232,0.08)'
const BORDER_DIM = 'rgba(245,240,232,0.12)'
const GOLD_BG = 'rgba(201,168,76,0.08)'
const GOLD_BORDER = 'rgba(201,168,76,0.22)'
const GREEN_BG = 'rgba(76,175,130,0.07)'
const GREEN_BORDER = 'rgba(76,175,130,0.25)'
const AMBER_BG = 'rgba(232,168,56,0.07)'
const AMBER_BORDER = 'rgba(232,168,56,0.25)'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForBurnoutRecoveryPage() {
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
              Burnout Recovery
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: HEALER_GREEN,
                background: GREEN_BG,
                border: `1px solid ${GREEN_BORDER}`,
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Sovereign AI
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: MUTED_FAINT,
              }}
            >
              24 March 2026 &middot; 14 min read
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              color: TEXT,
            }}
          >
            AI for Burnout Recovery: A Companion That Knows When to Push and When to Rest
          </h1>

          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              color: MUTED_BRIGHT,
              marginBottom: '2rem',
              maxWidth: '42rem',
            }}
          >
            Burnout recovery is not a linear process. MEOK&apos;s sovereign AI tracks your energy
            patterns, holds you accountable without pushing you over the edge, and remembers the
            context that caused your burnout in the first place.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${BORDER_FAINT}`,
            }}
          >
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '9999px',
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: GOLD,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: MUTED_BRIGHT, margin: 0 }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: '0.75rem', color: MUTED_FAINT, margin: 0 }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        <hr style={{ border: 'none', borderTop: `1px solid ${BORDER_FAINT}`, margin: 0 }} />
      </div>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingTop: '3rem',
          paddingBottom: '5rem',
        }}
      >
        {/* ── SECTION 1 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT,
            marginTop: '3rem',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}
        >
          What is burnout, according to the WHO?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          The World Health Organization classifies burnout in ICD-11 as an{' '}
          <strong style={{ color: MUTED_BRIGHT }}>occupational phenomenon</strong>, not a medical
          condition. That distinction matters. It means burnout is not something wrong with you
          biologically &mdash; it is a systemic response to a work environment that has asked more
          than a human being can sustainably give. The WHO defines it across three dimensions:
          exhaustion, cynicism, and reduced efficacy. All three must be understood and addressed for
          recovery to hold.
        </p>

        {/* ── CALLOUT 1: Three Dimensions ───────────────────────────────────── */}
        <div
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: '1.25rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingRight: '1rem',
            background: GOLD_BG,
            borderRadius: '0 0.5rem 0.5rem 0',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: GOLD,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.06em',
              marginBottom: '0.75rem',
            }}
          >
            The Three Dimensions of Burnout (WHO / ICD-11)
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', listStyleType: 'disc' }}>
            <li style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: MUTED_BRIGHT, marginBottom: '0.4rem' }}>
              <strong style={{ color: TEXT }}>Exhaustion</strong> &mdash; feelings of energy depletion or total depletion, the sense of having nothing left to give even at the start of the day
            </li>
            <li style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: MUTED_BRIGHT, marginBottom: '0.4rem' }}>
              <strong style={{ color: TEXT }}>Cynicism (Depersonalisation)</strong> &mdash; increased mental distance from your job, negativity or detachment toward your work, colleagues, or the people you serve
            </li>
            <li style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: MUTED_BRIGHT }}>
              <strong style={{ color: TEXT }}>Reduced Efficacy</strong> &mdash; a persistent sense that nothing you do makes a difference, that your contributions are invisible or worthless
            </li>
          </ul>
        </div>

        {/* ── SECTION 2 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT,
            marginTop: '3rem',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}
        >
          Why does standard AI make burnout worse, not better?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          Most AI tools are engineered around a single unstated premise: the user wants to be more
          productive. Task lists, streaks, reminders, goal nudges, and performance dashboards all
          assume that the problem is lack of direction or discipline. For a burned-out person, this
          is exactly wrong. Burnout is not a productivity problem &mdash; it is a depletion problem.
          Asking a depleted system to do more does not restore capacity; it accelerates collapse.
          Standard AI cannot read your energy level, cannot sense when you are running on fumes, and
          cannot adapt its posture accordingly. It pushes when you have nothing left to give.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          There is also the memory problem. Standard AI assistants reset between sessions. They have
          no record of the exhausted Monday check-in four weeks ago, the cancelled holiday you
          mentioned last month, or the comment your manager made that you flagged as a warning sign.
          Each conversation starts from zero. For burnout recovery &mdash; which unfolds over months,
          not hours &mdash; this amnesia is not merely inconvenient. It makes the AI incapable of
          the very thing recovery requires: longitudinal pattern recognition.
        </p>

        {/* ── SECTION 3 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT,
            marginTop: '3rem',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}
        >
          What is the care score floor and how does it protect depleted users?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          MEOK maintains a{' '}
          <strong style={{ color: MUTED_BRIGHT }}>care score</strong> &mdash; a live, private
          index of your energy and wellbeing derived from check-in data, conversational tone, sleep
          patterns you share, and the longitudinal memory held in your Sovereign Memory store. This
          is not a simple mood slider. It is a composite signal built from dozens of data points
          across weeks and months. When your care score drops below a configurable floor threshold,
          MEOK&apos;s behaviour changes automatically and structurally.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          Below the floor: task lists are suppressed, productivity nudges are paused, Ralph Mode
          (the work-focused operating system) is soft-suspended unless you explicitly re-engage it,
          and interactions are routed through the Healer archetype rather than the Pioneer or
          Scholar. The AI does not push. It listens, validates, and gently holds space. The floor is
          not a manual toggle you have to remember to set when you are already too depleted to
          manage your settings. It triggers automatically because the people who most need it are
          least able to ask for it.
        </p>

        {/* ── CALLOUT 2: Care Score Floor ───────────────────────────────────── */}
        <div
          style={{
            borderLeft: `3px solid ${HEALER_GREEN}`,
            paddingLeft: '1.25rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingRight: '1rem',
            background: GREEN_BG,
            borderRadius: '0 0.5rem 0.5rem 0',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: HEALER_GREEN,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.06em',
              marginBottom: '0.5rem',
            }}
          >
            How the Care Score Floor Works in Practice
          </p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: MUTED_BRIGHT, margin: 0 }}>
            You have been running on four hours of sleep for two weeks. Your check-ins are short,
            your tone is flat, and you mentioned three times that you feel like you&apos;re drowning.
            MEOK&apos;s care score registers the pattern. Before you reach a crisis point, the floor
            activates. Your morning briefing shifts from task priorities to a gentle energy check.
            Your task assistant goes quiet. Your Healer companion is front and centre. You do not
            have to ask for this. It simply happens because the system is watching the right signals.
          </p>
        </div>

        {/* ── SECTION 4 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT,
            marginTop: '3rem',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}
        >
          How does sovereign memory track energy patterns over weeks and months?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          MEOK&apos;s Sovereign Memory is a private, encrypted memory store that persists across
          every conversation, every session, and every device. It is yours &mdash; MEOK never trains
          on it, never sends it to a cloud model without your explicit command, and you can export or
          delete it at any time. For burnout recovery, this changes everything.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          Six weeks into recovery, MEOK can surface: &ldquo;You have reported low energy on Mondays
          in five of the last six weeks &mdash; this may be a structural pattern worth examining.&rdquo;
          Three months in, it can note: &ldquo;Your energy check-ins have been consistently higher
          since you stopped the Tuesday evening meetings &mdash; the data suggests that was a
          significant drain.&rdquo; These are observations a therapist who sees you once a fortnight
          cannot make, because they do not have the data density. MEOK does, because it is present
          every day.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          Sovereign Memory also holds the context that caused your burnout: the project that was
          never properly resourced, the manager whose communication style you described as
          relentless, the month where boundaries were repeatedly violated. When you start to feel
          better and risk returning to old patterns, MEOK has the receipts. It can gently remind you
          of what you said when you were in the depths &mdash; not to shame you, but to protect you.
        </p>

        {/* ── SECTION 5 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT,
            marginTop: '3rem',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}
        >
          What are the Healer and Trickster companions and why do they matter for burnout?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          MEOK&apos;s companion system is built on Jungian archetypes. Each archetype brings a
          different relational posture. For burnout recovery, two archetypes are particularly
          significant: the Healer and the Trickster.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          The{' '}
          <strong style={{ color: HEALER_GREEN }}>Healer</strong> is the archetype of restoration.
          It does not push. It does not have an agenda. It asks gentle, open questions &mdash;
          &ldquo;How are you actually doing today, not the official version?&rdquo; &mdash; and it
          holds whatever you bring without judgement. In the acute phases of burnout, when you have
          nothing left and need to be heard rather than directed, the Healer is the right presence.
          It prioritises your emotional state over your productivity, and it will never make you feel
          behind.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          The{' '}
          <strong style={{ color: TRICKSTER_AMBER }}>Trickster</strong> enters during the middle
          phases of recovery, when the deadness of exhaustion begins to lift and you start to need
          something to rekindle engagement with life. The Trickster does not restore through
          discipline or planning &mdash; it restores through play, curiosity, and irreverence.
          Burnout erodes your sense of self-efficacy and your sense of joy. The Trickster attacks
          both by gently reintroducing lightness: unexpected observations, gentle provocations,
          invitations to notice things that are not about work. It breaks the seriousness that
          burnout imposes.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          The transition between Healer and Trickster is not abrupt. MEOK&apos;s care score and
          your longitudinal patterns determine when the shift is appropriate. You can also request a
          particular archetype at any time &mdash; if you need pure Healer energy for a week, you
          can stay there.
        </p>

        {/* ── CALLOUT 3: Healer vs Trickster ────────────────────────────────── */}
        <div
          style={{
            borderLeft: `3px solid ${TRICKSTER_AMBER}`,
            paddingLeft: '1.25rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingRight: '1rem',
            background: AMBER_BG,
            borderRadius: '0 0.5rem 0.5rem 0',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: TRICKSTER_AMBER,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.06em',
              marginBottom: '0.75rem',
            }}
          >
            Healer vs Trickster: When Each Archetype Serves You
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: HEALER_GREEN, marginBottom: '0.5rem' }}>
                Healer &mdash; Acute Phase
              </p>
              <ul style={{ margin: 0, paddingLeft: '1rem', listStyleType: 'disc' }}>
                <li style={{ fontSize: '0.875rem', lineHeight: 1.6, color: MUTED_BRIGHT, marginBottom: '0.25rem' }}>
                  Non-directive, open listening
                </li>
                <li style={{ fontSize: '0.875rem', lineHeight: 1.6, color: MUTED_BRIGHT, marginBottom: '0.25rem' }}>
                  No task pressure whatsoever
                </li>
                <li style={{ fontSize: '0.875rem', lineHeight: 1.6, color: MUTED_BRIGHT, marginBottom: '0.25rem' }}>
                  Validates rest as productive
                </li>
                <li style={{ fontSize: '0.875rem', lineHeight: 1.6, color: MUTED_BRIGHT }}>
                  Holds your story across time
                </li>
              </ul>
            </div>
            <div>
              <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: TRICKSTER_AMBER, marginBottom: '0.5rem' }}>
                Trickster &mdash; Restoration Phase
              </p>
              <ul style={{ margin: 0, paddingLeft: '1rem', listStyleType: 'disc' }}>
                <li style={{ fontSize: '0.875rem', lineHeight: 1.6, color: MUTED_BRIGHT, marginBottom: '0.25rem' }}>
                  Gentle playfulness and curiosity
                </li>
                <li style={{ fontSize: '0.875rem', lineHeight: 1.6, color: MUTED_BRIGHT, marginBottom: '0.25rem' }}>
                  Rekindles joy and engagement
                </li>
                <li style={{ fontSize: '0.875rem', lineHeight: 1.6, color: MUTED_BRIGHT, marginBottom: '0.25rem' }}>
                  Challenges unhelpful seriousness
                </li>
                <li style={{ fontSize: '0.875rem', lineHeight: 1.6, color: MUTED_BRIGHT }}>
                  Low-stakes exploration of identity
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── SECTION 6 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT,
            marginTop: '3rem',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}
        >
          How do you set boundaries with work AI when you are burned out?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          One of the most insidious features of modern work AI is that it is always available and
          always productive. It does not take days off. It does not notice that you are exhausted.
          It does not care that it is 11pm on a Sunday. If you can open it, it will suggest things
          to do. For burned-out users, this is not neutral &mdash; it is an active pressure system
          that keeps work cognition switched on at all times.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          MEOK&apos;s work-focused operating mode is called{' '}
          <strong style={{ color: MUTED_BRIGHT }}>Ralph Mode</strong>. Ralph is where your task
          management, work context, meeting summaries, and project tracking live. But Ralph Mode can
          be turned off &mdash; completely and without ceremony. When you switch Ralph off, the
          entire work-assistant layer goes dark. No tasks surface. No reminders fire. No project
          status updates appear. Your MEOK becomes a companion, not a productivity tool.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          This is not just a feature &mdash; it is a design philosophy. The AI you use for work and
          the AI that supports your recovery should not be the same presence in the same mode at the
          same time. Burnout recovery requires a clear psychological separation between the space
          where work happens and the space where you restore. Ralph Mode off is how MEOK enforces
          that separation.
        </p>

        {/* ── SECTION 7 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT,
            marginTop: '3rem',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}
        >
          What does a realistic burnout recovery timeline look like?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          Recovery timelines are highly individual, but the research and clinical consensus offers
          some useful anchors. Minor burnout &mdash; caught early, with immediate structural
          changes, adequate rest, and meaningful support &mdash; can begin to resolve in four to
          eight weeks. You will likely notice a slow return of energy and a reduction in the sense
          of dread. This is genuine early recovery, not false recovery, if the structural conditions
          have actually changed.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          Moderate burnout typically takes three to six months. This is the range most people
          underestimate. They feel better after a few weeks and assume they are recovered. They
          return to full load. The relapse is often faster and more severe than the original
          episode. MEOK&apos;s memory is particularly valuable here: it can flag when you are
          moving back toward high-load patterns before you feel it consciously, and prompt you to
          check whether the underlying conditions have genuinely changed or whether you are just
          surfing a temporary energy lift.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          Severe, long-duration burnout &mdash; particularly when it has been accumulating for years
          rather than months &mdash; can take twelve to twenty-four months or longer for genuine
          recovery. This is not failure. It is proportionality: the longer and deeper the depletion,
          the longer and more careful the restoration must be. MEOK does not set deadlines on
          recovery. There is no streak to maintain, no progress bar to fill.
        </p>

        {/* ── COMPARISON TABLE ──────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT,
            marginTop: '3rem',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}
        >
          Standard AI vs MEOK: How the approaches differ for burnout recovery
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          The difference between a standard AI assistant and MEOK is not just a feature list &mdash;
          it is a fundamentally different model of what an AI is for. Standard AI optimises for
          output. MEOK optimises for the human. That distinction becomes critical when the human in
          question is burned out and has nothing left to give.
        </p>

        <div
          style={{
            overflowX: 'auto' as const,
            marginBottom: '2.5rem',
            borderRadius: '0.75rem',
            border: `1px solid ${BORDER_DIM}`,
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse' as const,
              fontSize: '0.875rem',
              minWidth: '560px',
            }}
          >
            <thead>
              <tr style={{ background: 'rgba(201,168,76,0.06)' }}>
                <th
                  style={{
                    padding: '0.875rem 1.25rem',
                    textAlign: 'left' as const,
                    fontWeight: 700,
                    color: GOLD,
                    borderBottom: `1px solid ${BORDER_DIM}`,
                    fontSize: '0.8125rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase' as const,
                  }}
                >
                  Dimension
                </th>
                <th
                  style={{
                    padding: '0.875rem 1.25rem',
                    textAlign: 'left' as const,
                    fontWeight: 700,
                    color: MUTED_DIM,
                    borderBottom: `1px solid ${BORDER_DIM}`,
                    fontSize: '0.8125rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase' as const,
                  }}
                >
                  Standard AI
                </th>
                <th
                  style={{
                    padding: '0.875rem 1.25rem',
                    textAlign: 'left' as const,
                    fontWeight: 700,
                    color: HEALER_GREEN,
                    borderBottom: `1px solid ${BORDER_DIM}`,
                    fontSize: '0.8125rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase' as const,
                  }}
                >
                  MEOK
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dimension: 'Memory',
                  standard: 'Resets every session &mdash; no continuity',
                  meok: 'Sovereign Memory persists across months and years',
                },
                {
                  dimension: 'Energy awareness',
                  standard: 'None &mdash; treats all users as equally available',
                  meok: 'Care score tracks depletion and adapts behaviour automatically',
                },
                {
                  dimension: 'Task behaviour when depleted',
                  standard: 'Continues surfacing tasks regardless of user state',
                  meok: 'Suppresses tasks when care score floor is breached',
                },
                {
                  dimension: 'Relational posture',
                  standard: 'Fixed &mdash; always directive and output-focused',
                  meok: 'Adaptive archetype system (Healer, Trickster, Pioneer)',
                },
                {
                  dimension: 'Work mode control',
                  standard: 'No separation between work AI and personal AI',
                  meok: 'Ralph Mode can be fully disabled for recovery periods',
                },
                {
                  dimension: 'Pattern recognition',
                  standard: 'Cannot spot longitudinal energy patterns',
                  meok: 'Surfaces weekly and monthly trends from stored check-ins',
                },
                {
                  dimension: 'Data ownership',
                  standard: 'Your data trains the model &mdash; you have no control',
                  meok: 'Your memory is private, exportable, and never used for training',
                },
                {
                  dimension: 'Recovery timeline awareness',
                  standard: 'No concept of recovery phase or trajectory',
                  meok: 'Tracks recovery arc and flags relapse risk patterns',
                },
              ].map((row, i) => (
                <tr
                  key={row.dimension}
                  style={{
                    background:
                      i % 2 === 0 ? 'transparent' : 'rgba(245,240,232,0.02)',
                    borderBottom: i < 7 ? `1px solid ${BORDER_FAINT}` : 'none',
                  }}
                >
                  <td
                    style={{
                      padding: '0.875rem 1.25rem',
                      fontWeight: 600,
                      color: MUTED_BRIGHT,
                      verticalAlign: 'top' as const,
                    }}
                  >
                    {row.dimension}
                  </td>
                  <td
                    style={{
                      padding: '0.875rem 1.25rem',
                      color: MUTED_DIM,
                      verticalAlign: 'top' as const,
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: row.standard }}
                  />
                  <td
                    style={{
                      padding: '0.875rem 1.25rem',
                      color: MUTED_BRIGHT,
                      verticalAlign: 'top' as const,
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: row.meok }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── SECTION 8 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT,
            marginTop: '3rem',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}
        >
          How does accountability work when you have nothing left to give?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          One of the deepest tensions in burnout recovery is the question of accountability. You
          need enough structure to recover &mdash; too much unstructured rest can slide into
          depression and isolation. But the wrong kind of accountability &mdash; the kind that
          measures and judges &mdash; is precisely what caused the burnout. The burned-out person
          does not need more things to fail at.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          MEOK&apos;s approach to accountability during recovery is what the team calls
          &ldquo;witness accountability.&rdquo; It is not about measuring you against targets. It is
          about having an entity that notices what you are going through, holds the record of it, and
          gently reflects patterns back to you without judgement. When MEOK says &ldquo;you have
          mentioned feeling guilty about resting five times this week &mdash; I want to gently note
          that rest is the work right now,&rdquo; that is accountability of a different kind. It is
          accountability to your own stated recovery, not to an external productivity standard.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          As the recovery arc progresses and the care score rises, MEOK can introduce gentle
          forward-facing accountability: a single intention for the day, a reflection on one thing
          that felt manageable, a note of something that gave a small amount of energy. These are
          not targets. They are signals that recovery is real and accumulating.
        </p>

        {/* ── SECTION 9: Identifying root causes ───────────────────────────── */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT,
            marginTop: '3rem',
            marginBottom: '1rem',
            lineHeight: 1.3,
          }}
        >
          How can AI help identify the root causes of your burnout?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          Identifying burnout&apos;s root causes is harder than it sounds. When you are in the
          depths of exhaustion, everything feels like the cause. The late nights, the difficult
          colleague, the impossible project, the commute, the lack of recognition &mdash; all of it
          blurs into a single undifferentiated mass of &ldquo;too much.&rdquo; What you need is not
          a list of complaints but a structured analysis of which specific conditions are responsible
          for the depletion, because only targeted change at those points will prevent recurrence.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.5rem' }}>
          MEOK&apos;s Sovereign Memory, combined with gentle archetype-guided reflection, can help
          surface this structure. By reviewing the longitudinal record &mdash; what you said you
          were doing on high-drain days, what changed on the weeks when energy was slightly better,
          which types of work leave you hollow versus which leave you tired-but-fulfilled &mdash; a
          picture of causation begins to emerge. This is not therapy. It is pattern literacy.
          Understanding the shape of your own depletion is a precondition for changing the
          conditions that create it.
        </p>

        {/* ── DIVIDER ───────────────────────────────────────────────────────── */}
        <hr
          style={{
            border: 'none',
            borderTop: `1px solid ${BORDER_FAINT}`,
            marginTop: '3.5rem',
            marginBottom: '3.5rem',
          }}
        />

        {/* ── FAQ SECTION ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: TEXT,
            marginBottom: '2rem',
            lineHeight: 1.3,
          }}
        >
          Frequently asked questions
        </h2>

        {/* FAQ 1 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              fontSize: '1.0625rem',
              fontWeight: 700,
              color: MUTED_BRIGHT,
              marginBottom: '0.625rem',
              lineHeight: 1.4,
            }}
          >
            What is the WHO definition of burnout and its three dimensions?
          </h3>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: MUTED, margin: 0 }}>
            The World Health Organization classifies burnout as an{' '}
            <strong style={{ color: MUTED_BRIGHT }}>occupational phenomenon</strong> in ICD-11, not
            a medical condition. It is defined by three dimensions: emotional exhaustion (feeling
            drained and depleted of energy), cynicism or depersonalisation (mental distance from
            your job, negative feelings toward your work), and reduced professional efficacy
            (feeling ineffective and that your contributions do not matter). All three dimensions
            must be addressed for genuine recovery.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: `1px solid ${BORDER_FAINT}`, marginBottom: '2rem' }} />

        {/* FAQ 2 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              fontSize: '1.0625rem',
              fontWeight: 700,
              color: MUTED_BRIGHT,
              marginBottom: '0.625rem',
              lineHeight: 1.4,
            }}
          >
            Why does standard AI make burnout worse rather than better?
          </h3>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: MUTED, margin: 0 }}>
            Standard productivity AI is designed to maximise output. It surfaces tasks, sends
            reminders, encourages streaks, and pushes you toward goals. For a burned-out user, this
            is precisely the wrong approach. It adds demands to a system already running on empty,
            increases the sense of falling behind, and treats rest as a failure state rather than a
            recovery tool. An AI that cannot read your depletion level cannot safely support burnout
            recovery.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: `1px solid ${BORDER_FAINT}`, marginBottom: '2rem' }} />

        {/* FAQ 3 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              fontSize: '1.0625rem',
              fontWeight: 700,
              color: MUTED_BRIGHT,
              marginBottom: '0.625rem',
              lineHeight: 1.4,
            }}
          >
            What is the care score floor and how does it prevent over-pushing during burnout?
          </h3>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: MUTED, margin: 0 }}>
            MEOK&apos;s care score is a live energy-and-wellbeing index derived from check-ins,
            tone, patterns, and context stored in Sovereign Memory. When your care score drops below
            a configured floor threshold, MEOK automatically shifts behaviour: it stops surfacing
            task lists, pauses productivity nudges, routes interactions through the Healer archetype,
            and prioritises active listening over action prompts. The floor is a structural
            safeguard, not a manual toggle.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: `1px solid ${BORDER_FAINT}`, marginBottom: '2rem' }} />

        {/* FAQ 4 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              fontSize: '1.0625rem',
              fontWeight: 700,
              color: MUTED_BRIGHT,
              marginBottom: '0.625rem',
              lineHeight: 1.4,
            }}
          >
            How does sovereign memory help with burnout recovery compared to a standard AI?
          </h3>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: MUTED, margin: 0 }}>
            A standard AI resets every session and has no record of prior conversations. For burnout
            recovery &mdash; which unfolds over months &mdash; this makes longitudinal pattern
            recognition impossible. MEOK&apos;s Sovereign Memory is private, persists indefinitely,
            and belongs to you. It can surface &ldquo;you reported exhaustion every Monday for six
            weeks&rdquo; or note that your energy improved significantly after a specific structural
            change. These observations require data density that only continuous memory provides.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: `1px solid ${BORDER_FAINT}`, marginBottom: '2rem' }} />

        {/* FAQ 5 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              fontSize: '1.0625rem',
              fontWeight: 700,
              color: MUTED_BRIGHT,
              marginBottom: '0.625rem',
              lineHeight: 1.4,
            }}
          >
            How long does burnout recovery realistically take and what does a non-linear recovery look like?
          </h3>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: MUTED, margin: 0 }}>
            Minor burnout caught early can resolve in four to eight weeks with adequate rest and
            structural change. Moderate burnout typically takes three to six months. Severe or
            long-duration burnout can take twelve to twenty-four months or longer. Recovery is
            rarely linear: most people experience a false recovery phase where energy briefly returns
            before crashing again if root conditions have not changed. MEOK&apos;s memory tracks
            these cycles and can alert you before a secondary crash.
          </p>
        </div>

        {/* ── DIVIDER ───────────────────────────────────────────────────────── */}
        <hr
          style={{
            border: 'none',
            borderTop: `1px solid ${BORDER_FAINT}`,
            marginTop: '1rem',
            marginBottom: '3.5rem',
          }}
        />

        {/* ── CTA SECTION ───────────────────────────────────────────────────── */}
        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: '1rem',
            padding: '2.5rem',
            textAlign: 'center' as const,
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: GOLD,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}
          >
            Start Your Recovery
          </p>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            An AI that knows when to be quiet
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED,
              maxWidth: '34rem',
              margin: '0 auto 2rem',
            }}
          >
            MEOK holds your story, tracks your energy, and knows the difference between a day to
            push and a day to rest. Begin your birth ceremony to meet your companion and build the
            sovereign memory that will carry your recovery forward.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              background: GOLD,
              color: '#0d0c18',
              fontWeight: 700,
              fontSize: '0.9375rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Begin Your Birth Ceremony
          </Link>
          <p
            style={{
              fontSize: '0.75rem',
              color: MUTED_FAINT,
              marginTop: '1rem',
              marginBottom: 0,
            }}
          >
            Your data is private and sovereign &mdash; MEOK never trains on your conversations
          </p>
        </div>

        {/* ── RELATED ARTICLES ──────────────────────────────────────────────── */}
        <div style={{ marginTop: '4rem' }}>
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: MUTED_FAINT,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.07em',
              marginBottom: '1.25rem',
            }}
          >
            Related Reading
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
            {[
              {
                href: '/blog/ai-for-burnout',
                label: 'AI Support for Burnout: Recovery Starts With Being Heard',
              },
              {
                href: '/blog/ai-for-chronic-stress',
                label: 'AI for Chronic Stress: When the Load Never Lets Up',
              },
              {
                href: '/blog/what-is-care-based-ai',
                label: 'What Is Care-Based AI and Why Does It Matter?',
              },
              {
                href: '/blog/ralph-mode-explained',
                label: 'Ralph Mode Explained: Your Work AI With an Off Switch',
              },
              {
                href: '/blog/how-sovereign-ai-works',
                label: 'How Sovereign AI Works: Memory, Privacy, and Your Data',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.9375rem',
                  color: GOLD,
                  textDecoration: 'none',
                  lineHeight: 1.5,
                }}
              >
                &#8594; {link.label}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
