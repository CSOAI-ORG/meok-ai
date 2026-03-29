'use client';

/**
 * TaskExecution — shows a character working on a task in real time.
 *
 * Used in Fly Eye and Sovereign OS. Displays step-by-step progress on the
 * left, streaming output on the right, a progress bar at the bottom, and
 * controls to pause or redirect the character mid-task.
 */

import { useState, useRef, useEffect } from 'react';
import {
  Pause,
  Play,
  CornerDownRight,
  CheckCircle2,
  Circle,
  AlertCircle,
  Loader2,
  X,
} from 'lucide-react';
import type { StepStatus } from '@/lib/task-planner';

// ── Types ────────────────────────────────────────────────────────────────────

export interface TaskStep {
  label: string;
  status: StepStatus;
}

export interface TaskExecutionProps {
  taskDescription: string;
  steps: TaskStep[];
  output: string;            // streams in; component just renders whatever it receives
  progress: number;          // 0-100
  onPause: () => void;
  onRedirect: (newInstruction: string) => void;
  characterName: string;
  characterMood: string;
  estimatedSeconds?: number;
  isPaused?: boolean;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function StepIcon({ status }: { status: StepStatus }) {
  switch (status) {
    case 'done':
      return <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#10B981' }} />;
    case 'active':
      return <Loader2 className="w-3.5 h-3.5 flex-shrink-0 animate-spin" style={{ color: '#c9a84c' }} />;
    case 'failed':
      return <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#EF4444' }} />;
    default:
      return <Circle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.2)' }} />;
  }
}

function stepTextColour(status: StepStatus): string {
  switch (status) {
    case 'done':   return 'rgba(255,255,255,0.5)';
    case 'active': return '#c9a84c';
    case 'failed': return '#EF4444';
    default:       return 'rgba(255,255,255,0.25)';
  }
}

function formatSecondsRemaining(seconds: number): string {
  if (seconds < 60) return `~${Math.ceil(seconds)}s remaining`;
  const m = Math.floor(seconds / 60);
  const s = Math.ceil(seconds % 60);
  return `~${m}m ${s > 0 ? `${s}s` : ''} remaining`.trim();
}

// ── Redirect Input ────────────────────────────────────────────────────────────

function RedirectInput({
  onSubmit,
  onClose,
}: {
  onSubmit: (instruction: string) => void;
  onClose: () => void;
}) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && value.trim()) {
      onSubmit(value.trim());
      setValue('');
    }
    if (e.key === 'Escape') onClose();
  }

  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-md"
      style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)' }}
    >
      <CornerDownRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#c9a84c' }} />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
        placeholder="Redirect the task... (Enter to confirm, Esc to cancel)"
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/30"
        style={{ color: 'rgba(255,255,255,0.85)' }}
      />
      <button
        onClick={onClose}
        className="flex-shrink-0 hover:opacity-70 transition-opacity"
        aria-label="Cancel redirect"
      >
        <X className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.4)' }} />
      </button>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export function TaskExecution({
  taskDescription,
  steps,
  output,
  progress,
  onPause,
  onRedirect,
  characterName,
  characterMood,
  estimatedSeconds = 60,
  isPaused = false,
}: TaskExecutionProps) {
  const [showRedirect, setShowRedirect] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  // Auto-scroll output as it streams in
  useEffect(() => {
    const el = outputRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [output]);

  const secondsRemaining = Math.max(
    0,
    Math.round(estimatedSeconds * (1 - progress / 100))
  );

  const clampedProgress = Math.min(100, Math.max(0, progress));

  function handleRedirect(instruction: string) {
    setShowRedirect(false);
    onRedirect(instruction);
  }

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col text-sm font-mono"
      style={{
        background: '#13121f',
        border: '1px solid rgba(255,255,255,0.07)',
        minWidth: 0,
      }}
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-4 py-3 gap-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="flex items-center gap-2 min-w-0">
          {/* Mood glyph */}
          <span className="text-base flex-shrink-0" aria-hidden>
            {characterMood === 'curious'  ? '🔮' :
             characterMood === 'focused'  ? '⚡' :
             characterMood === 'playful'  ? '✨' :
             characterMood === 'serious'  ? '🧭' :
             characterMood === 'creative' ? '🎨' : '🔮'}
          </span>
          <span className="truncate" style={{ color: 'rgba(255,255,255,0.9)' }}>
            <span style={{ color: '#c9a84c' }}>{characterName}</span>
            {' '}is working on:{' '}
            <span className="font-semibold">{taskDescription}</span>
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Redirect trigger */}
          <button
            onClick={() => setShowRedirect((v) => !v)}
            className="text-xs px-2 py-1 rounded transition-all hover:opacity-80"
            style={{
              color: '#c9a84c',
              border: '1px solid rgba(201,168,76,0.3)',
              background: 'rgba(201,168,76,0.07)',
            }}
            title="Redirect the task"
          >
            Redirect
          </button>

          {/* Pause / Resume */}
          <button
            onClick={onPause}
            className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded transition-all hover:opacity-80"
            style={{
              color: isPaused ? '#10B981' : 'rgba(255,255,255,0.7)',
              border: `1px solid ${isPaused ? 'rgba(16,185,129,0.35)' : 'rgba(255,255,255,0.12)'}`,
              background: isPaused ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.04)',
            }}
          >
            {isPaused
              ? <><Play  className="w-3 h-3" />Resume</>
              : <><Pause className="w-3 h-3" />Pause</>
            }
          </button>
        </div>
      </div>

      {/* ── Redirect input (conditional) ───────────────────────────────── */}
      {showRedirect && (
        <div className="px-4 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <RedirectInput
            onSubmit={handleRedirect}
            onClose={() => setShowRedirect(false)}
          />
        </div>
      )}

      {/* ── Body: steps + output ───────────────────────────────────────── */}
      <div className="flex min-h-0" style={{ minHeight: '180px' }}>

        {/* Steps column */}
        <div
          className="flex flex-col gap-2 px-4 py-3 w-56 flex-shrink-0"
          style={{ borderRight: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div
            className="text-xs uppercase tracking-widest mb-1"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Steps
          </div>
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="mt-0.5">
                <StepIcon status={step.status} />
              </div>
              <span
                className="leading-snug text-xs"
                style={{ color: stepTextColour(step.status) }}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Output column */}
        <div
          ref={outputRef}
          className="flex-1 px-4 py-3 overflow-y-auto"
          style={{ maxHeight: '260px' }}
        >
          <div
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Output
          </div>
          {output ? (
            <div
              className="text-xs leading-relaxed whitespace-pre-wrap"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              {output}
              {/* Blinking cursor while work is in progress */}
              {!isPaused && progress < 100 && (
                <span
                  className="inline-block w-1.5 h-3 ml-0.5 align-middle animate-pulse"
                  style={{ background: '#c9a84c', borderRadius: '1px' }}
                />
              )}
            </div>
          ) : (
            <div
              className="text-xs italic"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              {isPaused ? 'Paused — waiting to resume' : 'Streaming output will appear here…'}
            </div>
          )}
        </div>
      </div>

      {/* ── Progress bar footer ────────────────────────────────────────── */}
      <div
        className="px-4 py-3 flex flex-col gap-1.5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Bar */}
        <div
          className="w-full rounded-full overflow-hidden"
          style={{ height: '6px', background: 'rgba(255,255,255,0.06)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${clampedProgress}%`,
              background: 'linear-gradient(90deg, #b8963e 0%, #c9a84c 100%)',
              boxShadow: '0 0 8px rgba(201,168,76,0.4)',
            }}
          />
        </div>

        {/* Label row */}
        <div className="flex items-center justify-between text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
          <span>
            {clampedProgress >= 100
              ? '✓ Complete'
              : isPaused
              ? 'Paused'
              : `${Math.round(clampedProgress)}% complete`}
          </span>
          {clampedProgress < 100 && !isPaused && (
            <span>{formatSecondsRemaining(secondsRemaining)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
