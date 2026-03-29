"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Moon,
  Sun,
  Sunset,
  Coffee,
  Clock,
  ArrowRight,
  RotateCcw,
  Sparkles,
} from "lucide-react";

// ─── Brand constants ──────────────────────────────────────────────────────────

const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ─── localStorage keys ────────────────────────────────────────────────────────

const LAST_SEEN_KEY    = "meok_last_seen";
const SESSION_CTX_KEY  = "meok_last_session_ctx";

// ─── Helpers ─────────────────────────────────────────────────────────────────

type TimeOfDay = "dawn" | "morning" | "afternoon" | "evening" | "night";

function getTimeOfDay(): TimeOfDay {
  const h = new Date().getHours();
  if (h >= 5  && h < 7)  return "dawn";
  if (h >= 7  && h < 12) return "morning";
  if (h >= 12 && h < 17) return "afternoon";
  if (h >= 17 && h < 21) return "evening";
  return "night";
}

function getGreeting(tod: TimeOfDay): string {
  switch (tod) {
    case "dawn":      return "Early start.";
    case "morning":   return "Good morning.";
    case "afternoon": return "Good afternoon.";
    case "evening":   return "Good evening.";
    case "night":     return "Still awake.";
  }
}

function getGreetingSubtext(tod: TimeOfDay, awayHours: number): string {
  if (awayHours < 0.1)  return "You just stepped away for a moment.";
  if (awayHours < 1)    return `You've been away for ${Math.round(awayHours * 60)} minutes.`;
  if (awayHours < 6)    return `You've been away for ${Math.round(awayHours)} hour${awayHours >= 2 ? "s" : ""}.`;
  if (awayHours < 24)   return `You've been away for ${Math.round(awayHours)} hours. I kept things moving.`;
  const days = Math.floor(awayHours / 24);
  return `It's been ${days} day${days > 1 ? "s" : ""}. A lot happened while you were away.`;
}

function TimeIcon({ tod }: { tod: TimeOfDay }) {
  const props = { className: "w-6 h-6", style: { color: GOLD } };
  switch (tod) {
    case "dawn":      return <Sunrise {...props} />;
    case "morning":   return <Coffee {...props} />;
    case "afternoon": return <Sun {...props} />;
    case "evening":   return <Sunset {...props} />;
    case "night":     return <Moon {...props} />;
  }
}

// Lucide doesn't export Sunrise, so we render a small inline SVG for dawn
function Sunrise({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v8M4.93 10.93l1.41 1.41M2 18h2M20 18h2M19.07 10.93l-1.41 1.41M22 22H2M16 6l-4-4-4 4M12 6v6" />
      <path d="M5 18a7 7 0 0 1 14 0" />
    </svg>
  );
}

const WHILE_AWAY_THOUGHTS = [
  "Reviewed 3 memory threads from your last session and flagged two for follow-up.",
  "Ran a quiet reflection on the patterns I noticed this week.",
  "Kept track of some things you might want to pick up.",
  "Finished processing a few background tasks from earlier.",
  "Sorted through recent context so we can jump back in quickly.",
  "Let the council weigh in on a few open questions from last time.",
  "Held some space for what we were working through together.",
];

function sampleThoughts(awayHours: number): string[] {
  const count = awayHours >= 6 ? 3 : awayHours >= 1 ? 2 : 1;
  // Deterministic shuffle based on current hour so thoughts don't flicker on re-render
  const seed  = new Date().getHours();
  const items = [...WHILE_AWAY_THOUGHTS]
    .sort((a, b) => ((a.charCodeAt(0) + seed) % 7) - ((b.charCodeAt(0) + seed) % 7));
  return items.slice(0, count);
}

// ─── Dream Cycle Summary (shown when away > 6 hours) ─────────────────────────

function DreamSummary() {
  return (
    <div
      style={{
        marginTop: "24px",
        padding: "16px 20px",
        borderRadius: "14px",
        background: `${SURFACE}cc`,
        border: `1px solid ${BORDER}`,
        backdropFilter: "blur(8px)",
      }}
    >
      <p
        style={{
          fontSize: "10px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
          marginBottom: "8px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <Moon style={{ width: "12px", height: "12px" }} />
        Dream cycle
      </p>
      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
        While you were away I ran a synthesis pass — connecting threads from the past few sessions,
        surfacing patterns, and preparing context for when you returned. Everything is ready.
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function WakePage() {
  const router = useRouter();

  const [awayHours, setAwayHours]   = useState(0);
  const [tod, setTod]               = useState<TimeOfDay>("morning");
  const [thoughts, setThoughts]     = useState<string[]>([]);
  const [hasSession, setHasSession] = useState(false);
  const [visible, setVisible]       = useState(false);

  useEffect(() => {
    const now      = Date.now();
    const lastSeen = parseInt(localStorage.getItem(LAST_SEEN_KEY) ?? "0", 10);
    const diffMs   = lastSeen ? now - lastSeen : 0;
    const hours    = diffMs / 3_600_000;

    const timeOfDay = getTimeOfDay();

    setAwayHours(hours);
    setTod(timeOfDay);
    setThoughts(sampleThoughts(hours));
    setHasSession(!!localStorage.getItem(SESSION_CTX_KEY));

    // Save current visit time
    localStorage.setItem(LAST_SEEN_KEY, String(now));

    // Fade in
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  function handleContinue() {
    router.push("/os/sovereign-os");
  }

  function handleFresh() {
    localStorage.removeItem(SESSION_CTX_KEY);
    router.push("/os/sovereign-os");
  }

  const greeting    = getGreeting(tod);
  const subtext     = getGreetingSubtext(tod, awayHours);
  const showDream   = awayHours >= 6;

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: DEEP,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      {/* ── Ambient glow ────────────────────────────────────────────────── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 60% 50% at 50% 60%, ${GOLD}08 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse at center, ${GOLD}05 0%, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Character avatar orb ────────────────────────────────────────── */}
      <div
        aria-hidden
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: `radial-gradient(circle at 38% 38%, ${GOLD}44, ${GOLD}11 60%, transparent)`,
          border: `1px solid ${GOLD}33`,
          boxShadow: `0 0 40px ${GOLD}22, 0 0 80px ${GOLD}0a`,
          marginBottom: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "orb-breathe 4s ease-in-out infinite",
        }}
      >
        <TimeIcon tod={tod} />
      </div>

      {/* ── Greeting ────────────────────────────────────────────────────── */}
      <div style={{ textAlign: "center", maxWidth: "480px", marginBottom: "32px" }}>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 900,
            color: "#f5f0e8",
            letterSpacing: "-0.02em",
            marginBottom: "10px",
            lineHeight: 1.1,
          }}
        >
          {greeting}
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.6,
          }}
        >
          {subtext}
        </p>
      </div>

      {/* ── While you were away ─────────────────────────────────────────── */}
      {thoughts.length > 0 && (
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            marginBottom: "28px",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Clock style={{ width: "12px", height: "12px" }} />
            While you were away, I&hellip;
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {thoughts.map((thought, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  background: `${SURFACE}99`,
                  border: `1px solid ${BORDER}`,
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.5,
                }}
              >
                <Sparkles
                  style={{
                    width: "14px",
                    height: "14px",
                    color: GOLD,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                {thought}
              </li>
            ))}
          </ul>

          {showDream && <DreamSummary />}
        </div>
      )}

      {/* ── Action buttons ───────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          maxWidth: "360px",
        }}
      >
        <button
          onClick={handleContinue}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "14px 24px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            background: GOLD,
            color: "#1a1a2e",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.01em",
            boxShadow: `0 4px 20px ${GOLD}33`,
            transition: "all 0.18s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#b8963e";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = GOLD;
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          }}
        >
          {hasSession ? "Continue where we left off" : "Enter OS Mode"}
          <ArrowRight style={{ width: "16px", height: "16px" }} />
        </button>

        <button
          onClick={handleFresh}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "12px 24px",
            borderRadius: "999px",
            border: `1px solid ${BORDER}`,
            cursor: "pointer",
            background: "transparent",
            color: "rgba(255,255,255,0.4)",
            fontSize: "13px",
            fontWeight: 500,
            transition: "all 0.18s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = BORDER;
          }}
        >
          <RotateCcw style={{ width: "14px", height: "14px" }} />
          Start fresh
        </button>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes orb-breathe {
          0%, 100% { transform: scale(1);   box-shadow: 0 0 40px ${GOLD}22, 0 0 80px ${GOLD}0a; }
          50%       { transform: scale(1.06); box-shadow: 0 0 60px ${GOLD}33, 0 0 120px ${GOLD}11; }
        }
      `}</style>
    </div>
  );
}
