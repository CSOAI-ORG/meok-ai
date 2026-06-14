'use client';

import { DOMAIN_NODES, TOOL_NODES, GITHUB_STATS } from '@/lib/sov3-topology';
import { Activity, AlertTriangle, GitPullRequest, Globe } from 'lucide-react';

export function StatusTicker() {
  const liveDomains = DOMAIN_NODES.filter((d) => d.status === 'live').length;
  const downDomains = DOMAIN_NODES.filter((d) => d.status === 'down').length;
  const runningTools = TOOL_NODES.filter((t) => t.status === 'running').length;
  const avgReadiness = Math.round(
    DOMAIN_NODES.reduce((acc, d) => acc + d.readiness, 0) / DOMAIN_NODES.length
  );

  const items = [
    { icon: Globe, label: 'Live domains', value: `${liveDomains}/${DOMAIN_NODES.length}` },
    { icon: AlertTriangle, label: 'Down', value: downDomains },
    { icon: Activity, label: 'Tool workers', value: `${runningTools}/${TOOL_NODES.length}` },
    { icon: Activity, label: 'Avg readiness', value: `${avgReadiness}%` },
    { icon: GitPullRequest, label: 'Open PRs', value: GITHUB_STATS.openPRs },
  ];

  return (
    <div className="flex h-12 items-center gap-6 overflow-x-auto border-t border-slate-800 bg-slate-950 px-4 text-xs text-slate-400">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 whitespace-nowrap">
          <item.icon className="h-3.5 w-3.5 text-slate-500" />
          <span className="text-slate-500">{item.label}:</span>
          <span className="font-medium text-slate-200">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
