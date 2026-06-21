'use client'

// MEOK Aquaculture Widget
// Niche use case: sustainable fish farming + AI
// MIT licensed

const DOMAINS = [
  { name: 'Pond monitoring',   desc: 'Water quality (pH, O2, temp) live sensors', emoji: '🌊' },
  { name: 'Feed optimization', desc: 'AI-driven feed timing + quantity',         emoji: '🐟' },
  { name: 'Disease detection',  desc: 'Image recognition of fish health',         emoji: '🔬' },
  { name: 'Growth modeling',    desc: 'Predict yield from sensor data',           emoji: '📈' },
  { name: 'Compliance docs',   desc: 'Auto-generate regulatory reports',          emoji: '📋' },
  { name: 'Market pricing',    desc: 'Live price feeds for optimal selling time', emoji: '💰' },
];

export function AquacultureWidget() {
  return (
    <div className="p-4 bg-slate-900/80 rounded-xl text-slate-100">
      <h3 className="text-lg font-bold mb-3 text-cyan-300">🐟 MEOK Aquaculture · Niche sovereign</h3>
      <p className="text-xs text-slate-400 mb-3">
        Sustainable fish farming + AI. Sovereign substrate. One of 18 hives at 100/100 master stack.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {DOMAINS.map((d) => (
          <div key={d.name} className="bg-slate-800/50 rounded p-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-lg">{d.emoji}</span>
              <span className="font-mono">{d.name}</span>
            </div>
            <div className="text-slate-400 text-[10px] mt-1">{d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AquacultureWidget;
