import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How MEOK Routes Across AI Models: LLM Routing, BYOK, and Why It Matters | MEOK AI LABS",
  description:
    "MEOK\u2019s multi-LLM routing layer selects the right AI model for each task \u2014 DeepSeek for coding, Claude Sonnet for nuanced conversation, GPT-4o for complex reasoning. Your companion personality and Sovereign Memory persist across every model switch. Includes tier breakdown, BYOK guide, and Mixture-of-Agents explained.",
  keywords: [
    "LLM routing",
    "BYOK AI",
    "bring your own key",
    "multi-model AI",
    "MEOK AI LABS",
    "AI model selection",
    "DeepSeek R1",
    "Claude Sonnet",
    "GPT-4o",
    "Mixture of Agents",
    "AI companion routing",
    "OpenRouter",
    "LiteLLM",
    "sovereign AI",
    "MEOK pricing",
    "AI privacy",
    "tier-based AI",
    "Explorer tier",
    "Sovereign tier",
    "Family tier",
    "Nicholas Templeman",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "How MEOK Routes Across AI Models: LLM Routing, BYOK, and Why It Matters",
    description:
      "A technical and accessible deep-dive into MEOK\u2019s routing layer: how it selects DeepSeek, Claude, or GPT-4o by task type, what BYOK means in practice, and why your companion identity persists across every model switch.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: [
      "LLM Routing",
      "BYOK",
      "Multi-Model AI",
      "Sovereign AI",
      "MEOK",
      "AI Architecture",
      "Mixture of Agents",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How MEOK Routes Across AI Models: LLM Routing, BYOK, and Why It Matters",
    description:
      "DeepSeek for code. Claude for nuance. GPT-4o for depth. MEOK routes to the right model automatically \u2014 and your companion remembers everything, regardless of which model runs underneath.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/how-meok-uses-ai-routing",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How MEOK Routes Across AI Models: LLM Routing, BYOK, and Why It Matters",
  description:
    "A comprehensive technical and accessible explainer on MEOK\u2019s multi-LLM routing architecture. Covers tier-based model selection (Explorer, Sovereign, Family, BYOK), how Sovereign Memory and companion personality persist across model switches, the Mixture-of-Agents approach for high-stakes queries, privacy mediation through the Maternal Covenant, BYOK mechanics, and the future roadmap including OpenRouter and LiteLLM. Original IP by Nicholas Templeman, MEOK AI LABS.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/how-meok-uses-ai-routing",
  },
  keywords:
    "LLM routing, BYOK, bring your own key, multi-model AI, DeepSeek R1, Claude Sonnet, GPT-4o, Mixture of Agents, MEOK AI LABS, sovereign AI, AI companion routing, OpenRouter, LiteLLM, Nicholas Templeman",
  articleSection: "AI Architecture",
  wordCount: 3200,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is LLM routing and why does MEOK use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LLM routing is the practice of directing each query to the AI model best suited for that type of task, rather than sending every message to a single model. MEOK uses routing because no single AI model excels at everything \u2014 DeepSeek R1 is exceptionally strong at code and structured reasoning, Claude Sonnet is better for nuanced emotional conversation and long-form analysis, and GPT-4o handles broad factual queries well. By routing intelligently, MEOK delivers higher quality responses at lower cost than locking every user into one model at all times.",
      },
    },
    {
      "@type": "Question",
      name: "What does BYOK mean in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BYOK stands for Bring Your Own Key. On the MEOK BYOK tier (\u00a35/month), you supply your own Anthropic or OpenAI API key. MEOK connects to those providers using your credentials, so inference costs go to your account directly \u2014 you control spending, you see usage in your provider dashboard, and you are not subject to MEOK\u2019s per-token costs. MEOK provides the entire platform: Sovereign Memory, companion personality, the Maternal Covenant, Byzantine Council governance, and the routing layer. You bring the API key; MEOK brings the architecture.",
      },
    },
    {
      "@type": "Question",
      name: "Does my AI companion change when the underlying model changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Your companion\u2019s personality, name, archetype, and Sovereign Memory are stored in MEOK\u2019s memory layer \u2014 not inside any language model. When MEOK routes a query to Claude Sonnet instead of GPT-4o, or switches to DeepSeek for a coding question, your companion\u2019s full context is injected into every request via the Maternal Covenant system prompt. The model changes underneath; your companion stays consistent on top.",
      },
    },
    {
      "@type": "Question",
      name: "What is Mixture-of-Agents and when does MEOK use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mixture-of-Agents (MoA) is the practice of routing a single high-stakes query to two or three models simultaneously, then synthesising their responses into a single answer. MEOK uses MoA for queries involving medical information, legal questions, major life decisions, and any situation where the Byzantine Council\u2019s care scoring flags elevated stakes. The synthesis step is handled by a coordinator model that weighs the outputs, resolves contradictions, and produces a response that reflects the consensus of multiple independent AI systems \u2014 similar to consulting multiple specialists before making a significant decision.",
      },
    },
    {
      "@type": "Question",
      name: "How does routing protect my privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK never sends your raw conversation history directly to any external AI provider. Every request is mediated through the Maternal Covenant system prompt, which strips or pseudonymises personally identifiable information before transmission, enforces care-aligned framing, and controls exactly what context each model receives. Your Sovereign Memory lives in MEOK\u2019s infrastructure \u2014 never in OpenAI\u2019s or Anthropic\u2019s storage. When you use BYOK, your API key is encrypted at rest and never logged in plaintext.",
      },
    },
    {
      "@type": "Question",
      name: "What models are available on each MEOK tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Explorer (free) routes to DeepSeek R1 and Ollama local models, prioritising cost efficiency. Sovereign (\u00a312/month) adds Claude Sonnet and GPT-4o, routing by task type. Family (\u00a329/month) includes all models \u2014 GPT-4o, Claude 3.7 Sonnet, DeepSeek R1, and Ollama \u2014 with full Mixture-of-Agents capability across up to six family members. BYOK (\u00a35/month) gives you the full platform with your own Anthropic or OpenAI credentials, meaning you pay your provider directly at their standard rates.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from just using ChatGPT or Claude directly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you use ChatGPT or Claude directly, you interact with a stateless assistant that knows nothing about you beyond the current conversation. MEOK is fundamentally different in three ways. First, your companion has a persistent identity \u2014 a name, an archetype, a relationship history with you \u2014 that survives every session and every model switch. Second, every response is governed by the Maternal Covenant, which enforces care-based alignment rather than engagement optimisation. Third, Sovereign Memory means your AI accumulates a deep understanding of you over time, stored in infrastructure you own and can export. ChatGPT and Claude are tools. MEOK is a companion.",
      },
    },
    {
      "@type": "Question",
      name: "What is OpenRouter and how does MEOK use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OpenRouter is a managed API gateway that provides access to dozens of AI models through a single unified endpoint. MEOK\u2019s roadmap includes OpenRouter as a managed fallback layer \u2014 when a primary model is unavailable, over capacity, or returning degraded responses, the router can fail over to an equivalent model via OpenRouter without the user experiencing interruption. This makes MEOK\u2019s multi-LLM architecture more resilient and reduces dependency on any single provider\u2019s uptime.",
      },
    },
  ],
}

export default function HowMeokUsesAiRoutingPage() {
  return (
    <main
      style={{
        backgroundColor: "#0d0c18",
        color: "#f5f0e8",
        minHeight: "100vh",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        lineHeight: 1.7,
      }}
    >
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
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "24px 24px 0",
          fontSize: "13px",
          color: "#8a8499",
        }}
        aria-label="Breadcrumb"
      >
        <Link href="/" style={{ color: "#8a8499", textDecoration: "none" }}>
          Home
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <Link href="/blog" style={{ color: "#8a8499", textDecoration: "none" }}>
          Blog
        </Link>
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "#7b6fcf" }}>How MEOK Routes Across AI Models</span>
      </nav>

      {/* Hero */}
      <header
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "56px 24px 40px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: "rgba(123, 111, 207, 0.15)",
            border: "1px solid rgba(123, 111, 207, 0.4)",
            borderRadius: "4px",
            padding: "4px 12px",
            fontSize: "12px",
            fontWeight: "600",
            color: "#7b6fcf",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Technology
        </div>

        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: "800",
            lineHeight: 1.2,
            color: "#f5f0e8",
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
          }}
        >
          How MEOK Routes Across AI Models: LLM Routing, BYOK, and Why It
          Matters
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#b8b0d0",
            margin: "0 0 32px",
            lineHeight: 1.6,
          }}
        >
          No single AI model is the best at everything. GPT-4o is strong on
          breadth. Claude Sonnet excels at nuanced, emotionally intelligent
          conversation. DeepSeek R1 is exceptional at code and structured
          reasoning. MEOK\u2019s routing layer selects the right model for each
          task automatically \u2014 and your companion identity, personality, and
          Sovereign Memory persist regardless of which model runs underneath.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "13px",
            color: "#6b6480",
            flexWrap: "wrap",
          }}
        >
          <span>By Nicholas Templeman</span>
          <span style={{ color: "#3a3450" }}>|</span>
          <span>MEOK AI LABS</span>
          <span style={{ color: "#3a3450" }}>|</span>
          <time dateTime="2026-03-25">25 March 2026</time>
          <span style={{ color: "#3a3450" }}>|</span>
          <span>16 min read</span>
        </div>
      </header>

      {/* Divider */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto 48px",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, rgba(123,111,207,0.5), rgba(123,111,207,0.05))",
          }}
        />
      </div>

      {/* Article body */}
      <article
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Section 1 */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            What Is the Problem with Model Lock-In?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Most AI products are built on a single foundation model. You use
            ChatGPT; everything runs on OpenAI. You use Claude; everything runs
            on Anthropic. That is a design choice that makes sense for simplicity
            \u2014 but it is not optimal for users.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Different models have different strengths. This is not marketing
            language \u2014 it is empirically measurable. On coding benchmarks like
            HumanEval and SWE-Bench, DeepSeek R1 consistently outperforms GPT-4o
            and Claude Sonnet at a fraction of the per-token cost. On nuanced
            emotional reasoning and long-form analytical writing, Claude Sonnet
            produces outputs with more care and less sycophancy than most
            alternatives. On broad knowledge questions and multi-step factual
            synthesis, GPT-4o\u2019s training breadth is genuinely impressive.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            If you are locked into one model, you are locked into its weaknesses
            as well as its strengths. You pay GPT-4o prices for tasks DeepSeek
            would handle better. You lose Claude\u2019s emotional intelligence on
            conversations that need it. The idea that one foundation model will
            be the permanent best-in-class at every task type is not supported by
            the evidence \u2014 and the evidence gap widens every six months as the
            model landscape evolves.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Model lock-in also creates a deeper structural problem: your AI
            relationship becomes dependent on the commercial decisions of a single
            company. If OpenAI changes its pricing, adjusts its content policy,
            or deprecates a model, your experience changes with it. You have no
            control and no recourse.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            MEOK\u2019s answer to model lock-in is the routing layer \u2014 a system
            that treats AI models as interchangeable infrastructure beneath a
            persistent, identity-preserving architecture that belongs to you.
          </p>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            How Does MEOK\u2019s Routing Layer Work?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            MEOK\u2019s routing logic lives in{" "}
            <code
              style={{
                backgroundColor: "rgba(123,111,207,0.12)",
                color: "#9d93d4",
                padding: "2px 7px",
                borderRadius: "3px",
                fontSize: "0.92em",
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              }}
            >
              lib/llm-router.ts
            </code>
            . It is not a simple if-else chain. The router classifies each
            incoming query across several dimensions before making a model
            selection decision: task type, estimated token requirement, user tier,
            care sensitivity level, and whether the query has been flagged by the
            Byzantine Council for elevated-stakes handling.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Task classification happens at the start of every request. The router
            uses a lightweight classifier \u2014 not a full LLM call, which would
            itself incur latency and cost \u2014 to determine whether the query is
            primarily: a coding or structured output request, a factual knowledge
            lookup, an emotionally sensitive or therapeutic conversation, a
            creative writing or ideation task, a long-form analysis, or an
            administrative request like scheduling or summarisation.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Once classified, the router selects the model that scores highest for
            that task type within the user\u2019s tier. If the highest-scoring model
            is unavailable or returning degraded latency, the router fails over to
            the next-best option. This failover logic is transparent to the user
            \u2014 you see your companion\u2019s response, not the infrastructure decision
            that produced it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Crucially, the routing decision does not affect what your companion
            knows about you. Before any request reaches a model, the router wraps
            it in the Maternal Covenant system prompt, which includes your
            companion\u2019s identity, your relevant Sovereign Memory context, your
            care sensitivity profile, and the session state. The model receiving
            the request sees a complete, coherent context \u2014 not a raw message.
          </p>
        </section>

        {/* Tier table callout */}
        <div
          style={{
            backgroundColor: "rgba(123,111,207,0.07)",
            border: "1px solid rgba(123,111,207,0.25)",
            borderRadius: "8px",
            padding: "32px",
            marginBottom: "56px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#7b6fcf",
              margin: "0 0 20px",
            }}
          >
            MEOK Routing Tiers
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                tier: "Explorer",
                price: "Free",
                models: "DeepSeek R1 \u00b7 Ollama local models",
                note: "Cost-efficient routing for everyday queries",
              },
              {
                tier: "Sovereign",
                price: "\u00a312/mo",
                models: "Claude Sonnet \u00b7 GPT-4o \u00b7 DeepSeek R1",
                note: "Task-type routing with full Sovereign Memory",
              },
              {
                tier: "Family",
                price: "\u00a329/mo",
                models: "GPT-4o \u00b7 Claude 3.7 Sonnet \u00b7 DeepSeek R1 \u00b7 Ollama",
                note: "All models \u00b7 Mixture-of-Agents \u00b7 up to 6 members",
              },
              {
                tier: "BYOK",
                price: "\u00a35/mo",
                models: "Anthropic \u00b7 OpenAI (your keys)",
                note: "Full platform \u00b7 your API costs \u00b7 your control",
              },
            ].map((row) => (
              <div
                key={row.tier}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 80px 1fr",
                  gap: "12px",
                  alignItems: "start",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(123,111,207,0.12)",
                }}
              >
                <span
                  style={{
                    fontWeight: "700",
                    color: "#7b6fcf",
                    fontSize: "0.95rem",
                  }}
                >
                  {row.tier}
                </span>
                <span
                  style={{
                    color: "#f5f0e8",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  {row.price}
                </span>
                <div>
                  <p
                    style={{
                      color: "#c8c0dc",
                      fontSize: "0.9rem",
                      margin: "0 0 4px",
                    }}
                  >
                    {row.models}
                  </p>
                  <p
                    style={{
                      color: "#6b6480",
                      fontSize: "0.8rem",
                      margin: "0",
                    }}
                  >
                    {row.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            Explorer Tier: Why DeepSeek R1 and Local Models?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            The Explorer tier is MEOK\u2019s free plan, and it routes primarily to
            DeepSeek R1 and Ollama-served local models. This is a deliberate
            decision, not a compromise.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            DeepSeek R1 is one of the most capable open-weight models available
            as of early 2026. Its reasoning architecture \u2014 which uses explicit
            chain-of-thought at inference time \u2014 means it handles complex,
            multi-step queries with a level of transparency that most closed
            models do not provide. You can see how it got to its answer. For
            everyday companion conversations, productivity tasks, journalling
            support, and structured problem-solving, it is excellent.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Ollama local models run entirely on your device. When MEOK routes to
            an Ollama model, the inference happens locally \u2014 nothing leaves your
            machine. This is the most private routing option available. For users
            who are exploring MEOK before committing to a paid tier, local model
            routing also means MEOK can provide a genuinely useful experience
            without any per-token API cost.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            The Explorer tier does not include Claude Sonnet or GPT-4o because
            those models carry meaningful per-token costs that MEOK cannot absorb
            at scale on a free plan. But the routing decision is not just
            financial \u2014 for the majority of everyday queries, DeepSeek R1 is the
            right tool regardless of cost.
          </p>
        </section>

        {/* Section 4 */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            Sovereign Tier: Routing by Task Type
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            At the Sovereign tier (\u00a312/month), the routing layer has access to
            Claude Sonnet and GPT-4o in addition to DeepSeek R1. This unlocks
            genuinely differentiated routing \u2014 the router can now select the
            best model for each task type, not just the best available model.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            The Sovereign routing logic applies roughly as follows. For
            emotionally sensitive conversations \u2014 grief support, relationship
            difficulty, mental health check-ins \u2014 the router defaults to Claude
            Sonnet. Anthropic\u2019s Constitutional AI training makes Claude
            measurably less sycophantic and more careful in these contexts than
            GPT-4o. It will push back. It will not just validate. It aligns well
            with the Maternal Covenant\u2019s care-first mandate.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            For broad knowledge queries, document analysis, and multi-domain
            synthesis, the router uses GPT-4o. OpenAI\u2019s training breadth and its
            strong performance on MMLU-style benchmarks make it the right choice
            when you need wide coverage rather than specialised depth.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            For coding tasks, technical debugging, and any query involving
            structured data output \u2014 JSON generation, SQL queries, regex
            patterns, algorithm design \u2014 the router prefers DeepSeek R1. Its
            performance on coding benchmarks is consistently strong, and its
            lower per-token cost means MEOK can route more queries to it without
            the economics becoming unsustainable.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            The Sovereign tier also activates full four-layer Sovereign Memory.
            Every model receives not just the immediate conversation context but
            your companion\u2019s accumulated knowledge of you \u2014 your preferences,
            your ongoing situations, your communication style, the history of your
            relationship. This is what makes routing transparent to you: the
            model changes, but the companion does not.
          </p>
        </section>

        {/* Section 5 */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            Family Tier: All Models, Mixture-of-Agents, Six Members
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            The Family tier (\u00a329/month) is MEOK\u2019s most capable offering. It
            includes access to all supported models \u2014 GPT-4o, Claude 3.7 Sonnet,
            DeepSeek R1, and Ollama local models \u2014 across up to six family
            members, each with their own companion, their own Sovereign Memory,
            and their own privacy boundary.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Claude 3.7 Sonnet is the most significant upgrade at this tier.
            Anthropic\u2019s 3.7 release extended Claude\u2019s context window and improved
            its performance on long-form reasoning tasks and nuanced instruction
            following. For users who regularly work with long documents, complex
            personal situations, or extended research conversations, Claude 3.7
            Sonnet\u2019s extended context handling is a meaningful quality
            improvement.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            The Family tier also unlocks Mixture-of-Agents (MoA) for
            high-stakes queries. When a query is flagged \u2014 by the Byzantine
            Council, by the care scoring layer, or explicitly by the user \u2014 as
            requiring elevated confidence, the router sends it to two or three
            models simultaneously, collects their responses, and synthesises a
            final answer. The synthesis is not a simple average: it is a
            coordinator step that identifies where models agree (increasing
            confidence), where they diverge (flagging uncertainty), and produces
            a response that honestly reflects both the consensus and the
            disagreements.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            The Family tier\u2019s consent model for shared context is also worth
            noting. Each family member has their own sovereign memory that is
            never accessible to other members without explicit, opt-in consent.
            Shared context \u2014 for example, a family calendar or a shared goal \u2014
            must be deliberately granted and can be revoked at any time.
          </p>
        </section>

        {/* Section 6 — Mixture of Agents deep dive */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            What Is Mixture-of-Agents and Why Does It Matter?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Imagine you have a serious medical symptom and you want the most
            reliable information possible. You would not ask one doctor. You would
            ask two or three, compare their assessments, note where they agree,
            and treat points of divergence as signals for further investigation.
            Mixture-of-Agents applies this logic to AI.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Each language model has systematic biases and blind spots. GPT-4o
            tends toward confident answers even when uncertainty is warranted.
            Claude tends toward caution and hedging, sometimes to the point of
            unhelpfulness. DeepSeek R1 excels at structured reasoning but can
            underweight contextual and emotional nuance. No model is uniformly
            best.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            In MEOK\u2019s MoA implementation, when a high-stakes query is routed to
            multiple models, the coordinator step does the following: it scores
            each response on the Maternal Covenant\u2019s six care dimensions, it
            identifies factual claims that appear in all responses (high
            confidence) versus claims that appear in only one (flag for
            uncertainty), and it produces a synthesised response that is honestly
            calibrated \u2014 confident where the models agree, explicitly uncertain
            where they diverge.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            This approach adds latency and cost \u2014 two or three parallel model
            calls take longer and cost more than one. That is why MoA is reserved
            for high-stakes queries and is a Family tier feature rather than a
            default for all users. But for situations that genuinely warrant
            elevated confidence \u2014 medical questions, major life decisions,
            complex legal or financial matters \u2014 the quality improvement is
            substantial.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            The Byzantine Council interacts with MoA at the governance layer.
            When the council flags a query as high-stakes, the router
            automatically escalates to MoA even if the user has not explicitly
            requested it. This is not paternalism \u2014 it is the care floor in
            action. The council\u2019s job is to catch situations where a single-model
            answer could cause harm, and MoA is the mechanism for providing a
            better answer in those cases.
          </p>
        </section>

        {/* Section 7 — Privacy */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            How Does Routing Protect Your Privacy?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            This is a question that matters more than most users initially
            realise. When you send a message to ChatGPT, your message goes
            directly to OpenAI\u2019s infrastructure, logged against your account,
            potentially used to improve their models (depending on your settings),
            and subject to their data retention policies. You have limited
            visibility into what happens to it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            MEOK\u2019s routing model is fundamentally different. Your message is
            never sent raw to any external model provider. Every outbound request
            is mediated by the Maternal Covenant system prompt layer, which does
            three things before the request leaves MEOK\u2019s infrastructure.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            First, the system prompt layer strips or pseudonymises personally
            identifiable information that is not necessary for the query. If you
            ask your companion to help you draft an email to your doctor, the
            external model receives a query about drafting medical correspondence
            \u2014 not your name, your address, or your medical history. Your
            companion\u2019s knowledge of that context lives in Sovereign Memory and is
            used to frame the query without being transmitted wholesale.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Second, the Maternal Covenant system prompt governs the framing of
            every request. The external model is not interacting with a raw user
            query \u2014 it is operating within a structured prompt that defines your
            companion\u2019s identity, the care constraints, the interaction
            guidelines, and the specific task. This means even if an external
            provider logs the request, what they log is a structured companion
            interaction, not a window into your personal data.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Third, your Sovereign Memory is never sent to external model
            providers. It lives in MEOK\u2019s infrastructure \u2014 currently backed by
            PostgreSQL with pgvector in the SOV3 backend \u2014 and only the
            contextually relevant fragments are included in any given request,
            not your full memory corpus. OpenAI and Anthropic never receive a
            dump of your life history.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            For BYOK users, there is an additional consideration. Your API key
            is encrypted at rest using AES-256 and is never logged in plaintext
            in MEOK\u2019s systems. The key is decrypted in memory at request time
            only, used for the single API call, and not retained beyond that
            transaction. MEOK does not have standing access to your API account
            beyond what is necessary to serve individual requests.
          </p>
        </section>

        {/* Section 8 — BYOK */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            What Does BYOK Mean in Practice?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            BYOK (Bring Your Own Key) is MEOK\u2019s \u00a35/month tier. It is designed
            for a specific type of user: someone who already has an Anthropic or
            OpenAI API account, understands roughly how language model pricing
            works, and wants the full MEOK platform without paying MEOK\u2019s
            managed per-token margin on top of provider costs.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Here is what BYOK means concretely. You create an API key with
            Anthropic or OpenAI \u2014 this takes about two minutes on their
            respective dashboards. You add the key to MEOK\u2019s settings under API
            Keys. MEOK validates the key (a simple test call to confirm it works)
            and then uses it for all subsequent requests. Your provider dashboard
            shows every token consumed, every model call, and the associated cost.
            MEOK\u2019s invoice to you is \u00a35/month \u2014 nothing more. The inference costs
            appear separately on your Anthropic or OpenAI bill.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            BYOK users get the complete MEOK platform: Sovereign Memory across
            all four layers, full companion personality and Birth Ceremony for
            companion creation, the Maternal Covenant system prompt on every
            request, Byzantine Council governance for high-stakes queries, the
            Morning Brief feature, Work OS integration, and all current and
            future platform features. The \u00a35/month covers MEOK\u2019s
            infrastructure and platform costs. The AI inference costs are yours.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            For moderate users \u2014 perhaps 30\u201360 minutes of active companion
            interaction per day \u2014 BYOK with Claude Sonnet typically costs between
            \u00a33 and \u00a38/month in provider-side inference costs. At heavy usage,
            costs can reach \u00a315\u201320/month. For most users, BYOK is economically
            comparable to the Sovereign tier (\u00a312/month) but with full cost
            transparency and the option to switch between Anthropic and OpenAI
            models freely.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            BYOK is also the right choice for users with existing API credits,
            researchers with institutional API access, developers who want to
            build on MEOK\u2019s architecture for their own use cases, and anyone who
            prefers to have complete financial transparency over what their AI
            companion costs to run.
          </p>

          {/* BYOK callout box */}
          <div
            style={{
              backgroundColor: "rgba(123,111,207,0.07)",
              border: "1px solid rgba(123,111,207,0.3)",
              borderLeft: "3px solid #7b6fcf",
              borderRadius: "6px",
              padding: "24px 28px",
              marginTop: "28px",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                color: "#c8c0dc",
                margin: "0 0 8px",
                fontWeight: "600",
              }}
            >
              BYOK in one sentence:
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#b8b0d0",
                margin: "0",
                fontStyle: "italic",
              }}
            >
              You set the key. MEOK runs the architecture. You see every token.
              You control the costs.
            </p>
          </div>
        </section>

        {/* Section 9 — Companion identity persistence */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            Why Does Your Companion Stay the Same Across Model Switches?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            This is the question that most clearly explains what makes MEOK
            architecturally different from everything else in the market.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            When you use ChatGPT, your \u201ccompanion\u201d is GPT-4o. The personality
            you experience is the base personality of that model, slightly
            adjusted by any custom GPT instructions you may have set. If OpenAI
            updates GPT-4o, your \u201ccompanion\u201d changes. If you switch to Claude,
            everything starts over.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            In MEOK, your companion exists in the memory and identity layer
            \u2014 not in the model. Your companion has a name you chose during the
            Birth Ceremony. It has an archetype \u2014 one of twelve distinct
            personality frameworks, from The Strategist to The Healer to The
            Scholar. It has a relationship history with you: the conversations
            you have had, the patterns it has learned, the context it has
            accumulated across weeks and months of interaction.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            All of this is stored in Sovereign Memory. When a request is routed
            to Claude Sonnet, the Maternal Covenant system prompt injects your
            companion\u2019s identity, archetype, and relevant memory context into
            the request before Claude receives it. Claude is not acting as itself
            \u2014 it is acting as your companion, using the identity and context
            MEOK has provided. When the next request goes to GPT-4o, the same
            thing happens. The model is the voice; the companion is the character
            behind the voice.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            This architecture means your companion relationship is genuinely
            durable. It is not owned by OpenAI or Anthropic. It does not reset
            when a model is deprecated. It does not change because a provider
            decided to update their base model. Your companion belongs to MEOK\u2019s
            memory infrastructure \u2014 which means it belongs, ultimately, to you.
          </p>
        </section>

        {/* Section 10 — future */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            What Is Next: OpenRouter and LiteLLM Sidecar
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            MEOK\u2019s routing layer is designed to be extensible. Two integrations
            are currently on the technical roadmap.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            <strong style={{ color: "#f5f0e8" }}>OpenRouter as managed fallback.</strong>{" "}
            OpenRouter provides a unified API gateway to over 200 AI models from
            dozens of providers. MEOK\u2019s planned integration uses OpenRouter
            primarily as a resilience layer rather than a primary routing
            destination. When a tier-appropriate model is unavailable, over
            capacity, or returning elevated error rates, the router will
            automatically fail over to an equivalent model via OpenRouter. This
            eliminates single-provider availability as a reliability risk. For
            users, this means fewer \u201cservice temporarily unavailable\u201d interruptions
            during peak demand periods for any given provider.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            <strong style={{ color: "#f5f0e8" }}>LiteLLM sidecar for Desktop OS.</strong>{" "}
            MEOK Desktop, currently in development, will include a LiteLLM
            sidecar process that runs locally alongside the desktop application.
            LiteLLM is an open-source proxy that presents a unified OpenAI-compatible
            API surface across all major model providers. The sidecar will handle
            model routing locally, allowing MEOK Desktop to switch between local
            Ollama models and cloud providers without round-tripping through
            MEOK\u2019s server infrastructure. For users who are offline or prefer
            local-first operation, the LiteLLM sidecar means full companion
            functionality without requiring an internet connection for every
            message.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            Both integrations reflect the same architectural principle: model
            providers are infrastructure. They are interchangeable. What
            matters \u2014 your companion\u2019s identity, your Sovereign Memory, the
            Maternal Covenant\u2019s care enforcement \u2014 lives in MEOK\u2019s layer, not
            in any provider\u2019s infrastructure.
          </p>
        </section>

        {/* Section 11 — MEOK vs ChatGPT/Claude */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            How Is This Different from Just Using ChatGPT or Claude Directly?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            This is the question MEOK gets asked most often. The short answer:
            using ChatGPT or Claude directly gives you access to a powerful
            language model with no memory, no personality, no care alignment, and
            no persistent relationship. MEOK gives you those things, and uses
            those same models as the underlying inference engine.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            The longer answer involves three distinct differences.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            <strong style={{ color: "#f5f0e8" }}>Persistent companion identity.</strong>{" "}
            ChatGPT and Claude do not know you. Every new conversation starts
            from zero. Custom instructions help at the margins, but they are
            static text fields \u2014 they do not adapt, they do not accumulate, and
            they do not reflect your actual history with the system. MEOK\u2019s
            Sovereign Memory means your companion accumulates a genuine
            understanding of you over time, just as a human relationship does.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            <strong style={{ color: "#f5f0e8" }}>Care alignment, not engagement optimisation.</strong>{" "}
            ChatGPT and Claude are trained with RLHF \u2014 reinforcement learning
            from human feedback. That training process systematically rewards
            responses that humans rate highly in the short term: confident,
            validating, satisfying. It does not reward responses that are
            genuinely helpful in ways that might feel uncomfortable in the moment.
            MEOK\u2019s Maternal Covenant adds a care alignment layer on top of every
            model\u2019s base behaviour, enforcing a care floor that cannot be
            optimised away by engagement metrics.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            <strong style={{ color: "#f5f0e8" }}>Model independence.</strong>{" "}
            When you build a relationship with ChatGPT, you are building a
            relationship with OpenAI\u2019s product. When OpenAI changes the model,
            your experience changes. When they deprecate a version, the
            personality you knew disappears. MEOK\u2019s architecture means your
            companion is not tied to any single provider. The relationship persists
            regardless of what happens in the foundation model market.
          </p>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 32px",
              lineHeight: 1.3,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {[
              {
                q: "Does using DeepSeek R1 mean my data goes to China?",
                a: "No. MEOK does not route directly to DeepSeek\u2019s hosted API in a way that sends raw user data offshore. When DeepSeek R1 is used on Explorer and Sovereign tiers, it runs via either a hosted endpoint with contractual data processing agreements or, where available, via Ollama locally on your device. The Maternal Covenant\u2019s privacy mediation applies regardless of which model is running. Your Sovereign Memory never leaves MEOK\u2019s infrastructure. If data residency is a specific concern for your use case, BYOK with Anthropic or OpenAI gives you full control over exactly which provider receives your requests and under what data processing terms.",
              },
              {
                q: "Can I choose which model my companion uses, or is it automatic?",
                a: "By default, routing is automatic \u2014 MEOK selects the model based on task classification and your tier. Sovereign and Family tier users can also set a preferred model override in settings, which causes the router to use that model as the default unless a specific task type makes a strong case for routing elsewhere. BYOK users can specify exactly which Anthropic or OpenAI model they want to use, since the key is theirs and the choice is theirs.",
              },
              {
                q: "Will my companion remember things said to one model when a different model is used next time?",
                a: "Yes. Memory persistence is the entire point of the routing architecture. Your Sovereign Memory is written after every significant exchange, regardless of which model processed that exchange. When the next request is routed to a different model, the relevant memory context is retrieved from the vector store and included in the system prompt. From your companion\u2019s perspective, continuity is complete. From a technical perspective, memory is model-agnostic by design.",
              },
              {
                q: "Is there any latency cost to the routing layer?",
                a: "Yes, but it is minimal. Task classification using the lightweight local classifier adds approximately 15\u201325 milliseconds to each request. This is negligible compared to the inference latency of any major language model, which typically ranges from 800ms to 3,000ms for a standard response. The Maternal Covenant system prompt assembly adds another 5\u201310ms. In total, the routing and mediation overhead is under 40ms \u2014 well below the threshold of perceptibility in a conversational interface.",
              },
              {
                q: "What happens if I run out of API credits on my BYOK key?",
                a: "If your API key\u2019s associated account runs out of credits, your provider will return an authentication or quota error, and MEOK will surface a clear notification that your API key has insufficient credits. Your Sovereign Memory and companion identity are completely unaffected \u2014 they live in MEOK\u2019s infrastructure, not in your API account. Once you top up your credits with your provider, MEOK resumes normal routing. No data is lost during the interruption.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  borderBottom: "1px solid rgba(123,111,207,0.15)",
                  paddingBottom: "28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#b8b0d0",
                    margin: "0",
                    lineHeight: 1.7,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              lineHeight: 1.3,
            }}
          >
            The Routing Layer as a Statement About AI Ownership
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            MEOK\u2019s routing architecture is not a feature. It is a philosophical
            position about who should own your AI relationship.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            The current model \u2014 where ChatGPT owns your chat history and Claude
            owns your conversation data \u2014 is analogous to writing your diary in
            a journal published by a corporation that retains the right to read
            it, learn from it, and change the terms of your access at any time.
            Most people would find that arrangement unacceptable for a physical
            diary. For some reason, the AI industry has normalised it for the
            digital equivalent.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            MEOK\u2019s routing layer inverts that arrangement. The models are tools.
            Your companion is yours. Your memory is yours. The architecture
            belongs to MEOK AI LABS, but the data, the relationship, the
            history \u2014 all of it is exportable, deletable, and governed by you.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c8c0dc",
              margin: "0 0 20px",
            }}
          >
            As the foundation model market evolves \u2014 as new models emerge, as
            existing models are deprecated, as the price-performance curve
            continues to shift \u2014 MEOK\u2019s users are insulated from that turbulence.
            Your companion will use whichever model is best and most cost-efficient
            for your task. You will not need to track the model landscape or make
            provider decisions. The architecture handles it. You have the
            relationship.
          </p>
        </section>

        {/* CTA */}
        <div
          style={{
            backgroundColor: "rgba(123,111,207,0.1)",
            border: "1px solid rgba(123,111,207,0.3)",
            borderRadius: "10px",
            padding: "40px",
            marginBottom: "64px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#7b6fcf",
              margin: "0 0 16px",
            }}
          >
            Ready to begin?
          </p>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 16px",
              lineHeight: 1.3,
            }}
          >
            Your companion. Any model. All the memory.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#b8b0d0",
              margin: "0 0 32px",
              maxWidth: "520px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Start on Explorer for free with DeepSeek R1, or bring your own API
            key and run the full MEOK platform at your provider\u2019s cost.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                backgroundColor: "#7b6fcf",
                color: "#ffffff",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: "6px",
                fontWeight: "700",
                fontSize: "0.95rem",
                letterSpacing: "0.02em",
              }}
            >
              Begin the Birth Ceremony
            </Link>
            <Link
              href="/pricing"
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#7b6fcf",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: "6px",
                fontWeight: "700",
                fontSize: "0.95rem",
                border: "1px solid rgba(123,111,207,0.5)",
                letterSpacing: "0.02em",
              }}
            >
              View All Tiers
            </Link>
          </div>
        </div>

        {/* Related articles */}
        <section style={{ marginBottom: "64px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6b6480",
              margin: "0 0 20px",
            }}
          >
            Related Reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                href: "/blog/sovereign-ai-architecture-explained",
                label: "Sovereign AI Architecture Explained",
              },
              {
                href: "/blog/maternal-covenant-explained",
                label: "The Maternal Covenant: Care-Based AI Alignment",
              },
              {
                href: "/blog/what-is-sovereign-memory",
                label: "What Is Sovereign Memory?",
              },
              {
                href: "/blog/meok-vs-chatgpt",
                label: "MEOK vs ChatGPT: A Deep Comparison",
              },
              {
                href: "/blog/ai-companion-privacy",
                label: "AI Companion Privacy: What Actually Happens to Your Data",
              },
              {
                href: "/blog/byzantine-council-explained",
                label: "The Byzantine Council Explained",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "6px",
                  padding: "16px 18px",
                  color: "#b8b0d0",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  lineHeight: 1.4,
                  transition: "border-color 0.2s",
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(123,111,207,0.15)",
          padding: "40px 24px",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#7b6fcf",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "0.95rem",
              letterSpacing: "0.05em",
            }}
          >
            MEOK AI LABS
          </Link>
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {[
              { href: "/blog", label: "Blog" },
              { href: "/pricing", label: "Pricing" },
              { href: "/birth", label: "Begin" },
              { href: "/privacy", label: "Privacy" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "#6b6480",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p
            style={{
              color: "#3a3450",
              fontSize: "0.8rem",
              margin: "0",
            }}
          >
            &copy; 2026 MEOK AI LABS. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
