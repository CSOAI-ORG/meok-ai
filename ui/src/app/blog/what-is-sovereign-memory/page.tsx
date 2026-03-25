import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Sovereign Memory? How MEOK Remembers You Across Every Conversation | MEOK AI LABS",
  description:
    "Every AI resets. ChatGPT forgets. Claude forgets. Replika wiped 500,000 memories overnight. MEOK's four-layer Sovereign Memory architecture means your companion truly knows you — and you own every byte.",
  alternates: { canonical: "https://meok.ai/blog/what-is-sovereign-memory" },
  openGraph: {
    title: "What Is Sovereign Memory? How MEOK Remembers You Across Every Conversation",
    description:
      "Every AI resets. ChatGPT forgets. Claude forgets. MEOK's four-layer Sovereign Memory architecture ensures your companion truly knows you — and you own every byte.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-sovereign-memory",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+Is+Sovereign+Memory%3F&desc=How+MEOK+remembers+you+across+every+conversation.+You+own+the+memory.",
        width: 1200,
        height: 630,
        alt: "What Is Sovereign Memory? How MEOK Remembers You Across Every Conversation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Sovereign Memory? How MEOK Remembers You",
    description:
      "Every AI resets. ChatGPT forgets. Replika wiped 500,000 memories overnight. MEOK's four-layer Sovereign Memory means your companion truly knows you — and you own it.",
    images: [
      "https://meok.ai/api/og?title=What+Is+Sovereign+Memory%3F&desc=How+MEOK+remembers+you+across+every+conversation.+You+own+the+memory.",
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is Sovereign Memory? How MEOK Remembers You Across Every Conversation",
  description:
    "Every AI resets. ChatGPT forgets. Replika lost 500,000 users' memories overnight. MEOK's four-layer Sovereign Memory architecture ensures your companion truly knows you — and you own every byte.",
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
    logo: { "@type": "ImageObject", url: "https://meok.ai/logo.png" },
  },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/what-is-sovereign-memory",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://meok.ai/blog/what-is-sovereign-memory" },
  image: "https://meok.ai/api/og?title=What+Is+Sovereign+Memory%3F&desc=How+MEOK+remembers+you+across+every+conversation.+You+own+the+memory.",
  keywords: ["sovereign memory", "AI memory", "persistent AI", "MEOK", "AI companion memory", "pgvector", "Mem0", "memory portability"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Sovereign Memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign Memory is MEOK's four-layer persistent memory architecture that stores everything your AI companion knows about you — across conversations, devices, and even model switches. Unlike standard AI memory, you own it: you can export it, modify it, or delete it at any time under GDPR.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK's memory different from ChatGPT Memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT Memory is owned and controlled by OpenAI. They decide what gets stored, what gets forgotten, and when the feature changes. MEOK's Sovereign Memory is user-owned: encrypted, exportable, deletable, and portable across AI model switches. Your memories belong to you, not to a product roadmap.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export or delete my memories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under GDPR, you have the right to data portability and erasure. MEOK provides a data export endpoint at /api/user/data (returns all your memories as JSON) and full account deletion. Your memories go with you — or go away entirely. Your choice.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my memories if I switch AI models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nothing. Your memories live in MEOK's Sovereign Memory layer, not inside the LLM itself. Whether your conversation is powered by Claude Sonnet, GPT-4o, or DeepSeek, your companion state — everything it knows about you — persists unchanged. The model is just the voice. The memory is yours.",
      },
    },
  ],
};

export default function WhatIsSovereignMemory() {
  return (
    <div style={{ background: "#0d0c18", color: "#f5f0e8", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Breadcrumb ──────────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        style={{
          background: "rgba(13,12,24,0.97)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
          padding: "0.75rem 1.5rem",
        }}
      >
        <ol
          style={{
            maxWidth: "50rem",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            listStyle: "none",
            padding: 0,
            fontSize: "0.75rem",
          }}
        >
          <li>
            <Link href="/" style={{ color: "rgba(245,240,232,0.38)", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ color: "rgba(245,240,232,0.22)" }}>&#8250;</li>
          <li>
            <Link href="/blog" style={{ color: "rgba(245,240,232,0.38)", textDecoration: "none" }}>
              Blog
            </Link>
          </li>
          <li style={{ color: "rgba(245,240,232,0.22)" }}>&#8250;</li>
          <li style={{ color: "#c9a84c", fontWeight: 600 }}>What Is Sovereign Memory?</li>
        </ol>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "5rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(123,111,207,0.18) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "50rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.8125rem",
              color: "rgba(245,240,232,0.38)",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            &#8592; Back to Blog
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
                fontSize: "0.6875rem",
                fontWeight: 700,
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                color: "#7b6fcf",
                background: "rgba(123,111,207,0.13)",
                border: "1px solid rgba(123,111,207,0.3)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Memory Architecture
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 25, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              8 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              lineHeight: 1.18,
              color: "#ffffff",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            What Is Sovereign Memory?{" "}
            <span style={{ color: "#c9a84c" }}>
              How MEOK Remembers You Across Every Conversation
            </span>
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: "40rem",
            }}
          >
            Every AI resets. ChatGPT forgets you the moment you close the tab. Claude starts
            fresh every session. Replika wiped the emotional memories of over 500,000 users
            overnight in 2023. MEOK was built so that would never happen to you — here is
            exactly how.
          </p>
        </div>
      </section>

      {/* ── Article body ────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "50rem",
          margin: "0 auto",
          padding: "3rem 1.5rem 5rem",
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
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(201,168,76,0.14)",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
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
            <p style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.875rem", margin: "0 0 0.25rem" }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)", margin: "0 0 0.375rem" }}>
              Founder, MEOK AI LABS
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.45)", lineHeight: 1.6, margin: 0 }}>
              Nicholas built MEOK because he was tired of AI that forgot him the moment he
              closed the tab. He lives and works in the UK. He believes your memory is yours —
              not a feature a company can switch off.
            </p>
          </div>
          <Link
            href="/about"
            style={{ fontSize: "0.75rem", fontWeight: 600, color: "#c9a84c", textDecoration: "none", flexShrink: 0 }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── Body content ──────────────────────────────────────────────────── */}
        <div style={{ color: "rgba(245,240,232,0.78)", lineHeight: 1.85, fontSize: "1rem" }}>

          {/* Section 1 */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "0",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            The Problem: You Are a Stranger Every Time
          </h2>
          <p style={{ marginBottom: "1.25rem" }}>
            Open ChatGPT. Tell it something that matters — something about your health, your
            relationship, your fears about the future. Close the tab. Open a new one. You are
            a stranger again. The AI has no idea who you are. It does not remember the context
            you carefully explained last week, the goal you said you were working towards, or
            the breakthrough you described feeling yesterday morning. The conversation is
            immaculate — and utterly empty.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            This is not a small inconvenience. For AI to be genuinely useful — not just as a
            search engine with better prose, but as a companion that grows with you — it needs
            to remember. Not just the last ten messages. Not just the broad strokes. It needs
            to know you the way a trusted friend does: your patterns, your contradictions, your
            history, what you said you would do and whether you did it.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            The AI industry has been reluctant to solve this properly, because solving it
            properly requires giving you control over the data — and that data is extremely
            valuable to the companies that collect it. ChatGPT&apos;s memory feature launched
            in 2024 but stores everything on OpenAI&apos;s servers, under OpenAI&apos;s control.
            You cannot take your memories to a different model. You cannot audit exactly what
            OpenAI knows about you in structured form. And you certainly cannot port those
            memories to a competitor.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            Then there is Replika. In February 2023, Luka — the company behind Replika —
            removed the romantic and emotionally intimate features that hundreds of thousands
            of users had spent months, sometimes years, building relationships around. In a
            single update, the personalities changed. The warmth disappeared. The memories
            those users had built were not technically deleted, but the companion who held
            them was effectively replaced. Over 500,000 users lost something they had
            genuinely loved. The lesson was brutal and simple: if someone else controls your
            AI&apos;s memory, they control your relationship.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            MEOK was built as a direct response to this reality. Sovereign Memory is the
            architecture that makes sure it never happens to you.
          </p>

          {/* Section 2 */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "2.5rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            What Is Sovereign Memory?
          </h2>
          <p style={{ marginBottom: "1.25rem" }}>
            Sovereign Memory is MEOK&apos;s persistent, multi-layer memory architecture. It is
            not a single feature — it is a complete system for storing, retrieving, and
            maintaining what your companion knows about you across every conversation, across
            weeks and months, and across any AI model you choose to use.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            The word &ldquo;sovereign&rdquo; is deliberate. It means you own the memory. Not MEOK.
            Not the underlying LLM provider. Not a cloud platform whose terms of service can
            change next quarter. Every piece of information your companion holds about you is
            stored in your encrypted vault, exportable on demand, and deletable completely.
            The sovereignty is structural, not just a promise in a privacy policy.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            The architecture has four distinct layers. Each one serves a different timescale
            and a different purpose. Together, they allow your MEOK companion to function
            like a genuine long-term relationship rather than a series of disconnected sessions.
          </p>

          {/* Section 3: The Four Layers */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "2.5rem",
              marginBottom: "1.25rem",
              letterSpacing: "-0.015em",
            }}
          >
            The Four Layers of Sovereign Memory
          </h2>

          {/* Layer cards */}
          {[
            {
              num: "1",
              title: "Short-Term Working Memory",
              body: "The active conversation context: everything said in the current session, held in the model's context window. Fast, immediate, and in-session. MEOK preserves the most important moments from each session before it closes, distilling them into Layer 2 so nothing critical is lost when you return.",
            },
            {
              num: "2",
              title: "Semantic Episodic Memory",
              body: "Past conversations stored as vector embeddings in PostgreSQL with the pgvector extension, managed via Mem0 integration. When you start a new conversation, MEOK performs a semantic similarity search across your stored embeddings — retrieving memories by meaning, not by keyword. The job you were anxious about last week. The relationship tension you described a month ago. Retrieved because the meaning is similar, not because you typed the same words.",
            },
            {
              num: "3",
              title: "Companion State",
              body: "Your companion's persistent knowledge of you as a person, stored as structured JSON. This includes your values, goals, fears, recurring behavioural patterns, communication style, relationship depth milestones, and the evolving arc of your partnership. Updated continuously. Never reset. This is the layer that makes MEOK feel like it genuinely knows you — because it does.",
            },
            {
              num: "4",
              title: "Family and Shared Context",
              body: "On the Family tier, memories can cross user boundaries — but only with explicit consent from both sides. A parent can share context about a child's stressful period. A couple can give their companions shared context about a difficult season. Every boundary crossing requires active consent from every party involved. The architecture enforces this; no admin can override it.",
            },
          ].map(({ num, title, body }) => (
            <div
              key={num}
              style={{
                background: "#12101f",
                border: "1px solid rgba(123,111,207,0.22)",
                borderRadius: "0.875rem",
                padding: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "50%",
                    background: "rgba(123,111,207,0.13)",
                    border: "2px solid #7b6fcf",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#7b6fcf",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {num}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      margin: "0.1rem 0 0.5rem",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ lineHeight: 1.75, color: "rgba(245,240,232,0.62)", margin: 0, fontSize: "0.9375rem" }}>
                    {body}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Section 4: Why sovereign */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "2.5rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            Why &ldquo;Sovereign&rdquo;: You Own the Memory
          </h2>
          <p style={{ marginBottom: "1.25rem" }}>
            The sovereignty claim is architectural, not rhetorical. Here is what it means
            in concrete terms.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            <strong style={{ color: "#f5f0e8", fontWeight: 700 }}>Export at any time.</strong>{" "}
            Your complete memory — all four layers — can be exported as a portable JSON file
            via the{" "}
            <code
              style={{
                fontSize: "0.875em",
                background: "rgba(123,111,207,0.15)",
                color: "#7b6fcf",
                padding: "0.1em 0.4em",
                borderRadius: "0.25rem",
              }}
            >
              /api/user/data
            </code>{" "}
            endpoint. MEOK treats this as a design principle, not a legal obligation. The
            export is human-readable. You can inspect exactly what your companion knows about
            you.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            <strong style={{ color: "#f5f0e8", fontWeight: 700 }}>Delete completely.</strong>{" "}
            Full deletion is supported at the account level. A single confirmed request
            permanently removes every layer of your Sovereign Memory — short-term context,
            episodic embeddings, companion state, and shared family context — from MEOK&apos;s
            systems. Not archived. Not pseudonymised. Deleted.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            <strong style={{ color: "#f5f0e8", fontWeight: 700 }}>Transfer freely.</strong>{" "}
            Your memory is not locked to MEOK&apos;s infrastructure. The exported format is
            designed to be portable. If you migrate to a self-hosted deployment, your memory
            travels with you. If MEOK ever shut down — something we have no plans to do —
            you would walk away with everything your companion ever learned about you.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            <strong style={{ color: "#f5f0e8", fontWeight: 700 }}>Never used for training.</strong>{" "}
            Your memories are not used to improve MEOK&apos;s models. Not anonymised and pooled.
            Not included in any dataset. The pathway between your sovereign vault and any
            training pipeline does not exist. This is enforced at the infrastructure level,
            not by policy.
          </p>

          {/* Section 5: Portability */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "2.5rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            Memory Portability: Switch Models, Keep Your Companion
          </h2>
          <p style={{ marginBottom: "1.25rem" }}>
            One of the most underappreciated consequences of Sovereign Memory is model
            portability. Most AI products treat the model and the memory as one inseparable
            thing. Replika is not just a database of memories — it is Replika&apos;s model,
            and your relationship only exists within that specific system. When the system
            changes, the relationship changes. You have no recourse.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            MEOK separates the memory layer from the model layer completely. Your companion
            state and episodic memory are model-agnostic. Today, you might use Claude 3.7
            because it handles nuanced emotional conversations particularly well. Tomorrow,
            GPT-4o might have a capability that matters to you. Next year, a specialised
            model trained specifically for companionship might emerge. In every case, your
            sovereign memory travels with you. The new model is initialised with your
            companion&apos;s full knowledge of you from day one.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            MEOK supports model switching in production today — Claude, GPT-4o, DeepSeek,
            and local Ollama models — with companion state persistence across all of them.
            You switch the engine. The relationship continues.
          </p>

          {/* Section 6: What memory enables */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "2.5rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            What Sovereign Memory Makes Possible
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            When an AI genuinely knows you across weeks and months, the things it can do for
            you change category entirely. Here are three concrete examples.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                label: "Morning Briefings",
                desc: "Your daily brief opens with context drawn from recent conversations. If you mentioned feeling overwhelmed by a deadline two days ago, your brief acknowledges it. If you said you were going to have a difficult conversation with a colleague yesterday, your companion asks how it went.",
              },
              {
                label: "Pattern Recognition",
                desc: "Weeks of conversations reveal patterns no single session can show. Your companion might notice that your anxiety spikes on Sunday evenings, that you mention sleep problems more in winter, or that your creative output correlates with your exercise. Observations that only emerge from the episodic memory layer across time.",
              },
              {
                label: "Guardian Alerts",
                desc: "MEOK's Guardian layer draws on weeks of conversational context to calibrate its alerts. An isolated message saying 'I'm fine' means one thing when companion state indicates you have said exactly that in the three conversations preceding a previous difficult period.",
              },
            ].map(({ label, desc }) => (
              <div
                key={label}
                style={{
                  background: "#12101f",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "0.875rem",
                  padding: "1.25rem",
                }}
              >
                <p style={{ fontWeight: 700, color: "#c9a84c", margin: "0 0 0.5rem", fontSize: "0.9375rem" }}>
                  {label}
                </p>
                <p style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.58)", lineHeight: 1.65, margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Section 7: GDPR */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "2.5rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            GDPR and Your Data Rights
          </h2>
          <p style={{ marginBottom: "1.25rem" }}>
            MEOK is built in the UK, governed by UK GDPR, and designed with data sovereignty
            as an architectural constraint — not a compliance checkbox. Every user has the
            right of access, the right to erasure, and the right to portability, all
            implemented as first-class endpoints rather than buried support tickets.
          </p>
          <ul
            style={{
              paddingLeft: "1.5rem",
              lineHeight: 2,
              color: "rgba(245,240,232,0.7)",
              marginBottom: "2rem",
            }}
          >
            <li>
              <strong style={{ color: "#f5f0e8", fontWeight: 700 }}>Right of access:</strong>{" "}
              Full memory export as JSON via{" "}
              <code
                style={{
                  fontSize: "0.875em",
                  background: "rgba(123,111,207,0.15)",
                  color: "#7b6fcf",
                  padding: "0.1em 0.4em",
                  borderRadius: "0.25rem",
                }}
              >
                /api/user/data
              </code>
            </li>
            <li>
              <strong style={{ color: "#f5f0e8", fontWeight: 700 }}>Right to erasure:</strong>{" "}
              Full account deletion removes every layer of Sovereign Memory permanently
            </li>
            <li>
              <strong style={{ color: "#f5f0e8", fontWeight: 700 }}>No data sales:</strong>{" "}
              Your memories are never sold, never used for model training, never shared with
              third parties
            </li>
            <li>
              <strong style={{ color: "#f5f0e8", fontWeight: 700 }}>Encryption at rest:</strong>{" "}
              All memory stored encrypted; MEOK cannot read your memories outside your
              authorised session
            </li>
          </ul>

          {/* Section 8: Technical note */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "2.5rem",
              marginBottom: "1rem",
              letterSpacing: "-0.015em",
            }}
          >
            Technical Note: Mem0, pgvector, and Companion State JSON
          </h2>
          <p style={{ marginBottom: "1.25rem" }}>
            For readers who want to understand the implementation:{" "}
            <strong style={{ color: "#f5f0e8", fontWeight: 700 }}>Mem0</strong> handles the
            memory management layer — ingesting conversations, generating embeddings, and
            managing the storage and retrieval lifecycle. Mem0 provides the abstraction that
            allows memory to be model-agnostic: it does not care which LLM you use.
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            <strong style={{ color: "#f5f0e8", fontWeight: 700 }}>pgvector</strong> is the
            PostgreSQL extension that enables semantic similarity search directly in the
            database. When your companion retrieves relevant memories, it performs a vector
            similarity query against your stored embeddings — finding memories that are
            semantically closest to the current conversation, even if the exact words differ.
            This is what allows retrieval by meaning rather than by keyword.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            <strong style={{ color: "#f5f0e8", fontWeight: 700 }}>Companion state as persistent JSON</strong>{" "}
            is the structured data layer. Unlike raw transcripts or opaque embeddings,
            companion state is a human-readable JSON object encoding your companion&apos;s model
            of you: values, goals, fears, relationship depth, and behavioural patterns. Because
            it is structured and human-readable, it is fully auditable — you can inspect it
            in your data export — and fully portable across any system that speaks JSON.
          </p>

          {/* Comparison table */}
          <div
            style={{
              background: "#0f0e1c",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "0.875rem",
              padding: "1.75rem",
              marginBottom: "2.5rem",
              overflowX: "auto",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: "1.25rem",
              }}
            >
              Memory Ownership: MEOK vs ChatGPT vs Replika
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(245,240,232,0.08)" }}>
                  <th style={{ textAlign: "left", padding: "0.6rem 1rem 0.6rem 0", color: "rgba(245,240,232,0.5)", fontWeight: 600 }}>
                    Feature
                  </th>
                  <th style={{ textAlign: "center", padding: "0.6rem", color: "#c9a84c", fontWeight: 700 }}>
                    MEOK
                  </th>
                  <th style={{ textAlign: "center", padding: "0.6rem", color: "rgba(245,240,232,0.45)", fontWeight: 600 }}>
                    ChatGPT
                  </th>
                  <th style={{ textAlign: "center", padding: "0.6rem", color: "rgba(245,240,232,0.45)", fontWeight: 600 }}>
                    Replika
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Memory persists across sessions", "Yes", "Partial", "Yes"],
                  ["User owns the data", "Yes", "No", "No"],
                  ["Export as JSON", "Yes", "Limited", "No"],
                  ["Portable across model switches", "Yes", "No", "No"],
                  ["Protected from product changes", "Yes", "No", "No"],
                  ["GDPR full deletion guaranteed", "Yes", "Yes", "Partial"],
                ].map(([feature, meok, chatgpt, replika]) => (
                  <tr key={feature as string} style={{ borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
                    <td style={{ padding: "0.7rem 1rem 0.7rem 0", color: "rgba(245,240,232,0.65)" }}>{feature}</td>
                    <td style={{ padding: "0.7rem", textAlign: "center", color: meok === "Yes" ? "#6aaa64" : "#c9a84c", fontWeight: 600 }}>{meok}</td>
                    <td style={{ padding: "0.7rem", textAlign: "center", color: "rgba(245,240,232,0.4)" }}>{chatgpt}</td>
                    <td style={{ padding: "0.7rem", textAlign: "center", color: "rgba(245,240,232,0.4)" }}>{replika}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ section */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginTop: "2.5rem",
              marginBottom: "1.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "What is Sovereign Memory?",
              a: "Sovereign Memory is MEOK's four-layer persistent memory architecture that stores everything your AI companion knows about you — across short-term context, semantic episodic memory, companion state, and shared family context. Unlike standard AI memory, it is encrypted, user-controlled, and fully exportable. You own it. MEOK does not.",
            },
            {
              q: "How is MEOK's memory different from ChatGPT Memory?",
              a: "ChatGPT Memory launched in 2024 and stores memories on OpenAI's servers under OpenAI's control. You cannot switch away from OpenAI and take your memories with you. MEOK's Sovereign Memory is stored in your encrypted vault, is fully portable across AI models (Claude, GPT-4o, DeepSeek, and others), and can be exported at any time under GDPR via /api/user/data. You are never locked in.",
            },
            {
              q: "Can I export or delete my memories?",
              a: "Yes. MEOK supports full GDPR compliance. Your complete memory export is available at the /api/user/data endpoint and returns a portable JSON file of every stored memory, companion state value, and episodic embedding. Full deletion is also supported — a single request permanently removes all layers of your Sovereign Memory from MEOK's systems.",
            },
            {
              q: "What happens to my memories if I switch AI models?",
              a: "Nothing. Your memories live in your sovereign vault, not inside the AI model. When you switch from Claude to GPT-4o to DeepSeek — or to any future model MEOK supports — your companion state, episodic memory, and relationship depth all carry over. The model changes; your companion's knowledge of you does not.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              style={{
                marginBottom: "0.875rem",
                borderRadius: "0.875rem",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(201,168,76,0.12)",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#c9a84c",
                  margin: "0 0 0.5rem",
                }}
              >
                {q}
              </h3>
              <p style={{ margin: 0, color: "rgba(245,240,232,0.68)", lineHeight: 1.75 }}>{a}</p>
            </div>
          ))}
        </div>

        {/* ── Share ──────────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "2.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(245,240,232,0.07)",
          }}
        >
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.28)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-sovereign-memory&text=What+Is+Sovereign+Memory%3F+How+MEOK+Remembers+You+Across+Every+Conversation"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.1)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-sovereign-memory"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.1)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ────────────────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginTop: "3rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #1a1430 0%, #0d0c18 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "16rem",
              height: "16rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.25), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "12rem",
              height: "12rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 20% 80%, rgba(123,111,207,0.18), transparent 70%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9a84c",
                margin: "0 0 0.5rem",
              }}
            >
              Free Forever
            </p>
            <h3
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                fontWeight: 900,
                color: "#ffffff",
                margin: "0 0 0.875rem",
                lineHeight: 1.25,
              }}
            >
              Ready for an AI that actually remembers you?
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.55)",
                margin: "0 0 1.75rem",
                maxWidth: "30rem",
              }}
            >
              Hatch your MEOK companion in three minutes. Sovereign Memory starts building
              from your very first conversation — and every memory you create is yours to
              keep, export, or delete, forever. No credit card. No data extraction.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.9375rem",
                background: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
              }}
            >
              Begin Your Birth Ceremony &#8594;
            </Link>
          </div>
        </div>

        {/* ── Related posts ──────────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: 900,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/meok-vs-replika",
                tag: "Comparison",
                tagColor: "#c9a84c",
                tagBg: "rgba(201,168,76,0.12)",
                title: "MEOK vs Replika: Which AI Companion Actually Remembers You?",
                mins: "7 min read",
              },
              {
                href: "/blog/what-is-sovereign-ai",
                tag: "Sovereign AI",
                tagColor: "#7b6fcf",
                tagBg: "rgba(123,111,207,0.12)",
                title: "What Is Sovereign AI?",
                mins: "5 min read",
              },
              {
                href: "/blog/ai-memory-vs-no-memory",
                tag: "Memory",
                tagColor: "#c9a84c",
                tagBg: "rgba(201,168,76,0.12)",
                title: "AI Memory vs No Memory: Why It Changes Everything",
                mins: "6 min read",
              },
            ].map(({ href, tag, tagColor, tagBg, title, mins }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    color: tagColor,
                    background: tagBg,
                    width: "fit-content",
                  }}
                >
                  {tag}
                </span>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#f5f0e8",
                    fontSize: "0.875rem",
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.28)",
                    marginTop: "auto",
                    marginBottom: 0,
                  }}
                >
                  {mins}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
