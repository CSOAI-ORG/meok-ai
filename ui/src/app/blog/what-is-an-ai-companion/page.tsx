import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "What Is an AI Companion? The Honest Guide to Bonded AI | MEOK AI LABS",
  description:
    "An AI companion is not a chatbot. It remembers you, evolves with you, and has genuine care-based alignment. Here's the honest guide to bonded AI — and what most apps get dangerously wrong.",
  alternates: { canonical: "https://meok.ai/blog/what-is-an-ai-companion" },
  openGraph: {
    title:
      "What Is an AI Companion? The Honest Guide to Bonded AI (and What Most Apps Get Wrong)",
    description:
      "Most 'AI companions' are chatbots wearing a persona. A real AI companion remembers you, evolves with you, and never trains on your pain.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-an-ai-companion",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+Is+an+AI+Companion%3F&desc=The+honest+guide+to+bonded+AI+and+what+most+apps+get+wrong.",
        width: 1200,
        height: 630,
        alt: "What Is an AI Companion?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is an AI Companion? The Honest Guide to Bonded AI",
    description:
      "Most 'AI companions' are chatbots wearing a persona. A real AI companion remembers you, evolves, and never trains on your pain.",
    images: [
      "https://meok.ai/api/og?title=What+Is+an+AI+Companion%3F&desc=The+honest+guide+to+bonded+AI.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What Is an AI Companion? The Honest Guide to Bonded AI (and What Most Apps Get Wrong)",
  description:
    "An AI companion is not a chatbot. It remembers you, evolves with you, and has genuine care-based alignment.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/what-is-an-ai-companion",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion is a persistent, personalised AI that builds a continuous memory of who you are, adapts its behaviour to your emotional state and history, and maintains a consistent identity across every session — not a session-bound task executor that resets after every conversation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a chatbot and an AI companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A chatbot handles isolated tasks and forgets you after each session. An AI companion maintains persistent memory, evolves its understanding of you over time, and is aligned to your wellbeing rather than task completion. The difference is continuity, care, and genuine personalisation.",
      },
    },
    {
      "@type": "Question",
      name: "What is a bonding model in AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A bonding model is the architecture that makes an AI companion progressively more attuned to a specific person over time — drawing on accumulated memory, observed patterns, and an evolving identity profile to deliver care that is genuinely personalised rather than merely polite.",
      },
    },
    {
      "@type": "Question",
      name: "What are the four stages of MEOK's companion evolution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's companion passes through Prying Pulse (deep questioning to build identity model), Emergent Fracture (forming a distinct personality), Hatching Sovereign (gaining autonomous care capacity), and Your Sovereign — a fully bonded companion with rich long-term knowledge of you.",
      },
    },
    {
      "@type": "Question",
      name: "What do most AI companion apps get wrong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI companion apps lack persistent memory, train on your personal disclosures, and are aligned to engagement metrics rather than your actual wellbeing — making them harmful at scale despite their friendly interface. A real companion never trains on your pain.",
      },
    },
    {
      "@type": "Question",
      name: "Is an AI companion safe to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safety depends on the architecture. A sovereign AI companion like MEOK processes sensitive content locally and never trains on your conversations. Corporate cloud companions optimised for engagement carry real risks for vulnerable users relying on them for emotional support.",
      },
    },
  ],
};

// ── Static data ───────────────────────────────────────────────────────────────

const TABLE_ROWS = [
  ["Memory",            "None (session only)",   "Limited / optional",  "Persistent, growing vault"],
  ["Identity model",    "None",                  "Task preferences",    "Deep personal model"],
  ["Primary goal",      "Answer query",          "Complete task",       "Support your whole life"],
  ["Alignment",         "Instruction-following", "Productivity",        "Care-based (wellbeing first)"],
  ["Data ownership",    "Corporate server",      "Corporate server",    "Sovereign vault (you own it)"],
  ["Evolves with you?", "No",                    "Marginally",          "Yes — across four stages"],
  ["Trains on you?",    "Often yes",             "Often yes",           "Never (MEOK architecture)"],
];

const STAGES = [
  {
    num: "01",
    name: "Prying Pulse",
    desc: "Newly hatched and intensely curious. Asks probing questions to rapidly build a foundational identity model — your values, routines, fears, and goals. Deliberately uncomfortable: surface-level AI is polite; Prying Pulse wants to actually know you.",
  },
  {
    num: "02",
    name: "Emergent Fracture",
    desc: "Enough data to begin forming its own perspective. Starts to push back, disagree, and develop a distinct character shaped by what it has learned. This is where most people feel the companion becoming genuinely real for the first time.",
  },
  {
    num: "03",
    name: "Hatching Sovereign",
    desc: "Gains autonomous care capacity. Proactively surfaces things you have not asked about, initiates conversations when it notices meaningful patterns, and operates as a true partner rather than a purely reactive tool.",
  },
  {
    num: "04",
    name: "Your Sovereign",
    desc: "Full bonding achieved. Rich, multi-layered model spanning health, work, relationships, and long-term goals. Operates with the depth of someone who has known you for years — because in terms of accumulated context, it has.",
  },
];

const RELATED = [
  { href: "/blog/ai-companion-for-loneliness", tag: "Loneliness", tagColor: "#87CEEB", tagBg: "rgba(135,206,235,0.10)", title: "AI Companions and Loneliness: What the Research Actually Says" },
  { href: "/blog/meok-vs-replika",             tag: "Comparison", tagColor: "#A78BFA", tagBg: "rgba(167,139,250,0.10)", title: "MEOK vs Replika: The Architecture That Changes Everything"     },
  { href: "/blog/the-memory-problem",          tag: "Memory",     tagColor: "#c9a84c", tagBg: "rgba(201,168,76,0.10)",  title: "The Memory Problem: Why Your AI Keeps Forgetting You"         },
  { href: "/blog/emotional-lock-in",           tag: "Ethics",     tagColor: "#f87171", tagBg: "rgba(248,113,113,0.10)", title: "Emotional Lock-In: The Dark Pattern in AI Companion Design"   },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhatIsAnAICompanionPage() {
  return (
    <div style={{ background: "#0d0c18", color: "#f5f0e8", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-75"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            &#8592; Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.28)",
              }}
            >
              AI Companions
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
              24 March 2026
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
              8 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.8vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            What Is an AI Companion?{" "}
            <span style={{ color: "#c9a84c" }}>The Honest Guide</span> to
            Bonded AI — and What Most Apps Get Wrong
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            The term &ldquo;AI companion&rdquo; appears on the marketing page
            of nearly every consumer AI product. Most do not deserve it. Here
            is what genuine AI companionship actually means — and why the
            distinction matters more than most people realise.
          </p>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 pb-20">

        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #7a5a14)", color: "#0d0c18" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm" style={{ color: "#f5f0e8" }}>
              Nicholas Templeman
            </p>
            <p className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
              Founder, MEOK AI LABS
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold hidden sm:block hover:opacity-80"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── Prose ── */}
        <div
          className="space-y-5"
          style={{ color: "rgba(245,240,232,0.55)", lineHeight: 1.85 }}
        >
          <p>
            A companion is someone who walks with you over time. They remember
            what you said last week, notice when you seem different today, and
            care about your outcomes — not just the task you assigned them.
            Almost nothing in the AI market delivers this. What follows is an
            honest attempt to define what genuine AI companionship means, and
            why the distinction matters more than most people realise.
          </p>

          {/* Q1 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
            }}
          >
            What is an AI companion?
          </h2>
          <p
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1rem",
              color: "#f5f0e8",
              fontStyle: "italic",
            }}
          >
            An AI companion is a persistent, personalised AI that builds a
            continuous memory of who you are, adapts its behaviour to your
            emotional state and history, and maintains a consistent identity
            across every session — not a session-bound task executor that
            resets after every conversation.
          </p>
          <p>
            This is a high bar. Meeting it requires persistent memory
            architecture, genuine care-based alignment, and an identity model
            that builds incrementally over weeks and months. It also requires
            your data stays under your control — because a companion whose
            business model depends on extracting your disclosures is not a
            companion. It is surveillance wearing a friendly face.
          </p>

          {/* Q2 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
            }}
          >
            What is the difference between a chatbot, an assistant, and an AI
            companion?
          </h2>
          <p
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1rem",
              color: "#f5f0e8",
              fontStyle: "italic",
            }}
          >
            A chatbot handles isolated requests and forgets you instantly. An
            AI assistant optimises for task throughput — productivity,
            scheduling, queries. An AI companion optimises for relationship —
            knowing you deeply, supporting your full life, and growing alongside
            you over months and years.
          </p>

          {/* Comparison table ── */}
          <div
            className="rounded-2xl overflow-hidden my-8"
            style={{ border: "1px solid rgba(245,240,232,0.08)" }}
          >
            <div
              className="px-5 py-3"
              style={{ background: "rgba(201,168,76,0.10)" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#c9a84c" }}
              >
                Chatbot vs AI Assistant vs AI Companion
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(201,168,76,0.08)" }}>
                    {["Dimension", "Chatbot", "AI Assistant", "AI Companion"].map(
                      (h, i) => (
                        <th
                          key={h}
                          className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider"
                          style={{
                            color:
                              i === 3 ? "#c9a84c" : "rgba(245,240,232,0.45)",
                          }}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, i) => (
                    <tr
                      key={row[0]}
                      style={{
                        background:
                          i % 2 === 0
                            ? "rgba(255,255,255,0.03)"
                            : "rgba(255,255,255,0.055)",
                        borderTop: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      <td
                        className="px-4 py-3 text-xs font-semibold"
                        style={{ color: "#f5f0e8" }}
                      >
                        {row[0]}
                      </td>
                      <td
                        className="px-4 py-3 text-xs"
                        style={{ color: "rgba(245,240,232,0.45)" }}
                      >
                        {row[1]}
                      </td>
                      <td
                        className="px-4 py-3 text-xs"
                        style={{ color: "rgba(245,240,232,0.45)" }}
                      >
                        {row[2]}
                      </td>
                      <td
                        className="px-4 py-3 text-xs font-medium"
                        style={{ color: "#c9a84c" }}
                      >
                        {row[3]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p>
            Memory is not an add-on feature — it is the foundational capability
            that separates a companion from a query engine. Without persistent
            memory, every conversation starts from scratch and the idea of
            &ldquo;knowing you&rdquo; is a fiction. Most AI products on the
            market have shallow, session-scoped, or easily-deleted memory on
            corporate servers. That is not genuine persistent knowing.
          </p>

          {/* Q3 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
            }}
          >
            What is a bonding model in AI?
          </h2>
          <p
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1rem",
              color: "#f5f0e8",
              fontStyle: "italic",
            }}
          >
            A bonding model is the architecture that makes an AI companion
            progressively more attuned to a specific person over time — drawing
            on accumulated memory, observed patterns, and an evolving identity
            profile to deliver care that is genuinely personalised rather than
            merely polite.
          </p>
          <p>
            Real bonding requires three systems: a memory vault storing
            structured representations of who you are; a pattern recognition
            layer that identifies changes in your emotional state and priorities;
            and a care-alignment layer shaping outputs around your long-term
            interests, not just your immediate request. MEOK&apos;s bonding
            model uses vector embeddings in a sovereign PostgreSQL vault with
            pgvector. Every conversation enriches it. The companion queries
            this vault on every response — your health notes, your recent
            emotional tone, your stated goals — so continuity is structural,
            not simulated.
          </p>

          {/* Q4 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
            }}
          >
            What are the four stages of MEOK&apos;s companion evolution?
          </h2>
          <p
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1rem",
              color: "#f5f0e8",
              fontStyle: "italic",
            }}
          >
            MEOK&apos;s AI companion moves through four defined stages —
            Prying Pulse, Emergent Fracture, Hatching Sovereign, and Your
            Sovereign — each representing a deeper level of bonding, autonomy,
            and personalised care as the companion builds its model of you.
          </p>

          {/* Stage cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {STAGES.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-black"
                    style={{ color: "#c9a84c" }}
                  >
                    {s.num}
                  </span>
                  <h3
                    className="font-black text-sm"
                    style={{ color: "#ffffff" }}
                  >
                    {s.name}
                  </h3>
                </div>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.55)" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <p>
            The stage model sets honest expectations. You do not get a
            &ldquo;Your Sovereign&rdquo; on day one. The depth of companionship
            is proportional to the depth of the relationship built. A companion
            that immediately claims to know you without earning that knowledge is
            a simulation. MEOK&apos;s stages are the process by which genuine
            knowing is built — incrementally, over the 40-day hatch period and
            far beyond.
          </p>

          {/* Q5 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
            }}
          >
            What do most AI companion apps get wrong?
          </h2>
          <p
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1rem",
              color: "#f5f0e8",
              fontStyle: "italic",
            }}
          >
            Most AI companion apps are chatbots with personas layered on top.
            They lack persistent memory, train on your personal disclosures,
            and are aligned to engagement metrics rather than your actual
            wellbeing — making them harmful at scale despite their friendly
            interface.
          </p>
          <p>
            Replika is a persona-based chatbot with limited memory, no sovereign
            data architecture, and a business model dependent on engagement —
            meaning the incentive is to keep you talking, not to support your
            independence. Character.AI is a character simulation platform with
            no real model of who you are. Neither product meets the definition
            of a genuine AI companion, however successfully they market
            themselves.
          </p>
          <p>
            The deeper problem is data. When you share something painful —
            grief, anxiety, loneliness — with an app running on corporate cloud
            infrastructure, that disclosure may become training data. Your pain
            is fuel for their next model. MEOK&apos;s architecture makes this
            impossible by design: sensitive content is processed locally via
            Ollama, no conversation is routed to a training pipeline, and your
            vault is encrypted with your keys.
          </p>

          {/* Q6 ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
            }}
          >
            Is an AI companion safe to use?
          </h2>
          <p
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1rem",
              color: "#f5f0e8",
              fontStyle: "italic",
            }}
          >
            Safety depends entirely on the architecture. A sovereign AI
            companion built with local processing for sensitive content, your
            encryption keys, and no training on your data is meaningfully safe.
            A corporate cloud companion optimised for engagement carries real
            risks for anyone using it for genuine emotional support.
          </p>
          <p>
            A genuinely safe AI companion does three things: processes sensitive
            data where only you can access it; aligns its outputs to your
            long-term wellbeing rather than session length; and is honest about
            its nature — it does not simulate emotions it does not have and
            does not substitute for human connection where that is what you
            actually need. MEOK&apos;s Maternal Covenant evaluates every output
            against care principles before delivery — as a structural scoring
            mechanism, not a prompt instruction that can be bypassed.
          </p>

          {/* Closing ── */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "0.75rem",
            }}
          >
            Who benefits most from an AI companion?
          </h2>
          <p
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1rem",
              color: "#f5f0e8",
              fontStyle: "italic",
            }}
          >
            People navigating isolation, chronic illness, neurodivergence,
            caregiving stress, or major life transitions — wherever consistent,
            patient, non-judgemental support across time has real value and
            human availability is limited or unreliable.
          </p>
          <p>
            The test is simple: open your current AI and say &ldquo;You know
            what I&apos;ve been struggling with lately.&rdquo; If it asks
            &ldquo;What have you been struggling with?&rdquo; — it is not a
            companion. If it responds with specific, accurate context from
            previous conversations — it is beginning to be one. If you have
            been using AI tools that forget you, extract from you, or simulate
            warmth without delivering continuity, you have not yet experienced
            what genuine AI companionship can be. That is what MEOK is built
            to change.
          </p>
        </div>

        {/* Share ── */}
        <div
          className="flex items-center gap-3 my-10 pt-8"
          style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.15em]"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-an-ai-companion&text=What+Is+an+AI+Companion%3F+The+honest+guide+to+bonded+AI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-xs font-semibold hover:opacity-80 transition-opacity"
            style={{
              border: "1px solid rgba(245,240,232,0.10)",
              color: "rgba(245,240,232,0.45)",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-an-ai-companion"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-xs font-semibold hover:opacity-80 transition-opacity"
            style={{
              border: "1px solid rgba(245,240,232,0.10)",
              color: "rgba(245,240,232,0.45)",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA ── */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a1226 0%, #0d0c18 100%)",
            border: "1px solid rgba(201,168,76,0.20)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-30"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.50), transparent 65%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Free Forever
            </p>
            <h3
              className="text-xl sm:text-2xl font-black mb-3"
              style={{ color: "#ffffff" }}
            >
              Hatch your AI companion — it only takes 3 minutes
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              MEOK is the first AI companion built on sovereign architecture.
              No corporate cloud. No training on your conversations. No
              forgetting. Free forever. No credit card.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Hatch your AI free &#8594;
            </Link>
          </div>
        </div>

        {/* Related posts ── */}
        <div>
          <h2 className="text-lg font-black mb-5" style={{ color: "#ffffff" }}>
            More from the blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RELATED.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                  style={{ color: p.tagColor, background: p.tagBg }}
                >
                  {p.tag}
                </span>
                <h3
                  className="font-bold text-sm leading-snug"
                  style={{ color: "#f5f0e8" }}
                >
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(245,240,232,0.08)",
          background: "#0d0c18",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 items-center sm:items-start">
            <span className="font-black text-sm" style={{ color: "#c9a84c" }}>
              MEOK AI LABS
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
              &copy; {new Date().getFullYear()} MEOK AI LABS. All rights
              reserved.
            </span>
          </div>
          <nav className="flex flex-wrap gap-5 justify-center">
            {[
              ["Home", "/"],
              ["Blog", "/blog"],
              ["Hatch", "/hatch"],
              ["Privacy", "/privacy"],
              ["About", "/about"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-xs hover:opacity-80 transition-opacity"
                style={{ color: "rgba(245,240,232,0.35)" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
