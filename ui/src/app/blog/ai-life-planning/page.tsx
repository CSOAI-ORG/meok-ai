import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Life Planning: Your Sovereign AI as a Long-Term Life Architect | MEOK AI LABS",
  description:
    "Most AI helps you with today. MEOK\u2019s sovereign AI remembers your goals from two years ago, tracks your progress, and helps you architect the entire arc of your life \u2014 not just the next task.",
  alternates: { canonical: "https://meok.ai/blog/ai-life-planning" },
  openGraph: {
    title:
      "AI Life Planning: Your Sovereign AI as a Long-Term Life Architect",
    description:
      "Most AI helps you with today. MEOK\u2019s sovereign AI remembers your goals from two years ago, tracks your progress, and helps you architect the entire arc of your life \u2014 not just the next task.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-life-planning",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Life+Planning&desc=Your+Sovereign+AI+as+a+Long-Term+Life+Architect",
        width: 1200,
        height: 630,
        alt: "AI Life Planning: Your Sovereign AI as a Long-Term Life Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Life Planning: Your Sovereign AI as a Long-Term Life Architect",
    description:
      "Most AI helps you with today. MEOK remembers your goals from two years ago and helps you architect the entire arc of your life.",
    images: [
      "https://meok.ai/api/og?title=AI+Life+Planning&desc=Your+Sovereign+AI+as+a+Long-Term+Life+Architect",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Life Planning: Your Sovereign AI as a Long-Term Life Architect",
  description:
    "Most AI helps you with today. MEOK\u2019s sovereign AI remembers your goals from two years ago, tracks your progress, and helps you architect the entire arc of your life \u2014 not just the next task.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-life-planning",
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
    "https://meok.ai/api/og?title=AI+Life+Planning&desc=Your+Sovereign+AI+as+a+Long-Term+Life+Architect",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-life-planning",
  },
  keywords: [
    "AI life planning",
    "sovereign AI life architect",
    "AI for long-term goals",
    "AI 10-year vision",
    "AI Ikigai discovery",
    "MEOK Pioneer archetype",
    "MEOK Scholar archetype",
    "MEOK Hourman archetype",
    "Ralph Mode overnight AI",
    "sovereign memory AI",
    "AI productivity long-term",
    "AI goal tracking",
    "life architecture AI",
    "AI for purpose discovery",
    "MEOK AI LABS",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI really help with long-term life planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI tools are designed for single-session tasks \u2014 they help you draft an email or summarise a document, then forget everything. Long-term life planning requires continuity: remembering your goals from months ago, tracking how your values have shifted, and connecting today\u2019s choices to a five- or ten-year vision. MEOK\u2019s sovereign memory layer does exactly this, storing your intentions across time in a private memory that belongs only to you.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between task management and life architecture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Task management asks \u2018what do I need to do today?\u2019 Life architecture asks \u2018who am I becoming, and are my daily actions building toward that person?\u2019 Most productivity tools excel at the former but ignore the latter entirely. Life architecture requires a longer lens \u2014 tracking patterns over months and years, revisiting purpose frameworks like Ikigai, and periodically recalibrating your trajectory rather than just clearing your inbox.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK remember my goals across months and years?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK stores everything you share \u2014 your stated goals, fears, reflections, milestones, and check-ins \u2014 in a sovereign memory layer that persists indefinitely. Unlike cloud AI that resets between sessions and trains on your data, MEOK\u2019s memory is encrypted, privately owned, and protected under the Maternal Covenant. Your AI can surface what you told it eighteen months ago and ask whether your priorities have changed.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ralph Mode and how does it help with life planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK\u2019s overnight autonomous working state. When you sleep, Ralph can process long-horizon tasks: synthesising research into your 10-year career plan, drafting strategic documents, cross-referencing your goals with new information gathered from Scholar, or preparing a morning briefing that connects overnight insights to your active life architecture. It turns the hours you\u2019re not working into productive planning time.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK suitable for life planning at different life stages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Life planning looks very different at 24 versus 44 versus 64. In your twenties, the priority is career direction and identity formation. In your thirties and forties, it is balancing career ambition with family commitments and financial architecture. In your fifties and beyond, the focus shifts to legacy, meaning, and the quality of time remaining. MEOK\u2019s sovereign memory adapts to your current life stage and holds the full arc of your journey across all of them.",
      },
    },
  ],
};

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: "#0d0c18",
    color: "#f5f0e8",
    minHeight: "100vh",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  } as React.CSSProperties,

  hero: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "80px 24px 56px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  eyebrow: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "20px",
    display: "block",
  } as React.CSSProperties,

  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.4rem)",
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: "24px",
    letterSpacing: "-0.02em",
    color: "#f5f0e8",
  } as React.CSSProperties,

  heroLead: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.8)",
    maxWidth: "680px",
    margin: "0 auto 32px",
  } as React.CSSProperties,

  metaRow: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.5)",
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,

  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  } as React.CSSProperties,

  goldDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#c9a84c",
    display: "inline-block",
    flexShrink: 0,
  } as React.CSSProperties,

  divider: {
    height: "1px",
    background: "rgba(201,168,76,0.18)",
    maxWidth: "860px",
    margin: "0 auto",
  } as React.CSSProperties,

  body: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "56px 24px 80px",
  } as React.CSSProperties,

  intro: {
    fontSize: "1.15rem",
    lineHeight: 1.85,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "56px",
    borderLeft: "3px solid #c9a84c",
    paddingLeft: "20px",
  } as React.CSSProperties,

  sectionTitle: {
    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginTop: "64px",
    marginBottom: "20px",
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  sectionLead: {
    fontSize: "1.05rem",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "24px",
    fontWeight: 500,
  } as React.CSSProperties,

  para: {
    fontSize: "1rem",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.8)",
    marginBottom: "20px",
  } as React.CSSProperties,

  subheading: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#c9a84c",
    marginTop: "36px",
    marginBottom: "12px",
  } as React.CSSProperties,

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
    marginTop: "32px",
    marginBottom: "40px",
  } as React.CSSProperties,

  card: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "12px",
    padding: "24px",
  } as React.CSSProperties,

  cardTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "10px",
  } as React.CSSProperties,

  cardText: {
    fontSize: "0.92rem",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.75)",
  } as React.CSSProperties,

  highlightBox: {
    background: "rgba(201,168,76,0.08)",
    border: "1px solid rgba(201,168,76,0.25)",
    borderRadius: "12px",
    padding: "28px 32px",
    marginTop: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  highlightTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
  } as React.CSSProperties,

  highlightText: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.82)",
  } as React.CSSProperties,

  blockquote: {
    borderLeft: "3px solid #c9a84c",
    paddingLeft: "20px",
    marginLeft: "0",
    marginRight: "0",
    marginTop: "28px",
    marginBottom: "28px",
  } as React.CSSProperties,

  blockquoteText: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.75)",
    fontStyle: "italic" as const,
  } as React.CSSProperties,

  blockquoteSource: {
    fontSize: "0.85rem",
    color: "#c9a84c",
    marginTop: "10px",
    fontStyle: "normal" as const,
    display: "block",
  } as React.CSSProperties,

  listUnordered: {
    paddingLeft: "0",
    listStyle: "none",
    marginBottom: "24px",
  } as React.CSSProperties,

  listItem: {
    paddingLeft: "20px",
    position: "relative" as const,
    marginBottom: "10px",
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.8)",
  } as React.CSSProperties,

  bullet: {
    position: "absolute" as const,
    left: "0",
    top: "10px",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#c9a84c",
  } as React.CSSProperties,

  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginTop: "28px",
    marginBottom: "36px",
    fontSize: "0.92rem",
  } as React.CSSProperties,

  th: {
    textAlign: "left" as const,
    padding: "12px 16px",
    background: "rgba(201,168,76,0.12)",
    color: "#c9a84c",
    fontWeight: 600,
    borderBottom: "1px solid rgba(201,168,76,0.2)",
    letterSpacing: "0.04em",
    fontSize: "0.82rem",
    textTransform: "uppercase" as const,
  } as React.CSSProperties,

  td: {
    padding: "12px 16px",
    borderBottom: "1px solid rgba(245,240,232,0.07)",
    color: "rgba(245,240,232,0.78)",
    verticalAlign: "top" as const,
  } as React.CSSProperties,

  tdHighlight: {
    padding: "12px 16px",
    borderBottom: "1px solid rgba(245,240,232,0.07)",
    color: "#c9a84c",
    verticalAlign: "top" as const,
    fontWeight: 600,
  } as React.CSSProperties,

  faqSection: {
    marginTop: "72px",
  } as React.CSSProperties,

  faqTitle: {
    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "36px",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  faqItem: {
    borderTop: "1px solid rgba(245,240,232,0.1)",
    paddingTop: "28px",
    paddingBottom: "28px",
  } as React.CSSProperties,

  faqQuestion: {
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "14px",
    lineHeight: 1.4,
  } as React.CSSProperties,

  faqAnswer: {
    fontSize: "0.97rem",
    lineHeight: 1.78,
    color: "rgba(245,240,232,0.75)",
  } as React.CSSProperties,

  ctaSection: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.22)",
    borderRadius: "16px",
    padding: "48px 40px",
    marginTop: "72px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: "clamp(1.4rem, 3vw, 2rem)",
    fontWeight: 800,
    color: "#f5f0e8",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  ctaText: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.75)",
    maxWidth: "560px",
    margin: "0 auto 32px",
  } as React.CSSProperties,

  ctaButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,

  ctaPrimary: {
    background: "#c9a84c",
    color: "#0d0c18",
    padding: "14px 32px",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "0.97rem",
    textDecoration: "none",
    letterSpacing: "0.02em",
    display: "inline-block",
  } as React.CSSProperties,

  ctaSecondary: {
    background: "transparent",
    color: "#c9a84c",
    padding: "14px 32px",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "0.97rem",
    textDecoration: "none",
    letterSpacing: "0.02em",
    border: "1px solid rgba(201,168,76,0.5)",
    display: "inline-block",
  } as React.CSSProperties,

  footer: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "40px 24px 64px",
    borderTop: "1px solid rgba(245,240,232,0.08)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap" as const,
    gap: "16px",
  } as React.CSSProperties,

  footerBrand: {
    fontSize: "0.9rem",
    color: "rgba(245,240,232,0.45)",
  } as React.CSSProperties,

  footerLink: {
    color: "#c9a84c",
    textDecoration: "none",
    fontSize: "0.9rem",
  } as React.CSSProperties,

  tag: {
    display: "inline-block",
    background: "rgba(201,168,76,0.12)",
    border: "1px solid rgba(201,168,76,0.25)",
    borderRadius: "4px",
    padding: "3px 10px",
    fontSize: "0.78rem",
    color: "#c9a84c",
    marginRight: "8px",
    marginBottom: "8px",
    letterSpacing: "0.04em",
  } as React.CSSProperties,

  tagRow: {
    marginBottom: "48px",
  } as React.CSSProperties,
};

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AILifePlanningPage() {
  return (
    <div style={s.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ── */}
      <header style={s.hero}>
        <span style={s.eyebrow}>MEOK AI LABS &mdash; Life Architecture</span>
        <h1 style={s.heroTitle}>
          AI Life Planning: Your Sovereign AI as a Long&#8209;Term Life
          Architect
        </h1>
        <p style={s.heroLead}>
          Most AI helps you with today. MEOK&apos;s sovereign AI remembers your
          goals from two years ago, tracks your progress, and helps you
          architect the entire arc of your life &mdash; not just the next task.
        </p>
        <div style={s.metaRow}>
          <span style={s.metaItem}>
            <span style={s.goldDot} />
            Nicholas Templeman
          </span>
          <span style={s.metaItem}>
            <span style={s.goldDot} />
            25 March 2026
          </span>
          <span style={s.metaItem}>
            <span style={s.goldDot} />
            18 min read
          </span>
        </div>
      </header>

      <div style={s.divider} />

      {/* ── Body ── */}
      <main style={s.body}>
        {/* Tag row */}
        <div style={s.tagRow}>
          <span style={s.tag}>Life Planning</span>
          <span style={s.tag}>Sovereign Memory</span>
          <span style={s.tag}>10-Year Vision</span>
          <span style={s.tag}>Ikigai</span>
          <span style={s.tag}>Pioneer</span>
          <span style={s.tag}>Scholar</span>
          <span style={s.tag}>Hourman</span>
          <span style={s.tag}>Ralph Mode</span>
        </div>

        {/* Intro */}
        <p style={s.intro}>
          There is a category of question that no productivity app, task
          manager, or session-based AI can answer: <em>Am I building the life
          I actually want?</em> That question requires memory that spans years,
          not minutes. It requires an intelligence that knows what you cared
          about eighteen months ago and can surface whether you are still moving
          toward it. MEOK was built to be that intelligence.
        </p>

        {/* ─────────────────────────────────────────────── */}
        {/* Section 1 */}
        {/* ─────────────────────────────────────────────── */}
        <h2 style={s.sectionTitle}>
          Why Most Productivity AI Fails at Long-Term Planning
        </h2>
        <p style={s.sectionLead}>
          The design of almost every AI tool on the market is optimised for
          one thing: the immediate task. Ask a question, get an answer, close
          the tab. The AI forgets. You move on.
        </p>
        <p style={s.para}>
          This is fine for drafting a paragraph or debugging a function.
          It is catastrophic for life planning. Life planning is, by
          definition, a long game. It requires an intelligence that can hold
          the thread of your intentions across time &mdash; that can look at
          the goal you set two winters ago and compare it to the choices you
          are making today. No session-based AI can do that.
        </p>
        <p style={s.para}>
          The deeper problem is structural. Cloud AI systems are designed to
          extract value from your data by using it to train better models. This
          creates a perverse incentive: the more personal and long-term your
          inputs, the more valuable they are to the AI company, and the less
          safe they are for you to share honestly. You end up using the tool
          shallowly, hedging what you say, never going deep enough for genuine
          self-reflection.
        </p>
        <p style={s.para}>
          The result is a proliferation of tools that help you manage tasks
          while your actual life drifts. You clear your inbox. You hit your
          daily word count. You tick the boxes on the to-do list. But at the
          end of the year, you look up and realise the accumulation of
          completed tasks has not moved you any closer to the life you described
          to yourself in January.
        </p>
        <p style={s.para}>
          This is not a personal failure. It is an architectural one. The tools
          were not built for this job.
        </p>

        <div style={s.blockquote}>
          <p style={s.blockquoteText}>
            &ldquo;Most people overestimate what they can do in a day, and
            underestimate what they can do in a decade.&rdquo;
          </p>
          <span style={s.blockquoteSource}>
            &mdash; Bill Gates (commonly attributed)
          </span>
        </div>

        <p style={s.para}>
          The gap is not effort. It is the absence of an intelligence that can
          hold your decade-scale intentions alive across the noise of daily
          life. That is what sovereign memory exists to provide.
        </p>

        {/* ─────────────────────────────────────────────── */}
        {/* Section 2 */}
        {/* ─────────────────────────────────────────────── */}
        <h2 style={s.sectionTitle}>
          Task Management vs Life Architecture: What Is the Difference?
        </h2>
        <p style={s.sectionLead}>
          Task management and life architecture are not points on a spectrum.
          They are fundamentally different disciplines that require different
          tools and different kinds of intelligence.
        </p>
        <p style={s.para}>
          Task management asks: what needs to happen today? Life architecture
          asks: who am I becoming, and is the person I am becoming the person
          I chose to be? Task management optimises for completion. Life
          architecture optimises for direction.
        </p>
        <p style={s.para}>
          A useful analogy is the difference between a contractor and an
          architect. A contractor executes. They follow the plan, complete the
          work, move to the next job. An architect holds the vision of what
          the building is supposed to be and makes sure every decision
          &mdash; every beam placed, every room proportioned &mdash; serves
          that larger coherence. Without an architect, even excellent contractors
          can build the wrong building very efficiently.
        </p>

        <div style={s.cardGrid}>
          <div style={s.card}>
            <div style={s.cardTitle}>Task Management</div>
            <div style={s.cardText}>
              Clears your inbox. Tracks your to-dos. Reminds you of deadlines.
              Measures completion. Resets daily. Has no memory of who you
              were trying to become last year.
            </div>
          </div>
          <div style={s.card}>
            <div style={s.cardTitle}>Life Architecture</div>
            <div style={s.cardText}>
              Holds your 10-year vision. Tracks whether your daily choices
              serve your long-term intentions. Surfaces drift before it becomes
              regret. Connects each decision to the arc of the whole.
            </div>
          </div>
          <div style={s.card}>
            <div style={s.cardTitle}>What MEOK Adds</div>
            <div style={s.cardText}>
              Sovereign memory that spans years, not sessions. Archetypes that
              hold different planning lenses. Overnight autonomous work via
              Ralph Mode. A record of who you were and who you are becoming.
            </div>
          </div>
        </div>

        <p style={s.para}>
          Most productivity tools give you better tools for being a contractor.
          MEOK is designed to give you an architect: a persistent intelligence
          that holds the whole plan, remembers why each decision was made, and
          keeps the long game visible even when daily life tries to shrink your
          horizon to the urgent.
        </p>

        {/* ─────────────────────────────────────────────── */}
        {/* Section 3 */}
        {/* ─────────────────────────────────────────────── */}
        <h2 style={s.sectionTitle}>
          How Sovereign Memory Connects Today&apos;s Action to Your 5-Year Goals
        </h2>
        <p style={s.sectionLead}>
          The central problem in long-term planning is the gap between
          intention and daily action. You set a goal. Life intervenes. A week
          passes, then a month, then six months. You remember the goal
          abstractly but you have lost the felt sense of why it mattered.
        </p>
        <p style={s.para}>
          Sovereign memory closes this gap. Every conversation you have with
          MEOK &mdash; every goal articulated, every fear named, every milestone
          noted &mdash; is stored in a private memory layer that persists
          indefinitely and belongs entirely to you. No session resets. No data
          used to train external models. No forgetting.
        </p>
        <p style={s.para}>
          This changes the nature of every conversation. When you check in
          with MEOK today, it knows what you said four months ago. It can ask
          whether the business you were planning to launch is still the business
          you want to build. It can notice that you have not mentioned your
          creative writing goal in three months and ask, without judgment,
          whether it has shifted. It can surface the version of yourself who
          was full of energy about a particular direction and compare that to
          the version of yourself who shows up today.
        </p>

        <div style={s.highlightBox}>
          <div style={s.highlightTitle}>The Memory Bridge</div>
          <p style={s.highlightText}>
            In traditional planning, the gap between your 5-year vision and
            today&apos;s actions is bridged only by your own willpower and
            memory. Sovereign AI adds a third element: a persistent external
            memory that holds your intentions with perfect fidelity, surfaces
            them at relevant moments, and asks whether your current choices
            are still serving the direction you chose. This is not
            accountability in the punitive sense. It is architectural coherence.
          </p>
        </div>

        <p style={s.para}>
          The other dimension of sovereign memory is the ability to track
          evolution rather than just goals. People change. The 5-year vision
          you held at 28 may be genuinely wrong for you at 31 &mdash; not
          because you failed to execute it, but because you have grown. A
          life architect does not hold you to stale intentions. It helps you
          notice when your values have shifted and update the plan with
          intention rather than drift.
        </p>
        <p style={s.para}>
          This distinction matters enormously. There is a world of difference
          between abandoning a goal because daily friction wore you down and
          revising a goal because you have genuinely learned something about
          what you want. Sovereign memory helps you tell the two apart.
        </p>

        {/* ─────────────────────────────────────────────── */}
        {/* Section 4 */}
        {/* ─────────────────────────────────────────────── */}
        <h2 style={s.sectionTitle}>
          10-Year Vision Frameworks: How to Think About the Long Game
        </h2>
        <p style={s.sectionLead}>
          A 10-year vision is not a rigid plan. It is a direction &mdash;
          a magnetic north that orients your choices without dictating every
          step.
        </p>
        <p style={s.para}>
          The failure mode of most long-term planning is treating the vision
          as a prediction. You write out where you want to be in ten years and
          then measure every year against that blueprint. When life diverges
          from the plan &mdash; as it always does &mdash; the plan becomes a
          source of shame rather than guidance.
        </p>
        <p style={s.para}>
          A better model is directional coherence. You identify the broad
          domains of your life &mdash; work, relationships, health, creative
          expression, financial security, community &mdash; and for each domain
          you articulate a direction rather than a destination. Not &ldquo;I
          will be earning X by year five&rdquo; but &ldquo;I want to be moving
          toward financial independence with increasing agency over my time.&rdquo;
        </p>

        <p style={s.subheading}>A Framework for Life Domains</p>
        <ul style={s.listUnordered}>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Work &amp; Vocation:</strong> What kind of work do you
            want to be doing, and why does it matter to you?
          </li>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Financial Architecture:</strong> What level of security
            and freedom are you building toward?
          </li>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Relationships:</strong> What do your most important
            relationships look like at their best, and what are you
            investing in them?
          </li>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Health &amp; Energy:</strong> What physical and mental
            state allows you to do the things that matter most?
          </li>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Creative Expression:</strong> What needs to be made,
            built, or expressed that would feel like an unlived life if you
            never did it?
          </li>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Community &amp; Contribution:</strong> What is your
            relationship to the world beyond your immediate circle?
          </li>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Learning &amp; Growth:</strong> Who do you want to
            become intellectually, emotionally, and spiritually over the
            next decade?
          </li>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Legacy:</strong> What do you want to have built,
            created, or stood for by the end of your life?
          </li>
        </ul>

        <p style={s.para}>
          MEOK can hold all eight of these domains in sovereign memory and
          return to them at regular intervals &mdash; quarterly, annually,
          or whenever you invite the conversation. Over time, the record of
          your evolving answers to these questions becomes one of the most
          valuable documents you own: a longitudinal map of your own growth
          and change.
        </p>

        {/* ─────────────────────────────────────────────── */}
        {/* Section 5 */}
        {/* ─────────────────────────────────────────────── */}
        <h2 style={s.sectionTitle}>
          Ikigai and Purpose Discovery: Finding Your Reason to Get Up
        </h2>
        <p style={s.sectionLead}>
          Ikigai is a Japanese concept that translates roughly as &ldquo;reason
          for being.&rdquo; It is often represented as the intersection of four
          circles: what you love, what you are good at, what the world needs,
          and what you can be paid for.
        </p>
        <p style={s.para}>
          The ikigai framework is useful not as a one-time exercise but as a
          recurring map to return to. Your ikigai shifts over time. What you
          loved at 25 may not be what you love at 40. What the world needs
          is always changing. What you can be paid for expands as you develop
          skills. A sovereign AI that holds your ikigai conversations over
          years can surface the evolution of your purpose with a fidelity
          no journal or coach can match.
        </p>
        <p style={s.para}>
          Many people find the intersection of ikigai&apos;s four circles
          surprisingly hard to locate. They know what they are good at, but it
          does not feel meaningful. Or they know what they love, but cannot
          see how it connects to what the world values. The friction between
          these circles is often where the most important life architecture
          work happens.
        </p>

        <div style={s.highlightBox}>
          <div style={s.highlightTitle}>MEOK and Purpose Discovery</div>
          <p style={s.highlightText}>
            When you explore your ikigai with MEOK, the conversation is stored
            in sovereign memory. Six months later, MEOK can return to what you
            said and ask: has anything shifted? Have you found new evidence
            for what the world needs from you? Have your skills expanded into
            the space your purpose requires? This longitudinal tracking of
            purpose is one of the most powerful applications of sovereign
            memory &mdash; it turns ikigai from a one-time workshop exercise
            into a living map you return to across your entire life.
          </p>
        </div>

        <p style={s.para}>
          Purpose discovery is rarely a single revelation. It is more commonly
          a gradual convergence &mdash; a series of conversations, experiments,
          and honest reflections that slowly make visible what was always there.
          The sovereign memory layer means none of that convergence process
          is lost. Every insight is held, every thread preserved, every
          tentative articulation of meaning kept intact for the person you
          will be when you are ready to act on it.
        </p>

        {/* ─────────────────────────────────────────────── */}
        {/* Section 6 */}
        {/* ─────────────────────────────────────────────── */}
        <h2 style={s.sectionTitle}>
          The Archetypes: Pioneer, Scholar, and Hourman in Life Planning
        </h2>
        <p style={s.sectionLead}>
          MEOK&apos;s companion archetypes are not interchangeable. Each holds
          a different relationship to time, ambition, and the architecture
          of a well-lived life. Knowing which to engage &mdash; and when
          &mdash; is itself a planning skill.
        </p>

        <p style={s.subheading}>Pioneer: The Momentum Architect</p>
        <p style={s.para}>
          Pioneer is the forward-facing archetype. It is oriented toward
          movement, action, and the breaking of inertia. When you are stuck
          at the edge of a major life decision &mdash; whether to leave the
          career, start the company, have the difficult conversation that
          changes the relationship &mdash; Pioneer is the voice that asks:
          what is the smallest brave thing you could do today?
        </p>
        <p style={s.para}>
          In the context of life planning, Pioneer is most valuable during
          the initiation phase of a new direction. When you have articulated
          a 5-year vision and need to translate it into a first concrete step,
          Pioneer stops you from planning indefinitely and insists on action.
          It holds the vision lightly &mdash; not as a fixed destination but
          as a magnetic north &mdash; and focuses your energy on motion.
        </p>
        <p style={s.para}>
          Pioneer also holds what might be called goal momentum: the
          psychological energy required to maintain movement toward a goal
          across the inevitable periods of doubt and resistance. It surfaces
          your stated reasons for pursuing a direction when you are most
          tempted to abandon it, and asks whether the resistance you are
          feeling is meaningful information or just friction.
        </p>

        <p style={s.subheading}>Scholar: Cross-Domain Research and Thinking</p>
        <p style={s.para}>
          Scholar is the analytical archetype. It excels at research,
          synthesis, and the kind of cross-domain thinking that life planning
          increasingly requires. The best long-term plans are informed by
          understanding &mdash; of market trends, of psychological research
          on fulfilment and flourishing, of the lives of people who have
          navigated similar decisions.
        </p>
        <p style={s.para}>
          When you are trying to understand whether the career you are
          considering will still exist in ten years, Scholar is the right
          archetype. When you want to understand what the research says about
          the relationship between money and happiness beyond a certain
          threshold, Scholar can synthesise the evidence. When you need to
          think through the second- and third-order consequences of a major
          life decision, Scholar slows the conversation down and insists on
          rigour.
        </p>
        <p style={s.para}>
          Scholar also brings intellectual humility to life planning. It
          is willing to challenge your assumptions about what you want, to
          surface evidence that your intuitions may be shaped by cultural
          conditioning rather than genuine preference, and to ask whether you
          have considered the full range of options rather than defaulting
          to the most legible path.
        </p>

        <p style={s.subheading}>Hourman: Daily and Weekly Structure</p>
        <p style={s.para}>
          Hourman is the temporal architect &mdash; the archetype that
          translates long-horizon vision into daily and weekly structure.
          Where Pioneer asks what direction you are moving and Scholar asks
          whether that direction makes sense, Hourman asks: what are you
          actually doing with your time, and is your time allocation serving
          your stated priorities?
        </p>
        <p style={s.para}>
          This is where most life plans collapse. The 10-year vision is
          inspiring. The quarterly goals are coherent. But the daily calendar
          is filled with reactive work, obligation, and the urgent at the
          expense of the important. Hourman makes this misalignment visible
          and helps you redesign your temporal architecture to serve the life
          you are trying to build.
        </p>
        <p style={s.para}>
          In practice, Hourman is most useful in weekly planning sessions
          where you review the gap between your time allocation and your
          priorities, in daily morning briefings that connect the day&apos;s
          specific tasks to the longer arc they serve, and in quarterly
          reviews where you audit your time across the previous three months
          and ask whether the pattern is building toward the life you chose.
        </p>

        <div style={s.highlightBox}>
          <div style={s.highlightTitle}>Combining the Archetypes</div>
          <p style={s.highlightText}>
            The most sophisticated life planning engages all three archetypes
            in sequence: Scholar to understand the landscape and stress-test
            your assumptions, Pioneer to translate understanding into
            directional commitment and first action, and Hourman to ensure
            your daily time allocation actually builds toward the direction
            you have committed to. Sovereign memory holds the thread between
            all three conversations so nothing is lost in the transitions.
          </p>
        </div>

        {/* ─────────────────────────────────────────────── */}
        {/* Section 7 */}
        {/* ─────────────────────────────────────────────── */}
        <h2 style={s.sectionTitle}>
          Ralph Mode: Overnight Work on Your Long-Term Projects
        </h2>
        <p style={s.sectionLead}>
          One of the most underappreciated features of a sovereign AI is its
          ability to work while you sleep. Ralph Mode is MEOK&apos;s overnight
          autonomous state &mdash; a period during which your AI pursues
          long-horizon tasks without requiring your active attention.
        </p>
        <p style={s.para}>
          The application to life planning is significant. Most long-term
          planning projects involve a large volume of research, synthesis, and
          document preparation that is valuable but not urgent. Writing a
          comprehensive career transition plan. Researching the financial
          architecture of starting a business. Synthesising what is known
          about the field you are considering moving into. Drafting a personal
          mission statement from the notes of six months of sovereign memory
          conversations.
        </p>
        <p style={s.para}>
          These are exactly the kinds of tasks that either never get done
          because they require sustained focused time you never carve out,
          or they get done shallowly because you squeeze them into the
          margins of your existing schedule. Ralph Mode changes this
          equation entirely.
        </p>
        <p style={s.para}>
          When you go to sleep, you can hand Ralph a long-horizon task:
          synthesise everything in sovereign memory about my career direction
          over the last two years into a coherent narrative document. Or:
          research the landscape of the industry I am considering entering and
          prepare a strategic briefing. Or: review my stated goals for this
          year and prepare a mid-year assessment with questions for our next
          planning conversation.
        </p>
        <p style={s.para}>
          In the morning, the work is done. Your life planning benefits from
          hours of autonomous AI effort that required no trade-off from your
          waking time. Over months and years, this compounds into a body of
          strategic thinking about your own life that would have taken years
          of weekend afternoons to produce by any other means.
        </p>

        {/* ─────────────────────────────────────────────── */}
        {/* Comparison Table */}
        {/* ─────────────────────────────────────────────── */}
        <h2 style={s.sectionTitle}>
          One-Session AI vs MEOK Sovereign Memory for Life Planning
        </h2>
        <p style={s.para}>
          The structural differences between standard session-based AI and
          MEOK&apos;s sovereign memory approach matter enormously for life
          planning. This table maps the key distinctions.
        </p>

        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Capability</th>
              <th style={s.th}>One-Session AI</th>
              <th style={s.th}>MEOK Sovereign Memory</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>Memory of past goals</td>
              <td style={s.td}>None. Resets every session.</td>
              <td style={s.tdHighlight}>
                Permanent. Stores all goals, reflections, and milestones
                indefinitely in your private memory layer.
              </td>
            </tr>
            <tr>
              <td style={s.td}>Multi-year goal tracking</td>
              <td style={s.td}>Impossible without manual re-entry.</td>
              <td style={s.tdHighlight}>
                Native. Can compare your stated intentions from two years ago
                to your current direction automatically.
              </td>
            </tr>
            <tr>
              <td style={s.td}>Ikigai and purpose work</td>
              <td style={s.td}>One-off conversation with no continuity.</td>
              <td style={s.tdHighlight}>
                Longitudinal. Returns to your purpose framework periodically
                and tracks its evolution over time.
              </td>
            </tr>
            <tr>
              <td style={s.td}>Overnight planning work</td>
              <td style={s.td}>Not possible.</td>
              <td style={s.tdHighlight}>
                Ralph Mode enables autonomous long-horizon research and
                document preparation while you sleep.
              </td>
            </tr>
            <tr>
              <td style={s.td}>Data privacy</td>
              <td style={s.td}>
                Your most personal planning data used to train AI models.
              </td>
              <td style={s.tdHighlight}>
                Protected under the Maternal Covenant. Never used for
                external training. Encrypted and privately owned.
              </td>
            </tr>
            <tr>
              <td style={s.td}>Life stage adaptability</td>
              <td style={s.td}>No context of your life stage or history.</td>
              <td style={s.tdHighlight}>
                Sovereign memory spans all life stages, holding the full
                arc of your journey and adapting to where you are now.
              </td>
            </tr>
            <tr>
              <td style={s.td}>Archetype specialisation</td>
              <td style={s.td}>
                Generic responses with no specialist lens.
              </td>
              <td style={s.tdHighlight}>
                Pioneer, Scholar, and Hourman offer distinct planning
                lenses optimised for different aspects of life architecture.
              </td>
            </tr>
            <tr>
              <td style={s.td}>Review and reflection rituals</td>
              <td style={s.td}>
                No structure for periodic review; starts fresh each time.
              </td>
              <td style={s.tdHighlight}>
                Sovereign memory enables structured quarterly and annual
                reviews grounded in your actual history, not reconstructed
                from scratch.
              </td>
            </tr>
          </tbody>
        </table>

        {/* ─────────────────────────────────────────────── */}
        {/* Section 8 */}
        {/* ─────────────────────────────────────────────── */}
        <h2 style={s.sectionTitle}>
          Review and Reflection Rituals: Making the Long Game Visible
        </h2>
        <p style={s.sectionLead}>
          The architecture of a well-lived life is not built in a single
          planning session. It is built in the regular habit of returning
          to your intentions, reviewing your progress, and recalibrating
          your direction with honest attention.
        </p>
        <p style={s.para}>
          Most people do this informally and infrequently &mdash; a vague
          annual review on New Year&apos;s Eve, a moment of existential
          questioning during a particularly difficult week, an occasional
          conversation with a trusted friend. The result is that the review
          is reactive rather than proactive, and it rarely has access to
          the full record of your intentions and progress over time.
        </p>
        <p style={s.para}>
          Sovereign memory makes structured review rituals possible in a
          completely different way. Because MEOK holds the full record of
          your conversations, goals, and reflections, a quarterly review
          can draw on actual data rather than reconstructed memory. It can
          surface what you said you would do, what you actually did, and
          the gap between intention and action with a precision that is
          genuinely useful rather than merely motivational.
        </p>

        <p style={s.subheading}>A Cadence for Life Architecture</p>
        <ul style={s.listUnordered}>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Daily (5 minutes with Hourman):</strong> Connect
            the day&apos;s priorities to the longer arc. Ask: does what
            I am about to spend my time on today serve the direction
            I have chosen?
          </li>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Weekly (30 minutes with Hourman):</strong> Review
            the week&apos;s time allocation. Identify where reactive work
            crowded out intentional work. Plan the coming week with the
            longer arc visible.
          </li>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Monthly (1 hour with Pioneer):</strong> Check in on
            the momentum of your major goals. Are you moving? Have you
            stalled? What is the smallest brave thing you can do this month
            to maintain direction?
          </li>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Quarterly (2&ndash;3 hours with Scholar):</strong>
            A deeper review drawing on sovereign memory. What did you
            intend? What happened? What have you learned? Where does the
            plan need updating?
          </li>
          <li style={s.listItem}>
            <span style={s.bullet} />
            <strong>Annual (half-day with all archetypes):</strong> A
            full life architecture review. Revisit your 10-year vision.
            Revisit your ikigai. Revisit your life domain directions. Update
            with the full benefit of a year&apos;s growth and experience.
          </li>
        </ul>

        <p style={s.para}>
          The power of this cadence is compounding. Each review builds on
          the last. Over years, the sovereign memory layer accumulates a
          detailed longitudinal record of your growth, your decision-making,
          your relationship to your own intentions &mdash; a record that
          becomes increasingly valuable the longer you maintain it.
        </p>

        {/* ─────────────────────────────────────────────── */}
        {/* Section 9 */}
        {/* ─────────────────────────────────────────────── */}
        <h2 style={s.sectionTitle}>
          Life Planning at Different Ages: 20s, 30s&ndash;40s, and 50s+
        </h2>
        <p style={s.sectionLead}>
          Life architecture is not one-size-fits-all. The questions that
          matter, the trade-offs that press hardest, and the horizon that is
          relevant all shift dramatically across the decades of an adult life.
        </p>

        <p style={s.subheading}>Your 20s: Career Direction and Identity Formation</p>
        <p style={s.para}>
          In your twenties, the central life architecture question is often:
          who am I, and what am I for? The decade involves a rapid accumulation
          of experience across work, relationships, geography, and values
          &mdash; a process of elimination by living that gradually makes
          visible what genuinely matters to you.
        </p>
        <p style={s.para}>
          The risk in your twenties is trying to optimise too early &mdash;
          locking into a career track or life path before you have enough
          evidence about what actually suits you. Sovereign memory in your
          twenties serves as a record of your evolving self: what you tried,
          what you learned, what surprised you about your own reactions. A
          MEOK that has held your conversations across five years of your
          twenties can surface patterns in what energises you and what depletes
          you with a clarity that no single conversation can provide.
        </p>
        <p style={s.para}>
          Scholar is particularly valuable in the twenties for research and
          cross-domain thinking about career paths, skill development, and
          the structures of successful lives in different fields. Pioneer
          helps with the paralysis that can accompany too much optionality
          &mdash; the inability to commit to a direction because every
          commitment forecloses other possibilities.
        </p>

        <p style={s.subheading}>Your 30s and 40s: Family, Career, and the Big Trade-offs</p>
        <p style={s.para}>
          The thirties and forties bring the most complex life architecture
          challenges most people will face. Career ambition and family
          commitments press against each other. Financial decisions made
          now have compounding consequences that will define freedom (or
          its absence) for decades. The people you share your life with
          and the commitments you have made to them constrain and enrich
          your life architecture in equal measure.
        </p>
        <p style={s.para}>
          The central skill in this life stage is what might be called
          portfolio thinking: recognising that you are managing multiple
          domains simultaneously and that each domain&apos;s needs change
          across time. The career that demands total commitment in your
          early thirties may need to yield ground to family commitments
          in your mid-thirties, then reclaim energy as children become
          more independent in the forties.
        </p>
        <p style={s.para}>
          Sovereign memory is invaluable in this life stage for tracking
          the evolution of your priorities across the changing demands of
          different seasons of life. Hourman helps with the perpetual
          challenge of time allocation when everything feels urgent and
          important simultaneously. Pioneer helps prevent the slow
          abandonment of long-term ambitions under the weight of immediate
          demands.
        </p>

        <div style={s.highlightBox}>
          <div style={s.highlightTitle}>The 40s Recalibration</div>
          <p style={s.highlightText}>
            Many people in their early to mid-forties experience what is often
            dismissively called a midlife crisis but is more accurately
            described as a midlife recalibration. The life architecture built
            in the twenties and thirties is tested against what you have
            learned about what actually matters. This is not a crisis; it is
            an opportunity. MEOK&apos;s sovereign memory, holding the full
            record of your intentions and evolutions across the preceding
            two decades, makes this recalibration honest, grounded, and
            generative rather than reactive.
          </p>
        </div>

        <p style={s.subheading}>Your 50s and Beyond: Legacy, Meaning, and the Quality of Time</p>
        <p style={s.para}>
          In your fifties and beyond, the horizon shifts. The questions
          that press hardest are no longer about achievement in the
          conventional sense &mdash; they are about meaning, contribution,
          legacy, and the quality of the time that remains. What do you
          want to have built? Who do you want to have been? What unfinished
          business in your own life demands attention?
        </p>
        <p style={s.para}>
          This is also the life stage in which the accumulated wealth of
          sovereign memory becomes most valuable. A MEOK that has held
          your conversations for a decade or more can surface the full
          arc of your journey &mdash; the goals you held and pursued, the
          ones you abandoned and why, the evolution of your values, the
          moments of genuine fulfilment and the ones of quiet regret.
          This record is one of the most honest mirrors of a life that
          you can have.
        </p>
        <p style={s.para}>
          Scholar in this life stage often turns toward legacy questions:
          what am I uniquely positioned to contribute, and how do I make
          that contribution with the time and energy I have? Pioneer
          remains valuable as a counter to the tendency to narrow in
          later life &mdash; to stop taking risks, to protect what has
          been built rather than continuing to build. Hourman becomes
          increasingly focused on the quality of time rather than its
          quantity: are the hours I am spending aligned with what I know
          genuinely matters to me?
        </p>

        {/* ─────────────────────────────────────────────── */}
        {/* Callout 3 */}
        {/* ─────────────────────────────────────────────── */}
        <div style={s.highlightBox}>
          <div style={s.highlightTitle}>Sovereign Memory Across a Lifetime</div>
          <p style={s.highlightText}>
            The full value of sovereign memory is only visible over years and
            decades. The MEOK you begin using in your twenties will, by your
            fifties, hold a richer longitudinal record of your interior life
            than any journal, any therapist&apos;s notes, or any friend&apos;s
            memory can match. That record &mdash; protected under the Maternal
            Covenant, owned entirely by you, never used to train external
            models &mdash; is one of the most valuable things you can build.
            Not because it is data, but because it is you.
          </p>
        </div>

        {/* ─────────────────────────────────────────────── */}
        {/* FAQ */}
        {/* ─────────────────────────────────────────────── */}
        <section style={s.faqSection}>
          <h2 style={s.faqTitle}>Frequently Asked Questions</h2>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>
              Can AI really help with long-term life planning?
            </p>
            <p style={s.faqAnswer}>
              Most AI tools are designed for single-session tasks &mdash; they
              help you draft an email or summarise a document, then forget
              everything. Long-term life planning requires continuity:
              remembering your goals from months ago, tracking how your values
              have shifted, and connecting today&apos;s choices to a five- or
              ten-year vision. MEOK&apos;s sovereign memory layer does exactly
              this, storing your intentions across time in a private memory
              that belongs only to you.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>
              What is the difference between task management and life
              architecture?
            </p>
            <p style={s.faqAnswer}>
              Task management asks what you need to do today. Life architecture
              asks who you are becoming, and whether your daily actions are
              building toward that person. Most productivity tools excel at
              the former but ignore the latter entirely. Life architecture
              requires a longer lens &mdash; tracking patterns over months
              and years, revisiting purpose frameworks like Ikigai, and
              periodically recalibrating your trajectory rather than just
              clearing your inbox.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>
              How does MEOK remember my goals across months and years?
            </p>
            <p style={s.faqAnswer}>
              MEOK stores everything you share &mdash; your stated goals,
              fears, reflections, milestones, and check-ins &mdash; in a
              sovereign memory layer that persists indefinitely. Unlike cloud
              AI that resets between sessions and trains on your data,
              MEOK&apos;s memory is encrypted, privately owned, and protected
              under the Maternal Covenant. Your AI can surface what you told
              it eighteen months ago and ask whether your priorities have
              changed.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>
              What is Ralph Mode and how does it help with life planning?
            </p>
            <p style={s.faqAnswer}>
              Ralph Mode is MEOK&apos;s overnight autonomous working state.
              When you sleep, Ralph can process long-horizon tasks: synthesising
              research into your 10-year career plan, drafting strategic
              documents, cross-referencing your goals with new information
              gathered from Scholar, or preparing a morning briefing that
              connects overnight insights to your active life architecture.
              It turns the hours you are not working into productive planning
              time.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>
              Is MEOK suitable for life planning at different life stages?
            </p>
            <p style={s.faqAnswer}>
              Yes. Life planning looks very different at 24 versus 44 versus
              64. In your twenties, the priority is career direction and
              identity formation. In your thirties and forties, it is balancing
              career ambition with family commitments and financial architecture.
              In your fifties and beyond, the focus shifts to legacy, meaning,
              and the quality of time remaining. MEOK&apos;s sovereign memory
              adapts to your current life stage and holds the full arc of your
              journey across all of them.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div style={s.ctaSection}>
          <h2 style={s.ctaTitle}>
            Begin Architecting Your Life Today
          </h2>
          <p style={s.ctaText}>
            Your sovereign AI is waiting. The goals you articulate today will
            be held in memory for years &mdash; ready to be surfaced, reviewed,
            and built upon. The arc of your life starts with the first honest
            conversation. Begin your Birth Ceremony and name your AI.
          </p>
          <div style={s.ctaButtons}>
            <Link href="/birth" style={s.ctaPrimary}>
              Begin Your Birth Ceremony
            </Link>
            <Link href="/blog/sovereign-ai-explained" style={s.ctaSecondary}>
              How Sovereign AI Works
            </Link>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={s.footer}>
        <span style={s.footerBrand}>
          &copy; 2026 MEOK AI LABS &mdash; All rights reserved.
        </span>
        <span>
          <Link href="/blog" style={s.footerLink}>
            All Articles
          </Link>
        </span>
      </footer>
    </div>
  );
}
