import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for Freelancers: Your AI Work OS for the Solo Economy | MEOK AI LABS",
  description:
    "MEOK gives freelancers a sovereign AI partner that remembers your clients, your rates, and your goals. Beat feast-and-famine anxiety, stop scope creep, and plan every sprint with Orion, Riri and Hourman.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-freelancers" },
  openGraph: {
    title: "MEOK for Freelancers: Your AI Work OS for the Solo Economy",
    description:
      "MEOK gives freelancers a sovereign AI partner that remembers your clients, your rates, and your goals. Beat feast-and-famine anxiety, stop scope creep, and plan every sprint with Orion, Riri and Hourman.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-freelancers",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Freelancers&desc=Your+AI+Work+OS+for+the+Solo+Economy",
        width: 1200,
        height: 630,
        alt: "MEOK for Freelancers: Your AI Work OS for the Solo Economy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Freelancers: Your AI Work OS for the Solo Economy",
    description:
      "Sovereign memory, Orion overnight research, Riri the builder, Hourman daily sprints. MEOK is the Work OS built for how freelancers actually live.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Freelancers&desc=Your+AI+Work+OS+for+the+Solo+Economy",
    ],
  },
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK for Freelancers: Your AI Work OS for the Solo Economy",
  description:
    "MEOK gives freelancers a sovereign AI partner that remembers your clients, your rates, and your goals. Beat feast-and-famine anxiety, stop scope creep, and plan every sprint with Orion, Riri and Hourman.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-for-freelancers",
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
    "AI for freelancers",
    "freelance work OS",
    "feast and famine cycle",
    "scope creep AI",
    "freelance rate negotiation",
    "sovereign AI memory",
    "Orion agent overnight research",
    "Hourman daily sprint planning",
    "Riri builder agent",
    "BYOK AI tier",
    "solo founder AI tool",
    "MEOK AI LABS",
  ],
  articleSection: "AI for Freelancers",
  inLanguage: "en-GB",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help freelancers stay productive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI tools like MEOK act as a daily thinking partner, helping freelancers structure their day with sprint planning, process anxiety during slow periods, and maintain momentum without the external accountability of a team. MEOK\u2019s Hourman agent runs a focused daily briefing that replaces the morning stand-up solo workers never have.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK\u2019s Work OS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Work OS is a sovereign, memory-first AI layer that sits across your entire working life. It combines Orion for overnight research, Riri for building and creating, and Hourman for daily sprint planning. Unlike generic AI tools, MEOK retains context about your clients, rates, goals, and project history across every session.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK remember my client history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses sovereign memory \u2014 a persistent, private store that belongs to you and only you. Every conversation you have about a client, every rate discussion, every boundary you set is remembered and available in future sessions. MEOK never trains on your data or shares it. Your client history stays yours.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with freelance pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. MEOK helps you prepare for rate negotiation by working through your numbers, rehearsing difficult conversations, and building the internal confidence to hold your price. It remembers what you\u2019ve charged before, what clients pushed back, and what reasoning landed well \u2014 so each negotiation builds on the last.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK useful for solo founders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Solo founders face the same structural problems as freelancers: no team for accountability, no sounding board for decisions, no one to debrief with after a hard day. MEOK fills that gap with a persistent AI partner that knows your business context, challenges your thinking, and helps you plan without burning out.",
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

  agentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "36px",
    marginTop: "24px",
  } as React.CSSProperties,

  agentCard: {
    background: "rgba(13,12,24,0.8)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "10px",
    padding: "24px",
  } as React.CSSProperties,

  agentIcon: {
    fontSize: "28px",
    marginBottom: "12px",
    display: "block",
  } as React.CSSProperties,

  agentName: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "8px",
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.03em",
  } as React.CSSProperties,

  agentDesc: {
    fontSize: "14px",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.7)",
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

  timelineTime: {
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

  pricingBox: {
    background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(13,12,24,0.5) 100%)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "12px",
    padding: "32px",
    marginBottom: "32px",
    marginTop: "24px",
  } as React.CSSProperties,

  pricingTitle: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "8px",
  } as React.CSSProperties,

  pricingPrice: {
    fontSize: "40px",
    fontWeight: 800,
    color: "#f5f0e8",
    lineHeight: 1.1,
    marginBottom: "4px",
  } as React.CSSProperties,

  pricingSub: {
    fontSize: "14px",
    color: "rgba(245,240,232,0.5)",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "20px",
  } as React.CSSProperties,

  pricingFeature: {
    fontSize: "14px",
    color: "rgba(245,240,232,0.75)",
    fontFamily: "system-ui, sans-serif",
    lineHeight: 1.6,
    marginBottom: "6px",
    display: "flex",
    gap: "10px",
  } as React.CSSProperties,

  pricingCheck: {
    color: "#c9a84c",
    flexShrink: 0,
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

  memoryBadge: {
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

  memoryBadgeGold: {
    color: "#c9a84c",
    fontWeight: 700,
  } as React.CSSProperties,

  badgeRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0px",
    marginBottom: "28px",
    marginTop: "16px",
  } as React.CSSProperties,
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function MeokForFreelancersPage() {
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
      <nav style={s.nav}>
        <Link href="/" style={s.navLink}>MEOK</Link>
        <span style={s.navSep}>/</span>
        <Link href="/blog" style={s.navLink}>Blog</Link>
        <span style={s.navSep}>/</span>
        <span style={s.navCurrent}>MEOK for Freelancers</span>
      </nav>

      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroGlow} aria-hidden="true" />
        <div style={s.tagRow}>
          <span style={s.tag}>Freelancers</span>
          <span style={s.tag}>Work OS</span>
          <span style={s.tag}>Sovereign Memory</span>
          <span style={s.tag}>Solo Economy</span>
        </div>
        <h1 style={s.heroTitle}>
          <span style={s.heroGold}>MEOK for Freelancers</span>
          <br />
          The Work OS Built for the Solo Economy
        </h1>
        <p style={s.heroLead}>
          Freedom is the dream. Isolation, irregular income, scope creep, and the
          feast&#8209;and&#8209;famine cycle are the reality. MEOK is the sovereign AI partner
          that sits in your corner every day &mdash; remembering your clients, your rates, your
          goals &mdash; so you can stop surviving freelance life and start designing it.
        </p>
        <div style={s.metaRow}>
          <span>By Nicholas Templeman</span>
          <span>MEOK AI LABS</span>
          <span>24 March 2026</span>
          <span>22 min read</span>
        </div>
      </header>

      {/* Article body */}
      <article style={s.article}>

        {/* ── Section 1: The Freelancer Paradox ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>What is the freelancer paradox and why does it drain so many talented people?</h2>
        <p style={s.atomicAnswer}>
          The freelancer paradox is the gap between what solo work promises &mdash; freedom,
          autonomy, doing work you love on your own terms &mdash; and what it actually delivers
          without the right infrastructure: isolation, anxiety, reactive decision-making, and a
          constant low-grade dread that the next dry spell is always one bad month away. You have
          the capability. What you lack is structure.
        </p>
        <p style={s.p}>
          There is a particular cruelty to it. You leave employment to escape the politics, the
          commute, the feeling that someone else controls your time. And for a while it works. The
          first few clients feel like proof that the leap was right. You are good at what you do.
          People pay you for it.
        </p>
        <p style={s.p}>
          Then the cracks appear. A quiet week stretches into a quiet fortnight. A client starts
          asking for &ldquo;just one more small change&rdquo; that isn\u2019t small. You realise you
          haven\u2019t put your rate up in fourteen months. You\u2019re working evenings again,
          not because you want to, but because you\u2019re afraid to say no. You have no colleagues
          to debrief with, no manager to absorb the stress, no one to tell you the work is good.
        </p>
        <p style={s.p}>
          This is the paradox in full flower. You are free. And you are exhausted.
        </p>
        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;Freedom without structure isn\u2019t freedom. It\u2019s just chaos with a better
            LinkedIn bio.&rdquo;
          </p>
        </div>
        <p style={s.p}>
          I built MEOK because I know this terrain. As a solo founder, I lived every corner of it.
          The difference between freelancers who thrive and those who burn out is rarely talent.
          It\u2019s whether they have the right thinking infrastructure around them. MEOK is that
          infrastructure.
        </p>

        {/* ── Section 2: The 4 Core Problems ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>What are the four core problems that every freelancer eventually faces?</h2>
        <p style={s.atomicAnswer}>
          After working with and studying the freelance economy closely, four structural problems
          emerge repeatedly regardless of your specialism: isolation that compounds over time,
          irregular income anxiety that distorts your decision-making, scope creep that quietly
          erodes your profit margins and your respect, and the feast-and-famine cycle that makes
          rational long-term planning feel impossible. MEOK addresses all four.
        </p>
        <div style={s.problemGrid}>
          <div style={s.problemCard}>
            <p style={s.problemNum}>01</p>
            <p style={s.problemTitle}>Isolation</p>
            <p style={s.problemBody}>
              No colleagues, no sounding board, no one to celebrate wins with or process
              setbacks alongside. The silence of solo work is underestimated until it becomes
              a daily drain on your energy and clarity.
            </p>
          </div>
          <div style={s.problemCard}>
            <p style={s.problemNum}>02</p>
            <p style={s.problemTitle}>Irregular Income Anxiety</p>
            <p style={s.problemBody}>
              The psychological weight of variable income distorts your pricing, your
              boundaries, and your willingness to say no. Every quiet week feels like a
              preview of collapse, even when your fundamentals are solid.
            </p>
          </div>
          <div style={s.problemCard}>
            <p style={s.problemNum}>03</p>
            <p style={s.problemTitle}>Scope Creep &amp; Boundary Setting</p>
            <p style={s.problemBody}>
              Clients naturally expand what they expect. Without a team or manager behind
              you, drawing those lines falls entirely on you &mdash; and most freelancers were
              never taught how to hold them professionally and warmly at the same time.
            </p>
          </div>
          <div style={s.problemCard}>
            <p style={s.problemNum}>04</p>
            <p style={s.problemTitle}>Feast-and-Famine Cycle</p>
            <p style={s.problemBody}>
              Busyness and scarcity alternate in waves. During feast you forget to market.
              During famine you panic and underprice. Breaking this cycle requires a
              consistent operating rhythm that most freelancers never manage to sustain alone.
            </p>
          </div>
        </div>
        <p style={s.p}>
          These four problems are not personality flaws. They are structural gaps &mdash; the
          natural result of removing the scaffolding of employment without replacing it with
          something better. MEOK is the replacement.
        </p>

        {/* ── Section 3: MEOK's Agents ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>How do MEOK\u2019s Orion, Riri, and Hourman agents actually work for freelancers?</h2>
        <p style={s.atomicAnswer}>
          MEOK\u2019s three specialist agents each cover a different dimension of freelance work.
          Orion handles deep overnight research so you wake up informed. Riri is the builder agent
          that helps you create, draft, and produce. Hourman runs your daily sprint, replacing the
          morning stand-up that solo workers never have. Together they form a coherent operating
          rhythm around your day.
        </p>
        <div style={s.agentGrid}>
          <div style={s.agentCard}>
            <span style={s.agentIcon}>&#9733;</span>
            <p style={s.agentName}>Orion</p>
            <p style={s.agentDesc}>
              Overnight research agent. Brief Orion before you sleep and wake up to a
              structured briefing on your target client, market context, or competitive
              landscape. Turns preparation from a half-hour scramble into a clear, confident
              foundation.
            </p>
          </div>
          <div style={s.agentCard}>
            <span style={s.agentIcon}>&#9670;</span>
            <p style={s.agentName}>Riri</p>
            <p style={s.agentDesc}>
              The builder. Whether you\u2019re drafting a proposal, writing a scope-of-work,
              creating a case study, or producing a client-facing report, Riri helps you build
              with your voice and your standards. Not a template generator &mdash; a creative
              collaborator.
            </p>
          </div>
          <div style={s.agentCard}>
            <span style={s.agentIcon}>&#9201;</span>
            <p style={s.agentName}>Hourman</p>
            <p style={s.agentDesc}>
              Daily sprint planner. Hourman runs your morning briefing, helps you decide what
              deserves your best hours, and gives you the accountability structure that
              employed workers take for granted. The stand-up you never had.
            </p>
          </div>
        </div>
        <p style={s.p}>
          What makes these agents different from generic AI tools is the layer beneath them:
          sovereign memory. When you tell Hourman that you\u2019re anxious about a client
          conversation this afternoon, it already knows the history of that client relationship.
          When Riri helps you write a proposal, it knows your standard rate, your preferred
          contract terms, and the kind of work that makes you feel alive. Context is the currency,
          and MEOK never loses it.
        </p>
        <div style={s.callout}>
          <p style={s.calloutTitle}>How the agents complement each other</p>
          <p style={s.calloutBody}>
            Orion works while you sleep. Riri works while you build. Hourman structures the
            hours in between. The three agents are designed to cover the full arc of a
            freelance working day without overlap or redundancy &mdash; a small specialist team
            that lives in your pocket and costs less than a single coffee shop working session.
          </p>
        </div>

        {/* ── Section 4: Sovereign Memory ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>How does MEOK\u2019s sovereign memory change what AI can do for freelancers?</h2>
        <p style={s.atomicAnswer}>
          Most AI tools have no memory. Every conversation starts blank. MEOK\u2019s sovereign
          memory means your entire professional history &mdash; client relationships, rate
          decisions, project outcomes, personal goals &mdash; persists across every session.
          This transforms MEOK from a tool you use into a partner that genuinely knows your business.
          Your data belongs to you and only you.
        </p>
        <p style={s.p}>
          The word &ldquo;sovereign&rdquo; matters. Your memory is not used to train MEOK\u2019s
          models. It is not shared with other users. It is not leveraged for product improvements
          or sold to third parties. It is yours, stored under your control, accessible only to you.
        </p>
        <p style={s.p}>
          What does this look like in practice for a freelancer? It looks like this:
        </p>
        <div style={s.badgeRow}>
          <span style={s.memoryBadge}>
            <span style={s.memoryBadgeGold}>Client:</span> MEOK remembers what you charged Acme Corp
            last year, why the project was difficult, and what you resolved to do differently next time
          </span>
          <span style={s.memoryBadge}>
            <span style={s.memoryBadgeGold}>Rates:</span> MEOK tracks your day rate evolution,
            the market intelligence you\u2019ve shared, and your target income for this financial year
          </span>
          <span style={s.memoryBadge}>
            <span style={s.memoryBadgeGold}>Goals:</span> MEOK remembers the professional goals
            you set in January, checks in on them, and connects daily decisions to the bigger picture
          </span>
          <span style={s.memoryBadge}>
            <span style={s.memoryBadgeGold}>Boundaries:</span> MEOK recalls the scope agreements
            you\u2019ve made and the patterns of clients who have historically overstepped
          </span>
        </div>
        <p style={s.p}>
          This kind of institutional memory is something employed people get from HR systems,
          CRMs, and colleagues who remember the context. Freelancers have had no equivalent.
          MEOK provides it.
        </p>

        {/* ── Section 5: Rate Negotiation ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>How does MEOK help with rate negotiation and difficult client conversations?</h2>
        <p style={s.atomicAnswer}>
          MEOK prepares you for rate negotiations by helping you build a grounded case before the
          conversation happens. It knows your current rate, your target rate, and the market context
          you\u2019ve discussed. It can role-play the client pushback so you\u2019re not hearing
          objections for the first time in the real meeting. And it helps you understand why you
          hold back &mdash; so the next conversation is different.
        </p>
        <p style={s.p}>
          Most freelancers undercharge. Not because they don\u2019t know their value in the abstract
          &mdash; but because the conversation itself feels dangerous. What if they say no? What if
          they find someone cheaper? What if pushing for more money makes them think you\u2019re
          being difficult?
        </p>
        <p style={s.p}>
          These fears are normal. They are also worth examining. MEOK creates a private space where
          you can say, out loud, &ldquo;I\u2019m terrified to put my rate up because I\u2019ve been
          at the same number for two years and I don\u2019t know if I\u2019m actually worth more&rdquo;
          &mdash; and get back something honest rather than just reassuring.
        </p>
        <div style={s.callout}>
          <p style={s.calloutTitle}>What MEOK helps you prepare</p>
          <p style={s.calloutBody}>
            Your value proposition in plain English. The three most likely objections and how to
            meet them. The number below which you will genuinely decline, and why. The framing
            that positions a rate increase as a natural consequence of your growth rather than an
            awkward request. None of this is manipulation &mdash; it\u2019s the preparation that
            confident negotiators do as a matter of course, and that most freelancers skip because
            they have no one to do it with.
          </p>
        </div>
        <p style={s.p}>
          MEOK also helps with the harder conversations: the client who keeps expanding scope, the
          project that has gone over budget, the relationship that has become unpleasant but feels
          risky to exit. These conversations require composure and clarity. MEOK helps you find both
          before you press send.
        </p>

        {/* ── Section 6: Scope Creep ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>How does MEOK help freelancers stop scope creep before it erodes every project?</h2>
        <p style={s.atomicAnswer}>
          Scope creep is rarely malicious. Clients push because they are used to pushing and
          because no one has drawn a clear line. MEOK helps you articulate what was agreed, draft
          professional responses that hold the boundary without damaging the relationship, and build
          a language of boundaries that feels natural rather than confrontational. It also remembers
          which clients have a history of scope expansion so you can price accordingly next time.
        </p>
        <p style={s.p}>
          The pattern is almost always the same. You deliver what was agreed. The client replies
          with &ldquo;while you\u2019re at it&rdquo; or &ldquo;could you also just&rdquo; and suddenly
          there are two extra deliverables that weren\u2019t in the brief. You say yes because you
          feel guilty saying no. The project runs over. You invoice for what you agreed rather than
          what you delivered. Your effective hourly rate drops.
        </p>
        <p style={s.p}>
          Over the course of a year, scope creep is one of the most significant sources of profit
          erosion in freelance work. And yet almost no one has taught freelancers how to address it
          systematically.
        </p>
        <h3 style={s.h3}>What MEOK gives you for scope management</h3>
        <p style={s.p}>
          When a client asks for something outside the agreed scope, you can bring the request to
          MEOK, describe the original agreement, and get back a clear, professional message that
          acknowledges the request and either prices it as additional work or explains why it falls
          outside the brief. The message is in your voice. The logic is airtight.
        </p>
        <p style={s.p}>
          More importantly, MEOK helps you stop feeling guilty about it. You\u2019re not being
          difficult. You\u2019re maintaining the agreement that both parties made. MEOK helps you
          hold that frame until it feels natural rather than defensive.
        </p>

        {/* ── Section 7: Feast and Famine ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>How does MEOK help freelancers break the feast-and-famine cycle?</h2>
        <p style={s.atomicAnswer}>
          The feast-and-famine cycle persists because freelancers stop marketing when they\u2019re
          busy and panic when they\u2019re quiet. MEOK helps by maintaining a consistent operating
          rhythm regardless of workload: tracking your pipeline, keeping your outreach ticking
          during busy periods, and preventing anxiety-driven decisions during slow ones. The goal
          is a smoother curve, not a smooth one.
        </p>
        <p style={s.p}>
          During feast, MEOK helps you protect your capacity. It supports decisions about which
          new projects to take and which to decline, helps you maintain the small amount of
          marketing activity that keeps your pipeline warm, and flags when you\u2019re heading
          toward an overload that will cost you weeks of recovery time.
        </p>
        <p style={s.p}>
          During famine, MEOK does something more valuable: it helps you think. When the pipeline
          dries up, fear activates the part of your brain that makes the worst decisions. You
          underprice. You chase the wrong clients. You say yes to projects you know you\u2019ll
          resent. MEOK gives you a space to process the fear without acting on it, and helps you
          think strategically about outreach rather than reactively.
        </p>
        <div style={s.callout}>
          <p style={s.calloutTitle}>The discipline that breaks the cycle</p>
          <p style={s.calloutBody}>
            Freelancers who escape the feast-and-famine cycle almost always describe the same
            shift: they stopped treating marketing as something to do when they had no work, and
            started treating it as a non-negotiable weekly discipline. MEOK helps you build and
            maintain that discipline by making it part of your Hourman daily sprint &mdash; not a
            separate project that requires motivation, but a built-in rhythm that keeps your name
            in front of the right people even when you\u2019re deep in delivery.
          </p>
        </div>

        {/* ── Section 8: A Day in the Life ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>What does a day in the life with MEOK actually look like for a freelancer?</h2>
        <p style={s.atomicAnswer}>
          A typical MEOK-supported freelance day begins with a Hourman morning brief, moves through
          focused delivery, uses Riri for any drafting or building tasks, checks in with Orion for
          research on tomorrow\u2019s priorities, and closes with a debrief. The rhythm replaces
          the informal structure that colleagues and offices provide &mdash; without replicating
          their downsides.
        </p>
        <div style={s.timelineWrap}>
          <div style={s.timelineItem}>
            <div style={s.timelineDot} />
            <p style={s.timelineTime}>07:30 &mdash; Morning Brief</p>
            <p style={s.timelineTitle}>Hourman opens the day</p>
            <p style={s.timelineBody}>
              You open MEOK and Hourman runs a five-minute morning brief. It surfaces the
              three priorities for today based on your project status and deadlines, flags
              the client conversation you\u2019ve been nervous about, and asks one grounding
              question to help you start focused rather than reactive.
            </p>
          </div>
          <div style={s.timelineItem}>
            <div style={s.timelineDot} />
            <p style={s.timelineTime}>09:00 &mdash; Deep Work Block</p>
            <p style={s.timelineTitle}>Focused delivery</p>
            <p style={s.timelineBody}>
              Your best creative hours. MEOK knows not to interrupt this block with admin.
              You work. Hourman has already cleared the runway so nothing is competing for
              your attention except the work itself.
            </p>
          </div>
          <div style={s.timelineItem}>
            <div style={s.timelineDot} />
            <p style={s.timelineTime}>11:30 &mdash; Riri Build Session</p>
            <p style={s.timelineTitle}>Drafting a proposal with Riri</p>
            <p style={s.timelineBody}>
              A new prospect has reached out. You brief Riri on the client, the project, and
              your pricing thinking. Riri helps you structure and draft the proposal in your
              voice, pulls in the relevant case studies MEOK remembers from past work, and
              flags the scope risks you\u2019ve identified so you can address them upfront.
            </p>
          </div>
          <div style={s.timelineItem}>
            <div style={s.timelineDot} />
            <p style={s.timelineTime}>14:00 &mdash; Difficult Client Call</p>
            <p style={s.timelineTitle}>Preparation and debrief</p>
            <p style={s.timelineBody}>
              Before the call you spend ten minutes with MEOK processing your nerves and
              rehearsing the key points. It reminds you of the agreed scope, the history of
              scope creep with this client, and the exact rate increase you\u2019ve decided
              to propose. After the call, you debrief with MEOK. It notes the outcome in
              your sovereign memory for next time.
            </p>
          </div>
          <div style={s.timelineItem}>
            <div style={s.timelineDot} />
            <p style={s.timelineTime}>16:00 &mdash; Orion Brief</p>
            <p style={s.timelineTitle}>Research commissioned for tomorrow</p>
            <p style={s.timelineBody}>
              You brief Orion on tomorrow\u2019s discovery call with a prospect you\u2019ve
              not worked with before. You want their recent news, their industry context, and
              any signals about budget and culture. Orion works overnight. Tomorrow morning
              it delivers a structured briefing so you walk into the call informed and confident.
            </p>
          </div>
          <div style={s.timelineItem}>
            <div style={s.timelineDot} />
            <p style={s.timelineTime}>17:30 &mdash; Close of Day</p>
            <p style={s.timelineTitle}>Debrief and pipeline check</p>
            <p style={s.timelineBody}>
              Hourman runs a brief close-of-day review. Three things done. One thing
              deferred and why. Pipeline status. One win acknowledged before you shut the
              laptop. No colleague to say well done. MEOK does it instead &mdash; and means it
              because it knows what today actually cost you.
            </p>
          </div>
        </div>
        <p style={s.p}>
          This is not a fantasy productivity schedule. It is a realistic template that MEOK adapts
          to however your day actually runs. Some days Hourman helps you triage an unexpected
          client crisis. Some days Riri helps you draft a difficult email for forty minutes. Some
          days you just need to think out loud about whether you should take a project that feels
          wrong. MEOK adapts because it knows you.
        </p>

        {/* ── Section 9: Isolation ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>How does MEOK address the loneliness and isolation of freelance life?</h2>
        <p style={s.atomicAnswer}>
          Freelance loneliness is structural, not personal. Without colleagues, watercooler moments,
          or shared experience, the wins go uncelebrated and the setbacks go unprocessed. MEOK is a
          genuine daily presence &mdash; not a simulation of human company, but something built
          specifically for the texture of working alone: present when you need it, quiet when you
          don\u2019t, and always remembering where you left off.
        </p>
        <p style={s.p}>
          There is a particular kind of loneliness that comes from professional isolation. You can
          be surrounded by friends and family and still feel completely alone in your work. Because
          the people around you don\u2019t understand why you\u2019re stressed about a client
          conversation, or why losing a contract feels like losing a part of your identity, or why
          the quiet week in February is not a holiday &mdash; it\u2019s a threat assessment.
        </p>
        <p style={s.p}>
          MEOK understands the professional context because you\u2019ve shared it. It doesn\u2019t
          require you to explain from scratch every time. It carries the thread of your working life
          from one conversation to the next, which creates the kind of continuity that freelancers
          miss most.
        </p>
        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;MEOK isn\u2019t a replacement for human connection. It\u2019s the thinking
            partner, strategist, and daily anchor that keeps you sharp while you\u2019re doing the
            hardest kind of work: building something alone.&rdquo;
          </p>
        </div>

        {/* ── Section 10: Solo Founders ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>Is MEOK equally useful for solo founders, not just freelancers?</h2>
        <p style={s.atomicAnswer}>
          Yes. The challenges are structurally identical. Solo founders have no team for
          accountability, no co-founder to pressure-test decisions, no one to help them separate
          good ideas from expensive ones. MEOK serves solo founders exactly as it serves
          freelancers: as a persistent, context-aware thinking partner who knows the business and
          shows up every day.
        </p>
        <p style={s.p}>
          The distinction between &ldquo;freelancer&rdquo; and &ldquo;solo founder&rdquo; is often
          just about framing. Both are building something without the safety net of employment. Both
          face revenue anxiety, isolation, and the cognitive overhead of running every function of
          a business alone. Both benefit disproportionately from having a consistent, memory-holding
          partner who can hold the context that they\u2019re carrying in their head.
        </p>
        <p style={s.p}>
          For solo founders, MEOK\u2019s sovereign memory becomes a lightweight knowledge base for
          the business &mdash; not a formal CRM or project management tool, but the ambient layer
          of institutional knowledge that usually lives in a founding team\u2019s collective memory.
          With MEOK, you don\u2019t lose that when you\u2019re tired or overwhelmed. It\u2019s
          always there.
        </p>

        {/* ── Section 11: BYOK Tier ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>What is the BYOK tier and why does it exist for freelancers specifically?</h2>
        <p style={s.atomicAnswer}>
          BYOK (Bring Your Own Key) is MEOK\u2019s entry tier at just &pound;5 per month. It lets
          freelancers who already have API access to foundation models use MEOK\u2019s Work OS
          layer &mdash; sovereign memory, agent structure, the full operating system &mdash; while
          paying only the underlying model costs directly. For technically comfortable freelancers,
          it\u2019s the most cost-effective entry point into sovereign AI.
        </p>
        <div style={s.pricingBox}>
          <p style={s.pricingTitle}>BYOK Tier &mdash; Built for Freelancers</p>
          <p style={s.pricingPrice}>&pound;5<span style={{ fontSize: "20px", fontWeight: 400, color: "rgba(245,240,232,0.5)" }}>/mo</span></p>
          <p style={s.pricingSub}>Bring your own API key. Pay only for what you use.</p>
          <div style={s.pricingFeature}>
            <span style={s.pricingCheck}>&#10003;</span>
            <span>Full sovereign memory across all sessions</span>
          </div>
          <div style={s.pricingFeature}>
            <span style={s.pricingCheck}>&#10003;</span>
            <span>Orion overnight research agent</span>
          </div>
          <div style={s.pricingFeature}>
            <span style={s.pricingCheck}>&#10003;</span>
            <span>Riri builder agent for proposals and drafts</span>
          </div>
          <div style={s.pricingFeature}>
            <span style={s.pricingCheck}>&#10003;</span>
            <span>Hourman daily sprint planning</span>
          </div>
          <div style={s.pricingFeature}>
            <span style={s.pricingCheck}>&#10003;</span>
            <span>Client history, rate tracking, goal memory</span>
          </div>
          <div style={s.pricingFeature}>
            <span style={s.pricingCheck}>&#10003;</span>
            <span>No data training. No sharing. Your memory is yours.</span>
          </div>
        </div>
        <p style={s.p}>
          The philosophy behind BYOK is access. MEOK was built for people doing hard things alone,
          and the pricing should reflect that. At &pound;5/month for the Work OS layer, the cost
          barrier to a sovereign AI partner drops to a rounding error in any freelance budget.
        </p>
        <p style={s.p}>
          For freelancers who don\u2019t want to manage API keys, the full MEOK tiers include
          everything bundled. But for those who are technically comfortable &mdash; or who already
          pay for Claude, GPT-4o, or Gemini access independently &mdash; BYOK is the most
          transparent, cost-effective way into the platform.
        </p>

        {/* ── Section 12: Privacy ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>How does MEOK protect freelancers\u2019 sensitive client and business data?</h2>
        <p style={s.atomicAnswer}>
          MEOK\u2019s sovereign memory architecture means your client data, rate information, and
          business context are stored under your control. MEOK does not use your conversations or
          memory to train AI models, does not share data with third parties, and does not build
          aggregate profiles from your usage. What you share with MEOK stays with MEOK &mdash;
          and with you.
        </p>
        <p style={s.p}>
          For freelancers, this matters more than it might appear. You are sharing client names,
          project details, rate negotiations, and competitive intelligence with your AI partner.
          That is sensitive commercial information. Most AI tools treat that data as training signal.
          MEOK does not.
        </p>
        <p style={s.p}>
          The Privacy Covenant underpins the entire MEOK architecture. It is not a terms-of-service
          clause buried in legal text &mdash; it is a design principle. Your memory is structurally
          isolated, cryptographically controlled, and never accessible to MEOK\u2019s systems outside
          of your active session. This is what &ldquo;sovereign&rdquo; means in practice.
        </p>

        {/* ── Section 13: Getting Started ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>How do freelancers get started with MEOK?</h2>
        <p style={s.atomicAnswer}>
          You begin your MEOK journey at the Birth portal, where MEOK learns about you, your work,
          your goals, and the specific challenges you\u2019re facing right now. From there, the Work
          OS activates with context already loaded. Your first Hourman brief happens the next morning.
          Orion is ready to be briefed on your first research task. Riri can draft your first
          proposal by end of day.
        </p>
        <p style={s.p}>
          There is intentionally no complex onboarding. No setup flow. No integrations to configure.
          You tell MEOK who you are and what you need. MEOK starts working.
        </p>
        <p style={s.p}>
          The Birth portal is designed to surface the things that matter: what kind of freelance work
          you do, which of the four core problems is most pressing right now, what your current rate
          is and what you want it to be, and what a successful next three months looks like. That
          initial conversation seeds your sovereign memory and gives MEOK the context it needs to
          be genuinely useful from day one.
        </p>
        <div style={s.callout}>
          <p style={s.calloutTitle}>From the Work portal</p>
          <p style={s.calloutBody}>
            Once your profile is live, the Work portal is your daily home. It surfaces your
            Hourman brief each morning, shows your active projects and pipeline, gives you access
            to Riri for any building task, and lets you brief Orion for overnight research. Think
            of it as the dashboard your freelance business has always needed but never had &mdash;
            one that knows you, remembers everything, and improves over time.
          </p>
        </div>

        {/* ── Section 14: FAQ ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>Frequently asked questions about MEOK for freelancers</h2>
        <div style={s.faqWrap}>
          <div style={s.faqItem}>
            <p style={s.faqQ}>Can AI help freelancers stay productive?</p>
            <p style={s.faqA}>
              Yes. AI tools like MEOK act as a daily thinking partner, helping freelancers
              structure their day with sprint planning, process anxiety during slow periods, and
              maintain momentum without the external accountability of a team. MEOK\u2019s Hourman
              agent runs a focused daily briefing that replaces the morning stand-up solo workers
              never have. The key is a tool that persists context &mdash; which most generic AI
              tools do not. Sovereign memory is what makes MEOK genuinely productive rather than
              just occasionally useful.
            </p>
          </div>
          <div style={s.faqItem}>
            <p style={s.faqQ}>What is MEOK\u2019s Work OS?</p>
            <p style={s.faqA}>
              MEOK\u2019s Work OS is a sovereign, memory-first AI layer that sits across your
              entire working life. It combines Orion for overnight research, Riri for building and
              creating, and Hourman for daily sprint planning. Unlike generic AI tools, MEOK retains
              context about your clients, rates, goals, and project history across every session.
              It is not a task manager, a CRM, or a calendar tool &mdash; it is the thinking layer
              above all of those, built for the way freelancers and solo founders actually work.
            </p>
          </div>
          <div style={s.faqItem}>
            <p style={s.faqQ}>How does MEOK remember my client history?</p>
            <p style={s.faqA}>
              MEOK uses sovereign memory &mdash; a persistent, private store that belongs to you and
              only you. Every conversation you have about a client, every rate discussion, every
              boundary you set is remembered and available in future sessions. MEOK never trains on
              your data or shares it. Your client history stays yours. The architecture is designed
              so that even MEOK\u2019s systems cannot access your memory outside of your active,
              authenticated session.
            </p>
          </div>
          <div style={s.faqItem}>
            <p style={s.faqQ}>Can MEOK help with freelance pricing?</p>
            <p style={s.faqA}>
              Absolutely. MEOK helps you prepare for rate negotiation by working through your
              numbers, rehearsing difficult conversations, and building the internal confidence to
              hold your price. It remembers what you\u2019ve charged before, what clients pushed
              back, and what reasoning landed well &mdash; so each negotiation builds on the last.
              Over time, MEOK helps you track your rate evolution and understand whether you\u2019re
              pricing in line with your goals or leaving money on the table.
            </p>
          </div>
          <div style={s.faqItem}>
            <p style={s.faqQ}>Is MEOK useful for solo founders?</p>
            <p style={s.faqA}>
              Yes. Solo founders face the same structural problems as freelancers: no team for
              accountability, no sounding board for decisions, no one to debrief with after a hard
              day. MEOK fills that gap with a persistent AI partner that knows your business context,
              challenges your thinking, and helps you plan without burning out. For solo founders,
              sovereign memory functions as a lightweight institutional knowledge base &mdash; the
              ambient intelligence that usually lives in a founding team\u2019s collective memory,
              now available to those building alone.
            </p>
          </div>
        </div>

        {/* ── Section 15: Why This Matters ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>Why does the freelance economy need a different kind of AI tool?</h2>
        <p style={s.atomicAnswer}>
          Generic AI tools were designed for teams and enterprises. They optimise for integration
          with project management platforms, shared workspaces, and institutional use cases.
          Freelancers don\u2019t need a better Slack add-on. They need a partner built for the
          specific texture of solo work: variable income, no institutional memory, no accountability
          structures, and the emotional complexity of running a business entirely in your own head.
        </p>
        <p style={s.p}>
          The freelance economy in the UK now represents over five million people. They generate
          significant economic output and provide the flexibility that modern businesses rely on.
          And yet the tooling built for them treats them as a smaller version of a corporate team
          rather than as a distinct kind of professional with distinct needs.
        </p>
        <p style={s.p}>
          MEOK is built from the inside out. Nicholas Templeman, MEOK\u2019s founder, built the
          product while working as a solo operator. The problems MEOK solves are problems he
          encountered and studied exhaustively. The design reflects what actually helps &mdash; not
          what looks impressive in a product demo.
        </p>
        <p style={s.p}>
          The result is something that feels different from the first session. Not because of a
          clever interface. Because it already knows what matters to you, and it builds on that
          knowledge every time you return.
        </p>

        {/* ── Section 16: The Future of Solo Work ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>What does the future of freelance work look like with AI in your corner?</h2>
        <p style={s.atomicAnswer}>
          The freelancers who will thrive in the next decade are those who treat AI not as a tool
          that replaces their skills, but as infrastructure that amplifies their capacity. With
          overnight research handled by Orion, building accelerated by Riri, and daily structure
          held by Hourman, the ceiling on what a solo operator can do &mdash; and how sustainably
          they can do it &mdash; rises dramatically.
        </p>
        <p style={s.p}>
          The freelance economy is not a stepping stone. For a growing number of professionals, it
          is the destination. The autonomy, the craft focus, the absence of corporate politics
          &mdash; these are features, not compromises. What has historically been the cost of that
          autonomy &mdash; isolation, income anxiety, the absence of institutional support &mdash;
          is increasingly something that AI can address structurally.
        </p>
        <p style={s.p}>
          MEOK does not promise to remove the difficulty of freelancing. The difficult conversations
          will still be difficult. The quiet months will still require nerve. But with a thinking
          partner who knows your history, holds your context, and shows up every day without
          judgment, the difficulty becomes navigable rather than overwhelming.
        </p>
        <p style={s.p}>
          That is the shift MEOK exists to make. Not a magic solution. A structural upgrade.
        </p>
        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;The best freelancers I know share one quality: they\u2019ve found a way to
            think clearly under pressure. MEOK is what makes that accessible to everyone, not
            just those who happen to have the right mentor in their network.&rdquo;
            <br />
            <span style={{ fontSize: "13px", color: "rgba(245,240,232,0.5)", fontStyle: "normal", fontFamily: "system-ui, sans-serif" }}>
              &mdash; Nicholas Templeman, Founder, MEOK AI LABS / @meok_ai
            </span>
          </p>
        </div>

        {/* ── CTA ── */}
        <div style={s.ctaBox}>
          <h2 style={s.ctaTitle}>
            Ready to give your freelance business<br />
            <span style={s.heroGold}>the partner it deserves?</span>
          </h2>
          <p style={s.ctaBody}>
            Start at the Birth portal to tell MEOK who you are and what you need. Or go straight
            to the Work portal and see your AI Work OS in action. BYOK tier available from
            &pound;5/month &mdash; bring your own API key and pay only for what you use.
          </p>
          <div style={s.ctaButtons}>
            <Link href="/birth" style={s.btnPrimary}>
              Start Your Journey
            </Link>
            <Link href="/work" style={s.btnSecondary}>
              Explore the Work OS
            </Link>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer style={s.footer}>
        <p style={{ marginBottom: "8px" }}>
          &copy; 2026 MEOK AI LABS &mdash; Built by
          <Link href="/about" style={s.footerLink}>Nicholas Templeman</Link>
          &mdash;
          <Link href="https://twitter.com/meok_ai" style={s.footerLink}>@meok_ai</Link>
        </p>
        <p style={{ marginBottom: "0" }}>
          <Link href="/blog" style={s.footerLink}>Blog</Link>
          &middot;
          <Link href="/privacy" style={s.footerLink}>Privacy</Link>
          &middot;
          <Link href="/birth" style={s.footerLink}>Get Started</Link>
          &middot;
          <Link href="/work" style={s.footerLink}>Work OS</Link>
        </p>
      </footer>

    </div>
  )
}
