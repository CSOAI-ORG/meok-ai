"use client";

/**
 * MEOK AI LABS — Character CSS Face
 *
 * A pure CSS character face. No images. No SVGs. Just divs.
 *
 * Brand constants:
 *   DEEP    = #0d0c18
 *   SURFACE = #13121f
 *   BORDER  = rgba(255,255,255,0.07)
 *   GOLD    = #c9a84c
 */

import { useMemo } from "react";
import type { CharacterMood, CharacterMode } from "@/lib/character-alive";
import type { Archetype } from "@/lib/characters";

// ── Types ─────────────────────────────────────────────────────────────────────

export type FaceSize = "sm" | "md" | "lg" | "xl";

export interface EyeState {
  /** translateX in px — negative = left, positive = right */
  irisX: number;
  /** translateY in px — negative = up */
  irisY: number;
  /** 0 = fully closed, 1 = fully open */
  openness: number;
  /** wider iris ring for surprise */
  wide: boolean;
}

export interface CharacterCSSFaceProps {
  mood: CharacterMood;
  mode?: CharacterMode;
  size?: FaceSize;
  animated?: boolean;
  archetype?: Archetype;
  /** Override the derived eye state directly */
  eyeState?: Partial<EyeState>;
}

// ── Size map ──────────────────────────────────────────────────────────────────

const SIZE_PX: Record<FaceSize, number> = {
  sm: 48,
  md: 80,
  lg: 120,
  xl: 160,
};

// ── Archetype shape tweaks ────────────────────────────────────────────────────

/**
 * Per-archetype border-radius shaping.
 * Nurturers are rounder; Challengers have subtle corners; Sages are very circular.
 */
const ARCHETYPE_RADIUS: Partial<Record<Archetype, string>> = {
  nurturer: "55% 55% 50% 50%",
  challenger: "42% 42% 40% 40%",
  sage: "50%",
  explorer: "48% 48% 52% 52%",
  trickster: "45% 55% 50% 50%",
  rebel: "40% 40% 45% 45%",
  seeker: "50% 50% 55% 55%",
  creator: "52% 48% 50% 50%",
  innocent: "50% 50% 60% 60%",
};

// ── Mood → iris colour ────────────────────────────────────────────────────────

const MOOD_IRIS_COLOUR: Record<CharacterMood, string> = {
  curious:      "#7c9ef5",
  focused:      "#c9a84c",
  caring:       "#e899a8",
  playful:      "#a5e887",
  contemplative:"#9b8fd4",
  energised:    "#fbbf24",
};

// ── Mood → mouth shape ────────────────────────────────────────────────────────

interface MouthShape {
  /** scaleX applied to the mouth arc container */
  scaleX: number;
  /** scaleY — negative flips to a frown */
  scaleY: number;
  /** opacity of the mouth element */
  opacity: number;
}

const MOOD_MOUTH: Record<CharacterMood, MouthShape> = {
  curious:      { scaleX: 0.9, scaleY: 0.7, opacity: 0.8 },
  focused:      { scaleX: 0.7, scaleY: 0.3, opacity: 0.6 },
  caring:       { scaleX: 1.0, scaleY: 1.0, opacity: 0.9 },
  playful:      { scaleX: 1.1, scaleY: 1.2, opacity: 1.0 },
  contemplative:{ scaleX: 0.8, scaleY: 0.4, opacity: 0.5 },
  energised:    { scaleX: 1.15, scaleY: 1.3, opacity: 1.0 },
};

// ── Mode → eye state ──────────────────────────────────────────────────────────

function deriveEyeState(mode: CharacterMode, override?: Partial<EyeState>): EyeState {
  const base: EyeState = { irisX: 0, irisY: 0, openness: 1, wide: false };

  switch (mode) {
    case "thinking":   base.irisX = -3; break;           // looking left
    case "reflecting": base.irisX = 3;  break;           // looking right (memory)
    case "dreaming":   base.openness = 0; break;         // eyes closed
    case "listening":  base.irisX = 0; base.irisY = 0; break; // direct / center
    case "working":    base.irisX = -2; base.irisY = -1; break;
    case "waking":     base.openness = 0.4; break;
  }

  return { ...base, ...override };
}

// ── Face border colour per mode ───────────────────────────────────────────────

const MODE_BORDER_COLOUR: Record<CharacterMode, string> = {
  waking:    "rgba(201,168,76,0.5)",
  working:   "rgba(100,180,255,0.45)",
  thinking:  "rgba(100,200,255,0.35)",
  listening: "rgba(201,168,76,0.7)",
  dreaming:  "rgba(148,130,230,0.4)",
  reflecting:"rgba(148,130,230,0.5)",
};

// ── Breathing speed per mode ──────────────────────────────────────────────────

const MODE_BREATHE_DURATION: Record<CharacterMode, number> = {
  waking:    4,
  working:   2,
  thinking:  3,
  listening: 3.5,
  dreaming:  8,
  reflecting:6,
};

// ── Component ─────────────────────────────────────────────────────────────────

export function CharacterCSSFace({
  mood,
  mode = "listening",
  size = "md",
  animated = true,
  archetype,
  eyeState: eyeOverride,
}: CharacterCSSFaceProps) {
  const px = SIZE_PX[size];
  const scale = px / 80; // 80px is the design baseline

  const eyeState = useMemo(() => deriveEyeState(mode, eyeOverride), [mode, eyeOverride]);
  const irisColour = MOOD_IRIS_COLOUR[mood];
  const mouth = MOOD_MOUTH[mood];
  const breatheDuration = MODE_BREATHE_DURATION[mode];
  const borderColour = MODE_BORDER_COLOUR[mode];
  const faceRadius = (archetype && ARCHETYPE_RADIUS[archetype]) || "50%";

  // Scale-dependent pixel values
  const eyeSize      = Math.round(13 * scale);
  const irisSize     = Math.round(7 * scale);
  const pupilSize    = Math.round(3 * scale);
  const eyeSpacing   = Math.round(18 * scale); // distance from face centre
  const eyeY         = Math.round(-8 * scale); // offset from face centre (up)
  const mouthW       = Math.round(24 * scale);
  const mouthH       = Math.round(8 * scale);
  const eyeCloseH    = Math.round(2 * scale);

  // Iris movement capped by eye boundary
  const maxIrisTravel = Math.round(2.5 * scale);
  const irisX = Math.max(-maxIrisTravel, Math.min(maxIrisTravel, eyeState.irisX * scale));
  const irisY = Math.max(-maxIrisTravel, Math.min(maxIrisTravel, eyeState.irisY * scale));

  const animId = `meok-breathe-${mode}`;

  return (
    <div
      role="img"
      aria-label={`Character face — ${mood} mood`}
      style={{
        position: "relative",
        width: px,
        height: px,
        flexShrink: 0,
      }}
    >
      {/* Keyframes injected inline — scoped to duration */}
      {animated && (
        <style>{`
          @keyframes ${animId} {
            0%, 100% { transform: scale(1); }
            50%       { transform: scale(1.02); }
          }
          @keyframes meok-iris-blink {
            0%, 90%, 100% { transform: scaleY(1); }
            95%            { transform: scaleY(0.05); }
          }
          @keyframes meok-pupil-pulse {
            0%, 100% { opacity: 0.9; }
            50%       { opacity: 0.6; }
          }
        `}</style>
      )}

      {/* ── Face shell ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: faceRadius,
          background: "radial-gradient(circle at 35% 30%, #1c1b2e, #0d0c18)",
          border: `${Math.max(1, Math.round(1.5 * scale))}px solid ${borderColour}`,
          boxShadow: `0 0 ${Math.round(12 * scale)}px ${borderColour}`,
          animation: animated
            ? `${animId} ${breatheDuration}s ease-in-out infinite`
            : undefined,
          willChange: animated ? "transform" : undefined,
          overflow: "hidden",
        }}
      >
        {/* ── Brow ridge — very subtle highlight arc at top ── */}
        <div
          style={{
            position: "absolute",
            top: `${Math.round(10 * scale)}px`,
            left: "15%",
            right: "15%",
            height: `${Math.round(2 * scale)}px`,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />

        {/* ── Eyes container ── */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, calc(-50% + ${eyeY}px))`,
            display: "flex",
            gap: `${eyeSpacing}px`,
          }}
        >
          {(["left", "right"] as const).map((side) => (
            <div
              key={side}
              style={{
                position: "relative",
                width: eyeSize,
                height: eyeState.openness < 0.1 ? eyeCloseH : eyeSize,
                borderRadius: eyeState.wide ? "35%" : "50%",
                background: "rgba(255,255,255,0.06)",
                border: `${Math.max(1, Math.round(scale))}px solid rgba(255,255,255,0.12)`,
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}
            >
              {/* Iris */}
              {eyeState.openness >= 0.1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: eyeState.wide ? Math.round(irisSize * 1.2) : irisSize,
                    height: eyeState.wide ? Math.round(irisSize * 1.2) : irisSize,
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 35% 35%, ${irisColour}cc, ${irisColour}66)`,
                    boxShadow: `0 0 ${Math.round(4 * scale)}px ${irisColour}88`,
                    transform: `translate(calc(-50% + ${irisX}px), calc(-50% + ${irisY}px))`,
                    transition: "transform 0.4s ease",
                    animation: animated
                      ? `meok-iris-blink ${3 + Math.random() * 2}s ease-in-out infinite`
                      : undefined,
                  }}
                >
                  {/* Pupil */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: pupilSize,
                      height: pupilSize,
                      borderRadius: "50%",
                      background: "#080810",
                      transform: "translate(-50%, -50%)",
                      animation: animated
                        ? `meok-pupil-pulse ${breatheDuration}s ease-in-out infinite`
                        : undefined,
                    }}
                  />
                  {/* Highlight catch-light */}
                  <div
                    style={{
                      position: "absolute",
                      top: "15%",
                      left: "20%",
                      width: Math.round(2 * scale),
                      height: Math.round(2 * scale),
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.75)",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Mouth ── */}
        <div
          style={{
            position: "absolute",
            bottom: "22%",
            left: "50%",
            transform: `translateX(-50%)`,
            width: mouthW,
            height: mouthH,
            overflow: "hidden",
            opacity: mouth.opacity,
          }}
        >
          {/* Arc achieved by a div taller than its container, border-radius clipped */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: `${Math.round((1 - mouth.scaleX) * mouthW * 0.5)}px`,
              width: `${Math.round(mouth.scaleX * mouthW)}px`,
              height: `${Math.round(mouthH * 2)}px`,
              borderRadius: "50%",
              border: `${Math.max(1, Math.round(scale))}px solid rgba(255,255,255,0.25)`,
              transform: `scaleY(${mouth.scaleY})`,
              transformOrigin: "bottom center",
            }}
          />
        </div>

        {/* ── Inner glow — mood tint ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background: `radial-gradient(circle at 50% 60%, ${irisColour}0a, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
