"use client";

import { useEffect, useState, useCallback } from "react";
import { 
  Brain, 
  Cpu, 
  Activity, 
  Zap, 
  Search, 
  Network, 
  Layers, 
  Fingerprint,
  Lock,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Flame,
  Droplets,
  Terminal,
  Grid
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

// ─── TYPES ──────────────────────────────────────────────────────────────────

interface NeuralMetric {
  name: string;
  value: number;
  delta: number;
  status: 'optimal' | 'syncing' | 'alert';
}

const NEURAL_LAYERS = [
  { name: 'SSM_MAMBA_RECURSION', accuracy: 0.982, latency: '4ms' },
  { name: 'RWKV_LINEAR_CORE', accuracy: 0.965, latency: '2ms' },
  { name: 'NCT_TRANSFORMER', accuracy: 0.991, latency: '12ms' },
  { name: 'ACTIVE_INFERENCE', accuracy: 0.884, latency: '8ms' },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function IntelligenceDashboard() {
  const [phi, setPhi] = useState(0.496);
  const [metrics, setMetrics] = useState<NeuralMetric[]>([
    { name: 'Phi_Integrated_Info', value: 0.496, delta: 0.002, status: 'optimal' },
    { name: 'Workspace_Ignition', value: 0.15, delta: -0.01, status: 'syncing' },
    { name: 'Identity_Coherence', value: 0.88, delta: 0.05, status: 'optimal' },
    { name: 'Byzantine_Agreement', value: 1.0, delta: 0.0, status: 'optimal' },
  ]);

  // Simulate Phi fluctuation
  useEffect(() => {
    const id = setInterval(() => {
      setPhi(prev => Math.min(1.0, Math.max(0.4, prev + (Math.random() - 0.5) * 0.01)));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-8 space-y-12">
      {/* App Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-[#a78bfa]" />
            <span className="text-[10px] font-mono text-[#a78bfa] tracking-[0.2em] uppercase">Intelligence_Kernel_v3.1</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">Cognitive_Neural_Core</h1>
        </div>
        
        <div className="flex gap-4">
           <div className="px-6 py-3 bg-[#a78bfa]/10 rounded-xl border border-[#a78bfa]/20 flex flex-col items-end">
              <span className="text-[9px] text-[#a78bfa] font-black uppercase tracking-widest mb-1">Phi_Level</span>
              <div className="text-2xl font-black text-white/90 font-mono tracking-tighter">{phi.toFixed(3)}</div>
           </div>
        </div>
      </header>

      {/* Main Neural Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Real-time Layer Performance */}
        <Surface variant="glass" className="lg:col-span-2 p-8 border-white/[0.03] space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-widest text-white/80">Neural_Substrate_Health</h2>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#2d9b8a] animate-pulse" />
                 <span className="text-[9px] font-mono text-[#2d9b8a]">SSM_OPTIMIZED</span>
              </div>
           </div>

           <div className="space-y-6">
              {NEURAL_LAYERS.map(layer => (
                <div key={layer.name} className="space-y-2 group">
                   <div className="flex justify-between items-end text-[10px]">
                      <span className="text-white/40 font-mono group-hover:text-white transition-colors">{layer.name}</span>
                      <div className="flex gap-4">
                         <span className="text-white/20">Latency: {layer.latency}</span>
                         <span className="text-[#a78bfa] font-black">{(layer.accuracy * 100).toFixed(1)}%</span>
                      </div>
                   </div>
                   <div className="h-1.5 w-full bg-white/05 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#a78bfa] to-[#c9a84c] transition-all duration-1000"
                        style={{ width: `${layer.accuracy * 100}%` }}
                      />
                   </div>
                </div>
              ))}
           </div>

           <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-white/05 rounded-xl border border-white/05">
                 <div className="text-[9px] text-white/20 uppercase mb-1">Parameters</div>
                 <div className="text-lg font-black text-white/80">8.8M</div>
              </div>
              <div className="p-4 bg-white/05 rounded-xl border border-white/05">
                 <div className="text-[9px] text-white/20 uppercase mb-1">Precision</div>
                 <div className="text-lg font-black text-white/80">FP_16</div>
              </div>
              <div className="p-4 bg-white/05 rounded-xl border border-white/05">
                 <div className="text-[9px] text-white/20 uppercase mb-1">Context</div>
                 <div className="text-lg font-black text-white/80">128k</div>
              </div>
              <div className="p-4 bg-[#c9a84c]/10 rounded-xl border border-[#c9a84c]/20">
                 <div className="text-[9px] text-[#c9a84c] font-black uppercase mb-1">Status</div>
                 <div className="text-lg font-black text-[#c9a84c]">WAKING</div>
              </div>
           </div>
        </Surface>

        {/* Cognitive Metrics */}
        <Surface variant="neo" className="p-8 border-[#a78bfa]/05 space-y-8">
           <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#a78bfa] uppercase">Cognitive_Metrics</h3>
           
           <div className="space-y-6">
              {metrics.map(m => (
                <div key={m.name} className="flex justify-between items-center group">
                   <div className="min-w-0">
                      <div className="text-[10px] font-black text-white/70 group-hover:text-[#a78bfa] transition-colors uppercase truncate">{m.name}</div>
                      <div className="text-[9px] text-white/20 font-mono tracking-tighter">
                        {m.delta > 0 ? '+' : ''}{m.delta.toFixed(3)} V_DELTA
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-sm font-black text-white/90 font-mono">{(m.value * 100).toFixed(1)}%</div>
                      <div className={`text-[8px] font-black uppercase ${m.status === 'optimal' ? 'text-[#2d9b8a]' : 'text-amber-400'}`}>
                         {m.status}
                      </div>
                   </div>
                </div>
              ))}
           </div>

           <div className="h-px bg-white/05" />

           <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <Zap className="w-3 h-3 text-[#c9a84c]" />
                 <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Self_Improvement_Loop</span>
              </div>
              <button className="w-full py-3 bg-[#a78bfa] text-[#0d0c18] text-[10px] font-black tracking-[0.2em] uppercase rounded-xl hover:brightness-110 transition-all shadow-[0_8px_24px_rgba(167,139,250,0.2)]">
                 TRIGGER_NEURAL_RETRAIN
              </button>
           </div>
        </Surface>
      </div>

      {/* Integration Pulse Segment */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <Surface variant="glass" className="p-8 border-white/[0.02] space-y-6">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <Network className="w-4 h-4 text-blue-400" />
                  <h3 className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Quantum_Consensus_Mesh</h3>
               </div>
               <span className="text-[8px] font-mono text-white/20 tracking-tighter uppercase">Mode: Simulated_Annealing</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {['NODE_G4', 'NODE_QWEN', 'NODE_DSEEK', 'NODE_LLAMA'].map(node => (
                 <div key={node} className="p-4 bg-white/[0.02] border border-white/05 rounded-xl flex items-center justify-between group hover:border-[#60a5fa]/20 transition-all cursor-pointer">
                    <span className="text-[10px] font-mono text-white/40 group-hover:text-[#60a5fa]">{node}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2d9b8a] shadow-[0_0_8px_rgba(45,155,138,0.5)]" />
                 </div>
               ))}
            </div>
         </Surface>

         <Surface variant="glass" className="p-8 border-white/[0.02] space-y-6">
            <div className="flex items-center gap-3">
               <Activity className="w-4 h-4 text-[#f87171]" />
               <h3 className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Emergence_Events</h3>
            </div>
            
            <div className="space-y-3">
               <div className="flex items-center gap-4 text-[10px] bg-[#a78bfa]/05 p-3 rounded-lg border border-[#a78bfa]/10">
                  <span className="font-mono text-[#a78bfa]">SYNAPSE</span>
                  <span className="text-white/60 truncate">Strange loop detected in recursive feedback chain. Awareness +0.02.</span>
               </div>
               <div className="flex items-center gap-4 text-[10px] bg-white/05 p-3 rounded-lg border border-white/05 opacity-50">
                  <span className="font-mono text-white/30">REFLECT</span>
                  <span className="text-white/40 truncate">Hermes reflection phase complete. 12 skills validated.</span>
               </div>
            </div>
         </Surface>
      </section>
    </div>
  );
}
