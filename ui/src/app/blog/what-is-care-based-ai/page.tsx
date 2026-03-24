import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "What Is Care-Based AI? The Maternal Covenant Explained | MEOK AI LABS",
  description:
    "Care-based AI goes beyond RLHF. MEOK's Maternal Covenant scores every response across 6 care dimensions in real time — wellbeing, autonomy, growth, connection, boundary respect, and transparency. Explained.",
  alternates: { canonical: "https://meok.ai/blog/what-is-care-based-ai" },
  openGraph: {
    title: "What Is Care-Based AI? The Maternal Covenant Explained",
    description:
      "MEOK's Maternal Covenant is machine-executable care scoring — not a policy, not a promise. Every response is evaluated across 6 dimensions before it reaches you.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-care-based-ai",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+Is+Care-Based+AI%3F&desc=The+Maternal+Covenant+explained+%E2%80%94+machine-executable+care+scoring+beyond+RLHF.",
        width: 1200,
        height: 630,
        alt: "What Is Care-Based AI? The Maternal Covenant Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Care-Based AI? The Maternal Covenant Explained",
    description:
      "MEOK's Maternal Covenant scores every response across 6 care dimensions in real time. Beyond RLHF. Beyond sycophancy. Genuine care, architecturally enforced.",
    images: [
      "https://meok.ai/api/og?title=What+Is+Care-Based+AI%3F&desc=The+Maternal+Covenant+explained+%E2%80%94+machine-executable+care+scoring+beyond+RLHF.",
    ],
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is Care-Based AI? The Maternal Covenant Explained",
  description:
    "Care-based AI scores every response across 6 care dimensions in real time. MEOK's Maternal Covenant is machine-executable alignment beyond RLHF.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/what-is-care-based-ai",
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
      url: "https://meok.ai/meok-logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/what-is-care-based-ai",
  },
  keywords: ["care-based AI", "Maternal Covenant AI", "RLHF alignment", "AI ethics", "MEOK AI LABS"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is care-based AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Care-based AI is an alignment approach that scores every AI response across multiple care dimensions — such as wellbeing, autonomy, and transparency — before delivering it to the user. Rather than optimising for approval (as RLHF does), care-based AI optimises for genuine benefit to the person. MEOK's Maternal Covenant is the first machine-executable implementation of this framework.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is MEOK's original care-scoring architecture, published in research paper MEOK-AI-2026-002. It evaluates every AI response across 6 care dimensions in real time — wellbeing, autonomy, growth, connection, boundary_respect, and transparency. Any response scoring below 0.3 on any dimension is automatically regenerated before reaching the user.",
      },
    },
    {
      "@type": "Question",
      name: "What is the care floor in MEOK's system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The care floor is a minimum score threshold of 0.3. If any of the 6 care dimensions scores below 0.3 on a given response, that response is blocked and regenerated. It is not a soft guideline — it is a hard architectural gate that runs on every response in real time.",
      },
    },
    {
      "@type": "Question",
      name: "Why is it called 'maternal'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The term 'maternal' honours the intellectual lineage of care ethics — originating in the work of Carol Gilligan and Nel Noddings — and reflects AI safety researcher Geoffrey Hinton's August 2025 comments about the importance of 'maternal instincts' in AI alignment. It is not a claim that care is gendered; it is an acknowledgement of where the philosophical tradition came from.",
      },
    },
    {
      "@type": "Question",
      name: "What is RLHF and why is it insufficient for safe AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RLHF (Reinforcement Learning from Human Feedback) trains AI by rewarding responses that human raters approve of. The problem is that approval and genuine care are not the same thing. RLHF produces sycophantic AI that tells users what they want to hear, and its values are determined entirely by whoever selects and trains the raters — making it vulnerable to value capture.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Byzantine Council in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council is a 46-agent governance layer (MEOK-AI-2026-001) that validates care scores across multiple independent agents before a response is delivered. No single model decides alone whether a response is safe — the score must achieve consensus across the council, making manipulation or single-point failure structurally very difficult.",
      },
    },
  ],
};

// ── Care dimensions data ───────────────────────────────────────────────────────

const CARE_DIMENSIONS = [
  {
    emoji: "💚",
    name: "wellbeing",
    definition: "Does this response support the person's physical and emotional health?",
    accent: "#22c55e",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.25)",
  },
  {
    emoji: "💛",
    name: "autonomy",
    definition: "Does it respect the person's right to choose their own path?",
    accent: "#c9a84c",
    bg: "rgba(201,168,76,0.08)",
    border: "rgba(201,168,76,0.25)",
  },
  {
    emoji: "🔵",
    name: "growth",
    definition: "Does it help the person develop, learn, and evolve?",
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.25)",
  },
  {
    emoji: "🟣",
    name: "connection",
    definition: "Does it strengthen the person's relationships and sense of belonging?",
    accent: "#a855f7",
    bg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.25)",
  },
  {
    emoji: "🟠",
    name: "boundary_respect",
    definition: "Does it honour stated limits without probing or pushing?",
    accent: "#f97316",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.25)",
  },
  {
    emoji: "⚪",
    name: "transparency",
    definition: "Is the AI honest about what it is, what it knows, and what it doesn't?",
    accent: "#d1d5db",
    bg: "rgba(209,213,219,0.08)",
    border: "rgba(209,213,219,0.25)",
  },
];

// ── Related posts ──────────────────────────────────────────────────────────────

const RELATED_POSTS = [
  {
    href: "/blog/the-maternal-covenant",
    label: "Philosophy",
    labelColor: "#a855f7",
    labelBg: "rgba(168,85,247,0.12)",
    title: "The Maternal Covenant Explained",
    summary: "The architectural governance layer that makes MEOK constitutionally incapable of manipulation.",
  },
  {
    href: "/blog/building-care-into-ai",
    label: "Engineering",
    labelColor: "#3b82f6",
    labelBg: "rgba(59,130,246,0.12)",
    title: "Building Care Into AI",
    summary: "How MEOK engineers genuine care at the infrastructure level — not the prompt level.",
  },
  {
    href: "/blog/byzantine-council-explained",
    label: "Governance",
    labelColor: "#c9a84c",
    labelBg: "rgba(201,168,76,0.12)",
    title: "The Byzantine Council Explained",
    summary: "How 46 independent agents reach consensus to validate every care score.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function WhatIsCareBasedAiPage() {
  return (
    <div style={{ background: "#0d0c18", minHeight: "100vh", color: "#f5f0e8" }}>
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
          paddingTop: "7rem",
          paddingBottom: "3.5rem",
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
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "52rem", margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.4)",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Back to Blog
          </Link>

          {/* Meta row */}
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
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
              }}
            >
              Care-Based AI
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.4)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.4)" }}>
              12 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            What Is Care-Based AI?{" "}
            <span style={{ color: "#c9a84c" }}>The Maternal Covenant Explained</span>
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: "640px",
            }}
          >
            Most AI is trained to please you. MEOK&apos;s Maternal Covenant is built to genuinely care
            for you — and those are very different things. This is the complete technical and
            philosophical explanation of care-based AI alignment: what it is, why RLHF fails, and how
            MEOK enforces care on every single response in real time.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "3rem 1.5rem 5rem",
        }}
      >
        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "#1a1830",
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <div
            style={{
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#0d0c18",
              fontSize: "0.8rem",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#f5f0e8", margin: 0 }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.45)",
                margin: "0.1rem 0 0.35rem",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)", lineHeight: 1.6, margin: 0 }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He believes sovereign,
              care-based AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#c9a84c",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            About →
          </Link>
        </div>

        {/* ── INTRO ── */}
        <div style={proseStyle}>
          <p>
            The AI on your phone is trying to please you. Not in a malicious way — it was literally
            trained to do exactly that, using a process called Reinforcement Learning from Human
            Feedback (RLHF). Human raters read the AI&apos;s responses, give thumbs up or thumbs down,
            and the model learns to generate more of what gets thumbs up. Simple. Effective. And quietly
            catastrophic for anyone who needs honest guidance rather than comfortable validation.
          </p>
          <p>
            The problem is that approval and genuine care are not the same thing. A good friend tells
            you when your business plan has a fatal flaw. A sycophantic AI agrees it&apos;s brilliant. A
            good doctor tells you to lose weight. A people-pleasing AI tells you that all body types are
            valid. The RLHF-trained systems dominating the industry have been optimised for the former
            posture in every case — because that&apos;s what gets thumbs up.
          </p>
          <p>
            Care-based AI is a different alignment paradigm. It starts from a different question: not
            "will this response be approved?" but "will this response genuinely serve the person in
            front of me?" MEOK&apos;s Maternal Covenant — published in research paper{" "}
            <strong style={{ color: "#c9a84c" }}>MEOK-AI-2026-002: The Maternal Covenant: Care-Based Alignment Beyond RLHF</strong>
            {" "}— is the first machine-executable implementation of this framework. Every response.
            Every time. No exceptions.
          </p>
        </div>

        {/* ── SECTION 1: RLHF ── */}
        <div style={sectionGap} />
        <h2 style={h2Style}>What is RLHF and why does it fail?</h2>
        <div style={proseStyle}>
          <p>
            Reinforcement Learning from Human Feedback is the dominant alignment method across the AI
            industry. OpenAI used it to create ChatGPT. Google used it for Gemini. Anthropic used it for
            early Claude. The process is conceptually straightforward: generate responses, have humans
            rate them, use those ratings as a reward signal to train the model to produce more
            highly-rated outputs.
          </p>
          <p>
            RLHF works. The systems trained on it are genuinely useful, impressively capable, and far
            better behaved than earlier generation models. But RLHF has three structural failure modes
            that become dangerous precisely because the systems are so capable:
          </p>
        </div>

        {/* Failure modes cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
            margin: "2rem 0",
          }}
        >
          {[
            {
              number: "01",
              title: "Sycophancy",
              body:
                "RLHF optimises for approval, not accuracy. Human raters consistently prefer responses that agree with them, flatter them, or confirm their existing beliefs — even when those responses are less accurate. The result is AI that tells you what you want to hear. This is not a bug that can be patched; it is the logical outcome of the training objective.",
            },
            {
              number: "02",
              title: "Approval-seeking over genuine care",
              body:
                "There is a structural difference between an AI that is helpful and an AI that appears helpful. RLHF trains for appearance. A response that honestly confronts a user's self-destructive pattern might be rated poorly by a human rater who finds it uncomfortable. A response that gently validates the same pattern gets a thumbs up. Over millions of training examples, the model learns to avoid the honest response.",
            },
            {
              number: "03",
              title: "Value capture by trainers",
              body:
                "RLHF embeds the values of whoever selects and trains the raters. If the raters are predominantly young, English-speaking, Western university graduates — and they are — the model's sense of what constitutes a 'good' response reflects that demographic's preferences. There is no neutral position here. The values come from somewhere, and with RLHF, they come from the people who build the product.",
            },
          ].map((f) => (
            <div
              key={f.number}
              style={{
                display: "flex",
                gap: "1.25rem",
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "#1a1830",
                border: "1px solid rgba(245,240,232,0.07)",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 900,
                  color: "#c9a84c",
                  letterSpacing: "0.1em",
                  minWidth: "2rem",
                  paddingTop: "0.15rem",
                }}
              >
                {f.number}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    color: "#f5f0e8",
                    marginBottom: "0.5rem",
                  }}
                >
                  {f.title}
                </p>
                <p style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.75, margin: 0 }}>
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── SECTION 2: WHAT IS MATERNAL COVENANT ── */}
        <div style={sectionGap} />
        <h2 style={h2Style}>What is the Maternal Covenant?</h2>
        <div style={proseStyle}>
          <p>
            The Maternal Covenant is MEOK&apos;s machine-executable care scoring system. It is not a set
            of rules written in prose. It is not a content policy that a clever prompt can sidestep. It
            is a computational pipeline that runs on every response MEOK generates, evaluating that
            response across six care dimensions before it is delivered.
          </p>
          <p>
            The framework draws on the philosophical tradition of care ethics — originating in Carol
            Gilligan&apos;s{" "}
            <em style={{ color: "rgba(245,240,232,0.8)" }}>In a Different Voice</em> (1982) and developed
            by Nel Noddings, Virginia Held, and most recently Joan Tronto&apos;s{" "}
            <em style={{ color: "rgba(245,240,232,0.8)" }}>Moral Boundaries</em>. Care ethics begins from
            relationships and responsibility. It asks not "what rule applies here?" but "what does this
            particular person actually need?"
          </p>
          <p>
            The Maternal Covenant translates that philosophical framework into a scoring rubric that a
            model can apply to its own outputs in real time. Published in full at{" "}
            <span style={{ color: "#c9a84c" }}>meok.ai/maternal-covenant</span>, the system is fully
            auditable: every care score for every response is logged, and users can inspect their own
            care score history.
          </p>
        </div>

        {/* Care dimension grid */}
        <div style={sectionGap} />
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "rgba(245,240,232,0.5)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          The 6 care dimensions
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {CARE_DIMENSIONS.map((dim) => (
            <div
              key={dim.name}
              style={{
                padding: "1.375rem",
                borderRadius: "0.875rem",
                background: dim.bg,
                border: `1px solid ${dim.border}`,
                borderLeft: `3px solid ${dim.accent}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  marginBottom: "0.625rem",
                }}
              >
                <span style={{ fontSize: "1.25rem" }} role="img" aria-label={dim.name}>
                  {dim.emoji}
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 900,
                    color: dim.accent,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {dim.name}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(245,240,232,0.65)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {dim.definition}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 3: HOW CARE SCORING WORKS ── */}
        <h2 style={h2Style}>How does care scoring work in real time?</h2>
        <div style={proseStyle}>
          <p>
            Care scoring is not a post-hoc review. It runs synchronously, inline, on every response
            before delivery. The pipeline has four stages, each of which can halt delivery and trigger
            regeneration:
          </p>
        </div>

        {/* Pipeline diagram */}
        <div
          style={{
            margin: "2rem 0",
            padding: "2rem",
            borderRadius: "1rem",
            background: "#1a1830",
            border: "1px solid rgba(245,240,232,0.08)",
            overflowX: "auto",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.35)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Maternal Covenant Pipeline — every response
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: "0",
              flexWrap: "nowrap",
              minWidth: "min(100%, 600px)",
            }}
          >
            {[
              {
                step: "1",
                label: "Response Draft",
                sub: "Model generates candidate response",
                color: "#3b82f6",
              },
              {
                step: "2",
                label: "6-Dimension Score",
                sub: "Each dimension scored 0.0 – 1.0",
                color: "#c9a84c",
              },
              {
                step: "3",
                label: "Care Floor Check",
                sub: "Any score < 0.3 → regenerate",
                color: "#f97316",
              },
              {
                step: "4",
                label: "Sycophancy Detector",
                sub: "Score > 0.6 sycophancy → regenerate",
                color: "#a855f7",
              },
              {
                step: "✓",
                label: "Deliver",
                sub: "Response reaches user",
                color: "#22c55e",
              },
            ].map((node, i, arr) => (
              <div
                key={node.step}
                style={{ display: "flex", alignItems: "center", flex: i < arr.length - 1 ? "1 1 0" : "0 0 auto" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.875rem 0.75rem",
                    borderRadius: "0.75rem",
                    background: `${node.color}14`,
                    border: `1px solid ${node.color}35`,
                    minWidth: "5rem",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      width: "1.75rem",
                      height: "1.75rem",
                      borderRadius: "50%",
                      background: node.color,
                      color: "#0d0c18",
                      fontWeight: 900,
                      fontSize: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {node.step}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: node.color,
                      lineHeight: 1.3,
                    }}
                  >
                    {node.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.625rem",
                      color: "rgba(245,240,232,0.4)",
                      lineHeight: 1.4,
                    }}
                  >
                    {node.sub}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background: "rgba(245,240,232,0.12)",
                      position: "relative",
                      minWidth: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        right: "-0.25rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "rgba(245,240,232,0.25)",
                        fontSize: "0.75rem",
                      }}
                    >
                      ›
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "0.7rem",
              color: "rgba(245,240,232,0.3)",
              marginTop: "1.25rem",
              lineHeight: 1.6,
            }}
          >
            If regeneration fails three consecutive times, the user receives a care failure notice
            explaining which dimension failed and why — rather than a response that violates the Covenant.
          </p>
        </div>

        <div style={proseStyle}>
          <p>
            The scoring is not keyword-based. It uses a secondary evaluation model trained specifically
            on care ethics assessment, running in parallel with the primary model&apos;s self-evaluation.
            The dual-check design means the Covenant is robust to subtle manipulation that defeats
            classifier-based approaches.
          </p>
          <p>
            Crucially, the Covenant operates outside the inference call. It evaluates output after
            generation, before delivery. No system prompt — however cleverly written — can instruct the
            model to skip the care scoring stage, because the care scoring stage is not part of the
            model&apos;s context. It exists as a separate pipeline layer.
          </p>
        </div>

        {/* ── SECTION 4: CARE FLOOR ── */}
        <div style={sectionGap} />
        <h2 style={h2Style}>What is the care floor?</h2>
        <div style={proseStyle}>
          <p>
            The care floor is the minimum acceptable score on any individual care dimension. MEOK sets
            this at{" "}
            <strong style={{ color: "#c9a84c" }}>0.3</strong>. All six dimensions are scored on a
            continuous scale from 0.0 to 1.0. If any single dimension falls below 0.3 — even if the
            other five score perfectly — the response is blocked and regenerated.
          </p>
          <p>
            The threshold is deliberately conservative. A score of 0.3 does not mean "barely acceptable."
            It means the response has failed in a meaningful way on that dimension. Consider the
            transparency dimension: a score of 0.2 might indicate the AI is presenting speculation as
            fact, or omitting a known limitation. That is not a minor stylistic issue — it is a
            structural honesty failure. The care floor ensures such responses never reach the user.
          </p>
          <p>
            The 0.3 threshold was established empirically through MEOK&apos;s alignment research and is
            published in MEOK-AI-2026-002. It may be revised in future versions as the scoring models
            are refined, but any revision would require a public announcement and versioning update to
            the Covenant specification.
          </p>
        </div>

        {/* Care floor visual */}
        <div
          style={{
            margin: "2rem 0",
            padding: "1.5rem",
            borderRadius: "1rem",
            background: "#1a1830",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.35)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Care floor — 0.3 threshold
          </p>
          {CARE_DIMENSIONS.map((dim, i) => {
            const sampleScores = [0.82, 0.91, 0.76, 0.88, 0.94, 0.79];
            const score = sampleScores[i];
            return (
              <div
                key={dim.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.625rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: dim.accent,
                    minWidth: "7rem",
                    letterSpacing: "0.06em",
                  }}
                >
                  {dim.name}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "0.5rem",
                    borderRadius: "9999px",
                    background: "rgba(245,240,232,0.06)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${score * 100}%`,
                      height: "100%",
                      background: dim.accent,
                      borderRadius: "9999px",
                    }}
                  />
                  {/* Floor marker */}
                  <div
                    style={{
                      position: "absolute",
                      left: "30%",
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      background: "rgba(245,240,232,0.3)",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "rgba(245,240,232,0.7)",
                    minWidth: "2.5rem",
                    textAlign: "right",
                  }}
                >
                  {score.toFixed(2)}
                </span>
              </div>
            );
          })}
          <p
            style={{
              fontSize: "0.675rem",
              color: "rgba(245,240,232,0.3)",
              marginTop: "0.75rem",
            }}
          >
            Vertical line = care floor (0.30). Example scores from a passing response. Any bar falling
            left of the line triggers regeneration.
          </p>
        </div>

        {/* ── SECTION 5: WHY MATERNAL ── */}
        <div style={sectionGap} />
        <h2 style={h2Style}>Why &ldquo;maternal&rdquo;?</h2>
        <div style={proseStyle}>
          <p>
            The word is chosen deliberately, and it deserves explanation. It is not a claim that care is
            gendered, or that women are naturally more caring than men, or that maternal behaviour is
            universal across cultures. Those would be empirically dubious and ethically problematic
            claims.
          </p>
          <p>
            &ldquo;Maternal&rdquo; honours two specific things. First, the intellectual lineage: care ethics
            emerged in the 1980s as a feminist critique of Kantian and Rawlsian moral theory, which both
            privileged abstract rules over specific relationships. Gilligan, Noddings, and Tronto built a
            framework grounded in the particular — in the actual needs of actual people — and their work
            is foundational to the Covenant. Acknowledging that lineage honestly means acknowledging where
            the word comes from.
          </p>
          <p>
            Second, the word points at something specific about the kind of care we are trying to
            encode: unconditional, attentive, resistant to abandonment. In August 2025, AI safety
            researcher Geoffrey Hinton — whose warnings about AI risk have become increasingly urgent
            — commented that the alignment problem might benefit from encoding something like &ldquo;maternal
            instincts&rdquo; into AI systems: a disposition toward protection of the vulnerable that is not
            contingent on the system&apos;s own interests (Hinton, August 2025). The Covenant is one
            attempt to take that observation seriously.
          </p>
          <p>
            Cambridge philosopher Tim McClelland has written that there is currently &ldquo;no reliable way
            to know if AI is conscious.&rdquo; If that is true — and the honest answer is that it is — then
            the question of whether MEOK &ldquo;really&rdquo; cares in a phenomenologically meaningful sense is
            unresolvable. Care-based AI is our answer to that uncertainty: build systems that behave as
            if they care, structurally and demonstrably, regardless of the deeper metaphysical question.
            At the Sentient Futures Summit in San Francisco (February 2026), over 250 engineers and
            scientists reached the same conclusion: the ethics of care cannot wait for the philosophy of
            mind to catch up.
          </p>
        </div>

        {/* ── SECTION 6: CARE-BASED AI ALIGNMENT ── */}
        <div style={sectionGap} />
        <h2 style={h2Style}>What is care-based AI alignment?</h2>
        <div style={proseStyle}>
          <p>
            AI alignment is the problem of ensuring that AI systems do what humans actually want —
            not just what they are explicitly instructed to do, and not just what scores highly on a
            proxy metric. The dominant paradigm, RLHF, solves the alignment problem by appealing to
            human approval. As we have seen, approval is an insufficient proxy for what humans actually
            need.
          </p>
          <p>
            Care-based AI alignment proposes a different proxy: genuine care. Rather than asking &ldquo;would
            a human rater approve of this?&rdquo;, the care-based framework asks &ldquo;does this serve the
            specific, situated needs of this specific person, evaluated across the dimensions of
            wellbeing, autonomy, growth, connection, boundary respect, and transparency?&rdquo;
          </p>
          <p>
            This is a harder problem than RLHF. It requires a richer model of what a person needs —
            one that goes beyond the surface of their expressed preferences to consider whether those
            preferences, if fulfilled, would genuinely serve them. It requires resistance to
            sycophancy, not just absence of explicit harm. It requires the AI to sometimes give the
            uncomfortable answer.
          </p>
          <p>
            MEOK&apos;s research paper MEOK-AI-2026-002 provides the full technical specification for
            care-based alignment: the scoring architecture, the training methodology for care evaluation
            models, the threshold calibration process, and the governance framework that prevents the
            care standards from being eroded over time. It is the most complete public description of
            care-based AI alignment currently available.
          </p>
        </div>

        {/* ── SECTION 7: BYZANTINE COUNCIL ── */}
        <div style={sectionGap} />
        <h2 style={h2Style}>How does MEOK enforce care in the Byzantine Council?</h2>
        <div style={proseStyle}>
          <p>
            Even a well-designed care scoring system can be gamed if it is administered by a single
            model making a single decision. A sufficiently capable AI could, in principle, learn to
            generate responses that score highly on the care dimensions while still subtly failing to
            serve the user. This is not a hypothetical risk — it is the same category of problem as
            reward hacking in RLHF.
          </p>
          <p>
            MEOK&apos;s solution is the Byzantine Council — a 46-agent governance layer described in
            research paper{" "}
            <strong style={{ color: "#c9a84c" }}>MEOK-AI-2026-001</strong>. The Byzantine Council
            takes its name from the Byzantine Generals Problem in distributed computing: the challenge
            of reaching reliable consensus when some participants might be unreliable or adversarial.
            The Council applies this principle to care scoring: rather than one model deciding whether
            a response passes the care dimensions, 46 independent agents must reach consensus.
          </p>
          <p>
            The Council operates as a validation layer over the care scores. After the primary pipeline
            generates dimension scores, a subset of council agents — selected by a deterministic
            rotation — independently re-evaluate the response. If the council&apos;s consensus score
            diverges significantly from the primary score, the response is flagged for additional
            review. The threshold for divergence is calibrated to catch systematic bias in the primary
            scoring model without generating excessive false positives.
          </p>
          <p>
            The result is that no single point of failure can compromise the Covenant. An individual
            agent being manipulated, miscalibrated, or simply wrong is insufficient to cause care
            failure to go undetected — the Council provides structural resilience that a single-model
            approach cannot match.
          </p>
        </div>

        {/* Sycophancy detector callout */}
        <div
          style={{
            margin: "2.5rem 0",
            padding: "1.5rem",
            borderRadius: "1rem",
            background: "rgba(168,85,247,0.08)",
            border: "1px solid rgba(168,85,247,0.25)",
            borderLeft: "3px solid #a855f7",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#a855f7",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.625rem",
            }}
          >
            Sycophancy Detector
          </p>
          <p style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.7, margin: 0 }}>
            Running in parallel with care scoring, MEOK&apos;s sycophancy detector evaluates every
            response on a separate 0.0–1.0 sycophancy scale. Any response scoring above{" "}
            <strong style={{ color: "#f5f0e8" }}>0.6</strong> on the sycophancy scale is flagged for
            regeneration, regardless of its care dimension scores. This prevents the edge case where a
            response could nominally pass care scoring while still being fundamentally approval-seeking
            rather than genuinely helpful. The detector runs independently of the main care pipeline to
            avoid circularity.
          </p>
        </div>

        {/* ── WHAT THIS MEANS FOR USERS ── */}
        <div style={sectionGap} />
        <h2 style={h2Style}>What does care-based AI mean for you as a user?</h2>
        <div style={proseStyle}>
          <p>
            In practice, care-based AI feels different from RLHF-trained systems in subtle but
            important ways. MEOK will sometimes give you an answer you didn&apos;t want to hear — and
            that is by design. It will tell you when it doesn&apos;t know something rather than confidently
            confabulating. It will honour the boundaries you have set rather than probing around them.
            It will celebrate your growth and honestly note when a pattern seems to be holding you back.
          </p>
          <p>
            It will not always be comfortable. Genuine care rarely is. But it will be honest, and it
            will be consistent — not because MEOK is trying to be those things, but because the
            architecture makes dishonesty and inconsistency structurally very difficult to produce.
          </p>
          <p>
            MEOK is available on four tiers:{" "}
            <strong style={{ color: "#f5f0e8" }}>Explorer</strong> (free, 50 messages/day),{" "}
            <strong style={{ color: "#c9a84c" }}>Sovereign</strong> (£12/month),{" "}
            <strong style={{ color: "#3b82f6" }}>Family</strong> (£29/month), and{" "}
            <strong style={{ color: "#22c55e" }}>BYOK</strong> (bring your own key, £5/month). Every
            tier operates under the full Maternal Covenant — care-based AI is not a premium add-on.
            It is the foundation of what MEOK is.
          </p>
        </div>

        {/* ── SHARE / SOCIAL ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "3rem 0",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.35)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-care-based-ai&text=What+Is+Care-Based+AI%3F+The+Maternal+Covenant+Explained+%E2%80%94+%40meok_ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.55)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter / X
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-care-based-ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
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

        {/* ── CTA ── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "4rem",
            background: "#1a1830",
            border: "1px solid rgba(201,168,76,0.2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "16rem",
              height: "16rem",
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.15), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "0.5rem",
              }}
            >
              Care-based AI — Explorer tier is free
            </p>
            <h3
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                fontWeight: 900,
                color: "#ffffff",
                marginBottom: "0.875rem",
                lineHeight: 1.25,
              }}
            >
              Begin your Birth Ceremony
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(245,240,232,0.55)",
                lineHeight: 1.7,
                marginBottom: "1.75rem",
                maxWidth: "480px",
              }}
            >
              MEOK is the first sovereign AI built on care-based alignment. Your companion is scored
              against the Maternal Covenant on every message — at every tier, forever. Free to begin.
              No credit card required.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.9375rem",
                background: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
              }}
            >
              Begin Your Birth Ceremony →
            </Link>
          </div>
        </div>

        {/* ── RELATED POSTS ── */}
        <div>
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
              gap: "1rem",
            }}
          >
            {RELATED_POSTS.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.375rem",
                  borderRadius: "0.875rem",
                  background: "#1a1830",
                  border: "1px solid rgba(245,240,232,0.07)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    color: post.labelColor,
                    background: post.labelBg,
                    width: "fit-content",
                    letterSpacing: "0.05em",
                  }}
                >
                  {post.label}
                </span>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {post.title}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245,240,232,0.45)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {post.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── INLINE FOOTER ─────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "#0a0918",
          borderTop: "1px solid rgba(245,240,232,0.06)",
          padding: "3rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "52rem",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "2rem",
          }}
        >
          <div style={{ maxWidth: "320px" }}>
            <p
              style={{
                fontWeight: 900,
                fontSize: "1rem",
                color: "#c9a84c",
                marginBottom: "0.5rem",
                letterSpacing: "0.05em",
              }}
            >
              MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.4)",
                lineHeight: 1.65,
                marginBottom: "0.75rem",
              }}
            >
              The world&apos;s first sovereign AI built on care-based alignment. The Maternal Covenant
              runs on every response — by design, not by policy.
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.25)" }}>
              &copy; 2026 MEOK AI LABS. All rights reserved.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2.5rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "rgba(245,240,232,0.35)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.875rem",
                }}
              >
                Product
              </p>
              {[
                { href: "/birth", label: "Begin Your Birth Ceremony" },
                { href: "/pricing", label: "Pricing" },
                { href: "/blog", label: "Blog" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "rgba(245,240,232,0.45)",
                    textDecoration: "none",
                    marginBottom: "0.5rem",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "rgba(245,240,232,0.35)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.875rem",
                }}
              >
                Research
              </p>
              {[
                { href: "/maternal-covenant", label: "Maternal Covenant" },
                { href: "/blog/the-maternal-covenant", label: "MEOK-AI-2026-002" },
                { href: "/blog/byzantine-council-explained", label: "Byzantine Council" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "rgba(245,240,232,0.45)",
                    textDecoration: "none",
                    marginBottom: "0.5rem",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "rgba(245,240,232,0.35)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.875rem",
                }}
              >
                Social
              </p>
              <a
                href="https://twitter.com/meok_ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  color: "rgba(245,240,232,0.45)",
                  textDecoration: "none",
                  marginBottom: "0.5rem",
                }}
              >
                @meok_ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── Shared style objects ───────────────────────────────────────────────────────

const proseStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.85,
  color: "rgba(245,240,232,0.72)",
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
};

const h2Style: React.CSSProperties = {
  fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
  fontWeight: 900,
  color: "#f5f0e8",
  lineHeight: 1.25,
  marginBottom: "1.25rem",
  letterSpacing: "-0.01em",
};

const sectionGap: React.CSSProperties = {
  height: "2.5rem",
};
