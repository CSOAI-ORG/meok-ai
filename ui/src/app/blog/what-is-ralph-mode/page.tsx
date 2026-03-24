import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "What Is Ralph Mode? MEOK's Deep Work Protocol Explained | MEOK Blog",
  description:
    "Ralph Mode is MEOK's deep work protocol — a focused, distraction-free session powered by the Orion agent. Learn how it works, why it's named after Ralph Waldo Emerson, and how it helps you protect your most important thinking time.",
  alternates: {
    canonical: "https://meok.ai/blog/what-is-ralph-mode",
  },
  openGraph: {
    title: "What Is Ralph Mode? MEOK's Deep Work Protocol Explained",
    description:
      "Ralph Mode activates Orion in focused research mode, blocks distractions, and tracks your flow state — not just your time. Available on Sovereign (£12/mo).",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-ralph-mode",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+Is+Ralph+Mode%3F&desc=MEOK%27s+Deep+Work+Protocol+Explained",
        width: 1200,
        height: 630,
        alt: "What Is Ralph Mode? MEOK's Deep Work Protocol Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Ralph Mode? MEOK's Deep Work Protocol Explained",
    description:
      "Ralph Mode is MEOK's deep work protocol — named after Ralph Waldo Emerson. One task, no distractions, Orion agent in focused research mode. Sovereign tier (£12/mo).",
    images: [
      "https://meok.ai/api/og?title=What+Is+Ralph+Mode%3F&desc=MEOK%27s+Deep+Work+Protocol+Explained",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is Ralph Mode? MEOK's Deep Work Protocol Explained",
  description:
    "Ralph Mode is MEOK's deep work protocol — a focused, distraction-free session powered by the Orion agent in focused research mode. Named after Ralph Waldo Emerson, it tracks completion rate, flow state duration, and task depth score.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/what-is-ralph-mode",
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
    "https://meok.ai/api/og?title=What+Is+Ralph+Mode%3F&desc=MEOK%27s+Deep+Work+Protocol+Explained",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/what-is-ralph-mode",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Ralph Mode in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK's deep work protocol. It locks you into one task at a time, blocks all notifications and context-switching, activates Orion in focused research mode, and tracks your session with metrics including completion rate, flow state duration, and task depth score. Sessions run in 25-minute, 50-minute, or 90-minute blocks aligned to ultradian rhythm cycles.",
      },
    },
    {
      "@type": "Question",
      name: "Why is it called Ralph Mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is named after Ralph Waldo Emerson, the American philosopher who wrote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.' The mode embodies Emerson's philosophy of sovereign, self-directed focus — working on what matters most, on your own terms, without distraction or direction from others.",
      },
    },
    {
      "@type": "Question",
      name: "What tier do I need for Ralph Mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is available on the Sovereign tier at £12 per month. It is not available on the free Explorer tier (50 messages per day) or the BYOK tier (£5/mo). The Family plan (£29/mo) includes Ralph Mode for all members. Ralph Mode is gated at Sovereign because it requires the Orion agent in focused mode, persistent session tracking, and the full deep work infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How is Ralph Mode different from a Pomodoro timer app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pomodoro timers count time. Ralph Mode tracks your actual work quality. During a session, MEOK measures completion rate, flow state duration, and task depth score — not just whether a 25-minute block elapsed. Orion supports your research in real time with full memory context, so you never leave the session to look something up. Your Ralph Mode history is stored in /dashboard/evolution for long-term pattern review.",
      },
    },
    {
      "@type": "Question",
      name: "Can Ralph Mode help with ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ralph Mode combines the structure that helps many people with ADHD — defined session lengths, a single task, no notifications — with MEOK's persistent memory, so context is never lost between sessions. You can pick up exactly where you left off. Many MEOK users with ADHD report that knowing their AI remembers their task context removes one of the biggest sources of re-entry anxiety.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhatIsRalphModePage() {
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
              }}
            >
              Deep Work &amp; Focus
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              March 24, 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              7 min read
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.5vw, 2.85rem)",
              color: "#f5f0e8",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            What Is Ralph Mode? MEOK&apos;s Deep Work Protocol Explained
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "640px",
            }}
          >
            Every time you switch tasks, research shows it takes an average of 23 minutes to fully
            recover your focus. Multiply that across a typical workday and you lose hours —
            not minutes — to context switching. Ralph Mode exists to stop that from happening.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
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
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#0d0c18",
              fontSize: "0.875rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.875rem", margin: 0 }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
                margin: "0.125rem 0 0.375rem",
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
        </div>

        {/* Body */}
        <div style={{ color: "rgba(245,240,232,0.72)", fontSize: "1.0125rem", lineHeight: 1.9 }}>

          {/* ── Section 1: What is Ralph Mode ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is Ralph Mode?
          </h2>
          <p style={{ margin: "0 0 1.25rem" }}>
            Ralph Mode is MEOK&apos;s deep work protocol. When you activate it, everything changes:
            notifications stop, context switching is blocked, and MEOK locks you into a single
            task until the session ends. Your Orion agent shifts into focused research mode —
            ready to surface exactly what you need without breaking your concentration.
          </p>
          <p style={{ margin: "0 0 1.25rem" }}>
            It is not a timer. It is not a to-do list. Ralph Mode is an intentional state — a
            structured container for the kind of thinking that actually moves work forward.
            Sessions run in three lengths aligned to cognitive science: 25 minutes (Pomodoro),
            50 minutes, or 90 minutes (ultradian rhythm). You choose based on the depth of work
            you need to do.
          </p>

          {/* ── Section 2: Why is it called Ralph Mode ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Why is it called Ralph Mode?
          </h2>
          <p style={{ margin: "0 0 1.25rem" }}>
            The name comes from Ralph Waldo Emerson — the 19th-century American philosopher who
            wrote one of the most important sentences in the history of self-directed work:
          </p>

          <blockquote
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.5rem",
              margin: "1.5rem 0",
              fontStyle: "italic",
              color: "rgba(245,240,232,0.65)",
            }}
          >
            &ldquo;Do not go where the path may lead, go instead where there is no path and leave a
            trail.&rdquo;
            <cite
              style={{
                display: "block",
                marginTop: "0.5rem",
                fontSize: "0.875rem",
                fontStyle: "normal",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              — Ralph Waldo Emerson
            </cite>
          </blockquote>

          <p style={{ margin: "0 0 1.25rem" }}>
            That quote is the philosophical foundation of Ralph Mode. Most productivity tools push
            you down well-worn paths — the same templates, the same workflows, the same
            interruption-heavy default state. MEOK&apos;s Ralph Mode asks a different question: what
            would you accomplish if no one could interrupt you, your AI remembered everything you
            needed, and the only measure of success was the depth of the work you produced?
          </p>
          <p style={{ margin: "0 0 1.25rem" }}>
            Sovereign focus. Self-directed thinking. Your own trail. That is the spirit behind the
            name — and the mode.
          </p>

          {/* ── Section 3: How does Ralph Mode work ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does Ralph Mode work?
          </h2>
          <p style={{ margin: "0 0 1rem" }}>
            Activating Ralph Mode takes three steps:
          </p>

          <ol style={{ paddingLeft: "1.5rem", margin: "0 0 1.25rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {[
              ["Name your task", "You tell MEOK what you are working on. One task, described in plain language. This becomes the session anchor — Orion uses it to filter everything it surfaces during the session so only relevant context reaches you."],
              ["Choose your session length", "25 minutes (Pomodoro technique), 50 minutes (extended focus block), or 90 minutes (full ultradian rhythm cycle). Longer sessions unlock higher task depth scores but require sustained concentration."],
              ["Enter the session", "All notifications are suspended. Context switching is blocked. Orion activates in focused research mode — silently surfacing relevant documents, memory fragments, and research findings as you work. You are not interrupted. When you need something, it is already there."],
            ].map(([title, desc], i) => (
              <li key={title} style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "1.75rem",
                    height: "1.75rem",
                    borderRadius: "9999px",
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#c9a84c",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: "0.125rem",
                  }}
                >
                  {i + 1}
                </span>
                <span>
                  <strong style={{ color: "#f5f0e8" }}>{title}.</strong>{" "}
                  {desc}
                </span>
              </li>
            ))}
          </ol>

          <p style={{ margin: "0 0 1.25rem" }}>
            At the end of the session, MEOK logs the completion, scores the work, and stores the
            results in your evolution history at{" "}
            <span style={{ color: "#c9a84c", fontFamily: "monospace" }}>/dashboard/evolution</span>.
            Over time, patterns emerge — your best session lengths, your most productive hours,
            the task types where your depth score is highest.
          </p>

          {/* ── Section 4: What makes Ralph Mode different from Pomodoro apps ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What makes Ralph Mode different from Pomodoro apps?
          </h2>
          <p style={{ margin: "0 0 1.25rem" }}>
            Pomodoro timers count down 25 minutes and ring a bell. They measure time. They have
            no idea whether you wrote three brilliant paragraphs or spent the session staring at
            a blank document. Ralph Mode is different in four meaningful ways:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "0 0 1.25rem" }}>
            {[
              ["Memory-aware", "Orion knows your project history, your past sessions, your open questions, and your stated goals. A Pomodoro app knows nothing. That difference is the gap between a timer and an intelligent working environment."],
              ["AI-guided, not AI-interrupted", "Orion surfaces context in the background — it does not interrupt you to ask if you want to see it. Resources appear in your session sidebar when they become relevant, triggered by what you are actively working on."],
              ["Tracks flow, not just time", "Ralph Mode records three metrics per session: completion rate (did you finish what you set out to do?), flow state duration (how long were you in unbroken concentration?), and task depth score (a composite measure of focus quality based on session behaviour)."],
              ["Builds a record", "Every Ralph Mode session adds to your evolution history. After 30 sessions, MEOK can tell you your average flow state duration, your best-performing session lengths, and which types of work produce your highest depth scores. Pomodoro apps give you a streak counter. Ralph Mode gives you self-knowledge."],
            ].map(([title, desc]) => (
              <div
                key={title}
                style={{
                  padding: "1.25rem",
                  borderRadius: "0.875rem",
                  background: "#1a1830",
                  border: "1px solid rgba(245,240,232,0.07)",
                }}
              >
                <p style={{ margin: "0 0 0.375rem", fontWeight: 700, color: "#c9a84c", fontSize: "0.9375rem" }}>
                  {title}
                </p>
                <p style={{ margin: 0, color: "rgba(245,240,232,0.65)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 5: What tier do I need ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What tier do I need for Ralph Mode?
          </h2>
          <p style={{ margin: "0 0 1.25rem" }}>
            Ralph Mode is available on the{" "}
            <strong style={{ color: "#c9a84c" }}>Sovereign tier</strong> at{" "}
            <strong style={{ color: "#f5f0e8" }}>£12 per month</strong>. It is not available on
            the free Explorer tier (50 messages per day) or the BYOK tier (£5/mo, which supports
            bring-your-own-key API access without the full agent stack).
          </p>

          <div
            style={{
              padding: "1.5rem",
              borderRadius: "1rem",
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.18)",
              margin: "0 0 1.25rem",
            }}
          >
            <p style={{ margin: "0 0 0.75rem", fontWeight: 700, color: "#f5f0e8", fontSize: "0.9375rem" }}>
              MEOK tiers at a glance:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                ["Explorer", "Free", "50 messages/day — no Ralph Mode"],
                ["BYOK", "£5/mo", "Bring your own API key — no Ralph Mode"],
                ["Sovereign", "£12/mo", "Full Ralph Mode + all agents"],
                ["Family", "£29/mo", "Ralph Mode for up to 5 companions"],
              ].map(([tier, price, note]) => (
                <div
                  key={tier}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.875rem",
                  }}
                >
                  <span style={{ color: "#c9a84c", fontWeight: 700, minWidth: "5rem" }}>{tier}</span>
                  <span style={{ color: "rgba(245,240,232,0.5)", minWidth: "4rem" }}>{price}</span>
                  <span style={{ color: "rgba(245,240,232,0.55)" }}>{note}</span>
                </div>
              ))}
            </div>
          </div>

          <p style={{ margin: "0 0 1.25rem" }}>
            Ralph Mode requires the Sovereign tier because it depends on the full Orion agent
            stack, persistent encrypted memory, and the session tracking infrastructure. These
            are not features that can be bolted onto a basic tier — they are the foundation that
            makes deep work sessions meaningfully different from a browser timer.
          </p>

          {/* ── Section 6: What does Ralph Mode track ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What does Ralph Mode track?
          </h2>
          <p style={{ margin: "0 0 1rem" }}>
            After every session, MEOK records three core metrics and stores them in your
            evolution history:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", margin: "0 0 1.25rem" }}>
            {[
              {
                label: "Completion rate",
                desc: "Did you finish the task you named at the start of the session? MEOK asks you to confirm at the end of each block. Over time, your completion rate reveals whether your session lengths are well-matched to your work.",
              },
              {
                label: "Flow state duration",
                desc: "How long did you spend in unbroken, deep concentration? This is measured through session behaviour — reduced input interruptions, no app switching, sustained engagement with the task context. The longer your flow state duration, the higher quality the session.",
              },
              {
                label: "Task depth score",
                desc: "A composite metric based on your completion rate, flow state duration, the complexity of the task named, and session length relative to work produced. Depth score is the single number that tells you whether a session was genuinely productive or just busy.",
              },
            ].map(({ label, desc }) => (
              <div key={label} style={{ display: "flex", gap: "1rem" }}>
                <span
                  style={{
                    width: "0.375rem",
                    height: "0.375rem",
                    borderRadius: "9999px",
                    background: "#c9a84c",
                    flexShrink: 0,
                    marginTop: "0.6rem",
                  }}
                />
                <span>
                  <strong style={{ color: "#f5f0e8" }}>{label}.</strong>{" "}
                  <span style={{ color: "rgba(245,240,232,0.65)" }}>{desc}</span>
                </span>
              </div>
            ))}
          </div>

          <p style={{ margin: "0 0 1.25rem" }}>
            All metrics are visible at{" "}
            <span style={{ color: "#c9a84c", fontFamily: "monospace" }}>/dashboard/evolution</span>,
            where MEOK surfaces trends across your session history — identifying patterns in your
            productivity that would otherwise be invisible.
          </p>

          {/* ── Section 7: Can Ralph Mode work with ADHD ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Can Ralph Mode work with ADHD?
          </h2>
          <p style={{ margin: "0 0 1.25rem" }}>
            Many MEOK users with ADHD find Ralph Mode particularly useful — not because it forces
            focus, but because it removes the two biggest sources of derailment: interruptions and
            re-entry cost.
          </p>
          <p style={{ margin: "0 0 1.25rem" }}>
            Interruptions are eliminated by the notification block and context-switching lock.
            Re-entry cost — that 23-minute recovery period after a distraction — shrinks
            dramatically because Orion holds your full task context across sessions. When you
            return to a session after a break, everything you were working on is exactly where
            you left it, augmented by any new relevant context Orion has found in the interim.
          </p>
          <p style={{ margin: "0 0 1.25rem" }}>
            The 25-minute session option is deliberately short enough to feel achievable for
            people who struggle to commit to longer focus blocks. Starting a Ralph Mode session
            is a low-stakes decision — and the structure handles the rest.
          </p>
          <p style={{ margin: "0 0 1.25rem" }}>
            For more on how MEOK supports neurodivergent users, read{" "}
            <Link
              href="/blog/meok-for-adhd"
              style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              MEOK for ADHD
            </Link>
            , where we explore how persistent memory and structured modes interact with
            ADHD-specific working patterns.
          </p>

          {/* ── Closing ── */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(245,240,232,0.07)",
            }}
          >
            <p style={{ color: "rgba(245,240,232,0.6)", fontStyle: "italic", margin: 0 }}>
              Context switching is the enemy of real work. Ralph Mode is the antidote. Named for
              the philosopher who refused to follow existing paths, it exists to help you leave
              your own trail.
            </p>
          </div>
        </div>

        {/* Share row */}
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
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-ralph-mode&text=What+Is+Ralph+Mode%3F+MEOK%27s+Deep+Work+Protocol+Explained"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-ralph-mode"
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

        {/* CTA */}
        <div
          style={{
            borderRadius: "1rem",
            padding: "2.5rem",
            marginTop: "2.5rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
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
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9a84c",
                margin: "0 0 0.5rem",
              }}
            >
              Deep Work Protocol
            </p>
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#f5f0e8",
                margin: "0 0 0.75rem",
                lineHeight: 1.25,
              }}
            >
              Start your first Ralph Mode session
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.5)",
                margin: "0 0 1.5rem",
                maxWidth: "32rem",
              }}
            >
              One task. No distractions. Orion in focused mode. Hatch your MEOK free in under
              3 minutes — your first Ralph Mode session is waiting.
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
              Hatch your MEOK free &#8594;
            </Link>
          </div>
        </div>

        {/* Related posts */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              color: "#f5f0e8",
              fontSize: "1.125rem",
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ralph-mode-guide",
                tag: "Agents & Automation",
                tagColor: "#c9a84c",
                tagBg: "rgba(201,168,76,0.12)",
                title: "Ralph Mode Guide: Your AI Agent That Works While You Sleep",
                readTime: "5 min read",
              },
              {
                href: "/blog/what-is-morning-briefing",
                tag: "Productivity",
                tagColor: "#87CEEB",
                tagBg: "rgba(135,206,235,0.12)",
                title: "What Is Morning Briefing? How MEOK Starts Your Day Before You Open Your Eyes",
                readTime: "5 min read",
              },
              {
                href: "/blog/ai-productivity-app",
                tag: "Productivity",
                tagColor: "#a78bfa",
                tagBg: "rgba(167,139,250,0.12)",
                title: "The Best AI Productivity App in 2026: Why MEOK Is Different",
                readTime: "6 min read",
              },
            ].map(({ href, tag, tagColor, tagBg, title, readTime }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    color: tagColor,
                    background: tagBg,
                    width: "fit-content",
                  }}
                >
                  {tag}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    fontSize: "0.875rem",
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.3)",
                    marginTop: "auto",
                  }}
                >
                  {readTime}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer
          style={{
            marginTop: "5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(245,240,232,0.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 900,
                  fontSize: "1.125rem",
                  color: "#f5f0e8",
                  margin: "0 0 0.375rem",
                }}
              >
                MEOK AI LABS
              </p>
              <p style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.4)", margin: 0 }}>
                Sovereign AI for people who think deeply.
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(245,240,232,0.3)",
                  margin: "0.25rem 0 0",
                }}
              >
                Built by Nicholas Templeman &middot;{" "}
                <a
                  href="https://twitter.com/meok_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  @meok_ai
                </a>
              </p>
            </div>

            <nav
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              {[
                { href: "/birth", label: "Get Started" },
                { href: "/blog", label: "Blog" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(245,240,232,0.45)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <p
            style={{
              fontSize: "0.8125rem",
              color: "rgba(245,240,232,0.2)",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
