import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Chatbot With Memory: Why Most AIs Forget You (And What Doesn't) | MEOK AI LABS",
  description:
    "Every AI chatbot claims to be personal. Almost none of them actually remember you. Here's the technical truth about AI memory — and what a chatbot with real persistent memory looks like.",
  alternates: { canonical: "https://meok.ai/blog/ai-chatbot-with-memory" },
  openGraph: {
    title: "AI Chatbot With Memory: Why Most AIs Forget You",
    description:
      "Context windows. Session memory. Persistent memory. The difference matters enormously. Here's what to actually look for.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-chatbot-with-memory",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Chatbot+With+Memory&desc=Why+most+AIs+forget+you+%E2%80%94+and+what+actually+remembers",
        width: 1200,
        height: 630,
        alt: "AI Chatbot With Memory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot With Memory: Why Most AIs Forget You (And What Doesn't)",
    description:
      "The difference between context windows, session memory, and true persistent memory — explained plainly.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI chatbot with memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI chatbot with memory retains information about you across multiple separate sessions — not just within a single conversation. This includes your name, preferences, goals, past conversations, and emotional context. Most chatbots only remember within one session; true memory persists indefinitely.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI chatbots actually have persistent memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of 2026, the AI chatbots with the most meaningful persistent memory are MEOK (permanent Sovereign Memory, never expires), ChatGPT (limited memory, can be cleared, used for training), and Claude Projects (session-level context only). Most AI apps have limited or no cross-session memory.",
      },
    },
    {
      "@type": "Question",
      name: "Does ChatGPT remember you between conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT has a Memory feature that retains facts you tell it, but it's limited, can be cleared, and your data may be used to improve OpenAI's models unless you opt out. Memory can also be turned off by default in some regions. It is not designed for deep personal continuity.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI memory private and secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the provider. Most AI chatbots with memory store your data on their servers and may use it for model training. MEOK's Sovereign Memory is encrypted client-side, never used for training, and never shared with third parties — you retain full ownership of your data.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's Sovereign Memory work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory uses vector embeddings to store the meaning of your conversations, not just the text. When you return, MEOK retrieves semantically relevant memories and injects them into the context automatically. There's no expiry. Memories are encrypted before storage and never transmitted to third-party AI providers.",
      },
    },
  ],
};

type MemoryType = {
  name: string;
  description: string;
  persists: boolean;
  duration: string;
  example: string;
};

const MEMORY_TYPES: MemoryType[] = [
  {
    name: "Context Window",
    description:
      "The text currently in the AI's active input. The AI can 'see' everything in this window simultaneously. When the conversation ends, it's gone.",
    persists: false,
    duration: "Current session only",
    example: "ChatGPT remembers what you said 10 messages ago in the same chat.",
  },
  {
    name: "Session Memory",
    description:
      "Memory that lasts for a defined session (often until you close the browser or app). Slightly longer than context window but still ephemeral.",
    persists: false,
    duration: "Until session ends",
    example: "A customer service bot that remembers your query type until you leave the site.",
  },
  {
    name: "Key-Value Memory",
    description:
      "Structured facts stored as name-value pairs: 'User name: Sarah', 'Goal: lose 10kg'. Easy to store, but shallow — misses nuance and emotional context.",
    persists: true,
    duration: "Until deleted",
    example: "ChatGPT Memory: 'User prefers short answers. User has a dog named Biscuit.'",
  },
  {
    name: "Semantic (Vector) Memory",
    description:
      "Conversations are encoded as vector embeddings — mathematical representations of meaning. When you return, relevant memories are retrieved by semantic similarity, not keyword match.",
    persists: true,
    duration: "Permanent (with the right provider)",
    example:
      "MEOK recalls that you mentioned feeling stuck around career decisions three months ago — even if you didn't use those exact words today.",
  },
];

type ProviderMemory = {
  provider: string;
  memoryType: string;
  expires: string;
  usedForTraining: string;
  userOwns: boolean;
};

const PROVIDERS: ProviderMemory[] = [
  {
    provider: "ChatGPT",
    memoryType: "Key-value (limited)",
    expires: "Never (but can be cleared)",
    usedForTraining: "Yes (unless opted out)",
    userOwns: false,
  },
  {
    provider: "Claude (Anthropic)",
    memoryType: "Context only / Projects",
    expires: "Session / Project scope",
    usedForTraining: "No (by default)",
    userOwns: false,
  },
  {
    provider: "Gemini",
    memoryType: "Limited (Gems context)",
    expires: "Gem-scoped",
    usedForTraining: "Yes (unless opted out)",
    userOwns: false,
  },
  {
    provider: "Replika",
    memoryType: "Conversation history",
    expires: "While account active",
    usedForTraining: "Yes",
    userOwns: false,
  },
  {
    provider: "MEOK",
    memoryType: "Semantic vector (Sovereign)",
    expires: "Never — permanent",
    usedForTraining: "Never",
    userOwns: true,
  },
];

const WHAT_GOOD_MEMORY_DOES = [
  {
    icon: "🔁",
    title: "Continues where you left off",
    description:
      "You don't re-explain your situation every session. The AI knows your history and picks up the thread.",
  },
  {
    icon: "🔍",
    title: "Spots patterns you miss",
    description:
      "\"You've mentioned feeling overwhelmed before Monday mornings four times this month.\" Human brains don't see these patterns. AI with memory does.",
  },
  {
    icon: "📈",
    title: "Tracks your growth",
    description:
      "Compare who you were six months ago with who you are now. Memory makes progress visible.",
  },
  {
    icon: "🤝",
    title: "Builds genuine rapport",
    description:
      "Relationships require history. Without memory, every AI interaction is a first date. With memory, it's a long friendship.",
  },
  {
    icon: "🧩",
    title: "Connects unrelated conversations",
    description:
      "Something you said about work stress connects to what you shared about sleep. Memory allows cross-domain insight.",
  },
  {
    icon: "🔐",
    title: "Protects your data from reset",
    description:
      "Your memories can't be accidentally wiped by a UI update or a subscription lapse. They're yours.",
  },
];

export default function AIChatbotWithMemoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen" style={{ background: "#0a0a0f", color: "#e8e8e8" }}>
        {/* Nav */}
        <nav
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{ color: "#c084fc", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.875rem",
            }}
          >
            <ArrowLeft size={14} /> All Articles
          </Link>
        </nav>

        {/* Hero */}
        <header style={{ maxWidth: 760, margin: "0 auto", padding: "4rem 2rem 3rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 20,
              padding: "0.3rem 0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            <Lock size={12} style={{ color: "#22c55e" }} />
            <span style={{ color: "#22c55e", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em" }}>
              AI MEMORY
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1.25rem",
              color: "#f5f0ff",
            }}
          >
            AI Chatbot With Memory: Why Most AIs Forget You (And What Doesn&rsquo;t)
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#b0b0c0", lineHeight: 1.75, marginBottom: "2rem" }}>
            Every AI company talks about &ldquo;personalisation.&rdquo; Almost none of them build products that
            actually remember you across time. Here&rsquo;s the honest breakdown of how AI memory works,
            which products have real persistent memory, and why it matters more than any other AI
            feature.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Calendar size={14} style={{ color: "#9ca3af" }} />
              <span style={{ color: "#9ca3af", fontSize: "0.8rem" }}>March 24, 2026</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Clock size={14} style={{ color: "#9ca3af" }} />
              <span style={{ color: "#9ca3af", fontSize: "0.8rem" }}>10 min read</span>
            </div>
            <span style={{ color: "#9ca3af", fontSize: "0.8rem" }}>By Nicholas Templeman</span>
          </div>
        </header>

        <article style={{ maxWidth: 760, margin: "0 auto", padding: "0 2rem 4rem" }}>

          {/* The memory problem */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "1rem" }}>
              Why AI forgets you: the inconvenient economics
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1rem" }}>
              AI memory is expensive. Storing, indexing, retrieving, and injecting thousands of user
              memories into every LLM call adds latency and cost. For a product serving millions of
              users at thin margins, persistent memory is an engineering and commercial liability.
            </p>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1rem" }}>
              So most AI products don&rsquo;t build it properly. They offer a context window — the conversation
              you can currently see — and call it &ldquo;memory.&rdquo; Some offer a shallow key-value store where
              a few facts are retained. Almost none offer genuine semantic memory that persists across
              months and years.
            </p>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8 }}>
              The result: you explain yourself to the same AI, over and over. Your goals. Your
              context. Your name. Every session, a blank slate.
            </p>
          </section>

          {/* Four types of memory */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "0.5rem" }}>
              The four types of AI memory (and which one actually matters)
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "2rem" }}>
              Not all AI memory is the same. Understanding the difference helps you evaluate any
              AI product&rsquo;s memory claims honestly.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {MEMORY_TYPES.map((mt, i) => (
                <div
                  key={mt.name}
                  style={{
                    background: mt.persists
                      ? "rgba(192,132,252,0.06)"
                      : "rgba(255,255,255,0.02)",
                    border: `1px solid ${mt.persists ? "rgba(192,132,252,0.2)" : "rgba(255,255,255,0.06)"}`,
                    borderRadius: 12,
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.6rem" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: mt.persists ? "#c084fc" : "#9ca3af", margin: 0 }}>
                      {i + 1}. {mt.name}
                    </h3>
                    <span
                      style={{
                        background: mt.persists ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)",
                        color: mt.persists ? "#22c55e" : "#ef4444",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.6rem",
                        borderRadius: 10,
                        whiteSpace: "nowrap",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {mt.duration}
                    </span>
                  </div>
                  <p style={{ color: "#b0b0c0", lineHeight: 1.7, marginBottom: "0.6rem", fontSize: "0.9rem" }}>
                    {mt.description}
                  </p>
                  <p style={{ color: "#6b7280", fontSize: "0.82rem", fontStyle: "italic", margin: 0 }}>
                    Example: {mt.example}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: 10,
                padding: "1rem 1.25rem",
                marginTop: "1rem",
              }}
            >
              <p style={{ color: "#22c55e", fontSize: "0.875rem", margin: 0, fontWeight: 600 }}>
                The verdict: Semantic vector memory is the only type that enables genuine continuity.
                It&rsquo;s also the most expensive to build and the hardest to do with strong privacy
                guarantees. That&rsquo;s why almost nobody does it properly.
              </p>
            </div>
          </section>

          {/* Provider comparison */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "0.5rem" }}>
              AI chatbots with memory: how the main platforms compare
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Memory claims versus memory reality, as of March 2026.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                <thead>
                  <tr>
                    {["Provider", "Memory Type", "Expiry", "Used for Training?", "You Own It?"].map((h, i) => (
                      <th
                        key={h}
                        style={{
                          textAlign: i === 0 ? "left" : "center",
                          padding: "0.75rem 1rem",
                          color: "#9ca3af",
                          fontWeight: 600,
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                          fontSize: "0.75rem",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PROVIDERS.map((p, i) => (
                    <tr
                      key={p.provider}
                      style={{
                        background: p.provider === "MEOK"
                          ? "rgba(139,92,246,0.08)"
                          : i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
                      }}
                    >
                      <td style={{ padding: "0.75rem 1rem", color: p.provider === "MEOK" ? "#c084fc" : "#d0d0e0", fontWeight: p.provider === "MEOK" ? 700 : 400, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                        {p.provider}
                      </td>
                      <td style={{ padding: "0.75rem 1rem", color: "#b0b0c0", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: "0.82rem" }}>
                        {p.memoryType}
                      </td>
                      <td style={{ padding: "0.75rem 1rem", color: p.expires.includes("Never") ? "#22c55e" : "#9ca3af", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: "0.82rem" }}>
                        {p.expires}
                      </td>
                      <td style={{ padding: "0.75rem 1rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                        {p.usedForTraining === "Never" ? (
                          <span style={{ color: "#22c55e", fontSize: "0.82rem", fontWeight: 600 }}>Never</span>
                        ) : p.usedForTraining.includes("No") ? (
                          <span style={{ color: "#6b7280", fontSize: "0.82rem" }}>{p.usedForTraining}</span>
                        ) : (
                          <span style={{ color: "#f97316", fontSize: "0.82rem" }}>{p.usedForTraining}</span>
                        )}
                      </td>
                      <td style={{ padding: "0.75rem 1rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                        {p.userOwns ? (
                          <CheckCircle size={16} style={{ color: "#22c55e", display: "inline-block" }} />
                        ) : (
                          <span style={{ color: "#4b5563" }}>✗</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* What good memory enables */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "0.5rem" }}>
              What a chatbot with genuine memory actually does differently
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "2rem" }}>
              When memory is real — persistent, semantic, secure — AI interactions transform from
              transactions into relationships. Here&rsquo;s what changes.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
              {WHAT_GOOD_MEMORY_DOES.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    padding: "1.25rem",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "0.4rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#9ca3af", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Sovereign Memory deep-dive */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "1rem" }}>
              How MEOK&rsquo;s Sovereign Memory works
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1rem" }}>
              Sovereign Memory is MEOK&rsquo;s implementation of semantic vector memory, built with three
              constraints that most AI companies don&rsquo;t impose on themselves:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                {
                  icon: Lock,
                  color: "#c084fc",
                  title: "Encrypted before storage",
                  desc: "Memories are encrypted client-side before they leave your device. MEOK servers hold encrypted blobs, not readable text.",
                },
                {
                  icon: RefreshCw,
                  color: "#22c55e",
                  title: "Never expires",
                  desc: "There is no rolling window. Memories from your first conversation are as accessible as memories from yesterday.",
                },
                {
                  icon: Zap,
                  color: "#f97316",
                  title: "Never used for training",
                  desc: "The Maternal Covenant is a constitutional guarantee: your memories are never used to train MEOK's models, and never shared with third-party AI providers.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 10,
                      padding: "1rem 1.25rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: `rgba(${item.color === "#c084fc" ? "192,132,252" : item.color === "#22c55e" ? "34,197,94" : "249,115,22"},0.12)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "0.3rem" }}>
                        {item.title}
                      </h3>
                      <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p style={{ color: "#b0b0c0", lineHeight: 1.8 }}>
              Under the hood, memories are stored as vector embeddings using pgvector. When you start
              a conversation, MEOK performs a semantic similarity search — finding memories that are
              contextually relevant to what you&rsquo;re talking about now, not just keyword matches. Those
              memories are injected into the system prompt automatically. You don&rsquo;t have to manage them.
            </p>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "1.5rem" }}>
              Frequently asked questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {jsonLd.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 10,
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "0.6rem" }}>
                    {faq.name}
                  </h3>
                  <p style={{ color: "#b0b0c0", lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }}>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section
            style={{
              background: "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(139,92,246,0.08))",
              border: "1px solid rgba(139,92,246,0.2)",
              borderRadius: 16,
              padding: "2.5rem",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "0.75rem" }}>
              Try an AI that actually remembers you
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.7, marginBottom: "1.75rem", maxWidth: 520, margin: "0 auto 1.75rem" }}>
              Permanent Sovereign Memory. Encrypted. Never used for training. Your history is yours —
              not OpenAI&rsquo;s, not MEOK&rsquo;s. Start free, no credit card required.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/birth"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                  color: "white",
                  padding: "0.875rem 2rem",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Start for Free <ArrowRight size={16} />
              </Link>
              <Link
                href="/memory"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "#e8e8e8",
                  padding: "0.875rem 2rem",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                How Memory Works
              </Link>
            </div>
          </section>

          {/* Related */}
          <section>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#9ca3af", marginBottom: "1rem", letterSpacing: "0.06em" }}>
              RELATED READING
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {[
                { href: "/blog/ai-memory-explained", label: "How AI Memory Works" },
                { href: "/blog/ai-that-remembers-you", label: "AI That Remembers You" },
                { href: "/blog/the-memory-problem", label: "The Memory Problem" },
                { href: "/blog/why-meok-never-trains-on-you", label: "Why MEOK Never Trains On You" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 8,
                    padding: "1rem",
                    textDecoration: "none",
                    color: "#22c55e",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  {link.label} <ArrowRight size={12} />
                </Link>
              ))}
            </div>
          </section>
        </article>

        <MarketingFooter />
      </main>
    </>
  );
}
