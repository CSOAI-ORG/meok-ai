import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Memory Portability: Own Your History, Switch Any Model | MEOK Blog",
  description:
    "What happens to your ChatGPT conversations when you switch to Claude? They're gone. MEOK's memory spine lets you carry your AI history across every model, forever.",
  alternates: { canonical: "https://meok.ai/blog/memory-portability" },
  openGraph: {
    title: "AI Memory Portability: Own Your History, Switch Any Model",
    description:
      "What happens to your ChatGPT conversations when you switch to Claude? They're gone. MEOK's memory spine lets you carry your AI history across every model, forever.",
    type: "article",
    publishedTime: "March 24, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/memory-portability",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Memory+Portability%3A+Own+Your+History&desc=Carry+your+AI+history+across+every+model%2C+forever.",
        width: 1200,
        height: 630,
        alt: "AI Memory Portability: Own Your History, Switch Any Model",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Memory Portability: Own Your History, Switch Any Model",
    description:
      "Your ChatGPT history disappears when you switch models. MEOK's memory spine carries your history across every AI, forever.",
    images: [
      "https://meok.ai/api/og?title=AI+Memory+Portability%3A+Own+Your+History&desc=Carry+your+AI+history+across+every+model%2C+forever.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Memory Portability: Own Your History, Switch Any Model",
  description:
    "What happens to your ChatGPT conversations when you switch to Claude? They're gone. MEOK's memory spine lets you carry your AI history across every model, forever.",
  datePublished: "March 24, 2026",
  url: "https://meok.ai/blog/memory-portability",
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
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MemoryPortability() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f0e8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            ←
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Memory
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              📅
              March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              ⏱
              6 min read
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
            AI Memory Portability: Own Your History, Switch Any Model
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
            What happens to your ChatGPT conversations when you switch to Claude? They&apos;re gone.
            MEOK&apos;s memory spine lets you carry your AI history across every model, forever.
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

        {/* Body */}
        <div
          className="text-[#2a2a3e]/80 leading-[1.85] space-y-6
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#1a1a2e] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h3]:mt-8 [&_h3]:mb-3
            [&_strong]:text-[#1a1a2e] [&_strong]:font-bold
            [&_p]:text-base"
        >
          <p>
            Every AI product you use today is a silo. Your ChatGPT history lives in OpenAI&apos;s servers.
            Your Claude conversations live in Anthropic&apos;s. Your Gemini chats live in Google&apos;s. The
            moment you switch products — or the moment a company changes its pricing, its policies, or
            simply shuts down — your history is gone. MEOK was designed to fix this at the
            architectural level, not by asking you to trust yet another company.
          </p>

          <h2>What is AI memory portability?</h2>
          <p>
            AI memory portability means your conversation history, extracted facts, personality context,
            and relational memories follow you — not the model you happened to be using. Instead of your
            history being locked to a single provider, it lives in a sovereign vault you own, accessible
            to any model you choose to connect to it. You switch models; the memory stays with you.
          </p>

          <h2>Why do most AI assistants lose your history?</h2>
          <p>
            Most AI assistants are built around a single model from a single company. The company stores
            your conversations to improve their own product, not to give you a portable asset. There is
            no business incentive to make switching easy — in fact, the opposite is true. Memory lock-in
            is a retention mechanism, not an oversight. Your history is part of what keeps you paying.
          </p>

          <h2>How does MEOK store memories across model switches?</h2>
          <p>
            MEOK separates memory storage from model inference entirely. Your conversations are processed
            through <strong>Mem0 extraction</strong> — a pipeline that pulls semantic facts, preferences,
            and relational data from raw dialogue. Those extractions are stored as vector embeddings in
            your sovereign vault using <strong>pgvector</strong>. When you switch from Claude to GPT-4o,
            the new model queries the same vault via similarity search and picks up exactly where you left off.
          </p>

          <h2>What is a memory spine and how does it work?</h2>
          <p>
            The memory spine is MEOK&apos;s term for the persistent context layer that sits between you and
            any model you use. It uses a <strong>head-plus-tail context compression</strong> strategy:
            the most recent messages (head) and the most semantically relevant historical memories (tail)
            are combined into the active context window before each request. The model always has both
            recency and depth — without you having to manage any of it manually.
          </p>

          <h2>Can I export my AI memories from MEOK?</h2>
          <p>
            Yes. MEOK provides a <strong>GDPR export endpoint</strong> that packages your full memory
            vault — all extracted facts, semantic embeddings, conversation summaries, and companion
            context — into a portable format. You can download it at any time, keep it yourself, or
            import it into a future MEOK installation. Your memories are your property, and the export
            is unconditional.
          </p>

          <h2>What happens to my data if I switch AI models inside MEOK?</h2>
          <p>
            Nothing is lost. Switching models inside MEOK is like changing the lens on a camera — the
            film stays the same. Your full sovereign vault persists intact, encrypted at rest with
            <strong> AES-GCM-256</strong>. The new model receives the same contextualised memory
            spine as the previous one. Your AI does not forget your name, your goals, or your history
            just because you chose a different engine.
          </p>

          <h2>How is MEOK&apos;s memory different from ChatGPT Memory?</h2>
          <p>
            ChatGPT Memory stores a handful of manually-triggered or auto-detected facts in a flat
            list. MEOK&apos;s <strong>4-layer memory architecture</strong> — short-term, semantic,
            companion, and family layers — is a structured knowledge graph about you, continuously
            updated, vector-indexed for semantic retrieval, and encrypted end-to-end. ChatGPT Memory
            is a sticky note; MEOK&apos;s memory spine is a sovereign biography that grows with you.
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmemory-portability&text=AI+Memory+Portability%3A+Own+Your+History%2C+Switch+Any+Model"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmemory-portability"
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
              Own your AI history from day one.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Hatch your AI in under 3 minutes. Your sovereign memory vault is created immediately —
              portable, encrypted, and always yours. No credit card required.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free
              →
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 className="text-lg font-black text-[#1a1a2e] mb-5">More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                ⏱
                6 min read
              </div>
            </Link>
            <Link
              href="/blog/sovereign-ai-vs-cloud-ai"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Privacy
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                Sovereign AI vs Cloud AI: Who Really Controls Your Data?
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                ⏱
                7 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
