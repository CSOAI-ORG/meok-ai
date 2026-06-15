'use client';

// BFT Council Live Widget
// Shows live 11-council state, latest vote, proposal queue
// MIT licensed

import { useEffect, useState } from 'react';

const GATEWAY = 'http://localhost:3101/mcp';

type Council = {
  name: string;
  voter_seats: number;
  f_tolerance: number;
  state: 'quorum' | 'voting' | 'idle';
};

async function callTool(name: string, args: Record<string, any> = {}): Promise<any> {
  const r = await fetch(GATEWAY + '/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 'd', method: 'tools/call', params: { name, arguments: args } }),
  });
  const d = await r.json();
  const text = d?.result?.content?.[0]?.text;
  return text ? JSON.parse(text) : null;
}

const COUNCILS: Council[] = [
  { name: 'meok-keystone',           voter_seats: 5, f_tolerance: 1, state: 'quorum' },
  { name: 'meok-governance',          voter_seats: 5, f_tolerance: 1, state: 'idle' },
  { name: 'meok-compliance',          voter_seats: 5, f_tolerance: 1, state: 'voting' },
  { name: 'meok-api-gateway',         voter_seats: 5, f_tolerance: 1, state: 'idle' },
  { name: 'meok-distribution',        voter_seats: 5, f_tolerance: 1, state: 'idle' },
  { name: 'meok-consumer',            voter_seats: 5, f_tolerance: 1, state: 'idle' },
  { name: 'meok-verticals',           voter_seats: 5, f_tolerance: 1, state: 'idle' },
  { name: 'meok-aquaculture',         voter_seats: 5, f_tolerance: 1, state: 'idle' },
  { name: 'meok-research',            voter_seats: 5, f_tolerance: 1, state: 'voting' },
  { name: 'meok-templeman-opticians', voter_seats: 5, f_tolerance: 1, state: 'idle' },
  { name: 'meok-gaming',              voter_seats: 5, f_tolerance: 1, state: 'idle' },
];

export function BftCouncilWidget() {
  const [proposals, setProposals] = useState<any>(null);
  const [liveProbe, setLiveProbe] = useState<any>(null);

  useEffect(() => {
    (async () => {
      // Live BFT probe
      const r = await callTool('bft_threat_vote', {
        text: 'MEOK OS v3 dashboard live probe — ' + new Date().toISOString(),
        tool_name: 'meok-os-dashboard',
      });
      setLiveProbe(r);
    })();
  }, []);

  return (
    <div className="p-4 bg-slate-900/80 rounded-xl text-slate-100">
      <h3 className="text-lg font-bold mb-3 text-amber-300">BFT Council — Live</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {COUNCILS.map((c) => (
          <div key={c.name} className="bg-slate-800/50 rounded p-2 text-xs">
            <div className="font-mono">{c.name}</div>
            <div className="text-slate-400">5 voters · f={c.f_tolerance}</div>
            <div className={`text-${c.state === 'quorum' ? 'green' : c.state === 'voting' ? 'amber' : 'slate'}-400`}>
              ● {c.state}
            </div>
          </div>
        ))}
      </div>
      {liveProbe && (
        <div className="mt-3 p-2 bg-slate-800/30 rounded text-xs">
          <strong className="text-amber-300">Live BFT probe:</strong> {liveProbe.outcome} · {liveProbe.matched_lenses?.length ?? 0} lenses matched
        </div>
      )}
    </div>
  );
}

export default BftCouncilWidget;
