"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Gamepad2,
  Star,
  Clock,
  Trophy,
  TrendingUp,
  Loader2,
  Zap,
  Lock,
  ChevronDown,
  ChevronUp,
  Monitor,
} from "lucide-react";
import { Surface } from "@/components/design-system/surface";
import { GlowText } from "@/components/design-system/glow-text";
import { useActiveGame } from "@/hooks/use-active-game";

// ── Brand tokens ─────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── Types ─────────────────────────────────────────────────────────────────────
interface GameSession {
  id: string;
  game: string;
  duration: number; // minutes
  notes: string;
  rating: number; // 1-5
  date: string; // ISO
}

interface Milestone {
  id: string;
  label: string;
  description: string;
  check: (sessions: GameSession[]) => boolean;
  progress: (sessions: GameSession[]) => { current: number; total: number };
}

// ── Constants ─────────────────────────────────────────────────────────────────
const LS_KEY = "meok_gaming_sessions";

const MILESTONES: Milestone[] = [
  {
    id: "first_session",
    label: "First Session Logged",
    description: "Log your first gaming session",
    check: (s) => s.length >= 1,
    progress: (s) => ({ current: Math.min(s.length, 1), total: 1 }),
  },
  {
    id: "five_sessions",
    label: "5 Sessions",
    description: "Log 5 gaming sessions",
    check: (s) => s.length >= 5,
    progress: (s) => ({ current: Math.min(s.length, 5), total: 5 }),
  },
  {
    id: "ten_hours",
    label: "10 Hours Played",
    description: "Accumulate 10 hours of play time",
    check: (s) => s.reduce((acc, x) => acc + x.duration, 0) >= 600,
    progress: (s) => ({
      current: Math.min(Math.floor(s.reduce((acc, x) => acc + x.duration, 0) / 60), 10),
      total: 10,
    }),
  },
  {
    id: "seven_day_streak",
    label: "7-Day Streak",
    description: "Play on 7 consecutive days",
    check: (s) => {
      if (s.length < 7) return false;
      const days = [...new Set(s.map((x) => x.date))].sort().reverse();
      if (days.length < 7) return false;
      let streak = 1;
      for (let i = 1; i < days.length; i++) {
        const prev = new Date(days[i - 1]);
        const curr = new Date(days[i]);
        const diff = (prev.getTime() - curr.getTime()) / 86400000;
        if (diff === 1) {
          streak++;
          if (streak >= 7) return true;
        } else {
          streak = 1;
        }
      }
      return false;
    },
    progress: (s) => {
      const days = [...new Set(s.map((x) => x.date))].sort().reverse();
      let streak = days.length > 0 ? 1 : 0;
      for (let i = 1; i < days.length; i++) {
        const prev = new Date(days[i - 1]);
        const curr = new Date(days[i]);
        const diff = (prev.getTime() - curr.getTime()) / 86400000;
        if (diff === 1) {
          streak++;
          if (streak >= 7) break;
        } else break;
      }
      return { current: Math.min(streak, 7), total: 7 };
    },
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDuration(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

function loadSessions(): GameSession[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveSessions(sessions: GameSession[]) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(sessions));
  } catch {
    // silent
  }
}

// ── Star Rating component ─────────────────────────────────────────────────────
function StarRating({
  value,
  onChange,
  readonly = false,
}: {
  value: number;
  onChange?: (v: number) => void;
  readonly?: boolean;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(star)}
          className="transition-transform hover:scale-110 disabled:cursor-default disabled:hover:scale-100"
        >
          <Star
            className="w-4 h-4"
            style={{
              color: star <= value ? GOLD : "rgba(255,255,255,0.15)",
              fill: star <= value ? GOLD : "transparent",
            }}
          />
        </button>
      ))}
    </div>
  );
}

// ── Performance Chart ─────────────────────────────────────────────────────────
function PerformanceChart({ sessions }: { sessions: GameSession[] }) {
  const last7 = sessions.slice(0, 7).reverse();
  if (last7.length === 0) {
    return (
      <div
        className="rounded-xl p-6 flex items-center justify-center"
        style={{ background: SURFACE, border: `1px solid ${BORDER}`, minHeight: 160 }}
      >
        <p className="text-sm text-white/30">Log sessions to see trends</p>
      </div>
    );
  }

  const maxDuration = Math.max(...last7.map((s) => s.duration), 1);

  return (
    <div
      className="rounded-xl p-5"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4" style={{ color: GOLD }} />
        <span className="text-sm font-semibold text-white">Last 7 Sessions</span>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-2 h-28">
        {last7.map((s, i) => {
          const heightPct = (s.duration / maxDuration) * 100;
          const label = s.date.slice(5); // MM-DD
          return (
            <div key={s.id} className="flex-1 flex flex-col items-center gap-1 group relative">
              {/* Tooltip */}
              <div
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[10px] text-white whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10"
                style={{ background: "#1e1d2e", border: `1px solid ${BORDER}` }}
              >
                {s.game} · {formatDuration(s.duration)}
              </div>

              {/* Duration bar */}
              <div
                className="w-full rounded-t transition-all"
                style={{
                  height: `${Math.max(heightPct, 4)}%`,
                  background: i === last7.length - 1
                    ? `linear-gradient(180deg, ${GOLD}, ${GOLD}99)`
                    : `rgba(201,168,76,0.35)`,
                  minHeight: 4,
                }}
              />

              {/* Rating dot */}
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: s.rating >= 4
                    ? "#22c55e"
                    : s.rating >= 3
                    ? GOLD
                    : "#ef4444",
                }}
                title={`Rating: ${s.rating}/5`}
              />

              <span className="text-[9px] text-white/30">{label}</span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-3 pt-3" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ background: `rgba(201,168,76,0.35)` }} />
          <span className="text-[10px] text-white/40">Duration bar</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            <div className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: GOLD }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#ef4444" }} />
          </div>
          <span className="text-[10px] text-white/40">Rating (4-5 / 3 / 1-2)</span>
        </div>
      </div>
    </div>
  );
}

// ── Milestone Card ─────────────────────────────────────────────────────────────
function MilestoneCard({
  milestone,
  sessions,
}: {
  milestone: Milestone;
  sessions: GameSession[];
}) {
  const unlocked = milestone.check(sessions);
  const { current, total } = milestone.progress(sessions);
  const pct = Math.round((current / total) * 100);

  return (
    <div
      className="rounded-xl p-4 flex items-center gap-3 transition-all"
      style={{
        background: unlocked ? `${GOLD}0d` : SURFACE,
        border: `1px solid ${unlocked ? `${GOLD}30` : BORDER}`,
      }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
        style={{
          background: unlocked ? `${GOLD}20` : "rgba(255,255,255,0.04)",
        }}
      >
        {unlocked ? (
          <Trophy className="w-4 h-4" style={{ color: GOLD }} />
        ) : (
          <Lock className="w-4 h-4 text-white/20" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-semibold truncate"
          style={{ color: unlocked ? GOLD : "rgba(255,255,255,0.5)" }}
        >
          {milestone.label}
        </p>
        <p className="text-[11px] text-white/30 mt-0.5">{milestone.description}</p>
        {!unlocked && (
          <div className="mt-1.5 flex items-center gap-2">
            <div
              className="flex-1 h-1 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, background: `${GOLD}70` }}
              />
            </div>
            <span className="text-[10px] text-white/30 shrink-0">
              {current}/{total}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function GamingPage() {
  const { game, title, loading } = useActiveGame();
  const [sessions, setSessions] = useState<GameSession[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Form state
  const [gameName, setGameName] = useState("");
  const [duration, setDuration] = useState(60);
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState(3);

  // AI coaching
  const [coachingTips, setCoachingTips] = useState<string>("");
  const [loadingTips, setLoadingTips] = useState(false);
  const [lastCoachSession, setLastCoachSession] = useState<string>("");
  const [showTips, setShowTips] = useState(false);

  // Sessions list collapse
  const [showAllSessions, setShowAllSessions] = useState(false);

  // Hydrate: load from localStorage first (fast), then sync from backend
  useEffect(() => {
    const local = loadSessions();
    setSessions(local);
    setHydrated(true);

    // Fetch from backend — overrides localStorage with server data (cross-device sync)
    fetch('/api/gaming/sessions')
      .then(r => r.json())
      .then((data: { sessions?: GameSession[] }) => {
        if (Array.isArray(data.sessions) && data.sessions.length > 0) {
          setSessions(data.sessions);
          saveSessions(data.sessions);
        }
      })
      .catch(() => { /* silent — use localStorage */ });
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (hydrated) saveSessions(sessions);
  }, [sessions, hydrated]);

  const fetchCoachingTips = useCallback(async (session: GameSession) => {
    setLoadingTips(true);
    setCoachingTips("");
    setShowTips(true);
    const sessionKey = session.id;
    setLastCoachSession(sessionKey);

    const prompt = `Game: ${session.game}. Duration: ${formatDuration(session.duration)}. Rating: ${session.rating}/5. Notes: "${session.notes || "No notes provided"}". Give 2 concise, actionable coaching tips for this session.`;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: prompt }],
          companionId: "__gaming_coach__",
          _systemOverride:
            "You are a gaming coach for MEOK AI. Given this game session log, give 2 concise coaching tips. Format as: 1. [tip]\n2. [tip]. Keep each tip under 2 sentences.",
        }),
      });

      if (!res.ok) {
        setCoachingTips("Could not fetch coaching tips. Try again.");
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) {
        setCoachingTips("No response stream.");
        return;
      }

      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setCoachingTips(text);
      }
    } catch {
      setCoachingTips("Failed to connect to AI coach. Please try again.");
    } finally {
      setLoadingTips(false);
    }
  }, []);

  function handleLogSession() {
    if (!gameName.trim()) return;
    const newSession: GameSession = {
      id: crypto.randomUUID(),
      game: gameName.trim(),
      duration,
      notes: notes.trim(),
      rating,
      date: new Date().toISOString().split("T")[0],
    };
    const updated = [newSession, ...sessions];
    setSessions(updated);
    setGameName("");
    setDuration(60);
    setNotes("");
    setRating(3);

    // Sync to backend (fire-and-forget)
    fetch('/api/gaming/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSession),
    }).catch(() => { /* silent — localStorage is source of truth if backend is down */ });

    fetchCoachingTips(newSession);
  }

  const totalHours = Math.round(sessions.reduce((acc, s) => acc + s.duration, 0) / 60);
  const avgRating =
    sessions.length > 0
      ? (sessions.reduce((acc, s) => acc + s.rating, 0) / sessions.length).toFixed(1)
      : "—";

  const visibleSessions = showAllSessions ? sessions : sessions.slice(0, 5);

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: DEEP }}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${GOLD}18` }}
        >
          <Gamepad2 className="w-5 h-5" style={{ color: GOLD }} />
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white">Gaming Dashboard</h1>
          <p className="text-sm text-white/40">Track sessions · Visualize trends · AI coaching</p>
        </div>
      </div>

      {/* Active Game Card */}
      <Surface
        variant="elevated"
        glow={game ? "gold" : "none"}
        className="mb-6 p-4 flex items-center gap-4"
      >
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: game ? `${GOLD}18` : "rgba(255,255,255,0.06)" }}
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin text-white/40" />
          ) : (
            <Monitor className="w-5 h-5" style={{ color: game ? GOLD : "rgba(255,255,255,0.35)" }} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-white/40">
            Active Window
          </p>
          {loading ? (
            <p className="text-sm text-white/30">Detecting game...</p>
          ) : game ? (
            <div className="flex items-center gap-2 flex-wrap">
              <GlowText variant="gold" className="text-base font-semibold capitalize">
                {game}
              </GlowText>
              <span className="text-xs text-white/30 truncate">· {title}</span>
            </div>
          ) : (
            <p className="text-sm text-white/50">No game detected</p>
          )}
        </div>
      </Surface>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Total Hours", value: totalHours, icon: Clock },
          { label: "Sessions", value: sessions.length, icon: Gamepad2 },
          {
            label: "Games Played",
            value: new Set(sessions.map((s) => s.game)).size,
            icon: TrendingUp,
          },
          { label: "Avg Rating", value: avgRating, icon: Star },
        ].map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl p-4 text-center"
            style={{ background: SURFACE, border: `1px solid ${GOLD}18` }}
          >
            <div className="flex justify-center mb-1">
              <Icon className="w-4 h-4" style={{ color: GOLD }} />
            </div>
            <div className="text-xl font-black text-white">{value}</div>
            <div className="text-[11px] text-white/40 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ── Left column ── */}
        <div className="space-y-5">
          {/* 78.1 Session Logger */}
          <div
            className="rounded-xl p-5"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Gamepad2 className="w-4 h-4" style={{ color: GOLD }} />
              Log a Session
            </h2>

            <div className="space-y-4">
              {/* Game name */}
              <div>
                <label className="block text-xs text-white/50 mb-1.5">Game Name</label>
                <input
                  type="text"
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogSession()}
                  placeholder="e.g. Elden Ring"
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-white/20 outline-none focus:ring-1"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${BORDER}`,
                    // @ts-expect-error -- CSS custom property
                    "--tw-ring-color": GOLD,
                  }}
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs text-white/50 mb-1.5">
                  Duration:{" "}
                  <span style={{ color: GOLD }}>{formatDuration(duration)}</span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={300}
                  step={5}
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, ${GOLD} ${(duration / 300) * 100}%, rgba(255,255,255,0.1) ${(duration / 300) * 100}%)`,
                    accentColor: GOLD,
                  }}
                />
                <div className="flex justify-between text-[10px] text-white/25 mt-1">
                  <span>5m</span>
                  <span>5h</span>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs text-white/50 mb-1.5">Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="What happened? Any breakthrough moments?"
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-white/20 outline-none resize-none focus:ring-1"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${BORDER}`,
                    // @ts-expect-error -- CSS custom property
                    "--tw-ring-color": GOLD,
                  }}
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-xs text-white/50 mb-1.5">Session Rating</label>
                <StarRating value={rating} onChange={setRating} />
              </div>

              {/* Submit */}
              <button type="button"
                onClick={handleLogSession}
                disabled={!gameName.trim()}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-30 disabled:hover:scale-100"
                style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`, color: DEEP }}
              >
                <Zap className="w-4 h-4" />
                Log Session
              </button>
            </div>
          </div>

          {/* 78.3 AI Coaching Tips */}
          {(showTips || coachingTips) && (
            <div
              className="rounded-xl p-5"
              style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center"
                  style={{ background: `${GOLD}20` }}
                >
                  <Zap className="w-3.5 h-3.5" style={{ color: GOLD }} />
                </div>
                <span className="text-sm font-semibold text-white">AI Coaching Tips</span>
                {loadingTips && (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-white/40 ml-auto" />
                )}
              </div>

              {loadingTips && !coachingTips ? (
                <div className="space-y-2">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-4 rounded animate-pulse"
                      style={{ background: "rgba(255,255,255,0.06)", width: i === 1 ? "90%" : "75%" }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-sm text-white/60 leading-relaxed whitespace-pre-line">
                  {coachingTips}
                </div>
              )}

              {!loadingTips && coachingTips && lastCoachSession && (
                <button type="button"
                  onClick={() => {
                    const s = sessions.find((x) => x.id === lastCoachSession);
                    if (s) fetchCoachingTips(s);
                  }}
                  className="mt-3 text-[11px] font-medium transition-colors"
                  style={{ color: `${GOLD}80` }}
                >
                  Regenerate tips
                </button>
              )}
            </div>
          )}
        </div>

        {/* ── Right column ── */}
        <div className="space-y-5">
          {/* 78.2 Performance Trends */}
          <PerformanceChart sessions={sessions} />

          {/* 78.4 Achievement Milestones */}
          <div
            className="rounded-xl p-5"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-4 h-4" style={{ color: GOLD }} />
              <span className="text-sm font-semibold text-white">Milestones</span>
              <span
                className="ml-auto text-[11px] font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: `${GOLD}15`,
                  color: GOLD,
                }}
              >
                {MILESTONES.filter((m) => m.check(sessions)).length}/{MILESTONES.length}
              </span>
            </div>

            <div className="space-y-3">
              {MILESTONES.map((milestone) => (
                <MilestoneCard
                  key={milestone.id}
                  milestone={milestone}
                  sessions={sessions}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Sessions list */}
      {sessions.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-white">Recent Sessions</h2>
            <span className="text-[11px] text-white/30">{sessions.length} total</span>
          </div>

          <div className="space-y-2">
            {visibleSessions.map((s) => (
              <div
                key={s.id}
                className="rounded-xl px-4 py-3 flex items-center gap-4"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${GOLD}12` }}
                >
                  <Gamepad2 className="w-4 h-4" style={{ color: GOLD }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-white truncate">{s.game}</span>
                    <span
                      className="text-xs font-medium shrink-0"
                      style={{ color: GOLD }}
                    >
                      {formatDuration(s.duration)}
                    </span>
                    <StarRating value={s.rating} readonly />
                  </div>
                  {s.notes && (
                    <p className="text-[11px] text-white/35 mt-0.5 truncate">{s.notes}</p>
                  )}
                </div>
                <span className="text-[10px] text-white/20 shrink-0">{s.date}</span>
              </div>
            ))}
          </div>

          {sessions.length > 5 && (
            <button type="button"
              onClick={() => setShowAllSessions(!showAllSessions)}
              className="mt-3 w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-medium transition-all hover:scale-[1.01]"
              style={{
                background: `${GOLD}08`,
                color: `${GOLD}99`,
                border: `1px solid ${GOLD}18`,
              }}
            >
              {showAllSessions ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" /> Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" /> Show All {sessions.length} Sessions
                </>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
