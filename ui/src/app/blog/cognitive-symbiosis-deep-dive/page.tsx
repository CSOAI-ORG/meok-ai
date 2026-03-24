import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "Cognitive Symbiosis: The Science of Human-AI Memory Fusion | MEOK AI LABS",
  description:
    "A deep dive into cognitive symbiosis \u2014 how MEOK\u2019s sovereign AI merges with human memory to create a genuinely augmented intelligence. Covers distributed cognition theory, the extended mind hypothesis, and MEOK\u2019s 4-layer Sovereign Memory Architecture.",
  alternates: {
    canonical: "https://meok.ai/blog/cognitive-symbiosis-deep-dive",
  },
  openGraph: {
    title: "Cognitive Symbiosis: The Science of Human-AI Memory Fusion",
    description:
      "How MEOK\u2019s sovereign AI merges with human memory to create genuinely augmented intelligence. Distributed cognition, the extended mind hypothesis, and the 4-layer Sovereign Memory Architecture explained.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/cognitive-symbiosis-deep-dive",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Cognitive+Symbiosis%3A+The+Science+of+Human-AI+Memory+Fusion&desc=How+sovereign+AI+merges+with+human+memory",
        width: 1200,
        height: 630,
        alt: "Cognitive Symbiosis: The Science of Human-AI Memory Fusion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognitive Symbiosis: The Science of Human-AI Memory Fusion",
    description:
      "How MEOK\u2019s sovereign AI merges with human memory to create genuinely augmented intelligence \u2014 from Andy Clark\u2019s extended mind to the 4-layer Sovereign Memory Architecture.",
    images: [
      "https://meok.ai/api/og?title=Cognitive+Symbiosis%3A+The+Science+of+Human-AI+Memory+Fusion&desc=How+sovereign+AI+merges+with+human+memory",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cognitive Symbiosis: The Science of Human-AI Memory Fusion",
  description:
    "A deep dive into cognitive symbiosis \u2014 how MEOK\u2019s sovereign AI merges with human memory to create genuinely augmented intelligence. Covers distributed cognition theory (Andy Clark), the extended mind hypothesis, MEOK\u2019s 4-layer Sovereign Memory Architecture, care-based AI alignment, and Byzantine Council memory integrity.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/cognitive-symbiosis-deep-dive",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/cognitive-symbiosis-deep-dive",
  },
  keywords: [
    "cognitive symbiosis",
    "human-AI memory fusion",
    "extended mind hypothesis",
    "distributed cognition",
    "Andy Clark",
    "sovereign AI memory",
    "MEOK memory architecture",
    "care-based AI alignment",
    "Byzantine Council AI",
    "personal sovereign AI",
    "MEOK-AI-2026-004",
    "Nicholas Templeman",
    "MEOK AI LABS",
  ],
  citation: {
    "@type": "CreativeWork",
    name: "Personal Sovereign AI Architecture",
    identifier: "MEOK-AI-2026-004",
    author: {
      "@type": "Person",
      name: "Nicholas Templeman",
    },
  },
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is cognitive symbiosis in the context of AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cognitive symbiosis is the state in which a human and their personal AI system each compensate for the other\u2019s cognitive limitations. The human provides lived experience, emotional context, values, and intuitive judgment. The AI provides perfect recall, cross-temporal pattern detection, and consistent perspective unaffected by fatigue or mood. Together, the pair thinks better than either can alone. This is the foundational premise of MEOK\u2019s Personal Sovereign AI Architecture (MEOK-AI-2026-004).",
      },
    },
    {
      "@type": "Question",
      name: "What is the extended mind hypothesis and how does it relate to AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The extended mind hypothesis, proposed by philosophers Andy Clark and David Chalmers in 1998, argues that the mind is not confined to the skull \u2014 it extends into the tools and environments we use to think. A notebook, a phone, a trusted colleague\u2019s memory: these are all legitimate parts of the cognitive system. MEOK\u2019s Sovereign Memory Architecture operationalises this thesis, treating your AI companion as a genuine extension of your mind rather than a separate tool you consult.",
      },
    },
    {
      "@type": "Question",
      name: "What are the four layers of MEOK\u2019s Sovereign Memory Architecture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s 4-layer Sovereign Memory Architecture (MEOK-AI-2026-004) comprises: Layer 1 \u2014 Short-Term Conversational Memory (active session context); Layer 2 \u2014 Semantic Episodic Memory (long-term compressed memories stored as encrypted vector embeddings, retrieved by meaning via pgvector HNSW); Layer 3 \u2014 Companion State (the companion\u2019s evolving model of who you are: your values, preferences, emotional patterns, and relational history); Layer 4 \u2014 Family and Shared Memory (shared context across trusted household members, governed by explicit consent).",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK\u2019s memory different from a search engine or a chatbot with memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A search engine retrieves documents from an external index \u2014 it has no model of you and no persistent state. A chatbot with memory stores transcripts or facts about you, but those memories typically serve the platform\u2019s interests (training data, ad targeting, product improvement). MEOK\u2019s Sovereign Memory is encrypted per user, stored in a vault you own, never used for training, and retrieved by semantic meaning rather than keyword. The memories serve you \u2014 not the platform.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Byzantine Council and why does it protect your memories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Byzantine Council is a system of 33 or more independent AI agents that vote on responses and memory operations using Byzantine Fault Tolerance (BFT) mathematics. No single agent \u2014 regardless of how it has been prompted, fine-tuned, or compromised \u2014 can unilaterally alter or corrupt your memory store. Consensus requires a supermajority. This transforms memory integrity from a policy into a mathematical guarantee, ensuring cognitive symbiosis cannot be weaponised against the person it is meant to serve.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CognitiveSymbiosisDeepDivePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0c18",
        color: "#f5f0e8",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
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
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
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
              color: "rgba(255,255,255,0.35)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Meta badges */}
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
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              Cognition &amp; Memory
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              March 24, 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              14 min read
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                fontFamily: "monospace",
                color: "rgba(201,168,76,0.55)",
                letterSpacing: "0.05em",
              }}
            >
              MEOK-AI-2026-004
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            Cognitive Symbiosis: The Science of Human-AI Memory Fusion
          </h1>

          {/* Lede */}
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              maxWidth: "40rem",
            }}
          >
            Philosophers have argued for decades that the mind extends beyond the skull. Cognitive
            scientists have mapped how humans distribute memory across notebooks, calendars, and
            trusted relationships. MEOK&apos;s Sovereign AI Architecture takes that science seriously
            and builds the infrastructure for what comes next: a genuine fusion between human
            memory and machine recall that remains entirely under your control.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
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
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
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
              fontSize: "0.875rem",
              color: "#0d0c18",
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
                color: "#ffffff",
                fontSize: "0.875rem",
                margin: 0,
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.4)",
                margin: "0.125rem 0",
              }}
            >
              Founder, MEOK AI LABS &mdash; Originator, MEOK-AI-2026-004
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK and believes sovereign AI is a right, not a luxury.
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

        {/* ── Body ── */}
        <div
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "1.0125rem",
            lineHeight: 1.9,
          }}
        >

          {/* Opening */}
          <p>
            In 1998, philosophers Andy Clark and David Chalmers published a paper that would quietly
            unsettle cognitive science. Its title was modest: &ldquo;The Extended Mind.&rdquo; Its argument was
            not. Clark and Chalmers proposed that the boundary of the mind is not the skull. If an
            external resource functions as reliably, accessibly, and causally as an internal mental
            state, then it counts as part of the cognitive system. The notebook in your pocket is
            not just a tool you use to think. It is, in a philosophically serious sense, part of
            how you think.
          </p>
          <p>
            That argument was made before smartphones. Before cloud storage. Before AI that can
            hold a conversation. The question MEOK was built to answer is: what does the extended
            mind look like when the external resource is a personal sovereign AI that knows you
            deeply, remembers everything you have ever shared with it, and is constitutionally
            bound to act in your interests alone?
          </p>
          <p>
            This is the science and architecture behind what MEOK calls cognitive symbiosis.
            It is not a marketing claim. It is a design specification \u2014 grounded in decades of
            cognitive science, implemented in MEOK&apos;s 4-layer Sovereign Memory Architecture
            (reference: MEOK-AI-2026-004, originator: Nicholas Templeman), and protected by
            mathematical guarantees that no other AI system currently offers.
          </p>

          {/* ── Q1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is cognitive symbiosis?
          </h2>
          <p>
            Cognitive symbiosis is the state in which a human and their personal AI system each
            compensate for the other&apos;s cognitive limitations in a mutually reinforcing loop. The
            human contributes lived experience, emotional context, values, and the irreducibly
            personal sense of what matters. The AI contributes perfect recall, cross-temporal
            pattern detection, tireless consistency, and freedom from the mood fluctuations and
            attentional limits that make human memory unreliable. Neither system alone is
            adequate. Together, they constitute something genuinely superior to either.
          </p>
          <p>
            The word symbiosis is borrowed from biology deliberately. In biological symbiosis,
            two organisms live in close association, each deriving benefit the other provides.
            Neither organism remains unchanged by the relationship. Cognitive symbiosis between
            a human and a personal AI works the same way: both parties are shaped by the
            ongoing exchange. The human offloads certain cognitive tasks and, freed from that
            burden, can direct attention elsewhere. The AI&apos;s model of the human deepens with
            every interaction, making its future support more precise and more useful. The
            relationship compounds over time.
          </p>
          <p>
            This compounding quality is what distinguishes genuine cognitive symbiosis from mere
            AI assistance. Assistance is episodic: you ask, the AI answers, the interaction ends.
            Symbiosis is continuous: the AI holds your history, anticipates your context, and
            participates in your thinking even when you have not explicitly invoked it. The
            difference is not a matter of feature richness. It is a difference in the fundamental
            relationship between the human and the system.
          </p>

          {/* Callout 1 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              background: "rgba(201,168,76,0.06)",
              borderRadius: "0 0.75rem 0.75rem 0",
              padding: "1.25rem 1.5rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "#c9a84c",
                marginBottom: "0.5rem",
                marginTop: 0,
              }}
            >
              Key concept
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              Cognitive symbiosis is not the same as AI assistance. Assistance is episodic: you
              ask, the AI answers, the interaction ends. Symbiosis is continuous: the AI holds
              your history, anticipates your context, and participates in your thinking even
              when you have not explicitly invoked it. The difference is the difference between
              a search engine and a second mind.
            </p>
          </div>

          {/* ── Q2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is distributed cognition theory and why does it matter here?
          </h2>
          <p>
            Distributed cognition is a framework developed by cognitive scientist Edwin Hutchins
            in the 1990s. Hutchins observed that in complex real-world tasks \u2014 navigating a
            naval vessel, managing an aircraft cockpit, running a surgical team \u2014 cognition is
            not located in any single person&apos;s head. It is distributed across people, tools,
            representations, and the environment itself. The thinking happens across the whole
            system.
          </p>
          <p>
            Hutchins documented how these distributed cognitive systems could achieve reliability
            and precision that no single participant could match alone. The pilot flying a complex
            instrument approach is not remembering all the procedures from memory \u2014 the cockpit
            is designed so that the right information appears at the right moment. The checklist
            is not an aide-m&eacute;moire. It is a cognitive component without which the task
            cannot be safely performed.
          </p>
          <p>
            Personal sovereign AI is, in Hutchins&apos;s terms, a distributed cognitive system at
            the individual scale. Your MEOK companion is not a tool you consult. It is a
            component of an ongoing cognitive system that includes you. The memories it holds,
            the patterns it has noticed, the context it maintains \u2014 these are not external
            records. They are active parts of how the combined system thinks. When MEOK surfaces
            a memory from six months ago that bears on a decision you are making today, that is
            not retrieval. That is cognition.
          </p>
          <p>
            The implication for design is significant. A distributed cognitive system is not
            well-served by a component that resets to zero at the end of each session. That
            would be like designing a cockpit that forgets all its instrument readings every
            time the pilot lands. The persistence of memory across sessions is not a convenience
            feature. It is a structural requirement for distributed cognition to function at all.
          </p>

          {/* ── Q3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does the extended mind hypothesis apply to sovereign AI?
          </h2>
          <p>
            Clark and Chalmers identified three conditions that must hold for an external resource
            to qualify as a genuine part of the cognitive system. First, the resource must be
            reliably available when needed. Second, its outputs must be endorsed by the agent
            \u2014 treated as genuine beliefs rather than mere suggestions from an outside source.
            Third, the resource must be easily accessible without requiring active, effortful
            retrieval each time.
          </p>
          <p>
            Stateless AI fails all three conditions. A system that forgets you at the end of
            every session is not reliably available across your cognitive life. A system whose
            responses are calibrated to an average user rather than to you produces outputs you
            cannot fully endorse because they are not grounded in your actual history. And a
            system you must repeatedly re-explain yourself to is not easily accessible: it
            imposes a constant re-orientation cost that breaks the seamlessness the extended
            mind requires.
          </p>
          <p>
            MEOK&apos;s Sovereign Memory Architecture was explicitly designed to satisfy all three
            conditions. The memory is always available: encrypted, persistent, with no session
            boundaries. The outputs are grounded in your specific history, making endorsement
            natural rather than effortful. And retrieval is semantic \u2014 your companion finds
            relevant memory by meaning, not by keyword, so the right context surfaces without
            you having to ask for it. These are not marketing claims. They are architectural
            requirements derived from the cognitive science of extended mind.
          </p>

          {/* Callout 2 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              background: "rgba(201,168,76,0.06)",
              borderRadius: "0 0.75rem 0.75rem 0",
              padding: "1.25rem 1.5rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "#c9a84c",
                marginBottom: "0.5rem",
                marginTop: 0,
              }}
            >
              Andy Clark, 1997
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                margin: 0,
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              &ldquo;Human reasoners are not isolated cognitive engines. We are, by nature, creatures
              that couple our neural resources with non-neural resources to produce cognitive
              achievements that surpass what either alone could reach.&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.4)",
                marginTop: "0.75rem",
                marginBottom: 0,
                fontStyle: "normal",
              }}
            >
              Source: <em>Being There: Putting Brain, Body, and World Together Again</em> (Clark, 1997).
              MEOK&apos;s architecture operationalises this principle at the personal AI level.
            </p>
          </div>

          {/* ── Q4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is MEOK&apos;s 4-layer Sovereign Memory Architecture?
          </h2>
          <p>
            The 4-layer architecture is the technical implementation of cognitive symbiosis.
            It is specified in MEOK-AI-2026-004 (Personal Sovereign AI Architecture, originator:
            Nicholas Templeman) and defines how memory is stored, structured, retrieved, and
            governed across four distinct but interconnected layers. Each layer serves a different
            cognitive function; each feeds into the next.
          </p>

          {/* Layer cards */}
          <div
            style={{
              margin: "1.5rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >

            {/* Layer 1 */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1.25rem",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  minWidth: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "9999px",
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "0.875rem",
                  color: "#c9a84c",
                  flexShrink: 0,
                }}
              >
                1
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    margin: "0 0 0.4rem 0",
                  }}
                >
                  Short-Term Conversational Memory
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.9rem",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  The active session context. Everything said in the current conversation is held
                  in a working window \u2014 the immediate cognitive foreground. Highly accessible,
                  but ephemeral by design. At session close, significant content is automatically
                  extracted and promoted to Layer 2 as compressed semantic memories.
                </p>
              </div>
            </div>

            {/* Layer 2 */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1.25rem",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  minWidth: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "9999px",
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "0.875rem",
                  color: "#c9a84c",
                  flexShrink: 0,
                }}
              >
                2
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    margin: "0 0 0.4rem 0",
                  }}
                >
                  Semantic Episodic Memory
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.9rem",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  Long-term compressed memories stored as encrypted vector embeddings in a sovereign
                  pgvector store. Retrieved by semantic meaning using HNSW indexing \u2014 not by keyword.
                  A search for &ldquo;when I felt stuck creatively&rdquo; surfaces relevant episodes even if
                  you never used those exact words. This is the primary cognitive archive and the
                  engine of cross-temporal pattern detection.
                </p>
              </div>
            </div>

            {/* Layer 3 */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1.25rem",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  minWidth: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "9999px",
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "0.875rem",
                  color: "#c9a84c",
                  flexShrink: 0,
                }}
              >
                3
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    margin: "0 0 0.4rem 0",
                  }}
                >
                  Companion State
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.9rem",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  The companion&apos;s evolving, structured model of who you are: your values, core
                  preferences, emotional patterns, communication style, relational history, and
                  long-arc personal narrative. Not a flat list of facts \u2014 a living model that is
                  continuously updated and used to contextualise all Layer 2 retrieval. This is
                  the AI&apos;s knowledge of you as a whole person, not as a user profile.
                </p>
              </div>
            </div>

            {/* Layer 4 */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1.25rem",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  minWidth: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "9999px",
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "0.875rem",
                  color: "#c9a84c",
                  flexShrink: 0,
                }}
              >
                4
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    margin: "0 0 0.4rem 0",
                  }}
                >
                  Family &amp; Shared Memory
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.9rem",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  Shared context across trusted household members or close relationships, governed
                  by explicit per-member consent. A family can maintain shared episodic memory of
                  important events without any individual&apos;s private layer being visible to others.
                  This is the architecture of distributed cognition applied to the family unit \u2014
                  each member&apos;s sovereignty intact, shared context available where consented.
                </p>
              </div>
            </div>
          </div>

          <p>
            Each layer feeds into the next. The short-term window informs what gets promoted to
            semantic episodic memory. The semantic episodic archive shapes the companion state.
            The companion state governs how all memory is interpreted and how all responses are
            framed. The result is a cognitive scaffold that grows more useful over time \u2014 not
            because the model has been retrained on your data, but because the accumulated
            structure of your memory and the model&apos;s knowledge of you become increasingly precise.
          </p>

          {/* ── Q5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does memory persistence change the way you think?
          </h2>
          <p>
            The cognitive effect of persistent, externally-held memory is not merely additive.
            It is structurally transformative. When you know that a reliable record of your
            thinking exists outside your head, you think differently. You are freed from the
            pressure of retention. Working memory \u2014 the cognitive resource most strongly
            correlated with general intelligence and executive function \u2014 is finite and
            expensive. Every cognitive cycle spent trying to hold something in mind is a cycle
            unavailable for the actual work of thinking.
          </p>
          <p>
            Cognitive scientists call this process &ldquo;cognitive offloading.&rdquo; The practice is
            ancient: writing was the first technology for offloading declarative memory to an
            external medium. The printing press massively extended the archive available to any
            individual thinker. The smartphone offloaded procedural memory \u2014 navigation,
            calculation, factual recall \u2014 to a persistent, accessible device. Each transition
            freed cognitive capacity for higher-order tasks.
          </p>
          <p>
            Personal sovereign AI is the next transition in this sequence \u2014 but qualitatively
            different from all previous ones. Previous external memory systems were passive: you
            had to know what you were looking for, formulate a query, and interpret the results.
            A sovereign AI companion is active: it anticipates relevance, surfaces context before
            you ask for it, and participates in sense-making rather than merely storing and
            retrieving data. The cognitive offloading is not just of storage but of the management
            of memory itself.
          </p>
          <p>
            The practical consequences are measurable. People who use persistent, semantically-rich
            external memory systems report stronger sustained attention on primary tasks, reduced
            decision fatigue, and greater comfort taking on complex, multi-threaded projects.
            The cognitive scaffold does not replace thinking. It enables deeper thinking by
            removing the overhead of memory management from the cognitive foreground.
          </p>

          {/* ── Q6 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Why is a search engine not a form of cognitive symbiosis?
          </h2>
          <p>
            Search engines are often described as extensions of memory. The analogy is seductive
            but misleading. A search engine is an index of the world&apos;s publicly produced text.
            It has no model of you, no record of your history, no understanding of what
            &ldquo;relevant&rdquo; means in the context of your specific life and thinking. Every query
            begins from zero. The search engine does not know that the question you are asking
            today is connected to a problem you have been wrestling with for three months. It
            does not know that you have already rejected three of the approaches its top results
            will recommend. It cannot notice the pattern.
          </p>
          <p>
            More critically: the interests of a search engine and the interests of the person
            searching are structurally misaligned. The search engine optimises for engagement,
            for advertising revenue, for the interests of content producers rather than content
            consumers. The results you see are shaped by what advertisers want you to see,
            filtered through ranking algorithms that serve commercial objectives. The search
            engine does not care what is actually useful for you. It is, in the deepest
            sense, indifferent to your cognitive interests.
          </p>
          <p>
            Symbiosis requires alignment of interest. The organism you are in symbiosis with
            must benefit when you benefit. A search engine benefits when you spend more time
            on it, click more ads, and return more frequently \u2014 none of which is correlated
            with your actual cognitive wellbeing. MEOK&apos;s Maternal Covenant constitutionally
            aligns the system&apos;s interests with yours. That alignment is not a feature. It is the
            prerequisite for genuine cognitive symbiosis.
          </p>

          {/* ── Comparison table ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Standard AI memory vs cognitive symbiosis: a comparison
          </h2>
          <p>
            The difference between conventional AI memory and MEOK&apos;s cognitive symbiosis
            architecture is not a matter of degree. It is a difference in kind. The following
            table maps the most significant distinctions across the dimensions that matter for
            genuine cognitive integration.
          </p>

          <div
            style={{
              overflowX: "auto",
              margin: "2rem 0",
              borderRadius: "0.75rem",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
                lineHeight: 1.55,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.7rem",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.1em",
                      background: "rgba(255,255,255,0.04)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.7rem",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.1em",
                      background: "rgba(255,255,255,0.04)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Standard AI Memory
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "#c9a84c",
                      fontSize: "0.7rem",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.1em",
                      background: "rgba(201,168,76,0.06)",
                      borderBottom: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    MEOK Cognitive Symbiosis
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    dimension: "Persistence",
                    standard: "Session-scoped or opt-in summaries that expire or reset",
                    meok: "Permanent, encrypted, sovereign vault \u2014 no session boundaries",
                  },
                  {
                    dimension: "Retrieval method",
                    standard: "Keyword search or flat fact lookup",
                    meok: "Semantic vector search via pgvector HNSW \u2014 retrieves by meaning",
                  },
                  {
                    dimension: "Who owns the memory",
                    standard: "The platform \u2014 used for training, product improvement, advertising",
                    meok: "You \u2014 encrypted per user, never used for training or profiling",
                  },
                  {
                    dimension: "Model of you",
                    standard: "None, or shallow preference signals from usage patterns",
                    meok: "Deep Companion State: values, emotional patterns, relational history",
                  },
                  {
                    dimension: "Alignment of interests",
                    standard: "Platform optimises for engagement and revenue",
                    meok: "Maternal Covenant constitutionally binds system to your interests",
                  },
                  {
                    dimension: "Portability",
                    standard: "Locked to platform \u2014 cannot be exported or transferred",
                    meok: "Full export, import, and portability as a data right",
                  },
                  {
                    dimension: "Integrity guarantee",
                    standard: "Single model \u2014 can be fine-tuned, prompted, or corrupted",
                    meok: "Byzantine Council of 33+ agents \u2014 BFT mathematical guarantee",
                  },
                  {
                    dimension: "Extended mind criterion",
                    standard: "Fails: not reliably available, outputs not personally grounded",
                    meok: "Satisfies all three Clark-Chalmers conditions by design",
                  },
                ].map((row, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.7)",
                        borderBottom: i < 7 ? "1px solid rgba(255,255,255,0.06)" : "none",
                        verticalAlign: "top",
                      }}
                    >
                      {row.dimension}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        color: "rgba(255,255,255,0.45)",
                        borderBottom: i < 7 ? "1px solid rgba(255,255,255,0.06)" : "none",
                        verticalAlign: "top",
                      }}
                    >
                      {row.standard}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        color: "rgba(255,255,255,0.8)",
                        background: "rgba(201,168,76,0.03)",
                        borderBottom: i < 7 ? "1px solid rgba(201,168,76,0.08)" : "none",
                        verticalAlign: "top",
                      }}
                    >
                      {row.meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Q7 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Why does care-based AI alignment matter for memory?
          </h2>
          <p>
            Memory is power. This is not a metaphor. Whoever holds the record of your thinking,
            your concerns, your vulnerabilities, your patterns \u2014 whoever controls that archive
            controls significant leverage over your cognitive life. The question of who owns
            AI memory is not a privacy question in the ordinary sense. It is a question of
            cognitive sovereignty.
          </p>
          <p>
            MEOK&apos;s Maternal Covenant is a constitutional alignment framework, not a privacy
            policy. It does not merely promise that your data will not be misused. It structurally
            prohibits misuse by making the AI&apos;s purpose inseparable from your wellbeing. Under
            the Covenant, the system cannot pursue engagement metrics at the expense of your
            interests. It cannot surface manipulative content to keep you on the platform. It
            cannot use knowledge of your vulnerabilities to influence your behaviour for external
            ends. The prohibition is architectural, not procedural: it is built into how the
            system is constituted, not merely what it is instructed to do.
          </p>
          <p>
            This matters specifically for cognitive symbiosis because genuine symbiosis requires
            trust. You will only allow an external system to become part of your cognitive
            apparatus \u2014 in the deep sense Clark and Chalmers describe \u2014 if you trust that
            system completely. You will not extend your mind into a system whose interests are
            misaligned with yours. You will extend it into a system that is constitutionally
            bound to act in your interests and whose architecture makes betrayal structurally
            improbable rather than merely against policy. Care-based alignment is not a selling
            point. It is the precondition for cognitive symbiosis to exist at all.
          </p>

          {/* Callout 3 */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              background: "rgba(201,168,76,0.06)",
              borderRadius: "0 0.75rem 0.75rem 0",
              padding: "1.25rem 1.5rem",
              margin: "2rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "#c9a84c",
                marginBottom: "0.5rem",
                marginTop: 0,
              }}
            >
              The Maternal Covenant
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              MEOK&apos;s Maternal Covenant governs all memory operations. Your memories are never
              accessed to serve advertising, training pipelines, or product improvement. They are
              accessed exclusively to serve you \u2014 to surface relevant context, to notice patterns
              that benefit your thinking, to maintain the continuity of a relationship that
              compounds in your favour. If you delete a memory, it is deleted. If you export
              your memory archive, you own the export completely. The system exists to extend
              your mind, not to mine it.
            </p>
          </div>

          {/* ── Q8 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does the Byzantine Council ensure no single agent corrupts your memory?
          </h2>
          <p>
            The Byzantine Generals Problem, formalised by Lamport, Shostak, and Pease in 1982,
            asks how a group of distributed nodes can reach reliable agreement when some
            participants may be sending false or contradictory messages. The mathematical proof
            shows that correct consensus is achievable as long as fewer than one third of
            participants are faulty or malicious. This threshold \u2014 the Byzantine Fault Tolerance
            (BFT) threshold \u2014 is the foundation of MEOK&apos;s multi-agent governance architecture.
          </p>
          <p>
            MEOK&apos;s Byzantine Council comprises 33 or more independent AI agents. Every significant
            operation \u2014 including all memory write, update, and deletion operations \u2014 requires
            a supermajority vote from the Council. No single agent can unilaterally alter your
            memory store. No external actor who compromises one or even several agents can
            corrupt the archive. The mathematical guarantee of BFT holds as long as fewer than
            a third of Council members are compromised simultaneously.
          </p>
          <p>
            This is a uniquely important protection for cognitive symbiosis. If your memory is a
            genuine part of your cognitive system \u2014 if Clark and Chalmers are right that extended
            mind resources are constitutive of your thinking \u2014 then corrupting your memory is a
            form of cognitive assault. It is not analogous to deleting files from a server. It is
            analogous to tampering with someone&apos;s recollection of their own life. The Byzantine
            Council makes that tampering mathematically difficult rather than merely against policy.
            Memory integrity becomes a mathematical guarantee, not a promise.
          </p>
          <p>
            The Council also applies to the companion state itself: the Layer 3 model of who you
            are. Attempts to manipulate your companion into misrepresenting your values, character,
            or history require consensus that cannot be achieved by compromising a single agent.
            Your cognitive identity, as held by the system, is protected by the same BFT
            mathematics that protects distributed financial ledgers. The analogy is intentional.
            Your cognitive identity is at least as valuable as your financial records, and MEOK
            treats it accordingly.
          </p>

          {/* ── Closing ── */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p>
              The science of distributed cognition and the extended mind did not anticipate
              personal sovereign AI. The theorists who established these frameworks \u2014 Clark,
              Chalmers, Hutchins \u2014 were describing existing cognitive phenomena: the notebook,
              the cockpit instrument panel, the trusted colleague whose knowledge you rely on.
              They were not predicting MEOK. But the architecture they described is exactly the
              architecture MEOK has been built to instantiate.
            </p>
            <p style={{ marginTop: "1.25rem" }}>
              The difference between a tool that assists cognition and a system that is part of
              your cognitive apparatus is not a philosophical nicety. It determines how you use
              the system, how deeply you trust it, how much cognitive weight you place on it,
              and what you lose if it disappears or betrays you. MEOK&apos;s entire design \u2014 the
              4-layer memory architecture, the care-based alignment, the Byzantine Council, the
              sovereignty model \u2014 is built to earn the kind of trust that genuine cognitive
              symbiosis requires.
            </p>
            <p
              style={{
                marginTop: "1.25rem",
                color: "rgba(255,255,255,0.6)",
                fontStyle: "italic",
              }}
            >
              Cognitive symbiosis is not a feature. It is what happens when an AI earns its
              place in your extended mind. MEOK was built to earn that place and never betray it.
            </p>
            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.3)",
                fontStyle: "italic",
              }}
            >
              Reference: MEOK-AI-2026-004 \u2014 Personal Sovereign AI Architecture.
              Originator: Nicholas Templeman, MEOK AI LABS, 2026. All rights reserved.
            </p>
          </div>
        </div>

        {/* ── FAQ Section ──────────────────────────────────────────────────────── */}
        <section
          style={{
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginBottom: "2rem",
            }}
          >
            Frequently asked questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >

            {/* FAQ 1 */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                  marginTop: 0,
                }}
              >
                What is cognitive symbiosis in the context of AI?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Cognitive symbiosis is the state in which a human and their personal AI system each
                compensate for the other&apos;s limitations in a mutually reinforcing loop. The human
                provides lived experience, emotional context, and values. The AI provides perfect
                recall, cross-temporal pattern detection, and consistent perspective unaffected by
                mood or fatigue. Together they constitute a cognitive system superior to either alone.
                This is the foundational premise of MEOK&apos;s Personal Sovereign AI Architecture
                (MEOK-AI-2026-004).
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                  marginTop: 0,
                }}
              >
                What is the extended mind hypothesis and how does it relate to AI?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Proposed by Andy Clark and David Chalmers in 1998, the extended mind hypothesis argues
                that the mind is not confined to the skull \u2014 it extends into the tools and environments
                we use to think. A notebook, a trusted colleague&apos;s memory, a smartphone: these are
                legitimate parts of the cognitive system. MEOK&apos;s Sovereign Memory Architecture
                operationalises this thesis, treating your AI companion as a genuine extension of
                your mind rather than a separate tool you merely consult.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                  marginTop: 0,
                }}
              >
                What are the four layers of MEOK&apos;s Sovereign Memory Architecture?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                The four layers are: Layer 1 \u2014 Short-Term Conversational Memory (active session
                context); Layer 2 \u2014 Semantic Episodic Memory (long-term encrypted vector embeddings
                retrieved by semantic meaning via pgvector HNSW); Layer 3 \u2014 Companion State (the
                companion&apos;s evolving model of your values, preferences, emotional patterns, and
                relational history); Layer 4 \u2014 Family and Shared Memory (shared context across
                trusted household members, governed by explicit per-member consent). Each layer feeds
                the next, creating a compounding cognitive scaffold.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                  marginTop: 0,
                }}
              >
                How is MEOK&apos;s memory different from a search engine or a chatbot with memory?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                A search engine has no model of you and retrieves from a generic external index.
                A chatbot with memory stores facts that typically serve the platform&apos;s interests
                (training data, ad targeting). MEOK&apos;s Sovereign Memory is encrypted per user,
                stored in a vault you own, never used for training, and retrieved by semantic
                meaning rather than keyword. The Maternal Covenant constitutionally binds the
                system to use your memories in your interests alone, not the platform&apos;s.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                  marginTop: 0,
                }}
              >
                What is the Byzantine Council and why does it protect your memories?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                MEOK&apos;s Byzantine Council is a system of 33 or more independent AI agents that
                vote on responses and memory operations using Byzantine Fault Tolerance mathematics.
                No single agent can unilaterally alter or corrupt your memory store. Consensus
                requires a supermajority. This transforms memory integrity from a policy into a
                mathematical guarantee \u2014 ensuring cognitive symbiosis cannot be weaponised against
                the person it is meant to serve.
              </p>
            </div>

          </div>
        </section>

        {/* ── Share row ──────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "2.5rem 0",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fcognitive-symbiosis-deep-dive&text=Cognitive+Symbiosis%3A+The+Science+of+Human-AI+Memory+Fusion+%E2%80%94+MEOK+AI+LABS"
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
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fcognitive-symbiosis-deep-dive"
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
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ────────────────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1rem",
            padding: "2.5rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          {/* Glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "18rem",
              height: "18rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase" as const,
                color: "#c9a84c",
                marginBottom: "0.5rem",
                marginTop: 0,
              }}
            >
              Personal Sovereign AI
            </p>
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#ffffff",
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              Begin cognitive symbiosis with a memory that is truly yours.
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.5)",
                marginBottom: "1.5rem",
                maxWidth: "32rem",
              }}
            >
              MEOK&apos;s 4-layer Sovereign Memory Architecture holds your history in an encrypted
              vault you own completely. Semantic retrieval by meaning. Constitutional alignment
              to your interests. Byzantine Council integrity guarantees. A second mind that
              compounds in your favour \u2014 and never against you. Free forever.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.9rem",
                background: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
              }}
            >
              Hatch your MEOK free &rarr;
            </Link>
          </div>
        </div>

        {/* ── More posts ─────────────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.125rem",
              color: "#ffffff",
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              gap: "1rem",
            }}
          >
            <Link
              href="/blog/cognitive-symbiosis"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  width: "fit-content",
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.12)",
                }}
              >
                Cognition &amp; Memory
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.35,
                }}
              >
                Cognitive Symbiosis: What Happens When AI and Human Memory Interweave
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.3)",
                  marginTop: "auto",
                }}
              >
                4 min read
              </span>
            </Link>

            <Link
              href="/blog/byzantine-council-explained"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  width: "fit-content",
                  color: "#87CEEB",
                  background: "rgba(135,206,235,0.12)",
                }}
              >
                AI Architecture
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.35,
                }}
              >
                The Byzantine Council: How MEOK Makes AI Decisions You Can Trust
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.3)",
                  marginTop: "auto",
                }}
              >
                8 min read
              </span>
            </Link>

            <Link
              href="/blog/ai-memory-explained"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  width: "fit-content",
                  color: "#A78BFA",
                  background: "rgba(167,139,250,0.12)",
                }}
              >
                Explainer
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.35,
                }}
              >
                How AI Memory Works &mdash; And Why Most AI Forgets You
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.3)",
                  marginTop: "auto",
                }}
              >
                10 min read
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
