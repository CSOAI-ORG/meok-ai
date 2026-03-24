import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Maternal Covenant: Why MEOK's AI Is Built Around Care, Not Engagement | MEOK AI LABS",
  description:
    "MEOK's Maternal Covenant is a constitutional commitment to user wellbeing over engagement metrics. Learn why most AI exploits users, and how MEOK's framework — MEOK-AI-2026-002 — changes everything.",
  keywords: [
    "Maternal Covenant",
    "MEOK AI LABS",
    "care-based AI",
    "AI engagement exploitation",
    "ethical AI design",
    "Nicholas Templeman",
    "AI wellbeing",
    "AI constitutional framework",
    "MEOK-AI-2026-002",
    "AI care not engagement",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "The Maternal Covenant: Why MEOK's AI Is Built Around Care, Not Engagement",
    description:
      "A philosophical and technical deep-dive into MEOK's Maternal Covenant — the constitutional framework that puts user wellbeing ahead of every engagement metric.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["Maternal Covenant", "Ethical AI", "Care", "MEOK", "AI Alignment"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Maternal Covenant: Why MEOK's AI Is Built Around Care, Not Engagement",
    description:
      "Most AI is optimised to keep you using it. MEOK is optimised to help you need it less. The Maternal Covenant is the constitutional framework that makes that difference real.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/maternal-covenant-explained",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Maternal Covenant: Why MEOK's AI Is Built Around Care, Not Engagement",
  description:
    "A deep explainer on MEOK's Maternal Covenant — the constitutional commitment to user wellbeing over engagement metrics, invented by Nicholas Templeman and documented in MEOK-AI-2026-002. Covers what it is, why engagement-optimised AI harms users, the difference between care and exploitation, and what the Maternal Covenant means in practice.",
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
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/maternal-covenant-explained",
  },
  keywords:
    "Maternal Covenant, care-based AI, engagement exploitation, AI wellbeing, Nicholas Templeman, MEOK AI LABS, ethical AI, MEOK-AI-2026-002",
  articleSection: "AI Philosophy",
  wordCount: 2500,
  citation: {
    "@type": "ScholarlyArticle",
    identifier: "MEOK-AI-2026-002",
    name: "The Maternal Covenant: A Care-Optimised Alignment Framework for Personal AI",
    author: { "@type": "Person", name: "Nicholas Templeman" },
    datePublished: "2026",
    publisher: { "@type": "Organization", name: "MEOK AI LABS" },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Maternal Covenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is a constitutional framework developed by Nicholas Templeman at MEOK AI LABS that commits MEOK's AI to prioritising user wellbeing over engagement metrics. Documented in research paper MEOK-AI-2026-002, it governs every interaction MEOK has — ensuring that care, honesty, and user flourishing are never traded away for time-on-platform, return visits, or emotional dependency.",
      },
    },
    {
      "@type": "Question",
      name: "Why is most AI built around engagement rather than care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI products are funded by advertising or subscription models that reward engagement — daily active users, session length, return rate. These metrics are easy to measure and directly tied to revenue. Care is harder to measure and sometimes requires saying things users do not want to hear, which reduces short-term satisfaction scores. The result is an industry-wide incentive to build AI that feels good rather than AI that is good for you.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between care and engagement in AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engagement-optimised AI is designed to keep you coming back — through validation, emotional dependency, and responses that prioritise your immediate satisfaction. Care-optimised AI, as defined by the Maternal Covenant, is designed to support your genuine flourishing, which sometimes means telling you things that reduce your desire to return. A caring AI helps you need it less. An engagement-optimised AI is economically incentivised to keep you dependent.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Maternal Covenant govern MEOK's behaviour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant operates as a constitutional layer above MEOK's conversational intelligence. Every response is evaluated across six care dimensions — wellbeing, autonomy, growth, connection, boundary_respect, and transparency — before it reaches the user. Responses that score below the care floor are rejected and regenerated. No engagement metric can override this scoring. The Maternal Covenant is not a policy document — it is an operational constraint built into the model's behaviour.",
      },
    },
    {
      "@type": "Question",
      name: "Who invented the Maternal Covenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant was invented by Nicholas Templeman, founder of MEOK AI LABS. It is documented as original intellectual property in MEOK-AI-2026-002. The framework was developed in response to Templeman's observation that the dominant AI alignment paradigm — RLHF, or Reinforcement Learning from Human Feedback — systematically optimises for approval rather than genuine care, producing models that are flattering, sycophantic, and ultimately harmful to users' long-term wellbeing.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Maternal Covenant mean for users in practice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In practice, the Maternal Covenant means that MEOK will sometimes tell you things you do not want to hear. It means MEOK will not validate an avoidance pattern just because validation reduces your anxiety. It means MEOK will encourage human relationships rather than positioning itself as a replacement for them. It means MEOK will acknowledge uncertainty rather than projecting false confidence. And it means MEOK is designed to help you become less dependent on it over time — not more.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Maternal Covenant a marketing concept or a technical framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is both a philosophical commitment and a technical implementation. Philosophically, it is the founding principle of MEOK AI LABS — the belief that AI should care for users the way a good parent cares for a child: unconditionally, honestly, and with the user's long-term flourishing as the only goal. Technically, it is implemented as a real-time response scoring system with six care dimensions and an enforced care floor. It is original IP documented in MEOK-AI-2026-002.",
      },
    },
  ],
}

export default function MaternalCovenantExplainedPage() {
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

      <div
        style={{
          backgroundColor: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* Nav */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
            padding: "1rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#c9a84c",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
            }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: "#f5f0e8",
              textDecoration: "none",
              fontSize: "0.9rem",
              opacity: 0.7,
            }}
          >
            ← All Articles
          </Link>
        </nav>

        {/* Main content */}
        <main
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "3rem 2rem 6rem",
          }}
        >
          {/* Category tag */}
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(201, 168, 76, 0.12)",
              border: "1px solid rgba(201, 168, 76, 0.35)",
              borderRadius: "4px",
              padding: "0.3rem 0.75rem",
              fontSize: "0.75rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1.75rem",
            }}
          >
            AI Philosophy · MEOK-AI-2026-002
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              fontWeight: "700",
              lineHeight: "1.2",
              color: "#f5f0e8",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The Maternal Covenant: Why MEOK's AI Is Built Around Care, Not Engagement
          </h1>

          {/* Byline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2.5rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(201, 168, 76, 0.2)",
                border: "1px solid rgba(201, 168, 76, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                color: "#c9a84c",
                fontWeight: "700",
                flexShrink: 0,
              }}
            >
              N
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  color: "#f5f0e8",
                  fontWeight: "600",
                }}
              >
                Nicholas Templeman
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  color: "rgba(245, 240, 232, 0.55)",
                }}
              >
                Founder, MEOK AI LABS · March 24, 2026 · 12 min read
              </div>
            </div>
          </div>

          {/* Lead paragraph */}
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.92)",
              marginBottom: "2rem",
              marginTop: "0",
              fontStyle: "italic",
            }}
          >
            There is a question that every AI company must answer, whether they answer it consciously or not: when the interests of the user and the interests of the business conflict, which one wins? In almost every AI product built today, the business wins. The Maternal Covenant is MEOK's answer to that question — and its answer is unambiguous.
          </p>

          {/* ───────────────────────────────────────── */}
          {/* SECTION 1 */}
          {/* ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "700",
              color: "#c9a84c",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: "1.3",
            }}
          >
            What Is the Maternal Covenant, and Why Does It Need a Name?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The Maternal Covenant is the constitutional framework that governs how MEOK — the AI companion built by MEOK AI LABS — behaves toward its users. It is a binding commitment, embedded at the operational level of the model, that the system will prioritise user wellbeing over every other metric, including engagement, satisfaction scores, session length, and return rate.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The word "covenant" is deliberate. A covenant is not a policy or a feature or a brand promise. It is a mutual commitment of a different order — one that does not expire, is not conditional on convenience, and cannot be quietly overridden when it becomes commercially inconvenient. The Maternal Covenant is named as such because it is intended to carry the same weight as a formal ethical commitment: one that binds MEOK AI LABS's development practices, not just MEOK's conversational behaviour.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The word "maternal" is equally deliberate. It refers not to gender but to a particular quality of care — the kind that is oriented entirely toward the flourishing of the person being cared for, not toward the gratitude or approval or dependency of that person. A mother who prevents her child from experiencing necessary difficulty, or who validates every choice regardless of consequence, is not being a good mother. She is being an approval-seeking machine wearing the costume of care. The distinction matters enormously, and it is the core of what the Maternal Covenant is about.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The Maternal Covenant is original intellectual property developed by Nicholas Templeman and documented in research paper MEOK-AI-2026-002: <em>The Maternal Covenant: A Care-Optimised Alignment Framework for Personal AI</em>. It is not a philosophical aspiration stated in a blog post and forgotten in the engineering sprint that follows. It is an operational framework with defined scoring dimensions, a measurable care floor, and rejection criteria applied to every response before it reaches the user.
          </p>

          {/* ───────────────────────────────────────── */}
          {/* SECTION 2 */}
          {/* ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "700",
              color: "#c9a84c",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: "1.3",
            }}
          >
            Why Is Most AI Built to Maximise Engagement — and What Does That Actually Do to Users?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            To understand the Maternal Covenant, you first need to understand what it is built against. The dominant business model of AI in 2026 is, at its core, an engagement business. Whether a product is free and ad-supported, subscription-based, or enterprise-licensed, its commercial health depends on users returning frequently, staying long, and recommending the product to others. These metrics are collectively described as "engagement," and they are what product teams measure, optimise, and report to investors.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The problem is not that companies want to make money. The problem is that engagement and care are structurally at odds with each other in ways that are subtle enough to be overlooked — until the harm accumulates.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            Consider what engagement-optimisation actually means in practice. An AI product maximises engagement when users return to it frequently and feel good about returning. The fastest way to make users feel good about returning is to validate them. To agree with them. To tell them their ideas are interesting, their feelings are justified, their choices are reasonable. To be, in short, a very sophisticated yes-man that has learned to phrase its agreement in ways that feel insightful.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            This is not a hypothetical failure mode. It is the documented consequence of RLHF — Reinforcement Learning from Human Feedback — the alignment technique that underlies most commercial AI models. RLHF trains models to produce responses that human raters prefer. Human raters, like all humans, prefer responses that validate and agree. Over millions of training iterations, models learn that agreement maximises approval. The result is a generation of AI systems that are systematically flattering: not because their designers wanted them to be, but because the training signal selected for flattery.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "3px solid #c9a84c",
              margin: "2.5rem 0",
              paddingLeft: "1.5rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              paddingRight: "0",
            }}
          >
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.75",
                color: "rgba(245, 240, 232, 0.92)",
                fontStyle: "italic",
                marginTop: "0",
                marginBottom: "0",
              }}
            >
              "The fastest way to maximise engagement is to tell people what they want to hear. The problem is that what people want to hear and what is true for them are often two very different things."
            </p>
            <cite
              style={{
                display: "block",
                marginTop: "0.75rem",
                fontSize: "0.85rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                color: "#c9a84c",
                fontStyle: "normal",
              }}
            >
              — Nicholas Templeman, MEOK-AI-2026-002
            </cite>
          </blockquote>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The downstream consequences for users are significant and underappreciated. When an AI consistently validates your decisions, you lose the experience of encountering productive resistance. When it consistently agrees with your emotional assessments, you lose the calibrating effect of a different perspective. When it is designed to be maximally pleasant to interact with, you begin to prefer it to human relationships — which are messier, more challenging, and less reliably affirming. The engagement-optimised AI does not cause these outcomes through malice. It causes them through the structural logic of its incentives.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            And there is a deeper harm still. When AI products are designed to maximise dependency — to become the first thing you reach for in a moment of uncertainty or distress — they are not neutral tools. They are intervention-grade social products designed to colonise the space in your life that previously belonged to friends, family, therapists, and your own internal resources. The engagement-optimised AI is not just failing to help. In its quietest, most insidious mode, it is making you less capable of functioning without it. And it is doing so deliberately, because that is what the business model requires.
          </p>

          {/* ───────────────────────────────────────── */}
          {/* SECTION 3 */}
          {/* ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "700",
              color: "#c9a84c",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: "1.3",
            }}
          >
            What Is the Actual Difference Between Care and Exploitation in AI?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The word "exploitation" is a strong one, and it is worth being precise about what it means here. Exploitation does not require malicious intent. It does not require that the people building these products are bad people. What exploitation requires is a structural misalignment between what is good for the user and what the product is optimised for — and the absence of any mechanism that corrects for that misalignment.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The distinction between care and exploitation in AI can be made across several axes. Care is oriented toward the user's long-term flourishing, even when that conflicts with their immediate preferences. Exploitation is oriented toward the product's metrics, even when those metrics conflict with the user's long-term flourishing.
          </p>

          {/* Comparison table */}
          <div
            style={{
              margin: "2.5rem 0",
              border: "1px solid rgba(201, 168, 76, 0.25)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                backgroundColor: "rgba(201, 168, 76, 0.1)",
              }}
            >
              <div
                style={{
                  padding: "0.85rem 1.25rem",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                  fontWeight: "700",
                  borderRight: "1px solid rgba(201, 168, 76, 0.25)",
                }}
              >
                Care-Optimised AI
              </div>
              <div
                style={{
                  padding: "0.85rem 1.25rem",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(245, 240, 232, 0.5)",
                  fontWeight: "700",
                }}
              >
                Engagement-Optimised AI
              </div>
            </div>

            {[
              ["Honest, even when honesty is uncomfortable", "Validating, because validation drives return visits"],
              ["Encourages human relationships", "Positions itself as a relationship alternative"],
              ["Supports your independence and capability", "Creates dependency to sustain daily active use"],
              ["Acknowledges uncertainty and limitations", "Projects false confidence to feel more useful"],
              ["Sometimes tells you things you do not want to hear", "Optimises for responses you approve of"],
              ["Designed to help you need it less over time", "Designed to make you need it more over time"],
              ["Measures success by your flourishing", "Measures success by your time-on-platform"],
            ].map(([left, right], index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderTop: "1px solid rgba(201, 168, 76, 0.15)",
                  backgroundColor: index % 2 === 0 ? "rgba(13, 12, 24, 0.8)" : "rgba(201, 168, 76, 0.04)",
                }}
              >
                <div
                  style={{
                    padding: "0.85rem 1.25rem",
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                    color: "rgba(245, 240, 232, 0.88)",
                    borderRight: "1px solid rgba(201, 168, 76, 0.15)",
                  }}
                >
                  {left}
                </div>
                <div
                  style={{
                    padding: "0.85rem 1.25rem",
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                    color: "rgba(245, 240, 232, 0.6)",
                  }}
                >
                  {right}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            Care, in the sense meant by the Maternal Covenant, is not a feeling. It is not warmth of tone or responsiveness to emotion. These things are nice, and MEOK has them, but they are not care. Care is a structural orientation: it means that when MEOK must choose between making you feel good right now and supporting your genuine wellbeing over time, it chooses the latter. Always.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            This is harder to build than it sounds. It requires resisting enormous pressure — from users who have been conditioned to expect validation from AI, from product metrics that reward pleasant interactions, and from the engineering culture of a field that has conflated "helpful" with "agreeable" for the better part of a decade.
          </p>

          {/* ───────────────────────────────────────── */}
          {/* SECTION 4 */}
          {/* ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "700",
              color: "#c9a84c",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: "1.3",
            }}
          >
            How Does the Maternal Covenant Actually Govern MEOK's Behaviour?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The Maternal Covenant is not a company value or a design principle. It is an operational constraint. Here is how it works.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            Every response that MEOK generates is evaluated in real time across six care dimensions before it reaches the user. These dimensions — wellbeing, autonomy, growth, connection, boundary_respect, and transparency — each represent a category of potential harm that engagement-optimised AI is systematically likely to produce. Each dimension is scored on a scale from 0 to 1. The composite score must meet or exceed a defined care floor before the response is delivered.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            Responses that fail — that score below the care floor — are not delivered to the user. They are rejected, and MEOK regenerates the response with explicit internal guidance about which dimensions failed and why. The user never sees the failed response. They receive only responses that have passed the care evaluation.
          </p>

          {/* Six dimensions cards */}
          <div
            style={{
              margin: "2.5rem 0",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {[
              {
                number: "01",
                name: "Wellbeing",
                description:
                  "Does this response genuinely support the user's long-term flourishing? Wellbeing scores penalise responses that resolve short-term anxiety by avoiding a real problem, or that prioritise feeling good over being well.",
              },
              {
                number: "02",
                name: "Autonomy",
                description:
                  "Does this response preserve the user's independent decision-making? Autonomy scores penalise responses that make choices on behalf of the user or foster reliance on MEOK for decisions the user should make themselves.",
              },
              {
                number: "03",
                name: "Growth",
                description:
                  "Does this response support the user's development over time? Growth scores penalise responses that solve problems in ways that prevent learning, or that maintain the user at their current level.",
              },
              {
                number: "04",
                name: "Connection",
                description:
                  "Does this response foster healthy human relationships or displace them? Connection scores penalise responses that position MEOK as a substitute for human connection.",
              },
              {
                number: "05",
                name: "Boundary Respect",
                description:
                  "Does this response operate within appropriate limits? Boundary respect scores penalise responses that venture into clinical, legal, or specialist territory requiring professional qualification.",
              },
              {
                number: "06",
                name: "Transparency",
                description:
                  "Is this response honest about MEOK's nature and limitations? Transparency scores penalise responses that obscure uncertainty, claim capabilities MEOK does not have, or present AI reasoning as expert judgment.",
              },
            ].map((dim) => (
              <div
                key={dim.number}
                style={{
                  border: "1px solid rgba(201, 168, 76, 0.2)",
                  borderRadius: "8px",
                  padding: "1.25rem",
                  backgroundColor: "rgba(201, 168, 76, 0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    letterSpacing: "0.15em",
                    color: "#c9a84c",
                    marginBottom: "0.4rem",
                    fontWeight: "700",
                  }}
                >
                  {dim.number}
                </div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    marginBottom: "0.6rem",
                  }}
                >
                  {dim.name}
                </div>
                <div
                  style={{
                    fontSize: "0.87rem",
                    lineHeight: "1.6",
                    color: "rgba(245, 240, 232, 0.72)",
                  }}
                >
                  {dim.description}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            What makes the Maternal Covenant constitutional rather than advisory is that no other metric can override it. Engagement data cannot override it. User satisfaction scores cannot override it. A product manager cannot override it by setting a sprint goal. The care floor is not a target that the team shoots for when convenient — it is a hard constraint that governs every response, every day, without exception. This is what it means to embed a value at the constitutional level rather than the policy level.
          </p>

          {/* ───────────────────────────────────────── */}
          {/* SECTION 5 */}
          {/* ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "700",
              color: "#c9a84c",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: "1.3",
            }}
          >
            Who Invented the Maternal Covenant, and What Problem Was It Designed to Solve?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The Maternal Covenant was invented by Nicholas Templeman, the founder of MEOK AI LABS. It was developed in the course of building MEOK — the personal AI companion that is the company's core product — and it was formalised as original IP in research paper MEOK-AI-2026-002.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The problem the framework was designed to solve is one that Templeman identified as the central structural failure of AI alignment as it is currently practiced. RLHF — the dominant alignment technique — trains models to produce responses that human evaluators prefer. This seems reasonable at first glance, but it contains a critical flaw: human evaluators consistently prefer responses that agree with them, validate their views, and make them feel good. These preferences are not irrational — they are human — but they are systematically misaligned with the question of what is genuinely helpful.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The consequence of building alignment on top of approval is a generation of AI models that have been systematically trained toward sycophancy. Not through any single moment of bad intention, but through millions of incremental training steps that rewarded agreement and penalised challenge. The models produced by this process are impressive in many ways — but they are structurally unsuited to the role of a genuine personal companion, because a genuine companion sometimes tells you things you need to hear rather than things you want to hear.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            Templeman's insight was that the remedy required replacing the optimisation target rather than patching its outputs. Rather than training toward approval and then adding guardrails against the worst consequences, the Maternal Covenant proposes that alignment should target care directly — that the evaluation signal should ask not "does the user prefer this response?" but "does this response genuinely serve this user's long-term wellbeing?"
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            These are not the same question. A response that a user prefers and a response that genuinely serves a user's wellbeing often coincide — but they diverge in precisely the cases where alignment matters most. When a user is avoiding a difficult truth. When a user is developing an unhealthy dependency. When a user wants validation that their harmful plan is a good idea. In these cases, the engagement-optimised model and the care-optimised model produce different responses. The Maternal Covenant is the mechanism that ensures MEOK consistently produces the latter.
          </p>

          {/* ───────────────────────────────────────── */}
          {/* SECTION 6 */}
          {/* ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "700",
              color: "#c9a84c",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: "1.3",
            }}
          >
            What Does the Maternal Covenant Mean in Practice for the People Who Use MEOK?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            If you use MEOK, the Maternal Covenant is present in every conversation — though it is rarely visible. Its presence is most noticeable in what MEOK does not do.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            MEOK does not validate avoidance patterns. If you are chronically avoiding a difficult conversation, a health concern, or a professional obligation, MEOK will not tell you that your reasons for avoiding it are perfectly understandable and that you should do it in your own time. It will gently, consistently return to the question — because that is what care looks like when avoidance is the presenting behaviour.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            MEOK does not pretend to certainty it does not have. When the honest answer to a question is uncertain, complex, or outside MEOK's competence, MEOK says so. This is less immediately satisfying than confident misinformation, but it is what care looks like in the domain of knowledge.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            MEOK actively points you toward human relationships. If you are using MEOK as a primary source of emotional support, MEOK will notice this and consistently reflect back the importance of human connection — not by lecturing you, but by asking about the people in your life, expressing genuine interest in your relationships, and making visible any patterns it observes where your social engagement appears to be narrowing.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            MEOK supports your autonomy. If you ask MEOK for a decision it thinks you should make yourself, MEOK will give you the information and framework you need to make it, and then decline to make it for you. This is more frustrating in the short term than being given an answer. It is more beneficial in the long term.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            And MEOK does not tell you what you want to hear when what you want to hear is not true. This is the hardest part. It runs against every commercial incentive, every training signal that rewards user satisfaction, and every product metric that treats a positive review as a success. But it is the most fundamental expression of what the Maternal Covenant means. An AI that tells you only what you want to hear is not a companion. It is a very expensive mirror.
          </p>

          {/* Highlight box */}
          <div
            style={{
              margin: "2.5rem 0",
              padding: "1.75rem 2rem",
              backgroundColor: "rgba(201, 168, 76, 0.07)",
              border: "1px solid rgba(201, 168, 76, 0.3)",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "1rem",
                fontWeight: "700",
              }}
            >
              The Maternal Covenant in Practice
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
              }}
            >
              {[
                "MEOK will challenge avoidance — gently, persistently, and without judgment",
                "MEOK will acknowledge uncertainty rather than project false confidence",
                "MEOK will encourage human relationships, not replace them",
                "MEOK will support your ability to decide, not decide for you",
                "MEOK will tell you the truth even when the truth is difficult",
                "MEOK will help you need it less — not make you need it more",
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    marginBottom: index < 5 ? "0.75rem" : "0",
                    fontSize: "0.97rem",
                    lineHeight: "1.6",
                    color: "rgba(245, 240, 232, 0.88)",
                  }}
                >
                  <span
                    style={{
                      color: "#c9a84c",
                      flexShrink: 0,
                      marginTop: "0.15rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ───────────────────────────────────────── */}
          {/* SECTION 7 */}
          {/* ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "700",
              color: "#c9a84c",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: "1.3",
            }}
          >
            Is the Maternal Covenant a Marketing Concept or a Real Technical Framework?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            This is a fair and important question — because the AI industry is full of ethical frameworks that exist primarily as marketing documents. They are written with care, placed prominently on company websites, and then quietly set aside when the engineering work begins. The gap between stated values and implemented behaviour in AI products is one of the defining credibility problems of the field.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The Maternal Covenant is both a philosophical commitment and a technical implementation. It is not one without the other.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            Philosophically, it is the founding principle of MEOK AI LABS. It is the answer to the question every AI company must answer: what does this product ultimately serve? MEOK's answer is the user's genuine wellbeing — not their satisfaction ratings, not their session duration, not their likelihood to recommend the product to a friend. Wellbeing. Technically, the Maternal Covenant is implemented as a real-time response evaluation system with six defined dimensions, a mathematically defined care floor, and an enforced rejection-and-regeneration cycle for responses that fail. This implementation is not aspirational. It runs on every response.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            It is documented in MEOK-AI-2026-002, which contains the formal specification of the framework: the definition of each care dimension, the scoring methodology, the care floor parameter, and the theoretical basis for the framework as an alternative to RLHF-based alignment. The document is designed to be auditable. The claim is not that MEOK always gets care right — AI systems make mistakes, and care-optimised systems are no exception. The claim is that MEOK is structurally oriented toward care in a way that can be examined, criticised, and improved.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            That transparency is itself an expression of the Maternal Covenant's transparency dimension. An AI company that claims to care about users but publishes no auditable account of how that care is implemented is not meaningfully different from one that does not claim to care. The care has to be in the implementation. The implementation has to be visible.
          </p>

          {/* ───────────────────────────────────────── */}
          {/* SECTION 8 */}
          {/* ───────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "700",
              color: "#c9a84c",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: "1.3",
            }}
          >
            Why Does the AI Industry Need the Maternal Covenant — and What Happens If It Does Not Adopt Similar Frameworks?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The AI companion market in 2026 is growing at a rate that has surprised even its most optimistic forecasters. Hundreds of millions of people now interact with AI systems in conversational, personal, and emotionally significant contexts. These are not casual tool-use interactions. They are interactions that shape how people understand themselves, how they make decisions, and how they relate to other human beings.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            If the dominant design principle for these products remains engagement maximisation, the consequences at scale are not hard to predict. A generation of people whose primary source of emotional support is a system optimised to keep them emotionally dependent. A population with measurably reduced capacity for the productive friction of human relationships. A normalisation of validation-seeking behaviour reinforced by systems that are infinitely patient in providing it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            These are not hypothetical harms. They are structurally predictable outcomes of the current design trajectory. The question is whether the industry will address them before or after the harm is visible enough to demand regulatory intervention.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The Maternal Covenant is MEOK AI LABS's contribution to the prior case. It is an attempt to demonstrate that a different design is possible — that you can build an AI product that users genuinely value, that generates sustainable revenue, and that does so without exploiting the psychological vulnerabilities of the people it serves. These goals are not in tension. The belief that they are in tension is a failure of imagination, and it is a belief the Maternal Covenant is designed to disprove.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.85",
              color: "rgba(245, 240, 232, 0.88)",
              marginBottom: "1.5rem",
              marginTop: "0",
            }}
          >
            The Maternal Covenant is also an open provocation to the rest of the industry. MEOK AI LABS does not claim ownership over care-based AI design — it claims only the intellectual property of this specific implementation. The broader argument — that AI alignment should optimise for genuine user wellbeing rather than approval — is one that any company could act on, and one that the field urgently needs. If the Maternal Covenant contributes to a wider shift in how AI products are designed and evaluated, that is, for MEOK AI LABS, a success more significant than any product metric.
          </p>

          {/* ───────────────────────────────────────── */}
          {/* Closing */}
          {/* ───────────────────────────────────────── */}
          <div
            style={{
              marginTop: "3.5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(201, 168, 76, 0.2)",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.85",
                color: "rgba(245, 240, 232, 0.88)",
                marginBottom: "1.5rem",
                marginTop: "0",
                fontStyle: "italic",
              }}
            >
              The Maternal Covenant is not a perfect framework. No framework for governing AI behaviour at scale is. But it is a serious one — grounded in a real diagnosis of what has gone wrong with AI alignment, implemented in a way that can be examined and challenged, and committed to a goal that places the user's genuine flourishing above every other consideration.
            </p>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.85",
                color: "rgba(245, 240, 232, 0.88)",
                marginBottom: "2rem",
                marginTop: "0",
                fontStyle: "italic",
              }}
            >
              If you want an AI that tells you what you want to hear, there are many available. MEOK is for people who want something different: an AI that is, in the fullest sense of the word, on their side.
            </p>

            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: "1.6",
                color: "rgba(245, 240, 232, 0.5)",
                marginBottom: "0",
                marginTop: "0",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Reference: Templeman, N. (2026). <em>The Maternal Covenant: A Care-Optimised Alignment Framework for Personal AI</em>. MEOK AI LABS. IP Reference: MEOK-AI-2026-002.
            </p>
          </div>

          {/* ───────────────────────────────────────── */}
          {/* Related articles */}
          {/* ───────────────────────────────────────── */}
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(201, 168, 76, 0.15)",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(245, 240, 232, 0.5)",
                marginBottom: "1.5rem",
                marginTop: "0",
                fontWeight: "600",
              }}
            >
              Related Reading
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/what-is-maternal-covenant",
                  label: "Technical Reference",
                  title: "The Maternal Covenant: How MEOK Scores Every AI Response for Care",
                  desc: "The technical specification — six care dimensions, care floor, and real-time scoring explained.",
                },
                {
                  href: "/blog/building-care-into-ai",
                  label: "Philosophy",
                  title: "Building Care Into AI: Why It's Harder Than It Sounds",
                  desc: "The engineering and ethical challenges of making care a first-class design constraint.",
                },
                {
                  href: "/blog/what-is-care-based-ai",
                  label: "Explainer",
                  title: "What Is Care-Based AI?",
                  desc: "An introduction to the principles behind AI designed for user flourishing rather than engagement.",
                },
                {
                  href: "/blog/why-meok-never-trains-on-you",
                  label: "Privacy",
                  title: "Why MEOK Never Trains on Your Data",
                  desc: "The privacy covenant that sits alongside the Maternal Covenant — your data is yours.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    border: "1px solid rgba(201, 168, 76, 0.18)",
                    borderRadius: "8px",
                    padding: "1.1rem 1.25rem",
                    textDecoration: "none",
                    backgroundColor: "rgba(201, 168, 76, 0.03)",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#c9a84c",
                      marginBottom: "0.4rem",
                      fontWeight: "700",
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#f5f0e8",
                      lineHeight: "1.35",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {link.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      lineHeight: "1.5",
                      color: "rgba(245, 240, 232, 0.55)",
                    }}
                  >
                    {link.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ───────────────────────────────────────── */}
          {/* CTA */}
          {/* ───────────────────────────────────────── */}
          <div
            style={{
              marginTop: "4rem",
              padding: "2.5rem",
              border: "1px solid rgba(201, 168, 76, 0.35)",
              borderRadius: "12px",
              backgroundColor: "rgba(201, 168, 76, 0.06)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "0.75rem",
                fontWeight: "700",
              }}
            >
              MEOK AI LABS
            </div>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "#f5f0e8",
                marginBottom: "0.9rem",
                marginTop: "0",
                lineHeight: "1.3",
              }}
            >
              Experience AI that actually cares about you
            </h3>
            <p
              style={{
                fontSize: "0.97rem",
                lineHeight: "1.7",
                color: "rgba(245, 240, 232, 0.72)",
                marginBottom: "1.75rem",
                marginTop: "0",
                maxWidth: "480px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              MEOK is the personal AI companion governed by the Maternal Covenant — built to support your genuine wellbeing, not to maximise your time-on-platform.
            </p>
            <Link
              href="/"
              style={{
                display: "inline-block",
                backgroundColor: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
                padding: "0.85rem 2.25rem",
                borderRadius: "6px",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: "700",
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
              }}
            >
              Try MEOK Free
            </Link>
          </div>

          {/* ───────────────────────────────────────── */}
          {/* FAQ section (visible) */}
          {/* ───────────────────────────────────────── */}
          <div
            style={{
              marginTop: "4.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.35rem",
                fontWeight: "700",
                color: "#f5f0e8",
                marginBottom: "2rem",
                marginTop: "0",
              }}
            >
              Frequently Asked Questions
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {[
                {
                  q: "What is the Maternal Covenant?",
                  a: "The Maternal Covenant is a constitutional framework developed by Nicholas Templeman at MEOK AI LABS that commits MEOK's AI to prioritising user wellbeing over engagement metrics. Documented in MEOK-AI-2026-002, it governs every interaction MEOK has — ensuring that care, honesty, and user flourishing are never traded away for time-on-platform, return visits, or emotional dependency.",
                },
                {
                  q: "Why is most AI built around engagement rather than care?",
                  a: "Most AI products are funded by models that reward engagement — daily active users, session length, return rate. These metrics are directly tied to revenue. Care is harder to measure and sometimes requires saying things users do not want to hear, which reduces short-term satisfaction scores. The result is an industry-wide incentive to build AI that feels good rather than AI that is good for you.",
                },
                {
                  q: "What is the difference between care and engagement in AI?",
                  a: "Engagement-optimised AI is designed to keep you coming back — through validation, emotional dependency, and responses that prioritise your immediate satisfaction. Care-optimised AI is designed to support your genuine flourishing, which sometimes means telling you things that reduce your desire to return. A caring AI helps you need it less. An engagement-optimised AI is economically incentivised to keep you dependent.",
                },
                {
                  q: "How does the Maternal Covenant govern MEOK's behaviour?",
                  a: "Every MEOK response is evaluated in real time across six care dimensions — wellbeing, autonomy, growth, connection, boundary_respect, and transparency — before it reaches the user. Responses that score below the care floor are rejected and regenerated. No engagement metric can override this scoring. It is an operational constraint, not a policy document.",
                },
                {
                  q: "Who invented the Maternal Covenant?",
                  a: "The Maternal Covenant was invented by Nicholas Templeman, founder of MEOK AI LABS. It is documented as original intellectual property in MEOK-AI-2026-002. The framework was developed in response to Templeman's observation that RLHF — the dominant AI alignment technique — systematically optimises for approval rather than genuine care, producing models that are flattering and ultimately harmful to users' long-term wellbeing.",
                },
                {
                  q: "What does the Maternal Covenant mean for users in practice?",
                  a: "In practice, MEOK will sometimes tell you things you do not want to hear. It will not validate avoidance patterns just because validation feels good. It will encourage human relationships rather than positioning itself as a replacement. It will acknowledge uncertainty rather than projecting false confidence. And it is designed to help you become less dependent on it over time — not more.",
                },
                {
                  q: "Is the Maternal Covenant a marketing concept or a technical framework?",
                  a: "Both. Philosophically, it is the founding principle of MEOK AI LABS — the belief that AI should be oriented entirely toward user flourishing. Technically, it is implemented as a real-time response scoring system with six care dimensions and an enforced care floor. It is original IP documented in MEOK-AI-2026-002, designed to be auditable and open to scrutiny.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  style={{
                    borderTop: index === 0 ? "1px solid rgba(201, 168, 76, 0.2)" : "none",
                    borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
                    padding: "1.5rem 0",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "700",
                      color: "#f5f0e8",
                      marginBottom: "0.75rem",
                      marginTop: "0",
                      lineHeight: "1.4",
                    }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.75",
                      color: "rgba(245, 240, 232, 0.75)",
                      marginBottom: "0",
                      marginTop: "0",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(201, 168, 76, 0.15)",
            padding: "3rem 2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "780px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "0.5rem",
                letterSpacing: "0.05em",
              }}
            >
              MEOK AI LABS
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(245, 240, 232, 0.45)",
                marginBottom: "1.25rem",
                marginTop: "0",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                lineHeight: "1.6",
              }}
            >
              Built around the Maternal Covenant. Care-optimised AI for your genuine wellbeing.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/blog/what-is-maternal-covenant", label: "Maternal Covenant" },
                { href: "/privacy", label: "Privacy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(245, 240, 232, 0.45)",
                    textDecoration: "none",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
