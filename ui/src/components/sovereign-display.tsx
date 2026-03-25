'use client';

import { useState } from 'react';

// ── Brand tokens ─────────────────────────────────────────────────────────────
const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const BORDER = 'rgba(255,255,255,0.07)';
const GOLD = '#c9a84c';

// ── Types ────────────────────────────────────────────────────────────────────

export interface SovereignDisplayProps {
  model?: string;
  taskType?: string;
  effortLevel?: string;
  emotion?: string;
  language?: string;
  guardianPassed?: boolean;
  latencyMs?: number;
  processingLocation?: string;
  memoryCount?: number;
}

// ── Metadata row ─────────────────────────────────────────────────────────────

function MetaRow({ icon, label, value }: { icon: string; label: string; value: string | number | boolean | undefined }) {
  if (value === undefined || value === null) return null;
  const display = typeof value === 'boolean' ? (value ? 'Passed' : 'Failed') : String(value);
  return (
    <div
      className="flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-mono"
      style={{ background: 'rgba(255,255,255,0.02)' }}
    >
      <span style={{ color: 'rgba(255,255,255,0.4)' }}>
        {icon} {label}
      </span>
      <span style={{ color: 'rgba(255,255,255,0.7)' }}>{display}</span>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export function SovereignDisplay({
  model,
  taskType,
  effortLevel,
  emotion,
  language,
  guardianPassed,
  latencyMs,
  processingLocation,
  memoryCount,
}: SovereignDisplayProps) {
  const [expanded, setExpanded] = useState(false);

  // Nothing to show if there is no metadata at all
  if (!model && !taskType) return null;

  return (
    <div
      className="rounded-lg overflow-hidden mt-1.5 mb-2 text-xs"
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
      }}
    >
      {/* Collapsed header — always visible */}
      <button
        onClick={() => setExpanded(v => !v)}
        className="w-full flex items-center justify-between px-3 py-2 transition-colors"
        style={{ background: expanded ? 'rgba(255,255,255,0.02)' : 'transparent' }}
        aria-expanded={expanded}
        aria-label="Toggle sovereign display details"
      >
        <span className="flex items-center gap-2 font-mono" style={{ color: 'rgba(255,255,255,0.45)' }}>
          <span style={{ color: GOLD }}>{">"}</span>
          <span>{model ?? 'AI'}</span>
          {taskType && (
            <>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <span>{taskType}</span>
            </>
          )}
          {latencyMs !== undefined && (
            <>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <span>{latencyMs}ms</span>
            </>
          )}
        </span>
        <span
          className="transition-transform duration-200"
          style={{
            color: 'rgba(255,255,255,0.3)',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            display: 'inline-block',
          }}
        >
          {/* Chevron down (unicode) */}
          {'\u25BE'}
        </span>
      </button>

      {/* Expanded grid */}
      {expanded && (
        <div
          className="px-3 pb-3 space-y-1"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          <div className="pt-2 pb-1">
            <span
              className="text-[9px] font-semibold tracking-[0.15em] uppercase"
              style={{ color: GOLD }}
            >
              Sovereign Transparency
            </span>
          </div>
          <MetaRow icon={'\u2699'} label="Model" value={model} />
          <MetaRow icon={'\u2692'} label="Task Type" value={taskType} />
          <MetaRow icon={'\u26A1'} label="Effort" value={effortLevel} />
          <MetaRow icon={'\u2764'} label="Emotion" value={emotion} />
          <MetaRow icon={'\u2709'} label="Language" value={language} />
          <MetaRow
            icon={guardianPassed ? '\u2713' : '\u2717'}
            label="Guardian"
            value={guardianPassed}
          />
          <MetaRow icon={'\u23F1'} label="Latency" value={latencyMs !== undefined ? `${latencyMs}ms` : undefined} />
          <MetaRow icon={'\u2601'} label="Location" value={processingLocation} />
          <MetaRow icon={'\u2630'} label="Memories" value={memoryCount} />
        </div>
      )}
    </div>
  );
}

export default SovereignDisplay;
