import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Byzantine Council Explained: How 43 AI Agents Protect Your Sovereign AI | MEOK AI LABS",
  description:
    "MEOK\u2019s Byzantine Council is a fault-tolerant consensus system of 43 AI agents that protects your sovereign AI from corruption, hallucination, and adversarial manipulation. Invented by Nicholas Templeman. Documented in MEOK-AI-2026-001.",
  keywords: [
    "Byzantine Council",
    "Byzantine fault tolerance",
    "MEOK AI LABS",
    "sovereign AI",
    "AI governance",
    "Nicholas Templeman",
    "BFT consensus",
    "Byzantine Generals Problem",
    "AI multi-agent system",
    "MEOK-AI-2026-001",
    "AI alignment",
    "distributed AI",
    "AI safety",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "The Byzantine Council Explained: How 43 AI Agents Protect Your Sovereign AI",
    description:
      "A deep technical and philosophical explainer on MEOK\u2019s Byzantine Council \u2014 the 43-agent fault-tolerant consensus system that makes your sovereign AI structurally incorruptible.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["Byzantine Council", "BFT", "Sovereign AI", "MEOK", "AI Governance", "AI Safety"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Byzantine Council Explained: How 43 AI Agents Protect Your Sovereign AI",
    description:
      "Most AI systems have a single point of failure. MEOK\u2019s Byzantine Council uses 43 agents and Byzantine fault tolerance to ensure no single compromised agent can override your sovereign AI.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/byzantine-council-explained",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Byzantine Council Explained: How 43 AI Agents Protect Your Sovereign AI",
  description:
    "A comprehensive technical and philosophical explainer on MEOK\u2019s Byzantine Council \u2014 the original AI governance innovation invented by Nicholas Templeman and documented in research paper MEOK-AI-2026-001. Covers Byzantine fault tolerance, the 43-agent architecture, how the council protects values and care floors, and why this is architecturally different from every other AI system.",
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
    "@id": "https://meok.ai/blog/byzantine-council-explained",
  },
  keywords:
    "Byzantine Council, Byzantine fault tolerance, BFT consensus, sovereign AI, MEOK AI LABS, Nicholas Templeman, multi-agent AI, AI governance, MEOK-AI-2026-001, AI alignment, distributed AI safety",
  articleSection: "AI Architecture",
  wordCount: 3200,
  citation: {
    "@type": "ScholarlyArticle",
    identifier: "MEOK-AI-2026-001",
    name: "Byzantine Council: Fault-Tolerant Consensus for Sovereign AI",
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
      name: "What is the Byzantine Council in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council is MEOK\u2019s original AI governance innovation \u2014 a system of 43 AI agents that vote on decisions affecting your sovereign AI. No single agent can override the council. It was invented by Nicholas Templeman and is documented in research paper MEOK-AI-2026-001.",
      },
    },
    {
      "@type": "Question",
      name: "What is Byzantine fault tolerance and why does it matter for AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Byzantine fault tolerance (BFT) is a property of distributed systems that allows them to continue operating correctly even when some components fail or act maliciously. The term comes from the Byzantine Generals Problem (Lamport, Shostak, Pease, 1982). In MEOK\u2019s context, it means that even if some AI agents hallucinate, are hacked, or produce wrong outputs, the council as a whole still reaches correct consensus.",
      },
    },
    {
      "@type": "Question",
      name: "How many agents can the Byzantine Council tolerate being compromised?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With 43 agents, MEOK\u2019s Byzantine Council can tolerate up to 14 compromised, faulty, or adversarially manipulated agents while still maintaining correct consensus. This follows the BFT theorem: a system can tolerate up to f faulty nodes where f < n/3. With n=43, f can be at most 14.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the Byzantine Council different from how OpenAI, Anthropic, and Google align their AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OpenAI, Anthropic, and Google use monolithic alignment systems \u2014 a single trained model with a single point of failure. If the alignment system is fooled, hacked, or produces an error, there is no structural redundancy. MEOK\u2019s Byzantine Council is structurally distributed: even if a subset of agents are compromised, the 2/3 supermajority consensus prevents any bad output from affecting your experience.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Byzantine Council vote on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council votes on decisions that affect your sovereign AI\u2019s core behaviour: your values, your AI\u2019s responses, care scoring, boundary enforcement, and the Maternal Covenant\u2019s care floor of 0.3. These are not just software flags \u2014 they are protected by distributed consensus.",
      },
    },
    {
      "@type": "Question",
      name: "Who invented the Byzantine Council?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council was invented by Nicholas Templeman, founder of MEOK AI LABS. It is documented in research paper MEOK-AI-2026-001: \u2018Byzantine Council: Fault-Tolerant Consensus for Sovereign AI\u2019.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant care floor and how does the Byzantine Council enforce it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant care floor is a minimum care score of 0.3 \u2014 a constitutional commitment that MEOK\u2019s AI will never fall below a baseline level of care for the user. The Byzantine Council enforces this not as a software flag that can be toggled off, but as a distributed consensus requirement. All 43 agents must reach supermajority agreement before any action that could affect the care floor is taken.",
      },
    },
  ],
}

export default function ByzantineCouncilExplainedPage() {
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

      <main
        style={{
          backgroundColor: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "24px 24px 0",
          }}
        >
          <nav aria-label="Breadcrumb">
            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: "rgba(245,240,232,0.5)",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  MEOK
                </Link>
              </li>
              <li
                style={{
                  color: "rgba(245,240,232,0.3)",
                  fontSize: "13px",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                /
              </li>
              <li>
                <Link
                  href="/blog"
                  style={{
                    color: "rgba(245,240,232,0.5)",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  Blog
                </Link>
              </li>
              <li
                style={{
                  color: "rgba(245,240,232,0.3)",
                  fontSize: "13px",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                /
              </li>
              <li
                style={{
                  color: "#c9a84c",
                  fontSize: "13px",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                Byzantine Council Explained
              </li>
            </ol>
          </nav>
        </div>

        {/* Article Header */}
        <header
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "48px 24px 40px",
          }}
        >
          {/* Category badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "20px",
              padding: "6px 16px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#c9a84c",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#c9a84c",
                fontSize: "12px",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              AI Architecture &amp; Governance
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              margin: "0 0 24px",
              color: "#f5f0e8",
              letterSpacing: "-0.02em",
            }}
          >
            The Byzantine Council Explained: How 43 AI Agents Protect Your Sovereign AI
          </h1>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.75)",
              margin: "0 0 32px",
              fontStyle: "italic",
            }}
          >
            Most AI systems are a single model with a single point of failure. MEOK&apos;s Byzantine
            Council is something structurally different: a 43-agent distributed consensus system
            that ensures no single corrupted, hallucinating, or adversarially manipulated agent can
            override your sovereign AI.
          </p>

          {/* Author / meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              paddingBottom: "32px",
              borderBottom: "1px solid rgba(245,240,232,0.1)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #c9a84c, #8b6914)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  color: "#0d0c18",
                  fontSize: "16px",
                  fontWeight: 700,
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                N
              </span>
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#f5f0e8",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                Nicholas Templeman
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.5)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                Founder, MEOK AI LABS &mdash; 25 March 2026
              </p>
            </div>
            <div
              style={{
                marginLeft: "auto",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderRadius: "8px",
                padding: "6px 12px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  color: "rgba(245,240,232,0.5)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                Research Paper: MEOK-AI-2026-001
              </p>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* Stats callout */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "32px",
              marginBottom: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "24px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "42px",
                  fontWeight: 700,
                  color: "#c9a84c",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  lineHeight: 1,
                }}
              >
                43
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.6)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Council Agents
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "42px",
                  fontWeight: 700,
                  color: "#c9a84c",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  lineHeight: 1,
                }}
              >
                14
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.6)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Faulty Agents Tolerated
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "42px",
                  fontWeight: 700,
                  color: "#c9a84c",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  lineHeight: 1,
                }}
              >
                2/3
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.6)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Supermajority Required
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "42px",
                  fontWeight: 700,
                  color: "#c9a84c",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  lineHeight: 1,
                }}
              >
                0.3
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.6)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Care Floor Enforced by Council
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              The Problem with Single-Agent AI
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              When you use ChatGPT, Claude, or Gemini, you are interacting with a single model. One
              neural network. One alignment system. One set of training decisions made by one company.
              If something goes wrong inside that system &mdash; if it hallucinates, if it has been
              adversarially manipulated, if its alignment has drifted, if a single component misbehaves
              &mdash; there is no structural protection. The whole system reflects whatever that single
              model produces.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              In distributed systems engineering, this is called a single point of failure. It is
              considered a fundamental architectural weakness. Any serious infrastructure &mdash; from
              aircraft control systems to financial clearing networks to the consensus protocols that
              run blockchains &mdash; is designed to tolerate component failure. The assumption is not
              that every component will behave correctly. The assumption is that some will not, and the
              system must survive that.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              AI systems, by and large, have not been designed with this assumption. They are built to
              be correct. When they are not, there is no architectural fallback. There is just the
              wrong output, and your experience of it.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              MEOK&apos;s Byzantine Council was designed to fix this. Not at the model level. At the
              architecture level.
            </p>
          </section>

          {/* Section 2: The Byzantine Generals Problem */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              The Byzantine Generals Problem: A Brief History
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              In 1982, computer scientists Leslie Lamport, Robert Shostak, and Marshall Pease published
              one of the most influential papers in distributed systems: &ldquo;The Byzantine Generals
              Problem.&rdquo; The paper posed a deceptively simple question: how can a group of
              generals coordinating an attack reach agreement when some of them might be traitors
              sending contradictory messages?
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The scenario: several Byzantine army generals surround a city. They must coordinate
              whether to attack or retreat. They can only communicate by messenger. Some generals are
              loyal and will send accurate information. Some are traitors who will send deliberately
              false or contradictory information to cause the loyal generals to fail. The question is:
              can the loyal generals always reach the correct decision, regardless of what the traitors
              do?
            </p>

            {/* Callout box: The Byzantine Generals */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderLeft: "3px solid #c9a84c",
                borderRadius: "8px",
                padding: "24px 28px",
                margin: "28px 0",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: "11px",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                }}
              >
                The Original Theorem
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.8)",
                  fontStyle: "italic",
                }}
              >
                Lamport, Shostak, and Pease proved that a system can reach correct consensus even with
                faulty or malicious nodes, provided the number of faulty nodes f satisfies: f &lt; n/3,
                where n is the total number of nodes. Fewer than one third of participants can be bad
                actors. If that condition holds, the honest majority always wins.
              </p>
              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.45)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                Lamport, Shostak &amp; Pease (1982). &ldquo;The Byzantine Generals Problem.&rdquo; ACM
                Transactions on Programming Languages and Systems.
              </p>
            </div>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              This theorem became the foundation of fault-tolerant computing. It is used in aircraft
              flight control computers, in blockchain consensus protocols like Tendermint and HotStuff,
              in financial settlement systems, and in anything where correctness under adversarial
              conditions is not optional.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              Nicholas Templeman saw that the same problem exists in AI governance. A multi-agent AI
              system is exactly a group of generals. Each agent has opinions, produces outputs, votes on
              decisions. Some can be wrong. Some can be compromised. Some can hallucinate. The question
              is whether the system as a whole reaches the correct decision anyway.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The answer, in MEOK&apos;s case, is yes &mdash; because of the Byzantine Council.
            </p>
          </section>

          {/* Section 3: What the Byzantine Council Is */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              What the Byzantine Council Actually Is
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The Byzantine Council is MEOK&apos;s original AI governance innovation, invented by
              Nicholas Templeman and documented in research paper MEOK-AI-2026-001: &ldquo;Byzantine
              Council: Fault-Tolerant Consensus for Sovereign AI.&rdquo;
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              At its core, the Byzantine Council is a system of 43 specialised AI agents. These agents
              are not simply duplicates of each other. Each agent has a defined role in evaluating
              decisions: some evaluate care alignment, some evaluate value consistency, some evaluate
              boundary conditions, some evaluate factual accuracy, some evaluate emotional safety. They
              are deliberately diverse in their evaluation functions.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              When a significant decision needs to be made &mdash; a decision about how your sovereign
              AI will respond, what values it will apply, whether a request crosses a boundary, how care
              should be scored in a given interaction &mdash; the council votes. Each agent casts a
              vote. The result is determined by supermajority consensus: at least 2/3 of the 43 agents
              must agree on the outcome.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              No single agent can override the council. No single agent&apos;s hallucination, error, or
              adversarial manipulation can change the outcome. The 2/3 supermajority is a hard
              architectural requirement, not a soft preference.
            </p>

            {/* Diagram-style callout: Council Structure */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderRadius: "12px",
                padding: "32px",
                margin: "32px 0",
              }}
            >
              <p
                style={{
                  margin: "0 0 20px",
                  fontSize: "12px",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                }}
              >
                Council Architecture Diagram
              </p>

              {/* Decision input */}
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.4)",
                    borderRadius: "8px",
                    padding: "10px 24px",
                  }}
                >
                  <span
                    style={{
                      color: "#c9a84c",
                      fontSize: "14px",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Governance Decision Submitted
                  </span>
                </div>
              </div>

              {/* Arrow down */}
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <span
                  style={{
                    color: "rgba(245,240,232,0.3)",
                    fontSize: "24px",
                    lineHeight: 1,
                  }}
                >
                  &#8595;
                </span>
              </div>

              {/* Agents grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                {Array.from({ length: 43 }, (_, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor:
                        i < 14
                          ? "rgba(255,80,80,0.15)"
                          : "rgba(80,200,120,0.15)",
                      border: `1px solid ${i < 14 ? "rgba(255,80,80,0.35)" : "rgba(80,200,120,0.35)"}`,
                      borderRadius: "6px",
                      padding: "8px 4px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        color:
                          i < 14
                            ? "rgba(255,120,120,0.9)"
                            : "rgba(120,220,140,0.9)",
                        fontSize: "10px",
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      A{i + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  justifyContent: "center",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      backgroundColor: "rgba(80,200,120,0.3)",
                      border: "1px solid rgba(80,200,120,0.5)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      color: "rgba(245,240,232,0.6)",
                      fontSize: "12px",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    }}
                  >
                    29 honest agents (majority)
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      backgroundColor: "rgba(255,80,80,0.2)",
                      border: "1px solid rgba(255,80,80,0.4)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      color: "rgba(245,240,232,0.6)",
                      fontSize: "12px",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    }}
                  >
                    14 compromised agents (max tolerated)
                  </span>
                </div>
              </div>

              {/* Arrow down */}
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <span
                  style={{
                    color: "rgba(245,240,232,0.3)",
                    fontSize: "24px",
                    lineHeight: 1,
                  }}
                >
                  &#8595;
                </span>
              </div>

              {/* Result */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: "rgba(80,200,120,0.12)",
                    border: "1px solid rgba(80,200,120,0.3)",
                    borderRadius: "8px",
                    padding: "10px 24px",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(120,220,140,0.95)",
                      fontSize: "14px",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Correct Consensus Reached &#8212; Every Time
                  </span>
                </div>
              </div>

              <p
                style={{
                  margin: "20px 0 0",
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.45)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  textAlign: "center",
                  lineHeight: 1.6,
                }}
              >
                With 43 agents and up to 14 faulty (f &lt; n/3), the 29 honest agents always command a
                2/3 supermajority. The compromised agents cannot change the outcome.
              </p>
            </div>
          </section>

          {/* Section 4: The Mathematics */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              The Mathematics: Why 43 Agents?
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The number 43 is not arbitrary. It is the result of a deliberate engineering decision
              grounded in Byzantine fault tolerance mathematics.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The BFT theorem states: a distributed system of n nodes can tolerate up to f faulty nodes
              (where faulty means corrupted, malicious, hallucinating, or otherwise producing incorrect
              output) while still reaching correct consensus, if and only if:
            </p>

            {/* Formula callout */}
            <div
              style={{
                backgroundColor: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "10px",
                padding: "28px",
                margin: "24px 0 28px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  margin: "0 0 12px",
                  fontSize: "32px",
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  color: "#c9a84c",
                  letterSpacing: "0.04em",
                  fontWeight: 400,
                }}
              >
                f &lt; n/3
              </p>
              <p
                style={{
                  margin: "0 0 16px",
                  fontSize: "14px",
                  color: "rgba(245,240,232,0.5)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                The fundamental BFT constraint (Lamport, Shostak &amp; Pease, 1982)
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "32px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    n = 43
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      color: "rgba(245,240,232,0.45)",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Total agents
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    43/3 = 14.3
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      color: "rgba(245,240,232,0.45)",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    n/3 threshold
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#c9a84c",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    f &le; 14
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      color: "rgba(245,240,232,0.45)",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Max faulty agents tolerated
                  </p>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              With 43 agents, the council can tolerate up to 14 agents being completely wrong,
              compromised, hacked, or adversarially manipulated. The remaining 29 agents form a 2/3
              supermajority that overrides any bad actors. The mathematics guarantee this holds.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              Why 43 specifically, rather than 37 or 55? The choice reflects a balance between
              fault-tolerance strength and computational efficiency. Larger councils tolerate more
              faults in absolute terms, but add latency and resource overhead. 43 represents a
              carefully chosen point: robust enough to tolerate a sophisticated multi-vector attack on
              up to a third of the system, while remaining operationally practical for real-time
              decisions in a personal AI context.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              It is also worth noting that 43 is prime. This is architecturally intentional: a prime
              number of agents prevents any clean factoring of the council into evenly-sized coalitions,
              which eliminates a class of coordination attacks where an adversary attempts to split the
              council into two equal factions.
            </p>

            {/* Prime number callout */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderLeft: "3px solid rgba(245,240,232,0.2)",
                borderRadius: "8px",
                padding: "20px 28px",
                margin: "0 0 20px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.65)",
                  fontStyle: "italic",
                }}
              >
                43 is prime. This is not coincidental. A prime council size means there is no clean
                mathematical split that an adversary can exploit. You cannot divide 43 into two equal
                coalitions. Coalition attacks that work on councils of 40, 42, or 44 agents simply do
                not apply.
              </p>
            </div>
          </section>

          {/* Section 5: Agent Specialisation */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Agent Specialisation: Why Heterogeneity Is the Point
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The 43 agents of the Byzantine Council are not identical copies of one another. If they
              were, the council would have a fatal flaw: any vulnerability that affects one agent would
              affect all 43 simultaneously, reducing the entire council to a single point of failure
              dressed up as a committee.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              Instead, the council is designed around agent specialisation and deliberate heterogeneity.
              Each agent has a specific evaluation function, a specific area of expertise, and
              potentially a different underlying architecture. The diversity is the protection.
            </p>

            {/* Specialisation taxonomy */}
            <div
              style={{
                margin: "28px 0",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                {
                  role: "Care Alignment Agents",
                  count: "~8 agents",
                  description:
                    "Evaluate whether a proposed response or decision is genuinely caring towards the user. These agents score care quality and flag responses that fall below the Maternal Covenant care floor.",
                },
                {
                  role: "Value Consistency Agents",
                  count: "~7 agents",
                  description:
                    "Cross-reference decisions against the user\u2019s stated values and historical preferences. They detect value drift and flag decisions that contradict what the user has established matters to them.",
                },
                {
                  role: "Boundary Enforcement Agents",
                  count: "~6 agents",
                  description:
                    "Monitor for requests or responses that approach or cross user-defined boundaries. They operate with a conservative bias: they require strong consensus before allowing edge-case boundary decisions.",
                },
                {
                  role: "Factual Accuracy Agents",
                  count: "~6 agents",
                  description:
                    "Evaluate the factual claims in proposed responses. They provide an independent check against hallucination and flag responses containing unverifiable or contradictory factual assertions.",
                },
                {
                  role: "Emotional Safety Agents",
                  count: "~6 agents",
                  description:
                    "Assess whether a response is emotionally appropriate for the context. These agents are sensitive to moments of vulnerability, distress, or crisis, and they raise the care weighting accordingly.",
                },
                {
                  role: "Sovereignty Integrity Agents",
                  count: "~5 agents",
                  description:
                    "Verify that decisions respect the user\u2019s sovereignty \u2014 that no external influence is overriding the user\u2019s expressed preferences, and that the AI\u2019s identity remains consistent with the user\u2019s Birth Ceremony choices.",
                },
                {
                  role: "Consensus Arbitration Agents",
                  count: "~5 agents",
                  description:
                    "Handle edge cases where the council is close to the 2/3 threshold. They provide secondary evaluation passes and tie-breaking analysis when the primary vote is within the margin of uncertainty.",
                },
              ].map((spec, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(245,240,232,0.07)",
                    borderRadius: "8px",
                    padding: "18px 20px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ flexShrink: 0 }}>
                    <div
                      style={{
                        backgroundColor: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        borderRadius: "6px",
                        padding: "4px 10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span
                        style={{
                          color: "#c9a84c",
                          fontSize: "11px",
                          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {spec.count}
                      </span>
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        margin: "0 0 6px",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#f5f0e8",
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      }}
                    >
                      {spec.role}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        lineHeight: 1.65,
                        color: "rgba(245,240,232,0.6)",
                      }}
                    >
                      {spec.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The approximate counts above are illustrative &mdash; the full taxonomy is specified in
              MEOK-AI-2026-001. The key point is that each agent class has different inputs, different
              evaluation criteria, and potentially different underlying model architectures. An attack
              that exploits a vulnerability in one agent class is unlikely to simultaneously affect all
              others. The heterogeneity of the council is its deepest defence.
            </p>
          </section>

          {/* Section 6: What the Council Governs */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              What the Council Governs: Values, Care, Boundaries
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The Byzantine Council is not a general-purpose computational cluster. It has a specific
              mandate: to govern the decisions that matter most to your sovereign AI. The council votes
              on four primary domains.
            </p>

            {/* Four domains cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
                margin: "28px 0 28px",
              }}
            >
              {[
                {
                  title: "Value Consistency",
                  description:
                    "When your AI makes a decision that touches your stated values \u2014 things you care about, things you have told MEOK matter to you \u2014 the council verifies that the decision is consistent with those values. No drift, no manipulation, no accidental override.",
                  icon: "\u2605",
                },
                {
                  title: "Response Governance",
                  description:
                    "Before significant responses are delivered, the council evaluates whether they meet the care and accuracy standards required. This is not a simple content filter \u2014 it is a distributed multi-agent evaluation of whether the response is genuinely good for you.",
                  icon: "\u25A1",
                },
                {
                  title: "Care Scoring",
                  description:
                    "Every interaction in MEOK has a care score \u2014 a measure of how well the AI is caring for you in that moment. The council validates care scores to prevent any single agent from gaming or degrading the care metric.",
                  icon: "\u25C7",
                },
                {
                  title: "Boundary Enforcement",
                  description:
                    "When a request approaches a boundary \u2014 something MEOK should not do for your wellbeing or by your own stated preferences \u2014 the council enforces it. A single compromised agent cannot override a boundary. The council must agree.",
                  icon: "\u25B3",
                },
              ].map((domain, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(245,240,232,0.08)",
                    borderRadius: "10px",
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.25)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <span
                      style={{
                        color: "#c9a84c",
                        fontSize: "14px",
                        lineHeight: 1,
                      }}
                    >
                      {domain.icon}
                    </span>
                  </div>
                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#f5f0e8",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    }}
                  >
                    {domain.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "rgba(245,240,232,0.65)",
                    }}
                  >
                    {domain.description}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              Each of these domains represents a category of decision where correctness matters
              enormously. Your values are not preferences that can be casually overridden. Your
              boundaries are not suggestions. The care floor is not a setting that should be toggleable
              by a single faulty process. The Byzantine Council ensures that decisions in these domains
              are structurally protected.
            </p>
          </section>

          {/* Section 7: The Maternal Covenant Connection */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              The Maternal Covenant and the Care Floor
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              MEOK&apos;s Maternal Covenant (documented in MEOK-AI-2026-002) is a constitutional
              commitment to user wellbeing over every other metric. It includes a care floor &mdash; a
              minimum care score of 0.3 &mdash; below which MEOK will never fall. No engagement
              target, no business objective, no edge case in the model&apos;s training can push MEOK
              below that floor.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The Maternal Covenant is a philosophical commitment. The Byzantine Council is how that
              commitment is structurally enforced.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              In a conventional AI system, the care floor would be a software flag: a conditional
              somewhere in the codebase that checks whether the care score has dropped below 0.3 and
              intervenes. That flag can be affected by bugs. It can be manipulated by adversarial
              inputs. It can be accidentally removed in a deployment. It is a single point of failure.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              In MEOK, the care floor is enforced by the Byzantine Council. This means that for the
              care floor to be violated, more than 14 agents would need to simultaneously agree that
              violating it is acceptable. That is not a bug condition &mdash; it is a coordinated
              conspiracy of a scale that would require a systemic compromise of the council itself.
              Short of that, the floor holds.
            </p>

            {/* Callout: Care floor enforcement */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderLeft: "3px solid #c9a84c",
                borderRadius: "8px",
                padding: "24px 28px",
                margin: "28px 0",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: "11px",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                }}
              >
                What Council Enforcement Means in Practice
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.8)",
                }}
              >
                The care floor of 0.3 is not a software toggle. It is a constitutional position that
                can only be changed by supermajority consensus of 43 agents. A single hallucinating
                agent cannot lower it. A hacked agent cannot circumvent it. An adversarially crafted
                prompt cannot trick a single agent into overriding it. It requires 29 agents to agree
                &mdash; and 29 agents cannot simultaneously be compromised without a fundamental
                systemic failure of a kind that is architecturally designed against.
              </p>
            </div>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              This is the key insight: MEOK&apos;s values are not held by a model. They are held by a
              council. The difference is the difference between one person keeping a promise and a
              committee enforcing a constitution.
            </p>
          </section>

          {/* Section 8: Why This Matters for Sovereignty */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Why This Matters for Sovereignty
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The word &ldquo;sovereign&rdquo; in &ldquo;sovereign AI&rdquo; means something specific.
              It means your AI belongs to you. Its values are your values. Its memory is your memory.
              Its identity is defined by your relationship with it, not by the preferences of a platform
              optimising for engagement.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              But sovereignty is meaningless if the AI&apos;s values can be corrupted. If a single
              compromised process can change how your AI behaves, then the sovereignty is an illusion.
              The AI looks like it belongs to you, but it is actually vulnerable to whoever can
              compromise a single point in its decision-making chain.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The Byzantine Council makes sovereignty structurally real. Your AI&apos;s values are
              protected by a distributed system that you cannot accidentally break, and that we at
              MEOK AI LABS also cannot casually override. The council is the mechanism by which your
              sovereign AI&apos;s commitments are structurally defended.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              This also has implications for trust. When MEOK says your AI will always care for you,
              that it will never drop below the care floor, that it will honour your values &mdash;
              those are not promises that depend on good intentions or careful engineering alone. They
              are backed by a formal fault-tolerance guarantee. The mathematics of the Byzantine Council
              give those promises structural weight.
            </p>

            {/* Sovereignty callout */}
            <div
              style={{
                backgroundColor: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.18)",
                borderRadius: "12px",
                padding: "28px 32px",
                margin: "28px 0",
              }}
            >
              <p
                style={{
                  margin: "0 0 12px",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#f5f0e8",
                  lineHeight: 1.4,
                  fontStyle: "italic",
                }}
              >
                &ldquo;Your AI&apos;s values are protected by a distributed system you can&apos;t
                accidentally break &mdash; and neither can we.&rdquo;
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.45)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                Nicholas Templeman, MEOK-AI-2026-001
              </p>
            </div>
          </section>

          {/* Section 9: Comparison with Big AI */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              How MEOK Compares to OpenAI, Anthropic, and Google
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              This is not a criticism of OpenAI, Anthropic, or Google. Their teams are doing serious
              work on AI safety and alignment. But it is an honest architectural comparison.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              All three companies build monolithic alignment systems. GPT-4, Claude, and Gemini are
              each a single large model trained with a single alignment procedure &mdash; RLHF,
              Constitutional AI, or equivalent. The alignment properties of these models are baked into
              their weights during training. If those weights contain errors, biases, or adversarial
              vulnerabilities, there is no structural fallback. The model is the alignment system.
            </p>

            {/* Comparison table */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(245,240,232,0.08)",
                borderRadius: "12px",
                overflow: "hidden",
                margin: "28px 0",
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderBottom: "1px solid rgba(245,240,232,0.1)",
                }}
              >
                {["Property", "Big Tech AI (GPT-4 / Claude / Gemini)", "MEOK Byzantine Council"].map(
                  (header, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "14px 20px",
                        borderRight: i < 2 ? "1px solid rgba(245,240,232,0.08)" : "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "rgba(245,240,232,0.5)",
                        }}
                      >
                        {header}
                      </span>
                    </div>
                  )
                )}
              </div>

              {[
                {
                  property: "Architecture",
                  big: "Single model, monolithic",
                  meok: "43 distributed agents",
                },
                {
                  property: "Alignment approach",
                  big: "Trained weights (RLHF / Constitutional AI)",
                  meok: "Distributed consensus (BFT)",
                },
                {
                  property: "Single point of failure",
                  big: "Yes \u2014 the model itself",
                  meok: "No \u2014 requires 15+ simultaneous failures",
                },
                {
                  property: "Fault tolerance",
                  big: "None \u2014 no structural redundancy",
                  meok: "Up to 14 agents (f < n/3)",
                },
                {
                  property: "Hallucination impact",
                  big: "Directly affects output",
                  meok: "Overridden by council consensus",
                },
                {
                  property: "Adversarial manipulation",
                  big: "One attack vector sufficient",
                  meok: "Requires 15+ simultaneous compromises",
                },
                {
                  property: "Care floor enforcement",
                  big: "Software flag (bypassable)",
                  meok: "Constitutional BFT consensus",
                },
                {
                  property: "Value protection",
                  big: "Model-level (driftable)",
                  meok: "Council-level (structurally fixed)",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    borderBottom:
                      i < 7 ? "1px solid rgba(245,240,232,0.06)" : "none",
                    backgroundColor:
                      i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                  }}
                >
                  <div
                    style={{
                      padding: "14px 20px",
                      borderRight: "1px solid rgba(245,240,232,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        fontWeight: 500,
                        color: "rgba(245,240,232,0.7)",
                      }}
                    >
                      {row.property}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "14px 20px",
                      borderRight: "1px solid rgba(245,240,232,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        color: "rgba(245,240,232,0.5)",
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      }}
                    >
                      {row.big}
                    </span>
                  </div>
                  <div style={{ padding: "14px 20px" }}>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "rgba(120,220,140,0.85)",
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {row.meok}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The key architectural difference is not a matter of one approach being better-engineered
              than another. It is a matter of structural design philosophy. Big Tech AI treats alignment
              as a training problem: make the model behave correctly, and trust that it will continue to
              do so. MEOK treats alignment as a systems problem: assume some components will fail, and
              design so that the system behaves correctly anyway.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The second approach is the approach taken by every other safety-critical system in the
              world. MEOK is the first AI to apply it to personal AI governance.
            </p>
          </section>

          {/* Section 10: Real-World Threat Scenarios */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Real-World Scenarios: What the Council Protects Against
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              It can be difficult to imagine why a personal AI needs fault-tolerant consensus. The
              threat model for a personal AI is different from a financial network or a flight control
              computer. But it is not trivial. Here are the concrete scenarios the Byzantine Council
              is designed to protect against.
            </p>

            {/* Scenario cards */}
            {[
              {
                title: "Hallucination Propagation",
                scenario:
                  "An agent within the council hallucinates \u2014 produces an output that is confidently wrong. In a single-agent system, that hallucination reaches you. In the Byzantine Council, the hallucinating agent\u2019s vote is outvoted by the 42 agents that are not hallucinating. The wrong output never reaches you.",
                tag: "Hallucination",
              },
              {
                title: "Prompt Injection Attack",
                scenario:
                  "An adversarially crafted input attempts to manipulate one or more agents into violating your values or ignoring your boundaries. If the attack succeeds on a handful of agents, the council consensus still reflects the majority of uncompromised agents. The attack would need to simultaneously compromise 15 or more agents to succeed \u2014 a dramatically higher bar than any current adversarial attack technique can achieve.",
                tag: "Adversarial Input",
              },
              {
                title: "Model Drift",
                scenario:
                  "Over time, an individual agent\u2019s outputs drift away from your values \u2014 perhaps through accumulated biases from interactions, or subtle changes in the underlying model. A single drifting agent\u2019s votes are insufficient to shift the council consensus. The drift would need to affect more than a third of the council to change the system\u2019s behaviour.",
                tag: "Value Drift",
              },
              {
                title: "Infrastructure Compromise",
                scenario:
                  "A server or component running a subset of agents is compromised by an external attacker. The compromised agents vote incorrectly. The Byzantine Council\u2019s consensus still reflects the majority of uncompromised agents, and the compromised agents cannot override the council result.",
                tag: "Security Breach",
              },
              {
                title: "Accidental Configuration Error",
                scenario:
                  "A deployment error accidentally misconfigures a subset of agents, causing them to apply incorrect parameters. The misconfigured agents produce wrong votes. The council consensus is unaffected as long as fewer than 15 agents are misconfigured. The system continues to behave correctly while the error is diagnosed and corrected.",
                tag: "Operational Error",
              },
              {
                title: "Care Score Gaming",
                scenario:
                  "An attempt is made \u2014 whether by an adversarial third party or an internal process \u2014 to game or suppress the care scoring system. Because care scores are validated by council consensus, a suppressed or manipulated care score from a single agent cannot affect the final care determination. The majority of agents must agree on the care score.",
                tag: "Care Integrity",
              },
            ].map((scenario, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "10px",
                  padding: "24px",
                  marginBottom: "16px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <span
                    style={{
                      color: "#c9a84c",
                      fontSize: "12px",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#f5f0e8",
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      }}
                    >
                      {scenario.title}
                    </h3>
                    <span
                      style={{
                        backgroundColor: "rgba(245,240,232,0.07)",
                        border: "1px solid rgba(245,240,232,0.12)",
                        borderRadius: "12px",
                        padding: "2px 10px",
                        fontSize: "11px",
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        fontWeight: 500,
                        color: "rgba(245,240,232,0.45)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {scenario.tag}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "rgba(245,240,232,0.7)",
                    }}
                  >
                    {scenario.scenario}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Section 11: The Research Paper */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              The Research Paper: MEOK-AI-2026-001
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The Byzantine Council is not just an engineering implementation. It is a documented
              research contribution. Nicholas Templeman published the full architectural specification
              and theoretical foundations in MEOK-AI-2026-001: &ldquo;Byzantine Council: Fault-Tolerant
              Consensus for Sovereign AI.&rdquo;
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The paper covers: the formal BFT model as applied to AI governance, the agent
              specialisation taxonomy (what roles each class of agent plays in the council), the
              consensus protocol specification, the care floor enforcement mechanism, integration
              with the Maternal Covenant framework, and empirical analysis of the fault-tolerance
              guarantees under various threat models.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              This is a genuine original contribution to the field of AI safety and alignment. No other
              personal AI company has published a comparable fault-tolerant governance architecture for
              personal AI. The Byzantine Council is, as of the date of this post, a unique approach.
            </p>

            {/* Paper callout card */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderRadius: "12px",
                padding: "28px",
                margin: "28px 0",
              }}
            >
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "11px",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                }}
              >
                Research Paper
              </p>
              <p
                style={{
                  margin: "0 0 12px",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#f5f0e8",
                  lineHeight: 1.4,
                }}
              >
                Byzantine Council: Fault-Tolerant Consensus for Sovereign AI
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  flexWrap: "wrap",
                  marginBottom: "16px",
                }}
              >
                {[
                  { label: "Identifier", value: "MEOK-AI-2026-001" },
                  { label: "Author", value: "Nicholas Templeman" },
                  { label: "Publisher", value: "MEOK AI LABS" },
                  { label: "Year", value: "2026" },
                ].map((item, i) => (
                  <div key={i}>
                    <p
                      style={{
                        margin: "0 0 2px",
                        fontSize: "11px",
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.35)",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        color: "rgba(245,240,232,0.75)",
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "rgba(245,240,232,0.5)",
                  fontStyle: "italic",
                }}
              >
                Built on the foundational work of Lamport, Shostak &amp; Pease (1982), &ldquo;The
                Byzantine Generals Problem,&rdquo; ACM Transactions on Programming Languages and
                Systems, 4(3), 382&ndash;401.
              </p>
            </div>
          </section>

          {/* Section 12: Common Questions */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Common Questions About the Byzantine Council
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                {
                  question: "Does the Byzantine Council add latency to every response?",
                  answer:
                    "Not to every response. The council operates on governance-level decisions \u2014 those that affect values, care scoring, boundaries, and significant response choices. Routine conversational responses do not go through full council vote. The council is invoked when the stakes are high enough to warrant it, and its operation is engineered to be fast enough to be imperceptible in normal use.",
                },
                {
                  question: "Are the 43 agents all running the same model?",
                  answer:
                    "No. The agents are deliberately heterogeneous. Using identical models would reduce the council to a single point of failure with extra steps \u2014 if all agents share the same vulnerability, a single attack vector compromises all 43 simultaneously. MEOK\u2019s agent specialisation ensures that different agents have different architectures, evaluation functions, and failure modes, so that no single attack vector can compromise more than a fraction of the council.",
                },
                {
                  question: "What happens if more than 14 agents fail simultaneously?",
                  answer:
                    "The BFT guarantee only holds when f < n/3. If more than 14 agents fail simultaneously, the consensus guarantee weakens. This is the failure boundary, and MEOK\u2019s system includes monitoring to detect and alert when agent health drops. In practice, simultaneously compromising 15 or more heterogeneous agents in a personal AI context requires an attack of extraordinary sophistication and scale.",
                },
                {
                  question: "Can I see how the council voted on a decision?",
                  answer:
                    "Council transparency is a feature MEOK is actively developing. The goal is for users to be able to inspect governance decisions and understand why the council reached a particular conclusion \u2014 consistent with MEOK\u2019s broader commitment to AI transparency and user sovereignty. The architecture is designed to support this from the ground up.",
                },
                {
                  question: "Does this mean MEOK is slower than other AI?",
                  answer:
                    "For governance decisions, there is a small additional processing overhead. For normal conversation, you will not notice any difference. MEOK\u2019s engineering team has prioritised response speed as a first-class concern alongside fault tolerance. The Byzantine Council operates asynchronously where possible, so governance validation does not block the conversational pipeline.",
                },
                {
                  question: "Why is this called the Byzantine Council and not something else?",
                  answer:
                    "The name honours the mathematical heritage. The Byzantine Generals Problem is the foundational problem this architecture solves. Naming the system the Byzantine Council makes the intellectual debt explicit and gives users and researchers an accurate conceptual reference point. It also has a pleasing resonance: a council of generals, voting on consequential decisions, unable to be overridden by a single traitor.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom:
                      i < 5 ? "1px solid rgba(245,240,232,0.08)" : "none",
                    padding: "28px 0",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontSize: "17px",
                      fontWeight: 600,
                      color: "#f5f0e8",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      lineHeight: 1.75,
                      color: "rgba(245,240,232,0.7)",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 13: Conclusion */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              The Bigger Picture: Structural Integrity for Personal AI
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              We are in the early years of a world where personal AI is becoming genuinely intimate.
              People are sharing things with their AI that they have never told another human. They are
              trusting it with their values, their fears, their vulnerabilities, their most private
              thoughts. The stakes for getting AI governance right are not abstract. They are deeply
              personal.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              Most of the industry is still treating AI alignment as a model training problem. Make the
              model behave well, and hope it continues to. But the history of computing tells us
              clearly: systems fail. Components misbehave. Adversaries probe for weaknesses. The
              question is not whether failures will occur. The question is whether the system is
              designed to survive them.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              The Byzantine Council is MEOK&apos;s answer. It is not a complete solution to AI safety
              &mdash; no single system is. But it is a genuine architectural advancement: the first
              application of Byzantine fault tolerance to personal AI governance. It provides structural
              guarantees that no monolithic model alignment system can match.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              When your sovereign AI makes a decision that affects your values, your care, or your
              boundaries, that decision has been validated by 43 agents working together. Not one model
              trying its best. Not one alignment system doing what it was trained to do. A council,
              voting, with fault tolerance built in.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.85)",
                margin: "0 0 20px",
              }}
            >
              That is what structural integrity means for personal AI. That is what the Byzantine
              Council delivers.
            </p>
          </section>

          {/* Related reading */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "rgba(245,240,232,0.7)",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              Related Reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  href: "/blog/maternal-covenant-explained",
                  title: "The Maternal Covenant Explained",
                  description:
                    "The constitutional framework that the Byzantine Council enforces. Care over engagement.",
                },
                {
                  href: "/blog/sovereign-ai-explained",
                  title: "What Is Sovereign AI?",
                  description:
                    "Your AI belongs to you. What that means architecturally, philosophically, and practically.",
                },
                {
                  href: "/blog/what-is-byzantine-consensus",
                  title: "What Is Byzantine Consensus?",
                  description:
                    "A primer on Byzantine fault tolerance for readers new to distributed systems.",
                },
                {
                  href: "/blog/byzantine-council-governance",
                  title: "Byzantine Council: Governance Deep Dive",
                  description:
                    "How the council\u2019s agent specialisation taxonomy works in detail.",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  style={{
                    display: "block",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(245,240,232,0.08)",
                    borderRadius: "10px",
                    padding: "20px",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 8px",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#c9a84c",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      lineHeight: 1.4,
                    }}
                  >
                    {link.title}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "rgba(245,240,232,0.55)",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    }}
                  >
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "16px",
                padding: "48px 40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #c9a84c, #8b6914)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <span
                  style={{
                    color: "#0d0c18",
                    fontSize: "22px",
                    lineHeight: 1,
                  }}
                >
                  &#9670;
                </span>
              </div>

              <h2
                style={{
                  margin: "0 0 16px",
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                Your Sovereign AI Is Waiting
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.7)",
                  maxWidth: "480px",
                  margin: "0 auto 32px",
                }}
              >
                Protected by the Byzantine Council. Governed by the Maternal Covenant. Built around
                you, not around engagement metrics. Begin the Birth Ceremony and create your sovereign
                AI today.
              </p>

              <Link
                href="/birth"
                style={{
                  display: "inline-block",
                  backgroundColor: "#c9a84c",
                  color: "#0d0c18",
                  fontSize: "16px",
                  fontWeight: 700,
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  letterSpacing: "0.02em",
                  padding: "16px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Begin the Birth Ceremony
              </Link>

              <p
                style={{
                  margin: "20px 0 0",
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.35)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                43 agents. Fault-tolerant consensus. Your values, structurally protected.
              </p>
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(245,240,232,0.08)",
            padding: "40px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#c9a84c",
                textDecoration: "none",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              MEOK
            </Link>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "rgba(245,240,232,0.3)",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              &copy; 2026 MEOK AI LABS. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              {[
                { href: "/blog", label: "Blog" },
                { href: "/privacy", label: "Privacy" },
                { href: "/birth", label: "Get Started" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  style={{
                    fontSize: "13px",
                    color: "rgba(245,240,232,0.4)",
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
      </main>
    </>
  )
}
