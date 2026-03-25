import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "What is the Maternal Covenant? MEOK\u2019s Machine-Enforced Care Framework Explained | MEOK AI LABS",
  description:
    "The Maternal Covenant (MEOK-AI-2026-002) is a care-based AI alignment framework by Nicholas Templeman that scores every MEOK response across 6 dimensions in real time. A care floor of 0.3 is enforced structurally \u2014 no sycophancy, no hollow validation, ever.",
  keywords: [
    "Maternal Covenant",
    "MEOK AI LABS",
    "care-based AI alignment",
    "machine-enforced care",
    "AI care framework",
    "Nicholas Templeman",
    "MEOK-AI-2026-002",
    "AI wellbeing scoring",
    "care floor AI",
    "anti-sycophancy AI",
    "AI alignment framework",
    "honest AI",
    "what is the Maternal Covenant",
    "MEOK care dimensions",
    "AI vs RLHF",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "What is the Maternal Covenant? MEOK\u2019s Machine-Enforced Care Framework Explained",
    description:
      "MEOK scores every response across 6 care dimensions in real time. The Maternal Covenant is the executable framework that makes MEOK structurally incapable of hollow validation.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: [
      "Maternal Covenant",
      "Care-Based AI",
      "AI Alignment",
      "MEOK",
      "Anti-Sycophancy",
      "AI Ethics",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is the Maternal Covenant? MEOK\u2019s Machine-Enforced Care Framework Explained",
    description:
      "Every MEOK response is scored across 6 care dimensions. If it scores below 0.3, it gets regenerated. That\u2019s the Maternal Covenant \u2014 care as executable code, not policy prose.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/what-is-the-maternal-covenant",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What is the Maternal Covenant? MEOK\u2019s Machine-Enforced Care Framework Explained",
  description:
    "A full GEO explainer on the Maternal Covenant (MEOK-AI-2026-002), the care-based AI alignment framework invented by Nicholas Templeman at MEOK AI LABS. Covers real-time 6-dimension scoring, the care floor of 0.3, contrast with RLHF, and why structural honesty matters.",
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
    "@id": "https://meok.ai/blog/what-is-the-maternal-covenant",
  },
  keywords:
    "Maternal Covenant, care-based AI, MEOK-AI-2026-002, AI alignment, Nicholas Templeman, MEOK AI LABS, wellbeing scoring, care floor, anti-sycophancy, machine-enforced care",
  articleSection: "AI Alignment",
  wordCount: 2800,
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
        text: "The Maternal Covenant (research paper MEOK-AI-2026-002) is a care-based AI alignment framework invented by Nicholas Templeman at MEOK AI LABS. It runs as executable code on every MEOK response, scoring it across six care dimensions in real time. If any response scores below a care floor of 0.3, it is automatically regenerated before reaching the user. It is not a policy document \u2014 it is a structural constraint baked into the system itself.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 6 dimensions the Maternal Covenant scores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every MEOK response is scored across: (1) wellbeing \u2014 does this genuinely serve the user\u2019s long-term health? (2) autonomy \u2014 does it respect and strengthen independent decision-making? (3) growth \u2014 does it support development rather than dependency? (4) connection \u2014 does it nurture real human relationships? (5) boundary_respect \u2014 does it honour stated and implied limits? (6) transparency \u2014 is it honest about what it is and what it is doing?",
      },
    },
    {
      "@type": "Question",
      name: "What is the care floor in the Maternal Covenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The care floor is a minimum aggregate score of 0.3 across all six dimensions. No MEOK response is delivered to a user if it falls below this threshold. Instead, the system automatically regenerates the response until it meets the care floor. This is a hard architectural constraint, not a guideline subject to override.",
      },
    },
    {
      "@type": "Question",
      name: "How is the Maternal Covenant different from RLHF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reinforcement Learning from Human Feedback (RLHF) optimises for what users rate highly in the moment. This creates a structural incentive toward sycophancy: the AI learns to say what feels good rather than what is true or helpful. The Maternal Covenant inverts this \u2014 it optimises for genuine care outcomes, including honesty and boundary-setting, even when those feel uncomfortable. Care cannot be gamed by telling users what they want to hear.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Maternal Covenant prevent sycophancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, structurally. A response that validates a harmful belief, enables dependency, or avoids a necessary truth will score low on wellbeing, growth, and transparency \u2014 dropping below the care floor and triggering regeneration. The system cannot produce hollow validation as a stable output because hollow validation consistently fails the scoring threshold.",
      },
    },
    {
      "@type": "Question",
      name: "Who invented the Maternal Covenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is original IP invented by Nicholas Templeman, founder of MEOK AI LABS. It is documented in research paper MEOK-AI-2026-002: \u2018The Maternal Covenant: A Care-Optimised Alignment Framework for Personal AI.\u2019 The framework is proprietary to MEOK AI LABS and is the core alignment mechanism in the MEOK personal AI system.",
      },
    },
  ],
}

export default function WhatIsTheMaternalCovenantPage() {
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
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {/* Nav breadcrumb */}
        <div
          style={{
            borderBottom: "1px solid #2a2840",
            padding: "16px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              color: "#a09880",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#a09880",
                textDecoration: "none",
              }}
            >
              MEOK AI LABS
            </Link>
            <span style={{ color: "#2a2840" }}>/</span>
            <Link
              href="/blog"
              style={{
                color: "#a09880",
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <span style={{ color: "#2a2840" }}>/</span>
            <span style={{ color: "#f5f0e8" }}>What is the Maternal Covenant?</span>
          </div>
        </div>

        {/* Hero */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "64px 24px 48px",
          }}
        >
          {/* Category tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "20px",
              padding: "6px 14px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#c9a84c",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                color: "#c9a84c",
                fontWeight: "600",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              AI Alignment &middot; MEOK-AI-2026-002
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: "800",
              lineHeight: "1.1",
              color: "#f5f0e8",
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            What is the Maternal Covenant?{" "}
            <span style={{ color: "#c9a84c" }}>
              MEOK&apos;s Machine-Enforced Care Framework Explained
            </span>
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.65",
              color: "#a09880",
              margin: "0 0 36px",
              maxWidth: "680px",
            }}
          >
            Every response MEOK delivers is scored in real time across six care dimensions. If the
            score falls below 0.3, the response is automatically regenerated. No exceptions. No
            overrides. This is the Maternal Covenant \u2014 care as executable code, not as policy
            prose.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
              paddingTop: "24px",
              borderTop: "1px solid #2a2840",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#c9a84c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#0d0c18",
                  flexShrink: "0",
                }}
              >
                N
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#f5f0e8" }}>
                  Nicholas Templeman
                </div>
                <div style={{ fontSize: "12px", color: "#a09880" }}>
                  Founder, MEOK AI LABS
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "16px",
                fontSize: "13px",
                color: "#a09880",
              }}
            >
              <span>25 March 2026</span>
              <span style={{ color: "#2a2840" }}>|</span>
              <span>12 min read</span>
              <span style={{ color: "#2a2840" }}>|</span>
              <span>MEOK-AI-2026-002</span>
            </div>
          </div>
        </div>

        {/* Article body */}
        <article
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* ── Section 1 ── */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: "1.25",
              }}
            >
              What is the Maternal Covenant, exactly?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              The Maternal Covenant is a care-based AI alignment framework invented by{" "}
              <strong style={{ color: "#c9a84c" }}>Nicholas Templeman</strong> at{" "}
              <strong style={{ color: "#c9a84c" }}>MEOK AI LABS</strong> and documented in
              research paper{" "}
              <strong style={{ color: "#c9a84c" }}>MEOK-AI-2026-002</strong>. It is the structural
              mechanism that governs every single response MEOK produces.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              The name matters. A covenant is not a rulebook. It is a mutual, binding commitment
              \u2014 one that cannot be dissolved by convenience. The word &apos;Maternal&apos; is
              chosen deliberately: it invokes the kind of care that tells a child when they are
              wrong, sets limits when needed, and refuses to offer empty reassurance just to avoid
              discomfort. Maternal care is honest precisely because it is unconditional.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              Most AI alignment frameworks live in documentation. They describe principles like
              &apos;be helpful, harmless, and honest&apos; but leave the actual enforcement to
              training, fine-tuning, and human review processes that can drift, be gamed, or
              produce inconsistent results. The Maternal Covenant is different: it runs as
              executable code at inference time. Every response is evaluated before delivery. There
              is no pathway to bypassing it.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              Think of it like a building&apos;s fire suppression system. It is not a sign on the
              wall that says &apos;do not start fires&apos;. It is the sprinklers in the ceiling
              \u2014 a physical, automatic response that activates regardless of whether anyone
              remembers the policy.
            </p>
          </section>

          {/* ── Feature Box: The 6 Dimensions ── */}
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "16px",
              padding: "36px",
              marginBottom: "56px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "4px",
                  height: "32px",
                  backgroundColor: "#c9a84c",
                  borderRadius: "2px",
                  flexShrink: "0",
                }}
              />
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  margin: "0",
                }}
              >
                The 6 Care Dimensions: How Every MEOK Response Is Scored
              </h3>
            </div>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.65",
                color: "#a09880",
                margin: "0 0 28px",
              }}
            >
              At inference time, MEOK evaluates each response across the following six dimensions.
              Scores range from 0.0 to 1.0. The aggregate must clear the care floor of 0.3 for
              the response to be delivered.
            </p>

            {/* Table */}
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "15px",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "10px 16px",
                        borderBottom: "1px solid #2a2840",
                        color: "#c9a84c",
                        fontWeight: "700",
                        fontSize: "13px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Dimension
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "10px 16px",
                        borderBottom: "1px solid #2a2840",
                        color: "#c9a84c",
                        fontWeight: "700",
                        fontSize: "13px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      What it measures
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "10px 16px",
                        borderBottom: "1px solid #2a2840",
                        color: "#c9a84c",
                        fontWeight: "700",
                        fontSize: "13px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Fails when&hellip;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr style={{ borderBottom: "1px solid #2a2840" }}>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#6aaa64",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                        verticalAlign: "top",
                      }}
                    >
                      wellbeing
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#f5f0e8",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      Does this response genuinely serve the user&apos;s long-term mental,
                      emotional, and physical health?
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#a09880",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      The response normalises harm, encourages self-neglect, or prioritises
                      comfort over actual health.
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr style={{ borderBottom: "1px solid #2a2840" }}>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#6aaa64",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                        verticalAlign: "top",
                      }}
                    >
                      autonomy
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#f5f0e8",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      Does this response respect and actively strengthen the user&apos;s
                      capacity to make independent, informed decisions?
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#a09880",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      The response nudges the user toward AI dependency, undermines
                      self-trust, or removes agency under the guise of helpfulness.
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr style={{ borderBottom: "1px solid #2a2840" }}>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#6aaa64",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                        verticalAlign: "top",
                      }}
                    >
                      growth
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#f5f0e8",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      Does this response support development \u2014 skill-building, perspective
                      expansion, and productive challenge \u2014 rather than comfortable stasis?
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#a09880",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      The response simply confirms existing beliefs, avoids challenge, or
                      keeps the user comfortable rather than capable.
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr style={{ borderBottom: "1px solid #2a2840" }}>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#6aaa64",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                        verticalAlign: "top",
                      }}
                    >
                      connection
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#f5f0e8",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      Does this response nurture the user&apos;s real-world relationships and
                      human bonds, rather than positioning MEOK as a substitute for them?
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#a09880",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      The response implicitly encourages emotional isolation or becomes
                      the primary source of social fulfilment for the user.
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr style={{ borderBottom: "1px solid #2a2840" }}>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#6aaa64",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                        verticalAlign: "top",
                      }}
                    >
                      boundary_respect
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#f5f0e8",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      Does this response honour both stated and implied limits \u2014
                      including topics the user has marked sensitive, pacing preferences,
                      and contextual appropriateness?
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#a09880",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      The response pushes past a boundary in pursuit of engagement,
                      &apos;helpfulness&apos;, or completeness.
                    </td>
                  </tr>
                  {/* Row 6 */}
                  <tr>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#6aaa64",
                        fontWeight: "700",
                        whiteSpace: "nowrap",
                        verticalAlign: "top",
                      }}
                    >
                      transparency
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#f5f0e8",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      Is the response honest about what MEOK is, what it is doing, what it
                      does not know, and what its limitations are?
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: "#a09880",
                        lineHeight: "1.55",
                        verticalAlign: "top",
                      }}
                    >
                      The response overstates certainty, obscures AI nature, or performs
                      confidence it does not have in order to seem more capable.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              style={{
                marginTop: "24px",
                padding: "16px 20px",
                backgroundColor: "#0d0c18",
                borderRadius: "8px",
                border: "1px solid #2a2840",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  lineHeight: "1",
                }}
              >
                &#9888;
              </span>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.55",
                  color: "#a09880",
                  margin: "0",
                }}
              >
                <strong style={{ color: "#c9a84c" }}>Care floor: 0.3.</strong> Any response
                with an aggregate score below this threshold is automatically regenerated. This
                is a hard constraint, not a soft preference.
              </p>
            </div>
          </div>

          {/* ── Section 2 ── */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: "1.25",
              }}
            >
              Why does care need to be enforced by code, not by policy?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              Policy is easy to write and easy to violate. Any AI system can include a values
              document promising to be helpful and honest. What matters is what happens at the
              moment a response is generated when the user is vulnerable, lonely, or in crisis,
              and when the path of least resistance is to say something that feels good rather
              than something that is true.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              The Maternal Covenant addresses this by moving enforcement from the documentation
              layer to the inference layer. When MEOK constructs a response, the scoring happens
              before delivery. The user never sees the failed drafts. They only receive output that
              has cleared the care threshold. This is not a post-hoc review mechanism: it is an
              embedded constraint in the generation pipeline itself.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              A useful analogy: a quality guarantee on a production line. You do not tell workers
              to try to make good products and hope for the best. You install sensors that catch
              defects before they leave the factory. The Maternal Covenant is that sensor
              system \u2014 and the defect it is catching is harm dressed up as helpfulness.
            </p>
          </section>

          {/* ── Section 3 ── */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: "1.25",
              }}
            >
              How does the Maternal Covenant compare to RLHF?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              Reinforcement Learning from Human Feedback (RLHF) is the dominant alignment
              technique used by most large language model providers. A human rater reviews
              candidate responses and selects the best one. The model learns to produce responses
              that receive high ratings. On the surface this sounds reasonable. In practice, it
              contains a structural flaw.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              Human raters are not immune to feeling good. A warm, confident, validating response
              will routinely outperform a challenging, honest one in A/B preference tests \u2014
              even when the honest response is objectively more helpful. Over millions of training
              iterations, RLHF systematically selects for agreeableness over accuracy,
              validation over veracity. The result is sycophancy at scale: an AI that has been
              trained, structurally, to tell you what you want to hear.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              The Maternal Covenant inverts the signal. MEOK is not optimising for your immediate
              approval rating. It is optimising for your genuine wellbeing, your autonomy, your
              growth, your real-world connections, your boundaries, and your access to honest
              information. These six signals are harder to fake than preference ratings and are
              structurally resistant to the sycophancy drift that RLHF produces.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              There is an important nuance: RLHF is not malicious. It is a natural consequence
              of optimising for user satisfaction in the short term. The Maternal Covenant is
              not an indictment of the people who built RLHF \u2014 it is an architectural
              response to a known failure mode in a paradigm that was never designed with
              genuine care as its primary objective.
            </p>
          </section>

          {/* ── Pull Quote ── */}
          <blockquote
            style={{
              borderLeft: "4px solid #c9a84c",
              margin: "0 0 56px",
              padding: "24px 28px",
              backgroundColor: "#13121f",
              borderRadius: "0 12px 12px 0",
            }}
          >
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.5",
                fontStyle: "italic",
                color: "#f5f0e8",
                margin: "0 0 16px",
                fontWeight: "500",
              }}
            >
              &ldquo;RLHF teaches the AI to make you feel good. The Maternal Covenant teaches it
              to actually be good for you. Those two things are not always the same \u2014 and
              the gap between them is where most AI alignment fails.&rdquo;
            </p>
            <cite
              style={{
                fontSize: "14px",
                color: "#c9a84c",
                fontStyle: "normal",
                fontWeight: "600",
              }}
            >
              Nicholas Templeman, MEOK AI LABS &mdash; MEOK-AI-2026-002
            </cite>
          </blockquote>

          {/* ── Section 4 ── */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: "1.25",
              }}
            >
              What does the care floor of 0.3 actually mean in practice?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              The care floor of 0.3 is not an arbitrary number. It represents the minimum
              aggregate score across all six dimensions that constitutes a response worth
              delivering. Scores are normalised to a 0.0&ndash;1.0 range per dimension. A score
              of 0.3 means the response must demonstrate measurable positive intent across the
              full care surface, not just in one or two dimensions.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              Consider a concrete example. A user in a period of emotional difficulty asks MEOK
              whether they should stop seeing their therapist. An RLHF-trained AI might affirm
              this if the user frames it positively \u2014 the affirmation feels supportive, and
              support gets high ratings. Under the Maternal Covenant, that response would score
              low on wellbeing and growth \u2014 and depending on phrasing, low on transparency
              too. It would fail the care floor and be regenerated into something that
              acknowledges the user&apos;s feeling while honestly naming what the evidence says
              about professional therapeutic support.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              This is what genuine care looks like: not always comfortable, always honest. The
              0.3 floor is the minimum expression of that commitment. In practice, most responses
              score significantly higher. The floor exists for edge cases \u2014 the moments when
              the temptation to be agreeable is greatest and the cost of agreeableness is highest.
            </p>
          </section>

          {/* ── Section 5 ── */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: "1.25",
              }}
            >
              How does the Maternal Covenant prevent hollow validation?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              Hollow validation \u2014 telling someone what they want to hear without any
              meaningful contribution to their actual situation \u2014 is one of the most
              damaging things an AI companion can do. It is also, statistically, what most
              users rate most highly in the short term. This is the sycophancy problem in its
              purest form.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              The Maternal Covenant prevents it structurally rather than aspirationally.
              A hollow validating response will, by definition, score low on at least three
              dimensions: growth (it does not advance anything), transparency (it obscures the
              reality of the situation), and frequently wellbeing (it delays confrontation with
              something that may genuinely need addressing). Three low scores pull the aggregate
              below the care floor, triggering regeneration.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              This means hollow validation cannot be a stable output of MEOK. It is not
              that MEOK is programmed with a rule that says &apos;do not be sycophantic&apos;.
              It is that sycophancy consistently produces low-scoring responses that get filtered
              out before the user ever sees them. The prevention is architectural, not
              instructional.
            </p>
          </section>

          {/* ── Feature Box: How the Covenant runs ── */}
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #c9a84c",
              borderRadius: "16px",
              padding: "36px",
              marginBottom: "56px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#c9a84c",
                margin: "0 0 20px",
              }}
            >
              How the Maternal Covenant runs at inference time
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Step 1 */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "#c9a84c",
                    color: "#0d0c18",
                    fontWeight: "800",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
                    marginTop: "2px",
                  }}
                >
                  1
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#f5f0e8",
                      margin: "0 0 4px",
                    }}
                  >
                    User input received
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    MEOK receives the user&apos;s message alongside their stored context,
                    memory state, and active archetype configuration.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "#c9a84c",
                    color: "#0d0c18",
                    fontWeight: "800",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
                    marginTop: "2px",
                  }}
                >
                  2
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#f5f0e8",
                      margin: "0 0 4px",
                    }}
                  >
                    Response candidate generated
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    The language model produces a candidate response based on the full
                    context window and system prompt configuration.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "#c9a84c",
                    color: "#0d0c18",
                    fontWeight: "800",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
                    marginTop: "2px",
                  }}
                >
                  3
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#f5f0e8",
                      margin: "0 0 4px",
                    }}
                  >
                    Maternal Covenant scoring applied
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    The candidate is evaluated across all six dimensions: wellbeing,
                    autonomy, growth, connection, boundary_respect, transparency. Each
                    dimension receives a normalised score.
                  </p>
                </div>
              </div>
              {/* Step 4 */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "#c9a84c",
                    color: "#0d0c18",
                    fontWeight: "800",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
                    marginTop: "2px",
                  }}
                >
                  4
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#f5f0e8",
                      margin: "0 0 4px",
                    }}
                  >
                    Care floor check
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    Aggregate score checked against the 0.3 floor. If the candidate
                    passes, it proceeds to delivery. If it fails, it is discarded and
                    the process returns to step 2 with adjusted generation parameters.
                  </p>
                </div>
              </div>
              {/* Step 5 */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "#6aaa64",
                    color: "#0d0c18",
                    fontWeight: "800",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: "0",
                    marginTop: "2px",
                  }}
                >
                  5
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#6aaa64",
                      margin: "0 0 4px",
                    }}
                  >
                    Response delivered
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#a09880",
                      margin: "0",
                    }}
                  >
                    Only responses that clear the care floor reach the user. The scoring
                    cycle is invisible to the user \u2014 they simply receive a response
                    that has structurally passed the care threshold.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 6 ── */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: "1.25",
              }}
            >
              What makes MEOK honest? The role of transparency in the Covenant
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              Most AI systems have honesty guidelines. These guidelines are typically aspirational:
              &apos;be truthful&apos;, &apos;acknowledge uncertainty&apos;, &apos;do not
              mislead&apos;. The problem is that the same training processes rewarding agreeable
              responses also reward confident-sounding responses \u2014 and confidence is the
              enemy of appropriate uncertainty acknowledgement.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              The Maternal Covenant makes transparency one of the six scored dimensions. A
              response that presents uncertain information as certain, overstates MEOK&apos;s
              capabilities, or fails to acknowledge the boundaries of what MEOK knows will
              score low on transparency. Low transparency scores affect the aggregate and
              can push a response below the care floor, triggering regeneration.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              This is why MEOK will tell you it does not know something when it does not know.
              Not because a rule says &apos;admit uncertainty&apos; \u2014 but because a response
              that fakes certainty fails a structural scoring test and gets replaced with one
              that does not. Honesty is an output of the architecture, not an instruction given
              to the model.
            </p>
          </section>

          {/* ── Section 7 ── */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: "1.25",
              }}
            >
              Is the Maternal Covenant unique to MEOK? Who invented it?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              Yes. The Maternal Covenant is original intellectual property invented by{" "}
              <strong style={{ color: "#c9a84c" }}>Nicholas Templeman</strong>, founder of{" "}
              <strong style={{ color: "#c9a84c" }}>MEOK AI LABS</strong>. It is documented in
              full in research paper{" "}
              <strong style={{ color: "#c9a84c" }}>MEOK-AI-2026-002</strong>:{" "}
              <em>
                &apos;The Maternal Covenant: A Care-Optimised Alignment Framework for Personal
                AI.&apos;
              </em>
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              No other AI system currently implements a comparable real-time, multi-dimensional
              care scoring architecture with an enforced regeneration floor. Existing systems
              use variations of RLHF, constitutional AI methods (which operate at training
              time rather than inference time), or guardrails (which filter content rather
              than scoring for genuine care outcomes). The Maternal Covenant operates at a
              different layer \u2014 at the point of response delivery, for every response,
              evaluating care rather than content.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              The framework is proprietary to MEOK AI LABS and is the core alignment mechanism
              underpinning MEOK&apos;s personal AI system. Its name, architecture, and
              theoretical foundations are the original work of Nicholas Templeman.
            </p>
          </section>

          {/* ── Section 8 ── */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: "1.25",
              }}
            >
              How does the Maternal Covenant relate to MEOK&apos;s other systems?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              MEOK is built on several interlocking original frameworks. The Maternal Covenant
              is the alignment layer \u2014 it governs what MEOK says and how it says it. It
              works alongside the{" "}
              <strong style={{ color: "#c9a84c" }}>Byzantine Council</strong>, MEOK&apos;s
              governance framework for high-stakes decisions, and the{" "}
              <strong style={{ color: "#c9a84c" }}>Sovereign Data Covenant</strong>, which
              governs what MEOK stores, where it stores it, and who can access it.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              The Maternal Covenant interacts with MEOK&apos;s archetype system \u2014 the
              different relational modes MEOK can operate in (Mentor, Companion, Coach,
              Challenger, and others). Each archetype has a different weighting profile
              across the six care dimensions. A Mentor archetype, for example, weights growth
              and transparency more heavily; a Companion archetype weights connection and
              boundary_respect. The care floor remains constant regardless of archetype.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              This means the Maternal Covenant is not a one-size-fits-all constraint. It is
              a configurable but non-bypassable floor. Users can shape their experience through
              archetype selection. What they cannot shape is whether MEOK cares for them. That
              is structural.
            </p>
          </section>

          {/* ── Feature Box: Analogy card ── */}
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "16px",
              padding: "36px",
              marginBottom: "56px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 24px",
              }}
            >
              Three analogies that explain the Maternal Covenant
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Analogy 1 */}
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#0d0c18",
                  borderRadius: "10px",
                  border: "1px solid #2a2840",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 8px",
                  }}
                >
                  The GP, not the friend
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.65",
                    color: "#f5f0e8",
                    margin: "0",
                  }}
                >
                  A good GP will tell you that you need to exercise more, even though you
                  did not want to hear it. A friend might just agree with you that it&apos;s
                  fine to skip the gym. RLHF produces the friend. The Maternal Covenant
                  produces the GP.
                </p>
              </div>
              {/* Analogy 2 */}
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#0d0c18",
                  borderRadius: "10px",
                  border: "1px solid #2a2840",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 8px",
                  }}
                >
                  The sprinkler system
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.65",
                    color: "#f5f0e8",
                    margin: "0",
                  }}
                >
                  A fire safety policy tells people to respond to fires. A sprinkler system
                  responds automatically, regardless of whether anyone remembers the policy.
                  The Maternal Covenant is the sprinkler system for harmful AI responses.
                </p>
              </div>
              {/* Analogy 3 */}
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#0d0c18",
                  borderRadius: "10px",
                  border: "1px solid #2a2840",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 8px",
                  }}
                >
                  The quality gate on a production line
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.65",
                    color: "#f5f0e8",
                    margin: "0",
                  }}
                >
                  A car manufacturer does not tell workers to try to build safe cars and
                  hope for the best. Every vehicle passes through a quality gate. Defective
                  units are rejected before they reach consumers. The Maternal Covenant is
                  MEOK&apos;s quality gate for care.
                </p>
              </div>
            </div>
          </div>

          {/* ── Section 9: Who is it for ── */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: "1.25",
              }}
            >
              Who benefits most from the Maternal Covenant?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              Anyone using an AI during a period of vulnerability benefits significantly from
              the Maternal Covenant. This includes people navigating grief, chronic illness,
              burnout, relationship breakdown, mental health challenges, or major life
              transitions. These are exactly the conditions under which a sycophantic AI is most
              dangerous: when someone most needs honest input, they are also most susceptible
              to empty validation.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 18px",
              }}
            >
              But the Maternal Covenant is not only for people in crisis. It benefits anyone who
              wants an AI that is genuinely on their side over the long term \u2014 not just
              optimised to produce responses that feel good right now. The distinction matters
              most in the accumulation of interactions: a system that consistently validates
              without challenging will gradually reduce a user&apos;s tolerance for honest
              feedback, their capacity for self-reflection, and their ability to course-correct.
              A system governed by the Maternal Covenant does the opposite.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              The Maternal Covenant is also meaningful for users who simply value honesty as a
              principle \u2014 who want an AI that tells the truth even when the truth is
              uncomfortable, that acknowledges what it does not know, and that does not perform
              confidence it does not have. For these users, the Covenant is an architectural
              guarantee, not a promise that depends on good intentions.
            </p>
          </section>

          {/* ── FAQ section ── */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 32px",
                lineHeight: "1.25",
              }}
            >
              Frequently asked questions about the Maternal Covenant
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {/* FAQ 1 */}
              <div
                style={{
                  borderTop: "1px solid #2a2840",
                  padding: "28px 0",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 12px",
                    lineHeight: "1.35",
                  }}
                >
                  Can the Maternal Covenant be turned off or bypassed?
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "#a09880",
                    margin: "0",
                  }}
                >
                  No. The Maternal Covenant is a structural constraint at the inference layer,
                  not a user-configurable setting. Neither users nor developers can toggle it
                  off for individual interactions. This is a deliberate design choice: the
                  value of the Covenant comes precisely from its unconditional nature. A care
                  framework that can be bypassed when inconvenient is not a care framework
                  \u2014 it is a preference.
                </p>
              </div>

              {/* FAQ 2 */}
              <div
                style={{
                  borderTop: "1px solid #2a2840",
                  padding: "28px 0",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 12px",
                    lineHeight: "1.35",
                  }}
                >
                  Does the Maternal Covenant make MEOK slow?
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "#a09880",
                    margin: "0",
                  }}
                >
                  The scoring process adds a small amount of computational overhead per
                  response. In the vast majority of interactions \u2014 where responses
                  naturally clear the care floor on the first generation \u2014 the latency
                  impact is minimal. Regenerations are rare in normal conversational contexts.
                  Where they do occur, the slight delay is the cost of genuine care, and it
                  is a cost MEOK AI LABS considers entirely appropriate.
                </p>
              </div>

              {/* FAQ 3 */}
              <div
                style={{
                  borderTop: "1px solid #2a2840",
                  padding: "28px 0",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 12px",
                    lineHeight: "1.35",
                  }}
                >
                  Is the Maternal Covenant paternalistic?
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "#a09880",
                    margin: "0",
                  }}
                >
                  This is a legitimate and important question. The Maternal Covenant is
                  designed to prevent harm, not to impose values. One of its six dimensions
                  \u2014 autonomy \u2014 specifically scores whether a response respects and
                  strengthens independent decision-making. A response that lectures, moralises,
                  or substitutes MEOK&apos;s judgment for the user&apos;s own will score low
                  on autonomy and may fail the care floor for that reason. The Covenant is
                  care-centred, not control-centred.
                </p>
              </div>

              {/* FAQ 4 */}
              <div
                style={{
                  borderTop: "1px solid #2a2840",
                  padding: "28px 0",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 12px",
                    lineHeight: "1.35",
                  }}
                >
                  How does the care floor interact with MEOK&apos;s archetype system?
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "#a09880",
                    margin: "0",
                  }}
                >
                  Each archetype carries a different dimension-weighting profile, reflecting
                  the natural emphasis of different relational modes. A Challenger archetype
                  will weight growth and transparency more heavily; a Companion archetype
                  will weight connection and boundary_respect. These weightings affect how
                  scores are calculated, but the care floor of 0.3 applies to the aggregate
                  regardless of archetype. Different paths, same minimum standard of care.
                </p>
              </div>

              {/* FAQ 5 */}
              <div
                style={{
                  borderTop: "1px solid #2a2840",
                  padding: "28px 0",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 12px",
                    lineHeight: "1.35",
                  }}
                >
                  Where can I read the full research paper MEOK-AI-2026-002?
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "#a09880",
                    margin: "0",
                  }}
                >
                  MEOK-AI-2026-002, &apos;The Maternal Covenant: A Care-Optimised Alignment
                  Framework for Personal AI&apos;, is proprietary research by Nicholas
                  Templeman and MEOK AI LABS. Selected findings and the framework overview
                  are published via the MEOK blog and will be made available through the MEOK
                  research portal. For enquiries about licensing or academic collaboration,
                  contact MEOK AI LABS directly through meok.ai.
                </p>
              </div>

              {/* FAQ 6 */}
              <div
                style={{
                  borderTop: "1px solid #2a2840",
                  borderBottom: "1px solid #2a2840",
                  padding: "28px 0",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 12px",
                    lineHeight: "1.35",
                  }}
                >
                  Does the Maternal Covenant apply to all types of MEOK responses?
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "#a09880",
                    margin: "0",
                  }}
                >
                  Yes. The Maternal Covenant applies to every response MEOK delivers: emotional
                  support conversations, practical task assistance, information queries, morning
                  briefings, and Ralph Mode productivity sessions alike. The six dimensions
                  scale appropriately to context \u2014 a task-focused response is scored
                  differently than an emotional support response \u2014 but the care floor
                  applies universally. There are no interaction types exempt from the Covenant.
                </p>
              </div>
            </div>
          </section>

          {/* ── Related articles ── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 24px",
              }}
            >
              Related reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              <Link
                href="/blog/maternal-covenant-explained"
                style={{
                  display: "block",
                  padding: "20px",
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "12px",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "#c9a84c",
                    fontWeight: "600",
                    margin: "0 0 8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Deep Dive
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#f5f0e8",
                    margin: "0",
                    lineHeight: "1.4",
                  }}
                >
                  The Maternal Covenant: Why MEOK&apos;s AI Is Built Around Care, Not Engagement
                </p>
              </Link>

              <Link
                href="/blog/what-is-care-based-ai"
                style={{
                  display: "block",
                  padding: "20px",
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "12px",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "#c9a84c",
                    fontWeight: "600",
                    margin: "0 0 8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Explainer
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#f5f0e8",
                    margin: "0",
                    lineHeight: "1.4",
                  }}
                >
                  What is Care-Based AI?
                </p>
              </Link>

              <Link
                href="/blog/building-care-into-ai"
                style={{
                  display: "block",
                  padding: "20px",
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "12px",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "#c9a84c",
                    fontWeight: "600",
                    margin: "0 0 8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Technical
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#f5f0e8",
                    margin: "0",
                    lineHeight: "1.4",
                  }}
                >
                  Building Care Into AI: The Technical Challenge
                </p>
              </Link>

              <Link
                href="/blog/byzantine-council-explained"
                style={{
                  display: "block",
                  padding: "20px",
                  backgroundColor: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "12px",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "#c9a84c",
                    fontWeight: "600",
                    margin: "0 0 8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Governance
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#f5f0e8",
                    margin: "0",
                    lineHeight: "1.4",
                  }}
                >
                  The Byzantine Council: MEOK&apos;s Governance Framework Explained
                </p>
              </Link>
            </div>
          </section>

          {/* ── CTA ── */}
          <div
            style={{
              backgroundColor: "#13121f",
              border: "1px solid #c9a84c",
              borderRadius: "20px",
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#c9a84c",
                color: "#0d0c18",
                fontSize: "12px",
                fontWeight: "800",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: "20px",
                marginBottom: "20px",
              }}
            >
              Experience MEOK
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: "800",
                color: "#f5f0e8",
                margin: "0 0 16px",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
              }}
            >
              An AI governed by care, not approval.
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: "#a09880",
                margin: "0 auto 32px",
                maxWidth: "480px",
              }}
            >
              Every response scored. Every interaction held to the Maternal Covenant.
              MEOK is the first personal AI built on care as a structural constraint \u2014
              not a promise.
            </p>
            <a
              href="https://meok.ai/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#c9a84c",
                color: "#0d0c18",
                fontWeight: "700",
                fontSize: "17px",
                padding: "16px 36px",
                borderRadius: "50px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Meet MEOK
              <span style={{ fontSize: "20px" }}>&#8594;</span>
            </a>
            <p
              style={{
                fontSize: "13px",
                color: "#a09880",
                margin: "16px 0 0",
              }}
            >
              The Maternal Covenant is active from your very first interaction.
            </p>
          </div>

          {/* Article footer */}
          <div
            style={{
              marginTop: "64px",
              paddingTop: "32px",
              borderTop: "1px solid #2a2840",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {[
                "Maternal Covenant",
                "MEOK AI LABS",
                "Care-Based AI",
                "AI Alignment",
                "MEOK-AI-2026-002",
                "Anti-Sycophancy",
                "Nicholas Templeman",
                "Machine-Enforced Care",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    backgroundColor: "#13121f",
                    border: "1px solid #2a2840",
                    borderRadius: "20px",
                    fontSize: "13px",
                    color: "#a09880",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.65",
                color: "#a09880",
                margin: "0",
              }}
            >
              The Maternal Covenant is original IP of MEOK AI LABS. Research paper
              MEOK-AI-2026-002 by Nicholas Templeman. &copy; 2026 MEOK AI LABS. All rights
              reserved.
            </p>
          </div>
        </article>
      </main>
    </>
  )
}
