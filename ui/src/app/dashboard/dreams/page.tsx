"use client";

import { useEffect, useState } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Moon, Sparkles, Brain, Link2, BookOpen, Loader2, Stars } from "lucide-react";

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
        Your first dream session will run tonight. Each night MEOK consolidates your memories,
        finds unexpected creative connections between ideas, and prepares your morning brief.
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

  useEffect(() => {
    callTool<DreamTargets>("get_dream_targets")
      .then((r) => setTargets(r.targets || []))
      .catch((e) => {
        console.error("get_dream_targets failed:", e);
        setTargets([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const triggerDream = async () => {
    setDreaming(true);
    try {
      const result = await callTool<DreamResult>("enter_dream_state", { duration: 30 });
      setDreamResult(result);
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

        {/* Dream journal or empty */}
        {dreamResult ? (
          <DreamJournalEntry result={dreamResult} />
        ) : (
          <DreamEmptyState />
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
