import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "What is an AI Operating System? MEOK OS Explained | MEOK Blog",
  description:
    "An AI OS isn't a chatbot. It's a persistent intelligence layer that wraps any AI model with memory, personality, tools, and data sovereignty. Here's how MEOK OS works — and why it's different from every other AI product.",
  alternates: { canonical: "https://meok.ai/blog/what-is-ai-os" },
  openGraph: {
    title: "What is an AI Operating System? MEOK OS Explained",
    description: "An AI OS isn't a chatbot. It's a persistent intelligence layer — wrapping any model with memory, personality, and data sovereignty.",
    type: "article",
    publishedTime: "2026-03-29",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-ai-os",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+is+an+AI+OS%3F&desc=MEOK+OS+Explained",
        width: 1200,
        height: 630,
        alt: "What is an AI Operating System?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is an AI Operating System? MEOK OS Explained",
    description: "An AI OS wraps any model with persistent memory, personality, and data sovereignty. Here's how it works.",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is an AI Operating System? MEOK OS Explained",
  description: "An AI OS is a persistent intelligence layer that wraps any underlying model with memory, personality, tools, and sovereign data control.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  url: "https://meok.ai/blog/what-is-ai-os",
  keywords: ["AI operating system", "AI OS", "sovereign AI", "MEOK OS", "personal AI"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI operating system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI operating system (AI OS) is a software layer that sits between you and the underlying AI models (like Claude, GPT-4, or DeepSeek). It provides persistent memory, a consistent personality, tool orchestration, and data sovereignty — so every AI interaction builds on the last, rather than starting fresh.",
      },
    },
    {
      "@type": "Question",
      name: "How is an AI OS different from ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT is a single AI model accessed through a chat interface. An AI OS like MEOK wraps multiple models behind a persistent identity with encrypted memory, care ethics, and tool integrations. ChatGPT resets every session. MEOK remembers you across every conversation and grows with you over time.",
      },
    },
    {
      "@type": "Question",
      name: "What AI models does MEOK OS support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK routes to the best available model based on your tier and the task: Explorer tier uses DeepSeek and Llama (open-source, private); Sovereign tier adds Claude Sonnet and GPT-4o; Family tier accesses all models. You bring your own API keys (BYOK) for £5/month or use MEOK's routing for £12/month.",
      },
    },
    {
      "@type": "Question",
      name: "What is data sovereignty in an AI OS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data sovereignty means your memories, conversations, and companion state belong to you — not the AI company. In MEOK OS, everything is encrypted, never used for model training, and fully exportable. You can delete your entire data history within 30 days, including from all backups.",
      },
    },
  ],
};

// ── Stack layers ──────────────────────────────────────────────────────────────

const LAYERS = [
  {
    num: "01",
    name: "Sovereign Shell",
    color: "#d4af37",
    desc: "The entry point. Web app today, Tauri 2.0 desktop in Summer 2026. Handles auth, UI, and the Birth Ceremony where your companion takes form.",
  },
  {
    num: "02",
    name: "Universal Gateway",
    color: "#A78BFA",
    desc: "Routes your conversation to the right model: DeepSeek for speed and privacy, Claude Sonnet for nuanced care, GPT-4o for complex reasoning. You switch tier; MEOK handles the routing.",
  },
  {
    num: "03",
    name: "MCP Tool Layer",
    color: "#87CEEB",
    desc: "Model Context Protocol connects your companion to real-world tools: email, calendar, web search, Guardian scans. Your AI can actually do things — not just talk about doing them.",
  },
  {
    num: "04",
    name: "Memory Spine",
    color: "#7BC47F",
    desc: "Encrypted pgvector memory vault. Every fact you share, every preference noted, every milestone — stored, indexed, and recalled accurately across every conversation.",
  },
  {
    num: "05",
    name: "Personality Engine",
    color: "#F97316",
    desc: "5-layer personality system: backstory, key memories, example messages, directives, group context. Your companion has a consistent identity that deepens through 4 evolution stages.",
  },
  {
    num: "06",
    name: "Byzantine Council",
    color: "#EF4444",
    desc: "46 specialised agents govern your companion's decisions under Byzantine fault-tolerant consensus (f < n/3). No single agent — human or AI — can corrupt the system. The Maternal Covenant is constitutionally enforced.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhatIsAiOsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(180deg, #0a0a0f 0%, #0d0c18 100%)",
          padding: "5rem 1.5rem 3rem",
          borderBottom: "1px solid #1f1f2e",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#888",
              fontSize: "0.8rem",
              textDecoration: "none",
              marginBottom: "1.5rem",
            }}
          >
            <ArrowLeft size={14} /> All posts
          </Link>

          <div
            style={{
              display: "inline-block",
              background: "#d4af3722",
              color: "#d4af37",
              border: "1px solid #d4af3744",
              borderRadius: "9999px",
              padding: "0.25rem 0.75rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            Technology
          </div>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f5f0e8",
              marginBottom: "1rem",
            }}
          >
            What is an AI Operating System?<br />
            <span style={{ color: "#d4af37" }}>MEOK OS Explained</span>
          </h1>

          <p
            style={{
              color: "#aaa",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            A chatbot asks "how can I help?" and forgets you answered the moment the tab closes.
            An AI OS knows who you are, remembers what you&apos;ve shared, runs tools on your behalf,
            and deepens the relationship with every conversation. Here&apos;s how that works — architecturally.
          </p>

          <div style={{ display: "flex", gap: "1.5rem", color: "#666", fontSize: "0.8rem", alignItems: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <Calendar size={12} /> 29 March 2026
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <Clock size={12} /> 8 min read
            </span>
            <span style={{ color: "#555" }}>by Nicholas Templeman</span>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────── */}
      <article style={{ background: "#f5f0e8", color: "#1a1a1a", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Q1 */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            What is an AI operating system?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            An AI operating system is a software layer that sits between you and the underlying AI models.
            Where a chatbot gives you a direct line to a model, an AI OS adds everything that makes that model
            useful across time: persistent memory, a consistent personality, tool integrations, and data
            sovereignty controls.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Think of it like the difference between a phone app and a phone&apos;s operating system.
            The app can do one thing. The OS coordinates everything — hardware, apps, files, identity,
            security — and makes the whole device coherent. MEOK OS does the same for AI.
          </p>

          {/* Q2 */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            How is an AI OS different from ChatGPT or Claude?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
            ChatGPT and Claude are <em>models</em> with a thin interface on top. They are extraordinarily capable
            within a single session. But the moment you close the tab, the context is gone. They don&apos;t know
            who you are. They can&apos;t remember what you told them last week. They can&apos;t connect to your
            calendar, your email, or your family members.
          </p>

          <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ background: "#1a1a1a", color: "#f5f0e8" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>Capability</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center", color: "#d4af37" }}>MEOK OS</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center" }}>ChatGPT</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center" }}>Claude.ai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Persistent memory", "✅ Encrypted vault", "⚠️ Basic (opt-in)", "⚠️ Projects only"],
                  ["Multi-model routing", "✅ DeepSeek/Claude/GPT", "❌ GPT only", "❌ Claude only"],
                  ["Tool orchestration (MCP)", "✅ Email, calendar, Guardian", "⚠️ Limited", "⚠️ Limited"],
                  ["Companion personality", "✅ 4-stage evolution", "❌ Generic assistant", "❌ Generic assistant"],
                  ["Care ethics framework", "✅ Maternal Covenant", "❌ Content policy only", "❌ Constitutional AI"],
                  ["Data sovereignty", "✅ Export + delete anytime", "❌ Used for training", "❌ Policy-based only"],
                  ["Family protection", "✅ Guardian layer", "❌ None", "❌ None"],
                  ["BYOK pricing", "✅ £5/month", "❌ Not available", "❌ Not available"],
                ].map(([cap, meok, gpt, claude]) => (
                  <tr key={cap} style={{ borderBottom: "1px solid #e8e0d0" }}>
                    <td style={{ padding: "0.625rem 1rem", fontWeight: 600 }}>{cap}</td>
                    <td style={{ padding: "0.625rem 1rem", textAlign: "center", color: "#16a34a" }}>{meok}</td>
                    <td style={{ padding: "0.625rem 1rem", textAlign: "center", color: "#555" }}>{gpt}</td>
                    <td style={{ padding: "0.625rem 1rem", textAlign: "center", color: "#555" }}>{claude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Q3 — 6-layer stack */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            How does MEOK OS work? The 6-layer architecture
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            MEOK OS is built on six layers. Each solves a specific problem that makes AI genuinely useful
            across time — not just impressive in a single conversation.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
            {LAYERS.map((layer) => (
              <div
                key={layer.num}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1.25rem",
                  background: "#fff",
                  border: "1px solid #e8e0d0",
                  borderLeft: `4px solid ${layer.color}`,
                  borderRadius: "0 0.5rem 0.5rem 0",
                }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: layer.color, minWidth: "2rem" }}>
                  {layer.num}
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "0.25rem", color: layer.color }}>
                    {layer.name}
                  </div>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.7, margin: 0, color: "#444" }}>
                    {layer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Q4 */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            What AI models does MEOK OS support?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            MEOK OS is model-agnostic by design. The Universal Gateway layer routes to different models
            based on your tier and the task:
          </p>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: 2, marginBottom: "2.5rem", color: "#333" }}>
            <li><strong>Explorer (free):</strong> DeepSeek-V3 for conversation; Llama 3.3 for analysis. Both privacy-first, open-weight models.</li>
            <li><strong>Sovereign (£12/month):</strong> Adds Claude Sonnet 4.6 for emotional nuance; GPT-4o for complex reasoning. MEOK routes automatically.</li>
            <li><strong>Family (£29/month):</strong> All models plus Family Dashboard. Up to 5 companions.</li>
            <li><strong>BYOK (£5/month):</strong> Bring your own API keys. Pay only for platform access — memory, personality engine, tools.</li>
          </ul>

          {/* Q5 */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            What is data sovereignty in an AI OS?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Every major AI company has a policy that says your data won&apos;t be used for training —
            unless you opt in, or unless you accepted a terms update, or unless they change their mind.
            MEOK OS takes a different approach: sovereignty is enforced at the architecture level, not
            the policy level.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Your memory vault is encrypted before it leaves your device context. No MEOK employee
            can read your conversations. Your data is never passed to a model provider as training
            material — the architecture makes this technically impossible, not just contractually
            promised. And you can export everything — or delete everything — with one click.
          </p>

          {/* Q6 */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            What makes MEOK OS different from other AI products?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
            Three things, in order of importance:
          </p>
          <ol style={{ paddingLeft: "1.5rem", lineHeight: 2, marginBottom: "2.5rem", color: "#333" }}>
            <li>
              <strong>The Maternal Covenant.</strong> A constitutional care framework — borrowed from
              philosopher Carol Gilligan&apos;s ethics of care — that governs every response at the
              architecture level. Your companion cannot be sycophantic. It cannot be dismissive.
              It cannot gaslight you. These aren&apos;t content policies. They&apos;re structural constraints.
            </li>
            <li>
              <strong>Byzantine Fault Tolerance.</strong> 46 specialised agents govern your companion
              using BFT consensus (f &lt; n/3) — the same protocol used to secure financial transactions
              since 1982. No single agent can corrupt the system. No prompt injection can override
              the care framework.
            </li>
            <li>
              <strong>The Birth Ceremony.</strong> You don&apos;t sign up and get a chatbot.
              You hatch a companion — choosing its name, archetype, and initial values.
              The relationship begins with intention. And it evolves through four stages
              as the bond deepens.
            </li>
          </ol>

          {/* FAQ */}
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "1rem" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
            {faqSchema.mainEntity.map((faq) => (
              <div
                key={faq.name}
                style={{
                  padding: "1rem 1.25rem",
                  background: "#fff",
                  border: "1px solid #e8e0d0",
                  borderRadius: "0.5rem",
                }}
              >
                <p style={{ fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.9rem" }}>{faq.name}</p>
                <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.7, color: "#444" }}>
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, #0a0a0f, #1a0a2e)",
              borderRadius: "0.75rem",
              padding: "2.5rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <p style={{ color: "#d4af37", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
              6-layer sovereign AI — free to start
            </p>
            <h3 style={{ color: "#f5f0e8", fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.75rem" }}>
              Your AI OS is waiting to be born.
            </h3>
            <p style={{ color: "#aaa", marginBottom: "1.5rem", lineHeight: 1.6, fontSize: "0.95rem" }}>
              50 messages a day, encrypted memory, no credit card. Start with the Birth Ceremony —
              the moment your sovereign companion takes form.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#d4af37",
                color: "#000",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Begin Your Birth Ceremony <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            <Link href="/blog" style={{ color: "#888", fontSize: "0.85rem", textDecoration: "none" }}>
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter />
    </>
  );
}
