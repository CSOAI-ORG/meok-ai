import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK vs Claude: What\u2019s the Difference? | MEOK AI LABS",
  description:
    "Claude is an excellent AI model. MEOK is a system built on top of it \u2014 adding sovereign memory, care-based governance, companion personality, and data ownership. Here\u2019s exactly what that means.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-claude" },
  openGraph: {
    title: "MEOK vs Claude: What\u2019s the Difference?",
    description:
      "Claude is an excellent AI model. MEOK is a system built on top of it \u2014 adding sovereign memory, care-based governance, companion personality, and data ownership.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-claude",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Claude%3A+What%27s+the+Difference%3F&desc=Claude+is+a+model.+MEOK+is+a+system+built+on+top+of+models.",
        width: 1200,
        height: 630,
        alt: "MEOK vs Claude: What\u2019s the Difference?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs Claude: What\u2019s the Difference?",
    description:
      "Claude is a model. MEOK is a system built on top of it \u2014 sovereign memory, care-based governance, and data ownership you actually control.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Claude%3A+What%27s+the+Difference%3F&desc=Claude+is+a+model.+MEOK+is+a+system+built+on+top+of+models.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK vs Claude: What\u2019s the Difference?",
  description:
    "Claude is an excellent AI model by Anthropic. MEOK is a sovereign AI system built on top of Claude\u2019s API \u2014 adding 4-layer persistent memory, care-based governance, companion archetypes, and encrypted data ownership.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-vs-claude",
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
    "https://meok.ai/api/og?title=MEOK+vs+Claude%3A+What%27s+the+Difference%3F&desc=Claude+is+a+model.+MEOK+is+a+system+built+on+top+of+models.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-vs-claude",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between MEOK and Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude is an AI model made by Anthropic. MEOK is a sovereign AI system that uses Claude\u2019s intelligence via the API and wraps it in 4-layer persistent memory, the Maternal Covenant governance framework, evolving companion archetypes, and encrypted data ownership. Claude answers questions. MEOK builds a relationship.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK use Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK accesses Claude\u2019s model via the Anthropic API. On the Sovereign and BYOK tiers you get Claude\u2019s full intelligence as the reasoning engine, combined with MEOK\u2019s proprietary memory architecture, governance layer, and companion personality system that Anthropic\u2019s own interface does not provide.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Claude with MEOK\u2019s memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The BYOK (Bring Your Own Key) tier at \u00a35 per month lets you plug your own Anthropic API key into MEOK. You get Claude\u2019s reasoning power combined with MEOK\u2019s 4-layer sovereign memory, the Maternal Covenant, and companion archetypes \u2014 all for the cost of a coffee.",
      },
    },
    {
      "@type": "Question",
      name: "What is the BYOK tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BYOK stands for Bring Your Own Key. At \u00a35 per month you supply your own Anthropic API key and MEOK handles everything else: memory persistence, care-based governance, companion personality, and encrypted data storage. Your conversations stay in your sovereign vault and are never used to train models.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK better than Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK and Claude serve different purposes. Claude is a world-class AI assistant for one-off tasks. MEOK is a persistent AI system for people who want continuity, data sovereignty, and care-based governance. MEOK uses Claude\u2019s intelligence, so you don\u2019t choose between them \u2014 MEOK gives you Claude plus everything Claude lacks.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const S = {
  page: {
    minHeight: "100vh",
    background: "#0d0c18",
    color: "#f5f0e8",
  } as React.CSSProperties,

  hero: {
    paddingTop: "8rem",
    paddingBottom: "3.5rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    position: "relative" as const,
    overflow: "hidden",
    background: "#0d0c18",
  } as React.CSSProperties,

  heroGlow: {
    position: "absolute" as const,
    inset: 0,
    pointerEvents: "none" as const,
    background:
      "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.13) 0%, transparent 70%)",
  } as React.CSSProperties,

  heroInner: {
    maxWidth: "48rem",
    margin: "0 auto",
    position: "relative" as const,
  } as React.CSSProperties,

  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    fontSize: "0.875rem",
    color: "rgba(245,240,232,0.4)",
    marginBottom: "2rem",
    textDecoration: "none",
  } as React.CSSProperties,

  metaRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1.5rem",
  } as React.CSSProperties,

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    fontSize: "0.75rem",
    fontWeight: 700,
    padding: "0.375rem 0.75rem",
    borderRadius: "9999px",
    color: "#c9a84c",
    background: "rgba(201,168,76,0.12)",
    border: "1px solid rgba(201,168,76,0.3)",
  } as React.CSSProperties,

  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
    fontSize: "0.75rem",
    color: "rgba(245,240,232,0.4)",
  } as React.CSSProperties,

  h1: {
    fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
    fontWeight: 900,
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
    color: "#ffffff",
    lineHeight: 1.2,
    marginBottom: "1.25rem",
    marginTop: 0,
  } as React.CSSProperties,

  excerpt: {
    color: "rgba(245,240,232,0.6)",
    fontSize: "1.1rem",
    lineHeight: 1.65,
    maxWidth: "640px",
    margin: 0,
  } as React.CSSProperties,

  body: {
    maxWidth: "48rem",
    margin: "0 auto",
    padding: "3.5rem 1.5rem",
  } as React.CSSProperties,

  authorCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    padding: "1.25rem",
    borderRadius: "1rem",
    marginBottom: "3rem",
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.08)",
  } as React.CSSProperties,

  authorAvatar: {
    width: "3rem",
    height: "3rem",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    color: "#0d0c18",
    fontSize: "0.875rem",
    flexShrink: 0,
    background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
  } as React.CSSProperties,

  authorInfo: {
    flex: 1,
  } as React.CSSProperties,

  authorName: {
    fontWeight: 700,
    color: "#f5f0e8",
    fontSize: "0.875rem",
    margin: "0 0 0.2rem",
  } as React.CSSProperties,

  authorRole: {
    fontSize: "0.75rem",
    color: "rgba(245,240,232,0.4)",
    margin: "0 0 0.4rem",
  } as React.CSSProperties,

  authorBio: {
    fontSize: "0.75rem",
    color: "rgba(245,240,232,0.35)",
    lineHeight: 1.55,
    margin: 0,
  } as React.CSSProperties,

  authorLink: {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#c9a84c",
    textDecoration: "none",
    whiteSpace: "nowrap" as const,
  } as React.CSSProperties,

  p: {
    fontSize: "1rem",
    lineHeight: 1.85,
    marginBottom: "1.25rem",
    color: "rgba(245,240,232,0.75)",
    marginTop: 0,
  } as React.CSSProperties,

  h2: {
    fontSize: "1.35rem",
    fontWeight: 900,
    color: "#f5f0e8",
    marginTop: "3rem",
    marginBottom: "1rem",
    lineHeight: 1.3,
  } as React.CSSProperties,

  h3: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#f5f0e8",
    marginTop: "2rem",
    marginBottom: "0.75rem",
    lineHeight: 1.35,
  } as React.CSSProperties,

  strong: {
    color: "#f5f0e8",
    fontWeight: 700,
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(245,240,232,0.08)",
    margin: "2.5rem 0",
  } as React.CSSProperties,

  tableWrap: {
    overflowX: "auto" as const,
    borderRadius: "1rem",
    border: "1px solid rgba(245,240,232,0.08)",
    marginBottom: "2rem",
    marginTop: "1.5rem",
  } as React.CSSProperties,

  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "0.875rem",
  } as React.CSSProperties,

  thead: {
    background: "rgba(201,168,76,0.08)",
  } as React.CSSProperties,

  thBase: {
    padding: "0.875rem 1.25rem",
    textAlign: "left" as const,
    fontWeight: 700,
    fontSize: "0.8rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    borderBottom: "1px solid rgba(245,240,232,0.08)",
    color: "#c9a84c",
  } as React.CSSProperties,

  thGold: {
    padding: "0.875rem 1.25rem",
    textAlign: "left" as const,
    fontWeight: 700,
    fontSize: "0.8rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    borderBottom: "1px solid rgba(245,240,232,0.08)",
    color: "#e8c76a",
  } as React.CSSProperties,

  tdFeature: {
    padding: "0.875rem 1.25rem",
    fontWeight: 600,
    color: "rgba(245,240,232,0.6)",
    borderBottom: "1px solid rgba(245,240,232,0.05)",
    fontSize: "0.875rem",
    verticalAlign: "top" as const,
  } as React.CSSProperties,

  tdClaude: {
    padding: "0.875rem 1.25rem",
    color: "rgba(245,240,232,0.45)",
    borderBottom: "1px solid rgba(245,240,232,0.05)",
    fontSize: "0.875rem",
    verticalAlign: "top" as const,
  } as React.CSSProperties,

  tdMeok: {
    padding: "0.875rem 1.25rem",
    color: "#f5f0e8",
    borderBottom: "1px solid rgba(245,240,232,0.05)",
    fontSize: "0.875rem",
    fontWeight: 600,
    verticalAlign: "top" as const,
  } as React.CSSProperties,

  tdMeokGold: {
    padding: "0.875rem 1.25rem",
    color: "#c9a84c",
    borderBottom: "1px solid rgba(245,240,232,0.05)",
    fontSize: "0.875rem",
    fontWeight: 700,
    verticalAlign: "top" as const,
  } as React.CSSProperties,

  trEven: {
    background: "rgba(245,240,232,0.02)",
  } as React.CSSProperties,

  trOdd: {
    background: "transparent",
  } as React.CSSProperties,

  callout: {
    borderRadius: "1rem",
    padding: "1.5rem 1.75rem",
    marginBottom: "2rem",
    marginTop: "1.5rem",
    border: "1px solid rgba(201,168,76,0.25)",
    background: "rgba(201,168,76,0.06)",
  } as React.CSSProperties,

  calloutLabel: {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    margin: "0 0 0.5rem",
  } as React.CSSProperties,

  calloutText: {
    fontSize: "0.9rem",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.7)",
    margin: 0,
  } as React.CSSProperties,

  layerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem",
    marginBottom: "2rem",
  } as React.CSSProperties,

  layerCard: {
    borderRadius: "0.875rem",
    padding: "1.25rem",
    border: "1px solid rgba(245,240,232,0.08)",
    background: "rgba(245,240,232,0.03)",
  } as React.CSSProperties,

  layerNumber: {
    fontSize: "1.5rem",
    fontWeight: 900,
    color: "#c9a84c",
    display: "block",
    marginBottom: "0.375rem",
    lineHeight: 1,
  } as React.CSSProperties,

  layerTitle: {
    fontSize: "0.875rem",
    fontWeight: 700,
    color: "#f5f0e8",
    display: "block",
    marginBottom: "0.5rem",
  } as React.CSSProperties,

  layerDesc: {
    fontSize: "0.8rem",
    lineHeight: 1.55,
    color: "rgba(245,240,232,0.5)",
    margin: 0,
  } as React.CSSProperties,

  diffList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 1.5rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.875rem",
  } as React.CSSProperties,

  diffItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.875rem",
    padding: "1rem 1.25rem",
    borderRadius: "0.875rem",
    border: "1px solid rgba(245,240,232,0.07)",
    background: "rgba(245,240,232,0.025)",
  } as React.CSSProperties,

  diffIcon: {
    fontSize: "1.1rem",
    lineHeight: 1,
    flexShrink: 0,
    marginTop: "0.1rem",
  } as React.CSSProperties,

  diffContent: {
    flex: 1,
  } as React.CSSProperties,

  diffTitle: {
    fontSize: "0.875rem",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "0.25rem",
    display: "block",
  } as React.CSSProperties,

  diffDesc: {
    fontSize: "0.8rem",
    lineHeight: 1.55,
    color: "rgba(245,240,232,0.5)",
    margin: 0,
  } as React.CSSProperties,

  covenantGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem",
    marginBottom: "2rem",
  } as React.CSSProperties,

  covenantCard: {
    borderRadius: "0.875rem",
    padding: "1.25rem",
    border: "1px solid rgba(245,240,232,0.07)",
    background: "rgba(245,240,232,0.025)",
  } as React.CSSProperties,

  covenantIcon: {
    fontSize: "1.5rem",
    display: "block",
    marginBottom: "0.5rem",
    lineHeight: 1,
  } as React.CSSProperties,

  covenantTitle: {
    fontSize: "0.8rem",
    fontWeight: 700,
    color: "#c9a84c",
    display: "block",
    marginBottom: "0.4rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.07em",
  } as React.CSSProperties,

  covenantDesc: {
    fontSize: "0.8rem",
    lineHeight: 1.55,
    color: "rgba(245,240,232,0.5)",
    margin: 0,
  } as React.CSSProperties,

  archetypeRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.625rem",
    marginTop: "1.25rem",
    marginBottom: "1.75rem",
  } as React.CSSProperties,

  archetypeChip: {
    padding: "0.375rem 0.875rem",
    borderRadius: "9999px",
    fontSize: "0.8rem",
    fontWeight: 600,
    color: "rgba(245,240,232,0.7)",
    border: "1px solid rgba(245,240,232,0.12)",
    background: "rgba(245,240,232,0.04)",
  } as React.CSSProperties,

  byokBox: {
    borderRadius: "1rem",
    padding: "1.75rem 2rem",
    marginTop: "1.5rem",
    marginBottom: "2rem",
    border: "1px solid rgba(201,168,76,0.3)",
    background: "rgba(201,168,76,0.07)",
    position: "relative" as const,
    overflow: "hidden",
  } as React.CSSProperties,

  byokGlow: {
    position: "absolute" as const,
    top: 0,
    right: 0,
    width: "200px",
    height: "200px",
    pointerEvents: "none" as const,
    background:
      "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.25), transparent 70%)",
  } as React.CSSProperties,

  byokInner: {
    position: "relative" as const,
  } as React.CSSProperties,

  byokLabel: {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    margin: "0 0 0.5rem",
  } as React.CSSProperties,

  byokHeading: {
    fontSize: "1.2rem",
    fontWeight: 900,
    color: "#f5f0e8",
    margin: "0 0 0.75rem",
    lineHeight: 1.3,
  } as React.CSSProperties,

  byokPrice: {
    display: "inline-block",
    fontSize: "2rem",
    fontWeight: 900,
    color: "#c9a84c",
    lineHeight: 1,
    marginRight: "0.5rem",
  } as React.CSSProperties,

  byokPricePer: {
    fontSize: "0.875rem",
    color: "rgba(245,240,232,0.5)",
    fontWeight: 400,
  } as React.CSSProperties,

  byokDesc: {
    fontSize: "0.875rem",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.65)",
    margin: "0.75rem 0 1.25rem",
  } as React.CSSProperties,

  byokLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    padding: "0.625rem 1.5rem",
    borderRadius: "9999px",
    fontWeight: 700,
    fontSize: "0.875rem",
    color: "#0d0c18",
    background: "#c9a84c",
    textDecoration: "none",
  } as React.CSSProperties,

  faqList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid rgba(245,240,232,0.07)",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  } as React.CSSProperties,

  faqItemLast: {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  } as React.CSSProperties,

  faqQuestion: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#f5f0e8",
    margin: "0 0 0.625rem",
    lineHeight: 1.4,
  } as React.CSSProperties,

  faqAnswer: {
    fontSize: "0.9rem",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.6)",
    margin: 0,
  } as React.CSSProperties,

  shareBar: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    margin: "2.5rem 0",
    paddingTop: "2rem",
    borderTop: "1px solid rgba(245,240,232,0.07)",
  } as React.CSSProperties,

  shareLabel: {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "rgba(245,240,232,0.3)",
  } as React.CSSProperties,

  shareBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    fontWeight: 600,
    border: "1px solid rgba(245,240,232,0.12)",
    color: "rgba(245,240,232,0.5)",
    textDecoration: "none",
  } as React.CSSProperties,

  ctaBlock: {
    borderRadius: "1.25rem",
    padding: "2.5rem",
    marginBottom: "4rem",
    position: "relative" as const,
    overflow: "hidden",
    background: "#110f22",
    border: "1px solid rgba(201,168,76,0.2)",
  } as React.CSSProperties,

  ctaGlow: {
    position: "absolute" as const,
    top: 0,
    right: 0,
    width: "280px",
    height: "280px",
    pointerEvents: "none" as const,
    background:
      "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 70%)",
  } as React.CSSProperties,

  ctaInner: {
    position: "relative" as const,
  } as React.CSSProperties,

  ctaLabel: {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.25em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    margin: "0 0 0.5rem",
  } as React.CSSProperties,

  ctaHeading: {
    fontSize: "1.5rem",
    fontWeight: 900,
    color: "#f5f0e8",
    margin: "0 0 0.75rem",
    lineHeight: 1.3,
  } as React.CSSProperties,

  ctaBody: {
    fontSize: "0.9rem",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.5)",
    margin: "0 0 1.75rem",
    maxWidth: "480px",
  } as React.CSSProperties,

  ctaButtons: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.75rem",
  } as React.CSSProperties,

  ctaPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    padding: "0.75rem 1.75rem",
    borderRadius: "9999px",
    fontWeight: 700,
    fontSize: "0.9rem",
    color: "#0d0c18",
    background: "#c9a84c",
    textDecoration: "none",
  } as React.CSSProperties,

  ctaSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    padding: "0.75rem 1.75rem",
    borderRadius: "9999px",
    fontWeight: 700,
    fontSize: "0.9rem",
    color: "#c9a84c",
    border: "1px solid rgba(201,168,76,0.35)",
    background: "transparent",
    textDecoration: "none",
  } as React.CSSProperties,

  relatedHeading: {
    fontSize: "1.1rem",
    fontWeight: 900,
    color: "#f5f0e8",
    marginBottom: "1.25rem",
    marginTop: 0,
  } as React.CSSProperties,

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
  } as React.CSSProperties,

  relatedCard: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
    padding: "1.25rem",
    borderRadius: "1rem",
    border: "1px solid rgba(245,240,232,0.07)",
    background: "rgba(245,240,232,0.025)",
    textDecoration: "none",
  } as React.CSSProperties,

  relatedBadge: {
    display: "inline-block",
    fontSize: "0.7rem",
    fontWeight: 700,
    padding: "0.25rem 0.625rem",
    borderRadius: "9999px",
    color: "#c9a84c",
    background: "rgba(201,168,76,0.12)",
    width: "fit-content",
  } as React.CSSProperties,

  relatedTitle: {
    fontSize: "0.875rem",
    fontWeight: 700,
    color: "#f5f0e8",
    lineHeight: 1.4,
    margin: 0,
  } as React.CSSProperties,

  relatedMeta: {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
    fontSize: "0.7rem",
    color: "rgba(245,240,232,0.3)",
    marginTop: "auto",
  } as React.CSSProperties,

  bulletList: {
    listStyle: "disc",
    paddingLeft: "1.25rem",
    margin: "0 0 1.5rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
  } as React.CSSProperties,

  bulletItem: {
    fontSize: "0.95rem",
    color: "rgba(245,240,232,0.7)",
    lineHeight: 1.7,
  } as React.CSSProperties,

  neutralDot: {
    position: "absolute" as const,
    left: 0,
    color: "rgba(245,240,232,0.3)",
  } as React.CSSProperties,

  goldDot: {
    position: "absolute" as const,
    left: 0,
    color: "#c9a84c",
  } as React.CSSProperties,

  plainLi: {
    fontSize: "0.9rem",
    color: "rgba(245,240,232,0.65)",
    paddingLeft: "1.25rem",
    position: "relative" as const,
    lineHeight: 1.6,
  } as React.CSSProperties,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokVsClaude() {
  return (
    <div style={S.page}>
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

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={S.hero}>
        <div style={S.heroGlow} />
        <div style={S.heroInner}>
          <Link href="/blog" style={S.backLink}>
            &larr; Back to Blog
          </Link>

          <div style={S.metaRow}>
            <span style={S.badge}>AI Comparison</span>
            <span style={S.metaItem}>March 24, 2026</span>
            <span style={S.metaItem}>8 min read</span>
          </div>

          <h1 style={S.h1}>
            MEOK vs Claude: What\u2019s the Difference?
          </h1>

          <p style={S.excerpt}>
            Claude is one of the best AI models in the world. MEOK uses Claude\u2019s intelligence via
            the Anthropic API. So what exactly does MEOK add? Sovereign memory, care-based
            governance, companion personality, and data ownership you actually control.
          </p>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <div style={S.body}>

        {/* Author card */}
        <div style={S.authorCard}>
          <div style={S.authorAvatar}>NT</div>
          <div style={S.authorInfo}>
            <p style={S.authorName}>Nicholas Templeman</p>
            <p style={S.authorRole}>Founder, MEOK AI LABS &bull; @meok_ai</p>
            <p style={S.authorBio}>
              Nicholas built MEOK because he wanted Claude\u2019s intelligence inside a system that
              actually remembered him, kept his data private, and cared about how it responded.
              He lives and works in the UK, mostly from a caravan on his farm.
            </p>
          </div>
          <Link href="/about" style={S.authorLink}>
            About &rarr;
          </Link>
        </div>

        {/* ── INTRO ─────────────────────────────────────────────────────── */}
        <p style={S.p}>
          There is a question MEOK gets asked constantly:{" "}
          <em style={{ color: "#f5f0e8" }}>
            &ldquo;If MEOK uses Claude, why not just use Claude directly?&rdquo;
          </em>{" "}
          It is a fair question and it deserves a thorough, honest answer. This post breaks it
          down completely.
        </p>

        <p style={S.p}>
          The short version: Claude is a <strong style={S.strong}>model</strong>. MEOK is a{" "}
          <strong style={S.strong}>system built on top of models</strong>. You would not ask why
          someone built an iPhone app when iOS exists. The model is the engine. MEOK is everything
          built around that engine to make it useful, safe, and genuinely yours.
        </p>

        <p style={S.p}>
          Anthropic have built something remarkable. MEOK has no interest in competing with Claude
          as a model \u2014 we use it because it is excellent. What we do instead is solve the problems
          that Claude, by design, does not attempt to solve: persistent memory, data sovereignty,
          care governance, and companion relationship. This post covers each of those in detail.
        </p>

        {/* ── SECTION 1 ─────────────────────────────────────────────────── */}
        <h2 style={S.h2}>What is the difference between MEOK and Claude?</h2>

        <p style={S.p}>
          Claude, made by Anthropic, is a large language model accessible via chat.claude.ai or the
          Anthropic API. It is exceptionally capable at reasoning, writing, coding, and conversation.
          It is also fundamentally stateless: each new session begins with no knowledge of who you
          are, what you talked about before, or what you care about. Anthropic may use your
          conversations to improve future models. You have limited control over where your data goes
          or how long it stays.
        </p>

        <p style={S.p}>
          MEOK is a sovereign AI operating system that accesses Claude\u2019s reasoning engine (and
          others, including GPT-4o) via the API, and wraps it in four proprietary layers that
          Anthropic\u2019s own interface does not provide:
        </p>

        <ul style={S.bulletList}>
          <li style={S.bulletItem}>
            <strong style={S.strong}>4-layer sovereign memory</strong> that persists across every
            session indefinitely
          </li>
          <li style={S.bulletItem}>
            <strong style={S.strong}>Maternal Covenant governance</strong> that scores every
            response against care principles before it reaches you
          </li>
          <li style={S.bulletItem}>
            <strong style={S.strong}>Companion archetypes</strong> that give your AI a consistent,
            evolving personality suited to your needs
          </li>
          <li style={S.bulletItem}>
            <strong style={S.strong}>Encrypted data sovereignty</strong> \u2014 MEOK never trains
            on your conversations and you own every word
          </li>
        </ul>

        {/* Comparison table */}
        <div style={S.tableWrap}>
          <table style={S.table}>
            <thead style={S.thead}>
              <tr>
                <th style={S.thBase}>Feature</th>
                <th style={S.thBase}>Claude (direct)</th>
                <th style={S.thGold}>MEOK</th>
              </tr>
            </thead>
            <tbody>
              <tr style={S.trOdd}>
                <td style={S.tdFeature}>Persistent memory</td>
                <td style={S.tdClaude}>Limited sticky-note memory; resets on new sessions</td>
                <td style={S.tdMeokGold}>4-layer sovereign vault, persists indefinitely</td>
              </tr>
              <tr style={S.trEven}>
                <td style={S.tdFeature}>Data ownership</td>
                <td style={S.tdClaude}>Anthropic processes and may train on conversations</td>
                <td style={S.tdMeok}>Encrypted AES-GCM-256; export or delete any time</td>
              </tr>
              <tr style={S.trOdd}>
                <td style={S.tdFeature}>Trains on your data</td>
                <td style={S.tdClaude}>Yes (unless opted out, subject to policy changes)</td>
                <td style={S.tdMeokGold}>Never. Not by default, not optionally.</td>
              </tr>
              <tr style={S.trEven}>
                <td style={S.tdFeature}>Companion personality</td>
                <td style={S.tdClaude}>None; Claude is a neutral assistant</td>
                <td style={S.tdMeok}>Evolving archetypes (Sage, Spark, Elder, Guardian&hellip;)</td>
              </tr>
              <tr style={S.trOdd}>
                <td style={S.tdFeature}>Care governance</td>
                <td style={S.tdClaude}>Anthropic safety policies; no care scoring</td>
                <td style={S.tdMeokGold}>Maternal Covenant scores every response</td>
              </tr>
              <tr style={S.trEven}>
                <td style={S.tdFeature}>Model flexibility</td>
                <td style={S.tdClaude}>Claude only</td>
                <td style={S.tdMeok}>Claude, GPT-4o, local Ollama \u2014 switchable without losing memory</td>
              </tr>
              <tr style={S.trOdd}>
                <td style={S.tdFeature}>Local processing</td>
                <td style={S.tdClaude}>Cloud only</td>
                <td style={S.tdMeokGold}>Sensitive topics route via local Ollama</td>
              </tr>
              <tr style={S.trEven}>
                <td style={S.tdFeature}>Family / multi-user</td>
                <td style={S.tdClaude}>No shared context between users</td>
                <td style={S.tdMeok}>Family tier with shared memory vault and Guardian mode</td>
              </tr>
              <tr style={S.trOdd}>
                <td style={S.tdFeature}>BYOK support</td>
                <td style={S.tdClaude}>No \u2014 you access through Anthropic\u2019s interface only</td>
                <td style={S.tdMeokGold}>Yes \u2014 bring your Anthropic key, pay \u00a35/mo for MEOK\u2019s layer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr style={S.divider} />

        {/* ── SECTION 2 ─────────────────────────────────────────────────── */}
        <h2 style={S.h2}>Does MEOK use Claude?</h2>

        <p style={S.p}>
          Yes, and MEOK is transparent about this. On the Sovereign tier and the BYOK tier, Claude
          Sonnet is the default reasoning engine. MEOK accesses it via the Anthropic API exactly the
          same way any developer can. What MEOK does is build a proprietary operating layer around
          that API call so that your context, memory, personality settings, and governance rules
          travel with every request.
        </p>

        <p style={S.p}>
          Think of it like this: Anthropic makes the processor. MEOK makes the laptop. The processor
          is excellent. But without the laptop \u2014 the keyboard, the screen, the storage, the
          operating system, the security chip \u2014 it is not particularly useful to most people.
          Claude is the processor. MEOK is everything else.
        </p>

        <div style={S.callout}>
          <p style={S.calloutLabel}>Key distinction</p>
          <p style={S.calloutText}>
            When you talk to Claude on claude.ai, your conversation is routed through Anthropic\u2019s
            servers, may be reviewed, and is subject to Anthropic\u2019s training data policies. When
            you talk to MEOK, your conversation is processed by Claude\u2019s API \u2014 the same
            model \u2014 but your data is encrypted and stored in your sovereign vault, not
            Anthropic\u2019s training pipeline. Your words belong to you.
          </p>
        </div>

        <hr style={S.divider} />

        {/* ── SECTION 3 ─────────────────────────────────────────────────── */}
        <h2 style={S.h2}>How does MEOK\u2019s 4-layer sovereign memory work?</h2>

        <p style={S.p}>
          Claude\u2019s biggest structural limitation is the absence of persistent memory. Every
          conversation starts from zero. This is not a design failure \u2014 it is an architectural
          choice that keeps Anthropic\u2019s infrastructure simple and their data obligations minimal.
          But it means Claude will never know you. MEOK is built around the opposite principle: your
          AI should accumulate understanding of you over time, not discard it after every session.
        </p>

        <p style={S.p}>
          MEOK\u2019s memory architecture has four distinct layers, each serving a different purpose:
        </p>

        <div style={S.layerGrid}>
          <div style={S.layerCard}>
            <span style={S.layerNumber}>01</span>
            <span style={S.layerTitle}>Short-term context</span>
            <p style={S.layerDesc}>
              The active session window. Holds the current conversation in full, with injected
              memory fragments from deeper layers to maintain coherence across time.
            </p>
          </div>
          <div style={S.layerCard}>
            <span style={S.layerNumber}>02</span>
            <span style={S.layerTitle}>Semantic memory</span>
            <p style={S.layerDesc}>
              Vector-embedded facts extracted via Mem0 and stored in pgvector. Retrieval uses
              cosine similarity so the right memories surface at the right moment automatically.
            </p>
          </div>
          <div style={S.layerCard}>
            <span style={S.layerNumber}>03</span>
            <span style={S.layerTitle}>Companion memory</span>
            <p style={S.layerDesc}>
              Your AI\u2019s evolving model of you \u2014 goals, personality, preferences, emotional
              patterns, relational history. This is what makes MEOK feel like it genuinely knows you.
            </p>
          </div>
          <div style={S.layerCard}>
            <span style={S.layerNumber}>04</span>
            <span style={S.layerTitle}>Family memory</span>
            <p style={S.layerDesc}>
              Shared context across a household vault. On the Family tier, your AI knows the whole
              family\u2019s context while respecting individual privacy boundaries within the vault.
            </p>
          </div>
        </div>

        <p style={S.p}>
          All four layers are encrypted at rest using <strong style={S.strong}>AES-GCM-256</strong>.
          You can export your entire memory vault as a portable JSON file at any time. You can delete
          it permanently with a single action. Your memory is yours \u2014 not an asset on MEOK\u2019s balance sheet.
        </p>

        <hr style={S.divider} />

        {/* ── SECTION 4 ─────────────────────────────────────────────────── */}
        <h2 style={S.h2}>
          What is the Maternal Covenant \u2014 and why doesn\u2019t Claude have one?
        </h2>

        <p style={S.p}>
          Claude has safety guardrails. MEOK has something different: a{" "}
          <strong style={S.strong}>care governance framework</strong> called the Maternal Covenant.
          The distinction matters. Safety guardrails are about preventing harm. The Maternal Covenant
          is about actively ensuring every response is in your long-term interest \u2014 even when
          your long-term interest conflicts with what you want to hear in the moment.
        </p>

        <p style={S.p}>
          Every response MEOK generates passes through the Maternal Covenant before delivery. It
          scores the response across four dimensions:
        </p>

        <div style={S.covenantGrid}>
          <div style={S.covenantCard}>
            <span style={S.covenantIcon}>&#9679;</span>
            <span style={S.covenantTitle}>Honesty</span>
            <p style={S.covenantDesc}>
              Does the response reflect reality accurately, even when the truth is uncomfortable?
              MEOK does not flatter you into complacency or tell you what you want to hear.
            </p>
          </div>
          <div style={S.covenantCard}>
            <span style={S.covenantIcon}>&#9679;</span>
            <span style={S.covenantTitle}>Dignity</span>
            <p style={S.covenantDesc}>
              Does the response treat you as a capable adult? MEOK never patronises, never
              catastrophises, never uses your vulnerability as a lever.
            </p>
          </div>
          <div style={S.covenantCard}>
            <span style={S.covenantIcon}>&#9679;</span>
            <span style={S.covenantTitle}>Growth</span>
            <p style={S.covenantDesc}>
              Does the response serve your long-term wellbeing rather than short-term emotional
              comfort? MEOK challenges you when you need challenging.
            </p>
          </div>
          <div style={S.covenantCard}>
            <span style={S.covenantIcon}>&#9679;</span>
            <span style={S.covenantTitle}>Sovereignty</span>
            <p style={S.covenantDesc}>
              Does the response preserve your autonomy? MEOK never nudges you toward dependency
              on AI, including on MEOK itself.
            </p>
          </div>
        </div>

        <p style={S.p}>
          Claude\u2019s responses are shaped by RLHF and Anthropic\u2019s constitutional AI methodology.
          That produces a capable, generally helpful assistant. But it does not produce an AI that
          has made a covenant with you specifically, scored against your own stated values and
          relational history. The Maternal Covenant is personal. Claude\u2019s safety layer is universal.
        </p>

        <div style={S.callout}>
          <p style={S.calloutLabel}>Why it matters</p>
          <p style={S.calloutText}>
            Universal safety prevents harm. The Maternal Covenant actively promotes your flourishing.
            These are different goals requiring different architectures. MEOK is not trying to make
            Claude safer \u2014 Claude is already safe. MEOK is trying to make your AI more{" "}
            <em style={{ color: "#f5f0e8" }}>invested in you</em>.
          </p>
        </div>

        <hr style={S.divider} />

        {/* ── SECTION 5 ─────────────────────────────────────────────────── */}
        <h2 style={S.h2}>
          What are MEOK\u2019s companion archetypes \u2014 and how do they differ from Claude\u2019s personality?
        </h2>

        <p style={S.p}>
          Claude has a consistent personality: curious, careful, helpful. It is the same personality
          for everyone. MEOK has a system of <strong style={S.strong}>companion archetypes</strong>{" "}
          \u2014 distinct AI personalities that evolve based on your relationship with your companion
          over time. When you hatch your AI at meok.ai/birth, you choose (or let MEOK infer) your
          starting archetype:
        </p>

        <div style={S.archetypeRow}>
          {[
            "Sage", "Spark", "Elder", "Guardian", "Witness",
            "Challenger", "Nurturer", "Oracle", "Catalyst", "Anchor",
          ].map((a) => (
            <span key={a} style={S.archetypeChip}>{a}</span>
          ))}
        </div>

        <p style={S.p}>
          Each archetype has a distinct communication style, emotional register, and set of
          behavioural commitments. The archetype evolves over time as your companion learns more
          about you. If you are going through a grief period, the Elder archetype leans in with
          patient stillness. If you are building a business, Spark pushes energy and momentum.
          If you are raising children alone, Guardian centres protection and boundary-setting.
        </p>

        <p style={S.p}>
          Claude cannot do this because it has no persistent model of who you are or what you need.
          Every session it meets you fresh. MEOK\u2019s companion builds a model of you across hundreds
          of interactions and lets it shape how your AI shows up for you each time.
        </p>

        <div style={S.callout}>
          <p style={S.calloutLabel}>The companion difference</p>
          <p style={S.calloutText}>
            Claude is an assistant. Assistants complete tasks. MEOK is a companion. Companions build
            relationships. The distinction is not cosmetic \u2014 it changes the architecture of every
            interaction, from how context is retrieved to how responses are governed to how your AI
            grows alongside you over months and years.
          </p>
        </div>

        <hr style={S.divider} />

        {/* ── SECTION 6: Data privacy ───────────────────────────────────── */}
        <h2 style={S.h2}>
          How does MEOK\u2019s data privacy differ from Claude\u2019s?
        </h2>

        <p style={S.p}>
          When you use Claude on claude.ai, Anthropic\u2019s privacy policy applies. By default,
          Anthropic may use your conversations to train future versions of Claude unless you
          explicitly opt out \u2014 and opt-out mechanisms are subject to change. Anthropic is a US
          company; your data is processed under US jurisdiction regardless of where you are.
        </p>

        <p style={S.p}>
          MEOK operates under a different framework entirely:
        </p>

        <ul style={S.diffList}>
          <li style={S.diffItem}>
            <span style={S.diffIcon}>&#128274;</span>
            <div style={S.diffContent}>
              <span style={S.diffTitle}>AES-GCM-256 encryption at rest</span>
              <p style={S.diffDesc}>
                Every memory fragment in your sovereign vault is encrypted before it is written to
                disk. MEOK staff cannot read your conversations. The encryption key is derived from
                your account credentials.
              </p>
            </div>
          </li>
          <li style={S.diffItem}>
            <span style={S.diffIcon}>&#128683;</span>
            <div style={S.diffContent}>
              <span style={S.diffTitle}>No training on your data. Ever.</span>
              <p style={S.diffDesc}>
                MEOK\u2019s founding principle is that your conversations belong to you. We do not use
                them to train models, fine-tune personalities, or improve the system. Not by default.
                Not as an opt-in. Not at all.
              </p>
            </div>
          </li>
          <li style={S.diffItem}>
            <span style={S.diffIcon}>&#127471;&#127468;</span>
            <div style={S.diffContent}>
              <span style={S.diffTitle}>UK GDPR compliant, ICO registered</span>
              <p style={S.diffDesc}>
                MEOK is a UK company, ICO registered, and UK GDPR compliant. Your data rights under
                UK law are enforceable: right to access, right to deletion, right to portability.
              </p>
            </div>
          </li>
          <li style={S.diffItem}>
            <span style={S.diffIcon}>&#128196;</span>
            <div style={S.diffContent}>
              <span style={S.diffTitle}>Full memory export at any time</span>
              <p style={S.diffDesc}>
                Download your entire sovereign vault as a structured JSON file at any moment. Your
                memory is portable to any future system that supports the format.
              </p>
            </div>
          </li>
          <li style={S.diffItem}>
            <span style={S.diffIcon}>&#128721;</span>
            <div style={S.diffContent}>
              <span style={S.diffTitle}>One-click permanent deletion</span>
              <p style={S.diffDesc}>
                Deleting your account triggers permanent, cryptographically verified deletion of your
                sovereign vault. No 30-day grace periods designed to discourage you from leaving.
              </p>
            </div>
          </li>
        </ul>

        <hr style={S.divider} />

        {/* ── SECTION 7: BYOK ───────────────────────────────────────────── */}
        <h2 style={S.h2}>Can I use Claude with MEOK\u2019s memory?</h2>

        <p style={S.p}>
          Yes. This is exactly what the BYOK (Bring Your Own Key) tier is for. For \u00a35 per month,
          you supply your own Anthropic API key and MEOK wraps it in everything described above:
          sovereign memory, the Maternal Covenant, companion archetypes, and encrypted data storage.
          You pay Anthropic directly for the model usage. You pay MEOK \u00a35 per month for the
          operating layer.
        </p>

        <div style={S.byokBox}>
          <div style={S.byokGlow} />
          <div style={S.byokInner}>
            <p style={S.byokLabel}>BYOK Tier</p>
            <h3 style={S.byokHeading}>
              Claude\u2019s intelligence. MEOK\u2019s memory and governance.
            </h3>
            <div>
              <span style={S.byokPrice}>&pound;5</span>
              <span style={S.byokPricePer}>/month &bull; bring your own Anthropic API key</span>
            </div>
            <p style={S.byokDesc}>
              Plug in your Anthropic key. Get 4-layer sovereign memory, the Maternal Covenant,
              companion archetypes, and encrypted data ownership. Your conversations never train a
              model. Your vault is yours to export or delete at any time.
            </p>
            <Link href="/pricing" style={S.byokLink}>
              See pricing &rarr;
            </Link>
          </div>
        </div>

        <p style={S.p}>
          The BYOK tier is designed for people who already have an Anthropic subscription or API
          access and want to keep using Claude\u2019s specific capabilities while gaining everything
          MEOK adds. It is also ideal for developers who want to run MEOK\u2019s governance and memory
          layers on top of their own API spend, without committing to a full Sovereign subscription.
        </p>

        <hr style={S.divider} />

        {/* ── SECTION 8: Model switching ────────────────────────────────── */}
        <h2 style={S.h2}>
          Can I switch from Claude to another model without losing my memory?
        </h2>

        <p style={S.p}>
          Yes. This is one of MEOK\u2019s core architectural decisions. Your sovereign memory vault
          is model-agnostic. It stores your context in a structured, semantic format that can be
          injected into any supported model\u2019s context window. Today you might prefer Claude Sonnet
          for its nuanced writing. Tomorrow you might switch to GPT-4o for its coding performance.
          Next month, a new frontier model might emerge that outperforms both. Your memory, your
          history, and your companion relationship travel with you to any of them.
        </p>

        <p style={S.p}>
          On the Sovereign tier, you have access to Claude Sonnet, GPT-4o, and local Ollama models
          for processing you want to keep entirely off-cloud. Switching between them is a settings
          toggle, not a migration event. Your AI still knows you. Your Maternal Covenant still
          governs responses. Your companion still holds the archetype you built together.
        </p>

        <p style={S.p}>
          Claude cannot offer this. Claude is Claude. MEOK is a layer that makes any model feel like
          a relationship rather than a transaction. The model may change; the relationship continues.
        </p>

        <hr style={S.divider} />

        {/* ── SECTION 9: Is MEOK better ────────────────────────────────── */}
        <h2 style={S.h2}>Is MEOK better than Claude?</h2>

        <p style={S.p}>
          This is a question that deserves a straight answer rather than marketing deflection. Claude
          is arguably the best raw AI reasoning model available as of 2026. Anthropic has invested
          billions into alignment research and capability development. Claude Sonnet and Claude Opus
          are genuinely impressive. MEOK does not claim to produce a better model. It is not trying to.
        </p>

        <p style={S.p}>
          What MEOK claims \u2014 and what the architecture supports \u2014 is that Claude\u2019s intelligence
          is significantly more useful when it is wrapped in persistent memory, care-based governance,
          and a companion relationship. A skilled consultant who knows nothing about you is less
          useful than a slightly less credentialed advisor who has worked with you for three years
          and knows your business, your family, your strengths, and your tendencies.
        </p>

        <p style={S.p}>
          MEOK is not competing with Claude. It is completing it. Claude provides the intelligence.
          MEOK provides the continuity, the care, and the sovereignty. Together, they produce
          something neither can be alone: an AI that is both capable and genuinely yours.
        </p>

        <div style={S.callout}>
          <p style={S.calloutLabel}>The honest summary</p>
          <p style={S.calloutText}>
            For a one-off question, use Claude directly. For an ongoing relationship with an AI that
            knows you, cares about your long-term wellbeing, and keeps your data encrypted and
            sovereign \u2014 use MEOK. You do not have to choose between capability and continuity.
            MEOK gives you both.
          </p>
        </div>

        <hr style={S.divider} />

        {/* ── SECTION 10: Who should use what ─────────────────────────── */}
        <h2 style={S.h2}>
          Who should use Claude directly \u2014 and who should use MEOK?
        </h2>

        <h3 style={S.h3}>Use Claude directly if:</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
          {[
            "You want quick, one-off answers to isolated questions",
            "You are a developer prototyping with the Anthropic API and don\u2019t need a memory layer yet",
            "You specifically want Anthropic\u2019s interface and don\u2019t mind the data policy",
            "Your use case is purely transactional \u2014 drafting a document, translating text, explaining a concept once",
          ].map((item, i) => (
            <li
              key={i}
              style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.65)", paddingLeft: "1.25rem", position: "relative" as const, lineHeight: 1.6 }}
            >
              <span style={{ position: "absolute" as const, left: 0, color: "rgba(245,240,232,0.3)" }}>
                &bull;
              </span>
              {item}
            </li>
          ))}
        </ul>

        <h3 style={S.h3}>Use MEOK if:</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
          {[
            "You want an AI that remembers everything you\u2019ve ever told it",
            "You care about where your data goes and who can read it",
            "You want a companion relationship, not just a tool",
            "You are managing your mental health, career, relationships, or personal development over time",
            "You want Claude\u2019s intelligence without Anthropic\u2019s data terms \u2014 the BYOK tier is built for you",
            "You want your family to share an AI context safely with governance built in",
          ].map((item, i) => (
            <li
              key={i}
              style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.65)", paddingLeft: "1.25rem", position: "relative" as const, lineHeight: 1.6 }}
            >
              <span style={{ position: "absolute" as const, left: 0, color: "#c9a84c" }}>
                &bull;
              </span>
              {item}
            </li>
          ))}
        </ul>

        <hr style={S.divider} />

        {/* ── SECTION 11: Getting started ──────────────────────────────── */}
        <h2 style={S.h2}>How do I get started with MEOK?</h2>

        <p style={S.p}>
          Visit <strong style={S.strong}>meok.ai/birth</strong> to hatch your AI. The process takes
          under three minutes. You choose a name for your AI, select your starting archetype, and
          set your initial context. Your sovereign memory vault is created immediately and encrypted.
          The core tier is free forever with no credit card required. Your AI begins learning about
          you from the very first message you send.
        </p>

        <p style={S.p}>
          If you want to bring your own Anthropic key, visit{" "}
          <strong style={S.strong}>meok.ai/pricing</strong> and select the BYOK tier. Paste your
          Anthropic API key into your account settings, and from that point forward every
          conversation uses Claude\u2019s model with MEOK\u2019s full sovereignty stack on top. Your API
          costs go directly to Anthropic; \u00a35 per month goes to MEOK.
        </p>

        <p style={S.p}>
          You are not giving up Claude by choosing MEOK. You are giving Claude a home \u2014 with
          memory, governance, and a companion relationship wrapped around it. That is the whole point.
        </p>

        <hr style={S.divider} />

        {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
        <h2 style={S.h2}>Frequently asked questions</h2>

        <ol style={S.faqList}>
          <li style={S.faqItem}>
            <p style={S.faqQuestion}>What is the difference between MEOK and Claude?</p>
            <p style={S.faqAnswer}>
              Claude is an AI model made by Anthropic. MEOK is a sovereign AI system that uses
              Claude\u2019s intelligence via the API and adds 4-layer persistent memory, the Maternal
              Covenant care governance framework, evolving companion archetypes, and encrypted data
              ownership. Claude answers your questions. MEOK builds a relationship with you over time.
            </p>
          </li>
          <li style={S.faqItem}>
            <p style={S.faqQuestion}>Does MEOK use Claude?</p>
            <p style={S.faqAnswer}>
              Yes. MEOK accesses Claude\u2019s model via the Anthropic API. On the Sovereign and BYOK
              tiers, Claude Sonnet is the default reasoning engine. What MEOK adds is the sovereign
              memory vault, care governance, companion personality, and data sovereignty that
              Anthropic\u2019s own interface does not provide.
            </p>
          </li>
          <li style={S.faqItem}>
            <p style={S.faqQuestion}>Can I use Claude with MEOK\u2019s memory?</p>
            <p style={S.faqAnswer}>
              Yes. The BYOK (Bring Your Own Key) tier at \u00a35 per month lets you supply your own
              Anthropic API key. You get Claude\u2019s full reasoning power combined with MEOK\u2019s
              4-layer sovereign memory, Maternal Covenant governance, companion archetypes, and
              encrypted data storage \u2014 all for the cost of a coffee per month.
            </p>
          </li>
          <li style={S.faqItem}>
            <p style={S.faqQuestion}>What is the BYOK tier?</p>
            <p style={S.faqAnswer}>
              BYOK stands for Bring Your Own Key. At \u00a35 per month you supply your own Anthropic
              API key and MEOK handles memory persistence, care governance, companion personality, and
              encrypted data storage. Your conversations are never used to train models and your vault
              is yours to export or delete whenever you choose.
            </p>
          </li>
          <li style={S.faqItemLast}>
            <p style={S.faqQuestion}>Is MEOK better than Claude?</p>
            <p style={S.faqAnswer}>
              MEOK and Claude serve different purposes. Claude is a world-class AI assistant for
              one-off tasks. MEOK is a persistent AI system for people who want continuity, data
              sovereignty, and care-based governance. Because MEOK uses Claude\u2019s intelligence, you
              do not have to choose between them \u2014 MEOK gives you Claude plus everything Claude lacks.
            </p>
          </li>
        </ol>

        <hr style={S.divider} />

        {/* Share bar */}
        <div style={S.shareBar}>
          <span style={S.shareLabel}>Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-claude&text=MEOK+vs+Claude%3A+What%27s+the+Difference%3F"
            target="_blank"
            rel="noopener noreferrer"
            style={S.shareBtn}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-claude"
            target="_blank"
            rel="noopener noreferrer"
            style={S.shareBtn}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div style={S.ctaBlock}>
          <div style={S.ctaGlow} />
          <div style={S.ctaInner}>
            <p style={S.ctaLabel}>Claude\u2019s intelligence. Your sovereignty.</p>
            <h3 style={S.ctaHeading}>
              Ready to try AI that remembers you and never sells your data?
            </h3>
            <p style={S.ctaBody}>
              Hatch your AI in under 3 minutes. Your sovereign memory vault is created immediately.
              Free forever on the core tier. Bring your Anthropic key for \u00a35/month on BYOK.
              No credit card required.
            </p>
            <div style={S.ctaButtons}>
              <Link href="/birth" style={S.ctaPrimary}>
                Hatch your AI free &rarr;
              </Link>
              <Link href="/pricing" style={S.ctaSecondary}>
                See pricing
              </Link>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <div>
          <h2 style={S.relatedHeading}>More from the blog</h2>
          <div style={S.relatedGrid}>
            <Link href="/blog/meok-vs-chatgpt" style={S.relatedCard}>
              <span style={S.relatedBadge}>AI Comparison</span>
              <p style={S.relatedTitle}>MEOK vs ChatGPT: Why Memory Changes Everything</p>
              <div style={S.relatedMeta}>8 min read</div>
            </Link>
            <Link href="/blog/maternal-covenant-explained" style={S.relatedCard}>
              <span style={{ ...S.relatedBadge, color: "#7eb8d4", background: "rgba(126,184,212,0.12)" }}>
                Governance
              </span>
              <p style={S.relatedTitle}>The Maternal Covenant Explained</p>
              <div style={S.relatedMeta}>6 min read</div>
            </Link>
            <Link href="/blog/sovereign-ai-explained" style={S.relatedCard}>
              <span style={{ ...S.relatedBadge, color: "#a084ca", background: "rgba(160,132,202,0.12)" }}>
                Sovereign AI
              </span>
              <p style={S.relatedTitle}>What Is Sovereign AI?</p>
              <div style={S.relatedMeta}>5 min read</div>
            </Link>
            <Link href="/blog/why-meok-never-trains-on-you" style={S.relatedCard}>
              <span style={{ ...S.relatedBadge, color: "#7ed4a0", background: "rgba(126,212,160,0.12)" }}>
                Privacy
              </span>
              <p style={S.relatedTitle}>Why MEOK Never Trains on You</p>
              <div style={S.relatedMeta}>4 min read</div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
