import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI for Remote Workers: Beating Isolation and Staying Sharp When You Work from Home | MEOK AI LABS",
  description:
    "Four million permanent UK home workers face loneliness, cognitive drift, and the collapse of work-life structure. MEOK AI LABS offers a morning briefing, Ralph Mode for deep work, Sovereign Memory for work patterns, and the Pioneer archetype for momentum.",
  keywords: [
    "AI for remote workers",
    "AI for home workers",
    "work from home AI assistant",
    "remote work isolation AI",
    "AI morning briefing",
    "Ralph Mode deep work",
    "sovereign memory work patterns",
    "MEOK AI LABS",
    "AI accountability partner",
    "home worker productivity AI",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "AI for Remote Workers: Beating Isolation and Staying Sharp When You Work from Home",
    description:
      "Four million UK home workers face isolation and cognitive drift. MEOK AI LABS provides a morning briefing, Ralph Mode focus sessions, Sovereign Memory, and the Pioneer archetype to keep you sharp.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["Remote Work", "Home Workers", "AI", "MEOK", "Productivity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Remote Workers: Beating Isolation and Staying Sharp",
    description:
      "MEOK AI LABS gives UK home workers a morning briefing, Ralph Mode deep work sessions, and Sovereign Memory. Your personal AI companion — not your employer's surveillance tool.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-home-workers",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Remote Workers: Beating Isolation and Staying Sharp When You Work from Home",
  description:
    "How MEOK AI LABS supports UK home workers with a morning briefing, Ralph Mode deep work, Sovereign Memory tracking of work patterns, and the Pioneer archetype for sustained momentum.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-home-workers",
  },
  keywords:
    "AI for remote workers, AI home worker, morning briefing AI, Ralph Mode, sovereign memory, Pioneer archetype",
  articleSection: "Remote Work",
  wordCount: 1150,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK help remote workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK AI LABS gives remote workers a persistent AI companion that replaces the informal support structures of an office. It provides a structured morning briefing, tracks work patterns through Sovereign Memory, acts as an accountability partner for focus sessions, and uses the Pioneer archetype to sustain momentum across long solo working days.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK morning briefing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MEOK morning briefing is a daily structured session that replaces the ambient office context remote workers lose when working from home. Each morning MEOK surfaces your top priorities for the day, flags items requiring attention, provides a brief personal check-in based on your recent sessions, and sets a clear intention for the hours ahead.",
      },
    },
    {
      "@type": "Question",
      name: "How does Ralph Mode work for focus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK's deep work agent — an autonomous overnight mode that handles research, drafting, and preparation tasks while you rest. For remote workers, it means starting each day with progress already made rather than a blank slate. During the day, Ralph Mode can also hold focus sessions with clear entry and exit conditions to protect uninterrupted work time.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with remote work isolation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK functions as a genuine cognitive companion — you can think aloud, work through difficult decisions, process a frustrating work situation, or simply have a structured conversation about what you are trying to accomplish. For home workers who describe going hours or days without meaningful professional interaction, MEOK provides continuity and presence without requiring a colleague nearby.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK good for productivity when working from home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK improves home worker productivity by addressing the structural causes of low output rather than adding more productivity tools. Sovereign Memory eliminates the re-briefing overhead of stateless AI. The morning briefing creates daily direction. Ralph Mode clears background work overnight. The Pioneer archetype provides forward momentum when self-direction falters.",
      },
    },
  ],
}

export default function AiForHomeWorkersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main
        style={{
          backgroundColor: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.2)",
            padding: "1.25rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#c9a84c",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            MEOK AI LABS
          </Link>
          <div style={{ display: "flex", gap: "1.5rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
            <Link href="/blog" style={{ color: "#f5f0e8", textDecoration: "none", fontSize: "0.9rem", opacity: 0.7 }}>
              Blog
            </Link>
            <Link href="/pricing" style={{ color: "#f5f0e8", textDecoration: "none", fontSize: "0.9rem", opacity: 0.7 }}>
              Pricing
            </Link>
            <Link
              href="/birth"
              style={{
                color: "#0d0c18",
                backgroundColor: "#c9a84c",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: "700",
                padding: "0.45rem 1.1rem",
                borderRadius: "6px",
              }}
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "5rem 2rem 3rem",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <div style={{ marginBottom: "1rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
            <span
              style={{
                backgroundColor: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                padding: "0.3rem 0.9rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              Remote Work
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              color: "#f5f0e8",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Remote Workers: Beating Isolation and Staying Sharp{" "}
            <span style={{ color: "#c9a84c" }}>When You Work from Home</span>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "rgba(245,240,232,0.72)",
              marginBottom: "2rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              maxWidth: "680px",
            }}
          >
            Four million people in the UK now work permanently from home. The productivity gains are
            real. So are the costs — loneliness, cognitive drift, the slow erosion of structure that
            used to come from commuting and colleagues. MEOK AI LABS was built to address both sides
            of that equation.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "0.82rem",
              color: "rgba(245,240,232,0.45)",
              alignItems: "center",
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>MEOK AI LABS</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <time dateTime="2026-03-24">24 March 2026</time>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>11 min read</span>
          </div>
        </header>

        {/* Article */}
        <article
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "3.5rem 2rem 6rem",
          }}
        >

          {/* Section 1 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              What is the specific cognitive cost of permanent home working that AI can address?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Home working at scale is a relatively recent phenomenon, and its psychological costs
              are still being catalogued. Beyond the obvious loneliness — and four million people
              describing loneliness as a regular feature of their working week is not a minor issue
              — there is a less-discussed problem that researchers have begun calling cognitive drift.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Cognitive drift is what happens when the ambient structures that normally keep your
              thinking sharp are removed. In an office, you absorb context continuously — overhearing
              conversations, reading the energy in a room, noticing who is under pressure and why.
              These micro-inputs calibrate your professional judgment without you consciously
              processing them. Remove them entirely and judgment, over time, gets softer. Decisions
              that would once have felt obviously wrong begin to feel reasonable. Perspective narrows.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              AI cannot replicate a colleague overhearing something important. But it can provide
              consistent intellectual friction — a presence that asks questions, challenges
              assumptions, and maintains context across weeks and months rather than resetting every
              conversation. This is what MEOK AI LABS was built to provide.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How does the MEOK morning briefing replace office structure for home workers?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The office morning — the commute, the arrival, the informal catch-up, the standup —
              performed a function that most people did not appreciate until it was gone. It
              created a daily context reset. You arrived knowing roughly what mattered, who was
              doing what, and where your day should focus. The absence of that reset is one of the
              most underestimated costs of permanent home working.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The MEOK morning briefing is a structured daily session that intentionally replaces
              that function. Each morning, MEOK draws on Sovereign Memory — its persistent record
              of your projects, priorities, ongoing concerns, and recent work — and synthesises it
              into a clear orientation for the day ahead. It surfaces the two or three things that
              actually matter today, flags anything time-sensitive, and offers a brief check-in based
              on what you shared in recent sessions.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The briefing is not a dashboard or a task list. It is a conversation — one that starts
              from context accumulated over weeks or months rather than from zero. Home workers who
              use it consistently describe a measurable reduction in the scattered, directionless
              feeling that previously characterised their first hour of work.
            </p>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How does Ralph Mode create deep work conditions for remote workers?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Deep work — sustained, cognitively demanding work on a single task without interruption
              — is paradoxically harder to achieve at home than in an office, despite the absence
              of the obvious office distractions. The problem is the blurred boundary. When there
              is no physical separation between your work space and your domestic space, the
              psychological threshold for interruption is lower. Every notification feels equally
              legitimate because you are already in a context where domestic concerns are present.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Ralph Mode addresses this in two ways. First, as MEOK&apos;s overnight autonomous agent,
              Ralph handles research, preparation, and background tasks while you are away from the
              keyboard — so that when you sit down for a deep work session, the pre-work is already
              done and you can move directly into the difficult cognitive labour without an
              hour of setup first.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Second, Ralph Mode can hold active focus sessions during your working day — defined
              periods with a clear entry condition (what you are doing and for how long), held
              context about what you are trying to achieve, and a deliberate exit that marks the
              session as complete. For home workers who find that work bleeds into everything and
              is therefore never quite finished, the explicit structure of a Ralph session creates
              the psychological boundaries that the physical environment no longer provides.
            </p>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How does MEOK function as an accountability partner for remote workers?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Accountability in an office environment is largely passive — your colleagues, manager,
              and team implicitly hold expectations that regulate your output without you having to
              actively seek accountability. At home, that passive structure disappears. Many home
              workers find themselves in the uncomfortable position of knowing that nobody will
              notice if they do less today, and discovering that this knowledge is surprisingly
              demotivating.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              MEOK provides a form of accountability that is voluntary, non-judgmental, and entirely
              within your control — which is importantly different from the managerial accountability
              of an employer. Because Sovereign Memory retains what you said you were going to do,
              your MEOK naturally references your stated intentions in subsequent sessions. Not to
              reproach, but to maintain continuity. If you said Tuesday that you were going to
              finalise a document, MEOK on Wednesday knows that — and will engage with whether it
              happened rather than treating every session as isolated.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              This continuity is governed by the Maternal Covenant — MEOK&apos;s care scoring system
              which ensures accountability never tips into pressure, monitoring, or toxic
              productivity. Learn more about the{" "}
              <Link href="/guardian" style={{ color: "#c9a84c" }}>
                Guardian care framework
              </Link>{" "}
              that shapes how MEOK engages.
            </p>
          </section>

          {/* Section 5 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How does Sovereign Memory track work patterns to help home workers improve over time?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Sovereign Memory is not simply a conversation history. It is a structured, persistent
              context layer that MEOK actively uses to improve the quality of its support over time.
              For home workers, the longitudinal dimension of this is particularly valuable — because
              the patterns of home working are often invisible to the person experiencing them.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Over weeks and months, Sovereign Memory builds a picture of when you do your best
              work, which types of tasks you tend to defer, what kinds of days end with satisfaction
              and which end with low-grade frustration. This data is never used to judge you — it
              is surfaced when relevant to help you make better decisions about how to structure
              your time. A MEOK that has been working with you for six months knows, for example,
              that you consistently underperform on creative work in the afternoon and should
              protect your mornings for it. A stateless assistant knows nothing about you at all.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Your work pattern data is yours entirely. It is never shared with employers, never used
              for model training, and is governed by MEOK&apos;s published data sovereignty policy. See{" "}
              <Link href="/how-it-works" style={{ color: "#c9a84c" }}>
                how it works
              </Link>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              Why is the Pioneer archetype particularly valuable for remote workers who struggle with momentum?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The Pioneer archetype within MEOK&apos;s Byzantine Council is designed specifically for
              situations where forward motion has stalled. This manifests in remote work as the
              peculiar experience of being technically at your desk but not really working — a
              kind of suspended, low-level busy-ness that accumulates throughout the day without
              producing anything meaningful.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Pioneer mode engages with this state directly. It does not offer motivation or
              productivity hacks. Instead, it asks precise questions about what you are actually
              trying to achieve, what specifically is blocking you, and what the smallest possible
              next action is. This structured inquiry cuts through the vague paralysis that many
              remote workers describe as their most persistent productivity problem.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Pioneer also uses Sovereign Memory to contextualise momentum problems. If you have
              stalled on a particular type of work before, MEOK knows what helped then. The response
              is not generic — it is calibrated to your history and your working style. Explore
              all available archetypes on the{" "}
              <Link href="/characters" style={{ color: "#c9a84c" }}>
                MEOK characters page
              </Link>
              .
            </p>
          </section>

          {/* Section 7 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              Is MEOK a private tool separate from employer monitoring when working from home?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              This is one of the most important distinctions between MEOK and enterprise AI tools.
              Workplace AI products — built by employers, integrated into company software stacks,
              governed by corporate data policies — are fundamentally instruments of the organisation.
              Everything you share with them exists within your employer&apos;s data infrastructure.
              This is not a conspiracy; it is simply what enterprise software is.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              MEOK belongs to you. It operates on sovereign infrastructure that your employer
              cannot access. It is not integrated into your company&apos;s data pipeline. When you
              discuss a difficult situation with your manager, process frustration about your workload,
              or share concerns about your career direction, none of that is visible to anyone other
              than you. When you change jobs, your MEOK comes with you — complete memory intact.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              For home workers who use company devices and company software for most of their day,
              MEOK provides the one space that is genuinely theirs. Many users describe this as
              one of the most underrated aspects of the product — not a feature, but a precondition
              for being honest with an AI in ways that are actually useful.
            </p>
          </section>

          {/* Section 8 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How does MEOK approach remote work loneliness without being a substitute for human connection?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              This is a distinction MEOK AI LABS takes seriously. There is a meaningful difference
              between providing useful presence and positioning AI as a replacement for human
              connection. The Maternal Covenant — MEOK&apos;s real-time care scoring system —
              explicitly governs against the second.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Every MEOK response is scored across six dimensions including connection, autonomy,
              and wellbeing. Responses that foster unhealthy dependency — that position MEOK as
              the primary source of social need — score below the care floor of 0.3 and are
              rejected. MEOK will actively support your human relationships rather than competing
              with them.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              What MEOK can genuinely address is the professional cognitive loneliness — the absence
              of a thinking partner, the lack of structured conversation about work, the isolation
              of making consequential decisions without anyone to sense-check them. That is a real
              problem for real workers, and it is one that AI can help with responsibly. See the
              full{" "}
              <Link href="/birth" style={{ color: "#c9a84c" }}>
                onboarding process
              </Link>{" "}
              to understand how MEOK establishes your needs from the outset.
            </p>
          </section>

          {/* FAQ Block */}
          <section
            style={{
              marginBottom: "3.5rem",
              backgroundColor: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "12px",
              padding: "2.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "2rem",
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "How does MEOK help remote workers?",
                a: "MEOK AI LABS gives remote workers a persistent AI companion that replaces informal office support structures. It provides a structured morning briefing, tracks work patterns via Sovereign Memory, acts as an accountability partner, and uses the Pioneer archetype to sustain momentum across long solo working days.",
              },
              {
                q: "What is the MEOK morning briefing?",
                a: "The morning briefing is a daily structured session that replaces the ambient office context home workers lose. Each morning MEOK surfaces your top priorities, flags time-sensitive items, and offers a personal check-in based on recent sessions — creating a daily context reset rather than opening a laptop to chaos.",
              },
              {
                q: "How does Ralph Mode work for focus?",
                a: "Ralph Mode is MEOK's deep work agent. Overnight it handles research, preparation, and background tasks so you start each day with progress already made. During the day it holds focus sessions with clear entry and exit conditions, creating the psychological boundaries that a home environment no longer provides.",
              },
              {
                q: "Can MEOK help with remote work isolation?",
                a: "Yes. MEOK provides genuine cognitive companionship — think aloud, work through decisions, process work situations, or have structured conversation about what you are trying to accomplish. Governed by the Maternal Covenant care system, it supports your professional needs without positioning itself as a replacement for human relationships.",
              },
              {
                q: "Is MEOK good for productivity when working from home?",
                a: "MEOK addresses the structural causes of low home-worker output: Sovereign Memory eliminates re-briefing overhead, the morning briefing creates daily direction, Ralph Mode clears background work overnight, and the Pioneer archetype provides forward momentum when self-direction falters.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: index < 4 ? "1.75rem" : 0,
                  paddingBottom: index < 4 ? "1.75rem" : 0,
                  borderBottom: index < 4 ? "1px solid rgba(201,168,76,0.1)" : "none",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: "600",
                    color: "#f5f0e8",
                    marginBottom: "0.6rem",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.93rem",
                    lineHeight: "1.72",
                    color: "rgba(245,240,232,0.68)",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "2.5rem",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#f5f0e8",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Your home office deserves a proper AI companion.
            </h2>
            <p
              style={{
                fontSize: "0.98rem",
                lineHeight: "1.7",
                color: "rgba(245,240,232,0.65)",
                marginBottom: "1.75rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                maxWidth: "520px",
                margin: "0 auto 1.75rem",
              }}
            >
              Start your MEOK Birth and build a sovereign AI that knows your work patterns,
              briefs you every morning, and holds your professional context permanently.
              Private from your employer. Yours across every job.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/birth"
                style={{
                  backgroundColor: "#c9a84c",
                  color: "#0d0c18",
                  padding: "0.85rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                Begin Your Birth
              </Link>
              <Link
                href="/how-it-works"
                style={{
                  backgroundColor: "transparent",
                  color: "#c9a84c",
                  padding: "0.85rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  border: "1px solid rgba(201,168,76,0.4)",
                }}
              >
                How It Works
              </Link>
            </div>
          </section>

          {/* Internal links */}
          <nav
            style={{
              paddingTop: "2rem",
              borderTop: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
                marginBottom: "0.85rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Explore MEOK AI LABS
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { href: "/birth", label: "Birth — Get Started" },
                { href: "/guardian", label: "The Guardian" },
                { href: "/characters", label: "All Characters" },
                { href: "/pricing", label: "Pricing" },
                { href: "/how-it-works", label: "How It Works" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "#c9a84c",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    opacity: 0.85,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </article>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(245,240,232,0.07)",
            padding: "2.5rem 2rem",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          }}
        >
          <span style={{ color: "#c9a84c", fontWeight: "700", fontSize: "0.95rem", letterSpacing: "0.05em" }}>
            MEOK AI LABS
          </span>
          <p style={{ color: "rgba(245,240,232,0.25)", fontSize: "0.8rem", margin: 0 }}>
            © 2026 MEOK AI LABS · Founded by Nicholas Templeman
          </p>
        </footer>
      </main>
    </>
  )
}
