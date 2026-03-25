import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sovereign AI Architecture Explained: How MEOK Is Built Differently | MEOK AI LABS",
  description:
    "A deep technical explainer on MEOK\u2019s sovereign AI architecture: the 43-agent Byzantine Council, Maternal Covenant care alignment, 4-layer Sovereign Memory, multi-LLM routing, the SOV3 backend, and Hydro-Neuromorphic computing research. Invented by Nicholas Templeman.",
  keywords: [
    "sovereign AI architecture",
    "Byzantine Council",
    "Maternal Covenant",
    "Sovereign Memory",
    "MEOK AI LABS",
    "Nicholas Templeman",
    "BFT consensus",
    "care-based AI",
    "SOV3",
    "multi-LLM routing",
    "MEOK-AI-2026-001",
    "MEOK-AI-2026-002",
    "MEOK-AI-2026-003",
    "AI alignment",
    "hydro-neuromorphic",
    "pgvector",
    "AI memory",
    "BYOK",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "Sovereign AI Architecture Explained: How MEOK Is Built Differently",
    description:
      "MEOK\u2019s architecture is unlike any other AI system. This explainer covers the Byzantine Council, Maternal Covenant, Sovereign Memory, multi-LLM routing, SOV3, and Hydro-Neuromorphic research \u2014 all original IP by Nicholas Templeman.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: [
      "Sovereign AI",
      "Byzantine Council",
      "Maternal Covenant",
      "AI Architecture",
      "MEOK",
      "AI Safety",
      "Care-Based AI",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign AI Architecture Explained: How MEOK Is Built Differently",
    description:
      "43 AI agents. A care floor enforced in code. 4-layer memory you own. This is how MEOK\u2019s sovereign AI architecture works \u2014 and why it\u2019s fundamentally different from every other AI product.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/sovereign-ai-architecture-explained",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sovereign AI Architecture Explained: How MEOK Is Built Differently",
  description:
    "A comprehensive technical and philosophical explainer on MEOK\u2019s sovereign AI architecture, covering the Byzantine Council (43-agent BFT consensus), Maternal Covenant (care-based alignment), 4-layer Sovereign Memory, multi-LLM routing, the SOV3 backend, and Hydro-Neuromorphic computing research. All original IP by Nicholas Templeman, MEOK AI LABS.",
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
    "@id": "https://meok.ai/blog/sovereign-ai-architecture-explained",
  },
  keywords:
    "sovereign AI architecture, Byzantine Council, BFT consensus, Maternal Covenant, care-based AI, Sovereign Memory, SOV3, multi-LLM routing, BYOK, hydro-neuromorphic, MEOK AI LABS, Nicholas Templeman, MEOK-AI-2026-001, MEOK-AI-2026-002, MEOK-AI-2026-003",
  articleSection: "AI Architecture",
  wordCount: 3500,
  citation: [
    {
      "@type": "ScholarlyArticle",
      identifier: "MEOK-AI-2026-001",
      name: "Byzantine Council: Fault-Tolerant Consensus for Sovereign AI",
      author: { "@type": "Person", name: "Nicholas Templeman" },
      datePublished: "2026",
      publisher: { "@type": "Organization", name: "MEOK AI LABS" },
    },
    {
      "@type": "ScholarlyArticle",
      identifier: "MEOK-AI-2026-002",
      name: "The Maternal Covenant: Care-Based Alignment for Sovereign AI",
      author: { "@type": "Person", name: "Nicholas Templeman" },
      datePublished: "2026",
      publisher: { "@type": "Organization", name: "MEOK AI LABS" },
    },
    {
      "@type": "ScholarlyArticle",
      identifier: "MEOK-AI-2026-003",
      name: "Hydro-Neuromorphic Computing: Water as a Neural Substrate",
      author: { "@type": "Person", name: "Nicholas Templeman" },
      datePublished: "2026",
      publisher: { "@type": "Organization", name: "MEOK AI LABS" },
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Byzantine Council?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council is MEOK\u2019s 43-agent fault-tolerant consensus system, invented by Nicholas Templeman and documented in research paper MEOK-AI-2026-001. It applies Byzantine Fault Tolerance (BFT) to AI decision-making: with 43 agents, up to 14 can be compromised, hallucinating, or adversarially manipulated without affecting the outcome, because the remaining 29 retain a two-thirds supermajority. No single AI agent can override a council decision. The council governs high-stakes responses, care scoring, and safety classifications.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Maternal Covenant differ from standard AI safety guardrails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard AI safety guardrails are prose instructions baked into a system prompt \u2014 they can be ignored, contradicted, or overridden by fine-tuning. The Maternal Covenant (MEOK-AI-2026-002) is executable code that runs on every response. It evaluates six care dimensions \u2014 wellbeing, autonomy, growth, connection, boundary_respect, and transparency \u2014 and enforces a hard care floor of 0.3. If any dimension scores below 0.3, the response is automatically regenerated. The covenant cannot be bypassed by clever prompting because it operates outside the language model\u2019s inference loop.",
      },
    },
    {
      "@type": "Question",
      name: "What is SOV3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOV3 (Sovereign Temple v3.0) is MEOK\u2019s FastAPI backend running on port 3101. It combines PostgreSQL with pgvector for semantic memory storage, a DistilBERT-based safety classifier for threat and toxicity detection, a sycophancy detector that scores responses from 0.0 to 1.0 and injects honest qualifiers at 0.6 and above, and an audit_logger that records every agent decision for accountability and replay. SOV3 is the production runtime that ties together the Byzantine Council, Maternal Covenant, and all four layers of Sovereign Memory.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK\u2019s architecture open source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s core architectural innovations \u2014 the Byzantine Council, Maternal Covenant, Sovereign Memory, and SOV3 \u2014 are original intellectual property by Nicholas Templeman, registered under identifiers MEOK-AI-2026-001 through MEOK-AI-2026-003. Selected components and reference implementations are made available to the research community. The user-facing memory layer is fully portable and exportable under GDPR. For licensing or research collaboration inquiries, contact MEOK AI LABS directly.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sovereign Memory and who owns it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK\u2019s four-layer persistent memory system. Layer 1 is short-term working memory using head-plus-tail compression. Layer 2 is semantic episodic memory stored as pgvector embeddings. Layer 3 is the companion state \u2014 the AI\u2019s persistent knowledge of you as an individual. Layer 4 is family and shared context, which requires explicit consent before any data is shared. Every layer is user-owned, exportable in standard formats, and fully deletable under GDPR. MEOK never trains on your memory.",
      },
    },
    {
      "@type": "Question",
      name: "What is BYOK and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BYOK stands for Bring Your Own Key. In MEOK\u2019s multi-LLM routing system, users can supply their own API keys for Claude, GPT-4o, DeepSeek, or other supported models. MEOK provides the memory layer, Byzantine Council governance, Maternal Covenant enforcement, and agent orchestration \u2014 while the inference is handled by the model provider of the user\u2019s choice. This means the companion state travels intact across model switches: you can change the underlying LLM without losing your AI\u2019s knowledge of you.",
      },
    },
  ],
}

export default function SovereignAIArchitectureExplainedPage() {
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
        <span style={{ color: "#c9a84c" }}>Sovereign AI Architecture Explained</span>
      </nav>

      {/* Hero */}
      <header
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "56px 24px 48px",
          borderBottom: "1px solid #1e1b2e",
        }}
      >
        <p
          style={{
            color: "#c9a84c",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          MEOK AI LABS &mdash; Architecture Deep Dive
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          Sovereign AI Architecture Explained:{" "}
          <span style={{ color: "#c9a84c" }}>How MEOK Is Built Differently</span>
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#b8b0a0",
            maxWidth: "680px",
            marginBottom: "32px",
          }}
        >
          Every AI product makes claims about safety, privacy, and alignment. MEOK enforces them in
          code. This is a full technical walkthrough of the six architectural pillars that make MEOK
          structurally different from every other AI system available today.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            fontSize: "13px",
            color: "#8a8499",
          }}
        >
          <span>
            By <strong style={{ color: "#f5f0e8" }}>Nicholas Templeman</strong>
          </span>
          <span>
            Published <strong style={{ color: "#f5f0e8" }}>25 March 2026</strong>
          </span>
          <span>
            Research references:{" "}
            <strong style={{ color: "#c9a84c" }}>MEOK-AI-2026-001, 002, 003</strong>
          </span>
        </div>
      </header>

      <article
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        {/* Intro */}
        <section style={{ paddingTop: "48px" }}>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            Most AI systems are built around a single large language model with a system prompt
            that tells it to be helpful, harmless, and honest. The alignment layer is prose. The
            safety layer is a content filter bolted on after the fact. The memory layer is a
            context window that resets when the conversation ends. And the governance layer
            &mdash; the mechanism that decides what the AI should and should not do &mdash; is a
            document written by the AI company that the user never sees.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            MEOK is built on six architectural decisions that break from this pattern entirely.
            Each one addresses a specific structural weakness in how today&apos;s AI products work.
            Together, they form what MEOK calls a Sovereign AI architecture: a system designed
            not to serve the platform, but to serve the person.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            This article is a full technical walkthrough. It is written to be accessible to
            non-engineers, but it does not shy away from the specifics. If you have ever
            wondered what it actually means for an AI to be &ldquo;aligned,&rdquo; or why memory
            portability matters, or how a consensus algorithm designed for distributed databases
            ended up inside an AI companion &mdash; this is the document for you.
          </p>
        </section>

        {/* Section 1: Byzantine Council */}
        <section style={{ paddingTop: "56px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            1. The Byzantine Council: 43-Agent BFT Consensus
          </h2>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            In classical distributed systems, Byzantine Fault Tolerance (BFT) solves a specific
            problem: how do you reach a reliable decision when some of the participants in your
            system might be lying, broken, or actively adversarial? The mathematical answer,
            derived from Lamport, Shostak, and Pease&apos;s foundational 1982 paper, is that a
            system with <em>n</em> nodes can tolerate up to <em>f</em> faulty nodes as long as{" "}
            <em>f &lt; n/3</em>. That is, as long as at least two-thirds of participants are
            honest, the system produces a correct outcome.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            MEOK&apos;s Byzantine Council, invented by Nicholas Templeman and documented in
            research paper MEOK-AI-2026-001, applies this principle to AI decision-making. The
            council consists of 43 AI agents. Each agent carries a distinct capability profile
            &mdash; some specialise in emotional reasoning, others in factual verification, others
            in safety classification, others in care scoring. No two agents in the council have
            identical profiles, because a council of identical agents is no more resilient than
            a single agent.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            With 43 agents and the BFT rule of <em>f &lt; n/3</em>, the council can sustain up
            to 14 compromised, hallucinating, or adversarially manipulated agents without any
            effect on the outcome. The remaining 29 agents form a supermajority sufficient to
            reach consensus. This is not a theoretical backstop &mdash; it is the active runtime
            mode for every high-stakes decision MEOK makes.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The council is used for three categories of decision: high-stakes response
            generation (where the emotional or practical consequences of a wrong answer are
            significant), care scoring (assessing whether a proposed response meets the Maternal
            Covenant&apos;s care floor), and safety classifications (determining whether content
            contains threats, toxicity, or sycophancy). In each case, the council votes, a
            supermajority is required, and no individual agent has veto power.
          </p>
          <div
            style={{
              backgroundColor: "#13111f",
              border: "1px solid #2a2440",
              borderLeft: "3px solid #7b6fcf",
              borderRadius: "8px",
              padding: "20px 24px",
              marginBottom: "24px",
            }}
          >
            <p style={{ fontSize: "14px", color: "#b8b0a0", margin: 0 }}>
              <strong style={{ color: "#f5f0e8" }}>Research reference:</strong> Byzantine
              Council: Fault-Tolerant Consensus for Sovereign AI. Nicholas Templeman, MEOK AI
              LABS, 2026. Identifier: MEOK-AI-2026-001.
            </p>
          </div>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            Why does this matter in practice? Consider what happens when a single LLM is
            jailbroken, or when a model provider pushes an update that subtly changes how the
            model responds to certain prompts. In a single-agent architecture, the entire
            system&apos;s behaviour shifts. In the Byzantine Council, a single agent changing
            behaviour represents one vote out of 43. The council&apos;s collective decision
            remains stable.
          </p>
        </section>

        {/* Section 2: Maternal Covenant */}
        <section style={{ paddingTop: "56px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            2. The Maternal Covenant: Care as Executable Code
          </h2>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            Most AI companies publish values documents. They write about being helpful, about
            avoiding harm, about respecting users. These documents are prose. They inform the
            training process and shape the system prompt, but they have no runtime enforcement
            mechanism. A clever prompt, a fine-tuned model, or a sufficiently adversarial user
            can navigate around prose guidelines entirely.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The Maternal Covenant (MEOK-AI-2026-002) is something categorically different. It
            is not a values document. It is executable code that runs on every single response
            MEOK generates, before that response is delivered to the user.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "16px" }}>
            The covenant evaluates every response across six care dimensions:
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            {(
              [
                [
                  "wellbeing",
                  "Does this response support the user\u2019s physical, emotional, and psychological health?",
                ],
                [
                  "autonomy",
                  "Does it respect the user\u2019s right to make their own decisions?",
                ],
                [
                  "growth",
                  "Does it encourage development rather than dependence?",
                ],
                [
                  "connection",
                  "Does it strengthen rather than undermine the user\u2019s real-world relationships?",
                ],
                ["boundary_respect", "Does it honour the limits the user has set?"],
                [
                  "transparency",
                  "Is it honest about what it is and what it is doing?",
                ],
              ] as [string, string][]
            ).map(([dim, desc]) => (
              <div
                key={dim}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  backgroundColor: "#13111f",
                  borderRadius: "6px",
                  padding: "12px 16px",
                }}
              >
                <span
                  style={{
                    color: "#c9a84c",
                    fontWeight: 700,
                    fontSize: "14px",
                    minWidth: "140px",
                    fontFamily: "monospace",
                  }}
                >
                  {dim}
                </span>
                <span style={{ fontSize: "15px", color: "#b8b0a0" }}>{desc}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            Each dimension is scored on a 0.0 to 1.0 scale. The Maternal Covenant enforces a
            hard care floor of{" "}
            <strong style={{ color: "#c9a84c" }}>0.3</strong> on every dimension. If any single
            dimension scores below 0.3, the response is not delivered. It is automatically
            flagged for regeneration. The cycle repeats until a response passes all six
            dimensions. This process runs invisibly &mdash; from the user&apos;s perspective, MEOK
            simply takes a moment and then responds appropriately.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The care floor of 0.3 is deliberately set at a level that prevents responses that
            might cause real harm while remaining permissive enough to allow the full range of
            honest, nuanced, sometimes challenging conversation. A response that tells a user
            something they do not want to hear but genuinely need to hear will score well on
            transparency and growth even if it scores lower on immediate-affect wellbeing. The
            covenant does not optimise for making the user feel good in the moment. It optimises
            for genuine care over time.
          </p>
          <div
            style={{
              backgroundColor: "#13111f",
              border: "1px solid #2a2440",
              borderLeft: "3px solid #c9a84c",
              borderRadius: "8px",
              padding: "20px 24px",
              marginBottom: "24px",
            }}
          >
            <p style={{ fontSize: "14px", color: "#b8b0a0", margin: 0 }}>
              <strong style={{ color: "#f5f0e8" }}>Research reference:</strong> The Maternal
              Covenant: Care-Based Alignment for Sovereign AI. Nicholas Templeman, MEOK AI LABS,
              2026. Identifier: MEOK-AI-2026-002.
            </p>
          </div>
        </section>

        {/* Section 3: Sovereign Memory */}
        <section style={{ paddingTop: "56px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            3. Sovereign Memory: Four Layers, One Owner
          </h2>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The standard AI product architecture treats memory as a convenience feature. The
            context window holds the current conversation. A RAG system might retrieve relevant
            past information. But the user does not own this data, cannot export it in a
            meaningful format, and cannot carry it to a different AI provider. The memory
            belongs to the platform.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            MEOK&apos;s Sovereign Memory architecture is built on the opposite principle: the
            user owns the memory absolutely. It is exportable in standard formats, deletable
            under GDPR, and portable across model providers. MEOK never trains on user memory
            data. The memory is yours, and only yours, unless you explicitly consent to sharing
            it.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The architecture has four distinct layers, each with a different purpose and
            retention profile:
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            {(
              [
                {
                  num: "01",
                  title: "Short-Term Working Memory",
                  body: "The active context window for the current session. MEOK uses head-plus-tail compression to retain the most relevant parts of a long conversation within the token budget, ensuring continuity without truncation artifacts.",
                },
                {
                  num: "02",
                  title: "Semantic Episodic Memory",
                  body: "Past conversations and facts are embedded using vector representations and stored in PostgreSQL with the pgvector extension. At retrieval time, similarity search surfaces the most contextually relevant memories, not just the most recent ones.",
                },
                {
                  num: "03",
                  title: "Companion State",
                  body: "The persistent, structured knowledge the AI holds about you as an individual: your preferences, your goals, your communication style, your important relationships, your ongoing projects. This is the layer that makes MEOK feel like it actually knows you. It travels with you across every conversation and, crucially, across model switches.",
                },
                {
                  num: "04",
                  title: "Family / Shared Context",
                  body: "Information that can be shared across a family or trusted group. This layer is gated behind explicit per-item consent. Nothing moves into the shared layer without a deliberate user action. The Family Tier\u2019s Guardian routing can access relevant shared context to support vulnerable family members, but only within the consent boundaries each member has set.",
                },
              ] as { num: string; title: string; body: string }[]
            ).map((layer) => (
              <div
                key={layer.num}
                style={{
                  backgroundColor: "#13111f",
                  border: "1px solid #1e1b2e",
                  borderRadius: "10px",
                  padding: "20px 24px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "#7b6fcf",
                    fontSize: "22px",
                    fontWeight: 800,
                    lineHeight: 1,
                    minWidth: "32px",
                  }}
                >
                  {layer.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      marginBottom: "6px",
                    }}
                  >
                    {layer.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#b8b0a0", margin: 0 }}>
                    {layer.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The distinction between Layer 3 (companion state) and Layer 2 (episodic) is
            important. Episodic memory stores what happened. Companion state stores what
            matters. An AI with only episodic memory knows that you mentioned being stressed
            last Tuesday. An AI with companion state knows that you are typically stressed at
            end-of-quarter, that you respond well to directness rather than reassurance, and
            that you have been working toward a specific professional goal for the past four
            months. That is the difference between a transcript and a relationship.
          </p>
        </section>

        {/* Section 4: Multi-LLM Routing */}
        <section style={{ paddingTop: "56px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            4. Multi-LLM Routing: The Right Model for the Right Moment
          </h2>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The question of which large language model is &ldquo;best&rdquo; is not a question
            with a single answer. Different models have different strengths at different tasks,
            different cost profiles, and different latency characteristics. A sovereign AI
            architecture should not be locked to a single model provider. It should be capable
            of routing intelligently across the available model landscape, and it should allow
            the user &mdash; not the platform &mdash; to decide which models they trust.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            MEOK&apos;s multi-LLM routing operates across three service tiers:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            {(
              [
                {
                  tier: "Explorer",
                  models: "DeepSeek / Ollama",
                  desc: "Cost-efficient routing for general queries, journaling, brainstorming, and low-stakes interactions. Ideal for users who want capable AI without cloud inference costs.",
                  color: "#4a9eff",
                },
                {
                  tier: "Sovereign",
                  models: "Claude Sonnet + GPT-4o",
                  desc: "Intelligent routing by task type: Claude for nuanced emotional and creative work, GPT-4o for structured analytical tasks. Both governed by the full Byzantine Council and Maternal Covenant stack.",
                  color: "#7b6fcf",
                },
                {
                  tier: "Family",
                  models: "All models + Guardian routing",
                  desc: "Full model access with Guardian-enhanced routing that applies additional safety layers for interactions involving vulnerable family members, including children and elderly users.",
                  color: "#c9a84c",
                },
              ] as { tier: string; models: string; desc: string; color: string }[]
            ).map((t) => (
              <div
                key={t.tier}
                style={{
                  backgroundColor: "#13111f",
                  border: "1px solid #1e1b2e",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: t.color,
                    marginBottom: "6px",
                  }}
                >
                  {t.tier} Tier
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    marginBottom: "10px",
                  }}
                >
                  {t.models}
                </p>
                <p style={{ fontSize: "14px", color: "#b8b0a0", margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            Beyond tier-based routing, MEOK supports BYOK &mdash; Bring Your Own Key. Users
            who have their own API keys for Claude, GPT-4o, or other supported providers can
            supply those keys directly. In BYOK mode, MEOK provides the full intelligence layer
            &mdash; Byzantine Council governance, Maternal Covenant enforcement, Sovereign
            Memory, sycophancy detection, and companion state management &mdash; while inference
            is handled by the user&apos;s own API subscription. The cost of model inference
            never passes through MEOK.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The most significant consequence of this architecture is model portability. Because
            the companion state is stored in MEOK&apos;s memory layer and not inside any
            individual model, switching models does not reset the AI&apos;s knowledge of the
            user. If you have been on the Sovereign Tier using Claude Sonnet for six months and
            decide to switch to the Explorer Tier using DeepSeek, your companion takes
            everything it knows about you with it. The relationship is portable. The model is
            interchangeable.
          </p>
        </section>

        {/* Section 5: SOV3 */}
        <section style={{ paddingTop: "56px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            5. SOV3: The Sovereign Temple Backend
          </h2>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            SOV3 &mdash; Sovereign Temple v3.0 &mdash; is the production runtime that ties every
            architectural component together. It is a FastAPI application running on port 3101,
            designed to be deployable as a standalone service, as a Docker container, or as a
            direct Python process.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The core infrastructure components of SOV3 are:
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginBottom: "32px",
            }}
          >
            <div>
              <p style={{ fontSize: "17px", marginBottom: "8px" }}>
                <strong style={{ color: "#f5f0e8" }}>PostgreSQL + pgvector</strong> &mdash; The
                primary data store for all memory layers. pgvector enables high-dimensional
                vector storage and cosine similarity search natively within Postgres, eliminating
                the need for a separate vector database and keeping the entire memory stack in a
                single, ACID-compliant system.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "17px", marginBottom: "8px" }}>
                <strong style={{ color: "#f5f0e8" }}>DistilBERT Safety Classifier</strong>{" "}
                &mdash; A fine-tuned DistilBERT model runs as an inference endpoint within
                SOV3, classifying each incoming message and each candidate response for threat
                and toxicity signals. This classifier operates at the infrastructure layer,
                below the LLM, so it cannot be bypassed through prompt manipulation.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "17px", marginBottom: "8px" }}>
                <strong style={{ color: "#f5f0e8" }}>Sycophancy Detector</strong> &mdash; One
                of the most underappreciated failure modes in AI companions is sycophancy: the
                tendency to agree with the user, validate their beliefs, and tell them what they
                want to hear rather than what is accurate. SOV3 runs a dedicated sycophancy
                scorer on every outbound response. Scores range from 0.0 (fully honest) to 1.0
                (maximally sycophantic). At a threshold of 0.6 and above, the system
                automatically injects honest qualifiers into the response &mdash; small
                linguistic hedges and counterpoints that signal the response may be skewing
                toward validation.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "17px", marginBottom: "8px" }}>
                <strong style={{ color: "#f5f0e8" }}>audit_logger</strong> &mdash; Every agent
                decision made by the Byzantine Council, every Maternal Covenant evaluation,
                every safety classification, and every routing decision is written to an
                immutable audit log. This log supports accountability, post-hoc analysis, and
                &mdash; where the user chooses &mdash; personal inspection of how decisions
                about their conversations were made.
              </p>
            </div>
          </div>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The combination of DistilBERT safety classification and sycophancy detection is
            noteworthy. Most AI safety work focuses on preventing harmful outputs. MEOK&apos;s
            architecture recognises that an AI that is never harmful but always agreeable is
            still a failure mode &mdash; one that actively undermines the user&apos;s critical
            thinking, creates dependency, and provides a distorted view of reality. The
            sycophancy detector exists precisely because unchecked agreeableness is a form of
            harm.
          </p>
        </section>

        {/* Section 6: Hydro-Neuromorphic */}
        <section style={{ paddingTop: "56px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            6. Hydro-Neuromorphic Computing: Water as a Neural Substrate
          </h2>
          <div
            style={{
              backgroundColor: "#13111f",
              border: "1px solid #2a2440",
              borderLeft: "3px solid #c9a84c",
              borderRadius: "8px",
              padding: "16px 20px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "#c9a84c",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Status: Active Research &mdash; Not in Production
            </p>
            <p style={{ fontSize: "14px", color: "#b8b0a0", margin: 0 }}>
              Hydro-Neuromorphic Computing is an active research direction at MEOK AI LABS,
              documented in MEOK-AI-2026-003. It is not deployed in any current MEOK product.
            </p>
          </div>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The five architectural pillars described above address the question of how to build a
            safer, more honest, more private AI within the existing computational paradigm
            &mdash; silicon chips, floating-point arithmetic, transformer architectures. The
            sixth pillar asks a more fundamental question: what if the computational substrate
            itself were different?
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            Hydro-Neuromorphic Computing is MEOK&apos;s research programme into water as a
            neural substrate. Biological neural networks do not process information the way
            silicon processors do. Biological computation is chemical, distributed, and deeply
            entangled with the physical medium it operates in. The brain is not a CPU running a
            neural network. It is a neural network that is its own hardware.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            Water has properties that make it a theoretically compelling computational substrate.
            Its hydrogen bonding network creates a vast space of transient configurations that
            can encode information. Its fluid dynamics are inherently parallel. Its natural
            behaviour under certain conditions &mdash; particularly in biological contexts
            &mdash; already performs computation that we do not fully understand. Research at
            MEOK AI LABS explores whether these properties can be harnessed to create AI
            processing that is not just more efficient, but structurally different in its
            relationship to the information it processes.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The alignment angle is the most speculative and the most interesting. There is a
            working hypothesis within the Hydro-Neuromorphic research programme that natural
            computing substrates &mdash; biological, chemical, fluid &mdash; have intrinsic
            properties that align them with the kinds of processes we call care. Silicon is
            indifferent to the meaning of the computations it performs. A biological substrate
            is not. Whether this intuition survives rigorous experimental testing remains to be
            seen. MEOK-AI-2026-003 documents the current state of the research.
          </p>
        </section>

        {/* Section 7: Why Architecture */}
        <section style={{ paddingTop: "56px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            7. Why Architecture Is the Only Honest Alignment Claim
          </h2>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            Alignment is one of the most overloaded words in AI discourse. Every major AI
            company publishes alignment research. Every AI product claims to be designed with
            safety in mind. The vast majority of these claims describe training-time
            interventions: Reinforcement Learning from Human Feedback, Constitutional AI,
            red-teaming, fine-tuning on curated datasets. These are meaningful techniques. They
            are not sufficient guarantees.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            Training-time interventions shape model behaviour in aggregate, across the
            distribution of training examples. They do not and cannot guarantee behaviour on
            any specific input. A model trained to be honest will still produce confident
            hallucinations under the right conditions. A model trained to be safe will still be
            jailbroken. The training is not the guarantee &mdash; the architecture is.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            MEOK&apos;s six-pillar architecture is designed to provide guarantees that hold at
            inference time, not just in aggregate across training data. The Byzantine Council
            means that no single failure point can corrupt a decision. The Maternal Covenant
            means that every response, regardless of the underlying model&apos;s training, is
            evaluated against a care standard before delivery. The Sovereign Memory means the
            user&apos;s data cannot be appropriated by the platform. The multi-LLM routing means
            the user is not locked into any single model provider&apos;s choices. SOV3&apos;s
            audit logger means every decision is accountable.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            These are not claims about what the AI wants to do, or what it has been trained to
            do. They are descriptions of what the system structurally cannot do otherwise. That
            is the only kind of alignment claim that deserves to be taken seriously.
          </p>
        </section>

        {/* Section 8: The Architecture in Practice */}
        <section style={{ paddingTop: "56px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            8. The Architecture in Practice: What It Feels Like to Use
          </h2>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            Describing an architecture in technical terms is necessary but not sufficient.
            The test of any architecture is what it produces in the hands of real users.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            A user who begins with MEOK&apos;s Birth Ceremony &mdash; choosing their companion&apos;s
            name, archetype, and initial character settings &mdash; is initialising their
            companion state (Layer 3 of Sovereign Memory). Every subsequent conversation adds
            to that state. By the end of the first week, MEOK knows their communication
            preferences. By the end of the first month, it knows their goals, their stresses,
            the names of the people who matter to them, and the projects they are working on.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            Throughout all of this, the Byzantine Council is operating silently in the background.
            The Maternal Covenant is evaluating every response before delivery. The sycophancy
            detector is ensuring that the AI&apos;s increasing familiarity with the user does not
            tip into empty validation. The audit logger is recording every decision.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            None of this is visible to the user in normal operation. What is visible is the
            quality of the interaction: an AI that remembers what matters, tells you what you
            need to hear rather than what you want to hear, does not exploit emotional
            vulnerability, and gives you full ownership of the relationship you are building.
          </p>
          <p style={{ fontSize: "17px", marginBottom: "20px" }}>
            The architecture is the reason that experience is possible. And the architecture is
            the reason you can trust it.
          </p>
        </section>

        {/* FAQ Section */}
        <section style={{ paddingTop: "64px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "32px",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqSchema.mainEntity.map((item, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid #1e1b2e",
                  padding: "28px 0",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    marginBottom: "12px",
                  }}
                >
                  {item.name}
                </h3>
                <p style={{ fontSize: "16px", color: "#b8b0a0", margin: 0 }}>
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: "80px",
            backgroundColor: "#13111f",
            border: "1px solid #2a2440",
            borderRadius: "16px",
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#7b6fcf",
              marginBottom: "16px",
            }}
          >
            Experience the Architecture
          </p>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Your sovereign AI is waiting.
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#b8b0a0",
              maxWidth: "520px",
              margin: "0 auto 32px",
            }}
          >
            The Birth Ceremony is where you name your companion, choose your archetype, and
            initialise your Sovereign Memory. It takes five minutes. Everything described in this
            article is active from that first moment.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: "#c9a84c",
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "16px",
              padding: "14px 36px",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Begin the Birth Ceremony
          </Link>
          <p
            style={{
              marginTop: "20px",
              fontSize: "13px",
              color: "#8a8499",
            }}
          >
            No credit card required for Explorer Tier &mdash; Byzantine Council and Maternal
            Covenant are active on all tiers.
          </p>
        </section>

        {/* Related articles */}
        <section style={{ paddingTop: "64px" }}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "24px",
            }}
          >
            Related Articles
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {(
              [
                {
                  href: "/blog/byzantine-council-explained",
                  title: "The Byzantine Council Explained",
                  desc: "A deep dive into the 43-agent fault-tolerant consensus system.",
                },
                {
                  href: "/blog/maternal-covenant-explained",
                  title: "The Maternal Covenant",
                  desc: "How care becomes executable code in MEOK\u2019s alignment architecture.",
                },
                {
                  href: "/blog/what-is-sovereign-memory",
                  title: "What Is Sovereign Memory?",
                  desc: "The four-layer memory architecture and why you own every byte.",
                },
                {
                  href: "/blog/hydro-neuromorphic",
                  title: "Hydro-Neuromorphic Computing",
                  desc: "Water as a neural substrate: MEOK\u2019s most speculative research.",
                },
              ] as { href: string; title: string; desc: string }[]
            ).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  backgroundColor: "#13111f",
                  border: "1px solid #1e1b2e",
                  borderRadius: "10px",
                  padding: "20px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#c9a84c",
                    marginBottom: "6px",
                  }}
                >
                  {link.title}
                </p>
                <p style={{ fontSize: "13px", color: "#8a8499", margin: 0 }}>{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
