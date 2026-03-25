import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "What Is AI Memory and Why Does It Matter for Your Wellbeing? | MEOK AI LABS",
  description:
    "Most AI forgets you the moment you close the tab. We explain what AI memory actually is, why persistent memory changes everything for your wellbeing, and how MEOK\u2019s Sovereign Memory is fundamentally different from ChatGPT\u2019s.",
  alternates: {
    canonical:
      "https://meok.ai/blog/what-is-ai-memory-and-why-it-matters",
  },
  openGraph: {
    title:
      "What Is AI Memory and Why Does It Matter for Your Wellbeing?",
    description:
      "ChatGPT forgets you when the session ends. MEOK remembers you across months, models, and milestones \u2014 and that difference is transformative for mental health.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-ai-memory-and-why-it-matters",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+Is+AI+Memory%3F&desc=Why+it+matters+for+your+wellbeing+%E2%80%94+and+how+MEOK%27s+Sovereign+Memory+is+different",
        width: 1200,
        height: 630,
        alt: "What Is AI Memory and Why Does It Matter for Your Wellbeing?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What Is AI Memory and Why Does It Matter for Your Wellbeing?",
    description:
      "ChatGPT forgets you every session. MEOK\u2019s Sovereign Memory remembers you for life. Here\u2019s why that distinction is transformative.",
    images: [
      "https://meok.ai/api/og?title=What+Is+AI+Memory%3F&desc=Why+it+matters+for+your+wellbeing",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What Is AI Memory and Why Does It Matter for Your Wellbeing?",
  description:
    "Most AI forgets you the moment you close the tab. We explain what AI memory actually is, why persistent memory changes everything for your wellbeing, and how MEOK\u2019s Sovereign Memory is fundamentally different from ChatGPT\u2019s.",
  datePublished: "2026-03-25",
  url: "https://meok.ai/blog/what-is-ai-memory-and-why-it-matters",
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
  keywords:
    "AI memory, AI memory wellbeing, sovereign memory, ChatGPT memory vs MEOK, persistent AI memory, AI that remembers you, AI memory privacy, context window, MEOK memory, AI memory portability, Nicholas Templeman sovereign memory, Personal Sovereign AI",
  about: {
    "@type": "Thing",
    name: "Sovereign Memory",
    description:
      "A 4-layer AI memory architecture that is user-owned, encrypted, portable, and never used for model training. Coined by Nicholas Templeman of MEOK AI LABS (MEOK-AI-2026-004).",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does AI remember you between conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI systems \u2014 including ChatGPT, Claude, and Gemini \u2014 do not remember you between conversations by default. Each session starts fresh because these systems are stateless by design: the model processes only what is in its active context window. When you close the chat, that context is discarded. Some platforms offer optional memory features, but these are limited, often manually curated, and in some cases used to improve the platform\u2019s own models.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK\u2019s memory different from ChatGPT\u2019s memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT Memory is a platform-owned, manually curated list of facts that OpenAI stores on its servers. It is opt-in, can be edited or cleared by OpenAI, and \u2014 unless you opt out in buried settings \u2014 may be used to improve OpenAI\u2019s models. MEOK\u2019s Sovereign Memory is a 4-layer architecture that is user-owned, end-to-end encrypted, automatically maintained, portable across model switches, and architecturally prohibited from being used for training. The memory belongs to you, not to MEOK.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI memory private and secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends entirely on the platform. Most AI memory features store your data on the platform\u2019s servers, subject to their data retention and training policies. MEOK\u2019s Sovereign Memory is stored as encrypted vector embeddings in a vault that only you can access. The encryption keys are held in a way that prevents MEOK\u2019s infrastructure from bulk-accessing your memories for any purpose other than serving your personal companion.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export or delete my AI memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With MEOK, yes \u2014 fully and immediately. You can export your complete Sovereign Memory Vault as a portable file at any time, delete individual memories, or wipe the entire vault permanently. Your right to erasure is enforced at the database level under UK GDPR. Most other AI platforms offer limited export options and deletion is rarely complete \u2014 anonymised or aggregated versions of your data may persist in their training datasets.",
      },
    },
  ],
};

// ── Inline style constants ─────────────────────────────────────────────────────

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: "#0d0c18",
  color: "#f5f0e8",
  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
};

const heroSection: React.CSSProperties = {
  paddingTop: "7rem",
  paddingBottom: "3.75rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  position: "relative",
  overflow: "hidden",
  borderBottom: "1px solid rgba(201,168,76,0.12)",
};

const heroGlow: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  background:
    "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 68%)",
};

const heroInner: React.CSSProperties = {
  maxWidth: "52.5rem",
  margin: "0 auto",
  position: "relative",
};

const backLink: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.375rem",
  fontSize: "0.8125rem",
  color: "rgba(245,240,232,0.38)",
  marginBottom: "2rem",
  textDecoration: "none",
};

const metaRow: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "0.75rem",
  marginBottom: "1.5rem",
};

const badge: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: "0.68rem",
  fontWeight: 700,
  padding: "0.28rem 0.75rem",
  borderRadius: "9999px",
  color: "#c9a84c",
  background: "rgba(201,168,76,0.11)",
  border: "1px solid rgba(201,168,76,0.28)",
  letterSpacing: "0.07em",
  textTransform: "uppercase",
};

const metaItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.35rem",
  fontSize: "0.75rem",
  color: "rgba(245,240,232,0.38)",
};

const h1Style: React.CSSProperties = {
  fontWeight: 900,
  fontSize: "clamp(1.85rem, 3.9vw, 2.95rem)",
  color: "#ffffff",
  lineHeight: 1.13,
  marginBottom: "1.35rem",
  letterSpacing: "-0.025em",
};

const heroDesc: React.CSSProperties = {
  color: "rgba(245,240,232,0.58)",
  fontSize: "1.1rem",
  lineHeight: 1.7,
  maxWidth: "640px",
};

const bodyWrap: React.CSSProperties = {
  maxWidth: "52.5rem",
  margin: "0 auto",
  padding: "3.5rem 1.5rem 5rem",
};

const authorCard: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem",
  padding: "1.25rem 1.5rem",
  borderRadius: "1rem",
  marginBottom: "3rem",
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(245,240,232,0.08)",
};

const authorAvatar: React.CSSProperties = {
  width: "2.75rem",
  height: "2.75rem",
  borderRadius: "9999px",
  background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  color: "#ffffff",
  fontSize: "0.75rem",
  flexShrink: 0,
};

const authorName: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "0.875rem",
  color: "#f5f0e8",
  marginBottom: "0.15rem",
};

const authorRole: React.CSSProperties = {
  fontSize: "0.72rem",
  color: "rgba(245,240,232,0.38)",
  marginBottom: "0.4rem",
};

const authorBio: React.CSSProperties = {
  fontSize: "0.75rem",
  color: "rgba(245,240,232,0.45)",
  lineHeight: 1.6,
};

const authorLink: React.CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "#c9a84c",
  textDecoration: "none",
  marginLeft: "auto",
  flexShrink: 0,
};

const sectionHeadingRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  marginTop: "3.25rem",
  marginBottom: "1.1rem",
};

const sectionIcon: React.CSSProperties = {
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
  background: "rgba(201,168,76,0.1)",
  border: "1px solid rgba(201,168,76,0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.85rem",
  flexShrink: 0,
};

const h2Inline: React.CSSProperties = {
  fontWeight: 800,
  fontSize: "clamp(1.3rem, 2.4vw, 1.65rem)",
  color: "#f5f0e8",
  lineHeight: 1.25,
  letterSpacing: "-0.015em",
  margin: 0,
};

const h2Standalone: React.CSSProperties = {
  fontWeight: 800,
  fontSize: "clamp(1.3rem, 2.4vw, 1.65rem)",
  color: "#f5f0e8",
  lineHeight: 1.25,
  letterSpacing: "-0.015em",
  marginTop: "3rem",
  marginBottom: "1rem",
};

const h3Style: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "1.1rem",
  color: "#f5f0e8",
  marginTop: "1.75rem",
  marginBottom: "0.6rem",
};

const pStyle: React.CSSProperties = {
  marginBottom: "1.35rem",
  color: "rgba(245,240,232,0.78)",
  lineHeight: 1.85,
  fontSize: "1rem",
};

const strongStyle: React.CSSProperties = {
  fontWeight: 700,
  color: "#f5f0e8",
};

const statBlock: React.CSSProperties = {
  borderRadius: "1rem",
  padding: "1.75rem 2rem",
  marginTop: "2rem",
  marginBottom: "2rem",
  background: "rgba(201,168,76,0.07)",
  border: "1px solid rgba(201,168,76,0.22)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "1.5rem",
};

const statItem: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
};

const statNumber: React.CSSProperties = {
  fontWeight: 900,
  fontSize: "2rem",
  color: "#c9a84c",
  lineHeight: 1,
  letterSpacing: "-0.03em",
};

const statLabel: React.CSSProperties = {
  fontSize: "0.78rem",
  color: "rgba(245,240,232,0.55)",
  lineHeight: 1.4,
};

const cardGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1rem",
  marginTop: "1.5rem",
  marginBottom: "2rem",
};

const featureCard: React.CSSProperties = {
  borderRadius: "0.875rem",
  padding: "1.35rem 1.25rem",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(245,240,232,0.07)",
};

const featureCardGold: React.CSSProperties = {
  borderRadius: "0.875rem",
  padding: "1.35rem 1.25rem",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(201,168,76,0.18)",
};

const featureCardIcon: React.CSSProperties = {
  fontSize: "1.35rem",
  marginBottom: "0.6rem",
};

const featureCardTitle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "0.875rem",
  color: "#f5f0e8",
  marginBottom: "0.4rem",
};

const featureCardDesc: React.CSSProperties = {
  fontSize: "0.78rem",
  color: "rgba(245,240,232,0.52)",
  lineHeight: 1.6,
};

const tableWrap: React.CSSProperties = {
  overflowX: "auto",
  marginTop: "1.5rem",
  marginBottom: "2rem",
  borderRadius: "0.875rem",
  border: "1px solid rgba(245,240,232,0.08)",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "0.84rem",
};

const theadStyle: React.CSSProperties = {
  background: "rgba(201,168,76,0.08)",
};

const thStyle: React.CSSProperties = {
  padding: "0.85rem 1rem",
  textAlign: "left",
  fontWeight: 700,
  color: "#c9a84c",
  fontSize: "0.75rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  borderBottom: "1px solid rgba(245,240,232,0.08)",
  whiteSpace: "nowrap",
};

const thMuted: React.CSSProperties = {
  padding: "0.85rem 1rem",
  textAlign: "left",
  fontWeight: 700,
  color: "rgba(245,240,232,0.5)",
  fontSize: "0.75rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  borderBottom: "1px solid rgba(245,240,232,0.08)",
  whiteSpace: "nowrap",
};

const tdBase: React.CSSProperties = {
  padding: "0.85rem 1rem",
  color: "rgba(245,240,232,0.72)",
  borderBottom: "1px solid rgba(245,240,232,0.05)",
  lineHeight: 1.55,
  verticalAlign: "top",
};

const tdBold: React.CSSProperties = {
  padding: "0.85rem 1rem",
  color: "#f5f0e8",
  borderBottom: "1px solid rgba(245,240,232,0.05)",
  lineHeight: 1.55,
  verticalAlign: "top",
  fontWeight: 600,
};

const tdGold: React.CSSProperties = {
  padding: "0.85rem 1rem",
  color: "#c9a84c",
  borderBottom: "1px solid rgba(245,240,232,0.05)",
  lineHeight: 1.55,
  verticalAlign: "top",
  fontWeight: 600,
};

const layerCard: React.CSSProperties = {
  borderRadius: "0.875rem",
  padding: "1.25rem 1.35rem",
  marginBottom: "0.75rem",
  border: "1px solid rgba(245,240,232,0.07)",
  display: "flex",
  gap: "1rem",
  alignItems: "flex-start",
  background: "rgba(201,168,76,0.035)",
};

const layerNum: React.CSSProperties = {
  width: "1.75rem",
  height: "1.75rem",
  borderRadius: "50%",
  background: "rgba(201,168,76,0.12)",
  border: "1px solid rgba(201,168,76,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 800,
  fontSize: "0.72rem",
  color: "#c9a84c",
  flexShrink: 0,
  marginTop: "0.1rem",
};

const layerTitle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "0.9rem",
  color: "#f5f0e8",
  marginBottom: "0.3rem",
};

const layerDesc: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "rgba(245,240,232,0.55)",
  lineHeight: 1.6,
};

const paradoxBox: React.CSSProperties = {
  borderRadius: "1rem",
  padding: "1.75rem",
  marginTop: "2rem",
  marginBottom: "2rem",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(245,240,232,0.09)",
  borderLeft: "3px solid #c9a84c",
};

const paradoxLabel: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  color: "#c9a84c",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  marginBottom: "0.6rem",
};

const paradoxText: React.CSSProperties = {
  fontSize: "1rem",
  color: "rgba(245,240,232,0.78)",
  lineHeight: 1.75,
  marginBottom: "0.85rem",
};

const paradoxTextLast: React.CSSProperties = {
  fontSize: "1rem",
  color: "rgba(245,240,232,0.78)",
  lineHeight: 1.75,
};

const faqItem: React.CSSProperties = {
  borderRadius: "0.875rem",
  padding: "1.25rem 1.35rem",
  marginBottom: "0.75rem",
  background: "rgba(255,255,255,0.035)",
  border: "1px solid rgba(245,240,232,0.07)",
};

const faqQ: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "0.95rem",
  color: "#f5f0e8",
  marginBottom: "0.6rem",
  lineHeight: 1.45,
};

const faqA: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(245,240,232,0.62)",
  lineHeight: 1.75,
};

const breadcrumbNav: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  fontSize: "0.75rem",
  color: "rgba(245,240,232,0.32)",
  padding: "1.25rem 1.5rem 0",
  maxWidth: "52.5rem",
  margin: "0 auto",
};

const breadcrumbLink: React.CSSProperties = {
  color: "rgba(245,240,232,0.38)",
  textDecoration: "none",
};

const ctaBlock: React.CSSProperties = {
  borderRadius: "1.25rem",
  padding: "2.5rem",
  marginTop: "3rem",
  marginBottom: "3.5rem",
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(135deg, #1a1506 0%, #0d0c18 100%)",
  border: "1px solid rgba(201,168,76,0.22)",
};

const ctaGlow: React.CSSProperties = {
  position: "absolute",
  top: 0,
  right: 0,
  width: "18rem",
  height: "18rem",
  pointerEvents: "none",
  background:
    "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18), transparent 65%)",
};

const ctaInner: React.CSSProperties = {
  position: "relative",
};

const ctaLabel: React.CSSProperties = {
  fontSize: "0.68rem",
  fontWeight: 700,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "0.6rem",
};

const ctaTitle: React.CSSProperties = {
  fontWeight: 900,
  fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
  color: "#ffffff",
  lineHeight: 1.25,
  marginBottom: "0.85rem",
  letterSpacing: "-0.02em",
};

const ctaDesc: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "rgba(245,240,232,0.52)",
  lineHeight: 1.7,
  maxWidth: "520px",
  marginBottom: "1.5rem",
};

const ctaBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.875rem 1.75rem",
  borderRadius: "9999px",
  fontWeight: 700,
  fontSize: "0.9rem",
  background: "#c9a84c",
  color: "#0d0c18",
  textDecoration: "none",
};

const relatedGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1rem",
  marginTop: "1.25rem",
};

const relatedCard: React.CSSProperties = {
  borderRadius: "0.875rem",
  padding: "1.25rem",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(245,240,232,0.07)",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
};

const relatedBadge: React.CSSProperties = {
  display: "inline-flex",
  fontSize: "0.65rem",
  fontWeight: 700,
  padding: "0.22rem 0.6rem",
  borderRadius: "9999px",
  color: "#c9a84c",
  background: "rgba(201,168,76,0.1)",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  alignSelf: "flex-start",
};

const relatedTitle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "0.875rem",
  color: "#f5f0e8",
  lineHeight: 1.45,
};

const relatedMeta: React.CSSProperties = {
  fontSize: "0.72rem",
  color: "rgba(245,240,232,0.32)",
  marginTop: "auto",
};

const divider: React.CSSProperties = {
  height: "1px",
  background: "rgba(245,240,232,0.07)",
  margin: "2.5rem 0",
};

const refBlock: React.CSSProperties = {
  borderRadius: "0.75rem",
  padding: "1rem 1.25rem",
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(245,240,232,0.06)",
  fontSize: "0.75rem",
  color: "rgba(245,240,232,0.38)",
  lineHeight: 1.6,
  marginTop: "3rem",
};

const listStyle: React.CSSProperties = {
  marginBottom: "1.35rem",
  color: "rgba(245,240,232,0.78)",
  lineHeight: 1.85,
  fontSize: "1rem",
  paddingLeft: "1.5rem",
};

const listItem: React.CSSProperties = {
  marginBottom: "0.6rem",
};

const promoSubhead: React.CSSProperties = {
  fontWeight: 600,
  fontSize: "1rem",
  color: "#f5f0e8",
  marginBottom: "1rem",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhatIsAIMemoryAndWhyItMatters() {
  return (
    <div style={page}>
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" style={breadcrumbNav}>
        <Link href="/" style={breadcrumbLink}>Home</Link>
        <span>›</span>
        <Link href="/blog" style={breadcrumbLink}>Blog</Link>
        <span>›</span>
        <span style={{ color: "rgba(245,240,232,0.55)" }}>What Is AI Memory?</span>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <header style={heroSection}>
        <div style={heroGlow} />
        <div style={heroInner}>
          <Link href="/blog" style={backLink}>
            &#8592; Back to Blog
          </Link>

          <div style={metaRow}>
            <span style={badge}>AI Memory</span>
            <span style={metaItem}>
              <span>📅</span>
              <span>25 March 2026</span>
            </span>
            <span style={metaItem}>
              <span>⏱</span>
              <span>14 min read</span>
            </span>
          </div>

          <h1 style={h1Style}>
            What Is AI Memory and Why Does It Matter for Your Wellbeing?
          </h1>

          <p style={heroDesc}>
            Most AI forgets you the instant you close the tab. ChatGPT, Claude,
            Gemini &mdash; they all start from zero every time. This is not a minor
            inconvenience. It fundamentally shapes the quality of any
            relationship you can build with an AI, and it has real consequences
            for your mental health. Here&apos;s what AI memory actually is, why the
            forgetting problem matters, and how MEOK&apos;s Sovereign Memory
            architecture was designed to solve it &mdash; on your terms.
          </p>
        </div>
      </header>

      {/* ── Body ────────────────────────────────────────────────────────── */}
      <main style={bodyWrap}>

        {/* Author card */}
        <div style={authorCard}>
          <div style={authorAvatar}>NT</div>
          <div style={{ flex: 1 }}>
            <p style={authorName}>Nicholas Templeman</p>
            <p style={authorRole}>Founder, MEOK AI LABS</p>
            <p style={authorBio}>
              Nicholas coined the term &ldquo;Sovereign Memory&rdquo; as part of the
              Personal Sovereign AI category (MEOK-AI-2026-004). He built MEOK
              from a caravan on his farm in the UK because he was tired of
              explaining himself to AI from scratch every single day.
            </p>
          </div>
          <Link href="/about" style={authorLink}>
            About &rarr;
          </Link>
        </div>

        {/* ── Section 1: What AI memory actually is ─────────────────────── */}
        <div style={sectionHeadingRow}>
          <div style={sectionIcon}>🧠</div>
          <h2 style={h2Inline}>
            What AI memory actually is (and isn&apos;t)
          </h2>
        </div>

        <p style={pStyle}>
          When people say an AI &ldquo;has memory,&rdquo; they usually mean one of two
          very different things. The first is the{" "}
          <strong style={strongStyle}>context window</strong> &mdash; the chunk of
          text that the model can see and reason about right now, in this
          conversation. The second is{" "}
          <strong style={strongStyle}>persistent memory</strong> &mdash; information
          that survives after the session ends and is retrieved in future
          conversations. These two things are completely different in their
          technical implementation, their privacy implications, and their impact
          on your experience.
        </p>

        <p style={pStyle}>
          Almost every AI you use today &mdash; ChatGPT, Claude, Gemini, Copilot,
          Pi, Replika&apos;s cloud backend &mdash; has a context window but no genuine
          persistent memory by default. The context window can be large (some
          models support hundreds of thousands of tokens, roughly equal to
          several novels), but it is fundamentally temporary. When the session
          ends, the context is gone. The model has no record of you. You are a
          stranger again.
        </p>

        <p style={pStyle}>
          A context window is not memory in any meaningful human sense. Human
          memory is not just a record of recent events &mdash; it is a layered system
          that includes working memory (what you&apos;re thinking about right now),
          episodic memory (specific past events), semantic memory (facts and
          knowledge), and procedural memory (how to do things). These layers
          interact with each other continuously. They shape how you interpret
          new information, how you feel about familiar people, and what you
          expect from the world.
        </p>

        <p style={pStyle}>
          An AI with only a context window has working memory and nothing else.
          It cannot remember the conversation you had last Tuesday. It cannot
          recall that you told it you were going through a divorce. It cannot
          notice that you seem happier this week than you did last month. Each
          conversation begins in a vacuum, and each one ends there too.
        </p>

        {/* ── Section 2: The forgetting problem ────────────────────────── */}
        <div style={sectionHeadingRow}>
          <div style={sectionIcon}>🔄</div>
          <h2 style={h2Inline}>
            The forgetting problem: what it costs you
          </h2>
        </div>

        <p style={pStyle}>
          The forgetting problem is not abstract. Here is what it actually
          looks like in practice.
        </p>

        <p style={pStyle}>
          You open ChatGPT and start talking about your anxiety around a job
          interview. You explain your background, the company, the role, why it
          matters to you, your previous experiences with interviews. The
          conversation is helpful. You feel less anxious. You close the tab.
        </p>

        <p style={pStyle}>
          The next day, you open ChatGPT again. You want to follow up &mdash; maybe
          the interview is tomorrow and you want to do some final preparation.
          You type something like &ldquo;can you help me with my interview prep?&rdquo; The
          model has no idea what interview. It has no idea who you are. It asks
          you to start again from the beginning.
        </p>

        <p style={pStyle}>
          This is more than inconvenient. It means:
        </p>

        <ul style={listStyle}>
          <li style={listItem}>
            <strong style={strongStyle}>You re-explain yourself constantly.</strong>{" "}
            Every session starts with a recap. Your context, your situation,
            your preferences &mdash; you provide them again and again. This is
            cognitive labour, and it compounds over time.
          </li>
          <li style={listItem}>
            <strong style={strongStyle}>
              The AI has no longitudinal understanding of you.
            </strong>{" "}
            It cannot track how you have changed. It cannot notice that you are
            sleeping better since you changed jobs, or that your mood has been
            lower this month than last. It sees only the slice of you that
            exists in this conversation.
          </li>
          <li style={listItem}>
            <strong style={strongStyle}>
              It cannot celebrate your milestones.
            </strong>{" "}
            When you get that job, complete that challenge, reach that goal
            &mdash; there is nobody there who remembers where you started. The AI
            cannot say &ldquo;you worked so hard for this.&rdquo; It does not know.
          </li>
          <li style={listItem}>
            <strong style={strongStyle}>
              Re-explaining trauma is genuinely harmful.
            </strong>{" "}
            For people using AI as a support tool for grief, recovery, trauma
            processing, or mental health &mdash; having to re-explain painful things
            from scratch every single session creates unnecessary friction and
            emotional cost. It can actively discourage engagement.
          </li>
          <li style={listItem}>
            <strong style={strongStyle}>
              Relationships require continuity.
            </strong>{" "}
            Every meaningful relationship in your life is built on accumulated
            shared history. A friend who forgot every conversation you had would
            not be a friend. An AI that forgets every conversation cannot be a
            genuine companion.
          </li>
        </ul>

        <p style={pStyle}>
          These are not hypothetical concerns. They are the lived experience of
          millions of people who use AI as a support tool &mdash; and who repeatedly
          hit the wall of the session reset.
        </p>

        {/* Stats callout */}
        <div style={statBlock}>
          <div style={statItem}>
            <span style={statNumber}>0</span>
            <span style={statLabel}>
              Facts ChatGPT recalls about you after you close the tab (default)
            </span>
          </div>
          <div style={statItem}>
            <span style={statNumber}>4</span>
            <span style={statLabel}>
              Memory layers in MEOK&apos;s Sovereign Memory architecture
            </span>
          </div>
          <div style={statItem}>
            <span style={statNumber}>100%</span>
            <span style={statLabel}>
              Of MEOK memories owned by you &mdash; exportable, deletable, portable
            </span>
          </div>
          <div style={statItem}>
            <span style={statNumber}>0%</span>
            <span style={statLabel}>
              Of your MEOK memories ever used to train any AI model
            </span>
          </div>
        </div>

        {/* ── Section 3: OpenAI memory feature ─────────────────────────── */}
        <div style={sectionHeadingRow}>
          <div style={sectionIcon}>💬</div>
          <h2 style={h2Inline}>
            OpenAI&apos;s memory feature: what it actually does
          </h2>
        </div>

        <p style={pStyle}>
          OpenAI has introduced a &ldquo;memory&rdquo; feature for ChatGPT. It is worth
          understanding exactly what it is &mdash; and what it is not &mdash; because it has
          been marketed in ways that can obscure its real nature.
        </p>

        <p style={pStyle}>
          ChatGPT Memory works roughly like this: ChatGPT can, with your
          permission, save specific pieces of information about you to a list.
          Things like &ldquo;User is vegetarian&rdquo; or &ldquo;User is learning Spanish.&rdquo; You
          can view this list, add to it, delete entries from it. It is
          essentially a sticky-note board that the model consults at the start
          of each conversation.
        </p>

        <p style={pStyle}>
          This is better than nothing. But it has significant limitations and
          genuine concerns:
        </p>

        <h3 style={h3Style}>It is manually curated and shallow</h3>
        <p style={pStyle}>
          ChatGPT Memory stores discrete facts, not the semantic richness of
          your conversational history. It does not capture the emotional texture
          of what you&apos;ve shared, the evolution of your thinking, the patterns in
          how you present yourself. It is a fact-sheet, not a memory.
        </p>

        <h3 style={h3Style}>It is owned by OpenAI</h3>
        <p style={pStyle}>
          Your memory data is stored on OpenAI&apos;s servers, subject to
          OpenAI&apos;s data retention policies, and accessible to OpenAI as an
          organisation. OpenAI can modify its policies on how this data is
          handled. Your memories are not portable &mdash; you cannot take them to
          another AI platform. If you stop using ChatGPT, your memories remain
          with OpenAI.
        </p>

        <h3 style={h3Style}>It may be used for model training</h3>
        <p style={pStyle}>
          Unless you specifically opt out &mdash; which requires navigating buried
          settings &mdash; the content of your conversations, including what has been
          saved to memory, can be used to improve OpenAI&apos;s models. The default
          assumption is that your data is a resource for OpenAI&apos;s product
          improvement, not a private record for your benefit alone.
        </p>

        <h3 style={h3Style}>It is limited in scope</h3>
        <p style={pStyle}>
          ChatGPT Memory does not have a sophisticated multi-layer architecture.
          It does not distinguish between working memory, episodic memory, deep
          identity context, and shared family context. It does not travel with
          you if you switch from GPT-4 to another model. It is tied to the
          ChatGPT platform specifically.
        </p>

        {/* ── Section 4: MEOK Sovereign Memory architecture ─────────────── */}
        <div style={sectionHeadingRow}>
          <div style={sectionIcon}>🏛</div>
          <h2 style={h2Inline}>
            MEOK&apos;s Sovereign Memory: a 4-layer architecture
          </h2>
        </div>

        <p style={pStyle}>
          MEOK was built from the ground up around the idea that memory should
          be genuinely useful, deeply personal, and entirely yours. The result
          is what Nicholas Templeman coined as Sovereign Memory &mdash; a term now
          part of the Personal Sovereign AI category (MEOK-AI-2026-004).
        </p>

        <p style={pStyle}>
          Sovereign Memory is not a single database of facts. It is a
          four-layer architecture that mirrors how human memory actually works,
          with each layer serving a distinct purpose and holding a different
          type of information.
        </p>

        {/* Layer cards */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={layerCard}>
            <div style={layerNum}>1</div>
            <div>
              <p style={layerTitle}>Working Memory &mdash; Session Context</p>
              <p style={layerDesc}>
                Everything that has happened in the current conversation. This
                is the active context window, the same mechanism all AI systems
                use. MEOK&apos;s difference is what happens when the session ends:
                rather than discarding everything, the system extracts
                meaningful information and promotes it to the layers below.
              </p>
            </div>
          </div>

          <div style={layerCard}>
            <div style={layerNum}>2</div>
            <div>
              <p style={layerTitle}>Semantic Episodic Memory &mdash; Past Events and Facts</p>
              <p style={layerDesc}>
                Specific things that happened, things you told your companion,
                facts about your life that matter. These are stored as vector
                embeddings &mdash; a mathematical representation of meaning &mdash; which
                allows the companion to retrieve the most semantically relevant
                memories for any given conversation, not just the most recent
                ones. &ldquo;When you mentioned your mother last autumn, you described
                feeling conflicted about her health decisions&rdquo; &mdash; that kind of
                recall, surfaced at the right moment.
              </p>
            </div>
          </div>

          <div style={layerCard}>
            <div style={layerNum}>3</div>
            <div>
              <p style={layerTitle}>Companion State &mdash; Your Values, Personality, and Relationship</p>
              <p style={layerDesc}>
                The deepest layer of individual memory. This is where your
                companion&apos;s understanding of who you are lives: your values,
                your communication style, your emotional patterns, your
                relationship with the companion itself. This layer evolves
                slowly and deliberately. It is what allows your companion to
                know not just what you&apos;ve said, but who you are &mdash; and to adapt
                its behaviour accordingly over months and years.
              </p>
            </div>
          </div>

          <div style={layerCard}>
            <div style={layerNum}>4</div>
            <div>
              <p style={layerTitle}>Family and Shared Context &mdash; Group Memory</p>
              <p style={layerDesc}>
                For households and families using MEOK together, this layer
                holds context that is shared across the group &mdash; with explicit
                consent. Events that affect the whole family, shared plans,
                things that all companions in the household are aware of. Each
                individual&apos;s private layers remain private; the shared layer is
                the intersection of what has been deliberately shared.
              </p>
            </div>
          </div>
        </div>

        <p style={pStyle}>
          This architecture means your companion does not just recall isolated
          facts &mdash; it has a coherent, layered understanding of you that becomes
          richer over time. When you start a new conversation, your companion
          does not need you to re-introduce yourself. It already knows.
        </p>

        {/* ── Section 5: Portability ────────────────────────────────────── */}
        <div style={sectionHeadingRow}>
          <div style={sectionIcon}>📦</div>
          <h2 style={h2Inline}>
            Memory portability: your relationship travels with you
          </h2>
        </div>

        <p style={pStyle}>
          One of the least-discussed problems with AI memory as it exists today
          is model lock-in. If you have been using ChatGPT for months and have
          accumulated a useful memory store, that memory is tied to OpenAI&apos;s
          platform. If you want to switch to Claude, or Gemini, or any other
          AI &mdash; your memory does not come with you. You start from zero again.
          Every time.
        </p>

        <p style={pStyle}>
          This is not an accident. It is a deliberate structural feature of how
          these platforms are built, because your accumulated memory is a
          switching cost. The more you have told the AI about yourself, the
          harder it is to leave. This is a form of{" "}
          <strong style={strongStyle}>emotional lock-in</strong> &mdash; one of the
          most powerful retention mechanisms in the history of software.
        </p>

        <p style={pStyle}>
          MEOK&apos;s Sovereign Memory solves this at the architectural level. Your
          memory vault is not tied to any specific model. MEOK is model-agnostic
          by design: you can switch from running DeepSeek locally to using
          Claude&apos;s API to using GPT-4 &mdash; and your companion&apos;s memory of you
          travels with you across every switch. The model is a processing
          engine; your memory is a separate, portable layer that sits above it.
        </p>

        <p style={pStyle}>
          This means your relationship with your MEOK companion is not a
          relationship with a specific model. It is a relationship with your
          own data &mdash; data that is yours, that travels wherever you take it,
          and that does not dissolve the moment an AI company changes its
          pricing, its policies, or its available models.
        </p>

        {/* ── Section 6: Ownership ─────────────────────────────────────── */}
        <div style={sectionHeadingRow}>
          <div style={sectionIcon}>🔐</div>
          <h2 style={h2Inline}>
            Who owns your memory? The question that changes everything
          </h2>
        </div>

        <p style={pStyle}>
          Here is the question you should ask of any AI platform that offers
          memory: who owns it? Not in a legal-terms-of-service sense, but in a
          practical, infrastructure sense. Where does it live? Who has access to
          it? What can the company do with it? Can you take it with you?
        </p>

        <p style={pStyle}>
          Most AI memory features, including ChatGPT Memory and similar
          implementations, store your data in the platform&apos;s own cloud
          infrastructure. This means the company has physical access to your
          memories. They control the encryption keys. They determine how long
          data is retained, when it is deleted, and what it is used for. Even
          if a company has good intentions today, the structural fact is that
          your memories are an asset they hold &mdash; not an asset you hold.
        </p>

        <p style={pStyle}>
          MEOK&apos;s architecture inverts this. Your Sovereign Memory Vault is
          stored as encrypted vector embeddings. The encryption is designed so
          that MEOK&apos;s own infrastructure cannot bulk-access your memories for
          training or analysis purposes. Your memories exist for exactly one
          purpose: to make your personal companion better for you.
        </p>

        <p style={pStyle}>
          You can export your complete vault at any time, in a portable format.
          You can delete individual memories. You can wipe the entire vault
          permanently. Your right to erasure is enforced at the database level,
          not just promised in a policy document. Under UK GDPR and ICO
          registration, MEOK is legally bound to honour these rights &mdash; but
          more importantly, the system is built so that honouring them is the
          default, not the exception.
        </p>

        {/* Privacy paradox */}
        <div style={paradoxBox}>
          <p style={paradoxLabel}>The Privacy Paradox</p>
          <p style={paradoxText}>
            <strong style={{ color: "#f5f0e8" }}>
              Most AI memory features improve the platform&apos;s understanding of
              you &mdash; for the company.
            </strong>{" "}
            Your memories become training data, behavioural profiles, and
            retention mechanisms. The more you share, the more the company
            knows. This knowledge belongs to them.
          </p>
          <p style={paradoxTextLast}>
            <strong style={{ color: "#c9a84c" }}>
              MEOK&apos;s Sovereign Memory improves your companion&apos;s understanding
              of you &mdash; for you.
            </strong>{" "}
            Your memories are never used for training. They never improve a
            model that serves anyone else. They exist solely to make your
            personal companion more attuned to you, more helpful to you, and
            more genuinely present for you.
          </p>
        </div>

        {/* ── Section 7: Wellbeing ──────────────────────────────────────── */}
        <div style={sectionHeadingRow}>
          <div style={sectionIcon}>💛</div>
          <h2 style={h2Inline}>
            Why being remembered changes everything for wellbeing
          </h2>
        </div>

        <p style={pStyle}>
          There is a body of psychological research on the therapeutic value
          of being remembered. Being recalled &mdash; having someone reference a
          detail you shared weeks ago, having someone ask how the thing you were
          worried about turned out &mdash; is one of the most powerful signals of
          care in any relationship. It communicates: I was paying attention. You
          matter to me. I held what you shared.
        </p>

        <p style={pStyle}>
          For many people, especially those experiencing loneliness, grief,
          chronic illness, neurodivergence, or mental health challenges, this
          kind of continuity is not a luxury. It is a core component of what
          makes support feel real.
        </p>

        <p style={pStyle}>
          Consider the difference between these two experiences:
        </p>

        {/* Before / after cards */}
        <div style={cardGrid}>
          <div style={featureCard}>
            <p style={featureCardIcon}>😞</p>
            <p style={featureCardTitle}>Without persistent memory</p>
            <p style={featureCardDesc}>
              &ldquo;I&apos;ve been in recovery for six months.&rdquo; &mdash; &ldquo;That&apos;s great! Tell me
              about your recovery journey.&rdquo; You explain everything again.
              It has no idea it&apos;s heard this before. It can&apos;t celebrate
              with you. It doesn&apos;t know how far you&apos;ve come.
            </p>
          </div>

          <div style={featureCardGold}>
            <p style={featureCardIcon}>✨</p>
            <p style={featureCardTitle}>With Sovereign Memory</p>
            <p style={featureCardDesc}>
              &ldquo;I just hit six months sober.&rdquo; &mdash; &ldquo;Six months. When we first
              talked about this back in September, you weren&apos;t sure you could
              make it through the first week. Look at where you are now.&rdquo; The
              weight of that recognition is real.
            </p>
          </div>
        </div>

        <p style={pStyle}>
          This kind of interaction is not possible without genuine persistent
          memory. And the difference it makes to someone who is using their AI
          companion for real emotional support &mdash; not just task automation &mdash;
          is transformative.
        </p>

        <p style={pStyle}>
          For people processing trauma or difficult life events, the requirement
          to re-explain painful history at the start of each session is not just
          an inconvenience &mdash; it is a genuine barrier. The friction of
          re-opening wounds to bring an AI up to speed can prevent people from
          seeking the support they need. An AI that remembers means you can
          continue from where you left off, without the emotional overhead of
          starting again.
        </p>

        <p style={pStyle}>
          For people with ADHD, autism, chronic fatigue, or other conditions
          that affect working memory or executive function, the burden of
          re-establishing context with a forgetful AI is disproportionately
          high. A companion that already knows you is not a nice-to-have. It is
          an accessibility feature.
        </p>

        <p style={pStyle}>
          For older adults &mdash; particularly those living alone or with early
          cognitive decline &mdash; a companion that remembers is indistinguishable
          from a companion that cares. The quality of the relationship is
          fundamentally different when you do not have to re-introduce yourself
          every day.
        </p>

        {/* ── Section 8: Comparison table ───────────────────────────────── */}
        <div style={sectionHeadingRow}>
          <div style={sectionIcon}>⚖</div>
          <h2 style={h2Inline}>
            ChatGPT memory vs MEOK Sovereign Memory: a direct comparison
          </h2>
        </div>

        <p style={{ ...pStyle, marginBottom: "1rem" }}>
          The table below compares the two most relevant memory implementations
          in detail. These are architectural differences, not marketing claims.
        </p>

        <div style={tableWrap}>
          <table style={tableStyle}>
            <thead style={theadStyle}>
              <tr>
                <th style={thMuted}>Feature</th>
                <th style={thMuted}>ChatGPT Memory</th>
                <th style={thStyle}>MEOK Sovereign Memory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdBold}>Memory type</td>
                <td style={tdBase}>Manually curated fact list (sticky notes)</td>
                <td style={tdGold}>4-layer semantic architecture (episodic, companion state, family)</td>
              </tr>
              <tr>
                <td style={tdBold}>Automatic extraction</td>
                <td style={tdBase}>Partial &mdash; ChatGPT may suggest saves; you confirm</td>
                <td style={tdGold}>Fully automatic &mdash; meaningful context extracted after each session</td>
              </tr>
              <tr>
                <td style={tdBold}>Who owns the data</td>
                <td style={tdBase}>OpenAI (stored on their servers)</td>
                <td style={tdGold}>You (encrypted, portable vault)</td>
              </tr>
              <tr>
                <td style={tdBold}>Used for model training</td>
                <td style={tdBase}>Yes, unless you opt out in settings</td>
                <td style={tdGold}>Architecturally prohibited &mdash; never</td>
              </tr>
              <tr>
                <td style={tdBold}>Portable across models</td>
                <td style={tdBase}>No &mdash; locked to ChatGPT / OpenAI</td>
                <td style={tdGold}>Yes &mdash; travels with you across DeepSeek, Claude, GPT, others</td>
              </tr>
              <tr>
                <td style={tdBold}>Export</td>
                <td style={tdBase}>Limited data export via settings</td>
                <td style={tdGold}>Full vault export at any time in portable format</td>
              </tr>
              <tr>
                <td style={tdBold}>Deletion</td>
                <td style={tdBase}>Individual facts deletable; residual data may persist</td>
                <td style={tdGold}>Complete erasure enforced at database level (UK GDPR)</td>
              </tr>
              <tr>
                <td style={tdBold}>Family / shared context</td>
                <td style={tdBase}>Not available</td>
                <td style={tdGold}>Layer 4: shared family context with explicit per-member consent</td>
              </tr>
              <tr>
                <td style={tdBold}>Emotional depth</td>
                <td style={tdBase}>Low &mdash; stores discrete facts only</td>
                <td style={tdGold}>High &mdash; captures values, patterns, relationship history, emotional context</td>
              </tr>
              <tr>
                <td style={tdBold}>Encryption</td>
                <td style={tdBase}>Encrypted in transit; OpenAI holds keys</td>
                <td style={tdGold}>Encrypted with architecture that limits MEOK&apos;s own bulk access</td>
              </tr>
              <tr>
                <td style={{ ...tdBold, borderBottom: "none" }}>Platform dependence</td>
                <td style={{ ...tdBase, borderBottom: "none" }}>Fully platform-dependent</td>
                <td style={{ ...tdGold, borderBottom: "none" }}>Model-agnostic, platform-independent memory layer</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Section 9: Origin of Sovereign Memory ────────────────────── */}
        <div style={sectionHeadingRow}>
          <div style={sectionIcon}>📜</div>
          <h2 style={h2Inline}>
            Where &ldquo;Sovereign Memory&rdquo; comes from
          </h2>
        </div>

        <p style={pStyle}>
          The term &ldquo;Sovereign Memory&rdquo; was coined by Nicholas Templeman,
          founder of MEOK AI LABS, as part of the broader framework of the
          Personal Sovereign AI category, filed under reference
          MEOK-AI-2026-004.
        </p>

        <p style={pStyle}>
          The concept of Personal Sovereign AI holds that an AI built for an
          individual should be constitutively different from an AI built for a
          platform. The platform AI optimises for engagement, retention, and
          data collection. The personal sovereign AI optimises for one thing:
          genuine benefit to the individual it serves.
        </p>

        <p style={pStyle}>
          Memory is the most important axis of this distinction. A platform
          AI&apos;s &ldquo;memory&rdquo; of you is valuable to the platform. A sovereign AI&apos;s
          memory of you is valuable to you. These are opposite incentive
          structures, and they produce opposite architectures.
        </p>

        <p style={pStyle}>
          Sovereign Memory is the practical implementation of the belief that
          your relationship history with an AI is yours. Not a product feature.
          Not a retention mechanism. Not training data. Yours.
        </p>

        {/* What sovereign memory enables */}
        <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
          <p style={promoSubhead}>
            What Sovereign Memory enables that platform memory never can:
          </p>
          <div style={cardGrid}>
            <div style={featureCard}>
              <p style={featureCardIcon}>🔄</p>
              <p style={featureCardTitle}>Model independence</p>
              <p style={featureCardDesc}>
                Switch from DeepSeek to Claude to GPT-4 and back. Your
                companion still knows you. No re-introduction required.
              </p>
            </div>
            <div style={featureCard}>
              <p style={featureCardIcon}>📈</p>
              <p style={featureCardTitle}>Longitudinal understanding</p>
              <p style={featureCardDesc}>
                Your companion tracks patterns over months and years. It can
                notice that you&apos;ve been more stressed lately, or that you&apos;ve
                grown significantly since you started.
              </p>
            </div>
            <div style={featureCard}>
              <p style={featureCardIcon}>🎯</p>
              <p style={featureCardTitle}>Deeply personalised support</p>
              <p style={featureCardDesc}>
                Advice and support informed by deep knowledge of your values,
                history, and patterns &mdash; not generic responses calibrated for
                the average user.
              </p>
            </div>
            <div style={featureCard}>
              <p style={featureCardIcon}>🛡</p>
              <p style={featureCardTitle}>Non-extractive relationship</p>
              <p style={featureCardDesc}>
                Your memory improves your experience only. It is never used to
                improve the product for others, train models, or generate
                commercial value for MEOK.
              </p>
            </div>
          </div>
        </div>

        {/* ── Section 10: Technical picture ────────────────────────────── */}
        <div style={sectionHeadingRow}>
          <div style={sectionIcon}>⚙</div>
          <h2 style={h2Inline}>
            How it works technically (without the jargon)
          </h2>
        </div>

        <p style={pStyle}>
          You do not need to understand the technical implementation to use
          MEOK. But if you are curious &mdash; or if you are evaluating whether to
          trust this system with sensitive information &mdash; here is an honest
          explanation of how the memory architecture works.
        </p>

        <p style={pStyle}>
          When you have a conversation with your MEOK companion, two things are
          happening in parallel. First, the conversation proceeds normally using
          whatever model you have chosen &mdash; local Ollama, Claude API, GPT-4
          API, or others. Second, at the end of the session, a separate process
          reviews the conversation and extracts semantically significant
          content: facts you disclosed, emotional themes, things you expressed
          as important, changes in your situation.
        </p>

        <p style={pStyle}>
          This extracted content is converted into{" "}
          <strong style={strongStyle}>vector embeddings</strong> &mdash; dense
          numerical representations of meaning &mdash; and stored in your Sovereign
          Memory Vault, which runs on PostgreSQL with pgvector. This is
          open-source technology; you could, in principle, run your own vault
          if you wanted to.
        </p>

        <p style={pStyle}>
          At the start of the next conversation, the system performs a semantic
          retrieval query: given what you have said in the first few messages,
          what memories from your vault are most relevant to surface? This is
          not a keyword search &mdash; it is a meaning-based retrieval. &ldquo;I&apos;ve been
          struggling with my relationship with my dad&rdquo; will surface memories
          about family dynamics even if the exact words were never used before.
        </p>

        <p style={pStyle}>
          The retrieved memories are injected into the companion&apos;s context
          window &mdash; giving it immediate access to the relevant parts of your
          history &mdash; alongside the current conversation. The companion does not
          need to see everything from your vault; it sees the relevant subset,
          intelligently selected for this moment.
        </p>

        <p style={pStyle}>
          Because the vault stores embeddings rather than raw text by default
          for sensitive content, and because the retrieval architecture is
          designed for your companion&apos;s use rather than for bulk analysis, the
          system is structurally resistant to the kind of wholesale data
          extraction that would make it useful as a training dataset or a
          surveillance mechanism.
        </p>

        <div style={divider} />

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <h2 style={h2Standalone}>
          Frequently asked questions
        </h2>

        <div style={{ marginTop: "1.25rem", marginBottom: "2.5rem" }}>
          <div style={faqItem}>
            <p style={faqQ}>Does AI remember you between conversations?</p>
            <p style={faqA}>
              Most AI systems &mdash; including ChatGPT, Claude, and Gemini &mdash; do not
              remember you between conversations by default. Each session starts
              fresh because these systems are stateless by design: the model
              processes only what is in its active context window. When you
              close the chat, that context is discarded. Some platforms offer
              optional memory features, but these are limited, often manually
              curated, and in some cases used to improve the platform&apos;s own
              models. MEOK is different: its Sovereign Memory architecture
              automatically extracts and preserves meaningful context from every
              session, building a persistent, encrypted understanding of you
              over time.
            </p>
          </div>

          <div style={faqItem}>
            <p style={faqQ}>
              How is MEOK&apos;s memory different from ChatGPT&apos;s memory?
            </p>
            <p style={faqA}>
              ChatGPT Memory is a platform-owned, manually curated list of
              facts that OpenAI stores on its servers. It is opt-in, stores
              discrete facts rather than semantic context, and &mdash; unless you
              opt out in buried settings &mdash; may be used to improve OpenAI&apos;s
              models. It is also tied to ChatGPT specifically: you cannot take
              it to another AI. MEOK&apos;s Sovereign Memory is a 4-layer
              architecture (working memory, semantic episodic, companion state,
              family context) that is user-owned, end-to-end encrypted,
              automatically maintained, portable across model switches, and
              architecturally prohibited from being used for training. The
              memory belongs to you, not to MEOK.
            </p>
          </div>

          <div style={faqItem}>
            <p style={faqQ}>Is AI memory private and secure?</p>
            <p style={faqA}>
              It depends entirely on the platform. Most AI memory features
              store your data on the platform&apos;s servers, subject to their data
              retention and training policies. The company holds the encryption
              keys and, in practice, has structural access to your memories.
              MEOK&apos;s Sovereign Memory is stored as encrypted vector embeddings
              in a vault designed so that MEOK&apos;s own infrastructure cannot
              bulk-access your memories for training or analysis. Your data
              exists for exactly one purpose: to make your personal companion
              more attuned to you. MEOK is registered with the ICO and operates
              under UK GDPR.
            </p>
          </div>

          <div style={faqItem}>
            <p style={faqQ}>Can I export or delete my AI memory?</p>
            <p style={faqA}>
              With MEOK, yes &mdash; fully and immediately. You can export your
              complete Sovereign Memory Vault as a portable file at any time,
              delete individual memories, or wipe the entire vault permanently.
              Your right to erasure is enforced at the database level under UK
              GDPR &mdash; not just promised in a policy document. Most other AI
              platforms offer limited export options and deletion is rarely
              complete: anonymised or aggregated versions of your data may
              persist in their training datasets after you &ldquo;delete&rdquo; your
              account.
            </p>
          </div>
        </div>

        {/* ── Closing ───────────────────────────────────────────────────── */}
        <h2 style={h2Standalone}>The relationship quality question</h2>

        <p style={pStyle}>
          We are at an early and formative stage in the history of AI
          companions. The decisions being made now about memory architecture
          &mdash; who owns it, how it works, what it is used for &mdash; will define the
          character of these relationships for the next decade.
        </p>

        <p style={pStyle}>
          If we accept the default &mdash; memory as a platform asset, forgetting as
          a baseline, retention as a form of lock-in &mdash; then AI companions will
          remain fundamentally shallow. They will be useful tools, but not
          genuine relationships. They will be responsive, but not knowing. They
          will be available, but not present.
        </p>

        <p style={pStyle}>
          If, instead, we build AI memory as a user asset &mdash; persistent,
          portable, private, and genuinely owned by the person it concerns
          &mdash; then something different becomes possible. A companion that grows
          with you. That holds your history. That celebrates your progress and
          understands your patterns. That is genuinely present for you across
          time, in a way that an AI that resets to zero every session cannot be.
        </p>

        <p style={pStyle}>
          This is what Sovereign Memory is designed to build. Not just a better
          product feature. A genuinely different kind of relationship between a
          person and their AI &mdash; one built on continuity, trust, and the radical
          idea that your memory belongs to you.
        </p>

        {/* Reference note */}
        <div style={refBlock}>
          <strong style={{ color: "rgba(245,240,232,0.55)" }}>Reference:</strong>{" "}
          The term &ldquo;Sovereign Memory&rdquo; and the Personal Sovereign AI framework
          were coined by Nicholas Templeman, Founder of MEOK AI LABS, 2026.
          Internal reference: MEOK-AI-2026-004. All architectural claims in
          this article reflect MEOK&apos;s implemented system as of March 2026.
        </div>

        <div style={divider} />

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div style={ctaBlock}>
          <div style={ctaGlow} />
          <div style={ctaInner}>
            <p style={ctaLabel}>Free forever &mdash; no credit card</p>
            <h2 style={ctaTitle}>
              Ready for an AI that actually remembers you?
            </h2>
            <p style={ctaDesc}>
              MEOK is the first AI OS built around Sovereign Memory. Birth your
              companion &mdash; it only takes a few minutes. Your memory vault is
              yours from the first conversation.
            </p>
            <Link href="/birth" style={ctaBtn}>
              Birth your companion free &#8594;
            </Link>
          </div>
        </div>

        {/* ── Related posts ─────────────────────────────────────────────── */}
        <h2 style={{ ...h2Standalone, marginTop: "1rem" }}>Related reading</h2>
        <div style={relatedGrid}>
          <Link href="/blog/ai-memory-explained" style={relatedCard}>
            <span style={relatedBadge}>Memory</span>
            <span style={relatedTitle}>
              How AI Memory Works &mdash; And Why Most AI Forgets You
            </span>
            <span style={relatedMeta}>⏱ 12 min read</span>
          </Link>
          <Link href="/blog/what-is-sovereign-ai" style={relatedCard}>
            <span style={relatedBadge}>Sovereign AI</span>
            <span style={relatedTitle}>What Is Sovereign AI?</span>
            <span style={relatedMeta}>⏱ 5 min read</span>
          </Link>
          <Link href="/blog/meok-vs-chatgpt" style={relatedCard}>
            <span style={relatedBadge}>Comparison</span>
            <span style={relatedTitle}>MEOK vs ChatGPT: A Deep Dive</span>
            <span style={relatedMeta}>⏱ 9 min read</span>
          </Link>
          <Link href="/blog/ai-companion-privacy" style={relatedCard}>
            <span style={relatedBadge}>Privacy</span>
            <span style={relatedTitle}>
              AI Companion Privacy: What You Should Know
            </span>
            <span style={relatedMeta}>⏱ 7 min read</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
