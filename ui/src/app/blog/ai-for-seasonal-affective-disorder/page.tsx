import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Seasonal Affective Disorder: Getting Through the Dark Months | MEOK AI LABS',
  description:
    'Seasonal Affective Disorder affects around 2 million people in the UK every winter. MEOK AI LABS explains how sovereign AI with long-term memory supports SAD management \u2014 tracking seasonal patterns, daily check-ins, and knowing when to escalate.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-seasonal-affective-disorder' },
  openGraph: {
    title: 'AI for Seasonal Affective Disorder: Getting Through the Dark Months',
    description:
      'SAD follows a predictable seasonal rhythm \u2014 and MEOK remembers it across years. Discover how sovereign AI supports light therapy routines, daily check-ins, and mood pattern tracking for winter depression.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-seasonal-affective-disorder',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Seasonal+Affective+Disorder%3A+Getting+Through+the+Dark+Months&desc=Sovereign+AI+that+remembers+your+seasonal+patterns+year+on+year',
        width: 1200,
        height: 630,
        alt: 'AI for Seasonal Affective Disorder: Getting Through the Dark Months | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Seasonal Affective Disorder: Getting Through the Dark Months',
    description:
      'MEOK remembers that last November you also had this pattern. Sovereign AI for SAD \u2014 daily check-ins, mood tracking across seasons, and a Guardian that notices when you\u2019re slipping.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Seasonal+Affective+Disorder%3A+Getting+Through+the+Dark+Months&desc=Sovereign+AI+that+remembers+your+seasonal+patterns+year+on+year',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Seasonal Affective Disorder: Getting Through the Dark Months',
  description:
    'An evidence-informed guide to how sovereign AI with multi-year memory can support SAD management \u2014 covering light therapy, CBT, morning routines, mood pattern tracking, and when to seek professional help.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-seasonal-affective-disorder',
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
    '@id': 'https://meok.ai/blog/ai-for-seasonal-affective-disorder',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Seasonal Affective Disorder (SAD)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seasonal Affective Disorder is a subtype of depression that follows a predictable seasonal pattern \u2014 typically emerging in autumn, intensifying through winter, and remitting in spring. It affects approximately 2 million people in the UK and is distinct from general low mood caused by cold weather or shorter days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the main symptoms of SAD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core SAD symptoms include persistent low mood, lethargy, excessive sleeping (hypersomnia), strong cravings for carbohydrates, weight gain, social withdrawal, difficulty concentrating, and a pervasive sense of hopelessness that lifts with the arrival of longer days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What treatments are recommended for SAD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NICE-recommended treatments for SAD include light therapy using a 10,000 lux lamp for 30 minutes each morning, Cognitive Behavioural Therapy (CBT) adapted for SAD, and in more severe cases antidepressant medication. A structured daily routine and regular exercise are also strongly supported by evidence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help with Seasonal Affective Disorder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI cannot replace clinical treatment for SAD, but it can meaningfully supplement it. A sovereign AI like MEOK helps by maintaining daily check-in routines, tracking mood patterns across multiple winters, providing non-judgemental space to process low mood, supporting small-win momentum, and alerting the user when patterns indicate it is time to seek professional help.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes MEOK different from general AI chatbots for SAD support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'General AI tools have no memory beyond the current session. MEOK\u2019s Sovereign Memory persists across months and years \u2014 which means it can say \u201clast October you reported the same pattern of withdrawal and fatigue; here is what helped then.\u201d That longitudinal context is uniquely valuable for a condition that is, by definition, recurrent and seasonal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK know when to encourage professional help for SAD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\u2019s Guardian archetype monitors mood decline patterns over time and is configured to gently but clearly signal when the severity or duration of symptoms exceeds what self-management and AI support alone should handle. It does this without alarmism and always provides specific, actionable signposting to UK resources.',
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
  nav: {
    borderBottom: '1px solid rgba(201,168,76,0.15)',
    padding: '0 24px',
  } as React.CSSProperties,
  navInner: {
    maxWidth: '780px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
  } as React.CSSProperties,
  navLogo: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#f5f0e8',
    textDecoration: 'none',
    letterSpacing: '0.02em',
  } as React.CSSProperties,
  navLinks: {
    display: 'flex',
    gap: '28px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  } as React.CSSProperties,
  navLink: {
    fontSize: '13px',
    color: 'rgba(245,240,232,0.6)',
    textDecoration: 'none',
    letterSpacing: '0.02em',
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
  externalLink: {
    color: '#c9a84c',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  } as React.CSSProperties,
  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
    marginBottom: '56px',
  } as React.CSSProperties,
  relatedCard: {
    background: 'rgba(245,240,232,0.03)',
    border: '1px solid rgba(245,240,232,0.1)',
    borderRadius: '10px',
    padding: '20px 22px',
    textDecoration: 'none',
    display: 'block',
  } as React.CSSProperties,
  relatedLabel: {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '8px',
    display: 'block',
  } as React.CSSProperties,
  relatedTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#f5f0e8',
    lineHeight: 1.45,
    margin: 0,
  } as React.CSSProperties,
  archetypeCard: {
    background: 'rgba(13,12,24,0.6)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '10px',
    padding: '24px 28px',
    marginBottom: '16px',
  } as React.CSSProperties,
  archetypeName: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#c9a84c',
    margin: '0 0 8px',
    display: 'block',
  } as React.CSSProperties,
  archetypeDesc: {
    fontSize: '15px',
    lineHeight: 1.7,
    color: 'rgba(245,240,232,0.8)',
    margin: 0,
  } as React.CSSProperties,
  resourceBox: {
    background: 'rgba(245,240,232,0.03)',
    border: '1px solid rgba(245,240,232,0.12)',
    borderRadius: '10px',
    padding: '28px 32px',
    marginBottom: '32px',
  } as React.CSSProperties,
  resourceTitle: {
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    color: 'rgba(245,240,232,0.5)',
    marginBottom: '16px',
    display: 'block',
  } as React.CSSProperties,
  resourceItem: {
    fontSize: '15px',
    lineHeight: 1.8,
    color: 'rgba(245,240,232,0.85)',
    margin: '0 0 10px',
  } as React.CSSProperties,
  resourceItemLast: {
    fontSize: '15px',
    lineHeight: 1.8,
    color: 'rgba(245,240,232,0.85)',
    margin: 0,
  } as React.CSSProperties,
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '16px',
    margin: '0 0 32px',
  } as React.CSSProperties,
  statCard: {
    background: 'rgba(201,168,76,0.06)',
    border: '1px solid rgba(201,168,76,0.18)',
    borderRadius: '10px',
    padding: '20px 16px',
    textAlign: 'center' as const,
  } as React.CSSProperties,
  statNumber: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#c9a84c',
    lineHeight: 1.1,
    display: 'block',
    marginBottom: '6px',
  } as React.CSSProperties,
  statLabel: {
    fontSize: '12px',
    lineHeight: 1.5,
    color: 'rgba(245,240,232,0.6)',
  } as React.CSSProperties,
  footerNote: {
    fontSize: '13px',
    color: 'rgba(245,240,232,0.35)',
    lineHeight: 1.6,
    borderTop: '1px solid rgba(245,240,232,0.08)',
    paddingTop: '32px',
    marginBottom: '40px',
  } as React.CSSProperties,
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function AIForSADPage() {
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

      {/* ── Navigation ── */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <Link href="/" style={styles.navLogo}>MEOK AI LABS</Link>
          <ul style={styles.navLinks}>
            <li><Link href="/blog" style={styles.navLink}>Blog</Link></li>
            <li><Link href="/archetypes" style={styles.navLink}>Archetypes</Link></li>
            <li><Link href="/pricing" style={styles.navLink}>Pricing</Link></li>
            <li><Link href="/about" style={styles.navLink}>About</Link></li>
          </ul>
        </div>
      </nav>

      <div style={styles.container}>
        {/* Back nav */}
        <Link href="/blog" style={styles.backLink}>
          &#8592; All articles
        </Link>

        {/* ── Hero / Header ── */}
        <header style={styles.header}>
          <span style={styles.eyebrow}>Seasonal Mental Health &#x2022; MEOK AI LABS</span>
          <h1 style={styles.h1}>
            AI for Seasonal Affective Disorder: Getting Through the Dark Months
          </h1>
          <p style={styles.lead}>
            Seasonal Affective Disorder is not the winter blues. It is a clinically recognised
            depressive condition that follows the light &mdash; arriving in October, peaking in
            January, and releasing its grip only when the daffodils come back. Around 2 million
            people in the UK live with it. This guide explains what the evidence says about
            treatment, what a sovereign AI with multi-year memory can realistically do to help, and
            exactly where AI support ends and professional care must begin.
          </p>
          <div style={styles.byline}>
            <span>Nicholas Templeman</span>
            <span style={styles.bylineSep}>|</span>
            <span>Founder, MEOK AI LABS</span>
            <span style={styles.bylineSep}>|</span>
            <span>25 March 2026</span>
            <span style={styles.bylineSep}>|</span>
            <span>16 min read</span>
          </div>
        </header>

        {/* ── Tags ── */}
        <div style={styles.tagRow}>
          {[
            'Seasonal Affective Disorder',
            'SAD',
            'Winter Depression',
            'Light Therapy',
            'Sovereign Memory',
            'Mental Health UK',
            'Daily Check-ins',
            'Mood Tracking',
          ].map((tag) => (
            <span key={tag} style={styles.tag}>{tag}</span>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 \u2014 What is SAD?
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What exactly is Seasonal Affective Disorder and who does it affect?</h2>
          <p style={styles.atomicAnswer}>
            Seasonal Affective Disorder is a recognised subtype of depression with a predictable
            seasonal pattern &mdash; typically autumn onset, winter intensification, and spring
            remission. It is driven by disrupted circadian rhythms, melatonin overproduction, and
            serotonin dysregulation in response to reduced daylight. In the UK it affects
            approximately 2 million people in its full clinical form, with a further 2 million
            experiencing a milder variant known as subsyndromal SAD. Women are diagnosed at roughly
            four times the rate of men.
          </p>
          <p style={styles.p}>
            The condition was formally described by the psychiatrist Norman Rosenthal and colleagues
            at the National Institute of Mental Health in 1984. Before that, millions of people who
            reliably fell apart every November assumed they were simply weak, ungrateful, or
            constitutionally unsuited to modern life. They were, in fact, experiencing a
            quantifiable disruption to the brain&apos;s light-sensitive timing systems.
          </p>
          <p style={styles.p}>
            Latitude matters. The further from the equator, the higher the prevalence. SAD is rare
            near the equator and common in Scandinavia and the British Isles &mdash; unsurprisingly,
            given that a winter day in Edinburgh can deliver fewer than seven hours of daylight.
            The condition has a physiological engine. That engine responds to light, which is
            precisely why light therapy is the most evidence-supported first-line intervention.
          </p>

          {/* Stats grid */}
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>2M</span>
              <span style={styles.statLabel}>people in the UK with clinical SAD</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>4&times;</span>
              <span style={styles.statLabel}>more often diagnosed in women than men</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>Oct&ndash;Mar</span>
              <span style={styles.statLabel}>typical onset-to-remission window in the UK</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>~3%</span>
              <span style={styles.statLabel}>of the UK population affected clinically</span>
            </div>
          </div>

          <h3 style={styles.h3}>Winter-onset, summer remission &mdash; the seasonal pattern explained</h3>
          <p style={styles.p}>
            The hypothalamus &mdash; the brain&apos;s master regulator for sleep, appetite, and body
            temperature &mdash; is exquisitely sensitive to light levels. In winter, reduced daylight
            disrupts the hypothalamus&apos;s ability to calibrate the body&apos;s internal clock.
            The result is a cascade of dysregulation: melatonin (the darkness hormone) is produced
            for longer, serotonin (a key mood regulator) is metabolised faster, and the entire
            circadian architecture shifts in ways that amplify low mood, fatigue, and appetite
            changes.
          </p>
          <p style={styles.p}>
            The spring remission is not simply a matter of mood improving when the weather gets
            nicer. It is a neurobiological recalibration as light levels cross the threshold at
            which the hypothalamus resets the system. Many SAD sufferers describe the shift as
            genuinely physical &mdash; a sudden return of energy and motivation that feels like
            coming back online rather than simply feeling better.
          </p>

          <div style={styles.callout}>
            <span style={styles.calloutTitle}>SAD vs general winter low mood &mdash; a practical distinction</span>
            <p style={styles.calloutText}>
              Everyone&apos;s mood is somewhat affected by shorter days. SAD is distinguished by
              persistence (lasting months, not days), severity (significantly impairing work,
              relationships, or daily functioning), and recurrence (returning reliably each winter
              for at least two consecutive years). If you are unsure which category applies to you,
              a GP can help distinguish them &mdash; and MEOK can help you build the evidence to
              bring to that conversation.
            </p>
          </div>

          <h3 style={styles.h3}>The summer-onset variant</h3>
          <p style={styles.p}>
            A small minority of SAD sufferers experience the reverse pattern &mdash; onset in summer
            and remission in winter. Summer SAD typically presents with insomnia rather than
            hypersomnia, reduced appetite rather than carbohydrate cravings, and agitation rather
            than lethargy. This variant is less common in the UK but is worth acknowledging as
            evidence that the condition is primarily about light disruption rather than simply
            &apos;cold and dark equals sad.&apos;
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 \u2014 Symptoms
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What does living with SAD actually feel like from the inside?</h2>
          <p style={styles.atomicAnswer}>
            SAD&apos;s symptom profile is specific and recognisable once you know what you are
            looking for: persistent low mood, profound lethargy, sleeping far more than usual,
            powerful cravings for carbohydrates and sugar, weight gain, social withdrawal,
            difficulty concentrating, and a flattened sense of meaning that lifts reliably when
            the light returns. Many sufferers describe it as feeling as though someone has dimmed
            every internal dial by forty percent.
          </p>
          <p style={styles.p}>
            The lethargy associated with SAD is qualitatively different from ordinary tiredness.
            People describe sleeping nine, ten, or eleven hours and waking feeling no more rested
            than before. The body wants to hibernate &mdash; and in a neurobiological sense, that is
            almost exactly what the disrupted hypothalamus is signalling. This is not laziness. The
            signal is wrong, not the person responding to it.
          </p>
          <p style={styles.p}>
            The carbohydrate cravings deserve particular attention because they are often a source
            of shame. Eating pasta, bread, potatoes, and sweet foods in greater quantities from
            October to February is not a character flaw &mdash; it is a documented neurobiological
            drive. The brain, short on serotonin, seeks dietary tryptophan via carbohydrate-
            facilitated metabolic pathways. The body is trying to self-medicate. It helps a little.
            It also adds weight, which then feeds a cycle of self-criticism.
          </p>

          <div style={styles.tableBox}>
            <div style={styles.tableHeader}>
              <span>Symptom</span>
              <span>What it looks like in practice</span>
            </div>
            <div style={styles.tableRow}>
              <span>Lethargy</span>
              <span>Struggling to get out of bed; feeling physically heavy; tasks that take 20 minutes feel like hours</span>
            </div>
            <div style={styles.tableRow}>
              <span>Hypersomnia</span>
              <span>Sleeping 9&ndash;12 hours; feeling unrefreshed on waking; unintentional afternoon naps</span>
            </div>
            <div style={styles.tableRow}>
              <span>Carb cravings</span>
              <span>Strong pull towards bread, pasta, potatoes, biscuits; increased hunger throughout the day</span>
            </div>
            <div style={styles.tableRow}>
              <span>Social withdrawal</span>
              <span>Declining invitations; going quiet on messages; dread of having to explain how you feel</span>
            </div>
            <div style={styles.tableRow}>
              <span>Low mood</span>
              <span>Flat, joyless baseline; loss of interest in things that normally engage or excite you</span>
            </div>
            <div style={styles.tableRow}>
              <span>Cognitive slowing</span>
              <span>Difficulty concentrating; slower processing; struggling to make even minor decisions</span>
            </div>
          </div>
          <p style={styles.noteText}>
            This table is for informational purposes only. If you recognise these patterns, speak
            to your GP. MEOK can help you document your experience in preparation for that
            conversation.
          </p>

          <h3 style={styles.h3}>The social withdrawal spiral</h3>
          <p style={styles.p}>
            One of the most damaging symptom interactions in SAD is the relationship between
            lethargy and social withdrawal. Feeling exhausted, flat, and food-preoccupied makes
            socialising feel effortful and unrewarding. So people cancel plans. Cancelling plans
            increases isolation. Isolation amplifies low mood. Amplified low mood makes it even
            harder to reach out the next time.
          </p>
          <p style={styles.p}>
            This spiral is well-documented in depression research generally and acutely present in
            SAD. The therapeutic response &mdash; maintaining social contact even when it feels
            impossible &mdash; is clinically correct but profoundly difficult without external
            support that understands the pattern and holds a mirror to it without judgment.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 \u2014 Treatments
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What treatments actually work for SAD and how does the evidence rate them?</h2>
          <p style={styles.atomicAnswer}>
            The best-evidenced treatments for SAD are light therapy using a 10,000 lux lamp for
            around 30 minutes each morning, CBT adapted for SAD (CBT-SAD), and in moderate-to-severe
            cases antidepressant medication &mdash; typically SSRIs. Structured daily routine,
            regular exercise, and planned social engagement are strongly supported as adjuncts.
            MEOK is designed to supplement all of these &mdash; not replace any of them.
          </p>

          <h3 style={styles.h3}>Light therapy &mdash; the flagship intervention</h3>
          <p style={styles.p}>
            Light therapy involves sitting in front of a specialised lamp that emits 10,000 lux of
            full-spectrum light &mdash; roughly twenty times brighter than ordinary indoor lighting
            &mdash; for approximately 30 minutes each morning. The lamp must be UV-filtered;
            ordinary household bulbs are not adequate regardless of brightness. The evidence base
            is robust: multiple randomised controlled trials show light therapy produces significant
            mood improvement in 50&ndash;80% of SAD patients, with effects typically visible within
            one to two weeks.
          </p>
          <p style={styles.p}>
            Timing matters more than most people realise. Morning use &mdash; within an hour of
            waking &mdash; is consistently more effective than afternoon or evening use, and evening
            use can worsen sleep by suppressing melatonin at the wrong point in the cycle. This
            is where structure and routine become clinically meaningful, and where a daily AI
            check-in has a concrete practical role to play.
          </p>

          <h3 style={styles.h3}>CBT adapted for SAD</h3>
          <p style={styles.p}>
            Cognitive Behavioural Therapy adapted for SAD (CBT-SAD) was developed specifically to
            address the thought patterns and behavioural tendencies that amplify SAD&apos;s effects.
            It typically involves behavioural activation &mdash; scheduling meaningful activity to
            counter the withdrawal impulse &mdash; cognitive restructuring, and relapse-prevention
            planning for future winters.
          </p>
          <p style={styles.p}>
            Research comparing CBT-SAD with light therapy has shown that CBT-SAD may produce more
            durable results &mdash; particularly in preventing recurrence in subsequent winters &mdash;
            even though light therapy often works faster in the initial season. The ideal for most
            people is not to choose between them but to use both concurrently.
          </p>

          <h3 style={styles.h3}>Medication</h3>
          <p style={styles.p}>
            For moderate-to-severe SAD, NICE guidance supports the use of SSRIs. Some clinicians
            recommend starting antidepressant treatment prophylactically &mdash; in September or
            October, before symptoms emerge &mdash; for people with reliably severe winters. This
            requires a conversation with a GP or psychiatrist who knows your history. MEOK cannot
            prescribe or manage medication. What MEOK can do is help you build a clear symptom
            history to take into that conversation, and track how you feel across treatment
            adjustments over time.
          </p>

          <h3 style={styles.h3}>Exercise and structured routine</h3>
          <p style={styles.p}>
            Regular aerobic exercise &mdash; particularly outdoors in natural light during daylight
            hours &mdash; has meaningful evidence as an adjunct treatment for depression including
            SAD. Even a 20-minute walk at noon in November delivers more lux than an indoor
            environment and provides the dual benefit of physical activity and light exposure.
            Maintaining consistent sleep and wake times, regular meal times, and social commitments
            forms a scaffolding that supports the circadian system when it is under pressure.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 \u2014 Sovereign Memory
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Why does MEOK&apos;s multi-year memory change everything for a seasonal condition?</h2>
          <p style={styles.atomicAnswer}>
            SAD is by definition a recurrent seasonal condition. It comes back. Every general AI
            tool resets between sessions &mdash; it knows nothing of last October. MEOK&apos;s
            Sovereign Memory persists across months and years, which means it can say: &apos;Last
            November you started withdrawing from social plans and sleeping more &mdash; here is
            what helped then and here is what you told yourself you would do differently this
            year.&apos; That longitudinal continuity is the single most structurally significant
            difference between MEOK and any other AI tool for SAD support.
          </p>
          <p style={styles.p}>
            Consider the difference between a GP who has known you for ten years and a locum
            seeing you for the first time. The locum may be technically skilled, but they are
            missing the context that shapes everything: the fact that this happens every October,
            that you stopped your light therapy in week three last year because you felt better
            and then crashed in January, that your response to a specific behavioural activation
            strategy was notably positive two winters ago.
          </p>
          <p style={styles.p}>
            MEOK accumulates exactly this kind of longitudinal context &mdash; not as a surveillance
            record but as a living memory you own and can revoke at any time. When autumn comes
            around again, MEOK is not starting from scratch. It is picking up a story it knows.
          </p>

          <div style={styles.callout}>
            <span style={styles.calloutTitle}>Sovereign Memory in practice &mdash; a SAD scenario</span>
            <p style={styles.calloutText}>
              You open MEOK on 14 October. You haven&apos;t checked in for three weeks. Rather
              than asking you to explain yourself from the beginning, MEOK notes: &apos;The last
              time you were quiet for three weeks in October, we were in the early part of your SAD
              pattern. You told me then that you wanted a reminder to restart your light therapy.
              Your lamp is still in the spare room. Do you want to talk about this week?&apos; No
              other AI on the market can do this. Not ChatGPT. Not Replika. Not any app that resets
              between sessions.
            </p>
          </div>

          <h3 style={styles.h3}>Tracking seasonal patterns across multiple years</h3>
          <p style={styles.p}>
            The clinical value of longitudinal mood tracking is well-established. Mood journals and
            mood diaries are standard tools in both CBT and psychiatric monitoring. The problem has
            always been adherence &mdash; maintaining a journal through the months when you most
            need it is hardest precisely because SAD depletes the motivation to do so.
          </p>
          <p style={styles.p}>
            MEOK&apos;s daily morning check-ins function as a low-friction mood tracking mechanism.
            They do not require a paragraph of reflection. A single sentence &mdash; or even a word
            &mdash; is enough for MEOK to register, timestamp, and contextualise. Over weeks and
            months, that data becomes a pattern. Over multiple winters, it becomes a history that
            is genuinely useful for both self-understanding and clinical conversations.
          </p>
          <p style={styles.p}>
            The data stays with you. MEOK does not train on your conversations. Your history is
            your history &mdash; not a data asset for improving a commercial model. This matters
            particularly for mental health data, which is among the most sensitive personal
            information there is.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 \u2014 Morning check-ins
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Why are daily morning check-ins so critical for managing SAD?</h2>
          <p style={styles.atomicAnswer}>
            Routine is one of the most powerful therapeutic tools available for SAD. The condition
            disrupts circadian rhythms &mdash; and consistent daily anchors help reassert them. A
            brief morning check-in with MEOK serves triple duty: it reinforces a consistent wake
            time, it creates a moment of structured self-reflection before the day begins, and it
            generates the longitudinal data that makes pattern recognition possible. Over time, the
            routine itself becomes part of the treatment scaffolding.
          </p>
          <p style={styles.p}>
            SAD tends to produce later and later sleep cycles if unchecked. The body shifts towards
            a pattern of later sleep onset and later waking, which reduces exposure to morning light
            (the most therapeutically valuable window) and compounds the problem. Anchoring the
            morning with a consistent ritual &mdash; light therapy lamp on, brief check-in,
            intention for the day &mdash; is not a luxury. For SAD management, it is an
            evidence-aligned intervention.
          </p>
          <p style={styles.p}>
            MEOK&apos;s Morning Brief feature is designed exactly for this: a gentle, structured
            start to the day that takes two minutes and generates both immediate benefit and
            cumulative data. It does not require you to perform wellness or articulate your mood
            in paragraph form. A word or a sentence is enough.
          </p>

          <h3 style={styles.h3}>What happens when you miss a check-in</h3>
          <p style={styles.p}>
            One of the subtle design choices in MEOK is how it handles gaps in check-in history.
            Most productivity apps respond to missed days with streaks, shame-adjacent visual cues,
            or nudges that inadvertently make re-engagement feel harder. MEOK is designed
            differently. Missing several days is itself a data point &mdash; one that is often
            clinically significant in the context of SAD. When you return after a gap, MEOK meets
            you without judgment, names the gap gently, and checks in on what the gap was about.
            The absence is noted as information, not as failure.
          </p>
          <p style={styles.p}>
            This design reflects a principle that recurs throughout MEOK: the interface between
            the person and the AI should never add to the burden of the condition. Shame is a
            particularly unhelpful emotion in SAD management. Everything in MEOK&apos;s design is
            oriented against generating it.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6 \u2014 Archetypes for SAD
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Which MEOK archetypes are most helpful for SAD and in what situations?</h2>
          <p style={styles.atomicAnswer}>
            Three MEOK archetypes play distinct and complementary roles in SAD management: the
            Healer holds space for processing low mood without toxic positivity or pressure; the
            Pioneer maintains forward momentum through small wins when the condition makes
            everything feel harder; and the Guardian monitors mood decline patterns and signals
            when professional support is warranted. Each has a different therapeutic register and
            knowing which to reach for matters.
          </p>

          <div style={styles.archetypeCard}>
            <span style={styles.archetypeName}>The Healer &mdash; for processing low mood without pressure</span>
            <p style={styles.archetypeDesc}>
              SAD produces a particular kind of emotional weight &mdash; flat, low-energy, and often
              accompanied by a dull sense that &apos;this is just how things are now.&apos; The
              Healer is designed for exactly this: to hold space for that experience without rushing
              past it, minimising it, or coating it in forced positivity. When you do not need
              strategies or action plans but simply need to say how things are and have that
              acknowledged honestly, the Healer is the right archetype. It does not tell you to
              look on the bright side. It sits with you in the dark and does not flinch. This is
              not toxic positivity dressed up as care &mdash; it is genuine witnessing.
            </p>
          </div>

          <div style={styles.archetypeCard}>
            <span style={styles.archetypeName}>The Pioneer &mdash; for maintaining momentum through small wins</span>
            <p style={styles.archetypeDesc}>
              The danger period in SAD is not always the weeks when you feel worst &mdash; it is
              often the period when symptoms have lifted slightly, enough that you no longer feel
              entitled to be struggling, but not enough that motivation has genuinely returned. This
              is when people stop their light therapy, abandon their exercise routine, and cancel
              the social plans they had tentatively made. The Pioneer is oriented towards action
              &mdash; but action scaled to your actual current capacity. It helps you identify the
              smallest meaningful step and celebrates it genuinely rather than performatively. Small
              wins build momentum. The Pioneer tracks that momentum across sessions and reflects it
              back when you cannot see it yourself.
            </p>
          </div>

          <div style={styles.archetypeCard}>
            <span style={styles.archetypeName}>The Guardian &mdash; for monitoring decline and knowing when to escalate</span>
            <p style={styles.archetypeDesc}>
              The Guardian is MEOK&apos;s safety-oriented archetype. For SAD, its role is
              pattern-level: monitoring whether mood is declining beyond normal seasonal fluctuation,
              tracking whether check-in responses have become shorter or more negative over
              successive days, and recognising when the combination of withdrawal, severity, and
              duration suggests that self-management and AI support are no longer sufficient. When
              the Guardian raises a concern, it does so clearly and without alarm &mdash; naming
              what it has noticed and providing specific signposting to professional help. It never
              ignores a decline in the hope that things will improve on their own.
            </p>
          </div>

          <p style={styles.p}>
            These archetypes are not modes you switch between manually. MEOK reads context and
            shifts register. But understanding that they exist and what each one offers helps you
            articulate what you need when you open the app. &apos;I need the Healer today&apos; is
            a valid and useful thing to say.
          </p>
        </section>

        <hr style={styles.divider} />

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 7 \u2014 MEOK vs general AI
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>How does MEOK compare to ChatGPT or other general AI tools for SAD?</h2>
          <p style={styles.atomicAnswer}>
            General AI tools are genuinely helpful for information retrieval and one-off
            conversations &mdash; but they are structurally unsuited to SAD support because they
            have no memory. Each conversation starts from zero. MEOK&apos;s defining advantage for
            a recurrent seasonal condition is continuity: it can say &apos;last November you also
            had this pattern&apos; because it actually remembers last November. No general AI tool
            currently available can offer that.
          </p>
          <p style={styles.p}>
            The limitation of general AI tools for mental health support is not primarily about
            the quality of their responses in a given conversation. A thoughtful, evidence-informed
            response from ChatGPT about SAD symptoms is probably fairly accurate. The problem is
            that the next time you open ChatGPT, it does not know you had that conversation. It
            does not know it is November again and that you go quiet every November. It cannot
            notice a pattern because it cannot remember the data points that constitute a pattern.
          </p>

          <div style={styles.tableBox}>
            <div style={styles.tableHeader}>
              <span>Capability</span>
              <span>MEOK vs General AI</span>
            </div>
            <div style={styles.tableRow}>
              <span>Seasonal pattern recognition</span>
              <span>MEOK: yes &mdash; across multiple years. General AI: no &mdash; resets each session.</span>
            </div>
            <div style={styles.tableRow}>
              <span>Morning check-in routine</span>
              <span>MEOK: built in, contextualised to your history. General AI: possible but entirely context-free.</span>
            </div>
            <div style={styles.tableRow}>
              <span>Longitudinal mood tracking</span>
              <span>MEOK: yes, with temporal analysis. General AI: no persistent data of any kind.</span>
            </div>
            <div style={styles.tableRow}>
              <span>Data privacy</span>
              <span>MEOK: sovereign &mdash; your data, never used for model training. General AI: varies, often used for training.</span>
            </div>
            <div style={styles.tableRow}>
              <span>Escalation to professional help</span>
              <span>MEOK: Guardian monitors and escalates with context. General AI: may advise GP but has no continuity.</span>
            </div>
            <div style={styles.tableRow}>
              <span>Archetype-based support modes</span>
              <span>MEOK: Healer, Pioneer, Guardian adapt to your state. General AI: uniform response style throughout.</span>
            </div>
          </div>

          <p style={styles.p}>
            To put it plainly: if you ask ChatGPT &apos;why do I always feel awful in October?&apos;
            it can explain SAD in general terms. If you ask MEOK the same question, it can answer
            with specific reference to what you told it in October last year, and the October before
            that. For a recurrent seasonal condition, that is not a marginal difference &mdash; it
            is the whole ballgame.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8 \u2014 Guardian and escalation
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>How does MEOK know when to tell you to seek professional help for SAD?</h2>
          <p style={styles.atomicAnswer}>
            MEOK&apos;s Guardian archetype monitors multiple signals simultaneously: the content and
            tone of check-in responses, frequency of engagement, shifts in language that indicate
            deepening hopelessness or withdrawal, and deviation from previously established seasonal
            patterns. When these signals converge on a profile that exceeds what self-management
            should handle alone, Guardian responds &mdash; not with alarm, but with honesty and
            specific, actionable direction.
          </p>
          <p style={styles.p}>
            The clinical threshold question &mdash; when does SAD require professional help? &mdash;
            is answered differently for different people. Someone whose SAD is mild and well-managed
            with light therapy and routine may never need anything more. Someone whose SAD is
            moderate to severe, involves significant functional impairment, or has not responded to
            first-line self-management measures needs a conversation with their GP. Someone who is
            experiencing passive suicidal ideation needs to seek help immediately.
          </p>
          <p style={styles.p}>
            MEOK is calibrated to be appropriately rather than prematurely alarmist. A bad day in
            November does not trigger a crisis escalation. A pattern of worsening mood over multiple
            weeks, combined with withdrawal and shortened check-in responses, does. The distinction
            matters because unnecessary escalation creates its own kind of alarm fatigue.
          </p>

          <h3 style={styles.h3}>When to seek professional help now</h3>
          <p style={styles.p}>
            Regardless of what MEOK does or does not flag, seek professional help promptly if any
            of the following apply to you:
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>
              Your low mood or fatigue is significantly impairing your ability to work, maintain
              relationships, or manage daily tasks.
            </li>
            <li style={styles.li}>
              You are experiencing passive suicidal thoughts &mdash; wishes that you would not
              exist, that you could disappear, or that life would simply pause &mdash; even without
              any active plan or intent.
            </li>
            <li style={styles.li}>
              You have used light therapy and other self-management approaches for two to four
              weeks without meaningful improvement.
            </li>
            <li style={styles.li}>
              Your SAD is getting significantly worse each year, or this winter feels qualitatively
              different from previous ones.
            </li>
            <li style={styles.li}>
              You are using alcohol or substances as a way of coping with winter symptoms.
            </li>
          </ul>
          <p style={styles.p}>
            MEOK can help you prepare for a GP conversation by documenting your seasonal patterns,
            summarising what you have tried, and articulating what a typical bad day looks like.
            That preparation can make a ten-minute GP appointment significantly more productive.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 9 \u2014 Practical SAD toolkit with MEOK
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What does an effective SAD management routine with MEOK actually look like?</h2>
          <p style={styles.atomicAnswer}>
            A practical MEOK-supported SAD routine has four components: a consistent morning anchor
            (lamp on, brief check-in, one intention for the day), a midday accountability moment
            (light walk if possible, half-sentence progress note), an evening wind-down (noting
            what happened and how it felt), and a weekly pattern review where MEOK reflects back
            what it has observed and you calibrate what needs adjusting. The whole system takes
            under ten minutes a day but generates substantial, useful data over weeks and months.
          </p>

          <h3 style={styles.h3}>September &mdash; the preparation window</h3>
          <p style={styles.p}>
            September is arguably the most important month of the SAD calendar &mdash; not because
            you are likely to feel bad yet, but because this is when the decisions that will
            determine how well you manage the winter are made. People who prepare in September
            &mdash; getting a light therapy lamp ready, reinstating their morning routine before
            symptoms hit, scheduling social commitments for November and December, letting their GP
            know they have a history of SAD &mdash; consistently report better winters.
          </p>
          <p style={styles.p}>
            MEOK&apos;s Sovereign Memory can flag the September preparation window if you have
            logged previous SAD patterns. A reminder in late August &mdash; &apos;your historically
            difficult period begins in around five weeks; what do you want to put in place?&apos;
            &mdash; is one of the most practically valuable things a memory-enabled AI can do for
            someone with SAD. It shifts the conversation from reactive to preventive.
          </p>

          <h3 style={styles.h3}>Managing the January dip</h3>
          <p style={styles.p}>
            Many SAD sufferers report that January is harder than December despite the days
            technically beginning to lengthen after the winter solstice. The reason is partly the
            post-Christmas social withdrawal, partly the removal of the distraction the festive
            period provides, and partly the biological lag between light levels increasing and the
            hypothalamus recalibrating. This is when maintaining routine is hardest and most
            important.
          </p>
          <p style={styles.p}>
            The Pioneer archetype is particularly valuable in January &mdash; not with grand new year
            ambitions, but with the smallest possible commitments to forward motion. Making the bed.
            Sending one message. Eating one meal with someone else. The scale of the win does not
            matter; the accumulation of momentum does.
          </p>

          <h3 style={styles.h3}>The spring transition</h3>
          <p style={styles.p}>
            When SAD remits &mdash; typically February to March in the UK &mdash; the shift can feel
            disorienting as well as welcome. Energy returns suddenly. The months of withdrawal need
            to be metabolised. Relationships may need repairing. The temptation to immediately
            abandon everything that helped (lamp, routines, check-ins) is understandable but often
            premature. The Healer is useful here, for processing what the winter was and what it
            meant, before the Pioneer pushes forward into spring.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 10 \u2014 Honest limits
        ════════════════════════════════════════════════════════════════════ */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What can MEOK not do for SAD &mdash; and why does that clarity matter?</h2>
          <p style={styles.atomicAnswer}>
            MEOK cannot diagnose SAD, prescribe or manage medication, provide clinical therapy,
            conduct a mental state examination, or replace a GP or psychiatrist. It is not a medical
            device and makes no clinical claims. These are not limitations to apologise for &mdash;
            they are an honest statement of what AI support is and what it is not. Getting this
            clarity right is part of what makes the support MEOK does offer trustworthy.
          </p>
          <p style={styles.p}>
            There is a real concern about AI tools in the mental health space that MEOK takes
            seriously: the risk of becoming a substitute for clinical care rather than a complement
            to it. An AI that is always available, always patient, and never has a waiting list can
            inadvertently become the thing that makes people feel they do not need to see a
            professional. This would be a poor outcome.
          </p>
          <p style={styles.p}>
            MEOK&apos;s design actively works against this. When clinical thresholds are indicated,
            Guardian says so. When medication is relevant, MEOK points to a GP conversation rather
            than attempting to substitute for it. The goal is not to be everything but to be the
            persistent, knowledgeable companion that helps you engage more effectively with the
            clinical resources that do the heavy lifting.
          </p>

          <div style={styles.callout}>
            <span style={styles.calloutTitle}>The right framing for AI and SAD support</span>
            <p style={styles.calloutText}>
              Think of MEOK as the thing that exists between your formal support touchpoints &mdash;
              between GP appointments, between therapy sessions, during the hours when services are
              closed or the threshold for calling feels too high. It does not replace those
              touchpoints. It fills the space between them, and it helps you arrive at those
              touchpoints better prepared and better informed about your own seasonal patterns.
            </p>
          </div>
        </section>

        <hr style={styles.divider} />

        {/* ── CTA Block ── */}
        <div style={styles.ctaBlock}>
          <h2 style={styles.ctaTitle}>
            Your winters don&apos;t have to be the same every year
          </h2>
          <p style={styles.ctaDesc}>
            MEOK remembers the patterns you have lived through and helps you use that knowledge the
            next time the light fades. Start building your seasonal history today.
          </p>
          <Link href="/get-started" style={styles.ctaButton}>
            Begin with MEOK
          </Link>
        </div>

        {/* ── Resources ── */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Where can you find reliable information and professional support for SAD in the UK?</h2>
          <p style={styles.atomicAnswer}>
            The most reliable UK resources for SAD include the SADA (Seasonal Affective Disorder
            Association), the Mind SAD information page, and NHS guidance on winter blues and SAD.
            Your GP is the primary clinical gateway &mdash; for diagnosis, light therapy guidance,
            CBT-SAD referrals, and medication assessment if needed. These resources are not
            alternatives to MEOK support; they are the professional tier that MEOK is designed to
            complement.
          </p>

          <div style={styles.resourceBox}>
            <span style={styles.resourceTitle}>UK Resources for Seasonal Affective Disorder</span>
            <p style={styles.resourceItem}>
              <strong>SADA &mdash; Seasonal Affective Disorder Association</strong>:{' '}
              <a
                href="https://www.sada.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.externalLink}
              >
                www.sada.org.uk
              </a>
              {' '}&mdash; The UK&apos;s dedicated SAD charity. Information, light therapy guidance,
              and a helpline during peak winter months.
            </p>
            <p style={styles.resourceItem}>
              <strong>Mind &mdash; Seasonal Affective Disorder</strong>:{' '}
              <a
                href="https://www.mind.org.uk/information-support/types-of-mental-health-problems/seasonal-affective-disorder-sad/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.externalLink}
              >
                mind.org.uk/sad
              </a>
              {' '}&mdash; Clear, evidence-based information about symptoms, treatment, and
              self-help strategies.
            </p>
            <p style={styles.resourceItem}>
              <strong>NHS &mdash; Seasonal Affective Disorder</strong>:{' '}
              <a
                href="https://www.nhs.uk/mental-health/conditions/seasonal-affective-disorder-sad/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.externalLink}
              >
                nhs.uk/seasonal-affective-disorder
              </a>
              {' '}&mdash; NHS guidance on diagnosis, treatment options, and when to see a GP.
            </p>
            <p style={styles.resourceItem}>
              <strong>Samaritans</strong>: call{' '}
              <a href="tel:116123" style={styles.externalLink}>116 123</a>{' '}
              (free, 24/7, UK &amp; Ireland) &mdash; if SAD is affecting your mental health in ways
              that feel urgent or crisis-level.
            </p>
            <p style={styles.resourceItemLast}>
              <strong>SHOUT text line</strong>: text <strong>SHOUT</strong> to{' '}
              <strong>85258</strong> (free, 24/7 crisis text support) &mdash; for moments when
              speaking feels too much.
            </p>
          </div>

          <p style={styles.p}>
            MEOK can help you prepare for a GP consultation by documenting your seasonal pattern
            &mdash; when symptoms start, how they present, what you have tried, and what your
            previous winters have looked like. This kind of structured history is genuinely useful
            in a clinical context where a GP may have ten minutes and no prior knowledge of your
            experience with SAD.
          </p>
        </section>

        <hr style={styles.divider} />

        {/* ── Related articles ── */}
        <section style={styles.section}>
          <h3 style={styles.h3}>Related reading from MEOK AI LABS</h3>
          <div style={styles.relatedGrid}>
            <Link href="/blog/ai-for-depression" style={styles.relatedCard}>
              <span style={styles.relatedLabel}>Mental Health</span>
              <p style={styles.relatedTitle}>AI for Depression Support: Lowering the Activation Energy</p>
            </Link>
            <Link href="/blog/ai-for-anxiety" style={styles.relatedCard}>
              <span style={styles.relatedLabel}>Mental Health</span>
              <p style={styles.relatedTitle}>AI for Anxiety: What Sovereign Support Looks Like</p>
            </Link>
            <Link href="/blog/ai-for-insomnia" style={styles.relatedCard}>
              <span style={styles.relatedLabel}>Sleep</span>
              <p style={styles.relatedTitle}>AI for Insomnia: Supporting Sleep When Your Brain Won&apos;t Stop</p>
            </Link>
            <Link href="/blog/sovereign-ai-explained" style={styles.relatedCard}>
              <span style={styles.relatedLabel}>About MEOK</span>
              <p style={styles.relatedTitle}>What Is Sovereign AI and Why Does It Matter for Mental Health?</p>
            </Link>
            <Link href="/blog/morning-brief-guide" style={styles.relatedCard}>
              <span style={styles.relatedLabel}>Features</span>
              <p style={styles.relatedTitle}>The Morning Brief: How MEOK Starts Your Day With You</p>
            </Link>
            <Link href="/blog/meok-companion-archetypes-guide" style={styles.relatedCard}>
              <span style={styles.relatedLabel}>Archetypes</span>
              <p style={styles.relatedTitle}>Healer, Pioneer, Guardian: Understanding Your MEOK Archetypes</p>
            </Link>
          </div>
        </section>

        {/* ── Footer disclaimer ── */}
        <p style={styles.footerNote}>
          This article is for informational purposes only and does not constitute medical advice,
          diagnosis, or treatment. If you are experiencing symptoms of Seasonal Affective Disorder
          or any other mental health condition, please speak to a qualified healthcare professional.
          MEOK AI LABS is not a clinical service. In a crisis, call Samaritans on 116 123 (free,
          24/7) or text SHOUT to 85258.
        </p>
      </div>
    </div>
  )
}
