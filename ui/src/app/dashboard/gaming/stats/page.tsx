"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  Gamepad2,
  Plus,
  Trash2,
  Target,
  BarChart2,
  FileText,
  Loader2,
  ChevronDown,
  Trophy,
  TrendingUp,
  X,
  Clock,
  Star,
  Zap,
  CalendarDays,
} from "lucide-react";

// ── Brand tokens ─────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── Session type (mirrors API response) ───────────────────────────────────────
interface GameSession {
  id: string;
  game: string;
  duration: number; // minutes
  notes: string;
  rating: number; // 1-5
  date: string; // ISO date string
}

// ── Session stats helpers ─────────────────────────────────────────────────────
function computeSessionStats(sessions: GameSession[]) {
  if (sessions.length === 0) {
    return {
      totalMinutes: 0,
      sessionCount: 0,
      avgRating: 0,
      mostPlayedGame: null as string | null,
      bestStreak: 0,
      playtimeByDay: [] as { day: string; label: string; minutes: number }[],
    };
  }

  const totalMinutes = sessions.reduce((sum, s) => sum + s.duration, 0);
  const sessionCount = sessions.length;
  const avgRating =
    sessions.reduce((sum, s) => sum + s.rating, 0) / sessions.length;

  // Most played game by total minutes
  const gameMinutes: Record<string, number> = {};
  for (const s of sessions) {
    gameMinutes[s.game] = (gameMinutes[s.game] ?? 0) + s.duration;
  }
  const mostPlayedGame = Object.entries(gameMinutes).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0] ?? null;

  // Best streak: consecutive calendar days with at least one session
  const daySet = new Set(sessions.map((s) => s.date.slice(0, 10)));
  const sortedDays = Array.from(daySet).sort();
  let bestStreak = 0;
  let currentStreak = 0;
  let prevDate: Date | null = null;
  for (const d of sortedDays) {
    const cur = new Date(d);
    if (
      prevDate &&
      cur.getTime() - prevDate.getTime() === 86400000
    ) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }
    bestStreak = Math.max(bestStreak, currentStreak);
    prevDate = cur;
  }

  // Playtime by day — last 7 calendar days
  const today = new Date();
  const playtimeByDay: { day: string; label: string; minutes: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const label = d.toLocaleDateString("en-GB", {
      weekday: "short",
    });
    const minutes = sessions
      .filter((s) => s.date.slice(0, 10) === key)
      .reduce((sum, s) => sum + s.duration, 0);
    playtimeByDay.push({ day: key, label, minutes });
  }

  return { totalMinutes, sessionCount, avgRating, mostPlayedGame, bestStreak, playtimeByDay };
}

function formatMinutes(mins: number): string {
  if (mins < 60) return `${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

// ── Session Overview component ────────────────────────────────────────────────
function SessionOverview() {
  const [sessions, setSessions] = useState<GameSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/gaming/sessions");
        if (!res.ok) throw new Error("Failed to load sessions");
        const data = (await res.json()) as { sessions: GameSession[] };
        if (!cancelled) {
          setSessions(data.sessions ?? []);
        }
      } catch {
        if (!cancelled) setError("Could not load session data.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const stats = computeSessionStats(sessions);
  const maxDayMinutes = Math.max(...stats.playtimeByDay.map((d) => d.minutes), 1);

  if (loading) {
    return (
      <div
        className="rounded-xl p-5 flex items-center justify-center gap-3"
        style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
      >
        <Loader2 className="w-4 h-4 animate-spin" style={{ color: GOLD }} />
        <span className="text-sm text-white/40">Loading session data…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="rounded-xl p-5"
        style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
      >
        <p className="text-sm text-white/40 text-center">{error}</p>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl p-5 xl:col-span-2"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-5">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${GOLD}18` }}
        >
          <TrendingUp className="w-4 h-4" style={{ color: GOLD }} />
        </div>
        <h2 className="text-base font-semibold text-white">Session Overview</h2>
        <span className="text-xs text-white/30 ml-auto">from /api/gaming/sessions</span>
      </div>

      {sessions.length === 0 ? (
        <p className="text-sm text-white/25 text-center py-6">
          No sessions logged yet. Start logging on the{" "}
          <a
            href="/dashboard/gaming"
            className="underline"
            style={{ color: GOLD }}
          >
            Gaming page
          </a>
          .
        </p>
      ) : (
        <>
          {/* KPI cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
            {[
              {
                icon: <Clock className="w-3.5 h-3.5" />,
                label: "Total Playtime",
                value: formatMinutes(stats.totalMinutes),
              },
              {
                icon: <Gamepad2 className="w-3.5 h-3.5" />,
                label: "Sessions",
                value: stats.sessionCount.toString(),
              },
              {
                icon: <Star className="w-3.5 h-3.5" />,
                label: "Avg Rating",
                value: stats.avgRating.toFixed(1) + " / 5",
              },
              {
                icon: <Trophy className="w-3.5 h-3.5" />,
                label: "Most Played",
                value: stats.mostPlayedGame ?? "—",
              },
              {
                icon: <Zap className="w-3.5 h-3.5" />,
                label: "Best Streak",
                value:
                  stats.bestStreak > 1
                    ? `${stats.bestStreak} days`
                    : stats.bestStreak === 1
                    ? "1 day"
                    : "—",
              },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="rounded-lg p-3 flex flex-col gap-1"
                style={{ background: DEEP, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="flex items-center gap-1.5"
                  style={{ color: GOLD }}
                >
                  {icon}
                  <span className="text-[10px] text-white/40 uppercase tracking-wider font-medium">
                    {label}
                  </span>
                </div>
                <p
                  className="text-sm font-semibold text-white truncate"
                  title={value}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Playtime by day — last 7 days */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays className="w-3.5 h-3.5" style={{ color: GOLD }} />
              <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
                Playtime last 7 days
              </p>
            </div>
            <div className="flex items-end gap-2 h-24">
              {stats.playtimeByDay.map(({ day, label, minutes }) => {
                const heightPct =
                  minutes === 0 ? 0 : Math.max(6, (minutes / maxDayMinutes) * 100);
                return (
                  <div
                    key={day}
                    className="flex-1 flex flex-col items-center gap-1 group relative"
                  >
                    {/* Tooltip */}
                    {minutes > 0 && (
                      <div
                        className="absolute bottom-full mb-1.5 px-2 py-1 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                        style={{
                          background: SURFACE,
                          border: `1px solid ${BORDER}`,
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        {formatMinutes(minutes)}
                      </div>
                    )}
                    <div className="w-full flex-1 flex items-end">
                      <div
                        className="w-full rounded-t-sm transition-all duration-300"
                        style={{
                          height: `${heightPct}%`,
                          background:
                            minutes === 0
                              ? "rgba(255,255,255,0.04)"
                              : `linear-gradient(to top, ${GOLD}cc, ${GOLD}55)`,
                          minHeight: "3px",
                        }}
                      />
                    </div>
                    <span
                      className="text-white/30 flex-shrink-0"
                      style={{ fontSize: "9px" }}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────
type StatType = "Win Rate" | "K-D Ratio" | "Rank" | "Score";
const STAT_TYPES: StatType[] = ["Win Rate", "K-D Ratio", "Rank", "Score"];

interface StatEntry {
  id: string;
  game: string;
  statType: StatType;
  value: string;
  date: string;
}

interface Goal {
  id: string;
  game: string;
  statType: StatType;
  description: string;
  targetValue: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function loadStats(): StatEntry[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("meok_gaming_stats") ?? "[]");
  } catch {
    return [];
  }
}

function saveStats(entries: StatEntry[]) {
  localStorage.setItem("meok_gaming_stats", JSON.stringify(entries));
}

function loadGoals(): Goal[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("meok_gaming_goals") ?? "[]");
  } catch {
    return [];
  }
}

function saveGoals(goals: Goal[]) {
  localStorage.setItem("meok_gaming_goals", JSON.stringify(goals));
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function parseNumeric(value: string): number {
  const n = parseFloat(value.replace(/[^0-9.\-]/g, ""));
  return isNaN(n) ? 0 : n;
}

// ── Section wrapper ───────────────────────────────────────────────────────────
function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl p-5"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <div className="flex items-center gap-2.5 mb-5">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${GOLD}18` }}
        >
          {icon}
        </div>
        <h2 className="text-base font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// ── Styled input ──────────────────────────────────────────────────────────────
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-white/50 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  background: DEEP,
  border: `1px solid ${BORDER}`,
  color: "rgba(255,255,255,0.8)",
  outline: "none",
} as React.CSSProperties;

// ── Main component ────────────────────────────────────────────────────────────
export default function GamingStatsPage() {
  // ── State: Stats entries ──
  const [stats, setStats] = useState<StatEntry[]>([]);

  // ── State: Form ──
  const [formGame, setFormGame] = useState("");
  const [formStatType, setFormStatType] = useState<StatType>("Win Rate");
  const [formValue, setFormValue] = useState("");
  const [formDate, setFormDate] = useState(
    () => new Date().toISOString().slice(0, 10)
  );

  // ── State: Charts filter ──
  const [chartGame, setChartGame] = useState<string>("all");
  const [chartStat, setChartStat] = useState<StatType>("Win Rate");

  // ── State: Session notes ──
  const [notes, setNotes] = useState("");
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");
  const analysisRef = useRef<HTMLDivElement>(null);

  // ── State: Goals ──
  const [goals, setGoals] = useState<Goal[]>([]);
  const [goalGame, setGoalGame] = useState("");
  const [goalStatType, setGoalStatType] = useState<StatType>("Win Rate");
  const [goalDesc, setGoalDesc] = useState("");
  const [goalTarget, setGoalTarget] = useState("");

  // ── Load from localStorage ──
  useEffect(() => {
    setStats(loadStats());
    setGoals(loadGoals());
  }, []);

  // ── Derived: unique games ──
  const games = Array.from(new Set(stats.map((s) => s.game))).filter(Boolean);

  // ── 81.1 Save stat entry ──
  const handleAddStat = useCallback(() => {
    if (!formGame.trim() || !formValue.trim()) return;
    const entry: StatEntry = {
      id: uid(),
      game: formGame.trim(),
      statType: formStatType,
      value: formValue.trim(),
      date: formDate,
    };
    const updated = [entry, ...stats];
    setStats(updated);
    saveStats(updated);
    setFormGame("");
    setFormValue("");
  }, [formGame, formStatType, formValue, formDate, stats]);

  const handleDeleteStat = useCallback(
    (id: string) => {
      const updated = stats.filter((s) => s.id !== id);
      setStats(updated);
      saveStats(updated);
    },
    [stats]
  );

  // ── 81.2 Chart data ──
  const chartData = useCallback((): StatEntry[] => {
    return stats
      .filter((s) => {
        const gameMatch = chartGame === "all" || s.game === chartGame;
        const typeMatch = s.statType === chartStat;
        return gameMatch && typeMatch;
      })
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-12); // last 12 entries
  }, [stats, chartGame, chartStat]);

  const chartEntries = chartData();
  const chartValues = chartEntries.map((e) => parseNumeric(e.value));
  const chartMax = Math.max(...chartValues, 1);
  const chartMin = Math.min(...chartValues, 0);
  const chartRange = chartMax - chartMin || 1;

  // ── 81.3 AI analysis ──
  const handleAnalyse = useCallback(async () => {
    if (!notes.trim()) return;
    setAnalysisLoading(true);
    setAnalysis("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: notes.trim() }],
          companionId: "__gaming_analyst__",
          _systemOverride:
            "You are a gaming performance analyst. Analyse these session notes and give 3 specific improvement areas. Be concise and actionable. Use numbered points.",
        }),
      });

      if (!res.ok) {
        setAnalysis("Error: Could not reach analysis service.");
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) {
        setAnalysis("Error: No response stream.");
        return;
      }

      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setAnalysis(text);
      }
      setTimeout(
        () => analysisRef.current?.scrollIntoView({ behavior: "smooth" }),
        100
      );
    } catch {
      setAnalysis("Error: Failed to analyse notes. Please try again.");
    } finally {
      setAnalysisLoading(false);
    }
  }, [notes]);

  // ── 81.4 Goals ──
  const handleAddGoal = useCallback(() => {
    if (!goalGame.trim() || !goalDesc.trim() || !goalTarget.trim()) return;
    const goal: Goal = {
      id: uid(),
      game: goalGame.trim(),
      statType: goalStatType,
      description: goalDesc.trim(),
      targetValue: goalTarget.trim(),
    };
    const updated = [goal, ...goals];
    setGoals(updated);
    saveGoals(updated);
    setGoalGame("");
    setGoalDesc("");
    setGoalTarget("");
  }, [goalGame, goalStatType, goalDesc, goalTarget, goals]);

  const handleDeleteGoal = useCallback(
    (id: string) => {
      const updated = goals.filter((g) => g.id !== id);
      setGoals(updated);
      saveGoals(updated);
    },
    [goals]
  );

  // Get current value for a goal (most recent matching stat)
  function getCurrentForGoal(goal: Goal): number | null {
    const matching = stats
      .filter((s) => s.game === goal.game && s.statType === goal.statType)
      .sort((a, b) => b.date.localeCompare(a.date));
    if (matching.length === 0) return null;
    return parseNumeric(matching[0].value);
  }

  // ── Stat type colour ──
  function statColour(type: StatType): string {
    switch (type) {
      case "Win Rate":
        return "#22c55e";
      case "K-D Ratio":
        return "#3b82f6";
      case "Rank":
        return GOLD;
      case "Score":
        return "#a855f7";
    }
  }

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: DEEP }}>
      {/* Page header */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${GOLD}18` }}
        >
          <Gamepad2 className="w-5 h-5" style={{ color: GOLD }} />
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white">
            Gaming Stats
          </h1>
          <p className="text-sm text-white/40">
            Track performance, analyse sessions, hit your goals
          </p>
        </div>
      </div>

      {/* ── Session overview (real API data) ──────────────────────────────── */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        <SessionOverview />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* ── 81.1 Manual stats entry ─────────────────────────────────────── */}
        <Section
          title="Log a Stat"
          icon={<Plus className="w-4 h-4" style={{ color: GOLD }} />}
        >
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Field label="Game name">
              <input
                type="text"
                value={formGame}
                onChange={(e) => setFormGame(e.target.value)}
                placeholder="e.g. Valorant"
                className="w-full px-3 py-2 rounded-lg text-sm"
                style={inputStyle}
              />
            </Field>
            <Field label="Stat type">
              <div className="relative">
                <select
                  value={formStatType}
                  onChange={(e) => setFormStatType(e.target.value as StatType)}
                  className="w-full px-3 py-2 rounded-lg text-sm appearance-none pr-8"
                  style={inputStyle}
                >
                  {STAT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                />
              </div>
            </Field>
            <Field label="Value">
              <input
                type="text"
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                placeholder="e.g. 54.2"
                className="w-full px-3 py-2 rounded-lg text-sm"
                style={inputStyle}
              />
            </Field>
            <Field label="Date">
              <input
                type="date"
                value={formDate}
                onChange={(e) => setFormDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg text-sm"
                style={inputStyle}
              />
            </Field>
          </div>

          <button type="button"
            onClick={handleAddStat}
            disabled={!formGame.trim() || !formValue.trim()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100 mb-5"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`,
              color: DEEP,
            }}
          >
            <Plus className="w-4 h-4" />
            Add Entry
          </button>

          {/* Recent entries table */}
          {stats.length > 0 && (
            <div>
              <p className="text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">
                Recent entries
              </p>
              <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                {stats.slice(0, 20).map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg group"
                    style={{
                      background: DEEP,
                      border: `1px solid ${BORDER}`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: statColour(s.statType) }}
                    />
                    <span className="text-sm text-white/70 flex-1 min-w-0 truncate">
                      {s.game}
                    </span>
                    <span
                      className="text-xs font-medium flex-shrink-0"
                      style={{ color: statColour(s.statType) }}
                    >
                      {s.statType}
                    </span>
                    <span className="text-sm text-white font-mono flex-shrink-0">
                      {s.value}
                    </span>
                    <span className="text-xs text-white/30 flex-shrink-0">
                      {s.date}
                    </span>
                    <button type="button"
                      onClick={() => handleDeleteStat(s.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:text-red-400 text-white/30 flex-shrink-0"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {stats.length === 0 && (
            <p className="text-sm text-white/25 text-center py-6">
              No stats logged yet — add your first entry above.
            </p>
          )}
        </Section>

        {/* ── 81.2 Progress charts ─────────────────────────────────────────── */}
        <Section
          title="Progress Charts"
          icon={<BarChart2 className="w-4 h-4" style={{ color: GOLD }} />}
        >
          {/* Filters */}
          <div className="flex gap-3 mb-5">
            <div className="flex-1 relative">
              <select
                value={chartGame}
                onChange={(e) => setChartGame(e.target.value)}
                className="w-full px-3 py-2 rounded-lg text-sm appearance-none pr-8"
                style={inputStyle}
              >
                <option value="all">All games</option>
                {games.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: "rgba(255,255,255,0.3)" }}
              />
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {STAT_TYPES.map((t) => (
                <button type="button"
                  key={t}
                  onClick={() => setChartStat(t)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background:
                      chartStat === t ? `${statColour(t)}22` : DEEP,
                    color:
                      chartStat === t ? statColour(t) : "rgba(255,255,255,0.4)",
                    border: `1px solid ${chartStat === t ? statColour(t) + "50" : BORDER}`,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Bar chart */}
          {chartEntries.length > 0 ? (
            <div>
              <p className="text-xs text-white/40 mb-3">
                {chartStat} over time
                {chartGame !== "all" ? ` — ${chartGame}` : ""}
                {" "}({chartEntries.length} entries)
              </p>
              <div className="flex items-end gap-1.5 h-40 mb-2">
                {chartEntries.map((entry, i) => {
                  const val = chartValues[i];
                  const heightPct =
                    chartRange === 0
                      ? 100
                      : ((val - chartMin) / chartRange) * 100;
                  const clampedHeight = Math.max(4, Math.min(100, heightPct));
                  return (
                    <div
                      key={entry.id}
                      className="flex-1 flex flex-col items-center gap-1 group relative"
                    >
                      {/* Tooltip */}
                      <div
                        className="absolute bottom-full mb-2 px-2 py-1 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                        style={{
                          background: SURFACE,
                          border: `1px solid ${BORDER}`,
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        {entry.value}
                        {chartGame === "all" && (
                          <span className="text-white/40 ml-1">
                            {entry.game}
                          </span>
                        )}
                        <br />
                        <span className="text-white/40">{entry.date}</span>
                      </div>
                      <div
                        className="w-full rounded-t-sm transition-all duration-300"
                        style={{
                          height: `${clampedHeight}%`,
                          background: `linear-gradient(to top, ${statColour(chartStat)}cc, ${statColour(chartStat)}55)`,
                          minHeight: "4px",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              {/* X-axis labels */}
              <div className="flex gap-1.5">
                {chartEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex-1 text-center text-white/20"
                    style={{ fontSize: "9px" }}
                  >
                    {entry.date.slice(5)}
                  </div>
                ))}
              </div>

              {/* Summary stats */}
              <div
                className="grid grid-cols-3 gap-3 mt-4 p-3 rounded-lg"
                style={{ background: DEEP }}
              >
                {[
                  {
                    label: "Min",
                    val: Math.min(...chartValues).toFixed(2),
                  },
                  {
                    label: "Max",
                    val: Math.max(...chartValues).toFixed(2),
                  },
                  {
                    label: "Avg",
                    val: (
                      chartValues.reduce((a, b) => a + b, 0) /
                      chartValues.length
                    ).toFixed(2),
                  },
                ].map(({ label, val }) => (
                  <div key={label} className="text-center">
                    <p className="text-xs text-white/30">{label}</p>
                    <p
                      className="text-sm font-semibold mt-0.5"
                      style={{ color: statColour(chartStat) }}
                    >
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="flex flex-col items-center justify-center h-40 rounded-lg"
              style={{ background: DEEP, border: `1px dashed ${BORDER}` }}
            >
              <TrendingUp
                className="w-8 h-8 mb-2"
                style={{ color: "rgba(255,255,255,0.1)" }}
              />
              <p className="text-sm text-white/25">
                No data for {chartStat}
                {chartGame !== "all" ? ` in ${chartGame}` : ""}
              </p>
              <p className="text-xs text-white/15 mt-1">
                Log some entries to see your chart
              </p>
            </div>
          )}
        </Section>

        {/* ── 81.3 Session notes + AI analysis ────────────────────────────── */}
        <Section
          title="Session Notes"
          icon={<FileText className="w-4 h-4" style={{ color: GOLD }} />}
        >
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write about your session... what went well, what felt off, key moments, tilt triggers, decision-making issues..."
            rows={8}
            className="w-full p-3 rounded-lg text-white/80 text-sm leading-relaxed resize-none outline-none"
            style={{
              background: DEEP,
              border: `1px solid ${BORDER}`,
            }}
          />

          <button type="button"
            onClick={handleAnalyse}
            disabled={analysisLoading || !notes.trim()}
            className="mt-3 flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`,
              color: DEEP,
            }}
          >
            {analysisLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <TrendingUp className="w-4 h-4" />
            )}
            {analysisLoading ? "Analysing..." : "Analyse"}
          </button>

          {analysis && (
            <div
              ref={analysisRef}
              className="mt-4 p-4 rounded-lg"
              style={{
                background: `${GOLD}08`,
                border: `1px solid ${GOLD}20`,
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4" style={{ color: GOLD }} />
                <p className="text-sm font-semibold text-white">
                  AI Performance Analysis
                </p>
              </div>
              <p
                className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {analysis}
              </p>
            </div>
          )}
        </Section>

        {/* ── 81.4 Goal tracking ───────────────────────────────────────────── */}
        <Section
          title="Goal Tracking"
          icon={<Target className="w-4 h-4" style={{ color: GOLD }} />}
        >
          {/* Add goal form */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Field label="Game">
              <input
                type="text"
                value={goalGame}
                onChange={(e) => setGoalGame(e.target.value)}
                placeholder="e.g. League of Legends"
                className="w-full px-3 py-2 rounded-lg text-sm"
                style={inputStyle}
              />
            </Field>
            <Field label="Stat type">
              <div className="relative">
                <select
                  value={goalStatType}
                  onChange={(e) =>
                    setGoalStatType(e.target.value as StatType)
                  }
                  className="w-full px-3 py-2 rounded-lg text-sm appearance-none pr-8"
                  style={inputStyle}
                >
                  {STAT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                />
              </div>
            </Field>
            <Field label="Goal description">
              <input
                type="text"
                value={goalDesc}
                onChange={(e) => setGoalDesc(e.target.value)}
                placeholder='e.g. "Reach Diamond rank"'
                className="w-full px-3 py-2 rounded-lg text-sm"
                style={inputStyle}
              />
            </Field>
            <Field label="Target value">
              <input
                type="text"
                value={goalTarget}
                onChange={(e) => setGoalTarget(e.target.value)}
                placeholder="e.g. 50 or Diamond"
                className="w-full px-3 py-2 rounded-lg text-sm"
                style={inputStyle}
              />
            </Field>
          </div>

          <button type="button"
            onClick={handleAddGoal}
            disabled={
              !goalGame.trim() || !goalDesc.trim() || !goalTarget.trim()
            }
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100 mb-5"
            style={{
              background: `${GOLD}18`,
              color: GOLD,
              border: `1px solid ${GOLD}30`,
            }}
          >
            <Plus className="w-4 h-4" />
            Add Goal
          </button>

          {/* Goals list */}
          {goals.length > 0 ? (
            <div className="space-y-3">
              {goals.map((goal) => {
                const current = getCurrentForGoal(goal);
                const target = parseNumeric(goal.targetValue);
                const hasNumericTarget = !isNaN(target) && target !== 0;
                let progress = 0;
                if (hasNumericTarget && current !== null) {
                  progress = Math.min(100, Math.max(0, (current / target) * 100));
                }
                const colour = statColour(goal.statType);

                return (
                  <div
                    key={goal.id}
                    className="p-3 rounded-lg"
                    style={{
                      background: DEEP,
                      border: `1px solid ${BORDER}`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Trophy
                            className="w-3.5 h-3.5 flex-shrink-0"
                            style={{ color: colour }}
                          />
                          <span className="text-sm font-medium text-white truncate">
                            {goal.description}
                          </span>
                        </div>
                        <p className="text-xs text-white/40 mt-0.5">
                          {goal.game} —{" "}
                          <span style={{ color: colour }}>{goal.statType}</span>
                          {" "}· Target:{" "}
                          <span className="text-white/60">
                            {goal.targetValue}
                          </span>
                        </p>
                      </div>
                      <button type="button"
                        onClick={() => handleDeleteGoal(goal.id)}
                        className="p-1 rounded hover:text-red-400 text-white/20 transition-colors flex-shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Progress bar */}
                    {hasNumericTarget ? (
                      <div>
                        <div
                          className="w-full h-2 rounded-full overflow-hidden"
                          style={{ background: "rgba(255,255,255,0.06)" }}
                        >
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${progress}%`,
                              background:
                                progress >= 100
                                  ? "#22c55e"
                                  : `linear-gradient(to right, ${colour}88, ${colour})`,
                            }}
                          />
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-xs text-white/40">
                            Current:{" "}
                            <span className="text-white/60 font-medium">
                              {current !== null ? current : "—"}
                            </span>
                          </span>
                          <span
                            className="text-xs font-semibold"
                            style={{
                              color: progress >= 100 ? "#22c55e" : colour,
                            }}
                          >
                            {progress >= 100
                              ? "Goal reached!"
                              : `${progress.toFixed(1)}%`}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/40">
                          Current:{" "}
                          <span className="text-white/60 font-medium">
                            {current !== null ? current : "—"}
                          </span>
                        </span>
                        <span className="text-xs text-white/30">
                          Non-numeric target
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-white/25 text-center py-6">
              No goals set yet — add one above.
            </p>
          )}
        </Section>
      </div>
    </div>
  );
}
