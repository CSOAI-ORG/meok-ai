"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Timer,
  TrendingUp,
  Battery,
  RotateCcw,
  ListChecks,
  CheckCircle2,
  Clock,
  Sun,
  Zap,
  Brain,
  Link2,
} from "lucide-react";

/* ─── JSON-LD ─────────────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Hourman — The Daily Sprint Planner | MEOK AI LABS",
  description:
    "Hourman is MEOK's planning agent. He breaks your goals into daily sprints, estimates time, and delivers your plan by 6am — every morning.",
  url: "https://meok.ai/work/hourman",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── DATA ─────────────────────────────────────────────── */

const CAPABILITIES = [
  { emoji: "🗓️", Icon: Calendar, title: "Daily sprint planning", desc: "Breaks your backlog into achievable daily tasks with time estimates, every morning before you start work." },
  { emoji: "⏱️", Icon: Timer, title: "Time boxing", desc: "Allocates focused work blocks and prevents scope creep — so deep work stays deep." },
  { emoji: "📈", Icon: TrendingUp, title: "Progress tracking", desc: "Measures sprint velocity, identifies bottlenecks, and shows you where your time is actually going." },
  { emoji: "🔋", Icon: Battery, title: "Energy-aware scheduling", desc: "Schedules demanding tasks for your peak energy windows and lighter work for low-energy periods." },
  { emoji: "🔁", Icon: RotateCcw, title: "Retrospectives", desc: "Weekly review of what shipped vs what didn't — so each week's plan gets smarter than the last." },
  { emoji: "📋", Icon: ListChecks, title: "Backlog grooming", desc: "Prioritises and refines your task list against your stated goals — cutting noise, surfacing what matters." },
];

const MORNING_BRIEF = {
  date: "Friday 28 March",
  delivered: "Delivered 05:58 AM",
  greeting: "Good morning. Here's your sprint for today.",
  energyNote: "Peak energy window: 9am–12pm. Deep work first.",
  blocks: [
    { time: "8:00–8:30", type: "REVIEW", label: "Morning brief + Orion report", energy: "light", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
    { time: "9:00–11:00", type: "DEEP WORK", label: "Build Stripe webhook handler", energy: "high", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
    { time: "11:00–11:15", type: "BREAK", label: "Break — step away from screen", energy: "rest", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
    { time: "11:15–12:00", type: "WRITING", label: "Draft investor update (Riri started this — review + edit)", energy: "medium", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
    { time: "13:00–14:00", type: "COMMS", label: "Reply to 3 priority emails + 2 Slack threads", energy: "light", color: "text-white/60", bg: "bg-white/5 border-white/10" },
    { time: "14:00–15:30", type: "DEEP WORK", label: "Finish /api/contacts endpoint (Riri built skeleton)", energy: "high", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
    { time: "16:00–16:30", type: "REVIEW", label: "Retrospective + brief Orion for tonight", energy: "light", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  ],
  metrics: [
    { label: "Tasks", value: "7 blocks" },
    { label: "Deep work", value: "3.5 hrs" },
    { label: "Sprint velocity", value: "+12% vs last week" },
  ],
};

const CALENDAR_STEPS = [
  { step: "1", icon: Link2, label: "Connect your calendar", desc: "Google Calendar or Outlook. OAuth — your data never leaves your account." },
  { step: "2", icon: Brain, label: "Hourman reads your schedule", desc: "Meetings, blocks, and deadlines are ingested. Hourman learns your patterns over 7 days." },
  { step: "3", icon: Battery, label: "Set your energy profile", desc: "Tell Hourman when you do your best work. He calibrates every sprint to your peak windows." },
  { step: "4", icon: Sun, label: "Wake up to your plan", desc: "Every morning at 6am, your sprint is built, time-boxed, and waiting in your dashboard." },
];

/* ─── PAGE ─────────────────────────────────────────────── */

export default function HourmanPage() {
  const [priorityInput, setPriorityInput] = useState("");
  const [prioritySubmitted, setPrioritySubmitted] = useState(false);
  const [calendarExpanded, setCalendarExpanded] = useState(false);

  function handlePriority(e: React.FormEvent) {
    e.preventDefault();
    if (!priorityInput.trim()) return;
    setPrioritySubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-28 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 65%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <Link href="/work" className="inline-flex items-center gap-2 text-xs font-semibold text-white/35 hover:text-violet-400 transition-colors mb-10">
            ← Work OS
          </Link>

          <div className="block mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-[10px] font-black tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Agent 03 · Delivers at 6am
            </div>
          </div>

          <div className="text-7xl sm:text-8xl mb-6">⏱</div>

          <h1 className="font-black text-white leading-[1.02] mb-4 text-5xl sm:text-7xl tracking-tight">
            Hourman
          </h1>
          <p className="text-2xl sm:text-3xl font-black text-violet-400 mb-6">The Planner</p>

          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Hourman plans your time, learns your energy patterns, and delivers a structured daily sprint by 6am — every morning. Not a to-do app. A planning intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm shadow-lg shadow-amber-900/20"
            >
              Let Hourman plan your day
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/work" className="text-sm text-white/35 hover:text-white/60 transition-colors font-semibold">
              See all agents →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              What Hourman plans every day
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map(({ emoji, title, desc }) => (
              <div key={title} className="rounded-2xl bg-[#0d0c18] border border-violet-500/10 p-7 hover:border-violet-500/25 transition-colors">
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="font-black text-white text-base mb-3">{title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAMPLE MORNING DELIVERY ──────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">Sample delivery</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Your morning brief — from Hourman
            </h2>
            <p className="text-white/40 text-base mt-4 max-w-xl mx-auto">
              This is what&apos;s waiting for you at 6am. Time-boxed, energy-aware, and synced with what Orion and Riri built overnight.
            </p>
          </div>

          <div className="rounded-3xl border border-violet-500/20 bg-[#1a1a2e] overflow-hidden">
            {/* Brief header */}
            <div className="border-b border-violet-500/10 px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-4 h-4 text-violet-400/60" />
                  <span className="text-xs font-black tracking-[0.15em] uppercase text-violet-400/60">Hourman Morning Brief</span>
                </div>
                <h3 className="font-black text-white text-lg">{MORNING_BRIEF.date}</h3>
              </div>
              <div className="flex-shrink-0 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-[0.12em]">
                ✓ {MORNING_BRIEF.delivered}
              </div>
            </div>

            {/* Greeting + energy note */}
            <div className="px-6 sm:px-8 py-5 border-b border-violet-500/10 bg-violet-500/[0.03]">
              <p className="text-white/70 font-semibold text-sm mb-1">{MORNING_BRIEF.greeting}</p>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <p className="text-xs text-amber-400/70 font-semibold">{MORNING_BRIEF.energyNote}</p>
              </div>
            </div>

            {/* Metrics bar */}
            <div className="px-6 sm:px-8 py-4 border-b border-violet-500/10 flex items-center gap-6 flex-wrap">
              {MORNING_BRIEF.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-[10px] font-black tracking-[0.15em] uppercase text-white/25 mb-0.5">{m.label}</p>
                  <p className="text-sm font-black text-white">{m.value}</p>
                </div>
              ))}
            </div>

            {/* Time blocks */}
            <div className="divide-y divide-white/[0.04]">
              {MORNING_BRIEF.blocks.map((block) => (
                <div key={block.time} className="px-6 sm:px-8 py-4 flex items-center gap-4">
                  <div className="flex-shrink-0 w-24 sm:w-28">
                    <p className="text-[10px] font-mono text-white/30">{block.time}</p>
                  </div>
                  <div className={`flex-shrink-0 px-2 py-0.5 rounded text-[9px] font-black tracking-wider uppercase border hidden sm:block ${block.bg} ${block.color}`}>
                    {block.type}
                  </div>
                  <p className="flex-1 text-sm text-white/65 leading-relaxed">{block.label}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-violet-500/10 px-6 sm:px-8 py-4 bg-violet-500/[0.03]">
              <p className="text-xs text-white/25 font-mono">
                Sample brief. Your actual sprint is built from your live backlog, calendar, and energy profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONNECT CALENDAR ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">Setup</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Connect your calendar
            </h2>
            <p className="text-white/40 text-base mt-4 max-w-xl mx-auto">
              Hourman reads your schedule to build plans that fit your actual day — not a fantasy version of it.
            </p>
          </div>

          <div className="rounded-3xl border border-violet-500/20 bg-[#0d0c18] overflow-hidden">
            {/* How it works steps */}
            <div className="divide-y divide-white/[0.04]">
              {CALENDAR_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="p-6 sm:p-8 flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[10px] font-black tracking-[0.15em] uppercase text-violet-400/50">Step {step.step}</span>
                        <h3 className="font-black text-white text-base">{step.label}</h3>
                      </div>
                      <p className="text-sm text-white/45 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connect buttons */}
            <div className="border-t border-violet-500/10 p-6 sm:p-8 bg-violet-500/[0.03]">
              <p className="text-xs font-black tracking-[0.15em] uppercase text-white/25 mb-4">Connect your calendar</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button type="button"
                  onClick={() => setCalendarExpanded(true)}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-black text-white border border-white/15 hover:border-violet-500/40 bg-white/[0.04] hover:bg-violet-500/[0.07] transition-all text-sm"
                >
                  <span className="text-lg">📅</span>
                  Google Calendar
                  <ArrowRight className="w-4 h-4 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
                <button type="button"
                  onClick={() => setCalendarExpanded(true)}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-black text-white border border-white/15 hover:border-violet-500/40 bg-white/[0.04] hover:bg-violet-500/[0.07] transition-all text-sm"
                >
                  <span className="text-lg">📆</span>
                  Outlook / Microsoft
                  <ArrowRight className="w-4 h-4 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>

              {calendarExpanded && (
                <div className="mt-5 rounded-xl border border-violet-500/20 bg-violet-500/[0.05] p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/25 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-white mb-1">Calendar sync is coming soon.</p>
                      <p className="text-xs text-white/45 leading-relaxed mb-3">
                        Full calendar integration is in active development. To get early access and configure Hourman now, start your free trial. Your settings will be active when sync launches.
                      </p>
                      <Link href="/hatch" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-xs">
                        Get early access
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRIORITY INPUT ───────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-3xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-3xl mx-auto mb-8">
            ⏱
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            What&apos;s your priority tomorrow?
          </h2>
          <p className="text-white/40 text-base mb-10 leading-relaxed">
            Tell Hourman what matters most. He&apos;ll build your sprint around it and deliver it before you wake up.
          </p>

          {!prioritySubmitted ? (
            <form onSubmit={handlePriority} className="space-y-4">
              <textarea
                value={priorityInput}
                onChange={(e) => setPriorityInput(e.target.value)}
                placeholder={`e.g. "Finish the Stripe integration by EOD. I have 3 meetings in the afternoon so protect my morning for deep work."`}
                rows={4}
                className="w-full px-5 py-4 rounded-2xl bg-[#1a1a2e] border border-violet-500/20 text-white placeholder-white/25 text-sm focus:outline-none focus:border-violet-500/45 transition-colors resize-none leading-relaxed"
              />
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={!priorityInput.trim()}
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm w-full sm:w-auto justify-center"
                >
                  <Calendar className="w-4 h-4" />
                  Brief Hourman for tomorrow
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-white/25 font-mono">Requires Sovereign tier · £12/mo</p>
              </div>
            </form>
          ) : (
            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-8 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-black text-white text-lg mb-2">Hourman is on it.</h3>
              <p className="text-white/50 text-sm mb-6">Your sprint plan will be ready by 6am tomorrow. Open your dashboard when you wake up.</p>
              <Link href="/hatch" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm">
                Activate full Hourman access
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
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">What is Hourman in MEOK AI?</h2>
            <p className="text-white/55 text-base leading-relaxed">
              Hourman is MEOK&apos;s daily sprint planning agent. He converts your goals into structured daily work blocks — estimating time, tracking velocity, and adjusting plans based on what you actually complete. Every morning, Hourman delivers a sprint plan calibrated to your current backlog, your energy, and your goals. Not a to-do list. An execution system.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">Is Hourman different from a project management tool?</h2>
            <p className="text-white/55 text-base leading-relaxed">
              Fundamentally. Tools like Jira, Notion, or Linear manage tasks. Hourman manages you. He knows your capacity, your energy windows, and your actual goals — not just your task list. Hourman plans around you as a person, not as a resource. The result is a daily sprint you can actually execute, not just a schedule that looks good until 9:15am.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">Which tier unlocks Hourman?</h2>
            <p className="text-white/55 text-base leading-relaxed">
              Hourman is available on the Sovereign tier at £12/mo — included alongside Orion and Riri. All three agents are part of a single subscription. No per-sprint fees, no seat pricing. One plan, all three agents, every morning.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#0d0c18] text-center relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Clock className="w-4 h-4 text-violet-400/50" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-white/25">Other agents</span>
          </div>
          <p className="text-white/40 text-sm mb-8">Hourman works alongside Orion and Riri. All three share your sovereign memory.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/work/orion" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-white border border-amber-500/25 hover:border-amber-500/50 bg-amber-500/[0.05] hover:bg-amber-500/[0.08] transition-all text-sm">
              🔭 Meet Orion <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/work/riri" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-white border border-cyan-500/25 hover:border-cyan-500/50 bg-cyan-500/[0.05] hover:bg-cyan-500/[0.08] transition-all text-sm">
              ⚡ Meet Riri <ArrowRight className="w-3.5 h-3.5" />
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
