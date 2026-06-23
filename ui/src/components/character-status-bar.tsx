"use client";

import { useState, useEffect } from "react";
import { Brain, Clock, Heart, ChevronDown, ChevronUp, Loader2 } from "lucide-react";

// ─── Brand constants ──────────────────────────────────────────────────────────

const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CharacterStatusProps {
  /** Character display name. Falls back to "Sovereign" if not provided. */
  characterName?: string;
  /** Short mood descriptor shown next to the name dot. */
  mood?: string;
  /** Hex colour that represents the character's current mood / archetype. */
  moodColor?: string;
  /** What the character is currently doing. Null = idle. */
  currentTask?: string | null;
  /** 0-100 — how far through the current task. Shown as gold fill on bar bottom edge. */
  taskProgress?: number;
  /** Consciousness mode label e.g. "Sovereign", "Guardian", "Dream". */
  consciousnessMode?: string;
  /** Bond level 0-100. */
  bondLevel?: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatTime(d: Date): string {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function bondLabel(level: number): string {
  if (level >= 90) return "Bonded";
  if (level >= 70) return "Close";
  if (level >= 50) return "Growing";
  if (level >= 25) return "Familiar";
  return "New";
}

// ─── Component ───────────────────────────────────────────────────────────────

export function CharacterStatusBar({
  characterName = "Sovereign",
  mood = "Present",
  moodColor = GOLD,
  currentTask = null,
  taskProgress = 0,
  consciousnessMode = "Sovereign",
  bondLevel = 42,
}: CharacterStatusProps) {
  const [expanded, setExpanded] = useState(false);
  const [time, setTime] = useState(() => formatTime(new Date()));

  // Tick the clock
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 30_000);
    return () => clearInterval(id);
  }, []);

  const isWorking = currentTask !== null && currentTask.trim().length > 0;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        background: SURFACE,
        borderBottom: `1px solid ${BORDER}`,
        userSelect: "none",
      }}
    >
      {/* ── Main bar row ──────────────────────────────────────────────────── */}
      <button type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-label="Toggle character status details"
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          height: "40px",
          padding: "0 16px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "inherit",
        }}
      >
        {/* Left — avatar dot + name + mood */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            justifyContent: "flex-start",
          }}
        >
          {/* Avatar dot — pulsing when working */}
          <span
            aria-hidden
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: moodColor,
              flexShrink: 0,
              boxShadow: isWorking ? `0 0 6px ${moodColor}99` : "none",
              animation: isWorking ? "status-pulse 2s ease-in-out infinite" : "none",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              whiteSpace: "nowrap",
            }}
          >
            {characterName}
          </span>
          <span
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            {mood}
          </span>
        </div>

        {/* Center — current task or idle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "11px",
            color: isWorking ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.28)",
            fontStyle: isWorking ? "normal" : "italic",
            textAlign: "center",
            maxWidth: "260px",
            overflow: "hidden",
          }}
        >
          {isWorking && (
            <Loader2
              className="w-3 h-3 shrink-0 animate-spin"
              style={{ color: GOLD }}
            />
          )}
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {isWorking ? currentTask : "Listening\u2026"}
          </span>
        </div>

        {/* Right — consciousness mode + bond + time + expand icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: GOLD,
            }}
          >
            <Brain className="w-3 h-3 shrink-0" />
            {consciousnessMode}
          </span>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "10px",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            <Heart className="w-3 h-3 shrink-0" style={{ color: "#c9648a" }} />
            {bondLabel(bondLevel)}
          </span>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "10px",
              color: "rgba(255,255,255,0.28)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            <Clock className="w-3 h-3 shrink-0" />
            {time}
          </span>

          <span style={{ color: "rgba(255,255,255,0.25)" }}>
            {expanded ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </span>
        </div>
      </button>

      {/* ── Progress fill — bottom edge of bar ───────────────────────────── */}
      {isWorking && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "2px",
            width: `${Math.min(100, Math.max(0, taskProgress))}%`,
            background: `linear-gradient(90deg, ${GOLD}99, ${GOLD})`,
            borderRadius: "0 2px 2px 0",
            transition: "width 0.8s ease",
          }}
        />
      )}

      {/* ── Expanded panel ────────────────────────────────────────────────── */}
      {expanded && (
        <div
          style={{
            padding: "12px 16px 14px",
            borderTop: `1px solid ${BORDER}`,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            fontSize: "12px",
            color: "rgba(255,255,255,0.55)",
            background: DEEP,
          }}
        >
          {/* Task details */}
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginBottom: "4px",
              }}
            >
              Current task
            </p>
            {isWorking ? (
              <>
                <p style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                  {currentTask}
                </p>
                <div
                  style={{
                    marginTop: "8px",
                    height: "4px",
                    borderRadius: "2px",
                    background: BORDER,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${Math.min(100, Math.max(0, taskProgress))}%`,
                      background: GOLD,
                      borderRadius: "2px",
                      transition: "width 0.8s ease",
                    }}
                  />
                </div>
                <p
                  style={{
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  {taskProgress}% complete
                </p>
              </>
            ) : (
              <p style={{ fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>
                No active task
              </p>
            )}
          </div>

          {/* Bond + mode */}
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginBottom: "4px",
              }}
            >
              Bond level
            </p>
            <div
              style={{
                height: "4px",
                borderRadius: "2px",
                background: BORDER,
                overflow: "hidden",
                marginBottom: "4px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${bondLevel}%`,
                  background: "#c9648a",
                  borderRadius: "2px",
                  transition: "width 0.8s ease",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "12px",
              }}
            >
              {bondLevel} / 100 — {bondLabel(bondLevel)}
            </p>

            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginBottom: "4px",
              }}
            >
              Consciousness
            </p>
            <p style={{ color: GOLD, fontWeight: 600 }}>{consciousnessMode} mode</p>
          </div>
        </div>
      )}

      {/* ── Keyframes injected once ──────────────────────────────────────── */}
      <style>{`
        @keyframes status-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
