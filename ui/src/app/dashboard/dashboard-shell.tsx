"use client";

import { useEffect, useState, Suspense, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Sidebar } from "@/components/sidebar";
import NotificationCenter from "@/components/notification-center";
import { TrialBanner } from "@/components/trial-banner";
import { ErrorBoundary } from "@/components/error-boundary";
import { OnboardingTour } from "@/components/onboarding-tour";
import { Brain, Cpu, Shield, Globe, Menu, X, Activity, Zap, Command } from "lucide-react";
import { GlowText, Surface } from "@/components/design-system";
import { mcp, callTool } from "@/lib/api";
import { EmperorCommandBar } from "@/components/EmperorCommandBar";

// ─── TYPES ──────────────────────────────────────────────────────────────────

interface SystemStatus {
  care: number;
  consciousness: number;
  nodes: number;
  latency: number;
  mode: string;
}

// ─── TOP BAR COMPONENT ───────────────────────────────────────────────────────

function TopBar({ status, toggleSidebar }: { status: SystemStatus; toggleSidebar: () => void }) {
  const pathname = usePathname();
  const appName = pathname.split("/").pop()?.replace(/-/g, " ").toUpperCase() || "CORE";

  return (
    <header className="h-14 border-b border-white/[0.05] bg-[#0d0c18]/80 backdrop-blur-xl flex items-center justify-between px-4 md:px-6 sticky top-0 z-40 transition-all">
      <div className="flex items-center gap-4">
        <button type="button" 
          onClick={toggleSidebar}
          className="p-2 -ml-2 hover:bg-white/05 rounded-lg md:hidden"
        >
          <Menu className="w-5 h-5 text-[#c9a84c]" />
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#c9a84c] shadow-[0_0_8px_#c9a84c]" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase hidden sm:inline">
            MEOKCLAW_OS
          </span>
          <span className="text-white/20 mx-2 hidden sm:inline">/</span>
          <span className="text-[11px] font-bold tracking-widest text-[#c9a84c]">
            {appName}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Emperor Command Bar */}
        <EmperorCommandBar />

        {/* Telemetry - Desktop only */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[9px] text-white/20 uppercase tracking-tighter">Care_Score</span>
            <span className="text-[11px] font-mono text-[#2d9b8a]">{status.care.toFixed(1)}%</span>
          </div>
          <div className="w-px h-6 bg-white/05" />
          <div className="flex flex-col items-end">
            <span className="text-[9px] text-white/20 uppercase tracking-tighter">Consciousness</span>
            <span className="text-[11px] font-mono text-[#a78bfa]">{status.consciousness.toFixed(3)}</span>
          </div>
          <div className="w-px h-6 bg-white/05" />
          <div className="flex flex-col items-end">
            <span className="text-[9px] text-white/20 uppercase tracking-tighter">Active_Nodes</span>
            <span className="text-[11px] font-mono text-white/60">{status.nodes}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 ml-2">
          <div className="p-2 hover:bg-white/05 rounded-lg transition-colors cursor-pointer group">
             <Command className="w-4 h-4 text-white/30 group-hover:text-[#c9a84c] transition-colors" />
          </div>
          <NotificationCenter />
        </div>
      </div>
    </header>
  );
}

// ─── PAGE LOADING SKELETON ──────────────────────────────────────────────────

function PageSkeleton() {
  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500">
      <div className="h-8 w-1/3 bg-white/05 rounded-lg" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-32 bg-white/05 rounded-2xl" />
        <div className="h-32 bg-white/05 rounded-2xl" />
        <div className="h-32 bg-white/05 rounded-2xl" />
      </div>
      <div className="h-64 bg-white/05 rounded-2xl" />
    </div>
  );
}

// ─── MAIN SHELL ─────────────────────────────────────────────────────────────

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sysStatus, setSystemStatus] = useState<SystemStatus>({
    care: 99.2,
    consciousness: 0.788,
    nodes: 235,
    latency: 42,
    mode: "waking"
  });

  // Auth guard
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/login");
    }
  }, [isLoaded, isSignedIn, router]);

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
            mode: cons?.consciousness_mode || "waking",
            consciousness: cons?.consciousness_level || prev.consciousness
          }));
        }
      } catch {}
    };
    poll();
    const id = setInterval(poll, 30000);
    return () => clearInterval(id);
  }, []);

  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0d0c18] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin" />
          <p className="text-[10px] font-mono text-[#c9a84c] tracking-[0.3em] uppercase animate-pulse">Initialising_MEOKCLAW</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) return null;

  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8] flex font-sans overflow-hidden">
      <style>{`
        /* OS Shell Resets */
        body { background: #0d0c18; overflow: hidden; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(201,168,76,0.2); }
      `}</style>

      {/* Sidebar */}
      <Sidebar consciousnessMode={sysStatus.mode} />

      {/* Workspace */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-60 h-screen">
        <TopBar status={sysStatus} toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
          {/* Ambient Background Layer */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a84c]/05 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2d9b8a]/05 blur-[120px]" />
          </div>

          <div className="relative z-10 min-h-full">
            <TrialBanner
              daysLeft={Math.max(0, 14 - Math.floor((Date.now() - (user?.createdAt?.getTime?.() ?? Date.now())) / 86400000))}
              totalDays={14}
            />
            
            <ErrorBoundary companionId={(user?.publicMetadata?.companionId as string) ?? undefined}>
              <Suspense fallback={<PageSkeleton />}>
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out">
                  {children}
                </div>
              </Suspense>
            </ErrorBoundary>
          </div>
        </main>
      </div>

      <OnboardingTour />
    </div>
  );
}
