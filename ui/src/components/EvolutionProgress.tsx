"use client";

import Link from "next/link";
import { Crown, ChevronRight } from "lucide-react";

interface EvolutionProgressProps {
  level: number;
  label: string;
  progress: number; // 0-1
  nextThreshold: number | null;
  interactionsCount: number;
}

const LEVEL_NAMES = ["Egg", "Hatchling", "Sprout", "Sentient", "Sovereign"];
const LEVEL_EMOJIS = ["🥚", "✨", "🌱", "⚡", "👑"];

export function EvolutionProgress({
  level,
  label,
  progress,
  nextThreshold,
  interactionsCount,
}: EvolutionProgressProps) {
  const currentLevelName = LEVEL_NAMES[level] || "Unknown";
  const nextLevelName = LEVEL_NAMES[level + 1] || "Max";
  const isMaxLevel = nextThreshold === null || level >= 4;

  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center text-xl">
            {LEVEL_EMOJIS[level] || "👑"}
          </div>
          <div>
            <h3 className="font-semibold text-white">{label}</h3>
            <p className="text-xs text-white/50">Level {level}: {currentLevelName}</p>
          </div>
        </div>
        {!isMaxLevel && (
          <Link
            href="/dashboard/evolution"
            className="p-2 rounded-lg text-white/40 hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors"
            aria-label="View evolution details"
          >
            <ChevronRight className="w-5 h-5" />
          </Link>
        )}
      </div>

      {/* Progress bar */}
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-3">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#c9a84c] to-[#e0bb60] rounded-full transition-all duration-500"
          style={{ width: `${Math.max(0, Math.min(100, progress * 100))}%` }}
        />
        {/* Shimmer effect */}
        <div className="absolute inset-0 animate-shimmer opacity-30" />
      </div>

      <div className="flex items-center justify-between text-xs">
        <span className="text-white/40">
          {isMaxLevel ? (
            <span className="flex items-center gap-1 text-[#c9a84c]">
              <Crown className="w-3 h-3" />
              Maximum evolution reached
            </span>
          ) : (
            <>{interactionsCount} / {nextThreshold} interactions</>
          )}
        </span>
        {!isMaxLevel && (
          <span className="text-white/60">Next: {nextLevelName}</span>
        )}
      </div>
    </div>
  );
}
