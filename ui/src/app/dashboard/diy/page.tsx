"use client";

import { useEffect, useState } from "react";
import { 
  Wrench, 
  Hammer, 
  Drill, 
  Paintbrush, 
  Home, 
  Shield, 
  Zap, 
  Search, 
  ArrowRight,
  ChevronRight,
  ClipboardCheck,
  Calculator,
  Image as ImageIcon
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

const PROJECTS = [
  { id: 'p1', name: 'Leaky_Tap_Restoration', complexity: 'Low', time: '30m', tools: ['Spanner', 'Washers'] },
  { id: 'p2', name: 'Trapezoidal_Drain_Clearance', complexity: 'Medium', time: '2h', tools: ['Shovel', 'Level'] },
  { id: 'p3', name: 'Lime_Mortar_Repointing', complexity: 'High', time: '6h', tools: ['Trowel', 'Hawk'] },
];

export default function DIYApp() {
  return (
    <div className="p-8 space-y-12">
      {/* DIY Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-[10px] font-mono text-[#fbbf24] tracking-[0.2em] uppercase">Abuntu_Physical_v1.0</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">
            DIY_Support_Center
          </h1>
        </div>
        
        <div className="flex gap-4">
           <Surface variant="glass" className="px-6 py-2 border-[#fbbf24]/20 flex flex-col items-end">
              <span className="text-[9px] text-[#fbbf24] font-black uppercase tracking-widest mb-1">Knowledge_Substrate</span>
              <div className="text-xl font-black text-white/90 font-mono italic">ABUNTU_1400s</div>
           </Surface>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Project Wizard */}
        <Surface variant="glass" className="lg:col-span-2 p-8 border-white/[0.03] space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-widest text-white/80">Active_Project_Wizard</h2>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
                 <span className="text-[9px] font-mono text-[#fbbf24]">GUIDANCE_READY</span>
              </div>
           </div>

           <div className="p-10 border-2 border-dashed border-white/05 rounded-3xl flex flex-col items-center text-center gap-4 group hover:border-[#fbbf24]/20 transition-all cursor-pointer">
              <div className="p-4 bg-white/05 rounded-full">
                 <ImageIcon className="w-8 h-8 text-white/20 group-hover:text-[#fbbf24] transition-colors" />
              </div>
              <div className="space-y-1">
                 <h3 className="text-lg font-bold text-white/90">Visual_Project_Analysis</h3>
                 <p className="text-xs text-white/40 max-w-xs mx-auto leading-relaxed">Upload a photo of your repair or build. MEOKCLAW will identify tools, materials, and potential Abuntu-optimizations.</p>
              </div>
              <button className="mt-4 px-6 py-2 bg-[#fbbf24] text-[#0d0c18] text-[10px] font-black tracking-widest uppercase rounded-lg">Upload_Asset</button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white/05 rounded-xl border border-white/05 space-y-4">
                 <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-[#2d9b8a]" />
                    <span className="text-[10px] font-bold text-white/40 uppercase">Safety_Checklist</span>
                 </div>
                 <ul className="space-y-2">
                    {['Wear_Eye_Protection', 'Check_Load_Bearing', 'Isolation_Switch_Verify'].map(s => (
                      <li key={s} className="flex items-center gap-2 text-[9px] font-mono text-white/60">
                         <div className="w-1 h-1 rounded-full bg-white/20" />
                         {s}
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="p-4 bg-white/05 rounded-xl border border-white/05 space-y-4">
                 <div className="flex items-center gap-2">
                    <Calculator className="w-3.5 h-3.5 text-[#60a5fa]" />
                    <span className="text-[10px] font-bold text-white/40 uppercase">Material_Estimator</span>
                 </div>
                 <div className="space-y-2">
                    <div className="h-1 w-full bg-white/05 rounded-full" />
                    <div className="flex justify-between text-[9px] font-mono">
                       <span className="text-white/20">EST_COST</span>
                       <span className="text-white/60">£42.00</span>
                    </div>
                 </div>
              </div>
           </div>
        </Surface>

        {/* Saved Guides */}
        <Surface variant="neo" className="p-8 border-[#fbbf24]/05 space-y-8">
           <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#fbbf24] uppercase">Project_Ledger</h3>
           
           <div className="space-y-4">
              {PROJECTS.map(p => (
                <div key={p.id} className="p-4 bg-white/[0.02] border border-white/05 rounded-xl group hover:border-[#fbbf24]/20 transition-all cursor-pointer">
                   <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-black text-white/80 uppercase group-hover:text-[#fbbf24] transition-colors">{p.name}</span>
                      <ChevronRight className="w-3 h-3 text-white/10 group-hover:text-[#fbbf24]" />
                   </div>
                   <div className="flex gap-4">
                      <div className="space-y-0.5">
                         <div className="text-[7px] text-white/20 uppercase">Complexity</div>
                         <div className="text-[9px] font-mono text-white/60">{p.complexity}</div>
                      </div>
                      <div className="space-y-0.5">
                         <div className="text-[7px] text-white/20 uppercase">Est_Time</div>
                         <div className="text-[9px] font-mono text-white/60">{p.time}</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           <button className="w-full py-3 bg-white/05 border border-white/10 text-white/40 text-[9px] font-bold tracking-widest uppercase hover:text-white transition-colors rounded-xl">
              Browse_Knowledge_Base
           </button>
        </Surface>
      </div>
    </div>
  );
}
