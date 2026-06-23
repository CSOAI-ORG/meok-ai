"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Sparkles, ArrowRight } from "lucide-react";

interface WelcomeBannerProps {
  userName?: string;
  daysSinceHatch: number;
  onDismiss?: () => void;
}

export function WelcomeBanner({ userName, daysSinceHatch, onDismiss }: WelcomeBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [greeting, setGreeting] = useState("Good morning");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
    // Remember dismissal for 24 hours
    localStorage.setItem("welcomeBannerDismissed", Date.now().toString());
  };

  if (!isVisible) return null;

  // New user (less than 3 days)
  if (daysSinceHatch < 3) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#c9a84c]/20 via-[#c9a84c]/10 to-transparent border border-[#c9a84c]/30 p-5 mb-6 animate-fade-in-up">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-[#c9a84c]" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">
                Welcome to MEOK, {userName || "friend"}!
              </h3>
              <p className="text-sm text-white/60">
                Your companion is hatching. Start chatting to build your first memories.
              </p>
            </div>
          </div>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c9a84c] text-[#0d0c18] font-medium text-sm hover:bg-[#d4b85c] transition-colors"
          >
            Start chatting
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <button type="button"
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1.5 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors"
          aria-label="Dismiss welcome banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // Regular welcome back
  return (
    <div className="relative rounded-2xl bg-white/[0.03] border border-white/10 p-5 mb-6 animate-fade-in-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">
            {greeting}, {userName || "friend"}
          </h2>
          <p className="text-sm text-white/50">
            Day {daysSinceHatch + 1} with your companion. {daysSinceHatch > 7 ? "Your bond is growing stronger." : "Keep building those memories."}
          </p>
        </div>
        <button type="button"
          onClick={handleDismiss}
          className="p-1.5 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
