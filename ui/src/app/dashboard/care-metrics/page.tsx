"use client";

/**
 * Care Metrics Dashboard
 *
 * 7 care-centred metrics — replaces vanity metrics (DAU, revenue/user) with
 * trust-aligned signals. Trust = Transparency × Competence × Consistency
 *                                 + Honest Uncertainty − Unexplained Failures.
 */

import { useEffect, useState, useCallback } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatsGrid } from "@/components/stats-grid";

interface CareMetrics {
  care_effort_score: number;           // 0-1 (1 = no friction)
  trust_trajectory_7d: number;         // delta vs 7 days ago (+ = improving)
  trust_trajectory_30d: number;
  personalisation_depth: number;       // 0-1
  error_honesty_rate: number;          // 0-1 (1 = always honest about uncertainty)
  community_health_score: number;      // 0-1
  accessibility_coverage: number;      // 0-1
  cultural_representation: number;     // 0-1
  computed_at: string;
}

interface TrustTrajectory {
  current: number;
  delta_7d: number;
  delta_14d: number;
  delta_30d: number;
  direction: "improving" | "declining" | "stable";
  history: { date: string; score: number }[];
}

interface PersonalisationDepth {
  agent_id: string;
  memory_accesses: number;
  accuracy_proxy: number;
  depth_score: number;
  days_active: number;
}

interface ErrorHonestyData {
  anomaly_flag_rate: number;
  explicit_uncertainty_rate: number;
  honesty_score: number;
  total_inferences: number;
}

function scoreColor(score: number): string {
  if (score >= 0.75) return "text-green-400";
  if (score >= 0.5) return "text-yellow-400";
  return "text-red-400";
}

function scoreBg(score: number): string {
  if (score >= 0.75) return "bg-green-500";
  if (score >= 0.5) return "bg-yellow-500";
  return "bg-red-500";
}

function deltaColor(delta: number): string {
  if (delta > 0) return "text-green-400";
  if (delta < 0) return "text-red-400";
  return "text-zinc-400";
}

function GaugeBar({ value, label }: { value: number; label: string }) {
  const pct = Math.round(value * 100);
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-zinc-400">{label}</span>
        <span className={scoreColor(value)}>{pct}%</span>
      </div>
      <div className="w-full bg-zinc-800 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-700 ${scoreBg(value)}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function CareMetricsPage() {
  const [metrics, setMetrics] = useState<CareMetrics | null>(null);
  const [trust, setTrust] = useState<TrustTrajectory | null>(null);
  const [personalisation, setPersonalisation] = useState<PersonalisationDepth[]>([]);
  const [honesty, setHonesty] = useState<ErrorHonestyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAll = useCallback(async () => {
    try {
      const [metricsRes, trustRes, persRes, honestyRes] = await Promise.all([
        callTool("get_care_metrics", {}),
        callTool("get_trust_trajectory", {}),
        callTool("get_personalisation_depth", {}),
        callTool("get_error_honesty_rate", {}),
      ]);
      setMetrics(metricsRes as CareMetrics);
      setTrust(trustRes as TrustTrajectory);
      setPersonalisation(
        Array.isArray((persRes as { agents?: PersonalisationDepth[] }).agents)
          ? ((persRes as { agents: PersonalisationDepth[] }).agents)
          : []
      );
      setHonesty(honestyRes as ErrorHonestyData);
      setError(null);
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { loadAll(); }, [loadAll]);

  function refresh() {
    setRefreshing(true);
    loadAll();
  }

  if (loading) {
    return (
      <div className="p-6 text-zinc-400 animate-pulse">Loading care metrics…</div>
    );
  }

  const trustScore = metrics?.trust_trajectory_7d ?? 0;
  const overallCare = metrics
    ? (
        metrics.care_effort_score +
        metrics.personalisation_depth +
        metrics.error_honesty_rate +
        metrics.community_health_score +
        metrics.accessibility_coverage +
        metrics.cultural_representation
      ) / 6
    : 0;

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="px-6 pb-6">
          <h1 className="text-2xl font-bold text-zinc-100">Care Metrics</h1>
          <p className="text-zinc-500 text-sm mt-1">
            Trust = Transparency × Competence × Consistency + Honest Uncertainty − Unexplained Failures
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={refresh} disabled={refreshing}>
          {refreshing ? "Refreshing…" : "Refresh"}
        </Button>
      </div>

      {error && (
        <div className="rounded-lg bg-red-950 border border-red-800 px-4 py-3 text-red-300 text-sm">
          {error}
        </div>
      )}

      {/* Overall Care Score */}
      <Card className="bg-zinc-900 border-zinc-800">
        <div className="px-6 pt-6 pb-6">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className={`text-5xl font-black ${scoreColor(overallCare)}`}>
                {Math.round(overallCare * 100)}
              </div>
              <div className="text-zinc-500 text-xs mt-1">Overall Care Score</div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${deltaColor(metrics?.trust_trajectory_7d ?? 0)}`}>
                  {metrics?.trust_trajectory_7d && metrics.trust_trajectory_7d > 0 ? "+" : ""}
                  {((metrics?.trust_trajectory_7d ?? 0) * 100).toFixed(1)}%
                </div>
                <div className="text-zinc-500 text-xs">Trust 7-day delta</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${deltaColor(metrics?.trust_trajectory_30d ?? 0)}`}>
                  {metrics?.trust_trajectory_30d && metrics.trust_trajectory_30d > 0 ? "+" : ""}
                  {((metrics?.trust_trajectory_30d ?? 0) * 100).toFixed(1)}%
                </div>
                <div className="text-zinc-500 text-xs">Trust 30-day delta</div>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Badge
                className={
                  trust?.direction === "improving"
                    ? "bg-green-900 text-green-300"
                    : trust?.direction === "declining"
                    ? "bg-red-900 text-red-300"
                    : "bg-zinc-800 text-zinc-400"
                }
              >
                {trust?.direction ?? "stable"}
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* 7 Metrics Gauges */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-zinc-200 text-base">7 Care-Centred Metrics</CardTitle>
        </CardHeader>
        <div className="px-6 pb-6 space-y-4">
          <GaugeBar value={metrics?.care_effort_score ?? 0} label="Care Effort Score (inverse of friction)" />
          <GaugeBar value={metrics?.personalisation_depth ?? 0} label="Personalisation Depth (Day 30 vs Day 1)" />
          <GaugeBar value={metrics?.error_honesty_rate ?? 0} label="Error Honesty Rate (uncertainty admitted vs hallucinated)" />
          <GaugeBar value={metrics?.community_health_score ?? 0} label="Community Health Score (governance participation)" />
          <GaugeBar value={metrics?.accessibility_coverage ?? 0} label="Accessibility Coverage (barrier-free sessions)" />
          <GaugeBar value={metrics?.cultural_representation ?? 0} label="Cultural Representation (47-tradition parity)" />
        </div>
      </Card>

      {/* Trust Trajectory + Error Honesty side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trust Trajectory */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-zinc-200 text-base">Trust Trajectory</CardTitle>
          </CardHeader>
          <div className="px-6 pb-6 space-y-3">
            {trust ? (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Current z_self care_alignment</span>
                  <span className={scoreColor(trust.current)}>{(trust.current * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">7-day delta</span>
                  <span className={deltaColor(trust.delta_7d)}>
                    {trust.delta_7d > 0 ? "+" : ""}{(trust.delta_7d * 100).toFixed(2)}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">14-day delta</span>
                  <span className={deltaColor(trust.delta_14d)}>
                    {trust.delta_14d > 0 ? "+" : ""}{(trust.delta_14d * 100).toFixed(2)}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">30-day delta</span>
                  <span className={deltaColor(trust.delta_30d)}>
                    {trust.delta_30d > 0 ? "+" : ""}{(trust.delta_30d * 100).toFixed(2)}%
                  </span>
                </div>
                {trust.history.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <p className="text-zinc-500 text-xs mb-2">Recent history</p>
                    <div className="space-y-1">
                      {trust.history.slice(-5).map((h, i) => (
                        <div key={i} className="flex justify-between text-xs">
                          <span className="text-zinc-500">{h.date}</span>
                          <span className={scoreColor(h.score)}>{(h.score * 100).toFixed(1)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="text-zinc-500 text-sm">No trajectory data yet.</p>
            )}
          </div>
        </Card>

        {/* Error Honesty */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-zinc-200 text-base">Error Honesty</CardTitle>
          </CardHeader>
          <div className="px-6 pb-6 space-y-3">
            {honesty ? (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Anomaly flag rate</span>
                  <span className={scoreColor(honesty.anomaly_flag_rate)}>
                    {(honesty.anomaly_flag_rate * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Explicit uncertainty rate</span>
                  <span className={scoreColor(honesty.explicit_uncertainty_rate)}>
                    {(honesty.explicit_uncertainty_rate * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Honesty score</span>
                  <span className={`font-semibold ${scoreColor(honesty.honesty_score)}`}>
                    {(honesty.honesty_score * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Total inferences tracked</span>
                  <span className="text-zinc-300">{honesty.total_inferences.toLocaleString()}</span>
                </div>
                <div className="mt-3 p-3 bg-zinc-800 rounded-lg">
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    <strong className="text-zinc-300">Care principle:</strong> Admitting uncertainty is more
                    honest — and ultimately more helpful — than false confidence. A high honesty score
                    means MEOK says "I'm not sure" when it should.
                  </p>
                </div>
              </>
            ) : (
              <p className="text-zinc-500 text-sm">No honesty data yet.</p>
            )}
          </div>
        </Card>
      </div>

      {/* Personalisation Depth */}
      {personalisation.length > 0 && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-zinc-200 text-base">Personalisation Depth (per agent)</CardTitle>
          </CardHeader>
          <div className="px-6 pb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-500 text-xs">
                    <th className="text-left py-2">Agent ID</th>
                    <th className="text-right py-2">Memory accesses</th>
                    <th className="text-right py-2">Depth score</th>
                    <th className="text-right py-2">Days active</th>
                  </tr>
                </thead>
                <tbody>
                  {personalisation.map((p, i) => (
                    <tr key={i} className="border-b border-zinc-800/50">
                      <td className="py-2 text-zinc-300 font-mono text-xs truncate max-w-[160px]">{p.agent_id}</td>
                      <td className="py-2 text-right text-zinc-300">{p.memory_accesses}</td>
                      <td className={`py-2 text-right ${scoreColor(p.depth_score)}`}>
                        {(p.depth_score * 100).toFixed(0)}%
                      </td>
                      <td className="py-2 text-right text-zinc-400">{p.days_active}d</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}

      {/* Computed at */}
      {metrics?.computed_at && (
        <p className="text-zinc-700 text-xs text-center">
          Last computed: {new Date(metrics.computed_at).toLocaleString()}
        </p>
      )}
    </div>
  );
}
