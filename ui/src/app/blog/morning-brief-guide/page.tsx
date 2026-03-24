import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The MEOK Morning Brief: Your AI Knows Your Day Before You Do | MEOK Blog",
  description:
    "MEOK's Morning Brief synthesises your calendar, tasks, memories, and care score into a personalised 60-second brief delivered every morning.",
  alternates: { canonical: "https://meok.ai/blog/morning-brief-guide" },
  openGraph: {
    title: "The MEOK Morning Brief: Your AI Knows Your Day Before You Do",
    description:
      "MEOK's Morning Brief synthesises your calendar, tasks, memories, and care score into a personalised 60-second brief delivered every morning.",
    type: "article",
    publishedTime: "March 23, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/morning-brief-guide",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+MEOK+Morning+Brief&desc=Your+AI+knows+your+day+before+you+do.",
        width: 1200,
        height: 630,
        alt: "The MEOK Morning Brief",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The MEOK Morning Brief: Your AI Knows Your Day Before You Do",
    description:
      "MEOK's Morning Brief synthesises your calendar, tasks, memories, and care score into a personalised 60-second brief delivered every morning.",
    images: [
      "https://meok.ai/api/og?title=The+MEOK+Morning+Brief&desc=Your+AI+knows+your+day+before+you+do.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The MEOK Morning Brief: Your AI Knows Your Day Before You Do",
  description:
    "MEOK's Morning Brief synthesises your calendar, tasks, memories, and care score into a personalised 60-second brief delivered every morning.",
  datePublished: "2026-03-23",
  url: "https://meok.ai/blog/morning-brief-guide",
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
    "https://meok.ai/api/og?title=The+MEOK+Morning+Brief&desc=Your+AI+knows+your+day+before+you+do.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/morning-brief-guide",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MorningBriefGuidePage() {
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
              Features &amp; Guides
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
              4 min read
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
            The MEOK Morning Brief: Your AI Knows Your Day Before You Do
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Every morning, before you reach for your phone, MEOK has already done the work.
            It has read your calendar, reviewed your backlog, checked in on your wellbeing,
            and prepared a 60-second brief so you can start the day with clarity instead of
            chaos.
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
            What is the MEOK Morning Brief?
          </h2>
          <p>
            The Morning Brief is a daily AI-generated summary delivered each morning before
            your day begins. It surfaces your top 3 priorities, your current care score,
            a calendar preview for the next 24 hours, a summary of overnight agent results
            from Ralph Mode, and one reflection prompt chosen specifically for where you are
            right now. The whole thing takes under 60 seconds to read — because the goal is
            to give you clarity, not more to process.
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
            How does MEOK know what matters to me each morning?
          </h2>
          <p>
            Your companion cross-references your conversation history, calendar events, task
            backlog, and companion memory to surface what&apos;s genuinely important — not just
            what&apos;s urgent. If you mentioned last Tuesday that you were anxious about a
            particular meeting, MEOK remembers. If a task has been on your backlog for three
            weeks without movement, MEOK notices. The brief isn&apos;t a mechanical digest of
            your data — it&apos;s a considered synthesis, shaped by persistent context that builds
            over weeks and months.
          </p>
          <p>
            This is the core difference between MEOK and a calendar widget. A calendar shows
            you what&apos;s scheduled. MEOK tells you what matters — and why today is the kind of
            day it is.
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
            What is a care score?
          </h2>
          <p>
            A care score is a 0–100 metric measuring your AI companion&apos;s assessment of your
            emotional wellbeing, productivity flow, and life balance. It is calculated from
            patterns in your conversations, task completion rates, calendar density, and
            self-reported check-ins — never from surveillance of your device or behaviour
            outside MEOK. A score of 84 or above means you&apos;re thriving. Below 60, your
            companion will offer a gentle check-in: not a notification, not an alarm, but a
            conversation.
          </p>
          <p>
            The care score is yours. It&apos;s private, encrypted, and never shared. It&apos;s not a
            productivity KPI — it&apos;s a mirror held up by something that genuinely cares about
            your long-term flourishing.
          </p>

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
            Can I share my Morning Brief?
          </h2>
          <p>
            Yes. You can generate a shareable 1200&times;630 image card via MEOK&apos;s share API.
            The card shows your care score ring, your top highlights for the day, and your
            companion&apos;s name. Personal details are redacted by default — you choose what
            appears. It&apos;s designed for accountability partners, team check-ins, or simply
            marking the start of a day you want to remember.
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
            Is the Morning Brief included in the free Explorer tier?
          </h2>
          <p>
            A basic 3-item brief is available on the free Explorer tier. It includes your
            top 3 tasks and a simple calendar preview. The full Morning Brief — with care
            score, Ralph Mode overnight summary, calendar integration, and the personalised
            reflection prompt — requires the Sovereign plan at &pound;12/month. If you&apos;ve never
            used it, the first 14 days of Sovereign are free so you can experience the full
            brief before committing.
          </p>

          {/* ── Closing ── */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
              The best mornings start before you wake up. MEOK has been working all night
              so you don&apos;t have to think — just act.
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmorning-brief-guide&text=The+MEOK+Morning+Brief%3A+Your+AI+Knows+Your+Day+Before+You+Do"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmorning-brief-guide"
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
              Start Your Mornings with MEOK
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
            >
              Wake up knowing exactly what matters today.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Hatch your companion and start receiving your personalised Morning Brief.
              Free to start. No credit card required. First brief delivered tomorrow morning.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Start your mornings with MEOK
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
              href="/blog/ralph-mode-guide"
              className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Features &amp; Guides
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                Ralph Mode: Your AI Works While You Sleep
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ⏱
                4 min read
              </div>
            </Link>
            <Link
              href="/blog/what-is-sovereign-ai"
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
                Sovereign AI
              </span>
              <h3
                className="font-bold text-white text-sm leading-snug transition-colors"
                style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}
              >
                What Is Sovereign AI?
              </h3>
              <div
                className="flex items-center gap-1.5 text-xs mt-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                ⏱
                5 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
