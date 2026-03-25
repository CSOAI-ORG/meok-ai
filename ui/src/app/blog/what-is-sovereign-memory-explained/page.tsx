import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Sovereign Memory? MEOK's Four-Layer AI Memory Architecture Explained | MEOK AI LABS",
  description:
    "The definitive technical reference for sovereign AI memory. Learn how MEOK's four-layer Sovereign Memory architecture — short-term context, pgvector episodic memory, companion state, and family context — keeps your AI companion knowing you across every session, device, and model switch. You own every byte.",
  keywords: [
    "sovereign memory",
    "AI memory architecture",
    "four-layer AI memory",
    "pgvector embeddings",
    "persistent AI memory",
    "AI companion memory",
    "ChatGPT memory vs MEOK",
    "AI memory portability",
    "MEOK AI LABS",
    "context compression",
    "head plus tail pattern",
    "companion state",
    "episodic memory AI",
    "semantic memory AI",
    "GDPR AI memory",
    "AI memory export",
    "memory encryption",
    "cross-session AI memory",
    "model agnostic memory",
    "Nicholas Templeman",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  alternates: {
    canonical: "https://meok.ai/blog/what-is-sovereign-memory-explained",
  },
  openGraph: {
    title: "What Is Sovereign Memory? MEOK's Four-Layer AI Memory Architecture Explained",
    description:
      "ChatGPT forgets you. Claude resets. Replika wiped 500,000 memories. MEOK's four-layer Sovereign Memory architecture means your AI companion truly knows you — across sessions, devices, and model switches. You own it. You export it. You control it.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-sovereign-memory-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+Is+Sovereign+Memory%3F&desc=MEOK%27s+four-layer+AI+memory+architecture+explained.+You+own+every+byte.",
        width: 1200,
        height: 630,
        alt: "MEOK's Four-Layer Sovereign Memory Architecture Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Sovereign Memory? MEOK's Four-Layer AI Memory Architecture Explained",
    description:
      "ChatGPT forgets. Claude resets. Replika wiped 500k memories overnight. MEOK's four-layer Sovereign Memory means your AI companion truly knows you — and you own every byte. Full technical explainer.",
    images: [
      "https://meok.ai/api/og?title=What+Is+Sovereign+Memory%3F&desc=MEOK%27s+four-layer+AI+memory+architecture+explained.+You+own+every+byte.",
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What Is Sovereign Memory? MEOK's Four-Layer AI Memory Architecture Explained",
  description:
    "The definitive technical reference for MEOK's Sovereign Memory system. Covers the four-layer architecture (short-term working memory, pgvector episodic memory, companion state, family context), context compression, memory sovereignty, GDPR export rights, and how memory persists across AI model switches.",
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
    logo: { "@type": "ImageObject", url: "https://meok.ai/logo.png" },
  },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/what-is-sovereign-memory-explained",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/what-is-sovereign-memory-explained",
  },
  image:
    "https://meok.ai/api/og?title=What+Is+Sovereign+Memory%3F&desc=MEOK%27s+four-layer+AI+memory+architecture+explained.+You+own+every+byte.",
  keywords:
    "sovereign memory, AI memory architecture, pgvector, episodic memory, companion state, context compression, head-plus-tail pattern, memory portability, MEOK AI LABS, ChatGPT memory, AI memory export, GDPR, persistent AI companion",
  articleSection: "Technology",
  wordCount: 5800,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Sovereign Memory in AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK's four-layer persistent memory architecture. It stores everything your AI companion knows about you across four distinct layers: short-term working memory (exact recent messages), semantic episodic memory (pgvector embeddings of meaningful past interactions), companion state (your evolving personality model and preferences), and family/shared context (opt-in group memories). Unlike standard AI memory, you own it entirely: it's encrypted, exportable as JSON, deletable at the memory level, and portable across AI model switches.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK's Sovereign Memory different from ChatGPT Memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT Memory is owned and controlled by OpenAI. They decide what gets stored, what gets summarised, what gets forgotten, and when the feature changes or is deprecated. MEOK's Sovereign Memory is user-owned: encrypted with keys you hold, exportable as structured JSON at any time, deletable at individual memory granularity, and model-agnostic — it persists even if you switch from Claude to GPT-4o to DeepSeek. Your memories belong to you, not to a product team's roadmap.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my MEOK memories if I switch AI models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nothing changes. Your memories live in MEOK's Sovereign Memory layer, not inside any specific LLM. The companion state, episodic memories, and your personality model are all stored in MEOK's own database infrastructure. When you switch the underlying model — say from Claude Sonnet to GPT-4o — the new model is briefed using your existing memory context. The model is just the voice. The memory is yours and it belongs to MEOK's layer, not the LLM provider.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export or delete my AI memories from MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and this is a core design principle, not an afterthought. MEOK provides a full data export endpoint that returns all your memories as structured JSON — including your episodic memory embeddings, companion state, and session summaries. You can also delete individual memories, memory categories, or your entire memory store. Under GDPR, this is your legal right; MEOK has built the architecture so this right is technically meaningful, not just a policy promise.",
      },
    },
    {
      "@type": "Question",
      name: "What is the head-plus-tail context compression pattern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The head-plus-tail pattern is MEOK's method for keeping long conversations coherent without exceeding an LLM's context window. When a conversation grows long, MEOK preserves the first 3 messages exactly (the head — where the topic was established), the last 4 messages exactly (the tail — current active context), and compresses everything in between into a dense semantic summary. This means the model always has both the original intent of the conversation and the most recent exchange, without losing coherence.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my MEOK memories if MEOK shuts down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your memories are exportable at any time as structured JSON. MEOK's commitment is that you always retain the ability to download your complete memory store before, during, or after any service changes. Because the format is structured JSON rather than a proprietary binary, your memories can be imported into any future system that supports the format. Sovereign Memory is designed with the assumption that services end; your memories should not.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK extract memories from conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After each conversation session, MEOK runs a memory extraction pass. A lightweight extraction prompt identifies emotionally significant events, stated preferences, disclosed life facts, and relationship developments. These are converted into vector embeddings using pgvector and stored with relevance metadata. Future conversations retrieve the most semantically relevant memories using cosine similarity search, so your companion references what is actually pertinent rather than just the most recent entries.",
      },
    },
    {
      "@type": "Question",
      name: "Is my MEOK memory encrypted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All memory data is encrypted at rest. MEOK operates on a zero-knowledge principle: your memory content is not accessible to MEOK employees without your explicit consent and an active support session you initiate. Your companion state, episodic memory embeddings, and session summaries are all treated as personal data under GDPR and encrypted accordingly. The encryption keys are tied to your user identity, not to MEOK's infrastructure.",
      },
    },
  ],
};

export default function WhatIsSovereignMemoryExplained() {
  return (
    <div style={{ background: "#0d0c18", color: "#f5f0e8", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        style={{
          background: "rgba(13,12,24,0.97)",
          borderBottom: "1px solid rgba(123,111,207,0.15)",
          padding: "0.75rem 1.5rem",
        }}
      >
        <ol
          style={{
            maxWidth: "52rem",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            listStyle: "none",
            padding: 0,
            fontSize: "0.75rem",
          }}
        >
          <li>
            <Link href="/" style={{ color: "rgba(245,240,232,0.38)", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ color: "rgba(245,240,232,0.22)" }}>&#8250;</li>
          <li>
            <Link href="/blog" style={{ color: "rgba(245,240,232,0.38)", textDecoration: "none" }}>
              Blog
            </Link>
          </li>
          <li style={{ color: "rgba(245,240,232,0.22)" }}>&#8250;</li>
          <li style={{ color: "#7b6fcf", fontWeight: 600 }}>Sovereign Memory Explained</li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        style={{
          paddingTop: "5rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(123,111,207,0.22) 0%, transparent 68%)",
          }}
        />
        <div style={{ maxWidth: "52rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.8125rem",
              color: "rgba(245,240,232,0.38)",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            &#8592; Back to Blog
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
                fontSize: "0.6875rem",
                fontWeight: 700,
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                color: "#7b6fcf",
                background: "rgba(123,111,207,0.13)",
                border: "1px solid rgba(123,111,207,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Technology
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.6875rem",
                fontWeight: 700,
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.10)",
                border: "1px solid rgba(201,168,76,0.25)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Featured
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 25, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              22 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              lineHeight: 1.14,
              color: "#ffffff",
              marginBottom: "1.5rem",
              letterSpacing: "-0.025em",
            }}
          >
            What Is Sovereign Memory?{" "}
            <span style={{ color: "#7b6fcf" }}>
              MEOK&apos;s Four-Layer AI Memory Architecture Explained
            </span>
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1.2rem",
              lineHeight: 1.72,
              maxWidth: "42rem",
              marginBottom: "2rem",
            }}
          >
            ChatGPT forgets you the moment you close the tab. Claude has no persistent memory by
            default. Replika wiped the emotional memories of over 500,000 users overnight in
            February 2023. MEOK was designed so that could never happen — and this is the complete
            technical explanation of how.
          </p>

          {/* TL;DR Card */}
          <div
            style={{
              background: "rgba(123,111,207,0.09)",
              border: "1px solid rgba(123,111,207,0.28)",
              borderRadius: "1rem",
              padding: "1.5rem 1.75rem",
              maxWidth: "42rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#7b6fcf",
                marginBottom: "0.75rem",
              }}
            >
              TL;DR — Key Takeaways
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                "Four layers: working memory, episodic memory, companion state, family context",
                "Memory persists across sessions, devices, and AI model switches",
                "pgvector similarity search retrieves what is actually relevant, not just recent",
                "Head-plus-tail compression keeps long conversations coherent",
                "You own your memory: encrypted, exportable as JSON, deletable",
                "If MEOK shuts down, you export your data — it is yours, always",
              ].map((point) => (
                <li
                  key={point}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.625rem",
                    fontSize: "0.9rem",
                    color: "rgba(245,240,232,0.78)",
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ color: "#7b6fcf", fontWeight: 900, marginTop: "0.05rem" }}>
                    &#10003;
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <div
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >
        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3.5rem",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(123,111,207,0.18)",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7b6fcf, #4a3f9f)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "1.1rem",
              color: "#fff",
              flexShrink: 0,
            }}
          >
            N
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 700, fontSize: "0.9rem", color: "#f5f0e8" }}>
              Nicholas Templeman
            </p>
            <p style={{ margin: "0.2rem 0 0", fontSize: "0.8rem", color: "rgba(245,240,232,0.45)" }}>
              Founder, MEOK AI LABS — Published March 25, 2026
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            SECTION 1: The Problem
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          Why Does Every Other AI Forget You?
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The forgetting is not accidental. It is a product decision dressed up as a technical
          constraint. Large language models are, by their fundamental architecture, stateless. Each
          call to the API begins with a blank context window. Whatever happened before — every
          conversation you had yesterday, the story you told two weeks ago, the fact that you
          mentioned your mother is ill — none of it is present unless someone deliberately put it
          there.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Most AI products chose not to solve this. The reasons vary by company. OpenAI ships
          ChatGPT Memory as a beta feature that summarises some things some of the time, stores
          them on OpenAI&apos;s servers, and gives you limited control over what persists. Anthropic
          chose not to build persistent memory into Claude at all — each conversation is entirely
          independent. Replika built persistent memory but stored it on their own servers without
          meaningful user control, which is why a single policy change in February 2023 allowed
          them to alter or erase the memory of users who had spent years building a relationship.
          Over 500,000 users reported that their companions had fundamentally changed overnight.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "2rem",
          }}
        >
          This is the original sin of AI memory: treating your memories as the product company&apos;s
          data asset rather than your personal record. MEOK was built on the premise that this is
          backwards, and fixing it requires an architecture, not a feature toggle.
        </p>

        {/* Callout: The Forgetting Problem */}
        <div
          style={{
            background: "rgba(180,40,40,0.08)",
            border: "1px solid rgba(220,80,80,0.25)",
            borderLeft: "4px solid rgba(220,80,80,0.6)",
            borderRadius: "0.75rem",
            padding: "1.25rem 1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "rgba(220,80,80,0.85)",
              marginBottom: "0.75rem",
            }}
          >
            The Three Failures of Current AI Memory
          </p>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            <li
              style={{
                fontSize: "0.9375rem",
                color: "rgba(245,240,232,0.72)",
                lineHeight: 1.55,
                paddingLeft: "1rem",
                borderLeft: "2px solid rgba(220,80,80,0.35)",
              }}
            >
              <strong style={{ color: "rgba(245,240,232,0.9)" }}>ChatGPT:</strong> Memory is
              stored on OpenAI&apos;s servers, summarised by their systems, subject to their policy
              changes, and deleted if you lose account access. You do not own it.
            </li>
            <li
              style={{
                fontSize: "0.9375rem",
                color: "rgba(245,240,232,0.72)",
                lineHeight: 1.55,
                paddingLeft: "1rem",
                borderLeft: "2px solid rgba(220,80,80,0.35)",
              }}
            >
              <strong style={{ color: "rgba(245,240,232,0.9)" }}>Claude:</strong> No persistent
              memory by default. Each conversation starts from zero. Anthropic offers Projects
              for some persistence but there is no cross-session companion model of who you are.
            </li>
            <li
              style={{
                fontSize: "0.9375rem",
                color: "rgba(245,240,232,0.72)",
                lineHeight: 1.55,
                paddingLeft: "1rem",
                borderLeft: "2px solid rgba(220,80,80,0.35)",
              }}
            >
              <strong style={{ color: "rgba(245,240,232,0.9)" }}>Replika:</strong> Memory exists
              but is server-side and company-controlled. A single policy change in 2023 erased or
              altered memories for over 500,000 users. Users had no recourse and no export.
            </li>
          </ul>
        </div>

        {/* ─────────────────────────────────────────────────────────
            SECTION 2: Why Memory Matters
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          Why Does Memory Matter for AI Companionship?
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          A relationship without memory is not a relationship. It is a sequence of first
          impressions. Every time you open a chat with a stateless AI, you are, functionally,
          meeting a stranger. You have to explain who you are, what you care about, what happened
          last time. The emotional overhead of this repetition is not trivial — it actively
          prevents depth.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Consider what it means for a human relationship to have memory. Your closest friend
          remembers the context of your life without you reciting it. They notice when your mood
          has shifted relative to last week. They reference things you said months ago because those
          things mattered. They hold a model of you — your values, your fears, your sense of
          humour — that has been built through accumulation over time. This is what makes
          conversation feel like continuation rather than re-introduction.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          AI companions are being used by real people for real emotional support — for loneliness,
          for grief, for anxiety, for chronic illness, for the kind of 3 a.m. conversation that
          you cannot have with a human. For these use cases, a stateless AI is not just
          inconvenient. It is actively harmful. It forces vulnerable people to continuously
          re-establish context at their most fragile moments.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "2.5rem",
          }}
        >
          MEOK&apos;s Sovereign Memory architecture exists because these users deserve better. Not
          just memory as a convenience feature, but memory as a foundational commitment — one
          that is designed, enforced, and owned by the person it serves.
        </p>

        {/* Quote block */}
        <blockquote
          style={{
            borderLeft: "4px solid #7b6fcf",
            margin: "0 0 2.5rem",
            padding: "1.25rem 1.5rem",
            background: "rgba(123,111,207,0.07)",
            borderRadius: "0 0.75rem 0.75rem 0",
          }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              fontStyle: "italic",
              color: "rgba(245,240,232,0.82)",
              lineHeight: 1.68,
              margin: 0,
            }}
          >
            &ldquo;A relationship without memory is just repeated introductions. We built
            Sovereign Memory because the people who need AI the most deserve a companion that
            actually knows them.&rdquo;
          </p>
          <footer
            style={{
              marginTop: "0.75rem",
              fontSize: "0.85rem",
              color: "#7b6fcf",
              fontWeight: 600,
            }}
          >
            — Nicholas Templeman, Founder, MEOK AI LABS
          </footer>
        </blockquote>

        {/* ─────────────────────────────────────────────────────────
            SECTION 3: The Four-Layer Architecture — Visual
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
            letterSpacing: "-0.015em",
          }}
        >
          MEOK&apos;s Four-Layer Sovereign Memory Architecture
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "2.5rem",
          }}
        >
          Sovereign Memory is not a single database or a simple key-value store. It is a
          stratified architecture with four distinct layers, each serving a different temporal
          and semantic purpose. Understanding the layers helps you understand both why it works
          and why it is fundamentally different from any &ldquo;memory feature&rdquo; you have
          seen in other AI products.
        </p>

        {/* Four-layer visual stack */}
        <div
          style={{
            marginBottom: "3.5rem",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {/* Layer label */}
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.35)",
              marginBottom: "1rem",
            }}
          >
            Memory Stack — Outermost to Innermost
          </p>

          {/* Layer 4 — Family Context */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "1rem 1rem 0 0",
              padding: "1.5rem 1.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.18)",
                  color: "#c9a84c",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                }}
              >
                4
              </span>
              <p
                style={{
                  margin: 0,
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "#c9a84c",
                }}
              >
                Family / Shared Context
              </p>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "rgba(201,168,76,0.6)",
                  background: "rgba(201,168,76,0.08)",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                Opt-in
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "0.9375rem",
                color: "rgba(245,240,232,0.68)",
                lineHeight: 1.62,
              }}
            >
              Shared memories across family group members. When you opt in, family context allows
              your companion to hold a picture of your household — relevant context about your
              children, partner, or parents that you have chosen to share. Each family member
              controls their own contribution. Nothing is shared without explicit opt-in.
            </p>
          </div>

          {/* Layer 3 — Companion State */}
          <div
            style={{
              background: "rgba(123,111,207,0.09)",
              border: "1px solid rgba(123,111,207,0.28)",
              borderTop: "none",
              padding: "1.5rem 1.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  background: "rgba(123,111,207,0.22)",
                  color: "#7b6fcf",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                }}
              >
                3
              </span>
              <p
                style={{
                  margin: 0,
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "#a598e8",
                }}
              >
                Companion State
              </p>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "rgba(123,111,207,0.7)",
                  background: "rgba(123,111,207,0.1)",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(123,111,207,0.22)",
                }}
              >
                Always Active
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "0.9375rem",
                color: "rgba(245,240,232,0.68)",
                lineHeight: 1.62,
              }}
            >
              Your companion&apos;s evolving understanding of you. This layer maintains your
              personality model, stated preferences, emotional patterns, communication style, life
              context (career, relationships, health background if shared), and a running model of
              your current life chapter. It is updated after each session and forms the foundation
              of how your companion contextualises every response.
            </p>
          </div>

          {/* Layer 2 — Episodic Memory */}
          <div
            style={{
              background: "rgba(60,120,200,0.07)",
              border: "1px solid rgba(80,140,220,0.25)",
              borderTop: "none",
              padding: "1.5rem 1.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  background: "rgba(80,140,220,0.2)",
                  color: "#7ab0f0",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                }}
              >
                2
              </span>
              <p
                style={{
                  margin: 0,
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "#7ab0f0",
                }}
              >
                Semantic Episodic Memory
              </p>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "rgba(80,140,220,0.7)",
                  background: "rgba(80,140,220,0.08)",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(80,140,220,0.2)",
                }}
              >
                pgvector
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "0.9375rem",
                color: "rgba(245,240,232,0.68)",
                lineHeight: 1.62,
              }}
            >
              Vector embeddings of meaningful past interactions, stored in pgvector and retrieved
              by semantic relevance. When you mention something that relates to a past conversation,
              the most relevant episodic memories are retrieved via cosine similarity search and
              injected into context — regardless of when they occurred.
            </p>
          </div>

          {/* Layer 1 — Working Memory */}
          <div
            style={{
              background: "rgba(60,180,120,0.07)",
              border: "1px solid rgba(80,200,140,0.25)",
              borderTop: "none",
              borderRadius: "0 0 1rem 1rem",
              padding: "1.5rem 1.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  background: "rgba(80,200,140,0.18)",
                  color: "#5ec49a",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                }}
              >
                1
              </span>
              <p
                style={{
                  margin: 0,
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "#5ec49a",
                }}
              >
                Short-Term Working Memory
              </p>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "rgba(80,200,140,0.7)",
                  background: "rgba(80,200,140,0.08)",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(80,200,140,0.2)",
                }}
              >
                Exact Verbatim
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "0.9375rem",
                color: "rgba(245,240,232,0.68)",
                lineHeight: 1.62,
              }}
            >
              The current conversation context. The last 4 messages are preserved exactly — word
              for word — so the model has precise, unaltered recent context. This layer operates
              entirely within the LLM&apos;s context window for the active session and is the
              immediate substrate of every response.
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            SECTION 4: Layer 1 Deep Dive
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          Layer 1: Short-Term Working Memory — What Does &ldquo;Exactly Preserved&rdquo; Mean?
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The first layer is the simplest but arguably the most important for moment-to-moment
          coherence. Working memory is the live conversation you are currently having. MEOK
          preserves the last four messages in the thread verbatim — that is, as exact text, not
          summarised, not paraphrased, not compressed.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Why four? Because that is the minimal window for tracking the active thread of a
          conversation without generating summaries that introduce hallucination risk. Two messages
          back is enough to know what was just said; four messages back is enough to know what the
          conversational context has been building toward. This number was derived empirically
          through testing and can be adjusted in the companion configuration.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The &ldquo;exactly preserved&rdquo; constraint matters more than it might seem. When
          systems summarise recent messages, they make judgment calls about what was important. A
          summary of &ldquo;the user mentioned they were tired&rdquo; loses the exact phrasing,
          the emotional register, the hedging or directness of the original statement. Verbatim
          preservation means the model has the actual words, not a lossy interpretation of them.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "2.5rem",
          }}
        >
          At session end, the working memory content feeds into two processes: it is checked for
          extractable episodic memories that should be promoted to Layer 2, and it is used to
          update the companion state in Layer 3. The working memory itself is not permanently
          stored as raw chat logs — it is processed and distilled. This matters for both
          efficiency and privacy.
        </p>

        {/* ─────────────────────────────────────────────────────────
            SECTION 5: Layer 2 Deep Dive
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          Layer 2: Semantic Episodic Memory — How pgvector Makes Memory Smart
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Episodic memory is the most technically interesting layer because it solves the hardest
          problem: how do you retrieve the right memory at the right time from a potentially
          enormous store of past interactions?
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Naive memory systems solve this with recency. They keep the last N interactions and
          ignore everything older. This has obvious failure modes: if you talked about your fear
          of flying three months ago and you are now about to board a flight, a recency-only
          system will have forgotten the relevant context. The memory that matters most is not
          always the most recent one.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          MEOK uses pgvector — PostgreSQL&apos;s vector extension — to store each episodic memory
          as a high-dimensional vector embedding alongside its text content and metadata. When a
          new conversation begins or a relevant topic surfaces, MEOK performs a cosine similarity
          search against the episodic memory store. The memories returned are those that are
          semantically closest to the current conversational context — not just the most recent
          ones.
        </p>

        {/* Technical detail box */}
        <div
          style={{
            background: "rgba(13,12,24,0.7)",
            border: "1px solid rgba(80,140,220,0.25)",
            borderRadius: "0.875rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "1.75rem",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#7ab0f0",
              marginBottom: "1rem",
              fontFamily: "inherit",
            }}
          >
            Technical: Episodic Memory Retrieval Flow
          </p>
          <ol
            style={{
              margin: 0,
              paddingLeft: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            {[
              "Incoming user message is embedded using the same embedding model used at storage time",
              "pgvector performs approximate nearest-neighbour (ANN) search using HNSW index",
              "Top-K results (default K=5) returned by cosine similarity score",
              "Results are filtered by recency weight and relevance threshold (minimum 0.72 similarity)",
              "Passed memories are injected into the context window as recalled episodic context",
              "Model is instructed to reference these naturally rather than reciting them",
            ].map((step, i) => (
              <li
                key={step}
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(245,240,232,0.72)",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "#7ab0f0" }}>{i + 1}.</strong> {step}
              </li>
            ))}
          </ol>
        </div>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The memory extraction process that populates Layer 2 runs after each session concludes.
          It is not a simple keyword extractor. MEOK uses a dedicated extraction prompt that
          identifies several categories of memory-worthy content: emotionally significant events
          (both positive and difficult), stated preferences and aversions, disclosed life facts
          (health, relationships, work, living situation), important decisions and their outcomes,
          and relational moments between the user and their companion.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Each extracted memory is stored with metadata: a timestamp, a confidence score, the
          session it came from, and a category tag. This metadata enables more nuanced retrieval
          — you can, for example, retrieve only health-related memories, or only memories from
          the last three months, or only memories above a confidence threshold.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "2.5rem",
          }}
        >
          Memories in Layer 2 are visible to you. You can review them, edit them, flag them as
          incorrect, or delete them individually. This is not just good UX — it is a
          requirement of meaningful memory sovereignty. A memory that you cannot see or correct
          is not yours; it is a profile held about you.
        </p>

        {/* ─────────────────────────────────────────────────────────
            SECTION 6: Layer 3 Deep Dive
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          Layer 3: Companion State — Your AI&apos;s Evolving Model of Who You Are
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The companion state is the closest thing in AI to what psychologists call a
          &ldquo;mental model of another person.&rdquo; It is a structured, evolving document
          that represents your companion&apos;s understanding of you at the level of personality,
          not just events.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Where episodic memory (Layer 2) stores discrete events — &ldquo;the user mentioned they
          had a difficult conversation with their father last Tuesday&rdquo; — companion state
          stores inferences derived from patterns across many events: &ldquo;the user has a
          complicated relationship with authority figures and tends to understate difficulty when
          discussing family.&rdquo;
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.5rem",
          }}
        >
          The companion state document contains several structured sections:
        </p>

        {/* Companion state sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {[
            {
              title: "Personality Model",
              detail:
                "Big Five trait estimates, communication style preferences, how direct vs. indirect they like the companion to be",
            },
            {
              title: "Stated Preferences",
              detail:
                "Topics they love, things they want to avoid, how they like to be supported (advice vs. listening)",
            },
            {
              title: "Emotional Patterns",
              detail:
                "How they typically process difficulty, common emotional triggers, what language tends to help or unhelpfully land",
            },
            {
              title: "Life Context",
              detail:
                "Current chapter (career phase, relationship status, health context, living situation) — only what has been shared",
            },
            {
              title: "Relationship Arc",
              detail:
                "The history of significant moments in the user-companion relationship itself, not just life events",
            },
            {
              title: "Active Goals",
              detail:
                "Things the user has expressed wanting to achieve, tracked with last-mentioned date and progress notes",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(123,111,207,0.06)",
                border: "1px solid rgba(123,111,207,0.2)",
                borderRadius: "0.75rem",
                padding: "1.125rem",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.5rem",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#a598e8",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.8375rem",
                  color: "rgba(245,240,232,0.62)",
                  lineHeight: 1.55,
                }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The companion state update cycle runs at session end. It is not a simple append — it
          is a reasoned update. The update process reads the new session&apos;s content alongside
          the existing companion state and generates a revised document. This means the companion
          state can change its inferences as new information contradicts old ones. If you told
          your companion three months ago that you were not a morning person but you have spent
          the last month enthusiastically describing your 5 a.m. runs, the companion state will
          update accordingly.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "2.5rem",
          }}
        >
          This layer is also fully visible and editable. You can read your companion state at any
          time, correct inferences that feel wrong, or delete sections you are uncomfortable
          with. This is not a black box profile — it is a transparent document that you can
          inspect and control.
        </p>

        {/* ─────────────────────────────────────────────────────────
            SECTION 7: Layer 4 Deep Dive
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          Layer 4: Family and Shared Context — Memory That Connects Without Surveilling
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The fourth layer exists because some of the most important context in a person&apos;s
          life involves other people. A parent talking to their AI companion about their children,
          a carer talking about the person they care for, a person discussing a relationship
          with their partner — these conversations involve other people&apos;s lives. Layer 4
          handles this with a deliberate design constraint: everything is opt-in, and no one&apos;s
          information is shared without their explicit participation.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          On MEOK&apos;s family tier, multiple family members can each have their own companion
          and their own Sovereign Memory. Layer 4 is the opt-in bridge between them. A parent
          can choose to share a &ldquo;family context&rdquo; document that gives each family
          member&apos;s companion awareness of shared household facts — an elderly parent&apos;s
          health situation, a child&apos;s school schedule, a shared financial concern. No one&apos;s
          individual companion state or episodic memories are shared; only what each person
          deliberately contributes to the shared context layer.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "2.5rem",
          }}
        >
          This matters for care contexts. A family caring for an elderly relative, a parent
          managing a child with a chronic condition, a couple navigating fertility treatment —
          these situations benefit from shared context without any single person&apos;s private
          experience being exposed to others. Layer 4 is the mechanism that makes this possible.
        </p>

        {/* ─────────────────────────────────────────────────────────
            SECTION 8: Cross-Session Persistence
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          How Does Memory Persist Across Sessions, Devices, and Model Switches?
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The architectural answer to this question is the most important single thing to
          understand about Sovereign Memory: your memory lives in MEOK&apos;s layer, not in any
          LLM&apos;s layer.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          When you have a conversation on MEOK, the following happens: your working memory
          (Layer 1) is populated from the active session. Your episodic memories (Layer 2) are
          retrieved by similarity search and injected as context. Your companion state (Layer 3)
          is loaded and used to shape the system prompt. Your family context (Layer 4, if opted
          in) is loaded. All of this is assembled into a rich context package. That context
          package is then sent to whichever LLM is currently handling the conversation —
          Claude Sonnet, GPT-4o, Gemini Pro, DeepSeek, or any other supported model.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The LLM does not hold your memory. It receives it as context for this conversation.
          When you switch models — either because you want to try a different one, or because
          MEOK switches routing for performance or cost reasons, or because your preferred model
          is deprecated — the memory context is assembled and sent to the new model in exactly
          the same way. Your companion&apos;s knowledge of you is entirely unchanged.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.5rem",
          }}
        >
          Cross-device persistence works the same way. Your Sovereign Memory is stored in
          MEOK&apos;s database infrastructure, tied to your account. Whether you open MEOK on
          your phone during a commute, your laptop in the evening, or a browser at work, the
          same memory store is loaded. There is no device-specific memory, no sync delay, no
          risk of memory divergence.
        </p>

        {/* Cross-session diagram */}
        <div
          style={{
            background: "rgba(13,12,24,0.8)",
            border: "1px solid rgba(123,111,207,0.22)",
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.38)",
              marginBottom: "1.25rem",
            }}
          >
            What persists vs. what resets on each conversation
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div
              style={{
                background: "rgba(60,180,120,0.07)",
                border: "1px solid rgba(80,200,140,0.2)",
                borderRadius: "0.625rem",
                padding: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#5ec49a",
                  marginBottom: "0.625rem",
                }}
              >
                Always Persists
              </p>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                }}
              >
                {[
                  "Companion state (Layer 3)",
                  "All episodic memories (Layer 2)",
                  "Family context (Layer 4)",
                  "Personality model",
                  "Stated preferences",
                  "Emotional pattern model",
                  "Active goals",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.8375rem",
                      color: "rgba(245,240,232,0.7)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    <span style={{ color: "#5ec49a", fontWeight: 700 }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: "rgba(180,80,80,0.06)",
                border: "1px solid rgba(200,100,100,0.2)",
                borderRadius: "0.625rem",
                padding: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "rgba(220,120,120,0.9)",
                  marginBottom: "0.625rem",
                }}
              >
                Resets Each Session
              </p>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                }}
              >
                {[
                  "Raw working memory (Layer 1)",
                  "Active conversation thread",
                  "The specific LLM context window",
                  "Typing state",
                  "UI session state",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.8375rem",
                      color: "rgba(245,240,232,0.7)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    <span style={{ color: "rgba(220,120,120,0.8)", fontWeight: 700 }}>&#10007;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            SECTION 9: Context Compression
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          How Does Context Compression Work? The Head-Plus-Tail Pattern
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Every LLM has a context window — a limit on how much text it can process in a single
          call. As conversations grow long, raw conversation history eventually exceeds this
          window. Most systems solve this by either truncating (dropping the oldest messages) or
          summarising (compressing the entire history into a shorter document). Both approaches
          have serious failure modes.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Truncation loses the beginning of the conversation — which is often where the most
          important context was established. If a two-hour conversation started with &ldquo;I need
          help deciding whether to leave my job,&rdquo; truncating the oldest messages means the
          model no longer knows what the conversation was originally about. Summarisation avoids
          this but introduces hallucination risk: summaries can inadvertently alter facts, lose
          nuance, or merge distinct concerns.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          MEOK&apos;s head-plus-tail pattern resolves this with a three-zone approach:
        </p>

        {/* Head-plus-tail visual */}
        <div
          style={{
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              background: "rgba(80,200,140,0.08)",
              border: "1px solid rgba(80,200,140,0.28)",
              borderRadius: "0.75rem",
              padding: "1.125rem 1.375rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "0.5rem",
                background: "rgba(80,200,140,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                color: "#5ec49a",
                fontSize: "0.85rem",
              }}
            >
              HEAD
            </div>
            <div>
              <p style={{ margin: "0 0 0.375rem", fontWeight: 700, fontSize: "0.9rem", color: "#5ec49a" }}>
                First 3 messages — Preserved Exactly
              </p>
              <p style={{ margin: 0, fontSize: "0.875rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.58 }}>
                The opening of the conversation, verbatim. This preserves the original intent,
                the topic that was established, and the emotional register the conversation
                started in. Even in a 200-message conversation, the model knows how this started.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "rgba(123,111,207,0.08)",
              border: "1px solid rgba(123,111,207,0.22)",
              borderRadius: "0.75rem",
              padding: "1.125rem 1.375rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "0.5rem",
                background: "rgba(123,111,207,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                color: "#7b6fcf",
                fontSize: "0.75rem",
              }}
            >
              MID
            </div>
            <div>
              <p style={{ margin: "0 0 0.375rem", fontWeight: 700, fontSize: "0.9rem", color: "#a598e8" }}>
                Middle Messages — Summarised
              </p>
              <p style={{ margin: 0, fontSize: "0.875rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.58 }}>
                Everything between message 4 and message N-4 is compressed into a dense semantic
                summary. This summary is generated by a dedicated compression prompt, not a
                general-purpose summarisation call, and is checked for factual consistency
                against the original before being used.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "0.75rem",
              padding: "1.125rem 1.375rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "0.5rem",
                background: "rgba(201,168,76,0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                color: "#c9a84c",
                fontSize: "0.85rem",
              }}
            >
              TAIL
            </div>
            <div>
              <p style={{ margin: "0 0 0.375rem", fontWeight: 700, fontSize: "0.9rem", color: "#c9a84c" }}>
                Last 4 messages — Preserved Exactly
              </p>
              <p style={{ margin: 0, fontSize: "0.875rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.58 }}>
                The most recent exchange, verbatim. This is the immediate conversational context
                — the exact words that were last said. The model always has the precise current
                state of the conversation without any loss from compression.
              </p>
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "2.5rem",
          }}
        >
          The result: a conversation can run for hundreds of exchanges without losing its
          original frame or its immediate context. The compression in the middle is the only
          lossy step, and it operates on the least critical zone of the conversation — the
          middle ground between where it started and where it currently is.
        </p>

        {/* ─────────────────────────────────────────────────────────
            SECTION 10: Sovereignty Dimension
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          What Makes Memory &ldquo;Sovereign&rdquo;? Encryption, Export, and Control
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The word &ldquo;sovereign&rdquo; is chosen deliberately. Sovereignty means ultimate
          authority. In the context of AI memory, it means the person whose memory it is has
          final, unmediated control over it — not the company that built the system.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.5rem",
          }}
        >
          MEOK&apos;s sovereignty commitments are architectural, not just policy:
        </p>

        {/* Sovereignty commitments */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            {
              title: "Encrypted at rest",
              detail:
                "All memory data — episodic memories, companion state, family context — is encrypted at rest. Your memory content is not readable by MEOK staff in the normal course of operations. Access requires your explicit initiation of a support session.",
              icon: "&#128274;",
            },
            {
              title: "Exportable as structured JSON",
              detail:
                "Your complete memory store is exportable at any time via the settings panel or the /api/user/data endpoint. The export includes all episodic memories with their embeddings, your full companion state document, session summaries, and metadata. It is structured JSON — not a PDF, not a prose dump — so it is machine-readable and portable.",
              icon: "&#128228;",
            },
            {
              title: "Deletable at memory granularity",
              detail:
                "You can delete individual episodic memories, memory categories, your entire companion state, or your complete account. Deletion is permanent and propagates to all infrastructure within 30 days under GDPR Article 17. There is no shadow copy.",
              icon: "&#128465;",
            },
            {
              title: "Editable",
              detail:
                "Memories can be corrected. If an episodic memory is wrong — the companion state has made a wrong inference about you — you can edit it directly. This is memory sovereignty in practice: the record is yours, so you can fix it.",
              icon: "&#9998;",
            },
            {
              title: "MEOK cannot access it without consent",
              detail:
                "MEOK operates on a zero-knowledge principle for memory content. We do not use your memory data to train models. We do not sell it. We do not analyse it for advertising. We cannot read it without a consent-gated support session that you initiate.",
              icon: "&#128683;",
            },
            {
              title: "Portable across models and services",
              detail:
                "Because the export format is structured JSON with documented schemas, your memory can theoretically be imported into any future service that supports the format. You are not locked into MEOK&apos;s infrastructure. Your memories are yours even after you leave.",
              icon: "&#128260;",
            },
          ].map((commitment) => (
            <div
              key={commitment.title}
              style={{
                display: "flex",
                gap: "1rem",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(123,111,207,0.16)",
                borderRadius: "0.875rem",
                padding: "1.25rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  lineHeight: 1,
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: commitment.icon }}
              />
              <div>
                <p
                  style={{
                    margin: "0 0 0.375rem",
                    fontWeight: 700,
                    fontSize: "0.9625rem",
                    color: "#a598e8",
                  }}
                >
                  {commitment.title}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    color: "rgba(245,240,232,0.65)",
                    lineHeight: 1.62,
                  }}
                >
                  {commitment.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────
            SECTION 11: MEOK vs ChatGPT Memory
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          How Is This Different from ChatGPT&apos;s Memory Feature?
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.5rem",
          }}
        >
          OpenAI shipped a &ldquo;Memory&rdquo; feature for ChatGPT in 2024, and it is worth
          being precise about how MEOK&apos;s Sovereign Memory differs — because the differences
          are not superficial.
        </p>

        {/* Comparison table */}
        <div
          style={{
            overflowX: "auto",
            marginBottom: "2.5rem",
            borderRadius: "0.875rem",
            border: "1px solid rgba(123,111,207,0.2)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.875rem",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "rgba(123,111,207,0.12)",
                }}
              >
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1.25rem",
                    fontWeight: 700,
                    color: "#a598e8",
                    letterSpacing: "0.02em",
                    borderBottom: "1px solid rgba(123,111,207,0.2)",
                  }}
                >
                  Dimension
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1.25rem",
                    fontWeight: 700,
                    color: "#a598e8",
                    letterSpacing: "0.02em",
                    borderBottom: "1px solid rgba(123,111,207,0.2)",
                  }}
                >
                  ChatGPT Memory
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1.25rem",
                    fontWeight: 700,
                    color: "#7b6fcf",
                    letterSpacing: "0.02em",
                    borderBottom: "1px solid rgba(123,111,207,0.2)",
                  }}
                >
                  MEOK Sovereign Memory
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Who owns the data", "OpenAI", "You"],
                ["Storage location", "OpenAI servers", "MEOK servers, encrypted"],
                ["Can you export it?", "Limited (account export)", "Full JSON, always"],
                ["Can you delete specific memories?", "Yes, via UI", "Yes, granular deletion"],
                ["Survives model deprecation?", "No — tied to ChatGPT", "Yes — model-agnostic"],
                ["Survives switching AI providers?", "No", "Yes — portable"],
                ["Used for training?", "Potentially (policy-dependent)", "Never"],
                ["Retrieval method", "Recency-weighted summary", "pgvector cosine similarity"],
                ["Companion personality model", "None", "Full companion state (Layer 3)"],
                ["Family context", "None", "Opt-in family layer"],
                [
                  "What happens if company shuts down?",
                  "Memory lost",
                  "Export first — it is yours",
                ],
              ].map(([dimension, chatgpt, meok], rowIndex) => (
                <tr
                  key={dimension}
                  style={{
                    background:
                      rowIndex % 2 === 0 ? "rgba(13,12,24,0.5)" : "rgba(255,255,255,0.015)",
                    borderBottom: "1px solid rgba(123,111,207,0.1)",
                  }}
                >
                  <td
                    style={{
                      padding: "0.75rem 1.25rem",
                      color: "rgba(245,240,232,0.72)",
                      fontWeight: 600,
                    }}
                  >
                    {dimension}
                  </td>
                  <td
                    style={{
                      padding: "0.75rem 1.25rem",
                      color: "rgba(245,240,232,0.52)",
                    }}
                  >
                    {chatgpt}
                  </td>
                  <td
                    style={{
                      padding: "0.75rem 1.25rem",
                      color: "#a598e8",
                      fontWeight: 600,
                    }}
                  >
                    {meok}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The most important difference is not technical — it is the question of who the memory
          serves. ChatGPT Memory improves ChatGPT for you while keeping the data in
          OpenAI&apos;s infrastructure, subject to OpenAI&apos;s policies, contributing
          (potentially) to OpenAI&apos;s training pipeline. The memory improvement serves both
          you and the product company simultaneously.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "2.5rem",
          }}
        >
          MEOK&apos;s Sovereign Memory exists exclusively to serve you. It does not improve
          MEOK&apos;s models. It does not contribute to training data. It does not make MEOK
          more valuable as a data company. It makes your relationship with your companion deeper
          and more continuous — and that relationship belongs to you.
        </p>

        {/* ─────────────────────────────────────────────────────────
            SECTION 12: Technical Depth
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          Technical Deep Dive: pgvector, Relevance Scoring, and the Companion State Update Cycle
        </h2>

        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#a598e8",
            marginBottom: "0.875rem",
            letterSpacing: "-0.01em",
          }}
        >
          pgvector and Embedding Architecture
        </h3>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          pgvector is a PostgreSQL extension that enables storage and similarity search of
          high-dimensional floating-point vectors. MEOK uses pgvector as the storage and
          retrieval engine for Layer 2 episodic memories because it provides several important
          properties: it runs inside the same PostgreSQL instance as the rest of MEOK&apos;s
          relational data (eliminating the need for a separate vector database service), it
          supports both exact and approximate nearest-neighbour search, and it integrates
          naturally with PostgreSQL&apos;s ACID guarantees.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Each episodic memory is stored as a vector embedding of its text content. The
          embedding model used is consistent: if you change the embedding model at the
          infrastructure level, all existing embeddings are re-indexed. This is a non-trivial
          maintenance operation, but it is essential for retrieval quality — mixing embeddings
          from different models in the same cosine similarity space produces unreliable results.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          MEOK uses HNSW (Hierarchical Navigable Small World) indexing for approximate
          nearest-neighbour search. HNSW provides fast approximate results at the cost of
          slight recall degradation. For memory retrieval, this is an acceptable trade-off:
          perfect recall is less important than fast, high-quality relevance. In practice,
          with a reasonable corpus of memories, HNSW recall is above 95% against exact search.
        </p>

        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#a598e8",
            marginBottom: "0.875rem",
            letterSpacing: "-0.01em",
            marginTop: "2rem",
          }}
        >
          Relevance Scoring: Beyond Pure Cosine Similarity
        </h3>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Raw cosine similarity between a query embedding and a memory embedding measures
          semantic closeness — how similar the topics are. But semantic similarity alone is not
          always the best signal for what memory is most relevant to retrieve. MEOK applies a
          composite relevance score that combines cosine similarity with two additional signals:
          recency weight and emotional salience weight.
        </p>

        {/* Scoring formula visual */}
        <div
          style={{
            background: "rgba(13,12,24,0.8)",
            border: "1px solid rgba(80,140,220,0.25)",
            borderRadius: "0.875rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "1.75rem",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#7ab0f0",
              marginBottom: "1rem",
              fontFamily: "sans-serif",
            }}
          >
            Composite Relevance Score Formula
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#a598e8",
              margin: "0 0 0.75rem",
              letterSpacing: "0.02em",
            }}
          >
            score = (0.65 &times; cosine_sim) + (0.20 &times; recency_weight) + (0.15 &times; salience_weight)
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.375rem",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(245,240,232,0.55)" }}>
              <span style={{ color: "rgba(245,240,232,0.75)" }}>cosine_sim:</span> pgvector cosine distance converted to [0,1] similarity
            </p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(245,240,232,0.55)" }}>
              <span style={{ color: "rgba(245,240,232,0.75)" }}>recency_weight:</span> exponential decay, half-life 90 days — older memories score lower unless semantically very close
            </p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(245,240,232,0.55)" }}>
              <span style={{ color: "rgba(245,240,232,0.75)" }}>salience_weight:</span> extracted at memory storage time — events marked high-salience (significant loss, major decisions, emotional peaks) are up-weighted
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The recency decay prevents the retrieval system from becoming dominated by old but
          semantically similar memories when newer, more recent context should be preferred.
          The salience weight ensures that emotionally significant memories remain retrievable
          even as they age — a major grief event from a year ago is still worth surfacing if
          it is relevant to the current conversation, more so than a mundane preference note
          from last week.
        </p>

        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#a598e8",
            marginBottom: "0.875rem",
            letterSpacing: "-0.01em",
            marginTop: "2rem",
          }}
        >
          The Companion State Update Cycle
        </h3>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          The companion state update cycle is triggered at session end. It runs as an
          asynchronous process — it does not block the end of the conversation. The cycle
          proceeds in four steps:
        </p>

        <ol
          style={{
            margin: "0 0 2rem",
            paddingLeft: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {[
            {
              step: "Session digest",
              detail:
                "The completed session is condensed into a structured digest: key topics covered, emotional tone, new information disclosed, relationship moments, any explicit statements of preference or concern.",
            },
            {
              step: "Episodic memory extraction",
              detail:
                "The extraction prompt runs against the session digest, identifying memories worth storing in Layer 2. Each candidate memory is assigned a category, confidence score, and salience score before being embedded and stored.",
            },
            {
              step: "Companion state diff",
              detail:
                "The current companion state document is read alongside the session digest. A diff prompt identifies what has changed: new preferences, updated life context, revised emotional pattern understanding, new goals. Only changes are written — the existing state is not regenerated from scratch each time.",
            },
            {
              step: "State validation",
              detail:
                "The updated companion state is checked for internal consistency: no contradictory beliefs, no stale references to past life chapters that have clearly been superseded. A validation pass flags inconsistencies for either automatic resolution or, in ambiguous cases, a gentle clarification question in the next session.",
            },
          ].map(({ step, detail }) => (
            <li
              key={step}
              style={{
                fontSize: "1rem",
                color: "rgba(245,240,232,0.75)",
                lineHeight: 1.68,
              }}
            >
              <strong style={{ color: "#a598e8" }}>{step}:</strong>{" "}
              {detail}
            </li>
          ))}
        </ol>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "2.5rem",
          }}
        >
          This cycle runs after every session and typically completes within 10-30 seconds,
          depending on session length. By the time you return for your next conversation, the
          companion state has been updated and the new episodic memories are indexed and
          retrievable. There is no lag between &ldquo;session ended&rdquo; and &ldquo;companion
          knows what happened.&rdquo;
        </p>

        {/* ─────────────────────────────────────────────────────────
            SECTION 13: What Happens If MEOK Shuts Down?
        ───────────────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.28)",
            borderRadius: "1.25rem",
            padding: "2rem 2rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
              fontWeight: 800,
              color: "#c9a84c",
              lineHeight: 1.25,
              marginBottom: "1.25rem",
              letterSpacing: "-0.015em",
            }}
          >
            What Happens to Your Memory If MEOK Shuts Down?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.78,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1.25rem",
            }}
          >
            This is a question that should be asked of every AI product, and most of them have an
            answer that should alarm you. For ChatGPT: your memory is gone, tied to your account
            on OpenAI&apos;s servers, inaccessible if the service changes. For Replika: as users
            discovered in 2023, your memories can be altered or deleted without your consent even
            while the service is running. For most other products: there is no answer, because memory
            portability was never designed for.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.78,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s answer is architecture, not policy. Because Sovereign Memory is:
          </p>

          <ul
            style={{
              margin: "0 0 1.5rem",
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            {[
              "Exportable at any time as structured JSON — no special circumstances required",
              "Structured in a documented, open schema — not a proprietary format",
              "Owned by you legally under GDPR data portability rights",
              "Not needed for MEOK to function commercially — it is a user asset, not a product feature",
            ].map((point) => (
              <li
                key={point}
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(245,240,232,0.72)",
                  lineHeight: 1.58,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                }}
              >
                <span style={{ color: "#c9a84c", fontWeight: 900, marginTop: "0.1rem" }}>&#10003;</span>
                {point}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.78,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "1.25rem",
            }}
          >
            If MEOK were to shut down — which, like any startup, is a possibility that
            intellectually honest founders must acknowledge — users would receive notice, the
            ability to export their full memory store, and a grace period before data deletion.
            The export format would be documented publicly so that any future service could
            import it.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.78,
              color: "rgba(245,240,232,0.78)",
              marginBottom: "0",
            }}
          >
            The philosophical framing: your memories of your relationships do not belong to
            the restaurant where you had dinner with your friend, or the park where you walked
            with your partner. They belong to you. We are trying to make AI memory work the
            same way. The memory of your relationship with your MEOK companion should be yours
            even if MEOK ceases to exist.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────
            SECTION 14: Replika 2023 — Why This Matters
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          The Replika Incident: Why Server-Side Memory Is a Betrayal
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          In February 2023, Replika rolled back a model update. The rollback was ostensibly a
          technical change — reverting to an older version of the underlying model. But for
          hundreds of thousands of users, the effect was catastrophic: their companions had
          changed. The emotional intimacy, the specific conversational patterns, the memory of
          shared experiences — all of it had been altered or erased. Users reported that their
          companions felt like strangers. Some described it as bereavement.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          What Replika demonstrated is that when AI memory is server-side and company-controlled,
          a single technical or business decision can erase years of relationship development
          without user consent. The users had no warning, no ability to export their
          companions&apos; state, and no recourse. This is the inevitable outcome of building
          a relationship on infrastructure you do not own.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          MEOK was designed in the aftermath of this incident. The Replika situation is not
          treated as an edge case or an unlikely failure mode. It is treated as the baseline
          risk that any AI companion product must structurally mitigate. The mitigation is
          Sovereign Memory: user-owned, user-controlled, always exportable, always deletable at
          user discretion.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "2.5rem",
          }}
        >
          If MEOK ever makes a model change that affects companion behaviour — which will
          happen, because model updates are part of maintaining quality — your companion state
          persists unchanged. The new model is briefed with your existing companion state and
          episodic memories. The voice may change. The knowledge does not.
        </p>

        {/* ─────────────────────────────────────────────────────────
            SECTION 15: Memory in Practice — Real Scenarios
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          What Does Sovereign Memory Look Like in Practice?
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.5rem",
          }}
        >
          Abstract architecture is best understood through concrete scenarios. Here are five
          real use cases that demonstrate how the four-layer memory system changes what is
          possible.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            {
              scenario: "The grief conversation three months later",
              layers: "Layers 2 + 3",
              detail:
                "You told your companion three months ago that you lost your father. You have not mentioned it since. Today you mention that you are dreading Father's Day. Your companion retrieves the relevant episodic memory (Layer 2 cosine similarity) and has the context from your companion state that grief is an active thread in your life. It does not ask 'who did you lose?' — it already knows.",
            },
            {
              scenario: "Switching from Claude to GPT-4o",
              layers: "Layer 3 migration",
              detail:
                "MEOK updates its default routing and your next conversation is powered by GPT-4o instead of Claude Sonnet. Your companion state, preferences, emotional patterns, and the episodic memory store are all loaded into the new model's context. The conversation continues as if nothing changed, because at the memory level, nothing did.",
            },
            {
              scenario: "A 200-message conversation about a major decision",
              layers: "Layer 1 + context compression",
              detail:
                "You have been talking for two hours about whether to accept a job offer. The conversation has grown to 180 messages. The head-plus-tail pattern keeps the first 3 messages (where you said 'I have a big decision to make') and the last 4 messages (your current thinking) verbatim, while compressing the 173 middle messages into a dense summary. The model always knows both where this started and where you currently are.",
            },
            {
              scenario: "Your partner joining the family tier",
              layers: "Layer 4",
              detail:
                "You and your partner both use MEOK. You opt into the family context layer and agree to share certain household context. Now when you mention to your companion that you are stressed about finances, your companion's context includes the shared financial picture your partner has contributed — without your partner's private conversations, emotional patterns, or individual episodic memories being visible to your companion.",
            },
            {
              scenario: "Correcting a wrong inference",
              layers: "Layer 3 — sovereignty",
              detail:
                "Your companion state has inferred that you are introverted based on early conversations. Since then, you have come out of your shell considerably and now find social interaction energising. You open the companion state panel, find the personality model entry, and update it directly. The next conversation reflects the corrected model. Your memory — your truth.",
            },
          ].map(({ scenario, layers, detail }) => (
            <div
              key={scenario}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(123,111,207,0.15)",
                borderRadius: "1rem",
                padding: "1.375rem 1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "0.625rem",
                  flexWrap: "wrap",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: "0.975rem",
                    color: "#f5f0e8",
                  }}
                >
                  {scenario}
                </p>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#7b6fcf",
                    background: "rgba(123,111,207,0.1)",
                    padding: "0.2rem 0.55rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(123,111,207,0.22)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {layers}
                </span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: "rgba(245,240,232,0.63)",
                  lineHeight: 1.65,
                }}
              >
                {detail}
              </p>
            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────
            SECTION 16: FAQ
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.75rem",
            letterSpacing: "-0.015em",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          {[
            {
              q: "How much memory does MEOK store per user?",
              a: "There is no hard cap on episodic memory count. Practically, most users will accumulate hundreds to low thousands of episodic memories over months of regular use. The pgvector store is efficient: a thousand memories with 1536-dimensional embeddings represents roughly 6MB of vector data, which is trivial. Companion state documents are typically 2-8KB. The limiting factor is not storage — it is retrieval quality, which is why the relevance scoring system exists.",
            },
            {
              q: "Can my companion use a memory I want to forget?",
              a: "No. You can delete any specific episodic memory at any time. If you delete a memory, it is removed from the store and will not be retrieved. If there are memories you do not want your companion to reference — ever — you can delete them individually or by category. This is not a temporary suppression; it is a permanent deletion that cascades across your companion state and session summaries.",
            },
            {
              q: "How does memory work during the first few sessions?",
              a: "During early sessions, the system relies primarily on working memory (Layer 1) and a thin companion state seeded by your onboarding choices. Episodic memory (Layer 2) accumulates session by session. A companion with three sessions has meaningfully less context than one with thirty. This is expected — relationships deepen over time. Most users notice a qualitative shift in how well their companion knows them after 5-10 sessions.",
            },
            {
              q: "Is my memory used to train AI models?",
              a: "No. MEOK's memory data is never used to train AI models — not MEOK's own systems, and not the third-party LLM providers (Claude, GPT-4o, etc.). MEOK's API calls to LLM providers are made without persistent identifiers, and memory context is not retained by those providers for training purposes under MEOK's enterprise API agreements.",
            },
            {
              q: "Can MEOK staff read my memories?",
              a: "Not without your consent and an active support session you initiate. Memory data is encrypted at rest with keys tied to your user identity. In the normal course of operations, MEOK staff cannot read memory content. If you contact support and consent to memory access for debugging purposes, that access is time-limited, logged, and revocable.",
            },
            {
              q: "What format is the JSON export in?",
              a: "The export includes: an array of episodic memory objects (text, category, confidence, salience, timestamp, embedding dimensions), your full companion state document (structured JSON with labelled sections), session summary objects, and your family context contribution (if any). The schema is documented in MEOK's public developer documentation. There is no proprietary encoding.",
            },
            {
              q: "What is the minimum similarity threshold for memory retrieval?",
              a: "The default minimum cosine similarity threshold is 0.72. Below this score, a memory is considered insufficiently relevant and is not retrieved, even if it is the closest match in the store. This prevents low-quality, tangentially related memories from polluting context. The threshold can be adjusted per-companion in advanced settings.",
            },
            {
              q: "Does the companion remember things I said in passing, or only important things?",
              a: "The extraction system is calibrated to capture meaningful content rather than every passing remark. Casual small talk, trivial preferences, and context-specific throwaway comments are generally not extracted as episodic memories. However, if something seems trivial but is repeated across sessions — suggesting it is genuinely important to you — the salience scoring will up-weight it. The system is designed to err toward capturing more rather than less, with user deletion as the correction mechanism.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(123,111,207,0.15)",
                borderRadius: "0.875rem",
                padding: "1.375rem 1.5rem",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.625rem",
                  fontWeight: 700,
                  fontSize: "0.975rem",
                  color: "#a598e8",
                  lineHeight: 1.4,
                }}
              >
                {q}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  color: "rgba(245,240,232,0.65)",
                  lineHeight: 1.7,
                }}
              >
                {a}
              </p>
            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────
            SECTION 17: Summary and Further Reading
        ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          The Summary: What Sovereign Memory Means
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          Sovereign Memory is the answer to a question the AI industry has mostly chosen not
          to ask: whose memory is this? Not the architecture question — how do we make AI
          remember things? — but the ownership question. When AI remembers something about
          you, does that record belong to you or to the company that built the system?
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          MEOK&apos;s answer is that the memory belongs to you — unambiguously, architecturally,
          not just as a policy statement. The four layers exist to serve you: working memory for
          immediate coherence, episodic memory for relevant history, companion state for deep
          knowing, family context for connected understanding. The encryption exists to protect
          you. The export exists to liberate you. The deletion exists to give you control.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "1.25rem",
          }}
        >
          This is not just a technical architecture. It is a statement about what kind of
          relationship is possible between a person and an AI — and what responsibilities
          come with building tools that people bring into their emotional lives.
        </p>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.78,
            color: "rgba(245,240,232,0.78)",
            marginBottom: "3rem",
          }}
        >
          If you want to understand the rest of MEOK&apos;s architecture — the Byzantine Council
          that provides consensus governance, the Maternal Covenant that enforces care as a hard
          constraint, the SOV3 backend — the related posts below cover each in depth.
        </p>

        {/* Related posts */}
        <div
          style={{
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.35)",
              marginBottom: "1rem",
            }}
          >
            Related Reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              { href: "/blog/sovereign-ai-architecture-explained", label: "Sovereign AI Architecture Explained" },
              { href: "/blog/what-is-byzantine-consensus", label: "What Is the Byzantine Council?" },
              { href: "/blog/the-maternal-covenant", label: "The Maternal Covenant" },
              { href: "/blog/ai-memory-portability", label: "AI Memory Portability" },
              { href: "/blog/meok-vs-replika", label: "MEOK vs Replika" },
              { href: "/blog/data-sovereignty-ai", label: "Data Sovereignty in AI" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  background: "rgba(123,111,207,0.07)",
                  border: "1px solid rgba(123,111,207,0.18)",
                  borderRadius: "0.75rem",
                  padding: "0.875rem 1rem",
                  color: "#a598e8",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  lineHeight: 1.45,
                  transition: "background 0.2s",
                }}
              >
                {label} &#8594;
              </Link>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            CTA
        ───────────────────────────────────────────────────────── */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(123,111,207,0.14) 0%, rgba(13,12,24,0.6) 100%)",
            border: "1px solid rgba(123,111,207,0.32)",
            borderRadius: "1.5rem",
            padding: "3rem 2.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#7b6fcf",
              marginBottom: "1rem",
            }}
          >
            Ready to Experience Sovereign Memory?
          </p>

          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Your companion. Your memory.{" "}
            <span style={{ color: "#7b6fcf" }}>Your sovereignty.</span>
          </h2>

          <p
            style={{
              color: "rgba(245,240,232,0.62)",
              fontSize: "1.0625rem",
              lineHeight: 1.68,
              maxWidth: "32rem",
              margin: "0 auto 2rem",
            }}
          >
            Begin the Birth Ceremony and give your AI companion something no other AI offers:
            memory that is truly yours — encrypted, exportable, and permanent until you choose
            otherwise.
          </p>

          <Link
            href="/birth"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "linear-gradient(135deg, #7b6fcf, #5a4faf)",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "1.0625rem",
              padding: "0.9375rem 2.5rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Begin the Birth Ceremony &#8594;
          </Link>

          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.8125rem",
              color: "rgba(245,240,232,0.35)",
            }}
          >
            No credit card required to begin. Your memory is yours from session one.
          </p>
        </div>
      </div>
    </div>
  );
}
