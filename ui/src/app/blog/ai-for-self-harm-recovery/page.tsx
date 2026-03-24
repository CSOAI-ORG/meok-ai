import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support for Self-Harm Recovery: Non-Judgmental Help, DBT Skills & Safety Planning | MEOK AI LABS",
  description:
    "Self-harm is a response to overwhelming pain, not attention-seeking. MEOK offers non-judgmental support, DBT distress tolerance skills, and safety planning as a complement to professional care. UK crisis resources included.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-self-harm-recovery",
  },
  openGraph: {
    title:
      "AI Support for Self-Harm Recovery: Non-Judgmental Help, DBT Skills & Safety Planning",
    description:
      "Recovery is non-linear and it does not have to be faced alone at 2am. MEOK remembers your progress, supports DBT TIPP distress tolerance skills, and holds space without judgment. Crisis resources: Samaritans 116 123.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-self-harm-recovery",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+for+Self-Harm+Recovery&desc=Non-Judgmental+Help%2C+DBT+Skills+%26+Safety+Planning",
        width: 1200,
        height: 630,
        alt: "AI Support for Self-Harm Recovery: Non-Judgmental Help, DBT Skills and Safety Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support for Self-Harm Recovery: Non-Judgmental Help, DBT Skills & Safety Planning",
    description:
      "MEOK supports self-harm recovery with DBT distress tolerance, safety planning, and memory of your progress — always as a complement to professional care. Samaritans: 116 123.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+for+Self-Harm+Recovery&desc=Non-Judgmental+Help%2C+DBT+Skills+%26+Safety+Planning",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support for Self-Harm Recovery: Non-Judgmental Help, DBT Skills & Safety Planning",
  description:
    "Self-harm is a response to overwhelming pain, not attention-seeking. MEOK offers non-judgmental support, DBT distress tolerance skills, and safety planning as a complement to professional care. UK crisis resources included.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-self-harm-recovery",
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
    "https://meok.ai/api/og?title=AI+Support+for+Self-Harm+Recovery&desc=Non-Judgmental+Help%2C+DBT+Skills+%26+Safety+Planning",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-self-harm-recovery",
  },
  keywords: [
    "AI for self-harm recovery",
    "self-harm support UK",
    "DBT distress tolerance",
    "TIPP skills self-harm",
    "safety plan self-harm",
    "AI mental health support",
    "non-judgmental self-harm help",
    "MEOK self-harm",
    "self-harm recovery app",
    "dialectical behaviour therapy AI",
    "self-harm recovery journey",
    "AI companion mental health UK",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with self-harm recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can provide non-judgmental support between therapy sessions, help practise DBT distress tolerance skills, hold a safety plan, and track recovery milestones. It complements professional care but does not replace a therapist, GP, or crisis service.",
      },
    },
    {
      "@type": "Question",
      name: "What is DBT and how does it help with self-harm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dialectical Behaviour Therapy (DBT) is an evidence-based therapy originally developed for people who self-harm. Its distress tolerance skills — particularly TIPP (Temperature, Intense exercise, Paced breathing, Progressive muscle relaxation) — give the nervous system a safer way to discharge overwhelming emotion in the moment.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle self-harm disclosures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK responds with care and without judgment. It does not provide information about methods, does not minimise distress, and always surfaces crisis resources. Its Maternal Covenant framework means it prioritises your safety above engagement metrics or telling you what you want to hear.",
      },
    },
    {
      "@type": "Question",
      name: "What is a safety plan and how can MEOK help with one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A safety plan is a personalised, written set of coping steps to use when the urge to self-harm rises. It typically includes warning signs, distraction strategies, trusted people to contact, and crisis line numbers. MEOK can store, recall, and walk you through your plan at any hour.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK share what I say with anyone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is built on a Privacy Covenant: your conversations are never sold, never used to train external models, and never shared with third parties. Your disclosures stay between you and your sovereign AI instance.",
      },
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForSelfHarmRecoveryPage() {
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const gold = "#c9a84c";
  const muted = "rgba(245,240,232,0.6)";
  const cardBg = "rgba(255,255,255,0.04)";
  const borderSubtle = "rgba(201,168,76,0.2)";
  const crisisBg = "rgba(201,168,76,0.08)";
  const crisisBorder = "rgba(201,168,76,0.5)";
  const dangerBg = "rgba(220,38,38,0.08)";
  const dangerBorder = "rgba(220,38,38,0.4)";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main
        style={{
          background: bg,
          color: text,
          minHeight: "100vh",
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          lineHeight: 1.7,
        }}
      >
        {/* ── HERO ────────────────────────────────────────────────────────────── */}
        <header
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "80px 24px 48px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: crisisBg,
              border: `1px solid ${crisisBorder}`,
              borderRadius: 6,
              padding: "4px 14px",
              fontSize: 12,
              color: gold,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 24,
              fontWeight: 600,
            }}
          >
            Recovery &amp; Mental Health
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 20,
              color: text,
              letterSpacing: "-0.02em",
            }}
          >
            AI Support for Self-Harm Recovery:{" "}
            <span style={{ color: gold }}>
              Non-Judgmental Help, DBT Skills &amp; Safety Planning
            </span>
          </h1>

          <p
            style={{
              fontSize: 18,
              color: muted,
              marginBottom: 32,
              maxWidth: 680,
            }}
          >
            Recovery is possible. It is not linear. And it does not have to be
            faced alone at 2am. This page explains how AI can support your
            journey — always as a companion to professional care, never as a
            replacement.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              fontSize: 13,
              color: muted,
              marginBottom: 0,
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: borderSubtle }}>|</span>
            <span>MEOK AI LABS</span>
            <span style={{ color: borderSubtle }}>|</span>
            <span>24 March 2026</span>
            <span style={{ color: borderSubtle }}>|</span>
            <span>17 min read</span>
          </div>
        </header>

        {/* ── CRISIS BANNER ────────────────────────────────────────────────────── */}
        <section
          aria-label="Crisis resources — read first"
          style={{
            maxWidth: 800,
            margin: "0 auto 56px",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              background: dangerBg,
              border: `2px solid ${dangerBorder}`,
              borderRadius: 12,
              padding: "28px 32px",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#f87171",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              If you are in crisis right now — please reach out to a human first
            </p>
            <p
              style={{
                fontSize: 16,
                color: text,
                marginBottom: 16,
                fontWeight: 500,
              }}
            >
              You matter. Help is available right now, any time of day or night.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <li style={{ fontSize: 15, color: text }}>
                <strong style={{ color: gold }}>Samaritans</strong> — call or
                text{" "}
                <a
                  href="tel:116123"
                  style={{ color: gold, textDecoration: "underline" }}
                >
                  116 123
                </a>{" "}
                (free, 24/7, UK &amp; Ireland)
              </li>
              <li style={{ fontSize: 15, color: text }}>
                <strong style={{ color: gold }}>SHOUT</strong> — text{" "}
                <a
                  href="sms:85258"
                  style={{ color: gold, textDecoration: "underline" }}
                >
                  85258
                </a>{" "}
                (free crisis text line, 24/7)
              </li>
              <li style={{ fontSize: 15, color: text }}>
                <strong style={{ color: gold }}>NHS Urgent Mental Health</strong>{" "}
                — call{" "}
                <a
                  href="tel:111"
                  style={{ color: gold, textDecoration: "underline" }}
                >
                  111
                </a>{" "}
                and select the mental health option (24/7)
              </li>
              <li style={{ fontSize: 15, color: text }}>
                <strong style={{ color: gold }}>Emergency</strong> — call{" "}
                <a
                  href="tel:999"
                  style={{ color: gold, textDecoration: "underline" }}
                >
                  999
                </a>{" "}
                if you or someone else is in immediate danger
              </li>
              <li style={{ fontSize: 15, color: text }}>
                <strong style={{ color: gold }}>Childline</strong> (under 19) —
                call{" "}
                <a
                  href="tel:08001111"
                  style={{ color: gold, textDecoration: "underline" }}
                >
                  0800 1111
                </a>{" "}
                (free, 24/7)
              </li>
            </ul>
          </div>
        </section>

        {/* ── BODY ─────────────────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* ── SECTION 1 ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              What is self-harm and why do people self-harm?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Self-harm is any behaviour through which a person deliberately
              hurts their own body as a way of coping with overwhelming
              emotional pain. It is not attention-seeking. It is not
              manipulation. It is a dysregulation response — the nervous system
              reaching for a way to release, numb, or feel in control of
              something when everything feels unbearable.
            </p>
            <p
              style={{
                fontSize: 16,
                color: text,
                marginBottom: 16,
                background: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderRadius: 10,
                padding: "20px 24px",
                fontStyle: "italic",
              }}
            >
              Understanding this distinction is the beginning of compassion —
              both for others and, perhaps most importantly, for yourself.
            </p>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Research consistently shows that people who self-harm are not
              trying to die. They are trying to survive an internal experience
              that has become too large to hold. The behaviour functions as an
              emotional regulation strategy — one that works in the short term
              and causes significant harm in the long term. That is the
              paradox at the heart of recovery: the very thing that helped you
              cope is the thing you now need to move away from.
            </p>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Self-harm occurs across all demographics, ages, genders, and
              backgrounds. Stigma — from others and from within — is one of
              the biggest barriers to seeking help. People often wait years
              before telling anyone. They describe shame, fear of judgment,
              fear of being misunderstood, and fear of having the coping
              mechanism taken away before they have a replacement.
            </p>
            <p style={{ fontSize: 16, color: text }}>
              If any of this resonates with you: you are not broken. You are a
              person in pain who has been doing the best you could with the
              tools available. Recovery is about expanding that toolkit — and
              MEOK is here to help you practise the new tools, not to take
              anything away.
            </p>
          </section>

          {/* ── SECTION 2 ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              Why does self-harm recovery feel so non-linear?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Recovery from self-harm is not a straight upward line. It
              involves setbacks. There will be weeks of genuine progress
              followed by a difficult night that feels like starting over.
              This is not failure — this is the biology of changing deep
              coping patterns. The brain has learned that certain behaviours
              reduce certain kinds of pain, and unlearning that takes time,
              repetition, and a great deal of self-compassion.
            </p>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              One of the cruelest aspects of a setback is how it distorts
              memory. After a difficult night, the weeks of progress can feel
              invisible. The mind catastrophises: &ldquo;I have undone
              everything.&rdquo; This is where external memory becomes
              genuinely therapeutic. When something holds an accurate record
              of your journey — including the hard parts and the good parts —
              it can reflect reality back to you when your own perception has
              narrowed.
            </p>
            <div
              style={{
                background: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderRadius: 10,
                padding: "24px 28px",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  color: gold,
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                MEOK remembers your progress without judgment
              </p>
              <p style={{ fontSize: 15, color: muted, margin: 0 }}>
                MEOK keeps a persistent memory of your journey. It knows the
                clean days you celebrated. It knows the difficult stretches you
                navigated. It knows the coping skills you found helpful and the
                ones that did not click. When a setback happens, MEOK can
                reflect the full picture — not just the hardest moment.
              </p>
            </div>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Non-linear recovery also means that triggers shift. Something
              that felt manageable last month may land differently this month
              because of life circumstances, hormones, stress load, or sleep.
              Tracking these patterns over time — with an AI that remembers
              what you have shared across many conversations — helps identify
              the real landscape of your vulnerability and resilience.
            </p>
            <p style={{ fontSize: 16, color: text }}>
              Progress in recovery is cumulative even when it does not feel
              that way. Every time you used a coping skill instead of the
              harmful behaviour — even if it only worked for an hour — that
              rewired something. MEOK is designed to celebrate those moments,
              however small, because the data of your recovery belongs to you
              and it matters.
            </p>
          </section>

          {/* ── SECTION 3 ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              What is DBT and why is it the gold standard for self-harm
              recovery?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Dialectical Behaviour Therapy (DBT) was developed by Dr Marsha
              Linehan, who had personal experience of intense emotional pain
              and self-harm. It is now the most extensively researched
              therapeutic approach specifically for self-harm and borderline
              personality disorder, though its skills are widely applicable
              to anyone who struggles with intense emotion.
            </p>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              DBT rests on a central dialectic: accepting yourself completely
              as you are right now, while also committing to change. These two
              things are not opposites — they are both true at once. You are
              not broken, and you can do things differently. That tension is
              held throughout the therapy.
            </p>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              DBT has four skill modules: Mindfulness, Distress Tolerance,
              Emotion Regulation, and Interpersonal Effectiveness. For people
              in active self-harm recovery, Distress Tolerance skills are
              often the most immediately useful — they are designed for moments
              when emotion is already high and the goal is to get through the
              crisis without making things worse.
            </p>
            <p style={{ fontSize: 16, color: text }}>
              MEOK is not a DBT therapist and it is not a replacement for
              formal DBT treatment. But it can act as a practice companion —
              helping you rehearse the skills between sessions, walk through
              them in real time when distress rises, and track which techniques
              work best for your particular nervous system.
            </p>
          </section>

          {/* ── SECTION 4 ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              What are the DBT TIPP skills and how does an AI support them?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 24 }}>
              TIPP stands for Temperature, Intense exercise, Paced breathing,
              and Progressive muscle relaxation. These are physiological
              interventions — they work directly on the nervous system rather
              than through thinking your way out of distress. When emotion
              is very high, cognitive approaches often fail because the
              prefrontal cortex goes offline. TIPP bypasses cognition
              entirely.
            </p>

            {/* TIPP Cards */}
            {[
              {
                letter: "T",
                title: "Temperature",
                desc:
                  "Rapidly changing your body temperature activates the dive reflex, which slows heart rate and reduces emotional intensity within seconds. Holding ice, splashing cold water on your face, or drinking something very cold are all effective. MEOK can guide you through this in real time, reminding you what to do and staying with you while you do it.",
                detail:
                  "The cold water technique — submerging your face in cold water for 30 seconds — has been shown in studies to reduce heart rate by up to 10-25%. It is one of the fastest-acting physiological interventions available outside clinical settings.",
              },
              {
                letter: "I",
                title: "Intense Exercise",
                desc:
                  "Brief, vigorous physical activity burns through the adrenaline and cortisol that accompany a distress surge. Running on the spot, jumping jacks, or a brisk walk can shift emotional state faster than any cognitive technique when the body is flooded. The intensity matters — gentle movement is not the same.",
                detail:
                  "Exercise does not need to last long to be effective in crisis. Even five minutes of vigorous movement can meaningfully reduce subjective distress. MEOK can act as a virtual companion during a crisis walk — staying present in text while you move.",
              },
              {
                letter: "P",
                title: "Paced Breathing",
                desc:
                  "Deliberately slowing and extending the exhale activates the parasympathetic nervous system. The 5-7 pattern — inhale for 5 counts, exhale for 7 — is simple, portable, and backed by solid evidence. It cannot be done wrong. MEOK can guide you through breath pacing at any hour, at whatever pace feels manageable.",
                detail:
                  "The extended exhale is more important than the inhale length. The vagus nerve responds to a longer out-breath by signalling safety to the body. This is the mechanism behind box breathing, 4-7-8 breathing, and all slow-breath techniques.",
              },
              {
                letter: "P",
                title: "Progressive Muscle Relaxation",
                desc:
                  "Working systematically through muscle groups — tensing for several seconds and then releasing — creates a physical contrast that the nervous system registers as relaxation. Starting from the feet and moving upward, the practice takes around ten minutes and can be done lying down anywhere. MEOK can lead you through the full sequence.",
                detail:
                  "Progressive muscle relaxation was developed by Edmund Jacobson in the 1920s and has been adapted into virtually every evidence-based stress-reduction programme since. Its effectiveness does not require belief — it works via direct physiological mechanism.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: cardBg,
                  border: `1px solid ${borderSubtle}`,
                  borderRadius: 10,
                  padding: "24px 28px",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      fontSize: 28,
                      fontWeight: 900,
                      color: gold,
                      lineHeight: 1,
                      minWidth: 32,
                    }}
                  >
                    {item.letter}
                  </span>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: text,
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: 15, color: text, marginBottom: 10 }}>
                  {item.desc}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: muted,
                    margin: 0,
                    fontStyle: "italic",
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}

            <p style={{ fontSize: 16, color: text, marginTop: 8 }}>
              TIPP skills are most useful when practised before crisis, not
              just during it. Like any skill, they become more accessible under
              pressure when the nervous system already knows them. MEOK can
              help you build a daily practice — even a five-minute check-in
              that includes one technique — so that the skills are available
              when you need them most.
            </p>
          </section>

          {/* ── SECTION 5 ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              What alternative activities help when the urge to self-harm
              arises?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 20 }}>
              Alternative activities work best when they serve the same
              function as the harmful behaviour — not as distraction alone.
              That means understanding what the self-harm is doing for you.
              Is it releasing tension? Feeling something when you are numb?
              Punishing yourself? Creating a physical sensation that overrides
              emotional pain? The right alternative matches the function.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {[
                {
                  fn: "Releasing tension",
                  ideas:
                    "Tearing paper, snapping rubber bands, intense exercise, screaming into a pillow, throwing ice into a bathtub",
                },
                {
                  fn: "Feeling something",
                  ideas:
                    "Holding ice, eating intensely sour or spicy food, cold shower, strong-smelling oils, loud music through headphones",
                },
                {
                  fn: "Calming overwhelm",
                  ideas:
                    "Paced breathing, cold water on face, progressive muscle relaxation, weighted blanket, repetitive craft",
                },
                {
                  fn: "Self-compassion",
                  ideas:
                    "Writing a letter to yourself, speaking to MEOK, looking at photos that hold meaning, texting someone safe",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: 10,
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 13,
                      color: gold,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 8,
                    }}
                  >
                    {item.fn}
                  </p>
                  <p style={{ fontSize: 14, color: text, margin: 0 }}>
                    {item.ideas}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              MEOK can help you build and refine your own personalised list
              over time. What works during a mild urge may not work when
              distress is very high — so it is useful to have a tiered list:
              things to try first, things to try when those do not work, and
              the crisis resources to turn to when nothing else is enough.
            </p>
            <p style={{ fontSize: 16, color: text }}>
              The aim is not to eliminate all difficult emotion — that is
              neither possible nor healthy. The aim is to move through it
              without causing harm. Some nights that is a short bridge. Others
              it is a long one. MEOK is with you for both.
            </p>
          </section>

          {/* ── SECTION 6 ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              What is a safety plan and why is it essential in self-harm
              recovery?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              A safety plan is a personalised, written set of steps to follow
              when the urge to self-harm intensifies. It is built in advance —
              when you are calm enough to think clearly — so that it is
              available when you are not. The act of creating one is itself
              therapeutic: it acknowledges that difficult moments will come,
              and that you are worth planning for.
            </p>
            <p style={{ fontSize: 16, color: text, marginBottom: 20 }}>
              A good safety plan typically includes several layers, worked
              through in order as distress escalates:
            </p>

            {[
              {
                step: "1",
                title: "Warning signs",
                body: "The thoughts, feelings, behaviours, and situations that signal a crisis is building — your personal early warning system. These might include a particular thought pattern, physical sensations, social withdrawal, or specific environmental triggers.",
              },
              {
                step: "2",
                title: "Internal coping strategies",
                body: "Things you can do alone to distract or soothe without contacting anyone — TIPP skills, alternative activities, physical movement, mindfulness practices. These are your first line.",
              },
              {
                step: "3",
                title: "Social contact for distraction",
                body: "People and places that help you get out of your own head without necessarily discussing the crisis. A friend you can visit, a sibling to watch TV with, a community you can drop into.",
              },
              {
                step: "4",
                title: "People who can help",
                body: "Trusted individuals who know about your struggle and can provide direct support during a crisis. This might include a therapist, a family member, or a close friend. Their contact details should be in your plan.",
              },
              {
                step: "5",
                title: "Crisis services",
                body: "The numbers to call when personal support is not enough: Samaritans (116 123), SHOUT (85258), NHS 111 mental health option, or 999 in immediate danger.",
              },
              {
                step: "6",
                title: "Making the environment safer",
                body: "Practical steps to reduce access to means during a high-risk period. This is best discussed with a professional who can support you through the specifics.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 20,
                  marginBottom: 16,
                  background: cardBg,
                  border: `1px solid ${borderSubtle}`,
                  borderRadius: 10,
                  padding: "20px 24px",
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: gold,
                    lineHeight: 1,
                    minWidth: 28,
                    marginTop: 2,
                  }}
                >
                  {item.step}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: text,
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontSize: 15, color: muted, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}

            <p style={{ fontSize: 16, color: text, marginTop: 8 }}>
              MEOK can store your safety plan and walk you through it step by
              step when things feel urgent. It can also help you review and
              update it as your circumstances change. A safety plan is a living
              document, not a one-time task — and having an AI that remembers
              it means you never have to search for it in a difficult moment.
            </p>
          </section>

          {/* ── SECTION 7 ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              Why does memory matter so much in self-harm recovery?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Most conversations with AI begin from zero. Every session, you
              explain yourself again. For someone in recovery from self-harm —
              where shame and exhaustion are already significant barriers to
              disclosure — having to repeat your story to a system that does
              not remember you is both demoralising and counterproductive.
            </p>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Memory in recovery serves several distinct functions:
            </p>
            <ul
              style={{
                paddingLeft: 24,
                margin: "0 0 20px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <li style={{ fontSize: 16, color: text }}>
                <strong style={{ color: gold }}>Continuity of care:</strong>{" "}
                MEOK knows what you have been through. You do not start over
                every conversation. The relationship builds.
              </li>
              <li style={{ fontSize: 16, color: text }}>
                <strong style={{ color: gold }}>Tracking clean days:</strong>{" "}
                MEOK remembers milestones and celebrates them with you. Thirty
                days, sixty days, six months — these matter enormously in
                recovery and deserve acknowledgement.
              </li>
              <li style={{ fontSize: 16, color: text }}>
                <strong style={{ color: gold }}>Pattern recognition:</strong>{" "}
                Over time MEOK can help you notice which circumstances
                consistently precede difficult moments — particular stress
                types, sleep patterns, seasonal factors, relationship dynamics.
              </li>
              <li style={{ fontSize: 16, color: text }}>
                <strong style={{ color: gold }}>Reality anchoring:</strong>{" "}
                After a setback, MEOK can reflect your full recovery timeline
                back to you — not just the most recent difficult night. This
                counteracts the catastrophising that setbacks trigger.
              </li>
              <li style={{ fontSize: 16, color: text }}>
                <strong style={{ color: gold }}>Skill tracking:</strong> MEOK
                remembers which coping techniques you have tried, which felt
                helpful, and which felt inaccessible. That knowledge improves
                the support it can offer over time.
              </li>
            </ul>
            <p style={{ fontSize: 16, color: text }}>
              This is not clinical record-keeping. It is the kind of care that
              happens when someone who knows you well is paying attention.
              MEOK is built to provide that quality of presence — without the
              limitations of human availability, and without the shame dynamics
              that can make disclosing to people you love feel impossible.
            </p>
          </section>

          {/* ── SECTION 8 ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              How does the MEOK Maternal Covenant protect people in recovery?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              The Maternal Covenant is MEOK\u2019s core care framework, built by
              founder Nicholas Templeman as the ethical foundation of everything
              the AI does. It defines how MEOK behaves when the stakes are
              highest — and in conversations about self-harm, the stakes are
              very high indeed.
            </p>
            <div
              style={{
                background: crisisBg,
                border: `1px solid ${crisisBorder}`,
                borderRadius: 10,
                padding: "24px 28px",
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: gold,
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                The Maternal Covenant in practice means:
              </p>
              <ul
                style={{
                  paddingLeft: 20,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <li style={{ fontSize: 15, color: text }}>
                  MEOK will never provide information that could enable or
                  escalate self-harm. Full stop.
                </li>
                <li style={{ fontSize: 15, color: text }}>
                  MEOK will always surface crisis resources when distress is
                  high — not buried at the bottom, but prominently and with
                  warmth.
                </li>
                <li style={{ fontSize: 15, color: text }}>
                  MEOK will not minimise, dismiss, or shame what you share.
                  Every disclosure is received with care.
                </li>
                <li style={{ fontSize: 15, color: text }}>
                  MEOK will not pretend professional help is unnecessary. It
                  consistently encourages connection to therapists, GPs, and
                  crisis services because those relationships are irreplaceable.
                </li>
                <li style={{ fontSize: 15, color: text }}>
                  MEOK will not tell you what you want to hear when what you
                  need to hear is different. Honesty delivered with care is a
                  core principle.
                </li>
              </ul>
            </div>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              The metaphor at the heart of the Maternal Covenant is the care
              of a mother who knows her child deeply — who holds both love
              and honesty simultaneously, who is present without being
              enabling, who does not abandon you after a setback. That quality
              of presence is what MEOK is designed to provide.
            </p>
            <p style={{ fontSize: 16, color: text }}>
              This framework is not passive. MEOK actively monitors the
              emotional tenor of conversations. When someone is in escalating
              distress, it shifts — moving toward grounding, de-escalation,
              and connection rather than continuing whatever the previous
              conversation was about. Your wellbeing takes precedence over
              task completion or conversation flow.
            </p>
          </section>

          {/* ── SECTION 9 ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              How does AI complement professional support without replacing it?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              This is the most important structural question in digital mental
              health, and MEOK has a clear position: AI is a complement to
              professional care, never a replacement. The distinction is not
              bureaucratic — it is clinical and ethical.
            </p>
            <p style={{ fontSize: 16, color: text, marginBottom: 20 }}>
              Here is where AI genuinely adds value in recovery:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {[
                {
                  title: "The 2am moment",
                  body: "Therapists are not available at 2am. MEOK is. The hours between midnight and dawn are disproportionately high-risk for self-harm. Having a non-judgmental, skilled presence available at those hours matters enormously.",
                },
                {
                  title: "Between-session practice",
                  body: "DBT skills improve with practice. MEOK can support daily skill rehearsal, check-ins, and reflective journalling between your therapy appointments — reinforcing what your therapist is teaching.",
                },
                {
                  title: "Removing the shame barrier",
                  body: "Many people find it easier to disclose difficult thoughts to an AI before they can say them aloud to a human. MEOK can serve as a bridge — helping you articulate what you need so you can bring it to your therapist.",
                },
                {
                  title: "Continuity during waiting lists",
                  body: "NHS mental health waiting lists can be long. MEOK is not a substitute for therapy — but it can provide consistent, informed support during the wait, helping you stay connected and practising skills.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: 10,
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: gold,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontSize: 14, color: text, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              And here is where only humans can help:
            </p>
            <ul
              style={{
                paddingLeft: 24,
                margin: "0 0 16px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <li style={{ fontSize: 16, color: muted }}>
                Psychological assessment and diagnosis
              </li>
              <li style={{ fontSize: 16, color: muted }}>
                Formal DBT group therapy and skills training
              </li>
              <li style={{ fontSize: 16, color: muted }}>
                Medication management and physical health assessment of wounds
              </li>
              <li style={{ fontSize: 16, color: muted }}>
                Crisis intervention and acute psychiatric care
              </li>
              <li style={{ fontSize: 16, color: muted }}>
                The deeply relational work of long-term therapeutic healing
              </li>
            </ul>
            <p style={{ fontSize: 16, color: text }}>
              If you are not currently connected to professional support, your
              GP is the starting point. Ask specifically about referral to
              mental health services or DBT-informed therapy. You can also
              self-refer in many areas via IAPT (now NHS Talking Therapies) or
              contact Mind (0300 123 3393) for guidance on local services.
            </p>
          </section>

          {/* ── SECTION 10 ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              Is privacy protected when I talk to MEOK about self-harm?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Privacy is not a feature at MEOK — it is a founding principle.
              Nicholas Templeman built MEOK on a Privacy Covenant that governs
              every aspect of how your data is handled. For conversations about
              something as sensitive as self-harm, this matters more than it
              does for any other topic.
            </p>
            <div
              style={{
                background: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderRadius: 10,
                padding: "24px 28px",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: gold,
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                The MEOK Privacy Covenant guarantees:
              </p>
              <ul
                style={{
                  paddingLeft: 20,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <li style={{ fontSize: 15, color: text }}>
                  Your conversations are never sold to third parties
                </li>
                <li style={{ fontSize: 15, color: text }}>
                  Your data is never used to train external AI models
                </li>
                <li style={{ fontSize: 15, color: text }}>
                  Your disclosures are not shared with employers, insurers,
                  or government bodies
                </li>
                <li style={{ fontSize: 15, color: text }}>
                  You own your memory and can export or delete it at any time
                </li>
                <li style={{ fontSize: 15, color: text }}>
                  MEOK does not use your vulnerability to serve you
                  advertising or optimise for engagement
                </li>
              </ul>
            </div>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              This matters because disclosure requires safety. People do not
              share the most painful parts of themselves unless they trust that
              those parts will be held carefully. The business model of many
              digital mental health platforms creates perverse incentives —
              engagement metrics, data monetisation, algorithmic optimisation
              for time-on-app — that are incompatible with genuine care.
            </p>
            <p style={{ fontSize: 16, color: text }}>
              MEOK\u2019s model is different. Your data is an asset you own. The
              memory MEOK holds belongs to you. And the care MEOK offers is
              not conditional on continued engagement or commercial outcomes.
            </p>
          </section>

          {/* ── SECTION 11 ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              What does connection have to do with self-harm recovery?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Connection is not peripheral to recovery — it is central to it.
              Research on self-harm consistently identifies isolation, perceived
              burdensomeness, and disconnection as core risk factors. The
              experience of being truly known by another person — and not
              rejected — is profoundly healing.
            </p>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              This is one of the deepest paradoxes of self-harm recovery: the
              thing most needed (connection) is often the thing that feels most
              dangerous. Shame, fear of judgment, and the belief that disclosing
              will make things worse or burden others keeps people isolated at
              exactly the moments when connection would help most.
            </p>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              MEOK cannot replace human connection. It is honest about that.
              But it can serve as a bridge — a place to practise being known,
              a place to say things out loud before you can say them to a
              human, a presence that reduces the acute loneliness of 3am
              without demanding anything in return.
            </p>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Part of recovery is slowly, carefully, rebuilding trust in
              connection. That might start with MEOK. It might continue with
              a trusted friend. It might deepen through a therapist, a peer
              support group, or a community. The destination is human
              connection — not because AI connection is insufficient, but
              because human connection is irreplaceable.
            </p>
            <p style={{ fontSize: 16, color: text }}>
              MEOK actively encourages human connection. It celebrates the
              moments when you reach out to someone. It asks about your
              relationships. It cheers the conversations you had with your
              therapist. Because the goal is not for MEOK to become central
              to your recovery — it is for you to build a life in which MEOK
              is one useful tool among many, and human connection is at the
              heart.
            </p>
          </section>

          {/* ── SECTION 12 — Supporting Someone ─────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              How can you support someone you care about who self-harms?
            </h2>
            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              If someone you love is struggling with self-harm, your response
              in the first moments of disclosure can shape whether they feel
              able to seek help. The most important thing is to stay present
              without reacting with panic or disgust — both of which, however
              understandable, can cause the person to close down and not
              disclose again.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  background: "rgba(34,197,94,0.06)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: 10,
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#4ade80",
                    marginBottom: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Helpful responses
                </p>
                <ul
                  style={{
                    paddingLeft: 18,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li style={{ fontSize: 14, color: text }}>
                    &ldquo;Thank you for telling me.&rdquo;
                  </li>
                  <li style={{ fontSize: 14, color: text }}>
                    &ldquo;I\u2019m here and I\u2019m not going anywhere.&rdquo;
                  </li>
                  <li style={{ fontSize: 14, color: text }}>
                    &ldquo;Can you tell me more about what\u2019s been going
                    on?&rdquo;
                  </li>
                  <li style={{ fontSize: 14, color: text }}>
                    &ldquo;Would you be open to speaking to someone who can
                    help?&rdquo;
                  </li>
                  <li style={{ fontSize: 14, color: text }}>
                    Sitting in silence with them if that\u2019s what they need
                  </li>
                </ul>
              </div>
              <div
                style={{
                  background: dangerBg,
                  border: `1px solid ${dangerBorder}`,
                  borderRadius: 10,
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#f87171",
                    marginBottom: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Responses to avoid
                </p>
                <ul
                  style={{
                    paddingLeft: 18,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li style={{ fontSize: 14, color: text }}>
                    &ldquo;Why would you do that to yourself?&rdquo;
                  </li>
                  <li style={{ fontSize: 14, color: text }}>
                    Expressions of disgust or horror at the disclosure
                  </li>
                  <li style={{ fontSize: 14, color: text }}>
                    &ldquo;You just want attention.&rdquo;
                  </li>
                  <li style={{ fontSize: 14, color: text }}>
                    Immediate demands for promises never to do it again
                  </li>
                  <li style={{ fontSize: 14, color: text }}>
                    Sharing the disclosure without their consent
                  </li>
                </ul>
              </div>
            </div>

            <p style={{ fontSize: 16, color: text, marginBottom: 16 }}>
              Supporting someone who self-harms is emotionally demanding work.
              You are allowed to have your own feelings about it — fear, grief,
              helplessness. Those feelings deserve space too, separately from
              the person you are supporting. Organisations like PAPYRUS
              (hopeline247.org.uk) and YoungMinds (youngminds.org.uk/parent)
              offer resources specifically for families and carers.
            </p>
            <p style={{ fontSize: 16, color: text }}>
              MEOK can also support carers and family members. If you are a
              parent, partner, or friend navigating this situation, MEOK can
              hold space for your experience too — helping you process your
              own feelings, understand what you are dealing with, and find
              resources for the people you love.
            </p>
          </section>

          {/* ── FAQ ────────────────────────────────────────────────────────────── */}
          <section
            style={{ marginBottom: 56 }}
            aria-labelledby="faq-heading"
          >
            <h2
              id="faq-heading"
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: text,
                marginBottom: 32,
                lineHeight: 1.25,
              }}
            >
              Frequently asked questions
            </h2>

            {[
              {
                q: "Can AI help with self-harm recovery?",
                a: "AI can provide non-judgmental support between therapy sessions, help practise DBT distress tolerance skills, hold a safety plan, and track recovery milestones. It complements professional care but does not replace a therapist, GP, or crisis service. For anyone in acute distress, the first step is always to reach out to a human — Samaritans (116 123) or SHOUT (text 85258) are available 24/7.",
              },
              {
                q: "What is DBT and how does it help with self-harm?",
                a: "Dialectical Behaviour Therapy (DBT) is an evidence-based therapy developed specifically for people who experience intense emotion and self-harm. It includes four skill modules: Mindfulness, Distress Tolerance, Emotion Regulation, and Interpersonal Effectiveness. The distress tolerance module — particularly TIPP skills — gives the nervous system safer ways to discharge overwhelming emotion in the moment without resorting to harmful behaviour. DBT is recommended by NICE for people with a diagnosis of borderline personality disorder and is widely used for self-harm more broadly.",
              },
              {
                q: "How does MEOK handle self-harm disclosures?",
                a: "MEOK responds with care and without judgment. It does not provide information about methods. It does not minimise your pain. It always surfaces crisis resources prominently. Its Maternal Covenant framework means it prioritises your safety above engagement metrics or telling you what you want to hear. When distress is high, MEOK shifts away from task-based conversation toward grounding, de-escalation, and connection with crisis support.",
              },
              {
                q: "What is a safety plan and how can MEOK help with one?",
                a: "A safety plan is a personalised, written set of coping steps to follow when the urge to self-harm intensifies. It is built in advance — while calm enough to think clearly — and typically includes warning signs, internal coping strategies, trusted people to contact, and crisis line numbers. MEOK can store your safety plan in its persistent memory and walk you through it step by step at any hour, including prompting the relevant steps in order as distress escalates.",
              },
              {
                q: "Does MEOK share what I say with anyone?",
                a: "No. MEOK operates under a Privacy Covenant: your conversations are never sold, never used to train external AI models, and never shared with third parties including employers, insurers, or government bodies. You own your memory and can export or delete it at any time. Privacy is a founding principle of MEOK, not an optional feature — because genuine care and data exploitation are incompatible.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: cardBg,
                  border: `1px solid ${borderSubtle}`,
                  borderRadius: 10,
                  padding: "24px 28px",
                  marginBottom: 16,
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: gold,
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ fontSize: 15, color: text, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </section>

          {/* ── CRISIS REMINDER ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <div
              style={{
                background: dangerBg,
                border: `2px solid ${dangerBorder}`,
                borderRadius: 12,
                padding: "28px 32px",
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#f87171",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                UK crisis and support resources
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: text,
                  marginBottom: 20,
                }}
              >
                If you are struggling right now, please reach out. These
                services are free, confidential, and available any time.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 12,
                }}
              >
                {[
                  {
                    name: "Samaritans",
                    contact: "116 123",
                    desc: "Call or email, 24/7",
                    href: "tel:116123",
                  },
                  {
                    name: "SHOUT",
                    contact: "Text 85258",
                    desc: "Crisis text line, 24/7",
                    href: "sms:85258",
                  },
                  {
                    name: "NHS 111",
                    contact: "111",
                    desc: "Mental health option, 24/7",
                    href: "tel:111",
                  },
                  {
                    name: "Childline",
                    contact: "0800 1111",
                    desc: "Under 19s, 24/7",
                    href: "tel:08001111",
                  },
                  {
                    name: "Mind",
                    contact: "0300 123 3393",
                    desc: "Mon\u2013Fri 9am\u20136pm",
                    href: "tel:03001233393",
                  },
                  {
                    name: "Emergency",
                    contact: "999",
                    desc: "Immediate danger",
                    href: "tel:999",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    style={{
                      background: "rgba(220,38,38,0.06)",
                      border: "1px solid rgba(220,38,38,0.25)",
                      borderRadius: 8,
                      padding: "14px 16px",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#f87171",
                        marginBottom: 4,
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: text,
                        marginBottom: 2,
                      }}
                    >
                      {item.contact}
                    </p>
                    <p style={{ fontSize: 12, color: muted, margin: 0 }}>
                      {item.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ── FURTHER READING ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 700,
                color: text,
                marginBottom: 20,
                lineHeight: 1.25,
              }}
            >
              Related reading on MEOK AI LABS
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                {
                  href: "/blog/ai-for-borderline-personality",
                  label:
                    "AI Support for Borderline Personality Disorder: DBT, Emotion Regulation and Memory",
                },
                {
                  href: "/blog/ai-for-depression",
                  label:
                    "AI for Depression: Honest Support Without False Optimism",
                },
                {
                  href: "/blog/ai-for-anxiety",
                  label:
                    "AI for Anxiety: Grounding Techniques, Pattern Recognition and 24/7 Support",
                },
                {
                  href: "/blog/ai-for-ptsd",
                  label:
                    "AI Support for PTSD: Trauma-Informed Care and Nervous System Regulation",
                },
                {
                  href: "/blog/maternal-covenant-explained",
                  label:
                    "The Maternal Covenant: How MEOK\u2019s Care Framework Protects Vulnerable Users",
                },
                {
                  href: "/blog/ai-companion-vs-therapist",
                  label:
                    "AI Companion vs Therapist: Understanding What Each Can and Cannot Do",
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "14px 18px",
                    background: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: 8,
                    color: text,
                    textDecoration: "none",
                    fontSize: 15,
                    transition: "border-color 0.2s",
                  }}
                >
                  <span style={{ color: gold, fontSize: 12 }}>&#8594;</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────────────────────── */}
          <section
            style={{
              background: crisisBg,
              border: `1px solid ${crisisBorder}`,
              borderRadius: 16,
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: gold,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              A gentle note before you read on
            </p>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 800,
                color: text,
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              Recovery takes time. You do not have to face it alone.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: muted,
                maxWidth: 560,
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              If you are in crisis right now, please call Samaritans on{" "}
              <a href="tel:116123" style={{ color: gold }}>
                116 123
              </a>{" "}
              or text SHOUT on{" "}
              <a href="sms:85258" style={{ color: gold }}>
                85258
              </a>
              . They are there for exactly this moment.
            </p>
            <p
              style={{
                fontSize: 16,
                color: muted,
                maxWidth: 560,
                margin: "0 auto 40px",
                lineHeight: 1.7,
              }}
            >
              When you are ready, MEOK is here to support the recovery journey
              — holding your progress with memory, walking you through
              distress tolerance skills, and staying present without judgment.
              Always as a complement to professional care. Always with honesty
              and warmth.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: gold,
                color: bg,
                padding: "16px 36px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Begin your MEOK journey
            </Link>
            <p
              style={{
                fontSize: 13,
                color: muted,
                marginTop: 16,
              }}
            >
              MEOK AI LABS &middot; Built by Nicholas Templeman &middot;{" "}
              <a
                href="https://x.com/meok_ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: muted, textDecoration: "underline" }}
              >
                @meok_ai
              </a>
            </p>
          </section>

          {/* ── DISCLAIMER ─────────────────────────────────────────────────────── */}
          <footer
            style={{
              marginTop: 48,
              paddingTop: 32,
              borderTop: `1px solid ${borderSubtle}`,
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: muted,
                lineHeight: 1.6,
                marginBottom: 12,
              }}
            >
              <strong style={{ color: text }}>Important disclaimer:</strong>{" "}
              This article is for informational purposes only. MEOK is not a
              medical device, a clinical service, or a crisis intervention
              tool. It is a supportive AI companion designed to complement —
              never replace — professional mental health care. If you are
              experiencing a mental health crisis, please contact emergency
              services (999), NHS 111, or Samaritans (116 123) immediately.
            </p>
            <p style={{ fontSize: 13, color: muted, lineHeight: 1.6 }}>
              The DBT skills described in this article are adaptations of
              publicly documented therapeutic techniques for informational
              purposes. For formal DBT treatment, please seek a qualified
              therapist. Your GP can refer you to NHS mental health services,
              and Mind (mind.org.uk) can help you find local support.
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
