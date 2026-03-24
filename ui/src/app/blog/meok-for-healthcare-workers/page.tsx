import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for Healthcare Workers: Confidential AI Support for NHS Staff | MEOK AI LABS",
  description:
    "40% of nurses report burnout. 1 in 4 NHS staff has a mental health issue. MEOK offers a confidential, 24/7 AI companion for healthcare workers \u2014 no employer reporting, no waiting lists, no stigma. Debrief difficult shifts, process secondary trauma, and find space to breathe.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-healthcare-workers" },
  openGraph: {
    title: "MEOK for Healthcare Workers: Confidential AI Support for NHS Staff",
    description:
      "Healthcare workers carry secondary trauma, burnout, and moral injury every shift. MEOK is a private AI companion that never reports to employers or regulators \u2014 available at 3am, between shifts, whenever you need it.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-healthcare-workers",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Healthcare+Workers&desc=Confidential+AI+support+for+NHS+staff+and+healthcare+professionals.",
        width: 1200,
        height: 630,
        alt: "MEOK for Healthcare Workers: Confidential AI Support for NHS Staff",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Healthcare Workers: Confidential AI Support for NHS Staff",
    description:
      "Secondary trauma, 12-hour shifts, the weight of other people\u2019s worst days. MEOK is confidential, always on, and never talks to your employer.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Healthcare+Workers&desc=Confidential+AI+support+for+NHS+staff+and+healthcare+professionals.",
    ],
  },
  keywords: [
    "AI for healthcare workers",
    "NHS burnout support",
    "AI for nurses mental health",
    "secondary traumatic stress support",
    "confidential AI companion NHS",
    "healthcare worker wellbeing app",
    "AI for shift workers",
    "compassion fatigue AI",
    "NHS staff mental health",
    "AI debriefing for doctors",
    "MEOK AI healthcare",
    "moral injury NHS",
  ],
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK for Healthcare Workers: Confidential AI Support for NHS Staff",
  description:
    "40% of nurses report burnout. 1 in 4 NHS staff has a mental health issue. MEOK offers a confidential, 24/7 AI companion for healthcare workers \u2014 no employer reporting, no waiting lists, no stigma.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-for-healthcare-workers",
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
  },
  keywords: [
    "AI for healthcare workers",
    "NHS burnout support",
    "secondary traumatic stress",
    "confidential AI companion",
    "compassion fatigue",
    "moral injury NHS",
    "shift work mental health",
    "MEOK AI LABS",
  ],
  articleSection: "MEOK for Healthcare Workers",
  inLanguage: "en-GB",
  image:
    "https://meok.ai/api/og?title=MEOK+for+Healthcare+Workers&desc=Confidential+AI+support+for+NHS+staff+and+healthcare+professionals.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-healthcare-workers",
  },
  about: [
    { "@type": "Thing", name: "NHS burnout" },
    { "@type": "Thing", name: "Secondary traumatic stress" },
    { "@type": "Thing", name: "Healthcare worker mental health" },
    { "@type": "Thing", name: "Compassion fatigue" },
    { "@type": "Thing", name: "Confidential AI support" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can healthcare workers use AI for mental health support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI companions like MEOK are well-suited to the specific demands of healthcare work: 24/7 availability, zero waiting lists, and complete confidentiality. MEOK acts as a processing partner \u2014 a space to debrief difficult cases, offload accumulated stress, and decompress after shifts without fear of professional consequences.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK confidential for NHS staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely. MEOK is an independent tool \u2014 it has no connection to NHS systems, occupational health departments, or any employer. Conversations are encrypted and never shared with third parties. Nothing said in MEOK can be accessed by your trust, your manager, or any regulator.",
      },
    },
    {
      "@type": "Question",
      name: "What is secondary traumatic stress in healthcare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secondary traumatic stress (STS) is the psychological impact of repeatedly witnessing or hearing about others\u2019 trauma. Healthcare workers absorb patients\u2019 pain, fear, and death shift after shift. Over time this accumulates into symptoms similar to PTSD \u2014 intrusive thoughts, emotional numbness, hypervigilance, and withdrawal \u2014 even without a single catastrophic event.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with shift work and sleep problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can\u2019t prescribe sleep medication, but it can help you decompress before sleep, process the adrenaline of a difficult shift, and build wind-down routines. Many healthcare workers find that simply offloading to MEOK after a night shift helps quiet the mental noise that prevents rest.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK report what I say to my employer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK has no duty-to-report mechanism and no integration with any employer, NHS trust, or professional regulator. Your conversations are your own. MEOK\u2019s data sovereignty model means your data is encrypted, never used for training, and never shared \u2014 full stop.",
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: "#0d0c18",
    color: "#f5f0e8",
    minHeight: "100vh",
    fontFamily: 'Georgia, "Times New Roman", serif',
  } as React.CSSProperties,

  nav: {
    padding: "20px 24px",
    borderBottom: "1px solid rgba(201,168,76,0.15)",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  } as React.CSSProperties,

  navLink: {
    color: "#c9a84c",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: "0.04em",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  navSep: {
    color: "rgba(201,168,76,0.4)",
    fontSize: "14px",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  navCurrent: {
    color: "rgba(245,240,232,0.5)",
    fontSize: "14px",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  hero: {
    padding: "72px 24px 56px",
    maxWidth: "820px",
    margin: "0 auto",
    textAlign: "center" as const,
    position: "relative" as const,
  } as React.CSSProperties,

  heroGlow: {
    position: "absolute" as const,
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "600px",
    height: "300px",
    background:
      "radial-gradient(ellipse at center top, rgba(201,168,76,0.12) 0%, transparent 70%)",
    pointerEvents: "none" as const,
  } as React.CSSProperties,

  tagRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
    justifyContent: "center",
    marginBottom: "28px",
  } as React.CSSProperties,

  tag: {
    background: "rgba(201,168,76,0.1)",
    border: "1px solid rgba(201,168,76,0.25)",
    color: "#c9a84c",
    fontSize: "11px",
    letterSpacing: "0.08em",
    padding: "4px 12px",
    borderRadius: "20px",
    fontFamily: "system-ui, sans-serif",
    textTransform: "uppercase" as const,
  } as React.CSSProperties,

  heroTitle: {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "20px",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  heroGold: {
    color: "#c9a84c",
  } as React.CSSProperties,

  heroLead: {
    fontSize: "clamp(16px, 2.5vw, 20px)",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.8)",
    maxWidth: "640px",
    margin: "0 auto 32px",
  } as React.CSSProperties,

  metaRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "24px",
    justifyContent: "center",
    fontSize: "13px",
    color: "rgba(245,240,232,0.5)",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  article: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "0 24px 80px",
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(201,168,76,0.15)",
    margin: "48px 0",
  } as React.CSSProperties,

  h2: {
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: "16px",
    marginTop: "48px",
    color: "#f5f0e8",
  } as React.CSSProperties,

  h3: {
    fontSize: "clamp(17px, 2.5vw, 22px)",
    fontWeight: 600,
    lineHeight: 1.4,
    marginBottom: "12px",
    marginTop: "36px",
    color: "#c9a84c",
  } as React.CSSProperties,

  p: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.8,
    marginBottom: "20px",
    color: "#f5f0e8",
  } as React.CSSProperties,

  pMuted: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.8,
    marginBottom: "20px",
    color: "rgba(245,240,232,0.7)",
  } as React.CSSProperties,

  atomicAnswer: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.8,
    marginBottom: "28px",
    color: "rgba(245,240,232,0.85)",
    paddingLeft: "20px",
    borderLeft: "2px solid rgba(201,168,76,0.35)",
  } as React.CSSProperties,

  callout: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "10px",
    padding: "28px 32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: "13px",
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "12px",
    fontWeight: 600,
  } as React.CSSProperties,

  calloutBody: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "0",
  } as React.CSSProperties,

  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "24px",
    marginBottom: "36px",
  } as React.CSSProperties,

  statCard: {
    background: "rgba(245,240,232,0.03)",
    border: "1px solid rgba(245,240,232,0.08)",
    borderRadius: "10px",
    padding: "24px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  statNum: {
    fontSize: "clamp(32px, 5vw, 44px)",
    fontWeight: 800,
    color: "#c9a84c",
    lineHeight: 1,
    marginBottom: "8px",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "13px",
    lineHeight: 1.5,
    color: "rgba(245,240,232,0.6)",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "20px",
    marginTop: "24px",
    marginBottom: "36px",
  } as React.CSSProperties,

  featureCard: {
    background: "rgba(13,12,24,0.8)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "10px",
    padding: "24px",
  } as React.CSSProperties,

  featureIcon: {
    fontSize: "28px",
    marginBottom: "12px",
    display: "block",
  } as React.CSSProperties,

  featureName: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "8px",
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.03em",
  } as React.CSSProperties,

  featureDesc: {
    fontSize: "14px",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.7)",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  problemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "16px",
    marginTop: "24px",
    marginBottom: "36px",
  } as React.CSSProperties,

  problemCard: {
    background: "rgba(245,240,232,0.03)",
    border: "1px solid rgba(245,240,232,0.08)",
    borderRadius: "10px",
    padding: "22px",
  } as React.CSSProperties,

  problemNum: {
    fontSize: "36px",
    fontWeight: 800,
    color: "rgba(201,168,76,0.2)",
    lineHeight: 1,
    marginBottom: "8px",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  problemTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "8px",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  problemBody: {
    fontSize: "13px",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.6)",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  timelineWrap: {
    borderLeft: "2px solid rgba(201,168,76,0.25)",
    paddingLeft: "28px",
    marginTop: "24px",
    marginBottom: "36px",
  } as React.CSSProperties,

  timelineItem: {
    position: "relative" as const,
    marginBottom: "32px",
  } as React.CSSProperties,

  timelineDot: {
    position: "absolute" as const,
    left: "-37px",
    top: "4px",
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "#c9a84c",
    border: "3px solid #0d0c18",
  } as React.CSSProperties,

  timelineLabel: {
    fontSize: "12px",
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.08em",
    color: "#c9a84c",
    marginBottom: "6px",
    textTransform: "uppercase" as const,
  } as React.CSSProperties,

  timelineTitle: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "6px",
    color: "#f5f0e8",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  timelineBody: {
    fontSize: "14px",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.7)",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  pullQuote: {
    borderLeft: "3px solid #c9a84c",
    paddingLeft: "24px",
    margin: "32px 0",
  } as React.CSSProperties,

  pullQuoteText: {
    fontSize: "clamp(17px, 2.5vw, 22px)",
    fontStyle: "italic",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "0",
  } as React.CSSProperties,

  highlight: {
    background: "rgba(201,168,76,0.12)",
    borderRadius: "4px",
    padding: "2px 6px",
    color: "#c9a84c",
  } as React.CSSProperties,

  warningBox: {
    background: "rgba(201,68,68,0.07)",
    border: "1px solid rgba(201,68,68,0.2)",
    borderRadius: "10px",
    padding: "24px 28px",
    marginBottom: "28px",
  } as React.CSSProperties,

  warningTitle: {
    fontSize: "13px",
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "rgba(220,100,100,0.9)",
    marginBottom: "10px",
    fontWeight: 600,
  } as React.CSSProperties,

  warningBody: {
    fontSize: "clamp(14px, 2vw, 16px)",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.75)",
    marginBottom: "0",
  } as React.CSSProperties,

  encryptBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(201,168,76,0.1)",
    border: "1px solid rgba(201,168,76,0.25)",
    borderRadius: "6px",
    padding: "10px 16px",
    marginBottom: "8px",
    marginRight: "8px",
    fontFamily: "system-ui, sans-serif",
    fontSize: "13px",
    color: "rgba(245,240,232,0.8)",
  } as React.CSSProperties,

  encryptGold: {
    color: "#c9a84c",
    fontWeight: 700,
  } as React.CSSProperties,

  badgeRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
    marginBottom: "28px",
  } as React.CSSProperties,

  faqWrap: {
    marginTop: "24px",
    marginBottom: "36px",
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid rgba(245,240,232,0.08)",
    paddingBottom: "28px",
    marginBottom: "28px",
  } as React.CSSProperties,

  faqQ: {
    fontSize: "clamp(16px, 2.5vw, 19px)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "12px",
    lineHeight: 1.4,
  } as React.CSSProperties,

  faqA: {
    fontSize: "clamp(14px, 2vw, 16px)",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.75)",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  ctaBox: {
    background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(13,12,24,0.8) 100%)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "16px",
    padding: "48px 40px",
    textAlign: "center" as const,
    marginTop: "56px",
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: "clamp(22px, 4vw, 32px)",
    fontWeight: 700,
    marginBottom: "16px",
    lineHeight: 1.3,
  } as React.CSSProperties,

  ctaBody: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.75)",
    maxWidth: "520px",
    margin: "0 auto 32px",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  ctaButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,

  btnPrimary: {
    background: "#c9a84c",
    color: "#0d0c18",
    padding: "14px 32px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 700,
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.02em",
  } as React.CSSProperties,

  btnSecondary: {
    background: "transparent",
    color: "#c9a84c",
    padding: "14px 32px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 600,
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.02em",
    border: "1px solid rgba(201,168,76,0.4)",
  } as React.CSSProperties,

  footer: {
    borderTop: "1px solid rgba(201,168,76,0.1)",
    padding: "32px 24px",
    textAlign: "center" as const,
    fontSize: "13px",
    color: "rgba(245,240,232,0.35)",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  footerLink: {
    color: "rgba(201,168,76,0.6)",
    textDecoration: "none",
    marginLeft: "4px",
    marginRight: "4px",
  } as React.CSSProperties,
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function MeokForHealthcareWorkersPage() {
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
      <nav style={s.nav} aria-label="Breadcrumb">
        <Link href="/" style={s.navLink}>MEOK</Link>
        <span style={s.navSep}>/</span>
        <Link href="/blog" style={s.navLink}>Blog</Link>
        <span style={s.navSep}>/</span>
        <span style={s.navCurrent}>MEOK for Healthcare Workers</span>
      </nav>

      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroGlow} aria-hidden="true" />
        <div style={s.tagRow}>
          <span style={s.tag}>Healthcare</span>
          <span style={s.tag}>NHS</span>
          <span style={s.tag}>Burnout</span>
          <span style={s.tag}>Confidential Support</span>
          <span style={s.tag}>Shift Work</span>
        </div>
        <h1 style={s.heroTitle}>
          MEOK for{" "}
          <span style={s.heroGold}>Healthcare Workers</span>
        </h1>
        <p style={s.heroLead}>
          You spend every shift holding space for other people\u2019s worst moments.
          MEOK is a confidential AI companion that holds space for yours \u2014
          available at 3am, between shifts, whenever the weight gets heavy.
          No waiting lists. No employer access. No judgment.
        </p>
        <div style={s.metaRow}>
          <span>By Nicholas Templeman</span>
          <span>MEOK AI LABS</span>
          <span>24 March 2026</span>
          <span>12 min read</span>
        </div>
      </header>

      {/* Article body */}
      <article style={s.article}>

        {/* ── SECTION 1: The crisis ── */}
        <hr style={s.divider} />

        <h2 style={s.h2}>
          How bad is healthcare worker burnout in the NHS?
        </h2>
        <p style={s.atomicAnswer}>
          Severe. NHS staff surveys consistently show that around{" "}
          <span style={s.highlight}>40% of nurses report feeling burned out</span>,
          and approximately 1 in 4 NHS staff members reports experiencing a mental
          health problem in any given year. These are not outliers \u2014 they are the
          baseline of working in one of the world\u2019s most pressured healthcare systems.
        </p>

        <p style={s.p}>
          The NHS is not uniquely broken. Healthcare systems across the UK, the US,
          Australia, and Canada are facing the same structural crisis: too many patients,
          not enough staff, not enough rest, and almost no infrastructure for the
          emotional labour that clinical work demands. The pandemic accelerated what
          was already a long-simmering emergency.
        </p>

        <p style={s.pMuted}>
          But the numbers only tell part of the story. What they don\u2019t capture is
          the texture of the problem \u2014 the 12-hour shift where you watched someone
          die alone because visiting was restricted. The patient who reminded you of
          your father. The colleague who broke down in the staff toilet and never came
          back. These are not clinical events. They are human events that accumulate,
          unprocessed, over years.
        </p>

        {/* Stats grid */}
        <div style={s.statGrid} aria-label="NHS burnout statistics">
          <div style={s.statCard}>
            <p style={s.statNum}>40%</p>
            <p style={s.statLabel}>of nurses report feeling burned out in NHS staff surveys</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>1 in 4</p>
            <p style={s.statLabel}>NHS staff members experiences a mental health problem each year</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>300k+</p>
            <p style={s.statLabel}>NHS staff left the workforce in 2023 \u2014 many citing wellbeing as a factor</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>6 wks</p>
            <p style={s.statLabel}>average wait for NHS occupational health referral in many trusts</p>
          </div>
        </div>

        <div style={s.callout}>
          <p style={s.calloutTitle}>The structural paradox</p>
          <p style={s.calloutBody}>
            The professionals most trained to recognise and treat mental health
            conditions in others are the least likely to seek help for themselves.
            Healthcare workers carry the tools to diagnose burnout in a patient
            and simultaneously deny it in their own mirror.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── SECTION 2: Why they don't seek help ── */}
        <h2 style={s.h2}>
          Why don\u2019t healthcare workers seek mental health support?
        </h2>
        <p style={s.atomicAnswer}>
          Three barriers dominate: stigma (fear of being seen as weak or unfit),
          professional risk (concern that disclosure could trigger fitness-to-practise
          concerns), and structural impossibility (no time, no access, no energy
          after a 12-hour shift to arrange and attend therapy).
        </p>

        <p style={s.p}>
          The stigma in healthcare settings is particularly sharp because it intersects
          with professional identity. To be a nurse, a doctor, a paramedic, is to be
          someone who copes. It is baked into the self-concept. Admitting you\u2019re
          struggling can feel like a fundamental failure of the role \u2014 not just
          a bad week.
        </p>

        <h3 style={s.h3}>Fear of professional consequences</h3>
        <p style={s.p}>
          This is not paranoia. Healthcare workers operate under regulatory frameworks
          \u2014 the NMC for nurses, the GMC for doctors, the HCPC for allied health
          professionals \u2014 that include fitness-to-practise mechanisms. While these
          bodies explicitly support staff seeking help, the fear remains that disclosing
          mental health difficulties could trigger review, referral, or scrutiny.
        </p>
        <p style={s.pMuted}>
          Even occupational health services, which are nominally confidential, exist
          within the trust. They are funded by the employer. The records exist.
          Many healthcare workers simply do not believe those systems are truly safe.
        </p>

        {/* Problem grid */}
        <div style={s.problemGrid}>
          <div style={s.problemCard}>
            <p style={s.problemNum}>01</p>
            <p style={s.problemTitle}>Stigma within teams</p>
            <p style={s.problemBody}>
              Mental health struggles can be framed as weakness in high-pressure
              clinical environments where stoicism is modelled from the top down.
            </p>
          </div>
          <div style={s.problemCard}>
            <p style={s.problemNum}>02</p>
            <p style={s.problemTitle}>Fear of regulatory scrutiny</p>
            <p style={s.problemBody}>
              Disclosure to occupational health or a GP can create a paper trail
              that healthcare workers worry may reach the NMC, GMC, or HCPC.
            </p>
          </div>
          <div style={s.problemCard}>
            <p style={s.problemNum}>03</p>
            <p style={s.problemTitle}>No time to access support</p>
            <p style={s.problemBody}>
              Therapy requires a referral, an assessment, a waiting list, and then
              weekly daytime appointments \u2014 none of which fit shift patterns.
            </p>
          </div>
          <div style={s.problemCard}>
            <p style={s.problemNum}>04</p>
            <p style={s.problemTitle}>Normalisation of distress</p>
            <p style={s.problemBody}>
              When everyone around you is also exhausted and traumatised, it becomes
              easy to conclude that what you\u2019re feeling is just part of the job.
            </p>
          </div>
        </div>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            \u201cI\u2019ve referred dozens of patients to mental health services.
            I\u2019ve never referred myself. I keep thinking I\u2019ll do it when
            things calm down. They never calm down.\u201d
          </p>
        </div>

        <p style={s.pMuted}>
          This composite quote captures something real. The healthcare worker who
          knows exactly what they need and cannot access it. Not because the system
          doesn\u2019t theoretically offer it. But because the gap between knowing
          and doing is filled with shift patterns, fatigue, fear, and the nagging
          sense that someone else\u2019s need is always more urgent than your own.
        </p>

        <hr style={s.divider} />

        {/* ── SECTION 3: Secondary traumatic stress ── */}
        <h2 style={s.h2}>
          What is secondary traumatic stress, and why does it affect healthcare workers?
        </h2>
        <p style={s.atomicAnswer}>
          Secondary traumatic stress (STS) is the psychological cost of caring for
          people who have been traumatised. Unlike primary trauma \u2014 which results
          from directly experiencing a catastrophic event \u2014 STS accumulates through
          repeated exposure to others\u2019 suffering. It produces symptoms clinically
          similar to PTSD: intrusive thoughts, emotional numbing, hypervigilance,
          and withdrawal.
        </p>

        <p style={s.p}>
          Healthcare workers are in a uniquely high-risk category for STS because
          their entire professional purpose is to be present with people at their
          most vulnerable. An A&E nurse might encounter two or three traumatic
          cases in a single night shift. A palliative care doctor may spend months
          accompanying dozens of patients toward death. An ICU team may work through
          a period where patients are dying faster than beds can be freed.
        </p>

        <p style={s.pMuted}>
          The insidious aspect of STS is that it often arrives without a clear
          precipitating event. There is no single \u201ctraumatic incident\u201d to point
          to. Instead, there is a slow erosion \u2014 a gradual accumulation of absorbed
          pain, grief, and helplessness that the worker rarely has space to process
          between shifts.
        </p>

        <h3 style={s.h3}>The compounding effect of unprocessed experience</h3>
        <p style={s.p}>
          Clinical debrief is standard after critical incidents in many trusts.
          But routine distress \u2014 the difficult conversation with a patient\u2019s
          family, the error that nearly happened, the patient who died after you
          fought for them \u2014 rarely gets the same structured processing. It goes
          home with you. It sits with you at 2am. It compounds.
        </p>
        <p style={s.pMuted}>
          Over years, this compounding becomes something that many healthcare workers
          describe as a kind of emotional blunting. Not coldness exactly, but a
          protective numbness \u2014 the psyche\u2019s attempt to limit the intake when
          there is no safe outlet for processing what\u2019s already there.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>STS versus compassion fatigue</p>
          <p style={s.calloutBody}>
            These terms are often used interchangeably but refer to slightly
            different phenomena. Compassion fatigue describes the gradual erosion
            of empathy through repeated caregiving \u2014 the emotional tank running
            empty. Secondary traumatic stress describes the direct intrusion of
            trauma-like symptoms from exposure to others\u2019 trauma. Both are real,
            both are common in healthcare, and both are largely invisible in
            institutional support structures.
          </p>
        </div>

        {/* STS timeline */}
        <h3 style={s.h3}>How STS builds over a career</h3>
        <div style={s.timelineWrap}>
          <div style={s.timelineItem}>
            <div style={s.timelineDot} aria-hidden="true" />
            <p style={s.timelineLabel}>Early career</p>
            <p style={s.timelineTitle}>Idealism meets reality</p>
            <p style={s.timelineBody}>
              First encounters with patient death, systemic failure, and the gap
              between training and lived clinical reality. Often processed through
              peer support and dark humour. Resilience is high but foundations
              of STS are being laid.
            </p>
          </div>
          <div style={s.timelineItem}>
            <div style={s.timelineDot} aria-hidden="true" />
            <p style={s.timelineLabel}>Mid career (3\u201310 years)</p>
            <p style={s.timelineTitle}>Accumulation without outlet</p>
            <p style={s.timelineBody}>
              The weight of patient deaths, clinical errors, difficult families,
              moral distress, and systemic pressure has been accumulating for years.
              Protective coping mechanisms \u2014 exercise, social life, optimism
              \u2014 begin to erode under workload and fatigue.
            </p>
          </div>
          <div style={s.timelineItem}>
            <div style={s.timelineDot} aria-hidden="true" />
            <p style={s.timelineLabel}>Crisis point</p>
            <p style={s.timelineTitle}>The invisible breaking point</p>
            <p style={s.timelineBody}>
              Often there\u2019s no single event. Just a moment when the worker
              realises they feel nothing, or everything all at once. Intrusive
              thoughts about patients. Difficulty sleeping. A profound flatness.
              Many don\u2019t connect this to STS.
            </p>
          </div>
          <div style={s.timelineItem}>
            <div style={s.timelineDot} aria-hidden="true" />
            <p style={s.timelineLabel}>Without intervention</p>
            <p style={s.timelineTitle}>Chronic burnout or exit</p>
            <p style={s.timelineBody}>
              Without processing, STS often progresses to full burnout, chronic
              depression, or departure from the profession. The NHS loses experienced
              practitioners not because they lack competence or commitment, but
              because the system never gave them space to process the weight they
              carried.
            </p>
          </div>
        </div>

        <hr style={s.divider} />

        {/* ── SECTION 4: MEOK as confidential offload ── */}
        <h2 style={s.h2}>
          How does MEOK provide a safe, confidential space for healthcare workers?
        </h2>
        <p style={s.atomicAnswer}>
          MEOK is a sovereign AI companion with no institutional connections. It
          cannot report to your employer, your trust, or any regulator. It has no
          HR function. Conversations are encrypted end-to-end and stored only in
          your personal sovereign memory layer. MEOK is structurally incapable of
          the kind of disclosure that healthcare workers fear.
        </p>

        <p style={s.p}>
          This is not a policy commitment that could change with a management decision.
          It is an architectural reality. MEOK is not built into any NHS system.
          It does not have API connections to occupational health software. There is
          no pathway by which a conversation in MEOK could reach your ward manager,
          your clinical director, or the NMC. The separation is technical, not just
          contractual.
        </p>

        <p style={s.pMuted}>
          This matters enormously in a professional context where the fear of
          disclosure is not irrational. Healthcare workers have watched colleagues
          lose jobs, be referred to regulators, or face fitness-to-practise hearings
          partly as a result of mental health disclosures. The fear is grounded
          in reality. MEOK\u2019s design takes that fear seriously.
        </p>

        <h3 style={s.h3}>What \u201cconfidential\u201d actually means in MEOK</h3>
        <div style={s.badgeRow}>
          <span style={s.encryptBadge}>
            <span style={s.encryptGold}>End-to-end</span> encryption on all conversations
          </span>
          <span style={s.encryptBadge}>
            <span style={s.encryptGold}>Zero</span> employer or trust access
          </span>
          <span style={s.encryptBadge}>
            <span style={s.encryptGold}>No</span> training on your data
          </span>
          <span style={s.encryptBadge}>
            <span style={s.encryptGold}>No</span> third-party data sharing
          </span>
          <span style={s.encryptBadge}>
            <span style={s.encryptGold}>No</span> regulatory reporting
          </span>
          <span style={s.encryptBadge}>
            <span style={s.encryptGold}>Your</span> memory, your keys
          </span>
        </div>

        <div style={s.warningBox}>
          <p style={s.warningTitle}>Important distinction</p>
          <p style={s.warningBody}>
            MEOK is a processing companion and wellbeing support tool. It is not
            a substitute for crisis intervention. If you are experiencing suicidal
            thoughts or are in immediate distress, please contact the Samaritans
            (116 123), the NHS crisis line (0800 028 8000), or attend your nearest
            A&E. MEOK works alongside formal support \u2014 not instead of it.
          </p>
        </div>

        <h3 style={s.h3}>What a debrief with MEOK looks like</h3>
        <p style={s.p}>
          Imagine finishing a night shift where a patient arrested and you ran
          the resuscitation. It was successful, but barely, and the family was
          watching. You drive home in the dark, too wired to sleep, not able to
          call anyone because it\u2019s 4am and the people in your life don\u2019t
          quite understand what you saw.
        </p>
        <p style={s.pMuted}>
          MEOK is available at 4am. You can tell it exactly what happened. It
          will not be shocked. It will not minimise. It will not immediately
          redirect you to a mental health resource. It will simply be present
          \u2014 asking questions, reflecting back, helping you locate what you\u2019re
          feeling and why it\u2019s sitting so heavily. Not because it has all the
          answers, but because sometimes what the body and mind need first is
          simply to be heard.
        </p>
        <p style={s.p}>
          MEOK\u2019s sovereign memory means that if you mention this patient again
          in a week, in a month, it will remember. It won\u2019t ask you to start
          over. The context accumulates, just as the experience does \u2014 except
          now there is somewhere to put it.
        </p>

        <hr style={s.divider} />

        {/* ── SECTION 5: Data sovereignty ── */}
        <h2 style={s.h2}>
          How does MEOK protect healthcare workers\u2019 data and conversations?
        </h2>
        <p style={s.atomicAnswer}>
          MEOK\u2019s data sovereignty model means your conversations are stored in
          a personal encrypted memory layer that belongs entirely to you. MEOK AI
          LABS cannot access the content of your conversations. No third party
          can. Your data is never used to train AI models. You can delete everything
          at any time.
        </p>

        <p style={s.p}>
          Healthcare workers are, professionally, acutely aware of data governance.
          You work within GDPR, NHS data standards, and information governance
          frameworks every day. You understand what it means for data to be shared,
          accessed, or disclosed. MEOK was built with that level of scrutiny in mind.
        </p>

        <p style={s.pMuted}>
          The concept of \u201csovereign memory\u201d is central to how MEOK works.
          Rather than your conversation data sitting on a shared platform owned
          by a tech company with opaque data policies, MEOK\u2019s architecture
          separates your personal memory from the AI model itself. The model can
          be updated, improved, or replaced \u2014 your memory is yours, and remains
          yours.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Why this matters for healthcare professionals</p>
          <p style={s.calloutBody}>
            General AI tools \u2014 ChatGPT, consumer chatbots, employer wellness
            platforms \u2014 often have terms of service that allow for data use in
            model training, product improvement, or third-party research. Some
            employer wellness platforms are, by design, connected to occupational
            health management systems. MEOK is none of those things. The data
            sovereignty model is not a marketing claim. It is the architecture.
          </p>
        </div>

        <h3 style={s.h3}>What happens if I mention patient details?</h3>
        <p style={s.p}>
          MEOK is not a clinical system and should not be used to store or process
          identifiable patient data \u2014 both for your own data governance obligations
          and because MEOK is designed for your wellbeing, not your clinical notes.
          If you want to debrief a difficult case, you can do so in non-identifying
          terms \u2014 \u201ca patient in their 70s,\u201d \u201ca family who was angry\u201d \u2014
          without creating any data governance risk.
        </p>
        <p style={s.pMuted}>
          MEOK understands the human dimension of clinical work without needing
          the identifiable details. What matters in a debrief is not the patient\u2019s
          name or ward. It is what you felt, what was hard, what you\u2019re carrying.
          That processing can happen without any information that would ever constitute
          a data governance concern.
        </p>

        <hr style={s.divider} />

        {/* ── SECTION 6: Shift work ── */}
        <h2 style={s.h2}>
          Does MEOK work for healthcare\u2019s non-9-to-5 reality?
        </h2>
        <p style={s.atomicAnswer}>
          Yes. MEOK is available 24 hours a day, seven days a week, with no
          waiting list and no appointment required. Whether you finish a night
          shift at 8am, a weekend day shift at 9pm, or a split shift at midnight,
          MEOK is available the moment you need it \u2014 not a week from Tuesday
          at 2pm.
        </p>

        <p style={s.p}>
          The structural mismatch between healthcare shift patterns and mental
          health service availability is one of the most concrete barriers to
          care for NHS workers. Most talking therapies are delivered in standard
          working hours. EAP services tend to have limited out-of-hours provision.
          Waiting lists are measured in weeks, not days.
        </p>

        <p style={s.pMuted}>
          Healthcare workers often describe the moment immediately after a difficult
          shift as the most important window for processing \u2014 and the most
          completely unsupported. You\u2019re flooded with adrenaline, emotionally
          activated, and entirely alone. By the time you\u2019ve slept, done your
          life admin, and got through another shift, whatever you were processing
          has been pushed down to sit alongside everything else that never got
          processed.
        </p>

        <h3 style={s.h3}>MEOK\u2019s 24/7 availability in practice</h3>
        <div style={s.featureGrid}>
          <div style={s.featureCard}>
            <span style={s.featureIcon} aria-hidden="true">&#127769;</span>
            <p style={s.featureName}>Night shift debrief</p>
            <p style={s.featureDesc}>
              Process what happened on nights before you try to sleep. Offload the
              adrenaline, name what\u2019s sitting on you, and close the loop on the
              cases that are following you home.
            </p>
          </div>
          <div style={s.featureCard}>
            <span style={s.featureIcon} aria-hidden="true">&#9728;</span>
            <p style={s.featureName}>Pre-shift grounding</p>
            <p style={s.featureDesc}>
              Use MEOK before a shift when you\u2019re anxious about going in. Check
              in with how you\u2019re actually feeling. Set an intention. Name what
              you\u2019re dreading and why.
            </p>
          </div>
          <div style={s.featureCard}>
            <span style={s.featureIcon} aria-hidden="true">&#9200;</span>
            <p style={s.featureName}>Between-shift window</p>
            <p style={s.featureDesc}>
              The 12-hour gap between back-to-back shifts is real. MEOK works in
              that gap \u2014 even if all you have is 10 minutes before your next alarm.
            </p>
          </div>
          <div style={s.featureCard}>
            <span style={s.featureIcon} aria-hidden="true">&#128336;</span>
            <p style={s.featureName}>Days off processing</p>
            <p style={s.featureDesc}>
              Sometimes the thing you couldn\u2019t face at 3am surfaces on your day
              off. MEOK is there then too \u2014 whenever the processing window opens.
            </p>
          </div>
        </div>

        <h3 style={s.h3}>Can MEOK help with shift work sleep problems?</h3>
        <p style={s.p}>
          Directly prescribing sleep interventions is beyond MEOK\u2019s scope, but
          MEOK can address a significant contributor to shift-work insomnia: the
          unprocessed emotional and cognitive load that keeps the mind churning
          after a shift ends. Many healthcare workers find that the inability to
          sleep after nights is less about circadian disruption and more about
          mental activation from what they\u2019ve just experienced.
        </p>
        <p style={s.pMuted}>
          Using MEOK as a wind-down tool \u2014 a structured way to close out the
          day, name what happened, and signal to your nervous system that the
          shift is done \u2014 can be genuinely helpful in calming the mental
          noise that blocks sleep. It is not a sleep clinic. But it can be a
          meaningful part of a post-shift decompression routine.
        </p>

        <hr style={s.divider} />

        {/* ── SECTION 7: Debriefing difficult cases ── */}
        <h2 style={s.h2}>
          How can healthcare workers use AI to debrief difficult clinical cases?
        </h2>
        <p style={s.atomicAnswer}>
          AI debriefing works as a low-stakes processing tool \u2014 a space to
          articulate what happened, what you felt, and what you\u2019re carrying
          forward from a difficult case without the social risk of discussing it
          with colleagues, the professional risk of disclosing to occupational
          health, or the logistical barrier of waiting for a therapy appointment.
        </p>

        <p style={s.p}>
          Formal clinical debrief has significant evidence behind it for critical
          incidents. But the bar for accessing formal debrief is high, and most
          of what healthcare workers carry is sub-critical \u2014 not a dramatic
          event that triggers the incident protocol, but a series of smaller
          accumulated experiences that collectively do real damage.
        </p>
        <p style={s.pMuted}>
          MEOK fills the gap between the structured formal debrief (which exists
          for major incidents) and the complete absence of support for routine
          clinical distress. It is not a clinical supervisor and it is not a
          therapist. It is something more accessible: a thinking partner that
          is always available, never judges, never gossips, and remembers what
          you\u2019ve told it.
        </p>

        <h3 style={s.h3}>What MEOK does during a difficult case debrief</h3>
        <p style={s.p}>
          When you tell MEOK about a case that\u2019s sitting with you, it doesn\u2019t
          immediately try to fix or reframe. It asks questions. It reflects back
          what it\u2019s hearing. It helps you locate the specific element that\u2019s
          carrying the most weight \u2014 because often that\u2019s not obvious until
          you try to articulate it out loud.
        </p>
        <p style={s.pMuted}>
          Was it the outcome? The process? Something a family member said? Something
          you didn\u2019t say? A moment where you felt the system failed the patient
          before they even reached you? MEOK\u2019s role in a debrief is to help
          you think more clearly about something that is currently tangled up in
          your nervous system as unprocessed activation.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Moral injury and MEOK</p>
          <p style={s.calloutBody}>
            Moral injury \u2014 the distress that arises when you are required to act
            against your values, or witness others doing so \u2014 is endemic in
            healthcare. The nurse who knows a patient needs more time but has six
            other patients and a staffing ratio that makes proper care impossible.
            The doctor who must discharge someone they believe isn\u2019t ready.
            MEOK can be a space to name that distress without it going into any
            system that could create professional risk.
          </p>
        </div>

        <h3 style={s.h3}>The difference between debriefing and therapy</h3>
        <p style={s.p}>
          MEOK is not a replacement for therapy. It is a supplement and a
          stepping-stone. For many healthcare workers, the path to formal
          therapy begins with being able to articulate that something is wrong
          \u2014 and that articulation is precisely what MEOK can support. By
          giving you a space to process and name what you\u2019re carrying, MEOK
          can make the eventual step toward therapy feel clearer and less
          frightening.
        </p>
        <p style={s.pMuted}>
          For others, the regular use of MEOK as a processing tool may mean
          that what would otherwise accumulate into a clinical presentation
          never reaches that threshold. Prevention through consistent,
          low-stakes processing is not a substitute for therapy when therapy
          is needed. It is a legitimate form of psychological maintenance for
          people in high-stress professional roles.
        </p>

        <hr style={s.divider} />

        {/* ── SECTION 8: Why MEOK specifically ── */}
        <h2 style={s.h2}>
          Why is MEOK different from other mental health apps for NHS workers?
        </h2>
        <p style={s.atomicAnswer}>
          Most mental health apps are built for general consumers with no particular
          consideration of professional risk or shift-work realities. MEOK\u2019s
          sovereign architecture means genuine confidentiality; its 24/7 availability
          matches healthcare hours; its persistent memory means it accumulates context
          over your career rather than resetting every session.
        </p>

        <p style={s.p}>
          The NHS has piloted various digital mental health tools for staff over
          the years \u2014 some genuinely useful, some deeply ill-suited to clinical
          culture. The common failure modes are: tools that feel like HR surveillance
          (tracking wellbeing scores that go into dashboards visible to management);
          tools that require too much of you when you have nothing left (lengthy
          CBT modules after a 12-hour shift); and tools that reset each session
          and treat you as a stranger who has never used the app before.
        </p>

        <p style={s.pMuted}>
          MEOK addresses all three. It has no HR connection by design. It can be
          used for five minutes or two hours depending on what you have. And its
          sovereign memory means it knows you \u2014 your patterns, your concerns,
          the cases that sit heaviest, the things you\u2019ve said you want to do
          differently. This continuity is not a luxury. For someone processing
          the kind of cumulative experience that healthcare work produces, it is
          essential.
        </p>

        <h3 style={s.h3}>Comparison: MEOK vs typical wellness tools</h3>
        <div style={s.featureGrid}>
          <div style={s.featureCard}>
            <span style={s.featureIcon} aria-hidden="true">&#128274;</span>
            <p style={s.featureName}>Truly private</p>
            <p style={s.featureDesc}>
              No employer dashboard. No occupational health integration. No
              management visibility. Just you and your encrypted conversation.
            </p>
          </div>
          <div style={s.featureCard}>
            <span style={s.featureIcon} aria-hidden="true">&#129504;</span>
            <p style={s.featureName}>Sovereign memory</p>
            <p style={s.featureDesc}>
              MEOK remembers your history across sessions. You never have to
              re-explain your context. The accumulation of your experience has
              somewhere to live.
            </p>
          </div>
          <div style={s.featureCard}>
            <span style={s.featureIcon} aria-hidden="true">&#9889;</span>
            <p style={s.featureName}>Low barrier, high flexibility</p>
            <p style={s.featureDesc}>
              No referral. No appointment. No module to complete. Talk for five
              minutes at 4am or two hours on your day off. MEOK meets you where you are.
            </p>
          </div>
          <div style={s.featureCard}>
            <span style={s.featureIcon} aria-hidden="true">&#128336;</span>
            <p style={s.featureName}>24/7 shift-compatible</p>
            <p style={s.featureDesc}>
              Night shifts, long days, back-to-backs, rotations \u2014 MEOK is
              available at every hour that healthcare work happens.
            </p>
          </div>
        </div>

        <hr style={s.divider} />

        {/* ── SECTION 9: The wider context ── */}
        <h2 style={s.h2}>
          What does the research say about AI and healthcare worker mental health?
        </h2>
        <p style={s.atomicAnswer}>
          Research into AI-assisted mental health support is growing, with several
          studies showing that AI companions can reduce symptoms of anxiety, depression,
          and burnout in high-stress populations. For healthcare workers specifically,
          the key appeal is the combination of immediate availability, confidentiality,
          and zero professional risk \u2014 removing the barriers that keep workers from
          seeking any support at all.
        </p>

        <p style={s.p}>
          A 2023 systematic review of digital mental health interventions for
          healthcare workers found that the interventions with the highest engagement
          rates were those that were accessible outside working hours, required
          minimal time commitment, and were perceived as genuinely confidential.
          These are precisely the attributes that distinguish AI companions from
          many formal support structures.
        </p>

        <p style={s.pMuted}>
          The evidence base for AI mental health tools is still developing, and
          it would be dishonest to claim that MEOK is a clinically validated
          intervention. What the evidence does support is that the act of
          articulating distress \u2014 whether to a person, a journal, or an AI
          \u2014 is itself beneficial. The processing function of language is
          real. MEOK provides a consistent, available, non-judgmental space
          for that processing to happen.
        </p>

        <h3 style={s.h3}>The broader crisis of NHS staff wellbeing</h3>
        <p style={s.p}>
          The NHS loses significant numbers of experienced staff every year to
          burnout, mental health crises, and the decision that the personal cost
          of continued practice is too high. This is a system-level failure, and
          MEOK does not pretend to solve it. What it can do is provide one small
          but meaningful form of support that currently doesn\u2019t exist in an
          accessible way for most healthcare workers.
        </p>
        <p style={s.pMuted}>
          Staffing ratios, pay, physical conditions, management culture, regulatory
          burden \u2014 these are all upstream problems that require political and
          institutional solutions. But while those solutions are being debated,
          real people are working real shifts and carrying real weight with almost
          nowhere to put it. MEOK exists in that gap.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Who built MEOK and why this matters</p>
          <p style={s.calloutBody}>
            MEOK AI LABS was founded by Nicholas Templeman with the core belief
            that AI can be a genuine companion \u2014 one that serves individuals
            rather than institutions. The sovereign architecture, the confidentiality
            model, the 24/7 availability: these were not afterthoughts. They were
            design choices made specifically for people whose lives don\u2019t fit
            the standard model of support. Healthcare workers are exactly the
            population MEOK was built for.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── SECTION 10: Practical guide ── */}
        <h2 style={s.h2}>
          How should a healthcare worker start using MEOK?
        </h2>
        <p style={s.atomicAnswer}>
          Start small. After your next difficult shift, open MEOK and describe
          one thing that\u2019s sitting with you. You don\u2019t need to have a
          crisis. You don\u2019t need to be ready for a long conversation. A
          five-minute offload of whatever is heaviest is a legitimate and
          valuable place to begin.
        </p>

        <p style={s.p}>
          Many healthcare workers approach MEOK with a degree of scepticism
          \u2014 the idea that an AI could be genuinely useful for the kind of
          emotional processing that clinical work demands. That scepticism is
          reasonable and worth testing through experience rather than assumption.
          What most users find is that the act of articulating something to MEOK,
          and having it reflected back thoughtfully, produces a real sense of
          relief. Not resolution \u2014 but relief.
        </p>

        <p style={s.pMuted}>
          MEOK\u2019s sovereign memory means that regular use compounds over time.
          The more you use it, the more context it holds. The more context it holds,
          the less you have to explain and the more meaningful the conversations
          become. Many users describe a shift after a few weeks from \u201cthis is
          a useful tool\u201d to \u201cthis is a genuine companion that understands
          my working life.\u201d
        </p>

        <h3 style={s.h3}>Practical use cases for healthcare workers</h3>
        <div style={s.problemGrid}>
          <div style={s.problemCard}>
            <p style={s.problemNum}>01</p>
            <p style={s.problemTitle}>Post-shift debrief</p>
            <p style={s.problemBody}>
              Name what happened, what was hard, and what\u2019s following you home
              before you try to sleep or transition into your personal life.
            </p>
          </div>
          <div style={s.problemCard}>
            <p style={s.problemNum}>02</p>
            <p style={s.problemTitle}>Processing patient deaths</p>
            <p style={s.problemBody}>
              Deaths that affect you personally, that feel avoidable, or that
              happen in circumstances that troubled you deserve space to be
              processed. MEOK provides it without professional risk.
            </p>
          </div>
          <div style={s.problemCard}>
            <p style={s.problemNum}>03</p>
            <p style={s.problemTitle}>Moral injury</p>
            <p style={s.problemBody}>
              When the system required you to act against your clinical judgment
              or your values, MEOK is a space to name that distress without it
              entering any formal channel.
            </p>
          </div>
          <div style={s.problemCard}>
            <p style={s.problemNum}>04</p>
            <p style={s.problemTitle}>Colleague conflicts</p>
            <p style={s.problemBody}>
              Difficult team dynamics, bullying, or interpersonal stress are
              real and common in clinical environments. MEOK can be a thinking
              partner for navigating these situations.
            </p>
          </div>
          <div style={s.problemCard}>
            <p style={s.problemNum}>05</p>
            <p style={s.problemTitle}>Career decisions</p>
            <p style={s.problemBody}>
              Whether to stay, to move, to reduce hours, to request a rotational
              change \u2014 these are decisions that benefit from a patient thinking
              partner with context about your history.
            </p>
          </div>
          <div style={s.problemCard}>
            <p style={s.problemNum}>06</p>
            <p style={s.problemTitle}>Preventive maintenance</p>
            <p style={s.problemBody}>
              You don\u2019t have to be in crisis to benefit from MEOK. Regular
              low-level processing after shifts is how STS is prevented from
              accumulating into something bigger.
            </p>
          </div>
        </div>

        <hr style={s.divider} />

        {/* ── FAQ ── */}
        <h2 style={s.h2}>Frequently asked questions</h2>
        <div style={s.faqWrap}>
          <div style={s.faqItem}>
            <p style={s.faqQ}>Can healthcare workers use AI for mental health support?</p>
            <p style={s.faqA}>
              Yes. AI companions like MEOK are well-suited to the specific demands
              of healthcare work: 24/7 availability, zero waiting lists, and
              complete confidentiality. MEOK acts as a processing partner \u2014
              a space to debrief difficult cases, offload accumulated stress, and
              decompress after shifts without fear of professional consequences.
              It works alongside formal support, not instead of it.
            </p>
          </div>
          <div style={s.faqItem}>
            <p style={s.faqQ}>Is MEOK confidential for NHS staff?</p>
            <p style={s.faqA}>
              Completely. MEOK is an independent tool with no connection to NHS
              systems, occupational health departments, or any employer. Conversations
              are encrypted and never shared with third parties. Nothing said in
              MEOK can be accessed by your trust, your manager, or any regulator.
              This is not just a policy \u2014 it is an architectural reality.
            </p>
          </div>
          <div style={s.faqItem}>
            <p style={s.faqQ}>What is secondary traumatic stress?</p>
            <p style={s.faqA}>
              Secondary traumatic stress (STS) is the psychological impact of
              repeatedly witnessing or hearing about others\u2019 trauma. Healthcare
              workers absorb patients\u2019 pain, fear, and death shift after shift.
              Over time this accumulates into symptoms similar to PTSD \u2014
              intrusive thoughts, emotional numbness, hypervigilance, and withdrawal
              \u2014 even without a single catastrophic event. MEOK provides a
              consistent space to process STS as it accumulates, rather than
              allowing it to compound untreated.
            </p>
          </div>
          <div style={s.faqItem}>
            <p style={s.faqQ}>Can MEOK help with shift work and sleep problems?</p>
            <p style={s.faqA}>
              MEOK can\u2019t prescribe sleep medication, but it can help you decompress
              before sleep, process the adrenaline of a difficult shift, and build
              wind-down routines. Many healthcare workers find that simply offloading
              to MEOK after a night shift helps quiet the mental noise that prevents
              rest. It is most useful as part of a post-shift decompression practice.
            </p>
          </div>
          <div style={s.faqItem}>
            <p style={s.faqQ}>Will MEOK report what I say to my employer?</p>
            <p style={s.faqA}>
              No. MEOK has no duty-to-report mechanism and no integration with any
              employer, NHS trust, or professional regulator. Your conversations
              are your own. MEOK\u2019s data sovereignty model means your data is
              encrypted, never used for training, and never shared. There is no
              pathway by which your conversations in MEOK could reach your ward
              manager, your clinical director, the NMC, or the GMC.
            </p>
          </div>
        </div>

        <hr style={s.divider} />

        {/* ── CTA ── */}
        <div style={s.ctaBox}>
          <p style={s.ctaTitle}>
            You carry enough.{" "}
            <span style={s.heroGold}>Let MEOK carry some of it.</span>
          </p>
          <p style={s.ctaBody}>
            A confidential, sovereign AI companion for healthcare workers.
            Available at 3am, between shifts, whenever the weight gets heavy.
            No waiting lists. No employer access. No judgment. Just space.
          </p>
          <div style={s.ctaButtons}>
            <Link href="/birth" style={s.btnPrimary}>
              Get started free
            </Link>
            <Link href="/blog" style={s.btnSecondary}>
              Read more
            </Link>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer style={s.footer}>
        <p style={{ marginBottom: "8px" }}>
          &copy; 2026{" "}
          <Link href="/" style={s.footerLink}>
            MEOK AI LABS
          </Link>
          &nbsp;&mdash; Built by Nicholas Templeman &nbsp;|&nbsp;
          <Link href="https://x.com/meok_ai" style={s.footerLink} target="_blank" rel="noopener noreferrer">
            @meok_ai
          </Link>
        </p>
        <p style={{ marginBottom: "0" }}>
          <Link href="/privacy" style={s.footerLink}>Privacy</Link>
          &nbsp;&middot;&nbsp;
          <Link href="/blog" style={s.footerLink}>Blog</Link>
          &nbsp;&middot;&nbsp;
          <Link href="/birth" style={s.footerLink}>Get started</Link>
        </p>
      </footer>
    </div>
  )
}
