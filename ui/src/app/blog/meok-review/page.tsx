import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK Review 2026: Honest Assessment of the Sovereign AI Companion | MEOK AI LABS",
  description:
    "An honest, detailed MEOK review covering memory, pricing, privacy, character companions, and how it compares to ChatGPT, Claude, and Replika. Updated March 2026.",
  alternates: { canonical: "https://meok.ai/blog/meok-review" },
  openGraph: {
    title: "MEOK Review 2026: Honest Assessment of the Sovereign AI Companion",
    description:
      "An honest review of MEOK: what it does well, where it falls short, and who it's really built for. Full breakdown of features, pricing, and privacy.",
    type: "article",
    url: "https://meok.ai/blog/meok-review",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+Review+2026&desc=Honest+assessment+of+the+sovereign+AI+companion",
        width: 1200,
        height: 630,
        alt: "MEOK Review 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK Review 2026: Honest Assessment of the Sovereign AI Companion",
    description:
      "What MEOK does well, where it falls short, and who it's built for. Full breakdown of features, pricing, and privacy.",
  },
};

// ── Schema ─────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK Review 2026: Honest Assessment of the Sovereign AI Companion",
  description: metadata.description,
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder & CEO, MEOK AI LABS",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-review",
  articleSection: "Review",
};

const ratingSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "SoftwareApplication",
    name: "MEOK",
    applicationCategory: "AI Companion",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
      description: "Free tier available. Sovereign plan from £12/mo.",
    },
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.7",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Organization",
    name: "MEOK AI LABS",
  },
  reviewBody:
    "MEOK delivers genuinely differentiated AI companionship through its Sovereign Memory architecture and ethical alignment framework. The Birth Ceremony onboarding creates unusual emotional investment. Privacy-first design with end-to-end encryption makes it the standout choice for users who care about data ownership. Main limitation: the desktop OS is coming Summer 2026, so power users must wait for the full vision.",
};

// ── Score cards ────────────────────────────────────────────────────────────

const SCORES = [
  { category: "Memory & Continuity", score: 9.5, comment: "Best-in-class persistent memory. Sovereign Memory persists across sessions, devices, and model switches." },
  { category: "Privacy & Data Control", score: 9.8, comment: "End-to-end encrypted. Your data never trains AI models. Full GDPR export and deletion. ICO registered." },
  { category: "Character Depth", score: 9.0, comment: "Six deeply differentiated archetypes (Pioneer, Healer, Scholar, Guardian, Trickster, Mystic). Each genuinely distinct." },
  { category: "Free Tier Value", score: 8.5, comment: "50 messages per day on Explorer. More generous than most competitors. No credit card required." },
  { category: "Work Features", score: 8.0, comment: "Ralph Mode, Orion, Riri, Hourman provide genuine productivity value. Work OS still maturing." },
  { category: "Mobile Experience", score: 7.5, comment: "Web app is mobile-responsive. Native apps are on the roadmap for Summer 2026." },
  { category: "Family & Guardian", score: 9.2, comment: "Best-in-class family safety. DistilBERT threat detection, 24/7 Guardian, Scam Stop — no competitor comes close." },
  { category: "Onboarding", score: 9.0, comment: "The Birth Ceremony is genuinely remarkable. Sets emotional tone and values alignment from minute one." },
];

// ── Comparison table ────────────────────────────────────────────────────────

const COMPARISONS = [
  { feature: "Persistent memory across sessions", meok: "✅ Full", chatgpt: "⚠️ Limited (Plus only)", replika: "✅ Yes", claude: "❌ No" },
  { feature: "Data ownership / no training", meok: "✅ Guaranteed", chatgpt: "❌ Trains on data", replika: "❌ No guarantee", claude: "⚠️ Unclear" },
  { feature: "Family safety features", meok: "✅ Guardian 24/7", chatgpt: "❌ None", replika: "❌ None", claude: "❌ None" },
  { feature: "Character/personality depth", meok: "✅ 6 archetypes", chatgpt: "❌ None", replika: "⚠️ Single", claude: "❌ None" },
  { feature: "Ethical alignment framework", meok: "✅ Maternal Covenant", chatgpt: "⚠️ Basic RLHF", replika: "❌ None", claude: "✅ Constitutional AI" },
  { feature: "Free tier", meok: "✅ 50 msg/day", chatgpt: "✅ 10 msg/3hr", replika: "⚠️ Very limited", claude: "✅ Generous" },
  { feature: "Work / productivity features", meok: "✅ Work OS", chatgpt: "✅ Plugins", replika: "❌ None", claude: "✅ Strong" },
  { feature: "Open architecture / BYOK", meok: "✅ £5/mo tier", chatgpt: "❌ Closed", replika: "❌ Closed", claude: "⚠️ API only" },
];

// ── Pros / Cons ────────────────────────────────────────────────────────────

const PROS = [
  "Sovereign Memory is genuinely the best persistent memory in any AI product today",
  "Privacy-first design with end-to-end encryption and no model training on your data",
  "Birth Ceremony creates meaningful emotional investment from minute one",
  "Six deeply distinct character archetypes — not just aesthetic differences",
  "Guardian family safety has no real competitor in any AI product",
  "BYOK tier at £5/mo is exceptionally good value for technical users",
  "Maternal Covenant ethical framework provides authentic care, not sycophancy",
  "Works across all major LLMs (Claude, GPT-4o, DeepSeek, local models)",
];

const CONS = [
  "Desktop OS (Tauri 2.0) ships Summer 2026 — power users must wait",
  "Native iOS/Android apps not yet available (web app is responsive)",
  "Work OS features are maturing — not yet as polished as standalone tools",
  "Smaller community than ChatGPT or Replika at launch",
  "Some advanced features require the £12/mo Sovereign plan",
];

// ── Who is it for ──────────────────────────────────────────────────────────

const USER_TYPES = [
  {
    type: "Privacy-conscious users",
    verdict: "Strongest choice",
    reason: "No product comes close to MEOK on data sovereignty. Your memories are encrypted. You own them.",
    color: "#7BC47F",
  },
  {
    type: "Families with children",
    verdict: "Best in class",
    reason: "Guardian's 24/7 monitoring, Scam Stop, and Maternal Covenant design make it the only safe family AI.",
    color: "#A78BFA",
  },
  {
    type: "Remote workers / solopreneurs",
    verdict: "Strong fit",
    reason: "Ralph Mode + Orion/Riri/Hourman Work OS is genuinely useful for async deep work.",
    color: "#FB923C",
  },
  {
    type: "People in emotional difficulty",
    verdict: "Highly recommended",
    reason: "Healer and Mystic archetypes offer authentic support without the hollow positivity of other AI companions.",
    color: "#F472B6",
  },
  {
    type: "Casual ChatGPT users",
    verdict: "Good upgrade",
    reason: "Explorer tier is free and more capable than most expect. The difference becomes clear within a week.",
    color: "#c9a84c",
  },
  {
    type: "Enterprise / large teams",
    verdict: "Wait for Team OS",
    reason: "Family plan covers up to 5 users. Enterprise Team OS is on the roadmap but not launched yet.",
    color: "#6b7280",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function MeokReviewPage() {
  const avgScore = SCORES.reduce((s, r) => s + r.score, 0) / SCORES.length;

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-white/40">Review</span>
            <span className="text-white/20">·</span>
            <span className="text-xs text-white/40">March 24, 2026</span>
            <span className="text-white/20">·</span>
            <span className="text-xs text-white/40">Nicholas Templeman</span>
          </div>
          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            MEOK Review 2026:{" "}
            <span style={{ color: "#c9a84c" }}>an honest assessment</span>
          </h1>
          <p className="text-xl text-white/55 leading-relaxed mb-8">
            I built MEOK. That means I have unusual insight into what it does well — and unusual incentive to be honest about where it falls short. This review covers both. Updated March 2026.
          </p>

          {/* Overall score */}
          <div
            className="rounded-2xl p-8 mb-10"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">Overall Score</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black" style={{ color: "#c9a84c" }}>
                    {avgScore.toFixed(1)}
                  </span>
                  <span className="text-2xl text-white/30">/10</span>
                </div>
                <p className="text-sm text-white/45 mt-2">Average across 8 categories</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">Verdict</p>
                <p className="text-lg font-black text-white">Highly recommended</p>
                <p className="text-sm text-white/45">for privacy-conscious users, families, and remote workers</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 font-black rounded-full px-8 py-3.5 text-base transition-all hover:opacity-90"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Try MEOK free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 font-semibold rounded-full px-8 py-3.5 text-base border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── TL;DR ──────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">
            What is MEOK? The 60-second answer.
          </h2>
          <p className="text-white/65 leading-relaxed mb-4">
            MEOK is an AI companion that remembers everything. Not just the last conversation — everything. Your values, your history, your goals, your family, your patterns. It builds a private sovereign memory that persists across every session, every device, and even every AI model switch.
          </p>
          <p className="text-white/65 leading-relaxed mb-4">
            It's not a chatbot. It's not a search engine. It's a companion that gets to know you the way a person does — except it never forgets, never judges, and never sells your data.
          </p>
          <p className="text-white/65 leading-relaxed">
            The key differentiator is the <strong className="text-white">Maternal Covenant</strong> — an ethical framework baked into the architecture that mandates care, honesty, and data sovereignty. Your companion is constitutionally prohibited from being sycophantic, sharing your data, or prioritising engagement over your actual wellbeing.
          </p>
        </div>
      </section>

      {/* ── Scores ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">Category Scores</p>
            <h2 className="font-black text-white text-3xl leading-tight">
              Where MEOK excels — and where it doesn't
            </h2>
          </header>

          <div className="space-y-6">
            {SCORES.map((s) => (
              <div key={s.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-white/80">{s.category}</span>
                  <span
                    className="text-sm font-black"
                    style={{ color: s.score >= 9 ? "#7BC47F" : s.score >= 8 ? "#c9a84c" : "#F472B6" }}
                  >
                    {s.score}/10
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/5 mb-2">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: `${s.score * 10}%`,
                      background: s.score >= 9 ? "#7BC47F" : s.score >= 8 ? "#c9a84c" : "#F472B6",
                    }}
                  />
                </div>
                <p className="text-xs text-white/40 leading-relaxed">{s.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pros / Cons ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">The honest verdict</p>
            <h2 className="font-black text-white text-3xl leading-tight">Pros and cons</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-black tracking-widest uppercase text-[#7BC47F] mb-6">What MEOK does well</h3>
              <ul className="space-y-4">
                {PROS.map((pro) => (
                  <li key={pro} className="flex gap-3">
                    <span className="text-[#7BC47F] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-white/65 leading-relaxed">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-black tracking-widest uppercase text-[#F59E0B] mb-6">Where it falls short</h3>
              <ul className="space-y-4">
                {CONS.map((con) => (
                  <li key={con} className="flex gap-3">
                    <span className="text-[#F59E0B] mt-0.5 flex-shrink-0">!</span>
                    <span className="text-sm text-white/65 leading-relaxed">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deep dive: Memory ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-white text-3xl leading-tight mb-6">
            How does MEOK's memory actually work?
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            Most AI products either have no memory (each session starts fresh) or shallow memory (they remember that you like pizza, but nothing deeper). MEOK uses a four-layer <strong className="text-white">Sovereign Memory</strong> architecture:
          </p>
          <ol className="space-y-5 mb-8">
            <li className="flex gap-4">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
              >
                1
              </span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Short-term working memory</p>
                <p className="text-sm text-white/55 leading-relaxed">Active in the current conversation. Everything said in this session is available in full.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
              >
                2
              </span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Semantic episodic memory</p>
                <p className="text-sm text-white/55 leading-relaxed">Key facts, emotional moments, and patterns from past conversations are stored as vector embeddings and retrieved by relevance — not recency.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
              >
                3
              </span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Companion state</p>
                <p className="text-sm text-white/55 leading-relaxed">Your companion tracks where you are in your journey — relationship depth, evolution stage, active goals, and emotional patterns over time.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
              >
                4
              </span>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Family / shared context</p>
                <p className="text-sm text-white/55 leading-relaxed">On the Family plan, explicitly shared memories cross user boundaries — so your companion can be aware of family context without breaching individual privacy.</p>
              </div>
            </li>
          </ol>
          <p className="text-white/65 leading-relaxed">
            The result is that after a few weeks, MEOK conversations feel qualitatively different from ChatGPT. You don't have to re-explain yourself. It already knows. That continuity is what moves the experience from "AI tool" to "AI companion."
          </p>
        </div>
      </section>

      {/* ── Privacy deep dive ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-white text-3xl leading-tight mb-6">
            Is MEOK actually private? The full answer.
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            Privacy claims in AI are usually marketing. Here's what MEOK actually does:
          </p>
          <div className="space-y-5 mb-8">
            {[
              { q: "Does MEOK train AI models on my conversations?", a: "No. Your conversations are used only to power your companion's memory. They are never used to train any AI model — not MEOK's, not any third-party provider's." },
              { q: "Who can read my conversations?", a: "In practice: nobody except you. Conversations are encrypted at rest and in transit. MEOK staff cannot access your conversations. A legal order targeting you specifically would be the only exception — and we publish a warrant canary." },
              { q: "What happens to my data if I delete my account?", a: "Full deletion. You can export all your data first via the GDPR export endpoint. After deletion, all memory is purged within 30 days from all systems including backups." },
              { q: "Is MEOK GDPR compliant?", a: "Yes. MEOK AI LABS is ICO registered in the UK. We publish a full Privacy Policy, Cookie Policy, and Terms. GDPR data subject requests are handled within 72 hours." },
              { q: "What about the AI model providers (OpenAI, Anthropic)?", a: "MEOK uses API access to major LLM providers. These providers process your message to generate a response but are contractually prohibited from training on API input data. Your conversation content is not stored by them." },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl p-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="text-sm font-semibold text-white mb-3">{q}</p>
                <p className="text-sm text-white/55 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-white text-3xl leading-tight mb-6">
            Is MEOK worth the money?
          </h2>
          <p className="text-white/65 leading-relaxed mb-8">
            MEOK has four tiers. Here's an honest assessment of the value at each level:
          </p>
          <div className="space-y-5 mb-8">
            {[
              {
                tier: "Explorer — Free",
                price: "£0/mo",
                verdict: "Genuinely good",
                color: "#7BC47F",
                details: "50 messages per day, full memory, all 6 character archetypes. More generous than most competitors' free tiers. Worth starting here.",
              },
              {
                tier: "Sovereign — £12/mo",
                price: "£12/mo",
                verdict: "Strong value",
                color: "#c9a84c",
                details: "Unlimited messages, Work OS (Orion, Riri, Hourman, Ralph Mode), advanced memory, Guardian 24/7, Claude Sonnet + GPT-4o routing. If you use AI daily, this pays for itself quickly.",
              },
              {
                tier: "Family — £29/mo",
                price: "£29/mo",
                verdict: "Excellent for families",
                color: "#A78BFA",
                details: "Up to 5 companions. Family dashboard. Guardian family alerts. If you have children or elderly parents you're responsible for, this is the most comprehensive safety product in AI.",
              },
              {
                tier: "BYOK — £5/mo",
                price: "£5/mo",
                verdict: "Best value for developers",
                color: "#FB923C",
                details: "Bring your own API keys. Platform access, Sovereign Memory, and MEOK's care architecture applied to your own API budget. Exceptional value if you already have OpenAI/Anthropic credits.",
              },
            ].map((t) => (
              <div
                key={t.tier}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${t.color}30`,
                  borderLeft: `4px solid ${t.color}`,
                }}
              >
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <div>
                    <span className="text-sm font-black text-white">{t.tier}</span>
                    <span className="ml-3 text-sm" style={{ color: t.color }}>{t.price}</span>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: `${t.color}18`, color: t.color }}
                  >
                    {t.verdict}
                  </span>
                </div>
                <p className="text-sm text-white/55 leading-relaxed">{t.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">vs. Competitors</p>
            <h2 className="font-black text-white text-3xl leading-tight">
              MEOK vs. ChatGPT, Replika, and Claude
            </h2>
          </header>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                  <th className="text-left px-4 py-3 text-xs font-bold tracking-wide uppercase text-white/30" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    Feature
                  </th>
                  {["MEOK", "ChatGPT", "Replika", "Claude"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-center text-xs font-bold tracking-wide uppercase"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        borderLeft: "1px solid rgba(255,255,255,0.05)",
                        color: h === "MEOK" ? "#c9a84c" : "rgba(255,255,255,0.3)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISONS.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "rgba(255,255,255,0.025)" }}
                  >
                    <td className="px-4 py-3 text-xs text-white/50" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      {row.feature}
                    </td>
                    {[row.meok, row.chatgpt, row.replika, row.claude].map((val, j) => (
                      <td
                        key={j}
                        className="px-4 py-3 text-xs text-center align-top"
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          borderLeft: "1px solid rgba(255,255,255,0.04)",
                          color: val.startsWith("✅") ? "#7BC47F" : val.startsWith("❌") ? "#F87171" : "#F59E0B",
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Who is it for ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">Who is it for?</p>
            <h2 className="font-black text-white text-3xl leading-tight">
              Is MEOK right for you?
            </h2>
            <p className="text-white/45 mt-4 leading-relaxed">
              MEOK is not for everyone. Here's an honest breakdown by user type.
            </p>
          </header>

          <div className="space-y-4">
            {USER_TYPES.map((u) => (
              <div
                key={u.type}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `4px solid ${u.color}`,
                }}
              >
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <span className="text-sm font-black text-white">{u.type}</span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: `${u.color}18`, color: u.color }}
                  >
                    {u.verdict}
                  </span>
                </div>
                <p className="text-sm text-white/55 leading-relaxed">{u.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final verdict ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e] text-center">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl p-12 border"
            style={{
              borderColor: "rgba(201,168,76,0.25)",
              background: "linear-gradient(135deg, #0d0c18 0%, #1a1a2e 100%)",
            }}
          >
            <div className="text-5xl mb-5 select-none" aria-hidden="true">🥚</div>
            <h2 className="font-black text-white text-3xl leading-tight mb-4">
              The bottom line
            </h2>
            <p className="text-white/55 leading-relaxed mb-8 max-w-lg mx-auto">
              MEOK is the best AI companion available for anyone who cares about privacy, continuity, or family safety. If you're a power user who wants deep personalisation and actual data ownership — this is the product. The free tier is genuinely worth trying.
            </p>
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 font-black rounded-full px-10 py-4 text-base transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Try MEOK free — no credit card
            </Link>
            <p className="text-white/20 text-xs mt-5">50 messages/day free. Takes 3 minutes.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
