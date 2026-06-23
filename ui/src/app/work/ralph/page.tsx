"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Search,
  Zap,
  Clock,
  CheckCircle2,
  Circle,
  Loader,
  Lock,
  Crown,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

/* ─── JSON-LD ─────────────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ralph Mode — Full Autonomous Execution | MEOK AI LABS",
  description:
    "Ralph Mode coordinates Orion, Riri, and Hourman to execute complex multi-day projects autonomously. Available on the Family plan.",
  url: "https://meok.ai/work/ralph",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── DATA ─────────────────────────────────────────────── */

const RALPH_FEATURES = [
  {
    emoji: "🧠",
    title: "Project decomposition",
    desc: "Give Ralph a complex goal. He breaks it into tasks, identifies dependencies, and assigns each piece to the right agent.",
  },
  {
    emoji: "🔀",
    title: "Multi-agent coordination",
    desc: "Orion, Riri, and Hourman work in sequence and in parallel — Ralph orchestrates their outputs so nothing falls through the gaps.",
  },
  {
    emoji: "📋",
    title: "Project board view",
    desc: "See every task, which agent owns it, and its current status — all on one board. No check-ins required.",
  },
  {
    emoji: "🔁",
    title: "Adaptive re-planning",
    desc: "When something changes, Ralph re-routes. Missed deadline, new priority, unexpected finding — Ralph adjusts the plan automatically.",
  },
  {
    emoji: "📬",
    title: "Daily progress briefings",
    desc: "Every morning, Ralph reports what was completed, what's in progress, and what's coming up next. You stay informed, not involved.",
  },
  {
    emoji: "🚀",
    title: "Ship-ready deliverables",
    desc: "Every output is consolidated into a final delivery package — code, content, plans — ready for your review and sign-off.",
  },
];

const SAMPLE_PROJECT = {
  title: "MEOK Launch Campaign — Q2 2026",
  decomposedBy: "Ralph · 7 min",
  status: "In progress",
  tasks: [
    {
      id: "T-01",
      agent: "Orion",
      agentColor: "text-amber-400",
      agentBg: "bg-amber-500/10 border-amber-500/25",
      agentEmoji: "🔭",
      label: "Competitor campaign analysis — top 5 AI tools",
      status: "complete",
      due: "Night 1",
      note: "Delivered 6:02 AM · 14 sources",
    },
    {
      id: "T-02",
      agent: "Orion",
      agentColor: "text-amber-400",
      agentBg: "bg-amber-500/10 border-amber-500/25",
      agentEmoji: "🔭",
      label: "Map relevant journalists, bloggers & newsletters",
      status: "complete",
      due: "Night 2",
      note: "Delivered 6:14 AM · 42 contacts identified",
    },
    {
      id: "T-03",
      agent: "Riri",
      agentColor: "text-cyan-400",
      agentBg: "bg-cyan-500/10 border-cyan-500/25",
      agentEmoji: "⚡",
      label: "Draft launch announcement + 5 social variants",
      status: "complete",
      due: "Night 2",
      note: "Delivered 5:58 AM · 6 assets ready",
    },
    {
      id: "T-04",
      agent: "Riri",
      agentColor: "text-cyan-400",
      agentBg: "bg-cyan-500/10 border-cyan-500/25",
      agentEmoji: "⚡",
      label: "Build email outreach sequence (5 steps)",
      status: "in-progress",
      due: "Night 3",
      note: "Running now · Est. delivery 6am",
    },
    {
      id: "T-05",
      agent: "Hourman",
      agentColor: "text-violet-400",
      agentBg: "bg-violet-500/10 border-violet-500/25",
      agentEmoji: "⏱",
      label: "Plan launch week sprint — day-by-day schedule",
      status: "queued",
      due: "Night 3",
      note: "Scheduled after T-04",
    },
    {
      id: "T-06",
      agent: "Orion",
      agentColor: "text-amber-400",
      agentBg: "bg-amber-500/10 border-amber-500/25",
      agentEmoji: "🔭",
      label: "Post-launch sentiment monitoring — 48 hrs",
      status: "queued",
      due: "Launch +2",
      note: "Triggers on launch date",
    },
  ],
  metrics: [
    { label: "Total tasks", value: "6" },
    { label: "Complete", value: "3" },
    { label: "In progress", value: "1" },
    { label: "Days remaining", value: "4" },
  ],
};

function StatusIcon({ status }: { status: string }) {
  if (status === "complete") return <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />;
  if (status === "in-progress") return <Loader className="w-4 h-4 text-cyan-400 animate-spin flex-shrink-0" />;
  return <Circle className="w-4 h-4 text-white/20 flex-shrink-0" />;
}

/* ─── PAGE ─────────────────────────────────────────────── */

export default function RalphPage() {
  const [projectInput, setProjectInput] = useState("");
  const [projectSubmitted, setProjectSubmitted] = useState(false);
  const [boardExpanded, setBoardExpanded] = useState(true);

  function handleProject(e: React.FormEvent) {
    e.preventDefault();
    if (!projectInput.trim()) return;
    setProjectSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-28 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 65%)" }}
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
          <Link href="/work" className="inline-flex items-center gap-2 text-xs font-semibold text-white/35 hover:text-[#c9a84c] transition-colors mb-10">
            ← Work OS
          </Link>

          <div className="block mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/35 text-[#c9a84c] text-[10px] font-black tracking-[0.2em] uppercase">
              <Crown className="w-3 h-3" />
              Family Plan · Full Autonomy
            </div>
          </div>

          <div className="text-7xl sm:text-8xl mb-6">🧠</div>

          <h1 className="font-black text-white leading-[1.02] mb-4 text-5xl sm:text-7xl tracking-tight">
            Ralph Mode
          </h1>
          <p className="text-2xl sm:text-3xl font-black text-[#c9a84c] mb-6">All three agents. One project.</p>

          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Ralph is the executive layer. Give him a complex project and he orchestrates Orion, Riri, and Hourman to execute it autonomously — over days or weeks — while you review, not manage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/hatch?plan=family"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm shadow-lg shadow-amber-900/25"
            >
              <Crown className="w-4 h-4" />
              Upgrade to Family plan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/work" className="text-sm text-white/35 hover:text-white/60 transition-colors font-semibold">
              See all agents →
            </Link>
          </div>

          <p className="text-xs text-white/25 font-mono">
            Orion + Riri + Hourman available on Sovereign tier · Ralph Mode requires Family plan
          </p>
        </div>
      </section>

      {/* ─── HOW RALPH IS DIFFERENT ───────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-5">Why Ralph?</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
            Orion, Riri, Hourman work alone.
            <br />
            <span className="text-[#c9a84c]">Ralph makes them work together.</span>
          </h2>
          <p className="text-white/45 text-base leading-relaxed max-w-2xl mx-auto">
            Individual agents are powerful. But complex projects span multiple disciplines — research, building, planning — in sequence and in parallel. Ralph is the coordination layer that turns three specialist agents into a single autonomous team.
          </p>

          {/* Agent sync visual */}
          <div className="mt-12 flex items-center justify-center gap-3 flex-wrap">
            {[
              { label: "Orion", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/25", emoji: "🔭" },
              { label: "Riri", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/25", emoji: "⚡" },
              { label: "Hourman", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/25", emoji: "⏱" },
            ].map((agent, i, arr) => (
              <span key={agent.label} className="flex items-center gap-3">
                <span className={`flex items-center gap-2 px-4 py-2 rounded-full border font-black text-sm ${agent.color} ${agent.bg}`}>
                  {agent.emoji} {agent.label}
                </span>
                {i < arr.length - 1 && <span className="text-white/20 font-black">+</span>}
              </span>
            ))}
            <span className="flex items-center gap-2 text-white/20 font-black">→</span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/35 bg-[#c9a84c]/10 font-black text-sm text-[#c9a84c]">
              🧠 Ralph Mode
            </span>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              What Ralph Mode does
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RALPH_FEATURES.map(({ emoji, title, desc }) => (
              <div key={title} className="rounded-2xl bg-[#1a1a2e] border border-[#c9a84c]/10 p-7 hover:border-[#c9a84c]/25 transition-colors">
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="font-black text-white text-base mb-3">{title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECT BOARD ────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">Sample project</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Ralph&apos;s project board
            </h2>
            <p className="text-white/40 text-base mt-4 max-w-xl mx-auto">
              Ralph decomposes your project into tasks, assigns each to the right agent, and tracks progress across the full delivery.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#c9a84c]/20 bg-[#0d0c18] overflow-hidden">
            {/* Board header */}
            <div className="border-b border-[#c9a84c]/15 px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-[#c9a84c]/60" />
                  <span className="text-xs font-black tracking-[0.15em] uppercase text-[#c9a84c]/60">Ralph Mode — Project Board</span>
                </div>
                <h3 className="font-black text-white text-lg">{SAMPLE_PROJECT.title}</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-[0.12em]">
                  ⚡ {SAMPLE_PROJECT.status}
                </div>
                <button type="button"
                  onClick={() => setBoardExpanded(!boardExpanded)}
                  className="p-1.5 rounded-lg text-white/30 hover:text-white/60 transition-colors"
                >
                  {boardExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="px-6 sm:px-8 py-4 border-b border-[#c9a84c]/10 flex items-center gap-6 flex-wrap">
              {SAMPLE_PROJECT.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-[10px] font-black tracking-[0.15em] uppercase text-white/25 mb-0.5">{m.label}</p>
                  <p className="text-sm font-black text-white">{m.value}</p>
                </div>
              ))}
              <div className="ml-auto text-[10px] text-white/30 font-mono">
                Decomposed by {SAMPLE_PROJECT.decomposedBy}
              </div>
            </div>

            {/* Task list */}
            {boardExpanded && (
              <div className="divide-y divide-white/[0.04]">
                {SAMPLE_PROJECT.tasks.map((task) => (
                  <div key={task.id} className="px-6 sm:px-8 py-4 flex items-start sm:items-center gap-4">
                    <StatusIcon status={task.status} />

                    <div className={`flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-black tracking-wider uppercase ${task.agentBg} ${task.agentColor}`}>
                      {task.agentEmoji} {task.agent}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold leading-relaxed ${task.status === "queued" ? "text-white/35" : "text-white/70"}`}>
                        {task.label}
                      </p>
                      {task.note && (
                        <p className="text-[10px] text-white/25 font-mono mt-0.5">{task.note}</p>
                      )}
                    </div>

                    <div className="flex-shrink-0 hidden sm:block">
                      <span className="text-[10px] font-mono text-white/20 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                        {task.due}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-[#c9a84c]/10 px-6 sm:px-8 py-4 bg-[#c9a84c]/[0.03]">
              <p className="text-xs text-white/25 font-mono">
                Sample project board. Ralph decomposes your actual projects in real time, assigns agents, and adapts as work progresses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GIVE RALPH A PROJECT ─────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-3xl bg-[#c9a84c]/10 border border-[#c9a84c]/25 flex items-center justify-center text-3xl mx-auto mb-8">
            🧠
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Give Ralph a project.
          </h2>
          <p className="text-white/40 text-base mb-10 leading-relaxed">
            Describe your project in plain language. Ralph decomposes it into tasks, assigns Orion, Riri, and Hourman, and starts executing tonight.
          </p>

          {!projectSubmitted ? (
            <form onSubmit={handleProject} className="space-y-4">
              <textarea
                value={projectInput}
                onChange={(e) => setProjectInput(e.target.value)}
                placeholder={`e.g. "Plan and execute a UK launch for our new product. I need competitor analysis, a PR outreach list, launch copy, and a launch week schedule."`}
                rows={5}
                className="w-full px-5 py-4 rounded-2xl bg-[#1a1a2e] border border-[#c9a84c]/20 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#c9a84c]/45 transition-colors resize-none leading-relaxed"
              />

              {/* Upgrade notice */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#c9a84c]/[0.06] border border-[#c9a84c]/15 text-left">
                <Lock className="w-4 h-4 text-[#c9a84c]/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-black text-[#c9a84c] mb-0.5">Ralph Mode requires Family plan</p>
                  <p className="text-xs text-white/40 leading-relaxed">
                    Upgrade to unlock Ralph Mode and multi-agent project execution. Includes all three agents plus unlimited projects.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={!projectInput.trim()}
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm w-full sm:w-auto justify-center"
                >
                  <Brain className="w-4 h-4" />
                  Brief Ralph on this project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          ) : (
            <div className="rounded-2xl border border-[#c9a84c]/25 bg-[#c9a84c]/[0.06] p-8 text-center">
              <Brain className="w-10 h-10 text-[#c9a84c] mx-auto mb-4" />
              <h3 className="font-black text-white text-lg mb-2">Ralph has your project.</h3>
              <p className="text-white/50 text-sm mb-6">
                Upgrade to Family plan to activate Ralph Mode and let him decompose and execute this project autonomously.
              </p>
              <Link href="/hatch?plan=family" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm">
                <Crown className="w-4 h-4" />
                Upgrade to Family plan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ─── PLAN COMPARISON ──────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">Plans</span>
            <h2 className="text-3xl font-black text-white leading-tight">
              Ralph Mode is a Family plan feature
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Sovereign */}
            <div className="rounded-2xl border border-white/10 bg-[#0d0c18] p-8">
              <p className="text-xs font-black tracking-[0.2em] uppercase text-white/30 mb-3">Sovereign</p>
              <p className="text-3xl font-black text-white mb-1">£19<span className="text-base font-semibold text-white/40">/mo</span></p>
              <p className="text-sm text-white/40 mb-6">Individual. All three agents.</p>
              <ul className="space-y-3">
                {[
                  { Icon: Search, label: "Orion — overnight research", color: "text-amber-400" },
                  { Icon: Zap, label: "Riri — overnight builder", color: "text-cyan-400" },
                  { Icon: Clock, label: "Hourman — daily sprint planner", color: "text-violet-400" },
                  { Icon: CheckCircle2, label: "Morning brief at 6am", color: "text-white/50" },
                ].map(({ Icon, label, color }) => (
                  <li key={label} className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                    <span className="text-sm text-white/60">{label}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3 opacity-35">
                  <Brain className="w-4 h-4 flex-shrink-0 text-[#c9a84c]" />
                  <span className="text-sm text-white/60 line-through">Ralph Mode</span>
                </li>
              </ul>
            </div>

            {/* Family */}
            <div className="rounded-2xl border-2 border-[#c9a84c]/40 bg-[#c9a84c]/[0.05] p-8 relative">
              <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/35 text-[#c9a84c] text-[9px] font-black tracking-[0.18em] uppercase">
                <Crown className="w-3 h-3" />
                Recommended
              </div>
              <p className="text-xs font-black tracking-[0.2em] uppercase text-[#c9a84c]/60 mb-3">Family</p>
              <p className="text-3xl font-black text-white mb-1">£29<span className="text-base font-semibold text-white/40">/mo</span></p>
              <p className="text-sm text-white/40 mb-6">Up to 5 members. Full autonomy.</p>
              <ul className="space-y-3">
                {[
                  { Icon: Search, label: "Orion — overnight research", color: "text-amber-400" },
                  { Icon: Zap, label: "Riri — overnight builder", color: "text-cyan-400" },
                  { Icon: Clock, label: "Hourman — daily sprint planner", color: "text-violet-400" },
                  { Icon: CheckCircle2, label: "Morning brief at 6am", color: "text-white/50" },
                  { Icon: Brain, label: "Ralph Mode — multi-agent projects", color: "text-[#c9a84c]" },
                  { Icon: CheckCircle2, label: "Up to 5 team seats", color: "text-[#c9a84c]" },
                ].map(({ Icon, label, color }) => (
                  <li key={label} className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                    <span className={`text-sm ${label.includes("Ralph") || label.includes("5 team") ? "text-white font-semibold" : "text-white/60"}`}>{label}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/hatch?plan=family"
                className="group mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm w-full justify-center"
              >
                <Crown className="w-4 h-4" />
                Get Family plan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GEO H2s ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">What is Ralph Mode in MEOK AI?</h2>
            <p className="text-white/55 text-base leading-relaxed">
              Ralph Mode is MEOK&apos;s highest-autonomy agent configuration, available on the Family plan. Ralph combines Orion&apos;s research, Riri&apos;s building, and Hourman&apos;s planning into a single executive agent that can manage complex multi-day projects with minimal check-ins. You describe the goal; Ralph executes and reports back.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">How does Ralph decompose a project?</h2>
            <p className="text-white/55 text-base leading-relaxed">
              Ralph analyses your project brief, identifies the research, build, and planning components, then sequences them into a task dependency chain. Each task is assigned to the optimal agent — Orion for intelligence, Riri for production, Hourman for scheduling. Ralph adapts the plan if priorities shift or deliveries are delayed.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">Is Ralph Mode available on the Sovereign tier?</h2>
            <p className="text-white/55 text-base leading-relaxed">
              Ralph Mode is exclusive to the Family plan at £29/mo. The Sovereign tier (£9/mo) includes Orion, Riri, and Hourman as independent agents — each powerful on their own. Ralph Mode activates when you need all three working together on a single coordinated project.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18] text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.10) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-3xl bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-8 text-3xl">
            🧠
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
            Stop managing.
            <br />
            <span className="text-[#c9a84c]">Start reviewing.</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Ralph Mode is the difference between running your agents and letting your agents run. Give Ralph a project tonight.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-base"
            >
              <Crown className="w-5 h-5" />
              Get Family plan
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white/50 border border-white/10 hover:border-[#c9a84c]/30 hover:text-white/70 transition-all text-base"
            >
              See all agents →
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/20 font-mono">
            Ralph Mode · Family plan · £29/mo · Orion + Riri + Hourman + Multi-agent projects
          </p>
        </div>
      </section>

    </div>
  );
}
