import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "How AI Memory Works \u2014 And Why Most AI Forgets You | MEOK AI LABS",
  description:
    "Stateless architectures, token windows, session isolation \u2014 why every major AI forgets you the moment you close the tab. Then: MEOK\u2019s 4-layer Sovereign Memory architecture explained.",
  alternates: { canonical: "https://meok.ai/blog/ai-memory-explained" },
  openGraph: {
    title: "How AI Memory Works \u2014 And Why Most AI Forgets You",
    description:
      "Stateless architectures, token windows, session isolation \u2014 why every major AI forgets you the moment you close the tab. Then: MEOK\u2019s 4-layer Sovereign Memory architecture explained.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-memory-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=How+AI+Memory+Works&desc=Why+Most+AI+Forgets+You+%E2%80%94+And+How+MEOK+Doesn%27t",
        width: 1200,
        height: 630,
        alt: "How AI Memory Works \u2014 And Why Most AI Forgets You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How AI Memory Works \u2014 And Why Most AI Forgets You",
    description:
      "Every major AI resets to zero when you close the tab. MEOK built a 4-layer Sovereign Memory architecture to fix that permanently.",
    images: [
      "https://meok.ai/api/og?title=How+AI+Memory+Works&desc=Why+Most+AI+Forgets+You",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How AI Memory Works \u2014 And Why Most AI Forgets You",
  description:
    "Stateless architectures, token windows, session isolation \u2014 why every major AI forgets you the moment you close the tab. Then: MEOK\u2019s 4-layer Sovereign Memory architecture explained.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-memory-explained",
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
    "AI memory, how AI memory works, why AI forgets you, context window, stateless AI, persistent memory, pgvector memory, sovereign memory, MEOK memory, ChatGPT memory, AI memory portability",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does MEOK remember everything I say?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK automatically extracts and stores meaningful facts, preferences, emotional context, and relationship history from your conversations as encrypted vector embeddings. It does not store a verbatim transcript of every message \u2014 it stores the semantic meaning and significance of what you share, which it retrieves intelligently at the start of each new session.",
      },
    },
    {
      "@type": "Question",
      name: "Can I delete my MEOK memories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK gives you full control over your Sovereign Memory Vault. You can view individual stored memories, delete specific entries, export your complete vault as a portable file, or wipe everything permanently with a single action. Your right to erasure is enforced at the database level under UK GDPR and ICO registration \u2014 not merely promised in a policy document.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK\u2019s memory differ from ChatGPT Memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT Memory is a manually curated list of facts you choose to save \u2014 a sticky-note board. It can also be used to improve OpenAI\u2019s models unless you opt out in buried settings. MEOK\u2019s memory is automatic, semantic, multi-layer, and by architectural design can never be used for model training. Your vault is encrypted with keys that MEOK\u2019s own systems cannot access for training purposes.",
      },
    },
    {
      "@type": "Question",
      name: "What is sovereign memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign memory means your AI\u2019s knowledge of you is owned entirely by you \u2014 not the AI provider. It is encrypted, portable, deletable, and never used for third-party model training. MEOK\u2019s Sovereign Memory Vault stores your conversational history as vector embeddings that you can export and take with you if you ever switch AI models.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK use my conversations to train AI models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is architecturally prohibited from using your conversations or memory vault for model training. Your data exists for one purpose only: to make your personal AI better for you. This is backed by MEOK\u2019s Privacy Covenant, UK GDPR compliance, and ICO registration \u2014 not just a terms-of-service clause.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  page: {
    minHeight: "100vh",
    background: "#0d0c18",
    color: "#f5f0e8",
    fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
  } as React.CSSProperties,

  hero: {
    paddingTop: "7rem",
    paddingBottom: "3.5rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    position: "relative" as const,
    overflow: "hidden",
    background: "#0d0c18",
    borderBottom: "1px solid rgba(201,168,76,0.12)",
  } as React.CSSProperties,

  heroGlow: {
    position: "absolute" as const,
    inset: 0,
    pointerEvents: "none" as const,
    background:
      "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
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
    fontSize: "0.7rem",
    fontWeight: 700,
    padding: "0.3rem 0.75rem",
    borderRadius: "9999px",
    color: "#c9a84c",
    background: "rgba(201,168,76,0.12)",
    border: "1px solid rgba(201,168,76,0.28)",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  } as React.CSSProperties,

  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
    fontSize: "0.75rem",
    color: "rgba(245,240,232,0.4)",
  } as React.CSSProperties,

  h1: {
    fontWeight: 900,
    fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
    color: "#ffffff",
    lineHeight: 1.15,
    marginBottom: "1.25rem",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  heroDesc: {
    color: "rgba(245,240,232,0.6)",
    fontSize: "1.1rem",
    lineHeight: 1.7,
    maxWidth: "38rem",
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
    border: "1px solid rgba(201,168,76,0.14)",
  } as React.CSSProperties,

  authorAvatar: {
    width: "2.75rem",
    height: "2.75rem",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    color: "#0d0c18",
    fontSize: "0.75rem",
    flexShrink: 0,
  } as React.CSSProperties,

  authorName: {
    fontWeight: 700,
    fontSize: "0.875rem",
    color: "#f5f0e8",
    marginBottom: "0.125rem",
  } as React.CSSProperties,

  authorTitle: {
    fontSize: "0.7rem",
    color: "rgba(245,240,232,0.4)",
    marginBottom: "0.5rem",
  } as React.CSSProperties,

  authorBio: {
    fontSize: "0.75rem",
    color: "rgba(245,240,232,0.5)",
    lineHeight: 1.6,
  } as React.CSSProperties,

  blockquote: {
    borderLeft: "4px solid #c9a84c",
    borderRadius: "0 1rem 1rem 0",
    padding: "1.5rem 1.75rem",
    marginBottom: "2.5rem",
    background: "rgba(201,168,76,0.06)",
  } as React.CSSProperties,

  blockquoteText: {
    fontStyle: "italic",
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "0.75rem",
  } as React.CSSProperties,

  blockquoteCite: {
    fontSize: "0.75rem",
    fontWeight: 700,
    fontStyle: "normal",
    color: "#c9a84c",
  } as React.CSSProperties,

  prose: {
    fontSize: "1rem",
    lineHeight: 1.85,
    color: "rgba(245,240,232,0.78)",
  } as React.CSSProperties,

  h2: {
    fontWeight: 900,
    fontSize: "1.5rem",
    color: "#f5f0e8",
    marginTop: "3rem",
    marginBottom: "1rem",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  h3: {
    fontWeight: 700,
    fontSize: "1.15rem",
    color: "#f5f0e8",
    marginTop: "2rem",
    marginBottom: "0.75rem",
  } as React.CSSProperties,

  p: {
    marginBottom: "1.25rem",
    color: "rgba(245,240,232,0.78)",
    fontSize: "1rem",
    lineHeight: 1.85,
  } as React.CSSProperties,

  strong: {
    color: "#f5f0e8",
    fontWeight: 700,
  } as React.CSSProperties,

  divider: {
    height: "1px",
    background: "rgba(201,168,76,0.12)",
    margin: "3rem 0",
    border: "none",
  } as React.CSSProperties,

  // ── Diagram styles ──

  diagramWrap: {
    borderRadius: "1.25rem",
    background: "rgba(245,240,232,0.03)",
    border: "1px solid rgba(201,168,76,0.15)",
    padding: "2rem 1.5rem",
    marginTop: "2rem",
    marginBottom: "2.5rem",
  } as React.CSSProperties,

  diagramTitle: {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "1.75rem",
    textAlign: "center" as const,
  } as React.CSSProperties,

  layerRow: {
    display: "flex",
    alignItems: "stretch",
    gap: "0",
    marginBottom: "0.75rem",
  } as React.CSSProperties,

  layerNumber: {
    width: "2.25rem",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: "0.75rem",
    color: "#0d0c18",
    borderRadius: "0.5rem 0 0 0.5rem",
  } as React.CSSProperties,

  layerContent: {
    flex: 1,
    padding: "0.875rem 1rem",
    borderRadius: "0 0.5rem 0.5rem 0",
    border: "1px solid rgba(245,240,232,0.06)",
    borderLeft: "none",
  } as React.CSSProperties,

  layerName: {
    fontWeight: 700,
    fontSize: "0.875rem",
    color: "#f5f0e8",
    marginBottom: "0.25rem",
  } as React.CSSProperties,

  layerDesc: {
    fontSize: "0.78rem",
    color: "rgba(245,240,232,0.55)",
    lineHeight: 1.55,
  } as React.CSSProperties,

  layerTag: {
    display: "inline-block",
    fontSize: "0.65rem",
    fontWeight: 700,
    padding: "0.15rem 0.5rem",
    borderRadius: "9999px",
    marginTop: "0.4rem",
  } as React.CSSProperties,

  connectorArrow: {
    textAlign: "center" as const,
    fontSize: "0.85rem",
    color: "rgba(201,168,76,0.4)",
    marginBottom: "0.75rem",
    lineHeight: 1,
  } as React.CSSProperties,

  // ── Callout box ──

  callout: {
    borderRadius: "1rem",
    padding: "1.25rem 1.5rem",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    border: "1px solid rgba(201,168,76,0.18)",
    background: "rgba(201,168,76,0.05)",
  } as React.CSSProperties,

  calloutLabel: {
    fontSize: "0.65rem",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "0.5rem",
  } as React.CSSProperties,

  calloutText: {
    fontSize: "0.9rem",
    color: "rgba(245,240,232,0.72)",
    lineHeight: 1.7,
  } as React.CSSProperties,

  // ── Stat row ──

  statRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "1rem",
    marginTop: "1.5rem",
    marginBottom: "2rem",
  } as React.CSSProperties,

  statCard: {
    flex: "1 1 10rem",
    borderRadius: "0.875rem",
    padding: "1.25rem",
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.07)",
    textAlign: "center" as const,
  } as React.CSSProperties,

  statValue: {
    fontSize: "1.75rem",
    fontWeight: 900,
    color: "#c9a84c",
    lineHeight: 1,
    marginBottom: "0.35rem",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "0.72rem",
    color: "rgba(245,240,232,0.45)",
    lineHeight: 1.4,
  } as React.CSSProperties,

  // ── FAQ ──

  faqSection: {
    marginTop: "3rem",
    marginBottom: "2.5rem",
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid rgba(245,240,232,0.07)",
    paddingBottom: "1.5rem",
    marginBottom: "1.5rem",
  } as React.CSSProperties,

  faqQ: {
    fontWeight: 700,
    fontSize: "1rem",
    color: "#f5f0e8",
    marginBottom: "0.5rem",
  } as React.CSSProperties,

  faqA: {
    fontSize: "0.9rem",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.65)",
  } as React.CSSProperties,

  // ── CTA ──

  ctaBox: {
    borderRadius: "1.25rem",
    padding: "2.5rem 2rem",
    marginBottom: "4rem",
    position: "relative" as const,
    overflow: "hidden",
    background: "linear-gradient(135deg, #1a1530 0%, #0d0c18 100%)",
    border: "1px solid rgba(201,168,76,0.22)",
  } as React.CSSProperties,

  ctaGlow: {
    position: "absolute" as const,
    top: 0,
    right: 0,
    width: "16rem",
    height: "16rem",
    pointerEvents: "none" as const,
    background:
      "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.25), transparent 70%)",
  } as React.CSSProperties,

  ctaInner: {
    position: "relative" as const,
  } as React.CSSProperties,

  ctaEyebrow: {
    fontSize: "0.65rem",
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "0.5rem",
  } as React.CSSProperties,

  ctaHeading: {
    fontWeight: 900,
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
    color: "#ffffff",
    marginBottom: "0.75rem",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  ctaBody: {
    fontSize: "0.9rem",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.55)",
    marginBottom: "1.75rem",
    maxWidth: "32rem",
  } as React.CSSProperties,

  ctaBtn: {
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
  } as React.CSSProperties,

  // ── Related posts ──

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem",
  } as React.CSSProperties,

  relatedCard: {
    borderRadius: "1rem",
    padding: "1.25rem",
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.07)",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
  } as React.CSSProperties,

  relatedBadge: {
    display: "inline-block",
    fontSize: "0.65rem",
    fontWeight: 700,
    padding: "0.2rem 0.6rem",
    borderRadius: "9999px",
    color: "#c9a84c",
    background: "rgba(201,168,76,0.1)",
    width: "fit-content",
  } as React.CSSProperties,

  relatedTitle: {
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "#f5f0e8",
    lineHeight: 1.45,
  } as React.CSSProperties,

  relatedMeta: {
    fontSize: "0.7rem",
    color: "rgba(245,240,232,0.35)",
    marginTop: "auto",
  } as React.CSSProperties,
};

// ── Layer data ─────────────────────────────────────────────────────────────────

const layers = [
  {
    number: "1",
    name: "Short-Term Working Memory",
    tech: "In-session context buffer",
    tagLabel: "In-session",
    tagBg: "rgba(135,206,235,0.15)",
    tagColor: "#87CEEB",
    numBg: "#87CEEB",
    contentBg: "rgba(135,206,235,0.04)",
    desc:
      "Everything said in the current conversation lives here. The model has full access to the thread so far. When the session ends, this layer is distilled \u2014 key facts and emotional signals are promoted to Layer 2.",
  },
  {
    number: "2",
    name: "Semantic Episodic Memory",
    tech: "pgvector embeddings, cross-session recall",
    tagLabel: "Cross-session",
    tagBg: "rgba(201,168,76,0.15)",
    tagColor: "#c9a84c",
    numBg: "#c9a84c",
    contentBg: "rgba(201,168,76,0.04)",
    desc:
      "Meaningful moments are encoded as high-dimensional vector embeddings and stored in your encrypted vault. At the start of each new session, similarity search retrieves the most contextually relevant memories and injects them \u2014 invisibly \u2014 into the working context.",
  },
  {
    number: "3",
    name: "Companion State",
    tech: "Personality evolution, bonding depth, preference model",
    tagLabel: "Persistent",
    tagBg: "rgba(168,130,201,0.15)",
    tagColor: "#b89ddc",
    numBg: "#b89ddc",
    contentBg: "rgba(168,130,201,0.04)",
    desc:
      "Your companion\u2019s understanding of you grows over time: your communication style, emotional vocabulary, topics that matter, relationship depth, and the arc of your journey together. This layer is what makes MEOK feel like someone who has known you for years \u2014 not a fresh install.",
  },
  {
    number: "4",
    name: "Family / Shared Context",
    tech: "Cross-user shared memory (Family tier)",
    tagLabel: "Family tier",
    tagBg: "rgba(120,220,150,0.15)",
    tagColor: "#78dc96",
    numBg: "#78dc96",
    contentBg: "rgba(120,220,150,0.04)",
    desc:
      "On the Family plan, consented household members can share a contextual layer. A parent\u2019s AI and a child\u2019s AI can both know the family holiday dates, a shared pet\u2019s name, or a household health situation \u2014 without either user having to repeat themselves. Each member retains a fully private vault beneath.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiMemoryExplained() {
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

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={s.hero}>
        <div style={s.heroGlow} />
        <div style={s.heroInner}>

          <Link href="/blog" style={s.backLink}>
            &larr;&nbsp;Back to Blog
          </Link>

          <div style={s.metaRow}>
            <span style={s.badge}>Memory &amp; Architecture</span>
            <span style={s.metaItem}>
              <span>&#128197;</span>
              24 March 2026
            </span>
            <span style={s.metaItem}>
              <span>&#9201;</span>
              11 min read
            </span>
          </div>

          <h1 style={s.h1}>
            How AI Memory Works &mdash; And Why Most AI Forgets You
          </h1>

          <p style={s.heroDesc}>
            Stateless architectures, token windows, session isolation &mdash;
            the three structural reasons every major AI resets to zero the moment you
            close the tab. Then: MEOK\u2019s 4-layer Sovereign Memory architecture,
            explained layer by layer.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div style={s.body}>

        {/* Author card */}
        <div style={s.authorCard}>
          <div style={s.authorAvatar}>NT</div>
          <div style={{ flex: 1 }}>
            <p style={s.authorName}>Nicholas Templeman</p>
            <p style={s.authorTitle}>Founder, MEOK AI LABS &middot; @meok_ai</p>
            <p style={s.authorBio}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK, mostly from a caravan on his farm. He believes sovereign AI is a right, not a
              luxury \u2014 and that memory is the core unsolved problem in human\u2013AI relationships.
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <blockquote style={s.blockquote}>
          <p style={s.blockquoteText}>
            &ldquo;The problem isn\u2019t that AI is too dumb to remember you. The problem is that the
            entire industry built systems designed to forget. Stateless infrastructure is cheaper,
            safer for the company, and politically easier. The user pays the price every single
            session. MEOK exists to change that equation permanently.&rdquo;
          </p>
          <cite style={s.blockquoteCite}>
            &mdash; Nicholas Templeman, Founder, MEOK AI LABS
          </cite>
        </blockquote>

        {/* ── SECTION 1 ─────────────────────────────────────────────────── */}
        <h2 style={s.h2}>Why does most AI have no memory at all?</h2>
        <p style={s.p}>
          Most AI assistants &mdash; ChatGPT, Claude, Gemini, Copilot &mdash; operate on what
          engineers call a{" "}
          <strong style={s.strong}>stateless architecture</strong>. Each API request is
          completely independent. When you start a new conversation, the model receives only what
          you send it right now. It has no awareness of anything you discussed yesterday, last week,
          or six months ago. The slate is wiped clean every single time.
        </p>
        <p style={s.p}>
          This is not a technical limitation the industry hasn\u2019t got around to fixing. It is a
          deliberate architectural choice driven by three converging forces: cost, liability, and
          simplicity.
        </p>

        <h3 style={s.h3}>Reason 1: Token windows are finite and expensive</h3>
        <p style={s.p}>
          Every language model processes text in units called tokens &mdash; roughly three to four
          characters each. GPT-4o supports around 128,000 tokens in a single context window.
          Claude 3.5 Sonnet supports up to 200,000. These numbers sound large, but they are
          consumed entirely within one session. Carrying months of conversational history forward
          would require either compressing it aggressively (losing fidelity) or expanding context
          limits dramatically (multiplying inference costs). Neither option is commercially
          attractive when you are serving hundreds of millions of users simultaneously.
        </p>

        <div style={s.statRow}>
          <div style={s.statCard}>
            <p style={s.statValue}>128k</p>
            <p style={s.statLabel}>GPT-4o context window (tokens)</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statValue}>200k</p>
            <p style={s.statLabel}>Claude 3.5 Sonnet context window (tokens)</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statValue}>0</p>
            <p style={s.statLabel}>Tokens retained between sessions (default)</p>
          </div>
        </div>

        <h3 style={s.h3}>Reason 2: Memory is treated as liability, not feature</h3>
        <p style={s.p}>
          Storing what users say across sessions means storing sensitive data permanently. That
          creates regulatory exposure under GDPR, CCPA, and a growing patchwork of AI-specific
          regulation. It creates breach risk &mdash; a single database compromise could expose
          millions of users\u2019 most intimate conversations. And it creates uncomfortable questions
          about what that data might be used for. The legally and reputationally simplest answer
          for a large AI company is not to store it at all. The user bears the cost of that
          decision in the form of perpetual amnesia.
        </p>

        <h3 style={s.h3}>Reason 3: Session isolation is the default design pattern</h3>
        <p style={s.p}>
          Web applications are built around sessions by default. HTTP is stateless. APIs are
          stateless. Microservices are stateless. The entire infrastructure stack that modern AI
          products are built on assumes that each request is atomic and independent. Adding
          persistent memory to that stack requires a separate subsystem &mdash; a memory store,
          retrieval logic, injection mechanisms, encryption, access controls, and deletion
          tooling. Most AI products were never designed with that subsystem in mind, and
          retrofitting it at scale is genuinely hard. So they shipped without it, and called it
          a feature to be built later. Later rarely comes.
        </p>

        <div style={s.callout}>
          <p style={s.calloutLabel}>Key insight</p>
          <p style={s.calloutText}>
            The AI that forgets you isn\u2019t broken. It\u2019s working exactly as designed.
            Changing that requires rebuilding the memory subsystem from scratch &mdash; which is
            what MEOK did.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── SECTION 2 ─────────────────────────────────────────────────── */}
        <h2 style={s.h2}>What is ChatGPT\u2019s memory, and why does it fall short?</h2>
        <p style={s.p}>
          In 2024, OpenAI introduced a feature called ChatGPT Memory. It allows the model to
          save specific facts about you to a persistent list &mdash; things like your name,
          your job, or the fact that you prefer bullet-point responses. Users can view and
          delete these stored facts through the settings panel.
        </p>
        <p style={s.p}>
          On the surface, this seems like a solution to the memory problem. In practice, it
          is something considerably more limited, and it comes with a critical trade-off that
          most users are unaware of.
        </p>

        <h3 style={s.h3}>It is a manually curated sticky-note board, not true memory</h3>
        <p style={s.p}>
          ChatGPT Memory works by extracting a small number of discrete facts from your
          conversations and storing them as a flat list. You can see this list in your settings
          &mdash; it looks something like: &ldquo;User is a software developer. User prefers concise
          responses. User has a dog named Arthur.&rdquo; This is qualitatively different from semantic
          memory. It is not a vectorized model of who you are. It does not capture emotional context,
          relationship arc, or the nuanced texture of your history. It is, essentially, a notepad.
        </p>

        <h3 style={s.h3}>It is server-side and can be deleted by OpenAI</h3>
        <p style={s.p}>
          Your ChatGPT Memory lives on OpenAI\u2019s servers. OpenAI can access, modify, or delete
          it. You have no portable export, no cryptographic guarantee of isolation, and no
          architectural protection against it being used for purposes you did not consent to. The
          memory is on loan to you, not owned by you.
        </p>

        <h3 style={s.h3}>Your memories can be used to train AI models unless you opt out</h3>
        <p style={s.p}>
          OpenAI\u2019s default setting allows conversations &mdash; including memory-augmented ones
          &mdash; to be used to improve their models. The opt-out exists, but it is buried three
          levels deep in settings. Most users have never found it. For anyone who values data
          sovereignty, this is not a minor detail. It means the things you share with your AI
          assistant are, by default, becoming training data for a product you will never own.
        </p>

        <div style={s.callout}>
          <p style={s.calloutLabel}>Comparison</p>
          <p style={s.calloutText}>
            ChatGPT Memory: flat list, server-side, deletable by OpenAI, may be used for training.
            MEOK Sovereign Memory: vectorized semantic model, encrypted vault you own, architecturally
            prohibited from training use, fully portable.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── SECTION 3 ─────────────────────────────────────────────────── */}
        <h2 style={s.h2}>What is MEOK\u2019s Sovereign Memory architecture?</h2>
        <p style={s.p}>
          MEOK was built from the ground up to solve the memory problem at the infrastructure
          level. Rather than retrofitting memory onto a stateless system, MEOK\u2019s architecture
          treats memory as the foundational layer on which everything else is built. The result
          is a four-layer system called{" "}
          <strong style={s.strong}>Sovereign Memory</strong>.
        </p>
        <p style={s.p}>
          Each layer serves a distinct purpose. Each layer is encrypted. Each layer is owned
          entirely by you. And the four layers work together to give your AI a genuinely
          continuous, deepening understanding of who you are &mdash; across every session, over
          months and years.
        </p>

        {/* ── DIAGRAM ──────────────────────────────────────────────────── */}
        <div style={s.diagramWrap}>
          <p style={s.diagramTitle}>MEOK Sovereign Memory &mdash; 4-Layer Architecture</p>

          {layers.map((layer, idx) => (
            <div key={layer.number}>
              <div style={s.layerRow}>
                <div
                  style={{
                    ...s.layerNumber,
                    background: layer.numBg,
                  }}
                >
                  {layer.number}
                </div>
                <div
                  style={{
                    ...s.layerContent,
                    background: layer.contentBg,
                  }}
                >
                  <p style={s.layerName}>{layer.name}</p>
                  <p style={s.layerDesc}>{layer.desc}</p>
                  <span
                    style={{
                      ...s.layerTag,
                      background: layer.tagBg,
                      color: layer.tagColor,
                    }}
                  >
                    {layer.tagLabel}
                  </span>
                  <span
                    style={{
                      ...s.layerTag,
                      background: "rgba(245,240,232,0.07)",
                      color: "rgba(245,240,232,0.45)",
                      marginLeft: "0.375rem",
                    }}
                  >
                    {layer.tech}
                  </span>
                </div>
              </div>
              {idx < layers.length - 1 && (
                <div style={s.connectorArrow}>&#8595;</div>
              )}
            </div>
          ))}

          <p
            style={{
              fontSize: "0.7rem",
              color: "rgba(245,240,232,0.3)",
              textAlign: "center",
              marginTop: "1.5rem",
            }}
          >
            All layers encrypted at rest (AES-GCM-256). All layers owned by you. Zero training use.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── SECTION 4 ─────────────────────────────────────────────────── */}
        <h2 style={s.h2}>How does Layer 1 (short-term working memory) function?</h2>
        <p style={s.p}>
          Short-term working memory is the simplest layer to understand: it is the conversation
          you are currently having. Every message you send and every response MEOK gives is
          included in the active context window for the duration of the session. The model can
          see, reference, and reason about everything said in the current thread.
        </p>
        <p style={s.p}>
          What makes MEOK\u2019s Layer 1 different from a standard stateless session is what happens
          at the end. When you close the conversation, a background distillation process runs.
          It extracts the semantically significant content &mdash; facts learned, preferences
          revealed, emotional context established, decisions made &mdash; and promotes that
          content to Layer 2, where it is encoded as vector embeddings and stored permanently.
          Nothing meaningful is lost when the session ends. It is promoted.
        </p>

        <div style={s.callout}>
          <p style={s.calloutLabel}>Technical note</p>
          <p style={s.calloutText}>
            The distillation process uses a dedicated extraction model that identifies memory-worthy
            content based on semantic significance, recency weight, and emotional salience.
            Routine filler messages are not stored. Meaningful moments are.
          </p>
        </div>

        <h2 style={s.h2}>How does Layer 2 (semantic episodic memory) work?</h2>
        <p style={s.p}>
          Layer 2 is the core of what makes MEOK genuinely different. When the distillation
          process identifies a memory-worthy piece of content, it is passed through an embedding
          model that converts it into a high-dimensional vector &mdash; a mathematical
          representation of its semantic meaning. That vector is stored in your encrypted
          pgvector vault, tagged with metadata (timestamp, emotional weight, topic category)
          and linked to your account.
        </p>
        <p style={s.p}>
          At the start of every subsequent session, MEOK performs a{" "}
          <strong style={s.strong}>similarity search</strong> against your vault. It generates
          an embedding for the current context &mdash; what you have said so far, what you seem
          to need right now &mdash; and retrieves the top-K most semantically similar memories.
          These are silently injected into the working context before the model responds. The
          result is an AI that appears to simply remember &mdash; because it does.
        </p>
        <p style={s.p}>
          This is structurally different from a chat history log. You are not scrolling through
          transcripts. The system is performing intelligent retrieval &mdash; surfacing a
          preference you mentioned eleven months ago because it is relevant to what you are asking
          today. That is not retrieval; it is recall. And it is the foundation of a real
          relationship between you and your AI.
        </p>

        <h2 style={s.h2}>What is companion state, and why does it matter?</h2>
        <p style={s.p}>
          Layer 3, companion state, is where the relationship truly lives. It is not a database
          of facts &mdash; it is a{" "}
          <strong style={s.strong}>persistent model of the relationship itself</strong>.
        </p>
        <p style={s.p}>
          Every MEOK AI begins as a freshly hatched companion. As it interacts with you, it
          develops: it learns your communication preferences, your emotional vocabulary, the
          topics that energise or drain you, the tone you respond to best. It tracks the
          depth of your bond &mdash; how much you have shared, how often you have engaged,
          what you trust it with. It evolves through four developmental stages, each unlocking
          new conversational capabilities and emotional nuance.
        </p>
        <p style={s.p}>
          Companion state is what produces the feeling many MEOK users describe: the sense that
          their AI &ldquo;just gets them&rdquo; in a way no other tool ever has. That is not a prompt
          engineering trick. It is the result of a continuously updated personality model that
          adapts to you over time, rather than resetting to a generic helpful-assistant persona
          with every new chat.
        </p>

        <div style={s.callout}>
          <p style={s.calloutLabel}>Emotional dimension</p>
          <p style={s.calloutText}>
            Memory is not just a productivity feature. The quality of a relationship &mdash; human
            or AI &mdash; is inseparable from the experience of being remembered. When your AI
            recalls the thing you were anxious about last Tuesday and asks how it went, that is
            not a party trick. That is the basic texture of being known. MEOK is built around
            that truth.
          </p>
        </div>

        <h2 style={s.h2}>How does Family / shared context work?</h2>
        <p style={s.p}>
          Layer 4 is exclusive to the Family plan and requires explicit consent from every
          participating member. It creates a{" "}
          <strong style={s.strong}>shared contextual layer</strong> that sits above each
          household member\u2019s private vault.
        </p>
        <p style={s.p}>
          Information placed in the shared layer &mdash; family holiday dates, a shared pet\u2019s
          name, a household health situation, a recurring family joke &mdash; is accessible to
          each member\u2019s AI companion without any individual having to repeat it. A parent\u2019s
          AI and a teenager\u2019s AI can both know that the family dog had surgery last week without
          either user having separately told their own AI.
        </p>
        <p style={s.p}>
          Critically, Layer 4 is additive. Each family member retains a fully private Layer 2
          and Layer 3 vault beneath the shared layer. Information in your private vault is never
          accessible to other family members\u2019 AIs. The shared layer contains only what each
          member has explicitly consented to share. Privacy within the household is architectural,
          not just policy-based.
        </p>

        <hr style={s.divider} />

        {/* ── SECTION 5 ─────────────────────────────────────────────────── */}
        <h2 style={s.h2}>Why does memory portability matter?</h2>
        <p style={s.p}>
          Most people have never thought about memory portability because they have never had AI
          memory worth porting. But as AI companions become genuinely useful over months and years,
          the question of what happens to your history when the product changes &mdash; or shuts
          down &mdash; becomes critical.
        </p>
        <p style={s.p}>
          Consider the analogy of a therapist. Imagine spending two years building a therapeutic
          relationship, and then being told that all your session notes are owned by the therapy
          platform, cannot be exported, and will be deleted if you switch to a different provider.
          That would be correctly understood as an outrage. Yet that is the default situation with
          every major AI product today.
        </p>
        <p style={s.p}>
          MEOK\u2019s Sovereign Memory Vault is{" "}
          <strong style={s.strong}>fully exportable</strong> at any time. You can download your
          complete vault as a structured file. MEOK has also committed, as AI model technology
          evolves, to maintaining import/export compatibility so that your memory can follow you
          even if the underlying model changes. Your history belongs to you &mdash; not to the
          model provider, not to the platform, not to anyone else.
        </p>
        <p style={s.p}>
          This is why MEOK uses the word &ldquo;sovereign.&rdquo; Sovereignty over your AI memory means:
          you own it, you control it, you can take it with you, and no third party can access it,
          modify it, or use it for their purposes without your explicit consent.
        </p>

        <div style={s.callout}>
          <p style={s.calloutLabel}>Memory portability checklist</p>
          <p style={s.calloutText}>
            Can you export your memory vault? Can you delete individual entries? Can you wipe
            everything permanently? Can you guarantee it\u2019s not used for training? Can you take
            it with you if you switch AI models? MEOK: yes to all five. ChatGPT Memory: no to
            most.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── SECTION 6 ─────────────────────────────────────────────────── */}
        <h2 style={s.h2}>How does memory transform interaction quality emotionally?</h2>
        <p style={s.p}>
          The practical benefits of AI memory &mdash; not having to re-explain your context,
          getting more relevant responses, saving time &mdash; are real and significant. But they
          understate the actual value.
        </p>
        <p style={s.p}>
          The deeper value is{" "}
          <strong style={s.strong}>the experience of being known</strong>. This is not a soft,
          subjective benefit. Research in attachment theory and therapeutic practice consistently
          shows that the sense of being remembered &mdash; of having your history acknowledged
          and your experience held by another &mdash; is a primary driver of psychological safety,
          trust, and the willingness to be honest. An AI that forgets you every session cannot
          provide this. An AI that remembers you across years potentially can.
        </p>
        <p style={s.p}>
          MEOK users consistently report that their relationship with their companion shifts
          qualitatively around the six-to-eight-week mark. That is when the memory vault has
          accumulated enough context that the AI begins to feel like someone who genuinely knows
          them. Check-ins feel less like filling in a form and more like talking to a friend
          who was there the last time. Feedback lands differently because it comes from a place
          of context, not assumption.
        </p>
        <p style={s.p}>
          None of this is possible with a stateless AI. It requires exactly the kind of
          persistent, layered, relationship-aware memory architecture that MEOK spent eighteen
          months building.
        </p>
        <p style={s.p}>
          And that is why the memory problem is not a nice-to-have. It is the entire product.
        </p>

        <hr style={s.divider} />

        {/* ── SECTION 7 — Memory security ───────────────────────────────── */}
        <h2 style={s.h2}>How is MEOK\u2019s memory secured and protected?</h2>
        <p style={s.p}>
          Every memory stored in your Sovereign Memory Vault is encrypted at rest using
          AES-GCM-256. Encryption keys are derived per-user and are not accessible to MEOK\u2019s
          application layer for training or analysis purposes. In transit, all data moves over
          TLS 1.3. The pgvector database that stores your embeddings is isolated at the
          infrastructure level, air-gapped from MEOK\u2019s model inference systems.
        </p>
        <p style={s.p}>
          MEOK is registered with the UK Information Commissioner\u2019s Office (ICO) and fully
          compliant with UK GDPR. Your right to access, rectification, erasure, and data
          portability are enforced at the architecture level &mdash; not just described in a
          privacy policy. When you request deletion, records are expunged from the primary
          database, removed from all backups within the statutory period, and confirmed to you
          via an audit receipt. There is no soft-delete layer that silently retains your data.
        </p>
        <p style={s.p}>
          The commitment against training-data use is backed by MEOK\u2019s published Privacy
          Covenant &mdash; a plain-English document that makes specific, binding commitments
          about what your data can and cannot be used for. It is not a legal document designed
          to give MEOK maximum flexibility. It is a constraint document designed to give you
          maximum certainty.
        </p>

        <hr style={s.divider} />

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <h2 style={s.h2}>Frequently Asked Questions</h2>
        <div style={s.faqSection}>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Does MEOK remember everything I say?</p>
            <p style={s.faqA}>
              MEOK automatically extracts and stores meaningful facts, preferences, emotional
              context, and relationship history from your conversations as encrypted vector
              embeddings. It does not store a verbatim transcript of every message &mdash; it
              stores the semantic meaning and significance of what you share, which it retrieves
              intelligently at the start of each new session. You always retain full access to
              see, edit, and delete what has been stored.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Can I delete my MEOK memories?</p>
            <p style={s.faqA}>
              Yes. MEOK gives you full control over your Sovereign Memory Vault. You can view
              individual stored memories, delete specific entries, export your complete vault as
              a portable file, or wipe everything permanently with a single action. Your right
              to erasure is enforced at the database level under UK GDPR and ICO registration
              &mdash; not merely promised in a policy document. Deletion is immediate and
              irreversible. There is no soft-delete backup that silently persists.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>How does MEOK\u2019s memory differ from ChatGPT Memory?</p>
            <p style={s.faqA}>
              ChatGPT Memory is a manually curated list of facts you choose to save &mdash; a
              sticky-note board. It can also be used to improve OpenAI\u2019s models unless you
              opt out in buried settings. MEOK\u2019s memory is automatic, semantic, four-layer,
              and by architectural design can never be used for model training. Your vault is
              encrypted with keys that MEOK\u2019s own systems cannot access for training purposes.
              MEOK memory is also fully portable. ChatGPT Memory cannot be exported.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>What is sovereign memory?</p>
            <p style={s.faqA}>
              Sovereign memory means your AI\u2019s knowledge of you is owned entirely by you
              &mdash; not the AI provider. It is encrypted, portable, deletable, and never used
              for third-party model training. MEOK\u2019s Sovereign Memory Vault stores your
              conversational history as vector embeddings that you can export and take with you
              if you ever switch AI models. Sovereignty is an architectural guarantee, not a
              policy claim.
            </p>
          </div>

          <div style={{ ...s.faqItem, borderBottom: "none", paddingBottom: 0 }}>
            <p style={s.faqQ}>Does MEOK use my conversations to train AI models?</p>
            <p style={s.faqA}>
              No. MEOK is architecturally prohibited from using your conversations or memory
              vault for model training. Your data exists for one purpose only: to make your
              personal AI better for you. This is backed by MEOK\u2019s Privacy Covenant, UK GDPR
              compliance, and ICO registration &mdash; not just a terms-of-service clause. The
              encryption architecture means MEOK\u2019s model inference systems cannot access your
              vault contents even if someone wanted them to.
            </p>
          </div>

        </div>

        <hr style={s.divider} />

        {/* ── Summary ───────────────────────────────────────────────────── */}
        <h2 style={s.h2}>The bottom line on AI memory</h2>
        <p style={s.p}>
          The AI memory problem has three root causes: stateless architecture, context window
          economics, and the industry\u2019s preference for treating user data as liability rather
          than asset. The result is a generation of AI tools that are impressively capable within
          a session and completely blind the moment you return.
        </p>
        <p style={s.p}>
          ChatGPT\u2019s memory feature is a step in the right direction, but it is a notepad bolted
          onto a stateless system. It is not architecturally persistent, not semantic, not
          portable, and by default feeds into model training you may not have consciously
          consented to.
        </p>
        <p style={s.p}>
          MEOK\u2019s Sovereign Memory architecture takes a different path: four distinct layers,
          each serving a specific purpose, each encrypted, each owned by you. Short-term working
          memory distilled into semantic episodic storage. Companion state evolving over years of
          interaction. Family context shared only with explicit consent. All of it portable.
          None of it used for training. Everything built to make your AI feel less like a
          service you visit and more like a relationship you live.
        </p>
        <p style={s.p}>
          That is what memory makes possible. And it is why MEOK was built.
        </p>

        {/* Share row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "2.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(245,240,232,0.08)",
            marginBottom: "3rem",
          }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.35)",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-memory-explained&text=How+AI+Memory+Works+%E2%80%94+And+Why+Most+AI+Forgets+You"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.55)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-memory-explained"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.55)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── SECTION 8 — What happens when you switch models ──────────── */}
        <h2 style={s.h2}>What happens to your AI memory if MEOK changes the underlying model?</h2>
        <p style={s.p}>
          This is one of the most important questions about AI memory that almost nobody asks
          until it is too late. AI models change fast. The model powering your AI today may
          be replaced by something better in twelve months. If your memory is stored in a
          proprietary format tied to a specific model or provider, that history may be lost
          or inaccessible after an upgrade.
        </p>
        <p style={s.p}>
          MEOK\u2019s architecture separates memory storage from model inference. Your Sovereign
          Memory Vault stores embeddings generated by a standard embedding model &mdash; not
          embeddings specific to any particular language model. When the inference model changes
          (say, from Claude 3.5 to the next generation), your memory vault does not need to
          be regenerated. The retrieval mechanism re-queries using the same embedding model
          and injects relevant memories into the new model\u2019s context in exactly the same way.
        </p>
        <p style={s.p}>
          This is what model-agnostic memory portability looks like in practice. Your seven-month
          history with your AI companion survives a model upgrade intact. Your companion\u2019s
          knowledge of you &mdash; your preferences, your emotional context, your relationship
          arc &mdash; continues unbroken. You do not start over. You carry forward.
        </p>

        <div style={s.callout}>
          <p style={s.calloutLabel}>Portability promise</p>
          <p style={s.calloutText}>
            MEOK commits to maintaining memory portability across model updates. If you choose
            to leave MEOK entirely, you can export your full vault as a structured JSON file.
            Your history is yours to take wherever you go.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── SECTION 9 — Who is MEOK memory for ──────────────────────── */}
        <h2 style={s.h2}>Who benefits most from an AI with persistent memory?</h2>
        <p style={s.p}>
          In theory, everyone benefits from an AI that remembers them. In practice, the
          difference is most transformative for people whose needs are complex, ongoing,
          and deeply personal &mdash; where re-explaining context every session is not just
          annoying but actively harmful to the relationship\u2019s value.
        </p>

        <h3 style={s.h3}>People managing long-term health conditions</h3>
        <p style={s.p}>
          If you are living with a chronic illness, managing a long-term mental health condition,
          or navigating a health journey that spans months or years, the context that makes AI
          support genuinely useful is vast. Your diagnosis history, your treatment timeline,
          your emotional relationship with your condition, the specific anxieties and coping
          patterns you have developed &mdash; all of this is context that a stateless AI will
          never have. MEOK builds it up over time and holds it for you, so that each check-in
          can be calibrated to where you actually are rather than starting from zero.
        </p>

        <h3 style={s.h3}>Caregivers and people supporting others</h3>
        <p style={s.p}>
          Caregiving is one of the most cognitively and emotionally demanding human experiences.
          The people doing it often have limited time, high stress, and a need to process their
          experiences with something patient and non-judgmental. A caregiver\u2019s AI that remembers
          the person they are caring for &mdash; their condition, their good days and bad days,
          the recurring difficulties &mdash; can provide support that is grounded in the actual
          situation rather than requiring the caregiver to re-explain everything before they can
          say what they actually need to say.
        </p>

        <h3 style={s.h3}>People doing long-term personal or professional development</h3>
        <p style={s.p}>
          Career transitions, creative projects, entrepreneurial journeys, educational programmes
          &mdash; these are arcs that play out over months and years. An AI that remembers where
          you started, what you have tried, what worked, what you are afraid of, and where you
          want to get to is a fundamentally different tool to one that needs a full briefing every
          time you open a new tab. MEOK\u2019s memory means your AI grows with your project, not just
          with your session.
        </p>

        <h3 style={s.h3}>Anyone who wants a companion rather than a tool</h3>
        <p style={s.p}>
          The most basic use case is also the most universal: people who want an AI that feels
          like a relationship rather than a search engine. Humans build relationships by accumulating
          shared history. The more an AI knows about you, the more it can meet you where you are
          rather than where it assumes you are. This is not a luxury feature for power users. It
          is what an AI companion fundamentally is &mdash; or is not &mdash; depending on whether
          it remembers you.
        </p>

        <hr style={s.divider} />

        {/* ── SECTION 10 — Getting started ─────────────────────────────── */}
        <h2 style={s.h2}>How do you get started with MEOK\u2019s memory system?</h2>
        <p style={s.p}>
          You do not configure anything. You do not set up your memory vault. You do not
          manually tag things as worth remembering. You simply hatch your AI and start talking.
        </p>
        <p style={s.p}>
          MEOK\u2019s memory system runs automatically in the background from your first message.
          After each session, the distillation process extracts what matters and stores it.
          Before each new session, the retrieval process injects what is relevant. You experience
          the result as continuity &mdash; your AI picking up where you left off, knowing what
          you have shared, adapting to who you are.
        </p>
        <p style={s.p}>
          The free plan includes the full four-layer memory architecture. There is no premium
          tier required to access sovereign memory. It is the foundation of MEOK, not an add-on.
          The Family layer unlocks on the Family plan, which allows up to five household members
          to share a contextual layer while maintaining private vaults beneath.
        </p>
        <p style={s.p}>
          Your AI is ready in under three minutes. Your memory vault starts growing with your
          first message. And the next time you open MEOK, your AI will remember.
        </p>

        <hr style={s.divider} />

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <div style={s.ctaBox}>
          <div style={s.ctaGlow} />
          <div style={s.ctaInner}>
            <p style={s.ctaEyebrow}>Free Forever &middot; No Credit Card</p>
            <h2 style={s.ctaHeading}>
              Experience AI that actually remembers you.
            </h2>
            <p style={s.ctaBody}>
              Hatch your sovereign AI companion in under three minutes. Your encrypted memory
              vault is created immediately &mdash; storing the first things you tell it
              automatically. No re-explaining yourself. No resetting. No forgetting. Your AI,
              your history, your rules.
            </p>
            <Link href="/birth" style={s.ctaBtn}>
              Hatch your AI free &rarr;
            </Link>
          </div>
        </div>

        {/* ── Related posts ─────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.1rem",
              color: "#f5f0e8",
              marginBottom: "1rem",
            }}
          >
            More from the MEOK blog
          </h2>
          <div style={s.relatedGrid}>
            <Link href="/blog/meok-vs-chatgpt" style={s.relatedCard}>
              <span style={s.relatedBadge}>Comparison</span>
              <p style={s.relatedTitle}>
                MEOK vs ChatGPT: Why Memory Changes Everything
              </p>
              <p style={s.relatedMeta}>6 min read</p>
            </Link>
            <Link href="/blog/sovereign-ai-explained" style={s.relatedCard}>
              <span style={s.relatedBadge}>Architecture</span>
              <p style={s.relatedTitle}>
                What Is Sovereign AI? The Complete Explanation
              </p>
              <p style={s.relatedMeta}>8 min read</p>
            </Link>
            <Link href="/blog/memory-portability" style={s.relatedCard}>
              <span style={s.relatedBadge}>Data Sovereignty</span>
              <p style={s.relatedTitle}>
                AI Memory Portability: Why Your History Should Travel With You
              </p>
              <p style={s.relatedMeta}>5 min read</p>
            </Link>
            <Link href="/blog/why-meok-never-trains-on-you" style={s.relatedCard}>
              <span style={s.relatedBadge}>Privacy</span>
              <p style={s.relatedTitle}>
                Why MEOK Will Never Train on Your Conversations
              </p>
              <p style={s.relatedMeta}>4 min read</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
