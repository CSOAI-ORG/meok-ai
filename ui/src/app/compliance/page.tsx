"use client";

import { useEffect, useState } from "react";
import { 
  Shield, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  FileText, 
  Globe, 
  Lock, 
  Activity,
  ChevronRight,
  ArrowRight,
  Fingerprint,
  Zap
} from "lucide-react";
import { Surface, GlowText } from "@/components/design-system";
import Link from "next/link";

// ─── TYPES ──────────────────────────────────────────────────────────────────

interface Framework {
  id: string;
  name: string;
  description: string;
  region: string;
  riskCategory: string;
}

// ─── COMPLIANCE PAGE ─────────────────────────────────────────────────────────

export default function CompliancePage() {
  const [frameworks, setFrameworks] = useState<Framework[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/compliance?type=frameworks')
      .then(res => res.json())
      .then(data => {
        setFrameworks(data.frameworks || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8] font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#c9a84c]/05 blur-[120px]" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
           <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c9a84c]/30" />
              <span className="text-[10px] font-mono text-[#c9a84c] tracking-[0.3em] uppercase">Sovereign_Trust_Protocol</span>
              <div className="h-px w-8 bg-[#c9a84c]/30" />
           </div>
           
           <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
             Automated_Compliance <br/>
             <span className="text-[#c9a84c]">For_Agentic_AI</span>
           </h1>
           
           <p className="max-w-2xl mx-auto text-white/40 text-sm md:text-base leading-relaxed">
             MEOKCLAW provides real-time regulatory mapping and audit-ready evidence for the EU AI Act, GDPR, and NIS2. Trust is codified, not just claimed.
           </p>

           <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard/governance" className="px-8 py-3 bg-[#c9a84c] text-[#0d0c18] font-bold rounded-xl transition-all hover:scale-[1.02] flex items-center gap-2 group">
                 ACCESS COMPLIANCE VAULT
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-3 bg-white/05 border border-white/10 text-white/80 font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
                 View_Audit_Ledger
              </button>
           </div>
        </div>
      </section>

      {/* Frameworks Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-12">
         <div className="flex items-end justify-between border-b border-white/05 pb-6">
            <div className="space-y-1">
               <h2 className="text-xl font-bold uppercase tracking-widest">Supported_Frameworks</h2>
               <p className="text-[10px] text-white/20 uppercase font-mono tracking-tighter">Real-time mapping & cross-check capability</p>
            </div>
            <div className="text-[10px] font-mono text-[#2d9b8a] flex items-center gap-2">
               <Activity className="w-3 h-3 animate-pulse" />
               LIVE_MONITORING_ON
            </div>
         </div>

         {loading ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-50">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-40 rounded-2xl bg-white/05 animate-pulse" />
              ))}
           </div>
         ) : (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworks.map(fw => (
                <Surface key={fw.id} variant="glass" hover className="p-6 border-white/[0.03] flex flex-col gap-4">
                   <div className="flex items-center justify-between">
                      <div className="px-2 py-0.5 rounded-full bg-white/05 border border-white/05 text-[8px] font-black text-white/40 uppercase tracking-tighter">
                         {fw.region}
                      </div>
                      <div className={`w-1.5 h-1.5 rounded-full ${fw.riskCategory === 'critical' ? 'bg-red-500 shadow-[0_0_8px_red]' : 'bg-[#c9a84c]'}`} />
                   </div>
                   
                   <div>
                      <h3 className="text-sm font-black text-white/90 uppercase tracking-widest mb-1">{fw.name}</h3>
                      <p className="text-[11px] text-white/30 leading-relaxed line-clamp-2">{fw.description}</p>
                   </div>

                   <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/05">
                      <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Risk_Level: {fw.riskCategory}</span>
                      <ChevronRight className="w-3 h-3 text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                </Surface>
              ))}
           </div>
         )}
      </section>

      {/* Integrity Clause */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
         <Surface variant="neo" className="p-12 border-[#c9a84c]/05 space-y-8">
            <div className="flex justify-center">
               <Fingerprint className="w-12 h-12 text-[#c9a84c]/40" />
            </div>
            <div className="space-y-2">
               <h2 className="text-2xl font-black uppercase tracking-tight">The_Sovereign_Handshake</h2>
               <p className="text-xs text-white/40 leading-relaxed max-w-xl mx-auto">
                 All compliance artifacts are HMAC-signed by the MEOKCLAW Kernel and stored in an immutable local ledger. We don't just follow the rules; we cryptographically prove adherence.
               </p>
            </div>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/05">
               <div className="text-center">
                  <div className="text-lg font-black font-mono">256_BIT</div>
                  <div className="text-[9px] text-white/20 uppercase tracking-widest">Encryption</div>
               </div>
               <div className="text-center border-x border-white/05">
                  <div className="text-lg font-black font-mono">BFT_V3</div>
                  <div className="text-[9px] text-white/20 uppercase tracking-widest">Consensus</div>
               </div>
               <div className="text-center">
                  <div className="text-lg font-black font-mono">AUDIT_READY</div>
                  <div className="text-[9px] text-white/20 uppercase tracking-widest">Status</div>
               </div>
            </div>
         </Surface>
      </section>

      <footer className="py-12 border-t border-white/05 opacity-20 text-center">
         <p className="text-[10px] font-mono uppercase tracking-[0.2em]">© 2026 MEOK AI LABS · COMPLIANCE_v2.0_KERN</p>
      </footer>
    </div>
  );
}
