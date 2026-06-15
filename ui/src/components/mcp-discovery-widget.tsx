'use client'

// MEOK MCP Discovery Widget
// Real-time listing of 220+ MCP servers across 18 hives
// MIT licensed

import { useEffect, useState } from 'react';

const GATEWAY = 'http://localhost:3101/mcp';

const HIVES = [
  { id: 'meok-keystone',           servers: 2,  category: 'sovereign',     emoji: '🔑' },
  { id: 'meok-governance-engine',   servers: 4,  category: 'governance',   emoji: '⚖️' },
  { id: 'meok-compliance-gateway',  servers: 12, category: 'compliance',   emoji: '📋' },
  { id: 'meok-api-gateway',         servers: 172, category: 'infrastructure', emoji: '🔌' },
  { id: 'meok-distribution',        servers: 3,  category: 'distribution',  emoji: '📦' },
  { id: 'meok-consumer',            servers: 6,  category: 'consumer',     emoji: '👥' },
  { id: 'meok-verticals',           servers: 1,  category: 'vertical',     emoji: '🏢' },
  { id: 'meok-aquaculture',         servers: 1,  category: 'niche',        emoji: '🐟' },
  { id: 'meok-research',            servers: 5,  category: 'research',     emoji: '🔬' },
  { id: 'meok-templeman-opticians', servers: 1,  category: 'founder',      emoji: '👓' },
  { id: 'meok-gaming-hive',         servers: 14, category: 'gaming',       emoji: '🎮' },
  { id: 'meok-pricing',             servers: 1,  category: 'sovereign',     emoji: '💰' },
  { id: 'meok-revenue',             servers: 1,  category: 'sovereign',     emoji: '💵' },
  { id: 'meok-fleet',               servers: 1,  category: 'sovereign',     emoji: '🚁' },
  { id: 'meok-council',             servers: 1,  category: 'sovereign',     emoji: '🗳️' },
  { id: 'meok-horus',               servers: 1,  category: 'sovereign',     emoji: '🛡️' },
  { id: 'meok-rainbow',             servers: 1,  category: 'sovereign',     emoji: '🌈' },
  { id: 'meok-gods-eye',            servers: 1,  category: 'sovereign',     emoji: '🛰️' },
];

export function McpDiscoveryWidget() {
  const [tools, setTools] = useState<any>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    (async () => {
      const r = await fetch(GATEWAY + '/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jsonrpc: '2.0', id: 'd', method: 'tools/list', params: {} }),
      });
      const d = await r.json();
      setTools(d?.result?.tools ?? []);
    })();
  }, []);

  const totalServers = HIVES.reduce((s, h) => s + h.servers, 0);
  const filtered = HIVES.filter(h => h.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-4 bg-slate-900/80 rounded-xl text-slate-100">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-cyan-300">🔌 MCP Discovery · {totalServers} servers · {HIVES.length} hives</h3>
        <input
          type="text"
          placeholder="Search hive…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-2 py-1 rounded bg-slate-800 text-slate-100 text-xs"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filtered.map((h) => (
          <div key={h.id} className="bg-slate-800/50 rounded p-2 text-xs hover:bg-slate-700/50">
            <div className="flex items-center gap-2">
              <span className="text-lg">{h.emoji}</span>
              <span className="font-mono truncate">{h.id}</span>
            </div>
            <div className="text-slate-300 text-[10px]">{h.category}</div>
            <div className="text-cyan-300 font-bold">{h.servers} servers</div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-2 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-200">
        🔌 Real-time count: {tools?.length ?? 'loading…'} tools on sovereign-mcp-server
      </div>
    </div>
  );
}

export default McpDiscoveryWidget;
