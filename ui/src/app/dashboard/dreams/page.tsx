"use client";

import { useEffect, useState, useCallback } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Moon, Sparkles, Brain, Link2, BookOpen, Loader2, Stars, Clock, AlertCircle } from "lucide-react";
import type { DreamInsight } from "@/lib/dream";

const GOLD = "#c9a84c";
const PURPLE = "#7c3aed";

// ─── Types ─────────────────────────────────────────────────────────

interface DreamTargets {
  targets?: Array<{
    theme: string;
    priority: number;
    source: string;
  }>;
}

interface DreamResult {
  type?: string;
  timestamp?: string;
  insights?: string[];
  consolidations?: Array<{ memory: string; strength?: number }>;
  bisociations?: Array<{ concept_a: string; concept_b: string; connection?: string }>;
  summary?: string;
  [key: string]: unknown;
}

interface ApiDreamData {
  insights: DreamInsight[];
  themes: string[];
  processed_at: string;
  has_data: boolean;
}

// ─── Moon phases / priority dots ──────────────────────────────────

const MOON_PHASES = ["🌑", "🌒", "🌓", "🌔", "🌕"];

function PriorityDots({ priority }: { priority: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: i <= priority ? GOLD : "rgba(255,255,255,0.1)" }}
        />
      ))}
    </div>
  );
}

// ─── Empty state ───────────────────────────────────────────────────

function DreamEmptyState() {
  return (
    <div
      className="flex flex-col items-center justify-center py-16 text-center rounded-2xl"
      style={{
        background: "rgba(124,58,237,0.04)",
        border: "1px dashed rgba(124,58,237,0.25)",
      }}
    >
      <div className="text-5xl mb-4 select-none" aria-hidden="true">
        🌙✨
      </div>
      <h3 className="text-lg font-semibold text-white/60 mb-2">
        MEOK dreams while you sleep.
      </h3>
      <p className="text-sm text-white/35 max-w-sm leading-relaxed mb-6">
        Your companion analyses your conversations each night to find patterns and insights.
        Start chatting to create your first dream cycle, or trigger one manually below.
      </p>
      <div className="grid grid-cols-3 gap-5 text-xs text-white/35 max-w-md">
        <div className="flex flex-col items-center gap-1.5">
          <Brain className="w-5 h-5" style={{ color: "rgba(96,165,250,0.5)" }} />
          <span>Memory consolidation</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Link2 className="w-5 h-5" style={{ color: "rgba(124,58,237,0.6)" }} />
          <span>Creative connections</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <BookOpen className="w-5 h-5" style={{ color: `${GOLD}80` }} />
          <span>Morning brief prep</span>
        </div>
      </div>
    </div>
  );
}

// ─── API insight card (from /api/user/dreams) ──────────────────────

function ApiInsightCard({ insight, index }: { insight: DreamInsight; index: number }) {
  const confidencePercent = Math.round(insight.confidence * 100);
  return (
    <div
      className="rounded-lg border border-purple-700/30 bg-gradient-to-r from-purple-900/20 to-indigo-900/10 p-4 space-y-3"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-100 capitalize mb-1">{insight.pattern}</h4>
          <p className="text-sm text-gray-300 leading-relaxed">{insight.insight}</p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-lg font-semibold text-purple-300">{confidencePercent}%</div>
          <div className="text-xs text-gray-400">confidence</div>
        </div>
      </div>
      {insight.connections.length > 0 && (
        <div className="flex flex-wrap gap-1 pt-2 border-t border-purple-700/20">
          {insight.connections.map((conn) => (
            <Badge
              key={conn}
              variant="outline"
              className="text-xs bg-purple-900/30 text-purple-200 border-purple-700/30"
            >
              {conn}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Error banner ──────────────────────────────────────────────────

function ErrorBanner({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div
      className="rounded-lg p-4 flex items-center justify-between gap-3 text-sm"
      style={{ background: "#1f0a0a", border: "1px solid rgba(239,68,68,0.3)", color: "#FCA5A5" }}
    >
      <div className="flex items-center gap-2">
        <AlertCircle className="w-4 h-4 shrink-0" />
        {message}
      </div>
      <button
        onClick={onRetry}
        className="shrink-0 text-xs px-3 py-1 rounded border border-red-700/40 hover:bg-red-900/20 transition-colors"
      >
        Retry
      </button>
    </div>
  );
}

// ─── Insight quote card ────────────────────────────────────────────

function InsightCard({ insight, index }: { insight: string; index: number }) {
  return (
    <blockquote
      className="relative pl-4 py-1"
      style={{
        borderLeft: `3px solid ${PURPLE}`,
        animation: `fadeInUp 0.4s ease-out ${index * 0.07}s both`,
      }}
    >
      <p className="text-sm leading-relaxed" style={{ color: "#f5f0e8", opacity: 0.8 }}>
        {insight}
      </p>
    </blockquote>
  );
}

// ─── Dream journal entry ───────────────────────────────────────────

const DREAM_TYPE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  NREM:    { bg: "rgba(96,165,250,0.1)",  text: "#93c5fd", border: "rgba(96,165,250,0.2)"  },
  REM:     { bg: "rgba(124,58,237,0.12)", text: "#c4b5fd", border: "rgba(124,58,237,0.25)" },
  Susupti: { bg: "rgba(99,102,241,0.12)", text: "#a5b4fc", border: "rgba(99,102,241,0.25)" },
};

function DreamJournalEntry({ result }: { result: DreamResult }) {
  const timestamp = result.timestamp
    ? new Date(result.timestamp).toLocaleString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : new Date().toLocaleString();

  const dreamType = result.type ?? "REM";
  const typeStyle = DREAM_TYPE_COLORS[dreamType] ?? DREAM_TYPE_COLORS.REM;

  const insights: string[] =
    result.insights ?? (typeof result.summary === "string" ? [result.summary] : []);
  const consolidations = result.consolidations ?? [];
  const bisociations = result.bisociations ?? [];

  return (
    <div
      className="rounded-2xl p-6 space-y-6"
      style={{
        background: "rgba(8,7,21,0.8)",
        border: "1px solid rgba(124,58,237,0.3)",
        boxShadow: "0 0 40px rgba(124,58,237,0.07)",
        animation: "fadeInUp 0.4s ease-out both",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Moon className="w-4 h-4" style={{ color: GOLD }} />
            <h3 className="text-base font-semibold text-white">Dream Journal</h3>
          </div>
          <p className="text-xs font-mono text-white/30">{timestamp}</p>
        </div>
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shrink-0"
          style={{
            background: typeStyle.bg,
            color: typeStyle.text,
            border: `1px solid ${typeStyle.border}`,
          }}
        >
          {dreamType}
        </span>
      </div>

      {/* Insights */}
      {insights.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs text-white/35 uppercase tracking-wider">
            Key Insights
          </p>
          <div className="space-y-3">
            {insights.map((insight, i) => (
              <InsightCard key={i} insight={insight} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* Memory consolidations */}
      {consolidations.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-white/35 uppercase tracking-wider flex items-center gap-1.5">
            <Brain className="w-3.5 h-3.5 text-blue-400/60" />
            Memory Consolidations
          </p>
          <div className="grid gap-2">
            {consolidations.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-3 py-2 rounded-lg"
                style={{ background: "rgba(96,165,250,0.07)", border: "1px solid rgba(96,165,250,0.12)" }}
              >
                <span className="text-sm text-white/65">{c.memory}</span>
                {c.strength !== undefined && (
                  <span className="text-xs text-blue-400 font-mono ml-3 shrink-0">
                    {(c.strength * 100).toFixed(0)}%
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bisociations */}
      {bisociations.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-white/35 uppercase tracking-wider flex items-center gap-1.5">
            <Link2 className="w-3.5 h-3.5" style={{ color: `${PURPLE}cc` }} />
            Creative Connections
          </p>
          <div className="grid gap-2">
            {bisociations.map((b, i) => (
              <div
                key={i}
                className="rounded-xl px-3 py-3"
                style={{
                  background: "rgba(124,58,237,0.07)",
                  border: "1px solid rgba(124,58,237,0.18)",
                }}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold" style={{ color: "#c4b5fd" }}>
                    {b.concept_a}
                  </span>
                  <Link2 className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />
                  <span className="text-sm font-semibold" style={{ color: "#c4b5fd" }}>
                    {b.concept_b}
                  </span>
                </div>
                {b.connection && (
                  <p className="text-xs text-white/40 mt-1.5 leading-relaxed">{b.connection}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fallback raw */}
      {insights.length === 0 && consolidations.length === 0 && bisociations.length === 0 && (
        <div
          className="text-xs text-white/30 font-mono rounded-lg p-3 overflow-auto max-h-48"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

// ─── Skeleton ──────────────────────────────────────────────────────

function Skeleton({ className }: { className?: string }) {
  return <div className={`rounded-lg bg-white/5 animate-pulse ${className ?? ""}`} />;
}

// ─── Main page ─────────────────────────────────────────────────────

export default function DreamsPage() {
  const [targets, setTargets] = useState<DreamTargets["targets"]>([]);
  const [dreaming, setDreaming] = useState(false);
  const [dreamResult, setDreamResult] = useState<DreamResult | null>(null);
  const [loading, setLoading] = useState(true);

  // API dream data (from /api/user/dreams)
  const [apiData, setApiData] = useState<ApiDreamData | null>(null);
  const [apiLoading, setApiLoading] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);

  const fetchApiDreams = useCallback(async () => {
    setApiLoading(true);
    setApiError(null);
    try {
      const res = await fetch("/api/user/dreams");
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { error?: string }).error ?? `HTTP ${res.status}`);
      }
      const json: ApiDreamData = await res.json();
      setApiData(json);
    } catch (err) {
      console.error("[DreamsPage] API fetch error:", err);
      setApiError(err instanceof Error ? err.message : "Could not load dream insights.");
    } finally {
      setApiLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch MCP dream targets
    callTool<DreamTargets>("get_dream_targets")
      .then((r) => setTargets(r.targets || []))
      .catch((e) => {
        console.error("get_dream_targets failed:", e);
        setTargets([]);
      })
      .finally(() => setLoading(false));

    // Fetch processed insights from our API
    fetchApiDreams();
  }, [fetchApiDreams]);

  const triggerDream = async () => {
    setDreaming(true);
    try {
      const result = await callTool<DreamResult>("enter_dream_state", { duration: 30 });
      setDreamResult(result);
      // Re-fetch API data after triggering — the API re-processes on each call
      await fetchApiDreams();
    } catch (e) {
      console.error("enter_dream_state failed:", e);
      setDreamResult({ summary: "Dream cycle could not be triggered. The system may be busy.", insights: [], consolidations: [], bisociations: [] });
    } finally {
      setDreaming(false);
    }
  };

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

      <div className="max-w-2xl mx-auto px-6 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Moon className="w-6 h-6" style={{ color: "#a78bfa" }} />
            Dreams
          </h1>
          <p className="text-sm text-white/35 mt-1">
            Overnight synthesis · NREM consolidation · REM creative recombination
          </p>
        </div>

        {/* Processed insights from /api/user/dreams */}
        {apiError && (
          <ErrorBanner message={apiError} onRetry={fetchApiDreams} />
        )}

        {apiLoading && !apiData && (
          <div className="space-y-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-lg h-20 animate-pulse"
                style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.12)" }}
              />
            ))}
          </div>
        )}

        {!apiLoading && apiData?.has_data && apiData.insights.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <h2 className="text-base font-semibold text-white">Latest Dream Insights</h2>
              </div>
              {apiData.processed_at && (
                <div className="flex items-center gap-1 text-xs text-white/30">
                  <Clock className="w-3 h-3" />
                  {new Date(apiData.processed_at).toLocaleString("en-GB", {
                    day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
                  })}
                </div>
              )}
            </div>
            <div className="space-y-3">
              {apiData.insights.map((insight, idx) => (
                <ApiInsightCard key={`${insight.pattern}-${idx}`} insight={insight} index={idx} />
              ))}
            </div>
            {apiData.themes.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {apiData.themes.map((theme) => (
                  <Badge key={theme} variant="outline" className="text-xs bg-indigo-900/20 text-indigo-300 border-indigo-700/30">
                    {theme}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}

        {!apiLoading && !apiData?.has_data && !dreamResult && (
          <DreamEmptyState />
        )}

        {/* Dream journal result (from MCP enter_dream_state) */}
        {dreamResult && (
          <DreamJournalEntry result={dreamResult} />
        )}

        {/* Dream targets card */}
        <Card style={{ background: "#0f0e1a", border: "1px solid rgba(124,58,237,0.2)" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" style={{ color: GOLD }} />
              Dream Targets
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 py-2">
                    <Skeleton className="w-6 h-6 rounded" />
                    <Skeleton className="h-4 flex-1" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>
            ) : targets && targets.length > 0 ? (
              <div className="space-y-2">
                {targets.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-3 py-3 rounded-xl transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.3)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)"; }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl select-none" aria-hidden="true">
                        {MOON_PHASES[Math.min(i, MOON_PHASES.length - 1)]}
                      </span>
                      <div>
                        <p className="text-sm text-white/80 font-medium">{t.theme}</p>
                        <p className="text-xs text-white/30 mt-0.5">{t.source}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <PriorityDots priority={t.priority} />
                      <Badge variant="purple">P{t.priority}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-white/25 py-4 text-center">No dream targets queued</p>
            )}
          </CardContent>
        </Card>

        {/* Trigger button */}
        <div className="flex justify-center pt-2 pb-8">
          <button
            onClick={triggerDream}
            disabled={dreaming}
            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.35) 0%, rgba(26,26,46,0.6) 100%)",
              border: "1px solid rgba(124,58,237,0.45)",
              color: "white",
              boxShadow: dreaming ? "0 0 30px rgba(124,58,237,0.2)" : "none",
            }}
            onMouseEnter={(e) => {
              if (!dreaming) {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.borderColor = `${GOLD}60`;
                btn.style.boxShadow = `0 0 25px rgba(201,168,76,0.15)`;
              }
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.borderColor = "rgba(124,58,237,0.45)";
              btn.style.boxShadow = "none";
            }}
          >
            {dreaming ? (
              <>
                <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
                <span>
                  Dreaming
                  <span
                    style={{
                      animation: "ellipsis 1.5s steps(3, end) infinite",
                    }}
                  >
                    …
                  </span>
                </span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" style={{ color: GOLD }} />
                <span>Enter Dream State</span>
                <Stars className="w-4 h-4 text-purple-400/60" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
