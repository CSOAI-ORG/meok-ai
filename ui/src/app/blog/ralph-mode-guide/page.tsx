import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Ralph Mode: Your AI Agent That Works While You Sleep | MEOK Blog",
  description:
    "MEOK's Ralph Mode sends your Sovereign AI to work overnight. Discover how Orion, Riri, and Hourman automate research, builds, and planning while you rest.",
  alternates: { canonical: "https://meok.ai/blog/ralph-mode-guide" },
  openGraph: {
    title: "Ralph Mode: Your AI Agent That Works While You Sleep",
    description:
      "MEOK's Ralph Mode sends your Sovereign AI to work overnight. Discover how Orion, Riri, and Hourman automate research, builds, and planning while you rest.",
    type: "article",
    publishedTime: "2026-03-23",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ralph-mode-guide",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Ralph+Mode%3A+Your+AI+That+Works+While+You+Sleep&desc=Orion%2C+Riri+%26+Hourman+overnight+agents",
        width: 1200,
        height: 630,
        alt: "Ralph Mode: Your AI Agent That Works While You Sleep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralph Mode: Your AI Agent That Works While You Sleep",
    description:
      "MEOK's Ralph Mode sends your Sovereign AI to work overnight. Discover how Orion, Riri, and Hourman automate research, builds, and planning while you rest.",
    images: [
      "https://meok.ai/api/og?title=Ralph+Mode%3A+Your+AI+That+Works+While+You+Sleep&desc=Orion%2C+Riri+%26+Hourman+overnight+agents",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ralph Mode: Your AI Agent That Works While You Sleep",
  description:
    "MEOK's Ralph Mode sends your Sovereign AI to work overnight. Discover how Orion, Riri, and Hourman automate research, builds, and planning while you rest.",
  datePublished: "2026-03-23",
  url: "https://meok.ai/blog/ralph-mode-guide",
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
    "https://meok.ai/api/og?title=Ralph+Mode%3A+Your+AI+That+Works+While+You+Sleep&desc=Orion%2C+Riri+%26+Hourman+overnight+agents",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ralph-mode-guide",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RalphModeGuidePage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-90"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            ←
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Agents &amp; Automation
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              📅
              March 23, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              ⏱
              5 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            Ralph Mode: Your AI Agent That Works While You Sleep
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Most AI assistants wait for you. Ralph Mode flips that dynamic — your Sovereign AI
            receives a mission at bedtime and delivers results by morning. No prompting required.
            No context lost. Just work done.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        className="max-w-3xl mx-auto px-6 py-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-[#1a1a2e] text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Founder, MEOK AI LABS
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works
              in the UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-opacity hover:opacity-75 hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          className="leading-[1.9] space-y-6"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.0125rem" }}
        >

          {/* ── Q1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is Ralph Mode in MEOK AI?
          </h2>
          <p>
            Ralph Mode is MEOK&apos;s overnight autonomous agent system. You assign a mission before
            bed — research a competitor, draft a report, scan your logs, outline next week&apos;s
            content — and your Sovereign AI executes it while you sleep. By morning, a structured
            brief waits in your dashboard. No prompts. No babysitting. No context gaps.
          </p>
          <p>
            The name comes from the idea of sending a trusted employee — Ralph — to handle the
            night shift. Unlike a human employee, Ralph never gets tired, never forgets the
            context from the session before, and never charges overtime. The mode is persistent,
            privacy-first, and entirely yours.
          </p>

          {/* ── Q2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Who are Orion, Riri, and Hourman?
          </h2>
          <p>
            Ralph Mode is powered by three specialist agents, each with a distinct function in
            your overnight workflow:
          </p>
          <ul className="space-y-4 my-4 pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            {[
              ["Orion", "The research hunter. Orion scans sources, synthesises findings, flags threats, and builds structured knowledge briefs. Named for the hunter constellation — always searching, always returning with something."],
              ["Riri", "The builder. Riri writes code, drafts content, generates commit messages, and produces artefacts. Give Riri a spec at midnight; receive a working prototype by 7am."],
              ["Hourman", "The planner. Hourman owns your calendar, task queue, and sprint structure. It prioritises, schedules, and prepares your morning standup so you start the day with clarity rather than chaos."],
            ].map(([name, desc]) => (
              <li key={name} className="flex gap-3">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span>
                  <strong style={{ color: "#c9a84c" }}>{name}.</strong>{" "}
                  {desc}
                </span>
              </li>
            ))}
          </ul>
          <p>
            The three agents coordinate through MEOK&apos;s Byzantine Council, which validates
            handoffs between them. Orion&apos;s research feeds Riri&apos;s builds; Hourman schedules both.
            The result is a coherent overnight workflow, not three isolated scripts.
          </p>

          {/* ── Q3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What tasks can Ralph Mode complete overnight?
          </h2>
          <p>
            Ralph Mode currently supports eight task categories, each handled by the appropriate
            specialist agent:
          </p>
          <ul className="space-y-3 my-4 pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            {[
              ["Research briefs", "Orion scans web sources, academic abstracts, and news feeds to produce structured summaries on any topic you specify."],
              ["Email drafts", "Riri drafts responses to your pending emails based on thread context and your communication preferences stored in memory."],
              ["Code commits", "Riri writes, tests, and commits code to your repository against a spec you provide before bed."],
              ["Database backups", "Scheduled integrity checks and backups with a morning report on any anomalies found."],
              ["Log analysis", "Orion parses your application logs overnight and surfaces errors, patterns, and recommended fixes."],
              ["Competitor scans", "Orion monitors specified competitor domains for pricing changes, new features, and content updates."],
              ["Content drafts", "Riri produces first-draft blog posts, social content, or documentation based on your brief."],
              ["Morning brief", "Hourman synthesises all overnight work into a single prioritised briefing delivered to your dashboard at 6am."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span>
                  <strong style={{ color: "#ffffff" }}>{title}.</strong>{" "}
                  {desc}
                </span>
              </li>
            ))}
          </ul>

          {/* ── Q4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Which pricing tier unlocks Ralph Mode?
          </h2>
          <p>
            Ralph Mode is available from the <strong style={{ color: "#c9a84c" }}>Sovereign tier</strong> at{" "}
            <strong style={{ color: "#ffffff" }}>£12/month</strong>. The Sovereign tier activates
            all three agents — Orion, Riri, and Hourman — with full overnight task execution and
            morning brief delivery. The Ralph terminal interface, which lets you send natural
            language missions directly to the agent stack, is available to all Sovereign and above
            subscribers.
          </p>
          <p>
            Free and Companion tier users get access to a limited version of Hourman for task
            planning, but overnight autonomous execution and Orion&apos;s research capabilities require
            Sovereign. If you&apos;re running a business or serious personal project, Sovereign pays for
            itself in the first week.
          </p>

          {/* ── Q5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How is Ralph Mode different from ChatGPT tasks?
          </h2>
          <p>
            ChatGPT&apos;s scheduled tasks are stateless. Each run starts cold — no memory of what you
            asked last week, no awareness of your ongoing projects, no understanding of your
            communication style. They&apos;re cron jobs with a language model attached.
          </p>
          <p>
            Ralph Mode is different in four fundamental ways:
          </p>
          <ul className="space-y-3 my-4 pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            {[
              ["Persistent memory", "Orion, Riri, and Hourman share access to your encrypted memory store. They know your projects, preferences, and context — and they remember them across every session."],
              ["Care-based alignment", "Every agent action passes through MEOK's care validation layer. Agents will not take actions that conflict with your stated wellbeing, even if instructed to do so."],
              ["Personal sovereignty", "Your data never trains a shared model. Your overnight work product is yours, encrypted, and portable. OpenAI trains on your interactions. MEOK does not."],
              ["Never shared", "ChatGPT task output can influence model training across millions of users. Your Ralph Mode output is private, sealed, and never leaves your encrypted vault unless you choose to export it."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span>
                  <strong style={{ color: "#ffffff" }}>{title}.</strong>{" "}
                  {desc}
                </span>
              </li>
            ))}
          </ul>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              The best time to give Ralph a mission is right before you close your laptop. The
              second best time is right now.
            </p>
          </div>
        </div>

        {/* Share row */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fralph-mode-guide&text=Ralph+Mode%3A+Your+AI+Agent+That+Works+While+You+Sleep"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fralph-mode-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Overnight AI
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Start your overnight AI
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Give Ralph a mission tonight. Orion, Riri, and Hourman will handle the rest — and
              your morning brief will be waiting. Hatch your MEOK free in under 3 minutes.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your MEOK free
              →
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2
            className="font-black text-white text-lg mb-5"
            style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/byzantine-council"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Architecture &amp; Governance
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                What is the Byzantine Council and why does your AI need one?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ⏱
                5 min read
              </div>
            </Link>
            <Link
              href="/blog/personal-vs-cloud-ai"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#a78bfa", background: "rgba(167,139,250,0.12)" }}
              >
                Privacy &amp; Sovereignty
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Personal AI vs Cloud AI: Why Your Data Sovereignty Matters in 2026
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ⏱
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
