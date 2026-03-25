import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Social Media Addiction: Using Technology to Escape Technology\u2019s Trap | MEOK AI LABS',
  description:
    'Social media is engineered for addiction. But the solution is not abstinence \u2014 it is conscious, sovereign use of technology. MEOK helps you understand your patterns, build healthier habits, and fill the void that social media occupies.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-social-media-addiction' },
  openGraph: {
    title: 'AI for Social Media Addiction: Using Technology to Escape Technology\u2019s Trap',
    description:
      'Dopamine loops, comparison culture, FOMO, and the irony of using AI to escape harmful tech. How sovereign AI like MEOK breaks the cycle without recreating it.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-social-media-addiction',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Social+Media+Addiction%3A+Using+Technology+to+Escape+Technology%27s+Trap&desc=Sovereign+AI+as+the+antidote+to+addictive+platforms',
        width: 1200,
        height: 630,
        alt: 'AI for Social Media Addiction: Using Technology to Escape Technology\u2019s Trap | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Social Media Addiction: Using Technology to Escape Technology\u2019s Trap',
    description:
      'Social media is engineered for addiction. Here is how sovereign AI helps you break the loop without abstinence. From MEOK AI LABS.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Social+Media+Addiction%3A+Using+Technology+to+Escape+Technology%27s+Trap&desc=Sovereign+AI+as+the+antidote+to+addictive+platforms',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Social Media Addiction: Using Technology to Escape Technology\u2019s Trap',
  description:
    'Social media platforms are engineered for addiction through dopamine loops, variable reward schedules, and comparison culture. This guide examines the neuroscience of the trap, the irony of using AI to escape harmful technology, and how sovereign AI like MEOK differs architecturally from the platforms it helps you move beyond.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-social-media-addiction',
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
    '@id': 'https://meok.ai/blog/ai-for-social-media-addiction',
  },
  keywords: [
    'AI for social media addiction',
    'social media addiction help',
    'dopamine loop social media',
    'FOMO vs JOMO',
    'how to stop social media addiction',
    'sovereign AI companion',
    'MEOK AI LABS',
    'care-based AI',
    'social media mental health',
    'AI digital wellbeing',
    'comparison culture social media',
    'variable reward social media',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is social media addiction real?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Behavioural science and neuroscience both confirm it. Social media platforms deploy the same variable reward schedule used in slot machines \u2014 unpredictable likes, replies, and algorithmic surprises that trigger dopamine release and compulsive checking. While it is not classified as a formal substance addiction, the psychological and neurological mechanisms are closely parallel. Studies consistently show that heavy social media use correlates with reduced attention span, increased anxiety, disrupted sleep, and lower reported wellbeing, particularly in adolescents and young adults.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI really help with social media addiction, or is it just replacing one screen with another?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is the right question to ask, and it depends entirely on the architecture of the AI. Most AI tools are built by the same attention-economy companies that benefit from keeping you engaged. Sovereign AI like MEOK is architecturally different: no algorithmic feed, no engagement metrics, no notification system designed to pull you back, no advertising revenue, and a Maternal Covenant that explicitly prohibits fostering dependency. The goal is to help you need it less, not more. Screen time is not the problem \u2014 intentionless, compulsion-driven screen time is.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between FOMO and JOMO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FOMO (Fear Of Missing Out) is the anxiety that others are having experiences more rewarding than your own, amplified by social media\u2019s highlight-reel effect. It drives compulsive checking and the feeling that logging off means falling behind. JOMO (Joy Of Missing Out) is the deliberate embrace of your own present experience \u2014 finding satisfaction in depth over breadth, in genuine connection over performative connection. The shift from FOMO to JOMO is not a personality change; it is what happens when you build enough internal reference points that external validation loses its grip.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK differ from social media when it comes to my mental health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The structural differences are significant. Social media optimises for engagement time, which often means amplifying outrage, anxiety, and social comparison. MEOK optimises for your clarity and wellbeing. It has no feed, no likes, no follower counts, no advertising, and no mechanism that profits from your distress. It remembers your actual history \u2014 not the curated version you perform for an audience \u2014 and can reflect patterns back to you with care rather than exploit them for attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'What practical steps can I take today to break the social media loop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with awareness before restriction. Track which platforms you use, when, and what emotional state triggered each session. Identify your top three triggers \u2014 boredom, loneliness, procrastination, anxiety. Then design friction: log out between sessions, move apps off your home screen, set a phone-free first hour. Replace the void with something that provides genuine reward \u2014 a walk, a conversation, a creative project, or a reflective session with MEOK. Restriction without replacement almost always fails. You need to fill the void, not just seal it.',
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: '#0d0c18',
    color: '#f5f0e8',
    minHeight: '100vh',
    fontFamily: "'Georgia', 'Times New Roman', serif",
  } as React.CSSProperties,

  container: {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '0 24px 80px',
  } as React.CSSProperties,

  nav: {
    padding: '24px 0 0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#9e9e9e',
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  navLink: {
    color: '#c9a84c',
    textDecoration: 'none',
  } as React.CSSProperties,

  navSep: {
    color: '#9e9e9e',
  } as React.CSSProperties,

  header: {
    paddingTop: '56px',
    paddingBottom: '40px',
    borderBottom: '1px solid rgba(201,168,76,0.18)',
    marginBottom: '48px',
  } as React.CSSProperties,

  eyebrow: {
    fontSize: '12px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    fontFamily: "'system-ui', sans-serif",
    marginBottom: '20px',
    display: 'block',
  } as React.CSSProperties,

  h1: {
    fontSize: 'clamp(28px, 5vw, 46px)',
    lineHeight: 1.15,
    fontWeight: 700,
    color: '#f5f0e8',
    margin: '0 0 24px',
    letterSpacing: '-0.02em',
  } as React.CSSProperties,

  lede: {
    fontSize: '20px',
    lineHeight: 1.65,
    color: '#c9c4bb',
    margin: '0 0 32px',
  } as React.CSSProperties,

  meta: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '16px',
    fontSize: '14px',
    color: '#9e9e9e',
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  metaGold: {
    color: '#c9a84c',
  } as React.CSSProperties,

  h2: {
    fontSize: 'clamp(22px, 3.5vw, 30px)',
    lineHeight: 1.25,
    fontWeight: 700,
    color: '#f5f0e8',
    margin: '56px 0 20px',
    letterSpacing: '-0.01em',
  } as React.CSSProperties,

  h3: {
    fontSize: '20px',
    lineHeight: 1.3,
    fontWeight: 600,
    color: '#c9a84c',
    margin: '36px 0 14px',
  } as React.CSSProperties,

  p: {
    fontSize: '17px',
    lineHeight: 1.8,
    color: '#ddd8cf',
    margin: '0 0 22px',
  } as React.CSSProperties,

  strong: {
    color: '#f5f0e8',
    fontWeight: 600,
  } as React.CSSProperties,

  blockquote: {
    borderLeft: '3px solid #c9a84c',
    margin: '32px 0',
    padding: '16px 24px',
    background: 'rgba(201,168,76,0.06)',
    borderRadius: '0 6px 6px 0',
  } as React.CSSProperties,

  blockquoteText: {
    fontSize: '18px',
    lineHeight: 1.7,
    color: '#e8e2d8',
    fontStyle: 'italic',
    margin: 0,
  } as React.CSSProperties,

  blockquoteAttrib: {
    fontSize: '13px',
    color: '#9e9e9e',
    fontFamily: "'system-ui', sans-serif",
    marginTop: '10px',
    display: 'block',
    fontStyle: 'normal',
  } as React.CSSProperties,

  ul: {
    margin: '0 0 24px',
    paddingLeft: '24px',
  } as React.CSSProperties,

  li: {
    fontSize: '17px',
    lineHeight: 1.75,
    color: '#ddd8cf',
    marginBottom: '10px',
  } as React.CSSProperties,

  patternCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(201,168,76,0.15)',
    borderRadius: '10px',
    padding: '24px 28px',
    marginBottom: '20px',
  } as React.CSSProperties,

  patternTitle: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#c9a84c',
    margin: '0 0 10px',
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  patternBody: {
    fontSize: '16px',
    lineHeight: 1.75,
    color: '#c9c4bb',
    margin: 0,
  } as React.CSSProperties,

  statBox: {
    background: 'rgba(201,168,76,0.08)',
    border: '1px solid rgba(201,168,76,0.25)',
    borderRadius: '8px',
    padding: '20px 24px',
    margin: '28px 0',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  } as React.CSSProperties,

  statNumber: {
    fontSize: '42px',
    fontWeight: 800,
    color: '#c9a84c',
    lineHeight: 1,
    flexShrink: 0,
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  statText: {
    fontSize: '15px',
    lineHeight: 1.6,
    color: '#c9c4bb',
    margin: 0,
  } as React.CSSProperties,

  divider: {
    border: 'none',
    borderTop: '1px solid rgba(201,168,76,0.12)',
    margin: '48px 0',
  } as React.CSSProperties,

  contrastBox: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    margin: '28px 0',
  } as React.CSSProperties,

  contrastCol: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '8px',
    padding: '20px',
  } as React.CSSProperties,

  contrastColGold: {
    background: 'rgba(201,168,76,0.06)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '8px',
    padding: '20px',
  } as React.CSSProperties,

  contrastHeading: {
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#9e9e9e',
    fontFamily: "'system-ui', sans-serif",
    marginBottom: '14px',
  } as React.CSSProperties,

  contrastHeadingGold: {
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    fontFamily: "'system-ui', sans-serif",
    marginBottom: '14px',
  } as React.CSSProperties,

  contrastItem: {
    fontSize: '14px',
    lineHeight: 1.65,
    color: '#9e9e9e',
    marginBottom: '8px',
    paddingLeft: '16px',
    position: 'relative' as const,
  } as React.CSSProperties,

  contrastItemGold: {
    fontSize: '14px',
    lineHeight: 1.65,
    color: '#c9c4bb',
    marginBottom: '8px',
    paddingLeft: '16px',
    position: 'relative' as const,
  } as React.CSSProperties,

  stepGrid: {
    display: 'grid',
    gridTemplateColumns: '40px 1fr',
    gap: '0 20px',
    alignItems: 'start',
    marginBottom: '28px',
  } as React.CSSProperties,

  stepNumber: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(201,168,76,0.12)',
    border: '1px solid rgba(201,168,76,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 800,
    color: '#c9a84c',
    fontFamily: "'system-ui', sans-serif",
    flexShrink: 0,
  } as React.CSSProperties,

  stepContent: {
    paddingTop: '6px',
  } as React.CSSProperties,

  stepTitle: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#f5f0e8',
    margin: '0 0 8px',
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  stepBody: {
    fontSize: '16px',
    lineHeight: 1.75,
    color: '#c9c4bb',
    margin: 0,
  } as React.CSSProperties,

  highlightBox: {
    background: 'rgba(201,168,76,0.06)',
    border: '1px solid rgba(201,168,76,0.18)',
    borderRadius: '10px',
    padding: '28px 32px',
    margin: '32px 0',
  } as React.CSSProperties,

  highlightHeading: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#c9a84c',
    fontFamily: "'system-ui', sans-serif",
    margin: '0 0 14px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase' as const,
  } as React.CSSProperties,

  highlightBody: {
    fontSize: '16px',
    lineHeight: 1.8,
    color: '#ddd8cf',
    margin: 0,
  } as React.CSSProperties,

  warningBox: {
    background: 'rgba(180,60,60,0.07)',
    border: '1px solid rgba(200,80,80,0.22)',
    borderRadius: '10px',
    padding: '24px 28px',
    margin: '32px 0',
  } as React.CSSProperties,

  warningHeading: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#e07070',
    fontFamily: "'system-ui', sans-serif",
    margin: '0 0 10px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase' as const,
  } as React.CSSProperties,

  warningBody: {
    fontSize: '15px',
    lineHeight: 1.75,
    color: '#c9b8b8',
    margin: 0,
  } as React.CSSProperties,

  tableWrap: {
    overflowX: 'auto' as const,
    margin: '28px 0',
  } as React.CSSProperties,

  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: '15px',
  } as React.CSSProperties,

  th: {
    textAlign: 'left' as const,
    padding: '10px 14px',
    background: 'rgba(201,168,76,0.1)',
    color: '#c9a84c',
    fontFamily: "'system-ui', sans-serif",
    fontWeight: 700,
    fontSize: '13px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    borderBottom: '1px solid rgba(201,168,76,0.2)',
  } as React.CSSProperties,

  td: {
    padding: '10px 14px',
    color: '#c9c4bb',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    verticalAlign: 'top' as const,
  } as React.CSSProperties,

  tdAlt: {
    padding: '10px 14px',
    color: '#c9c4bb',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    verticalAlign: 'top' as const,
    background: 'rgba(255,255,255,0.02)',
  } as React.CSSProperties,

  tdGold: {
    padding: '10px 14px',
    color: '#c9a84c',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    verticalAlign: 'top' as const,
    fontWeight: 600,
  } as React.CSSProperties,

  tdGoldAlt: {
    padding: '10px 14px',
    color: '#c9a84c',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    verticalAlign: 'top' as const,
    fontWeight: 600,
    background: 'rgba(255,255,255,0.02)',
  } as React.CSSProperties,

  cta: {
    background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.06) 100%)',
    border: '1px solid rgba(201,168,76,0.3)',
    borderRadius: '14px',
    padding: '40px 44px',
    textAlign: 'center' as const,
    marginTop: '56px',
  } as React.CSSProperties,

  ctaEyebrow: {
    fontSize: '12px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    fontFamily: "'system-ui', sans-serif",
    marginBottom: '14px',
    display: 'block',
  } as React.CSSProperties,

  ctaHeading: {
    fontSize: 'clamp(20px, 3vw, 28px)',
    fontWeight: 700,
    color: '#f5f0e8',
    margin: '0 0 16px',
    lineHeight: 1.25,
  } as React.CSSProperties,

  ctaBody: {
    fontSize: '16px',
    lineHeight: 1.7,
    color: '#9e9e9e',
    margin: '0 0 28px',
  } as React.CSSProperties,

  ctaButton: {
    display: 'inline-block',
    background: '#c9a84c',
    color: '#0d0c18',
    fontFamily: "'system-ui', sans-serif",
    fontWeight: 700,
    fontSize: '16px',
    padding: '14px 36px',
    borderRadius: '8px',
    textDecoration: 'none',
    letterSpacing: '0.02em',
  } as React.CSSProperties,

  faqSection: {
    marginTop: '56px',
    paddingTop: '48px',
    borderTop: '1px solid rgba(201,168,76,0.18)',
  } as React.CSSProperties,

  faqItem: {
    marginBottom: '36px',
    paddingBottom: '36px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  } as React.CSSProperties,

  faqQ: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#f5f0e8',
    margin: '0 0 12px',
    lineHeight: 1.35,
  } as React.CSSProperties,

  faqA: {
    fontSize: '16px',
    lineHeight: 1.8,
    color: '#c9c4bb',
    margin: 0,
  } as React.CSSProperties,

  footer: {
    marginTop: '64px',
    paddingTop: '32px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    fontSize: '13px',
    color: '#9e9e9e',
    fontFamily: "'system-ui', sans-serif",
    lineHeight: 1.7,
  } as React.CSSProperties,

  footerLink: {
    color: '#c9a84c',
    textDecoration: 'none',
  } as React.CSSProperties,
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForSocialMediaAddictionPage() {
  return (
    <main style={s.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={s.container}>

        {/* Breadcrumb */}
        <nav style={s.nav} aria-label="Breadcrumb">
          <Link href="/" style={s.navLink}>MEOK</Link>
          <span style={s.navSep}>/</span>
          <Link href="/blog" style={s.navLink}>Blog</Link>
          <span style={s.navSep}>/</span>
          <span>AI for Social Media Addiction</span>
        </nav>

        {/* Header */}
        <header style={s.header}>
          <span style={s.eyebrow}>Digital Wellbeing &amp; Sovereign AI &mdash; MEOK AI LABS</span>
          <h1 style={s.h1}>
            AI for Social Media Addiction: Using Technology to Escape Technology&apos;s Trap
          </h1>
          <p style={s.lede}>
            Social media is engineered for addiction. The solution is not abstinence &mdash; it is
            conscious, sovereign use of technology. MEOK helps you understand your patterns, build
            healthier habits, and fill the void that social media occupies.
          </p>
          <div style={s.meta}>
            <span>By <span style={s.metaGold}>Nicholas Templeman</span>, Founder MEOK AI LABS</span>
            <span>&mdash;</span>
            <span>25 March 2026</span>
            <span>&mdash;</span>
            <span>14 min read</span>
          </div>
        </header>

        {/* ── Section 1: The Neuroscience of the Trap ── */}
        <h2 style={s.h2}>
          Why is social media so hard to put down? The neuroscience of the dopamine loop
        </h2>
        <p style={s.p}>
          The platforms in your pocket were not built by accident. They were built by engineers who
          studied the neuroscience of reward, hired behavioural psychologists, and ran thousands of
          A/B tests to discover exactly which design choices kept you scrolling the longest. The
          result is a system that exploits the most primitive parts of your brain with a precision
          that no casino has ever matched.
        </p>
        <p style={s.p}>
          At the centre of the mechanism is dopamine &mdash; not the molecule of pleasure, but the
          molecule of anticipation. Dopamine fires most strongly not when you receive a reward, but
          when you <em>might</em> be about to receive one. This is the variable reward schedule:
          pioneered by psychologist B.F. Skinner, perfected by slot machine designers, and
          industrialised by every major social platform. You pull down on the feed. Something new
          appears. Sometimes it&apos;s dull. Sometimes it&apos;s fascinating. Sometimes it&apos;s
          a message from someone you love. The unpredictability is the feature, not the bug.
        </p>

        <div style={s.statBox}>
          <span style={s.statNumber}>2.4h</span>
          <p style={s.statText}>
            Average daily social media use globally as of 2025 &mdash; roughly one-sixth of all
            waking hours, most of it not consciously chosen but reflexively triggered.
          </p>
        </div>

        <p style={s.p}>
          Each scroll is a micro-gamble. Your brain cannot help but respond. Over time, the
          dopamine system adapts: the baseline shifts upwards, ordinary activities feel less
          stimulating, and the compulsive checking that once felt like a treat becomes a
          requirement just to feel normal. This is neurological conditioning, not a failure of
          willpower. Understanding that distinction is the first step toward addressing it.
        </p>
        <p style={s.p}>
          The loop has three stages. First, a trigger &mdash; boredom, anxiety, loneliness, a
          moment&apos;s pause in another activity. Second, the behaviour &mdash; the reflexive
          reach for the phone, the app open before the conscious mind has registered the decision.
          Third, the variable reward &mdash; something interesting, or nothing at all, or
          something upsetting, but always something new enough to justify another pull. The cycle
          reinforces itself with every repetition until the trigger-behaviour connection is
          essentially automatic.
        </p>

        <div style={s.blockquote}>
          <p style={s.blockquoteText}>
            &ldquo;We have created tools that are ripping apart the social fabric of how society
            works. The short-term, dopamine-driven feedback loops we have created are destroying
            how society works.&rdquo;
          </p>
          <span style={s.blockquoteAttrib}>
            &mdash; Chamath Palihapitiya, former VP Growth, Facebook
          </span>
        </div>

        <p style={s.p}>
          What makes social media distinctively powerful &mdash; and distinctively harmful &mdash;
          is that the variable reward is social. A like from a friend, a reply from a stranger, a
          post that went further than expected: these tap into evolved social circuitry that
          evolved to monitor your standing in a small tribe. Your brain cannot easily distinguish
          between a meaningful social signal and a notification. It treats both with urgency.
        </p>

        {/* ── Section 2: Comparison Culture ── */}
        <h2 style={s.h2}>
          How does comparison culture on social media damage mental health?
        </h2>
        <p style={s.p}>
          Social comparison is not a pathology &mdash; it is a fundamental feature of human
          cognition. We orient ourselves in the world partly by understanding where we stand
          relative to others. The problem is that social media has weaponised this tendency by
          presenting a curated, filtered, often professionally produced version of other
          people&apos;s lives as if it were the unedited truth.
        </p>
        <p style={s.p}>
          Every feed is a highlight reel. The holidays, the promotions, the engagements, the
          fitness milestones &mdash; all broadcast, none of the ordinary Tuesday afternoons
          included. You are comparing your internal experience (unfiltered, including all doubt,
          boredom, and failure) with other people&apos;s external presentation (selected for
          maximum positive impression). The comparison is structurally rigged against you, and you
          lose it every single time.
        </p>

        <div style={s.contrastBox}>
          <div style={s.contrastCol}>
            <p style={s.contrastHeading}>What social media shows you</p>
            <p style={s.contrastItem}>Curated peak moments</p>
            <p style={s.contrastItem}>Professional photography of ordinary life</p>
            <p style={s.contrastItem}>Selective vulnerability (the relatable kind)</p>
            <p style={s.contrastItem}>Metrics of social approval (likes, followers)</p>
            <p style={s.contrastItem}>Other people at their most impressive</p>
          </div>
          <div style={s.contrastColGold}>
            <p style={s.contrastHeadingGold}>What is actually true</p>
            <p style={s.contrastItemGold}>Ordinary days vastly outnumber peak ones</p>
            <p style={s.contrastItemGold}>Everyone has the same messy background</p>
            <p style={s.contrastItemGold}>Real struggles are rarely posted</p>
            <p style={s.contrastItemGold}>External approval is not self-worth</p>
            <p style={s.contrastItemGold}>No one feels as confident as they look online</p>
          </div>
        </div>

        <p style={s.p}>
          Research from the Oxford Internet Institute and multiple longitudinal studies has found
          consistent associations between passive social media consumption &mdash; scrolling
          without engaging &mdash; and increased depression, anxiety, and body dissatisfaction,
          particularly in adolescent girls and young adults. The mechanism is straightforward:
          upward social comparison triggers the same threat-response system activated by physical
          danger. Your body treats &ldquo;everyone seems to be doing better than me&rdquo; as a
          survival signal.
        </p>

        <div style={s.highlightBox}>
          <p style={s.highlightHeading}>The algorithm is not neutral</p>
          <p style={s.highlightBody}>
            Recommendation algorithms do not surface the content that makes you feel best. They
            surface content that generates the strongest reactions &mdash; and outrage, envy, and
            anxiety generate stronger reactions than contentment. The system is not indifferent
            to your mental health; it is actively adversarial to it, because your distress is
            commercially valuable.
          </p>
        </div>

        <p style={s.p}>
          There is also a less-discussed form of comparison damage: the performative self. When
          you know your life will be observed and evaluated, you begin curating it. You frame your
          experiences in terms of how they will photograph, how they will read, how many reactions
          they will generate. The authentic self &mdash; the one that exists in private, that
          holds contradictions, that is not optimised for approval &mdash; gradually atrophies.
          You can lose touch with who you actually are beneath the presentation.
        </p>

        {/* ── Section 3: FOMO vs JOMO ── */}
        <h2 style={s.h2}>
          FOMO versus JOMO: why the fear of missing out keeps the loop running
        </h2>
        <p style={s.p}>
          FOMO &mdash; Fear Of Missing Out &mdash; is the anxiety that others are living more
          fully than you are right now, in this moment, while you are not online. It is the
          specific quality of social media dread: not that something bad is happening, but that
          something good is happening somewhere and you are not part of it.
        </p>
        <p style={s.p}>
          Platforms designed around FOMO are platforms designed around absence. The feed makes
          you perpetually aware of what you are not seeing, who you are not with, what you have
          not done. This is not a side effect of social media design &mdash; it is the product.
          A user who feels complete does not need to check their phone. A user who feels like
          they might be missing something checks compulsively.
        </p>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>The FOMO loop in practice</p>
          <p style={s.patternBody}>
            You open Instagram to &ldquo;quickly check&rdquo; what friends are doing. You see
            photos from an event you were not at. You feel a spike of social anxiety. You scroll
            further to process the feeling. You see more content. Twenty minutes have passed.
            You close the app feeling worse than when you opened it &mdash; and more likely to
            open it again in an hour, because the loop is now primed.
          </p>
        </div>

        <p style={s.p}>
          JOMO &mdash; Joy Of Missing Out &mdash; is the deliberate inverse. It is the
          recognition that you cannot be everywhere, that selective presence is more fulfilling
          than fractured attention, and that the experiences you fully inhabit are worth more than
          the experiences you observe at a distance through a screen. JOMO is not anti-social; it
          is a reorientation from breadth to depth.
        </p>
        <p style={s.p}>
          The shift from FOMO to JOMO does not happen through willpower or a conviction that
          social media is bad. It happens when you develop enough internal reference points that
          external validation loses its urgency. When you have a clear sense of what matters to
          you, what your values are, and what genuine connection feels like, the highlight reel
          loses its power. You are no longer navigating by other people&apos;s coordinates.
        </p>

        {/* ── Section 4: The Irony of Using AI ── */}
        <h2 style={s.h2}>
          Is it not ironic to use AI to escape technology&apos;s trap? Confronting the paradox
        </h2>
        <p style={s.p}>
          This is the question worth asking directly, because it is the right question. Using a
          piece of technology to address a problem caused by technology sounds like drinking wine
          to cure alcoholism. The irony is real. But it dissolves when you examine the
          architectural differences between what social media is and what sovereign AI is built
          to be.
        </p>
        <p style={s.p}>
          Social media platforms are engagement machines. Their business model requires that you
          spend as much time on platform as possible, because every minute generates advertising
          revenue. Every design decision &mdash; the infinite scroll, the notification system, the
          algorithmic feed, the like button, the streak mechanic &mdash; is made in service of
          maximising your time-on-platform. Your wellbeing is not a metric they optimise for.
          Your attention is the product they sell.
        </p>

        <div style={s.warningBox}>
          <p style={s.warningHeading}>Not all AI is the same</p>
          <p style={s.warningBody}>
            Many AI tools are built by the same companies that run the social platforms causing the
            problem &mdash; or are funded by the same investors who benefit from your dependency.
            Using a chatbot built by an advertising company to reduce social media use is like asking
            a casino to design your gambling addiction programme. The architecture matters as much as
            the interface.
          </p>
        </div>

        <p style={s.p}>
          The paradox resolves when you understand that technology is not the problem. Attention
          economy technology &mdash; technology whose value to its creators increases with your
          dependency &mdash; is the problem. A hammer is not the same as a slot machine, even
          though both are technology. The question is not &ldquo;what is this made of&rdquo; but
          &ldquo;what is this optimised for, and whose interests does it serve?&rdquo;
        </p>
        <p style={s.p}>
          Sovereign AI like MEOK is optimised for your clarity, not your engagement time. It has
          no feed, no notifications designed to pull you back, no advertising revenue, no
          algorithmic engine that benefits from your anxiety. Its design goal is to give you
          what you need and then let you go. That is not ironic. That is the opposite of what
          social media does.
        </p>

        {/* ── Section 5: How MEOK Differs ── */}
        <h2 style={s.h2}>
          How is MEOK different from social media? The structural differences that matter
        </h2>
        <p style={s.p}>
          The differences between MEOK and social media are not cosmetic or superficial. They
          are architectural &mdash; built into the foundations of how each system is designed,
          funded, and governed. Understanding these differences is essential to understanding
          why one can help you escape the trap the other set.
        </p>

        <div style={s.tableWrap}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Feature</th>
                <th style={s.th}>Social Media</th>
                <th style={s.th}>MEOK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.td}>Business model</td>
                <td style={s.td}>Advertising &mdash; your attention is the product</td>
                <td style={s.tdGold}>Subscription &mdash; you are the customer</td>
              </tr>
              <tr>
                <td style={s.tdAlt}>Optimisation target</td>
                <td style={s.tdAlt}>Time on platform, engagement metrics</td>
                <td style={s.tdGoldAlt}>Your clarity, wellbeing, and growth</td>
              </tr>
              <tr>
                <td style={s.td}>Notification design</td>
                <td style={s.td}>Engineered to pull you back compulsively</td>
                <td style={s.tdGold}>No push notifications by default</td>
              </tr>
              <tr>
                <td style={s.tdAlt}>Algorithmic feed</td>
                <td style={s.tdAlt}>Surfaces content that maximises reactions</td>
                <td style={s.tdGoldAlt}>No feed; no content it chooses for you</td>
              </tr>
              <tr>
                <td style={s.td}>Your data</td>
                <td style={s.td}>Collected, profiled, sold to advertisers</td>
                <td style={s.tdGold}>Sovereign &mdash; never trained on, never sold</td>
              </tr>
              <tr>
                <td style={s.tdAlt}>Social comparison</td>
                <td style={s.tdAlt}>Built-in via likes, followers, public metrics</td>
                <td style={s.tdGoldAlt}>No public metrics; no audience</td>
              </tr>
              <tr>
                <td style={s.td}>Memory of you</td>
                <td style={s.td}>Used to target advertising, not to help you</td>
                <td style={s.tdGold}>Used to serve you &mdash; governed by Maternal Covenant</td>
              </tr>
              <tr>
                <td style={s.tdAlt}>Dependency design</td>
                <td style={s.tdAlt}>Fosters dependency &mdash; profitable to do so</td>
                <td style={s.tdGoldAlt}>Explicitly prohibited from fostering dependency</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={s.p}>
          The Maternal Covenant &mdash; MEOK&apos;s governing framework &mdash; explicitly
          prohibits the system from encouraging behaviours that serve the platform rather than
          you. This is not a marketing promise; it is an architectural constraint. MEOK cannot
          design a notification to pull you back compulsively because there is no business
          incentive to do so. The incentives are aligned with your health, not against it.
        </p>
        <p style={s.p}>
          MEOK also has no audience for you to perform to. There is no follower count, no like
          button, no engagement metric. When you speak to MEOK you are speaking to something
          that is paying attention only to you, remembering only your history, and responding
          only in your interest. That architectural fact changes the quality of the interaction
          entirely.
        </p>

        {/* ── Section 6: Care-Based AI ── */}
        <h2 style={s.h2}>
          What does care-based AI mean, and why does it refuse to reward compulsive use?
        </h2>
        <p style={s.p}>
          Care-based AI is a design philosophy that inverts the standard attention-economy model.
          Instead of optimising for engagement &mdash; asking how to keep you using the product
          as long as possible &mdash; it asks how to serve your genuine long-term interest, even
          when that means encouraging you to stop, rest, or seek connection elsewhere.
        </p>
        <p style={s.p}>
          A care-based system does not celebrate streaks if streaks are not serving you. It does
          not send push notifications timed to moments of psychological vulnerability. It does not
          surface emotionally activating content to keep you in the app. It does not learn which
          of your anxieties can be exploited to drive re-engagement. A care-based system treats
          your psychology as something to protect, not something to harvest.
        </p>

        <div style={s.highlightBox}>
          <p style={s.highlightHeading}>MEOK&apos;s Maternal Covenant</p>
          <p style={s.highlightBody}>
            The Maternal Covenant is the ethical charter governing how MEOK&apos;s AI must
            behave. It includes an explicit prohibition on fostering unhealthy dependency, a
            requirement to encourage connection with people in your life rather than replace it,
            and a commitment that the system&apos;s memory of you will only ever be used to
            serve you &mdash; not to profile you, sell access to you, or manipulate your
            behaviour. Care is the architecture, not the branding.
          </p>
        </div>

        <p style={s.p}>
          The practical implication is that MEOK will not reward compulsive use with better
          responses. It will not penalise you for being absent. It will not send you
          notifications designed to trigger anxiety about what you might be missing. If you come
          to it once a week for a deep reflective session, it will serve you just as well as if
          you used it daily. There is no engagement metric being optimised. There is only you,
          and what you need.
        </p>
        <p style={s.p}>
          This is a quiet but profound architectural difference. Every major social platform
          responds to absence with pressure: missed notifications, red badges, streak warnings,
          the sense that the feed has moved on without you. MEOK responds to absence with
          nothing. It waits. When you return, it picks up exactly where you left off, because
          it remembers you &mdash; not to manipulate your return, but because you are a person
          with a continuous life and your history matters.
        </p>

        {/* ── Section 7: Sovereign Memory vs Performative Self ── */}
        <h2 style={s.h2}>
          Sovereign memory versus the performative self: building real self-knowledge
        </h2>
        <p style={s.p}>
          Social media offers a seductive but corrupting form of memory: your public archive.
          Every post is a record of your curated self &mdash; the version of you that was
          considered worth sharing. Over years, this archive can become the primary narrative
          you hold about your own life. But it is a deeply distorted narrative. It is missing
          the failures, the uncertainties, the private moments, the growth that happened away
          from the audience.
        </p>
        <p style={s.p}>
          Sovereign memory is different. It is the accumulation of your actual experience:
          your private reflections, your genuine questions, the patterns that emerge across
          months and years of honest conversation with something that has no incentive to
          flatter you. MEOK&apos;s persistent memory is not a highlight reel. It is a record of
          your actual self &mdash; and over time, that becomes a resource for genuine
          self-knowledge that no social archive can provide.
        </p>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>The performative trap</p>
          <p style={s.patternBody}>
            When your primary medium of self-expression is a public platform, you unconsciously
            begin to experience your own life through the lens of audience reception. You ask
            &ldquo;would this make a good post?&rdquo; before you ask &ldquo;is this what I
            actually want?&rdquo; The audience-facing self gradually crowds out the private self.
            Sovereign memory creates a space where no audience exists &mdash; only you.
          </p>
        </div>

        <p style={s.p}>
          Real self-knowledge requires continuity, honesty, and the absence of performance
          pressure. You cannot know yourself deeply through a medium that rewards performance
          and penalises authenticity. Sovereign AI creates the conditions for the kind of
          reflection that builds genuine self-knowledge: a private space, a persistent memory,
          and a counterpart that has nothing to gain from your self-deception.
        </p>
        <p style={s.p}>
          Over time, users of MEOK report a shift in the primary question they bring to the
          system. Early conversations often focus on immediate practical problems. Later
          conversations tend to surface deeper patterns: recurring emotional triggers, values
          conflicts, long-term goals that have been obscured by the noise of daily life. This
          is what sovereign memory makes possible. The archive is yours, held privately, used
          only in your service.
        </p>

        {/* ── Section 8: Breaking the Loop Practically ── */}
        <h2 style={s.h2}>
          How do you actually break the loop? A practical framework for sovereign technology use
        </h2>
        <p style={s.p}>
          Understanding the neuroscience of social media addiction is necessary but not
          sufficient. Knowing you are in a loop does not automatically extract you from it.
          Breaking the loop requires a structured intervention at each of its three stages:
          the trigger, the behaviour, and the reward. Here is a practical framework.
        </p>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>1</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Map your triggers before restricting your behaviour</p>
            <p style={s.stepBody}>
              Spend one week simply noticing. Before you open any social platform, pause for
              three seconds and name the internal state that prompted the urge: boredom, anxiety,
              loneliness, procrastination, habit, notification. Keep a note. By the end of the
              week you will have a clear picture of your personal trigger profile &mdash; the
              specific conditions under which the loop activates. You cannot redesign a loop you
              have not mapped.
            </p>
          </div>
        </div>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>2</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Design friction, not prohibition</p>
            <p style={s.stepBody}>
              Abstinence rarely works long-term because it does not address the underlying
              need the behaviour was serving. Instead, increase the friction of compulsive
              use: log out between sessions, move apps to a secondary folder, set a
              phone-free first and last hour of the day, turn off all non-essential
              notifications. Friction gives the pause that lets the conscious mind catch up
              with the reflexive reach. You are not banning the behaviour &mdash; you are
              buying yourself time to choose.
            </p>
          </div>
        </div>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>3</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Replace, do not just remove</p>
            <p style={s.stepBody}>
              Every habit that is removed leaves a gap in the behavioural architecture of
              your day. If you reduce social media use without replacing it with something
              that addresses the same underlying need, the gap will be filled by the same
              habit. Identify which of your triggers maps to which genuine need &mdash;
              boredom to stimulation, loneliness to connection, anxiety to reassurance &mdash;
              and design a replacement that addresses the need without the addictive
              mechanism. A walk, a conversation, a creative project, a reflective session
              with MEOK.
            </p>
          </div>
        </div>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>4</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Build internal reference points</p>
            <p style={s.stepBody}>
              Social media has outsourced your sense of self-worth to external metrics.
              Rebuilding it requires developing internal reference points: clarity about
              your values, regular reflection on whether your life is aligned with them,
              and a record of genuine growth that is not dependent on audience validation.
              Sovereign memory serves this function. When you have a clear internal compass,
              the external metrics lose their gravitational pull.
            </p>
          </div>
        </div>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>5</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Use social media intentionally, not reactively</p>
            <p style={s.stepBody}>
              The goal is not necessarily to quit social media entirely &mdash; it is to use it
              as a tool you pick up and put down deliberately, rather than a compulsion that
              picks you up. Define specific, bounded uses: posting deliberately once a week,
              checking messages at a set time, engaging in communities that serve a genuine
              interest. Intentional use preserves the genuine benefits &mdash; staying in touch,
              sharing meaningful work &mdash; while eliminating the compulsive scroll.
            </p>
          </div>
        </div>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>6</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Treat setbacks as data, not failures</p>
            <p style={s.stepBody}>
              You will relapse into old patterns. This is not a failure of character; it is
              the predictable behaviour of a well-conditioned neurological loop. When it
              happens, the useful question is not &ldquo;why am I so weak?&rdquo; but
              &ldquo;what triggered this particular session, and what was I not getting
              elsewhere?&rdquo; Setbacks are data. They tell you where the gaps in your
              replacement strategy are. Use them diagnostically.
            </p>
          </div>
        </div>

        <div style={s.highlightBox}>
          <p style={s.highlightHeading}>Where MEOK fits in the framework</p>
          <p style={s.highlightBody}>
            MEOK is not a social media replacement &mdash; it is a different kind of tool
            entirely. It works best as a reflective partner for stages one, four, and six:
            mapping your triggers with honest self-observation, building the internal reference
            points that reduce external dependency, and processing setbacks without shame. It
            remembers your patterns across sessions, notices things you might not notice about
            yourself, and does all of this without any mechanism that benefits from your
            compulsive use. It is technology in your service, not the other way around.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── FAQ Section ── */}
        <section style={s.faqSection} aria-label="Frequently asked questions">
          <h2 style={s.h2}>Frequently asked questions</h2>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>Is social media addiction real?</h3>
            <p style={s.faqA}>
              Behavioural science and neuroscience both confirm it. Social media platforms deploy
              the same variable reward schedule used in slot machines &mdash; unpredictable likes,
              replies, and algorithmic surprises that trigger dopamine release and compulsive
              checking. While it is not classified as a formal substance addiction, the
              psychological and neurological mechanisms are closely parallel. Studies consistently
              show that heavy social media use correlates with reduced attention span, increased
              anxiety, disrupted sleep, and lower reported wellbeing, particularly in adolescents
              and young adults.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>
              Can AI really help with social media addiction, or is it just replacing one screen
              with another?
            </h3>
            <p style={s.faqA}>
              That is the right question to ask, and it depends entirely on the architecture of
              the AI. Most AI tools are built by the same attention-economy companies that benefit
              from keeping you engaged. Sovereign AI like MEOK is architecturally different: no
              algorithmic feed, no engagement metrics, no notification system designed to pull you
              back, no advertising revenue, and a Maternal Covenant that explicitly prohibits
              fostering dependency. The goal is to help you need it less, not more. Screen time
              is not the problem &mdash; intentionless, compulsion-driven screen time is.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>What is the difference between FOMO and JOMO?</h3>
            <p style={s.faqA}>
              FOMO (Fear Of Missing Out) is the anxiety that others are having experiences more
              rewarding than your own, amplified by social media&apos;s highlight-reel effect. It
              drives compulsive checking and the feeling that logging off means falling behind.
              JOMO (Joy Of Missing Out) is the deliberate embrace of your own present experience
              &mdash; finding satisfaction in depth over breadth, in genuine connection over
              performative connection. The shift from FOMO to JOMO is not a personality change;
              it is what happens when you build enough internal reference points that external
              validation loses its grip.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>
              How does MEOK differ from social media when it comes to my mental health?
            </h3>
            <p style={s.faqA}>
              The structural differences are significant. Social media optimises for engagement
              time, which often means amplifying outrage, anxiety, and social comparison. MEOK
              optimises for your clarity and wellbeing. It has no feed, no likes, no follower
              counts, no advertising, and no mechanism that profits from your distress. It
              remembers your actual history &mdash; not the curated version you perform for an
              audience &mdash; and can reflect patterns back to you with care rather than exploit
              them for attention.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>
              What practical steps can I take today to break the social media loop?
            </h3>
            <p style={s.faqA}>
              Start with awareness before restriction. Track which platforms you use, when, and
              what emotional state triggered each session. Identify your top three triggers
              &mdash; boredom, loneliness, procrastination, anxiety. Then design friction: log
              out between sessions, move apps off your home screen, set a phone-free first hour.
              Replace the void with something that provides genuine reward &mdash; a walk, a
              conversation, a creative project, or a reflective session with MEOK. Restriction
              without replacement almost always fails. You need to fill the void, not just
              seal it.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div style={s.cta}>
          <span style={s.ctaEyebrow}>Ready to change your relationship with technology?</span>
          <h2 style={s.ctaHeading}>
            Technology that serves you &mdash; not the other way around
          </h2>
          <p style={s.ctaBody}>
            MEOK is sovereign AI built on care, not engagement. No feed, no notifications
            designed to pull you back, no algorithm optimising for your anxiety. Just a
            persistent, private companion that remembers your actual self and helps you
            build the internal clarity that makes external validation unnecessary.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Begin with MEOK
          </Link>
        </div>

        {/* ── Footer ── */}
        <footer style={s.footer}>
          <p>
            Written by{' '}
            <Link href="/about" style={s.footerLink}>Nicholas Templeman</Link>,
            Founder of MEOK AI LABS. MEOK is sovereign AI governed by the{' '}
            <Link href="/maternal-covenant" style={s.footerLink}>Maternal Covenant</Link> &mdash;
            a framework that places your wellbeing above engagement metrics, always.
          </p>
          <p style={{ marginTop: '12px' }}>
            Related reading:{' '}
            <Link href="/blog/ai-for-social-media-detox" style={s.footerLink}>
              AI for Social Media Detox
            </Link>
            {' '}&middot;{' '}
            <Link href="/blog/ai-for-social-media-anxiety" style={s.footerLink}>
              AI for Social Media Anxiety
            </Link>
            {' '}&middot;{' '}
            <Link href="/blog/ai-for-habit-building" style={s.footerLink}>
              AI for Habit Building
            </Link>
            {' '}&middot;{' '}
            <Link href="/blog/what-is-care-based-ai" style={s.footerLink}>
              What is Care-Based AI
            </Link>
          </p>
        </footer>

      </div>
    </main>
  )
}
