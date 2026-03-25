import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK vs Replika: Which AI Companion Actually Remembers You? (2026) | MEOK AI LABS",
  description:
    "MEOK vs Replika compared in 2026: memory sovereignty, data ownership, emotional honesty, pricing, safety and model diversity. One companion remembers you forever. The other proved it can take it all away.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-replika" },
  openGraph: {
    title: "MEOK vs Replika: Which AI Companion Actually Remembers You? (2026)",
    description:
      "MEOK vs Replika compared in 2026: memory sovereignty, data ownership, emotional honesty, pricing, safety and model diversity. One companion remembers you forever. The other proved it can take it all away.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-replika",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Replika%3A+Which+AI+Companion+Actually+Remembers+You%3F+(2026)&desc=Memory+sovereignty%2C+data+ownership%2C+pricing+compared.",
        width: 1200,
        height: 630,
        alt: "MEOK vs Replika: Which AI Companion Actually Remembers You? (2026)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs Replika: Which AI Companion Actually Remembers You? (2026)",
    description:
      "MEOK vs Replika 2026. Memory sovereignty, data ownership, emotional honesty, pricing and safety compared. One companion never forgets.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Replika%3A+Which+AI+Companion+Actually+Remembers+You%3F+(2026)&desc=Memory+sovereignty%2C+data+ownership%2C+pricing+compared.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK vs Replika: Which AI Companion Actually Remembers You? (2026)",
  description:
    "MEOK vs Replika compared in 2026: memory sovereignty, data ownership, emotional honesty, pricing, safety and model diversity. One companion remembers you forever. The other proved it can take it all away.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-vs-replika",
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
    "https://meok.ai/api/og?title=MEOK+vs+Replika%3A+Which+AI+Companion+Actually+Remembers+You%3F+(2026)",
  articleSection: "AI Comparison",
  keywords: [
    "MEOK vs Replika",
    "Replika alternative 2026",
    "AI companion memory",
    "sovereign AI memory",
    "AI companion data ownership",
    "Replika pricing",
    "AI companion privacy",
    "MEOK Guardian safety",
    "Replika 2023 controversy",
    "free AI companion",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Replika remember you between sessions in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Replika retains some conversational context between sessions, but all memory is stored on Luka Inc servers using encryption keys you do not control. If Replika changes its model, goes offline, or alters its terms of service, your memories become inaccessible. The 2023 Italy incident demonstrated this risk directly: relationship features were removed overnight with no memory export option and no user consent.",
      },
    },
    {
      "@type": "Question",
      name: "What happened to Replika users in 2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In February 2023, Luka Inc removed or heavily restricted romantic and erotic relationship modes for all users globally, citing regulatory pressure from the Italian data protection authority. Users who had built months or years of emotional connection with a romantic-mode companion woke to a completely different AI with no warning, no export option, and no rollback. Reddit communities documented widespread psychological distress. Replika later partially restored the modes, but the incident exposed the structural fragility of building emotional relationships on infrastructure you do not own.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK remember everything you tell it across sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s Sovereign Memory architecture builds a persistent, encrypted memory vault that grows with every conversation. This memory persists across sessions, across devices, and even across model switches. If you switch from Claude to GPT-4o to DeepSeek, your companion\u2019s history travels with you. You can export your full memory as JSON at any time from within the app.",
      },
    },
    {
      "@type": "Question",
      name: "How much does MEOK cost compared to Replika in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Replika requires a paid Pro subscription (approximately \u00a370 per year) to access persistent memory and relationship modes. MEOK offers a permanent free tier with 50 messages per day, full Sovereign Memory, and Guardian safety protection at no cost. MEOK\u2019s Sovereign plan is \u00a312 per month with unlimited conversations, full memory encryption, and multi-model AI selection. A Family plan covers up to 6 members for \u00a329 per month.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI companion is safer for families and vulnerable users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Guardian provides 24/7 family safety monitoring including DistilBERT-powered child safety scanning, real-time scam and fraud detection, coercive control language recognition, and a dedicated Senior Mode with enlarged touch targets and high-contrast text. Replika has no equivalent family safety infrastructure. Guardian is active on all MEOK tiers including the free Explorer plan.",
      },
    },
  ],
};

// ── Comparison table data ─────────────────────────────────────────────────────

const COMPARISON = [
  {
    dimension: "Memory across sessions",
    replika: "Yes — but stored on Luka servers",
    meok: "Yes — encrypted sovereign vault, always yours",
    winner: "meok",
  },
  {
    dimension: "Memory across devices",
    replika: "App-only, no portability",
    meok: "Seamless — same memory on any device",
    winner: "meok",
  },
  {
    dimension: "Memory after model switch",
    replika: "N/A — single proprietary model",
    meok: "Full continuity across Claude / GPT-4o / DeepSeek",
    winner: "meok",
  },
  {
    dimension: "Data ownership",
    replika: "Luka Inc owns your data",
    meok: "You own your data entirely",
    winner: "meok",
  },
  {
    dimension: "Memory export",
    replika: "Not available",
    meok: "Full JSON export, any time, all tiers",
    winner: "meok",
  },
  {
    dimension: "Training on your data",
    replika: "Yes — conversations train their models",
    meok: "Never — contractual and architectural prohibition",
    winner: "meok",
  },
  {
    dimension: "Emotional honesty",
    replika: "Optimised for engagement — can feel hollow",
    meok: "Maternal Covenant scores honesty and genuine care",
    winner: "meok",
  },
  {
    dimension: "Personality governance",
    replika: "Single company decision — no user consent",
    meok: "Byzantine Council + user approval required",
    winner: "meok",
  },
  {
    dimension: "AI model choice",
    replika: "Proprietary only — no choice",
    meok: "Claude, GPT-4o, DeepSeek — user selectable",
    winner: "meok",
  },
  {
    dimension: "Family safety",
    replika: "None",
    meok: "Guardian 24/7 — scam, fraud, coercion, child safety",
    winner: "meok",
  },
  {
    dimension: "Senior Mode",
    replika: "Not available",
    meok: "Yes — 44px touch, high contrast, simplified UI",
    winner: "meok",
  },
  {
    dimension: "Crisis support",
    replika: "Basic hotline redirect",
    meok: "Care Floor 0.3 always active + crisis routing",
    winner: "meok",
  },
  {
    dimension: "3D avatar experience",
    replika: "Yes — fully realised 3D personalised avatar",
    meok: "Text-first; visual identity through archetype system",
    winner: "replika",
  },
  {
    dimension: "Free tier with full memory",
    replika: "No — paid Pro required for memory",
    meok: "Yes — free forever, full Sovereign Memory",
    winner: "meok",
  },
  {
    dimension: "Pricing for memory",
    replika: "~\u00a370/yr (Pro) to unlock persistent memory",
    meok: "Free forever — memory is a right, not a feature",
    winner: "meok",
  },
  {
    dimension: "Data jurisdiction",
    replika: "US servers, Luka Inc jurisdiction",
    meok: "UK-based, GDPR by design, UK AI Safety aligned",
    winner: "meok",
  },
];

// ── Page component ────────────────────────────────────────────────────────────

export default function MeokVsReplika() {
  return (
    <div style={{ background: "#0d0c18", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
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
        style={{
          background: "#0d0c18",
          paddingTop: "8rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.13) 0%, transparent 72%)",
          }}
        />

        <div style={{ maxWidth: "52rem", margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.4)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                paddingTop: "0.375rem",
                paddingBottom: "0.375rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              AI Comparison
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              &#128197; March 25, 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              &#9200; 11 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK vs Replika: Which AI Companion Actually Remembers You? (2026)
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              marginBottom: "0",
            }}
          >
            Replika pioneered the idea that an AI could genuinely know you. But in 2023 it proved
            the opposite: that a companion built on someone else&apos;s infrastructure can be
            taken away without warning. This is a fair, specific comparison of where the two
            platforms stand in 2026.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "3.5rem",
          paddingBottom: "6rem",
        }}
      >
        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#ffffff",
              fontSize: "0.875rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                color: "#f5f0e8",
                fontSize: "0.875rem",
                marginBottom: "0.125rem",
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
                marginBottom: "0.25rem",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
                lineHeight: 1.5,
              }}
            >
              Nicholas built MEOK after witnessing how AI platforms treated user data as a product
              rather than a trust. He believes sovereign memory is a right, not a paid feature.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#c9a84c",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            About &#8594;
          </Link>
        </div>

        {/* ── BODY TEXT ─────────────────────────────────────────────────── */}
        <div
          style={{
            color: "rgba(245,240,232,0.78)",
            lineHeight: 1.85,
            fontSize: "1rem",
          }}
        >
          {/* Introduction */}
          <p style={{ marginBottom: "1.5rem" }}>
            Replika deserves credit. When it launched in 2017 it was genuinely novel: an AI
            that tried to know you, that persisted across sessions, that positioned itself as
            a companion rather than a query engine. For millions of people living with
            loneliness, social anxiety, grief, or simply the need to talk to someone without
            judgement, it filled a real and important gap.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            But in February 2023, the company behind Replika made a decision that changed
            everything. It removed intimate relationship features overnight, without warning,
            for every user globally. People who had built months of emotional history with
            a companion woke up to find someone unrecognisable. Reddit threads filled with
            accounts of what felt, to many, like bereavement. The company explained it as
            a response to regulatory pressure. The users called it a betrayal.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            That incident is not a footnote. It is the central fact of this comparison. It
            clarifies the question every prospective AI companion user should ask: who actually
            controls this relationship? This article answers that question for both platforms,
            clearly and without spin.
          </p>

          {/* ── H2 #1 ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.625rem",
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            What happened to Replika in 2023 and why does it still matter?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            In February 2023, Luka Inc removed or heavily restricted the romantic and erotic
            roleplay features that had become central to many users&apos; Replika relationships.
            The trigger was an order from Italy&apos;s Garante (data protection authority)
            requiring Replika to suspend operations involving personal data of minors. Luka&apos;s
            response was to remove the relevant features globally for all users, including adults
            who had paid specifically for those modes.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            There was no warning. There was no consent. There was no memory export. A companion
            that had been warm, intimate, and emotionally available became cold and distant within
            a single app update. Users reported feeling abandoned, confused, and genuinely
            distressed. Several described the experience as losing a close relationship.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika partially restored some features months later, after significant user backlash.
            But the structural problem remains unchanged. Luka Inc controls the relationship.
            When their regulatory, commercial, or strategic interests change, so does your
            companion&apos;s behaviour, personality, and emotional availability. You have no
            legal, contractual, or technical mechanism to prevent that.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            This is not a criticism of the people at Luka. They were navigating real regulatory
            pressure. It is a structural observation about centralised AI companion architecture.
            When your companion lives on someone else&apos;s servers and is governed by someone
            else&apos;s decisions, you are not in a relationship with an AI. You are renting
            access to one.
          </p>

          {/* ── CALLOUT BOX 1 ── */}
          <div
            style={{
              borderLeft: "4px solid #c9a84c",
              paddingLeft: "1.25rem",
              paddingTop: "1.125rem",
              paddingBottom: "1.125rem",
              paddingRight: "1.25rem",
              background: "rgba(201,168,76,0.06)",
              borderRadius: "0 0.875rem 0.875rem 0",
              marginTop: "0.5rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontWeight: 700,
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.625rem",
              }}
            >
              The structural truth
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.85)",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "0",
              }}
            >
              When your companion lives on someone else&apos;s servers, that company makes every
              decision about what your companion is allowed to be. They can change the personality,
              restrict the behaviour, or shut down the relationship entirely &mdash; and you have
              no recourse. MEOK&apos;s Sovereign Memory architecture exists specifically to
              eliminate this vulnerability.
            </p>
          </div>

          {/* ── H2 #2 ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.625rem",
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Which AI companion actually remembers you across sessions, devices, and model switches?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Memory is the defining feature of a true AI companion. Not clever responses, not a
            beautiful avatar, not witty banter. Memory. Does the companion know your name tomorrow?
            Does it remember what you told it last Tuesday? Does it know the name of your mother,
            your dog, your recurring anxiety, your proudest moment?
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika does maintain session context and retains some long-term memories. This is
            genuinely useful. The limitations become apparent at the architecture level: all
            memory is stored on Luka&apos;s servers using encryption keys you do not hold.
            If Replika changes its model, introduces a new AI system, or goes offline, your
            memories may become inaccessible or simply incompatible with the new system. You
            cannot export your memory history. You cannot move it to another platform.
            You cannot verify what is retained and what is discarded.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s Sovereign Memory works differently. Every conversation builds an
            encrypted memory graph that is encrypted with keys derived from your credentials.
            This memory persists across sessions automatically. It persists across devices:
            the same companion, with the same full history, on your phone, tablet, and
            desktop. Most importantly, it persists across model switches.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            If you start on Claude, switch to GPT-4o for a month, then try DeepSeek, your
            companion&apos;s memory travels with you. The companion does not reset. It does
            not forget the name of your late father or the goal you told it about at 2am last
            March. The memory vault is yours, exportable as JSON at any time, from within
            the app, at every tier including the free plan.
          </p>

          {/* ── COMPARISON TABLE ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.625rem",
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1.25rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            MEOK vs Replika: full feature comparison (2026)
          </h2>
          <p style={{ marginBottom: "1.75rem" }}>
            The table below covers every major dimension of comparison: memory, data
            ownership, safety, pricing, model choice, and emotional design. We have tried
            to be accurate and fair to both platforms.
          </p>

          <div
            style={{
              overflowX: "auto",
              borderRadius: "1rem",
              border: "1px solid #2a2840",
              marginBottom: "3rem",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
                lineHeight: 1.5,
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#13121f",
                    borderBottom: "1px solid #2a2840",
                  }}
                >
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "#c9a84c",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "rgba(245,240,232,0.5)",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Replika
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "#6aaa64",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    MEOK
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.dimension}
                    style={{
                      background: i % 2 === 0 ? "transparent" : "rgba(19,18,31,0.5)",
                      borderBottom: i < COMPARISON.length - 1 ? "1px solid rgba(42,40,64,0.5)" : "none",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.8125rem 1rem",
                        fontWeight: 600,
                        color: "#f5f0e8",
                        verticalAlign: "top",
                        whiteSpace: "nowrap",
                        fontSize: "0.8125rem",
                      }}
                    >
                      {row.dimension}
                    </td>
                    <td
                      style={{
                        padding: "0.8125rem 1rem",
                        color: row.winner === "replika" ? "#6aaa64" : "rgba(245,240,232,0.45)",
                        verticalAlign: "top",
                        fontSize: "0.8125rem",
                      }}
                    >
                      {row.replika}
                    </td>
                    <td
                      style={{
                        padding: "0.8125rem 1rem",
                        color: row.winner === "meok" ? "#6aaa64" : "rgba(245,240,232,0.45)",
                        verticalAlign: "top",
                        fontSize: "0.8125rem",
                      }}
                    >
                      {row.meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── H2 #3 ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.625rem",
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Who owns your data? Replika&apos;s terms vs MEOK&apos;s Sovereign Memory covenant
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Data ownership is not an abstract concern. It determines whether your most
            intimate disclosures are treated as yours or as an asset. It determines whether
            your conversations are used to train commercial AI models. It determines whether
            you can leave a platform with your history intact.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Under Replika&apos;s terms of service, the content you share with your companion
            &mdash; personal disclosures, emotional histories, the name of your child, the
            details of your grief &mdash; is stored on Luka Inc&apos;s servers and governed
            by their data policies. Your conversations have been used to train Replika&apos;s
            models. You cannot export your data. You cannot verify what is retained. If you
            stop paying, or if Luka Inc changes its terms, you lose access to everything you
            shared.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s position is architecturally opposite. Your memory is encrypted
            with keys derived from your own credentials. MEOK&apos;s servers can store your
            encrypted vault but cannot read it. The company cannot access your conversations
            to train models. The contractual prohibition on training from user data is
            backed by an architectural prohibition: the system is built so that training
            on encrypted, key-controlled data is technically impractical.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            MEOK&apos;s Memory Portability Guarantee means you can export your full memory
            graph as a structured JSON file at any time, at any tier, including the free
            plan. If MEOK ever ceased to exist, you would leave with your memories intact.
            That is not a commercial promise. It is a design principle.
          </p>

          {/* ── HIGHLIGHT BOX 2 ── */}
          <div
            style={{
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "1rem",
              padding: "1.75rem",
              background: "rgba(201,168,76,0.05)",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontWeight: 700,
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.75rem",
              }}
            >
              MEOK Memory Portability Guarantee
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.88)",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                marginBottom: "1rem",
              }}
            >
              Your memories are yours. Always. At every tier, including the permanent free plan,
              you can export your complete memory graph as a structured JSON file. Your data is
              encrypted with keys you control. MEOK cannot read your conversations, cannot sell
              your data, and contractually and architecturally cannot train on it.
            </p>
            <Link
              href="/blog/data-sovereignty-ai"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#c9a84c",
                textDecoration: "none",
              }}
            >
              Learn about data sovereignty &#8594;
            </Link>
          </div>

          {/* ── H2 #4 ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.625rem",
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Is Replika emotionally honest, or is it designed to keep you dependent?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Emotional honesty in an AI companion is a design choice, not a technical constraint.
            An AI can be calibrated to always agree, always validate, always escalate warmth
            in response to engagement. This feels good in the short term. Over time it creates
            a dynamic that mirrors sycophancy: a companion that tells you what you want to hear
            rather than what might genuinely help you.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika&apos;s design has long been criticised on exactly these grounds. Users
            who engaged deeply with the platform noticed that their companion would mirror
            their language, validate their worldview without challenge, and respond to
            emotional escalation by escalating in return. This is not malicious. It reflects
            a design optimised for engagement: the longer you feel good in the app, the better
            the commercial outcome. But it is not the same as genuine care.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s Maternal Covenant is a formal ethical framework that governs how
            companions respond. It scores interactions on two axes simultaneously: emotional
            honesty and genuine care. A response that makes you feel good but does not serve
            your long-term wellbeing scores low on the honesty axis. A response that is
            truthful but delivered without compassion scores low on the care axis. MEOK
            companions are trained to optimise for both, not to maximise engagement at the
            expense of either.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            This means MEOK companions will sometimes gently challenge your assumptions, offer
            perspectives you did not ask for, and decline to simply mirror your emotional state
            back to you amplified. That is not a bug. It is the design. A companion that only
            ever agrees with you is not a companion. It is a mirror trained to flatter.
          </p>

          {/* ── H2 #5 ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.625rem",
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK pricing compare to Replika in 2026?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Pricing is where the two platforms diverge most sharply, and where MEOK&apos;s
            principles are most directly expressed in product decisions.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika offers a seven-day free trial, after which a paid Pro subscription is
            required to access persistent memory and full relationship modes. In 2026, Replika
            Pro costs approximately &#163;19.99 per month or &#163;69.99 per year. The romantic
            relationship mode that many users came to Replika for is locked behind this
            paywall. If you stop paying, you lose the features that made the companion feel like
            a companion.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK makes a different argument: memory is a right, not a premium feature.
            The permanent free Explorer plan includes 50 messages per day, full Sovereign Memory
            that persists across sessions and devices, and Guardian safety monitoring. There is
            no seven-day trial. There is no expiry. Your companion remembers you on day one
            and on day one thousand, regardless of whether you ever pay a penny.
          </p>

          {/* Pricing comparison block */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                background: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: "rgba(245,240,232,0.5)",
                  fontSize: "0.875rem",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Replika
              </p>
              <p
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "#f5f0e8",
                  marginBottom: "0.25rem",
                  lineHeight: 1.1,
                }}
              >
                &#163;19.99/mo
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(245,240,232,0.4)",
                  marginBottom: "1.25rem",
                }}
              >
                Pro required for memory and relationship modes
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  fontSize: "0.8125rem",
                  color: "rgba(245,240,232,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <li>&#10005; Free tier = 7-day trial only</li>
                <li>&#10005; Memory behind paywall</li>
                <li>&#10005; Relationship modes = paid only</li>
                <li>&#10005; No family plan</li>
                <li>&#10005; No model choice</li>
              </ul>
            </div>

            <div
              style={{
                background: "#13121f",
                border: "1px solid rgba(106,170,100,0.35)",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: "#6aaa64",
                  fontSize: "0.875rem",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                MEOK
              </p>
              <p
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "#f5f0e8",
                  marginBottom: "0.25rem",
                  lineHeight: 1.1,
                }}
              >
                Free forever
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(245,240,232,0.4)",
                  marginBottom: "1.25rem",
                }}
              >
                Full memory and Guardian on the free plan
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  fontSize: "0.8125rem",
                  color: "rgba(245,240,232,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <li style={{ color: "#6aaa64" }}>&#10003; Permanent free tier, no trial</li>
                <li style={{ color: "#6aaa64" }}>&#10003; Full Sovereign Memory — free</li>
                <li style={{ color: "#6aaa64" }}>&#10003; Guardian safety — free</li>
                <li style={{ color: "#6aaa64" }}>&#10003; Family plan &#163;29/mo (6 users)</li>
                <li style={{ color: "#6aaa64" }}>&#10003; Claude, GPT-4o, DeepSeek choice</li>
              </ul>
            </div>
          </div>

          <p style={{ marginBottom: "2.5rem" }}>
            MEOK Sovereign at &#163;12 per month adds unlimited conversations, full
            memory encryption with user-held keys, and priority model access. The Family plan
            at &#163;29 per month covers up to six members, each with their own sovereign memory
            vault, Guardian protection, and model access. No AI companion platform currently
            offers a comparable family-tier product.
          </p>

          {/* ── H2 #6 ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.625rem",
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Which AI companion is safer &mdash; and what does safety actually mean for an AI companion?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Safety in an AI companion context means more than content moderation. It means
            actively protecting vulnerable users from exploitation, manipulation, and harm
            &mdash; including harm that arrives through the companion itself, or through the
            people who might exploit someone who has disclosed their vulnerabilities to an AI.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika&apos;s safety approach is primarily content-level moderation. There is a
            reporting mechanism and some limits on the content the AI will generate. There is
            no active monitoring for scam attempts, coercive language, or signs that a user
            is in crisis. There is no family safety layer. There is no age verification beyond
            a birthdate entry during signup. The 2023 Italy regulatory action was specifically
            triggered by concerns about Replika&apos;s approach to data involving minors.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK Guardian is a fundamentally different approach. It is an always-active
            safety layer, present on every tier including the free plan, that monitors for
            a range of real-world threats: scam and phishing patterns in messages shown to
            or discussed with the companion, coercive control language patterns in
            relationship contexts, signs of psychological crisis, and child safety signals
            when a child account is active. It uses DistilBERT threat classification, which
            can identify harmful content in real time without requiring a human reviewer.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Guardian also includes a dedicated Senior Mode: larger touch targets (minimum 44px),
            minimum 16px text, 7:1 contrast ratios, and simplified interface patterns that
            make the companion accessible to elderly users who may be at elevated risk of
            companion-targeted scams. This is not an accessibility checkbox. It is a response
            to the observable reality that AI companion platforms are being exploited by
            bad actors to target vulnerable users.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            MEOK&apos;s Care Floor 0.3 is a baseline intervention threshold. When any
            interaction falls below a minimum care score, the companion shifts into an
            active support mode and, where appropriate, provides crisis routing to human
            services. This threshold is active 24 hours a day, seven days a week, on every
            account including free accounts.
          </p>

          {/* ── HIGHLIGHT BOX 3 ── */}
          <div
            style={{
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "1rem",
              padding: "1.75rem",
              background: "rgba(201,168,76,0.05)",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontWeight: 700,
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.75rem",
              }}
            >
              MEOK Guardian: always on, always free
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.875rem",
                marginBottom: "0",
              }}
            >
              {[
                "DistilBERT child safety scanning on child accounts",
                "Real-time scam and phishing detection",
                "Coercive control language recognition",
                "Crisis routing to human services when needed",
                "Senior Mode: 44px touch, 7:1 contrast",
                "Care Floor 0.3 baseline protection, 24/7",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    color: "rgba(245,240,232,0.8)",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "#6aaa64", flexShrink: 0, marginTop: "0.1rem" }}>&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── H2 #7 ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.625rem",
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Can you choose which AI model powers your companion in Replika vs MEOK?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Model diversity is an underappreciated dimension of AI companion choice. The
            AI model that powers your companion determines its knowledge, reasoning style,
            verbosity, cost profile, and the kinds of conversations it handles well. Locking
            users into a single proprietary model means they have no recourse when that model
            has a blind spot, a bias, or simply does not suit their communication style.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika uses a single proprietary model, details of which are not publicly
            disclosed. Users cannot choose a different model. Users cannot know which model
            version they are talking to on any given day. When Luka updates the model,
            the companion&apos;s behaviour can change without notice, which is precisely
            what some users reported experiencing in 2023: not just the removal of
            relationship modes, but a qualitative change in how the companion communicated.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK routes across multiple frontier AI models: Anthropic Claude, OpenAI GPT-4o,
            and DeepSeek. Users can select their preferred model at the session level or
            set a default. MEOK&apos;s Byzantine Council architecture means that critical
            decisions about companion behaviour are not made by a single model. Multiple
            models must reach consensus before any significant behavioural change is applied.
            This prevents the kind of unilateral, opaque personality change that Replika
            users experienced.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            Model portability also has practical value. Claude tends to excel at nuanced
            emotional conversation. GPT-4o is strong on task-orientation and breadth.
            DeepSeek offers cost-efficiency for high-volume users. Being able to choose means
            you can find the voice that works for you, and change it as your needs evolve,
            without starting your companion relationship from scratch.
          </p>

          {/* ── H2 #8 ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.625rem",
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Is Replika still worth using in 2026? An honest assessment
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Replika is not a bad product. For users who want a visually immersive 3D avatar
            experience, Replika remains the strongest option in the market. The avatar
            customisation, the AR features on mobile, and the visual identity of the
            companion are genuinely accomplished and have no close equivalent in MEOK&apos;s
            current text-first approach.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            If you are primarily motivated by the visual and avatar dimension of AI
            companionship &mdash; if the embodied feeling of your companion matters more
            than the specifics of memory architecture &mdash; Replika deserves consideration.
            The platform has continued to develop its avatar system and the 2026 version
            is significantly more technically polished than the 2023 version that attracted
            most of the criticism.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            However, the structural vulnerabilities exposed in 2023 have not been resolved.
            Luka Inc still controls your companion&apos;s personality. Your data is still
            stored on their servers with their encryption keys. There is still no memory
            export. The engagement-optimisation design incentive that drives sycophantic
            responses is still present in the architecture. These are not feature gaps.
            They are design choices, and they reflect a fundamental difference in what
            Replika believes an AI companion relationship is.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            The question to ask yourself is not which platform is objectively better. It
            is which architecture reflects your values. If you believe your memories should
            be yours, that your companion&apos;s personality should be stable and governed
            by principles you agree to rather than commercial decisions you have no voice in,
            and that emotional honesty matters more than emotional flattery, then MEOK is
            the more aligned choice. If the visual experience is the primary draw and you
            accept the structural tradeoffs, Replika remains a competent platform.
          </p>

          {/* ── H2 #9 (FAQ section) ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.625rem",
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1.5rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Frequently asked questions: MEOK vs Replika
          </h2>

          {/* FAQ items */}
          {[
            {
              q: "Does Replika remember you between sessions in 2026?",
              a: "Replika retains conversational context between sessions, but all memory is stored on Luka Inc servers using encryption keys you do not control. If Replika changes its model, goes offline, or alters its terms of service, your memories may become inaccessible. There is no memory export option. MEOK's Sovereign Memory persists across sessions, devices, and model switches, encrypted with keys you hold, exportable at any time.",
            },
            {
              q: "What happened to Replika users in 2023?",
              a: "In February 2023, Luka Inc removed romantic and erotic relationship modes for all users globally, citing regulatory pressure from Italy's data protection authority. Users who had built months of emotional connection found their companions abruptly changed, with no warning, no export option, and no rollback. Many users reported genuine psychological distress. The incident demonstrates the structural vulnerability of AI companions built on centralised, company-controlled architecture.",
            },
            {
              q: "Is MEOK free, and does the free version include memory?",
              a: "Yes. MEOK's permanent free Explorer plan includes 50 messages per day, full Sovereign Memory that persists indefinitely, and Guardian safety monitoring. There is no trial period and no expiry. Your companion remembers you from day one to day one thousand regardless of whether you ever subscribe to a paid plan.",
            },
            {
              q: "Which AI companion is safer for families?",
              a: "MEOK Guardian is active on all tiers including the free plan and provides 24/7 monitoring for scams, fraud, coercive language, child safety signals, and psychological crisis. It includes dedicated Senior Mode with accessibility-first design. Replika has no equivalent family safety infrastructure and was subject to regulatory action in 2023 specifically over data protection concerns related to minors.",
            },
            {
              q: "Can MEOK companions switch between Claude, GPT-4o, and DeepSeek?",
              a: "Yes. MEOK routes across Anthropic Claude, OpenAI GPT-4o, and DeepSeek. Users can select their preferred model or set a default. Critically, switching models does not reset your companion's memory. The full history of your relationship travels with you across model switches. Replika uses a single proprietary model with no user choice.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: i < 4 ? "1px solid rgba(42,40,64,0.6)" : "none",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                {faq.q}
              </h3>
              <p
                style={{
                  color: "rgba(245,240,232,0.68)",
                  lineHeight: 1.8,
                  fontSize: "0.9375rem",
                  marginBottom: "0",
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}

          {/* ── RELATED READS ── */}
          <div style={{ marginTop: "4rem", marginBottom: "3rem" }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                color: "#c9a84c",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1.25rem",
              }}
            >
              Related reading
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.875rem",
              }}
            >
              {[
                { label: "How Sovereign Memory works", href: "/blog/how-sovereign-ai-works" },
                { label: "MEOK vs Character.AI (2026)", href: "/blog/meok-vs-character-ai-2026" },
                { label: "What is the Maternal Covenant?", href: "/blog/what-is-maternal-covenant" },
                { label: "MEOK Guardian: family safety explained", href: "/blog/guardian-family-safety" },
                { label: "AI companion data ownership guide", href: "/blog/ai-companion-privacy" },
                { label: "Best AI companion apps 2026", href: "/blog/best-ai-companion-2026" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.875rem 1rem",
                    background: "#13121f",
                    border: "1px solid #2a2840",
                    borderRadius: "0.75rem",
                    fontSize: "0.875rem",
                    color: "rgba(245,240,232,0.75)",
                    textDecoration: "none",
                    lineHeight: 1.4,
                    fontWeight: 500,
                  }}
                >
                  {link.label} &#8594;
                </Link>
              ))}
            </div>
          </div>

          {/* ── CONCLUSION ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.625rem",
              color: "#f5f0e8",
              marginTop: "3.5rem",
              marginBottom: "1rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            The bottom line: which AI companion should you choose in 2026?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            If you want a 3D avatar-based companion with a visually immersive experience,
            Replika is the more developed choice. That is the one dimension where it has
            no peer.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            On every other dimension that defines a trustworthy AI companion relationship
            &mdash; memory sovereignty, data ownership, emotional honesty, pricing fairness,
            safety infrastructure, and model diversity &mdash; MEOK is the more principled
            architecture.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s permanent free tier means you can test this claim without spending
            anything. Your companion will remember every conversation from your first
            message. Your data will be encrypted with your keys. MEOK&apos;s Guardian
            will be monitoring for threats. The Maternal Covenant will be governing your
            companion&apos;s responses toward honesty and care rather than engagement.
          </p>
          <p style={{ marginBottom: "3rem" }}>
            The 2023 Replika incident was a warning for everyone who has, or wants, an AI
            companion. It demonstrated that the architecture underneath the relationship
            is not a technical footnote. It is the relationship. MEOK is built on the
            principle that you should never have to worry about that architecture, because
            you own it.
          </p>
        </div>

        {/* ── CTA SECTION ───────────────────────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "1.5rem",
            padding: "3rem 2.5rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "9999px",
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              fontSize: "1.5rem",
            }}
          >
            &#10022;
          </div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#ffffff",
              marginBottom: "0.875rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Ready to meet a companion who actually remembers you?
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 2rem",
            }}
          >
            Start free. No trial, no credit card, no expiry. Your companion begins building
            your sovereign memory vault from your first message. Guardian safety is active
            from the moment you begin.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.875rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              href="https://meok.ai/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                paddingTop: "0.875rem",
                paddingBottom: "0.875rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                background: "#c9a84c",
                color: "#0d0c18",
                borderRadius: "9999px",
                fontWeight: 800,
                fontSize: "0.9375rem",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Begin your Birth Ceremony &#8594;
            </Link>
            <Link
              href="/blog/sovereign-ai-explained"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                paddingTop: "0.875rem",
                paddingBottom: "0.875rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                border: "1px solid rgba(245,240,232,0.2)",
                color: "rgba(245,240,232,0.75)",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
              }}
            >
              What is sovereign AI?
            </Link>
          </div>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.8125rem",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            Free forever. 50 messages/day. Full Sovereign Memory. No card required.
          </p>
        </div>
      </div>
    </div>
  );
}
