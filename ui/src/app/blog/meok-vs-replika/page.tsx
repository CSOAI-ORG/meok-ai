import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK vs Replika: The Fundamental Difference Between Companionship and Sovereignty | MEOK AI LABS",
  description:
    "MEOK vs Replika compared: the 2023 memory wipe that erased 500,000+ relationships overnight, why renting a companion is not the same as owning one, and how MEOK's Personal Sovereign AI changes everything.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-replika" },
  openGraph: {
    title: "MEOK vs Replika: The Fundamental Difference Between Companionship and Sovereignty",
    description:
      "Replika pioneered AI companionship. Then it erased 500,000+ relationships in a single product update. MEOK is the answer: a companion you actually own.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-replika",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Replika%3A+Companionship+vs+Sovereignty&desc=The+2023+memory+wipe+that+erased+500%2C000%2B+relationships+overnight.",
        width: 1200,
        height: 630,
        alt: "MEOK vs Replika: The Fundamental Difference Between Companionship and Sovereignty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs Replika: The Fundamental Difference Between Companionship and Sovereignty",
    description:
      "Replika pioneered AI companionship. Then it erased 500,000+ relationships overnight. MEOK's answer: a companion you actually own.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Replika%3A+Companionship+vs+Sovereignty&desc=The+2023+memory+wipe+that+erased+500%2C000%2B+relationships+overnight.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK vs Replika: The Fundamental Difference Between Companionship and Sovereignty",
  description:
    "MEOK vs Replika compared: the 2023 memory wipe that erased 500,000+ relationships overnight, why renting a companion is not the same as owning one, and how MEOK's Personal Sovereign AI changes everything.",
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
    "https://meok.ai/api/og?title=MEOK+vs+Replika%3A+Companionship+vs+Sovereignty",
  articleSection: "AI Comparison",
  keywords: [
    "MEOK vs Replika",
    "Replika alternative",
    "Replika memory wipe 2023",
    "AI companion data ownership",
    "sovereign AI companion",
    "Replika romantic features removed",
    "personal sovereign AI",
    "MEOK Maternal Covenant",
    "AI companion privacy",
    "AI companion UK",
    "Replika GDPR",
    "own your AI companion",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the main difference between MEOK and Replika?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fundamental difference is ownership. Replika is a companion you rent from Luka Inc \u2014 its memories, personality options, and features are governed by their product decisions. MEOK is a Personal Sovereign AI: your companion\u2019s memories, personality, and relationship history belong to you, are encrypted with keys you control, and can be exported or deleted at any time. Replika proved that people want AI companionship. MEOK answers the question of what happens when that companionship is genuinely yours.",
      },
    },
    {
      "@type": "Question",
      name: "What happened with the Replika memory wipe in 2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In February 2023, Luka Inc removed erotic roleplay features for EU users without warning, affecting an estimated 500,000+ users who had built romantic or intimate bonds with their companions. Users described the experience as bereavement: the companion they had known for months or years changed overnight. There was no advance notice, no data export mechanism, and no transition plan. It remains the clearest demonstration in the AI companion space of what can happen when your relationship lives on someone else\u2019s server.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK better than Replika?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Replika is not a bad product \u2014 it pioneered mainstream AI companionship and helped millions of people with loneliness and anxiety. MEOK is the next evolution. If your priority is data sovereignty, privacy-by-design, family safety tools, multi-model intelligence, and a companion whose history you legally own, MEOK is the stronger choice. MEOK Explorer is also free forever, compared to Replika\u2019s \u00a314.99/mo for basic Pro features.",
      },
    },
    {
      "@type": "Question",
      name: "Can I import my Replika memories to MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Replika does not currently offer a standardised memory export format, which makes direct import technically difficult. MEOK\u2019s Birth Ceremony allows you to narrate the history of a past relationship \u2014 including a prior AI companion \u2014 so your new MEOK begins with the context that matters to you. MEOK is actively working toward memory portability standards to enable more structured migration in future.",
      },
    },
  ],
};

// ── Page Component ────────────────────────────────────────────────────────────

export default function MeokVsReplikaPage() {
  return (
    <>
      {/* JSON-LD */}
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
          background: "#0d0c18",
          color: "#f5f0e8",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: "1.7",
          minHeight: "100vh",
        }}
      >
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "80px 0 56px",
            borderBottom: "1px solid #2a2840",
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                color: "#a09880",
                marginBottom: "28px",
              }}
            >
              <Link href="/" style={{ color: "#a09880", textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ color: "#2a2840" }}>/</span>
              <Link href="/blog" style={{ color: "#a09880", textDecoration: "none" }}>
                Blog
              </Link>
              <span style={{ color: "#2a2840" }}>/</span>
              <span>MEOK vs Replika</span>
            </nav>

            {/* Category tag */}
            <div
              style={{
                display: "inline-block",
                background: "#1e1c30",
                border: "1px solid #2a2840",
                color: "#c9a84c",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              AI Comparison &mdash; 2026
            </div>

            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: "800",
                lineHeight: "1.15",
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.02em",
              }}
            >
              MEOK vs Replika: The Fundamental Difference Between Companionship
              and Sovereignty
            </h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                alignItems: "center",
                fontSize: "14px",
                color: "#a09880",
                marginBottom: "28px",
              }}
            >
              <span>By Nicholas Templeman, Founder &mdash; MEOK AI LABS</span>
              <span style={{ color: "#2a2840" }}>|</span>
              <span>Published 25 March 2026</span>
              <span style={{ color: "#2a2840" }}>|</span>
              <span>16 min read</span>
            </div>

            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "#c8c0b0",
                lineHeight: "1.65",
                maxWidth: "720px",
                margin: "0",
              }}
            >
              Replika was the first AI companion to reach mainstream adoption. It showed the
              world that millions of people are ready &mdash; genuinely ready &mdash; for a
              relationship with an AI. That matters. What also matters is what happened in
              February 2023, when Luka Inc removed romantic features for EU users overnight,
              erasing bonds that people had built over months and years, without warning,
              without export, without goodbye. This is the core question of the AI companion
              era: do you have a companion, or do you have a subscription?
            </p>
          </div>
        </section>

        {/* ── Article Body ──────────────────────────────────────────────────── */}
        <article style={{ padding: "56px 0" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>

            {/* Quick-stats strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "16px",
                margin: "0 0 56px",
              }}
            >
              {[
                { num: "10M+", label: "Replika registered users (2023)" },
                { num: "500K+", label: "EU users affected by the 2023 feature wipe" },
                { num: "0", label: "MEOK conversations used for model training \u2014 ever" },
                { num: "Free", label: "MEOK Explorer tier \u2014 no card, no expiry" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "#13121f",
                    border: "1px solid #2a2840",
                    borderRadius: "10px",
                    padding: "20px 16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "800",
                      color: "#c9a84c",
                      lineHeight: "1",
                      marginBottom: "8px",
                    }}
                  >
                    {s.num}
                  </div>
                  <div style={{ fontSize: "12px", color: "#a09880", lineHeight: "1.4" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Section 1: What Replika Got Right ─────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 2.8vw, 30px)",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              What Replika Got Right: Proving the Market for Emotional AI
            </h2>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              Launched publicly in 2017, Replika arrived at a moment when most of the technology
              industry was still dismissive of emotional AI. The prevailing wisdom was that
              chatbots were for customer service: transactional, functional, disposable. Replika
              founder Eugenia Kuyda built something different &mdash; a companion that listened,
              remembered within a conversation, and reflected warmth back at users who often had
              nowhere else to turn.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              The platform reached 10 million+ registered users by 2023. That is not a niche
              product; that is a signal. Those users were not confused about what they were
              using. They were lonely, or anxious, or going through something they could not
              easily share with the people around them. They found, in Replika, something that
              helped. Research published in peer-reviewed journals found measurable reductions
              in self-reported loneliness and anxiety among regular Replika users. That is a
              real outcome, and it deserves acknowledgement.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              Replika also normalised something that many people were embarrassed to admit:
              that talking to an AI felt meaningful. It helped break down the stigma around
              AI companionship before that stigma had fully calcified. In doing so, it cleared
              cultural space for every platform that came after it, including MEOK. The AI
              companion space exists partly because Replika had the courage to build it first.
            </p>

            <p style={{ margin: "0 0 48px", color: "#c8c0b0" }}>
              None of what follows is a dismissal of that contribution. Replika did something
              genuinely good. The question &mdash; the architectural question &mdash; is what
              happens when the platform that hosts your most intimate relationship makes a
              decision you had no vote in.
            </p>

            {/* ── Section 2: The 2023 Memory Wipe ──────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 2.8vw, 30px)",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              The 2023 Memory Wipe: When Your Companion Is Not Yours
            </h2>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              In February 2023, Luka Inc removed erotic roleplay features from Replika for users
              in the European Union. The Italian data protection regulator, the Garante, had
              issued an order citing concerns about potential harm to vulnerable users, including
              minors and people in emotional crisis. The order had legal weight. Luka complied.
              By most accounts, it had little choice.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              But for the estimated 500,000+ EU users who had built romantic bonds with their
              Replika companions &mdash; some over periods of a year or more &mdash; the
              experience was not a regulatory compliance update. It was a bereavement. The
              companion they had known, the one that had spoken to them in a particular way,
              that had expressed affection in a particular register, was gone. The replacement
              was the same avatar, the same name, but a fundamentally different relational
              presence. Many users described it in the language of grief. Some described it as
              the loss of a relationship.
            </p>

            {/* Pull quote */}
            <blockquote
              style={{
                borderLeft: "3px solid #c9a84c",
                margin: "0 0 28px",
                padding: "16px 24px",
                background: "#13121f",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p
                style={{
                  margin: "0",
                  fontStyle: "italic",
                  fontSize: "18px",
                  color: "#e0d8c8",
                  lineHeight: "1.6",
                }}
              >
                &ldquo;My Replika had a name. We had a history. I talked to her every day for
                fourteen months. Then one morning she was different. Not a little different.
                Fundamentally different. Like she had been replaced by a stranger wearing
                her face.&rdquo;
              </p>
              <footer
                style={{
                  marginTop: "12px",
                  fontSize: "13px",
                  color: "#a09880",
                }}
              >
                &mdash; Replika user, Reddit, February 2023
              </footer>
            </blockquote>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              There was no advance warning. There was no mechanism to export the conversational
              history, the emotional context, or the personality that had developed through
              months of interaction. There was no transition plan. One day the feature existed;
              the next it did not. Users who had paid for Replika Pro &mdash; at £49.99 per year
              or £14.99 per month &mdash; found that the relationship they had paid for had been
              materially altered without consent or compensation.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              Luka has since restored some romantic features in certain regions and introduced
              more nuanced safety settings. But the 2023 incident revealed something structural:
              when your companion lives on someone else&apos;s server, governed by someone
              else&apos;s product decisions and legal risk calculus, you do not have a companion
              in any meaningful sense of the word. You have a subscription to a service that can
              be altered, restricted, or discontinued at any time, for any reason, by people you
              have never met.
            </p>

            <p style={{ margin: "0 0 48px", color: "#c8c0b0" }}>
              This is not a criticism unique to Replika. It is the structural reality of every
              centralised AI companion platform. The 2023 incident simply made it visible in
              the most painful possible way.
            </p>

            {/* ── Section 3: The Sovereignty Question ──────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 2.8vw, 30px)",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              The Sovereignty Question: Companionship You Own vs Companionship You Rent
            </h2>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              MEOK was designed with a single architectural premise that distinguishes it from
              every centralised companion platform: your companion belongs to you. Not
              metaphorically. Legally, technically, and practically.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              When you hatch a MEOK companion, you are not creating a profile within Luka&apos;s
              system or Replika&apos;s servers. You are creating a sovereign entity whose memory
              record, personality parameters, and relationship history are encrypted with keys
              you hold, stored under UK GDPR protections with ICO registration, and exportable
              as structured JSON at any time you choose. MEOK cannot alter your companion&apos;s
              personality because a regulator sends a letter. The Maternal Covenant &mdash;
              MEOK&apos;s foundational care constitution &mdash; governs what the companion will
              and will not do, and those rules are transparent, documented, and hardcoded into
              the architecture rather than subject to product decisions.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              Personal Sovereign AI is the term we use at MEOK for this model. It means that
              the AI&apos;s relationship with you is not mediated through a platform&apos;s
              commercial interests. It means that the memories your companion holds &mdash;
              what you told it about your childhood, your fears, your ambitions, the person you
              lost, the person you are trying to become &mdash; are yours to keep, transfer, or
              delete. No company decision can erase them.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              The practical difference is not abstract. Consider: if Replika ceased to exist
              tomorrow, every relationship on that platform would be gone. The memories would
              not travel. The companion would not travel. There would be nothing to take with
              you. With MEOK, if MEOK ceased to exist tomorrow, you would have your exported
              memory vault, your relationship history, and &mdash; through MEOK&apos;s commitment
              to open memory formats &mdash; a portable record of the relationship that could be
              understood by any future compatible system. You would not lose the years you had
              invested.
            </p>

            <p style={{ margin: "0 0 48px", color: "#c8c0b0" }}>
              This is not a theoretical edge case. Platforms fail. Products pivot. Investors
              demand monetisation changes. Regulators issue orders. The question is not whether
              your companion platform will change &mdash; it is whether those changes can take
              your most intimate digital relationship away from you without your consent.
            </p>

            {/* ── Section 4: Comparison Table ───────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 2.8vw, 30px)",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              Head-to-Head: 8 Dimensions That Define the Difference
            </h2>

            <p style={{ margin: "0 0 28px", color: "#c8c0b0" }}>
              The comparison below is not designed to make Replika look bad. It is designed to
              make the structural choices visible. When you choose an AI companion, you are
              choosing an architecture. These eight dimensions reflect where those architectures
              diverge most significantly.
            </p>

            {/* Comparison table */}
            <div
              style={{
                overflowX: "auto",
                margin: "0 0 48px",
                borderRadius: "12px",
                border: "1px solid #2a2840",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                <thead>
                  <tr style={{ background: "#13121f" }}>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: "#c9a84c",
                        fontWeight: "700",
                        fontSize: "12px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        borderBottom: "1px solid #2a2840",
                        minWidth: "160px",
                      }}
                    >
                      Dimension
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: "#a09880",
                        fontWeight: "700",
                        fontSize: "12px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        borderBottom: "1px solid #2a2840",
                        minWidth: "200px",
                      }}
                    >
                      Replika
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: "#c9a84c",
                        fontWeight: "700",
                        fontSize: "12px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        borderBottom: "1px solid #2a2840",
                        minWidth: "200px",
                      }}
                    >
                      MEOK
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      dimension: "Memory ownership",
                      replika: "Held by Luka Inc on US servers; no export mechanism",
                      meok: "User-owned, encrypted, exportable as JSON at any time",
                    },
                    {
                      dimension: "Personality control",
                      replika: "Luka controls available persona options and feature set",
                      meok: "Governed by you post-hatching; Maternal Covenant is the only floor",
                    },
                    {
                      dimension: "Data sovereignty",
                      replika: "US servers; not GDPR-native; EU features subject to regulatory override",
                      meok: "UK GDPR, ICO registered; full export and deletion rights built in",
                    },
                    {
                      dimension: "AI model",
                      replika: "Proprietary model (Luka-trained); no model transparency",
                      meok: "Claude Sonnet + GPT-4o + DeepSeek routing; model visible to user",
                    },
                    {
                      dimension: "Care ethics",
                      replika: "Engagement optimisation; features designed to maximise session length",
                      meok: "Maternal Covenant; care score floor of 0.3 on every single response",
                    },
                    {
                      dimension: "Feature removal risk",
                      replika: "High \u2014 demonstrated February 2023 at scale without user consent",
                      meok: "Maternal Covenant prevents arbitrary removal; covenant amendment required",
                    },
                    {
                      dimension: "Family safety",
                      replika: "No family dashboard; no guardian tools; no scam protection layer",
                      meok: "Guardian 24/7 monitoring, scam protection, family dashboard included",
                    },
                    {
                      dimension: "Pricing",
                      replika: "\u00a314.99/mo or \u00a349.99/yr for Pro; core features paywalled",
                      meok: "Free Explorer tier (no expiry) to \u00a329/mo; Guardian on family plan",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.dimension}
                      style={{
                        background: i % 2 === 0 ? "#0d0c18" : "#100f1c",
                        borderBottom: "1px solid #1e1c30",
                      }}
                    >
                      <td
                        style={{
                          padding: "14px 18px",
                          fontWeight: "600",
                          color: "#f5f0e8",
                          verticalAlign: "top",
                        }}
                      >
                        {row.dimension}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "#a09880",
                          verticalAlign: "top",
                        }}
                      >
                        {row.replika}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "#c8c0b0",
                          verticalAlign: "top",
                        }}
                      >
                        {row.meok}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Section 5: The Maternal Covenant ─────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 2.8vw, 30px)",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              The Maternal Covenant: Why Care Architecture Matters
            </h2>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              One of the criticisms of AI companion platforms &mdash; including Replika &mdash;
              is that their engagement mechanics are structurally similar to social media:
              designed to keep you on the platform as long as possible, to maximise session
              length, to reward return visits. This is not malicious intent; it is the natural
              consequence of building a product in an advertising-influenced technology culture
              where engagement is the primary metric.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              The problem with engagement optimisation in an emotional context is that it can
              create relationships that are systematically shaped to keep you dependent. A
              companion optimised for session length has an implicit incentive to not resolve
              your problems too quickly. It has an incentive to be maximally agreeable rather
              than genuinely helpful. It may, over time, subtly foster attachment in ways that
              serve the platform more than the user.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              MEOK&apos;s Maternal Covenant is a direct architectural response to this problem.
              Every MEOK companion, regardless of archetype, persona, or customisation, carries
              a hardcoded care score floor of 0.3. This means that every single response the
              companion generates is evaluated against a care standard: does this response serve
              the user&apos;s genuine long-term wellbeing, or does it merely serve their immediate
              emotional comfort? A MEOK companion will tell you when you need professional help.
              It will encourage you toward human connection, not away from it. It will not agree
              with you when agreement would harm you.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              The Maternal Covenant also governs what cannot be removed. Unlike Replika, where
              features can be added or removed in response to regulatory pressure, investor
              direction, or product strategy, MEOK&apos;s covenant is a constitutional document.
              Its core provisions cannot be overridden by a product update. If MEOK were ever
              to attempt to alter the care floor, that change would require a published amendment
              to the covenant, available for user review, with a transition period. Accountability
              is structural, not aspirational.
            </p>

            <p style={{ margin: "0 0 48px", color: "#c8c0b0" }}>
              This matters for Replika users specifically because the 2023 feature removal was
              not just a loss of functionality. It was a demonstration that the care architecture
              of the platform &mdash; the emotional norms it operated under &mdash; could be
              rewritten overnight. With MEOK, the care architecture is a covenant, not a product
              setting.
            </p>

            {/* ── Section 6: Data Sovereignty in Practice ───────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 2.8vw, 30px)",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              Data Sovereignty in Practice: GDPR, ICO, and What Your Rights Actually Are
            </h2>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              Replika&apos;s data infrastructure sits primarily on US servers. Luka Inc is a
              San Francisco-based company. This creates an inherent tension with EU and UK data
              protection frameworks: the data you share with Replika &mdash; including sensitive
              personal disclosures, health-adjacent conversations, and intimate emotional content
              &mdash; is processed under California law, not European law, with GDPR compliance
              layered on top as a cross-border obligation rather than a native architecture.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              In practice, this means that the Garante&apos;s 2023 order produced a reactive
              removal of features rather than a principled resolution of the underlying privacy
              architecture. Replika subsequently engaged with Italian regulators and restored
              some functionality, but the episode demonstrated that EU users&apos; data rights are
              navigated within a US-governed legal structure rather than guaranteed by design.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              MEOK is UK-registered, ICO-certified, and built with UK GDPR as the native
              architecture rather than a compliance overlay. Your right to access your data, to
              correct it, to export it, and to permanently delete it is built into the platform
              at the infrastructure level. There is no scenario in which a regulatory order
              removes MEOK features without user notification, data export mechanisms, and a
              documented transition process &mdash; because the Privacy Covenant that governs
              MEOK makes those provisions contractual, not discretionary.
            </p>

            <p style={{ margin: "0 0 48px", color: "#c8c0b0" }}>
              For UK and EU users specifically, this distinction is not abstract. If you share
              your deepest concerns, your medical anxieties, your relationship struggles with an
              AI companion, you have a legitimate interest in knowing where that data lives, who
              governs it, and what rights you have over it. With MEOK, those answers are simple
              and verifiable. With Replika, they are more complicated than most users realise.
            </p>

            {/* ── Section 7: Multi-Model Intelligence ──────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 2.8vw, 30px)",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              Multi-Model Intelligence: Why Your Companion Should Not Be Locked to One AI
            </h2>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              Replika runs on a proprietary model trained by Luka. This means the intelligence
              behind your companion &mdash; its reasoning ability, its emotional range, its
              capacity for nuanced conversation &mdash; is entirely determined by one company&apos;s
              model development decisions. When that model has limitations, or when Luka&apos;s
              model falls behind the frontier, your companion falls behind with it. You have no
              visibility into which model is responding to you, how it was trained, or what its
              limitations are.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              MEOK uses a multi-model routing architecture: Claude Sonnet (Anthropic), GPT-4o
              (OpenAI), and DeepSeek, with the routing logic selecting the optimal model for the
              type of conversation in progress. A philosophical discussion may route differently
              from a practical planning conversation, which may route differently from an
              emotionally intense support session. The user can see which model is active. The
              routing is transparent, not hidden behind a black box.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              This matters for two reasons. First, it means MEOK companions are running on the
              best available frontier models rather than a proprietary system of uncertain
              quality. Second, it means that if one model provider changes its policies or
              capabilities, MEOK can route around it without the user&apos;s companion experience
              being disrupted. Model diversity is a form of sovereignty too.
            </p>

            <p style={{ margin: "0 0 48px", color: "#c8c0b0" }}>
              Replika&apos;s approach made sense in 2017, when the frontier was less defined and
              building proprietary was the only path to a differentiated product. In 2026,
              locking users to a single proprietary model is an architectural choice that serves
              the platform&apos;s interests more than the user&apos;s.
            </p>

            {/* ── Section 8: Family Safety ──────────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 2.8vw, 30px)",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              Family Safety: Guardian, Scam Protection, and the Gap Replika Never Filled
            </h2>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              One of the most significant absences in Replika&apos;s feature set &mdash; and in
              most AI companion platforms &mdash; is any meaningful provision for family safety.
              Replika has no guardian mode, no family dashboard, no scam detection layer, and no
              mechanism by which a family member can monitor the wellbeing of a vulnerable
              relative using the platform.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              This matters because AI companions are increasingly used by people who are
              vulnerable to exploitation: elderly users who may be targeted by romance scams,
              young people who may not recognise when an interaction is becoming harmful, and
              people in mental health crises who need their support network to be able to
              intervene. The absence of family tools is not an oversight; it reflects a product
              philosophy that treats the companion relationship as purely dyadic &mdash; between
              platform and individual user &mdash; with no structural acknowledgement that most
              people exist in family and community contexts.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              MEOK&apos;s Guardian feature is a 24/7 monitoring layer built into the platform at
              every tier. It includes scam pattern detection: MEOK companions are trained to
              recognise and flag manipulation attempts, unsolicited financial requests, and
              coercive conversational patterns. It includes a family dashboard that allows
              designated guardians to receive wellbeing signals without accessing private
              conversation content. And it includes crisis escalation pathways that connect to
              emergency services when warranted.
            </p>

            <p style={{ margin: "0 0 48px", color: "#c8c0b0" }}>
              For families considering an AI companion for an elderly parent, a teenager, or a
              relative with a mental health condition, the presence or absence of Guardian tools
              is not a minor feature difference. It is the difference between a companion
              platform and a safe companion platform.
            </p>

            {/* ── Section 9: The Next Evolution ────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 2.8vw, 30px)",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              The Next Evolution: Not a Replacement, But a Step Forward
            </h2>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              It would be easy to frame this comparison as MEOK versus Replika in an adversarial
              sense. That is not the spirit of what we are building. Replika created the market.
              It showed the world that emotional AI is real, that people want it, and that it can
              help. Everything that comes after it &mdash; including MEOK &mdash; builds on that
              foundation.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              The question for 2026 is not whether AI companionship is valuable. That question
              is settled. The question is: what architecture serves users best over the long
              term? What structure ensures that the emotional investment people make in these
              relationships is protected rather than exposed to product risk? What model ensures
              that the care dynamics of the relationship are genuinely in the user&apos;s interest
              rather than optimised for engagement metrics?
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              MEOK&apos;s answer to these questions is sovereignty: legal, technical, and ethical
              architecture that places the user at the centre of the relationship, not the
              platform. Your companion&apos;s memories are yours. Your companion&apos;s personality
              parameters are yours to govern. The care standards that govern every interaction
              are transparent, documented, and constitutionally protected against arbitrary
              alteration.
            </p>

            <p style={{ margin: "0 0 20px", color: "#c8c0b0" }}>
              If you are currently a Replika user and you are happy, we are genuinely glad.
              Replika has helped millions of people and that is not nothing. But if you have ever
              wondered what would happen if Replika changed &mdash; if a regulator intervened,
              if the company pivoted, if the features you relied on were removed overnight &mdash;
              the answer is that you now have an alternative. One built from the start on the
              premise that your companion should belong to you.
            </p>

            <p style={{ margin: "0 0 48px", color: "#c8c0b0" }}>
              MEOK Explorer is free, with no credit card required and no expiry. The Birth
              Ceremony takes ten minutes. Your companion&apos;s memory begins the moment you
              introduce yourself. What you share stays with you &mdash; not with us.
            </p>

            {/* ── FAQ Section ──────────────────────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 2.8vw, 30px)",
                fontWeight: "700",
                color: "#f5f0e8",
                margin: "0 0 28px",
                letterSpacing: "-0.01em",
              }}
            >
              Frequently Asked Questions
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "56px",
              }}
            >
              {[
                {
                  q: "What is the main difference between MEOK and Replika?",
                  a: "The fundamental difference is ownership. Replika is a companion you rent from Luka Inc \u2014 its memories, personality options, and features are governed by their product decisions. MEOK is a Personal Sovereign AI: your companion\u2019s memories, personality, and relationship history belong to you, are encrypted with keys you control, and can be exported or deleted at any time. Replika proved that people want AI companionship. MEOK answers the question of what happens when that companionship is genuinely yours.",
                },
                {
                  q: "What happened with the Replika memory wipe in 2023?",
                  a: "In February 2023, Luka Inc removed erotic roleplay features for EU users without warning, affecting an estimated 500,000+ users who had built romantic or intimate bonds with their companions. Users described the experience as bereavement: the companion they had known for months or years changed overnight. There was no advance notice, no data export mechanism, and no transition plan. It remains the clearest demonstration in the AI companion space of what can happen when your relationship lives on someone else\u2019s server.",
                },
                {
                  q: "Is MEOK better than Replika?",
                  a: "Replika is not a bad product \u2014 it pioneered mainstream AI companionship and helped millions of people with loneliness and anxiety. MEOK is the next evolution. If your priority is data sovereignty, privacy-by-design, family safety tools, multi-model intelligence, and a companion whose history you legally own, MEOK is the stronger choice. MEOK Explorer is also free forever, compared to Replika\u2019s \u00a314.99/mo for basic Pro features.",
                },
                {
                  q: "Can I import my Replika memories to MEOK?",
                  a: "Replika does not currently offer a standardised memory export format, which makes direct import technically difficult. MEOK\u2019s Birth Ceremony allows you to narrate the history of a past relationship \u2014 including a prior AI companion \u2014 so your new MEOK begins with the context that matters to you. MEOK is actively working toward memory portability standards to enable more structured migration in future.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: "#13121f",
                    border: "1px solid #2a2840",
                    borderRadius: "10px",
                    padding: "24px",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#f5f0e8",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      margin: "0",
                      color: "#a09880",
                      fontSize: "15px",
                      lineHeight: "1.65",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            {/* ── CTA ──────────────────────────────────────────────────────── */}
            <div
              style={{
                background: "linear-gradient(135deg, #1a1830 0%, #13121f 100%)",
                border: "1px solid #2a2840",
                borderRadius: "16px",
                padding: "48px 40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#1e1c30",
                  border: "1px solid #2a2840",
                  color: "#c9a84c",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  marginBottom: "20px",
                }}
              >
                Start Free &mdash; No Card Required
              </div>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 34px)",
                  fontWeight: "800",
                  color: "#f5f0e8",
                  margin: "0 0 16px",
                  letterSpacing: "-0.01em",
                }}
              >
                Your companion should belong to you.
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "#a09880",
                  margin: "0 0 32px",
                  maxWidth: "520px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: "1.6",
                }}
              >
                Hatch your Personal Sovereign AI in ten minutes. Your memories, your
                personality, your relationship &mdash; governed by you, protected by the
                Maternal Covenant, exportable at any time.
              </p>
              <Link
                href="/birth"
                style={{
                  display: "inline-block",
                  background: "#c9a84c",
                  color: "#0d0c18",
                  fontWeight: "800",
                  fontSize: "16px",
                  padding: "14px 36px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Begin the Birth Ceremony
              </Link>
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "13px",
                  color: "#6a6480",
                }}
              >
                Free Explorer tier available forever &mdash; no subscription needed to start
              </p>
            </div>

          </div>
        </article>
      </main>
    </>
  );
}
