"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Timer, TrendingUp, Battery, RotateCcw, ListChecks, Loader2, Play, CheckCircle2 } from "lucide-react";
import { callTool } from "@/lib/api";

/* ─── DATA ─────────────────────────────────────────────── */

const CAPABILITIES = [
  {
    emoji: "🗓️",
    Icon: Calendar,
    title: "Daily sprint planning",
    desc: "Breaks your backlog into achievable daily tasks with time estimates, every morning before you start work.",
  },
  {
    emoji: "⏱️",
    Icon: Timer,
    title: "Time boxing",
    desc: "Allocates focused work blocks and prevents scope creep — so deep work stays deep.",
  },
  {
    emoji: "📈",
    Icon: TrendingUp,
    title: "Progress tracking",
    desc: "Measures sprint velocity, identifies bottlenecks, and shows you where your time is actually going.",
  },
  {
    emoji: "🔋",
    Icon: Battery,
    title: "Energy-aware scheduling",
    desc: "Schedules demanding tasks for your peak energy windows and lighter work for low-energy periods.",
  },
  {
    emoji: "🔁",
    Icon: RotateCcw,
    title: "Retrospectives",
    desc: "Weekly review of what shipped vs what didn't — so each week's plan gets smarter than the last.",
  },
  {
    emoji: "📋",
    Icon: ListChecks,
    title: "Backlog grooming",
    desc: "Prioritises and refines your task list against your stated goals — cutting noise, surfacing what matters.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Hourman — The Daily Sprint Planner | MEOK AI LABS",
  description:
    "Hourman is MEOK's planning agent. He breaks your goals into daily sprints, estimates time, and keeps you on track — every morning.",
  url: "https://meok.ai/work/hourman",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── PAGE ─────────────────────────────────────────────── */

export default function HourmanPage() {
  const [sprintGoal, setSprintGoal] = useState("");

  const [startLoading, setStartLoading] = useState(false);
  const [startResult, setStartResult] = useState<Record<string, unknown> | null>(null);
  const [startError, setStartError] = useState<string | null>(null);

  const [statusLoading, setStatusLoading] = useState(false);
  const [statusResult, setStatusResult] = useState<Record<string, unknown> | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);

  const [completeLoading, setCompleteLoading] = useState(false);
  const [completeResult, setCompleteResult] = useState<Record<string, unknown> | null>(null);
  const [completeError, setCompleteError] = useState<string | null>(null);

  async function handleStartSprint(e: React.FormEvent) {
    e.preventDefault();
    if (!sprintGoal.trim()) return;
    setStartLoading(true);
    setStartError(null);
    setStartResult(null);
    try {
      const result = await callTool<Record<string, unknown>>("hourman_start_sprint", { goal: sprintGoal.trim() });
      setStartResult(result);
    } catch (err) {
      setStartError(err instanceof Error ? err.message : "Failed to start sprint");
    } finally {
      setStartLoading(false);
    }
  }

  async function handleGetStatus() {
    setStatusLoading(true);
    setStatusError(null);
    setStatusResult(null);
    try {
      const result = await callTool<Record<string, unknown>>("hourman_get_status");
      setStatusResult(result);
    } catch (err) {
      setStatusError(err instanceof Error ? err.message : "Failed to get status");
    } finally {
      setStatusLoading(false);
    }
  }

  async function handleCompleteSprint() {
    setCompleteLoading(true);
    setCompleteError(null);
    setCompleteResult(null);
    try {
      const result = await callTool<Record<string, unknown>>("hourman_complete_sprint");
      setCompleteResult(result);
    } catch (err) {
      setCompleteError(err instanceof Error ? err.message : "Failed to complete sprint");
    } finally {
      setCompleteLoading(false);
    }
  }

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
            Hourman — The Planner
          </h1>

          <p className="text-[#d4af37] text-xl font-semibold mb-6">
            Every sprint, every day, executed.
          </p>

          <p className="text-white/55 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Hourman converts your goals into structured daily work blocks — with time estimates,
            velocity tracking, and energy-aware scheduling. Wake up to a plan that actually fits
            the day you have, not the day you imagined.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/birth"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#0a0a0a] bg-[#d4af37] hover:bg-[#b8963e] transition-all text-sm shadow-lg"
              aria-label="Start your free trial and access Hourman"
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

      {/* ─── WHAT HOURMAN PLANS ───────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37]/60 block mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              What Hourman plans every day
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
              What is Hourman in MEOK AI?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Hourman is MEOK&apos;s daily sprint planning agent. He converts your goals into
              structured daily work blocks — estimating time, tracking velocity, and adjusting
              plans based on what you actually complete. Every morning, Hourman delivers a
              sprint plan calibrated to your current backlog, your energy, and your goals.
              Not a to-do list. An execution system.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
              Is Hourman like a project management tool?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Hourman is fundamentally different from Jira, Notion, or Linear. Those tools manage
              tasks. Hourman manages you. He knows your capacity, your energy windows, and your
              actual goals — not just your task list. Hourman plans around you as a person, not
              as a resource. The result is a daily sprint you can actually execute, not just
              a schedule that looks good until 9:15am.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
              Which tier unlocks Hourman?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Hourman is available on the Sovereign tier at £12/mo — included alongside Orion and
              Riri. All three agents are part of a single subscription. No per-sprint fees, no
              seat pricing, no enterprise tier required. One plan, all three agents, every morning.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE CONSOLE ──────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Live Console
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Command Hourman
            </h2>
            <p className="text-[#f5f0e8]/50 mt-4 max-w-xl mx-auto">
              Start sprints, check progress, and mark sprints complete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Start Sprint */}
            <div className="rounded-2xl bg-[#1a1a2e] border border-[#c9a84c]/20 p-6">
              <h3 className="font-black text-[#c9a84c] text-lg mb-3">Start Sprint</h3>
              <p className="text-sm text-[#f5f0e8]/40 mb-5">
                Set a goal and kick off a new sprint.
              </p>
              <form onSubmit={handleStartSprint} className="space-y-3">
                <textarea
                  value={sprintGoal}
                  onChange={(e) => setSprintGoal(e.target.value)}
                  placeholder="Sprint goal..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0d0c18] border border-[#c9a84c]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/30 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={startLoading || !sprintGoal.trim()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#b8963e] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
                >
                  {startLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Starting...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Start Sprint
                    </>
                  )}
                </button>
              </form>
              {startError && (
                <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {startError}
                </div>
              )}
              {startResult && (
                <div className="mt-4 p-4 rounded-lg bg-[#0d0c18] border border-[#c9a84c]/10 overflow-auto max-h-48">
                  <pre className="text-xs text-[#f5f0e8]/70 whitespace-pre-wrap">
                    {JSON.stringify(startResult, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Get Status */}
            <div className="rounded-2xl bg-[#1a1a2e] border border-[#c9a84c]/20 p-6">
              <h3 className="font-black text-[#c9a84c] text-lg mb-3">Sprint Status</h3>
              <p className="text-sm text-[#f5f0e8]/40 mb-5">
                Check the current sprint progress and velocity.
              </p>
              <button
                onClick={handleGetStatus}
                disabled={statusLoading}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#b8963e] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
              >
                {statusLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-4 h-4" />
                    Get Status
                  </>
                )}
              </button>
              {statusError && (
                <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {statusError}
                </div>
              )}
              {statusResult && (
                <div className="mt-4 p-4 rounded-lg bg-[#0d0c18] border border-[#c9a84c]/10 overflow-auto max-h-48">
                  <pre className="text-xs text-[#f5f0e8]/70 whitespace-pre-wrap">
                    {JSON.stringify(statusResult, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Complete Sprint */}
            <div className="rounded-2xl bg-[#1a1a2e] border border-[#c9a84c]/20 p-6">
              <h3 className="font-black text-[#c9a84c] text-lg mb-3">Complete Sprint</h3>
              <p className="text-sm text-[#f5f0e8]/40 mb-5">
                Mark the current sprint as done and log results.
              </p>
              <button
                onClick={handleCompleteSprint}
                disabled={completeLoading}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#b8963e] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
              >
                {completeLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Completing...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Complete Sprint
                  </>
                )}
              </button>
              {completeError && (
                <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {completeError}
                </div>
              )}
              {completeResult && (
                <div className="mt-4 p-4 rounded-lg bg-[#0d0c18] border border-[#c9a84c]/10 overflow-auto max-h-48">
                  <pre className="text-xs text-[#f5f0e8]/70 whitespace-pre-wrap">
                    {JSON.stringify(completeResult, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Let Hourman plan your week.
          </h2>
          <p className="text-white/45 max-w-md mx-auto mb-10 leading-relaxed">
            Stop starting Monday with a blank calendar. Let Hourman convert your goals into
            a sprint plan that fits the week you actually have.
          </p>
          <Link
            href="/ralph"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#0a0a0a] bg-[#d4af37] hover:bg-[#b8963e] transition-all text-base shadow-xl"
            aria-label="Open Ralph Mode to configure Hourman"
          >
            Let Hourman plan your week
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
