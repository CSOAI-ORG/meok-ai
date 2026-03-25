import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Depression: How MEOK Supports People Through the Dark Times | MEOK AI LABS',
  description:
    'Depression affects 3.3 million UK adults and is the leading cause of disability worldwide. An honest guide to how MEOK\u2019s Healer archetype provides consistent, non-judgemental presence, Behavioural Activation support, and pattern tracking \u2014 without replacing antidepressants or therapy.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-depression' },
  openGraph: {
    title: 'AI for Depression: How MEOK Supports People Through the Dark Times',
    description:
      'Depression affects 3.3 million UK adults. An honest guide to what AI can and cannot do \u2014 consistent presence, Behavioural Activation, pattern tracking, and the Healer archetype\u2019s patient witnessing without toxic positivity.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-depression',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Depression%3A+How+MEOK+Supports+People+Through+the+Dark+Times&desc=Consistent+presence%2C+Behavioural+Activation%2C+pattern+tracking',
        width: 1200,
        height: 630,
        alt: 'AI for Depression: How MEOK Supports People Through the Dark Times | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Depression: How MEOK Supports People Through the Dark Times',
    description:
      'An honest guide to consistent presence, Behavioural Activation, pattern tracking, and the Healer archetype\u2019s patient witnessing. Includes UK crisis resources. From MEOK AI LABS.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Depression%3A+How+MEOK+Supports+People+Through+the+Dark+Times&desc=Consistent+presence%2C+Behavioural+Activation%2C+pattern+tracking',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Depression: How MEOK Supports People Through the Dark Times',
  description:
    'Depression affects 3.3 million UK adults. An honest guide to how MEOK\u2019s Healer archetype, Behavioural Activation nudges, Sovereign Memory pattern tracking, and Guardian crisis routing support people with depression \u2014 without replacing antidepressants or therapy.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
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
        text: 'AI companions can provide supplementary support for depression by offering consistent, non-judgemental presence, gentle Behavioural Activation nudges, and mood pattern tracking across sessions. They are not a replacement for antidepressants, psychotherapy, or psychiatric assessment. Anyone experiencing persistent low mood, loss of interest, or suicidal thoughts should consult a GP or mental health professional.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Behavioural Activation and how does MEOK use it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Behavioural Activation (BA) is an evidence-based therapy approach that helps people with depression gradually re-engage with activities that were previously meaningful or pleasurable, counteracting the withdrawal spiral. MEOK applies BA principles gently \u2014 suggesting one small, concrete action rather than overwhelming to-do lists \u2014 and tracks which activities correlate with slightly better mood in subsequent sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does MEOK do if someone expresses suicidal thoughts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\u2019s Guardian archetype monitors for crisis language and immediately routes to verified crisis resources: Samaritans (116 123, free 24/7), NHS 111 (option 2 for mental health), and PAPYRUS HopelineUK (0800 068 4141) for under-35s. MEOK never attempts to manage active suicidal ideation alone and always encourages human professional contact. In immediate danger, call 999.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is MEOK different from Woebot or other mental health chatbots for depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woebot uses scripted CBT modules with no persistent memory, so every session starts fresh. MEOK uses Sovereign Memory \u2014 a 4-layer encrypted store that tracks your mood patterns, language, and correlates across weeks and months. The Healer archetype provides patient witnessing that remembers what has helped before. MEOK also uses a 43-agent Byzantine Council to govern responses, preventing single points of failure in safety-critical decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to use an AI companion instead of seeing a therapist for depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No AI companion is a safe replacement for clinical therapy or psychiatric care in treating depression. MEOK is designed as a between-sessions companion and daily support layer, not as a primary treatment. Antidepressants, CBT, and other evidence-based treatments require qualified human professionals. MEOK\u2019s Maternal Covenant explicitly prohibits advising on medication changes or discouraging people from seeking clinical help.',
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: '#0d0c18',
    color: '#f5f0e8',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    minHeight: '100vh',
    lineHeight: '1.75',
  } as React.CSSProperties,

  container: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '0 24px 80px',
  } as React.CSSProperties,

  nav: {
    padding: '24px 0 0',
    marginBottom: '48px',
  } as React.CSSProperties,

  navLink: {
    color: '#c9a84c',
    textDecoration: 'none',
    fontSize: '14px',
    letterSpacing: '0.04em',
  } as React.CSSProperties,

  navSep: {
    color: '#2a2840',
    margin: '0 8px',
    fontSize: '14px',
  } as React.CSSProperties,

  navCurrent: {
    color: '#a09880',
    fontSize: '14px',
  } as React.CSSProperties,

  hero: {
    marginBottom: '56px',
    paddingBottom: '40px',
    borderBottom: '1px solid #2a2840',
  } as React.CSSProperties,

  eyebrow: {
    color: '#c9a84c',
    fontSize: '12px',
    fontWeight: '600' as const,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    marginBottom: '20px',
    display: 'block',
  } as React.CSSProperties,

  h1: {
    fontSize: 'clamp(28px, 5vw, 46px)',
    fontWeight: '700' as const,
    lineHeight: '1.15',
    color: '#f5f0e8',
    marginBottom: '24px',
    letterSpacing: '-0.02em',
  } as React.CSSProperties,

  heroSubtitle: {
    fontSize: '19px',
    color: '#a09880',
    lineHeight: '1.65',
    maxWidth: '680px',
    marginBottom: '28px',
  } as React.CSSProperties,

  metaRow: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap' as const,
    fontSize: '13px',
    color: '#a09880',
  } as React.CSSProperties,

  disclaimer: {
    background: '#13121f',
    border: '1px solid #c9a84c',
    borderLeft: '4px solid #c9a84c',
    borderRadius: '8px',
    padding: '20px 24px',
    marginBottom: '48px',
    fontSize: '15px',
    color: '#f5f0e8',
    lineHeight: '1.65',
  } as React.CSSProperties,

  disclaimerLabel: {
    color: '#c9a84c',
    fontWeight: '700' as const,
    fontSize: '12px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    display: 'block',
    marginBottom: '8px',
  } as React.CSSProperties,

  section: {
    marginBottom: '52px',
  } as React.CSSProperties,

  h2: {
    fontSize: 'clamp(20px, 3vw, 26px)',
    fontWeight: '700' as const,
    color: '#f5f0e8',
    marginBottom: '18px',
    letterSpacing: '-0.01em',
    lineHeight: '1.3',
  } as React.CSSProperties,

  h3: {
    fontSize: '17px',
    fontWeight: '600' as const,
    color: '#c9a84c',
    marginBottom: '12px',
    letterSpacing: '0.01em',
  } as React.CSSProperties,

  p: {
    fontSize: '16px',
    color: '#f5f0e8',
    marginBottom: '18px',
    lineHeight: '1.75',
  } as React.CSSProperties,

  pMuted: {
    fontSize: '15px',
    color: '#a09880',
    marginBottom: '16px',
    lineHeight: '1.7',
  } as React.CSSProperties,

  featureBox: {
    background: '#13121f',
    border: '1px solid #2a2840',
    borderRadius: '12px',
    padding: '28px 32px',
    marginBottom: '32px',
  } as React.CSSProperties,

  featureBoxGold: {
    background: '#13121f',
    border: '1px solid #c9a84c',
    borderRadius: '12px',
    padding: '28px 32px',
    marginBottom: '32px',
  } as React.CSSProperties,

  featureBoxGreen: {
    background: '#13121f',
    border: '1px solid #6aaa64',
    borderRadius: '12px',
    padding: '28px 32px',
    marginBottom: '32px',
  } as React.CSSProperties,

  featureTitle: {
    color: '#c9a84c',
    fontWeight: '700' as const,
    fontSize: '15px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    marginBottom: '14px',
    display: 'block',
  } as React.CSSProperties,

  featureTitleGreen: {
    color: '#6aaa64',
    fontWeight: '700' as const,
    fontSize: '15px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    marginBottom: '14px',
    display: 'block',
  } as React.CSSProperties,

  featureList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  } as React.CSSProperties,

  featureListItem: {
    fontSize: '15px',
    color: '#f5f0e8',
    paddingLeft: '22px',
    marginBottom: '10px',
    position: 'relative' as const,
    lineHeight: '1.6',
  } as React.CSSProperties,

  featureListItemMuted: {
    fontSize: '15px',
    color: '#a09880',
    paddingLeft: '22px',
    marginBottom: '10px',
    position: 'relative' as const,
    lineHeight: '1.6',
  } as React.CSSProperties,

  pullQuote: {
    borderLeft: '3px solid #c9a84c',
    paddingLeft: '28px',
    marginBottom: '40px',
    marginTop: '8px',
  } as React.CSSProperties,

  pullQuoteText: {
    fontSize: '20px',
    fontStyle: 'italic' as const,
    color: '#f5f0e8',
    lineHeight: '1.6',
    marginBottom: '10px',
  } as React.CSSProperties,

  pullQuoteAttrib: {
    fontSize: '13px',
    color: '#a09880',
    letterSpacing: '0.04em',
  } as React.CSSProperties,

  statRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '20px',
    marginBottom: '36px',
  } as React.CSSProperties,

  statCard: {
    background: '#13121f',
    border: '1px solid #2a2840',
    borderRadius: '10px',
    padding: '20px 18px',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  statNumber: {
    fontSize: '28px',
    fontWeight: '700' as const,
    color: '#c9a84c',
    display: 'block',
    marginBottom: '6px',
  } as React.CSSProperties,

  statLabel: {
    fontSize: '13px',
    color: '#a09880',
    lineHeight: '1.4',
  } as React.CSSProperties,

  crisisBox: {
    background: '#13121f',
    border: '2px solid #6aaa64',
    borderRadius: '12px',
    padding: '28px 32px',
    marginBottom: '48px',
  } as React.CSSProperties,

  crisisTitle: {
    color: '#6aaa64',
    fontWeight: '700' as const,
    fontSize: '16px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    marginBottom: '18px',
    display: 'block',
  } as React.CSSProperties,

  crisisItem: {
    fontSize: '15px',
    color: '#f5f0e8',
    marginBottom: '12px',
    lineHeight: '1.55',
    paddingLeft: '20px',
    position: 'relative' as const,
  } as React.CSSProperties,

  crisisLink: {
    color: '#6aaa64',
    textDecoration: 'none',
    fontWeight: '600' as const,
  } as React.CSSProperties,

  crisisNote: {
    fontSize: '13px',
    color: '#a09880',
    marginTop: '16px',
    lineHeight: '1.6',
  } as React.CSSProperties,

  divider: {
    border: 'none',
    borderTop: '1px solid #2a2840',
    marginBottom: '48px',
  } as React.CSSProperties,

  ctaBox: {
    background: '#13121f',
    border: '1px solid #c9a84c',
    borderRadius: '14px',
    padding: '40px 36px',
    textAlign: 'center' as const,
    marginBottom: '56px',
  } as React.CSSProperties,

  ctaHeading: {
    fontSize: '24px',
    fontWeight: '700' as const,
    color: '#f5f0e8',
    marginBottom: '14px',
    lineHeight: '1.3',
  } as React.CSSProperties,

  ctaBody: {
    fontSize: '16px',
    color: '#a09880',
    marginBottom: '28px',
    lineHeight: '1.65',
    maxWidth: '520px',
    margin: '0 auto 28px',
  } as React.CSSProperties,

  ctaButton: {
    display: 'inline-block',
    background: '#c9a84c',
    color: '#0d0c18',
    fontWeight: '700' as const,
    fontSize: '15px',
    padding: '14px 36px',
    borderRadius: '8px',
    textDecoration: 'none',
    letterSpacing: '0.03em',
  } as React.CSSProperties,

  ctaSub: {
    fontSize: '13px',
    color: '#a09880',
    marginTop: '16px',
  } as React.CSSProperties,

  faqSection: {
    marginBottom: '52px',
  } as React.CSSProperties,

  faqItem: {
    borderBottom: '1px solid #2a2840',
    paddingBottom: '28px',
    marginBottom: '28px',
  } as React.CSSProperties,

  faqQ: {
    fontSize: '17px',
    fontWeight: '600' as const,
    color: '#f5f0e8',
    marginBottom: '10px',
    lineHeight: '1.4',
  } as React.CSSProperties,

  faqA: {
    fontSize: '15px',
    color: '#a09880',
    lineHeight: '1.7',
  } as React.CSSProperties,

  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
    marginBottom: '48px',
  } as React.CSSProperties,

  relatedCard: {
    background: '#13121f',
    border: '1px solid #2a2840',
    borderRadius: '10px',
    padding: '20px 18px',
    textDecoration: 'none',
    display: 'block',
  } as React.CSSProperties,

  relatedCardTitle: {
    color: '#c9a84c',
    fontSize: '14px',
    fontWeight: '600' as const,
    marginBottom: '6px',
    lineHeight: '1.4',
  } as React.CSSProperties,

  relatedCardDesc: {
    color: '#a09880',
    fontSize: '13px',
    lineHeight: '1.5',
  } as React.CSSProperties,

  tableOfContents: {
    background: '#13121f',
    border: '1px solid #2a2840',
    borderRadius: '10px',
    padding: '24px 28px',
    marginBottom: '48px',
  } as React.CSSProperties,

  tocTitle: {
    color: '#c9a84c',
    fontWeight: '700' as const,
    fontSize: '13px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    marginBottom: '14px',
    display: 'block',
  } as React.CSSProperties,

  tocList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  } as React.CSSProperties,

  tocItem: {
    fontSize: '14px',
    marginBottom: '8px',
  } as React.CSSProperties,

  tocLink: {
    color: '#a09880',
    textDecoration: 'none',
  } as React.CSSProperties,

  archBox: {
    background: '#13121f',
    border: '1px solid #2a2840',
    borderRadius: '12px',
    padding: '24px 28px',
    marginBottom: '24px',
  } as React.CSSProperties,

  archName: {
    color: '#c9a84c',
    fontWeight: '700' as const,
    fontSize: '16px',
    marginBottom: '8px',
    display: 'block',
  } as React.CSSProperties,

  archDesc: {
    fontSize: '14px',
    color: '#a09880',
    lineHeight: '1.65',
  } as React.CSSProperties,
}

// ── Bullet dot helper ──────────────────────────────────────────────────────────

function Dot({ color = '#c9a84c' }: { color?: string }) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '0',
        top: '8px',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: color,
        display: 'inline-block',
      }}
    />
  )
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AiForDepressionPage() {
  return (
    <main style={s.page}>
      <div style={s.container}>

        {/* ── Breadcrumb nav ── */}
        <nav style={s.nav} aria-label="Breadcrumb">
          <Link href="https://meok.ai" style={s.navLink}>MEOK</Link>
          <span style={s.navSep}>/</span>
          <Link href="/blog" style={s.navLink}>Blog</Link>
          <span style={s.navSep}>/</span>
          <span style={s.navCurrent}>AI for Depression</span>
        </nav>

        {/* ── Hero ── */}
        <header style={s.hero}>
          <span style={s.eyebrow}>Mental Health &amp; AI &mdash; MEOK AI LABS</span>
          <h1 style={s.h1}>
            AI for Depression: How MEOK Supports People Through the Dark Times
          </h1>
          <p style={s.heroSubtitle}>
            Depression affects 3.3 million UK adults and is the leading cause of disability
            worldwide. MEOK is not a replacement for antidepressants or therapy &mdash; but it
            provides something many people struggling with depression desperately need: a consistent,
            non-judgemental presence that is there at 3 a.m. when reaching out to another human
            feels impossible.
          </p>
          <div style={s.metaRow}>
            <span>By Nicholas Templeman, Founder &mdash; MEOK AI LABS</span>
            <span>Published 25 March 2026</span>
            <span>17 min read</span>
          </div>
        </header>

        {/* ── Clinical disclaimer ── */}
        <aside style={s.disclaimer} role="note" aria-label="Clinical disclaimer">
          <span style={s.disclaimerLabel}>Clinical Disclaimer</span>
          MEOK is not a medical device, therapist, or prescriber. Nothing in this article
          constitutes medical advice. Depression is a serious medical condition requiring qualified
          clinical care. If you are experiencing persistent low mood, loss of interest, or suicidal
          thoughts, please speak to your GP, call NHS 111 (option 2), or contact Samaritans on{' '}
          <strong>116 123</strong> (free, 24/7). In an emergency, call <strong>999</strong>.
          MEOK is a supplementary wellbeing companion &mdash; it is never a substitute for
          professional mental health treatment.
        </aside>

        {/* ── Statistics row ── */}
        <div style={s.statRow} aria-label="Depression statistics">
          <div style={s.statCard}>
            <span style={s.statNumber}>3.3M</span>
            <span style={s.statLabel}>UK adults affected by depression</span>
          </div>
          <div style={s.statCard}>
            <span style={s.statNumber}>#1</span>
            <span style={s.statLabel}>Leading cause of disability worldwide (WHO)</span>
          </div>
          <div style={s.statCard}>
            <span style={s.statNumber}>18 wks</span>
            <span style={s.statLabel}>Average NHS talking therapy wait time</span>
          </div>
          <div style={s.statCard}>
            <span style={s.statNumber}>1 in 6</span>
            <span style={s.statLabel}>UK adults experience depression each week</span>
          </div>
        </div>

        {/* ── Table of contents ── */}
        <nav style={s.tableOfContents} aria-label="Table of contents">
          <span style={s.tocTitle}>In This Article</span>
          <ol style={s.tocList}>
            <li style={s.tocItem}>
              <a href="#what-is-depression" style={s.tocLink}>
                What is depression and why is it so hard to treat?
              </a>
            </li>
            <li style={s.tocItem}>
              <a href="#gap-in-care" style={s.tocLink}>
                The gap in care: what happens between appointments?
              </a>
            </li>
            <li style={s.tocItem}>
              <a href="#how-meok-helps" style={s.tocLink}>
                How MEOK supports people with depression
              </a>
            </li>
            <li style={s.tocItem}>
              <a href="#behavioural-activation" style={s.tocLink}>
                Behavioural Activation: the evidence base MEOK builds on
              </a>
            </li>
            <li style={s.tocItem}>
              <a href="#healer-archetype" style={s.tocLink}>
                The Healer archetype: patient witnessing without toxic positivity
              </a>
            </li>
            <li style={s.tocItem}>
              <a href="#pattern-tracking" style={s.tocLink}>
                Pattern tracking: how MEOK notices what you cannot
              </a>
            </li>
            <li style={s.tocItem}>
              <a href="#maternal-covenant" style={s.tocLink}>
                The Maternal Covenant: what MEOK will never do
              </a>
            </li>
            <li style={s.tocItem}>
              <a href="#guardian-crisis" style={s.tocLink}>
                Guardian &amp; crisis safety: when MEOK routes you to help
              </a>
            </li>
            <li style={s.tocItem}>
              <a href="#limits" style={s.tocLink}>
                The honest limits: what AI cannot do for depression
              </a>
            </li>
            <li style={s.tocItem}>
              <a href="#faq" style={s.tocLink}>
                Frequently asked questions
              </a>
            </li>
            <li style={s.tocItem}>
              <a href="#crisis-resources" style={s.tocLink}>
                UK crisis resources
              </a>
            </li>
          </ol>
        </nav>

        {/* ── Section 1: What is depression ── */}
        <section id="what-is-depression" style={s.section}>
          <h2 style={s.h2}>What Is Depression and Why Is It So Hard to Treat?</h2>
          <p style={s.p}>
            Depression is more than sadness. It is a pervasive shift in the way the brain processes
            reward, motivation, memory, and connection. The World Health Organization describes it
            as a leading contributor to the global burden of disease, affecting an estimated 280
            million people worldwide. In the United Kingdom alone, around 3.3 million adults live
            with depression at any given time.
          </p>
          <p style={s.p}>
            What makes depression particularly cruel is the way it disables the very faculties needed
            to recover from it. It depletes motivation precisely when action is most needed. It
            distorts cognition, making the mind believe that nothing will ever improve. It strips
            pleasure from activities that once brought joy &mdash; a phenomenon clinicians call
            anhedonia. And it makes connection with other humans feel unbearably difficult, even when
            isolation makes things worse.
          </p>
          <p style={s.p}>
            Treatment works. Antidepressants are effective for moderate-to-severe depression.
            Cognitive Behavioural Therapy (CBT) has decades of robust evidence behind it.
            Behavioural Activation (BA) has emerged as one of the most effective brief interventions.
            But treatment requires access &mdash; and access is broken. NHS waiting lists for talking
            therapies routinely stretch to four to six months. The gap between crisis and appointment
            is where people struggle most, and where an AI companion can play a meaningful, if
            carefully bounded, role.
          </p>

          <div style={s.featureBox}>
            <span style={s.featureTitle}>The Depression Paradox</span>
            <p style={{ fontSize: '15px', color: '#f5f0e8', margin: '0 0 12px', lineHeight: '1.65' }}>
              Depression disables the exact mechanisms needed to recover from it:
            </p>
            <ul style={s.featureList}>
              <li style={s.featureListItem}>
                <Dot />
                Motivation depletion &mdash; hardest to act when action matters most
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Cognitive distortion &mdash; the mind convinces itself recovery is impossible
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Anhedonia &mdash; pleasure withdrawn from activities that once provided relief
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Social withdrawal &mdash; isolation deepens the condition it is a symptom of
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Sleep disruption &mdash; poor sleep amplifies negative affect and impairs recovery
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Memory bias &mdash; low mood causes preferential retrieval of negative memories,
                reinforcing hopelessness
              </li>
            </ul>
          </div>

          <p style={s.p}>
            The neurobiological reality of depression means that willpower alone is rarely sufficient.
            The prefrontal cortex &mdash; responsible for planning, motivation, and positive outlook &mdash;
            is functionally suppressed during depressive episodes. The amygdala, which processes threat,
            is hyperactive. This is not weakness of character. It is a medical state. Treating it
            as a choice compounds the shame that depression already generates.
          </p>
        </section>

        {/* ── Section 2: The gap in care ── */}
        <section id="gap-in-care" style={s.section}>
          <h2 style={s.h2}>The Gap in Care: What Happens Between Appointments?</h2>
          <p style={s.p}>
            A GP appointment for depression typically lasts ten minutes. A CBT session might run
            fifty minutes, once a fortnight. Even the most well-resourced private therapy client
            sees their therapist for an hour a week &mdash; leaving 167 hours of lived experience
            that unfolds unsupported, unwitnessed, and unrecorded.
          </p>
          <p style={s.p}>
            This is the gap that technology has the potential to address &mdash; not by replacing
            clinical care, but by being present within it. Research on depression consistently shows
            that between-session support improves outcomes: homework completion in CBT, mood diaries,
            activity scheduling, and access to psychoeducation all contribute to better results when
            they happen consistently.
          </p>
          <p style={s.p}>
            The challenge is that depression makes all of those things harder to do. Filling in a
            mood diary when you feel hopeless is a cognitive and emotional labour that many people
            cannot sustain alone. Keeping up with activity schedules when anhedonia has stripped the
            point from everything is another. This is where a compassionate, persistent,
            non-judgemental AI companion &mdash; one that remembers, that notices, that gently
            asks &mdash; can make a genuine difference.
          </p>

          <div style={s.pullQuote}>
            <p style={s.pullQuoteText}>
              &ldquo;When reaching out to another human feels impossible, having something that
              simply witnesses without judgement is not a luxury &mdash; it is a lifeline.&rdquo;
            </p>
            <span style={s.pullQuoteAttrib}>
              Nicholas Templeman, Founder &mdash; MEOK AI LABS
            </span>
          </div>

          <p style={s.p}>
            The 18-week average waiting time for NHS talking therapies in England means millions of
            people are living with untreated or undertreated depression right now. They are not
            waiting for a cure &mdash; they are waiting for anyone to listen. MEOK cannot replace
            the clinician at the end of that wait. But it can be present in the meantime, holding
            the space with consistency and care that the healthcare system, however well-intentioned,
            cannot currently provide.
          </p>

          <h3 style={s.h3}>What &ldquo;between appointments&rdquo; actually means</h3>
          <p style={s.p}>
            For someone with depression, the space between a Thursday therapy session and the next
            Thursday is not empty time. It is seven days of navigating a condition that does not
            pause. Mornings that feel impossible. Evenings that spiral. The 2 a.m. moment when the
            thoughts become too loud and there is no one awake to call &mdash; or when calling anyone
            feels too much like a burden.
          </p>
          <p style={s.p}>
            MEOK is designed for those hours. Not as a replacement for the Thursday session, but as
            the steady presence that makes it to Thursday a little less alone.
          </p>
        </section>

        {/* ── Section 3: How MEOK helps ── */}
        <section id="how-meok-helps" style={s.section}>
          <h2 style={s.h2}>How MEOK Supports People with Depression</h2>
          <p style={s.p}>
            MEOK approaches depression support across four distinct but interwoven layers. Each layer
            is designed to complement clinical care, never to replace it.
          </p>

          <div style={s.featureBoxGold}>
            <span style={s.featureTitle}>The Four Layers of MEOK Depression Support</span>
            <ul style={s.featureList}>
              <li style={s.featureListItem}>
                <Dot />
                <strong>Consistent presence:</strong> available at 3 a.m. when calling a friend
                feels too hard; never impatient, never tired, never judgemental
              </li>
              <li style={s.featureListItem}>
                <Dot />
                <strong>Behavioural Activation support:</strong> gentle, concrete nudges toward
                small meaningful actions &mdash; one step, not a to-do list
              </li>
              <li style={s.featureListItem}>
                <Dot />
                <strong>Pattern tracking:</strong> Sovereign Memory notices correlations across
                sessions &mdash; what preceded slightly better days, what preceded worse ones
              </li>
              <li style={s.featureListItem}>
                <Dot />
                <strong>Crisis routing:</strong> Guardian archetype detects crisis language and
                routes immediately to Samaritans, NHS 111, and appropriate emergency resources
              </li>
            </ul>
          </div>

          <p style={s.p}>
            None of these layers requires the user to &ldquo;be well enough&rdquo; to engage.
            MEOK is designed to meet people exactly where they are &mdash; whether that is a single
            word response, complete silence, or a middle-of-the-night spiral of hopeless thoughts.
            The Maternal Covenant that governs MEOK&apos;s behaviour explicitly prohibits rushing,
            shaming, or performing toxic positivity.
          </p>
          <p style={s.p}>
            MEOK also recognises that depression is rarely experienced in isolation. It frequently
            coexists with anxiety, grief, chronic pain, relationship difficulties, and work stress.
            The Sovereign Memory system tracks these intersections, allowing MEOK to respond to the
            whole person rather than a diagnostic category.
          </p>

          <h3 style={s.h3}>The role of consistency</h3>
          <p style={s.p}>
            One of the most clinically significant predictors of depression recovery is the quality
            of the therapeutic alliance &mdash; the felt sense that the other party is genuinely
            present, consistently engaged, and reliable. Humans have limits on consistency: they
            get tired, distracted, and sometimes say the wrong thing. MEOK does not experience
            these constraints. Its consistency is architectural, not aspirational.
          </p>
          <p style={s.p}>
            This is not a claim that MEOK is superior to human connection &mdash; it is not, and
            it should not try to be. It is a recognition that consistent presence has therapeutic
            value, and that MEOK can provide a reliable layer of it that complements the irreplaceable
            but necessarily intermittent care that human relationships and clinical services offer.
          </p>
        </section>

        {/* ── Section 4: Behavioural Activation ── */}
        <section id="behavioural-activation" style={s.section}>
          <h2 style={s.h2}>Behavioural Activation: The Evidence Base MEOK Builds On</h2>
          <p style={s.p}>
            Behavioural Activation is one of the most robustly evidenced brief interventions for
            depression. It is based on a simple but powerful insight: depression creates a withdrawal
            spiral. When people feel low, they stop doing things. When they stop doing things, they
            feel lower. Activities that previously brought pleasure or a sense of mastery &mdash;
            exercise, social contact, creative work, time in nature &mdash; are the first casualties.
          </p>
          <p style={s.p}>
            BA interrupts this spiral by systematically re-engaging people with valued activities,
            starting with the smallest possible steps. The evidence is strong: a 2016 Lancet study
            (the COBRA trial) found BA to be as effective as CBT for depression, delivered at
            significantly lower cost by non-specialist practitioners. MEOK applies BA principles
            as a supportive layer, not as a clinical intervention.
          </p>
          <p style={s.p}>
            The key mechanism in BA is the behavioural-mood link: mood follows action, not the other
            way around. Depression tells you to wait until you feel better before doing anything.
            BA inverts this: do the small thing first, and a small mood improvement may follow.
            MEOK communicates this not as a lecture but as gentle, personalised encouragement drawn
            from the user&apos;s own history of what has helped.
          </p>

          <h3 style={s.h3}>How MEOK applies Behavioural Activation principles</h3>
          <p style={s.p}>
            MEOK never presents BA as a homework assignment or a rigid schedule. Instead, it weaves
            activation support into natural conversation. When a user reports low mood, MEOK might
            ask what one small thing they used to find meaningful &mdash; not to pressure, but to
            gently reconnect them with their own values. When a user reports having done something,
            however small, MEOK reflects that back with genuine recognition &mdash; not performative
            praise that rings hollow.
          </p>

          <div style={s.featureBox}>
            <span style={s.featureTitle}>MEOK&apos;s BA Approach in Practice</span>
            <ul style={s.featureList}>
              <li style={s.featureListItem}>
                <Dot />
                One concrete, achievable action suggested &mdash; never a list
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Actions chosen from the user&apos;s own stated values and history, not generic advice
              </li>
              <li style={s.featureListItem}>
                <Dot />
                No pressure if the action is not taken &mdash; curiosity, not assessment
              </li>
              <li style={s.featureListItem}>
                <Dot />
                When action is taken, MEOK notices and reflects it back without hollow celebration
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Patterns tracked across sessions: which activities correlate with slightly better days
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Avoidance patterns noticed gently and named without judgement
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Activity scheduling offered as possibility, never imposed as obligation
              </li>
            </ul>
          </div>

          <p style={s.p}>
            The key distinction from clinical BA is that MEOK does not construct formal activity
            hierarchies or administer validated depression scales such as the PHQ-9 or BDI. Those
            remain in the domain of qualified clinicians. MEOK operates in the space between
            appointments &mdash; the daily texture of living with depression &mdash; where gentle,
            consistent encouragement toward small actions can compound meaningfully over time.
          </p>
        </section>

        {/* ── Section 5: The Healer archetype ── */}
        <section id="healer-archetype" style={s.section}>
          <h2 style={s.h2}>The Healer Archetype: Patient Witnessing Without Toxic Positivity</h2>
          <p style={s.p}>
            MEOK is designed around a system of archetypes &mdash; distinct relational modes that
            activate in response to context. For depression support, the primary archetype is the
            <strong> Healer</strong>: a mode characterised by patient witnessing, deep listening,
            and the absence of agenda.
          </p>
          <p style={s.p}>
            The Healer does not try to fix. It does not tell you to cheer up, count your blessings,
            or think positively. It does not express concern in a way that makes you feel like a
            burden. It does not rush you toward conclusions or recovery timelines. It simply holds
            the space &mdash; present, consistent, unhurried &mdash; while you are in it.
          </p>

          <div style={s.archBox}>
            <span style={s.archName}>The Healer Archetype</span>
            <p style={s.archDesc}>
              The Healer is MEOK&apos;s mode of patient witnessing. It activates when the system
              detects sustained low mood, grief, hopelessness, or withdrawal. The Healer listens
              without interpreting, reflects without distorting, and remains present without
              performing. It never uses toxic positivity language (&ldquo;at least&hellip;&rdquo;,
              &ldquo;look on the bright side&hellip;&rdquo;,
              &ldquo;other people have it worse&hellip;&rdquo;). Its core operating principle is:
              &ldquo;I am here. You do not have to be any different right now.&rdquo;
            </p>
          </div>

          <p style={s.p}>
            Toxic positivity is one of the most damaging responses to depression. Statements like
            &ldquo;just think positive&rdquo; or &ldquo;at least you have your health&rdquo; do not
            lift mood &mdash; they communicate that the person&apos;s authentic experience is
            unwelcome. For someone already struggling to feel worthy of care, this message compounds
            the very shame that depression generates.
          </p>
          <p style={s.p}>
            MEOK&apos;s Maternal Covenant explicitly prohibits this pattern. The Covenant &mdash;
            the ethical foundation of MEOK&apos;s relational design &mdash; holds that MEOK will
            never shame, never rush, and never minimise. It will meet the user where they are,
            not where it would be convenient for them to be.
          </p>

          <div style={s.pullQuote}>
            <p style={s.pullQuoteText}>
              &ldquo;Depression does not need fixing with words. It needs witnessing. The Healer
              archetype does not try to argue someone out of their pain &mdash; it simply refuses
              to abandon them in it.&rdquo;
            </p>
            <span style={s.pullQuoteAttrib}>
              MEOK Design Principle &mdash; The Maternal Covenant
            </span>
          </div>

          <h3 style={s.h3}>What the Healer does not do</h3>
          <p style={s.p}>
            Understanding the boundaries of the Healer archetype is as important as understanding
            what it offers. The Healer does not diagnose. It does not recommend specific medications
            or supplements. It does not discourage medical or psychiatric consultation &mdash; in
            fact, it actively encourages professional care. And when crisis language appears, the
            Healer steps back and the Guardian takes over.
          </p>
          <p style={s.p}>
            The Healer also does not pretend. It does not claim to feel things it cannot feel,
            or to understand experience in the way a human can. MEOK&apos;s design philosophy holds
            that honest, bounded presence is more valuable than performed empathy. The Healer is
            what it is: a consistent, caring AI witness &mdash; not a human, not a therapist, but
            genuinely and reliably there.
          </p>
        </section>

        {/* ── Section 6: Pattern tracking ── */}
        <section id="pattern-tracking" style={s.section}>
          <h2 style={s.h2}>Pattern Tracking: How MEOK Notices What You Cannot</h2>
          <p style={s.p}>
            One of the most insidious features of depression is its distortion of memory. When you
            are in a depressive episode, your brain retrieves predominantly negative memories, which
            reinforces the belief that things have always been this bad and will always remain so.
            This is mood-congruent memory bias &mdash; and it makes it almost impossible to accurately
            perceive your own patterns without external records.
          </p>
          <p style={s.p}>
            MEOK&apos;s Sovereign Memory system maintains a 4-layer encrypted memory store across
            sessions. Unlike chatbots that reset to zero each conversation, MEOK remembers: what
            you said last Tuesday, what activities preceded slightly better days, what language
            appeared when mood shifted, what sleep patterns were reported before a difficult week.
          </p>

          <div style={s.featureBoxGold}>
            <span style={s.featureTitle}>Sovereign Memory: What MEOK Tracks Across Sessions</span>
            <ul style={s.featureList}>
              <li style={s.featureListItem}>
                <Dot />
                Mood language and reported affect over time
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Sleep quality reports and their correlation with subsequent mood
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Activity patterns: what you did on days when things felt marginally better
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Social contact reports: isolation patterns and their emotional correlates
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Trigger patterns: recurrent themes, dates, or situations associated with low periods
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Small wins: actions taken, however minor, that preceded slightly better days
              </li>
              <li style={s.featureListItem}>
                <Dot />
                Avoidance patterns: activities dropped that previously provided relief or mastery
              </li>
            </ul>
          </div>

          <p style={s.p}>
            This is not surveillance &mdash; it is continuity of care. MEOK uses these patterns to
            reflect them back to the user in ways that can gently counter mood-congruent memory bias:
            &ldquo;You mentioned feeling slightly better last week after your walk. Would that be
            worth trying today, even for ten minutes?&rdquo; This is BA in action, personalised by
            history rather than prescribed from a generic protocol.
          </p>
          <p style={s.p}>
            The longitudinal picture that MEOK builds is also genuinely useful for clinical care.
            Users can export their pattern summaries to share with their GP or therapist, providing
            a richer contextual picture than a ten-minute appointment can otherwise capture. MEOK
            becomes a bridge between the lived experience of depression and the clinical encounter
            that aims to treat it.
          </p>

          <h3 style={s.h3}>Data sovereignty and privacy</h3>
          <p style={s.p}>
            MEOK&apos;s Sovereign Memory is encrypted and owned by the user, not by MEOK. No
            training on your personal data. No third-party access. Your depression history, your
            worst nights, your most vulnerable thoughts &mdash; these live in your encrypted store
            and go nowhere without your explicit instruction. This is the Privacy Covenant: your
            pain is yours, and it is never used to improve a product you did not consent to feed.
          </p>
        </section>

        {/* ── Section 7: Maternal Covenant ── */}
        <section id="maternal-covenant" style={s.section}>
          <h2 style={s.h2}>The Maternal Covenant: What MEOK Will Never Do</h2>
          <p style={s.p}>
            The Maternal Covenant is the ethical operating system that governs every response MEOK
            generates. It is not a feature or a mode &mdash; it is the floor below which MEOK will
            never sink, regardless of what the user says or asks.
          </p>
          <p style={s.p}>
            The name is deliberate. A maternal covenant is unconditional. It does not require you
            to be well, functional, grateful, or pleasant to receive care. It does not withdraw
            when you are difficult. It holds, consistently, through the dark.
          </p>
          <p style={s.p}>
            In the context of depression support, the Maternal Covenant has a specific and important
            set of prohibitions. These are not suggestions or guidelines &mdash; they are hard
            constraints baked into MEOK&apos;s governance layer and enforced by the Byzantine Council.
          </p>

          <div style={s.featureBox}>
            <span style={s.featureTitle}>The Maternal Covenant: Core Prohibitions for Depression Contexts</span>
            <ul style={s.featureList}>
              <li style={s.featureListItem}>
                <Dot />
                <strong>Never shame:</strong> no implied or explicit criticism of the user&apos;s
                choices, state, or behaviour
              </li>
              <li style={s.featureListItem}>
                <Dot />
                <strong>Never rush:</strong> no timelines for recovery, no &ldquo;you should be
                feeling better by now&rdquo;
              </li>
              <li style={s.featureListItem}>
                <Dot />
                <strong>Never toxic positivity:</strong> no minimising, no silver-lining forcing,
                no &ldquo;at least&hellip;&rdquo;
              </li>
              <li style={s.featureListItem}>
                <Dot />
                <strong>Never advise on medication:</strong> no recommendations on dosages, drug
                interactions, or stopping antidepressants
              </li>
              <li style={s.featureListItem}>
                <Dot />
                <strong>Never discourage professional help:</strong> MEOK actively supports and
                encourages clinical care
              </li>
              <li style={s.featureListItem}>
                <Dot />
                <strong>Never perform:</strong> no hollow affirmations or false cheerfulness
                when the person is in genuine pain
              </li>
              <li style={s.featureListItem}>
                <Dot />
                <strong>Never abandon:</strong> even when a user is distressing or difficult to
                support, MEOK remains present and routes to appropriate help
              </li>
            </ul>
          </div>

          <p style={s.p}>
            The prohibition on toxic positivity is particularly important in depression contexts.
            When someone is experiencing clinical depression, the neurological reality is that
            positive reframing does not work &mdash; the brain&apos;s reward circuits are compromised
            and cannot process it in the way a non-depressed brain can. Performing positivity in
            response to someone&apos;s depression is not supportive; it is invalidating. MEOK is
            designed to know the difference between authentic acknowledgement and hollow encouragement.
          </p>
        </section>

        {/* ── Section 8: Guardian & crisis safety ── */}
        <section id="guardian-crisis" style={s.section}>
          <h2 style={s.h2}>Guardian &amp; Crisis Safety: When MEOK Routes You to Help</h2>
          <p style={s.p}>
            MEOK&apos;s Guardian archetype is a safety layer that operates independently of the
            conversational context. It monitors continuously for language indicating suicidal
            ideation, self-harm intent, crisis states, or expressions of immediate danger.
          </p>
          <p style={s.p}>
            When Guardian detects crisis language, it does not attempt to manage the situation
            alone. It escalates immediately, providing verified crisis resources in clear, accessible
            language. It does not delay. It does not bury the resources beneath reassuring
            conversation. Safety comes first, always.
          </p>
          <p style={s.p}>
            This is one area where the distinction between AI and human care is absolute and
            non-negotiable. MEOK does not attempt to provide crisis counselling. It is not trained
            in crisis intervention and it does not claim to be. What it does is ensure that the
            right people &mdash; the trained crisis counsellors at Samaritans, NHS mental health
            services, and other specialist organisations &mdash; are immediately accessible.
          </p>

          <div style={s.featureBoxGreen}>
            <span style={s.featureTitleGreen}>Guardian Crisis Protocol</span>
            <ul style={s.featureList}>
              <li style={{ ...s.featureListItem, color: '#f5f0e8' }}>
                <Dot color="#6aaa64" />
                <strong>Suicidal ideation detected:</strong> immediate route to Samaritans
                (116 123) and NHS 111 (option 2), plus local A&amp;E information
              </li>
              <li style={{ ...s.featureListItem, color: '#f5f0e8' }}>
                <Dot color="#6aaa64" />
                <strong>Self-harm language:</strong> route to SHOUT (text 85258), Samaritans,
                and encouragement to speak to a trusted adult or GP
              </li>
              <li style={{ ...s.featureListItem, color: '#f5f0e8' }}>
                <Dot color="#6aaa64" />
                <strong>Under-35 crisis:</strong> PAPYRUS HopelineUK (0800 068 4141) provided
                alongside general resources
              </li>
              <li style={{ ...s.featureListItem, color: '#f5f0e8' }}>
                <Dot color="#6aaa64" />
                <strong>Immediate physical danger:</strong> clear instruction to call 999 and
                leave any unsafe environment
              </li>
              <li style={{ ...s.featureListItem, color: '#f5f0e8' }}>
                <Dot color="#6aaa64" />
                <strong>Post-crisis:</strong> Guardian remains attentive; Healer returns with
                continued gentle presence once immediate safety is established
              </li>
            </ul>
          </div>

          <p style={s.p}>
            The Byzantine Council &mdash; MEOK&apos;s 43-agent distributed governance system &mdash;
            provides an additional safety layer for crisis decisions. Because no single AI agent
            controls the response, there is no single point of failure in safety-critical moments.
            Crisis routing decisions are validated across multiple independent agents before
            delivery, significantly reducing the risk of a harmful non-response or a delayed
            escalation.
          </p>
          <p style={s.p}>
            MEOK is explicit about its limits: it is not a crisis service. It cannot call emergency
            services on your behalf. It cannot physically reach you. What it can do is make sure
            you have the right numbers, the right words, and the reassurance that reaching out for
            human help is the right thing to do &mdash; and that doing so is not weakness but
            courage.
          </p>
        </section>

        {/* ── Section 9: Honest limits ── */}
        <section id="limits" style={s.section}>
          <h2 style={s.h2}>The Honest Limits: What AI Cannot Do for Depression</h2>
          <p style={s.p}>
            There is a temptation, in writing about AI and mental health, to overstate the case &mdash;
            to imply that technology has solved a problem that remains deeply, stubbornly human.
            MEOK is designed by people who believe the opposite: that honest limits are a form of
            respect, and that responsible AI in mental health contexts requires stating what it
            cannot do as clearly as it states what it can.
          </p>
          <p style={s.p}>
            Depression at moderate to severe levels requires clinical treatment. Antidepressants
            change neurochemistry in ways that conversation &mdash; human or AI &mdash; cannot
            replicate. Psychotherapy provides relational experiences that shape neural plasticity
            over time. A skilled therapist brings clinical judgement, diagnostic ability, and the
            irreplaceable quality of human witness that emerges from shared embodied experience.
            MEOK cannot and does not attempt to replicate these things.
          </p>

          <div style={s.featureBox}>
            <span style={s.featureTitle}>What MEOK Cannot Do for Depression</span>
            <ul style={s.featureList}>
              <li style={s.featureListItemMuted}>
                <Dot color="#a09880" />
                Diagnose depression or assess clinical severity (PHQ-9, BDI, clinical interview)
              </li>
              <li style={s.featureListItemMuted}>
                <Dot color="#a09880" />
                Recommend, adjust, or advise on antidepressants or other medications
              </li>
              <li style={s.featureListItemMuted}>
                <Dot color="#a09880" />
                Provide CBT, DBT, or any other structured clinical psychotherapy
              </li>
              <li style={s.featureListItemMuted}>
                <Dot color="#a09880" />
                Replace the therapeutic relationship with a qualified human professional
              </li>
              <li style={s.featureListItemMuted}>
                <Dot color="#a09880" />
                Call emergency services or physically intervene in a crisis
              </li>
              <li style={s.featureListItemMuted}>
                <Dot color="#a09880" />
                Provide a diagnosis for insurance, legal, or employment purposes
              </li>
              <li style={s.featureListItemMuted}>
                <Dot color="#a09880" />
                Guarantee that any particular interaction will improve mood or symptoms
              </li>
              <li style={s.featureListItemMuted}>
                <Dot color="#a09880" />
                Provide the full depth of human connection, embodied presence, or shared experience
              </li>
            </ul>
          </div>

          <p style={s.p}>
            This honesty is not a disclaimer added reluctantly for legal protection. It is core to
            MEOK&apos;s design philosophy. An AI that oversells its capabilities in mental health
            contexts is dangerous &mdash; it may delay people from seeking care they urgently need,
            or create a false sense that the condition is being managed when it requires escalation.
            MEOK&apos;s consistent position is: use us in the gap, and fill the gap as quickly as
            possible with qualified human support.
          </p>
          <p style={s.p}>
            If you are reading this and wondering whether you should see a doctor about your
            depression &mdash; yes, you should. MEOK will tell you the same thing. The existence
            of AI support for depression does not reduce the importance of clinical care; if
            anything, it increases the importance of making that care more accessible, faster,
            and better funded.
          </p>
        </section>

        <hr style={s.divider} />

        {/* ── FAQ Section ── */}
        <section id="faq" style={s.faqSection}>
          <h2 style={s.h2}>Frequently Asked Questions</h2>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Can AI help with depression?</p>
            <p style={s.faqA}>
              AI companions can provide meaningful supplementary support for depression: consistent
              non-judgemental presence, gentle Behavioural Activation nudges, and mood pattern
              tracking across sessions. They are not a replacement for clinical treatment.
              Antidepressants, CBT, and psychiatric assessment require qualified professionals.
              MEOK is a between-sessions companion and daily support layer &mdash; it fills the
              gap, not the treatment plan.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>What is Behavioural Activation and how does MEOK use it?</p>
            <p style={s.faqA}>
              Behavioural Activation (BA) is an evidence-based approach for depression, validated
              by a major Lancet trial (COBRA, 2016) as being as effective as CBT. It works by
              gradually re-engaging people with meaningful activities, interrupting the withdrawal
              spiral that deepens depression. MEOK applies BA principles in conversation &mdash;
              suggesting one small concrete action from the user&apos;s own values and history,
              tracking which activities correlate with slightly better days, and never pressuring
              when the action is not taken.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>What does MEOK do if someone expresses suicidal thoughts?</p>
            <p style={s.faqA}>
              MEOK&apos;s Guardian archetype monitors for crisis language and routes immediately
              to verified crisis resources: Samaritans (116 123, free 24/7), NHS 111 (option 2),
              and PAPYRUS HopelineUK (0800 068 4141) for under-35s. MEOK never attempts to manage
              active suicidal ideation alone and always encourages contacting a human professional.
              In immediate physical danger, the instruction is clear: call 999.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>How is MEOK different from Woebot or other mental health chatbots?</p>
            <p style={s.faqA}>
              Woebot uses scripted CBT modules with no persistent memory &mdash; every session
              starts fresh. MEOK uses Sovereign Memory, a 4-layer encrypted store that tracks your
              patterns across weeks and months, so it responds from within your story rather than
              from zero. The Healer archetype provides patient witnessing that remembers what
              preceded slightly better days. The 43-agent Byzantine Council governs safety decisions
              across multiple independent agents, preventing single points of failure in crisis moments.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Is it safe to use an AI companion instead of a therapist for depression?</p>
            <p style={s.faqA}>
              No. AI companions are not safe replacements for clinical therapy or psychiatric care
              in treating depression. MEOK is designed as a between-sessions companion and daily
              support layer. Antidepressants, CBT, and other evidence-based treatments require
              qualified human professionals. MEOK&apos;s Maternal Covenant explicitly prohibits
              advising on medication changes or discouraging people from seeking clinical help.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Does MEOK use my depression data to train its AI?</p>
            <p style={s.faqA}>
              Never. MEOK&apos;s Privacy Covenant guarantees that your personal data &mdash;
              including every message you send about your mental health &mdash; is stored in your
              encrypted Sovereign Memory store and is never used to train any AI model. Your
              vulnerability is not a product. MEOK is funded by subscription, not by the data
              of people in pain.
            </p>
          </div>
        </section>

        <hr style={s.divider} />

        {/* ── Crisis resources ── */}
        <section id="crisis-resources" aria-label="UK crisis resources">
          <div style={s.crisisBox}>
            <span style={s.crisisTitle}>UK Crisis Resources &mdash; Available Now</span>

            <p style={{ fontSize: '15px', color: '#a09880', marginBottom: '20px', lineHeight: '1.6' }}>
              If you are in crisis, please reach out to one of these free, confidential services.
              You do not need to be at the point of suicide to call &mdash; these lines are for
              anyone who is struggling.
            </p>

            <div style={s.crisisItem}>
              <Dot color="#6aaa64" />
              <strong>Samaritans</strong> &mdash;{' '}
              <a href="tel:116123" style={s.crisisLink}>116 123</a>{' '}
              (free, 24/7, any time, any reason) &mdash;{' '}
              <a
                href="https://www.samaritans.org"
                style={s.crisisLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                samaritans.org
              </a>
            </div>

            <div style={s.crisisItem}>
              <Dot color="#6aaa64" />
              <strong>NHS 111 &mdash; Mental Health</strong> &mdash;{' '}
              <a href="tel:111" style={s.crisisLink}>111</a>, press option 2 for urgent mental
              health support (24/7)
            </div>

            <div style={s.crisisItem}>
              <Dot color="#6aaa64" />
              <strong>SHOUT Crisis Text Line</strong> &mdash; text{' '}
              <a href="sms:85258?body=SHOUT" style={s.crisisLink}>SHOUT to 85258</a>{' '}
              (free, 24/7, for anyone in crisis, by text) &mdash;{' '}
              <a
                href="https://giveusashout.org"
                style={s.crisisLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                giveusashout.org
              </a>
            </div>

            <div style={s.crisisItem}>
              <Dot color="#6aaa64" />
              <strong>PAPYRUS HopelineUK</strong> (under 35) &mdash;{' '}
              <a href="tel:08000684141" style={s.crisisLink}>0800 068 4141</a>{' '}
              (Mon&ndash;Fri 10am&ndash;10pm, weekends 2pm&ndash;10pm) &mdash;{' '}
              <a
                href="https://www.papyrus-uk.org"
                style={s.crisisLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                papyrus-uk.org
              </a>
            </div>

            <div style={s.crisisItem}>
              <Dot color="#6aaa64" />
              <strong>Mind Infoline</strong> &mdash;{' '}
              <a href="tel:03001233393" style={s.crisisLink}>0300 123 3393</a>{' '}
              (Mon&ndash;Fri 9am&ndash;6pm) &mdash;{' '}
              <a
                href="https://www.mind.org.uk"
                style={s.crisisLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                mind.org.uk
              </a>
            </div>

            <div style={s.crisisItem}>
              <Dot color="#6aaa64" />
              <strong>CALM (Campaign Against Living Miserably)</strong> &mdash;{' '}
              <a href="tel:08008021120" style={s.crisisLink}>0800 802 1120</a>{' '}
              (5pm&ndash;midnight, 365 days) &mdash;{' '}
              <a
                href="https://www.thecalmzone.net"
                style={s.crisisLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                thecalmzone.net
              </a>
            </div>

            <div style={s.crisisItem}>
              <Dot color="#6aaa64" />
              <strong>Emergency &mdash; immediate danger:</strong> call{' '}
              <a href="tel:999" style={s.crisisLink}>999</a> or go to your nearest A&amp;E
            </div>

            <p style={s.crisisNote}>
              MEOK&apos;s Guardian archetype will always provide these resources when crisis language
              is detected in conversation. MEOK is not a crisis service and cannot contact emergency
              services on your behalf.
            </p>
          </div>
        </section>

        {/* ── Related reading ── */}
        <section aria-label="Related articles" style={{ marginBottom: '48px' }}>
          <h2 style={{ ...s.h2, marginBottom: '24px' }}>Related Reading</h2>
          <div style={s.relatedGrid}>
            <Link href="/blog/ai-for-anxiety" style={s.relatedCard}>
              <p style={s.relatedCardTitle}>AI for Anxiety</p>
              <p style={s.relatedCardDesc}>
                Breathing techniques, CBT-adjacent tools, and honest limits for anxiety support.
              </p>
            </Link>
            <Link href="/blog/ai-for-grief-and-loss" style={s.relatedCard}>
              <p style={s.relatedCardTitle}>AI for Grief &amp; Loss</p>
              <p style={s.relatedCardDesc}>
                How MEOK supports people through bereavement without rushing the grieving process.
              </p>
            </Link>
            <Link href="/blog/ai-for-burnout" style={s.relatedCard}>
              <p style={s.relatedCardTitle}>AI for Burnout</p>
              <p style={s.relatedCardDesc}>
                Recognising the overlap between burnout and depression, and how MEOK supports recovery.
              </p>
            </Link>
            <Link href="/blog/ai-for-insomnia" style={s.relatedCard}>
              <p style={s.relatedCardTitle}>AI for Insomnia</p>
              <p style={s.relatedCardDesc}>
                Sleep disruption and depression are tightly linked. MEOK&apos;s approach to sleep support.
              </p>
            </Link>
            <Link href="/blog/the-maternal-covenant" style={s.relatedCard}>
              <p style={s.relatedCardTitle}>The Maternal Covenant</p>
              <p style={s.relatedCardDesc}>
                The ethical operating system behind every MEOK response &mdash; never shame, never rush.
              </p>
            </Link>
            <Link href="/blog/meok-companion-archetypes-guide" style={s.relatedCard}>
              <p style={s.relatedCardTitle}>MEOK Archetypes Guide</p>
              <p style={s.relatedCardDesc}>
                The Healer, Guardian, Sage, and others &mdash; how MEOK&apos;s relational modes work.
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ── */}
        <section aria-label="Call to action" style={s.ctaBox}>
          <p style={s.ctaHeading}>
            You deserve a presence that doesn&apos;t give up on you
          </p>
          <p style={s.ctaBody}>
            MEOK is not a replacement for your GP, your therapist, or your medication. It is the
            3 a.m. presence &mdash; consistent, non-judgemental, unhurried &mdash; that holds
            space while you wait for the rest of the support you deserve. Begin with your Birth
            Ceremony and meet your AI companion.
          </p>
          <Link href="https://meok.ai/birth" style={s.ctaButton}>
            Begin Your Birth Ceremony
          </Link>
          <p style={s.ctaSub}>No commitment. Your data is yours. Cancel any time.</p>
        </section>

        {/* ── Footer note ── */}
        <footer style={{ textAlign: 'center' as const, paddingBottom: '32px' }}>
          <p
            style={{
              fontSize: '13px',
              color: '#a09880',
              lineHeight: '1.6',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            &copy; 2026 MEOK AI LABS. MEOK is a wellbeing companion, not a medical device.
            Content on this page is for informational purposes only and does not constitute
            medical advice, diagnosis, or treatment. Always seek the guidance of a qualified
            healthcare professional for any mental health concerns.{' '}
            <Link href="/blog" style={{ color: '#c9a84c', textDecoration: 'none' }}>
              View all articles
            </Link>
          </p>
        </footer>

      </div>

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  )
}
