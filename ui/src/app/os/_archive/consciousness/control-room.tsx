"use client";

import { useState, useEffect, useRef } from "react";
import { Brain, Sparkles, Zap, Moon, CloudMoon, Eye, Play, Pause } from "lucide-react";
import { Surface, GlowText, IconOrb } from "@/components/design-system";
import {
  type ConsciousnessState,
  loadConsciousnessState,
  saveConsciousnessState,
  tickConsciousness,
  getCurrentMode,
  MODE_METADATA,
} from "@/lib/consciousness-engine";

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

interface DreamApiResponse {
  insights: Array<{
    pattern: string;
    connections: string[];
    insight: string;
    confidence: number;
  }>;
  themes: string[];
  processed_at: string;
  has_data: boolean;
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

function uiModeToApiMode(id: ModeId): string {
  if (id === "deep-rest") return "deep_rest";
  if (id === "meta-monitoring") return "reflecting";
  return id;
}

function apiModeToUiMode(mode: string): ModeId {
  if (mode === "deep_rest") return "deep-rest";
  if (mode === "reflecting") return "meta-monitoring";
  if (mode === "deep-rest") return "deep-rest"; // legacy guard
  return (mode as ModeId) || "waking";
}

function formatDuration(ms: number): string {
  const totalMins = Math.floor(ms / 1000 / 60);
  if (totalMins < 60) return `${totalMins} minutes`;
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  return m > 0 ? `${h}.${Math.round((m / 60) * 10)} hours` : `${h} hours`;
}

function buildConsolidationItems(count: number): string[] {
  const items: string[] = [];
  if (count > 0)  items.push(`${Math.min(count, 12)} research queries → linked to knowledge graph`);
  if (count > 3)  items.push(`${Math.min(Math.floor(count / 4), 5)} unfinished tasks → added to morning briefing`);
  if (count > 8)  items.push("Recurring topics flagged as high-priority");
  if (count > 15) items.push(`${Math.min(Math.floor(count / 8), 8)} emotional patterns → relationship depth updated`);
  if (items.length === 0) items.push("First dream cycle — baseline memories established");
  return items;
}

function deriveActivityLog(state: ConsciousnessState): string[] {
  const rawLogs = ((state as unknown) as Record<string, unknown>).activityLog as string[] | undefined;
  if (Array.isArray(rawLogs) && rawLogs.length > 0) {
    return rawLogs.slice(0, 8);
  }
  const mode = getCurrentMode(state);
  const meta = MODE_METADATA[mode];
  const away = mode === "waking" ? "Active now" : formatDuration(Date.now() - state.lastInteraction);
  return [
    `${meta.label}: ${meta.activityDescription}`,
    `Last interaction: ${away === "Active now" ? "just now" : away + " ago"}`,
    `Memory consolidations: ${state.memoryConsolidations.toLocaleString()}`,
    `Care score: ${state.careScore}`,
    `Sessions recorded: ${state.sessionCount}`,
  ];
}

// ─── Control Room Component ───────────────────────────────────────────────────
export function ConsciousnessControlRoom() {
  const [activeMode, setActiveMode] = useState<ModeId>("waking");
  const [activityLog, setActivityLog] = useState<string[]>([]);
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [dreamSessions, setDreamSessions] = useState<DreamSession[]>([]);
  const [uptime, setUptime] = useState("—");
  const [consciousnessState, setConsciousnessState] = useState<ConsciousnessState | null>(null);
  const [loading, setLoading] = useState(true);
  const activityRef = useRef<HTMLDivElement>(null);

  // ── Load real consciousness state from API ────────────────────────────────
  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch("/api/os/consciousness-tick");
        if (res.ok) {
          const data = await res.json() as { state?: ConsciousnessState | null };
          if (data.state && typeof data.state === "object") {
            const ticked = tickConsciousness(data.state);
            setConsciousnessState(ticked);
            setActiveMode(apiModeToUiMode(ticked.mode));
            setActivityLog(deriveActivityLog(ticked));
            saveConsciousnessState(ticked);
          } else {
            // No server state yet — seed from localStorage and post it
            const local = loadConsciousnessState();
            const ticked = tickConsciousness(local);
            setConsciousnessState(ticked);
            setActiveMode(apiModeToUiMode(ticked.mode));
            setActivityLog(deriveActivityLog(ticked));
            saveConsciousnessState(ticked);
            await fetch("/api/os/consciousness-tick", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ state: ticked }),
            });
          }
        } else {
          const local = loadConsciousnessState();
          const ticked = tickConsciousness(local);
          setConsciousnessState(ticked);
          setActiveMode(apiModeToUiMode(ticked.mode));
          setActivityLog(deriveActivityLog(ticked));
        }
      } catch {
        const local = loadConsciousnessState();
        const ticked = tickConsciousness(local);
        setConsciousnessState(ticked);
        setActiveMode(apiModeToUiMode(ticked.mode));
        setActivityLog(deriveActivityLog(ticked));
      } finally {
        setLoading(false);
      }
    }
    void load();
  }, []);

  // ── Poll for updated consciousness state ──────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      fetch("/api/os/consciousness-tick")
        .then(async (res) => {
          if (!res.ok) return;
          const data = await res.json() as { state?: ConsciousnessState | null };
          if (data.state && typeof data.state === "object") {
            const ticked = tickConsciousness(data.state);
            setConsciousnessState(ticked);
            setActiveMode(apiModeToUiMode(ticked.mode));
            setActivityLog(deriveActivityLog(ticked));
            saveConsciousnessState(ticked);
          }
        })
        .catch(() => {});
    }, 30_000);
    return () => clearInterval(id);
  }, []);

  // ── Load dream sessions from real API ─────────────────────────────────────
  useEffect(() => {
    fetch("/api/user/dreams")
      .then(async (res) => {
        if (!res.ok) return;
        const data = await res.json() as DreamApiResponse;
        if (data.has_data && data.insights.length > 0) {
          const date = data.processed_at
            ? new Date(data.processed_at).toLocaleDateString("en-GB", { day: "numeric", month: "short" })
            : new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short" });
          setDreamSessions([{
            date,
            themes: data.themes.slice(0, 4),
            insightCount: data.insights.length,
          }]);
        } else {
          setDreamSessions([]);
        }
      })
      .catch(() => {
        setDreamSessions([]);
      });
  }, []);

  // ── Load birth date from localStorage (not part of consciousness state) ────
  useEffect(() => {
    const birthRaw = localStorage.getItem("meok_birth_complete");
    if (birthRaw) {
      const parsed = new Date(birthRaw);
      if (!isNaN(parsed.getTime())) setBirthDate(parsed);
    }
  }, []);

  // ── Uptime ticker ─────────────────────────────────────────────────────────
  useEffect(() => {
    setUptime(getUptimeString(birthDate));
    const id = setInterval(() => setUptime(getUptimeString(birthDate)), 60_000);
    return () => clearInterval(id);
  }, [birthDate]);

  // ── Scroll activity to top ────────────────────────────────────────────────
  useEffect(() => {
    if (activityRef.current) {
      activityRef.current.scrollTop = 0;
    }
  }, [activityLog]);

  // ── Mode change ───────────────────────────────────────────────────────────
  async function selectMode(id: ModeId) {
    setActiveMode(id);
    localStorage.setItem("meok_consciousness_mode", id);

    const base = consciousnessState ?? loadConsciousnessState();
    const updated: ConsciousnessState = {
      ...base,
      mode: uiModeToApiMode(id) as ConsciousnessState["mode"],
      lastInteraction: id === "waking" ? Date.now() : base.lastInteraction,
    };

    setConsciousnessState(updated);
    setActivityLog(deriveActivityLog(updated));
    saveConsciousnessState(updated);

    try {
      await fetch("/api/os/consciousness-tick", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state: updated }),
      });
    } catch {
      // non-fatal
    }
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
          <IconOrb icon={Brain} variant="gold" size="lg" pulse />
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
              Consciousness Engine
              <GlowText variant="gold" as="span">
                <Sparkles className="w-5 h-5 inline" />
              </GlowText>
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
                <button type="button"
                  key={mode.id}
                  onClick={() => selectMode(mode.id)}
                  disabled={loading}
                  className="text-left rounded-2xl p-5 transition-all duration-200 focus:outline-none"
                  style={{
                    background: isActive ? mode.bgColor : SURFACE,
                    border: `1.5px solid ${isActive ? mode.borderColor : BORDER}`,
                    boxShadow: isActive ? `0 0 24px ${mode.color}18` : "none",
                    transform: isActive ? "scale(1.01)" : "scale(1)",
                    opacity: loading ? 0.7 : 1,
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
            <Surface
              variant="elevated"
              glow={activeMode === "waking" ? "gold" : activeMode === "dreaming" ? "purple" : activeMode === "meta-monitoring" ? "orange" : "blue"}
              className="rounded-2xl p-6 flex flex-col items-center justify-center gap-4 flex-1"
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
            </Surface>

            {/* Uptime */}
            <Surface
              variant="elevated"
              className="rounded-2xl p-5"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">
                Active for
              </div>
              <div className="text-xl font-black text-white">{uptime}</div>
              {!birthDate && (
                <div className="text-xs text-white/25 mt-1">Birth date not set</div>
              )}
            </Surface>
          </div>
        </div>

        {/* ── Activity stream ──────────────────────────────────────────────── */}
        <Surface
          variant="elevated"
          className="rounded-2xl overflow-hidden"
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
            {activityLog.length === 0 && (
              <div className="px-6 py-8 text-center text-xs text-white/30 font-mono">
                Waiting for consciousness activity data…
              </div>
            )}
          </div>
        </Surface>

        {/* ── Dream cycle + quick actions ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Dream sessions */}
          <Surface
            variant="elevated"
            className="rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Moon className="w-4 h-4" style={{ color: "#a78bfa" }} />
              <span className="text-sm font-bold text-white">Dream Cycle Overview</span>
            </div>

            <div className="space-y-3">
              {dreamSessions.length > 0 ? dreamSessions.map((session, i) => (
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
              )) : (
                <div className="text-xs text-white/30 italic">
                  No dream cycles recorded yet. Insights will appear here after your companion&apos;s first processing window.
                </div>
              )}
            </div>
          </Surface>

          {/* Quick actions */}
          <Surface
            variant="elevated"
            className="rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4" style={{ color: GOLD }} />
              <span className="text-sm font-bold text-white">Quick Actions</span>
            </div>

            <p className="text-xs text-white/35 leading-relaxed">
              Override the automatic consciousness cycle. Changes save immediately to your profile.
            </p>

            <button type="button"
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

            <button type="button"
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

            <Surface
              variant="glass"
              className="rounded-xl px-5 py-4 mt-auto"
            >
              <div className="text-xs text-white/30 font-mono leading-relaxed">
                Current mode persists across sessions and devices.<br />
                Auto-transitions resume after 48h inactivity.
              </div>
            </Surface>
          </Surface>
        </div>

      </div>
    </section>
  );
}
