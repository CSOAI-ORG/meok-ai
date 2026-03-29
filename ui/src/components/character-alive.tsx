"use client";

/**
 * MEOK AI LABS — Character Alive Component
 *
 * Shows a character's live state: breathing animation, eye state, ambient
 * thought bubbles, a presence indicator, and time-aware greetings.
 *
 * Designed for use in Fly Eye and Sovereign OS.
 *
 * Brand constants:
 *   DEEP    = #0d0c18
 *   SURFACE = #13121f
 *   BORDER  = rgba(255,255,255,0.07)
 *   GOLD    = #c9a84c
 */

import { useEffect, useRef, useState, useCallback } from "react";
import type { Archetype } from "@/lib/characters";
import {
  type CharacterState,
  type CharacterMode,
  type CharacterMood,
  decayAwareness,
  generateAmbientThought,
  appendThought,
  getTimeGreeting,
  getMoodForTime,
} from "@/lib/character-alive";
import { CharacterCSSFace, type FaceSize } from "@/components/character-css-face";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface CharacterAliveProps {
  /** Controlled state — caller manages persistence; component reads + emits */
  state: CharacterState;
  /** Character identifier used for ambient thought pool selection */
  characterName: string;
  /** Archetype influences face shape */
  archetype?: Archetype;
  /** Face size */
  size?: FaceSize;
  /** Show the time-aware greeting line */
  showGreeting?: boolean;
  /** Show the ambient thought bubble when idle */
  showThoughts?: boolean;
  /** Show the presence pulse ring */
  showPresence?: boolean;
  /** Called when state mutates internally (decay, new thought) */
  onStateChange?: (next: CharacterState) => void;
  /** Reduced motion override — disables animations regardless of OS setting */
  disableAnimation?: boolean;
}

// ── Presence pulse colours per mode ──────────────────────────────────────────

const PRESENCE_COLOUR: Record<CharacterMode, string> = {
  listening:  "#c9a84c",  // gold — user present
  working:    "#5b9cf6",  // blue — active background task
  thinking:   "#5b9cf6",
  reflecting: "#9b6dca",  // purple
  dreaming:   "#aaa8c8",  // very slow silver
  waking:     "#c9a84c",
};

const PRESENCE_DURATION: Record<CharacterMode, number> = {
  listening:  1.4,
  working:    1.8,
  thinking:   2.2,
  reflecting: 3.0,
  dreaming:   6.0,
  waking:     4.0,
};

// ── Mode label ────────────────────────────────────────────────────────────────

const MODE_LABEL: Record<CharacterMode, string> = {
  waking:    "waking",
  working:   "working",
  thinking:  "thinking",
  listening: "listening",
  dreaming:  "dreaming",
  reflecting:"reflecting",
};

// ── Ambient thought interval (ms) ─────────────────────────────────────────────

const THOUGHT_INTERVAL_MS = 45_000;

/** How long the thought bubble stays visible (ms) */
const THOUGHT_VISIBLE_MS  = 6_000;

/** How long the decay check runs (ms) */
const DECAY_INTERVAL_MS   = 60_000;

// ── Component ─────────────────────────────────────────────────────────────────

export function CharacterAlive({
  state,
  characterName,
  archetype,
  size = "md",
  showGreeting = true,
  showThoughts = true,
  showPresence = true,
  onStateChange,
  disableAnimation = false,
}: CharacterAliveProps) {
  const [visibleThought, setVisibleThought] = useState<string | null>(null);
  const [thoughtFading, setThoughtFading] = useState(false);
  const thoughtTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const decayTimerRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const thoughtCycleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detect reduced motion preference
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const animated = !disableAnimation && !prefersReduced;

  // ── Greeting ──────────────────────────────────────────────────────────────
  const hour = new Date().getHours();
  const greeting = getTimeGreeting(hour);

  // ── Emit state helper ─────────────────────────────────────────────────────
  const emit = useCallback(
    (next: CharacterState) => {
      onStateChange?.(next);
    },
    [onStateChange],
  );

  // ── Thought bubble logic ──────────────────────────────────────────────────

  const showNextThought = useCallback(() => {
    // Only show thoughts when idle (not listening)
    if (state.mode === "listening") return;

    const thought = generateAmbientThought(state, characterName);
    const nextState = appendThought(state, thought);
    emit(nextState);

    setThoughtFading(false);
    setVisibleThought(thought);

    // After THOUGHT_VISIBLE_MS start fade-out
    if (thoughtTimerRef.current) clearTimeout(thoughtTimerRef.current);
    thoughtTimerRef.current = setTimeout(() => {
      setThoughtFading(true);
      // Clear after CSS transition
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      fadeTimerRef.current = setTimeout(() => setVisibleThought(null), 600);
    }, THOUGHT_VISIBLE_MS);
  }, [state, characterName, emit]);

  // Cycle ambient thoughts when idle
  useEffect(() => {
    if (!showThoughts) return;

    if (thoughtCycleRef.current) clearInterval(thoughtCycleRef.current);
    thoughtCycleRef.current = setInterval(showNextThought, THOUGHT_INTERVAL_MS);

    return () => {
      if (thoughtCycleRef.current) clearInterval(thoughtCycleRef.current);
    };
  }, [showNextThought, showThoughts]);

  // Clear thought bubble when user starts interacting
  useEffect(() => {
    if (state.mode === "listening") {
      setVisibleThought(null);
      setThoughtFading(false);
      if (thoughtTimerRef.current) clearTimeout(thoughtTimerRef.current);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    }
  }, [state.mode]);

  // ── Awareness decay timer ─────────────────────────────────────────────────

  useEffect(() => {
    decayTimerRef.current = setInterval(() => {
      const next = decayAwareness(state);
      if (
        next.awarenessLevel !== state.awarenessLevel ||
        next.mode !== state.mode ||
        next.mood !== state.mood
      ) {
        emit(next);
      }
    }, DECAY_INTERVAL_MS);

    return () => {
      if (decayTimerRef.current) clearInterval(decayTimerRef.current);
    };
  }, [state, emit]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (thoughtTimerRef.current) clearTimeout(thoughtTimerRef.current);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      if (decayTimerRef.current) clearInterval(decayTimerRef.current);
      if (thoughtCycleRef.current) clearInterval(thoughtCycleRef.current);
    };
  }, []);

  // ── Derived visual props ──────────────────────────────────────────────────

  const presenceColour  = PRESENCE_COLOUR[state.mode];
  const presenceDuration = PRESENCE_DURATION[state.mode];
  const modeLabel       = MODE_LABEL[state.mode];

  // Mood label for display
  const moodLabel = state.mood.charAt(0).toUpperCase() + state.mood.slice(1);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div
      className="character-alive"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        userSelect: "none",
        position: "relative",
      }}
    >
      {/* Keyframes */}
      {animated && (
        <style>{`
          @keyframes meok-presence-pulse {
            0%, 100% { transform: scale(1);    opacity: 0.5; }
            50%       { transform: scale(1.15); opacity: 0; }
          }
          @keyframes meok-thought-in {
            from { opacity: 0; transform: translateY(4px) scale(0.97); }
            to   { opacity: 1; transform: translateY(0)   scale(1); }
          }
          @keyframes meok-thought-out {
            from { opacity: 1; }
            to   { opacity: 0; }
          }
          @keyframes meok-awareness-bar {
            from { width: 0%; }
          }
        `}</style>
      )}

      {/* ── Presence ring + face ── */}
      <div style={{ position: "relative", display: "inline-flex" }}>
        {/* Presence pulse ring */}
        {showPresence && animated && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: -6,
              borderRadius: "50%",
              border: `1.5px solid ${presenceColour}`,
              animation: `meok-presence-pulse ${presenceDuration}s ease-out infinite`,
              pointerEvents: "none",
            }}
          />
        )}
        {/* Static presence ring for reduced motion */}
        {showPresence && !animated && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: -6,
              borderRadius: "50%",
              border: `1.5px solid ${presenceColour}55`,
              pointerEvents: "none",
            }}
          />
        )}

        {/* The face */}
        <CharacterCSSFace
          mood={state.mood}
          mode={state.mode}
          size={size}
          animated={animated}
          archetype={archetype}
        />
      </div>

      {/* ── Mode + mood status line ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontSize: 11,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.04em",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: presenceColour,
            flexShrink: 0,
            opacity: 0.8,
          }}
        />
        <span>{modeLabel}</span>
        <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
        <span style={{ color: "rgba(255,255,255,0.25)" }}>{moodLabel}</span>
      </div>

      {/* ── Greeting ── */}
      {showGreeting && (
        <div
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            maxWidth: 200,
            lineHeight: 1.45,
            fontStyle: "italic",
          }}
        >
          {greeting}
        </div>
      )}

      {/* ── Ambient thought bubble ── */}
      {showThoughts && visibleThought && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "absolute",
            bottom: "calc(100% + 10px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#13121f",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 10,
            padding: "8px 12px",
            fontSize: 11,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 220,
            textAlign: "center",
            lineHeight: 1.5,
            whiteSpace: "normal",
            pointerEvents: "none",
            animation: animated
              ? thoughtFading
                ? "meok-thought-out 0.5s ease forwards"
                : "meok-thought-in 0.4s ease forwards"
              : undefined,
            opacity: animated ? undefined : 1,
            // Tail triangle
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          {visibleThought}
          {/* Tail */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: -6,
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid rgba(255,255,255,0.07)",
            }}
          />
        </div>
      )}

      {/* ── Awareness bar — subtle indicator of presence level ── */}
      <div
        title={`Awareness: ${Math.round(state.awarenessLevel)}%`}
        style={{
          width: 80,
          height: 2,
          background: "rgba(255,255,255,0.05)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${state.awarenessLevel}%`,
            background: `linear-gradient(to right, ${presenceColour}55, ${presenceColour})`,
            borderRadius: 2,
            transition: "width 1s ease",
          }}
        />
      </div>
    </div>
  );
}
