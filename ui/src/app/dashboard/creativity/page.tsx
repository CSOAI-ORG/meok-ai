"use client";

import { useEffect, useState, useRef } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2, Link2, ArrowRight, Send, LayoutGrid, RefreshCw } from "lucide-react";

const GOLD = "#c9a84c";
const PURPLE = "#7c3aed";

// ─── Types ─────────────────────────────────────────────────────────

interface ArchiveStats {
  archive_size?: number;
  total_solutions?: number;
  avg_quality?: number;
  avg_novelty?: number;
  last_explored?: string;
  dimensions?: number;
  [key: string]: unknown;
}

interface ArchiveItem {
  id?: string;
  behavior_descriptor?: string;
  dimension?: string;
  quality?: number;
  novelty?: number;
  description?: string;
  content?: string;
  timestamp?: string;
  [key: string]: unknown;
}

interface Bisociation {
  concept_a: string;
  concept_b: string;
  bridge?: string;
  connection?: string;
  strength?: number;
}

interface CycleResult {
  items?: ArchiveItem[];
  new_solutions?: ArchiveItem[];
  summary?: string;
  explored?: number;
  bisociations?: Bisociation[];
  [key: string]: unknown;
}

interface ExploreResult {
  bisociations?: Bisociation[];
  connections?: Array<{ from: string; to: string; bridge?: string }>;
  summary?: string;
  [key: string]: unknown;
}

// ─── Bridge connection card ────────────────────────────────────────

function BridgeCard({ item, index }: { item: Bisociation; index: number }) {
  const strength = item.strength ?? null;
  const bridge = item.bridge ?? item.connection;

  return (
    <div
      className="rounded-2xl p-4 transition-all"
      style={{
        background: "rgba(124,58,237,0.06)",
        border: "1px solid rgba(124,58,237,0.2)",
        animation: `fadeInUp 0.35s ease-out ${index * 0.06}s both`,
      }}
    >
      {/* Concepts row */}
      <div className="flex items-center gap-2 flex-wrap mb-2">
        <span
          className="px-3 py-1 rounded-full text-sm font-semibold"
          style={{ background: "rgba(124,58,237,0.18)", color: "#c4b5fd" }}
        >
          {item.concept_a}
        </span>
        <div className="flex items-center gap-1 text-white/25 shrink-0">
          <div className="w-5 h-px" style={{ background: `${GOLD}50` }} />
          <Link2 className="w-3.5 h-3.5" style={{ color: GOLD }} />
          <div className="w-5 h-px" style={{ background: `${GOLD}50` }} />
        </div>
        <span
          className="px-3 py-1 rounded-full text-sm font-semibold"
          style={{ background: "rgba(124,58,237,0.18)", color: "#c4b5fd" }}
        >
          {item.concept_b}
        </span>
        {strength !== null && (
          <span
            className="ml-auto text-xs font-mono"
            style={{ color: GOLD, opacity: 0.7 }}
          >
            {(strength * 100).toFixed(0)}%
          </span>
        )}
      </div>

      {/* Bridge explanation */}
      {bridge && (
        <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
          {bridge}
        </p>
      )}
    </div>
  );
}

// ─── Archive item card ─────────────────────────────────────────────

function ProgressBar({ value, color }: { value: number; color: "gold" | "purple" }) {
  const pct = Math.max(0, Math.min(1, value ?? 0)) * 100;
  return (
    <div className="w-full h-1.5 rounded-full bg-white/8 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{
          width: `${pct}%`,
          background: color === "gold" ? GOLD : PURPLE,
        }}
      />
    </div>
  );
}

function ArchiveItemCard({ item, index }: { item: ArchiveItem; index: number }) {
  const ts = item.timestamp
    ? new Date(item.timestamp).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      })
    : null;

  return (
    <div
      className="rounded-xl p-4 transition-all hover:border-white/15"
      style={{
        background: "#0f0e1a",
        border: "1px solid rgba(255,255,255,0.08)",
        animation: `fadeInUp 0.35s ease-out ${index * 0.04}s both`,
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <code className="text-xs text-white/25 font-mono">
          #{String(index + 1).padStart(3, "0")}
        </code>
        {ts && <span className="text-xs text-white/20">{ts}</span>}
      </div>

      {(item.behavior_descriptor || item.dimension) && (
        <div className="mb-2">
          <Badge variant="cyan">{item.behavior_descriptor ?? item.dimension}</Badge>
        </div>
      )}

      {(item.description || item.content) && (
        <p className="text-sm text-white/65 mb-3 line-clamp-3 leading-relaxed">
          {item.description ?? item.content}
        </p>
      )}

      <div className="space-y-2">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-white/35">Quality</span>
            <span className="text-xs font-mono" style={{ color: GOLD }}>
              {((item.quality ?? 0) * 100).toFixed(0)}%
            </span>
          </div>
          <ProgressBar value={item.quality ?? 0} color="gold" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-white/35">Novelty</span>
            <span className="text-xs font-mono text-purple-400">
              {((item.novelty ?? 0) * 100).toFixed(0)}%
            </span>
          </div>
          <ProgressBar value={item.novelty ?? 0} color="purple" />
        </div>
      </div>
    </div>
  );
}

// ─── Scatter plot ──────────────────────────────────────────────────

function ScatterPlot({ items }: { items: ArchiveItem[] }) {
  if (items.length === 0) return null;
  return (
    <Card style={{ background: "#0f0e1a", border: "1px solid rgba(255,255,255,0.08)" }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LayoutGrid className="w-4 h-4" style={{ color: GOLD }} />
          Quality vs Novelty Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="relative w-full h-48 rounded-lg overflow-hidden"
          style={{ background: "#080715", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="absolute bottom-1.5 right-2.5 text-xs text-white/20">Quality →</span>
          <span
            className="absolute top-2 left-1.5 text-xs text-white/20"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Novelty →
          </span>
          {items.map((item, i) => {
            const x = Math.max(3, Math.min(96, (item.quality ?? 0) * 94));
            const y = Math.max(3, Math.min(94, (1 - (item.novelty ?? 0)) * 94));
            const q = item.quality ?? 0;
            const n = item.novelty ?? 0;
            const isHighValue = q > 0.6 && n > 0.6;
            const dotColor = isHighValue
              ? GOLD
              : q > 0.5
              ? "rgba(202,138,4,0.65)"
              : n > 0.5
              ? `${PURPLE}aa`
              : "rgba(255,255,255,0.18)";
            return (
              <div
                key={i}
                className="absolute w-2.5 h-2.5 rounded-full transition-transform hover:scale-150 cursor-pointer"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%,-50%)",
                  background: dotColor,
                  boxShadow: isHighValue ? `0 0 6px ${GOLD}80` : "none",
                }}
                title={`Q:${(q * 100).toFixed(0)}% N:${(n * 100).toFixed(0)}% — ${item.behavior_descriptor ?? item.description ?? ""}`}
              />
            );
          })}
        </div>
        <div className="flex items-center gap-4 mt-2.5 text-xs text-white/30">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: GOLD }} />
            High quality + novelty
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: `${PURPLE}aa` }} />
            High novelty
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-yellow-600/65" />
            High quality
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Skeleton ──────────────────────────────────────────────────────

function Skeleton({ className }: { className?: string }) {
  return <div className={`rounded-lg bg-white/5 animate-pulse ${className ?? ""}`} />;
}

// ─── Empty state ───────────────────────────────────────────────────

function EmptyCreativity({ onExplore, cycling }: { onExplore: () => void; cycling: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(124,58,237,0.1))",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Sparkles className="w-8 h-8" style={{ color: `${GOLD}70` }} />
      </div>
      <h3 className="text-base font-semibold text-white/45 mb-2">
        Creative archive is empty
      </h3>
      <p className="text-sm text-white/30 max-w-sm leading-relaxed mb-6">
        The Quality-Diversity archive explores creative solutions across behavior
        dimensions. Trigger the first cycle to start building MEOK's creative repertoire.
      </p>
      <button
        type="button"
        onClick={onExplore}
        disabled={cycling}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          background: `${GOLD}18`,
          border: `1px solid ${GOLD}40`,
          color: GOLD,
        }}
        onMouseEnter={(e) => { if (!cycling) (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}28`; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}18`; }}
      >
        {cycling ? (
          <><Loader2 className="w-4 h-4 animate-spin" />Exploring…</>
        ) : (
          <><Sparkles className="w-4 h-4" />Trigger First Exploration</>
        )}
      </button>
    </div>
  );
}

// ─── Idea explorer input ───────────────────────────────────────────

function IdeaExplorer({ onResult }: { onResult: (r: ExploreResult) => void }) {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const explore = async () => {
    const text = idea.trim();
    if (!text || loading) return;
    setLoading(true);
    setError(null);
    try {
      const result = await callTool<ExploreResult>("find_bisociations", { concept: text });
      onResult(result);
      setIdea("");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="rounded-2xl p-5 space-y-4"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${GOLD}25`,
      }}
    >
      <div>
        <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Explore an idea</p>
        <p className="text-sm text-white/50">
          Enter any concept and MEOK will find surprising connections to other ideas in its knowledge.
        </p>
      </div>

      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") explore(); }}
          placeholder="e.g. quantum mechanics, stoicism, jazz…"
          disabled={loading}
          className="flex-1 px-4 py-2.5 rounded-xl text-sm text-white bg-white/5 border border-white/10 placeholder-white/20 focus:outline-none transition-colors disabled:opacity-50"
          style={{ caretColor: GOLD }}
          onFocus={(e) => { e.currentTarget.style.borderColor = `${GOLD}50`; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
        />
        <button
          type="button"
          onClick={explore}
          disabled={!idea.trim() || loading}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
          style={{
            background: `${GOLD}18`,
            border: `1px solid ${GOLD}40`,
            color: GOLD,
          }}
          onMouseEnter={(e) => { const btn = e.currentTarget as HTMLButtonElement; if (!btn.disabled) btn.style.background = `${GOLD}28`; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}18`; }}
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Explore</span>
            </>
          )}
        </button>
      </div>

      {error && (
        <p
          className="text-xs px-3 py-2 rounded-lg"
          style={{ color: "#fbbf24", background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.15)" }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────

export default function CreativityPage() {
  const [archiveStats, setArchiveStats] = useState<ArchiveStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [cycling, setCycling] = useState(false);
  const [cycleResult, setCycleResult] = useState<CycleResult | null>(null);
  const [archiveItems, setArchiveItems] = useState<ArchiveItem[]>([]);
  const [exploreBisociations, setExploreBisociations] = useState<Bisociation[]>([]);

  useEffect(() => {
    callTool<ArchiveStats>("get_qd_archive_stats")
      .then(setArchiveStats)
      .catch((e) => {
        console.error("get_qd_archive_stats failed:", e);
        setArchiveStats({ archive_size: 0, total_solutions: 0, avg_quality: 0, avg_novelty: 0 });
      })
      .finally(() => setStatsLoading(false));
  }, []);

  const triggerCycle = async () => {
    setCycling(true);
    try {
      const result = await callTool<CycleResult>("trigger_creativity_cycle");
      setCycleResult(result);
      const newItems: ArchiveItem[] = result.items ?? result.new_solutions ?? [];
      if (newItems.length > 0) {
        setArchiveItems((prev) => [...newItems, ...prev]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setCycling(false);
    }
  };

  const handleExploreResult = (result: ExploreResult) => {
    const bisociations: Bisociation[] = result.bisociations ?? [];
    // Also handle alternate connection format
    const fromConnections: Bisociation[] = (result.connections ?? []).map((c) => ({
      concept_a: c.from,
      concept_b: c.to,
      bridge: c.bridge,
    }));
    setExploreBisociations([...bisociations, ...fromConnections]);
  };

  const archiveSize = archiveStats?.archive_size ?? archiveStats?.total_solutions ?? 0;
  const avgQuality = archiveStats?.avg_quality;
  const avgNovelty = archiveStats?.avg_novelty;
  const lastExplored = archiveStats?.last_explored
    ? new Date(archiveStats.last_explored as string).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Never";

  const statItems = [
    { label: "Archive Size",  value: statsLoading ? null : archiveSize,                                         color: GOLD            },
    { label: "Avg Quality",   value: statsLoading ? null : (avgQuality !== undefined ? `${(avgQuality * 100).toFixed(0)}%` : "—"),  color: "#fbbf24"       },
    { label: "Avg Novelty",   value: statsLoading ? null : (avgNovelty !== undefined ? `${(avgNovelty * 100).toFixed(0)}%` : "—"),  color: "#a78bfa"       },
    { label: "Last Explored", value: statsLoading ? null : lastExplored,                                         color: "rgba(255,255,255,0.65)" },
  ];

  return (
    <div
      className="min-h-screen bg-[#0d0c18] py-8"
      style={{ animation: "fadeIn 0.4s ease-out both" }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-6 space-y-6">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Sparkles className="w-6 h-6" style={{ color: GOLD }} />
              Creativity
            </h1>
            <p className="text-sm text-white/35 mt-1">
              Bisociations · novel connections · Quality-Diversity exploration
            </p>
          </div>
          <button
            type="button"
            onClick={triggerCycle}
            disabled={cycling}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.7)",
            }}
            onMouseEnter={(e) => { const btn = e.currentTarget as HTMLButtonElement; if (!btn.disabled) btn.style.borderColor = `${GOLD}40`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
          >
            {cycling ? (
              <><Loader2 className="w-4 h-4 animate-spin" />Exploring…</>
            ) : (
              <><RefreshCw className="w-4 h-4" />Run Creativity Cycle</>
            )}
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {statItems.map(({ label, value, color }) => (
            <div
              key={label}
              className="rounded-xl p-4"
              style={{ background: "#0f0e1a", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-xs text-white/35 uppercase tracking-wider mb-1">{label}</p>
              {value === null ? (
                <Skeleton className="h-7 w-14" />
              ) : (
                <p className="text-2xl font-bold" style={{ color }}>{value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Cycle result banner */}
        {cycleResult?.summary && (
          <div
            className="rounded-xl px-4 py-3 text-sm"
            style={{
              background: `${GOLD}06`,
              border: `1px solid ${GOLD}20`,
              animation: "fadeInUp 0.3s ease-out both",
            }}
          >
            <span className="font-semibold" style={{ color: GOLD }}>Cycle complete. </span>
            <span className="text-white/60">{cycleResult.summary}</span>
            {cycleResult.explored !== undefined && (
              <span className="text-white/35 ml-1">{cycleResult.explored} solutions explored.</span>
            )}
          </div>
        )}

        {/* Idea explorer */}
        <IdeaExplorer onResult={handleExploreResult} />

        {/* Explore results — bisociations */}
        {exploreBisociations.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Link2 className="w-4 h-4" style={{ color: GOLD }} />
              <h2 className="text-xs font-medium text-white/50 uppercase tracking-wider">
                Connections found
              </h2>
              <ArrowRight className="w-3.5 h-3.5 text-white/20" />
              <span className="text-xs text-white/25">{exploreBisociations.length}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {exploreBisociations.map((b, i) => (
                <BridgeCard key={i} item={b} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Scatter plot */}
        {archiveItems.length > 0 && <ScatterPlot items={archiveItems} />}

        {/* Archive grid or empty */}
        {archiveItems.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-medium text-white/40 uppercase tracking-wider">
                Archive Items
              </h2>
              <span className="text-xs text-white/25 font-mono">{archiveItems.length} solutions</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {archiveItems.map((item, i) => (
                <ArchiveItemCard key={item.id ?? i} item={item} index={i} />
              ))}
            </div>
          </div>
        ) : (
          !cycling && <EmptyCreativity onExplore={triggerCycle} cycling={cycling} />
        )}

        <div className="h-6" />
      </div>
    </div>
  );
}
