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
  Flame,
  ChevronRight,
  ArrowRight,
  History,
  Box,
  Compass,
  Thermometer,
  Anchor
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

/**
 * ENVIRONMENTAL DIGITAL TWIN (Abuntu Physical Substrate)
 * 
 * Synchronizes the MEOKCLAW brain with physical Fen-land infrastructure.
 * Features: Hydraulic Flow, Lime Kiln Thermal States, Marangoni Pulse Tracking.
 */

const SENSOR_NODES = [
  { id: 'h1', name: 'Main_Fen_Drain_South', type: 'hydraulic', value: 0.12, status: 'nominal', unit: 'm/s' },
  { id: 't1', name: 'Kiln_Alpha_Core', type: 'thermal', value: 894, status: 'stable', unit: '°C' },
  { id: 'm1', name: 'Actuator_01_Cooling', type: 'marangoni', value: 104, status: 'active', unit: 'mm/s' },
];

export default function DigitalTwinPage() {
  const [twinCoherence, setCoherence] = useState(0.9984);

  return (
    <div className="p-8 space-y-12 pb-24">
      {/* Twin Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Box className="w-4 h-4 text-[#2d9b8a]" />
            <span className="text-[10px] font-mono text-[#2d9b8a] tracking-[0.2em] uppercase">Physical_Substrate_Sync_v1.0</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">
            Environmental_Digital_Twin
          </h1>
        </div>
        
        <div className="flex gap-4">
           <Surface variant="glass" className="px-6 py-2 border-[#2d9b8a]/20 flex flex-col items-end">
              <span className="text-[9px] text-[#2d9b8a] font-black uppercase tracking-widest mb-1">Twin_Coherence</span>
              <div className="text-xl font-black text-white/90 font-mono italic">0.9984</div>
           </Surface>
        </div>
      </section>

      {/* Simulation Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Real-time Sensor Map */}
        <Surface variant="glass" className="xl:col-span-2 p-10 border-white/[0.03] min-h-[500px] relative overflow-hidden flex flex-col items-center justify-center">
           <div className="absolute inset-0 bg-[#0d0c18] opacity-50" />
           
           {/* Abstract Topology Grid (Simulation Wall) */}
           <div className="relative z-10 w-full max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-12">
              {SENSOR_NODES.map(node => (
                <div key={node.id} className="flex flex-col items-center gap-6 group">
                   <div className="w-24 h-24 rounded-full border border-white/05 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-110">
                      <div className="absolute inset-0 rounded-full border border-[#2d9b8a]/20 animate-ping opacity-20" />
                      {node.type === 'hydraulic' && <Droplets className="w-8 h-8 text-[#60a5fa]" />}
                      {node.type === 'thermal' && <Flame className="w-8 h-8 text-[#f87171]" />}
                      {node.type === 'marangoni' && <Zap className="w-8 h-8 text-amber-400" />}
                   </div>
                   <div className="text-center space-y-1">
                      <div className="text-[9px] font-black tracking-widest uppercase text-white/40">{node.name}</div>
                      <div className="text-lg font-black text-white/80 font-mono">{node.value}<span className="text-xs ml-1 opacity-20">{node.unit}</span></div>
                   </div>
                </div>
              ))}
           </div>

           {/* Algedonic Loop Pulse */}
           <div className="absolute top-10 right-10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2d9b8a] animate-pulse" />
              <span className="text-[9px] font-mono text-[#2d9b8a] tracking-widest uppercase">ALGEDONIC_STATE: EQUILIBRIUM</span>
           </div>
        </Surface>

        {/* Abuntu Controls */}
        <div className="space-y-6">
           <Surface variant="neo" className="p-8 border-[#c9a84c]/05 space-y-8">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#c9a84c] uppercase">Abuntu_Material_Controls</h3>
              
              <div className="space-y-6">
                 <div className="p-4 bg-white/05 rounded-xl border border-white/05 space-y-3">
                    <div className="flex justify-between items-center">
                       <span className="text-[9px] text-white/40 uppercase font-black">Hydraulic_Flow_Vector</span>
                       <span className="text-[8px] font-mono text-[#2d9b8a]">1:1000_GRADIENT</span>
                    </div>
                    <div className="h-1 w-full bg-white/05 rounded-full overflow-hidden">
                       <div className="h-full bg-[#2d9b8a] w-[75%]" />
                    </div>
                 </div>

                 <div className="p-4 bg-white/05 rounded-xl border border-white/05 space-y-3">
                    <div className="flex justify-between items-center">
                       <span className="text-[9px] text-white/40 uppercase font-black">Thermal_Calcination</span>
                       <span className="text-[8px] font-mono text-[#f87171]">ACTIVE_SOAK</span>
                    </div>
                    <div className="h-1 w-full bg-white/05 rounded-full overflow-hidden">
                       <div className="h-full bg-[#f87171] w-[92%]" />
                    </div>
                 </div>

                 <button className="w-full py-3 bg-[#c9a84c] text-[#0d0c18] text-[9px] font-black tracking-[0.2em] uppercase rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2">
                    <Compass className="w-3.5 h-3.5" />
                    RECALIBRATE_VECTORS
                 </button>
              </div>
           </Surface>

           <Surface variant="glass" className="p-8 border-white/[0.02] space-y-6">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Physical_Handshake_Log</h3>
              <div className="space-y-3 font-mono text-[8px] text-white/20">
                 <p>[09:12:01] M4_Leader &gt; M2_Helper: Syncing_Grover_Search</p>
                 <p>[09:14:22] Active_Inference: Surprise_Minimized(0.012)</p>
                 <p>[09:15:55] Marangoni_Pulse: Triggered_Node_01_Success</p>
                 <p className="text-[#2d9b8a]">[09:20:00] ABUNTU_LEGAL_COMPLIANCE: PASSED</p>
              </div>
           </Surface>
        </div>
      </div>
    </div>
  );
}
