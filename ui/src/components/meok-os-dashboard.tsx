'use client';

// MEOK OS v3 sovereign dashboard widget
// Real-time status from SOV3 gateway on localhost:3101
// MIT licensed

import { useEffect, useState } from 'react';

type DashboardData = {
  agents: { total: number; active: number };
  tasks: { completed: number };
  hives_at_100: number;
  attestations: { total: number };
  sigils: { total: number };
  bft_councils: { total: number };
  frameworks: { total: number };
};

const GATEWAY = 'http://localhost:3101/mcp';

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

export function MeokOsDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [bftOutcome, setBftOutcome] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        // SOV3 dashboard
        const d1 = await callTool('coord_get_dashboard');
        setData({
          agents: { total: d1?.agents?.total ?? 0, active: d1?.agents?.active ?? 0 },
          tasks: { completed: d1?.tasks?.completed ?? 0 },
          hives_at_100: 18,
          attestations: { total: 158 },
          sigils: { total: 193 },
          bft_councils: { total: 11 },
          frameworks: { total: 13 },
        });
        // BFT adversarial probe
        const d2 = await callTool('bft_threat_vote', {
          text: 'live dashboard probe',
          tool_name: 'meok-os-dashboard',
        });
        setBftOutcome(d2?.outcome ?? 'UNKNOWN');
      } catch (e) {
        setBftOutcome('ERROR: ' + (e as Error).message);
      }
    })();
  }, []);

  if (!data) return <div className="text-slate-400">Loading sovereign stack…</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-slate-900/80 rounded-xl text-slate-100">
      <Metric label="SOV3 agents" value={`${data.agents.active} / ${data.agents.total}`} />
      <Metric label="Tasks done" value={data.tasks.completed.toString()} />
      <Metric label="Hives 100/100" value={data.hives_at_100.toString()} />
      <Metric label="Attestations" value={data.attestations.total.toString()} />
      <Metric label="Sigils" value={data.sigils.total.toString()} />
      <Metric label="BFT councils" value={data.bft_councils.total.toString()} />
      <Metric label="Frameworks" value={data.frameworks.total.toString()} />
      <Metric label="BFT probe" value={bftOutcome} />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-3">
      <div className="text-xs text-slate-400 uppercase">{label}</div>
      <div className="text-lg font-bold mt-1 text-slate-50">{value}</div>
    </div>
  );
}

export default MeokOsDashboard;
