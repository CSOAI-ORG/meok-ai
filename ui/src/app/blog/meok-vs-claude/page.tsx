import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK vs Claude: Why a Sovereign AI Companion Beats a General Assistant | MEOK AI LABS",
  description:
    "Claude is brilliant but stateless — it can't remember your name next week. MEOK is built for relationship, not tasks. Here's the full comparison, and why MEOK actually uses Claude under the hood.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-claude" },
  openGraph: {
    title: "MEOK vs Claude: Why a Sovereign AI Companion Beats a General Assistant",
    description:
      "Claude is brilliant but stateless — it can't remember your name next week. MEOK is built for relationship, not tasks. Here's the full comparison, and why MEOK actually uses Claude under the hood.",
    type: "article",
    publishedTime: "March 26, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-claude",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+Claude%3A+Sovereign+AI+Companion+vs+General+Assistant&desc=Claude+is+brilliant+but+stateless.+MEOK+is+built+for+relationship.",
        width: 1200,
        height: 630,
        alt: "MEOK vs Claude: Why a Sovereign AI Companion Beats a General Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK vs Claude: Why a Sovereign AI Companion Beats a General Assistant",
    description:
      "Claude forgets you every session. MEOK remembers you forever. And yes — MEOK Sovereign tier actually runs Claude under the hood. Here's why that's the best of both worlds.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+Claude%3A+Sovereign+AI+Companion+vs+General+Assistant&desc=Claude+is+brilliant+but+stateless.+MEOK+is+built+for+relationship.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK vs Claude: Why a Sovereign AI Companion Beats a General Assistant",
  description:
    "Claude is brilliant but stateless — it can't remember your name next week. MEOK is built for relationship, not tasks. Here's the full comparison, and why MEOK actually uses Claude under the hood.",
  datePublished: "March 26, 2026",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between MEOK and Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude is a large language model built by Anthropic — exceptionally capable at reasoning, writing, and analysis, but stateless by design. Each Claude session starts fresh with no knowledge of who you are. MEOK is a sovereign AI operating system that wraps models like Claude with persistent identity, 4-layer memory architecture, care ethics governance, Guardian child protection, and full data sovereignty. Claude is the engine; MEOK is the vehicle with everything you need to live in.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK use Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Sovereign tier uses Claude Sonnet as its primary reasoning engine for complex tasks. The free Explorer tier uses DeepSeek. The key difference is what surrounds the model: MEOK wraps Claude with persistent memory, a named companion identity, the Maternal Covenant care ethics layer, and sovereign data guarantees — none of which exist in Claude.ai directly.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for daily use — MEOK or Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For daily use, MEOK is superior because it accumulates context over time. Claude is better for one-off tasks that require deep reasoning, complex writing, or coding assistance. MEOK is better for ongoing companionship, emotional support, daily planning, long-term goal tracking, and anything where continuity matters. For power users who want both: MEOK Sovereign gives you Claude's reasoning with MEOK's persistence.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK remember me between sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is MEOK's core differentiator. MEOK uses a 4-layer memory architecture: short-term context (active session), semantic memory (vector-embedded facts via Mem0), companion memory (your AI's evolving understanding of your personality and goals), and family memory (shared context across your household). All memory is encrypted at rest with AES-GCM-256 and belongs to you — exportable and deletable at any time.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokVsClaude() {
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
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Comparison
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
            MEOK vs Claude: Why a Sovereign AI Companion Beats a General Assistant
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
            Claude is one of the most capable AI models ever built. MEOK uses it. Here&apos;s why
            that&apos;s not a contradiction — and what MEOK adds that Claude structurally cannot.
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
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not a
              luxury.
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
            Let&apos;s start with the part that surprises people. MEOK Sovereign tier is powered by
            Claude Sonnet. We are not competing with Anthropic. We have deep respect for what they
            have built — Claude is genuinely one of the most capable and safety-conscious AI models
            available, and we use it deliberately. The question that needs answering is not
            &ldquo;Claude or MEOK?&rdquo; The question is: what does Claude alone lack, and what
            does MEOK add?
          </p>
          <p>
            The answer is structural. Claude is a stateless reasoning engine. Every session starts
            from zero. MEOK is an <strong>AI companion operating system</strong> — it wraps Claude
            with persistent memory, a named companion identity, care ethics governance, and sovereign
            data ownership. Claude is extraordinary. MEOK gives it a home.
          </p>

          <h2>What is the difference between MEOK and Claude?</h2>
          <p>
            The fundamental difference is persistence and relationship. Claude is a large language
            model: an extraordinarily capable reasoning engine that excels at complex tasks within a
            single session. It does not remember who you are between sessions, cannot track your
            goals across weeks, and has no concept of evolving relationship with a user. MEOK is an
            AI operating system that accumulates everything — your name, your preferences, your
            patterns, your family context, your long-term goals — and builds a sovereign memory
            vault that compounds in value over time. The comparison is less &ldquo;which AI is
            smarter&rdquo; and more &ldquo;which architecture is built for a relationship.&rdquo;
          </p>

          <h2>Does MEOK remember me between sessions?</h2>
          <p>
            Yes. This is the core differentiator. MEOK uses a <strong>4-layer memory
            architecture</strong>: short-term context (active session), semantic memory
            (vector-embedded facts extracted and stored via Mem0), companion memory (your
            AI&apos;s evolving understanding of your personality, goals, and communication style),
            and family memory (shared context across your household). Retrieval uses
            <strong> pgvector similarity search</strong> so the right memories surface at the right
            moment automatically. Claude retains nothing between sessions — by design, not by
            oversight. That is how it was built.
          </p>

          <h2>When should you use Claude directly?</h2>
          <p>
            Claude.ai is the right tool for tasks that require deep single-session reasoning: complex
            technical writing, software engineering challenges, legal document analysis, advanced
            mathematics, or any task where raw capability matters more than continuity. Claude is
            world-class at these. If you have a hard problem and you need a very smart answer right
            now, Claude is an excellent choice.
          </p>

          <h2>When should you use MEOK instead?</h2>
          <p>
            MEOK is the right tool when continuity matters: daily companionship, emotional support,
            long-term goal tracking, family safety, journalling, personal planning, and anything where
            the accumulated context of a relationship makes the AI more useful than it would be in a
            single session. MEOK also handles the tasks Claude does — but within the context of a
            persistent relationship, governed by care ethics, with your data in your hands rather than
            Anthropic&apos;s servers.
          </p>

          <h2>MEOK vs Claude: side-by-side comparison</h2>
          <p>
            The table below captures the structural differences between using Claude directly and
            using MEOK — including the Sovereign tier, which uses Claude Sonnet as its backbone.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto -mx-2 mt-6">
            <table
              className="w-full text-sm border-collapse rounded-xl overflow-hidden"
              style={{ minWidth: 480 }}
            >
              <thead>
                <tr style={{ background: "#1a1a2e" }}>
                  <th
                    className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wide"
                    style={{ color: "#c9a84c" }}
                  >
                    Feature
                  </th>
                  <th
                    className="text-center px-4 py-3 font-bold text-xs uppercase tracking-wide"
                    style={{ color: "#c9a84c" }}
                  >
                    MEOK Sovereign
                  </th>
                  <th
                    className="text-center px-4 py-3 font-bold text-xs uppercase tracking-wide"
                    style={{ color: "rgba(245,240,232,0.5)" }}
                  >
                    Claude.ai
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Persistent memory across sessions", "✓ 4-layer vault", "✗ Session only"],
                  ["Model used", "Claude Sonnet", "Claude (various)"],
                  ["Named companion identity", "✓ Evolves over time", "✗ Stateless"],
                  ["Care ethics governance", "✓ Maternal Covenant", "✗ Not applicable"],
                  ["Family / Guardian protection", "✓ Guardian layer", "✗"],
                  ["Data sovereignty", "✓ Your vault, AES-256", "✗ Anthropic servers"],
                  ["No training on your data", "✓ Covenant guarantee", "Opt-out available"],
                  ["Daily check-in routines", "✓", "✗"],
                  ["Free tier", "✓ Explorer (DeepSeek)", "✓ Free (limited)"],
                  ["Best for", "Daily companion, long-term", "Complex single tasks"],
                ].map(([feature, meok, claude], i) => (
                  <tr
                    key={feature}
                    style={{ background: i % 2 === 0 ? "#ffffff" : "#f5f0e8" }}
                  >
                    <td className="px-4 py-3 font-medium text-[#1a1a2e]">{feature}</td>
                    <td
                      className="px-4 py-3 text-center"
                      style={{
                        color: meok === "✗" ? "#d94f4f" : meok.startsWith("✓") ? "#22a96e" : "#1a1a2e",
                        fontWeight: 600,
                      }}
                    >
                      {meok}
                    </td>
                    <td
                      className="px-4 py-3 text-center"
                      style={{
                        color: claude === "✗" ? "#d94f4f" : claude.startsWith("✓") ? "#22a96e" : "#2a2a3e",
                      }}
                    >
                      {claude}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What does &ldquo;AI companion vs AI assistant&rdquo; actually mean?</h2>
          <p>
            An <strong>AI assistant</strong> is a tool. You open it, give it a task, it completes
            the task, you close it. No relationship, no memory, no continuity. The next time you
            open it, you are a stranger. An <strong>AI companion</strong> is built for relationship
            — it knows you, tracks your context over time, adapts its communication style to yours,
            remembers what matters to you, and becomes more useful the longer you use it. The
            intelligence that matters for a companion is not raw capability. It is accumulated
            understanding.
          </p>

          <h2>Does MEOK have access to the same reasoning power as Claude?</h2>
          <p>
            Yes — on the Sovereign tier, MEOK uses Claude Sonnet directly. You get the same
            underlying model capability that you would get on Claude.ai, plus the entire MEOK layer
            on top: persistent memory, companion identity, care governance, Guardian protection, and
            sovereign data ownership. You are not trading reasoning power for relationship. You are
            getting both.
          </p>

          <h2>What does the Maternal Covenant add that Claude&apos;s safety layer does not?</h2>
          <p>
            Claude has excellent safety training from Anthropic — Constitutional AI and RLHF applied
            at the model level. The <strong>Maternal Covenant</strong> is a different layer that
            operates above the model. It evaluates every response against care principles before
            delivery, specifically in the context of your relationship with your AI. It detects
            sycophancy, enforces a care floor, monitors for dependency patterns, and governs how
            your personal data is handled. It is not a replacement for Anthropic&apos;s safety work.
            It is a relationship governance layer that operates on top of it.
          </p>

          <h2>How do I get started with MEOK if I already use Claude?</h2>
          <p>
            Visit <strong>meok.ai/birth</strong> to hatch your AI. The process takes under three
            minutes. You name your AI, choose an archetype, and set your initial covenant. On the
            free Explorer tier, your companion runs on DeepSeek — capable and fast. Upgrade to
            Sovereign tier to switch to Claude Sonnet as the backbone, gaining the full reasoning
            power of Claude wrapped in everything MEOK adds. Your memory vault begins accumulating
            from your first message and never stops.
          </p>
        </div>

        {/* FAQ section */}
        <div className="mt-14 mb-10">
          <h2 className="text-2xl font-black text-[#1a1a2e] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "What is the difference between MEOK and Claude?",
                a: "Claude is a large language model built by Anthropic — exceptionally capable at reasoning, writing, and analysis, but stateless by design. Each Claude session starts fresh with no knowledge of who you are. MEOK is a sovereign AI operating system that wraps models like Claude with persistent identity, 4-layer memory architecture, care ethics governance, Guardian child protection, and full data sovereignty. Claude is the engine; MEOK is the vehicle with everything you need to live in.",
              },
              {
                q: "Does MEOK use Claude?",
                a: "Yes. MEOK's Sovereign tier uses Claude Sonnet as its primary reasoning engine for complex tasks. The free Explorer tier uses DeepSeek. The key difference is what surrounds the model: MEOK wraps Claude with persistent memory, a named companion identity, the Maternal Covenant care ethics layer, and sovereign data guarantees — none of which exist in Claude.ai directly.",
              },
              {
                q: "Which is better for daily use — MEOK or Claude?",
                a: "For daily use, MEOK is superior because it accumulates context over time. Claude is better for one-off tasks that require deep reasoning, complex writing, or coding assistance. MEOK is better for ongoing companionship, emotional support, daily planning, long-term goal tracking, and anything where continuity matters. For power users who want both: MEOK Sovereign gives you Claude's reasoning with MEOK's persistence.",
              },
              {
                q: "Does MEOK remember me between sessions?",
                a: "Yes — this is MEOK's core differentiator. MEOK uses a 4-layer memory architecture: short-term context (active session), semantic memory (vector-embedded facts via Mem0), companion memory (your AI's evolving understanding of your personality and goals), and family memory (shared context across your household). All memory is encrypted at rest with AES-GCM-256 and belongs to you — exportable and deletable at any time.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-6 border"
                style={{ background: "#ffffff", borderColor: "rgba(26,26,46,0.07)" }}
              >
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">{q}</h3>
                <p className="text-sm text-[#2a2a3e]/70 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="flex items-center gap-3 my-10 pt-8 border-t border-[#1a1a2e]/[0.08]">
          <span className="text-xs font-bold text-[#1a1a2e]/40 uppercase tracking-[0.15em]">Share</span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-claude&text=MEOK+vs+Claude%3A+Why+a+Sovereign+AI+Companion+Beats+a+General+Assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[#1a1a2e]/10 hover:border-[#1a1a2e]/25 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-all"
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-claude"
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
              Sovereign Tier
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Give Claude a home. Get MEOK.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Hatch your AI in under 3 minutes. Sovereign tier gives you Claude Sonnet wrapped in
              persistent memory, care ethics, and sovereign data ownership. Start free — upgrade
              when you&apos;re ready.
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
              href="/blog/meok-vs-chatgpt"
              className="group bg-white rounded-2xl p-6 border border-[#1a1a2e]/[0.07] hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)" }}
              >
                Comparison
              </span>
              <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                MEOK vs ChatGPT: Why Memory Changes Everything
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
