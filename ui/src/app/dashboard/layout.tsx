"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthProvider, useAuth } from "@/lib/auth";
import { Sidebar } from "@/components/sidebar";
import { mcp } from "@/lib/api";

function DashboardShell({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState("waking");

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [user, isLoading, router]);

  // Poll consciousness mode
  useEffect(() => {
    const poll = async () => {
      try {
        const res = await mcp.get<{ components?: { consciousness?: { consciousness_mode?: string } } }>("/health");
        setMode(res.components?.consciousness?.consciousness_mode || "waking");
      } catch {}
    };
    poll();
    const id = setInterval(poll, 15000);
    return () => clearInterval(id);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0f0e1a]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#c9a84c] border-t-transparent animate-spin" />
          <span className="text-[#c9a84c]/60 text-sm font-medium tracking-wide">Loading MEOK OS...</span>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-[#0d0c18]">
      <Sidebar consciousnessMode={mode} />
      {/* Main content — offset by sidebar width on desktop, no offset on mobile */}
      <main className="flex-1 ml-0 md:ml-60 min-h-screen bg-[#0d0c18]">
        {children}
      </main>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <DashboardShell>{children}</DashboardShell>
    </AuthProvider>
  );
}
