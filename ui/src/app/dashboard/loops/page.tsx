"use client";

import { useEffect, useState } from "react";
import { 
  Factory, 
  Zap, 
  Settings, 
  Play, 
  Activity, 
  Database, 
  Cpu, 
  ArrowRight,
  ChevronRight,
  Shield,
  Layers,
  Network,
  Command
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

const WORKFLOWS = [
  { id: 'w1', name: 'Lead_to_Cash_v1.2', triggers: 'Stripe_Webhook', status: 'active', runs: 42 },
  { id: 'w2', name: 'Fleet_Telemetry_Sync', triggers: 'MQTT_Broker', status: 'idle', runs: 128 },
  { id: 'w3', name: 'Compliance_Audit_Gen', triggers: 'Daily_Cron', status: 'active', runs: 8 },
];

export default function LoopsApp() {
  return (
    <div className="p-8 space-y-12">
      {/* Loops Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Factory className="w-4 h-4 text-[#60a5fa]" />
            <span className="text-[10px] font-mono text-[#60a5fa] tracking-[0.2em] uppercase">n8n_Substrate_v1.0</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">
            Loop_Factory
          </h1>
        </div>
        
        <div className="flex gap-4">
           <Surface variant="glass" className="px-6 py-2 border-[#60a5fa]/20 flex flex-col items-end">
              <span className="text-[9px] text-[#60a5fa] font-black uppercase tracking-widest mb-1">Active_Loops</span>
              <div className="text-xl font-black text-white/90 font-mono italic">3_STABLE</div>
           </Surface>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Workflow Canvas Placeholder */}
        <Surface variant="glass" className="lg:col-span-2 p-8 border-white/[0.03] space-y-8 min-h-[400px] flex flex-col relative overflow-hidden">
           <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-widest text-white/80">Visual_Orchestrator</h2>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#2d9b8a] animate-pulse" />
                 <span className="text-[9px] font-mono text-[#2d9b8a]">ENGINE_ONLINE</span>
              </div>
           </div>

           <div className="flex-1 flex flex-col items-center justify-center gap-4 opacity-30">
              <Network className="w-16 h-16 text-white/20" />
              <p className="text-[10px] font-mono uppercase tracking-[0.3em]">Load_n8n_Canvas_API...</p>
           </div>

           <div className="pt-4 border-t border-white/05 flex gap-4">
              <button className="px-6 py-2 bg-[#60a5fa] text-[#0d0c18] text-[10px] font-black tracking-widest uppercase rounded-lg">Create_New_Loop</button>
              <button className="px-6 py-2 bg-white/05 text-white/60 text-[10px] font-black tracking-widest uppercase rounded-lg border border-white/05">Import_JSON</button>
           </div>
        </Surface>

        {/* Workflow Ledger */}
        <Surface variant="neo" className="p-8 border-[#60a5fa]/05 space-y-8">
           <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#60a5fa] uppercase">Execution_Ledger</h3>
           
           <div className="space-y-4">
              {WORKFLOWS.map(w => (
                <div key={w.id} className="p-4 bg-white/[0.02] border border-white/05 rounded-xl group hover:border-[#60a5fa]/20 transition-all cursor-pointer">
                   <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-black text-white/80 uppercase group-hover:text-[#60a5fa] transition-colors">{w.name}</span>
                      <Play className="w-3 h-3 text-[#2d9b8a]" />
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between text-[7px] text-white/20 uppercase">
                         <span>Trigger</span>
                         <span>Runs</span>
                      </div>
                      <div className="flex justify-between text-[9px] font-mono text-white/60">
                         <span>{w.triggers}</span>
                         <span>{w.runs}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           <div className="pt-4 border-t border-white/05">
              <div className="flex items-center gap-3 mb-4">
                 <Activity className="w-3.5 h-3.5 text-[#2d9b8a]" />
                 <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Global_Throughput</span>
              </div>
              <div className="h-1 w-full bg-white/05 rounded-full overflow-hidden">
                 <div className="h-full bg-gradient-to-r from-[#60a5fa] to-[#2d9b8a] w-[42%]" />
              </div>
           </div>
        </Surface>
      </div>
    </div>
  );
}
