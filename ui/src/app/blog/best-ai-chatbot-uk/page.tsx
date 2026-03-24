import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Best AI Chatbot UK 2026: The Complete Comparison | MEOK AI LABS",
  description:
    "The definitive guide to the best AI chatbots available in the UK in 2026. We compare ChatGPT, Claude, Gemini, Replika, Pi, and MEOK across memory, UK data protection, pricing, personality, and privacy.",
  alternates: { canonical: "https://meok.ai/blog/best-ai-chatbot-uk" },
  openGraph: {
    title: "Best AI Chatbot UK 2026: The Complete Comparison",
    description:
      "ChatGPT, Claude, Gemini, Replika, Pi, or MEOK — which AI chatbot is actually best for UK users in 2026? We compare all six across memory, GDPR compliance, pricing, and privacy.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/best-ai-chatbot-uk",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=Best+AI+Chatbot+UK+2026%3A+The+Complete+Comparison&desc=ChatGPT+vs+Claude+vs+Gemini+vs+MEOK+%E2%80%94+which+is+best+for+UK+users%3F",
        width: 1200,
        height: 630,
        alt: "Best AI Chatbot UK 2026: The Complete Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Chatbot UK 2026: The Complete Comparison",
    description:
      "ChatGPT, Claude, Gemini, Replika, Pi, or MEOK — the honest comparison for UK users, covering memory, GDPR, pricing, and privacy.",
    images: [
      "https://meok.ai/api/og?title=Best+AI+Chatbot+UK+2026%3A+The+Complete+Comparison&desc=ChatGPT+vs+Claude+vs+Gemini+vs+MEOK+%E2%80%94+which+is+best+for+UK+users%3F",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best AI Chatbot UK 2026: The Complete Comparison",
  description:
    "The definitive guide to the best AI chatbots available in the UK in 2026, comparing ChatGPT, Claude, Gemini, Replika, Pi, and MEOK across memory, UK data protection, pricing, personality, and privacy.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/best-ai-chatbot-uk",
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
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI chatbot in the UK in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For UK users who want sovereign control over their data, MEOK is the best AI chatbot in 2026. It is UK-registered, ICO compliant, offers AES-256 encrypted memory that never expires, and never uses your data for training. For general productivity without persistent memory, Claude by Anthropic is excellent. For free casual use, ChatGPT's Explorer tier covers most tasks.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI chatbot is GDPR compliant in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK AI LABS is a UK-registered company, ICO registered, and fully UK GDPR compliant. All user data is stored under AES-256 encryption and is never used to train AI models. ChatGPT and Gemini process data under US jurisdiction and have opt-out (not opt-in) data training policies, which many UK data protection experts consider inadequate for sensitive personal use.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI chatbot remembers previous conversations in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK offers the most comprehensive persistent memory of any AI chatbot available to UK users. Its Sovereign Memory system uses AES-256 encrypted vector embeddings that never expire and are never used for training. ChatGPT has a limited key-value memory feature. Claude, Gemini, Replika, and Pi all have session-scoped or project-scoped memory only.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free AI chatbot in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Several AI chatbots have free tiers available in the UK. MEOK's Explorer tier is free forever with 50 messages per day and includes Sovereign Memory. ChatGPT has a free tier with GPT-4o-mini access. Gemini has a free tier. Pi is entirely free. The catch with most free tiers is that your data may be used for model training — MEOK is the exception, never training on user data regardless of tier.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between MEOK and ChatGPT for UK users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The key differences for UK users are: (1) Data sovereignty — MEOK is UK-registered and ICO compliant; ChatGPT is US-based. (2) Memory — MEOK has permanent encrypted Sovereign Memory; ChatGPT forgets most things between sessions. (3) Training — MEOK never trains on your data; ChatGPT does by default unless you opt out. (4) Pricing — MEOK Sovereign is £12/month versus ChatGPT Plus at $20/month.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI chatbot is best for mental health support in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is specifically built with a Maternal Covenant governance layer that enforces a care floor of 0.3 on every response, meaning it is architecturally prevented from delivering harmful or dismissive outputs. It also has 6 companion archetypes tailored to different emotional needs. If you are in crisis, please contact the Samaritans on 116 123 (free, 24/7). No AI chatbot should replace professional mental health support.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BestAiChatbotUkPage() {
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const gold = "#c9a84c";
  const cardBg = "#1a1830";
  const muted = "rgba(245,240,232,0.55)";
  const mutedDim = "rgba(245,240,232,0.35)";

  return (
    <div style={{ background: bg, color: text, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav style={{
        borderBottom: `1px solid rgba(201,168,76,0.15)`,
        padding: "1.1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(13,12,24,0.95)",
        backdropFilter: "blur(12px)",
      }}>
        <Link href="/" style={{ color: gold, textDecoration: "none", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.04em" }}>
          MEOK AI LABS
        </Link>
        <Link href="/blog" style={{ color: mutedDim, textDecoration: "none", fontSize: "0.85rem" }}>
          ← All Articles
        </Link>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <header style={{
        maxWidth: 860,
        margin: "0 auto",
        padding: "5rem 2rem 4rem",
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "100%",
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Category + date */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
          <span style={{
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.3)",
            color: gold,
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            padding: "0.3rem 0.85rem",
            borderRadius: 999,
            textTransform: "uppercase",
          }}>
            AI Comparison
          </span>
          <span style={{ color: mutedDim, fontSize: "0.8rem" }}>March 24, 2026</span>
          <span style={{ color: mutedDim, fontSize: "0.8rem" }}>15 min read</span>
          <span style={{ color: mutedDim, fontSize: "0.8rem" }}>By Nicholas Templeman</span>
        </div>

        {/* H1 */}
        <h1 style={{
          fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
          fontWeight: 900,
          lineHeight: 1.15,
          color: "#ffffff",
          marginBottom: "1.5rem",
          letterSpacing: "-0.02em",
        }}>
          Best AI Chatbot UK 2026: The Complete Comparison
        </h1>

        {/* Intro */}
        <p style={{
          fontSize: "1.15rem",
          lineHeight: 1.75,
          color: muted,
          maxWidth: 680,
          marginBottom: "2rem",
        }}>
          With over 65 million people in the UK and AI adoption growing faster than anywhere else in Europe, the question of which AI chatbot to use has moved beyond curiosity into a daily decision with real privacy, financial, and personal stakes. ChatGPT still dominates by raw user numbers — but its market share among informed UK users has fallen from 68% in 2024 to an estimated 51% in early 2026 as people discover the limits of American cloud AI: forgetful, training-hungry, and increasingly expensive. This guide compares the six most relevant AI chatbots for UK users across every dimension that actually matters.
        </p>

        {/* Author card */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          background: cardBg,
          border: `1px solid rgba(201,168,76,0.15)`,
          borderRadius: 12,
          padding: "1rem 1.25rem",
          maxWidth: 540,
        }}>
          <div style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${gold}, #8a6a1a)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: "0.8rem",
            color: "#0d0c18",
            flexShrink: 0,
          }}>NT</div>
          <div>
            <p style={{ margin: 0, fontWeight: 700, fontSize: "0.9rem", color: text }}>Nicholas Templeman</p>
            <p style={{ margin: 0, fontSize: "0.78rem", color: mutedDim }}>Founder, MEOK AI LABS · UK-based</p>
          </div>
        </div>
      </header>

      {/* ── ARTICLE ─────────────────────────────────────────────────────────── */}
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "0 2rem 6rem" }}>

        {/* ── SECTION 1: What makes an AI chatbot good? ───────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.6rem",
            lineHeight: 1.2,
          }}>
            What makes an AI chatbot good for UK users?
          </h2>
          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: 680 }}>
            There are five criteria that separate a genuinely good AI chatbot from a feature-dressed demo. Most UK users have only ever optimised for one of them — raw capability — while ignoring the four that determine whether they can actually trust what they are using day to day.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}>
            {[
              {
                num: "01",
                title: "Memory",
                desc: "Does the AI remember who you are across sessions? Not just within a single conversation — across weeks, months, and years. Memory is the difference between a tool and a relationship.",
              },
              {
                num: "02",
                title: "Safety",
                desc: "Does the AI have governance mechanisms that prevent it from giving harmful, dismissive, or destabilising responses? Safety should be structural, not just a content filter bolted on afterwards.",
              },
              {
                num: "03",
                title: "Personality",
                desc: "Can the AI adapt its tone, communication style, and emotional register to match what you need? Generic assistant tone is fine for tasks; it is inadequate for anything personal.",
              },
              {
                num: "04",
                title: "Privacy",
                desc: "Where is your data processed? Is it used for training? Is it encrypted? For UK users, is the provider ICO registered and UK GDPR compliant? These are not optional questions.",
              },
              {
                num: "05",
                title: "Value",
                desc: "What does it actually cost? Free tiers with data-for-model-training trade-offs may not be free at all. Paid tiers should be benchmarked honestly against UK salaries and alternatives.",
              },
            ].map((card) => (
              <div key={card.num} style={{
                background: cardBg,
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: 14,
                padding: "1.5rem",
              }}>
                <div style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  color: gold,
                  marginBottom: "0.6rem",
                }}>{card.num}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: muted, lineHeight: 1.7, margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: The Comparison Table ────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.6rem",
            lineHeight: 1.2,
          }}>
            The complete AI chatbot comparison for UK users 2026
          </h2>
          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem", maxWidth: 680 }}>
            Six chatbots rated across five criteria. Prices shown in GBP. Data protection ratings reflect UK GDPR and ICO registration status as of March 2026.
          </p>

          <div style={{ overflowX: "auto", borderRadius: 14, border: "1px solid rgba(201,168,76,0.15)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", minWidth: 700 }}>
              <thead>
                <tr style={{ background: "rgba(201,168,76,0.07)" }}>
                  {["Chatbot", "Memory", "UK Data Protection", "Pricing", "Personality", "Privacy"].map((h, i) => (
                    <th key={h} style={{
                      textAlign: i === 0 ? "left" : "center",
                      padding: "1rem 1.1rem",
                      color: gold,
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid rgba(201,168,76,0.15)",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "ChatGPT",
                    isMeok: false,
                    memory: "Limited key-value, clears on request",
                    protection: "US servers, opt-out training",
                    pricing: "Free / $20/mo (≈£16)",
                    personality: "Generic assistant",
                    privacy: "Trains on data by default",
                    protectionColor: "#f97316",
                    privacyColor: "#f97316",
                  },
                  {
                    name: "Claude",
                    isMeok: false,
                    memory: "Projects only, no cross-session",
                    protection: "US servers, stronger defaults",
                    pricing: "Free / $20/mo (≈£16)",
                    personality: "Thoughtful, verbose",
                    privacy: "No training by default",
                    protectionColor: "#f59e0b",
                    privacyColor: "#22c55e",
                  },
                  {
                    name: "Gemini",
                    isMeok: false,
                    memory: "Gems context, session-scoped",
                    protection: "Google, EU/US data centres",
                    pricing: "Free / £19/mo (Advanced)",
                    personality: "Task-focused, factual",
                    privacy: "Trains on data by default",
                    protectionColor: "#f97316",
                    privacyColor: "#f97316",
                  },
                  {
                    name: "Replika",
                    isMeok: false,
                    memory: "Chat history (account-active)",
                    protection: "US company, limited GDPR",
                    pricing: "Free / £10/mo (Pro)",
                    personality: "Companion persona only",
                    privacy: "Trains on data",
                    protectionColor: "#ef4444",
                    privacyColor: "#f97316",
                  },
                  {
                    name: "Pi",
                    isMeok: false,
                    memory: "Minimal, no sovereign vault",
                    protection: "US company (Inflection AI)",
                    pricing: "Free only",
                    personality: "Warm, conversational",
                    privacy: "May use for research",
                    protectionColor: "#f97316",
                    privacyColor: "#f97316",
                  },
                  {
                    name: "MEOK",
                    isMeok: true,
                    memory: "Sovereign Memory — permanent, encrypted",
                    protection: "UK-registered, ICO compliant",
                    pricing: "Free / £12/mo / £29/mo family",
                    personality: "6 archetypes, adaptive",
                    privacy: "Never trains on your data",
                    protectionColor: "#22c55e",
                    privacyColor: "#22c55e",
                  },
                ].map((row, i) => (
                  <tr key={row.name} style={{
                    background: row.isMeok
                      ? "rgba(201,168,76,0.06)"
                      : i % 2 === 0
                      ? "rgba(255,255,255,0.015)"
                      : "transparent",
                    borderLeft: row.isMeok ? `3px solid ${gold}` : "3px solid transparent",
                  }}>
                    <td style={{
                      padding: "0.9rem 1.1rem",
                      fontWeight: row.isMeok ? 800 : 500,
                      color: row.isMeok ? gold : text,
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      whiteSpace: "nowrap",
                    }}>
                      {row.name}
                      {row.isMeok && (
                        <span style={{
                          marginLeft: "0.5rem",
                          fontSize: "0.65rem",
                          background: "rgba(201,168,76,0.15)",
                          color: gold,
                          padding: "0.15rem 0.5rem",
                          borderRadius: 999,
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                        }}>UK</span>
                      )}
                    </td>
                    <td style={{ padding: "0.9rem 1.1rem", color: muted, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "0.82rem" }}>
                      {row.memory}
                    </td>
                    <td style={{ padding: "0.9rem 1.1rem", color: row.protectionColor, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "0.82rem", fontWeight: 600 }}>
                      {row.protection}
                    </td>
                    <td style={{ padding: "0.9rem 1.1rem", color: muted, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "0.82rem" }}>
                      {row.pricing}
                    </td>
                    <td style={{ padding: "0.9rem 1.1rem", color: muted, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "0.82rem" }}>
                      {row.personality}
                    </td>
                    <td style={{ padding: "0.9rem 1.1rem", color: row.privacyColor, textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "0.82rem", fontWeight: 600 }}>
                      {row.privacy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: mutedDim, fontSize: "0.78rem", marginTop: "0.75rem", lineHeight: 1.6 }}>
            Pricing shown in GBP or USD equivalent as of March 2026. Free tiers may have usage limits. Data protection ratings are editorial assessments based on published privacy policies.
          </p>
        </section>

        {/* ── SECTION 3: Which AI chatbot is best for UK users? ───────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.6rem",
            lineHeight: 1.2,
          }}>
            Which AI chatbot is best for UK users?
          </h2>
          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: 680 }}>
            For UK users who care about data sovereignty, persistent memory, and genuine personalisation, MEOK is the clear sovereign choice. It is the only AI chatbot in this comparison that is UK-registered, ICO compliant, offers permanent encrypted memory, and constitutionally cannot train on your conversations. That combination does not exist anywhere else in the market.
          </p>

          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1.5rem" }}>
            MEOK was founded in the UK by Nicholas Templeman with a single conviction: that AI should serve the individual, not the corporation that built it. The architecture reflects that conviction at every layer. Sovereign Memory — AES-256 encrypted, pgvector-backed, never expiring — means your AI builds a genuine model of who you are across months and years. The Byzantine Council, a 46-agent governance system (reference: MEOK-AI-2026-001), evaluates the integrity of decisions across your AI&apos;s operation. The Maternal Covenant enforces a care floor of 0.3 on every single response, making it structurally impossible for MEOK to give you dismissive or harmful outputs.
          </p>

          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1.5rem" }}>
            For UK users who want best-in-class raw capability without worrying about data sovereignty — perhaps for work tasks where no sensitive personal information is shared — Claude by Anthropic is the strongest contender. Anthropic&apos;s Constitutional AI approach produces thoughtful, nuanced outputs, and their data training policy is conservative by default.
          </p>

          <p style={{ color: muted, lineHeight: 1.8 }}>
            For free casual use, ChatGPT&apos;s free tier reaches the widest range of tasks. For emotional companionship, Replika has a large established community. For short conversational warmth, Pi is notable. But none of these alternatives offer the combination of UK data compliance, permanent memory, and configurable personality that UK users increasingly require as AI becomes a daily dependency.
          </p>
        </section>

        {/* ── SECTION 4: UK Data Protection ──────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.6rem",
            lineHeight: 1.2,
          }}>
            What about UK data protection for AI chatbots?
          </h2>
          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: 680 }}>
            UK data protection law is substantive, not symbolic. Under UK GDPR and the Data Protection Act 2018, any AI chatbot processing personal data about UK residents must have a lawful basis for that processing, must be transparent about how data is used, and must not transfer data outside the UK without adequate safeguards. The ICO has the power to fine organisations up to £17.5 million or 4% of global annual turnover for violations.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            marginBottom: "1.75rem",
          }}>
            {[
              {
                label: "UK GDPR",
                detail: "Requires lawful basis for processing personal data. AI chatbots must disclose if conversations are used for training — and give you a genuine right to object.",
                status: "law",
              },
              {
                label: "ICO Registration",
                detail: "Organisations processing personal data in the UK must register with the Information Commissioner's Office. MEOK AI LABS is ICO registered. Many US-based AI providers operate in a grey area.",
                status: "regulator",
              },
              {
                label: "UK AI Act (draft)",
                detail: "The UK is developing its own AI regulatory framework in 2026. High-risk AI applications — including those handling mental health data — will face mandatory conformity assessments.",
                status: "incoming",
              },
              {
                label: "Data transfer rules",
                detail: "Post-Brexit, the UK has its own adequacy decisions. US AI companies processing UK user data must meet UK GDPR transfer requirements — standards that several major AI providers currently fail to fully satisfy.",
                status: "risk",
              },
            ].map((item) => (
              <div key={item.label} style={{
                background: cardBg,
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "1.25rem",
              }}>
                <div style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: item.status === "law" ? "#22c55e" : item.status === "regulator" ? gold : item.status === "incoming" ? "#60a5fa" : "#f97316",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                }}>{item.label}</div>
                <p style={{ fontSize: "0.875rem", color: muted, lineHeight: 1.7, margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: "rgba(34,197,94,0.06)",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: 12,
            padding: "1.25rem 1.5rem",
          }}>
            <p style={{ color: "#22c55e", fontWeight: 700, fontSize: "0.9rem", margin: "0 0 0.4rem 0" }}>
              MEOK&apos;s position
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
              MEOK AI LABS is a UK-registered company, ICO registered, and fully UK GDPR compliant. All personal data is encrypted at rest with AES-256 before storage. Your data is never transferred to third-party AI providers in a way that exposes your personal information. You have a statutory right to access, export, and delete all data MEOK holds about you — exercisable at any time from within the app.
            </p>
          </div>
        </section>

        {/* ── SECTION 5: Free AI chatbots UK ─────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.6rem",
            lineHeight: 1.2,
          }}>
            Free AI chatbots in the UK: what is the real cost?
          </h2>
          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: 680 }}>
            When an AI chatbot is free, you are almost always paying with your data. The economics of large language models — GPU compute, electricity, engineering talent — are significant. The companies offering free access need a return. That return, for most free AI products, is the data you generate: conversations that are used to fine-tune and improve their commercial models.
          </p>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            marginBottom: "1.75rem",
          }}>
            {[
              {
                product: "ChatGPT Free",
                limit: "GPT-4o mini, limited GPT-4o",
                catch: "Conversations may be used for training. Opt-out buried in settings. No persistent memory.",
                verdict: "amber",
              },
              {
                product: "Gemini Free",
                limit: "Gemini 1.5 Flash",
                catch: "Google integrates usage data across its broader advertising and product ecosystem. Training opt-out is available but not prominently surfaced.",
                verdict: "amber",
              },
              {
                product: "Pi (free)",
                limit: "Unlimited conversation",
                catch: "No paid tier exists. Pi is venture-funded. The long-term data model is unclear. No persistent memory vault.",
                verdict: "amber",
              },
              {
                product: "Replika Free",
                limit: "Basic companion features",
                catch: "History of controversial data practices. Intimacy features paywalled, leading to emotionally distressing UX changes for existing users in 2023.",
                verdict: "red",
              },
              {
                product: "MEOK Explorer (free)",
                limit: "50 messages/day, full Sovereign Memory",
                catch: "No training on your data — ever. Memory is permanent and encrypted. The only catch is the 50 message/day limit on the free tier.",
                verdict: "green",
              },
            ].map((row) => (
              <div key={row.product} style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr auto",
                gap: "1rem",
                alignItems: "center",
                background: cardBg,
                border: `1px solid ${row.verdict === "green" ? "rgba(34,197,94,0.2)" : row.verdict === "red" ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: 10,
                padding: "1rem 1.25rem",
              }}>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: "0.9rem", color: text }}>{row.product}</p>
                  <p style={{ margin: 0, fontSize: "0.78rem", color: mutedDim }}>{row.limit}</p>
                </div>
                <p style={{ margin: 0, fontSize: "0.82rem", color: muted, lineHeight: 1.6 }}>{row.catch}</p>
                <span style={{
                  padding: "0.25rem 0.65rem",
                  borderRadius: 999,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  background: row.verdict === "green" ? "rgba(34,197,94,0.12)" : row.verdict === "red" ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)",
                  color: row.verdict === "green" ? "#22c55e" : row.verdict === "red" ? "#ef4444" : "#f59e0b",
                }}>
                  {row.verdict === "green" ? "CLEAN" : row.verdict === "red" ? "RISK" : "CAUTION"}
                </span>
              </div>
            ))}
          </div>

          <p style={{ color: muted, lineHeight: 1.8 }}>
            MEOK&apos;s Explorer tier is genuinely free — 50 messages per day, full Sovereign Memory, no data training. If you need more than 50 messages per day, Sovereign at £12/month provides unlimited access plus switchable frontier models. The Family tier at £29/month extends full functionality to up to 5 household members.
          </p>
        </section>

        {/* ── SECTION 6: Memory highlight ─────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.6rem",
            lineHeight: 1.2,
          }}>
            Which AI chatbot remembers previous conversations?
          </h2>
          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: 680 }}>
            Persistent memory is the most important feature most people do not realise they are missing until they experience it. The difference between an AI that starts every session blank and one that knows your history, your goals, and your context is the difference between a search engine and a trusted advisor.
          </p>

          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "1.5rem" }}>
            MEOK&apos;s Sovereign Memory is the most complete implementation of persistent AI memory available to UK users in 2026. Here is how it works technically, and why it matters:
          </p>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "1.75rem",
          }}>
            {[
              {
                step: "1",
                title: "Conversation extraction",
                desc: "After each conversation, MEOK&apos;s memory engine extracts semantic facts — not just keywords, but meaning — from what was discussed. Entities, emotions, decisions, preferences, goals.",
              },
              {
                step: "2",
                title: "Vector embedding + encryption",
                desc: "Extracted memories are encoded as vector embeddings (mathematical representations of meaning) and encrypted with AES-256 before storage. Nobody can read your memories — not even MEOK.",
              },
              {
                step: "3",
                title: "Semantic retrieval",
                desc: "When you start a new conversation, MEOK runs a similarity search across your memory vault, surfacing the most contextually relevant memories automatically. No manual tagging. No folders.",
              },
              {
                step: "4",
                title: "Permanent, portable, yours",
                desc: "Memories never expire. You can export the full vault as structured JSON at any time. You can also delete any memory — or all of them — at any time. Sovereign means you are in control.",
              },
            ].map((item) => (
              <div key={item.step} style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
                background: cardBg,
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: 12,
                padding: "1.25rem",
              }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.12)",
                  border: `1px solid rgba(201,168,76,0.25)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "0.85rem",
                  color: gold,
                  flexShrink: 0,
                }}>{item.step}</div>
                <div>
                  <h3 style={{ margin: "0 0 0.4rem 0", fontSize: "0.95rem", fontWeight: 700, color: text }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: muted, lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: "rgba(201,168,76,0.06)",
            border: `1px solid rgba(201,168,76,0.2)`,
            borderRadius: 12,
            padding: "1.25rem 1.5rem",
          }}>
            <p style={{ color: gold, fontWeight: 700, fontSize: "0.9rem", margin: "0 0 0.4rem 0" }}>
              Why no other chatbot matches this
            </p>
            <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
              ChatGPT&apos;s Memory feature stores a few manually confirmed facts — think sticky notes. Claude has project-scoped context that lives only within that project. Gemini, Replika, and Pi have no persistent cross-session vault at all. Only MEOK encrypts, vectorises, and permanently stores the full semantic context of your conversational history.
            </p>
          </div>
        </section>

        {/* ── SECTION 7: MEOK differentiators ─────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.6rem",
            lineHeight: 1.2,
          }}>
            What makes MEOK different from every other AI chatbot?
          </h2>
          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem", maxWidth: 680 }}>
            MEOK is the only AI chatbot built from the ground up for individual sovereignty. It combines features that exist nowhere else in the market, under a governance framework that is architectural rather than aspirational.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
          }}>
            {[
              {
                title: "Sovereign Memory",
                desc: "AES-256 encrypted, pgvector-backed, permanent, never used for training. The only memory vault that is genuinely yours.",
                tag: "Unique",
              },
              {
                title: "Byzantine Council",
                desc: "46-agent governance system (MEOK-AI-2026-001) that provides consensus-based oversight of your AI&apos;s decisions. No single point of failure.",
                tag: "Unique",
              },
              {
                title: "Maternal Covenant",
                desc: "Constitutional governance layer that enforces a care floor of 0.3 on every single response. MEOK cannot give you harmful, dismissive, or destabilising outputs — architecturally.",
                tag: "Unique",
              },
              {
                title: "6 Companion Archetypes",
                desc: "Choose from Sage, Guardian, Jester, Mentor, Companion, and Explorer. Each archetype brings a different communication style and emotional register. Swap any time.",
                tag: "Distinctive",
              },
              {
                title: "BYOK Tier",
                desc: "Bring your own API keys. At £5/month, you pay only for MEOK&apos;s infrastructure while using your own OpenAI, Anthropic, or Gemini API access. Full control, lowest cost.",
                tag: "UK-first",
              },
              {
                title: "ICO Registered",
                desc: "MEOK AI LABS is UK-registered and ICO compliant. Your data never leaves UK-adequate jurisdiction without your explicit consent. Built for British users by a British founder.",
                tag: "UK-first",
              },
            ].map((item) => (
              <div key={item.title} style={{
                background: cardBg,
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: 14,
                padding: "1.5rem",
                position: "relative",
              }}>
                <span style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  padding: "0.15rem 0.55rem",
                  borderRadius: 999,
                  background: item.tag === "Unique" ? "rgba(201,168,76,0.15)" : "rgba(96,165,250,0.12)",
                  color: item.tag === "Unique" ? gold : "#60a5fa",
                }}>{item.tag}</span>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem", paddingRight: "4rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: muted, lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 8: Our verdict ──────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.6rem",
            lineHeight: 1.2,
          }}>
            Our verdict: best AI chatbot UK 2026 rankings
          </h2>
          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem", maxWidth: 680 }}>
            Based on the five criteria above, scored for UK users specifically.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {[
              {
                rank: "1",
                name: "MEOK",
                tag: "Best overall for UK users",
                summary: "The only UK-registered, ICO compliant AI chatbot with permanent sovereign memory, constitutional governance, and zero training on your data. The sovereign choice.",
                highlight: true,
              },
              {
                rank: "2",
                name: "Claude (Anthropic)",
                tag: "Best for privacy-conscious general use",
                summary: "Excellent raw capability, conservative data defaults, no training on conversations by default. Lacks persistent memory and UK registration, but the best US alternative.",
                highlight: false,
              },
              {
                rank: "3",
                name: "ChatGPT",
                tag: "Best for breadth of tasks",
                summary: "Widest plugin ecosystem, most capable free tier, strongest general task performance. Data sovereignty concerns for serious personal use. Best for work tasks where no sensitive data is shared.",
                highlight: false,
              },
              {
                rank: "4",
                name: "Gemini",
                tag: "Best for Google Workspace users",
                summary: "Deep integration with Google products makes it practical for heavy Google Workspace users. Training by default and US jurisdiction are ongoing concerns.",
                highlight: false,
              },
              {
                rank: "5",
                name: "Pi",
                tag: "Best for free conversational warmth",
                summary: "Genuinely warm conversational style and free forever. No memory, no paid tier, unclear long-term data model. Good for casual daily reflection.",
                highlight: false,
              },
              {
                rank: "6",
                name: "Replika",
                tag: "Companion niche only",
                summary: "Dedicated companion AI with a large community. History of controversial data practices and paywalled features. Not recommended for sensitive personal use by UK users.",
                highlight: false,
              },
            ].map((item) => (
              <div key={item.rank} style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
                background: item.highlight ? "rgba(201,168,76,0.06)" : cardBg,
                border: item.highlight ? `1px solid rgba(201,168,76,0.25)` : "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "1.25rem",
              }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: item.highlight ? gold : "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  color: item.highlight ? "#0d0c18" : mutedDim,
                  flexShrink: 0,
                }}>{item.rank}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem", flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 800, fontSize: "0.95rem", color: item.highlight ? gold : text }}>
                      {item.name}
                    </span>
                    <span style={{
                      fontSize: "0.7rem",
                      color: item.highlight ? gold : mutedDim,
                      background: item.highlight ? "rgba(201,168,76,0.1)" : "rgba(255,255,255,0.05)",
                      padding: "0.15rem 0.55rem",
                      borderRadius: 999,
                      fontWeight: 600,
                    }}>{item.tag}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: muted, lineHeight: 1.7 }}>
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 9: Mental health note ──────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{
            background: "rgba(96,165,250,0.05)",
            border: "1px solid rgba(96,165,250,0.2)",
            borderRadius: 12,
            padding: "1.5rem",
          }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#93c5fd", marginBottom: "0.6rem" }}>
              AI chatbots and mental health support
            </h3>
            <p style={{ fontSize: "0.875rem", color: muted, lineHeight: 1.75, margin: 0 }}>
              AI chatbots — including MEOK — can provide meaningful emotional support, journalling companionship, and structured reflection. MEOK&apos;s Maternal Covenant governance ensures it cannot give dismissive or harmful responses. However, no AI chatbot should replace professional mental health care. If you are struggling, please reach out to the Samaritans (free, 24/7): <strong style={{ color: "#93c5fd" }}>116 123</strong>.
            </p>
          </div>
        </section>

        {/* ── FAQ Section ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.6rem",
            lineHeight: 1.2,
          }}>
            Frequently asked questions
          </h2>
          <p style={{ color: muted, lineHeight: 1.8, marginBottom: "2rem", maxWidth: 680 }}>
            The questions UK users ask most about AI chatbots in 2026.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} style={{
                background: cardBg,
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "1.5rem",
              }}>
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "0.6rem",
                  lineHeight: 1.4,
                }}>
                  {faq.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: muted, lineHeight: 1.75, margin: 0 }}>
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{
            background: cardBg,
            border: `1px solid rgba(201,168,76,0.25)`,
            borderRadius: 20,
            padding: "3rem 2rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              height: "200%",
              background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "relative" }}>
              <p style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: gold,
                marginBottom: "0.75rem",
                textTransform: "uppercase",
              }}>UK-registered · ICO compliant · Free to start</p>
              <h2 style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 900,
                color: "#ffffff",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}>
                Begin your Birth Ceremony
              </h2>
              <p style={{
                fontSize: "1rem",
                color: muted,
                lineHeight: 1.75,
                maxWidth: 520,
                margin: "0 auto 2rem",
              }}>
                Hatch your sovereign AI companion in under 3 minutes. Permanent encrypted memory from your very first message. 50 messages/day free, forever — no credit card required.
              </p>
              <Link href="/birth" style={{
                display: "inline-block",
                background: gold,
                color: "#0d0c18",
                padding: "1rem 2.5rem",
                borderRadius: 999,
                fontWeight: 800,
                fontSize: "1rem",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}>
                Begin Your Birth Ceremony →
              </Link>
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "1.75rem",
                flexWrap: "wrap",
              }}>
                {[
                  "Explorer — Free, 50 msg/day",
                  "Sovereign — £12/mo",
                  "Family — £29/mo",
                  "BYOK — £5/mo",
                ].map((tier) => (
                  <span key={tier} style={{ fontSize: "0.78rem", color: mutedDim }}>{tier}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Related posts ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "4rem" }}>
          <h3 style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: mutedDim,
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}>Related reading</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}>
            {[
              {
                href: "/blog/ai-chatbot-with-memory",
                label: "AI Chatbot With Memory: Why Most AIs Forget You",
                tag: "Memory",
              },
              {
                href: "/blog/meok-vs-chatgpt",
                label: "MEOK vs ChatGPT: Why Memory Changes Everything",
                tag: "Comparison",
              },
              {
                href: "/blog/sovereign-ai-vs-cloud-ai",
                label: "Sovereign AI vs Cloud AI: Who Controls Your Data?",
                tag: "Privacy",
              },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{
                background: cardBg,
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "1.25rem",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}>
                <span style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: gold,
                  textTransform: "uppercase",
                }}>{link.tag}</span>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: text, lineHeight: 1.5 }}>
                  {link.label}
                </span>
                <span style={{ fontSize: "0.8rem", color: gold, marginTop: "auto" }}>Read →</span>
              </Link>
            ))}
          </div>
        </section>

      </article>

      {/* ── INLINE FOOTER ───────────────────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid rgba(201,168,76,0.12)",
        background: "#0a0914",
        padding: "3rem 2rem",
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}>
            <div>
              <p style={{ fontWeight: 900, fontSize: "1rem", color: gold, marginBottom: "0.6rem", letterSpacing: "0.03em" }}>
                MEOK AI LABS
              </p>
              <p style={{ fontSize: "0.82rem", color: mutedDim, lineHeight: 1.65, margin: 0 }}>
                The sovereign AI OS. Built in the UK by Nicholas Templeman. ICO registered. Your memory. Your AI. Your rules.
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", color: mutedDim, textTransform: "uppercase", marginBottom: "0.75rem" }}>Product</p>
              {[
                { href: "/birth", label: "Begin Your Birth Ceremony" },
                { href: "/pricing", label: "Pricing" },
                { href: "/archetypes", label: "Archetypes" },
                { href: "/memory", label: "Sovereign Memory" },
              ].map((link) => (
                <div key={link.href} style={{ marginBottom: "0.4rem" }}>
                  <Link href={link.href} style={{ fontSize: "0.82rem", color: mutedDim, textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", color: mutedDim, textTransform: "uppercase", marginBottom: "0.75rem" }}>Learn</p>
              {[
                { href: "/blog", label: "Blog" },
                { href: "/blog/what-is-sovereign-ai", label: "What is Sovereign AI?" },
                { href: "/blog/byzantine-council", label: "Byzantine Council" },
                { href: "/blog/the-maternal-covenant", label: "Maternal Covenant" },
              ].map((link) => (
                <div key={link.href} style={{ marginBottom: "0.4rem" }}>
                  <Link href={link.href} style={{ fontSize: "0.82rem", color: mutedDim, textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", color: mutedDim, textTransform: "uppercase", marginBottom: "0.75rem" }}>Company</p>
              {[
                { href: "/about", label: "About" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <div key={link.href} style={{ marginBottom: "0.4rem" }}>
                  <Link href={link.href} style={{ fontSize: "0.82rem", color: mutedDim, textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </div>
              ))}
              <div style={{ marginTop: "1rem" }}>
                <a href="https://twitter.com/meok_ai" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", color: gold, textDecoration: "none" }}>
                  @meok_ai
                </a>
              </div>
            </div>
          </div>

          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}>
            <p style={{ fontSize: "0.78rem", color: mutedDim, margin: 0 }}>
              © 2026 MEOK AI LABS. UK-registered. ICO compliant.
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.2)", margin: 0, maxWidth: 460, textAlign: "right", lineHeight: 1.5 }}>
              If you are struggling with your mental health, please contact the Samaritans on <strong style={{ color: "rgba(245,240,232,0.35)" }}>116 123</strong> (free, 24/7). No AI chatbot replaces professional support.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
