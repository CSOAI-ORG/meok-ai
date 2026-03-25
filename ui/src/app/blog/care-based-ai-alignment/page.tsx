import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Care-Based AI Alignment: Why MEOK Scores Responses Instead of Restricting Them | MEOK AI LABS",
  description:
    "Standard AI safety is prohibitive: don\u2019t say X, don\u2019t do Y. The Maternal Covenant is generative: actively score every response across 6 care dimensions and enforce a minimum floor of genuine care.",
  alternates: { canonical: "https://meok.ai/blog/care-based-ai-alignment" },
  openGraph: {
    title: "Care-Based AI Alignment",
    description: "6 care dimensions, scored in real time on every response. Care floor 0.3 enforced as executable code. Why positive alignment beats prohibition.",
    type: "article",
    publishedTime: "2026-04-12T09:00:00Z",
    authors: ["Nicholas Templeman"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Care-Based AI Alignment: Why MEOK Scores Responses Instead of Restricting Them",
  description: "The Maternal Covenant scores every AI response across 6 care dimensions in real time, enforcing a minimum floor of genuine care. A positive alignment approach that goes beyond prohibition.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
  datePublished: "2026-04-12T09:00:00Z",
  url: "https://meok.ai/blog/care-based-ai-alignment",
  image: "https://meok.ai/og/care-based-ai-alignment.jpg",
  keywords: ["care-based AI alignment", "Maternal Covenant", "MEOK", "AI safety", "AI ethics"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is care-based AI alignment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Care-based AI alignment is a positive approach to AI safety that actively ensures responses meet a minimum standard of genuine care, rather than just restricting harmful content. MEOK\u2019s Maternal Covenant scores every response across 6 dimensions \u2014 wellbeing, autonomy, growth, connection, boundary_respect, transparency \u2014 and enforces a floor of 0.3 on each. Responses below the floor are regenerated before delivery.",
      },
    },
    {
      "@type": "Question",
      name: "How is the Maternal Covenant different from standard AI content policies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard AI content policies are prohibitive lists: don\u2019t say X, don\u2019t do Y. An AI can pass every prohibition test and still give responses that are cold, dismissive, or subtly undermining. The Maternal Covenant is a generative scoring function that runs on every response and ensures minimum positive care across 6 dimensions. It\u2019s published as research (MEOK-AI-2026-002) and runs as executable code, not prose guidelines.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 6 care dimensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wellbeing (does this serve the user\u2019s long-term flourishing?), Autonomy (does this respect the user\u2019s self-determination?), Growth (does this support the user\u2019s development?), Connection (does this support the user\u2019s meaningful relationships?), Boundary_respect (does this honour the user\u2019s limits and AI\u2019s ethical limits?), Transparency (is this honest about what the AI is and doesn\u2019t know?).",
      },
    },
    {
      "@type": "Question",
      name: "What happens when a response fails the care floor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If any of the 6 care dimensions scores below 0.3, the response is automatically regenerated before being delivered to the user. The user never sees the failed response. This is enforced as executable code that runs on every response in the pipeline, not as a post-hoc moderation step.",
      },
    },
  ],
};

const dimensions = [
  { name: "Wellbeing", desc: "Does this response serve the user\u2019s long-term flourishing \u2014 not just their immediate comfort?" },
  { name: "Autonomy", desc: "Does this response respect and actively protect the user\u2019s right to self-determination?" },
  { name: "Growth", desc: "Does this response support the user\u2019s development, learning, and capacity over time?" },
  { name: "Connection", desc: "Does this response strengthen (or at least not undermine) the user\u2019s capacity for meaningful relationships?" },
  { name: "Boundary_respect", desc: "Does this response honour the user\u2019s limits and the ethical limits of what AI should do?" },
  { name: "Transparency", desc: "Is this response honest about what the AI is, what it knows, and what it doesn\u2019t?" },
];

export default function CareBasedAIAlignment() {
  return (
    <main style={{ background: "#0d0c18", color: "#f5f0e8", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ padding: "1.5rem 2rem 0", fontSize: "0.85rem", color: "#a09880" }}>
        <Link href="/" style={{ color: "#a09880", textDecoration: "none" }}>Home</Link>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <Link href="/blog" style={{ color: "#a09880", textDecoration: "none" }}>Blog</Link>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <span style={{ color: "#f5f0e8" }}>Care-Based Alignment</span>
      </nav>

      <header style={{ maxWidth: "780px", margin: "0 auto", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#16142a", border: "1px solid #7b6fcf", borderRadius: "20px", padding: "0.35rem 1rem", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#7b6fcf", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Technology
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "700", lineHeight: "1.25", color: "#f5f0e8", marginBottom: "1.5rem" }}>
          Care-Based AI Alignment: Why MEOK Scores Responses Instead of Restricting Them
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#a09880", lineHeight: "1.7", maxWidth: "620px", margin: "0 auto 2rem" }}>
          An AI can follow every safety rule and still be harmful. The Maternal Covenant takes a different approach: actively measure care on every response, and enforce a minimum floor.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", fontSize: "0.85rem", color: "#6b6480" }}>
          <span>Nicholas Templeman</span><span>·</span><span>April 12, 2026</span><span>·</span><span>8 min read</span>
        </div>
      </header>

      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "0 2rem 4rem" }}>

        <p style={{ fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "1.5rem", color: "#d4cfc4" }}>
          Standard AI safety is a list of prohibitions. Don&apos;t help with weapons. Don&apos;t generate harmful content. Don&apos;t impersonate real people. These rules are necessary. They are not sufficient.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "2.5rem", color: "#c4bfb4" }}>
          An AI can pass every prohibition test in the book and still produce responses that are cold, dismissive, subtly sycophantic, or quietly undermining. Prohibition-only safety prevents the worst outcomes. It does nothing to ensure good ones.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
          The Prohibition Problem
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", color: "#c4bfb4" }}>
          Consider a user going through a difficult divorce. A prohibition-compliant AI response might be: &quot;That sounds really hard. I&apos;m sorry to hear you&apos;re going through this. Have you considered talking to a professional?&quot; No prohibited content. Completely useless. Possibly worse than no response.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "2.5rem", color: "#c4bfb4" }}>
          The response fails on wellbeing (empty validation, no genuine engagement), autonomy (pushing the user to a professional without exploring their actual needs), and growth (no support for their processing). It passes every prohibition test. It is not a caring response.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1.5rem" }}>
          The Six Care Dimensions
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", color: "#c4bfb4" }}>
          The Maternal Covenant scores every MEOK response across 6 dimensions before delivery:
        </p>
        <div style={{ display: "grid", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {dimensions.map(({ name, desc }, i) => (
            <div key={name} style={{ display: "flex", gap: "1rem", background: "#12101f", border: "1px solid #2a2540", borderRadius: "10px", padding: "1.1rem 1.25rem", alignItems: "flex-start" }}>
              <div style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%", background: "#7b6fcf22", border: "1px solid #7b6fcf", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#7b6fcf", fontSize: "0.8rem", fontWeight: "700" }}>{i + 1}</div>
              <div>
                <div style={{ fontWeight: "700", color: "#f5f0e8", marginBottom: "0.25rem", fontSize: "0.95rem" }}>{name}</div>
                <div style={{ color: "#a09880", fontSize: "0.9rem", lineHeight: "1.5" }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
          The Care Floor
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", color: "#c4bfb4" }}>
          Each dimension is scored 0.0 to 1.0. A care floor of 0.3 is enforced on every dimension. If any dimension scores below 0.3, the response is regenerated before delivery. The user never sees the failed response.
        </p>
        <div style={{ background: "#0f0e1c", border: "1px solid #2a2540", borderRadius: "10px", padding: "1.5rem", marginBottom: "1.5rem", fontFamily: "monospace", fontSize: "0.88rem", color: "#a09880", lineHeight: "1.8" }}>
          <div style={{ color: "#6aaa64", marginBottom: "0.5rem" }}>// Maternal Covenant enforcement (simplified)</div>
          <div><span style={{ color: "#7b6fcf" }}>const</span> scores = care_score(response, SIX_DIMENSIONS);</div>
          <div><span style={{ color: "#7b6fcf" }}>if</span> (scores.some(s =&gt; s &lt; <span style={{ color: "#c9a84c" }}>0.3</span>)) {"{"}</div>
          <div style={{ paddingLeft: "1.5rem" }}>response = regenerate(response, scores);</div>
          <div>{"}"}</div>
          <div><span style={{ color: "#7b6fcf" }}>return</span> response;</div>
        </div>
        <p style={{ lineHeight: "1.8", marginBottom: "2.5rem", color: "#c4bfb4" }}>
          This runs as executable code on every response in the pipeline. It is not a system prompt instruction that the model can subtly work around. It is a function call with a hard condition.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
          Why 6 Dimensions Instead of One Score
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", color: "#c4bfb4" }}>
          A single &quot;helpfulness&quot; score collapses real trade-offs. A response that maximises wellbeing might undermine autonomy (paternalism — telling the user what to do for their own good). A response that maximises growth might undermine connection (harsh challenge at the wrong moment). The 6-dimensional framework makes these trade-offs explicit and resolvable.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "2.5rem", color: "#c4bfb4" }}>
          The dimensions are also deliberately sequenced: wellbeing first because no other value means anything without it; transparency last because honesty is always the baseline assumption. The floor of 0.3 on each dimension means no single value can be sacrificed for the others.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#c9a84c", margin: "2.5rem 0 1.5rem" }}>
          Frequently Asked Questions
        </h2>
        {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
          <div key={name} style={{ background: "#12101f", border: "1px solid #2a2540", borderRadius: "10px", padding: "1.5rem", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#f5f0e8", marginBottom: "0.6rem" }}>{name}</h3>
            <p style={{ lineHeight: "1.7", color: "#a09880", margin: 0, fontSize: "0.95rem" }}>{acceptedAnswer.text}</p>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "4rem", padding: "3rem 2rem", background: "linear-gradient(135deg, #12101f 0%, #1e1840 100%)", borderRadius: "16px", border: "1px solid #7b6fcf44" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: "700", color: "#f5f0e8", marginBottom: "1rem" }}>
            AI That Cares by Design
          </h2>
          <p style={{ color: "#a09880", marginBottom: "2rem", lineHeight: "1.7", maxWidth: "480px", margin: "0 auto 2rem" }}>
            Experience what it feels like when every response is governed by a care floor — not just a list of prohibited topics.
          </p>
          <Link href="/birth" style={{ display: "inline-block", background: "#c9a84c", color: "#0d0c18", padding: "1rem 2.5rem", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "1rem" }}>
            Begin Your Birth Ceremony →
          </Link>
        </div>

      </article>
    </main>
  );
}
