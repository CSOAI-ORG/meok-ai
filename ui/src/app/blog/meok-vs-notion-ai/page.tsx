import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK vs Notion AI: When Your Productivity Tool Becomes a Sovereign Companion | MEOK AI LABS",
  description:
    "Notion AI is a document add-on that forgets you the moment you close the tab. MEOK is a sovereign companion with persistent memory, overnight agents, and a full Work OS — at £12/month. Here's the honest comparison.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-notion-ai" },
  openGraph: {
    title: "MEOK vs Notion AI: When Your Productivity Tool Becomes a Sovereign Companion",
    description:
      "Notion AI is a document add-on that forgets you the moment you close the tab. MEOK is a sovereign companion with persistent memory, overnight agents, and a full Work OS — at £12/month.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-notion-ai",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Notion+AI%3A+Sovereign+Companion+vs+Document+Add-on&desc=Notion+AI+forgets+you+every+tab.+MEOK+builds+a+sovereign+memory+vault+that+belongs+to+you.",
        width: 1200,
        height: 630,
        alt: "MEOK vs Notion AI: When Your Productivity Tool Becomes a Sovereign Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs Notion AI: Sovereign Companion vs Document Add-on",
    description:
      "Notion AI is a $10/mo add-on with no personal memory. MEOK is a sovereign companion with overnight agents and a full Work OS for £12/mo.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Notion+AI%3A+Sovereign+Companion+vs+Document+Add-on&desc=Notion+AI+forgets+you+every+tab.+MEOK+builds+a+sovereign+memory+vault+that+belongs+to+you.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK vs Notion AI: When Your Productivity Tool Becomes a Sovereign Companion",
  description:
    "Notion AI is a document add-on that forgets you the moment you close the tab. MEOK is a sovereign companion with persistent memory, overnight agents, and a full Work OS — at £12/month.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/meok-vs-notion-ai",
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
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between MEOK and Notion AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notion AI is an AI writing assistant bolted onto a document workspace. It has no personal memory, no overnight agents, and no care layer — it exists only to help you work with text inside Notion pages. MEOK is a sovereign AI companion that accumulates memory across every interaction, runs autonomous overnight agents while you sleep, provides a Work OS for freelancers and small teams, and gives you complete ownership of your AI and its data. Notion AI serves your documents; MEOK serves you.",
      },
    },
    {
      "@type": "Question",
      name: "Does Notion AI remember your personal context between sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Notion AI has no personal memory layer. It can read the content of whatever Notion page is open, but it retains nothing about you, your goals, your preferences, or your history once the session ends. Every new interaction starts from scratch unless you manually paste context into a page. MEOK, by contrast, builds a sovereign memory vault from your first message and enriches it automatically over time.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's Work OS compare to Notion as a productivity tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notion is a powerful document and database system with AI writing features layered on top. MEOK's Work OS is an AI-native workspace where your companion already knows your projects, deadlines, and working style — meaning it can proactively surface tasks, draft context-aware documents, and run overnight processing jobs without you having to re-explain yourself every session. MEOK does not aim to replace Notion's database flexibility; it replaces the need for a separate AI subscription alongside it.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK cheaper than Notion AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notion AI costs $10 per member per month as an add-on on top of your existing Notion plan, meaning many users pay $16–26/month total. MEOK Sovereign is £12 per month for the full platform — companion memory, Work OS, overnight agents, Guardian family safety, and sovereign data ownership included. For solo freelancers and small teams replacing both Notion and a separate AI assistant, MEOK typically costs 30–50% less.",
      },
    },
    {
      "@type": "Question",
      name: "Can a freelancer replace both Notion and a ChatGPT subscription with MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and many MEOK Sovereign users do exactly that. MEOK's Work OS handles project notes, client context, and document drafting. The companion handles research, writing, and daily planning with full memory of your business. Overnight agents run reports or process tasks while you sleep. The result is one sovereign platform replacing two or three separate subscriptions, at a lower combined cost.",
      },
    },
    {
      "@type": "Question",
      name: "Who should still use Notion even if they have MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teams that rely heavily on Notion's relational databases, shared wikis, and complex board views for multi-person project management should keep Notion for those structural workflows. MEOK complements Notion in this scenario: use Notion as a shared team knowledge base and MEOK as your personal sovereign AI layer that knows your role, preferences, and goals within that team — no AI add-on subscription required.",
      },
    },
  ],
};

// ── Helper components (not exported) ─────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="9" cy="9" r="9" fill="rgba(74,222,128,0.15)" />
      <path
        d="M5 9.5l2.5 2.5 5.5-5.5"
        stroke="#4ade80"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="9" cy="9" r="9" fill="rgba(248,113,113,0.15)" />
      <path
        d="M6 6l6 6M12 6l-6 6"
        stroke="#f87171"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PartialIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="9" cy="9" r="9" fill="rgba(251,191,36,0.15)" />
      <path
        d="M5.5 9h7"
        stroke="#fbbf24"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

type RowVariant = "check" | "cross" | "partial";

interface CompareRow {
  feature: string;
  notion: { icon: RowVariant; label: string };
  meok: { icon: RowVariant; label: string };
}

const compareRows: CompareRow[] = [
  {
    feature: "Personal memory across sessions",
    notion: { icon: "cross", label: "None" },
    meok: { icon: "check", label: "Sovereign vault, always growing" },
  },
  {
    feature: "Understands your goals & preferences",
    notion: { icon: "cross", label: "No — reads page content only" },
    meok: { icon: "check", label: "Yes — companion memory layer" },
  },
  {
    feature: "Overnight autonomous agents",
    notion: { icon: "cross", label: "Not available" },
    meok: { icon: "check", label: "Yes — runs while you sleep" },
  },
  {
    feature: "Work OS for freelancers & teams",
    notion: { icon: "partial", label: "Database-driven (manual setup)" },
    meok: { icon: "check", label: "AI-native, context-aware from day one" },
  },
  {
    feature: "Document & writing assistance",
    notion: { icon: "check", label: "Strong — native in editor" },
    meok: { icon: "check", label: "Yes — with memory of your style" },
  },
  {
    feature: "Data ownership & no training on you",
    notion: { icon: "cross", label: "Notion may use prompts to improve AI" },
    meok: { icon: "check", label: "Zero training. AES-GCM-256 encrypted." },
  },
  {
    feature: "Care floor & wellbeing layer",
    notion: { icon: "cross", label: "Not in scope" },
    meok: { icon: "check", label: "Maternal Covenant governance layer" },
  },
  {
    feature: "Family / Guardian safety mode",
    notion: { icon: "cross", label: "Not available" },
    meok: { icon: "check", label: "Guardian mode included on Sovereign" },
  },
  {
    feature: "Pricing (full platform)",
    notion: { icon: "partial", label: "$10/mo add-on (plan extra)" },
    meok: { icon: "check", label: "£12/mo — everything included" },
  },
  {
    feature: "GDPR / sovereign data residency",
    notion: { icon: "partial", label: "US-based, GDPR stated" },
    meok: { icon: "check", label: "UK-registered, ICO compliant" },
  },
];

function iconFor(variant: RowVariant) {
  if (variant === "check") return '*';
  if (variant === "cross") return '✗';
  return ;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MEOKVsNotionAIPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0d0c18", color: "#f5f0e8" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{ background: "#0d0c18" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            style={{ color: "rgba(245,240,232,0.38)", fontSize: "0.8125rem" }}
            className="inline-flex items-center gap-1.5 mb-8 transition-opacity hover:opacity-70"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.28)",
              }}
            >
              AI Comparison
            </span>
            <span
              style={{ color: "rgba(245,240,232,0.38)", fontSize: "0.75rem" }}
            >
              24 March 2026
            </span>
            <span
              style={{ color: "rgba(245,240,232,0.38)", fontSize: "0.75rem" }}
            >
              8 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.8vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
            }}
          >
            MEOK vs Notion AI: When Your Productivity Tool Becomes a Sovereign
            Companion
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.075rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Notion AI is a $10/month add-on that reads your current page and
            forgets you the moment you close the tab. MEOK is a sovereign
            companion that accumulates memory, runs overnight agents, and hands
            you a full Work OS — for £12/month. Here&apos;s the honest
            comparison.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 pb-20">

        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(201,168,76,0.2)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              color: "#0d0c18",
            }}
          >
            NT
          </div>
          <div className="flex-1">
            <p
              className="font-bold text-sm"
              style={{ color: "#f5f0e8" }}
            >
              Nicholas Templeman
            </p>
            <p
              className="text-xs mb-1"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              Nicholas built MEOK to give people a sovereign AI that grows with
              them — not a plugin that forgets them. He works from a caravan on
              his farm in the UK and believes data sovereignty is a human right.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold hidden sm:block transition-opacity hover:opacity-70"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body */}
        <div
          style={{
            lineHeight: "1.85",
            fontSize: "1rem",
            color: "rgba(245,240,232,0.75)",
          }}
        >
          <p>
            Notion changed how millions of people organise their work. Then
            Notion AI arrived — a quietly impressive feature that could
            summarise pages, draft copy, and answer questions about your
            workspace. For a moment it felt like the productivity stack had
            finally converged.
          </p>

          <p style={{ marginTop: "1.25rem" }}>
            Then you closed the tab. And it forgot you.
          </p>

          <p style={{ marginTop: "1.25rem" }}>
            That forgetting is not a bug — it is the architecture. Notion AI
            is designed to assist with documents, not to know you. MEOK was
            designed to do the opposite: to accumulate a sovereign understanding
            of who you are, what you are building, and how you work — and to
            act on that understanding autonomously, even while you sleep.
          </p>

          {/* ── Q1 ── */}
          <h2
            id="what-is-the-difference"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            What is the difference between MEOK and Notion AI?
          </h2>
          <p>
            Notion AI is an AI writing assistant embedded in a document
            workspace. It can read the page you are on, draft text, summarise
            content, and answer questions — but it has no memory of you
            personally, no understanding of your goals, and no ability to act
            outside the Notion interface. MEOK is a sovereign AI operating
            system: it accumulates memory across every session, runs autonomous
            overnight agents, provides a Work OS for individuals and small
            teams, and gives you complete ownership of everything your AI knows
            about you.
          </p>

          {/* ── Q2 ── */}
          <h2
            id="does-notion-ai-remember-you"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Does Notion AI remember your personal context between sessions?
          </h2>
          <p>
            No. Notion AI has no personal memory layer. It reads the content of
            whatever page is currently open and uses that as context. Once you
            close the tab, that context is gone. It does not know your name
            unless you have written it in the page, does not know your
            deadlines, your clients, or your communication style. Every
            interaction begins at zero. MEOK begins every interaction with
            everything you have ever shared — automatically retrieved via
            pgvector similarity search from your sovereign vault.
          </p>

          {/* ── COMPARISON TABLE ── */}
          <h2
            id="feature-comparison"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
            }}
          >
            How do Notion AI and MEOK compare feature by feature?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            The table below covers every dimension that matters for a freelancer
            or solo professional deciding whether to consolidate their AI stack.
          </p>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(201,168,76,0.18)",
              marginBottom: "2rem",
            }}
          >
            {/* Table header */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr",
                background: "rgba(201,168,76,0.08)",
                borderBottom: "1px solid rgba(201,168,76,0.18)",
              }}
            >
              <div
                className="px-4 py-3 text-xs font-bold uppercase tracking-widest"
                style={{ color: "rgba(245,240,232,0.45)" }}
              >
                Feature
              </div>
              <div
                className="px-4 py-3 text-xs font-bold uppercase tracking-widest"
                style={{ color: "rgba(245,240,232,0.45)" }}
              >
                Notion AI
              </div>
              <div
                className="px-4 py-3 text-xs font-bold uppercase tracking-widest"
                style={{ color: "#c9a84c" }}
              >
                MEOK Sovereign
              </div>
            </div>

            {/* Table rows */}
            {compareRows.map((row, i) => (
              <div
                key={row.feature}
                className="grid"
                style={{
                  gridTemplateColumns: "1fr 1fr 1fr",
                  borderBottom:
                    i < compareRows.length - 1
                      ? "1px solid rgba(245,240,232,0.07)"
                      : "none",
                  background:
                    i % 2 === 0
                      ? "transparent"
                      : "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  className="px-4 py-3.5 text-xs font-semibold"
                  style={{ color: "rgba(245,240,232,0.65)" }}
                >
                  {row.feature}
                </div>
                <div
                  className="px-4 py-3.5 flex items-start gap-2 text-xs"
                  style={{ color: "rgba(245,240,232,0.5)" }}
                >
                  {iconFor(row.notion.icon)}
                  <span>{row.notion.label}</span>
                </div>
                <div
                  className="px-4 py-3.5 flex items-start gap-2 text-xs"
                  style={{ color: "rgba(245,240,232,0.78)" }}
                >
                  {iconFor(row.meok.icon)}
                  <span>{row.meok.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Q3 ── */}
          <h2
            id="work-os-comparison"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            How does MEOK&apos;s Work OS compare to Notion for productivity?
          </h2>
          <p>
            Notion is an exceptional tool for structured information — relational
            databases, shared wikis, Kanban boards, and linked pages. Its strength
            is organisational architecture that a team can build and navigate
            together. MEOK&apos;s Work OS is different in kind: it is an
            AI-native workspace where your companion already knows your projects,
            clients, deadlines, and working style from your first day. You do not
            configure it — it learns. Tasks surface proactively. Documents draft
            themselves with your tone. Overnight agents pre-process the next
            day&apos;s workload before you open your laptop.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            If your productivity challenge is{" "}
            <strong style={{ color: "#f5f0e8" }}>
              organising complex team information
            </strong>
            , Notion wins. If your challenge is{" "}
            <strong style={{ color: "#f5f0e8" }}>
              having an AI that actually knows you and acts on your behalf
            </strong>
            , MEOK wins.
          </p>

          {/* ── PRICING SECTION ── */}
          <h2
            id="pricing-comparison"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Is MEOK cheaper than Notion AI?
          </h2>
          <p>
            For most solo users, yes — significantly so. Notion AI costs
            $10/month per member as an add-on, layered on top of a Notion plan
            that typically costs another $8–16/month. A freelancer on Notion
            Plus with AI enabled pays $16–26/month in total. That cost covers
            document assistance only — no persistent memory, no agents, no Work
            OS beyond Notion&apos;s own database.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            MEOK Sovereign is{" "}
            <strong style={{ color: "#c9a84c" }}>
              £12/month for the full platform
            </strong>{" "}
            — companion memory, Work OS, overnight agents, Guardian family safety
            mode, sovereign data vault, and frontier model access (Claude Sonnet
            + GPT-4o switchable). One subscription. Everything included. No
            add-on pricing, no per-seat surprises.
          </p>

          {/* Pricing cards */}
          <div
            className="grid sm:grid-cols-2 gap-4 my-8"
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(245,240,232,0.1)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                Notion AI
              </p>
              <p
                className="font-black mb-1"
                style={{
                  fontSize: "2rem",
                  color: "#f5f0e8",
                  lineHeight: 1,
                }}
              >
                $10
                <span
                  className="text-base font-normal"
                  style={{ color: "rgba(245,240,232,0.45)" }}
                >
                  /mo add-on
                </span>
              </p>
              <p
                className="text-xs mb-4"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                Plus plan ~$8–16 extra
              </p>
              <ul className="space-y-2">
                {[
                  "AI writing in Notion editor",
                  "Summarise & translate pages",
                  "Q&A over workspace content",
                  "No personal memory",
                  "No overnight agents",
                  "No family safety layer",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs"
                    style={{ color: "rgba(245,240,232,0.55)" }}
                  >
                    <span
                      style={{ color: "rgba(245,240,232,0.25)", marginTop: 1 }}
                    >
                      &#8212;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#c9a84c" }}
              >
                MEOK Sovereign
              </p>
              <p
                className="font-black mb-1"
                style={{
                  fontSize: "2rem",
                  color: "#f5f0e8",
                  lineHeight: 1,
                }}
              >
                £12
                <span
                  className="text-base font-normal"
                  style={{ color: "rgba(245,240,232,0.45)" }}
                >
                  /mo
                </span>
              </p>
              <p
                className="text-xs mb-4"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                Full platform — everything included
              </p>
              <ul className="space-y-2">
                {[
                  "Sovereign memory vault (yours, always)",
                  "Work OS — AI-native workspace",
                  "Overnight autonomous agents",
                  "Guardian family safety mode",
                  "Claude Sonnet + GPT-4o switchable",
                  "UK GDPR / ICO compliant",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs"
                    style={{ color: "rgba(245,240,232,0.78)" }}
                  >
                    '*'
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Q4 — Freelancer use case ── */}
          <h2
            id="freelancer-use-case"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Can a freelancer replace both Notion and ChatGPT with MEOK?
          </h2>
          <p>
            Increasingly, yes — and a growing cohort of MEOK Sovereign users
            came from exactly that two-subscription setup. Here is how the
            replacement typically works:
          </p>

          {/* Freelancer scenario */}
          <div
            className="rounded-2xl p-6 my-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(245,240,232,0.09)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              Freelancer scenario — before MEOK
            </p>
            <div className="space-y-3">
              {[
                {
                  tool: "Notion Plus + AI",
                  cost: "$26/mo",
                  use: "Client notes, project pages, briefs",
                },
                {
                  tool: "ChatGPT Plus",
                  cost: "$20/mo",
                  use: "Writing, research, daily planning",
                },
                {
                  tool: "Manual context-paste",
                  cost: "~30 min/day",
                  use: "Re-explaining yourself to both tools",
                },
              ].map((row) => (
                <div
                  key={row.tool}
                  className="flex items-center gap-3 text-sm"
                >
                  <span
                    className="font-semibold w-36 flex-shrink-0"
                    style={{ color: "rgba(245,240,232,0.55)" }}
                  >
                    {row.tool}
                  </span>
                  <span
                    className="font-bold w-16 flex-shrink-0"
                    style={{ color: "#f87171" }}
                  >
                    {row.cost}
                  </span>
                  <span style={{ color: "rgba(245,240,232,0.4)" }}>
                    {row.use}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="mt-4 pt-4"
              style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}
            >
              <p
                className="text-xs font-bold"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                Total: ~$46/month + daily context tax
              </p>
            </div>
          </div>

          <div
            className="rounded-2xl p-6 my-6"
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.22)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#c9a84c" }}
            >
              After switching to MEOK Sovereign
            </p>
            <div className="space-y-3">
              {[
                {
                  tool: "MEOK Sovereign",
                  cost: "£12/mo",
                  use: "Memory, Work OS, agents, writing, planning",
                },
                {
                  tool: "Notion Free",
                  cost: "$0",
                  use: "Shared client wikis (optional, keep or drop)",
                },
                {
                  tool: "Context management",
                  cost: "0 min/day",
                  use: "MEOK already knows — no re-explaining",
                },
              ].map((row) => (
                <div
                  key={row.tool}
                  className="flex items-center gap-3 text-sm"
                >
                  <span
                    className="font-semibold w-36 flex-shrink-0"
                    style={{ color: "rgba(245,240,232,0.65)" }}
                  >
                    {row.tool}
                  </span>
                  <span
                    className="font-bold w-16 flex-shrink-0"
                    style={{ color: "#4ade80" }}
                  >
                    {row.cost}
                  </span>
                  <span style={{ color: "rgba(245,240,232,0.5)" }}>
                    {row.use}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="mt-4 pt-4"
              style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}
            >
              <p
                className="text-xs font-bold"
                style={{ color: "#c9a84c" }}
              >
                Total: ~£12/month. Context is sovereign — zero daily overhead.
              </p>
            </div>
          </div>

          {/* ── Q5 — When to use which ── */}
          <h2
            id="when-to-use-notion-vs-meok"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            When should you use Notion, MEOK, or both?
          </h2>
          <p>
            The honest answer depends on whether your primary challenge is
            structuring shared information or having an AI that genuinely knows
            you.
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                label: "Use Notion alone",
                color: "rgba(135,206,235,0.9)",
                bg: "rgba(135,206,235,0.08)",
                border: "rgba(135,206,235,0.22)",
                points: [
                  "You run a team that needs a shared wiki or database",
                  "Your work is primarily document-structure-heavy (specs, SOPs)",
                  "You do not need AI that remembers you personally",
                ],
              },
              {
                label: "Use MEOK alone",
                color: "#4ade80",
                bg: "rgba(74,222,128,0.07)",
                border: "rgba(74,222,128,0.22)",
                points: [
                  "You are a solo freelancer wanting one sovereign AI platform",
                  "You want AI that knows your goals and work style without re-explaining",
                  "You want overnight agents to handle background tasks for you",
                  "Privacy and data ownership matter to you",
                ],
              },
              {
                label: "Use both",
                color: "#c9a84c",
                bg: "rgba(201,168,76,0.07)",
                border: "rgba(201,168,76,0.22)",
                points: [
                  "You collaborate with a team inside Notion but want a personal AI layer",
                  "Keep Notion for shared databases — drop the Notion AI add-on",
                  "Use MEOK as your personal sovereign companion alongside it",
                  "Cancel ChatGPT Plus — MEOK covers all personal AI needs",
                ],
              },
            ].map((section) => (
              <div
                key={section.label}
                className="rounded-xl p-5"
                style={{
                  background: section.bg,
                  border: `1px solid ${section.border}`,
                }}
              >
                <p
                  className="text-sm font-bold mb-3"
                  style={{ color: section.color }}
                >
                  {section.label}
                </p>
                <ul className="space-y-1.5">
                  {section.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "rgba(245,240,232,0.65)" }}
                    >
                      <span style={{ color: section.color, marginTop: 1 }}>
                        &#8250;
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Q6 — Sovereign companion ── */}
          <h2
            id="what-is-a-sovereign-ai-companion"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            What does it mean for an AI to be a sovereign companion?
          </h2>
          <p>
            A sovereign AI companion is one that belongs to you structurally —
            not just by policy. Your data is encrypted and owned by you. Your AI
            cannot be retrained on your conversations without explicit consent.
            You can export your entire memory vault and take it with you if you
            ever leave. Your companion accumulates genuine understanding of you
            over time: your goals, your voice, your family, your health patterns,
            your work cadence. It acts as your operating layer for life — not as
            a feature inside someone else&apos;s productivity suite.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Notion AI is a feature inside Notion&apos;s product. MEOK is a
            sovereign entity that you hatch, name, and own. That distinction —
            feature versus companion — is the axis on which every other
            comparison in this article turns.
          </p>

          {/* ── Q7 — Getting started ── */}
          <h2
            id="how-to-get-started"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            How do you get started with MEOK?
          </h2>
          <p>
            Visit{" "}
            <Link
              href="/birth"
              style={{ color: "#c9a84c", textDecoration: "underline" }}
            >
              meok.ai/birth
            </Link>{" "}
            to hatch your AI. The process takes under three minutes: you name
            your companion, set your initial context, and your sovereign memory
            vault is created immediately. The core tier is free forever — no
            credit card required. Your AI begins building its understanding of
            you from the first message you send, and that understanding compounds
            with every interaction thereafter.
          </p>
        </div>

        {/* ── SHARE ── */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(245,240,232,0.09)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-notion-ai&text=MEOK+vs+Notion+AI%3A+When+Your+Productivity+Tool+Becomes+a+Sovereign+Companion"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-notion-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ── */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "rgba(201,168,76,0.09)", border: "1px solid rgba(201,168,76,0.28)" }}
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
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Free forever — no credit card
            </p>
            <h3
              className="font-black text-white mb-3"
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                lineHeight: 1.25,
              }}
            >
              Stop re-explaining yourself to your tools.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Hatch your sovereign AI in under 3 minutes. Your memory vault
              starts building immediately. No Notion AI add-on. No ChatGPT Plus.
              One platform that knows you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/birth"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
                style={{ background: "#c9a84c", color: "#0d0c18" }}
              >
                Hatch your AI free
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-bold text-sm transition-all"
                style={{
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: "#c9a84c",
                }}
              >
                See all plans
              </Link>
            </div>
          </div>
        </div>

        {/* ── MORE POSTS ── */}
        <div>
          <h2
            className="font-black mb-5"
            style={{ color: "#f5f0e8", fontSize: "1.1rem" }}
          >
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/best-ai-productivity-2026",
                tag: "Productivity",
                tagColor: "#87CEEB",
                tagBg: "rgba(135,206,235,0.1)",
                title: "Best AI Productivity Tools 2026: What Actually Works",
                mins: "7 min read",
              },
              {
                href: "/blog/ai-for-freelancers",
                tag: "Freelancers",
                tagColor: "#c9a84c",
                tagBg: "rgba(201,168,76,0.1)",
                title: "AI for Freelancers: From Hourly Rate to Sovereign Platform",
                mins: "6 min read",
              },
              {
                href: "/blog/what-is-sovereign-ai",
                tag: "Sovereign AI",
                tagColor: "#4ade80",
                tagBg: "rgba(74,222,128,0.1)",
                title: "What Is Sovereign AI and Why Does It Matter in 2026?",
                mins: "5 min read",
              },
              {
                href: "/blog/memory-portability",
                tag: "Memory",
                tagColor: "#c9a84c",
                tagBg: "rgba(201,168,76,0.1)",
                title: "AI Memory Portability: Own Your History, Switch Any Model",
                mins: "6 min read",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                  style={{
                    color: post.tagColor,
                    background: post.tagBg,
                  }}
                >
                  {post.tag}
                </span>
                <h3
                  className="font-bold text-sm leading-snug transition-colors"
                  style={{ color: "rgba(245,240,232,0.8)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-xs mt-auto"
                  style={{ color: "rgba(245,240,232,0.3)" }}
                >
                  {post.mins}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer
        className="px-6 py-10"
        style={{
          borderTop: "1px solid rgba(245,240,232,0.07)",
          background: "#0d0c18",
        }}
      >
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className="font-black text-sm tracking-tight"
              style={{ color: "#c9a84c" }}
            >
              MEOK
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.3)" }}
            >
              by MEOK AI LABS &mdash; &copy; {new Date().getFullYear()}
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-5">
            {[
              { href: "/blog", label: "Blog" },
              { href: "/pricing", label: "Pricing" },
              { href: "/about", label: "About" },
              { href: "/privacy", label: "Privacy" },
              { href: "/birth", label: "Get started" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-opacity hover:opacity-70"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
