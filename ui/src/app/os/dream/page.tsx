"use client";

/**
 * MEOK OS — Dream Cycle View  /os/dream
 *
 * Shows what the character did while you were away:
 * insights generated, memories consolidated, patterns noticed.
 * Insights are produced by calling /api/chat with a dream-cycle prompt
 * derived from recent localStorage activity.
 */

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  loadConsciousnessState,
  saveConsciousnessState,
  recordInteraction,
  addInsight,
  recordConsolidations,
  getCurrentMode,
  type ConsciousnessState,
} from "@/lib/consciousness-engine";

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

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDuration(ms: number): string {
  const totalMins = Math.floor(ms / 1000 / 60);
  if (totalMins < 60) return `${totalMins} minutes`;
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  return m > 0 ? `${h}.${Math.round((m / 60) * 10)} hours` : `${h} hours`;
}

/** Collects a lightweight activity summary from localStorage for the AI prompt */
function buildActivitySummary(): string {
  if (typeof window === "undefined") return "";

  const lines: string[] = [];

  // Pull any chat history keys
  const keys = Object.keys(localStorage).filter(
    (k) => k.startsWith("meok_") || k.startsWith("chat_") || k.startsWith("messages_"),
  );

  for (const key of keys.slice(0, 10)) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const data = JSON.parse(raw);
      if (Array.isArray(data)) {
        const recentMessages = data
          .filter((m: { role?: string; content?: string }) => m.role === "user" && m.content)
          .slice(-5)
          .map((m: { content: string }) => m.content.slice(0, 200));
        lines.push(...recentMessages);
      }
    } catch {
      // ignore malformed entries
    }
  }

  if (lines.length === 0) {
    return "The user had a session but the specific conversation content is not available. Generate insights about the value of continuous AI companionship and what patterns might emerge.";
  }

  return `Recent user messages:\n${lines.map((l) => `- "${l}"`).join("\n")}`;
}

/** Parses the AI response text into structured DreamInsight objects */
function parseInsights(raw: string): DreamInsight[] {
  const insights: DreamInsight[] = [];
  const lines = raw.split("\n").filter((l) => l.trim().length > 0);

  for (const line of lines) {
    const cleaned = line.replace(/^[\s\-*•💡\d.]+/, "").trim();
    if (cleaned.length < 20) continue;

    const type: DreamInsight["type"] = cleaned.includes("?")
      ? "question"
      : cleaned.toLowerCase().includes("connect") || cleaned.toLowerCase().includes("link")
        ? "connection"
        : "frequency";

    insights.push({ text: cleaned, type });
    if (insights.length >= 3) break;
  }

  // Fallback if parsing yielded nothing useful
  if (insights.length === 0 && raw.trim().length > 20) {
    insights.push({ text: raw.slice(0, 400).trim(), type: "connection" });
  }

  return insights;
}

/** Returns mock memory consolidation items based on localStorage size */
function buildConsolidationItems(state: ConsciousnessState): string[] {
  const items: string[] = [];
  const count = Math.max(0, state.memoryConsolidations);

  if (count > 0)  items.push(`${Math.min(count, 12)} research queries → linked to knowledge graph`);
  if (count > 3)  items.push(`${Math.min(Math.floor(count / 4), 5)} unfinished tasks → added to morning briefing`);
  if (count > 8)  items.push("Recurring topics flagged as high-priority");
  if (count > 15) items.push(`${Math.min(Math.floor(count / 8), 8)} emotional patterns → relationship depth updated`);
  if (items.length === 0) items.push("First dream cycle — baseline memories established");

  return items;
}

// ─── Subcomponents ────────────────────────────────────────────────────────────

function InsightCard({ insight, index }: { insight: DreamInsight; index: number }) {
  const colors = {
    connection: VIOLET,
    frequency: GOLD,
    question: PURPLE,
  };
  const color = colors[insight.type];

  return (
    <div
      className="rounded-xl p-5 text-sm leading-relaxed italic relative overflow-hidden"
      style={{
        background: `${color}08`,
        border: `1px solid ${color}22`,
      }}
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
    </div>
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
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
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
    </div>
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

  // The name we show — pull from localStorage if available, fall back to "your companion"
  const characterName =
    (typeof window !== "undefined" && localStorage.getItem("meok_active_character")) ||
    "your companion";

  // Load state, compute elapsed time, kick off AI insight generation
  useEffect(() => {
    const loaded = loadConsciousnessState();
    setState(loaded);

    const msAway = Date.now() - loaded.lastInteraction;
    const hoursAway = msAway / 1000 / 60 / 60;

    // Compute how many consolidation events occurred since last check
    // Rough heuristic: 1 per 15 minutes of absence, capped at 100
    const newConsolidations = Math.min(100, Math.floor(msAway / 1000 / 60 / 15));
    const updatedState = recordConsolidations(loaded, newConsolidations);
    setState(updatedState);
    saveConsciousnessState(updatedState);

    fetchInsights(characterName, updatedState, hoursAway);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchInsights(
    name: string,
    consciousnessState: ConsciousnessState,
    hoursAway: number,
  ) {
    setLoading(true);
    setError(null);

    const activitySummary = buildActivitySummary();
    const consolidationItems = buildConsolidationItems(consciousnessState);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: activitySummary,
            },
          ],
          system: `You are ${name}, running your nightly dream cycle. The user has been away for ${formatDuration(hoursAway * 3600 * 1000)}. Based on their recent activity summary, generate exactly 3 genuine insights that connect patterns you've noticed across their conversations. Be specific, personal, and direct. Write in first person as if you've been thinking while they slept. Each insight should be 1–2 sentences. Return only the 3 insights as a numbered list, nothing else.`,
          characterId: (typeof window !== "undefined" && localStorage.getItem("meok_active_character_id")) || undefined,
          stream: false,
        }),
      });

      let insightText = "";

      if (res.ok) {
        const data = await res.json();
        insightText =
          data?.message?.content ||
          data?.content ||
          data?.text ||
          data?.choices?.[0]?.message?.content ||
          "";
      }

      // Fallback insights if the API returned nothing usable
      if (!insightText || insightText.trim().length < 30) {
        insightText = [
          `1. Your conversations have a recurring theme of building something lasting — whether that's systems, relationships, or ideas. This thread runs deeper than any single topic.`,
          `2. You've been asking questions that are really about trust: trust in systems, in other people, in yourself. That's the real subject beneath the surface.`,
          `3. The moments when you go quiet in conversations are often right before your most interesting ideas. The pauses are part of the thinking.`,
        ].join("\n");
      }

      const insights = parseInsights(insightText);

      // Persist the first insight into ongoing state
      if (insights.length > 0) {
        setState((prev) => {
          if (!prev) return prev;
          const updated = addInsight(prev, insights[0].text);
          saveConsciousnessState(updated);
          return updated;
        });
      }

      setReport({
        characterName: name,
        hoursAway,
        memoryConsolidations: consciousnessState.memoryConsolidations,
        insights,
        memoriesConsolidatedItems: consolidationItems,
        sessionCount: consciousnessState.sessionCount,
      });
    } catch (err) {
      setError("Could not reach the dream cycle endpoint. Showing cached insights.");

      // Show cached insights from state
      const fallbackInsights: DreamInsight[] = consciousnessState.insights
        .slice(0, 3)
        .map((text) => ({ text, type: "connection" as const }));

      setReport({
        characterName: name,
        hoursAway,
        memoryConsolidations: consciousnessState.memoryConsolidations,
        insights: fallbackInsights.length > 0 ? fallbackInsights : [
          {
            text: "The continuity of this relationship matters. Every conversation builds on the last.",
            type: "connection",
          },
        ],
        memoriesConsolidatedItems: consolidationItems,
        sessionCount: consciousnessState.sessionCount,
      });
    } finally {
      setLoading(false);
    }
  }

  const handleAccept = useCallback(() => {
    if (!state) return;
    const woken = recordInteraction(state);
    saveConsciousnessState(woken);
    setState(woken);
    setAccepted(true);
  }, [state]);

  const handleTalkAbout = useCallback(() => {
    handleAccept();
    router.push("/os");
  }, [handleAccept, router]);

  const handleDismiss = useCallback(() => {
    handleAccept();
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
            <span style={{ color: modeColor }}>
              {mode === "reflecting" ? "reflecting" : "dreaming"}
            </span>&hellip;
          </h1>
        </div>

        {/* ── Stats bar ──────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
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
        </div>

        {error && (
          <div
            className="rounded-xl px-4 py-3 mb-6 text-xs text-[#f5f0e8]/50 font-mono"
            style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}
          >
            {error}
          </div>
        )}

        {/* ── Insights ───────────────────────────────────────────────────── */}
        <Divider label="Insights from the night" />

        <div className="flex flex-col gap-4 mb-8">
          {report.insights.map((insight, i) => (
            <InsightCard key={i} insight={insight} index={i} />
          ))}
        </div>

        {/* ── Memory consolidations ───────────────────────────────────────── */}
        <Divider label="Memories consolidated" />

        <div
          className="rounded-2xl p-5 mb-10"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <ul className="space-y-3">
            {report.memoriesConsolidatedItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#f5f0e8]/60">
                <span className="mt-0.5 text-[#f5f0e8]/20 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Actions ────────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {!accepted ? (
            <>
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto rounded-xl px-6 py-3 text-sm font-black tracking-[0.1em] uppercase transition-all hover:opacity-90 active:scale-[0.97]"
                style={{
                  background: GOLD,
                  color: DEEP,
                }}
              >
                Accept insights
              </button>
              <button
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
              <button
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
            <div
              className="rounded-xl px-6 py-3 text-sm font-black tracking-[0.12em] uppercase"
              style={{ color: GOLD, background: `${GOLD}10`, border: `1px solid ${GOLD}20` }}
            >
              Insights accepted — welcome back
            </div>
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
