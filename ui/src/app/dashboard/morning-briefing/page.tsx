"use client";

/**
 * Morning Briefing — wired to real /api/morning-briefing data.
 *
 * "The moment users realise: it wasn't sleeping, it was working for me."
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import {
  MessageCircle,
  BookOpen,
  FlaskConical,
  Brain,
  Heart,
  Lightbulb,
  RefreshCw,
  Clock,
  TrendingUp,
  AlertCircle,
  Bot,
  Moon,
  Sunrise,
  ShieldCheck,
} from "lucide-react";

// ── Brand tokens ─────────────────────────────────────────────────
const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";

// ── API response shape ────────────────────────────────────────────
interface Priority {
  id: string;
  text: string;
  priority: "high" | "medium" | "low";
}

interface OvernightWork {
  agent: string;
  task: string;
  status: "complete" | "pending" | "failed";
}

interface CalendarEvent {
  time: string;
  title: string;
  location?: string;
}

interface Briefing {
  generated_at: string;
  care_score: number; // 0–100
  greeting: string;
  priorities: Priority[];
  calendar_events: CalendarEvent[];
  overnight_work: OvernightWork[];
  sovereign_insight: string;
  dream_insight: string | null;
  next_action: string;
}

// Fallback when /api/chat is used instead
interface FallbackBriefing {
  fallback: true;
  greeting: string;
  message: string;
  generated_at: string;
}

type BriefingState = Briefing | FallbackBriefing | null;

// ── Helpers ───────────────────────────────────────────────────────
function getTimeGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function priorityColor(p: Priority["priority"]): string {
  if (p === "high") return "#f87171";
  if (p === "medium") return GOLD;
  return "#4ade80";
}

function statusColor(s: OvernightWork["status"]): string {
  if (s === "complete") return "#4ade80";
  if (s === "failed") return "#f87171";
  return GOLD;
}

// ── Loading skeleton ──────────────────────────────────────────────
function Skeleton() {
  return (
    <div className="space-y-4">
      <div className="h-44 rounded-2xl animate-pulse" style={{ background: SURFACE }} />
      <div className="rounded-2xl p-5 animate-pulse" style={{ background: SURFACE }}>
        <div className="h-3 w-28 rounded mb-4" style={{ background: "rgba(255,255,255,0.06)" }} />
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3 mb-3">
            <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.06)" }} />
            <div className="h-3 rounded flex-1" style={{ background: "rgba(255,255,255,0.05)" }} />
          </div>
        ))}
      </div>
      {[1, 2].map((i) => (
        <div key={i} className="h-24 rounded-2xl animate-pulse" style={{ background: SURFACE }} />
      ))}
    </div>
  );
}

// ── Generating state ──────────────────────────────────────────────
function GeneratingState() {
  return (
    <div
      className="rounded-2xl p-12 flex flex-col items-center text-center"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
        style={{ background: `${GOLD}14`, border: `1px solid ${GOLD}33` }}
      >
        <Brain className="w-7 h-7 animate-pulse" style={{ color: GOLD }} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Preparing your briefing…</h3>
      <p className="text-sm max-w-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
        MEOK is gathering overnight work, care data, and insights. Just a moment.
      </p>
    </div>
  );
}

// ── Care score ring ───────────────────────────────────────────────
function CareScoreRing({ score }: { score: number }) {
  const pct = Math.min(100, Math.max(0, score));
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
          <circle cx="48" cy="48" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
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

// ── Error state ───────────────────────────────────────────────────
function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div
      className="rounded-2xl p-10 flex flex-col items-center text-center"
      style={{ background: SURFACE, border: "1px solid rgba(248,113,113,0.18)" }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
        style={{ background: "rgba(248,113,113,0.10)", border: "1px solid rgba(248,113,113,0.20)" }}
      >
        <AlertCircle className="w-6 h-6" style={{ color: "#f87171" }} />
      </div>
      <h3 className="text-base font-bold text-white mb-2">Couldn&rsquo;t load briefing</h3>
      <p className="text-sm mb-6 max-w-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
        {message}
      </p>
      <button
        onClick={onRetry}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
        style={{
          background: GOLD,
          color: "#1a1a2e",
        }}
      >
        <RefreshCw className="w-4 h-4" />
        Try again
      </button>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────
export default function MorningBriefingPage() {
  const { user } = useUser();
  const [briefing, setBriefing] = useState<BriefingState>(null);
  const [status, setStatus] = useState<"loading" | "generating" | "ready" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const displayName =
    user?.firstName ||
    user?.emailAddresses[0]?.emailAddress?.split("@")[0] ||
    "there";

  const greeting = `${getTimeGreeting()}, ${displayName}`;

  // ── Fallback: call /api/chat when briefing API fails ─────────
  const fallbackToChat = async () => {
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content:
                "Generate a warm, caring morning briefing for the MEOK AI user. Include: a motivating thought, a care reminder, and an invitation to share what's on their mind today.",
            },
          ],
          system:
            "Generate a warm, caring morning briefing for the MEOK AI user. Include: a motivating thought, a care reminder, and an invitation to share what's on their mind today.",
        }),
      });

      if (!res.ok) throw new Error("chat fallback failed");

      // Handle both streaming and JSON responses
      const contentType = res.headers.get("content-type") ?? "";
      let message = "";

      if (contentType.includes("text/event-stream") || contentType.includes("text/plain")) {
        const text = await res.text();
        // Strip SSE data: prefixes if present
        message = text
          .split("\n")
          .filter((l) => l.startsWith("data: ") && !l.includes("[DONE]"))
          .map((l) => {
            try {
              const parsed = JSON.parse(l.slice(6));
              return parsed?.choices?.[0]?.delta?.content ?? parsed?.content ?? "";
            } catch {
              return l.slice(6);
            }
          })
          .join("")
          .trim();
        if (!message) message = text.trim();
      } else {
        const json = await res.json();
        message =
          json?.choices?.[0]?.message?.content ??
          json?.content ??
          json?.message ??
          "I'm here with you this morning. Take a breath — today holds possibility.";
      }

      const now = new Date();
      const fb: FallbackBriefing = {
        fallback: true,
        greeting,
        message,
        generated_at: now.toISOString(),
      };
      setBriefing(fb);
      setLastUpdated(now);
      setStatus("ready");
    } catch {
      // Even fallback failed — show generic message
      const now = new Date();
      const fb: FallbackBriefing = {
        fallback: true,
        greeting,
        message:
          "Good morning. MEOK is here with you. Take a moment, breathe, and share what's on your mind today — I'm listening.",
        generated_at: now.toISOString(),
      };
      setBriefing(fb);
      setLastUpdated(now);
      setStatus("ready");
    }
  };

  // ── Load briefing ─────────────────────────────────────────────
  const load = async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/morning-briefing");

      // No briefing yet — generate one
      if (res.status === 404 || res.status === 204) {
        if (!isRefresh) {
          setStatus("generating");
          setRefreshing(false);
        }
        await generate();
        return;
      }

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data: Briefing = await res.json();
      setBriefing(data);
      setLastUpdated(new Date());
      setStatus("ready");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unknown error";

      if (isRefresh) {
        // On refresh, surface a hard error with a retry button rather than silently falling back
        setErrorMsg(msg);
        setStatus("error");
        setRefreshing(false);
        return;
      }

      // On first load, try to generate fresh, then fall back to chat
      setStatus("generating");
      setRefreshing(false);
      const generated = await tryGenerate();
      if (generated) return;

      setErrorMsg(msg);
      // Last resort: /api/chat warm message
      await fallbackToChat();
    } finally {
      setRefreshing(false);
    }
  };

  // ── POST to generate a new briefing ──────────────────────────
  const tryGenerate = async (): Promise<boolean> => {
    try {
      const res = await fetch("/api/morning-briefing", { method: "POST" });
      if (!res.ok) return false;
      const data: Briefing = await res.json();
      setBriefing(data);
      setLastUpdated(new Date());
      setStatus("ready");
      return true;
    } catch {
      return false;
    }
  };

  const generate = async () => {
    const ok = await tryGenerate();
    if (!ok) {
      // POST not supported or failed — try GET one more time, then chat fallback
      try {
        const res = await fetch("/api/morning-briefing");
        if (res.ok) {
          const data: Briefing = await res.json();
          setBriefing(data);
          setLastUpdated(new Date());
          setStatus("ready");
          return;
        }
      } catch {
        // fall through
      }
      await fallbackToChat();
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Derived ───────────────────────────────────────────────────
  const isFallback = briefing && "fallback" in briefing && briefing.fallback;
  const real = !isFallback ? (briefing as Briefing | null) : null;

  const formattedTime = lastUpdated
    ? lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : briefing?.generated_at
    ? new Date(briefing.generated_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : null;

  const todayFormatted = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeSlideUp 0.35s ease both 0.05s; }
        .anim-2 { animation: fadeSlideUp 0.35s ease both 0.12s; }
        .anim-3 { animation: fadeSlideUp 0.35s ease both 0.19s; }
        .anim-4 { animation: fadeSlideUp 0.35s ease both 0.26s; }
        .anim-5 { animation: fadeSlideUp 0.35s ease both 0.33s; }
        .anim-6 { animation: fadeSlideUp 0.35s ease both 0.40s; }
      `}</style>

      <div className="min-h-screen p-6 md:p-8" style={{ background: DEEP, color: "white" }}>
        <div className="max-w-3xl space-y-5">

          {/* ── Page header ── */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sunrise className="w-5 h-5" style={{ color: GOLD }} />
                <h2 className="text-2xl font-bold text-white">Morning Briefing</h2>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                  What MEOK worked on while you were away
                </p>
                {formattedTime && (
                  <span
                    className="flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: `1px solid ${BORDER}`,
                      color: "rgba(255,255,255,0.30)",
                    }}
                  >
                    <Clock className="w-3 h-3" />
                    Last updated {formattedTime}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => load(true)}
              disabled={refreshing || status === "loading" || status === "generating"}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 flex-shrink-0 disabled:opacity-40"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.5)",
                border: `1px solid ${BORDER}`,
              }}
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "Refreshing…" : "Refresh briefing"}
            </button>
          </div>

          {/* ── States ── */}
          {status === "loading" && <Skeleton />}
          {status === "generating" && <GeneratingState />}
          {/* Refresh in-progress: show skeleton overlay on top of stale content */}
          {refreshing && status === "ready" && <Skeleton />}

          {/* ── Hard error (on refresh) — show retry button ── */}
          {status === "error" && (
            <ErrorState
              message={errorMsg ?? "The briefing API is unavailable. Please try again."}
              onRetry={() => load(true)}
            />
          )}

          {/* ── Error notice (non-fatal — fallback content shown below) ── */}
          {errorMsg && status === "ready" && (
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-xl anim-1"
              style={{ background: "rgba(248,113,113,0.07)", border: "1px solid rgba(248,113,113,0.18)" }}
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#f87171" }} />
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                Briefing API unavailable — showing AI-generated summary instead. ({errorMsg})
              </p>
            </div>
          )}

          {/* ── Fallback briefing card ── */}
          {status === "ready" && !refreshing && isFallback && briefing && (
            <>
              {/* Hero */}
              <div
                className="anim-1 rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${SURFACE} 0%, rgba(201,168,76,0.06) 100%)`,
                  border: `1px solid ${GOLD}28`,
                }}
              >
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
                >
                  <Bot className="w-3 h-3" style={{ color: "rgba(255,255,255,0.3)" }} />
                  <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>AI fallback</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Sunrise className="w-4 h-4" style={{ color: GOLD }} />
                  <span className="text-xs font-mono uppercase tracking-widest" style={{ color: GOLD }}>
                    {todayFormatted}
                  </span>
                </div>

                <h1 className="text-xl font-bold text-white mb-4">{greeting}</h1>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.75)", whiteSpace: "pre-wrap" }}
                >
                  {(briefing as FallbackBriefing).message}
                </p>
              </div>

              {/* Quick actions */}
              <div className="anim-2 flex flex-wrap items-center justify-center gap-3 pt-2">
                {quickActions.map(({ href, label, Icon }) => (
                  <QuickActionLink key={href} href={href} label={label} Icon={Icon} />
                ))}
              </div>
            </>
          )}

          {/* ── Real briefing ── */}
          {status === "ready" && !refreshing && real && (
            <>
              {/* ── Hero card ── */}
              <div
                className="anim-1 rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${SURFACE} 0%, rgba(201,168,76,0.07) 100%)`,
                  border: `1px solid ${GOLD}28`,
                }}
              >
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
                >
                  <Bot className="w-3 h-3" style={{ color: "rgba(255,255,255,0.3)" }} />
                  <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Generated overnight
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Sunrise className="w-4 h-4" style={{ color: GOLD }} />
                      <span className="text-xs font-mono uppercase tracking-widest" style={{ color: GOLD }}>
                        {todayFormatted}
                      </span>
                    </div>

                    {/* Greeting — time-aware from API or derived */}
                    <h1 className="text-2xl font-black tracking-tight text-white mb-1">
                      {real.greeting || greeting}
                    </h1>

                    {/* Next suggested action as a one-liner */}
                    {real.next_action && (
                      <p className="text-sm italic mt-2" style={{ color: GOLD }}>
                        &ldquo;{real.next_action}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* Care score ring — yesterday's score */}
                  {typeof real.care_score === "number" && (
                    <div className="flex-shrink-0 pt-6">
                      <CareScoreRing score={real.care_score} />
                      <p className="text-center text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.25)" }}>
                        yesterday
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* ── Sovereign insight ── */}
              {real.sovereign_insight && (
                <div
                  className="anim-2 rounded-2xl p-5"
                  style={{ background: SURFACE, border: `1px solid ${GOLD}22` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-4 h-4" style={{ color: GOLD }} />
                    <h3 className="text-sm font-semibold text-white">Today&rsquo;s insight</h3>
                    <span
                      className="ml-auto text-[10px] px-2 py-0.5 rounded-full"
                      style={{ background: `${GOLD}12`, color: `${GOLD}99`, border: `1px solid ${GOLD}22` }}
                    >
                      sovereign
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {real.sovereign_insight}
                  </p>
                </div>
              )}

              {/* ── Dream insight (memory summary) ── */}
              {real.dream_insight && (
                <div
                  className="anim-3 rounded-2xl p-5"
                  style={{ background: SURFACE, border: "1px solid rgba(167,139,250,0.18)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Moon className="w-4 h-4" style={{ color: "#a78bfa" }} />
                    <h3 className="text-sm font-semibold text-white">Memory summary</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {real.dream_insight}
                  </p>
                </div>
              )}

              {/* ── Priorities ── */}
              {real.priorities && real.priorities.length > 0 && (
                <div
                  className="anim-3 rounded-2xl p-5"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4" style={{ color: GOLD }} />
                    <h3 className="text-sm font-semibold text-white">Today&rsquo;s priorities</h3>
                  </div>
                  <ol className="space-y-2.5">
                    {real.priorities.map((p, i) => {
                      const col = priorityColor(p.priority);
                      return (
                        <li
                          key={p.id}
                          className="flex items-start gap-3 px-3 py-3 rounded-xl"
                          style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}
                        >
                          <span
                            className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                            style={{ background: `${col}20`, color: col, border: `1px solid ${col}33` }}
                          >
                            {i + 1}
                          </span>
                          <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                            {p.text}
                          </span>
                          <span
                            className="ml-auto text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                            style={{ background: `${col}14`, color: col, border: `1px solid ${col}28` }}
                          >
                            {p.priority}
                          </span>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              )}

              {/* ── Calendar events ── */}
              {real.calendar_events && real.calendar_events.length > 0 && (
                <div
                  className="anim-4 rounded-2xl p-5"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" style={{ color: "#22d3ee" }} />
                    <h3 className="text-sm font-semibold text-white">Today&rsquo;s calendar</h3>
                  </div>
                  <div className="space-y-3">
                    {real.calendar_events.map((ev, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-xs font-mono w-14 flex-shrink-0" style={{ color: "#22d3ee" }}>
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

              {/* ── Overnight work ── */}
              {real.overnight_work && real.overnight_work.length > 0 && (
                <div
                  className="anim-4 rounded-2xl p-5"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-4 h-4" style={{ color: "#22d3ee" }} />
                    <h3 className="text-sm font-semibold text-white">Overnight work</h3>
                  </div>
                  <div className="space-y-2.5">
                    {real.overnight_work.map((w, i) => {
                      const col = statusColor(w.status);
                      return (
                        <div
                          key={i}
                          className="flex items-start gap-3 px-3 py-2.5 rounded-xl"
                          style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}
                        >
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                            style={{ background: col }}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold mb-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                              {w.agent}
                            </p>
                            <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.7)" }}>
                              {w.task}
                            </p>
                          </div>
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{ background: `${col}14`, color: col, border: `1px solid ${col}28` }}
                          >
                            {w.status}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── Next suggested action ── */}
              {real.next_action && (
                <div
                  className="anim-5 rounded-2xl p-5"
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
                        {real.next_action}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Quick actions ── */}
              <div className="anim-6 flex flex-wrap items-center justify-center gap-3 pt-2">
                {quickActions.map(({ href, label, Icon }) => (
                  <QuickActionLink key={href} href={href} label={label} Icon={Icon} />
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
}

// ── Quick action definitions ──────────────────────────────────────
const quickActions = [
  { href: "/dashboard/chat", label: "Chat", Icon: MessageCircle },
  { href: "/dashboard/journal", label: "Journal", Icon: BookOpen },
  { href: "/dashboard/research", label: "Research", Icon: FlaskConical },
] as const;

function QuickActionLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ElementType;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
      style={{
        color: GOLD,
        border: `1px solid ${GOLD}44`,
        background: "transparent",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = `${GOLD}12`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
      }}
    >
      <Icon className="w-4 h-4" />
      {label}
    </Link>
  );
}
