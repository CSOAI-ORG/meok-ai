'use client';

/**
 * /os/tasks — MEOK Agentic Task Management page.
 *
 * Shows the current task being executed, a queued task list, the session
 * task history, and a "Give character a task" input.
 * Keyboard shortcut: Cmd+T (Mac) / Ctrl+T (Win) focuses the task input.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Plus, Trash2, ArrowUp, Layers, ListChecks, History, Terminal } from 'lucide-react';
import { TaskExecution }     from '@/components/task-execution';
import { TaskHistory }       from '@/components/task-history';
import { Surface, GlowText, IconOrb } from '@/components/design-system';
import {
  classifyTask,
  getStepsForTask,
  estimateTime,
  TASK_TYPE_LABELS,
  TASK_TYPE_COLOURS,
  type TaskType,
  type Step,
} from '@/lib/task-planner';
import type { HistoryEntry } from '@/components/task-history';

// ── Constants ────────────────────────────────────────────────────────────────

const DEEP    = '#0d0c18';
const SURFACE = '#13121f';
const BORDER  = 'rgba(255,255,255,0.07)';
const GOLD    = '#c9a84c';

// Demo character — in production this comes from user's active character context
const CHARACTER = {
  name: 'Sage',
  avatar: '🔮',
  mood: 'curious',
} as const;

// ── Internal task state ───────────────────────────────────────────────────────

interface QueuedTask {
  id: string;
  description: string;
  type: TaskType;
  addedAt: Date;
}

interface ActiveTask {
  id: string;
  description: string;
  type: TaskType;
  steps: Step[];
  output: string;
  progress: number;
  isPaused: boolean;
  startedAt: Date;
  estimatedSeconds: number;
}

// ── Simulation helpers ────────────────────────────────────────────────────────
// In production these are replaced by real SSE / websocket events from the API.

function simulateProgress(
  task: ActiveTask,
  setTask: React.Dispatch<React.SetStateAction<ActiveTask | null>>
) {
  const totalMs = task.estimatedSeconds * 1000;
  const steps   = task.steps.length;
  let   tick    = 0;
  const intervalMs = 300;
  const totalTicks = totalMs / intervalMs;

  const id = setInterval(() => {
    tick++;
    const rawProgress = Math.min(100, (tick / totalTicks) * 100);

    // Activate / complete steps based on progress bands
    const stepIndex = Math.min(steps - 1, Math.floor((rawProgress / 100) * steps));

    setTask((prev) => {
      if (!prev || prev.isPaused) return prev;

      const updatedSteps: Step[] = prev.steps.map((s, i) => ({
        ...s,
        status:
          i < stepIndex  ? 'done'   :
          i === stepIndex ? 'active' :
          'pending',
      }));

      // Trickle demo output when a new step activates
      const isNewStep = prev.steps[stepIndex]?.status !== 'active';
      const appendLine = isNewStep && stepIndex < steps
        ? `\n> ${prev.steps[stepIndex]?.label ?? ''}…\n`
        : '';

      if (rawProgress >= 100) {
        clearInterval(id);
        // Mark all done
        const finalSteps: Step[] = prev.steps.map((s) => ({ ...s, status: 'done' as const }));
        return { ...prev, steps: finalSteps, progress: 100, output: prev.output + appendLine };
      }

      return {
        ...prev,
        steps: updatedSteps,
        progress: rawProgress,
        output: prev.output + appendLine,
      };
    });

    if (tick >= totalTicks) clearInterval(id);
  }, intervalMs);

  return id;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TasksPage() {
  const [activeTask,  setActiveTask]  = useState<ActiveTask  | null>(null);
  const [queue,       setQueue]       = useState<QueuedTask[]>([]);
  const [history,     setHistory]     = useState<HistoryEntry[]>([]);
  const [input,       setInput]       = useState('');
  const [inputFocus,  setInputFocus]  = useState(false);

  const inputRef     = useRef<HTMLInputElement>(null);
  const simIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Keyboard shortcut: Cmd+T ──────────────────────────────────────────────

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

  // ── Start a task ──────────────────────────────────────────────────────────

  const startTask = useCallback((description: string) => {
    const type            = classifyTask(description);
    const steps           = getStepsForTask(type);
    const estimatedSeconds = estimateTime(type);

    const task: ActiveTask = {
      id:               crypto.randomUUID(),
      description,
      type,
      steps,
      output:           `Starting: ${description}\n`,
      progress:         0,
      isPaused:         false,
      startedAt:        new Date(),
      estimatedSeconds,
    };

    setActiveTask(task);

    // Clear any existing simulation
    if (simIntervalRef.current) clearInterval(simIntervalRef.current);
    simIntervalRef.current = simulateProgress(task, setActiveTask);
  }, []);

  // ── Watch for task completion → move to history ───────────────────────────

  useEffect(() => {
    if (activeTask?.progress === 100) {
      const elapsed = Math.round(
        (Date.now() - activeTask.startedAt.getTime()) / 1000
      );

      const entry: HistoryEntry = {
        id:               activeTask.id,
        characterName:    CHARACTER.name,
        characterAvatar:  CHARACTER.avatar,
        taskDescription:  activeTask.description,
        taskType:         activeTask.type,
        durationSeconds:  elapsed,
        output:           activeTask.output,
        completedAt:      new Date(),
      };

      setHistory((prev) => [entry, ...prev]);

      // Short delay so user sees 100% before clearing
      const t = setTimeout(() => {
        setActiveTask(null);
        // Dequeue next if any
        setQueue((prev) => {
          if (prev.length === 0) return prev;
          const [next, ...rest] = prev;
          startTask(next.description);
          return rest;
        });
      }, 1800);

      return () => clearTimeout(t);
    }
  }, [activeTask?.progress, activeTask?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Handlers ──────────────────────────────────────────────────────────────

  function handleSubmit() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput('');

    if (!activeTask) {
      startTask(trimmed);
    } else {
      // Queue it
      const type = classifyTask(trimmed);
      setQueue((prev) => [
        ...prev,
        { id: crypto.randomUUID(), description: trimmed, type, addedAt: new Date() },
      ]);
    }
  }

  function handlePause() {
    setActiveTask((prev) => {
      if (!prev) return prev;
      return { ...prev, isPaused: !prev.isPaused };
    });
  }

  function handleRedirect(newInstruction: string) {
    if (simIntervalRef.current) clearInterval(simIntervalRef.current);
    startTask(newInstruction);
  }

  function removeFromQueue(id: string) {
    setQueue((prev) => prev.filter((t) => t.id !== id));
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div
      className="min-h-screen font-mono"
      style={{ background: DEEP, color: 'rgba(255,255,255,0.85)' }}
    >
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-6">

        {/* ── Page header ──────────────────────────────────────────────── */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IconOrb icon={Terminal} variant="gold" size="lg" />
            <h1 className="text-xl font-bold tracking-tight">
              <GlowText variant="gold" as="span">Task Execution</GlowText>
            </h1>
          </div>
          <span
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            ⌘T to focus input
          </span>
        </div>

        {/* ── Active task ───────────────────────────────────────────────── */}
        <section>
          <SectionLabel icon={<Layers className="w-3.5 h-3.5" />} label="Current Task" />

          {activeTask ? (
            <TaskExecution
              taskDescription={activeTask.description}
              steps={activeTask.steps}
              output={activeTask.output}
              progress={activeTask.progress}
              onPause={handlePause}
              onRedirect={handleRedirect}
              characterName={CHARACTER.name}
              characterMood={CHARACTER.mood}
              estimatedSeconds={activeTask.estimatedSeconds}
              isPaused={activeTask.isPaused}
            />
          ) : (
            <Surface variant="elevated" glow="gold" className="flex items-center justify-center py-10 text-xs text-white/20">
              No active task — give {CHARACTER.name} something to do below.
            </Surface>
          )}
        </section>

        {/* ── Queue ─────────────────────────────────────────────────────── */}
        <section>
          <SectionLabel
            icon={<ListChecks className="w-3.5 h-3.5" />}
            label={`Queue (${queue.length})`}
          />

          <Surface variant="elevated" className="overflow-hidden">
            {queue.length === 0 ? (
              <div
                className="py-6 text-xs text-center"
                style={{ color: 'rgba(255,255,255,0.2)' }}
              >
                Queue is empty. Tasks added while {CHARACTER.name} is busy will appear here.
              </div>
            ) : (
              queue.map((task, i) => (
                <QueueRow
                  key={task.id}
                  task={task}
                  position={i + 1}
                  onRemove={() => removeFromQueue(task.id)}
                />
              ))
            )}
          </Surface>
        </section>

        {/* ── History ───────────────────────────────────────────────────── */}
        <section>
          <SectionLabel icon={<History className="w-3.5 h-3.5" />} label="History" />
          <TaskHistory entries={history} limit={10} />
        </section>

        {/* ── Task input ────────────────────────────────────────────────── */}
        <div className="sticky bottom-4">
          <Surface
            variant="elevated"
            glow={inputFocus ? 'gold' : 'none'}
            className="overflow-hidden transition-all"
          >
            <div className="flex items-center gap-3 px-4 py-3">
              {/* Character avatar */}
              <span className="text-base flex-shrink-0" aria-hidden>
                {CHARACTER.avatar}
              </span>

              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                placeholder={
                  activeTask
                    ? `Queue a task for ${CHARACTER.name}… (Enter)`
                    : `Give ${CHARACTER.name} a task… (Enter)`
                }
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/25"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              />

              <button
                onClick={handleSubmit}
                disabled={!input.trim()}
                className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-30"
                style={{
                  background: input.trim() ? GOLD : 'rgba(255,255,255,0.08)',
                  color: input.trim() ? '#0d0c18' : 'rgba(255,255,255,0.4)',
                }}
                aria-label="Submit task"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            {/* Hint row */}
            <div
              className="px-4 pb-2 flex gap-4 text-xs"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              <span>Try: &quot;Research Byzantine councils&quot;</span>
              <span>·</span>
              <span>&quot;Draft email to the team&quot;</span>
              <span>·</span>
              <span>&quot;Plan Q3 roadmap&quot;</span>
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

function QueueRow({
  task,
  position,
  onRemove,
}: {
  task: QueuedTask;
  position: number;
  onRemove: () => void;
}) {
  const colour = TASK_TYPE_COLOURS[task.type];

  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5 border-b last:border-b-0 group"
      style={{ borderColor: 'rgba(255,255,255,0.05)' }}
    >
      {/* Position */}
      <span
        className="text-xs w-4 text-right flex-shrink-0 tabular-nums"
        style={{ color: 'rgba(255,255,255,0.2)' }}
      >
        {position}
      </span>

      {/* Description */}
      <span
        className="flex-1 text-xs truncate"
        style={{ color: 'rgba(255,255,255,0.65)' }}
        title={task.description}
      >
        {task.description}
      </span>

      {/* Type badge */}
      <span
        className="text-xs px-1.5 py-0.5 rounded flex-shrink-0"
        style={{
          color: colour,
          background: `${colour}18`,
          border: `1px solid ${colour}30`,
        }}
      >
        {TASK_TYPE_LABELS[task.type]}
      </span>

      {/* Remove */}
      <button
        onClick={onRemove}
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-400"
        style={{ color: 'rgba(255,255,255,0.3)' }}
        aria-label="Remove from queue"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>

      {/* Plus icon to indicate it will be queued after current */}
      <Plus
        className="w-3 h-3 flex-shrink-0 opacity-20"
        style={{ color: 'rgba(255,255,255,0.5)' }}
        aria-hidden
      />
    </div>
  );
}
