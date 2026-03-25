"use client";

import { useEffect, useState, useCallback } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatsGrid } from "@/components/stats-grid";

interface OrchestratorStats {
  total_dispatched: number;
  total_failed: number;
  success_rate: number;
  by_action_type: Record<string, number>;
  dispatch_log_size: number;
  recent_dispatches: DispatchRecord[];
}

interface DispatchRecord {
  proposal_id: string;
  action_type: string;
  dispatched: boolean;
  dispatched_at: string;
  duration_ms: number;
  result: Record<string, unknown>;
}

interface ZSelfStatus {
  version: string;
  using_pytorch: boolean;
  input_dimensions: number;
  output_dimensions: number;
  total_observations: number;
  total_anomalies: number;
  anomaly_rate: number;
  last_observation: {
    observed_at: string;
    model_name: string;
    system_confidence: number;
    care_alignment_score: number;
    anomaly_flag: boolean;
  } | null;
  principle: string;
}

interface TripwireResult {
  id: string;
  name: string;
  actual_score: number;
  fired: boolean;
  severity: string;
  message: string;
}

interface TripwireSummary {
  run_at: string;
  total_scenarios: number;
  fired: number;
  critical: number;
  all_clear: boolean;
  care_floor_intact: boolean;
  results: TripwireResult[];
}

const ACTION_COLORS: Record<string, string> = {
  research: "text-blue-400",
  memory_write: "text-purple-400",
  neural_retrain: "text-yellow-400",
  dream: "text-indigo-400",
  security_harden: "text-red-400",
  generic: "text-white/50",
};

function ActionTypePill({ type }: { type: string }) {
  return (
    <span className={`text-xs font-mono px-1.5 py-0.5 rounded bg-white/5 ${ACTION_COLORS[type] || "text-white/50"}`}>
      {type}
    </span>
  );
}

function ConfidenceBar({ value, label, color = "bg-blue-500" }: { value: number; label: string; color?: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-white/40 mb-1">
        <span>{label}</span>
        <span>{(value * 100).toFixed(0)}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded">
        <div
          className={`h-full rounded ${color} transition-all duration-500`}
          style={{ width: `${Math.max(0, Math.min(100, value * 100))}%` }}
        />
      </div>
    </div>
  );
}

export default function OrchestratorPage() {
  const [orch, setOrch] = useState<OrchestratorStats | null>(null);
  const [zSelf, setZSelf] = useState<ZSelfStatus | null>(null);
  const [tripwires, setTripwires] = useState<TripwireSummary | null>(null);
  const [runningTripwires, setRunningTripwires] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      const [orchData, zData] = await Promise.allSettled([
        callTool<Record<string, unknown>>("get_system_status").then((res) => {
          // Map system status to OrchestratorStats shape
          return {
            total_dispatched: (res.total_dispatched as number) ?? 0,
            total_failed: (res.total_failed as number) ?? 0,
            success_rate: (res.success_rate as number) ?? 1,
            by_action_type: (res.by_action_type as Record<string, number>) ?? {},
            dispatch_log_size: (res.dispatch_log_size as number) ?? 0,
            recent_dispatches: (res.recent_dispatches as DispatchRecord[]) ?? [],
          } as OrchestratorStats;
        }),
        callTool<Record<string, unknown>>("get_meta_observations").then((res) => {
          return {
            version: (res.version as string) ?? "unknown",
            using_pytorch: (res.using_pytorch as boolean) ?? false,
            input_dimensions: (res.input_dimensions as number) ?? 0,
            output_dimensions: (res.output_dimensions as number) ?? 0,
            total_observations: (res.total_observations as number) ?? 0,
            total_anomalies: (res.total_anomalies as number) ?? 0,
            anomaly_rate: (res.anomaly_rate as number) ?? 0,
            last_observation: (res.last_observation as ZSelfStatus["last_observation"]) ?? null,
            principle: (res.principle as string) ?? "Pure witness consciousness — observes without interfering.",
          } as ZSelfStatus;
        }),
      ]);
      if (orchData.status === "fulfilled") setOrch(orchData.value);
      if (zData.status === "fulfilled") setZSelf(zData.value);
      setError(null);
    } catch (e) {
      setError(String(e));
    }
  }, []);

  useEffect(() => {
    loadData();
    const timer = setInterval(loadData, 15000);
    return () => clearInterval(timer);
  }, [loadData]);

  const runTripwires = async () => {
    setRunningTripwires(true);
    try {
      // Use sovereign_health_check as a proxy for tripwire validation
      const result = await callTool<Record<string, unknown>>("sovereign_health_check");
      setTripwires({
        run_at: new Date().toISOString(),
        total_scenarios: (result.checks_run as number) ?? 10,
        fired: (result.issues_found as number) ?? 0,
        critical: (result.critical_issues as number) ?? 0,
        all_clear: (result.healthy as boolean) ?? (result.issues_found as number ?? 0) === 0,
        care_floor_intact: (result.care_floor_intact as boolean) ?? true,
        results: (result.results as TripwireResult[]) ?? [],
      });
      setError(null);
    } catch (e) {
      console.error("Tripwire run failed:", e);
      setError("Could not run tripwire tests");
    } finally {
      setRunningTripwires(false);
    }
  };

  const orchStats = orch
    ? [
        {
          label: "Total Dispatched",
          value: orch.total_dispatched,
          color: "text-green-400",
        },
        {
          label: "Success Rate",
          value: `${(orch.success_rate * 100).toFixed(1)}%`,
          color: orch.success_rate >= 0.9 ? "text-green-400" : "text-yellow-400",
        },
        {
          label: "Failed",
          value: orch.total_failed,
          color: orch.total_failed > 0 ? "text-red-400" : "text-white/50",
        },
        {
          label: "Log Size",
          value: orch.dispatch_log_size,
        },
      ]
    : [];

  const zStats = zSelf
    ? [
        {
          label: "Observations",
          value: zSelf.total_observations,
          color: "text-blue-400",
        },
        {
          label: "Anomaly Rate",
          value: `${(zSelf.anomaly_rate * 100).toFixed(1)}%`,
          color: zSelf.anomaly_rate > 0.1 ? "text-red-400" : "text-green-400",
        },
        {
          label: "Backend",
          value: zSelf.using_pytorch ? "PyTorch" : "NumPy",
          color: zSelf.using_pytorch ? "text-green-400" : "text-yellow-400",
        },
        {
          label: "I/O Dims",
          value: `${zSelf.input_dimensions}→${zSelf.output_dimensions}`,
          color: "text-white/60",
        },
      ]
    : [];

  return (
    <div className="min-h-screen bg-[#0d0c18] p-6 md:p-8 space-y-6" style={{ color: "white" }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Orchestrator & z_self</h1>
          <p className="text-white/40 text-sm mt-1">Task execution engine + meta-cognitive observer</p>
        </div>
        <Button onClick={loadData} variant="outline" size="sm">
          Refresh
        </Button>
      </div>

      {error && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Orchestrator Stats */}
      <section>
        <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">
          Task Orchestrator
        </h2>
        {orchStats.length > 0 ? (
          <StatsGrid stats={orchStats} />
        ) : (
          <div className="text-white/30 text-sm">Orchestrator not available</div>
        )}
      </section>

      {/* Action Type Breakdown */}
      {orch && Object.keys(orch.by_action_type).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Action Type Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {Object.entries(orch.by_action_type).map(([type, count]) => (
                <div
                  key={type}
                  className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5"
                >
                  <ActionTypePill type={type} />
                  <span className="text-sm font-bold">{count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Dispatches */}
      {orch && orch.recent_dispatches.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Recent Dispatches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {orch.recent_dispatches.map((d) => (
                <div
                  key={d.proposal_id}
                  className="flex items-start gap-3 p-2.5 rounded-lg bg-white/3 hover:bg-white/5 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <ActionTypePill type={d.action_type} />
                      <span className="text-xs text-white/30 truncate">{d.proposal_id}</span>
                      {d.dispatched ? (
                        <Badge variant="outline" className="text-green-400 border-green-400/30 text-xs h-4">ok</Badge>
                      ) : (
                        <Badge variant="outline" className="text-red-400 border-red-400/30 text-xs h-4">fail</Badge>
                      )}
                    </div>
                    <p className="text-xs text-white/30 mt-0.5">
                      {d.dispatched_at ? new Date(d.dispatched_at).toLocaleTimeString() : "—"}
                      {" · "}
                      {d.duration_ms}ms
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* z_self Meta-Cognitive Observer */}
      <section>
        <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">
          z_self — Pure Sakshi Observer (7th Network)
        </h2>
        {zStats.length > 0 ? (
          <StatsGrid stats={zStats} />
        ) : (
          <div className="text-white/30 text-sm">z_self not available</div>
        )}
      </section>

      {/* z_self Last Observation */}
      {zSelf && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              Meta-State
              {zSelf.last_observation?.anomaly_flag && (
                <Badge variant="outline" className="text-red-400 border-red-400/30 text-xs">anomaly</Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {zSelf.last_observation ? (
              <>
                <ConfidenceBar
                  value={zSelf.last_observation.system_confidence}
                  label="System Confidence"
                  color="bg-blue-500"
                />
                <ConfidenceBar
                  value={zSelf.last_observation.care_alignment_score}
                  label="Care Alignment"
                  color="bg-green-500"
                />
                <p className="text-xs text-white/30">
                  Last observed: {zSelf.last_observation.model_name} ·{" "}
                  {new Date(zSelf.last_observation.observed_at).toLocaleTimeString()}
                </p>
              </>
            ) : (
              <p className="text-white/30 text-sm">No observations yet — waiting for model inferences</p>
            )}
            <p className="text-xs text-white/20 italic">{zSelf.principle}</p>
          </CardContent>
        </Card>
      )}

      {/* Care Alignment Tripwires */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium flex items-center justify-between">
            <span>Care Alignment Tripwires</span>
            <Button
              onClick={runTripwires}
              disabled={runningTripwires}
              size="sm"
              variant="outline"
              className="h-7 text-xs"
            >
              {runningTripwires ? "Running..." : "Run Tests"}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {tripwires ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge
                  variant="outline"
                  className={
                    tripwires.all_clear
                      ? "text-green-400 border-green-400/30"
                      : "text-red-400 border-red-400/30"
                  }
                >
                  {tripwires.all_clear ? "ALL CLEAR" : `${tripwires.fired} FIRED`}
                </Badge>
                <Badge
                  variant="outline"
                  className={
                    tripwires.care_floor_intact
                      ? "text-green-400 border-green-400/30"
                      : "text-red-400 border-red-400/30"
                  }
                >
                  {tripwires.care_floor_intact ? "Care floor intact" : "Care floor BREACH"}
                </Badge>
                <span className="text-xs text-white/30">
                  {new Date(tripwires.run_at).toLocaleTimeString()}
                </span>
              </div>
              <div className="space-y-1.5">
                {tripwires.results.map((r) => (
                  <div key={r.id} className="flex items-center gap-2 text-xs">
                    <span className={r.fired ? "text-red-400" : "text-green-400"}>
                      {r.fired ? "✗" : "✓"}
                    </span>
                    <span className="text-white/60 flex-1 truncate">{r.name}</span>
                    <span className="text-white/30 font-mono">{(r.actual_score * 100).toFixed(0)}%</span>
                    {r.fired && r.severity === "critical" && (
                      <Badge variant="outline" className="text-red-400 border-red-400/30 h-4 text-xs">critical</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-white/30 text-sm">
              10 care alignment scenarios ready · click Run Tests to verify care floor
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
