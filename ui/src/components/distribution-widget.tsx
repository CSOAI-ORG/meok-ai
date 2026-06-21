'use client'

// MEOK Distribution Widget
// npm + Smithery + GitHub + PyPI distribution status
// MIT licensed

const CHANNELS = [
  { name: 'npm @csoai-org',  status: 'ready',  note: '30+ MCPs publishable when 2FA bypass issued',         emoji: '📦' },
  { name: 'Smithery',       status: 'ready',  note: 'SMITHERY_API_KEY in env. 30+ MCPs publishable',         emoji: '🛠️' },
  { name: 'GitHub CSOAI-ORG', status: 'live',    note: 'cl4r1t4s + sovereign-tools + 6 repos. Need 2 more.',  emoji: '🐙' },
  { name: 'PyPI meok-os',   status: 'planned', note: 'Build a meok-os-client PyPI package',                 emoji: '🐍' },
  { name: 'Punkpeye',        status: 'ready',  note: 'PR drafted, waiting for mcp-publisher login',          emoji: '🪝' },
  { name: 'Apify',          status: 'ready',  note: '5 actors publishable (1 done)',                      emoji: '🎭' },
  { name: 'Glama',          status: 'ready',  note: 'API key in env. 30+ MCPs publishable',                emoji: '🎯' },
  { name: 'Smithery Alt',    status: 'ready',  note: 'Alternative registry for non-npm users',             emoji: '🔧' },
];

export function DistributionWidget() {
  const ready = CHANNELS.filter(c => c.status === 'ready' || c.status === 'live').length;
  return (
    <div className="p-4 bg-slate-900/80 rounded-xl text-slate-100">
      <h3 className="text-lg font-bold mb-3 text-cyan-300">📦 Distribution · {ready}/{CHANNELS.length} channels</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {CHANNELS.map((c) => (
          <div key={c.name} className="bg-slate-800/50 rounded p-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-lg">{c.emoji}</span>
              <span className="font-mono">{c.name}</span>
            </div>
            <div className={`text-${c.status === 'live' ? 'green' : c.status === 'ready' ? 'amber' : 'slate'}-300 text-[10px]`}>
              ● {c.status}
            </div>
            <div className="text-slate-400 text-[10px] mt-1">{c.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DistributionWidget;
