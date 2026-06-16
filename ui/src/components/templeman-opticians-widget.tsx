'use client'

// MEOK Templeman Opticians Widget
// The founder's original business: domiciliary eye care
// MIT licensed

const SERVICES = [
  { name: 'Home eye tests',  desc: 'Domiciliary sight tests for the housebound',   emoji: '🏠' },
  { name: 'Care home visits', desc: 'Eye care for nursing home residents',         emoji: '🏥' },
  { name: 'NHS sight tests', desc: 'Free NHS-funded tests for eligible patients',  emoji: '🇬🇧' },
  { name: 'Glasses fitting',  desc: 'Frames + lenses + adjustments',                emoji: '👓' },
  { name: 'Low vision aid',   desc: 'Magnifiers + reading aids for partial sight',  emoji: '🔍' },
  { name: 'Diabetic screening', desc: 'Diabetic retinopathy screening',            emoji: '🩺' },
];

export function TemplemanOpticiansWidget() {
  return (
    <div className="p-4 bg-slate-900/80 rounded-xl text-slate-100">
      <h3 className="text-lg font-bold mb-3 text-cyan-300">👓 Templeman Opticians · The Founder's Business</h3>
      <p className="text-xs text-slate-400 mb-3">
        Founded by Nicholas Templeman. 100% founder-owned. 6.5-acre UK farm.
        Domiciliary eye care. Care ethics at the heart of MEOK.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {SERVICES.map((s) => (
          <div key={s.name} className="bg-slate-800/50 rounded p-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-lg">{s.emoji}</span>
              <span className="font-mono">{s.name}</span>
            </div>
            <div className="text-slate-400 text-[10px] mt-1">{s.desc}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-2 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-200">
        🏥 MEOK OS v3 started here. Care ethics = sovereign substrate. The dragon protects.
      </div>
    </div>
  );
}

export default TemplemanOpticiansWidget;
