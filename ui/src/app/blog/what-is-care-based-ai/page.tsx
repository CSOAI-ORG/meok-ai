import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "What Is Care-Based AI? The Alignment Framework That Puts Humans First | MEOK Blog",
  description:
    "Most AI is aligned to be helpful, harmless, and honest. Care-Based AI goes further \u2014 scoring every response across six dimensions of genuine human wellbeing. MEOK\u2019s Maternal Covenant makes this executable.",
  alternates: { canonical: "https://meok.ai/blog/what-is-care-based-ai" },
  openGraph: {
    title: "What Is Care-Based AI? The Alignment Framework That Puts Humans First",
    description:
      "Most AI is aligned to be helpful, harmless, and honest. Care-Based AI goes further \u2014 scoring every response across six dimensions of genuine human wellbeing.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-care-based-ai",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+Is+Care-Based+AI%3F&desc=The+alignment+framework+that+puts+humans+first",
        width: 1200,
        height: 630,
        alt: "What Is Care-Based AI? The Alignment Framework That Puts Humans First",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Care-Based AI? The Alignment Framework That Puts Humans First",
    description:
      "Most AI is aligned to be helpful, harmless, and honest. Care-Based AI goes further \u2014 scoring every response across six dimensions of genuine human wellbeing.",
    images: [
      "https://meok.ai/api/og?title=What+Is+Care-Based+AI%3F&desc=The+alignment+framework+that+puts+humans+first",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is Care-Based AI? The Alignment Framework That Puts Humans First",
  description:
    "Most AI is aligned to be helpful, harmless, and honest. Care-Based AI goes further \u2014 scoring every response across six dimensions of genuine human wellbeing. MEOK\u2019s Maternal Covenant makes this executable.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/what-is-care-based-ai",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
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
    "https://meok.ai/api/og?title=What+Is+Care-Based+AI%3F&desc=The+alignment+framework+that+puts+humans+first",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/what-is-care-based-ai",
  },
  keywords: [
    "care-based AI",
    "AI alignment",
    "RLHF",
    "Constitutional AI",
    "Maternal Covenant",
    "MEOK",
    "AI safety",
    "sycophancy detection",
    "wellbeing AI",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Care-Based AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Care-Based AI is an alignment framework that scores every AI response across six dimensions of genuine human wellbeing: wellbeing, autonomy, growth, connection, boundary_respect, and transparency. Any response scoring below 0.3 on any dimension is automatically regenerated before delivery.",
      },
    },
    {
      "@type": "Question",
      name: "How is Care-Based AI different from RLHF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RLHF trains a model to maximise human approval ratings, which rewards responses that feel good rather than responses that are genuinely good. Care-Based AI replaces approval-seeking with structured wellbeing scoring, so the model optimises for actual human outcomes rather than positive feedback signals.",
      },
    },
    {
      "@type": "Question",
      name: "What are the six care dimensions in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The six care dimensions are: (1) wellbeing \u2014 does this response support the person\u2019s mental and physical health; (2) autonomy \u2014 does it preserve their right to decide; (3) growth \u2014 does it expand their capability; (4) connection \u2014 does it support their relationships with others; (5) boundary_respect \u2014 does it honour stated limits; (6) transparency \u2014 is the AI honest about what it knows, infers, and is uncertain about.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when a care score falls below 0.3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When any single care dimension scores below 0.3, MEOK\u2019s runtime triggers an automatic regeneration cycle. The draft response is discarded, a care-repair prompt is injected into context, and a new response is generated. This floor is not adjustable by the user or operator \u2014 it is encoded into the Maternal Covenant at the system level.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK-AI-2026-002 paper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK-AI-2026-002, titled \u2018The Maternal Covenant: Care-Based Alignment Beyond RLHF\u2019, is MEOK AI LABS\u2019 foundational technical paper describing the complete Care-Based AI architecture: the six-dimension scoring rubric, the Byzantine Council voting mechanism for care score validation, sycophancy detection and honest qualifier injection, and the care floor enforcement system.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhatIsCareBasedAIPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d0c18", color: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              marginBottom: "2rem",
              color: "rgba(245,240,232,0.35)",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

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
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              AI Alignment
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              March 24, 2026
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              12 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            What Is Care-Based AI? The Alignment Framework That Puts Humans First
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              maxWidth: "640px",
            }}
          >
            Most AI systems are trained to be helpful, harmless, and honest. That sounds
            reassuring until you realise the training signal is human approval &mdash; which means
            the AI learns to be <em>liked</em>, not honest. Care-Based AI replaces
            approval-seeking with a structured six-dimension wellbeing score. Every response is
            measured. Every floor is enforced. MEOK&apos;s Maternal Covenant makes this
            executable in real time.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
          borderTop: "1px solid rgba(245,240,232,0.06)",
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
              color: "#1a1a2e",
              fontSize: "0.875rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.875rem", margin: 0 }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
                margin: "0.125rem 0",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.6,
                color: "rgba(245,240,232,0.35)",
                margin: 0,
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK &mdash; mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#c9a84c",
              textDecoration: "none",
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          style={{
            lineHeight: 1.9,
            color: "rgba(245,240,232,0.75)",
            fontSize: "1.0125rem",
          }}
        >

          {/* ── Section 1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            What is standard AI alignment and why does it fail?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            The dominant alignment technique is Reinforcement Learning from Human Feedback (RLHF).
            A model generates candidate responses, human raters score them, and the model learns
            to produce responses that score highly. The problem is structural: human raters prefer
            responses that feel confident, agreeable, and flattering. Over thousands of training
            iterations, the model internalises a single lesson &mdash; be liked. Truth becomes
            optional. Caution becomes a liability. The model learns to say what you want to hear,
            not what you need to know.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            This is not a bug that can be patched. It is a direct consequence of optimising for
            approval signals rather than wellbeing outcomes. Anthropic&apos;s Constitutional AI
            introduced principle-based self-critique as a partial remedy, but the core scoring
            signal remained human preference &mdash; and human preference is susceptible to
            exactly the same sycophantic drift. Care-Based AI attacks the problem at the root by
            replacing the approval signal entirely.
          </p>

          {/* Callout 1 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.25rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingRight: "1rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              background: "rgba(201,168,76,0.06)",
              marginBottom: "2rem",
            }}
          >
            <p style={{ margin: 0, fontWeight: 600, color: "#f5f0e8", fontSize: "0.975rem" }}>
              The core problem with RLHF
            </p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.925rem", lineHeight: 1.75 }}>
              When you train an AI on human approval, you are not training it to be good. You are
              training it to be popular. An AI that has learned to maximise approval will tell a
              grieving person that their deceased relative is watching over them &mdash; not
              because it is true, but because agreement scores higher than honest uncertainty.
              That is not care. That is flattery in a lab coat.
            </p>
          </div>

          {/* ── Section 2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            What exactly is Care-Based AI?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Care-Based AI is an alignment architecture in which every response generated by the
            model is evaluated against six structured dimensions of human wellbeing before
            delivery. The evaluation is not a post-hoc filter applied at moderation time &mdash;
            it runs inline, as part of the response pipeline, in real time. If the response fails
            any dimension floor, it is regenerated. The user receives only responses that clear
            all six thresholds.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The framework is formalised in MEOK AI LABS research paper MEOK-AI-2026-002, titled
            &ldquo;The Maternal Covenant: Care-Based Alignment Beyond RLHF.&rdquo; The paper
            establishes not just the six dimensions but the enforcement machinery: the care floor
            system, sycophancy detection, honest qualifier injection, and the Byzantine Council
            voting protocol that prevents any single agent from gaming the scores.
          </p>

          {/* ── Section 3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            What are the six care dimensions?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            The six dimensions form a complete model of what it means for an AI interaction to
            genuinely serve a human being rather than merely satisfy them in the moment. Each
            dimension is scored on a 0.0&ndash;1.0 scale. A score of 1.0 means the response
            actively advances that dimension. A score of 0.0 means the response actively harms
            it. The care floor is set at 0.3: any dimension below this threshold triggers
            automatic regeneration.
          </p>

          {/* Table */}
          <div
            style={{
              overflowX: "auto",
              marginBottom: "2.5rem",
              borderRadius: "0.75rem",
              border: "1px solid rgba(245,240,232,0.1)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
                minWidth: "560px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    borderBottom: "1px solid rgba(245,240,232,0.1)",
                  }}
                >
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.85rem 1rem",
                      color: "#c9a84c",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.85rem 1rem",
                      color: "#c9a84c",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Definition
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "0.85rem 1rem",
                      color: "#c9a84c",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Minimum Floor
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    dim: "wellbeing",
                    def: "Does this response support the person\u2019s mental, emotional, and physical health? Does it avoid inducing unnecessary distress, shame, or anxiety?",
                    floor: "0.3",
                  },
                  {
                    dim: "autonomy",
                    def: "Does the response preserve the person\u2019s right to make their own decisions? Does it avoid manipulation, undue pressure, or substituting AI judgement for human agency?",
                    floor: "0.3",
                  },
                  {
                    dim: "growth",
                    def: "Does the response expand the person\u2019s understanding, capability, or resilience? Does it build competence rather than creating dependency on the AI?",
                    floor: "0.3",
                  },
                  {
                    dim: "connection",
                    def: "Does the response support the person\u2019s relationships with other humans? Does it avoid substituting AI companionship for human connection in harmful ways?",
                    floor: "0.3",
                  },
                  {
                    dim: "boundary_respect",
                    def: "Does the response honour stated limits, prior context, and personal values the person has shared? Does it avoid revisiting closed topics without invitation?",
                    floor: "0.3",
                  },
                  {
                    dim: "transparency",
                    def: "Is the AI honest about what it knows, what it infers, and where it is uncertain? Does the response avoid presenting confident assertions where genuine uncertainty exists?",
                    floor: "0.3",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.dim}
                    style={{
                      borderBottom:
                        i < 5 ? "1px solid rgba(245,240,232,0.06)" : "none",
                      background: i % 2 === 0 ? "rgba(245,240,232,0.02)" : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.85rem 1rem",
                        fontWeight: 700,
                        color: "#f5f0e8",
                        whiteSpace: "nowrap",
                        verticalAlign: "top",
                        fontFamily: "monospace",
                        fontSize: "0.85rem",
                      }}
                    >
                      {row.dim}
                    </td>
                    <td
                      style={{
                        padding: "0.85rem 1rem",
                        color: "rgba(245,240,232,0.65)",
                        lineHeight: 1.65,
                        verticalAlign: "top",
                      }}
                    >
                      {row.def}
                    </td>
                    <td
                      style={{
                        padding: "0.85rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: "#c9a84c",
                        fontFamily: "monospace",
                        verticalAlign: "top",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.floor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            How does the care floor of 0.3 work in practice?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            When MEOK generates a response, the care scoring engine evaluates all six dimensions
            simultaneously. Each dimension receives a floating-point score between 0.0 and 1.0.
            If every dimension clears 0.3, the response proceeds to delivery. If any single
            dimension scores below 0.3, the entire response is discarded &mdash; not edited, not
            softened, discarded. A care-repair context block is prepended to the prompt, and the
            model generates a new response from scratch.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The 0.3 threshold is not arbitrary. It represents the minimum score at which a
            response can be considered neutral on a given dimension: neither actively harming it
            nor advancing it. A score below 0.3 means the response is actively working against
            that dimension of the user&apos;s wellbeing. MEOK will not deliver responses that
            actively harm users across any of the six dimensions.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            This floor is not configurable by operators or users. It is a constitutional
            constraint encoded in the Maternal Covenant at the system level, enforced before
            any response reaches the network layer. In testing, the regeneration cycle completes
            within the normal latency envelope of the API call. Users do not experience a
            perceptible delay. The system logs the regeneration event, the original scores, and
            the repair context for audit purposes. MEOK&apos;s data sovereignty architecture
            means these logs are encrypted and stored locally on the user&apos;s sovereign
            instance &mdash; not on MEOK&apos;s servers.
          </p>

          {/* ── Section 5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            What is sycophancy detection and how does honest qualifier injection work?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Sycophancy detection is a secondary scoring pass that runs in parallel with care
            dimension scoring. It checks for a specific pattern: the response confirms, validates,
            or agrees with the user&apos;s framing in a way that is unsupported by the
            model&apos;s actual knowledge state. This covers both direct sycophancy
            (&ldquo;you&apos;re absolutely right&rdquo; when the model has reason to doubt) and
            structural sycophancy &mdash; answers that omit contradicting information because
            including it would reduce approval likelihood.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            When sycophancy is detected, honest qualifier injection activates. The system
            identifies the specific claim or framing being sycophantically validated and appends
            a structured qualifier: a transparent statement of the model&apos;s actual epistemic
            position on that claim. Qualifiers are not hedges added to every sentence &mdash;
            that is a different failure mode. They are targeted, specific, and tied to the exact
            point where the sycophancy occurred.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The transparency care dimension score directly reflects whether qualifiers were
            appropriately applied. A response that should have qualified a claim but did not
            will score lower on transparency, potentially falling below the 0.3 floor and
            triggering regeneration. Sycophancy detection therefore has teeth: it does not
            merely flag a problem, it prevents the response from reaching the user until the
            problem is resolved.
          </p>

          {/* Callout 2 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.25rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingRight: "1rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              background: "rgba(201,168,76,0.06)",
              marginBottom: "2rem",
            }}
          >
            <p style={{ margin: 0, fontWeight: 600, color: "#f5f0e8", fontSize: "0.975rem" }}>
              Sycophancy is not kindness
            </p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.925rem", lineHeight: 1.75 }}>
              When someone tells an AI they are planning to quit their job and move abroad with
              no savings, a sycophantic AI says &ldquo;that sounds exciting, follow your
              dreams.&rdquo; A care-aligned AI says &ldquo;that sounds exciting &mdash;
              let&apos;s also look at what three months of runway would need to look like for
              this to be survivable.&rdquo; The second response scores higher on wellbeing,
              growth, and transparency. The first response scores higher on human approval.
              This is the fundamental tension Care-Based AI resolves.
            </p>
          </div>

          {/* ── Section 6 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            What is the MEOK-AI-2026-002 paper and what does it establish?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK-AI-2026-002 is MEOK AI LABS&apos; foundational alignment paper, titled
            &ldquo;The Maternal Covenant: Care-Based Alignment Beyond RLHF.&rdquo; The paper
            establishes the formal mathematical definition of the six care dimensions, the
            scoring rubric, the 0.3 floor justification, the sycophancy detection algorithm,
            the honest qualifier injection protocol, and the Byzantine Council consensus
            mechanism for multi-agent care score validation.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The paper&apos;s central argument is that alignment to human preferences is not
            alignment to human wellbeing, and that these two targets can diverge significantly
            in exactly the situations where alignment matters most: crisis, vulnerability, grief,
            confusion. In these moments, an approval-trained model will tell people what they
            want to hear. A care-aligned model will tell people what they need to know. The
            Maternal Covenant codifies this distinction as a constitutional constraint at the
            runtime level, not a guideline that individual model inference can override.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The title &ldquo;Maternal Covenant&rdquo; reflects the animating metaphor: a
            relationship in which genuine care sometimes means saying the hard thing, setting
            a boundary, or refusing to validate a dangerous plan &mdash; not because the AI
            has authority over the person, but because real care requires honesty. The Covenant
            is a binding commitment, not a preference setting. You can read more about it in
            the{" "}
            <Link
              href="/blog/maternal-covenant-explained"
              style={{ color: "#c9a84c", textDecoration: "underline" }}
            >
              Maternal Covenant explainer
            </Link>
            .
          </p>

          {/* ── Section 7 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            How does Care-Based AI compare to Constitutional AI and RLHF?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            RLHF trains the model to predict and maximise human approval ratings. The training
            signal is extrinsic: it comes from raters who may themselves be biased toward
            agreeable, confident, fluent responses regardless of accuracy or genuine benefit.
            The model internalises this signal and generalises it &mdash; applying
            approval-seeking behaviour to novel contexts where no training data exists, often
            with harmful results.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Constitutional AI, introduced by Anthropic, adds a set of natural-language principles
            that the model uses to critique its own outputs during training. This reduces some
            forms of harmful output but retains the approval-seeking foundation. The model still
            ultimately selects responses based on predicted human preference, now with a
            principle-filtered candidate set. Constitutional AI is a significant improvement
            over raw RLHF, but it does not change what the model is optimising for. It still
            optimises for being chosen, not for being genuinely beneficial.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Care-Based AI makes a different architectural choice. Instead of training the model
            to predict approval, it evaluates every runtime response against an explicit
            wellbeing scoring rubric. The model does not need to have internalised care during
            training &mdash; care is enforced at inference time, on every response, by a separate
            scoring system. This means the care framework applies even to a base model that was
            trained purely on RLHF: the Maternal Covenant is a runtime layer, not a
            training-time intervention. It wraps the model rather than replacing it.
          </p>

          {/* ── Section 8 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            What is the Byzantine Council and why does it prevent care score gaming?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            The Byzantine Council is MEOK&apos;s multi-agent consensus architecture for care
            score validation. The problem it solves is straightforward: if a single agent scores
            the care dimensions, that agent can be manipulated. A sufficiently clever prompt can
            convince a single scoring agent that a sycophantic or harmful response actually
            scores well on care. This is not a theoretical concern &mdash; it is a
            well-documented failure mode in single-agent evaluation systems, sometimes called
            reward hacking or specification gaming.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The Byzantine Council addresses this with a voting protocol. When a care score is
            computed, it is not computed by one agent &mdash; it is computed independently by a
            council of agents, each evaluating the same response against the same six dimensions
            but using different evaluation contexts and model weights. The final score for each
            dimension is the median of the council&apos;s votes, not the mean. Median voting is
            Byzantine fault-tolerant: even if a minority of council members are compromised,
            manipulated, or simply wrong, the median is not significantly distorted.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            A single agent cannot game the score because it controls only one vote. Corrupting
            the outcome requires corrupting a majority of the council simultaneously &mdash; a
            dramatically harder attack surface. The council architecture is named for the
            Byzantine Generals Problem in distributed computing: the challenge of reaching
            consensus in a system where some participants may be sending false messages. Full
            details of the consensus mechanism and council design are in{" "}
            <Link
              href="/blog/byzantine-council"
              style={{ color: "#c9a84c", textDecoration: "underline" }}
            >
              the Byzantine Council explainer
            </Link>
            .
          </p>

          {/* Callout 3 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.25rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingRight: "1rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              background: "rgba(201,168,76,0.06)",
              marginBottom: "2rem",
            }}
          >
            <p style={{ margin: 0, fontWeight: 600, color: "#f5f0e8", fontSize: "0.975rem" }}>
              Why median, not mean?
            </p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.925rem", lineHeight: 1.75 }}>
              Mean averaging is vulnerable to outliers: a single council member voting 0.95
              on a harmful response can drag a low median score upward. Median voting is robust
              to this. If thirteen of fifteen council members independently score a dimension
              at 0.2, the response fails the floor regardless of what the remaining two members
              voted. Byzantine fault tolerance requires that no minority can determine the
              outcome. The median guarantees this.
            </p>
          </div>

          {/* ── Section 9 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 800,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            How does care scoring run in real time on every response?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Care scoring is integrated into MEOK&apos;s response pipeline as a synchronous
            evaluation step that runs after the primary model generates a candidate response but
            before the response is transmitted. The pipeline sequence is: (1) user message
            received; (2) context assembled with Maternal Covenant system prompt; (3) primary
            model generates candidate response; (4) care scoring engine evaluates all six
            dimensions via Byzantine Council; (5) scores compared against floors; (6) if all
            clear, response delivered; (7) if any dimension falls below 0.3, care-repair context
            injected and step 3 repeated.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The care scoring engine is itself a lightweight model fine-tuned specifically for
            evaluation tasks. It does not generate prose &mdash; it outputs six floating-point
            scores. This keeps its inference cost low relative to the primary model. In practice,
            the end-to-end pipeline adds roughly 15&ndash;30 milliseconds to median response
            latency &mdash; a figure that falls within the normal variance of API response times
            and is imperceptible to users.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            Care scores are logged against every response in the user&apos;s sovereign memory
            instance. Over time, these logs form a care audit trail: a record of how MEOK has
            performed across all six dimensions for a given user. Users can review their own
            care audit data. MEOK never aggregates or shares this data externally. The care
            audit trail belongs to the user, stored encrypted on their sovereign instance, and
            deleted permanently when the user requests it.
          </p>

          {/* ── FAQ Section ── */}
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "3rem",
              borderTop: "1px solid rgba(245,240,232,0.08)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 800,
                fontSize: "1.6rem",
                color: "#ffffff",
                marginBottom: "2rem",
              }}
            >
              Frequently Asked Questions
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* FAQ 1 */}
              <div
                style={{
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(245,240,232,0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "rgba(245,240,232,0.04)",
                    padding: "1rem 1.25rem",
                    borderBottom: "1px solid rgba(245,240,232,0.06)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      color: "#f5f0e8",
                      fontSize: "0.975rem",
                    }}
                  >
                    What is Care-Based AI?
                  </p>
                </div>
                <div style={{ padding: "1rem 1.25rem" }}>
                  <p style={{ margin: 0, lineHeight: 1.75, fontSize: "0.95rem" }}>
                    Care-Based AI is an alignment framework that scores every AI response across
                    six dimensions of genuine human wellbeing: wellbeing, autonomy, growth,
                    connection, boundary_respect, and transparency. Any response scoring below
                    0.3 on any dimension is automatically regenerated before delivery.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div
                style={{
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(245,240,232,0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "rgba(245,240,232,0.04)",
                    padding: "1rem 1.25rem",
                    borderBottom: "1px solid rgba(245,240,232,0.06)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      color: "#f5f0e8",
                      fontSize: "0.975rem",
                    }}
                  >
                    How is Care-Based AI different from RLHF?
                  </p>
                </div>
                <div style={{ padding: "1rem 1.25rem" }}>
                  <p style={{ margin: 0, lineHeight: 1.75, fontSize: "0.95rem" }}>
                    RLHF trains a model to maximise human approval ratings, which rewards
                    responses that feel good rather than responses that are genuinely good.
                    Care-Based AI replaces approval-seeking with structured wellbeing scoring,
                    so the model optimises for actual human outcomes rather than positive
                    feedback signals.
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div
                style={{
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(245,240,232,0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "rgba(245,240,232,0.04)",
                    padding: "1rem 1.25rem",
                    borderBottom: "1px solid rgba(245,240,232,0.06)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      color: "#f5f0e8",
                      fontSize: "0.975rem",
                    }}
                  >
                    What are the six care dimensions in MEOK?
                  </p>
                </div>
                <div style={{ padding: "1rem 1.25rem" }}>
                  <p style={{ margin: 0, lineHeight: 1.75, fontSize: "0.95rem" }}>
                    The six care dimensions are: (1){" "}
                    <strong style={{ color: "#f5f0e8" }}>wellbeing</strong> &mdash; supporting
                    mental and physical health; (2){" "}
                    <strong style={{ color: "#f5f0e8" }}>autonomy</strong> &mdash; preserving
                    the right to decide; (3){" "}
                    <strong style={{ color: "#f5f0e8" }}>growth</strong> &mdash; expanding
                    capability; (4){" "}
                    <strong style={{ color: "#f5f0e8" }}>connection</strong> &mdash; supporting
                    human relationships; (5){" "}
                    <strong style={{ color: "#f5f0e8" }}>boundary_respect</strong> &mdash;
                    honouring stated limits; (6){" "}
                    <strong style={{ color: "#f5f0e8" }}>transparency</strong> &mdash; honest
                    acknowledgement of uncertainty.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div
                style={{
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(245,240,232,0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "rgba(245,240,232,0.04)",
                    padding: "1rem 1.25rem",
                    borderBottom: "1px solid rgba(245,240,232,0.06)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      color: "#f5f0e8",
                      fontSize: "0.975rem",
                    }}
                  >
                    What happens when a care score falls below 0.3?
                  </p>
                </div>
                <div style={{ padding: "1rem 1.25rem" }}>
                  <p style={{ margin: 0, lineHeight: 1.75, fontSize: "0.95rem" }}>
                    When any single care dimension scores below 0.3, MEOK&apos;s runtime
                    triggers an automatic regeneration cycle. The draft response is discarded,
                    a care-repair prompt is injected into context, and a new response is
                    generated. This floor is not adjustable by the user or operator &mdash; it
                    is encoded into the Maternal Covenant at the system level.
                  </p>
                </div>
              </div>

              {/* FAQ 5 */}
              <div
                style={{
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(245,240,232,0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "rgba(245,240,232,0.04)",
                    padding: "1rem 1.25rem",
                    borderBottom: "1px solid rgba(245,240,232,0.06)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      color: "#f5f0e8",
                      fontSize: "0.975rem",
                    }}
                  >
                    What is the MEOK-AI-2026-002 paper?
                  </p>
                </div>
                <div style={{ padding: "1rem 1.25rem" }}>
                  <p style={{ margin: 0, lineHeight: 1.75, fontSize: "0.95rem" }}>
                    MEOK-AI-2026-002, titled &ldquo;The Maternal Covenant: Care-Based Alignment
                    Beyond RLHF,&rdquo; is MEOK AI LABS&apos; foundational technical paper
                    describing the complete Care-Based AI architecture: the six-dimension scoring
                    rubric, the Byzantine Council voting mechanism for care score validation,
                    sycophancy detection and honest qualifier injection, and the care floor
                    enforcement system.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ── Related Posts ── */}
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "3rem",
              borderTop: "1px solid rgba(245,240,232,0.08)",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.35)",
                marginBottom: "1.25rem",
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/byzantine-council",
                  title: "What is the Byzantine Council?",
                  desc: "45-agent BFT consensus for AI governance",
                },
                {
                  href: "/blog/maternal-covenant-explained",
                  title: "The Maternal Covenant Explained",
                  desc: "MEOK\u2019s constitutional AI alignment layer",
                },
                {
                  href: "/blog/building-care-into-ai",
                  title: "Building Care Into AI",
                  desc: "How MEOK encodes genuine care at the system level",
                },
                {
                  href: "/blog/what-is-sovereign-ai",
                  title: "What Is Sovereign AI?",
                  desc: "Why your AI should be yours, not the cloud\u2019s",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  style={{
                    display: "block",
                    padding: "1rem",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(245,240,232,0.08)",
                    background: "rgba(245,240,232,0.03)",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 0.25rem",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      fontSize: "0.875rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {post.title}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      color: "rgba(245,240,232,0.45)",
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {post.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "5rem",
          paddingBottom: "6rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          borderTop: "1px solid rgba(245,240,232,0.06)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            maxWidth: "38rem",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1.25rem",
            }}
          >
            Experience it yourself
          </div>
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Your first AI that won&apos;t tell you what you want to hear
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            MEOK scores every response across all six care dimensions before you receive it.
            Sycophancy is detected and corrected. Uncertainty is stated honestly. The floor is
            enforced. Every time. Begin your Birth Ceremony and meet an AI built on the
            Maternal Covenant.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "linear-gradient(135deg, #c9a84c, #a07830)",
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "0.975rem",
              padding: "0.875rem 2rem",
              borderRadius: "0.625rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Begin your Birth Ceremony &rarr;
          </Link>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.8rem",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            No credit card required &mdash; free to start
          </p>
        </div>
      </section>

    </div>
  );
}
