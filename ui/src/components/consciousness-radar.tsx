"use client";

import { useEffect, useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import type { EmotionalState } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { mcp } from "@/lib/api";

const modeVariant: Record<string, "cyan" | "purple" | "gold" | "default"> = {
  waking: "cyan",
  dreaming: "purple",
  deep_sleep: "default",
  meta_monitoring: "gold",
};

const modeColor: Record<string, string> = {
  waking: "#06b6d4",
  dreaming: "#a855f7",
  deep_sleep: "#6366f1",
  meta_monitoring: "#eab308",
};

const HATCH_LEVEL_NAMES: Record<number, string> = {
  0: "Egg",
  1: "Hatchling",
  2: "Juvenile",
  3: "Adult",
  4: "Ancient",
};

const TRAIT_LABELS: Record<string, string> = {
  explorer:  "Explorer",
  warrior:   "Warrior",
  scholar:   "Scholar",
  guardian:  "Guardian",
  creator:   "Creator",
  sovereign: "Sovereign",
};

interface EntityData {
  name: string;
  hatch_level: number;
  hatch_level_name?: string;
  dominant_trait: string;
  color_primary: string;
  interactions_count: number;
  next_hatch_threshold: number;
}

interface Props {
  emotional: EmotionalState | null;
  mode: string;
  level: number;
}

// ── Entity visual — animated orb + identity row + progress bar ──────────────

function EntityVisual({
  consciousnessLevel,
  mode,
}: {
  consciousnessLevel: number;
  mode: string;
}) {
  const [entity, setEntity] = useState<EntityData | null>(null);

  useEffect(() => {
    mcp.get<EntityData>("/entity").then(setEntity).catch(() => null);
  }, []);

  if (!entity) return null;

  const color = entity.color_primary || "#60B8F0";
  const isDreaming = mode === "dreaming";

  // Pulse speed: fast when highly conscious, slow when dormant
  const pulseDuration = Math.max(1.2, 3.5 - consciousnessLevel * 2.5);

  const hatchName =
    entity.hatch_level_name ??
    HATCH_LEVEL_NAMES[entity.hatch_level] ??
    `Level ${entity.hatch_level}`;
  const traitLabel =
    TRAIT_LABELS[entity.dominant_trait] ?? entity.dominant_trait;

  const progressPct =
    entity.next_hatch_threshold > 0
      ? Math.min(
          100,
          Math.round(
            (entity.interactions_count / entity.next_hatch_threshold) * 100
          )
        )
      : 100;

  return (
    <div className="mt-5 flex flex-col items-center gap-3 select-none">
      {/* Animated orb */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: 64, height: 64 }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
            animation: `pulse-orb ${pulseDuration}s ease-in-out infinite`,
          }}
        />
        {/* Core orb */}
        <div
          className="rounded-full"
          style={{
            width: 48,
            height: 48,
            background: `radial-gradient(circle at 35% 35%, ${color}EE, ${color}77)`,
            boxShadow: `0 0 16px ${color}66, 0 0 32px ${color}33`,
            animation: `float-orb ${pulseDuration * 1.4}s ease-in-out infinite`,
          }}
        />
        {/* Dreaming sparkle overlay */}
        {isDreaming && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, transparent, ${color}44, transparent)`,
              animation: "spin-slow 4s linear infinite",
            }}
          />
        )}
      </div>

      {/* Identity row */}
      <div className="text-center">
        <div className="text-sm font-semibold text-white/90 leading-tight">
          {entity.name}
        </div>
        <div className="text-xs text-white/40 mt-0.5">
          {hatchName} · {traitLabel}
        </div>
      </div>

      {/* Progress bar toward next hatch level */}
      {entity.hatch_level < 4 && (
        <div className="w-full max-w-[144px]">
          <div className="flex justify-between text-[10px] text-white/25 mb-1">
            <span>{entity.interactions_count} interactions</span>
            <span>{progressPct}%</span>
          </div>
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${progressPct}%`,
                background: `linear-gradient(to right, ${color}88, ${color})`,
              }}
            />
          </div>
          <div className="text-[10px] text-white/20 text-center mt-1">
            {Math.max(
              0,
              entity.next_hatch_threshold - entity.interactions_count
            )}{" "}
            to{" "}
            {HATCH_LEVEL_NAMES[
              (entity.hatch_level + 1) as keyof typeof HATCH_LEVEL_NAMES
            ] ?? "Ancient"}
          </div>
        </div>
      )}

      {entity.hatch_level >= 4 && (
        <div className="text-[10px] text-white/30 italic">Fully evolved</div>
      )}

      {/* Inline keyframe styles */}
      <style>{`
        @keyframes pulse-orb {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.35); opacity: 1; }
        }
        @keyframes float-orb {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// ── Main radar component ──────────────────────────────────────────────────────

export function ConsciousnessRadar({ emotional, mode, level }: Props) {
  const data = emotional
    ? [
        { axis: "Pleasure", value: Math.max(0, emotional.pleasure) },
        { axis: "Arousal", value: Math.max(0, emotional.arousal) },
        { axis: "Dominance", value: Math.max(0, emotional.dominance) },
        { axis: "Care", value: emotional.care_intensity },
        { axis: "Curiosity", value: emotional.curiosity },
        { axis: "Aesthetics", value: emotional.aesthetics },
      ]
    : [];

  const color = modeColor[mode] || "#06b6d4";

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Badge variant={modeVariant[mode] || "default"}>
            {mode.replace("_", " ")}
          </Badge>
          <span className="text-xs text-white/40">
            Level: {(level * 100).toFixed(0)}%
          </span>
        </div>
        {emotional && (
          <span className="text-sm text-white/50">{emotional.primary_emotion}</span>
        )}
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="75%">
          <PolarGrid stroke="rgba(255,255,255,0.08)" />
          <PolarAngleAxis
            dataKey="axis"
            tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
          />
          <PolarRadiusAxis domain={[0, 1]} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>

      {/* Entity — animated orb + name + hatch progress */}
      <EntityVisual consciousnessLevel={level} mode={mode} />
    </div>
  );
}
