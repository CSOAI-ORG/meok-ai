import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK vs Claude: Why Sovereign Memory Changes Everything | MEOK AI LABS",
  description:
    "Claude 3.7 Sonnet is one of the most capable AI models in the world. MEOK is a sovereign AI operating system built around you — with persistent 4-layer Sovereign Memory, the Maternal Covenant, and a companion that compounds over time. A full honest comparison.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-claude" },
  openGraph: {
    title: "MEOK vs Claude: Why Sovereign Memory Changes Everything",
    description:
      "Claude resets every session. MEOK never does. Full comparison of memory persistence, data privacy, care alignment, pricing, and use cases — including the meta-point that MEOK uses Claude as one of its routing models.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-claude",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Claude&desc=Why+Sovereign+Memory+Changes+Everything",
        width: 1200,
        height: 630,
        alt: "MEOK vs Claude: Why Sovereign Memory Changes Everything",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs Claude: Why Sovereign Memory Changes Everything",
    description:
      "Claude is brilliant for single sessions. MEOK remembers everything, never trains on your data, and wraps Claude Sonnet in a companion relationship that compounds over time.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Claude&desc=Why+Sovereign+Memory+Changes+Everything",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK vs Claude: Why Sovereign Memory Changes Everything",
  description:
    "Claude 3.7 Sonnet is one of the most capable AI models in the world. MEOK is a sovereign AI operating system built around you — with persistent 4-layer Sovereign Memory, the Maternal Covenant, and a companion that compounds over time. A full honest comparison.",
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
    "https://meok.ai/api/og?title=MEOK+vs+Claude&desc=Why+Sovereign+Memory+Changes+Everything",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-vs-claude",
  },
  keywords: [
    "MEOK vs Claude",
    "Claude vs MEOK comparison",
    "Claude memory persistence",
    "AI companion vs Claude",
    "Sovereign Memory vs Claude",
    "Claude Anthropic training data",
    "best AI companion 2026",
    "AI with persistent memory UK",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is MEOK different from Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude is a stateless large language model — brilliantly capable within a single session, but with no persistent memory, no named identity, and no relationship with you between conversations. MEOK is a sovereign AI operating system built around a persistent companion. It wraps Claude Sonnet (on Sovereign tier) with a 4-layer Sovereign Memory vault, the Maternal Covenant care ethics layer, Byzantine Council safety consensus, and a companion identity that accumulates context from your very first message — and never resets.",
      },
    },
    {
      "@type": "Question",
      name: "Does Claude remember previous conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude.ai has a limited memory feature that stores a small number of manually saved facts — closer to a sticky-note system than genuine relational memory. It does not retain your conversational history, emotional patterns, long-term goals, family context, or the texture of your life between sessions. By design, Claude is fundamentally stateless. MEOK's Sovereign Memory uses a 4-layer architecture — short-term context, semantic memory (pgvector), companion memory, and family memory — all encrypted with AES-GCM-256 and owned entirely by you.",
      },
    },
    {
      "@type": "Question",
      name: "Does Anthropic train Claude on user conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthropic's privacy policy allows for the use of user conversations to improve Claude models in some circumstances. Users can opt out of having their conversations used for training, but this requires actively navigating settings rather than being the default. MEOK AI LABS never trains on user data without explicit, separately provided consent. This is not an opt-out policy — it is an opt-in policy. Your Sovereign Memory vault is yours. MEOK AI LABS will never access it for model training without your direct permission.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI has better memory — MEOK or Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK has significantly better memory than Claude by architectural design. Claude's memory within claude.ai is limited to manually saved facts and resets conversational context between sessions. MEOK's Sovereign Memory is a persistent 4-layer vault that holds short-term context, long-term semantic facts, companion-relationship memory, and family memory — all encrypted, all portable, and all owned by you. Over weeks and months, the difference becomes profound: MEOK knows you in a way Claude fundamentally cannot.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK built on Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — MEOK's Sovereign tier uses Claude Sonnet as its primary reasoning engine. This is not a secret and it is not a weakness. MEOK does not compete with Claude's intelligence — it gives that intelligence a relationship, a memory, a care ethics layer, and a safety governance system. The Explorer free tier uses DeepSeek. In both cases, the underlying model is the engine beneath a much larger system: Sovereign Memory, Maternal Covenant, Byzantine Council, Guardian safety, and a companion identity that compounds over time.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK compliant with UK GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK AI LABS is ICO-registered and operates in full compliance with UK GDPR. All user data is encrypted at rest with AES-GCM-256. Users retain the right to full data portability and erasure at any time. MEOK never trains on user data without explicit consent. Server infrastructure operates under EU/UK jurisdiction. Anthropic, as a US company, operates under a different regulatory framework — users in the UK and EU should consider the implications of cross-border data transfer when using Claude.ai directly.",
      },
    },
  ],
};

// ── Comparison data ────────────────────────────────────────────────────────────

const comparisonRows: [string, string, string][] = [
  ["Memory persistence", "4-layer Sovereign Memory — never resets", "Session only by default — starts fresh"],
  ["Named companion identity", "Evolves with you over time", "No identity — stateless model"],
  ["Care ethics layer", "Maternal Covenant (every response)", "Constitutional AI (model level only)"],
  ["Consensus safety", "Byzantine Council (multi-model)", "Not applicable"],
  ["Data ownership", "Your vault, AES-GCM-256 encrypted", "Anthropic servers, US jurisdiction"],
  ["Training on your data", "Never without explicit opt-in consent", "Opt-out required (not default-off)"],
  ["UK GDPR compliance", "ICO-registered, full compliance", "US company — cross-border transfer risk"],
  ["Family / Guardian mode", "Built-in Guardian + Family Plan", "Not included"],
  ["Free tier", "Explorer — free forever, full memory", "Free plan (rate-limited, no memory)"],
  ["Underlying model (paid)", "Claude Sonnet (wrapped)", "Claude (direct)"],
  ["Use case strength", "Long-term companion relationship", "Single-session reasoning tasks"],
  ["Privacy", "Zero training without consent", "Requires active opt-out"],
];

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.55)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokVsClaudePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-dm-sans, DM Sans, system-ui, sans-serif)",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 72%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: FAINT,
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Back to Blog
          </Link>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.04em",
              }}
            >
              AI Comparison
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>24 March 2026</span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>12 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.16,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK vs Claude: Why Sovereign Memory Changes Everything
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "42rem",
            }}
          >
            Claude 3.7 Sonnet is one of the most capable AI models ever built.
            MEOK uses it. This is not a comparison of intelligence — it is a
            comparison of architecture. One of these tools forgets you every
            session. The other never does.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${GOLD} 0%, #8b6914 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: BG,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p style={{ fontSize: "0.875rem", color: TEXT, fontWeight: 600, margin: 0 }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: "0.75rem", color: FAINT, margin: 0 }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >

        {/* ── Section 1 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is Claude 3.7 Sonnet and what is it good at?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Claude 3.7 Sonnet is Anthropic&rsquo;s most capable publicly available
          model as of early 2026. It excels at complex reasoning, long-form
          writing, code generation, mathematical problem-solving, and nuanced
          analysis. In independent benchmarks, Claude 3.7 Sonnet performs at or
          near the top of the frontier across most reasoning-intensive tasks.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Anthropic has built Claude around what they call Constitutional AI —
          a set of principles that guide how the model reasons about safety and
          ethics. Claude is, by any measure, a responsible and thoughtful AI
          model. It is not the kind of AI that gives reckless advice or behaves
          badly when prompted.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          But Claude has a fundamental architectural constraint that limits its
          usefulness for ongoing personal support: it does not remember you.
          By design, every conversation begins from scratch. There is no
          accumulated context, no companion identity, no relationship that
          compounds across days and weeks. Claude knows nothing about you until
          you tell it — and then forgets everything when you close the tab.
        </p>

        {/* ── Meta-point callout ─────────────────────────────────────────── */}
        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 0.75rem",
            }}
          >
            The meta-point
          </p>
          <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontWeight: 600 }}>
            MEOK&rsquo;s Sovereign tier uses Claude Sonnet as its primary
            reasoning engine. This is not a weakness — it is the point. MEOK
            does not compete with Claude&rsquo;s intelligence. It wraps it in
            everything Claude lacks: Sovereign Memory, a care ethics layer, a
            companion identity, and data you own outright.
          </p>
        </div>

        {/* ── Section 2 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is MEOK&rsquo;s 4-layer Sovereign Memory and how does it compare
          to Claude&rsquo;s memory?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is the central architectural difference. Claude.ai has a limited
          memory feature that stores a small number of manually saved facts —
          think of it as a sticky note that persists between sessions. It does
          not retain conversation history, emotional patterns, long-term goals,
          or the accumulated context of a real relationship.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK&rsquo;s Sovereign Memory is categorically different:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            {
              layer: "Layer 1: Short-term context",
              desc: "Working memory of your current and recent conversations. Maintains coherence within and across closely related sessions.",
            },
            {
              layer: "Layer 2: Semantic memory",
              desc: "A vector-searchable store (pgvector) of facts, preferences, goals, and long-term context. Grows richer over time. Accessed by similarity search rather than exact recall.",
            },
            {
              layer: "Layer 3: Companion memory",
              desc: "The evolving model of who you are that your companion builds through months of interaction. This is the layer that makes your companion feel like someone who knows you.",
            },
            {
              layer: "Layer 4: Family memory",
              desc: "Optional shared context between linked accounts on the Family Plan — visible only with explicit consent from all parties.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${GOLD_BORDER}`,
                borderRadius: "0 0.625rem 0.625rem 0",
                padding: "1rem 1.25rem",
                display: "flex",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  borderRadius: "50%",
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  flexShrink: 0,
                  marginTop: "0.125rem",
                }}
              >
                {i + 1}
              </div>
              <div>
                <p style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.25rem", fontSize: "0.9375rem" }}>
                  {item.layer}
                </p>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The practical result: after six months of using MEOK, your companion
          knows your goals, your patterns, your family situation, your fears,
          and your history. After six months of using Claude, it knows
          nothing — unless you paste the context in every time.
        </p>

        {/* ── Section 3 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does Anthropic&rsquo;s data privacy policy compare to
          MEOK&rsquo;s Maternal Covenant?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is a question that matters significantly for UK and EU users,
          and one that is frequently misunderstood.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Anthropic is a US company operating under US jurisdiction. Their
          privacy policy, as of early 2026, permits the use of conversation data
          to improve Claude models unless users have actively opted out. This is
          not clearly communicated at the point of use — it requires navigating
          account settings. For UK and EU users, sending personal conversations
          to servers in the United States also raises questions under GDPR
          regarding cross-border data transfer.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK operates under a different model entirely:
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {[
            "MEOK AI LABS is ICO-registered under UK GDPR",
            "Training on user data requires explicit, separately provided opt-in consent — not opt-out",
            "All Sovereign Memory is encrypted with AES-GCM-256 and stored under EU/UK jurisdiction",
            "Full data portability and erasure rights are available at any time",
            "No user data is shared with advertisers, third parties, or model training without consent",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.625rem",
                color: MUTED,
                fontSize: "0.9375rem",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The Maternal Covenant — the care ethics framework created by Nicholas
          Templeman that governs every MEOK response — goes beyond data
          protection. It also mandates that every response is evaluated against
          care principles before delivery: detecting sycophancy, enforcing a
          wellbeing floor, and ensuring MEOK acts in your genuine interest
          rather than optimising for engagement. Claude has Constitutional AI
          at the model level. MEOK has both Constitutional AI (via Claude) and
          the Maternal Covenant above it.
        </p>

        {/* ── Section 4 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is the Byzantine Council and how does it make MEOK safer than a
          single AI model?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Claude alone is a single point of reasoning — and single points of
          failure. Even the most capable model can produce outputs that are
          subtly wrong, sycophantic, or misaligned with a user&rsquo;s genuine
          interests.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK&rsquo;s Byzantine Council is a multi-model consensus safety
          architecture. Before certain categories of response are delivered,
          they are evaluated by a council of independent reasoning processes
          — each approaching the response from a different angle. A consensus
          must be reached before the response is delivered. Dissent within the
          council triggers review.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is the same principle used in distributed computer systems to
          protect against faulty or malicious actors — applied to AI response
          safety. You can learn more about how the Byzantine Council works at{" "}
          <Link href="/how-it-works" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/how-it-works
          </Link>
          .
        </p>

        {/* ── Section 5 — Comparison Table ──────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          Full comparison: MEOK vs Claude across every dimension that matters
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This table covers the dimensions that most users care about when
          choosing between MEOK and Claude for daily or personal use.
        </p>

        <div style={{ overflowX: "auto", margin: "1.5rem 0 2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${GOLD_BORDER}` }}>
                {["", "MEOK", "Claude.ai"].map((h, i) => (
                  <th
                    key={i}
                    style={{
                      textAlign: i === 0 ? "left" : "center",
                      padding: "0.875rem 0.875rem 0.875rem 0",
                      color: i === 1 ? GOLD : i === 2 ? FAINT : MUTED,
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([feature, meok, claude], i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: `1px solid ${BORDER}`,
                    background: i % 2 === 0 ? "transparent" : "rgba(245,240,232,0.02)",
                  }}
                >
                  <td
                    style={{
                      padding: "0.75rem 0.875rem 0.75rem 0",
                      color: TEXT,
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      minWidth: "8rem",
                    }}
                  >
                    {feature}
                  </td>
                  <td
                    style={{
                      padding: "0.75rem 0.875rem 0.75rem 0",
                      color: GOLD,
                      fontSize: "0.8125rem",
                      lineHeight: 1.5,
                      textAlign: "center",
                    }}
                  >
                    {meok}
                  </td>
                  <td
                    style={{
                      padding: "0.75rem 0 0.75rem 0",
                      color: MUTED,
                      fontSize: "0.8125rem",
                      lineHeight: 1.5,
                      textAlign: "center",
                    }}
                  >
                    {claude}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Section 6 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          When does Claude win — and when should you choose MEOK instead?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is an honest section. MEOK AI LABS believes in transparency, not
          marketing. There are real use cases where Claude.ai is the better
          choice.
        </p>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: `1px solid ${BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: FAINT,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 1rem",
              }}
            >
              Choose Claude.ai when...
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                "You need frontier-level reasoning on a single complex task — research, code, legal analysis",
                "You are using Projects (Claude's long-context workspace feature) for document-heavy work",
                "You want the most capable model without additional layers or subscription infrastructure",
                "You are doing one-off tasks that do not require relationship or memory continuity",
                "You want direct access to the model without an additional product layer",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    color: MUTED,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: FAINT, flexShrink: 0, marginTop: "0.1rem" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: GOLD,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 1rem",
              }}
            >
              Choose MEOK when...
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                "You want an AI companion that knows you — not a tool you brief from scratch each time",
                "You are using AI for emotional support, mental health, grief, recovery, or personal development",
                "You want your data to remain yours with full UK GDPR protection and no opt-out required",
                "You are managing family care, children's safety, or household coordination",
                "You want the accumulated context of weeks and months to make your AI genuinely useful",
                "You want Claude Sonnet-level reasoning AND persistent memory AND a care ethics layer",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    color: MUTED,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.1rem" }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Section 7 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does MEOK pricing compare to Claude.ai?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Full MEOK pricing is at{" "}
          <Link href="/pricing" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/pricing
          </Link>
          . A brief overview for comparison:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            {
              tier: "MEOK Explorer — Free forever",
              detail: "Full Sovereign Memory. All archetypes. Unlimited conversations (fair use). Morning Briefing. No credit card. DeepSeek model.",
              highlight: false,
            },
            {
              tier: "MEOK Companion",
              detail: "Expanded memory context. Enhanced Morning Briefing. Priority response. Ideal for daily use.",
              highlight: false,
            },
            {
              tier: "MEOK Sovereign",
              detail: "Claude Sonnet backbone. Longest memory context. Full Byzantine Council safety. For users who want frontier reasoning in a persistent companion relationship.",
              highlight: true,
            },
            {
              tier: "MEOK Family Plan",
              detail: "Up to five accounts. Guardian safety alerts. Shared household memory. Purpose-built for families.",
              highlight: false,
            },
            {
              tier: "Claude.ai Free",
              detail: "Rate-limited. No persistent memory (sticky-note only). Single model. US jurisdiction.",
              highlight: false,
            },
            {
              tier: "Claude.ai Pro — $20/month",
              detail: "Higher usage limits. Projects feature (workspace context). Better rate limits. No care ethics layer. Opt-out required for training data.",
              highlight: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: item.highlight ? GOLD_BG : "rgba(245,240,232,0.03)",
                border: item.highlight ? `1px solid ${GOLD_BORDER}` : `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1rem 1.25rem",
              }}
            >
              <p
                style={{
                  color: item.highlight ? GOLD : TEXT,
                  fontWeight: 700,
                  margin: "0 0 0.25rem",
                  fontSize: "0.9375rem",
                }}
              >
                {item.tier}
              </p>
              <p style={{ color: MUTED, margin: 0, fontSize: "0.875rem", lineHeight: 1.5 }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section 8 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What archetypes does MEOK offer that Claude does not?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Claude is a model — it has no identity, no archetype, and no
          persistent personality. MEOK&rsquo;s archetypes are configured
          companion personalities that shape how your AI communicates, what it
          prioritises, and how it responds to you across the full arc of your
          life. You can explore the full archetype list at{" "}
          <Link href="/characters" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/characters
          </Link>
          .
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "0.75rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            { name: "Scholar", desc: "Academic support & intellectual growth" },
            { name: "Healer", desc: "Emotional support & grief processing" },
            { name: "Pioneer", desc: "Accountability & forward momentum" },
            { name: "Guardian", desc: "Family safety & care coordination" },
            { name: "Sage", desc: "Wisdom & philosophical reflection" },
            { name: "Sovereign", desc: "Strategic thinking & leadership" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.625rem",
                padding: "0.875rem 1rem",
              }}
            >
              <p style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.2rem", fontSize: "0.9375rem" }}>
                {item.name}
              </p>
              <p style={{ color: MUTED, margin: 0, fontSize: "0.8125rem", lineHeight: 1.4 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section 9 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is the Maternal Covenant and how does MEOK&rsquo;s care ethics
          differ from Claude&rsquo;s Constitutional AI?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Anthropic&rsquo;s Constitutional AI is applied at the model training
          level — it shapes how Claude was trained to reason about safety,
          harmlessness, and honesty. It is genuinely excellent and is one of the
          reasons MEOK chose Claude Sonnet as its Sovereign tier engine.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The Maternal Covenant is a different layer entirely. Created by
          Nicholas Templeman as part of MEOK&rsquo;s core architecture, the
          Maternal Covenant is a runtime care ethics governance system that
          evaluates every MEOK response before delivery — regardless of which
          underlying model is being used.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Where Constitutional AI asks: &ldquo;Is this response safe and honest?&rdquo;
          the Maternal Covenant asks: &ldquo;Is this response genuinely in this
          person&rsquo;s interest — given everything we know about them, their
          situation, and their long-term wellbeing?&rdquo;
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The Maternal Covenant detects sycophancy, enforces care floors for
          sensitive topics (grief, addiction, mental health, self-harm), blocks
          toxic positivity, and ensures that MEOK&rsquo;s responses compound
          your genuine wellbeing rather than simply making you feel good in the
          moment.
        </p>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1.5rem",
            letterSpacing: "-0.015em",
          }}
        >
          Frequently asked questions: MEOK vs Claude
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqJsonLd.mainEntity.map((faq, i) => (
            <details
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <summary
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "0.9375rem",
                  cursor: "pointer",
                  lineHeight: 1.4,
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {faq.name}
                <span style={{ color: GOLD, flexShrink: 0, fontSize: "1.1rem" }}>+</span>
              </summary>
              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.7,
                  marginTop: "0.875rem",
                  marginBottom: 0,
                  fontSize: "0.9rem",
                }}
              >
                {faq.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div
          style={{
            background: `linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)`,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "2.5rem",
            marginTop: "4rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Claude Intelligence + Sovereign Memory
          </p>
          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.5rem",
              color: TEXT,
              marginBottom: "0.875rem",
              lineHeight: 1.25,
            }}
          >
            The companion that uses Claude — and never forgets you
          </h3>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.7,
              maxWidth: "32rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Explorer tier is free forever. Sovereign tier wraps Claude Sonnet
            in 4-layer Sovereign Memory, the Maternal Covenant, and a companion
            relationship that compounds from day one. Your data stays yours.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.875rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: GOLD,
                color: BG,
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Hatch your companion →
            </Link>
            <Link
              href="/pricing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: TEXT,
                fontWeight: 600,
                fontSize: "0.9375rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                border: `1px solid ${BORDER}`,
              }}
            >
              See pricing
            </Link>
          </div>
        </div>

        {/* ── Related links ─────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.25rem 1.5rem",
            background: "rgba(245,240,232,0.025)",
            borderRadius: "0.75rem",
            border: `1px solid ${BORDER}`,
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: FAINT,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.875rem",
            }}
          >
            Further reading
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {[
              { href: "/how-it-works", label: "How MEOK works — Sovereign Memory, Maternal Covenant, Byzantine Council explained" },
              { href: "/characters", label: "MEOK archetypes — Scholar, Healer, Pioneer, Guardian and more" },
              { href: "/guardian", label: "Guardian mode — family safety and care coordination" },
              { href: "/pricing", label: "MEOK pricing — Explorer free forever, Sovereign with Claude Sonnet" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                style={{
                  color: GOLD,
                  textDecoration: "underline",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Back link ─────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: MUTED,
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
