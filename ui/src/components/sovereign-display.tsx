'use client';

import { useState, useCallback } from 'react';
import { formatCost } from '@/lib/cost-tracker';

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
  estimatedCost?: number;       // USD cost estimate for the message
  memoriesRetrieved?: number;   // number of memory sources retrieved
  stageName?: string;           // evolution stage name from server
  interactions?: number;        // total interaction count
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
  estimatedCost,
  memoriesRetrieved,
  stageName,
  interactions,
}: SovereignDisplayProps) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Nothing to show if there is no metadata at all
  if (!model && !taskType) return null;

  const costDisplay = estimatedCost !== undefined ? formatCost(estimatedCost) : undefined;
  const memRetrievedDisplay = memoriesRetrieved !== undefined ? `${memoriesRetrieved} retrieved` : undefined;
  const guardianDisplay = guardianPassed !== undefined
    ? (guardianPassed ? '\u{1F6E1}\uFE0F Passed' : '\u{1F6E1}\uFE0F Flagged')
    : undefined;

  const handleCopyMetadata = useCallback(() => {
    const metadata = {
      model, taskType, effortLevel, emotion, language,
      guardianPassed, latencyMs, processingLocation,
      memoryCount, estimatedCost, memoriesRetrieved,
    };
    navigator.clipboard.writeText(JSON.stringify(metadata, null, 2)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [model, taskType, effortLevel, emotion, language, guardianPassed, latencyMs, processingLocation, memoryCount, estimatedCost, memoriesRetrieved]);

  return (
    <div
      className="rounded-lg overflow-hidden mt-1.5 mb-2 text-xs"
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
      }}
    >
      {/* Collapsed header — always visible */}
      <button type="button"
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
          {costDisplay && (
            <>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <span>{costDisplay}</span>
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
          <div className="pt-2 pb-1 flex items-center justify-between">
            <span
              className="text-[9px] font-semibold tracking-[0.15em] uppercase"
              style={{ color: GOLD }}
            >
              Sovereign Transparency
            </span>
            <button type="button"
              onClick={handleCopyMetadata}
              className="text-[9px] font-mono px-2 py-0.5 rounded border transition-colors"
              style={{
                background: copied ? `${GOLD}20` : 'rgba(255,255,255,0.04)',
                borderColor: copied ? `${GOLD}40` : 'rgba(255,255,255,0.1)',
                color: copied ? GOLD : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
              }}
              aria-label="Copy metadata as JSON"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <MetaRow icon={'\u2699'} label="Model" value={model} />
          <MetaRow icon={'\u2692'} label="Task Type" value={taskType} />
          <MetaRow icon={'\u26A1'} label="Effort" value={effortLevel} />
          <MetaRow icon={'\u2764'} label="Emotion" value={emotion} />
          <MetaRow icon={'\u2709'} label="Language" value={language} />
          <MetaRow icon={'\u{1F6E1}'} label="Guardian" value={guardianDisplay} />
          <MetaRow icon={'\u{1F4B0}'} label="Cost" value={costDisplay} />
          <MetaRow icon={'\u{1F9E0}'} label="Memories" value={memRetrievedDisplay} />
          <MetaRow icon={'\u23F1'} label="Latency" value={latencyMs !== undefined ? `${latencyMs}ms` : undefined} />
          <MetaRow icon={'\u2601'} label="Location" value={processingLocation} />
          <MetaRow icon={'\u2630'} label="Memory Count" value={memoryCount} />
          <MetaRow icon={'\u{1F95A}'} label="Evolution" value={stageName} />
          <MetaRow icon={'\u{1F4AC}'} label="Interactions" value={interactions} />
        </div>
      )}
    </div>
  );
}

export default SovereignDisplay;
