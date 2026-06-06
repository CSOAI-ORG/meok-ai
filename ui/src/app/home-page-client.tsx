"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Zap, Lock, ArrowRight, Brain, Globe, Cpu } from "lucide-react";
import { Surface, GlowText, IconOrb } from "@/components/design-system";

// ─── BRAND TOKENS ─────────────────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const GOLD    = "#c9a84c";
const BORDER  = "rgba(255,255,255,0.07)";

/**
 * MEOKCLAW ACCESS LOADER
 * 
 * A high-impact, minimal entrance for the MEOKCLAW OS.
 * Surfaces 100/100 world-class aesthetic immediately.
 */
export default function HomePageClient() {
  const router = useRouter();
  const [booting, setBooting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("SYSTEM_READY");

  // Boot sequence animation
  useEffect(() => {
    if (!booting) return;
    
    const intervals = [
      { p: 15, s: "LOAD_KERNEL...", d: 400 },
      { p: 32, s: "MOUNT_SOV3_NODE...", d: 600 },
      { p: 48, s: "ATTACH_47_GENERALS...", d: 800 },
      { p: 65, s: "SYNC_MEMORY_VAULT...", d: 500 },
      { p: 88, s: "VERIFY_BFT_CONSENSUS...", d: 900 },
      { p: 100, s: "HANDSHAKE_COMPLETE", d: 400 },
    ];

    let current = 0;
    const runSequence = async () => {
      for (const step of intervals) {
        await new Promise(r => setTimeout(runSequenceStep, step.d, step.p, step.s, r));
      }
      setTimeout(() => router.push("/dashboard"), 300);
    };

    function runSequenceStep(p: number, s: string, resolve: () => void) {
      setProgress(p);
      setStatus(s);
      resolve();
    }

    runSequence();
  }, [booting, router]);

  return (
    <div className="min-h-screen bg-[#0d0c18] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#c9a84c]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#2d9b8a]/05 blur-[120px]" />
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to bottom, transparent, rgba(201,168,76,0.03), transparent);
          pointer-events: none;
          animation: scan-line 8s linear infinite;
        }
      `}</style>

      <div className="scan-line" />

      <main className="relative z-10 flex flex-col items-center max-w-lg w-full px-6">
        {/* Central Orb */}
        <div className="mb-12 animate-float-slow">
          <IconOrb 
            icon={Brain} 
            variant="gold" 
            size="lg" 
            pulse={booting} 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl border-2"
          />
        </div>

        {/* Brand Title */}
        <div className="text-center mb-16 space-y-2">
          <h1 className="tracking-[0.2em] font-black text-white/90 text-sm uppercase">
            MEOKCLAW <span className="text-[#c9a84c]/60">Sovereign OS</span>
          </h1>
          <div className="h-px w-12 bg-[#c9a84c]/30 mx-auto" />
        </div>

        {/* Interface Area */}
        <Surface variant="glass" className="w-full p-8 border-[#c9a84c]/10 relative overflow-hidden group">
          {!booting ? (
            <div className="flex flex-col items-center">
              <p className="text-white/40 text-xs font-mono mb-8 tracking-widest uppercase">
                Access Protocol: Western_UI_v3.5
              </p>
              
              <button
                onClick={() => setBooting(true)}
                className="w-full bg-[#c9a84c] hover:bg-[#d4b86c] text-[#0d0c18] font-bold py-4 rounded-xl transition-all shadow-[0_8px_24px_rgba(201,168,76,0.25)] active:scale-[0.98] flex items-center justify-center gap-3 group/btn"
              >
                INITIALISE SYSTEM
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                <div className="text-center space-y-1">
                  <div className="text-[10px] text-white/30 uppercase tracking-tighter">Identity</div>
                  <div className="text-[10px] text-white/60 font-mono">CLERK_SSO</div>
                </div>
                <div className="text-center space-y-1 border-x border-white/05">
                  <div className="text-[10px] text-white/30 uppercase tracking-tighter">Nodes</div>
                  <div className="text-[10px] text-white/60 font-mono">235_ACTIVE</div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-[10px] text-white/30 uppercase tracking-tighter">Security</div>
                  <div className="text-[10px] text-white/60 font-mono">BFT_V3</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-end mb-2">
                <div className="text-[10px] font-mono text-[#c9a84c] tracking-widest animate-pulse">
                  {status}
                </div>
                <div className="text-[10px] font-mono text-white/40">
                  {progress}%
                </div>
              </div>
              
              <div className="h-1 w-full bg-white/05 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#c9a84c] transition-all duration-300 ease-out shadow-[0_0_8px_rgba(201,168,76,0.5)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-0.5 w-full bg-white/05" />
                ))}
              </div>
            </div>
          )}
        </Surface>

        {/* Footer info */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-[10px] text-white/20 tracking-[0.3em] font-mono uppercase">
            © 2026 MEOK AI LABS · PRIVATE_INSTANCE
          </p>
          <div className="flex justify-center gap-6">
             <Link href="/privacy" className="text-[9px] text-white/10 hover:text-white/40 transition-colors uppercase tracking-widest">Privacy</Link>
             <Link href="/terms" className="text-[9px] text-white/10 hover:text-white/40 transition-colors uppercase tracking-widest">Protocol</Link>
             <Link href="/compliance" className="text-[9px] text-white/10 hover:text-white/40 transition-colors uppercase tracking-widest">Audit</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
