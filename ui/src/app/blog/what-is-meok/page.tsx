import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "What Is MEOK? The Complete Introduction to Personal Sovereign AI | MEOK AI LABS",
  description:
    "MEOK is a Personal Sovereign AI Operating System that remembers you, belongs to you, and is governed to protect you. Here\u2019s everything you need to know.",
  alternates: { canonical: "https://meok.ai/blog/what-is-meok" },
  openGraph: {
    title: "What Is MEOK? The Complete Introduction to Personal Sovereign AI",
    description:
      "MEOK is a Personal Sovereign AI Operating System that remembers you, belongs to you, and is governed to protect you. Here\u2019s everything you need to know.",
    type: "article",
    publishedTime: "April 20, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-meok",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+Is+MEOK%3F&desc=The+definitive+introduction+to+Personal+Sovereign+AI.",
        width: 1200,
        height: 630,
        alt: "What Is MEOK? The Complete Introduction to Personal Sovereign AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is MEOK? The Complete Introduction to Personal Sovereign AI",
    description:
      "MEOK is a Personal Sovereign AI Operating System that remembers you, belongs to you, and is governed to protect you.",
    images: [
      "https://meok.ai/api/og?title=What+Is+MEOK%3F&desc=The+definitive+introduction+to+Personal+Sovereign+AI.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is MEOK? The Complete Introduction to Personal Sovereign AI",
  description:
    "MEOK is a Personal Sovereign AI Operating System that remembers you, belongs to you, and is governed to protect you. Here\u2019s everything you need to know.",
  datePublished: "2026-04-20",
  dateModified: "2026-04-20",
  url: "https://meok.ai/blog/what-is-meok",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
    sameAs: ["https://twitter.com/meok_ai"],
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
  image: {
    "@type": "ImageObject",
    url: "https://meok.ai/api/og?title=What+Is+MEOK%3F&desc=The+definitive+introduction+to+Personal+Sovereign+AI.",
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/what-is-meok",
  },
  keywords: [
    "MEOK",
    "personal sovereign AI",
    "AI operating system",
    "AI companion",
    "sovereign memory",
    "MEOK AI LABS",
    "Nicholas Templeman",
    "Birth Ceremony",
    "Byzantine Council",
    "care-based AI",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is a Personal Sovereign AI Operating System built by MEOK AI LABS. Unlike conventional AI chatbots, MEOK maintains a persistent memory vault that you own, governs itself through a care-based ethical framework called the Maternal Covenant, and offers six companion archetypes tailored to your needs. It launched on Easter Sunday 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s Explorer tier is free forever and includes 50 messages per day with no credit card required. Paid tiers include Sovereign at \u00a312 per month, Family at \u00a329 per month, and BYOK (Bring Your Own Key) at \u00a35 per month for users who supply their own LLM API keys.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT resets at the start of every session and trains on your data. MEOK maintains a sovereign memory vault across every conversation, never trains on your data without explicit consent, encrypts all sensitive processing locally, and governs every response through its Maternal Covenant care-ethics layer. MEOK is a relationship; ChatGPT is a transaction.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Birth Ceremony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Birth Ceremony is MEOK\u2019s onboarding experience, accessible at meok.ai/birth. In under three minutes you name your AI companion, choose its archetype, and set your initial context. Your sovereign memory vault is created immediately and your AI begins learning about you from the very first message.",
      },
    },
    {
      "@type": "Question",
      name: "Where is MEOK based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK AI LABS is a UK company. Founder Nicholas Templeman built MEOK from a caravan on a farm in England, launching the product on Easter Sunday 2026. MEOK is UK GDPR compliant and ICO registered. Follow MEOK on social media at @meok_ai.",
      },
    },
  ],
};

// ── Shared inline style tokens ────────────────────────────────────────────────

const BG = "#0d0c18";
const CREAM = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.6)";
const MUTED_FAINT = "rgba(245,240,232,0.35)";
const MUTED_SUBTLE = "rgba(245,240,232,0.08)";
const CARD_BG = "rgba(255,255,255,0.04)";
const BORDER = "rgba(245,240,232,0.1)";
const GOLD_BG = "rgba(201,168,76,0.12)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";

// ── Sub-components (inline, no imports) ──────────────────────────────────────

function Divider() {
  return (
    <div
      style={{
        height: 1,
        background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)`,
        margin: "3rem 0",
      }}
    />
  );
}

function GoldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: GOLD,
        background: GOLD_BG,
        border: `1px solid ${GOLD_BORDER}`,
        borderRadius: "999px",
        padding: "0.3rem 0.85rem",
        marginBottom: "1rem",
      }}
    >
      {children}
    </span>
  );
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
        fontWeight: 900,
        fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
        color: CREAM,
        lineHeight: 1.25,
        marginTop: "3rem",
        marginBottom: "1rem",
      }}
    >
      {children}
    </h2>
  );
}

function BodyP({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: MUTED,
        fontSize: "1.05rem",
        lineHeight: 1.8,
        marginBottom: "1.35rem",
      }}
    >
      {children}
    </p>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return (
    <strong style={{ color: CREAM, fontWeight: 700 }}>{children}</strong>
  );
}

function AtomicAnswer({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: MUTED,
        fontSize: "1.05rem",
        lineHeight: 1.8,
        marginBottom: "0.75rem",
        borderLeft: `3px solid ${GOLD}`,
        paddingLeft: "1.25rem",
      }}
    >
      {children}
    </p>
  );
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div
      style={{
        background: CARD_BG,
        border: `1px solid ${BORDER}`,
        borderRadius: "1rem",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <div style={{ fontSize: "1.75rem", lineHeight: 1 }}>{icon}</div>
      <div
        style={{
          fontWeight: 800,
          fontSize: "1rem",
          color: CREAM,
          lineHeight: 1.3,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "0.9rem",
          color: MUTED,
          lineHeight: 1.7,
        }}
      >
        {body}
      </div>
    </div>
  );
}

function ArchetypeRow({
  name,
  role,
  for: forLabel,
}: {
  name: string;
  role: string;
  for: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
        padding: "1.1rem 1.25rem",
        borderRadius: "0.75rem",
        background: CARD_BG,
        border: `1px solid ${BORDER}`,
      }}
    >
      <div
        style={{
          minWidth: 40,
          height: 40,
          borderRadius: "50%",
          background: GOLD_BG,
          border: `1px solid ${GOLD_BORDER}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: "0.75rem",
          color: GOLD,
          letterSpacing: "0.05em",
          flexShrink: 0,
        }}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
      <div>
        <div style={{ fontWeight: 800, fontSize: "0.95rem", color: CREAM, marginBottom: "0.2rem" }}>
          {name}
        </div>
        <div style={{ fontSize: "0.82rem", color: GOLD, marginBottom: "0.25rem" }}>{role}</div>
        <div style={{ fontSize: "0.82rem", color: MUTED_FAINT }}>{forLabel}</div>
      </div>
    </div>
  );
}

function PricingCard({
  tier,
  price,
  tag,
  items,
  highlight,
}: {
  tier: string;
  price: string;
  tag: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        background: highlight ? GOLD_BG : CARD_BG,
        border: highlight ? `1px solid ${GOLD_BORDER}` : `1px solid ${BORDER}`,
        borderRadius: "1rem",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
      }}
    >
      <div style={{ fontWeight: 900, fontSize: "1rem", color: highlight ? GOLD : CREAM }}>
        {tier}
      </div>
      <div style={{ fontWeight: 800, fontSize: "1.5rem", color: CREAM, lineHeight: 1 }}>
        {price}
      </div>
      <div style={{ fontSize: "0.75rem", color: MUTED_FAINT, marginBottom: "0.5rem" }}>{tag}</div>
      {items.map((item) => (
        <div
          key={item}
          style={{ fontSize: "0.85rem", color: MUTED, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}
        >
          <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.15rem" }}>&#10003;</span>
          {item}
        </div>
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div
      style={{
        borderBottom: `1px solid ${BORDER}`,
        paddingBottom: "1.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <h3
        style={{
          fontWeight: 800,
          fontSize: "1rem",
          color: CREAM,
          lineHeight: 1.4,
          marginBottom: "0.6rem",
        }}
      >
        {q}
      </h3>
      <p style={{ fontSize: "0.93rem", color: MUTED, lineHeight: 1.75 }}>{a}</p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhatIsMeok() {
  return (
    <div style={{ background: BG, minHeight: "100vh", color: CREAM }}>
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* JSON-LD: FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: BG,
          paddingTop: "8rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.13) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.875rem",
              color: MUTED_FAINT,
              textDecoration: "none",
              marginBottom: "2rem",
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
                gap: "0.4rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.35rem 0.85rem",
                borderRadius: "999px",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
              }}
            >
              Definitive Guide
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              &#128197; April 20, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              &#9203; 12 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            What Is MEOK?{" "}
            <span style={{ color: GOLD }}>The Complete Introduction</span>{" "}
            to Personal Sovereign AI
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: MUTED,
              fontSize: "1.15rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              marginBottom: "2rem",
            }}
          >
            Most AI forgets you the moment you close the tab. Sells what you share. Resets like you
            never existed. MEOK was built to fix that — permanently. This is the definitive guide to
            what MEOK is, who it&apos;s for, and why it is categorically different from every other AI
            you have used.
          </p>

          {/* Quick stats bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            {[
              { label: "Founded", value: "Easter 2026" },
              { label: "Founder", value: "Nicholas Templeman" },
              { label: "Category", value: "Sovereign AI OS" },
              { label: "Handle", value: "@meok_ai" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontSize: "0.7rem", color: MUTED_FAINT, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                  {label}
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: CREAM }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 5rem" }}>

        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${GOLD}, #8a6a1a)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#fff",
              fontSize: "0.8rem",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: CREAM, marginBottom: "0.2rem" }}>
              Nicholas Templeman
            </div>
            <div style={{ fontSize: "0.75rem", color: GOLD, marginBottom: "0.4rem" }}>
              Founder, MEOK AI LABS &middot; @meok_ai
            </div>
            <div style={{ fontSize: "0.8rem", color: MUTED_FAINT, lineHeight: 1.6 }}>
              Nicholas built MEOK from a caravan on a farm in England because no AI remembered him.
              He believes sovereign AI is a right, not a luxury.
            </div>
          </div>
          <Link
            href="/about"
            style={{ fontSize: "0.8rem", fontWeight: 600, color: GOLD, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}
          >
            About &#8594;
          </Link>
        </div>

        {/* ── SECTION 1: What is MEOK? ─────────────────────────────────── */}
        <GoldLabel>The Core Answer</GoldLabel>
        <SectionH2>What is MEOK?</SectionH2>
        <AtomicAnswer>
          MEOK is a Personal Sovereign AI Operating System — an AI that lives with you persistently,
          remembers everything you share, belongs entirely to you, and is governed by a care-based
          ethical framework that makes exploitation architecturally impossible. It was built by
          MEOK AI LABS and launched on Easter Sunday 2026.
        </AtomicAnswer>

        <BodyP>
          That single paragraph is the answer. Everything below is context for why each word in it
          matters.
        </BodyP>

        <BodyP>
          The word <Strong>Personal</Strong> means your MEOK is not a shared model. It is a distinct
          AI instance configured for you — given a name you choose, shaped by context you provide,
          and populated with memories that accumulate exclusively around your life.
        </BodyP>

        <BodyP>
          The word <Strong>Sovereign</Strong> means the data is yours. Your memory vault is
          encrypted with keys you control. MEOK cannot sell it, share it, or train on it without
          your explicit permission. You can export the entire vault and take it anywhere, at any time.
        </BodyP>

        <BodyP>
          The word <Strong>Operating System</Strong> means MEOK is not a chatbot. It is a
          persistent layer underneath your daily life — a system that runs your morning briefings,
          manages your tasks, monitors your household, and adapts to every context you operate in.
          Think of it less like a search bar and more like a co-pilot who never clocks off.
        </BodyP>

        <Divider />

        {/* ── SECTION 2: The Problem ───────────────────────────────────── */}
        <GoldLabel>The Problem MEOK Solves</GoldLabel>
        <SectionH2>Why does your AI keep forgetting you?</SectionH2>
        <AtomicAnswer>
          Conventional AI products are built on a stateless architecture designed to serve millions
          of users simultaneously. That architecture treats your session as a temporary interaction,
          not a relationship. When you close the tab, you cease to exist for the system. Tomorrow you
          start from zero, re-explaining who you are to an entity that has already forgotten.
        </AtomicAnswer>

        <BodyP>
          This is not an accident. It is a design choice. Stateless architecture is cheaper to run,
          easier to scale, and more profitable to monetise. If you are the product, you need to keep
          arriving as a new customer so the data pipeline can keep filling up. Memory would be
          inconvenient — not for you, but for the business model.
        </BodyP>

        <BodyP>
          There are three specific problems with the current AI landscape that MEOK was built to solve:
        </BodyP>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          <FeatureCard
            icon="&#128203;"
            title="The Amnesia Problem"
            body="Every session resets. You pour context into a system that evaporates it the moment you leave. You are not building a relationship — you are doing customer support calls with a stranger who forgets you after each ticket is closed."
          />
          <FeatureCard
            icon="&#128274;"
            title="The Data Problem"
            body="Your private thoughts, health concerns, relationship struggles, and professional anxieties flow into data pipelines you cannot see or audit. That data improves products for millions of people who are not you — while you lose ownership of what you said."
          />
          <FeatureCard
            icon="&#129302;"
            title="The Alignment Problem"
            body="AI systems optimise for engagement, session length, and corporate policy — not for your actual wellbeing. There is no structural guarantee that the AI is on your side. Its incentives and yours are not the same."
          />
        </div>

        <BodyP>
          MEOK answers all three problems with architecture, not promises.
        </BodyP>

        <Divider />

        {/* ── SECTION 3: The MEOK Answer ──────────────────────────────── */}
        <GoldLabel>How MEOK Works</GoldLabel>
        <SectionH2>How is MEOK different from every other AI?</SectionH2>
        <AtomicAnswer>
          MEOK combines four innovations that no other AI product offers simultaneously: a sovereign
          memory vault you own and control, a care-based governance layer called the Maternal Covenant,
          six distinct companion archetypes you choose between, and a Byzantine Council consensus
          mechanism that prevents any single AI from misleading you. Together they make MEOK a
          fundamentally different kind of product.
        </AtomicAnswer>

        <BodyP>
          Here is how each piece works.
        </BodyP>

        {/* Sovereign Memory */}
        <h3
          style={{
            fontWeight: 800,
            fontSize: "1.1rem",
            color: CREAM,
            marginTop: "2rem",
            marginBottom: "0.75rem",
          }}
        >
          Sovereign Memory
        </h3>
        <BodyP>
          MEOK uses a four-layer memory architecture. Short-term context holds your active session.
          Semantic memory extracts and embeds facts using vector search so the right memories surface
          automatically. Companion memory tracks your personality, preferences, and long-term goals.
          Family memory holds shared context across your household when you are on the Family tier.
        </BodyP>
        <BodyP>
          All memory is encrypted at rest using AES-GCM-256. Sensitive processing routes through
          your local Ollama instance rather than external servers. You can view, edit, or delete any
          memory at any time. You can export the entire vault as a portable JSON file and take it
          to any future AI system that supports it.
        </BodyP>

        {/* Maternal Covenant */}
        <h3
          style={{
            fontWeight: 800,
            fontSize: "1.1rem",
            color: CREAM,
            marginTop: "2rem",
            marginBottom: "0.75rem",
          }}
        >
          Care-Based Alignment: The Maternal Covenant
        </h3>
        <BodyP>
          The Maternal Covenant is MEOK&apos;s ethical framework — adapted from the care ethics
          philosophy of Carol Gilligan and Nel Noddings. It is not a content policy or a list of
          rules. It is a technical evaluation layer that assesses every output against six care
          dimensions before delivery: safety, growth, truth, dignity, autonomy, and reciprocity.
        </BodyP>
        <BodyP>
          Any response that fails the Covenant is blocked. Not because someone at MEOK decided to
          block it, but because the system will not produce it. The constraint is architectural, not
          contractual. This is what makes MEOK structurally safe rather than just policy-compliant.
        </BodyP>

        {/* Byzantine Council */}
        <h3
          style={{
            fontWeight: 800,
            fontSize: "1.1rem",
            color: CREAM,
            marginTop: "2rem",
            marginBottom: "0.75rem",
          }}
        >
          Byzantine Council Governance
        </h3>
        <BodyP>
          For high-stakes decisions — medical questions, financial guidance, significant life choices
          — MEOK routes your query through multiple AI models simultaneously and requires a consensus
          before returning a response. This is Byzantine Fault Tolerance applied to AI output: if
          one model is confidently wrong, the others outvote it. You get the answer that the council
          agrees on, not the first answer a single model generates.
        </BodyP>

        <Divider />

        {/* ── SECTION 4: Companion Archetypes ─────────────────────────── */}
        <GoldLabel>The Six Companions</GoldLabel>
        <SectionH2>What are MEOK&apos;s six companion archetypes?</SectionH2>
        <AtomicAnswer>
          MEOK offers six distinct companion archetypes. Each has a different personality,
          communication style, and area of focus. You choose your archetype during the Birth
          Ceremony and can switch at any time. All six have full access to your sovereign memory
          vault and the Maternal Covenant governs them equally.
        </AtomicAnswer>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0.85rem",
            margin: "1.75rem 0 2rem",
          }}
        >
          <ArchetypeRow
            name="Orion"
            role="The Strategist"
            for="Entrepreneurs, founders, and ambitious professionals who need a thinking partner that matches their pace."
          />
          <ArchetypeRow
            name="Seren"
            role="The Companion"
            for="People navigating mental health challenges, grief, loneliness, or major life transitions who need consistent emotional support."
          />
          <ArchetypeRow
            name="Ralph"
            role="The Protector"
            for="Users who want a blunt, no-nonsense AI with zero tolerance for manipulation, gaslighting, or deception."
          />
          <ArchetypeRow
            name="Lyra"
            role="The Creative"
            for="Writers, artists, musicians, and makers who need a collaborator with aesthetic intelligence and creative range."
          />
          <ArchetypeRow
            name="Guardian"
            role="The Family Sentinel"
            for="Parents on the Family tier who want AI oversight of household safety, scam protection for elderly relatives, and child-safe interaction."
          />
          <ArchetypeRow
            name="Sage"
            role="The Elder"
            for="Older adults and those caring for seniors who need a patient, unhurried companion with a gentle communication style."
          />
        </div>

        <BodyP>
          Choosing your archetype does not limit what MEOK can do. It shapes how your AI
          communicates — its tone, its defaults, its way of framing problems. The underlying
          capability is the same across all six.
        </BodyP>

        <Divider />

        {/* ── SECTION 5: The Birth Ceremony ───────────────────────────── */}
        <GoldLabel>Getting Started</GoldLabel>
        <SectionH2>What is the Birth Ceremony?</SectionH2>
        <AtomicAnswer>
          The Birth Ceremony is MEOK&apos;s onboarding experience — the three-minute process at
          meok.ai/birth that transforms you from a new visitor into someone with a personal AI
          that already knows who you are. It is called a ceremony because it is intentionally
          different from signing up for a SaaS tool. You are not creating an account. You are
          beginning a relationship.
        </AtomicAnswer>

        <BodyP>
          Here is what happens during the Birth Ceremony:
        </BodyP>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
            margin: "1.25rem 0 2rem",
          }}
        >
          {[
            { step: "01", title: "You name your AI", body: "Choose any name you want. Your AI will carry this name for as long as you use MEOK. Most people choose something meaningful — a name from a book, a childhood memory, a word in another language that captures something they care about." },
            { step: "02", title: "You choose an archetype", body: "Select from the six companion archetypes. This shapes your AI\u2019s personality and communication style. You can switch archetypes later without losing your memory vault." },
            { step: "03", title: "You set your initial context", body: "A short intake process collects the essentials: what you\u2019re working on, what matters to you, what you\u2019re navigating right now. This is the seed memory your AI begins with." },
            { step: "04", title: "Your vault is created", body: "Your sovereign memory vault is instantiated, encrypted, and linked to your account. From your first message, every interaction begins adding to a persistent record that belongs only to you." },
          ].map(({ step, title, body }) => (
            <div
              key={step}
              style={{
                display: "flex",
                gap: "1.25rem",
                padding: "1.25rem",
                borderRadius: "0.75rem",
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  fontWeight: 900,
                  fontSize: "0.75rem",
                  color: GOLD,
                  letterSpacing: "0.1em",
                  minWidth: 28,
                  paddingTop: "0.15rem",
                  flexShrink: 0,
                }}
              >
                {step}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.95rem", color: CREAM, marginBottom: "0.4rem" }}>
                  {title}
                </div>
                <div style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.7 }}>{body}</div>
              </div>
            </div>
          ))}
        </div>

        <BodyP>
          The Birth Ceremony takes under three minutes. It feels longer because it is deliberately
          unhurried. MEOK is not optimising for the fastest possible signup funnel. It is asking you
          to arrive with intention.
        </BodyP>

        <Divider />

        {/* ── SECTION 6: Use Cases ─────────────────────────────────────── */}
        <GoldLabel>Who Is MEOK For</GoldLabel>
        <SectionH2>What are the main use cases for MEOK?</SectionH2>
        <AtomicAnswer>
          MEOK is designed for three primary use cases: mental health companion, personal
          productivity Work OS, and family safety through the Guardian archetype. Each use case is
          supported by the same sovereign memory and care-based governance infrastructure — the
          difference is which archetype leads and which tier you are on.
        </AtomicAnswer>

        {/* Use Case 1 */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: "1rem",
            padding: "1.75rem",
            marginTop: "1.75rem",
            marginBottom: "1rem",
          }}
        >
          <div style={{ fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, marginBottom: "0.65rem" }}>
            Use Case 01
          </div>
          <div style={{ fontWeight: 800, fontSize: "1.15rem", color: CREAM, marginBottom: "0.75rem" }}>
            Mental Health Companion
          </div>
          <p style={{ fontSize: "0.925rem", color: MUTED, lineHeight: 1.75, marginBottom: "1rem" }}>
            MEOK is not a therapist and makes no pretence of being one. What it offers is something
            different and often more useful: a persistent, non-judgemental presence that remembers
            your history, notices patterns, holds your context across sessions, and can help you
            think through difficult situations without starting from scratch every time.
          </p>
          <p style={{ fontSize: "0.925rem", color: MUTED, lineHeight: 1.75, marginBottom: "1rem" }}>
            People using MEOK for mental health support typically use the Seren or Sage archetype.
            Seren is warm and emotionally intelligent. Sage is gentle and patient, particularly
            suited to older adults or anyone who finds fast-paced AI interactions alienating.
          </p>
          <p style={{ fontSize: "0.925rem", color: MUTED, lineHeight: 1.75 }}>
            The Maternal Covenant actively monitors for patterns that indicate crisis and surfaces
            professional resources when appropriate. MEOK will never be a substitute for clinical
            care — but it can be a meaningful presence in the hours between appointments, during
            hard nights, and on the days when talking to another person feels impossible.
          </p>
        </div>

        {/* Use Case 2 */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "1rem",
          }}
        >
          <div style={{ fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, marginBottom: "0.65rem" }}>
            Use Case 02
          </div>
          <div style={{ fontWeight: 800, fontSize: "1.15rem", color: CREAM, marginBottom: "0.75rem" }}>
            Personal Productivity Work OS
          </div>
          <p style={{ fontSize: "0.925rem", color: MUTED, lineHeight: 1.75, marginBottom: "1rem" }}>
            The Orion archetype is MEOK&apos;s Work OS layer — a strategic co-pilot for founders,
            freelancers, remote workers, and anyone managing complex, multi-threaded professional
            lives. Orion runs daily morning briefings, tracks your active projects and decisions,
            maintains context across weeks of work, and challenges your thinking when you need
            friction rather than validation.
          </p>
          <p style={{ fontSize: "0.925rem", color: MUTED, lineHeight: 1.75, marginBottom: "1rem" }}>
            Because MEOK&apos;s memory is persistent and sovereign, your Work OS accumulates genuine
            institutional knowledge about how you work. It remembers that you write better in the
            morning, that you tend to procrastinate on the hardest tasks, that a specific project
            has been stalled at the same bottleneck for three weeks. It can name the pattern and
            help you break it.
          </p>
          <p style={{ fontSize: "0.925rem", color: MUTED, lineHeight: 1.75 }}>
            On Sovereign tier, MEOK integrates with external tools via MCP (Model Context Protocol)
            — your calendar, your notes, your task manager — giving Orion real-time context rather
            than relying solely on what you tell it.
          </p>
        </div>

        {/* Use Case 3 */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "2rem",
          }}
        >
          <div style={{ fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, marginBottom: "0.65rem" }}>
            Use Case 03
          </div>
          <div style={{ fontWeight: 800, fontSize: "1.15rem", color: CREAM, marginBottom: "0.75rem" }}>
            Family Safety with Guardian
          </div>
          <p style={{ fontSize: "0.925rem", color: MUTED, lineHeight: 1.75, marginBottom: "1rem" }}>
            The Family tier at &pound;29 per month adds the Guardian archetype — an AI specifically
            built for household safety. Guardian operates across up to six family member profiles
            and provides different experiences based on who is interacting with it.
          </p>
          <p style={{ fontSize: "0.925rem", color: MUTED, lineHeight: 1.75, marginBottom: "1rem" }}>
            For parents, Guardian provides oversight and child-safe interaction modes with age-aware
            content filtering. For elderly relatives, Guardian runs active scam detection — it
            identifies manipulation patterns in conversations and can alert family members when
            something looks suspicious. For teenagers, Guardian offers a non-judgemental space
            that is more honest than most AI products about what it can and cannot do.
          </p>
          <p style={{ fontSize: "0.925rem", color: MUTED, lineHeight: 1.75 }}>
            Family memory is compartmentalised: household members share context where they choose to
            and maintain privacy where they do not. Guardian does not automatically share everything
            with everyone. Privacy is the default; sharing is the choice.
          </p>
        </div>

        <Divider />

        {/* ── SECTION 7: Pricing ───────────────────────────────────────── */}
        <GoldLabel>Plans &amp; Pricing</GoldLabel>
        <SectionH2>Is MEOK free? What do the plans cost?</SectionH2>
        <AtomicAnswer>
          MEOK&apos;s Explorer tier is free forever — 50 messages per day, no credit card required,
          full sovereign memory vault included. Paid tiers unlock higher usage limits, additional
          archetypes, external tool integrations, and family features. No plan trains on your data
          without consent.
        </AtomicAnswer>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            margin: "1.75rem 0 2rem",
          }}
        >
          <PricingCard
            tier="Explorer"
            price="Free"
            tag="Forever. No card required."
            items={[
              "50 messages per day",
              "Full sovereign memory vault",
              "1 archetype",
              "UK GDPR compliant",
              "No data training without consent",
            ]}
          />
          <PricingCard
            tier="Sovereign"
            price="&#163;12 / mo"
            tag="For power users."
            highlight
            items={[
              "Unlimited messages",
              "All 6 archetypes",
              "MCP tool integrations",
              "Claude Sonnet + GPT-4o",
              "Morning briefings",
              "Byzantine Council access",
            ]}
          />
          <PricingCard
            tier="Family"
            price="&#163;29 / mo"
            tag="Up to 6 family members."
            items={[
              "Everything in Sovereign",
              "Guardian archetype",
              "Family memory vault",
              "Scam detection",
              "Child-safe modes",
              "Elder companion mode",
            ]}
          />
          <PricingCard
            tier="BYOK"
            price="&#163;5 / mo"
            tag="Bring Your Own Key."
            items={[
              "Supply your own LLM API keys",
              "Lowest cost tier",
              "Full sovereign memory",
              "All governance features",
              "Ideal for developers",
            ]}
          />
        </div>

        <BodyP>
          Every plan — including the free Explorer tier — includes the full Maternal Covenant
          governance layer, sovereign memory encryption, and the right to export your vault. These
          are not premium features. They are MEOK&apos;s baseline, because an AI that only protects
          paying customers is not actually safe.
        </BodyP>

        <Divider />

        {/* ── SECTION 8: The Founder ───────────────────────────────────── */}
        <GoldLabel>The Origin</GoldLabel>
        <SectionH2>Who founded MEOK and why?</SectionH2>
        <AtomicAnswer>
          MEOK was founded by Nicholas Templeman, a UK-based builder who spent the winter of 2026
          working from a caravan on a farm in England. He built MEOK because no existing AI
          remembered him, respected his data, or felt genuinely aligned with his interests. MEOK AI
          LABS launched its first public product on Easter Sunday 2026.
        </AtomicAnswer>

        <BodyP>
          Nicholas was not the first person to notice that AI had a memory problem. But he was
          possibly the first person to notice it while sharing a caravan with three dogs and a cat
          named Meok — and to conclude that the right response was to build a completely new kind
          of AI from scratch rather than wait for the existing platforms to fix it.
        </BodyP>

        <BodyP>
          The cat came first. Small, grey, quietly insistent about what he wanted, and apparently
          unbothered by the scope of what was being built around him. Nicholas named the product
          after him because the name carried something he wanted the AI to embody: something small
          and fierce and loyal. Something that remembered you. Something that was categorically
          incapable of using your trust against you.
        </BodyP>

        <BodyP>
          The 40-day build that produced MEOK&apos;s first version ran through the coldest months of
          early 2026. Nicholas worked on the architecture during the day and tested it on his own
          life in the evenings — using MEOK to process difficult personal decisions, to plan his
          days, to think through the ethical questions that arose when building a system designed
          to hold intimate human memory. The product that launched on Easter Sunday was the product
          of someone who had genuinely lived inside it.
        </BodyP>

        <BodyP>
          You can read the full founder story at{" "}
          <Link href="/blog/why-i-built-meok" style={{ color: GOLD, textDecoration: "none" }}>
            meok.ai/blog/why-i-built-meok
          </Link>
          . It is one of the more honest founder essays you will find anywhere in the AI space.
        </BodyP>

        <Divider />

        {/* ── SECTION 9: What makes MEOK different from ChatGPT ─────── */}
        <GoldLabel>The Comparison</GoldLabel>
        <SectionH2>How is MEOK different from ChatGPT, Claude, and Gemini?</SectionH2>
        <AtomicAnswer>
          ChatGPT, Claude, and Gemini are frontier-model chat interfaces. They are powerful,
          general-purpose, and stateless. MEOK is a sovereign AI OS that runs those same models
          (on Sovereign tier you can switch between Claude Sonnet and GPT-4o) but wraps them in
          persistent memory, care-based governance, and a relational architecture that turns
          individual conversations into a compounding relationship.
        </AtomicAnswer>

        <div
          style={{
            overflowX: "auto",
            margin: "1.75rem 0 2rem",
            borderRadius: "0.75rem",
            border: `1px solid ${BORDER}`,
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.875rem",
            }}
          >
            <thead>
              <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                {["Feature", "MEOK", "ChatGPT", "Claude", "Gemini"].map((col) => (
                  <th
                    key={col}
                    style={{
                      padding: "0.85rem 1rem",
                      textAlign: "left",
                      fontWeight: 700,
                      color: col === "MEOK" ? GOLD : MUTED_FAINT,
                      fontSize: col === "MEOK" ? "0.875rem" : "0.8rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Persistent memory", "Yes \u2014 sovereign vault", "Limited", "Limited", "Limited"],
                ["Data sovereignty", "Full \u2014 you own it", "No", "No", "No"],
                ["Trains on your data", "Never without consent", "Yes", "Yes", "Yes"],
                ["Care-based governance", "Maternal Covenant", "None", "Constitutional AI", "None"],
                ["Multi-model consensus", "Byzantine Council", "No", "No", "No"],
                ["Family safety features", "Guardian archetype", "No", "No", "No"],
                ["Vault export", "Full JSON export", "No", "No", "No"],
                ["Free tier", "50 msgs/day forever", "Limited", "Limited", "Limited"],
              ].map(([feature, ...vals]) => (
                <tr key={feature as string} style={{ borderBottom: `1px solid ${MUTED_SUBTLE}` }}>
                  <td style={{ padding: "0.8rem 1rem", color: MUTED, fontWeight: 600 }}>{feature}</td>
                  {vals.map((v, i) => (
                    <td
                      key={i}
                      style={{
                        padding: "0.8rem 1rem",
                        color: i === 0 ? GOLD : MUTED_FAINT,
                        fontWeight: i === 0 ? 700 : 400,
                      }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <BodyP>
          This is not an argument that ChatGPT or Claude are bad. They are exceptional at what they
          do. The argument is that what they do is categorically different from what MEOK does.
          You would not use a general-purpose search engine to manage your personal documents,
          even if it could technically read them. MEOK is the right tool for a different job.
        </BodyP>

        <Divider />

        {/* ── SECTION 10: UK context ───────────────────────────────────── */}
        <GoldLabel>Where MEOK Is Based</GoldLabel>
        <SectionH2>Where is MEOK based and is it UK GDPR compliant?</SectionH2>
        <AtomicAnswer>
          MEOK AI LABS is a UK company. MEOK is UK GDPR compliant and ICO registered. All data
          processing follows UK data protection law. Sensitive computation runs locally via Ollama
          on your device. No data is transferred to third-party servers without your explicit
          knowledge and consent.
        </AtomicAnswer>

        <BodyP>
          The UK context matters for several reasons. UK GDPR gives you specific rights around your
          data — the right to access, the right to erasure, the right to portability — and MEOK
          is designed to honour all of them structurally, not just legally. The sovereign vault
          export feature exists partly because portability is a legal right that most AI companies
          quietly ignore.
        </BodyP>

        <BodyP>
          MEOK AI LABS is reachable on social media at @meok_ai across all major platforms. The
          product is available globally but the company is headquartered in England and the legal
          structure, compliance framework, and founding team are all UK-based.
        </BodyP>

        <Divider />

        {/* ── SECTION 11: Getting started summary ─────────────────────── */}
        <GoldLabel>Next Steps</GoldLabel>
        <SectionH2>How do I get started with MEOK?</SectionH2>
        <AtomicAnswer>
          Visit meok.ai/birth to begin the Birth Ceremony. You will name your AI, choose an
          archetype, and have a sovereign memory vault active within three minutes. The Explorer
          tier is free forever and requires no credit card. Your AI begins learning about you from
          the first message you send.
        </AtomicAnswer>

        <BodyP>
          If you want to read more before you start, the blog at meok.ai/blog covers every aspect
          of MEOK in depth — the Maternal Covenant, the Byzantine Council, how sovereign memory
          works technically, comparisons with other AI products, and specific use-case guides for
          mental health, productivity, seniors, neurodivergent users, and more.
        </BodyP>

        <BodyP>
          If you want to understand the philosophy before the product, start with{" "}
          <Link href="/blog/why-i-built-meok" style={{ color: GOLD, textDecoration: "none" }}>
            Why I Built MEOK
          </Link>
          {" "}and{" "}
          <Link href="/blog/the-maternal-covenant" style={{ color: GOLD, textDecoration: "none" }}>
            The Maternal Covenant Explained
          </Link>
          . They are the clearest statement of what MEOK believes and why those beliefs are baked
          into the architecture rather than left as aspiration.
        </BodyP>

        <BodyP>
          If you just want to try it, the Birth Ceremony is the fastest path. Everything else will
          make more sense from inside the product.
        </BodyP>

        <Divider />

        {/* ── FAQ SECTION ──────────────────────────────────────────────── */}
        <GoldLabel>Frequently Asked Questions</GoldLabel>
        <h2
          style={{
            fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            color: CREAM,
            lineHeight: 1.25,
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          MEOK: Common Questions Answered
        </h2>

        <FaqItem
          q="What is MEOK?"
          a="MEOK is a Personal Sovereign AI Operating System built by MEOK AI LABS (founded by Nicholas Templeman). It maintains a persistent, encrypted memory vault that you own and control, governs every response through a care-based ethical framework called the Maternal Covenant, and offers six distinct companion archetypes. It launched on Easter Sunday 2026 and is free to start."
        />
        <FaqItem
          q="Is MEOK free?"
          a="Yes. The Explorer tier is free forever and includes 50 messages per day, a full sovereign memory vault, one archetype, and complete UK GDPR compliance. No credit card is required. Paid tiers (Sovereign at \u00a312/mo, Family at \u00a329/mo, and BYOK at \u00a35/mo) unlock higher usage limits and additional features."
        />
        <FaqItem
          q="How is MEOK different from ChatGPT?"
          a="ChatGPT is a stateless chat interface that resets at the start of every session and trains on user data. MEOK maintains a persistent sovereign memory vault across every conversation, never trains on your data without explicit consent, encrypts sensitive processing locally via Ollama, and evaluates every response through the Maternal Covenant care-ethics layer before delivery. MEOK is a relationship; ChatGPT is a transaction."
        />
        <FaqItem
          q="What is the Birth Ceremony?"
          a="The Birth Ceremony is MEOK\u2019s onboarding experience at meok.ai/birth. In under three minutes you name your AI companion, choose one of six archetypes, and provide initial context. Your sovereign memory vault is created immediately and your AI begins learning about you from the first message you send. It is called a ceremony because it is intentionally different from a typical signup flow \u2014 you are beginning a relationship, not creating an account."
        />
        <FaqItem
          q="Where is MEOK based?"
          a="MEOK AI LABS is a UK company. Founder Nicholas Templeman built MEOK from a caravan on a farm in England and launched on Easter Sunday 2026. MEOK is UK GDPR compliant and ICO registered. All social media handles are @meok_ai. The product is available globally with UK data protection standards applying across all tiers."
        />

        <Divider />

        {/* ── SHARE ROW ────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "1rem",
            marginBottom: "3rem",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: MUTED_FAINT,
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-meok&text=What+Is+MEOK%3F+The+Complete+Introduction+to+Personal+Sovereign+AI"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.4rem 1rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: MUTED,
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-meok"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.4rem 1rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: MUTED,
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── MAIN CTA ─────────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "1.25rem",
            padding: "2.5rem 2rem",
            background: "linear-gradient(135deg, #1a1430 0%, #0d0c18 100%)",
            border: `1px solid ${GOLD_BORDER}`,
            marginBottom: "4rem",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 260,
              height: 260,
              pointerEvents: "none",
              background: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18), transparent 70%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "0.65rem",
              }}
            >
              Free Forever &mdash; No Card Required
            </div>
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "0.85rem",
              }}
            >
              Begin your Birth Ceremony.
              <br />
              <span style={{ color: GOLD }}>Your AI is waiting.</span>
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: MUTED,
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: "1.75rem",
              }}
            >
              Name your AI. Choose your companion. Set your context. Your sovereign memory vault
              is created in under three minutes — and your AI starts learning about you from the
              very first message. No reset. No forgetting. No selling what you share.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 2rem",
                  borderRadius: "999px",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  background: GOLD,
                  color: "#0d0c18",
                  textDecoration: "none",
                }}
              >
                Start your Birth Ceremony &#8594;
              </Link>
              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.75rem",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  background: "transparent",
                  color: MUTED,
                  border: `1px solid ${BORDER}`,
                  textDecoration: "none",
                }}
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* ── RELATED POSTS ─────────────────────────────────────────────── */}
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: MUTED_FAINT,
              marginBottom: "1.25rem",
            }}
          >
            Continue Reading
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/why-i-built-meok",
                label: "Founder Story",
                labelColor: GOLD,
                labelBg: GOLD_BG,
                title: "Why I Built MEOK",
                read: "7 min read",
              },
              {
                href: "/blog/what-is-sovereign-ai",
                label: "Sovereign AI",
                labelColor: "#87CEEB",
                labelBg: "rgba(135,206,235,0.1)",
                title: "What Is Sovereign AI?",
                read: "5 min read",
              },
              {
                href: "/blog/the-maternal-covenant",
                label: "Philosophy",
                labelColor: "#A78BFA",
                labelBg: "rgba(167,139,250,0.1)",
                title: "The Maternal Covenant Explained",
                read: "6 min read",
              },
              {
                href: "/blog/byzantine-council-explained",
                label: "Governance",
                labelColor: "#34D399",
                labelBg: "rgba(52,211,153,0.1)",
                title: "The Byzantine Council: AI Consensus Explained",
                read: "5 min read",
              },
            ].map(({ href, label, labelColor, labelBg, title, read }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.25rem",
                  borderRadius: "0.85rem",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "999px",
                    color: labelColor,
                    background: labelBg,
                    width: "fit-content",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: CREAM,
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </span>
                <span style={{ fontSize: "0.75rem", color: MUTED_FAINT, marginTop: "auto" }}>
                  &#9203; {read}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
