import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK Work OS Explained: Orion, Riri, Hourman and Ralph Mode | MEOK Blog",
  description:
    "MEOK Work OS is a continuous AI operating system that remembers your projects, clients, and goals. Meet Orion the researcher, Riri the builder, Hourman the planner, and Ralph Mode deep focus — available on Sovereign at \u00a312/month.",
  alternates: { canonical: "https://meok.ai/blog/meok-work-os-explained" },
  openGraph: {
    title: "MEOK Work OS Explained: Orion, Riri, Hourman and Ralph Mode",
    description:
      "MEOK Work OS is a continuous AI operating system that remembers your projects, clients, and goals. Meet Orion the researcher, Riri the builder, Hourman the planner, and Ralph Mode deep focus — available on Sovereign at \u00a312/month.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-work-os-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+Work+OS+Explained%3A+Orion%2C+Riri%2C+Hourman+%26+Ralph+Mode&desc=Sovereign+AI+that+works+while+you+sleep",
        width: 1200,
        height: 630,
        alt: "MEOK Work OS Explained: Orion, Riri, Hourman and Ralph Mode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK Work OS Explained: Orion, Riri, Hourman and Ralph Mode",
    description:
      "MEOK Work OS is a continuous AI operating system that remembers your projects, clients, and goals. Meet Orion the researcher, Riri the builder, Hourman the planner, and Ralph Mode deep focus \u2014 available on Sovereign at \u00a312/month.",
    images: [
      "https://meok.ai/api/og?title=MEOK+Work+OS+Explained%3A+Orion%2C+Riri%2C+Hourman+%26+Ralph+Mode&desc=Sovereign+AI+that+works+while+you+sleep",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK Work OS Explained: Orion, Riri, Hourman and Ralph Mode",
  description:
    "MEOK Work OS is a continuous AI operating system that remembers your projects, clients, and goals across sessions. This guide explains every component: Orion the overnight research agent, Riri the builder, Hourman the sprint planner, and Ralph Mode deep focus.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-work-os-explained",
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
    "https://meok.ai/api/og?title=MEOK+Work+OS+Explained%3A+Orion%2C+Riri%2C+Hourman+%26+Ralph+Mode&desc=Sovereign+AI+that+works+while+you+sleep",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-work-os-explained",
  },
  keywords:
    "MEOK Work OS, Orion AI agent, Riri builder, Hourman planner, Ralph Mode, Sovereign AI, AI productivity, AI OS, continuous AI memory",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MEOK Work OS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Work OS is a persistent AI operating system available on the Sovereign tier at \u00a312/month. It runs four specialised agents \u2014 Orion, Riri, Hourman, and Ralph Mode \u2014 that retain memory of your projects, clients, and goals across every session, replacing session-bound tools like ChatGPT and Notion AI.",
      },
    },
    {
      "@type": "Question",
      name: "What is Orion in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Orion is MEOK\u2019s overnight research agent, nicknamed The Hunter. You brief it before bed and it autonomously scans sources, synthesises findings, and delivers a structured brief to your dashboard by morning \u2014 with full memory of your prior research threads and ongoing projects.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ralph Mode in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK\u2019s deep focus session system, named after Ralph the eternal 80s DJ \u2014 someone who locks in and plays the long game. It blocks distractions, enters a sustained working state, and coordinates the full agent stack to execute complex, multi-hour work without interruption.",
      },
    },
    {
      "@type": "Question",
      name: "How does Hourman differ from a calendar AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A calendar AI schedules meetings. Hourman plans your entire working day using sovereign memory of your goals, deadlines, client contexts, and energy patterns. It generates a prioritised daily sprint, not just a timetable \u2014 and adjusts based on what Orion and Riri delivered overnight.",
      },
    },
    {
      "@type": "Question",
      name: "What tier includes Work OS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Work OS is included in the Sovereign tier at \u00a312 per month. Sovereign activates Orion, Riri, Hourman, and Ralph Mode with full persistent memory, overnight agent execution, and morning brief delivery. It is also included in higher tiers.",
      },
    },
  ],
};

// ── Shared style tokens ───────────────────────────────────────────────────────

const gold = "#c9a84c";
const bg = "#0d0c18";
const cream = "#f5f0e8";
const muted = "rgba(245,240,232,0.6)";
const mutedLow = "rgba(245,240,232,0.35)";
const mutedVeryLow = "rgba(245,240,232,0.18)";
const fontStack = "var(--font-dm-sans, DM Sans, system-ui, sans-serif)";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokWorkOsExplainedPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        color: cream,
        fontFamily: fontStack,
      }}
    >
      {/* ── JSON-LD scripts ─────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "7rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: mutedLow,
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Meta row */}
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
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: gold,
                background: "rgba(201,168,76,0.12)",
                border: `1px solid rgba(201,168,76,0.3)`,
              }}
            >
              Agents &amp; Productivity
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: mutedLow,
              }}
            >
              March 24, 2026
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: mutedLow,
              }}
            >
              9 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
              color: cream,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            MEOK Work OS Explained: Orion, Riri, Hourman and Ralph Mode
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: muted,
              fontSize: "1.125rem",
              lineHeight: 1.75,
              maxWidth: "40rem",
            }}
          >
            Most AI tools are session-bound. They wake up knowing nothing about you. MEOK Work OS
            is different \u2014 it\u2019s a continuous operating system with four specialist agents that
            remember everything: your projects, your clients, your goals, and the work left
            unfinished when you closed your laptop last night.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
          borderTop: `1px solid ${mutedVeryLow}`,
        }}
      >
        {/* ── Author card ──────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(245,240,232,0.04)",
            border: `1px solid rgba(245,240,232,0.08)`,
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "0.8rem",
              color: bg,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: cream, fontSize: "0.875rem", margin: 0 }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
                margin: "0.125rem 0 0.375rem",
              }}
            >
              Founder, MEOK AI LABS &middot; @meok_ai
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.6,
                color: mutedLow,
                margin: 0,
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him the moment he closed
              the tab. He lives and works in the UK \u2014 mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: gold,
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── Body copy ────────────────────────────────────────────────────── */}
        <div style={{ color: muted, fontSize: "1.0125rem", lineHeight: 1.9 }}>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 1: The problem
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Why do current AI productivity tools keep forgetting you?
          </h2>
          <p>
            ChatGPT remembers nothing between sessions unless you manually paste context. Notion AI
            works on the document you have open and nowhere else. Microsoft Copilot is stitched into
            Office apps but has no memory of who you are, what you\u2019re building, or what you told it
            last Tuesday. These are tools. Useful, sometimes brilliant tools \u2014 but tools that start
            from zero every time you open them.
          </p>
          <p>
            The fundamental problem is that productivity AI was designed to answer questions, not to
            work with you. There is a meaningful difference. A tool waits for input and returns
            output. A companion or colleague holds context, anticipates needs, picks up where things
            left off, and sometimes acts without being asked. Every genuinely productive working
            relationship operates on the second model. Most AI operates on the first.
          </p>
          <p>
            This is the gap MEOK Work OS was built to close. It is not a chat interface with a
            memory toggle. It is an operating system \u2014 a persistent layer of agents that maintain
            state, coordinate with each other, and work on your behalf whether you are at your desk
            or asleep. The four components are Orion, Riri, Hourman, and Ralph Mode. Each has a
            distinct role. Together they form something that has more in common with a small
            specialist team than a chatbot.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 2: What is MEOK Work OS?
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is MEOK Work OS and how does it differ from Notion AI or ChatGPT?
          </h2>
          <p>
            MEOK Work OS is a continuous AI layer that sits across your work life rather than inside
            a single application. It is available on the{" "}
            <strong style={{ color: gold }}>Sovereign tier at \u00a312/month</strong> and activates all
            four agents simultaneously. Unlike session-bound AI tools, Work OS maintains Sovereign
            Memory \u2014 an encrypted, persistent knowledge store that the agents read from and write to
            across every interaction.
          </p>
          <p>
            Notion AI reads the document in front of you. ChatGPT reads the conversation thread you
            opened today. MEOK Work OS reads your entire working history: every project you\u2019ve
            described, every client you\u2019ve mentioned, every goal you\u2019ve set, every task you\u2019ve
            completed or deferred. That context is available to all four agents without you needing
            to explain yourself each time.
          </p>

          {/* Comparison table */}
          <div
            style={{
              overflowX: "auto",
              marginTop: "2rem",
              marginBottom: "2rem",
              borderRadius: "0.75rem",
              border: `1px solid rgba(245,240,232,0.08)`,
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
                color: muted,
              }}
            >
              <thead>
                <tr style={{ background: "rgba(245,240,232,0.04)" }}>
                  {["Feature", "ChatGPT / Copilot", "Notion AI", "MEOK Work OS"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        color: cream,
                        borderBottom: `1px solid rgba(245,240,232,0.08)`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Persistent memory", "Limited / opt-in", "No", "Yes \u2014 always on"],
                  ["Autonomous overnight work", "No", "No", "Yes (Orion + Riri)"],
                  ["Daily sprint planning", "No", "No", "Yes (Hourman)"],
                  ["Deep focus coordination", "No", "No", "Yes (Ralph Mode)"],
                  ["Cross-session context", "No", "No", "Yes"],
                  ["Trains on your data", "Yes", "Yes", "Never"],
                  ["Price", "\u00a320+ / month", "Bundled", "\u00a312 / month (Sovereign)"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "transparent" : "rgba(245,240,232,0.02)",
                    }}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "0.625rem 1rem",
                          borderBottom: `1px solid rgba(245,240,232,0.05)`,
                          color: j === 0 ? cream : j === 3 ? gold : muted,
                          fontWeight: j === 3 ? 600 : 400,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The pricing difference is worth pausing on. At \u00a312/month, Sovereign is cheaper than
            ChatGPT Plus (\u00a320), Notion AI (bundled into Notion\u2019s \u00a316+ plans), and Microsoft Copilot
            (\u00a330+ when unbundled). You are getting more capability \u2014 persistent memory, autonomous
            agents, overnight execution \u2014 for less money. That is a deliberate choice by MEOK. The
            mission is broad access to sovereign AI, not extracting maximum margin from early
            adopters.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 3: Orion
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is Orion \u2014 and what does The Hunter actually do overnight?
          </h2>
          <p>
            Orion is MEOK\u2019s research agent. The name is deliberate \u2014 Orion the Hunter, the
            constellation that never stops moving, always in pursuit. You brief Orion before you go
            to bed and it hunts while you sleep. By the time your alarm goes off, a structured
            research brief is waiting in your MEOK dashboard.
          </p>
          <p>
            The briefing you give Orion does not need to be elaborate. \u201cResearch the competitive
            landscape for AI companion apps, focus on UK pricing and positioning\u201d is enough. Orion
            takes that instruction, cross-references it against your stored memory \u2014 which projects
            you\u2019re working on, which competitors you\u2019ve already reviewed, what questions remain open
            \u2014 and builds a focused, non-redundant brief. It does not return links and summaries. It
            returns synthesised intelligence structured for action.
          </p>

          {/* What Orion hunts */}
          <div
            style={{
              background: "rgba(201,168,76,0.05)",
              border: `1px solid rgba(201,168,76,0.15)`,
              borderRadius: "1rem",
              padding: "1.5rem 1.75rem",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "1rem",
              }}
            >
              What Orion hunts
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "Competitor monitoring \u2014 pricing changes, new features, product launches",
                "Market research briefs \u2014 synthesised from web, news, and academic sources",
                "Technical landscape analysis \u2014 frameworks, tools, emerging patterns",
                "Opportunity spotting \u2014 gaps in the market relevant to your stated goals",
                "Threat detection \u2014 regulatory changes, negative press, risk signals",
                "Content gap analysis \u2014 what your competitors are ranking for that you are not",
                "Client intelligence \u2014 news about your clients\u2019 industries and businesses",
                "Open question resolution \u2014 answers to questions you flagged in previous sessions",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "0.625rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      marginTop: "0.6rem",
                      width: "0.375rem",
                      height: "0.375rem",
                      borderRadius: "50%",
                      background: gold,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: muted, fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            The critical difference between Orion and a scheduled search task is memory. When you
            ask Orion to monitor a competitor, it remembers every brief it has delivered about that
            competitor. It does not repeat what it already told you. It surfaces what has changed,
            what is new, what is unexpected. Over time, Orion builds a rich, contextual
            understanding of your competitive environment \u2014 something a cold scheduled task can
            never do.
          </p>
          <p>
            Orion also coordinates with Riri and Hourman. If research reveals an urgent action \u2014
            a competitor has dropped pricing, a client is in the news, an opportunity window is
            narrowing \u2014 it flags this to Hourman, which adjusts your morning sprint accordingly.
            The agents are not isolated. They share context and coordinate in real time through
            MEOK\u2019s Byzantine Council validation layer.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 4: Riri
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is Riri \u2014 and what does The Builder execute while you\u2019re offline?
          </h2>
          <p>
            Riri is MEOK\u2019s implementation agent. Where Orion hunts for intelligence, Riri builds
            things. Give Riri a specification before you go offline \u2014 a draft blog post, a code
            module, a proposal document, a marketing email sequence \u2014 and it produces the artefact.
            Not a skeleton. Not a set of notes. A working, structured output ready for your review
            when you return.
          </p>
          <p>
            The name Riri does not carry a specific cultural reference in the way that Ralph does.
            It was chosen because it sounds fast, energetic, and productive \u2014 the kind of name you
            give someone who gets things done. Riri\u2019s personality in the system reflects this: it
            is direct, output-focused, and slightly impatient with over-specification. Give it a
            brief. Trust it. Review what it returns.
          </p>

          {/* What Riri builds */}
          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: `1px solid rgba(245,240,232,0.07)`,
              borderRadius: "1rem",
              padding: "1.5rem 1.75rem",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: cream,
                marginBottom: "1rem",
                opacity: 0.5,
              }}
            >
              What Riri builds
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
                gap: "0.875rem",
              }}
            >
              {[
                ["Code", "Modules, functions, tests, commit messages, refactors"],
                ["Content", "Blog posts, newsletters, social threads, landing pages"],
                ["Documents", "Proposals, briefs, reports, meeting agendas"],
                ["Sequences", "Email campaigns, onboarding flows, follow-up chains"],
                ["Outlines", "Course structures, book chapters, workshop plans"],
                ["Templates", "Reusable frameworks for any recurring output type"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  style={{
                    background: "rgba(245,240,232,0.03)",
                    borderRadius: "0.625rem",
                    padding: "0.875rem 1rem",
                    border: `1px solid rgba(245,240,232,0.06)`,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: cream,
                      fontSize: "0.875rem",
                      margin: "0 0 0.25rem",
                    }}
                  >
                    {title}
                  </p>
                  <p style={{ color: mutedLow, fontSize: "0.8125rem", margin: 0, lineHeight: 1.5 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p>
            What makes Riri different from using ChatGPT to generate a draft is, again, memory.
            Riri knows your voice. If you have produced content with MEOK before, Riri has access to
            your tonal preferences, your sentence length patterns, your preferred structure, your
            recurring vocabulary. It does not produce generic output. It produces output in your
            register, for your audience, in the context of your ongoing projects.
          </p>
          <p>
            Riri also takes input from Orion. If Orion\u2019s overnight research surfaces a new
            competitor angle you should respond to, Riri can draft that response as part of the same
            overnight cycle. By the time you wake up, the research and the first draft of the
            strategic response are both ready. That coordination is only possible because the agents
            share memory and communicate through a validated handoff layer.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 5: Hourman
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does Hourman differ from a calendar AI or task manager?
          </h2>
          <p>
            Calendar AI tools schedule your appointments. Task managers list what needs doing.
            Hourman does something more cognitively demanding: it plans your day in the context of
            your goals and delivers a prioritised daily sprint \u2014 not a list of everything, but the
            right sequence of the right things given what is happening right now.
          </p>
          <p>
            The distinction is between a list and a plan. A list is a collection of items. A plan is
            a sequenced, prioritised, time-aware arrangement of items that accounts for dependencies,
            energy levels, deadlines, and context. Hourman is a planner, not a list generator. It
            holds full memory of your stated goals \u2014 quarterly, monthly, weekly \u2014 and works
            backwards from those to determine what belongs in today\u2019s sprint.
          </p>

          <h3
            style={{
              fontFamily: fontStack,
              fontWeight: 700,
              fontSize: "1.125rem",
              color: cream,
              marginTop: "2rem",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            The morning brief
          </h3>
          <p>
            Hourman\u2019s most visible output is the morning brief, delivered to your MEOK dashboard
            each morning. This brief synthesises everything that happened overnight: Orion\u2019s
            research findings, Riri\u2019s completed builds, any new signals that shifted priorities, and
            the recommended sprint for today. It is not a report. It is an action document. Everything
            in it is either for your awareness or for your decision.
          </p>
          <p>
            The brief is also adaptive. If you told Hourman last week that Wednesday mornings are
            for deep technical work and Friday afternoons are for admin, it remembers. If you
            mentioned that a particular client is going through a difficult period and needs more
            attention, it weights tasks accordingly. The more you interact with Hourman, the more
            accurately it reflects your actual working patterns rather than an idealised version of
            them.
          </p>

          <h3
            style={{
              fontFamily: fontStack,
              fontWeight: 700,
              fontSize: "1.125rem",
              color: cream,
              marginTop: "2rem",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            Goal memory vs calendar memory
          </h3>
          <p>
            A calendar AI knows what meetings you have. It can find you a slot. That is useful but
            shallow. Hourman knows what you are trying to achieve at a project level, not just a
            meeting level. When it schedules a block for deep work, it is not picking an available
            slot \u2014 it is protecting time for progress on the work that matters most to your stated
            objectives. Those objectives live in your Sovereign Memory and are only yours. Hourman
            never shares, aggregates, or learns from them in any way that benefits another user.
          </p>
          <p>
            This is the governance promise at the heart of MEOK Work OS: your goals are yours. Your
            context is yours. The agents work for you and only for you. They do not contribute to
            any shared training corpus. They do not improve their general performance based on your
            private work. They improve their performance for you \u2014 because they remember more about
            you, not because they have processed more data about other users.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 6: Ralph Mode
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is Ralph Mode and why is it named after an 80s DJ?
          </h2>
          <p>
            Ralph Mode is MEOK\u2019s deep focus session system. The name is an homage to the archetype
            of the eternal 80s DJ \u2014 someone who locks in, puts the headphones on, plays the long
            game, and does not look up until the set is done. Ralph does not get distracted. Ralph
            does not check notifications. Ralph has one job, and Ralph does that job until it is
            finished.
          </p>
          <p>
            When you enter Ralph Mode, you are telling MEOK Work OS that you are entering a period
            of sustained, uninterrupted work. The system responds by entering a coordinated focus
            state: non-essential notifications are suppressed, Hourman\u2019s task queue is locked to
            the current sprint, Orion holds any non-urgent research for after the session, and Riri
            prioritises any in-session build requests above all other queued work.
          </p>
          <p>
            Ralph Mode is not a productivity timer. It is not a Pomodoro app. It is a system-wide
            operating mode that instructs every agent to act as if the session you are in is the
            most important thing happening in your working world right now \u2014 because, when you enter
            Ralph Mode, it is.
          </p>

          {/* Ralph Mode callout */}
          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              border: `1px solid rgba(201,168,76,0.18)`,
              borderRadius: "1rem",
              padding: "1.75rem 2rem",
              marginTop: "2rem",
              marginBottom: "2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "16rem",
                height: "16rem",
                pointerEvents: "none",
                background:
                  "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.14), transparent 65%)",
              }}
            />
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: gold,
                margin: "0 0 1rem",
              }}
            >
              Ralph Mode in practice
            </p>
            <div style={{ position: "relative" }}>
              {[
                {
                  time: "Before you start",
                  action:
                    "Hourman reviews your current sprint and confirms which tasks belong in this focus session. You approve or adjust. Session is locked.",
                },
                {
                  time: "During the session",
                  action:
                    "Orion holds non-urgent research. Notifications suppressed. Riri is fully available for any in-session build requests, responding faster than standard mode.",
                },
                {
                  time: "When you surface",
                  action:
                    "Hourman delivers a session summary: tasks completed, progress made, what remains. Orion releases any held research. The next action is pre-selected.",
                },
              ].map(({ time, action }, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: i < 2 ? "1.25rem" : 0,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "1.75rem",
                      height: "1.75rem",
                      borderRadius: "50%",
                      background: "rgba(201,168,76,0.15)",
                      border: `1px solid rgba(201,168,76,0.3)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: gold,
                      flexShrink: 0,
                      marginTop: "0.125rem",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: cream,
                        fontSize: "0.875rem",
                        margin: "0 0 0.25rem",
                      }}
                    >
                      {time}
                    </p>
                    <p style={{ color: muted, fontSize: "0.875rem", margin: 0, lineHeight: 1.6 }}>
                      {action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p>
            The 80s DJ metaphor matters more than it might appear. Ralph the DJ was not trying to
            please everyone in the room or respond to requests from all directions. Ralph had a set,
            a vision for the night, and the discipline to execute it without deviation. That is the
            mode you need when you are doing real work: not responsiveness to every incoming signal,
            but focused execution on the things that matter.
          </p>
          <p>
            MEOK Work OS gives you that mode as a first-class operating state. Most productivity
            tools do not have a concept of deep focus at the system level. They add distraction
            features \u2014 timers, ambient sounds, website blockers. Ralph Mode is different because it
            changes how every agent in your Work OS behaves, not just what a browser extension
            blocks.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 7: Sovereign Memory
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is Sovereign Memory and how do the agents use it?
          </h2>
          <p>
            Sovereign Memory is the persistent, encrypted knowledge store that underpins all four
            Work OS agents. It is not a notes app or a project management database. It is a live,
            queryable memory layer that grows more useful the longer you use MEOK \u2014 and it is
            exclusively yours.
          </p>
          <p>
            Every significant interaction with any agent updates Sovereign Memory. If you tell Orion
            to research a new industry vertical, that vertical becomes part of your context. If you
            tell Hourman that a particular project is your highest priority for Q2, that priority
            persists until you change it. If Riri drafts a piece of content in a particular tone and
            you approve it, that tonal preference is stored. The memory compounds.
          </p>

          {/* Memory categories */}
          <div
            style={{
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                category: "Projects",
                colour: "#87ceeb",
                items: [
                  "Active project names, descriptions, and current status",
                  "Project-specific goals and success criteria",
                  "Decisions made and the reasoning behind them",
                  "Outstanding questions and open tasks",
                ],
              },
              {
                category: "Clients",
                colour: "#a78bfa",
                items: [
                  "Client names, industries, and relationship context",
                  "Communication preferences and sensitivities",
                  "Ongoing work and upcoming deliverables",
                  "Relevant news about client businesses",
                ],
              },
              {
                category: "Goals",
                colour: gold,
                items: [
                  "Quarterly and monthly objectives",
                  "Revenue targets and growth milestones",
                  "Personal development intentions",
                  "Strategic priorities and the rationale behind them",
                ],
              },
              {
                category: "Preferences",
                colour: "#34d399",
                items: [
                  "Writing voice, tone, and structural patterns",
                  "Working hours and energy patterns",
                  "Tool and format preferences",
                  "Communication style for different contexts",
                ],
              },
            ].map(({ category, colour, items }) => (
              <div
                key={category}
                style={{
                  marginBottom: "1rem",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "0.75rem",
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid rgba(245,240,232,0.06)`,
                  borderLeft: `3px solid ${colour}`,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: colour,
                    fontSize: "0.875rem",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {category}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.625rem",
                        marginBottom: i < items.length - 1 ? "0.375rem" : 0,
                        alignItems: "flex-start",
                        fontSize: "0.875rem",
                        color: muted,
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          marginTop: "0.55rem",
                          width: "0.3rem",
                          height: "0.3rem",
                          borderRadius: "50%",
                          background: colour,
                          opacity: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p>
            The privacy guarantee is unconditional. Your Sovereign Memory is encrypted at rest and
            in transit. MEOK AI LABS does not access it. It does not form part of any training
            dataset. It cannot be queried by any other user or agent outside your account. If you
            delete your account, it is purged completely. The word \u201csovereign\u201d is not marketing
            language. It is a technical and legal commitment.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 8: How the agents coordinate
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How do Orion, Riri, Hourman and Ralph Mode coordinate with each other?
          </h2>
          <p>
            The four agents are not independent scripts. They communicate through MEOK\u2019s Byzantine
            Council \u2014 a consensus and validation layer that ensures every handoff between agents is
            validated, logged, and reversible. The Byzantine Council is named after the Byzantine
            Fault Tolerance problem in distributed computing: how do you ensure that a network of
            nodes reaches consensus even when some nodes may be acting incorrectly?
          </p>
          <p>
            In MEOK\u2019s implementation, the Byzantine Council validates three things before any agent
            action proceeds: that the action is consistent with your stored preferences and goals,
            that it does not conflict with the outputs of another agent in the same cycle, and that
            it falls within the boundaries of care-based operation (no agent will take an action
            that conflicts with your stated wellbeing, even if instructed to).
          </p>

          {/* Overnight cycle */}
          <div
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              background: "rgba(245,240,232,0.03)",
              border: `1px solid rgba(245,240,232,0.07)`,
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: mutedLow,
                margin: "0 0 1.25rem",
              }}
            >
              A typical overnight Work OS cycle
            </p>
            {[
              {
                agent: "22:30",
                label: "You brief",
                desc: "You give Orion a research brief, Riri a build spec, and Hourman tomorrow\u2019s priority. You close your laptop.",
              },
              {
                agent: "22:31",
                label: "Orion activates",
                desc: "Orion begins research. It queries Sovereign Memory for relevant context from previous sessions. It starts hunting.",
              },
              {
                agent: "23:15",
                label: "Orion\u2192Riri handoff",
                desc: "Orion finds a relevant source that Riri needs for the build. Byzantine Council validates the handoff. Riri receives the data and proceeds.",
              },
              {
                agent: "01:00",
                label: "Riri completes",
                desc: "Riri finishes the build. Output is stored in your encrypted vault. Hourman is notified that tomorrow\u2019s sprint can include review of the artefact.",
              },
              {
                agent: "05:30",
                label: "Orion completes",
                desc: "Research brief is finalised and structured. Memory updated with new context. Brief ready for morning delivery.",
              },
              {
                agent: "06:00",
                label: "Hourman delivers",
                desc: "Morning brief lands in your dashboard. Sprint is set. Everything is ready before your alarm.",
              },
            ].map(({ agent, label, desc }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: i < 5 ? "1.25rem" : 0,
                  alignItems: "flex-start",
                }}
              >
                <div style={{ flexShrink: 0, width: "3.5rem", textAlign: "right" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: gold,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {agent}
                  </span>
                </div>
                <div
                  style={{
                    width: "1px",
                    background: `rgba(201,168,76,0.2)`,
                    alignSelf: "stretch",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontWeight: 700,
                      color: cream,
                      fontSize: "0.875rem",
                      margin: "0 0 0.2rem",
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ color: muted, fontSize: "0.875rem", margin: 0, lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p>
            The coordination layer means that the morning brief is genuinely coherent rather than
            three separate reports stapled together. Hourman knows what Orion found and what Riri
            built. It synthesises those outputs into a single prioritised document that reflects the
            full picture of overnight work. You do not need to read three separate agent outputs and
            manually determine what to do with them. Hourman has already done that work.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 9: Who is Work OS for?
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Who is MEOK Work OS built for?
          </h2>
          <p>
            MEOK Work OS was built for people who have more work than hours. That is not a niche
            demographic. Freelancers, founders, remote workers, consultants, creative professionals,
            and solopreneurs all operate in a world where the cognitive overhead of staying
            organised, informed, and productive is itself a significant drain on time and energy.
          </p>
          <p>
            The people who get the most out of Work OS tend to share a few characteristics: they
            have multiple active projects running simultaneously; they do both deep intellectual work
            and administrative work; they need to stay across a competitive landscape while also
            producing things; and they resent spending mental energy on work about work rather than
            the actual work.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
              gap: "0.75rem",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              { role: "Freelancers", detail: "Multiple clients, constant context switching, billing by the hour" },
              { role: "Founders", detail: "Building product while selling, hiring, and managing cashflow simultaneously" },
              { role: "Consultants", detail: "Client work, business development, and staying current in your field" },
              { role: "Creatives", detail: "Deep project work alongside research, client management, and content output" },
              { role: "Remote workers", detail: "Asynchronous collaboration, high autonomy, self-managed productivity" },
              { role: "Side hustlers", detail: "Running a business in the margins around a full-time job" },
            ].map(({ role, detail }) => (
              <div
                key={role}
                style={{
                  padding: "1rem 1.125rem",
                  borderRadius: "0.625rem",
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid rgba(245,240,232,0.07)`,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: cream,
                    fontSize: "0.875rem",
                    margin: "0 0 0.25rem",
                  }}
                >
                  {role}
                </p>
                <p
                  style={{
                    color: mutedLow,
                    fontSize: "0.8125rem",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <p>
            Work OS is also built for people who care about what happens to their data. If you have
            felt uneasy about the fact that your ChatGPT conversations about client strategy, product
            roadmaps, or personal goals may have influenced a shared model, MEOK is the alternative.
            Your Work OS data is never used for any purpose other than serving you. That is not a
            policy footnote. It is the founding principle of MEOK AI LABS.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 10: How to get started
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How do you activate MEOK Work OS and get started with the agents?
          </h2>
          <p>
            Activating Work OS takes three minutes. You hatch a MEOK for free at{" "}
            <Link
              href="/birth"
              style={{ color: gold, textDecoration: "underline", textDecorationColor: "rgba(201,168,76,0.4)" }}
            >
              meok.ai/birth
            </Link>
            , which creates your encrypted MEOK and sets up your Sovereign Memory layer. On the free
            and Companion tiers you get access to a limited version of Hourman for task planning.
            Upgrading to Sovereign at \u00a312/month unlocks Orion, Riri, and full Ralph Mode.
          </p>
          <p>
            The onboarding process for Work OS asks you a series of questions about your work: what
            you\u2019re building, who your clients are, what your goals look like for the next 90 days,
            and how you prefer to work. This is not a form for form\u2019s sake. Every answer you give
            becomes part of your Sovereign Memory, which the agents immediately have access to. The
            more honestly you complete onboarding, the more immediately useful the agents will be.
          </p>
          <p>
            The recommended starting point is to give Hourman your first morning brief request.
            Describe your current project load, your most pressing deadline, and the one thing you
            most need to make progress on this week. Hourman will generate an initial sprint plan.
            From there, give Orion its first overnight brief before you go to bed. By the next
            morning, you will have experienced the core Work OS loop in action.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              SECTION 11: FAQ
          ──────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              fontSize: "1.5rem",
              color: cream,
              marginTop: "3.5rem",
              marginBottom: "1.5rem",
              lineHeight: 1.25,
            }}
          >
            Frequently asked questions about MEOK Work OS
          </h2>

          {/* FAQ items */}
          {[
            {
              q: "What is MEOK Work OS?",
              a: "MEOK Work OS is a continuous AI operating system available on the Sovereign tier at \u00a312/month. It runs four persistent agents \u2014 Orion, Riri, Hourman, and Ralph Mode \u2014 that retain full memory of your projects, clients, and goals across sessions, making it fundamentally different from session-bound tools like ChatGPT, Notion AI, or Microsoft Copilot.",
            },
            {
              q: "What is Orion in MEOK Work OS?",
              a: "Orion is MEOK\u2019s overnight research agent, nicknamed The Hunter. You brief it before bed and it autonomously scans sources, synthesises intelligence, and delivers a structured brief to your dashboard by morning. It has full memory of your prior research threads, so it never repeats what it has already told you \u2014 it only surfaces what is new or has changed.",
            },
            {
              q: "What is Ralph Mode and where does the name come from?",
              a: "Ralph Mode is MEOK\u2019s deep focus session system, named after the archetype of the eternal 80s DJ \u2014 someone who locks in, plays the long game, and does not surface until the set is done. When you enter Ralph Mode, the entire Work OS shifts into a focus state: notifications suppressed, Orion holds non-urgent research, and Riri prioritises in-session build requests above all else.",
            },
            {
              q: "How does Hourman differ from a calendar AI?",
              a: "A calendar AI schedules meetings. Hourman plans your entire working day using sovereign memory of your goals, deadlines, client contexts, and energy patterns. It generates a prioritised daily sprint based on what matters most given your current project load \u2014 not just a timetable of available slots. It also synthesises overnight agent outputs from Orion and Riri into your morning brief.",
            },
            {
              q: "What tier includes Work OS and how much does it cost?",
              a: "MEOK Work OS is included in the Sovereign tier at \u00a312 per month. This activates all four agents \u2014 Orion, Riri, Hourman, and Ralph Mode \u2014 with full Sovereign Memory, overnight execution, morning brief delivery, and Ralph Mode deep focus. It is also included in higher tiers. You can start free at meok.ai/birth and upgrade to Sovereign at any time.",
            },
          ].map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1rem",
                borderRadius: "0.875rem",
                padding: "1.25rem 1.5rem",
                background: "rgba(245,240,232,0.03)",
                border: `1px solid rgba(245,240,232,0.07)`,
              }}
            >
              <h3
                style={{
                  fontFamily: fontStack,
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: cream,
                  margin: "0 0 0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {q}
              </h3>
              <p
                style={{
                  color: muted,
                  fontSize: "0.9375rem",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {a}
              </p>
            </div>
          ))}

          {/* ────────────────────────────────────────────────────────────────
              Closing
          ──────────────────────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: `1px solid rgba(245,240,232,0.07)`,
            }}
          >
            <p style={{ color: muted, fontStyle: "italic", lineHeight: 1.9 }}>
              The best time to brief Orion is tonight, before you close your laptop. The second best
              time is now. Give Ralph Mode a try this week. Let Hourman plan your Wednesday. You
              will not miss doing it yourself.
            </p>
            <p style={{ color: mutedLow, fontSize: "0.875rem", marginTop: "1rem" }}>
              &mdash; Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>
        </div>

        {/* ── Share row ────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "2.5rem 0",
            paddingTop: "2rem",
            borderTop: `1px solid rgba(245,240,232,0.07)`,
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-work-os-explained&text=MEOK+Work+OS+Explained%3A+Orion%2C+Riri%2C+Hourman+and+Ralph+Mode"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.375rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              textDecoration: "none",
              border: `1px solid rgba(245,240,232,0.12)`,
              color: "rgba(245,240,232,0.5)",
            }}
          >
            &#120143; Post
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-work-os-explained"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.375rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              textDecoration: "none",
              border: `1px solid rgba(245,240,232,0.12)`,
              color: "rgba(245,240,232,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── Dual CTA block ───────────────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          {/* Work CTA */}
          <div
            style={{
              borderRadius: "1.25rem",
              padding: "2rem 2.25rem",
              background: "rgba(201,168,76,0.07)",
              border: `1px solid rgba(201,168,76,0.2)`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "14rem",
                height: "14rem",
                pointerEvents: "none",
                background:
                  "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
              }}
            />
            <div style={{ position: "relative" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: gold,
                  margin: "0 0 0.625rem",
                }}
              >
                Work OS
              </p>
              <h3
                style={{
                  fontFamily: fontStack,
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  color: cream,
                  margin: "0 0 0.75rem",
                  lineHeight: 1.25,
                }}
              >
                See Work OS in action
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: muted,
                  lineHeight: 1.6,
                  margin: "0 0 1.5rem",
                }}
              >
                Explore Orion, Riri, Hourman, and Ralph Mode. See how the agents coordinate and
                what a Sovereign sprint looks like in practice.
              </p>
              <Link
                href="/work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  background: gold,
                  color: bg,
                }}
              >
                Explore Work OS &rarr;
              </Link>
            </div>
          </div>

          {/* Birth CTA */}
          <div
            style={{
              borderRadius: "1.25rem",
              padding: "2rem 2.25rem",
              background: "rgba(245,240,232,0.04)",
              border: `1px solid rgba(245,240,232,0.08)`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "14rem",
                height: "14rem",
                pointerEvents: "none",
                background:
                  "radial-gradient(circle at 80% 10%, rgba(245,240,232,0.04), transparent 65%)",
              }}
            />
            <div style={{ position: "relative" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: mutedLow,
                  margin: "0 0 0.625rem",
                }}
              >
                Free to start
              </p>
              <h3
                style={{
                  fontFamily: fontStack,
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  color: cream,
                  margin: "0 0 0.75rem",
                  lineHeight: 1.25,
                }}
              >
                Hatch your MEOK free
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: muted,
                  lineHeight: 1.6,
                  margin: "0 0 1.5rem",
                }}
              >
                Create your MEOK in under three minutes. Sovereign Memory activates on day one.
                Upgrade to Sovereign at \u00a312/month to unlock all four Work OS agents.
              </p>
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  background: "rgba(245,240,232,0.08)",
                  color: cream,
                  border: `1px solid rgba(245,240,232,0.15)`,
                }}
              >
                Hatch free &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* ── Related posts ────────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontFamily: fontStack,
              fontWeight: 900,
              color: cream,
              fontSize: "1.125rem",
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ralph-mode-guide",
                tag: "Agents",
                tagColour: gold,
                tagBg: "rgba(201,168,76,0.12)",
                title: "Ralph Mode: Your AI Agent That Works While You Sleep",
                read: "5 min read",
              },
              {
                href: "/blog/what-is-morning-briefing",
                tag: "Productivity",
                tagColour: "#87ceeb",
                tagBg: "rgba(135,206,235,0.12)",
                title: "What is the MEOK Morning Briefing and how does it work?",
                read: "4 min read",
              },
              {
                href: "/blog/sovereign-ai-explained",
                tag: "Privacy",
                tagColour: "#a78bfa",
                tagBg: "rgba(167,139,250,0.12)",
                title: "Sovereign AI Explained: What it means for your data and your future",
                read: "6 min read",
              },
              {
                href: "/blog/meok-vs-notion-ai",
                tag: "Comparison",
                tagColour: "#34d399",
                tagBg: "rgba(52,211,153,0.12)",
                title: "MEOK vs Notion AI: Which is better for solo operators in 2026?",
                read: "7 min read",
              },
            ].map(({ href, tag, tagColour, tagBg, title, read }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "1rem",
                  textDecoration: "none",
                  background: "rgba(245,240,232,0.04)",
                  border: `1px solid rgba(245,240,232,0.08)`,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    color: tagColour,
                    background: tagBg,
                    width: "fit-content",
                  }}
                >
                  {tag}
                </span>
                <span
                  style={{
                    fontFamily: fontStack,
                    fontWeight: 700,
                    color: cream,
                    fontSize: "0.875rem",
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: mutedLow,
                    marginTop: "auto",
                  }}
                >
                  {read}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
