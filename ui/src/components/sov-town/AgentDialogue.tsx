"use client";

import { useState } from "react";
import type { DialogueLine, DialogueResult } from "@/app/local-api/town/dialogue/route";

interface AgentDialogueProps {
  dialogue: DialogueResult | null;
  loading?: boolean;
  error?: string | null;
}

export function AgentDialogue({ dialogue, loading, error }: AgentDialogueProps) {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  if (loading) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex items-center gap-3 text-sm text-white/60">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-[#c9a84c]" />
          Ministers are convening in the BFT chamber…
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
        {error}
      </div>
    );
  }

  if (!dialogue || dialogue.dialogue.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/50">
        No debate yet. Enter a topic and press Generate to watch the agents converse.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {dialogue.dialogue.map((line, index) => (
        <DialogueBubble
          key={`${line.agentId}-${index}`}
          line={line}
          index={index}
          isExpanded={expanded.has(index)}
          onToggle={() => {
            const next = new Set(expanded);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            setExpanded(next);
          }}
        />
      ))}
    </div>
  );
}

function DialogueBubble({
  line,
  index,
  isExpanded,
  onToggle,
}: {
  line: DialogueLine;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const initials = line.name.slice(0, 2).toUpperCase();
  const hue = stringToHue(line.agentId);
  const color = `hsl(${hue} 70% 60%)`;

  return (
    <div className="flex items-start gap-3">
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-[#0d0c18]"
        style={{ backgroundColor: color }}
        title={`${line.name} — ${line.role}`}
      >
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold text-white">{line.name}</span>
          <span className="text-xs text-white/40">{line.role}</span>
          <span className="text-[10px] text-white/25">#{index + 1}</span>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-left text-sm leading-relaxed text-white/80 transition hover:bg-white/[0.08]"
        >
          <p className={isExpanded ? "" : "line-clamp-3"}>{line.content}</p>
          {line.content.length > 180 && (
            <span className="mt-2 block text-xs text-[#c9a84c]">
              {isExpanded ? "Show less" : "Show more"}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

function stringToHue(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % 360;
}
