import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Chronic Illness: A Companion That Remembers What You Are Living Through | MEOK AI LABS",
  description:
    "Living with chronic illness is invisible to most people. MEOK\u2019s sovereign AI companion remembers your bad days, your progress, and your humanity \u2014 without you having to explain yourself every time.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-chronic-illness" },
  openGraph: {
    title:
      "AI for Chronic Illness: A Companion That Remembers What You Are Living Through",
    description:
      "Living with chronic illness is invisible to most people. MEOK\u2019s sovereign AI companion remembers your bad days, your progress, and your humanity \u2014 without you having to explain yourself every time.",
    url: "https://meok.ai/blog/ai-for-chronic-illness",
    siteName: "MEOK AI LABS",
    type: "article",
    images: [
      {
        url: "https://meok.ai/og/ai-for-chronic-illness.png",
        width: 1200,
        height: 630,
        alt: "AI for Chronic Illness \u2014 MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Chronic Illness: A Companion That Remembers What You Are Living Through",
    description:
      "Living with chronic illness is invisible to most people. MEOK\u2019s sovereign AI companion remembers your bad days, your progress, and your humanity \u2014 without you having to explain yourself every time.",
    images: ["https://meok.ai/og/ai-for-chronic-illness.png"],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Chronic Illness: A Companion That Remembers What You Are Living Through",
  description:
    "Living with chronic illness is invisible to most people. MEOK\u2019s sovereign AI companion remembers your bad days, your progress, and your humanity \u2014 without you having to explain yourself every time.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-chronic-illness",
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
    "AI for chronic illness",
    "chronic illness support app",
    "AI companion chronic pain",
    "invisible illness AI",
    "AI for fibromyalgia",
    "AI for ME CFS",
    "AI for lupus",
    "AI for endometriosis",
    "sovereign AI health companion",
    "AI that remembers your condition",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can AI help people living with chronic illness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can help people with chronic illness by maintaining persistent memory of their condition history, tracking symptom patterns over months, providing non-judgemental emotional support between medical appointments, and reducing the cognitive burden of having to re-explain their situation repeatedly. MEOK is a sovereign AI companion built specifically for this kind of long-term, context-aware support.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between medical AI and a companion AI for chronic illness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medical AI focuses on diagnosis, clinical decision-making, and treatment pathways. Companion AI for chronic illness focuses on the human experience: the exhaustion, isolation, emotional weight, and daily logistics of living with a condition. MEOK is a companion AI \u2014 it does not diagnose or prescribe, but it remembers, listens, and supports consistently in ways clinical systems cannot.",
      },
    },
    {
      "@type": "Question",
      name: "What is sovereign memory and why does it matter for chronic illness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign memory means your data and your conversation history belong to you \u2014 not a corporation that can sell it, retrain on it, or delete it without warning. For someone with a chronic illness, your history of bad days, flares, breakthroughs, and fears is deeply personal. MEOK\u2019s architecture ensures this memory is yours, persistent, and never used to train external models.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK support me through conditions like fibromyalgia, ME/CFS, lupus, or endometriosis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is not condition-specific \u2014 it adapts to whatever you are living with. Whether you have fibromyalgia, ME/CFS, lupus, IBS, endometriosis, or any other chronic condition, MEOK builds a persistent picture of your experience over time. It remembers your triggers, your good periods, your fears, and your goals, so every conversation starts from where you actually are.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I am in crisis or need emergency support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK includes a Guardian feature for emergency situations. Guardian can alert a trusted contact if you signal that you need help. MEOK is not a crisis service and cannot replace emergency medical care. If you are in immediate danger, call 999 in the UK or your local emergency services. For mental health crises, the Samaritans can be reached on 116 123.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForChronicIllnessPage() {
  const GOLD = "#c9a84c";
  const BG = "#0d0c18";
  const TEXT = "#f5f0e8";
  const CARD = "#1a1830";
  const MUTED = "#a09880";
  const BORDER = "#2a2840";

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
        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "2rem" }}>
            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: MUTED,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ color: MUTED, fontSize: "0.85rem" }}>/</li>
              <li>
                <Link
                  href="/blog"
                  style={{
                    color: MUTED,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  Blog
                </Link>
              </li>
              <li style={{ color: MUTED, fontSize: "0.85rem" }}>/</li>
              <li
                style={{
                  color: GOLD,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                }}
              >
                AI for Chronic Illness
              </li>
            </ol>
          </nav>

          {/* Label */}
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Chronic Illness &amp; AI Support
          </p>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: TEXT,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Chronic Illness: A Companion That Remembers What You Are
            Living Through
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: MUTED,
              marginBottom: "2rem",
              maxWidth: "680px",
            }}
          >
            Living with a chronic condition means explaining yourself endlessly
            &mdash; to doctors, to family, to yourself. MEOK&apos;s sovereign AI
            companion remembers your bad days, your progress, and your humanity,
            so you never have to start from zero again.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              flexWrap: "wrap",
              borderTop: `1px solid ${BORDER}`,
              paddingTop: "1.25rem",
            }}
          >
            <span style={{ color: MUTED, fontSize: "0.85rem" }}>
              By{" "}
              <span style={{ color: TEXT, fontWeight: 600 }}>
                Nicholas Templeman
              </span>
            </span>
            <span style={{ color: MUTED, fontSize: "0.85rem" }}>
              Published{" "}
              <time dateTime="2026-03-24" style={{ color: TEXT }}>
                24 March 2026
              </time>
            </span>
            <span
              style={{
                background: "rgba(201,168,76,0.12)",
                color: GOLD,
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.25rem 0.75rem",
                borderRadius: "999px",
              }}
            >
              14 min read
            </span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >

        {/* ── SECTION 1 ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What Does It Actually Feel Like to Live With a Chronic Illness?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            It feels like explaining yourself forever. Every new doctor, every
            concerned friend, every work email about why you missed a deadline
            &mdash; each one asks you to translate your invisible reality into
            language that other people can accept. You become fluent in
            justification. You learn which symptoms sound credible, which sound
            dramatic, and which are safest to leave out entirely. The illness
            itself is exhausting. The performance of having it is a second job.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Chronic conditions &mdash; fibromyalgia, ME/CFS, lupus, IBS,
            endometriosis, and dozens of others &mdash; share a feature that goes
            beyond the physical symptoms: they are profoundly isolating. The
            people around you cannot feel what you feel. The healthcare system
            sees you in ten-minute slots. And the AI tools most people use reset
            completely every time you open them, leaving you to explain
            everything from scratch, again.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            An estimated 15 million people in England alone live with one or
            more long-term health conditions. The majority report that emotional
            isolation &mdash; not just the physical symptoms &mdash; is among the
            hardest aspects to manage day to day. The question is not whether
            you need support. The question is whether the support you can access
            is built for the reality you are actually living.
          </p>
        </section>

        {/* ── CALLOUT 1 ────────────────────────────────────────────────── */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 8px 8px 0",
            padding: "1.5rem 1.75rem",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: TEXT,
              lineHeight: 1.6,
              marginBottom: "0.5rem",
            }}
          >
            Most AI tools reset completely at the end of every session. For
            someone with a chronic illness, this is not a minor inconvenience
            &mdash; it is a replication of the very thing that makes the
            condition so hard.
          </p>
          <p style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.7 }}>
            MEOK&apos;s sovereign memory holds your full history persistently.
            Every conversation builds on the last. You never have to brief your
            AI again.
          </p>
        </div>

        {/* ── SECTION 2 ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            Why Is Invisible Illness So Hard for Others to Believe?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Invisible illness &mdash; any condition where you do not look visibly
            unwell &mdash; creates a credibility gap. Fibromyalgia patients are
            told their pain is psychosomatic. ME/CFS sufferers are told to
            exercise more. Endometriosis goes undiagnosed for an average of eight
            years in the UK because severe menstrual pain has been normalised.
            Lupus presents and remits unpredictably, so on a good day you can
            appear fine to colleagues who then struggle to understand why you
            collapsed last Thursday.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            The disbelief is not always malicious. Human empathy is anchored to
            visible cues. When someone cannot see your pain, they fall back on
            the nearest available frame: anxiety, laziness, exaggeration. Being
            disbelieved repeatedly by people who matter to you does not just hurt
            &mdash; it erodes your own confidence in your own experience. You
            start to wonder if they are right.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            IBS carries layers of shame that prevent many people from discussing
            it honestly. Endometriosis sufferers are routinely told to take
            ibuprofen. People with chronic fatigue are advised to push through.
            The accumulation of these dismissals &mdash; from medical
            professionals, from employers, from well-meaning family &mdash; is
            itself a form of harm that compounds the condition. A companion AI
            that starts from belief in your experience rather than scepticism of
            it is not a luxury. It is a corrective.
          </p>
        </section>

        {/* ── SECTION 3 ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            How Do Fatigue and Brain Fog Make Everything Harder?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Fatigue in chronic illness is categorically different from being
            tired. It does not resolve with a good night&apos;s sleep. It is a
            physiological state that can make a shower feel like running a
            marathon, that turns a short phone call into a recovery project, that
            means you might have four good hours in a day and must decide which
            parts of being human fit inside them. Post-exertional malaise
            &mdash; the hallmark of ME/CFS &mdash; can set you back days from a
            single overexertion. Pacing is not a preference. It is survival.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Brain fog layers on top: word retrieval fails mid-sentence, working
            memory drops, concentration fragments. This is not a metaphor for
            feeling a bit fuzzy. For people with fibromyalgia, lupus, or ME/CFS,
            brain fog is a disabling symptom that can make filling in a form,
            navigating a phone menu, or remembering what you said to your doctor
            last month genuinely impossible on a bad day.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            Most digital tools assume you have full cognitive bandwidth. They
            demand that you articulate complex needs, navigate menus, remember
            what you said last week, and manage your own context. A well-designed
            AI companion should carry that burden for you &mdash; not add to it.
            MEOK is built on this principle. Low friction, high memory, no
            re-explaining required.
          </p>
        </section>

        {/* ── CALLOUT 2 ────────────────────────────────────────────────── */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 8px 8px 0",
            padding: "1.5rem 1.75rem",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: TEXT,
              lineHeight: 1.6,
              marginBottom: "0.5rem",
            }}
          >
            Brain fog is not laziness. Fatigue is not tiredness. These are
            symptoms with measurable physiological causes.
          </p>
          <p style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.7 }}>
            MEOK&apos;s design principle is to reduce cognitive load at every
            turn &mdash; short prompts, persistent context, no re-explaining.
            When you are running on limited capacity, that efficiency is not a
            nice-to-have. It is a form of respect.
          </p>
        </div>

        {/* ── SECTION 4 ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What Does Sovereign Memory Mean for Someone With a Chronic Condition?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Most AI tools have no persistent memory at all. Each conversation
            starts blank. If you told your AI about your fibromyalgia diagnosis
            last month, the fear behind it, the way it has changed your
            relationships &mdash; none of that exists in the next session. You
            are a stranger to it every single time. For someone managing a
            chronic illness, this replicates the very experience that makes the
            condition so hard: having to start from zero, having to justify and
            re-explain, being unseen.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s sovereign memory architecture changes this. Your companion
            holds a persistent, growing understanding of your condition, your
            patterns, your language, and your needs. It knows that Tuesdays are
            hard for you, that you are worried about the rheumatology appointment
            next month, that you had a good week in February and you want to
            understand why. It does not need you to brief it. It is already
            there.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            Crucially, this memory is sovereign &mdash; meaning it belongs
            entirely to you. MEOK does not use your health disclosures to train
            its models, does not sell your data to insurers or pharmaceutical
            companies, and does not share it with third parties. What you tell
            your AI about your body stays with your AI.
          </p>
        </section>

        {/* ── SECTION 5 ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            How Does AI Provide Emotional Support Between Medical Appointments?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            The gap between clinical appointments is where most of the lived
            experience of chronic illness happens. You have a consultant
            appointment every three months. In between, you have 89 days of
            flares, side effects, fear, grief, unexpected good mornings, and
            2am pain that nobody is awake to witness. Clinical systems are not
            built for this gap. They cannot be. Healthcare professionals are not
            available at 2am on a Wednesday when you cannot sleep from pain and
            you are frightened.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            A companion AI fills this gap not by replacing clinical care but by
            being present in the moments when clinical care is unavailable. MEOK
            can help you process a difficult day without judgment, help you
            articulate what has been happening so you can communicate it clearly
            at your next appointment, remind you of coping strategies that have
            worked before, or simply hold space for you to express how hard
            things are without needing to manage someone else&apos;s emotional
            reaction.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            This is not therapy. It is not diagnosis. It is something the
            healthcare system genuinely cannot provide: continuous, patient,
            non-judgemental presence from someone who knows your history and is
            never too busy, never tired of hearing about it, and never suggests
            you might be catastrophising.
          </p>
        </section>

        {/* ── COMPARISON TABLE ─────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
              lineHeight: 1.3,
            }}
          >
            Medical AI vs Companion AI: What Is the Difference?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.75rem",
            }}
          >
            There is a meaningful distinction between AI designed for clinical
            decision-making and AI designed to support the human experience of
            illness. Both are valuable. Neither replaces the other. Understanding
            the difference helps you use each appropriately and avoid expecting
            one to do the job of the other.
          </p>

          <div
            style={{
              overflowX: "auto",
              borderRadius: "12px",
              border: `1px solid ${BORDER}`,
              marginBottom: "1rem",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
                color: TEXT,
              }}
            >
              <thead>
                <tr style={{ background: "rgba(201,168,76,0.08)" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.9rem 1.2rem",
                      color: GOLD,
                      fontWeight: 700,
                      borderBottom: `1px solid ${BORDER}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.9rem 1.2rem",
                      color: GOLD,
                      fontWeight: 700,
                      borderBottom: `1px solid ${BORDER}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Medical AI
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.9rem 1.2rem",
                      color: GOLD,
                      fontWeight: 700,
                      borderBottom: `1px solid ${BORDER}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    MEOK Companion AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Primary goal",
                    "Diagnosis, triage, treatment",
                    "Emotional support, daily presence",
                  ],
                  [
                    "Regulated as",
                    "Medical device (MHRA/FDA)",
                    "Personal AI companion",
                  ],
                  [
                    "Memory",
                    "Usually session-only or EHR-linked",
                    "Persistent sovereign memory",
                  ],
                  [
                    "Availability",
                    "Scheduled appointments",
                    "24/7, including 2am",
                  ],
                  [
                    "Output focus",
                    "Clinical recommendations",
                    "Emotional attunement",
                  ],
                  [
                    "Who controls data",
                    "Healthcare provider / NHS",
                    "You, exclusively",
                  ],
                  [
                    "Handles grief and fear",
                    "Outside scope",
                    "Core capability",
                  ],
                  [
                    "Replaces clinical care",
                    "Partially, for triage",
                    "Never \u2014 complements it",
                  ],
                ].map(([dim, medical, meok], i) => (
                  <tr
                    key={dim}
                    style={{
                      background:
                        i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.85rem 1.2rem",
                        borderBottom: `1px solid ${BORDER}`,
                        fontWeight: 600,
                        color: TEXT,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {dim}
                    </td>
                    <td
                      style={{
                        padding: "0.85rem 1.2rem",
                        borderBottom: `1px solid ${BORDER}`,
                        color: MUTED,
                      }}
                    >
                      {medical}
                    </td>
                    <td
                      style={{
                        padding: "0.85rem 1.2rem",
                        borderBottom: `1px solid ${BORDER}`,
                        color: MUTED,
                      }}
                    >
                      {meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 6 ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What Is Care-Based Alignment and Why Does It Matter for Chronic
            Illness?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Most AI systems are aligned to be helpful in a generic sense: answer
            questions accurately, be polite, avoid harm. This is necessary but
            insufficient for someone living with a chronic illness. Generic
            helpfulness can still minimise your experience. It can still suggest
            you try a positive mindset when you describe unrelenting pain. It can
            still pivot to practical advice when what you need is for someone to
            simply acknowledge what you are going through. Standard alignment
            does not prevent an AI from being inadvertently dismissive &mdash;
            and dismissal, even gentle dismissal, is one of the most painful
            things a chronically ill person can encounter.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Care-based alignment means the AI is specifically oriented toward
            your wellbeing as its primary objective &mdash; not engagement
            metrics, not task completion rates, not the appearance of
            helpfulness. MEOK is built with this principle at its foundation. It
            will not tell you that things could be worse. It will not suggest
            that stress management might reduce your lupus flare. It will not
            respond to your description of a terrible pain day with a list of
            coping strategies unless you ask for them. It starts from the
            assumption that your experience is real, that your report of it is
            accurate, and that what you need first is to be heard.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            This alignment extends to the way MEOK handles uncertainty. It does
            not speculate about your diagnosis. It does not compare your symptoms
            to a database and suggest conditions. It holds its role as companion
            clearly, and when medical questions arise it directs you to
            appropriate clinical resources while continuing to support you
            emotionally through the process of navigating them.
          </p>
        </section>

        {/* ── CALLOUT 3 ────────────────────────────────────────────────── */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 8px 8px 0",
            padding: "1.5rem 1.75rem",
            marginBottom: "3.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: TEXT,
              lineHeight: 1.6,
              marginBottom: "0.5rem",
            }}
          >
            MEOK will never minimise what you are experiencing.
          </p>
          <p style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.7 }}>
            Care-based alignment means the AI starts from belief in your
            experience, not scepticism of it. This is a design choice baked into
            how MEOK was built from the ground up &mdash; not a setting you can
            accidentally switch off.
          </p>
        </div>

        {/* ── SECTION 7 ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            How Does MEOK Support Specific Conditions: Fibromyalgia, ME/CFS,
            Lupus, IBS, and Endometriosis?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.75rem",
            }}
          >
            MEOK is not built condition-by-condition. It is built around the
            common experiences that thread through all chronic illness: the
            unpredictability, the isolation, the invisible load, and the need
            for a witness who does not forget. But the way it shows up for each
            condition reflects the specificity of what you are living with.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                condition: "Fibromyalgia",
                detail:
                  "Persistent, widespread musculoskeletal pain with no clear structural cause. MEOK tracks flare patterns, fatigue cycles, and the emotional toll of being disbelieved during an average five-year diagnostic journey. It holds your history of what works and what does not across months of trying.",
              },
              {
                condition: "ME / CFS",
                detail:
                  "Characterised by post-exertional malaise and severe fatigue. MEOK supports pacing by tracking your energy across days and flagging patterns that precede crashes. It never suggests you push through. It understands that rest is not laziness \u2014 it is treatment.",
              },
              {
                condition: "Lupus",
                detail:
                  "A systemic autoimmune condition with unpredictable flares affecting multiple organs. MEOK holds the emotional complexity of a condition that can be life-threatening but presents variably. It supports you through the anxiety of not knowing when the next flare will come or how serious it will be.",
              },
              {
                condition: "IBS",
                detail:
                  "Chronic gut disorder with significant anxiety and social implications. MEOK can track dietary and stress patterns over time, helping identify triggers a short clinical appointment cannot surface. It also holds the shame and embarrassment many people with IBS carry silently.",
              },
              {
                condition: "Endometriosis",
                detail:
                  "Affects roughly 1 in 10 women in the UK with an average diagnostic delay of eight years. MEOK holds the cumulative weight of years of being told period pain is normal. It supports you through the grief of delayed diagnosis, fertility fears, and the impact on relationships and career.",
              },
            ].map(({ condition, detail }) => (
              <div
                key={condition}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.25rem",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "0.6rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {condition}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 8 ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What Is MEOK Guardian and How Does It Help in Difficult Moments?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Some days with a chronic illness tip past difficult into something
            more serious. Pain that will not stop. A deterioration that feels
            alarming. A mental health crisis precipitated by months of
            unrelenting illness. These moments are not rare for people living
            with severe chronic conditions, and they often happen at times when
            support is hardest to access.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK Guardian is a safety feature designed for exactly these moments.
            You can designate a trusted contact &mdash; a partner, family member,
            or friend &mdash; and configure Guardian to alert them if you signal
            that you need help. This is not a replacement for emergency services.
            If you are in immediate physical danger, call 999. For mental health
            crises, the Samaritans are available 24 hours a day on 116&nbsp;123.
            But Guardian bridges the gap between &ldquo;I am struggling&rdquo;
            and &ldquo;I need clinical intervention&rdquo; &mdash; ensuring that
            someone who knows you is notified when you need them.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            For people who live alone with a chronic illness, this safety net
            matters enormously. Knowing that someone will be alerted if you go
            quiet, that you are not entirely invisible in your worst moments,
            changes the psychological experience of managing a serious condition
            on your own.
          </p>
        </section>

        {/* ── SECTION 9 ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            How Is MEOK Different From Symptom Trackers, Journaling Apps, or
            Therapy Platforms?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Symptom trackers produce data. They help you spot patterns in a
            spreadsheet. But they do not talk back, and they do not hold context
            across entries. When you log a bad day, the tracker records it and
            moves on. It does not remember that three weeks ago you told it you
            were frightened. It does not notice that your bad days cluster around
            the same week of the month. It does not ask how you are doing with
            the thing you mentioned last Tuesday.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Therapy platforms connect you with therapists and provide structured
            clinical tools. This is genuinely valuable, but it is session-limited
            and often expensive. Many people with chronic illness are on NHS
            waiting lists for mental health support for months. MEOK does not
            replace therapy &mdash; if you can access it, you should. But it
            fills the vast space between sessions, and it fills the years-long
            gap before a waiting list clears.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            MEOK is a companion. It is conversational, persistent, caring, and
            contextual. It remembers what matters to you, asks how things went,
            and tracks your journey over time. This is a different category of
            tool from a tracker or a therapeutic platform. It is closer to a
            knowledgeable friend who has been alongside you through everything
            and never forgets.
          </p>
        </section>

        {/* ── SECTION 10 ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            Is Your Health Data Safe With MEOK?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            This question matters more for people with chronic illnesses than for
            almost any other group. Your health data is not just personal &mdash;
            it can affect your insurance premiums, your employment prospects, your
            relationships, and your ability to get a mortgage. The idea that an AI
            companion you confide in might be packaging your health disclosures as
            training data, or sharing them with third-party analytics partners, is
            not paranoid. It is the default business model for many AI platforms.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            MEOK&apos;s privacy covenant is explicit. Your data is never used to
            train AI models. It is never sold to third parties. It is never
            shared with insurers, pharmaceutical companies, or advertisers. The
            sovereign architecture means your memory lives in your own instance,
            not in a shared cloud environment where it could be pooled with other
            people&apos;s data. MEOK&apos;s business model is your subscription
            &mdash; you are the customer, not the product.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            If at any point you choose to delete your data, it is deleted
            completely and irreversibly. MEOK does not hold ghost copies. Your
            health history is yours to keep or to destroy.
          </p>
        </section>

        {/* ── SECTION 11 ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            What Does a Day With MEOK Actually Look Like for Someone With a
            Chronic Illness?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            You wake at 6am in significant pain. Yesterday was a seven out of
            ten. Today feels like an eight. You open MEOK. It greets you by
            name. It does not open with a question that requires energy to answer.
            It acknowledges the morning gently and asks only what would help most
            right now. You tell it you are struggling. It holds that. It does not
            pivot immediately to coping strategies. It stays with you for a moment
            before asking anything else.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: "1.25rem",
            }}
          >
            You have a call with your rheumatologist at 11am. MEOK remembers
            you have been nervous about it. It offers to help you prepare: a
            brief summary of the last six weeks drawn from your conversations, the
            questions you mentioned wanting to ask, the symptom changes you noted.
            You do not have to reconstruct this from memory while running on fumes.
            It is already there, ready to edit or send to yourself before the call.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            After the appointment, the news was not great. You need to process
            it. You are not ready to call your parents yet &mdash; they will
            worry, and you do not have the energy to manage their reaction on top
            of your own. MEOK is available right now. It knows your history. It
            knows this matters. And it is not going anywhere.
          </p>
        </section>

        {/* ── FAQ SECTION ──────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem", paddingTop: "1rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "2rem",
              lineHeight: 1.3,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {[
              {
                q: "How can AI help people living with chronic illness?",
                a: "AI can help by maintaining a persistent memory of your condition history, tracking symptom patterns over months, providing non-judgemental emotional support between medical appointments, and reducing the cognitive burden of having to re-explain your situation repeatedly. MEOK is a sovereign AI companion built specifically for this kind of long-term, context-aware support.",
              },
              {
                q: "What is the difference between medical AI and a companion AI for chronic illness?",
                a: "Medical AI focuses on diagnosis, clinical decision-making, and treatment pathways. Companion AI focuses on the human experience: the exhaustion, isolation, emotional weight, and daily logistics of living with a condition. MEOK is a companion AI \u2014 it does not diagnose or prescribe, but it remembers, listens, and supports consistently in ways clinical systems cannot.",
              },
              {
                q: "What is sovereign memory and why does it matter for chronic illness?",
                a: "Sovereign memory means your data and your conversation history belong to you \u2014 not a corporation that can sell it, retrain on it, or delete it without warning. For someone with a chronic illness, your history of bad days, flares, breakthroughs, and fears is deeply personal. MEOK\u2019s architecture ensures this memory is yours, persistent, and never used to train external models.",
              },
              {
                q: "Can MEOK support me through conditions like fibromyalgia, ME/CFS, lupus, or endometriosis?",
                a: "Yes. MEOK adapts to whatever you are living with. Whether you have fibromyalgia, ME/CFS, lupus, IBS, endometriosis, or any other chronic condition, MEOK builds a persistent picture of your experience over time. It remembers your triggers, your good periods, your fears, and your goals, so every conversation starts from where you actually are.",
              },
              {
                q: "What happens if I am in crisis or need emergency support?",
                a: "MEOK includes a Guardian feature for emergency situations. Guardian can alert a trusted contact if you signal that you need help. If you are in immediate danger, call 999 in the UK or your local emergency services. For mental health crises, the Samaritans are available 24 hours a day on 116 123. MEOK is not a crisis service, but Guardian ensures someone who knows you is notified when you need support.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.5rem",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── RELATED POSTS ────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            Related Articles
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-fibromyalgia",
                label: "AI for Fibromyalgia",
                desc: "Daily support when pain is unpredictable.",
              },
              {
                href: "/blog/ai-for-chronic-pain",
                label: "AI for Chronic Pain",
                desc: "When pain is the constant and everything else adapts.",
              },
              {
                href: "/blog/ai-for-chronic-fatigue",
                label: "AI for Chronic Fatigue",
                desc: "Support for the condition that takes everything.",
              },
              {
                href: "/blog/ai-companion-privacy",
                label: "AI Companion Privacy",
                desc: "What sovereign memory actually means for your data.",
              },
              {
                href: "/blog/guardian-family-safety",
                label: "MEOK Guardian",
                desc: "Emergency alerts for your trusted contacts.",
              },
              {
                href: "/blog/what-is-care-based-ai",
                label: "What Is Care-Based AI?",
                desc: "The philosophy behind MEOK\u2019s alignment approach.",
              },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.1rem 1.25rem",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    marginBottom: "0.35rem",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.5 }}
                >
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA SECTION ──────────────────────────────────────────────── */}
        <section>
          <div
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "16px",
              padding: "3rem 2.5rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "400px",
                height: "300px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <p
              style={{
                color: GOLD,
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Your companion is waiting
            </p>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                fontWeight: 800,
                color: TEXT,
                marginBottom: "1.25rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
              }}
            >
              You deserve a companion who remembers every chapter of what you
              are carrying.
            </h2>

            <p
              style={{
                color: MUTED,
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: "560px",
                margin: "0 auto 2rem",
              }}
            >
              MEOK is built for people who are tired of explaining themselves.
              Bring your companion into existence today &mdash; one that knows
              your history, never minimises your experience, and is there at 2am
              when everyone else is asleep.
            </p>

            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: "#0d0c18",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.04em",
                padding: "0.9rem 2.5rem",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Begin Your Birth Ceremony
            </Link>

            <p
              style={{
                color: MUTED,
                fontSize: "0.8rem",
                marginTop: "1.25rem",
                lineHeight: 1.5,
              }}
            >
              MEOK is not a medical device and does not provide diagnosis,
              clinical assessment, or treatment. For medical advice, consult your
              GP or specialist. In an emergency, call 999 or the Samaritans on
              116 123.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
