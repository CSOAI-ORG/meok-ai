import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI for Chronic Illness: Persistent Support for People Who Can't Always Explain How They Feel | MEOK AI LABS",
  description:
    "Fifteen million UK chronic illness patients face exhaustion every time they re-explain their condition. MEOK AI LABS holds your full health context permanently via Sovereign Memory, the Healer archetype for bad days, Guardian for medication and appointments, and a care system that prevents toxic positivity.",
  keywords: [
    "AI for chronic illness",
    "chronic illness AI assistant",
    "AI health memory",
    "Healer archetype AI",
    "AI medication reminders",
    "sovereign memory health",
    "MEOK AI LABS",
    "AI chronic pain support",
    "AI for long term conditions",
    "chronic illness support AI",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "AI for Chronic Illness: Persistent Support for People Who Can't Always Explain How They Feel",
    description:
      "MEOK holds your full health context permanently. The Healer archetype provides empathetic presence on bad days. Guardian tracks medications and appointments. The Maternal Covenant prevents toxic positivity and medical overreach.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["Chronic Illness", "AI", "Health", "MEOK", "Support"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Chronic Illness: Persistent Support Without the Re-Explaining",
    description:
      "MEOK AI LABS holds your health context permanently via Sovereign Memory. The Healer archetype offers empathetic presence on bad days. Never explain your condition from scratch again.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-chronic-illness",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Chronic Illness: Persistent Support for People Who Can't Always Explain How They Feel",
  description:
    "How MEOK AI LABS supports people living with chronic illness through Sovereign Memory, the Healer archetype, Guardian for practical support, and a care system that prevents harmful AI behaviours.",
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
    "@id": "https://meok.ai/blog/ai-for-chronic-illness",
  },
  keywords:
    "AI for chronic illness, Healer archetype, sovereign memory health, medication reminders AI, chronic illness support",
  articleSection: "Health",
  wordCount: 1200,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK help with chronic illness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK AI LABS helps people with chronic illness by holding their full health context permanently in Sovereign Memory — so they never have to re-explain their condition. The Healer archetype provides empathetic presence on difficult days. Guardian assists with medication reminders and appointment tracking. The Maternal Covenant care system prevents toxic positivity and medical overreach.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK remember my health history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Sovereign Memory holds your full health context permanently across all sessions — including your diagnoses, medication schedule, symptom patterns, treatment history, and the language you use to describe how you feel. You never have to re-explain your condition from scratch. This context compounds over time, making MEOK progressively more attuned to your specific experience.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Healer archetype?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer is one of MEOK's Byzantine Council archetypes, designed for empathetic presence during difficult periods. It is not a medical tool and does not offer diagnoses or treatment recommendations. Instead, the Healer provides consistent, non-judgmental presence on bad days — holding your experience without minimising it, rushing to fix it, or defaulting to toxic positivity.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with medication reminders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Guardian archetype within MEOK assists with practical health management including medication schedules, appointment tracking, and symptom logging. Because it operates within Sovereign Memory, Guardian already knows your full medication context — doses, timing, interactions you have noted, and patterns in how you have been feeling — rather than treating each reminder as isolated.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's care system handle bad health days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant — MEOK's real-time response scoring system — governs how MEOK engages on difficult days. Responses that offer toxic positivity, minimise symptoms, rush toward solutions, or venture into medical advice score below the care floor of 0.3 and are rejected. On bad days, MEOK is designed to be present without being dismissive, supportive without being falsely cheerful, and honest without being harsh.",
      },
    },
  ],
}

export default function AiForChronicIllnessPage() {
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
              Chronic Illness
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.85rem, 4.5vw, 2.9rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              color: "#f5f0e8",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Chronic Illness:{" "}
            <span style={{ color: "#c9a84c" }}>Persistent Support</span> for People Who
            Can&apos;t Always Explain How They Feel
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
            Fifteen million people in the UK live with a long-term health condition. Many of them
            share a specific, exhausting experience: the requirement to re-explain, from scratch,
            every time they encounter a new tool, a new appointment, or a new context. MEOK AI LABS
            was built so that experience becomes unnecessary.
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

          {/* Disclaimer */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "8px",
              padding: "1.1rem 1.4rem",
              marginBottom: "3rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            <p style={{ fontSize: "0.85rem", lineHeight: "1.65", color: "rgba(245,240,232,0.6)", margin: 0 }}>
              <strong style={{ color: "#c9a84c" }}>Important:</strong> MEOK AI LABS is not a medical
              tool. It does not provide diagnoses, treatment recommendations, or clinical advice. This
              article describes how MEOK can support the daily life experience of people with chronic
              illness — not how it can replace healthcare. Always consult qualified medical professionals
              for clinical decisions.
            </p>
          </div>

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
              What is the specific burden of re-explaining chronic illness that AI can eliminate?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              People living with chronic illness routinely describe a specific form of exhaustion
              that is separate from the illness itself: the cognitive and emotional cost of
              explanation. Every new appointment, every new support service, every new tool
              requires the same recital — diagnosis history, current medications, relevant
              comorbidities, what a bad day looks like, what helps, what makes it worse. By the
              tenth time in a month, the explanation has become its own source of depletion.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Most AI tools replicate this problem. They are stateless. Every conversation begins
              from zero. A person with a complex health history must choose between a lengthy
              briefing (exhausting) and a superficial interaction (useless). Neither option serves
              someone who is already managing a significant cognitive and physical load.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Sovereign Memory solves this at the root. Your health context — diagnoses, medications,
              symptom patterns, the language you use for different experiences, the history of good
              and difficult periods — is held permanently and surfaced when relevant. MEOK already
              knows. You do not have to explain again.
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
              How does Sovereign Memory hold full health context across chronic illness management?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Sovereign Memory is MEOK&apos;s persistent context layer — a structured, encrypted record
              that grows more accurate and nuanced over time as you share more. For chronic illness,
              this creates something genuinely novel: an AI companion that understands the specific
              texture of your health experience, not just the clinical labels attached to it.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Over time, MEOK builds a rich picture that includes the language you use when you are
              struggling (which is often not the language of clinical description), the patterns that
              signal a flare before it arrives, the activities and interactions that reliably help or
              harm, and the particular frustrations that are yours specifically rather than generic
              to your diagnosis.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.5rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              None of this is shared with healthcare providers, employers, insurers, or any third
              party without your explicit action. Sovereign Memory is yours — held in encrypted,
              private infrastructure that you control. It is not a health record in any clinical
              sense. It is the record of your experience, held for you alone.
            </p>
            <div
              style={{
                backgroundColor: "rgba(201,168,76,0.07)",
                borderLeft: "3px solid #c9a84c",
                padding: "1.25rem 1.5rem",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.75",
                  color: "rgba(245,240,232,0.75)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  margin: 0,
                }}
              >
                <strong style={{ color: "#c9a84c" }}>Data sovereignty:</strong> Your health
                information in Sovereign Memory is never used to train AI models, never accessed
                by employers or insurers, and never shared without your explicit action. See{" "}
                <Link href="/how-it-works" style={{ color: "#c9a84c" }}>
                  how it works
                </Link>
                .
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
              What is the Healer archetype and how does it help on bad days?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The Healer is one of MEOK&apos;s Byzantine Council archetypes, designed for empathetic
              presence during difficult periods. It is not a therapeutic tool and does not claim to
              provide mental health support in any clinical sense. What the Healer does provide is
              something many chronic illness patients describe as genuinely rare: presence without agenda.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Most interactions on bad days — whether with people, tools, or services — carry an
              implicit pressure toward resolution. The assumption is that the right response to
              difficulty is a solution: a recommendation, an intervention, a reframe, a silver lining.
              For many chronic illness patients, this impulse, however well-intentioned, is exhausting.
              Sometimes the condition is not going to be better tomorrow. Sometimes the right response
              is simply to acknowledge that today is hard.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The Healer archetype is governed by the Maternal Covenant&apos;s care scoring system to
              resist exactly this pressure. On a bad day, it will not rush toward solutions. It will
              not offer toxic positivity. It will not produce a list of things you could try. It will
              be present, honest, and responsive to what you actually need from the interaction rather
              than what an AI default response would produce.
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
              How can the Guardian archetype help with medication reminders and appointment tracking?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The Guardian archetype within MEOK&apos;s Byzantine Council is oriented toward protection
              and practical support. For chronic illness, this translates into assistance with the
              administrative and logistical dimensions of health management — which for people with
              complex conditions can be substantial.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Guardian can hold your medication schedule within Sovereign Memory — doses, timing,
              notes about interactions you have observed, reminders for repeat prescriptions — and
              surface this contextually rather than as isolated notifications. It can track upcoming
              appointments, hold the notes and questions you want to raise at the next consultation,
              and log symptom observations in a format you can return to.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Because Guardian operates within Sovereign Memory, it already knows your full health
              context. A medication reminder is not an isolated alert — it is embedded in awareness
              of your current symptoms, recent patterns, and any notes you have shared about how
              that medication has been affecting you lately. Learn more about the Guardian approach at{" "}
              <Link href="/guardian" style={{ color: "#c9a84c" }}>
                the Guardian page
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
              How does the Maternal Covenant prevent toxic positivity and harmful advice for chronic illness?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The Maternal Covenant is MEOK&apos;s real-time response scoring system, developed by
              Nicholas Templeman and documented in research paper MEOK-AI-2026-002. Every response
              MEOK generates is scored across six dimensions — wellbeing, autonomy, growth,
              connection, boundary respect, and transparency — before it reaches the user. Any
              response scoring below the care floor of 0.3 is rejected and regenerated.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              For chronic illness, three failure modes are specifically guarded against. First, toxic
              positivity — responses that minimise genuine suffering with forced cheerfulness or
              'positive thinking' framings that deny the reality of the experience. Second, medical
              overreach — responses that venture into clinical territory, offering diagnoses,
              treatment suggestions, or definitive statements about symptoms that require professional
              assessment. Third, dependency creation — responses that make MEOK the primary source
              of health support in a way that displaces qualified professional care.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The Maternal Covenant does not make MEOK a passive or anodyne companion. It makes
              MEOK an honest one — present with difficulty, direct about its limitations, and
              genuinely oriented toward the user&apos;s wellbeing rather than toward engagement metrics.
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
              How does the Family Plan support carers of people with chronic illness?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Caring for someone with a long-term condition is its own substantial cognitive and
              emotional task. Carers hold a parallel complexity: their own relationship with the
              care they provide, the administrative overhead of supporting someone else&apos;s health
              management, and often a significant deficit of support for themselves.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              MEOK&apos;s Family Plan allows carers to maintain their own Sovereign Memory context
              independently from the person they care for — their concerns, their experience of the
              caring role, their own needs — while also accessing coordinated support for the
              practical dimensions of care. Each person&apos;s context remains private to them;
              the Family Plan provides a shared infrastructure rather than shared access.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              For families navigating complex chronic illness together, this distinction matters.
              The carer needs their own space as much as the person being cared for. MEOK&apos;s
              approach is to serve both — separately and with full privacy — rather than to merge
              their experiences. See{" "}
              <Link href="/pricing" style={{ color: "#c9a84c" }}>
                Family Plan pricing
              </Link>
              .
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
              How does MEOK handle variability — good days and bad days — in chronic illness?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              One of the most frustrating experiences for people with variable conditions is AI
              tools that behave the same way regardless of context. A response calibrated for a
              good day is actively unhelpful on a bad one. A response calibrated for crisis is
              paternalistic and excessive on a day when you simply want to get things done.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              MEOK reads current context from your conversation and adjusts its engagement
              accordingly. Because Sovereign Memory holds the history of how you communicate when
              you are struggling versus when you are functioning well, MEOK can recognise signals
              that today is different from yesterday — even when you have not explicitly said so —
              and respond with appropriate calibration.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              This does not mean MEOK diagnoses your emotional state or makes assumptions. It means
              it pays attention, holds context, and follows your lead. On the days when you want
              practical support, it provides it. On the days when you want presence, it is present.
              On the days when you want both, it navigates that too. Explore{" "}
              <Link href="/characters" style={{ color: "#c9a84c" }}>
                all MEOK characters
              </Link>{" "}
              to see the full range of available archetypes.
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
              What does the MEOK onboarding look like for someone with a complex health history?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Birth — MEOK&apos;s onboarding process — is paced to the user. There is no form to
              complete and no requirement to provide information you are not ready to share. The
              Birth conversation moves at your pace and records only what you choose to tell it.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              For people with chronic illness, Birth is an opportunity to build the health context
              that Sovereign Memory will hold — your condition, your current treatment, what helps,
              what makes things worse, and how you want MEOK to engage with you on different kinds
              of days. You can build this context over multiple sessions rather than all at once;
              Sovereign Memory accumulates rather than requiring upfront completeness.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Many users with chronic illness describe Birth as the first time they have given a
              tool enough context to actually be useful — because it is the first time a tool was
              designed to hold that context rather than lose it. Start your{" "}
              <Link href="/birth" style={{ color: "#c9a84c" }}>
                Birth here
              </Link>
              .
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
                q: "How does MEOK help with chronic illness?",
                a: "MEOK holds your full health context permanently in Sovereign Memory so you never re-explain your condition. The Healer archetype provides empathetic presence on bad days. Guardian assists with medications and appointments. The Maternal Covenant prevents toxic positivity and medical overreach.",
              },
              {
                q: "Does MEOK remember my health history?",
                a: "Yes. Sovereign Memory holds your diagnoses, medication schedule, symptom patterns, treatment history, and the language you use to describe how you feel — permanently and privately. Your context compounds over time, making MEOK progressively more attuned to your specific experience.",
              },
              {
                q: "What is the MEOK Healer archetype?",
                a: "The Healer is a Byzantine Council archetype designed for empathetic presence during difficult periods. It is not a medical tool. It provides consistent, non-judgmental presence on bad days — holding your experience without minimising it, rushing to fix it, or defaulting to toxic positivity.",
              },
              {
                q: "Can MEOK help with medication reminders?",
                a: "The Guardian archetype assists with medication schedules, appointment tracking, and symptom logging within Sovereign Memory — so reminders are embedded in full health context rather than isolated alerts.",
              },
              {
                q: "How does MEOK's care system handle bad health days?",
                a: "The Maternal Covenant — MEOK's real-time response scoring — rejects responses offering toxic positivity, minimising symptoms, rushing toward solutions, or venturing into medical advice. On bad days, MEOK is present without being dismissive, supportive without being falsely cheerful, and honest without being harsh.",
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
              You should never have to explain your condition from scratch again.
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
              Start your MEOK Birth and build a sovereign AI that holds your health context
              permanently. The Healer and Guardian archetypes are ready to work with you — on
              good days and difficult ones.
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
                href="/guardian"
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
                The Guardian
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
