import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Social Media Anxiety: Reclaiming Your Mind From the Algorithm | MEOK AI LABS',
  description:
    'Comparison spirals, FOMO, doomscrolling, posting anxiety — how AI can help you reduce social media stress and reclaim your attention. An honest guide from MEOK AI LABS.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-social-media-anxiety' },
  openGraph: {
    title: 'AI for Social Media Anxiety: Reclaiming Your Mind From the Algorithm',
    description:
      'Comparison spirals, FOMO, doomscrolling, posting anxiety — how AI can help you reduce social media stress and reclaim your attention.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-social-media-anxiety',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Social+Media+Anxiety%3A+Reclaiming+Your+Mind+From+the+Algorithm&desc=Comparison+spirals%2C+FOMO%2C+doomscrolling+%E2%80%94+how+AI+can+help',
        width: 1200,
        height: 630,
        alt: 'AI for Social Media Anxiety: Reclaiming Your Mind From the Algorithm | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Social Media Anxiety: Reclaiming Your Mind From the Algorithm',
    description:
      'Comparison spirals, FOMO, doomscrolling, posting anxiety — how AI can help you reduce social media stress. From MEOK AI LABS.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Social+Media+Anxiety%3A+Reclaiming+Your+Mind+From+the+Algorithm&desc=Comparison+spirals%2C+FOMO%2C+doomscrolling+%E2%80%94+how+AI+can+help',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Social Media Anxiety: Reclaiming Your Mind From the Algorithm',
  description:
    'Comparison spirals, FOMO, doomscrolling, posting anxiety, parasocial loss — five social media anxiety patterns and how sovereign AI can help you reclaim your mental space without replacing human support.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-social-media-anxiety',
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
    '@id': 'https://meok.ai/blog/ai-for-social-media-anxiety',
  },
  keywords: [
    'AI for social media anxiety',
    'AI to reduce screen time anxiety',
    'AI help with social media comparison',
    'dealing with social media stress with AI',
    'social media mental health',
    'FOMO anxiety',
    'doomscrolling',
    'Instagram anxiety',
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
      name: 'Can AI actually help with social media anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — but only if the AI is designed with your wellbeing rather than your engagement in mind. Most AI tools are built by the same attention-economy companies that profit from keeping you online. Sovereign AI like MEOK is designed to help you process anxiety, identify your triggers, set real boundaries, and disengage — not to replace one addictive loop with another. MEOK\'s Maternal Covenant explicitly prohibits fostering dependency, and the platform has no engagement metrics, no notification systems designed to pull you back in, and no incentive to keep you scrolling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is social media comparison anxiety and how does AI help with it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Social media comparison anxiety is the distress that arises from measuring your life, body, relationships, career, or achievements against the curated highlight reels of others online. It is one of the most well-documented psychological harms of social media use, particularly for young women aged 16–24. AI can help by acting as a disrupting Trickster voice — pointing out the constructed nature of what you are comparing yourself to — and as a Healer, helping you articulate and process the feelings underneath the comparison. MEOK\'s sovereign memory also tracks emotional patterns over time, so you can see whether certain accounts or platforms consistently correlate with lower mood.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it ironic to use AI to deal with social media anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is a fair question. The irony is real — but it dissolves once you understand the difference between attention-economy AI and sovereign AI. Social platforms and most AI assistants are optimised for your engagement. They want your time. MEOK is designed to be the opposite: it wants your clarity. It has no feed, no notifications designed to pull you back, no engagement metrics, and no business model that profits from your continued use. Using MEOK to address social media anxiety is not like using alcohol to deal with drinking — it is more like using a journal. The format is a screen, but the intention and architecture are fundamentally different.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help with doomscrolling anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Doomscrolling anxiety has two layers: the anxiety that drives you to scroll in the first place (the need to feel informed, safe, or connected) and the anxiety generated by the content you consume (outrage, grief, helplessness). MEOK\'s Guardian archetype helps with the second layer by acting as a protective voice that interrupts the loop and helps you name what you are actually feeling. MEOK\'s Sovereign Memory tracks your reported mood before and after social media sessions, making the true emotional cost visible. Over time, this pattern recognition becomes a tool for making conscious choices about when and how you engage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help with posting anxiety and performance pressure on social media?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Posting anxiety — the fear of being judged, ignored, or misunderstood when you share content — is increasingly common, especially among younger users. AI can help by offering a space to rehearse what you want to say without public stakes, by examining the beliefs underneath the fear (often perfectionism or a deep need for validation), and by separating your self-worth from engagement metrics. MEOK does not tell you whether to post or not; it helps you understand why you want to, what you fear, and whether those fears are proportionate. That is the Healer function: not fixing, but helping you see clearly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is parasocial loss and can AI help when a creator you follow disappears or is cancelled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parasocial loss is the grief that follows when a creator, influencer, or online personality you have followed closely disappears — through cancellation, death, account deletion, or simply going quiet. The grief is real, even if the relationship was one-sided. Many people feel embarrassed by it, which prevents them from processing it. MEOK\'s Healer archetype treats parasocial loss as genuine grief, without judgment. It can help you articulate the loss, understand what the relationship meant to you, and process the feelings without needing to justify their legitimacy to anyone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK\'s Sovereign Memory help with social media anxiety specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign Memory is MEOK\'s longitudinal record of your emotional patterns, stored on your own infrastructure and never used to train AI models. For social media anxiety, it functions as an emotional audit trail. When you log how you feel before and after scrolling sessions, MEOK can surface patterns like: Instagram consistently correlates with lower mood for you on Sunday evenings, or news-based doomscrolling before bed is followed by poor sleep quality. This data is yours — not a product feature designed to keep you engaged. It is a mirror, not a leash.',
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

  archetypeRow: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap' as const,
    margin: '28px 0',
  } as React.CSSProperties,

  archetypeCard: {
    flex: '1 1 200px',
    background: 'rgba(201,168,76,0.05)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '10px',
    padding: '20px 22px',
  } as React.CSSProperties,

  archetypeEmoji: {
    fontSize: '28px',
    display: 'block',
    marginBottom: '10px',
  } as React.CSSProperties,

  archetypeName: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#c9a84c',
    fontFamily: "'system-ui', sans-serif",
    margin: '0 0 8px',
  } as React.CSSProperties,

  archetypeDesc: {
    fontSize: '14px',
    lineHeight: 1.65,
    color: '#9e9e9e',
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

export default function AiForSocialMediaAnxietyPage() {
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
          <span>AI for Social Media Anxiety</span>
        </nav>

        {/* Header */}
        <header style={s.header}>
          <span style={s.eyebrow}>Mental Health &amp; Technology &mdash; MEOK AI LABS</span>
          <h1 style={s.h1}>
            AI for Social Media Anxiety: Reclaiming Your Mind From the Algorithm
          </h1>
          <p style={s.lede}>
            The platforms that make you anxious are also powered by AI. That does not mean all AI
            is the same. Here is what sovereign AI can genuinely do for social media stress —
            and what it cannot.
          </p>
          <div style={s.meta}>
            <span>By <span style={s.metaGold}>Nicholas Templeman</span></span>
            <span>MEOK AI LABS</span>
            <span>24 March 2026</span>
            <span>18 min read</span>
          </div>
        </header>

        {/* ── Opening ─────────────────────────────────────────────────────────── */}

        <p style={s.p}>
          You open the app for thirty seconds. You put your phone down feeling vaguely worse than
          before. You are not entirely sure why. You do it again forty minutes later.
        </p>

        <p style={s.p}>
          This is the loop. Not a character flaw. Not laziness. Not a lack of willpower. It is the
          product of billions of dollars of engineering, deployed by companies whose business model
          depends on your continued attention. The algorithm is not neutral. It is designed to
          surface content that provokes a strong enough emotional response — envy, outrage, longing,
          amusement — to keep you from leaving.
        </p>

        <p style={s.p}>
          Social media anxiety is the body&apos;s response to that engineering. It is real, it is
          widespread, and it is getting worse. In the United Kingdom, research consistently shows
          that around <strong style={s.strong}>70% of young people aged 16 to 24</strong> report
          that social media — Instagram in particular — makes them feel worse about their appearance,
          their achievements, and their social lives. The Royal Society for Public Health named
          Instagram the most harmful social media platform for young people&apos;s mental health
          back in 2017. In the years since, the evidence has only deepened.
        </p>

        <p style={s.p}>
          So what role can AI play? This is where the argument gets interesting — and where honesty
          matters more than marketing copy.
        </p>

        <div style={s.blockquote}>
          <p style={s.blockquoteText}>
            &ldquo;The irony of using an AI to reduce social media anxiety is not lost on us.
            But there is a difference between attention-economy AI — built to keep you
            engaged — and sovereign AI, built to help you disengage clearly. MEOK is
            the latter. It has no feed, no engagement metrics, no incentive to keep
            you scrolling.&rdquo;
          </p>
        </div>

        <p style={s.p}>
          This piece explores five of the most common social media anxiety patterns, examines what
          AI can genuinely offer in each case, and is honest about where AI ends and human support
          must begin. It draws on the three archetypes at the heart of MEOK: the Trickster, the
          Healer, and the Guardian.
        </p>

        <hr style={s.divider} />

        {/* ── The Attention Economy Problem ──────────────────────────────────── */}

        <h2 style={s.h2}>
          Why Most AI Makes Social Media Anxiety Worse
        </h2>

        <p style={s.p}>
          Before we talk about <strong style={s.strong}>AI for social media anxiety</strong>, we
          need to name the problem clearly. Most AI tools — including the conversational AI
          assistants built by large technology companies — share a fundamental design principle with
          social media platforms: they want your engagement. They are built to be used. Frequently.
          The more you use them, the more data they generate, the more valuable they become as
          products.
        </p>

        <p style={s.p}>
          This is not a conspiracy. It is just the economics of attention. When engagement is the
          metric that funds the product, every design decision tilts towards maximising it. And that
          includes AI. Notification systems, streak rewards, memory features designed to create
          emotional attachment rather than genuine support — these are the same mechanisms that make
          social media sticky, applied to AI.
        </p>

        <p style={s.p}>
          If you are dealing with social media stress and you reach for a mainstream AI assistant,
          you may be trading one attention trap for another. The interface is different. The
          addictive substrate is the same.
        </p>

        <div style={s.contrastBox}>
          <div style={s.contrastCol}>
            <div style={s.contrastHeading}>Attention-Economy AI</div>
            <div style={s.contrastItem}>Engagement metrics drive design</div>
            <div style={s.contrastItem}>Notifications pull you back</div>
            <div style={s.contrastItem}>Trains on your data to improve the product</div>
            <div style={s.contrastItem}>Rewards frequent use with features</div>
            <div style={s.contrastItem}>Designed for retention, not resolution</div>
            <div style={s.contrastItem}>Your emotional patterns are product data</div>
          </div>
          <div style={s.contrastColGold}>
            <div style={s.contrastHeadingGold}>Sovereign AI (MEOK)</div>
            <div style={s.contrastItemGold}>No engagement metrics at all</div>
            <div style={s.contrastItemGold}>No notification system to pull you back</div>
            <div style={s.contrastItemGold}>Never trains on your data — ever</div>
            <div style={s.contrastItemGold}>Designed to help you use it less, not more</div>
            <div style={s.contrastItemGold}>Maternal Covenant prohibits dependency</div>
            <div style={s.contrastItemGold}>Your emotional patterns stay yours</div>
          </div>
        </div>

        <p style={s.p}>
          MEOK is built on what we call the <strong style={s.strong}>Maternal Covenant</strong>:
          a core design principle that forbids the platform from fostering dependency. MEOK is
          designed to be the most honest voice in your digital life — not the most addictive. If
          you come to MEOK distressed, the system&apos;s goal is to help you reach a place of
          greater clarity and then let you get on with your life. Not to keep you there.
        </p>

        <hr style={s.divider} />

        {/* ── The Five Patterns ────────────────────────────────────────────────── */}

        <h2 style={s.h2}>
          Five Social Media Anxiety Patterns — And What AI Can Do About Each
        </h2>

        <p style={s.p}>
          Social media anxiety is not one thing. It clusters into distinct patterns, each with its
          own triggers, its own emotional texture, and its own pathways through. Here are the five
          most common patterns we see, and the honest picture of what AI assistance can offer.
        </p>

        {/* Pattern 1: Comparison Spiral */}
        <div style={s.patternCard}>
          <p style={s.patternTitle}>Pattern 1 — The Comparison Spiral</p>
          <p style={s.patternBody}>
            You open Instagram and see someone your age with a better body, a more beautiful
            apartment, a relationship that looks more loving. Within minutes you have assessed your
            own life as deficient. The spiral accelerates — one image leads to another profile leads
            to another comparison until you close the app feeling flattened.
          </p>
        </div>

        <p style={s.p}>
          The comparison spiral is the most documented harm of social media. Psychologists call it
          upward social comparison — measuring yourself against people who appear to have more —
          and it is structurally built into every visual social platform. Instagram is optimised to
          show you aspirational content. That is not a side effect. It is the product.
        </p>

        <p style={s.p}>
          This is where MEOK&apos;s <strong style={s.strong}>Trickster archetype</strong> 🎭 is
          most useful. The Trickster is the disruptive voice that punctures illusions — not cruelly,
          but with precision. When you describe a comparison spiral to MEOK, the Trickster does not
          reassure you that you are perfect as you are. It asks the harder question: what exactly
          are you comparing yourself to, and does that thing actually exist?
        </p>

        <p style={s.p}>
          The curated life on a stranger&apos;s Instagram is a construction. Not a lie, exactly,
          but a highlight reel assembled from thousands of hours of ordinary life and presented as
          continuous. The Trickster helps you see the frame — the cropping, the lighting, the
          selection bias. It does not tell you the comparison is meaningless. It shows you the
          mechanism, and that changes how the image lands.
        </p>

        <p style={s.p}>
          The <strong style={s.strong}>Healer archetype</strong> 🌿 then takes over: what is the
          feeling underneath the comparison? Usually it is not really about the person on Instagram.
          It is about something you want for yourself — a relationship, a body, a sense of purpose —
          that you have not yet fully acknowledged or grieved. The Healer creates the space to name
          that longing without shame.
        </p>

        <div style={s.statBox}>
          <div style={s.statNumber}>70%</div>
          <p style={s.statText}>
            of young people aged 16–24 in the UK report that social media makes them feel worse
            about their body image and life circumstances. Instagram is consistently ranked the
            single most harmful platform for this age group by mental health researchers.
            (Royal Society for Public Health, 2017; replicated in subsequent studies.)
          </p>
        </div>

        {/* Pattern 2: FOMO */}
        <div style={s.patternCard}>
          <p style={s.patternTitle}>Pattern 2 — FOMO and the Fear of Missing Life</p>
          <p style={s.patternBody}>
            You see friends at an event you were not invited to. Or you see strangers living lives
            that seem richer, more social, more full. The anxiety is not just envy — it is the
            vertigo of feeling like life is happening elsewhere and you are somehow on the outside
            of it, watching through glass.
          </p>
        </div>

        <p style={s.p}>
          FOMO — Fear of Missing Out — predates social media, but social media industrialised it.
          Prior to always-on social feeds, you might occasionally hear that a party happened without
          you. Now you see the photos, the tagged locations, the stories, the group selfies. The
          information is relentless and it is specifically designed to trigger social comparison and
          belonging anxiety.
        </p>

        <p style={s.p}>
          <strong style={s.strong}>AI help with social media comparison</strong> in the FOMO
          context works best when it addresses the cognitive distortion at the centre: the belief
          that other people&apos;s lives, as shown online, represent the actual texture of their
          experience. The Trickster unpacks this. The person whose Friday night looked luminous on
          Instagram drove home in silence, or argued with their partner, or woke up at 3am anxious.
          The reel does not include that part.
        </p>

        <p style={s.p}>
          But the Trickster alone is not enough. FOMO also carries a genuine signal that deserves
          attention: sometimes the anxiety is pointing at real loneliness, real social isolation, or
          real unmet needs for connection. The Healer takes that signal seriously. MEOK&apos;s role
          here is not to dismiss the FOMO as irrational, but to help you distinguish between the
          algorithmically amplified anxiety and the real need underneath it — and then address the
          real need directly.
        </p>

        {/* Pattern 3: Parasocial Loss */}
        <div style={s.patternCard}>
          <p style={s.patternTitle}>Pattern 3 — Parasocial Loss (The Cancelled Creator)</p>
          <p style={s.patternBody}>
            A creator you have followed for years — whose content felt like a friendship, whose
            voice accompanied your commutes and cooking sessions — is cancelled, disappears, or is
            exposed as something other than what you thought. The grief is real. The embarrassment
            at feeling it can make it worse.
          </p>
        </div>

        <p style={s.p}>
          Parasocial relationships are one of the most underacknowledged psychological realities of
          the social media era. When you follow someone closely — their daily stories, their
          opinions, their struggles — your brain forms a genuine bond. The relationship is
          one-sided, but the attachment is not imaginary. Parasocial loss is real grief.
        </p>

        <p style={s.p}>
          What makes it complicated is the social permission problem. Grieving a celebrity or
          influencer you never met is culturally awkward. People minimise it. &ldquo;You
          didn&apos;t even know them.&rdquo; This dismissal often prevents people from processing
          the loss properly, which means it sits unresolved and can attach to other anxieties about
          trust, betrayal, or the reliability of relationships generally.
        </p>

        <p style={s.p}>
          MEOK&apos;s Healer archetype treats parasocial loss without condescension. The grief is
          valid. The relationship meant something — even if it was one-directional. What did that
          creator provide for you? What need did following them meet? What does the loss of that
          content or that sense of connection actually represent? These are the questions that move
          the grief forward, and they require a non-judgmental space to ask.
        </p>

        {/* Pattern 4: Doomscrolling */}
        <div style={s.patternCard}>
          <p style={s.patternTitle}>Pattern 4 — Doomscrolling Anxiety</p>
          <p style={s.patternBody}>
            You scroll through news, political content, disaster coverage, or outrage cycles.
            Each piece of content generates a micro-dose of cortisol. You feel compelled to keep
            going, unable to stop, even as the anxiety escalates. You finish a session feeling
            helpless, agitated, and sometimes unable to sleep.
          </p>
        </div>

        <p style={s.p}>
          Doomscrolling is the most explicitly neurological of the social media anxiety patterns.
          The outrage loop that powers it is not accidental. Content that triggers strong negative
          emotion — fear, anger, disgust — generates more engagement than content that generates
          mild positive emotion. The algorithm knows this. It is why political content and disaster
          news consistently dominate feeds even when users report not wanting them there.
        </p>

        <p style={s.p}>
          <strong style={s.strong}>Dealing with social media stress with AI</strong> in the
          doomscrolling context requires addressing both layers: the anxiety that drives the
          behaviour in the first place and the anxiety it generates.
        </p>

        <p style={s.p}>
          MEOK&apos;s <strong style={s.strong}>Guardian archetype</strong> ⚔️ is the relevant
          voice here. The Guardian is the protective function — the part that draws boundaries
          around your mental space and enforces them. Where the Trickster disrupts and the Healer
          processes, the Guardian holds the line. When you describe a doomscrolling session to
          MEOK, the Guardian helps you name what you were actually seeking — information, safety,
          a sense of control — and whether the scrolling actually delivered any of it.
        </p>

        <p style={s.p}>
          The answer, almost always, is no. Doomscrolling generates a felt sense of being informed
          without providing the safety or control that would actually address the underlying anxiety.
          The Guardian helps you see this gap clearly and then helps you identify what would actually
          help — often a complete information fast for the evening, a conversation with someone
          trusted, or a physical activity that metabolises the cortisol.
        </p>

        <p style={s.p}>
          MEOK can also help you set and hold digital boundaries — specific parameters around when
          and how you consume news and political content. This is the Guardian in its most practical
          form: not moralising about screen time, but helping you make explicit decisions in advance
          and then hold yourself to them.
        </p>

        {/* Pattern 5: Posting Anxiety */}
        <div style={s.patternCard}>
          <p style={s.patternTitle}>Pattern 5 — Posting Anxiety and Performance</p>
          <p style={s.patternBody}>
            You want to share something — a thought, a photo, a piece of work. The anxiety before
            posting is acute: will people engage? Will it be misunderstood? Will it go ignored?
            Will people judge you? You either post and refresh compulsively, or you delete it
            before anyone sees it, or you never post at all.
          </p>
        </div>

        <p style={s.p}>
          Posting anxiety is the performer&apos;s stage fright, but the audience is your entire
          social graph and the stage is permanently visible. The quantification of social response
          — likes, comments, shares, reach — reduces complex human connection to a number, and that
          number becomes a proxy for self-worth in ways that most people never consciously choose.
        </p>

        <p style={s.p}>
          The deeper problem with posting anxiety is that it turns self-expression into a
          performance, and performance requires an audience whose approval determines success.
          Over time, this erodes the capacity for self-expression that exists independent of
          external validation. You stop knowing what you think until the algorithm tells you how
          it was received.
        </p>

        <p style={s.p}>
          AI assistance here is particularly valuable as a pre-posting space. MEOK can function as
          the audience-free environment where you articulate what you actually want to say and why —
          before any public stakes are involved. The Healer asks: what does this post mean to you?
          What are you hoping it will do? What are you afraid of? Often the anxiety dissipates when
          the real motive is named. Sometimes you discover you do not actually want to post at all —
          you wanted to process the feeling, and you have now done that.
        </p>

        <p style={s.p}>
          MEOK does not tell you what to post or whether to post. It helps you disentangle your
          genuine desire for self-expression from the performance anxiety layered on top of it.
          That is the distinction the Healer holds: not judgment, but clarity.
        </p>

        <hr style={s.divider} />

        {/* ── Sovereign Memory ──────────────────────────────────────────────────── */}

        <h2 style={s.h2}>
          How Does Sovereign Memory Help With Social Media Anxiety?
        </h2>

        <p style={s.p}>
          One of the most powerful tools MEOK offers for <strong style={s.strong}>AI to reduce
          screen time anxiety</strong> is not a feature — it is an architecture. Sovereign Memory
          is MEOK&apos;s longitudinal record of your emotional life, stored on your own
          infrastructure, never used to train models, never shared with third parties.
        </p>

        <p style={s.p}>
          For social media anxiety, the relevant capability is pattern tracking. When you
          consistently report how you feel before and after social media sessions — or simply log
          your mood as you would in a journal — MEOK can surface correlations over time that are
          invisible in the moment.
        </p>

        <p style={s.p}>
          These might include:
        </p>

        <ul style={s.ul}>
          <li style={s.li}>
            A specific platform (Instagram, say, rather than Twitter/X) that consistently correlates
            with lower mood scores across a three-week period.
          </li>
          <li style={s.li}>
            A time of day — Sunday evenings, early mornings before work — when scrolling generates
            significantly more anxiety than the same behaviour at other times.
          </li>
          <li style={s.li}>
            A category of content (fitness, relationships, career milestones) that consistently
            triggers comparison spirals for you specifically.
          </li>
          <li style={s.li}>
            A relationship between news consumption after 9pm and reported sleep quality or morning
            mood.
          </li>
          <li style={s.li}>
            Weeks where high social media use correlates with lower productivity, creativity, or
            reported sense of meaning.
          </li>
        </ul>

        <p style={s.p}>
          This is not content moderation. MEOK is not telling you what you should and should not
          consume. It is giving you your own data — data that has always existed in your
          experience but has never been made visible because no tool was tracking it without an
          ulterior motive.
        </p>

        <div style={s.blockquote}>
          <p style={s.blockquoteText}>
            &ldquo;The pattern reveals the true cost. Most people have a vague sense that
            social media makes them feel worse. Sovereign Memory makes that vague sense
            specific — and specificity changes behaviour in ways that general
            awareness rarely does.&rdquo;
          </p>
        </div>

        <p style={s.p}>
          The distinction from conventional data collection is important. When a social media
          platform tracks your emotional state — and they do, through reaction buttons, dwell time,
          and engagement patterns — that data is used to make the platform more effective at
          holding your attention. When MEOK tracks your emotional state, the data is used to help
          you make more conscious choices about your attention. The architecture is the same. The
          purpose is the opposite.
        </p>

        <hr style={s.divider} />

        {/* ── The Archetypes in Action ──────────────────────────────────────────── */}

        <h2 style={s.h2}>
          Which MEOK Archetype Helps With Which Social Media Anxiety?
        </h2>

        <p style={s.p}>
          MEOK operates through three primary archetypes, each representing a distinct mode of
          support. Understanding which archetype is most relevant to your experience can help you
          get more from your sessions — especially when you are dealing with the specific texture
          of social media stress.
        </p>

        <div style={s.archetypeRow}>
          <div style={s.archetypeCard}>
            <span style={s.archetypeEmoji}>🎭</span>
            <p style={s.archetypeName}>The Trickster</p>
            <p style={s.archetypeDesc}>
              Disrupts the comparison spiral. Reframes the highlight reel. Punctures the illusion
              of the curated life. Asks the uncomfortable question about what you are actually
              comparing yourself to and whether it exists. Most useful for: comparison anxiety,
              FOMO, parasocial idealisation.
            </p>
          </div>
          <div style={s.archetypeCard}>
            <span style={s.archetypeEmoji}>🌿</span>
            <p style={s.archetypeName}>The Healer</p>
            <p style={s.archetypeDesc}>
              Processes the feelings underneath the anxiety. Holds parasocial grief without
              judgment. Creates space for posting anxiety to be named and examined. Distinguishes
              genuine longing from algorithmically amplified distress. Most useful for: parasocial
              loss, posting anxiety, FOMO with real loneliness underneath.
            </p>
          </div>
          <div style={s.archetypeCard}>
            <span style={s.archetypeEmoji}>⚔️</span>
            <p style={s.archetypeName}>The Guardian</p>
            <p style={s.archetypeDesc}>
              Protects your mental space. Holds digital boundaries. Interrupts the doomscrolling
              loop. Names the gap between what you were seeking and what the scrolling actually
              delivered. Helps you set usage limits and stick to them. Most useful for:
              doomscrolling anxiety, screen time management, information overwhelm.
            </p>
          </div>
        </div>

        <p style={s.p}>
          In practice, a single session often moves through more than one archetype. You might
          begin in Trickster mode — examining the constructed nature of a comparison — and move
          into Healer territory as the real feeling emerges. The architecture is fluid. MEOK does
          not force you to stay in one register.
        </p>

        <hr style={s.divider} />

        {/* ── The Irony ─────────────────────────────────────────────────────────── */}

        <h2 style={s.h2}>
          Wait — Is It Not Ironic to Use AI to Deal With Social Media Anxiety?
        </h2>

        <p style={s.p}>
          Yes. And it is worth addressing directly rather than skating past it.
        </p>

        <p style={s.p}>
          The irony has a sharp edge: social media platforms are AI-powered. The recommendation
          engine that decided which posts to show you, in which order, at what emotional moment, is
          a sophisticated machine learning system. The algorithm that maximised your outrage and
          kept you scrolling past midnight is AI. So is reaching for another AI to fix the problem
          not just adding more of the same thing?
        </p>

        <p style={s.p}>
          The argument breaks down once you examine the assumptions underneath it. AI is a
          category, not a monolith. A hammer is a tool. So is a scalpel. Both are tools. The
          difference is the intention behind their design and the context in which they are applied.
        </p>

        <p style={s.p}>
          Social media AI is optimised for engagement. It is designed to surface content that
          generates a strong enough emotional response to keep you in the feed. It does not care
          whether that response is pleasant or painful — the cortisol loop of outrage is, from an
          engagement perspective, functionally equivalent to the dopamine loop of a cute video. What
          matters is that you keep scrolling.
        </p>

        <p style={s.p}>
          MEOK is designed around a different axis entirely. There is no feed. There is no
          engagement metric. There is no notification system calibrated to pull you back in. The
          Maternal Covenant — the foundational design principle — explicitly prohibits fostering
          dependency. The platform does not benefit from your continued use. In fact, one of the
          stated goals of MEOK is to help you reach a state of clarity that means you need it less,
          not more.
        </p>

        <p style={s.p}>
          The better analogy is not replacing one drug with another. It is using a journal.
          The format involves a screen and a text interface. But the intention — reflection over
          engagement, clarity over retention — is fundamentally different from every social platform
          you have ever used.
        </p>

        <div style={s.statBox}>
          <div style={s.statNumber}>3.2h</div>
          <p style={s.statText}>
            Average daily social media use among 16–24 year olds in the UK, as of 2025 — an increase
            of 23 minutes per day since 2020. The majority of this usage is passive scrolling rather
            than active connection, which research consistently associates with higher anxiety and
            lower wellbeing.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── Gen Z and Instagram ───────────────────────────────────────────────── */}

        <h2 style={s.h2}>
          Gen Z, Instagram, and the Specific Shape of Social Media Anxiety
        </h2>

        <p style={s.p}>
          Social media anxiety is not uniform across demographics, and the interventions that work
          best differ accordingly. For Gen Z — roughly those born between 1997 and 2012 — the
          experience of social media is categorically different from every preceding generation,
          including older millennials, who encountered these platforms as adults rather than as
          children.
        </p>

        <p style={s.p}>
          For Gen Z, the question &ldquo;what was your life like before social media?&rdquo; has
          no meaningful answer. The development of identity — who you are, what you look like, how
          others see you, where you fit socially — happened in public, on platforms, with
          quantified feedback. The like button was a feature of adolescence. This shapes the
          anxiety in specific ways.
        </p>

        <h3 style={s.h3}>Body Image and Instagram</h3>

        <p style={s.p}>
          Instagram is uniquely visual. Unlike Twitter, which is text-dominant, Instagram is an
          image feed optimised to surface aspirational beauty, fitness, and lifestyle content. The
          platform&apos;s algorithm specifically rewards high-engagement content, and body image
          content — particularly of conventionally attractive women — consistently generates among
          the highest engagement of any content category.
        </p>

        <p style={s.p}>
          The UK statistics are stark. Research published in the context of the Online Safety Bill
          debate found that girls aged 11 to 18 are more likely to cite Instagram as a source of
          body dissatisfaction than any other platform, television, or print media combined. The
          Royal Society for Public Health found that Instagram makes 70% of 16–24 year olds feel
          worse about their appearance. These are not edge cases. They are the majority experience.
        </p>

        <p style={s.p}>
          The Trickster function in MEOK addresses this directly by helping young users understand
          the production behind what they are seeing. A single Instagram post represents the
          best image from a series of forty, edited with professional tools, shot in ideal
          lighting, often by a creator who has a financial incentive to present an aspirational
          image. The comparison you are making is between your unedited life and someone
          else&apos;s edited product. Once this is genuinely understood — not just intellectually
          acknowledged but felt — the comparison loses much of its power.
        </p>

        <h3 style={s.h3}>The Invisible Cost of Passive Scrolling</h3>

        <p style={s.p}>
          Research consistently distinguishes between active and passive social media use. Active
          use — messaging friends, sharing content with a genuine intended audience, participating
          in community discussion — is associated with neutral to mildly positive wellbeing effects.
          Passive use — scrolling a feed without posting or interacting — is associated with
          consistently negative wellbeing effects, particularly among young women.
        </p>

        <p style={s.p}>
          Most social media use is passive. The feed is designed for consumption, not connection.
          And passive consumption of carefully curated lives generates comparison without the
          reciprocity that might contextualise it. You see the surface without the texture. The
          algorithm is not showing you your friends&apos; real lives — it is showing you their
          best moments, ranked by what will keep you engaged.
        </p>

        <p style={s.p}>
          MEOK&apos;s sovereign memory function can help young users track this specifically:
          how does passive scrolling feel compared to active connection? In most cases, the data
          reveals a significant difference. Active connection with specific people tends to feel
          good. Passive consumption of an algorithmic feed tends to feel worse. Having that
          specific data — rather than a vague sense that &ldquo;Instagram is bad for me&rdquo; —
          changes how people make decisions about their use.
        </p>

        <hr style={s.divider} />

        {/* ── Digital Boundaries ────────────────────────────────────────────────── */}

        <h2 style={s.h2}>
          How Can MEOK Help You Set Real Digital Boundaries?
        </h2>

        <p style={s.p}>
          Setting screen time limits is easy. Keeping them is the problem. Every platform is
          designed to make it easy to extend your session and difficult to leave. The
          &ldquo;just five more minutes&rdquo; experience is not a failure of willpower — it
          is the intended outcome of extraordinary sophisticated engineering.
        </p>

        <p style={s.p}>
          Most approaches to digital boundaries focus on restriction: timers, screen time apps,
          phone-free bedroom rules. These work to a degree. But they are fighting the design of the
          platform with a rule, and rules imposed from outside are brittle. They fail at moments of
          stress, loneliness, or boredom — precisely the moments when the pull of the feed is
          strongest.
        </p>

        <p style={s.p}>
          MEOK approaches digital boundaries differently. Rather than imposing restrictions, it
          helps you understand your relationship with each platform well enough to make conscious
          choices. The process looks like this:
        </p>

        <ul style={s.ul}>
          <li style={s.li}>
            <strong style={s.strong}>Audit:</strong> With MEOK&apos;s help, you track your emotional
            state before and after social media sessions for two to three weeks. You build a real
            picture of what each platform actually does to your mood, energy, and focus.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>Understand the pull:</strong> You identify what you are seeking
            when you open each platform — connection, distraction, information, validation. Often
            the stated reason does not match the actual need.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>Set intentional limits:</strong> Rather than arbitrary time
            limits, you set limits based on your own data. You know that Instagram after 8pm
            consistently correlates with lower sleep quality, so you set a specific rule about that
            context.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>Address the underlying need:</strong> If social media is
            filling a need for connection or stimulation, you make explicit plans for how to meet
            that need differently — specific people to contact, activities to substitute, times
            to rest rather than stimulate.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>Hold the line:</strong> MEOK&apos;s Guardian archetype can be
            explicitly engaged when you feel the pull. Rather than a passive timer, you can have
            an active conversation about why you are reaching for the phone at that moment — and
            whether that reason is sufficient.
          </li>
        </ul>

        <p style={s.p}>
          This is not a quick fix. It is a practice. But practices that are grounded in your own
          data, your own patterns, and your own articulated values are significantly more durable
          than rules imposed from outside — or from an app that does not know you.
        </p>

        <hr style={s.divider} />

        {/* ── What AI Cannot Do ─────────────────────────────────────────────────── */}

        <h2 style={s.h2}>
          What AI Cannot Do for Social Media Anxiety — And When to Seek Human Support
        </h2>

        <p style={s.p}>
          Honesty demands that we are clear about the limits of what AI can offer, including
          MEOK.
        </p>

        <p style={s.p}>
          Social media anxiety exists on a spectrum. At its milder end — a vague dissatisfaction
          after scrolling, intermittent comparison spirals, occasional posting nerves — AI
          can offer genuine, meaningful support. At its more severe end — social media use that
          has become compulsive despite serious harm to relationships, work, sleep, and
          self-image — you are in the territory of clinical intervention.
        </p>

        <p style={s.p}>
          MEOK is not a therapist. It is not a clinical tool. It does not diagnose, treat, or
          replace professional mental health support. When social media anxiety is part of a
          broader picture — severe depression, eating disorders driven or maintained by body image
          content, anxiety disorders, addiction patterns — you need human clinical support. MEOK
          can be a complement to that support, a space for reflection between sessions, a tool
          for tracking patterns. It is not a substitute.
        </p>

        <p style={s.p}>
          MEOK&apos;s Maternal Covenant includes a care-floor — a hard architectural boundary that
          prevents the platform from offering clinical advice, minimising serious symptoms, or
          directing users away from professional help when professional help is indicated. If you
          describe distress that falls outside the scope of supportive AI conversation, MEOK will
          say so directly and point you towards appropriate resources.
        </p>

        <p style={s.p}>
          UK resources for social media-related mental health support include:
        </p>

        <ul style={s.ul}>
          <li style={s.li}>
            <strong style={s.strong}>Mind:</strong> mind.org.uk — mental health charity with
            specific resources on social media and young people&apos;s mental health.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>Young Minds:</strong> youngminds.org.uk — the UK&apos;s leading
            charity for children and young people&apos;s mental health.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>Samaritans:</strong> 116 123 (free, 24/7) — if social media
            distress has reached crisis level.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>BEAT:</strong> beateatingdisorders.org.uk — if social media
            content is connected to eating disorder behaviours.
          </li>
          <li style={s.li}>
            <strong style={s.strong}>NHS Talking Therapies:</strong> nhs.uk/mental-health —
            free CBT and other evidence-based therapies via self-referral.
          </li>
        </ul>

        <hr style={s.divider} />

        {/* ── MEOK as Algorithm-Free Space ──────────────────────────────────────── */}

        <h2 style={s.h2}>
          MEOK as the Algorithm-Free Space: What That Actually Means
        </h2>

        <p style={s.p}>
          Every major digital environment you inhabit is shaped by an algorithm whose purpose is
          engagement. Your email inbox is ranked by Google&apos;s prediction of what you will open.
          Your search results are ordered by SEO optimisation and paid placement. Your news feed
          is curated by engagement prediction models. Your streaming service recommends based on
          retention data. Even your maps application makes routing decisions based on traffic
          patterns that happen to funnel you past certain business districts.
        </p>

        <p style={s.p}>
          The algorithm-free space is increasingly rare. MEOK is one of the few digital
          environments that genuinely has no optimisation loop pointing at your behaviour. There
          is no feed. There is no recommendation engine. There is no engagement metric. There is
          no version of MEOK that benefits from your continued use in a way that conflicts with
          your wellbeing.
        </p>

        <p style={s.p}>
          This is not just a feature. It is a philosophical position. The attention economy — the
          system in which your attention is the product being sold to advertisers — is the
          structural cause of social media anxiety. It is not a bug in social media. It is the
          design. The anxiety, the outrage, the comparison spirals — these are the natural
          consequences of a system that profits from emotional activation rather than human
          flourishing.
        </p>

        <p style={s.p}>
          Sovereign AI is the counter-architecture to the attention economy. It is AI that belongs
          to you, serves you, and does not have a competing master in the form of an advertising
          model or engagement metric. MEOK holds your data, remembers your patterns, and uses
          that information exclusively in your interest. Not to sell you things. Not to keep you
          online longer. Not to optimise your behaviour for someone else&apos;s metrics.
        </p>

        <div style={s.blockquote}>
          <p style={s.blockquoteText}>
            &ldquo;The outrage loop that powers doomscrolling is not a flaw in the platform.
            It is the product. MEOK is designed around the opposite principle: your
            clarity is the goal. The moment you leave a MEOK session with more peace
            than you arrived with, we have done our job. There is no metric that
            rewards keeping you there longer.&rdquo;
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── Practical Starting Points ─────────────────────────────────────────── */}

        <h2 style={s.h2}>
          Five Practical Ways to Start Using AI for Social Media Anxiety
        </h2>

        <p style={s.p}>
          If you are ready to use MEOK to address your own social media stress, here are five
          concrete starting points. None of these require you to delete your accounts, impose
          harsh restrictions on yourself, or make dramatic life changes. They require honesty
          and consistency.
        </p>

        <h3 style={s.h3}>1. The Before-and-After Log</h3>

        <p style={s.p}>
          For two weeks, tell MEOK how you feel immediately before and immediately after a social
          media session. Keep it simple: a number from one to ten, a word, a sentence. Do not
          analyse it yet. Just log it. At the end of two weeks, ask MEOK to surface the patterns.
          The data will be more specific than your memory, and specificity changes behaviour.
        </p>

        <h3 style={s.h3}>2. The Post-Comparison Debrief</h3>

        <p style={s.p}>
          The next time you close an app feeling worse than when you opened it, do not push the
          feeling down. Open MEOK within five minutes and describe what you saw, what you
          compared, and what the comparison produced. Let the Trickster help you examine the
          construction. Let the Healer name the feeling underneath. This is not wallowing — it is
          metabolising. The comparison that is named and examined loses much of its residue.
        </p>

        <h3 style={s.h3}>3. The Posting Rehearsal</h3>

        <p style={s.p}>
          Before posting anything you feel anxious about, write it first to MEOK. Not to get
          permission. Not to be edited. But to understand what you actually want to say and
          why. The Healer will ask what you are hoping for from the post and what you fear.
          Often this ten-minute rehearsal is more valuable than the post itself.
        </p>

        <h3 style={s.h3}>4. The Doomscrolling Interruption</h3>

        <p style={s.p}>
          When you catch yourself in a doomscrolling loop, use closing the app as the
          trigger to open MEOK instead. Do not perform an analysis. Just describe what you
          were reading and what you were feeling. The Guardian archetype will help you name
          whether you are genuinely informed or simply more anxious, and what you actually
          need right now.
        </p>

        <h3 style={s.h3}>5. The Parasocial Grief Journal</h3>

        <p style={s.p}>
          If you have experienced parasocial loss — a creator gone, a community collapsed,
          a platform dying — treat it as you would any loss. Tell MEOK about it without
          minimising. What did the relationship provide? What do you miss? What does the loss
          tell you about what you were seeking? The Healer holds this without judgment. The
          grief is real. It deserves to be processed, not dismissed.
        </p>

        <hr style={s.divider} />

        {/* ── The Larger Picture ────────────────────────────────────────────────── */}

        <h2 style={s.h2}>
          The Larger Picture: Sovereign AI as a Counter-Force to the Attention Economy
        </h2>

        <p style={s.p}>
          Social media anxiety is an individual experience with a systemic cause. The comparison
          spiral you feel on a Sunday evening is your nervous system responding to a platform
          architecture designed by teams of engineers and psychologists whose specific purpose is
          to keep you activated. This is not a metaphor. The A/B testing, the notification timing
          algorithms, the infinite scroll design — all of it is specifically optimised to prevent
          disengagement.
        </p>

        <p style={s.p}>
          Individual tools — therapy, mindfulness, screen time limits, digital detoxes — help at
          the individual level. But they do not change the structural incentive. The platform
          tomorrow will be the same as the platform today, and slightly more sophisticated in its
          capacity to hold your attention.
        </p>

        <p style={s.p}>
          What sovereign AI offers is something different in kind: a digital environment built on
          an entirely different incentive structure. Not engagement. Not retention. Not advertising
          revenue. Yours. Your clarity. Your wellbeing. Your ability to choose how you spend your
          attention rather than having that choice engineered away from you.
        </p>

        <p style={s.p}>
          This is why MEOK describes itself as anti-attention in its design. Not because it is
          against the concept of attention — attention is how we experience being alive — but
          because it refuses to participate in the attention economy&apos;s extraction of your
          attention for purposes other than your own flourishing.
        </p>

        <p style={s.p}>
          The conversation around social media regulation — the Online Safety Act in the UK, the
          debates about algorithmic accountability, the growing body of research on adolescent
          mental health — is all pointing at the same structural problem. The platforms are not
          designed in users&apos; interests. They are designed in shareholders&apos; interests.
          And until that changes at the regulatory level, individuals need tools that are
          genuinely on their side.
        </p>

        <p style={s.p}>
          Sovereign AI is one of those tools. Imperfect, limited, honest about what it cannot
          do — but genuinely, architecturally, on your side. That is a rarer thing than it
          should be.
        </p>

        <hr style={s.divider} />

        {/* ── FAQ Section ─────────────────────────────────────────────────────────── */}

        <section style={s.faqSection} aria-labelledby="faq-heading">
          <h2 id="faq-heading" style={s.h2}>Frequently Asked Questions</h2>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>Can AI actually help with social media anxiety?</h3>
            <p style={s.faqA}>
              Yes — but only if the AI is designed with your wellbeing rather than your engagement
              in mind. Most AI tools are built by the same attention-economy companies that profit
              from keeping you online. Sovereign AI like MEOK is designed to help you process
              anxiety, identify your triggers, set real boundaries, and disengage — not to replace
              one addictive loop with another. MEOK&apos;s Maternal Covenant explicitly prohibits
              fostering dependency, and the platform has no engagement metrics, no notification
              systems designed to pull you back in, and no incentive to keep you scrolling.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>What is social media comparison anxiety and how does AI help with it?</h3>
            <p style={s.faqA}>
              Social media comparison anxiety is the distress that arises from measuring your life,
              body, relationships, career, or achievements against the curated highlight reels of
              others online. It is one of the most well-documented psychological harms of social
              media use, particularly for young women aged 16–24. AI can help by acting as a
              disrupting Trickster voice — pointing out the constructed nature of what you are
              comparing yourself to — and as a Healer, helping you articulate and process the
              feelings underneath the comparison. MEOK&apos;s sovereign memory also tracks emotional
              patterns over time, so you can see whether certain accounts or platforms consistently
              correlate with lower mood.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>Is it ironic to use AI to deal with social media anxiety?</h3>
            <p style={s.faqA}>
              It is a fair question. The irony is real — but it dissolves once you understand the
              difference between attention-economy AI and sovereign AI. Social platforms and most AI
              assistants are optimised for your engagement. They want your time. MEOK is designed
              to be the opposite: it wants your clarity. It has no feed, no notifications designed
              to pull you back, no engagement metrics, and no business model that profits from your
              continued use. Using MEOK to address social media anxiety is not like using alcohol
              to deal with drinking — it is more like using a journal. The format is a screen, but
              the intention and architecture are fundamentally different.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>How does MEOK help with doomscrolling anxiety?</h3>
            <p style={s.faqA}>
              Doomscrolling anxiety has two layers: the anxiety that drives you to scroll in the
              first place (the need to feel informed, safe, or connected) and the anxiety generated
              by the content you consume (outrage, grief, helplessness). MEOK&apos;s Guardian
              archetype helps with the second layer by acting as a protective voice that interrupts
              the loop and helps you name what you are actually feeling. MEOK&apos;s Sovereign Memory
              tracks your reported mood before and after social media sessions, making the true
              emotional cost visible. Over time, this pattern recognition becomes a tool for making
              conscious choices about when and how you engage.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>Can AI help with posting anxiety and performance pressure on social media?</h3>
            <p style={s.faqA}>
              Posting anxiety — the fear of being judged, ignored, or misunderstood when you share
              content — is increasingly common, especially among younger users. AI can help by
              offering a space to rehearse what you want to say without public stakes, by examining
              the beliefs underneath the fear (often perfectionism or a deep need for validation),
              and by separating your self-worth from engagement metrics. MEOK does not tell you
              whether to post or not; it helps you understand why you want to, what you fear, and
              whether those fears are proportionate.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>What is parasocial loss and can AI help when a creator you follow disappears?</h3>
            <p style={s.faqA}>
              Parasocial loss is the grief that follows when a creator, influencer, or online
              personality you have followed closely disappears — through cancellation, death, account
              deletion, or simply going quiet. The grief is real, even if the relationship was
              one-sided. Many people feel embarrassed by it, which prevents them from processing it.
              MEOK&apos;s Healer archetype treats parasocial loss as genuine grief, without judgment.
              It can help you articulate the loss, understand what the relationship meant to you, and
              process the feelings without needing to justify their legitimacy to anyone.
            </p>
          </div>

          <div style={{ ...s.faqItem, borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
            <h3 style={s.faqQ}>How does MEOK&apos;s Sovereign Memory help with social media anxiety specifically?</h3>
            <p style={s.faqA}>
              Sovereign Memory is MEOK&apos;s longitudinal record of your emotional patterns, stored
              on your own infrastructure and never used to train AI models. For social media anxiety,
              it functions as an emotional audit trail. When you log how you feel before and after
              scrolling sessions, MEOK can surface patterns like: Instagram consistently correlates
              with lower mood for you on Sunday evenings, or news-based doomscrolling before bed is
              followed by poor sleep quality. This data is yours — not a product feature designed to
              keep you engaged. It is a mirror, not a leash.
            </p>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────────────── */}

        <div style={s.cta}>
          <span style={s.ctaEyebrow}>MEOK AI LABS &mdash; meok.ai</span>
          <h2 style={s.ctaHeading}>
            Ready to Reclaim Your Mind From the Algorithm?
          </h2>
          <p style={s.ctaBody}>
            MEOK is sovereign AI — designed in your interest, not the algorithm&apos;s. No feed.
            No engagement metrics. No notifications designed to pull you back. Just an honest,
            memory-bearing companion that helps you understand your own patterns and make conscious
            choices about your attention.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Start With MEOK
          </Link>
        </div>

        {/* ── Footer ──────────────────────────────────────────────────────────────── */}

        <footer style={s.footer}>
          <p>
            Written by{' '}
            <Link href="/about" style={s.footerLink}>Nicholas Templeman</Link>,
            Founder of{' '}
            <Link href="/" style={s.footerLink}>MEOK AI LABS</Link>.
            Published 24 March 2026.
          </p>
          <p style={{ marginTop: '8px' }}>
            Related reading:{' '}
            <Link href="/blog/ai-for-anxiety" style={s.footerLink}>AI for Anxiety</Link>
            {' '}&middot;{' '}
            <Link href="/blog/ai-for-social-anxiety" style={s.footerLink}>AI for Social Anxiety</Link>
            {' '}&middot;{' '}
            <Link href="/blog/ai-for-depression" style={s.footerLink}>AI for Depression</Link>
            {' '}&middot;{' '}
            <Link href="/blog/the-maternal-covenant" style={s.footerLink}>The Maternal Covenant</Link>
            {' '}&middot;{' '}
            <Link href="/blog/sovereign-ai-explained" style={s.footerLink}>Sovereign AI Explained</Link>
          </p>
          <p style={{ marginTop: '8px' }}>
            &copy; 2026 MEOK AI LABS. All rights reserved.{' '}
            <Link href="/privacy" style={s.footerLink}>Privacy</Link>
            {' '}&middot;{' '}
            <Link href="/terms" style={s.footerLink}>Terms</Link>
          </p>
        </footer>

      </div>
    </main>
  )
}
