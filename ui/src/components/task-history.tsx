'use client';

/**
 * TaskHistory — compact git-log-style list of the last N completed tasks.
 *
 * Each entry shows: character avatar dot, task description, time taken,
 * task type badge, and an expandable "View output" section.
 */

import { useState } from 'react';
import { ChevronDown, ChevronRight, Clock } from 'lucide-react';
import {
  TASK_TYPE_LABELS,
  TASK_TYPE_COLOURS,
  type TaskType,
} from '@/lib/task-planner';

// ── Types ────────────────────────────────────────────────────────────────────

export interface HistoryEntry {
  id: string;
  characterName: string;
  /** Single emoji or short glyph representing the character */
  characterAvatar: string;
  taskDescription: string;
  taskType: TaskType;
  /** Wall-clock seconds the task took */
  durationSeconds: number;
  output: string;
  completedAt: Date;
}

export interface TaskHistoryProps {
  entries: HistoryEntry[];
  /** Max entries to display (default 10) */
  limit?: number;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}

function formatTimeAgo(date: Date): string {
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60)   return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return date.toLocaleDateString();
}

// ── Row ──────────────────────────────────────────────────────────────────────

function HistoryRow({ entry }: { entry: HistoryEntry }) {
  const [expanded, setExpanded] = useState(false);
  const colour = TASK_TYPE_COLOURS[entry.taskType];

  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: 'rgba(255,255,255,0.05)' }}
    >
      {/* Main row */}
      <div
        className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/[0.02] transition-colors cursor-default group"
      >
        {/* Avatar dot */}
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          title={entry.characterName}
          aria-label={entry.characterName}
        >
          {entry.characterAvatar}
        </div>

        {/* Task description */}
        <span
          className="flex-1 text-xs truncate"
          style={{ color: 'rgba(255,255,255,0.75)' }}
          title={entry.taskDescription}
        >
          {entry.taskDescription}
        </span>

        {/* Duration */}
        <span
          className="flex items-center gap-1 text-xs flex-shrink-0"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          <Clock className="w-3 h-3" />
          {formatDuration(entry.durationSeconds)}
        </span>

        {/* Type badge */}
        <span
          className="text-xs px-1.5 py-0.5 rounded flex-shrink-0 font-mono"
          style={{
            color: colour,
            background: `${colour}18`,
            border: `1px solid ${colour}30`,
          }}
        >
          {TASK_TYPE_LABELS[entry.taskType]}
        </span>

        {/* Time ago */}
        <span
          className="text-xs flex-shrink-0 hidden sm:block"
          style={{ color: 'rgba(255,255,255,0.2)' }}
        >
          {formatTimeAgo(entry.completedAt)}
        </span>

        {/* Expand button */}
        <button type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 text-xs flex-shrink-0 transition-opacity opacity-40 group-hover:opacity-100"
          style={{ color: '#c9a84c' }}
          aria-expanded={expanded}
          aria-label={expanded ? 'Hide output' : 'View output'}
        >
          {expanded
            ? <ChevronDown className="w-3.5 h-3.5" />
            : <ChevronRight className="w-3.5 h-3.5" />
          }
          <span className="hidden sm:inline">{expanded ? 'Hide' : 'View'}</span>
        </button>
      </div>

      {/* Expanded output */}
      {expanded && (
        <div
          className="px-4 pb-3 pt-0"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <pre
            className="text-xs leading-relaxed whitespace-pre-wrap rounded-md p-3 overflow-x-auto"
            style={{
              color: 'rgba(255,255,255,0.6)',
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid rgba(255,255,255,0.06)',
              maxHeight: '200px',
              overflowY: 'auto',
            }}
          >
            {entry.output || '(no output recorded)'}
          </pre>
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export function TaskHistory({ entries, limit = 10 }: TaskHistoryProps) {
  const visible = entries.slice(0, limit);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: '#13121f',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <span
          className="text-xs uppercase tracking-widest font-mono"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          Task History
        </span>
        <span
          className="text-xs font-mono"
          style={{ color: 'rgba(255,255,255,0.2)' }}
        >
          {entries.length} completed
        </span>
      </div>

      {/* Rows */}
      {visible.length === 0 ? (
        <div
          className="px-4 py-8 text-xs text-center font-mono"
          style={{ color: 'rgba(255,255,255,0.2)' }}
        >
          No tasks completed yet in this session.
        </div>
      ) : (
        <div>
          {visible.map((entry) => (
            <HistoryRow key={entry.id} entry={entry} />
          ))}
        </div>
      )}

      {/* Overflow hint */}
      {entries.length > limit && (
        <div
          className="px-4 py-2 text-xs font-mono text-center"
          style={{
            color: 'rgba(255,255,255,0.2)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          +{entries.length - limit} more tasks this session
        </div>
      )}
    </div>
  );
}
