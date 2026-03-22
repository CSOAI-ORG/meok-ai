"use client";

/**
 * Morning Briefing — Phase 4.11 Progressive Disclosure UX
 *
 * "The moment users realise: it wasn't sleeping, it was working for me."
 *
 * Translates the overnight dream cycle output into human-readable cards.
 * No AI jargon. Written for the person who's never heard of BFT or z_self.
 * Design principle: first win in 60 seconds.
 */

import { useEffect, useState } from "react";
import { mcp } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import {
  Moon,
  Sunrise,
  Brain,
  ShieldCheck,
  Heart,
  Lightbulb,
  RefreshCw,
  Clock,
  TrendingUp,
  AlertCircle,
  Gamepad2,
  Bot,
  Copy,
  Check,
} from "lucide-react";

// ── Brand tokens ─────────────────────────────────────────────────
const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const NAVY = "#1a1a2e";
const SURFACE2 = "#1a1929";
const CREAM = "#f5f0e8";

interface BriefingSection {
  title: string;
  content: string;
  metadata?: Record<string, unknown>;
}

interface MorningBriefing {
  generated_at?: string;
  greeting?: string;
  sections?: BriefingSection[];
  one_line_summary?: string;
  next_suggested_action?: string;
  care_score_today?: number;
  priorities?: string[];
  calendar_events?: Array<{ time: string; title: string; location?: string }>;
  care_checkin?: string;
  sovereign_insight?: string;
  alerts?: Array<{ level: string; message: string }>;
}

const SECTION_ICONS: Record<string, React.ElementType> = {
  dream: Moon,
  consciousness: Brain,
  learning: TrendingUp,
  alerts: AlertCircle,
  care: Heart,
  personal: Lightbulb,
  gaming: Gamepad2,
};

const SECTION_COLORS: Record<string, string> = {
  dream: "#a78bfa",
  consciousness: "#22d3ee",
  learning: "#4ade80",
  alerts: "#fb923c",
  care: "#f472b6",
  personal: GOLD,
  gaming: "#60a5fa",
};

function humaniseKey(key: string): string {
  const map: Record<string, string> = {
    dream: "While you slept",
    consciousness: "System awareness",
    learning: "What was learned",
    alerts: "Things to know",
    care: "Care quality",
    personal: "For you today",
  };
  return map[key] || key;
}

// ── Care score circular progress ring ────────────────────────────
function CareScoreRing({ score }: { score: number }) {
  const pct = Math.round(score * 100);
  const { stroke, label } =
    pct >= 80
      ? { stroke: "#4ade80", label: "Strong" }
      : pct >= 60
      ? { stroke: GOLD, label: "Good" }
      : { stroke: "#f87171", label: "Low" };

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="absolute inset-0 -rotate-90" width="96" height="96" viewBox="0 0 96 96">
          <circle
            cx="48" cy="48" r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          <circle
            cx="48" cy="48" r={radius}
            fill="none"
            stroke={stroke}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
        </svg>
        <div className="flex flex-col items-center z-10">
          <span className="text-2xl font-black leading-none" style={{ color: stroke }}>{pct}</span>
          <span className="text-[9px] uppercase tracking-widest mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>care</span>
        </div>
      </div>
      <span
        className="text-xs font-semibold px-2.5 py-1 rounded-full"
        style={{ background: `${stroke}14`, color: stroke, border: `1px solid ${stroke}33` }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Copy priorities button ────────────────────────────────────────
function CopyPrioritiesButton({ priorities }: { priorities: string[] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = priorities.map((p, i) => `${i + 1}. ${p}`).join("\n");
    await navigator.clipboard.writeText(`Today's focus:\n${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
      style={{
        background: copied ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.05)",
        color: copied ? "#4ade80" : "rgba(255,255,255,0.4)",
        border: `1px solid ${copied ? "rgba(74,222,128,0.25)" : "rgba(255,255,255,0.08)"}`,
      }}
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied!" : "Share today's focus"}
    </button>
  );
}

// ── Loading skeleton ──────────────────────────────────────────────
function Skeleton() {
  return (
    <div className="space-y-4">
      {/* Hero skeleton */}
      <div className="h-40 rounded-2xl animate-pulse" style={{ background: SURFACE }} />
      {/* Priority skeleton */}
      <div className="rounded-2xl p-5 animate-pulse" style={{ background: SURFACE }}>
        <div className="h-4 w-32 rounded mb-4" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="h-3 rounded flex-1" style={{ background: "rgba(255,255,255,0.05)", width: `${70 + i * 8}%` }} />
            </div>
          ))}
        </div>
      </div>
      {[1, 2].map((i) => (
        <div key={i} className="h-28 rounded-2xl animate-pulse" style={{ background: SURFACE }} />
      ))}
    </div>
  );
}

// ── Gaming section ────────────────────────────────────────────────
function GamingCard({ section }: { section: BriefingSection }) {
  const meta = section.metadata ?? {};
  const sessionCount = meta.session_count as number | undefined;
  const totalMinutes = meta.total_minutes as number | undefined;
  const favouriteGame = meta.favourite_game as string | undefined;
  const insight = meta.insight as string | undefined;
  const hasStats = sessionCount !== undefined || totalMinutes !== undefined;

  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: SURFACE, border: "1px solid rgba(96,165,250,0.15)" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Gamepad2 className="w-4 h-4" style={{ color: "#60a5fa" }} />
        <h3 className="text-sm font-semibold text-white">Gaming yesterday</h3>
        {favouriteGame && (
          <span
            className="ml-auto text-xs px-2 py-0.5 rounded-full"
            style={{ background: "rgba(96,165,250,0.12)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.2)" }}
          >
            {favouriteGame}
          </span>
        )}
      </div>
      {hasStats && (
        <div className="flex gap-2 flex-wrap mb-3">
          {sessionCount !== undefined && (
            <span className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(96,165,250,0.08)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.15)" }}>
              {sessionCount} {sessionCount === 1 ? "session" : "sessions"}
            </span>
          )}
          {totalMinutes !== undefined && (
            <span className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(96,165,250,0.08)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.15)" }}>
              {totalMinutes} min
            </span>
          )}
        </div>
      )}
      {section.content && (
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{section.content}</p>
      )}
      {insight && (
        <p className="text-xs italic mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
          &ldquo;{insight}&rdquo;
        </p>
      )}
      {!hasStats && !section.content && (
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>No gaming sessions recorded yesterday.</p>
      )}
    </div>
  );
}

// ── Empty state ────────────────────────────────────────────────────
function EmptyState({ onTrigger, triggering }: { onTrigger: () => void; triggering: boolean }) {
  return (
    <div
      className="rounded-2xl p-12 flex flex-col items-center text-center"
      style={{
        background: SURFACE,
        border: "1px solid rgba(255,255,255,0.05)",
        animation: "fadeSlideUp 0.4s ease both",
      }}
    >
      <span className="text-5xl mb-4">🧭</span>
      <h3 className="text-lg font-bold text-white mb-2">Your briefing is being prepared...</h3>
      <p className="text-sm max-w-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
        Check back after midnight. MEOK works through the night to prepare your personalised morning brief.
      </p>
      <button
        onClick={onTrigger}
        disabled={triggering}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 disabled:opacity-50"
        style={{ background: `${GOLD}18`, color: GOLD, border: `1px solid ${GOLD}33` }}
      >
        {triggering ? (
          <>
            <RefreshCw className="w-4 h-4 animate-spin" />
            Generating…
          </>
        ) : (
          <>
            <RefreshCw className="w-4 h-4" />
            Trigger now
          </>
        )}
      </button>
    </div>
  );
}

export default function MorningBriefingPage() {
  const { user } = useAuth();
  const [briefing, setBriefing] = useState<MorningBriefing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [triggering, setTriggering] = useState(false);
  const [visible, setVisible] = useState(false);

  const load = async (showRefresh = false) => {
    if (showRefresh) setRefreshing(true);
    else setLoading(true);
    setError(null);
    try {
      const data = await mcp.get<MorningBriefing>("/api/morning-briefing");
      setBriefing(data);
      setVisible(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load briefing");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const triggerNow = async () => {
    setTriggering(true);
    try {
      await mcp.post("/api/morning-briefing/regenerate", {});
      await load(false);
    } catch {
      await load(false);
    } finally {
      setTriggering(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // Today's date — always show current day prominently
  const todayFormatted = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = briefing?.generated_at
    ? new Date(briefing.generated_at).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  const displayName = user?.hatch_name || user?.email?.split("@")[0] || "there";
  const careScore = briefing?.care_score_today;
  const hasMeaningfulContent =
    briefing && (briefing.sections?.length || briefing.one_line_summary || briefing.priorities?.length);

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-1 { animation: fadeSlideUp 0.35s ease both 0.05s; }
        .card-2 { animation: fadeSlideUp 0.35s ease both 0.12s; }
        .card-3 { animation: fadeSlideUp 0.35s ease both 0.19s; }
        .card-4 { animation: fadeSlideUp 0.35s ease both 0.26s; }
        .card-5 { animation: fadeSlideUp 0.35s ease both 0.33s; }
        .card-6 { animation: fadeSlideUp 0.35s ease both 0.40s; }
      `}</style>

      <div className="min-h-screen p-6 md:p-8" style={{ background: DEEP, color: "white" }}>
        <div className="max-w-3xl space-y-5">

          {/* ── Header ── */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sunrise className="w-5 h-5" style={{ color: GOLD }} />
                <h2 className="text-2xl font-bold text-white">Morning Briefing</h2>
              </div>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                What MEOK worked on while you were away
                {formattedTime && (
                  <span className="ml-2">
                    <Clock className="inline w-3 h-3 mr-1" style={{ color: "rgba(255,255,255,0.2)" }} />
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>Updated {formattedTime}</span>
                  </span>
                )}
              </p>
            </div>
            <button
              onClick={() => load(true)}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>

          {/* ── Loading skeleton ── */}
          {loading && <Skeleton />}

          {/* ── Error state ── */}
          {error && !loading && (
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-2xl"
              style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)" }}
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#f87171" }} />
              <div>
                <p className="font-medium text-sm" style={{ color: "#f87171" }}>Briefing unavailable</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{error}</p>
              </div>
            </div>
          )}

          {/* ── Empty state ── */}
          {!loading && !error && !hasMeaningfulContent && (
            <EmptyState onTrigger={triggerNow} triggering={triggering} />
          )}

          {/* ── Full briefing ── */}
          {briefing && !loading && hasMeaningfulContent && (
            <>
              {/* Hero header card */}
              <div
                className="card-1 rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${SURFACE2} 0%, rgba(201,168,76,0.08) 100%)`,
                  border: `1px solid ${GOLD}28`,
                }}
              >
                {/* "Powered by Ralph" badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Bot className="w-3 h-3" style={{ color: "rgba(255,255,255,0.3)" }} />
                  <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Generated by Ralph Mode overnight
                  </span>
                </div>

                {/* Date + Care score row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Sunrise className="w-4 h-4" style={{ color: GOLD }} />
                      <span className="text-xs font-mono uppercase tracking-widest" style={{ color: GOLD }}>
                        {todayFormatted}
                      </span>
                    </div>

                    {/* Big day display */}
                    <div className="mb-1">
                      <span
                        className="text-3xl font-black tracking-tight"
                        style={{ color: CREAM }}
                      >
                        {new Date().toLocaleDateString("en-GB", { weekday: "long" })}
                      </span>
                      <span
                        className="ml-2 text-lg font-semibold"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long" })}
                      </span>
                    </div>

                    <h1 className="text-base font-semibold mt-2 mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>
                      Good morning, {displayName}. Here&rsquo;s your brief.
                    </h1>

                    {briefing.one_line_summary && (
                      <p
                        className="text-base italic leading-snug"
                        style={{ color: GOLD }}
                      >
                        &ldquo;{briefing.one_line_summary}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* Care score ring */}
                  {careScore !== undefined && (
                    <div className="flex-shrink-0 pt-8">
                      <CareScoreRing score={careScore} />
                    </div>
                  )}
                </div>
              </div>

              {/* ── Alerts strip ── */}
              {briefing.alerts && briefing.alerts.length > 0 && (
                <div className="card-2 space-y-2">
                  {briefing.alerts.map((alert, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 px-4 py-3 rounded-xl text-sm"
                      style={
                        alert.level === "high"
                          ? { background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", color: "#f87171" }
                          : alert.level === "medium"
                          ? { background: "rgba(251,146,60,0.08)", border: "1px solid rgba(251,146,60,0.2)", color: "#fb923c" }
                          : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }
                      }
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{alert.message}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Today's priorities ── */}
              {briefing.priorities && briefing.priorities.length > 0 && (
                <div
                  className="card-3 rounded-2xl p-5"
                  style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4" style={{ color: GOLD }} />
                    <h3 className="text-sm font-semibold text-white">Today&rsquo;s priorities</h3>
                    <div className="ml-auto">
                      <CopyPrioritiesButton priorities={briefing.priorities} />
                    </div>
                  </div>
                  <ol className="space-y-3">
                    {briefing.priorities.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl"
                        style={{ background: NAVY, border: "1px solid rgba(255,255,255,0.04)" }}
                      >
                        <span
                          className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                          style={{ background: `${GOLD}22`, color: GOLD, border: `1px solid ${GOLD}33` }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* ── Calendar events ── */}
              {briefing.calendar_events && briefing.calendar_events.length > 0 && (
                <div
                  className="card-4 rounded-2xl p-5"
                  style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" style={{ color: "#22d3ee" }} />
                    <h3 className="text-sm font-semibold text-white">Today&rsquo;s calendar</h3>
                  </div>
                  <div className="space-y-3">
                    {briefing.calendar_events.map((ev, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span
                          className="text-xs font-mono w-14 flex-shrink-0"
                          style={{ color: "#22d3ee" }}
                        >
                          {ev.time}
                        </span>
                        <div className="w-px h-8 flex-shrink-0" style={{ background: "rgba(34,211,238,0.2)" }} />
                        <div className="min-w-0">
                          <p className="text-sm text-white/80 truncate">{ev.title}</p>
                          {ev.location && (
                            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{ev.location}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Care check-in ── */}
              {briefing.care_checkin && (
                <div
                  className="card-4 rounded-2xl p-5"
                  style={{ background: SURFACE, border: "1px solid rgba(244,114,182,0.15)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-4 h-4" style={{ color: "#f472b6" }} />
                    <h3 className="text-sm font-semibold text-white">Care check-in</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {briefing.care_checkin}
                  </p>
                </div>
              )}

              {/* ── Sovereign insight ── */}
              {briefing.sovereign_insight && (
                <div
                  className="card-5 rounded-2xl p-5"
                  style={{ background: SURFACE, border: `1px solid ${GOLD}22` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-4 h-4" style={{ color: GOLD }} />
                    <h3 className="text-sm font-semibold text-white">Sovereign insight</h3>
                    <span
                      className="ml-auto text-[10px] px-2 py-0.5 rounded-full"
                      style={{ background: `${GOLD}12`, color: `${GOLD}88`, border: `1px solid ${GOLD}22` }}
                    >
                      overnight observation
                    </span>
                  </div>
                  <p className="text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    &ldquo;{briefing.sovereign_insight}&rdquo;
                  </p>
                </div>
              )}

              {/* ── Dynamic sections ── */}
              {briefing.sections?.map((section, idx) => {
                const key = section.title?.toLowerCase().split(" ")[0] || "personal";

                if (key === "gaming") {
                  return (
                    <div key={section.title} className={`card-${Math.min(idx + 3, 6)}`}>
                      <GamingCard section={section} />
                    </div>
                  );
                }

                const Icon = SECTION_ICONS[key] || Lightbulb;
                const color = SECTION_COLORS[key] || "rgba(255,255,255,0.5)";
                return (
                  <div
                    key={section.title}
                    className={`card-${Math.min(idx + 3, 6)} rounded-2xl p-5`}
                    style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4" style={{ color }} />
                      <h3 className="text-sm font-semibold text-white">{humaniseKey(key)}</h3>
                      {section.title && (
                        <span
                          className="ml-auto text-[10px] px-2 py-0.5 rounded-full"
                          style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.08)" }}
                        >
                          {section.title}
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {section.content}
                    </p>
                    {section.metadata && Object.keys(section.metadata).length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {Object.entries(section.metadata)
                          .slice(0, 4)
                          .map(([k, v]) => (
                            <div
                              key={k}
                              className="text-xs px-2 py-1 rounded"
                              style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.35)" }}
                            >
                              <span style={{ color: "rgba(255,255,255,0.2)" }}>{k}: </span>
                              {String(v)}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* ── Next suggested action ── */}
              {briefing.next_suggested_action && (
                <div
                  className="card-6 rounded-2xl p-5"
                  style={{ background: SURFACE, border: "1px solid rgba(74,222,128,0.15)" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(74,222,128,0.1)" }}
                    >
                      <ShieldCheck className="w-4 h-4" style={{ color: "#4ade80" }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(74,222,128,0.6)" }}>
                        Suggested next step
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                        {briefing.next_suggested_action}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
