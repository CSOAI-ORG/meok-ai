"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BOND_LEVELS,
  getBondLevel,
  getProgressToNextLevel,
  type BondLevel,
} from "@/lib/bond";
import { TrendingUp, Zap, Star } from "lucide-react";

// ── Brand tokens ─────────────────────────────────────────────────
const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";

// ── Placeholder data (replace with real API fetch) ───────────────
const DEMO_POINTS = 185;

const RECENT_ACTIONS = [
  { label: "Shared a memory", points: 5, time: "2 hours ago" },
  { label: "Deep conversation", points: 10, time: "Yesterday" },
  { label: "Daily check-in", points: 3, time: "Yesterday" },
  { label: "Celebrated a milestone", points: 25, time: "3 days ago" },
  { label: "Taught a new skill", points: 15, time: "4 days ago" },
];

export default function ProgressPage() {
  const [points] = useState(DEMO_POINTS);

  const currentLevel = getBondLevel(points);
  const progressPct = getProgressToNextLevel(points);

  // Find current index and next level
  const currentIdx = BOND_LEVELS.findIndex((l) => l.name === currentLevel.name);
  const nextLevel: BondLevel | undefined =
    currentIdx < BOND_LEVELS.length - 1 ? BOND_LEVELS[currentIdx + 1] : undefined;
  const pointsToNext = nextLevel ? nextLevel.threshold - points : 0;

  return (
    <div className="min-h-screen p-6 md:p-8" style={{ background: DEEP, color: "white" }}>
      <div className="max-w-2xl space-y-6">
        {/* ── Header ── */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-5 h-5" style={{ color: GOLD }} />
            <h2 className="text-2xl font-bold text-white">Bond Progress</h2>
          </div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            Your companion bond grows stronger with every interaction
          </p>
        </div>

        {/* ── Current level card ── */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: SURFACE,
            border: `1px solid ${GOLD}28`,
          }}
        >
          {/* Level name + points */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${currentLevel.color}18`, border: `1px solid ${currentLevel.color}33` }}
              >
                <Star className="w-6 h-6" style={{ color: currentLevel.color }} />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: currentLevel.color }}>
                  {currentLevel.name}
                </h3>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Level {currentIdx + 1} of {BOND_LEVELS.length}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black" style={{ color: GOLD }}>
                {points}
              </p>
              <p className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                bond pts
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-2">
            <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${progressPct}%`,
                  background: `linear-gradient(90deg, ${GOLD}, ${nextLevel?.color ?? GOLD})`,
                }}
              />
            </div>
          </div>

          {/* Next level info */}
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              {progressPct}% to next level
            </span>
            {nextLevel ? (
              <span className="text-xs font-medium" style={{ color: nextLevel.color }}>
                {pointsToNext} pts to {nextLevel.name}
              </span>
            ) : (
              <span className="text-xs font-medium" style={{ color: "#FFD700" }}>
                Maximum bond reached
              </span>
            )}
          </div>
        </div>

        {/* ── All bond levels ── */}
        <div
          className="rounded-2xl p-5"
          style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <h3 className="text-sm font-semibold text-white mb-4">Bond levels</h3>
          <div className="space-y-2">
            {BOND_LEVELS.map((level, i) => {
              const reached = points >= level.threshold;
              const isCurrent = level.name === currentLevel.name;
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

        {/* ── Recent bond actions ── */}
        <div
          className="rounded-2xl p-5"
          style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <h3 className="text-sm font-semibold text-white mb-4">Recent bond actions</h3>
          <div className="space-y-3">
            {RECENT_ACTIONS.map((action, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}
              >
                <Zap className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                <span className="text-sm flex-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {action.label}
                </span>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `${GOLD}14`, color: GOLD, border: `1px solid ${GOLD}28` }}
                >
                  +{action.points}pts
                </span>
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>
                  {action.time}
                </span>
              </div>
            ))}
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
