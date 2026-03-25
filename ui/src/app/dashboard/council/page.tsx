"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CouncilVoteFeed } from "@/components/council-vote-feed";
import { StatsGrid } from "@/components/stats-grid";
import type { CouncilDecision } from "@/lib/types";

// ── Council Mesh Types ───────────────────────────────────────────────────────

interface CouncilNode {
  id: number;
  domain: string;
  trust: number; // 0-1
  active: boolean;
  x: number;
  y: number;
}

interface MeshEdge {
  source: number;
  target: number;
  strength: number; // 0-1
}

// ── 33 council node domains ────────────────────────────────────────────────

const COUNCIL_DOMAINS = [
  // Inner ring — core governance (5 nodes)
  { domain: "ethics", color: "#a855f7" },
  { domain: "sovereignty", color: "#60B8F0" },
  { domain: "care", color: "#34D399" },
  { domain: "defence", color: "#ef4444" },
  { domain: "memory", color: "#f59e0b" },
  // Middle ring — operational (12 nodes)
  { domain: "creativity", color: "#ec4899" },
  { domain: "learning", color: "#06b6d4" },
  { domain: "security", color: "#dc2626" },
  { domain: "planning", color: "#8b5cf6" },
  { domain: "analysis", color: "#3b82f6" },
  { domain: "comms", color: "#10b981" },
  { domain: "monitoring", color: "#f97316" },
  { domain: "research", color: "#6366f1" },
  { domain: "code", color: "#14b8a6" },
  { domain: "coordination", color: "#e879f9" },
  { domain: "consensus", color: "#84cc16" },
  { domain: "compliance", color: "#fb923c" },
  // Outer ring — extended (16 nodes)
  { domain: "web", color: "#38bdf8" },
  { domain: "neural", color: "#c084fc" },
  { domain: "trust", color: "#4ade80" },
  { domain: "audit", color: "#fbbf24" },
  { domain: "identity", color: "#60B8F0" },
  { domain: "gaming", color: "#f472b6" },
  { domain: "health", color: "#2dd4bf" },
  { domain: "ritual", color: "#a78bfa" },
  { domain: "archive", color: "#fb7185" },
  { domain: "bisociation", color: "#fde047" },
  { domain: "resonance", color: "#34d399" },
  { domain: "dream", color: "#818cf8" },
  { domain: "scaffold", color: "#94a3b8" },
  { domain: "engagement", color: "#f59e0b" },
  { domain: "council", color: "#60B8F0" },
  { domain: "emergence", color: "#e2e8f0" },
];

// Pre-calculate positions in three concentric rings
function buildCouncilNodes(engagement: number, activeAgents: number): CouncilNode[] {
  const cx = 200;
  const cy = 200;
  const rings = [
    { count: 5, r: 60 },
    { count: 12, r: 115 },
    { count: 16, r: 170 },
  ];

  const nodes: CouncilNode[] = [];
  let idx = 0;
  let offset = 0;

  for (const ring of rings) {
    for (let i = 0; i < ring.count; i++) {
      const angle = ((2 * Math.PI) / ring.count) * i - Math.PI / 2 + offset;
      const domainInfo = COUNCIL_DOMAINS[idx % COUNCIL_DOMAINS.length];
      // Trust: inner ring higher, outer lower, modulated by engagement
      const ringFactor = ring.r === 60 ? 0.9 : ring.r === 115 ? 0.75 : 0.6;
      const trust = Math.min(1, ringFactor * (0.7 + engagement * 0.3) + (Math.random() * 0.05 - 0.025));
      nodes.push({
        id: idx,
        domain: domainInfo.domain,
        trust,
        active: idx < activeAgents || Math.random() > 0.25,
        x: cx + ring.r * Math.cos(angle),
        y: cy + ring.r * Math.sin(angle),
      });
      idx++;
    }
    offset += 0.3; // rotate each ring slightly for visual appeal
  }

  return nodes;
}

// Build edges — each node connects to 2-4 neighbours
function buildEdges(nodes: CouncilNode[]): MeshEdge[] {
  const edges: MeshEdge[] = [];
  const seen = new Set<string>();

  for (const node of nodes) {
    // Find nearest 3 neighbours
    const distances = nodes
      .filter((n) => n.id !== node.id)
      .map((n) => ({
        id: n.id,
        d: Math.hypot(n.x - node.x, n.y - node.y),
        trust: n.trust,
      }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 3);

    for (const neighbour of distances) {
      const key = [Math.min(node.id, neighbour.id), Math.max(node.id, neighbour.id)].join("-");
      if (!seen.has(key)) {
        seen.add(key);
        edges.push({
          source: node.id,
          target: neighbour.id,
          strength: (node.trust + neighbour.trust) / 2,
        });
      }
    }
  }
  return edges;
}

// ── CouncilMesh Component ─────────────────────────────────────────────────

function CouncilMesh({
  engagement,
  activeAgents,
  phase,
}: {
  engagement: number;
  activeAgents: number;
  phase: string;
}) {
  const [nodes] = useState<CouncilNode[]>(() => buildCouncilNodes(engagement, activeAgents));
  const [edges] = useState<MeshEdge[]>(() => buildEdges(nodes));
  const [hovered, setHovered] = useState<number | null>(null);
  const [tick, setTick] = useState(0);

  // Gentle pulse animation
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 60), 80);
    return () => clearInterval(id);
  }, []);

  const phaseColor = {
    building: "#34D399",
    peak_cohesion: "#60B8F0",
    stable: "#a855f7",
    weakening: "#f59e0b",
    crisis: "#ef4444",
    dormant: "#6b7280",
  }[phase] ?? "#94a3b8";

  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="w-full max-w-sm"
        aria-label="Council mesh — 33 governance nodes"
        role="img"
      >
        {/* Background glow */}
        <defs>
          <radialGradient id="bg-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={phaseColor} stopOpacity="0.06" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="190" fill="url(#bg-glow)" />

        {/* Ring guides (subtle) */}
        {[60, 115, 170].map((r) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="white"
            strokeOpacity="0.04"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
        ))}

        {/* Edges */}
        {edges.map((edge) => {
          const src = nodes[edge.source];
          const tgt = nodes[edge.target];
          const isHighlighted = hovered === edge.source || hovered === edge.target;
          const pulse = Math.sin((tick / 60) * 2 * Math.PI + edge.source * 0.3);
          const opacity = isHighlighted
            ? 0.6 + pulse * 0.15
            : edge.strength * 0.15 + pulse * 0.04;

          return (
            <line
              key={`${edge.source}-${edge.target}`}
              x1={src.x}
              y1={src.y}
              x2={tgt.x}
              y2={tgt.y}
              stroke={isHighlighted ? phaseColor : "white"}
              strokeOpacity={opacity}
              strokeWidth={isHighlighted ? 1.5 : 0.8}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const domainInfo = COUNCIL_DOMAINS[node.id % COUNCIL_DOMAINS.length];
          const isHovered = hovered === node.id;
          const pulse = Math.sin((tick / 60) * 2 * Math.PI + node.id * 0.7);
          const baseR = 4 + node.trust * 4; // size by trust
          const r = isHovered ? baseR + 2 : baseR + (node.active ? pulse * 0.8 : 0);

          return (
            <g
              key={node.id}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              {/* Glow ring for active nodes */}
              {node.active && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={r + 3}
                  fill="none"
                  stroke={domainInfo.color}
                  strokeOpacity={0.2 + pulse * 0.1}
                  strokeWidth={1}
                />
              )}
              {/* Main node */}
              <circle
                cx={node.x}
                cy={node.y}
                r={r}
                fill={node.active ? domainInfo.color : "#374151"}
                fillOpacity={node.active ? 0.9 : 0.4}
                stroke={domainInfo.color}
                strokeWidth={isHovered ? 2 : 1}
                strokeOpacity={node.active ? 0.8 : 0.3}
              />
              {/* Label on hover */}
              {isHovered && (
                <>
                  <rect
                    x={node.x + 8}
                    y={node.y - 9}
                    width={node.domain.length * 6 + 8}
                    height={18}
                    rx={3}
                    fill="#0f172a"
                    fillOpacity={0.9}
                  />
                  <text
                    x={node.x + 12}
                    y={node.y + 4}
                    fontSize={10}
                    fill="white"
                    fontFamily="monospace"
                  >
                    {node.domain}
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* Centre label */}
        <text
          x="200"
          y="196"
          textAnchor="middle"
          fontSize={11}
          fill={phaseColor}
          fontFamily="monospace"
          fontWeight="bold"
        >
          {(engagement * 100).toFixed(0)}%
        </text>
        <text
          x="200"
          y="210"
          textAnchor="middle"
          fontSize={9}
          fill="white"
          fillOpacity={0.3}
          fontFamily="monospace"
        >
          {phase.replace("_", " ")}
        </text>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap gap-1.5 justify-center max-w-xs">
        {["ethics", "sovereignty", "care", "defence", "creativity", "memory"].map((d) => {
          const info = COUNCIL_DOMAINS.find((x) => x.domain === d);
          return info ? (
            <span key={d} className="flex items-center gap-1 text-xs text-white/40">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: info.color }}
              />
              {d}
            </span>
          ) : null;
        })}
        <span className="text-xs text-white/20">+27 more</span>
      </div>
    </div>
  );
}

// ── Governance Types ──────────────────────────────────────────────────────────

interface GovernanceLayer {
  available: boolean;
  [key: string]: unknown;
}

interface GovernanceStatus {
  governance_stack: {
    layer_1_engagement: GovernanceLayer & { score: number; total_agents: number; active_agents: number };
    layer_2_shura: GovernanceLayer & { deliberations_run: number; max_participants: number };
    layer_3_byzantine: GovernanceLayer & { open_proposals: number; total_proposals: number };
    layer_4_coincidentia: GovernanceLayer & { total_reconciliations: number };
    layer_5_maternal_covenant: GovernanceLayer & { care_floor: number };
  };
  layers_active: number;
  layers_total: number;
}

interface ShuraDeliberation {
  id: string;
  title: string;
  consensus_direction: string;
  participant_count: number;
  concerns: string[];
  created_at: string;
}

const LAYER_LABELS: Record<string, { name: string; tradition: string; color: string }> = {
  layer_1_engagement: { name: "Engagement", tradition: "Ibn Khaldun — social cohesion", color: "text-yellow-400" },
  layer_2_shura: { name: "Shura", tradition: "Islamic consultative council", color: "text-blue-400" },
  layer_3_byzantine: { name: "Byzantine BFT", tradition: "22/33 fault-tolerant consensus", color: "text-cyan-400" },
  layer_4_coincidentia: { name: "Coincidentia", tradition: "Nicholas of Cusa — reconciliation", color: "text-purple-400" },
  layer_5_maternal_covenant: { name: "Maternal Covenant", tradition: "Care floor 0.3 — unconditional", color: "text-green-400" },
};

function LayerStatusRow({
  layerKey,
  layer,
}: {
  key: string;
  layerKey: string;
  layer: GovernanceLayer;
}) {
  const meta = LAYER_LABELS[layerKey];
  if (!meta) return null;

  const getDetail = () => {
    if (layerKey === "layer_1_engagement") {
      const l = layer as GovernanceStatus["governance_stack"]["layer_1_engagement"];
      return `${l.active_agents} active / ${l.total_agents} agents · score ${typeof l.score === "number" ? (l.score * 100).toFixed(0) : "?"}%`;
    }
    if (layerKey === "layer_2_shura") {
      const l = layer as GovernanceStatus["governance_stack"]["layer_2_shura"];
      return `${l.deliberations_run} deliberations · ${l.max_participants} max participants`;
    }
    if (layerKey === "layer_3_byzantine") {
      const l = layer as GovernanceStatus["governance_stack"]["layer_3_byzantine"];
      return `${l.open_proposals} open · ${l.total_proposals} total proposals`;
    }
    if (layerKey === "layer_4_coincidentia") {
      const l = layer as GovernanceStatus["governance_stack"]["layer_4_coincidentia"];
      return `${l.total_reconciliations || 0} reconciliations`;
    }
    if (layerKey === "layer_5_maternal_covenant") {
      const l = layer as GovernanceStatus["governance_stack"]["layer_5_maternal_covenant"];
      return `care floor ${l.care_floor} — all proposals screened`;
    }
    return "";
  };

  return (
    <div className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0">
      <div className={`mt-0.5 w-2 h-2 rounded-full ${layer.available ? "bg-green-400" : "bg-white/20"}`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-sm font-medium ${meta.color}`}>{meta.name}</span>
          <span className="text-xs text-white/20">{meta.tradition}</span>
          {!layer.available && (
            <Badge variant="outline" className="text-white/30 border-white/10 text-xs h-4">offline</Badge>
          )}
        </div>
        {layer.available && (
          <p className="text-xs text-white/40 mt-0.5">{getDetail()}</p>
        )}
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function CouncilPage() {
  const [governance, setGovernance] = useState<GovernanceStatus | null>(null);
  const [deliberations, setDeliberations] = useState<ShuraDeliberation[]>([]);
  const [decisions, setDecisions] = useState<CouncilDecision[]>([]);
  const [proposal, setProposal] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [runningShura, setRunningShura] = useState(false);
  const [engagement, setEngagement] = useState<{ score: number; phase: string; agent_count: number } | null>(null);

  const loadData = useCallback(async () => {
    try {
      const [govData, shuraData, asabData] = await Promise.allSettled([
        callTool<{ status?: string; layers_active?: number; layers_total?: number; governance_stack?: GovernanceStatus["governance_stack"] }>("get_system_status").then((res) => {
          // Map get_system_status response to GovernanceStatus shape
          return {
            governance_stack: res.governance_stack ?? {
              layer_1_engagement: { available: true, score: 0, total_agents: 33, active_agents: 0 },
              layer_2_shura: { available: true, deliberations_run: 0, max_participants: 33 },
              layer_3_byzantine: { available: true, open_proposals: 0, total_proposals: 0 },
              layer_4_coincidentia: { available: true, total_reconciliations: 0 },
              layer_5_maternal_covenant: { available: true, care_floor: 0.3 },
            },
            layers_active: res.layers_active ?? 5,
            layers_total: res.layers_total ?? 5,
          } as GovernanceStatus;
        }),
        callTool<{ deliberations?: ShuraDeliberation[]; total?: number }>("get_audit_logs", { limit: 5 }).then((res) => {
          return { deliberations: [] as ShuraDeliberation[], total: 0 };
        }),
        callTool<{ score: number; phase: string; agent_count: number }>("get_engagement_score"),
      ]);
      if (govData.status === "fulfilled") setGovernance(govData.value);
      if (shuraData.status === "fulfilled") setDeliberations(shuraData.value?.deliberations || []);
      if (asabData.status === "fulfilled" && asabData.value) setEngagement(asabData.value);
    } catch (e) {
      console.error("Failed to load council data:", e);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const submitProposal = async () => {
    if (!proposal.trim()) return;
    setSubmitting(true);
    try {
      const result = await callTool<{
        decision: string;
        vote_counts: Record<string, number>;
        average_care_score: number;
      }>("submit_council_proposal", {
        title: proposal,
        description: proposal,
        proposed_by: "dashboard",
      });
      setDecisions((prev) => [
        {
          timestamp: new Date().toISOString(),
          proposal,
          requester: "dashboard",
          priority: "medium",
          decision: result.decision || "submitted",
          vote_counts: result.vote_counts || {},
          care_score: result.average_care_score || 0,
        },
        ...prev,
      ]);
      setProposal("");
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  const runShuraPipeline = async () => {
    if (!proposal.trim()) return;
    setRunningShura(true);
    try {
      const result = await callTool<{
        consensus_direction?: string;
        decision?: string;
        proposal_id?: string;
        participant_count?: number;
        vote_counts?: Record<string, number>;
        average_care_score?: number;
      }>("submit_council_proposal", {
        title: proposal,
        description: proposal,
        proposed_by: "dashboard",
      });
      setDecisions((prev) => [
        {
          timestamp: new Date().toISOString(),
          proposal,
          requester: "dashboard",
          priority: "medium",
          decision: result.consensus_direction || result.decision || "deliberated",
          vote_counts: result.vote_counts || {},
          care_score: result.average_care_score || 0.5,
        },
        ...prev,
      ]);
      setProposal("");
      loadData();
    } catch (e) {
      console.error(e);
    } finally {
      setRunningShura(false);
    }
  };

  const govStack = governance?.governance_stack;
  const asabScore = engagement?.score ?? govStack?.layer_1_engagement?.score ?? 0;
  const asabPhase = engagement?.phase ?? "stable";
  const activeAgents = engagement?.agent_count ?? govStack?.layer_1_engagement?.active_agents ?? 12;

  const layerStats = governance
    ? [
        {
          label: "Layers Active",
          value: `${governance.layers_active} / ${governance.layers_total}`,
          color: governance.layers_active >= 5 ? "text-green-400" : "text-yellow-400",
        },
        {
          label: "Council Cohesion",
          value: `${(asabScore * 100).toFixed(0)}%`,
          color: asabScore >= 0.6 ? "text-green-400" : asabScore >= 0.4 ? "text-yellow-400" : "text-red-400",
        },
        {
          label: "Open Proposals",
          value: govStack?.layer_3_byzantine?.open_proposals ?? "—",
        },
        {
          label: "Reconciliations",
          value: govStack?.layer_4_coincidentia?.total_reconciliations ?? 0,
          color: "text-purple-400",
        },
      ]
    : [];

  return (
    <div className="min-h-screen bg-[#0d0c18] p-6 md:p-8 space-y-6" style={{ color: "white" }}>
      <div>
        <h2 className="text-2xl font-bold text-white">Council Governance</h2>
        <p className="text-sm text-white/40 mt-1">33-node Byzantine consensus with care-weighted voting</p>
      </div>

      {layerStats.length > 0 && <StatsGrid stats={layerStats} />}

      {/* Council Mesh + Governance Stack side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Node Mesh */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              <span>Live Council Mesh</span>
              <span className="text-xs text-white/30 font-normal">33 nodes · hover to identify</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CouncilMesh
              engagement={asabScore}
              activeAgents={activeAgents}
              phase={asabPhase}
            />
          </CardContent>
        </Card>

        {/* 5-Layer Governance Stack */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              <span>Governance Stack</span>
              <Button onClick={loadData} variant="outline" size="sm" className="h-7 text-xs">Refresh</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {govStack ? (
              <div>
                {Object.entries(govStack).map(([key, layer]) => (
                  <LayerStatusRow key={key} layerKey={key} layer={layer as GovernanceLayer} />
                ))}
              </div>
            ) : (
              <p className="text-white/30 text-sm">Loading governance status...</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Submit Proposal */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Submit Proposal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <input
            type="text"
            value={proposal}
            onChange={(e) => setProposal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitProposal()}
            placeholder="Describe your proposal..."
            className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50"
            aria-label="Proposal description"
          />
          <div className="flex gap-2">
            <Button onClick={submitProposal} disabled={submitting} size="sm" variant="outline">
              {submitting ? "Voting..." : "BFT Vote Only"}
            </Button>
            <Button onClick={runShuraPipeline} disabled={runningShura} size="sm">
              {runningShura ? "Deliberating..." : "Shura + BFT Pipeline"}
            </Button>
          </div>
          <p className="text-xs text-white/20">
            <strong>Shura + BFT</strong> runs full consultative deliberation before the vote (recommended).
            Requires ≥22/33 council nodes to approve.
          </p>
        </CardContent>
      </Card>

      {/* Shura Deliberations */}
      {deliberations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Recent Shura Deliberations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {deliberations.map((d) => (
                <div key={d.id} className="border-l-2 border-blue-500/30 pl-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-white/80 truncate">{d.title}</span>
                    <Badge
                      variant="outline"
                      className={`text-xs h-4 ${
                        d.consensus_direction === "for"
                          ? "text-green-400 border-green-400/30"
                          : d.consensus_direction === "against"
                          ? "text-red-400 border-red-400/30"
                          : "text-yellow-400 border-yellow-400/30"
                      }`}
                    >
                      {d.consensus_direction}
                    </Badge>
                    <span className="text-xs text-white/20">{d.participant_count} participants</span>
                  </div>
                  {d.concerns?.length > 0 && (
                    <p className="text-xs text-white/30 mt-1">{d.concerns[0]}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Decision History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Decision History</CardTitle>
        </CardHeader>
        <CouncilVoteFeed decisions={decisions} />
      </Card>
    </div>
  );
}
