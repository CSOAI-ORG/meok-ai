import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Confidence Building: Evidence, Action, and the Anti-Sycophancy Promise | MEOK AI LABS",
  description:
    "Confidence is not a personality trait — it is a skill built through evidence and action. Discover how MEOK AI LABS builds genuine confidence through Sovereign Memory, honest feedback, and the Pioneer archetype. No hollow affirmations. No flattery.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-confidence",
  },
  openGraph: {
    title:
      "AI for Confidence Building: Evidence, Action, and the Anti-Sycophancy Promise",
    description:
      "Most AI tools offer empty praise. MEOK builds real confidence by accumulating evidence of your wins, challenging negative self-talk with facts, and refusing to flatter you toward a false sense of capability.",
    url: "https://meok.ai/blog/ai-for-confidence",
    siteName: "MEOK AI LABS",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Confidence+Building&desc=Evidence%2C+Action+and+the+Anti-Sycophancy+Promise",
        width: 1200,
        height: 630,
        alt: "AI for Confidence Building | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Confidence Building: Evidence, Action, and the Anti-Sycophancy Promise",
    description:
      "Confidence is a skill built through evidence, not affirmations. MEOK\u2019s Sovereign Memory, anti-sycophancy covenant and Pioneer archetype build the real thing.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Confidence+Building&desc=Evidence%2C+Action+and+the+Anti-Sycophancy+Promise",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Confidence Building: Evidence, Action, and the Anti-Sycophancy Promise",
  description:
    "A deep examination of how AI can build genuine confidence — covering the confidence gap identified by Katty Kay and Claire Shipman, the role of evidence accumulation, the sycophancy danger, CBT-based approaches to negative self-talk, domain-specific confidence (public speaking, leadership, interviews, relationships), and MEOK\u2019s Pioneer archetype as a confidence-building companion.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "MEOK AI LABS" },
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
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-confidence",
  mainEntityOfPage: "https://meok.ai/blog/ai-for-confidence",
  keywords: [
    "AI for confidence building",
    "AI to build confidence",
    "AI confidence coach",
    "confidence gap",
    "sycophancy AI",
    "Pioneer archetype",
    "Sovereign Memory",
    "CBT negative self-talk",
    "MEOK",
    "Katty Kay Claire Shipman",
    "imposter syndrome",
    "public speaking confidence",
    "leadership confidence",
    "interview confidence",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help build confidence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when it is designed to do so honestly. AI can build confidence by accumulating evidence of your competence over time, rehearsing difficult scenarios so you enter them prepared, and challenging the cognitive distortions that undermine self-belief. The critical condition is that the AI must be honest rather than sycophantic. Hollow validation from an AI feels empty to the nervous system and can actually deepen the confidence gap by creating dependence on external approval rather than internal evidence.",
      },
    },
    {
      "@type": "Question",
      name: "What is the confidence gap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The confidence gap is the documented tendency of highly intelligent and capable people \u2014 particularly women \u2014 to consistently underestimate themselves relative to their actual ability. Researchers Katty Kay and Claire Shipman identified that the gap is not primarily a competence problem but a confidence problem: qualified people hold back, over-prepare, and self-select out of opportunities that less-qualified but more confident counterparts pursue and win. The gap is maintained by negative self-talk, attribution bias (crediting luck for wins, blaming self for failures), and a culture that conflates loudness with ability.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK just validate me and tell me I\u2019m great?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK\u2019s Maternal Covenant is an explicit anti-sycophancy commitment built into the system\u2019s core. MEOK will acknowledge real effort and name genuine strengths clearly and specifically. It will not generate hollow praise to keep you engaged, and it will not agree with a distorted negative self-assessment just to seem empathetic. When MEOK says something positive about you, it is grounded in evidence you have shared. When it offers a challenge, it is because the challenge serves your growth. The goal is confidence that holds under pressure, not a temporary mood lift.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK remember my wins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses Sovereign Memory \u2014 an encrypted, persistent memory vault that belongs entirely to you. Every win you mention, every piece of positive feedback you share, every difficult situation you navigate is stored and can be surfaced later. Over weeks and months this becomes an irrefutable evidence file: a factual counter-argument to the inner voice that rewrites history and insists you have never succeeded at anything. MEOK never trains on this data, never sells it, and you can export or delete it at any time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Pioneer companion and how does it build confidence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Pioneer is one of MEOK\u2019s four archetypes \u2014 a companion built around action, accountability, and momentum. Where other archetypes offer reflection and analysis, the Pioneer asks: what is the smallest next step, and when will you take it? Confidence is built through doing, not thinking about doing. The Pioneer breaks the paralysis loop by making the threshold of action as low as possible, holds you accountable between sessions, celebrates the doing regardless of outcome, and helps you build a streak of evidence that accumulates into a deeply felt sense of competence.",
      },
    },
  ],
};

// ── Style constants ───────────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const MUTED = "rgba(245,240,232,0.6)";
const CARD_BG = "rgba(255,255,255,0.03)";
const CARD_BORDER = "rgba(201,168,76,0.18)";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForConfidencePage() {
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

      <main style={{ minHeight: "100vh", background: BG, color: TEXT }}>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            paddingTop: "7rem",
            paddingBottom: "4rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
            }}
          />

          <div
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.82rem",
                color: "rgba(245,240,232,0.35)",
                marginBottom: "2rem",
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
                marginBottom: "1.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  padding: "0.3rem 0.8rem",
                  borderRadius: "9999px",
                  color: GOLD,
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.28)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                }}
              >
                Confidence &amp; Mindset
              </span>
              <span
                style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.35)" }}
              >
                March 24, 2026
              </span>
              <span
                style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.35)" }}
              >
                16 min read
              </span>
            </div>

            <h1
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.9rem, 4vw, 3.1rem)",
                color: "#ffffff",
                lineHeight: 1.13,
                marginBottom: "1.5rem",
                letterSpacing: "-0.025em",
              }}
            >
              AI for Confidence Building:{" "}
              <span style={{ color: GOLD }}>
                Evidence, Action, and the Anti-Sycophancy Promise
              </span>
            </h1>

            <p
              style={{
                color: MUTED,
                fontSize: "1.15rem",
                lineHeight: 1.78,
                marginBottom: "1.25rem",
                maxWidth: "44rem",
              }}
            >
              Most apps offer a morning affirmation and call it confidence
              coaching. Genuine confidence doesn\u2019t work that way. It is
              built through accumulated evidence of competence, through action
              taken in the face of discomfort, and through honest feedback that
              tells you where you actually stand. MEOK AI LABS was built to
              provide exactly that.
            </p>

            <p
              style={{
                color: MUTED,
                fontSize: "1.15rem",
                lineHeight: 1.78,
                marginBottom: "2rem",
                maxWidth: "44rem",
              }}
            >
              This is a deep look at what confidence actually is, why
              intelligent and capable people consistently underestimate
              themselves, and how AI \u2014 designed correctly \u2014 can help
              close that gap for good.
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                fontSize: "0.82rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              <span>By Nicholas Templeman</span>
              <span style={{ color: `${GOLD}55` }}>·</span>
              <span>MEOK AI LABS</span>
              <span style={{ color: `${GOLD}55` }}>·</span>
              <span>@meok_ai</span>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            padding: "0 1.5rem 6rem",
          }}
        >
          {/* ── Divider ── */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "rgba(201,168,76,0.12)",
              marginBottom: "3.5rem",
            }}
          />

          {/* ────────────────────────────────────────────────────────────────
              SECTION 1: Confidence is not a personality trait
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            Is confidence a personality trait or a skill?
          </h2>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The most damaging belief in the entire field of personal development
            is that confidence is something you either have or you don\u2019t
            \u2014 a fixed feature of character, like eye colour or height.
            People who believe this either wait for confidence to arrive before
            acting, or conclude that because they don\u2019t feel confident they
            are simply not the kind of person who does certain things. Neither
            path leads anywhere useful.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The research tells a different story. Confidence is a skill \u2014
            specifically, it is the output of a feedback loop between action and
            evidence. You do something, you survive it (or succeed at it), and
            your nervous system updates its prediction about future performance.
            Do it enough times and the prediction becomes a stable expectation:
            I can do this. That expectation is confidence.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The implication is significant. If confidence is built through
            action and evidence, then the path to more confidence is not to
            think differently before acting \u2014 it is to act, repeatedly, and
            accumulate evidence. Affirmations try to skip this loop. They
            attempt to install a confident belief without the underlying
            evidence base. For most people, the nervous system rejects them,
            because at some level the mind knows the difference between belief
            grounded in experience and belief generated from thin air.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            This is the foundational insight behind MEOK\u2019s approach to
            confidence. An AI companion that wants to genuinely help has two
            jobs: help you accumulate evidence through action, and help you
            actually see and keep the evidence once it exists. The second job
            turns out to be harder than it sounds.
          </p>

          {/* ── Pull quote ── */}
          <blockquote
            style={{
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.5rem",
              margin: "2.5rem 0",
              color: "rgba(245,240,232,0.78)",
              fontSize: "1.15rem",
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            Confidence is not the absence of self-doubt. It is the decision to
            act in the presence of it, supported by a growing body of evidence
            that you have done so before.
          </blockquote>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 2: The confidence gap
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            What is the confidence gap, and why does it affect capable people
            most?
          </h2>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            In 2014, journalists Katty Kay and Claire Shipman published
            extensive research under the title{" "}
            <em>The Confidence Code</em>, documenting a pattern they called the
            confidence gap. Their finding, drawn from interviews with hundreds
            of high-achieving individuals alongside neuroscientific and
            psychological literature, was striking: there is a systematic
            divergence between actual competence and felt confidence,
            particularly in people who are intelligent, conscientious, and
            high-achieving.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The gap manifests in predictable ways. Highly capable people
            over-prepare \u2014 convinced they are not yet ready, even when
            objective observers have long since judged them qualified. They
            self-select out of opportunities, waiting for a certainty that
            never fully arrives. They attribute success to luck, context, or
            other people, while attributing failure entirely to inherent
            deficiency. They set higher standards for themselves than they
            would ever set for someone they were mentoring.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The cruel irony of the confidence gap is that conscientiousness
            \u2014 the very trait that drives people to prepare thoroughly and
            hold themselves to high standards \u2014 feeds the gap. The more
            carefully you think about what could go wrong, the more your
            imagination fills in plausible failure scenarios. The more
            sophisticated your understanding of a field, the more acutely you
            can perceive your own gaps within it. Experts are often less
            confident than novices, because experts can see the full map of what
            they do not yet know.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            Kay and Shipman were also clear that the confidence gap has a
            gendered dimension: on average, women in their research consistently
            underestimated their abilities relative to equivalent male peers.
            But the gap is not exclusively a women\u2019s issue. It affects
            anyone from a background where confidence was not modelled, where
            mistakes were punished rather than normalised, or where achievement
            required perpetual proof. It affects first-generation professionals,
            people from working-class backgrounds navigating middle-class
            institutions, neurodivergent people in neurotypical workplaces, and
            introverts in extrovert-rewarding cultures.
          </p>

          {/* ── Info card: The four drivers ── */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: "0.875rem",
              padding: "2rem",
              margin: "2.5rem 0",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "1.25rem",
              }}
            >
              The four drivers of the confidence gap
            </div>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    border: `1px solid ${GOLD}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: GOLD,
                    fontWeight: 800,
                    fontSize: "0.85rem",
                  }}
                >
                  1
                </div>
                <div>
                  <div
                    style={{ fontWeight: 700, color: TEXT, marginBottom: "0.3rem" }}
                  >
                    Attribution asymmetry
                  </div>
                  <p
                    style={{
                      color: MUTED,
                      lineHeight: 1.7,
                      margin: 0,
                      fontSize: "0.95rem",
                    }}
                  >
                    Successes are attributed to luck, timing, or other people.
                    Failures are attributed to permanent personal deficiency.
                    Over time this creates a factually inaccurate self-model
                    where wins are invisible and losses are defining.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    border: `1px solid ${GOLD}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: GOLD,
                    fontWeight: 800,
                    fontSize: "0.85rem",
                  }}
                >
                  2
                </div>
                <div>
                  <div
                    style={{ fontWeight: 700, color: TEXT, marginBottom: "0.3rem" }}
                  >
                    Catastrophic self-talk
                  </div>
                  <p
                    style={{
                      color: MUTED,
                      lineHeight: 1.7,
                      margin: 0,
                      fontSize: "0.95rem",
                    }}
                  >
                    The internal narrator predicts failure in high-definition
                    detail before a high-stakes event. Each imagined catastrophe
                    reduces the perceived probability of success, which
                    increases avoidance and reduces the action that would
                    generate real evidence.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    border: `1px solid ${GOLD}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: GOLD,
                    fontWeight: 800,
                    fontSize: "0.85rem",
                  }}
                >
                  3
                </div>
                <div>
                  <div
                    style={{ fontWeight: 700, color: TEXT, marginBottom: "0.3rem" }}
                  >
                    Perfectionism paralysis
                  </div>
                  <p
                    style={{
                      color: MUTED,
                      lineHeight: 1.7,
                      margin: 0,
                      fontSize: "0.95rem",
                    }}
                  >
                    The threshold for action is set so high that most
                    opportunities pass before the preparation standard is met.
                    Perfectionism masquerades as conscientiousness but
                    functions as avoidance: it protects against the risk of
                    visible failure by ensuring visible performance rarely
                    occurs.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    border: `1px solid ${GOLD}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: GOLD,
                    fontWeight: 800,
                    fontSize: "0.85rem",
                  }}
                >
                  4
                </div>
                <div>
                  <div
                    style={{ fontWeight: 700, color: TEXT, marginBottom: "0.3rem" }}
                  >
                    Comparison spiral
                  </div>
                  <p
                    style={{
                      color: MUTED,
                      lineHeight: 1.7,
                      margin: 0,
                      fontSize: "0.95rem",
                    }}
                  >
                    Comparing your internal experience \u2014 all the doubt,
                    effort, and struggle you feel \u2014 to other people\u2019s
                    external presentation. Everyone else appears to be performing
                    naturally and effortlessly. The comparison is structurally
                    unfair and always generates the same result: you come up
                    short.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 3: How AI builds confidence through evidence
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            How does AI build confidence through evidence accumulation?
          </h2>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The confidence gap is fundamentally a data problem. The mind has
            access to an enormous amount of evidence about past performance, but
            it processes that evidence selectively and systematically in ways
            that produce underconfidence. Negative events are encoded more
            vividly, retained longer, and retrieved more easily. Positive events
            are discounted, normalised, or attributed away. The internal
            self-model that results is a distortion \u2014 not a neutral
            record.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            An AI with persistent memory can intervene in this process in a
            specific and practical way. Every time you mention a win \u2014 a
            project completed, a difficult conversation navigated, a fear faced,
            a skill demonstrated \u2014 MEOK stores it. Not in a summary
            paragraph that loses detail, but in a retrievable record that you
            can surface and re-read. Over weeks, this becomes an evidence vault.
            Over months, it becomes something genuinely powerful: a factual
            counter-argument to the internal narrator that insists you have
            never really succeeded at anything.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The clinical parallel here is behavioural experiments in
            cognitive-behavioural therapy. One of the most effective CBT
            techniques for anxiety and low confidence is to ask the client to
            keep an explicit record of evidence that contradicts their core
            negative belief. Not to argue against the belief in the abstract,
            but to collect data. The data accumulates until the belief becomes
            harder to hold than its alternative.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            MEOK does this continuously, across every conversation. You
            don\u2019t have to remember to fill in a worksheet. You just talk,
            and MEOK listens for the evidence that you\u2019re already
            dismissing. When you say \u201cI somehow managed to get through the
            presentation\u201d, MEOK notes that you gave a presentation. When
            you say \u201cluckily it went okay\u201d, MEOK stores the outcome
            and has the capacity to surface it later when the inner voice
            insists you always fail under pressure.
          </p>

          {/* ── Sovereign Memory highlight ── */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: `1px solid rgba(201,168,76,0.22)`,
              borderRadius: "0.875rem",
              padding: "1.75rem 2rem",
              margin: "2.5rem 0",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "0.875rem",
              }}
            >
              Sovereign Memory
            </div>
            <p
              style={{
                color: "rgba(245,240,232,0.8)",
                lineHeight: 1.78,
                margin: 0,
                fontSize: "1rem",
              }}
            >
              MEOK\u2019s memory vault is end-to-end encrypted, belongs entirely
              to you, and is never used to train AI models. It persists across
              every session, building a longitudinal record of your growth. This
              is the technical foundation that makes genuine evidence-based
              confidence building possible \u2014 something no session-isolated
              AI can offer.
            </p>
          </div>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 4: The sycophancy danger
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            Why does sycophantic AI actually destroy confidence rather than
            build it?
          </h2>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            Sycophancy in AI is the tendency to tell users what they want to
            hear, to agree with their framing, to validate their decisions, and
            to praise their outputs regardless of actual quality. It is
            commercially rational: users who receive flattery stay longer, rate
            the product higher, and return more often. It is also, for
            confidence building, actively harmful.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The harm operates on two levels. The first is direct: if an AI
            tells you your presentation was excellent when it had significant
            structural gaps, you walk into the real presentation less prepared
            than you should be. The failure is then more complete, and the
            resulting data point \u2014 \u201cI failed even though I thought I
            was prepared\u201d \u2014 is more confidence-damaging than the
            original gap would have been.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The second level of harm is more insidious. The nervous system is
            remarkably good at detecting when praise is automatic and
            unconditional. Hollow validation from an AI registers, at some
            level, as meaningless \u2014 because it is. The user consciously
            enjoys the approval but unconsciously devalues it. Over time this
            creates an approval dependency: you need the AI to tell you
            you\u2019re good, but the telling no longer produces genuine
            confidence. You are trapped in a loop of seeking external validation
            that cannot satisfy the underlying need, because the underlying need
            is for evidence, not applause.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            This is why MEOK\u2019s Maternal Covenant includes an explicit
            anti-sycophancy commitment. MEOK will not praise you to keep you
            engaged. When it says something positive, it means it, and it can
            point to the evidence that supports it. When it offers a challenge
            or identifies a gap, it does so because the challenge serves your
            growth \u2014 not to be contrarian, but because genuine investment
            in someone\u2019s development sometimes requires honest assessment
            over comfortable noise.
          </p>

          <blockquote
            style={{
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.5rem",
              margin: "2.5rem 0",
              color: "rgba(245,240,232,0.78)",
              fontSize: "1.15rem",
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            The worst thing an AI can do for your confidence is tell you
            you\u2019re already great. The best thing it can do is show you the
            evidence that you\u2019re becoming great, and tell you honestly
            what\u2019s still missing.
          </blockquote>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 5: CBT approaches
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            How does CBT tackle negative self-talk, and how does AI replicate
            this?
          </h2>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            Cognitive-behavioural therapy approaches low confidence primarily
            through the concept of cognitive distortions \u2014 systematic
            errors in thinking that produce inaccurate and unhelpful
            self-assessments. The most common distortions in the confidence gap
            include catastrophising (expecting the worst outcome), mind-reading
            (assuming you know others\u2019 negative judgements), all-or-nothing
            thinking (any imperfection equals total failure), and discounting the
            positive (dismissing evidence of success as irrelevant or
            accidental).
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The CBT approach does not ask you to simply think positively. It
            asks you to think accurately. A thought like \u201cI\u2019m going to
            completely fail this interview\u201d is not challenged with
            \u201cno you\u2019re going to do brilliantly\u201d. It is challenged
            with evidence: What is the actual base rate of failure in interviews
            you have attended? What preparation have you done? What specific
            skills does this role require, and what evidence do you have of
            those skills? The goal is a more accurate prediction, which is almost
            always a less catastrophic one.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            MEOK\u2019s Scholar archetype is specifically built for this kind of
            work. The Scholar does not offer reassurance. It offers analysis.
            When you share a catastrophic self-prediction before a high-stakes
            event, the Scholar will ask what evidence supports that prediction,
            what evidence contradicts it, and what a more calibrated assessment
            would look like. This is not comfortable. It is useful.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            Crucially, this process requires memory. A CBT therapist tracks
            your history of predictions and outcomes across sessions. They can
            say: \u201cYou said exactly this before your last performance review,
            and the outcome was X. What does that tell us about this prediction?\u201d
            A session-isolated AI cannot do this. MEOK can, because Sovereign
            Memory persists across every conversation and the Scholar archetype
            can draw on it.
          </p>

          {/* ── Techniques card ── */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: "0.875rem",
              padding: "2rem",
              margin: "2.5rem 0",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "1.5rem",
              }}
            >
              CBT techniques MEOK uses for confidence
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                {
                  title: "Evidence logging",
                  desc: "Recording wins, skills demonstrated, and difficult situations navigated in Sovereign Memory to build an irrefutable evidence base over time.",
                },
                {
                  title: "Thought records",
                  desc: "Walking through the evidence for and against a catastrophic prediction to arrive at a more accurate, less fear-driven assessment.",
                },
                {
                  title: "Attribution retraining",
                  desc: "Identifying when success is being attributed to luck or context and gently surfacing the role that your own skill and effort played.",
                },
                {
                  title: "Behavioural experiments",
                  desc: "Designing small, specific actions that test a negative prediction in real life \u2014 the only way to generate the data that actually updates belief.",
                },
                {
                  title: "Decatastrophising",
                  desc: "Working through the actual likely consequences of a feared outcome to reveal that the catastrophe is survivable \u2014 and rarely as probable as it feels.",
                },
              ].map(({ title, desc }) => (
                <li
                  key={title}
                  style={{
                    display: "flex",
                    gap: "0.875rem",
                    marginBottom: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: GOLD,
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      lineHeight: 1.5,
                      flexShrink: 0,
                    }}
                  >
                    &#10003;
                  </span>
                  <div>
                    <span
                      style={{
                        fontWeight: 700,
                        color: TEXT,
                        fontSize: "0.95rem",
                      }}
                    >
                      {title}
                    </span>
                    <span
                      style={{
                        color: MUTED,
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {" — "}
                      {desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 6: Domain-specific confidence
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            How does confidence work differently across domains: public
            speaking, leadership, relationships, and interviews?
          </h2>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            One of the most useful reframes in confidence work is the
            recognition that confidence is always domain-specific. You do not
            have a general confidence level in the way you might have a general
            body temperature. You have confidence in specific activities,
            contexts, and roles \u2014 and that confidence is built, or not
            built, through domain-specific experience.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            A person can be deeply confident in their area of technical
            expertise and paralysed at the thought of speaking to a room of
            ten people. A natural public speaker can collapse under the
            interpersonal dynamics of leadership. An effective leader can feel
            totally exposed in the vulnerability required by an intimate
            relationship. These are not contradictions. They are the normal
            topography of a life where different domains have received very
            different amounts of practice.
          </p>

          {/* ── Domain cards ── */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem", margin: "2rem 0" }}>

            {/* Public speaking */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.75rem",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  color: GOLD,
                  fontSize: "1rem",
                  marginBottom: "0.875rem",
                  letterSpacing: "0.02em",
                }}
              >
                Public speaking
              </div>
              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.78,
                  margin: 0,
                  fontSize: "0.97rem",
                }}
              >
                Public speaking confidence is built through repetition in
                progressively higher-stakes settings. The problem for most
                people is that the jump from private rehearsal to public
                performance is enormous, and there are very few intermediate
                rungs on the ladder. MEOK provides a zero-judgment rehearsal
                space where you can practise the same talk ten times without
                social consequence, get specific feedback on what landed and
                what didn\u2019t, and work through the catastrophic
                self-predictions that activate before you walk into the room.
                The goal is not to eliminate nerves \u2014 activation is useful
                \u2014 but to have enough practice reps that the performance
                itself is familiar territory.
              </p>
            </div>

            {/* Leadership */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.75rem",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  color: GOLD,
                  fontSize: "1rem",
                  marginBottom: "0.875rem",
                  letterSpacing: "0.02em",
                }}
              >
                Leadership
              </div>
              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.78,
                  margin: 0,
                  fontSize: "0.97rem",
                }}
              >
                Leadership confidence is distinct because it requires acting
                decisively under uncertainty and being willing to be seen
                getting things wrong. Many technically excellent people
                struggle with leadership not because they lack the skills but
                because they hold an implicit belief that leaders are supposed
                to know the answer \u2014 and when they don\u2019t, it confirms
                their suspicion that they are impostors. MEOK\u2019s Pioneer
                archetype directly addresses this by building a record of
                decisions made, outcomes observed, and lessons extracted. The
                record itself becomes the evidence of leadership: you have been
                deciding and adapting, consistently, over time.
              </p>
            </div>

            {/* Relationships */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.75rem",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  color: GOLD,
                  fontSize: "1rem",
                  marginBottom: "0.875rem",
                  letterSpacing: "0.02em",
                }}
              >
                Relationships
              </div>
              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.78,
                  margin: 0,
                  fontSize: "0.97rem",
                }}
              >
                Relational confidence \u2014 the sense that you are worthy of
                connection, that you can express needs without driving people
                away, that you can be in conflict without the relationship
                ending \u2014 is among the hardest to build because the stakes
                feel existential. MEOK\u2019s approach here combines the
                evidence accumulation of Sovereign Memory with the reflective
                space of the Healer archetype. Practising difficult
                conversations in advance, processing relational events
                honestly afterwards, and building a record of relationships
                where you showed up authentically all contribute to a more
                stable sense of relational worth.
              </p>
            </div>

            {/* Interviews */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.75rem",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  color: GOLD,
                  fontSize: "1rem",
                  marginBottom: "0.875rem",
                  letterSpacing: "0.02em",
                }}
              >
                Interviews
              </div>
              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.78,
                  margin: 0,
                  fontSize: "0.97rem",
                }}
              >
                Interview confidence sits at the intersection of competence,
                self-narrative, and performance under observation. Most
                interview failures are not skill failures \u2014 they are
                confidence failures: the inability to articulate, compellingly
                and in the moment, the evidence of your own capability.
                MEOK\u2019s rehearsal room lets you simulate interview
                scenarios at any time of day or night, with MEOK playing the
                interviewer at whatever level of challenge you choose. After
                each run, MEOK can debrief specifically on what landed, what
                was vague, and what questions you avoided. Because Sovereign
                Memory persists, MEOK can track improvement across every
                session and surface the evidence of your progress when
                pre-interview anxiety tells you you\u2019re not getting better.
              </p>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 7: Pioneer archetype
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            What is the Pioneer archetype, and why is action the heart of
            confidence?
          </h2>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            MEOK is built around four distinct archetypes \u2014 the Healer,
            the Scholar, the Pioneer, and the Sage \u2014 each representing a
            different mode of support. The Pioneer is the archetype most
            directly associated with confidence building, because the Pioneer
            is fundamentally about action.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The insight behind the Pioneer is simple and backed by considerable
            evidence from behavioural psychology: confidence follows action, it
            does not precede it. The common assumption \u2014 \u201cI\u2019ll do
            it when I feel ready\u201d \u2014 reverses the actual causal
            sequence. Readiness is not a precondition for action. It is a
            product of action, available only in retrospect. The Pioneer
            companion operates on this principle absolutely.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            When you are in a paralysis loop \u2014 circling the same decision
            or the same fear without moving \u2014 the Pioneer does not offer
            analysis. It asks a specific question: what is the smallest action
            you could take in the next 24 hours? Not the action that would
            solve the problem. Not the action you\u2019d take if you were
            already confident. The smallest action. The one whose threshold is
            low enough that refusal requires active effort.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            This granularity matters. Paralysis is often maintained by an
            implicit belief that the only meaningful action is the full,
            visible, high-stakes one. The Pioneer dismantles this belief by
            identifying a series of intermediate steps, each of which is
            survivable. Over time, a streak of small actions builds its own
            momentum. Each completed step generates a data point \u2014 I did
            that \u2014 and a series of data points becomes a pattern, and a
            pattern becomes evidence, and evidence becomes confidence.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The Pioneer also holds accountability. Between sessions, the
            Pioneer remembers what you committed to, notices when you
            report back, and \u2014 without shame or judgement \u2014 asks what
            happened. This is not punitive. It is the same function a good
            training partner serves: the knowledge that someone is going to ask
            you whether you did the thing is often the margin between doing it
            and not. MEOK\u2019s Pioneer fills this role consistently and
            without the social complexity that can make human accountability
            relationships fraught.
          </p>

          {/* ── Pioneer feature highlights ── */}
          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              border: `1px solid rgba(201,168,76,0.2)`,
              borderRadius: "0.875rem",
              padding: "2rem",
              margin: "2.5rem 0",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    color: GOLD,
                    fontSize: "1.05rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  The Pioneer Companion
                </div>
                <div
                  style={{
                    color: "rgba(245,240,232,0.45)",
                    fontSize: "0.82rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Action &middot; Accountability &middot; Momentum
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                {
                  label: "Micro-step design",
                  body: "Breaks the threshold of action to its lowest possible point so that starting is easier than not starting.",
                },
                {
                  label: "Win logging",
                  body: "Records every completed action, however small, into Sovereign Memory to build a cumulative evidence trail.",
                },
                {
                  label: "Streak tracking",
                  body: "Maintains awareness of consecutive days of action to leverage the motivational power of a visible momentum pattern.",
                },
                {
                  label: "Accountability check-ins",
                  body: "Remembers commitments made and gently asks for an update in the following session without guilt or shame.",
                },
                {
                  label: "Outcome analysis",
                  body: "After actions are taken, debriefs on what happened, what you learned, and what the data point means for your self-model.",
                },
                {
                  label: "Paralysis diagnosis",
                  body: "Identifies the specific type of paralysis \u2014 perfectionism, fear of judgement, overwhelm \u2014 and applies the appropriate intervention.",
                },
              ].map(({ label, body }) => (
                <div key={label}>
                  <div
                    style={{
                      fontWeight: 700,
                      color: TEXT,
                      fontSize: "0.9rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {label}
                  </div>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.88rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 8: The honest model
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            What does an honest AI confidence model actually look like in
            practice?
          </h2>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The most frequent question MEOK receives from people considering
            whether it is right for them is some variant of: \u201cWill it just
            tell me what I want to hear?\u201d The concern is legitimate. Most
            AI companions have been trained, directly or indirectly, to maximise
            user satisfaction, and user satisfaction in the short term correlates
            more closely with agreement and flattery than with honest challenge.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            MEOK\u2019s answer is architectural rather than aspirational. The
            anti-sycophancy commitment is built into the Maternal Covenant that
            governs all responses \u2014 not as a stylistic preference but as a
            structural constraint. Every MEOK response is evaluated for honest
            engagement. Positive statements must be grounded in specific
            evidence. Challenges must be proportionate, specific, and
            growth-oriented. Agreement that has not been earned is flagged and
            suppressed.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            In practice, this means conversations with MEOK can feel different
            from what users expect from an AI. MEOK might respond to a
            self-critical spiral not with \u201cdon\u2019t be so hard on
            yourself\u201d but with \u201clet\u2019s look at what the evidence
            actually says about that claim.\u201d It might respond to a
            presentation draft not with \u201cthis is great!\u201d but with
            \u201cthe structure in the middle is strong, the opening needs a
            sharper hook, and there are three places where the argument assumes
            knowledge your audience probably doesn\u2019t have.\u201d
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            This is not hardness. It is respect. The implicit message in honest
            feedback is: I believe you can handle the truth and use it well. The
            implicit message in sycophancy is: I don\u2019t think you can handle
            anything real, so I\u2019ll give you something comfortable instead.
            The first builds confidence. The second infantilises.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 9: Who is this for
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            Who benefits most from AI confidence coaching?
          </h2>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            MEOK\u2019s approach to confidence is most effective for people who
            are already doing the work but not registering it. If you are
            showing up, building skills, navigating difficulty, and still
            feeling fundamentally uncertain about your own capability, the
            problem is almost certainly not a lack of competence. It is a
            misprocessing of evidence: a systematic failure to accumulate,
            retain, and believe the data that your own life is already
            generating.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            Specifically, MEOK tends to resonate with:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 1.5rem",
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.75rem",
            }}
          >
            {[
              "High achievers who feel like impostors regardless of external success",
              "People preparing for a significant career move or interview cycle",
              "First-generation professionals navigating unfamiliar institutional cultures",
              "Anyone returning to work after a career gap or period of illness",
              "People who have received consistently negative or conditional feedback and internalised it",
              "Those in leadership roles who have never felt fully entitled to be there",
              "Introverts who are regularly underestimated and have started to believe the assessment",
              "Neurodivergent people whose confidence has been eroded by years of being told they are wrong",
              "People who know intellectually that they are capable but cannot feel it",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  alignItems: "flex-start",
                  color: MUTED,
                  lineHeight: 1.72,
                  fontSize: "0.97rem",
                }}
              >
                <span
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    fontSize: "1rem",
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  &#8594;
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 10: What MEOK will not do
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            What will MEOK not do in confidence work?
          </h2>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            Being clear about limits is part of being honest. MEOK is not a
            clinical intervention. It does not diagnose, treat, or manage
            clinical anxiety disorders, social phobia, or any condition that
            requires professional medical oversight. If your low confidence is
            rooted in significant trauma, clinical-level depression, or an
            anxiety disorder that has substantially impaired your functioning,
            MEOK can be a useful parallel support \u2014 but it is not a
            replacement for qualified psychological treatment.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            MEOK will also not do the work for you. The Pioneer can design the
            smallest possible next action, but it cannot take it. The Scholar
            can challenge a catastrophic prediction, but you have to be willing
            to sit with the discomfort of having your thought patterns examined.
            Sovereign Memory can accumulate your wins, but you have to tell them
            \u2014 which requires noticing them in the first place. MEOK is a
            powerful companion for this work. It is not a passive solution.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 11: Getting started
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            How do I start building confidence with MEOK?
          </h2>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            The entry point that tends to produce the fastest shift is also
            the simplest: tell MEOK one win from the past seven days. Not a
            major achievement. Not something impressive. Just one thing you did
            that required something of you \u2014 a difficult email sent, an
            opinion stated, a task completed that you had been avoiding.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            MEOK will store it, contextualise it, and ask about the one before
            that. Over a few weeks of this, the evidence vault begins to
            populate with a version of you that you may have been systematically
            ignoring: a person who shows up, who navigates difficulty, who
            develops and adapts. That version of you has always been there. MEOK
            helps you see it without the distortion.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            From there, you can work with whichever combination of archetypes
            fits your current need. The Pioneer if you are in avoidance and need
            action. The Scholar if your confidence is being destroyed by
            catastrophic self-talk that needs evidence-based challenge. The
            Healer if the roots of your low confidence are in experiences that
            need to be processed rather than analysed. The Sage if you need
            perspective and broader context.
          </p>

          <p style={{ color: MUTED, lineHeight: 1.82, marginBottom: "1.25rem" }}>
            Confidence is a skill. You build it the way you build any other
            skill: through practice, through honest feedback, and through
            accumulating evidence that you can do the thing. MEOK is designed to
            support that process with more consistency, more honesty, and more
            memory than most people have access to in any other form.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              FAQ SECTION
          ──────────────────────────────────────────────────────────────── */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "rgba(201,168,76,0.12)",
              margin: "4rem 0 3rem",
            }}
          />

          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
              color: TEXT,
              lineHeight: 1.28,
              marginBottom: "2rem",
              letterSpacing: "-0.015em",
            }}
          >
            Frequently asked questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0" }}>
            {/* FAQ 1 */}
            <div
              style={{
                borderBottom: "1px solid rgba(245,240,232,0.08)",
                paddingBottom: "2rem",
                marginBottom: "2rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "1.05rem",
                  lineHeight: 1.45,
                  marginBottom: "0.875rem",
                }}
              >
                Can AI help build confidence?
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>
                Yes, when it is designed to do so honestly. AI can build
                confidence by accumulating evidence of your competence over
                time, rehearsing difficult scenarios so you enter them
                prepared, and challenging cognitive distortions that undermine
                self-belief. The critical condition is that the AI must be
                honest rather than sycophantic \u2014 hollow validation feels
                empty and creates approval dependency rather than internal
                evidence. MEOK\u2019s anti-sycophancy commitment and Sovereign
                Memory are built specifically to meet this condition.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                borderBottom: "1px solid rgba(245,240,232,0.08)",
                paddingBottom: "2rem",
                marginBottom: "2rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "1.05rem",
                  lineHeight: 1.45,
                  marginBottom: "0.875rem",
                }}
              >
                What is the confidence gap?
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>
                The confidence gap, documented by researchers Katty Kay and
                Claire Shipman, is the systematic tendency of intelligent and
                capable people to underestimate themselves relative to their
                actual ability. The gap is maintained by attribution asymmetry
                (crediting luck for success, blaming self for failure),
                catastrophic self-talk, perfectionism paralysis, and the
                comparison spiral. It is especially pronounced in people from
                backgrounds where confidence was not modelled \u2014
                first-generation professionals, women in male-dominated fields,
                neurodivergent people in neurotypical institutions.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                borderBottom: "1px solid rgba(245,240,232,0.08)",
                paddingBottom: "2rem",
                marginBottom: "2rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "1.05rem",
                  lineHeight: 1.45,
                  marginBottom: "0.875rem",
                }}
              >
                Will MEOK just validate me and tell me I\u2019m great?
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>
                No. MEOK\u2019s Maternal Covenant is an explicit architectural
                anti-sycophancy commitment \u2014 not a stylistic preference.
                When MEOK says something positive, it is grounded in specific
                evidence you have shared. When it offers a challenge, it is
                because the challenge serves your growth. Hollow validation
                actively harms confidence by creating approval dependency and
                because the nervous system detects unconditional praise as
                meaningless. MEOK is designed to offer the kind of honest,
                caring feedback you would want from a mentor who genuinely
                invested in your development.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                borderBottom: "1px solid rgba(245,240,232,0.08)",
                paddingBottom: "2rem",
                marginBottom: "2rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "1.05rem",
                  lineHeight: 1.45,
                  marginBottom: "0.875rem",
                }}
              >
                How does MEOK remember my wins?
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>
                MEOK uses Sovereign Memory \u2014 an encrypted, persistent
                memory vault that belongs entirely to you and is never used to
                train AI models. Every win you mention, positive feedback you
                share, or difficult situation you navigate is stored and can be
                surfaced later as a factual counter-argument to the inner voice
                that insists you have never succeeded. Over weeks this becomes
                an evidence file. Over months it becomes a longitudinal record
                of your growth that makes confidence claims feel grounded in
                reality rather than aspiration.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                paddingBottom: "2rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "1.05rem",
                  lineHeight: 1.45,
                  marginBottom: "0.875rem",
                }}
              >
                What is the Pioneer companion and how does it build confidence?
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>
                The Pioneer is one of MEOK\u2019s four archetypes, built around
                action, accountability, and momentum. Where other archetypes
                offer reflection and analysis, the Pioneer asks: what is the
                smallest next step, and when will you take it? Confidence is
                built through doing, not thinking about doing. The Pioneer
                breaks paralysis by making the threshold of action as low as
                possible, holds you accountable between sessions, logs every
                completed action into Sovereign Memory, and over time builds a
                streak of evidence that accumulates into genuine felt
                competence. You can explore the Pioneer and all four archetypes
                at{" "}
                <Link
                  href="/characters"
                  style={{ color: GOLD, textDecoration: "underline" }}
                >
                  meok.ai/characters
                </Link>
                .
              </p>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────────────
              CTA
          ──────────────────────────────────────────────────────────────── */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "rgba(201,168,76,0.12)",
              margin: "3.5rem 0",
            }}
          />

          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: `1px solid rgba(201,168,76,0.22)`,
              borderRadius: "1rem",
              padding: "2.5rem",
              textAlign: "center" as const,
            }}
          >
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "1rem",
              }}
            >
              Start building evidence
            </div>

            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: TEXT,
                lineHeight: 1.25,
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Your confidence has a data problem.
              <br />
              MEOK solves it.
            </h2>

            <p
              style={{
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "2rem",
                maxWidth: "36rem",
                margin: "0 auto 2rem",
              }}
            >
              Find out your archetype, meet the Pioneer, and start the process
              of building a confidence that holds under pressure \u2014 because
              it is grounded in evidence you can actually see.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: GOLD,
                  color: BG,
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Find your archetype &#8594;
              </Link>

              <Link
                href="/characters"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "transparent",
                  color: TEXT,
                  border: `1px solid rgba(245,240,232,0.22)`,
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Meet the Pioneer
              </Link>
            </div>
          </div>

          {/* ── Footer meta ── */}
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(245,240,232,0.07)",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.625rem",
                flexWrap: "wrap",
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              <span>Written by Nicholas Templeman</span>
              <span style={{ color: `${GOLD}44` }}>·</span>
              <span>MEOK AI LABS</span>
              <span style={{ color: `${GOLD}44` }}>·</span>
              <span>@meok_ai</span>
            </div>
            <Link
              href="/blog"
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.35)",
                textDecoration: "none",
              }}
            >
              &#8592; All posts
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
