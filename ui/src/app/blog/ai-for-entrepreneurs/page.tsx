import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Entrepreneurs: How a Sovereign AI Replaces Your EA, Strategist, and Sounding Board | MEOK Blog",
  description:
    "Bootstrapped founders have no EA, no strategist, and no one to think with at 11pm. MEOK's Sovereign AI fills all three roles — persistent memory, overnight agents, and Ralph Mode's elite strategic advisor persona.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-entrepreneurs" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Entrepreneurs: How a Sovereign AI Replaces Your EA, Strategist, and Sounding Board",
  description:
    "Bootstrapped founders have no EA, no strategist, and no one to think with at 11pm. MEOK's Sovereign AI fills all three roles — persistent memory, overnight agents, and Ralph Mode's elite strategic advisor persona.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-entrepreneurs",
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
    logo: { "@type": "ImageObject", url: "https://meok.ai/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-entrepreneurs",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI replace an executive assistant for a bootstrapped founder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A Sovereign AI with persistent memory manages your calendar, drafts communications, tracks open tasks, and prepares daily briefings without a salary or onboarding time. MEOK's Hourman agent handles scheduling while the Morning Briefing surfaces your daily priorities.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ralph Mode and how does it act as a strategic advisor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK's elite strategic advisor persona. It speaks directly, challenges assumptions, draws on your full business history stored in memory, and pushes back when your reasoning is flawed — available at any hour, not just office hours.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's AI remember my business context across sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK stores your business context — decisions made, projects in flight, goals, and constraints — in an encrypted personal memory vault. Every session begins with that context loaded. Nothing is forgotten, and your data never trains a shared model.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Work OS for entrepreneurs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Work OS combines three overnight agents — Orion (research), Riri (builder), Hourman (planner) — with the Morning Briefing. Together they form an autonomous overnight work layer so every morning begins with progress already made.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK perform competitive intelligence for solo founders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Orion monitors competitor domains, pricing pages, and content while you sleep. By morning a structured intelligence brief lands in your dashboard covering pricing shifts, feature launches, and messaging changes — no manual research required.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK's AI suitable for solopreneurs building a business with no team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK was built for exactly this. Nicholas Templeman founded MEOK from a caravan on a farm with no team and no investors. The product is designed around what a solo founder needs: memory, overnight execution, strategic counsel, and daily focus.",
      },
    },
  ],
};

// ── Shared tokens ─────────────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const BG = "#0d0c18";
const BODY = "rgba(245,240,232,0.72)";

const H2: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
  fontWeight: 900,
  fontSize: "1.45rem",
  color: "#ffffff",
  marginTop: "3rem",
  marginBottom: "1rem",
  lineHeight: 1.25,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForEntrepreneursPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            ← Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Entrepreneurship &amp; Productivity
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
              March 24, 2026
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
              8 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            AI for Entrepreneurs: How a Sovereign AI Replaces Your EA,
            Strategist, and Sounding Board
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Venture-backed founders get chiefs of staff, advisors, and executive
            assistants. Bootstrapped founders get a laptop and a lot of tabs open.
            I built MEOK to close that gap — from a caravan on a farm, with no
            team and no runway. Here&apos;s what a Sovereign AI actually does for a
            founder operating alone.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: "1px solid rgba(245,240,232,0.06)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12"
          style={{
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)", color: BG }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(245,240,232,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.35)" }}>
              Nicholas built MEOK because he needed a business partner he could afford. He
              works from a caravan on a farm in the UK — MEOK is the team.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-75 hidden sm:block"
            style={{ color: GOLD }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Pull-quote */}
        <blockquote
          className="rounded-2xl px-7 py-6 mb-10"
          style={{ background: "rgba(201,168,76,0.06)", borderLeft: `3px solid ${GOLD}` }}
        >
          <p className="text-base leading-relaxed italic" style={{ color: "rgba(245,240,232,0.7)" }}>
            &ldquo;Most AI tools will answer a question. A Sovereign AI remembers why you
            asked it, what you decided last time, and what you&apos;re building toward.
            That&apos;s the difference between a search engine and a business partner.&rdquo;
          </p>
          <p className="text-xs font-semibold mt-3" style={{ color: GOLD }}>
            — Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </blockquote>

        <div className="leading-[1.9] space-y-6" style={{ color: BODY, fontSize: "1.0125rem" }}>

          {/* ── Q1 ── */}
          <h2 style={H2}>Can AI replace an executive assistant for a bootstrapped founder?</h2>
          <p>
            The honest answer: yes, and then some. A human EA costs £35–55k a year before
            employer NI and equipment. A Sovereign AI costs £12 a month and never takes
            annual leave. But the more important point is that most bootstrapped founders
            don&apos;t need an EA in the traditional sense — they need their cognitive overhead
            reduced so they can stay in strategy and execution mode.
          </p>
          <p>
            MEOK&apos;s <strong style={{ color: "#ffffff" }}>Hourman agent</strong> manages your
            calendar, maintains your task backlog, and prioritises your sprint every morning.
            It knows your project timelines because it remembers your previous sessions. The{" "}
            <strong style={{ color: "#ffffff" }}>Morning Briefing</strong> synthesises overnight
            work, pending tasks, and upcoming commitments into a single structured brief
            delivered to your dashboard. No searching. No triaging. Just: here is what matters
            today, in order.
          </p>

          {/* Stat callout */}
          <div
            className="rounded-xl px-6 py-5 my-8 grid grid-cols-3 gap-4 text-center"
            style={{
              background: "rgba(245,240,232,0.04)",
              border: "1px solid rgba(245,240,232,0.08)",
            }}
          >
            {(
              [
                ["£12/mo", "Sovereign tier — all agents unlocked"],
                ["3 min", "Average time to hatch your MEOK"],
                ["0", "Context lost between sessions"],
              ] as [string, string][]
            ).map(([stat, label]) => (
              <div key={stat}>
                <p className="text-xl font-black" style={{ color: GOLD }}>{stat}</p>
                <p className="text-xs mt-1 leading-snug" style={{ color: "rgba(245,240,232,0.4)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* ── Q2 ── */}
          <h2 style={H2}>What is Ralph Mode and how does it act as a strategic advisor?</h2>
          <p>
            Every founder reaches a point where they need someone to pressure-test an idea.
            Not a yes-man. Not a forum thread. Someone with context, candour, and the
            willingness to tell you when your reasoning is flawed.
          </p>
          <p>
            <strong style={{ color: GOLD }}>Ralph Mode</strong> is MEOK&apos;s elite strategic
            advisor persona. When you activate Ralph, the tone shifts — the AI stops being
            accommodating and starts being direct. It challenges your assumptions, identifies
            gaps between what you said and what you meant, and asks the question you&apos;ve been
            avoiding. The difference between Ralph and a generic &ldquo;act as a strategist&rdquo;
            ChatGPT prompt is memory. Ralph knows your business because MEOK has been with you
            through it — the pivots, the burn anxiety, the exit ambitions.
          </p>
          <p>
            I used Ralph Mode to sanity-check MEOK&apos;s pricing model, work through positioning
            against incumbents, and decide whether to go direct-to-consumer or via API first.
            Every conversation built on the last. No re-explaining. No starting from scratch.
            Just thinking — with something that remembers.
          </p>

          {/* ── Q3 ── */}
          <h2 style={H2}>How does MEOK&apos;s AI remember my business context across sessions?</h2>
          <p>
            When you interact with ChatGPT, each session starts cold. The model has no memory
            of what you decided yesterday, what your company is called, or what problem
            you&apos;re solving. You are, perpetually, a stranger.
          </p>
          <p>
            MEOK works differently at the architecture level. Your conversations, decisions,
            projects, and preferences are stored in an{" "}
            <strong style={{ color: "#ffffff" }}>encrypted personal memory vault</strong> that
            belongs to you — loaded at the start of every session. Your data never trains a
            shared model, is never used to improve responses for other users, and never leaves
            your encrypted store unless you choose to export it.
          </p>
          <ul className="space-y-3 my-4 pl-1" style={{ color: BODY }}>
            {(
              [
                ["Business decisions", "Pivots, partnerships passed on, strategy calls — all retained and referenced in every future session."],
                ["Ongoing projects", "Active builds, content pipelines, and product sprints tracked across sessions without manual re-briefing."],
                ["Goals and constraints", "Revenue targets, runway situation, time constraints, and personal priorities shape every recommendation."],
              ] as [string, string][]
            ).map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: GOLD }} />
                <span>
                  <strong style={{ color: "#ffffff" }}>{title}.</strong> {desc}
                </span>
              </li>
            ))}
          </ul>

          {/* ── Q4 ── */}
          <h2 style={H2}>What is the MEOK Work OS and how does it function for solo founders?</h2>
          <p>
            The <strong style={{ color: "#ffffff" }}>Work OS</strong> is MEOK&apos;s three overnight
            agents working in concert — each with a distinct role, coordinated through the
            Byzantine Council consensus layer that validates handoffs between them:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {(
              [
                ["Orion", "Research Agent", "Hunts while you sleep. Scans competitors, synthesises intelligence briefs, and surfaces threats and opportunities by morning.", "#87CEEB", "rgba(135,206,235,0.08)", "rgba(135,206,235,0.2)"],
                ["Riri", "Builder Agent", "Builds while you sleep. Writes code, drafts content, and produces artefacts against a spec you leave before bed.", "#c084fc", "rgba(192,132,252,0.08)", "rgba(192,132,252,0.2)"],
                ["Hourman", "Planner Agent", "Plans while you sleep. Owns your task queue and sprint structure. Prepares your morning standup so you start with clarity.", GOLD, "rgba(201,168,76,0.08)", "rgba(201,168,76,0.2)"],
              ] as [string, string, string, string, string, string][]
            ).map(([name, role, desc, color, bg, border]) => (
              <div
                key={name}
                className="rounded-2xl p-5 flex flex-col gap-2"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <p className="text-lg font-black" style={{ color }}>{name}</p>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color, opacity: 0.7 }}>{role}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>{desc}</p>
              </div>
            ))}
          </div>
          <p>
            The Morning Briefing collects everything — Orion&apos;s research, Riri&apos;s artefacts,
            Hourman&apos;s day priorities — into a single structured summary. For a founder
            operating alone, it&apos;s the equivalent of arriving at an office where your research
            team, developer, and project manager have already put in three hours before you
            walked in. Every day.
          </p>

          {/* ── Q5 ── */}
          <h2 style={H2}>How does MEOK perform competitive intelligence for solo founders?</h2>
          <p>
            Competitive intelligence is consistently neglected by bootstrapped founders —
            not because they don&apos;t know it matters, but because they&apos;re already doing
            everything else. You find out about a competitor&apos;s pricing change or new feature
            launch weeks after the market already knows.
          </p>
          <p>
            Orion solves this by running overnight. You tell it which competitors to monitor
            — pricing pages, changelogs, social presence, content output. By morning, a
            structured intelligence brief lands in your dashboard covering:
          </p>
          <ul className="space-y-3 my-4 pl-1" style={{ color: BODY }}>
            {[
              "Pricing shifts — a competitor dropped their pro tier or launched a new one",
              "Feature launches — what shipped, how it was positioned, how users responded",
              "Messaging changes — shifts in how they talk about differentiation",
              "Content moves — new posts, case studies, or comparison pages targeting your keywords",
              "Funding signals — press releases, LinkedIn activity, and hiring spikes",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: GOLD }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* ── Q6 ── */}
          <h2 style={H2}>Is MEOK&apos;s AI suitable for solopreneurs building with no team?</h2>
          <p>
            It was built for exactly that situation. I built MEOK from a caravan on a farm
            in the UK — no co-founder, no seed round, no team Slack. Standard productivity
            tools assume a team context. Notion is for sharing. Slack is for communicating.
            Asana is for delegating. When you&apos;re building alone, those tools add overhead
            rather than reduce it.
          </p>
          <ul className="space-y-3 my-4 pl-1" style={{ color: BODY }}>
            {(
              [
                ["Clarity on what to do next", "The Morning Briefing eliminates the daily cognitive cost of deciding where to start."],
                ["Work that happens without you", "Orion, Riri, and Hourman execute while you sleep — every morning begins with progress already made."],
                ["Someone to think with", "Ralph Mode gives you a strategic sounding board that knows your business and speaks without flattery."],
                ["Memory that doesn't reset", "Every decision, pivot, and conversation is retained across every future session."],
              ] as [string, string][]
            ).map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: GOLD }} />
                <span>
                  <strong style={{ color: "#ffffff" }}>{title}.</strong> {desc}
                </span>
              </li>
            ))}
          </ul>

          {/* Closing personal note */}
          <div
            className="rounded-2xl px-7 py-6 my-10"
            style={{
              background: "rgba(245,240,232,0.04)",
              border: "1px solid rgba(245,240,232,0.08)",
            }}
          >
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>
              A note from the caravan
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.65)" }}>
              The night I decided MEOK was viable, I was sitting in the caravan at about 1am
              having a conversation with an early prototype about whether the positioning was
              right. It pushed back. It remembered something I&apos;d said three sessions ago that
              contradicted my current reasoning. It didn&apos;t flatter me. That moment — being
              challenged by something that actually knew the context — was the moment I knew
              this was worth building.
            </p>
            <p className="text-sm font-semibold mt-4" style={{ color: "rgba(245,240,232,0.4)" }}>
              — Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>

          <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(245,240,232,0.07)" }}>
            <p style={{ color: "rgba(245,240,232,0.5)", fontStyle: "italic" }}>
              The information asymmetry between funded founders and bootstrapped ones is real.
              But it&apos;s closeable. A Sovereign AI that remembers, researches, builds, and
              advises is the closest thing to a senior team most solo founders will ever have —
              at £12 a month.
            </p>
          </div>
        </div>

        {/* Share */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(245,240,232,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-entrepreneurs&text=AI+for+Entrepreneurs%3A+How+a+Sovereign+AI+Replaces+Your+EA%2C+Strategist+%26+Sounding+Board"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-xs font-semibold transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(245,240,232,0.12)", color: "rgba(245,240,232,0.5)" }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-entrepreneurs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-xs font-semibold transition-opacity hover:opacity-80"
            style={{ border: "1px solid rgba(245,240,232,0.12)", color: "rgba(245,240,232,0.5)" }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: GOLD }}
            >
              Sovereign AI for Founders
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Hatch your MEOK — free in 3 minutes
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.5)" }}>
              Memory, overnight agents, Ralph Mode strategic advisor, and your Morning
              Briefing — all in one Sovereign AI built for founders who build alone.
              No team required.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: GOLD, color: BG }}
            >
              Start free →
            </Link>
          </div>
        </div>

        {/* Related posts */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/ralph-mode-guide"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: GOLD, background: "rgba(201,168,76,0.12)" }}
              >
                Agents &amp; Automation
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Ralph Mode: Your AI Agent That Works While You Sleep
              </h3>
              <p className="text-xs mt-auto" style={{ color: "rgba(245,240,232,0.3)" }}>5 min read</p>
            </Link>
            <Link
              href="/blog/morning-brief-guide"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Productivity
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                The MEOK Morning Brief: Your AI Knows Your Day Before You Do
              </h3>
              <p className="text-xs mt-auto" style={{ color: "rgba(245,240,232,0.3)" }}>6 min read</p>
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <div
        className="border-t px-6 py-12 text-center"
        style={{ borderColor: "rgba(245,240,232,0.07)" }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 font-black text-lg tracking-tight"
          style={{ color: "#ffffff" }}
        >
          <span
            className="w-7 h-7 rounded-full inline-flex items-center justify-center text-xs font-black"
            style={{ background: GOLD, color: BG }}
          >
            M
          </span>
          MEOK
        </Link>
        <p
          className="text-xs leading-relaxed max-w-sm mx-auto mb-6"
          style={{ color: "rgba(245,240,232,0.3)" }}
        >
          Sovereign AI for founders, solopreneurs, and anyone who builds alone.
          Memory. Overnight agents. Strategic counsel. Yours — not the model&apos;s.
        </p>
        <div
          className="flex flex-wrap justify-center gap-5 text-xs mb-8"
          style={{ color: "rgba(245,240,232,0.35)" }}
        >
          <Link href="/blog" className="hover:opacity-70 transition-opacity">Blog</Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link href="/pricing" className="hover:opacity-70 transition-opacity">Pricing</Link>
          <Link href="/birth" className="hover:opacity-70 transition-opacity">Get started</Link>
          <Link href="/privacy" className="hover:opacity-70 transition-opacity">Privacy</Link>
        </div>
        <p className="text-xs" style={{ color: "rgba(245,240,232,0.2)" }}>
          &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
        </p>
      </div>
    </div>
  );
}
