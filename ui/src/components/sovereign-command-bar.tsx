'use client'

// MEOK Sovereign Command Bar — Cmd+K (or Ctrl+K) for everything
// Search across 18 hives, 220+ MCP servers, 140+ characters, 11 BFT councils, 8 distribution channels
// MIT licensed

import { useEffect, useState } from 'react';

const GATEWAY = 'http://localhost:3101/mcp';

const PILLAR_SEARCH = [
  { category: 'Hives',     emoji: '🐝', count: 18,    type: 'hive'    },
  { category: 'MCP servers', emoji: '🔌', count: 220,  type: 'mcp'     },
  { category: 'Characters', emoji: '👥', count: 140,  type: 'character' },
  { category: 'BFT councils', emoji: '🗳️', count: 11, type: 'council' },
  { category: 'Distribution', emoji: '📦', count: 8, type: 'channel' },
  { category: 'Frameworks', emoji: '⚖️', count: 13, type: 'framework' },
  { category: 'Attestations', emoji: '🔏', count: 158, type: 'attestation' },
  { category: 'Sigils',   emoji: '📜', count: 200,  type: 'sigil'   },
];

export function SovereignCommandBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [tools, setTools] = useState<any[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  useEffect(() => {
    if (open) {
      (async () => {
        const r = await fetch(GATEWAY + '/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ jsonrpc: '2.0', id: 'd', method: 'tools/list', params: {} }),
        });
        const d = await r.json();
        setTools(d?.result?.tools ?? []);
      })();
    }
  }, [open]);

  const filtered = PILLAR_SEARCH.filter((p) =>
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-24"
         onClick={() => setOpen(false)}>
      <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-2xl mx-4 shadow-2xl"
           onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b border-slate-700">
          <input
            type="text"
            placeholder="Search 8 pillars: hives, MCPs, characters, councils, channels, frameworks, attestations, sigils…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-slate-800 text-slate-100 text-lg p-3 rounded-lg border-0 focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <div className="max-h-96 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="text-slate-400 text-center p-4">No results</div>
          ) : (
            filtered.map((p) => (
              <div key={p.category} className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded cursor-pointer">
                <span className="text-2xl">{p.emoji}</span>
                <div className="flex-1">
                  <div className="text-slate-100 font-mono">{p.category}</div>
                  <div className="text-slate-400 text-xs">{p.type} · {p.count} entries</div>
                </div>
                <div className="text-amber-300 font-bold">{p.count}</div>
              </div>
            ))
          )}
          <div className="border-t border-slate-700 mt-2 pt-2">
            <div className="text-xs text-slate-500 px-2 py-1">
              Live tools: {tools.length} · Esc to close · ⌘K from anywhere
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SovereignCommandBar;
