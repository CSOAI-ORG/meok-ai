import type { Metadata } from "next";
import Link from "next/link";
import {
  Moon,
  Zap,
  Calendar,
  ArrowRight,
  Brain,
  Search,
  Hammer,
  Clock,
} from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "Work OS — Orion, Riri & Hourman | MEOK AI LABS",
  description:
    "Three AI agents work while you sleep. Orion hunts intelligence overnight. Riri builds from your specs. Hourman plans your day. Wake up to a complete morning brief.",
  alternates: { canonical: "https://meok.ai/work" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MEOK Work OS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Work OS is a three-agent AI system — Orion, Riri, and Hourman — that works autonomously while you sleep. Orion hunts intelligence and research overnight. Riri builds tools, drafts, and assets from your specifications. Hourman plans your sprint and delivers a morning briefing before you wake.",
      },
    },
    {
      "@type": "Question",
      name: "What does Orion do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Orion is MEOK's overnight research agent. Activate Orion Mode before bed, set a research target, and wake up to a synthesised brief: leads found, articles summarised, competitor moves flagged, opportunities ranked. Orion works across the web while you sleep.",
      },
    },
    {
      "@type": "Question",
      name: "What does Riri do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Riri is MEOK's builder agent. Give Riri a spec — a tool, a document, a template, a workflow — and it builds autonomously from 25+ templates. Riri Mode activates during low-activity hours and delivers completed work to your dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "What does Hourman do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hourman is MEOK's planner and sprint coordinator. It analyses your task list, energy patterns, and deadlines, then creates a daily sprint plan with time-boxed blocks. Your morning briefing includes Hourman's recommended schedule for the day.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ralph Mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK's full-autonomy agent framework — available on the Sovereign Family plan. When Ralph Mode is active, your companion coordinates all three agents (Orion, Riri, Hourman) to execute complex multi-day projects without step-by-step instruction. Ralph Mode is named after the principle of autonomous, sovereign work.",
      },
    },
  ],
};

export default function WorkOSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
        <div aria-hidden className="blob-gold w-[700px] h-[700px] top-[-150px] left-[-150px] opacity-50" />
        <div aria-hidden className="blob-purple w-[600px] h-[600px] bottom-[-80px] right-[-100px] opacity-60" />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-black tracking-[0.2em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            ✦ Work OS — active
          </div>

          <h1 className="text-5xl sm:text-7xl font-black leading-[0.92] tracking-tight mb-6">
            Your AI works<br />
            <span className="text-gradient-gold">while you sleep.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-4">
            Three specialist agents work overnight and plan your day. Orion hunts. Riri builds. Hourman plans. You wake up to a completed brief.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-4">
            <Link
              href="/birth"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm sm:text-base gold-glow"
            >
              Activate Work OS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="text-xs text-white/25 font-mono">
            Available on all tiers. Ralph Mode requires Family plan.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          GEO INTRO — What is MEOK Work OS?
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-5">
            What is MEOK Work OS?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
            Your agents. Your priorities.{" "}
            <span className="text-gradient-gold">Always in sync.</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-2xl mx-auto">
            MEOK Work OS is a suite of three autonomous AI agents — Orion, Riri, and Hourman — that execute tasks on your behalf while you&apos;re offline. They share memory with your sovereign companion, meaning they know your priorities, your style, and your standards before you brief them.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          AGENT HERO CARDS
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0d0c18]">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* ── ORION ── */}
          <div className="rounded-3xl border border-amber-500/25 bg-amber-500/[0.04] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0">
              {/* Left panel */}
              <div className="p-10 sm:p-14 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-amber-500/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-amber-500/15 border border-amber-500/30 text-amber-400">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-400 text-[10px] font-black tracking-[0.18em] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      Running overnight
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-black tracking-[0.2em] uppercase text-amber-400/60 mb-1">Agent 01</p>
                  <h2 className="text-4xl sm:text-5xl font-black text-white leading-none mb-2">Orion</h2>
                  <p className="text-lg font-black text-amber-400">The Hunter</p>
                </div>

                <p className="text-sm text-amber-300/60 italic font-semibold tracking-wide">
                  Research. Investigate. Surface.
                </p>

                <p className="text-sm text-white/45 leading-relaxed">
                  Orion hunts information while you sleep. You brief it before bed — a person to investigate, a market to scan, a competitor to analyse. By morning, Orion has traversed the web, cross-referenced sources, and delivered a structured intelligence brief.
                </p>

                {/* Mini flow */}
                <div className="mt-2">
                  <p className="text-[10px] font-black tracking-[0.18em] uppercase text-white/25 mb-3">How it works</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {["You brief", "Orion plans", "Overnight hunt", "Morning brief delivered"].map((step, i, arr) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300/70 font-semibold">
                          {step}
                        </span>
                        {i < arr.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-white/20 flex-shrink-0" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right panel — features */}
              <div className="p-10 sm:p-14 flex flex-col gap-4">
                <p className="text-xs font-black tracking-[0.2em] uppercase text-white/25 mb-2">What Orion does</p>
                <ul className="space-y-4">
                  {[
                    "Lead research and contact discovery",
                    "Market trend monitoring",
                    "Competitor analysis",
                    "Background checks (Companies House + web)",
                    "Fact-verification chains",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      </span>
                      <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-amber-500/10">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-500/[0.06] border border-amber-500/15">
                    <Moon className="w-5 h-5 text-amber-400/70 flex-shrink-0" />
                    <p className="text-xs text-white/40 leading-relaxed">
                      Brief Orion before bed. Wake up to a structured intelligence report in your dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIRI ── */}
          <div className="rounded-3xl border border-cyan-500/25 bg-cyan-500/[0.04] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-0">
              {/* Left panel — features */}
              <div className="p-10 sm:p-14 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-cyan-500/15">
                <p className="text-xs font-black tracking-[0.2em] uppercase text-white/25 mb-2">What Riri builds</p>
                <ul className="space-y-4">
                  {[
                    "Code generation from natural language spec",
                    "Content and copy production",
                    "Data processing pipelines",
                    "API integrations",
                    "Test writing and bug fixing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      </span>
                      <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-cyan-500/10">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-cyan-500/[0.06] border border-cyan-500/15">
                    <Zap className="w-5 h-5 text-cyan-400/70 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-white/40 leading-relaxed">
                      <span className="text-white/60 font-semibold">Full autonomy on Sovereign tier.</span> Family plan unlocks Ralph Mode — Riri with executive function.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="p-10 sm:p-14 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-400 text-[10px] font-black tracking-[0.18em] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Builds while you brief
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-black tracking-[0.2em] uppercase text-cyan-400/60 mb-1">Agent 02</p>
                  <h2 className="text-4xl sm:text-5xl font-black text-white leading-none mb-2">Riri</h2>
                  <p className="text-lg font-black text-cyan-400">The Builder</p>
                </div>

                <p className="text-sm text-cyan-300/60 italic font-semibold tracking-wide">
                  Spec it. Brief it. Wake up to it.
                </p>

                <p className="text-sm text-white/45 leading-relaxed">
                  Riri is your autonomous builder. Give Riri a spec — a component, a script, a content piece, a data pipeline — and it builds while you&apos;re away. Not a copilot. A builder. You review the output, not the process.
                </p>
              </div>
            </div>
          </div>

          {/* ── HOURMAN ── */}
          <div className="rounded-3xl border border-violet-500/25 bg-violet-500/[0.04] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0">
              {/* Left panel */}
              <div className="p-10 sm:p-14 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-violet-500/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-violet-500/15 border border-violet-500/30 text-violet-400">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/25 text-violet-400 text-[10px] font-black tracking-[0.18em] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                      Daily sprint planning
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-black tracking-[0.2em] uppercase text-violet-400/60 mb-1">Agent 03</p>
                  <h2 className="text-4xl sm:text-5xl font-black text-white leading-none mb-2">Hourman</h2>
                  <p className="text-lg font-black text-violet-400">The Planner</p>
                </div>

                <p className="text-sm text-violet-300/60 italic font-semibold tracking-wide">
                  Your day, pre-planned.
                </p>

                <p className="text-sm text-white/45 leading-relaxed">
                  Hourman reviews your tasks, calendar, energy patterns, and priorities — and builds your daily sprint plan before you open your eyes. Not a to-do list app. A planning intelligence that knows when you do your best work.
                </p>
              </div>

              {/* Right panel — features */}
              <div className="p-10 sm:p-14 flex flex-col gap-4">
                <p className="text-xs font-black tracking-[0.2em] uppercase text-white/25 mb-2">What Hourman plans</p>
                <ul className="space-y-4">
                  {[
                    "Daily sprint generation from task backlog",
                    "Calendar integration and block scheduling",
                    "Energy-aware task sequencing",
                    "Meeting prep briefs",
                    "End-of-day retrospective + tomorrow pre-plan",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full border border-violet-500/30 bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      </span>
                      <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-violet-500/10">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-violet-500/[0.06] border border-violet-500/15">
                    <Clock className="w-5 h-5 text-violet-400/70 flex-shrink-0" />
                    <p className="text-xs text-white/40 leading-relaxed">
                      Your sprint plan lands before you wake up. Open your eyes to a structured day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          RALPH MODE — Special callout
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border-2 border-[#c9a84c]/40 bg-[#c9a84c]/[0.06] p-10 sm:p-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-7">
              <div className="w-14 h-14 rounded-2xl icon-gold flex items-center justify-center flex-shrink-0">
                <Brain className="w-7 h-7" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/35 text-[#c9a84c] text-[10px] font-black tracking-[0.2em] uppercase mb-2">
                  Available on Family plan
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  What is Ralph Mode?
                </h2>
              </div>
            </div>

            <p className="text-white/55 leading-relaxed text-base mb-8 max-w-2xl">
              Ralph Mode is MEOK&apos;s highest-autonomy agent configuration, available on the Family plan. Ralph combines Orion&apos;s research, Riri&apos;s building, and Hourman&apos;s planning into a single executive agent that can manage complex multi-day projects with minimal check-ins.
            </p>

            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm gold-glow"
            >
              See Family plan pricing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          HOW IT ALL CONNECTS
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-5">
            Shared intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
            Three agents.{" "}
            <span className="text-gradient-gold">One memory.</span>
          </h2>
          <p className="text-white/45 text-base leading-relaxed">
            All three agents share your sovereign companion&apos;s memory. Orion knows what Riri built last week. Hourman knows your current sprint. Your entire work context, always in sync.
          </p>

          {/* Visual connector */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
            {[
              { label: "Orion", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/25" },
              { label: "Riri", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/25" },
              { label: "Hourman", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/25" },
            ].map((agent, i, arr) => (
              <span key={agent.label} className="flex items-center gap-0">
                <span className={`px-5 py-2.5 rounded-full border font-black text-sm ${agent.color} ${agent.bg}`}>
                  {agent.label}
                </span>
                {i < arr.length - 1 && (
                  <span className="hidden sm:block w-8 h-px bg-gradient-to-r from-white/20 to-white/20 mx-1" />
                )}
                {i < arr.length - 1 && (
                  <span className="sm:hidden h-8 w-px bg-gradient-to-b from-white/20 to-white/20 my-1" />
                )}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-8 bg-gradient-to-b from-white/20 to-[#c9a84c]/40" />
              <div className="px-6 py-3 rounded-2xl border border-[#c9a84c]/30 bg-[#c9a84c]/[0.08]">
                <p className="text-xs font-black tracking-[0.15em] uppercase text-[#c9a84c]/80">Sovereign Memory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div
          aria-hidden
          className="blob-gold w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35"
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-3xl icon-gold flex items-center justify-center float-slow">
              <Moon className="w-7 h-7" />
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] mb-5 tracking-tight">
            Wake up to a{" "}
            <span className="text-gradient-gold">morning brief.</span>
          </h2>

          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Orion hunts. Riri builds. Hourman plans. While you sleep, your agents are working. You brief once. You wake up to results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/birth"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-base sm:text-lg gold-glow"
            >
              Start Work OS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white/60 border border-white/10 hover:border-[#c9a84c]/40 hover:text-white transition-all text-base"
            >
              See pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="mt-8 text-xs text-white/20 font-mono">
            Available on all tiers · Ralph Mode requires Family plan · MEOK AI LABS
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
    </>
  );
}
