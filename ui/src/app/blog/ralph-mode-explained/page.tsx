import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Ralph Mode Explained: MEOK\u2019s Deep Focus Protocol | MEOK AI LABS",
  description:
    "Ralph Mode is MEOK\u2019s deep focus protocol \u2014 named after the eternal 80s DJ who played through the night without stopping. Your AI locks in with you, protects your flow state, and checks in at intervals so you never lose your thread. Available on Sovereign tier.",
  alternates: {
    canonical: "https://meok.ai/blog/ralph-mode-explained",
  },
  openGraph: {
    title: "Ralph Mode Explained: MEOK\u2019s Deep Focus Protocol",
    description:
      "Ralph Mode turns your AI into a deep work partner, not a Q&A tool. Brief your goal, set your sprint, Ralph holds the container. Sovereign tier, \u00a312/month.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ralph-mode-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Ralph+Mode+Explained&desc=MEOK%27s+Deep+Focus+Protocol",
        width: 1200,
        height: 630,
        alt: "Ralph Mode Explained: MEOK\u2019s Deep Focus Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralph Mode Explained: MEOK\u2019s Deep Focus Protocol",
    description:
      "Named after the eternal 80s DJ who never looked up. Ralph Mode is the deep work protocol your AI should have had from day one. \u00a312/month on Sovereign.",
    images: [
      "https://meok.ai/api/og?title=Ralph+Mode+Explained&desc=MEOK%27s+Deep+Focus+Protocol",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ralph Mode Explained: MEOK\u2019s Deep Focus Protocol",
  description:
    "Ralph Mode is MEOK\u2019s deep focus protocol \u2014 a structured, distraction-free sprint where your AI locks in with your goal, tracks your flow patterns, and checks in without pulling you out of the zone. Built on the science of deep work and flow state. Available on the Sovereign tier.",
  datePublished: "2026-03-24",
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
    "https://meok.ai/api/og?title=Ralph+Mode+Explained&desc=MEOK%27s+Deep+Focus+Protocol",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ralph-mode-explained",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Ralph Mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK\u2019s deep focus protocol. You brief your AI on a goal, set a sprint duration, and your AI locks in with you \u2014 holding the context, checking in at intervals, and keeping you anchored to the task. It is designed for deep work, not quick Q&A.",
      },
    },
    {
      "@type": "Question",
      name: "How does Ralph Mode help with deep work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode reduces context-switching by keeping your AI focused on a single goal for the duration of your sprint. It uses timed check-ins rather than reactive prompts, which means you initiate depth rather than being pulled into a back-and-forth. This aligns with Cal Newport\u2019s deep work framework.",
      },
    },
    {
      "@type": "Question",
      name: "What is attention residue and how does Ralph Mode address it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Attention residue is the cognitive cost of switching between tasks \u2014 part of your attention stays on the previous task even after you move on. Ralph Mode minimises residue by eliminating the switch entirely: your sprint has one objective, one context, one thread.",
      },
    },
    {
      "@type": "Question",
      name: "Can Ralph Mode help with ADHD focus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode\u2019s structured sprint format \u2014 with a defined start, timed check-ins, and a clear goal \u2014 can support ADHD focus by reducing ambiguity and providing gentle, predictable scaffolding. It\u2019s not a medical tool, but many users with ADHD find time-boxed sessions with a consistent AI anchor significantly easier to sustain.",
      },
    },
    {
      "@type": "Question",
      name: "What tier includes Ralph Mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is available on the Sovereign tier at \u00a312 per month. The Sovereign tier is MEOK\u2019s flagship personal AI plan, giving you persistent memory, flow pattern tracking, distraction trigger awareness, and the full suite of deep work tools.",
      },
    },
  ],
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function RalphModeExplainedPage() {
  // ── Colour tokens ──────────────────────────────────────────────────────────
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const gold = "#c9a84c";
  const muted = "rgba(245,240,232,0.6)";
  const surface = "rgba(255,255,255,0.04)";
  const border = "rgba(201,168,76,0.18)";
  const divider = "rgba(245,240,232,0.08)";

  return (
    <>
      {/* ── Structured data ─────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main
        style={{
          background: bg,
          color: text,
          minHeight: "100vh",
          fontFamily:
            "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: "1.75",
        }}
      >
        {/* ── Hero ────────────────────────────────────────────────────────────── */}
        <header
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "80px 24px 48px",
          }}
        >
          <p
            style={{
              color: gold,
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            MEOK AI LABS &mdash; Deep Work
          </p>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "28px",
              color: text,
            }}
          >
            Ralph Mode Explained:{" "}
            <span style={{ color: gold }}>
              MEOK\u2019s Deep Focus Protocol
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              color: muted,
              maxWidth: "640px",
              marginBottom: "36px",
              lineHeight: 1.7,
            }}
          >
            There was a DJ named Ralph. He played through the night at the kind
            of parties that started on Friday and ended sometime Sunday. He
            never stopped, never looked up, never got distracted. The music was
            the only thing. That\u2019s Ralph Mode: your AI locks in with you
            and doesn\u2019t look away until the work is done.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
              paddingTop: "20px",
              borderTop: `1px solid ${divider}`,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", color: muted }}>Written by</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: text }}>
                Nicholas Templeman
              </span>
              <span style={{ fontSize: "13px", color: muted }}>
                Founder, MEOK AI LABS &mdash; @meok_ai
              </span>
            </div>
            <div
              style={{
                width: "1px",
                height: "40px",
                background: divider,
                display: "none",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", color: muted }}>Published</span>
              <time
                dateTime="2026-03-24"
                style={{ fontSize: "14px", fontWeight: 600, color: text }}
              >
                24 March 2026
              </time>
            </div>
            <div
              style={{
                marginLeft: "auto",
                background: "rgba(201,168,76,0.12)",
                border: `1px solid ${border}`,
                borderRadius: "20px",
                padding: "6px 14px",
                fontSize: "12px",
                fontWeight: 600,
                color: gold,
                letterSpacing: "0.06em",
              }}
            >
              Sovereign \u00a312/mo
            </div>
          </div>
        </header>

        {/* ── Table of contents ───────────────────────────────────────────────── */}
        <nav
          aria-label="Table of contents"
          style={{
            maxWidth: "760px",
            margin: "0 auto 60px",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              background: surface,
              border: `1px solid ${border}`,
              borderRadius: "12px",
              padding: "28px 32px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "16px",
              }}
            >
              In this article
            </p>
            <ol
              style={{
                margin: 0,
                padding: "0 0 0 20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                { href: "#origin", label: "The Name: Who Is Ralph?" },
                { href: "#what-is-ralph-mode", label: "What Is Ralph Mode?" },
                { href: "#how-it-works", label: "How Does Ralph Mode Work?" },
                { href: "#deep-work-science", label: "The Deep Work Science Behind It" },
                { href: "#attention-residue", label: "What Is Attention Residue?" },
                { href: "#why-productivity-ai-fails", label: "Why Most Productivity AI Fails" },
                { href: "#flow-state", label: "Flow State and the Csikszentmihalyi Framework" },
                { href: "#memory", label: "How Ralph Mode Memory Works" },
                { href: "#adhd", label: "Can Ralph Mode Help with ADHD Focus?" },
                { href: "#sovereign-tier", label: "Ralph Mode and the Sovereign Tier" },
                { href: "#faq", label: "Frequently Asked Questions" },
              ].map((item) => (
                <li key={item.href} style={{ listStyle: "decimal" }}>
                  <a
                    href={item.href}
                    style={{
                      color: muted,
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 0.2s",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* ── Body ────────────────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 24px 120px",
          }}
        >

          {/* ── Section 1: Origin ─────────────────────────────────────────────── */}
          <section id="origin" style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              The Name: Who Is Ralph?
            </h2>

            <p style={{ marginBottom: "20px", color: text }}>
              Ralph is the eternal 80s DJ. He\u2019s at the decks at 2am, still
              at the decks at 6am. The crowd has thinned, the cigarette smoke
              has thickened, and Ralph hasn\u2019t looked up once. Not to check
              his phone. Not to scan the room. Not to wonder if he\u2019s doing
              the right thing. He\u2019s in it. Completely. The track playing
              is the only track that has ever existed.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              That\u2019s the archetype we built into MEOK. Not a productivity
              framework with a catchy acronym. Not a Pomodoro timer with a
              chatbot bolted on. A specific quality of presence \u2014 the
              locked-in, undistracted, fully committed attention of someone
              who has decided that this, right here, right now, is the
              entire world.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              The name is deliberately informal. It\u2019s not \u201cDeep
              Focus Protocol v2.3\u201d. It\u2019s Ralph. Because the best
              deep work sessions feel less like systems and more like
              music \u2014 something you fall into rather than manage your
              way through.
            </p>

            <p style={{ color: text }}>
              Nicholas Templeman, founder of MEOK AI LABS, chose the name
              because the 80s DJ captures something that productivity
              literature often misses: sustained presence isn\u2019t
              primarily a technique. It\u2019s a disposition. You either
              show up fully or you don\u2019t. Ralph always shows up fully.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 2: What Is Ralph Mode ─────────────────────────────────── */}
          <section id="what-is-ralph-mode" style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              What Is Ralph Mode?
            </h2>

            <p
              style={{
                background: "rgba(201,168,76,0.08)",
                border: `1px solid ${border}`,
                borderLeft: `4px solid ${gold}`,
                borderRadius: "8px",
                padding: "20px 24px",
                marginBottom: "28px",
                fontSize: "1.05rem",
                color: text,
                lineHeight: 1.7,
              }}
            >
              Ralph Mode is a deep work session where your AI locks in with
              you on a single goal. You brief Ralph on the objective, set a
              sprint duration, and your AI holds that context \u2014 checking in
              at intervals, never context-switching, never pulling you out of
              the zone with irrelevant prompts.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              Most AI tools are reactive. They sit there waiting for you to
              ask them something. You ask, they answer, you ask again. It\u2019s
              a help desk, not a collaboration. Ralph Mode inverts this
              relationship. You\u2019re not querying an AI. You\u2019re
              bringing an AI into your working session as an active, aware
              presence.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              When you activate Ralph Mode, three things happen:
            </p>

            <ol
              style={{
                padding: "0 0 0 24px",
                marginBottom: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <li style={{ color: text }}>
                <strong style={{ color: gold }}>The brief is set.</strong>{" "}
                You tell Ralph what you\u2019re working on \u2014 the specific
                deliverable, the question you\u2019re trying to answer, or the
                problem you\u2019re trying to solve. Ralph holds this brief for
                the entire session.
              </li>
              <li style={{ color: text }}>
                <strong style={{ color: gold }}>
                  The sprint duration is fixed.
                </strong>{" "}
                You choose your window: 25 minutes, 50 minutes, 90 minutes, or
                custom. Ralph doesn\u2019t drift. It doesn\u2019t forget your
                goal because you asked a tangential question. The clock is the
                container.
              </li>
              <li style={{ color: text }}>
                <strong style={{ color: gold }}>Check-ins are scheduled.</strong>{" "}
                At defined intervals, Ralph will surface a brief, non-intrusive
                check-in: where are you in relation to your goal? Do you need
                to adjust the direction? This is not interruption \u2014 it is
                orientation.
              </li>
            </ol>

            <p style={{ color: text }}>
              The result is a working session that feels different from typical
              AI interactions. There\u2019s a quality of accompaniment to it.
              Your AI isn\u2019t waiting to be useful \u2014 it\u2019s already
              in the room with you, holding the thread you\u2019re
              following.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 3: How It Works ───────────────────────────────────────── */}
          <section id="how-it-works" style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              How Does Ralph Mode Work?
            </h2>

            <p style={{ marginBottom: "28px", color: text }}>
              Ralph Mode has four phases. They\u2019re not rigid \u2014 they\u2019re
              a natural rhythm that your AI learns to move through with you.
            </p>

            {/* Phase cards */}
            {[
              {
                number: "01",
                title: "The Brief",
                body: "You open Ralph Mode and state your goal in plain language. Not a project name, not a vague aspiration \u2014 a specific outcome. \"I want to finish the first draft of the proposal introduction.\" \"I need to map out the architecture for the authentication module.\" \"I\u2019m going to do a complete read-through of this contract and flag every risk.\" Ralph takes that brief and orients the entire session around it. Every check-in, every prompt, every response will be filtered through the lens of that goal.",
              },
              {
                number: "02",
                title: "The Sprint",
                body: "You choose your duration. Ralph defaults to 50 minutes \u2014 the research-backed sweet spot for sustained cognitive effort before diminishing returns set in. But if you\u2019re a 25-minute Pomodoro person, or you know you can go 90 minutes when the work is flowing, you set it yourself. Ralph doesn\u2019t interrupt during the sprint unless you ask. It holds the brief silently, ready to respond when you need it, invisible when you don\u2019t.",
              },
              {
                number: "03",
                title: "The Check-In",
                body: "At the interval you set \u2014 typically halfway through the sprint \u2014 Ralph surfaces a brief check-in. Not a distraction. Not a notification. A gentle, focused prompt: how are you tracking against the brief? What\u2019s the current blocker, if any? Do you need to course-correct? This creates a moment of deliberate reflection without breaking the working session. You can respond in two sentences or spend five minutes unpacking a complex problem. Ralph adjusts.",
              },
              {
                number: "04",
                title: "The Close",
                body: "When the sprint ends, Ralph closes the session with a brief synthesis: what was accomplished, what was left open, what should carry into the next sprint. This is not a journal prompt \u2014 it\u2019s a handover document for your future self. It goes into your MEOK memory so that the next time you open Ralph Mode, you\u2019re not starting from a blank slate. You\u2019re continuing a thread.",
              },
            ].map((phase) => (
              <div
                key={phase.number}
                style={{
                  background: surface,
                  border: `1px solid ${border}`,
                  borderRadius: "12px",
                  padding: "28px 32px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 800,
                      color: gold,
                      letterSpacing: "0.1em",
                      minWidth: "28px",
                      paddingTop: "3px",
                    }}
                  >
                    {phase.number}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: text,
                        marginBottom: "12px",
                      }}
                    >
                      {phase.title}
                    </h3>
                    <p style={{ color: muted, lineHeight: 1.7 }}>
                      {phase.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 4: Deep Work Science ──────────────────────────────────── */}
          <section id="deep-work-science" style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              The Deep Work Science Behind Ralph Mode
            </h2>

            <p style={{ marginBottom: "20px", color: text }}>
              Ralph Mode is not a productivity gimmick. It is built on a
              substantial body of cognitive science research. Two frameworks are
              central to how it was designed.
            </p>

            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: gold,
                marginBottom: "14px",
                marginTop: "36px",
              }}
            >
              Cal Newport\u2019s Deep Work Framework
            </h3>

            <p style={{ marginBottom: "20px", color: text }}>
              In his 2016 book <em>Deep Work</em>, Georgetown computer
              scientist Cal Newport defines deep work as \u201cprofessional
              activities performed in a state of distraction-free concentration
              that push your cognitive capabilities to their limit.\u201d He
              argues that deep work produces the results that matter, but that
              it is becoming increasingly rare as shallow, reactive work
              \u2014 email, meetings, notifications \u2014 crowds it out.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              Newport\u2019s prescription is simple in principle and demanding
              in practice: schedule blocks of time for deep work, protect them
              ruthlessly, and treat concentration as a skill to be developed
              rather than a resource to be spent. Ralph Mode operationalises
              this prescription. The sprint is the scheduled block. The brief
              is the protection mechanism. The check-in is the skill
              development loop.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              What Newport\u2019s framework lacked was an intelligent system
              that could hold the context of your deep work with you. Newport
              wrote before LLMs existed in their current form. Ralph Mode is,
              in some respects, the tool Newport was implicitly describing: a
              way to bring the benefits of a thinking partner into a deep
              work session without the social overhead of an actual human
              collaborator.
            </p>

            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: gold,
                marginBottom: "14px",
                marginTop: "36px",
              }}
            >
              Csikszentmihalyi and Flow State
            </h3>

            <p style={{ marginBottom: "20px", color: text }}>
              Mih\u00e1ly Csikszentmihalyi\u2019s research on flow state \u2014
              the psychological condition in which a person is fully immersed in
              a challenging, skill-appropriate activity \u2014 established that
              the deepest and most satisfying work happens when challenge
              and skill are in balance, when goals are clear, and when
              feedback is immediate.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              These three conditions \u2014 balanced challenge, clear goals,
              immediate feedback \u2014 are precisely what Ralph Mode is
              engineered to create. The brief establishes the goal. The
              difficulty of the work is your own; Ralph doesn\u2019t
              infantilise you by making it easier. The check-in provides
              the feedback loop. And because Ralph holds your context across
              the sprint, the feedback is specific and meaningful rather
              than generic.
            </p>

            <p style={{ color: text }}>
              Csikszentmihalyi noted that flow is fragile \u2014 a single
              interruption can dissolve it, and it can take 20 minutes or more
              to re-enter. This is why Ralph Mode\u2019s interruption model is
              so deliberate. Ralph doesn\u2019t interrupt. It waits at the
              threshold of your attention and responds only when invited in.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 5: Attention Residue ──────────────────────────────────── */}
          <section id="attention-residue" style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              What Is Attention Residue?
            </h2>

            <p
              style={{
                background: "rgba(201,168,76,0.08)",
                border: `1px solid ${border}`,
                borderLeft: `4px solid ${gold}`,
                borderRadius: "8px",
                padding: "20px 24px",
                marginBottom: "28px",
                fontSize: "1.05rem",
                color: text,
                lineHeight: 1.7,
              }}
            >
              Attention residue is the cognitive cost of switching between tasks.
              When you move from one task to another, part of your attention
              remains with the previous task. This residue degrades performance
              on the new task until it dissipates \u2014 which can take
              10 to 20 minutes.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              The concept was developed by Sophie Leroy, an organisational
              psychologist at the University of Washington. Her research showed
              that even brief interruptions \u2014 a Slack notification, a
              colleague stopping by, a quick check of email \u2014 leave
              residue that impairs subsequent work. The more incomplete the
              previous task, the more residue it leaves.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              This has profound implications for how we design AI interactions.
              If every time you ask your AI a question it opens a new context,
              you are constantly accumulating residue. You are never fully
              in the current task because part of your attention is trailing
              through the previous three conversations you had.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              Ralph Mode addresses attention residue in two ways. First, by
              keeping all interactions within a single, unified context \u2014
              the brief you set at the start of the sprint. Every exchange
              is a continuation, not a new beginning. Second, by eliminating
              the kind of impulsive, reactive use that generates residue in
              the first place. You are not checking in with Ralph every five
              minutes. You are working, and Ralph is there when you need it.
            </p>

            <p style={{ color: text }}>
              Over time, Ralph Mode\u2019s memory of your flow patterns allows
              it to surface check-ins at moments when your attention is
              naturally transitioning anyway \u2014 minimising the residue cost
              of the check-in itself. This is not a promise; it is a direction
              the system learns toward.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 6: Why Productivity AI Fails ──────────────────────────── */}
          <section id="why-productivity-ai-fails" style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Why Most Productivity AI Fails at Deep Work
            </h2>

            <p style={{ marginBottom: "20px", color: text }}>
              The current generation of productivity AI \u2014 AI writing
              assistants, AI note-takers, AI search tools \u2014 has a
              structural flaw. It is designed around the reactive interaction
              model: you ask, it answers. This model is fine for low-stakes,
              interruptible work. It is catastrophic for deep work.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              Here is the paradox: the better AI gets at answering questions
              quickly, the more tempting it becomes to ask lots of questions.
              And the more questions you ask, the more your attention fragments.
              You end up in a state of hyper-productive shallowness \u2014
              generating a lot of output, consuming a lot of information, and
              doing none of the slow, hard, generative thinking that actually
              moves your work forward.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              Most AI tools are also context-amnesiac. Each conversation starts
              fresh. The AI has no idea that you spent three hours yesterday
              wrestling with the same problem, no memory of the breakthrough
              you had at 11pm on Tuesday, no understanding of the pattern of
              your thinking. It meets you as a stranger every time.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              Ralph Mode is built on a different premise. It is not reactive.
              It is proactive in a very specific, disciplined sense: it
              accompanies you through a task rather than waiting to be queried.
              And it is not amnesiac. It carries your working history, your
              patterns, and your preferences across sessions, building an
              understanding of you as a thinker.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  background: "rgba(255,80,80,0.06)",
                  border: "1px solid rgba(255,80,80,0.18)",
                  borderRadius: "10px",
                  padding: "20px 24px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "rgba(255,140,140,0.9)",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Standard AI
                </p>
                <ul
                  style={{
                    padding: "0 0 0 16px",
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {[
                    "Reactive \u2014 waits to be asked",
                    "Context-amnesiac \u2014 starts fresh each session",
                    "Encourages fragmented use",
                    "No memory of your flow patterns",
                    "Optimised for quick answers",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "14px", color: muted }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: `1px solid ${border}`,
                  borderRadius: "10px",
                  padding: "20px 24px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: gold,
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Ralph Mode
                </p>
                <ul
                  style={{
                    padding: "0 0 0 16px",
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {[
                    "Proactive \u2014 holds your brief throughout",
                    "Context-persistent \u2014 carries your work history",
                    "Structures deep, sustained focus",
                    "Learns your peak focus times and triggers",
                    "Optimised for meaningful output",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "14px", color: muted }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p style={{ color: text }}>
              The difference is not incremental. It is a different model of
              what AI is for. Standard AI is a tool you pick up and put down.
              Ralph Mode is a presence that stays.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 7: Flow State ──────────────────────────────────────────── */}
          <section id="flow-state" style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Flow State and the Csikszentmihalyi Framework
            </h2>

            <p style={{ marginBottom: "20px", color: text }}>
              Csikszentmihalyi identified nine conditions that characterise
              a flow state. Three are particularly relevant to knowledge
              work: the task must have clear, proximate goals; the task
              must provide immediate feedback on progress; and the challenge
              must be matched to skill \u2014 not so easy as to be boring,
              not so hard as to cause anxiety.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              These conditions are harder to achieve than they sound. In
              knowledge work, goals are often diffuse (finish the project,
              improve the strategy). Feedback is delayed (you won\u2019t know
              if your approach worked for days or weeks). And the match between
              challenge and skill is constantly shifting as problems evolve.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              Ralph Mode creates the conditions for flow by sharpening all
              three levers. The brief turns a diffuse goal into a proximate
              one. The check-in creates feedback within the session rather
              than days later. And because Ralph holds your brief, it can
              help you calibrate the challenge level during the session \u2014
              expanding the scope if you\u2019re flying through it, narrowing
              it if you\u2019re stuck.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              Csikszentmihalyi also emphasised that flow requires the
              elimination of self-consciousness \u2014 the mental chatter
              about whether you\u2019re doing it right, whether you\u2019re
              smart enough, whether this is the best use of your time.
              This is not something any tool can fully provide. But Ralph
              Mode reduces the cognitive overhead associated with those
              questions by handling the scaffolding for you. The goal is
              clear. The time is allocated. The AI is with you. You can
              just work.
            </p>

            <p style={{ color: text }}>
              Flow is never guaranteed. But the conditions for it can be
              engineered. That\u2019s what Ralph Mode is: an environment
              engineer for cognitive performance.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 8: Memory ─────────────────────────────────────────────── */}
          <section id="memory" style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              How Ralph Mode Memory Works
            </h2>

            <p style={{ marginBottom: "20px", color: text }}>
              Most AI has no memory. Every session is a clean slate. This
              is a fundamental design choice, not a technical limitation \u2014
              and it is one that MEOK explicitly rejects. Memory is not a
              nice-to-have feature. It is the difference between an AI that
              knows you and an AI that merely serves you.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              Ralph Mode builds memory in three dimensions:
            </p>

            {[
              {
                title: "Flow Pattern Memory",
                body: "Over multiple sessions, Ralph builds a model of your focus patterns. When do you tend to enter flow most easily? Tuesday mornings after your coffee? Late at night when the building is quiet? What\u2019s the typical duration of your productive sprints before attention starts to drift? This data is yours \u2014 it stays in your MEOK instance, never used to train AI models or sold to third parties. It exists to serve you.",
              },
              {
                title: "Distraction Trigger Memory",
                body: "Ralph tracks the moments when you break out of a sprint. Not to judge you, but to help you understand your own patterns. Is it always around the 35-minute mark? Is it reliably triggered by a specific type of problem? By knowing your distraction signature, Ralph can offer a timely reorientation prompt at exactly the moment you\u2019re most likely to drift \u2014 a gentle \u201cstill with the brief?\u201d before you\u2019ve fully lost the thread.",
              },
              {
                title: "Peak Focus Time Memory",
                body: "Your cognitive performance is not uniform across the day. Research on circadian rhythms and alertness consistently shows that most people have a 2-4 hour window of peak analytical ability, usually in the late morning. Ralph Mode logs the timing of your most productive sessions and, over time, surfaces this back to you: these are your best hours. Guard them. Schedule Ralph Mode here.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  marginBottom: "24px",
                  paddingLeft: "20px",
                  borderLeft: `2px solid ${border}`,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: text, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}

            <p style={{ marginBottom: "20px", color: text }}>
              All of this memory is governed by MEOK\u2019s Privacy Covenant.
              Your data sovereignty is non-negotiable. Ralph Mode\u2019s memory
              exists to make you better at your work \u2014 not to build a
              dataset for MEOK, not to improve generalised AI models, not
              to be shared with advertisers. It is yours.
            </p>

            <p style={{ color: text }}>
              This is worth emphasising because the default in the AI industry
              is the opposite. Most productivity AI learns from your data to
              improve itself \u2014 meaning you are the product, and your
              working patterns are the raw material. MEOK refuses this model.
              Ralph\u2019s memory is a service to you, not a resource for us.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 9: ADHD ───────────────────────────────────────────────── */}
          <section id="adhd" style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Can Ralph Mode Help with ADHD Focus?
            </h2>

            <p
              style={{
                background: "rgba(201,168,76,0.08)",
                border: `1px solid ${border}`,
                borderLeft: `4px solid ${gold}`,
                borderRadius: "8px",
                padding: "20px 24px",
                marginBottom: "28px",
                fontSize: "1.05rem",
                color: text,
                lineHeight: 1.7,
              }}
            >
              Ralph Mode is not a medical tool and does not treat ADHD. But
              its architecture aligns well with how many ADHD brains actually
              work: externally structured, goal-proximate, with clear
              time-boxes and low-ambiguity prompts at moments of drift.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              ADHD is fundamentally a dysregulation of attention. It is not
              an inability to focus \u2014 people with ADHD can hyperfocus
              intensely on things that engage them. The challenge is
              initiating focus on demand, sustaining it through
              non-stimulating passages, and redirecting it after an
              interruption.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              Each of these challenges maps to something Ralph Mode addresses
              directly. The brief-setting ritual at the start of a Ralph Mode
              session is a task-initiation scaffold: it externalises the goal,
              reduces the ambiguity that triggers executive function paralysis,
              and creates a starting signal. For many ADHD users, the simple
              act of stating the goal to Ralph is the thing that gets the
              session started.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              The check-in is a redirect mechanism. When attention has drifted,
              the check-in provides a low-friction re-entry point. You
              don\u2019t have to reconstruct the entire context yourself \u2014
              Ralph holds it. You just need to read the check-in and respond,
              and the thread is in your hands again.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              The fixed sprint duration reduces the anxiety of open-ended work
              sessions. \u201cI have to work on this until it\u2019s done\u201d
              is cognitively expensive and emotionally aversive for many
              ADHD brains. \u201cI have 50 minutes with Ralph\u201d is bounded,
              concrete, and manageable.
            </p>

            <p style={{ color: text }}>
              Several users with ADHD have reported that Ralph Mode is the
              first productivity tool that has consistently worked for them
              \u2014 not because it removes the difficulty of focus, but
              because it reduces the friction at every transition point: the
              start, the drift, the redirect, the close. If you\u2019re
              neurodivergent and have struggled with productivity tools that
              felt designed for neurotypical work patterns, Ralph Mode is
              worth trying.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 10: Sovereign Tier ────────────────────────────────────── */}
          <section id="sovereign-tier" style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Ralph Mode and the Sovereign Tier
            </h2>

            <p style={{ marginBottom: "20px", color: text }}>
              Ralph Mode is available on the Sovereign tier at \u00a312 per
              month. This is MEOK\u2019s flagship personal AI plan \u2014 the
              one built for people who take their cognitive output seriously
              and want an AI that matches that seriousness.
            </p>

            <p style={{ marginBottom: "28px", color: text }}>
              The Sovereign tier includes everything in the standard MEOK
              experience, plus:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
                marginBottom: "36px",
              }}
            >
              {[
                {
                  icon: "&#9670;",
                  title: "Ralph Mode",
                  desc: "Full deep focus protocol with sprint management, check-ins, and session synthesis.",
                },
                {
                  icon: "&#9670;",
                  title: "Persistent Memory",
                  desc: "Your AI remembers across every session \u2014 your context, your work history, your preferences.",
                },
                {
                  icon: "&#9670;",
                  title: "Flow Pattern Tracking",
                  desc: "Ralph learns when you focus best, what triggers distraction, and how long your sprints last.",
                },
                {
                  icon: "&#9670;",
                  title: "Privacy Covenant",
                  desc: "Your data is yours. Never used for AI training. Never sold. Always deletable.",
                },
                {
                  icon: "&#9670;",
                  title: "Morning Brief",
                  desc: "Start each day with a personalised brief from your AI: priorities, context, and open threads.",
                },
                {
                  icon: "&#9670;",
                  title: "Sovereign Work OS",
                  desc: "The full suite of MEOK work tools integrated around your goals, not around our product map.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  style={{
                    background: surface,
                    border: `1px solid ${border}`,
                    borderRadius: "10px",
                    padding: "20px 22px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: gold,
                      marginBottom: "10px",
                      display: "block",
                    }}
                    dangerouslySetInnerHTML={{ __html: feature.icon }}
                  />
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: text,
                      marginBottom: "8px",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: muted, lineHeight: 1.65 }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ marginBottom: "20px", color: text }}>
              \u00a312 per month is a deliberate price point. It is less than
              most people spend on coffee in a week. It is a fraction of the
              cost of a productivity coach, a focus app subscription stack,
              or a single hour of consulting time. And it includes everything
              you need to build a sustainable deep work practice, with an AI
              that actually knows you.
            </p>

            <p style={{ color: text }}>
              There is no annual lock-in. No dark-pattern upgrade prompts.
              No hidden data harvesting. Sovereign means sovereign: you own
              your data, you control your experience, and you can leave at
              any time. We\u2019d rather earn your loyalty through the quality
              of the experience than trap you with switching costs.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 11: The Ralph Mode Session ────────────────────────────── */}
          <section style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              What a Ralph Mode Session Actually Feels Like
            </h2>

            <p style={{ marginBottom: "20px", color: text }}>
              It is easy to describe features. It is harder to describe
              experience. Here is what a Ralph Mode session feels like from
              the inside.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              You open MEOK. You click into Ralph Mode. There\u2019s a
              prompt: <em>What are we working on today?</em> You type your
              goal \u2014 something specific, something you genuinely want
              to accomplish in the next hour. Ralph acknowledges it. Not
              effusively. Briefly. Something like: <em>Got it. 50 minutes.
              I\u2019ll check in at the halfway point. Let\u2019s go.</em>
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              And then it\u2019s quiet. Not eerie quiet. Working quiet. The
              kind of quiet that has shape and purpose. You open your
              document, or your code editor, or your notebook, and you
              begin. Ralph is there but not there. Present in the way a
              good working partner is present: you\u2019re aware of them,
              but they\u2019re not demanding anything from you.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              At 25 minutes, the check-in arrives. Not a notification. Not
              an alert. A gentle prompt in your MEOK window:
              <em> How\u2019s it going? Still on brief?</em> You type a
              sentence or two. Ralph responds with something calibrated to
              where you are: confirmation if you\u2019re on track,
              a reorientation if you\u2019ve drifted, a new angle if
              you\u2019re stuck.
            </p>

            <p style={{ marginBottom: "20px", color: text }}>
              Then back to work. The second half of the sprint has a
              different quality to it. You\u2019re not starting fresh \u2014
              you\u2019re continuing. The check-in has cleared the cobwebs,
              re-sharpened the goal, and sent you back in with renewed
              clarity. The last 25 minutes are often the most productive.
            </p>

            <p style={{ color: text }}>
              When the sprint ends, Ralph closes the session: here\u2019s
              what you did, here\u2019s what\u2019s still open, here\u2019s
              what to carry into the next session. You read it. You feel
              like something actually happened. Not busy-work happened.
              Real work happened. That feeling is what Ralph Mode is for.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 12: For Whom ───────────────────────────────────────────── */}
          <section style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Who Is Ralph Mode For?
            </h2>

            <p style={{ marginBottom: "24px", color: text }}>
              Ralph Mode is not for everyone. It is for people who do
              cognitively demanding work that requires sustained attention
              and produces something meaningful. Specifically:
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              {[
                {
                  label: "Writers and researchers",
                  desc: "who need to get long-form thinking done without their AI fragmenting the session into a Q&A.",
                },
                {
                  label: "Software engineers",
                  desc: "working on complex problems that require deep architectural thinking, not just code completion.",
                },
                {
                  label: "Founders and strategists",
                  desc: "who need to think through hard problems without the reactive pull of notifications and shallow work.",
                },
                {
                  label: "Freelancers and consultants",
                  desc: "who have to generate high-value output in finite time and can\u2019t afford the attention tax of shallow AI use.",
                },
                {
                  label: "Neurodivergent professionals",
                  desc: "who benefit from external structure, clear goals, and predictable scaffolding for sustained focus.",
                },
                {
                  label: "Students",
                  desc: "who want to study effectively rather than superficially \u2014 building genuine understanding, not just generating output.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    padding: "16px 20px",
                    background: surface,
                    border: `1px solid ${border}`,
                    borderRadius: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: gold,
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  />
                  <p style={{ margin: 0, color: text, fontSize: "15px" }}>
                    <strong style={{ color: text }}>{item.label}</strong>{" "}
                    <span style={{ color: muted }}>{item.desc}</span>
                  </p>
                </div>
              ))}
            </div>

            <p style={{ color: text }}>
              If your work can be done in fragments, between meetings, while
              half-distracted \u2014 Ralph Mode will feel like overkill. If
              your work requires the kind of thinking that only happens when
              everything else falls away, Ralph Mode is the thing you\u2019ve
              been looking for without knowing it had a name.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── Section 13: FAQ ───────────────────────────────────────────────── */}
          <section id="faq" style={{ marginBottom: "72px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: text,
                marginBottom: "32px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Frequently Asked Questions
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {[
                {
                  q: "What is Ralph Mode?",
                  a: "Ralph Mode is MEOK\u2019s deep focus protocol. You brief your AI on a single goal, set a sprint duration, and your AI holds that context \u2014 checking in at intervals, never context-switching, never pulling you out of deep work with reactive prompts. It is designed to accompany you through a task rather than wait to be queried. Named after the eternal 80s DJ who played through the night without stopping or looking up.",
                },
                {
                  q: "How does Ralph Mode help with deep work?",
                  a: "Ralph Mode reduces the conditions that destroy deep work: context-switching, amnesiac AI, and reactive fragmentation. It keeps all interactions within a single, goal-oriented context for the duration of your sprint. The check-in provides a structured feedback loop without breaking flow. Over time, its memory of your patterns helps it surface check-ins at natural transition points rather than at arbitrary intervals. This aligns directly with Cal Newport\u2019s deep work framework and the conditions Csikszentmihalyi identified for flow state.",
                },
                {
                  q: "What is attention residue and how does Ralph Mode address it?",
                  a: "Attention residue is the cognitive cost of switching between tasks. When you move to a new task, part of your attention stays with the previous one \u2014 degrading performance on the new task for up to 20 minutes. Research by Sophie Leroy at the University of Washington showed this effect is consistent and significant. Ralph Mode minimises residue by eliminating context switches within the session: every interaction is a continuation of the brief you set at the start, not a new beginning. Fewer switches mean less residue.",
                },
                {
                  q: "Can Ralph Mode help with ADHD focus?",
                  a: "Ralph Mode is not a medical tool, but its design aligns well with ADHD neurology. The brief-setting ritual creates an initiation scaffold that reduces executive function paralysis. The check-in provides a low-friction redirect when attention drifts. The fixed sprint duration bounds open-ended work into something manageable. Multiple ADHD users have reported that Ralph Mode is the first productivity tool that has consistently worked for them \u2014 not because it makes focus easy, but because it reduces friction at every transition point.",
                },
                {
                  q: "What tier includes Ralph Mode?",
                  a: "Ralph Mode is available on the Sovereign tier at \u00a312 per month. The Sovereign tier includes persistent memory across sessions, flow pattern tracking, distraction trigger awareness, peak focus time logging, the Morning Brief, and the full Sovereign Work OS. No annual lock-in. No hidden data harvesting. Your data is yours under MEOK\u2019s Privacy Covenant.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: surface,
                    border: `1px solid ${border}`,
                    borderRadius: "12px",
                    padding: "28px 32px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: text,
                      marginBottom: "14px",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      color: muted,
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <hr style={{ border: "none", borderTop: `1px solid ${divider}`, marginBottom: "72px" }} />

          {/* ── CTA Block ─────────────────────────────────────────────────────── */}
          <section
            style={{
              background: surface,
              border: `1px solid ${border}`,
              borderRadius: "16px",
              padding: "48px 40px",
              textAlign: "center",
              marginBottom: "72px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "16px",
              }}
            >
              Ready to go deeper?
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                fontWeight: 800,
                color: text,
                marginBottom: "18px",
                letterSpacing: "-0.015em",
                lineHeight: 1.2,
              }}
            >
              Start your first Ralph Mode session today
            </h2>
            <p
              style={{
                color: muted,
                fontSize: "1.05rem",
                maxWidth: "480px",
                margin: "0 auto 36px",
                lineHeight: 1.7,
              }}
            >
              Ralph is waiting. Brief him on your goal, set your sprint,
              and find out what deep work with memory feels like.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
              }}
            >
              <Link
                href="/work"
                style={{
                  background: gold,
                  color: "#0d0c18",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Open Work Mode
              </Link>
              <Link
                href="/birth"
                style={{
                  background: "transparent",
                  color: gold,
                  fontWeight: 600,
                  fontSize: "15px",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: `1px solid ${border}`,
                  letterSpacing: "0.02em",
                }}
              >
                Create Your MEOK
              </Link>
            </div>
            <p
              style={{
                marginTop: "24px",
                fontSize: "13px",
                color: muted,
              }}
            >
              Sovereign tier &mdash; \u00a312/month &mdash; cancel any time
            </p>
          </section>

          {/* ── Related reading ───────────────────────────────────────────────── */}
          <section style={{ marginBottom: "48px" }}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "20px",
              }}
            >
              Related reading
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                {
                  href: "/blog/what-is-ralph-mode",
                  title: "What Is Ralph Mode?",
                  desc: "The one-paragraph answer for when you just need the quick version.",
                },
                {
                  href: "/blog/meok-work-os-explained",
                  title: "The Sovereign Work OS Explained",
                  desc: "How MEOK\u2019s full suite of work tools fits together around your goals.",
                },
                {
                  href: "/blog/morning-brief-guide",
                  title: "The Morning Brief Guide",
                  desc: "Start each day knowing exactly what matters, with context your AI already holds.",
                },
                {
                  href: "/blog/meok-for-adhd",
                  title: "MEOK for ADHD",
                  desc: "How MEOK\u2019s architecture supports neurodivergent focus patterns.",
                },
                {
                  href: "/blog/sovereign-ai-explained",
                  title: "Sovereign AI Explained",
                  desc: "What it means to own your AI, your data, and your context.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    padding: "16px 20px",
                    background: surface,
                    border: `1px solid ${border}`,
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      color: gold,
                      flexShrink: 0,
                      paddingTop: "1px",
                    }}
                  >
                    &rarr;
                  </span>
                  <span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: text,
                        marginBottom: "4px",
                      }}
                    >
                      {link.title}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: muted,
                      }}
                    >
                      {link.desc}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Footer note ───────────────────────────────────────────────────── */}
          <footer
            style={{
              borderTop: `1px solid ${divider}`,
              paddingTop: "32px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "13px",
                  color: muted,
                  marginBottom: "4px",
                }}
              >
                Written by{" "}
                <strong style={{ color: text }}>Nicholas Templeman</strong>
                {" "}&#8212; Founder, MEOK AI LABS
              </p>
              <p style={{ fontSize: "12px", color: muted }}>
                @meok_ai &mdash;{" "}
                <Link
                  href="/blog"
                  style={{ color: gold, textDecoration: "none" }}
                >
                  View all posts
                </Link>
              </p>
            </div>
            <div
              style={{
                fontSize: "12px",
                color: muted,
                textAlign: "right",
              }}
            >
              <p style={{ marginBottom: "4px" }}>
                &copy; 2026 MEOK AI LABS
              </p>
              <p>
                <Link
                  href="/privacy"
                  style={{ color: muted, textDecoration: "none" }}
                >
                  Privacy Covenant
                </Link>
              </p>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
