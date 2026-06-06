"use client";

import { useEffect, useState } from "react";
import { 
  Eye, 
  Wind, 
  Droplets, 
  Activity, 
  Zap, 
  Shield, 
  Cpu, 
  Layers, 
  Compass,
  ChevronRight,
  ArrowRight,
  Flame,
  Brain,
  History
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

/**
 * WORLD ACTION MODEL (WAM) DASHBOARD
 * 
 * Implements Predictive State Estimation based on May 2026 breakthroughs.
 * Focuses on Active Inference (Surprise Minimization) for Fen-land infrastructure.
 */

const PREDICTIVE_NODES = [
  { id: 'n1', name: 'Sutton_St_James_Drainage', metric: 'Flow_Velocity', current: 0.12, predicted: 0.15, confidence: 0.94, unit: 'm/s' },
  { id: 'n2', name: 'Actuator_Marangoni_Flux', metric: 'Thermal_Gradient', current: 4.2, predicted: 5.1, confidence: 0.88, unit: 'K/mm' },
  { id: 'n3', name: 'Aquaculture_Ph_Trend', metric: 'Chemical_Balance', current: 7.4, predicted: 7.2, confidence: 0.91, unit: 'ph' },
];

export default function PredictiveDashboard() {
  const [surprise, setSurprise] = useState(0.042);

  // Simulate surprise minimization
  useEffect(() => {
    const id = setInterval(() => {
      setSurprise(prev => Math.max(0.001, prev - 0.001 + (Math.random() - 0.4) * 0.005));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-8 space-y-12">
      {/* WAM Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#2d9b8a]" />
            <span className="text-[10px] font-mono text-[#2d9b8a] tracking-[0.2em] uppercase">Predictive_Kernel_v1.0</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">
            World_Action_Model
          </h1>
        </div>
        
        <div className="flex gap-4">
           <Surface variant="glass" className="px-6 py-2 border-[#2d9b8a]/20 flex flex-col items-end">
              <span className="text-[9px] text-[#2d9b8a] font-black uppercase tracking-widest mb-1">Surprise_Index (Free_Energy)</span>
              <div className="text-xl font-black text-white/90 font-mono tracking-tighter">{surprise.toFixed(4)}</div>
           </Surface>
        </div>
      </header>

      {/* Predictive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Active Inference Stream */}
        <Surface variant="glass" className="lg:col-span-2 p-8 border-white/[0.03] space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-widest text-white/80">Anticipatory_Inference_Stream</h2>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#2d9b8a] animate-pulse" />
                 <span className="text-[9px] font-mono text-[#2d9b8a]">WAM_ACTIVE</span>
              </div>
           </div>

           <div className="space-y-8">
              {PREDICTIVE_NODES.map(node => (
                <div key={node.id} className="space-y-4 group">
                   <div className="flex justify-between items-end">
                      <div>
                         <div className="text-[10px] font-black text-white/90 uppercase tracking-widest group-hover:text-[#2d9b8a] transition-colors">{node.name}</div>
                         <div className="text-[8px] text-white/20 font-mono">{node.metric}</div>
                      </div>
                      <div className="text-right">
                         <div className="text-[9px] text-white/20 uppercase">Confidence</div>
                         <div className="text-sm font-black text-[#2d9b8a] font-mono">{(node.confidence * 100).toFixed(1)}%</div>
                      </div>
                   </div>
                   
                   <div className="relative h-12 w-full bg-white/[0.02] rounded-lg border border-white/05 flex items-center px-4 overflow-hidden">
                      {/* Current vs Predicted Visualization */}
                      <div className="flex-1 flex items-center gap-6">
                         <div className="space-y-1">
                            <span className="text-[8px] text-white/20 uppercase block">Current</span>
                            <span className="text-lg font-black text-white/80 font-mono">{node.current}<span className="text-[10px] ml-1 opacity-20">{node.unit}</span></span>
                         </div>
                         <ArrowRight className="w-4 h-4 text-white/10" />
                         <div className="space-y-1">
                            <span className="text-[8px] text-[#2d9b8a] uppercase block">Predicted (+2h)</span>
                            <span className="text-lg font-black text-[#2d9b8a] font-mono">{node.predicted}<span className="text-[10px] ml-1 opacity-40">{node.unit}</span></span>
                         </div>
                      </div>
                      
                      {/* Trend line (mini) */}
                      <div className="absolute right-4 bottom-0 top-0 flex items-center opacity-20">
                         <Activity className="w-12 h-12 text-[#2d9b8a]" />
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </Surface>

        {/* Action Policies */}
        <Surface variant="neo" className="p-8 border-[#2d9b8a]/05 space-y-8">
           <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#2d9b8a] uppercase">Anticipatory_Policies</h3>
           
           <div className="space-y-6">
              <div className="p-4 bg-white/[0.02] border border-white/05 rounded-xl space-y-3 group hover:border-[#2d9b8a]/20 transition-all cursor-pointer">
                 <div className="flex items-center gap-3">
                    <Wind className="w-4 h-4 text-[#2d9b8a]" />
                    <span className="text-[10px] font-black text-white/80 uppercase">Drainage_Pre-Thrust</span>
                 </div>
                 <p className="text-[9px] text-white/30 leading-relaxed">
                    Predicted rainfall at LND_HQ exceeds absorption capacity. Pre-emptively adjusting trapezoidal flow vectors by +0.0015.
                 </p>
                 <div className="flex justify-between items-center pt-2">
                    <span className="text-[8px] font-mono text-white/20">STATE: PENDING_VOTE</span>
                    <button className="text-[9px] font-black text-[#2d9b8a] uppercase tracking-widest">Execute</button>
                 </div>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/05 rounded-xl space-y-3 group hover:border-[#2d9b8a]/20 transition-all cursor-pointer opacity-50">
                 <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="text-[10px] font-black text-white/80 uppercase">Actuator_Heat_Sync</span>
                 </div>
                 <p className="text-[9px] text-white/30 leading-relaxed">
                    Load-spike predicted on robotic actuator limb. Triggering Marangoni flow pulse to reject 42W excess heat.
                 </p>
                 <div className="flex justify-between items-center pt-2">
                    <span className="text-[8px] font-mono text-white/20">STATE: STANDBY</span>
                    <History className="w-3 h-3 text-white/10" />
                 </div>
              </div>
           </div>

           <button className="w-full py-3 bg-[#2d9b8a] text-[#0d0c18] text-[10px] font-black tracking-[0.2em] uppercase rounded-xl hover:brightness-110 transition-all shadow-[0_8px_24px_rgba(45,155,138,0.2)]">
              Recalibrate_World_Model
           </button>
        </Surface>
      </div>
    </div>
  );
}
