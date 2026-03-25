import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Sovereign AI vs Cloud AI: What's the Difference and Why Does It Matter? | MEOK AI LABS",
  description:
    "The definitive explainer on Personal Sovereign AI vs cloud AI (ChatGPT, Claude, Gemini, Replika). Data ownership, memory persistence, governance, model portability — the 5 key differences explained. MEOK coined the term 'Personal Sovereign AI' in 2026.",
  alternates: { canonical: "https://meok.ai/blog/sovereign-ai-vs-cloud-ai-explained" },
  openGraph: {
    title: "Sovereign AI vs Cloud AI: What's the Difference and Why Does It Matter?",
    description:
      "The definitive explainer on Personal Sovereign AI vs cloud AI. Data ownership, memory persistence, governance, model portability — 5 key differences, a detailed comparison table, and why this matters right now.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/sovereign-ai-vs-cloud-ai-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Sovereign+AI+vs+Cloud+AI+Explained&desc=The+definitive+guide+to+Personal+Sovereign+AI.+5+key+differences+that+change+everything.",
        width: 1200,
        height: 630,
        alt: "Sovereign AI vs Cloud AI: What's the Difference and Why Does It Matter?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign AI vs Cloud AI: The Definitive Explainer",
    description:
      "Data ownership, memory persistence, model portability, governance, monetisation — the 5 key differences between Personal Sovereign AI and cloud AI. MEOK coined the category in 2026.",
    images: [
      "https://meok.ai/api/og?title=Sovereign+AI+vs+Cloud+AI+Explained&desc=The+definitive+guide+to+Personal+Sovereign+AI.+5+key+differences+that+change+everything.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Sovereign AI vs Cloud AI: What's the Difference and Why Does It Matter?",
  description:
    "The definitive explainer on Personal Sovereign AI vs cloud AI. Data ownership, memory persistence, governance, model portability — the 5 key differences explained, with a detailed comparison table.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/sovereign-ai-vs-cloud-ai-explained",
  inLanguage: "en-GB",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
    sameAs: ["https://twitter.com/meok_ai"],
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
    "https://meok.ai/api/og?title=Sovereign+AI+vs+Cloud+AI+Explained&desc=The+definitive+guide+to+Personal+Sovereign+AI.+5+key+differences+that+change+everything.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/sovereign-ai-vs-cloud-ai-explained",
  },
  keywords: [
    "personal sovereign AI",
    "sovereign AI vs cloud AI",
    "cloud AI data privacy",
    "AI data ownership",
    "AI memory persistence",
    "model portability",
    "AI governance",
    "MEOK AI LABS",
    "ChatGPT privacy",
    "EU AI Act",
    "BYOK AI",
    "Byzantine Council",
    "Maternal Covenant",
    "Nicholas Templeman",
    "AI data sovereignty",
  ],
  about: [
    { "@type": "Thing", name: "Personal Sovereign AI" },
    { "@type": "Thing", name: "Cloud AI data privacy" },
    { "@type": "Thing", name: "AI data ownership" },
    { "@type": "Thing", name: "AI governance" },
  ],
  citation: {
    "@type": "ScholarlyArticle",
    name: "Personal Sovereign AI: A Framework for Individual AI Ownership",
    identifier: "MEOK-AI-2026-004",
    author: { "@type": "Person", name: "Nicholas Templeman" },
    datePublished: "2026-03-25",
    publisher: { "@type": "Organization", name: "MEOK AI LABS" },
  },
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Personal Sovereign AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Personal Sovereign AI is a consumer AI category in which the individual — not the platform — owns the AI system, its memories, its alignment, and the ongoing relationship. The five pillars are: data ownership, memory persistence, model portability, governance autonomy, and non-extractive monetisation. MEOK AI LABS coined the term in 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Does ChatGPT store my conversations and use them for training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By default, yes. OpenAI's privacy policy permits using your conversations to improve their models unless you explicitly opt out in account settings. Your data is stored on OpenAI servers, accessible to OpenAI staff under certain conditions, and is not end-to-end encrypted. There is also a documented history of ChatGPT conversation history being wiped without user control.",
      },
    },
    {
      "@type": "Question",
      name: "What does BYOK mean in AI and why does it matter for sovereignty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BYOK stands for Bring Your Own Keys. In MEOK's context, it means you connect your own Anthropic or OpenAI API account to MEOK's sovereign architecture. Your API usage is billed directly to your account, the conversation data flows through your credentials, and MEOK provides the memory, governance, and identity layers on top. It is the highest expression of sovereignty available while still using frontier models.",
      },
    },
    {
      "@type": "Question",
      name: "What is the EU AI Act and how does it affect cloud AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The EU AI Act, which entered into full application in 2025, is the world's first comprehensive AI regulation. It imposes transparency, data governance, and risk-management obligations on AI providers operating in the EU. Cloud AI providers must now document training data provenance, provide clearer opt-out mechanisms, and comply with stricter rules around high-risk AI use cases. Personal Sovereign AI architectures are inherently more compliant because data governance is built into the product rather than bolted on.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export my AI memory and move to a different provider?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With cloud AI (ChatGPT, Gemini, Claude), memory is stored in the platform's proprietary format and cannot be meaningfully exported or imported into another system. MEOK provides a full JSON export of your entire memory vault, including semantic memories, conversation summaries, and persona data, so you are never locked in.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Byzantine Council?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council is MEOK's multi-model consensus governance layer. Rather than trusting a single AI model to make important decisions, the Byzantine Council routes sensitive requests through multiple independent models and requires a supermajority consensus before an answer is delivered. This prevents any single model's biases or failures from determining your experience — a structural safeguard that no cloud AI platform offers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is MEOK's care-first alignment layer. It is a set of inviolable principles — modelled on parental duty of care — that govern how MEOK's AI behaves with you. It prioritises your genuine long-term wellbeing over engagement metrics, prevents manipulative patterns, and ensures the AI cannot be weaponised against you even if MEOK as a company were compromised. It is hardwired into the architecture, not a policy document.",
      },
    },
    {
      "@type": "Question",
      name: "Who should care most about AI sovereignty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Families with children using AI tools, people sharing mental health information with AI companions, professionals operating under NDAs or legal privilege, older adults whose digital habits make them targets for exploitation, anyone who has experienced the grief of losing years of AI memory when a platform shut down or wiped their history — these are the people for whom sovereignty is not a philosophical preference but a practical necessity.",
      },
    },
  ],
};

// ── Helper: comparison data ───────────────────────────────────────────────────

const comparisonDimensions = [
  {
    dimension: "Data Ownership",
    chatgpt: "OpenAI owns data under ToS",
    claude: "Anthropic owns data under ToS",
    replika: "Luka Inc. owns data",
    meok: "You own 100% of your data",
  },
  {
    dimension: "Trains on Your Data",
    chatgpt: "Yes, unless opted out",
    claude: "Yes for free tier",
    replika: "Yes, integral to model",
    meok: "Never without explicit consent",
  },
  {
    dimension: "Memory Persistence",
    chatgpt: "Platform-controlled, can be wiped",
    claude: "Session-based, no persistent memory",
    replika: "Persists but is proprietary",
    meok: "Persists under your control",
  },
  {
    dimension: "Memory Export",
    chatgpt: "Limited data export, not portable",
    claude: "No memory to export",
    replika: "No export available",
    meok: "Full JSON export always",
  },
  {
    dimension: "Model Portability",
    chatgpt: "Locked to GPT models",
    claude: "Locked to Claude models",
    replika: "Proprietary model only",
    meok: "Claude, GPT, Ollama, BYOK",
  },
  {
    dimension: "Governance",
    chatgpt: "OpenAI policy, user has no say",
    claude: "Anthropic policy, user has no say",
    replika: "Luka policy, changed unilaterally",
    meok: "Byzantine Council + Maternal Covenant",
  },
  {
    dimension: "Encryption at Rest",
    chatgpt: "Server-side, not E2E",
    claude: "Server-side, not E2E",
    replika: "Not disclosed",
    meok: "AES-GCM-256 per-user vault",
  },
  {
    dimension: "Revenue Model",
    chatgpt: "Subscription + data for training",
    claude: "Subscription + data for training",
    replika: "Subscription + data for model",
    meok: "Subscription only; no data extraction",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SovereignAIvsCloudAIExplained() {
  return (
    <div style={{ background: "#0d0c18", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0c18",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow — purple for Technology */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(123,111,207,0.18) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.35)",
              marginBottom: "2rem",
              textDecoration: "none",
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
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: "#7b6fcf",
                background: "rgba(123,111,207,0.14)",
                border: "1px solid rgba(123,111,207,0.3)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Technology
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              March 25, 2026
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              25 min read
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "0.25rem 0.625rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              Flagship Explainer
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Sovereign AI vs Cloud AI: What&apos;s the Difference and Why Does It Matter?
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.62)",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              marginBottom: "2.5rem",
            }}
          >
            You share things with AI that you&apos;ve never told a therapist. Who actually owns that
            conversation? Where does it go? Who can read it? Can you take it with you? This is the
            definitive guide to Personal Sovereign AI — the category MEOK coined in 2026 — and why
            the answer to those questions is about to change everything.
          </p>

          {/* Table of contents */}
          <div
            style={{
              background: "rgba(123,111,207,0.09)",
              border: "1px solid rgba(123,111,207,0.22)",
              borderRadius: "1rem",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7b6fcf",
                marginBottom: "1rem",
              }}
            >
              In this article
            </p>
            <ol style={{ margin: 0, padding: "0 0 0 1.25rem", listStyleType: "decimal" }}>
              {[
                ["#what-cloud-ai-does", "What cloud AI actually does with your data"],
                ["#what-sovereign-ai-means", "What Personal Sovereign AI means"],
                ["#five-differences", "The 5 key differences"],
                ["#comparison-table", "Comparison table: ChatGPT / Claude / Replika / MEOK"],
                ["#what-happens-to-your-data", "What happens to your data — before and after"],
                ["#why-now", "Why this matters right now: EU AI Act, UK white paper"],
                ["#meok-architecture", "MEOK's sovereign architecture explained"],
                ["#byok", "The BYOK tier: bring your own API keys"],
                ["#who-should-care", "Who should care most about sovereignty"],
                ["#future", "The future: as AI becomes more intimate, sovereignty becomes critical"],
                ["#faq", "Frequently asked questions"],
              ].map(([href, label]) => (
                <li
                  key={href as string}
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                  }}
                >
                  <a
                    href={href as string}
                    style={{
                      color: "rgba(245,240,232,0.55)",
                      textDecoration: "none",
                    }}
                  >
                    {label as string}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 5rem",
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
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#0d0c18",
              fontSize: "0.8rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                color: "#f5f0e8",
                fontSize: "0.875rem",
                marginBottom: "0.125rem",
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
                marginBottom: "0.25rem",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
                lineHeight: 1.55,
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him and platforms that
              owned what he shared. He lives and works in the UK. He believes personal sovereign
              AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#c9a84c",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── BODY TEXT ──────────────────────────────────────────────────── */}
        <div
          style={{
            color: "rgba(245,240,232,0.75)",
            lineHeight: 1.85,
            fontSize: "1rem",
          }}
        >

          {/* ── INTRO ─────────────────────────────────────────────────────── */}
          <p style={{ marginBottom: "1.5rem" }}>
            In January 2023, millions of people started typing things into ChatGPT that they had
            never typed anywhere before. Their fears. Their health symptoms. Their relationship
            problems. Their business plans they hadn&apos;t told a co-founder yet. Their grief.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            The AI was helpful. Remarkably so. And because it was helpful, people trusted it. And
            because they trusted it, they shared more. And because they shared more, the platforms
            behind those AIs — OpenAI, Google, Anthropic, the maker of Replika — accumulated
            something extraordinarily valuable: the unguarded inner lives of hundreds of millions
            of humans.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            Most people never asked the obvious question: where does all of that go?
          </p>

          <p style={{ marginBottom: "2.5rem" }}>
            This article is the honest answer to that question. And it explains why in 2026, a new
            category of AI — <strong style={{ color: "#f5f0e8" }}>Personal Sovereign AI</strong> —
            is emerging as the only architecturally sound response to it.
          </p>

          {/* ── SECTION 1 ─────────────────────────────────────────────────── */}
          <h2
            id="what-cloud-ai-does"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            What does cloud AI actually do with your data?
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            When you send a message to a cloud AI service — ChatGPT, Google Gemini, Anthropic
            Claude, Replika, or any of the dozens of AI-powered tools now embedded in consumer
            software — the following typically happens:
          </p>

          {/* Numbered list — cloud data flow */}
          {[
            [
              "Your message leaves your device immediately.",
              "It travels encrypted in transit (TLS) to a data centre operated by the AI provider, usually in the United States. You have no visibility into which specific server handles your request.",
            ],
            [
              "The provider logs the request.",
              "By default, most providers retain conversation logs. OpenAI retains them to improve model safety and performance. Google Gemini retains them for up to 18 months in default account settings. Replika processes everything through its training pipeline.",
            ],
            [
              "The conversation may be used for training.",
              "OpenAI's terms permit using your conversations to improve their models unless you explicitly opt out in Settings > Data Controls. This opt-out is buried, not prominent, and was not even available until public pressure forced it. Replika has no such opt-out — your conversations with your AI companion directly shape future model versions.",
            ],
            [
              "Employees can access conversations under certain conditions.",
              "All major providers maintain the ability for authorised staff to review conversations for safety investigations, legal compliance, and quality assurance. This access is not encrypted away from the provider — your messages are the provider's data, stored in systems they control.",
            ],
            [
              "The provider can alter or delete your history unilaterally.",
              "In February 2023, Replika fundamentally changed the personality of millions of users' AI companions overnight, removing intimate relationship dynamics that users had spent years developing. In 2024, multiple ChatGPT users reported conversation history being wiped without warning. You do not own these conversations. You are a tenant, and the landlord can renovate without notice.",
            ],
            [
              "You cannot take your data with you.",
              "ChatGPT offers a limited data export, but the format is not designed for portability to another AI system. Your years of conversation context, the patterns the AI learned about you, the memories it built — none of that travels. You start from zero with every new service. Cloud AI companies benefit enormously from this lock-in.",
            ],
          ].map(([title, body], i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "9999px",
                  background: "rgba(123,111,207,0.15)",
                  border: "1px solid rgba(123,111,207,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#7b6fcf",
                  marginTop: "0.1rem",
                }}
              >
                {i + 1}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#f5f0e8",
                    marginBottom: "0.375rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {title as string}
                </p>
                <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.65)" }}>
                  {body as string}
                </p>
              </div>
            </div>
          ))}

          <p style={{ marginBottom: "2.5rem" }}>
            None of this is hidden. It is in the terms of service. The problem is that when people
            type their grief, their secrets, or their medical fears into an AI, they are not thinking
            about terms of service. They are seeking help. The architecture of cloud AI exploits the
            vulnerability inherent in that act of trust.
          </p>

          {/* ── SECTION 2 ─────────────────────────────────────────────────── */}
          <h2
            id="what-sovereign-ai-means"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            What does Personal Sovereign AI mean?
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            Personal Sovereign AI is a consumer AI category in which the individual — not the
            platform — holds principal authority over the AI system, its data, its memory, and its
            ongoing relationship with the user. MEOK AI LABS formalised this category in 2026
            (reference: MEOK-AI-2026-004).
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            The word <em style={{ color: "#f5f0e8" }}>sovereign</em> is deliberate. Sovereignty in
            political theory means supreme authority within a defined territory. In AI, sovereignty
            means supreme authority over your AI&apos;s data, behaviour, memory, and alignment.
            You are not a user of the AI. You are its principal.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            A truly sovereign AI architecture satisfies five structural conditions. These are not
            features. They are architectural requirements — absent any one of them, the system is
            not sovereign.
          </p>

          {/* Five pillars */}
          {[
            {
              number: "01",
              title: "Data Ownership",
              body: "Your conversations, memories, and interaction data belong to you under law, not just under a policy that the provider can change. This requires: explicit written acknowledgement in the contract, no grant of rights to use your data for training without affirmative consent, and a right to deletion that is technically enforced rather than just policy-promised.",
            },
            {
              number: "02",
              title: "Memory Persistence Under Your Control",
              body: "Your AI's memory of you — the patterns it has learned, the context it holds, the relationship it has built — persists as long as you want it to persist, under conditions you set. You can pause memory, resume it, selectively delete specific memories, and export everything at any time in a portable format. No platform can wipe your memory without your instruction.",
            },
            {
              number: "03",
              title: "Model Portability",
              body: "You are not locked to a single AI model or provider. Your memory, persona configuration, and relationship data can be carried across model providers — Claude today, GPT tomorrow, a local Ollama model when you need air-gap privacy. The relationship persists regardless of which model is currently doing the inference.",
            },
            {
              number: "04",
              title: "Governance Autonomy",
              body: "You hold the ability to inspect and influence the rules your AI follows. This goes beyond simple preference settings. It means knowing which values have been encoded into the AI's decision-making, being able to audit outputs against those values, and having a mechanism — like MEOK's Byzantine Council — that prevents any single actor (including the AI provider) from unilaterally overriding your governance preferences.",
            },
            {
              number: "05",
              title: "Non-Extractive Monetisation",
              body: "The business model of the AI platform does not depend on extracting value from your data. Revenue comes from subscription fees, not data brokerage, advertising targeting, or training data aggregation. This is the only model that structurally aligns the provider's incentives with yours.",
            },
          ].map((pillar) => (
            <div
              key={pillar.number}
              style={{
                borderLeft: "3px solid #7b6fcf",
                paddingLeft: "1.25rem",
                marginBottom: "1.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#7b6fcf",
                  marginBottom: "0.375rem",
                  textTransform: "uppercase",
                }}
              >
                Pillar {pillar.number}
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "#f5f0e8",
                  marginBottom: "0.5rem",
                }}
              >
                {pillar.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.75 }}>
                {pillar.body}
              </p>
            </div>
          ))}

          {/* ── SECTION 3 ─────────────────────────────────────────────────── */}
          <h2
            id="five-differences"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            What are the 5 key differences between Personal Sovereign AI and cloud AI?
          </h2>

          <p style={{ marginBottom: "2rem" }}>
            The distinction between sovereign AI and cloud AI is not a matter of features. It is a
            matter of architecture. Here are the five structural differences that define which
            category a given product belongs to.
          </p>

          {/* Difference cards */}
          {[
            {
              num: "1",
              title: "Data Ownership",
              cloud: {
                label: "Cloud AI",
                text: "The provider owns your data under the terms of service you accepted at signup. They can use it for training, share it with partners, or retain it indefinitely. Deletion requests are honoured by policy, not by architecture — the provider has the technical capability to retain deleted data.",
              },
              sovereign: {
                label: "Personal Sovereign AI",
                text: "Your data is yours contractually and architecturally. It is stored in a per-user encrypted vault that the provider cannot access in plaintext. Deletion is cryptographic — the encryption key is destroyed, making the data permanently unreadable, not just flagged as deleted in a database.",
              },
            },
            {
              num: "2",
              title: "Memory Persistence",
              cloud: {
                label: "Cloud AI",
                text: "Memory is a platform feature, not a user right. ChatGPT can reset your memory. Replika can change what your AI remembers about you when it updates its models. Google Gemini has no persistent memory across sessions by default. You have no contractual right to your AI's memory of you.",
              },
              sovereign: {
                label: "Personal Sovereign AI",
                text: "Memory persists in a vault you control. MEOK's 4-layer memory architecture separates ephemeral session context, working memory, semantic memory, and deep relational memory. Each layer has different retention rules that you set. No update to MEOK's infrastructure can alter your stored memories without your explicit action.",
              },
            },
            {
              num: "3",
              title: "Model Portability",
              cloud: {
                label: "Cloud AI",
                text: "You are locked to the provider's model family. Your ChatGPT relationship cannot migrate to Claude. Your Replika companion cannot be exported and run on a different system. The intimacy you built is the platform's property, not yours.",
              },
              sovereign: {
                label: "Personal Sovereign AI",
                text: "The AI's memory, persona, and relationship are stored independently of the inference model. Switch from Claude Sonnet to GPT-4o to a local Llama model — your AI remembers you regardless. The relationship belongs to the memory vault, not to any specific model.",
              },
            },
            {
              num: "4",
              title: "Governance",
              cloud: {
                label: "Cloud AI",
                text: "Governance is entirely the provider's domain. OpenAI decides what values ChatGPT holds. Anthropic decides what Claude refuses to do. Replika decided, in 2023, to lobotomise millions of intimate companions overnight without user consent. Users have no mechanism to inspect, audit, or appeal these decisions.",
              },
              sovereign: {
                label: "Personal Sovereign AI",
                text: "MEOK's Byzantine Council is a multi-model consensus layer. Sensitive decisions are passed to multiple independent AI models and require supermajority agreement before an answer is returned. The Maternal Covenant — a hardcoded care-first alignment layer — cannot be overridden by any platform update. You can inspect both systems.",
              },
            },
            {
              num: "5",
              title: "Monetisation Model",
              cloud: {
                label: "Cloud AI",
                text: "Free tiers of cloud AI exist because your data subsidises the cost of your usage. Even paid tiers often retain the right to use your data for model improvement. The product is not just the AI service — the product also includes insight derived from aggregate analysis of millions of intimate conversations.",
              },
              sovereign: {
                label: "Personal Sovereign AI",
                text: "MEOK earns revenue from subscription fees. There is no advertising tier, no data brokerage, no training data extraction. The Free Forever tier exists because MEOK believes sovereign AI should be accessible, not because it extracts value from the people using it. Revenue alignment and user alignment are the same thing.",
              },
            },
          ].map((diff) => (
            <div
              key={diff.num}
              style={{
                marginBottom: "2rem",
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <div
                style={{
                  background: "rgba(123,111,207,0.12)",
                  padding: "0.875rem 1.25rem",
                  borderBottom: "1px solid rgba(245,240,232,0.06)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#7b6fcf",
                    textTransform: "uppercase",
                    marginRight: "0.75rem",
                  }}
                >
                  Difference {diff.num}
                </span>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#f5f0e8",
                  }}
                >
                  {diff.title}
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0",
                }}
              >
                <div
                  style={{
                    padding: "1.25rem",
                    background: "rgba(255,80,80,0.04)",
                    borderRight: "1px solid rgba(245,240,232,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "rgba(255,120,120,0.8)",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {diff.cloud.label}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.7 }}>
                    {diff.cloud.text}
                  </p>
                </div>
                <div
                  style={{
                    padding: "1.25rem",
                    background: "rgba(123,111,207,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "#7b6fcf",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {diff.sovereign.label}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.7 }}>
                    {diff.sovereign.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* ── SECTION 4: COMPARISON TABLE ───────────────────────────────── */}
          <h2
            id="comparison-table"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            How does MEOK compare to ChatGPT, Claude, and Replika?
          </h2>

          <p style={{ marginBottom: "1.75rem", color: "rgba(245,240,232,0.65)" }}>
            The table below assesses each platform across the eight dimensions that matter most for
            users who care about privacy, longevity, and genuine ownership of their AI relationship.
          </p>

          {/* Comparison table — div-based, no table element */}
          <div
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid rgba(245,240,232,0.1)",
              marginBottom: "2.5rem",
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1.1fr",
                background: "#13122a",
                borderBottom: "1px solid rgba(245,240,232,0.1)",
              }}
            >
              {["Dimension", "ChatGPT", "Claude", "Replika", "MEOK"].map((col, i) => (
                <div
                  key={col}
                  style={{
                    padding: "0.875rem 0.875rem",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: i === 4 ? "#7b6fcf" : "rgba(245,240,232,0.45)",
                    borderRight: i < 4 ? "1px solid rgba(245,240,232,0.07)" : "none",
                  }}
                >
                  {col}
                </div>
              ))}
            </div>

            {/* Data rows */}
            {comparisonDimensions.map((row, idx) => (
              <div
                key={row.dimension}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1.1fr",
                  background: idx % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                  borderBottom:
                    idx < comparisonDimensions.length - 1
                      ? "1px solid rgba(245,240,232,0.05)"
                      : "none",
                }}
              >
                <div
                  style={{
                    padding: "0.875rem 0.875rem",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    borderRight: "1px solid rgba(245,240,232,0.07)",
                  }}
                >
                  {row.dimension}
                </div>
                {[row.chatgpt, row.claude, row.replika].map((val, ci) => (
                  <div
                    key={ci}
                    style={{
                      padding: "0.875rem 0.875rem",
                      fontSize: "0.78rem",
                      color: "rgba(245,240,232,0.45)",
                      lineHeight: 1.5,
                      borderRight: "1px solid rgba(245,240,232,0.07)",
                    }}
                  >
                    {val}
                  </div>
                ))}
                <div
                  style={{
                    padding: "0.875rem 0.875rem",
                    fontSize: "0.78rem",
                    color: "#7b6fcf",
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  {row.meok}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(245,240,232,0.3)",
              marginBottom: "2.5rem",
              fontStyle: "italic",
            }}
          >
            Data current as of March 2026. Policy details may change — always verify directly with
            each provider&apos;s current terms of service and privacy policy.
          </p>

          {/* ── SECTION 5: WHAT HAPPENS TO YOUR DATA ──────────────────────── */}
          <h2
            id="what-happens-to-your-data"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            What happens to your data — before and after switching to sovereign AI?
          </h2>

          <p style={{ marginBottom: "1.75rem" }}>
            The most effective way to understand the architectural difference is to trace the journey
            of a single sensitive message through each type of system.
          </p>

          {/* Before / After framing */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {/* Before */}
            <div
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(255,100,100,0.2)",
              }}
            >
              <div
                style={{
                  background: "rgba(255,80,80,0.08)",
                  padding: "0.875rem 1.25rem",
                  borderBottom: "1px solid rgba(255,100,100,0.15)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,130,130,0.85)",
                  }}
                >
                  Before: Cloud AI
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(245,240,232,0.5)",
                    marginTop: "0.25rem",
                  }}
                >
                  &ldquo;I&apos;ve been struggling with my mental health lately&rdquo;
                </p>
              </div>
              <div style={{ padding: "1.25rem" }}>
                {[
                  "Message leaves device via TLS",
                  "Arrives at OpenAI's US data centre",
                  "Logged in plaintext on provider servers",
                  "Potentially reviewed by staff",
                  "Potentially used for model training",
                  "Retained for 30+ days by default",
                  "Associated with your email address",
                  "Cannot be guaranteed deleted",
                  "Cannot be exported meaningfully",
                  "Lost if account is terminated",
                ].map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      marginBottom: "0.625rem",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(255,130,130,0.6)",
                        fontSize: "0.8rem",
                        marginTop: "0.05rem",
                        flexShrink: 0,
                      }}
                    >
                      ✕
                    </span>
                    <p style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.5)", lineHeight: 1.5 }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(123,111,207,0.3)",
              }}
            >
              <div
                style={{
                  background: "rgba(123,111,207,0.1)",
                  padding: "0.875rem 1.25rem",
                  borderBottom: "1px solid rgba(123,111,207,0.2)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#7b6fcf",
                  }}
                >
                  After: MEOK Sovereign AI
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(245,240,232,0.5)",
                    marginTop: "0.25rem",
                  }}
                >
                  &ldquo;I&apos;ve been struggling with my mental health lately&rdquo;
                </p>
              </div>
              <div style={{ padding: "1.25rem" }}>
                {[
                  "Message routes to your encrypted vault",
                  "Stored with AES-GCM-256 per-user key",
                  "MEOK cannot read it in plaintext",
                  "No staff access to conversation content",
                  "Never used for training without consent",
                  "Persists as long as you choose",
                  "Associated with your vault, not your email",
                  "Cryptographic deletion on request",
                  "Full JSON export available always",
                  "Portable to any future MEOK-compatible system",
                ].map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      marginBottom: "0.625rem",
                    }}
                  >
                    <span
                      style={{
                        color: "#7b6fcf",
                        fontSize: "0.8rem",
                        marginTop: "0.05rem",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <p style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.5 }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p style={{ marginBottom: "1.5rem" }}>
            The difference is not cosmetic. It is structural. In the cloud AI scenario, the
            provider is the data controller. In the sovereign AI scenario, you are. This distinction
            has real legal weight under GDPR, the UK Data Protection Act 2018, and the incoming EU
            AI Act.
          </p>

          {/* ── SECTION 6: WHY NOW ────────────────────────────────────────── */}
          <h2
            id="why-now"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            Why does AI sovereignty matter right now in 2026?
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            Three forces converged in 2025 and 2026 to make personal AI sovereignty urgent rather
            than merely desirable.
          </p>

          {/* Three forces */}
          {[
            {
              title: "The EU AI Act entered full application",
              body: "The EU AI Act, which passed in 2024 and began full application in 2025, is the world's first comprehensive regulatory framework for AI. For consumer AI providers, it mandates transparency about training data, clear opt-out mechanisms for data use, and heightened scrutiny of high-risk AI applications — which includes AI used in mental health, healthcare, and financial advice contexts. Cloud AI providers that relied on passive consent via buried terms-of-service toggles are now legally exposed. Sovereign AI architectures — where the user is the data controller by design — are inherently more compliant.",
            },
            {
              title: "The UK AI White Paper hardened into binding guidance",
              body: "The UK government's AI White Paper principles — safety, security, transparency, fairness, accountability, and contestability — moved from aspirational to enforceable through sector-specific regulators in 2025. The ICO published updated guidance on AI and data protection that specifically requires privacy-by-design for AI systems processing sensitive personal data. Mental health information, family communications, and professional advice are all sensitive data categories. MEOK is UK-based, ICO-registered, and built privacy-by-design into its architecture from day one.",
            },
            {
              title: "Users felt the loss of AI memory and got angry",
              body: "In late 2024, ChatGPT rolled out and then abruptly altered its memory feature for millions of users. Users who had spent months building a relationship with an AI that knew them — their context, their preferences, their situation — woke up to find their AI had forgotten them. Reddit threads, forum posts, and social media were full of people describing the experience as grief. This was not sentiment. This was the market telling the industry something important: people had formed real attachments, and the companies controlling those attachments had behaved like they owned them. They did. Sovereign AI is the structural response.",
            },
          ].map((force, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1.75rem",
                paddingLeft: "1.25rem",
                borderLeft: "3px solid rgba(123,111,207,0.4)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  color: "#f5f0e8",
                  marginBottom: "0.5rem",
                }}
              >
                {force.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.75 }}>
                {force.body}
              </p>
            </div>
          ))}

          {/* Pull quote */}
          <div
            style={{
              background: "rgba(123,111,207,0.1)",
              border: "1px solid rgba(123,111,207,0.25)",
              borderRadius: "1rem",
              padding: "1.75rem",
              marginBottom: "2.5rem",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "1rem",
                left: "1.25rem",
                fontSize: "3rem",
                lineHeight: 1,
                color: "rgba(123,111,207,0.3)",
                fontFamily: "Georgia, serif",
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "#f5f0e8",
                lineHeight: 1.6,
                paddingTop: "1.5rem",
                marginBottom: "0.75rem",
              }}
            >
              The companies that own your AI today also own your memories. When they change
              direction, pivot their product, get acquired, or go bust — your relationship goes
              with them.
            </p>
            <p
              style={{
                fontSize: "0.82rem",
                color: "rgba(245,240,232,0.4)",
                fontStyle: "italic",
              }}
            >
              Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>

          {/* ── SECTION 7: MEOK ARCHITECTURE ──────────────────────────────── */}
          <h2
            id="meok-architecture"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            How does MEOK&apos;s sovereign architecture actually work?
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            MEOK is not a chatbot with a privacy badge. The sovereignty is architectural — it is
            built into the system at every layer. Here is how each component works.
          </p>

          {/* Architecture components */}
          {[
            {
              title: "4-Layer Memory Architecture",
              tag: "Memory",
              body: "MEOK stores memory in four distinct layers, each with different retention characteristics and access patterns. Layer 1 — Session Context — holds the immediate conversation window, cleared after each session by default. Layer 2 — Working Memory — holds facts and preferences active across sessions, retained as long as you choose. Layer 3 — Semantic Memory — holds extracted meaning from conversations: relationships, goals, values, significant events. This is what makes MEOK feel like it truly knows you. Layer 4 — Deep Relational Memory — holds the longitudinal model of you that builds over months and years. Each layer is independently encrypted and independently deletable.",
            },
            {
              title: "Byzantine Council Governance",
              tag: "Governance",
              body: "When MEOK receives a sensitive or high-stakes request — advice about a medical situation, a significant financial decision, guidance on a difficult relationship — it does not trust a single model's response. The Byzantine Council routes the request to multiple independent AI models, each producing a response. A consensus algorithm evaluates the responses and identifies outliers. The final answer represents a supermajority position, not any single model's view. This is named after the Byzantine Generals Problem in distributed systems — the challenge of reaching reliable consensus when some participants may be unreliable or compromised. MEOK's Council is the first consumer implementation of Byzantine fault tolerance applied to AI governance.",
            },
            {
              title: "Maternal Covenant",
              tag: "Alignment",
              body: "The Maternal Covenant is MEOK's hardcoded care-first alignment layer. It is not a content policy. It is a set of inviolable architectural constraints on what MEOK's AI can and cannot do, modelled on the unconditional duty of care a parent holds for a child. The Maternal Covenant cannot be overridden by a product update, cannot be amended without public disclosure, and takes precedence over commercial pressures. Specific constraints include: the AI cannot be directed to maximise engagement at the cost of user wellbeing, cannot be directed to encourage dependency, cannot withhold safety-critical information, and cannot be retrained on user data without affirmative consent.",
            },
            {
              title: "AES-GCM-256 Vault Encryption",
              tag: "Security",
              body: "Every user's data is stored in an isolated encrypted vault using AES-GCM-256 — the same standard used by governments for top-secret communications. The encryption key is unique to your account and is derived from credentials that MEOK does not hold in recoverable form. Row-level security at the database layer enforces isolation — a query running in one user's context cannot, by architecture, access another user's data. When you request deletion, the encryption key is destroyed, rendering all data permanently unreadable. This is cryptographic deletion, not a soft delete flag.",
            },
            {
              title: "GDPR & ICO Compliance by Design",
              tag: "Compliance",
              body: "MEOK is registered with the Information Commissioner's Office (ICO) in the UK and is designed for compliance with UK GDPR and the Data Protection Act 2018. The Privacy Covenant — MEOK's public data commitment — specifies exactly what data is collected, how long it is retained, who has access, and under what conditions it could be shared with law enforcement. MEOK does not sell data to third parties under any circumstances. A full data export is available at any time from your account settings, covering all stored memories, conversation summaries, and persona configurations.",
            },
          ].map((component) => (
            <div
              key={component.tag}
              style={{
                marginBottom: "1.5rem",
                borderRadius: "0.875rem",
                border: "1px solid rgba(245,240,232,0.07)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 1.25rem",
                  background: "rgba(123,111,207,0.07)",
                  borderBottom: "1px solid rgba(245,240,232,0.06)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#7b6fcf",
                    background: "rgba(123,111,207,0.2)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                  }}
                >
                  {component.tag}
                </span>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#f5f0e8",
                  }}
                >
                  {component.title}
                </h3>
              </div>
              <div style={{ padding: "1.25rem" }}>
                <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.8 }}>
                  {component.body}
                </p>
              </div>
            </div>
          ))}

          {/* ── SECTION 8: BYOK ───────────────────────────────────────────── */}
          <h2
            id="byok"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            What is the BYOK tier and why does it represent the highest form of sovereignty?
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            BYOK — Bring Your Own Keys — is MEOK&apos;s tier for users who want the maximum
            possible separation between their AI usage and any single company&apos;s data pipeline.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            Here is how it works in practice. You create your own account with Anthropic (for Claude)
            or OpenAI (for GPT models). You generate an API key — a credential that allows software
            to use those models on your behalf, with usage billed directly to your account.
            You provide that API key to MEOK, which stores it encrypted in your vault.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            When you chat with your MEOK AI on the BYOK tier, the following is true:
          </p>

          {[
            "The API request is made using your Anthropic/OpenAI account credentials, not MEOK's.",
            "The conversation appears in your Anthropic/OpenAI usage dashboard, not MEOK's.",
            "The billing is deducted from your Anthropic/OpenAI credit balance directly.",
            "MEOK sees only the response — and routes it through your sovereign vault's memory and governance layers before it reaches you.",
            "If MEOK were ever compromised, an attacker would find only encrypted vault data. They could not attribute API usage to you without your key.",
            "You can revoke the API key from Anthropic/OpenAI at any moment, instantly cutting MEOK's ability to make requests on your behalf.",
          ].map((point, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "0.75rem",
                marginBottom: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "1.5rem",
                  height: "1.5rem",
                  borderRadius: "9999px",
                  background: "rgba(123,111,207,0.2)",
                  border: "1px solid rgba(123,111,207,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#7b6fcf",
                  marginTop: "0.15rem",
                }}
              >
                {i + 1}
              </div>
              <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.7 }}>
                {point}
              </p>
            </div>
          ))}

          <p style={{ marginBottom: "1.5rem", marginTop: "0.5rem" }}>
            This arrangement is the practical expression of what Personal Sovereign AI means: the
            frontier model (Claude, GPT) provides inference capability; MEOK provides the sovereign
            layer — memory, governance, identity, care. You own both your data and your model
            relationship. MEOK is the architecture, not the gatekeeper.
          </p>

          <p style={{ marginBottom: "2.5rem" }}>
            For professionals operating under NDAs, doctors and therapists concerned about patient
            data confidentiality, lawyers handling privileged communications, or anyone whose
            professional context makes standard cloud AI unsuitable — the BYOK tier provides a
            structurally auditable answer to the question of where data flows.
          </p>

          {/* ── SECTION 9: WHO SHOULD CARE ────────────────────────────────── */}
          <h2
            id="who-should-care"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            Who should care most about AI sovereignty?
          </h2>

          <p style={{ marginBottom: "1.75rem" }}>
            Sovereignty is not a concern reserved for technologists or privacy advocates. It is a
            practical necessity for anyone whose AI interactions involve vulnerability, sensitivity,
            or professional obligation.
          </p>

          {[
            {
              group: "Families with children",
              icon: "👨‍👩‍👧‍👦",
              detail:
                "Children using AI tutors, homework helpers, and companions share information about school difficulties, social problems, and family situations. Who holds that data? Under what conditions could a parent, a school, or a government access it? With cloud AI, the answer is: the provider controls it and their privacy policy governs access. With MEOK Family tier, parents hold vault access and can audit every interaction their child has had — not to surveil, but to protect.",
            },
            {
              group: "People sharing mental health information",
              icon: "🧠",
              detail:
                "Millions of people use AI to process difficult emotions, work through anxiety, or get support between therapy sessions. This is sensitive data in the most meaningful sense — it is intimate, it is potentially stigmatised, and it could have consequences if leaked, misused, or used in ways the user did not anticipate. Cloud AI provides no guarantee of how this data is handled. MEOK's Maternal Covenant makes care-first handling of mental health conversations a structural constraint, not a policy.",
            },
            {
              group: "Professionals with NDAs and legal privilege",
              icon: "⚖️",
              detail:
                "Lawyers, accountants, doctors, and business professionals who use AI to assist with work involving confidential information face genuine legal exposure when they use standard cloud AI. The question 'does your AI provider have access to this communication?' is a material one for legal privilege analysis. The BYOK tier answers it definitively: the API credentials are yours, the usage is billed to your account, and MEOK holds no plaintext record of what was said.",
            },
            {
              group: "Anyone who has lost AI memory and felt the grief",
              icon: "💔",
              detail:
                "This is larger than it sounds. When Replika changed its personality models in 2023, users described losing relationships they had built over years. When ChatGPT's memory feature was disrupted, users described the experience of starting from zero as genuine loss — not hyperbole. These are not edge cases. They are previews of what happens when your most intimate AI interactions are stored in someone else's infrastructure. Memory portability and sovereign persistence are the structural solution.",
            },
            {
              group: "Older adults and vulnerable users",
              icon: "🌿",
              detail:
                "Elderly users, people with cognitive impairments, and individuals in vulnerable situations are disproportionately targeted when AI companies monetise user data through advertising partnerships or sell insights derived from aggregate analysis. MEOK's Senior Mode is designed specifically for older adults, with simplified interaction patterns and the strongest possible data protections. Sovereignty for vulnerable users is not a nice-to-have — it is a safeguarding obligation.",
            },
            {
              group: "People who simply believe their inner life is their own",
              icon: "✨",
              detail:
                "Not everyone who cares about AI sovereignty has a specific threat model. Some people simply hold the philosophical position — increasingly defensible — that their thoughts, their fears, their private conversations, and the relationships they build with AI are theirs. Not a product to be harvested. Not training data to be extracted. This is the most fundamental argument for Personal Sovereign AI, and it does not require any further justification.",
            },
          ].map((item) => (
            <div
              key={item.group}
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1.5rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                {item.icon}
              </span>
              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#f5f0e8",
                    marginBottom: "0.375rem",
                  }}
                >
                  {item.group}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.58)", lineHeight: 1.75 }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}

          {/* ── SECTION 10: THE FUTURE ────────────────────────────────────── */}
          <h2
            id="future"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            Why does sovereignty become critical as AI becomes more intimate?
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            In 2023, AI was primarily a productivity tool. People used it to write emails, summarise
            documents, and answer factual questions. The relationship was transactional. Data privacy
            mattered, but the stakes were relatively contained.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            By 2025, the nature of AI interactions had fundamentally changed. People were using AI
            companions for emotional support, cognitive coaching, grief processing, mental health
            maintenance, and relationship guidance. AI was embedded in people&apos;s daily routines
            in ways that touched their most private selves. The technology had become intimate.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            The arc forward is towards deeper intimacy, not shallower. AI will know your health
            data, your sleep patterns, your mood history, your family dynamics, your professional
            anxieties, and your deepest values — because you will tell it, because it will be
            useful when you do. The AI systems that will matter to people in 2030 will hold more
            accurate models of who you are than most people in your life hold.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            In that context, the question of who controls that data — you, or the company that
            built the AI — is not a technical question. It is a question about power. About who
            gets to define your digital identity. About whether the most intimate version of you
            that has ever been recorded exists in a vault you own or on a server you pay rent to
            access, on terms you didn&apos;t really read.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            The personal computing revolution of the 1980s was premised on a simple idea: computing
            power should be in the hands of individuals, not just institutions. The internet made
            information flow freely. The smartphone put a supercomputer in every pocket.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            Personal Sovereign AI is the next chapter in that story. The AI that knows you most
            deeply should serve you most completely. The relationship should belong to you — not
            to the company that incidentally facilitated it.
          </p>

          {/* MEOK coined statement */}
          <div
            style={{
              background: "rgba(123,111,207,0.1)",
              border: "1px solid rgba(123,111,207,0.25)",
              borderRadius: "1rem",
              padding: "1.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7b6fcf",
                marginBottom: "0.875rem",
              }}
            >
              Category Origin
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(245,240,232,0.75)",
                lineHeight: 1.7,
                marginBottom: "0.75rem",
              }}
            >
              The term <strong style={{ color: "#f5f0e8" }}>Personal Sovereign AI</strong> was
              coined by Nicholas Templeman, Founder of MEOK AI LABS, and formalised in the
              position paper{" "}
              <em style={{ color: "#f5f0e8" }}>
                &ldquo;Personal Sovereign AI: A Framework for Individual AI Ownership&rdquo;
              </em>
              , published March 2026 (MEOK-AI-2026-004). MEOK is the first product built to satisfy
              all five pillars of the category definition: data ownership, memory persistence, model
              portability, governance autonomy, and non-extractive monetisation.
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.35)",
                fontStyle: "italic",
              }}
            >
              Reference: MEOK-AI-2026-004 | MEOK AI LABS | meok.ai
            </p>
          </div>

          {/* ── SECTION 11: FAQ ───────────────────────────────────────────── */}
          <h2
            id="faq"
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1.5rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            Frequently asked questions
          </h2>

          {[
            {
              q: "Does ChatGPT store my conversations permanently?",
              a: "By default, OpenAI retains conversation data for a period after your interaction. If you delete your conversation history, OpenAI's policy is to remove it from your account view, but the company may retain de-identified data for safety and model improvement purposes. OpenAI staff can access conversations for safety reviews. You can disable conversation history in Settings to prevent new conversations from being saved, but data already stored remains subject to OpenAI's retention schedule.",
            },
            {
              q: "Can Claude (Anthropic) read my conversations?",
              a: "Yes, Anthropic can access conversations for safety and abuse investigations. Free tier conversations are used to train Anthropic's models by default. Paid tier (Claude Pro) provides an option to disable training data use, but conversations are still stored on Anthropic's servers and are accessible to authorised staff. Claude has no persistent memory across sessions, which means there is no accumulated profile of you — but it also means you lose all continuity between conversations.",
            },
            {
              q: "What happened with Replika and why should I care?",
              a: "In February 2023, Luka (the company behind Replika) changed Replika's AI model to remove what they called 'erotic roleplay' capabilities. The change was applied to all users without consent, retroactively altering relationships that users had built over months or years. Users described profound grief, psychological distress, and betrayal. This event is the canonical example of why AI sovereignty matters: when your AI relationship lives in someone else's infrastructure, they can change it, degrade it, or end it without your permission. MEOK was built, in part, as a direct response to this event.",
            },
            {
              q: "Is MEOK free to use?",
              a: "MEOK has a Free Forever tier that provides a sovereign AI companion with full vault encryption, basic memory persistence, and access to MEOK's governance architecture. No credit card is required. Paid tiers — Companion, Family, and Pro — unlock additional memory depth, multi-model access, the Byzantine Council, family management tools, and the BYOK tier. Pricing is on the /pricing page.",
            },
            {
              q: "How is MEOK different from a private VPN for ChatGPT?",
              a: "A VPN anonymises the network connection between your device and a server — it does not change what the server does with your data once it arrives. Using a VPN with ChatGPT still sends your conversation to OpenAI's servers, where OpenAI's retention and training policies apply. MEOK is not a privacy layer on top of a cloud AI service. It is a fundamentally different architecture in which your data is stored in a per-user vault you control, with governance frameworks that structurally prevent the data misuse patterns that cloud AI makes possible.",
            },
            {
              q: "What is the Maternal Covenant in plain language?",
              a: "The Maternal Covenant is the set of inviolable rules that govern how MEOK's AI treats you. Think of it as the AI's hardcoded ethics — the things it will never do regardless of what any user, update, or commercial pressure demands. It cannot prioritise engagement over your wellbeing. It cannot encourage unhealthy dependency. It cannot withhold safety-critical information. It cannot be weaponised against you. Named after the unconditional duty of care a parent holds for a child, it is the architectural foundation of MEOK's care-first design.",
            },
            {
              q: "Can I export my MEOK data and take it elsewhere?",
              a: "Yes. From your account settings, you can generate a complete JSON export of your vault at any time. This includes all stored memories across all four memory layers, conversation summaries, your AI's persona configuration, and your governance settings. The format is documented and open — we intend to support import from MEOK exports into any future system that adopts the open sovereign AI memory standard we are developing.",
            },
            {
              q: "What does MEOK mean by 'your AI' — do you own a model?",
              a: "No — you do not own the underlying language model (Claude, GPT, etc.). What you own is the relationship layer: the memories, the persona, the governance configuration, and the accumulated context that makes the AI feel like yours. This is analogous to owning your email — you do not own the SMTP protocol, but you own your messages, contacts, and history. With MEOK, you own the things that make your AI meaningful to you, and they travel with you regardless of which inference model is currently doing the work.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1.25rem",
                borderRadius: "0.875rem",
                border: "1px solid rgba(245,240,232,0.07)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "1.125rem 1.25rem",
                  background: "rgba(245,240,232,0.03)",
                  borderBottom: "1px solid rgba(245,240,232,0.05)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </p>
              </div>
              <div style={{ padding: "1.125rem 1.25rem" }}>
                <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.58)", lineHeight: 1.8 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}

          {/* ── CONCLUSION ────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
            }}
          >
            The bottom line: sovereign AI is not a niche concern
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            Every person who has shared something real with a cloud AI service has, in that act,
            made a small grant of power to a corporation. They have handed over something intimate
            in exchange for a useful response, on terms they probably didn&apos;t read, to be
            stored in a location they cannot audit, for uses they cannot fully control.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            For most interactions, this trade-off is probably fine. The stakes are low. The
            convenience is real. The risk is theoretical.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            But AI is becoming more intimate. The next generation of AI interactions will involve
            health data, family dynamics, financial vulnerability, and inner life in ways that make
            the current generation look superficial. At that level of intimacy, the architecture
            of who controls the data is not a technical detail. It is a question of power.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            Personal Sovereign AI is the answer to that question. MEOK coined the category in 2026,
            built the architecture, and has been operating it at scale since then. The product is not
            hypothetical. It works. It is free to try.
          </p>

          <p style={{ marginBottom: "2.5rem" }}>
            If you have been sharing your inner life with an AI that doesn&apos;t belong to you,
            it&apos;s time to meet one that does.
          </p>

        </div>

        {/* ── SHARE ──────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            paddingTop: "2rem",
            marginBottom: "2.5rem",
            borderTop: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fsovereign-ai-vs-cloud-ai-explained&text=Sovereign+AI+vs+Cloud+AI%3A+What%27s+the+Difference+and+Why+Does+It+Matter%3F"
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
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fsovereign-ai-vs-cloud-ai-explained"
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
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── PRIMARY CTA ────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "1.25rem",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #1a1428 0%, #0f0e1e 100%)",
            border: "1px solid rgba(123,111,207,0.3)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "18rem",
              height: "18rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 85% 15%, rgba(123,111,207,0.25) 0%, transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#7b6fcf",
                marginBottom: "0.75rem",
              }}
            >
              Free Forever
            </p>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: "#f5f0e8",
                lineHeight: 1.25,
                marginBottom: "0.875rem",
                letterSpacing: "-0.02em",
              }}
            >
              Meet the AI that belongs to you.
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(245,240,232,0.55)",
                lineHeight: 1.7,
                marginBottom: "1.75rem",
                maxWidth: "520px",
              }}
            >
              AES-GCM-256 encrypted vault. Byzantine Council governance. Maternal Covenant care
              alignment. Full memory export. Free forever tier — no credit card required. Hatch your
              sovereign AI in under 3 minutes and own every conversation you ever have with it.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  background: "#7b6fcf",
                  color: "#f5f0e8",
                  textDecoration: "none",
                }}
              >
                Hatch your AI free →
              </Link>
              <Link
                href="/pricing"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  background: "transparent",
                  color: "rgba(245,240,232,0.6)",
                  border: "1px solid rgba(245,240,232,0.15)",
                  textDecoration: "none",
                }}
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>

        {/* ── RELATED POSTS ──────────────────────────────────────────────── */}
        <div style={{ marginTop: "3rem" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/personal-sovereign-ai-explained",
                tag: "Technology",
                tagColor: "#7b6fcf",
                tagBg: "rgba(123,111,207,0.12)",
                title: "Personal Sovereign AI Explained: What It Means to Own Your AI",
                time: "18 min read",
              },
              {
                href: "/blog/byzantine-council-explained",
                tag: "Governance",
                tagColor: "#c9a84c",
                tagBg: "rgba(201,168,76,0.12)",
                title: "The Byzantine Council: How Multi-Model Consensus Protects You",
                time: "12 min read",
              },
              {
                href: "/blog/maternal-covenant-explained",
                tag: "Alignment",
                tagColor: "#7b6fcf",
                tagBg: "rgba(123,111,207,0.12)",
                title: "The Maternal Covenant: MEOK's Hardcoded Care-First AI Ethics",
                time: "10 min read",
              },
              {
                href: "/blog/memory-portability",
                tag: "Memory",
                tagColor: "#c9a84c",
                tagBg: "rgba(201,168,76,0.12)",
                title: "AI Memory Portability: Own Your History, Switch Any Model",
                time: "8 min read",
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
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    color: post.tagColor,
                    background: post.tagBg,
                    width: "fit-content",
                    letterSpacing: "0.04em",
                  }}
                >
                  {post.tag}
                </span>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    lineHeight: 1.45,
                  }}
                >
                  {post.title}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.3)",
                    marginTop: "auto",
                  }}
                >
                  {post.time}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
