"use client";

import { useEffect, useState, useCallback } from "react";
import { 
  Truck, 
  Construction, 
  Trash2, 
  Zap, 
  Search, 
  CalendarCheck, 
  LayoutDashboard, 
  Brain, 
  Clock, 
  ClipboardCheck, 
  Calculator, 
  Tablet, 
  Shield, 
  Check,
  ArrowRight,
  ChevronRight,
  Activity,
  Anchor,
  Droplets,
  Wind
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

// ─── TYPES ──────────────────────────────────────────────────────────────────

interface LogisticNode {
  id: string;
  name: string;
  domain: string;
  status: 'active' | 'busy' | 'alert';
  load: number;
}

// ─── LOGISTICS APP PAGE ─────────────────────────────────────────────────────

export default function LogisticsApp() {
  const [nodes] = useState<LogisticNode[]>([
    { id: '1', name: 'GrabHire_Fleet', domain: 'grabhire.ai', status: 'active', load: 42 },
    { id: '2', name: 'Plant_Inventory', domain: 'planthire.ai', status: 'active', load: 88 },
    { id: '3', name: 'Waste_Removal', domain: 'muckaway.ai', status: 'busy', load: 95 },
    { id: '4', name: 'FishFarm_Node', domain: 'fishkeeper.ai', status: 'active', load: 12 },
  ]);

  return (
    <div className="p-8 space-y-10">
      {/* App Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[10px] font-mono text-[#c9a84c] tracking-[0.2em] uppercase">Industrial_Kernel_v3</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">Logistics_Command</h1>
        </div>
        
        <div className="flex gap-4">
           <div className="px-4 py-2 bg-white/05 rounded-lg border border-white/05">
              <div className="text-[9px] text-white/20 uppercase tracking-widest mb-1">Active_Fleet</div>
              <div className="text-lg font-black text-white/80 font-mono">234 <span className="text-[10px] text-white/20">units</span></div>
           </div>
           <div className="px-4 py-2 bg-white/05 rounded-lg border border-white/05">
              <div className="text-[9px] text-white/20 uppercase tracking-widest mb-1">Fleet_Health</div>
              <div className="text-lg font-black text-[#2d9b8a] font-mono">98.4%</div>
           </div>
        </div>
      </header>

      {/* Primary Control Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         
         {/* Live Map / Routing Placeholder */}
         <Surface variant="glass" className="lg:col-span-3 p-0 border-white/[0.03] relative overflow-hidden h-[400px]">
            <div className="absolute inset-0 bg-[#0d0c18]">
               {/* Decorative grid pattern */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c9a84c 1px, transparent 0)', backgroundSize: '32px 32px' }} />
               
               {/* Map overlay content */}
               <div className="relative p-8 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                     <div className="space-y-1">
                        <h2 className="text-lg font-bold text-white/90 uppercase tracking-widest">Global_Route_Mesh</h2>
                        <p className="text-[10px] text-white/40 font-mono tracking-tighter">OS_SYNC: STABLE_CONNECTION_ESTABLISHED</p>
                     </div>
                     <div className="flex gap-2">
                        <button className="px-3 py-1 bg-[#c9a84c]/10 text-[#c9a84c] text-[9px] font-bold rounded border border-[#c9a84c]/20 uppercase">Optimization_On</button>
                        <button className="px-3 py-1 bg-white/05 text-white/40 text-[9px] font-bold rounded border border-white/05 uppercase">Layer_Sat</button>
                     </div>
                  </div>

                  <div className="flex items-end justify-between">
                     <div className="space-y-4">
                        <div className="flex items-center gap-4">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] shadow-[0_0_8px_#c9a84c]" />
                           <span className="text-[10px] font-mono text-white/60">NODE_LON: 0.1278 | LAT: 51.5074 (LND_HQ)</span>
                        </div>
                        <div className="flex items-center gap-4 opacity-40">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                           <span className="text-[10px] font-mono text-white/60">NODE_LON: -122.4194 | LAT: 37.7749 (SFO_EXT)</span>
                        </div>
                     </div>
                     
                     <div className="flex flex-col items-end gap-1">
                        <span className="text-[9px] text-white/20 uppercase">Routing_Efficiency</span>
                        <div className="text-3xl font-black text-white/90 font-mono italic">0.992</div>
                     </div>
                  </div>
               </div>
            </div>
         </Surface>

         {/* Sector Control */}
         <div className="space-y-6">
            <Surface variant="neo" className="p-6 border-[#c9a84c]/05 space-y-4">
               <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Domain_Cluster</h3>
                  <div className="flex gap-1">
                     {[...Array(3)].map((_, i) => (
                       <div key={i} className="w-1 h-1 rounded-full bg-[#2d9b8a] animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                     ))}
                  </div>
               </div>
               <div className="space-y-2">
                  {nodes.map(node => (
                    <div key={node.id} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg border border-white/05 group hover:border-[#c9a84c]/20 transition-all cursor-pointer">
                       <div className="min-w-0">
                          <div className="text-[10px] font-black text-white/80 group-hover:text-[#c9a84c] transition-colors truncate uppercase">{node.name}</div>
                          <div className="text-[9px] text-white/20 font-mono">{node.domain}</div>
                       </div>
                       <div className={`w-1.5 h-1.5 rounded-full ${node.status === 'active' ? 'bg-[#2d9b8a]' : node.status === 'busy' ? 'bg-amber-400' : 'bg-red-500'}`} />
                    </div>
                  ))}
               </div>
            </Surface>

            <Surface variant="glass" className="p-6 border-white/[0.02] space-y-4">
               <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#2d9b8a]" />
                  <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Optimization_Log</span>
               </div>
               <div className="space-y-2 max-h-32 overflow-y-auto font-mono text-[8px] text-white/20">
                  <p>[08:12:04] Adj_Slope: node_SSJ +0.002</p>
                  <p>[08:14:32] Sync_Fleet: grab_32 active</p>
                  <p>[08:15:01] BFT_Vote: consensus_reached</p>
                  <p>[08:15:15] Applying_Abuntu_1400s_Flow</p>
               </div>
            </Surface>

            <Surface variant="glass" className="p-6 border-white/[0.02] space-y-4">
               <div className="flex items-center gap-2">
                  <Calculator className="w-3.5 h-3.5 text-white/40" />
                  <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Cost_Prophet</span>
               </div>
               <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px]">
                     <span className="text-white/30">Fuel_Trend</span>
                     <span className="font-mono text-[#f87171]">+0.12%</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                     <span className="text-white/30">Avg_Day_Rate</span>
                     <span className="font-mono text-white/80">£342.00</span>
                  </div>
                  <div className="h-px bg-white/05" />
                  <button className="w-full py-2 bg-[#c9a84c] text-[#0d0c18] text-[9px] font-black tracking-widest uppercase rounded">Run_Optimization</button>
               </div>
            </Surface>
         </div>
      </div>

      {/* Environmental Hub (FishKeeper Integration) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Surface variant="glass" className="p-8 border-white/[0.02] space-y-6">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Droplets className="w-4 h-4 text-blue-400" />
               </div>
               <h3 className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Aquaculture_Telemetry</h3>
            </div>
            
            <div className="space-y-4">
               <div className="flex justify-between items-end">
                  <span className="text-[10px] text-white/40 uppercase tracking-tighter">Oxygen_Level</span>
                  <span className="text-lg font-black text-[#2d9b8a] font-mono">8.2 <span className="text-[9px] font-normal opacity-40">mg/L</span></span>
               </div>
               <div className="h-1 w-full bg-white/05 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[82%]" />
               </div>
               <div className="flex justify-between items-end pt-2">
                  <span className="text-[10px] text-white/40 uppercase tracking-tighter">Ph_Balance</span>
                  <span className="text-lg font-black text-amber-400 font-mono">7.4</span>
               </div>
            </div>
         </Surface>

         <Surface variant="glass" className="p-8 border-white/[0.02] space-y-6">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Activity className="w-4 h-4 text-emerald-400" />
               </div>
               <h3 className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">HSE_Compliance</h3>
            </div>
            
            <div className="space-y-3">
               {['Pre-Use_Checks', 'LOLER_Inspection', 'Driver_Hours', 'Waste_Transfer'].map(task => (
                 <div key={task} className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-lg border border-white/05">
                    <Check className="w-3.5 h-3.5 text-[#2d9b8a]" />
                    <span className="text-[10px] font-mono text-white/60">{task}</span>
                    <span className="ml-auto text-[9px] text-white/20">VERIFIED</span>
                 </div>
               ))}
            </div>
         </Surface>

         <Surface variant="glass" className="p-8 border-white/[0.02] space-y-6">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-[#c9a84c]/10 rounded-lg">
                  <Zap className="w-4 h-4 text-[#c9a84c]" />
               </div>
               <h3 className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Energy_Kernel</h3>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center gap-2 py-4">
               <div className="text-4xl font-black text-white/90 font-mono tracking-tighter">0.024</div>
               <div className="text-[9px] text-white/20 uppercase tracking-widest">KWh_per_operation</div>
               <div className="mt-4 px-4 py-1 bg-[#2d9b8a]/10 text-[#2d9b8a] text-[9px] font-bold rounded-full uppercase tracking-tighter italic">Optimization: Peak_Efficiency</div>
            </div>
         </Surface>
      </section>
    </div>
  );
}
