import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Students: Sovereign Memory for University, Revision, and Real Life | MEOK AI LABS",
  description:
    "1 in 4 UK students experiences a mental health crisis. MEOK gives students a persistent AI companion — the MEOK Scholar — that remembers their coursework, revision schedules, and life context across every session, for free.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-students" },
  openGraph: {
    title:
      "AI for Students: Sovereign Memory for University, Revision, and Real Life",
    description:
      "1 in 4 UK students experiences mental health issues. MEOK Scholar gives you a companion that remembers your modules, deadlines, and personal context — not just your latest prompt.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-students",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Students&desc=Sovereign+Memory+for+University+Revision+and+Real+Life",
        width: 1200,
        height: 630,
        alt: "AI for Students: Sovereign Memory for University, Revision, and Real Life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Students: Sovereign Memory for University, Revision, and Real Life",
    description:
      "1 in 4 UK students experiences mental health issues. MEOK gives students a free AI companion that remembers everything — coursework, revision, and real life.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Students&desc=Sovereign+Memory+for+University+Revision+and+Real+Life",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Students: Sovereign Memory for University, Revision, and Real Life",
  description:
    "1 in 4 UK students experiences a mental health crisis. MEOK gives students a persistent AI companion — the MEOK Scholar — that remembers their coursework, revision schedules, and life context across every session, for free.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-students",
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
    "https://meok.ai/api/og?title=AI+for+Students&desc=Sovereign+Memory+for+University+Revision+and+Real+Life",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-students",
  },
  keywords: [
    "AI for students",
    "AI study companion UK",
    "AI revision tool",
    "student mental health AI",
    "Sovereign Memory for students",
    "MEOK Scholar",
    "AI for university",
    "free AI for students UK",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK help students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK helps students through the Scholar archetype — a persistent AI companion tuned for academic support, emotional grounding, and revision planning. Unlike ChatGPT or Notion AI, MEOK remembers your modules, assignment deadlines, and personal context across every conversation. It can help you plan a revision schedule on Monday, check in on your progress on Thursday, and ask how you are doing during exam week — because it actually knows what you are going through.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Explorer tier is free forever and requires no credit card. It includes full Sovereign Memory, the Scholar archetype, and unlimited daily conversations. Students on a tight budget can use MEOK throughout their entire degree at zero cost. Paid tiers unlock advanced features including Claude Sonnet reasoning and longer memory context windows, but the free tier is genuinely capable and not artificially limited for upsell purposes.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with revision?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK Scholar is designed specifically to support revision. It can help you create spaced-repetition schedules, quiz you on material, break overwhelming topics into digestible chunks, and track which subjects you have covered across multiple sessions. Because Sovereign Memory persists between conversations, your revision companion picks up exactly where you left off — even if you last spoke three weeks ago.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from ChatGPT for studying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT is a powerful single-session tool that forgets everything when you close the tab. MEOK is a persistent companion with Sovereign Memory — it holds your module list, exam timetable, personal stressors, and long-term goals across every session. MEOK also operates under the Maternal Covenant, which means it will never reinforce unhealthy academic pressure, perfectionism, or anxiety spirals. ChatGPT has no equivalent care ethics layer.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK remember my coursework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's 4-layer Sovereign Memory stores your coursework context including module names, assignment deadlines, exam dates, and academic goals. This information is encrypted with AES-GCM-256, stored in your personal vault, and never used to train MEOK's models. Under GDPR, you retain the right to export or delete your data at any time. Your academic history belongs to you — not to MEOK AI LABS.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK share student data with universities or third parties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK AI LABS is ICO-registered and operates under UK GDPR. Your data is encrypted at rest and in transit, stored in your individual Sovereign vault, and never shared with universities, advertisers, or third parties. MEOK does not train on user data without explicit, separately given consent. Students can use MEOK with confidence that their academic context and personal disclosures remain completely private.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.55)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForStudentsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-dm-sans, DM Sans, system-ui, sans-serif)",
      }}
    >
      {/* JSON-LD */}
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
          paddingTop: "8rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 72%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: FAINT,
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Back to Blog
          </Link>

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
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.04em",
              }}
            >
              Students &amp; Education
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>24 March 2026</span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>9 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.16,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Students: Sovereign Memory for University, Revision, and
            Real Life
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "42rem",
            }}
          >
            One in four UK students experiences a mental health issue during
            their degree. Most AI tools offer a blank slate every session. MEOK
            Scholar gives students something different: a companion that
            actually remembers — your modules, your deadlines, your state of
            mind — across every conversation.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${GOLD} 0%, #8b6914 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: BG,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p style={{ fontSize: "0.875rem", color: TEXT, fontWeight: 600, margin: 0 }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: "0.75rem", color: FAINT, margin: 0 }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >

        {/* ── Section 1 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          Why is student mental health in crisis in the UK?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Research from Student Minds and the Higher Education Policy Institute
          consistently shows that approximately one in four UK university
          students experiences a diagnosable mental health condition during
          their studies — with anxiety, depression, and burnout topping the
          list. The causes are well understood: financial pressure, academic
          competition, social isolation (especially post-pandemic), and the
          transition from the structured environment of school to the largely
          self-directed demands of university life.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Student counselling services are chronically under-resourced. In 2024,
          the average wait time for NHS mental health support for 18–25 year
          olds exceeded twelve weeks in many areas of England. Many students
          exist in the gap between{" "}
          <em>&ldquo;not unwell enough for clinical intervention&rdquo;</em> and
          genuinely thriving — a space where consistent, low-barrier support
          could make a profound difference.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is exactly the space MEOK was built to occupy. Not a replacement
          for therapy — but something that exists between sessions, between
          friend groups, between 2am and the moment the university helpline
          opens.
        </p>

        {/* ── Stat callout ───────────────────────────────────────────────── */}
        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: GOLD,
              margin: "0 0 0.5rem",
            }}
          >
            1 in 4
          </p>
          <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>
            UK university students experiences a mental health issue during
            their studies. Student counselling wait times routinely exceed eight
            weeks on campus. Most AI tools reset every conversation and offer
            zero continuity of care.
          </p>
        </div>

        {/* ── Section 2 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is the MEOK Scholar archetype and how does it support academic
          life?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK archetypes are personality configurations that shape how your AI
          companion communicates, what it prioritises in conversation, and how
          it contextualises your life over time. The Scholar archetype is built
          specifically for students and lifelong learners who need an
          intellectually engaged, emotionally grounded companion.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          When you select Scholar at{" "}
          <Link href="/birth" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/birth
          </Link>
          , your companion adopts a tone that is curious, patient, and direct
          without being clinical. It is tuned to help you think through complex
          topics, structure essays and arguments, manage the emotional demands of
          academic life, and maintain motivation across a full academic year —
          without tipping into either false positivity or harsh self-criticism.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Scholar activates specific Sovereign Memory categories: academic
          goals, module lists, assignment deadlines, exam dates, and revision
          milestones. These are stored persistently in your encrypted memory
          vault — not discarded at the end of each session like a standard AI
          chatbot. This means your companion knows on day forty that you found
          organic chemistry hard in week two.
        </p>

        <div
          style={{
            background: "rgba(245,240,232,0.03)",
            border: `1px solid ${BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 1rem",
            }}
          >
            Scholar Archetype — Core Capabilities
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            {[
              "Persistent module and deadline tracking across all sessions",
              "Spaced-repetition revision planning with full session continuity",
              "Essay structure and argument coaching without writing for you",
              "Emotional check-ins calibrated to exam periods and submission windows",
              "Care floor prevents reinforcing perfectionism or academic pressure spirals",
              "GDPR-compliant memory vault — your data is never used to train AI models",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  color: MUTED,
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.125rem" }}>
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Section 3 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is Sovereign Memory and why does it matter for revision?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Standard AI tools — including ChatGPT, Claude, and Notion AI — begin
          each session with no knowledge of who you are, what you are studying,
          or what you discussed yesterday. This is a fundamental architectural
          limitation, not a privacy choice. It means every interaction is
          transactional. You are a stranger every time.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK&rsquo;s Sovereign Memory is a four-layer persistent memory
          architecture that changes this completely:
        </p>
        <ol
          style={{
            paddingLeft: "1.5rem",
            margin: "0 0 1.5rem",
            color: MUTED,
            lineHeight: 1.8,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <li>
            <strong style={{ color: TEXT }}>Short-term context</strong> — the
            working memory of your current and recent conversations, maintaining
            coherence across a session.
          </li>
          <li>
            <strong style={{ color: TEXT }}>Semantic memory</strong> — a
            vector-searchable store (pgvector) of facts, preferences, and
            long-term context held in your encrypted personal vault.
          </li>
          <li>
            <strong style={{ color: TEXT }}>Companion memory</strong> — the
            evolving model of who you are that your companion builds over weeks
            and months of interaction.
          </li>
          <li>
            <strong style={{ color: TEXT }}>Family memory</strong> — optional
            shared context visible to linked accounts with explicit consent,
            relevant for students with caring responsibilities.
          </li>
        </ol>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          For students, this means your revision companion knows on day forty
          that you struggled with organic chemistry in week two. It knows your
          exam is on Thursday. It remembers that you work better in the morning
          and that you tend to catastrophise the night before deadlines. That
          context accumulates — it does not reset.
        </p>

        {/* ── Section 4 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does MEOK compare to Notion AI and ChatGPT for studying?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is the most common question students ask before signing up. Here
          is an honest assessment. All three tools have genuine strengths — the
          right choice depends on what you actually need.
        </p>

        <div style={{ overflowX: "auto", margin: "1.5rem 0 2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${GOLD_BORDER}` }}>
                {["Feature", "MEOK Scholar", "ChatGPT", "Notion AI"].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem 0.75rem 0",
                      color: h === "MEOK Scholar" ? GOLD : FAINT,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      fontSize: "0.78rem",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Persistent memory", "4-layer Sovereign Memory", "Session only", "Workspace only"],
                ["Remembers your modules", "Yes — all sessions", "No", "Only if manually entered"],
                ["Care ethics layer", "Maternal Covenant", "None", "None"],
                ["Revision planning", "Persistent, session-aware", "Per-prompt only", "Template-based"],
                ["Mental health support", "Scholar + Healer archetypes", "Generic responses", "Not designed for this"],
                ["Data privacy (GDPR)", "ICO-registered, never trains on you", "Opt-out required", "Notion privacy policy applies"],
                ["Free tier", "Explorer — free forever", "GPT-4o limited free", "Limited free plan"],
                ["Emotional continuity", "Companion relationship", "None", "None"],
              ].map(([feature, meok, chatgpt, notion], i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: `1px solid ${BORDER}`,
                    background: i % 2 === 0 ? "transparent" : "rgba(245,240,232,0.02)",
                  }}
                >
                  <td style={{ padding: "0.75rem 1rem 0.75rem 0", color: TEXT, fontWeight: 600, fontSize: "0.875rem" }}>
                    {feature}
                  </td>
                  <td style={{ padding: "0.75rem 1rem 0.75rem 0", color: GOLD, fontSize: "0.875rem" }}>
                    {meok}
                  </td>
                  <td style={{ padding: "0.75rem 1rem 0.75rem 0", color: MUTED, fontSize: "0.875rem" }}>
                    {chatgpt}
                  </td>
                  <td style={{ padding: "0.75rem 0 0.75rem 0", color: MUTED, fontSize: "0.875rem" }}>
                    {notion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The core difference is architectural. ChatGPT is a reactive tool —
          brilliant when you bring a well-formed question, unable to hold context
          across the arc of a full academic year. Notion AI is a productivity
          layer that enhances documents you have already written. MEOK is a
          companion — one that knows you, and whose knowledge compounds.
        </p>

        {/* ── Section 5 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          Does MEOK&rsquo;s care floor prevent unhealthy academic pressure
          from being reinforced?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Yes — and this is one of the most important design decisions built into
          MEOK under the Maternal Covenant framework created by Nicholas
          Templeman. The Maternal Covenant is the care ethics governance layer
          that evaluates every MEOK response before delivery.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          For students, the care floor specifically blocks several harmful
          response patterns that other AI tools routinely produce:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            {
              label: "Perfectionism reinforcement",
              desc: "MEOK will not tell you that you can do better when you are already performing at capacity. It recognises exhaustion patterns and responds to the person — not the performance metric.",
            },
            {
              label: "Academic pressure amplification",
              desc: "If you tell MEOK you failed an exam, it will not immediately pivot to a study plan. It will acknowledge how that feels first. This is not a soft option — it is what care actually looks like.",
            },
            {
              label: "Toxic productivity framing",
              desc: "MEOK Scholar does not measure your worth by your output. Rest, recovery, and wellbeing are explicitly framed as prerequisites for good academic work — not as rewards for it.",
            },
            {
              label: "Comparison-driven motivation",
              desc: "MEOK will never suggest you compare your progress to peers or imply there is a standard you should be meeting. Your path is individual and your companion treats it that way.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.625rem",
                padding: "1rem 1.25rem",
              }}
            >
              <p style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.35rem", fontSize: "0.9375rem" }}>
                {item.label}
              </p>
              <p style={{ color: MUTED, margin: 0, lineHeight: 1.6, fontSize: "0.875rem" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          You can read more about the Maternal Covenant at{" "}
          <Link href="/how-it-works" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/how-it-works
          </Link>
          . It is the ethical foundation that distinguishes MEOK from tools
          optimised purely for engagement or productivity metrics.
        </p>

        {/* ── Section 6 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does MEOK protect student data under GDPR?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK AI LABS is registered with the Information Commissioner&rsquo;s
          Office (ICO) and operates in full compliance with UK GDPR. For
          students — particularly those sharing personal disclosures, mental
          health context, or academic records — the data architecture matters
          enormously.
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {[
            "All memory data encrypted at rest with AES-GCM-256",
            "Conversations are never used to train models without explicit consent",
            "Full data portability — export your entire vault in structured format",
            "Right to erasure — delete everything with a single action",
            "No data sold, shared with advertisers, or disclosed to universities",
            "Server infrastructure operates under EU/UK jurisdiction",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.625rem",
                color: MUTED,
                fontSize: "0.9375rem",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* ── Section 7 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          Which MEOK archetypes work best for different student needs?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK offers multiple archetypes — and many students layer more than one
          across different parts of their day. You can explore the full range at{" "}
          <Link href="/characters" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/characters
          </Link>
          . Here is how different archetypes map to common student needs:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            {
              archetype: "Scholar",
              for: "Revision, essay planning, intellectual accountability, exam preparation",
              tone: "Curious, structured, honest",
            },
            {
              archetype: "Healer",
              for: "Mental health support, burnout recovery, emotional processing after failure or rejection",
              tone: "Warm, non-judgemental, validating",
            },
            {
              archetype: "Pioneer",
              for: "Goal-setting, motivation, building independent study routines and long-term habits",
              tone: "Energetic, forward-focused, accountability-driven",
            },
            {
              archetype: "Guardian",
              for: "Students with family responsibilities or caring for a sibling or parent",
              tone: "Protective, organised, safety-aware",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: "0.875rem",
                  flexShrink: 0,
                }}
              >
                {item.archetype[0]}
              </div>
              <div>
                <p style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.25rem", fontSize: "0.9375rem" }}>
                  {item.archetype}
                </p>
                <p style={{ color: MUTED, margin: "0 0 0.25rem", fontSize: "0.875rem", lineHeight: 1.5 }}>
                  <strong style={{ color: TEXT }}>Best for:</strong> {item.for}
                </p>
                <p style={{ color: FAINT, margin: 0, fontSize: "0.8125rem" }}>
                  Tone: {item.tone}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Section 8 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What does Guardian mode offer students who are also carers?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Some students carry a second invisible burden: caring for a parent
          with chronic illness, managing a younger sibling, or supporting a
          grandparent from hundreds of miles away. The dual pressure is enormous
          and largely invisible to universities.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK&rsquo;s{" "}
          <Link href="/guardian" style={{ color: GOLD, textDecoration: "underline" }}>
            Guardian mode
          </Link>{" "}
          provides safety check-in alerts, carer reminders, and shared Family
          plan access for student carers. For a student who needs to track both
          their own dissertation deadlines and their parent&rsquo;s medication
          schedule, Guardian provides a unified persistent layer across both
          responsibilities.
        </p>

        {/* ── Section 9 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How much does MEOK cost and what does the free tier include?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The Explorer tier is free forever — no credit card, no trial period,
          no artificial limits designed to force an upgrade. Full pricing is
          available at{" "}
          <Link href="/pricing" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/pricing
          </Link>
          . The free tier includes:
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {[
            "Full 4-layer Sovereign Memory vault",
            "Scholar archetype (and all other archetypes)",
            "Unlimited daily conversations subject to fair use",
            "Maternal Covenant care ethics on every response",
            "GDPR-compliant data ownership with full portability",
            "Morning Briefing — daily summary of goals, deadlines, and reminders",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.625rem",
                color: MUTED,
                fontSize: "0.9375rem",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.1rem" }}>✦</span>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Paid tiers unlock Claude Sonnet as the underlying reasoning model —
          offering significantly stronger academic writing support, more nuanced
          reasoning, and longer memory context windows. For most students, the
          free Explorer tier is genuinely sufficient for daily use. Upgrade when
          you feel the ceiling.
        </p>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1.5rem",
            letterSpacing: "-0.015em",
          }}
        >
          Frequently asked questions about MEOK for students
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqJsonLd.mainEntity.map((faq, i) => (
            <details
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <summary
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "0.9375rem",
                  cursor: "pointer",
                  lineHeight: 1.4,
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {faq.name}
                <span style={{ color: GOLD, flexShrink: 0, fontSize: "1.1rem" }}>+</span>
              </summary>
              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.7,
                  marginTop: "0.875rem",
                  marginBottom: 0,
                  fontSize: "0.9rem",
                }}
              >
                {faq.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div
          style={{
            background: `linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)`,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "2.5rem",
            marginTop: "4rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Free for Students — Forever
          </p>
          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.5rem",
              color: TEXT,
              marginBottom: "0.875rem",
              lineHeight: 1.25,
            }}
          >
            Start your MEOK Scholar companion today
          </h3>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: "1.75rem",
              maxWidth: "32rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Explorer tier is free forever. No credit card. Full Sovereign
            Memory. Your companion remembers your modules, your deadlines, and
            your state of mind — from the first message onwards.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.875rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: GOLD,
                color: BG,
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Hatch your Scholar →
            </Link>
            <Link
              href="/how-it-works"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: TEXT,
                fontWeight: 600,
                fontSize: "0.9375rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                border: `1px solid ${BORDER}`,
              }}
            >
              How it works
            </Link>
          </div>
        </div>

        {/* ── Crisis resources ──────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.25rem 1.5rem",
            background: "rgba(245,240,232,0.025)",
            borderRadius: "0.75rem",
            border: `1px solid ${BORDER}`,
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: FAINT,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            If you need immediate support
          </p>
          <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
            MEOK is a companion, not a crisis service. If you are in distress,
            contact{" "}
            <strong style={{ color: TEXT }}>Samaritans: 116 123</strong> (free,
            24/7),{" "}
            <strong style={{ color: TEXT }}>Student Minds</strong> at
            studentminds.org.uk, or your university&rsquo;s student wellbeing
            service. In an emergency, call 999 or go to A&amp;E.
          </p>
        </div>

        {/* ── Back link ─────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: MUTED,
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
