"use client";

import { useEffect, useState, useCallback } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatsGrid } from "@/components/stats-grid";

interface GeneralInfo {
  id: string;
  name: string;
  agent_id: string;
  trust_level: number;
  council_count: number;
  division_engagement: number;
  mediations_total: number;
  mediations_resolved: number;
  escalations_to_senior: number;
  tasks_routed: number;
  senior_general_id: string | null;
  last_active: string | null;
}

interface GeneralsStatus {
  division_generals: number;
  senior_generals: number;
  councils_tracked: number;
  mean_division_engagement: number;
  total_mediations: number;
  total_escalations_to_senior: number;
  weakest_divisions: { general_id: string; name: string; engagement: number }[];
  generals: GeneralInfo[];
}

interface ActivationStatus {
  tasks_completed: number;
  total_auctions: number;
  success_rate: number;
  relationship_density: number;
  engagement_score: number;
  engagement_phase: string;
  shapley_computations: number;
  trust_updates_applied: number;
  pheromone_specialisations: number;
  top_specialists: { agent_id: string; task_type: string; pheromone: number }[];
  division_generals: number;
  councils_tracked: number;
}

interface LearningStats {
  backend: string;
  samples_processed: number;
  river_accuracy: number;
  z_self_calibration: number;
  replay_queue_size: number;
  event_breakdown: Record<string, number>;
}

interface LearnSignal {
  event_type: string;
  label: number;
  care_score: number;
  timestamp: string;
  source_id: string;
}

interface AuctionResult {
  task_id: string;
  task_type: string;
  total_bids: number;
  winner_agent_id: string | null;
  contract_id: string | null;
  top_bids: { agent_id: string; score: number; capability: number; trust: number; pheromone: number }[];
}

const PHASE_COLORS: Record<string, string> = {
  peak_cohesion: "text-green-400",
  building: "text-cyan-400",
  stable: "text-blue-400",
  weakening: "text-yellow-400",
  crisis: "text-red-400",
  dormant: "text-white/30",
};

function EngagementBar({ score, label }: { score: number; label?: string }) {
  const pct = Math.round(score * 100);
  const color =
    score >= 0.7 ? "bg-green-500" : score >= 0.5 ? "bg-cyan-500" : score >= 0.3 ? "bg-yellow-500" : "bg-red-500";
  return (
    <div className="space-y-0.5">
      {label && <div className="text-xs text-white/40 truncate">{label}</div>}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 rounded-full bg-white/10">
          <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
        </div>
        <span className="text-xs text-white/60 w-7 text-right">{pct}%</span>
      </div>
    </div>
  );
}

export default function GeneralsPage() {
  const [generals, setGenerals] = useState<GeneralsStatus | null>(null);
  const [activation, setActivation] = useState<ActivationStatus | null>(null);
  const [auction, setAuction] = useState<AuctionResult | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [auctioning, setAuctioning] = useState(false);
  const [auctionType, setAuctionType] = useState("research");
  const [seedResult, setSeedResult] = useState<string | null>(null);
  const [learning, setLearning] = useState<LearningStats | null>(null);
  const [triggeringLearn, setTriggeringLearn] = useState(false);

  const loadData = useCallback(async () => {
    const [gResult, aResult, lResult] = await Promise.allSettled([
      callTool<GeneralsStatus>("get_generals_status", {}),
      callTool<ActivationStatus>("get_activation_status", {}),
      callTool<LearningStats>("get_learning_stats", {}),
    ]);
    if (gResult.status === "fulfilled" && gResult.value) setGenerals(gResult.value);
    if (aResult.status === "fulfilled" && aResult.value) setActivation(aResult.value);
    if (lResult.status === "fulfilled" && lResult.value) setLearning(lResult.value);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const seedCouncils = async () => {
    setSeeding(true);
    setSeedResult(null);
    try {
      const result = await callTool<{ tasks_seeded: number; pheromone_stats: Record<string, unknown> }>(
        "seed_first_councils",
        { task_count: 33 }
      );
      setSeedResult(`Seeded ${result.tasks_seeded} tasks · ${result.pheromone_stats?.specialised_count ?? 0} specialists`);
      await loadData();
    } catch (e) {
      console.error(e);
      setSeedResult("Error seeding councils");
    } finally {
      setSeeding(false);
    }
  };

  const runAuction = async () => {
    setAuctioning(true);
    try {
      const result = await callTool<AuctionResult>("run_contract_net_auction", {
        task_type: auctionType,
        description: `Manual ${auctionType} auction from dashboard`,
      });
      setAuction(result);
    } catch (e) {
      console.error(e);
    } finally {
      setAuctioning(false);
    }
  };

  const triggerLearning = async () => {
    setTriggeringLearn(true);
    try {
      await callTool("trigger_council_learning", { n: 50 });
      await loadData();
    } catch (e) {
      console.error(e);
    } finally {
      setTriggeringLearn(false);
    }
  };

  const activationStats = activation
    ? [
        {
          label: "Tasks Completed",
          value: activation.tasks_completed,
          color: activation.tasks_completed > 0 ? "text-green-400" : "text-white/30",
        },
        { label: "Auctions Run", value: activation.total_auctions },
        {
          label: "Relationship Density",
          value: `${(activation.relationship_density * 100).toFixed(1)}%`,
          color: activation.relationship_density > 0.01 ? "text-cyan-400" : "text-white/30",
        },
        {
          label: "Engagement Score",
          value: `${(activation.engagement_score * 100).toFixed(0)}%`,
          color: PHASE_COLORS[activation.engagement_phase] ?? "text-white/60",
        },
        {
          label: "Pheromone Specialists",
          value: activation.pheromone_specialisations,
          color: activation.pheromone_specialisations > 0 ? "text-purple-400" : "text-white/30",
        },
        { label: "Shapley Updates", value: activation.trust_updates_applied },
      ]
    : [];

  return (
    <div className="min-h-screen bg-[#0d0c18] p-6 md:p-8 space-y-6" style={{ color: "white" }}>
      <div>
        <h2 className="text-2xl font-bold text-white">Generals &amp; Activation</h2>
        <p className="text-sm text-white/40 mt-1">
          Mongol decimal hierarchy · Contract Net routing · Shapley attribution
        </p>
      </div>

      {/* Activation Stats */}
      {activationStats.length > 0 && <StatsGrid stats={activationStats} />}

      {/* Cold-Start Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Cold-Start Activation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 items-center flex-wrap">
            <Button onClick={seedCouncils} disabled={seeding} size="sm">
              {seeding ? "Seeding..." : "Seed 33 Councils"}
            </Button>
            <Button onClick={loadData} variant="outline" size="sm">
              Refresh
            </Button>
            {seedResult && <span className="text-xs text-white/50">{seedResult}</span>}
          </div>
          <p className="text-xs text-white/20">
            Seed micro-tasks to break dormancy: deposits pheromone trails, builds relationships,
            applies Shapley trust attribution.
          </p>

          {/* Engagement phase */}
          {activation && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/40">Phase:</span>
              <Badge
                variant="outline"
                className={`text-xs h-5 ${PHASE_COLORS[activation.engagement_phase] ?? ""} border-white/10`}
              >
                {activation.engagement_phase.replace("_", " ")}
              </Badge>
              {activation.engagement_phase === "dormant" && (
                <span className="text-xs text-yellow-400/70">↑ Run seed to activate</span>
              )}
            </div>
          )}

          {/* Top Specialists */}
          {activation?.top_specialists && activation.top_specialists.length > 0 && (
            <div>
              <div className="text-xs text-white/40 mb-2">Emerging Specialists (pheromone &gt; 0.60)</div>
              <div className="space-y-1">
                {activation.top_specialists.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <Badge variant="outline" className="text-cyan-400 border-cyan-400/20 text-xs h-4">
                      {s.task_type}
                    </Badge>
                    <span className="text-white/50 font-mono truncate">{s.agent_id.slice(0, 12)}…</span>
                    <span className="text-white/30">φ={s.pheromone.toFixed(3)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contract Net Auction */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Contract Net Auction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2 items-center flex-wrap">
            <select
              value={auctionType}
              onChange={(e) => setAuctionType(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/50"
            >
              {["research", "memory_write", "generic", "neural_retrain", "dream", "security_harden"].map((t) => (
                <option key={t} value={t} className="bg-gray-900">
                  {t}
                </option>
              ))}
            </select>
            <Button onClick={runAuction} disabled={auctioning} variant="outline" size="sm">
              {auctioning ? "Auctioning..." : "Run Auction"}
            </Button>
          </div>

          {auction && (
            <div className="space-y-2">
              <div className="flex gap-2 flex-wrap items-center">
                <span className="text-xs text-white/40">Winner:</span>
                <code className="text-xs text-cyan-400">{auction.winner_agent_id ?? "none"}</code>
                <span className="text-xs text-white/30">{auction.total_bids} bids</span>
              </div>
              {auction.top_bids.length > 0 && (
                <div className="space-y-1">
                  {auction.top_bids.slice(0, 5).map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <span className="text-white/30 w-3">{i + 1}.</span>
                      <span className="text-white/60 font-mono">{b.agent_id.slice(0, 10)}</span>
                      <span className="text-white/30">score={b.score.toFixed(3)}</span>
                      <span className="text-white/20">trust={b.trust.toFixed(2)}</span>
                      <span className="text-purple-400/60">φ={b.pheromone.toFixed(3)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Learning Pipeline */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Council → Neural Learning</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {learning ? (
            <div className="space-y-3">
              <div className="flex gap-4 text-xs text-white/40 flex-wrap">
                <span>Backend: <span className="text-cyan-400">{learning.backend}</span></span>
                <span>Samples: <span className="text-white/70">{learning.samples_processed}</span></span>
                <span>Queue: <span className="text-white/70">{learning.replay_queue_size}</span></span>
              </div>

              {/* Accuracy bars */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-white/40 w-32">River Accuracy</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${learning.river_accuracy >= 0.7 ? "bg-green-500" : learning.river_accuracy >= 0.5 ? "bg-cyan-500" : "bg-yellow-500"}`}
                      style={{ width: `${Math.round(learning.river_accuracy * 100)}%` }}
                    />
                  </div>
                  <span className="text-white/60 w-8 text-right">{Math.round(learning.river_accuracy * 100)}%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-white/40 w-32">z_self Calibration</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${learning.z_self_calibration >= 0.7 ? "bg-green-500" : learning.z_self_calibration >= 0.5 ? "bg-cyan-500" : "bg-yellow-500"}`}
                      style={{ width: `${Math.round(learning.z_self_calibration * 100)}%` }}
                    />
                  </div>
                  <span className="text-white/60 w-8 text-right">{Math.round(learning.z_self_calibration * 100)}%</span>
                </div>
              </div>

              {/* Event breakdown */}
              {Object.keys(learning.event_breakdown).length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {Object.entries(learning.event_breakdown).map(([type, count]) => (
                    <Badge key={type} variant="outline" className="text-xs h-5 text-white/50 border-white/10">
                      {type.replace("_", " ")}: {count}
                    </Badge>
                  ))}
                </div>
              )}

              <Button
                onClick={triggerLearning}
                disabled={triggeringLearn}
                variant="outline"
                size="sm"
                className="h-7 text-xs"
              >
                {triggeringLearn ? "Replaying..." : "Trigger SRC Replay"}
              </Button>
            </div>
          ) : (
            <p className="text-white/30 text-sm">Loading learning stats...</p>
          )}
        </CardContent>
      </Card>

      {/* Division Generals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-sm font-medium">
            <span>
              Division Generals{" "}
              {generals && (
                <span className="text-white/30 font-normal">
                  ({generals.division_generals} divisions · {generals.councils_tracked} councils)
                </span>
              )}
            </span>
            <Button onClick={loadData} variant="outline" size="sm" className="h-7 text-xs">
              Refresh
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {generals ? (
            <div className="space-y-4">
              {/* Summary */}
              <div className="flex gap-4 text-xs text-white/40 flex-wrap">
                <span>Mean Engagement: <span className="text-white/70">{(generals.mean_division_engagement * 100).toFixed(0)}%</span></span>
                <span>Mediations: <span className="text-white/70">{generals.total_mediations}</span></span>
                <span>Escalations: <span className="text-white/70">{generals.total_escalations_to_senior}</span></span>
                <span>Senior Generals: <span className="text-white/70">{generals.senior_generals}</span></span>
              </div>

              {/* Weakest divisions needing attention */}
              {generals.weakest_divisions?.length > 0 && (
                <div>
                  <div className="text-xs text-yellow-400/70 mb-1.5">⚠ Divisions Needing Attention</div>
                  <div className="space-y-1">
                    {generals.weakest_divisions.map((d) => (
                      <div key={d.general_id} className="flex items-center gap-2">
                        <EngagementBar score={d.engagement} label={d.name} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* General list */}
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {generals.generals.map((g) => (
                  <div
                    key={g.id}
                    className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0"
                  >
                    <div
                      className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                        g.division_engagement >= 0.6
                          ? "bg-green-400"
                          : g.division_engagement >= 0.4
                          ? "bg-yellow-400"
                          : "bg-red-400"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm text-white/80 truncate">{g.name}</span>
                        <span className="text-xs text-white/30">{g.council_count} councils</span>
                        <Badge variant="outline" className="text-xs h-4 text-white/40 border-white/10">
                          trust {(g.trust_level * 100).toFixed(0)}%
                        </Badge>
                      </div>
                      <div className="flex gap-3 text-xs text-white/30 mt-0.5">
                        <span>engagement: {(g.division_engagement * 100).toFixed(0)}%</span>
                        <span>mediated: {g.mediations_total}</span>
                        {g.escalations_to_senior > 0 && (
                          <span className="text-yellow-400/60">↑ {g.escalations_to_senior} escalated</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {generals.generals.length === 0 && (
                  <p className="text-white/30 text-sm">No generals initialized yet. GeneralRegistry may be loading.</p>
                )}
              </div>
            </div>
          ) : (
            <p className="text-white/30 text-sm">Loading generals status...</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
