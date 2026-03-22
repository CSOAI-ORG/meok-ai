'use client';
import { useState } from 'react';
import type { MemoryEpisode } from '@/lib/types';

interface MemoryTimelineProps {
  memories: MemoryEpisode[];
  isLoading?: boolean;
}

export function MemoryTimeline({ memories, isLoading }: MemoryTimelineProps) {
  const [selected, setSelected] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="space-y-3 p-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-16 bg-white/5 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (!memories.length) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-3">🧠</div>
        <p className="text-white/40 text-sm">No memories yet. Start a conversation to build your memory.</p>
      </div>
    );
  }

  // Group memories by day
  const grouped = memories.reduce<Record<string, MemoryEpisode[]>>((acc, m) => {
    const day = new Date(m.timestamp).toLocaleDateString('en-GB', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    if (!acc[day]) acc[day] = [];
    acc[day].push(m);
    return acc;
  }, {});

  return (
    <div className="space-y-6 p-4">
      {Object.entries(grouped).map(([day, dayMemories]) => (
        <div key={day}>
          <p className="text-white/20 text-xs font-mono uppercase tracking-widest mb-3">{day}</p>
          <div className="relative pl-6">
            {/* Vertical timeline line */}
            <div className="absolute left-2 top-0 bottom-0 w-px bg-[#c9a84c]/20" />
            <div className="space-y-3">
              {dayMemories.map((memory) => (
                <div
                  key={memory.id}
                  onClick={() => setSelected(selected === memory.id ? null : memory.id)}
                  className={`relative cursor-pointer rounded-xl p-4 transition-all duration-200 ${
                    selected === memory.id
                      ? 'bg-[#c9a84c]/10 border border-[#c9a84c]/30'
                      : 'bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[18px] top-5 w-2 h-2 rounded-full border-2 ${
                      selected === memory.id
                        ? 'bg-[#c9a84c] border-[#c9a84c]'
                        : 'bg-[#0d0c18] border-[#c9a84c]/50'
                    }`}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <p
                      className={`text-sm leading-relaxed flex-1 ${
                        selected === memory.id ? 'text-white' : 'text-white/70'
                      }`}
                    >
                      {memory.content}
                    </p>
                    <div className="flex-shrink-0 text-right">
                      {memory.importance_score !== undefined && (
                        <div className="text-[#c9a84c] text-xs font-mono mb-1">
                          {Math.round(memory.importance_score * 100)}%
                        </div>
                      )}
                      <span className="text-white/20 text-xs font-mono">
                        {new Date(memory.timestamp).toLocaleTimeString('en-GB', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>

                  {selected === memory.id && (
                    <div className="mt-3 pt-3 border-t border-white/10 flex gap-3 flex-wrap items-center">
                      {memory.memory_type && (
                        <span className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded-full">
                          {memory.memory_type}
                        </span>
                      )}
                      {memory.source_agent && (
                        <span className="text-xs bg-[#c9a84c]/10 text-[#c9a84c]/70 px-2 py-1 rounded-full">
                          via {memory.source_agent}
                        </span>
                      )}
                      {memory.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white/5 text-white/40 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                      <span className="text-xs text-white/20 ml-auto font-mono">
                        care: {(memory.care_weight * 100).toFixed(0)}%
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
