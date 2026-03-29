"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  BOND_LEVELS,
  getBondLevel,
  getProgressToNextLevel,
  type BondLevel,
} from "@/lib/bond";
import {
  EVOLUTION_STAGES,
  getEvolutionStage,
  getProgressToNextStage,
  interactionsUntilNextStage,
} from "@/lib/evolution";
import { TrendingUp, Zap, Star, Flame, Award } from "lucide-react";

// ── Brand tokens ─────────────────────────────────────────────────
const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";

// ── Milestone badges ────────────────────────────────────────────
interface Milestone {
  count: number;
  label: string;
  emoji: string;
}

const MILESTONES: Milestone[] = [
  { count: 10,  label: "First Steps",      emoji: "🌱" },
  { count: 25,  label: "First Light",      emoji: "✨" },
  { count: 50,  label: "Growing Form",     emoji: "🌿" },
  { count: 100, label: "Century",          emoji: "💯" },
  { count: 200, label: "Sovereign",        emoji: "👑" },
];

// ── API response types ───────────────────────────────────────────
interface ProgressData {
  interactions: number;
  streak_days: number;
  bond_points: number;
  evolution: {
    stage_name: string;
    stage_index: number;
    progress_to_next: number;
    interactions_until_next: number;
    badge: string;
    color: string;
  };
  mastery: {
    level: string;
    label: string;
    badge: string;
    color: string;
    xp_to_next: number;
    percent_to_next: number;
  };
  features: {
    guardian_unlocked: boolean;
    ralph_mode_unlocked: boolean;
  };
}

export default function ProgressPage() {
  const [data, setData] = useState<ProgressData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProgress = useCallback(async () => {
    try {
      const res = await fetch("/api/user/progress");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json() as ProgressData;
      setData(json);
      setError(null);
    } catch (e) {
      console.error("[progress] fetch failed:", e);
      setError("Could not load progress data.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  // Auto-refresh every 60 seconds
  useEffect(() => {
    const id = setInterval(fetchProgress, 60_000);
    return () => clearInterval(id);
  }, [fetchProgress]);

  // Derive bond level values
  const bondPoints = data?.bond_points ?? 0;
  const currentBondLevel = getBondLevel(bondPoints);
  const bondProgressPct = getProgressToNextLevel(bondPoints);
  const currentBondIdx = BOND_LEVELS.findIndex((l) => l.name === currentBondLevel.name);
  const nextBondLevel: BondLevel | undefined =
    currentBondIdx < BOND_LEVELS.length - 1 ? BOND_LEVELS[currentBondIdx + 1] : undefined;
  const bondPointsToNext = nextBondLevel ? nextBondLevel.threshold - bondPoints : 0;

  // Derive evolution values
  const interactions = data?.interactions ?? 0;
  const evolutionStage = getEvolutionStage(interactions);
  const evolutionProgressPct = getProgressToNextStage(interactions);
  const interactionsUntilNext = interactionsUntilNextStage(interactions);
  const nextEvolutionStage =
    evolutionStage.id < 5 ? EVOLUTION_STAGES[evolutionStage.id + 1] : null;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: DEEP }}>
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
            style={{ borderColor: `${GOLD}55`, borderTopColor: GOLD }}
          />
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>Loading progress…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: DEEP }}>
        <div className="text-center">
          <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>{error}</p>
          <button
            onClick={fetchProgress}
            className="text-xs px-4 py-2 rounded-lg"
            style={{ background: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}40` }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-6 md:p-8" style={{ background: DEEP, color: "white" }}>
      <div className="max-w-2xl mx-auto space-y-5 md:space-y-6">

        {/* ── Header ── */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-5 h-5" style={{ color: GOLD }} />
            <h2 className="text-xl md:text-2xl font-bold text-white">Progress</h2>
          </div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            Your companion bond grows stronger with every interaction
          </p>
        </div>

        {/* ── Quick stats ── */}
        <div className="grid grid-cols-3 gap-3">
          {/* Streak */}
          <div
            className="rounded-2xl p-4 flex flex-col items-center gap-1"
            style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <Flame className="w-5 h-5 mb-1" style={{ color: "#f97316" }} />
            <p className="text-2xl font-black" style={{ color: "white" }}>
              {data?.streak_days ?? 0}
            </p>
            <p className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              day streak
            </p>
          </div>
          {/* Messages */}
          <div
            className="rounded-2xl p-4 flex flex-col items-center gap-1"
            style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <Zap className="w-5 h-5 mb-1" style={{ color: GOLD }} />
            <p className="text-2xl font-black" style={{ color: "white" }}>
              {interactions}
            </p>
            <p className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              interactions
            </p>
          </div>
          {/* Bond points */}
          <div
            className="rounded-2xl p-4 flex flex-col items-center gap-1"
            style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <Star className="w-5 h-5 mb-1" style={{ color: currentBondLevel.color }} />
            <p className="text-2xl font-black" style={{ color: "white" }}>
              {bondPoints}
            </p>
            <p className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              bond pts
            </p>
          </div>
        </div>

        {/* ── Evolution stage card ── */}
        <div
          className="rounded-2xl p-4 md:p-6"
          style={{
            background: SURFACE,
            border: `1px solid ${evolutionStage.color}28`,
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  background: `${evolutionStage.color}18`,
                  border: `1px solid ${evolutionStage.color}33`,
                }}
              >
                {evolutionStage.emoji}
              </div>
              <div>
                <h3 className="text-base font-bold" style={{ color: evolutionStage.color }}>
                  {evolutionStage.name}
                </h3>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Stage {evolutionStage.id + 1} of {EVOLUTION_STAGES.length} — {evolutionStage.title}
                </p>
              </div>
            </div>
            <div
              className="text-xs px-2.5 py-1 rounded-full font-semibold"
              style={{ background: `${evolutionStage.color}18`, color: evolutionStage.color, border: `1px solid ${evolutionStage.color}35` }}
            >
              {data?.mastery.label ?? "—"}
            </div>
          </div>

          {/* Evolution progress bar */}
          <div className="mb-2">
            <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${evolutionProgressPct}%`,
                  background: `linear-gradient(90deg, ${evolutionStage.color}, ${nextEvolutionStage?.color ?? evolutionStage.color})`,
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              {evolutionProgressPct}% to next stage
            </span>
            {nextEvolutionStage ? (
              <span className="text-xs font-medium" style={{ color: nextEvolutionStage.color }}>
                {interactionsUntilNext} interactions to {nextEvolutionStage.name}
              </span>
            ) : (
              <span className="text-xs font-medium" style={{ color: evolutionStage.color }}>
                Full sovereignty reached ✦
              </span>
            )}
          </div>
        </div>

        {/* ── Bond level card ── */}
        <div
          className="rounded-2xl p-4 md:p-6"
          style={{
            background: SURFACE,
            border: `1px solid ${GOLD}28`,
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${currentBondLevel.color}18`, border: `1px solid ${currentBondLevel.color}33` }}
              >
                <Star className="w-6 h-6" style={{ color: currentBondLevel.color }} />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: currentBondLevel.color }}>
                  {currentBondLevel.name}
                </h3>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Bond level {currentBondIdx + 1} of {BOND_LEVELS.length}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black" style={{ color: GOLD }}>
                {bondPoints}
              </p>
              <p className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                bond pts
              </p>
            </div>
          </div>

          {/* Bond progress bar */}
          <div className="mb-2">
            <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${bondProgressPct}%`,
                  background: `linear-gradient(90deg, ${GOLD}, ${nextBondLevel?.color ?? GOLD})`,
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              {bondProgressPct}% to next level
            </span>
            {nextBondLevel ? (
              <span className="text-xs font-medium" style={{ color: nextBondLevel.color }}>
                {bondPointsToNext} pts to {nextBondLevel.name}
              </span>
            ) : (
              <span className="text-xs font-medium" style={{ color: "#FFD700" }}>
                Maximum bond reached
              </span>
            )}
          </div>
        </div>

        {/* ── Milestone badges ── */}
        <div
          className="rounded-2xl p-4 md:p-5"
          style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4" style={{ color: GOLD }} />
            <h3 className="text-sm font-semibold text-white">Milestones</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {MILESTONES.map((m) => {
              const reached = interactions >= m.count;
              return (
                <div
                  key={m.count}
                  className="flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl min-w-[72px]"
                  style={{
                    background: reached ? `${GOLD}12` : "rgba(255,255,255,0.03)",
                    border: reached ? `1px solid ${GOLD}35` : "1px solid rgba(255,255,255,0.06)",
                    opacity: reached ? 1 : 0.5,
                  }}
                >
                  <span className="text-xl">{m.emoji}</span>
                  <span
                    className="text-[10px] font-bold text-center leading-tight"
                    style={{ color: reached ? GOLD : "rgba(255,255,255,0.3)" }}
                  >
                    {m.label}
                  </span>
                  <span
                    className="text-[9px] font-mono"
                    style={{ color: reached ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)" }}
                  >
                    {m.count} msgs
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── All bond levels ── */}
        <div
          className="rounded-2xl p-4 md:p-5"
          style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <h3 className="text-sm font-semibold text-white mb-4">Bond levels</h3>
          <div className="space-y-2">
            {BOND_LEVELS.map((level, i) => {
              const reached = bondPoints >= level.threshold;
              const isCurrent = level.name === currentBondLevel.name;
              return (
                <div
                  key={level.name}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl"
                  style={{
                    background: isCurrent ? `${level.color}12` : "transparent",
                    border: isCurrent ? `1px solid ${level.color}33` : "1px solid transparent",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{
                      background: reached ? `${level.color}22` : "rgba(255,255,255,0.04)",
                      color: reached ? level.color : "rgba(255,255,255,0.2)",
                      border: `1px solid ${reached ? `${level.color}44` : "rgba(255,255,255,0.06)"}`,
                    }}
                  >
                    {i + 1}
                  </div>
                  <span
                    className="text-sm font-medium flex-1"
                    style={{ color: reached ? level.color : "rgba(255,255,255,0.25)" }}
                  >
                    {level.name}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: reached ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)" }}
                  >
                    {level.threshold} pts
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── All evolution stages ── */}
        <div
          className="rounded-2xl p-4 md:p-5"
          style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <h3 className="text-sm font-semibold text-white mb-4">Evolution journey</h3>
          <div className="space-y-2">
            {EVOLUTION_STAGES.map((stage) => {
              const reached = interactions >= stage.minInteractions;
              const isCurrent = stage.id === evolutionStage.id;
              return (
                <div
                  key={stage.id}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl"
                  style={{
                    background: isCurrent ? `${stage.color}12` : "transparent",
                    border: isCurrent ? `1px solid ${stage.color}33` : "1px solid transparent",
                  }}
                >
                  <span className="text-base w-6 text-center flex-shrink-0">{stage.emoji}</span>
                  <span
                    className="text-sm font-medium flex-1"
                    style={{ color: reached ? stage.color : "rgba(255,255,255,0.25)" }}
                  >
                    {stage.name}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: reached ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)" }}
                  >
                    {stage.minInteractions}+ msgs
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Back link ── */}
        <div className="pt-2">
          <Link
            href="/dashboard/evolution"
            className="text-sm font-medium transition-colors duration-200 hover:text-[#f0d080]"
            style={{ color: GOLD }}
          >
            View full companion evolution &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
