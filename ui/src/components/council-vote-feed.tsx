"use client";

import { Badge } from "@/components/ui/badge";
import type { CouncilDecision } from "@/lib/types";

export function CouncilVoteFeed({ decisions }: { decisions: CouncilDecision[] }) {
  if (!decisions.length) {
    return <p className="text-white/30 text-sm">No decisions yet</p>;
  }

  return (
    <div className="space-y-3">
      {decisions.map((d, i) => {
        const approve = d.vote_counts?.approve || 0;
        const reject = d.vote_counts?.reject || 0;
        const total = approve + reject || 1;
        const pct = Math.round((approve / total) * 100);

        return (
          <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/5">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm text-white/80 flex-1">{d.proposal}</p>
              <Badge variant={d.decision === "approved" ? "green" : "red"}>
                {d.decision}
              </Badge>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500/60 rounded-full"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-white/40">
                {approve}/{total} • care {(d.care_score * 100).toFixed(0)}%
              </span>
            </div>
            <p className="text-xs text-white/20 mt-1">
              {new Date(d.timestamp).toLocaleString()}
            </p>
          </div>
        );
      })}
    </div>
  );
}
