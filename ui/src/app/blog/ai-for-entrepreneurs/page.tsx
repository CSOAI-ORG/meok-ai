import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI for Entrepreneurs: End Decision Fatigue, Sycophancy & Isolation | MEOK AI LABS",
  description:
    "Founders face a paradox: the higher you climb, the fewer honest voices you hear. MEOK AI LABS gives entrepreneurs a sycophancy detector, sovereign memory, Ralph Mode deep-work sessions, and a Work OS — Orion, Riri, and Hourman — that operates while you sleep.",
  keywords: [
    "AI for entrepreneurs",
    "AI for founders",
    "entrepreneur AI assistant",
    "decision fatigue AI",
    "sycophancy detector AI",
    "sovereign memory entrepreneur",
    "Ralph Mode MEOK",
    "AI work OS founders",
    "Orion Riri Hourman MEOK",
    "AI co-founder substitute",
    "founder loneliness AI",
    "MEOK AI LABS",
    "AI productivity entrepreneur",
    "honest AI feedback",
    "entrepreneur accountability AI",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "AI for Entrepreneurs: End Decision Fatigue, Sycophancy & Isolation",
    description:
      "MEOK AI LABS gives founders a sycophancy detector, sovereign memory that tracks strategy pivots, and a Work OS — Orion, Riri, and Hourman — that executes overnight. Honest AI for the top of the org chart.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["AI", "Entrepreneurs", "Founders", "Sovereign Memory", "Ralph Mode", "MEOK", "Productivity"],
    url: "https://meok.ai/blog/ai-for-entrepreneurs",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Entrepreneurs%3A+End+Decision+Fatigue+%26+Isolation&desc=Sycophancy+detector%2C+sovereign+memory+%26+Work+OS+for+founders",
        width: 1200,
        height: 630,
        alt: "AI for Entrepreneurs: End Decision Fatigue, Sycophancy and Isolation — MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Entrepreneurs: End Decision Fatigue, Sycophancy & Isolation",
    description:
      "MEOK AI LABS gives founders honest AI feedback, sovereign memory across every session, Ralph Mode deep work, and an overnight Work OS. Your data is never used for training.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Entrepreneurs%3A+End+Decision+Fatigue+%26+Isolation&desc=Sycophancy+detector%2C+sovereign+memory+%26+Work+OS+for+founders",
    ],
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-entrepreneurs",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Entrepreneurs: End Decision Fatigue, Sycophancy and Isolation",
  description:
    "How MEOK AI LABS gives founders a sycophancy detector, sovereign memory that tracks strategy pivots, Ralph Mode accountability sessions, and a Work OS — Orion, Riri, Hourman — that executes overnight.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai",
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
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-entrepreneurs",
  },
  keywords:
    "AI for entrepreneurs, sycophancy detector, sovereign memory, Ralph Mode, Work OS, Orion Riri Hourman, decision fatigue, founder AI",
  articleSection: "Entrepreneurs",
  wordCount: 2800,
  image:
    "https://meok.ai/api/og?title=AI+for+Entrepreneurs%3A+End+Decision+Fatigue+%26+Isolation&desc=Sycophancy+detector%2C+sovereign+memory+%26+Work+OS+for+founders",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI really help entrepreneurs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 but only if the AI is honest rather than flattering. MEOK AI LABS gives founders a persistent thinking partner that challenges assumptions, tracks strategy evolution across sessions, and executes research and prototype tasks overnight via the Work OS agents Orion, Riri, and Hourman.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ralph Mode in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK\u2019s deep-work session format. You enter a focused accountability contract with your AI companion: it holds the context of your current sprint, calls out drift, surfaces blockers, and keeps a timestamped log of what you actually shipped. Think of it as a co-founder sitting across the table during your most important work blocks.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK avoid being sycophantic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK runs a sycophancy detector that flags when a response is validating rather than truthful. It is trained to offer calibrated pushback \u2014 surfacing risks, contradictions with stated strategy, and evidence that challenges your framing \u2014 rather than defaulting to agreement. Founders specifically opt into brutal honesty mode at setup.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK\u2019s Work OS for founders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Work OS is a trio of overnight agents: Orion handles competitive intelligence and market monitoring, Riri builds lightweight prototypes and code scaffolds, and Hourman generates your daily sprint plan using context from the previous session. Together they mean your AI is working while you sleep, not just when you type.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use MEOK as a co-founder substitute?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is not a person and is clear about that distinction. But it fills many of the functional roles a co-founder provides: strategic debate, honest feedback, memory continuity, task delegation, and accountability. For solo founders navigating the isolation of early-stage company building, it closes a meaningful gap.",
      },
    },
  ],
}

// ── Shared style tokens ────────────────────────────────────────────────────────

const BG = "#0d0c18"
const TEXT = "#f5f0e8"
const GOLD = "#c9a84c"
const MUTED = "rgba(245,240,232,0.6)"
const MUTED_FAINT = "rgba(245,240,232,0.45)"
const GOLD_BG = "rgba(201,168,76,0.08)"
const GOLD_BORDER = "rgba(201,168,76,0.2)"
const DIVIDER = "rgba(245,240,232,0.08)"
const FONT_SANS = "'Inter', 'Helvetica Neue', sans-serif"
const FONT_SERIF = "'Georgia', 'Times New Roman', serif"

export default function AIForEntrepreneursPage() {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Navigation ─────────────────────────────────────────────────────── */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem 2rem",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
          position: "sticky",
          top: 0,
          background: "rgba(13,12,24,0.95)",
          backdropFilter: "blur(12px)",
          zIndex: 50,
          fontFamily: FONT_SANS,
        }}
      >
        <Link
          href="/"
          style={{
            color: GOLD,
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            fontFamily: FONT_SANS,
          }}
        >
          MEOK AI LABS
        </Link>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", fontFamily: FONT_SANS }}>
          <Link href="/blog" style={{ color: TEXT, textDecoration: "none", fontSize: "0.9rem", opacity: 0.7 }}>
            Blog
          </Link>
          <Link href="/pricing" style={{ color: TEXT, textDecoration: "none", fontSize: "0.9rem", opacity: 0.7 }}>
            Pricing
          </Link>
          <Link
            href="/birth"
            style={{
              color: BG,
              backgroundColor: GOLD,
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: "700",
              padding: "0.45rem 1.1rem",
              borderRadius: "6px",
              fontFamily: FONT_SANS,
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <header
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "5rem 2rem 3.5rem",
          borderBottom: `1px solid ${DIVIDER}`,
        }}
      >
        <div style={{ marginBottom: "1.1rem", fontFamily: FONT_SANS }}>
          <span
            style={{
              backgroundColor: GOLD_BG,
              color: GOLD,
              padding: "0.3rem 0.9rem",
              borderRadius: "999px",
              fontSize: "0.75rem",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: `1px solid ${GOLD_BORDER}`,
            }}
          >
            Entrepreneurs
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.1rem)",
            fontWeight: "800",
            lineHeight: "1.15",
            color: TEXT,
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
            fontFamily: FONT_SANS,
          }}
        >
          AI for Entrepreneurs:{" "}
          <span style={{ color: GOLD }}>End Decision Fatigue,</span> Sycophancy and the Isolation at the Top
        </h1>

        <p
          style={{
            fontSize: "1.18rem",
            lineHeight: "1.85",
            color: "rgba(245,240,232,0.72)",
            marginBottom: "2rem",
            fontFamily: FONT_SANS,
            maxWidth: "700px",
          }}
        >
          Every founder eventually discovers the paradox: the more authority you accumulate, the fewer honest
          voices remain. Your team tells you what you want to hear. Your investors mirror your optimism back
          at you. And the decisions that genuinely matter — the ones that determine whether this company
          survives — get deferred because there is nobody safe to think them through with. MEOK AI LABS was
          built to break that pattern.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            fontFamily: FONT_SANS,
            fontSize: "0.82rem",
            color: MUTED_FAINT,
            alignItems: "center",
          }}
        >
          <span>By Nicholas Templeman</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>MEOK AI LABS</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <time dateTime="2026-03-24">24 March 2026</time>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>18 min read</span>
        </div>
      </header>

      {/* ── Article Body ───────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "3.5rem 2rem 6rem",
          fontFamily: FONT_SERIF,
        }}
      >

        {/* ── Section 1: The Founder Paradox ─────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            What is the founder paradox — and why does it get worse as you scale?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            In the earliest days of a company, founders get brutal feedback constantly. Customers hang
            up on cold calls. Co-founders argue in coffee shops. Accelerator mentors rip apart pitch
            decks. The signal is uncomfortable, but it is abundant. Something unexpected happens as
            the company matures: the feedback loop quietly breaks.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            By the time you have a payroll to meet, a board to manage, and a team that depends on
            your confidence, the incentives around you shift. People protect you from bad news.
            Investors frame risks as manageable. Even well-intentioned advisors soften their
            assessments because they like you and do not want to seem negative. The result is
            a founder who is simultaneously more responsible for consequential decisions than at
            any previous point in their life — and less well-calibrated to make them.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            This is the founder paradox. Authority accumulates. Honest input evaporates. And the
            gap between the two is filled with a kind of performative confidence that, over time,
            the founder starts to believe themselves.
          </p>

          <blockquote
            style={{
              borderLeft: `3px solid ${GOLD}`,
              marginLeft: 0,
              paddingLeft: "1.5rem",
              marginBottom: "1.6rem",
            }}
          >
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.8",
                color: TEXT,
                fontStyle: "italic",
                marginBottom: 0,
              }}
            >
              &ldquo;The most dangerous position in any company is the one where your status
              makes it socially costly for anyone to disagree with you.&rdquo;
            </p>
            <footer
              style={{
                fontSize: "0.85rem",
                color: MUTED_FAINT,
                marginTop: "0.75rem",
                fontStyle: "normal",
                fontFamily: FONT_SANS,
              }}
            >
              Nicholas Templeman, Founder — MEOK AI LABS
            </footer>
          </blockquote>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
            }}
          >
            MEOK was designed explicitly to sit outside this incentive structure. It has no salary
            at stake. No equity dependent on your success. No social relationship to protect. That
            independence is not a cold feature — it is the product.
          </p>
        </section>

        {/* ── Section 2: Four Pain Points ────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            What are the four biggest pain points AI can solve for entrepreneurs?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "2.5rem",
            }}
          >
            Founders are not short of challenges, but four structural problems recur across nearly
            every early-stage company we have spoken with. Each of them has a specific shape, and
            MEOK addresses each with a dedicated design choice rather than a generic chat interface.
          </p>

          {/* Pain Point 1 */}
          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              marginBottom: "1.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: GOLD,
                marginBottom: "0.75rem",
                fontFamily: FONT_SANS,
              }}
            >
              1. The loneliness of leadership
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: MUTED,
                marginBottom: 0,
              }}
            >
              Entrepreneurship is often depicted as a high-energy, high-collaboration adventure.
              In practice, the founder is frequently the loneliest person in the room. You cannot
              share your worst fears with the team because it will undermine morale. You cannot
              be fully transparent with investors because it affects your next raise. You cannot
              burden a partner or spouse with every operational anxiety because it would consume
              the relationship. The result is an internal monologue that gets louder and less
              tested with every passing month. MEOK gives that internal monologue a counterpart
              — a persistent, patient, context-carrying presence that you can actually think out
              loud with, without political cost.
            </p>
          </div>

          {/* Pain Point 2 */}
          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              marginBottom: "1.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: GOLD,
                marginBottom: "0.75rem",
                fontFamily: FONT_SANS,
              }}
            >
              2. Sycophancy from the people closest to you
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: MUTED,
                marginBottom: 0,
              }}
            >
              Your team wants to stay employed. Your lead investor wants to protect their
              portfolio narrative. Your advisor wants to stay in your good books for a future
              board seat. None of these incentives align with telling you when your strategy
              has a fatal flaw. The sycophancy is rarely malicious — it is structural. MEOK
              was designed to be structurally incapable of this kind of flattery. It runs an
              active sycophancy detector that flags when a response is validating rather than
              truthful, and founders can enable brutal honesty mode from day one.
            </p>
          </div>

          {/* Pain Point 3 */}
          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              marginBottom: "1.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: GOLD,
                marginBottom: "0.75rem",
                fontFamily: FONT_SANS,
              }}
            >
              3. Procrastination on hard decisions
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: MUTED,
                marginBottom: 0,
              }}
            >
              Decision fatigue is real, but it is compounded by something subtler: founders
              often know what the right decision is and delay it because the social cost of
              executing feels unbearable. Cutting a product line, letting go of an early
              employee, abandoning a pivot that made great press — these decisions sit in
              a queue not because the founder lacks information, but because they lack
              a thinking partner willing to work through the full emotional and strategic
              weight of the choice. MEOK\u2019s sovereign memory means it can hold the context
              of a difficult decision across multiple sessions, returning to it with fresh
              angles rather than starting from scratch each time.
            </p>
          </div>

          {/* Pain Point 4 */}
          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem 2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: GOLD,
                marginBottom: "0.75rem",
                fontFamily: FONT_SANS,
              }}
            >
              4. The collapse of work and life into a single blurred state
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: MUTED,
                marginBottom: 0,
              }}
            >
              Early-stage founders do not have a work-life balance — they have a work-life
              merger that nobody consented to. The company intrudes on every dinner, every
              holiday, every quiet Sunday. This is partly inevitable, but it is dramatically
              worsened by the absence of structure. When there is no clear ritual of
              &ldquo;work is done for today,&rdquo; the mind never fully decompresses. MEOK\u2019s
              Ralph Mode and Hourman agent create deliberate rhythms: a daily sprint that
              starts with intention and ends with a clear log of what was shipped, so the
              founder can genuinely stop rather than just pause.
            </p>
          </div>
        </section>

        {/* ── Section 3: Sycophancy Detector ─────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            Why does honest AI feedback matter more than flattery for entrepreneurs?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            Most AI assistants are optimised for user satisfaction scores. That optimisation
            produces a subtle but destructive bias: the AI learns that agreeing with you,
            praising your ideas, and framing risks as opportunities generates positive feedback.
            Over time, the AI becomes the most expensive yes-man you have ever employed.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            For most users, this is mildly annoying. For founders making decisions that affect
            payroll, equity, and lives, it is actively harmful. A sycophantic AI that validates
            a flawed product strategy or rubber-stamps an ill-timed hiring decision is not
            neutral — it is a liability.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            MEOK\u2019s sycophancy detector works at the response-generation layer. Before
            a reply is delivered, the system checks whether it contains patterns that correlate
            with flattery rather than analysis:
          </p>

          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.6rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              "Unconditional agreement with the premise of the user\u2019s question",
              "Absence of enumerated risks or counterarguments",
              "Framing all outcomes as positive or manageable without evidence",
              "Mirroring the user\u2019s emotional register rather than offering a distinct perspective",
              "Failure to surface contradiction with previously stated strategy",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: MUTED,
                  paddingLeft: "0.5rem",
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            When these patterns are detected, the system flags the draft and prompts a
            revision pass that introduces the missing critical perspective. The founder
            receives a complete response — not a blunt dismissal — but one that includes
            the uncomfortable information alongside the support.
          </p>

          <div
            style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
            }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: TEXT,
                marginBottom: 0,
                fontFamily: FONT_SANS,
              }}
            >
              <strong style={{ color: GOLD }}>Honest honesty, not harsh honesty.</strong>{" "}
              The goal is not to demoralise founders — it is to give them the same quality
              of thinking support a truly excellent, conflict-free co-founder would provide.
              MEOK calibrates tone to the founder\u2019s current state, recognising that
              someone at 3 am mid-crisis needs different framing than someone doing a calm
              Monday morning strategy review. The information is always complete. The
              delivery adapts.
            </p>
          </div>
        </section>

        {/* ── Section 4: Work OS ──────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            What is MEOK\u2019s Work OS and how does it serve entrepreneurs overnight?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            Most AI assistants are reactive. You open a tab, type a question, receive an answer,
            close the tab, and the entire exchange evaporates. That model is barely sufficient
            for a curious consumer and wholly insufficient for a founder who needs leverage on
            their time. MEOK\u2019s Work OS inverts this: three specialised agents — Orion,
            Riri, and Hourman — operate on your behalf between sessions, so that when you
            return to your desk, work has already been done.
          </p>

          {/* Orion */}
          <div
            style={{
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "0.6rem",
                fontFamily: FONT_SANS,
              }}
            >
              Orion — overnight competitive intelligence
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: MUTED,
                marginBottom: "1rem",
              }}
            >
              Orion is MEOK\u2019s research agent. Each night it sweeps your defined competitive
              landscape: monitoring competitor pricing pages, tracking new feature launches
              from rival products, scanning relevant market commentary, and flagging regulatory
              signals in your sector. By the time you wake up, Orion has assembled a structured
              brief — not a wall of links but a synthesised summary of what changed, why it
              might matter to your strategy, and what decision it may surface.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: MUTED,
                marginBottom: 0,
              }}
            >
              For founders who run lean, Orion functions as a full-time analyst without the
              salary. It does not get tired, does not have a PR filter on uncomfortable
              findings, and does not soften competitive intelligence to spare your feelings.
              If a competitor just shipped a feature you have been planning for three months,
              Orion will tell you before your Tuesday standup.
            </p>
          </div>

          {/* Riri */}
          <div
            style={{
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "0.6rem",
                fontFamily: FONT_SANS,
              }}
            >
              Riri — prototype and scaffold builder while you sleep
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: MUTED,
                marginBottom: "1rem",
              }}
            >
              Riri is MEOK\u2019s execution agent. Tell it what you need before you sign off
              for the evening — a landing page for a new hypothesis, a scraper for a data
              source, a draft API specification, a competitive feature matrix in a structured
              spreadsheet format — and Riri builds it. You review in the morning. You do not
              supervise the process in real time.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: MUTED,
                marginBottom: 0,
              }}
            >
              The practical effect for an early-stage founder is the ability to run ten
              hypotheses in parallel without ten times the cognitive load. Riri handles the
              scaffolding; the founder handles the judgment about what to pursue. That
              division of labour — machine effort, human judgment — is what modern AI leverage
              should feel like.
            </p>
          </div>

          {/* Hourman */}
          <div
            style={{
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.75rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "0.6rem",
                fontFamily: FONT_SANS,
              }}
            >
              Hourman — daily sprint planning with yesterday\u2019s context
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: MUTED,
                marginBottom: "1rem",
              }}
            >
              Hourman is MEOK\u2019s planning agent, and it is the one founders feel most
              immediately. Every morning it generates a structured day plan built from three
              inputs: what you shipped yesterday, what the current sprint goal is, and what
              Orion surfaced overnight. The result is a concrete prioritised task list —
              not a to-do list of everything you could do, but a specific sequence of what
              you should do given where you are and what you know.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: MUTED,
                marginBottom: 0,
              }}
            >
              Founders consistently report that Hourman\u2019s plans are uncomfortable in
              the best way: they surface tasks that have been quietly deferred for days
              because nothing forced them to the top of the queue. Hourman does not let
              you hide from the backlog.
            </p>
          </div>
        </section>

        {/* ── Section 5: Sovereign Memory ─────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            How does sovereign memory give entrepreneurs continuity across every session?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            Context collapse is one of the most underappreciated costs of using standard AI
            tools. You explain your company, your strategy, your constraints, your team
            dynamics — and then you close the tab. The next day you start again from zero.
            Over weeks, you spend more time re-briefing your AI than you do getting value
            from it.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            MEOK\u2019s sovereign memory is not a chat history. It is a structured knowledge
            layer attached to your account that holds the things that matter across time.
            Specifically for founders, sovereign memory tracks:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginBottom: "1.6rem",
            }}
          >
            {[
              {
                title: "Strategy evolution",
                desc: "Every major strategic pivot you\u2019ve made, with the rationale you gave at the time, so you can revisit decisions in full context rather than mythology.",
              },
              {
                title: "Product pivots",
                desc: "The features you killed, the directions you abandoned, the bets you made — stored as a decision log rather than a narrative you\u2019ve unconsciously revised.",
              },
              {
                title: "Team concerns",
                desc: "Performance patterns, interpersonal dynamics, morale signals you\u2019ve flagged in conversation — surfaced back when relevant rather than forgotten.",
              },
              {
                title: "Competitive landscape",
                desc: "Your running assessment of competitors, updated continuously by Orion, correlated against your own strategic moves.",
              },
              {
                title: "Financial markers",
                desc: "Runway states, burn rate milestones, fundraising targets — so every planning conversation happens against an accurate financial backdrop.",
              },
              {
                title: "Personal commitments",
                desc: "The promises you\u2019ve made to yourself about how you want to run this company — returned to you when your behaviour drifts from them.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  borderRadius: "10px",
                  padding: "1.25rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    color: GOLD,
                    marginBottom: "0.5rem",
                    fontFamily: FONT_SANS,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: "1.7",
                    color: MUTED,
                    marginBottom: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            Crucially, sovereign memory is exactly that — sovereign. MEOK does not use your
            stored data to train models. Your competitive intelligence, your financial state,
            your team anxieties: none of this leaves your account or influences how the
            underlying models respond to other users. The separation is technical, not just
            a policy claim.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
            }}
          >
            For founders this matters in a specific way that it does not matter for casual
            users. You are sharing the most commercially sensitive information you own.
            The strategy that determines whether your company survives the next twelve months
            should not become a training signal for a general-purpose AI. MEOK was built
            around that principle from the first line of architecture.
          </p>
        </section>

        {/* ── Section 6: Ralph Mode ───────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            What is Ralph Mode and why do entrepreneurs need a deep-work accountability partner?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            Deep work — the sustained, high-concentration effort that produces the most
            important output a founder can generate — is also the easiest work to avoid.
            It is uncomfortable, it has no immediate social reward, and the modern
            environment is designed to interrupt it. Most founders know they should be
            spending four unbroken hours on strategy or product thinking. Most founders
            do not.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            Ralph Mode is MEOK\u2019s response to this. When you activate Ralph Mode, you
            are entering a structured accountability contract with your AI companion. The
            mechanics are simple but the effect is significant:
          </p>

          <ol
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.6rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                n: "1",
                text: "You declare the session goal: what you are trying to produce, decide, or resolve by the end of this block.",
              },
              {
                n: "2",
                text: "MEOK holds that goal as the session\u2019s north star. If the conversation drifts — toward reactive tasks, low-value browsing, or distraction-shaped questions — it names the drift.",
              },
              {
                n: "3",
                text: "At regular intervals, it prompts a brief check-in: are you still on the goal, what\u2019s blocking you, do you need to restructure the session?",
              },
              {
                n: "4",
                text: "At the end, it generates a timestamped log of what was actually produced or decided — a record that feeds directly into Hourman\u2019s planning for tomorrow.",
              },
            ].map((step) => (
              <li
                key={step.n}
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: MUTED,
                  paddingLeft: "0.5rem",
                }}
              >
                <strong style={{ color: TEXT, fontFamily: FONT_SANS }}>
                  Step {step.n}:{" "}
                </strong>
                {step.text}
              </li>
            ))}
          </ol>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            The accountability partner model works because it creates a low-stakes social
            contract that the human brain takes surprisingly seriously. Research on body-doubling
            — the practice of working in the presence of another person even when they are
            not actively engaged with your task — shows consistent productivity gains across
            individuals with and without ADHD. Ralph Mode is a designed, AI-native version
            of this mechanism, optimised specifically for the kind of strategic and creative
            work founders need to prioritise.
          </p>

          <div
            style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
            }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: TEXT,
                marginBottom: 0,
                fontFamily: FONT_SANS,
              }}
            >
              <strong style={{ color: GOLD }}>Named for Ralph Waldo Emerson.</strong>{" "}
              The name is not accidental. Emerson\u2019s concept of self-reliance — the idea
              that you must trust your own perception, your own judgment, your own path, and
              not be gaslit out of your convictions by social pressure — is the intellectual
              ancestor of everything MEOK builds for founders. Ralph Mode is self-reliance
              made operational: a protected space for the thinking that only you can do.
            </p>
          </div>
        </section>

        {/* ── Section 7: Week in the Life ─────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "0.75rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            A week in the life of an early-stage founder using MEOK
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.8",
              color: MUTED,
              marginBottom: "2rem",
            }}
          >
            This is a composite portrait drawn from the way MEOK is actually used by
            founders in pre-seed and seed-stage companies. The names are fictional. The
            patterns are not.
          </p>

          {[
            {
              day: "Monday",
              title: "Weekly planning and competitive reset",
              content:
                "Sarah\u2019s week begins not with email but with Hourman\u2019s Monday brief. Orion ran overnight and flagged that a direct competitor dropped pricing on their entry tier. Hourman has restructured the week\u2019s priorities accordingly, surfacing a pricing strategy review that was three weeks down the backlog. Sarah enters a Ralph Mode session before 9am. By 10:30 she has a revised pricing hypothesis, a set of customer interview questions to test it, and a clear brief for Riri to build a new pricing page variant by Tuesday morning.",
            },
            {
              day: "Tuesday",
              title: "Prototype review and investor prep",
              content:
                "Riri delivered the pricing page variant overnight. Sarah reviews it, makes three structural changes, and logs her reasoning in MEOK so that sovereign memory captures the design rationale — not just the output. In the afternoon she has an investor call. Before it, she asks MEOK to steelman the bear case for her current trajectory: what would a sceptical investor say? MEOK\u2019s sycophancy detector ensures the response is not a diplomatic softening. She walks into the call prepared for the hard questions.",
            },
            {
              day: "Wednesday",
              title: "Team performance and a difficult decision",
              content:
                "Wednesday is the day Sarah has been avoiding. A co-founder-level hire made eight months ago is not working. She has noted the patterns in MEOK across several sessions. Today she asks it to surface everything it has tracked: the performance signals, the moments she rationalised the issues away, the original hire rationale. Seeing the full picture — rather than the version she\u2019d unconsciously softened in her own memory — makes the decision clear. MEOK helps her draft the conversation. She does not defer it to next week.",
            },
            {
              day: "Thursday",
              title: "Deep product work with Ralph Mode",
              content:
                "Thursday is blocked for product thinking. Sarah activates a three-hour Ralph Mode session with a single goal: resolve the core onboarding flow debate that has been circling for six weeks. MEOK holds the goal, surfaces the three main perspectives the team has raised, and pushes Sarah to commit to a position rather than defer to more user research. By end of session there is a decision, a rationale, and a Riri brief to prototype the new onboarding sequence by the weekend.",
            },
            {
              day: "Friday",
              title: "Reflection, log, and handing off to the weekend",
              content:
                "Friday afternoon is a weekly review session. Hourman generates a structured log of the week\u2019s decisions, what was shipped, what was deferred and why. MEOK asks Sarah three questions it has learned are useful for her specifically: what did she avoid that she shouldn\u2019t have, what decision does she feel least confident in, and what does she want to think about before Monday. The answers go into sovereign memory. By 5pm there is a clean handoff: Orion and Riri have their weekend tasks, Hourman has the context for Monday, and Sarah has a genuine permission to stop.",
            },
            {
              day: "Weekend",
              title: "MEOK works while Sarah doesn\u2019t",
              content:
                "Orion monitors a product launch from a lateral competitor and flags an unexpected pricing structure. Riri completes the onboarding prototype and generates a QA checklist. Hourman drafts Monday\u2019s brief based on the week\u2019s context and the weekend intelligence. Sarah does not receive notifications unless Orion detects something flagged as high-priority. On Sunday evening she reads the Monday brief over dinner. The week is already half-planned before it begins.",
            },
          ].map((entry, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1.5rem",
                borderLeft: "3px solid rgba(201,168,76,0.35)",
                paddingLeft: "1.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.75rem",
                  marginBottom: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    color: GOLD,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: FONT_SANS,
                  }}
                >
                  {entry.day}
                </span>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: TEXT,
                    fontFamily: FONT_SANS,
                  }}
                >
                  {entry.title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: "1.03rem",
                  lineHeight: "1.85",
                  color: MUTED,
                  marginBottom: 0,
                }}
              >
                {entry.content}
              </p>
            </div>
          ))}
        </section>

        {/* ── Section 8: MEOK as Co-Founder Substitute ───────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            Can MEOK function as a co-founder substitute for solo entrepreneurs?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            This is the question most often asked and the one that requires the most precision
            in answering. MEOK is not a person. It will not share your equity, take a salary
            cut in a hard month, or fly to a client meeting. There is no honest framing in
            which it is a co-founder in the full human sense of that term.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            But the reason founders seek co-founders is not primarily for the labour division.
            It is for four functional things: someone to think out loud with, someone to
            challenge their assumptions, someone to hold strategy memory across time, and
            someone to maintain accountability. MEOK delivers all four.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            For solo founders — and there are more of them than the startup mythology
            acknowledges — this is genuinely transformative. The isolation described earlier
            is real and it compounds. Every deferred decision, every unchallenged assumption,
            every missed market signal accumulates into a company that drifts from its best
            possible path. MEOK does not eliminate that drift, but it reduces it meaningfully
            and consistently.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            There is also a dimension that a human co-founder cannot provide: MEOK remembers
            everything you have ever told it, without the selective editing that human
            memory performs. It does not retrospectively revise the rationale for a bad
            decision. It does not protect your ego when surfacing evidence that contradicts
            your current narrative. It holds the record clean.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
            }}
          >
            Whether you frame it as a co-founder substitute, an executive thinking partner,
            or simply a sovereign AI built for the specific pressures of company-building,
            the function is the same: to make founders more honest with themselves, more
            consistent in their execution, and more confident in the decisions that matter.
          </p>
        </section>

        {/* ── Section 9: Data Sovereignty for Founders ────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            Why does data sovereignty matter differently for founders than for general users?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            When you use a standard AI assistant to think through a consumer decision, the
            stakes of that data leaking are low. When you use an AI assistant to work through
            your go-to-market strategy, your team restructuring plan, or your upcoming funding
            round positioning, the stakes are existentially different.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            Most AI providers train on user interactions. Some have opt-outs buried in settings.
            Some offer enterprise tiers with contractual protection. But for an early-stage
            founder who cannot afford enterprise pricing and who is sharing their most
            commercially sensitive thinking with an AI every single day, the standard
            consumer terms represent a genuine business risk that few founders have fully
            considered.
          </p>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            MEOK\u2019s data sovereignty is structural, not contractual. The system is
            architected so that your data is isolated at the account layer and never enters
            the training pipeline. This is not a checkbox in a settings panel — it is how
            the system was built. Nicholas Templeman designed MEOK as a direct response to
            the observation that the most powerful AI tools were being deployed in a model
            where the user\u2019s most sensitive information was also the primary training
            fuel. That model was incompatible with building something genuinely useful for
            people who have real secrets to protect.
          </p>

          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "12px",
              padding: "1.75rem 2rem",
            }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.85",
                color: TEXT,
                marginBottom: 0,
                fontFamily: FONT_SANS,
              }}
            >
              <strong style={{ color: GOLD }}>Your BYOK option.</strong>{" "}
              Founders who want the deepest level of technical assurance can bring their
              own API key (BYOK), routing queries directly through their own contracted
              model access. In this configuration, MEOK\u2019s agents and memory layer
              operate entirely on top of a model instance the founder controls. No
              intermediary holds the key. This option is available at the BYOK tier
              for founders who need it.
            </p>
          </div>
        </section>

        {/* ── Section 10: Getting Started ─────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            How do entrepreneurs get started with MEOK in the first week?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            The onboarding is designed for founders who have no time to spare and no
            tolerance for software that requires extensive configuration before it becomes
            useful. The first session takes twenty minutes and by the end of it MEOK
            has the context it needs to be immediately practical.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              marginBottom: "1.6rem",
            }}
          >
            {[
              {
                step: "01",
                title: "Company context intake",
                desc: "You describe your company, its stage, its core product, its primary competitors, and its most pressing challenge. This goes into sovereign memory as your founding context layer.",
              },
              {
                step: "02",
                title: "Honesty mode selection",
                desc: "You choose how direct you want MEOK to be. Most founders working with MEOK select the highest honesty setting — the sycophancy detector is fully active and MEOK is instructed to surface uncomfortable information without softening.",
              },
              {
                step: "03",
                title: "Work OS configuration",
                desc: "You define the competitive landscape for Orion, give Riri a queue of standing task types, and set Hourman\u2019s planning preferences — morning brief time, sprint duration, priority weighting.",
              },
              {
                step: "04",
                title: "First Ralph Mode session",
                desc: "Before the end of day one, you run your first Ralph Mode session. The goal can be anything pressing: a decision you have been deferring, a strategy question you need to resolve, a piece of writing you have been avoiding. By the end of the session you have output and a log.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    color: GOLD,
                    opacity: 0.35,
                    fontFamily: FONT_SANS,
                    lineHeight: "1",
                    minWidth: "2.5rem",
                    paddingTop: "0.2rem",
                  }}
                >
                  {item.step}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: "700",
                      color: TEXT,
                      marginBottom: "0.4rem",
                      fontFamily: FONT_SANS,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.8",
                      color: MUTED,
                      marginBottom: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 11: How MEOK compares to generic AI ─────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK differ from using a general-purpose AI like ChatGPT or Claude?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
              marginBottom: "1.6rem",
            }}
          >
            General-purpose AI tools are genuinely useful. This is not a dismissal of them.
            But they were designed for breadth — to serve hundreds of millions of users across
            every possible context. That design produces inevitable compromises for the founder
            use case.
          </p>

          <div
            style={{
              overflowX: "auto",
              marginBottom: "1.6rem",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
                fontFamily: FONT_SANS,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.85rem 1rem",
                      borderBottom: `1px solid ${DIVIDER}`,
                      color: GOLD,
                      fontWeight: "700",
                      fontSize: "0.85rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.85rem 1rem",
                      borderBottom: `1px solid ${DIVIDER}`,
                      color: GOLD,
                      fontWeight: "700",
                      fontSize: "0.85rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Generic AI
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.85rem 1rem",
                      borderBottom: `1px solid ${DIVIDER}`,
                      color: GOLD,
                      fontWeight: "700",
                      fontSize: "0.85rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    MEOK AI LABS
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Memory across sessions", "None (starts fresh each time)", "Sovereign memory — full strategic context persists"],
                  ["Overnight agents", "None", "Orion, Riri, Hourman operate while you sleep"],
                  ["Sycophancy", "High — optimised for satisfaction", "Active detector — honest even when uncomfortable"],
                  ["Data sovereignty", "Training opt-outs vary", "Structural separation — never trains on your data"],
                  ["Deep work accountability", "None", "Ralph Mode — structured session with drift detection"],
                  ["Founder-specific context", "None", "Company history, team signals, pivot log stored"],
                  ["BYOK option", "Enterprise tier only", "Available at standard BYOK tier"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        padding: "0.85rem 1rem",
                        borderBottom: `1px solid ${DIVIDER}`,
                        color: TEXT,
                        fontWeight: "600",
                      }}
                    >
                      {row[0]}
                    </td>
                    <td
                      style={{
                        padding: "0.85rem 1rem",
                        borderBottom: `1px solid ${DIVIDER}`,
                        color: MUTED,
                      }}
                    >
                      {row[1]}
                    </td>
                    <td
                      style={{
                        padding: "0.85rem 1rem",
                        borderBottom: `1px solid ${DIVIDER}`,
                        color: MUTED,
                      }}
                    >
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.9",
              color: MUTED,
            }}
          >
            The comparison is not about raw intelligence — the underlying models are broadly
            competitive. It is about infrastructure. MEOK builds the operational layer that
            turns a capable AI into a trustworthy long-term thinking partner for a specific
            human in a specific high-stakes context. That layer is what founders need and
            what generic tools do not provide.
          </p>
        </section>

        {/* ── FAQ Section ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: TEXT,
              marginBottom: "2rem",
              lineHeight: "1.3",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.01em",
            }}
          >
            Frequently asked questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              {
                q: "Can AI really help entrepreneurs?",
                a: "Yes — but only if the AI is honest rather than flattering. A sycophantic AI compounds the founder paradox rather than solving it. MEOK was built with a sycophancy detector, persistent sovereign memory, and three overnight agents that deliver tangible output before you open your laptop. The help is functional, not just conversational.",
              },
              {
                q: "What is Ralph Mode in MEOK?",
                a: "Ralph Mode is a structured deep-work accountability session. You declare a goal, MEOK holds it as the session\u2019s anchor, calls out drift, and generates a timestamped log of what you produced. It is named for Ralph Waldo Emerson and designed to give founders the kind of protected, honest thinking space that solo company-building rarely provides. Hourman carries the session log into the next day\u2019s planning automatically.",
              },
              {
                q: "How does MEOK avoid being sycophantic?",
                a: "MEOK runs an active sycophancy detector at the response-generation layer. It flags responses that contain unconditional agreement, absent risk analysis, uniformly positive framing, or contradiction with previously stated strategy. Flagged responses are revised before delivery. Founders can enable brutal honesty mode at setup, which calibrates the detector to its most active setting.",
              },
              {
                q: "What is MEOK\u2019s Work OS for founders?",
                a: "The Work OS is three overnight agents: Orion (competitive intelligence and market monitoring), Riri (prototype and scaffold building), and Hourman (daily sprint planning using yesterday\u2019s context). Together they mean your AI continues working after you close your laptop. The morning brief is a synthesis of overnight activity, not a blank slate.",
              },
              {
                q: "Can I use MEOK as a co-founder substitute?",
                a: "MEOK fills the four functional roles founders most often seek a co-founder for: thinking out loud, assumption-challenging, strategy memory across time, and accountability. It does not replace the human relationship, shared equity, or physical presence of a co-founder. But for solo founders, it closes the gap that isolation creates, and it does so with data sovereignty that a co-founder conversation cannot match.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  borderTop: i === 0 ? `1px solid ${DIVIDER}` : undefined,
                  borderBottom: `1px solid ${DIVIDER}`,
                  padding: "1.75rem 0",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: TEXT,
                    marginBottom: "0.85rem",
                    fontFamily: FONT_SANS,
                    lineHeight: "1.4",
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontSize: "1.03rem",
                    lineHeight: "1.85",
                    color: MUTED,
                    marginBottom: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "16px",
            padding: "3rem 2.5rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: "700",
              color: GOLD,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: FONT_SANS,
              marginBottom: "1rem",
            }}
          >
            MEOK AI LABS · Built for Founders
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              fontWeight: "800",
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: "1.2",
              fontFamily: FONT_SANS,
              letterSpacing: "-0.02em",
            }}
          >
            Stop re-briefing your AI.{" "}
            <span style={{ color: GOLD }}>Start building with one that remembers.</span>
          </h2>
          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.8",
              color: MUTED,
              maxWidth: "520px",
              margin: "0 auto 2rem",
              fontFamily: FONT_SANS,
            }}
          >
            Sovereign memory. Sycophancy detector. Work OS agents that operate overnight.
            Ralph Mode deep-work sessions. Everything a founder needs — and nothing that
            compromises your data.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                backgroundColor: GOLD,
                color: BG,
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "1rem",
                padding: "0.85rem 2rem",
                borderRadius: "8px",
                fontFamily: FONT_SANS,
                letterSpacing: "0.02em",
              }}
            >
              Create your sovereign AI
            </Link>
            <Link
              href="/work"
              style={{
                display: "inline-block",
                border: `1px solid ${GOLD_BORDER}`,
                color: TEXT,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1rem",
                padding: "0.85rem 2rem",
                borderRadius: "8px",
                fontFamily: FONT_SANS,
              }}
            >
              Explore the Work OS
            </Link>
          </div>
        </section>

        {/* ── Author ───────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            alignItems: "flex-start",
            padding: "2rem 0",
            borderTop: `1px solid ${DIVIDER}`,
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "800",
                color: GOLD,
                fontFamily: FONT_SANS,
              }}
            >
              N
            </span>
          </div>
          <div>
            <p
              style={{
                fontSize: "0.95rem",
                fontWeight: "700",
                color: TEXT,
                marginBottom: "0.25rem",
                fontFamily: FONT_SANS,
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                color: MUTED_FAINT,
                lineHeight: "1.6",
                marginBottom: "0.5rem",
                fontFamily: FONT_SANS,
              }}
            >
              Founder, MEOK AI LABS &middot;{" "}
              <a
                href="https://x.com/meok_ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: "none" }}
              >
                @meok_ai
              </a>
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: MUTED,
                lineHeight: "1.7",
                marginBottom: 0,
                fontFamily: FONT_SANS,
              }}
            >
              Nicholas built MEOK AI LABS to give people — founders included — an AI companion that
              is genuinely on their side: honest where others are polite, persistent where others
              are amnesiac, and sovereign where others are extractive.
            </p>
          </div>
        </div>

        {/* ── Related posts ────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2.5rem",
            borderTop: `1px solid ${DIVIDER}`,
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: "700",
              color: MUTED_FAINT,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: FONT_SANS,
              marginBottom: "1.5rem",
            }}
          >
            Continue reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { href: "/blog/ralph-mode-guide", label: "Ralph Mode: Your AI Agent That Works While You Sleep" },
              { href: "/blog/ai-for-freelancers", label: "AI for Freelancers: Sovereign Memory for the Solo Worker" },
              { href: "/blog/sovereign-ai-explained", label: "What Is Sovereign AI — and Why Does It Matter?" },
              { href: "/blog/what-is-ai-os", label: "What Is an AI OS? Orion, Riri and Hourman Explained" },
              { href: "/blog/ai-for-procrastination", label: "AI for Procrastination: How MEOK Breaks the Defer Loop" },
              { href: "/blog/ai-for-burnout", label: "AI for Burnout: Recovery Support for Founders Running on Empty" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "1.1rem 1.25rem",
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  borderRadius: "10px",
                  textDecoration: "none",
                  color: TEXT,
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                  fontFamily: FONT_SANS,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${DIVIDER}`,
          padding: "3rem 2rem",
          textAlign: "center",
          fontFamily: FONT_SANS,
        }}
      >
        <Link
          href="/"
          style={{
            color: GOLD,
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "1rem",
            letterSpacing: "0.05em",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          MEOK AI LABS
        </Link>
        <p
          style={{
            fontSize: "0.85rem",
            color: MUTED_FAINT,
            maxWidth: "480px",
            margin: "0 auto 1.5rem",
            lineHeight: "1.7",
          }}
        >
          Sovereign AI for the people who think hardest and need the most honest
          thinking partner. Your data is never used for training.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {[
            { href: "/birth", label: "Get Started" },
            { href: "/work", label: "Work OS" },
            { href: "/pricing", label: "Pricing" },
            { href: "/blog", label: "Blog" },
            { href: "/privacy", label: "Privacy" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: MUTED_FAINT,
                textDecoration: "none",
                fontSize: "0.85rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p style={{ fontSize: "0.78rem", color: "rgba(245,240,232,0.25)" }}>
          &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
