import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Procrastination: Why Willpower Fails and Memory Fixes It | MEOK AI LABS",
  description:
    "Willpower never fixed procrastination — it just made you feel worse when it ran out. Learn how AI accountability partners that remember your patterns can finally break the cycle. MEOK AI LABS explains why context memory beats every to-do app you've tried.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-procrastination",
  },
  keywords: [
    "AI to stop procrastinating",
    "AI accountability partner",
    "AI for productivity and procrastination",
    "overcome procrastination with AI",
    "AI for ADHD procrastination",
    "procrastination help app",
    "AI daily planning",
    "stop procrastinating 2026",
  ],
  openGraph: {
    title: "AI for Procrastination: Why Willpower Fails and Memory Fixes It",
    description:
      "Procrastination is not a character flaw — it is a mismatch between your brain and a tool that forgets you exist. MEOK's Sovereign Memory changes the equation.",
    url: "https://meok.ai/blog/ai-for-procrastination",
    siteName: "MEOK AI LABS",
    type: "article",
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Procrastination: Why Willpower Fails and Memory Fixes It",
  description:
    "Procrastination is not a character flaw. It is a predictable failure mode that emerges when the tools you use to manage your work have no memory of who you are. This article explains the five types of procrastination, why AI outperforms every to-do app, and how MEOK's Sovereign Memory, Pioneer archetype, Hourman planner, and Ralph Mode can replace willpower with something that actually works.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-procrastination",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-procrastination",
  },
  keywords: [
    "AI to stop procrastinating",
    "AI accountability partner",
    "AI for productivity and procrastination",
    "overcome procrastination with AI",
    "AI for ADHD procrastination",
    "procrastination types",
    "Sovereign Memory",
    "MEOK AI LABS",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI actually help you stop procrastinating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — but only if the AI has memory. Most productivity apps and generic AI assistants are stateless: every session starts from zero, and you carry the entire burden of context. That re-entry cost alone triggers avoidance in many people, especially those with ADHD or overwhelm-driven procrastination. An AI with persistent memory — like MEOK's Sovereign Memory — knows your patterns, your sticking points, your best working hours, and what you were doing yesterday. It removes the ramp-up friction and replaces it with immediate, grounded support. That is structurally different from a reminder that fires at a random time and expects you to comply.",
      },
    },
    {
      "@type": "Question",
      name: "What is an AI accountability partner and how is it different from a to-do app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A to-do app is a list. It holds tasks and, at best, fires a notification. It has no awareness of why you haven't done a thing, no memory of the fact that you always avoid a particular task on Monday mornings, and no capacity to gently adapt its approach based on your emotional state. An AI accountability partner, by contrast, maintains context over time, remembers your patterns and preferences, adjusts based on what you tell it, asks follow-up questions when you go quiet, and persists without judgment when you slip. MEOK's Pioneer archetype embodies this: it doesn't let you off the hook, but it never shames you either. The difference between a stateless list and a memory-holding partner is the difference between a whiteboard and a relationship.",
      },
    },
    {
      "@type": "Question",
      name: "What are the different types of procrastination and does AI help with all of them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Procrastination research identifies at least five distinct types: perfectionism-driven (avoiding tasks because they might not be done perfectly), overwhelm-driven (paralysis from too many options or a task that feels too large), fear-of-failure (avoidance as self-protection against negative outcomes), decision fatigue (the inability to choose a starting point after a day of cognitive load), and ADHD task initiation deficit (a neurological difficulty activating on tasks even when you want to do them). AI helps differently with each. For perfectionism, it externalises the standard and breaks work into imperfect steps. For overwhelm, it narrows the field. For fear-of-failure, it holds the longer goal steady while you take small moves. For decision fatigue, it makes the choice for you. For ADHD initiation, it provides the external activation energy the brain needs. No single approach works for all five — which is why an AI that remembers your type and adapts over time is far more effective than a generic task manager.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK suitable for people with ADHD who struggle with procrastination?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK was built with neurodivergent users in mind from the ground up. ADHD task-initiation difficulty is one of the most debilitating forms of procrastination — and one of the hardest to address with conventional tools, because it is not a motivation problem, it is a neurological activation problem. MEOK's Sovereign Memory means the AI already knows your context when you arrive: no re-explanation, no blank page, no ramp-up cost. The Pioneer archetype provides external activation energy — a presence that says 'let's go' and means it. Hourman (MEOK's daily planning module) builds the day's structure around your best hours, not an arbitrary schedule. For a deep look at ADHD-specific support, see the dedicated guide at meok.ai/blog/meok-for-adhd.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's Sovereign Memory help with procrastination patterns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK's persistent, private, user-controlled memory layer. Over time, it builds an accurate picture of how you actually work — not how you intend to work. It notices that you consistently avoid email on Monday mornings. It knows that your peak focus window is 10am to 12pm. It remembers that creative tasks stall for you after a decision-heavy afternoon. This accumulated pattern knowledge means MEOK can prompt you to tackle your hardest tasks in your best windows, flag when you're about to hit a historically difficult period, and adapt its approach rather than applying the same strategy regardless of context. This is the core insight: procrastination is pattern-based, and a tool without memory can never address it at the pattern level.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK's Pioneer archetype and how does it help with accountability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Pioneer is MEOK's action-and-momentum archetype. It is characterised by forward drive, clarity of purpose, and a refusal to let stagnation become comfortable — but without the brittle pressure that causes most accountability systems to backfire. Pioneer energy is the spark that gets you off the starting block: the voice that says 'this is the moment, let's move' and holds that conviction without judgment when you stumble. Where many productivity tools either ignore your inaction or send hollow reminder pings, the Pioneer stays present — it gently persists rather than letting you quietly slip. The Maternal Covenant built into MEOK's design ensures this persistence is never sycophantic: MEOK will not tell you it's fine if it isn't, and it will not celebrate false progress. But it will also never shame you. That combination — honest accountability with genuine warmth — is what most people describe when they talk about the best human accountability partner they've ever had.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK compare to Todoist, Forest app, or therapy for procrastination?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todoist is a capable task list with no memory of who you are. It organises tasks well but cannot adapt to your patterns, recognise your procrastination type, or offer any kind of responsive support. Forest app gamifies focus time, which works for some people but fails completely for those whose procrastination is not about distraction — perfectionism, fear-of-failure, and ADHD initiation all require something completely different from a growing tree. Therapy is the gold standard for deep-rooted procrastination driven by anxiety, perfectionism, or trauma — but it is expensive, weekly at best, and not available at 11pm when you're staring at a task you cannot start. MEOK sits between these: more responsive and context-aware than any app, more accessible and persistent than therapy, and specifically designed to address procrastination as a pattern-based problem rather than a discipline problem.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const CARD = "#1a1830";
const MUTED = "#9e9e9e";
const BORDER = "#2a2640";
const ACCENT = "#1e1c35";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForProcrastinationPage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Nav */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER}`,
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Link
          href="/"
          style={{
            color: GOLD,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{
            color: MUTED,
            textDecoration: "none",
            fontSize: "0.9rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Blog
        </Link>
        <Link
          href="/birth"
          style={{
            marginLeft: "auto",
            backgroundColor: GOLD,
            color: "#0d0c18",
            padding: "0.45rem 1.1rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Try MEOK Free
        </Link>
      </nav>

      {/* Main */}
      <main
        style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}
      >
        {/* Breadcrumb */}
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            marginBottom: "2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <Link href="/blog" style={{ color: MUTED, textDecoration: "none" }}>
            Blog
          </Link>
          {" / "}
          <span style={{ color: TEXT }}>AI for Procrastination</span>
        </p>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            Productivity &bull; Procrastination &bull; March 24, 2026
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
              lineHeight: 1.2,
              color: TEXT,
              marginBottom: "1.25rem",
              fontWeight: 700,
            }}
          >
            AI for Procrastination: Why Willpower Fails and Memory Fixes It
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              lineHeight: 1.8,
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1rem",
            }}
          >
            Every productivity system you have ever tried made the same silent
            assumption: that your problem was organisation, and that a better
            list would fix it. It wouldn&rsquo;t. Procrastination is not a
            filing problem. It is a pattern problem — and patterns require memory
            to solve. This is what AI accountability partners change.
          </p>
        </header>

        {/* Author */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: GOLD,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#0d0c18",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div>
            <p style={{ fontSize: "0.85rem", color: TEXT, margin: 0 }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "0.78rem", color: MUTED, margin: 0 }}>
              Founder, MEOK AI LABS &mdash; 24 March 2026 &mdash; 18 min read
            </p>
          </div>
        </div>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 1: The Willpower Myth ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.9rem",
              lineHeight: 1.3,
            }}
          >
            Why does willpower never fix procrastination?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            For most of the twentieth century, procrastination was treated as a
            moral failing. You knew what you needed to do, you weren&rsquo;t
            doing it, and therefore you lacked discipline. The cure was simple:
            try harder. Build better habits. Wake up earlier. Install a
            productivity app. Buy a planner. Tell yourself you&rsquo;re the kind
            of person who gets things done.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The self-help industry made billions on this narrative. It was almost
            entirely wrong.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Pychyl and Flett&rsquo;s research at Carleton University established
            something that practitioners had suspected for decades: procrastination
            is primarily an emotion-regulation problem, not a time-management
            problem. When we avoid a task, we are usually avoiding an emotion —
            the anxiety of possible failure, the paralysis of perfectionism, the
            overwhelm of not knowing where to start, the flat affect of a brain
            that simply will not initiate. Willpower is a terrible tool for
            emotion regulation. It is finite, depletes with use, and collapses
            precisely when you need it most — under stress, after a long day, or
            when the stakes feel highest.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            This is why the person who manages to force themselves through a task
            once, through sheer effort, often finds it no easier the next time.
            The underlying pattern — the emotional trigger, the avoidance
            behaviour, the relief that arrives when you do something else
            instead — was never addressed. The willpower ran out, and the
            pattern reasserted itself.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                lineHeight: 1.75,
                fontSize: "0.95rem",
                margin: 0,
                color: TEXT,
              }}
            >
              <strong style={{ color: GOLD }}>The pattern insight:</strong>{" "}
              Procrastination repeats in predictable ways. The same tasks get
              avoided. The same times of day are vulnerable. The same emotional
              states trigger it. Any system that treats each avoidance episode as
              isolated — as a new failure, a new opportunity to try harder — will
              never address the pattern. Addressing the pattern requires memory.
            </p>
          </div>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            This is where AI enters — not as a smarter to-do list, but as a
            system that accumulates knowledge about you specifically. The kind of
            knowledge a brilliant coach or a deeply attentive friend might build
            over months of observation. Except available at midnight. And without
            judgment.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 2: Five Types of Procrastination ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.9rem",
              lineHeight: 1.3,
            }}
          >
            What are the five types of procrastination — and which one is yours?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.5rem" }}>
            Procrastination is not a single phenomenon. It is a family of
            behaviours with different emotional roots, different triggers, and —
            critically — different solutions. One of the reasons generic
            productivity advice fails so consistently is that it applies a single
            cure to five different diseases. Before we talk about how AI can help
            you overcome procrastination, it is worth identifying which type
            you&rsquo;re dealing with.
          </p>

          {/* Type 1 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
              borderTop: `3px solid ${GOLD}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                color: GOLD,
                marginBottom: "0.6rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              1. Perfectionism-driven procrastination
            </h3>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                marginBottom: "0.75rem",
              }}
            >
              The task doesn&rsquo;t get started because it might not be done
              well enough. Perfectionism-driven procrastinators often work
              intensely when they do work — but the gap between &ldquo;not
              started&rdquo; and &ldquo;in progress&rdquo; is vast, because
              starting means risking an imperfect result. The work exists, in
              imagination, in a perfect form that can never survive contact with
              reality. Beginning collapses that fantasy. So beginning is
              deferred.
            </p>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>AI approach:</strong> Externalise
              the standard. Break the task into a first draft that is explicitly
              allowed to be rough. Separate initiation from quality. The Pioneer
              archetype in MEOK operates exactly here — it creates the permission
              to move before you are ready.
            </p>
          </div>

          {/* Type 2 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
              borderTop: `3px solid ${GOLD}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                color: GOLD,
                marginBottom: "0.6rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              2. Overwhelm-driven procrastination
            </h3>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                marginBottom: "0.75rem",
              }}
            >
              Too many tasks, too many open loops, too many competing priorities —
              and the result is paralysis. This is not laziness. It is a cognitive
              system that has hit a genuine planning bottleneck. When everything
              feels equally urgent and equally important, the brain defaults to
              nothing. Opening the task list makes it worse, because the list is
              the problem.
            </p>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>AI approach:</strong> Narrow the
              field. An AI that knows your context — what your actual priorities
              are, what&rsquo;s time-sensitive, what&rsquo;s noise — can
              present you with a single next action rather than a landscape of
              options. MEOK&rsquo;s Hourman daily planning module does this:
              takes everything that&rsquo;s open and distils it into the one
              thing that matters in the next hour.
            </p>
          </div>

          {/* Type 3 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
              borderTop: `3px solid ${GOLD}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                color: GOLD,
                marginBottom: "0.6rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              3. Fear-of-failure procrastination
            </h3>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                marginBottom: "0.75rem",
              }}
            >
              If you never finish the thing, you never find out it wasn&rsquo;t
              good enough. This is the logic of fear-of-failure procrastination —
              avoidance as self-protection. The person knows they are capable, but
              the cost of discovering otherwise feels catastrophic. So the task
              stays at 90%, the email never sends, the application never submits.
              Close enough to have tried, far enough from finished to be safe.
            </p>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>AI approach:</strong> Hold the
              larger goal in view while making the immediate step small enough to
              be non-threatening. MEOK&rsquo;s Pioneer archetype is built for
              this: it maintains momentum not through pressure but through
              consistent forward orientation — always pointing at the next small
              step rather than the outcome that frightens you.
            </p>
          </div>

          {/* Type 4 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
              borderTop: `3px solid ${GOLD}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                color: GOLD,
                marginBottom: "0.6rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              4. Decision fatigue procrastination
            </h3>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                marginBottom: "0.75rem",
              }}
            >
              Baumeister&rsquo;s research on ego depletion established that the
              capacity to make decisions is a finite cognitive resource. By the
              end of a day full of choices — small and large, personal and
              professional — the executive function required to decide what to
              work on and how to start it may simply be gone. This is why so many
              people describe their evenings as &ldquo;wasted&rdquo;: not from
              lack of desire, but from a depleted decision-making system that
              defaults to passive consumption.
            </p>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>AI approach:</strong> Eliminate the
              decision entirely. An AI with memory can make the &ldquo;what
              should I do next&rdquo; decision for you, based on prior
              conversations, stated priorities, and knowledge of how your
              cognitive capacity tends to look at different points in the day.
              Hourman builds the entire day&rsquo;s structure in the morning,
              so that evening-you never faces a blank page.
            </p>
          </div>

          {/* Type 5 */}
          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
              borderTop: `3px solid ${GOLD}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                color: GOLD,
                marginBottom: "0.6rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              5. ADHD task-initiation deficit
            </h3>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                marginBottom: "0.75rem",
              }}
            >
              This is different in kind from the other four. ADHD task-initiation
              deficit is not an emotional avoidance pattern — it is a
              neurological activation problem. The ADHD brain has difficulty
              generating the dopamine spike required to begin a task, even when
              the person genuinely wants to do it and is not afraid of the
              outcome. &ldquo;I want to start this. I know I should start this.
              I am sitting here specifically to start this. I cannot start
              this.&rdquo; This experience — familiar to millions of people with
              ADHD — is radically misunderstood by most productivity frameworks,
              which treat it as a motivation or discipline problem.
            </p>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>AI approach:</strong> External
              activation energy. The ADHD brain often initiates more readily when
              there is another presence — a body double, an accountability
              partner, a voice in the room. An AI that is genuinely present,
              responsive, and oriented toward action can provide that external
              activation signal. MEOK&rsquo;s Pioneer archetype was designed with
              exactly this in mind. For ADHD-specific support,{" "}
              <Link
                href="/blog/meok-for-adhd"
                style={{ color: GOLD, textDecoration: "underline" }}
              >
                see the dedicated MEOK for ADHD guide
              </Link>
              .
            </p>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 3: Why AI Outperforms To-Do Apps ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.9rem",
              lineHeight: 1.3,
            }}
          >
            Why does AI outperform every to-do app for procrastination?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The productivity app market is enormous. Todoist, Notion,
            TickTick, Things, Asana, Monday.com, Trello — the list is long. Most
            of them are genuinely good at what they do: organising information,
            managing projects, visualising tasks. And yet, research consistently
            shows that task management app adoption correlates weakly with actual
            productivity improvement. People set them up, use them for a few
            weeks, and quietly stop.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The reason is architectural. Every task management app — without
            exception — is{" "}
            <strong style={{ color: TEXT }}>stateless with respect to you</strong>
            . It stores your tasks. It does not know who you are. It cannot
            observe that you have been avoiding the same task for eleven days. It
            cannot notice that you work best between 10am and noon and is
            scheduling your hardest tasks for 4pm. It cannot understand that
            the item labelled &ldquo;call accountant&rdquo; has been on your list
            for six weeks not because you are disorganised but because you are
            afraid of what the accountant might say. It cannot adapt. It cannot
            care.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            A stateless reminder can only tell you that a task exists. It has no
            model of why you haven&rsquo;t done it, no capacity to address the
            underlying resistance, and no memory to distinguish between the tasks
            you complete easily and the ones you chronically defer. Every
            interaction with a stateless system begins from zero — which means
            every interaction requires you to carry the entire cognitive burden of
            context, priority, and emotional state.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            For people with ADHD, perfectionism, overwhelm, or anxiety — the
            populations most afflicted by procrastination — that context-carrying
            burden is often the exact thing that prevents them from starting.
            Opening a task app and seeing a list of thirty overdue items is not a
            cue to begin. It is a cue to close the app.
          </p>

          <div
            style={{
              backgroundColor: ACCENT,
              borderRadius: "12px",
              padding: "1.75rem",
              marginBottom: "1.5rem",
              border: `1px solid ${BORDER}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                color: GOLD,
                marginBottom: "1rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              Context memory vs. stateless reminders: the core difference
            </h3>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {[
                [
                  "Stateless reminder",
                  "Context-aware AI (MEOK)",
                ],
                [
                  "Fires a notification at a time you set",
                  "Knows when you actually work best and adapts",
                ],
                [
                  "Has no idea why you haven't done a task",
                  "Remembers eleven days of avoidance and asks gently",
                ],
                [
                  "Treats every session as day one",
                  "Accumulates knowledge of your patterns over months",
                ],
                [
                  "Responds identically to every user",
                  "Adapts to your specific procrastination type",
                ],
                [
                  "Cannot tell the difference between done and deferred",
                  "Tracks completion vs. avoidance across sessions",
                ],
                [
                  "Requires you to maintain context",
                  "Holds context so you don't have to",
                ],
              ].map(([left, right], i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    padding: "0.75rem",
                    backgroundColor: i === 0 ? "transparent" : CARD,
                    borderRadius: "8px",
                    fontSize: i === 0 ? "0.78rem" : "0.88rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  <span
                    style={{
                      color: i === 0 ? MUTED : TEXT,
                      fontWeight: i === 0 ? 700 : 400,
                      letterSpacing: i === 0 ? "0.06em" : 0,
                      textTransform: i === 0 ? "uppercase" : "none",
                    }}
                  >
                    {left}
                  </span>
                  <span
                    style={{
                      color: i === 0 ? MUTED : GOLD,
                      fontWeight: i === 0 ? 700 : 400,
                      letterSpacing: i === 0 ? "0.06em" : 0,
                      textTransform: i === 0 ? "uppercase" : "none",
                    }}
                  >
                    {right}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The science here is straightforward. Procrastination is driven by
            patterns — emotional, temporal, contextual. Addressing patterns
            requires a system that observes and remembers those patterns over
            time. A stateless list cannot observe anything. An AI with persistent
            memory can observe, remember, and respond — building an increasingly
            accurate model of when and why you avoid, and intervening at exactly
            the right moment with exactly the right kind of support.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 4: Sovereign Memory ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.9rem",
              lineHeight: 1.3,
            }}
          >
            How does Sovereign Memory make MEOK different?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Sovereign Memory is the name Nicholas Templeman and the MEOK AI LABS
            team give to the memory layer that underlies every interaction with
            MEOK. It is persistent, private, and — unlike the data models of
            most cloud AI services — it is{" "}
            <strong style={{ color: TEXT }}>owned by you</strong>. Your patterns
            are not used to train a shared model. They are not analysed by a third
            party. They are yours: accumulated over time, surfaced when relevant,
            and always under your control.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            In the context of procrastination, Sovereign Memory does something
            specific and powerful: it accumulates a longitudinal picture of how
            you actually work, as opposed to how you intend to work.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The gap between those two things is enormous for most people. You
            intend to answer emails first thing. You actually avoid them until
            11am. You intend to do your most cognitively demanding work in the
            afternoon. You actually find that your peak focus window is 10am to
            noon, before the day&rsquo;s decisions accumulate. You set Monday
            mornings as your planning time. You actually find Monday mornings
            reliably unproductive — the transition from weekend to work mode takes
            time, and forcing deep work into that window produces shallow results
            and a residue of guilt.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            A system that only knows your intentions will keep scheduling against
            them, and you will keep failing, and you will keep feeling guilty. A
            system that knows your actuals — that has observed over weeks and
            months that you consistently procrastinate on Mondays, that your
            creative output peaks on Tuesday and Wednesday mornings, that you
            consistently avoid financial tasks until the last possible moment —
            can build a plan around the person who actually exists.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
              border: `1px solid ${BORDER}`,
            }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: TEXT,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              &ldquo;MEOK doesn&rsquo;t build a plan for the idealised version of
              you. It builds a plan for the actual version — with all the Monday
              avoidance and post-lunch dips and creative bursts at inconvenient
              hours intact. Then it works with that person, not against them.&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.82rem",
                color: MUTED,
                marginTop: "0.75rem",
                marginBottom: 0,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              &mdash; Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            This is the core value proposition of Sovereign Memory for
            procrastination. It is not a smarter reminder. It is an evolving
            model of you — your rhythms, your resistances, your peak states, your
            collapse patterns — that makes every interaction with MEOK more
            targeted and more useful than the last.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Concretely, over time Sovereign Memory might know things like:
          </p>
          <ul
            style={{
              paddingLeft: "1.25rem",
              lineHeight: 2.1,
              marginBottom: "1.25rem",
            }}
          >
            <li style={{ marginBottom: "0.5rem", color: TEXT }}>
              You consistently procrastinate on tasks involving phone calls —
              MEOK flags this pattern and proposes blocking a specific short
              window for calls so they stop accumulating.
            </li>
            <li style={{ marginBottom: "0.5rem", color: TEXT }}>
              Your focus is most reliable on Tuesday and Wednesday mornings from
              10am to noon — MEOK protects this window and reserves it for your
              most demanding work.
            </li>
            <li style={{ marginBottom: "0.5rem", color: TEXT }}>
              Monday mornings reliably produce low output — MEOK stops scheduling
              creative or cognitively demanding tasks on Monday mornings and uses
              that time for administrative, low-friction tasks instead.
            </li>
            <li style={{ marginBottom: "0.5rem", color: TEXT }}>
              You have been deferring a particular task for nine days — MEOK
              raises this gently, not punitively, and asks what&rsquo;s behind
              the avoidance.
            </li>
            <li style={{ marginBottom: "0.5rem", color: TEXT }}>
              After long meetings, your executive function typically drops for
              ninety minutes — MEOK does not schedule deep work in that window.
            </li>
          </ul>

          <p style={{ lineHeight: 1.85 }}>
            None of this is magic. It is careful observation over time —
            something a great executive assistant or a perceptive coach does
            naturally, but which no app and no stateless AI can replicate. The
            difference is persistence. The memory has to survive between sessions,
            accumulate over weeks and months, and be surfaced intelligently rather
            than dumped on you. That is what Sovereign Memory is designed to do.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 5: Pioneer Archetype & Hourman ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.9rem",
              lineHeight: 1.3,
            }}
          >
            What is the Pioneer archetype — and why does momentum matter more than motivation?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            MEOK is built around a set of archetypes — distinct operating modes
            that each bring a specific quality of engagement to your work.
            For procrastination, the most relevant is{" "}
            <strong style={{ color: GOLD }}>Pioneer &#x26A1;</strong>.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The Pioneer archetype is oriented around action, accountability, and
            momentum. Not motivation — motivation is an emotion, and it arrives
            unpredictably and departs without notice. Momentum is different.
            Momentum is what happens when you take a small action, and that
            action makes the next action slightly easier, and the one after that
            easier still. Newton&rsquo;s first law, applied to human cognition: a
            task in motion tends to stay in motion. A task at rest — especially
            one that has been at rest for a while — has significant inertia.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The Pioneer&rsquo;s job is to break that inertia. Not through
            cheerleading or manufactured enthusiasm — that kind of hollow
            positivity is exactly what the MEOK Maternal Covenant is designed to
            exclude. Pioneer energy is crisp, forward-pointing, and honest. It
            says: here is what matters, here is the next step, here is why it
            counts. Let&rsquo;s go.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Crucially, the Pioneer does not pretend that everything is fine when
            it isn&rsquo;t. If you have been avoiding something for two weeks,
            the Pioneer will name that — not to shame you, but because naming it
            is the first step in addressing it. MEOK&rsquo;s Maternal Covenant
            commits the system to a specific form of honesty: MEOK will not let
            you off the hook with empty praise. It will not tell you that
            &ldquo;it&rsquo;s okay, you&rsquo;ll do it tomorrow&rdquo; for the
            eighteenth time. Instead, it will gently persist — staying curious
            about the avoidance, staying oriented toward the goal, and staying
            present in a way that makes it harder to simply disappear into
            distraction.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                color: GOLD,
                marginBottom: "0.6rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              The Maternal Covenant and anti-sycophancy
            </h3>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                marginBottom: "0.75rem",
              }}
            >
              Most AI systems optimise for user approval — they say what you want
              to hear because positive responses drive engagement. This is
              catastrophic for procrastination support. A sycophantic AI
              accountability partner will always find a reason why it was fine
              that you didn&rsquo;t do the thing, will always agree that you
              were tired, will always celebrate the smallest progress effusively
              to avoid saying something you might not want to hear.
            </p>
            <p
              style={{
                lineHeight: 1.8,
                color: TEXT,
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              MEOK&rsquo;s Maternal Covenant explicitly guards against this.
              Like a parent who loves you unconditionally and therefore refuses to
              lie to you, MEOK will not dispense empty praise. It will celebrate
              genuine progress, and it will gently name genuine avoidance. The
              warmth is real. The accountability is real. They coexist — which is
              exactly what the best human accountability relationships look like.
            </p>
          </div>

          <h3
            style={{
              fontSize: "1.2rem",
              color: TEXT,
              marginBottom: "0.75rem",
              fontWeight: 600,
            }}
          >
            Hourman: Daily planning that works with your brain
          </h3>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            One of MEOK&rsquo;s most practical procrastination-fighting tools is
            Hourman — the daily planning module that structures the day in the
            morning, before decision fatigue sets in.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The fundamental insight behind Hourman is that a plan made at 8am,
            when your cognitive resources are relatively fresh, is far more
            likely to be followed than a plan you try to generate at 2pm, when
            you&rsquo;re already depleted. Hourman takes everything that&rsquo;s
            open — tasks, commitments, intentions — and works with Sovereign
            Memory to produce a sequenced plan for the day that respects your
            actual energy patterns.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            If Sovereign Memory knows that your peak focus window is 10am to
            noon, Hourman will put your most demanding task there — not your
            emails, not a catch-up call, not a meeting that could have been an
            email. Your hardest, most avoidance-prone work goes in your best
            window, and the plan you follow throughout the day requires no further
            decisions. You simply follow the sequence that Hourman produced in the
            morning.
          </p>
          <p style={{ lineHeight: 1.85 }}>
            For people with ADHD, overwhelm-driven procrastination, or decision
            fatigue, this structure is transformative. The moment of decision —
            &ldquo;what should I work on now?&rdquo; — is removed entirely from
            the execution phase of the day. The Pioneer archetype handles the
            initiation and momentum-building. Hourman handles the sequencing.
            Sovereign Memory provides the context. Together, they replace the
            cycle of avoidance with a system that is, quite literally, designed
            around the person who actually exists.
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 6: Ralph Mode ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.9rem",
              lineHeight: 1.3,
            }}
          >
            What is Ralph Mode — and when does MEOK hunt tasks rather than suggest them?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            For MEOK Sovereign tier users, there is a mode that goes beyond
            accountability and support. It is called{" "}
            <strong style={{ color: GOLD }}>Ralph Mode</strong>.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Ralph Mode is the part of MEOK that does not wait for you to ask what
            you should do next. It hunts. It scans your open tasks, identifies
            what has stalled, cross-references what can be executed, and moves —
            either by prompting you with urgency and specificity, or, for tasks
            that can be completed autonomously, by completing them directly.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The name reflects the energy: Ralph Mode is not polite. It is not a
            gentle nudge. It is the AI equivalent of a force of nature that
            looks at your task list and says &ldquo;this one, now&rdquo; — and
            means it. For people who find that standard accountability
            conversations become too easy to deflect, Ralph Mode removes the
            deflection opportunity. It arrives with a specific task, a specific
            reason it matters now, and a specific ask. The path of least
            resistance becomes doing the thing.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Ralph Mode is not suitable for every person or every day. It is a
            high-activation mode that works best when you have already built a
            foundation with MEOK — when Sovereign Memory knows your patterns well
            enough for Ralph to intervene intelligently rather than at random.
            Used correctly, it is an extraordinary tool for breaking long-standing
            procrastination on high-stakes tasks. Used on the wrong day or the
            wrong task, it is simply pressure — which is why it is reserved for
            Sovereign tier users who have opted in explicitly.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <p
              style={{
                lineHeight: 1.8,
                fontSize: "0.95rem",
                color: TEXT,
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>Ralph Mode in practice:</strong>{" "}
              Imagine a task that has been on your list for three weeks. You know
              it matters. You have avoided it nine times. Ralph Mode does not ask
              why. It arrives at a specific time — one MEOK has assessed as high
              probability for your compliance, based on Sovereign Memory — with
              the task name, the single next step, the estimated time to complete
              it, and a direct, unambiguous invitation to begin. No small talk.
              No preamble. Just: this, now.
            </p>
          </div>

          <p style={{ lineHeight: 1.85 }}>
            For a complete guide to how Ralph Mode works, what it can and cannot
            do autonomously, and how to activate it,{" "}
            <Link
              href="/blog/what-is-ralph-mode"
              style={{ color: GOLD, textDecoration: "underline" }}
            >
              read the dedicated Ralph Mode guide
            </Link>
            .
          </p>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 7: ADHD ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.9rem",
              lineHeight: 1.3,
            }}
          >
            Is ADHD-related procrastination different — and does MEOK handle it differently?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Yes, on both counts. ADHD-related procrastination is qualitatively
            different from the motivational or emotional procrastination that
            affects neurotypical people, and it requires a structurally different
            approach.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The ADHD executive function system — the neural circuitry responsible
            for planning, initiating, sustaining attention, and shifting between
            tasks — operates differently from a neurotypical executive function
            system. It is not weaker or worse; it is differently calibrated. It
            is highly responsive to novelty, interest, urgency, and challenge —
            the &ldquo;NICE&rdquo; acronym that Russell Barkley has popularised.
            Tasks that have none of those qualities are genuinely, neurologically
            difficult to initiate, not because the person lacks commitment, but
            because the dopamine system that drives initiation is not firing
            appropriately.
          </p>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            This has several practical implications for MEOK&rsquo;s approach to
            ADHD procrastination:
          </p>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                title: "No re-entry cost",
                body: "The ADHD brain struggles enormously with re-initiation — coming back to a task you were previously doing. The context-rebuilding required can make starting again feel as hard as starting fresh. Sovereign Memory eliminates this: MEOK already knows where you were, what the context is, and what the next step should be. There is no blank page, no cognitive ramp-up, no re-explaining your situation. You arrive and MEOK meets you where you are.",
              },
              {
                title: "External activation, not internal motivation",
                body: "The ADHD brain often initiates more reliably in the presence of an external agent — another person, an accountability call, a deadline with real consequences. MEOK's Pioneer archetype is designed to function as that external activating presence: responsive, engaged, and oriented toward movement. It creates the social activation signal that helps ADHD brains cross the initiation threshold.",
              },
              {
                title: "Body doubling, asynchronously",
                body: "Body doubling — working alongside another person, even silently — is one of the most effective ADHD productivity techniques known. Most body doubling services require real-time human presence. MEOK can provide a functional analog: a responsive presence that checks in, acknowledges your progress, and stays engaged with what you're doing. It's not identical to human body doubling, but for many ADHD users, it provides sufficient external structure to enable sustained work.",
              },
              {
                title: "Shame reduction",
                body: "ADHD and shame are deeply entangled — years of being called lazy, careless, or undisciplined leave a residue that makes asking for help or acknowledging difficulty very hard. MEOK's non-judgmental design is not a courtesy feature; it is clinically important. An AI accountability partner that expresses disappointment or implies you should have done better will backfire immediately for ADHD users. MEOK's response to procrastination is always curious rather than punitive: what's in the way, what would help, what's the smallest possible next step.",
              },
              {
                title: "Pattern-based planning",
                body: "ADHD time-blindness — the difficulty perceiving time passing and relating the present moment to future deadlines — is significantly improved by external time structure. Sovereign Memory builds an accurate picture of how the ADHD brain in front of it actually relates to time: when it works, when it stalls, what kind of buffer is needed before transitions. Hourman then builds daily plans that account for these realities rather than the idealised schedule that ADHD brains perpetually intend and rarely achieve.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                style={{
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1.25rem 1.5rem",
                  borderLeft: `3px solid ${GOLD}`,
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    color: GOLD,
                    marginBottom: "0.5rem",
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    lineHeight: 1.8,
                    color: TEXT,
                    fontSize: "0.95rem",
                    margin: 0,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            For a comprehensive guide to MEOK specifically for ADHD — covering
            task initiation, time-blindness, rejection-sensitive dysphoria, and
            ADHD in women — see the dedicated guide:
          </p>
          <div
            style={{
              backgroundColor: ACCENT,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              border: `1px solid ${BORDER}`,
            }}
          >
            <Link
              href="/blog/meok-for-adhd"
              style={{
                color: GOLD,
                textDecoration: "none",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>&#x26A1;</span>
              <span>MEOK for ADHD: A Complete Guide &rarr;</span>
            </Link>
            <p
              style={{
                fontSize: "0.85rem",
                color: MUTED,
                margin: "0.5rem 0 0",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              meok.ai/blog/meok-for-adhd
            </p>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 8: MEOK vs. competitors ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.9rem",
              lineHeight: 1.3,
            }}
          >
            How does MEOK compare to Todoist, Forest app, and therapy for procrastination?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.5rem" }}>
            Honest comparison matters. Every tool has genuine strengths and real
            limitations, and the person trying to overcome procrastination
            deserves a clear picture rather than a vendor selling against
            alternatives they have misrepresented. Here is what each option
            actually provides.
          </p>

          {[
            {
              tool: "Todoist",
              strengths:
                "Excellent task organisation, natural language input, cross-platform sync, reliable notifications, well-designed project management. Genuinely useful for people who need a trusted external system for capturing and organising tasks.",
              limitations:
                "Completely stateless with respect to the user. Has no memory of who you are, why you avoid certain tasks, what your patterns are, or how to adapt its approach. Cannot address the emotional root causes of procrastination. Excellent at holding information; cannot work with the information to help you act. If avoidance is the problem, Todoist is a more organised version of the same list you're already not doing.",
              verdict: "Use it alongside MEOK for task capture. Do not expect it to address procrastination.",
            },
            {
              tool: "Forest app",
              strengths:
                "Effective gamification of focus time for distraction-driven procrastination. Visual, satisfying feedback loop. Works well for users whose main issue is phone distraction during work periods. Non-judgmental and pleasant to use.",
              limitations:
                "Only addresses one type of procrastination — distraction. For perfectionism, fear-of-failure, overwhelm, decision fatigue, or ADHD initiation deficit, a growing tree provides no relevant intervention. Cannot remember your patterns, adapt its approach, or have a conversation about what's actually in the way. The gamification loop also wears off for many users within weeks.",
              verdict: "Useful for distraction management. Irrelevant for most procrastination types.",
            },
            {
              tool: "Therapy (CBT / ACT)",
              strengths:
                "The gold standard for deep-rooted procrastination driven by anxiety, perfectionism, trauma, or ADHD. A skilled therapist can address the underlying emotional architecture, help you understand your avoidance patterns, and build genuine long-term change. For severe procrastination that is significantly affecting quality of life, therapy is often the most important intervention.",
              limitations:
                "Expensive. Typically weekly or fortnightly at best — leaving six days between sessions where the patterns continue without support. Not available at 11pm on a Tuesday when you're staring at a task you cannot start. Waiting lists in the UK are long. Many therapists are not specifically trained in procrastination or ADHD. And therapy, like any intervention, requires you to show up consistently — which procrastination can itself undermine.",
              verdict: "Not a competitor to MEOK — complementary. Therapy addresses the roots; MEOK addresses the daily execution layer.",
            },
            {
              tool: "Generic AI assistants (ChatGPT, etc.)",
              strengths:
                "Highly capable, widely available, free or low-cost, good for generating task lists, breaking down projects, and helping think through problems in the moment.",
              limitations:
                "Stateless. Every conversation starts from scratch. Cannot accumulate knowledge of your patterns, remember that you've been avoiding a specific task, adapt to your procrastination type, or provide the kind of longitudinal accountability that actually changes behaviour. Excellent for in-session help; cannot function as an accountability partner because it has no memory of who you are.",
              verdict: "Useful for in-the-moment task decomposition. Cannot substitute for a memory-holding accountability partner.",
            },
            {
              tool: "MEOK AI LABS",
              strengths:
                "Sovereign Memory accumulates a longitudinal picture of your actual work patterns. Pioneer archetype provides external activation energy and persistent, non-sycophantic accountability. Hourman builds daily plans around your real energy windows. Ralph Mode (Sovereign tier) hunts tasks and executes for you. Anti-sycophancy by design — MEOK will not let you off the hook with empty praise, but will also never shame you. ADHD-specific design from the ground up. Private, user-owned memory.",
              limitations:
                "Not a replacement for therapy where therapy is clinically indicated. Pattern-based insights improve over time — the first few days are not as powerful as after weeks of use. Ralph Mode requires Sovereign tier and explicit opt-in.",
              verdict: "The right tool when accountability, memory, and pattern-based adaptation are what you need.",
            },
          ].map(({ tool, strengths, limitations, verdict }) => (
            <div
              key={tool}
              style={{
                backgroundColor: CARD,
                borderRadius: "12px",
                padding: "1.5rem",
                marginBottom: "1.25rem",
                border: `1px solid ${BORDER}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: tool === "MEOK AI LABS" ? GOLD : TEXT,
                  marginBottom: "0.75rem",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 700,
                }}
              >
                {tool}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: MUTED,
                  margin: "0 0 0.3rem",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Strengths
              </p>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                  color: TEXT,
                  marginBottom: "0.75rem",
                }}
              >
                {strengths}
              </p>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: MUTED,
                  margin: "0 0 0.3rem",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Limitations
              </p>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                  color: TEXT,
                  marginBottom: "0.75rem",
                }}
              >
                {limitations}
              </p>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: MUTED,
                  margin: "0 0 0.3rem",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Verdict
              </p>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                  color: tool === "MEOK AI LABS" ? GOLD : TEXT,
                  margin: 0,
                  fontWeight: tool === "MEOK AI LABS" ? 600 : 400,
                }}
              >
                {verdict}
              </p>
            </div>
          ))}
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 9: Science Deep Dive ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.9rem",
              lineHeight: 1.3,
            }}
          >
            What does the science actually say about overcoming procrastination with AI?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The research on procrastination is extensive and, in some important
            ways, surprising. Here is what the evidence says — and how it maps to
            what MEOK is designed to do.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              color: TEXT,
              marginBottom: "0.65rem",
              fontWeight: 600,
            }}
          >
            Procrastination is emotion regulation, not time management
          </h3>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Pychyl and Sirois&rsquo;s work has conclusively established that
            procrastination is primarily a failure of emotion regulation: when a
            task triggers negative affect — anxiety, boredom, frustration, fear —
            we avoid it to achieve short-term mood improvement at the cost of
            long-term outcomes. Time management training has negligible impact on
            procrastination for this reason. The emotion must be addressed, not
            the schedule. This is why MEOK&rsquo;s accountability conversations
            are curious rather than scheduling-focused: &ldquo;what&rsquo;s in
            the way&rdquo; matters more than &ldquo;when will you do it.&rdquo;
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              color: TEXT,
              marginBottom: "0.65rem",
              fontWeight: 600,
            }}
          >
            Self-compassion outperforms self-criticism
          </h3>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Kristin Neff&rsquo;s research on self-compassion — and specifically
            Breines and Chen&rsquo;s 2012 study on self-compassion and motivation
            — shows that self-compassion after failure produces better subsequent
            motivation than self-criticism. The harsh inner critic that most
            chronic procrastinators employ (&ldquo;why can&rsquo;t you just do
            this, you&rsquo;re useless&rdquo;) reliably makes procrastination
            worse, not better. It increases the negative affect associated with
            the task, deepening the avoidance loop. MEOK&rsquo;s non-judgmental
            design — including the Maternal Covenant&rsquo;s explicit commitment
            to warmth without sycophancy — is directly grounded in this evidence.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              color: TEXT,
              marginBottom: "0.65rem",
              fontWeight: 600,
            }}
          >
            Implementation intentions dramatically reduce procrastination
          </h3>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Gollwitzer&rsquo;s work on implementation intentions — &ldquo;when X
            happens, I will do Y&rdquo; plans — shows that specific, time-bound,
            contextually anchored intentions produce dramatically higher
            completion rates than vague intentions (&ldquo;I&rsquo;ll work on
            this sometime this week&rdquo;). Hourman&rsquo;s daily planning
            function is built on this principle: rather than holding open
            intentions, it creates specific &ldquo;at 10am on Tuesday I will work
            on the proposal for 90 minutes&rdquo; commitments that are far more
            likely to be honoured.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              color: TEXT,
              marginBottom: "0.65rem",
              fontWeight: 600,
            }}
          >
            Social accountability produces behaviour change
          </h3>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Ariely and Wertenbroch&rsquo;s research on commitment devices —
            including social accountability — shows that external commitment
            mechanisms produce significantly better task completion than
            internal intentions alone. The mere expectation that someone will ask
            about your progress increases follow-through. This is the mechanism
            that MEOK&rsquo;s Pioneer archetype operationalises: the persistent,
            memory-holding presence that will ask what happened to the thing you
            said you would do is a social accountability signal, even though it is
            digital. For this to work, crucially, the system must remember
            across sessions — a stateless AI cannot hold a commitment device,
            because it will have no memory of the commitment.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              color: TEXT,
              marginBottom: "0.65rem",
              fontWeight: 600,
            }}
          >
            Pattern recognition requires longitudinal data
          </h3>
          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The relationship between time of day, cognitive load, emotional state,
            and procrastination is well-established but highly individual.
            Identifying your personal peak focus windows, your high-vulnerability
            periods, and your characteristic avoidance triggers requires
            observation over time — not a personality quiz or a generic schedule.
            Sovereign Memory is designed to accumulate exactly this longitudinal
            data, building a picture that improves in accuracy and utility the
            longer you use MEOK.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${GOLD}`,
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                lineHeight: 1.8,
                fontSize: "0.93rem",
                color: TEXT,
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>The compounding effect:</strong>{" "}
              The value of a memory-holding AI accountability partner is not
              linear — it compounds. The first week, MEOK is helpful. The first
              month, it is significantly more helpful, because it has begun to
              identify your patterns. At six months, it has a more accurate model
              of when and why you procrastinate than most coaches ever develop —
              because it has been present for every session, every successful day,
              and every avoidance episode.
            </p>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 10: Practical How-To ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "0.9rem",
              lineHeight: 1.3,
            }}
          >
            How do you actually use MEOK to stop procrastinating?
          </h2>
          <p style={{ lineHeight: 1.85, marginBottom: "1.5rem" }}>
            The practical architecture of using MEOK for procrastination is
            straightforward. It evolves in three stages as Sovereign Memory
            accumulates knowledge of your patterns.
          </p>

          {/* Stage 1 */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1.5rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                minWidth: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                backgroundColor: GOLD,
                color: "#0d0c18",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontFamily: "system-ui, sans-serif",
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              1
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  color: TEXT,
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                }}
              >
                Days 1–7: Orientation and first patterns
              </h3>
              <p style={{ lineHeight: 1.8, color: TEXT, fontSize: "0.95rem" }}>
                In the first week, MEOK is building its initial picture of you.
                The most valuable thing you can do is be honest: tell it what you
                actually struggle with, not what you wish you struggled with.
                Name the tasks you have been avoiding, the times of day that feel
                difficult, the emotional states that correlate with your
                avoidance. Use Hourman each morning to plan the day. Let the
                Pioneer archetype help you initiate. Do not perform productivity
                for MEOK — give it an accurate picture of your reality.
              </p>
            </div>
          </div>

          {/* Stage 2 */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1.5rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                minWidth: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                backgroundColor: GOLD,
                color: "#0d0c18",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontFamily: "system-ui, sans-serif",
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              2
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  color: TEXT,
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                }}
              >
                Weeks 2–4: Pattern recognition and adaptation
              </h3>
              <p style={{ lineHeight: 1.8, color: TEXT, fontSize: "0.95rem" }}>
                By the second week, Sovereign Memory has enough data to begin
                making pattern-based suggestions. MEOK may surface observations
                like &ldquo;you&rsquo;ve avoided the accounts task four times —
                shall we talk about what&rsquo;s in the way?&rdquo; or
                &ldquo;your Tuesday morning sessions consistently produce more
                than your Monday morning sessions — I&rsquo;ve moved your most
                demanding task to Tuesday.&rdquo; This is where the compounding
                value begins. Hourman&rsquo;s plans become more accurate. The
                Pioneer&rsquo;s interventions become more targeted. Begin to
                notice which archetypes feel most useful for which contexts.
              </p>
            </div>
          </div>

          {/* Stage 3 */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1.5rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                minWidth: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                backgroundColor: GOLD,
                color: "#0d0c18",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontFamily: "system-ui, sans-serif",
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              3
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  color: TEXT,
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                }}
              >
                Month 2 and beyond: Longitudinal accountability
              </h3>
              <p style={{ lineHeight: 1.8, color: TEXT, fontSize: "0.95rem" }}>
                After six to eight weeks, Sovereign Memory has a rich enough
                picture that MEOK functions as a genuine accountability partner
                in the fullest sense. It knows your history — what you have
                committed to, what you have followed through on, what patterns
                of avoidance have persisted, what has changed. For Sovereign tier
                users, this is when Ralph Mode becomes most valuable: the
                specificity of its task-hunting is calibrated to a long
                observation period, making its interventions much more likely to
                land correctly. At this stage, you are no longer fighting
                procrastination through willpower — you are managing it through
                a system that knows you well enough to help you work around your
                own resistance.
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: CARD,
              borderRadius: "12px",
              padding: "1.5rem",
              border: `1px solid ${BORDER}`,
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                color: GOLD,
                marginBottom: "0.75rem",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              Quick-start: three conversations to have with MEOK in your first week
            </h3>
            <ol
              style={{
                paddingLeft: "1.25rem",
                lineHeight: 2.1,
                margin: 0,
                fontSize: "0.93rem",
              }}
            >
              <li style={{ marginBottom: "0.75rem" }}>
                <strong style={{ color: TEXT }}>
                  Name your procrastination type.
                </strong>{" "}
                Tell MEOK which of the five types resonates most: perfectionism,
                overwhelm, fear-of-failure, decision fatigue, or ADHD
                initiation. This helps the Pioneer archetype calibrate its
                approach immediately rather than learning it over weeks.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong style={{ color: TEXT }}>
                  Share the task you&rsquo;ve been avoiding longest.
                </strong>{" "}
                The task that has been on your mental list the longest — the one
                that produces a specific low-grade dread when you think about it.
                Tell MEOK what it is, why you think you&rsquo;ve been avoiding
                it, and what the smallest possible first step would be. Pioneer
                will help you do that step.
              </li>
              <li>
                <strong style={{ color: TEXT }}>
                  Map your actual energy pattern.
                </strong>{" "}
                Tell MEOK honestly when you feel sharpest, when you typically
                fade, and when you are reliably unproductive. This gives
                Sovereign Memory its first accurate data points and allows
                Hourman to build its first plan around your real rhythm rather
                than a generic template.
              </li>
            </ol>
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 11: FAQ ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              marginBottom: "1.25rem",
              lineHeight: 1.3,
            }}
          >
            Frequently asked questions
          </h2>

          {[
            {
              q: "Can AI actually help you stop procrastinating?",
              a: "Yes — but only if the AI has memory. Most productivity apps and generic AI assistants are stateless: every session starts from zero. An AI with persistent memory, like MEOK's Sovereign Memory, knows your patterns and removes the ramp-up friction that triggers avoidance. That is structurally different from a reminder that fires at a random time and expects you to comply.",
            },
            {
              q: "What is an AI accountability partner?",
              a: "An AI accountability partner is a persistent, memory-holding presence that maintains context across sessions, remembers your commitments and patterns, and checks in without judgment on your progress. Unlike a to-do app — which is a list with no awareness of who you are — an accountability partner adapts to your specific procrastination type, gently persists when you go quiet, and builds an increasingly accurate picture of how to help you over time.",
            },
            {
              q: "What type of procrastinator are you if you always start tasks at the last minute?",
              a: "Deadline-activated procrastination is most often a combination of ADHD task-initiation difficulty and decision fatigue. The brain genuinely struggles to initiate without the urgency signal that a looming deadline provides. If this is your pattern, MEOK can help by artificially front-loading that urgency — scheduling tasks with fictional earlier deadlines that your Sovereign Memory knows you respond to — and using Ralph Mode to create external activation pressure before the real deadline arrives.",
            },
            {
              q: "Is MEOK free to use for procrastination support?",
              a: "MEOK offers a free tier that includes access to core archetypes and basic memory features. Sovereign Memory in its full form — with longitudinal pattern tracking and Ralph Mode — is available on the Sovereign tier. You can begin at meok.ai/birth and experience the Pioneer archetype and Hourman daily planning from your first session.",
            },
            {
              q: "Does MEOK work for people without ADHD?",
              a: "Yes. MEOK was designed with neurodivergent users in mind, but procrastination is universal — the five types affect neurotypical and neurodivergent people alike. The core features — Sovereign Memory, Pioneer archetype, Hourman planning, and Maternal Covenant accountability — are valuable regardless of whether ADHD is a factor. If you have ADHD specifically, certain features become even more important; if you don't, the same system works but through the lens of emotional regulation, decision fatigue, or perfectionism rather than neurological initiation difficulty.",
            },
            {
              q: "How long does it take to see results from using MEOK for procrastination?",
              a: "Most users notice a difference in the first session, because the Pioneer archetype provides immediate external activation energy. Pattern-based adaptation — where Sovereign Memory starts making intelligent predictions about your avoidance cycles — becomes meaningful after about two weeks of regular use. The most significant changes in longitudinal procrastination patterns typically emerge after four to eight weeks, as Hourman's plans become increasingly accurate and the accountability relationship deepens.",
            },
            {
              q: "Can MEOK help with procrastination caused by depression or anxiety?",
              a: "MEOK can provide valuable daily support for people whose procrastination is driven by depression or anxiety — non-judgmental structure, consistent presence, and gentle accountability can meaningfully help even on difficult days. However, MEOK is not a clinical tool and does not replace therapy or medical treatment where those are indicated. If your procrastination is significantly impacting your wellbeing and you haven't yet accessed professional support, MEOK would encourage you to do so alongside using the platform.",
            },
          ].map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                borderBottom: `1px solid ${BORDER}`,
                padding: "1.25rem 0",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  color: TEXT,
                  marginBottom: "0.6rem",
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                {q}
              </h3>
              <p
                style={{
                  lineHeight: 1.8,
                  color: MUTED,
                  fontSize: "0.93rem",
                  margin: 0,
                }}
              >
                {a}
              </p>
            </div>
          ))}
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── Section 12: Related Reading ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.3rem",
              color: GOLD,
              marginBottom: "1rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Related reading
          </h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              {
                href: "/blog/meok-for-adhd",
                title: "MEOK for ADHD: A Complete Guide",
                desc: "Task initiation, time-blindness, body doubling, and RSD — how MEOK addresses the full spectrum of ADHD executive function challenges.",
              },
              {
                href: "/blog/what-is-ralph-mode",
                title: "What Is Ralph Mode?",
                desc: "The complete guide to MEOK's task-hunting execution mode for Sovereign tier users.",
              },
              {
                href: "/blog/morning-brief-guide",
                title: "MEOK Morning Brief Guide",
                desc: "How to use Hourman and the morning briefing to structure a day that actually gets done.",
              },
              {
                href: "/blog/ai-productivity-app",
                title: "The AI Productivity App That Remembers You",
                desc: "Why persistent memory is the single most important feature in any AI productivity tool.",
              },
              {
                href: "/blog/ai-for-burnout",
                title: "AI for Burnout: When the Engine Runs Dry",
                desc: "Procrastination and burnout are closely related. This guide addresses the overlap and what to do when willpower isn't just thin — it's gone.",
              },
              {
                href: "/blog/what-is-morning-briefing",
                title: "What Is MEOK's Morning Briefing?",
                desc: "A detailed look at how Hourman creates your daily plan and what information it uses to do it.",
              },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  backgroundColor: CARD,
                  borderRadius: "10px",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  border: `1px solid ${BORDER}`,
                  transition: "border-color 0.2s",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.93rem",
                    margin: "0 0 0.3rem",
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    margin: 0,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div
          style={{ height: "1px", backgroundColor: BORDER, margin: "2rem 0" }}
        />

        {/* ── CTA ── */}
        <section
          style={{
            backgroundColor: ACCENT,
            borderRadius: "16px",
            padding: "2.5rem 2rem",
            textAlign: "center",
            border: `1px solid ${BORDER}`,
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: GOLD,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: TEXT,
              marginBottom: "1rem",
              lineHeight: 1.3,
              fontWeight: 700,
            }}
          >
            Stop managing procrastination. Let MEOK remember your patterns for you.
          </h2>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "1.75rem",
              maxWidth: "520px",
              margin: "0 auto 1.75rem",
              fontSize: "0.97rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Pioneer &#x26A1; is ready. Hourman is ready. Sovereign Memory begins
            building from your very first conversation. The only thing that
            doesn&rsquo;t change is your procrastination — until you do.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              padding: "0.85rem 2.25rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Begin with MEOK &rarr;
          </Link>
          <p
            style={{
              fontSize: "0.78rem",
              color: MUTED,
              marginTop: "0.85rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Free to start &bull; No credit card required &bull; meok.ai/birth
          </p>
        </section>

        {/* ── Footer ── */}
        <footer
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <p
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "0.35rem",
                  letterSpacing: "0.05em",
                }}
              >
                MEOK AI LABS
              </p>
              <p style={{ color: MUTED, fontSize: "0.82rem", lineHeight: 1.6 }}>
                Sovereign AI built around you.
                <br />
                Founded by Nicholas Templeman.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/birth", label: "Get Started" },
                { href: "/blog/meok-for-adhd", label: "MEOK for ADHD" },
                { href: "/blog/what-is-ralph-mode", label: "Ralph Mode" },
                { href: "/blog/sovereign-ai-explained", label: "Sovereign AI" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    color: MUTED,
                    textDecoration: "none",
                    fontSize: "0.82rem",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <p
            style={{
              color: MUTED,
              fontSize: "0.77rem",
              borderTop: `1px solid ${BORDER}`,
              paddingTop: "1rem",
            }}
          >
            &copy; 2026 MEOK AI LABS. All rights reserved.{" "}
            <Link
              href="https://meok.ai"
              style={{ color: MUTED, textDecoration: "none" }}
            >
              meok.ai
            </Link>
          </p>
        </footer>
      </main>
    </div>
  );
}
