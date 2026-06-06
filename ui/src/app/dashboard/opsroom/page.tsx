"use client";

import { useEffect, useState } from "react";
import { 
  Monitor, 
  Activity, 
  Layers, 
  Network, 
  Shield, 
  Zap, 
  PieChart, 
  BarChart, 
  Smartphone,
  Server,
  Terminal,
  Cpu,
  Eye,
  Settings,
  ChevronRight,
  Sparkles,
  Command
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

/**
 * MEOKCLAW OPSROOM (Cybersyn 2.0)
 * 
 * Inspired by Stafford Beer's Viable System Model (VSM).
 * Provides a real-time "Managerial Cybernetics" view of the Digital Republic.
 */

const VSM_SYSTEMS = [
  { id: 's5', name: 'System_5: Policy', status: 'optimal', load: 12, color: '#c9a84c', desc: 'The Emperor (Ethical Identity & Context)' },
  { id: 's4', name: 'System_4: Intelligence', status: 'active', load: 85, color: '#a78bfa', desc: 'Swarm Agents (Future/External Research)' },
  { id: 's3', name: 'System_3: Control', status: 'optimal', load: 42, color: '#60a5fa', desc: 'Emperor Router (Resource Allocation)' },
  { id: 's2', name: 'System_2: Coordination', status: 'synced', load: 15, color: '#2d9b8a', desc: 'Byzantine Consensus (Conflict Resolution)' },
  { id: 's1', name: 'System_1: Operations', status: 'busy', load: 92, color: '#f87171', desc: '235+ MCP Nodes (Core Task Execution)' },
];

export default function OpsRoomPage() {
  const [activeSystem, setActiveNode] = useState<string | null>(null);

  return (
    <div className="p-8 space-y-12 pb-24">
      {/* Cybersyn Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[10px] font-mono text-[#c9a84c] tracking-[0.2em] uppercase">Cybernetic_Substrate_v2.6</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">
            MEOKCLAW_OpsRoom
          </h1>
        </div>
        
        <div className="flex gap-4">
           <Surface variant="glass" className="px-6 py-2 border-[#c9a84c]/20">
              <div className="text-[9px] text-[#c9a84c] font-black uppercase tracking-widest mb-1">Stability_Index</div>
              <div className="text-xl font-black text-white/90 font-mono italic">0.9997</div>
           </Surface>
        </div>
      </section>

      {/* Main Cybersyn Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        
        {/* VSM Visualization (The Opsroom Wall) */}
        <Surface variant="glass" className="xl:col-span-3 p-10 border-white/[0.03] min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[#0d0c18]">
              {/* Retro scan-line pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />
              
              {/* VSM Hierarchy Visualization */}
              <div className="relative z-10 w-full max-w-4xl flex flex-col gap-8">
                 {VSM_SYSTEMS.map((sys, idx) => (
                   <div 
                     key={sys.id}
                     className="relative flex items-center group cursor-pointer"
                     onMouseEnter={() => setActiveNode(sys.id)}
                   >
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 group-hover:scale-110 shadow-lg"
                        style={{ 
                          borderColor: `${sys.color}40`, 
                          background: activeSystem === sys.id ? `${sys.color}20` : 'transparent',
                          boxShadow: activeSystem === sys.id ? `0 0 24px ${sys.color}30` : 'none'
                        }}
                      >
                         <Layers className="w-6 h-6" style={{ color: sys.color }} />
                      </div>
                      
                      <div className="ml-8 flex-1">
                         <div className="flex justify-between items-end mb-2">
                            <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: sys.color }}>{sys.name}</span>
                            <span className="text-[9px] font-mono text-white/20 uppercase">{sys.status} / {sys.load}% LOAD</span>
                         </div>
                         <div className="h-1 w-full bg-white/05 rounded-full overflow-hidden">
                            <div 
                              className="h-full transition-all duration-1000"
                              style={{ width: `${sys.load}%`, background: sys.color }}
                            />
                         </div>
                      </div>

                      {/* Connection Line */}
                      {idx < VSM_SYSTEMS.length - 1 && (
                        <div className="absolute left-8 top-16 w-0.5 h-8 bg-white/05" />
                      )}
                   </div>
                 ))}
              </div>

              {/* Algedonic Loop Pulse */}
              <div className="absolute top-10 right-10 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                 <span className="text-[9px] font-mono text-red-500 tracking-widest uppercase">Algedonic_Alert: NONE</span>
              </div>
           </div>
        </Surface>

        {/* Cybernetic Controls */}
        <div className="space-y-6">
           <Surface variant="neo" className="p-8 border-[#c9a84c]/05 space-y-6">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#c9a84c] uppercase">System_Viability</h3>
              
              <div className="space-y-4">
                 <div className="p-4 bg-white/05 rounded-xl border border-white/05">
                    <div className="text-[9px] text-white/20 uppercase tracking-widest mb-2">Active_Homeostat</div>
                    <div className="text-lg font-black text-white/90 font-mono tracking-tighter uppercase">{activeSystem || 'SELECT_NODE'}</div>
                 </div>

                 <div className="space-y-3">
                    <p className="text-[10px] text-white/40 leading-relaxed italic">
                       {activeSystem ? VSM_SYSTEMS.find(s => s.id === activeSystem)?.desc : "Hover over a system to inspect cybernetic feedback loops."}
                    </p>
                    <div className="h-px bg-white/05" />
                    <button className="w-full py-2 bg-white/05 hover:bg-white/10 rounded text-[9px] font-bold tracking-widest uppercase transition-colors">
                       Inspect_Feedback_Loop
                    </button>
                 </div>
              </div>
           </Surface>

           <Surface variant="glass" className="p-8 border-white/[0.02] space-y-6">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Economic_Alchemy</h3>
              <p className="text-[10px] text-white/30 italic leading-relaxed">
                 "Logic always gets you to the same place as your competitors." — Rory Sutherland
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#c9a84c]" />
                    <span className="text-[9px] font-bold text-[#c9a84c] uppercase tracking-widest">Alchemical_Filter: ON</span>
                 </div>
                 <button className="w-full py-2 bg-[#c9a84c]/10 text-[#c9a84c] text-[9px] font-black tracking-widest uppercase rounded border border-[#c9a84c]/20">
                    Inject_Irrationality
                 </button>
              </div>
           </Surface>
        </div>
      </div>
    </div>
  );
}
