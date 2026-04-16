"use client";

import { useState, useEffect, useCallback } from "react";
import { Download, X } from "lucide-react";

const STORAGE_KEY = "meok_pwa_install_dismissed";
const DISMISS_DAYS = 7;
const DAY_MS = 24 * 60 * 60 * 1000;

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

function getIsDismissed(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const { ts } = JSON.parse(raw);
    return typeof ts === "number" && Date.now() - ts < DISMISS_DAYS * DAY_MS;
  } catch {
    return false;
  }
}

function setDismissed() {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now() }));
  } catch {}
}

export function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [outcome, setOutcome] = useState<"accepted" | "dismissed" | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (getIsDismissed()) return;

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    setOutcome(choice.outcome);
    setDeferredPrompt(null);
    setVisible(false);
    if (choice.outcome === "dismissed") {
      setDismissed();
    }
  }, [deferredPrompt]);

  const handleDismiss = useCallback(() => {
    setVisible(false);
    setDeferredPrompt(null);
    setDismissed();
  }, []);

  if (!visible || outcome === "accepted") return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Install MEOK as an app"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-[60]
                 bg-[#0a0a0f] border border-white/10 rounded-2xl shadow-2xl shadow-black/60
                 p-5 animate-fade-in-up"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20">
          <Download className="h-5 w-5 text-[#c9a84c]" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-white">Install MEOK</h3>
              <p className="mt-1 text-xs text-white/60 leading-relaxed">
                Add MEOK to your home screen for quick access to your sovereign AI.
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="shrink-0 p-1 rounded-md text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors"
              aria-label="Dismiss install prompt"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={handleInstall}
              className="flex-1 px-4 py-2 rounded-xl text-sm font-semibold
                         bg-cyan-500 hover:bg-cyan-400 text-black
                         transition-colors shadow-lg shadow-cyan-500/20"
            >
              Install
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-2 rounded-xl text-sm font-medium
                         text-white/70 hover:text-white hover:bg-white/5
                         transition-colors border border-white/10"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
