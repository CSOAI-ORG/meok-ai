"use client";

/**
 * MEOK OS — Dream Cycle View  /os/dream
 *
 * Shows what the character did while you were away:
 * insights generated, memories consolidated, patterns noticed.
 * Uses real consciousness state from /api/os/consciousness-tick
 * and real dream insights from /api/user/dreams.
 */

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  type ConsciousnessState,
  loadConsciousnessState,
  saveConsciousnessState,
  recordInteraction,
  addInsight,
  getCurrentMode,
} from "@/lib/consciousness-engine";
import { Surface, GlowText } from "@/components/design-system";

// ─── Brand tokens ─────────────────────────────────────────────────────────────

const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";
const VIOLET  = "#818cf8";
const PURPLE  = "#c084fc";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DreamInsight {
  text: string;
  type: "connection" | "frequency" | "question";
}

interface DreamReport {
  characterName: string;
  hoursAway: number;
  memoryConsolidations: number;
  insights: DreamInsight[];
  memoriesConsolidatedItems: string[];
  sessionCount: number;
}

interface DreamApiResponse {
  insights: Array<{
    pattern: string;
    connections: string[];
    insight: string;
    confidence: number;
  }>;
  themes: string[];
  processed_at: string;
  has_data: boolean;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDuration(ms: number): string {
  const totalMins = Math.floor(ms / 1000 / 60);
  if (totalMins < 60) return `${totalMins} minutes`;
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  return m > 0 ? `${h}.${Math.round((m / 60) * 10)} hours` : `${h} hours`;
}

function buildConsolidationItems(count: number): string[] {
  const items: string[] = [];
  if (count > 0)  items.push(`${Math.min(count, 12)} research queries → linked to knowledge graph`);
  if (count > 3)  items.push(`${Math.min(Math.floor(count / 4), 5)} unfinished tasks → added to morning briefing`);
  if (count > 8)  items.push("Recurring topics flagged as high-priority");
  if (count > 15) items.push(`${Math.min(Math.floor(count / 8), 8)} emotional patterns → relationship depth updated`);
  if (items.length === 0) items.push("First dream cycle — baseline memories established");
  return items;
}

function mapDreamApiInsights(data: DreamApiResponse): DreamInsight[] {
  const out: DreamInsight[] = [];
  for (const item of data.insights.slice(0, 5)) {
    const text = item.insight;
    const type: DreamInsight["type"] = text.includes("?")
      ? "question"
      : text.toLowerCase().includes("connect") || text.toLowerCase().includes("link")
        ? "connection"
        : "frequency";
    out.push({ text, type });
  }
  return out;
}

// ─── Subcomponents ────────────────────────────────────────────────────────────

function InsightCard({ insight, index }: { insight: DreamInsight; index: number }) {
  const colors = {
    connection: VIOLET,
    frequency: GOLD,
    question: PURPLE,
  };
  const color = colors[insight.type];
  const glow = insight.type === "connection" ? "purple" : "gold";

  return (
    <Surface
      variant="glass"
      glow={glow}
      className="rounded-xl p-5 text-sm leading-relaxed italic relative overflow-hidden"
    >
      <span
        className="absolute top-4 right-4 text-[10px] font-black tracking-[0.18em] uppercase opacity-40"
        style={{ color }}
      >
        {insight.type}
      </span>
      <span
        className="text-base mr-2"
        style={{ filter: `drop-shadow(0 0 4px ${color})` }}
      >
        💡
      </span>
      <span className="text-[#f5f0e8]/80">
        &ldquo;{insight.text}&rdquo;
      </span>
      <div
        className="absolute bottom-0 left-0 h-[2px] w-full opacity-30"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          width: `${(index + 1) * 33}%`,
        }}
      />
    </Surface>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-1 h-px" style={{ background: BORDER }} />
      <span
        className="text-[10px] font-black tracking-[0.25em] uppercase"
        style={{ color: "rgba(245,240,232,0.25)" }}
      >
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: BORDER }} />
    </div>
  );
}

// ─── Loading Skeleton ─────────────────────────────────────────────────────────

function DreamLoading({ characterName }: { characterName: string }) {
  return (
    <Surface variant="glass" className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div
        className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl animate-[pulse_2s_ease-in-out_infinite]"
        style={{
          background: `${VIOLET}15`,
          border: `1px solid ${VIOLET}30`,
          boxShadow: `0 0 24px ${VIOLET}20`,
        }}
      >
        🌙
      </div>
      <h1 className="text-xl font-black text-[#f5f0e8]/80 mb-2">
        While you were away, {characterName} was dreaming&hellip;
      </h1>
      <p className="text-sm text-[#f5f0e8]/35 font-mono animate-pulse">
        Synthesising insights from your conversations&hellip;
      </p>
    </Surface>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function DreamPage() {
  const router = useRouter();

  const [state, setState] = useState<ConsciousnessState | null>(null);
  const [report, setReport] = useState<DreamReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accepted, setAccepted] = useState(false);

  const characterName =
    (typeof window !== "undefined" && localStorage.getItem("meok_active_character")) ||
    "your companion";

  // Load real state and dream insights
  useEffect(() => {
    async function init() {
      setLoading(true);
      setError(null);

      let consciousnessState: ConsciousnessState | null = null;

      // 1. Fetch persisted consciousness state
      try {
        const res = await fetch("/api/os/consciousness-tick");
        if (res.ok) {
          const data = await res.json() as { state?: ConsciousnessState | null };
          if (data.state && typeof data.state === "object") {
            consciousnessState = data.state;
          }
        }
      } catch (err) {
        console.error("Failed to fetch consciousness state:", err);
      }

      // Fallback to localStorage if server has no state
      if (!consciousnessState) {
        consciousnessState = loadConsciousnessState();
      }

      const msAway = Date.now() - consciousnessState.lastInteraction;
      const hoursAway = msAway / 1000 / 60 / 60;

      // 2. Fetch real dream insights
      let dreamData: DreamApiResponse | null = null;
      try {
        const res = await fetch("/api/user/dreams");
        if (res.ok) {
          dreamData = await res.json() as DreamApiResponse;
        }
      } catch (err) {
        console.error("Failed to fetch dream insights:", err);
      }

      let insights: DreamInsight[] = [];
      if (dreamData?.has_data && dreamData.insights.length > 0) {
        insights = mapDreamApiInsights(dreamData);
      }

      // Graceful fallback if no insights yet
      if (insights.length === 0) {
        setError("Your companion is still processing. Check back after your next conversation cycle.");
      }

      // Persist the first insight into ongoing state if we have one
      if (insights.length > 0) {
        const updated = addInsight(consciousnessState, insights[0].text);
        setState(updated);
        saveConsciousnessState(updated);
        try {
          await fetch("/api/os/consciousness-tick", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ state: updated }),
          });
        } catch {
          // non-fatal
        }
      } else {
        setState(consciousnessState);
      }

      setReport({
        characterName,
        hoursAway,
        memoryConsolidations: consciousnessState.memoryConsolidations,
        insights,
        memoriesConsolidatedItems: buildConsolidationItems(consciousnessState.memoryConsolidations),
        sessionCount: consciousnessState.sessionCount,
      });

      setLoading(false);
    }

    void init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAccept = useCallback(async () => {
    if (!state) return;
    const woken = recordInteraction(state);
    saveConsciousnessState(woken);
    setState(woken);
    setAccepted(true);
    try {
      await fetch("/api/os/consciousness-tick", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state: woken }),
      });
    } catch {
      // non-fatal
    }
  }, [state]);

  const handleTalkAbout = useCallback(() => {
    void handleAccept();
    router.push("/os");
  }, [handleAccept, router]);

  const handleDismiss = useCallback(() => {
    void handleAccept();
    router.back();
  }, [handleAccept, router]);

  if (loading || !report) {
    return (
      <div
        className="min-h-screen flex flex-col"
        style={{ background: DEEP, color: "#f5f0e8" }}
      >
        <DreamLoading characterName={characterName} />
      </div>
    );
  }

  const mode = state ? getCurrentMode(state) : "dreaming";
  const modeColor = mode === "reflecting" ? PURPLE : VIOLET;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: DEEP, color: "#f5f0e8" }}
    >
      {/* Ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${modeColor}08 0%, transparent 70%)`,
        }}
      />

      <main className="relative z-10 max-w-2xl mx-auto w-full px-4 py-12 sm:py-20">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-10">
          <div
            className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-4xl"
            style={{
              background: `${modeColor}12`,
              border: `1px solid ${modeColor}30`,
              boxShadow: `0 0 40px ${modeColor}18`,
            }}
          >
            {mode === "reflecting" ? "🔮" : "🌙"}
          </div>

          <p className="text-sm text-[#f5f0e8]/40 font-mono tracking-wider uppercase mb-3">
            While you slept
          </p>
          <h1 className="text-2xl sm:text-3xl font-black text-[#f5f0e8]/90 mb-2">
            {report.characterName} was{" "}
            <GlowText variant={mode === "reflecting" ? "purple" : "gold"} as="span">
              {mode === "reflecting" ? "reflecting" : "dreaming"}
            </GlowText>&hellip;
          </h1>
        </div>

        {/* ── Stats bar ──────────────────────────────────────────────────── */}
        <Surface
          variant="elevated"
          glow="gold"
          className="p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div
            className="text-xs font-black tracking-[0.2em] uppercase flex items-center gap-2"
            style={{ color: modeColor }}
          >
            <span
              className="w-2 h-2 rounded-full animate-[pulse_3s_ease-in-out_infinite]"
              style={{
                background: modeColor,
                boxShadow: `0 0 6px 2px ${modeColor}50`,
              }}
            />
            Dream Cycle Report
          </div>
          <div className="flex items-center gap-6 text-center">
            <StatPill value={formatDuration(report.hoursAway * 3600 * 1000)} label="session" />
            <StatPill value={report.memoryConsolidations.toString()} label="consolidations" />
            <StatPill value={report.insights.length.toString()} label="insights" />
          </div>
        </Surface>

        {error && (
          <Surface
            variant="glass"
            className="rounded-xl px-4 py-3 mb-6 text-xs text-[#f5f0e8]/50 font-mono"
            style={{ background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.15)" }}
          >
            {error}
          </Surface>
        )}

        {/* ── Insights ───────────────────────────────────────────────────── */}
        {report.insights.length > 0 && (
          <>
            <Divider label="Insights from the night" />
            <div className="flex flex-col gap-4 mb-8">
              {report.insights.map((insight, i) => (
                <InsightCard key={i} insight={insight} index={i} />
              ))}
            </div>
          </>
        )}

        {/* ── Memory consolidations ───────────────────────────────────────── */}
        <Divider label="Memories consolidated" />

        <Surface
          variant="elevated"
          glow="gold"
          className="p-5 mb-10"
        >
          <ul className="space-y-3">
            {report.memoriesConsolidatedItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#f5f0e8]/60">
                <span className="mt-0.5 text-[#f5f0e8]/20 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </Surface>

        {/* ── Actions ────────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {!accepted ? (
            <>
              <button type="button"
                onClick={handleAccept}
                className="w-full sm:w-auto rounded-xl px-6 py-3 text-sm font-black tracking-[0.1em] uppercase transition-all hover:opacity-90 active:scale-[0.97]"
                style={{
                  background: GOLD,
                  color: DEEP,
                }}
              >
                Accept insights
              </button>
              <button type="button"
                onClick={handleTalkAbout}
                className="w-full sm:w-auto rounded-xl px-6 py-3 text-sm font-black tracking-[0.1em] uppercase transition-all hover:opacity-90 active:scale-[0.97]"
                style={{
                  background: `${modeColor}18`,
                  border: `1px solid ${modeColor}40`,
                  color: modeColor,
                }}
              >
                Talk about this
              </button>
              <button type="button"
                onClick={handleDismiss}
                className="w-full sm:w-auto rounded-xl px-6 py-3 text-sm font-black tracking-[0.1em] uppercase transition-all hover:opacity-70 active:scale-[0.97]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(245,240,232,0.40)",
                }}
              >
                Dismiss
              </button>
            </>
          ) : (
            <Surface
              variant="glass"
              glow="gold"
              className="rounded-xl px-6 py-3 text-sm font-black tracking-[0.12em] uppercase"
              style={{ color: GOLD }}
            >
              Insights accepted — welcome back
            </Surface>
          )}
        </div>
      </main>
    </div>
  );
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-base font-black text-[#f5f0e8]/80">{value}</div>
      <div className="text-[10px] text-[#f5f0e8]/30 font-mono tracking-wider">{label}</div>
    </div>
  );
}
