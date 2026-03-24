import Link from "next/link";
import { ArrowRight, Search, FileText, Target, BarChart2, Newspaper, Map } from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────── */

const CAPABILITIES = [
  {
    emoji: "🔍",
    Icon: Search,
    title: "Competitive intelligence",
    desc: "Monitors competitor activity, product launches, pricing changes overnight — delivered to your morning brief.",
  },
  {
    emoji: "📄",
    Icon: FileText,
    title: "Research synthesis",
    desc: "Finds and summarises academic papers, news, and market reports on your topics while you sleep.",
  },
  {
    emoji: "🎯",
    Icon: Target,
    title: "Lead discovery",
    desc: "Identifies potential customers, partners, and investors matching the criteria you set.",
  },
  {
    emoji: "📊",
    Icon: BarChart2,
    title: "Data aggregation",
    desc: "Collects structured data from public sources and exports it to your preferred format.",
  },
  {
    emoji: "📰",
    Icon: Newspaper,
    title: "News monitoring",
    desc: "Tracks keywords, brands, and people across news sources and social signals overnight.",
  },
  {
    emoji: "🗺️",
    Icon: Map,
    title: "Opportunity mapping",
    desc: "Surfaces market gaps and strategic opportunities in your domain before your competitors spot them.",
  },
];

const HOW_IT_WORKS = [
  { step: "01", label: "Set goals", desc: "Tell Orion what to hunt — competitors, topics, leads, keywords." },
  { step: "02", label: "Orion hunts overnight", desc: "Orion runs your research brief while you sleep, across web, data, and news." },
  { step: "03", label: "Results ready at 07:00", desc: "Every morning at 07:00, your hunt results are compiled and structured." },
  { step: "04", label: "Morning Brief delivered", desc: "Open your Morning Brief to find everything Orion found, cited and summarised." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Orion — The Research Hunter | MEOK AI LABS",
  description:
    "Orion is MEOK's overnight research agent. While you sleep, Orion hunts for leads, competitors, papers, and opportunities.",
  url: "https://meok.ai/work/orion",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── PAGE ─────────────────────────────────────────────── */

export default function OrionPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/40 hover:text-[#d4af37] transition-colors mb-8"
          >
            ← Work OS
          </Link>

          <div className="block mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              Work OS · Agent
            </div>
          </div>

          <h1
            className="font-black text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Orion — The Research Hunter
          </h1>

          <p className="text-[#d4af37] text-xl font-semibold mb-6">
            While you sleep, Orion hunts.
          </p>

          <p className="text-white/55 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Orion is your overnight research agent. Set your goals before bed — competitors,
            markets, leads, papers — and wake up to a complete brief, fully cited, ready to act on.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/birth"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#0a0a0a] bg-[#d4af37] hover:bg-[#b8963e] transition-all text-sm shadow-lg"
              aria-label="Start your free trial and access Orion"
            >
              Start free trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="text-sm text-white/40 hover:text-white/70 transition-colors font-medium"
            >
              See all Work OS agents →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT ORION DOES ──────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37]/60 block mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              What Orion does while you sleep
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-[#1a1a1a] border border-white/[0.07] p-7 hover:border-[#d4af37]/20 transition-colors"
              >
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="font-black text-white text-base mb-3">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GEO H2s ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
              What is Orion in MEOK AI?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Orion is MEOK&apos;s overnight research agent — a specialist that runs your research
              brief during your sleep window and delivers a structured morning brief at 07:00. You
              set goals before bed: competitors to monitor, topics to cover, leads to find. Orion
              hunts them autonomously and returns every morning with sourced, cited results ready
              for review.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
              How does Orion find research leads?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Orion combines web search, structured data extraction, and semantic similarity to
              surface the most relevant results for your stated goals. It queries across multiple
              sources in parallel, scores results for relevance and credibility, and synthesises
              findings into a structured brief — so every morning delivery is signal, not noise.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
              Which tier unlocks Orion?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Orion is available on the Sovereign tier at £12/mo. Orion, Riri, and Hourman are all
              included — no per-task fees, no add-ons. One subscription activates all three
              overnight agents plus your Morning Brief.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOW ORION WORKS ──────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37]/60 block mb-4">
              How it works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Set it. Sleep. Wake up informed.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map(({ step, label, desc }) => (
              <div
                key={step}
                className="rounded-2xl bg-[#1a1a1a] border border-white/[0.07] p-6"
              >
                <div className="text-[#d4af37] text-xs font-black tracking-widest uppercase mb-3">
                  {step}
                </div>
                <h3 className="font-black text-white text-base mb-3">{label}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0a0a0a] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Set Orion to work tonight.
          </h2>
          <p className="text-white/45 max-w-md mx-auto mb-10 leading-relaxed">
            Wake up to a complete research brief. No tab hunting. No manual synthesis.
            Everything Orion found, cited and ready.
          </p>
          <Link
            href="/ralph"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#0a0a0a] bg-[#d4af37] hover:bg-[#b8963e] transition-all text-base shadow-xl"
            aria-label="Open Ralph Mode to configure Orion"
          >
            Set Orion to work tonight
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-5 text-xs text-white/25 font-mono">
            Sovereign tier · £12/mo · Orion + Riri + Hourman included
          </p>
        </div>
      </section>

    </div>
  );
}
