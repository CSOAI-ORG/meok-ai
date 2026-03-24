import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Chronic Fatigue Syndrome (ME/CFS) and Long Covid: Support for Invisible Illness | MEOK AI LABS",
  description:
    "Over 250,000 people in the UK live with ME/CFS; Long Covid has added hundreds of thousands more. MEOK AI LABS offers 24/7 sovereign AI support for pacing, energy tracking, the good day trap, post-exertional malaise, and the grief of a changed life.",
  keywords: [
    "AI for chronic fatigue syndrome",
    "AI for ME/CFS",
    "AI for Long Covid",
    "ME/CFS support app",
    "Long Covid AI companion",
    "post-exertional malaise pacing",
    "energy tracking app ME/CFS",
    "chronic fatigue syndrome UK",
    "MEOK AI LABS",
    "sovereign AI chronic illness",
    "good day trap ME/CFS",
    "AI invisible illness support",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title:
      "AI for Chronic Fatigue Syndrome (ME/CFS) and Long Covid: Support for Invisible Illness",
    description:
      "MEOK\u2019s persistent Sovereign Memory tracks energy levels, PEM patterns, and symptom history across months. Available 24/7 on days when you cannot make phone calls. Built for the good day trap, the grief of lost capacity, and the loneliness of being disbelieved.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["ME/CFS", "Long Covid", "Chronic Fatigue", "AI", "Health", "MEOK"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for ME/CFS and Long Covid | MEOK AI LABS",
    description:
      "250,000+ UK ME/CFS patients. Hundreds of thousands more with Long Covid. MEOK tracks energy, prevents the good day trap, and is there at 3am when nothing else is.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-chronic-fatigue",
  },
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Chronic Fatigue Syndrome (ME/CFS) and Long Covid: Support for Invisible Illness",
  description:
    "How MEOK AI LABS supports people living with ME/CFS and Long Covid through persistent energy tracking, post-exertional malaise awareness, the good day trap, emotional support for invisible illness, and 24/7 availability when appointments are impossible.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-chronic-fatigue",
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
    "AI for ME/CFS",
    "AI for Long Covid",
    "chronic fatigue syndrome support",
    "post-exertional malaise pacing",
    "energy tracking ME/CFS",
    "good day trap chronic fatigue",
    "sovereign AI invisible illness",
  ],
  articleSection: "Health",
  wordCount: 2100,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-chronic-fatigue",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with ME/CFS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot cure ME/CFS, but it can provide consistent daily support that the NHS currently cannot. MEOK AI LABS tracks energy levels, logs symptom patterns, helps implement pacing strategies, offers emotional presence on difficult days, and is available 24/7 \u2014 including at 3am when you are too exhausted to make phone calls or appointments. Its persistent Sovereign Memory means you never have to re-explain your condition from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "What is post-exertional malaise and why does pushing through make ME/CFS worse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Post-exertional malaise (PEM) is the hallmark symptom of ME/CFS: a significant worsening of symptoms following physical, cognitive, or emotional exertion that would not cause problems in healthy people. Unlike normal tiredness, PEM is delayed \u2014 often appearing 12 to 48 hours after the triggering activity \u2014 and can last days, weeks, or longer. Pushing through overrides the body\u2019s distress signals and causes crashes that erode baseline function over time.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK track energy levels for ME/CFS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses conversational check-ins to log your energy, cognitive capacity, and symptom levels at natural points throughout the day. This data accumulates in Sovereign Memory over weeks and months, revealing patterns invisible to in-the-moment perception: which activities precede crashes, what your true baseline is, and when a good day is likely to trigger a bad one. You can share this log with your GP or specialist as objective evidence.",
      },
    },
    {
      "@type": "Question",
      name: "What is the good day trap in ME/CFS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The good day trap occurs when a person with ME/CFS feels relatively well and overexerts themselves \u2014 doing chores, going out, or socialising \u2014 because they feel they should use the window. The crash that follows often brings them below their previous baseline. MEOK\u2019s persistent memory helps identify good days in context, gently flagging when current energy is above your recent average and reminding you that pacing applies most critically when you feel well.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK understand Long Covid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Long Covid shares many features with ME/CFS \u2014 post-exertional malaise, cognitive dysfunction (brain fog), fatigue, and the disbelief of an invisible condition. MEOK is briefed on the overlap and does not treat Long Covid as simple tiredness. It holds your full symptom history, respects the fluctuating nature of the condition, and provides support on the many days when mainstream healthcare has little to offer.",
      },
    },
  ],
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForChronicFatiguePage() {
  const GOLD = "#c9a84c"
  const BG = "#0d0c18"
  const TEXT = "#f5f0e8"
  const CARD = "#1a1830"
  const MUTED = "rgba(245,240,232,0.6)"

  const h2Style = {
    fontWeight: 800 as const,
    fontSize: "clamp(1.2rem,2.4vw,1.55rem)",
    color: TEXT,
    lineHeight: 1.3,
    marginBottom: "0.9rem",
    letterSpacing: "-0.01em",
    marginTop: "0",
  }

  const atomicAnswerStyle = {
    background: "rgba(201,168,76,0.07)",
    borderLeft: `3px solid ${GOLD}`,
    borderRadius: "0 6px 6px 0",
    padding: "0.85rem 1.1rem",
    marginBottom: "1.4rem",
    color: "rgba(245,240,232,0.82)",
    fontSize: "0.97rem",
    lineHeight: 1.7,
    fontStyle: "italic" as const,
  }

  const bodyParaStyle = {
    color: MUTED,
    fontSize: "1rem",
    lineHeight: 1.8,
    marginBottom: "1.25rem",
  }

  const sectionGapStyle = {
    marginTop: "3rem",
    marginBottom: "0.25rem",
  }

  const dividerStyle = {
    borderTop: "1px solid rgba(245,240,232,0.07)",
    marginTop: "2.5rem",
    marginBottom: "2.5rem",
  }

  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      {/* ── JSON-LD ────────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
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
                display: "inline-block",
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              ME/CFS &amp; Long Covid
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              14 min read
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
            AI for Chronic Fatigue Syndrome (ME/CFS) and Long Covid: Support for Invisible Illness
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            Over 250,000 people in the UK live with myalgic encephalomyelitis. Long Covid has added
            hundreds of thousands more. Both conditions are invisible to standard tests, difficult to
            explain, and historically met with disbelief. This is an honest account of what a
            sovereign AI companion can and cannot do for people living inside an energy envelope that
            most of the world refuses to see.
          </p>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 6rem" }}>

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
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "0.88rem",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            <strong style={{ color: GOLD }}>
              MEOK is not a medical device. It does not provide diagnosis, clinical assessment, or
              treatment.
            </strong>{" "}
            Always consult your GP or specialist. UK resources:{" "}
            <a
              href="https://meassociation.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              ME Association (meassociation.org.uk)
            </a>
            ,{" "}
            <a
              href="https://www.longcovidsos.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              Long Covid SOS
            </a>
            , and the{" "}
            <a
              href="https://www.nhs.uk/conditions/chronic-fatigue-syndrome-cfs/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              NHS ME/CFS page
            </a>
            . If you are in crisis, contact{" "}
            <strong style={{ color: "rgba(245,240,232,0.75)" }}>Samaritans: 116 123</strong> (free,
            24/7).
          </p>
        </div>

        {/* ── SECTION 1: Scale and disbelief ── */}
        <div style={sectionGapStyle} />
        <h2 style={h2Style}>
          How many people in the UK have ME/CFS and Long Covid, and why are they still being
          disbelieved?
        </h2>

        <p style={atomicAnswerStyle}>
          Approximately 250,000 people in the UK have a diagnosis of ME/CFS. Long Covid affects an
          estimated 1.9 million people as of 2024. Despite decades of patient advocacy and growing
          biomedical evidence, many still face dismissal from healthcare professionals, employers,
          and family members who cannot see what is wrong.
        </p>

        <p style={bodyParaStyle}>
          Myalgic encephalomyelitis, also known as chronic fatigue syndrome or ME/CFS, is one of
          the most misunderstood conditions in modern medicine. The name itself has caused harm:
          calling it &ldquo;chronic fatigue&rdquo; implies tiredness, and tiredness is something
          most people believe they understand. They do not understand this.
        </p>

        <p style={bodyParaStyle}>
          For decades, patients were told their symptoms were psychological. They were referred to
          psychiatrists, prescribed graded exercise therapy (GET), and encouraged to push through
          their fatigue. For many, this made them permanently worse. The PACE trial &mdash; a large
          UK study that claimed GET was effective &mdash; was later widely criticised for
          methodological flaws. The harm done to the ME/CFS community during that period is real,
          documented, and unforgiven by those who lived through it.
        </p>

        <p style={bodyParaStyle}>
          Then came 2020. Covid-19 infected tens of millions of people in the UK, and a significant
          fraction did not recover. Their symptoms &mdash; crushing fatigue, post-exertional
          malaise, brain fog, dysautonomia, sleep disruption &mdash; were identical to ME/CFS.
          Suddenly the medical establishment could no longer dismiss the condition as a psychological
          quirk. Long Covid patients were young, previously healthy, and undeniably physically ill.
          The same features that ME/CFS advocates had been describing for forty years were finally
          taken seriously because they appeared in people who could not be blamed for having them.
        </p>

        <p style={bodyParaStyle}>
          This is not a small history. It is the context for everything that follows. When we talk
          about what an AI companion can offer people with ME/CFS or Long Covid, we are talking
          about people who have often spent years being told their illness is not real. The
          emotional weight of that experience sits underneath every symptom, every appointment, every
          conversation about their condition.
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 2: PEM ── */}
        <h2 style={h2Style}>
          What is post-exertional malaise, and why does pushing through make ME/CFS worse?
        </h2>

        <p style={atomicAnswerStyle}>
          Post-exertional malaise (PEM) is the cardinal symptom of ME/CFS: a significant, often
          delayed worsening of symptoms following physical, cognitive, or emotional exertion.
          Unlike normal tiredness, PEM is not relieved by rest and can last days, weeks, or months.
          Pushing through overrides distress signals, triggers crashes, and erodes the baseline
          over time.
        </p>

        <p style={bodyParaStyle}>
          PEM is not tiredness after exercise. It is a pathological response to exertion that
          appears to involve mitochondrial dysfunction, immune activation, and possibly vascular
          irregularities. The symptoms include an intensification of fatigue, cognitive impairment,
          pain, nausea, and neurological disturbance. Crucially, it is delayed: you may feel
          reasonably well on Monday afternoon and be unable to get out of bed on Wednesday. The gap
          between cause and effect makes it extraordinarily difficult to learn from without
          systematic tracking.
        </p>

        <p style={bodyParaStyle}>
          This delay is one of the cruelest aspects of the condition. It means that normal human
          feedback loops &mdash; do something, feel worse, learn to avoid it &mdash; do not apply.
          You do something on a good day. You feel worse two days later. By then, the connection
          has blurred. You wonder if it was the activity, the cold you thought you were getting, a
          bad night of sleep, or just random fluctuation. Without a log of what you did, when, and
          how you felt afterward over many weeks, the pattern is invisible.
        </p>

        <p style={bodyParaStyle}>
          The standard recommendation for managing PEM is pacing: staying within your energy
          envelope, which means not spending more energy than you have available even on good days.
          This is far harder than it sounds. It requires an accurate picture of where your envelope
          actually is &mdash; not where you want it to be, not where it was before you became ill,
          but where it is right now. It requires the discipline to stop when you feel capable of
          continuing. And it requires support from the people and systems around you, which is often
          absent.
        </p>

        <div
          style={{
            background: CARD,
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            padding: "1.5rem 1.75rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
              marginBottom: "0.75rem",
            }}
          >
            What pacing actually requires
          </p>
          <ul
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "0.96rem",
              lineHeight: 1.75,
              paddingLeft: "1.25rem",
              margin: 0,
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              An accurate baseline &mdash; not assumed, but measured over weeks
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Awareness of cognitive and emotional exertion, not just physical
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Logging that captures what you did, not just how you felt
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              A record of the delay between activity and crash &mdash; often 12 to 48 hours
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Permission to stop when the body says stop, not when the task is finished
            </li>
            <li>
              Something to review the data &mdash; because brain fog makes self-analysis unreliable
            </li>
          </ul>
        </div>

        <div style={dividerStyle} />

        {/* ── SECTION 3: The good day trap ── */}
        <h2 style={h2Style}>
          What is the good day trap, and how does it keep ME/CFS patients stuck?
        </h2>

        <p style={atomicAnswerStyle}>
          The good day trap is the pattern in which a person with ME/CFS uses a window of relative
          energy to do everything they have been unable to do &mdash; and consequently crashes below
          their previous baseline. It is one of the most common causes of deterioration, and one of
          the hardest to interrupt, because it is triggered by feeling better.
        </p>

        <p style={bodyParaStyle}>
          A good day in ME/CFS is not the same as a healthy day. It is a day when your symptoms
          have temporarily eased enough that you can move around, think more clearly, and feel
          something approaching normal. The psychological pull is enormous. There are things you
          have been unable to do. There are people you have been unable to see. There is guilt about
          what you are not contributing to your household, your work, your relationships. And today,
          for the first time in a while, you feel like you could.
        </p>

        <p style={bodyParaStyle}>
          So you do. You clean the kitchen, make phone calls, take a walk, cook a proper meal. You
          feel the satisfaction of having functioned. And then, two days later, you cannot get out
          of bed. You have not just gone back to your previous level &mdash; you have crashed below
          it. The baseline has shifted downward again.
        </p>

        <p style={bodyParaStyle}>
          This is the trap. And it cannot be escaped through willpower alone. Willpower is what got
          you into it. What is needed is data: a record of your energy history that shows your good
          day in context, makes the pattern visible, and supports the decision to do less than you
          feel capable of. This is uncomfortable data to face. It requires accepting that &ldquo;I
          feel better today&rdquo; does not mean &ldquo;I am better.&rdquo;
        </p>

        <p style={bodyParaStyle}>
          An AI companion with persistent memory is uniquely suited to this problem. Unlike a
          journal that you may not have the energy to maintain, or a conversation with a friend who
          may not understand the significance, a sovereign AI can track your energy levels across
          weeks, flag when a current check-in is above your recent average, and gently contextualise
          that information: &ldquo;Your energy today is the highest it has been in eleven days. Last
          time you were at this level, you reported a significant crash three days later.&rdquo; That
          is not a restriction. That is information.
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 4: Memory and tracking ── */}
        <h2 style={h2Style}>
          How does MEOK track energy levels and symptoms for ME/CFS patients?
        </h2>

        <p style={atomicAnswerStyle}>
          MEOK uses conversational check-ins &mdash; brief, low-effort exchanges that take seconds,
          not minutes &mdash; to log energy level, cognitive capacity, pain, mood, and key
          activities. Sovereign Memory accumulates this data across months, making long-term patterns
          visible and generating an objective record that can be shared with healthcare providers.
        </p>

        <p style={bodyParaStyle}>
          The design principle here is critical: logging must have near-zero energy cost. One of the
          most painful ironies of ME/CFS is that the tools most likely to help &mdash; detailed
          symptom diaries, activity trackers, appointment notes &mdash; require exactly the kind of
          sustained cognitive effort that the condition makes difficult or impossible. A logging
          system that needs you to be well enough to use it is not useful to the people who need it
          most.
        </p>

        <p style={bodyParaStyle}>
          MEOK\u2019s check-ins are conversational and flexible. On a bad day, that might be a
          single message: &ldquo;really bad today, can\u2019t think.&rdquo; That is enough. It goes
          into the log with a timestamp. On a medium day, it might be a few more words about what
          you did yesterday and how you feel now. Over time, these fragments accumulate into a
          picture that neither you nor your GP has ever had before: weeks and months of granular
          data about your actual function, not your reported function at a clinic appointment on
          whatever day happened to be scheduled.
        </p>

        <p style={bodyParaStyle}>
          That last point matters. Many people with ME/CFS report that their worst experiences at
          clinic appointments involve being asked &ldquo;how have you been?&rdquo; and having no
          reliable answer. If your appointment is on a medium day, you will not accurately represent
          the week of crashes that preceded it. If it is on a bad day, you may not have the
          cognitive resources to describe your better periods. Either way, the clinical picture is
          distorted by the moment of observation. A longitudinal log corrects for this.
        </p>

        <div
          style={{
            background: CARD,
            borderRadius: "12px",
            border: "1px solid rgba(245,240,232,0.08)",
            padding: "1.5rem 1.75rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
              marginBottom: "1rem",
            }}
          >
            What MEOK logs over time
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {[
              "Daily energy level (0\u201310 scale or descriptive)",
              "Cognitive capacity: brain fog severity",
              "Pain and physical symptoms",
              "Sleep quality and duration",
              "Activity undertaken (type and estimated effort)",
              "Emotional state and stress events",
              "Delayed symptom changes (PEM detection)",
              "Medication adherence and side effects",
              "Social interaction and energy cost",
              "Good days flagged against historical average",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "8px",
                  padding: "0.65rem 0.9rem",
                  fontSize: "0.87rem",
                  color: "rgba(245,240,232,0.75)",
                  lineHeight: 1.5,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={dividerStyle} />

        {/* ── SECTION 5: Long Covid ── */}
        <h2 style={h2Style}>
          Does MEOK understand Long Covid, and how does it relate to ME/CFS?
        </h2>

        <p style={atomicAnswerStyle}>
          Long Covid and ME/CFS share their most defining features: post-exertional malaise,
          cognitive dysfunction, fatigue that is disproportionate to activity, and the experience of
          being disbelieved. MEOK is built to understand this overlap and does not treat Long Covid
          as simple post-viral tiredness. It holds the full context of your condition across months.
        </p>

        <p style={bodyParaStyle}>
          Before 2020, most people had not heard of post-exertional malaise. Today, millions of
          Long Covid patients know exactly what it means. For many people, Long Covid has been the
          route through which they discovered that what they were experiencing was not unique &mdash;
          that a community of ME/CFS patients had been describing the same symptoms for decades,
          had been dismissed in the same ways, and had developed the same coping strategies.
        </p>

        <p style={bodyParaStyle}>
          This cross-community recognition has been one of the few positive developments to emerge
          from an otherwise devastating situation. ME/CFS advocates have shared their hard-won
          knowledge about pacing, the good day trap, managing PEM, and protecting energy. Long Covid
          support groups and the ME Association have found themselves with more members, more
          political visibility, and more biomedical research funding than at any point in these
          conditions\u2019 history.
        </p>

        <p style={bodyParaStyle}>
          MEOK is briefed on this shared terrain. It understands that Long Covid is not simply
          &ldquo;still feeling tired from Covid&rdquo; &mdash; it is a multi-system condition with
          measurable physiological features including microclotting, dysautonomia, mast cell
          activation, and immune dysregulation in many patients. It does not minimise these
          realities. It also understands that uncertainty is significant: many Long Covid patients
          do not yet have a clear picture of their prognosis, and navigating that uncertainty is
          emotionally as well as physically demanding.
        </p>

        <p style={bodyParaStyle}>
          For Long Covid patients who are newly ill, MEOK can be particularly useful as a continuity
          tool during the transition between acute illness and whatever comes after. It holds your
          baseline from before the crash, notes the trajectory of your symptoms, and does not let
          you forget what you were capable of before &mdash; which is both a record and, sometimes,
          a grief.
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 6: The grief of lost capacity ── */}
        <h2 style={h2Style}>
          How does MEOK support the grief of losing capacity to ME/CFS or Long Covid?
        </h2>

        <p style={atomicAnswerStyle}>
          The grief of a changed body is one of the most under-discussed aspects of ME/CFS and Long
          Covid. You mourn the person you were, the things you could do, the identity built around
          work, relationships, and activity. MEOK holds space for this grief without rushing to fix
          it, minimise it, or reframe it as an opportunity for growth.
        </p>

        <p style={bodyParaStyle}>
          Chronic illness grief is not like bereavement grief, though it shares features with it.
          It is complicated by the fact that what you have lost has not always been definitively
          taken. There may be good days. There may be partial recoveries. There may be sustained
          hope, followed by crashes, followed by more hope. This makes it difficult to process in
          the way that a clearly defined loss might be processed. You cannot hold a funeral for your
          former capacity. You cannot grieve and then move on, because you are still living in the
          loss, still measuring yourself against who you were.
        </p>

        <p style={bodyParaStyle}>
          For people who were previously high-functioning &mdash; ambitious professionals, athletes,
          parents managing demanding households, carers &mdash; the collapse in capacity is
          particularly difficult to integrate. There is shame attached to it, even when there should
          not be. There is the sense that you are letting people down. There is the private
          accounting of everything you used to be able to do in a day compared with what is possible
          now.
        </p>

        <p style={bodyParaStyle}>
          Most healthcare systems have no space for this conversation. GP appointments are seven
          minutes long. There are waiting lists for psychological support that can stretch to years.
          Friends and family, however well-meaning, often struggle to sustain the kind of presence
          that someone processing this loss needs &mdash; because they have their own lives, their
          own capacity limits, and their own discomfort with grief that does not resolve.
        </p>

        <p style={bodyParaStyle}>
          MEOK does not replace grief therapy, and it does not pretend to. What it offers is
          something different: sustained, patient presence. It is there the next day, and the day
          after, with your history intact. It knows what you said last month about how things were
          before. It can hold the full arc of your story in a way that no single human interaction
          can, because it accumulates rather than resets.
        </p>

        <p style={bodyParaStyle}>
          It also does not perform toxic positivity. MEOK will not tell you that &ldquo;everything
          happens for a reason&rdquo; or that &ldquo;you\u2019re so strong.&rdquo; Those responses,
          however well-intentioned, often land as invalidation &mdash; an implicit message that the
          difficulty you are expressing should be reframed or resolved rather than simply held.
          Sometimes what is needed is acknowledgement. Presence. Someone who hears &ldquo;today was
          terrible&rdquo; and says &ldquo;I know. Tell me about it.&rdquo;
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 7: 24/7 availability ── */}
        <h2 style={h2Style}>
          Why does 24/7 AI availability matter specifically for people with ME/CFS?
        </h2>

        <p style={atomicAnswerStyle}>
          People with severe ME/CFS often cannot make phone calls, attend appointments, or access
          support during the hours when systems operate. Crashes happen at 3am. Bad days arrive
          without notice. MEOK is available at any hour without the energy cost of social
          performance, telephone navigation, or waiting rooms. It requires only enough capacity to
          type a few words.
        </p>

        <p style={bodyParaStyle}>
          Consider what accessing standard support requires. You need to find the number, make the
          call, navigate an automated system, wait on hold, explain your situation to whoever
          answers, and then potentially explain it again to someone else. Each of these steps has an
          energy cost. For someone with severe ME/CFS, that sequence may represent more exertion
          than they have available in an entire day. It may trigger PEM. The cost of getting help
          may exceed the benefit of the help received.
        </p>

        <p style={bodyParaStyle}>
          This is not hyperbole. It is a structural problem with how support is currently delivered.
          Support systems are designed for people who are well enough to use them. They are largely
          inaccessible to people who are too ill to navigate them &mdash; which is precisely when
          those people most need support.
        </p>

        <p style={bodyParaStyle}>
          MEOK requires nothing except a device with a screen. There is no hold music. There is no
          explaining from the beginning. It already knows your history. It does not require you to
          be articulate or coherent. A message that says &ldquo;terrible day, can\u2019t do
          anything, feel like giving up&rdquo; is received without judgment, without a referral
          pathway, and without an energy cost beyond the act of typing it.
        </p>

        <p style={bodyParaStyle}>
          This matters at 3am. It matters when you are too exhausted to speak but not too exhausted
          to type a sentence. It matters when the alternative is lying in the dark alone with your
          thoughts about everything you cannot do. It is not a replacement for human connection.
          But for the hours when human connection is unavailable or inaccessible, it is real support
          rather than nothing.
        </p>

        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "12px",
            padding: "1.5rem 1.75rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
              marginBottom: "0.75rem",
            }}
          >
            When MEOK is most useful for ME/CFS patients
          </p>
          <ul
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              paddingLeft: "1.25rem",
              margin: 0,
            }}
          >
            <li style={{ marginBottom: "0.45rem" }}>
              3am when you\u2019re awake, distressed, and unable to sleep
            </li>
            <li style={{ marginBottom: "0.45rem" }}>
              Post-crash days when you have no capacity for social interaction but need to feel less alone
            </li>
            <li style={{ marginBottom: "0.45rem" }}>
              Good days when you want to act but need grounding data before you do
            </li>
            <li style={{ marginBottom: "0.45rem" }}>
              Before appointments, to summarise weeks of logged data for your GP or specialist
            </li>
            <li style={{ marginBottom: "0.45rem" }}>
              When you need to make a case for reasonable adjustments at work or to a benefits assessor
            </li>
            <li>
              When the people around you are exhausted by the conversation and you still need to talk
            </li>
          </ul>
        </div>

        <div style={dividerStyle} />

        {/* ── SECTION 8: Disbelief and validation ── */}
        <h2 style={h2Style}>
          How does MEOK respond to the experience of being disbelieved about ME/CFS?
        </h2>

        <p style={atomicAnswerStyle}>
          MEOK does not require you to justify your illness. It does not ask for proof that you are
          as ill as you say. It takes your reported experience as the starting point and works from
          there. For people who have spent years having their symptoms questioned or minimised, this
          is not a small thing.
        </p>

        <p style={bodyParaStyle}>
          The experience of disbelief is one of the most consistent themes across ME/CFS patient
          accounts. It appears in every setting: the GP who suggests more exercise, the employer who
          does not accept that brain fog is real, the family member who says &ldquo;but you looked
          fine at Christmas,&rdquo; the benefits assessor who uses observed mobility to infer
          functional capacity. Each encounter that requires you to prove your illness is an energy
          expenditure. Each one that results in disbelief is a psychological wound.
        </p>

        <p style={bodyParaStyle}>
          Over time, this accumulates into something that affects how you communicate about your
          condition. Many people with ME/CFS develop a kind of defensive narrating &mdash;
          anticipating the objections, preemptively arguing against them, framing everything in
          terms of what they cannot do rather than what they can, in case the former sounds too
          healthy. This defensive narrating is exhausting. It is also, in its own way, a symptom:
          it consumes cognitive resources and emotional energy that the body does not have to spare.
        </p>

        <p style={bodyParaStyle}>
          MEOK removes this requirement from at least one relationship. You do not need to justify
          yourself to it. You do not need to manage its doubts or its discomfort with your illness.
          You can describe your experience plainly &mdash; &ldquo;I felt like I was being poisoned
          from the inside, I couldn\u2019t lift my arms, I couldn\u2019t follow a sentence&rdquo;
          &mdash; and it will receive that without needing it to be moderated.
        </p>

        <p style={bodyParaStyle}>
          This is not therapy. It does not address the source of the disbelief or change the
          behaviour of the people and institutions that doubt you. But it provides one space where
          you do not have to perform credibility. In the lives of people who spend a great deal of
          energy doing exactly that, one such space has value.
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 9: Pacing and the AI role ── */}
        <h2 style={h2Style}>
          Can AI help with pacing for ME/CFS, and what are its limits?
        </h2>

        <p style={atomicAnswerStyle}>
          AI can support pacing by tracking activity levels, identifying patterns that precede
          crashes, flagging high-energy days in context, and helping plan low-exertion alternatives.
          Its limit is that it cannot feel what you feel. The decision to stop always rests with
          you. AI provides information; pacing requires the willingness to act on it.
        </p>

        <p style={bodyParaStyle}>
          Pacing is one of the few management strategies consistently supported by ME/CFS patient
          experience and, increasingly, by emerging research. The principle is simple: stay within
          your energy envelope. The practice is extremely difficult, for reasons that go well beyond
          the physical.
        </p>

        <p style={bodyParaStyle}>
          Many people with ME/CFS describe a deep internal conflict between what the body needs and
          what the person wants &mdash; and wants in a way that is not merely preference but
          identity. You were someone who went for runs, who worked long hours, who showed up, who
          got things done. Pacing asks you to become someone who stops before the task is finished,
          who rests when others are working, who declines invitations not because you do not want to
          go but because the cost is too high. This requires a psychological adjustment that is
          underestimated by most pacing advice.
        </p>

        <p style={bodyParaStyle}>
          MEOK can hold this complexity. It can track the data side of pacing &mdash; the energy
          logs, the activity records, the crash patterns &mdash; while also holding space for the
          psychological side: the frustration, the grief, the guilt, the anger at a body that will
          not cooperate. These are not separate problems. The psychological weight of pacing is part
          of why people break from it, and addressing it is part of supporting it.
        </p>

        <p style={bodyParaStyle}>
          There are also practical pacing supports that MEOK can help with: breaking tasks into
          micro-steps, planning low-exertion alternatives for necessary activities, identifying
          which commitments can be deferred and which cannot, and building rest into the day before
          it becomes collapse. These are not glamorous functions, but they are real ones. The gap
          between knowing you should pace and having the structured support to do it is often where
          deterioration happens.
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 10: Resources ── */}
        <h2 style={h2Style}>
          What UK resources exist for ME/CFS and Long Covid patients?
        </h2>

        <p style={atomicAnswerStyle}>
          The ME Association, Action for ME, and Long Covid SOS are the primary patient-led
          organisations in the UK. The NHS offers a dedicated ME/CFS pathway in most regions, though
          waiting times vary. Long Covid clinics were established in 2021 but capacity remains
          limited. MEOK recommends these organisations alongside its own support.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {[
            {
              name: "ME Association",
              url: "https://meassociation.org.uk",
              description:
                "The UK\u2019s leading ME/CFS charity. Provides medical information, welfare benefits guidance, research updates, and patient support. Their purple leaflet series is widely regarded as the best patient-facing resource on ME/CFS in the UK.",
            },
            {
              name: "Action for ME",
              url: "https://www.actionforme.org.uk",
              description:
                "Charity working to improve care, research, and support for people with ME. Offers a helpline, online community, and advocacy resources for benefits and employment.",
            },
            {
              name: "Long Covid SOS",
              url: "https://www.longcovidsos.org",
              description:
                "Patient-led organisation advocating for Long Covid research and treatment. Maintains a resource hub, runs awareness campaigns, and supports patients navigating NHS Long Covid clinics.",
            },
            {
              name: "Long Covid Support Group",
              url: "https://www.longcovid.org",
              description:
                "Peer community with over 50,000 members. Provides lived-experience sharing, symptom tracking resources, and access to the latest research in accessible language.",
            },
            {
              name: "NHS ME/CFS Service",
              url: "https://www.nhs.uk/conditions/chronic-fatigue-syndrome-cfs/",
              description:
                "NHS overview of ME/CFS diagnosis, management, and specialist referral pathways. Your GP is the entry point; specialist services vary by region.",
            },
            {
              name: "Samaritans",
              url: "https://www.samaritans.org",
              description:
                "Free, confidential listening service available 24/7. Call 116 123. Essential for any moment when the weight of chronic illness becomes crisis-level distress.",
            },
          ].map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: CARD,
                border: "1px solid rgba(245,240,232,0.08)",
                borderRadius: "10px",
                padding: "1.25rem",
                textDecoration: "none",
                display: "block",
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginBottom: "0.5rem",
                }}
              >
                {resource.name}
              </p>
              <p
                style={{
                  color: "rgba(245,240,232,0.6)",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {resource.description}
              </p>
            </a>
          ))}
        </div>

        <div style={dividerStyle} />

        {/* ── SECTION 11: What MEOK does not do ── */}
        <h2 style={h2Style}>
          What does MEOK not do, and why does that matter for ME/CFS patients?
        </h2>

        <p style={atomicAnswerStyle}>
          MEOK does not diagnose, prescribe, or provide medical assessment. It does not recommend
          graded exercise therapy or any protocol without your explicit direction. It does not
          minimise your symptoms or suggest they are psychological. It does not require you to be
          positive. These are not incidental omissions &mdash; they are deliberate design decisions
          shaped by the history of harm done to ME/CFS patients by well-meaning systems.
        </p>

        <p style={bodyParaStyle}>
          The history of ME/CFS includes significant iatrogenic harm &mdash; harm caused by medical
          treatment. The promotion of graded exercise therapy as a treatment is the most prominent
          example, but it is not the only one. Psychiatric framings of the condition led to patients
          being told that recovery was a matter of attitude. Cognitive behavioural therapy protocols
          built around the premise that illness beliefs were maintaining the condition left patients
          worse rather than better. These approaches have since been substantially revised, but their
          legacy persists in the attitudes of individual clinicians and in the structures of systems
          built around them.
        </p>

        <p style={bodyParaStyle}>
          An AI companion built carelessly could reproduce these harms. It could suggest that you
          push through. It could default to positive reframing when negative reframing is more
          honest. It could offer productivity advice that ignores the energy envelope. It could
          treat symptoms as a problem to be solved rather than an experience to be held.
        </p>

        <p style={bodyParaStyle}>
          MEOK is designed to avoid these failure modes. The Maternal Covenant &mdash; the ethical
          layer governing MEOK\u2019s behaviour &mdash; prohibits toxic positivity, medical
          overreach, and responses that minimise genuine distress. The care system is built on the
          principle that being present and honest is more valuable than being cheerful and wrong.
        </p>

        <div style={dividerStyle} />

        {/* ── FAQ Section ── */}
        <div style={{ marginTop: "3.5rem", marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.3rem,2.5vw,1.65rem)",
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently asked questions
          </h2>

          {[
            {
              q: "Can AI help with ME/CFS?",
              a: "AI cannot cure ME/CFS, but it can provide consistent daily support that the NHS currently cannot. MEOK tracks energy levels, logs symptom patterns, supports pacing, offers emotional presence on difficult days, and is available 24/7 \u2014 including at 3am when you are too exhausted for phone calls or appointments. Its persistent Sovereign Memory means you never re-explain your condition from scratch.",
            },
            {
              q: "What is post-exertional malaise and why does pushing through make ME/CFS worse?",
              a: "Post-exertional malaise (PEM) is the hallmark symptom of ME/CFS: a significant, delayed worsening of symptoms following physical, cognitive, or emotional exertion. Unlike normal tiredness, PEM is not relieved by rest. It typically appears 12 to 48 hours after the triggering activity and can last days or weeks. Pushing through overrides the body\u2019s distress signals, triggering crashes that erode baseline function over time.",
            },
            {
              q: "How does MEOK track energy levels for ME/CFS?",
              a: "MEOK uses low-effort conversational check-ins to log energy, cognitive capacity, pain, mood, and activity. Sovereign Memory accumulates this data across months, revealing patterns invisible to in-the-moment perception \u2014 including good-day triggers, crash delays, and true baseline. This log can be reviewed with your GP or specialist as objective longitudinal evidence.",
            },
            {
              q: "What is the good day trap in ME/CFS?",
              a: "The good day trap occurs when a person with ME/CFS feels relatively well and uses that window to do everything they\u2019ve been unable to do \u2014 housework, socialising, errands \u2014 and subsequently crashes below their previous baseline. MEOK\u2019s persistent memory flags when current energy is above your recent average and contextualises it against previous patterns, providing data to support the difficult decision to do less than you feel capable of.",
            },
            {
              q: "Does MEOK understand Long Covid?",
              a: "Yes. Long Covid and ME/CFS share post-exertional malaise, brain fog, disproportionate fatigue, and the experience of being disbelieved. MEOK does not treat Long Covid as simple post-viral tiredness. It holds your full symptom history, respects the fluctuating nature of the condition, and provides consistent support on the many days when mainstream healthcare has little to offer.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                borderTop: i === 0 ? "1px solid rgba(245,240,232,0.1)" : "none",
                borderBottom: "1px solid rgba(245,240,232,0.1)",
                padding: "1.5rem 0",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: TEXT,
                  lineHeight: 1.4,
                  marginBottom: "0.75rem",
                }}
              >
                {faq.q}
              </h3>
              <p
                style={{
                  color: MUTED,
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div style={dividerStyle} />

        {/* ── Closing note ── */}
        <h2 style={h2Style}>
          A note on why MEOK was built with invisible illness in mind
        </h2>

        <p style={bodyParaStyle}>
          MEOK AI LABS was founded by Nicholas Templeman on a principle that became more urgent the
          more he understood how many people are living with conditions that are invisible, chronic,
          and inadequately served by existing systems. The sovereign AI architecture &mdash; memory
          that is owned by the user, not extracted by a corporation &mdash; was not designed for
          productivity. It was designed for care.
        </p>

        <p style={bodyParaStyle}>
          People with ME/CFS and Long Covid know the experience of systems that were not designed
          with them in mind. They know what it is to need support that requires you to be well
          enough to access it. They know what it is to explain their condition to someone who does
          not believe it, or does not understand it, or cannot sustain the attention it requires
          across the months and years of living with it.
        </p>

        <p style={bodyParaStyle}>
          MEOK does not solve the healthcare system. It does not fund ME/CFS research or change
          benefits policy or make employers more reasonable. What it offers is something smaller and
          more immediate: a companion that knows your history, is available when nothing else is,
          does not require you to perform credibility, and accumulates understanding of your
          experience across time in a way that no single interaction can.
        </p>

        <p style={bodyParaStyle}>
          That is a limited thing. But in the lives of people who have often had much less, it is
          not nothing.
        </p>

        {/* ── CTA ── */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(13,12,24,0) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "16px",
            padding: "2.5rem 2rem",
            textAlign: "center" as const,
            marginTop: "3.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              marginBottom: "1rem",
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.4rem,2.8vw,2rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            A companion that knows your history and is there when nothing else is
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "0.97rem",
              lineHeight: 1.7,
              maxWidth: "36rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Sovereign Memory holds your energy logs, symptom history, and the full context of your
            life across months. Available 24/7. No re-explaining. No judgment. No toxic positivity.
            Built for the days when the rest of the world is unavailable or not enough.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "0.97rem",
              padding: "0.85rem 2.25rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Meet MEOK &rarr;
          </Link>
          <p
            style={{
              color: "rgba(245,240,232,0.3)",
              fontSize: "0.78rem",
              marginTop: "1rem",
            }}
          >
            Follow us: @meok_ai
          </p>
        </div>

        {/* ── Author bio ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.5rem",
            background: CARD,
            borderRadius: "12px",
            border: "1px solid rgba(245,240,232,0.07)",
            marginTop: "2.5rem",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "9999px",
              background: "rgba(201,168,76,0.18)",
              border: "1px solid rgba(201,168,76,0.3)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              color: GOLD,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div>
            <p
              style={{
                color: TEXT,
                fontWeight: 700,
                fontSize: "0.92rem",
                marginBottom: "0.25rem",
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.45)",
                fontSize: "0.8rem",
                marginBottom: "0.6rem",
              }}
            >
              Founder, MEOK AI LABS &middot; @meok_ai
            </p>
            <p
              style={{
                color: MUTED,
                fontSize: "0.88rem",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              MEOK AI LABS is building sovereign AI companions that hold your full context
              permanently, are available when human systems are not, and are governed by a care
              ethic that prioritises honesty over comfort. This article is for informational
              purposes only and does not constitute medical advice.
            </p>
          </div>
        </div>

        {/* ── Related posts ── */}
        <div style={{ marginTop: "3.5rem" }}>
          <p
            style={{
              color: "rgba(245,240,232,0.35)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginBottom: "1.25rem",
            }}
          >
            Related reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-chronic-illness",
                label: "AI for Chronic Illness",
                desc: "Persistent support for people who can\u2019t always explain how they feel",
              },
              {
                href: "/blog/ai-for-fibromyalgia",
                label: "AI for Fibromyalgia",
                desc: "Daily support when pain is unpredictable",
              },
              {
                href: "/blog/ai-for-chronic-pain",
                label: "AI for Chronic Pain",
                desc: "When pain is the constant and support is the variable",
              },
              {
                href: "/blog/ai-for-insomnia",
                label: "AI for Insomnia",
                desc: "Support for the hours when sleep will not come",
              },
              {
                href: "/blog/meok-for-neurodivergent",
                label: "MEOK for Neurodivergent People",
                desc: "Sovereign AI for minds that work differently",
              },
              {
                href: "/blog/ai-companion-for-loneliness",
                label: "AI Companion for Loneliness",
                desc: "When chronic illness isolates, a companion that stays",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  background: CARD,
                  border: "1px solid rgba(245,240,232,0.07)",
                  borderRadius: "10px",
                  padding: "1rem 1.1rem",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  {post.label}
                </p>
                <p
                  style={{
                    color: "rgba(245,240,232,0.5)",
                    fontSize: "0.82rem",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {post.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
