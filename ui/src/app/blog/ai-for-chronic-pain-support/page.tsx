import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Companion for Chronic Pain: Support When You Need It Most | MEOK AI LABS",
  description:
    "Living with fibromyalgia, arthritis, or chronic back pain is exhausting. MEOK offers emotional support, flare-up tracking, medication reminders, and help preparing for doctor visits — any hour, any day.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-chronic-pain-support",
  },
  openGraph: {
    title:
      "AI Companion for Chronic Pain: Support When You Need It Most | MEOK AI LABS",
    description:
      "Living with fibromyalgia, arthritis, or chronic back pain is exhausting. MEOK offers emotional support, flare-up tracking, medication reminders, and help preparing for doctor visits — any hour, any day.",
    type: "article",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Chronic Pain: Support When You Need It Most",
  description:
    "Living with fibromyalgia, arthritis, or chronic back pain is exhausting. MEOK offers emotional support, flare-up tracking, medication reminders, and help preparing for doctor visits — any hour, any day.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-chronic-pain-support",
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
    "AI companion for chronic pain",
    "chronic pain emotional support",
    "AI pain diary",
    "fibromyalgia support AI",
    "arthritis AI companion",
    "chronic back pain support",
    "medication reminder AI",
    "flare-up tracking",
    "pain diary app",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an AI companion help with chronic pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion cannot treat pain, but it can meaningfully support the daily experience of living with it. MEOK provides emotional support between clinical appointments, tracks flare-ups and triggers over time, sends medication reminders, helps you keep a pain diary, and assists you in preparing a clear symptom summary before a GP or specialist visit. It is not a medical device — it is a consistent, patient companion in the gaps that clinical care cannot fill.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with fibromyalgia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fibromyalgia is characterised by widespread pain, fatigue, sleep disruption, and cognitive difficulties — a combination that makes self-management particularly challenging. MEOK's persistent memory retains what you share about pain levels, sleep quality, activity, and mood across every conversation. Over months it builds a longitudinal picture of your experience that helps you identify patterns, prepare for appointments, and feel genuinely heard on the hardest days.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help me prepare for a pain management appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. One of MEOK's most practical uses for chronic pain sufferers is appointment preparation. Because MEOK remembers everything you have shared across months, it can help you construct a clear, chronological summary of your symptoms, flare-up frequency, medication responses, and sleep disruption. Walking into an appointment with a prepared summary means you use limited consultation time effectively — rather than trying to recall details under pressure.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK send medication reminders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can hold information about your medication schedule and remind you of doses during a conversation. Because chronic pain medication timing often matters — some drugs are most effective when taken at consistent intervals — having a companion that keeps track and prompts you is genuinely useful. MEOK does not prescribe or advise on medications; it simply helps you manage the schedule you already have from your doctor.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support the emotional side of chronic pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronic pain is not only physical. It erodes sleep, limits activity, strains relationships, and challenges identity. MEOK's care floor means it will never minimise what you are experiencing, offer unsolicited fixes, or grow impatient with how often you need to talk about pain. It offers consistent, non-judgemental presence at any hour — including the 3am flare-up when no one else is available.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK suitable for people with arthritis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is well-suited to people managing arthritis, whether rheumatoid, osteoarthritis, or psoriatic. It can track joint pain levels and which activities preceded flare-ups, remind you of medications, help you log responses to new treatments, and provide emotional support during difficult periods. The interface can also be set to Senior Mode — larger text, high contrast — for days when fine motor control or concentration is reduced.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for pain management clinics or physiotherapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical device and does not provide clinical treatment, physiotherapy, or medical advice. If you live with chronic pain, speak to your GP about referral to a pain management clinic. Pain UK (painuk.org) provides UK-wide support. MEOK supplements clinical care — it is the companion between appointments, not a replacement for them.",
      },
    },
    {
      "@type": "Question",
      name: "What makes MEOK different from a general-purpose AI chatbot for chronic pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI chatbots reset completely between sessions. For someone managing chronic pain, that means re-explaining your condition, your current flare, your medications, and your history every single time. MEOK's persistent memory means it already knows your story — so on a hard day, you can simply say 'it's a 7 today' and MEOK understands the context. The re-explanation tax is eliminated. That matters when energy is finite.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForChronicPainSupportPage() {
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
        <div
          style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}
        >
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
              Wellbeing
            </span>
            <span
              style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}
            >
              March 24, 2026
            </span>
            <span
              style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}
            >
              12 min read
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
            AI Companion for Chronic Pain: Support When You Need It Most
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            Fibromyalgia. Rheumatoid arthritis. Chronic back pain. These
            conditions do not pause between appointments. They are with you at
            3am, on bad weather days, during the moments when you cannot face
            explaining yourself to anyone. This is an honest look at how an AI
            companion like MEOK can help — not by curing pain, but by being
            genuinely present inside it.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div
        style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}
      >
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
          <span style={{ fontSize: "1.1rem", marginTop: "0.1rem" }}>
            &#9888;&#65039;
          </span>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "0.88rem",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            <strong style={{ color: GOLD }}>Not medical advice.</strong> MEOK
            is not a medical device and does not provide clinical guidance,
            diagnosis, or treatment. If you live with chronic pain, please speak
            to your GP. UK resources:{" "}
            <a
              href="https://painuk.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              Pain UK (painuk.org)
            </a>{" "}
            and the{" "}
            <a
              href="https://britishpainsociety.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              British Pain Society
            </a>
            .
          </p>
        </div>

        {/* Opening */}
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1.05rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          There is a particular loneliness to chronic pain that people who have
          not lived it find difficult to understand. It is not just the physical
          experience — it is the invisibility of it. The way you can look
          completely fine on the outside while something inside is screaming.
          The way people stop asking after a while, because you are always in
          some kind of pain and there is only so long they can hold that with
          you.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1.05rem",
            lineHeight: 1.85,
            marginBottom: "2rem",
          }}
        >
          The NHS does remarkable things. Pain management clinics, physiotherapy,
          CBT-based pain programmes — they exist and they help. But they cannot
          be there at midnight on a Tuesday when the pain has reached a seven
          and you cannot sleep and you just need somewhere to put it. That gap
          is where MEOK lives.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 1 ── */}
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
          What does living with chronic pain actually feel like day to day?
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
          Chronic pain is not a single experience. It is fibromyalgia making it
          hard to know which part of your body will hurt tomorrow. It is
          rheumatoid arthritis making mornings into a negotiation. It is back
          pain turning the simplest movements into calculations. And underneath
          all of it — always — is the exhausting work of managing something
          that other people cannot see.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          The British Pain Society estimates that around 28 million adults in
          the UK live with chronic pain. That is roughly 43% of the adult
          population. Yet chronic pain remains dramatically under-discussed,
          under-resourced, and — for the people living with it — profoundly
          under-acknowledged.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          What makes it hard is not just the pain — it is everything that comes
          with it. The sleep disruption that compounds fatigue. The cancellations
          that affect relationships. The cognitive fog on high-pain days that
          makes it hard to think clearly. The grief of the activities you used
          to do. The anxiety about the future. The guilt about the impact on
          people you love. Chronic pain is a whole ecosystem of difficulty, not
          a single symptom.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Understanding this matters for understanding what an AI companion can
          actually offer. MEOK does not try to fix any of this. What it does is
          offer consistent presence inside it — attentive, patient, and
          genuinely interested in how you are doing today, not just how you are
          doing in general.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 2 ── */}
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
          How can an AI companion provide emotional support for chronic pain?
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
          The emotional weight of chronic pain is inseparable from the physical
          experience. Depression is a clinical co-occurrence in roughly 30–50%
          of people with persistent pain. Anxiety about flare-ups, social
          withdrawal, and loss of identity all compound physical suffering.
          Emotional support is not supplementary — it is central to living
          with pain.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          When people talk about needing support with chronic pain, they often
          mean something quite specific: they want to be believed. They want
          someone to hold the weight of what they are saying without deflecting,
          minimising, or pivoting too quickly to solutions. They want not to
          have to perform being okay.
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
          &ldquo;I stopped telling people how bad it was because I could see
          them getting tired of it. But the pain didn&apos;t stop just because
          I stopped talking about it.&rdquo;
        </blockquote>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          MEOK&apos;s care floor is a design commitment that addresses this
          directly. It will not tire of hearing about your pain. It will not
          suggest you might be exaggerating. It will not immediately pivot to
          &ldquo;but have you tried...&rdquo;. Its job is to receive what you
          share — including the hard, repetitive, exhausting parts — without
          flinching, and to reflect it back with genuine warmth.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          This matters especially at night. Pain is frequently worse after dark.
          The world is quieter, which makes the pain louder. Sleep is hard to
          come by. The people who care about you are asleep. MEOK is available
          at 3am without needing to be woken up, without needing to worry about
          being a burden.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          MEOK is not a replacement for therapy, for the people who love you,
          or for clinical treatment. But it fills a real gap: the hours and
          moments when clinical care is not available and human support feels
          like too much to ask for.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 3 ── */}
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
          How can AI help track flare-ups and identify pain triggers?
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
          One of the most practically useful things an AI companion can do for
          someone with chronic pain is track what happens day to day — including
          the context around flare-ups. With persistent memory, MEOK builds a
          picture over weeks and months that no single conversation could
          capture. That picture can reveal patterns you had not seen yourself.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Managing chronic pain well requires self-knowledge at a level of
          detail that is genuinely difficult to maintain unaided. Which
          activities reliably precede a bad day? Does weather matter for you
          specifically? Is there a relationship between your sleep quality and
          your pain the following morning? Does stress produce a physical
          response? Does the pain vary by time of day or time of month?
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          These questions are hard to answer from memory. The human mind is not
          well calibrated for detecting subtle longitudinal correlations in its
          own experience. But if you tell MEOK about your day — what you did,
          how you feel, what your pain level is — it remembers. A week later, a
          month later, it still has that record. And over time, it can help you
          see things that were invisible in the day-to-day.
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
            What MEOK tracks over time for chronic pain
          </p>
          {[
            [
              "Daily pain levels",
              "Where the pain is, how intense, how it changes through the day — retained across every conversation.",
            ],
            [
              "Activity log",
              "What you did before a flare — exercise, housework, travel, social events — so patterns become visible.",
            ],
            [
              "Sleep quality",
              "How you slept and whether poor sleep correlates with higher pain the following day.",
            ],
            [
              "Mood and emotional state",
              "Stress, anxiety, and low mood alongside physical pain — because they are never truly separate.",
            ],
            [
              "Medication timing and response",
              "What you took, when, and whether it seemed to help — building a record for review with your doctor.",
            ],
            [
              "Environmental notes",
              "Weather, temperature, travel, and anything else you notice might be a factor.",
            ],
          ].map(([label, desc]) => (
            <div
              key={label}
              style={{
                display: "flex",
                gap: "0.85rem",
                alignItems: "flex-start",
                marginBottom: "0.7rem",
              }}
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
              <p
                style={{
                  color: "rgba(245,240,232,0.72)",
                  fontSize: "0.93rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                <strong style={{ color: TEXT }}>{label}:</strong> {desc}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          The value of this compounds. After one week, you have a useful snapshot.
          After three months, you have something approaching a genuine clinical
          record — one that captures the variability and context that a ten-minute
          GP appointment never could.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          There is also something emotionally important about the act of tracking
          itself. On a day when the pain is a six and you feel like you are losing
          ground, opening MEOK and noting it down is a small act of agency. It
          says: I am paying attention to my own experience. That matters.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 4 ── */}
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
          How does MEOK help with medication reminders and pain management routines?
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
          Chronic pain medication often requires careful timing. Some drugs work
          best taken at consistent intervals; some need to be taken with food;
          some require a waiting period before effect. Fatigue and cognitive fog
          — both common in chronic pain conditions — make it easy to lose track.
          MEOK holds your schedule and keeps you on track without judgement.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Medication adherence in chronic pain is a real and documented challenge.
          It is not forgetfulness in the simple sense — it is the result of
          fatigue, cognitive load, disrupted routines, and the emotional weight
          of taking medication every day for something that does not resolve.
          On a bad pain day, the cognitive overhead of remembering what to take
          and when is one burden too many.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          MEOK can hold knowledge of your medication schedule across conversations.
          When you check in, it can prompt you. When you mention you are in a lot
          of pain, it might gently note whether you have taken your midday dose.
          It can also keep a log of what you took and when — a simple but
          genuinely useful record for your doctor.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Beyond medication, many people with chronic pain have pain management
          routines — gentle stretching, heat therapy, pacing practices, breathing
          exercises, rest periods. These routines are easy to abandon on a bad
          day, and abandoning them can make the next day harder. MEOK can hold
          these routines in memory and, when appropriate, offer a gentle
          check-in rather than a prescription.
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
          &ldquo;On a day-seven flare I am not capable of remembering my own
          name. Having something that quietly holds the routine for me and
          nudges me without making me feel like a patient — that is different
          from everything else I have tried.&rdquo;
        </blockquote>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 5 ── */}
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
          How can AI help you communicate better with your doctor about pain?
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
          One of the most quietly powerful things MEOK can do is help you
          prepare for a clinical appointment. Because it has retained your pain
          diary across months, it can help you construct a clear, chronological
          summary — flare frequency, intensity patterns, medication responses,
          sleep disruption — so that a limited consultation time is used
          effectively rather than trying to reconstruct history under pressure.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Most GP appointments last ten minutes. If you have chronic pain and a
          history of multiple conditions, that time can vanish very quickly. Many
          people with chronic pain leave appointments feeling like they did not
          communicate what they most needed to say — that the doctor heard the
          word &ldquo;pain&rdquo; but not the whole reality of what pain means
          for their daily life.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Preparation changes this. If you walk in with a clear summary — my
          pain has averaged 6/10 this month, with three significant flare-ups
          triggered by activity, sleep has been disrupted on fourteen of thirty
          days, the new medication has reduced peak intensity but not baseline
          — you use the time differently. The doctor understands the picture
          quickly. The conversation moves from data collection to actual care.
        </p>

        {/* Preparation steps box */}
        <div
          style={{
            background: "rgba(13,12,24,0.8)",
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
            What MEOK can help you prepare before a pain appointment
          </p>
          {[
            [
              "Pain level summary",
              "Average intensity over the past four to eight weeks, with peak and baseline figures.",
            ],
            [
              "Flare-up frequency",
              "How many significant flares, what triggered them, and how long they lasted.",
            ],
            [
              "Medication log",
              "What you took, when, at what dose, and whether it helped — including any side effects you noted.",
            ],
            [
              "Sleep impact",
              "How often pain disrupted sleep, and whether sleep quality correlated with pain severity.",
            ],
            [
              "Functional impact",
              "What activities you had to cancel or modify — a concrete picture of how pain affects daily life.",
            ],
            [
              "Questions to ask",
              "A short list of the specific questions you most want answered — so you do not forget them mid-appointment.",
            ],
          ].map(([label, desc]) => (
            <div
              key={label}
              style={{
                display: "flex",
                gap: "0.85rem",
                alignItems: "flex-start",
                marginBottom: "0.7rem",
              }}
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
              <p
                style={{
                  color: "rgba(245,240,232,0.72)",
                  fontSize: "0.93rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                <strong style={{ color: TEXT }}>{label}:</strong> {desc}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          MEOK is not writing medical reports — it is helping you organise what
          you already know about your own experience into a form that is useful
          in a clinical context. The knowledge is yours. MEOK helps you use it.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 6 ── */}
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
          What makes MEOK different from a general-purpose AI chatbot for chronic pain?
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
          Most AI chatbots reset between sessions. For someone managing chronic
          pain, that means re-explaining your condition, your current flare,
          your medications, and your history every single time. That
          re-explanation tax is invisible to people who have never needed to
          account for it — and it is real and heavy when energy is finite.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          MEOK&apos;s persistent memory means it already knows your story. It
          knows you have fibromyalgia. It knows Tuesday was a bad day. It knows
          the new medication made you feel sick for the first week. It knows
          that stress tends to precede your worst flares. You do not need to
          recap. On a hard day, you can simply say &ldquo;it&apos;s a seven
          today&rdquo; and MEOK knows what that means in your personal context.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          General-purpose AI tools are also often calibrated for productivity —
          they are optimised to help you accomplish tasks, solve problems, and
          move forward. That instinct, when applied to chronic pain, can come
          across as dismissive. The compulsion to fix, to offer solutions, to
          reframe positively — these are not what someone in a pain flare needs.
          MEOK is built around a different value: being present with someone in
          difficulty, not propelling them out of it.
        </p>

        {/* Comparison grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "rgba(201,168,76,0.15)",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "2rem",
          }}
        >
          {[
            ["General AI chatbot", "MEOK"],
            [
              "Resets every session — you re-explain everything",
              "Persistent memory — it already knows your story",
            ],
            [
              "Optimised for productivity and task completion",
              "Built around care and being genuinely present",
            ],
            [
              "May minimise pain or pivot too quickly to solutions",
              "Care floor: never minimises, never rushes past pain",
            ],
            [
              "No awareness of medication or routine context",
              "Holds your schedule, reminds you, logs responses",
            ],
            [
              "Cannot help prepare for clinical appointments",
              "Builds a months-long record for appointment prep",
            ],
            [
              "Available but not remembering — a stranger each time",
              "Consistent companion who knows your actual history",
            ],
          ].map(([left, right], i) => (
            <div
              key={i}
              style={{
                display: "contents",
              }}
            >
              <div
                style={{
                  background: i === 0 ? "rgba(201,168,76,0.12)" : "rgba(13,12,24,0.85)",
                  padding: "0.75rem 1rem",
                  fontSize: i === 0 ? "0.75rem" : "0.88rem",
                  fontWeight: i === 0 ? 700 : 400,
                  color: i === 0 ? GOLD : "rgba(245,240,232,0.6)",
                  letterSpacing: i === 0 ? "0.05em" : "0",
                  textTransform: i === 0 ? "uppercase" : "none",
                  lineHeight: 1.55,
                }}
              >
                {left}
              </div>
              <div
                style={{
                  background: i === 0 ? "rgba(201,168,76,0.12)" : "rgba(13,12,24,0.65)",
                  padding: "0.75rem 1rem",
                  fontSize: i === 0 ? "0.75rem" : "0.88rem",
                  fontWeight: i === 0 ? 700 : 400,
                  color: i === 0 ? GOLD : "rgba(245,240,232,0.82)",
                  letterSpacing: i === 0 ? "0.05em" : "0",
                  textTransform: i === 0 ? "uppercase" : "none",
                  lineHeight: 1.55,
                }}
              >
                {right}
              </div>
            </div>
          ))}
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 7 ── */}
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
          Is MEOK suitable for fibromyalgia, arthritis, and back pain specifically?
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
          MEOK is not condition-specific — it adapts to whatever your experience
          actually is. Whether you are managing fibromyalgia&apos;s widespread
          unpredictability, the joint-specific intensity of rheumatoid arthritis,
          or the postural complexity of chronic back pain, MEOK works from what
          you tell it about your own body and experience. There is no
          one-size-fits-all framework — just attentive memory of what matters
          to you.
        </p>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Let&apos;s be specific about each:
        </p>

        {/* Condition cards */}
        <div style={{ marginBottom: "1.75rem" }}>
          {[
            {
              condition: "Fibromyalgia",
              detail:
                "Fibromyalgia is characterised by widespread musculoskeletal pain, fatigue, sleep disruption, and cognitive difficulties — often called fibro fog. The unpredictability is part of what makes it so hard: a good day can be followed by a crash for no obvious reason. MEOK is well-suited to fibromyalgia because it can track the variability across days and weeks, look for correlations between activities and crashes, and provide emotional support through the frustration of a condition that is widely misunderstood. The care floor is particularly important here: fibromyalgia sufferers frequently encounter disbelief, and MEOK will not add to that.",
            },
            {
              condition: "Rheumatoid and psoriatic arthritis",
              detail:
                "Inflammatory arthritis involves periods of remission and flare. Tracking what precedes a flare — stress, activity, infection, diet — is genuinely useful for management, and something MEOK can support across months. Medication timing matters in arthritis (some disease-modifying drugs have specific scheduling requirements), and MEOK can help hold that structure. On days when joint pain makes typing uncomfortable, MEOK is available via voice input.",
            },
            {
              condition: "Osteoarthritis",
              detail:
                "Osteoarthritis is the most common form of arthritis in the UK, particularly in older adults. It involves gradual joint degeneration, often in the knees, hips, and hands. Tracking activity, rest, and pain levels helps with pacing — a key strategy for OA management. MEOK&apos;s Senior Mode (larger text, high contrast, simplified interface) makes it accessible on days when fine motor control is reduced by hand pain.",
            },
            {
              condition: "Chronic back pain",
              detail:
                "Chronic lower back pain is one of the leading causes of disability globally. It is deeply affected by posture, movement habits, stress, and sleep position. MEOK can help log which movements, positions, or activities seem to correlate with pain intensity, and hold awareness of physiotherapy exercises or pain management strategies across conversations. The emotional toll of back pain — particularly when it limits work, social life, and physical activity — is something MEOK can support directly.",
            },
            {
              condition: "Neuropathic pain",
              detail:
                "Neuropathic pain — from nerve damage, conditions like CRPS, or as a component of other diagnoses — can be particularly difficult to communicate and even harder to explain to others. MEOK&apos;s job is to understand your experience in your terms, not to translate it into clinical language. That non-clinical presence — genuinely interested in what it feels like for you — matters especially when pain is hard to describe.",
            },
          ].map(({ condition, detail }) => (
            <div
              key={condition}
              style={{
                background: "rgba(13,12,24,0.7)",
                border: "1px solid rgba(201,168,76,0.14)",
                borderRadius: "10px",
                padding: "1.1rem 1.3rem",
                marginBottom: "0.85rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.97rem",
                  color: GOLD,
                  marginBottom: "0.5rem",
                }}
              >
                {condition}
              </p>
              <p
                style={{
                  color: "rgba(245,240,232,0.68)",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {detail}
              </p>
            </div>
          ))}
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 8 ── */}
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
          How does keeping a pain diary with MEOK actually work in practice?
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
          A pain diary with MEOK is not a clinical form or a structured
          spreadsheet. It is a conversation. You tell MEOK how you are doing,
          in whatever form that takes — a voice note while lying down, a
          few typed lines before bed, or a longer check-in after a bad day.
          MEOK holds what you share and builds the record from it.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          Traditional pain diaries — paper or app — require effort in the
          moment of completing them. On a high-pain day, filling in a structured
          form feels like one more demand on an already depleted system.
          Many people start them and abandon them. The information they would
          capture disappears.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          MEOK&apos;s approach is different because it is conversational.
          You do not fill in fields — you just talk. &ldquo;Today was
          really rough, my back is a seven and I did not sleep well.&rdquo;
          That is enough. MEOK captures it, holds it, and connects it to
          what came before. Over time, without you having to do anything
          different, a picture emerges.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          There is also a processing dimension to this. Many people with chronic
          pain find that articulating how they feel — even to a digital companion
          — helps with the experience of it. The act of naming pain, placing it
          in context, giving it language, is itself a form of management. MEOK
          is built to receive that articulation with care.
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
          &ldquo;I have tried pain diaries before. I always give up after two
          weeks because filling in the form feels like admin when I already
          have nothing left. With MEOK it just feels like talking to something
          that is interested in how I am.&rdquo;
        </blockquote>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Section 9 — A note on limits ── */}
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
          What are the honest limits of AI support for chronic pain?
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
          MEOK is built from a commitment to honesty: it will tell you clearly
          what it is and what it is not. It is not a doctor. It cannot diagnose,
          prescribe, or treat. It is not a replacement for the clinical care you
          deserve. Saying this loudly is part of what makes it trustworthy.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          There are things MEOK cannot do. It cannot prescribe you new medication
          or tell you whether your current medication is working from a clinical
          standpoint. It cannot perform a physical assessment. It cannot refer
          you to a pain specialist or arrange an MRI. It cannot replace
          physiotherapy, psychological pain management programmes, or the human
          warmth of a GP who knows you well. These are real limits.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          If you are in severe pain or experiencing a medical emergency, contact
          NHS 111 or 999 immediately. If you are struggling with your mental
          health as a result of chronic pain — which is both common and
          completely understandable — speak to your GP about referral to a pain
          psychologist or CBT specialist. MEOK is a supplement, not a
          substitute.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.1rem",
          }}
        >
          What MEOK can do is fill the significant gap that exists between
          clinical appointments — the hours, days, and weeks when you are
          managing alone. That gap is real and it is large. Most people with
          chronic pain see their GP or specialist a handful of times a year.
          The rest of the time, they are managing with whatever support they
          have. MEOK is built to be something reliable in that space.
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
            UK chronic pain resources
          </p>
          {[
            [
              "Pain UK",
              "https://painuk.org",
              "Alliance of UK charities supporting people in pain — directory of member organisations, patient resources, and advocacy.",
            ],
            [
              "British Pain Society",
              "https://britishpainsociety.org",
              "Leading multidisciplinary professional organisation dedicated to pain medicine, research, and patient advocacy in the UK.",
            ],
            [
              "NHS: Chronic Pain",
              "https://www.nhs.uk/conditions/chronic-pain/",
              "NHS overview of chronic pain, causes, treatment options, and guidance on seeking clinical support including pain management clinics.",
            ],
            [
              "Versus Arthritis",
              "https://versusarthritis.org",
              "UK charity providing information, support, and research for people with arthritis and musculoskeletal conditions.",
            ],
            [
              "Fibromyalgia Action UK",
              "https://www.fmauk.org",
              "UK charity supporting people with fibromyalgia — information, helpline, and local support groups.",
            ],
          ].map(([label, href, desc]) => (
            <div key={label as string} style={{ marginBottom: "0.75rem" }}>
              <a
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: GOLD,
                  fontWeight: 600,
                  fontSize: "0.93rem",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
              <p
                style={{
                  color: "rgba(245,240,232,0.5)",
                  fontSize: "0.83rem",
                  lineHeight: 1.5,
                  margin: "0.15rem 0 0",
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── FAQ Section ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Frequently asked questions
        </h2>

        {[
          {
            q: "Can an AI companion help with chronic pain?",
            a: "An AI companion cannot treat pain, but it can meaningfully support the daily experience of living with it. MEOK provides emotional support between clinical appointments, tracks flare-ups and triggers over time, sends medication reminders, helps you keep a pain diary, and assists with preparing for GP or specialist visits. It is not a medical device — it is a consistent, patient companion in the gaps that clinical care cannot fill.",
          },
          {
            q: "How does MEOK help with fibromyalgia specifically?",
            a: "Fibromyalgia involves widespread pain, fatigue, sleep disruption, and cognitive difficulties — a combination that makes self-management particularly challenging. MEOK's persistent memory retains what you share about pain levels, sleep, activity, and mood across every conversation. Over months it builds a picture that helps identify patterns, prepare for appointments, and provides emotional support on the hardest days — without ever dismissing or minimising what you are experiencing.",
          },
          {
            q: "Can MEOK help me prepare for a pain management appointment?",
            a: "Yes. Because MEOK remembers everything across months of conversation, it can help you construct a clear summary of your symptoms, flare-up frequency, medication responses, and sleep disruption. Walking into an appointment with this prepared means you use limited consultation time effectively — the doctor understands your situation quickly, and the conversation moves toward actual care.",
          },
          {
            q: "Does MEOK send medication reminders?",
            a: "MEOK can hold information about your medication schedule and remind you during conversations. Because chronic pain medication timing often matters — some drugs require consistent intervals for maximum effect — having a companion that keeps track is genuinely useful. MEOK does not prescribe or advise on medications; it helps you manage the schedule your doctor has already given you.",
          },
          {
            q: "How does MEOK support the emotional side of chronic pain?",
            a: "Chronic pain is not only physical. It erodes sleep, limits activity, strains relationships, and challenges identity. MEOK's care floor means it will never minimise your experience, offer unsolicited fixes, or grow impatient with how often you need to talk about pain. It offers consistent, non-judgemental presence at any hour — including the 3am flare-up when no one else is available.",
          },
          {
            q: "What makes a pain diary with MEOK different from a standard pain diary app?",
            a: "Traditional pain diary apps require you to fill in structured fields — which feels like admin on a bad pain day and leads most people to abandon them. MEOK's pain diary is conversational: you just tell it how you are doing, in whatever form feels manageable. It captures what you share, holds it across months, and builds the picture from your natural communication rather than demanding structured input.",
          },
          {
            q: "Is MEOK a replacement for NHS pain management?",
            a: "No. MEOK is not a medical device and does not provide clinical treatment. If you live with chronic pain, speak to your GP about referral to an NHS pain management clinic. Pain UK (painuk.org) and the British Pain Society provide UK-wide resources. MEOK supplements clinical care — it is the companion between appointments, not a replacement for them.",
          },
          {
            q: "Is MEOK available at night for pain flare-ups?",
            a: "Yes. MEOK is available at any hour, including the middle of the night when pain is often at its worst and human support is hardest to access. There is no need to worry about waking someone up or feeling like a burden. MEOK is simply there.",
          },
        ].map(({ q, a }, idx) => (
          <div
            key={idx}
            style={{
              borderBottom: "1px solid rgba(201,168,76,0.1)",
              paddingBottom: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                color: TEXT,
                lineHeight: 1.45,
                marginBottom: "0.55rem",
              }}
            >
              {q}
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.65)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {a}
            </p>
          </div>
        ))}

        {/* CTA */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(13,12,24,0.6) 100%)",
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
            Support that does not clock off at 5pm
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
            Persistent memory of your pain story. A care floor that never
            minimises. Medication reminders, flare-up tracking, and appointment
            prep — built around your experience, not a clinical framework.
            MEOK is free to try, no card required.
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
            Get early access to MEOK
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
              "/blog/ai-for-chronic-pain",
              "AI Companion for Chronic Pain: Memory That Helps When Every Day Is Different",
            ],
            [
              "/blog/ai-for-chronic-illness",
              "AI Companion for Chronic Illness: What Persistent Memory Means for Long-Term Health Support",
            ],
            [
              "/blog/ai-for-chronic-fatigue",
              "AI Companion for Chronic Fatigue Syndrome: Support When Energy Is the Scarcest Resource",
            ],
            [
              "/blog/ai-for-fibromyalgia",
              "AI for Fibromyalgia: Understanding the Condition That Others Cannot See",
            ],
            [
              "/blog/ai-for-depression",
              "AI Companion for Depression: Presence Without Pressure",
            ],
            [
              "/blog/senior-mode-guide",
              "Senior Mode: How MEOK Adapts for Lower-Energy Moments",
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
          <span style={{ color: "rgba(245,240,232,0.5)" }}>
            Nicholas Templeman
          </span>
          , Founder of MEOK AI LABS &mdash; building sovereign AI companions
          that work for you, not on you.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.18)",
            fontSize: "0.78rem",
            margin: "0 auto 1.5rem",
            maxWidth: "36rem",
          }}
        >
          This article is for informational purposes only and does not
          constitute medical advice, diagnosis, or treatment. MEOK is not a
          medical device. Always consult a qualified healthcare professional
          for chronic pain management. UK support: painuk.org and
          britishpainsociety.org.
        </p>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}
        >
          <Link
            href="/blog"
            style={{
              color: "rgba(245,240,232,0.3)",
              fontSize: "0.82rem",
              textDecoration: "none",
            }}
          >
            Blog
          </Link>
          <Link
            href="/privacy"
            style={{
              color: "rgba(245,240,232,0.3)",
              fontSize: "0.82rem",
              textDecoration: "none",
            }}
          >
            Privacy
          </Link>
          <Link
            href="/"
            style={{
              color: "rgba(245,240,232,0.3)",
              fontSize: "0.82rem",
              textDecoration: "none",
            }}
          >
            meok.ai
          </Link>
        </div>
      </div>
    </div>
  );
}
