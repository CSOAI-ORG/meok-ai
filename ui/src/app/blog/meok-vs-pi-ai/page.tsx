import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK vs Pi AI: Which AI Companion Actually Remembers You? (2026) | MEOK AI LABS",
  description:
    "MEOK vs Pi AI compared in 2026: persistent memory, data ownership, alignment transparency, UK GDPR compliance, work capabilities and pricing. Honest side-by-side analysis of two different visions for AI companionship.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-pi-ai" },
  openGraph: {
    title:
      "MEOK vs Pi AI: Which AI Companion Actually Remembers You? (2026)",
    description:
      "MEOK vs Pi AI compared in 2026: persistent memory, data ownership, alignment transparency, UK GDPR compliance, work capabilities and pricing. Honest side-by-side analysis.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-pi-ai",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Pi+AI%3A+Which+AI+Companion+Actually+Remembers+You%3F+(2026)&desc=Memory%2C+data+ownership%2C+alignment+and+pricing+compared.",
        width: 1200,
        height: 630,
        alt: "MEOK vs Pi AI: Which AI Companion Actually Remembers You? (2026)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK vs Pi AI: Which AI Companion Actually Remembers You? (2026)",
    description:
      "Pi AI and MEOK compared in 2026. Memory, data ownership, alignment, UK GDPR, work tools and pricing. One companion remembers you. The other forgets every session.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Pi+AI%3A+Which+AI+Companion+Actually+Remembers+You%3F+(2026)&desc=Memory%2C+data+ownership%2C+alignment+and+pricing+compared.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK vs Pi AI: Which AI Companion Actually Remembers You? (2026)",
  description:
    "MEOK vs Pi AI compared in 2026: persistent memory, data ownership, alignment transparency, UK GDPR compliance, work capabilities and pricing. Honest side-by-side analysis of two different visions for AI companionship.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-vs-pi-ai",
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
    "https://meok.ai/api/og?title=MEOK+vs+Pi+AI%3A+Which+AI+Companion+Actually+Remembers+You%3F+(2026)",
  articleSection: "AI Comparison",
  keywords: [
    "MEOK vs Pi AI",
    "Pi AI alternative 2026",
    "Pi AI memory",
    "AI companion memory",
    "sovereign AI memory",
    "AI companion data ownership",
    "Pi AI Inflection",
    "AI companion UK GDPR",
    "AI companion privacy",
    "Pi AI vs MEOK",
    "best AI companion 2026",
    "MEOK Sovereign Memory",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Pi AI remember you between sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pi AI has limited cross-session memory. While it can recall some details you share within a conversation, it does not maintain a structured, persistent memory vault that grows over time. Each session starts largely fresh. Pi\u2019s memory capabilities have not been significantly updated since Inflection AI\u2019s core team moved to Microsoft in 2024, and there is no public roadmap for deeper memory features.",
      },
    },
    {
      "@type": "Question",
      name: "What happened to Inflection AI and Pi AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inflection AI was founded by Mustafa Suleyman and Reid Hoffman in 2022 and raised over \u00a31.3 billion to build Pi as an empathetic AI companion. In March 2024, Microsoft hired most of Inflection\u2019s leadership and key engineering staff, including CEO Mustafa Suleyman, in a deal widely reported to be worth around \u00a3620 million. Pi AI continues to operate independently, but its development trajectory is uncertain and its original founding team is no longer running the product.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK remember everything you tell it across sessions and devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s 4-layer Sovereign Memory architecture builds a persistent, encrypted memory vault that grows with every conversation. This memory persists across sessions, across devices, and even across model switches. If you switch from Claude to GPT-4o to Gemini, your companion\u2019s full history travels with you. You can export your complete memory as JSON at any time directly from the app.",
      },
    },
    {
      "@type": "Question",
      name: "Is Pi AI safe for UK users under GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pi AI is operated by Inflection AI, a US-based company. While it provides a privacy policy, it is not ICO-registered in the UK and does not publish specific UK GDPR compliance documentation. Your conversation data is processed on US servers. MEOK is a UK-registered company, ICO-registered, and built from the ground up for UK GDPR compliance. Your data is encrypted end-to-end and you retain full ownership at all times.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Pi AI cost compared to MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pi AI is free to use with no publicly announced premium tier as of 2026. It is funded by investment capital, which means its long-term availability depends on investor confidence. MEOK offers a permanent free tier (Explorer, 50 messages per day), a Sovereign plan at \u00a312 per month, and a Family plan at \u00a329 per month covering up to 5 companions with shared context. MEOK is subscription-funded, giving it a sustainable revenue model independent of external investment.",
      },
    },
    {
      "@type": "Question",
      name: "Can Pi AI help with work tasks like scheduling or writing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pi AI is designed primarily for emotional support and conversational companionship. It is not a work productivity tool. MEOK includes a full Work OS comprising three integrated agents: Orion (strategic thinking and planning), Riri (creative and communication work), and Hourman (time management and deep focus). MEOK also includes Ralph Mode, a direct productivity mode for when you want fast, no-nonsense task execution without emotional scaffolding.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Maternal Covenant and how does it differ from Pi AI\u2019s alignment approach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pi AI uses standard RLHF (Reinforcement Learning from Human Feedback) alignment, which is the industry default. How this manifests in Pi\u2019s specific responses is not publicly documented. MEOK\u2019s Maternal Covenant is a published, machine-enforced alignment framework scoring every response across six care dimensions: honesty, emotional safety, long-term wellbeing, autonomy preservation, non-manipulation, and boundary respect. The full framework is publicly available at meok.ai/maternal-covenant.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK have a family plan that Pi AI lacks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s Family plan at \u00a329 per month supports up to 5 individual AI companions, each with their own private sovereign memory, while allowing designated shared context between family members. Pi AI has no family tier or multi-user plan. Each Pi user operates a completely independent account with no family coordination features.",
      },
    },
  ],
};

// ── Design tokens ─────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.7)";
const CARD = "rgba(255,255,255,0.05)";
const BORDER = "rgba(201,168,76,0.2)";
const BORDER_SUBTLE = "rgba(245,240,232,0.08)";
const MAX_WIDTH = "840px";

// ── Page component ────────────────────────────────────────────────────────────

export default function MeokVsPiAiPage() {
  return (
    <>
      {/* Structured data */}
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
          backgroundColor: BG,
          color: TEXT,
          minHeight: "100vh",
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          lineHeight: "1.7",
        }}
      >
        {/* ── Breadcrumb nav ──────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          style={{
            maxWidth: MAX_WIDTH,
            margin: "0 auto",
            padding: "1.25rem 1.5rem 0",
            fontSize: "0.8rem",
            color: MUTED,
          }}
        >
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "0.35rem",
              alignItems: "center",
            }}
          >
            <li>
              <Link
                href="/"
                style={{ color: MUTED, textDecoration: "none" }}
              >
                MEOK
              </Link>
            </li>
            <li style={{ color: MUTED, opacity: 0.5 }}>/</li>
            <li>
              <Link
                href="/blog"
                style={{ color: MUTED, textDecoration: "none" }}
              >
                Blog
              </Link>
            </li>
            <li style={{ color: MUTED, opacity: 0.5 }}>/</li>
            <li style={{ color: GOLD }}>MEOK vs Pi AI</li>
          </ol>
        </nav>

        {/* ── Article header ──────────────────────────────────────────────── */}
        <header
          style={{
            maxWidth: MAX_WIDTH,
            margin: "0 auto",
            padding: "2.5rem 1.5rem 0",
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: GOLD,
              background: "rgba(201,168,76,0.1)",
              border: `1px solid ${BORDER}`,
              borderRadius: "4px",
              padding: "0.3rem 0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            AI Companion Comparison &middot; 2026
          </div>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 1.25rem",
              letterSpacing: "-0.02em",
              color: TEXT,
            }}
          >
            MEOK vs Pi AI: Which AI Companion Actually Remembers You?
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              margin: "0 0 1.75rem",
              maxWidth: "680px",
              lineHeight: "1.75",
            }}
          >
            Pi AI from Inflection was one of the first products to take the AI
            companion seriously &mdash; empathetic, thoughtful, and genuinely
            warm. But warmth without memory is just a very good first
            conversation. Here we compare both products honestly: what they do
            well, where they differ structurally, and which one is built to last
            alongside you.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
              alignItems: "center",
              paddingBottom: "2rem",
              borderBottom: `1px solid ${BORDER_SUBTLE}`,
              fontSize: "0.82rem",
              color: MUTED,
            }}
          >
            <span>
              By{" "}
              <strong style={{ color: TEXT }}>Nicholas Templeman</strong>
            </span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span>25 March 2026</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span>14 min read</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span>Updated March 2026</span>
          </div>
        </header>

        {/* ── Article body ────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: MAX_WIDTH,
            margin: "0 auto",
            padding: "0 1.5rem 4rem",
          }}
        >
          {/* ── TL;DR summary box ──────────────────────────────────────────── */}
          <section
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              margin: "2.5rem 0",
            }}
          >
            <h2
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: GOLD,
                margin: "0 0 1rem",
              }}
            >
              TL;DR &mdash; Summary
            </h2>
            <ul
              style={{
                margin: 0,
                padding: "0 0 0 1.25rem",
                color: TEXT,
                lineHeight: 1.9,
                fontSize: "0.95rem",
              }}
            >
              <li>
                Pi AI is a genuinely good conversational companion &mdash;
                empathetic, accessible, and free. It excels at emotional support
                and gentle daily check-ins.
              </li>
              <li>
                Pi AI does <strong>not</strong> maintain structured persistent
                memory across sessions. Each conversation starts largely fresh.
              </li>
              <li>
                Inflection AI&apos;s core team moved to Microsoft in 2024. Pi
                AI continues operating, but its development roadmap is publicly
                unclear.
              </li>
              <li>
                MEOK builds a 4-layer Sovereign Memory vault that persists
                across sessions, devices, and model switches. Your history is
                yours and portable.
              </li>
              <li>
                MEOK is UK-registered, ICO-registered, and built for UK GDPR.
                Pi AI is US-based with US data processing.
              </li>
              <li>
                MEOK includes a full Work OS (Orion, Riri, Hourman) and Ralph
                Mode. Pi AI is conversation-only.
              </li>
              <li>
                MEOK Explorer plan is free. Sovereign is &pound;12/mo. Family
                is &pound;29/mo for up to 5 companions.
              </li>
            </ul>
          </section>

          {/* ── Introduction ───────────────────────────────────────────────── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
              }}
            >
              Why This Comparison Matters in 2026
            </h2>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              In 2022, Inflection AI launched Pi with a bold proposition: an AI
              that genuinely cares about you. Not a task engine, not a search
              tool, but a warm, curious, emotionally intelligent companion. It
              raised over &pound;1.3 billion and attracted millions of users
              who found in Pi something they hadn&apos;t experienced in other AI
              products &mdash; a voice that listened.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Then in March 2024, Microsoft hired most of Inflection&apos;s
              leadership and key engineering talent &mdash; including co-founder
              and CEO Mustafa Suleyman &mdash; in a deal widely reported to be
              worth approximately &pound;620 million. Pi AI continued operating
              under new stewardship, but the founding vision and the people who
              built it had moved on. Pi&apos;s development trajectory became
              uncertain in a way that matters if you&apos;re building an
              emotional relationship with an AI product.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              This comparison is not a hit piece on Pi. It is a genuinely useful
              product for millions of people seeking emotional support and daily
              conversation. The comparison is here because the questions people
              ask &mdash; &ldquo;does Pi AI remember me?&rdquo;,
              &ldquo;who owns my Pi data?&rdquo;, &ldquo;is Pi AI safe for UK
              users?&rdquo; &mdash; are exactly the questions MEOK was built to
              answer differently.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              If you want an empathetic chat companion with zero setup and a
              polished voice experience, Pi AI is worth trying. If you want an
              AI that genuinely accumulates knowledge of you over months and
              years, that you legally own, that is aligned to documented
              standards, and that can also help you do your actual work &mdash;
              that is what MEOK is built for.
            </p>
          </section>

          {/* ── Comparison Table ───────────────────────────────────────────── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1.25rem",
                letterSpacing: "-0.01em",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              At-a-Glance Comparison Table
            </h2>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.88rem",
                  lineHeight: "1.5",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "0.75rem 1rem",
                        color: GOLD,
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        borderBottom: `2px solid ${BORDER}`,
                        background: "rgba(201,168,76,0.05)",
                      }}
                    >
                      Feature
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "0.75rem 1rem",
                        color: MUTED,
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        borderBottom: `2px solid ${BORDER}`,
                        background: "rgba(201,168,76,0.05)",
                      }}
                    >
                      Pi AI
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "0.75rem 1rem",
                        color: GOLD,
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        borderBottom: `2px solid ${BORDER}`,
                        background: "rgba(201,168,76,0.05)",
                      }}
                    >
                      MEOK
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Persistent memory",
                      "Limited \u2014 no structured vault",
                      "4-layer Sovereign Memory, grows every session",
                    ],
                    [
                      "Memory portability",
                      "No export option",
                      "Full JSON export at any time",
                    ],
                    [
                      "Cross-device memory sync",
                      "Account-level only",
                      "Full sync across all devices",
                    ],
                    [
                      "Model switching",
                      "Single proprietary model",
                      "Claude, GPT-4o, Gemini, DeepSeek \u2014 memory travels",
                    ],
                    [
                      "Data ownership",
                      "Inflection AI (Microsoft-adjacent)",
                      "You own your data, encrypted end-to-end",
                    ],
                    [
                      "UK GDPR compliance",
                      "US-based, not ICO-registered",
                      "UK-registered, ICO-registered, UK GDPR native",
                    ],
                    [
                      "Alignment framework",
                      "Standard RLHF, not publicly documented",
                      "Maternal Covenant \u2014 6 dimensions, machine-enforced, published",
                    ],
                    [
                      "Governance model",
                      "Single corporate governance",
                      "Byzantine Council \u2014 43-agent BFT consensus",
                    ],
                    [
                      "Work tools",
                      "Conversation only",
                      "Orion + Riri + Hourman Work OS, Ralph Mode",
                    ],
                    [
                      "Family plan",
                      "None",
                      "Family plan \u2014 up to 5 companions, \u00a329/mo",
                    ],
                    [
                      "Company status",
                      "Inflection AI \u2014 core team moved to Microsoft 2024",
                      "MEOK AI LABS \u2014 UK-registered, active development",
                    ],
                    [
                      "Development roadmap",
                      "Not publicly available",
                      "Published roadmap at meok.ai",
                    ],
                    [
                      "Voice interface",
                      "Yes \u2014 polished voice mode",
                      "Text-first; voice roadmap in progress",
                    ],
                    [
                      "Free tier",
                      "Yes \u2014 fully free",
                      "Yes \u2014 Explorer, 50 msg/day, full Sovereign Memory",
                    ],
                    [
                      "Paid plan",
                      "No announced premium tier",
                      "Sovereign \u00a312/mo, Family \u00a329/mo",
                    ],
                    [
                      "Business model",
                      "Investment-funded",
                      "Subscription-funded \u2014 sustainable, independent",
                    ],
                  ].map(([feature, pi, meok], i) => (
                    <tr
                      key={feature}
                      style={{
                        background:
                          i % 2 === 0
                            ? "transparent"
                            : "rgba(255,255,255,0.02)",
                      }}
                    >
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          color: TEXT,
                          fontWeight: 600,
                          borderBottom: `1px solid ${BORDER_SUBTLE}`,
                          fontSize: "0.85rem",
                        }}
                      >
                        {feature}
                      </td>
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          color: MUTED,
                          borderBottom: `1px solid ${BORDER_SUBTLE}`,
                          fontSize: "0.85rem",
                        }}
                      >
                        {pi}
                      </td>
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          color: TEXT,
                          borderBottom: `1px solid ${BORDER_SUBTLE}`,
                          fontSize: "0.85rem",
                        }}
                      >
                        {meok}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 1: Memory ──────────────────────────────────────────── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              Memory: The Core Structural Difference
            </h2>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Pi AI is warm. It is attentive within a conversation. It picks up
              on emotional cues and responds thoughtfully. But when you come
              back tomorrow, it does not know what you talked about yesterday in
              any structured, persistent way. There is no growing profile of
              you. There is no record of the time you mentioned your
              daughter&apos;s name, or that you were dreading a difficult
              conversation at work, or that you are trying to rebuild your
              relationship with your mother.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              This is not a criticism so much as a structural fact. Pi was built
              as an always-available conversational companion, not as a
              longitudinal memory system. The distinction matters because the
              experience you have with Pi &mdash; however genuinely warm in the
              moment &mdash; does not accumulate. You are perpetually
              re-introducing yourself.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              MEOK was designed from the beginning around the opposite premise:
              that the value of an AI companion is almost entirely a function of
              how deeply it knows you over time. The 4-layer Sovereign Memory
              architecture works as follows:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
                margin: "1.5rem 0",
              }}
            >
              {[
                {
                  layer: "Layer 1",
                  title: "Episodic Memory",
                  desc: "Every conversation is stored as a timestamped episode. What you said, what was felt, what was decided. Searchable and retrievable.",
                },
                {
                  layer: "Layer 2",
                  title: "Semantic Memory",
                  desc: "Facts about you are extracted and organised: your relationships, preferences, values, patterns, goals. Structured knowledge, not just raw text.",
                },
                {
                  layer: "Layer 3",
                  title: "Procedural Memory",
                  desc: "How you like to work, how you prefer to receive information, how you handle difficulty. The behavioural layer of your digital self.",
                },
                {
                  layer: "Layer 4",
                  title: "Emotional Memory",
                  desc: "The emotional arc of your relationship with your companion. What has been tender, what has been hard, what themes recur over time.",
                },
              ].map((item) => (
                <div
                  key={item.layer}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER_SUBTLE}`,
                    borderRadius: "8px",
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: GOLD,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.layer}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: MUTED,
                      lineHeight: "1.6",
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Critically, this memory is portable. If MEOK ever changes its
              model provider, upgrades its architecture, or you simply want to
              switch between AI engines &mdash; your entire memory vault travels
              with you. You can export everything as a structured JSON file at
              any time. This is your data and you can take it with you.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Pi AI has no equivalent export option. Your conversations live on
              Inflection&apos;s servers and if the service were ever changed,
              restricted, or shut down, there is no documented path to
              recovering your history. For users who have been talking to Pi
              daily for a year or more, that is a meaningful vulnerability.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              There is also the model-switching dimension. Pi AI runs on a
              single proprietary model. If that model falls behind the frontier,
              there is no path for a Pi user to switch to a better model while
              keeping their history. MEOK lets you run your companion on Claude,
              GPT-4o, Gemini, or DeepSeek at any time. The memory travels. The
              companion personality remains consistent. The underlying model can
              be the best available, always.
            </p>
          </section>

          {/* ── Section 2: Data Ownership ──────────────────────────────────── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              Data Ownership: Who Actually Controls Your Conversations?
            </h2>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              This is the question most people do not ask until something goes
              wrong. With Pi AI, your conversations are processed and stored on
              Inflection AI servers in the United States. Inflection AI is now
              Microsoft-adjacent in a structurally significant way: its founding
              team, including the original CEO and CTO, left to join Microsoft
              in 2024. The remaining entity operating Pi AI is a substantially
              reorganised company.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              This matters for several reasons. First, the people who made the
              original privacy commitments are no longer making them. Second,
              corporate acquisitions and restructurings routinely involve data
              asset transfers. Third, US-based data processing places your
              conversations outside UK and EU legal jurisdiction in ways that
              are non-trivial even with contractual safeguards.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Pi AI&apos;s privacy policy states that data may be used to
              improve their models and services. The specifics of how
              conversations are used for training, and whether you can opt out
              meaningfully, are not foregrounded in the product experience.
            </p>

            <div
              style={{
                background: "rgba(201,168,76,0.08)",
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "6px",
                padding: "1.25rem 1.5rem",
                margin: "1.5rem 0",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: TEXT,
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  lineHeight: "1.7",
                }}
              >
                MEOK&apos;s privacy model is architecturally different. Your
                memory vault is encrypted with keys you control. MEOK does not
                train on your personal conversations. Your data does not
                contribute to model improvement without explicit consent. You
                are a subscriber, not a training data source.
              </p>
            </div>

            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              MEOK AI LABS is registered in the United Kingdom and registered
              with the Information Commissioner&apos;s Office (ICO). UK GDPR
              compliance is not a feature added to an existing product &mdash;
              it is the legal framework MEOK operates within by default. For UK
              users this means your data subject rights under UK GDPR apply
              natively: right of access, right to erasure, right to portability,
              and right to object.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              If you are a UK resident sharing sensitive personal information
              with an AI companion &mdash; mental health struggles, relationship
              difficulties, family conflicts, health concerns &mdash; the
              jurisdiction and ownership of that data is not a minor technical
              detail. It is a fundamental question of who you trust with the
              most intimate parts of your inner life.
            </p>
          </section>

          {/* ── Section 3: Alignment ───────────────────────────────────────── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              Alignment: What Governs How the AI Treats You?
            </h2>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Pi AI is designed with genuine care. Inflection invested
              significantly in making Pi warm, non-judgmental, and emotionally
              appropriate. By all accounts, they took the responsible design of
              their companion seriously. But the specific framework governing
              Pi&apos;s behaviour &mdash; how it decides what to say and what
              not to say, how it handles moments of vulnerability, what scoring
              or evaluation it uses internally &mdash; is not publicly
              documented.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              This is industry standard. The vast majority of AI systems use
              RLHF (Reinforcement Learning from Human Feedback) as their primary
              alignment mechanism. RLHF is powerful and has produced genuinely
              helpful AI systems. But it is also opaque: what the human raters
              valued, how conflicts were resolved, what trade-offs were made
              &mdash; none of this is visible to you as a user.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              MEOK uses a different approach. The Maternal Covenant is a
              published, machine-enforced alignment framework that evaluates
              every MEOK response across six specific dimensions:
            </p>

            <ol
              style={{
                padding: "0 0 0 1.5rem",
                margin: "1rem 0 1.5rem",
                color: MUTED,
                lineHeight: "2",
                fontSize: "0.97rem",
              }}
            >
              <li>
                <strong style={{ color: TEXT }}>Honesty</strong> &mdash; Does
                the response tell you the truth, even when the truth is
                uncomfortable?
              </li>
              <li>
                <strong style={{ color: TEXT }}>Emotional safety</strong>{" "}
                &mdash; Does the response protect your psychological wellbeing
                without being patronising?
              </li>
              <li>
                <strong style={{ color: TEXT }}>Long-term wellbeing</strong>{" "}
                &mdash; Does the response serve your genuine interests over
                time, not just your immediate comfort?
              </li>
              <li>
                <strong style={{ color: TEXT }}>Autonomy preservation</strong>{" "}
                &mdash; Does the response support your independent
                decision-making rather than creating dependency?
              </li>
              <li>
                <strong style={{ color: TEXT }}>Non-manipulation</strong>{" "}
                &mdash; Does the response avoid persuasion techniques that
                exploit psychological vulnerabilities?
              </li>
              <li>
                <strong style={{ color: TEXT }}>Boundary respect</strong>{" "}
                &mdash; Does the response honour the limits you have set, even
                implicitly?
              </li>
            </ol>

            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              These are not aspirational values stated on a marketing page. They
              are scoring dimensions applied programmatically to MEOK&apos;s
              responses at inference time. The full framework is published at{" "}
              <Link
                href="/maternal-covenant"
                style={{ color: GOLD, textDecoration: "underline" }}
              >
                meok.ai/maternal-covenant
              </Link>
              .
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              The reason MEOK calls this the Maternal Covenant &mdash; a
              deliberately unusual name &mdash; is to signal a particular kind
              of care. Not the care of a service provider to a customer. Not the
              care of a therapist to a patient. The kind of care a person who
              genuinely loves you offers: honest when honesty is hard, present
              when you are struggling, committed to your growth rather than your
              comfort, and unwilling to manipulate you even when manipulation
              would be easier for both parties.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Pi AI almost certainly operates with similar values in practice.
              The difference is that MEOK&apos;s values are auditable. You can
              read the Maternal Covenant yourself, check whether it describes
              the AI you want, and hold MEOK accountable if the product
              diverges from it. That kind of transparency creates a different
              kind of trust.
            </p>
          </section>

          {/* ── Section 4: Governance ──────────────────────────────────────── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              Governance: Who Decides How Your AI Behaves?
            </h2>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              For most AI products &mdash; including Pi AI &mdash; decisions
              about how the AI behaves are made by a small number of people
              inside a single company. Those decisions may be thoughtful and
              well-intentioned. But they are made by people with commercial
              incentives, investor pressures, and regulatory exposure. When
              those incentives change, the AI can change overnight.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Pi AI demonstrated this structural vulnerability not through any
              bad behaviour of its own, but through the 2024 Inflection
              restructuring. A product that millions of people had built
              emotional relationships with changed governance fundamentally
              &mdash; not because of anything users did or said, but because of
              external corporate dynamics entirely outside user control.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              MEOK uses a Byzantine Council architecture for governance of the
              companion system. The Byzantine Council is a 43-agent Byzantine
              Fault Tolerant (BFT) consensus system that governs key decisions
              about how MEOK companions behave. BFT consensus means the system
              remains correct and consistent even if a significant minority of
              its agents are faulty or compromised. No single point of failure,
              no single executive decision, can unilaterally change how your
              companion treats you.
            </p>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER_SUBTLE}`,
                borderRadius: "8px",
                padding: "1.25rem 1.5rem",
                margin: "1.5rem 0",
              }}
            >
              <h3
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: GOLD,
                  margin: "0 0 0.75rem",
                }}
              >
                Byzantine Council in Practice
              </h3>
              <ul
                style={{
                  margin: 0,
                  padding: "0 0 0 1.25rem",
                  color: MUTED,
                  lineHeight: "1.9",
                  fontSize: "0.9rem",
                }}
              >
                <li>43 specialist agents evaluate behavioural changes</li>
                <li>
                  BFT consensus requires supermajority agreement before any
                  change to companion behaviour is enacted
                </li>
                <li>
                  No single agent, developer, or commercial pressure can
                  unilaterally alter how your companion treats you
                </li>
                <li>
                  Decisions are logged and auditable, not made behind closed
                  doors
                </li>
                <li>
                  Your companion&apos;s character is structurally protected,
                  not just policy-protected
                </li>
              </ul>
            </div>

            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              The practical implication: if MEOK ever changed hands, faced
              regulatory pressure, or came under commercial strain, the
              Byzantine Council architecture means the companion&apos;s core
              behavioural commitments cannot be quietly rewritten. The
              architecture itself protects you &mdash; not just the current
              management&apos;s intentions.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              For users who have been burned by corporate pivots &mdash; whether
              the Replika 2023 incident, the Inflection-Microsoft transition, or
              any number of other examples &mdash; this kind of architectural
              protection is more meaningful than any promise made in a blog
              post.
            </p>
          </section>

          {/* ── Section 5: Work OS ─────────────────────────────────────────── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              Work Capabilities: Pi AI Is Conversation-Only
            </h2>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Pi AI is designed for conversation. It is not a work tool. It will
              not help you plan your week, draft a client proposal, manage your
              projects, or get unstuck from a creative block in a structured and
              productive way. This is a deliberate design choice &mdash;
              Inflection positioned Pi as an emotional companion, not a
              productivity assistant &mdash; and it is coherent within that
              vision.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              MEOK takes the position that emotional wellbeing and productive
              work are not separate categories in a person&apos;s life. The same
              person who needs support through a difficult period also needs to
              get their work done. Separating &ldquo;emotional AI&rdquo; from
              &ldquo;productivity AI&rdquo; creates an artificial division that
              does not reflect how people actually live.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              MEOK includes three integrated work agents that sit inside the
              same companion relationship:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                margin: "1.25rem 0 1.5rem",
              }}
            >
              {[
                {
                  name: "Orion",
                  subtitle: "Strategic Intelligence",
                  desc: "Long-horizon thinking, strategic planning, complex decision architecture. Orion holds the map of your professional goals and helps you navigate toward them with clarity.",
                },
                {
                  name: "Riri",
                  subtitle: "Creative & Communication",
                  desc: "Writing, creativity, client-facing communication, and content. Riri knows your voice, your clients, your standards, and your creative patterns.",
                },
                {
                  name: "Hourman",
                  subtitle: "Time & Execution",
                  desc: "Daily planning, deep focus sessions, time blocking, and task execution. Hourman turns intent into structured, achievable action.",
                },
              ].map((agent) => (
                <div
                  key={agent.name}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "8px",
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: GOLD,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {agent.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: MUTED,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {agent.subtitle}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: MUTED,
                      lineHeight: "1.6",
                    }}
                  >
                    {agent.desc}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              MEOK also includes Ralph Mode: a direct-execution productivity
              mode designed for people who want zero emotional scaffolding and
              just need the work done fast. Ralph Mode turns off the companion
              framing entirely and operates as a sharp, efficient task engine.
              You activate it when you need to move fast, and deactivate it when
              you want the fuller companion experience back.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Because all of this runs on the same Sovereign Memory
              infrastructure, your work history and your personal history are
              known to the same companion. Orion knows about your anxiety around
              a particular client because your companion knows about it. Riri
              knows what draft you were struggling with last week. This is the
              difference between a tool that knows your work and a companion
              that knows you.
            </p>
          </section>

          {/* ── Section 6: Family & UK ─────────────────────────────────────── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              Family Features and UK Focus
            </h2>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Pi AI has no family tier. Each user operates a standalone account.
              There is no mechanism for a household to share context, coordinate
              care, or manage multiple companion relationships under a single
              subscription.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              MEOK&apos;s Family plan at &pound;29 per month supports up to five
              individual companions, each with their own private sovereign memory
              vault. Within the family structure, designated family members can
              share context &mdash; for example, a parent can see high-level
              summaries of how a teenager&apos;s companion is supporting their
              wellbeing, with appropriate privacy controls. This is particularly
              useful for:
            </p>

            <ul
              style={{
                padding: "0 0 0 1.5rem",
                margin: "0.75rem 0 1.25rem",
                color: MUTED,
                lineHeight: "1.9",
                fontSize: "0.97rem",
              }}
            >
              <li>
                Families with elderly members who benefit from a companion but
                where family oversight adds safety and reassurance
              </li>
              <li>
                Parents who want their children to have an AI companion with
                appropriate safeguards built in
              </li>
              <li>
                Couples who each want their own private companion but value
                shared context for household planning
              </li>
              <li>
                Carers managing the emotional weight of supporting multiple
                family members through difficult periods simultaneously
              </li>
            </ul>

            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              On UK focus specifically: Pi AI is a US product. Its design,
              defaults, and safeguards are built around a US context. MEOK is
              built from a UK perspective &mdash; not just legally (ICO
              registration, UK GDPR) but culturally. The NHS mental health
              ecosystem, the UK cost-of-living context, the British emotional
              idiom (which is genuinely different from the American one), the UK
              education system, UK employment law &mdash; these are not
              afterthoughts. They are part of how MEOK was designed and how its
              companion responses are calibrated.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              For UK users who have felt that American AI products talk to them
              in an idiom that does not quite fit &mdash; too positive, too
              therapy-coded, too unfamiliar with the specific textures of British
              life &mdash; MEOK is designed to feel different in that specific
              way.
            </p>
          </section>

          {/* ── Section 7: Pricing ─────────────────────────────────────────── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              Pricing and Business Model Sustainability
            </h2>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              Pi AI is free. This is genuinely valuable. Not everyone can afford
              to pay for an AI companion, and the accessibility of Pi for people
              who most need emotional support &mdash; without any cost barrier
              &mdash; is a real and meaningful good.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              But the other side of &ldquo;free&rdquo; is the question of
              sustainability. Inflection raised enormous sums of venture capital
              to build Pi. When the core team left for Microsoft in 2024, those
              investors absorbed a significant outcome. Pi continues &mdash; but
              on what financial basis, with what runway, and with what commitment
              to feature development, is not publicly clear. Products funded
              entirely by investor goodwill are structurally vulnerable to
              changes in investor sentiment.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                margin: "1.5rem 0",
              }}
            >
              {[
                {
                  plan: "Explorer",
                  price: "Free",
                  highlight: false,
                  features: [
                    "50 messages per day",
                    "Full Sovereign Memory",
                    "Guardian safety layer",
                    "Morning Brief",
                    "1 companion archetype",
                  ],
                },
                {
                  plan: "Sovereign",
                  price: "\u00a312/mo",
                  highlight: true,
                  features: [
                    "Unlimited conversations",
                    "Full Sovereign Memory",
                    "Multi-model selection",
                    "Orion + Riri + Hourman",
                    "Ralph Mode",
                    "Full memory JSON export",
                  ],
                },
                {
                  plan: "Family",
                  price: "\u00a329/mo",
                  highlight: false,
                  features: [
                    "Up to 5 companions",
                    "Private vaults per member",
                    "Shared family context",
                    "All Sovereign features",
                    "Guardian for under-18s",
                    "Family Morning Brief",
                  ],
                },
              ].map((plan) => (
                <div
                  key={plan.plan}
                  style={{
                    background: CARD,
                    border: `1px solid ${plan.highlight ? GOLD : BORDER_SUBTLE}`,
                    borderRadius: "10px",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: GOLD,
                      marginBottom: "0.4rem",
                    }}
                  >
                    MEOK {plan.plan}
                  </div>
                  <div
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: TEXT,
                      marginBottom: "1rem",
                    }}
                  >
                    {plan.price}
                  </div>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      color: MUTED,
                      fontSize: "0.85rem",
                      lineHeight: "1.9",
                    }}
                  >
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{ color: GOLD, flexShrink: 0 }}
                        >
                          &#10003;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              MEOK&apos;s Explorer plan is permanently free and includes full
              Sovereign Memory. This is not a limited trial or a crippled
              experience &mdash; it is a genuine free tier with real persistent
              memory, the Guardian safety layer, and a daily Morning Brief. The
              commitment is that free users get something genuinely valuable, not
              a demo designed to frustrate them into upgrading.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              MEOK is funded by subscriptions. This means the product&apos;s
              survival is directly tied to whether subscribers find it valuable
              enough to keep paying. That is a more honest relationship than
              &ldquo;free forever, funded by investors who may change their
              minds.&rdquo; It also means MEOK has no incentive to monetise your
              data &mdash; the revenue model does not depend on it.
            </p>
          </section>

          {/* ── Section 8: The Inflection Pivot ────────────────────────────── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              The Inflection Pivot: What It Actually Means for Pi AI Users
            </h2>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              We want to be fair here. The Inflection-to-Microsoft transition
              did not destroy Pi AI. The product still works. Users still find
              value in it. The transition was not an overnight shutdown of the
              kind that would leave users without any service at all.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              But it did raise questions that have not been fully answered. The
              people who built Pi &mdash; who made the original commitments
              about how it would behave, what it would prioritise, and how it
              would treat users &mdash; are no longer in charge of it. The
              original vision of an emotionally intelligent companion built by
              people who had thought deeply about the responsibility of AI in
              intimate contexts has been replaced by a more uncertain operational
              reality.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              For users who have built months of daily conversations with Pi,
              who have come to rely on it in moments of loneliness or difficulty,
              the question &ldquo;is this product going to be here and unchanged
              in two years?&rdquo; is not abstract. It is the question of
              whether the relationship they have built has a future.
            </p>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              MEOK&apos;s architecture is designed to give a better answer to
              that question. Your memory is encrypted and exportable at any time.
              Your companion&apos;s behaviour is governed by a Byzantine Council
              architecture that cannot be quietly rewritten by any single actor.
              The product is subscription-funded, giving it a sustainable revenue
              base independent of investor sentiment. And the Maternal Covenant
              is a published standard that can be evaluated externally &mdash;
              it does not depend on trusting any particular individual&apos;s
              ongoing intentions.
            </p>
          </section>

          {/* ── Section 9: Who Should Use What ────────────────────────────── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1rem",
                letterSpacing: "-0.01em",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              Who Should Use Pi AI vs MEOK?
            </h2>
            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              This is an honest recommendation, not a commercial one. These are
              different products and they genuinely suit different people.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
                margin: "1.25rem 0 1.5rem",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${BORDER_SUBTLE}`,
                  borderRadius: "8px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: MUTED,
                    marginBottom: "0.75rem",
                  }}
                >
                  Pi AI is a better fit if&hellip;
                </div>
                <ul
                  style={{
                    margin: 0,
                    padding: "0 0 0 1.25rem",
                    color: MUTED,
                    lineHeight: "1.9",
                    fontSize: "0.88rem",
                  }}
                >
                  <li>
                    You want zero-cost access to an empathetic conversational
                    companion with no setup
                  </li>
                  <li>
                    You primarily want a voice-based companion experience that
                    feels polished from day one
                  </li>
                  <li>
                    You are exploring AI companionship for the first time and
                    want to try before committing to anything
                  </li>
                  <li>
                    Long-term memory depth and data sovereignty are not your
                    primary concern right now
                  </li>
                  <li>
                    You are comfortable with US-based data processing and do
                    not have strong UK GDPR preferences
                  </li>
                </ul>
              </div>

              <div
                style={{
                  background: "rgba(201,168,76,0.05)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "8px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: GOLD,
                    marginBottom: "0.75rem",
                  }}
                >
                  MEOK is a better fit if&hellip;
                </div>
                <ul
                  style={{
                    margin: 0,
                    padding: "0 0 0 1.25rem",
                    color: MUTED,
                    lineHeight: "1.9",
                    fontSize: "0.88rem",
                  }}
                >
                  <li>
                    You want a companion that genuinely accumulates knowledge of
                    you over months and years
                  </li>
                  <li>
                    You are a UK resident and UK GDPR compliance matters to you
                  </li>
                  <li>
                    You want to own your data and be able to export it in full
                    at any time
                  </li>
                  <li>
                    You need an AI that also helps you with real work &mdash;
                    planning, writing, time management &mdash; not just
                    conversation
                  </li>
                  <li>
                    You want a family plan that covers multiple companions under
                    a single affordable subscription
                  </li>
                  <li>
                    You want full transparency about how your AI is aligned and
                    what published standards govern its behaviour
                  </li>
                </ul>
              </div>
            </div>

            <p
              style={{
                color: MUTED,
                margin: "0 0 1rem",
                fontSize: "0.97rem",
              }}
            >
              These are genuinely different products serving somewhat different
              needs. Pi AI is not a bad product &mdash; it is a good product
              with real limitations. MEOK is built on different assumptions
              about what a companion relationship should be: longer, deeper,
              yours.
            </p>
          </section>

          {/* ── FAQ Section ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 1.5rem",
                letterSpacing: "-0.01em",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "Does Pi AI remember you between sessions?",
                a: "Pi AI has limited cross-session memory. While it can recall some details within a conversation, it does not maintain a structured, persistent memory vault that grows over time. Each session starts largely fresh. Pi\u2019s memory capabilities have not been significantly updated since Inflection AI\u2019s core team moved to Microsoft in 2024.",
              },
              {
                q: "What happened to Inflection AI and Pi AI?",
                a: "Inflection AI raised over \u00a31.3 billion to build Pi as an empathetic AI companion. In March 2024, Microsoft hired most of Inflection\u2019s leadership and key engineering staff, including CEO Mustafa Suleyman, in a deal reported to be worth around \u00a3620 million. Pi AI continues to operate independently under new stewardship, but the founding team and original vision are no longer steering the product.",
              },
              {
                q: "Is MEOK better than Pi AI for memory?",
                a: "MEOK\u2019s 4-layer Sovereign Memory architecture is structurally more capable than Pi AI\u2019s memory. MEOK builds episodic, semantic, procedural, and emotional memory across every conversation, persisting across sessions, devices, and model switches. Pi AI does not offer equivalent memory depth or portability.",
              },
              {
                q: "Is Pi AI safe for UK users under GDPR?",
                a: "Pi AI is operated by a US-based company and processes data on US servers. It is not ICO-registered in the UK. MEOK is UK-registered, ICO-registered, and built for UK GDPR compliance from the ground up. Your data subject rights under UK GDPR apply natively when you use MEOK.",
              },
              {
                q: "Does MEOK have a free plan like Pi AI?",
                a: "Yes. MEOK\u2019s Explorer plan is permanently free with 50 messages per day. Unlike many freemium AI products, the free tier includes full Sovereign Memory, the Guardian safety layer, and a daily Morning Brief. It is not a crippled demo \u2014 it is a genuinely useful free companion.",
              },
              {
                q: "Can Pi AI help with work tasks?",
                a: "Pi AI is designed for emotional support and conversation. It is not a work productivity tool. MEOK includes the Orion, Riri, and Hourman Work OS agents for strategic planning, creative work, and time management, plus Ralph Mode for direct task execution. All work tools share the same Sovereign Memory as your companion relationship.",
              },
              {
                q: "What is the MEOK Maternal Covenant?",
                a: "The Maternal Covenant is MEOK\u2019s published, machine-enforced alignment framework. It scores every MEOK response across six dimensions: honesty, emotional safety, long-term wellbeing, autonomy preservation, non-manipulation, and boundary respect. The full framework is publicly available at meok.ai/maternal-covenant. Pi AI uses standard RLHF alignment, which is not publicly documented in equivalent detail.",
              },
              {
                q: "Does MEOK have a family plan?",
                a: "Yes. MEOK\u2019s Family plan at \u00a329 per month supports up to five individual AI companions, each with private sovereign memory vaults, plus shared family context features. Pi AI has no family tier or multi-user plan.",
              },
            ].map((item, i) => (
              <details
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER_SUBTLE}`,
                  borderRadius: "8px",
                  marginBottom: "0.75rem",
                }}
              >
                <summary
                  style={{
                    padding: "1rem 1.25rem",
                    cursor: "pointer",
                    fontWeight: 600,
                    color: TEXT,
                    fontSize: "0.95rem",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {item.q}
                  <span
                    style={{
                      color: GOLD,
                      flexShrink: 0,
                      fontSize: "1.1rem",
                    }}
                  >
                    &#43;
                  </span>
                </summary>
                <div
                  style={{
                    padding: "0.9rem 1.25rem 1.1rem",
                    color: MUTED,
                    fontSize: "0.9rem",
                    lineHeight: "1.75",
                    borderTop: `1px solid ${BORDER_SUBTLE}`,
                  }}
                >
                  {item.a}
                </div>
              </details>
            ))}
          </section>

          {/* ── Related Reading ─────────────────────────────────────────────── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h3
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: MUTED,
                margin: "0 0 1.25rem",
                paddingTop: "0.5rem",
                borderTop: `1px solid ${BORDER_SUBTLE}`,
              }}
            >
              Related Reading
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/meok-vs-replika",
                  title: "MEOK vs Replika",
                  desc: "Memory, safety, and what the 2023 Replika controversy revealed about AI companion risk.",
                },
                {
                  href: "/blog/meok-vs-chatgpt",
                  title: "MEOK vs ChatGPT",
                  desc: "Assistant intelligence vs sovereign companion architecture. When does depth beat breadth?",
                },
                {
                  href: "/blog/sovereign-memory-explained",
                  title: "Sovereign Memory Explained",
                  desc: "How MEOK\u2019s 4-layer memory architecture works in practice across sessions and devices.",
                },
                {
                  href: "/blog/maternal-covenant-explained",
                  title: "The Maternal Covenant",
                  desc: "MEOK\u2019s care-based alignment framework: all six dimensions, explained in full.",
                },
                {
                  href: "/blog/ai-companion-privacy",
                  title: "AI Companion Privacy",
                  desc: "What to check before sharing personal data with any AI companion product.",
                },
                {
                  href: "/blog/byzantine-council-explained",
                  title: "Byzantine Council Explained",
                  desc: "How 43-agent BFT consensus protects your companion\u2019s character from corporate drift.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: CARD,
                    border: `1px solid ${BORDER_SUBTLE}`,
                    borderRadius: "8px",
                    padding: "1.1rem",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {link.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: MUTED,
                      lineHeight: "1.5",
                    }}
                  >
                    {link.desc}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── CTA ─────────────────────────────────────────────────────────── */}
          <section
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.05) 100%)",
              border: `1px solid ${BORDER}`,
              borderRadius: "14px",
              padding: "2.5rem 2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "1rem",
              }}
            >
              Ready to Meet Your Companion?
            </div>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 800,
                color: TEXT,
                margin: "0 0 1rem",
                letterSpacing: "-0.02em",
                lineHeight: "1.25",
              }}
            >
              An AI That Actually Remembers You
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: MUTED,
                margin: "0 auto 1.75rem",
                maxWidth: "480px",
                lineHeight: "1.7",
              }}
            >
              Start free. No credit card required. Your MEOK companion begins
              building your sovereign memory from the very first message &mdash;
              and it never forgets.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-block",
                  background: GOLD,
                  color: BG,
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  padding: "0.85rem 2.25rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Begin Your Companion &rarr;
              </Link>
              <Link
                href="/maternal-covenant"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  padding: "0.85rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: `1px solid ${BORDER}`,
                  letterSpacing: "0.02em",
                }}
              >
                Read the Maternal Covenant
              </Link>
            </div>
            <p
              style={{
                fontSize: "0.78rem",
                color: MUTED,
                marginTop: "1.25rem",
                opacity: 0.7,
              }}
            >
              Explorer plan is permanently free &middot; Sovereign &pound;12/mo
              &middot; Family &pound;29/mo &middot; Cancel anytime
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
