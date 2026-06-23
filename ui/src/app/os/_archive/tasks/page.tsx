'use client';

/**
 * /os/tasks — Ralph Task Management page.
 *
 * Fetches real Ralph tasks from /api/ralph/tasks and allows creating new tasks.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Plus,
  Trash2,
  ArrowUp,
  Layers,
  ListChecks,
  History,
  Terminal,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Clock,
  PauseCircle,
  User,
  Calendar,
  Flag,
} from 'lucide-react';
import { Surface, GlowText, IconOrb, StatCard } from '@/components/design-system';

// ── Brand tokens ──────────────────────────────────────────────────────────────

const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const BORDER = 'rgba(255,255,255,0.07)';
const GOLD = '#c9a84c';

// ── Types ─────────────────────────────────────────────────────────────────────

interface RalphTask {
  id: string;
  title: string;
  description?: string;
  agent: string;
  status: string;
  priority: number;
  care_score?: number;
  output_data?: Record<string, unknown>;
  error_message?: string;
  requires_approval?: boolean;
  approved_at?: string;
  started_at?: string;
  completed_at?: string;
  created_at: string;
  project_id?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function statusColor(status: string): "gold" | "green" | "red" | "blue" | "orange" | "purple" {
  switch (status) {
    case 'complete':
      return 'green';
    case 'running':
      return 'gold';
    case 'queued':
      return 'blue';
    case 'blocked':
      return 'red';
    default:
      return 'purple';
  }
}

function statusLabel(status: string): string {
  switch (status) {
    case 'complete':
      return 'Completed';
    case 'running':
      return 'In Progress';
    case 'queued':
      return 'Pending';
    case 'blocked':
      return 'Blocked';
    default:
      return status;
  }
}

function formatDate(iso?: string): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TasksPage() {
  const [tasks, setTasks] = useState<RalphTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [creating, setCreating] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // ── Fetch tasks ─────────────────────────────────────────────────────────────

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('/api/ralph/tasks');
      if (!res.ok) throw new Error('Failed to fetch tasks');
      const data = (await res.json()) as { tasks: RalphTask[] };
      setTasks(data.tasks || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // ── Keyboard shortcut: Cmd+T ────────────────────────────────────────────────

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 't') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ── Create task ─────────────────────────────────────────────────────────────

  async function handleSubmit() {
    const trimmed = inputTitle.trim();
    if (!trimmed) return;

    setCreating(true);
    try {
      const res = await fetch('/api/ralph/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: trimmed,
          description: inputDesc.trim() || undefined,
          agent: 'sovereign',
          priority: 3,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to create task');
      }
      setInputTitle('');
      setInputDesc('');
      await fetchTasks();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create task');
    } finally {
      setCreating(false);
    }
  }

  // ── Derived state ───────────────────────────────────────────────────────────

  const pendingTasks = tasks.filter((t) => t.status !== 'complete');
  const completedTasks = tasks.filter((t) => t.status === 'complete');

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div
      className="min-h-screen font-mono"
      style={{ background: DEEP, color: 'rgba(255,255,255,0.85)' }}
    >
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6">
        {/* ── Page header ──────────────────────────────────────────────── */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IconOrb icon={Terminal} variant="gold" size="lg" />
            <h1 className="text-xl font-bold tracking-tight">
              <GlowText variant="gold" as="span">Ralph Task Queue</GlowText>
            </h1>
          </div>
          <span
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            ⌘T to focus input
          </span>
        </div>

        {/* ── Stats row ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            label="Total Tasks"
            value={loading ? <Loader2 className="w-5 h-5 animate-spin" /> : tasks.length}
            icon={<Layers className="w-4 h-4" />}
          />
          <StatCard
            label="Pending"
            value={loading ? <Loader2 className="w-5 h-5 animate-spin" /> : pendingTasks.length}
            icon={<Clock className="w-4 h-4" />}
          />
          <StatCard
            label="In Progress"
            value={loading ? <Loader2 className="w-5 h-5 animate-spin" /> : tasks.filter((t) => t.status === 'running').length}
            icon={<Flag className="w-4 h-4" />}
          />
          <StatCard
            label="Completed"
            value={loading ? <Loader2 className="w-5 h-5 animate-spin" /> : completedTasks.length}
            icon={<CheckCircle2 className="w-4 h-4" />}
          />
        </div>

        {/* ── Error banner ─────────────────────────────────────────────── */}
        {error && (
          <Surface variant="elevated" glow="orange" className="px-4 py-3 flex items-center gap-3">
            <AlertCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
            <p className="text-sm text-white/70">{error}</p>
            <button type="button"
              onClick={() => setError(null)}
              className="ml-auto text-xs text-white/40 hover:text-white/70"
            >
              Dismiss
            </button>
          </Surface>
        )}

        {/* ── Pending / Active tasks ───────────────────────────────────── */}
        <section>
          <SectionLabel
            icon={<ListChecks className="w-3.5 h-3.5" />}
            label={`Active Tasks (${pendingTasks.length})`}
          />

          {loading ? (
            <Surface variant="elevated" className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            </Surface>
          ) : pendingTasks.length === 0 ? (
            <Surface variant="elevated" glow="gold" className="flex flex-col items-center justify-center py-10 text-center gap-3">
              <IconOrb icon={PauseCircle} variant="gold" size="md" />
              <p className="text-sm text-white/50">No active tasks.</p>
              <p className="text-xs text-white/30">Create a new task below to get started.</p>
            </Surface>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pendingTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          )}
        </section>

        {/* ── Completed tasks ──────────────────────────────────────────── */}
        {!loading && completedTasks.length > 0 && (
          <section>
            <SectionLabel
              icon={<CheckCircle2 className="w-3.5 h-3.5" />}
              label={`Completed (${completedTasks.length})`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {completedTasks.slice(0, 6).map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
            {completedTasks.length > 6 && (
              <p className="text-xs text-white/20 mt-3 text-center">
                +{completedTasks.length - 6} more completed tasks
              </p>
            )}
          </section>
        )}

        {/* ── Create task input ────────────────────────────────────────── */}
        <div className="sticky bottom-4">
          <Surface
            variant="elevated"
            glow={inputFocus ? 'gold' : 'none'}
            className="overflow-hidden transition-all"
          >
            <div className="flex flex-col gap-3 px-4 py-4">
              <div className="flex items-center gap-3">
                <IconOrb icon={Plus} variant="gold" size="sm" />
                <input
                  ref={inputRef}
                  value={inputTitle}
                  onChange={(e) => setInputTitle(e.target.value)}
                  onFocus={() => setInputFocus(true)}
                  onBlur={() => setInputFocus(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit();
                    }
                  }}
                  placeholder="What should Ralph work on? (Enter to submit)"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/25"
                  style={{ color: 'rgba(255,255,255,0.9)' }}
                  disabled={creating}
                />
                <button type="button"
                  onClick={handleSubmit}
                  disabled={!inputTitle.trim() || creating}
                  className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-30"
                  style={{
                    background: inputTitle.trim() && !creating ? GOLD : 'rgba(255,255,255,0.08)',
                    color: inputTitle.trim() && !creating ? '#0d0c18' : 'rgba(255,255,255,0.4)',
                  }}
                  aria-label="Create task"
                >
                  {creating ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowUp className="w-4 h-4" />
                  )}
                </button>
              </div>
              <input
                value={inputDesc}
                onChange={(e) => setInputDesc(e.target.value)}
                placeholder="Optional description…"
                className="w-full bg-transparent text-xs outline-none placeholder:text-white/20"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                disabled={creating}
              />
            </div>
          </Surface>
        </div>
      </div>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className="flex items-center gap-1.5 mb-3 text-xs uppercase tracking-widest"
      style={{ color: 'rgba(255,255,255,0.3)' }}
    >
      {icon}
      {label}
    </div>
  );
}

function TaskCard({ task }: { task: RalphTask }) {
  const colour = statusColor(task.status);

  return (
    <Surface variant="elevated" className="p-4 flex flex-col gap-3 transition-all hover:border-white/10">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white truncate" title={task.title}>
            {task.title}
          </p>
          {task.description && (
            <p className="text-xs text-white/40 truncate" title={task.description}>
              {task.description}
            </p>
          )}
        </div>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 font-medium"
          style={{
            color: colour === 'gold' ? '#c9a84c' : colour === 'green' ? '#4ade80' : colour === 'red' ? '#f87171' : colour === 'blue' ? '#60a5fa' : '#a78bfa',
            background: colour === 'gold' ? 'rgba(201,168,76,0.12)' : colour === 'green' ? 'rgba(74,222,128,0.12)' : colour === 'red' ? 'rgba(248,113,113,0.12)' : colour === 'blue' ? 'rgba(96,165,250,0.12)' : 'rgba(167,139,250,0.12)',
            border: `1px solid ${colour === 'gold' ? 'rgba(201,168,76,0.25)' : colour === 'green' ? 'rgba(74,222,128,0.25)' : colour === 'red' ? 'rgba(248,113,113,0.25)' : colour === 'blue' ? 'rgba(96,165,250,0.25)' : 'rgba(167,139,250,0.25)'}`,
          }}
        >
          {statusLabel(task.status)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px] text-white/30">
        <div className="flex items-center gap-1.5">
          <User className="w-3 h-3" />
          <span className="capitalize truncate">{task.agent}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Flag className="w-3 h-3" />
          <span>Priority {task.priority}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3 h-3" />
          <span>{formatDate(task.created_at)}</span>
        </div>
        {task.care_score != null && (
          <div className="flex items-center gap-1.5">
            <HeartIcon className="w-3 h-3" />
            <span>Care {Math.round(task.care_score)}/100</span>
          </div>
        )}
      </div>
    </Surface>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
