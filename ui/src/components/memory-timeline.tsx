"use client";

import { Badge } from "@/components/ui/badge";
import type { MemoryEpisode } from "@/lib/types";

export function MemoryTimeline({ memories }: { memories: MemoryEpisode[] }) {
  if (!memories.length) {
    return <p className="text-white/30 text-sm">No memories recorded</p>;
  }

  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10" />
      {memories.map((m) => {
        const careColor =
          m.care_weight > 0.7 ? "bg-cyan-400" : m.care_weight > 0.4 ? "bg-blue-400" : "bg-white/40";
        return (
          <div key={m.id} className="relative mb-4 pb-4 border-b border-white/5 last:border-0">
            <div className={`absolute left-[-18px] top-1.5 w-2.5 h-2.5 rounded-full ${careColor}`} />
            <p className="text-sm text-white/80 mb-1">{m.content}</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-white/30">
                {new Date(m.timestamp).toLocaleString()}
              </span>
              <Badge variant="default">{m.memory_type}</Badge>
              {m.tags?.map((t) => (
                <Badge key={t} variant="cyan">{t}</Badge>
              ))}
              <span className="text-xs text-white/20 ml-auto">
                care: {(m.care_weight * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
