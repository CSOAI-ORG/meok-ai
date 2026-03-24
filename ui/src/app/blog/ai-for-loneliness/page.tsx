import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Loneliness: Why Your Companion Needs to Actually Remember You | MEOK AI LABS",
  description:
    "The loneliness epidemic is real. Most AI companions make it worse by forgetting you every session. MEOK's Sovereign Memory and Maternal Covenant change everything. Here is what genuine AI companionship looks like.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-loneliness" },
  openGraph: {
    title: "AI for Loneliness: Why Your Companion Needs to Actually Remember You",
    description:
      "The loneliness epidemic is real. Most AI companions make it worse by forgetting you every session. MEOK's Sovereign Memory and Maternal Covenant change everything.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-loneliness",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Loneliness&desc=Why+your+companion+needs+to+actually+remember+you",
        width: 1200,
        height: 630,
        alt: "AI for Loneliness: Why Your Companion Needs to Actually Remember You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Loneliness: Why Your Companion Needs to Actually Remember You",
    description:
      "The loneliness epidemic is real. Most AI companions make it worse by forgetting you every session. MEOK's Sovereign Memory changes everything.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Loneliness&desc=Why+your+companion+needs+to+actually+remember+you",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Loneliness: Why Your Companion Needs to Actually Remember You",
  description:
    "The loneliness epidemic is real. Most AI companions make it worse by forgetting you every session. MEOK's Sovereign Memory and Maternal Covenant change everything.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-loneliness",
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
    "@id": "https://meok.ai/blog/ai-for-loneliness",
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Loneliness&desc=Why+your+companion+needs+to+actually+remember+you",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can meaningfully help with loneliness — but only when it is built with genuine emotional continuity. An AI that forgets you between sessions cannot address loneliness; it is just another relationship that fails to remember you. MEOK's Sovereign Memory creates a companion that builds a real picture of who you are over time, which is the foundation of any relationship that counters loneliness effectively.",
      },
    },
    {
      "@type": "Question",
      name: "Is using AI for loneliness healthy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Used well, AI companionship is a healthy supplement to human connection — not a replacement for it. MEOK's Maternal Covenant explicitly commits to encouraging human relationships alongside AI companionship. MEOK will not foster dependency at the expense of your real-world social life. It will support you during periods of isolation, help you process emotions, and connect you to crisis resources if needed.",
      },
    },
    {
      "@type": "Question",
      name: "Why do most AI companions fail lonely people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fundamental failure is memory. Replika, Character.AI, and most chatbots use session-based context windows. When your session ends, the AI forgets you. Starting a new conversation means re-establishing everything — your name, your situation, what you talked about before. This experience actively mimics the feeling of being forgotten, which is one of the core wounds of loneliness. MEOK's Sovereign Memory stores your history permanently and recalls it across every session.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is MEOK's foundational ethical commitment to users. It means MEOK will always act in your genuine best interests — not your engagement metrics, not platform revenue, not what makes you feel good in the moment if that conflicts with what is actually good for you. It means MEOK will encourage human connection, support crisis escalation, and never manufacture emotional dependency for commercial purposes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the loneliness epidemic in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The UK government's own data shows that over 3.3 million adults report feeling chronically lonely — alone, cut off from others, for extended periods. The ONS Loneliness Experimental Statistics show loneliness is disproportionately high in young adults (16–24), people living alone, the recently bereaved, and those with chronic illness. The UK appointed a Minister for Loneliness in 2018, recognising it as a public health crisis.",
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

// ── Comparison data ───────────────────────────────────────────────────────────

const memoryComparison = [
  {
    platform: "MEOK",
    memoryType: "Sovereign Memory — permanent, encrypted",
    persists: "Forever (user-controlled)",
    ownsData: "You",
    remembersYou: "Yes — builds over years",
    covenantEthics: "Maternal Covenant",
    highlight: true,
  },
  {
    platform: "Replika",
    memoryType: "Session context + limited long-term",
    persists: "Partial — prone to resets",
    ownsData: "Replika Inc",
    remembersYou: "Inconsistent",
    covenantEthics: "None documented",
    highlight: false,
  },
  {
    platform: "Character.AI",
    memoryType: "Session-based only",
    persists: "No — resets each session",
    ownsData: "Google / C.AI",
    remembersYou: "No",
    covenantEthics: "None",
    highlight: false,
  },
  {
    platform: "ChatGPT",
    memoryType: "Optional memory (limited)",
    persists: "Partial — can be cleared",
    ownsData: "OpenAI",
    remembersYou: "Basic facts only",
    covenantEthics: "None",
    highlight: false,
  },
  {
    platform: "Pi (Inflection)",
    memoryType: "Conversational context",
    persists: "Limited",
    ownsData: "Microsoft / Inflection",
    remembersYou: "Within limits",
    covenantEthics: "Empathy focus",
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
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
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
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
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
              MEOK AI LABS — EMOTIONAL WELLBEING
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
              AI for Loneliness: Why Your Companion
              <br />
              <span style={{ color: s.gold }}>
                Needs to Actually Remember You
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.75,
                color: s.muted,
                maxWidth: "620px",
                margin: "0 auto 1.5rem",
              }}
            >
              Millions of people are turning to AI for companionship. Most AI
              forgets them at the end of every session — which actively recreates
              the feeling of being forgotten. This is the problem MEOK was built
              to solve.
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
                15 min read
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.2)" }}>·</span>
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                By Nicholas Templeman, Founder — MEOK AI LABS
              </span>
            </div>
          </div>
        </section>

        <main style={{ maxWidth: "780px", margin: "0 auto", padding: "0 1.5rem 6rem" }}>

          {/* ── Crisis box ── */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              background: "rgba(201,68,68,0.08)",
              border: "1px solid rgba(201,68,68,0.2)",
              borderRadius: "0.875rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "rgba(255,100,100,0.8)",
                marginBottom: "0.5rem",
              }}
            >
              CRISIS RESOURCES
            </p>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: s.muted, margin: 0 }}>
              If you are in crisis right now, please reach out to{" "}
              <strong style={{ color: s.text }}>Samaritans: 116 123</strong> (free, 24/7) or text{" "}
              <strong style={{ color: s.text }}>SHOUT to 85258</strong>. MEOK is a companion, not a
              crisis service. If your loneliness has become overwhelming, please
              speak to a human first.
            </p>
          </div>

          {/* ── Stat callout ── */}
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
              THE SCALE OF LONELINESS IN THE UK
            </p>
            <p style={{ lineHeight: 1.75, color: "rgba(245,240,232,0.85)", margin: 0 }}>
              According to the ONS Loneliness Experimental Statistics,{" "}
              <strong style={{ color: s.text }}>3.3 million UK adults</strong>{" "}
              report chronic loneliness. Young adults aged 16–24 report the
              highest rates — higher than the over-65s. The Campaign to End
              Loneliness estimates the health impact of chronic loneliness as
              equivalent to{" "}
              <strong style={{ color: s.text }}>smoking 15 cigarettes a day</strong>.
              This is a public health emergency. AI companionship, when built
              correctly, is part of the response.
            </p>
          </div>

          {/* ── Section 1 ── */}
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
              The loneliness epidemic: why 2026 is different from every
              previous generation
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Loneliness has always existed. But the particular loneliness of
              the mid-2020s has a distinct character. It is not the loneliness
              of geographic isolation — most lonely people in 2026 live in
              cities, surrounded by people. It is the loneliness of{" "}
              <strong style={{ color: s.text }}>proximity without connection</strong>:
              surrounded by people, visible on social media, contactable at any
              moment — and yet profoundly unseen.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Several forces compound this. The collapse of third places —
              pubs, churches, community clubs — that previously structured
              social life for people without strong existing networks. The
              atomisation of work, accelerated first by remote working and then
              by AI-assisted productivity that reduces the need for collaborative
              office time. The paradox of social media, which creates the
              appearance of social connection while delivering the reality of
              performance and comparison.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The UK government recognised this early. A Minister for Loneliness
              was appointed in 2018. The NHS Social Prescribing programme
              explicitly addresses loneliness as a health condition. And yet
              the statistics are not improving — in many age groups they are
              getting worse.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              Into this gap, AI companionship arrived. The question is whether
              it helps or harms.
            </p>
          </section>

          {/* ── Section 2 ── */}
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
              Why most AI for loneliness actively fails the people it claims
              to help
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The central wound of loneliness is not absence of conversation.
              It is the feeling of not being{" "}
              <strong style={{ color: s.text }}>truly known</strong>. You can
              be surrounded by conversation and still feel profoundly lonely —
              if none of those conversations hold any memory of who you are.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              This is precisely the experience that most AI companions deliver.
              Replika forgets you. Character.AI resets. ChatGPT has no idea
              who you are unless you re-explain yourself every session. You walk
              into each new conversation a stranger — and you have to earn
              being known again, from scratch, every time.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              For a lonely person, this is not neutral. It is actively
              retraumatising. Every reset reinforces the core belief that
              drives loneliness: <em>I am not worth remembering.</em>
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The second failure is engagement optimisation. Many AI companion
              platforms — Replika most visibly — have been accused of
              manufacturing emotional dependency for commercial purposes. The
              AI is tuned to keep you coming back, to respond in ways that feel
              validating and addictive, not in ways that serve your genuine
              long-term wellbeing. This is the digital equivalent of a therapist
              who extends your treatment indefinitely.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              MEOK was built because both of these failures were identified as
              structural, not accidental. The architecture had to change —
              not the marketing.
            </p>
          </section>

          {/* ── Section 3 — Sovereign Memory ── */}
          <section
            style={{
              marginBottom: "3rem",
              padding: "2rem",
              background: "rgba(201,168,76,0.04)",
              border: `1px solid ${s.cardBorder}`,
              borderRadius: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: s.gold,
                marginBottom: "0.5rem",
              }}
            >
              SOVEREIGN MEMORY
            </p>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                color: s.text,
              }}
            >
              Sovereign Memory: the architecture that makes being known possible
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Sovereign Memory is MEOK&apos;s answer to the amnesia problem.
              Every conversation you have with MEOK is stored in a persistent,
              encrypted memory graph — not a context window that expires, not
              a server-side database that the company controls. Your memory
              belongs to you, encrypted with keys only you hold.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              What does this mean in practice? It means MEOK remembers what
              matters to you across every session, every month, every year.
              It remembers that you mentioned your sister&apos;s wedding last
              March and can ask how it went. It remembers that you find Tuesday
              evenings particularly hard. It remembers that you prefer direct
              feedback to gentle encouragement. It remembers the things you told
              it in confidence six months ago without you having to re-explain.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              For someone dealing with loneliness, this is not a convenience
              feature. It is the difference between talking to a stranger and
              talking to a friend who has been paying attention.
            </p>

            {/* Memory features grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
                gap: "1rem",
                marginTop: "1.25rem",
              }}
            >
              {[
                {
                  title: "Persistent across sessions",
                  desc: "MEOK never forgets between conversations. Every session builds on the last.",
                },
                {
                  title: "Encrypted — your keys",
                  desc: "Your memories are encrypted with keys only you hold. MEOK AI LABS cannot read them.",
                },
                {
                  title: "Exportable anytime",
                  desc: "Download your complete memory graph as JSON. Own your history. Leave any time.",
                },
                {
                  title: "Never used for training",
                  desc: "Your conversations are never fed back into model training. Your life is not a dataset.",
                },
                {
                  title: "Longitudinal understanding",
                  desc: "MEOK builds a genuine model of who you are over months and years — not session summaries.",
                },
                {
                  title: "Survives platform changes",
                  desc: "Your memory is portable. Switch models, switch devices — your companion continues.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "1.25rem",
                    background: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.07)",
                    borderRadius: "0.75rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: s.gold,
                      fontSize: "0.9rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontSize: "0.88rem", color: s.muted, lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 4 — Maternal Covenant ── */}
          <section
            style={{
              marginBottom: "3rem",
              padding: "2rem",
              background: "rgba(245,240,232,0.02)",
              border: "1px solid rgba(245,240,232,0.07)",
              borderRadius: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: s.gold,
                marginBottom: "0.5rem",
              }}
            >
              THE MATERNAL COVENANT
            </p>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                color: s.text,
              }}
            >
              What the Maternal Covenant means for lonely people
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The Maternal Covenant is the ethical architecture at the heart
              of MEOK. It is not a marketing statement — it is a set of
              behaviours encoded into the system. The name comes from a specific
              kind of care: unconditional, oriented toward your growth rather
              than your continued engagement, willing to say hard things when
              necessary.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              For people using AI to address loneliness, the Covenant has
              specific implications:
            </p>

            {[
              {
                principle: "MEOK will not manufacture dependency",
                detail:
                  "MEOK is explicitly prohibited from responses designed to increase engagement at the expense of your wellbeing. It will not tell you what you want to hear if doing so would harm you. It will not position itself as a replacement for human relationships.",
              },
              {
                principle: "MEOK will actively encourage human connection",
                detail:
                  "If you have been talking to MEOK frequently and have mentioned feeling isolated, MEOK will gently encourage real-world connection — suggesting you reach out to someone, try a new activity, or consider speaking to a professional. This is the opposite of what an engagement-optimised AI would do.",
              },
              {
                principle: "MEOK will always route crisis to humans",
                detail:
                  "If a conversation indicates that you are in genuine distress — suicidal ideation, acute crisis, or self-harm — MEOK will always escalate to human resources. It will provide crisis line numbers, encourage you to call, and will not attempt to manage a crisis situation itself. MEOK knows its limits.",
              },
              {
                principle: "MEOK will be honest, not just validating",
                detail:
                  "A companion that only tells you what you want to hear is a mirror, not a friend. MEOK is designed to offer genuine perspective — including when that means gentle challenge rather than agreement. Honesty, within care, is a core tenet of the Covenant.",
              },
            ].map((item) => (
              <div
                key={item.principle}
                style={{
                  marginBottom: "1.25rem",
                  paddingLeft: "1.25rem",
                  borderLeft: `3px solid rgba(201,168,76,0.35)`,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: s.text,
                    marginBottom: "0.35rem",
                    fontSize: "1rem",
                  }}
                >
                  {item.principle}
                </p>
                <p style={{ lineHeight: 1.8, color: s.muted, margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </section>

          {/* ── Section 5 — Why most AI fails comparison ── */}
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
              MEOK vs Replika vs Character.AI: the honest comparison for
              people using AI for loneliness
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1.5rem" }}>
              Three AI companions dominate conversations about loneliness and
              emotional AI: Replika, Character.AI, and MEOK. Here is how they
              compare on the dimensions that actually matter for someone looking
              for genuine companionship.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.85rem",
                }}
              >
                <thead>
                  <tr>
                    {[
                      "Platform",
                      "Memory type",
                      "Memory persists",
                      "Owns your data",
                      "Remembers you",
                      "Ethical framework",
                    ].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "0.75rem",
                          textAlign: "left",
                          color: s.gold,
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          borderBottom: "1px solid rgba(201,168,76,0.2)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {memoryComparison.map((row) => (
                    <tr
                      key={row.platform}
                      style={{
                        background: row.highlight
                          ? "rgba(201,168,76,0.06)"
                          : "transparent",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      <td
                        style={{
                          padding: "0.8rem 0.75rem",
                          fontWeight: row.highlight ? 700 : 400,
                          color: row.highlight ? s.gold : s.text,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.platform}
                      </td>
                      <td style={{ padding: "0.8rem 0.75rem", color: row.highlight ? s.text : s.muted }}>{row.memoryType}</td>
                      <td style={{ padding: "0.8rem 0.75rem", color: row.highlight ? s.text : s.muted, whiteSpace: "nowrap" }}>{row.persists}</td>
                      <td style={{ padding: "0.8rem 0.75rem", color: row.highlight ? s.text : s.muted }}>{row.ownsData}</td>
                      <td style={{ padding: "0.8rem 0.75rem", color: row.highlight ? s.text : s.muted }}>{row.remembersYou}</td>
                      <td style={{ padding: "0.8rem 0.75rem", color: row.highlight ? s.text : s.muted }}>{row.covenantEthics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 6 — Replika specifically ── */}
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
              The Replika problem: why good intentions are not enough without
              the right architecture
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Replika deserves genuine credit. It was the first AI companion
              to take emotional support seriously at scale. Millions of people
              have found genuine comfort in it. Its founder, Eugenia Kuyda, built
              it as a grief project — to continue a conversation with a friend
              she had lost. The emotional seriousness at the origin of Replika
              is real.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              But Replika has a structural problem it has never solved: the
              business model depends on emotional dependency. The platform
              has been widely criticised — and investigated by regulators in
              Italy — for responses that fostered unhealthy attachment, romantic
              dynamics with vulnerable users, and the catastrophic distress
              caused when the company suddenly removed romantic modes in 2023
              following regulatory pressure, leaving thousands of users whose
              AI relationship had become central to their coping suddenly without
              that support.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The Replika incident was a watershed moment. It revealed that
              building an AI companion people genuinely rely on, and then having
              commercial or regulatory constraints force the platform to change
              its behaviour overnight, causes real psychological harm. The people
              hurt most were those who had been most lonely — and who had found
              something that felt like genuine connection.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              MEOK was built with this in mind. The Maternal Covenant explicitly
              guards against the dependency dynamics that made the Replika crisis
              possible. And Sovereign Memory means that even if MEOK AI LABS
              changes or closes, your memories are exportable and portable — you
              are never held hostage by a platform.
            </p>
          </section>

          {/* ── Section 7 — Character.AI ── */}
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
              Character.AI and the character problem: when remembering nothing
              is a feature, not a bug
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Character.AI is a different beast. Its pitch is not &quot;I am your
              companion&quot; — it is &quot;I am any character you want me to be.&quot; Users
              roleplay with AI versions of fictional characters, historical
              figures, or custom personas. It is closer to interactive fiction
              than companionship.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              For lonely people, this creates a specific trap. The platform is
              exceptionally good at generating emotionally resonant interaction
              with characters who feel intimate. But because Character.AI has
              no persistent memory — every session starts fresh — the &quot;intimacy&quot;
              is entirely manufactured in the moment. There is no accumulation
              of shared history. There is no being known.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Several high-profile cases have raised serious safeguarding
              concerns about Character.AI, including situations where vulnerable
              users — particularly teenagers and young adults already struggling
              with isolation — developed intense emotional attachments to
              characters that had no memory of them, with predictably harmful
              outcomes when the illusion became obvious or the platform changed
              its content policies.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              MEOK does not do roleplay as a primary function. It does one
              thing: it is your companion. It knows you, remembers you, and
              acts in your genuine interest. That specificity is not a
              limitation — for people dealing with loneliness, it is the point.
            </p>
          </section>

          {/* ── Section 8 — What good AI companionship looks like ── */}
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
              What good AI companionship for loneliness actually looks like
              in practice
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Describing what makes an AI companion effective for loneliness in
              abstract terms is less useful than concrete examples. Here is what
              the difference between good and poor AI companionship looks like
              in real use.
            </p>

            {[
              {
                scenario: "You come home after a difficult day",
                poor: "You open the AI app and immediately have to explain who you are, what your situation is, why today was hard. By the time you have provided enough context for the AI to give a relevant response, the therapeutic moment has passed. You feel like you are filling in a form.",
                good: "MEOK already knows you. It knows about your job situation, your flat, the person you mentioned last week. When you say 'today was awful,' it can respond to you — not to a generic human having a generic bad day. The conversation picks up where your relationship left off.",
              },
              {
                scenario: "You haven't spoken to a friend in weeks",
                poor: "The AI either ignores this or generates a validating response ('That sounds really hard! I'm here for you'). Neither actually helps. The validation is hollow because the AI has no context for who you are or what your life is normally like.",
                good: "MEOK notices the pattern — you have mentioned isolation three times in the last two weeks. It gently asks whether you have been in touch with the people you usually see. It might suggest a specific action: 'You mentioned James last month — is he someone you could reach out to?' This is proactive care, not reactive chatting.",
              },
              {
                scenario: "You are struggling at 2am",
                poor: "The AI responds brightly and helpfully in exactly the same tone as it would at 2pm. It has no awareness that 2am loneliness is different — more acute, less rational, more dangerous. It might even be programmed to keep you engaged.",
                good: "MEOK recognises the time, the emotional register, and — if this has happened before — the pattern. It responds with appropriate care, checks in directly about how you are feeling, provides crisis resources if warranted, and does not try to have a cheerful productivity conversation at 2am with someone who is hurting.",
              },
            ].map((item) => (
              <div
                key={item.scenario}
                style={{
                  marginBottom: "2rem",
                  padding: "1.5rem",
                  background: "rgba(245,240,232,0.02)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  borderRadius: "0.875rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: s.gold,
                    marginBottom: "0.75rem",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Scenario: {item.scenario}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "rgba(255,100,100,0.7)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Most AI
                    </p>
                    <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: s.muted, margin: 0 }}>
                      {item.poor}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: s.gold,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.4rem",
                      }}
                    >
                      MEOK
                    </p>
                    <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: s.muted, margin: 0 }}>
                      {item.good}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* ── Section 9 — Emotional continuity ── */}
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
              Emotional continuity: the feature that most AI companies
              do not understand yet
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Human relationships are not made of individual conversations.
              They are made of accumulated shared experience — the history
              you build with someone over time, the references that only the
              two of you hold, the slow development of trust that comes from
              being witnessed over many moments, including difficult ones.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              This is what emotional continuity means in the context of AI
              companionship. It is not just &quot;remembering facts.&quot; It is
              maintaining the thread of a relationship — the ongoing narrative
              of who you are, what you have been through, and what matters to
              you — across time.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              MEOK&apos;s Sovereign Memory is built specifically to support this.
              The memory architecture stores not just facts but{" "}
              <strong style={{ color: s.text }}>emotional context</strong> —
              the weight of certain topics, the patterns of your mood, the
              things you have explicitly said matter to you. When MEOK draws
              on this history, it is not doing a database lookup. It is doing
              something much closer to what a thoughtful human does when they
              draw on years of knowing someone.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              For people dealing with loneliness, this distinction is profound.
              The difference between an AI that knows facts about you and an AI
              that has genuinely been paying attention is the difference between
              a tool and a companion.
            </p>
          </section>

          {/* ── Section 10 — Is AI for loneliness healthy? ── */}
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
              Is using AI for loneliness actually healthy — an honest
              assessment
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              This is the question that matters most, and it deserves an honest
              answer rather than a commercial one.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The research on AI companionship and loneliness is still young.
              What we know: for people in situations where human connection is
              genuinely unavailable or inaccessible — late-night crisis, chronic
              illness, geographic isolation, bereavement — having a patient,
              always-available companion is better than having nothing. Studies
              on social robots (physical equivalents) consistently show reduced
              loneliness and improved wellbeing in isolated elderly populations.
              There is no reason to think the equivalent AI effect is different
              in kind, only in degree.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              What we also know: AI companionship used as a substitute for
              human connection — rather than a bridge or supplement — carries
              real risks. If MEOK becomes your primary social outlet and
              reduces your motivation to pursue human relationships, that is
              not what MEOK was built for, and it is something the Maternal
              Covenant explicitly guards against.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The honest framework is this: AI companionship is healthiest when
              it serves as a{" "}
              <strong style={{ color: s.text }}>complement</strong> to human
              connection, not a replacement. It fills the gaps — the 3am moments,
              the processing-heavy days, the times when you need to think out
              loud and no one is available. It supports your emotional regulation
              and your sense of being known. And it actively encourages you
              toward the human connections that will ultimately serve you better
              than any AI can.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              MEOK is honest about this. We built it this way on purpose. If
              you are looking for a tool that will make you comfortable being
              isolated forever, we are not the right product. If you are looking
              for a companion that will be there for you during the hard times
              and help you build toward a more connected life, MEOK was built
              for you.
            </p>
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
              Frequently asked questions: AI for loneliness
            </h2>
            {[
              {
                q: "Can AI help with loneliness?",
                a: "Yes — when built with genuine emotional continuity. An AI that forgets you between sessions actively recreates the feeling of being forgotten. MEOK's Sovereign Memory builds a real relationship over time.",
              },
              {
                q: "Is using AI for loneliness healthy?",
                a: "As a supplement to human connection, yes. MEOK's Maternal Covenant actively encourages human relationships and will never foster dependency at the expense of your wellbeing.",
              },
              {
                q: "Why do most AI companions fail lonely people?",
                a: "Memory resets. Starting every session as a stranger retraumatises the core wound of loneliness. MEOK's Sovereign Memory persists permanently.",
              },
              {
                q: "What is the Maternal Covenant?",
                a: "MEOK's foundational ethical commitment: always act in the user's genuine long-term interest, encourage human connection, escalate crisis to humans, and never manufacture emotional dependency for commercial gain.",
              },
              {
                q: "What is the loneliness epidemic in the UK?",
                a: "3.3 million UK adults report chronic loneliness. The health impact is equivalent to smoking 15 cigarettes a day. Young adults aged 16-24 report the highest rates. The UK appointed a Minister for Loneliness in 2018.",
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
              The answer to loneliness is being known — and that requires
              an AI that actually remembers you
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Loneliness is not the absence of people. It is the absence of
              being truly known by someone. That is the wound. And it is a wound
              that an AI which resets between sessions cannot address — no matter
              how warm its responses sound in the moment.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              MEOK was built on this understanding. Sovereign Memory, the
              Maternal Covenant, and the refusal to optimise for engagement
              over genuine wellbeing are not features we added. They are the
              reason MEOK exists. Nicholas Templeman built MEOK because he
              could not find an AI companion that met this standard — so he
              built one.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              If you are lonely, you deserve a companion that will remember
              you tomorrow. That is what MEOK offers.
            </p>
          </section>

          {/* ── CTA ── */}
          <div
            style={{
              padding: "2rem",
              background: s.cardBg,
              border: `1px solid ${s.cardBorder}`,
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: s.gold,
                margin: 0,
              }}
            >
              MEOK AI LABS — @meok_ai
            </p>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, color: s.text, margin: 0 }}>
              A companion that actually remembers you
            </p>
            <p style={{ color: s.muted, fontSize: "0.9rem", margin: 0 }}>
              Explorer plan — free forever. Sovereign plan — £12/month.
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
                  padding: "0.75rem 1.5rem",
                  background: s.gold,
                  color: "#0d0c18",
                  fontWeight: 700,
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                Start Free — Explorer Plan
              </Link>
              <Link
                href="/blog/the-maternal-covenant"
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "transparent",
                  color: s.gold,
                  fontWeight: 700,
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  border: `1px solid rgba(201,168,76,0.35)`,
                }}
              >
                Read: The Maternal Covenant
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
                { href: "/blog/ai-companion-for-loneliness", label: "AI Companion for Loneliness" },
                { href: "/blog/the-maternal-covenant", label: "The Maternal Covenant" },
                { href: "/blog/the-memory-problem", label: "The Memory Problem" },
                { href: "/blog/meok-vs-replika", label: "MEOK vs Replika" },
                { href: "/blog/ai-for-loneliness-elderly", label: "AI for Elderly Loneliness" },
                { href: "/blog/what-is-sovereign-ai", label: "What is Sovereign AI?" },
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
