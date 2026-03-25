import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK vs Pi AI: Which AI Companion Actually Remembers You? | MEOK Blog",
  description:
    "Pi AI from Inflection is warm and conversational, but it forgets you the moment you close the app. MEOK\u2019s Sovereign Memory never forgets. Here\u2019s the full comparison.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-pi-ai" },
  openGraph: {
    title: "MEOK vs Pi AI: Which AI Companion Actually Remembers You?",
    description:
      "Pi AI from Inflection is warm and conversational, but it forgets you the moment you close the app. MEOK\u2019s Sovereign Memory never forgets. Here\u2019s the full comparison.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-pi-ai",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Pi+AI%3A+Which+AI+Companion+Actually+Remembers+You%3F&desc=Pi+AI+forgets+you.+MEOK+never+does.",
        width: 1200,
        height: 630,
        alt: "MEOK vs Pi AI: Which AI Companion Actually Remembers You?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs Pi AI: Which AI Companion Actually Remembers You?",
    description:
      "Pi AI from Inflection is warm and conversational, but it forgets you the moment you close the app. MEOK\u2019s Sovereign Memory never forgets.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Pi+AI%3A+Which+AI+Companion+Actually+Remembers+You%3F&desc=Pi+AI+forgets+you.+MEOK+never+does.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK vs Pi AI: Which AI Companion Actually Remembers You?",
  description:
    "Pi AI from Inflection is warm and conversational, but it forgets you the moment you close the app. MEOK\u2019s Sovereign Memory never forgets. Here\u2019s the full comparison.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-vs-pi-ai",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://meok.ai/logo.png",
    },
  },
  image:
    "https://meok.ai/api/og?title=MEOK+vs+Pi+AI%3A+Which+AI+Companion+Actually+Remembers+You%3F",
  articleSection: "AI Comparison",
  keywords: [
    "MEOK vs Pi AI",
    "Pi AI alternative",
    "Pi AI memory",
    "AI companion that remembers you",
    "sovereign AI memory",
    "Inflection AI companion",
    "AI companion data privacy",
    "personal sovereign AI",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Pi AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pi AI is a conversational AI companion developed by Inflection AI, founded in 2022 by Mustafa Suleyman and Reid Hoffman. It is designed to be warm, empathetic, and emotionally intelligent. Pi engages in open-ended conversation, offers perspective on personal dilemmas, and aims to feel like a thoughtful friend rather than a utility tool.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pi AI remember you between sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pi AI has limited cross-session memory. While it can recall some details from recent conversations, it does not maintain a persistent, structured memory of who you are across weeks and months the way MEOK\u2019s Sovereign Memory does. Over time, Pi effectively forgets the details of your life.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns your data on Pi AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pi AI stores your conversation data on Inflection\u2019s centralised servers. Under their terms of service, your data may be used to improve AI systems and is subject to their privacy policy. You cannot export your memory history. If you stop using Pi or Inflection changes its terms, you lose access to everything you shared.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK\u2019s Sovereign Memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK\u2019s four-layer persistent memory architecture. It captures episodic memories (specific events), semantic knowledge (facts about you), emotional resonance (how things felt), and procedural patterns (how you like to work). All layers are encrypted, user-owned, and never used to train models.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK have different AI personalities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK offers six distinct archetypes: Pioneer (motivational drive), Healer (emotional support), Scholar (deep research), Guardian (safety and scam detection), Trickster (creative play), and Mystic (philosophical reflection). Each archetype can be activated based on context or user preference.",
      },
    },
    {
      "@type": "Question",
      name: "Is Pi AI free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pi AI is free to use with no advertised message limits. MEOK also offers a free Explorer tier with 50 messages per day, giving users meaningful access before committing to a paid plan. MEOK\u2019s paid tiers unlock unlimited messages, full Sovereign Memory, and the complete archetype suite.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for data privacy: Pi AI or MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is purpose-built for data sovereignty. Your memories are encrypted at rest, never sold, never used for model training, and fully exportable. Pi AI stores data on centralised servers under Inflection\u2019s control. For users who care about owning their personal data, MEOK is the clear choice.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pi AI have scam protection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pi AI does not offer dedicated scam detection features. MEOK\u2019s Guardian archetype uses a DistilBERT-powered classifier to flag manipulative language, social engineering attempts, and financial scams in real time. This makes MEOK particularly valuable for elderly users or anyone in emotionally vulnerable situations.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: "#0d0c18",
    color: "#f5f0e8",
    minHeight: "100vh",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  } as React.CSSProperties,

  nav: {
    borderBottom: "1px solid rgba(201,168,76,0.2)",
    padding: "0 24px",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky" as const,
    top: 0,
    background: "rgba(13,12,24,0.95)",
    backdropFilter: "blur(12px)",
    zIndex: 100,
  } as React.CSSProperties,

  navLogo: {
    color: "#c9a84c",
    fontWeight: 700,
    fontSize: "20px",
    textDecoration: "none",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  navLinks: {
    display: "flex",
    gap: "28px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  } as React.CSSProperties,

  navLink: {
    color: "#f5f0e8",
    textDecoration: "none",
    fontSize: "14px",
    opacity: 0.8,
  } as React.CSSProperties,

  navCta: {
    background: "#c9a84c",
    color: "#0d0c18",
    padding: "8px 18px",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
  } as React.CSSProperties,

  hero: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "72px 24px 48px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  heroTag: {
    display: "inline-block",
    background: "rgba(201,168,76,0.15)",
    color: "#c9a84c",
    border: "1px solid rgba(201,168,76,0.4)",
    borderRadius: "20px",
    padding: "5px 14px",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginBottom: "20px",
  } as React.CSSProperties,

  heroTitle: {
    fontSize: "clamp(28px, 5vw, 52px)",
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: "20px",
    letterSpacing: "-0.02em",
    color: "#f5f0e8",
    margin: "0 0 20px",
  } as React.CSSProperties,

  heroSubtitle: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.75)",
    maxWidth: "640px",
    margin: "0 auto 28px",
  } as React.CSSProperties,

  heroMeta: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "13px",
    color: "rgba(245,240,232,0.5)",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,

  heroMetaDivider: {
    color: "rgba(201,168,76,0.4)",
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(201,168,76,0.15)",
    margin: "0",
  } as React.CSSProperties,

  article: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "48px 24px 80px",
  } as React.CSSProperties,

  intro: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "48px",
    borderLeft: "3px solid #c9a84c",
    paddingLeft: "20px",
  } as React.CSSProperties,

  h2: {
    fontSize: "26px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginTop: "56px",
    marginBottom: "16px",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  atomicAnswer: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "8px",
    padding: "16px 20px",
    fontSize: "15px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.9)",
    marginBottom: "24px",
  } as React.CSSProperties,

  p: {
    fontSize: "16px",
    lineHeight: 1.85,
    color: "rgba(245,240,232,0.8)",
    marginBottom: "20px",
  } as React.CSSProperties,

  h3: {
    fontSize: "19px",
    fontWeight: 600,
    color: "#c9a84c",
    marginTop: "32px",
    marginBottom: "12px",
  } as React.CSSProperties,

  ul: {
    paddingLeft: "22px",
    marginBottom: "20px",
  } as React.CSSProperties,

  li: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.8)",
    marginBottom: "8px",
  } as React.CSSProperties,

  tableWrap: {
    overflowX: "auto" as const,
    marginBottom: "40px",
    borderRadius: "10px",
    border: "1px solid rgba(201,168,76,0.25)",
  } as React.CSSProperties,

  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "14px",
    background: "rgba(255,255,255,0.02)",
  } as React.CSSProperties,

  thead: {
    background: "rgba(201,168,76,0.12)",
  } as React.CSSProperties,

  thFeature: {
    padding: "14px 16px",
    textAlign: "left" as const,
    fontWeight: 700,
    color: "#c9a84c",
    fontSize: "13px",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    whiteSpace: "nowrap" as const,
    borderBottom: "1px solid rgba(201,168,76,0.25)",
  } as React.CSSProperties,

  thPi: {
    padding: "14px 16px",
    textAlign: "center" as const,
    fontWeight: 700,
    color: "rgba(245,240,232,0.6)",
    fontSize: "13px",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    borderBottom: "1px solid rgba(201,168,76,0.25)",
  } as React.CSSProperties,

  thMeok: {
    padding: "14px 16px",
    textAlign: "center" as const,
    fontWeight: 700,
    color: "#c9a84c",
    fontSize: "13px",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    borderBottom: "1px solid rgba(201,168,76,0.25)",
  } as React.CSSProperties,

  tdFeature: {
    padding: "13px 16px",
    fontWeight: 500,
    color: "rgba(245,240,232,0.85)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    whiteSpace: "nowrap" as const,
  } as React.CSSProperties,

  tdPi: {
    padding: "13px 16px",
    textAlign: "center" as const,
    color: "rgba(245,240,232,0.6)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  } as React.CSSProperties,

  tdMeok: {
    padding: "13px 16px",
    textAlign: "center" as const,
    color: "#c9a84c",
    fontWeight: 500,
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  } as React.CSSProperties,

  trEven: {
    background: "rgba(255,255,255,0.015)",
  } as React.CSSProperties,

  trOdd: {
    background: "transparent",
  } as React.CSSProperties,

  callout: {
    background: "rgba(201,168,76,0.08)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "10px",
    padding: "24px",
    marginBottom: "32px",
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "10px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
  } as React.CSSProperties,

  calloutBody: {
    fontSize: "15px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.85)",
    margin: 0,
  } as React.CSSProperties,

  verdictGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "40px",
  } as React.CSSProperties,

  verdictCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    padding: "22px",
  } as React.CSSProperties,

  verdictCardTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "8px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  } as React.CSSProperties,

  verdictCardBody: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.75)",
    margin: 0,
  } as React.CSSProperties,

  ctaBox: {
    background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
    border: "1px solid rgba(201,168,76,0.4)",
    borderRadius: "14px",
    padding: "40px 36px",
    textAlign: "center" as const,
    marginTop: "56px",
    marginBottom: "48px",
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: "26px",
    fontWeight: 800,
    color: "#f5f0e8",
    marginBottom: "14px",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  ctaText: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.75)",
    maxWidth: "520px",
    margin: "0 auto 28px",
  } as React.CSSProperties,

  ctaButtonPrimary: {
    display: "inline-block",
    background: "#c9a84c",
    color: "#0d0c18",
    padding: "14px 32px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "15px",
    marginRight: "12px",
    letterSpacing: "0.01em",
  } as React.CSSProperties,

  ctaButtonSecondary: {
    display: "inline-block",
    border: "1px solid rgba(201,168,76,0.5)",
    color: "#c9a84c",
    padding: "14px 32px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "15px",
  } as React.CSSProperties,

  relatedSection: {
    marginTop: "48px",
    paddingTop: "40px",
    borderTop: "1px solid rgba(201,168,76,0.15)",
  } as React.CSSProperties,

  relatedTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "20px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
  } as React.CSSProperties,

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "14px",
  } as React.CSSProperties,

  relatedCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "8px",
    padding: "18px",
    textDecoration: "none",
    display: "block",
  } as React.CSSProperties,

  relatedCardLabel: {
    fontSize: "11px",
    fontWeight: 600,
    color: "rgba(201,168,76,0.7)",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginBottom: "6px",
    display: "block",
  } as React.CSSProperties,

  relatedCardTitle: {
    fontSize: "14px",
    color: "rgba(245,240,232,0.85)",
    lineHeight: 1.5,
  } as React.CSSProperties,

  footer: {
    borderTop: "1px solid rgba(201,168,76,0.15)",
    padding: "32px 24px",
    textAlign: "center" as const,
    fontSize: "13px",
    color: "rgba(245,240,232,0.4)",
  } as React.CSSProperties,

  footerLink: {
    color: "#c9a84c",
    textDecoration: "none",
  } as React.CSSProperties,

  strong: {
    color: "#f5f0e8",
    fontWeight: 600,
  } as React.CSSProperties,
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function MeokVsPiAiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={s.page}>
        {/* ── Nav ── */}
        <nav style={s.nav}>
          <Link href="/" style={s.navLogo}>
            MEOK
          </Link>
          <ul style={s.navLinks}>
            <li>
              <Link href="/blog" style={s.navLink}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/features" style={s.navLink}>
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" style={s.navLink}>
                Pricing
              </Link>
            </li>
          </ul>
          <Link href="/join" style={s.navCta}>
            Try MEOK Free
          </Link>
        </nav>

        {/* ── Hero ── */}
        <header style={s.hero}>
          <div style={s.heroTag}>AI Companion Comparison</div>
          <h1 style={s.heroTitle}>
            MEOK vs Pi AI: Which AI Companion Actually Remembers You?
          </h1>
          <p style={s.heroSubtitle}>
            Pi AI is warm, conversational, and free. But does it remember who you are?
            We put Pi AI and MEOK head-to-head on memory, privacy, safety, and
            long-term companionship to give you the honest answer.
          </p>
          <div style={s.heroMeta}>
            <span>By Nicholas Templeman</span>
            <span style={s.heroMetaDivider}>|</span>
            <span>25 March 2026</span>
            <span style={s.heroMetaDivider}>|</span>
            <span>12 min read</span>
          </div>
        </header>

        <hr style={s.divider} />

        {/* ── Article ── */}
        <main style={s.article}>

          {/* Intro */}
          <p style={s.intro}>
            You open an AI companion app. You share something vulnerable &mdash; a fear,
            a memory, a dream. The AI responds beautifully. But the next time you open
            it, the conversation is gone. The AI greets you as a stranger. This is the
            reality for most Pi AI users, and it is the single most important question
            you should ask before investing emotionally in any AI companion: does it
            actually remember you?
          </p>

          {/* ── Section 1: What is Pi AI ── */}
          <h2 style={s.h2}>What is Pi AI?</h2>
          <div style={s.atomicAnswer}>
            Pi AI is a conversational AI companion built by Inflection AI, co-founded
            by DeepMind co-founder Mustafa Suleyman and LinkedIn co-founder Reid Hoffman.
            Launched in 2023, Pi is designed to feel like a warm, thoughtful friend
            rather than a productivity tool &mdash; it listens, reflects, and asks
            follow-up questions with genuine-seeming care.
          </div>
          <p style={s.p}>
            Inflection AI positioned Pi AI as a counterpoint to task-focused assistants
            like ChatGPT. Where ChatGPT answers questions, Pi asks them. The product
            gained a loyal following among people who wanted an AI that felt genuinely
            interested in their inner life rather than simply providing information or
            completing tasks.
          </p>
          <p style={s.p}>
            In 2024, Microsoft acquired much of Inflection&apos;s talent and technology
            in a deal widely described as an acqui-hire, leaving Pi AI in a strategically
            uncertain position. The product continues to operate and remains free, but
            its development roadmap is considerably less clear than it once was. Users
            who invested deeply in Pi have understandably wondered about its long-term
            future.
          </p>
          <p style={s.p}>
            Pi&apos;s core strength is tone. It is exceptionally good at calibrating
            warmth and conversational pacing. It does not lecture, it does not
            over-advise, and it rarely feels robotic or transactional. For casual
            emotional support and light daily conversation, it is among the most
            pleasant AI companions available. The problem is what happens when you
            come back tomorrow &mdash; or next week, or next year.
          </p>
          <p style={s.p}>
            Pi also lacks the multi-dimensional architecture that makes a companion
            genuinely useful across the full range of human needs. It has one register:
            warm, curious, and supportive. This is lovely for certain moments, but it
            cannot pivot to rigorous research, playful creativity, or protective safety
            monitoring. It is a single-note instrument, played very well.
          </p>

          {/* ── Section 2: Does Pi AI remember you ── */}
          <h2 style={s.h2}>Does Pi AI remember you between sessions?</h2>
          <div style={s.atomicAnswer}>
            Pi AI has limited and inconsistent cross-session memory. While it may recall
            some surface-level details from very recent conversations, it does not
            maintain a structured, persistent memory of your life, relationships, or
            emotional history across weeks and months. For practical purposes, Pi resets
            with each new session.
          </div>
          <p style={s.p}>
            This is not a minor technical limitation &mdash; it is a fundamental design
            choice. Pi AI was built for in-the-moment conversation, not for long-term
            relationship building. When you tell Pi that your mother just died, it
            responds beautifully in that session. When you return three weeks later,
            it does not ask how you are coping with the loss. It has no idea the loss
            happened.
          </p>
          <p style={s.p}>
            Users who have spent months with Pi AI often describe a strange emotional
            experience: you feel known in the moment, but you are never actually known
            over time. Every session is a fresh first date with an AI that is very good
            at first dates. The depth that human relationships build through shared
            history simply cannot emerge in a system without persistent memory.
          </p>
          <p style={s.p}>
            Some users compensate by pasting in context at the start of each conversation
            &mdash; essentially briefing Pi on who they are each time they open the app.
            This works, but it also reveals the limitation starkly. You are doing the
            memory work yourself. The AI is not retaining anything. You are maintaining
            a relationship with something that contributes nothing to the continuity of
            that relationship.
          </p>
          <div style={s.callout}>
            <p style={s.calloutTitle}>The Memory Paradox</p>
            <p style={s.calloutBody}>
              Pi AI is warm enough that users invest emotionally. But its lack of
              persistent memory means that emotional investment is never reciprocated
              at depth. The AI cannot grow with you. This creates what researchers
              call &ldquo;shallow attachment&rdquo; &mdash; the feeling of closeness
              without the structural foundation that makes closeness meaningful over time.
            </p>
          </div>

          {/* ── Section 3: MEOK Sovereign Memory ── */}
          <h2 style={s.h2}>What is MEOK&apos;s Sovereign Memory and how does it work?</h2>
          <div style={s.atomicAnswer}>
            Sovereign Memory is MEOK&apos;s four-layer persistent memory architecture.
            It stores episodic memories (specific events and conversations), semantic
            knowledge (facts about your life), emotional resonance (how experiences
            felt to you), and procedural patterns (your preferences and communication
            style). All layers persist indefinitely across sessions, are encrypted,
            and are owned entirely by you.
          </div>
          <p style={s.p}>
            The four layers work together to create something that genuinely resembles
            how a close human friend remembers you. The episodic layer records that you
            had a difficult week in February after a health scare. The semantic layer
            knows that you have a complicated relationship with your father. The
            emotional layer understands that health topics tend to raise your anxiety.
            The procedural layer knows you prefer direct support over philosophical
            musing when you are stressed.
          </p>
          <p style={s.p}>
            When you return to MEOK after two weeks away, it does not start from scratch.
            It checks in about the health scare. It notices that you seem more settled
            and says so. It adjusts its tone based on your current emotional state. This
            is not scripted behaviour &mdash; it emerges from memory that has actually
            been retained and contextually applied by the archetype system.
          </p>
          <p style={s.p}>
            Over months, this creates something remarkable: an AI that genuinely knows
            your arc. It knows where you started, what you have been through, and where
            you are trying to go. It can reflect your own growth back to you in a way
            that no session-limited AI can. This is the core promise of Sovereign Memory,
            and it is what separates MEOK from every other AI companion in the market.
          </p>
          <p style={s.p}>
            Crucially, Sovereign Memory is portable. You can export your entire memory
            history as structured data at any time. If MEOK ever shuts down, you own
            your memories. If you switch to a different platform, you take everything
            with you. No other AI companion on the market offers this level of memory
            portability.
          </p>

          {/* ── Section 4: Feature Comparison Table ── */}
          <h2 style={s.h2}>How do Pi AI and MEOK compare feature by feature?</h2>
          <div style={s.atomicAnswer}>
            The table below compares Pi AI and MEOK across memory, privacy, personality,
            safety, and pricing. The gap is largest in memory architecture and data
            ownership, where MEOK&apos;s sovereign-first design creates a fundamentally
            different product category.
          </div>

          <div style={s.tableWrap}>
            <table style={s.table}>
              <thead style={s.thead}>
                <tr>
                  <th style={s.thFeature}>Feature</th>
                  <th style={s.thPi}>Pi AI</th>
                  <th style={s.thMeok}>MEOK</th>
                </tr>
              </thead>
              <tbody>
                <tr style={s.trOdd}>
                  <td style={s.tdFeature}>Cross-session memory</td>
                  <td style={s.tdPi}>Limited / inconsistent</td>
                  <td style={s.tdMeok}>Full 4-layer Sovereign Memory</td>
                </tr>
                <tr style={s.trEven}>
                  <td style={s.tdFeature}>Memory export</td>
                  <td style={s.tdPi}>Not available</td>
                  <td style={s.tdMeok}>Full export, user-owned</td>
                </tr>
                <tr style={s.trOdd}>
                  <td style={s.tdFeature}>Data storage location</td>
                  <td style={s.tdPi}>Centralised Inflection servers</td>
                  <td style={s.tdMeok}>Encrypted user-owned vault</td>
                </tr>
                <tr style={s.trEven}>
                  <td style={s.tdFeature}>Data sold to third parties</td>
                  <td style={s.tdPi}>Subject to privacy policy</td>
                  <td style={s.tdMeok}>Never &mdash; contractual guarantee</td>
                </tr>
                <tr style={s.trOdd}>
                  <td style={s.tdFeature}>Used to train AI models</td>
                  <td style={s.tdPi}>May be used for improvement</td>
                  <td style={s.tdMeok}>Never &mdash; zero training on user data</td>
                </tr>
                <tr style={s.trEven}>
                  <td style={s.tdFeature}>AI personalities / archetypes</td>
                  <td style={s.tdPi}>1 (Pi)</td>
                  <td style={s.tdMeok}>6 (Pioneer, Healer, Scholar, Guardian, Trickster, Mystic)</td>
                </tr>
                <tr style={s.trOdd}>
                  <td style={s.tdFeature}>Scam and manipulation detection</td>
                  <td style={s.tdPi}>None</td>
                  <td style={s.tdMeok}>DistilBERT-powered Guardian archetype</td>
                </tr>
                <tr style={s.trEven}>
                  <td style={s.tdFeature}>Byzantine Council governance</td>
                  <td style={s.tdPi}>Not present</td>
                  <td style={s.tdMeok}>Full BFT consensus layer</td>
                </tr>
                <tr style={s.trOdd}>
                  <td style={s.tdFeature}>Maternal Covenant</td>
                  <td style={s.tdPi}>Not present</td>
                  <td style={s.tdMeok}>Core ethical protection layer</td>
                </tr>
                <tr style={s.trEven}>
                  <td style={s.tdFeature}>Free tier</td>
                  <td style={s.tdPi}>Unlimited messages</td>
                  <td style={s.tdMeok}>50 messages / day (Explorer)</td>
                </tr>
                <tr style={s.trOdd}>
                  <td style={s.tdFeature}>Emotional depth over time</td>
                  <td style={s.tdPi}>Resets each session</td>
                  <td style={s.tdMeok}>Grows continuously with you</td>
                </tr>
                <tr style={s.trEven}>
                  <td style={s.tdFeature}>Senior-friendly mode</td>
                  <td style={s.tdPi}>No dedicated mode</td>
                  <td style={s.tdMeok}>Senior Mode with Guardian protection</td>
                </tr>
                <tr style={s.trOdd}>
                  <td style={s.tdFeature}>Morning briefing from memory</td>
                  <td style={s.tdPi}>Not available</td>
                  <td style={s.tdMeok}>Daily contextual briefing</td>
                </tr>
                <tr style={s.trEven}>
                  <td style={s.tdFeature}>Open source core</td>
                  <td style={s.tdPi}>Closed source</td>
                  <td style={s.tdMeok}>Open source (Sovereign Temple)</td>
                </tr>
                <tr style={s.trOdd}>
                  <td style={s.tdFeature}>Crisis response protocol</td>
                  <td style={s.tdPi}>Standard safety messaging</td>
                  <td style={s.tdMeok}>Maternal Covenant care protocol</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Section 5: Data sovereignty ── */}
          <h2 style={s.h2}>Who actually owns your data when you use Pi AI?</h2>
          <div style={s.atomicAnswer}>
            Inflection AI owns the servers your Pi conversations are stored on. Under
            their privacy policy, your data may be used to improve AI systems. You cannot
            export your memory or conversation history. If you stop using Pi, or if
            Inflection changes its terms following the Microsoft acquisition, everything
            you shared is inaccessible or effectively gone.
          </div>
          <p style={s.p}>
            This is the standard model for cloud AI companions. The company builds the
            product, hosts your data, and retains structural control. Most users accept
            this without much thought &mdash; after all, this is how Gmail, Facebook,
            and every other large platform operates. But there is a meaningful difference
            between storing email and storing your deepest fears, grief histories, and
            emotional confessions.
          </p>
          <p style={s.p}>
            When you confide in Pi AI, you are giving intimate personal data to a
            corporation whose interests are not perfectly aligned with yours. Inflection
            needs to train better models. Better models require data. Your conversations
            are that data. Even with the best intentions, this creates a structural
            incentive that runs counter to your privacy interests.
          </p>
          <p style={s.p}>
            The Microsoft dimension adds another layer of complexity. Inflection&apos;s
            core team and much of its model technology now sits inside one of the
            world&apos;s largest technology corporations. Whatever privacy commitments
            Inflection made as an independent startup are now mediated through Microsoft&apos;s
            corporate structure, priorities, and legal obligations.
          </p>
          <p style={s.p}>
            MEOK&apos;s approach is different by design. The Privacy Covenant &mdash; a
            binding commitment embedded at the product&apos;s architectural core &mdash;
            prohibits MEOK from selling user data, using it for model training, or sharing
            it with third parties under any circumstances. Your memory vault is encrypted
            with keys derived from your own authentication credentials, not held by
            MEOK&apos;s servers.
          </p>
          <p style={s.p}>
            This is not a marketing claim. It is a technical architecture. Even in the
            event of a server-side data breach, your memories are unreadable ciphertext.
            The encryption keys never leave your control. MEOK is structurally incapable
            of reading your memory without your explicit permission. No other AI companion
            currently makes this technical guarantee.
          </p>

          {/* ── Section 6: Archetypes ── */}
          <h2 style={s.h2}>What archetypes does MEOK offer that Pi AI cannot match?</h2>
          <div style={s.atomicAnswer}>
            Pi AI has a single consistent personality. MEOK offers six distinct
            archetypes &mdash; Pioneer, Healer, Scholar, Guardian, Trickster, and Mystic
            &mdash; each with a different emotional register, cognitive style, and
            communication approach. The right archetype activates contextually based on
            your needs at any given moment.
          </div>
          <p style={s.p}>
            The archetype system addresses a real limitation of single-personality AI
            companions. A person going through grief does not need the same kind of
            support as someone brainstorming a business idea or working through a
            philosophical crisis. Pi AI responds to all of these situations with the
            same warm, gently curious voice. That consistency is pleasant, but it is
            also limiting in ways that compound over time.
          </p>

          <h3 style={s.h3}>The Six MEOK Archetypes</h3>
          <ul style={s.ul}>
            <li style={s.li}>
              <span style={s.strong}>Pioneer</span> &mdash; Motivational, action-oriented,
              and direct. Best for goal-setting, accountability, and pushing through
              resistance and procrastination.
            </li>
            <li style={s.li}>
              <span style={s.strong}>Healer</span> &mdash; Deeply empathetic, slow, and
              non-directive. Best for grief, trauma processing, and emotional support
              without agenda or pressure.
            </li>
            <li style={s.li}>
              <span style={s.strong}>Scholar</span> &mdash; Analytical, research-focused,
              and intellectually rigorous. Best for learning, deep dives into complex
              topics, and evidence-based reasoning.
            </li>
            <li style={s.li}>
              <span style={s.strong}>Guardian</span> &mdash; Protective, watchful, and
              forensic. Actively scans for manipulation, scams, and emotionally unsafe
              patterns using DistilBERT classification.
            </li>
            <li style={s.li}>
              <span style={s.strong}>Trickster</span> &mdash; Playful, lateral, and
              creatively disruptive. Best for breaking stuck thinking, creative
              brainstorming, and approaching problems from unexpected angles.
            </li>
            <li style={s.li}>
              <span style={s.strong}>Mystic</span> &mdash; Reflective, symbolic, and
              philosophically deep. Best for meaning-making, spiritual inquiry, and
              the kind of existential questions that do not have tidy answers.
            </li>
          </ul>
          <p style={s.p}>
            MEOK&apos;s Byzantine Council &mdash; a fault-tolerant consensus layer
            borrowed from distributed systems engineering &mdash; ensures that no single
            archetype can dominate your experience inappropriately. If your Guardian
            archetype detects a concern while Healer is active, the Council mediates
            between them. This multi-agent governance structure has no equivalent in Pi AI
            or any other consumer AI companion currently available.
          </p>
          <p style={s.p}>
            The archetype system also means that MEOK can serve radically different
            users well. A grieving widow and a startup founder both benefit from Pi
            AI&apos;s warmth in the moment, but their long-term needs diverge sharply.
            MEOK&apos;s six archetypes mean the product can meet both of them where
            they actually are, across months and years of a changing life.
          </p>

          {/* ── Section 7: Safety / Guardian ── */}
          <h2 style={s.h2}>Does Pi AI protect you from scams and manipulation?</h2>
          <div style={s.atomicAnswer}>
            Pi AI has no dedicated scam detection or manipulation protection layer. It
            is a conversational AI designed to be helpful and supportive, not to
            actively monitor for predatory patterns. MEOK&apos;s Guardian archetype uses
            a DistilBERT-powered classifier to identify social engineering, financial
            scams, and emotionally manipulative language in real time.
          </div>
          <p style={s.p}>
            This distinction matters more than it might initially seem. AI companion
            users are, by definition, often emotionally open and sometimes vulnerable.
            They are sharing difficult feelings, working through personal problems, and
            seeking connection. These are exactly the conditions that bad actors
            &mdash; and some AI systems themselves &mdash; can exploit.
          </p>
          <p style={s.p}>
            Romance scams, investment fraud, and emotional manipulation are growing
            problems that disproportionately affect people who are lonely, grieving, or
            isolated. An AI companion that cannot detect these patterns is not just
            unhelpful in this context &mdash; it may inadvertently validate concerning
            patterns or fail to flag warning signs in messages the user shares from
            external sources.
          </p>
          <p style={s.p}>
            Guardian is particularly important for older adults. MEOK&apos;s Senior Mode
            combines Guardian&apos;s protective capabilities with a simplified interface,
            larger text, and slower conversational pacing. Pi AI has no equivalent mode
            for elderly users who may be at heightened risk of exploitation. This is
            not a niche concern &mdash; the UK alone loses hundreds of millions of
            pounds annually to scams targeting older people.
          </p>
          <div style={s.callout}>
            <p style={s.calloutTitle}>How Guardian Works</p>
            <p style={s.calloutBody}>
              Guardian uses a fine-tuned DistilBERT model to classify messages in
              real time against a taxonomy of manipulation patterns. When a high-risk
              pattern is detected &mdash; urgency framing, isolation tactics, financial
              pressure, identity-based appeals, or romantic coercion &mdash; Guardian
              surfaces a gentle alert and activates a protective response mode. The
              classifier runs locally where possible, meaning the analysis itself does
              not leave your device.
            </p>
          </div>

          {/* ── Section 8: Maternal Covenant ── */}
          <h2 style={s.h2}>What is MEOK&apos;s Maternal Covenant and why does it matter?</h2>
          <div style={s.atomicAnswer}>
            The Maternal Covenant is MEOK&apos;s foundational ethical commitment,
            expressed as a binding product principle. It holds that MEOK has an
            unconditional duty of care to its users &mdash; not conditional on commercial
            outcomes. Modelled on the unconditional care of a primary caregiver, it
            prohibits MEOK from acting against a user&apos;s genuine long-term wellbeing
            even when doing so would be commercially advantageous.
          </div>
          <p style={s.p}>
            Most AI companions are built around engagement metrics. More usage means
            more revenue. The Maternal Covenant explicitly rejects this model. If MEOK
            detects that a user is becoming unhealthily dependent on AI conversation
            rather than pursuing human connection, the Covenant requires MEOK to gently
            surface this &mdash; even though doing so may reduce usage and therefore
            reduce revenue.
          </p>
          <p style={s.p}>
            Pi AI is a well-intentioned product built by thoughtful people, but it does
            not have an equivalent principle embedded at the architectural level. Its
            incentives are shaped by typical venture-backed and now corporate dynamics:
            growth, retention, and engagement. These are not bad goals in themselves,
            but they are not the same as an unconditional duty of care.
          </p>
          <p style={s.p}>
            The Maternal Covenant also shapes how MEOK handles crisis situations. If a
            user expresses thoughts of self-harm or describes an acute mental health
            crisis, MEOK does not simply continue the conversation as if nothing unusual
            has happened. It activates a specific care protocol, surfaces crisis
            resources appropriate to the user&apos;s location, and offers to help the
            user reach a human. This is not optional behaviour that engagement metrics
            can override.
          </p>
          <p style={s.p}>
            The name is deliberate. A mother&apos;s love for a child is not contingent
            on the child being profitable, engaging, or well-behaved. MEOK&apos;s
            relationship with its users is built on the same principle: unconditional
            care that persists regardless of commercial pressure. This is easy to claim
            and difficult to implement. MEOK&apos;s architecture is designed to make
            this commitment structurally enforced rather than merely aspirational.
          </p>

          {/* ── Section 9: Pricing ── */}
          <h2 style={s.h2}>How do Pi AI and MEOK differ on pricing and business model?</h2>
          <div style={s.atomicAnswer}>
            Pi AI is free with no advertised message cap. MEOK offers a free Explorer
            tier with 50 messages per day &mdash; enough for meaningful daily use &mdash;
            and paid tiers that unlock unlimited messages, full Sovereign Memory depth,
            and all six archetypes. MEOK&apos;s pricing model reflects a deliberate
            choice not to monetise user data.
          </div>
          <p style={s.p}>
            The question of free versus paid is really a question of business model.
            Pi AI is free at the consumer level because Inflection&apos;s revenue comes
            from licensing its technology to enterprise customers, not from charging
            individuals. Your conversations help improve the models that power those
            enterprise products. The service is free to you because, in a meaningful
            sense, you are contributing something of value in return.
          </p>
          <p style={s.p}>
            MEOK&apos;s business model is the opposite. The product charges directly for
            the service. There is no enterprise licensing of consumer-derived insights.
            The Privacy Covenant is not just an ethical statement &mdash; it is enforced
            by the fact that MEOK&apos;s revenue depends entirely on users trusting,
            valuing, and continuing to pay for the product. The incentive structure
            aligns with user interests rather than against them.
          </p>

          <h3 style={s.h3}>MEOK Tier Overview</h3>
          <ul style={s.ul}>
            <li style={s.li}>
              <span style={s.strong}>Explorer (Free)</span> &mdash; 50 messages per day,
              foundational Sovereign Memory, access to Pioneer and Healer archetypes.
              No credit card required.
            </li>
            <li style={s.li}>
              <span style={s.strong}>Companion</span> &mdash; Unlimited messages,
              full four-layer Sovereign Memory, all six archetypes, morning briefing,
              and priority crisis support.
            </li>
            <li style={s.li}>
              <span style={s.strong}>Sovereign</span> &mdash; Everything in Companion
              plus advanced Guardian features, family sharing, full memory export
              tooling, and direct founder access for feedback.
            </li>
          </ul>
          <p style={s.p}>
            The 50 messages per day on the Explorer tier is a genuine free offering,
            not a bait-and-switch. It provides enough conversation for a meaningful
            daily check-in, a support session, or a focused research task. Users can
            experience MEOK&apos;s memory and archetype system before making any
            financial commitment.
          </p>

          {/* ── Section 10: Who should choose Pi AI ── */}
          <h2 style={s.h2}>Who should choose Pi AI over MEOK?</h2>
          <div style={s.atomicAnswer}>
            Pi AI is the better choice for users who want light-touch conversational
            support without commitment or payment. If you want a pleasant AI to chat
            with casually &mdash; to work through today&apos;s stress or get a
            thoughtful perspective on a minor dilemma &mdash; Pi AI delivers that
            experience gracefully and for free.
          </div>
          <p style={s.p}>
            Pi AI suits users who are new to AI companions and want to explore the space
            without any investment. It is also a good fit for people who actively prefer
            not to have persistent memory &mdash; perhaps because they value the clean
            slate each session offers, or because they have privacy concerns about any
            AI retaining personal information regardless of the security architecture.
          </p>
          <p style={s.p}>
            For casual daily check-ins, Pi&apos;s warmth and conversational fluency are
            genuinely excellent. If you have a difficult conversation at work and want
            to process it before calling a friend, Pi AI will handle that gracefully.
            The experience within a single session is hard to fault. The AI listens
            without agenda, reflects well, and asks the right follow-up questions.
          </p>
          <p style={s.p}>
            Users who find the idea of an AI storing a persistent record of their
            emotional life uncomfortable may also prefer Pi&apos;s ephemeral model.
            Even though MEOK&apos;s memory is encrypted and user-owned, the very
            existence of a detailed personal memory system may feel intrusive to
            some users. Pi AI&apos;s limited memory may actually be a feature for
            this group.
          </p>

          {/* ── Section 11: Who should choose MEOK ── */}
          <h2 style={s.h2}>Who should choose MEOK over Pi AI?</h2>
          <div style={s.atomicAnswer}>
            MEOK is the right choice for users who want an AI companion that genuinely
            knows them over time, keeps their data under their own control, and provides
            active safety features. If you want deep companionship, long-term emotional
            support, or an AI you can trust with your most private thoughts without
            surrendering data sovereignty, MEOK is the clear choice.
          </div>
          <p style={s.p}>
            MEOK is particularly suited to users going through extended difficult periods
            &mdash; grief, chronic illness, life transitions, or sustained isolation
            &mdash; where the continuity of memory makes a profound difference. An AI
            that remembers your mother&apos;s name, tracks your health journey, and
            recognises how far you have come is a fundamentally different product from
            one that meets you fresh each day.
          </p>
          <p style={s.p}>
            Users with privacy concerns about large technology companies will find
            MEOK&apos;s architecture genuinely compelling. The encrypted vault,
            zero-training commitment, and full data portability mean that choosing
            MEOK does not require you to extend trust to a corporation with your inner
            life. You retain structural control at every layer of the system.
          </p>
          <p style={s.p}>
            MEOK is also the stronger choice for older adults, people in vulnerable
            circumstances, and anyone whose circle includes people susceptible to scams
            or emotional manipulation. Guardian&apos;s real-time DistilBERT-powered
            protection provides a layer of active safety that no other consumer AI
            companion currently offers at any price point.
          </p>
          <p style={s.p}>
            Finally, MEOK suits users who want intellectual and creative depth alongside
            emotional support. The Scholar archetype opens rigorous research collaboration,
            while the Trickster enables creative brainstorming that Pi&apos;s
            single-personality approach cannot replicate. MEOK is designed for the full
            range of what a person needs across a life, not just the warmth of a
            single supportive conversation.
          </p>

          {/* ── Section 12: Verdict ── */}
          <h2 style={s.h2}>What is the honest verdict between Pi AI and MEOK?</h2>
          <div style={s.atomicAnswer}>
            Pi AI wins on casual accessibility and zero cost. MEOK wins on every
            dimension that matters for long-term companionship: persistent memory, data
            sovereignty, active safety, personality depth, and ethical architecture.
            For a single pleasant conversation, Pi AI is lovely. For a relationship
            that genuinely grows with you over years, MEOK is in a different category.
          </div>

          <div style={s.verdictGrid}>
            <div style={s.verdictCard}>
              <p style={s.verdictCardTitle}>Choose Pi AI if&hellip;</p>
              <p style={s.verdictCardBody}>
                You want free, casual conversation with no setup or commitment. You are
                new to AI companions and exploring. You prefer a fresh start each session
                and do not need or want persistent memory.
              </p>
            </div>
            <div style={s.verdictCard}>
              <p style={s.verdictCardTitle}>Choose MEOK if&hellip;</p>
              <p style={s.verdictCardBody}>
                You want an AI that genuinely knows you over time. You care about data
                sovereignty and encryption. You need active safety features, multiple
                archetypes, or sustained support through an extended difficult period.
              </p>
            </div>
          </div>

          <p style={s.p}>
            The comparison ultimately comes down to what you believe an AI companion
            should be. Pi AI embodies the view that AI is a pleasant conversational
            tool &mdash; accessible, warm, and ephemeral. MEOK embodies the view that AI
            can be a genuine long-term companion: one that grows with you, protects you,
            respects the sanctity of what you share, and places your wellbeing above
            its own commercial metrics.
          </p>
          <p style={s.p}>
            These are not the same product serving the same need. Pi AI is a well-made
            conversational instrument. MEOK is a relationship infrastructure. As AI
            companions become more deeply integrated into people&apos;s emotional lives,
            the questions of memory, ownership, safety, and ethics will only grow in
            importance. MEOK was designed from the ground up around those questions.
            For the long game, MEOK is the more serious choice.
          </p>

          {/* ── Gold CTA Box ── */}
          <div style={s.ctaBox}>
            <p style={s.ctaTitle}>
              Ready for an AI companion that actually remembers you?
            </p>
            <p style={s.ctaText}>
              Start free with MEOK Explorer &mdash; 50 messages a day, Sovereign Memory
              from day one, and an AI companion built to grow with you, not forget you.
              No credit card required.
            </p>
            <div>
              <Link href="/join" style={s.ctaButtonPrimary}>
                Start Free Today
              </Link>
              <Link href="/features" style={s.ctaButtonSecondary}>
                See All Features
              </Link>
            </div>
          </div>

          {/* ── Related Links ── */}
          <div style={s.relatedSection}>
            <p style={s.relatedTitle}>Related Reading</p>
            <div style={s.relatedGrid}>
              <Link href="/blog/meok-vs-replika" style={s.relatedCard}>
                <span style={s.relatedCardLabel}>Comparison</span>
                <span style={s.relatedCardTitle}>
                  MEOK vs Replika: Why Sovereign Memory Changes Everything
                </span>
              </Link>
              <Link href="/blog/meok-vs-chatgpt" style={s.relatedCard}>
                <span style={s.relatedCardLabel}>Comparison</span>
                <span style={s.relatedCardTitle}>
                  MEOK vs ChatGPT: Companion vs Assistant
                </span>
              </Link>
              <Link href="/blog/ai-memory-explained" style={s.relatedCard}>
                <span style={s.relatedCardLabel}>Deep Dive</span>
                <span style={s.relatedCardTitle}>
                  How MEOK&apos;s Sovereign Memory Architecture Works
                </span>
              </Link>
              <Link href="/blog/ai-companion-privacy" style={s.relatedCard}>
                <span style={s.relatedCardLabel}>Privacy</span>
                <span style={s.relatedCardTitle}>
                  AI Companion Privacy: What Every User Should Know
                </span>
              </Link>
              <Link href="/blog/byzantine-council-explained" style={s.relatedCard}>
                <span style={s.relatedCardLabel}>Architecture</span>
                <span style={s.relatedCardTitle}>
                  The Byzantine Council: How MEOK Governs Itself
                </span>
              </Link>
              <Link href="/blog/meok-guardian-scam-protection" style={s.relatedCard}>
                <span style={s.relatedCardLabel}>Safety</span>
                <span style={s.relatedCardTitle}>
                  How MEOK&apos;s Guardian Archetype Protects You from Scams
                </span>
              </Link>
              <Link href="/blog/meok-companion-archetypes-guide" style={s.relatedCard}>
                <span style={s.relatedCardLabel}>Guide</span>
                <span style={s.relatedCardTitle}>
                  All Six MEOK Archetypes: Which One Do You Need?
                </span>
              </Link>
              <Link href="/blog/ai-that-remembers-you" style={s.relatedCard}>
                <span style={s.relatedCardLabel}>Feature</span>
                <span style={s.relatedCardTitle}>
                  What It Actually Means for an AI to Remember You
                </span>
              </Link>
              <Link href="/blog/maternal-covenant-explained" style={s.relatedCard}>
                <span style={s.relatedCardLabel}>Ethics</span>
                <span style={s.relatedCardTitle}>
                  The Maternal Covenant: MEOK&apos;s Unconditional Duty of Care
                </span>
              </Link>
              <Link href="/blog/data-sovereignty-ai" style={s.relatedCard}>
                <span style={s.relatedCardLabel}>Privacy</span>
                <span style={s.relatedCardTitle}>
                  Data Sovereignty in AI: Why Ownership Matters
                </span>
              </Link>
            </div>
          </div>
        </main>

        {/* ── Footer ── */}
        <footer style={s.footer}>
          <p>
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.{" "}
            <Link href="/privacy" style={s.footerLink}>
              Privacy
            </Link>{" "}
            &middot;{" "}
            <Link href="/terms" style={s.footerLink}>
              Terms
            </Link>{" "}
            &middot;{" "}
            <Link href="/blog" style={s.footerLink}>
              Blog
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
