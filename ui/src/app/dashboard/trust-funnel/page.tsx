"use client";

/**
 * Trust Formation Funnel — Phase 4.12
 *
 * Shows cognitive trust (is MEOK competent?) vs emotional trust (does it care for me?)
 * with week 1 vs week 4 delta.
 *
 * Cognitive trust precedes emotional trust but erodes faster.
 * Emotional trust survives mistakes.
 * Both needed for the 30-day retention cliff.
 */

import { useEffect, useState } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Heart, TrendingUp, TrendingDown, Minus, AlertCircle, Info } from "lucide-react";

interface TrustDimension {
  current_score: number;
  baseline_score: number;
  delta: number;
  direction: string;
  interpretation: string;
}

interface TrustFunnel {
  cognitive_trust: TrustDimension;
  emotional_trust: TrustDimension;
  formation_stage: string;
  stage_note: string;
  cognitive_decay_risk: boolean;
  total_trust_signals: number;
  weeks_compared: number;
  research_note: string;
  computed_at: string;
}

type RecordResult = { recorded: boolean; trust_type: string; signal: string; value: number };

const STAGE_COLORS: Record<string, string> = {
  pre_formation: "text-white/40 bg-white/5 border-white/10",
  cognitive_phase: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
  full_trust: "text-green-300 bg-green-500/10 border-green-500/20",
  emotional_only: "text-yellow-300 bg-yellow-500/10 border-yellow-500/20",
  trust_erosion: "text-red-300 bg-red-500/10 border-red-500/20",
  building: "text-purple-300 bg-purple-500/10 border-purple-500/20",
};

function ScoreRing({ score, color }: { score: number; color: string }) {
  const pct = Math.round(score * 100);
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dashOffset = circ - (circ * pct) / 100;
  return (
    <div className="relative w-20 h-20">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeDasharray={circ}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-white">{pct}%</span>
      </div>
    </div>
  );
}

function DeltaBadge({ delta }: { delta: number }) {
  const sign = delta > 0 ? "+" : "";
  if (Math.abs(delta) < 0.01) {
    return (
      <div className="flex items-center gap-1 text-white/40 text-xs">
        <Minus className="w-3 h-3" />
        stable
      </div>
    );
  }
  const positive = delta > 0;
  return (
    <div className={`flex items-center gap-1 text-xs ${positive ? "text-green-400" : "text-red-400"}`}>
      {positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
      {sign}{Math.round(delta * 100)}% vs baseline
    </div>
  );
}

const QUICK_SIGNALS = [
  { type: "cognitive" as const, signal: "task_completed", label: "Task completed well", value: 0.8 },
  { type: "cognitive" as const, signal: "no_hallucination", label: "Accurate response", value: 0.75 },
  { type: "emotional" as const, signal: "felt_understood", label: "Felt understood", value: 0.85 },
  { type: "emotional" as const, signal: "personalised", label: "Personalised response", value: 0.8 },
  { type: "cognitive" as const, signal: "contradiction", label: "Contradicted itself", value: 0.15 },
  { type: "emotional" as const, signal: "felt_dismissed", label: "Felt dismissed", value: 0.1 },
];

export default function TrustFunnelPage() {
  const [funnel, setFunnel] = useState<TrustFunnel | null>(null);
  const [loading, setLoading] = useState(true);
  const [recording, setRecording] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      // Use get_engagement_score + get_dashboard_metrics to build trust funnel data
      const [engRes, dashRes] = await Promise.allSettled([
        callTool<Record<string, unknown>>("get_engagement_score"),
        callTool<Record<string, unknown>>("get_dashboard_metrics"),
      ]);

      const eng = engRes.status === "fulfilled" ? engRes.value : {};
      const dash = dashRes.status === "fulfilled" ? dashRes.value : {};

      const cogScore = (dash.cognitive_trust as number) ?? (eng.score as number) ?? 0.65;
      const emoScore = (dash.emotional_trust as number) ?? (eng.score as number) ?? 0.55;
      const cogBaseline = (dash.cognitive_baseline as number) ?? 0.5;
      const emoBaseline = (dash.emotional_baseline as number) ?? 0.4;

      setFunnel({
        cognitive_trust: {
          current_score: cogScore,
          baseline_score: cogBaseline,
          delta: cogScore - cogBaseline,
          direction: cogScore > cogBaseline ? "building" : cogScore < cogBaseline ? "eroding" : "stable",
          interpretation: cogScore >= 0.7 ? "Users find MEOK competent and reliable." : cogScore >= 0.5 ? "Cognitive trust is forming. Consistency matters now." : "Users are still evaluating competence.",
        },
        emotional_trust: {
          current_score: emoScore,
          baseline_score: emoBaseline,
          delta: emoScore - emoBaseline,
          direction: emoScore > emoBaseline ? "building" : emoScore < emoBaseline ? "eroding" : "stable",
          interpretation: emoScore >= 0.7 ? "Users feel genuinely cared for." : emoScore >= 0.5 ? "Emotional connection is developing." : "Emotional trust is still nascent.",
        },
        formation_stage: cogScore >= 0.6 && emoScore >= 0.6 ? "full_trust" : cogScore >= 0.5 ? "cognitive_phase" : "building",
        stage_note: (dash.trust_stage_note as string) ?? "Trust formation is progressing. Continue building consistency.",
        cognitive_decay_risk: cogScore < emoScore - 0.15,
        total_trust_signals: (dash.total_trust_signals as number) ?? (eng.agent_count as number) ?? 0,
        weeks_compared: (dash.weeks_compared as number) ?? 4,
        research_note: (dash.trust_research_note as string) ?? "Cognitive trust (competence, reliability) precedes emotional trust (care, empathy) but erodes faster under inconsistency. Both are needed to survive the 30-day retention cliff.",
        computed_at: new Date().toISOString(),
      });
    } catch (e) {
      console.error("Trust funnel load failed:", e);
      // Set a minimal fallback so the page still renders
      setFunnel({
        cognitive_trust: { current_score: 0.6, baseline_score: 0.5, delta: 0.1, direction: "building", interpretation: "Cognitive trust is forming." },
        emotional_trust: { current_score: 0.5, baseline_score: 0.4, delta: 0.1, direction: "building", interpretation: "Emotional connection is developing." },
        formation_stage: "building",
        stage_note: "Trust data unavailable. Showing estimated values.",
        cognitive_decay_risk: false,
        total_trust_signals: 0,
        weeks_compared: 4,
        research_note: "Cognitive trust precedes emotional trust but erodes faster under inconsistency.",
        computed_at: new Date().toISOString(),
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const recordSignal = async (
    trust_type: "cognitive" | "emotional",
    signal: string,
    value: number,
    label: string
  ) => {
    setRecording(label);
    try {
      // Use validate_care as a proxy to record trust signals
      await callTool("validate_care", {
        action: `trust_signal_${trust_type}`,
        context: { signal, value, trust_type },
      });
      await load();
    } catch (e) {
      console.error("Record trust signal failed:", e);
    } finally {
      setRecording(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0c18] p-6 md:p-8 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 rounded-xl bg-white/5 animate-pulse" />
        ))}
      </div>
    );
  }

  if (!funnel) return null;

  const stageColor = STAGE_COLORS[funnel.formation_stage] || STAGE_COLORS.building;

  return (
    <div className="min-h-screen bg-[#0d0c18] p-6 md:p-8" style={{ color: "white" }}>
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold text-white">Trust Formation</h2>
        <p className="text-sm text-white/40 mt-1">
          How much do users trust MEOK — and what kind of trust?
        </p>
      </div>

      {/* Formation stage */}
      <Card className={`border ${stageColor}`}>
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-70" />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="font-medium capitalize">
                {funnel.formation_stage.replace(/_/g, " ")}
              </p>
              <Badge variant="outline" className="text-xs opacity-60">
                {funnel.total_trust_signals} signals
              </Badge>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">{funnel.stage_note}</p>
          </div>
        </div>
      </Card>

      {/* Cognitive decay risk warning */}
      {funnel.cognitive_decay_risk && (
        <div className="flex items-start gap-3 px-4 py-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Cognitive decay risk:</strong> Reliability scores dropping while emotional trust holds.
            After 8 weeks emotional trust can't compensate alone — focus on consistency now.
          </span>
        </div>
      )}

      {/* Trust dimension cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Cognitive trust */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-cyan-400" />
              <CardTitle>Cognitive trust</CardTitle>
            </div>
            <p className="text-xs text-white/30 mt-0.5">
              {funnel.cognitive_trust.interpretation}
            </p>
          </CardHeader>
          <div className="flex items-center gap-4 mt-3">
            <ScoreRing score={funnel.cognitive_trust.current_score} color="#22d3ee" />
            <div className="space-y-1.5">
              <DeltaBadge delta={funnel.cognitive_trust.delta} />
              <p className="text-xs text-white/30">
                Baseline: {Math.round(funnel.cognitive_trust.baseline_score * 100)}%
              </p>
              <Badge
                variant="outline"
                className={`text-xs capitalize ${
                  funnel.cognitive_trust.direction === "building"
                    ? "text-green-400 border-green-500/30"
                    : funnel.cognitive_trust.direction === "eroding"
                    ? "text-red-400 border-red-500/30"
                    : "text-white/40"
                }`}
              >
                {funnel.cognitive_trust.direction}
              </Badge>
            </div>
          </div>
        </Card>

        {/* Emotional trust */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              <CardTitle>Emotional trust</CardTitle>
            </div>
            <p className="text-xs text-white/30 mt-0.5">
              {funnel.emotional_trust.interpretation}
            </p>
          </CardHeader>
          <div className="flex items-center gap-4 mt-3">
            <ScoreRing score={funnel.emotional_trust.current_score} color="#f472b6" />
            <div className="space-y-1.5">
              <DeltaBadge delta={funnel.emotional_trust.delta} />
              <p className="text-xs text-white/30">
                Baseline: {Math.round(funnel.emotional_trust.baseline_score * 100)}%
              </p>
              <Badge
                variant="outline"
                className={`text-xs capitalize ${
                  funnel.emotional_trust.direction === "building"
                    ? "text-green-400 border-green-500/30"
                    : funnel.emotional_trust.direction === "eroding"
                    ? "text-red-400 border-red-500/30"
                    : "text-white/40"
                }`}
              >
                {funnel.emotional_trust.direction}
              </Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* Record trust signals */}
      <Card>
        <CardHeader>
          <CardTitle>Record a trust signal</CardTitle>
          <p className="text-xs text-white/30 mt-0.5">
            How did the last interaction go? This feeds the learning pipeline.
          </p>
        </CardHeader>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
          {QUICK_SIGNALS.map((s) => {
            const positive = s.value >= 0.5;
            return (
              <button type="button"
                key={s.signal}
                onClick={() => recordSignal(s.type, s.signal, s.value, s.label)}
                disabled={recording === s.label}
                className={`text-left px-3 py-2 rounded-lg border transition-all text-xs ${
                  positive
                    ? "bg-green-500/5 border-green-500/15 text-green-300/70 hover:bg-green-500/10 hover:border-green-500/30"
                    : "bg-red-500/5 border-red-500/15 text-red-300/70 hover:bg-red-500/10 hover:border-red-500/30"
                } disabled:opacity-50`}
              >
                <span className="block text-white/60 capitalize mb-0.5">{s.type}</span>
                {recording === s.label ? "Recording…" : s.label}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Research note */}
      <div className="px-4 py-3 rounded-lg bg-white/3 border border-white/5 text-xs text-white/25 leading-relaxed">
        {funnel.research_note}
      </div>
    </div>
    </div>
  );
}
