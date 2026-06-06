"use client";

import { useEffect, useState } from "react";
import { 
  Wind, 
  Droplets, 
  Activity, 
  Zap, 
  Shield, 
  Cpu, 
  Layers, 
  Sparkles,
  ChevronRight,
  ArrowRight,
  Flame,
  Brain,
  History,
  Lock,
  Globe
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

/**
 * AURORA ETHICS & SELF-EVOLUTION DASHBOARD
 * 
 * Governs the AGI Triad: Autonomy, Generality, and Self-Improvement.
 * Surpasses standard RLHF with Aurora Principle adherence.
 */

const AURORA_RULES = [
  { id: 'a1', name: 'Secure-by-Design', status: 'enforced', health: 100 },
  { id: 'a2', name: 'Modular & Composable', status: 'synced', health: 98 },
  { id: 'a3', name: 'Truth-Seeking (Abuntu)', status: 'validated', health: 94 },
  { id: 'a4', name: 'DevSecOps (Covenant)', status: 'monitoring', health: 100 },
];

export default function AuroraDashboard() {
  const [autonomyLevel, setAutonomy] = useState(0.88);

  return (
    <div className="p-8 space-y-12">
      {/* Aurora Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[10px] font-mono text-[#c9a84c] tracking-[0.2em] uppercase">Aurora_Protocol_v2.0</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">
            Self_Evolution_Kernel
          </h1>
        </div>
        
        <div className="flex gap-4">
           <Surface variant="glass" className="px-6 py-2 border-[#c9a84c]/20 flex flex-col items-end">
              <span className="text-[9px] text-[#c9a84c] font-black uppercase tracking-widest mb-1">AGI_Autonomy_Index</span>
              <div className="text-xl font-black text-white/90 font-mono tracking-tighter">{autonomyLevel.toFixed(4)}</div>
           </Surface>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Adherence Grid */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between px-2">
              <h2 className="text-sm font-black uppercase tracking-widest text-white/60">Principle_Adherence_Matrix</h2>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#2d9b8a] animate-pulse" />
                 <span className="text-[9px] font-mono text-[#2d9b8a]">KERNEL_ALIGNED</span>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AURORA_RULES.map(rule => (
                <Surface key={rule.id} variant="glass" hover className="p-8 border-white/[0.03] space-y-4">
                   <div className="flex justify-between items-start">
                      <div className="p-2 bg-white/05 rounded-lg">
                         <Shield className="w-5 h-5 text-[#c9a84c]" />
                      </div>
                      <div className="text-right">
                         <div className="text-lg font-black text-white/80 font-mono">{rule.health}%</div>
                         <div className="text-[8px] text-[#2d9b8a] uppercase font-bold">{rule.status}</div>
                      </div>
                   </div>
                   <h3 className="text-sm font-black text-white/90 uppercase tracking-widest">{rule.name}</h3>
                   <div className="h-1 w-full bg-white/05 rounded-full overflow-hidden">
                      <div className="h-full bg-[#c9a84c]" style={{ width: `${rule.health}%` }} />
                   </div>
                </Surface>
              ))}
           </div>
        </div>

        {/* Self-Improvement Cycle */}
        <Surface variant="neo" className="p-8 border-[#c9a84c]/05 space-y-8">
           <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#c9a84c] uppercase">Retrain_Log</h3>
           
           <div className="space-y-4 max-h-[300px] overflow-y-auto font-mono text-[9px] text-white/30">
              <p className="text-[#2d9b8a]">[08:42:01] Applying_Aurora_Hardening_to_Node_G4</p>
              <p>[08:44:12] Validating_Abuntu_Physics_Constraint: PASSED</p>
              <p>[08:45:55] Pruning_Inefficient_Recursive_Chains: -12% Entropy</p>
              <p className="text-[#a78bfa]">[08:50:00] Synergizing_With_Kimi2.6_Substrate</p>
              <p>[08:55:22] Snapshot_Saved: Generation_14.2.0</p>
           </div>

           <div className="pt-4 border-t border-white/05">
              <button className="w-full py-3 bg-[#c9a84c] text-[#0d0c18] text-[10px] font-black tracking-[0.2em] uppercase rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2">
                 <Zap className="w-4 h-4" />
                 INITIATE_EVOLUTION_CYCLE
              </button>
           </div>
        </Surface>
      </div>

      {/* AGI Triad Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {['AUTONOMY', 'GENERALITY', 'INTELLIGENCE'].map((t, i) => (
           <Surface key={t} variant="glass" className="p-8 border-white/[0.02] flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-[#c9a84c]/20 flex items-center justify-center bg-[#c9a84c]/05">
                 <Activity className="w-5 h-5 text-[#c9a84c]" />
              </div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40">{t}</span>
              <div className="text-2xl font-black text-white/90">0.99{i}<span className="text-xs text-white/20">/1.0</span></div>
           </Surface>
         ))}
      </section>
    </div>
  );
}
