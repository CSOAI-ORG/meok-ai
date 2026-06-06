"use client";

import { useEffect, useState } from "react";
import { 
  Users, 
  Shield, 
  Zap, 
  Gavel, 
  Flag, 
  Flame, 
  Activity, 
  Database,
  Lock,
  Search,
  Server,
  Terminal,
  Layers,
  ChevronRight,
  ArrowRight,
  Fingerprint,
  Anchor,
  Wind,
  Droplets,
  Network,
  Cpu,
  Brain,
  Settings
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

/**
 * DIGITAL REPUBLIC (Byzantine Master Controller)
 * 
 * Manages the "Digital Republic" of 47 Generals.
 * Features: Elections, Resource Allocation, and Byzantine Fault Tolerance.
 */

const GENERALS_STATUS = [
  { id: 'emperor', name: 'The Emperor', score: 100, votes: 33, status: 'stable' },
  { id: 'druid', name: 'The Druid', score: 94, votes: 31, status: 'stable' },
  { id: 'stonemason', name: 'The Stonemason', score: 88, votes: 28, status: 'tuning' },
  { id: 'hydrologist', name: 'The Hydrologist', score: 92, votes: 29, status: 'stable' },
  { id: 'guardian', name: 'The Guardian', score: 99, votes: 33, status: 'hardened' },
  { id: 'navigator', name: 'The Navigator', score: 72, votes: 21, status: 'alert' },
];

export default function DigitalRepublicPage() {
  const [totalVotes, setTotalVotes] = useState(1551); // 47 * 33 logical seats

  return (
    <div className="p-8 space-y-12 pb-24">
      {/* Republic Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[10px] font-mono text-[#c9a84c] tracking-[0.2em] uppercase">Digital_Republic_v1.0</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">
            Byzantine_Master_Controller
          </h1>
        </div>
        
        <div className="flex gap-4">
           <Surface variant="glass" className="px-6 py-2 border-[#c9a84c]/20 flex flex-col items-end">
              <span className="text-[9px] text-[#c9a84c] font-black uppercase tracking-widest mb-1">Total_Logical_Seats</span>
              <div className="text-xl font-black text-white/90 font-mono tracking-tighter">{totalVotes}</div>
           </Surface>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Senate Chamber (Generals Grid) */}
        <div className="lg:col-span-3 space-y-6">
           <div className="flex items-center justify-between px-2">
              <h2 className="text-sm font-black uppercase tracking-widest text-white/60">Senate_Chamber (47_Generals)</h2>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#2d9b8a] animate-pulse" />
                 <span className="text-[9px] font-mono text-[#2d9b8a]">QUORUM_ESTABLISHED</span>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GENERALS_STATUS.map(g => (
                <Surface key={g.id} variant="glass" hover className="p-6 border-white/[0.03] flex flex-col gap-4 relative overflow-hidden group">
                   {/* Background Status Glow */}
                   <div className={`absolute top-0 right-0 w-24 h-24 blur-[60px] opacity-10 ${g.status === 'stable' ? 'bg-[#2d9b8a]' : g.status === 'alert' ? 'bg-red-500' : 'bg-[#c9a84c]'}`} />
                   
                   <div className="flex justify-between items-start relative z-10">
                      <div className="p-2 bg-white/05 rounded-lg border border-white/05">
                         <Network className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                      </div>
                      <div className="text-right">
                         <div className="text-[8px] text-white/20 uppercase">Trust_Score</div>
                         <div className={`text-sm font-black font-mono ${g.score > 90 ? 'text-[#2d9b8a]' : g.score > 80 ? 'text-[#c9a84c]' : 'text-red-500'}`}>{g.score}%</div>
                      </div>
                   </div>

                   <div className="relative z-10">
                      <h3 className="text-sm font-black text-white/90 uppercase tracking-widest mb-1 group-hover:text-[#c9a84c] transition-colors">{g.name}</h3>
                      <div className="flex items-center gap-2">
                         <span className="text-[8px] font-mono text-white/20 uppercase tracking-tighter">Seats: {g.votes}/33</span>
                         <div className="h-1 flex-1 bg-white/05 rounded-full overflow-hidden">
                            <div className="h-full bg-white/20" style={{ width: `${(g.votes/33)*100}%` }} />
                         </div>
                      </div>
                   </div>

                   <div className="pt-4 flex justify-between items-center relative z-10">
                      <div className={`text-[7px] font-black uppercase px-2 py-0.5 rounded border ${g.status === 'stable' ? 'border-[#2d9b8a]/20 text-[#2d9b8a]' : 'border-[#c9a84c]/20 text-[#c9a84c]'}`}>
                         {g.status}
                      </div>
                      <button className="p-1 hover:bg-white/05 rounded transition-colors">
                         <Settings className="w-3 h-3 text-white/10 group-hover:text-white" />
                      </button>
                   </div>
                </Surface>
              ))}
              
              {/* Locked Slots */}
              {[...Array(3)].map((_, i) => (
                <Surface key={i} variant="glass" className="p-6 border-white/[0.01] opacity-20 flex flex-col items-center justify-center gap-2 border-dashed">
                   <Lock className="w-4 h-4 text-white/20" />
                   <span className="text-[8px] font-mono uppercase tracking-[0.2em]">SLOT_{7+i}_LOCKED</span>
                </Surface>
              ))}
           </div>
        </div>

        {/* Master Commands */}
        <div className="space-y-6">
           <Surface variant="neo" className="p-8 border-[#c9a84c]/05 space-y-6">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#c9a84c] uppercase">Master_Directives</h3>
              
              <div className="space-y-4">
                 <button className="w-full py-3 bg-[#c9a84c] text-[#0d0c18] text-[9px] font-black tracking-[0.2em] uppercase rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2">
                    <Gavel className="w-3.5 h-3.5" />
                    CONVENE_SUPREME_COURT
                 </button>
                 <button className="w-full py-3 bg-white/05 border border-white/10 text-white/80 text-[9px] font-black tracking-[0.2em] uppercase rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Flag className="w-3.5 h-3.5" />
                    TRIGGER_ELECTION_CYCLE
                 </button>
                 <button className="w-full py-3 bg-red-500/10 border border-red-500/20 text-red-500 text-[9px] font-black tracking-[0.2em] uppercase rounded-xl hover:bg-red-500/20 transition-all flex items-center justify-center gap-2">
                    <Zap className="w-3.5 h-3.5" />
                    SUSPEND_ROGUE_GEN
                 </button>
              </div>
           </Surface>

           <Surface variant="glass" className="p-8 border-white/[0.02] space-y-6">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Consensus_Telemetry</h3>
              
              <div className="space-y-4">
                 <div className="flex justify-between items-end">
                    <span className="text-[9px] text-white/40 uppercase tracking-tighter">BFT_Tolerance</span>
                    <span className="text-lg font-black text-[#2d9b8a] font-mono">11/33</span>
                 </div>
                 <div className="h-1 w-full bg-white/05 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 to-[#2d9b8a] w-[66%]" />
                 </div>
                 <p className="text-[8px] text-white/20 italic leading-relaxed">
                    Byzantine Fault Tolerance ensures the Republic continues even if 1/3rd of Generals are compromised or hallucinating.
                 </p>
              </div>
           </Surface>
        </div>
      </div>
    </div>
  );
}
