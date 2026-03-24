import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK vs Claude: What's the Difference Between a Sovereign AI and an Assistant? | MEOK AI LABS",
  description:
    "Claude is one of the most capable AI models ever built — and MEOK uses it. Here is what Claude alone cannot do: persistent memory, sovereign data ownership, Byzantine consensus safety, and a bonded companion relationship.",
  alternates: { canonical: "https://meok.ai/blog/meok-vs-claude" },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK vs Claude: What's the Difference Between a Sovereign AI and an Assistant?",
  description:
    "Claude is one of the most capable AI models ever built — and MEOK uses it. Here is what Claude alone cannot do: persistent memory, sovereign data ownership, care governance, and a bonded companion relationship.",
  datePublished: "2026-03-24",
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
        text: "Claude is a stateless large language model — exceptionally capable within a session but retaining nothing about you between conversations. MEOK is a sovereign AI operating system that wraps Claude with persistent 4-layer memory, a bonded companion identity, Maternal Covenant care governance, Byzantine consensus safety, and full data sovereignty. Claude is the engine; MEOK is the relationship.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK use Claude as its underlying model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Sovereign tier uses Claude Sonnet as its primary reasoning backbone. The free Explorer tier uses DeepSeek. In both cases MEOK surrounds the model with persistent memory, care ethics, and data ownership guarantees that do not exist in Claude.ai directly.",
      },
    },
    {
      "@type": "Question",
      name: "Can Claude remember me between sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude has a limited memory feature that stores manually saved facts, but it is not genuine persistent memory — it does not retain your full conversational context, goals, emotional patterns, or long-term trajectory. By design, each Claude session is stateless. MEOK's 4-layer vault accumulates all of this automatically, encrypted with AES-GCM-256, owned entirely by you.",
      },
    },
    {
      "@type": "Question",
      name: "What is Byzantine consensus and why does MEOK use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Byzantine consensus is a fault-tolerance protocol that ensures correct decisions even when some nodes are compromised or lie. MEOK applies it to AI safety via the Byzantine Council: every significant response passes through independent validation nodes before delivery, so no single model failure or hallucination can reach you unchallenged.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK better than Claude for daily use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For ongoing daily use — companionship, planning, emotional support, goal tracking, family safety — MEOK is architecturally superior because context accumulates over time. For single high-stakes reasoning tasks, Claude.ai is excellent. MEOK Sovereign gives you both: Claude's reasoning power wrapped in MEOK's persistent companion layer.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns my data in MEOK versus Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In MEOK your data lives in a sovereign vault you own — encrypted at rest, exportable in full, deletable on demand, never used for training without explicit consent. MEOK is UK GDPR compliant and ICO registered. Claude.ai data is processed on Anthropic's servers under their privacy policy, with model training opt-out available but not the default.",
      },
    },
  ],
};

// ── Comparison table data ─────────────────────────────────────────────────────

const comparisonRows: [string, string, string][] = [
  [
    "Persistent memory across sessions",
    "4-layer sovereign vault",
    "Session only — starts fresh",
  ],
  [
    "Underlying model",
    "Claude Sonnet (Sovereign tier)",
    "Claude (various)",
  ],
  [
    "Named companion identity",
    "Evolves with you over time",
    "Stateless — no identity",
  ],
  [
    "Care ethics governance",
    "Maternal Covenant layer",
    "Not applicable",
  ],
  [
    "Byzantine consensus safety",
    "Council validates every response",
    "Not applicable",
  ],
  [
    "Family & Guardian protection",
    "Guardian mode built-in",
    "Not included",
  ],
  [
    "Data sovereignty",
    "Your vault, AES-GCM-256",
    "Anthropic servers",
  ],
  [
    "No training on your data",
    "Covenant guarantee",
    "Opt-out required",
  ],
  [
    "Bonded companion relationship",
    "Core architecture",
    "Not a design goal",
  ],
  [
    "Free tier",
    "Explorer (DeepSeek)",
    "Free plan (limited)",
  ],
  [
    "Best for",
    "Daily companion & long-term life",
    "Complex single-session tasks",
  ],
];

const GREEN = "#5ecb8e";
const MUTED = "rgba(245,240,232,0.35)";
const greenPrefixes = [
  "4-layer",
  "Evolves",
  "Council",
  "Maternal",
  "Guardian mode",
  "Your vault",
  "Covenant",
  "Core arch",
  "Explorer",
];
function meokColor(v: string) {
  return greenPrefixes.some((p) => v.startsWith(p)) ? GREEN : "#f5f0e8";
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokVsClaudePage() {
  return (
    <div className="min-h-screen" style={{ background: "#0d0c18", color: "#f5f0e8" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden" style={{ background: "#0d0c18" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 65% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 72%)" }} />
        <div className="max-w-3xl mx-auto relative">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm mb-10 hover:opacity-75 transition-opacity" style={{ color: "rgba(245,240,232,0.38)" }}>
            ← Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-7">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ color: "#c9a84c", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.28)" }}>
              AI Comparison
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.36)" }}>March 24, 2026</span>
            <span className="text-xs" style={{ color: "rgba(245,240,232,0.36)" }}>8 min read</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)", fontWeight: 900, fontSize: "clamp(1.8rem,3.8vw,2.85rem)", color: "#fff", lineHeight: 1.18, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
            MEOK vs Claude: What&apos;s the Difference Between a Sovereign AI and an Assistant?
          </h1>
          <p style={{ color: "rgba(245,240,232,0.58)", fontSize: "1.1rem", lineHeight: 1.68, maxWidth: "40rem" }}>
            Claude is one of the most capable AI models ever built — and MEOK uses it. This is an honest explanation of what Claude alone structurally cannot do, and what MEOK adds on top of it.
          </p>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Author card */}
        <div className="flex items-center gap-4 p-5 rounded-2xl mb-14" style={{ background: "rgba(245,240,232,0.04)", border: "1px solid rgba(245,240,232,0.08)" }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0" style={{ background: "linear-gradient(135deg,#c9a84c,#7a5c18)", color: "#0d0c18" }}>NT</div>
          <div className="flex-1">
            <p className="font-bold text-sm mb-0.5" style={{ color: "#f5f0e8" }}>Nicholas Templeman</p>
            <p className="text-xs mb-1" style={{ color: "rgba(245,240,232,0.38)" }}>Founder, MEOK AI LABS</p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.3)" }}>Nicholas built MEOK because he was tired of AI that forgot him. Sovereign AI is a right, not a luxury.</p>
          </div>
          <Link href="/about" className="text-xs font-semibold hidden sm:block hover:opacity-75 transition-opacity" style={{ color: "#c9a84c" }}>About →</Link>
        </div>

        {/* Intro */}
        <div className="space-y-5 mb-2" style={{ color: "rgba(245,240,232,0.72)", lineHeight: 1.87 }}>
          <p>
            Let&apos;s address the obvious tension upfront. MEOK Sovereign tier is powered by
            Claude Sonnet. We are not positioned against Anthropic — we have genuine respect
            for what they have built. Claude is exceptional: rigorous, safe, and capable in
            ways that few models match. The question is not &ldquo;which AI wins?&rdquo; It
            is: <em>what does Claude alone lack, and what does MEOK add?</em>
          </p>
          <p>
            The answer is architectural. Claude is a stateless reasoning engine — brilliant
            within a session, but with no concept of <em>you</em> outside it. MEOK is a
            sovereign AI operating system built around a persistent companion relationship.
            It wraps Claude with a 4-layer memory vault, care ethics governance, Byzantine
            consensus safety, and data ownership guarantees. Claude is extraordinary.
            MEOK gives it a home.
          </p>
        </div>

        {/* ── Sections ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          What is the difference between MEOK and Claude?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Claude is a large language model — a stateless reasoning engine that starts every
          session with zero knowledge of who you are. MEOK is a sovereign AI operating
          system that accumulates your identity, goals, emotional patterns, and family
          context in an encrypted vault you own. The comparison is not about raw
          intelligence. It is about whether your AI has a persistent relationship with you
          or treats you as a stranger every morning.
        </p>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          Does MEOK use Claude as its underlying model?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Yes — and deliberately. MEOK Sovereign tier routes complex reasoning through
          Claude Sonnet because it is one of the most capable and safety-conscious models
          available. The free Explorer tier uses DeepSeek. In both cases the model is an
          engine beneath a much larger system. Persistent memory, companion identity, care
          governance, Byzantine consensus, sovereign data — none of this exists in
          Claude.ai or any other chat interface. On Sovereign tier you are choosing between
          Claude alone and Claude <em>inside</em> MEOK.
        </p>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          Can Claude remember me between sessions?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Claude has a limited memory feature that stores a small number of manually saved
          facts — a sticky-note system, not genuine relationship memory. It does not retain
          your conversational history, emotional patterns, long-term goals, or family
          context. By design, Claude is stateless. MEOK uses a{" "}
          <strong style={{ color: "#f5f0e8" }}>4-layer memory architecture</strong>:
          short-term context (active session), semantic memory (vector-embedded facts via
          Mem0 and pgvector), companion memory (your AI&apos;s evolving model of your
          personality and goals), and family memory (shared household context). All layers
          are encrypted at rest with AES-GCM-256 and owned entirely by you.
        </p>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          What is Byzantine consensus and why does MEOK use it?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Byzantine fault tolerance is a distributed-systems protocol ensuring correct
          decisions even when some nodes are compromised or lie. MEOK applies this to AI
          safety via the{" "}
          <strong style={{ color: "#f5f0e8" }}>Byzantine Council</strong>: every
          significant response passes through independent validation nodes before it
          reaches you. No single model failure, hallucination, or adversarial input can
          propagate unchallenged. Claude has excellent Constitutional AI safety at the
          model level. MEOK adds a second consensus layer above it — not because Claude
          is unsafe, but because a sovereign companion should be architecturally
          fault-tolerant, not just policy-safe.
        </p>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          Is MEOK better than Claude for daily use?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          For ongoing daily use — companionship, emotional support, habit tracking,
          planning, family safety — MEOK is architecturally superior because context
          accumulates and compounds over weeks and months. For a single high-stakes task
          — complex coding, legal document analysis, advanced research — Claude.ai is an
          excellent direct choice. MEOK Sovereign gives you both: the full reasoning
          capability of Claude Sonnet wrapped in the persistent, care-governed companion
          layer that makes long-term use meaningful.
        </p>

        {/* ── Comparison table ── */}
        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          MEOK vs Claude: side-by-side comparison
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          The table below captures the structural differences between using Claude directly
          and using MEOK — including Sovereign tier, which runs Claude Sonnet as its
          reasoning backbone.
        </p>
        <div className="overflow-x-auto -mx-2 mb-8">
          <table className="w-full text-sm border-collapse" style={{ minWidth: 480 }}>
            <thead>
              <tr style={{ background: "rgba(201,168,76,0.10)", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
                <th className="text-left px-4 py-3 text-xs uppercase tracking-wide font-bold" style={{ color: "#c9a84c" }}>Feature</th>
                <th className="text-center px-4 py-3 text-xs uppercase tracking-wide font-bold" style={{ color: "#c9a84c" }}>MEOK Sovereign</th>
                <th className="text-center px-4 py-3 text-xs uppercase tracking-wide font-bold" style={{ color: "rgba(245,240,232,0.42)" }}>Claude.ai</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([feature, meok, claude], i) => (
                <tr
                  key={feature}
                  style={{
                    background:
                      i % 2 === 0
                        ? "rgba(245,240,232,0.03)"
                        : "rgba(245,240,232,0.015)",
                    borderBottom: "1px solid rgba(245,240,232,0.05)",
                  }}
                >
                  <td
                    className="px-4 py-3 font-medium"
                    style={{ color: "rgba(245,240,232,0.75)" }}
                  >
                    {feature}
                  </td>
                  <td
                    className="px-4 py-3 text-center font-semibold"
                    style={{ color: meokColor(meok) }}
                  >
                    {meok}
                  </td>
                  <td
                    className="px-4 py-3 text-center"
                    style={{ color: MUTED }}
                  >
                    {claude}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          Who owns your data in MEOK versus Claude?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          In MEOK your data lives in a sovereign vault that belongs to you — encrypted at
          rest, exportable in full, deletable on demand, never used to train any model
          without explicit consent. MEOK is UK GDPR compliant and ICO registered.
          Claude.ai data is processed on Anthropic&apos;s servers under their privacy
          policy; training opt-out is available but is not the default. The difference is
          not about trust in Anthropic, which is well-earned. It is about structural
          ownership. MEOK makes data sovereignty an architectural guarantee, not a policy
          preference.
        </p>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          What does a &ldquo;bonded companion&rdquo; add that an assistant cannot?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          An AI assistant is a tool you use. An AI companion is an entity that knows you
          — that has accumulated your context, adapted its communication style to yours,
          and becomes more useful the longer you are in relationship with it.
          MEOK&apos;s companion architecture includes a named identity that evolves over
          time, daily check-in routines, the{" "}
          <strong style={{ color: "#f5f0e8" }}>Maternal Covenant</strong> (a care ethics
          layer that detects sycophancy and enforces a care floor), and Guardian mode for
          family safety. This is not about Claude being inadequate. It is about the
          structural difference between a conversation and a relationship.
        </p>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          What are MEOK&apos;s tiers, and how does Claude fit in?
        </h2>
        <p className="mb-4 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          MEOK offers two tiers designed for different stages of commitment. Both include
          the full sovereign memory vault, Maternal Covenant care layer, Byzantine Council
          safety, and Guardian family protection. The difference is the model under the
          hood:
        </p>
        <ul className="mb-5 space-y-2 pl-5" style={{ color: "rgba(245,240,232,0.72)", lineHeight: 1.87, listStyleType: "disc" }}>
          <li>
            <strong style={{ color: "#f5f0e8" }}>Explorer (free forever)</strong> — uses
            DeepSeek as the reasoning engine. Fast, capable, and surprisingly good for
            daily use. Your memory vault starts accumulating immediately. No credit card.
            No expiry.
          </li>
          <li>
            <strong style={{ color: "#f5f0e8" }}>Sovereign</strong> — swaps DeepSeek for
            Claude Sonnet. You get Anthropic&apos;s frontier reasoning — the same model
            powering Claude.ai&apos;s paid tier — plus everything MEOK adds that
            Claude.ai structurally cannot: persistent memory, companion identity, care
            governance, consensus safety, and data sovereignty.
          </li>
        </ul>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          On Sovereign tier, the comparison to Claude.ai is not &ldquo;MEOK or
          Claude.&rdquo; It is &ldquo;Claude alone, or Claude inside a system built for
          long-term relationship.&rdquo; The model is identical. The architecture is
          entirely different.
        </p>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          The right tool for the right job — an honest summary
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Anthropic has built something extraordinary with Claude. Constitutional AI,
          careful RLHF, thoughtful safety research — these are genuine contributions to
          the field and we use them directly. If you need a world-class AI for a single
          session task, Claude.ai is excellent and we would not talk you out of it.
        </p>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          But if you want an AI that remembers you tomorrow, next month, and next year —
          one that governs itself by care ethics, protects your family, stores your data
          in a vault you own, and builds a bonded companion relationship over time — that
          is what MEOK is for. The missions are different. The tools are complementary.
          And on Sovereign tier, you do not have to choose.
        </p>

        <h2 className="text-2xl font-black mt-12 mb-4" style={{ color: "#f5f0e8" }}>
          How do I get started with MEOK if I already use Claude?
        </h2>
        <p className="mb-5 leading-[1.87]" style={{ color: "rgba(245,240,232,0.72)" }}>
          Visit <strong style={{ color: "#f5f0e8" }}>meok.ai/birth</strong> to hatch your
          AI. The process takes under three minutes: name your companion, choose an
          archetype, and your sovereign memory vault is created immediately. The free
          Explorer tier includes the full memory and care architecture running on
          DeepSeek. Upgrade to Sovereign tier to switch the backbone to Claude Sonnet —
          gaining Claude&apos;s full reasoning power wrapped in everything MEOK adds.
          Your vault accumulates from the first message you send, and never stops.
        </p>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <div className="mt-16 mb-10">
          <h2 className="text-2xl font-black mb-7" style={{ color: "#f5f0e8" }}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map(({ name, acceptedAnswer }) => (
              <div
                key={name}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "#f5f0e8" }}
                >
                  {name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.55)" }}
                >
                  {acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Share ── */}
        <div className="flex items-center gap-3 py-8 mb-1" style={{ borderTop: "1px solid rgba(245,240,232,0.07)" }}>
          <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(245,240,232,0.28)" }}>Share</span>
          <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-claude&text=MEOK+vs+Claude%3A+Sovereign+AI+vs+Assistant" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full text-xs font-semibold transition-all hover:opacity-80" style={{ border: "1px solid rgba(245,240,232,0.12)", color: "rgba(245,240,232,0.5)" }}>
            &#120143; Twitter
          </a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-claude" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full text-xs font-semibold transition-all hover:opacity-80" style={{ border: "1px solid rgba(245,240,232,0.12)", color: "rgba(245,240,232,0.5)" }}>
            LinkedIn
          </a>
        </div>

        {/* ── CTA ── */}
        <div className="rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden" style={{ background: "#12112a" }}>
          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 15%, rgba(201,168,76,0.18), transparent 65%)" }} />
          <div className="relative">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-2" style={{ color: "#c9a84c" }}>Sovereign Tier</p>
            <h3 className="text-xl sm:text-2xl font-black mb-3" style={{ color: "#fff" }}>Give Claude a home. Meet MEOK.</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.5)", maxWidth: "34rem" }}>
              Hatch your AI in under three minutes. Sovereign tier gives you Claude Sonnet wrapped in persistent memory, Maternal Covenant care ethics, Byzantine consensus safety, and data you own outright. Start free — upgrade when you&apos;re ready.
            </p>
            <Link href="/birth" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02]" style={{ background: "#c9a84c", color: "#0d0c18" }}>
              Hatch your AI free →
            </Link>
          </div>
        </div>

        {/* ── More posts ── */}
        <div>
          <h2 className="text-lg font-black mb-5" style={{ color: "#f5f0e8" }}>More from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/meok-vs-chatgpt", tag: "Comparison", tc: "#c9a84c", tb: "rgba(201,168,76,0.12)", title: "MEOK vs ChatGPT: Why Memory Changes Everything", read: "6 min" },
              { href: "/blog/what-is-sovereign-ai", tag: "Sovereign AI", tc: "#87ceeb", tb: "rgba(135,206,235,0.10)", title: "What Is Sovereign AI?", read: "5 min" },
              { href: "/blog/byzantine-council-explained", tag: "Safety", tc: "#c9a84c", tb: "rgba(201,168,76,0.12)", title: "The Byzantine Council Explained", read: "5 min" },
              { href: "/blog/the-memory-problem", tag: "Memory", tc: "#87ceeb", tb: "rgba(135,206,235,0.10)", title: "The Memory Problem: Why AI Forgetting You Is a Design Choice", read: "6 min" },
            ].map(({ href, tag, tc, tb, title, read }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col gap-3 p-6 rounded-2xl transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit"
                  style={{ color: tc, background: tb }}
                >
                  {tag}
                </span>
                <span
                  className="text-sm font-bold leading-snug"
                  style={{ color: "rgba(245,240,232,0.82)" }}
                >
                  {title}
                </span>
                <span
                  className="text-xs mt-auto"
                  style={{ color: "rgba(245,240,232,0.28)" }}
                >
                  {read} read
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="px-6 py-14" style={{ background: "#080712", borderTop: "1px solid rgba(245,240,232,0.06)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="font-black text-lg mb-1" style={{ color: "#f5f0e8" }}>MEOK AI LABS</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.32)", maxWidth: 320 }}>
                Sovereign AI companions. Your memory, your data, your companion — permanently yours.
              </p>
            </div>
            <nav className="flex flex-wrap gap-5">
              {([["Blog", "/blog"], ["About", "/about"], ["Privacy", "/privacy"], ["Hatch your AI", "/birth"]] as [string, string][]).map(([label, href]) => (
                <Link key={href} href={href} className="text-xs font-medium transition-opacity hover:opacity-70" style={{ color: "rgba(245,240,232,0.45)" }}>{label}</Link>
              ))}
            </nav>
          </div>
          <div className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(245,240,232,0.05)" }}>
            <p className="text-xs" style={{ color: "rgba(245,240,232,0.22)" }}>&copy; {new Date().getFullYear()} MEOK AI LABS Ltd. All rights reserved.</p>
            <p className="text-xs" style={{ color: "rgba(245,240,232,0.18)" }}>UK GDPR compliant &middot; ICO registered &middot; Built in Britain</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
