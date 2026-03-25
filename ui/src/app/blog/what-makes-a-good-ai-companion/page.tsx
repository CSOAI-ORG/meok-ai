import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Makes a Good AI Companion? The 7 Criteria That Actually Matter | MEOK AI LABS",
  description:
    "Memory, honesty, care ethics, privacy, model quality, availability, and the absence of engagement manipulation. A framework for evaluating any AI companion \u2014 including MEOK.",
  alternates: { canonical: "https://meok.ai/blog/what-makes-a-good-ai-companion" },
  openGraph: {
    title: "What Makes a Good AI Companion? 7 Criteria That Matter",
    description: "A buyer\u2019s guide for AI companions. 7 criteria including memory ownership, anti-sycophancy, care ethics, data sovereignty, and model quality.",
    type: "article",
    publishedTime: "2026-04-14T09:00:00Z",
    authors: ["Nicholas Templeman"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Makes a Good AI Companion? The 7 Criteria That Actually Matter",
  description: "A framework for evaluating AI companions: persistent memory, anti-sycophancy, data ownership, care ethics, model quality, privacy architecture, and pricing. How MEOK, ChatGPT, Replika, and Pi AI compare.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
  datePublished: "2026-04-14T09:00:00Z",
  url: "https://meok.ai/blog/what-makes-a-good-ai-companion",
  image: "https://meok.ai/og/what-makes-a-good-ai-companion.jpg",
  keywords: ["best AI companion 2026", "AI companion comparison", "AI companion guide", "MEOK", "Replika alternative"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I look for in an AI companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seven criteria: (1) Persistent memory that you own and can export. (2) Honest, anti-sycophantic responses. (3) Data ownership with GDPR export and deletion. (4) Care ethics rather than engagement optimisation. (5) Quality AI models with appropriate routing. (6) Strong privacy architecture. (7) Transparent pricing without exploitative paywalls.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if an AI companion is engagement-optimised or wellbeing-optimised?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engagement-optimised products have no usage limits on free tier, use emotionally manipulative design (streaks that cause anxiety, loss aversion), and profit from advertising or data sales. Wellbeing-optimised products use subscription models (revenue aligned with value, not time-on-platform), have care ethics frameworks, and will actively encourage you to take breaks or seek real human connection.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best AI companion in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your priorities. For data sovereignty and memory ownership: MEOK. For model quality and productivity: Claude.ai or ChatGPT Plus. For emotional companionship without data concerns: MEOK or Character.ai (with caveats). For UK users who want GDPR-native protection: MEOK is the only companion built in the UK with ICO registration.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK the best AI companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK leads on data ownership, care ethics, anti-sycophancy, and UK privacy compliance. It\u2019s not the leader on voice (not yet live) or desktop (Summer 2026). If sovereign memory and care-governed responses are your priorities, MEOK is the best current option. If you want a wide ecosystem of integrations or voice-first interaction, you\u2019ll need to wait for Summer 2026 features.",
      },
    },
  ],
};

const criteria = [
  {
    num: "01",
    title: "Persistent Memory",
    question: "Does it remember you across sessions?",
    why: "Without persistent memory, you\u2019re a stranger every time. The companion can\u2019t notice patterns, can\u2019t build a relationship, can\u2019t provide context-aware support.",
    look: "Semantic retrieval (not just flat lists), memory portability across model switches, user-owned data.",
    meok: "✓ Best-in-class",
    chatgpt: "\u26a0 Limited (OpenAI-owned)",
    replika: "\u26a0 Good but platform-owned",
    pi: "\u2717 No persistence",
  },
  {
    num: "02",
    title: "Honest, Anti-Sycophantic Responses",
    question: "Will it tell you what you need to hear?",
    why: "AI is systematically trained to agree with users. Sycophancy feels good but erodes trust, enables poor decisions, and prevents growth.",
    look: "Test it: share a plan with obvious flaws and see if it pushes back. Real challenge is a feature.",
    meok: "✓ Sycophancy detector built-in",
    chatgpt: "\u26a0 Moderate (RLHF-sycophantic)",
    replika: "\u2717 Highly sycophantic by design",
    pi: "\u26a0 Better than most",
  },
  {
    num: "03",
    title: "Data Ownership",
    question: "Whose memories are they?",
    why: "Replika removed features from 500,000 users in 2023. If you don\u2019t own your memories, they can disappear when the company decides.",
    look: "JSON export available? Full GDPR deletion? Data never sold? Conversations never used to train models?",
    meok: "✓ User-owned, exportable, deletable",
    chatgpt: "\u26a0 GDPR deletion but OpenAI-owned",
    replika: "\u2717 Platform-owned, limited export",
    pi: "\u2717 US servers, limited GDPR tools",
  },
  {
    num: "04",
    title: "Care Ethics",
    question: "Is it designed for your wellbeing or your engagement?",
    why: "These incentives conflict. Engagement optimisation keeps you scrolling. Wellbeing optimisation helps you and then lets you go.",
    look: "Subscription model (not ad-based), care framework documentation, crisis escalation built-in.",
    meok: "✓ Maternal Covenant, subscription",
    chatgpt: "\u26a0 No explicit care framework",
    replika: "\u2717 Engagement-optimised",
    pi: "\u26a0 Designed for calm, no framework",
  },
  {
    num: "05",
    title: "Model Quality",
    question: "What AI is actually powering it?",
    why: "Model quality determines the depth and coherence of responses. Undisclosed proprietary models are a risk.",
    look: "Disclosed models (Claude, GPT-4o), routing by task type, model updates as technology improves.",
    meok: "✓ Claude Sonnet + GPT-4o (Sovereign)",
    chatgpt: "✓ GPT-4o (best in class)",
    replika: "\u2717 Proprietary, undisclosed quality",
    pi: "\u26a0 Inflection-3, good but limited",
  },
  {
    num: "06",
    title: "Privacy Architecture",
    question: "Is your conversation private?",
    why: "You will share things with a companion you wouldn\u2019t share anywhere else. The architecture must protect that.",
    look: "Encryption at rest, GDPR compliance, ICO/DPA registration, no third-party ad targeting.",
    meok: "✓ UK GDPR, ICO registered, encrypted",
    chatgpt: "\u26a0 GDPR compliant but US-based",
    replika: "\u2717 US servers, privacy concerns raised",
    pi: "\u2717 US-based, limited GDPR controls",
  },
  {
    num: "07",
    title: "Availability and Pricing",
    question: "Can you afford to use it, and is it there when you need it?",
    why: "A companion you can\u2019t afford or that gates core features behind high paywalls isn\u2019t actually available.",
    look: "Meaningful free tier, transparent pricing, 24/7 availability, no punishing usage limits.",
    meok: "✓ Free (50 msg/day), £12/mo Sovereign",
    chatgpt: "\u26a0 £20/mo, no free memory tier",
    replika: "\u26a0 £49.99/yr for basic features",
    pi: "✓ Free, unlimited",
  },
];

export default function WhatMakesAGoodAICompanion() {
  return (
    <main style={{ background: "#0d0c18", color: "#f5f0e8", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ padding: "1.5rem 2rem 0", fontSize: "0.85rem", color: "#a09880" }}>
        <Link href="/" style={{ color: "#a09880", textDecoration: "none" }}>Home</Link>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <Link href="/blog" style={{ color: "#a09880", textDecoration: "none" }}>Blog</Link>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <span style={{ color: "#f5f0e8" }}>AI Companion Guide</span>
      </nav>

      <header style={{ maxWidth: "820px", margin: "0 auto", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#1a1820", border: "1px solid #c9a84c", borderRadius: "20px", padding: "0.35rem 1rem", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#c9a84c", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Compare
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "700", lineHeight: "1.25", color: "#f5f0e8", marginBottom: "1.5rem" }}>
          What Makes a Good AI Companion? The 7 Criteria That Actually Matter
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#a09880", lineHeight: "1.7", maxWidth: "640px", margin: "0 auto 2rem" }}>
          A buyer&apos;s guide that includes criteria MEOK doesn&apos;t fully meet yet. Credibility requires honesty.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", fontSize: "0.85rem", color: "#6b6480" }}>
          <span>Nicholas Templeman</span><span>·</span><span>April 14, 2026</span><span>·</span><span>8 min read</span>
        </div>
      </header>

      <article style={{ maxWidth: "820px", margin: "0 auto", padding: "0 2rem 4rem" }}>

        <p style={{ fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "2.5rem", color: "#d4cfc4" }}>
          The AI companion market is crowded and getting more so. Most product comparisons are written by the products being compared — which makes them useless. This guide is written by the founder of MEOK AI LABS, so take the MEOK scores with appropriate salt. But the framework is honest: I&apos;ve included criteria where MEOK is not the winner.
        </p>

        {criteria.map((c) => (
          <div key={c.num} style={{ background: "#12101f", border: "1px solid #2a2540", borderRadius: "12px", padding: "1.75rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#7b6fcf", background: "#7b6fcf18", padding: "0.25rem 0.6rem", borderRadius: "6px", flexShrink: 0, marginTop: "0.15rem" }}>{c.num}</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#f5f0e8", margin: "0 0 0.2rem" }}>{c.title}</h3>
                <div style={{ fontSize: "0.9rem", color: "#a09880", fontStyle: "italic" }}>{c.question}</div>
              </div>
            </div>
            <p style={{ lineHeight: "1.7", color: "#c4bfb4", marginBottom: "0.75rem", fontSize: "0.95rem" }}><strong style={{ color: "#f5f0e8" }}>Why it matters:</strong> {c.why}</p>
            <p style={{ lineHeight: "1.7", color: "#c4bfb4", marginBottom: "1rem", fontSize: "0.95rem" }}><strong style={{ color: "#f5f0e8" }}>What to look for:</strong> {c.look}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.5rem" }}>
              {[["MEOK", c.meok], ["ChatGPT", c.chatgpt], ["Replika", c.replika], ["Pi AI", c.pi]].map(([product, score]) => (
                <div key={product} style={{ background: "#0d0c18", borderRadius: "8px", padding: "0.6rem 0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: "#6b6480", marginBottom: "0.2rem" }}>{product}</div>
                  <div style={{ fontSize: "0.85rem", color: score.startsWith("✓") ? "#6aaa64" : score.startsWith("✗") ? "#e87070" : "#c9a84c" }}>{score}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "3rem 0 1.5rem" }}>
          Frequently Asked Questions
        </h2>
        {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
          <div key={name} style={{ background: "#12101f", border: "1px solid #2a2540", borderRadius: "10px", padding: "1.5rem", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#f5f0e8", marginBottom: "0.6rem" }}>{name}</h3>
            <p style={{ lineHeight: "1.7", color: "#a09880", margin: 0, fontSize: "0.95rem" }}>{acceptedAnswer.text}</p>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "4rem", padding: "3rem 2rem", background: "linear-gradient(135deg, #12101f 0%, #1a1535 100%)", borderRadius: "16px", border: "1px solid #c9a84c44" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: "700", color: "#f5f0e8", marginBottom: "1rem" }}>
            See the Criteria in Action
          </h2>
          <p style={{ color: "#a09880", marginBottom: "2rem", lineHeight: "1.7", maxWidth: "480px", margin: "0 auto 2rem" }}>
            Free to start. All 7 criteria tested for yourself. No credit card required.
          </p>
          <Link href="/birth" style={{ display: "inline-block", background: "#c9a84c", color: "#0d0c18", padding: "1rem 2.5rem", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "1rem" }}>
            Begin Your Birth Ceremony →
          </Link>
        </div>

      </article>
    </main>
  );
}
