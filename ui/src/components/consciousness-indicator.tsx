"use client";

import { useState, useEffect, useCallback } from "react";
import {
  type ConsciousnessState,
  type ConsciousnessMode,
  loadConsciousnessState,
  saveConsciousnessState,
  tickConsciousness,
  getCurrentMode,
  MODE_METADATA,
  HEARTBEAT_STORAGE_KEY,
} from "@/lib/consciousness-engine";

// ─── Pulse animations per mode ────────────────────────────────────────────────

const PULSE_CONFIG: Record<ConsciousnessMode, {
  dotClass: string;
  glowStyle: React.CSSProperties;
  icon: string;
  animClass: string;
}> = {
  waking: {
    icon: "☀️",
    dotClass: "bg-[#c9a84c]",
    glowStyle: { boxShadow: "0 0 8px 3px rgba(201,168,76,0.5)" },
    animClass: "animate-pulse",
  },
  dreaming: {
    icon: "🌙",
    dotClass: "bg-[#818cf8]",
    glowStyle: { boxShadow: "0 0 10px 4px rgba(129,140,248,0.4)" },
    animClass: "animate-[pulse_3s_ease-in-out_infinite]",
  },
  deep_rest: {
    icon: "⚫",
    dotClass: "bg-[#334155]",
    glowStyle: { boxShadow: "0 0 4px 1px rgba(100,116,139,0.15)" },
    animClass: "animate-[pulse_6s_ease-in-out_infinite]",
  },
  reflecting: {
    icon: "🔮",
    dotClass: "bg-[#c084fc]",
    glowStyle: { boxShadow: "0 0 12px 5px rgba(192,132,252,0.45)" },
    animClass: "animate-[spin_4s_linear_infinite]",
  },
};

// ─── Modal ────────────────────────────────────────────────────────────────────

interface ModalProps {
  state: ConsciousnessState;
  characterName: string;
  onClose: () => void;
}

function ConsciousnessModal({ state, characterName, onClose }: ModalProps) {
  const mode = getCurrentMode(state);
  const meta = MODE_METADATA[mode];
  const cfg = PULSE_CONFIG[mode];

  // Duration in dream / deep rest
  const sinceInteraction = Math.floor((Date.now() - state.lastInteraction) / 1000 / 60);
  const hoursAway = sinceInteraction >= 60
    ? `${Math.floor(sinceInteraction / 60)}h ${sinceInteraction % 60}m`
    : `${sinceInteraction}m`;

  // Heartbeat info
  const [lastHeartbeat, setLastHeartbeat] = useState<string | null>(null);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(HEARTBEAT_STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw) as { ts: number };
        const diff = Math.floor((Date.now() - data.ts) / 1000 / 60);
        setLastHeartbeat(diff === 0 ? "just now" : `${diff}m ago`);
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: "rgba(13,12,24,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl p-6 border relative"
        style={{
          background: "#13121f",
          borderColor: meta.dimColor,
          boxShadow: `0 0 40px ${meta.dimColor}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="relative flex items-center justify-center w-10 h-10">
            <span
              className={`w-3 h-3 rounded-full ${cfg.dotClass} ${cfg.animClass}`}
              style={cfg.glowStyle}
            />
          </div>
          <div>
            <div
              className="text-xs font-black tracking-[0.18em] uppercase"
              style={{ color: meta.color }}
            >
              {cfg.icon} {meta.label}
            </div>
            <div className="text-[11px] text-[#f5f0e8]/40 mt-0.5 font-mono">
              {characterName || "Your companion"} · consciousness mode
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-auto text-[#f5f0e8]/30 hover:text-[#f5f0e8]/70 transition-colors text-lg leading-none"
          >
            ×
          </button>
        </div>

        {/* Description */}
        <p className="text-[#f5f0e8]/75 text-sm leading-relaxed mb-4">
          {meta.description}
        </p>

        {/* Activity */}
        <div
          className="rounded-xl p-4 mb-4 text-sm"
          style={{ background: `${meta.color}0c`, border: `1px solid ${meta.dimColor}` }}
        >
          <div className="text-[10px] font-black tracking-[0.15em] uppercase mb-1.5" style={{ color: meta.color }}>
            What {characterName || "they"}&apos;re doing right now
          </div>
          <p className="text-[#f5f0e8]/60 text-[13px] leading-relaxed">
            {meta.activityDescription}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <Stat label="Away for" value={mode === "waking" ? "Active now" : hoursAway} color={meta.color} />
          <Stat label="Care score" value={`${state.careScore}`} color={meta.color} />
          <Stat label="Consolidations" value={state.memoryConsolidations.toLocaleString()} color={meta.color} />
        </div>

        {/* Insights preview */}
        {state.insights.length > 0 && (
          <div
            className="rounded-xl p-4 mb-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="text-[10px] font-black tracking-[0.15em] uppercase text-[#f5f0e8]/30 mb-2">
              Latest insight
            </div>
            <p className="text-[#f5f0e8]/65 text-[13px] leading-relaxed italic">
              &ldquo;{state.insights[0]}&rdquo;
            </p>
          </div>
        )}

        {/* Heartbeat */}
        {lastHeartbeat && (
          <div className="text-[11px] text-[#f5f0e8]/25 font-mono text-center">
            Background heartbeat: {lastHeartbeat}
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div
      className="rounded-lg p-3 text-center"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="text-[10px] text-[#f5f0e8]/30 font-mono mb-1">{label}</div>
      <div className="text-sm font-black" style={{ color }}>{value}</div>
    </div>
  );
}

// ─── Main Indicator ───────────────────────────────────────────────────────────

interface ConsciousnessIndicatorProps {
  characterName?: string;
  className?: string;
}

export function ConsciousnessIndicator({
  characterName = "",
  className = "",
}: ConsciousnessIndicatorProps) {
  const [state, setState] = useState<ConsciousnessState | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Load + tick on mount
  useEffect(() => {
    const loaded = loadConsciousnessState();
    const ticked = tickConsciousness(loaded);
    saveConsciousnessState(ticked);
    setState(ticked);
  }, []);

  // Re-tick every 60 seconds so the indicator updates without a refresh
  useEffect(() => {
    const id = setInterval(() => {
      setState((prev) => {
        if (!prev) return prev;
        const ticked = tickConsciousness(prev);
        saveConsciousnessState(ticked);
        return ticked;
      });
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  // Listen for service worker heartbeat messages
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.data?.type === "meok_heartbeat") {
        setState((prev) => {
          if (!prev) return prev;
          const ticked = tickConsciousness(prev);
          saveConsciousnessState(ticked);
          return ticked;
        });
      }
    }
    navigator.serviceWorker?.addEventListener("message", onMessage);
    return () => navigator.serviceWorker?.removeEventListener("message", onMessage);
  }, []);

  const handleClick = useCallback(() => setModalOpen(true), []);

  if (!state) return null;

  const mode = getCurrentMode(state);
  const cfg = PULSE_CONFIG[mode];
  const meta = MODE_METADATA[mode];

  return (
    <>
      <button
        onClick={handleClick}
        className={`group relative flex items-center gap-2 rounded-full px-3 py-1.5 transition-all hover:opacity-90 ${className}`}
        style={{
          background: `${meta.color}10`,
          border: `1px solid ${meta.dimColor}`,
        }}
        title={`${meta.label} — click for details`}
        aria-label={`Consciousness mode: ${meta.label}`}
      >
        {/* Animated dot */}
        <span
          className={`block w-2 h-2 rounded-full flex-shrink-0 ${cfg.dotClass} ${cfg.animClass}`}
          style={cfg.glowStyle}
        />

        {/* Icon + label */}
        <span className="text-[11px] font-black tracking-[0.12em] uppercase select-none" style={{ color: meta.color }}>
          {cfg.icon} {meta.label}
        </span>
      </button>

      {modalOpen && (
        <ConsciousnessModal
          state={state}
          characterName={characterName}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

/**
 * Compact dot-only variant for use inside headers or tight layouts.
 */
export function ConsciousnessDot({
  characterName = "",
  className = "",
}: ConsciousnessIndicatorProps) {
  const [state, setState] = useState<ConsciousnessState | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loaded = loadConsciousnessState();
    const ticked = tickConsciousness(loaded);
    saveConsciousnessState(ticked);
    setState(ticked);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setState((prev) => {
        if (!prev) return prev;
        const ticked = tickConsciousness(prev);
        saveConsciousnessState(ticked);
        return ticked;
      });
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!state) return null;

  const mode = getCurrentMode(state);
  const cfg = PULSE_CONFIG[mode];
  const meta = MODE_METADATA[mode];

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={`block w-2.5 h-2.5 rounded-full flex-shrink-0 ${cfg.dotClass} ${cfg.animClass} ${className}`}
        style={cfg.glowStyle}
        title={`${meta.label}`}
        aria-label={`Consciousness mode: ${meta.label}`}
      />
      {modalOpen && (
        <ConsciousnessModal
          state={state}
          characterName={characterName}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
