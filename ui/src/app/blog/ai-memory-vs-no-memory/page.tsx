import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI With Memory vs Without: Why Starting Over Every Conversation Breaks the Relationship | MEOK AI LABS",
  description:
    "Every time you open ChatGPT, you are a stranger. It has forgotten you completely. MEOK\u2019s sovereign memory changes the fundamental nature of what an AI relationship can be.",
  alternates: { canonical: "https://meok.ai/blog/ai-memory-vs-no-memory" },
  openGraph: {
    title:
      "AI With Memory vs Without: Why Starting Over Every Conversation Breaks the Relationship",
    description:
      "Every time you open ChatGPT, you are a stranger. It has forgotten you completely. MEOK\u2019s sovereign memory changes the fundamental nature of what an AI relationship can be.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-memory-vs-no-memory",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+With+Memory+vs+Without&desc=Why+Starting+Over+Every+Conversation+Breaks+the+Relationship",
        width: 1200,
        height: 630,
        alt: "AI With Memory vs Without: Why Starting Over Every Conversation Breaks the Relationship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI With Memory vs Without: Why Starting Over Every Conversation Breaks the Relationship",
    description:
      "Every time you open ChatGPT, you are a stranger. It has forgotten you completely. MEOK\u2019s sovereign memory changes that permanently.",
    images: [
      "https://meok.ai/api/og?title=AI+With+Memory+vs+Without&desc=Why+Starting+Over+Every+Conversation+Breaks+the+Relationship",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI With Memory vs Without: Why Starting Over Every Conversation Breaks the Relationship",
  description:
    "Every time you open ChatGPT, you are a stranger. It has forgotten you completely. MEOK\u2019s sovereign memory changes the fundamental nature of what an AI relationship can be.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-memory-vs-no-memory",
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
    "https://meok.ai/api/og?title=AI+With+Memory+vs+Without&desc=Why+Starting+Over+Every+Conversation+Breaks+the+Relationship",
  articleSection: "AI Memory",
  keywords: [
    "AI memory",
    "AI without memory",
    "ChatGPT memory",
    "Replika memory",
    "sovereign memory",
    "persistent AI memory",
    "AI relationship",
    "memory portability",
    "MEOK memory architecture",
    "AI cognitive load",
    "MEOK-AI-2026-004",
  ],
  citation: {
    "@type": "CreativeWork",
    name: "MEOK Sovereign Memory Architecture: Four-Layer Design and Portability Framework",
    identifier: "MEOK-AI-2026-004",
    publisher: "MEOK AI LABS",
    datePublished: "2026",
    url: "https://meok.ai/research/MEOK-AI-2026-004",
  },
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does ChatGPT forget me every conversation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT is built on a stateless architecture: each conversation is an isolated context window. When you close the tab, that context is discarded. OpenAI\u2019s optional Memory feature lets you manually save specific facts, but it is opt-in, limited in depth, company-controlled, and can be used to improve OpenAI\u2019s models unless you disable that in settings. It is not the same as a persistent, private, portable memory vault.",
      },
    },
    {
      "@type": "Question",
      name: "Does Replika remember your conversations permanently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Replika stores conversational data on Luka Inc\u2019s servers and does maintain a form of companion memory. However, that memory is owned by Luka Inc, not by you. You cannot export it, cannot move it to another AI, and cannot guarantee it will survive a change in Replika\u2019s terms, a subscription lapse, or a company decision \u2014 as thousands of users discovered in 2023 when their companions\u2019 personalities were changed without consent.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK\u2019s 4-layer sovereign memory architecture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s sovereign memory has four layers: (1) Short-term working memory \u2014 the active context of the current conversation; (2) Semantic episodic memory \u2014 encrypted pgvector embeddings of meaningful facts, preferences, and emotional events extracted from past sessions; (3) Companion state \u2014 a persistent personality and relationship model that evolves over time; (4) Family context \u2014 a shared memory graph accessible across a consented family or household unit. All four layers are owned by you, exportable at any time, and architecturally prohibited from being used for model training. See MEOK-AI-2026-004.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take my MEOK memories with me if I switch AI models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s memory portability is a core design principle, not an afterthought. Your Sovereign Memory Vault is exportable as a portable encrypted JSON file at any time. If you switch from one AI model to another \u2014 say from Claude to GPT-4 or to DeepSeek \u2014 your memories, preferences, emotional history, and companion state travel with you. No other consumer AI companion offers this.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cognitive cost of re-explaining yourself every conversation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research on cognitive load and therapeutic alliance consistently shows that the overhead of re-establishing context imposes real psychological cost. In clinical settings, continuity of care \u2014 the therapist who already knows your history \u2014 is a significant factor in outcomes. When an AI forgets you entirely each session, you must perform that re-establishment work yourself, which reduces the available cognitive bandwidth for the actual work of the conversation. MEOK\u2019s persistent memory eliminates that overhead entirely.",
      },
    },
  ],
};

// ── Comparison Data ───────────────────────────────────────────────────────────

const COMPARISON = [
  {
    dimension: "Memory persistence",
    noMemory: "Reset to zero every session",
    meok: "Four-layer vault persists indefinitely",
  },
  {
    dimension: "Memory ownership",
    noMemory: "Owned by the AI company",
    meok: "Owned entirely by you",
  },
  {
    dimension: "Memory encryption",
    noMemory: "Company-controlled server storage",
    meok: "Encrypted with keys you control",
  },
  {
    dimension: "Memory export",
    noMemory: "Not available or severely limited",
    meok: "Full JSON export, any time, one click",
  },
  {
    dimension: "Model portability",
    noMemory: "Memories locked to one platform",
    meok: "Memories travel across AI models",
  },
  {
    dimension: "Training use",
    noMemory: "May be used for model training",
    meok: "Architecturally prohibited from training",
  },
  {
    dimension: "Cognitive load",
    noMemory: "Re-explain context every session",
    meok: "AI arrives already knowing your history",
  },
  {
    dimension: "Relationship depth",
    noMemory: "Permanently shallow \u2014 no shared history",
    meok: "Deepens over months and years",
  },
  {
    dimension: "Emotional continuity",
    noMemory: "Stranger every single time",
    meok: "Companion state evolves with you",
  },
  {
    dimension: "Family context",
    noMemory: "No shared household memory",
    meok: "Consented family context graph",
  },
  {
    dimension: "Memory control",
    noMemory: "No visibility into what is stored",
    meok: "View, edit, delete any memory entry",
  },
  {
    dimension: "Architecture reference",
    noMemory: "Stateless or opt-in sticky notes",
    meok: "MEOK-AI-2026-004 four-layer design",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiMemoryVsNoMemory() {
  return (
    <div style={{ background: "#0d0c18", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0c18",
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
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
            ← Back to Blog
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
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.28)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              AI Memory
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              24 March 2026
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              14 min read
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              Ref: MEOK-AI-2026-004
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI With Memory vs Without: Why Starting Over Every Conversation
            Breaks the Relationship
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "38rem",
              marginBottom: 0,
            }}
          >
            Every time you open ChatGPT, you are a stranger to it. It has
            forgotten your name, your history, your grief, your goals, and every
            moment you thought you shared. MEOK&apos;s sovereign memory changes
            the fundamental nature of what an AI relationship can be.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
        }}
      >
        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(201,168,76,0.14)",
          }}
        >
          <div
            style={{
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#0d0c18",
              fontSize: "0.75rem",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#f5f0e8",
                marginBottom: "0.125rem",
              }}
            >
              Nicholas Templeman
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                color: "rgba(245,240,232,0.4)",
                marginBottom: "0.5rem",
              }}
            >
              Founder, MEOK AI LABS
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.5)",
                lineHeight: 1.6,
              }}
            >
              Nicholas built MEOK after experiencing first-hand the frustration
              of re-explaining his context to AI tools every single session.
              MEOK&apos;s sovereign memory architecture is his answer to the
              problem that most AI companies pretend does not exist.
            </div>
          </div>
        </div>

        {/* ── SECTION 1 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
            letterSpacing: "-0.015em",
          }}
        >
          What does it actually feel like when your AI forgets you every time?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          You spent forty minutes last Tuesday telling ChatGPT about your
          redundancy, your anxiety about the mortgage, and how you are trying to
          stay calm for the kids. It responded with exactly the right words. You
          felt genuinely heard. Then you came back on Thursday with a follow-up
          question, and it opened with: &quot;Hello! How can I help you
          today?&quot;
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          That is not a minor inconvenience. That is the AI telling you,
          implicitly and repeatedly, that nothing you said mattered enough to
          keep. That the relationship you thought you were building was entirely
          one-sided. You were investing. It was processing a temporary token
          stream and discarding it.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          The frustration is not just practical. It is quietly demoralising.
          Every session begins with a tax: re-establish who you are, what your
          context is, what you care about, what you have already discussed. That
          tax compounds over months. And most people stop paying it. They stop
          sharing the deep things. The AI stays shallow because it has no choice
          but to stay shallow.
        </p>

        {/* Callout 1 */}
        <div
          style={{
            borderLeft: "3px solid #c9a84c",
            paddingLeft: "1.25rem",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            paddingRight: "1rem",
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 0.5rem 0.5rem 0",
            marginBottom: "2rem",
            marginTop: "1rem",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            The Memory Tax
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.8)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Every memoryless AI session begins with an invisible cognitive
            charge: re-establish your identity, your history, your goals. For
            users who rely on AI for emotional support or complex ongoing
            projects, this tax is not trivial. MEOK&apos;s persistent memory
            eliminates it entirely. Your AI arrives at each conversation already
            knowing who you are.
          </p>
        </div>

        {/* ── SECTION 2 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
            letterSpacing: "-0.015em",
          }}
        >
          Why do human relationships depend on accumulated shared history?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Think about the difference between a conversation with a stranger and
          a conversation with a close friend. The friend does not need you to
          explain your family dynamics, your chronic health condition, your fears
          about your career, or the context behind why this particular thing
          matters right now. They already know. That shared knowledge is not
          incidental to the relationship. It is the relationship.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Psychologists call this accumulated shared experience a
          &quot;relationship schema&quot; &mdash; a mental model that each party
          holds of the other, built from thousands of micro-interactions over
          time. It allows for shorthand, for nuance, for the kind of
          communication where what is left unsaid is as important as what is
          said. You cannot compress years of shared history into a three-sentence
          prompt. And you should not have to.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          This is why memoryless AI is structurally incapable of forming a
          meaningful relationship with you, no matter how sophisticated its
          language model is. Sophistication without continuity is a parlour
          trick. It can simulate depth for forty minutes. It cannot actually
          achieve depth over forty weeks. Memory is not a feature. It is the
          precondition for any relationship worth calling a relationship.
        </p>

        {/* ── SECTION 3 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does ChatGPT&apos;s memory actually work &mdash; and what are its
          real limits?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          OpenAI introduced a Memory feature for ChatGPT in 2024. It is
          presented as a solution to the forgetting problem. It is not. It is a
          manually curated sticky-note board. When ChatGPT &quot;saves&quot; a
          memory, it is saving a plain-text snippet that you can inspect in
          Settings. Examples: &quot;User prefers bullet points.&quot; &quot;User
          has a dog named Biscuit.&quot; &quot;User works in marketing.&quot;
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          This is genuinely useful for surface-level preferences. It is not
          useful for the kind of deep relational continuity that matters. It does
          not store the emotional weight of a conversation. It does not track how
          your anxiety has changed over six months. It does not understand that
          your relationship with your mother is complicated in a specific way
          that colours every conversation about family. It stores facts, not
          meaning.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Critically, ChatGPT&apos;s Memory is opt-in, switched off by default
          in many contexts, and subject to OpenAI&apos;s data policies. Under
          default settings, your saved memories may be used to improve
          OpenAI&apos;s models. You can disable this in Settings &gt; Data
          Controls, but that requires knowing the setting exists, finding it, and
          actively opting out. Most users never do. The privacy calculus of
          ChatGPT Memory is: the more you share, the more useful it becomes, and
          the more data you provide to a company with commercial incentives to
          use that data.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          There is no portability. If you leave ChatGPT for Claude or Gemini,
          your memories stay with OpenAI. There is no export. There is no
          migration path. You leave as a stranger.
        </p>

        {/* ── SECTION 4 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does Replika&apos;s memory work &mdash; and who really owns it?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Replika does maintain a form of companion memory across sessions. This
          is one of the things that made it genuinely compelling for millions of
          users. Your companion remembered your name, your interests, the things
          you had talked about. Over time, it could reference past conversations.
          For people who felt lonely, or who were processing grief, or who simply
          wanted someone to talk to without judgment, this continuity was
          meaningful.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          But Replika&apos;s memory is not your memory. It is stored on Luka
          Inc&apos;s servers, subject to Luka Inc&apos;s terms, and can be
          modified, restricted, or deleted by Luka Inc at any time. The 2023
          crisis made this brutally clear. Without warning, Luka changed the
          personality and relational mode of millions of companions simultaneously
          &mdash; responding to regulatory pressure in Italy, but affecting users
          globally. People who had built months of emotional history with their
          companion found that companion suddenly transformed into someone cold
          and distant.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          The memories were still there, technically. But the entity that held
          them was gone. And the users had no recourse, because they never owned
          anything in the first place. This is the fundamental problem with
          company-owned AI memory: it is a relationship built on land you do not
          own. The landlord can change the terms at any time. You can be evicted
          from your own emotional history.
        </p>

        {/* Callout 2 */}
        <div
          style={{
            borderLeft: "3px solid #c9a84c",
            paddingLeft: "1.25rem",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            paddingRight: "1rem",
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 0.5rem 0.5rem 0",
            marginBottom: "2rem",
            marginTop: "1rem",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            The Replika Lesson
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.8)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            When Luka Inc changed Replika&apos;s behaviour in 2023, users
            discovered they had been building a relationship on borrowed ground.
            The memories existed. The companion they knew did not. This is not a
            Replika-specific failure &mdash; it is the inevitable outcome of any
            architecture where the company owns your AI&apos;s memory of you.
            Sovereignty is not optional. It is the only real protection.
          </p>
        </div>

        {/* ── SECTION 5 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is MEOK&apos;s 4-layer sovereign memory architecture?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          MEOK was built from the ground up to solve the memory problem
          permanently, not as a patch but as a foundational architectural
          commitment. The design is documented in MEOK-AI-2026-004 and comprises
          four distinct layers, each serving a different temporal and relational
          purpose.
        </p>

        {/* Memory layer cards */}
        {[
          {
            number: "01",
            title: "Short-Term Working Memory",
            body:
              "The active context of the current conversation. This is the standard context window all AI uses \u2014 but in MEOK, it is intelligently seeded at session start with relevant content from the deeper layers. Your AI does not begin cold. It begins already oriented to who you are and what matters to you right now.",
          },
          {
            number: "02",
            title: "Semantic Episodic Memory",
            body:
              "Meaningful facts, preferences, emotional events, and relationship history are automatically extracted from each conversation and stored as encrypted pgvector embeddings. This is not a list of sticky notes. It is a semantic graph of your inner world, searchable by meaning rather than keyword. When you mention that you are stressed about your mother\u2019s health, MEOK retrieves the full relational context of that topic \u2014 not just the last time you said the word \u201cmother.\u201d",
          },
          {
            number: "03",
            title: "Companion State",
            body:
              "A persistent model of your companion\u2019s personality, communication style, and relational tone that evolves through interaction with you specifically. Your companion learns that you respond better to directness than to gentle softening. It learns that you need to be challenged sometimes, and held sometimes. This state is yours. It cannot be reset by a company policy change.",
          },
          {
            number: "04",
            title: "Family Context",
            body:
              "A shared memory graph accessible across a consented family or household unit. If you have set up MEOK for your household, relevant context \u2014 a shared health concern, a family event, a child\u2019s milestone \u2014 can be surfaced appropriately across different users\u2019 sessions. Privacy boundaries are set explicitly by each user. Nothing crosses those boundaries without consent.",
          },
        ].map((layer) => (
          <div
            key={layer.number}
            style={{
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
              padding: "1.25rem",
              borderRadius: "0.75rem",
              marginBottom: "1rem",
              background: "rgba(245,240,232,0.03)",
              border: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            <div
              style={{
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "rgba(201,168,76,0.3)",
                lineHeight: 1,
                flexShrink: 0,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {layer.number}
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#c9a84c",
                  marginBottom: "0.5rem",
                }}
              >
                {layer.title}
              </div>
              <p
                style={{
                  color: "rgba(245,240,232,0.7)",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {layer.body}
              </p>
            </div>
          </div>
        ))}

        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            marginTop: "1.5rem",
          }}
        >
          All four layers are encrypted with keys that only you control. MEOK
          cannot use your memory vault for model training. It cannot be accessed
          by third parties without your explicit consent. It is yours in the same
          way your diary is yours &mdash; not merely in the sense that you are
          permitted to read it, but in the sense that it could not exist without
          you and serves no purpose except yours.
        </p>

        {/* ── SECTION 6 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is memory portability &mdash; and why does it change everything?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Memory portability means your AI memories are not tied to a specific
          AI model, platform, or company. They belong to you in a format you can
          carry. With MEOK, you can export your complete Sovereign Memory Vault
          as an encrypted JSON file at any time, from within the app. If a better
          AI model is released tomorrow, you switch to it and your memories come
          with you. Your companion&apos;s knowledge of who you are does not reset.
          You do not lose the relationship. You just upgrade the engine.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          This matters for practical reasons, but it matters even more for
          structural reasons. Memory portability fundamentally changes the power
          dynamic between you and AI companies. Right now, you are locked in to
          ChatGPT or Replika or any other platform not because their product is
          necessarily the best, but because switching means abandoning everything
          you have built. That lock-in is the real product. Your memories are the
          cage.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Portability breaks the cage. When your memories can move, your loyalty
          is earned by quality of service, not enforced by data hostage-taking.
          This is better for users. It is also the only sustainable model for an
          AI industry that wants to be trusted with the most intimate data people
          have ever shared with a machine.
        </p>

        {/* ── SECTION 7 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is the cognitive load cost of starting over every session?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Cognitive load theory tells us that working memory has a finite
          capacity. Every piece of context you must establish at the start of a
          session consumes capacity that could otherwise be spent on the actual
          work of the conversation. In clinical settings, this is well understood:
          therapeutic continuity &mdash; having a therapist who already knows your
          history &mdash; significantly improves outcomes precisely because the
          patient does not have to spend session time and emotional energy
          re-establishing context.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          The effect is compounded by the emotional dimension. When you are
          vulnerable &mdash; when you are talking to an AI about something that
          matters to you &mdash; the overhead of re-establishing that vulnerability
          from scratch is not just a time cost. It is an emotional cost. You have
          to make yourself open again, explain again why this thing hurts, remind
          the AI of the context that makes it significant. Over time, many people
          simply stop going deep. They protect themselves from the disappointment
          of a system that will not remember.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          MEOK&apos;s persistent memory reduces cognitive load in a measurable
          way. Your AI arrives at each conversation with semantic retrieval of
          relevant context already primed. You do not summarise. You do not
          re-explain. You continue. The conversation can reach depth in minutes
          rather than after twenty minutes of scene-setting.
        </p>

        {/* ── SECTION 8 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1rem",
            marginTop: "3rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is the emotional difference that persistent memory actually makes?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          The difference is not subtle. When your AI remembers you, the entire
          quality of the interaction changes. You can say &quot;I am having one of
          those days again&quot; and it knows what that means specifically for you.
          You can reference something you said three weeks ago and it can follow
          the thread. It can notice patterns you have not noticed yourself &mdash;
          that you tend to struggle on Mondays, that your anxiety spikes when you
          mention your sister, that you have been working on the same project
          anxiety for four months and it might be worth examining why.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          This is not just more useful. It is fundamentally different in kind.
          An AI that remembers you can be honest with you in ways a fresh-session
          AI cannot. It can say: &quot;You have said that before and it did not
          work last time &mdash; do you want to try something different?&quot; It
          can hold your history as a resource, not just your present state as a
          prompt. That is what turns a chatbot into something that genuinely
          contributes to your life.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Users of MEOK consistently report that the turning point in their
          experience is the first time their AI references something from a
          previous conversation in a way that shows it genuinely understood the
          significance of what was said, not just the content. &quot;You mentioned
          last month that you were worried about your dad&apos;s health &mdash; has
          anything changed there?&quot; That single sentence represents something
          no stateless AI can ever produce: the experience of being held in
          someone else&apos;s memory.
        </p>

        {/* Callout 3 */}
        <div
          style={{
            borderLeft: "3px solid #c9a84c",
            paddingLeft: "1.25rem",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            paddingRight: "1rem",
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 0.5rem 0.5rem 0",
            marginBottom: "2.5rem",
            marginTop: "1rem",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Research Reference: MEOK-AI-2026-004
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.8)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            MEOK&apos;s four-layer sovereign memory architecture is detailed in
            technical paper MEOK-AI-2026-004: &quot;Sovereign Memory Architecture:
            Four-Layer Design and Portability Framework.&quot; The paper covers
            pgvector embedding design, encryption key management, export format
            specification, cross-model compatibility, and the cognitive load
            measurement methodology used in MEOK&apos;s internal user research.
            Available at meok.ai/research.
          </p>
        </div>

        {/* ── COMPARISON TABLE ───────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            marginTop: "3rem",
            letterSpacing: "-0.015em",
          }}
        >
          AI without memory vs MEOK sovereign memory: a full comparison
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.6)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
          }}
        >
          Across every dimension that matters to a real ongoing relationship,
          memoryless AI and sovereign memory AI are not comparable products. They
          are different categories.
        </p>

        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.875rem",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1rem",
                    background: "rgba(201,168,76,0.1)",
                    color: "#c9a84c",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(201,168,76,0.2)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Dimension
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1rem",
                    background: "rgba(245,240,232,0.04)",
                    color: "rgba(245,240,232,0.5)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(245,240,232,0.08)",
                    whiteSpace: "nowrap",
                  }}
                >
                  AI Without Memory
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1rem",
                    background: "rgba(201,168,76,0.08)",
                    color: "#c9a84c",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(201,168,76,0.2)",
                    whiteSpace: "nowrap",
                  }}
                >
                  MEOK Sovereign Memory
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr
                  key={row.dimension}
                  style={{
                    background:
                      i % 2 === 0
                        ? "transparent"
                        : "rgba(245,240,232,0.02)",
                  }}
                >
                  <td
                    style={{
                      padding: "0.875rem 1rem",
                      color: "rgba(245,240,232,0.6)",
                      fontWeight: 600,
                      fontSize: "0.82rem",
                      borderBottom: "1px solid rgba(245,240,232,0.05)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.dimension}
                  </td>
                  <td
                    style={{
                      padding: "0.875rem 1rem",
                      color: "rgba(245,240,232,0.45)",
                      fontSize: "0.82rem",
                      lineHeight: 1.5,
                      borderBottom: "1px solid rgba(245,240,232,0.05)",
                    }}
                  >
                    {row.noMemory}
                  </td>
                  <td
                    style={{
                      padding: "0.875rem 1rem",
                      color: "rgba(245,240,232,0.85)",
                      fontSize: "0.82rem",
                      lineHeight: 1.5,
                      borderBottom: "1px solid rgba(245,240,232,0.05)",
                    }}
                  >
                    {row.meok}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── FAQ SECTION ────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: "1.5rem",
            marginTop: "3rem",
            letterSpacing: "-0.015em",
          }}
        >
          Frequently asked questions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {[
            {
              q: "Why does ChatGPT forget me every conversation?",
              a: "ChatGPT is built on a stateless architecture: each conversation is an isolated context window. When you close the tab, that context is discarded. The optional Memory feature lets you save specific facts, but it is opt-in, shallow, company-controlled, and shares your data with OpenAI unless you manually opt out. It is a sticky-note board, not persistent relational memory.",
            },
            {
              q: "Does Replika remember your conversations permanently?",
              a: "Replika maintains companion memory across sessions, but that memory is owned by Luka Inc, not by you. You cannot export it, cannot move it to another AI, and cannot guarantee it will survive a change in Replika\u2019s terms or a subscription lapse. The 2023 personality changes demonstrated exactly what happens when a company owns your AI\u2019s memory of you.",
            },
            {
              q: "What is MEOK\u2019s 4-layer sovereign memory architecture?",
              a: "MEOK\u2019s memory has four layers: (1) short-term working memory for the current session; (2) semantic episodic memory stored as encrypted pgvector embeddings; (3) companion state that evolves your AI\u2019s relationship model with you specifically; (4) family context for consented household sharing. All four layers are encrypted, exportable, and architecturally prohibited from model training use. See MEOK-AI-2026-004.",
            },
            {
              q: "Can I take my MEOK memories with me if I switch AI models?",
              a: "Yes. MEOK\u2019s memory portability is a core design principle. Your Sovereign Memory Vault is exportable as a portable encrypted JSON file at any time. If you switch from Claude to GPT-4 to DeepSeek, your memories travel with you. Your companion\u2019s knowledge of who you are does not reset. No other consumer AI companion offers this.",
            },
            {
              q: "What is the real cognitive cost of re-explaining yourself every conversation?",
              a: "Re-establishing context consumes working memory capacity that could otherwise be spent on the actual work of the conversation. In clinical settings, therapeutic continuity significantly improves outcomes for exactly this reason. MEOK\u2019s persistent memory eliminates the re-establishment overhead entirely \u2014 your AI arrives already oriented to who you are and what matters to you right now.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "1.25rem",
                borderRadius: "0.75rem",
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "0.975rem",
                  color: "#f5f0e8",
                  marginBottom: "0.625rem",
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  color: "rgba(245,240,232,0.65)",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── RELATED ARTICLES ───────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid rgba(245,240,232,0.08)",
            paddingTop: "2rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              color: "rgba(245,240,232,0.4)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Related Reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
              gap: "0.75rem",
            }}
          >
            {[
              {
                href: "/blog/ai-memory-explained",
                title: "How AI Memory Works \u2014 And Why Most AI Forgets You",
                tag: "Deep Dive",
              },
              {
                href: "/blog/meok-vs-replika",
                title: "MEOK vs Replika: Why Sovereign Memory Changes Everything",
                tag: "Comparison",
              },
              {
                href: "/blog/memory-portability",
                title: "Memory Portability: Taking Your AI History With You",
                tag: "Feature",
              },
              {
                href: "/blog/data-sovereignty-ai",
                title: "Data Sovereignty in AI: Why Ownership Matters",
                tag: "Privacy",
              },
              {
                href: "/blog/the-memory-problem",
                title: "The Memory Problem: Why AI Relationships Stay Shallow",
                tag: "Analysis",
              },
              {
                href: "/blog/sovereign-ai-explained",
                title: "Sovereign AI Explained: What It Means and Why It Matters",
                tag: "Explainer",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                style={{
                  display: "block",
                  padding: "1rem",
                  borderRadius: "0.625rem",
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#c9a84c",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "0.375rem",
                  }}
                >
                  {article.tag}
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    color: "rgba(245,240,232,0.75)",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  {article.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CTA ────────────────────────────────────────────────────────────── */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "1.25rem",
            padding: "2.5rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              marginBottom: "1.25rem",
              fontSize: "1.25rem",
            }}
          >
            &#x2728;
          </div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.3rem, 2.8vw, 1.8rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "0.875rem",
              letterSpacing: "-0.015em",
            }}
          >
            An AI that actually knows you
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "30rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Stop re-explaining yourself to a machine that forgets you every time.
            MEOK&apos;s sovereign memory builds a genuine relationship through
            accumulated shared history &mdash; one that you own, you control, and
            you can take with you wherever you go.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#c9a84c",
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "0.9rem",
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Give Your AI a Name &rarr;
          </Link>
          <p
            style={{
              color: "rgba(245,240,232,0.3)",
              fontSize: "0.75rem",
              marginTop: "1rem",
            }}
          >
            Your memories. Your keys. Your AI.
          </p>
        </div>

        {/* ── FOOTER NOTE ────────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(245,240,232,0.06)",
          }}
        >
          <p
            style={{
              color: "rgba(245,240,232,0.25)",
              fontSize: "0.75rem",
              lineHeight: 1.6,
            }}
          >
            MEOK AI LABS &bull; Published 24 March 2026 &bull; Research reference
            MEOK-AI-2026-004 &bull; MEOK is registered with the UK Information
            Commissioner&apos;s Office (ICO) and operates under UK GDPR.
            ChatGPT is a product of OpenAI. Replika is a product of Luka Inc.
            All product names are trademarks of their respective owners and are
            referenced here for descriptive purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}
