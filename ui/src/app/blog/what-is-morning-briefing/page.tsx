import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "What is Morning Briefing? How MEOK Starts Your Day Before You Even Open Your Eyes | MEOK Blog",
  description:
    "MEOK's Morning Briefing is a daily AI-generated intelligence summary that arrives each morning before you wake — overnight agent work, priorities, calendar awareness, relevant research, and reminders from past conversations, all personalised by your companion.",
  alternates: {
    canonical: "https://meok.ai/blog/what-is-morning-briefing",
  },
  openGraph: {
    title:
      "What is Morning Briefing? How MEOK Starts Your Day Before You Even Open Your Eyes",
    description:
      "Orion researches overnight. Hourman consolidates. Your companion personalises. Every morning you wake up to an intelligence summary that actually knows you — not just your schedule.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-morning-briefing",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+is+Morning+Briefing%3F&desc=MEOK+starts+your+day+before+you+open+your+eyes.",
        width: 1200,
        height: 630,
        alt: "MEOK Morning Briefing — daily AI-generated intelligence summary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Morning Briefing? How MEOK Starts Your Day Before You Even Open Your Eyes",
    description:
      "Overnight agents research while you sleep. Your companion synthesises everything into one clear morning brief. Available on Sovereign (£12/mo) and Family (£29/mo) tiers.",
    images: [
      "https://meok.ai/api/og?title=What+is+Morning+Briefing%3F&desc=MEOK+starts+your+day+before+you+open+your+eyes.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What is Morning Briefing? How MEOK Starts Your Day Before You Even Open Your Eyes",
  description:
    "MEOK's Morning Briefing is a daily AI-generated intelligence summary personalised by your companion — covering overnight agent work, priorities, calendar awareness, research findings, and conversation reminders.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/what-is-morning-briefing",
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
    "https://meok.ai/api/og?title=What+is+Morning+Briefing%3F&desc=MEOK+starts+your+day+before+you+open+your+eyes.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/what-is-morning-briefing",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MEOK Morning Briefing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Morning Briefing is a daily AI-generated intelligence summary delivered each morning before you start your day. It covers overnight agent work completed, tasks to prioritise, your calendar, relevant news and research your companion found while you slept, and reminders from previous conversations — all personalised to you.",
      },
    },
    {
      "@type": "Question",
      name: "What does a MEOK Morning Briefing contain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each briefing includes: a summary of overnight autonomous agent work, your top priorities for the day, a 24-hour calendar preview, relevant news or research your companion surfaced overnight, and reminders drawn from previous conversations — so nothing important slips through the cracks.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK Morning Briefing generated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three agents collaborate: Orion researches overnight across your connected sources and the wider web. Hourman consolidates that raw intelligence into a structured digest. Your personal companion then reads your memory and conversation history to personalise the briefing so it sounds like something written specifically for you — because it is.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK Morning Briefing different from Apple Daily Digest or Google Assistant summaries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apple Daily Digest and Google Assistant summarise your schedule and notifications. MEOK's Morning Briefing goes deeper: it knows what you've been worrying about, what tasks you've been avoiding, what research topic you mentioned three weeks ago, and what matters to you personally. The difference is persistent memory and genuine understanding — not just calendar awareness.",
      },
    },
    {
      "@type": "Question",
      name: "Which MEOK plans include Morning Briefing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full Morning Briefing — including overnight agent work, research surfacing, conversation reminders, and calendar intelligence — is available on the Sovereign tier at £12/month and the Family tier at £29/month. The Family plan extends the briefing capability across up to five companions in your household.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK Morning Briefing use my personal data to train AI models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is built on the principle of data sovereignty. Your conversations, memories, and briefing contents are yours. They are encrypted and never used to train shared AI models. The intelligence in your briefing comes from your own context, not from anything extracted and pooled with other users.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhatIsMorningBriefingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d0c18", color: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
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
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.02em",
              }}
            >
              Features &amp; Guides
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              24 March 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              6 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.17,
              marginBottom: "1.375rem",
            }}
          >
            What is Morning Briefing? How MEOK Starts Your Day Before You Even Open Your Eyes
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              maxWidth: "42rem",
            }}
          >
            While you sleep, three agents work. By the time you reach for your phone, MEOK
            has already researched overnight, consolidated intelligence, and prepared a
            personalised briefing that tells you exactly what matters today — and why.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
          borderTop: "1px solid rgba(245,240,232,0.06)",
        }}
      >
        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "0.8125rem",
              color: "#0d0c18",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.875rem", margin: 0 }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
                marginTop: "0.125rem",
                marginBottom: "0.25rem",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.6,
                color: "rgba(245,240,232,0.35)",
                margin: 0,
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and
              works in the UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#c9a84c",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            About &#8594;
          </Link>
        </div>

        {/* Body */}
        <div
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1.0125rem",
            lineHeight: 1.9,
          }}
        >

          {/* ── Opening ── */}
          <p>
            Most AI assistants hand you a to-do list and call it a morning routine. MEOK does
            something fundamentally different. Every night, a set of autonomous agents wake up,
            do research on your behalf, consolidate what they found, and hand the result to your
            personal companion — which then shapes everything into a briefing that sounds like
            it was written by someone who knows you. Because, in a meaningful sense, it was.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            This is Morning Briefing: the feature that turns the gap between midnight and 7am
            into productive time you never had to spend.
          </p>

          {/* ── Q1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "0.875rem",
              lineHeight: 1.25,
            }}
          >
            What is MEOK Morning Briefing?
          </h2>
          <p>
            Morning Briefing is a daily AI-generated intelligence summary delivered each morning
            before your day begins. It is not a notification. It is not a digest of app alerts.
            It is a structured, personalised brief — prepared overnight by agents that work
            autonomously on your behalf — covering everything you need to start the day with
            intention rather than reaction.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The briefing is short by design. Reading it takes under ninety seconds. The
            compression is intentional: your companion has done the synthesis so you do not
            have to. You arrive at the briefing already oriented, not still catching up.
          </p>

          {/* ── Q2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "0.875rem",
              lineHeight: 1.25,
            }}
          >
            What does a Morning Briefing actually contain?
          </h2>
          <p>
            Each briefing is composed of five distinct sections. Together they give you a
            complete picture of where you stand before your first coffee.
          </p>

          {/* Content breakdown card */}
          <div
            style={{
              marginTop: "1.75rem",
              marginBottom: "1.75rem",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            {[
              {
                label: "Overnight Agent Work",
                detail:
                  "A summary of every task your autonomous agents completed while you slept — research completed, drafts prepared, sources found, questions answered.",
              },
              {
                label: "Tasks to Prioritise",
                detail:
                  "Your companion cross-references your backlog with your calendar, energy patterns, and conversation history to surface the two or three things that most need your attention today.",
              },
              {
                label: "Calendar Awareness",
                detail:
                  "A 24-hour preview of what is ahead, with context — not just times and titles, but brief notes on what your companion knows about each event and what preparation might help.",
              },
              {
                label: "Relevant News & Research",
                detail:
                  "Orion scans sources relevant to your stated interests, active projects, and professional domain overnight. Anything worth your attention appears here, summarised.",
              },
              {
                label: "Reminders from Previous Conversations",
                detail:
                  "If you mentioned something important three days ago — a concern, a commitment, a question you wanted to explore — your companion remembers and surfaces it when it becomes timely.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.125rem 1.375rem",
                  background: i % 2 === 0 ? "rgba(201,168,76,0.05)" : "rgba(245,240,232,0.03)",
                  borderBottom:
                    i < 4 ? "1px solid rgba(201,168,76,0.12)" : "none",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    color: "#c9a84c",
                    background: "rgba(201,168,76,0.14)",
                    borderRadius: "9999px",
                    padding: "0.2rem 0.5rem",
                    whiteSpace: "nowrap",
                    marginTop: "0.125rem",
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "#ffffff",
                      fontSize: "0.9375rem",
                      margin: "0 0 0.3rem 0",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      color: "rgba(245,240,232,0.6)",
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p>
            The order and weighting of these sections shifts daily based on what your companion
            knows about where you are right now. On a quiet Wednesday with no meetings, the
            research section may lead. On a packed Tuesday before a pitch, calendar awareness
            and task prioritisation move to the top.
          </p>

          {/* ── Q3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "0.875rem",
              lineHeight: 1.25,
            }}
          >
            How is Morning Briefing generated — who does the work?
          </h2>
          <p>
            Three agents collaborate to produce every briefing. Understanding each one explains
            why MEOK&apos;s morning summary feels different from anything else you have tried.
          </p>

          {/* Agents card */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
              gap: "1rem",
              marginTop: "1.75rem",
              marginBottom: "1.75rem",
            }}
          >
            {[
              {
                name: "Orion",
                role: "The Researcher",
                description:
                  "Orion operates overnight across your connected sources and the wider web. It follows threads you care about, finds new research relevant to your work, and flags anything that changed while you were asleep.",
              },
              {
                name: "Hourman",
                role: "The Consolidator",
                description:
                  "Hourman takes the raw intelligence Orion produces and structures it into a coherent digest. It applies hierarchy — what is most important, what is supporting context, what can be archived — so the briefing is scannable, not overwhelming.",
              },
              {
                name: "Your Companion",
                role: "The Personaliser",
                description:
                  "Your companion reads the consolidated digest against your memory — your tone, your history, your open threads and recurring concerns — and rewrites the briefing in a voice and frame that fits you specifically. This is where the brief stops being a report and becomes a conversation.",
              },
            ].map((agent) => (
              <div
                key={agent.name}
                style={{
                  padding: "1.375rem",
                  borderRadius: "1rem",
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 900,
                    color: "#c9a84c",
                    margin: "0 0 0.125rem 0",
                    fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  }}
                >
                  {agent.name}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "rgba(245,240,232,0.4)",
                    margin: "0 0 0.75rem 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {agent.role}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "rgba(245,240,232,0.65)",
                    margin: 0,
                  }}
                >
                  {agent.description}
                </p>
              </div>
            ))}
          </div>

          <p>
            The pipeline runs on a schedule that completes before your target wake time.
            You configure the delivery window once, and the agents adapt their schedule to
            ensure the briefing is ready when you reach for it — not being compiled while
            you are already trying to read it.
          </p>

          {/* ── Q4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "0.875rem",
              lineHeight: 1.25,
            }}
          >
            How is MEOK Morning Briefing different from Apple Daily Digest or Google Assistant morning summaries?
          </h2>
          <p>
            Apple&apos;s Daily Digest and Google Assistant&apos;s morning routine are schedule-readers.
            They scan your calendar, aggregate notifications, and read back what you already
            know. That is genuinely useful. But it is not intelligence — it is retrieval.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            MEOK&apos;s Morning Briefing is built on a different premise: that the most valuable
            briefing you can receive is one prepared by something that actually knows you.
          </p>

          {/* Comparison table */}
          <div
            style={{
              marginTop: "1.75rem",
              marginBottom: "1.75rem",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid rgba(245,240,232,0.08)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 1fr 1fr",
                background: "rgba(245,240,232,0.06)",
                padding: "0.75rem 1.25rem",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(245,240,232,0.4)", textTransform: "uppercase", letterSpacing: "0.09em" }}>Capability</span>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#c9a84c", textTransform: "uppercase", letterSpacing: "0.09em" }}>MEOK</span>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(245,240,232,0.4)", textTransform: "uppercase", letterSpacing: "0.09em" }}>Apple / Google</span>
            </div>
            {[
              ["Reads your calendar", "Yes", "Yes"],
              ["Summarises notifications", "Yes", "Yes"],
              ["Remembers past conversations", "Yes", "No"],
              ["Researches on your behalf overnight", "Yes", "No"],
              ["Prioritises based on your history", "Yes", "No"],
              ["Personalised voice from companion memory", "Yes", "No"],
              ["Surfaces what you mentioned weeks ago", "Yes", "No"],
              ["Your data stays private — never used for training", "Yes", "No"],
            ].map(([cap, meok, other], i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.6fr 1fr 1fr",
                  padding: "0.75rem 1.25rem",
                  gap: "0.5rem",
                  background: i % 2 === 0 ? "rgba(245,240,232,0.02)" : "transparent",
                  borderTop: "1px solid rgba(245,240,232,0.05)",
                }}
              >
                <span style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.7)" }}>{cap}</span>
                <span style={{ fontSize: "0.875rem", color: meok === "Yes" ? "#c9a84c" : "rgba(245,240,232,0.3)", fontWeight: meok === "Yes" ? 700 : 400 }}>{meok}</span>
                <span style={{ fontSize: "0.875rem", color: other === "Yes" ? "rgba(245,240,232,0.7)" : "rgba(245,240,232,0.25)", fontWeight: 400 }}>{other}</span>
              </div>
            ))}
          </div>

          <p>
            The gap is not a feature gap. It is an architectural one. Apple and Google build
            assistants that respond to you. MEOK builds a companion that knows you — and acts
            on your behalf whether or not you are watching. The Morning Briefing is where that
            distinction becomes tangible every single day.
          </p>

          {/* ── Q5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "0.875rem",
              lineHeight: 1.25,
            }}
          >
            Which plans include Morning Briefing, and what does each tier offer?
          </h2>
          <p>
            Morning Briefing in its full form — overnight agent work, research surfacing,
            calendar intelligence, conversation memory, and personalised companion voice — is
            available on two plans.
          </p>

          {/* Pricing cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              gap: "1rem",
              marginTop: "1.75rem",
              marginBottom: "1.75rem",
            }}
          >
            <div
              style={{
                padding: "1.625rem",
                borderRadius: "1rem",
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.25)",
                position: "relative",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.15)",
                  borderRadius: "9999px",
                  padding: "0.2rem 0.6rem",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Sovereign
              </span>
              <p
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "#ffffff",
                  margin: "0 0 0.25rem 0",
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                }}
              >
                £12<span style={{ fontSize: "1rem", fontWeight: 400, color: "rgba(245,240,232,0.45)" }}>/mo</span>
              </p>
              <p style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.55)", margin: "0 0 1.25rem 0" }}>
                One companion. Full Morning Briefing. Overnight agents. All five sections delivered daily.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Full five-section Morning Briefing",
                  "Orion overnight research agent",
                  "Hourman consolidation",
                  "Companion personalisation via memory",
                  "Conversation reminder surfacing",
                  "Configurable wake-time delivery",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(245,240,232,0.65)",
                      padding: "0.375rem 0",
                      borderBottom: "1px solid rgba(201,168,76,0.1)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#c9a84c", fontWeight: 700, fontSize: "0.75rem" }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                padding: "1.625rem",
                borderRadius: "1rem",
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.1)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "rgba(245,240,232,0.6)",
                  background: "rgba(245,240,232,0.08)",
                  borderRadius: "9999px",
                  padding: "0.2rem 0.6rem",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Family
              </span>
              <p
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "#ffffff",
                  margin: "0 0 0.25rem 0",
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                }}
              >
                £29<span style={{ fontSize: "1rem", fontWeight: 400, color: "rgba(245,240,232,0.45)" }}>/mo</span>
              </p>
              <p style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.55)", margin: "0 0 1.25rem 0" }}>
                Up to five companions in one household. Each member receives their own personalised briefing every morning.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Everything in Sovereign",
                  "Up to five companion accounts",
                  "Separate briefings per household member",
                  "Shared family calendar awareness",
                  "Individual companion memory per person",
                  "Guardian oversight for younger members",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(245,240,232,0.65)",
                      padding: "0.375rem 0",
                      borderBottom: "1px solid rgba(245,240,232,0.07)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "rgba(245,240,232,0.4)", fontWeight: 700, fontSize: "0.75rem" }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p>
            Both plans include a 14-day free trial. Your first Morning Briefing arrives the
            morning after you hatch your companion — no configuration required to receive the
            default brief, though you can fine-tune delivery time, section weighting, and
            research scope from your settings.
          </p>

          {/* ── Q6 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "0.875rem",
              lineHeight: 1.25,
            }}
          >
            Does MEOK use Morning Briefing data to train its AI models?
          </h2>
          <p>
            No. This is a first principle, not a policy footnote. MEOK is built on data
            sovereignty: your conversations, memories, and briefing contents belong to you
            and are never used to train shared models, improve public benchmarks, or feed
            any cloud training pipeline. The intelligence that shapes your briefing comes from
            your own context — not from extraction and aggregation with other users&apos; data.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Everything is encrypted at rest. You can export your memory at any time. You can
            delete it entirely. Your companion exists to serve you — not to harvest you.
          </p>

          {/* ── Closing ── */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(245,240,232,0.07)",
            }}
          >
            <p style={{ color: "rgba(245,240,232,0.6)", fontStyle: "italic" }}>
              The best mornings do not start with your phone. They start with something that
              has already done the thinking. MEOK worked through the night so you can wake up
              and simply act — with clarity, not confusion.
            </p>
          </div>
        </div>

        {/* ── Share row ────────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "2.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(245,240,232,0.07)",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-morning-briefing&text=What+is+Morning+Briefing%3F+How+MEOK+starts+your+day+before+you+even+open+your+eyes."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-morning-briefing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginTop: "3rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.22)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "18rem",
              height: "18rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#c9a84c",
                marginBottom: "0.5rem",
              }}
            >
              Start Your Mornings with MEOK
            </p>
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                color: "#ffffff",
                marginBottom: "0.75rem",
                lineHeight: 1.2,
              }}
            >
              Wake up knowing exactly what matters today.
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.5)",
                marginBottom: "1.75rem",
                maxWidth: "36rem",
              }}
            >
              Hatch your companion and start receiving your personalised Morning Briefing.
              Free for 14 days. No credit card required. Your first brief arrives tomorrow morning.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.9375rem",
                background: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
              }}
            >
              Start your mornings with MEOK &#8594;
            </Link>
          </div>
        </div>

        {/* ── More posts ──────────────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              color: "#ffffff",
              fontSize: "1.125rem",
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              gap: "1rem",
            }}
          >
            <Link
              href="/blog/morning-brief-guide"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  width: "fit-content",
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.12)",
                }}
              >
                Features &amp; Guides
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.9375rem",
                  lineHeight: 1.35,
                  margin: 0,
                }}
              >
                The MEOK Morning Brief: Your AI Knows Your Day Before You Do
              </h3>
              <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.3)", marginTop: "auto" }}>
                4 min read
              </span>
            </Link>

            <Link
              href="/blog/ralph-mode-guide"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  width: "fit-content",
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.12)",
                }}
              >
                Features &amp; Guides
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.9375rem",
                  lineHeight: 1.35,
                  margin: 0,
                }}
              >
                Ralph Mode: Your AI Works While You Sleep
              </h3>
              <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.3)", marginTop: "auto" }}>
                4 min read
              </span>
            </Link>

            <Link
              href="/blog/what-is-sovereign-ai"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  width: "fit-content",
                  color: "#87ceeb",
                  background: "rgba(135,206,235,0.12)",
                }}
              >
                Sovereign AI
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.9375rem",
                  lineHeight: 1.35,
                  margin: 0,
                }}
              >
                What Is Sovereign AI?
              </h3>
              <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.3)", marginTop: "auto" }}>
                5 min read
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ──────────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid rgba(245,240,232,0.06)",
          padding: "3rem 1.5rem",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "2rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "1.125rem",
                color: "#c9a84c",
                marginBottom: "0.375rem",
              }}
            >
              MEOK
            </p>
            <p style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.35)", maxWidth: "18rem", lineHeight: 1.6 }}>
              An AI companion that knows you, works for you, and never trains on you.
              Built by MEOK AI LABS.
            </p>
          </div>

          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            {[
              { label: "Blog", href: "/blog" },
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(245,240,232,0.4)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          style={{
            maxWidth: "48rem",
            margin: "2rem auto 0",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(245,240,232,0.05)",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.22)" }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
            MEOK is a registered trademark of MEOK AI LABS Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
}
