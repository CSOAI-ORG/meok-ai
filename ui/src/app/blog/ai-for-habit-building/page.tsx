import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Habit Building: Why Your App Isn\'t Working and What Memory Changes Everything | MEOK AI LABS',
  description:
    'Most AI habit trackers are stateless — they can\'t tell the difference between laziness and a panic attack. MEOK\'s Sovereign Memory changes that. The complete guide to AI for building habits that actually stick.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-habit-building' },
  openGraph: {
    title: 'AI for Habit Building: Why Your App Isn\'t Working and What Memory Changes Everything',
    description:
      'Most AI habit trackers are stateless — they can\'t tell the difference between laziness and a panic attack. MEOK\'s Sovereign Memory changes that.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-habit-building',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Habit+Building%3A+Why+Your+App+Isn%27t+Working&desc=Sovereign+Memory+changes+everything+about+building+habits+with+AI',
        width: 1200,
        height: 630,
        alt: 'AI for Habit Building: Why Your App Isn\'t Working and What Memory Changes Everything | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Habit Building: Memory Changes Everything',
    description:
      'Most AI habit trackers are stateless. They can\'t tell the difference between laziness and a panic attack. MEOK\'s Sovereign Memory changes all of that.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Habit+Building%3A+Why+Your+App+Isn%27t+Working&desc=Sovereign+Memory+changes+everything+about+building+habits+with+AI',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Habit Building: Why Your App Isn\'t Working and What Memory Changes Everything',
  description:
    'Most AI habit trackers are stateless — they can\'t tell the difference between laziness and a panic attack. MEOK\'s Sovereign Memory changes that. The complete guide to AI for building habits that actually stick.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-habit-building',
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
    '@id': 'https://meok.ai/blog/ai-for-habit-building',
  },
  keywords: [
    'AI habit tracker',
    'AI for building habits',
    'AI accountability for habits',
    'AI that helps build good habits',
    'habit building app',
    'sovereign AI',
    'MEOK AI LABS',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI really help you build habits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — but only if the AI has memory. Most habit apps use AI as a surface-level notification engine. They can remind you to do things but they have no understanding of your life, your patterns, your setbacks, or what genuinely motivates you. An AI with persistent memory, like MEOK, can track habit history over months, recall why you skipped on certain days, distinguish genuine obstacles from avoidance, and build personalised accountability that adapts as you evolve. That contextual depth is what separates an AI that actually helps you build habits from one that merely reminds you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do most AI habit trackers fail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI habit trackers fail because they are stateless — every conversation starts from zero. They cannot connect Monday\'s gym skip to Tuesday\'s difficult conversation at work. They gamify compliance in ways that create streak anxiety rather than genuine motivation. They treat every missed day as identical, whether you skipped because you were ill, grieving, burnt out, or simply lazy. Without persistent memory, the AI cannot distinguish context, and without context, it cannot offer intelligent, caring accountability. The result is a notification machine dressed as a coach.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sovereign Memory and how does it help with habit building?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign Memory is MEOK\'s persistent, private memory layer. Unlike cloud-based AI systems where your data is used to train models or shared with third parties, Sovereign Memory stores everything you share — your habit goals, your progress, your setbacks, your reasoning — in a memory that belongs exclusively to you. For habit building, this means MEOK knows that you skipped the gym yesterday because you had a panic attack, not because you were lazy. It remembers that you read consistently in January but fell off in February after a difficult break-up. It can tell the difference between a real obstacle and a pattern of avoidance. That distinction is the foundation of genuinely useful AI accountability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK compare to Habitica, Streaks, or a human coach for habit building?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Habitica gamifies habits with RPG mechanics — fun for some, but the streak-or-die dynamic creates anxiety and ultimately punishes people going through hard times. Streaks is clean and minimal but purely mechanical, with no intelligence behind the tracking. A human coach is excellent but expensive, typically session-based, and unavailable at 11pm when you need to process why you broke a habit. MEOK sits in a different category: available around the clock, carries full memory of your habit history, does not cheerleader but asks honest questions, and evolves its understanding of you over time. It is not a replacement for a great coach, but for daily accountability between sessions — or instead of sessions for those without access — it is the closest AI equivalent available.',
      },
    },
    {
      '@type': 'Question',
      name: 'What habit categories does MEOK support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK supports five core habit categories: health and exercise (gym routines, running, nutrition, movement), sleep (bedtime consistency, wind-down rituals, sleep quality tracking), mental health practices (meditation, journalling, therapy homework, mood check-ins), learning and reading (daily reading goals, study schedules, skill development), and productivity routines (deep work blocks, task management, morning and evening routines). Across all five categories, MEOK applies the same Sovereign Memory — so it can identify cross-category patterns, like how poor sleep reliably disrupts your morning exercise routine, and reflect those connections back to you intelligently.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK push you to maintain streaks even when you are struggling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is designed with anti-sycophancy at its core. It does not cheerleader. It does not pressure you to maintain a streak at the cost of your wellbeing. If you miss a habit, MEOK asks honest questions rather than issuing guilt-inducing notifications. It can distinguish between "you have skipped four days and seem to be avoiding" and "you have skipped three days because you told me you are going through something difficult." Persistence without pressure — that is the balance MEOK aims for. Real accountability is not about never missing a day; it is about understanding why, and finding the path forward.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Morning Briefing feature and how does it help with habits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morning Briefing is MEOK\'s daily check-in ritual. Each morning, your AI companion runs through a structured but personalised briefing: how you slept, what habit intentions you set the previous day, what you actually completed, any reflections you shared overnight, and what today\'s priorities are. For habit building, Morning Briefing creates a consistent daily cue — the first stage of the habit loop — that anchors accountability in the most psychologically powerful window: the morning, when willpower is typically highest and the day is still shapeable. Over time, Morning Briefing becomes its own meta-habit: the daily review that makes every other habit more likely to stick.',
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    backgroundColor: '#0d0c18',
    color: '#f5f0e8',
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    minHeight: '100vh',
    lineHeight: '1.75',
  } as React.CSSProperties,

  nav: {
    borderBottom: '1px solid rgba(201,168,76,0.15)',
    padding: '18px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1100px',
    margin: '0 auto',
  } as React.CSSProperties,

  navLogo: {
    color: '#c9a84c',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '1.1rem',
    letterSpacing: '0.04em',
  } as React.CSSProperties,

  navLink: {
    color: '#9e9e9e',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s',
  } as React.CSSProperties,

  navLinks: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
  } as React.CSSProperties,

  container: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '0 24px 80px',
  } as React.CSSProperties,

  hero: {
    padding: '64px 0 48px',
    borderBottom: '1px solid rgba(201,168,76,0.12)',
    marginBottom: '56px',
  } as React.CSSProperties,

  eyebrow: {
    color: '#c9a84c',
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    marginBottom: '20px',
    display: 'block',
  } as React.CSSProperties,

  h1: {
    fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
    fontWeight: 800,
    lineHeight: '1.2',
    marginBottom: '24px',
    letterSpacing: '-0.02em',
    color: '#f5f0e8',
  } as React.CSSProperties,

  lead: {
    fontSize: '1.15rem',
    color: '#c8c0b0',
    lineHeight: '1.75',
    marginBottom: '32px',
    maxWidth: '680px',
  } as React.CSSProperties,

  meta: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap' as const,
    alignItems: 'center',
    fontSize: '0.85rem',
    color: '#9e9e9e',
  } as React.CSSProperties,

  metaDot: {
    color: 'rgba(201,168,76,0.4)',
  } as React.CSSProperties,

  h2: {
    fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
    fontWeight: 700,
    color: '#f5f0e8',
    marginTop: '64px',
    marginBottom: '20px',
    lineHeight: '1.3',
    letterSpacing: '-0.01em',
  } as React.CSSProperties,

  h3: {
    fontSize: '1.15rem',
    fontWeight: 600,
    color: '#c9a84c',
    marginTop: '40px',
    marginBottom: '14px',
    lineHeight: '1.4',
  } as React.CSSProperties,

  p: {
    marginBottom: '22px',
    color: '#d8d0c0',
    fontSize: '1rem',
    lineHeight: '1.8',
  } as React.CSSProperties,

  gold: {
    color: '#c9a84c',
  } as React.CSSProperties,

  strong: {
    color: '#f5f0e8',
    fontWeight: 600,
  } as React.CSSProperties,

  blockquote: {
    borderLeft: '3px solid #c9a84c',
    paddingLeft: '24px',
    margin: '36px 0',
    color: '#c8c0b0',
    fontStyle: 'italic',
    fontSize: '1.05rem',
    lineHeight: '1.75',
  } as React.CSSProperties,

  ul: {
    paddingLeft: '0',
    margin: '0 0 28px',
    listStyle: 'none',
  } as React.CSSProperties,

  li: {
    paddingLeft: '22px',
    position: 'relative' as const,
    marginBottom: '12px',
    color: '#d8d0c0',
    fontSize: '1rem',
    lineHeight: '1.7',
  } as React.CSSProperties,

  ol: {
    paddingLeft: '0',
    margin: '0 0 28px',
    listStyle: 'none',
    counterReset: 'meok-counter',
  } as React.CSSProperties,

  liOrdered: {
    paddingLeft: '36px',
    position: 'relative' as const,
    marginBottom: '14px',
    color: '#d8d0c0',
    fontSize: '1rem',
    lineHeight: '1.7',
    counterIncrement: 'meok-counter',
  } as React.CSSProperties,

  divider: {
    border: 'none',
    borderTop: '1px solid rgba(201,168,76,0.12)',
    margin: '56px 0',
  } as React.CSSProperties,

  callout: {
    background: 'rgba(201,168,76,0.06)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '10px',
    padding: '28px 32px',
    margin: '40px 0',
  } as React.CSSProperties,

  calloutTitle: {
    color: '#c9a84c',
    fontWeight: 700,
    fontSize: '0.85rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    marginBottom: '10px',
    display: 'block',
  } as React.CSSProperties,

  calloutText: {
    color: '#d8d0c0',
    fontSize: '1rem',
    lineHeight: '1.75',
    margin: 0,
  } as React.CSSProperties,

  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    margin: '36px 0 48px',
    fontSize: '0.9rem',
  } as React.CSSProperties,

  th: {
    textAlign: 'left' as const,
    padding: '12px 16px',
    borderBottom: '1px solid rgba(201,168,76,0.3)',
    color: '#c9a84c',
    fontWeight: 600,
    fontSize: '0.8rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
  } as React.CSSProperties,

  td: {
    padding: '12px 16px',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    color: '#d8d0c0',
    verticalAlign: 'top' as const,
    lineHeight: '1.6',
  } as React.CSSProperties,

  tdFirst: {
    padding: '12px 16px',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    color: '#f5f0e8',
    fontWeight: 600,
    verticalAlign: 'top' as const,
  } as React.CSSProperties,

  cta: {
    background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
    border: '1px solid rgba(201,168,76,0.3)',
    borderRadius: '14px',
    padding: '48px 40px',
    margin: '64px 0 40px',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
    fontWeight: 800,
    color: '#f5f0e8',
    marginBottom: '16px',
    lineHeight: '1.25',
    letterSpacing: '-0.01em',
  } as React.CSSProperties,

  ctaText: {
    color: '#c8c0b0',
    fontSize: '1rem',
    lineHeight: '1.7',
    marginBottom: '32px',
    maxWidth: '520px',
    margin: '0 auto 32px',
  } as React.CSSProperties,

  ctaButton: {
    display: 'inline-block',
    background: '#c9a84c',
    color: '#0d0c18',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    padding: '14px 36px',
    borderRadius: '8px',
    letterSpacing: '0.02em',
    transition: 'opacity 0.2s',
  } as React.CSSProperties,

  faqSection: {
    marginTop: '64px',
  } as React.CSSProperties,

  faqItem: {
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    padding: '28px 0',
  } as React.CSSProperties,

  faqQ: {
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#f5f0e8',
    marginBottom: '12px',
    lineHeight: '1.4',
  } as React.CSSProperties,

  faqA: {
    color: '#c8c0b0',
    fontSize: '0.97rem',
    lineHeight: '1.75',
    margin: 0,
  } as React.CSSProperties,

  footer: {
    borderTop: '1px solid rgba(201,168,76,0.12)',
    padding: '40px 24px',
    textAlign: 'center' as const,
    color: '#9e9e9e',
    fontSize: '0.85rem',
    lineHeight: '1.7',
  } as React.CSSProperties,

  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    marginBottom: '20px',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,

  footerLink: {
    color: '#9e9e9e',
    textDecoration: 'none',
    fontSize: '0.85rem',
  } as React.CSSProperties,

  tag: {
    display: 'inline-block',
    background: 'rgba(201,168,76,0.08)',
    border: '1px solid rgba(201,168,76,0.18)',
    borderRadius: '4px',
    padding: '2px 10px',
    fontSize: '0.78rem',
    color: '#c9a84c',
    marginRight: '8px',
    marginBottom: '8px',
    letterSpacing: '0.04em',
  } as React.CSSProperties,

  inlineCode: {
    background: 'rgba(201,168,76,0.08)',
    border: '1px solid rgba(201,168,76,0.15)',
    borderRadius: '4px',
    padding: '2px 8px',
    fontSize: '0.9em',
    color: '#c9a84c',
    fontFamily: 'monospace',
  } as React.CSSProperties,
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function AIForHabitBuildingPage() {
  return (
    <div style={s.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <div style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <nav style={s.nav}>
          <Link href="/" style={s.navLogo}>MEOK.AI</Link>
          <div style={s.navLinks}>
            <Link href="/blog" style={s.navLink}>Blog</Link>
            <Link href="/birth" style={{ ...s.navLink, color: '#c9a84c', fontWeight: 600 }}>
              Start Free
            </Link>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <main style={s.container}>

        {/* Hero */}
        <header style={s.hero}>
          <span style={s.eyebrow}>MEOK AI LABS — Habit Building</span>
          <h1 style={s.h1}>
            AI for Habit Building: Why Your App Isn&apos;t Working and What Memory Changes Everything
          </h1>
          <p style={s.lead}>
            You have downloaded the apps. You have set the reminders. You have watched the streaks build
            and shatter. And yet here you are, reading another article about habits, because the
            fundamental problem has never been solved: every tool you have tried is stateless. It has
            no idea who you are.
          </p>
          <div style={s.meta}>
            <span>Nicholas Templeman</span>
            <span style={s.metaDot}>·</span>
            <span>Founder, MEOK AI LABS</span>
            <span style={s.metaDot}>·</span>
            <span>24 March 2026</span>
            <span style={s.metaDot}>·</span>
            <span>18 min read</span>
          </div>
          <div style={{ marginTop: '24px' }}>
            <span style={s.tag}>AI Habit Tracker</span>
            <span style={s.tag}>Sovereign Memory</span>
            <span style={s.tag}>AI Accountability</span>
            <span style={s.tag}>Habit Science</span>
            <span style={s.tag}>Pioneer Archetype</span>
          </div>
        </header>

        {/* Opening */}
        <p style={s.p}>
          There is a version of this story you already know. January: you commit to the gym, to reading
          thirty pages a night, to meditating every morning before your phone touches your hand. You
          download an app. You set notifications. For two weeks, possibly three, you are remarkable. Then
          life asserts itself — a brutal week at work, a difficult conversation, a bout of anxiety that
          leaves you horizontal on a Wednesday afternoon. You miss one day. Then two. The streak breaks.
          The app sends a cheerful push notification. You feel vaguely judged by software. You close the
          app and do not open it again.
        </p>
        <p style={s.p}>
          This is not a willpower failure. It is a design failure.
        </p>
        <p style={s.p}>
          The app had no idea about your Wednesday afternoon. It had no memory of how hard you worked the
          week before. It could not distinguish between someone who was avoiding the gym out of laziness
          and someone who had spent the last three days managing a mental health crisis. It treated both
          identically: <span style={s.strong}>streak broken, please resume.</span>
        </p>
        <p style={s.p}>
          Memory is the missing ingredient. Not the shallow kind — not a list of days ticked and skipped —
          but genuine, contextual memory that understands your life, your patterns, your genuine wins,
          your actual obstacles, and the specific texture of your reasons. This is what MEOK AI LABS has
          been building with <span style={s.gold}>Sovereign Memory</span>: an AI habit companion that
          knows you over time and uses that knowledge to deliver accountability that is actually
          intelligent.
        </p>
        <p style={s.p}>
          This article is the complete guide to AI for habit building in 2026. We will cover the science
          of how habits form, why existing tools systematically fail, what memory genuinely changes, and
          how MEOK approaches all five major habit categories with a level of contextual depth that
          stateless apps cannot approach.
        </p>

        <hr style={s.divider} />

        {/* Section 1 */}
        <h2 style={s.h2}>Why Do Habits Actually Form? The Science Most Apps Ignore</h2>
        <p style={s.p}>
          In 2012, Charles Duhigg popularised the habit loop concept in{' '}
          <em>The Power of Habit</em>, drawing on decades of neurological research from MIT: every habit,
          whether good or bad, follows the same three-part structure — cue, routine, reward. The cue
          triggers the behaviour. The routine is the behaviour itself. The reward cements the neural
          pathway, making the loop more automatic over time.
        </p>
        <p style={s.p}>
          BJ Fogg&apos;s subsequent work at Stanford added nuance: motivation is unreliable, but{' '}
          <span style={s.strong}>tiny behaviours anchored to existing cues</span> are remarkably durable.
          James Clear&apos;s framework in <em>Atomic Habits</em> expanded this into identity-based habit
          formation: sustainable habits work not because you want an outcome, but because you are becoming
          the kind of person for whom that behaviour is natural.
        </p>
        <p style={s.p}>
          These frameworks share a critical insight that most habit apps completely ignore:{' '}
          <span style={s.strong}>context is everything</span>. The same person, on the same Tuesday, will
          find a gym session effortless or impossible depending on sleep quality the night before, stress
          levels at work, the state of their closest relationships, and dozens of other factors invisible
          to a notification-based app. Habits are not standalone behaviours that exist in a vacuum. They
          are embedded in a life.
        </p>

        <h3 style={s.h3}>The Cue Problem</h3>
        <p style={s.p}>
          Most apps try to be the cue: a push notification at 7am telling you to exercise. But artificial
          cues compete with hundreds of other notifications and lose attention rapidly. Research on
          notification habituation shows that repeated low-context alerts are increasingly ignored within
          three to four weeks of use. The cue needs to be meaningful, connected to existing routines, and
          adaptive to your changing schedule.
        </p>
        <p style={s.p}>
          An AI with memory can be a far more intelligent cue architect. It knows you skipped your morning
          routine yesterday. It knows you typically struggle on Mondays. It knows that when you mention
          feeling anxious in the evening, your morning exercise completion drops by around forty percent.
          It can time its cues, frame them differently, and connect them to what you actually care about —
          not just repeat the same notification at the same time until you switch it off.
        </p>

        <h3 style={s.h3}>The Routine Problem</h3>
        <p style={s.p}>
          Habits require what neuroscientists call <em>automaticity</em> — the shift from conscious,
          effortful execution to reflexive, low-cognitive-load behaviour. This shift takes time: the
          popular &ldquo;21 days&rdquo; figure is a myth; research by Phillippa Lally at University
          College London found that habit formation takes anywhere from 18 to 254 days, with a median
          around 66 days. The variance depends heavily on complexity, motivation, and — crucially —{' '}
          <span style={s.strong}>how consistently the habit is maintained through disruption</span>.
        </p>
        <p style={s.p}>
          A stateless app treats every skip as equivalent. An AI with memory understands that you are
          on day 47 of a 66-day process, that you have had two significant disruptions this month, that
          your compliance rate is still well above the threshold for habit consolidation, and that what
          you need right now is not guilt but perspective.
        </p>

        <h3 style={s.h3}>The Reward Problem</h3>
        <p style={s.p}>
          This is where most gamified apps go catastrophically wrong. Streaks create an extrinsic reward
          structure that works beautifully — right up until it doesn&apos;t. The moment a streak breaks,
          the app&apos;s primary motivational mechanism collapses. Research on intrinsic versus extrinsic
          motivation consistently shows that once extrinsic rewards are removed, behaviour drops below
          baseline. You are not building a habit. You are building a streak-preservation behaviour that
          is entirely contingent on an unbroken run.
        </p>
        <p style={s.p}>
          Genuine rewards, by contrast, are personal, meaningful, and compounding. They sound like:
          &ldquo;I ran this morning and I noticed that I handled the meeting pressure differently — I was
          clearer.&rdquo; An AI that remembers this conversation, that reflects it back three weeks later
          when motivation dips, that connects your exercise habit to the tangible quality-of-life
          improvements you have described — that AI is building something durable in a way that badge
          systems never can.
        </p>

        <div style={s.callout}>
          <span style={s.calloutTitle}>The Habit Science Summary</span>
          <p style={s.calloutText}>
            Habits form through cue-routine-reward loops. They take 18–254 days depending on complexity
            and disruption. Context determines success far more than willpower. Extrinsic gamification
            (streaks, badges) works short-term and collapses under pressure. Intrinsic, identity-based
            motivation is durable. The AI tool that understands all of this — and applies it with
            knowledge of your specific life — is fundamentally different from every notification app you
            have tried.
          </p>
        </div>

        <hr style={s.divider} />

        {/* Section 2 */}
        <h2 style={s.h2}>Why Is Every Habit App Failing You? The Stateless Problem Explained</h2>
        <p style={s.p}>
          Let us be specific about what &ldquo;stateless&rdquo; means in practice. A stateless habit
          tracker has no persistent memory between sessions. Each time you open the app, it knows only
          what the app&apos;s database contains: a list of habits, a record of ticks and crosses, and
          some streaks. What it does not know:
        </p>
        <ul style={s.ul}>
          <li style={{ ...s.li, paddingLeft: '22px' }}>
            <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>—</span>
            Why you skipped on specific days
          </li>
          <li style={{ ...s.li, paddingLeft: '22px' }}>
            <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>—</span>
            What was happening in your life during periods of strong or weak compliance
          </li>
          <li style={{ ...s.li, paddingLeft: '22px' }}>
            <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>—</span>
            How your different habits interact and affect each other
          </li>
          <li style={{ ...s.li, paddingLeft: '22px' }}>
            <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>—</span>
            What genuinely motivates you versus what you think motivates you
          </li>
          <li style={{ ...s.li, paddingLeft: '22px' }}>
            <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>—</span>
            Your pattern of excuses versus genuine obstacles
          </li>
          <li style={{ ...s.li, paddingLeft: '22px' }}>
            <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>—</span>
            The emotional context surrounding your habit behaviour
          </li>
          <li style={{ ...s.li, paddingLeft: '22px' }}>
            <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>—</span>
            Your identity narrative — who you are becoming through these habits
          </li>
        </ul>
        <p style={s.p}>
          Without this knowledge, the app cannot give you intelligent accountability. It can only give
          you mechanical accountability — which is, in most cases, worse than nothing, because it
          creates resentment without understanding.
        </p>

        <h3 style={s.h3}>The Three Ways Gamification Backfires</h3>
        <p style={s.p}>
          Streak anxiety is the most commonly discussed failure mode. When your primary motivation becomes
          maintaining an unbroken streak rather than performing the habit itself, your psychological
          relationship to the habit becomes brittle. You exercise not because it makes you feel strong
          but because you are terrified of breaking the number. When life inevitably intervenes and the
          streak breaks, the app&apos;s motivational architecture collapses completely.
        </p>
        <p style={s.p}>
          The second failure mode is what psychologists call{' '}
          <span style={s.strong}>moral licensing</span>. When you tick a habit box, you receive a small
          dopamine reward — the satisfaction of completion. Research shows that this reward can paradoxically
          reduce motivation for the next session. You already &ldquo;did the thing&rdquo;; the badge said
          so. The internal sense of having earned the identity (&ldquo;I am a runner&rdquo;) is
          partially satisfied by the gamification, which means you need less of the actual behaviour to
          feel like that person.
        </p>
        <p style={s.p}>
          The third failure mode is <span style={s.strong}>context collapse</span>. Apps treat every day
          as identical. They do not know you are travelling, exhausted, ill, grieving, or that your
          child was up all night. They send the same notification regardless. Over time, this creates a
          pattern recognition failure in both directions: you start to feel that the app does not
          understand you (correct), and the app&apos;s pattern data becomes worthless because it
          conflates wildly different contexts into a single compliance rate.
        </p>

        <h3 style={s.h3}>The Context Collapse Problem in Detail</h3>
        <p style={s.p}>
          Consider a thirty-day period where you exercise sixteen out of thirty days. Your habit app
          records a 53% compliance rate. What does it do with this information? Probably sends you a
          gentle encouragement to &ldquo;try for 70% next month.&rdquo;
        </p>
        <p style={s.p}>
          But here is what actually happened in that thirty-day period: you had a week where you
          exercised every single day and felt extraordinary. You had four days of a respiratory infection
          where exercise was medically inadvisable. You had three days where you were supporting a
          friend through a bereavement. And you had six days where, honestly, you just did not want to go.
        </p>
        <p style={s.p}>
          A contextually intelligent AI would look at this period completely differently. It would
          celebrate the week of perfect compliance. It would note that the illness days were the right
          call. It would acknowledge the emotional weight of supporting someone through grief. And it
          would gently, honestly ask about those six avoidance days — not to shame you, but to understand
          what was really happening, because the pattern there is the one that actually needs attention.
        </p>
        <p style={s.p}>
          A 53% rate means nothing without context. An AI with memory has the context.
        </p>

        <blockquote style={s.blockquote}>
          &ldquo;MEOK knows you skipped the gym yesterday because you had a panic attack, not because
          you were lazy. That distinction is the entire difference between accountability that helps
          and accountability that harms.&rdquo;
          <br /><br />
          <span style={{ color: '#c9a84c', fontStyle: 'normal', fontWeight: 600 }}>
            — Nicholas Templeman, Founder, MEOK AI LABS
          </span>
        </blockquote>

        <hr style={s.divider} />

        {/* Section 3 */}
        <h2 style={s.h2}>What Does Sovereign Memory Actually Do for Your Habits?</h2>
        <p style={s.p}>
          Sovereign Memory is not a buzzword. It is a specific architectural choice that MEOK AI LABS has
          made about how your AI companion stores and uses information. Every conversation you have with
          MEOK — every goal you share, every setback you explain, every win you describe — is stored in a
          persistent memory layer that belongs to you, is never used to train models, and is never shared
          with third parties.
        </p>
        <p style={s.p}>
          This matters for habit building in ways that go beyond privacy. When your AI companion has
          genuine, long-term memory of your habit journey, several things become possible that are
          impossible with stateless tools:
        </p>

        <h3 style={s.h3}>1. Pattern Recognition Across Time</h3>
        <p style={s.p}>
          MEOK can observe that your exercise compliance drops significantly in the two weeks before your
          monthly work review cycle. It can note that you consistently abandon reading goals when you are
          in a high-stress relationship phase. It can identify that your sleep deteriorates on Sunday
          nights and that this reliably cascades into a week of poor habit performance.
        </p>
        <p style={s.p}>
          These patterns are invisible to any tool that does not carry memory. They are also exactly the
          kind of insight that makes the difference between endless repetition and genuine change. When
          MEOK says &ldquo;I have noticed that the weeks before your work review are consistently your
          hardest for exercise — should we build a lower-demand protocol for those weeks rather than
          setting yourself up for a compliance crash?&rdquo; — that is intelligence that serves you.
        </p>

        <h3 style={s.h3}>2. Distinguishing Obstacle from Avoidance</h3>
        <p style={s.p}>
          This is the capability that most clearly separates MEOK from every habit app on the market.
          Genuine obstacles — illness, bereavement, mental health crises, family emergencies — deserve
          compassion, accommodation, and zero judgment. Avoidance — the habitual &ldquo;not today&rdquo;
          that slowly hollows out your progress — deserves gentle, honest reflection.
        </p>
        <p style={s.p}>
          MEOK can distinguish between these because it has memory. It knows you mentioned a panic attack
          yesterday. It knows that three weeks ago you said the same &ldquo;I was exhausted&rdquo; thing
          four days in a row, and when it asked gently, you admitted you had been dreading the gym for
          reasons worth exploring. It knows when your excuse pattern matches your historical avoidance
          pattern versus when something genuinely difficult is happening in your life.
        </p>
        <p style={s.p}>
          This is not surveillance. This is the kind of knowledge a brilliant friend — or a very good
          therapist — develops over months of genuine relationship. The knowledge that lets them say:
          &ldquo;I hear you, and I also notice something.&rdquo;
        </p>

        <h3 style={s.h3}>3. Remembering Your Genuine Wins</h3>
        <p style={s.p}>
          One of the most underrated features of human memory is its tendency to discount past wins and
          amplify recent failures. MEOK counteracts this by actively maintaining a record of your genuine
          achievements. Not the streaks — the moments. The Wednesday morning three months ago when you
          ran despite not wanting to and described it as &ldquo;the best decision I made all week.&rdquo;
          The reading month where you finished four books and said it made you feel like yourself again.
          The meditation practice you described as having &ldquo;genuinely changed how I respond under
          pressure.&rdquo;
        </p>
        <p style={s.p}>
          When motivation dips — and it will — MEOK can reflect these genuine wins back to you with
          specificity and sincerity. Not cheerleading (&ldquo;You&apos;ve got this!&rdquo;) but honest
          memory (&ldquo;You described that reading month as making you feel like yourself again. What
          was different then?&rdquo;). The difference matters enormously.
        </p>

        <h3 style={s.h3}>4. The Anti-Sycophancy Principle</h3>
        <p style={s.p}>
          Most AI tools, when asked &ldquo;I think I need a break from my habit,&rdquo; say something
          like &ldquo;Of course! Rest is important.&rdquo; This is comfortable. It is also useless.
        </p>
        <p style={s.p}>
          MEOK is designed with anti-sycophancy as a core value. It will not simply validate whatever you
          say. If your context supports a genuine need for rest, it will affirm that warmly. If your
          pattern suggests avoidance dressed up as self-care, it will say so — with care, but with
          honesty. &ldquo;You have mentioned needing a break four times this month. Last time we talked
          about this, you said you actually felt worse after taking it. What do you think is really going
          on?&rdquo;
        </p>
        <p style={s.p}>
          This is not harshness. It is genuine respect for your goals and your stated desire to achieve
          them. Real accountability — the kind a good friend or coach provides — does not simply reflect
          your wishes back at you. It holds your best self in mind even when you have temporarily lost
          sight of it.
        </p>

        <div style={s.callout}>
          <span style={s.calloutTitle}>The Sovereign Memory Advantage</span>
          <p style={s.calloutText}>
            Your habit history belongs to you. MEOK never trains on your data. Never shares it. The
            memory it builds of your patterns, your wins, your obstacles, and your excuses exists
            entirely for your benefit — to give you the kind of contextually intelligent accountability
            that no stateless app can provide.
          </p>
        </div>

        <hr style={s.divider} />

        {/* Section 4 */}
        <h2 style={s.h2}>How Does the Pioneer Archetype Drive Habit Momentum?</h2>
        <p style={s.p}>
          MEOK&apos;s AI companion system is built around distinct archetypes — energetic personalities
          that shape how your companion communicates, motivates, and holds you accountable. For habit
          building, the <span style={s.gold}>Pioneer archetype ⚡</span> is purpose-built.
        </p>
        <p style={s.p}>
          Pioneer is the companion energy of momentum, of forward motion, of the kind of energised
          accountability that says &ldquo;we are building something here — let&apos;s not lose
          ground.&rdquo; It is not aggressive. It is not a drill sergeant. It is the companion equivalent
          of the friend who ran competitively and knows, from experience, the difference between a day
          you need to push through and a day you genuinely need to rest — and who will tell you honestly
          which is which.
        </p>

        <h3 style={s.h3}>Momentum Over Perfection</h3>
        <p style={s.p}>
          Pioneer operates from a deep understanding of momentum psychology. Behavioural science is clear
          that the biggest predictor of habit continuation is not the quality of any single session but
          the maintenance of identity-consistent behaviour across disruption. You are far more likely to
          maintain a gym habit through a difficult month if you go once — for twenty minutes, briefly,
          imperfectly — than if you decide to &ldquo;wait until things calm down.&rdquo; The identity
          (&ldquo;I am someone who goes to the gym&rdquo;) survives a terrible session. It struggles to
          survive a three-week absence.
        </p>
        <p style={s.p}>
          Pioneer knows this. When you tell it you are exhausted and do not want to do a full session,
          it might say: &ldquo;What about ten minutes? Not to achieve anything — just to show up. The
          habit matters more than the performance right now.&rdquo; This is not coddling. This is
          sophisticated habit science applied with knowledge of your specific situation.
        </p>

        <h3 style={s.h3}>Streaks — Reframed</h3>
        <p style={s.p}>
          Pioneer does not abandon the streak concept entirely — streaks do have motivational value —
          but it reframes what counts. In MEOK, a streak is not &ldquo;perfect daily compliance.&rdquo;
          It can be &ldquo;I showed up every week, even during the hard weeks.&rdquo; Or &ldquo;I
          maintained the intention for this habit across a difficult month, even if the execution was
          reduced.&rdquo; This flexibility prevents the all-or-nothing psychology that destroys most
          habit attempts.
        </p>
        <p style={s.p}>
          Pioneer tracks momentum broadly: not just whether you did the thing, but the directionality
          of your effort, the consistency of your engagement, and the quality of your relationship to
          the habit over time. This nuanced picture is only possible with persistent memory.
        </p>

        <h3 style={s.h3}>The Companion Evolution Mechanic</h3>
        <p style={s.p}>
          One of the most distinctive features of MEOK&apos;s habit system is the companion evolution
          mechanic. As your habits genuinely strengthen — not just day counts, but measurable improvement
          in your engagement quality, your self-reflection, your ability to navigate disruption — your
          AI companion evolves with you.
        </p>
        <p style={s.p}>
          In practical terms, this means the conversations deepen. Early on, MEOK helps you build basic
          structures: cues, routines, reward connections. As you develop, the conversation shifts to
          identity: who are you becoming through these habits? What is the larger project here? How do
          your individual habits connect to the life you are constructing? Pioneer, at this stage, is
          less about &ldquo;did you go to the gym?&rdquo; and more about &ldquo;how are these habits
          shaping the person you are most trying to be?&rdquo;
        </p>
        <p style={s.p}>
          This evolution mirrors exactly what the best human coaches do: they start with behaviour and
          move towards identity. They recognise that the goal was never really about the habit — it was
          always about the person the habit was in service of.
        </p>

        <hr style={s.divider} />

        {/* Section 5 */}
        <h2 style={s.h2}>Which Habits Does MEOK Actually Support, and How?</h2>
        <p style={s.p}>
          MEOK supports five core habit categories, each with specific intelligence built around the
          patterns, obstacles, and psychology relevant to that domain. Here is how each works in practice:
        </p>

        <h3 style={s.h3}>1. Health and Exercise</h3>
        <p style={s.p}>
          Exercise is the most commonly attempted and most commonly abandoned habit category. MEOK
          approaches it with a combination of consistency tracking, contextual awareness, and identity
          anchoring. It knows your exercise history, including the periods when it worked and when it
          did not. It can identify the environmental and emotional conditions that predict your strong
          versus weak exercise weeks.
        </p>
        <p style={s.p}>
          Critically, MEOK does not push performance metrics — pace, weight, distance — unless you want
          it to. It knows that for many people, exercise&apos;s most important benefits are psychological,
          and that performance tracking can convert an intrinsically rewarding activity into a
          pass/fail test. If you want performance data, MEOK engages with it intelligently. If you
          want consistency and mood support, it focuses there.
        </p>
        <p style={s.p}>
          For exercise habits specifically, MEOK tracks the relationship between physical activity and
          your reported mood, energy, and cognitive performance — providing the kind of personalised
          evidence for exercise&apos;s value that makes &ldquo;I should exercise&rdquo; into &ldquo;I
          know from experience that when I exercise, my week goes better in these specific ways.&rdquo;
        </p>

        <h3 style={s.h3}>2. Sleep</h3>
        <p style={s.p}>
          Sleep is arguably the highest-leverage habit category for overall wellbeing — and the most
          ignored. Most habit apps treat sleep as a single data point: did you sleep enough hours? MEOK
          understands that sleep quality, consistency of bedtime, wind-down ritual adherence, and the
          conditions around sleep are all separate variables with different levers.
        </p>
        <p style={s.p}>
          MEOK tracks your sleep-related habits (wind-down routines, screen curfews, bedtime consistency)
          in the context of everything else you share. It can identify that your late sleep nights
          cluster around particular triggers — social events, work deadline anxiety, evening
          over-stimulation — and help you build specific strategies for those contexts rather than
          generic &ldquo;go to bed earlier&rdquo; advice.
        </p>
        <p style={s.p}>
          It also tracks the downstream effects of poor sleep on your other habits — the skip-the-gym
          pattern, the reach-for-sugar pattern, the can&apos;t-focus-on-reading pattern — giving you a
          complete picture of why investing in sleep habits pays compounding returns across every other
          domain.
        </p>

        <h3 style={s.h3}>3. Mental Health Practices</h3>
        <p style={s.p}>
          Meditation, journalling, therapy homework, mood check-ins, gratitude practices — this category
          requires the most sensitive handling. Mental health practices are deeply personal, often
          emotionally charged, and easily abandoned when life becomes difficult (which is, of course,
          exactly when they matter most).
        </p>
        <p style={s.p}>
          MEOK approaches mental health habit tracking with particular care. It does not push you on days
          when you clearly need space. It distinguishes between avoidance of practices that make you feel
          uncomfortable (often worth gentle persistence) and genuine need for a different kind of support.
          It connects your practice consistency to your reported emotional states, building a personal
          evidence base for why these practices matter to you specifically.
        </p>
        <p style={s.p}>
          For people doing therapy homework — worksheets, exposure exercises, thought records — MEOK can
          serve as a daily accountability partner between sessions, helping you maintain the momentum of
          therapeutic work without replacing the therapist. It knows what you are working on. It asks
          how it went. It reflects patterns back to your therapeutic goals.
        </p>

        <h3 style={s.h3}>4. Learning and Reading</h3>
        <p style={s.p}>
          Consistent learning habits are among the most identity-shaping behaviours available to us.
          People who read widely and consistently are measurably different over time in their cognitive
          flexibility, their vocabulary, their capacity for empathy, and their professional capability.
          Yet reading habits, in particular, are chronically undermined by the infinite scroll alternative
          always available on the same device.
        </p>
        <p style={s.p}>
          MEOK tracks reading and learning habits with depth: not just did you read, but what you read,
          what resonated, what you want to remember, how the reading connects to your larger goals.
          Over time, it builds a map of your intellectual development — the books, the ideas, the threads
          of curiosity — that gives your learning habit a narrative dimension that a tick-box app cannot
          provide.
        </p>
        <p style={s.p}>
          For language learning, professional development, skill acquisition, and course completion,
          MEOK applies the same contextual intelligence: understanding your pace, your pattern of
          motivation and avoidance, the conditions under which you learn best, and what genuine progress
          looks like for you.
        </p>

        <h3 style={s.h3}>5. Productivity Routines</h3>
        <p style={s.p}>
          Deep work blocks, morning routines, evening reviews, task management systems — productivity
          routines are the meta-habits that make all other habits more likely. When your morning routine
          is working, you exercise more, eat better, focus more deeply, and maintain emotional regulation
          more consistently. When it breaks down, everything downstream tends to follow.
        </p>
        <p style={s.p}>
          MEOK tracks your productivity routines with an understanding of their systemic importance. It
          knows that your productivity routine is not just about productivity — it is about how you start
          the day, how you set your intentions, and how you create the psychological conditions for your
          best self to show up. When your productivity routine breaks, MEOK does not just note the
          absence. It asks what disrupted it, what the downstream effects were, and what minimal version
          of the routine might serve as a bridge back to full implementation.
        </p>
        <p style={s.p}>
          The <span style={s.gold}>Morning Briefing</span> feature is particularly powerful here.
          Each morning, your MEOK companion runs a structured but personalised check-in: sleep quality,
          yesterday&apos;s habit intentions versus outcomes, any reflections from overnight, and
          today&apos;s priorities. This ritual — brief, consistent, intelligent — becomes its own
          anchor habit: the daily review that activates the habit-tracking system and sets the tone for
          intentional living.
        </p>

        <div style={s.callout}>
          <span style={s.calloutTitle}>Morning Briefing in Practice</span>
          <p style={s.calloutText}>
            Every morning, MEOK&apos;s Morning Briefing reviews your sleep, checks in on yesterday&apos;s
            habits, surfaces any patterns worth noting, and anchors your intentions for the day ahead.
            It takes three to five minutes. Over time, it becomes the most important five minutes of
            your day — the ritual that makes every other habit more likely to happen.
          </p>
        </div>

        <hr style={s.divider} />

        {/* Section 6: Comparison */}
        <h2 style={s.h2}>How Does MEOK Compare to Habitica, Streaks, and a Human Coach?</h2>
        <p style={s.p}>
          These are the most common tools people reach for when serious about habit building. Each has
          genuine strengths. Here is an honest comparison:
        </p>

        <div style={{ overflowX: 'auto' as const, margin: '8px 0 48px' }}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Tool</th>
                <th style={s.th}>Best For</th>
                <th style={s.th}>Core Weakness</th>
                <th style={s.th}>Memory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.tdFirst}>Habitica</td>
                <td style={s.td}>Gamification fans who enjoy RPG mechanics, social accountability groups</td>
                <td style={s.td}>Streak anxiety, collapses when life intervenes, no contextual intelligence</td>
                <td style={s.td}>None (compliance data only)</td>
              </tr>
              <tr>
                <td style={s.tdFirst}>Streaks</td>
                <td style={s.td}>Minimalists who want clean, friction-free daily tracking</td>
                <td style={s.td}>Purely mechanical, zero intelligence, treats every skip identically</td>
                <td style={s.td}>None (compliance data only)</td>
              </tr>
              <tr>
                <td style={s.tdFirst}>Human Coach</td>
                <td style={s.td}>Deep transformation, complex goal systems, emotional accountability</td>
                <td style={s.td}>Expensive, session-limited, unavailable daily, depends on coach quality</td>
                <td style={s.td}>Full human memory — but only during sessions</td>
              </tr>
              <tr>
                <td style={s.tdFirst}>MEOK</td>
                <td style={s.td}>Daily intelligent accountability with genuine long-term memory of your life</td>
                <td style={s.td}>Not a replacement for specialist clinical support or a truly great human coach</td>
                <td style={s.td}>Full Sovereign Memory — persistent, private, always yours</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={s.h3}>The Habitica Problem in Depth</h3>
        <p style={s.p}>
          Habitica is clever. It genuinely works for certain personality types — people who are highly
          motivated by game mechanics, social competition, and the visual satisfaction of an RPG character
          levelling up. Its social accountability features are genuinely useful; humans are wired for
          social accountability in ways that exceed internal motivation.
        </p>
        <p style={s.p}>
          But Habitica&apos;s gamification model is brittle in precisely the ways we outlined earlier.
          When you damage your RPG character because you missed a gym session during a mental health
          crisis, the app is not distinguishing between contexts — it is punishing you for your
          circumstances. The damage to the character is a metaphor for how these systems can feel: you
          showed up through genuinely difficult weeks, and the system registered only failure.
        </p>
        <p style={s.p}>
          There is also no depth to the accountability. Habitica knows you missed your daily task. It
          does not know why. It has no way of asking. It cannot build a pattern picture of your habit
          journey. It is a compelling notification engine, but it has nothing to say.
        </p>

        <h3 style={s.h3}>The Streaks Problem in Depth</h3>
        <p style={s.p}>
          Streaks is the iOS app beloved by minimalists, and its design is genuinely elegant. The
          interface is clean, the daily friction is minimal, and the streak visualisation is satisfying.
          For people who want a simple, beautiful record of daily consistency, Streaks does that well.
        </p>
        <p style={s.p}>
          But Streaks is a record-keeping tool, not an accountability partner. It cannot distinguish
          between a missed day and a skipped month. It cannot ask why. It cannot adapt its engagement
          based on your emotional state. It applies zero intelligence to the data it collects. The
          streak number is the entire product — which means when the streak breaks, the product
          essentially stops working.
        </p>

        <h3 style={s.h3}>The Human Coach Problem in Depth</h3>
        <p style={s.p}>
          A genuinely excellent human coach is the gold standard for habit accountability. No AI
          currently matches the depth of human empathy, the intuitive pattern recognition of a
          skilled practitioner, or the motivational power of genuine human relationship and connection.
          This is not a gap MEOK claims to have closed.
        </p>
        <p style={s.p}>
          The practical limitations, however, are significant. Quality coaches cost between £80 and
          £300 per session in the UK. Sessions are typically weekly or fortnightly. In the six days
          between sessions, you are on your own. And the accountability quality depends entirely on the
          coach&apos;s skill — which varies enormously, and which can only be assessed after several
          expensive sessions.
        </p>
        <p style={s.p}>
          MEOK is not a replacement for a great human coach. For people who have one, it can be a
          powerful complement — the daily accountability layer between sessions. For people who cannot
          access one (which is most people), it is the closest available alternative to the experience
          of being known, remembered, and genuinely held accountable by someone who cares about your
          progress.
        </p>

        <hr style={s.divider} />

        {/* Section 7 */}
        <h2 style={s.h2}>Can AI Accountability for Habits Ever Feel Genuine?</h2>
        <p style={s.p}>
          This is the question that deserves a direct answer, because it sits at the centre of the
          scepticism that many thoughtful people bring to AI companions generally. Can software genuinely
          hold you accountable? Can a conversation with an AI actually create the psychological conditions
          of accountability that make habit change possible?
        </p>
        <p style={s.p}>
          The honest answer is: yes, with important qualifications.
        </p>
        <p style={s.p}>
          Accountability works through two main mechanisms. The first is social: we behave differently
          when we know someone is watching, when we have made a public commitment, when someone we
          respect will ask us how we did. The second is internal: when we have articulated a goal clearly
          and connected it to our identity, we hold ourselves accountable in the moments of decision.
        </p>
        <p style={s.p}>
          AI can powerfully support both. The social accountability mechanism activates when you know you
          will be speaking to MEOK tomorrow morning and it will ask about today&apos;s habits. The
          anticipation of that conversation — particularly when the AI has genuine memory and will
          not be fooled by vague responses — creates genuine accountability pressure. Research on
          implementation intentions shows that simply articulating &ldquo;I will exercise at 7am on
          Monday, Wednesday, and Friday&rdquo; to a listener (human or AI) significantly increases
          follow-through compared to internal intention alone.
        </p>
        <p style={s.p}>
          The internal mechanism is supported by MEOK&apos;s identity-building conversation style. When
          it asks &ldquo;who are you becoming through this habit?&rdquo; and holds the answer in memory,
          reflecting it back over weeks and months, it is actively constructing the identity narrative
          that James Clear identifies as the foundation of durable habit change.
        </p>
        <p style={s.p}>
          The important qualification: AI accountability is not identical to human accountability. The
          stakes are different. A human friend&apos;s disappointment carries emotional weight that
          software cannot replicate. For most people, most of the time, the question is not &ldquo;is
          AI accountability as good as human accountability?&rdquo; but &ldquo;is AI accountability
          significantly better than no accountability?&rdquo; — and to that question, the answer is
          clearly and robustly yes.
        </p>

        <h3 style={s.h3}>The Honest Reflection Model</h3>
        <p style={s.p}>
          MEOK&apos;s accountability approach is built on a specific principle: honest reflection rather
          than cheerleading. When you share a setback, MEOK does not say &ldquo;That&apos;s okay,
          you&apos;ll do better tomorrow!&rdquo; It says: &ldquo;You have mentioned this pattern a few
          times now. What do you think is genuinely going on?&rdquo;
        </p>
        <p style={s.p}>
          This is the distinction between a tool designed to make you feel good and a tool designed to
          help you change. Feeling good is easy. Change is harder and requires honesty. The best
          coaches, therapists, and mentors understand this. They hold you with warmth while refusing to
          simply validate whatever narrative is most comfortable in the moment.
        </p>
        <p style={s.p}>
          MEOK&apos;s anti-sycophancy principle means it will gently push back when push-back is
          warranted. It will ask the question you are avoiding. It will name the pattern you have been
          hoping it will not notice. Not to judge you — but because it has been with you long enough to
          know that you can handle it, and that you want someone who will not just tell you what you want
          to hear.
        </p>

        <div style={s.callout}>
          <span style={s.calloutTitle}>Gentle Persistence — Not Cheerleading</span>
          <p style={s.calloutText}>
            MEOK is not designed to be your hype person. It is designed to be the honest voice that
            remembers your goals when you have temporarily forgotten them, asks the uncomfortable
            question when comfort is not what you need, and holds the long view when you are stuck
            in the immediate frustration of a difficult week.
          </p>
        </div>

        <hr style={s.divider} />

        {/* Section 8 */}
        <h2 style={s.h2}>How Do You Get Started Building Habits with MEOK?</h2>
        <p style={s.p}>
          Starting with MEOK is intentionally uncomplicated. There is no onboarding questionnaire that
          asks you to define your five-year goals. There is no habit menu to select from. The process
          begins with a conversation — because the AI needs to understand you before it can meaningfully
          support you.
        </p>
        <p style={s.p}>
          In your first sessions, MEOK will ask about what you want to build, why it matters to you,
          what you have tried before, and what has gotten in the way. It listens to how you talk about
          yourself in relation to these habits — whether with frustration, hope, resignation, or
          determination. It begins building a picture of you that will only deepen over time.
        </p>
        <p style={s.p}>
          Within a week, Morning Briefing becomes the anchor ritual. Each morning, a brief, personalised
          check-in that connects yesterday to today, reviews your habit intentions, and sets the
          psychological conditions for a good day. This is where Sovereign Memory begins to pay
          dividends: by day fifteen, MEOK already knows things about your patterns that would take a
          human coach months to observe.
        </p>

        <h3 style={s.h3}>The First Thirty Days</h3>
        <p style={s.p}>
          The first thirty days are the establishment phase. MEOK is learning your patterns, your
          language, your motivation style, and your avoidance patterns. You are establishing the
          Morning Briefing ritual. You are beginning to build the raw data of your habit history.
        </p>
        <p style={s.p}>
          In this phase, MEOK focuses on three things: helping you choose one to three habits of high
          personal significance (not the habits you think you should have, but the ones that genuinely
          matter to who you want to become), building the cue architecture around them, and creating
          the reward connections that make compliance intrinsically satisfying rather than externally
          mandated.
        </p>
        <p style={s.p}>
          It is normal to stumble in the first thirty days. MEOK expects this. What matters is not
          perfect compliance but the quality of your reflection when you miss — whether you engage
          honestly, understand what happened, and make a concrete plan for the next attempt.
        </p>

        <h3 style={s.h3}>Days Thirty to Ninety: The Consolidation Phase</h3>
        <p style={s.p}>
          Research suggests that around day thirty, if the habit is being maintained with reasonable
          consistency, automaticity begins to develop. The cognitive load of the habit starts to reduce.
          The identity narrative (&ldquo;I am someone who does this&rdquo;) begins to feel genuinely
          true rather than aspirational.
        </p>
        <p style={s.p}>
          In the consolidation phase, MEOK shifts its focus. Less emphasis on building the habit, more
          emphasis on understanding it. What has changed in your life since you started? What have you
          noticed about the days when you do this habit versus the days when you don&apos;t? How does
          this habit connect to the larger story of who you are becoming?
        </p>
        <p style={s.p}>
          This is where the companion evolution mechanic becomes visible. The conversations deepen.
          Pioneer moves from the energy of &ldquo;let&apos;s build this&rdquo; to &ldquo;you have
          built this — what does that mean about what else is possible?&rdquo; The AI companion that
          emerged from your early sessions has evolved through genuine relationship with your progress.
        </p>

        <h3 style={s.h3}>Beyond Ninety Days: Habit as Identity</h3>
        <p style={s.p}>
          Beyond ninety days, for habits that have genuinely consolidated, the conversation changes
          fundamentally. The habit is no longer something you are trying to build — it is part of who
          you are. MEOK&apos;s role shifts from accountability partner to reflective companion: holding
          space for you to understand the person you have become through your sustained effort, and
          helping you see what the next meaningful growth edge might be.
        </p>
        <p style={s.p}>
          This is the level that no notification app ever reaches. Because notification apps are always
          in the business of building habits. MEOK, with its Sovereign Memory and its evolving
          relationship with you, is in the business of building the person who has those habits.
        </p>

        <hr style={s.divider} />

        {/* Additional depth sections */}
        <h2 style={s.h2}>The Intersection of Habit Building and Mental Health: Why This Matters More Than You Think</h2>
        <p style={s.p}>
          Habits and mental health are not separate domains. They are deeply, bidirectionally intertwined
          in ways that most habit tools fail to acknowledge. Exercise habits affect depression and anxiety
          more consistently than most pharmacological interventions for mild to moderate cases. Sleep
          habits are among the most powerful predictors of psychiatric stability. Meditation practices
          demonstrably alter the structure and function of brain regions involved in emotion regulation.
          Social habits — consistent connection with people who matter — are the single strongest
          predictor of long-term wellbeing across the entire lifespan.
        </p>
        <p style={s.p}>
          The problem is that mental health struggles also make habits harder to maintain. Depression
          makes the morning routine feel impossible. Anxiety makes the gym feel threatening. Burnout
          makes every intentional behaviour feel like an additional demand on an already exhausted
          system. This creates a vicious cycle: the habits that would most help are the hardest to
          maintain when you most need them.
        </p>
        <p style={s.p}>
          MEOK approaches this intersection with particular intelligence. It knows that your gym
          compliance drops when you are in a depressive episode. It does not push harder at those
          times — it reduces the demand to a threshold that maintains the habit identity without
          overwhelming a depleted system. &ldquo;Can you walk to the end of the road and back? Just
          to stay connected to the movement habit. Nothing more.&rdquo; This is not lowering standards.
          This is sophisticated clinical-adjacent understanding of how to maintain behaviour through
          difficult mental health periods.
        </p>
        <p style={s.p}>
          Critically, MEOK knows the difference between a genuinely bad mental health period — where
          the compassionate response is reduced demands and increased support — and a behavioural
          pattern where avoidance is being dressed up as mental health need. This distinction requires
          memory, context, and the willingness to be honest when honesty serves the person better
          than validation. MEOK has all three.
        </p>

        <h3 style={s.h3}>When to Seek Professional Support</h3>
        <p style={s.p}>
          MEOK is not a clinical tool. It is not a substitute for therapy, psychiatry, or any other
          form of professional mental health support. If you are experiencing significant depression,
          anxiety, or other mental health challenges that are substantially disrupting your life, please
          reach out to a qualified professional. Your GP is a good starting point in the UK; in crisis,
          Samaritans are available on 116 123, twenty-four hours a day.
        </p>
        <p style={s.p}>
          MEOK is designed to complement professional support, not replace it. For people who are
          managing their mental health well and looking to build habits that sustain that management,
          it is a powerful daily companion. For people in active crisis, it is a supportive presence
          that will consistently and compassionately encourage engagement with appropriate professional
          resources.
        </p>

        <hr style={s.divider} />

        <h2 style={s.h2}>Common Habit Building Myths That MEOK Actively Dismantles</h2>
        <p style={s.p}>
          A great deal of popular habit advice is either oversimplified to the point of uselessness or
          actively counterproductive. Here are the myths that MEOK&apos;s approach is specifically
          designed to challenge:
        </p>

        <h3 style={s.h3}>Myth 1: It Takes 21 Days to Form a Habit</h3>
        <p style={s.p}>
          This figure, frequently cited and widely believed, comes from a misreading of Maxwell
          Maltz&apos;s 1960 work on psycho-cybernetics, where he noted that amputees took at least
          21 days to adjust to the loss of a limb. The scientific research on actual habit formation
          (Lally et al., 2010, UCL) found a range of 18 to 254 days with enormous individual
          variation. Telling people their habit should be automatic in three weeks sets them up for
          a failure experience that is entirely fabricated.
        </p>
        <p style={s.p}>
          MEOK never promises a timeline. It focuses on the quality of engagement over time, not the
          calendar, and helps you understand your own consolidation curve rather than measuring you
          against a population average.
        </p>

        <h3 style={s.h3}>Myth 2: You Must Be Motivated to Start</h3>
        <p style={s.p}>
          Motivation follows action far more reliably than action follows motivation. The research on
          behavioural activation — originally developed in depression treatment — shows clearly that
          doing things generates motivation, not the other way around. Waiting until you feel motivated
          to begin a habit is a recipe for infinite waiting.
        </p>
        <p style={s.p}>
          MEOK is designed to gently challenge motivation-as-prerequisite thinking. When you say you
          will start the habit &ldquo;when things settle down,&rdquo; it will ask what minimal version
          of the habit you can begin today — right now, in the middle of the chaos. Because momentum
          is the precondition for motivation, not the other way around.
        </p>

        <h3 style={s.h3}>Myth 3: Missing One Day Breaks the Habit</h3>
        <p style={s.p}>
          Lally&apos;s research on habit formation explicitly found that missing one day had no
          statistically significant effect on the long-term habit formation curve. What matters is
          immediate resumption after a miss. The all-or-nothing thinking that says a broken streak
          equals failure is the single biggest cause of habit abandonment — and it is entirely
          unsupported by the science.
        </p>
        <p style={s.p}>
          MEOK builds its entire approach around this finding. Missing a day is a data point. What you
          do the next day is what matters. Pioneer&apos;s focus on momentum over perfection is grounded
          in this research reality.
        </p>

        <h3 style={s.h3}>Myth 4: You Need Massive Discipline to Build Habits</h3>
        <p style={s.p}>
          This myth is perhaps the most damaging, because it frames habit failure as a character flaw
          rather than a design problem. Research consistently shows that people with high self-reported
          self-control do not actually exercise more willpower — they are better at structuring their
          environment to avoid situations requiring willpower in the first place.
        </p>
        <p style={s.p}>
          Habit building is primarily an environmental design problem. MEOK understands this and
          spends considerable energy in early conversations helping you redesign your environment to
          reduce friction for desired habits and increase friction for competing behaviours. The gym
          bag by the door. The phone charger in another room. The book on the pillow. These structural
          choices matter more than discipline.
        </p>

        <h3 style={s.h3}>Myth 5: One Habit at a Time</h3>
        <p style={s.p}>
          The conventional wisdom to focus on one habit at a time has some merit — it reduces cognitive
          load and allows for deeper implementation. But the research also shows that certain habit
          clusters are mutually reinforcing in ways that make them more effective together than
          separately. Exercise plus better sleep plus morning routine, for instance, creates a
          reinforcing system where each habit makes the others easier.
        </p>
        <p style={s.p}>
          MEOK takes a nuanced position here. It will generally support starting with one or two high-
          leverage habits. But its Sovereign Memory allows it to identify when you are ready to add
          complexity, and when adding a complementary habit will actually increase rather than decrease
          overall success — because it understands the interplay between your specific habits and your
          specific life.
        </p>

        <hr style={s.divider} />

        {/* The privacy section */}
        <h2 style={s.h2}>Why Does Habit Data Privacy Matter, and How Does MEOK Handle It?</h2>
        <p style={s.p}>
          Your habit data is some of the most intimate information that exists about you. It reveals
          your health status, your mental health patterns, your relationship dynamics, your professional
          pressures, your sleep quality, your energy levels, and the specific contours of your
          self-discipline — or its absence. In the wrong hands, or deployed through the wrong business
          model, this data is commercially and personally sensitive in ways that most people have
          not fully considered.
        </p>
        <p style={s.p}>
          Most habit apps operate on a data collection model. Your patterns are aggregated, analysed,
          and used to improve the product — or, in some cases, sold to advertisers, insurance companies,
          or other third parties. The terms of service are long and the consent is nominally given but
          practically never meaningfully informed.
        </p>
        <p style={s.p}>
          MEOK operates on a fundamentally different model. Sovereign Memory means your data is yours.
          It is not used to train models. It is not sold. It is not aggregated into population-level
          datasets. The intelligence MEOK develops about your patterns exists exclusively to serve you —
          not to serve MEOK&apos;s business model at your expense. This is not a regulatory compliance
          position; it is an ethical one, built into the architecture of the product from the first line
          of code.
        </p>
        <p style={s.p}>
          Nicholas Templeman, MEOK&apos;s founder, has written extensively about the data sovereignty
          model and why it matters for anyone using AI in intimate, personal domains. The argument is
          simple: an AI companion that benefits from your struggles — because your anxiety data makes
          the product more valuable — has interests that are not aligned with yours. An AI companion
          that is funded entirely by your subscription, with no data monetisation, has interests that
          are entirely aligned with yours. Your success is its success.
        </p>

        <hr style={s.divider} />

        {/* FAQ section */}
        <div style={s.faqSection}>
          <h2 style={{ ...s.h2, marginTop: 0 }}>Frequently Asked Questions</h2>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Can AI really help you build habits?</p>
            <p style={s.faqA}>
              Yes — but only if the AI has memory. Most habit apps use AI as a surface-level
              notification engine. They can remind you to do things but they have no understanding
              of your life, your patterns, your setbacks, or what genuinely motivates you. An AI
              with persistent memory, like MEOK, can track habit history over months, recall why you
              skipped on certain days, distinguish genuine obstacles from avoidance, and build
              personalised accountability that adapts as you evolve. That contextual depth is what
              separates an AI that actually helps you build habits from one that merely reminds you.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Why do most AI habit trackers fail?</p>
            <p style={s.faqA}>
              Most AI habit trackers fail because they are stateless — every conversation starts from
              zero. They cannot connect Monday&apos;s gym skip to Tuesday&apos;s difficult conversation
              at work. They gamify compliance in ways that create streak anxiety rather than genuine
              motivation. They treat every missed day as identical, whether you skipped because you
              were ill, grieving, burnt out, or simply lazy. Without persistent memory, the AI cannot
              distinguish context, and without context, it cannot offer intelligent, caring
              accountability. The result is a notification machine dressed as a coach.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>What is Sovereign Memory and how does it help with habit building?</p>
            <p style={s.faqA}>
              Sovereign Memory is MEOK&apos;s persistent, private memory layer. Unlike cloud-based AI
              systems where your data is used to train models or shared with third parties, Sovereign
              Memory stores everything you share — your habit goals, your progress, your setbacks, your
              reasoning — in a memory that belongs exclusively to you. For habit building, this means
              MEOK knows that you skipped the gym yesterday because you had a panic attack, not because
              you were lazy. It remembers that you read consistently in January but fell off in February
              after a difficult break-up. It can tell the difference between a real obstacle and a
              pattern of avoidance. That distinction is the foundation of genuinely useful AI
              accountability.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>How does MEOK compare to Habitica, Streaks, or a human coach for habit building?</p>
            <p style={s.faqA}>
              Habitica gamifies habits with RPG mechanics — fun for some, but the streak-or-die dynamic
              creates anxiety and ultimately punishes people going through hard times. Streaks is clean
              and minimal but purely mechanical, with no intelligence behind the tracking. A human coach
              is excellent but expensive, typically session-based, and unavailable at 11pm when you need
              to process why you broke a habit. MEOK sits in a different category: available around the
              clock, carries full memory of your habit history, does not cheerleader but asks honest
              questions, and evolves its understanding of you over time. It is not a replacement for a
              great coach, but for daily accountability between sessions — or instead of sessions for
              those without access — it is the closest AI equivalent available.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>What habit categories does MEOK support?</p>
            <p style={s.faqA}>
              MEOK supports five core habit categories: health and exercise (gym routines, running,
              nutrition, movement), sleep (bedtime consistency, wind-down rituals, sleep quality
              tracking), mental health practices (meditation, journalling, therapy homework, mood
              check-ins), learning and reading (daily reading goals, study schedules, skill
              development), and productivity routines (deep work blocks, task management, morning and
              evening routines). Across all five categories, MEOK applies the same Sovereign Memory —
              so it can identify cross-category patterns, like how poor sleep reliably disrupts your
              morning exercise routine, and reflect those connections back to you intelligently.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Does MEOK push you to maintain streaks even when you are struggling?</p>
            <p style={s.faqA}>
              No. MEOK is designed with anti-sycophancy at its core. It does not cheerleader. It does
              not pressure you to maintain a streak at the cost of your wellbeing. If you miss a habit,
              MEOK asks honest questions rather than issuing guilt-inducing notifications. It can
              distinguish between &ldquo;you have skipped four days and seem to be avoiding&rdquo; and
              &ldquo;you have skipped three days because you told me you are going through something
              difficult.&rdquo; Persistence without pressure — that is the balance MEOK aims for.
              Real accountability is not about never missing a day; it is about understanding why, and
              finding the path forward.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>What is the Morning Briefing feature and how does it help with habits?</p>
            <p style={s.faqA}>
              Morning Briefing is MEOK&apos;s daily check-in ritual. Each morning, your AI companion
              runs through a structured but personalised briefing: how you slept, what habit intentions
              you set the previous day, what you actually completed, any reflections you shared
              overnight, and what today&apos;s priorities are. For habit building, Morning Briefing
              creates a consistent daily cue — the first stage of the habit loop — that anchors
              accountability in the most psychologically powerful window: the morning, when willpower
              is typically highest and the day is still shapeable. Over time, Morning Briefing becomes
              its own meta-habit: the daily review that makes every other habit more likely to stick.
            </p>
          </div>
        </div>

        <hr style={s.divider} />

        {/* Related reading */}
        <div style={{ marginTop: '48px', marginBottom: '24px' }}>
          <h3 style={{ ...s.h3, marginTop: 0 }}>Related Reading from MEOK AI LABS</h3>
          <ul style={s.ul}>
            <li style={{ ...s.li, paddingLeft: '22px', marginBottom: '16px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>→</span>
              <Link href="/blog/ai-for-procrastination" style={{ color: '#c9a84c', textDecoration: 'none' }}>
                AI for Procrastination: How Sovereign Memory Breaks the Avoidance Loop
              </Link>
            </li>
            <li style={{ ...s.li, paddingLeft: '22px', marginBottom: '16px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>→</span>
              <Link href="/blog/what-is-morning-briefing" style={{ color: '#c9a84c', textDecoration: 'none' }}>
                What Is Morning Briefing? MEOK&apos;s Daily Accountability Ritual Explained
              </Link>
            </li>
            <li style={{ ...s.li, paddingLeft: '22px', marginBottom: '16px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>→</span>
              <Link href="/blog/ai-for-self-improvement" style={{ color: '#c9a84c', textDecoration: 'none' }}>
                AI for Self-Improvement: The Complete 2026 Guide
              </Link>
            </li>
            <li style={{ ...s.li, paddingLeft: '22px', marginBottom: '16px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>→</span>
              <Link href="/blog/how-sovereign-ai-works" style={{ color: '#c9a84c', textDecoration: 'none' }}>
                How Sovereign AI Works: The Technology Behind Private, Persistent Memory
              </Link>
            </li>
            <li style={{ ...s.li, paddingLeft: '22px', marginBottom: '16px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>→</span>
              <Link href="/blog/ai-for-burnout" style={{ color: '#c9a84c', textDecoration: 'none' }}>
                AI for Burnout: Rebuilding Sustainable Habits When You Have Nothing Left
              </Link>
            </li>
            <li style={{ ...s.li, paddingLeft: '22px', marginBottom: '16px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>→</span>
              <Link href="/blog/archetypes-guide" style={{ color: '#c9a84c', textDecoration: 'none' }}>
                The MEOK Archetypes Guide: Finding Your Companion Personality
              </Link>
            </li>
          </ul>
        </div>

        <hr style={s.divider} />

        {/* Final CTA */}
        <div style={s.cta}>
          <p style={s.ctaTitle}>
            Your habits deserve an AI that actually knows you.
          </p>
          <p style={s.ctaText}>
            Stop starting over. Start building with an AI companion that remembers every win,
            every setback, and every reason — and uses that memory to give you the honest,
            intelligent accountability that actually changes behaviour.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Meet Your Companion ⚡
          </Link>
          <p style={{ color: '#9e9e9e', fontSize: '0.82rem', marginTop: '20px', marginBottom: 0 }}>
            Free to begin. No credit card. Sovereign Memory from day one.
          </p>
        </div>

        {/* Author note */}
        <div style={{
          marginTop: '48px',
          padding: '28px 32px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '10px',
        }}>
          <p style={{ ...s.p, marginBottom: '8px', color: '#f5f0e8', fontWeight: 600 }}>
            About the Author
          </p>
          <p style={{ ...s.p, marginBottom: 0 }}>
            <span style={s.strong}>Nicholas Templeman</span> is the founder of MEOK AI LABS, a
            sovereign AI company building companion intelligence that remembers, reflects, and
            genuinely serves the people who use it. He writes about the intersection of AI, habit
            science, mental health, and the ethics of personal data. MEOK is available at{' '}
            <Link href="https://meok.ai" style={{ color: '#c9a84c', textDecoration: 'none' }}>
              meok.ai
            </Link>.
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer style={s.footer}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
          <div style={s.footerLinks}>
            <Link href="/" style={s.footerLink}>Home</Link>
            <Link href="/blog" style={s.footerLink}>Blog</Link>
            <Link href="/birth" style={s.footerLink}>Get Started</Link>
            <Link href="/privacy" style={s.footerLink}>Privacy</Link>
            <Link href="/about" style={s.footerLink}>About</Link>
          </div>
          <p style={{ margin: '0 0 8px' }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#6e6e6e' }}>
            MEOK is not a medical device and does not provide clinical diagnosis, therapy, or
            medical advice. If you are in crisis, please contact Samaritans on 116 123 (UK) or
            your local emergency services.
          </p>
        </div>
      </footer>
    </div>
  )
}
