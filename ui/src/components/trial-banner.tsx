"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const TRIAL_DAYS = 30;
const DISMISS_KEY = "meok-trial-banner-dismissed";

interface TrialBannerProps {
  tier: string;
  createdAt: string;
}

export function TrialBanner({ tier, createdAt }: TrialBannerProps) {
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(DISMISS_KEY) === "true";
  });

  const daysRemaining = useMemo(() => {
    const created = new Date(createdAt);
    const expires = new Date(created.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);
    const now = new Date();
    const diff = Math.ceil((expires.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(0, diff);
  }, [createdAt]);

  if (tier !== "explorer" || dismissed || daysRemaining <= 0) return null;

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(DISMISS_KEY, "true");
    }
  };

  return (
    <div
      className="w-full flex items-center justify-center gap-4 px-4 py-2.5 text-sm font-medium"
      style={{ background: GOLD, color: DEEP }}
    >
      <span>
        Free trial:{" "}
        <strong>
          {daysRemaining} {daysRemaining === 1 ? "day" : "days"} remaining
        </strong>
      </span>

      <Link
        href="/pricing"
        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-opacity hover:opacity-80"
        style={{ background: DEEP, color: GOLD }}
      >
        Upgrade now
      </Link>

      <button
        type="button"
        onClick={handleDismiss}
        className="ml-auto p-1 rounded-full transition-opacity hover:opacity-60"
        style={{ color: DEEP }}
        aria-label="Dismiss trial banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
