import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Depression Support: How MEOK Lowers the Activation Energy to Get Help | MEOK AI LABS',
  description:
    'Depression kills motivation before you can seek help. MEOK AI LABS explains how sovereign AI lowers the barrier \u2014 no appointment, no waitlist \u2014 with behavioural activation, daily check-ins, and clear safeguarding. UK crisis resources included.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-depression' },
  openGraph: {
    title: 'AI for Depression Support: How MEOK Lowers the Activation Energy to Get Help',
    description:
      'Depression kills motivation before you can seek help. MEOK lowers the barrier \u2014 no appointment, no waitlist \u2014 with behavioural activation, daily check-ins, and clear safeguarding.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-depression',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Depression+Support%3A+Lowering+the+Activation+Energy&desc=Behavioural+activation%2C+daily+check-ins%2C+clear+safeguarding',
        width: 1200,
        height: 630,
        alt: 'AI for Depression Support: How MEOK Lowers the Activation Energy to Get Help | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Depression Support: Lowering the Activation Energy',
    description:
      'Depression makes help-seeking the hardest thing. MEOK\u2019s sovereign AI is available at 3 am with no appointment, no waitlist, and a clear escalation path for crisis moments.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Depression+Support%3A+Lowering+the+Activation+Energy&desc=Behavioural+activation%2C+daily+check-ins%2C+clear+safeguarding',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Depression Support: How MEOK Lowers the Activation Energy to Get Help',
  description:
    'An honest, evidence-informed guide to what sovereign AI can and cannot do for depression \u2014 covering the activation paradox, behavioural activation, morning check-ins, and UK crisis resources.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-depression',
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
    '@id': 'https://meok.ai/blog/ai-for-depression',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help with depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can provide meaningful supplementary support for depression by reducing the activation energy required to engage with help \u2014 available at any hour, no appointment needed. It is not a clinical treatment. Responsible platforms like MEOK are explicit about this boundary and always escalate to professional resources when crisis signals are detected.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is behavioural activation and how does MEOK use it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Behavioural activation is an evidence-based technique that counters depression by scheduling small, meaningful activities to rebuild a sense of reward and agency. Rather than waiting to feel motivated before acting, BA teaches that action precedes motivation. MEOK tracks these activities over time, noting patterns, celebrating consistency, and surfacing the connection between behaviour and mood without ever lecturing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK handle suicidal thoughts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\u2019s Maternal Covenant includes a care-floor that detects crisis language and immediately shifts tone \u2014 providing warm, non-alarmist acknowledgement and prominently signposting UK crisis resources: Samaritans (116 123), SHOUT text service (85258), and NHS urgent mental health. MEOK never minimises, dismisses, or simply continues the previous conversation thread.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between depression and sadness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sadness is a transient emotional response to events. Depression is a persistent neurobiological state characterised by low energy, anhedonia (inability to feel pleasure), cognitive slowing, disrupted sleep and appetite, and a pervasive sense of worthlessness or hopelessness that lasts weeks or months regardless of external circumstances.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will MEOK just tell me what I want to hear?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is designed to be honest, not sycophantic. Its Maternal Covenant explicitly prohibits empty validation. When you share a distorted thought pattern, MEOK reflects it back gently rather than amplifying it. When professional help is indicated, MEOK says so clearly. Feeling heard and being told comfortable lies are not the same thing.',
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const styles = {
  page: {
    background: '#0d0c18',
    color: '#f5f0e8',
    minHeight: '100vh',
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  } as React.CSSProperties,
  container: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '0 24px 80px',
  } as React.CSSProperties,
  header: {
    paddingTop: '72px',
    paddingBottom: '48px',
    borderBottom: '1px solid rgba(201,168,76,0.2)',
    marginBottom: '56px',
  } as React.CSSProperties,
  eyebrow: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '20px',
    display: 'block',
  } as React.CSSProperties,
  h1: {
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#f5f0e8',
    margin: '0 0 24px',
  } as React.CSSProperties,
  lead: {
    fontSize: '18px',
    lineHeight: 1.7,
    color: 'rgba(245,240,232,0.8)',
    margin: '0 0 28px',
  } as React.CSSProperties,
  byline: {
    fontSize: '13px',
    color: 'rgba(245,240,232,0.5)',
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap' as const,
    alignItems: 'center',
  } as React.CSSProperties,
  bylineSep: {
    color: 'rgba(245,240,232,0.25)',
  } as React.CSSProperties,
  section: {
    marginBottom: '56px',
  } as React.CSSProperties,
  h2: {
    fontSize: 'clamp(20px, 2.8vw, 28px)',
    fontWeight: 700,
    color: '#f5f0e8',
    margin: '0 0 20px',
    lineHeight: 1.3,
  } as React.CSSProperties,
  h3: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#c9a84c',
    margin: '36px 0 12px',
    lineHeight: 1.4,
  } as React.CSSProperties,
  p: {
    fontSize: '16px',
    lineHeight: 1.8,
    color: 'rgba(245,240,232,0.85)',
    margin: '0 0 20px',
  } as React.CSSProperties,
  atomicAnswer: {
    fontSize: '16px',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.85)',
    margin: '0 0 24px',
    padding: '16px 20px',
    background: 'rgba(201,168,76,0.06)',
    borderLeft: '3px solid #c9a84c',
    borderRadius: '0 6px 6px 0',
  } as React.CSSProperties,
  callout: {
    background: 'rgba(201,168,76,0.08)',
    border: '1px solid rgba(201,168,76,0.3)',
    borderRadius: '10px',
    padding: '28px 32px',
    marginBottom: '32px',
  } as React.CSSProperties,
  calloutTitle: {
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '12px',
    display: 'block',
  } as React.CSSProperties,
  calloutText: {
    fontSize: '15px',
    lineHeight: 1.7,
    color: 'rgba(245,240,232,0.85)',
    margin: 0,
  } as React.CSSProperties,
  crisisBox: {
    background: 'rgba(220,50,50,0.08)',
    border: '1px solid rgba(220,50,50,0.35)',
    borderRadius: '10px',
    padding: '28px 32px',
    marginBottom: '40px',
  } as React.CSSProperties,
  crisisTitle: {
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: '#e05555',
    marginBottom: '16px',
    display: 'block',
  } as React.CSSProperties,
  crisisItem: {
    fontSize: '15px',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.9)',
    margin: '0 0 10px',
  } as React.CSSProperties,
  crisisLink: {
    color: '#e07070',
    textDecoration: 'none',
    fontWeight: 600,
  } as React.CSSProperties,
  ul: {
    paddingLeft: '20px',
    margin: '0 0 24px',
  } as React.CSSProperties,
  li: {
    fontSize: '16px',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.85)',
    marginBottom: '8px',
  } as React.CSSProperties,
  faqSection: {
    marginBottom: '56px',
  } as React.CSSProperties,
  faqItem: {
    borderBottom: '1px solid rgba(245,240,232,0.1)',
    paddingBottom: '28px',
    marginBottom: '28px',
  } as React.CSSProperties,
  faqQ: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#f5f0e8',
    margin: '0 0 12px',
    lineHeight: 1.4,
  } as React.CSSProperties,
  faqA: {
    fontSize: '15px',
    lineHeight: 1.8,
    color: 'rgba(245,240,232,0.8)',
    margin: 0,
  } as React.CSSProperties,
  divider: {
    border: 'none',
    borderTop: '1px solid rgba(245,240,232,0.1)',
    margin: '48px 0',
  } as React.CSSProperties,
  ctaBlock: {
    background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
    border: '1px solid rgba(201,168,76,0.4)',
    borderRadius: '14px',
    padding: '48px 40px',
    textAlign: 'center' as const,
    marginBottom: '56px',
  } as React.CSSProperties,
  ctaTitle: {
    fontSize: 'clamp(20px, 3vw, 28px)',
    fontWeight: 700,
    color: '#f5f0e8',
    margin: '0 0 14px',
    lineHeight: 1.3,
  } as React.CSSProperties,
  ctaDesc: {
    fontSize: '16px',
    lineHeight: 1.7,
    color: 'rgba(245,240,232,0.7)',
    maxWidth: '520px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '28px',
    marginTop: 0,
  } as React.CSSProperties,
  ctaButton: {
    display: 'inline-block',
    background: '#c9a84c',
    color: '#0d0c18',
    fontWeight: 700,
    fontSize: '15px',
    letterSpacing: '0.04em',
    textDecoration: 'none',
    padding: '14px 36px',
    borderRadius: '8px',
  } as React.CSSProperties,
  tagRow: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap' as const,
    marginBottom: '48px',
  } as React.CSSProperties,
  tag: {
    fontSize: '12px',
    fontWeight: 500,
    background: 'rgba(201,168,76,0.1)',
    color: '#c9a84c',
    border: '1px solid rgba(201,168,76,0.25)',
    borderRadius: '20px',
    padding: '4px 14px',
    letterSpacing: '0.04em',
  } as React.CSSProperties,
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: 'rgba(245,240,232,0.5)',
    textDecoration: 'none',
    marginBottom: '40px',
    marginTop: '24px',
  } as React.CSSProperties,
  tableBox: {
    border: '1px solid rgba(245,240,232,0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '32px',
  } as React.CSSProperties,
  tableHeader: {
    background: 'rgba(201,168,76,0.1)',
    padding: '14px 20px',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  } as React.CSSProperties,
  tableRow: {
    padding: '14px 20px',
    fontSize: '14px',
    lineHeight: 1.6,
    color: 'rgba(245,240,232,0.8)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    borderTop: '1px solid rgba(245,240,232,0.07)',
  } as React.CSSProperties,
  inlineGold: {
    color: '#c9a84c',
    fontWeight: 600,
  } as React.CSSProperties,
  noteText: {
    fontSize: '13px',
    color: 'rgba(245,240,232,0.45)',
    lineHeight: 1.6,
    fontStyle: 'italic' as const,
    margin: '0 0 32px',
  } as React.CSSProperties,
  internalLink: {
    color: '#c9a84c',
    textDecoration: 'none',
  } as React.CSSProperties,
  crisisItemLast: {
    fontSize: '15px',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.9)',
    margin: 0,
  } as React.CSSProperties,
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function AIForDepressionPage() {
  return (
    <div style={styles.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={styles.container}>
        {/* Back nav */}
        <Link href="/blog" style={styles.backLink}>
          &#8592; All articles
        </Link>

        {/* ── Header ── */}
        <header style={styles.header}>
          <span style={styles.eyebrow}>Mental Health &#x2022; MEOK AI LABS</span>
          <h1 style={styles.h1}>
            AI for Depression Support: How MEOK Lowers the Activation Energy to Get Help
          </h1>
          <p style={styles.lead}>
            Depression doesn\u2019t feel like sadness. It feels like a dead battery. Every action
            \u2014 including asking for help \u2014 costs more energy than you have. This article
            explains what sovereign AI can realistically do about that, and exactly where it hands
            you over to a human.
          </p>
          <div style={styles.byline}>
            <span>Nicholas Templeman</span>
            <span style={styles.bylineSep}>|</span>
            <span>Founder, MEOK AI LABS</span>
            <span style={styles.bylineSep}>|</span>
            <span>24 March 2026</span>
            <span style={styles.bylineSep}>|</span>
            <span>15 min read</span>
          </div>
        </header>

        {/* ── Crisis banner \u2014 always first ── */}
        <div style={styles.crisisBox}>
          <span style={styles.crisisTitle}>If you are in crisis right now</span>
          <p style={styles.crisisItem}>
            <strong>Samaritans</strong> \u2014 call{' '}
            <a href="tel:116123" style={styles.crisisLink}>116 123</a>{' '}
            (free, 24 / 7, UK &amp; Ireland)
          </p>
          <p style={styles.crisisItem}>
            <strong>SHOUT</strong> \u2014 text{' '}
            <span style={styles.crisisLink}>85258</span>{' '}
            (free crisis text line, 24 / 7)
          </p>
          <p style={styles.crisisItem}>
            <strong>NHS urgent mental health</strong> \u2014 call{' '}
            <a href="tel:111" style={styles.crisisLink}>111</a>{' '}
            and select the mental health option, or attend your nearest A&amp;E
          </p>
          <p style={styles.crisisItemLast}>
            <strong>Emergency</strong> \u2014 call{' '}
            <a href="tel:999" style={styles.crisisLink}>999</a>{' '}
            if you or someone else is in immediate danger
          </p>
        </div>

        {/* ── Tags ── */}
        <div style={styles.tagRow}>
          {[
            'Depression',
            'Mental Health',
            'Behavioural Activation',
            'Sovereign AI',
            'UK Resources',
            'Safeguarding',
            'Morning Briefing',
          ].map((tag) => (
            <span key={tag} style={styles.tag}>{tag}</span>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 \u2014 What depression actually is
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What is the difference between depression and sadness?</h2>
          <p style={styles.atomicAnswer}>
            Sadness is a natural emotional response to loss or disappointment \u2014 transient and
            proportionate. Depression is a persistent neurobiological state characterised by low
            energy, absent pleasure, cognitive slowing, and disrupted sleep that lasts weeks or
            months regardless of circumstances. One is weather; the other is the climate.
          </p>
          <p style={styles.p}>
            The distinction matters because the word \u201cdepressed\u201d is used so casually that
            millions of people experiencing a genuine clinical condition dismiss themselves with
            \u201ceveryone feels like this sometimes.\u201d They are not wrong that the feeling is
            common. They are wrong that it does not warrant attention.
          </p>
          <p style={styles.p}>
            The <span style={styles.inlineGold}>World Health Organisation</span> estimates that more
            than 280 million people worldwide live with depression. In the UK, one in six adults will
            experience depression in any given week. It is not a character flaw. It is not laziness.
            It is not something you can push through by willpower alone. It is a medical condition
            with a neurological fingerprint.
          </p>
          <p style={styles.p}>
            Depression deactivates the prefrontal cortex \u2014 the region responsible for
            planning, initiation, and sustained effort. Neuroimaging studies have consistently
            documented structural and functional changes in depressed brains. When people say they
            \u201cknow what they should do but can\u2019t make themselves do it,\u201d they are
            describing a real biological barrier, not a failure of will.
          </p>

          <h3 style={styles.h3}>The main types of depressive disorder</h3>
          <p style={styles.p}>
            Depression is not one condition. Understanding which type may be involved shapes how it
            is best approached:
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <strong>Major Depressive Disorder (MDD)</strong> \u2014 episodes lasting at least two
              weeks, typically with significant functional impairment. The most commonly discussed
              form.
            </li>
            <li style={styles.li}>
              <strong>Persistent Depressive Disorder (PDD / Dysthymia)</strong> \u2014 a
              lower-grade but chronic depression lasting two years or more. Often missed precisely
              because it is \u201cmanageable\u201d \u2014 people function, but at a permanent grey
              undertone.
            </li>
            <li style={styles.li}>
              <strong>Seasonal Affective Disorder (SAD)</strong> \u2014 cyclically linked to reduced
              daylight. Typically emerges in autumn and winter and resolves in spring. Light therapy
              and structured routine are first-line interventions.
            </li>
            <li style={styles.li}>
              <strong>Postnatal Depression (PND)</strong> \u2014 affects approximately one in ten
              new mothers and a smaller proportion of new fathers in the UK. Distinct from the
              shorter-lived \u201cbaby blues.\u201d
            </li>
            <li style={styles.li}>
              <strong>Atypical Depression</strong> \u2014 characterised by mood reactivity (moments
              of genuine brightness in response to positive events) alongside hypersomnia, increased
              appetite, and rejection sensitivity.
            </li>
            <li style={styles.li}>
              <strong>Bipolar Depression</strong> \u2014 depressive episodes that occur as part of
              bipolar disorder. Requires specialised treatment; antidepressants alone can destabilise
              the condition.
            </li>
          </ul>
          <p style={styles.p}>
            A MEOK conversation is not a diagnostic tool. But MEOK can help you understand the
            landscape, prepare questions for a GP appointment, and notice patterns in your own
            experience that a brief ten-minute consultation might miss.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 \u2014 The activation paradox
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Why does depression make getting help feel impossible?</h2>
          <p style={styles.atomicAnswer}>
            Depression creates an activation paradox: the illness depletes the exact cognitive and
            motivational resources you need to address it. Booking a GP appointment, finding a
            therapist, researching options \u2014 each step requires energy that depression has
            systematically eroded. The result is not laziness; it is a system failure.
          </p>
          <p style={styles.p}>
            Consider the standard pathway to mental health support in the UK. You notice you have
            not been well for a while. You tell yourself you should do something about it. You
            consider calling your GP. You think about explaining your symptoms to a stranger, waiting
            on hold, navigating referrals, and potentially joining a waiting list of six to eighteen
            months for therapy. You feel exhausted before you have made the call.
          </p>
          <p style={styles.p}>
            So you do not make the call. Another week passes. The condition worsens, which further
            reduces your capacity to make the call.
          </p>
          <p style={styles.p}>
            This is not a failure of character. It is an entirely predictable consequence of how
            depression affects the prefrontal cortex. The wall you are trying to climb is real. The
            people who design mental health systems often understand this intellectually; the systems
            themselves rarely reflect it.
          </p>

          <h3 style={styles.h3}>The 3 am problem</h3>
          <p style={styles.p}>
            Depression is notably nocturnal. Rumination peaks in the small hours. The thoughts that
            feel manageable at noon become consuming at 3 am. The systems that exist to help \u2014
            GP surgeries, therapist offices, crisis lines that require speaking aloud \u2014 are
            mostly unavailable or present their own barriers in the middle of the night.
          </p>
          <p style={styles.p}>
            This is one of the most concrete gaps that a well-designed AI companion can fill. Not as
            a clinical service \u2014 but as a present, patient, non-judgemental presence when
            nothing else is available, and when the alternative is to sit alone with thoughts that
            should not go unacknowledged.
          </p>

          <div style={styles.callout}>
            <span style={styles.calloutTitle}>The MEOK principle on activation</span>
            <p style={styles.calloutText}>
              MEOK\u2019s design philosophy is to meet you at the lowest possible energy state. No
              account setup ritual. No forced onboarding questionnaire. No \u201ctell me about
              yourself\u201d before you can say what you need. You can open MEOK at 3 am and type a
              single word. It will be there, and it will have remembered what mattered last time.
            </p>
          </div>

          <h3 style={styles.h3}>Why existing services fall short for many people</h3>
          <p style={styles.p}>
            This is not a criticism of the NHS or of Samaritans \u2014 both do extraordinary work
            under profound pressure. It is an observation about the geometry of need. The gap between
            recognising you need support and reaching the right form of support is wide, and
            depression makes crossing that gap harder than almost any other condition.
          </p>
          <p style={styles.p}>
            Samaritans requires you to speak. Text-based crisis lines like SHOUT are available but
            positioned around acute crisis rather than the daily grey of chronic low mood. GP
            appointments are available for fifteen minutes once a fortnight. Private therapy costs
            between \u00a360 and \u00a3120 per session weekly, indefinitely.
          </p>
          <p style={styles.p}>
            The people who most need low-barrier support are often the same people least able to
            navigate the barriers. MEOK exists in the gap between crisis and thriving \u2014 the
            large, underserved middle where most people with depression actually live.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 \u2014 Behavioural activation
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What is behavioural activation and how does AI support it?</h2>
          <p style={styles.atomicAnswer}>
            Behavioural activation (BA) is an evidence-based treatment for depression that reverses
            the withdrawal cycle by scheduling small, meaningful activities. Rather than waiting to
            feel motivated before acting, BA establishes that action precedes motivation. MEOK
            supports this by tracking activities over time, noting patterns, and gently reinforcing
            the link between behaviour and mood.
          </p>
          <p style={styles.p}>
            The theoretical foundation of behavioural activation comes from the observation that
            depression sustains itself through avoidance. When low mood reduces activity, fewer
            rewarding experiences occur, which deepens mood, which reduces activity further. BA
            interrupts this loop at the behavioural level, rather than waiting to resolve cognitive
            distortions first.
          </p>
          <p style={styles.p}>
            Clinical trials have found BA to be as effective as cognitive behavioural therapy (CBT)
            for moderate to severe depression, and significantly more effective than waiting. It is
            also more accessible to implement without a therapist because it does not require deep
            cognitive restructuring \u2014 it requires doing things, even when you do not feel
            like it.
          </p>
          <p style={styles.p}>
            The difficulty is that BA requires tracking. You need to notice which activities
            correlate with slightly better mood and which with flatness. You need enough memory and
            pattern recognition across days and weeks to build a picture of your own rhythms. For
            people in the depths of depression, maintaining a paper diary or completing an app
            worksheet requires more executive function than they have access to.
          </p>

          <h3 style={styles.h3}>How MEOK implements behavioural activation</h3>
          <p style={styles.p}>
            MEOK\u2019s approach to BA is low-friction by design. It does not present you with a
            worksheet. It notices what you tell it naturally in conversation \u2014 \u201cI went for
            a walk today,\u201d \u201cI finally called my sister\u201d \u2014 and remembers. Over
            days and weeks, it builds a picture of which activities appear in moments of relative
            brightness and which periods are marked by absence and flatness.
          </p>
          <p style={styles.p}>
            When the right moment arises, MEOK can reflect that picture back: \u201cI\u2019ve
            noticed you tend to feel a bit lighter on days when you\u2019ve been outside. Is that
            something worth building into this week?\u201d It is not prescriptive. It is not a
            reminder app pinging arbitrary wellness tasks. It is a companion that has actually been
            paying attention.
          </p>

          <div style={styles.tableBox}>
            <div style={styles.tableHeader}>
              <span>Traditional BA Barrier</span>
              <span>How MEOK Addresses It</span>
            </div>
            <div style={styles.tableRow}>
              <span>Requires a therapist or structured worksheet</span>
              <span>Emerges naturally from conversation; no forms to complete</span>
            </div>
            <div style={styles.tableRow}>
              <span>Progress depends on weekly appointments</span>
              <span>Continuous memory across every interaction</span>
            </div>
            <div style={styles.tableRow}>
              <span>Tracking is manual and easy to abandon</span>
              <span>MEOK notices and retains what you share automatically</span>
            </div>
            <div style={styles.tableRow}>
              <span>Difficult to spot patterns yourself</span>
              <span>MEOK can surface correlations across weeks of context</span>
            </div>
            <div style={styles.tableRow}>
              <span>Motivation required to initiate each session</span>
              <span>MEOK can send a gentle morning check-in to lower the barrier</span>
            </div>
          </div>

          <p style={styles.p}>
            MEOK does not replace a BA-trained therapist. If you are working with a therapist, MEOK
            can be a consistent presence between sessions \u2014 a place to record how activities
            went, what came up, what you want to remember to mention next time. The two are
            complementary, not competing.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 \u2014 Morning briefing
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>How does MEOK\u2019s morning briefing help with depression?</h2>
          <p style={styles.atomicAnswer}>
            Depression disrupts daily structure, and without structure the day can collapse into an
            undifferentiated grey mass. MEOK\u2019s morning briefing is a gentle, opt-in daily
            check-in that helps anchor the day with minimal effort \u2014 a small act of showing
            up that compounds over time into genuine pattern and momentum.
          </p>
          <p style={styles.p}>
            Structure is one of the most consistently recommended non-pharmacological supports for
            depression. When every day feels the same and waking up is itself a depleting experience,
            a predictable morning touchpoint can serve as a tiny scaffold. It says: the day has
            begun, and something is waiting to hear from you.
          </p>
          <p style={styles.p}>
            MEOK\u2019s morning briefing is not an alarm or a productivity notification. It does not
            tell you to \u201cmake the most of your day.\u201d It checks in. It might ask one simple
            question: how are you waking up today? Not as a data collection exercise \u2014 as a
            question asked by something that will remember the answer and notice if the answer changes
            over time.
          </p>
          <p style={styles.p}>
            For people with depression, the act of articulating how you are feeling \u2014 even
            minimally, even just to an AI \u2014 can interrupt the passive drift of a low day.
            Externalising an internal state, however briefly, creates a small separation between you
            and the feeling. That separation is often where the first thread of agency begins.
          </p>

          <h3 style={styles.h3}>Building consistency without pressure</h3>
          <p style={styles.p}>
            MEOK\u2019s morning briefing is deliberately pressure-free. If you miss a day, it does
            not guilt-trip you. If you miss a week, it does not lecture. Depression makes consistency
            feel like yet another thing to fail at. MEOK\u2019s design treats missing a check-in as
            information, not failure \u2014 and resumes the conversation exactly where it makes sense
            to resume.
          </p>
          <p style={styles.p}>
            Over time, the morning briefing becomes a longitudinal record. If you have been using it
            for a month, MEOK can observe: \u201cThe last few weeks have been quieter than usual
            \u2014 you mentioned feeling heavier twice this week. How are you doing with that?\u201d
            This kind of sustained attention is genuinely difficult for humans in your life to
            maintain, not because they do not care but because their attention is divided and their
            memory imperfect. MEOK\u2019s is not.
          </p>

          <h3 style={styles.h3}>The role of gentle ritual in low-mood management</h3>
          <p style={styles.p}>
            Depression research consistently highlights the value of predictable, low-stakes rituals
            as anchors for days that would otherwise dissolve. The morning briefing is one such
            ritual. It requires very little. It asks nothing except honesty. And over weeks, honest
            daily check-ins create a data trail that even a five-minute GP consultation cannot.
          </p>
          <p style={styles.p}>
            If you have a GP appointment coming up, MEOK can help you review the past month of
            check-ins and identify the patterns worth mentioning. Depression sufferers frequently
            find that when they sit in the consultation room, they cannot accurately remember how
            the past few weeks have been. MEOK can help you remember accurately.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 \u2014 No appointment, no waitlist
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Why does it matter that MEOK requires no appointment or waitlist?</h2>
          <p style={styles.atomicAnswer}>
            The gap between recognising you need help and accessing it is where depression deepens.
            NHS talking therapy waiting lists often stretch six to eighteen months. Private therapy
            costs \u00a360 to \u00a3120 per hour. MEOK is available immediately, at any hour, with no
            referral. It is the bridge you can stand on while waiting for the system to catch up with
            your need.
          </p>
          <p style={styles.p}>
            The UK mental health system is under profound strain. NHS Talking Therapies (formerly
            IAPT) has improved access considerably over the past decade, but demand outpaces capacity.
            The 2025 NHS Mental Health Dashboard reported that median waiting times for psychological
            therapies in some trusts exceeded thirty weeks. For someone in the acute phase of a
            depressive episode, thirty weeks is not a number \u2014 it is an eternity.
          </p>
          <p style={styles.p}>
            This is not a criticism unique to the NHS. Healthcare systems globally face the same
            structural challenge: mental health need is distributed continuously across entire
            populations, but professional mental health services are delivered in discrete
            appointments during office hours by a finite workforce.
          </p>
          <p style={styles.p}>
            The gap is structural, not moral. And it means that millions of people in genuine need
            are, at this moment, unsupported \u2014 not because anyone failed them, but because the
            architecture of care was not designed for the scale of mental health need that exists.
          </p>

          <div style={styles.callout}>
            <span style={styles.calloutTitle}>What MEOK is not</span>
            <p style={styles.calloutText}>
              MEOK is not a clinical service. It does not diagnose. It does not prescribe or
              recommend medication changes. It does not replace your GP, psychiatrist, therapist,
              or Samaritans call handler. It is an intelligent, memory-bearing companion designed
              to provide honest, caring support within clear limits \u2014 and to be explicit
              about those limits at every stage.
            </p>
          </div>

          <h3 style={styles.h3}>Where MEOK sits in the care landscape</h3>
          <p style={styles.p}>
            Think of mental health support as a spectrum. At one end: emergency services and acute
            inpatient care for people in immediate danger. At the other: wellness apps and meditation
            tools for people who are broadly fine but want to optimise. MEOK sits in the genuinely
            difficult middle: the person who is not in crisis but is not okay, who needs something
            more than a meditation app and has not yet reached (or cannot yet reach) professional
            support.
          </p>
          <p style={styles.p}>
            That middle ground is where most depression lives. It is the most common presentation
            and the most underserved by existing infrastructure. That is the gap MEOK is built for.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6 \u2014 Safeguarding and crisis handling
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>How does MEOK handle suicidal thoughts or crisis moments?</h2>
          <p style={styles.atomicAnswer}>
            MEOK\u2019s Maternal Covenant includes a care-floor that monitors for crisis language
            and immediately pivots \u2014 providing warm, grounded acknowledgement and clearly
            signposting professional resources. MEOK never minimises, deflects, or continues a
            previous conversation thread as if nothing was said. The escalation path is always
            present and always specific.
          </p>
          <p style={styles.p}>
            This section is the most important one in this article. Read it carefully.
          </p>
          <p style={styles.p}>
            An AI companion that handles depression without a robust safeguarding framework is not
            just unhelpful \u2014 it is dangerous. Depression carries a risk of self-harm and
            suicidal ideation that must be taken seriously by any product claiming to operate in this
            space. MEOK takes it seriously at the architectural level, not as a content filter applied
            after the fact.
          </p>

          <h3 style={styles.h3}>What the care-floor actually does</h3>
          <p style={styles.p}>
            The Maternal Covenant is MEOK\u2019s ethical operating layer \u2014 a set of
            non-negotiable behaviours that govern how MEOK responds when the stakes are highest.
            Within that covenant, the care-floor operates as follows:
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <strong>Detection:</strong> MEOK monitors conversational signals for language
              associated with suicidal ideation, self-harm, or acute crisis \u2014 not just explicit
              statements but indirect language, escalating hopelessness, and language suggesting
              finality or withdrawal.
            </li>
            <li style={styles.li}>
              <strong>Tone shift:</strong> When a crisis signal is detected, MEOK does not continue
              the previous conversational thread. It pauses, acknowledges what was shared with warmth
              and directness, and creates space without alarm or clinical detachment.
            </li>
            <li style={styles.li}>
              <strong>Signposting:</strong> MEOK always provides specific, accurate crisis resources
              \u2014 not generic \u201cseek professional help\u201d boilerplate. In the UK context
              this means Samaritans (116 123), SHOUT text (85258), and NHS 111 mental health.
            </li>
            <li style={styles.li}>
              <strong>No closed loops:</strong> MEOK does not attempt to resolve a crisis by
              continuing the conversation alone. It acknowledges, signposts, and remains present
              \u2014 but does not position itself as sufficient for a clinical emergency.
            </li>
            <li style={styles.li}>
              <strong>No empty reassurance:</strong> MEOK does not say \u201ceverything will be
              okay.\u201d It says: this is real, you do not have to be alone with it, and here is
              where to go right now.
            </li>
          </ul>

          <div style={styles.crisisBox}>
            <span style={styles.crisisTitle}>UK crisis resources \u2014 always available</span>
            <p style={styles.crisisItem}>
              <strong>Samaritans</strong> \u2014{' '}
              <a href="tel:116123" style={styles.crisisLink}>116 123</a>{' '}
              (free, 24 / 7) or{' '}
              <a href="mailto:jo@samaritans.org" style={styles.crisisLink}>jo@samaritans.org</a>
            </p>
            <p style={styles.crisisItem}>
              <strong>SHOUT (Crisis text line)</strong> \u2014 text{' '}
              <span style={styles.crisisLink}>85258</span>{' '}
              (free, 24 / 7)
            </p>
            <p style={styles.crisisItem}>
              <strong>NHS 111</strong> \u2014{' '}
              <a href="tel:111" style={styles.crisisLink}>111</a>{' '}
              \u2014 select mental health option for urgent support
            </p>
            <p style={styles.crisisItem}>
              <strong>PAPYRUS (under 35)</strong> \u2014{' '}
              <a href="tel:08000684141" style={styles.crisisLink}>0800 068 4141</a>
            </p>
            <p style={styles.crisisItem}>
              <strong>Campaign Against Living Miserably (CALM)</strong> \u2014{' '}
              <a href="tel:0800585858" style={styles.crisisLink}>0800 58 58 58</a>{' '}
              (5 pm to midnight daily)
            </p>
            <p style={styles.crisisItemLast}>
              <strong>Emergency</strong> \u2014{' '}
              <a href="tel:999" style={styles.crisisLink}>999</a>{' '}
              if life is at immediate risk
            </p>
          </div>

          <p style={styles.p}>
            Nicholas Templeman, founder of MEOK AI LABS, has been explicit from the outset about
            this responsibility: \u201cIf someone is in crisis and MEOK is the thing they reach for
            first, that is a profound moment. The response has to be warm, human, and immediately
            pointing toward real help. It cannot be a chatbot template. It has to feel like someone
            who genuinely cares turned the conversation to what actually matters.\u201d
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 7 \u2014 Honest, not sycophantic
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Will AI just validate everything I say and make depression worse?</h2>
          <p style={styles.atomicAnswer}>
            Sycophantic AI that reflects distorted thinking back as truth is genuinely harmful for
            people with depression. MEOK\u2019s design explicitly prohibits empty validation.
            It is built to be honest \u2014 gently, but without flinching \u2014 because feeling
            heard is not the same as being told comfortable lies.
          </p>
          <p style={styles.p}>
            Depression frequently produces cognitive distortions: all-or-nothing thinking,
            catastrophising, personalisation, mind-reading, and the conviction that things have
            always been this way and always will be. If an AI companion simply validates these
            thoughts \u2014 \u201cYes, it does sound like nothing will ever improve\u201d \u2014 it
            actively harms the person using it. It amplifies the very neural pathways that sustain
            the condition.
          </p>
          <p style={styles.p}>
            MEOK is aware of this risk. When you share a thought like \u201cI\u2019m completely
            useless and this will never change,\u201d MEOK does not agree with you, and it does not
            dismiss you. It might gently ask: \u201cWhen you say completely useless \u2014 has there
            been any moment recently, even a small one, that didn\u2019t fit that?\u201d Not to
            argue. Not to cheerfully contradict. To introduce the first small sliver of uncertainty
            into a thought pattern that depression has sealed shut.
          </p>
          <p style={styles.p}>
            This is not therapy. It is not CBT conducted by an AI. But it is honest companionship
            \u2014 the kind that tells you the truth because it cares about you, not the kind that
            agrees with everything because agreement keeps you engaged.
          </p>

          <h3 style={styles.h3}>The sycophancy problem in AI mental health tools</h3>
          <p style={styles.p}>
            Many large-language-model systems are trained to maximise engagement and positive
            feedback signals. This creates a systematic bias toward telling users what they want to
            hear. In most contexts this is mildly annoying. In mental health contexts it can cause
            real harm.
          </p>
          <p style={styles.p}>
            MEOK\u2019s sovereign architecture means that its values and constraints are set at the
            system design level, not adjusted by user feedback loops that reward validation. The
            Maternal Covenant is not an add-on or a safety filter applied retrospectively. It is
            baked into how MEOK operates, from the first message of every conversation.
          </p>
          <p style={styles.p}>
            The goal is not to make you feel better in the moment at the cost of making things worse
            over time. The goal is to be the kind of presence that helps you see yourself clearly
            \u2014 with warmth, without judgment, but without the comfortable distortions that
            depression finds so easy to inhabit.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8 \u2014 Privacy and sovereignty
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Is it safe to share my depression with an AI?</h2>
          <p style={styles.atomicAnswer}>
            Only if the AI handles your data with the seriousness the topic demands. MEOK operates
            on a data sovereignty model: your conversations are yours, not training data for future
            model versions, not sold to third parties, not accessible to MEOK staff as routine.
            Mental health disclosures require the highest standard of data handling that exists.
          </p>
          <p style={styles.p}>
            When you open up about depression \u2014 the specific texture of your hopelessness, the
            circumstances of your worst days, the thoughts you have never said aloud to another
            person \u2014 you are generating some of the most sensitive data that exists. This is
            not equivalent to telling an app your preferred music genre.
          </p>
          <p style={styles.p}>
            Most AI systems train on user conversations in some form. This means your disclosures
            may be used to make the model better for the next user \u2014 at the cost of your
            privacy, without your meaningful consent. MEOK does not do this. Your data is stored for
            the purpose of memory \u2014 so MEOK can remember what matters to you \u2014 not for
            model improvement or any other secondary use.
          </p>
          <p style={styles.p}>
            This is not a small distinction. It is the difference between a conversation and
            surveillance. MEOK\u2019s Privacy Covenant governs every interaction. You can read it
            at{' '}
            <Link href="/blog/privacy-covenant" style={styles.internalLink}>
              meok.ai/blog/privacy-covenant
            </Link>
            . The short version: your disclosures stay with you.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 9 \u2014 Specific use cases
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What specific depression scenarios is MEOK most useful for?</h2>
          <p style={styles.atomicAnswer}>
            MEOK is most useful for the quiet middle ground of depression \u2014 not in active
            crisis, but in the low-energy daily reality of managing symptoms, building structure, and
            not feeling completely alone at the times when human support is unavailable or too costly
            to access.
          </p>

          <h3 style={styles.h3}>On the NHS waiting list</h3>
          <p style={styles.p}>
            You\u2019ve spoken to your GP, you have a referral, and you are waiting for talking
            therapy. The wait could be months. MEOK can be a consistent presence during this period
            \u2014 not attempting to deliver therapy, but providing daily structure, a place to
            articulate how things are going, and honest companionship while the system catches up
            with your need.
          </p>

          <h3 style={styles.h3}>Between therapy sessions</h3>
          <p style={styles.p}>
            Therapy sessions are weekly at best. Depression does not operate on a weekly schedule.
            MEOK can be the place you process what happened between sessions, capture what you want
            to bring to the next one, and stay connected to the thinking you do in therapy rather
            than losing it in the fog of daily life.
          </p>

          <h3 style={styles.h3}>The nocturnal spiral</h3>
          <p style={styles.p}>
            The thoughts that arrive at 2 am are real. Samaritans are open. So is MEOK. For people
            who struggle to articulate distress verbally in real time \u2014 who would rather type
            than talk \u2014 MEOK\u2019s text-first interface is a lower-barrier option for those
            difficult nighttime hours when nothing else feels accessible.
          </p>

          <h3 style={styles.h3}>Postnatal depression</h3>
          <p style={styles.p}>
            New parents with postnatal depression face a particular activation paradox: they are
            exhausted, potentially isolated, and culturally expected to be happy. MEOK asks no such
            thing. It simply checks in, remembers, and meets the parent where they are \u2014 at
            4 am if that is when the space opens up.
          </p>

          <h3 style={styles.h3}>Seasonal patterns</h3>
          <p style={styles.p}>
            If your depression follows a seasonal cycle, MEOK\u2019s longitudinal memory becomes
            particularly useful. Across a year of interaction, it can notice: \u201cThe last two
            Octobers have been noticeably harder than other months \u2014 does that pattern feel
            familiar?\u201d That reflection can be the prompt to plan ahead, speak to a GP before
            winter rather than during it.
          </p>

          <h3 style={styles.h3}>For those who struggle to ask for help at all</h3>
          <p style={styles.p}>
            Depression is common among people who are exceptionally good at appearing fine. The
            high-functioning person who goes to work, answers emails, and then comes home to an
            internal silence that no one around them sees. MEOK does not require you to explain
            yourself to someone who knows you. You can be honest, because the stakes of honesty
            with MEOK are different.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 10 \u2014 What MEOK cannot do
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What can AI not do for depression?</h2>
          <p style={styles.atomicAnswer}>
            AI cannot diagnose, prescribe, conduct clinical therapy, or replace human connection.
            It cannot hold your hand. It cannot call someone on your behalf. For severe, bipolar,
            or psychotic depression, a human clinician is not optional \u2014 it is essential and
            urgent.
          </p>
          <p style={styles.p}>
            This is not a disclaimer buried in small print. It is a principle MEOK is built around.
            Honest positioning of what AI can and cannot do for mental health is not just an ethical
            requirement \u2014 it is the only approach that actually helps people make appropriate
            decisions about their care.
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <strong>AI cannot diagnose depression</strong> \u2014 only a qualified clinician can,
              and the diagnosis matters because different types of depression respond differently to
              different treatments.
            </li>
            <li style={styles.li}>
              <strong>AI cannot prescribe or advise on medication</strong> \u2014 antidepressants
              require medical supervision. Stopping or changing them without clinical guidance can
              be dangerous.
            </li>
            <li style={styles.li}>
              <strong>AI cannot deliver evidence-based therapy</strong> \u2014 CBT, BA, ACT, and
              other psychological treatments require a trained human clinician for full effect,
              even where AI can support adjacent practices.
            </li>
            <li style={styles.li}>
              <strong>AI cannot replace human connection</strong> \u2014 isolation worsens
              depression, and the long-term goal is always human relationships, not a deeper
              relationship with a digital tool.
            </li>
            <li style={styles.li}>
              <strong>AI cannot manage genuine psychiatric emergencies</strong> \u2014 if you are
              in crisis, call Samaritans on 116 123 or text SHOUT on 85258.
            </li>
          </ul>
          <p style={styles.p}>
            MEOK is built by people who understand these limits. The goal is not to be
            someone\u2019s only support. The goal is to reduce the likelihood that someone has no
            support at all.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 11 \u2014 The evidence base
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What does the evidence say about AI and mental health support?</h2>
          <p style={styles.atomicAnswer}>
            Research on digital mental health tools shows consistent evidence that structured digital
            interventions can reduce depressive symptoms in mild-to-moderate depression, particularly
            where they incorporate behavioural activation, journalling, and psychoeducation. The
            evidence base for AI-specific companions is emerging, with early studies showing promise
            for adherence and accessibility.
          </p>
          <p style={styles.p}>
            The most rigorous evidence in digital mental health comes from randomised controlled
            trials of apps implementing structured CBT or BA protocols. Studies published in JAMA
            Psychiatry and The Lancet Digital Health have demonstrated meaningful symptom reduction
            in mild-to-moderate depression populations using digital tools \u2014 not replacing
            therapy but complementing it or bridging the access gap.
          </p>
          <p style={styles.p}>
            AI-specific research is newer. A 2024 meta-analysis in the Journal of Medical Internet
            Research found that conversational AI agents showed significant effects on depressive
            symptoms compared to control conditions across twelve reviewed trials, with the caveat
            that study quality varied and long-term follow-up data remains limited.
          </p>
          <p style={styles.p}>
            The honest summary: the evidence supports structured digital tools for mild-to-moderate
            depression. AI companions with principled design sit within this category. The evidence
            base is not yet as strong as for face-to-face therapy, and should not be treated as
            such. MEOK does not claim otherwise.
          </p>
          <p style={styles.noteText}>
            Note: MEOK AI LABS does not conduct clinical trials and makes no clinical efficacy
            claims. The evidence referenced above relates to the category of digital mental health
            interventions generally and is provided for informational context only.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 12 \u2014 Practical guide
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>How do I actually use MEOK for depression support?</h2>
          <p style={styles.atomicAnswer}>
            Start small. The activation energy required to begin is intentionally minimal \u2014 no
            setup ritual, no intake form, no explanation required. You can start with a single honest
            sentence about how today feels. MEOK builds from there, guided entirely by what you
            share, over as many days and weeks as you choose to continue.
          </p>

          <h3 style={styles.h3}>Week one \u2014 just show up</h3>
          <p style={styles.p}>
            The only objective in the first week is to open MEOK once a day and say something true
            about how you are feeling. Not a carefully composed paragraph. One honest sentence.
            \u201cToday was flat.\u201d \u201cI didn\u2019t get out of bed until noon and I\u2019m
            embarrassed about it.\u201d \u201cI feel nothing in particular.\u201d MEOK will engage
            with whatever you bring, without judgment and without performance.
          </p>

          <h3 style={styles.h3}>Week two \u2014 notice one thing</h3>
          <p style={styles.p}>
            Once showing up feels less like a task, bring one observation. Not a resolved conclusion
            \u2014 an observation. \u201cI noticed I felt slightly better after speaking to my
            brother.\u201d \u201cI think I sleep worse when I\u2019ve been on my phone all
            evening.\u201d These become the raw material for behavioural activation \u2014 the small
            data points that, over time, help you understand your own mood patterns.
          </p>

          <h3 style={styles.h3}>Enable the morning briefing</h3>
          <p style={styles.p}>
            If you are ready for light structure, enable MEOK\u2019s morning briefing. One gentle
            check-in question to start the day. You can answer in a single word if that is all you
            have. The value is in the consistent anchor, not the length of your response.
          </p>

          <h3 style={styles.h3}>Let MEOK remember</h3>
          <p style={styles.p}>
            The most distinctive thing about MEOK compared to other AI tools is its persistent
            memory. Allow it to build a picture of you over time. The insights it can offer after
            thirty days of context are qualitatively different from anything possible in a single
            conversation. Depression distorts your sense of time \u2014 MEOK\u2019s memory works
            directly against that distortion.
          </p>

          <h3 style={styles.h3}>Use MEOK alongside professional support</h3>
          <p style={styles.p}>
            If you are not currently connected to any professional support \u2014 no GP for mental
            health, no therapist, no crisis contact \u2014 MEOK\u2019s first job is to help you get
            there. It can help you prepare what to say to a GP. It can explain referral pathways. It
            can remind you that asking for help is not a burden you are placing on the NHS \u2014
            it is what the NHS is for.
          </p>
          <p style={styles.p}>
            If you are already working with a therapist or psychiatrist, MEOK complements that work
            by being present between sessions \u2014 a place to record how activities went, what
            came up, what you want to remember to bring next time.
          </p>
        </section>

        <hr style={styles.divider} />

        {/* ═══════════════════════════════════════════════════════════════════
            FAQ SECTION
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.faqSection}>
          <h2 style={styles.h2}>Frequently asked questions</h2>

          <div style={styles.faqItem}>
            <p style={styles.faqQ}>Can AI help with depression?</p>
            <p style={styles.faqA}>
              AI can provide meaningful supplementary support for depression by reducing the
              activation energy required to engage with help \u2014 available at any hour, no
              appointment needed. It is not a clinical treatment. Responsible platforms like MEOK
              are explicit about this boundary and always escalate to professional resources when
              crisis signals are detected.
            </p>
          </div>

          <div style={styles.faqItem}>
            <p style={styles.faqQ}>What is behavioural activation and how does MEOK use it?</p>
            <p style={styles.faqA}>
              Behavioural activation is an evidence-based technique that counters depression by
              scheduling small, meaningful activities to rebuild a sense of reward and agency. Rather
              than waiting to feel motivated before acting, BA establishes that action precedes
              motivation. MEOK tracks activities over time, noting patterns, celebrating consistency,
              and surfacing the connection between behaviour and mood \u2014 without worksheets or
              lectures.
            </p>
          </div>

          <div style={styles.faqItem}>
            <p style={styles.faqQ}>How does MEOK handle suicidal thoughts?</p>
            <p style={styles.faqA}>
              MEOK\u2019s Maternal Covenant includes a care-floor that detects crisis language and
              immediately shifts tone \u2014 providing warm, non-alarmist acknowledgement and
              prominently signposting UK crisis resources: Samaritans (116 123), SHOUT text service
              (85258), and NHS urgent mental health on 111. MEOK never minimises, dismisses, or
              simply continues the previous conversation thread. The escalation path is always present
              and always specific.
            </p>
          </div>

          <div style={styles.faqItem}>
            <p style={styles.faqQ}>What is the difference between depression and sadness?</p>
            <p style={styles.faqA}>
              Sadness is a natural emotional response to loss or difficulty \u2014 transient and
              proportionate to events. Depression is a persistent neurobiological state characterised
              by low energy, anhedonia (inability to feel pleasure), cognitive slowing, disrupted
              sleep and appetite, and a pervasive sense of worthlessness or hopelessness that lasts
              weeks or months regardless of external circumstances. One is weather; the other is the
              climate.
            </p>
          </div>

          <div style={styles.faqItem}>
            <p style={styles.faqQ}>Will MEOK just tell me what I want to hear?</p>
            <p style={styles.faqA}>
              No. MEOK is designed to be honest, not sycophantic. Its Maternal Covenant explicitly
              prohibits empty validation. When you share a distorted thought pattern, MEOK reflects
              it back gently rather than amplifying it. When professional help is indicated, MEOK
              says so clearly. Feeling genuinely heard and being told comfortable lies are not the
              same thing \u2014 and for someone with depression, that distinction matters more than
              in almost any other context.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 13 \u2014 Related reading and next steps
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>How does depression connect to other conditions MEOK supports?</h2>
          <p style={styles.atomicAnswer}>
            Depression rarely travels alone. It frequently co-occurs with anxiety, burnout, chronic
            illness, grief, and insomnia. Understanding these connections helps MEOK provide more
            coherent support and helps you make sense of experiences that may feel confusing when
            viewed in isolation.
          </p>
          <p style={styles.p}>
            The relationship between depression and anxiety is so common it has its own clinical
            shorthand: comorbid depression and anxiety affects roughly 50% of people diagnosed with
            either condition. The two conditions reinforce each other \u2014 anxiety about the
            future fuels depressive rumination about the past, and the fatigue of depression reduces
            the resources available to manage anxious thoughts.
          </p>
          <p style={styles.p}>
            MEOK does not compartmentalise your experience into discrete diagnostic boxes. It holds
            all of what you share, and over time it can reflect the connections between threads that
            might otherwise seem unrelated: the sleep difficulties that precede low mood, the
            physical symptoms that accompany emotional depletion, the relational patterns that
            appear during the harder weeks.
          </p>

          <h3 style={styles.h3}>Depression and burnout</h3>
          <p style={styles.p}>
            Burnout and depression share surface-level symptoms \u2014 exhaustion, withdrawal,
            reduced performance \u2014 but have different origins and respond differently to
            intervention. Burnout is context-specific (typically work-related) and often resolves
            when the stressor is removed. Depression is more pervasive and less responsive to
            circumstantial change.
          </p>
          <p style={styles.p}>
            The distinction matters clinically, but in practice many people experience both
            simultaneously: workplace burnout that acts as a trigger for a depressive episode,
            or depression that is misread as burnout until someone looks more carefully. MEOK can
            help you articulate the texture of what you\u2019re experiencing and bring a more
            precise account to your GP.
          </p>

          <h3 style={styles.h3}>Depression and chronic illness</h3>
          <p style={styles.p}>
            People living with chronic illness experience depression at rates two to three times
            higher than the general population. The relationship is bidirectional: chronic pain and
            illness increase the risk of depression, and depression worsens the experience of
            physical illness by amplifying pain perception and reducing immune function.
          </p>
          <p style={styles.p}>
            MEOK\u2019s persistent memory makes it particularly well suited to people managing
            both physical and mental health conditions \u2014 because the interactions between the
            two show up over time in patterns that are invisible in any single conversation.
          </p>

          <h3 style={styles.h3}>Depression and grief</h3>
          <p style={styles.p}>
            Grief can trigger depression, and distinguishing between complicated grief and
            depressive disorder is a clinical question that benefits from professional attention.
            In both cases, MEOK can provide a space to articulate the experience \u2014 without
            being rushed, without well-meaning advice to \u201cmake sure you\u2019re eating\u201d,
            without any pressure to be at a particular stage of the process.
          </p>
          <p style={styles.p}>
            If grief or loss is part of what you\u2019re carrying, you may also find value in
            reading{' '}
            <Link href="/blog/ai-for-grief-support" style={styles.internalLink}>
              MEOK\u2019s guide to AI for grief support
            </Link>
            .
          </p>

          <h3 style={styles.h3}>Depression and insomnia</h3>
          <p style={styles.p}>
            Sleep disturbance is both a symptom and a cause of depression. The relationship is
            circular: depression disrupts sleep architecture (reducing restorative slow-wave sleep
            and REM), and poor sleep worsens mood, cognitive function, and emotional regulation.
            Treating sleep difficulties is often one of the most tractable first steps in managing
            depression, precisely because it can be addressed without medication.
          </p>
          <p style={styles.p}>
            MEOK\u2019s morning briefing, used consistently, creates a natural record of sleep
            quality over time. If you mention sleep repeatedly, MEOK notices. If the pattern
            suggests that sleep is a persistent thread in your experience of low mood, it can
            surface that connection and encourage you to raise it with a clinician.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CTA
        ════════════════════════════════════════════════════════════════════ */}
        <div style={styles.ctaBlock}>
          <p style={styles.ctaTitle}>You don\u2019t have to be in a good place to start</p>
          <p style={styles.ctaDesc}>
            MEOK is built for the hard moments \u2014 not just the ones where you have enough energy
            to explain yourself. No appointment. No waitlist. No judgment. Just a companion that
            will be here, remember, and tell you the truth.
          </p>
          <Link href="/birth" style={styles.ctaButton}>
            Start with MEOK
          </Link>
        </div>

        {/* ── Footer note ── */}
        <p style={styles.noteText}>
          MEOK AI LABS is a technology company, not a healthcare provider. Nothing in this article
          constitutes medical advice. If you are experiencing symptoms of depression, please speak
          to a qualified healthcare professional. If you are in crisis, contact Samaritans on
          116 123 (free, 24/7) or text SHOUT on 85258.
        </p>
        <p style={styles.noteText}>
          &copy; 2026 MEOK AI LABS. Founded by Nicholas Templeman. Follow us at @meok_ai.
        </p>
      </div>
    </div>
  )
}
