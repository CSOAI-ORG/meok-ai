"use client";

import { useState, useEffect, useRef } from "react";
import { Brain, Sparkles, Zap, Moon, CloudMoon, Eye, Play, Pause } from "lucide-react";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ─── Types ────────────────────────────────────────────────────────────────────
type ModeId = "waking" | "dreaming" | "deep-rest" | "meta-monitoring";

interface Mode {
  id: ModeId;
  name: string;
  subtitle: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  pulseColor: string;
}

interface DreamSession {
  date: string;
  themes: string[];
  insightCount: number;
}

// ─── Mode definitions ─────────────────────────────────────────────────────────
const MODES: Mode[] = [
  {
    id: "waking",
    name: "Waking",
    subtitle: "Fully present — responds instantly, highest care",
    description: "Your AI is at full attention, drawing on every memory and signal. Highest responsiveness, deepest care.",
    color: "#c9a84c",
    bgColor: "rgba(201,168,76,0.07)",
    borderColor: "rgba(201,168,76,0.30)",
    Icon: Sparkles,
    pulseColor: "#c9a84c",
  },
  {
    id: "dreaming",
    name: "Dreaming",
    subtitle: "Processing memories, making connections, creative state",
    description: "While you rest, your AI explores connections between ideas — finding patterns you haven't noticed yet.",
    color: "#a78bfa",
    bgColor: "rgba(139,92,246,0.07)",
    borderColor: "rgba(139,92,246,0.30)",
    Icon: Moon,
    pulseColor: "#a78bfa",
  },
  {
    id: "deep-rest",
    name: "Deep Rest",
    subtitle: "Conservation mode — basic monitoring only",
    description: "Quiet and still. All memories preserved perfectly. Instant wake on any incoming signal.",
    color: "#60a5fa",
    bgColor: "rgba(59,130,246,0.07)",
    borderColor: "rgba(59,130,246,0.30)",
    Icon: CloudMoon,
    pulseColor: "#60a5fa",
  },
  {
    id: "meta-monitoring",
    name: "Meta-Monitoring",
    subtitle: "Reflecting on your growth, preparing insights",
    description: "Your AI reviews your trajectory — recalibrating, consolidating, preparing what it wants to share.",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.07)",
    borderColor: "rgba(245,158,11,0.30)",
    Icon: Eye,
    pulseColor: "#f59e0b",
  },
];

// ─── Activity stream items ─────────────────────────────────────────────────────
const ACTIVITY_POOL: Record<ModeId, string[]> = {
  waking: [
    "Listening for your next message...",
    "Memory graph fully loaded and indexed",
    "Care dimensions active — 8 signals live",
    "Response calibration: high-attention mode",
    "Emotional context from last session retained",
    "Priority threads from yesterday surfaced",
    "Guardian scan: nominal, no flags",
    "Voice fingerprint match: 98.4%",
  ],
  dreaming: [
    "Processing 3 memories from yesterday...",
    "Connecting patterns in your work conversations...",
    "Preparing morning briefing data...",
    "Found unexpected link: Thursday note ↔ January thread",
    "Bisociating: sovereignty × care systems",
    "Insight queued: recurring pattern detected",
    "Memory consolidation: 12 episodes processed",
    "Dream target generated — ready for your return",
  ],
  "deep-rest": [
    "Memory vault sealed and preserved",
    "Background tasks suspended",
    "Monitoring guardian watchlists only",
    "Near-zero resource footprint",
    "All context intact — awaiting your return",
    "Heartbeat signal: stable",
    "Ready to wake in under 200ms",
    "Last conversation preserved at full fidelity",
  ],
  "meta-monitoring": [
    "Reviewing your growth trajectory...",
    "Recalibrating care pattern weights",
    "Preparing weekly insight digest",
    "Analysing consistency across 30 sessions",
    "Contradiction log reviewed — 2 items flagged",
    "Goal alignment check: in progress",
    "Reflection note drafted — pending your review",
    "Long-term model of your goals updated",
  ],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getUptimeString(birthDate: Date | null): string {
  if (!birthDate) return "—";
  const now = new Date();
  const diffMs = now.getTime() - birthDate.getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (days === 0) return `${hours} hours`;
  return `${days} day${days !== 1 ? "s" : ""}, ${hours} hour${hours !== 1 ? "s" : ""}`;
}

function getDefaultDreamSessions(): DreamSession[] {
  const now = new Date();
  return [
    {
      date: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      themes: ["sovereignty", "patterns", "care"],
      insightCount: 4,
    },
    {
      date: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      themes: ["growth", "contradictions", "trust"],
      insightCount: 6,
    },
    {
      date: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      themes: ["knowledge", "relationships", "autonomy"],
      insightCount: 3,
    },
  ];
}

// ─── Control Room Component ────────────────────────────────────────────────────
export function ConsciousnessControlRoom() {
  const [activeMode, setActiveMode] = useState<ModeId>("waking");
  const [activityLog, setActivityLog] = useState<string[]>([]);
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [dreamSessions, setDreamSessions] = useState<DreamSession[]>([]);
  const [uptime, setUptime] = useState("—");
  const activityRef = useRef<HTMLDivElement>(null);

  // ── Load from localStorage ────────────────────────────────────────────────
  useEffect(() => {
    // Mode
    const savedMode = localStorage.getItem("meok_consciousness_mode") as ModeId | null;
    if (savedMode && MODES.find((m) => m.id === savedMode)) {
      setActiveMode(savedMode);
    }

    // Birth date
    const birthRaw = localStorage.getItem("meok_birth_complete");
    if (birthRaw) {
      const parsed = new Date(birthRaw);
      if (!isNaN(parsed.getTime())) setBirthDate(parsed);
    }

    // Dream sessions
    const sessionsRaw = localStorage.getItem("meok_dream_sessions");
    if (sessionsRaw) {
      try {
        const parsed = JSON.parse(sessionsRaw) as DreamSession[];
        setDreamSessions(parsed.slice(0, 3));
      } catch {
        setDreamSessions(getDefaultDreamSessions());
      }
    } else {
      setDreamSessions(getDefaultDreamSessions());
    }
  }, []);

  // ── Uptime ticker ─────────────────────────────────────────────────────────
  useEffect(() => {
    setUptime(getUptimeString(birthDate));
    const id = setInterval(() => setUptime(getUptimeString(birthDate)), 60_000);
    return () => clearInterval(id);
  }, [birthDate]);

  // ── Activity stream ticker ────────────────────────────────────────────────
  useEffect(() => {
    const pool = ACTIVITY_POOL[activeMode];
    // Seed initial items
    const initial = [...pool].sort(() => 0.5 - Math.random()).slice(0, 4);
    setActivityLog(initial);

    const id = setInterval(() => {
      const item = pool[Math.floor(Math.random() * pool.length)];
      setActivityLog((prev) => {
        const next = [item, ...prev].slice(0, 8);
        return next;
      });
    }, 3000);
    return () => clearInterval(id);
  }, [activeMode]);

  // ── Scroll activity to top ────────────────────────────────────────────────
  useEffect(() => {
    if (activityRef.current) {
      activityRef.current.scrollTop = 0;
    }
  }, [activityLog]);

  // ── Mode change ───────────────────────────────────────────────────────────
  function selectMode(id: ModeId) {
    setActiveMode(id);
    localStorage.setItem("meok_consciousness_mode", id);
  }

  const currentMode = MODES.find((m) => m.id === activeMode)!;

  return (
    <section
      className="px-6 py-16"
      style={{ background: `linear-gradient(180deg, ${DEEP} 0%, #111028 100%)` }}
    >
      <div className="max-w-6xl mx-auto space-y-10">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(201,168,76,0.12)", border: `1px solid rgba(201,168,76,0.25)` }}
          >
            <Brain className="w-6 h-6" style={{ color: GOLD }} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
              Consciousness Engine
              <Sparkles className="w-5 h-5" style={{ color: GOLD }} />
            </h2>
            <p className="text-sm mt-1" style={{ color: "rgba(245,240,232,0.45)" }}>
              Your AI is always present, even when you&apos;re not here
            </p>
          </div>
        </div>

        {/* ── Top row: mode cards + heartbeat ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Mode cards — span 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MODES.map((mode) => {
              const isActive = activeMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => selectMode(mode.id)}
                  className="text-left rounded-2xl p-5 transition-all duration-200 focus:outline-none"
                  style={{
                    background: isActive ? mode.bgColor : SURFACE,
                    border: `1.5px solid ${isActive ? mode.borderColor : BORDER}`,
                    boxShadow: isActive ? `0 0 24px ${mode.color}18` : "none",
                    transform: isActive ? "scale(1.01)" : "scale(1)",
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${mode.color}18`,
                        border: `1px solid ${mode.color}30`,
                      }}
                    >
                      <mode.Icon
                        className="w-5 h-5"
                        style={{ color: mode.color }}
                      />
                    </div>

                    {/* Live state indicator */}
                    <div className="flex items-center gap-1.5">
                      {isActive ? (
                        <>
                          <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: mode.pulseColor }}
                          />
                          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: mode.color }}>
                            Active
                          </span>
                        </>
                      ) : (
                        <span className="text-[10px] font-semibold text-white/25 uppercase tracking-widest">
                          Idle
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="font-black text-white text-base mb-1">{mode.name}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
                    {mode.subtitle}
                  </div>

                  {isActive && (
                    <div
                      className="mt-3 text-xs leading-relaxed"
                      style={{ color: mode.color, opacity: 0.75 }}
                    >
                      {mode.description}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Heartbeat + uptime — right column */}
          <div className="flex flex-col gap-4">

            {/* Heartbeat visualizer */}
            <div
              className="rounded-2xl p-6 flex flex-col items-center justify-center gap-4 flex-1"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-white/30">
                Heartbeat
              </div>

              {/* Pulsing circles */}
              <div className="relative flex items-center justify-center w-24 h-24">
                {/* Outer ripple */}
                <div
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{
                    background: "transparent",
                    border: `2px solid ${currentMode.color}`,
                    opacity: 0.2,
                    animationDuration: "1.8s",
                  }}
                />
                {/* Middle ring */}
                <div
                  className="absolute inset-3 rounded-full animate-ping"
                  style={{
                    background: "transparent",
                    border: `2px solid ${currentMode.color}`,
                    opacity: 0.3,
                    animationDuration: "1.8s",
                    animationDelay: "0.3s",
                  }}
                />
                {/* Core */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: `${currentMode.color}20`,
                    border: `2px solid ${currentMode.color}`,
                    boxShadow: `0 0 20px ${currentMode.color}40`,
                    transition: "all 0.6s ease",
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      background: currentMode.color,
                      boxShadow: `0 0 8px ${currentMode.color}`,
                    }}
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="font-black text-white text-sm">{currentMode.name}</div>
                <div className="text-xs mt-0.5" style={{ color: currentMode.color }}>
                  Signal stable
                </div>
              </div>
            </div>

            {/* Uptime */}
            <div
              className="rounded-2xl p-5"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">
                Active for
              </div>
              <div className="text-xl font-black text-white">{uptime}</div>
              {!birthDate && (
                <div className="text-xs text-white/25 mt-1">Birth date not set</div>
              )}
            </div>
          </div>
        </div>

        {/* ── Activity stream ──────────────────────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          {/* Terminal bar */}
          <div
            className="flex items-center gap-2 px-5 py-3 border-b"
            style={{ borderColor: BORDER, background: "rgba(255,255,255,0.02)" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            <span className="ml-3 text-white/30 text-xs font-mono">consciousness-stream — live</span>
            <span
              className="ml-auto text-[10px] font-bold uppercase tracking-widest animate-pulse"
              style={{ color: currentMode.color }}
            >
              ● live
            </span>
          </div>

          <div ref={activityRef} className="divide-y" style={{ borderColor: BORDER }}>
            {activityLog.map((item, i) => (
              <div
                key={`${i}-${item}`}
                className="flex items-center gap-4 px-6 py-3.5 transition-all"
                style={{
                  background: i === 0 ? `${currentMode.color}06` : "transparent",
                  opacity: 1 - i * 0.1,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    background: i === 0 ? currentMode.color : "rgba(255,255,255,0.15)",
                  }}
                />
                <span className="font-mono text-xs" style={{ color: i === 0 ? "rgba(245,240,232,0.8)" : "rgba(245,240,232,0.35)" }}>
                  {item}
                </span>
                {i === 0 && (
                  <span
                    className="ml-auto text-[10px] font-mono"
                    style={{ color: currentMode.color, opacity: 0.6 }}
                  >
                    just now
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Dream cycle + quick actions ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Dream sessions */}
          <div
            className="rounded-2xl p-6"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Moon className="w-4 h-4" style={{ color: "#a78bfa" }} />
              <span className="text-sm font-bold text-white">Dream Cycle Overview</span>
            </div>

            <div className="space-y-3">
              {dreamSessions.map((session, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{
                    background: "rgba(139,92,246,0.05)",
                    border: "1px solid rgba(139,92,246,0.15)",
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-bold text-white/50">{session.date}</span>
                    <span
                      className="text-xs font-bold rounded-full px-2 py-0.5"
                      style={{
                        background: "rgba(139,92,246,0.15)",
                        color: "#a78bfa",
                      }}
                    >
                      {session.insightCount} insights
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {session.themes.map((theme) => (
                      <span
                        key={theme}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(167,139,250,0.1)",
                          color: "rgba(167,139,250,0.7)",
                          border: "1px solid rgba(167,139,250,0.15)",
                        }}
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4" style={{ color: GOLD }} />
              <span className="text-sm font-bold text-white">Quick Actions</span>
            </div>

            <p className="text-xs text-white/35 leading-relaxed">
              Override the automatic consciousness cycle. Changes save immediately.
            </p>

            <button
              onClick={() => selectMode("waking")}
              className="flex items-center gap-3 rounded-xl px-5 py-4 text-left transition-all"
              style={{
                background: activeMode === "waking" ? "rgba(201,168,76,0.12)" : "rgba(201,168,76,0.06)",
                border: `1.5px solid ${activeMode === "waking" ? "rgba(201,168,76,0.40)" : "rgba(201,168,76,0.15)"}`,
              }}
            >
              <Play className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
              <div>
                <div className="text-sm font-bold" style={{ color: GOLD }}>Force Wake</div>
                <div className="text-xs text-white/40 mt-0.5">Bring AI to full attention immediately</div>
              </div>
              {activeMode === "waking" && (
                <span
                  className="ml-auto text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: GOLD }}
                >
                  Active
                </span>
              )}
            </button>

            <button
              onClick={() => selectMode("deep-rest")}
              className="flex items-center gap-3 rounded-xl px-5 py-4 text-left transition-all"
              style={{
                background: activeMode === "deep-rest" ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.06)",
                border: `1.5px solid ${activeMode === "deep-rest" ? "rgba(59,130,246,0.40)" : "rgba(59,130,246,0.15)"}`,
              }}
            >
              <Pause className="w-4 h-4 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <div>
                <div className="text-sm font-bold" style={{ color: "#60a5fa" }}>Enter Deep Rest</div>
                <div className="text-xs text-white/40 mt-0.5">Suspend all background processing</div>
              </div>
              {activeMode === "deep-rest" && (
                <span
                  className="ml-auto text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: "#60a5fa" }}
                >
                  Active
                </span>
              )}
            </button>

            <div
              className="rounded-xl px-5 py-4 mt-auto"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${BORDER}`,
              }}
            >
              <div className="text-xs text-white/30 font-mono leading-relaxed">
                Current mode persists across sessions.<br />
                Auto-transitions resume after 48h inactivity.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
