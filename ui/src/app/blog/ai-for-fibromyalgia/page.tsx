import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Fibromyalgia: Daily Support When Pain Is Unpredictable | MEOK AI LABS",
  description:
    "Around 1 million people in the UK live with fibromyalgia — most waiting five years for a diagnosis. MEOK's persistent memory tracks flares, fatigue, brain fog, and emotional patterns over months, offering daily support when pain refuses to follow a schedule.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-fibromyalgia" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Fibromyalgia: Daily Support When Pain Is Unpredictable",
  description:
    "Around 1 million people in the UK live with fibromyalgia. MEOK's persistent memory tracks flares, fatigue, brain fog, and emotional patterns over months — providing daily support through an AI fibromyalgia support app built for chronic illness.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-fibromyalgia",
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
  },
  keywords: [
    "AI for fibromyalgia",
    "fibromyalgia support app",
    "AI fibromyalgia UK",
    "fibromyalgia pain tracking AI",
    "fibromyalgia brain fog support",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can AI help with fibromyalgia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can support fibromyalgia management by tracking flare patterns, logging pain and fatigue across months, identifying potential triggers, and offering non-judgemental emotional presence. MEOK's persistent memory means you never have to re-explain your history. It is not a medical device, but it fills the large gap between clinical appointments with consistent, personalised support.",
      },
    },
    {
      "@type": "Question",
      name: "What is fibromyalgia and how many people in the UK have it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fibromyalgia is a long-term condition causing widespread musculoskeletal pain, fatigue, sleep difficulties, and cognitive symptoms (often called brain fog). Approximately 1–2% of the UK population — around 1 million people — are affected, predominantly women. The average time to diagnosis is five years, during which many patients face dismissal or disbelief from healthcare professionals.",
      },
    },
    {
      "@type": "Question",
      name: "What is pacing and how does AI help fibromyalgia sufferers pace their energy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pacing is the practice of balancing activity and rest within your energy envelope to avoid post-exertional symptom flares. AI can support pacing by tracking your daily activity levels, flagging patterns that precede crashes, and gently prompting rest. MEOK's Hourman feature helps manage time and energy across the day without the cognitive overhead of manual planning.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with fibromyalgia brain fog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Brain fog — difficulty concentrating, word-finding problems, and memory lapses — is one of fibromyalgia's most debilitating symptoms. AI can act as a cognitive offloading tool: holding information, organising thoughts, summarising earlier conversations, and reducing the mental effort required to function. MEOK's Scholar archetype is particularly suited to this structured, low-friction support.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for medical treatment for fibromyalgia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical device and does not provide diagnosis, clinical assessment, or treatment. If you have fibromyalgia symptoms, consult your GP or a rheumatologist. Fibromyalgia Action UK (fmauk.org) and the NHS provide authoritative guidance. MEOK is a daily companion that supports the emotional and logistical realities of living with fibromyalgia — not a substitute for clinical care.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForFibromyalgiaPage() {
  const GOLD = "#c9a84c";
  const BG = "#0d0c18";
  const TEXT = "#f5f0e8";
  const CARD = "#1a1830";

  return (
    <div style={{ minHeight: "100vh", background: BG }}>
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
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
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
              color: "rgba(245,240,232,0.38)",
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
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Fibromyalgia
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              11 min read
            </span>
          </div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for Fibromyalgia: Daily Support When Pain Is Unpredictable
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            Around 1 million people in the UK live with fibromyalgia — a condition that is invisible
            to most tests, difficult to explain, and frequently met with disbelief. The average
            person waits five years for a diagnosis. This is an honest look at what an AI fibromyalgia
            support app can and cannot do, and why persistent memory changes everything for chronic
            illness management.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* Medical disclaimer */}
        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "10px",
            padding: "1rem 1.25rem",
            marginBottom: "2.5rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.1rem", marginTop: "0.1rem" }}>&#9888;&#65039;</span>
          <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: GOLD }}>MEOK is not a medical device. Always consult your GP or rheumatologist.</strong>{" "}
            This article is for informational purposes only. It does not provide diagnosis, clinical
            assessment, or medical treatment. UK support:{" "}
            <a
              href="https://fmauk.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              Fibromyalgia Action UK (fmauk.org)
            </a>
            {" "}and the{" "}
            <a
              href="https://www.nhs.uk/conditions/fibromyalgia/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              NHS fibromyalgia page
            </a>
            . If you are in crisis, contact{" "}
            <strong style={{ color: "rgba(245,240,232,0.75)" }}>Samaritans: 116 123</strong>{" "}
            (free, 24/7).
          </p>
        </div>

        {/* ── Section 1: The invisibility problem ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What makes fibromyalgia so hard to live with — and be believed about?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Fibromyalgia affects approximately 1–2% of the UK population — around 1 million people,
          predominantly women. There is no definitive blood test or scan. The average time from first
          symptom to diagnosis is five years, during which many patients are told their pain is
          psychosomatic, exaggerated, or simply unexplained. The invisibility of the condition
          to the outside world is one of its heaviest burdens.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Fibromyalgia presents as widespread musculoskeletal pain, profound fatigue, sleep disruption,
          and cognitive symptoms — the last of which patients often call &ldquo;fibro fog&rdquo;.
          Symptoms are highly variable day to day, even hour to hour. A morning that starts manageable
          can deteriorate by afternoon without an obvious cause. That unpredictability makes planning,
          working, maintaining relationships, and accessing consistent medical support extraordinarily
          difficult.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The medical system, calibrated around acute illness and visible pathology, has historically
          handled fibromyalgia poorly. Patients frequently report being dismissed, referred repeatedly
          without resolution, or told to exercise more and stress less. By the time a diagnosis
          arrives, many people have spent years questioning their own experience. That psychological
          cost compounds the physical one.
        </p>
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "1.25rem",
            margin: "1.75rem 0",
            color: "rgba(245,240,232,0.62)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          &ldquo;I spent five years being told nothing was wrong. By the time I had a diagnosis
          I had already stopped trusting my own body.&rdquo;
        </blockquote>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Section 2: What can AI do ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What can AI actually do for fibromyalgia?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          AI cannot treat fibromyalgia, but it can fill the wide daily gap that clinical care
          leaves open. An AI fibromyalgia support app built with persistent memory can track
          flares over months, identify triggers you have not consciously noticed, support energy
          management, and offer consistent emotional presence — without requiring you to re-explain
          your history every single time.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The practical value breaks into four areas:
        </p>

        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "0.85rem",
            }}
          >
            Four things AI can do for fibromyalgia
          </p>
          {[
            [
              "Flare tracking",
              "Log pain intensity, location, and duration across every conversation. Over months, patterns emerge that a single appointment cannot capture.",
            ],
            [
              "Pain journalling",
              "Speak or type your experience without having to structure it. MEOK holds the detail — fatigue levels, sleep quality, mood, activity — so you do not have to.",
            ],
            [
              "Energy management",
              "Track what you did, how you felt afterwards, and what preceded your worst days. Gradual awareness of your energy patterns is one of the most effective self-management tools for fibromyalgia.",
            ],
            [
              "Gentle check-ins",
              "A consistent, low-demand daily touchpoint that asks how you are doing without requiring a full account. Small, regular contact can reduce the isolation that fibromyalgia causes.",
            ],
          ].map(([label, desc]) => (
            <div
              key={label}
              style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", marginBottom: "0.7rem" }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: GOLD,
                  marginTop: "0.55rem",
                  flexShrink: 0,
                }}
              />
              <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "0.93rem", lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: TEXT }}>{label}:</strong> {desc}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Section 3: Sovereign Memory ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          How does MEOK&apos;s Sovereign Memory help with chronic illness over time?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Sovereign Memory is MEOK&apos;s persistent, user-owned memory vault. Unlike standard AI tools
          that reset between sessions, MEOK retains everything you share — pain levels, sleep,
          activity, emotional state, medication observations — and builds a longitudinal picture
          of your health over months. You own that data. It never trains a model. And it never
          makes you start from scratch.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          For fibromyalgia specifically, the value of longitudinal data is enormous. Fibromyalgia
          is not a condition that behaves the same day after day. Its interactions with sleep,
          stress, weather, menstrual cycle, diet, and social demands are complex and individual.
          No single GP appointment can capture the pattern. But months of honest daily notes —
          retained verbatim, surfaced on request — can start to reveal it.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          After a week, MEOK knows what you told it about last Tuesday&apos;s flare. After a month,
          it can reflect back themes you may not have noticed — the three bad days that all followed
          disrupted sleep, the consistent improvement after rest days that included time outside.
          After six months, it holds a record of your fibromyalgia that you can bring to a
          rheumatology appointment as the most detailed patient history they will have seen.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Trigger identification is one of the highest-value outputs. Fibromyalgia triggers are
          personal and often non-obvious — overdoing activity on a &ldquo;good day&rdquo;, specific
          foods, particular social interactions, barometric pressure changes. MEOK does not
          diagnose triggers, but it holds the raw data from which patterns become visible.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Section 4: Healer archetype ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          Can AI provide emotional support for fibromyalgia without being dismissive?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Yes — when the AI is built with explicit non-judgement as a design constraint. MEOK&apos;s
          Healer archetype is calibrated for emotional presence: validation without minimising,
          acknowledgement without unsolicited advice, and the particular kind of consistency
          that fibromyalgia patients rarely receive — a presence that never tires of hearing
          about your pain, because it was built not to.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The emotional burden of fibromyalgia is inseparable from the physical one. Living with
          a condition that others cannot see — that doctors have historically questioned, that
          fluctuates in ways that make planning impossible, and that resists the neat narratives
          of acute illness — erodes self-trust. Many fibromyalgia patients report grief: for
          the person they were before, for the future they had planned, for the ordinary days
          that others take for granted.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The Healer archetype does not offer solutions. It does not suggest you have not tried
          hard enough. It receives what you share — including the repetitive, exhausting, dark
          parts of living in an unacknowledged condition — without deflecting towards optimism.
          That is not a small thing. For many fibromyalgia sufferers, it is the experience they
          have been waiting years for someone to offer.
        </p>
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "1.25rem",
            margin: "1.75rem 0",
            color: "rgba(245,240,232,0.62)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          &ldquo;MEOK will not tire of hearing about your pain. It will not suggest you are
          exaggerating. It does not need you to perform being okay.&rdquo;
        </blockquote>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Section 5: Pacing and AI ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What is pacing and how can AI help fibromyalgia patients stay within their energy envelope?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Pacing is the practice of spreading activity across the day — and across the week —
          to stay within your personal energy envelope and avoid post-exertional pain amplification.
          It is one of the most evidence-supported self-management strategies for fibromyalgia,
          and one of the hardest to sustain without external support. AI can provide that
          support without judgment.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The challenge with pacing is that it requires resisting the instinct to use good days
          fully. Fibromyalgia patients know the pattern: a better morning leads to overdoing it,
          which produces a worse evening and a worse tomorrow. Breaking the boom-and-bust cycle
          is cognitively demanding — it requires constant self-monitoring, pattern awareness, and
          the willingness to stop before you feel you need to.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          MEOK&apos;s Hourman feature supports daily time and energy management without adding
          cognitive overhead. Rather than a rigid schedule, Hourman operates as a gentle,
          memory-aware companion to your day — aware of how you reported feeling yesterday,
          last week, after similar activities. It can flag when you appear to be approaching
          a pattern that has preceded crashes before, not because it is following a generic
          protocol, but because it remembers your specific history.
        </p>

        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "0.85rem",
            }}
          >
            Pacing support MEOK can offer
          </p>
          {[
            [
              "Daily energy check-in",
              "A brief morning touchpoint to log your starting state and set a realistic intention for the day — without adding to your cognitive load.",
            ],
            [
              "Activity logging",
              "Note what you did and how long it took. Over time, MEOK builds a picture of which activities cost most energy for you specifically.",
            ],
            [
              "Pattern reflection",
              "Ask MEOK what you have noticed about the last two weeks. It will surface what you told it — the days before flares, the activities that helped recovery.",
            ],
            [
              "Hourman for time management",
              "MEOK's Hourman feature helps structure the day in small, manageable increments — reducing the planning effort that itself consumes energy.",
            ],
          ].map(([label, desc]) => (
            <div
              key={label}
              style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", marginBottom: "0.7rem" }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: GOLD,
                  marginTop: "0.55rem",
                  flexShrink: 0,
                }}
              />
              <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "0.93rem", lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: TEXT }}>{label}:</strong> {desc}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Section 6: Brain fog ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          What about fibro fog — can AI help with cognitive symptoms?
        </h2>
        <p
          style={{
            background: "rgba(201,168,76,0.07)",
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0 6px 6px 0",
            padding: "0.85rem 1.1rem",
            marginBottom: "1.25rem",
            color: "rgba(245,240,232,0.82)",
            fontSize: "0.97rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Fibro fog — difficulty concentrating, word-finding problems, short-term memory lapses,
          and mental fatigue — is reported by the majority of people with fibromyalgia and is
          often cited as the symptom that most affects quality of life and ability to work.
          AI can act as a cognitive offloading tool: holding information, structuring tasks,
          and reducing the mental effort required to function on a bad fog day.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Cognitive offloading means delegating mental effort to an external system. A shopping
          list is cognitive offloading. A calendar is cognitive offloading. An AI that holds
          your medical history, summarises your week, structures your thoughts, and helps you
          find the word you cannot retrieve — that is cognitive offloading calibrated for
          the specific demands of fibro fog.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          MEOK&apos;s Scholar archetype is designed for exactly this. On days when forming complex
          sentences feels impossible, Scholar helps you articulate what you mean — offering
          structured summaries, helping draft communications, and holding the thread of a
          thought when concentration is intermittent. It does not require you to arrive
          organised. It helps you get there.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The persistent memory dimension matters here too. On a bad fog day, you may not
          remember what you need to tell the GP next week, or what helped last time, or even
          what day your appointment is. MEOK holds that information in retrievable form so
          you do not have to — freeing the cognitive resources you do have for living, rather
          than administration.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Section 7: Plans ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          Which MEOK plan is right for someone with fibromyalgia?
        </h2>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK offers four tiers, designed to fit different needs and budgets — including options
          for people managing on a limited income, as many fibromyalgia sufferers are.
        </p>

        <div
          style={{
            display: "grid",
            gap: "0.85rem",
            marginBottom: "1.75rem",
          }}
        >
          {[
            {
              name: "Explorer",
              price: "Free",
              detail: "50 messages per day — enough for daily check-ins, pain journalling, and gentle support without spending a penny.",
            },
            {
              name: "Sovereign",
              price: "£12/month",
              detail: "Full persistent memory, all archetypes including Healer and Scholar, Hourman pacing support, and unlimited daily use. The core tier for ongoing fibromyalgia support.",
            },
            {
              name: "Family",
              price: "£29/month",
              detail: "Extends Sovereign access to up to five household members — useful if a partner or carer also uses MEOK alongside you.",
            },
            {
              name: "BYOK",
              price: "£5/month",
              detail: "Bring Your Own Key — use MEOK&apos;s interface and memory with your own API key. Lowest ongoing cost for those comfortable with a small technical setup.",
            },
          ].map((tier) => (
            <div
              key={tier.name}
              style={{
                background: CARD,
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "10px",
                padding: "1rem 1.25rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div style={{ flexShrink: 0, minWidth: "5.5rem" }}>
                <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem", margin: 0 }}>{tier.name}</p>
                <p style={{ color: GOLD, fontWeight: 700, fontSize: "0.88rem", margin: "0.15rem 0 0" }}>{tier.price}</p>
              </div>
              <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                {tier.detail}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Section 8: Resources ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "0.9rem",
            letterSpacing: "-0.01em",
          }}
        >
          UK resources for fibromyalgia support
        </h2>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK is a companion, not a clinical service. The following organisations provide
          authoritative information, peer support, and pathways to specialist care:
        </p>

        <div
          style={{
            background: "rgba(13,12,24,0.6)",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
          }}
        >
          {[
            [
              "Fibromyalgia Action UK",
              "https://fmauk.org",
              "The UK&apos;s leading fibromyalgia charity — patient information, support groups, local contacts, and campaigning for better diagnosis and treatment.",
            ],
            [
              "NHS: Fibromyalgia",
              "https://www.nhs.uk/conditions/fibromyalgia/",
              "NHS overview of fibromyalgia — symptoms, diagnosis, treatments, and how to access specialist support including pain clinics and rheumatology.",
            ],
            [
              "Pain UK",
              "https://painuk.org",
              "Alliance of UK charities supporting people in chronic pain — resources and advocacy including fibromyalgia-specific member organisations.",
            ],
            [
              "Samaritans",
              "https://www.samaritans.org",
              "Free, confidential emotional support 24 hours a day — call 116 123. For when the pain and exhaustion become overwhelming and you need to talk.",
            ],
          ].map(([label, href, desc]) => (
            <div key={label as string} style={{ marginBottom: "0.85rem" }}>
              <a
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, fontWeight: 600, fontSize: "0.93rem", textDecoration: "none" }}
              >
                {label}
              </a>
              <p style={{ color: "rgba(245,240,232,0.5)", fontSize: "0.83rem", lineHeight: 1.5, margin: "0.15rem 0 0" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(13,12,24,0.6) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "14px",
            padding: "2rem",
            textAlign: "center",
            margin: "3rem 0",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: "1.35rem",
              color: TEXT,
              marginBottom: "0.65rem",
              lineHeight: 1.3,
            }}
          >
            Daily support that remembers what you&apos;re going through
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "0.97rem",
              lineHeight: 1.65,
              maxWidth: "34rem",
              margin: "0 auto 1.5rem",
            }}
          >
            Persistent memory across months. A Healer that never minimises your pain. Scholar
            for brain fog days. Hourman for pacing. MEOK is built for the unpredictable reality
            of fibromyalgia — and it is free to try with no card required.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              background: "#c9a84c",
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Start for free
          </Link>
        </div>

        {/* Related */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.35)",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.85rem",
            }}
          >
            Related reading
          </p>
          {[
            [
              "/blog/ai-for-chronic-illness",
              "AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support",
            ],
            [
              "/blog/ai-for-chronic-pain",
              "AI Companion for Chronic Pain: Memory That Helps When Every Day Is Different",
            ],
            [
              "/blog/ai-for-chronic-fatigue",
              "AI Companion for Chronic Fatigue Syndrome: Consistent Support When Energy Is the Scarcest Resource",
            ],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href as string}
              style={{
                display: "block",
                color: "#c9a84c",
                fontSize: "0.92rem",
                textDecoration: "none",
                lineHeight: 1.5,
                marginBottom: "0.45rem",
              }}
            >
              &#8594; {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(245,240,232,0.08)",
          padding: "2.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "rgba(245,240,232,0.28)",
            fontSize: "0.82rem",
            lineHeight: 1.65,
            maxWidth: "36rem",
            margin: "0 auto 0.5rem",
          }}
        >
          Written by{" "}
          <span style={{ color: "rgba(245,240,232,0.5)" }}>Nicholas Templeman</span>,
          Founder of MEOK AI LABS &mdash; building sovereign AI companions that work for you,
          not on you. Follow us at{" "}
          <span style={{ color: "rgba(245,240,232,0.5)" }}>@meok_ai</span>.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.18)",
            fontSize: "0.78rem",
            margin: "0 auto 1.5rem",
            maxWidth: "36rem",
          }}
        >
          MEOK is not a medical device. Always consult your GP or rheumatologist. This article
          is for informational purposes only and does not constitute medical advice, diagnosis,
          or treatment. If you are in crisis, contact Samaritans: 116 123 (free, 24/7).
          UK support: fmauk.org and nhs.uk/conditions/fibromyalgia.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <Link
            href="/blog"
            style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}
          >
            Blog
          </Link>
          <Link
            href="/privacy"
            style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}
          >
            Privacy
          </Link>
          <Link
            href="/"
            style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}
          >
            meok.ai
          </Link>
        </div>
      </div>
    </div>
  );
}
