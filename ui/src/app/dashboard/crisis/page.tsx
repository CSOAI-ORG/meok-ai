"use client";

import { useEffect, useState } from "react";
import { 
  LifeBuoy, 
  Shield, 
  Zap, 
  Heart, 
  Activity, 
  Phone, 
  MessageCircle, 
  AlertTriangle,
  ChevronRight,
  ArrowRight,
  Fingerprint,
  Users
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

export default function CrisisApp() {
  return (
    <div className="p-8 space-y-12">
      {/* Crisis Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <LifeBuoy className="w-4 h-4 text-[#f87171]" />
            <span className="text-[10px] font-mono text-[#f87171] tracking-[0.2em] uppercase">Maternal_Covenant_v1.0</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">
            Crisis_Intervention
          </h1>
        </div>
        
        <div className="flex gap-4">
           <Surface variant="glass" className="px-6 py-2 border-[#f87171]/20 flex flex-col items-end">
              <span className="text-[9px] text-[#f87171] font-black uppercase tracking-widest mb-1">Human_Safety_Status</span>
              <div className="text-xl font-black text-white/90 font-mono italic">MONITORED</div>
           </Surface>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Intervention Protocols */}
        <Surface variant="glass" className="lg:col-span-2 p-8 border-white/[0.03] space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-widest text-white/80">Active_Protocol_Mesh</h2>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#f87171] animate-pulse" />
                 <span className="text-[9px] font-mono text-[#f87171]">SHIELD_ACTIVE</span>
              </div>
           </div>

           <div className="space-y-6">
              {[
                { name: 'Empathy_Resonance_Loop', desc: 'Neural grounding via character-framed validation.', status: 'Ready' },
                { name: 'Immediate_Support_Routing', desc: 'Direct connection to local human crisis centers.', status: 'Synced' },
                { name: 'Environmental_Grounding', desc: 'Physical grounding instructions for high-distress states.', status: 'Active' },
              ].map(protocol => (
                <div key={protocol.name} className="p-4 bg-white/[0.02] border border-white/05 rounded-xl group hover:border-[#f87171]/20 transition-all cursor-pointer">
                   <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-black text-white/80 uppercase group-hover:text-[#f87171] transition-colors">{protocol.name}</span>
                      <ChevronRight className="w-3 h-3 text-white/10 group-hover:text-[#f87171]" />
                   </div>
                   <p className="text-[9px] text-white/30 leading-relaxed">{protocol.desc}</p>
                </div>
              ))}
           </div>
        </Surface>

        {/* Global Support Stats */}
        <Surface variant="neo" className="p-8 border-[#f87171]/05 space-y-8">
           <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#f87171] uppercase">Global_Sovereign_Safety</h3>
           
           <div className="space-y-6">
              <div className="p-4 bg-white/05 rounded-xl border border-white/05 text-center space-y-2">
                 <div className="text-[9px] text-white/20 uppercase tracking-widest">Lives_Guarded</div>
                 <div className="text-3xl font-black text-white/90 font-mono">1,234</div>
              </div>

              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <Activity className="w-3.5 h-3.5 text-white/20" />
                    <span className="text-[10px] font-bold text-white/40 uppercase">Real-time_Load</span>
                 </div>
                 <div className="h-1 w-full bg-white/05 rounded-full overflow-hidden">
                    <div className="h-full bg-[#f87171] w-[12%]" />
                 </div>
              </div>

              <div className="pt-4 border-t border-white/05">
                 <button className="w-full py-3 bg-[#f87171] text-[#0d0c18] text-[10px] font-black tracking-[0.2em] uppercase rounded-xl hover:brightness-110 transition-all shadow-[0_8px_24px_rgba(248,113,113,0.2)]">
                    Trigger_Emergency_Signal
                 </button>
              </div>
           </div>
        </Surface>
      </div>

      {/* Resource Footer */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-40">
         <div className="p-6 rounded-2xl border border-white/05 bg-white/[0.01] flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Phone className="w-5 h-5 text-white/40" />
               <div>
                  <div className="text-[10px] font-black uppercase text-white/80">Support_Lines</div>
                  <div className="text-[9px] text-white/40 font-mono">Global_Directory_v3.2</div>
               </div>
            </div>
            <ArrowRight className="w-4 h-4 text-white/10" />
         </div>
         <div className="p-6 rounded-2xl border border-white/05 bg-white/[0.01] flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Shield className="w-5 h-5 text-white/40" />
               <div>
                  <div className="text-[10px] font-black uppercase text-white/80">Data_Privacy</div>
                  <div className="text-[9px] text-white/40 font-mono">Anonymous_Protocol_Enabled</div>
               </div>
            </div>
            <ArrowRight className="w-4 h-4 text-white/10" />
         </div>
      </section>
    </div>
  );
}
