"use client";

import { useEffect, useState, useCallback } from "react";
import { 
  Shield, 
  Lock, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Scan, 
  Activity, 
  Database, 
  Globe,
  ArrowRight,
  ChevronRight,
  Fingerprint
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";

// ─── TYPES ──────────────────────────────────────────────────────────────────

interface AuditArtifact {
  id: string;
  name: string;
  type: string;
  status: 'signed' | 'pending';
  timestamp: string;
}

const COUNTDOWN_TARGET = new Date('2026-08-02T00:00:00Z').getTime();

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, min: 0, sec: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, COUNTDOWN_TARGET - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        min: Math.floor((diff / (1000 * 60)) % 60),
        sec: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-4">
      {Object.entries(timeLeft).map(([label, val]) => (
        <div key={label} className="text-center">
          <div className="text-2xl font-black text-[#c9a84c] font-mono">{String(val).padStart(2, '0')}</div>
          <div className="text-[9px] text-white/20 uppercase tracking-widest">{label}</div>
        </div>
      ))}
    </div>
  );
}

// ─── GOVERNANCE APP PAGE ─────────────────────────────────────────────────────

export default function GovernanceApp() {
  const [artifacts] = useState<AuditArtifact[]>([
    { id: '1', name: 'Article_6_Risk_Classification', type: 'EU_AI_ACT', status: 'signed', timestamp: '2026.05.21 14:32' },
    { id: '2', name: 'Annex_III_Technical_Doc', type: 'EU_AI_ACT', status: 'signed', timestamp: '2026.05.21 14:35' },
    { id: '3', name: 'Data_Privacy_Impact_Assm', type: 'GDPR', status: 'pending', timestamp: '-' },
  ]);

  return (
    <div className="p-8 space-y-10">
      {/* App Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[10px] font-mono text-[#c9a84c] tracking-[0.2em] uppercase">SafetyOf.AI_Kernel</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white/95 uppercase">Compliance_Vault</h1>
        </div>
        <Countdown />
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Active Audit State */}
        <Surface variant="glass" className="lg:col-span-2 p-8 border-[#c9a84c]/05 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Audit_Integrity</span>
              <div className="flex items-center gap-2 text-[#2d9b8a]">
                 <CheckCircle2 className="w-4 h-4" />
                 <span className="text-xs font-bold font-mono">HMAC_VERIFIED</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
               <h2 className="text-lg font-bold text-white/90 uppercase tracking-widest">Active_Scan</h2>
               <p className="text-xs text-white/40 max-w-md">Continuous monitoring of 235 system nodes against EU AI Act Title III compliance benchmarks.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
               <div className="space-y-1">
                  <div className="text-[10px] text-white/20 uppercase tracking-tighter">High_Risk_Delta</div>
                  <div className="text-xl font-black text-[#f87171]">02</div>
               </div>
               <div className="space-y-1">
                  <div className="text-[10px] text-white/20 uppercase tracking-tighter">Gap_Analysis</div>
                  <div className="text-xl font-black text-[#fbbf24]">88%</div>
               </div>
               <div className="space-y-1">
                  <div className="text-[10px] text-white/20 uppercase tracking-tighter">Evidence_Lvl</div>
                  <div className="text-xl font-black text-white/80 font-mono">GOLD</div>
               </div>
               <div className="space-y-1">
                  <div className="text-[10px] text-white/20 uppercase tracking-tighter">Latency</div>
                  <div className="text-xl font-black text-white/80 font-mono">1.2ms</div>
               </div>
            </div>

            <div className="pt-4 flex gap-4">
               <button className="px-6 py-2.5 bg-[#c9a84c] text-[#0d0c18] text-[10px] font-black tracking-widest uppercase rounded-lg hover:brightness-110 transition-all">
                  Run_Deep_Scan
               </button>
               <button className="px-6 py-2.5 bg-white/05 text-white/60 text-[10px] font-black tracking-widest uppercase rounded-lg hover:bg-white/10 transition-all border border-white/05">
                  Generate_Attestation
               </button>
            </div>
          </div>
        </Surface>

        {/* Artifact Ledger */}
        <Surface variant="neo" className="p-8 border-white/[0.02] flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Audit_Artifacts</h3>
            <Database className="w-3 h-3 text-white/20" />
          </div>

          <div className="flex-1 space-y-4">
            {artifacts.map(item => (
              <div key={item.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/05 group hover:border-[#c9a84c]/20 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                   <span className="text-[10px] font-black text-white/70 group-hover:text-[#c9a84c] transition-colors truncate">{item.name}</span>
                   {item.status === 'signed' ? (
                     <Fingerprint className="w-3 h-3 text-[#2d9b8a]" />
                   ) : (
                     <Clock className="w-3 h-3 text-white/20" />
                   )}
                </div>
                <div className="flex justify-between items-center text-[9px] font-mono">
                   <span className="text-white/20 uppercase tracking-tighter">{item.type}</span>
                   <span className="text-white/20">{item.timestamp}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-2 bg-white/05 text-white/40 text-[9px] font-bold tracking-widest uppercase hover:text-white transition-colors">
            View_All_History
          </button>
        </Surface>
      </div>

      {/* Strategic Framework Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Surface variant="glass" className="p-8 border-white/[0.02] space-y-6">
           <div className="flex items-center gap-3">
             <div className="p-2 bg-blue-500/10 rounded-lg">
                <Globe className="w-4 h-4 text-blue-400" />
             </div>
             <h3 className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Regulatory_Mapping</h3>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
             {['EU_AI_ACT', 'NIS2', 'DORA', 'GDPR_A22'].map(f => (
               <div key={f} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg border border-white/05">
                 <span className="text-[10px] font-mono text-white/40">{f}</span>
                 <div className="h-1 w-8 bg-[#2d9b8a] rounded-full" />
               </div>
             ))}
           </div>
        </Surface>

        <Surface variant="glass" className="p-8 border-white/[0.02] space-y-6">
           <div className="flex items-center gap-3">
             <div className="p-2 bg-amber-500/10 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
             </div>
             <h3 className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Vulnerability_Feed</h3>
           </div>
           
           <div className="space-y-3">
              <div className="flex items-center gap-4 text-[10px] bg-[#f87171]/05 p-3 rounded-lg border border-[#f87171]/10">
                 <span className="font-mono text-[#f87171]">CRITICAL</span>
                 <span className="text-white/60">Node_114: Hallucination rate exceeded 0.05% threshold</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] bg-white/05 p-3 rounded-lg border border-white/05 opacity-50">
                 <span className="font-mono text-white/30">LOW</span>
                 <span className="text-white/40">Model_92: Bias calibration drift detected in empathy_layer</span>
              </div>
           </div>
        </Surface>
      </section>
    </div>
  );
}
