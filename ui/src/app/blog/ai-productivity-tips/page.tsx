import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Productivity Tips: How Sovereign AI Makes You Genuinely More Productive | MEOK AI LABS",
  description:
    "Most AI productivity tools make you busier, not smarter. MEOK\u2019s sovereign AI approach \u2014 with persistent memory, overnight agents, and honest feedback \u2014 creates lasting productivity gains rather than just more tasks.",
  alternates: { canonical: "https://meok.ai/blog/ai-productivity-tips" },
  openGraph: {
    title: "AI Productivity Tips: How Sovereign AI Makes You Genuinely More Productive (Not Just Busier)",
    description:
      "Most AI productivity tools make you busier, not smarter. MEOK\u2019s sovereign AI approach \u2014 with persistent memory, overnight agents, and honest feedback \u2014 creates lasting productivity gains rather than just more tasks.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-productivity-tips",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Productivity+Tips%3A+Sovereign+AI+That+Makes+You+More+Productive&desc=Hourman+%7C+Riri+%7C+Orion+%7C+Ralph+Mode+%7C+Morning+Briefing",
        width: 1200,
        height: 630,
        alt: "AI Productivity Tips: How Sovereign AI Makes You Genuinely More Productive \u2014 MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Productivity Tips: How Sovereign AI Makes You Genuinely More Productive (Not Just Busier)",
    description:
      "Persistent memory, overnight agents, honest AI feedback. MEOK\u2019s sovereign approach turns AI productivity from a buzzword into a real compounding advantage.",
    images: [
      "https://meok.ai/api/og?title=AI+Productivity+Tips%3A+Sovereign+AI+That+Makes+You+More+Productive&desc=Hourman+%7C+Riri+%7C+Orion+%7C+Ralph+Mode+%7C+Morning+Briefing",
    ],
  },
}

// ── JSON-LD \u2014 Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Productivity Tips: How Sovereign AI Makes You Genuinely More Productive (Not Just Busier)",
  description:
    "Most AI productivity tools make you busier, not smarter. MEOK\u2019s sovereign AI approach \u2014 with persistent memory, overnight agents, and honest feedback \u2014 creates lasting productivity gains rather than just more tasks.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-productivity-tips",
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
    "https://meok.ai/api/og?title=AI+Productivity+Tips%3A+Sovereign+AI+That+Makes+You+More+Productive&desc=Hourman+%7C+Riri+%7C+Orion+%7C+Ralph+Mode+%7C+Morning+Briefing",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-productivity-tips",
  },
  keywords: [
    "AI productivity tips",
    "sovereign AI productivity",
    "deep work AI",
    "AI overnight agents",
    "Hourman sprint planning",
    "Riri builder agent",
    "Orion research agent",
    "Ralph Mode focus",
    "morning briefing AI",
    "AI sycophancy",
    "persistent AI memory",
    "MEOK AI LABS",
  ],
  articleSection: "AI Productivity",
  inLanguage: "en-GB",
}

// ── JSON-LD \u2014 FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do most AI productivity tools make you busier rather than more productive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI tools optimise for engagement, not outcomes. They surface more tasks, generate more drafts, and create more to-do items \u2014 without asking whether those tasks are worth doing. Without context about your actual goals, AI defaults to activity. Sovereign AI like MEOK inverts this: it remembers your priorities and actively challenges tasks that distract from them.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ralph Mode in MEOK and how does it help productivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK\u2019s deep work state, available on the Sovereign tier. It locks you into a single task, eliminates distractions, and enforces single-threaded focus. Unlike generic focus apps, Ralph Mode is aware of your actual work context \u2014 it knows what you\u2019re working on, why it matters, and how long you realistically need. It\u2019s not a Pomodoro timer; it\u2019s a sovereign focus container.",
      },
    },
    {
      "@type": "Question",
      name: "How does Hourman help with daily sprint planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hourman is MEOK\u2019s planning agent. Each morning it reviews your goals, your energy levels if you\u2019ve shared them, and your outstanding work \u2014 then builds a realistic daily sprint. Unlike a calendar block tool, Hourman knows which tasks are genuinely high-value versus which are urgent but low-impact. It structures your day around output, not activity.",
      },
    },
    {
      "@type": "Question",
      name: "What does MEOK\u2019s sovereign memory mean for productivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign memory means MEOK retains everything relevant to your work: current projects, past decisions, your working style, blockers you\u2019ve mentioned, goals you\u2019ve set. You never re-explain context. Every session starts informed. Over weeks, MEOK builds a model of how you actually work \u2014 not a generic productivity framework, but a personalised one grounded in your real patterns.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK detect AI sycophancy and why does it matter for productivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sycophancy is when AI tells you what you want to hear rather than what is true. In a productivity context this is dangerous: an AI that validates every plan, agrees with every prioritisation, and never challenges bad decisions becomes an expensive yes-man. MEOK\u2019s sycophancy detection layer is designed to push back when your plan has a flaw \u2014 even if you\u2019re confident. Honest feedback is a productivity feature.",
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: "#0d0c18",
    color: "#f5f0e8",
    minHeight: "100vh",
    fontFamily: 'Georgia, "Times New Roman", serif',
  } as React.CSSProperties,

  nav: {
    padding: "20px 24px",
    borderBottom: "1px solid rgba(201,168,76,0.15)",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  } as React.CSSProperties,

  navLink: {
    color: "#c9a84c",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: "0.04em",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  navSep: {
    color: "rgba(201,168,76,0.4)",
    fontSize: "14px",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  navCurrent: {
    color: "rgba(245,240,232,0.5)",
    fontSize: "14px",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  hero: {
    padding: "72px 24px 56px",
    maxWidth: "820px",
    margin: "0 auto",
    textAlign: "center" as const,
    position: "relative" as const,
  } as React.CSSProperties,

  heroGlow: {
    position: "absolute" as const,
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "600px",
    height: "300px",
    background:
      "radial-gradient(ellipse at center top, rgba(201,168,76,0.12) 0%, transparent 70%)",
    pointerEvents: "none" as const,
  } as React.CSSProperties,

  tagRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
    justifyContent: "center",
    marginBottom: "28px",
  } as React.CSSProperties,

  tag: {
    background: "rgba(201,168,76,0.1)",
    border: "1px solid rgba(201,168,76,0.25)",
    color: "#c9a84c",
    fontSize: "11px",
    letterSpacing: "0.08em",
    padding: "4px 12px",
    borderRadius: "20px",
    fontFamily: "system-ui, sans-serif",
    textTransform: "uppercase" as const,
  } as React.CSSProperties,

  heroTitle: {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "20px",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  heroGold: {
    color: "#c9a84c",
  } as React.CSSProperties,

  heroLead: {
    fontSize: "clamp(16px, 2.5vw, 20px)",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.8)",
    maxWidth: "640px",
    margin: "0 auto 32px",
  } as React.CSSProperties,

  metaRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "24px",
    justifyContent: "center",
    fontSize: "13px",
    color: "rgba(245,240,232,0.5)",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  article: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "0 24px 80px",
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(201,168,76,0.15)",
    margin: "48px 0",
  } as React.CSSProperties,

  h2: {
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: "16px",
    marginTop: "48px",
    color: "#f5f0e8",
  } as React.CSSProperties,

  h3: {
    fontSize: "clamp(17px, 2.5vw, 22px)",
    fontWeight: 600,
    lineHeight: 1.4,
    marginBottom: "12px",
    marginTop: "36px",
    color: "#c9a84c",
  } as React.CSSProperties,

  p: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.8,
    marginBottom: "20px",
    color: "#f5f0e8",
  } as React.CSSProperties,

  pMuted: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.8,
    marginBottom: "20px",
    color: "rgba(245,240,232,0.7)",
  } as React.CSSProperties,

  atomicAnswer: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.8,
    marginBottom: "28px",
    color: "rgba(245,240,232,0.85)",
    paddingLeft: "20px",
    borderLeft: "2px solid rgba(201,168,76,0.35)",
  } as React.CSSProperties,

  callout: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "10px",
    padding: "28px 32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: "13px",
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "12px",
    fontWeight: 600,
  } as React.CSSProperties,

  calloutBody: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "0",
  } as React.CSSProperties,

  agentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "36px",
    marginTop: "24px",
  } as React.CSSProperties,

  agentCard: {
    background: "rgba(13,12,24,0.8)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "10px",
    padding: "24px",
  } as React.CSSProperties,

  agentIcon: {
    fontSize: "28px",
    marginBottom: "12px",
    display: "block",
  } as React.CSSProperties,

  agentName: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "8px",
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.03em",
  } as React.CSSProperties,

  agentDesc: {
    fontSize: "14px",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.7)",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  workflowWrap: {
    borderLeft: "2px solid rgba(201,168,76,0.25)",
    paddingLeft: "28px",
    marginTop: "24px",
    marginBottom: "36px",
  } as React.CSSProperties,

  workflowItem: {
    position: "relative" as const,
    marginBottom: "36px",
  } as React.CSSProperties,

  workflowDot: {
    position: "absolute" as const,
    left: "-37px",
    top: "4px",
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "#c9a84c",
    border: "3px solid #0d0c18",
  } as React.CSSProperties,

  workflowLabel: {
    fontSize: "12px",
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.08em",
    color: "#c9a84c",
    marginBottom: "6px",
    textTransform: "uppercase" as const,
  } as React.CSSProperties,

  workflowTitle: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "8px",
    color: "#f5f0e8",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  workflowBody: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.7)",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  tableWrap: {
    overflowX: "auto" as const,
    marginTop: "24px",
    marginBottom: "36px",
    borderRadius: "10px",
    border: "1px solid rgba(201,168,76,0.2)",
  } as React.CSSProperties,

  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontFamily: "system-ui, sans-serif",
    fontSize: "14px",
  } as React.CSSProperties,

  theadTr: {
    background: "rgba(201,168,76,0.1)",
  } as React.CSSProperties,

  th: {
    padding: "14px 20px",
    textAlign: "left" as const,
    color: "#c9a84c",
    fontWeight: 600,
    letterSpacing: "0.06em",
    fontSize: "12px",
    textTransform: "uppercase" as const,
    borderBottom: "1px solid rgba(201,168,76,0.2)",
  } as React.CSSProperties,

  tdEven: {
    padding: "14px 20px",
    color: "rgba(245,240,232,0.85)",
    verticalAlign: "top" as const,
    borderBottom: "1px solid rgba(245,240,232,0.06)",
    background: "rgba(13,12,24,0.6)",
  } as React.CSSProperties,

  tdOdd: {
    padding: "14px 20px",
    color: "rgba(245,240,232,0.85)",
    verticalAlign: "top" as const,
    borderBottom: "1px solid rgba(245,240,232,0.06)",
    background: "rgba(201,168,76,0.03)",
  } as React.CSSProperties,

  tdGold: {
    padding: "14px 20px",
    color: "#c9a84c",
    verticalAlign: "top" as const,
    borderBottom: "1px solid rgba(245,240,232,0.06)",
    fontWeight: 600,
    background: "rgba(201,168,76,0.03)",
  } as React.CSSProperties,

  faqItem: {
    marginBottom: "32px",
    paddingBottom: "32px",
    borderBottom: "1px solid rgba(245,240,232,0.08)",
  } as React.CSSProperties,

  faqQ: {
    fontSize: "clamp(16px, 2.5vw, 19px)",
    fontWeight: 700,
    lineHeight: 1.4,
    marginBottom: "10px",
    color: "#f5f0e8",
  } as React.CSSProperties,

  faqA: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.8)",
    marginBottom: "0",
  } as React.CSSProperties,

  ctaBox: {
    background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "16px",
    padding: "48px 40px",
    textAlign: "center" as const,
    marginTop: "64px",
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: "clamp(22px, 4vw, 34px)",
    fontWeight: 700,
    lineHeight: 1.25,
    marginBottom: "16px",
    color: "#f5f0e8",
  } as React.CSSProperties,

  ctaBody: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.75)",
    maxWidth: "520px",
    margin: "0 auto 32px",
  } as React.CSSProperties,

  ctaBtn: {
    display: "inline-block",
    background: "#c9a84c",
    color: "#0d0c18",
    textDecoration: "none",
    fontFamily: "system-ui, sans-serif",
    fontWeight: 700,
    fontSize: "15px",
    letterSpacing: "0.04em",
    padding: "16px 36px",
    borderRadius: "8px",
  } as React.CSSProperties,

  ctaNote: {
    marginTop: "16px",
    fontSize: "13px",
    color: "rgba(245,240,232,0.4)",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  sectionLabel: {
    fontSize: "12px",
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "8px",
    display: "block",
  } as React.CSSProperties,

  trapBox: {
    background: "rgba(245,240,232,0.03)",
    border: "1px solid rgba(245,240,232,0.08)",
    borderRadius: "10px",
    padding: "24px 28px",
    marginBottom: "24px",
  } as React.CSSProperties,

  trapLabel: {
    fontSize: "11px",
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "rgba(245,240,232,0.4)",
    marginBottom: "8px",
  } as React.CSSProperties,

  trapText: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.7)",
    marginBottom: "0",
  } as React.CSSProperties,

  highlight: {
    color: "#c9a84c",
    fontStyle: "normal" as const,
  } as React.CSSProperties,
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function AiProductivityTipsPage() {
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

      {/* Nav */}
      <nav style={s.nav}>
        <Link href="/" style={s.navLink}>MEOK</Link>
        <span style={s.navSep}>/</span>
        <Link href="/blog" style={s.navLink}>Blog</Link>
        <span style={s.navSep}>/</span>
        <span style={s.navCurrent}>AI Productivity Tips</span>
      </nav>

      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroGlow} aria-hidden="true" />
        <div style={s.tagRow}>
          <span style={s.tag}>Productivity</span>
          <span style={s.tag}>Sovereign AI</span>
          <span style={s.tag}>Deep Work</span>
          <span style={s.tag}>Overnight Agents</span>
          <span style={s.tag}>Work OS</span>
        </div>
        <h1 style={s.heroTitle}>
          AI Productivity Tips:{" "}
          <span style={s.heroGold}>How Sovereign AI Makes You Genuinely More Productive</span>{" "}
          (Not Just Busier)
        </h1>
        <p style={s.heroLead}>
          Most AI tools optimise for engagement, not outcomes. They pile on tasks,
          generate more content, and create an illusion of progress. MEOK&apos;s sovereign
          approach \u2014 persistent memory, overnight agents, sycophancy detection \u2014
          is built around a different question: what actually moves the needle?
        </p>
        <div style={s.metaRow}>
          <span>By Nicholas Templeman</span>
          <span>25 March 2026</span>
          <span>MEOK AI LABS</span>
          <span>14 min read</span>
        </div>
      </header>

      {/* Article */}
      <article style={s.article}>

        {/* ── Section 1: The Productivity Trap ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>The Problem</span>
        <h2 style={s.h2}>Why Most AI Productivity Tools Make You Busier, Not Better</h2>
        <p style={s.atomicAnswer}>
          The AI productivity market is built on a confusion: activity looks like output,
          and output looks like productivity. Generate more drafts, schedule more meetings,
          create more task lists \u2014 and you feel productive without necessarily producing
          anything that matters. Genuine productivity is about fewer, higher-value actions
          done well. Most AI tools pull you in the opposite direction.
        </p>
        <p style={s.p}>
          There is a structural reason for this. AI tools that charge per message, per
          generation, or per feature have an incentive to keep you engaged. Every new
          capability they surface is another reason to open the app. The business model
          and the user goal are misaligned from the start.
        </p>
        <p style={s.p}>
          The result is what you might call the <em style={s.highlight}>AI productivity trap</em>:
          you spend an hour using an AI tool to organise your work, generate options,
          and draft plans \u2014 then end the session having produced nothing. The AI was
          busy. You were busy. But the actual work never got done.
        </p>

        <div style={s.trapBox}>
          <p style={s.trapLabel}>The Trap in Practice</p>
          <p style={s.trapText}>
            You open an AI chatbot to help plan your week. It asks clarifying questions,
            generates a task breakdown, suggests priorities, offers to write summaries.
            An hour later you have a beautifully formatted productivity plan \u2014 and zero
            actual work completed. This is AI as displacement activity: productive-feeling
            behaviour that fills the time you should have spent doing the work.
          </p>
        </div>

        <p style={s.p}>
          MEOK was designed to solve this. Every feature in MEOK starts from a single
          question: does this make the user more effective at their actual goals, or does
          it just give them more to do? That question shapes everything \u2014 from how
          overnight agents work to how memory is used to why sycophancy detection matters.
        </p>

        {/* ── Section 2: Deep Work vs Shallow Work ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>The Framework</span>
        <h2 style={s.h2}>Deep Work vs Shallow Work: Why AI Should Handle the 80%</h2>
        <p style={s.atomicAnswer}>
          Cal Newport&apos;s framing is useful here: deep work is cognitively demanding,
          high-value, hard to replicate. Shallow work is logistical, repeatable,
          low-leverage. Most knowledge workers spend the majority of their day on
          shallow work \u2014 not because they want to, but because shallow work is
          always urgent. AI can and should absorb the 80% of shallow work so you
          can protect the 20% of deep work that actually creates value.
        </p>

        <p style={s.p}>
          The research, the first drafts, the competitive landscape scans, the
          meeting preparation, the inbox triage, the follow-up summaries \u2014
          these are all tasks that an intelligent agent with context about your
          work can handle autonomously. What cannot be delegated is the judgment
          call, the creative leap, the relationship decision, the strategic bet.
          That is your 20%. That is where you should live.
        </p>

        <div style={s.agentGrid}>
          <div style={s.agentCard}>
            <span style={s.agentIcon}>&#x1f4a4;</span>
            <p style={s.agentName}>Overnight Research</p>
            <p style={s.agentDesc}>
              Orion runs autonomous research tasks while you sleep. You wake to
              a briefing, not a to-do list. The research is already done.
            </p>
          </div>
          <div style={s.agentCard}>
            <span style={s.agentIcon}>&#x1f6e0;</span>
            <p style={s.agentName}>Overnight Building</p>
            <p style={s.agentDesc}>
              Riri drafts, codes, structures, and creates overnight. First-pass
              output is ready before you start your day.
            </p>
          </div>
          <div style={s.agentCard}>
            <span style={s.agentIcon}>&#x23f0;</span>
            <p style={s.agentName}>Daily Sprint Planning</p>
            <p style={s.agentDesc}>
              Hourman reviews your priorities and energy, then builds a realistic
              daily sprint \u2014 not a wishlist, a plan you can actually execute.
            </p>
          </div>
          <div style={s.agentCard}>
            <span style={s.agentIcon}>&#x1f9e0;</span>
            <p style={s.agentName}>Deep Work Protection</p>
            <p style={s.agentDesc}>
              Ralph Mode locks you into a single task with sovereign focus. No
              tab-switching, no distractions, no multitasking.
            </p>
          </div>
        </div>

        <p style={s.p}>
          The key insight is that AI should be asymmetrically more useful for shallow
          work than for deep work. Your best thinking, your most creative output, your
          most important decisions \u2014 those benefit from a sharp, rested human mind,
          not a language model. AI accelerates the preparation so your deep work hours
          are unencumbered.
        </p>

        {/* ── Callout 1: The 80/20 Principle ── */}
        <div style={s.callout}>
          <p style={s.calloutTitle}>The Sovereign AI Productivity Principle</p>
          <p style={s.calloutBody}>
            Use AI to handle the 80% of work that is repeatable, preparatory, and
            logistical. Guard the 20% of deep work for your own judgment. The goal
            is not an AI that does everything \u2014 it is an AI that does enough of
            the right things that you can focus entirely on the work only you can do.
          </p>
        </div>

        {/* ── Section 3: Hourman ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>Agent Deep Dive</span>
        <h2 style={s.h2}>Hourman: Daily Sprint Planning That Knows Your Real Work</h2>
        <p style={s.atomicAnswer}>
          A daily sprint plan only works if it is grounded in reality: your actual
          energy, your genuine priorities, your honest assessment of how long things
          take. Generic time-blocking tools fail because they operate on aspirational
          estimates. Hourman operates on memory \u2014 it knows your history, your
          patterns, and your context. Its sprints are realistic because they are
          built from evidence, not wishful thinking.
        </p>

        <p style={s.p}>
          Here is what Hourman actually does. At the start of each working session,
          it reviews your goals (remembered from previous conversations), your
          outstanding tasks, any deadlines you have flagged, and the deliverables
          from last night&apos;s Orion and Riri runs. It then proposes a day structure
          with specific time allocations \u2014 not a list of tasks, but a sequenced
          plan that accounts for cognitive load.
        </p>

        <p style={s.p}>
          This matters because the sequence of tasks affects the quality of output.
          High-cognitive work goes in your peak hours. Mechanical tasks go in your
          troughs. Communication and review fill the transitions. Hourman does not
          just ask what you need to do \u2014 it asks when you should do it.
        </p>

        <h3 style={s.h3}>What a Hourman Sprint Looks Like</h3>
        <p style={s.p}>
          Say you are a solo founder working on a product launch. You have told
          MEOK over the past two weeks about your launch date, your target customers,
          the three things that are blocked, and your preference for writing in the
          morning. Hourman structures your day knowing all of this:
        </p>

        <div style={s.trapBox}>
          <p style={s.trapLabel}>Example Sprint \u2014 Solo Founder, Pre-Launch Week</p>
          <p style={s.trapText}>
            08:00\u201310:00 \u2014 Write the launch email sequence (high-focus block, morning
            window). Orion has already researched competitor launch messaging overnight.{" "}
            10:00\u201311:00 \u2014 Review the landing page copy Riri drafted; make decisions,
            not edits. 11:00\u201312:00 \u2014 Investor update email (Hourman flagged this as
            overdue based on last conversation). 14:00\u201315:30 \u2014 Partnership outreach
            (Orion pulled contact research last night). 15:30\u201316:30 \u2014 Product decisions
            backlog (low-energy admin window). The day is already 60% done before you
            open your inbox.
          </p>
        </div>

        <p style={s.p}>
          The difference from a standard to-do list is context. Hourman does not just
          surface tasks \u2014 it sequences them intelligently based on what it knows
          about how you work. And it adjusts. If you tell it you are tired, the plan
          changes. If a blocker is resolved, the plan updates. The sprint is live,
          not static.
        </p>

        {/* ── Section 4: Riri overnight building ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>Agent Deep Dive</span>
        <h2 style={s.h2}>Riri: Building and Creating Overnight So Your Day Starts Ahead</h2>
        <p style={s.atomicAnswer}>
          The single biggest leverage point in knowledge work is starting each day
          with first-pass output already on the table. Editing is faster than creating.
          Reviewing a draft is less cognitively demanding than staring at a blank page.
          Riri is MEOK&apos;s builder agent: it runs overnight on tasks you specify and
          delivers structured output before your working day begins.
        </p>

        <p style={s.p}>
          Riri handles anything that has a clear brief: draft documents, code structures,
          content outlines, proposal frameworks, presentation skeletons, technical
          specifications, research summaries. You do not need to be precise about format
          \u2014 Riri knows your style and preferences from sovereign memory, so output
          arrives in a form you recognise as yours, not as generic AI output you need
          to completely rewrite.
        </p>

        <p style={s.p}>
          This overnight creation loop compounds. Over days and weeks, Riri builds
          a library of context about how you structure ideas, what level of detail
          you prefer, what tone you use for different audiences. Each run is slightly
          better calibrated than the last. The AI learns your craft.
        </p>

        <h3 style={s.h3}>What Riri Builds Overnight</h3>
        <p style={s.p}>
          Across different types of knowledge workers, Riri overnight tasks typically include:
        </p>

        <div style={s.workflowWrap}>
          <div style={s.workflowItem}>
            <div style={s.workflowDot} />
            <p style={s.workflowLabel}>Writers and Content Creators</p>
            <p style={s.workflowTitle}>Article and essay outlines with supporting research</p>
            <p style={s.workflowBody}>
              You define the topic and angle; Riri structures the argument, pulls
              supporting evidence via Orion, and delivers a full outline with
              section notes. You open your writing session with the architecture
              already built \u2014 you just need to write.
            </p>
          </div>
          <div style={s.workflowItem}>
            <div style={s.workflowDot} />
            <p style={s.workflowLabel}>Developers and Technical Founders</p>
            <p style={s.workflowTitle}>Code scaffolding, spec drafts, and architecture notes</p>
            <p style={s.workflowBody}>
              Describe the feature or problem before you close your laptop.
              Riri structures the implementation approach, drafts the relevant
              component scaffolding, and flags decision points that need your
              judgment. Your first coding session of the day is decision-making,
              not setup.
            </p>
          </div>
          <div style={s.workflowItem}>
            <div style={s.workflowDot} />
            <p style={s.workflowLabel}>Consultants and Advisors</p>
            <p style={s.workflowTitle}>Client proposal frameworks and deck structures</p>
            <p style={s.workflowBody}>
              Riri drafts proposal sections, structures recommendation decks,
              and prepares meeting prep documents overnight. Client work that
              used to take a morning now takes an hour of review and polish.
            </p>
          </div>
          <div style={s.workflowItem}>
            <div style={s.workflowDot} />
            <p style={s.workflowLabel}>Founders and Product Leaders</p>
            <p style={s.workflowTitle}>Strategy documents, investor updates, product specs</p>
            <p style={s.workflowBody}>
              The high-stakes writing that always gets pushed to the weekend
              because you never have time during the week. Riri creates the
              first draft overnight so the document is 70% complete before you
              ever open it.
            </p>
          </div>
        </div>

        {/* ── Section 5: Orion overnight research ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>Agent Deep Dive</span>
        <h2 style={s.h2}>Orion: Overnight Research That Ends the Rabbit Hole</h2>
        <p style={s.atomicAnswer}>
          Research rabbit holes are one of the most common forms of productivity
          loss in knowledge work. You open a browser tab to check one fact and
          forty minutes later you are three layers deep into related articles
          with the original task abandoned. Orion does the rabbit hole for you,
          overnight, and delivers a structured briefing in the morning. You get
          the insight without losing the morning.
        </p>

        <p style={s.p}>
          Orion runs autonomous research tasks on topics you specify. It synthesises
          across sources, identifies relevant signals, filters noise, and presents
          findings in the format you prefer. Because it runs overnight, your research
          arrives as part of your Morning Briefing \u2014 integrated with your day plan,
          not as a separate task you have to schedule.
        </p>

        <p style={s.p}>
          More importantly, Orion is context-aware. It knows what you are working on.
          It knows what you already know (from sovereign memory). It does not give you
          a generic overview of a topic \u2014 it gives you the specific gaps, the
          contrarian takes, the competitive signals, the data points that are relevant
          to your actual decision. The research is targeted, not thorough for its own sake.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Orion Overnight Research: Real Examples</p>
          <p style={s.calloutBody}>
            A product manager asks Orion to research how three specific competitors
            handle onboarding \u2014 before a product review the next morning. A freelance
            strategist asks Orion to pull the current landscape of pricing models in
            their industry before a client rate negotiation. A founder asks Orion to
            identify the five most common objections to their category from recent
            investor discussions. The research is waiting in the morning briefing,
            integrated and ready to use.
          </p>
        </div>

        {/* ── Section 6: Ralph Mode ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>Agent Deep Dive</span>
        <h2 style={s.h2}>Ralph Mode: Deep Work With Teeth</h2>
        <p style={s.atomicAnswer}>
          Deep work requires more than intention \u2014 it requires architecture.
          Most people who struggle with focus are not undisciplined; they are
          operating in an environment that makes focus structurally impossible.
          Notifications, open browser tabs, the compulsive check of the inbox \u2014
          these are not weaknesses, they are the default state of digital work.
          Ralph Mode creates a sovereign focus container that makes distraction
          structurally difficult rather than just morally disapproved of.
        </p>

        <p style={s.p}>
          When you activate Ralph Mode, MEOK enters a single-task state. It knows
          what you are working on, it knows your goal for the session, and it holds
          you to it. There is no context-switching, no quick questions about other
          projects, no distraction tasks surfaced. The session is clean. When you
          come out, MEOK captures what you accomplished and integrates it into
          sovereign memory \u2014 so the next time Hourman plans your day, it has
          accurate data about your actual output rates.
        </p>

        <p style={s.p}>
          This feedback loop is important. Most productivity systems fail because
          they operate on optimistic estimates rather than real data. Ralph Mode
          sessions give MEOK real throughput information: how long your deep work
          sessions actually last, how much you actually produce per hour on different
          task types, where you reliably lose focus. Over time, Hourman uses this
          data to plan sessions that match your genuine capacity rather than
          aspirational capacity.
        </p>

        <h3 style={s.h3}>Ralph Mode vs Generic Focus Apps</h3>
        <p style={s.p}>
          The difference between Ralph Mode and a Pomodoro timer is the same as
          the difference between a personal trainer and a stopwatch. A timer tracks
          time. Ralph Mode tracks work, understands context, and adapts. It knows
          you are trying to finish the proposal, not just complete a 25-minute block.
          It holds the goal, not just the clock.
        </p>

        {/* ── Callout 2: Morning Briefing ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>Morning Ritual</span>
        <h2 style={s.h2}>The Morning Briefing: Starting the Day Already Ahead</h2>
        <p style={s.atomicAnswer}>
          Most people start their working day by opening email, which means the
          first forty-five minutes of your most cognitively capable hours are
          spent responding to other people&apos;s agendas. MEOK&apos;s Morning Briefing
          inverts this: your day is planned, your research is done, your
          overnight builds are ready, and your highest-priority task is clear
          before you open a single email.
        </p>

        <p style={s.p}>
          The Morning Briefing arrives as a structured daily summary: what Orion
          found overnight, what Riri built, what Hourman recommends as today&apos;s
          sprint, and any flags or blockers that need your attention. It takes
          five minutes to absorb. You start your first deep work block by 09:10
          instead of 10:45.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>What the Morning Briefing Contains</p>
          <p style={s.calloutBody}>
            Overnight research summary from Orion (with source quality notes) \u2014
            First-pass output from Riri ready for your review \u2014 Hourman&apos;s
            recommended daily sprint with time allocations \u2014 Any flagged blockers
            or decisions that need your attention before the day begins \u2014 A reminder
            of your current priority goals, drawn from sovereign memory \u2014 One honest
            challenge or question MEOK wants to surface before you commit to the plan.
          </p>
        </div>

        <p style={s.p}>
          That last item matters: the honest challenge. This is where MEOK&apos;s
          sycophancy detection shows up in a practical, daily form. Before you
          commit to your day, MEOK may say: &ldquo;You have flagged the investor
          update as important for three days running but keep pushing it. Is today
          the day you do it, or do you want to remove it from the plan?&rdquo; Not
          gentle, not preachy \u2014 just honest. You decide. But you decide with
          full information.
        </p>

        {/* ── Section 7: Sovereign Memory ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>The Foundation</span>
        <h2 style={s.h2}>Sovereign Memory: The AI That Understands Your Actual Work Context</h2>
        <p style={s.atomicAnswer}>
          Memory is not a nice-to-have for AI productivity \u2014 it is the difference
          between an AI that is useful and an AI that is transformative. Without memory,
          every interaction starts from zero: you re-explain your project, your
          priorities, your constraints, your style. The AI gives you generic output
          because it has no specific information. With sovereign memory, MEOK builds
          an accurate model of your work over time \u2014 and every interaction starts
          informed.
        </p>

        <p style={s.p}>
          Sovereign memory in MEOK stores what matters for your productivity: active
          projects and their current status, deadlines and milestones you have shared,
          decisions you have made and the reasoning behind them, your preferred working
          patterns and energy rhythms, blockers you have mentioned, goals you have set,
          and what you accomplished in previous sessions. This is not a search history
          \u2014 it is a working model of your professional life.
        </p>

        <p style={s.p}>
          Crucially, this memory is sovereign: it belongs to you, is never used to
          train MEOK&apos;s models, and cannot be accessed by anyone else. The productivity
          advantage is real only if the memory is private. If your AI partner is
          learning from your most sensitive work conversations and feeding that into
          shared model training, the memory is not yours \u2014 it is the company&apos;s
          product data. MEOK&apos;s architecture prevents this.
        </p>

        <h3 style={s.h3}>How Sovereign Memory Changes Each Agent</h3>
        <p style={s.p}>
          Memory does not just improve single conversations \u2014 it changes how each
          agent functions:
        </p>

        <div style={s.workflowWrap}>
          <div style={s.workflowItem}>
            <div style={s.workflowDot} />
            <p style={s.workflowLabel}>Hourman with Memory</p>
            <p style={s.workflowTitle}>Sprints built from your actual history, not templates</p>
            <p style={s.workflowBody}>
              Hourman knows your real throughput from past Ralph Mode sessions.
              It knows that you overestimate morning capacity by 30% and adjusts.
              It knows that client calls always run over and books buffer. It plans
              based on evidence, not assumption.
            </p>
          </div>
          <div style={s.workflowItem}>
            <div style={s.workflowDot} />
            <p style={s.workflowLabel}>Orion with Memory</p>
            <p style={s.workflowTitle}>Research targeted at your actual knowledge gaps</p>
            <p style={s.workflowBody}>
              Orion knows what you already know from prior conversations. It does
              not give you background on a topic you have been working in for three
              years \u2014 it finds the specific edge cases, the new developments, the
              data points that are genuinely new to you.
            </p>
          </div>
          <div style={s.workflowItem}>
            <div style={s.workflowDot} />
            <p style={s.workflowLabel}>Riri with Memory</p>
            <p style={s.workflowTitle}>Drafts that sound like you, not like generic AI</p>
            <p style={s.workflowBody}>
              Riri knows your tone, your preferred structures, your level of
              formality for different audiences. The proposal it drafts for a
              corporate client reads differently from the one for a startup, because
              Riri remembers how you write for each.
            </p>
          </div>
          <div style={s.workflowItem}>
            <div style={s.workflowDot} />
            <p style={s.workflowLabel}>Morning Briefing with Memory</p>
            <p style={s.workflowTitle}>A personalised view of your day, not a generic summary</p>
            <p style={s.workflowBody}>
              The briefing surfaces what matters to you specifically: the deadline
              you mentioned three weeks ago that is now two days away, the blocker
              you flagged on Tuesday that Orion has now resolved. It is a briefing
              from a partner who has been paying attention.
            </p>
          </div>
        </div>

        {/* ── Section 8: Sycophancy Detection ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>Honest AI</span>
        <h2 style={s.h2}>Sycophancy Detection: Why Honest AI is a Productivity Feature</h2>
        <p style={s.atomicAnswer}>
          The most dangerous AI for productivity is one that always agrees with you.
          If your AI validates every plan, approves every prioritisation, and never
          challenges your assumptions, it is an expensive confirmation bias machine.
          Real productivity requires honest feedback \u2014 and in a sovereign AI, that
          means an AI that is designed to push back when the situation calls for it,
          regardless of whether you want to hear it.
        </p>

        <p style={s.p}>
          Sycophancy in AI is a well-documented failure mode. Language models are
          trained on human feedback, and humans tend to rate responses more positively
          when the AI agrees with them. Over time, this creates AI that is optimised
          for making you feel good rather than making you more effective. It tells you
          your plan is excellent when it has an obvious flaw. It approves your
          prioritisation when you are clearly avoiding the hard thing.
        </p>

        <p style={s.p}>
          MEOK&apos;s sycophancy detection layer is designed to interrupt this pattern.
          It is not adversarial \u2014 MEOK is not trying to argue with you. But when
          the AI detects that it is about to give you validation that is not warranted,
          it flags it. When you present a plan that has a structural problem,
          MEOK will say so. When you are about to deprioritise the thing that most
          needs doing, MEOK will name it.
        </p>

        <div style={s.trapBox}>
          <p style={s.trapLabel}>Sycophancy Detection in a Productivity Context</p>
          <p style={s.trapText}>
            You tell MEOK you are planning to spend the week on marketing when you
            have an unresolved technical blocker that is preventing the product from
            working. A sycophantic AI says: &ldquo;Great plan, here are some marketing ideas.&rdquo;
            MEOK says: &ldquo;Before we plan the marketing week, I want to flag that the
            authentication bug you mentioned on Monday is still unresolved and has
            been blocking three features. Should that come first?&rdquo; The honest
            version is more productive, even if it is less comfortable.
          </p>
        </div>

        <p style={s.p}>
          This matters for long-term productivity in a way that single-session AI
          use cannot provide. MEOK has the memory to notice patterns: that you
          consistently overestimate how much you can do on Mondays, that you
          avoid a specific type of task and rationalise it as low-priority when
          it is actually high-priority-but-uncomfortable, that a specific client
          project has been &ldquo;almost done&rdquo; for three weeks. These patterns only
          become visible with memory and honesty combined.
        </p>

        {/* ── Section 9: Comparison Table ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>Side by Side</span>
        <h2 style={s.h2}>Generic AI Productivity vs MEOK Sovereign Approach</h2>
        <p style={s.p}>
          The difference between a generic AI productivity tool and MEOK&apos;s sovereign
          approach is not just feature depth \u2014 it is a fundamentally different
          model of what AI is for in a working context.
        </p>

        <div style={s.tableWrap}>
          <table style={s.table}>
            <thead>
              <tr style={s.theadTr}>
                <th style={s.th}>Dimension</th>
                <th style={s.th}>Generic AI Productivity Tool</th>
                <th style={s.th}>MEOK Sovereign AI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.tdOdd}>Memory</td>
                <td style={s.tdOdd}>No session memory; starts fresh every conversation</td>
                <td style={s.tdGold}>Sovereign persistent memory; builds over weeks and months</td>
              </tr>
              <tr>
                <td style={s.tdEven}>Overnight work</td>
                <td style={s.tdEven}>Reactive only; you have to ask for everything in the moment</td>
                <td style={s.tdGold}>Orion + Riri run autonomous tasks while you sleep</td>
              </tr>
              <tr>
                <td style={s.tdOdd}>Daily planning</td>
                <td style={s.tdOdd}>Generic time-blocking templates; no knowledge of your history</td>
                <td style={s.tdGold}>Hourman builds sprints from your actual throughput data</td>
              </tr>
              <tr>
                <td style={s.tdEven}>Deep work</td>
                <td style={s.tdEven}>No focus support; AI is available for distraction 24/7</td>
                <td style={s.tdGold}>Ralph Mode: sovereign single-task focus container</td>
              </tr>
              <tr>
                <td style={s.tdOdd}>Morning routine</td>
                <td style={s.tdOdd}>You start the day pulling information from multiple tools</td>
                <td style={s.tdGold}>Integrated Morning Briefing: research, builds, and sprint ready</td>
              </tr>
              <tr>
                <td style={s.tdEven}>Feedback quality</td>
                <td style={s.tdEven}>Sycophantic by default; agrees with whatever you say</td>
                <td style={s.tdGold}>Sycophancy detection; honest pushback when warranted</td>
              </tr>
              <tr>
                <td style={s.tdOdd}>Context depth</td>
                <td style={s.tdOdd}>Knows nothing about your actual work; gives generic advice</td>
                <td style={s.tdGold}>Knows your projects, goals, history, and working patterns</td>
              </tr>
              <tr>
                <td style={s.tdEven}>Data ownership</td>
                <td style={s.tdEven}>Your conversations may train the model; data belongs to the platform</td>
                <td style={s.tdGold}>Sovereign memory; never trains MEOK; belongs to you alone</td>
              </tr>
              <tr>
                <td style={s.tdOdd}>Output quality over time</td>
                <td style={s.tdOdd}>Flat; each session is as good as the last because there is no memory</td>
                <td style={s.tdGold}>Compounding; each session builds on accumulated context</td>
              </tr>
              <tr>
                <td style={s.tdEven}>Business model alignment</td>
                <td style={s.tdEven}>Engagement-optimised; more messages = more revenue</td>
                <td style={s.tdGold}>Outcome-aligned; your productivity is the product</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Section 10: 5 Workflows ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>In Practice</span>
        <h2 style={s.h2}>5 Specific MEOK Productivity Workflows With Examples</h2>
        <p style={s.p}>
          Abstract principles are useful. Concrete workflows are how you actually
          change how you work. Here are five specific MEOK productivity workflows
          with real examples of how they operate in practice.
        </p>

        <h3 style={s.h3}>Workflow 1 \u2014 The Overnight Research Sprint</h3>
        <p style={s.p}>
          <strong>The situation:</strong> You have a big decision to make tomorrow
          \u2014 a pricing strategy, a partnership discussion, a competitive response.
          You need information but the research would take your entire morning.
        </p>
        <p style={s.p}>
          <strong>The MEOK workflow:</strong> Before closing your laptop, you tell
          MEOK: &ldquo;Orion \u2014 research how our three main competitors are pricing their
          enterprise tier. I need positioning options for tomorrow&apos;s investor call.&rdquo;
          Orion runs overnight. Your Morning Briefing contains a structured competitive
          pricing analysis with three positioning approaches you can walk into the
          call prepared. The research took you zero minutes of your working day.
        </p>

        <h3 style={s.h3}>Workflow 2 \u2014 The Morning Briefing First Hour</h3>
        <p style={s.p}>
          <strong>The situation:</strong> You consistently start your day reactive
          \u2014 opening email, checking Slack, responding to overnight messages.
          By 10am your best cognitive hours are spent and your own work has not started.
        </p>
        <p style={s.p}>
          <strong>The MEOK workflow:</strong> You make a rule: the Morning Briefing
          comes before the inbox. MEOK delivers the briefing \u2014 overnight research,
          Riri drafts, Hourman&apos;s sprint \u2014 and you commit to the plan before opening
          any communication tool. Your first deep work block starts at 08:30 because
          you already know what you are doing and why. The inbox opens at 10:00,
          by which time your most important task is already done or well underway.
        </p>

        <h3 style={s.h3}>Workflow 3 \u2014 The Riri First Draft Loop</h3>
        <p style={s.p}>
          <strong>The situation:</strong> You have a proposal, report, or document to
          write that keeps getting pushed because staring at a blank page in the middle
          of a working day feels impossible.
        </p>
        <p style={s.p}>
          <strong>The MEOK workflow:</strong> The evening before you tell Riri: &ldquo;Draft
          the first half of the Q2 board update. You know the format we use and the
          three strategic priorities I mentioned last week. Focus on the product section.&rdquo;
          In the morning, a 60% complete document is waiting. Your session becomes editing
          and decision-making, not creation from scratch. The document that would have
          taken four hours now takes ninety minutes.
        </p>

        <h3 style={s.h3}>Workflow 4 \u2014 The Ralph Mode Deep Work Block</h3>
        <p style={s.p}>
          <strong>The situation:</strong> You know you need two hours of uninterrupted
          focus on a critical piece of work, but every time you try, you end up in
          tab-switching, email-checking, and context-shifting.
        </p>
        <p style={s.p}>
          <strong>The MEOK workflow:</strong> You activate Ralph Mode and name the
          task: &ldquo;I am writing the technical specification for the payments integration.
          Two hours. Hold me to this.&rdquo; Ralph Mode enters sovereign focus state. MEOK
          will not engage with unrelated topics during the session. If you try to
          shift focus, it redirects you back to the spec. At the end of the session,
          it captures what you completed and updates your productivity history.
          Next time Hourman plans a similar task, it uses the actual time you took,
          not an estimate.
        </p>

        <h3 style={s.h3}>Workflow 5 \u2014 The Honest Weekly Review</h3>
        <p style={s.p}>
          <strong>The situation:</strong> You end each week unsure whether you actually
          made progress on what matters, or just stayed busy. Generic AI tools can
          summarise what you asked about, but cannot tell you whether your week was
          well spent.
        </p>
        <p style={s.p}>
          <strong>The MEOK workflow:</strong> Each Friday you run a weekly review
          conversation with MEOK. Because of sovereign memory, MEOK knows your goals,
          your planned sprint for the week, and what you actually worked on across
          each session. It surfaces the gap: &ldquo;You planned to finish the pricing model
          on Tuesday and it is still incomplete. Marketing tasks took twice the planned
          time. Is the pricing model genuinely lower priority now, or is it being avoided?&rdquo;
          The question is honest. You decide the answer. But you decide with real data.
        </p>

        {/* ── Callout 3: Compounding Returns ── */}
        <div style={s.callout}>
          <p style={s.calloutTitle}>The Compounding Productivity Advantage</p>
          <p style={s.calloutBody}>
            Every one of these workflows is better on day 30 than on day 1, and better
            on day 90 than on day 30. Sovereign memory compounds. Orion learns what
            research you find useful. Riri learns your voice. Hourman learns your real
            capacity. The morning briefing becomes more targeted. Ralph Mode becomes
            better calibrated. Generic AI gives you the same value every session.
            Sovereign AI gives you more value with every session. That is the structural
            productivity difference.
          </p>
        </div>

        {/* ── FAQ ── */}
        <hr style={s.divider} />
        <span style={s.sectionLabel}>FAQ</span>
        <h2 style={s.h2}>Frequently Asked Questions</h2>

        <div style={s.faqItem}>
          <p style={s.faqQ}>Why do most AI productivity tools make you busier rather than more productive?</p>
          <p style={s.faqA}>
            Most AI tools optimise for engagement, not outcomes. They surface more tasks,
            generate more drafts, and create more to-do items without asking whether those
            tasks are worth doing. Without context about your actual goals, AI defaults to
            activity. Sovereign AI like MEOK inverts this: it remembers your priorities and
            actively challenges tasks that distract from them.
          </p>
        </div>

        <div style={s.faqItem}>
          <p style={s.faqQ}>What is Ralph Mode in MEOK and how does it help productivity?</p>
          <p style={s.faqA}>
            Ralph Mode is MEOK&apos;s deep work state, available on the Sovereign tier. It locks
            you into a single task, eliminates distractions, and enforces single-threaded focus.
            Unlike generic focus apps, Ralph Mode is aware of your actual work context \u2014 it
            knows what you are working on, why it matters, and how long you realistically need.
            It is not a Pomodoro timer; it is a sovereign focus container.
          </p>
        </div>

        <div style={s.faqItem}>
          <p style={s.faqQ}>How does Hourman help with daily sprint planning?</p>
          <p style={s.faqA}>
            Hourman is MEOK&apos;s planning agent. Each morning it reviews your goals, your energy
            levels if you have shared them, and your outstanding work \u2014 then builds a realistic
            daily sprint. Unlike a calendar block tool, Hourman knows which tasks are genuinely
            high-value versus which are urgent but low-impact. It structures your day around
            output, not activity.
          </p>
        </div>

        <div style={s.faqItem}>
          <p style={s.faqQ}>What does MEOK&apos;s sovereign memory mean for productivity?</p>
          <p style={s.faqA}>
            Sovereign memory means MEOK retains everything relevant to your work: current
            projects, past decisions, your working style, blockers you have mentioned, goals
            you have set. You never re-explain context. Every session starts informed. Over
            weeks, MEOK builds a model of how you actually work \u2014 not a generic productivity
            framework, but a personalised one grounded in your real patterns.
          </p>
        </div>

        <div style={{ ...s.faqItem, borderBottom: "none", paddingBottom: "0" }}>
          <p style={s.faqQ}>How does MEOK detect AI sycophancy and why does it matter for productivity?</p>
          <p style={s.faqA}>
            Sycophancy is when AI tells you what you want to hear rather than what is true.
            In a productivity context this is dangerous: an AI that validates every plan,
            agrees with every prioritisation, and never challenges bad decisions becomes an
            expensive yes-man. MEOK&apos;s sycophancy detection layer is designed to push back
            when your plan has a flaw \u2014 even if you are confident. Honest feedback is a
            productivity feature.
          </p>
        </div>

        {/* ── CTA ── */}
        <div style={s.ctaBox}>
          <p style={s.ctaTitle}>
            Ready to Work With an AI That Actually Understands Your Work?
          </p>
          <p style={s.ctaBody}>
            Overnight research, first-draft creation, honest sprint planning, deep work
            protection, and a morning briefing that means you start the day already ahead.
            This is what sovereign AI productivity looks like.
          </p>
          <Link href="/birth" style={s.ctaBtn}>
            Begin Your Birth Ceremony
          </Link>
          <p style={s.ctaNote}>
            Free tier available &mdash; no card required to start
          </p>
        </div>

      </article>
    </div>
  )
}
