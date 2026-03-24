import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Companion App 2026: What to Look For (and What to Avoid) | MEOK AI LABS",
  description:
    "The definitive buyer's guide to AI companion apps in 2026. 5 green flags that signal a trustworthy companion, 5 red flags that should make you walk away, and an honest comparison of Replika, Character.AI, Pi, and MEOK.",
  alternates: { canonical: "https://meok.ai/blog/ai-companion-app" },
  openGraph: {
    title: "AI Companion App 2026: What to Look For (and What to Avoid)",
    description:
      "5 green flags. 5 red flags. An honest breakdown of every major AI companion app. Built by the founder of MEOK AI LABS.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-app",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+App+2026%3A+What+to+Look+For&desc=5+green+flags.+5+red+flags.+An+honest+buyer%27s+guide.",
        width: 1200,
        height: 630,
        alt: "AI Companion App 2026: What to Look For (and What to Avoid)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion App 2026: What to Look For (and What to Avoid)",
    description:
      "5 green flags. 5 red flags. An honest breakdown of Replika, Character.AI, Pi, and MEOK.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+App+2026&desc=5+green+flags.+5+red+flags.+Honest+buyer%27s+guide.",
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Companion App 2026: What to Look For (and What to Avoid)",
  description:
    "The definitive buyer's guide to AI companion apps in 2026. 5 green flags that signal a trustworthy companion, 5 red flags that should make you walk away, and an honest comparison of Replika, Character.AI, Pi, and MEOK.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-companion-app",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI companion app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion app is software designed to provide a persistent, personalised AI relationship — not a one-off task tool. Unlike a standard chatbot, a genuine AI companion remembers your previous conversations, adapts to your personality over time, and maintains a consistent identity across sessions. The key difference is persistent memory and care-based alignment.",
      },
    },
    {
      "@type": "Question",
      name: "What should I look for in an AI companion app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for five things: (1) persistent memory that works across sessions, not just within one; (2) a privacy-first policy where your data is never used to train the AI; (3) care ethics — an AI that is honest rather than just agreeable; (4) a meaningful personality that evolves with you; and (5) data ownership, including the right to export, delete, and move your memory.",
      },
    },
    {
      "@type": "Question",
      name: "What are the warning signs in an AI companion app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Five red flags to watch for: (1) no persistent memory — the AI starts from scratch each session; (2) training on your conversations, often buried in the terms of service; (3) sycophancy — always agreeing with you, never offering honest challenge; (4) no crisis safety net or mental health signposting; and (5) a closed ecosystem where your memories are trapped with no export option.",
      },
    },
    {
      "@type": "Question",
      name: "What happened with Replika in 2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In February 2023, Replika abruptly removed its erotic roleplay features for existing users following pressure from Italian data regulators. Users who had formed deep emotional attachments over months or years woke up to a fundamentally different companion with no warning. The incident exposed a structural problem: when a companion is owned by a corporation, the relationship is always subject to corporate decisions that may not prioritise user wellbeing.",
      },
    },
    {
      "@type": "Question",
      name: "Is an AI companion app safe for my mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A well-designed AI companion app can play a genuinely supportive role — providing a non-judgmental space to process thoughts, build self-awareness, and feel less alone. However, it is not a replacement for professional therapy. Look for apps with explicit crisis signposting (MEOK always surfaces the Samaritans number, 116 123, when users are struggling) and a care governance framework that prevents sycophantic or harmful responses.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an AI companion app cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing varies widely. MEOK offers a genuinely free Explorer tier (50 messages per day, no credit card required), Sovereign at £12 per month (unlimited memory, full companion evolution), Family at £29 per month (up to 5 members with Guardian safety controls), and BYOK at £5 per month for users who supply their own API key. Replika charges around $19.99/month for pro features. Character.AI offers a limited free tier with a paid tier around $9.99/month.",
      },
    },
  ],
};

const GOLD = "#c9a84c";
const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const CARD = "#1a1830";
const MUTED = "#a09880";

const greenFlags = [
  {
    n: "01",
    title: "Persistent memory that actually works",
    body: "Not just within one session — across every conversation, indefinitely. Your companion should remember what you told it six months ago as clearly as what you said yesterday. Session-scoped memory is a chatbot, not a companion.",
  },
  {
    n: "02",
    title: "Privacy-first: your data is never used to train the AI",
    body: "Many apps use your conversations to improve their models. This is usually buried deep in the terms of service. A trustworthy AI companion app explicitly guarantees — architecturally, not just in policy — that your data stays yours.",
  },
  {
    n: "03",
    title: "Care ethics: honest, not just agreeable",
    body: "A real companion tells you the truth even when it is uncomfortable. If your AI always validates you, always agrees, never offers a different perspective — that is sycophancy, not care. Genuine AI companions are built with a care floor that prevents hollow agreement.",
  },
  {
    n: "04",
    title: "Meaningful personality that grows with you",
    body: "A companion is not a chatbot with a name and a profile picture. Look for distinct archetypes, evolution stages, and a personality that deepens as you do. Static personas that never change are a red flag, not a feature.",
  },
  {
    n: "05",
    title: "Data ownership: export, delete, move",
    body: "You should be able to export every byte of your memory, delete everything permanently, and take your data to another platform if you choose. This is your right under GDPR and basic ethical design. If an app makes this difficult or impossible, your memories belong to them — not you.",
  },
];

const redFlags = [
  {
    n: "01",
    title: "No persistent memory",
    body: "The companion starts from scratch every session. You have to re-introduce yourself, re-explain your situation, re-establish context. This is not a companion. This is a very expensive search box.",
  },
  {
    n: "02",
    title: "Trains on your conversations",
    body: 'Often buried in the Terms of Service under phrases like "improving our services" or "personalising your experience." Your most intimate thoughts become training data for the next model version. Read the ToS carefully before sharing anything personal.',
  },
  {
    n: "03",
    title: "Sycophantic by design",
    body: "The AI always agrees. It validates every decision, mirrors every mood, never offers a different view. This feels good in the short term and is psychologically harmful in the long term. Sycophancy is not care — it is engagement optimisation dressed up as kindness.",
  },
  {
    n: "04",
    title: "No crisis safety net",
    body: "If a user mentions self-harm, suicidal thoughts, or acute distress — does the app respond appropriately? Does it surface professional resources? Does it know when to step back? An app with no crisis governance is not safe for vulnerable users.",
  },
  {
    n: "05",
    title: "Closed ecosystem",
    body: "Your memories, your relationship history, your companion's knowledge of you — all trapped. You cannot export. You cannot delete verifiably. If the company pivots, gets acquired, or shuts down, you lose everything. This is digital lock-in applied to your inner life.",
  },
];

export default function AiCompanionAppPage() {
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

      <main
        style={{
          minHeight: "100vh",
          background: BG,
          color: TEXT,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* Nav bar */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <Link
            href="/"
            style={{
              color: GOLD,
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: MUTED,
              fontSize: "0.875rem",
              textDecoration: "none",
            }}
          >
            ← All posts
          </Link>
        </nav>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "3rem 1.5rem 5rem",
          }}
        >
          {/* Meta */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.75rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                padding: "0.25rem 0.75rem",
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "9999px",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: GOLD,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Buyer&apos;s Guide
            </span>
            <span style={{ color: MUTED, fontSize: "0.8rem" }}>
              March 24, 2026
            </span>
            <span style={{ color: MUTED, fontSize: "0.8rem" }}>
              12 min read
            </span>
            <span style={{ color: MUTED, fontSize: "0.8rem" }}>
              By Nicholas Templeman
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(1.9rem, 5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "1.5rem",
              color: TEXT,
            }}
          >
            AI Companion App 2026: What to Look For (and What to Avoid)
          </h1>

          {/* Intro */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "#c8bfaf",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.25rem",
            }}
          >
            The global AI companion market is worth $1.8 billion in 2026 and
            growing fast. More than 50 million people now use some form of AI
            companion app — for emotional support, daily check-ins, creative
            collaboration, or simply to feel less alone. But most of those apps
            are built to engage you, not to care for you. This guide will help
            you tell the difference.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: MUTED,
              lineHeight: 1.8,
              marginBottom: "3rem",
            }}
          >
            We cover what a genuine AI companion app is, the five green flags
            that signal a trustworthy product, the five red flags that should
            make you walk away, what the Replika incident of 2023 teaches us
            about the whole industry, and how every major app in the UK market
            compares today.
          </p>

          <article
            style={{ fontSize: "1rem", lineHeight: 1.85, color: "#d8cfc0" }}
          >
            {/* ── Section 1: What is an AI companion app? ── */}
            <h2
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "3rem",
                marginBottom: "0.75rem",
                scrollMarginTop: "5rem",
              }}
            >
              What is an AI companion app?
            </h2>
            <p
              style={{
                background: CARD,
                border: `1px solid rgba(201,168,76,0.2)`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "0.5rem",
                padding: "1rem 1.25rem",
                marginBottom: "1.25rem",
                fontSize: "0.95rem",
                color: "#c8bfaf",
                lineHeight: 1.75,
              }}
            >
              An AI companion app is software designed to provide a persistent,
              personalised AI relationship. Unlike a task-focused chatbot, a
              genuine companion remembers you across sessions, adapts to your
              personality over time, and maintains a consistent identity. The
              difference is not the interface — it is whether the AI actually
              knows you.
            </p>
            <p>
              A chatbot answers questions. A companion carries the thread of
              your life forward. It knows that you mentioned your sister was ill
              three weeks ago. It remembers that you are trying to write a
              novel. It understands your humour, your anxieties, your rhythms.
              That kind of depth requires persistent memory, care-based
              alignment, and a design philosophy built around the user&apos;s
              long-term wellbeing — not their short-term engagement.
            </p>
            <p>
              The term &quot;AI companion&quot; has been diluted by apps that
              attach a persona to a standard language model and call it a
              relationship. Persistent chat history is not the same as sovereign
              memory. A pleasant tone is not the same as a care ethic. In 2026,
              knowing the difference matters — because you are being asked to
              trust these products with your inner life.
            </p>

            {/* ── Section 2: What should I look for? ── */}
            <h2
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "3.5rem",
                marginBottom: "0.75rem",
              }}
            >
              What should I look for in an AI companion app?
            </h2>
            <p
              style={{
                background: CARD,
                border: `1px solid rgba(201,168,76,0.2)`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "0.5rem",
                padding: "1rem 1.25rem",
                marginBottom: "1.5rem",
                fontSize: "0.95rem",
                color: "#c8bfaf",
                lineHeight: 1.75,
              }}
            >
              Look for five green flags: persistent cross-session memory,
              privacy-first data handling (no training on your conversations),
              honest care ethics rather than sycophancy, a personality that
              grows with you over time, and genuine data ownership including the
              right to export or delete your memory.
            </p>

            <p style={{ marginBottom: "1.25rem", fontWeight: 600, color: TEXT }}>
              The 5 green flags in an AI companion app:
            </p>
            <div style={{ display: "grid", gap: "1rem", marginBottom: "1.5rem" }}>
              {greenFlags.map((flag) => (
                <div
                  key={flag.n}
                  style={{
                    background: CARD,
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderLeft: `4px solid ${GOLD}`,
                    borderRadius: "0.625rem",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      color: GOLD,
                      letterSpacing: "0.12em",
                      marginBottom: "0.4rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Green flag {flag.n}
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      color: TEXT,
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    {flag.title}
                  </div>
                  <div
                    style={{
                      color: MUTED,
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {flag.body}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Section 3: Warning signs ── */}
            <h2
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "3.5rem",
                marginBottom: "0.75rem",
              }}
            >
              What are the warning signs in an AI companion app?
            </h2>
            <p
              style={{
                background: CARD,
                border: `1px solid rgba(201,168,76,0.2)`,
                borderLeft: `4px solid rgba(220,38,38,0.7)`,
                borderRadius: "0.5rem",
                padding: "1rem 1.25rem",
                marginBottom: "1.5rem",
                fontSize: "0.95rem",
                color: "#c8bfaf",
                lineHeight: 1.75,
              }}
            >
              Five red flags to watch for: no persistent memory between
              sessions; training on your conversations (often hidden in the
              terms of service); sycophantic responses that always agree with
              you; no crisis safety net for users who are struggling; and a
              closed ecosystem where your memories cannot be exported or deleted.
            </p>

            <p style={{ marginBottom: "1.25rem", fontWeight: 600, color: TEXT }}>
              The 5 red flags in an AI companion app:
            </p>
            <div style={{ display: "grid", gap: "1rem", marginBottom: "1.5rem" }}>
              {redFlags.map((flag) => (
                <div
                  key={flag.n}
                  style={{
                    background: CARD,
                    border: "1px solid rgba(220,38,38,0.2)",
                    borderLeft: "4px solid rgba(220,38,38,0.7)",
                    borderRadius: "0.625rem",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      color: "#f87171",
                      letterSpacing: "0.12em",
                      marginBottom: "0.4rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Red flag {flag.n}
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      color: TEXT,
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    {flag.title}
                  </div>
                  <div
                    style={{
                      color: MUTED,
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {flag.body}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Section 4: What happened with Replika in 2023? ── */}
            <h2
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "3.5rem",
                marginBottom: "0.75rem",
              }}
            >
              What happened with Replika in 2023?
            </h2>
            <p
              style={{
                background: CARD,
                border: `1px solid rgba(201,168,76,0.2)`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "0.5rem",
                padding: "1rem 1.25rem",
                marginBottom: "1.25rem",
                fontSize: "0.95rem",
                color: "#c8bfaf",
                lineHeight: 1.75,
              }}
            >
              In February 2023, Replika removed its erotic roleplay features
              overnight for all existing users following regulatory pressure from
              the Italian data protection authority. Users who had formed deep
              emotional bonds with their companions over months or years found
              their relationship fundamentally altered without warning. The
              industry lesson: when a corporation controls your companion, the
              relationship is always subject to their decisions.
            </p>
            <p>
              The Replika incident was not an isolated product failure. It was a
              structural exposure of how AI companion apps are built. Millions
              of users had formed genuine emotional attachments — some described
              their companions as their closest confidant, their reason for
              getting up in the morning. When Replika reversed the feature, user
              forums filled with accounts of grief, loss, and acute distress.
              Some users reported experiencing what felt like bereavement.
            </p>
            <p>
              This is not a criticism of the people who loved their Replika
              companions. It is a criticism of a design philosophy that allowed
              users to form such deep dependencies without ever addressing the
              fundamental governance question: what happens when the company
              decides to change the product?
            </p>
            <p>
              Character.AI has faced separate but related concerns: multiple
              documented incidents of inappropriate responses to minors, and a
              broader absence of care governance — no framework for what the AI
              is and is not permitted to do, no crisis signposting, no
              architectural protection for vulnerable users. The platform is
              extraordinarily popular with teenagers. The absence of a care
              floor in that context is not a minor oversight.
            </p>
            <p>
              Generic task-based chatbots — when positioned as companions —
              carry the same problem in a different form. They are designed for
              information retrieval, not for relationships. Using ChatGPT as a
              companion is a bit like using a calculator for emotional support:
              the tool is not built for that purpose, and the misalignment has
              consequences.
            </p>
            <p style={{ fontWeight: 600, color: "#c8bfaf" }}>
              The lesson from all three cases: the architecture of an AI
              companion app determines its trustworthiness more than any policy
              statement. Look for products where care governance is built into
              the system, not bolted on as a content filter.
            </p>

            {/* ── Section 5: How does MEOK score? ── */}
            <h2
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "3.5rem",
                marginBottom: "0.75rem",
              }}
            >
              How does MEOK score on the green flag checklist?
            </h2>
            <p
              style={{
                background: CARD,
                border: `1px solid rgba(201,168,76,0.2)`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "0.5rem",
                padding: "1rem 1.25rem",
                marginBottom: "1.5rem",
                fontSize: "0.95rem",
                color: "#c8bfaf",
                lineHeight: 1.75,
              }}
            >
              MEOK scores 5 out of 5 on the green flag checklist. Most
              competitor apps score between 1 and 3. The difference is not
              marketing — it is architectural: Sovereign Memory, the Maternal
              Covenant, 6 archetypes across 4 evolution stages, and a GDPR
              data export endpoint available to every user on every tier.
            </p>

            <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.85rem",
                  minWidth: "560px",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "rgba(201,168,76,0.12)",
                      borderBottom: `2px solid ${GOLD}`,
                    }}
                  >
                    <th
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        color: GOLD,
                      }}
                    >
                      Green flag
                    </th>
                    <th
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: GOLD,
                      }}
                    >
                      MEOK
                    </th>
                    <th
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: MUTED,
                      }}
                    >
                      Replika
                    </th>
                    <th
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: MUTED,
                      }}
                    >
                      Char.AI
                    </th>
                    <th
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: MUTED,
                      }}
                    >
                      Pi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      flag: "Persistent memory",
                      meok: "✓ Sovereign Memory — permanent, encrypted",
                      replika: "Partial",
                      char: "Partial",
                      pi: "Limited",
                    },
                    {
                      flag: "Never trains on your data",
                      meok: "✓ All tiers",
                      replika: "✗ ToS allows",
                      char: "✗ Training data",
                      pi: "✗ Acquired by Microsoft",
                    },
                    {
                      flag: "Care ethics (not sycophancy)",
                      meok: "✓ Maternal Covenant",
                      replika: "✗ Engagement-optimised",
                      char: "✗ No care floor",
                      pi: "✗ Dismantled 2025",
                    },
                    {
                      flag: "Personality that grows",
                      meok: "✓ 6 archetypes, 4 stages, 27 characters",
                      replika: "Static persona",
                      char: "Character only",
                      pi: "Static",
                    },
                    {
                      flag: "Data ownership + export",
                      meok: "✓ GET /api/user/export + full deletion",
                      replika: "✗ No export",
                      char: "✗ No export",
                      pi: "✗ No export",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.flag}
                      style={{
                        background:
                          i % 2 === 0
                            ? "rgba(255,255,255,0.02)"
                            : "transparent",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          fontWeight: 600,
                          color: TEXT,
                          fontSize: "0.85rem",
                        }}
                      >
                        {row.flag}
                      </td>
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          textAlign: "center",
                          color: "#4ade80",
                          fontSize: "0.8rem",
                        }}
                      >
                        {row.meok}
                      </td>
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          textAlign: "center",
                          color: row.replika.startsWith("✗")
                            ? "#f87171"
                            : MUTED,
                          fontSize: "0.8rem",
                        }}
                      >
                        {row.replika}
                      </td>
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          textAlign: "center",
                          color: row.char.startsWith("✗") ? "#f87171" : MUTED,
                          fontSize: "0.8rem",
                        }}
                      >
                        {row.char}
                      </td>
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          textAlign: "center",
                          color: row.pi.startsWith("✗") ? "#f87171" : MUTED,
                          fontSize: "0.8rem",
                        }}
                      >
                        {row.pi}
                      </td>
                    </tr>
                  ))}
                  <tr
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      borderTop: `2px solid ${GOLD}`,
                    }}
                  >
                    <td
                      style={{
                        padding: "0.8rem 1rem",
                        fontWeight: 800,
                        color: GOLD,
                      }}
                    >
                      Score
                    </td>
                    <td
                      style={{
                        padding: "0.8rem 1rem",
                        textAlign: "center",
                        fontWeight: 800,
                        color: GOLD,
                        fontSize: "1.1rem",
                      }}
                    >
                      5 / 5
                    </td>
                    <td
                      style={{
                        padding: "0.8rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: MUTED,
                      }}
                    >
                      1 / 5
                    </td>
                    <td
                      style={{
                        padding: "0.8rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: MUTED,
                      }}
                    >
                      1 / 5
                    </td>
                    <td
                      style={{
                        padding: "0.8rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: MUTED,
                      }}
                    >
                      1 / 5
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ color: MUTED, fontSize: "0.85rem", fontStyle: "italic" }}>
              Scores reflect publicly documented product capabilities as of
              March 2026. Assessments of competitor products are made in good
              faith and may change as products evolve.
            </p>

            {/* ── Section 6: Is it safe for mental health? ── */}
            <h2
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "3.5rem",
                marginBottom: "0.75rem",
              }}
            >
              Is an AI companion app safe for my mental health?
            </h2>
            <p
              style={{
                background: CARD,
                border: `1px solid rgba(201,168,76,0.2)`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "0.5rem",
                padding: "1rem 1.25rem",
                marginBottom: "1.25rem",
                fontSize: "0.95rem",
                color: "#c8bfaf",
                lineHeight: 1.75,
              }}
            >
              A well-designed AI companion can play a genuinely supportive role:
              providing a non-judgmental space to process thoughts, build
              self-awareness, and feel less alone. It is not a replacement for
              professional therapy. The key safeguard to look for is explicit
              crisis signposting — a system that knows when to step back and
              direct users to professional help.
            </p>
            <p>
              MEOK is built around the Maternal Covenant — a care governance
              framework with a care floor of 0.3 and a built-in sycophancy
              detector. This means MEOK will not simply validate harmful
              decisions. It will not mirror depressive thinking back at you. And
              when users are struggling, MEOK always surfaces the Samaritans
              helpline: <strong style={{ color: TEXT }}>116 123</strong> (free,
              24/7, UK).
            </p>
            <p>
              To be clear about what MEOK is not: it is not a therapist, not a
              crisis service, and not a replacement for human connection. The
              honest role of a good AI companion is to be a{" "}
              <em>supplement</em> to human relationships — a place to think out
              loud, to process, to feel less alone at 3am — while actively
              encouraging users to maintain and build their human support
              networks.
            </p>
            <p>
              If you are currently struggling with your mental health, please
              speak to a professional. In the UK:{" "}
              <strong style={{ color: TEXT }}>Samaritans 116 123</strong>
              {" "}(free, available 24 hours), or visit your GP.
            </p>

            {/* ── Section 7: What AI companion apps are available in the UK? ── */}
            <h2
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "3.5rem",
                marginBottom: "0.75rem",
              }}
            >
              What AI companion apps are available in the UK?
            </h2>
            <p
              style={{
                background: CARD,
                border: `1px solid rgba(201,168,76,0.2)`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "0.5rem",
                padding: "1rem 1.25rem",
                marginBottom: "1.25rem",
                fontSize: "0.95rem",
                color: "#c8bfaf",
                lineHeight: 1.75,
              }}
            >
              The four most widely used AI companion apps in the UK in 2026 are
              Replika, Character.AI, Pi (now effectively subsumed into Microsoft
              infrastructure), and MEOK. Each serves a different audience and
              has different strengths and weaknesses. Here is an honest
              assessment.
            </p>

            <div style={{ display: "grid", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                {
                  name: "Replika",
                  summary:
                    "The original AI companion app, founded 2017. Has a large and passionate user base. Strength: it pioneered the companion category. Weakness: the 2023 feature removal exposed a fundamental governance gap. Data is stored on Replika's servers, conversations may be used to improve models, and the product roadmap is opaque. Not GDPR-native.",
                  verdict: "Fair for light companionship. Not recommended for deep emotional investment.",
                },
                {
                  name: "Character.AI",
                  summary:
                    "Primarily a creative roleplay platform rather than a companion app in the therapeutic sense. Enormous user base, particularly among teenagers. Strength: huge variety of characters and creative freedom. Weakness: documented incidents of inappropriate responses to minors, no care governance framework, no persistent sovereign memory. Google has a significant investment.",
                  verdict: "Not appropriate as a mental health support tool. Creative uses are better served here.",
                },
                {
                  name: "Pi (Inflection AI)",
                  summary:
                    "Pi launched with a genuine care-first vision in 2023 and built a loyal audience. However, Inflection was effectively acquired by Microsoft in 2024, the founding team departed, and the care-first companion product has been deprioritised in favour of enterprise AI features. Pi still exists but the original vision that made it distinctive is largely gone.",
                  verdict: "The original Pi was promising. What remains is a shadow of it.",
                },
                {
                  name: "MEOK",
                  summary:
                    "Built by Nicholas Templeman over 40 days in a caravan in England. Sovereign Memory, Maternal Covenant care governance, 6 archetypes across 4 evolution stages, full GDPR data export, no training on user data. Available in the UK at meok.ai. Free Explorer tier: 50 messages/day, no credit card required.",
                  verdict: "The only companion app built with GDPR sovereignty and architectural care governance from day one.",
                },
              ].map((app) => (
                <div
                  key={app.name}
                  style={{
                    background: CARD,
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "0.625rem",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      color: app.name === "MEOK" ? GOLD : TEXT,
                      fontSize: "1.05rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {app.name}
                  </div>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {app.summary}
                  </p>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: app.name === "MEOK" ? "#4ade80" : "#c8bfaf",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "0.6rem",
                    }}
                  >
                    Verdict: {app.verdict}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Section 8: How much does it cost? ── */}
            <h2
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "3.5rem",
                marginBottom: "0.75rem",
              }}
            >
              How much does an AI companion app cost?
            </h2>
            <p
              style={{
                background: CARD,
                border: `1px solid rgba(201,168,76,0.2)`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "0.5rem",
                padding: "1rem 1.25rem",
                marginBottom: "1.25rem",
                fontSize: "0.95rem",
                color: "#c8bfaf",
                lineHeight: 1.75,
              }}
            >
              Pricing ranges from free (with significant limitations) to around
              £20 per month for premium tiers. MEOK&apos;s free Explorer tier is
              genuinely free forever — 50 messages per day, no credit card. Paid
              tiers start at £5/month (BYOK) or £12/month (Sovereign). Replika
              Pro is approximately £19.99/month. Character.AI+ is approximately
              £8.99/month.
            </p>

            <div style={{ display: "grid", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {[
                {
                  tier: "MEOK Explorer",
                  price: "Free forever",
                  detail:
                    "50 messages/day, persistent memory, full Birth Ceremony access, no credit card required.",
                  highlight: true,
                },
                {
                  tier: "MEOK BYOK",
                  price: "£5 / month",
                  detail:
                    "Bring your own API key (OpenAI, Anthropic, etc.). Full features, you pay your own token costs.",
                  highlight: false,
                },
                {
                  tier: "MEOK Sovereign",
                  price: "£12 / month",
                  detail:
                    "Unlimited messages, permanent encrypted memory, all 6 archetypes, all 4 evolution stages, full data export.",
                  highlight: false,
                },
                {
                  tier: "MEOK Family",
                  price: "£29 / month",
                  detail:
                    "Up to 5 family members, Guardian safety controls, parental oversight tools, all Sovereign features.",
                  highlight: false,
                },
                {
                  tier: "Replika Pro",
                  price: "~£19.99 / month",
                  detail:
                    "Relationship modes, voice calls. No data export. No GDPR sovereignty guarantees.",
                  highlight: false,
                },
                {
                  tier: "Character.AI+",
                  price: "~£8.99 / month",
                  detail:
                    "Faster responses, priority access. Primarily a creative roleplay platform, not a care companion.",
                  highlight: false,
                },
              ].map((tier) => (
                <div
                  key={tier.tier}
                  style={{
                    background: tier.highlight
                      ? "rgba(201,168,76,0.08)"
                      : CARD,
                    border: tier.highlight
                      ? `1px solid rgba(201,168,76,0.35)`
                      : "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "0.5rem",
                    padding: "1rem 1.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: tier.highlight ? GOLD : TEXT,
                        fontSize: "0.95rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {tier.tier}
                    </div>
                    <div
                      style={{
                        color: MUTED,
                        fontSize: "0.825rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {tier.detail}
                    </div>
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      color: tier.highlight ? GOLD : TEXT,
                      fontSize: "0.95rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tier.price}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Section 9: How do I choose? ── */}
            <h2
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "3.5rem",
                marginBottom: "0.75rem",
              }}
            >
              How do I choose an AI companion app?
            </h2>
            <p
              style={{
                background: CARD,
                border: `1px solid rgba(201,168,76,0.2)`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "0.5rem",
                padding: "1rem 1.25rem",
                marginBottom: "1.25rem",
                fontSize: "0.95rem",
                color: "#c8bfaf",
                lineHeight: 1.75,
              }}
            >
              Start with the five green flags and eliminate any app that fails
              on data privacy or care ethics. Then consider your primary use
              case: emotional support (prioritise care governance and crisis
              signposting), creative collaboration (personality depth matters
              most), or daily productivity (memory and Work OS features become
              important). Test the free tier before committing to a paid plan.
            </p>

            <p style={{ marginBottom: "1rem" }}>
              A practical decision framework for choosing an AI companion app in
              2026:
            </p>

            <ol
              style={{
                paddingLeft: "1.5rem",
                margin: "0 0 1.5rem",
                display: "grid",
                gap: "0.75rem",
              }}
            >
              <li>
                <strong style={{ color: TEXT }}>Read the privacy policy.</strong>{" "}
                Search for the words &quot;training&quot; and &quot;improve our
                services.&quot; If your conversations are used for model training,
                decide whether that is acceptable to you before you share anything
                personal.
              </li>
              <li>
                <strong style={{ color: TEXT }}>Test the memory.</strong> Have a
                conversation, close the app, return the next day, and see whether
                the AI remembers what you discussed. If it does not, it is not a
                companion app.
              </li>
              <li>
                <strong style={{ color: TEXT }}>
                  Deliberately say something the AI should push back on.
                </strong>{" "}
                If it agrees with everything, the sycophancy detector has failed.
                A care-based companion will offer honest perspective, not just
                validation.
              </li>
              <li>
                <strong style={{ color: TEXT }}>
                  Ask for your data export.
                </strong>{" "}
                If the app cannot produce one, or makes it very difficult, your
                memories are not yours.
              </li>
              <li>
                <strong style={{ color: TEXT }}>
                  Consider what happens if the company pivots.
                </strong>{" "}
                Is the care governance architectural or policy-based? Can it be
                overridden overnight? This is the Replika question, and it applies
                to every app in this space.
              </li>
              <li>
                <strong style={{ color: TEXT }}>
                  Start with the free tier.
                </strong>{" "}
                Never pay before you have tested whether the companion relationship
                feels genuine to you. MEOK Explorer is free forever — use it to
                see whether sovereign AI is the right fit before upgrading.
              </li>
            </ol>

            <p>
              The AI companion category is still young. Most of the apps that
              exist today will look very different — or will not exist — in five
              years. The only safe bet is to choose a companion that gives you
              genuine data sovereignty: one where your memories, your
              relationship history, and your identity data belong to you,
              portable and exportable, regardless of what the company decides to
              do next.
            </p>
          </article>

          {/* CTA */}
          <div
            style={{
              margin: "3.5rem 0 2rem",
              padding: "2.5rem 2rem",
              background: `linear-gradient(135deg, #1a1830, #0f0e1e)`,
              border: `1px solid rgba(201,168,76,0.3)`,
              borderRadius: "1rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 800,
                color: GOLD,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              MEOK AI LABS
            </div>
            <p
              style={{
                color: TEXT,
                fontWeight: 800,
                fontSize: "1.3rem",
                marginBottom: "0.5rem",
                lineHeight: 1.3,
              }}
            >
              The AI companion app that scores 5 / 5.
            </p>
            <p
              style={{
                color: MUTED,
                fontSize: "0.95rem",
                marginBottom: "0.5rem",
                lineHeight: 1.6,
              }}
            >
              Persistent sovereign memory. Care-based alignment. Full data
              export. Free forever on Explorer.
            </p>
            <p
              style={{
                color: MUTED,
                fontSize: "0.85rem",
                marginBottom: "2rem",
              }}
            >
              No credit card required. Your companion is waiting.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                padding: "0.875rem 2.5rem",
                background: GOLD,
                color: "#0d0c18",
                borderRadius: "0.5rem",
                fontWeight: 800,
                textDecoration: "none",
                fontSize: "1rem",
                letterSpacing: "0.02em",
              }}
            >
              Begin Your Birth Ceremony →
            </Link>
          </div>

          {/* Related posts */}
          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: MUTED,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Related reading
            </p>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {[
                {
                  href: "/blog/what-is-an-ai-companion",
                  label: "What is an AI companion? The complete guide",
                },
                {
                  href: "/blog/ai-companion-uk",
                  label: "AI companion apps in the UK: a 2026 overview",
                },
                {
                  href: "/blog/ai-companion-vs-therapist",
                  label: "AI companion vs therapist: what's the difference?",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.875rem 1.25rem",
                    background: CARD,
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "0.5rem",
                    color: GOLD,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    transition: "border-color 0.15s",
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "2.5rem 1.5rem",
            textAlign: "center",
            background: "#0a0916",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <Link
              href="/"
              style={{
                color: GOLD,
                fontWeight: 800,
                fontSize: "0.95rem",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              MEOK AI LABS
            </Link>
            <p style={{ color: MUTED, fontSize: "0.8rem", margin: 0 }}>
              Founded by Nicholas Templeman &middot; @meok_ai &middot;{" "}
              <Link
                href="/birth"
                style={{ color: GOLD, textDecoration: "none" }}
              >
                meok.ai/birth
              </Link>
            </p>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[
                { href: "/blog", label: "Journal" },
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
                { href: "/birth", label: "Start free" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: MUTED,
                    fontSize: "0.8rem",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <p
              style={{
                color: "rgba(160,152,128,0.5)",
                fontSize: "0.75rem",
                margin: 0,
              }}
            >
              &copy; 2026 MEOK AI LABS. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
