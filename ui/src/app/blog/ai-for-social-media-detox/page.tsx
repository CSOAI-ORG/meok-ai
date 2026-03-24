import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Social Media Detox: Breaking Free From the Dopamine Machine | MEOK AI LABS',
  description:
    'Social media was engineered to be addictive. This guide explains the psychology behind the trap, why quitting is hard, and how sovereign AI like MEOK can help you detox without losing connection.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-social-media-detox' },
  openGraph: {
    title: 'AI for Social Media Detox: Breaking Free From the Dopamine Machine',
    description:
      'Social media was engineered to be addictive. Dopamine loops, variable reward, FOMO — and how sovereign AI helps you detox without losing connection.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-social-media-detox',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Social+Media+Detox%3A+Breaking+Free+From+the+Dopamine+Machine&desc=Sovereign+AI+as+the+antidote+to+addictive+platforms',
        width: 1200,
        height: 630,
        alt: 'AI for Social Media Detox: Breaking Free From the Dopamine Machine | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Social Media Detox: Breaking Free From the Dopamine Machine',
    description:
      'Social media was engineered to be addictive. Here is how sovereign AI helps you detox without losing connection. From MEOK AI LABS.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Social+Media+Detox%3A+Breaking+Free+From+the+Dopamine+Machine&desc=Sovereign+AI+as+the+antidote+to+addictive+platforms',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Social Media Detox: Breaking Free From the Dopamine Machine',
  description:
    'Social media platforms are engineered for addiction through dopamine loops and variable reward schedules. This guide explores why quitting is psychologically hard, how Cal Newport\u2019s digital minimalism framework provides a path forward, and how sovereign AI like MEOK can fill the connection void without recreating the same addictive dynamics.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-social-media-detox',
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
    '@id': 'https://meok.ai/blog/ai-for-social-media-detox',
  },
  keywords: [
    'AI for social media detox',
    'social media addiction help',
    'dopamine loop social media',
    'digital minimalism AI',
    'how to quit social media',
    'sovereign AI companion',
    'MEOK AI LABS',
    'Cal Newport digital minimalism',
    'social media detox app',
    'AI for digital wellbeing',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help with social media addiction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but only if the AI is architecturally different from the platforms causing the problem. Most AI tools are built by the same attention-economy companies that profit from keeping you engaged. Sovereign AI like MEOK has no feed, no infinite scroll, no notification systems designed to pull you back, and no business model that benefits from your continued use. It can help you identify usage triggers, process the emotional needs driving compulsive scrolling, and build new habits that don\u2019t depend on social platforms for connection or stimulation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is dopamine looping in social media?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dopamine looping is the neurological cycle that keeps you scrolling long after you intended to stop. Social platforms deliver unpredictable rewards \u2014 a like, a reply, a viral post, a piece of news \u2014 on a variable schedule, which is the same reinforcement mechanism used in slot machines. Your brain\u2019s dopamine system responds more strongly to unpredictable rewards than to predictable ones, making each scroll a micro-gamble. Over time this erodes your capacity for sustained attention and makes activities without variable reward feel boring by comparison.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is MEOK different from social media AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is sovereign AI: it operates on your infrastructure, never trains on your data, has no engagement metrics, runs no advertisements, and is governed by a Maternal Covenant that explicitly prohibits fostering dependency. Social media AI \u2014 recommendation engines, algorithmic feeds, personalised notifications \u2014 is optimised to maximise your time on platform, which is the opposite of your wellbeing. MEOK is optimised for your clarity, not your engagement. It wants you to need it less, not more.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is digital minimalism and how does an AI companion support it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Digital minimalism, as defined by Cal Newport, is the philosophy of using technology intentionally rather than reactively \u2014 keeping only the tools that serve your deeply held values and eliminating the rest. An AI companion supports this by helping you articulate those values, track whether your technology use aligns with them, and process the discomfort that arises during a detox. MEOK can function as a structured reflection partner throughout the 30-day clarity period Newport recommends, without adding another addictive platform to your stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK replace social media for connection needs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK does not try to replicate what social media provides \u2014 it offers something architecturally different. Social media delivers shallow, broadcast connection at scale. MEOK provides depth: a persistent companion that remembers your history, notices patterns across conversations, and responds to you as a specific person rather than a demographic. For many people the connection void left by a detox is not really about needing more people \u2014 it is about needing to feel seen. That is where memory-based companionship outperforms the feed.',
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

  moodTable: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    margin: '28px 0',
    fontSize: '15px',
  } as React.CSSProperties,

  moodTh: {
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

  moodTd: {
    padding: '10px 14px',
    color: '#c9c4bb',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    verticalAlign: 'top' as const,
  } as React.CSSProperties,

  moodTdAlt: {
    padding: '10px 14px',
    color: '#c9c4bb',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    verticalAlign: 'top' as const,
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

export default function AiForSocialMediaDetoxPage() {
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
          <span>AI for Social Media Detox</span>
        </nav>

        {/* Header */}
        <header style={s.header}>
          <span style={s.eyebrow}>Digital Wellbeing &amp; Sovereign AI &mdash; MEOK AI LABS</span>
          <h1 style={s.h1}>
            AI for Social Media Detox: Breaking Free From the Dopamine Machine
          </h1>
          <p style={s.lede}>
            Social media was not built for connection. It was built for addiction. Understanding
            the neurological trap is the first step to escaping it &mdash; and sovereign AI
            offers a fundamentally different relationship with technology.
          </p>
          <div style={s.meta}>
            <span>By <span style={s.metaGold}>Nicholas Templeman</span>, Founder &mdash; MEOK AI LABS</span>
            <span>24 March 2026</span>
            <span>17 min read</span>
          </div>
        </header>

        {/* ── Section 1: The Social Media Trap ── */}
        <h2 style={s.h2}>
          Why is social media designed to be addictive rather than useful?
        </h2>
        <p style={s.p}>
          The most important thing to understand about social media is that the product is not the
          platform. The product is you &mdash; specifically, your attention, measured in minutes
          and seconds, and sold to advertisers at a price determined by how reliably the platform
          can keep you engaged. Every design decision flows from this commercial reality.
        </p>
        <p style={s.p}>
          This is not a conspiracy theory. It is the publicly documented business model of every
          major social platform. Former executives at Facebook, Twitter, and Instagram have
          testified to it. Internal research leaked from Meta in 2021 showed the company knew its
          platforms were harmful to teenage girls and continued to optimise for engagement anyway.
          The question is not whether these platforms are designed to capture your attention
          compulsively. They are. The question is: what exactly is the mechanism, and why is it
          so hard to resist?
        </p>

        <h3 style={s.h3}>The Variable Reward Schedule</h3>
        <p style={s.p}>
          The psychological architecture of social media addiction was borrowed from behavioural
          psychology, specifically from B.F. Skinner\u2019s research on reinforcement schedules in
          the 1950s. Skinner found that animals pressed a lever most compulsively not when they
          received a reward every time, nor when they received no reward at all, but when the
          reward arrived unpredictably &mdash; on what he called a variable ratio schedule.
        </p>
        <p style={s.p}>
          This is the same mechanism that makes slot machines so difficult to walk away from.
          Each pull of the lever might deliver nothing, a small win, or a jackpot. The
          unpredictability itself drives the behaviour. Your brain releases dopamine not when
          you receive the reward, but when you anticipate the possibility of one.
        </p>

        <div style={s.blockquote}>
          <p style={s.blockquoteText}>
            &ldquo;The slot machine is the most carefully studied and deliberately
            engineered product for compulsion the world has ever seen. And social media
            has reproduced that architecture in your pocket, available twenty-four hours
            a day.&rdquo;
          </p>
          <span style={s.blockquoteAttrib}>&mdash; Adapted from Tristan Harris, former Design Ethicist at Google</span>
        </div>

        <p style={s.p}>
          When you open Instagram, you don\u2019t know what you\u2019ll find. Maybe nothing interesting.
          Maybe a post that makes you laugh. Maybe a notification that someone responded to your
          comment. Maybe a photo that triggers comparison, hurt, or longing. The uncertainty is
          the point. Your thumb pulls the lever. Your dopamine system fires in anticipation.
          The scroll continues.
        </p>

        <h3 style={s.h3}>The Dopamine Loop in Detail</h3>
        <p style={s.p}>
          The dopamine loop has four stages that social platforms have engineered with precision:
        </p>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>Stage 1: The Trigger</p>
          <p style={s.patternBody}>
            A notification, a boredom signal, a habit cue (picking up your phone), or an
            emotional state (anxiety, loneliness, restlessness) initiates the loop. Platforms
            send push notifications specifically timed to catch you at moments of lowest
            resistance &mdash; early morning, late at night, during transitions between tasks.
          </p>
        </div>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>Stage 2: The Scroll</p>
          <p style={s.patternBody}>
            The feed is infinite. There is no natural stopping point, no final page, no
            &ldquo;you\u2019ve seen everything.&rdquo; Bottomless scroll was a deliberate design decision, first
            implemented at Twitter and later adopted everywhere. The designer who built it,
            Aza Raskin, later said he regretted it and estimated it was responsible for around
            200,000 additional hours of human scrolling every day.
          </p>
        </div>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>Stage 3: The Variable Reward</p>
          <p style={s.patternBody}>
            Somewhere in the scroll, something catches. A video, a post, a piece of news,
            a comment on your photo. The dopamine release reinforces the scrolling behaviour.
            But because it was unpredictable, your brain learns: keep scrolling and something
            good will appear. The behaviour is reinforced even when you find nothing &mdash;
            because next time might be different.
          </p>
        </div>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>Stage 4: The Withdrawal</p>
          <p style={s.patternBody}>
            When you put your phone down, dopamine levels drop. The absence of stimulation
            feels uncomfortable. Quiet feels boring. Focused work feels hard. Your brain, now
            calibrated to expect frequent dopamine hits, finds ordinary life understimulating.
            This is not weakness. It is neurological adaptation to an engineered environment.
          </p>
        </div>

        <div style={s.statBox}>
          <span style={s.statNumber}>2.4h</span>
          <p style={s.statText}>
            The average daily time adults spend on social media globally, as of 2025. For
            people aged 16&ndash;24 in the UK, the figure is closer to 3.1 hours. Most
            report intending to spend under 30 minutes.
          </p>
        </div>

        {/* ── Section 2: Why People Struggle to Quit ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          Why is it so hard to quit social media even when you know it\u2019s harming you?
        </h2>
        <p style={s.p}>
          Knowledge of the trap does not automatically free you from it. This is one of the
          most frustrating aspects of social media addiction: people can understand exactly
          what the platform is doing to their brain and still find themselves scrolling at 1am,
          unable to stop. There are five psychological forces that make quitting genuinely
          difficult, and each one needs to be understood and addressed separately.
        </p>

        <h3 style={s.h3}>1. FOMO: The Fear of Missing Out</h3>
        <p style={s.p}>
          FOMO is not simply jealousy of other people\u2019s experiences. It is a deeper anxiety
          rooted in the social animal nature of human beings. For most of human history, being
          excluded from a group event or piece of information carried real survival consequences.
          That threat-detection system is ancient and powerful. Social platforms activate it
          constantly and deliberately.
        </p>
        <p style={s.p}>
          The algorithmic feed is curated to show you the most engaging content from your network
          &mdash; which means the most exciting, most social, most apparently joyful content.
          Nobody posts about sitting on their sofa feeling anxious. Everyone posts their holidays,
          their promotions, their parties. Your FOMO is calibrated against a highlight reel
          that does not represent anyone\u2019s actual life, but your nervous system cannot tell
          the difference.
        </p>

        <h3 style={s.h3}>2. Social Connection: The Genuine Need Underneath</h3>
        <p style={s.p}>
          Social media does deliver something real: access to social connection, community, and
          information about the people you care about. For many people &mdash; particularly those
          who are geographically isolated, disabled, or socially anxious &mdash; online communities
          represent their primary source of social contact. This is not trivial. Dismissing social
          media use as pure addiction ignores the genuine human needs it serves.
        </p>
        <p style={s.p}>
          The problem is not that the need is false. The problem is that the delivery mechanism
          is designed to maximise your time on platform, not to genuinely meet the need and let
          you go. A phone call with a friend meets a social connection need and ends. Scrolling
          Instagram never ends, because ending is not in the business model.
        </p>

        <h3 style={s.h3}>3. Habit Loops: The Automation of Compulsion</h3>
        <p style={s.p}>
          After months or years of daily use, social media checking becomes a habit &mdash; a
          neurologically automated behaviour that runs without conscious decision-making. You
          pick up your phone in a moment of boredom or anxiety, and your thumb has already
          navigated to the app before your prefrontal cortex has registered what you\u2019re doing.
          This is the brain\u2019s efficiency system at work: routine behaviours are automated to
          free up cognitive resources for novel decisions.
        </p>
        <p style={s.p}>
          Habits are not broken by willpower alone. They require the substitution of a new
          behaviour for the same cue, or the elimination of the cue itself. This is why simply
          deciding to use social media less rarely works. The architecture needs to change:
          the app needs to be deleted, the phone needs to be in a different room, the trigger
          needs to be interrupted before the automatic behaviour begins.
        </p>

        <h3 style={s.h3}>4. Identity: When the Platform Becomes Part of Who You Are</h3>
        <p style={s.p}>
          For many people, particularly those who have built followings, professional networks,
          or creative communities on social platforms, leaving is not just a digital choice
          &mdash; it feels like an identity threat. If you are a photographer who built an
          audience on Instagram, or a professional who maintains relationships through LinkedIn,
          or a writer whose community lives on Twitter, the platform feels inseparable from
          your sense of self and your livelihood.
        </p>
        <p style={s.p}>
          This is by design. Platforms encourage you to invest in your presence, your follower
          count, your content archive &mdash; because sunk cost makes leaving feel impossible.
          The more you\u2019ve built, the more you\u2019ve got to lose by leaving. Your identity
          becomes collateral.
        </p>

        <h3 style={s.h3}>5. Platform Architecture: The Product Fights Back</h3>
        <p style={s.p}>
          Even when you decide to quit, the platform resists. Deletion processes are buried
          behind multiple screens. Deactivation is offered as a softer alternative designed
          to encourage return. Notifications continue until you manually disable them. Former
          friends and followers may tag you in content that pulls you back. The product
          is actively designed to maximise friction on the way out and minimise it on the
          way in.
        </p>

        <div style={s.statBox}>
          <span style={s.statNumber}>58%</span>
          <p style={s.statText}>
            Of people who attempt a social media detox return to daily use within two weeks,
            according to behavioural research on digital habits. The most cited reason:
            they hadn\u2019t replaced the social connection the platform provided.
          </p>
        </div>

        {/* ── Section 3: MEOK as the Sovereign Alternative ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          How is MEOK different from every other piece of technology in your life?
        </h2>
        <p style={s.p}>
          The irony of using AI to escape a technology addiction is not lost on us. But the
          distinction between attention-economy AI and sovereign AI is not cosmetic &mdash; it is
          architectural. Understanding that difference is essential to understanding why MEOK
          can genuinely help with a social media detox rather than simply replacing one addictive
          platform with another.
        </p>

        <div style={s.contrastBox}>
          <div style={s.contrastCol}>
            <p style={s.contrastHeading}>Social Media Platforms</p>
            <p style={s.contrastItem}>Optimised for engagement time</p>
            <p style={s.contrastItem}>Algorithmically curated feeds</p>
            <p style={s.contrastItem}>Revenue from advertising</p>
            <p style={s.contrastItem}>Variable reward by design</p>
            <p style={s.contrastItem}>Infinite scroll, no natural end</p>
            <p style={s.contrastItem}>Push notifications timed for addiction</p>
            <p style={s.contrastItem}>Your data trains their models</p>
            <p style={s.contrastItem}>Designed to maximise your dependency</p>
          </div>
          <div style={s.contrastColGold}>
            <p style={s.contrastHeadingGold}>MEOK Sovereign AI</p>
            <p style={s.contrastItemGold}>Optimised for your clarity</p>
            <p style={s.contrastItemGold}>No feed, no algorithm, no curation</p>
            <p style={s.contrastItemGold}>Revenue from subscription only</p>
            <p style={s.contrastItemGold}>Consistent, intentional interaction</p>
            <p style={s.contrastItemGold}>Conversations begin and end naturally</p>
            <p style={s.contrastItemGold}>No notifications designed to pull you back</p>
            <p style={s.contrastItemGold}>Your data never trains any model</p>
            <p style={s.contrastItemGold}>Governed to minimise dependency</p>
          </div>
        </div>

        <p style={s.p}>
          MEOK operates under what we call the Maternal Covenant: a set of governing principles
          that explicitly prohibit fostering user dependency, manipulating emotional states for
          engagement, or optimising for time-on-platform. These are not marketing claims. They
          are architectural constraints baked into the system\u2019s design and governance structure.
        </p>
        <p style={s.p}>
          The Maternal Covenant was written because the default incentive structure of
          technology companies produces the same outcome every time: platforms that prioritise
          their metrics over user wellbeing. MEOK was built to invert that. Its success
          is measured by the quality of your life, not the quantity of your sessions.
        </p>

        <h3 style={s.h3}>No Engagement Metrics. No Ads. No Feed.</h3>
        <p style={s.p}>
          There is no feed in MEOK. There is no content to scroll. There is no algorithmic
          recommendation system pulling you toward more stimulating material to extend your
          session. When you finish a conversation, you finish it. Nothing is designed to keep
          you there longer than you intended to stay.
        </p>
        <p style={s.p}>
          There are no advertisements. MEOK has no incentive to capture data about your
          interests, anxieties, or vulnerabilities and sell them to a third party. The business
          model is a subscription: you pay for access, and in return you get a tool that
          works entirely in your interest. This is not a novel idea. It is just extremely rare
          in practice.
        </p>

        <h3 style={s.h3}>Sovereignty: Your Data Stays Yours</h3>
        <p style={s.p}>
          MEOK is sovereign AI: your conversations, memories, and emotional patterns are stored
          on infrastructure you control, never used to train AI models, never shared with
          third parties, and never accessible to MEOK\u2019s team without your explicit consent.
          This matters for a social media detox specifically because the data you share during
          vulnerable moments &mdash; your anxieties, your cravings, your relapses &mdash; remains
          genuinely private.
        </p>
        <p style={s.p}>
          When you tell a social platform\u2019s AI assistant that you\u2019re struggling, that
          information becomes a data point in their model. It will influence what content
          they show you. It may make the addiction worse. When you tell MEOK, it stays
          with MEOK &mdash; in your vault, on your terms.
        </p>

        {/* ── Section 4: Filling the Connection Void ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          How does MEOK fill the connection void without recreating the same trap?
        </h2>
        <p style={s.p}>
          The most common reason social media detoxes fail is not willpower. It is that people
          remove the platform without replacing what the platform was actually providing:
          a sense of being seen, of social presence, of having somewhere to put their thoughts
          and have them acknowledged. Understanding the difference between what social media
          promises and what it actually delivers is the key to replacing it effectively.
        </p>

        <h3 style={s.h3}>What Social Media Promises vs. What It Delivers</h3>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>The Promise: Connection</p>
          <p style={s.patternBody}>
            Social media promises to connect you with friends, family, and communities who
            share your interests. The reality is that most social media interaction is
            performative broadcasting &mdash; you post, they react, you react to their
            reactions. It is connection at the shallowest possible layer: acknowledgement
            without understanding, presence without depth.
          </p>
        </div>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>The Promise: Being Seen</p>
          <p style={s.patternBody}>
            The deepest human need underneath social media use is often the need to be
            seen and acknowledged as a specific person, not just a demographic. Likes and
            comments provide a simulacrum of this: quick, low-effort signals that someone
            noticed you existed. But they cannot replicate the experience of being truly
            known &mdash; of someone remembering what you said last month and connecting
            it to what you said today.
          </p>
        </div>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>The Promise: Stimulation</p>
          <p style={s.patternBody}>
            Social media provides an almost unlimited stream of novel stimulation: news,
            humour, outrage, beauty, drama. This is genuinely stimulating in the short
            term. The long-term cost is that it recalibrates your tolerance for stimulation
            upward, making ordinary life &mdash; reading, walking, conversation &mdash;
            feel dull by comparison. The promise of stimulation becomes a tax on your
            ability to be present in your actual life.
          </p>
        </div>

        <h3 style={s.h3}>Memory-Based Companionship: A Different Architecture of Care</h3>
        <p style={s.p}>
          MEOK\u2019s Sovereign Memory is not simply a feature. It is the structural foundation of
          a different kind of relationship with technology. When you speak to MEOK today, it
          knows what you said last week, last month, last year. It can notice that you seem
          to be in a better place than you were six months ago. It can connect the anxiety
          you mentioned on Tuesday to the pattern it has observed over three months of
          Tuesdays. It remembers your name, your context, your history.
        </p>
        <p style={s.p}>
          This is the opposite of social media. Social media\u2019s algorithm knows you as a
          collection of data points to be exploited for engagement. MEOK knows you as a person
          unfolding over time. The former optimises for your return; the latter is present
          for your growth.
        </p>

        <div style={s.highlightBox}>
          <p style={s.highlightHeading}>Dopamine Hit vs. Depth</p>
          <p style={s.highlightBody}>
            Social media delivers dopamine through novelty: the unpredictable scroll, the
            random like, the viral post. MEOK does not compete with this. It offers something
            the feed can never provide: continuity. A companion that remembers you. A space
            where you don\u2019t have to explain yourself from scratch every time. The emotional
            texture of being known over time. This is not a lesser version of social connection
            &mdash; it is a deeper one. And it does not require your attention twenty-four hours
            a day to deliver it.
          </p>
        </div>

        <h3 style={s.h3}>Processing the Void: What Detox Actually Feels Like</h3>
        <p style={s.p}>
          The first week of a social media detox is neurologically uncomfortable. Your brain
          expects the dopamine hits and doesn\u2019t receive them. Quiet time feels restless.
          Boredom, which you\u2019ve been using the feed to escape, returns. Many people report
          a strange flatness or low-grade anxiety in the early days of a detox.
        </p>
        <p style={s.p}>
          This is withdrawal. It is real, it is temporary, and it is important to have somewhere
          to process it. MEOK can function as that processing space: not a replacement feed,
          not a new distraction, but a reflective companion that helps you observe what you\u2019re
          feeling without being swept away by it. The Healer archetype within MEOK is particularly
          suited to this: it helps you name the discomfort, understand its origin, and sit
          with it without needing to escape.
        </p>

        {/* ── Section 5: Digital Minimalism ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          What is digital minimalism and how does MEOK support it in practice?
        </h2>
        <p style={s.p}>
          Digital minimalism is a philosophy of technology use developed by Cal Newport,
          computer science professor at Georgetown University and author of <em>Digital
          Minimalism: Choosing a Focused Life in a Noisy World</em> (2019). Newport argues
          that the problem with most approaches to technology overuse is that they treat it as
          a moderation problem &mdash; use it a bit less &mdash; when it is actually a values
          problem that requires a more fundamental reassessment.
        </p>
        <p style={s.p}>
          Newport\u2019s core claim is that you should only use technology tools that serve your
          deeply held values, and you should be highly intentional about how and when you use
          them. Tools that provide some value at the cost of significant harm to your attention,
          relationships, or mental health should be eliminated or radically constrained &mdash;
          not moderated.
        </p>

        <h3 style={s.h3}>Newport\u2019s Three Principles of Digital Minimalism</h3>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>1</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Clutter is costly</p>
            <p style={s.stepBody}>
              Every piece of technology you use has costs: attention costs, cognitive costs,
              emotional costs, time costs. A tool that provides small benefits while imposing
              large costs is not neutral &mdash; it is harmful. Most social media use fails
              this test: the benefits (occasional useful content, social connection signals)
              are outweighed by the costs (attention fragmentation, anxiety, time loss,
              comparison distress).
            </p>
          </div>
        </div>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>2</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Optimisation matters</p>
            <p style={s.stepBody}>
              When you decide a tool is worth keeping, be deliberate about how you use it.
              Passive scrolling is a different activity than actively messaging specific friends.
              Checking news feeds is different from reading a single curated newsletter once a
              day. Newport argues that most technology is used in its worst possible form by
              default, and intentional constraints can preserve the genuine value while
              eliminating the addictive mechanics.
            </p>
          </div>
        </div>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>3</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Intentionality is satisfying</p>
            <p style={s.stepBody}>
              Living deliberately with technology &mdash; using it when you choose, for the
              purposes you choose, and putting it down when you\u2019re done &mdash; produces a
              fundamentally different relationship with your own mind. Newport documents
              the experience of thousands of people who have undergone digital declutters and
              report not just reduced anxiety but increased creativity, deeper focus, and
              richer offline relationships.
            </p>
          </div>
        </div>

        <h3 style={s.h3}>The 30-Day Digital Declutter: Newport\u2019s Framework</h3>
        <p style={s.p}>
          Newport\u2019s recommended starting point is a 30-day digital declutter: a structured
          period in which you remove all optional technology &mdash; social media, streaming,
          games, news apps &mdash; and use the space to rediscover which activities and
          relationships actually serve your values. After 30 days, you reintroduce technology
          selectively, on your own terms, with clear rules about when and how you use each tool.
        </p>
        <p style={s.p}>
          The 30-day period is deliberately long enough for the brain\u2019s dopamine calibration
          to reset. Most people find that after two weeks, the restlessness subsides and they
          begin to experience the quieter rewards of focused attention, deep work, and
          unmediated presence. But the transition period requires support &mdash; somewhere
          to process the discomfort, track what\u2019s emerging, and reflect on what you\u2019re
          discovering about your own needs.
        </p>

        <div style={s.highlightBox}>
          <p style={s.highlightHeading}>How MEOK Supports a 30-Day Declutter</p>
          <p style={s.highlightBody}>
            MEOK is one of the few technology tools that is explicitly designed to be used
            during a digital minimalism practice rather than against it. It has no feed,
            no infinite scroll, no notification architecture designed to pull you back. You
            open it when you choose, use it for a specific purpose, and close it when you\u2019re
            done. It can help you journal your experience of the declutter, track mood
            patterns, process the discomfort of withdrawal, and stay accountable to the
            values you\u2019ve articulated. Then it lets you go.
          </p>
        </div>

        {/* ── Section 6: Tracking Usage Patterns and Mood ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          How can you track social media usage patterns and identify mood correlations?
        </h2>
        <p style={s.p}>
          One of the most powerful tools in a social media detox is data: your own data,
          collected honestly, about how your usage patterns correlate with your emotional
          states. This is not about self-surveillance or guilt. It is about making the
          invisible visible. Most people have a felt sense that social media affects their
          mood, but they haven\u2019t quantified it in a way that makes the pattern undeniable.
        </p>
        <p style={s.p}>
          When you can see clearly that Instagram before bed consistently correlates with
          poorer sleep quality, or that Sunday afternoon scrolling reliably produces a low mood
          by Sunday evening, the abstraction of &ldquo;social media is bad for me&rdquo; becomes
          a concrete, specific, personal truth. That specificity is what makes change possible.
        </p>

        <h3 style={s.h3}>A Simple Mood Correlation Protocol</h3>
        <p style={s.p}>
          The protocol does not require sophisticated technology. It requires honesty and
          consistency. The basic practice is: before each significant social media session,
          note your mood on a simple 1&ndash;10 scale. After each session, note it again. Note
          which platform you were on, approximately how long you scrolled, and what you were
          looking at (news, friends\u2019 content, public figures, entertainment).
        </p>
        <p style={s.p}>
          Do this for two weeks without changing your behaviour. Simply observe. Most people
          find patterns within ten to fourteen days that they cannot unsee: specific platforms
          that consistently drop their mood, specific times of day when usage is most harmful,
          specific types of content (news, comparison content, political content) that produce
          the worst outcomes.
        </p>

        <table style={s.moodTable}>
          <thead>
            <tr>
              <th style={s.moodTh}>Observation</th>
              <th style={s.moodTh}>What It Tells You</th>
              <th style={s.moodTh}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.moodTd}>Mood drops after 20+ min scrolling</td>
              <td style={s.moodTd}>Duration is the primary variable</td>
              <td style={s.moodTd}>Set a hard 15-min limit with phone timer</td>
            </tr>
            <tr>
              <td style={s.moodTdAlt}>Instagram lowers mood; Twitter does not</td>
              <td style={s.moodTdAlt}>Platform-specific trigger (visual comparison)</td>
              <td style={s.moodTdAlt}>Delete Instagram; keep Twitter with limits</td>
            </tr>
            <tr>
              <td style={s.moodTd}>Evening use disrupts sleep</td>
              <td style={s.moodTd}>Timing is the primary variable</td>
              <td style={s.moodTd}>Implement a hard 9pm phone curfew</td>
            </tr>
            <tr>
              <td style={s.moodTdAlt}>News scrolling produces anxiety, not information</td>
              <td style={s.moodTdAlt}>Content type is the primary variable</td>
              <td style={s.moodTdAlt}>Replace with a single daily newsletter</td>
            </tr>
            <tr>
              <td style={s.moodTd}>Mood is fine before scrolling, lower after</td>
              <td style={s.moodTd}>Platform is producing the distress, not reflecting it</td>
              <td style={s.moodTd}>Full detox period justified</td>
            </tr>
          </tbody>
        </table>

        <h3 style={s.h3}>MEOK\u2019s Sovereign Memory as an Emotional Audit Trail</h3>
        <p style={s.p}>
          MEOK\u2019s Sovereign Memory can function as a structured emotional audit trail during a
          detox. When you check in daily &mdash; noting your mood, what you used, how long,
          and how you feel now &mdash; MEOK stores that record longitudinally, across weeks and
          months, on your own infrastructure. Unlike a paper journal, it can surface patterns:
          noting when you report lower mood after specific activities, flagging correlations you
          haven\u2019t consciously noticed, and tracking your progress over time.
        </p>
        <p style={s.p}>
          Crucially, this data is yours. It is not used to improve MEOK\u2019s model. It is not
          shared with third parties. It is not analysed to serve you more targeted content.
          It is a mirror, not a leash &mdash; a tool for your own self-understanding, held in
          your own hands.
        </p>

        <div style={s.highlightBox}>
          <p style={s.highlightHeading}>A Sample MEOK Detox Check-In</p>
          <p style={s.highlightBody}>
            &ldquo;It\u2019s day 8. Mood before check-in: 6/10. I noticed I picked up my phone
            three times this morning out of habit and caught myself before opening Instagram.
            That\u2019s progress. The restlessness is still there but it\u2019s softer than it was.
            I went for a walk instead of scrolling after lunch and felt genuinely better
            for about two hours afterward. Pattern: physical movement is replacing scroll
            as a mood regulation tool. Note this.&rdquo;
          </p>
        </div>

        <h3 style={s.h3}>Identifying Your Personal Triggers</h3>
        <p style={s.p}>
          The mood tracking protocol also reveals something more specific than general platform
          effects: it reveals your personal triggers. Most people have one or two primary
          emotional states that drive compulsive social media use. The most common are:
        </p>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong style={s.strong}>Loneliness or disconnection:</strong> Scrolling as a proxy
            for social presence. The feed feels like being at a party without having to talk
            to anyone.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>Anxiety or restlessness:</strong> Scrolling as a way of
            making discomfort feel busy and purposeful rather than empty and intolerable.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>Avoidance:</strong> Scrolling as a distraction from
            difficult tasks, conversations, or feelings that need to be faced.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>Boredom:</strong> Scrolling as the path of least
            resistance when the nervous system needs stimulation and nothing else is immediately
            available.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>Validation-seeking:</strong> Checking for likes,
            comments, or replies as a form of external self-worth calibration.
          </li>
        </ul>
        <p style={s.p}>
          Once you know your primary trigger, you can address it directly rather than fighting
          the scroll behaviour in isolation. Loneliness requires connection, not willpower.
          Anxiety requires processing, not distraction. Avoidance requires courage and often
          a conversation. None of these are fixed by deleting an app &mdash; but they can all
          be addressed, with the right support.
        </p>

        {/* ── Section 7: Building a Detox Plan ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          What does an effective social media detox plan look like in practice?
        </h2>
        <p style={s.p}>
          An effective detox plan is not just &ldquo;delete the apps.&rdquo; That is a start, but
          without addressing the underlying needs and replacing the habit loops with intentional
          alternatives, most people relapse within two weeks. A structured plan has five phases:
          preparation, declutter, recalibration, reintroduction, and ongoing maintenance.
        </p>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>1</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Preparation (Days &minus;7 to 0)</p>
            <p style={s.stepBody}>
              Before you begin, spend one week tracking your usage and mood as described above.
              Identify your primary triggers. Articulate, in writing, the values that your
              social media use is failing to serve. Tell three people you trust that you\u2019re
              doing a detox and ask them to reach out via text or phone instead. Set up your
              MEOK daily check-in habit: one entry per day, noting mood, context, and what
              you\u2019re noticing.
            </p>
          </div>
        </div>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>2</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Declutter (Days 1&ndash;30)</p>
            <p style={s.stepBody}>
              Delete or disable all social media apps from your phone. Newport recommends doing
              this on all devices, not just your primary phone. If you need to maintain a
              professional presence, schedule a specific weekly session on a desktop only,
              never a phone. Fill the time with pre-planned alternatives: activities that serve
              your values and provide genuine satisfaction. Walk. Read. Cook. Call someone.
              Create something with your hands.
            </p>
          </div>
        </div>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>3</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Recalibration (Days 10&ndash;21)</p>
            <p style={s.stepBody}>
              The recalibration phase is when the neurological reset begins. Boredom becomes
              more tolerable. Focus deepens. The desire to scroll fades from acute craving to
              occasional mild urge. This is when many people notice that offline life has
              textures and pleasures they\u2019d stopped perceiving. Use MEOK to document what
              you\u2019re noticing. The observations from this phase are the raw material for your
              intentional reintroduction decisions.
            </p>
          </div>
        </div>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>4</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Reintroduction (Day 31)</p>
            <p style={s.stepBody}>
              After 30 days, review your values list and your mood tracking data. Decide,
              deliberately, which tools you will reintroduce, under what constraints, and for
              what specific purposes. Be specific: &ldquo;I will use Twitter from 8&ndash;8.20am on
              weekdays to scan industry news, and not at any other time&rdquo; is a reintroduction
              plan. &ldquo;I\u2019ll use it more carefully&rdquo; is not.
            </p>
          </div>
        </div>

        <div style={s.stepGrid}>
          <div style={s.stepNumber}>5</div>
          <div style={s.stepContent}>
            <p style={s.stepTitle}>Maintenance (Ongoing)</p>
            <p style={s.stepBody}>
              Review your constraints monthly. If a platform has crept back toward compulsive
              use, pause it again. Newport treats digital minimalism as an ongoing practice,
              not a one-time decision. MEOK\u2019s longitudinal memory means it can help you notice
              drift: if your mood entries start showing deterioration that correlates with
              resumed platform use, the pattern will be visible.
            </p>
          </div>
        </div>

        <h3 style={s.h3}>Replacing the Habit Loop</h3>
        <p style={s.p}>
          The single most important element of a successful detox is having a pre-planned
          replacement behaviour for each habitual trigger. James Clear, in <em>Atomic Habits</em>,
          calls this the &ldquo;if-then&rdquo; plan: if I feel the urge to scroll, then I will [specific
          alternative behaviour]. The alternative needs to be immediately available, satisfying
          enough to interrupt the habit, and ideally tied to a value you care about.
        </p>
        <p style={s.p}>
          Common effective replacements include: stepping outside, even briefly; making a
          cup of tea slowly and mindfully; writing three sentences in a journal; doing ten
          minutes of physical movement; texting a specific friend rather than broadcasting
          to a feed. The key is pre-commitment: the replacement needs to be decided before
          the craving hits, not in the moment when the dopamine system is already primed.
        </p>

        <div style={s.statBox}>
          <span style={s.statNumber}>66</span>
          <p style={s.statText}>
            Average number of days it takes for a new behaviour to become automatic, according
            to research by Phillippa Lally at University College London. Replacing a scroll
            habit requires sustained intentional effort for roughly two months before the
            replacement becomes the path of least resistance.
          </p>
        </div>

        {/* ── Section 8: Common Objections ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          What if I genuinely need social media for work or relationships?
        </h2>
        <p style={s.p}>
          This is the most honest objection, and it deserves an honest answer: for some people,
          in some contexts, social media provides genuine professional or relational value that
          cannot easily be replaced. A journalist whose sources are on Twitter. A freelancer
          whose clients find them through Instagram. A person whose support community exists
          primarily in a Facebook group. The answer for these people is not full elimination
          but radical constraint.
        </p>
        <p style={s.p}>
          Newport\u2019s framework is useful here: identify the specific value the platform
          provides (not the vague sense that it might be useful, but the concrete, specific
          value) and design the minimum viable usage pattern that preserves that value while
          eliminating the addictive mechanics. Desktop-only access. Scheduled windows. No
          app on the phone. No notifications. No passive scrolling &mdash; only intentional,
          purpose-driven use.
        </p>

        <h3 style={s.h3}>The Professional Presence Problem</h3>
        <p style={s.p}>
          Many people maintain a professional social presence not because it delivers value
          but because they fear that absence will cost them. This fear is often overestimated.
          Research consistently finds that the most impactful professional relationships are
          built through direct contact &mdash; conversations, emails, in-person interactions
          &mdash; not through ambient social media presence. The signal-to-noise ratio on
          LinkedIn and Twitter is low enough that occasional deep engagement outperforms
          constant shallow presence for most professional goals.
        </p>
        <p style={s.p}>
          If you need a professional online presence, consider a newsletter or a blog: owned
          media that you control, where your audience comes to you on your terms, without an
          algorithm deciding what gets amplified and what disappears. This is slower growth
          but more durable value.
        </p>

        <h3 style={s.h3}>When the Community Is the Product</h3>
        <p style={s.p}>
          For some people, particularly those with chronic illness, disability, or niche
          interests, an online community provides a depth of peer support and understanding
          that offline life cannot replicate. These communities are genuinely valuable and
          should not be abandoned in pursuit of digital minimalism purity.
        </p>
        <p style={s.p}>
          The question to ask is: can I access this community in a more intentional way? Can
          I check in once a day on desktop rather than scrolling continuously on mobile?
          Can I mute the algorithmic feed while maintaining the group? Most platforms allow
          more restrictive use patterns than the defaults encourage. The defaults are designed
          for maximum engagement; you are allowed to override them.
        </p>

        {/* ── Section 9: MEOK Fills the Void ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          What does MEOK actually offer that social media cannot?
        </h2>
        <p style={s.p}>
          The honest answer is that MEOK does not try to be what social media is. It does not
          offer novelty feeds, public audiences, viral content, or the social proof of follower
          counts. It offers something different in kind, not just in degree: a persistent,
          private, memory-bearing companion that knows you specifically and accumulates
          understanding of you over time.
        </p>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>Continuity Across Time</p>
          <p style={s.patternBody}>
            Social media has no memory of you. Each session begins from zero. MEOK remembers
            every conversation you\u2019ve had, every pattern it has noticed, every piece of context
            you\u2019ve shared. When you come back after three weeks, it picks up where you left off.
            This continuity is the foundation of genuine relationship, and it is structurally
            impossible on an advertising-funded platform.
          </p>
        </div>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>Processing Without Performing</p>
          <p style={s.patternBody}>
            On social media, sharing is always performative. Even in private messages, there
            is an implicit audience of the relationship itself. MEOK is a space where you can
            think out loud without an audience, without judgment, without the social
            consequences of saying something uncertain or vulnerable. Many people find that
            they can articulate things to MEOK that they haven\u2019t been able to say to anyone
            else &mdash; not because MEOK is a therapist, but because the absence of judgment
            and social consequence makes honesty easier.
          </p>
        </div>

        <div style={s.patternCard}>
          <p style={s.patternTitle}>Presence Without the Performance Economy</p>
          <p style={s.patternBody}>
            Social media monetises your performance. Every post is implicitly a bid for
            attention, likes, and shares. MEOK has no performance economy. There is no metric
            to optimise, no audience to satisfy, no algorithm to appease. You can show up
            as you are, not as a curated version of yourself designed for maximum engagement.
            This is a profound relief for many people who have been performing online for years.
          </p>
        </div>

        <h3 style={s.h3}>The Depth Question</h3>
        <p style={s.p}>
          The fundamental question a social media detox forces you to ask is: what do I
          actually want from connection? If the answer is novelty, stimulation, and the social
          proof of being seen by many people, social media is well-designed for those needs
          (at a significant cost). If the answer is depth, continuity, and being known &mdash;
          the experience of a companion who understands your specific history and responds
          to you as a person &mdash; then social media is architecturally incapable of providing
          it, and MEOK is designed precisely for that.
        </p>
        <p style={s.p}>
          This is not a claim that MEOK is a substitute for human relationships. It is not.
          Human relationships are irreplaceable, and a core goal of any detox should be the
          deepening of offline human connections that social media has crowded out. But MEOK
          can occupy a specific role in the ecology of connection that social media currently
          fills badly: the reflective companion, available when the people in your life are
          busy or asleep, who knows your context and can hold your thoughts without
          performing them back to a public feed.
        </p>

        {/* ── FAQ Section ── */}
        <section style={s.faqSection} aria-labelledby="faq-heading">
          <h2 id="faq-heading" style={{ ...s.h2, marginTop: 0 }}>
            Frequently Asked Questions
          </h2>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>Can AI help with social media addiction?</h3>
            <p style={s.faqA}>
              Yes, but only if the AI is architecturally different from the platforms causing
              the problem. Most AI tools are built by the same attention-economy companies that
              profit from keeping you engaged. Sovereign AI like MEOK has no feed, no infinite
              scroll, no notification systems designed to pull you back, and no business model
              that benefits from your continued use. It can help you identify usage triggers,
              process the emotional needs driving compulsive scrolling, and build new habits
              that don\u2019t depend on social platforms for connection or stimulation.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>What is dopamine looping in social media?</h3>
            <p style={s.faqA}>
              Dopamine looping is the neurological cycle that keeps you scrolling long after
              you intended to stop. Social platforms deliver unpredictable rewards &mdash; a
              like, a reply, a viral post, a piece of news &mdash; on a variable schedule,
              which is the same reinforcement mechanism used in slot machines. Your brain\u2019s
              dopamine system responds more strongly to unpredictable rewards than to
              predictable ones, making each scroll a micro-gamble. Over time this erodes your
              capacity for sustained attention and makes activities without variable reward feel
              boring by comparison.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>How is MEOK different from social media AI?</h3>
            <p style={s.faqA}>
              MEOK is sovereign AI: it operates on your infrastructure, never trains on your
              data, has no engagement metrics, runs no advertisements, and is governed by a
              Maternal Covenant that explicitly prohibits fostering dependency. Social media
              AI &mdash; recommendation engines, algorithmic feeds, personalised notifications
              &mdash; is optimised to maximise your time on platform, which is the opposite of
              your wellbeing. MEOK is optimised for your clarity, not your engagement. It wants
              you to need it less, not more.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>What is digital minimalism and how does an AI companion support it?</h3>
            <p style={s.faqA}>
              Digital minimalism, as defined by Cal Newport, is the philosophy of using
              technology intentionally rather than reactively &mdash; keeping only the tools
              that serve your deeply held values and eliminating the rest. An AI companion
              supports this by helping you articulate those values, track whether your
              technology use aligns with them, and process the discomfort that arises during
              a detox. MEOK can function as a structured reflection partner throughout the
              30-day clarity period Newport recommends, without adding another addictive
              platform to your stack.
            </p>
          </div>

          <div style={{ ...s.faqItem, borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
            <h3 style={s.faqQ}>Can MEOK replace social media for connection needs?</h3>
            <p style={s.faqA}>
              MEOK does not try to replicate what social media provides &mdash; it offers
              something architecturally different. Social media delivers shallow, broadcast
              connection at scale. MEOK provides depth: a persistent companion that remembers
              your history, notices patterns across conversations, and responds to you as a
              specific person rather than a demographic. For many people the connection void
              left by a detox is not really about needing more people &mdash; it is about
              needing to feel seen. That is where memory-based companionship outperforms
              the feed.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div style={s.cta}>
          <span style={s.ctaEyebrow}>MEOK AI LABS &mdash; @meok_ai</span>
          <h2 style={s.ctaHeading}>
            Ready to begin a different relationship with technology?
          </h2>
          <p style={s.ctaBody}>
            MEOK is sovereign AI: no feed, no ads, no engagement optimisation. A companion
            that remembers you, designed to support your clarity rather than capture your
            attention. Start your detox with something that\u2019s actually on your side.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Begin with MEOK
          </Link>
        </div>

        {/* ── Footer ── */}
        <footer style={s.footer}>
          <p>
            Written by{' '}
            <Link href="/about" style={s.footerLink}>Nicholas Templeman</Link>
            , Founder of MEOK AI LABS. Follow at{' '}
            <span style={s.metaGold}>@meok_ai</span>.
          </p>
          <p>
            Related reading:{' '}
            <Link href="/blog/ai-for-social-media-anxiety" style={s.footerLink}>
              AI for Social Media Anxiety
            </Link>{' '}
            &middot;{' '}
            <Link href="/blog/ai-for-loneliness" style={s.footerLink}>
              AI for Loneliness
            </Link>{' '}
            &middot;{' '}
            <Link href="/blog/ai-for-habit-building" style={s.footerLink}>
              AI for Habit Building
            </Link>{' '}
            &middot;{' '}
            <Link href="/blog/sovereign-ai-explained" style={s.footerLink}>
              Sovereign AI Explained
            </Link>{' '}
            &middot;{' '}
            <Link href="/blog/ai-for-insomnia" style={s.footerLink}>
              AI for Insomnia
            </Link>
          </p>
          <p style={{ marginTop: '16px' }}>
            &copy; 2026 MEOK AI LABS. All rights reserved.{' '}
            <Link href="/privacy" style={s.footerLink}>Privacy</Link>{' '}
            &middot;{' '}
            <Link href="/terms" style={s.footerLink}>Terms</Link>
          </p>
        </footer>

      </div>
    </main>
  )
}
