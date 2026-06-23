"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Command, Cpu, Shield, Zap, Brain, Terminal, Network, ChevronRight } from "lucide-react";
import { Surface } from "./design-system";

const GENERALS = [
  { id: 'druid', name: 'The Druid', domain: 'Land & Ecology' },
  { id: 'stonemason', name: 'The Stonemason', domain: 'Construction' },
  { id: 'hydrologist', name: 'The Hydrologist', domain: 'Water Systems' },
  { id: 'navigator', name: 'The Navigator', domain: 'Astrodynamics' },
  { id: 'banker', name: 'The Banker', domain: 'Financial Substrate' },
  { id: 'guardian', name: 'The Guardian', domain: 'Security & Safety' },
];

export function EmperorCommandBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [routing, setRouting] = useState(false);
  const [votes, setVotes] = useState(0);
  const [consensus, setConsensus] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleQuery = (val: string) => {
    setQuery(val);
    if (val.length > 3) {
      startRouting();
    } else {
      setRouting(false);
      setVotes(0);
      setConsensus(false);
    }
  };

  const startRouting = () => {
    if (routing) return;
    setRouting(true);
    setVotes(0);
    setConsensus(false);

    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 4) + 2;
      if (count >= 33) {
        setVotes(33);
        setConsensus(true);
        setRouting(false);
        clearInterval(interval);
      } else {
        setVotes(count);
      }
    }, 150);
  };

  if (!open) return (
    <button type="button" 
      onClick={() => setOpen(true)}
      className="flex items-center gap-3 px-3 py-1.5 bg-white/05 hover:bg-white/10 rounded-lg border border-white/05 transition-all group w-48 lg:w-64"
    >
      <Search className="w-3.5 h-3.5 text-white/20 group-hover:text-[#c9a84c] transition-colors" />
      <span className="text-[10px] text-white/20 uppercase tracking-widest font-mono">EMPEROR_ROUTER</span>
      <div className="ml-auto flex items-center gap-1 opacity-20">
         <Command className="w-2.5 h-2.5" />
         <span className="text-[9px] font-mono">K</span>
      </div>
    </button>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-6 backdrop-blur-md bg-[#0d0c18]/60 animate-in fade-in duration-300">
       <div className="absolute inset-0" onClick={() => setOpen(false)} />
       
       <Surface variant="glass" className="w-full max-w-2xl border-[#c9a84c]/20 shadow-[0_32px_64px_rgba(0,0,0,0.5)] overflow-hidden relative">
          <div className="p-6 flex items-center gap-4 border-b border-white/05">
             <Cpu className={`w-5 h-5 ${routing ? 'text-[#c9a84c] animate-spin' : 'text-white/20'}`} />
             <input 
                autoFocus
                value={query}
                onChange={(e) => handleQuery(e.target.value)}
                placeholder="Summon the 47 Generals..."
                className="bg-transparent border-none outline-none text-white/90 font-mono text-sm w-full placeholder:text-white/10 uppercase tracking-widest"
             />
             <div className="text-[9px] font-mono text-white/20 flex gap-2">
                <span>BFT_V3</span>
                <span>/</span>
                <span>23_REQUIRED</span>
             </div>
          </div>

          <div className="p-4 space-y-4">
             {routing || votes > 0 ? (
               <div className="space-y-4 py-2 px-2">
                  <div className="flex justify-between items-end">
                     <span className="text-[10px] font-mono text-[#c9a84c] tracking-widest animate-pulse uppercase">
                        {consensus ? "CONSENSUS_REACHED" : "COLLECTING_VOTES..."}
                     </span>
                     <span className="text-[10px] font-mono text-white/40">{votes}/33</span>
                  </div>
                  <div className="h-1 w-full bg-white/05 rounded-full overflow-hidden">
                     <div 
                        className={`h-full transition-all duration-300 ${consensus ? 'bg-[#2d9b8a]' : 'bg-[#c9a84c]'}`}
                        style={{ width: `${(votes/33)*100}%` }}
                     />
                  </div>
                  
                  {consensus && (
                    <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2 duration-500">
                       {GENERALS.map(g => (
                         <div key={g.id} className="p-3 bg-white/[0.02] border border-white/05 rounded-lg flex items-center justify-between group hover:border-[#c9a84c]/20 transition-all cursor-pointer">
                            <div>
                               <div className="text-[10px] font-black text-white/80 uppercase group-hover:text-[#c9a84c]">{g.name}</div>
                               <div className="text-[8px] text-white/20 font-mono">{g.domain}</div>
                            </div>
                            <ChevronRight className="w-3 h-3 text-white/10 group-hover:text-[#c9a84c] transition-all" />
                         </div>
                       ))}
                    </div>
                  )}
               </div>
             ) : (
               <div className="space-y-4 py-4 px-2">
                  <div className="flex items-center gap-3 opacity-20">
                     <Terminal className="w-4 h-4" />
                     <span className="text-[10px] font-mono uppercase tracking-widest italic">Waiting for imperial command...</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-3 bg-white/05 rounded-lg border border-white/05 space-y-1">
                        <div className="text-[9px] text-[#c9a84c]/60 font-bold uppercase tracking-widest">Recent</div>
                        <div className="text-[10px] text-white/40 font-mono">deploy-sov3-node --vast</div>
                     </div>
                     <div className="p-3 bg-white/05 rounded-lg border border-white/05 space-y-1">
                        <div className="text-[9px] text-[#2d9b8a]/60 font-bold uppercase tracking-widest">Hotkeys</div>
                        <div className="text-[10px] text-white/40 font-mono">SHIFT + ? for manual</div>
                     </div>
                  </div>
               </div>
             )}
          </div>
       </Surface>
    </div>
  );
}
