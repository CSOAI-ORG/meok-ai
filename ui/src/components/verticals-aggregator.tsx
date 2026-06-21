'use client'

// MEOK Verticals Aggregator
// 14 vertical surfaces + 5-day-12 surfaces
// MIT licensed

const VERTICALS = [
  { id: 1,  name: 'Lawyers',         url: 'meok-os-v3/lawyers-v3.html',     emoji: '⚖️',  tier: 'Free for verified' },
  { id: 2,  name: 'Consultants',     url: 'meok-os-v3/consultants-v3.html', emoji: '💼', tier: 'Free for verified' },
  { id: 3,  name: 'Agencies',        url: 'meok-os-v3/agencies-v3.html',    emoji: '🎨', tier: 'Free for verified' },
  { id: 4,  name: 'Journalists',     url: 'meok-os-v3/journalists-v3.html', emoji: '📰', tier: 'Free for verified' },
  { id: 5,  name: 'Nonprofits',      url: 'meok-os-v3/nonprofits-v3.html',  emoji: '🤝', tier: 'Free for verified' },
  { id: 6,  name: 'Churches',        url: 'meok-os-v3/churches-v3.html',    emoji: '⛪', tier: 'Free for verified' },
  { id: 7,  name: 'Schools',         url: 'meok-os-v3/schools-v3.html',     emoji: '🏫', tier: 'Free for verified' },
  { id: 8,  name: 'Healthcare',      url: 'meok-os-v3/healthcare-v3.html',  emoji: '🏥', tier: 'Free for verified' },
  { id: 9,  name: 'Regulators',      url: 'meok-os-v3/regulators-v3.html',  emoji: '⚖️', tier: 'Free for verified' },
  { id: 10, name: 'Family',          url: 'meok-os-v3/family-v3.html',      emoji: '🏡', tier: 'Sovereign' },
  { id: 11, name: 'Students',        url: 'meok-os-v3/students-v3.html',    emoji: '👨‍🎓', tier: 'Free' },
  { id: 12, name: 'Academic',        url: 'meok-os-v3/academic-v3.html',    emoji: '🎓', tier: 'Free' },
  { id: 13, name: 'Enterprise',      url: 'meok-os-v3/enterprise-v3.html',  emoji: '🏢', tier: '£500-5K/mo' },
  { id: 14, name: 'Government',      url: 'meok-os-v3/government-v3.html',  emoji: '🏛️', tier: 'Custom' },
];

export function VerticalsAggregator() {
  return (
    <div className="p-4 bg-slate-900/80 rounded-xl text-slate-100">
      <h3 className="text-lg font-bold mb-3 text-violet-300">🏢 14 Verticals · Free for verified</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {VERTICALS.map((v) => (
          <a key={v.id} href={v.url}
             className="bg-slate-800/50 rounded p-2 text-xs hover:bg-slate-700/50 block">
            <div className="flex items-center gap-2">
              <span className="text-lg">{v.emoji}</span>
              <span className="font-mono truncate">{v.name}</span>
            </div>
            <div className="text-slate-400 text-[10px]">{v.tier}</div>
          </a>
        ))}
      </div>
      <div className="mt-3 p-2 bg-violet-500/10 border border-violet-500/30 rounded text-xs text-violet-200">
        🏢 14 verticals. 9 free for verified. Sovereign. MIT.
      </div>
    </div>
  );
}

export default VerticalsAggregator;
