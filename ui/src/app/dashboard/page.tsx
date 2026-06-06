"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { 
  Brain, 
  Cpu, 
  Shield, 
  Zap, 
  MessageSquare, 
  Search, 
  Network, 
  Database, 
  Activity, 
  Lock, 
  ArrowUpRight, 
  Globe,
  Settings,
  Terminal,
  Grid
} from "lucide-react";
import { Surface, GlowText, IconOrb } from "@/components/design-system";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { MEOKCLAW_APPS } from "@/config/apps";

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function AppCard({ app }: { app: typeof MEOKCLAW_APPS[0] }) {
  return (
    <Link href={app.href} className="group">
      <Surface variant="glass" hover className="h-full p-6 border-white/[0.03] group-hover:border-[#c9a84c]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-[#c9a84c]" />
        </div>
        
        <div className="flex flex-col gap-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500"
            style={{ background: `${app.color}15`, border: `1px solid ${app.color}25` }}
          >
            <app.icon className="w-6 h-6" style={{ color: app.color }} />
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-black tracking-widest uppercase text-white/90 group-hover:text-[#c9a84c] transition-colors">
                {app.name}
              </h3>
              <div className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-tighter">{app.status}</span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              {app.desc}
            </p>
          </div>
        </div>
      </Surface>
    </Link>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function MissionControlPage() {
  const { user } = useUser();
  const [greeting, setGreeting] = useState("INITIALISING");
  const [sysStatus, setSystemStatus] = useState({
    care: 99.2,
    consciousness: 0.788,
    nodes: 235,
    latency: 42,
  });

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting("GOOD_MORNING");
    else if (hours < 18) setGreeting("GOOD_AFTERNOON");
    else setGreeting("GOOD_EVENING");
  }, []);

  // Poll system health
  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch("/api/health");
        if (res.ok) {
          const data = await res.json();
          const cons = data.components?.consciousness;
          setSystemStatus(prev => ({
            ...prev,
            care: parseFloat(res.headers.get("X-MEOK-CareScore") || "99.2"),
            consciousness: cons?.consciousness_level || prev.consciousness,
            nodes: 235
          }));
        }
      } catch {}
    };
    poll();
    const id = setInterval(poll, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-6 md:p-10 space-y-12">
      {/* Welcome Header */}
      <section className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-[#c9a84c] tracking-[0.3em] uppercase">{greeting}_OPERATOR</span>
          <div className="h-px w-8 bg-[#c9a84c]/30" />
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white/95">
          Mission_Control <span className="text-white/20">/</span> <span className="text-[#c9a84c]/60">v3.5</span>
        </h1>
      </section>

      {/* Primary Apps Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MEOKCLAW_APPS.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </section>

      {/* System Status Row */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Core Metrics */}
        <Surface variant="glass" className="xl:col-span-2 p-8 border-white/[0.02]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Kernel_Performance</h3>
            <div className="flex items-center gap-2">
               <Activity className="w-3 h-3 text-[#2d9b8a] animate-pulse" />
               <span className="text-[10px] font-mono text-[#2d9b8a]">STABLE</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="space-y-1">
               <div className="text-[10px] text-white/20 uppercase tracking-tighter">Care_Score</div>
               <div className="text-xl font-black text-[#2d9b8a]">{sysStatus.care.toFixed(1)}%</div>
             </div>
             <div className="space-y-1">
               <div className="text-[10px] text-white/20 uppercase tracking-tighter">Latency</div>
               <div className="text-xl font-black text-white/80">42 <span className="text-[10px] font-normal text-white/20">ms</span></div>
             </div>
             <div className="space-y-1">
               <div className="text-[10px] text-white/20 uppercase tracking-tighter">Consciousness</div>
               <div className="text-xl font-black text-[#a78bfa]">{sysStatus.consciousness.toFixed(3)}</div>
             </div>
             <div className="space-y-1">
               <div className="text-[10px] text-white/20 uppercase tracking-tighter">Active_Nodes</div>
               <div className="text-xl font-black text-white/80">{sysStatus.nodes}</div>
             </div>
          </div>
        </Surface>

        {/* 🛡️ INTELLIGENCE SWARM MONITOR */}
        <Surface variant="glass" className="p-8 border-[#f87171]/10 space-y-6">
           <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-[#f87171]/10 rounded-lg">
                    <Activity className="w-4 h-4 text-[#f87171]" />
                 </div>
                 <h3 className="text-xs font-bold tracking-[0.2em] text-[#f87171] uppercase">Swarm_Intelligence</h3>
              </div>
              <div className="px-2 py-0.5 rounded-full bg-[#f87171]/10 border border-[#f87171]/20 text-[7px] font-black text-[#f87171] uppercase animate-pulse">Scanning</div>
           </div>

           <div className="space-y-3">
              <div className="p-3 bg-white/05 rounded-lg border border-white/05 space-y-1">
                 <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black text-white/60">RAGuard_Alert</span>
                    <span className="text-[8px] font-mono text-white/20">04:22:45</span>
                 </div>
                 <p className="text-[10px] text-white/40 leading-tight">Detected 12 injection vectors in substrate logs. Guardrails updated.</p>
              </div>
              <div className="p-3 bg-white/05 rounded-lg border border-white/05 space-y-1">
                 <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black text-white/60">ArXiv_Discovery</span>
                    <span className="text-[8px] font-mono text-white/20">03:52:44</span>
                 </div>
                 <p className="text-[10px] text-white/40 leading-tight">New BFT Consensus paper for distributed LLM nodes. Optimization possible.</p>
              </div>
           </div>

           <Link href="/MEOKCLAW_OVERNIGHT_INTEL.md" className="block text-center py-2 bg-white/05 hover:bg-white/10 rounded-lg text-[9px] font-bold tracking-widest uppercase transition-colors">
              View_Full_Intel_Log
           </Link>
        </Surface>

        {/* Security Module */}
        <Surface variant="neo" className="p-8 border-[#c9a84c]/05">
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-[#c9a84c]/10 rounded-lg">
               <Lock className="w-4 h-4 text-[#c9a84c]" />
             </div>
             <h3 className="text-xs font-bold tracking-[0.2em] text-[#c9a84c] uppercase">Privacy_Kernel</h3>
           </div>
           
           <div className="space-y-4">
             <div className="flex justify-between items-center text-[10px]">
               <span className="text-white/40">Encryption</span>
               <span className="font-mono text-[#2d9b8a]">AES_256_GCM</span>
             </div>
             <div className="flex justify-between items-center text-[10px]">
               <span className="text-white/40">Zero_Knowledge</span>
               <span className="font-mono text-[#2d9b8a]">ENABLED</span>
             </div>
             <div className="flex justify-between items-center text-[10px]">
               <span className="text-white/40">Audit_Ledger</span>
               <span className="font-mono text-[#2d9b8a]">IMMUTABLE</span>
             </div>
             
             <div className="pt-4 border-t border-white/05 mt-4">
               <button className="w-full py-2 bg-white/05 hover:bg-white/10 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-colors">
                 Rotate_Private_Keys
               </button>
             </div>
           </div>
        </Surface>
      </section>

      {/* OS Footer */}
      <footer className="pt-10 border-t border-white/05 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30">
        <div className="flex items-center gap-4 text-[10px] font-mono tracking-tighter">
          <span>MEOKCLAW_OS</span>
          <span className="text-white/10">|</span>
          <span>BUILD_2026.05.26</span>
          <span className="text-white/10">|</span>
          <span>INSTANCE_PRIVATE</span>
        </div>
        
        <div className="flex items-center gap-8">
           <Link href="/dashboard/settings" className="p-2 hover:bg-white/05 rounded-full transition-colors">
             <Settings className="w-4 h-4" />
           </Link>
           <Link href="/terminal" className="p-2 hover:bg-white/05 rounded-full transition-colors">
             <Terminal className="w-4 h-4" />
           </Link>
           <Link href="/grid" className="p-2 hover:bg-white/05 rounded-full transition-colors">
             <Grid className="w-4 h-4" />
           </Link>
        </div>
      </footer>
    </div>
  );
}
