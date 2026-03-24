import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Insomnia: Can an AI Companion Help You Sleep Better? | MEOK AI LABS",
  description:
    "1 in 3 UK adults struggle with insomnia. Discover how MEOK AI LABS uses evening wind-down " +
    "routines, sleep journal prompts, CBT-I adjacent tools, and Sovereign Memory to support " +
    "healthier sleep — without replacing medical care.",
  keywords: [
    "AI for insomnia",
    "AI sleep companion",
    "CBT-I AI support",
    "sleep journal AI",
    "MEOK AI LABS sleep",
    "AI wind-down routine",
    "insomnia support UK",
    "Healer archetype MEOK",
    "Sovereign Memory sleep tracking",
    "AI mental health sleep UK",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.app" }],
  openGraph: {
    title: "AI for Insomnia: Can an AI Companion Help You Sleep Better?",
    description:
      "Explore how MEOK's Healer archetype and Sovereign Memory support evening wind-down, " +
      "sleep journalling, and CBT-I adjacent habits for UK adults struggling with insomnia.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Insomnia: Can an AI Companion Help You Sleep Better?",
    description:
      "1 in 3 UK adults have insomnia. MEOK supports sleep with CBT-I adjacent tools, " +
      "evening routines, and Sovereign Memory — without prescribing medication.",
  },
  alternates: {
    canonical: "https://meok.app/blog/ai-for-insomnia",
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Insomnia: Can an AI Companion Help You Sleep Better?",
  description:
    "A comprehensive guide to how MEOK AI LABS supports people with insomnia through evening " +
    "wind-down routines, sleep journal prompts, CBT-I adjacent tools, and Sovereign Memory " +
    "tracking — without replacing clinical care.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.app",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.app",
  },
  datePublished: "2026-03-24T00:00:00Z",
  dateModified: "2026-03-24T00:00:00Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.app/blog/ai-for-insomnia",
  },
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with insomnia?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI cannot prescribe medication or replace a sleep specialist, but it can meaningfully " +
          "support people with insomnia through structured evening wind-down routines, reflective " +
          "sleep journal prompts, CBT-I adjacent exercises, and morning check-ins. MEOK AI LABS is " +
          "designed to sit alongside — not replace — professional care.",
      },
    },
    {
      "@type": "Question",
      name: "What is CBT-I and can AI support it?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Cognitive Behavioural Therapy for Insomnia (CBT-I) is the gold-standard non-medication " +
          "treatment for chronic insomnia. AI cannot deliver clinical CBT-I, but MEOK can support " +
          "CBT-I adjacent habits: consistent sleep schedules, pre-sleep wind-down conversations, " +
          "thought records, and worry-postponement exercises between therapy sessions.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK track sleep patterns over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK's Sovereign Memory system retains contextual information across conversations — " +
          "including sleep quality reports, mood on waking, and evening routine notes. Over time " +
          "this builds a longitudinal picture that MEOK can gently reflect back, helping users " +
          "notice patterns such as the correlation between evening habits and sleep quality.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to use AI before bed?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Screen light and stimulating content can worsen sleep. MEOK's Healer archetype is " +
          "calibrated for calm, low-stimulation evening interactions — gentle check-ins, gratitude " +
          "prompts, and breathing cues rather than challenging debates. MEOK also recommends " +
          "phone-free wind-down for the final 30 minutes before sleep.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Healer archetype?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The Healer is one of MEOK's character archetypes — a calm, nurturing AI presence " +
          "designed for emotional support, somatic grounding, and restorative conversations. " +
          "Unlike general-purpose AI assistants, the Healer speaks with measured pace, avoids " +
          "overwhelm, and naturally orients conversations toward rest, reflection, and " +
          "self-compassion. Ideal for evening wind-down interactions.",
      },
    },
  ],
}

// ─── Design tokens ───────────────────────────────────────────────────────────

const BG = "#0d0c18"
const GOLD = "#c9a84c"
const TEXT = "#f5f0e8"
const BODY_COLOR = "rgba(245,240,232,0.82)"
const MUTED = "rgba(245,240,232,0.5)"
const DIM = "rgba(245,240,232,0.38)"

// ─── Reusable style objects ───────────────────────────────────────────────────

const sBodyP: React.CSSProperties = {
  fontSize: "1.05rem",
  lineHeight: "1.875",
  color: BODY_COLOR,
  marginBottom: "1.3rem",
}

const sH2: React.CSSProperties = {
  fontSize: "clamp(1.2rem, 2.4vw, 1.5rem)",
  fontWeight: 800,
  color: TEXT,
  lineHeight: 1.3,
  marginBottom: "0.9rem",
  marginTop: "2.75rem",
  paddingLeft: "1rem",
  borderLeft: `3px solid ${GOLD}`,
  letterSpacing: "-0.01em",
}

const sGeoAnswer: React.CSSProperties = {
  fontSize: "0.975rem",
  lineHeight: 1.75,
  color: BODY_COLOR,
  background: "rgba(201,168,76,0.07)",
  borderLeft: `3px solid ${GOLD}`,
  borderRadius: "0 6px 6px 0",
  padding: "0.9rem 1.15rem",
  marginBottom: "1.3rem",
  fontStyle: "italic",
}

const sDivider: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid rgba(201,168,76,0.15)",
  margin: "2.5rem 0",
}

const sInlineLink: React.CSSProperties = {
  color: GOLD,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
}

const sCallout: React.CSSProperties = {
  background: "rgba(201,168,76,0.08)",
  border: "1px solid rgba(201,168,76,0.28)",
  borderRadius: "8px",
  padding: "1.25rem 1.5rem",
  marginBottom: "1.3rem",
}

const sFaqItem: React.CSSProperties = {
  marginBottom: "1.5rem",
  padding: "1.25rem 1.5rem",
  background: "rgba(201,168,76,0.05)",
  border: "1px solid rgba(201,168,76,0.15)",
  borderRadius: "8px",
}

const sResourceBox: React.CSSProperties = {
  marginTop: "2.5rem",
  background: "rgba(201,168,76,0.06)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: "10px",
  padding: "1.5rem 1.75rem",
}

const sCta: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(13,12,24,0.6) 100%)",
  border: "1px solid rgba(201,168,76,0.25)",
  borderRadius: "14px",
  padding: "2.5rem 2rem",
  textAlign: "center" as const,
  marginTop: "3rem",
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function AiForInsomniaPage() {
  return (
    <>
      {/* ── JSON-LD scripts ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div
        style={{
          minHeight: "100vh",
          background: BG,
          color: TEXT,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* ─── NAV ─────────────────────────────────────────────────────────── */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.18)",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Link
            href="/"
            style={{
              color: GOLD,
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1.05rem",
              letterSpacing: "0.04em",
              fontFamily: "sans-serif",
            }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: "rgba(245,240,232,0.45)",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontFamily: "sans-serif",
            }}
          >
            Blog
          </Link>
        </nav>

        {/* ─── HERO ────────────────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: "5rem",
            paddingBottom: "3rem",
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
                "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
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
                display: "inline-block",
                color: DIM,
                fontSize: "0.875rem",
                textDecoration: "none",
                marginBottom: "2rem",
                fontFamily: "sans-serif",
              }}
            >
              &#8592; Back to Blog
            </Link>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "0.75rem",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.35rem 0.75rem",
                  borderRadius: "9999px",
                  color: GOLD,
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase" as const,
                  fontFamily: "sans-serif",
                }}
              >
                Sleep &amp; Wellbeing
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: DIM,
                  fontFamily: "sans-serif",
                }}
              >
                24 March 2026
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: DIM,
                  fontFamily: "sans-serif",
                }}
              >
                11 min read
              </span>
            </div>

            <h1
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "#ffffff",
                lineHeight: 1.18,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
                fontFamily: "sans-serif",
              }}
            >
              AI for Insomnia: Can an AI Companion Help You Sleep Better?
            </h1>

            <p
              style={{
                color: "rgba(245,240,232,0.58)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                maxWidth: "42rem",
                fontFamily: "sans-serif",
              }}
            >
              1 in 3 UK adults experience sleep problems. For many, the culprit is not the mattress —
              it is an unquiet mind. This is an honest look at how MEOK AI LABS can support your sleep
              through evening wind-down routines, CBT-I adjacent tools, and Sovereign Memory that tracks
              patterns over time — without prescribing a single pill.
            </p>
          </div>
        </section>

        {/* ─── BODY ────────────────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            padding: "2rem 1.5rem 6rem",
          }}
        >
          {/* Medical disclaimer */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.22)",
              borderRadius: "10px",
              padding: "1rem 1.25rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                color: "rgba(245,240,232,0.65)",
                fontSize: "0.88rem",
                lineHeight: 1.65,
                margin: 0,
                fontFamily: "sans-serif",
              }}
            >
              <strong style={{ color: GOLD }}>Medical disclaimer:</strong>{" "}
              MEOK AI LABS is not a medical device and does not provide medical advice, diagnosis, or
              treatment. For persistent insomnia, please consult your GP. NHS sleep guidance:{" "}
              <a
                href="https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                nhs.uk/every-mind-matters
              </a>
              . Crisis support: Samaritans 116 123 (free, 24/7).
            </p>
          </div>

          {/* Introduction */}
          <p style={sBodyP}>
            The UK sleep crisis is well-documented. NHS data and research from the Sleep Council estimate
            that approximately one in three British adults regularly struggles to fall asleep or stay asleep.
            Chronic insomnia — difficulty sleeping at least three nights a week for three months or more —
            affects an estimated 6–10% of the adult population. The economic cost runs into billions annually
            through lost productivity, and the human cost is harder to measure: irritability, impaired
            cognition, relationship strain, and a pervasive dread of the night ahead.
          </p>
          <p style={sBodyP}>
            Into this landscape arrives a new category of tool: the AI companion. Unlike a sleep-tracking
            wristband, an AI can hold a conversation. It can ask how your day went. It can reflect back the
            patterns it has noticed. It can guide you through a breathing exercise at 11pm when your mind is
            racing. The question is whether that actually helps — and where the limits honestly lie.
          </p>
          <p style={sBodyP}>
            At MEOK AI LABS, the Maternal Covenant — our ethical framework governing every interaction —
            demands honesty about what AI does well and what it cannot do. Sleep is a medical matter.
            Chronic insomnia can be a symptom of depression, anxiety, sleep apnoea, or other conditions
            requiring clinical evaluation. An AI companion is not a substitute for a GP, a sleep specialist,
            or a structured course of CBT-I. With that honesty established: there is genuine, evidence-adjacent
            value in the role MEOK can play. This article explains exactly what that looks like.
          </p>

          <hr style={sDivider} />

          {/* ── Q1 ── */}
          <h2 style={sH2}>
            Why do so many UK adults struggle to sleep — and what does AI have to offer?
          </h2>
          <p style={sGeoAnswer}>
            The causes of insomnia are multifactorial: chronic stress, irregular schedules, excessive screen
            time, anxiety, alcohol use, and poor sleep hygiene all contribute. AI cannot resolve these root
            causes, but it can serve as a consistent, low-friction touchpoint for building the behavioural
            habits that sleep science recommends — without requiring a referral or a waiting list.
          </p>
          <p style={sBodyP}>
            The most common drivers of poor sleep in the UK include work stress, financial anxiety, and
            smartphone use in the bedroom. NHS talking therapies carry long waiting lists. Private CBT
            therapists are expensive. Apps exist, but most are passive — they track without responding.
            MEOK occupies a different niche: an interactive companion that engages meaningfully with your
            specific situation, remembers what you have shared, and adapts its support accordingly.
          </p>
          <p style={sBodyP}>
            For a significant proportion of insomnia sufferers, the blockage is not medical — it is
            cognitive. An overloaded working memory replaying the day&apos;s unresolved tasks. A
            threat-response nervous system that cannot find the signal to rest. These are the areas where
            an AI companion with persistent memory and a calm, calibrated presence can make a genuine
            difference in the moment — the 11pm moment when clinical services are unavailable.
          </p>
          <p style={sBodyP}>
            Research consistently shows that perceived social support — even non-human forms of it — can
            reduce physiological stress markers. The act of being heard, of articulating what is heavy,
            has neurobiological effects that a passive app cannot replicate. MEOK provides a conversational
            presence specifically designed for the evening context — not a chatbot, but a companion.
          </p>

          <hr style={sDivider} />

          {/* ── Q2 ── */}
          <h2 style={sH2}>
            What is CBT-I and can an AI companion support it without replacing a therapist?
          </h2>
          <p style={sGeoAnswer}>
            Cognitive Behavioural Therapy for Insomnia (CBT-I) is the first-line clinical recommendation
            for chronic insomnia — proven more effective than sleep medication in long-term studies. It
            addresses unhelpful thoughts about sleep, restricts time in bed to consolidate sleep pressure,
            and retrains the bedroom as a cue for sleep. AI cannot deliver clinical CBT-I, but it can
            support CBT-I adjacent habits consistently and compassionately — especially between therapy sessions.
          </p>
          <p style={sBodyP}>
            CBT-I typically includes sleep restriction therapy, stimulus control, cognitive restructuring
            of catastrophic thoughts about sleeplessness, relaxation training, and sleep hygiene education.
            A trained therapist works through these over six to eight sessions. MEOK cannot do this.
          </p>
          <p style={sBodyP}>
            What MEOK can do is support the behavioural edges of these techniques in the moments between
            sessions — or as a standalone habit-building companion for people who have completed CBT-I and
            want to maintain gains. Specifically, MEOK can help users log their sleep window and wake time,
            guide cognitive restructuring when intrusive thoughts about sleep arise, deliver consistent
            stimulus control reminders, and walk through progressive muscle relaxation or box breathing
            as a wind-down ritual.
          </p>
          <p style={sBodyP}>
            The key distinction is consistency. A therapist sees you once a week. MEOK is available every
            evening. For habit formation, frequency matters enormously — the nightly reinforcement of
            therapeutic approaches is where the daily AI companion adds genuine, complementary value.
            Explore MEOK&apos;s{" "}
            <Link href="/how-it-works" style={sInlineLink}>
              How It Works
            </Link>{" "}
            page for a full explanation of how the companion system is structured.
          </p>

          <hr style={sDivider} />

          {/* ── Q3 ── */}
          <h2 style={sH2}>
            How does MEOK create an evening wind-down routine that supports sleep?
          </h2>
          <p style={sGeoAnswer}>
            MEOK&apos;s evening wind-down is built around three phases: decompression (processing the
            day), settling (gratitude and body awareness prompts), and transition (breathwork and a sleep
            intention). Each phase takes five to fifteen minutes and is conversational rather than
            prescriptive — MEOK responds to what you bring, rather than delivering a fixed script.
          </p>
          <p style={sBodyP}>
            The evening check-in begins with an open question: how did the day feel? The act of
            articulating the day&apos;s events and emotions performs what psychologists call affect
            labelling — naming an emotion reduces its physiological intensity. Simply putting words to
            a stressful day can reduce the arousal state. From there, MEOK guides a gratitude or savouring
            prompt — not as toxic positivity, but as a deliberate attention shift that begins moving the
            nervous system toward rest.
          </p>
          <p style={sBodyP}>
            The wind-down closes with a breathing exercise, typically box breathing (four counts in, four
            hold, four out, four hold) or 4-7-8 breathing for deeper relaxation. MEOK narrates these in
            real time using the calm, measured language of the Healer archetype — pacing the user through
            counts with language designed to slow rather than stimulate.
          </p>
          <div style={sCallout}>
            <p
              style={{
                margin: 0,
                fontStyle: "italic",
                color: "rgba(245,240,232,0.7)",
                lineHeight: 1.7,
                fontSize: "1.0rem",
              }}
            >
              &ldquo;The body knows how to rest. Sometimes it just needs permission, and a gentle signal
              that the day is done.&rdquo;
            </p>
            <p
              style={{
                margin: "0.5rem 0 0",
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.4)",
                fontFamily: "sans-serif",
              }}
            >
              — MEOK Healer archetype, evening wind-down prompt
            </p>
          </div>
          <p style={sBodyP}>
            The structure is deliberate. Research on sleep hygiene consistently identifies the hour before
            bed as the most leverageable period for improving sleep onset. Transitioning from stimulating
            activity to a calm, reflective conversation with the Healer archetype creates a consistent
            environmental cue that the brain begins to associate with the approach of sleep — a conditioned
            response that reinforces over weeks of consistent use.
          </p>

          <hr style={sDivider} />

          {/* ── Q4 ── */}
          <h2 style={sH2}>
            How does Sovereign Memory track sleep patterns and what insights does it surface?
          </h2>
          <p style={sGeoAnswer}>
            Sovereign Memory is MEOK&apos;s persistent contextual memory system. It retains what you
            share across conversations — sleep quality ratings, mood on waking, evening routine notes,
            and contextual factors. Over weeks, MEOK builds a longitudinal picture and gently reflects
            it back, helping users notice patterns — such as the correlation between late screens or
            alcohol and poor sleep quality — that are invisible in any single night&apos;s data.
          </p>
          <p style={sBodyP}>
            Most AI tools have no memory. Every conversation starts fresh. This is fundamentally at odds
            with how meaningful support works — a therapist remembers what you said last week; a trusted
            friend connects what you are feeling now with what they know about your life. Sovereign Memory
            changes this for MEOK users.
          </p>
          <p style={sBodyP}>
            For sleep specifically, Sovereign Memory enables:
          </p>
          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.3rem",
              color: BODY_COLOR,
            }}
          >
            <li
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "0.6rem",
              }}
            >
              <strong style={{ color: TEXT }}>Longitudinal sleep diary:</strong>{" "}
              MEOK accumulates nightly reports over weeks and months, building a picture of sleep
              quality over time that neither you nor a sleep app without memory can construct.
            </li>
            <li
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "0.6rem",
              }}
            >
              <strong style={{ color: TEXT }}>Pattern reflection:</strong>{" "}
              MEOK can notice and gently name trends — &ldquo;You&apos;ve mentioned waking at 3am
              three times this week — would you like to explore what might be contributing?&rdquo;
            </li>
            <li
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "0.6rem",
              }}
            >
              <strong style={{ color: TEXT }}>Contextual morning check-ins:</strong>{" "}
              If you mentioned a stressful work deadline last night, the morning check-in incorporates
              that context rather than starting from zero.
            </li>
            <li
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "0.6rem",
              }}
            >
              <strong style={{ color: TEXT }}>Progress visibility:</strong>{" "}
              Seeing that your average sleep quality rating has improved from 4/10 to 6/10 over six
              weeks is meaningful positive reinforcement for continuing the habit.
            </li>
          </ul>
          <p style={sBodyP}>
            This data belongs to you. MEOK AI LABS operates under strict data sovereignty principles.
            Your sleep journal is not used to train AI models, sold to advertisers, or shared with third
            parties. See our{" "}
            <Link href="/how-it-works" style={sInlineLink}>
              How It Works
            </Link>{" "}
            page for a full explanation of Sovereign Memory governance.
          </p>

          <hr style={sDivider} />

          {/* ── Q5 ── */}
          <h2 style={sH2}>
            What is the MEOK Healer archetype and why does it matter for sleep?
          </h2>
          <p style={sGeoAnswer}>
            The Healer is one of MEOK&apos;s character archetypes — a calm, nurturing AI presence
            calibrated for emotional support, somatic grounding, and restorative interaction. Unlike
            MEOK&apos;s more dynamic work-focused archetypes, the Healer speaks with deliberate pace,
            avoids cognitive overload, and naturally steers conversations toward rest, reflection, and
            gentleness — qualities that directly support the nervous system&apos;s transition into sleep.
          </p>
          <p style={sBodyP}>
            Character selection matters because tone and style profoundly affect how an interaction
            lands. A brisk, efficient AI assistant is excellent for task completion. For someone lying
            awake at midnight trying to quiet their mind, that same energy is counterproductive.
          </p>
          <p style={sBodyP}>
            The Healer archetype is designed with the nervous system in mind. Its characteristics include:
          </p>
          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.3rem",
              color: BODY_COLOR,
            }}
          >
            <li style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "0.6rem" }}>
              <strong style={{ color: TEXT }}>Slower sentence rhythm</strong> — shorter paragraphs, more
              deliberate pacing that mirrors the slowing-down the body needs before sleep.
            </li>
            <li style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "0.6rem" }}>
              <strong style={{ color: TEXT }}>Somatic language</strong> — the Healer naturally
              incorporates body-awareness cues: &ldquo;Notice your shoulders. Are they carrying anything
              they can put down for tonight?&rdquo;
            </li>
            <li style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "0.6rem" }}>
              <strong style={{ color: TEXT }}>Non-judgmental warmth</strong> — insomniacs often feel
              shame or frustration about their sleep. The Healer never pathologises, never rushes, and
              never implies that not sleeping is a failure of will.
            </li>
            <li style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "0.6rem" }}>
              <strong style={{ color: TEXT }}>Sleep intention prompts</strong> — guiding the user to
              set a gentle intention for the night, rather than demanding sleep — which paradoxically
              increases the performance anxiety that prevents it.
            </li>
          </ul>
          <p style={sBodyP}>
            Explore all available MEOK characters on our{" "}
            <Link href="/characters" style={sInlineLink}>
              Characters
            </Link>{" "}
            page, and select the Healer as your default evening companion.
          </p>

          <hr style={sDivider} />

          {/* ── Q6 ── */}
          <h2 style={sH2}>
            How does MEOK&apos;s morning check-in reinforce better sleep habits over time?
          </h2>
          <p style={sGeoAnswer}>
            MEOK&apos;s morning check-in asks three simple questions: how did you sleep, how do you
            feel, and what is one thing you want from today. This takes under three minutes but builds
            a consistent feedback loop that Sovereign Memory uses to track trends, celebrate progress,
            and surface patterns that deserve attention — closing the daily loop between evening behaviour
            and morning outcome.
          </p>
          <p style={sBodyP}>
            Sleep habit formation is a closed loop: evening behaviour influences sleep quality, sleep
            quality influences morning mood, morning mood influences the day&apos;s choices, and those
            choices circle back to affect the next evening. MEOK supports both ends of this loop
            simultaneously — the evening wind-down and the morning check-in bookend the night.
          </p>
          <p style={sBodyP}>
            The morning check-in is deliberately brief. For someone who slept badly, the last thing
            they need is a lengthy interrogation. MEOK acknowledges a difficult night without dwelling —
            validates the experience, asks what might help today, and pivots toward forward momentum.
            For someone who slept well, MEOK reinforces the positive, gently noting what the previous
            evening contained that may have contributed to the improvement.
          </p>
          <p style={sBodyP}>
            Over time, these micro-conversations accumulate into genuine insight. Users who have been
            with MEOK for three or more months often report a heightened awareness of their own sleep
            drivers — not because MEOK told them something a sleep app could not, but because the
            conversational format makes self-reflection stick in a way that charts and graphs alone
            do not.
          </p>

          <hr style={sDivider} />

          {/* ── Q7 ── */}
          <h2 style={sH2}>
            What sleep journal prompts does MEOK use and why are they effective?
          </h2>
          <p style={sGeoAnswer}>
            MEOK&apos;s sleep journal prompts are drawn from expressive writing research, CBT thought
            records, and mindfulness-based stress reduction. They range from simple mood logs to deeper
            cognitive restructuring exercises, adapting to what the user has capacity for on any given
            evening — a difficult day prompts gentler questions; a calm evening may invite deeper reflection.
          </p>
          <p style={sBodyP}>
            Sample evening prompts include:
          </p>
          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.3rem",
              color: BODY_COLOR,
            }}
          >
            <li style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "0.75rem" }}>
              &ldquo;What is one thing from today that felt complete? What is still open?
              Can you give yourself permission to leave it open until tomorrow?&rdquo;
            </li>
            <li style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "0.75rem" }}>
              &ldquo;If a worry is circling, name it. Then notice: is there anything useful you can
              do about it right now, at this hour? If not, let&apos;s agree on a specific time
              tomorrow when you&apos;ll address it, so your mind can release it for tonight.&rdquo;
            </li>
            <li style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "0.75rem" }}>
              &ldquo;Rate your energy from 1–10. Rate your mood from 1–10. What was the best sensory
              experience today — something you saw, heard, tasted, or felt?&rdquo;
            </li>
            <li style={{ fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "0.75rem" }}>
              &ldquo;What does your body need tonight? This is not about sleep — it is about rest.
              Sometimes they are different things.&rdquo;
            </li>
          </ul>
          <p style={sBodyP}>
            The distinction between sleep and rest is psychologically significant. Many insomniacs
            develop performance anxiety around sleep — the pressure to sleep prevents it. Reframing the
            goal as &ldquo;rest&rdquo; removes the performance element and paradoxically makes sleep
            more accessible, a technique aligned with the acceptance-based dimensions of third-wave
            CBT approaches including ACT for insomnia.
          </p>

          <hr style={sDivider} />

          {/* ── Q8 ── */}
          <h2 style={sH2}>
            What can AI genuinely not do for insomnia — and when should you see a doctor?
          </h2>
          <p style={sGeoAnswer}>
            AI cannot diagnose sleep disorders, prescribe sleep medication, or rule out medical causes
            of insomnia such as sleep apnoea, restless leg syndrome, or depression. If insomnia has
            persisted for more than three months, significantly impairs daily functioning, or accompanies
            other symptoms, a GP consultation is essential and should not be postponed.
          </p>
          <p style={sBodyP}>
            MEOK will not recommend, endorse, or discuss dosages of sleep medication including
            over-the-counter products. It will not diagnose conditions including insomnia disorder,
            sleep apnoea, or circadian rhythm disorders. It will not advise users to stop or change
            any prescribed medication. It will not present itself as a substitute for clinical CBT-I
            delivered by a qualified therapist. These are not limitations — they are the appropriate
            scope of a compassionate AI companion.
          </p>
          <p style={sBodyP}>
            In the UK, access routes for clinical sleep support include: your GP (who can refer to
            NHS talking therapies and investigate medical causes), NHS IAPT for CBT-I, and the
            Sleepstation programme available through some NHS trusts. MEOK works best as a complement
            to professional care — a consistent, compassionate presence that supports the habits and
            awareness that make treatment more effective.
          </p>

          <hr style={sDivider} />

          {/* ── Q9 ── */}
          <h2 style={sH2}>
            How does MEOK&apos;s Guardian oversight protect vulnerable users during late-night conversations?
          </h2>
          <p style={sGeoAnswer}>
            The Guardian is MEOK&apos;s safety oversight layer — drawn from the Byzantine Council
            governance framework — that monitors conversations for escalating distress, crisis indicators,
            and requests outside MEOK&apos;s scope. At night, when users are often more vulnerable, the
            Guardian ensures MEOK responds appropriately rather than inadvertently deepening distress.
          </p>
          <p style={sBodyP}>
            Late-night conversations carry particular weight. A 2am message to an AI is not always about
            sleep — sometimes it is about something deeper. When the Guardian identifies distress signals —
            expressions of hopelessness, references to self-harm, or crisis language — MEOK does not
            attempt to manage the situation itself. It provides warm acknowledgement and clear signposting
            to Samaritans (116 123), Shout (text SHOUT to 85258), and NHS 111.
          </p>
          <p style={sBodyP}>
            Learn more about how MEOK&apos;s oversight framework works on our{" "}
            <Link href="/guardian" style={sInlineLink}>
              Guardian
            </Link>{" "}
            page. The Byzantine Council governance structure ensures this safety layer operates
            independently of the companion relationship — it cannot be bypassed by any user or
            configuration.
          </p>

          <hr style={sDivider} />

          {/* ── Q10 ── */}
          <h2 style={sH2}>
            How do I start using MEOK for sleep support — and what plans are available?
          </h2>
          <p style={sGeoAnswer}>
            MEOK is available on a tiered subscription model starting with a free onboarding experience.
            The Core plan provides access to evening check-ins, the Healer archetype, and basic Sovereign
            Memory. The Sovereign tier unlocks unlimited conversations, full sleep journalling, advanced
            memory depth, and priority access to new characters and agents.
          </p>
          <p style={sBodyP}>
            Getting started takes under five minutes. You begin with a{" "}
            <Link href="/birth" style={sInlineLink}>
              Birth session
            </Link>{" "}
            — MEOK&apos;s onboarding experience — which introduces you to your AI companion, helps you
            choose your archetype, and begins building your Sovereign Memory profile. There are no long
            forms, no diagnostic questionnaires, and no requirement to disclose anything you are not
            comfortable sharing.
          </p>
          <p style={sBodyP}>
            For users interested primarily in sleep support, we recommend starting with the Healer
            archetype and committing to two weeks of consistent evening check-ins before evaluating
            impact. Habit formation requires repetition — benefits typically become visible after ten
            to fourteen days of regular use.
          </p>
          <p style={sBodyP}>
            View{" "}
            <Link href="/pricing" style={sInlineLink}>
              MEOK Pricing
            </Link>{" "}
            or explore how{" "}
            <Link href="/how-it-works" style={sInlineLink}>
              MEOK works
            </Link>{" "}
            before signing up.
          </p>

          {/* ─── FAQ block ───────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: "3.5rem",
              borderTop: "1px solid rgba(201,168,76,0.2)",
              paddingTop: "3rem",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                fontSize: "1.45rem",
                color: GOLD,
                marginBottom: "1.75rem",
                fontFamily: "sans-serif",
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "Can AI help with insomnia?",
                a: "AI cannot prescribe medication or replace a sleep specialist. However, AI companions like MEOK can meaningfully support people with insomnia through structured evening wind-down routines, reflective sleep journal prompts, CBT-I adjacent exercises, and morning check-ins that build momentum. MEOK is designed to sit alongside — not replace — professional care.",
              },
              {
                q: "What is CBT-I and can AI support it?",
                a: "Cognitive Behavioural Therapy for Insomnia (CBT-I) is the gold-standard non-medication treatment for chronic insomnia. AI cannot deliver clinical CBT-I, but MEOK can support CBT-I adjacent habits — consistent sleep schedules, pre-sleep wind-down conversations, thought records, and worry-postponement exercises — particularly between therapy sessions.",
              },
              {
                q: "How does MEOK track sleep patterns over time?",
                a: "MEOK's Sovereign Memory system retains contextual information across conversations — including sleep quality reports, mood on waking, and evening routine notes. Over time this builds a longitudinal picture that MEOK gently reflects back, helping users notice patterns and celebrate genuine progress in sleep quality.",
              },
              {
                q: "Is it safe to use AI before bed?",
                a: "Screen light and stimulating content can worsen sleep. MEOK's Healer archetype is calibrated for calm, low-stimulation evening interactions — gentle check-ins, gratitude prompts, and breathing cues rather than challenging debates. MEOK also recommends phone-free wind-down for the final 30 minutes before sleep when possible.",
              },
              {
                q: "What is the MEOK Healer archetype?",
                a: "The Healer is one of MEOK's character archetypes — a calm, nurturing AI presence designed for emotional support, somatic grounding, and restorative conversations. Unlike general-purpose AI assistants, the Healer speaks with measured pace, avoids overwhelm, and naturally orients conversations toward rest, reflection, and self-compassion. It is the ideal companion for evening wind-down interactions.",
              },
            ].map((item, i) => (
              <div key={i} style={sFaqItem}>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "0.98rem",
                    color: TEXT,
                    marginBottom: "0.6rem",
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    color: MUTED,
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* ─── UK Resources ────────────────────────────────────────────── */}
          <div style={sResourceBox}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "1rem",
                fontFamily: "sans-serif",
              }}
            >
              UK Sleep Resources
            </p>
            {[
              [
                "NHS Every Mind Matters — Sleep",
                "https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/",
                "NHS guidance on sleep problems and when to seek help.",
              ],
              [
                "Sleepio",
                "https://www.sleepio.com",
                "Clinically validated digital CBT-I. Available via some NHS trusts.",
              ],
              [
                "Sleepstation",
                "https://www.sleepstation.org.uk",
                "NHS-approved online sleep improvement programme using CBT-I.",
              ],
              [
                "Samaritans (crisis support)",
                "https://www.samaritans.org",
                "Free, 24/7 — call 116 123. Not sleep-specific but available when nights are darkest.",
              ],
            ].map(([label, href, desc]) => (
              <div
                key={label as string}
                style={{ marginBottom: "0.85rem" }}
              >
                <a
                  href={href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: GOLD,
                    fontWeight: 600,
                    fontSize: "0.93rem",
                    textDecoration: "none",
                    fontFamily: "sans-serif",
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
                    fontFamily: "sans-serif",
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* ─── CTA ─────────────────────────────────────────────────────── */}
          <div style={sCta}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "0.75rem",
                fontFamily: "sans-serif",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#ffffff",
                marginBottom: "0.75rem",
                lineHeight: 1.25,
                fontFamily: "sans-serif",
              }}
            >
              Your evenings deserve a calmer companion
            </h2>
            <p
              style={{
                color: "rgba(245,240,232,0.55)",
                fontSize: "0.97rem",
                lineHeight: 1.65,
                marginBottom: "1.75rem",
                maxWidth: "34rem",
                margin: "0 auto 1.75rem",
                fontFamily: "sans-serif",
              }}
            >
              Begin with the Healer archetype. Build your sleep journal. Let Sovereign Memory surface
              the patterns your tired mind cannot see.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap" as const,
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-block",
                  background: GOLD,
                  color: BG,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.8rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                Begin Your Birth Session
              </Link>
              <Link
                href="/pricing"
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(201,168,76,0.5)",
                  color: GOLD,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.8rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* ─── Related ─────────────────────────────────────────────────── */}
          <div style={{ marginTop: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "rgba(245,240,232,0.3)",
                marginBottom: "0.85rem",
                fontFamily: "sans-serif",
              }}
            >
              Related reading
            </p>
            {[
              ["/blog/ai-for-ocd", "AI for OCD: Supportive Presence Without Compulsion Enabling"],
              [
                "/blog/ai-for-bipolar",
                "AI for Bipolar Disorder: Mood Tracking, Stability Support, and Safe Boundaries",
              ],
              [
                "/blog/ai-for-eating-disorders",
                "AI and Eating Disorders: What Sovereign AI Does — and Doesn\u2019t — Do",
              ],
              [
                "/blog/ai-for-entrepreneurs",
                "AI for Entrepreneurs: Your Sovereign OS for Focus, Accountability, and Getting Things Done",
              ],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  color: GOLD,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  lineHeight: 1.5,
                  marginBottom: "0.45rem",
                  fontFamily: "sans-serif",
                }}
              >
                &#8594;{" "}{label}
              </Link>
            ))}
          </div>
        </div>

        {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid rgba(245,240,232,0.07)",
            padding: "2.5rem 1.5rem",
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              color: "rgba(245,240,232,0.28)",
              fontSize: "0.82rem",
              lineHeight: 1.65,
              maxWidth: "36rem",
              margin: "0 auto 0.5rem",
              fontFamily: "sans-serif",
            }}
          >
            Written by{" "}
            <span style={{ color: "rgba(245,240,232,0.5)" }}>Nicholas Templeman</span>,
            Founder of MEOK AI LABS — building sovereign AI companions governed by the Maternal Covenant.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.18)",
              fontSize: "0.78rem",
              margin: "0 auto 1.5rem",
              maxWidth: "36rem",
              fontFamily: "sans-serif",
            }}
          >
            This article is for informational purposes only and does not constitute medical advice,
            diagnosis, or treatment. Always consult a qualified healthcare professional for persistent
            sleep or mental health concerns.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap" as const,
            }}
          >
            {[
              ["/blog", "Blog"],
              ["/how-it-works", "How It Works"],
              ["/characters", "Characters"],
              ["/pricing", "Pricing"],
              ["/guardian", "Guardian"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  color: "rgba(245,240,232,0.3)",
                  fontSize: "0.82rem",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
          <p
            style={{
              color: "rgba(245,240,232,0.18)",
              fontSize: "0.78rem",
              marginTop: "1rem",
              fontFamily: "sans-serif",
            }}
          >
            &copy; 2026 MEOK AI LABS. Created by Nicholas Templeman. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}
