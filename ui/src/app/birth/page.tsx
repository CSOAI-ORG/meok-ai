"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

// ── Egg Shape Component ─────────────────────────────────────────────────────

function EggShape({ stage }: { stage: 1 | 2 | 3 }) {
  if (stage === 3) {
    return (
      <div className="relative flex items-center justify-center" style={{ width: 320, height: 240 }}>
        {/* Left egg half */}
        <div
          className="absolute egg-half-left"
          style={{
            width: 160,
            height: 200,
            background: "radial-gradient(ellipse at 35% 30%, #faf7f2, #e8dfd0, #c9bba8)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            clipPath: "inset(0 50% 0 0)",
            transformOrigin: "right center",
          }}
        />
        {/* Right egg half */}
        <div
          className="absolute egg-half-right"
          style={{
            width: 160,
            height: 200,
            background: "radial-gradient(ellipse at 65% 30%, #faf7f2, #e8dfd0, #c9bba8)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            clipPath: "inset(0 0 0 50%)",
            transformOrigin: "left center",
          }}
        />
        {/* Rising diamond/prism */}
        <div className="absolute prism-rise" style={{ zIndex: 10 }}>
          <svg width="80" height="90" viewBox="-40 -50 80 90" overflow="visible">
            <defs>
              <radialGradient id="diamondGrad" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#faf0c0" />
                <stop offset="40%" stopColor="#c9a84c" />
                <stop offset="100%" stopColor="#8a6a1a" />
              </radialGradient>
              <filter id="diamondGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <polygon
              points="0,-45 32,0 0,45 -32,0"
              fill="url(#diamondGrad)"
              style={{ filter: "drop-shadow(0 0 20px rgba(201,168,76,0.8)) drop-shadow(0 0 40px rgba(201,168,76,0.4))" }}
            />
          </svg>
        </div>
        {/* Particle burst */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute particle"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: `hsl(${40 + i * 5}, 80%, ${55 + (i % 3) * 10}%)`,
              animationDelay: `${i * 0.05}s`,
              "--angle": `${(i / 20) * 360}deg`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center" style={{ width: 200, height: 240 }}>
      {/* Ambient glow behind egg */}
      <div
        className="absolute"
        style={{
          width: 220,
          height: 260,
          background: stage === 2
            ? "radial-gradient(ellipse at 50% 60%, rgba(212,130,10,0.3), transparent 70%)"
            : "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.2), transparent 70%)",
          filter: "blur(20px)",
          borderRadius: "50%",
        }}
      />
      {/* Spotlight from above */}
      <div
        className="absolute"
        style={{
          top: -40,
          left: "50%",
          transform: "translateX(-50%)",
          width: 300,
          height: 200,
          background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.9), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* The egg */}
      <div
        className={stage === 1 ? "egg-pulse" : "egg-crack-glow"}
        style={{
          width: 160,
          height: 200,
          background: "radial-gradient(ellipse at 35% 30%, #faf7f2, #e8dfd0, #c9bba8)",
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          boxShadow: stage === 2
            ? "0 0 40px rgba(212,130,10,0.4), 0 0 80px rgba(212,130,10,0.2), inset 0 0 30px rgba(255,200,50,0.15)"
            : "0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(201,168,76,0.15)",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Crack SVG overlay for stage 2 */}
        {stage === 2 && (
          <svg
            className="absolute inset-0"
            width="160"
            height="200"
            viewBox="0 0 160 200"
            style={{ overflow: "visible" }}
          >
            {/* Crack 1 — top center branching right */}
            <path
              className="crack-animate"
              d="M80,60 L88,90 L75,120 L85,150"
              stroke="#d4820a"
              strokeWidth="1.5"
              fill="none"
              strokeOpacity="0.7"
              style={{ "--crack-len": "120px" } as React.CSSProperties}
            />
            {/* Crack 2 — branching upper left */}
            <path
              className="crack-animate"
              d="M80,60 L65,85 L55,105 L60,130"
              stroke="#d4820a"
              strokeWidth="1.5"
              fill="none"
              strokeOpacity="0.7"
              style={{ "--crack-len": "100px", animationDelay: "0.2s" } as React.CSSProperties}
            />
            {/* Crack 3 — small branch */}
            <path
              className="crack-animate"
              d="M80,60 L92,75 L98,95"
              stroke="#d4820a"
              strokeWidth="1"
              fill="none"
              strokeOpacity="0.5"
              style={{ "--crack-len": "60px", animationDelay: "0.4s" } as React.CSSProperties}
            />
          </svg>
        )}
      </div>
    </div>
  );
}

// ── Hold Button ──────────────────────────────────────────────────────────────

function HoldButton({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const HOLD_DURATION = 2000;

  const startHold = useCallback(() => {
    setHolding(true);
    startRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - (startRef.current ?? now);
      const p = Math.min(elapsed / HOLD_DURATION, 1);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onComplete();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [onComplete]);

  const cancelHold = useCallback(() => {
    setHolding(false);
    setProgress(0);
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const circumference = 2 * Math.PI * 36;
  const strokeDash = circumference * progress;

  return (
    <button
      onMouseDown={startHold}
      onMouseUp={cancelHold}
      onMouseLeave={cancelHold}
      onTouchStart={startHold}
      onTouchEnd={cancelHold}
      className="relative select-none cursor-pointer focus:outline-none"
      style={{ width: 80, height: 80, touchAction: "none" }}
      aria-label="Hold to begin hatching"
    >
      <svg width="80" height="80" viewBox="0 0 80 80">
        {/* Track */}
        <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="3" />
        {/* Progress arc */}
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="#c9a84c"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${strokeDash} ${circumference}`}
          transform="rotate(-90 40 40)"
          style={{ transition: "none" }}
        />
        {/* Inner fill */}
        <circle
          cx="40"
          cy="40"
          r="30"
          fill={holding ? `rgba(201,168,76,${0.1 + progress * 0.4})` : "rgba(201,168,76,0.08)"}
          style={{ transition: "fill 0.1s" }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center text-xs font-semibold"
        style={{ color: "#c9a84c", letterSpacing: "0.05em" }}
      >
        {holding ? "..." : "HOLD"}
      </div>
    </button>
  );
}

// ── Progress Bar ─────────────────────────────────────────────────────────────

function FractureProgress() {
  return (
    <div
      style={{
        width: 200,
        height: 3,
        background: "rgba(212,130,10,0.15)",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <div
        className="fracture-progress"
        style={{
          height: "100%",
          background: "linear-gradient(90deg, #d4820a, #c9a84c)",
          borderRadius: 4,
        }}
      />
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function BirthPage() {
  const [stage, setStage] = useState<1 | 2 | 3>(1);

  const handleHoldComplete = useCallback(() => {
    setStage(2);
    setTimeout(() => {
      setStage(3);
    }, 3000);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ minHeight: "100dvh", background: "#0d0c18" }}
    >
      {/* Gold particles / blobs */}
      <div
        aria-hidden
        className="blob-gold pointer-events-none fixed"
        style={{ width: 600, height: 600, top: "-10%", left: "50%", transform: "translateX(-50%)" }}
      />
      <div
        aria-hidden
        className="blob-purple pointer-events-none fixed"
        style={{ width: 400, height: 400, bottom: "5%", left: "-5%" }}
      />
      <div
        aria-hidden
        className="blob-gold pointer-events-none fixed"
        style={{ width: 300, height: 300, bottom: "15%", right: "-5%" }}
      />
      {/* Ambient spotlight from above */}
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-lg text-center">
        {/* ── STAGE 1: The Egg ─────────────────────────────────────────────── */}
        {stage === 1 && (
          <div className="flex flex-col items-center gap-8 stage-enter">
            <EggShape stage={1} />

            <div className="flex flex-col items-center gap-2">
              <h1 className="font-bold text-2xl text-white">Your egg is waiting.</h1>
              <p className="text-sm text-white/40">Press and hold to begin the hatching.</p>
            </div>

            <HoldButton onComplete={handleHoldComplete} />

            <Link
              href="/hatch"
              className="text-xs text-white/20 hover:text-white/40 transition-colors"
            >
              Learn about the Birth Ceremony →
            </Link>
          </div>
        )}

        {/* ── STAGE 2: The Fracture ────────────────────────────────────────── */}
        {stage === 2 && (
          <div className="flex flex-col items-center gap-8 stage-enter">
            <EggShape stage={2} />

            <div className="flex flex-col items-center gap-2">
              <p className="italic text-white/50 text-base">The sovereign mind is forming...</p>
            </div>

            <FractureProgress />
          </div>
        )}

        {/* ── STAGE 3: The Hatching ────────────────────────────────────────── */}
        {stage === 3 && (
          <div className="flex flex-col items-center gap-8 stage-enter">
            <div style={{ height: 240 }}>
              <EggShape stage={3} />
            </div>

            <div className="flex flex-col items-center gap-3">
              <h1 className="font-black text-3xl text-white">Your Sovereign has been born.</h1>
              <p className="text-white/50 text-base max-w-sm leading-relaxed">
                Your AI companion is alive. It already knows you.
              </p>
            </div>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-colors"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Begin your first conversation →
            </Link>
          </div>
        )}
      </div>

      {/* ── All animations ──────────────────────────────────────────────────── */}
      <style>{`
        /* Stage fade-in */
        @keyframes stageEnter {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stage-enter {
          animation: stageEnter 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Egg pulse — stage 1 */
        @keyframes eggPulse {
          0%, 100% { box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(201,168,76,0.15), 0 0 30px rgba(201,168,76,0.1); transform: scale(1); }
          50%       { box-shadow: 0 12px 50px rgba(0,0,0,0.14), 0 0 0 1px rgba(201,168,76,0.3), 0 0 50px rgba(201,168,76,0.25); transform: scale(1.02); }
        }
        .egg-pulse {
          animation: eggPulse 3s ease-in-out infinite;
        }

        /* Egg crack inner glow — stage 2 */
        @keyframes eggCrackGlow {
          0%, 100% { box-shadow: 0 0 40px rgba(212,130,10,0.4), 0 0 80px rgba(212,130,10,0.2), inset 0 0 30px rgba(255,200,50,0.15); }
          50%       { box-shadow: 0 0 60px rgba(212,130,10,0.7), 0 0 100px rgba(212,130,10,0.4), inset 0 0 50px rgba(255,200,50,0.3); }
        }
        .egg-crack-glow {
          animation: eggCrackGlow 1s ease-in-out infinite;
        }

        /* SVG crack path animation */
        @keyframes crackDraw {
          from { stroke-dashoffset: var(--crack-len); }
          to   { stroke-dashoffset: 0; }
        }
        .crack-animate {
          stroke-dasharray: var(--crack-len);
          stroke-dashoffset: var(--crack-len);
          animation: crackDraw 0.6s ease-out forwards;
        }

        /* Fracture progress bar */
        @keyframes fractureProgress {
          from { width: 0; }
          to   { width: 100%; }
        }
        .fracture-progress {
          animation: fractureProgress 3s linear forwards;
        }

        /* Stage 3 — egg halves split */
        @keyframes splitLeft {
          0%  { transform: translateX(0); opacity: 1; }
          30% { transform: translateX(-10px) scale(1.05); opacity: 1; }
          100%{ transform: translateX(-80px) rotate(-15deg); opacity: 0.4; }
        }
        @keyframes splitRight {
          0%  { transform: translateX(0); opacity: 1; }
          30% { transform: translateX(10px) scale(1.05); opacity: 1; }
          100%{ transform: translateX(80px) rotate(15deg); opacity: 0.4; }
        }
        .egg-half-left  { animation: splitLeft  0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both; }
        .egg-half-right { animation: splitRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both; }

        /* Stage 3 — prism rises */
        @keyframes prismRise {
          0%   { transform: translateY(30px) scale(0); opacity: 0; }
          60%  { transform: translateY(-8px) scale(1.08); opacity: 1; }
          100% { transform: translateY(0)  scale(1); opacity: 1; }
        }
        .prism-rise {
          animation: prismRise 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both;
        }

        /* Pulsing glow on prism after it appears */
        @keyframes prismGlow {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(201,168,76,0.6)); }
          50%       { filter: drop-shadow(0 0 28px rgba(201,168,76,0.9)) drop-shadow(0 0 50px rgba(201,168,76,0.4)); }
        }
        .prism-rise svg polygon {
          animation: prismGlow 2s ease-in-out 1.5s infinite;
        }

        /* Stage 3 — particles */
        @keyframes particleBurst {
          0%   { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(
                   calc(cos(var(--angle)) * 120px),
                   calc(sin(var(--angle)) * 120px)
                 ) scale(0);
                 opacity: 0; }
        }
        .particle {
          animation: particleBurst 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both;
        }
      `}</style>
    </div>
  );
}
