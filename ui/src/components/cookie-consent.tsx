"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentLevel = "all" | "essential" | null;

const STORAGE_KEY = "meok_cookie_consent";
const STORAGE_VERSION = "1";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Don't show in bot/SSR context
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash on initial load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
    // Re-check if version changed
    try {
      const { version } = JSON.parse(stored);
      if (version !== STORAGE_VERSION) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = (level: ConsentLevel) => {
    const data = { level, version: STORAGE_VERSION, ts: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setVisible(false);

    // Notify the rest of the app that consent changed so analytics can mount/unmount
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("meok-consent-changed"));
    }

    // Fire PostHog opt-in/out based on consent
    if (typeof window !== "undefined" && (window as Window & { posthog?: { opt_in_capturing: () => void; opt_out_capturing: () => void } }).posthog) {
      if (level === "all") {
        (window as Window & { posthog?: { opt_in_capturing: () => void; opt_out_capturing: () => void } }).posthog?.opt_in_capturing();
      } else {
        (window as Window & { posthog?: { opt_in_capturing: () => void; opt_out_capturing: () => void } }).posthog?.opt_out_capturing();
      }
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50
                 bg-[#13131a] border border-white/10 rounded-2xl shadow-2xl shadow-black/60
                 p-5 text-sm animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <p className="text-white/80 leading-relaxed">
          We use cookies to analyse how MEOK is used and improve the experience.
          Your sovereign data stays yours — we never sell it.{" "}
          <Link href="/privacy" className="text-cyan-400 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>

      {showDetails && (
        <div className="mb-4 space-y-2 text-xs text-white/50 border-t border-white/10 pt-3">
          <div className="flex justify-between">
            <span className="font-medium text-white/70">Essential cookies</span>
            <span className="text-green-400">Always on</span>
          </div>
          <p className="text-white/40">Authentication, security, session state. Required for MEOK to work.</p>
          <div className="flex justify-between mt-2">
            <span className="font-medium text-white/70">Analytics cookies</span>
            <span className="text-white/40">Optional</span>
          </div>
          <p className="text-white/40">
            PostHog analytics (EU cloud, GDPR-compliant). Helps us understand which features help people most.
            No data is sold or shared with ad networks.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button type="button"
            onClick={() => accept("all")}
            className="flex-1 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold
                       rounded-xl transition-colors text-sm"
          >
            Accept all
          </button>
          <button type="button"
            onClick={() => accept("essential")}
            className="flex-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white/70
                       rounded-xl transition-colors text-sm border border-white/10"
          >
            Essential only
          </button>
        </div>
        <button type="button"
          onClick={() => setShowDetails((v) => !v)}
          className="text-xs text-white/30 hover:text-white/50 transition-colors py-1"
        >
          {showDetails ? "Hide details ↑" : "Cookie details ↓"}
        </button>
      </div>
    </div>
  );
}

// Hook to read consent level anywhere in the app
export function useConsentLevel(): ConsentLevel {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const { level } = JSON.parse(stored);
    return level as ConsentLevel;
  } catch {
    return null;
  }
}
