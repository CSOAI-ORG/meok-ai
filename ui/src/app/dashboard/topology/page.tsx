"use client";

import { useEffect, useState } from "react";
import { 
  Network, 
  Cpu, 
  Brain, 
  Shield, 
  Zap, 
  Activity, 
  Globe, 
  Database,
  Lock,
  Search,
  Server,
  Terminal,
  Layers,
  Flame,
  Droplets,
  Anchor
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

// ─── TOPOLOGY CONFIG ─────────────────────────────────────────────────────────

const LAYERS = [
  { id: 'l4', name: 'EMERGENCE', desc: 'MEOKCLAW OS / Digital Republic / Living Entity', color: '#c9a84c' },
  { id: 'l3', name: 'EMBODIMENT', desc: 'SO-101 / Active Inference / Marangoni Flow', color: '#a78bfa' },
  { id: 'l2', name: 'INTELLIGENCE', desc: '47 Generals / BFT / M2 Quantum / x402 Finance', color: '#60a5fa' },
  { id: 'l1', name: 'KINETICS', desc: '250+ MCPs / Universal Gateway / Orbital Sync', color: '#2d9b8a' },
  { id: 'l0', name: 'SUBSTRATE', desc: 'seL4 / Abuntu Physical Laws / Vast.ai GPUs', color: '#f87171' },
];

const ASSETS = [
  { id: 'a1', name: 'Abuntu_Wisdom', category: 'DATA_MOAT', status: 'CODIFIED' },
  { id: 'a2', name: 'Marangoni_Cooling', category: 'IP_PATENT', status: 'READY' },
  { id: 'a3', name: 'BFT_Consensus', category: 'PROTOCOL', status: 'ACTIVE' },
  { id: 'a4', name: 'Sovereign_RAG', category: 'MEMORY', status: 'SYNCED' },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function TopologyPage() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="p-8 space-y-12 pb-24">
      {/* Header */}
      <section className="space-y-2">
        <div className="flex items-center gap-3">
          <Network className="w-4 h-4 text-[#c9a84c]" />
          <span className="text-[10px] font-mono text-[#c9a84c] tracking-[0.3em] uppercase">Living_Topology_v1.1</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">
          System_Architecture_Graph
        </h1>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Visual Topology Graph (Stylized) */}
        <Surface variant="glass" className="lg:col-span-2 p-10 border-white/[0.03] min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[#0d0c18]">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201,168,76,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
              
              {/* Radial Layers */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                 {[...LAYERS].reverse().map((layer, i) => (
                   <div 
                     key={layer.id}
                     className="absolute rounded-full border border-dashed transition-all duration-700"
                     style={{ 
                       width: 140 + (i * 100), 
                       height: 140 + (i * 100), 
                       borderColor: `${layer.color}20`,
                       borderWidth: '1px'
                     }}
                   />
                 ))}
              </div>

              {/* Connecting Lines (Decorative) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
                 <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#c9a84c" strokeWidth="0.5" />
                 <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#c9a84c" strokeWidth="0.5" />
                 <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#c9a84c" strokeWidth="0.5" />
                 <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#c9a84c" strokeWidth="0.5" />
              </svg>

              {/* Core Kernel Node */}
              <div 
                className="relative z-10 w-20 h-20 rounded-3xl bg-[#c9a84c]/10 border-2 border-[#c9a84c]/40 flex items-center justify-center shadow-[0_0_40px_rgba(201,168,76,0.2)] animate-pulse cursor-pointer group"
                onMouseEnter={() => setActiveNode('KERNEL')}
              >
                 <Brain className="w-8 h-8 text-[#c9a84c]" />
                 <div className="absolute -bottom-8 whitespace-nowrap text-[10px] font-black tracking-widest text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity uppercase">SOV3_KERNEL</div>
              </div>

              {/* Layer Nodes */}
              {LAYERS.map((layer, i) => {
                const angle = (i / LAYERS.length) * Math.PI * 2;
                const dist = 180 + (i * 20);
                return (
                  <div 
                    key={layer.id}
                    className="absolute z-10 p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center cursor-pointer hover:border-white/40 transition-all group"
                    style={{ 
                      left: `calc(50% + ${Math.cos(angle) * dist}px)`, 
                      top: `calc(50% + ${Math.sin(angle) * dist}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onMouseEnter={() => setActiveNode(layer.id)}
                  >
                     <Layers className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                     <div className="absolute -top-6 whitespace-nowrap text-[8px] font-mono tracking-widest text-white/20 opacity-0 group-hover:opacity-100 transition-opacity uppercase">{layer.name}</div>
                  </div>
                )
              })}

              {/* Swarm Pulse */}
              <div className="absolute bottom-8 left-8 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                 <span className="text-[9px] font-mono text-red-500 tracking-widest">SWARM_SCAN_ACTIVE [PID_53249]</span>
              </div>
           </div>
        </Surface>

        {/* Info Panel */}
        <div className="space-y-6">
           <Surface variant="neo" className="p-8 border-[#c9a84c]/05 space-y-6">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#c9a84c] uppercase">Node_Intelligence</h3>
              
              <div className="space-y-4">
                 <div className="p-4 bg-white/05 rounded-xl border border-white/05">
                    <div className="text-[9px] text-white/20 uppercase tracking-widest mb-2">Selected_Node</div>
                    <div className="text-lg font-black text-white/90 font-mono tracking-tighter">{activeNode || 'READY_SYSTEM'}</div>
                 </div>

                 <div className="h-px bg-white/05" />

                 <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px]">
                       <span className="text-white/40">Status</span>
                       <span className="font-mono text-[#2d9b8a]">OPERATIONAL</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                       <span className="text-white/40">Throughput</span>
                       <span className="font-mono text-white/60">1.2k tps</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                       <span className="text-white/40">BFT_Consensus</span>
                       <span className="font-mono text-white/60">33/33 Voted</span>
                    </div>
                 </div>
              </div>
           </Surface>

           <Surface variant="glass" className="p-8 border-white/[0.02] space-y-6">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">IP_Asset_Ledger</h3>
              
              <div className="space-y-3">
                 {ASSETS.map(asset => (
                   <div key={asset.id} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg border border-white/05 group hover:border-[#c9a84c]/20 transition-all cursor-pointer">
                      <div>
                         <div className="text-[10px] font-black text-white/80 group-hover:text-[#c9a84c] uppercase">{asset.name}</div>
                         <div className="text-[8px] text-white/20 font-mono tracking-tighter">{asset.category}</div>
                      </div>
                      <div className="px-2 py-0.5 rounded-full bg-white/05 border border-white/05 text-[7px] font-black text-[#2d9b8a] uppercase">{asset.status}</div>
                   </div>
                 ))}
              </div>

              <button className="w-full py-2 bg-white/05 hover:bg-white/10 rounded-lg text-[9px] font-bold tracking-widest uppercase transition-colors">
                 Export_Asset_Manifest
              </button>
           </Surface>
        </div>
      </div>

      {/* Terminal Output Segment */}
      <section className="space-y-4">
         <div className="flex items-center justify-between px-2">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Kernel_Audit_Log</h3>
            <span className="text-[8px] font-mono text-white/20">AUTO_STREAM_ON</span>
         </div>
         <Surface variant="deep" className="p-6 rounded-2xl border border-white/05 font-mono text-[10px] leading-relaxed space-y-2 max-h-48 overflow-y-auto">
            <p className="text-white/20">[19:22:10] Initiating MEOKCLAW_OS_V1.1...</p>
            <p className="text-white/40">[19:45:32] Synced LIVING_TOPOLOGY to SOV3 Kernel Memory.</p>
            <p className="text-[#c9a84c]">[20:12:05] ABUNTU_LEGACY_ENGINEERING codified as MCP node.</p>
            <p className="text-[#a78bfa]">[20:55:18] MARANGONI_FLOW_COOLING codified as Thermal MCP.</p>
            <p className="text-white/40">[21:10:42] Universal Gateway proxy routes updated for 235+ nodes.</p>
            <p className="text-[#2d9b8a]">[21:32:00] MISSION_CONTROL hub online.</p>
            <div className="flex items-center gap-2">
               <span className="text-[#c9a84c] animate-pulse">_</span>
            </div>
         </Surface>
      </section>
    </div>
  );
}
