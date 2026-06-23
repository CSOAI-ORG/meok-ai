"use client";

/**
 * MEOK OS — Computer Use Page
 *
 * /os/computer-use
 *
 * Dedicated interface for the sovereign character to take the keyboard and
 * mouse and execute tasks on-screen via Claude's computer_use tool.
 *
 * Includes:
 *   - Instructions for enabling screen capture
 *   - Demo mode (simulated task sequence, no real API calls)
 *   - Live session panel
 */

import { useState } from "react";
import { ComputerUsePanel } from "@/components/computer-use-panel";
import Link from "next/link";
import { Monitor, ArrowRight, Shield, Eye, MousePointer, Terminal } from "lucide-react";
import { Surface, FeatureCard, IconOrb, GlowText } from "@/components/design-system";

// ── Brand ──────────────────────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ── Static data ────────────────────────────────────────────────────────────

const SETUP_STEPS = [
  {
    num:  "01",
    title: "Allow screen capture",
    desc:  'When prompted, click "Share" in the browser dialog and select the window or screen you want the character to see.',
  },
  {
    num:  "02",
    title: "Describe your task",
    desc:  "Type a plain-English task: \"Research the top 5 competitors to MEOK AI and create a comparison table.\"",
  },
  {
    num:  "03",
    title: "Review every action",
    desc:  "The character narrates each action before taking it. You can stop at any time using the Take Control Back button.",
  },
  {
    num:  "04",
    title: "Confirm sensitive actions",
    desc:  "The character will always pause and ask before sending emails, deleting files, or making any potentially destructive change.",
  },
];

const EXAMPLE_TASKS = [
  "Open Notion and create a weekly review template with sections for wins, blockers, and next week's priorities.",
  "Search for the latest news about sovereign AI and summarise the top 5 articles in a bullet list.",
  "Open my email client, find all unread messages from this week, and give me a summary.",
  "Go to meok.ai/pricing and take notes on the tier structure, then format it as a comparison table.",
  "Open a code editor and create a simple Python script that logs 'Hello from MEOK OS' every 10 seconds.",
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function ComputerUsePage() {
  const [mode,         setMode]         = useState<"idle" | "demo" | "live">("idle");
  const [taskStopped,  setTaskStopped]  = useState(false);

  const handleStop = () => setTaskStopped(true);

  return (
    <div className="min-h-screen text-[#f5f0e8]" style={{ background: DEEP }}>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#c9a84c]/[0.05] blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-900/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <IconOrb icon={Monitor} variant="gold" size="lg" className="mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            <GlowText variant="gold">Computer Use</GlowText>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Give the keyboard to your sovereign AI. It sees your screen, moves the cursor, and executes tasks — with your consent at every step.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard
            title="Screen Vision"
            description="Your character can see any window or screen you share, understanding UI elements in real time."
            icon={Eye}
            iconVariant="gold"
            glow="gold"
          />
          <FeatureCard
            title="Action Narration"
            description="Every click, scroll, and keystroke is announced before it happens. Nothing is hidden."
            icon={MousePointer}
            iconVariant="teal"
            glow="teal"
          />
          <FeatureCard
            title="Instant Stop"
            description="Reclaim control instantly with one button. Your sovereignty is never surrendered."
            icon={Shield}
            iconVariant="purple"
            glow="purple"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-10 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Browser automation and web research",
              "Document editing in any app",
              "Code execution in your local editor",
              "Email drafting with send confirmation",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Interface */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-14">
        {/* ── Header ───────────────────────────────────────────────────────── */}
        <div className="border-b" style={{ borderColor: BORDER }}>
          <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link
                href="/os"
                className="text-xs text-white/30 hover:text-white/60 transition"
              >
                OS
              </Link>
              <span className="text-white/20 text-xs">/</span>
              <span className="text-xs font-semibold text-white/70">Computer Use</span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  color:      GOLD,
                  border:     `1px solid rgba(201,168,76,0.2)`,
                }}
              >
                Beta
              </span>
            </div>
          </div>
        </div>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 block mb-4">
            MEOK OS — Computer Use
          </span>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-4 tracking-tight">
            Give the keyboard to{" "}
            <span style={{ color: GOLD }}>your sovereign AI.</span>
          </h2>
          <p className="text-base text-white/55 leading-relaxed max-w-lg">
            Your MEOK character can see your screen, move the cursor, type, and
            click — narrating every action before it takes it. You stay in full
            control and can stop at any moment.
          </p>
        </div>

        {/* ── Mode selector ────────────────────────────────────────────── */}
        {mode === "idle" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <button type="button"
              className="group relative flex flex-col items-start gap-3 p-6 rounded-2xl border text-left transition-all hover:border-[#c9a84c]/40 hover:bg-white/[0.02]"
              style={{ background: SURFACE, borderColor: BORDER }}
              onClick={() => setMode("demo")}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.08)", border: `1px solid rgba(201,168,76,0.15)` }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 5l8 5-8 5V5z" fill={GOLD} fillOpacity="0.8"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Try the demo</p>
                <p className="text-xs text-white/45 leading-relaxed">
                  Watch a simulated task sequence — no real API calls, no screen access needed.
                </p>
              </div>
              <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider" style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80" }}>
                No setup
              </span>
            </button>

            <button type="button"
              className="group relative flex flex-col items-start gap-3 p-6 rounded-2xl border text-left transition-all hover:border-[#c9a84c]/40 hover:bg-white/[0.02]"
              style={{ background: SURFACE, borderColor: BORDER }}
              onClick={() => setMode("live")}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.08)", border: `1px solid rgba(201,168,76,0.15)` }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="3" fill={GOLD}/>
                  <circle cx="10" cy="10" r="7" stroke={GOLD} strokeWidth="1.5" strokeOpacity="0.4"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Start live session</p>
                <p className="text-xs text-white/45 leading-relaxed">
                  Real tasks. Real screen control. Your character acts on your computer.
                </p>
              </div>
              <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider" style={{ background: "rgba(201,168,76,0.1)", color: GOLD }}>
                Screen access
              </span>
            </button>
          </div>
        )}

        {/* ── Reset link ───────────────────────────────────────────────── */}
        {mode !== "idle" && (
          <div className="flex items-center gap-4">
            <button type="button"
              className="text-xs text-white/30 hover:text-white/60 transition"
              onClick={() => { setMode("idle"); setTaskStopped(false); }}
            >
              ← Back to mode selection
            </button>
            {taskStopped && (
              <span className="text-xs text-[#4ade80]/80">
                Session ended — you have control.
              </span>
            )}
          </div>
        )}

        {/* ── Panel ────────────────────────────────────────────────────── */}
        {mode !== "idle" && (
          <div className="max-w-2xl">
            <ComputerUsePanel
              characterName="Aria"
              characterId="aria"
              demoMode={mode === "demo"}
              onStop={handleStop}
            />
          </div>
        )}

        {/* ── How to enable screen capture ─────────────────────────────── */}
        {mode === "live" && (
          <div
            className="max-w-2xl rounded-2xl border p-6"
            style={{ background: SURFACE, borderColor: BORDER }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-5 text-white/40">
              How to enable screen capture
            </p>
            <ol className="space-y-4">
              {SETUP_STEPS.map((step) => (
                <li key={step.num} className="flex gap-4">
                  <span
                    className="flex-shrink-0 font-mono text-xs font-black mt-0.5"
                    style={{ color: GOLD, minWidth: "24px" }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white/80 mb-0.5">{step.title}</p>
                    <p className="text-xs text-white/45 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div
              className="mt-6 pt-5 border-t"
              style={{ borderColor: BORDER }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-white/30">
                Browser compatibility
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Chrome 72+",   ok: true },
                  { label: "Edge 79+",     ok: true },
                  { label: "Firefox",      ok: false, note: "Partial — paste screenshot" },
                  { label: "Safari",       ok: false, note: "Paste screenshot" },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="text-[11px] px-3 py-1 rounded-full border"
                    style={{
                      borderColor: b.ok ? "rgba(74,222,128,0.3)" : "rgba(255,255,255,0.1)",
                      color:       b.ok ? "#4ade80"              : "rgba(255,255,255,0.35)",
                      background:  b.ok ? "rgba(74,222,128,0.05)": "transparent",
                    }}
                    title={b.note}
                  >
                    {b.label}
                    {!b.ok && b.note && <span className="ml-1 text-white/25">({b.note})</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Example tasks ────────────────────────────────────────────── */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-white/30">
            Example tasks
          </p>
          <ul className="space-y-2">
            {EXAMPLE_TASKS.map((task) => (
              <li key={task}>
                <button type="button"
                  className="text-left w-full text-sm text-white/55 px-4 py-3 rounded-xl border hover:border-white/20 hover:text-white/80 hover:bg-white/[0.02] transition group"
                  style={{ borderColor: BORDER }}
                  onClick={() => {
                    if (mode === "idle") setMode("live");
                  }}
                >
                  <span className="text-[#c9a84c]/40 group-hover:text-[#c9a84c]/70 mr-2 transition">→</span>
                  {task}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Maternal Covenant note ─────────────────────────────────────── */}
        <div
          className="max-w-2xl rounded-2xl border px-6 py-5 flex gap-4"
          style={{ background: `rgba(201,168,76,0.03)`, borderColor: `rgba(201,168,76,0.15)` }}
        >
          <div
            className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mt-0.5"
            style={{ background: "rgba(201,168,76,0.08)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2C5.79 2 4 3.79 4 6c0 2.76 4 8 4 8s4-5.24 4-8c0-2.21-1.79-4-4-4zm0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill={GOLD} fillOpacity="0.7"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold mb-1" style={{ color: GOLD }}>
              Governed by the Maternal Covenant
            </p>
            <p className="text-xs text-white/45 leading-relaxed">
              Your character will state its intent before every action, pause before anything
              potentially destructive, and score each action for care. A care score below 0.3
              triggers an automatic stop. You can reclaim control instantly at any time.
            </p>
            <Link
              href="/maternal-covenant"
              className="inline-block mt-2 text-xs font-semibold hover:opacity-80 transition"
              style={{ color: GOLD }}
            >
              Read the Maternal Covenant →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="px-6 py-16 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to delegate?</h2>
          <p className="text-white/50 mb-6">Your sovereign AI is waiting in the OS dashboard.</p>
          <Link
            href="/os"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#c9a84c] text-[#0d0c18] font-bold hover:bg-[#b8963e] transition-all"
          >
            Enter OS Mode <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
