"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  FileText,
  Target,
  BarChart2,
  Newspaper,
  Map,
  Moon,
  CheckCircle2,
  Clock,
  TrendingUp,
  AlertTriangle,
  Star,
} from "lucide-react";

/* ─── JSON-LD ─────────────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Orion — The Research Hunter | MEOK AI LABS",
  description:
    "Orion is MEOK's overnight research agent. While you sleep, Orion hunts for leads, competitors, papers, and opportunities. Wake up to a complete intelligence brief.",
  url: "https://meok.ai/work/orion",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── DATA ─────────────────────────────────────────────── */

const CAPABILITIES = [
  { emoji: "🔍", Icon: Search, title: "Competitive intelligence", desc: "Monitors competitor activity, product launches, pricing changes — delivered to your morning brief." },
  { emoji: "📄", Icon: FileText, title: "Research synthesis", desc: "Finds and summarises academic papers, news, and market reports on your topics while you sleep." },
  { emoji: "🎯", Icon: Target, title: "Lead discovery", desc: "Identifies potential customers, partners, and investors matching the criteria you set." },
  { emoji: "📊", Icon: BarChart2, title: "Data aggregation", desc: "Collects structured data from public sources and exports it to your preferred format." },
  { emoji: "📰", Icon: Newspaper, title: "News monitoring", desc: "Tracks keywords, brands, and people across news sources and social signals overnight." },
  { emoji: "🗺️", Icon: Map, title: "Opportunity mapping", desc: "Surfaces market gaps and strategic opportunities in your domain before your competitors spot them." },
];

const NIGHT_TIMELINE = [
  { time: "11:00 PM", label: "You brief Orion", desc: "Set your target before bed — market, competitor, topic, or person. Takes 60 seconds.", color: "text-amber-400", dot: "bg-amber-400" },
  { time: "11:15 PM", label: "Orion plans the hunt", desc: "Decomposes your brief into search queries, source targets, and a verification strategy.", color: "text-amber-300", dot: "bg-amber-300" },
  { time: "12:00 AM", label: "Deep web traversal", desc: "Orion scans news sources, company databases, LinkedIn signals, and public filings.", color: "text-orange-400", dot: "bg-orange-400" },
  { time: "2:00 AM", label: "Cross-referencing", desc: "Every claim verified across multiple sources. Low-confidence data flagged, not included.", color: "text-orange-300", dot: "bg-orange-300" },
  { time: "4:00 AM", label: "Synthesis & scoring", desc: "Results ranked by relevance and signal strength. Noise removed. Signal surfaced.", color: "text-yellow-400", dot: "bg-yellow-400" },
  { time: "6:00 AM", label: "Brief delivered", desc: "Your complete intelligence report is ready — cited, structured, and waiting in your dashboard.", color: "text-[#c9a84c]", dot: "bg-[#c9a84c]" },
];

const SAMPLE_REPORT = {
  title: "Competitor Analysis: AI Productivity Tools — UK Market",
  generated: "Generated 06:03 AM · 14 sources · 98% confidence",
  sections: [
    {
      heading: "Executive Summary",
      icon: Star,
      color: "text-[#c9a84c]",
      content: "Three new entrants entered the UK AI productivity market this quarter. Notion AI expanded UK pricing to match US. Superpower ChatGPT reached 40K UK MAU. Primary opportunity: enterprise compliance gap — none of the top 5 offer UK data residency at under £20/seat.",
    },
    {
      heading: "Competitor Moves",
      icon: TrendingUp,
      color: "text-emerald-400",
      items: [
        { label: "Notion AI", note: "Lowered UK pricing 12% on 15 Mar. Now at £8/mo. Team plan unchanged." },
        { label: "Lex.page", note: "Launched 'Focus Mode' — 47 Product Hunt upvotes. No UK PR push yet." },
        { label: "Perplexity Pro", note: "Added citation export. Growing in academic segment. No enterprise tier." },
      ],
    },
    {
      heading: "Threats Flagged",
      icon: AlertTriangle,
      color: "text-red-400",
      items: [
        { label: "High", note: "Notion AI pricing aggression — could pressure conversion at £12/mo tier." },
        { label: "Medium", note: "Anthropic direct consumer push — 'Claude for Work' brand emerging." },
      ],
    },
    {
      heading: "Opportunities",
      icon: CheckCircle2,
      color: "text-violet-400",
      items: [
        { label: "UK Data Residency", note: "Zero competitors offer this under £20/seat. First-mover window open." },
        { label: "Compliance Personas", note: "Legal & finance teams actively searching — zero AI-native solutions targeting them." },
      ],
    },
  ],
};

/* ─── PAGE ─────────────────────────────────────────────── */

export default function OrionPage() {
  const [assignInput, setAssignInput] = useState("");
  const [assignSubmitted, setAssignSubmitted] = useState(false);

  function handleAssign(e: React.FormEvent) {
    e.preventDefault();
    if (!assignInput.trim()) return;
    setAssignSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-28 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(251,191,36,0.10) 0%, transparent 65%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <Link href="/work" className="inline-flex items-center gap-2 text-xs font-semibold text-white/35 hover:text-amber-400 transition-colors mb-10">
            ← Work OS
          </Link>

          <div className="block mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-black tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Agent 01 · Running overnight
            </div>
          </div>

          <div className="text-7xl sm:text-8xl mb-6">🔭</div>

          <h1 className="font-black text-white leading-[1.02] mb-4 text-5xl sm:text-7xl tracking-tight">
            Orion
          </h1>
          <p className="text-2xl sm:text-3xl font-black text-amber-400 mb-6">The Hunter</p>

          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            While you sleep, Orion traverses the web, cross-references intelligence, and builds you a complete research brief. You brief once. You wake up informed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm shadow-lg shadow-amber-900/20"
            >
              Activate Orion tonight
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/work" className="text-sm text-white/35 hover:text-white/60 transition-colors font-semibold">
              See all agents →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT ORION DOES ──────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              What Orion does while you sleep
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map(({ emoji, title, desc }) => (
              <div key={title} className="rounded-2xl bg-[#0d0c18] border border-amber-500/10 p-7 hover:border-amber-500/25 transition-colors">
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="font-black text-white text-base mb-3">{title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NIGHT TIMELINE ───────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              A night with Orion
            </h2>
            <p className="text-white/40 text-base mt-4 max-w-xl mx-auto">
              From your bedtime brief to your 6am intelligence report — here&apos;s what happens while you sleep.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/30 via-amber-500/15 to-transparent" aria-hidden />

            <div className="space-y-0">
              {NIGHT_TIMELINE.map((item, i) => (
                <div key={item.time} className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} items-start sm:items-center`}>
                  {/* Content block */}
                  <div className={`pl-16 sm:pl-0 flex-1 pb-10 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <div className={`inline-block px-3 py-1 rounded-full bg-[#1a1a2e] border border-white/10 text-[10px] font-black tracking-[0.15em] uppercase ${item.color} mb-3`}>
                      {item.time}
                    </div>
                    <h3 className="font-black text-white text-base mb-1">{item.label}</h3>
                    <p className="text-sm text-white/40 leading-relaxed max-w-xs sm:max-w-sm inline-block">{item.desc}</p>
                  </div>

                  {/* Dot on the line */}
                  <div className="absolute left-[18px] sm:left-1/2 sm:-translate-x-1/2 top-1 sm:top-auto flex-shrink-0">
                    <div className={`w-5 h-5 rounded-full border-2 border-[#0d0c18] ${item.dot} shadow-lg`} />
                  </div>

                  {/* Empty opposite side on desktop */}
                  <div className="hidden sm:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SAMPLE REPORT ────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">Sample output</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              This is what Orion delivers
            </h2>
            <p className="text-white/40 text-base mt-4 max-w-xl mx-auto">
              A real competitor analysis brief — structured, cited, and ready to act on.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-500/20 bg-[#0d0c18] overflow-hidden">
            {/* Report header */}
            <div className="border-b border-amber-500/15 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Moon className="w-4 h-4 text-amber-400/60" />
                  <span className="text-xs font-black tracking-[0.15em] uppercase text-amber-400/60">Orion Intelligence Brief</span>
                </div>
                <h3 className="font-black text-white text-lg">{SAMPLE_REPORT.title}</h3>
              </div>
              <div className="flex-shrink-0 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-[0.12em]">
                ✓ {SAMPLE_REPORT.generated}
              </div>
            </div>

            {/* Report sections */}
            <div className="divide-y divide-white/[0.05]">
              {SAMPLE_REPORT.sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.heading} className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <Icon className={`w-4 h-4 ${section.color}`} />
                      <h4 className={`font-black text-sm tracking-wide uppercase ${section.color}`}>{section.heading}</h4>
                    </div>
                    {"content" in section ? (
                      <p className="text-sm text-white/55 leading-relaxed">{section.content}</p>
                    ) : (
                      <div className="space-y-3">
                        {section.items?.map((item) => (
                          <div key={item.label} className="flex items-start gap-3">
                            <span className="flex-shrink-0 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-black text-white/50 uppercase tracking-wider mt-0.5">{item.label}</span>
                            <p className="text-sm text-white/50 leading-relaxed">{item.note}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="border-t border-amber-500/10 px-8 py-4 bg-amber-500/[0.03]">
              <p className="text-xs text-white/25 font-mono">
                This is a sample brief. Your actual Orion reports include live citations, confidence scores, and source links.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ASSIGN ORION ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-3xl mx-auto mb-8">
            🔭
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Assign Orion a task tonight.
          </h2>
          <p className="text-white/40 text-base mb-10 leading-relaxed">
            Tell Orion what to hunt — a competitor, a market, a person, a topic. He runs tonight. You wake up to the brief.
          </p>

          {!assignSubmitted ? (
            <form onSubmit={handleAssign} className="space-y-4">
              <div className="relative">
                <textarea
                  value={assignInput}
                  onChange={(e) => setAssignInput(e.target.value)}
                  placeholder="e.g. &quot;Analyse the top 5 AI note-taking apps in the UK — pricing, features, and recent product updates&quot;"
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-[#1a1a2e] border border-amber-500/20 text-white placeholder-white/25 text-sm focus:outline-none focus:border-amber-500/50 transition-colors resize-none leading-relaxed"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={!assignInput.trim()}
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm w-full sm:w-auto justify-center"
                >
                  <Moon className="w-4 h-4" />
                  Brief Orion for tonight
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-white/25 font-mono">Requires Sovereign tier · £12/mo</p>
              </div>
            </form>
          ) : (
            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-8 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-black text-white text-lg mb-2">Orion is briefed.</h3>
              <p className="text-white/50 text-sm mb-6">Your intelligence brief will be ready by 6am. Check your dashboard in the morning.</p>
              <Link href="/hatch" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm">
                Activate full Orion access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ─── GEO H2s ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">What is Orion in MEOK AI?</h2>
            <p className="text-white/55 text-base leading-relaxed">
              Orion is MEOK&apos;s overnight research agent — a specialist that runs your research brief during your sleep window and delivers a structured morning brief at 6am. You set goals before bed: competitors to monitor, topics to cover, leads to find. Orion hunts them autonomously and returns every morning with sourced, cited results ready for review.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">How does Orion find and verify intelligence?</h2>
            <p className="text-white/55 text-base leading-relaxed">
              Orion combines web search, structured data extraction, and semantic similarity to surface the most relevant results for your stated goals. It queries across multiple sources in parallel, scores results for relevance and credibility, cross-references every claim, and synthesises findings into a structured brief — so every morning delivery is signal, not noise.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">Which tier unlocks Orion?</h2>
            <p className="text-white/55 text-base leading-relaxed">
              Orion is available on the Sovereign tier at £12/mo. Orion, Riri, and Hourman are all included — no per-task fees, no add-ons. One subscription activates all three overnight agents plus your Morning Brief.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#0d0c18] text-center relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Clock className="w-4 h-4 text-amber-400/50" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-white/25">Other agents</span>
          </div>
          <p className="text-white/40 text-sm mb-8">Orion works alongside Riri and Hourman. All three share your sovereign memory.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/work/riri" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-white border border-cyan-500/25 hover:border-cyan-500/50 bg-cyan-500/[0.05] hover:bg-cyan-500/[0.08] transition-all text-sm">
              ⚡ Meet Riri <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/work/hourman" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-white border border-violet-500/25 hover:border-violet-500/50 bg-violet-500/[0.05] hover:bg-violet-500/[0.08] transition-all text-sm">
              ⏱ Meet Hourman <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/work/ralph" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm">
              🧠 Ralph Mode <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
