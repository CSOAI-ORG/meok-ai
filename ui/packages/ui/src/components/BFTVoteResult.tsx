"use client";

import { RefreshCw } from "lucide-react";
import { cn } from "../lib/utils";
import { colors } from "../tokens";

export type BFTVoteValue = "FOR" | "AGAINST" | "ABSTAIN";

export interface BFTAgentVote {
  agentId: string;
  name: string;
  role: string;
  vote: BFTVoteValue;
  reason: string;
}

export interface BFTVoteResultData {
  proposal: string;
  threshold: number;
  votes: BFTAgentVote[];
  tally: Record<BFTVoteValue, number>;
  outcome: "PASSED" | "REJECTED" | "TIED";
  majorityVote: BFTVoteValue | null;
}

export interface BFTVoteResultProps {
  result: BFTVoteResultData;
  onReRun?: () => void;
  canReRun?: boolean;
  className?: string;
}

const voteColor: Record<BFTVoteValue, string> = {
  FOR: "#34d399", // emerald-400
  AGAINST: "#fb7185", // rose-400
  ABSTAIN: "#fbbf24", // amber-400
};

const outcomeColor: Record<BFTVoteResultData["outcome"], string> = {
  PASSED: "#34d399",
  REJECTED: "#fb7185",
  TIED: "#fbbf24",
};

export function BFTVoteResult({
  result,
  onReRun,
  canReRun = true,
  className,
}: BFTVoteResultProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Header */}
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border p-4"
        style={{
          background: colors.surface1,
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="min-w-0 flex-1 pr-4">
          <div className="text-xs text-white/50">Proposal</div>
          <div className="text-sm font-medium text-white">{result.proposal}</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div
              className="text-lg font-black"
              style={{ color: outcomeColor[result.outcome] }}
            >
              {result.outcome}
            </div>
            <div className="text-xs text-white/50">
              FOR {result.tally.FOR} · AGAINST {result.tally.AGAINST} · ABSTAIN{" "}
              {result.tally.ABSTAIN}
            </div>
          </div>
          {onReRun && (
            <button
              type="button"
              onClick={onReRun}
              disabled={!canReRun}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.08] disabled:opacity-50 transition-colors"
              title="Re-run vote with the same proposal"
            >
              <RefreshCw size={14} />
              Re-run
            </button>
          )}
        </div>
      </div>

      {/* Per-vote cards */}
      <div className="grid gap-2 sm:grid-cols-2">
        {result.votes.map((v) => (
          <div
            key={v.agentId}
            className="rounded-2xl border p-4"
            style={{
              background: colors.surface1,
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">{v.name}</span>
              <span
                className="text-xs font-black uppercase tracking-wider"
                style={{ color: voteColor[v.vote] }}
              >
                {v.vote}
              </span>
            </div>
            <div className="text-xs text-white/50">{v.role}</div>
            <div className="mt-2 text-xs text-white/70 italic">“{v.reason}”</div>
          </div>
        ))}
      </div>
    </div>
  );
}
