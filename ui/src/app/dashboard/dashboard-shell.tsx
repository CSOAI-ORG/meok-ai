"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Sidebar } from "@/components/sidebar";
import NotificationCenter from "@/components/notification-center";
import { TrialBanner } from "@/components/trial-banner";
import { ErrorBoundary } from "@/components/error-boundary";
import { OsEntryBanner } from "@/components/os-entry-banner";
import { OnboardingTour } from "@/components/onboarding-tour";

// ─── Page loading skeleton ─────────────────────────────────────────────────────
function PageSkeleton() {
  return (
    <div
      style={{
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        minHeight: "100vh",
        background: "#0d0c18",
      }}
    >
      <div style={{ height: 32, width: "40%", borderRadius: 8, background: "rgba(255,255,255,0.06)" }} />
      <div style={{ height: 18, width: "60%", borderRadius: 6, background: "rgba(255,255,255,0.04)" }} />
      <div style={{ marginTop: 8, display: "flex", gap: 16 }}>
        <div style={{ flex: 1, height: 120, borderRadius: 12, background: "rgba(255,255,255,0.05)" }} />
        <div style={{ flex: 1, height: 120, borderRadius: 12, background: "rgba(255,255,255,0.05)" }} />
        <div style={{ flex: 1, height: 120, borderRadius: 12, background: "rgba(255,255,255,0.05)" }} />
      </div>
      <div style={{ height: 200, borderRadius: 12, background: "rgba(255,255,255,0.04)" }} />
      <div style={{ height: 18, width: "50%", borderRadius: 6, background: "rgba(255,255,255,0.04)" }} />
      <div style={{ height: 18, width: "70%", borderRadius: 6, background: "rgba(255,255,255,0.04)" }} />
    </div>
  );
}

// ─── Floating OS Launcher ─────────────────────────────────────────────────────
function OsLauncherButton() {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {hovered && (
        <div
          style={{
            background: "#13121f",
            border: "1px solid rgba(201,168,76,0.35)",
            color: "#c9a84c",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            padding: "5px 10px",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
          }}
        >
          Enter OS Mode
        </div>
      )}
      <button
        onClick={() => router.push("/os/sovereign-os")}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Enter OS Mode"
        title="Enter OS Mode"
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "#c9a84c",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: hovered
            ? "0 0 0 4px rgba(201,168,76,0.25), 0 8px 24px rgba(201,168,76,0.35)"
            : "0 4px 16px rgba(201,168,76,0.25)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "all 0.18s ease",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a1a2e"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </div>
  );
}

export default function DashboardShell({ children }: { children: React.ReactNode }) {
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
        daysLeft={Math.max(0, 14 - Math.floor((Date.now() - (user?.createdAt?.getTime?.() ?? Date.now())) / 86400000))}
        totalDays={14}
      />
      <OsEntryBanner />
      <div className="flex flex-1 min-h-0">
        <Sidebar consciousnessMode={mode} />
        <main className="flex-1 ml-0 md:ml-60 min-h-screen bg-[#0d0c18]">
          <div className="absolute top-3 right-4 z-50 md:right-6">
            <NotificationCenter />
          </div>
          <ErrorBoundary companionId={(user?.publicMetadata?.companionId as string) ?? undefined}>
            <Suspense fallback={<PageSkeleton />}>
              {children}
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
      <OnboardingTour />
      <OsLauncherButton />
    </div>
  );
}
