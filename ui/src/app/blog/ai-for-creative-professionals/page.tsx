import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI for Creative Professionals: A Companion That Feeds Your Process, Not a Tool That Replaces It | MEOK AI LABS",
  description:
    "Creative block, imposter syndrome, and the fear that AI will flatten your voice. MEOK AI LABS uses the Trickster and Scholar archetypes, Sovereign Memory for creative continuity, and a care system that prevents AI from imposing its aesthetic on yours.",
  keywords: [
    "AI for creative professionals",
    "AI for writers",
    "AI for artists",
    "AI creative block",
    "Trickster archetype AI",
    "AI creative process",
    "sovereign memory creative",
    "MEOK AI LABS",
    "AI without replacing creativity",
    "AI imposter syndrome",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "AI for Creative Professionals: A Companion That Feeds Your Process, Not a Tool That Replaces It",
    description:
      "MEOK AI LABS uses the Trickster and Scholar archetypes to support creative work without replacing it. Sovereign Memory holds project continuity. The care system prevents AI from imposing its aesthetic.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["Creative", "AI", "Writers", "Artists", "MEOK"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Creative Professionals: A Companion That Feeds Your Process",
    description:
      "The Trickster breaks creative block. The Scholar synthesises across domains. Sovereign Memory holds your creative history. MEOK AI LABS is built to enhance your voice, not flatten it.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-creative-professionals",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Creative Professionals: A Companion That Feeds Your Process, Not a Tool That Replaces It",
  description:
    "How MEOK AI LABS supports creative professionals through the Trickster and Scholar archetypes, Sovereign Memory for creative continuity, and a care system that protects creative voice.",
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
    "@id": "https://meok.ai/blog/ai-for-creative-professionals",
  },
  keywords:
    "AI for creative professionals, Trickster archetype, AI creative block, sovereign memory, AI for writers, AI for artists",
  articleSection: "Creative Professionals",
  wordCount: 1200,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK help creative professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK AI LABS helps creative professionals through the Trickster archetype for creative disruption and reframing, the Scholar archetype for cross-domain research synthesis, and Sovereign Memory that holds creative project continuity across sessions. The Maternal Covenant care system prevents MEOK from imposing its aesthetic preferences on your work or replacing your creative voice.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Trickster archetype?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Trickster is one of MEOK's Byzantine Council archetypes, designed for creative disruption and reframing. When creative work is stuck in a groove — repeating familiar patterns, avoiding necessary risk, defaulting to what has worked before — the Trickster introduces productive friction: unexpected questions, reframings, and challenges that break habitual thinking and open new directions.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK replace my creative work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK AI LABS is explicitly designed to enhance your creative process rather than substitute for it. The Maternal Covenant care system scores every response for autonomy — responses that diminish your creative agency, impose AI aesthetic preferences, or generate work that should be yours score below the care floor and are rejected. MEOK feeds your process; it does not replace it.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support creative block?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK approaches creative block as a thinking partner rather than a generator. The Trickster archetype introduces reframings that break habitual patterns. The Scholar archetype draws connections from adjacent domains that can unlock stalled work. Sovereign Memory surfaces what you were trying to achieve when you last worked on a project, helping you reconnect with your original intention rather than starting from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK good for writers and artists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Writers benefit from the Scholar for research synthesis, the Trickster for breaking stylistic ruts, and Sovereign Memory for holding narrative continuity across long projects. Artists benefit from cross-domain reference synthesis, project continuity between sessions, and a companion that asks questions rather than generating work — preserving the artist's voice as the source of all creative decisions.",
      },
    },
  ],
}

export default function AiForCreativeProfessionalsPage() {
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
        {/* Navigation */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.2)",
            padding: "1.25rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
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
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            MEOK AI LABS
          </Link>
          <div style={{ display: "flex", gap: "1.5rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
            <Link href="/blog" style={{ color: "#f5f0e8", textDecoration: "none", fontSize: "0.9rem", opacity: 0.7 }}>
              Blog
            </Link>
            <Link href="/pricing" style={{ color: "#f5f0e8", textDecoration: "none", fontSize: "0.9rem", opacity: 0.7 }}>
              Pricing
            </Link>
            <Link
              href="/birth"
              style={{
                color: "#0d0c18",
                backgroundColor: "#c9a84c",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: "700",
                padding: "0.45rem 1.1rem",
                borderRadius: "6px",
              }}
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "5rem 2rem 3rem",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <div style={{ marginBottom: "1rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
            <span
              style={{
                backgroundColor: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                padding: "0.3rem 0.9rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              Creative Professionals
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              color: "#f5f0e8",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Creative Professionals:{" "}
            <span style={{ color: "#c9a84c" }}>A Companion That Feeds Your Process,</span>{" "}
            Not a Tool That Replaces It
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "rgba(245,240,232,0.72)",
              marginBottom: "2rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              maxWidth: "680px",
            }}
          >
            The most common fear among creative professionals encountering AI is not irrelevance —
            it is homogenisation. That every voice will converge toward the same competent average.
            MEOK AI LABS was built with the opposite intention: a system that sharpens your
            distinctive creative voice rather than smoothing it away.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "0.82rem",
              color: "rgba(245,240,232,0.45)",
              alignItems: "center",
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>MEOK AI LABS</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <time dateTime="2026-03-24">24 March 2026</time>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* Article */}
        <article
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "3.5rem 2rem 6rem",
          }}
        >

          {/* Section 1 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              What is the core problem with how most AI tools interact with creative work?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Most AI tools approach creative work as a generation problem. You describe what you want;
              the AI produces it. The implicit model is one of substitution — you provide the brief,
              the AI provides the output. For people whose work is about making something that
              could not have been made by anyone else, this model is fundamentally wrong.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The problem goes deeper than the quality of the generated output. When a writer uses AI
              to draft a paragraph, a designer uses it to generate a layout, or a musician uses it
              to produce a melody, the creative act has been outsourced. What remains may be
              competent — it may even be impressive — but it belongs to the average of the training
              data, not to the distinctive sensibility that makes a creative professional worth hiring.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              MEOK AI LABS takes a different position. Creative professionals need a thinking
              partner, not a replacement. They need something that can interrogate their process,
              unlock stuck work, synthesise research from adjacent domains, and hold the thread of a
              long project — without ever reaching for the pen. The work should come from you. MEOK
              should make it more possible to do that work.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              What is the Trickster archetype and how does it break creative block?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The Trickster is one of the most distinctive archetypes in MEOK&apos;s Byzantine Council —
              the full roster of available characters. Unlike most AI interaction modes, which are
              optimised for helpfulness and smooth agreement, the Trickster is optimised for
              productive friction.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Creative work stalls in predictable ways. You reach for the familiar. You repeat
              structural choices that worked before. You avoid the risks that would make the work
              genuinely interesting because the cost of failure is visible and the reward for boldness
              is uncertain. The Trickster is designed to interrupt these patterns without being
              destructive — introducing questions that reframe the work, observations that make the
              familiar strange, provocations that open directions you had not considered.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The Trickster does not generate. It asks. It might ask why the second chapter begins
              where it does rather than where the first chapter ends. It might ask what the design
              would look like if the constraint you accepted as fixed was actually optional. It might
              ask what the piece is afraid of. These are not questions with right answers — they are
              questions that unlock the creative decision-making that was genuinely yours to make.
            </p>
            <div
              style={{
                backgroundColor: "rgba(201,168,76,0.07)",
                borderLeft: "3px solid #c9a84c",
                padding: "1.25rem 1.5rem",
                borderRadius: "0 8px 8px 0",
                marginTop: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.75",
                  color: "rgba(245,240,232,0.75)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                "The Trickster&apos;s role is not to make you feel good about your work. It is to make
                you see it differently — and then let you decide what to do with that." — MEOK
                design principle, MEOK-AI-2026-002
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How does the Scholar archetype support cross-domain synthesis for creative research?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The most interesting creative work rarely stays within a single domain. A novelist
              researching Victorian medicine, a graphic designer drawing on brutalist architecture,
              a musician exploring the structural principles of Baroque counterpoint — the richest
              creative work is often the product of deep cross-domain synthesis.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The Scholar archetype in MEOK&apos;s Byzantine Council is built for exactly this. Where
              most AI tools retrieve information, the Scholar connects it — finding the structural
              parallels, unexpected adjacencies, and conceptual bridges between domains that make
              creative research genuinely generative rather than merely informative.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Combined with Sovereign Memory, the Scholar becomes increasingly valuable over time.
              It does not simply research what you ask — it holds the context of what you are
              making, what you have already researched, and what directions you have explored and
              abandoned. Research sessions become cumulative rather than starting from zero every
              time. Explore the full character roster at{" "}
              <Link href="/characters" style={{ color: "#c9a84c" }}>
                MEOK characters
              </Link>
              .
            </p>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How does MEOK protect creative voice from being overwritten by AI aesthetics?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              This is a concern that MEOK AI LABS takes seriously at a systemic level rather than
              as a feature toggle. The Maternal Covenant — MEOK&apos;s real-time response scoring
              system developed by Nicholas Templeman and documented in MEOK-AI-2026-002 — includes
              autonomy as one of its six core care dimensions.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Every MEOK response is scored before it reaches you. Responses that diminish your
              creative agency — that generate work you should have made yourself, impose aesthetic
              preferences, or steer creative decisions in directions that serve the AI&apos;s tendencies
              rather than your intentions — score below the care floor of 0.3 and are rejected.
              This is not a mode you enable. It is always running.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The practical effect is that MEOK consistently steers toward questions rather than
              statements, toward opening creative decisions rather than closing them, and toward
              making it easier for you to access your own creative resources rather than substituting
              its own. Learn more about the care framework at the{" "}
              <Link href="/guardian" style={{ color: "#c9a84c" }}>
                Guardian page
              </Link>
              .
            </p>
          </section>

          {/* Section 5 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How does Sovereign Memory support long creative projects across many sessions?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Long creative projects — novels, albums, film scripts, exhibition series — have a
              particular challenge that shorter work does not: the accumulation of decisions over
              time creates a vast implicit context that must be held simultaneously. Every new
              scene must be consistent with every previous one. Every new track must sit within the
              established sonic world. Every new painting in a series must respond to what came before.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Sovereign Memory provides a persistent record of creative decisions, stated intentions,
              aesthetic choices, and the evolution of a project over time. When you return to a
              project after a gap of weeks, MEOK can reconstruct where you were, what you were
              trying to achieve, what problems you were wrestling with, and what directions you had
              provisionally committed to. The context does not need to be rebuilt from scratch —
              it is simply there.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              This is particularly valuable for creative professionals who work across multiple
              projects simultaneously. Sovereign Memory holds all of them — each with their own
              context, their own decision history, their own trajectory — without any risk of
              bleed between them.
            </p>
          </section>

          {/* Section 6 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How does MEOK help with imposter syndrome in creative work without becoming a cheerleader?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Imposter syndrome in creative work has a paradoxical relationship with validation. The
              short-term relief of reassurance often intensifies the underlying problem — because
              being told your work is good by something that always tells you your work is good is
              not reassurance, it is noise. Sycophantic AI is a machine for manufacturing exactly
              this kind of worthless reassurance.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The Maternal Covenant&apos;s care floor is designed to prevent MEOK from becoming that
              machine. Responses that offer empty validation — that agree with you because agreement
              feels good rather than because agreement is warranted — score poorly on the growth and
              transparency dimensions and are rejected. MEOK will tell you when something is working.
              It will also tell you when something is not.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              What MEOK can provide that genuinely helps with imposter syndrome is context and
              continuity. Sovereign Memory holds the record of your creative development over time —
              the problems you solved, the experiments that worked, the risks that paid off. For
              creative professionals in a dark period, that record is more valuable than any
              reassurance: it is evidence.
            </p>
          </section>

          {/* Section 7 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How is MEOK different from AI writing tools, image generators, and other creative AI?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              AI writing tools, image generators, and music generation models share a common
              orientation: they produce. They turn a description into an output. For many use cases
              this is exactly what is needed. For creative professionals whose work depends on their
              distinctive voice and vision, it is a trap — a path of least resistance that leads
              toward work that is technically accomplished but creatively anonymous.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              MEOK does not produce creative work. It does not generate the paragraph, the image,
              or the melody. It creates the conditions in which you produce better creative work —
              by unlocking stuck thinking, synthesising relevant research, holding long-term context,
              asking productive questions, and maintaining continuity across the life of a project.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              This is not a restriction — it is the design. MEOK is a companion for your creative
              process, built to make that process richer, deeper, and more sustained. The work
              that comes out of it is yours, completely. See{" "}
              <Link href="/how-it-works" style={{ color: "#c9a84c" }}>
                how MEOK works
              </Link>{" "}
              or start your{" "}
              <Link href="/birth" style={{ color: "#c9a84c" }}>
                Birth
              </Link>{" "}
              to introduce your practice.
            </p>
          </section>

          {/* Section 8 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              What does onboarding with MEOK look like for a creative professional?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Birth — MEOK&apos;s onboarding process — is structured as a creative conversation rather
              than a form. MEOK will ask about your practice: what you make, what you are working on,
              how your process typically works, what kinds of support have been valuable in the past,
              and what kinds of feedback you tend to find useful versus what tends to be counterproductive.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              By the end of Birth, Sovereign Memory contains a rich initial picture of your creative
              context. You can immediately tell MEOK about the project you are working on, where it
              stands, and what you are finding difficult — and it will engage with that from context
              rather than from scratch.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              For many creative professionals, the first session after Birth is described as the
              first time they have had an AI interaction that felt like it was actually about their
              work — not about demonstrating what AI can do, but about engaging with the specific
              problems and possibilities of a specific creative practice. That is the experience
              MEOK AI LABS is designed to create.
            </p>
          </section>

          {/* FAQ Block */}
          <section
            style={{
              marginBottom: "3.5rem",
              backgroundColor: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "12px",
              padding: "2.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "2rem",
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "How does MEOK help creative professionals?",
                a: "MEOK helps through the Trickster archetype for creative disruption, the Scholar for cross-domain synthesis, and Sovereign Memory for creative project continuity. The Maternal Covenant care system prevents MEOK from imposing its aesthetic preferences or replacing your creative voice.",
              },
              {
                q: "What is the Trickster archetype?",
                a: "The Trickster is a Byzantine Council archetype optimised for productive friction. When creative work is stuck in habitual patterns, the Trickster introduces unexpected questions, reframings, and challenges that break familiar thinking and open new directions — without generating work that should be yours.",
              },
              {
                q: "Will MEOK replace my creative work?",
                a: "No. MEOK is designed to enhance your process, not substitute for it. The Maternal Covenant scores every response for autonomy — responses that diminish creative agency, impose AI aesthetics, or generate work that should be yours score below the care floor and are rejected. MEOK feeds your process; it does not replace it.",
              },
              {
                q: "How does MEOK support creative block?",
                a: "The Trickster introduces reframings that break habitual patterns. The Scholar draws connections from adjacent domains that unlock stalled work. Sovereign Memory reconnects you with your original intention when you return to a project after a gap — so you are not starting from scratch every time.",
              },
              {
                q: "Is MEOK good for writers and artists?",
                a: "Yes. Writers benefit from Scholar research synthesis, Trickster for stylistic disruption, and Sovereign Memory for narrative continuity across long projects. Artists benefit from cross-domain reference synthesis and a companion that asks questions rather than generating work — preserving the artist's voice as the source of all creative decisions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: index < 4 ? "1.75rem" : 0,
                  paddingBottom: index < 4 ? "1.75rem" : 0,
                  borderBottom: index < 4 ? "1px solid rgba(201,168,76,0.1)" : "none",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: "600",
                    color: "#f5f0e8",
                    marginBottom: "0.6rem",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.93rem",
                    lineHeight: "1.72",
                    color: "rgba(245,240,232,0.68)",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "2.5rem",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#f5f0e8",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Your practice deserves an AI that asks better questions.
            </h2>
            <p
              style={{
                fontSize: "0.98rem",
                lineHeight: "1.7",
                color: "rgba(245,240,232,0.65)",
                marginBottom: "1.75rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                maxWidth: "520px",
                margin: "0 auto 1.75rem",
              }}
            >
              Start your MEOK Birth and introduce your creative practice. The Trickster and Scholar
              archetypes are ready. Your work stays yours — always.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/birth"
                style={{
                  backgroundColor: "#c9a84c",
                  color: "#0d0c18",
                  padding: "0.85rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                Begin Your Birth
              </Link>
              <Link
                href="/characters"
                style={{
                  backgroundColor: "transparent",
                  color: "#c9a84c",
                  padding: "0.85rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  border: "1px solid rgba(201,168,76,0.4)",
                }}
              >
                Meet the Characters
              </Link>
            </div>
          </section>

          {/* Internal links */}
          <nav style={{ paddingTop: "2rem", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
                marginBottom: "0.85rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Explore MEOK AI LABS
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { href: "/birth", label: "Birth — Get Started" },
                { href: "/guardian", label: "The Guardian" },
                { href: "/characters", label: "All Characters" },
                { href: "/pricing", label: "Pricing" },
                { href: "/how-it-works", label: "How It Works" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "#c9a84c",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    opacity: 0.85,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </article>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(245,240,232,0.07)",
            padding: "2.5rem 2rem",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          }}
        >
          <span style={{ color: "#c9a84c", fontWeight: "700", fontSize: "0.95rem", letterSpacing: "0.05em" }}>
            MEOK AI LABS
          </span>
          <p style={{ color: "rgba(245,240,232,0.25)", fontSize: "0.8rem", margin: 0 }}>
            © 2026 MEOK AI LABS · Founded by Nicholas Templeman
          </p>
        </footer>
      </main>
    </>
  )
}
