"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Sidebar } from "@/components/sidebar";
import NotificationCenter from "@/components/notification-center";
import { TrialBanner } from "@/components/trial-banner";
import { ErrorBoundary } from "@/components/error-boundary";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [mode, setMode] = useState("waking");

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/login");
    }
  }, [isLoaded, isSignedIn, router]);

  // Poll consciousness mode
  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch("/api/health");
        if (res.ok) {
          const data = await res.json();
          setMode(data.components?.consciousness?.consciousness_mode || "waking");
        }
      } catch {}
    };
    poll();
    const id = setInterval(poll, 15000);
    return () => clearInterval(id);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0f0e1a]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#c9a84c] border-t-transparent animate-spin" />
          <span className="text-[#c9a84c]/60 text-sm font-medium tracking-wide">Loading MEOK OS...</span>
        </div>
      </div>
    );
  }

  if (!isSignedIn) return null;

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0c18]">
      <TrialBanner
        tier={(user?.publicMetadata?.tier as string) ?? "explorer"}
        createdAt={user?.createdAt?.toISOString() ?? new Date().toISOString()}
      />
      <div className="flex flex-1 min-h-0">
        <Sidebar consciousnessMode={mode} />
        {/* Main content — offset by sidebar width on desktop, no offset on mobile */}
        <main className="flex-1 ml-0 md:ml-60 min-h-screen bg-[#0d0c18]">
          <div className="absolute top-3 right-4 z-50 md:right-6">
            <NotificationCenter />
          </div>
          <ErrorBoundary companionId={(user?.publicMetadata?.companionId as string) ?? undefined}>
            {children}
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
}
