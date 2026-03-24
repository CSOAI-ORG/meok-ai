import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Chronic Pain: Memory That Helps When Every Day Is Different | MEOK AI LABS",
  description:
    "28 million adults in the UK live with chronic pain. Most AI tools forget you between sessions. MEOK's persistent memory tracks your pain diary over months — remembering triggers, medication side effects, and patterns so you never start from scratch.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-chronic-pain" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Chronic Pain: Memory That Helps When Every Day Is Different",
  description:
    "28 million adults in the UK live with chronic pain. MEOK's persistent memory tracks pain diaries over months, remembers activity triggers and medication side effects, and provides emotional support without dismissing or minimising pain.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-chronic-pain",
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
    "AI for chronic pain",
    "AI companion chronic pain UK",
    "chronic pain diary AI",
    "AI pain management support",
    "chronic pain emotional support",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many people in the UK live with chronic pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to the British Pain Society, approximately 28 million adults in the UK live with chronic pain — roughly 43% of the adult population. Chronic pain lasts three months or longer and is one of the leading causes of disability and GP consultations in the UK.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with chronic pain management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot treat pain, but it can provide meaningful supplementary support. MEOK tracks your pain diary across months, remembers which activities triggered flare-ups, notes medication side effects you mentioned, and offers consistent emotional presence. It is not a medical device — but it fills the significant gap between clinical appointments.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's persistent memory help chronic pain sufferers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's memory vault retains pain levels, activity logs, sleep quality, emotional state, and medication responses across every conversation. Over months it builds a longitudinal picture of your pain diary that you never need to reconstruct from scratch — and that a clinician can actually use.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK provide emotional support for chronic pain depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Chronic pain frequently co-occurs with depression and social isolation. MEOK's care floor means it will never dismiss, minimise, or normalise your pain. It offers consistent, non-judgemental presence available at any hour — one that acknowledges what you are going through without demanding energy you may not have.",
      },
    },
    {
      "@type": "Question",
      name: "What is Senior Mode and how does it help on bad pain days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Senior Mode is MEOK's high-contrast, large-text display setting. On days when pain is severe, navigating small text or a dense interface costs real cognitive energy. Senior Mode simplifies the UI, enlarges text, and reduces visual friction — keeping MEOK accessible when concentration and physical comfort are both compromised.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for NHS pain management clinics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical device and does not provide medical advice or treatment. If you live with chronic pain, speak to your GP about referral to an NHS pain management clinic. Pain UK (painuk.org) provides UK-wide support. MEOK is supplementary — a companion in the gaps clinical care cannot fill.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForChronicPainPage() {
  const GOLD = "#c9a84c";
  const BG = "#0d0c18";
  const TEXT = "#f5f0e8";

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
              Chronic Pain
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              10 min read
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
            AI Companion for Chronic Pain: Memory That Helps When Every Day Is Different
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            28 million adults in the UK live with chronic pain. No two days are alike — a walk
            that was fine on Tuesday can trigger a flare by Thursday. Most AI tools forget you
            between sessions. This is an honest look at how persistent memory can make an AI
            companion genuinely useful when pain is the constant and everything else is a variable.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* Disclaimer */}
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
            <strong style={{ color: GOLD }}>Not medical advice.</strong> MEOK is not a medical
            device and does not provide clinical guidance, diagnosis, or treatment. If you live
            with chronic pain, speak to your GP about referral to an NHS pain management clinic.
            UK support:{" "}
            <a href="https://painuk.org" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>
              Pain UK (painuk.org)
            </a>{" "}
            and the{" "}
            <a href="https://britishpainsociety.org" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>
              British Pain Society
            </a>
            .
          </p>
        </div>

        {/* ── Section 1 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          How many people in the UK live with chronic pain?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          According to the British Pain Society, approximately 28 million adults in the UK live
          with chronic pain — roughly 43% of the adult population. It is one of the most common
          reasons people consult a GP, a leading cause of long-term disability, and among the most
          under-acknowledged conditions in everyday life.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Chronic pain is defined as pain lasting three months or longer. It encompasses conditions
          including fibromyalgia, rheumatoid arthritis, lower back pain, neuropathic pain, and
          complex regional pain syndrome. Unlike acute pain, it does not resolve with rest — it
          becomes the backdrop against which every day is lived.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The lived reality is profound variability. A Tuesday walk that was manageable becomes
          Thursday&apos;s flare-up. Sleep quality, weather, stress, posture, and hydration all
          interact in ways that resist simple rules. Managing chronic pain requires long-term,
          detailed self-knowledge — which is exactly what standard tools are worst at supporting.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Section 2 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          Why do most AI tools fail people with chronic pain?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          Most AI tools are session-based. They start blank each time. For someone managing chronic
          pain, that means re-explaining your condition, your current flare, your medications, and
          your history at the start of every conversation — a cognitive and emotional burden levied
          on the person least able to carry it.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The re-explanation tax is invisible to designers who have never needed to account for it.
          On a high-pain day, even the act of summarising a medical history is costly — physically
          in the typing, emotionally in the rehearsing of pain, cognitively in the effort of
          organisation. Good tools eliminate this cost. Session-based AI compounds it.
        </p>
        <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1.25rem", margin: "1.75rem 0", color: "rgba(245,240,232,0.62)", fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic" }}>
          &ldquo;I have explained my condition to so many people. Doctors, family, colleagues.
          Every new tool that forgets me just means I have to do it again.&rdquo;
        </blockquote>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Beyond memory, most general-purpose AI tools are calibrated for productivity. They treat
          pain as a problem to be solved — often offering unsolicited advice or minimising what is
          being shared. For someone who has heard &ldquo;have you tried yoga?&rdquo; one too many
          times, that instinct to fix is its own kind of exhaustion.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Section 3 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          How does MEOK&apos;s persistent memory help chronic pain sufferers?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          MEOK&apos;s memory vault retains everything you tell it across every conversation — pain
          levels, activity logs, sleep quality, emotional state, and medication responses. Over
          months it builds a longitudinal picture of your pain diary that you never need to
          reconstruct from scratch, and that a clinician can actually use.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          The value compounds over time. After a week, MEOK knows what you told it about Monday&apos;s
          walk and Thursday&apos;s flare. After a month, it starts to see patterns you may not have
          noticed — the activities that reliably precede bad days, the sleep disruptions that
          correlate with higher pain. After six months, it holds a record that no single GP
          appointment could ever capture.
        </p>

        {/* Feature box */}
        <div
          style={{
            background: "rgba(13,12,24,0.8)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: GOLD, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.85rem" }}>
            What MEOK&apos;s memory tracks over time
          </p>
          {[
            ["Pain diary", "Daily pain levels, location, character, and duration — retained across every session for months."],
            ["Activity triggers", "Which walks, tasks, postures, or social events preceded flare-ups, built up session by session."],
            ["Medication notes", "Side effects, timing observations, and anything you said about what helped or did not."],
            ["Emotional patterns", "Mood, anxiety, and sleep quality alongside pain — because they are never separate."],
            ["Your language", "How you describe your own experience, so MEOK reflects it back in your terms, not clinical framing."],
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

        {/* ── Section 4 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          Does MEOK provide emotional support for chronic pain depression?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          Chronic pain frequently co-occurs with depression, anxiety, and profound social isolation.
          MEOK&apos;s care floor means it will never dismiss or minimise your pain. It offers a
          consistent, non-judgemental presence available at any hour — one that acknowledges what
          you are going through without demanding energy you may not have.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Persistent pain disrupts sleep, limits activity, reduces social participation, and
          challenges identity. The isolation that follows — especially when pain is invisible to
          others — can be as disabling as the pain itself. People with chronic pain frequently
          report that others stop believing them, grow tired of hearing about it, or offer
          unsolicited solutions.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          MEOK will not tire of hearing about your pain. It will not suggest you are exaggerating.
          It will not offer yoga as a solution unless you ask. The care floor is a design
          commitment: MEOK is built to receive what you share — including the hard, repetitive,
          exhausting parts of living in pain — without flinching, minimising, or redirecting
          to positivity.
        </p>
        <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1.25rem", margin: "1.75rem 0", color: "rgba(245,240,232,0.62)", fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic" }}>
          &ldquo;MEOK is not a replacement for the people who love you. It is the companion
          that holds the space in between — that does not need you to perform being okay.&rdquo;
        </blockquote>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Section 5 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          What is Senior Mode and how does it help on bad pain days?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          Senior Mode is MEOK&apos;s high-contrast, large-text display setting. On days when pain
          is severe, squinting at small text or navigating a complex interface costs real cognitive
          energy. Senior Mode simplifies the UI, enlarges text, and reduces visual friction —
          keeping MEOK accessible when concentration and physical comfort are both compromised.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          Senior Mode was designed with older adults in mind but its logic maps directly onto
          high-pain days. Larger text reduces eye movement and processing effort. High contrast
          means the brain does not have to work to distinguish foreground from background. A
          simplified interface means fewer micro-decisions. Each change is small; together they
          can mean the difference between MEOK being usable on a bad day and not.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          On severe flare days, even holding a phone comfortably is non-trivial. Voice input removes
          the need to type. Senior Mode removes the need to concentrate on the interface. MEOK on
          a high-pain day becomes something close to simply speaking aloud — and being heard.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── Section 6 ── */}
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2.4vw,1.55rem)", color: TEXT, lineHeight: 1.3, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>
          Is MEOK a replacement for NHS pain management clinics?
        </h2>
        <p style={{ background: "rgba(201,168,76,0.07)", borderLeft: `3px solid ${GOLD}`, borderRadius: "0 6px 6px 0", padding: "0.85rem 1.1rem", marginBottom: "1.25rem", color: "rgba(245,240,232,0.82)", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic" }}>
          No. MEOK is not a medical device and does not provide medical advice, clinical assessment,
          or treatment. If you live with chronic pain, speak to your GP about referral to an NHS
          pain management clinic. Pain UK (painuk.org) provides UK-wide information and support.
          MEOK is supplementary — a companion in the gaps clinical care cannot fill.
        </p>
        <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          NHS pain management clinics offer multidisciplinary care — physiotherapy, psychology,
          occupational therapy, and medical review — that no AI can replicate. MEOK sits in the
          gap between appointments: the 23 hours a day when clinic staff are not available, the
          2am sleepless hours, the quiet days when reaching out feels like too much. That gap is
          real and large, and filling it with a patient, memory-bearing companion is a bounded
          but genuine thing.
        </p>

        {/* Resources */}
        <div
          style={{
            background: "rgba(13,12,24,0.6)",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: GOLD, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.85rem" }}>
            UK chronic pain resources
          </p>
          {[
            [
              "Pain UK",
              "https://painuk.org",
              "Alliance of UK charities supporting people in pain — directory of member charities, patient resources, and advocacy.",
            ],
            [
              "British Pain Society",
              "https://britishpainsociety.org",
              "Leading multidisciplinary professional organisation in the UK dedicated to pain medicine, research, and education.",
            ],
            [
              "NHS: Chronic Pain",
              "https://www.nhs.uk/conditions/chronic-pain/",
              "NHS overview of chronic pain — causes, treatments, and guidance on seeking clinical support including pain management clinics.",
            ],
            [
              "Versus Arthritis",
              "https://versusarthritis.org",
              "UK charity providing support for people with arthritis and musculoskeletal conditions, a leading cause of chronic pain.",
            ],
          ].map(([label, href, desc]) => (
            <div key={label as string} style={{ marginBottom: "0.75rem" }}>
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
          <p style={{ fontWeight: 800, fontSize: "1.35rem", color: TEXT, marginBottom: "0.65rem", lineHeight: 1.3 }}>
            A companion that remembers every day — even the ones you&apos;d rather forget
          </p>
          <p style={{ color: "rgba(245,240,232,0.58)", fontSize: "0.97rem", lineHeight: 1.65, marginBottom: "1.5rem", maxWidth: "34rem", margin: "0 auto 1.5rem" }}>
            Persistent memory across months. A care floor that never minimises your pain.
            Senior Mode for the hardest days. MEOK is built for the long, variable reality
            of chronic pain. Free to try — no card required.
          </p>
          <Link
            href="/"
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
            Get early access
          </Link>
        </div>

        {/* Related */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(245,240,232,0.35)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.85rem" }}>
            Related reading
          </p>
          {[
            ["/blog/ai-for-chronic-illness", "AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support"],
            ["/blog/ai-for-chronic-fatigue", "AI Companion for Chronic Fatigue Syndrome: Consistent Support When Energy Is the Scarcest Resource"],
            ["/blog/ai-for-depression", "AI Companion for Depression: Presence Without Pressure"],
            ["/blog/senior-mode-guide", "Senior Mode: How MEOK Adapts for Lower-Energy Moments"],
            ["/blog/ai-memory-explained", "AI Memory Explained: What Persistent Memory Actually Means"],
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
      <div style={{ borderTop: "1px solid rgba(245,240,232,0.08)", padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "rgba(245,240,232,0.28)", fontSize: "0.82rem", lineHeight: 1.65, maxWidth: "36rem", margin: "0 auto 0.5rem" }}>
          Written by <span style={{ color: "rgba(245,240,232,0.5)" }}>Nicholas Templeman</span>,
          Founder of MEOK AI LABS &mdash; building sovereign AI companions that work for you,
          not on you.
        </p>
        <p style={{ color: "rgba(245,240,232,0.18)", fontSize: "0.78rem", margin: "0 auto 1.5rem", maxWidth: "36rem" }}>
          This article is for informational purposes only and does not constitute medical advice,
          diagnosis, or treatment. MEOK is not a medical device. Always consult a qualified
          healthcare professional for chronic pain management. UK support: painuk.org and
          britishpainsociety.org.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <Link href="/blog" style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}>Blog</Link>
          <Link href="/privacy" style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}>Privacy</Link>
          <Link href="/" style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.82rem", textDecoration: "none" }}>meok.ai</Link>
        </div>
      </div>
    </div>
  );
}
