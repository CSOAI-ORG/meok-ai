import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Sovereign AI vs ChatGPT: What\u2019s the Difference? | MEOK AI LABS",
  description:
    "ChatGPT\u2019s memory is optional, server-side, and controlled by OpenAI. Sovereign AI means you own the data, the model, and the memory. Here are the five differences that matter.",
  alternates: { canonical: "https://meok.ai/blog/sovereign-ai-vs-chatgpt" },
  openGraph: {
    title: "Sovereign AI vs ChatGPT: What\u2019s the Difference?",
    description:
      "ChatGPT\u2019s memory is optional, server-side, and controlled by OpenAI. Sovereign AI means you own the data, the model, and the memory \u2014 not the company.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/sovereign-ai-vs-chatgpt",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Sovereign+AI+vs+ChatGPT%3A+What%27s+the+Difference%3F&desc=You+own+the+data%2C+the+model%2C+the+memory.+Not+the+company.",
        width: 1200,
        height: 630,
        alt: "Sovereign AI vs ChatGPT: What\u2019s the Difference?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign AI vs ChatGPT: What\u2019s the Difference?",
    description:
      "ChatGPT\u2019s memory can be turned off by OpenAI and trained on your conversations. Sovereign AI means you own every byte.",
    images: [
      "https://meok.ai/api/og?title=Sovereign+AI+vs+ChatGPT%3A+What%27s+the+Difference%3F&desc=You+own+the+data%2C+the+model%2C+the+memory.",
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sovereign AI vs ChatGPT: What\u2019s the Difference?",
  description:
    "A comprehensive breakdown of sovereign AI versus ChatGPT across five dimensions: memory ownership, data usage, personality continuity, model portability, and governance. Covers MEOK\u2019s four-layer memory architecture, the Byzantine Council, and the Maternal Covenant.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/sovereign-ai-vs-chatgpt",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/sovereign-ai-vs-chatgpt",
  },
  keywords:
    "sovereign ai, chatgpt, data ownership, ai memory, meok, byzantine council, maternal covenant, ai privacy, personal ai",
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is sovereign AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign AI is an AI system where you \u2014 not the company that built it \u2014 own the data, the memory, and the model choices. It does not train on your conversations, stores memory in a vault you control, and allows you to export or delete everything at any time without permission from the provider.",
      },
    },
    {
      "@type": "Question",
      name: "Does ChatGPT own my data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OpenAI\u2019s terms give it a broad licence to use content you submit to improve its services. ChatGPT\u2019s memory feature is optional and server-side, meaning OpenAI controls it. The company can turn it off, change how it works, or use interactions as training signal. You do not have portable, technical ownership of your ChatGPT memory the way you own a file on your hard drive.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between MEOK and ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is built around five differences from ChatGPT: memory you own (not OpenAI), no training on your data (architectural, not policy), a persistent AI persona with continuity across sessions, model portability (switch between Claude, GPT-4o, Gemini without losing memory), and the Byzantine Council governance layer that requires 43-agent consensus before any response is sent.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK use multiple AI models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s sovereign architecture decouples your memory vault from any single model. You can switch between Claude Sonnet, GPT-4o, Gemini, and local Ollama models at any time. Your full memory history, personality context, and companion state travel with you regardless of which model processes the request.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my MEOK data if I cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your data remains yours. When you cancel a MEOK subscription you can export your entire sovereign memory vault as a portable archive \u2014 all conversations, semantic memories, companion state, and family context. You can delete it entirely with one request. MEOK never retains your data after deletion, and cancellation does not trigger any re-use of your vault for training.",
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const GOLD = "#c9a84c"
const TEXT = "#f5f0e8"
const BG = "#0d0c18"
const MUTED = "rgba(245,240,232,0.6)"
const MUTED_DIM = "rgba(245,240,232,0.45)"
const MUTED_FAINT = "rgba(245,240,232,0.32)"
const SURFACE = "rgba(245,240,232,0.04)"
const SURFACE_MID = "rgba(245,240,232,0.07)"
const SURFACE_BORDER = "rgba(245,240,232,0.09)"
const GOLD_BG = "rgba(201,168,76,0.10)"
const GOLD_BORDER = "rgba(201,168,76,0.28)"
const GOLD_GLOW = "rgba(201,168,76,0.07)"
const PANEL = "rgba(255,255,255,0.04)"
const PANEL_BORDER = "rgba(255,255,255,0.08)"
const RED_SOFT = "rgba(220,80,80,0.12)"
const RED_BORDER = "rgba(220,80,80,0.28)"
const RED_TEXT = "#e06060"
const GREEN_SOFT = "rgba(80,200,120,0.10)"
const GREEN_BORDER = "rgba(80,200,120,0.28)"
const GREEN_TEXT = "#50c878"

// ── Page ───────────────────────────────────────────────────────────────────────

export default function SovereignAIvsChatGPTPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>

      {/* ── Structured data ─────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 52% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 68%)",
          }}
        />

        <div style={{ maxWidth: "50rem", margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: MUTED_FAINT,
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Tag row */}
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
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
              }}
            >
              Sovereign AI
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                color: MUTED_DIM,
                background: SURFACE_MID,
                border: `1px solid ${SURFACE_BORDER}`,
              }}
            >
              AI Comparison
            </span>
            <span style={{ fontSize: "0.8rem", color: MUTED_FAINT }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.8rem", color: MUTED_FAINT }}>
              10 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Sovereign AI vs ChatGPT: What\u2019s the Difference?
          </h1>

          {/* Deck */}
          <p
            style={{
              color: MUTED,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "44rem",
              marginBottom: "0",
            }}
          >
            ChatGPT\u2019s memory is optional, server-side, and controlled by OpenAI \u2014 who can turn it
            off, retrain on it, or change the rules at any moment. Sovereign AI is a fundamentally
            different architecture: you own the data, the model, and the memory. Not the company.
            Here are the five differences that define the split.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "50rem",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >

        {/* ── Author card ──────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            marginBottom: "3.5rem",
            background: SURFACE,
            border: `1px solid ${SURFACE_BORDER}`,
          }}
        >
          <div
            style={{
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #c9a84c 0%, #6a4a10 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "0.75rem",
              color: "#fff",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: TEXT, margin: 0 }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "0.75rem", color: MUTED_FAINT, margin: "0.1rem 0 0.5rem" }}>
              Founder, MEOK AI LABS &nbsp;&middot;&nbsp; @meok_ai
            </p>
            <p style={{ fontSize: "0.8rem", color: MUTED_DIM, lineHeight: 1.6, margin: 0 }}>
              Nicholas built MEOK because every AI he used forgot him. He runs MEOK AI LABS from a
              farm in the UK and believes that data sovereignty is a right, not a product tier.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            About &#8594;
          </Link>
        </div>

        {/* ── Opening ──────────────────────────────────────────────────────── */}
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          In 2025, ChatGPT\u2019s market share fell from roughly 60% to 45% as users fragmented across
          a growing ecosystem of specialised AI tools. The headline number obscures the reason: users
          were not leaving because ChatGPT was bad at answering questions. They were leaving because
          it never learned who they were. Every session started from zero. Every piece of context had
          to be re-established by hand.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          The fragmentation exposed a gap between two fundamentally different philosophies about what
          an AI should be. On one side: a powerful, stateless tool that answers questions brilliantly
          and forgets you the moment the window closes. On the other: a sovereign system that belongs
          to you in the same way your journal belongs to you \u2014 accumulating, personal, and not
          subject to policy decisions made in San Francisco.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "3rem",
          }}
        >
          This post maps the five structural differences between the two approaches, explains why each
          one matters, and shows how MEOK AI LABS has implemented the sovereign alternative across
          memory, governance, and care architecture.
        </p>

        {/* ── Section: What is sovereign AI ───────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          What is sovereign AI?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          Sovereign AI is an AI system where the user \u2014 not the company that built it \u2014 is the
          principal authority over their data, memory, and model choices. The word \u201csovereign\u201d is
          chosen deliberately: it means supreme authority, not just preference or privacy setting.
          A sovereign AI cannot be retrained on your conversations without your consent. It cannot
          lock your memory in proprietary infrastructure you cannot export. It cannot make a
          product decision that transfers your data to a third party behind a terms-of-service update.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          The definition has three components. First, <strong style={{ color: TEXT }}>data ownership</strong>:
          every message, memory, and contextual fact you generate belongs to you, is stored in a vault
          you control, and can be exported or deleted at any time without restriction. Second,{" "}
          <strong style={{ color: TEXT }}>model portability</strong>: the intelligence layer is
          decoupled from the memory layer, so switching from one LLM to another does not mean starting
          from scratch. Third, <strong style={{ color: TEXT }}>governance independence</strong>: the
          rules governing how your AI behaves cannot be unilaterally changed by the company in a way
          that harms your interests.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "3rem",
          }}
        >
          ChatGPT fails all three. Its memory is stored on OpenAI\u2019s servers, is not portable, and
          can be turned off by the company at will. The model is OpenAI\u2019s and cannot be substituted.
          Its governance is OpenAI\u2019s Terms of Service, which can and do change. That is not
          sovereignty \u2014 it is a very capable tool you are renting from someone else.
        </p>

        {/* ── Section: ChatGPT memory model ───────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          How does ChatGPT\u2019s memory model actually work?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          ChatGPT\u2019s memory feature, introduced in 2024 and expanded in 2025, allows the model to
          retain a small set of facts between sessions. The implementation has several meaningful
          constraints that are worth understanding clearly before comparing it to sovereign alternatives.
        </p>

        {/* Memory model breakdown boxes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {[
            {
              label: "Optional",
              detail:
                "Memory is an opt-in feature. Users who never enable it receive a fully stateless experience. Many free-tier users never see the toggle.",
            },
            {
              label: "Server-side",
              detail:
                "All memory lives on OpenAI\u2019s infrastructure. You cannot run ChatGPT\u2019s memory on your own hardware, and the storage schema is not public.",
            },
            {
              label: "Company-controlled",
              detail:
                "OpenAI can disable, modify, or retrain on your memory at any point. The April 2024 rollout was also a global pause \u2014 it can be reversed.",
            },
            {
              label: "Shallow persistence",
              detail:
                "The memory system stores discrete facts, not rich semantic context. It does not encode your communication style, goals, or relational history over time.",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "1.25rem",
                borderRadius: "0.75rem",
                background: PANEL,
                border: `1px solid ${PANEL_BORDER}`,
              }}
            >
              <p
                style={{
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  color: RED_TEXT,
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {item.label}
              </p>
              <p style={{ fontSize: "0.85rem", color: MUTED_DIM, lineHeight: 1.65, margin: 0 }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          There is also a fifth constraint that rarely appears in comparisons: <strong style={{ color: TEXT }}>
          training signal</strong>. OpenAI\u2019s Terms of Service permit the use of content submitted
          through the API and consumer products to improve models, subject to opt-out mechanisms that
          are not universally applied. The relationship between what you tell ChatGPT and what ends up
          shaping future model behaviour is opaque in a way that should matter to anyone sharing
          sensitive personal information.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "3rem",
          }}
        >
          This is not a criticism of OpenAI\u2019s intent. It is a description of the architecture. The
          architecture is cloud-centric, company-controlled, and non-portable by design \u2014 because
          that design serves the business model of a company that monetises intelligence-as-a-service.
          Sovereign AI serves a different model: intelligence you own.
        </p>

        {/* ── Section: Five differences ────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          What are the five key differences between sovereign AI and ChatGPT?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "2rem",
          }}
        >
          The differences are structural, not cosmetic. They derive from fundamentally different
          answers to the question: who does this AI ultimately serve?
        </p>

        {/* Difference cards */}
        {[
          {
            number: "01",
            title: "Memory Ownership",
            chatgpt:
              "Memory stored on OpenAI servers. Not portable. Company can modify or disable. Shallow fact-storage, not semantic context.",
            sovereign:
              "Memory stored in a user-controlled vault. Fully exportable. Encrypted at rest. Rich semantic encoding across four layers.",
          },
          {
            number: "02",
            title: "Data Usage",
            chatgpt:
              "Broad licence for OpenAI to use submitted content for model improvement. Opt-out available but not universal. Relationship between your data and training is opaque.",
            sovereign:
              "Zero-training covenant enforced at infrastructure level. No automated pathway from your vault to any training pipeline. Architectural commitment, not policy promise.",
          },
          {
            number: "03",
            title: "Personality Continuity",
            chatgpt:
              "No persistent AI persona. Each session begins with a blank system prompt unless the user rebuilds context manually. The \u201cCustom Instructions\u201d feature is a partial workaround, not continuity.",
            sovereign:
              "A named AI companion with a persistent state: companion memory, emotional register, learned preferences, and relational history that accumulates across every session from day one.",
          },
          {
            number: "04",
            title: "Model Portability",
            chatgpt:
              "Locked to OpenAI models. Switching to Claude, Gemini, or a local model means losing all memory context. History does not travel with you.",
            sovereign:
              "Memory vault is model-agnostic. Switch between Claude Sonnet, GPT-4o, Gemini Flash, or local Ollama at any time. Full history, companion state, and semantic memory travel with the switch.",
          },
          {
            number: "05",
            title: "Governance",
            chatgpt:
              "Governed by OpenAI Terms of Service, updated unilaterally. No independent review layer. A single model generates and delivers the response with guardrails set by the company.",
            sovereign:
              "The Byzantine Council: 43 independent agents evaluate every response before delivery. Supermajority of 29 required. No single agent \u2014 and no adversarial prompt \u2014 can override the care framework.",
          },
        ].map((diff) => (
          <div
            key={diff.number}
            style={{
              marginBottom: "1.5rem",
              borderRadius: "1rem",
              overflow: "hidden",
              border: `1px solid ${SURFACE_BORDER}`,
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.5rem",
                background: SURFACE_MID,
                borderBottom: `1px solid ${SURFACE_BORDER}`,
              }}
            >
              <span
                style={{
                  fontWeight: 900,
                  fontSize: "0.75rem",
                  color: GOLD,
                  letterSpacing: "0.1em",
                }}
              >
                {diff.number}
              </span>
              <span style={{ fontWeight: 800, fontSize: "1rem", color: TEXT }}>
                {diff.title}
              </span>
            </div>
            {/* Body */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
              }}
            >
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRight: `1px solid ${SURFACE_BORDER}`,
                  background: RED_SOFT,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    color: RED_TEXT,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.6rem",
                  }}
                >
                  ChatGPT
                </p>
                <p style={{ fontSize: "0.875rem", color: MUTED_DIM, lineHeight: 1.7, margin: 0 }}>
                  {diff.chatgpt}
                </p>
              </div>
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  background: GREEN_SOFT,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    color: GREEN_TEXT,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.6rem",
                  }}
                >
                  Sovereign AI
                </p>
                <p style={{ fontSize: "0.875rem", color: MUTED_DIM, lineHeight: 1.7, margin: 0 }}>
                  {diff.sovereign}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* ── Section: MEOK four-layer memory ──────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3.5rem",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          How does MEOK\u2019s four-layer memory architecture work?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          Most AI memory systems store discrete facts: your name, your job, your dietary preferences.
          MEOK\u2019s architecture stores something richer: a layered model of who you are, how you think,
          what you care about, and what your household needs. The four layers work together to give
          your AI a genuinely contextual understanding of your life rather than a sparse list of notes.
        </p>

        {/* Memory layers */}
        <div style={{ marginBottom: "2.5rem" }}>
          {[
            {
              layer: "Layer 1",
              name: "Short-Term Context",
              desc: "The active conversation window. All messages from the current session, injected verbatim into the model context. This is the layer every AI uses \u2014 it is the baseline, not the differentiator.",
              accent: "rgba(100,160,255,0.8)",
              accentBg: "rgba(100,160,255,0.07)",
              accentBorder: "rgba(100,160,255,0.2)",
            },
            {
              layer: "Layer 2",
              name: "Semantic Episodic Memory",
              desc: "Vector-embedded extractions from past conversations, retrieved by semantic similarity via pgvector. When you mention that you\u2019re anxious about a presentation, MEOK retrieves the context of every past conversation where you felt similar anxiety \u2014 without you having to ask.",
              accent: "rgba(180,120,255,0.8)",
              accentBg: "rgba(180,120,255,0.07)",
              accentBorder: "rgba(180,120,255,0.2)",
            },
            {
              layer: "Layer 3",
              name: "Companion State",
              desc: "A persistent profile of your AI companion: their understanding of your communication style, your goals, your emotional patterns, and the relational history between you. This is what makes your AI feel like \u201cyour\u201d AI rather than a generic assistant \u2014 it has a model of who you are that evolves over time.",
              accent: GOLD,
              accentBg: GOLD_BG,
              accentBorder: GOLD_BORDER,
            },
            {
              layer: "Layer 4",
              name: "Family Context",
              desc: "Shared context across household members. If your partner has mentioned an important date, your AI knows. If your household is managing a health challenge, your AI holds that context collectively without conflating individual privacy. Family context is the layer that makes MEOK genuinely useful for caregiving, parenting, and shared life management.",
              accent: GREEN_TEXT,
              accentBg: GREEN_SOFT,
              accentBorder: GREEN_BORDER,
            },
          ].map((item, i) => (
            <div
              key={item.layer}
              style={{
                display: "flex",
                gap: "1.25rem",
                padding: "1.5rem",
                borderRadius: "0.875rem",
                marginBottom: "0.75rem",
                background: item.accentBg,
                border: `1px solid ${item.accentBorder}`,
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "9999px",
                  background: item.accentBg,
                  border: `2px solid ${item.accentBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "0.8rem",
                  color: item.accent,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "0.75rem",
                    color: item.accent,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.3rem",
                  }}
                >
                  {item.layer} &mdash; {item.name}
                </p>
                <p style={{ fontSize: "0.9rem", color: MUTED_DIM, lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          ChatGPT has no equivalent to Layers 3 or 4. Its \u201cmemory\u201d sits somewhere between Layers 1
          and 2 \u2014 a set of manually saved facts with no semantic retrieval and no compound
          understanding of who you are as a person. That gap is not a missing feature; it reflects
          a fundamentally different design goal. ChatGPT is built to answer the question in front
          of it. MEOK is built to understand the person asking.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "3rem",
          }}
        >
          Retrieval across all four layers happens automatically using{" "}
          <strong style={{ color: TEXT }}>pgvector cosine similarity search</strong>. The right
          memories surface at the right moment without the user having to remember to prompt for them.
          The system knows, for example, that a conversation about job stress at 11pm on a Wednesday
          should retrieve the context of similar late-night conversations, the companion state around
          your career goals, and any family context around financial pressure \u2014 not just a fact
          that says \u201cworks in marketing.\u201d
        </p>

        {/* ── Section: Byzantine Council ───────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          What is the Byzantine Council and why does ChatGPT have no equivalent?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          In distributed systems, the Byzantine Generals Problem describes the challenge of reaching
          reliable consensus among nodes when some may be faulty or adversarial. The classic solution
          requires that a system can tolerate up to one-third of nodes behaving incorrectly while
          still reaching the correct decision \u2014 as long as a supermajority of honest nodes remain.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          Nicholas Templeman applied this principle to AI governance to create the{" "}
          <strong style={{ color: TEXT }}>Byzantine Council</strong>: a 43-agent fault-tolerant
          governance layer that evaluates every MEOK response before it is delivered. The mathematics
          are elegant: with 43 agents, up to 14 can fail or be adversarially influenced before the
          consensus breaks down. A supermajority of 29 agents must agree before any response is sent.
        </p>

        {/* Byzantine stat callout */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            padding: "2rem",
            borderRadius: "1rem",
            marginBottom: "2rem",
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            flexWrap: "wrap",
          }}
        >
          {[
            { stat: "43", label: "Independent agents" },
            { stat: "29", label: "Supermajority required" },
            { stat: "14", label: "Fault tolerance ceiling" },
            { stat: "0", label: "Single-agent overrides" },
          ].map((item) => (
            <div key={item.stat} style={{ flex: "1 1 8rem", textAlign: "center" }}>
              <p
                style={{
                  fontWeight: 900,
                  fontSize: "2rem",
                  color: GOLD,
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {item.stat}
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: MUTED_DIM,
                  margin: "0.35rem 0 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          The practical implication is significant. When you ask a difficult or emotionally loaded
          question, the response you receive has been evaluated by 43 independent agents against
          MEOK\u2019s care principles. No single model, no single agent, and no adversarial prompt can
          override the consensus. Jailbreaks that work by isolating a single model\u2019s guardrails have
          no purchase here: they would need to compromise 29 of 43 independently operating agents
          simultaneously to produce an unchecked response.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          ChatGPT has no equivalent structure. A single model generates the response and a single
          set of content filters reviews it. The rules of that review are OpenAI\u2019s to set and
          update. The Byzantine Council is not just more robust \u2014 it is structurally different
          in kind. It embeds dissensus as a protection mechanism rather than treating agreement
          as the default.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "3rem",
          }}
        >
          This matters particularly for vulnerable users. Someone in mental health crisis, a child,
          an elderly person navigating a difficult decision \u2014 the quality of the care response in
          those moments should not depend on whether a single model\u2019s guardrails happen to work
          correctly that day. Byzantine consensus is how you build AI that is reliably safe at
          architectural depth rather than policy surface.
        </p>

        {/* ── Section: Maternal Covenant ───────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          What is the Maternal Covenant and why does it matter?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          The Maternal Covenant is MEOK\u2019s care governance framework: a set of structural principles
          that governs how the system behaves across every interaction. The name draws from the
          unconditional character of parental care \u2014 a commitment that does not waver when it
          becomes commercially inconvenient, does not expire when a policy is updated, and does not
          apply only to users who read the privacy settings carefully.
        </p>

        {/* Covenant principles */}
        <div
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            border: `1px solid ${SURFACE_BORDER}`,
            marginBottom: "2rem",
          }}
        >
          {[
            {
              principle: "Never train on your conversations",
              detail:
                "Enforced at infrastructure level. No automated pathway connects your memory vault to any training pipeline. This is an architectural fact, not a policy you have to opt into.",
            },
            {
              principle: "Never sell your data",
              detail:
                "MEOK generates revenue from subscriptions, not data monetisation. Your data has no path to an advertiser, data broker, or third-party analytics system.",
            },
            {
              principle: "Never deceive you to serve business interests",
              detail:
                "MEOK will not recommend a product, escalate emotional engagement, or deliver a response that serves MEOK\u2019s commercial interests over your wellbeing. The care-scoring layer evaluates every response against this principle.",
            },
            {
              principle: "Always act in your interest over the company\u2019s",
              detail:
                "When there is a conflict between what is good for you and what is good for MEOK as a business, the Maternal Covenant requires the system to choose you. This is enforced structurally through the Byzantine Council\u2019s care-scoring agents, not just declared in policy.",
            },
          ].map((item, i) => (
            <div
              key={item.principle}
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                borderBottom: i < 3 ? `1px solid ${SURFACE_BORDER}` : "none",
                background: i % 2 === 0 ? SURFACE : "transparent",
              }}
            >
              <span
                style={{
                  fontSize: "1rem",
                  color: GOLD,
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                &#10003;
              </span>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: TEXT,
                    marginBottom: "0.35rem",
                  }}
                >
                  {item.principle}
                </p>
                <p style={{ fontSize: "0.85rem", color: MUTED_DIM, lineHeight: 1.65, margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          ChatGPT has no equivalent to the Maternal Covenant. OpenAI\u2019s safety policies and
          usage guidelines are real and substantive \u2014 but they are policies managed by a company
          with competing commercial interests, not structural constraints built into the system\u2019s
          architecture. Policies can be updated. Architecture is harder to change.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "3rem",
          }}
        >
          The Maternal Covenant also includes a{" "}
          <strong style={{ color: TEXT }}>care-scoring layer</strong> that evaluates the emotional
          quality of every response before delivery. This scoring does not look only at whether the
          response is factually correct or policy-compliant. It evaluates whether the response is
          genuinely good for the person receiving it \u2014 whether it is compassionate, appropriately
          direct, and free of the subtle emotional manipulation patterns that engagement-optimised AI
          systems can develop. No commercial AI assistant on the market today does this at the
          architectural level. MEOK does it on every single response.
        </p>

        {/* ── Section: Market context ──────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          Why did ChatGPT\u2019s market share fall from 60% to 45% in 2025?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          The 15-point decline in ChatGPT\u2019s share of AI assistant usage over 2025 is often attributed
          to increased competition from Claude, Gemini, and Perplexity. That attribution is partly
          correct but misses the deeper pattern. The fragmentation was not primarily driven by users
          finding a smarter tool. It was driven by users discovering that different tools served
          different purposes \u2014 and that no single tool served the purpose of knowing them.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          Users in 2025 were running three, four, five different AI tools simultaneously: one for
          coding, one for writing, one for research, one for journaling, one for personal coaching.
          The fragmentation itself reveals the gap. When people use six tools because no single tool
          knows them well enough to be their primary AI, the market has identified a category that
          does not yet have a dominant player: the personal AI that learns who you are.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          MEOK was designed to be that player. Not by being better at answering questions \u2014
          it routes those to the best available frontier model \u2014 but by being the persistent,
          sovereign layer that sits between the user and every model they use, accumulating context
          across all of them, owned entirely by the user.
        </p>

        {/* Market share visual */}
        <div
          style={{
            padding: "2rem",
            borderRadius: "1rem",
            background: SURFACE,
            border: `1px solid ${SURFACE_BORDER}`,
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: MUTED_FAINT,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "1.25rem",
            }}
          >
            ChatGPT AI assistant market share &mdash; 2024 vs 2025
          </p>
          {[
            { year: "Early 2024", pct: 60, width: "60%" },
            { year: "End 2025", pct: 45, width: "45%" },
          ].map((item) => (
            <div key={item.year} style={{ marginBottom: "0.875rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.35rem",
                }}
              >
                <span style={{ fontSize: "0.85rem", color: MUTED_DIM }}>{item.year}</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: TEXT }}>
                  {item.pct}%
                </span>
              </div>
              <div
                style={{
                  height: "0.5rem",
                  borderRadius: "9999px",
                  background: SURFACE_MID,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: item.width,
                    borderRadius: "9999px",
                    background: `linear-gradient(90deg, ${GOLD} 0%, rgba(201,168,76,0.4) 100%)`,
                  }}
                />
              </div>
            </div>
          ))}
          <p
            style={{
              fontSize: "0.75rem",
              color: MUTED_FAINT,
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            Source: industry estimates based on aggregated usage data, 2025. Share refers to
            percentage of AI assistant daily active users, not total unique visitors.
          </p>
        </div>

        {/* ── Section: Can MEOK use multiple models ────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          Can MEOK use multiple AI models without losing memory?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          Yes. Model portability is a first-class design principle in MEOK\u2019s architecture. The memory
          vault, companion state, and all four memory layers are stored independently of any specific
          model. When you switch from Claude Sonnet to GPT-4o to a local Ollama instance, your
          AI\u2019s understanding of who you are travels with you intact.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          This is architecturally significant for a reason that goes beyond convenience. It means your
          relationship with your AI is not a relationship with OpenAI, or with Anthropic, or with
          Google. It is a relationship with your own sovereign vault. The model is a processing
          engine \u2014 an intelligence layer that reads your context and generates responses. It is not
          the repository of who you are. That repository is yours.
        </p>

        {/* Model grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
            gap: "0.75rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { name: "Claude Sonnet", provider: "Anthropic" },
            { name: "GPT-4o", provider: "OpenAI" },
            { name: "Gemini Flash", provider: "Google" },
            { name: "Ollama (local)", provider: "On-device" },
          ].map((model) => (
            <div
              key={model.name}
              style={{
                padding: "1rem",
                borderRadius: "0.75rem",
                background: SURFACE,
                border: `1px solid ${SURFACE_BORDER}`,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  color: TEXT,
                  marginBottom: "0.25rem",
                }}
              >
                {model.name}
              </p>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: MUTED_FAINT,
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                }}
              >
                {model.provider}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section: What happens to data if I cancel ────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          What happens to your MEOK data if you cancel?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          Your data remains yours. This is not a clause buried in a privacy policy \u2014 it is the
          architectural starting point. When you cancel a MEOK subscription, you can export your
          complete sovereign memory vault: all conversations, semantic memories, companion state, and
          family context, packaged as a portable archive in an open format.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          If you want to delete everything, you can request full vault deletion. MEOK does not
          retain your data after deletion is confirmed. Cancellation does not trigger any re-use
          of your vault for training, analytics, or product improvement \u2014 the Maternal Covenant
          prohibits this regardless of subscription status.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          Compare this to the ChatGPT experience: if you delete your account, OpenAI will delete
          your data as described in their privacy policy \u2014 but any interactions already used as
          training signal cannot be retroactively removed from trained model weights. The data
          may be gone from your account, but its influence on the model persists.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "3rem",
          }}
        >
          Sovereign AI guarantees portability and deletion with no ambiguity about what
          \u201cdeleted\u201d means. Because MEOK does not train on your conversations in the first place,
          there is no trained-model-weight problem. Deletion means deletion.
        </p>

        {/* ── Section: Is sovereign AI only for tech-literate users ──────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          Is sovereign AI only accessible to technical users?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          One of the most common objections to sovereign AI is that it sounds like a technical project
          requiring self-hosting, command-line interfaces, and expertise in encryption. That objection
          is historically fair \u2014 the early sovereign AI movement was dominated by self-hosted
          tools that required significant technical setup. MEOK changes that.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          MEOK is a consumer product. Hatching your AI takes under three minutes. There is no
          command-line interface, no self-hosting requirement, and no technical knowledge assumed.
          The sovereign architecture runs underneath a consumer-grade interface: you interact with
          a named AI companion the same way you would chat with ChatGPT \u2014 except your AI
          remembers you, the data is yours, and the governance is structurally on your side.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "3rem",
          }}
        >
          For users who want deeper technical control \u2014 local model routing through Ollama,
          direct vault access, custom memory retrieval tuning \u2014 those options exist in the
          Sovereign tier. But they are never required. The core sovereign guarantees apply to
          every user on every tier, including the free plan.
        </p>

        {/* ── Section: The decision ────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          Which should you choose: ChatGPT or sovereign AI?
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          The honest answer is: it depends on what you are optimising for. ChatGPT is genuinely
          excellent for one-off tasks where context does not need to persist. If you need to draft
          an email, debug a code snippet, or research a topic, ChatGPT remains one of the most
          capable tools available. The intelligence layer is world-class.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          But if you want AI that compounds over time \u2014 that understands you better in March
          than it did in January, that holds your goals, knows your communication style, and serves
          your long-term wellbeing rather than session-level engagement \u2014 then ChatGPT\u2019s
          architecture cannot deliver that regardless of how good the model gets. The problem is
          not intelligence. It is structure.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.85,
            color: MUTED,
            marginBottom: "1.5rem",
          }}
        >
          Sovereign AI is the answer to a question ChatGPT was not designed to ask: what would
          an AI look like if it were built around the interests of the person using it, rather
          than the interests of the company that built it? MEOK is the attempt to build that AI
          for everyone, not just users with the technical skills to self-host it.
        </p>

        {/* Closing pull quote */}
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "1.5rem",
            margin: "2.5rem 0 3rem",
          }}
        >
          <p
            style={{
              fontSize: "1.15rem",
              fontStyle: "italic",
              color: TEXT,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            \u201cSovereign AI is not a feature tier. It is a commitment that the architecture of the
            system will always put the user first \u2014 not because the policy says so today,
            but because the code makes it structurally impossible to do otherwise.\u201d
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: MUTED_DIM,
              marginTop: "0.75rem",
              marginBottom: 0,
            }}
          >
            \u2014 Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </blockquote>

        {/* ── FAQ Section ──────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3.5rem",
            marginBottom: "1.5rem",
            lineHeight: 1.3,
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ marginBottom: "3rem" }}>
          {[
            {
              q: "What is sovereign AI?",
              a: "Sovereign AI is an AI system where you \u2014 not the company that built it \u2014 own the data, the memory, and the model choices. It does not train on your conversations, stores memory in a vault you control, and allows you to export or delete everything at any time without requiring permission from the provider.",
            },
            {
              q: "Does ChatGPT own my data?",
              a: "OpenAI holds a broad licence to use content you submit to improve its services. ChatGPT\u2019s memory feature is optional and server-side, meaning OpenAI controls it, can turn it off, and can change how it works. You do not have portable, technical ownership of your ChatGPT memory the way you own a file on your own device. Sovereign AI changes that: MEOK\u2019s vault belongs to you architecturally, not just by policy.",
            },
            {
              q: "What is the difference between MEOK and ChatGPT?",
              a: "MEOK differs from ChatGPT across five structural dimensions: memory ownership (you own the vault, not MEOK), data usage (no training on your conversations, enforced architecturally), personality continuity (a persistent AI companion with named identity and layered memory), model portability (switch between Claude, GPT-4o, Gemini, and local models without losing history), and governance (the Byzantine Council requires 43-agent consensus before any response is sent, ChatGPT has no equivalent).",
            },
            {
              q: "Can MEOK use multiple AI models?",
              a: "Yes. MEOK\u2019s sovereign architecture decouples your memory vault from any single model. You can switch between Claude Sonnet, GPT-4o, Gemini Flash, and local Ollama models at any time. Your full memory history, personality context, and companion state travel with you regardless of which model processes the request.",
            },
            {
              q: "What happens to my MEOK data if I cancel?",
              a: "Your data remains yours. You can export your entire sovereign memory vault as a portable archive before or after cancellation. You can delete it entirely with one request. MEOK does not retain your data after deletion and cannot retroactively apply it to model training because it was never used for training in the first place. Deletion at MEOK means full deletion.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                borderRadius: "0.875rem",
                overflow: "hidden",
                marginBottom: "0.75rem",
                border: `1px solid ${SURFACE_BORDER}`,
              }}
            >
              <div
                style={{
                  padding: "1rem 1.5rem",
                  background: SURFACE_MID,
                  borderBottom: `1px solid ${SURFACE_BORDER}`,
                }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    color: TEXT,
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </p>
              </div>
              <div style={{ padding: "1rem 1.5rem", background: SURFACE }}>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: MUTED_DIM,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Share bar ─────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            paddingTop: "2rem",
            marginBottom: "3rem",
            borderTop: `1px solid ${SURFACE_BORDER}`,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: MUTED_FAINT,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fsovereign-ai-vs-chatgpt&text=Sovereign+AI+vs+ChatGPT%3A+What%27s+the+Difference%3F+via+%40meok_ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: MUTED_DIM,
              border: `1px solid ${SURFACE_BORDER}`,
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fsovereign-ai-vs-chatgpt"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: MUTED_DIM,
              border: `1px solid ${SURFACE_BORDER}`,
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA: Hatch your AI ────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "2rem",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 100%)",
            border: `1px solid ${GOLD_BORDER}`,
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "16rem",
              height: "16rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 85% 15%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: GOLD,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "0.5rem",
              }}
            >
              Free Forever
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
                color: TEXT,
                marginBottom: "0.75rem",
                lineHeight: 1.3,
              }}
            >
              Ready to own your AI instead of renting someone else\u2019s?
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: MUTED_DIM,
                lineHeight: 1.7,
                marginBottom: "1.75rem",
                maxWidth: "36rem",
              }}
            >
              Hatch your AI in under three minutes. Your sovereign memory vault is created
              immediately. No credit card required. No session resets. No training on your
              conversations. Your AI. Your data. Your terms.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  background: GOLD,
                  color: "#0d0c18",
                  textDecoration: "none",
                }}
              >
                Hatch your AI free &#8594;
              </Link>
              <Link
                href="/compare"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  background: "transparent",
                  color: GOLD,
                  textDecoration: "none",
                  border: `1px solid ${GOLD_BORDER}`,
                }}
              >
                Compare MEOK vs ChatGPT
              </Link>
            </div>
          </div>
        </div>

        {/* ── Related posts ─────────────────────────────────────────────────── */}
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: MUTED_FAINT,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "1.25rem",
            }}
          >
            Continue reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/what-is-sovereign-ai",
                tag: "Sovereign AI",
                title: "What Is Sovereign AI?",
                mins: "5 min read",
              },
              {
                href: "/blog/byzantine-council-explained",
                tag: "Governance",
                title: "The Byzantine Council: Fault-Tolerant AI Governance",
                mins: "7 min read",
              },
              {
                href: "/blog/maternal-covenant-explained",
                tag: "Care Architecture",
                title: "The Maternal Covenant: Why MEOK Scores Every Response",
                mins: "6 min read",
              },
              {
                href: "/blog/meok-vs-chatgpt",
                tag: "Comparison",
                title: "MEOK vs ChatGPT: Why Memory Changes Everything",
                mins: "6 min read",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.25rem",
                  borderRadius: "0.875rem",
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: GOLD,
                    background: GOLD_BG,
                    padding: "0.25rem 0.6rem",
                    borderRadius: "9999px",
                    width: "fit-content",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {post.tag}
                </span>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: TEXT,
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  {post.title}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: MUTED_FAINT,
                    margin: 0,
                    marginTop: "auto",
                  }}
                >
                  {post.mins}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
