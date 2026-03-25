'use client';

/**
 * Subagent Orchestration UI — shows parallel agent work.
 *
 * From Claude Code gap analysis:
 * "When user asks 'Research this + Write summary + Email team',
 *  spawn 3 subagents simultaneously."
 *
 * Displays active agents with progress, model used, and status.
 * Part of the Sovereign Display transparency layer.
 */

import { useState, useEffect } from 'react';
import { Loader2, CheckCircle, AlertCircle, Cpu } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────

export type AgentStatus = 'queued' | 'working' | 'complete' | 'error';

export interface SubAgent {
  id: string;
  name: string;
  task: string;
  model: string;
  status: AgentStatus;
  progress: number;        // 0-100
  startedAt?: string;
  completedAt?: string;
  result?: string;
  error?: string;
}

// ── Status Icons ───────────────────────────────────────────────────────────

function StatusIcon({ status }: { status: AgentStatus }) {
  switch (status) {
    case 'queued':
      return <div className="w-3 h-3 rounded-full bg-white/20" />;
    case 'working':
      return <Loader2 className="w-3.5 h-3.5 text-[#c9a84c] animate-spin" />;
    case 'complete':
      return <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />;
    case 'error':
      return <AlertCircle className="w-3.5 h-3.5 text-[#EF4444]" />;
  }
}

// ── Component ──────────────────────────────────────────────────────────────

interface AgentOrchestratorProps {
  agents: SubAgent[];
  /** Whether to show the compact inline version */
  compact?: boolean;
}

export function AgentOrchestrator({ agents, compact = false }: AgentOrchestratorProps) {
  const activeCount = agents.filter((a) => a.status === 'working').length;
  const doneCount = agents.filter((a) => a.status === 'complete').length;

  if (agents.length === 0) return null;

  if (compact) {
    return (
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
        style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)' }}
      >
        <Cpu className="w-3.5 h-3.5 text-[#c9a84c]" />
        <span className="text-white/50">
          {activeCount > 0
            ? `${activeCount} agent${activeCount > 1 ? 's' : ''} working...`
            : `${doneCount}/${agents.length} complete`}
        </span>
        {/* Mini progress dots */}
        <div className="flex gap-1 ml-auto">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="w-2 h-2 rounded-full"
              style={{
                background:
                  agent.status === 'complete' ? '#10B981' :
                  agent.status === 'working' ? '#c9a84c' :
                  agent.status === 'error' ? '#EF4444' :
                  'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <Cpu className="w-4 h-4 text-[#c9a84c]" />
        <span className="text-white text-sm font-bold">
          {activeCount > 0 ? `${activeCount} Agent${activeCount > 1 ? 's' : ''} Working` : 'Task Complete'}
        </span>
        <span className="text-white/25 text-xs ml-auto">
          {doneCount}/{agents.length}
        </span>
      </div>

      <div className="divide-y divide-white/[0.04]">
        {agents.map((agent) => (
          <div key={agent.id} className="px-4 py-3">
            <div className="flex items-center gap-2 mb-1.5">
              <StatusIcon status={agent.status} />
              <span className="text-white/80 text-sm font-medium">{agent.name}</span>
              <span className="text-white/20 text-[10px] ml-auto font-mono">{agent.model}</span>
            </div>
            <p className="text-white/30 text-xs mb-2 pl-5">{agent.task}</p>

            {/* Progress bar */}
            {agent.status === 'working' && (
              <div className="h-1 rounded-full ml-5" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div
                  className="h-1 rounded-full transition-all duration-500"
                  style={{ width: `${agent.progress}%`, background: '#c9a84c' }}
                />
              </div>
            )}

            {/* Result preview */}
            {agent.status === 'complete' && agent.result && (
              <p className="text-[#10B981]/60 text-xs pl-5 truncate">{agent.result}</p>
            )}

            {/* Error */}
            {agent.status === 'error' && agent.error && (
              <p className="text-[#EF4444]/60 text-xs pl-5">{agent.error}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
