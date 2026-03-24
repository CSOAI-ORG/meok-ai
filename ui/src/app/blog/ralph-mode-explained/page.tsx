import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "Ralph Mode Explained: The Overnight Agent That Works While You Sleep | MEOK AI LABS",
  description:
    "Ralph Mode is MEOK\u2019s autonomous overnight work agent \u2014 it hunts leads, drafts proposals, researches competitors, and delivers a morning briefing before you are even out of bed. Sovereign tier only.",
  alternates: {
    canonical: "https://meok.ai/blog/ralph-mode-explained",
  },
  openGraph: {
    title: "Ralph Mode Explained: The Overnight Agent That Works While You Sleep",
    description:
      "Ralph Mode is MEOK\u2019s autonomous overnight agent. Brief it before bed. Wake up to a morning report: leads hunted, proposals drafted, competitors mapped. Sovereign tier, \u00a312/month.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ralph-mode-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Ralph+Mode+Explained&desc=The+Overnight+Agent+That+Works+While+You+Sleep",
        width: 1200,
        height: 630,
        alt: "Ralph Mode Explained: The Overnight Agent That Works While You Sleep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralph Mode Explained: The Overnight Agent That Works While You Sleep",
    description:
      "Brief MEOK before bed. Wake up to a morning report: leads hunted, proposals drafted, risks flagged. Ralph Mode is the overnight agent you always needed. \u00a312/month on Sovereign.",
    images: [
      "https://meok.ai/api/og?title=Ralph+Mode+Explained&desc=The+Overnight+Agent+That+Works+While+You+Sleep",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ralph Mode Explained: The Overnight Agent That Works While You Sleep",
  description:
    "Ralph Mode is MEOK\u2019s autonomous overnight work agent, available exclusively on the Sovereign tier. You queue tasks before bed \u2014 lead hunting, proposal drafting, competitor research, meeting prep \u2014 and wake to a structured morning briefing. This guide explains exactly how it works, what Ralph can do, how it coordinates Orion, Riri, and Hourman, and why it is fundamentally different from ChatGPT.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ralph-mode-explained",
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
    "https://meok.ai/api/og?title=Ralph+Mode+Explained&desc=The+Overnight+Agent+That+Works+While+You+Sleep",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ralph-mode-explained",
  },
  keywords:
    "Ralph Mode, MEOK overnight agent, autonomous AI agent, morning briefing AI, lead hunting AI, AI proposal drafting, competitive intelligence AI, Sovereign AI, MEOK Sovereign tier, AI that works while you sleep",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Ralph Mode in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK\u2019s autonomous overnight work agent, available exclusively on the Sovereign tier at \u00a312 per month. You brief it with a task queue before you go to bed \u2014 lead hunting, proposal drafting, research, competitive intelligence \u2014 and it executes those tasks while you sleep, delivering a structured morning briefing when you wake up.",
      },
    },
    {
      "@type": "Question",
      name: "What tasks can Ralph Mode complete overnight?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode can hunt qualified leads from specified sources, draft proposals and outreach emails in your voice, conduct deep competitor research, prepare meeting briefs, monitor industry news, summarise documents you flagged, and produce intelligence reports \u2014 all using sovereign memory of your business context, clients, and prior work.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Ralph Mode morning briefing contain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The morning briefing follows a consistent format: three headline findings, five completed tasks with outputs attached, and two risks or blockers flagged for your attention. Everything is delivered to your MEOK dashboard before you start your day, so your first action can be a decision \u2014 not a search.",
      },
    },
    {
      "@type": "Question",
      name: "How is Ralph Mode different from ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT resets every session and has no memory of your business. Ralph Mode operates on sovereign memory \u2014 it knows your clients, pipeline, competitors, and goals. It runs autonomously overnight without prompting, and it is care-based: it will flag risks and honest findings even when they are uncomfortable, rather than hallucinating to please you.",
      },
    },
    {
      "@type": "Question",
      name: "Which tier includes Ralph Mode and how much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is exclusively available on the Sovereign tier at \u00a312 per month. Sovereign activates the full MEOK Work OS: Ralph Mode overnight execution, Orion the researcher, Riri the builder, and Hourman the planner \u2014 all running on persistent sovereign memory that never leaves your control.",
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

export default function RalphModeExplainedPage() {
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

        <div
          style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}
        >
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
              Agents &amp; Overnight AI
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
              11 min read
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "0.25rem 0.625rem",
                borderRadius: "9999px",
                color: bg,
                background: gold,
              }}
            >
              Sovereign only
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
            Ralph Mode Explained: The Overnight Agent That Works While You Sleep
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
            Most AI tools stop working the moment you close the tab. Ralph Mode
            does not. It is MEOK&apos;s autonomous overnight agent: you queue
            tasks before bed, it executes them while you sleep, and your morning
            briefing is waiting on the dashboard before your first coffee.
            Lead lists, drafted proposals, competitor maps, meeting prep
            &mdash; done before you are even out of bed.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        {/* ── Section 1: What is Ralph Mode? ──────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
            color: cream,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          What exactly is Ralph Mode?
        </h2>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          Ralph Mode is MEOK&apos;s autonomous overnight work agent, available
          exclusively on the Sovereign tier. Unlike a chatbot you query manually,
          Ralph operates on a task queue: you brief it before you go to bed,
          it executes autonomously while you sleep, and a structured morning
          briefing sits in your dashboard when you wake. It is not a feature.
          It is a working night shift.
        </p>

        {/* Callout box 1 */}
        <div
          style={{
            borderLeft: `3px solid ${gold}`,
            paddingLeft: "1.25rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingRight: "1.25rem",
            marginBottom: "2.5rem",
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 0.5rem 0.5rem 0",
          }}
        >
          <p
            style={{
              color: cream,
              fontSize: "1rem",
              lineHeight: 1.7,
              margin: 0,
              fontWeight: 500,
            }}
          >
            Ralph Mode is named after the archetype of the eternal overnight
            worker &mdash; the one who locks in, heads down, no distractions,
            and delivers by morning. Every Sovereign user gets their own Ralph.
          </p>
        </div>

        {/* ── Section 2: Sovereign tier only ──────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
            color: cream,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          Why is Ralph Mode exclusive to the Sovereign tier?
        </h2>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          Overnight autonomous execution requires persistent sovereign memory.
          Ralph needs to know your clients, your pipeline stage, your tone of
          voice, your competitors, and your ongoing commitments to do its job
          properly. That level of continuity only exists on Sovereign, where
          your data is yours alone and nothing is used to train a shared model.
          Free and standard tiers are session-bound. Sovereign is not.
        </p>

        {/* ── Section 3: How the task queue works ─────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
            color: cream,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          How does the task queue work before bed?
        </h2>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          Before you close your laptop, you drop tasks into Ralph&apos;s queue
          inside MEOK. These can be typed naturally &mdash; &ldquo;find me five
          SaaS founders in fintech who raised seed in the last six months,&rdquo;
          or &ldquo;draft a proposal for the Hartley account based on our last
          three conversations&rdquo; &mdash; or picked from your saved task
          templates. Ralph processes the queue in priority order overnight,
          using memory of everything you have ever briefed it.
        </p>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          The briefing is intentionally low-friction. You do not need a
          structured prompt format. You speak to Ralph the way you would brief
          a capable colleague: what you need, why it matters, and roughly when.
          Ralph handles the decomposition into subtasks and assigns them to
          the appropriate specialist agents in its stack.
        </p>

        {/* ── Section 4: What Ralph can do ────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
            color: cream,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          What can Ralph Mode actually do overnight?
        </h2>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Ralph&apos;s capability set is broad because it orchestrates three
          specialist agents: Orion, Riri, and Hourman. Together they cover the
          full range of business work that normally eats your day. Here is what
          Ralph can complete in a single overnight run.
        </p>

        {/* Capability grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            {
              icon: "&#9679;",
              title: "Lead hunting",
              body:
                "Scans specified sources for qualified prospects matching your ideal customer profile, scores them against your criteria, and returns a ranked list with contact intelligence.",
            },
            {
              icon: "&#9679;",
              title: "Proposal drafting",
              body:
                "Writes first-draft proposals in your voice, drawing on context from previous client conversations, deal notes, and your standard pricing and offer structures.",
            },
            {
              icon: "&#9679;",
              title: "Competitive intelligence",
              body:
                "Monitors competitor activity, pricing changes, new feature launches, job posts, and press coverage overnight. Delivers a structured diff from the previous report.",
            },
            {
              icon: "&#9679;",
              title: "Email drafts",
              body:
                "Prepares batched outreach or follow-up emails in your tone, tailored to each recipient using sovereign context. Ready for your review and one-click send by morning.",
            },
            {
              icon: "&#9679;",
              title: "Meeting preparation",
              body:
                "Pulls together everything relevant for your morning meetings: background on attendees, prior conversation threads, outstanding action items, and a suggested agenda.",
            },
            {
              icon: "&#9679;",
              title: "Document research",
              body:
                "Reads, synthesises, and extracts key points from reports, contracts, or URLs you flagged. Surfaces the three things you actually need to act on.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${mutedVeryLow}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <p
                style={{
                  color: gold,
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  marginBottom: "0.5rem",
                  margin: "0 0 0.5rem 0",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  color: muted,
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section 5: Orion, Riri, Hourman ─────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
            color: cream,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          Who are Orion, Riri, and Hourman &mdash; and how does Ralph coordinate them?
        </h2>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          Ralph does not do everything itself. It is the conductor. When you
          queue a task overnight, Ralph decomposes it and delegates to the
          correct specialist. Understanding each agent helps you brief Ralph
          more effectively.
        </p>

        {/* Agent cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Orion */}
          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: `1px solid rgba(201,168,76,0.2)`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                color: gold,
                fontWeight: 800,
                fontSize: "1.0625rem",
                marginBottom: "0.5rem",
                margin: "0 0 0.5rem 0",
              }}
            >
              Orion &mdash; The Hunter
            </p>
            <p
              style={{
                color: muted,
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Orion is the research and intelligence specialist. When Ralph
              receives a task involving lead hunting, competitor scanning,
              market research, or document synthesis, it routes to Orion.
              Orion works systematically through sources, applies your
              sovereign criteria, and returns structured findings. It remembers
              every research thread you have ever opened, so it never
              duplicates effort or contradicts its own prior conclusions.
            </p>
          </div>

          {/* Riri */}
          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: `1px solid rgba(201,168,76,0.2)`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                color: gold,
                fontWeight: 800,
                fontSize: "1.0625rem",
                marginBottom: "0.5rem",
                margin: "0 0 0.5rem 0",
              }}
            >
              Riri &mdash; The Builder
            </p>
            <p
              style={{
                color: muted,
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Riri handles creation and drafting. Proposals, outreach emails,
              meeting agendas, summary documents, follow-up sequences &mdash;
              anything that requires output in your voice goes to Riri. Riri
              writes using sovereign memory of your communication style,
              client context, and prior conversations. Its drafts do not need
              heavy editing because they already sound like you, not a
              generic AI.
            </p>
          </div>

          {/* Hourman */}
          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: `1px solid rgba(201,168,76,0.2)`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                color: gold,
                fontWeight: 800,
                fontSize: "1.0625rem",
                marginBottom: "0.5rem",
                margin: "0 0 0.5rem 0",
              }}
            >
              Hourman &mdash; The Planner
            </p>
            <p
              style={{
                color: muted,
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Hourman is responsible for time intelligence and prioritisation.
              After Orion and Riri complete their overnight work, Hourman
              takes the outputs and structures your morning: what deserves
              your first hour, what can wait, and what has been flagged as
              a risk. Hourman also prepares the daily sprint plan that
              sits alongside your briefing, so you start the day with a
              clear prioritised agenda rather than a pile of outputs to
              process yourself.
            </p>
          </div>
        </div>

        {/* Callout box 2 */}
        <div
          style={{
            borderLeft: `3px solid ${gold}`,
            paddingLeft: "1.25rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingRight: "1.25rem",
            marginBottom: "2.5rem",
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 0.5rem 0.5rem 0",
          }}
        >
          <p
            style={{
              color: cream,
              fontSize: "1rem",
              lineHeight: 1.7,
              margin: 0,
              fontWeight: 500,
            }}
          >
            Think of it this way: Ralph is the shift manager. Orion hunts.
            Riri builds. Hourman plans. You brief Ralph once before bed and
            all three work through the night as a coordinated unit &mdash;
            not three disconnected tools you have to reconcile in the morning.
          </p>
        </div>

        {/* ── Section 6: Morning briefing format ──────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
            color: cream,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          What does the morning briefing actually look like?
        </h2>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          The morning briefing follows a consistent, minimal format designed
          to give you signal without noise. It is not a wall of text.
          It is a decision surface: everything you need to act, nothing
          you need to filter. The format is always the same three sections.
        </p>

        {/* Briefing format blocks */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
              padding: "1.25rem",
              background: "rgba(245,240,232,0.03)",
              border: `1px solid ${mutedVeryLow}`,
              borderRadius: "0.75rem",
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.15)",
                border: `1px solid rgba(201,168,76,0.35)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: gold,
                fontWeight: 800,
                fontSize: "0.875rem",
              }}
            >
              01
            </span>
            <div>
              <p
                style={{
                  color: cream,
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  marginBottom: "0.4rem",
                  margin: "0 0 0.4rem 0",
                }}
              >
                3 Headlines
              </p>
              <p
                style={{
                  color: muted,
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                The three most important findings from the overnight run.
                Orion&apos;s top research hit, Riri&apos;s lead draft output,
                one notable external signal. Scannable in under thirty seconds.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
              padding: "1.25rem",
              background: "rgba(245,240,232,0.03)",
              border: `1px solid ${mutedVeryLow}`,
              borderRadius: "0.75rem",
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.15)",
                border: `1px solid rgba(201,168,76,0.35)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: gold,
                fontWeight: 800,
                fontSize: "0.875rem",
              }}
            >
              02
            </span>
            <div>
              <p
                style={{
                  color: cream,
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  marginBottom: "0.4rem",
                  margin: "0 0 0.4rem 0",
                }}
              >
                5 Tasks Completed
              </p>
              <p
                style={{
                  color: muted,
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                A status card for each completed overnight task, with the
                output attached or linked. Each card shows task name, agent
                responsible, and a one-line summary of what was produced.
                Click to expand the full output.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
              padding: "1.25rem",
              background: "rgba(245,240,232,0.03)",
              border: `1px solid ${mutedVeryLow}`,
              borderRadius: "0.75rem",
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.15)",
                border: `1px solid rgba(201,168,76,0.35)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: gold,
                fontWeight: 800,
                fontSize: "0.875rem",
              }}
            >
              03
            </span>
            <div>
              <p
                style={{
                  color: cream,
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  marginBottom: "0.4rem",
                  margin: "0 0 0.4rem 0",
                }}
              >
                2 Risks Flagged
              </p>
              <p
                style={{
                  color: muted,
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Risks, blockers, or honest concerns that Ralph identified
                during the overnight run. These could be a lead that looked
                strong but has a red flag in their history, a competitor
                move that changes your proposal angle, or a task Ralph
                could not complete without more context from you.
              </p>
            </div>
          </div>
        </div>

        {/* ── Section 7: How it differs from ChatGPT ──────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
            color: cream,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          How is Ralph Mode fundamentally different from ChatGPT?
        </h2>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          ChatGPT is a brilliant conversationalist with complete amnesia. Every
          session starts from nothing. You re-explain your business, your
          clients, your context, your tone &mdash; every single time. Ralph
          Mode operates on sovereign persistent memory. It knows your pipeline
          because you told it six weeks ago. It knows your writing style from
          fifty approved drafts. It knows which competitor you are most worried
          about because you briefed it three weeks ago and it has been watching
          since.
        </p>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          The second difference is execution mode. ChatGPT waits for you.
          Ralph executes while you sleep. There is no session to open, no
          prompt to write in the morning. The work is done before you arrive.
        </p>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          The third difference is honesty architecture. ChatGPT is trained to
          be helpful, which creates a subtle pressure to produce an answer even
          when the honest answer is &ldquo;I do not know&rdquo; or &ldquo;this
          lead looks weak.&rdquo; MEOK is built on care-based AI principles:
          Ralph will flag risks, surface uncomfortable findings, and refuse to
          hallucinate confidence it does not have. It would rather give you a
          shorter list of genuinely qualified leads than a long list of
          plausible-looking noise.
        </p>

        {/* ── Comparison table ────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
            color: cream,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          Manual work process vs Ralph Mode overnight: a direct comparison
        </h2>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          The table below compares a typical manual working day for a solo
          founder or consultant against the same workload handled by Ralph
          Mode overnight. The time figures are conservative estimates based
          on a five-task workload.
        </p>

        <div
          style={{
            overflowX: "auto",
            marginBottom: "2.5rem",
            borderRadius: "0.75rem",
            border: `1px solid ${mutedVeryLow}`,
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.9rem",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "rgba(201,168,76,0.08)",
                  borderBottom: `1px solid ${mutedVeryLow}`,
                }}
              >
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1.125rem",
                    color: gold,
                    fontWeight: 700,
                    fontSize: "0.8125rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}
                >
                  Task
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1.125rem",
                    color: gold,
                    fontWeight: 700,
                    fontSize: "0.8125rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}
                >
                  Manual process
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1.125rem",
                    color: gold,
                    fontWeight: 700,
                    fontSize: "0.8125rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}
                >
                  Ralph Mode overnight
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  task: "Lead research (10 prospects)",
                  manual: "2&ndash;3 hours, LinkedIn + Google, manual scoring",
                  ralph:
                    "Queued before bed, delivered by morning with scoring",
                },
                {
                  task: "Proposal first draft",
                  manual: "90 minutes, starting from blank template",
                  ralph:
                    "Riri drafts overnight in your voice using prior context",
                },
                {
                  task: "Competitor monitoring",
                  manual: "30&ndash;45 minutes, checking sites manually",
                  ralph: "Orion runs continuously, delivers diff by morning",
                },
                {
                  task: "Meeting prep (3 calls)",
                  manual: "45 minutes pulling notes and background",
                  ralph:
                    "Hourman assembles brief overnight, ready on wake",
                },
                {
                  task: "Outreach email batch (8 emails)",
                  manual: "60&ndash;90 minutes personalising each",
                  ralph:
                    "Riri drafts all eight overnight, ready for review",
                },
                {
                  task: "Document summary (20-page report)",
                  manual: "40&ndash;60 minutes reading and extracting",
                  ralph:
                    "Orion reads and surfaces the three actionable points",
                },
                {
                  task: "Total time cost",
                  manual:
                    "6&ndash;8 hours of your working day",
                  ralph:
                    "0 hours of your time. Done while you slept.",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: `1px solid ${mutedVeryLow}`,
                    background:
                      i % 2 === 0
                        ? "transparent"
                        : "rgba(245,240,232,0.02)",
                  }}
                >
                  <td
                    style={{
                      padding: "0.875rem 1.125rem",
                      color: cream,
                      fontWeight: i === 6 ? 700 : 400,
                      lineHeight: 1.5,
                      verticalAlign: "top",
                    }}
                    dangerouslySetInnerHTML={{ __html: row.task }}
                  />
                  <td
                    style={{
                      padding: "0.875rem 1.125rem",
                      color: i === 6 ? "rgba(220,60,60,0.85)" : muted,
                      fontWeight: i === 6 ? 600 : 400,
                      lineHeight: 1.5,
                      verticalAlign: "top",
                    }}
                    dangerouslySetInnerHTML={{ __html: row.manual }}
                  />
                  <td
                    style={{
                      padding: "0.875rem 1.125rem",
                      color: i === 6 ? gold : muted,
                      fontWeight: i === 6 ? 700 : 400,
                      lineHeight: 1.5,
                      verticalAlign: "top",
                    }}
                    dangerouslySetInnerHTML={{ __html: row.ralph }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Section 8: Care-based vs hallucination ───────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
            color: cream,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          Why does Ralph flag risks instead of just delivering results?
        </h2>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          MEOK is built on a care-based AI architecture. Care-based means the
          system is designed to serve your genuine interests, not your
          momentary preferences. A tool that flatters you with a long lead list
          when half those leads are unsuitable is not helping you. It is
          wasting your time and your trust.
        </p>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          Ralph&apos;s risk flagging is a direct expression of this principle.
          If Orion finds that a promising prospect has a track record of
          stalling vendors at proposal stage, that goes into the morning
          briefing under risks &mdash; not buried in footnotes. If a competitor
          just launched something that directly undermines the proposal Riri
          drafted, you need to know before you send it. Ralph tells you.
        </p>

        {/* Callout box 3 */}
        <div
          style={{
            borderLeft: `3px solid ${gold}`,
            paddingLeft: "1.25rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingRight: "1.25rem",
            marginBottom: "2.5rem",
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 0.5rem 0.5rem 0",
          }}
        >
          <p
            style={{
              color: cream,
              fontSize: "1rem",
              lineHeight: 1.7,
              margin: 0,
              fontWeight: 500,
            }}
          >
            &ldquo;An AI that only tells you what you want to hear is not an
            agent. It is a mirror. Ralph is an agent. It will tell you when
            the lead is weak, the timing is off, or the proposal needs a
            different angle &mdash; because that is what actually helps you
            close.&rdquo;
          </p>
          <p
            style={{
              color: mutedLow,
              fontSize: "0.8125rem",
              margin: "0.75rem 0 0 0",
              fontStyle: "italic",
            }}
          >
            &mdash; Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </div>

        {/* ── Section 9: Data sovereignty ─────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
            color: cream,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          What happens to your business data while Ralph works overnight?
        </h2>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          Your sovereign memory vault contains your client names, pipeline
          context, drafts, and research threads. It is yours alone. MEOK does
          not use your data to train shared models, does not sell insights
          derived from your context, and does not aggregate your business
          intelligence with anyone else&apos;s. Ralph operates inside your
          sovereign vault. What happens overnight stays in your vault.
        </p>
        <p
          style={{
            color: muted,
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}
        >
          This matters more for overnight agents than for any other AI feature.
          When you brief Ralph before bed, you are giving it your pipeline, your
          client context, your competitive concerns. If that data were used to
          train a shared model, your competitive intelligence would leak into
          the responses other users receive. On Sovereign, that cannot happen.
          The Privacy Covenant is a hard architectural constraint, not a policy
          you have to trust.
        </p>

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div
          style={{
            height: "1px",
            background: mutedVeryLow,
            marginTop: "3.5rem",
            marginBottom: "3.5rem",
          }}
        />

        {/* ── FAQ SECTION ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
            color: cream,
            marginBottom: "2rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          Frequently asked questions
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {/* FAQ 1 */}
          <div
            style={{
              borderBottom: `1px solid ${mutedVeryLow}`,
              paddingBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: cream,
                fontWeight: 700,
                fontSize: "1.0625rem",
                marginBottom: "0.75rem",
                margin: "0 0 0.75rem 0",
              }}
            >
              What is Ralph Mode in MEOK?
            </p>
            <p
              style={{
                color: muted,
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Ralph Mode is MEOK&apos;s autonomous overnight work agent,
              available exclusively on the Sovereign tier at &pound;12 per month.
              You brief it with a task queue before you go to bed &mdash; lead
              hunting, proposal drafting, research, competitive intelligence
              &mdash; and it executes those tasks while you sleep, delivering a
              structured morning briefing when you wake up.
            </p>
          </div>

          {/* FAQ 2 */}
          <div
            style={{
              borderBottom: `1px solid ${mutedVeryLow}`,
              paddingBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: cream,
                fontWeight: 700,
                fontSize: "1.0625rem",
                marginBottom: "0.75rem",
                margin: "0 0 0.75rem 0",
              }}
            >
              What tasks can Ralph Mode complete overnight?
            </p>
            <p
              style={{
                color: muted,
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Ralph Mode can hunt qualified leads, draft proposals and outreach
              emails in your voice, conduct deep competitor research, prepare
              meeting briefs, monitor industry news, summarise documents you
              flagged, and produce intelligence reports &mdash; all using
              sovereign memory of your business context, clients, and prior
              work. Orion, Riri, and Hourman handle the specialist execution
              under Ralph&apos;s coordination.
            </p>
          </div>

          {/* FAQ 3 */}
          <div
            style={{
              borderBottom: `1px solid ${mutedVeryLow}`,
              paddingBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: cream,
                fontWeight: 700,
                fontSize: "1.0625rem",
                marginBottom: "0.75rem",
                margin: "0 0 0.75rem 0",
              }}
            >
              What does the Ralph Mode morning briefing contain?
            </p>
            <p
              style={{
                color: muted,
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              The morning briefing follows a consistent format: three headline
              findings, five completed tasks with outputs attached, and two
              risks or blockers flagged for your attention. Everything is
              delivered to your MEOK dashboard before you start your day, so
              your first action can be a decision &mdash; not a search.
            </p>
          </div>

          {/* FAQ 4 */}
          <div
            style={{
              borderBottom: `1px solid ${mutedVeryLow}`,
              paddingBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: cream,
                fontWeight: 700,
                fontSize: "1.0625rem",
                marginBottom: "0.75rem",
                margin: "0 0 0.75rem 0",
              }}
            >
              How is Ralph Mode different from ChatGPT?
            </p>
            <p
              style={{
                color: muted,
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              ChatGPT resets every session and has no memory of your business.
              Ralph Mode operates on sovereign memory &mdash; it knows your
              clients, pipeline, competitors, and goals. It runs autonomously
              overnight without prompting, and it is care-based: it will flag
              risks and honest findings even when they are uncomfortable, rather
              than hallucinating to please you. Your data stays in your vault
              and is never used to train shared models.
            </p>
          </div>

          {/* FAQ 5 */}
          <div
            style={{
              paddingBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: cream,
                fontWeight: 700,
                fontSize: "1.0625rem",
                marginBottom: "0.75rem",
                margin: "0 0 0.75rem 0",
              }}
            >
              Which tier includes Ralph Mode and how much does it cost?
            </p>
            <p
              style={{
                color: muted,
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Ralph Mode is exclusively available on the Sovereign tier at
              &pound;12 per month. Sovereign activates the full MEOK Work OS:
              Ralph Mode overnight execution, Orion the researcher, Riri the
              builder, and Hourman the planner &mdash; all running on persistent
              sovereign memory that never leaves your control.
            </p>
          </div>
        </div>

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div
          style={{
            height: "1px",
            background: mutedVeryLow,
            marginBottom: "3.5rem",
          }}
        />

        {/* ── CTA SECTION ─────────────────────────────────────────────────── */}
        <section
          style={{
            background: "rgba(201,168,76,0.07)",
            border: `1px solid rgba(201,168,76,0.25)`,
            borderRadius: "1rem",
            padding: "2.5rem 2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: gold,
              fontWeight: 700,
              fontSize: "0.8125rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "1rem",
              margin: "0 0 1rem 0",
            }}
          >
            Sovereign Tier &mdash; &pound;12 / month
          </p>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
              color: cream,
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
              margin: "0 0 1rem 0",
            }}
          >
            Your overnight agent is waiting.
          </h2>
          <p
            style={{
              color: muted,
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "32rem",
              margin: "0 auto 2rem",
            }}
          >
            Ralph Mode is live for every Sovereign member. Brief it tonight.
            Wake up tomorrow with leads hunted, proposals drafted, competitors
            mapped, and a morning briefing already on your dashboard. Sovereign
            tier unlocks the full MEOK Work OS: Ralph, Orion, Riri, and
            Hourman &mdash; all working through the night so you do not have to.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                background: gold,
                color: bg,
                fontWeight: 800,
                fontSize: "0.9375rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Activate Sovereign &rarr;
            </Link>
            <Link
              href="/blog/meok-work-os-explained"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                background: "transparent",
                color: cream,
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                border: `1px solid ${mutedVeryLow}`,
              }}
            >
              Read: Work OS Explained
            </Link>
          </div>
          <p
            style={{
              color: mutedLow,
              fontSize: "0.8125rem",
              marginTop: "1.5rem",
              margin: "1.5rem 0 0 0",
            }}
          >
            Cancel anytime. No lock-in. Your sovereign memory is always yours
            to export.
          </p>
        </section>

        {/* ── Related articles ─────────────────────────────────────────────── */}
        <div style={{ marginTop: "4rem" }}>
          <p
            style={{
              color: mutedLow,
              fontSize: "0.8125rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
              marginBottom: "1.25rem",
            }}
          >
            Related reading
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              {
                href: "/blog/meok-work-os-explained",
                title: "MEOK Work OS Explained: Orion, Riri, Hourman and Ralph Mode",
              },
              {
                href: "/blog/morning-brief-guide",
                title: "The Morning Brief: How Your Day Should Start with Sovereign AI",
              },
              {
                href: "/blog/sovereign-ai-explained",
                title: "Sovereign AI Explained: What It Means for Your Data and Your Future",
              },
              {
                href: "/blog/what-is-ralph-mode",
                title: "What Is Ralph Mode? A Plain-English Introduction",
              },
              {
                href: "/blog/how-sovereign-ai-works",
                title: "How Sovereign AI Works: The Technical Architecture Behind MEOK",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  color: muted,
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                  lineHeight: 1.5,
                  paddingBottom: "0.75rem",
                  borderBottom: `1px solid ${mutedVeryLow}`,
                }}
              >
                <span
                  style={{ color: gold, flexShrink: 0, fontSize: "0.75rem" }}
                >
                  &#8594;
                </span>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
