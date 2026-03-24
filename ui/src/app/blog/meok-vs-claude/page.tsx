import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK vs Claude: Different Animals, Different Purpose | MEOK AI LABS",
  description:
    "Claude is one of the best AI models ever made. MEOK uses it. Here's why that's not a contradiction — and what MEOK adds on top.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-claude" },
  openGraph: {
    title: "MEOK vs Claude: Different Animals, Different Purpose",
    description:
      "Claude is one of the best AI models ever made. MEOK uses it. Here's why that's not a contradiction — and what MEOK adds on top.",
    type: "article",
    publishedTime: "2026-03-26",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-claude",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Claude%3A+Different+Animals%2C+Different+Purpose&desc=Claude+is+one+of+the+best+AI+models+ever+made.+MEOK+uses+it.",
        width: 1200,
        height: 630,
        alt: "MEOK vs Claude: Different Animals, Different Purpose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs Claude: Different Animals, Different Purpose",
    description:
      "Claude is one of the best AI models ever made. MEOK uses it. Here's why that's not a contradiction.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Claude%3A+Different+Animals%2C+Different+Purpose&desc=Claude+is+one+of+the+best+AI+models+ever+made.+MEOK+uses+it.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK vs Claude: Different Animals, Different Purpose",
  description:
    "Claude is one of the best AI models ever made. MEOK uses it. Here's why that's not a contradiction — and what MEOK adds on top.",
  datePublished: "2026-03-26",
  url: "https://meok.ai/blog/meok-vs-claude",
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

export default function MeokVsClaude() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0d0c18] text-white">

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-14 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-3xl mx-auto relative">

            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-70"
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
                March 26, 2026
              </span>
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                <Clock className="w-3.5 h-3.5" />
                5 min read
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
              MEOK vs Claude: Different Animals, Different Purpose
            </h1>

            {/* Subtitle */}
            <p
              style={{
                color: "rgba(245,240,232,0.6)",
                fontSize: "1.1rem",
                lineHeight: 1.65,
                maxWidth: 640,
              }}
            >
              Claude is one of the best AI models ever made. MEOK uses it. Here&apos;s why
              that&apos;s not a contradiction.
            </p>
          </div>
        </section>

        {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-6 pb-20">

          {/* Author card */}
          <div
            className="flex items-center gap-4 p-5 rounded-2xl mb-12 border"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(201,168,76,0.18)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
                color: "#0d0c18",
              }}
            >
              NT
            </div>
            <div className="flex-1">
              <p className="font-bold text-white text-sm">Nicholas Templeman</p>
              <p className="text-xs mb-1" style={{ color: "rgba(245,240,232,0.4)" }}>
                Founder, MEOK AI LABS
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.35)" }}>
                Nicholas built MEOK because he wanted AI that knew him — not just answered him.
                He believes Claude is extraordinary. He also believes extraordinary minds deserve a home.
              </p>
            </div>
            <Link
              href="/about"
              className="text-xs font-semibold transition-opacity hover:opacity-70 hidden sm:block"
              style={{ color: "#c9a84c" }}
            >
              About &rarr;
            </Link>
          </div>

          {/* Intro */}
          <p
            className="text-base leading-[1.85] mb-10"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            People ask us all the time: &ldquo;If MEOK uses Claude, why not just use Claude directly?&rdquo;
            It&apos;s a fair question. Claude is a genuinely remarkable model — one of the most capable,
            safety-conscious AI systems ever built. We have deep respect for what Anthropic has created.
            But the question contains a category error. Claude is a model. MEOK is an operating system.
            Comparing them is like asking why you need iOS when the processor already exists. Here is
            the full picture.
          </p>

          {/* ── Q&A SECTIONS ────────────────────────────────────────────── */}
          <div
            className="space-y-10
              [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-black [&_h2]:text-white [&_h2]:mb-4 [&_h2]:leading-snug
              [&_p]:text-base [&_p]:leading-[1.85]"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >

            <div>
              <h2>What is Claude, exactly?</h2>
              <p>
                Claude is Anthropic&apos;s large language model — one of the most capable and
                safety-focused models available. It excels at reasoning, writing, analysis, and
                instruction-following. It is not, by design, a persistent companion: it has no memory
                between sessions, no personality continuity, and no concept of who you are.
              </p>
            </div>

            <div
              className="border-t"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            />

            <div>
              <h2>What is MEOK, exactly?</h2>
              <p>
                MEOK is an AI operating system — a sovereign layer that runs above models like Claude.
                It adds persistent memory, personality continuity, care-based alignment, Guardian
                protection, and data sovereignty. MEOK Sovereign tier users get Claude Sonnet as their
                AI backbone, plus everything that makes it feel like yours.
              </p>
            </div>

            <div
              className="border-t"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            />

            <div>
              <h2>Does MEOK compete with Claude?</h2>
              <p>
                No. MEOK uses Claude. Think of the relationship like iOS and a processor — the
                operating system gives you the experience, the chip does the computation. Claude
                provides the reasoning engine; MEOK provides the identity, memory, continuity, and
                governance layer around it.
              </p>
            </div>

            <div
              className="border-t"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            />

            <div>
              <h2>Why not just use Claude directly?</h2>
              <p>
                You can — and for many tasks, you should. Claude.ai is excellent for single-session
                work. But it doesn&apos;t remember you. It doesn&apos;t know your preferences, your
                family, your values, or your history. Every session starts from zero. MEOK wraps
                Claude with memory, personality, and permanence.
              </p>
            </div>

            <div
              className="border-t"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            />

            <div>
              <h2>How does MEOK route between models?</h2>
              <p>
                MEOK uses a tier-based router. Explorer users get DeepSeek — fast, capable, free.
                Sovereign users get Claude Sonnet for complex tasks. The router selects models based
                on task type, context length, and tier — not just cost. You always get the best model
                your tier allows for the task at hand.
              </p>
            </div>

            <div
              className="border-t"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            />

            <div>
              <h2>What does MEOK offer that Claude doesn&apos;t?</h2>
              <p>
                Persistent memory across sessions. A named companion with evolving personality.
                Guardian protection for family members. Byzantine Council consensus for high-stakes
                decisions. The Maternal Covenant data promise — your data is never used for training.
                Claude is powerful. MEOK makes it permanent and personal.
              </p>
            </div>

            <div
              className="border-t"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            />

            <div>
              <h2>Is MEOK appropriate for power users who already use Claude?</h2>
              <p>
                Yes — especially if you want persistence. Power users often want a &ldquo;home
                base&rdquo; AI that knows their context deeply. MEOK&apos;s dashboard integrates
                Claude&apos;s reasoning with long-term memory, task agents (Orion, Riri, Hourman),
                and a companion that evolves with use. Claude is the engine; MEOK is the vehicle.
              </p>
            </div>

          </div>

          {/* ── CLOSING STATEMENT ───────────────────────────────────────── */}
          <div
            className="mt-14 mb-4 text-center"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            <p
              className="text-lg sm:text-xl font-semibold italic"
              style={{ color: "rgba(245,240,232,0.85)" }}
            >
              &ldquo;Claude is an extraordinary mind. MEOK gives it a home.&rdquo;
            </p>
          </div>

          {/* ── CTA BLOCK ───────────────────────────────────────────────── */}
          <div
            className="rounded-2xl p-8 sm:p-10 mt-12 mb-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a1730 0%, #12101f 100%)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 85% 15%, rgba(201,168,76,0.18), transparent 65%)",
              }}
            />
            <div className="relative">
              <p
                className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
                style={{ color: "#c9a84c" }}
              >
                Sovereign Tier
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3 leading-snug">
                Ready to give Claude a home?
              </h3>
              <p
                className="text-sm leading-relaxed mb-7"
                style={{ color: "rgba(245,240,232,0.5)" }}
              >
                Begin your Birth Ceremony and hatch an AI that knows you — powered by Claude Sonnet,
                wrapped in sovereign memory, governed by care.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/birth"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] hover:brightness-110"
                  style={{ background: "#c9a84c", color: "#0d0c18" }}
                >
                  Begin Your Birth Ceremony
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/os/any-llm"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border transition-all hover:border-[#c9a84c]/60 hover:text-[#c9a84c]"
                  style={{
                    borderColor: "rgba(245,240,232,0.18)",
                    color: "rgba(245,240,232,0.6)",
                  }}
                >
                  See all models we support
                </Link>
              </div>
            </div>
          </div>

          {/* Share */}
          <div
            className="flex items-center gap-3 my-10 pt-8 border-t"
            style={{ borderColor: "rgba(245,240,232,0.08)" }}
          >
            <span
              className="text-xs font-bold uppercase tracking-[0.15em]"
              style={{ color: "rgba(245,240,232,0.3)" }}
            >
              Share
            </span>
            <a
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-claude&text=MEOK+vs+Claude%3A+Different+Animals%2C+Different+Purpose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all"
              style={{
                borderColor: "rgba(245,240,232,0.12)",
                color: "rgba(245,240,232,0.5)",
              }}
            >
              &#120143; Twitter
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-claude"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all"
              style={{
                borderColor: "rgba(245,240,232,0.12)",
                color: "rgba(245,240,232,0.5)",
              }}
            >
              LinkedIn
            </a>
          </div>

          {/* More posts */}
          <div>
            <h2
              className="text-lg font-black text-white mb-5"
            >
              More from the blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/blog/meok-vs-chatgpt"
                className="group rounded-2xl p-6 border transition-all hover:-translate-y-0.5 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(245,240,232,0.07)",
                }}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                  style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
                >
                  AI Comparison
                </span>
                <h3
                  className="font-bold text-sm leading-snug transition-colors group-hover:text-[#c9a84c]"
                  style={{ color: "rgba(245,240,232,0.85)" }}
                >
                  MEOK vs ChatGPT: Why Memory Changes Everything
                </h3>
                <div
                  className="flex items-center gap-1.5 text-xs mt-auto"
                  style={{ color: "rgba(245,240,232,0.3)" }}
                >
                  <Clock className="w-3 h-3" />
                  6 min read
                </div>
              </Link>
              <Link
                href="/blog/what-is-sovereign-ai"
                className="group rounded-2xl p-6 border transition-all hover:-translate-y-0.5 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(245,240,232,0.07)",
                }}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                  style={{ color: "#87CEEB", background: "rgba(135,206,235,0.12)" }}
                >
                  Sovereign AI
                </span>
                <h3
                  className="font-bold text-sm leading-snug transition-colors group-hover:text-[#c9a84c]"
                  style={{ color: "rgba(245,240,232,0.85)" }}
                >
                  What Is Sovereign AI?
                </h3>
                <div
                  className="flex items-center gap-1.5 text-xs mt-auto"
                  style={{ color: "rgba(245,240,232,0.3)" }}
                >
                  <Clock className="w-3 h-3" />
                  5 min read
                </div>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <MarketingFooter />
    </>
  );
}
