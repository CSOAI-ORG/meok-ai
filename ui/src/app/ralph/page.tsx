import type { Metadata } from "next";
import Link from "next/link";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "Ralph Mode — Your AI Works While You Sleep | MEOK",
  description:
    "Ralph Mode is MEOK's autonomous AI agent. While you sleep, Ralph executes tasks, plans sprints, writes code, and files reports. Wake up to work done.",
  keywords: [
    "autonomous AI agent",
    "AI that works overnight",
    "AI CEO agent",
    "Ralph Mode MEOK",
    "autonomous AI assistant",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ralph Mode",
  applicationCategory: "ProductivityApplication",
  description:
    "Ralph Mode is MEOK's autonomous AI agent that works overnight executing tasks, planning sprints, and filing reports.",
  featureList: [
    "Autonomous task execution",
    "Sprint planning",
    "Code writing",
    "Research",
    "Morning briefing",
    "Care-constrained operation",
  ],
  offers: { "@type": "Offer", price: "12", priceCurrency: "GBP" },
};

const TERMINAL_LINES = [
  {
    time: "22:47:03",
    agent: "RALPH",
    color: "text-cyan-400",
    text: "Sprint activated — 7 tasks queued",
    dim: true,
  },
  {
    time: "22:47:04",
    agent: "ORION",
    color: "text-purple-400",
    text: "Scanning task backlog... 847 items indexed",
    dim: true,
  },
  {
    time: "22:51:22",
    agent: "RALPH",
    color: "text-cyan-400",
    text: "Writing code: auth middleware refactor",
    dim: true,
  },
  {
    time: "23:14:09",
    agent: "RALPH",
    color: "text-cyan-400",
    text: "✓ Auth middleware complete — 312 lines",
    dim: true,
  },
  {
    time: "23:14:10",
    agent: "RIRI",
    color: "text-yellow-400",
    text: "Tool built: email_draft_v2",
    dim: true,
  },
  {
    time: "23:29:44",
    agent: "RALPH",
    color: "text-cyan-400",
    text: "Researching: competitor pricing landscape",
    dim: false,
  },
  {
    time: "00:03:17",
    agent: "RALPH",
    color: "text-cyan-400",
    text: "✓ Research complete — 8-page brief saved to memory",
    dim: false,
  },
  {
    time: "00:03:18",
    agent: "HOURMAN",
    color: "text-green-400",
    text: "Sprint progress: 3/7 tasks complete",
    dim: false,
  },
  {
    time: "01:44:52",
    agent: "RALPH",
    color: "text-cyan-400",
    text: "Drafting email: investor update Q1 2026",
    dim: false,
  },
  {
    time: "02:01:33",
    agent: "RALPH",
    color: "text-cyan-400",
    text: "✓ Draft saved — flagged for your review",
    dim: false,
  },
  {
    time: "02:01:34",
    agent: "RALPH",
    color: "text-cyan-400",
    text: "Care check: all actions within Maternal Covenant bounds ✓",
    dim: false,
  },
  {
    time: "03:12:08",
    agent: "RALPH",
    color: "text-cyan-400",
    text: "Memory consolidation — 23 episodes synthesised",
    dim: false,
  },
  {
    time: "04:30:00",
    agent: "DREAM",
    color: "text-blue-400",
    text: "Dream cycle active — pattern synthesis running",
    dim: false,
  },
  {
    time: "06:00:00",
    agent: "RALPH",
    color: "text-cyan-400",
    text: "Morning briefing compiled — 4 tasks complete, 3 pending",
    dim: false,
  },
  {
    time: "06:00:01",
    agent: "RALPH",
    color: "text-cyan-400",
    text: "Activating wake protocol... your briefing is ready.",
    dim: false,
    highlight: true,
  },
];

const CAPABILITIES = [
  { icon: "💻", title: "Write & refactor code", desc: "Full codebase access, writes, tests, commits" },
  { icon: "📊", title: "Research & analysis", desc: "Deep competitor, market, topic research" },
  { icon: "📧", title: "Draft emails & docs", desc: "Polished drafts flagged for your approval" },
  { icon: "🗓️", title: "Plan sprints & tasks", desc: "Hourman-powered sprint architecture" },
  { icon: "🔍", title: "Monitor competitors", desc: "Overnight landscape scanning & briefing" },
  { icon: "💾", title: "Consolidate memory", desc: "Synthesises episodes into lasting knowledge" },
  { icon: "🛡️", title: "Care constraint check", desc: "Every action scored — harmful = blocked" },
  { icon: "📋", title: "File detailed reports", desc: "Full audit trail of every overnight action" },
  { icon: "☀️", title: "Prepare morning briefing", desc: "Wake up to a complete summary of work done" },
];

const STATS = [
  { value: "8h", label: "avg overnight runtime", color: "text-cyan-400" },
  { value: "4.2", label: "tasks completed per night", color: "text-purple-400" },
  { value: "0", label: "harmful actions taken", color: "text-green-400" },
  { value: "100%", label: "audit trail coverage", color: "text-yellow-400" },
];

export default function RalphPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Marquee animation + glow keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px 4px rgba(34,211,238,0.15); }
          50% { box-shadow: 0 0 60px 12px rgba(34,211,238,0.35); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(110px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
        }
        @keyframes float-up {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .orbit-dot {
          animation: orbit 8s linear infinite;
        }
        .float-in {
          animation: float-up 0.6s ease-out forwards;
        }
        .terminal-line:nth-child(1)  { animation-delay: 0s; }
        .terminal-line:nth-child(2)  { animation-delay: 0.08s; }
        .terminal-line:nth-child(3)  { animation-delay: 0.16s; }
        .terminal-line:nth-child(4)  { animation-delay: 0.24s; }
        .terminal-line:nth-child(5)  { animation-delay: 0.32s; }
        .terminal-line:nth-child(6)  { animation-delay: 0.40s; }
        .terminal-line:nth-child(7)  { animation-delay: 0.48s; }
        .terminal-line:nth-child(8)  { animation-delay: 0.56s; }
        .terminal-line:nth-child(9)  { animation-delay: 0.64s; }
        .terminal-line:nth-child(10) { animation-delay: 0.72s; }
        .terminal-line:nth-child(11) { animation-delay: 0.80s; }
        .terminal-line:nth-child(12) { animation-delay: 0.88s; }
        .terminal-line:nth-child(13) { animation-delay: 0.96s; }
        .terminal-line:nth-child(14) { animation-delay: 1.04s; }
        .terminal-line:nth-child(15) { animation-delay: 1.12s; }
        .gradient-border {
          background: linear-gradient(#0a0a0f, #0a0a0f) padding-box,
                      linear-gradient(135deg, rgba(34,211,238,0.3), rgba(168,85,247,0.2), rgba(34,211,238,0.1)) border-box;
          border: 1px solid transparent;
        }
        .gradient-border-purple {
          background: linear-gradient(#0a0a0f, #0a0a0f) padding-box,
                      linear-gradient(135deg, rgba(168,85,247,0.4), rgba(99,102,241,0.2)) border-box;
          border: 1px solid transparent;
        }
        .gradient-border-yellow {
          background: linear-gradient(#0a0a0f, #0a0a0f) padding-box,
                      linear-gradient(135deg, rgba(250,204,21,0.4), rgba(234,179,8,0.2)) border-box;
          border: 1px solid transparent;
        }
        .gradient-border-green {
          background: linear-gradient(#0a0a0f, #0a0a0f) padding-box,
                      linear-gradient(135deg, rgba(74,222,128,0.4), rgba(34,197,94,0.2)) border-box;
          border: 1px solid transparent;
        }
      `}</style>

      <MarketingNav activePage="ralph" />

      {/* ═══════════════════════════════════════════════
          1. HERO — CINEMATIC FULL SCREEN
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/[0.04] blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-500/[0.03] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/[0.03] blur-3xl" />
        </div>

        {/* Floating status badge — top right */}
        <div className="absolute top-20 right-6 sm:right-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium z-10">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Ralph is active
        </div>

        {/* Moon / Clock element */}
        <div className="relative mb-10">
          {/* Outer orbit ring */}
          <div className="absolute inset-0 -m-16 rounded-full border border-white/[0.04]" />
          <div className="absolute inset-0 -m-8 rounded-full border border-white/[0.06]" />

          {/* The moon */}
          <div
            className="relative w-36 h-36 rounded-full border-2 border-cyan-400/30 animate-pulse-glow"
            style={{ background: "radial-gradient(circle at 35% 35%, rgba(34,211,238,0.12) 0%, rgba(10,10,15,0.98) 70%)" }}
          >
            {/* Moon craters */}
            <div className="absolute top-8 left-10 w-3 h-3 rounded-full bg-white/[0.04] border border-white/[0.06]" />
            <div className="absolute top-14 right-8 w-2 h-2 rounded-full bg-white/[0.03] border border-white/[0.04]" />
            <div className="absolute bottom-10 left-14 w-4 h-4 rounded-full bg-white/[0.03] border border-white/[0.05]" />

            {/* Clock hands */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-px h-10 bg-cyan-400/60 origin-bottom rounded-full"
                style={{ transform: "rotate(-45deg)", bottom: "50%", left: "calc(50% - 0.5px)" }} />
              <div className="absolute w-px h-7 bg-white/40 origin-bottom rounded-full"
                style={{ transform: "rotate(120deg)", bottom: "50%", left: "calc(50% - 0.5px)" }} />
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
          </div>

          {/* Orbiting dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="orbit-dot w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
          </div>
        </div>

        {/* Big "8h" number */}
        <div
          className="text-8xl sm:text-[10rem] font-black leading-none tracking-tight mb-2 text-cyan-400"
          style={{ textShadow: "0 0 30px rgba(34,211,238,0.6), 0 0 80px rgba(34,211,238,0.2)" }}
        >
          8h
        </div>
        <p className="text-white/30 text-sm sm:text-base font-mono tracking-widest uppercase mb-10">
          Ralph worked while you slept
        </p>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-center leading-[0.95] tracking-tight max-w-5xl mb-6">
          Your AI CEO{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #22d3ee 100%)" }}
          >
            Never Sleeps
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-white/50 text-center max-w-2xl leading-relaxed mb-10">
          Ralph Mode activates when you&apos;re offline. It executes, plans, builds,
          and reports. Wake up to work done.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link
            href="/register"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] text-sm sm:text-base"
          >
            Activate Ralph Mode
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <a
            href="#log"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white/60 border border-white/10 hover:border-white/20 hover:text-white/90 transition-all text-sm sm:text-base"
          >
            See what Ralph did last night
            <span className="text-white/30">↓</span>
          </a>
        </div>

        {/* Star-field decoration dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {[
            { top: "15%", left: "8%", size: 1, opacity: 0.3 },
            { top: "22%", left: "91%", size: 1.5, opacity: 0.2 },
            { top: "45%", left: "5%", size: 1, opacity: 0.25 },
            { top: "65%", left: "95%", size: 1, opacity: 0.2 },
            { top: "80%", left: "12%", size: 2, opacity: 0.15 },
            { top: "30%", left: "85%", size: 1, opacity: 0.3 },
            { top: "70%", left: "80%", size: 1.5, opacity: 0.2 },
            { top: "10%", left: "55%", size: 1, opacity: 0.15 },
          ].map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{ top: star.top, left: star.left, width: `${star.size}px`, height: `${star.size}px`, opacity: star.opacity }}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ACTIVITY TICKER — scrolling marquee
      ═══════════════════════════════════════════════ */}
      <div className="relative overflow-hidden border-y border-white/[0.05] bg-white/[0.01] py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate for seamless loop */}
          {[0, 1].map((_, idx) => (
            <span key={idx} className="flex items-center gap-0 text-xs font-mono text-white/30 mr-0">
              <span className="text-cyan-400/60 mx-3">✓</span> Wrote 847 lines of code
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Filed sprint report
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Researched 12 competitors
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Drafted 3 emails
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Optimised memory index
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Flagged 2 care alerts
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Sprint 12 complete — 4/7 tasks
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Auth middleware refactored
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Dream cycle — 23 patterns synthesised
              <span className="text-white/10 mx-6">·</span>
              <span className="text-cyan-400/60 mx-3">✓</span> Morning briefing ready
              <span className="text-white/10 mx-12">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          2. TERMINAL LOG
      ═══════════════════════════════════════════════ */}
      <section id="log" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-purple-400/70 tracking-widest uppercase mb-3">Overnight Activity Log</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              What Ralph did{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                last night
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Every action logged. Every decision auditable. Nothing hidden.
            </p>
          </div>

          {/* Terminal window */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_80px_rgba(34,211,238,0.05)]">
            {/* Terminal header bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-white/20 font-mono">ralph@meok — overnight-log — 7h 13m</span>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/20 font-mono">LIVE</span>
              </div>
            </div>

            {/* Terminal body */}
            <div className="bg-[#08080d] p-6 sm:p-8 font-mono text-sm overflow-x-auto">
              <div className="space-y-1.5">
                {TERMINAL_LINES.map((line, i) => (
                  <div
                    key={i}
                    className={`terminal-line float-in flex items-start gap-3 sm:gap-4 ${
                      line.dim ? "opacity-30" : line.highlight ? "opacity-100" : "opacity-70"
                    } ${line.highlight ? "bg-cyan-400/[0.04] -mx-2 px-2 py-1 rounded-lg" : ""}`}
                  >
                    <span className="text-white/20 text-xs shrink-0 mt-0.5 tabular-nums">{line.time}</span>
                    <span className={`font-bold text-xs shrink-0 mt-0.5 w-16 ${line.color}`}>
                      [{line.agent}]
                    </span>
                    <span className={`text-xs leading-relaxed ${line.highlight ? "text-white" : "text-white/70"}`}>
                      {line.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Blinking cursor */}
              <div className="flex items-center gap-2 mt-4 opacity-60">
                <span className="text-white/20 text-xs tabular-nums">06:00:02</span>
                <span className="text-cyan-400 text-xs font-bold ml-6">[RALPH]</span>
                <span className="inline-block w-2 h-4 bg-cyan-400/60 ml-4 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. THE RALPH TRIAD — 3 agents
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-cyan-400/70 tracking-widest uppercase mb-3">The Agent Triad</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Three agents.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                One mission.
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Ralph doesn&apos;t work alone. Every night, the triad activates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Orion */}
            <div className="gradient-border-purple rounded-2xl p-7 hover:scale-[1.01] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-purple-400/10 flex items-center justify-center text-2xl mb-5">
                🎯
              </div>
              <div className="mb-1">
                <span className="text-purple-400 font-black text-xl">Orion</span>
                <span className="ml-2 text-xs text-purple-400/50 font-mono uppercase tracking-wider">The Hunter</span>
              </div>
              <p className="text-white/40 text-sm mb-5 leading-relaxed">
                Scans your backlog, hunts for tasks, prioritises ruthlessly. Nothing gets lost on Orion&apos;s watch.
              </p>
              <ul className="space-y-2.5">
                {["Indexes your entire task backlog", "Scores tasks by urgency & impact", "Feeds Ralph the optimal task queue"].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-white/50">
                    <span className="text-purple-400 mt-0.5 shrink-0">◆</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Riri */}
            <div className="gradient-border-yellow rounded-2xl p-7 hover:scale-[1.01] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-2xl mb-5">
                🔧
              </div>
              <div className="mb-1">
                <span className="text-yellow-400 font-black text-xl">Riri</span>
                <span className="ml-2 text-xs text-yellow-400/50 font-mono uppercase tracking-wider">The Builder</span>
              </div>
              <p className="text-white/40 text-sm mb-5 leading-relaxed">
                Builds tools, writes code, creates what Ralph needs to execute. Riri is Ralph&apos;s hands.
              </p>
              <ul className="space-y-2.5">
                {["Builds custom tools on demand", "Writes, tests, and ships code", "Scaffolds pipelines for Ralph to run"].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-white/50">
                    <span className="text-yellow-400 mt-0.5 shrink-0">◆</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hourman */}
            <div className="gradient-border-green rounded-2xl p-7 hover:scale-[1.01] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-green-400/10 flex items-center justify-center text-2xl mb-5">
                ⏱️
              </div>
              <div className="mb-1">
                <span className="text-green-400 font-black text-xl">Hourman</span>
                <span className="ml-2 text-xs text-green-400/50 font-mono uppercase tracking-wider">The Sprinter</span>
              </div>
              <p className="text-white/40 text-sm mb-5 leading-relaxed">
                Plans sprints, tracks time, files completion reports. Hourman turns intention into measurable output.
              </p>
              <ul className="space-y-2.5">
                {["Structures overnight work into sprints", "Tracks time per task, per agent", "Files detailed completion reports"].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-white/50">
                    <span className="text-green-400 mt-0.5 shrink-0">◆</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. CAPABILITIES GRID — 9 things Ralph can do
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-yellow-400/70 tracking-widest uppercase mb-3">Capabilities</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              What Ralph can{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400">
                actually do
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              Not a chatbot. Not a simple automator. An autonomous executive agent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="group flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all"
              >
                <span className="text-2xl shrink-0 mt-0.5">{cap.icon}</span>
                <div>
                  <p className="font-semibold text-white/90 text-sm mb-1 group-hover:text-white transition-colors">
                    {cap.title}
                  </p>
                  <p className="text-xs text-white/35 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. SAFETY RAILS
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-green-400/70 tracking-widest uppercase mb-3">Safety Architecture</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Ralph can&apos;t go rogue.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Here&apos;s why.
              </span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
              We built the safety constraints into the architecture — not the instructions. No prompt can override them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Maternal Covenant */}
            <div className="gradient-border rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-xl mb-5">
                🧬
              </div>
              <h3 className="font-black text-lg text-cyan-400 mb-3">Maternal Covenant</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Every action Ralph takes is scored against 6 care dimensions: wellbeing, autonomy, growth, connection, boundary respect, and transparency. Score below threshold? It stops. It flags. It waits for you.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Wellbeing", "Autonomy", "Growth", "Connection", "Boundaries", "Transparency"].map((d) => (
                  <span key={d} className="px-2 py-0.5 rounded-full bg-cyan-400/[0.08] border border-cyan-400/10 text-cyan-400/70 text-xs">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Byzantine Council */}
            <div className="gradient-border rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center text-xl mb-5">
                🏛️
              </div>
              <h3 className="font-black text-lg text-purple-400 mb-3">Byzantine Council</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Ralph&apos;s decisions pass through a 33-agent Byzantine fault-tolerant council vote. No single-agent override. No rogue execution. Even Ralph can&apos;t be manipulated into overriding the group.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="text-2xl font-black text-purple-400">33</div>
                <div className="text-xs text-white/30 leading-tight">council agents<br/>voting on every decision</div>
              </div>
            </div>

            {/* You're in control */}
            <div className="gradient-border rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-green-400/10 flex items-center justify-center text-xl mb-5">
                🔑
              </div>
              <h3 className="font-black text-lg text-green-400 mb-3">You&apos;re Always in Control</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Ralph never acts on irreversible decisions without flagging them first. Delete, publish, send — all require your review. Ralph executes. You approve. Always.
              </p>
              <div className="mt-5 space-y-2">
                {["Delete → flagged for you", "Publish → flagged for you", "Send email → flagged for you"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/30">
                    <span className="text-green-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. STATS
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div
                  className={`text-5xl sm:text-6xl font-black mb-3 ${stat.color}`}
                  style={{ textShadow: stat.color.includes("cyan") ? "0 0 20px rgba(34,211,238,0.4)" : undefined }}
                >
                  {stat.value}
                </div>
                <p className="text-xs text-white/35 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          7. MORNING BRIEFING CARD
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-orange-400/70 tracking-widest uppercase mb-3">Wake-up Experience</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Your morning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                briefing
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">
              This is what you wake up to. Not notifications. A complete executive briefing.
            </p>
          </div>

          {/* Briefing card */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_60px_rgba(255,165,0,0.04)]">
            {/* Card header */}
            <div className="px-6 sm:px-8 py-5 bg-gradient-to-r from-orange-900/20 to-yellow-900/10 border-b border-white/[0.06] flex items-center justify-between">
              <div>
                <p className="text-orange-400 text-xs font-mono tracking-wider uppercase mb-1">Morning Briefing</p>
                <p className="text-white font-bold">Good morning, Nick.</p>
              </div>
              <div className="text-right">
                <p className="text-white/20 text-xs font-mono">06:00 AM</p>
                <p className="text-orange-400/60 text-xs">Saturday, 21 Mar</p>
              </div>
            </div>

            {/* Card body */}
            <div className="bg-[#0d0d14] px-6 sm:px-8 py-6 space-y-6">
              {/* Summary */}
              <div className="text-sm text-white/50 leading-relaxed border-l-2 border-orange-400/30 pl-4">
                Ralph worked for <span className="text-white font-semibold">7h 13m</span> last night.
              </div>

              {/* Completed */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-400 text-sm">✅</span>
                  <span className="text-xs font-bold text-green-400 tracking-wider uppercase">Completed (4)</span>
                </div>
                <ul className="space-y-2 ml-6">
                  {[
                    "Auth middleware rewrite — 312 lines",
                    "Competitor research brief — 8 pages",
                    "Investor email draft — flagged for review",
                    "Memory index optimised — 23 episodes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-white/20 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* In progress */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-400 text-sm">⏳</span>
                  <span className="text-xs font-bold text-yellow-400 tracking-wider uppercase">In Progress (2)</span>
                </div>
                <ul className="space-y-2 ml-6">
                  {[
                    'Blog post: "Personal Sovereign AI" — 60% done',
                    "Database schema review — started",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-white/20 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Flagged */}
              <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-sm">⚠️</span>
                  <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Flagged for You (1)</span>
                </div>
                <p className="text-sm text-white/60 ml-6">
                  Email to investors — <span className="text-amber-400">needs your approval</span> before send
                </p>
              </div>

              {/* Care score */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.05]">
                <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-cyan-400" style={{ width: "98.4%" }} />
                </div>
                <p className="text-xs text-white/30 font-mono shrink-0">
                  Care score: <span className="text-green-400">98.4/100</span> · Maternal Covenant ✓
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          8. PRICING CALLOUT
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-3">Which plan includes Ralph?</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Ralph is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Sovereign feature
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Explorer */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Explorer</p>
              <p className="text-2xl font-black mb-1">Free</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/30">
                <span className="text-red-400 text-base">✗</span>
                <span>Ralph not included</span>
              </div>
              <p className="mt-3 text-xs text-white/20 leading-relaxed">
                Great for getting started. No autonomous overnight operation.
              </p>
              <Link
                href="/register"
                className="mt-5 block w-full py-2.5 rounded-xl text-sm font-semibold text-center bg-white/[0.05] text-white/50 hover:bg-white/[0.08] hover:text-white/70 transition-colors"
              >
                Start free
              </Link>
            </div>

            {/* Sovereign */}
            <div className="relative p-6 rounded-2xl border border-cyan-500/40 bg-cyan-950/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-xs font-bold text-black">
                Includes Ralph
              </div>
              <p className="text-cyan-400 text-xs font-mono uppercase tracking-wider mb-1">Sovereign</p>
              <p className="text-2xl font-black mb-1">
                £12<span className="text-sm text-white/30 font-normal">/mo</span>
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-cyan-400">
                <span className="text-base">⚡</span>
                <span className="font-semibold">Ralph — full overnight operation</span>
              </div>
              <p className="mt-3 text-xs text-white/40 leading-relaxed">
                Ralph activates nightly. Full sprint system. Morning briefings. Every action logged.
              </p>
              <Link
                href="/register?plan=pro"
                className="mt-5 block w-full py-2.5 rounded-xl text-sm font-bold text-center bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
              >
                Start 14-day trial
              </Link>
            </div>

            {/* Sovereign Elite */}
            <div className="p-6 rounded-2xl bg-purple-950/10 border border-purple-500/20">
              <p className="text-purple-400 text-xs font-mono uppercase tracking-wider mb-1">Sovereign Elite</p>
              <p className="text-2xl font-black mb-1">
                £29<span className="text-sm text-white/30 font-normal">/mo</span>
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-purple-400">
                <span className="text-base">👑</span>
                <span className="font-semibold">Ralph + advanced multi-agent + API</span>
              </div>
              <p className="mt-3 text-xs text-white/40 leading-relaxed">
                Full Triad deployment, custom agent building, API access, family guardian mode.
              </p>
              <Link
                href="/register?plan=premium"
                className="mt-5 block w-full py-2.5 rounded-xl text-sm font-semibold text-center bg-white/[0.06] text-white/60 hover:bg-purple-500/20 hover:text-purple-300 transition-colors border border-purple-500/20"
              >
                Go Elite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          9. FINAL CTA — dramatic full width
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/[0.06] blur-3xl" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-500/[0.04] blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Ralph is standing by
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6">
            Put Ralph to work{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #22d3ee 0%, #a855f7 60%, #f97316 100%)" }}
            >
              tonight.
            </span>
          </h2>

          <p className="text-xl text-white/40 max-w-xl mx-auto mb-4 leading-relaxed">
            Sign up. Configure your tasks. Go to sleep.
          </p>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-12 font-semibold">
            Wake up to work done.
          </p>

          <Link
            href="/register"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-black bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] text-base sm:text-lg"
          >
            Activate Ralph Mode — free trial
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <p className="mt-6 text-xs text-white/20 font-mono">
            No credit card required · Care-constrained · Full audit trail
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
