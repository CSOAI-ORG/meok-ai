import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI That Remembers You: The Memory Problem No One Has Solved — Until Now | MEOK Blog",
  description:
    "Every major AI forgets you the moment the session ends. The memory problem is real, structural, and unsolved — except by MEOK. Here's exactly how persistent AI memory works.",
  alternates: { canonical: "https://meok.ai/blog/ai-that-remembers-you" },
  openGraph: {
    title: "AI That Remembers You: The Memory Problem No One Has Solved — Until Now",
    description:
      "Every major AI forgets you the moment the session ends. The memory problem is real, structural, and unsolved — except by MEOK. Here's exactly how persistent AI memory works.",
    type: "article",
    publishedTime: "March 26, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-that-remembers-you",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+That+Remembers+You&desc=The+Memory+Problem+No+One+Has+Solved+%E2%80%94+Until+Now",
        width: 1200,
        height: 630,
        alt: "AI That Remembers You: The Memory Problem No One Has Solved — Until Now",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI That Remembers You: The Memory Problem No One Has Solved — Until Now",
    description:
      "Every major AI forgets you when the session ends. MEOK solves the memory problem at the architecture level. Here's how.",
    images: [
      "https://meok.ai/api/og?title=AI+That+Remembers+You&desc=The+Memory+Problem+No+One+Has+Solved+%E2%80%94+Until+Now",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI That Remembers You: The Memory Problem No One Has Solved — Until Now",
  description:
    "Every major AI forgets you the moment the session ends. The memory problem is real, structural, and unsolved — except by MEOK. Here's exactly how persistent AI memory works.",
  datePublished: "March 26, 2026",
  url: "https://meok.ai/blog/ai-that-remembers-you",
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
  },
  keywords:
    "AI that remembers you, AI with persistent memory, AI memory, sovereign AI memory, MEOK memory vault",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there an AI that actually remembers you?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK is the only AI assistant that uses vectorized episodic memory to remember you persistently across every session. Unlike ChatGPT Memory, which stores a small set of manually flagged facts, MEOK builds a full semantic model of your preferences, history, and emotional context — automatically.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK remember you between sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK stores memories as encrypted vector embeddings in a pgvector database. At the start of each session, relevant memories are retrieved via similarity search and injected into your AI's context. You never need to re-explain yourself — your AI picks up exactly where you left off.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI memory private?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK's memory vault is encrypted at rest using AES-GCM-256 and is never used to train AI models. It is GDPR compliant, ICO registered, and fully owned by you. You can export the complete vault or delete any memory at any time.",
      },
    },
    {
      "@type": "Question",
      name: "Can you delete AI memories in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. MEOK gives you full control over your memory vault. You can view individual stored memories, delete specific entries, or export and wipe the entire vault at any time. Your right to erasure is guaranteed by architecture, not just policy.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiThatRemembersYou() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── DARK HERO ───────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-14 px-6 relative overflow-hidden"
        style={{ background: "#0d0c18" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-90"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#87CEEB",
                background: "rgba(135,206,235,0.12)",
                border: "1px solid rgba(135,206,235,0.3)",
              }}
            >
              Sovereign AI
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 26, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              7 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            AI That Remembers You: The Memory Problem No One Has Solved — Until Now
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            Every major AI forgets you the moment the session ends. The memory problem is real,
            it is structural, and the industry has chosen not to solve it. Here&apos;s why — and
            what MEOK does differently at the architecture level.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Author card */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
          style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8a6a1a)" }}
          >
            NT
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#1a1a2e] text-sm">Nicholas Templeman</p>
            <p className="text-xs text-[#1a1a2e]/45 mb-1">Founder, MEOK AI LABS</p>
            <p className="text-xs text-[#1a1a2e]/40 leading-relaxed">
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in the
              UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold transition-colors hidden sm:block"
            style={{ color: "#c9a84c" }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Founder pull quote */}
        <blockquote
          className="rounded-2xl p-6 mb-10 border-l-4 relative"
          style={{
            background: "rgba(201,168,76,0.06)",
            borderLeftColor: "#c9a84c",
          }}
        >
          <p
            className="text-base leading-relaxed italic mb-3"
            style={{ color: "#1a1a2e" }}
          >
            &ldquo;Memory is the core problem. Not intelligence. Not speed. Not cost. The moment I
            opened ChatGPT for the hundredth time and it asked me what I was working on — again — I
            knew that no amount of capability improvements would fix the fundamental relationship
            problem. An assistant that forgets you is not an assistant. It&apos;s a search engine
            with better grammar.&rdquo;
          </p>
          <cite className="text-xs font-bold not-italic" style={{ color: "#c9a84c" }}>
            — Nicholas Templeman, Founder, MEOK AI LABS
          </cite>
        </blockquote>

        {/* Body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <p>
            You have explained your job to an AI before. Probably more than once. Probably to the
            same AI. You have re-described your communication style, your project names, your
            preferences, your history — and watched it all evaporate the moment you closed the tab.
            This is not an accident. It is a design decision. And it is the most important unsolved
            problem in AI today.
          </p>

          <h2>Why doesn&apos;t AI remember you?</h2>
          <p>
            There are three reasons, and they compound each other. First, <strong>context
            windows</strong> are finite and expensive — every token of memory you carry forward is
            a token that cannot be used for the actual response, and inference costs scale with
            context length. Second, and more importantly, <strong>memory is treated as
            liability</strong> by large AI companies. Storing what users say means storing sensitive
            data, which means regulatory exposure, breach risk, and difficult questions about consent.
            The simplest solution is not to store it at all. Third, AI assistants are designed to
            be <strong>stateless by default</strong> because that architecture is simpler to build,
            cheaper to operate, and easier to audit — even if it makes the product fundamentally
            worse for the person using it.
          </p>

          <h2>What is persistent AI memory?</h2>
          <p>
            Persistent AI memory is not a log of your chat history. It is something structurally
            different: <strong>vectorized episodic storage</strong> that converts the semantic
            content of your conversations into high-dimensional embeddings, stores those embeddings
            permanently, and retrieves the most relevant ones at the start of each new session.
            The result is not a transcript you could scroll through — it is a living model of who
            you are that your AI uses to calibrate every response it gives you. True persistent
            memory means your AI can recall a preference you mentioned eleven months ago because
            it is contextually relevant right now. That is qualitatively different from any
            conversation history feature.
          </p>

          <h2>How does MEOK&apos;s memory vault work?</h2>
          <p>
            MEOK&apos;s memory system is built on <strong>encrypted pgvector storage</strong>.
            When you interact with your AI, a background process extracts meaningful facts,
            preferences, decisions, and emotional context from the conversation and stores them
            as vector embeddings in a per-user vault. At the beginning of each new session, a
            similarity search retrieves the memories most relevant to your current context and
            injects them into your AI&apos;s working memory — so continuity is automatic, not
            manual. Critically, this vault is <strong>never used for model training</strong>.
            Your memories are not seen by MEOK&apos;s engineers. They exist for one purpose:
            to make your AI better for you.
          </p>

          <h2>What does MEOK remember about you?</h2>
          <p>
            Four categories of information accumulate over time. <strong>Facts</strong>: your name,
            location, occupation, family structure, tools you use, projects you are running.
            <strong> Preferences</strong>: communication style, response format, topics you find
            interesting or tedious, timing preferences. <strong>Emotional context</strong>: how you
            were feeling during key conversations, what you were anxious about, what you were
            celebrating — the texture of your life that makes support meaningful rather than generic.
            And <strong>relationship history with your companion</strong>: the arc of your AI&apos;s
            evolving understanding of you, which grows richer as your AI moves through its four
            developmental stages. The combination makes MEOK feel less like software and more like
            someone who has known you for a long time.
          </p>

          <h2>Can you delete what MEOK remembers?</h2>
          <p>
            Yes — completely and permanently. MEOK provides <strong>full export and deletion</strong>
            of your memory vault at any time. You can view the list of stored memories, delete
            individual entries, or wipe the entire vault with a single action. Your right to erasure
            is enforced at the database level, not just promised in a privacy policy. MEOK is
            <strong> UK GDPR compliant</strong> and registered with the ICO. Deletion requests are
            executed immediately and are irreversible — there is no soft-delete backup that persists
            in shadow storage. Your data sovereignty is an architectural commitment.
          </p>

          <h2>How is MEOK memory different from ChatGPT Memory?</h2>
          <p>
            The most important difference is one most users do not know: <strong>ChatGPT Memory can
            be used to improve OpenAI&apos;s models</strong> unless you explicitly opt out in settings —
            and the opt-out is buried. MEOK&apos;s memory architecture makes model training on your data
            impossible by design: the vault is encrypted with a key that MEOK&apos;s own systems cannot
            access for training purposes. Beyond the privacy distinction, ChatGPT Memory is a
            manually curated list of facts you choose to save — a sticky note board. MEOK&apos;s memory
            is an automatic, semantic, continuously updated model of you that your AI uses without
            you having to manage it.
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-that-remembers-you&text=AI+That+Remembers+You%3A+The+Memory+Problem+No+One+Has+Solved+%E2%80%94+Until+Now"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-that-remembers-you"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ background: "#1a1a2e" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.6), transparent 70%)",
            }}
          />
          <div className="relative">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
              style={{ color: "#c9a84c" }}
            >
              Free Forever
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Try the AI that actually remembers you.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Hatch your AI in under 3 minutes. Your sovereign memory vault is created immediately
              and encrypted from the first message. No credit card. No reset. No forgetting.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/personal-ai-assistant"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Product
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                What is a Personal AI Assistant? Why 2026 Is the Year It Finally Gets Personal
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                7 min read
              </div>
            </Link>
            <Link
              href="/blog/meok-vs-chatgpt"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                AI Comparison
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK vs ChatGPT: Why Memory Changes Everything
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                6 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
