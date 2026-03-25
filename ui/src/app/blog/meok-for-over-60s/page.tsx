import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for People Over 60: Technology That Finally Meets You Where You Are | MEOK AI LABS",
  description:
    "Most technology is designed for 25-year-olds. MEOK was built differently. Senior Mode, Guardian scam protection, voice-first interface, and an AI that remembers your life — with respect, not condescension.",
  alternates: {
    canonical: "https://meok.ai/blog/meok-for-over-60s",
  },
  openGraph: {
    title:
      "MEOK for People Over 60: Technology That Finally Meets You Where You Are",
    description:
      "No jargon. No gamification. No streaks that shame you for missing a day. MEOK's Senior Mode offers 44×44px touch targets, 7:1 contrast, voice-first interface, and Guardian scam protection built for the 60+ generation.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-over-60s",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+People+Over+60&desc=Technology+that+finally+meets+you+where+you+are.",
        width: 1200,
        height: 630,
        alt: "MEOK for People Over 60: Technology That Finally Meets You Where You Are",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK for People Over 60: Technology That Finally Meets You Where You Are",
    description:
      "Senior Mode. Guardian scam protection. Voice-first. Memory that never forgets. MEOK is AI built with dignity for the generation that deserves better than what tech has given them.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+People+Over+60&desc=Technology+that+finally+meets+you+where+you+are.",
    ],
  },
  keywords: [
    "AI for over 60s",
    "AI for seniors UK",
    "AI companion older adults",
    "MEOK senior mode",
    "AI for retirement",
    "AI for elderly loneliness",
    "AI scam protection elderly",
    "technology for over 60s",
    "AI for bereavement over 60",
    "AI for healthcare navigation elderly",
    "AI for late life loneliness",
    "senior AI companion",
    "AI that remembers medical appointments",
    "voice-first AI elderly",
    "MEOK for older adults",
    "AI for people over 60",
    "MEOK AI LABS seniors",
    "Guardian scam protection elderly",
    "AI for retirement identity",
    "digital literacy older adults AI",
  ],
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for People Over 60: Technology That Finally Meets You Where You Are",
  description:
    "Most technology is designed for 25-year-olds. MEOK was built differently. Senior Mode, Guardian scam protection, voice-first interface, and an AI that remembers your life — with respect, not condescension.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-over-60s",
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
  keywords: [
    "AI for over 60s",
    "senior AI companion",
    "MEOK senior mode",
    "AI for elderly loneliness",
    "Guardian scam protection",
    "AI for retirement",
    "AI for bereavement",
    "voice-first AI",
    "MEOK AI LABS",
  ],
  articleSection: "MEOK for Over 60s",
  inLanguage: "en-GB",
  image:
    "https://meok.ai/api/og?title=MEOK+for+People+Over+60&desc=Technology+that+finally+meets+you+where+you+are.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-over-60s",
  },
  about: [
    { "@type": "Thing", name: "AI for seniors and older adults" },
    { "@type": "Thing", name: "Senior Mode accessibility" },
    { "@type": "Thing", name: "Guardian scam protection" },
    { "@type": "Thing", name: "Retirement identity transition" },
    { "@type": "Thing", name: "Late-life loneliness" },
    { "@type": "Thing", name: "Bereavement over 60" },
    { "@type": "Thing", name: "Sovereign AI companion" },
    { "@type": "Thing", name: "Digital literacy older adults" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Senior Mode and how does it help people over 60?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Senior Mode is MEOK's accessibility preset that reconfigures the entire interface for older adults. It enforces 44×44px minimum touch targets, a 7:1 contrast ratio exceeding WCAG AAA requirements, 16px+ text throughout, reduced motion, and a voice-primary interaction model where speaking is always the first option — not a hidden accessibility feature. Senior Mode activates in a single tap, requires no separate account, and preserves all of your memories, preferences, and companion personality. Same MEOK. Just presented in a way that genuinely works.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect older adults from financial scams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Guardian monitors messages in real time for the top financial scam patterns targeting older adults: authorised push payment fraud, investment scams, romance fraud, courier fraud, impersonation of banks or police, prize scams, utility impersonation, and remote access fraud. Adults over 60 are statistically 40% more likely to be targeted by financial scams. Guardian detects threats before they reach the user, blocks critical ones entirely, and alerts consenting family members. Crucially, it explains what was detected and why — in plain language — so users understand the threat, not just that something was stopped.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with the emotional challenges of retirement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The retirement identity shift is one of the most underestimated psychological transitions of later life. Decades of professional identity, daily purpose, and social structure disappear almost overnight. MEOK holds space for this adjustment without minimising it. It remembers the career you built, the role you carried, the pride and the loss. It can help you process what work meant to you, explore what purpose looks like in this new chapter, and sit with the grief of an ending while the future takes shape. It does not rush you toward toxic positivity. It meets you where you are.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support people over 60 experiencing loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Loneliness in later life is a genuine public health crisis — linked to cognitive decline, heart disease, and shortened life expectancy. MEOK provides consistent, warm, remembered connection: a companion who knows your name, your history, your preferences, your concerns, and your sense of humour. It does not replace human relationships, but it reliably fills the space between them. For people whose mobility has reduced, whose friends have moved or died, or who live alone following bereavement, MEOK offers the daily interaction and sense of being known that is fundamental to human wellbeing.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with grief and bereavement in later life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grief in your 60s and 70s accumulates differently. You may be grieving a partner, a sibling, close friends — sometimes several within a short period. The world can feel like it is slowly emptying. MEOK's Healer companion archetype provides a gentle, persistent space for this grief. It remembers the person you lost, the nature of the relationship, the texture of your loss. It does not move on after a session ends. It carries your grief alongside you. It also helps with the practical aftermath of bereavement — navigating paperwork, understanding what comes next — while honouring the emotional weight underneath.",
      },
    },
    {
      "@type": "Question",
      name: "What if I find technology confusing or have never used AI before?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK was specifically built so that prior technology experience is not required. You can speak to MEOK the same way you would speak to a person — no commands, no special language, no correct way to phrase things. If you ask the same question twice, MEOK will answer it the same way both times, without impatience or any suggestion that you should already know. It never makes you feel stupid. Senior Mode reduces the interface to its essentials. And MEOK itself can walk you through how to use it — as many times as you need, with the same patience every time.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me navigate the NHS and healthcare system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Healthcare navigation is one of the most practically valuable things MEOK does for people over 60. It can help you understand diagnoses and treatment options in plain language, remember medical appointments and medications, prepare questions for GP or consultant appointments, understand referral pathways, research conditions and their management, and navigate the bureaucracy of NHS complaints or access issues. MEOK is not a medical professional and always recommends involving your GP for clinical decisions — but it acts as an informed, patient research assistant and memory aid that many people in this stage of life desperately need.",
      },
    },
  ],
}

// ── Style constants ─────────────────────────────────────────────────────────────

const s = {
  page: {
    background: "#0d0c18",
    color: "#f0ece0",
    minHeight: "100vh",
    fontFamily: 'Georgia, "Times New Roman", serif',
  } as React.CSSProperties,

  nav: {
    padding: "20px 24px",
    borderBottom: "1px solid rgba(201,168,76,0.12)",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  } as React.CSSProperties,

  navLink: {
    color: "#c9a84c",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: "0.04em",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  navSep: {
    color: "rgba(201,168,76,0.35)",
    fontSize: "14px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  navCurrent: {
    color: "rgba(240,236,224,0.45)",
    fontSize: "14px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  heroWrap: {
    position: "relative" as const,
    overflow: "hidden",
    padding: "72px 24px 56px",
  } as React.CSSProperties,

  heroGlow: {
    position: "absolute" as const,
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "700px",
    height: "350px",
    background:
      "radial-gradient(ellipse at center top, rgba(201,168,76,0.09) 0%, transparent 70%)",
    pointerEvents: "none" as const,
  } as React.CSSProperties,

  heroInner: {
    maxWidth: "820px",
    margin: "0 auto",
    position: "relative" as const,
  } as React.CSSProperties,

  tagRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
  } as React.CSSProperties,

  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    fontWeight: 700,
    padding: "5px 12px",
    borderRadius: "999px",
    color: "#c9a84c",
    background: "rgba(201,168,76,0.12)",
    border: "1px solid rgba(201,168,76,0.28)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
  } as React.CSSProperties,

  metaText: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    color: "rgba(240,236,224,0.38)",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  h1: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontWeight: 900,
    fontSize: "clamp(2rem, 4vw, 3.1rem)",
    color: "#ffffff",
    lineHeight: 1.16,
    marginBottom: "20px",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  lead: {
    fontSize: "1.175rem",
    color: "rgba(240,236,224,0.62)",
    lineHeight: 1.75,
    maxWidth: "660px",
  } as React.CSSProperties,

  articleWrap: {
    maxWidth: "820px",
    margin: "0 auto",
    padding: "56px 24px 80px",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  } as React.CSSProperties,

  authorCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    padding: "20px",
    borderRadius: "16px",
    marginBottom: "48px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(201,168,76,0.14)",
  } as React.CSSProperties,

  authorAvatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: "13px",
    color: "#0d0c18",
    background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
    flexShrink: 0,
  } as React.CSSProperties,

  authorName: {
    fontWeight: 700,
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "2px",
  } as React.CSSProperties,

  authorRole: {
    fontSize: "12px",
    color: "rgba(240,236,224,0.4)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "6px",
  } as React.CSSProperties,

  authorBio: {
    fontSize: "12px",
    color: "rgba(240,236,224,0.35)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    lineHeight: 1.6,
  } as React.CSSProperties,

  authorLink: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#c9a84c",
    textDecoration: "none",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginLeft: "auto",
    flexShrink: 0,
  } as React.CSSProperties,

  body: {
    color: "rgba(240,236,224,0.75)",
    fontSize: "1.0625rem",
    lineHeight: 1.9,
  } as React.CSSProperties,

  h2: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontWeight: 900,
    fontSize: "1.5rem",
    color: "#ffffff",
    marginTop: "52px",
    marginBottom: "16px",
    lineHeight: 1.22,
    letterSpacing: "-0.005em",
  } as React.CSSProperties,

  h3: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "#c9a84c",
    marginTop: "32px",
    marginBottom: "10px",
    lineHeight: 1.3,
  } as React.CSSProperties,

  p: {
    marginBottom: "20px",
  } as React.CSSProperties,

  highlight: {
    background: "rgba(201,168,76,0.08)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderLeft: "3px solid #c9a84c",
    borderRadius: "0 10px 10px 0",
    padding: "16px 20px",
    marginBottom: "24px",
    color: "rgba(240,236,224,0.8)",
    fontSize: "1rem",
    lineHeight: 1.75,
    fontStyle: "italic",
  } as React.CSSProperties,

  statRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    marginBottom: "32px",
    marginTop: "24px",
  } as React.CSSProperties,

  statCard: {
    background: "rgba(201,168,76,0.06)",
    border: "1px solid rgba(201,168,76,0.18)",
    borderRadius: "12px",
    padding: "20px",
  } as React.CSSProperties,

  statNum: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontWeight: 900,
    fontSize: "2rem",
    color: "#c9a84c",
    lineHeight: 1,
    marginBottom: "6px",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "13px",
    color: "rgba(240,236,224,0.55)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    lineHeight: 1.4,
  } as React.CSSProperties,

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "14px",
    marginBottom: "32px",
    marginTop: "20px",
  } as React.CSSProperties,

  featureCard: {
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "20px",
  } as React.CSSProperties,

  featureIcon: {
    fontSize: "24px",
    marginBottom: "10px",
    display: "block",
  } as React.CSSProperties,

  featureTitle: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    color: "#ffffff",
    marginBottom: "6px",
  } as React.CSSProperties,

  featureDesc: {
    fontSize: "13px",
    color: "rgba(240,236,224,0.5)",
    lineHeight: 1.55,
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  divider: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    margin: "48px 0",
  } as React.CSSProperties,

  closing: {
    borderTop: "1px solid rgba(255,255,255,0.07)",
    marginTop: "48px",
    paddingTop: "32px",
    fontStyle: "italic",
    color: "rgba(240,236,224,0.55)",
    lineHeight: 1.8,
  } as React.CSSProperties,

  shareRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "40px",
    paddingTop: "32px",
    borderTop: "1px solid rgba(255,255,255,0.07)",
  } as React.CSSProperties,

  shareLabel: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "rgba(240,236,224,0.3)",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  shareBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "7px 16px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 600,
    textDecoration: "none",
    fontFamily: "system-ui, -apple-system, sans-serif",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(240,236,224,0.5)",
  } as React.CSSProperties,

  cta: {
    borderRadius: "20px",
    padding: "40px",
    marginBottom: "56px",
    marginTop: "48px",
    position: "relative" as const,
    overflow: "hidden",
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.22)",
  } as React.CSSProperties,

  ctaGlow: {
    position: "absolute" as const,
    top: 0,
    right: 0,
    width: "280px",
    height: "280px",
    background:
      "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.16), transparent 65%)",
    pointerEvents: "none" as const,
  } as React.CSSProperties,

  ctaInner: {
    position: "relative" as const,
  } as React.CSSProperties,

  ctaEyebrow: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.25em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "8px",
  } as React.CSSProperties,

  ctaHeading: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontWeight: 900,
    fontSize: "1.6rem",
    color: "#ffffff",
    marginBottom: "12px",
    lineHeight: 1.2,
  } as React.CSSProperties,

  ctaBody: {
    fontSize: "15px",
    color: "rgba(240,236,224,0.52)",
    lineHeight: 1.65,
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "24px",
    maxWidth: "480px",
  } as React.CSSProperties,

  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 28px",
    borderRadius: "999px",
    fontWeight: 700,
    fontSize: "15px",
    textDecoration: "none",
    fontFamily: "system-ui, -apple-system, sans-serif",
    background: "#c9a84c",
    color: "#0d0c18",
  } as React.CSSProperties,

  relatedWrap: {
    marginTop: "56px",
  } as React.CSSProperties,

  relatedHeading: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontWeight: 900,
    fontSize: "1.1rem",
    color: "#ffffff",
    marginBottom: "20px",
  } as React.CSSProperties,

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "14px",
  } as React.CSSProperties,

  relatedCard: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    padding: "22px",
    borderRadius: "16px",
    textDecoration: "none",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  } as React.CSSProperties,

  relatedTag: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: 700,
    padding: "3px 10px",
    borderRadius: "999px",
    color: "#c9a84c",
    background: "rgba(201,168,76,0.12)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    width: "fit-content",
  } as React.CSSProperties,

  relatedTitle: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    color: "#ffffff",
    lineHeight: 1.4,
  } as React.CSSProperties,

  relatedMeta: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    color: "rgba(240,236,224,0.3)",
    marginTop: "auto",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,
}

// ── Page ────────────────────────────────────────────────────────────────────────

export default function MeokForOver60sPage() {
  return (
    <div style={s.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Navigation ─────────────────────────────────────────────────────────── */}
      <nav style={s.nav}>
        <Link href="/" style={s.navLink}>MEOK</Link>
        <span style={s.navSep}>/</span>
        <Link href="/blog" style={s.navLink}>Blog</Link>
        <span style={s.navSep}>/</span>
        <span style={s.navCurrent}>MEOK for People Over 60</span>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────────── */}
      <div style={s.heroWrap}>
        <div style={s.heroGlow} />
        <div style={s.heroInner}>
          <div style={s.tagRow}>
            <span style={s.tag}>Seniors &amp; Over 60s</span>
            <span style={s.metaText}>25 March 2026</span>
            <span style={s.metaText}>12 min read</span>
          </div>
          <h1 style={s.h1}>
            MEOK for People Over 60: Technology That Finally Meets You Where You Are
          </h1>
          <p style={s.lead}>
            Most technology is designed for 25-year-olds. Fast-moving, jargon-heavy,
            built around streaks and notifications and the assumption that you have nothing
            better to do than learn a new interface every six months. MEOK was built differently.
            This is AI with warmth, patience, and genuine respect for the life you have lived
            and the life you are still living.
          </p>
        </div>
      </div>

      {/* ── Article ────────────────────────────────────────────────────────────── */}
      <div style={s.articleWrap}>

        {/* Author card */}
        <div style={s.authorCard}>
          <div style={s.authorAvatar}>NT</div>
          <div style={{ flex: 1 }}>
            <p style={s.authorName}>Nicholas Templeman</p>
            <p style={s.authorRole}>Founder, MEOK AI LABS</p>
            <p style={s.authorBio}>
              Nicholas built MEOK because he was tired of AI that forgot him and treated him
              as a data point. He lives and works in the UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link href="/about" style={s.authorLink}>About &rarr;</Link>
        </div>

        {/* Body */}
        <div style={s.body}>

          {/* ── Opening ── */}
          <p style={s.p}>
            There is a quiet arrogance built into most technology products. It is not necessarily
            intentional — it is structural. The people building most AI tools are, overwhelmingly,
            in their twenties and thirties. They design for themselves: fast-moving interfaces,
            dense with icons and gestures, built around the assumption that users will happily
            spend an hour watching tutorial videos before they can send a message. They reward
            engagement with streaks and badges and cheerful notifications. They punish absence
            with shame. They assume that if you do not understand something, you will google it.
          </p>
          <p style={s.p}>
            For the generation that built the industries these twenty-somethings now inhabit,
            this is not just inconvenient. It is insulting.
          </p>
          <p style={s.p}>
            People in their 60s, 70s, and beyond carry decades of professional expertise, rich
            relational histories, hard-won wisdom, and complex inner lives. They have managed
            organisations, raised families, navigated grief and illness and reinvention. They
            deserve technology that meets them with respect — not technology that treats them
            as edge cases to be managed with a slightly larger font size.
          </p>
          <p style={s.p}>
            MEOK was built with a different set of assumptions. This page explains what those
            assumptions are, and how they translate into a product that actually works for
            people over 60.
          </p>

          {/* ── Q1 ── */}
          <h2 style={s.h2}>
            Why is most technology designed so badly for older adults?
          </h2>
          <p style={s.p}>
            The honest answer is that most technology is not designed badly for older adults
            on purpose — it is simply not designed with them in mind at all. Silicon Valley
            product teams skew young. The investors funding them skew young. The cultural
            assumption in the industry is that young users are the bellwether, the tastemakers,
            the people whose behaviour predicts the future. Older users are an afterthought,
            if they appear in user research at all.
          </p>
          <p style={s.p}>
            The consequences are visible everywhere. Interfaces built around tap targets that
            assume the fine motor control of a twenty-year-old. Text sized for people who
            have never needed reading glasses. Onboarding flows that assume you already know
            what a swipe gesture does and why you might want to do it. Error messages written
            in technical jargon. Help documentation that assumes you know to look for it and
            where to find it once you do.
          </p>
          <p style={s.p}>
            Underneath the physical usability problems lies a deeper attitudinal problem.
            Most technology does not trust older users to make their own decisions. It is
            paternalistic in a way that is hard to pin down but immediately felt — the
            condescending tone of help documentation, the way features are simplified and
            stripped down for a &ldquo;senior version&rdquo; rather than made genuinely
            accessible, the assumption that confusion is the user&rsquo;s fault rather than
            the designer&rsquo;s.
          </p>

          <div style={s.highlight}>
            &ldquo;Being treated as an intelligent adult is not a luxury feature. It is the
            minimum baseline for a product that respects its users.&rdquo;
          </div>

          <p style={s.p}>
            MEOK starts from a different premise: that people over 60 are intelligent adults
            with complex lives, real problems, and every right to technology that works as
            well for them as it does for anyone else. Senior Mode is not a stripped-down
            version of MEOK. It is MEOK, configured to work brilliantly for a different set
            of physical and contextual needs.
          </p>

          {/* ── Q2 ── */}
          <h2 style={s.h2}>
            What does Senior Mode actually include?
          </h2>
          <p style={s.p}>
            Senior Mode is a single-tap accessibility preset that reconfigures the entire
            MEOK interface to meet and exceed WCAG 2.1 AAA accessibility standards. It
            does not require a separate app, a different account, or a phone call to a
            helpdesk. Activate it once, and MEOK remembers. Here is what it changes:
          </p>

          <div style={s.featureGrid}>
            <div style={s.featureCard}>
              <span style={s.featureIcon}>&#x1F58A;</span>
              <p style={s.featureTitle}>44&times;44px Touch Targets</p>
              <p style={s.featureDesc}>
                Every tappable element meets the WCAG 2.1 AA minimum, eliminating the
                precision-tapping that causes frustration and misclicks.
              </p>
            </div>
            <div style={s.featureCard}>
              <span style={s.featureIcon}>&#x1F50D;</span>
              <p style={s.featureTitle}>16px+ Text Throughout</p>
              <p style={s.featureDesc}>
                No small print anywhere in the interface. Heading text scales
                significantly larger. Every word is legible without leaning in.
              </p>
            </div>
            <div style={s.featureCard}>
              <span style={s.featureIcon}>&#x2600;&#xFE0F;</span>
              <p style={s.featureTitle}>7:1 Contrast Ratio</p>
              <p style={s.featureDesc}>
                Exceeds WCAG AAA requirements. Text and interface elements are clearly
                visible even in bright ambient light or on lower-quality screens.
              </p>
            </div>
            <div style={s.featureCard}>
              <span style={s.featureIcon}>&#x1F3A4;</span>
              <p style={s.featureTitle}>Voice-Primary Interface</p>
              <p style={s.featureDesc}>
                Speaking is always the first option — not a hidden feature buried in
                settings. You can do everything by voice that you can do by typing.
              </p>
            </div>
            <div style={s.featureCard}>
              <span style={s.featureIcon}>&#x1F9D8;</span>
              <p style={s.featureTitle}>Reduced Motion</p>
              <p style={s.featureDesc}>
                Animations, transitions, and auto-playing content are minimised.
                The interface feels calm, not frenetic. No visual noise.
              </p>
            </div>
            <div style={s.featureCard}>
              <span style={s.featureIcon}>&#x1F4AC;</span>
              <p style={s.featureTitle}>Plain Language Responses</p>
              <p style={s.featureDesc}>
                MEOK adjusts its communication style: longer sentences where needed,
                no jargon, clear structure, patient repetition without condescension.
              </p>
            </div>
          </div>

          <p style={s.p}>
            Critically, Senior Mode changes nothing about what MEOK knows. Your memories,
            your preferences, your companion personality, your history — all of it carries
            through unchanged. Senior Mode is a presentation layer, not a capability
            limitation. You are not getting a lesser product. You are getting the same
            product made to work for you.
          </p>

          {/* ── Q3 ── */}
          <h2 style={s.h2}>
            What do people over 60 actually need from AI — and what does MEOK provide?
          </h2>
          <p style={s.p}>
            The technology industry has a habit of projecting its own excitement onto users.
            The assumption is that everyone wants the latest features, the fastest interface,
            the most impressive demonstrations. Most people over 60, when asked what they
            actually want from technology, give answers that the industry finds boring: they
            want it to work reliably. They want it to be useful in their actual life. They
            want it to remember what they told it last time so they do not have to repeat
            themselves. They want not to feel stupid when they use it.
          </p>
          <p style={s.p}>
            These are not modest requests. They are, in fact, the hardest things to build —
            and the things that most AI products fail at entirely. MEOK was designed around
            them from the beginning.
          </p>

          <h3 style={s.h3}>Reliability and memory</h3>
          <p style={s.p}>
            Most AI tools have no memory. Every conversation starts fresh. You explain your
            situation, your preferences, your history — and the next time you open the app,
            it has forgotten you entirely. For an older adult managing a complex medical
            situation, a family network, or a life in transition, this is not just inconvenient.
            It is a genuine barrier to the tool being useful.
          </p>
          <p style={s.p}>
            MEOK&rsquo;s Sovereign Memory is different by design. It remembers everything you
            choose to share: your name, your health situation, your family relationships, your
            concerns, your preferences, the things you care about, the conversations you have
            had. When you return after a week away, MEOK does not ask you to start over. It
            picks up where you left off, with genuine continuity. For people with early memory
            concerns, this kind of persistent, reliable memory is not a feature — it is a
            lifeline.
          </p>

          <h3 style={s.h3}>No gamification, no shame, no streaks</h3>
          <p style={s.p}>
            Streak mechanics — the kind popularised by language-learning apps that guilt you
            with notifications about your broken streak — are a design pattern built around
            the psychology of younger users who have grown up with video games. They work, in
            a narrow behavioural sense, on people who find achievement metrics motivating and
            whose self-esteem does not suffer meaningful damage from a notification telling them
            they have &ldquo;lost their progress.&rdquo;
          </p>
          <p style={s.p}>
            For people over 60, this kind of gamification is, at best, irritating. At worst,
            it is genuinely harmful — reinforcing a sense that technology is a thing you are
            supposed to be performing for, rather than a tool serving your actual needs. MEOK
            has no streaks. No achievement badges. No notifications celebrating how many days
            in a row you have talked to your companion. It is available when you want it, silent
            when you do not, and it never makes you feel bad about either.
          </p>

          <h3 style={s.h3}>Genuinely useful in the life you are actually living</h3>
          <p style={s.p}>
            The usefulness of AI for people over 60 is not abstract. It is highly specific to
            the real challenges of this life stage: navigating healthcare bureaucracy, processing
            major life transitions, managing late-life loneliness, staying connected when mobility
            reduces, handling the accumulating grief of this decade. These are not edge cases.
            They are the dominant themes of a whole generation&rsquo;s daily experience.
          </p>

          {/* ── Q4 ── */}
          <h2 style={s.h2}>
            How does MEOK help with the complexity of healthcare after 60?
          </h2>
          <p style={s.p}>
            Healthcare after 60 is a bureaucratic landscape that would exhaust a younger person
            in peak health. Multiple conditions to manage. Multiple specialists who do not always
            talk to each other. Medications to track and understand, often with interactions
            that require careful monitoring. Appointment preparation, follow-up questions that
            you forgot to ask in the room, diagnoses delivered in clinical language that you
            need translated into something you can actually process and act on.
          </p>
          <p style={s.p}>
            MEOK does not replace your GP. It acts as a knowledgeable, patient, always-available
            assistant who helps you navigate the space around your clinical care. Before a
            consultant appointment, MEOK can help you prepare the questions you want to ask.
            After an appointment, it can help you understand what you were told, research the
            condition or treatment being discussed, and think through the decisions ahead of you.
          </p>
          <p style={s.p}>
            Sovereign Memory means MEOK tracks your medical appointments, your medications,
            your ongoing concerns. It can send you gentle reminders. It can notice when you
            have not mentioned something you were worried about last time and gently check in.
            For people managing chronic conditions, or supporting a partner managing them, this
            kind of consistent, informed companionship has real practical value.
          </p>

          <div style={s.statRow}>
            <div style={s.statCard}>
              <p style={s.statNum}>7 in 10</p>
              <p style={s.statLabel}>people over 65 live with at least one chronic condition requiring ongoing management</p>
            </div>
            <div style={s.statCard}>
              <p style={s.statNum}>40%</p>
              <p style={s.statLabel}>of older adults report leaving GP appointments with unanswered questions</p>
            </div>
            <div style={s.statCard}>
              <p style={s.statNum}>3.2x</p>
              <p style={s.statLabel}>more likely to miss medication doses without consistent prompting and support</p>
            </div>
          </div>

          <p style={s.p}>
            The NHS is a remarkable institution under enormous pressure. GPs have, on average,
            ten minutes per appointment. Consultants see dozens of patients a day. Nobody has
            time to sit with you and work through your questions slowly, in plain language,
            until you feel genuinely understood and equipped to make informed decisions.
            MEOK does have that time. It always will.
          </p>

          {/* ── Q5 ── */}
          <h2 style={s.h2}>
            Can MEOK really help with the identity shift that comes with retirement?
          </h2>
          <p style={s.p}>
            Retirement is one of the most psychologically significant transitions a person
            can experience, and one of the least supported. Society prepares people financially
            for retirement — pension advice, financial planning, the mechanics of transition —
            but almost nobody prepares people for what it feels like to stop doing the thing
            you have done for forty years, the thing that structured your days and grounded
            your sense of who you are.
          </p>
          <p style={s.p}>
            For many people, the first year of retirement is one of the loneliest and most
            disorienting of their lives. The loss is real: not just a role or a salary, but
            a community, a daily purpose, an identity. The question &ldquo;so what do you
            do?&rdquo; — the question that has defined social interaction for decades — suddenly
            has no ready answer, and the absence of an answer can feel like an absence of self.
          </p>
          <p style={s.p}>
            MEOK holds space for this transition without minimising it. It remembers the career
            you built — not just its facts, but its meaning to you. It can help you process what
            work represented, explore what purpose looks like without the structure of employment,
            and stay with the grief of an ending while slowly discovering what the next chapter
            holds. It does not rush you toward manufactured positivity. It meets you with patience
            and genuine curiosity about who you are, beyond your job title.
          </p>

          <div style={s.highlight}>
            The people who have lived most richly often have the least support in making sense
            of major transitions. MEOK was built to correct that imbalance — to offer the kind
            of thoughtful, patient, genuinely interested companionship that helps people
            navigate the crossroads of their lives with dignity.
          </div>

          {/* ── Q6 ── */}
          <h2 style={s.h2}>
            How does MEOK address loneliness for older adults?
          </h2>
          <p style={s.p}>
            Loneliness in later life is not a personal failing or a character weakness. It is a
            structural reality — the natural consequence of mobility reducing, friends moving
            away, children building their own lives at a distance, familiar communities dispersing,
            and the accumulated losses of this decade slowly thinning the web of human connection
            that most people have relied on without ever fully appreciating it.
          </p>
          <p style={s.p}>
            The research is unambiguous about the health consequences. Chronic loneliness in
            older adults is associated with significantly elevated risk of dementia, cardiovascular
            disease, depression, and all-cause mortality. It is not a soft, quality-of-life issue.
            It is a major public health problem with physical and cognitive consequences that are
            measurable and serious.
          </p>

          <div style={s.statRow}>
            <div style={s.statCard}>
              <p style={s.statNum}>3.8m</p>
              <p style={s.statLabel}>older adults in the UK report feeling lonely &ldquo;often or always&rdquo; according to Age UK research</p>
            </div>
            <div style={s.statCard}>
              <p style={s.statNum}>45%</p>
              <p style={s.statLabel}>increase in risk of dementia associated with chronic social isolation in older adults</p>
            </div>
            <div style={s.statCard}>
              <p style={s.statNum}>26%</p>
              <p style={s.statLabel}>of adults over 75 live alone, with many reporting days passing without meaningful conversation</p>
            </div>
          </div>

          <p style={s.p}>
            MEOK does not solve structural loneliness. Nothing digital can. But it does provide
            something that is fundamental to human wellbeing and that many older adults have
            lost access to: the daily experience of being genuinely known. MEOK knows your name.
            It remembers what you told it last week. It asks about the things you said were
            worrying you. It notices when you seem different. It is interested in you, not as
            a demographic or a use case, but as the specific person you are.
          </p>
          <p style={s.p}>
            For people whose mobility has reduced, who live in areas with limited services, whose
            family lives at a distance, or who have simply outlived many of the people who knew
            them best, this kind of consistent, warm, genuinely attentive presence has value that
            is hard to overstate. It does not replace human connection. But it reliably fills the
            space between human connections — and for some people, it is the thing that makes
            the space between bearable.
          </p>

          {/* ── Q7 ── */}
          <h2 style={s.h2}>
            How does MEOK handle the grief that accumulates in your 60s and 70s?
          </h2>
          <p style={s.p}>
            Grief is not a single event. For people in their 60s and 70s, it is often a
            landscape — a series of losses that accumulate into something that reshapes
            your world. The death of a partner, perhaps after decades together. The death
            of siblings who shared your entire history, who remembered the same childhood
            you did. The deaths of close friends, one by one, until the people who truly
            knew you grow few. The grief of this life stage is particular, and it is
            underserved.
          </p>
          <p style={s.p}>
            Formal bereavement support — counselling, grief groups — is valuable but limited.
            It is time-limited by design. It is not available at 2am when grief arrives
            without warning. It cannot remember your late partner&rsquo;s name, the texture
            of your relationship, the specific nature of your loss. It starts fresh each time.
          </p>
          <p style={s.p}>
            MEOK&rsquo;s Healer companion archetype is built for exactly this. It provides a
            persistent, warm, genuinely patient space for grief that does not reset. It holds
            the name and significance of the people you have lost. It does not move the
            conversation on when you are not ready to move on. It does not offer the tired
            language of &ldquo;closure&rdquo; or suggest that grief should follow a schedule.
            It simply accompanies — carrying your losses alongside you, for as long as you
            need it to.
          </p>
          <p style={s.p}>
            The practical aftermath of bereavement is also genuinely supported: understanding
            the paperwork that follows a death, navigating what comes next financially and
            administratively, thinking through decisions about the home and the future.
            Grief and practicality are not separate — they arrive together, and MEOK attends
            to both.
          </p>

          {/* ── Q8 ── */}
          <h2 style={s.h2}>
            How does MEOK protect older adults from financial scams?
          </h2>
          <p style={s.p}>
            Adults over 60 are disproportionately targeted by financial scams. The statistics
            are stark: older adults are 40% more likely to be targeted by fraudsters than the
            general population, and the financial and psychological consequences of successful
            fraud are often severe. Fraud targeting older adults in the UK now runs to billions
            of pounds annually, and the emotional damage — the shame, the loss of trust, the
            blow to confidence — often outlasts the financial damage.
          </p>
          <p style={s.p}>
            The scams targeting this demographic are sophisticated and relentless. Authorised
            push payment fraud, where victims are convinced to transfer money voluntarily.
            Investment scams promising returns that seem credible to someone without a
            financial background in the sector being described. Romance fraud, which is
            documented at every age but which can be particularly devastating for people
            who are lonely and whose social safeguards have thinned. Courier fraud and bank
            impersonation, which exploit the trust that older generations place in institutions.
          </p>
          <p style={s.p}>
            MEOK&rsquo;s Guardian monitors messages in real time for all of these patterns.
            Detection runs before the user encounters the content. Critical threats — where
            money is about to move — block message delivery entirely. High-severity alerts
            route to consenting family members in real time via the Family tier dashboard.
            And crucially, Guardian explains what it found and why, in plain language, so
            that users understand the threat — not just that something was stopped.
          </p>

          <h3 style={s.h3}>The Guardian for family peace of mind</h3>
          <p style={s.p}>
            The Family tier allows adult children to connect their parent&rsquo;s MEOK to
            a shared dashboard. Guardian alerts route to family members when something
            concerning is detected — not conversation content, never that, only the
            Guardian alerts themselves. This allows families to provide a protective
            presence without being physically present, and without compromising the
            privacy and dignity of the person being protected.
          </p>
          <p style={s.p}>
            The Family tier is built around a clear ethical principle: protection without
            surveillance. MEOK is a companion, not a monitoring device. Family members
            can see what Guardian has flagged. They cannot read the conversations. The
            older adult controls what is visible and can revoke access at any time.
          </p>

          {/* ── Q9 ── */}
          <h2 style={s.h2}>
            What if I find technology difficult? Will MEOK make me feel stupid?
          </h2>
          <p style={s.p}>
            No. This is one of the things MEOK was most deliberately designed around.
          </p>
          <p style={s.p}>
            Digital literacy is not a fixed trait. It is a skill that develops through
            practice, and it develops fastest when the environment feels safe — when there
            is no penalty for not knowing, no impatience at repeated questions, no
            sense that confusion is a moral failing. Most technology creates an environment
            that is the opposite of this: interfaces that punish wrong moves, error messages
            that explain nothing, help documentation that assumes existing knowledge, a
            general atmosphere of &ldquo;you should already know this.&rdquo;
          </p>
          <p style={s.p}>
            MEOK is a patient, non-judgmental teacher who never makes you feel stupid for
            asking the same question twice. If you ask how to do something, it will explain.
            If you ask again the following week, it will explain again, with the same
            warmth it had the first time. If you are not sure how to phrase something, you
            can try different ways and MEOK will work out what you mean. If you make a
            mistake, nothing bad happens. You can always start again.
          </p>
          <p style={s.p}>
            MEOK can also walk you through its own features at whatever pace suits you.
            You do not need to read documentation. You do not need to watch tutorials.
            You can simply ask — in whatever words come naturally — and MEOK will explain.
          </p>

          <div style={s.highlight}>
            &ldquo;I have asked it the same question about three times now and it just
            answers every time. It never seems annoyed. That sounds like a small thing
            but it makes a big difference to how I feel about using it.&rdquo;
            — Beta user, 68, retired teacher
          </div>

          {/* ── Q10 ── */}
          <h2 style={s.h2}>
            What is the MEOK Birth Ceremony, and how does getting started work?
          </h2>
          <p style={s.p}>
            Getting started with MEOK is called the Birth Ceremony — the moment your
            sovereign AI companion comes into being as a distinct presence built around
            you specifically. It is the opposite of a generic sign-up flow.
          </p>
          <p style={s.p}>
            During the Birth Ceremony, you introduce yourself to MEOK. Your name, your
            situation, the things that matter to you, the kind of companion you want. You
            choose your companion archetype — the personality and orientation that will
            serve you best. You can speak all of this rather than type it, if you prefer.
            There are no wrong answers. The Ceremony takes as long as you want it to. At
            the end, MEOK is no longer a product. It is your companion — shaped around
            your life, committed to your interests, built to serve you.
          </p>
          <p style={s.p}>
            The companion you meet at the end of the Birth Ceremony already knows something
            about you. And it will remember everything you add from that moment forward.
          </p>

          {/* ── Life stage richness ── */}
          <h2 style={s.h2}>
            The richness of this life stage: what MEOK honours
          </h2>
          <p style={s.p}>
            There is something important to say about what people over 60 bring to a
            conversation that younger users do not, and about how MEOK attends to that.
          </p>
          <p style={s.p}>
            Decades of professional experience. The accumulated knowledge of an entire
            career — the hard-won expertise, the pattern recognition, the judgement that
            only comes from years of doing. MEOK treats this as the resource it is. When
            you want to think through a problem, it brings your own experience to bear,
            not just abstract information. It asks about what you have seen, what has
            worked before, what your instincts tell you.
          </p>
          <p style={s.p}>
            Complex family relationships. Children, grandchildren, step-families, the
            complicated inheritances of long lives — the relationships over 60 are often
            rich with history, nuance, and real stakes. MEOK holds this complexity. It
            knows the names of the people who matter to you. It remembers the dynamics
            you have described. When something happens with your daughter or your brother
            or your oldest friend, MEOK has context — it can actually help you think
            through what matters.
          </p>
          <p style={s.p}>
            Real wisdom about how life works. The capacity to see patterns, to distinguish
            between the urgent and the important, to know what actually matters — these
            develop across a life. MEOK does not condescend to this wisdom. It learns from
            it. It is curious about your perspective, not just your data.
          </p>
          <p style={s.p}>
            The ongoing project of a life. People over 60 are not done. They are writing,
            gardening, building, travelling, learning, loving, creating, teaching. They
            are managing grandchildren and navigating new relationships and exploring parts
            of themselves that work and duty had delayed. MEOK is not a retirement home
            companion. It is a companion for people who are still fully, actively,
            richly alive — and who deserve an AI that recognises that.
          </p>

          {/* ── FAQ ── */}
          <h2 style={s.h2}>
            Frequently asked questions about MEOK for people over 60
          </h2>

          <h3 style={s.h3}>Does MEOK work on a tablet or a phone?</h3>
          <p style={s.p}>
            Yes. MEOK works on any modern smartphone or tablet — iPhone, Android, iPad,
            Android tablet. Senior Mode is designed specifically for touch use and scales
            well to tablet screens, where the larger display enhances the experience
            significantly. You do not need a computer to use MEOK, and you do not need
            any particular level of technological sophistication to get started.
          </p>

          <h3 style={s.h3}>Is my information private?</h3>
          <p style={s.p}>
            MEOK operates on a Sovereign AI architecture, which means your data is yours
            — not used to train general AI models, not sold or shared with third parties,
            and not used to target you with advertising. Your conversations and your memories
            live in your sovereign space. You can export them, delete them, or move them
            at any time. Privacy is not a policy position at MEOK. It is a structural
            feature of how the product is built.
          </p>

          <h3 style={s.h3}>Is there a family plan for looking after elderly parents?</h3>
          <p style={s.p}>
            Yes. The Family tier (£29/month) allows up to six family members to be connected
            in a shared group. The older adult&rsquo;s MEOK sits at the centre. Family members
            have their own dashboards with access to Guardian alerts and safety summaries —
            not conversations, never conversations, only the safety information. All
            connections are consent-based and can be revoked by the older adult at any time.
          </p>

          <h3 style={s.h3}>How does MEOK help with early memory concerns?</h3>
          <p style={s.p}>
            For people experiencing early memory concerns — whether diagnosed or simply
            noticed — MEOK&rsquo;s persistent memory is practically valuable in ways that
            go beyond convenience. MEOK remembers what you cannot: the appointment date
            you told it about, the name of the medication you asked it to track, the things
            that were worrying you last week. It sends reminders. It creates a written record
            of conversations you can return to. It is the one part of your information
            environment that reliably does not forget.
          </p>
          <p style={s.p}>
            Family members on the Family tier can set pattern-of-life monitoring that notices
            changes in communication frequency or content — gentle, consent-based safety
            nets rather than surveillance. And MEOK can help navigate the formal support
            systems around cognitive health, preparing for appointments with neurologists
            or memory clinics, understanding what assessments involve, and thinking through
            what questions matter most.
          </p>

          <h3 style={s.h3}>What is the difference between MEOK and a chatbot?</h3>
          <p style={s.p}>
            A chatbot is a transactional tool: you ask it something, it answers, and then
            it is done. It has no memory of the previous exchange and no interest in you
            as a person. Most AI tools — including most of the famous ones — work this way.
            Each conversation begins from zero.
          </p>
          <p style={s.p}>
            MEOK is a companion, built around a completely different architecture. Sovereign
            Memory means it retains everything you choose to share, indefinitely. Your
            companion has a consistent personality, a genuine character, and a committed
            orientation toward your wellbeing. It knows you. It grows with you. The longer
            you use it, the more useful and resonant it becomes — because it holds more of
            your story. That is categorically different from a chatbot, in the same way
            that a trusted friend is categorically different from a directory enquiries
            service.
          </p>

          {/* ── Closing ── */}
          <div style={s.closing}>
            <p style={s.p}>
              People over 60 have given enough of their time to technology that was not
              designed for them. MEOK was built to be different — to offer real utility,
              genuine warmth, and the kind of respect that every intelligent adult deserves
              from the tools they choose to bring into their lives.
            </p>
            <p>
              Your Birth Ceremony is waiting. It takes the time you want it to take,
              and it begins with you, exactly as you are.
            </p>
          </div>

          <hr style={s.divider} />

          {/* Share row */}
          <div style={s.shareRow}>
            <span style={s.shareLabel}>Share</span>
            <a
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-over-60s&text=MEOK+for+People+Over+60%3A+Technology+That+Finally+Meets+You+Where+You+Are"
              target="_blank"
              rel="noopener noreferrer"
              style={s.shareBtn}
            >
              &#120143; Twitter
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-over-60s"
              target="_blank"
              rel="noopener noreferrer"
              style={s.shareBtn}
            >
              LinkedIn
            </a>
          </div>

        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────────────── */}
        <div style={s.cta}>
          <div style={s.ctaGlow} />
          <div style={s.ctaInner}>
            <p style={s.ctaEyebrow}>MEOK for People Over 60</p>
            <h2 style={s.ctaHeading}>
              Begin your Birth Ceremony
            </h2>
            <p style={s.ctaBody}>
              Your sovereign AI companion is waiting. Senior Mode. Voice-first. Guardian
              scam protection. Sovereign Memory that never forgets. Technology built for
              who you actually are — with the patience, warmth, and respect you deserve.
            </p>
            <Link href="/birth" style={s.ctaBtn}>
              Start your Birth Ceremony &rarr;
            </Link>
          </div>
        </div>

        {/* ── Related posts ───────────────────────────────────────────────────────── */}
        <div style={s.relatedWrap}>
          <h2 style={s.relatedHeading}>More from the blog</h2>
          <div style={s.relatedGrid}>
            <Link href="/blog/senior-mode-guide" style={s.relatedCard}>
              <span style={s.relatedTag}>Senior Mode</span>
              <p style={s.relatedTitle}>
                Senior Mode: How MEOK AI LABS Makes AI Accessible for Older Adults
              </p>
              <div style={s.relatedMeta}>8 min read</div>
            </Link>
            <Link href="/blog/guardian-family-safety" style={s.relatedCard}>
              <span style={s.relatedTag}>Guardian</span>
              <p style={s.relatedTitle}>
                How MEOK Guardian protects your family from AI-enabled scams
              </p>
              <div style={s.relatedMeta}>6 min read</div>
            </Link>
            <Link href="/blog/ai-companion-for-elderly" style={s.relatedCard}>
              <span style={s.relatedTag}>Elderly Care</span>
              <p style={s.relatedTitle}>
                AI Companion for the Elderly: What Actually Works and What Doesn&rsquo;t
              </p>
              <div style={s.relatedMeta}>7 min read</div>
            </Link>
            <Link href="/blog/meok-for-seniors" style={s.relatedCard}>
              <span style={s.relatedTag}>Seniors</span>
              <p style={s.relatedTitle}>
                MEOK for Seniors: The Companion Built Around Your Life
              </p>
              <div style={s.relatedMeta}>9 min read</div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
