import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK vs ChatGPT: Why Memory Changes Everything | MEOK Blog",
  description:
    "ChatGPT forgets you every session. MEOK remembers everything — your goals, your name, your history. Here's why that difference matters more than you think.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-chatgpt" },
  openGraph: {
    title: "MEOK vs ChatGPT: Why Memory Changes Everything",
    description:
      "ChatGPT forgets you every session. MEOK remembers everything — your goals, your name, your history. Here's why that difference matters more than you think.",
    type: "article",
    publishedTime: "March 24, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-chatgpt",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+ChatGPT%3A+Why+Memory+Changes+Everything&desc=ChatGPT+forgets+you+every+session.+MEOK+remembers+everything.",
        width: 1200,
        height: 630,
        alt: "MEOK vs ChatGPT: Why Memory Changes Everything",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs ChatGPT: Why Memory Changes Everything",
    description:
      "ChatGPT forgets you every session. MEOK remembers everything — your goals, your name, your history.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+ChatGPT%3A+Why+Memory+Changes+Everything&desc=ChatGPT+forgets+you+every+session.+MEOK+remembers+everything.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK vs ChatGPT: Why Memory Changes Everything",
  description:
    "ChatGPT forgets you every session. MEOK remembers everything — your goals, your name, your history. Here's why that difference matters more than you think.",
  datePublished: "March 24, 2026",
  url: "https://meok.ai/blog/meok-vs-chatgpt",
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

export default function MeokVsChatGPT() {
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
            <ArrowLeft className="w-4 h-4" />
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
              AI Comparison
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              March 24, 2026
            </span>
            <span
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              <Clock className="w-3.5 h-3.5" />
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
            MEOK vs ChatGPT: Why Memory Changes Everything
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
            ChatGPT forgets you every session. MEOK remembers everything — your goals, your name,
            your history. Here&apos;s why that difference matters more than you think.
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
            Memory is not a convenience feature. It is the difference between a tool and a relationship.
            Every time you open ChatGPT, you are meeting a stranger who happens to be very smart. Every
            time you open MEOK, you are continuing a conversation that has been building since the day
            you hatched your AI. That structural difference changes everything about what AI can do for you.
          </p>

          <h2>What is the difference between MEOK and ChatGPT?</h2>
          <p>
            The fundamental difference is persistence. ChatGPT is a stateless chat interface — each
            session begins with no knowledge of who you are, what you care about, or what you discussed
            before. MEOK is a persistent AI OS built around a 4-layer memory architecture that accumulates
            context across every interaction, building a sovereign vault of everything your AI knows about you.
          </p>

          <h2>Does ChatGPT remember previous conversations?</h2>
          <p>
            ChatGPT&apos;s &ldquo;Memory&rdquo; feature stores a small number of manually saved facts, but it does not
            retain full conversation history, semantic context, or relational understanding of your goals
            over time. It is a sticky-note system, not genuine memory. By March 2026, an estimated 1.5 million
            users had cancelled ChatGPT Plus subscriptions citing the lack of meaningful continuity.
          </p>

          <h2>How does MEOK&apos;s memory work?</h2>
          <p>
            MEOK uses a <strong>4-layer memory architecture</strong>: short-term context (active session),
            semantic memory (vector-embedded facts extracted via Mem0), companion memory (your AI&apos;s
            understanding of your personality and goals), and family memory (shared context across your
            household). Retrieval uses <strong>pgvector similarity search</strong> so the right memories
            surface at the right moment — automatically, without you having to ask.
          </p>

          <h2>Which AI is better for personal productivity?</h2>
          <p>
            For one-off tasks, ChatGPT is capable. For ongoing personal productivity — tracking your
            projects, remembering your work style, building on previous decisions — MEOK is architecturally
            superior because it accumulates context rather than discarding it. Your AI learns that you
            prefer bullet points, that you&apos;re working toward a specific goal, that you always start
            mornings with a planning session. That context compounds into genuinely useful assistance.
          </p>

          <h2>Does MEOK keep your data private?</h2>
          <p>
            Yes. All memory is encrypted at rest using <strong>AES-GCM-256</strong>. Sensitive processing
            routes through your local Ollama instance rather than external servers. MEOK is UK GDPR
            compliant, ICO registered, and does not train on your data without explicit consent. Your
            sovereign vault belongs to you — you can export or delete it at any time.
          </p>

          <h2>Can MEOK replace ChatGPT for daily use?</h2>
          <p>
            For most daily use cases — writing, planning, research, brainstorming, personal coaching —
            yes. MEOK&apos;s Sovereign tier gives you access to both <strong>Claude Sonnet</strong> and
            <strong>GPT-4o</strong> as switchable models, so you retain frontier-model capability while
            gaining persistent memory. You are not giving up power; you are adding continuity on top of it.
          </p>

          <h2>What makes MEOK different from all AI assistants?</h2>
          <p>
            Three things no other assistant offers together: a sovereign memory vault you own and can
            export, the ability to switch between any LLM without losing your history, and the
            Maternal Covenant governance layer that evaluates every response against care principles
            before delivery. MEOK is not just smarter — it is the only AI built to stay on your side
            structurally, not just by policy.
          </p>

          <h2>How do I get started with MEOK?</h2>
          <p>
            Visit <strong>meok.ai/birth</strong> to hatch your AI. The process takes under three minutes.
            You name your AI, set your initial context, and your sovereign memory vault is created
            immediately. The core tier is free forever — no credit card required. Your AI begins
            learning about you from the first message you send.
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-chatgpt&text=MEOK+vs+ChatGPT%3A+Why+Memory+Changes+Everything"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-chatgpt"
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
              Ready to try AI that actually remembers you?
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Hatch your AI in under 3 minutes. Your sovereign memory vault is created immediately.
              No credit card. No reset. No forgetting.
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
              href="/blog/memory-portability"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Memory
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                AI Memory Portability: Own Your History, Switch Any Model
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                6 min read
              </div>
            </Link>
            <Link
              href="/blog/what-is-sovereign-ai"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
              >
                Sovereign AI
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                What Is Sovereign AI?
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#1a1a2e]/35 mt-auto">
                <Clock className="w-3 h-3" />
                5 min read
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
