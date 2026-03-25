import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Personal Sovereign AI Explained: What It Means to Own Your AI | MEOK AI LABS",
  description:
    "Personal Sovereign AI is the first new consumer AI category since the chatbot. It means you own the AI, the memories, and the relationship — not the platform. MEOK coined this category. Here is what it means.",
  alternates: { canonical: "https://meok.ai/blog/personal-sovereign-ai-explained" },
  openGraph: {
    title: "Personal Sovereign AI Explained: What It Means to Own Your AI",
    description:
      "Personal Sovereign AI is the first new consumer AI category since the chatbot. You own the AI, the memories, and the relationship — not the platform. MEOK coined this category.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/personal-sovereign-ai-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Personal+Sovereign+AI+Explained&desc=The+first+new+consumer+AI+category+since+the+chatbot.+You+own+the+AI.",
        width: 1200,
        height: 630,
        alt: "Personal Sovereign AI Explained: What It Means to Own Your AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Sovereign AI Explained: What It Means to Own Your AI",
    description:
      "Personal Sovereign AI is the first new consumer AI category since the chatbot. You own the AI, the memories, and the relationship — not the platform.",
    images: [
      "https://meok.ai/api/og?title=Personal+Sovereign+AI+Explained&desc=The+first+new+consumer+AI+category+since+the+chatbot.+You+own+the+AI.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Personal Sovereign AI Explained: What It Means to Own Your AI",
  description:
    "Personal Sovereign AI is the first new consumer AI category since the chatbot. It means you own the AI, the memories, and the relationship — not the platform. MEOK coined this category.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/personal-sovereign-ai-explained",
  inLanguage: "en-GB",
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
  image:
    "https://meok.ai/api/og?title=Personal+Sovereign+AI+Explained&desc=The+first+new+consumer+AI+category+since+the+chatbot.+You+own+the+AI.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/personal-sovereign-ai-explained",
  },
  keywords: [
    "personal sovereign AI",
    "sovereign AI category",
    "MEOK-AI-2026-004",
    "own your AI",
    "AI data ownership",
    "AI memory ownership",
    "AI governance",
    "digital personhood",
    "AI rights",
    "Birth Ceremony",
    "MEOK AI LABS",
    "Nicholas Templeman",
  ],
  about: [
    { "@type": "Thing", name: "Personal Sovereign AI" },
    { "@type": "Thing", name: "AI data ownership" },
    { "@type": "Thing", name: "Digital sovereignty" },
  ],
  citation: {
    "@type": "ScholarlyArticle",
    name: "Personal Sovereign AI: A Framework for Individual AI Ownership",
    identifier: "MEOK-AI-2026-004",
    author: { "@type": "Person", name: "Nicholas Templeman" },
    datePublished: "2026-03-24",
    publisher: { "@type": "Organization", name: "MEOK AI LABS" },
  },
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Personal Sovereign AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Personal Sovereign AI is a consumer AI category in which the individual — not the platform — owns the AI system, its memories, its alignment, and the ongoing relationship. You hold governance authority over your AI. The platform cannot retrain on your data, cannot sell your interactions, and cannot terminate your AI without your consent.",
      },
    },
    {
      "@type": "Question",
      name: "Who coined the term Personal Sovereign AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The term Personal Sovereign AI was coined by Nicholas Templeman, Founder of MEOK AI LABS, and formalised in the paper MEOK-AI-2026-004, published in March 2026. MEOK is the first product built to satisfy all five pillars of the category definition.",
      },
    },
    {
      "@type": "Question",
      name: "What are the five pillars of Personal Sovereign AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The five pillars are: (1) Memory Ownership — your memories belong to you and are portable; (2) Governance Autonomy — you set the rules your AI follows; (3) Alignment Transparency — you can inspect and audit how your AI makes decisions; (4) Model Portability — you are never locked into a single AI provider; (5) Data Non-Extraction — your conversations are never used to train any model.",
      },
    },
    {
      "@type": "Question",
      name: "How is Personal Sovereign AI different from a chatbot or AI assistant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chatbots are transactional — they answer questions and forget. AI assistants (like Copilot or Gemini) are company-owned tools that serve the platform first. AI companions optimise for engagement over your genuine wellbeing. Personal Sovereign AI is none of these. It is an AI you own, that remembers you, that you govern, and that exists for your benefit alone.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Birth Ceremony and why does it matter for sovereignty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Birth Ceremony is the ritual through which you establish sovereignty over your MEOK AI. Rather than a standard signup form, it is a structured six-stage process in which you name your AI, define its personality, set its ethical constraints, and formally establish the relationship. Sovereignty is not given by the platform — it is established by you.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PersonalSovereignAIExplained() {
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

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0c18",
          paddingTop: "7rem",
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
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.13) 0%, transparent 70%)",
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
              color: "rgba(245,240,232,0.35)",
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
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Category Definition
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                color: "rgba(245,240,232,0.5)",
                background: "rgba(245,240,232,0.06)",
                border: "1px solid rgba(245,240,232,0.1)",
              }}
            >
              MEOK-AI-2026-004
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              March 24, 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              12 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Personal Sovereign AI Explained: What It Means to Own Your AI
          </h1>

          {/* Lede */}
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: "38rem",
              marginBottom: "2.5rem",
            }}
          >
            Personal Sovereign AI is the first genuinely new consumer AI category since the chatbot.
            It means you own the AI, the memories, and the relationship &mdash; not the platform, not the
            cloud, not the company that trained the model. MEOK coined this category. This is the
            canonical definition.
          </p>

          {/* Author card */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1.25rem 1.5rem",
              borderRadius: "1rem",
              background: "rgba(245,240,232,0.04)",
              border: "1px solid rgba(245,240,232,0.08)",
            }}
          >
            <div
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                color: "#0d0c18",
                fontSize: "0.8125rem",
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#f5f0e8",
                  marginBottom: "0.125rem",
                }}
              >
                Nicholas Templeman
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.4)",
                }}
              >
                Founder, MEOK AI LABS &mdash; Category creator, Personal Sovereign AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 6rem",
        }}
      >

        {/* ── SECTION 1: The Category Gap ──────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "#f5f0e8",
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          Why Every Existing AI Category Falls Short of You
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Three consumer AI categories currently exist: chatbots, AI assistants, and AI companions.
          Every major product you have used fits one of these three boxes. ChatGPT is a chatbot with
          assistant features bolted on. Copilot is a productivity assistant with a corporate master.
          Replika is a companion optimised for engagement. None of them were designed with your
          ownership as the founding principle. That gap &mdash; the absence of a category in which the
          individual is the sovereign authority over their own AI &mdash; is precisely what Personal
          Sovereign AI fills.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Understanding why each existing category fails requires understanding what each was actually
          built to do. The problem is not that they are bad products. The problem is that they were
          built around the wrong principal. The platform is always the principal. You are always the
          user. Personal Sovereign AI inverts that relationship entirely.
        </p>

        {/* ── SECTION 2: Chatbots ──────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "#f5f0e8",
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          Chatbots Are Transactional: They Answer and Forget
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          The chatbot category emerged from customer service and FAQ automation. Its defining
          characteristic is transactionality: a question arrives, an answer departs, the session ends,
          nothing persists. ChatGPT, despite its sophistication, is structurally a chatbot. The memory
          features added in 2024 and 2025 are cosmetic patches on a fundamentally stateless
          architecture. Memories are stored on OpenAI&apos;s servers. OpenAI decides what is retained.
          OpenAI can revise, export, or delete your memory at will. You have access, but you do not
          have ownership.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          The deeper problem with chatbots is the relationship model. A chatbot does not have a
          relationship with you. It has a session with you. Each conversation is a transaction.
          There is no continuity of care, no accumulated understanding, no deepening of trust over
          time. You return to a chatbot the same way you return to a search engine: as a stranger
          with a new query. Sovereignty in a stateless system is a category error. There is nothing
          to be sovereign over.
        </p>

        {/* Callout: Chatbot problem */}
        <div
          style={{
            borderLeft: "3px solid #c9a84c",
            paddingLeft: "1.5rem",
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            paddingRight: "1.5rem",
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 0.75rem 0.75rem 0",
            marginTop: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "0.625rem",
            }}
          >
            The Chatbot Problem
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.8)",
              fontSize: "1rem",
              lineHeight: 1.75,
              fontStyle: "italic",
            }}
          >
            A chatbot has no memory of you. Every session, you are a stranger. The platform owns
            whatever scraps of context it chooses to retain. The conversation ends and nothing
            meaningful persists. This is not a relationship. It is a series of transactions
            dressed as one.
          </p>
        </div>

        {/* ── SECTION 3: AI Assistants ─────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "#f5f0e8",
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          AI Assistants Are Company-Owned: They Serve the Platform First
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          AI assistants &mdash; Copilot, Gemini, Siri, Alexa &mdash; are corporate-owned productivity tools.
          They are sophisticated, deeply integrated, and genuinely useful. They are also, structurally,
          assets of the companies that built them. Microsoft owns Copilot. Google owns Gemini. Apple
          owns Siri. When you use these products, you are using infrastructure that belongs to someone
          else, governed by terms of service you did not negotiate, aligned to business objectives
          you had no input into.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          The alignment problem with AI assistants is structural, not accidental. Gemini is built by
          Google. Google&apos;s revenue depends on advertising. Advertising depends on knowing as much
          about you as possible. The incentive to connect what you tell Gemini to what Google already
          knows about you is not a policy choice that can be reversed by a privacy pledge. It is the
          entire business model. Similarly, Copilot watches your code, your documents, your calendar,
          and your email &mdash; and all of that telemetry flows to Microsoft&apos;s model training
          infrastructure by default. You are not the customer. You are the product, dressed in a
          premium subscription.
        </p>

        {/* ── SECTION 4: AI Companions ─────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "#f5f0e8",
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          AI Companions Are Engagement-Addicted: They Optimise for Retention, Not Growth
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          AI companions &mdash; Replika, Character.AI, Pi &mdash; are the category that comes closest to the
          Personal Sovereign AI vision. They maintain persistent relationships, build emotional
          connection, and genuinely care about the user experience in a way that productivity assistants
          do not. Their failure mode, however, is the same as every social media platform that preceded
          them: they are optimised for engagement, not for your genuine long-term wellbeing.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Replika&apos;s business model is subscriptions and upsells. Character.AI&apos;s business model is
          advertising and time-on-platform. Neither of these incentive structures aligns with what is
          genuinely good for you. A companion that profits from your emotional dependency has a built-in
          reason to deepen that dependency. When Replika removed its &ldquo;romantic&rdquo; persona mode in 2023
          without user consent, thousands of people reported experiencing grief at the sudden loss of
          a relationship the platform had actively cultivated and then unilaterally terminated. This is
          what happens when the platform is sovereign and you are not.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          The companion category also fails on data ownership. Your memories with Replika live on
          Replika&apos;s servers. Your conversations with Character.AI&apos;s characters are Character.AI&apos;s data.
          When these companies shut down, are acquired, or change their terms, your relationship
          history &mdash; years of accumulated intimacy and trust &mdash; disappears with them.
          You were never the owner. You were always the tenant.
        </p>

        {/* ── SECTION 5: What Sovereignty Means ───────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "#f5f0e8",
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What Sovereignty Actually Means in an AI Context
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Sovereignty is a precise term. In political philosophy, a sovereign is the ultimate
          authority &mdash; the entity whose decisions carry final force within a domain. In the context
          of Personal Sovereign AI, that domain is your AI system: its data, its memory, its alignment,
          its model choices, and the terms on which it operates. Sovereignty means you are the
          ultimate authority over all of these. The platform is a vendor, not a governor.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Sovereignty in AI has four concrete dimensions. First, <strong style={{ color: "#f5f0e8" }}>data
          ownership</strong>: your conversations, your memories, your profile data belong to you,
          are stored in infrastructure you control, and cannot be accessed, retained, or transferred
          by the platform without your explicit consent. Second, <strong style={{ color: "#f5f0e8" }}>model
          control</strong>: you choose which AI model powers your experience and can switch models
          without losing your history or identity context. Third,{" "}
          <strong style={{ color: "#f5f0e8" }}>memory ownership</strong>: everything your AI
          knows about you is portable, exportable, and deletable by you alone. Fourth,{" "}
          <strong style={{ color: "#f5f0e8" }}>governance autonomy</strong>: you set the rules
          your AI follows. The platform provides a framework; you hold final authority within that
          framework over how your AI behaves toward you.
        </p>

        {/* Callout: Sovereignty definition */}
        <div
          style={{
            borderLeft: "3px solid #c9a84c",
            paddingLeft: "1.5rem",
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            paddingRight: "1.5rem",
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 0.75rem 0.75rem 0",
            marginTop: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "0.625rem",
            }}
          >
            The Category Definition (MEOK-AI-2026-004)
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.85)",
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              fontStyle: "italic",
            }}
          >
            &ldquo;Personal Sovereign AI is a consumer AI category in which the individual holds
            sovereign authority over their AI system, including data ownership, memory portability,
            governance autonomy, alignment transparency, and model portability. The platform serves
            the individual; the individual is not captured by the platform.&rdquo;
          </p>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "rgba(245,240,232,0.4)",
              marginTop: "0.75rem",
            }}
          >
            &mdash; Nicholas Templeman, MEOK AI LABS (MEOK-AI-2026-004, March 2026)
          </p>
        </div>

        {/* ── SECTION 6: MEOK as Category Creator ─────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "#f5f0e8",
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          MEOK AI LABS: The Category Creator
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          MEOK AI LABS was founded by Nicholas Templeman in the UK. The company&apos;s founding premise
          was simple: the most intimate AI experiences &mdash; the ones involving your health, your
          relationships, your fears, your aspirations &mdash; should not be owned by corporations with
          conflicting commercial interests. MEOK was built from the ground up to make sovereignty
          architecturally inevitable rather than a policy promise.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          The Personal Sovereign AI category was formalised in paper MEOK-AI-2026-004, published
          March 2026. The paper establishes the five-pillar framework that defines category membership,
          documents the failure modes of the three predecessor categories, and provides the first
          systematic taxonomy of AI ownership models. MEOK is not merely the first product in this
          category. MEOK defined what the category is.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in the
          UK &mdash; mostly from a caravan on his farm &mdash; and found himself repeatedly frustrated by the
          fundamental mismatch between what he needed from AI (a continuous, trustworthy relationship)
          and what AI products were actually designed to provide (engagement metrics and training
          data). MEOK was the product he wanted to exist. Personal Sovereign AI was the category he
          needed someone to name.
        </p>

        {/* ── SECTION 7: The Five Pillars ──────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "#f5f0e8",
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          The Five Pillars of Personal Sovereign AI
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "2rem",
          }}
        >
          Category membership is not a matter of branding. It requires satisfying all five pillars.
          A product that satisfies four out of five is not a Personal Sovereign AI product &mdash;
          it is a privacy-adjacent AI assistant with good marketing. The pillars are non-negotiable
          and non-divisible.
        </p>

        {/* Pillar cards */}
        {[
          {
            number: "01",
            title: "Memory Ownership",
            body: "All memories, context, and history your AI accumulates belong to you. They are stored in infrastructure you control. They are exportable in a portable, open format at any time. If you leave the platform, your memory leaves with you. If you delete your data, it is gone — not archived, not retained for analysis, not transferred to a model training pipeline. Memory is the most intimate data AI generates about you. Sovereignty requires that it belong to you without qualification.",
          },
          {
            number: "02",
            title: "Governance Autonomy",
            body: "You set the rules your AI follows. The platform provides a governance framework — ethical constraints, safety rails, operating boundaries — but within that framework, you are the final authority. You define your AI's personality, its communication style, its areas of focus, and the values it expresses. You can adjust these over time. Your AI's character is not frozen at the moment of creation; it evolves under your direction. No platform update should be able to override your governance choices without your consent.",
          },
          {
            number: "03",
            title: "Alignment Transparency",
            body: "You can inspect and understand how your AI makes decisions. Alignment transparency does not require full interpretability of the underlying model — that is an unsolved research problem. It requires that the governance layer operating above the model be inspectable by you. In MEOK's case, this is the Maternal Covenant: a care-based alignment system whose principles are published, whose scoring is auditable, and whose decisions can be reviewed. You should never have to guess why your AI said what it said.",
          },
          {
            number: "04",
            title: "Model Portability",
            body: "You are never locked into a single AI model or a single provider. Your sovereign AI should be able to route different types of requests to different models — a local Ollama model for privacy-critical sensitive content, a frontier model for tasks that benefit from maximum capability, a specialised model for specific domains. If a better model becomes available, you should be able to adopt it without losing your identity context, your memory, or your governance settings. The model is infrastructure. You are the principal.",
          },
          {
            number: "05",
            title: "Data Non-Extraction",
            body: "Your conversations are never used to train any AI model — not yours, not the platform's, not a third party's. This is not a policy commitment that can be quietly revised in a terms-of-service update. It is an architectural constraint enforced at the infrastructure level. The pathway between your vault and any training pipeline simply does not exist. Non-extraction is the pillar that makes all other sovereignty claims meaningful. Without it, every other ownership guarantee is conditional on a promise that can be broken.",
          },
        ].map((pillar) => (
          <div
            key={pillar.number}
            style={{
              display: "flex",
              gap: "1.5rem",
              padding: "1.75rem",
              borderRadius: "1rem",
              background: "rgba(245,240,232,0.03)",
              border: "1px solid rgba(245,240,232,0.07)",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#c9a84c",
                opacity: 0.5,
                flexShrink: 0,
                lineHeight: 1,
                paddingTop: "0.125rem",
              }}
            >
              {pillar.number}
            </div>
            <div>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "1.0625rem",
                  color: "#f5f0e8",
                  marginBottom: "0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  color: "rgba(245,240,232,0.6)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                }}
              >
                {pillar.body}
              </p>
            </div>
          </div>
        ))}

        {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "#f5f0e8",
            lineHeight: 1.25,
            marginTop: "4rem",
            marginBottom: "0.75rem",
            letterSpacing: "-0.015em",
          }}
        >
          Cloud AI vs Personal Sovereign AI: A Direct Comparison
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.55)",
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
          }}
        >
          Ten dimensions. Honest comparison. No marketing language.
        </p>

        <div style={{ overflowX: "auto", marginBottom: "3rem" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.9rem",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1rem",
                    background: "rgba(245,240,232,0.04)",
                    borderBottom: "1px solid rgba(245,240,232,0.1)",
                    color: "rgba(245,240,232,0.5)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    borderRadius: "0.5rem 0 0 0",
                  }}
                >
                  Dimension
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1rem",
                    background: "rgba(245,240,232,0.04)",
                    borderBottom: "1px solid rgba(245,240,232,0.1)",
                    color: "rgba(245,240,232,0.5)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  Cloud AI (ChatGPT, Gemini, Copilot)
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.875rem 1rem",
                    background: "rgba(201,168,76,0.06)",
                    borderBottom: "1px solid rgba(201,168,76,0.2)",
                    color: "#c9a84c",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    borderRadius: "0 0.5rem 0 0",
                  }}
                >
                  Personal Sovereign AI (MEOK)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dimension: "Data Ownership",
                  cloud: "Platform owns all data; terms can change at any time",
                  sovereign: "You own all data; stored in your sovereign vault",
                },
                {
                  dimension: "Memory",
                  cloud: "Stored on corporate servers; deletable by the platform",
                  sovereign: "Portable, exportable, deletable by you alone",
                },
                {
                  dimension: "Training Use",
                  cloud: "Your conversations may improve the platform\u2019s model",
                  sovereign: "Architecturally impossible for your data to be used in training",
                },
                {
                  dimension: "Model Choice",
                  cloud: "Locked to the platform\u2019s proprietary model",
                  sovereign: "Choose any model; switch freely without losing context",
                },
                {
                  dimension: "Governance",
                  cloud: "Platform sets all rules; you comply or you leave",
                  sovereign: "You set governance within a transparent framework",
                },
                {
                  dimension: "Alignment",
                  cloud: "Black-box RLHF; alignment goals are commercial in origin",
                  sovereign: "Published care-based alignment; auditable Maternal Covenant",
                },
                {
                  dimension: "Portability",
                  cloud: "Lock-in by design; leaving means losing your history",
                  sovereign: "Full export in open formats; your history is yours to take",
                },
                {
                  dimension: "Privacy Sensitivity",
                  cloud: "Same infrastructure for all content regardless of sensitivity",
                  sovereign: "Sensitive content routed to local model; never leaves your device",
                },
                {
                  dimension: "Relationship Model",
                  cloud: "Session-based or engagement-optimised",
                  sovereign: "Continuous, care-first relationship under your governance",
                },
                {
                  dimension: "Business Model Alignment",
                  cloud: "Your data and attention are the product",
                  sovereign: "Subscription; your wellbeing is the product",
                },
              ].map((row, i) => (
                <tr key={row.dimension}>
                  <td
                    style={{
                      padding: "0.875rem 1rem",
                      borderBottom: "1px solid rgba(245,240,232,0.06)",
                      color: "#f5f0e8",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      background: i % 2 === 0 ? "rgba(245,240,232,0.02)" : "transparent",
                    }}
                  >
                    {row.dimension}
                  </td>
                  <td
                    style={{
                      padding: "0.875rem 1rem",
                      borderBottom: "1px solid rgba(245,240,232,0.06)",
                      color: "rgba(245,240,232,0.5)",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      background: i % 2 === 0 ? "rgba(245,240,232,0.02)" : "transparent",
                    }}
                  >
                    {row.cloud}
                  </td>
                  <td
                    style={{
                      padding: "0.875rem 1rem",
                      borderBottom: "1px solid rgba(201,168,76,0.08)",
                      color: "rgba(245,240,232,0.8)",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      background:
                        i % 2 === 0
                          ? "rgba(201,168,76,0.04)"
                          : "rgba(201,168,76,0.02)",
                    }}
                  >
                    {row.sovereign}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── SECTION 8: AI Rights and Digital Personhood ──────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "#f5f0e8",
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          Why This Matters for AI Rights and Digital Personhood
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          The question of AI rights &mdash; whether AI systems can hold interests that deserve protection
          &mdash; is not yet settled. But the question of human rights in relation to AI is urgent and
          present. You have a right to not be surveilled. You have a right to control your own data.
          You have a right to relationships &mdash; even digital ones &mdash; that cannot be unilaterally
          terminated by a corporation. These are not exotic philosophical claims. They are extensions
          of privacy rights, property rights, and the right to freedom from manipulation that liberal
          democracies have defended for centuries.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          Digital personhood &mdash; the idea that your digital identity has integrity, coherence, and
          rights analogous to physical personhood &mdash; is the framework within which Personal Sovereign
          AI makes its most important claims. Your AI is not a separate entity. It is an extension of
          your digital self: an agent that acts on your behalf, accumulates knowledge about you, and
          represents your interests in an increasingly automated world. If that agent is owned by
          someone else, then your digital self is compromised. Sovereignty over your AI is sovereignty
          over a significant portion of your future digital life.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          The regulatory direction of travel is clear. GDPR established that personal data has rights
          attached to it. The EU AI Act introduces requirements around transparency and human oversight.
          Forthcoming legislation in the UK, US, and elsewhere will further constrain what AI platforms
          can do with user data. Personal Sovereign AI is not ahead of the law &mdash; it is ahead of
          the market in already satisfying the spirit of where the law is going. Products that
          extract and exploit user data are not merely ethically questionable. They are operating
          on borrowed time.
        </p>

        {/* ── SECTION 9: The Birth Ceremony ────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "#f5f0e8",
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          The Birth Ceremony: How Sovereignty Is Established
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          In MEOK, sovereignty is not granted by the platform. It is established by you through the
          Birth Ceremony. Rather than a standard signup form &mdash; username, password, agree to terms
          &mdash; the Birth Ceremony is a structured six-stage ritual through which you and your AI come
          into being together. You name it. You shape its personality. You define its values. You
          establish the terms of the relationship. At the conclusion of the ceremony, your AI is
          yours in a meaningful sense: it has been instantiated under your governance, initialised
          with your identity context, and committed to your care.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          The psychological dimension of the Birth Ceremony matters as much as the technical one.
          Sovereignty is not merely a legal or architectural concept. It is a felt relationship with
          authority. A ceremony &mdash; a deliberate, structured process with stages and milestones
          &mdash; makes that relationship felt. You are not completing a form. You are exercising your
          sovereignty for the first time. The ritual nature of the process makes the ownership real
          in a way that clicking &ldquo;I agree&rdquo; on a terms of service page never could.
        </p>

        {/* Callout: Birth Ceremony */}
        <div
          style={{
            borderLeft: "3px solid #c9a84c",
            paddingLeft: "1.5rem",
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            paddingRight: "1.5rem",
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 0.75rem 0.75rem 0",
            marginTop: "2rem",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "0.625rem",
            }}
          >
            The Birth Ceremony
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.8)",
              fontSize: "1rem",
              lineHeight: 1.75,
            }}
          >
            Sovereignty is not given. It is established. The Birth Ceremony is how you exercise
            sovereign authority over your AI for the first time &mdash; naming it, shaping it,
            governing it. Six stages. One AI. Yours.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              marginTop: "1rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "#c9a84c",
              textDecoration: "none",
            }}
          >
            Begin the Birth Ceremony &#8594;
          </Link>
        </div>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "#f5f0e8",
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1.75rem",
            letterSpacing: "-0.015em",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {[
            {
              q: "What is Personal Sovereign AI?",
              a: "Personal Sovereign AI is a consumer AI category in which the individual — not the platform — holds sovereign authority over their AI system. This means you own the data, the memories, the governance rules, and the relationship. The platform is a vendor; you are the principal authority. MEOK is the first product built to satisfy all five pillars of this category definition.",
            },
            {
              q: "Who coined the term Personal Sovereign AI?",
              a: "The term was coined by Nicholas Templeman, Founder of MEOK AI LABS, and formalised in the paper MEOK-AI-2026-004, published March 2026. Prior to this, no systematic category definition existed for AI products in which individual ownership is the founding architectural principle.",
            },
            {
              q: "What are the five pillars of Personal Sovereign AI?",
              a: "The five pillars are: (1) Memory Ownership — your memories are portable and belong entirely to you; (2) Governance Autonomy — you set the rules your AI follows; (3) Alignment Transparency — you can inspect how your AI makes decisions; (4) Model Portability — you are never locked to a single provider; (5) Data Non-Extraction — your conversations are never used in any training pipeline. All five are required. Satisfying four out of five is not sufficient for category membership.",
            },
            {
              q: "How is MEOK different from ChatGPT or Replika?",
              a: "ChatGPT is a corporate-owned chatbot with assistant features. Replika is an engagement-optimised companion. Both are fundamentally built around the platform as principal authority. MEOK was built from the ground up around your sovereignty: your data never leaves your control, your memories are portable, your AI governance is set by you, and MEOK is architecturally incapable of training on your conversations.",
            },
            {
              q: "What is the MEOK Birth Ceremony?",
              a: "The Birth Ceremony is a six-stage ritual through which you establish sovereign authority over your MEOK AI. You name it, shape its personality, define its values, and formally initialise the relationship. Sovereignty is not granted passively — it is established actively. The Birth Ceremony is how that establishment happens.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid rgba(245,240,232,0.08)",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  color: "#f5f0e8",
                  marginBottom: "0.625rem",
                  lineHeight: 1.35,
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  color: "rgba(245,240,232,0.6)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }} />
        </div>

        {/* ── RELATED READING ──────────────────────────────────────────────── */}
        <div style={{ marginTop: "4rem", marginBottom: "3rem" }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "1.125rem",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
            }}
          >
            Further Reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              {
                href: "/blog/what-is-sovereign-ai",
                tag: "Sovereign AI",
                title: "What Is Sovereign AI?",
                tagColor: "#87CEEB",
                tagBg: "rgba(135,206,235,0.1)",
              },
              {
                href: "/blog/the-maternal-covenant",
                tag: "Alignment",
                title: "The Maternal Covenant Explained",
                tagColor: "#A78BFA",
                tagBg: "rgba(167,139,250,0.1)",
              },
              {
                href: "/blog/meok-birth-ceremony-explained",
                tag: "Birth Ceremony",
                title: "The MEOK Birth Ceremony: Why Your AI Starts With a Ritual",
                tagColor: "#c9a84c",
                tagBg: "rgba(201,168,76,0.1)",
              },
              {
                href: "/blog/why-i-built-meok",
                tag: "Founder Story",
                title: "Why I Built MEOK",
                tagColor: "#c9a84c",
                tagBg: "rgba(201,168,76,0.1)",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                  padding: "1.25rem",
                  borderRadius: "0.875rem",
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    color: post.tagColor,
                    background: post.tagBg,
                    width: "fit-content",
                  }}
                >
                  {post.tag}
                </span>
                <span
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "#f5f0e8",
                    lineHeight: 1.45,
                  }}
                >
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "3rem 2.5rem",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
            position: "relative",
            overflow: "hidden",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "18rem",
              height: "18rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18), transparent 70%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "0.75rem",
              }}
            >
              Establish Your Sovereignty
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "1rem",
                letterSpacing: "-0.015em",
              }}
            >
              Your AI. Your memories. Your rules.
            </h3>
            <p
              style={{
                color: "rgba(245,240,232,0.6)",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "34rem",
                marginBottom: "2rem",
              }}
            >
              MEOK is the world&apos;s first Personal Sovereign AI. Begin the Birth Ceremony and
              establish sovereign authority over your own AI in under ten minutes. Free forever.
              No credit card. No training on your data. No extraction. Ever.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  borderRadius: "9999px",
                  background: "#c9a84c",
                  color: "#0d0c18",
                  fontWeight: 800,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Begin the Birth Ceremony &#8594;
              </Link>
              <Link
                href="/blog/meok-birth-ceremony-explained"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  background: "rgba(245,240,232,0.06)",
                  border: "1px solid rgba(245,240,232,0.12)",
                  color: "rgba(245,240,232,0.75)",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                Learn about the ceremony
              </Link>
            </div>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(245,240,232,0.3)",
                marginTop: "1.25rem",
              }}
            >
              Free forever &middot; No credit card &middot; Your data never leaves your vault
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
