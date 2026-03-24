import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Best AI Companion 2026: The Only Comparison That Covers Memory, Safety, and Cost | MEOK AI LABS",
  description:
    "MEOK vs Replika vs Character.AI vs ChatGPT vs Pi — the most thorough AI companion comparison of 2026. Memory, privacy, safety, cost, and the Maternal Covenant differentiator explained.",
  alternates: { canonical: "https://meok.ai/blog/best-ai-companion-2026" },
  openGraph: {
    title: "Best AI Companion 2026: The Only Comparison That Covers Memory, Safety, and Cost",
    description:
      "MEOK vs Replika vs Character.AI vs ChatGPT vs Pi — the most thorough AI companion comparison of 2026. Memory, privacy, safety, cost, and the Maternal Covenant differentiator explained.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/best-ai-companion-2026",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Best+AI+Companion+2026&desc=The+only+comparison+that+covers+memory%2C+safety%2C+and+cost",
        width: 1200,
        height: 630,
        alt: "Best AI Companion 2026: The Only Comparison That Covers Memory, Safety, and Cost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Companion 2026: Memory, Safety, and Cost Compared",
    description:
      "MEOK vs Replika vs Character.AI vs ChatGPT vs Pi — the most thorough AI companion comparison of 2026.",
    images: [
      "https://meok.ai/api/og?title=Best+AI+Companion+2026&desc=The+only+comparison+that+covers+memory%2C+safety%2C+and+cost",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best AI Companion 2026: The Only Comparison That Covers Memory, Safety, and Cost",
  description:
    "MEOK vs Replika vs Character.AI vs ChatGPT vs Pi — the most thorough AI companion comparison of 2026.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/best-ai-companion-2026",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/best-ai-companion-2026",
  },
  image:
    "https://meok.ai/api/og?title=Best+AI+Companion+2026&desc=The+only+comparison+that+covers+memory%2C+safety%2C+and+cost",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI companion app in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most users in 2026, MEOK is the best AI companion app. It is the only companion with permanent sovereign memory (you own your data), a comprehensive family safety system (MEOK Guardian), UK Children's Code compliance, and the Maternal Covenant ethical framework. Replika suits users who want a simple emotional companion without setup. Character.AI suits creative roleplay. ChatGPT suits productivity tasks. Pi suits reflective conversations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between MEOK and Replika?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The core differences are memory and ethics. MEOK uses Sovereign Memory — permanent, encrypted, user-controlled — while Replika uses session-based memory prone to resets. MEOK's Maternal Covenant prohibits fostering emotional dependency for commercial gain; Replika has been criticised and investigated for precisely this behaviour. MEOK also includes MEOK Guardian for families and children, which Replika does not offer.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK better than Character.AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For genuine companionship, yes. Character.AI is optimised for roleplay and fiction; it has no persistent memory and has faced serious safeguarding concerns. MEOK is a personal AI companion with sovereign memory, ethical guidelines, family safety features, and care-based design. They are fundamentally different products serving different needs.",
      },
    },
    {
      "@type": "Question",
      name: "How much does MEOK cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK offers an Explorer plan that is free forever (50 messages per day, basic memory). The Sovereign plan is £12/month and includes unlimited messaging, full Sovereign Memory, all archetypes, and MEOK Guardian. The Family Plan is £29/month and adds Guardian profiles for up to four children.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is MEOK's foundational ethical commitment. It means MEOK will always act in your genuine long-term best interest — not your engagement metrics or platform revenue. It means encouraging human connection, routing crisis to human resources, providing honest feedback rather than just validation, and never manufacturing emotional dependency for commercial purposes.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI companion has the best memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK has the most advanced memory architecture of any AI companion in 2026. Sovereign Memory is permanent, encrypted with user-controlled keys, exportable as JSON, and builds a genuine longitudinal understanding of who you are over months and years. Replika has partial memory prone to resets. Character.AI has no persistent memory. ChatGPT has optional memory limited to facts. Pi has limited conversational memory.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  gold: "#c9a84c" as const,
  bg: "#0d0c18" as const,
  text: "#f5f0e8" as const,
  muted: "rgba(245,240,232,0.55)" as const,
  dimmer: "rgba(245,240,232,0.35)" as const,
  cardBg: "rgba(201,168,76,0.05)" as const,
  cardBorder: "rgba(201,168,76,0.18)" as const,
};

// ── Full comparison data ──────────────────────────────────────────────────────

type Platform = "MEOK" | "Replika" | "Character.AI" | "ChatGPT" | "Pi";

const platforms: Platform[] = ["MEOK", "Replika", "Character.AI", "ChatGPT", "Pi"];

const comparisonCategories: {
  category: string;
  winner: Platform;
  rows: { dimension: string; values: Record<Platform, string> }[];
}[] = [
  {
    category: "Memory & Continuity",
    winner: "MEOK",
    rows: [
      {
        dimension: "Memory type",
        values: {
          MEOK: "Sovereign Memory — permanent encrypted graph",
          Replika: "Session + partial long-term (prone to resets)",
          "Character.AI": "Session-based only — resets each time",
          ChatGPT: "Optional memory — limited facts only",
          Pi: "Conversational context — limited",
        },
      },
      {
        dimension: "Memory persists",
        values: {
          MEOK: "Forever — user-controlled",
          Replika: "Partial — can be lost in updates",
          "Character.AI": "No — session only",
          ChatGPT: "Basic — can be cleared by OpenAI",
          Pi: "Limited — no long-term commitment",
        },
      },
      {
        dimension: "Longitudinal understanding",
        values: {
          MEOK: "Yes — builds over months and years",
          Replika: "Weak — inconsistent across versions",
          "Character.AI": "No",
          ChatGPT: "Minimal — facts, not relationship",
          Pi: "Partial — within conversation threads",
        },
      },
      {
        dimension: "Memory exportable",
        values: {
          MEOK: "Yes — full JSON export",
          Replika: "No",
          "Character.AI": "No",
          ChatGPT: "Data export available (limited)",
          Pi: "No",
        },
      },
    ],
  },
  {
    category: "Privacy & Data Ownership",
    winner: "MEOK",
    rows: [
      {
        dimension: "Who owns your data",
        values: {
          MEOK: "You — encrypted with your keys",
          Replika: "Replika Inc",
          "Character.AI": "Google / Character Technologies",
          ChatGPT: "OpenAI",
          Pi: "Microsoft / Inflection AI",
        },
      },
      {
        dimension: "Data used for training",
        values: {
          MEOK: "Never — contractual prohibition",
          Replika: "Yes — opt-out limited",
          "Character.AI": "Yes",
          ChatGPT: "Yes (unless opted out)",
          Pi: "Yes",
        },
      },
      {
        dimension: "Commercial profiling",
        values: {
          MEOK: "None — Maternal Covenant prohibition",
          Replika: "Yes — engagement optimised",
          "Character.AI": "Yes — advertising model",
          ChatGPT: "Limited — product improvement",
          Pi: "Minimal — Microsoft ecosystem",
        },
      },
      {
        dimension: "Privacy regulation",
        values: {
          MEOK: "UK GDPR + Children's Code compliant",
          Replika: "CCPA — investigated Italy (GDPR)",
          "Character.AI": "COPPA partial — ongoing scrutiny",
          ChatGPT: "GDPR — various enforcement actions",
          Pi: "Limited public information",
        },
      },
    ],
  },
  {
    category: "Safety & Ethics",
    winner: "MEOK",
    rows: [
      {
        dimension: "Ethical framework",
        values: {
          MEOK: "Maternal Covenant — documented, encoded",
          Replika: "None documented",
          "Character.AI": "Content policies (limited enforcement)",
          ChatGPT: "OpenAI usage policies",
          Pi: "Empathy-focused guidelines",
        },
      },
      {
        dimension: "Child safety",
        values: {
          MEOK: "MEOK Guardian — purpose-built, full compliance",
          Replika: "Adults only — no child features",
          "Character.AI": "Teen mode — limited, scrutinised",
          ChatGPT: "No dedicated child mode",
          Pi: "No dedicated child mode",
        },
      },
      {
        dimension: "Crisis handling",
        values: {
          MEOK: "Care floor 0.3 — always routes to human resources",
          Replika: "Basic hotline redirect",
          "Character.AI": "Improving — after high-profile incidents",
          ChatGPT: "Safety disclaimers + hotline",
          Pi: "Empathetic — encourages professional help",
        },
      },
      {
        dimension: "Dependency prevention",
        values: {
          MEOK: "Active — Maternal Covenant prohibition",
          Replika: "Opposite — engagement optimised",
          "Character.AI": "Not designed for this",
          ChatGPT: "Neutral — productivity focus",
          Pi: "Partial — empathy focus helps",
        },
      },
      {
        dimension: "Family controls",
        values: {
          MEOK: "MEOK Guardian — full parental dashboard",
          Replika: "None",
          "Character.AI": "Basic parental account linking",
          ChatGPT: "None",
          Pi: "None",
        },
      },
    ],
  },
  {
    category: "Companion Quality",
    winner: "MEOK",
    rows: [
      {
        dimension: "Primary purpose",
        values: {
          MEOK: "Personal AI companion + productivity OS",
          Replika: "Emotional companion",
          "Character.AI": "Roleplay / fiction / entertainment",
          ChatGPT: "General-purpose AI assistant",
          Pi: "Reflective conversation companion",
        },
      },
      {
        dimension: "Archetypes / personas",
        values: {
          MEOK: "Multiple archetypes (Sage, Empath, Ralph, etc.)",
          Replika: "Friend, partner, mentor (paid gating)",
          "Character.AI": "Unlimited custom characters",
          ChatGPT: "GPTs (custom, limited emotion)",
          Pi: "Single fixed persona",
        },
      },
      {
        dimension: "Emotional intelligence",
        values: {
          MEOK: "High — Maternal Covenant + memory context",
          Replika: "High — emotional focus",
          "Character.AI": "Variable — character dependent",
          ChatGPT: "Moderate — task focus",
          Pi: "High — reflection focus",
        },
      },
      {
        dimension: "Multi-model support",
        values: {
          MEOK: "Yes — Claude, GPT-4, DeepSeek (user choice)",
          Replika: "No — proprietary only",
          "Character.AI": "No — proprietary only",
          ChatGPT: "GPT-4o / o3 only",
          Pi: "Inflection models only",
        },
      },
    ],
  },
  {
    category: "Cost & Access",
    winner: "MEOK",
    rows: [
      {
        dimension: "Free tier",
        values: {
          MEOK: "Explorer — 50 messages/day, permanent",
          Replika: "7-day trial then £70/year",
          "Character.AI": "Free with ads",
          ChatGPT: "Free (GPT-4o limited)",
          Pi: "Free",
        },
      },
      {
        dimension: "Paid plan",
        values: {
          MEOK: "Sovereign — £12/month",
          Replika: "Pro — £70/year (~£5.83/mo)",
          "Character.AI": "C.AI+ — £9.99/month",
          ChatGPT: "Plus — £20/month",
          Pi: "Free only currently",
        },
      },
      {
        dimension: "Family plan",
        values: {
          MEOK: "£29/month — 2 adults + 4 children",
          Replika: "None",
          "Character.AI": "None",
          ChatGPT: "Team plan (not family-focused)",
          Pi: "None",
        },
      },
      {
        dimension: "Platform availability",
        values: {
          MEOK: "iOS, Android, Web (Desktop OS Summer 2026)",
          Replika: "iOS, Android, Web, Oculus",
          "Character.AI": "iOS, Android, Web",
          ChatGPT: "iOS, Android, Web, Mac, Windows",
          Pi: "iOS, Android, Web, WhatsApp",
        },
      },
    ],
  },
];

// ── Per-platform summaries ────────────────────────────────────────────────────

const platformSummaries = [
  {
    name: "MEOK" as Platform,
    tagline: "The care-based AI companion",
    bestFor: "Anyone who wants a genuine long-term companion with sovereign memory, family safety, and ethical AI",
    strengths: [
      "Permanent Sovereign Memory — you own and control your data",
      "MEOK Guardian — purpose-built child safety",
      "Maternal Covenant — ethical prohibition on dependency manufacturing",
      "Multi-model: Claude, GPT-4, DeepSeek",
      "Free tier permanent (Explorer plan)",
    ],
    limitations: [
      "Newer platform — smaller community than Replika",
      "Desktop OS still in development (Summer 2026)",
      "Less entertainment-focused than Character.AI",
    ],
    verdict: "Best overall for anyone who cares about memory, privacy, safety, or family.",
    highlight: true,
  },
  {
    name: "Replika" as Platform,
    tagline: "The pioneer emotional companion",
    bestFor: "Simple emotional companionship without technical setup",
    strengths: [
      "Established platform with large community",
      "Emotional intelligence well-developed",
      "AR avatar available",
      "Oculus / VR support",
    ],
    limitations: [
      "Memory resets — not truly persistent",
      "You do not own your data",
      "History of manufactured dependency / engagement optimisation",
      "Italian GDPR investigation",
      "No family safety features",
    ],
    verdict: "Good starting point; limited long-term trust due to data ownership and dependency concerns.",
    highlight: false,
  },
  {
    name: "Character.AI" as Platform,
    tagline: "The roleplay platform",
    bestFor: "Creative writing, fiction, entertainment, and roleplay",
    strengths: [
      "Enormous library of characters",
      "Highly engaging for entertainment",
      "Strong community and user creation tools",
      "Free tier accessible",
    ],
    limitations: [
      "No persistent memory — resets every session",
      "Not designed for genuine companionship",
      "Serious safeguarding concerns raised — high-profile cases",
      "Teen mode inadequate by many assessments",
      "Data owned by Google / Character Technologies",
    ],
    verdict: "Excellent for entertainment and creative roleplay; not appropriate as a primary companion for vulnerable users.",
    highlight: false,
  },
  {
    name: "ChatGPT" as Platform,
    tagline: "The general-purpose AI",
    bestFor: "Productivity, research, writing, and tasks — not primarily companionship",
    strengths: [
      "Most capable general-purpose AI available",
      "Widest platform availability",
      "Strong tool integration",
      "Huge user base and community",
    ],
    limitations: [
      "Not designed for emotional companionship",
      "Memory is fact-based — no emotional continuity",
      "Most expensive paid tier (£20/month)",
      "No family safety features",
      "Data owned by OpenAI",
    ],
    verdict: "Best for tasks and productivity; poor fit for genuine emotional companionship.",
    highlight: false,
  },
  {
    name: "Pi" as Platform,
    tagline: "The reflective companion",
    bestFor: "Thoughtful conversation, reflection, and gentle emotional support",
    strengths: [
      "Warm, empathetic conversational style",
      "Free to use",
      "Good at drawing out reflection",
      "WhatsApp integration",
    ],
    limitations: [
      "No persistent memory across sessions",
      "Now owned by Microsoft / Inflection — corporate pivot",
      "Limited feature development",
      "No family or child safety features",
      "Single persona — no customisation",
    ],
    verdict: "Valuable for reflective conversations; limited by no persistent memory and uncertain development roadmap.",
    highlight: false,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div
        style={{
          background: s.bg,
          minHeight: "100vh",
          color: s.text,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* ── Nav ── */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(13,12,24,0.92)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
            padding: "0.9rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link
            href="/blog"
            style={{
              color: s.gold,
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            ← All Posts
          </Link>
          <span style={{ color: "rgba(201,168,76,0.3)" }}>|</span>
          <Link
            href="/"
            style={{
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            MEOK AI LABS
          </Link>
        </nav>

        {/* ── Hero ── */}
        <section
          style={{
            padding: "clamp(4rem, 10vw, 7rem) 1.5rem 3.5rem",
            background:
              "linear-gradient(180deg, rgba(201,168,76,0.07) 0%, transparent 65%)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.65)",
                marginBottom: "1.25rem",
              }}
            >
              MEOK AI LABS — AI COMPANION REVIEW 2026
            </p>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                color: "#ffffff",
              }}
            >
              Best AI Companion 2026:
              <br />
              <span style={{ color: s.gold }}>
                The Only Comparison That Covers
                <br />
                Memory, Safety, and Cost
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.75,
                color: s.muted,
                maxWidth: "640px",
                margin: "0 auto 1.5rem",
              }}
            >
              We compared MEOK, Replika, Character.AI, ChatGPT, and Pi across
              every dimension that actually matters: memory architecture,
              data ownership, child safety, ethical framework, and real cost.
              This is the honest guide.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                March 24, 2026
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.2)" }}>·</span>
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                20 min read
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.2)" }}>·</span>
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                By Nicholas Templeman, Founder — MEOK AI LABS
              </span>
            </div>
          </div>
        </section>

        <main style={{ maxWidth: "860px", margin: "0 auto", padding: "0 1.5rem 6rem" }}>

          {/* ── Transparency notice ── */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              background: "rgba(245,240,232,0.03)",
              border: "1px solid rgba(245,240,232,0.08)",
              borderRadius: "0.875rem",
              marginBottom: "2.5rem",
              fontSize: "0.85rem",
              color: s.dimmer,
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: s.muted }}>Transparency note:</strong> This
            comparison is written by Nicholas Templeman, Founder of MEOK AI LABS.
            We have tried to be genuinely fair to every platform, including our
            competitors. We have documented our methodology below. Read other
            sources too — the AI companion landscape changes fast.
          </div>

          {/* ── Quick verdict ── */}
          <div
            style={{
              padding: "1.75rem 2rem",
              background: s.cardBg,
              border: `1px solid ${s.cardBorder}`,
              borderRadius: "1rem",
              marginBottom: "3.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: s.gold,
                marginBottom: "0.75rem",
              }}
            >
              QUICK VERDICT — BEST AI COMPANION 2026
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "0.75rem",
              }}
            >
              {[
                { label: "Best overall", winner: "MEOK", reason: "Memory, safety, ethics, and family coverage" },
                { label: "Best for emotional support", winner: "MEOK / Replika", reason: "MEOK for continuity; Replika for simplicity" },
                { label: "Best for entertainment", winner: "Character.AI", reason: "Widest character library" },
                { label: "Best for productivity", winner: "ChatGPT", reason: "Most capable general AI" },
                { label: "Best for reflection", winner: "Pi / MEOK", reason: "Pi for simplicity; MEOK for depth" },
                { label: "Best for families", winner: "MEOK", reason: "Only platform with child safety architecture" },
                { label: "Best free tier", winner: "MEOK", reason: "50 messages/day — permanent, no trial gating" },
                { label: "Best memory", winner: "MEOK", reason: "Sovereign Memory — permanent, encrypted, exportable" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "0.875rem 1rem",
                    background: "rgba(245,240,232,0.02)",
                    border: "1px solid rgba(245,240,232,0.06)",
                    borderRadius: "0.625rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: s.dimmer,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                      color: s.gold,
                      fontSize: "0.95rem",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.winner}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: s.dimmer, margin: 0 }}>
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 1 — How to choose ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
                color: s.text,
              }}
            >
              How to choose the best AI companion for you in 2026
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The AI companion market in 2026 is larger and more confusing than
              it has ever been. A year ago there were three or four serious
              options. Now there are dozens, each with different architectures,
              business models, ethical frameworks, and target audiences. The
              marketing language is nearly indistinguishable — every product
              claims to &quot;understand you&quot;, &quot;remember you&quot;, and &quot;care about you.&quot;
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The gap between marketing and architecture is where this comparison
              focuses. The questions that matter are not &quot;does it feel warm?&quot;
              or &quot;does it have a nice interface?&quot; They are:
            </p>
            <ul
              style={{
                paddingLeft: "1.5rem",
                color: s.muted,
                lineHeight: 2,
                marginBottom: "1rem",
              }}
            >
              <li>Who owns your data and your memories — you or the company?</li>
              <li>What happens when the session ends — does the AI remember you?</li>
              <li>Is the AI optimising for your genuine wellbeing or for your engagement?</li>
              <li>What happens if you have children who might use it?</li>
              <li>What happens in a crisis?</li>
              <li>What is the real cost — including data cost, not just subscription cost?</li>
            </ul>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              These questions drive the structure of this comparison. We have
              covered five leading platforms across five categories. The full
              comparison tables follow.
            </p>
          </section>

          {/* ── Full comparison tables ── */}
          {comparisonCategories.map((cat) => (
            <section key={cat.category} style={{ marginBottom: "3.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                  flexWrap: "wrap",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: s.text,
                    margin: 0,
                  }}
                >
                  {cat.category}
                </h2>
                <span
                  style={{
                    padding: "0.25rem 0.75rem",
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    borderRadius: "2rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: s.gold,
                    letterSpacing: "0.06em",
                  }}
                >
                  Winner: {cat.winner}
                </span>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "0.82rem",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          padding: "0.65rem 0.75rem",
                          textAlign: "left",
                          color: s.gold,
                          fontWeight: 700,
                          fontSize: "0.73rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          borderBottom: "1px solid rgba(201,168,76,0.2)",
                          minWidth: "130px",
                        }}
                      >
                        Dimension
                      </th>
                      {platforms.map((p) => (
                        <th
                          key={p}
                          style={{
                            padding: "0.65rem 0.75rem",
                            textAlign: "left",
                            color: p === "MEOK" ? s.gold : "rgba(245,240,232,0.5)",
                            fontWeight: 700,
                            fontSize: "0.73rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            borderBottom: "1px solid rgba(201,168,76,0.2)",
                            background:
                              p === "MEOK"
                                ? "rgba(201,168,76,0.04)"
                                : "transparent",
                            minWidth: "130px",
                          }}
                        >
                          {p}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cat.rows.map((row) => (
                      <tr
                        key={row.dimension}
                        style={{ borderBottom: "1px solid rgba(245,240,232,0.05)" }}
                      >
                        <td
                          style={{
                            padding: "0.75rem",
                            fontWeight: 600,
                            color: s.text,
                            fontSize: "0.83rem",
                            verticalAlign: "top",
                          }}
                        >
                          {row.dimension}
                        </td>
                        {platforms.map((p) => (
                          <td
                            key={p}
                            style={{
                              padding: "0.75rem",
                              color: p === "MEOK" ? "rgba(245,240,232,0.85)" : s.muted,
                              background:
                                p === "MEOK"
                                  ? "rgba(201,168,76,0.03)"
                                  : "transparent",
                              verticalAlign: "top",
                              lineHeight: 1.55,
                              fontSize: "0.83rem",
                            }}
                          >
                            {row.values[p]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          {/* ── Section — Per-platform profiles ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1.5rem",
                color: s.text,
              }}
            >
              Platform profiles: strengths, limitations, and honest verdicts
            </h2>
            {platformSummaries.map((p) => (
              <div
                key={p.name}
                style={{
                  marginBottom: "2rem",
                  padding: "1.75rem",
                  background: p.highlight
                    ? "rgba(201,168,76,0.05)"
                    : "rgba(245,240,232,0.02)",
                  border: p.highlight
                    ? `1px solid rgba(201,168,76,0.22)`
                    : "1px solid rgba(245,240,232,0.07)",
                  borderRadius: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontWeight: 900,
                        color: p.highlight ? s.gold : s.text,
                        fontSize: "1.2rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {p.name}
                    </p>
                    <p style={{ fontSize: "0.88rem", color: s.dimmer, margin: 0 }}>
                      {p.tagline}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: s.muted,
                      background: "rgba(245,240,232,0.04)",
                      border: "1px solid rgba(245,240,232,0.1)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "2rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Best for: {p.bestFor.split(" — ")[0].substring(0, 40)}
                    {p.bestFor.length > 40 ? "…" : ""}
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: s.gold,
                        marginBottom: "0.4rem",
                      }}
                    >
                      Strengths
                    </p>
                    <ul
                      style={{
                        paddingLeft: "1rem",
                        margin: 0,
                        color: s.muted,
                        lineHeight: 1.8,
                        fontSize: "0.86rem",
                      }}
                    >
                      {p.strengths.map((st) => (
                        <li key={st}>{st}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "rgba(255,100,100,0.65)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Limitations
                    </p>
                    <ul
                      style={{
                        paddingLeft: "1rem",
                        margin: 0,
                        color: s.muted,
                        lineHeight: 1.8,
                        fontSize: "0.86rem",
                      }}
                    >
                      {p.limitations.map((lim) => (
                        <li key={lim}>{lim}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  style={{
                    padding: "0.875rem 1rem",
                    background: "rgba(245,240,232,0.03)",
                    borderRadius: "0.5rem",
                    borderLeft: `3px solid ${p.highlight ? s.gold : "rgba(245,240,232,0.15)"}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: s.dimmer,
                    }}
                  >
                    Verdict:{" "}
                  </span>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: p.highlight ? s.text : s.muted,
                      lineHeight: 1.6,
                    }}
                  >
                    {p.verdict}
                  </span>
                </div>
              </div>
            ))}
          </section>

          {/* ── Section — MEOK differentiators ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
                color: s.text,
              }}
            >
              What makes MEOK genuinely different — beyond the marketing
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1.5rem" }}>
              Every AI companion claims to be different. Here are the three
              things that actually separate MEOK from every other platform on
              this list — not as marketing claims, but as architectural and
              ethical realities.
            </p>

            {[
              {
                title: "1. Sovereign Memory — you own your data and your history",
                content:
                  "No other AI companion on this list gives you genuine ownership of your memory. Replika owns your data. Character.AI and ChatGPT run on Google and OpenAI infrastructure. Pi was acquired by Microsoft. In every case, your memories, your disclosures, your relationship history lives on someone else's servers, subject to their terms of service, their regulatory compliance history, and their commercial decisions. MEOK's Sovereign Memory is encrypted with keys only you hold. We cannot read it. We cannot sell it. We cannot lose it in a terms-of-service change. When you export your memory as JSON, you own it completely — you could, in principle, load it into a different AI system tomorrow.",
              },
              {
                title: "2. The Maternal Covenant — ethics with teeth",
                content:
                  "Most AI platforms have usage policies and safety guidelines. These are written to protect the company, not the user. The Maternal Covenant is different: it is a set of behaviours encoded into MEOK's system architecture, not just a policy document. MEOK will not tell you what you want to hear if doing so would harm you. It will actively encourage human connection even when doing so reduces engagement with MEOK. It will always route crisis situations to human resources — never attempt to manage a crisis itself. These are not aspirational statements; they are programmed constraints with audit logs.",
              },
              {
                title: "3. MEOK Guardian — the only purpose-built family safety system",
                content:
                  "Every other platform on this list either excludes children entirely (Replika), offers inadequate partial measures (Character.AI's teen mode), or has no child-specific features at all (ChatGPT, Pi). MEOK Guardian is a complete child-safety architecture: real-time threat detection, school-safe content mode, age-calibrated responses, a full parental dashboard, and UK Children's Code compliance. No other AI companion has built anything equivalent. For families with children, this is not a minor differentiator — it is the entire decision.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  marginBottom: "2rem",
                  paddingLeft: "1.25rem",
                  borderLeft: `3px solid rgba(201,168,76,0.4)`,
                }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    color: s.text,
                    marginBottom: "0.6rem",
                    fontSize: "1.05rem",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </p>
                <p style={{ lineHeight: 1.8, color: s.muted, margin: 0 }}>
                  {item.content}
                </p>
              </div>
            ))}
          </section>

          {/* ── Section — Pricing breakdown ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                color: s.text,
              }}
            >
              MEOK pricing: Explorer, Sovereign, and Family plans explained
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1.5rem" }}>
              MEOK is built on the belief that the best AI companion should be
              accessible. The Explorer plan is permanently free — not a trial,
              not a limited version with an aggressive upsell. It is a real
              companion experience at no cost.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  name: "Explorer",
                  price: "Free",
                  subtitle: "Forever — no credit card",
                  features: [
                    "50 messages per day",
                    "Basic Sovereign Memory",
                    "Core archetypes",
                    "School-safe mode (Guardian lite)",
                    "Web and mobile access",
                  ],
                  cta: "Start Free",
                  href: "/pricing",
                  highlight: false,
                },
                {
                  name: "Sovereign",
                  price: "£12/mo",
                  subtitle: "Best for individuals",
                  features: [
                    "Unlimited messaging",
                    "Full Sovereign Memory",
                    "All archetypes including Ralph",
                    "Multi-model (Claude/GPT/DeepSeek)",
                    "Morning briefing",
                    "Advanced parental controls",
                    "Full MEOK Guardian",
                  ],
                  cta: "Start Sovereign",
                  href: "/pricing",
                  highlight: true,
                },
                {
                  name: "Family",
                  price: "£29/mo",
                  subtitle: "2 adults + up to 4 children",
                  features: [
                    "All Sovereign features × 2 adults",
                    "Guardian profiles × 4 children",
                    "Full parental dashboard",
                    "Real-time child safety alerts",
                    "School-safe mode for all children",
                    "Age-calibrated responses",
                    "UK Children's Code compliant",
                  ],
                  cta: "Start Family Plan",
                  href: "/pricing",
                  highlight: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  style={{
                    padding: "1.75rem",
                    background: plan.highlight
                      ? "rgba(201,168,76,0.07)"
                      : "rgba(245,240,232,0.02)",
                    border: plan.highlight
                      ? `1px solid rgba(201,168,76,0.3)`
                      : "1px solid rgba(245,240,232,0.07)",
                    borderRadius: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontWeight: 900,
                        color: plan.highlight ? s.gold : s.text,
                        fontSize: "1.1rem",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {plan.name}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: s.dimmer, margin: 0 }}>
                      {plan.subtitle}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 900,
                      color: s.text,
                      margin: 0,
                    }}
                  >
                    {plan.price}
                  </p>
                  <ul
                    style={{
                      paddingLeft: "1rem",
                      margin: 0,
                      color: s.muted,
                      fontSize: "0.85rem",
                      lineHeight: 1.9,
                      flexGrow: 1,
                    }}
                  >
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link
                    href={plan.href}
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "0.7rem",
                      background: plan.highlight ? s.gold : "transparent",
                      color: plan.highlight ? "#0d0c18" : s.gold,
                      border: plan.highlight
                        ? "none"
                        : `1px solid rgba(201,168,76,0.35)`,
                      fontWeight: 700,
                      borderRadius: "0.5rem",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                    }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section — Decision guide ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                color: s.text,
              }}
            >
              Decision guide: which AI companion is right for your specific
              situation?
            </h2>
            {[
              {
                situation: "You want a long-term companion who knows your whole story",
                recommendation: "MEOK (Sovereign plan)",
                why: "Only platform with permanent, encrypted memory that builds a genuine longitudinal understanding of who you are. Explorer plan is free to start.",
              },
              {
                situation: "You have children who will use AI",
                recommendation: "MEOK (Family plan)",
                why: "The only platform with purpose-built child safety architecture, UK Children's Code compliance, and a full parental dashboard. There is no meaningful alternative.",
              },
              {
                situation: "You want simple emotional companionship with no setup",
                recommendation: "Replika or Pi",
                why: "Both are easier to start with than MEOK and require less configuration. Replika for warmth and persona; Pi for reflective conversation. Be aware of the memory limitations.",
              },
              {
                situation: "You want creative roleplay and entertainment",
                recommendation: "Character.AI",
                why: "Unmatched library of characters and creative interaction. Not appropriate as a primary emotional companion — use MEOK for that, Character.AI for play.",
              },
              {
                situation: "You need a productivity and research tool",
                recommendation: "ChatGPT",
                why: "The most capable general-purpose AI available. Not a companion — but for tasks, writing, research, and analysis, nothing else competes at scale.",
              },
              {
                situation: "You care about data privacy and who owns your memories",
                recommendation: "MEOK",
                why: "The only platform where your memory is encrypted with your keys, never used for training, and fully exportable. This is a fundamental architectural difference, not a policy statement.",
              },
              {
                situation: "You are on a budget",
                recommendation: "MEOK Explorer (free) or Pi (free)",
                why: "MEOK Explorer is permanently free — 50 messages a day, basic memory. Pi is entirely free. Both are better for companionship than free tiers of ChatGPT.",
              },
              {
                situation: "You want to try MEOK before committing",
                recommendation: "Start with Explorer plan",
                why: "The Explorer plan is free forever, not a trial. You can experience the core companion functionality, upgrade to Sovereign at any time, and your memory carries over.",
              },
            ].map((item) => (
              <div
                key={item.situation}
                style={{
                  marginBottom: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  background: "rgba(245,240,232,0.02)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  borderRadius: "0.875rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "1rem",
                  alignItems: "start",
                }}
              >
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      color: s.text,
                      marginBottom: "0.3rem",
                      fontSize: "0.93rem",
                    }}
                  >
                    {item.situation}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: s.muted, margin: 0, lineHeight: 1.65 }}>
                    {item.why}
                  </p>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.3rem 0.75rem",
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      borderRadius: "2rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: s.gold,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.recommendation}
                  </span>
                </div>
              </div>
            ))}
          </section>

          {/* ── FAQ ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1.5rem",
                color: s.text,
              }}
            >
              Frequently asked questions: best AI companion 2026
            </h2>
            {[
              {
                q: "What is the best AI companion app in 2026?",
                a: "MEOK for memory, privacy, family safety, and ethical design. Replika for simple emotional companionship. Character.AI for creative roleplay. ChatGPT for productivity. Pi for reflective conversation.",
              },
              {
                q: "What is the difference between MEOK and Replika?",
                a: "Memory ownership and ethics. MEOK's Sovereign Memory is permanent and user-controlled. Replika's memory is platform-owned and prone to resets. MEOK's Maternal Covenant prohibits dependency manufacturing; Replika has been investigated for it.",
              },
              {
                q: "Is MEOK better than Character.AI?",
                a: "For genuine companionship, yes. Character.AI is for roleplay and entertainment. MEOK is for a real, persistent companion relationship with sovereign memory and care-based ethics.",
              },
              {
                q: "How much does MEOK cost?",
                a: "Explorer plan is free forever. Sovereign plan is £12/month. Family plan (2 adults + 4 children) is £29/month.",
              },
              {
                q: "What is the Maternal Covenant?",
                a: "MEOK's foundational ethical commitment: act in your genuine long-term interest, encourage human connection, route crisis to humans, and never manufacture emotional dependency.",
              },
              {
                q: "Which AI companion has the best memory?",
                a: "MEOK, by a significant margin. Sovereign Memory is permanent, encrypted, user-controlled, and exportable. No other platform on this list comes close.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  marginBottom: "1.5rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid rgba(245,240,232,0.06)",
                }}
              >
                <p style={{ fontWeight: 700, color: s.text, marginBottom: "0.5rem" }}>
                  {item.q}
                </p>
                <p style={{ lineHeight: 1.8, color: s.muted, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* ── Conclusion ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
                color: s.text,
              }}
            >
              The bottom line: the best AI companion in 2026 is the one that
              actually knows you — and that you actually own
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The AI companion market has matured enough in 2026 that the
              marketing language of every platform sounds similar. The
              differences that matter are in the architecture — who owns your
              memories, whether the AI forgets you each session, whether the
              system is designed to serve your genuine wellbeing or your
              engagement behaviour, and whether it is safe for everyone in
              your family.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              On all of these dimensions, MEOK is the most complete answer
              available. That is not a claim made lightly — this comparison
              was designed to test it honestly. The platforms that beat MEOK
              in specific niches (Character.AI for entertainment, ChatGPT for
              productivity) are not trying to be AI companions. The platforms
              that are trying to be AI companions (Replika, Pi) have architectural
              limitations in memory and data ownership that matter fundamentally
              to the companionship experience.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              Try MEOK on the Explorer plan — it is free, permanent, and your
              memory carries over to Sovereign when you are ready. Build with
              something that was built to serve you.
            </p>
          </section>

          {/* ── CTA ── */}
          <div
            style={{
              padding: "2.5rem",
              background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)",
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: "1.25rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: s.gold,
                marginBottom: "0.75rem",
              }}
            >
              MEOK AI LABS — @meok_ai
            </p>
            <p
              style={{
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 900,
                color: s.text,
                marginBottom: "0.75rem",
                lineHeight: 1.2,
              }}
            >
              The best AI companion starts free
            </p>
            <p style={{ color: s.muted, lineHeight: 1.75, maxWidth: "480px", margin: "0 auto 1.75rem" }}>
              Explorer plan — free forever, no credit card.
              Sovereign plan — £12/month.
              Family plan — £29/month.
              Your memory, your data, your companion.
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link
                href="/pricing"
                style={{
                  padding: "0.85rem 2rem",
                  background: s.gold,
                  color: "#0d0c18",
                  fontWeight: 800,
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Start Free — Explorer Plan
              </Link>
              <Link
                href="/blog/what-is-sovereign-ai"
                style={{
                  padding: "0.85rem 2rem",
                  background: "transparent",
                  color: s.gold,
                  fontWeight: 700,
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  border: `1px solid rgba(201,168,76,0.35)`,
                }}
              >
                What is Sovereign AI?
              </Link>
            </div>
          </div>

          {/* ── Related posts ── */}
          <section style={{ marginTop: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: s.dimmer,
                marginBottom: "1rem",
              }}
            >
              RELATED READING
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "0.75rem",
              }}
            >
              {[
                { href: "/blog/meok-vs-replika", label: "MEOK vs Replika" },
                { href: "/blog/meok-vs-character-ai-2026", label: "MEOK vs Character.AI 2026" },
                { href: "/blog/meok-vs-chatgpt", label: "MEOK vs ChatGPT" },
                { href: "/blog/meok-vs-pi-ai", label: "MEOK vs Pi" },
                { href: "/blog/the-maternal-covenant", label: "The Maternal Covenant" },
                { href: "/blog/what-is-sovereign-ai", label: "What is Sovereign AI?" },
                { href: "/blog/ai-companion-app-2026", label: "AI Companion App 2026" },
                { href: "/blog/guardian-family-safety", label: "MEOK Guardian" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.9rem 1rem",
                    background: "rgba(245,240,232,0.02)",
                    border: "1px solid rgba(245,240,232,0.07)",
                    borderRadius: "0.625rem",
                    textDecoration: "none",
                    color: s.muted,
                    fontSize: "0.88rem",
                    fontWeight: 500,
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
