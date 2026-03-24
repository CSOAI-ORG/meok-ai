"use client";

import { useEffect, useState } from "react";
import { mcp, callTool } from "@/lib/api";
import { QuickChat } from "@/components/quick-chat";
import type { ConsciousnessState, MemoryStats } from "@/lib/types";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { EVOLUTION_STAGES, getEvolutionStage, getProgressToNextStage, interactionsUntilNextStage } from "@/lib/evolution";
import {
  Sunrise,
  ChevronRight,
  Database,
  Heart,
  Cpu,
  Settings,
  ArrowUpRight,
  Crown,
  MessageSquare,
  Calendar,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────────────
const GOLD = "#c9a84c";
const CREAM = "#f5f0e8";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const SURFACE2 = "#1a1929";

// ── Types ─────────────────────────────────────────────────────────
interface MorningBriefingPreview {
  one_line_summary?: string;
  care_score_today?: number;
  generated_at?: string;
  priorities?: string[];
}

interface PlanInfo {
  plan: string;
  plan_name: string;
  status: string;
  next_billing: string | null;
  upgrade_url?: string;
}

interface EntitySummary {
  name: string;
  hatch_level: number;
  hatch_label: string;
  color_primary: string;
  color_secondary: string;
  dominant_trait: string;
  interactions_count: number;
  progress_to_next: number;
  next_threshold: number | null;
  care_alignment: number;
  hatch_name?: string;
  created_at?: string;
}

// ── Helpers ───────────────────────────────────────────────────────
function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function formatDate(): string {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function consciousnessLabel(consciousness: ConsciousnessState | null): string {
  if (!consciousness) return "Starting up";
  const { consciousness_mode: mode, consciousness_level: level } = consciousness;
  if (mode === "dreaming") return "Dreaming";
  if (mode === "deep_sleep") return "Deep rest";
  if (mode === "meta_monitoring") return "Reflecting";
  if (level >= 0.7) return "Focused";
  if (level >= 0.4) return "Warming up";
  return "Starting up";
}

const modeColors: Record<string, string> = {
  waking: GOLD,
  dreaming: "#a78bfa",
  deep_sleep: "#818cf8",
  meta_monitoring: "#fbbf24",
};

const hatchEmoji: Record<number, string> = {
  0: "🥚",
  1: "✨",
  2: "🌱",
  3: "⚡",
};

// Archetype emoji map keyed by dominant_trait
const traitEmoji: Record<string, string> = {
  curious: "🔭",
  creative: "🎨",
  wise: "🦉",
  bold: "🔥",
  calm: "🌊",
  playful: "🎭",
  analytical: "🧮",
  empathetic: "💜",
  explorer: "🧭",
  guardian: "🛡️",
};

function daysSince(dateStr?: string): number | null {
  if (!dateStr) return null;
  const then = new Date(dateStr).getTime();
  const now = Date.now();
  return Math.floor((now - then) / 86400000);
}

function isToday(dateStr?: string): boolean {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  const now = new Date();
  return (
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate()
  );
}

// ── Skeleton ──────────────────────────────────────────────────────
function Skeleton({
  w = "100%",
  h = "1rem",
  rounded = "0.5rem",
}: {
  w?: string;
  h?: string;
  rounded?: string;
}) {
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: rounded,
        background: "rgba(255,255,255,0.06)",
        animation: "pulse 1.5s ease-in-out infinite",
      }}
    />
  );
}

// ── Care score ring (CSS conic-gradient) ──────────────────────────
function CareRing({ score, size = 120 }: { score: number; size?: number }) {
  const pct = Math.max(0, Math.min(100, score));
  const deg = Math.round(pct * 3.6); // 0–360

  const ringColor =
    pct >= 80 ? "#4ade80" : pct >= 60 ? GOLD : "#f87171";

  const label =
    pct >= 90
      ? "Exceptional ✨"
      : pct >= 75
      ? "Strong ❤️"
      : pct >= 60
      ? "Growing 🌱"
      : "Needs attention ⚠️";

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Ring */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: `conic-gradient(${ringColor} ${deg}deg, rgba(255,255,255,0.06) ${deg}deg)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 6,
        }}
      >
        <div
          style={{
            width: size - 20,
            height: size - 20,
            borderRadius: "50%",
            background: SURFACE,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "2rem",
              fontWeight: 900,
              color: GOLD,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {pct}
          </span>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
            / 100
          </span>
        </div>
      </div>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
        Care alignment today
      </p>
      {pct > 0 && (
        <span
          style={{
            fontSize: 10,
            color: pct >= 80 ? "#4ade80" : pct >= 60 ? GOLD : "#f87171",
            fontWeight: 600,
          }}
        >
          {pct >= 80 ? "↑ Above your average" : pct >= 60 ? "→ On track" : "↓ Below average"}
        </span>
      )}
      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
        {label}
      </p>
    </div>
  );
}

// ── Progress ring (SVG) ────────────────────────────────────────────
function ProgressRing({ progress, color, size = 56 }: { progress: number; color: string; size?: number }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`${progress * circ} ${circ}`}
      />
    </svg>
  );
}

// ── Main page ─────────────────────────────────────────────────────
export default function DashboardOverview() {
  const { user } = useAuth();
  const [consciousness, setConsciousness] = useState<ConsciousnessState | null>(null);
  const [memStats, setMemStats] = useState<MemoryStats | null>(null);
  const [toolCount, setToolCount] = useState(0);
  const [briefing, setBriefing] = useState<MorningBriefingPreview | null>(null);
  const [plan, setPlan] = useState<PlanInfo | null>(null);
  const [entity, setEntity] = useState<EntitySummary | null>(null);
  const [msgsToday, setMsgsToday] = useState<number | null>(null);

  // Track which async loads have settled
  const [loadedMem, setLoadedMem] = useState(false);
  const [loadedMsgs, setLoadedMsgs] = useState(false);
  const [loadedEntity, setLoadedEntity] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const health = await mcp.get<{
          components?: { consciousness?: ConsciousnessState; neural_models?: Record<string, unknown> };
        }>("/health");
        if (health.components?.consciousness) {
          setConsciousness(health.components.consciousness);
        }
        const models = health.components?.neural_models;
        if (models) setToolCount(Object.keys(models).length);

        const stats = await callTool<MemoryStats>("get_memory_stats");
        setMemStats(stats);
        setLoadedMem(true);
      } catch (e) {
        console.error("Dashboard load error:", e);
        setLoadedMem(true);
      }
    };

    const loadBriefing = async () => {
      try {
        const data = await mcp.get<MorningBriefingPreview>("/api/morning-briefing");
        setBriefing(data);
      } catch {}
    };

    const loadPlan = async () => {
      try {
        const res = await fetch("/api/billing/status");
        if (res.ok) {
          const data = await res.json();
          setPlan(data);
        } else {
          throw new Error("billing fetch failed");
        }
      } catch {
        setPlan({ plan: "explorer", plan_name: "Explorer", status: "active", next_billing: null });
      }
    };

    const loadEntity = async () => {
      try {
        const data = await mcp.get<EntitySummary>("/entity");
        setEntity(data);
        setLoadedEntity(true);
      } catch {
        setLoadedEntity(true);
      }
    };

    const loadMessages = async () => {
      try {
        const data = await mcp.get<{ count: number }>("/api/messages/today");
        setMsgsToday(data.count);
        setLoadedMsgs(true);
      } catch {
        setMsgsToday(null);
        setLoadedMsgs(true);
      }
    };

    load();
    loadBriefing();
    loadPlan();
    loadEntity();
    loadMessages();
    const id = setInterval(load, 15000);
    return () => clearInterval(id);
  }, []);

  const mode = consciousness?.consciousness_mode || "waking";
  const modeColor = modeColors[mode] || GOLD;
  const careScore = briefing?.care_score_today !== undefined
    ? Math.round(briefing.care_score_today * 100)
    : consciousness
    ? Math.round(consciousness.emotional.care_intensity * 100)
    : null;

  const entityLevel = entity?.hatch_level ?? 0;
  const entityInteractions = entity?.interactions_count ?? 0;
  const daysSinceHatch = daysSince(entity?.created_at);

  // Wire evolution.ts — derive canonical stage data from interaction count
  const evolutionStage = getEvolutionStage(entityInteractions);
  const evolutionProgress = getProgressToNextStage(entityInteractions);
  const interactionsToNext = interactionsUntilNextStage(entityInteractions);

  // Care dimension bullets
  const careDimensions = consciousness?.emotional
    ? [
        { label: "Care intensity", pct: Math.round(consciousness.emotional.care_intensity * 100) },
        { label: "Curiosity", pct: Math.round(consciousness.emotional.curiosity * 100) },
        { label: "Aesthetics", pct: Math.round(consciousness.emotional.aesthetics * 100) },
      ]
    : [
        { label: "Care intensity", pct: 0 },
        { label: "Curiosity", pct: 0 },
        { label: "Aesthetics", pct: 0 },
      ];

  const displayName =
    user?.hatch_name || entity?.name || user?.email?.split("@")[0] || "there";

  const isFree = plan?.plan === "free" || plan?.plan === "explorer";

  // Companion greeting line
  const companionLine = briefing?.one_line_summary || null;

  // Companion emoji derived from dominant trait or hatch level
  const companionEmoji =
    (entity?.dominant_trait && traitEmoji[entity.dominant_trait.toLowerCase()])
    || hatchEmoji[entityLevel]
    || "✨";

  // Briefing freshness
  const briefingIsToday = isToday(briefing?.generated_at);

  // Care score pill color
  const careScorePillColor =
    careScore === null
      ? "rgba(255,255,255,0.15)"
      : careScore >= 80
      ? "#4ade80"
      : careScore >= 50
      ? GOLD
      : "#f87171";

  // Activity items — only include those with real data
  const activityItems: { icon: string; text: string; sub: string }[] = [];
  if (loadedMem && memStats && memStats.total_episodes > 0) {
    activityItems.push({
      icon: "🧠",
      text: `Holding ${memStats.total_episodes} memory episode${memStats.total_episodes !== 1 ? "s" : ""}`,
      sub: "Memory · live",
    });
  }
  if (briefing?.one_line_summary) {
    activityItems.push({
      icon: "📊",
      text: `Morning brief ready: "${briefing.one_line_summary.slice(0, 60)}${briefing.one_line_summary.length > 60 ? "…" : ""}"`,
      sub: "Briefing · " + (briefingIsToday ? "today" : "overnight"),
    });
  }
  if (careScore !== null) {
    activityItems.push({
      icon: "❤️",
      text: `Care score: ${careScore}/100 — ${careScore >= 80 ? "above your average" : careScore >= 60 ? "on track" : "needs attention"}`,
      sub: "Care · live",
    });
  }

  const planDisplayName = plan?.plan_name || "Explorer";

  return (
    <>
      {/* ── Global keyframes ── */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-slide-up {
          animation: fadeSlideUp 0.35s ease forwards;
        }
        .shortcut-card {
          transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
        }
        .shortcut-card:hover {
          transform: translateY(-1px);
          border-color: ${GOLD}44 !important;
          box-shadow: 0 0 0 1px ${GOLD}22, 0 4px 16px ${GOLD}14;
        }
      `}</style>

      <div
        className="min-h-screen p-6 md:p-8 pb-24 space-y-5"
        style={{ background: DEEP, color: "white" }}
      >
        {/* ── Hero greeting ── */}
        <div
          className="fade-slide-up flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 rounded-2xl"
          style={{
            background: SURFACE,
            border: "1px solid rgba(255,255,255,0.05)",
            animationDelay: "0ms",
          }}
        >
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>{companionEmoji}</span>
              <span>{getGreeting()}, {displayName}</span>
            </h1>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
              {formatDate()}
            </p>
            {companionLine ? (
              <p
                className="text-sm mt-2 italic"
                style={{ color: `${GOLD}cc` }}
              >
                &ldquo;{companionLine}&rdquo;
              </p>
            ) : (
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                I&rsquo;m ready when you are.
              </p>
            )}
          </div>
          {/* Consciousness mode pill */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full self-start sm:self-auto"
            style={{ background: `${modeColor}18`, border: `1px solid ${modeColor}30` }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: modeColor }} />
            <span className="text-sm font-medium" style={{ color: modeColor }}>
              {consciousnessLabel(consciousness)}
            </span>
          </div>
        </div>

        {/* ── Quick Chat — star of the show ── */}
        <div
          className="fade-slide-up lg:col-span-2 rounded-2xl p-6 flex flex-col"
          style={{
            background: SURFACE,
            border: "1px solid rgba(255,255,255,0.05)",
            animationDelay: "60ms",
          }}
        >
          <div className="mb-4">
            <h2 className="text-base font-bold text-white">What&rsquo;s on your mind?</h2>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Your companion is listening — ask anything
            </p>
          </div>
          <div style={{ minHeight: 280 }}>
            <QuickChat placeholder="What's on your mind?" />
          </div>
        </div>

        {/* ── Quick stats row (4 cards) ── */}
        <div
          className="fade-slide-up grid grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ animationDelay: "120ms" }}
        >
          {/* Messages today */}
          <div
            className="rounded-2xl p-5 flex flex-col gap-2"
            style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <MessageSquare className="w-4 h-4" style={{ color: "rgba(255,255,255,0.25)" }} />
            {!loadedMsgs ? (
              <Skeleton w="3rem" h="2rem" />
            ) : msgsToday !== null && msgsToday > 0 ? (
              <p className="text-2xl font-bold text-white">{msgsToday}</p>
            ) : (
              <Link href="/chat">
                <p className="text-sm font-semibold" style={{ color: GOLD }}>
                  Start your first conversation →
                </p>
              </Link>
            )}
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Messages today</p>
          </div>

          {/* Memories stored */}
          <div
            className="rounded-2xl p-5 flex flex-col gap-2"
            style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <Database className="w-4 h-4" style={{ color: "rgba(255,255,255,0.25)" }} />
            {!loadedMem ? (
              <Skeleton w="3rem" h="2rem" />
            ) : (
              <p className="text-2xl font-bold text-white">
                {memStats?.total_episodes ?? 0}
              </p>
            )}
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Memories stored</p>
            {loadedMem && (memStats as unknown as Record<string, unknown> | null)?.recent_episodes != null && (
              <p className="text-xs" style={{ color: "#4ade80" }}>
                ↑ {((memStats as unknown as Record<string, unknown>).recent_episodes as number)} this week
              </p>
            )}
          </div>

          {/* Days since hatch */}
          <div
            className="rounded-2xl p-5 flex flex-col gap-2"
            style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <Calendar className="w-4 h-4" style={{ color: "rgba(255,255,255,0.25)" }} />
            {!loadedEntity ? (
              <Skeleton w="3rem" h="2rem" />
            ) : daysSinceHatch !== null ? (
              <p className="text-2xl font-bold text-white">{daysSinceHatch}</p>
            ) : (
              <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                Just arrived
              </p>
            )}
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Days since hatch</p>
          </div>

          {/* Current archetype */}
          <div
            className="rounded-2xl p-5 flex flex-col gap-2"
            style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
          >
            {!loadedEntity ? (
              <>
                <Skeleton w="1.5rem" h="1.5rem" rounded="50%" />
                <Skeleton w="70%" h="1.25rem" />
              </>
            ) : (
              <>
                <span className="text-base leading-none">
                  {(entity?.dominant_trait && traitEmoji[entity.dominant_trait.toLowerCase()]) ||
                    hatchEmoji[entityLevel] ||
                    "👑"}
                </span>
                <p className="text-lg font-bold text-white capitalize truncate">
                  {entity?.dominant_trait || entity?.hatch_label || "Explorer"}
                </p>
              </>
            )}
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Current archetype</p>
          </div>
        </div>

        {/* ── Morning Briefing card ── */}
        <div
          className="fade-slide-up"
          style={{ animationDelay: "180ms" }}
        >
          <Link href="/dashboard/morning-briefing">
            <div
              className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer group transition-all duration-200"
              style={{
                background: SURFACE2,
                border: `1px solid ${GOLD}33`,
                boxShadow: `0 2px 16px ${GOLD}08`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${GOLD}18` }}
              >
                <Sunrise className="w-5 h-5" style={{ color: GOLD }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-widest mb-0.5" style={{ color: `${GOLD}88` }}>
                  Morning Briefing
                </p>
                {briefingIsToday ? (
                  <p className="text-sm text-white/70 flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#4ade80", boxShadow: "0 0 4px #4ade80" }}
                    />
                    Ready — tap to read
                  </p>
                ) : briefing?.one_line_summary ? (
                  <p className="text-sm truncate text-white/70">
                    {briefing.one_line_summary}
                  </p>
                ) : (
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Being prepared for tomorrow morning...
                  </p>
                )}
              </div>

              {/* Care score pill */}
              {careScore !== null && (
                <span
                  className="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: `${careScorePillColor}22`,
                    color: careScorePillColor,
                    border: `1px solid ${careScorePillColor}44`,
                  }}
                >
                  {careScore}
                </span>
              )}

              <ChevronRight
                className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5"
                style={{ color: `${GOLD}66` }}
              />
            </div>
          </Link>
        </div>

        {/* ── Main 2-col grid ── */}
        <div
          className="fade-slide-up grid grid-cols-1 lg:grid-cols-3 gap-5"
          style={{ animationDelay: "240ms" }}
        >
          {/* Right column (1/3) — rendered first on mobile via order */}
          <div className="flex flex-col gap-4 order-2 lg:order-2">
            {/* Care score card — prominent conic-gradient ring */}
            <div
              className="rounded-2xl p-5 flex flex-col items-center"
              style={{ background: SURFACE, border: `1px solid ${GOLD}22` }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4 self-start" style={{ color: `${GOLD}77` }}>
                Care Score
              </p>
              {careScore !== null ? (
                <CareRing score={careScore} size={120} />
              ) : (
                <div className="py-4 flex flex-col items-center gap-3 w-full">
                  <Skeleton w="120px" h="120px" rounded="50%" />
                  <Skeleton w="60%" h="0.75rem" />
                </div>
              )}
            </div>

            {/* Character card */}
            <div
              className="rounded-2xl p-5"
              style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: `${GOLD}77` }}>
                Your Character
              </p>
              {!loadedEntity ? (
                <div className="flex items-center gap-4">
                  <Skeleton w="54px" h="54px" rounded="50%" />
                  <div className="flex flex-col gap-2 flex-1">
                    <Skeleton w="70%" h="0.875rem" />
                    <Skeleton w="50%" h="0.75rem" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <ProgressRing
                      progress={Math.round(evolutionProgress * 100)}
                      color={evolutionStage.color || entity?.color_primary || GOLD}
                      size={54}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-lg">
                      {hatchEmoji[entityLevel] || "👑"}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-white truncate">
                      {entity?.name || "Sovereign"}
                    </p>
                    <p className="text-xs mt-0.5 font-semibold" style={{ color: evolutionStage.color }}>
                      {evolutionStage.name}
                    </p>
                    <p className="text-xs mt-0.5 capitalize" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {entity?.dominant_trait || "explorer"}
                    </p>
                    {/* Evolution progress bar */}
                    {evolutionStage.maxInteractions !== null && (
                      <div className="mt-2">
                        <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{ width: `${Math.round(evolutionProgress * 100)}%`, background: evolutionStage.color }}
                          />
                        </div>
                        <p className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.25)" }}>
                          {interactionsToNext} interactions to next stage
                        </p>
                      </div>
                    )}
                    {/* Feature unlock badges */}
                    <div className="flex gap-1 mt-1.5 flex-wrap">
                      {evolutionStage.unlocksGuardian && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold" style={{ background: "rgba(74,222,128,0.15)", color: "#4ade80" }}>
                          🛡 Guardian
                        </span>
                      )}
                      {evolutionStage.unlocksRalphMode && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold" style={{ background: "rgba(201,168,76,0.15)", color: GOLD }}>
                          ⚡ Ralph Mode
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Emotional state dimensions */}
            <div
              className="rounded-2xl p-5 flex-1"
              style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: `${GOLD}77` }}>
                Emotional State
              </p>
              <div className="space-y-3">
                {careDimensions.map((dim) => (
                  <div key={dim.label}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-white/60">
                        {dim.label}
                      </span>
                      <span className="text-xs font-bold" style={{ color: dim.pct >= 70 ? GOLD : "rgba(255,255,255,0.3)" }}>
                        {dim.pct}%
                      </span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${dim.pct}%`,
                          background: dim.pct >= 70 ? GOLD : `${GOLD}44`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Left: secondary info col (2/3) — order-1 so it appears first on desktop */}
          <div
            className="lg:col-span-2 order-1 lg:order-1 rounded-2xl p-6 flex flex-col gap-5"
            style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
          >
            {/* ── Your AI is working on... ── */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: `${GOLD}77` }}>
                Your AI is working on…
              </p>
              {activityItems.length > 0 ? (
                <div className="space-y-3">
                  {activityItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div className="min-w-0">
                        <p className="text-sm text-white/70">{item.text}</p>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Your companion is just waking up. Start a conversation to begin.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ── Bottom shortcut row ── */}
        <div
          className="fade-slide-up grid grid-cols-2 sm:grid-cols-4 gap-3"
          style={{ animationDelay: "300ms" }}
        >
          {[
            {
              href: "/dashboard/memory",
              label: "Memory",
              icon: Database,
              sub: loadedMem ? `${memStats?.total_episodes || 0} episodes` : "Loading…",
            },
            {
              href: "/dashboard/morning-briefing",
              label: "Briefing",
              icon: Sunrise,
              sub: briefingIsToday ? "Ready today" : briefing?.one_line_summary ? "Ready" : "Preparing...",
            },
            {
              href: "/dashboard/care-metrics",
              label: "Care Metrics",
              icon: Heart,
              sub: careScore !== null ? `${careScore}% care score` : "Loading...",
            },
            {
              href: "/dashboard/settings",
              label: "Settings",
              icon: Settings,
              sub: plan?.plan_name || "Manage plan",
            },
          ].map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <div
                  className="shortcut-card flex items-center gap-3 p-4 rounded-2xl cursor-pointer group"
                  style={{
                    background: SURFACE,
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${GOLD}14` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: GOLD }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                      {link.label}
                    </p>
                    <p className="text-xs truncate" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {link.sub}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: GOLD }}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Upgrade CTA (free tier only, bottom — the only CTA) ── */}
        {isFree && (
          <div
            className="fade-slide-up"
            style={{ animationDelay: "360ms" }}
          >
            <Link href="/#pricing">
              <div
                className="flex items-center justify-between px-5 py-4 rounded-2xl cursor-pointer group transition-all duration-150"
                style={{
                  background: `${GOLD}0c`,
                  border: `1px solid ${GOLD}22`,
                }}
              >
                <div className="flex items-center gap-3">
                  <Crown className="w-5 h-5 flex-shrink-0" style={{ color: GOLD }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: GOLD }}>
                      Upgrade to Pro
                    </p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                      Unlimited memory · All archetypes · Voice mode
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5"
                  style={{ color: `${GOLD}66` }}
                />
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
