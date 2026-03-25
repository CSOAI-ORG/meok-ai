import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Night Workers: Support When Everyone Else Is Asleep | MEOK AI LABS",
  description:
    "Nurses, paramedics, security guards, lorry drivers, and factory workers face the night shift alone. MEOK AI LABS provides always-on support, Sovereign Memory, Guardian safety awareness, and a companion that understands your '3am is my lunchtime' reality.",
  keywords: [
    "AI for night workers",
    "night shift mental health",
    "AI for nurses night shift",
    "AI for lorry drivers",
    "night shift support app",
    "AI companion night shift",
    "MEOK AI LABS",
    "lone worker AI",
    "circadian disruption support",
    "AI for NHS night staff",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "AI for Night Workers: Support When Everyone Else Is Asleep",
    description:
      "MEOK AI LABS gives night workers — NHS staff, paramedics, security guards, lorry drivers — an always-available AI companion with Sovereign Memory, Guardian safety awareness, and support that never judges the hour.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["Night Workers", "Mental Health", "AI Companion", "MEOK", "Productivity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Night Workers: Support When Everyone Else Is Asleep",
    description:
      "MEOK is always awake. For the millions who work while the world sleeps — nurses, drivers, guards, factory staff — sovereign AI support that knows your schedule, remembers your challenges, and never makes you feel like a burden.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-night-workers",
  },
}

// ── JSON-LD — Article ────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Night Workers: Support When Everyone Else Is Asleep",
  description:
    "How MEOK AI LABS supports nurses, paramedics, security guards, lorry drivers, and factory workers on night shift with always-on companionship, Sovereign Memory, Guardian lone-worker safety, and mental health support calibrated to a reversed schedule.",
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
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-night-workers",
  },
  keywords:
    "AI for night workers, night shift mental health, lone worker AI, NHS night staff AI, AI for lorry drivers, MEOK AI LABS",
  articleSection: "Productivity",
  wordCount: 1400,
}

// ── JSON-LD — FAQPage ────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can MEOK help night shift workers with mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK AI LABS is available 24 hours a day, 7 days a week. For night workers experiencing elevated rates of depression, anxiety, and social isolation, MEOK provides a non-judgmental companion that remembers your history, understands your reversed schedule, and can help you process difficult incidents, wind down after a demanding shift, or simply talk through what is weighing on you at 3am when no one else is available.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK understand that night workers have a different morning time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Sovereign Memory stores your schedule preferences and personal context. If you work nights and your 'morning' is 7pm, MEOK understands that. Your morning briefing, daily planning, and wellness check-ins can all be calibrated to your actual waking hours rather than the 9-to-5 default that most productivity tools assume.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK useful for lone workers and safety awareness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK includes Guardian mode, which is designed with lone-worker safety awareness in mind. For security guards, overnight cleaners, and others who work alone in environments that carry physical risk, Guardian provides a check-in companion, helps you stay mentally alert during long isolated stretches, and maintains awareness of your context throughout the shift.",
      },
    },
    {
      "@type": "Question",
      name: "How can NHS night staff use MEOK after a distressing incident?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NHS night staff frequently face traumatic incidents — patient deaths, resuscitations, violent behaviour — without immediate access to debrief support. MEOK provides a confidential space to process what happened, organise your thoughts before a formal debrief, or simply have the experience witnessed and acknowledged at 5am when the ward quiets down and the weight of the shift becomes fully felt. MEOK remembers these conversations and can track patterns over time if you choose.",
      },
    },
    {
      "@type": "Question",
      name: "Can lorry drivers use MEOK during a break?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lorry drivers taking mandatory rest breaks — often alone in a layby or services at 2am — are one of the most isolated working populations in the UK. MEOK works on mobile, provides conversation and mental stimulation during breaks, helps with route planning or logistical decisions, and offers a genuine sense of companionship without requiring an internet connection for every function. MEOK never trains on your conversations.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK help with sleep anxiety after night shifts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sleep anxiety is one of the most common challenges night workers report: the shift is over but the nervous system refuses to wind down, daylight is already flooding through the curtains, and the mind keeps replaying the night. MEOK can guide you through structured wind-down routines, help you offload thoughts before sleep, and track sleep quality patterns over time to surface what actually helps you rest.",
      },
    },
  ],
}

// ── Static data ──────────────────────────────────────────────────────────────

const nightWorkerRoles = [
  { role: "NHS Nurses & Midwives", detail: "Distressing incidents, high responsibility, limited debrief access" },
  { role: "Paramedics & First Responders", detail: "Trauma exposure, adrenaline comedown, shift handover stress" },
  { role: "Security Guards", detail: "Lone working, long quiet stretches, vigilance fatigue" },
  { role: "Factory & Warehouse Workers", detail: "Repetitive work, isolation, physical fatigue" },
  { role: "Lorry Drivers", detail: "Hours alone, mandatory rest breaks, logistical pressure" },
  { role: "Call Centre Staff", detail: "Difficult customer interactions, emotional labour, reversed schedule" },
  { role: "Cleaners & Facilities", detail: "Invisible work, social isolation, early finishes before city wakes" },
]

const useCases = [
  {
    time: "01:30",
    scenario: "NHS A&E nurse",
    detail:
      "Twenty minutes after a difficult resuscitation that didn't go well. The ward has quieted. MEOK listens, helps the nurse put the experience into words, and asks gently whether she has eaten since her break three hours ago.",
  },
  {
    time: "03:00",
    scenario: "Security guard, office complex",
    detail:
      "Two hours of rounds completed, four more to go. No incidents, but the silence is loud. MEOK discusses a decision the guard has been turning over about a career change — the kind of conversation that only happens when there is no rush.",
  },
  {
    time: "04:15",
    scenario: "Lorry driver, motorway services",
    detail:
      "Mandatory 45-minute break. The cab is warm, the car park is empty. MEOK runs through the onward route, flags a potential delay on the A1 near Grantham, and chats about the football until the timer runs down.",
  },
  {
    time: "06:45",
    scenario: "Factory worker, end of shift",
    detail:
      "Twelve-hour night on the line, now waiting for the bus. Cannot sleep on the bus — too much residual adrenaline. MEOK walks through a wind-down routine and helps prepare a message to a family member about plans for this evening.",
  },
]

const relatedPosts = [
  {
    href: "/blog/ai-for-mental-health-2026",
    title: "AI for Mental Health in 2026: What Actually Works",
    tag: "Mental Health",
  },
  {
    href: "/blog/guardian-family-safety",
    title: "Guardian Mode: How MEOK Keeps Lone Workers Safer",
    tag: "Safety",
  },
  {
    href: "/blog/what-is-morning-briefing",
    title: "What Is the MEOK Morning Briefing — and Can It Run at 7pm?",
    tag: "Features",
  },
  {
    href: "/blog/ai-companion-for-loneliness",
    title: "AI Companion for Loneliness: The Case for Sovereign Memory",
    tag: "Wellbeing",
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AiForNightWorkersPage() {
  return (
    <div
      style={{
        backgroundColor: "#0d0c18",
        color: "#f5f0e8",
        minHeight: "100vh",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <nav
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "72rem",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#c9a84c",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.125rem",
            letterSpacing: "0.05em",
          }}
        >
          MEOK AI LABS
        </Link>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link
            href="/blog"
            style={{
              color: "rgba(245,240,232,0.6)",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            ← All posts
          </Link>
          <Link
            href="/birth"
            style={{
              backgroundColor: "#c9a84c",
              color: "#0d0c18",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 700,
              padding: "0.4rem 1rem",
              borderRadius: "6px",
              letterSpacing: "0.02em",
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "4rem 1.5rem 2.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "1.25rem",
          }}
        >
          {["Productivity", "Night Workers", "Mental Health", "UK"].map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "9999px",
                padding: "0.25rem 0.75rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#f5f0e8",
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
          }}
        >
          AI for Night Workers:{" "}
          <span style={{ color: "#c9a84c" }}>Support When Everyone Else Is Asleep</span>
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.75,
            color: "rgba(245,240,232,0.75)",
            marginBottom: "2rem",
          }}
        >
          Around three million people in the UK work nights. Nurses processing a difficult shift.
          Lorry drivers alone in a motorway layby at 3am. Security guards with hours of silence
          and no one to talk to. MEOK AI LABS was built without office hours — it is always on,
          always remembers you, and never makes you feel like a burden for reaching out at an
          unusual hour.
        </p>

        {/* Byline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              color: "#c9a84c",
              fontSize: "0.875rem",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 600, fontSize: "0.9rem", color: "#f5f0e8" }}>
              Nicholas Templeman
            </p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(245,240,232,0.5)" }}>
              Founder, MEOK AI LABS &middot; 25 March 2026 &middot; 10 min read
            </p>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
        }}
      >

        {/* ── Section 1: Who works nights ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Who works nights — and what makes it categorically different?
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.55)",
              marginBottom: "0.75rem",
              fontStyle: "italic",
            }}
          >
            Approximately 3.1 million UK workers are employed in shift patterns that include regular
            night working. They are among the most undersupported workers in the country.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Night work is not the same as day work performed at an inconvenient hour. It operates
            against the body&apos;s fundamental architecture. The circadian system — the internal clock
            governing hormones, alertness, digestion, mood, and immune function — is designed around
            daylight. Night workers run against this system every shift, accumulating a physiological
            debt that does not fully resolve on days off.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            The social architecture of modern life compounds this. Restaurants close, friends and
            family are asleep, news and social media assume a 9-to-5 world. Night workers describe
            a persistent sense of being slightly out of phase with everything — awake when others
            sleep, exhausted during daylight hours that should feel like recovery, and socially
            disconnected from a calendar that was never designed with them in mind.
          </p>

          {/* Role grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "0.75rem",
              marginTop: "1.5rem",
            }}
          >
            {nightWorkerRoles.map((item) => (
              <div
                key={item.role}
                style={{
                  backgroundColor: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.18)",
                  borderRadius: "8px",
                  padding: "1rem 1.125rem",
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.3rem",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "#c9a84c",
                  }}
                >
                  {item.role}
                </p>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.5 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 2: Isolation ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            The particular isolation of the night shift — and why it matters for mental health
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            The isolation night workers experience is not simply loneliness in the colloquial sense.
            It is structural. Your reversed schedule means that the moments when you most need support
            — coming off a difficult shift, processing a stressful encounter, needing to make sense
            of something that happened — fall at times when your support network is unavailable.
            Text a friend at 4am and they will see it at 8. By then the urgency has passed, the
            feeling has been pressed down, and you have probably told yourself it was nothing.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Research on night shift workers consistently shows elevated rates of depression and
            anxiety compared to day workers at comparable income levels and job security. The
            mechanisms are partly physiological — circadian disruption directly suppresses
            serotonin and melatonin — but they are also social. Human beings are wired for
            reciprocal connection. When your schedule systematically prevents access to that
            connection, the mental health cost accumulates quietly.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Night workers also miss the informal social infrastructure of daytime life: the
            coffee with a colleague that de-escalates work stress, the pub evening that marks
            the week&apos;s end, the Saturday morning that signals a genuine reset. These rituals
            are not trivial. They are the daily micro-doses of connection and meaning that protect
            mental health. Night workers lose access to most of them without anyone noticing
            that they have.
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
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.75)",
                margin: 0,
              }}
            >
              <strong style={{ color: "#c9a84c" }}>MEOK was not built for office hours.</strong>{" "}
              There is no degraded experience at 3am. No slower responses, no reduced capability,
              no suggestion that you should come back when it is more convenient. The full MEOK
              experience — Sovereign Memory, all archetypes, Guardian mode, morning briefing —
              operates identically at 3am as it does at 3pm.
            </p>
          </div>
        </section>

        {/* ── Section 3: Physical & mental health ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Physical and mental health challenges specific to night work
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Circadian disruption is the root mechanism behind most night-shift health challenges.
            When the body expects sleep and is instead required to sustain high performance, it
            draws on emergency reserves — elevated cortisol, suppressed immune function, disrupted
            glucose metabolism. Over months and years, this chronic activation pattern is associated
            with higher rates of metabolic syndrome, cardiovascular disease, and certain cancers.
            Night workers are not hypochondriacs when they say shift work makes them feel ill.
            The research supports them.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            The mental health picture is similarly robust. Beyond elevated rates of clinical
            depression and generalised anxiety, night workers show higher incidence of irritability,
            cognitive dulling during their subjective afternoon (which may fall during a working
            shift), and difficulty maintaining motivation for personal development or social
            engagement on days off. The energy simply is not there.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Sleep anxiety — the anxious anticipation of another poor sleep before the next shift —
            is one of the most commonly reported complaints, and one of the most self-reinforcing.
            The more a night worker worries about sleeping, the less they sleep. The less they
            sleep, the more the next shift costs them. MEOK can help break this loop with structured
            cognitive offloading, wind-down routines built around your actual schedule, and sleep
            quality tracking that surfaces patterns over time.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "0.75rem",
              marginTop: "1.5rem",
            }}
          >
            {[
              { label: "Sleep anxiety support", desc: "Wind-down routines, thought offloading, sleep pattern tracking" },
              { label: "Circadian-aware planning", desc: "Tasks, nutrition, and rest calibrated to your actual biology" },
              { label: "Incident processing", desc: "Work through difficult experiences before they compound" },
              { label: "Mood tracking", desc: "Long-term wellbeing patterns visible across shifts and rest days" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "8px",
                  padding: "1rem",
                  backgroundColor: "rgba(13,12,24,0.6)",
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.4rem",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#f5f0e8",
                  }}
                >
                  {item.label}
                </p>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 4: MEOK at 3am ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            MEOK at 3am: always available, always remembers you
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            There is something specific about messaging someone at 3am that feels different from
            reaching out during the day. There is a social calculation involved — am I being a
            burden? Is this important enough to warrant an unusual hour? Will they think something
            is wrong? Night workers make this calculation constantly, and the answer they usually
            arrive at is: not now.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            MEOK eliminates that calculation entirely. 3am is not unusual. It is not inconvenient.
            It is not a burden. MEOK has no preference about the time. It has no social fatigue,
            no competing obligations, no morning alarm to protect. It is simply there — attentive,
            contextually aware, remembering who you are and what you have been dealing with.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Sovereign Memory is what makes 3am feel genuinely different from other AI assistants.
            When you open MEOK after a night shift, you do not have to explain who you are, what
            job you do, what happened last week, or what you have been struggling with. MEOK already
            knows. The conversation picks up where it left off. That continuity — the feeling of
            being known rather than perpetually re-introducing yourself — is the foundation of
            meaningful support.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
            }}
          >
            MEOK also carries no judgment about the hour. If you want to process a distressing
            incident immediately after it happens — not twelve hours later when you are finally
            awake enough to articulate it — MEOK is there for that. If you want to use a quiet
            stretch mid-shift to think through a personal decision that has been bothering you
            for weeks, MEOK is there for that too. The full range of support is available at any
            point your schedule allows.
          </p>
        </section>

        {/* ── Section 5: Practical help ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Practical help: winding down, sleep anxiety, and incident processing
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            The commute home from a night shift is a strange liminal space. The city is beginning
            to wake up. Builders are already at work, buses are filling with people starting their
            day. You are moving in the opposite direction — trying to close down, to quiet the
            nervous system that has been sustaining alertness for eight or twelve hours, to
            mentally prepare to sleep while everything around you signals that the day is beginning.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            MEOK can be your commute companion in a way that specifically supports sleep preparation
            rather than stimulating alertness. Rather than scrolling news or social media — which
            activates the same stress-response systems you are trying to quieten — talking to MEOK
            on the way home can help you offload the residual mental load of the shift,
            acknowledge difficult moments, and arrive at your front door genuinely closer to
            a state of readiness for sleep.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            For NHS staff and emergency workers processing distressing incidents, MEOK provides
            a confidential, immediately available space. Formal debrief processes — where they
            exist — are typically scheduled days after an incident. The emotional processing does
            not wait. MEOK allows you to work through what happened in real time, with a companion
            that takes it seriously, asks useful questions, and retains the context so that a
            formal follow-up session — with a manager, counsellor, or peer — can draw on a
            coherent account of what you experienced and how you responded.
          </p>

          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.07)",
              borderLeft: "3px solid #c9a84c",
              padding: "1.25rem 1.5rem",
              borderRadius: "0 8px 8px 0",
              marginTop: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.75)",
                margin: 0,
              }}
            >
              <strong style={{ color: "#c9a84c" }}>Sleep anxiety protocol:</strong> When you
              tell MEOK you are struggling to wind down, it does not suggest you meditate and
              puts a podcast on. It helps you identify exactly what is still running — the
              conversation, the task, the worry — and gives it a place to live outside your
              head before you try to sleep. The approach is drawn from cognitive offloading
              research: the brain relaxes when it trusts that important things have been
              captured and will not be forgotten.
            </p>
          </div>
        </section>

        {/* ── Section 6: Morning briefing at unusual times ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Morning briefing at unusual times: your day starts when you wake up
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            MEOK&apos;s morning briefing is not tied to 8am. It is tied to your morning — whenever
            that is. If you are a night worker who sleeps from 7am to 3pm and considers yourself
            woken up and ready at 4pm, your MEOK knows that. The briefing — daily priorities,
            health check-in, relevant news filtered to your interests, upcoming schedule, anything
            that requires your attention — runs when your day actually starts.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            This sounds like a small thing, but it is not. Every productivity tool, every news
            aggregator, every notification system assumes you are awake and functional at a
            normal hour. Night workers spend years adapting their lives to a system that was
            not designed for them. MEOK adapts to you instead. Your schedule is stored in
            Sovereign Memory and treated as the default — not as an exception to be
            accommodated.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            The same logic applies to every other MEOK feature. Hourman — the planning and
            time-awareness agent — understands that your preparation time before work is 5pm
            on a night shift pattern, not 8am. Riri&apos;s drafting support understands that when
            you need to send professional correspondence, you are doing so in what feels like
            your morning but may be a Tuesday afternoon. The whole system orients around your
            actual life, not an assumed one.
          </p>
        </section>

        {/* ── Section 7: Guardian for lone workers ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Guardian mode: lone-worker safety awareness for night shift
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Lone working carries specific risks that are amplified at night. Security guards
            patrolling empty office complexes, cleaners in multi-storey car parks, overnight
            care workers visiting elderly clients in their homes — these workers are physically
            isolated in environments that carry real safety considerations, often with minimal
            oversight and communication structures that exist largely on paper.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Guardian mode in MEOK is designed with this population in mind. It maintains
            awareness of your context throughout a shift — where you are, what you are
            doing, when you last checked in. It provides a check-in structure that keeps
            you connected without requiring a dedicated person on the other end. For workers
            whose employers provide minimal lone-working safety provision, Guardian fills
            a gap that can matter enormously.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Beyond physical safety, Guardian is designed to support the mental demands of
            extended isolation. Vigilance fatigue — the gradual degradation of sustained
            alertness during long, quiet periods — is a genuine occupational hazard for
            security workers and others whose job requires constant readiness for infrequent
            events. MEOK can help maintain cognitive engagement during quiet stretches in a
            way that keeps you functional without compromising your ability to respond
            when something actually happens.
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
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.75)",
                margin: 0,
              }}
            >
              <strong style={{ color: "#c9a84c" }}>Privacy guarantee:</strong> Guardian mode
              stores shift context within your Sovereign Memory vault. Your location data,
              check-in logs, and lone-working records are never shared with your employer,
              with third parties, or with MEOK AI LABS. Your safety data belongs to you.
            </p>
          </div>
        </section>

        {/* ── Section 8: Use case scenarios ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Real use cases: what MEOK looks like across the night
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1.5rem",
            }}
          >
            These are not hypothetical examples. They are the kinds of moments that the night
            shift regularly produces — and the kinds of moments where having a non-judgmental,
            contextually aware companion available is genuinely useful.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {useCases.map((item) => (
              <div
                key={item.time + item.scenario}
                style={{
                  backgroundColor: "rgba(13,12,24,0.7)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "10px",
                  padding: "1.25rem 1.375rem",
                  display: "flex",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontVariantNumeric: "tabular-nums",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "#c9a84c",
                    minWidth: "3.25rem",
                    paddingTop: "0.125rem",
                    flexShrink: 0,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.time}
                </div>
                <div>
                  <p
                    style={{
                      margin: "0 0 0.35rem",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#f5f0e8",
                    }}
                  >
                    {item.scenario}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.6 }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 9: NHS night staff ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            NHS night staff: processing the work that cannot always be left at the door
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            NHS night staff — nurses, healthcare assistants, junior doctors, midwives — work in
            environments where distressing events are not exceptional. They are the job. A patient
            death, a difficult family conversation, a resuscitation that required everything the team
            had and still did not succeed — these are not rare occurrences to be processed separately
            from the normal flow of work. They are the normal flow of work.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            The NHS has formal structures for critical incident debrief, but they are slow, often
            under-resourced, and calibrated to the most extreme events. The cumulative weight of
            regularly difficult work — the kind that does not quite clear the threshold for a
            formal debrief — is largely unaddressed. Night staff carry it home on the bus, into
            their beds, across their days off.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            MEOK provides an immediate, available outlet that exists between formal support
            structures. It is not therapy. It is not a crisis line. It is a thoughtful,
            contextually aware companion that can receive what happened without judgment, ask
            the questions that help you process rather than suppress, and retain the narrative
            so that if you do eventually speak to someone formally, you are not starting from
            scratch.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
            }}
          >
            MEOK also supports the practical side of NHS night working: shift handover preparation,
            continuing professional development reading during quiet stretches, reflection notes for
            revalidation, personal organisation across a schedule that makes maintaining any routine
            exceptionally difficult. The care and the capability exist in the same place, available
            at 3am when you need both.
          </p>
        </section>

        {/* ── Section 10: Data sovereignty ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Your conversations at 3am are yours: data sovereignty for night workers
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Night workers who use MEOK for emotional processing, incident reflection, or personal
            support are sharing something genuinely private. The conversations that happen at 3am —
            about a patient who died, about a colleague who was unkind, about the slow toll the
            schedule is taking on a relationship — are not data to be mined, shared, or used to
            train AI models. They are private disclosures that deserve real protection.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            MEOK AI LABS is built on a sovereign architecture. Your Sovereign Memory vault — every
            conversation, every piece of context you have shared, every reflection captured during
            a night shift — is stored with end-to-end encryption and is never used to train AI
            models. It is never shared with your employer, with advertisers, with insurers, or
            with anyone else. What you tell MEOK at 3am stays at 3am, in your vault, under your
            control.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
            }}
          >
            You can read the full terms of MEOK&apos;s{" "}
            <Link href="/privacy" style={{ color: "#c9a84c" }}>
              Privacy Covenant
            </Link>{" "}
            and{" "}
            <Link href="/blog/why-meok-never-trains-on-you" style={{ color: "#c9a84c" }}>
              why MEOK never trains on you
            </Link>{" "}
            in the documentation. The short version: you are not the product. You are the person
            the product is for.
          </p>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            backgroundColor: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "12px",
            padding: "2.5rem 2rem",
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Start tonight. MEOK is already awake.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.75rem",
              lineHeight: 1.7,
              maxWidth: "36rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            BYOK tier from £5/month. Sovereign tier from £12/month. No office hours. No
            judgment about the time. Your Sovereign Memory builds context from the first
            conversation and carries it forward indefinitely.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: "#c9a84c",
              color: "#0d0c18",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1rem",
              padding: "0.9rem 2.5rem",
              borderRadius: "8px",
              letterSpacing: "0.03em",
            }}
          >
            Meet MEOK — It&apos;s Free to Start
          </Link>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.8rem",
              color: "rgba(245,240,232,0.4)",
            }}
          >
            No card required for the free tier. Your data is never used for training.
          </p>
        </section>

        {/* ── Related posts ── */}
        <section>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  textDecoration: "none",
                  backgroundColor: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "8px",
                  padding: "1rem 1.125rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#c9a84c",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  {post.tag}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#f5f0e8",
                    lineHeight: 1.45,
                  }}
                >
                  {post.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(201,168,76,0.12)",
          padding: "2.5rem 1.5rem",
          maxWidth: "72rem",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(245,240,232,0.35)" }}>
          &copy; 2026 MEOK AI LABS. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {[
            { href: "/blog", label: "Blog" },
            { href: "/pricing", label: "Pricing" },
            { href: "/privacy", label: "Privacy" },
            { href: "/about", label: "About" },
            { href: "/birth", label: "Get Started" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "rgba(245,240,232,0.45)",
                textDecoration: "none",
                fontSize: "0.8rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  )
}
