'use client';

import { useState, useEffect, useCallback } from 'react';
import { Eye, Zap } from 'lucide-react';

/**
 * Plan Mode Toggle — lets users switch between "analyze first" and "act immediately".
 *
 * From Claude Code gap analysis:
 * - Plan Mode: AI generates a plan before executing (read-only analysis)
 * - Act Mode: AI responds immediately (default)
 *
 * In Plan Mode, the chat uses a cheaper model (DeepSeek) for planning,
 * then switches to premium (Claude/GPT) for execution after approval.
 */

export type ChatMode = 'plan' | 'act';

interface PlanModeToggleProps {
  mode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
}

export function PlanModeToggle({ mode, onModeChange }: PlanModeToggleProps) {
  // Keyboard shortcut: Shift+Tab to toggle
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      onModeChange(mode === 'plan' ? 'act' : 'plan');
    }
  }, [mode, onModeChange]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onModeChange(mode === 'plan' ? 'act' : 'plan')}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
        style={{
          background: mode === 'plan' ? 'rgba(124,58,237,0.15)' : 'rgba(201,168,76,0.10)',
          border: `1px solid ${mode === 'plan' ? 'rgba(124,58,237,0.3)' : 'rgba(201,168,76,0.2)'}`,
          color: mode === 'plan' ? '#A78BFA' : '#c9a84c',
        }}
        title="Shift+Tab to toggle"
      >
        {mode === 'plan' ? (
          <>
            <Eye className="w-3.5 h-3.5" />
            Plan Mode
          </>
        ) : (
          <>
            <Zap className="w-3.5 h-3.5" />
            Act Mode
          </>
        )}
      </button>
      <span className="text-white/15 text-[10px] hidden sm:inline">Shift+Tab</span>
    </div>
  );
}

/**
 * Returns the system prompt modifier for plan mode.
 * When in plan mode, the AI should analyze and propose a plan
 * before taking any action.
 */
export function getPlanModeDirective(mode: ChatMode): string {
  if (mode !== 'plan') return '';

  return `[PLAN MODE ACTIVE]
You are in analysis mode. Before taking any action or giving a final answer:
1. State what you understand about the user's request
2. Identify 2-3 possible approaches
3. Recommend the best approach with reasoning
4. Ask for approval before proceeding
5. Keep the plan concise — bullet points, not essays

Only after the user approves should you execute. If they modify the plan, incorporate changes and re-confirm.`;
}
