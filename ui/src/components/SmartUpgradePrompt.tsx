"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Zap, Crown, Sparkles, Gift, ArrowRight, Clock } from "lucide-react";
import { UPGRADE_PROMPTS } from "@/lib/monetization";
import { useToast } from "@/components/Toast";

interface SmartUpgradePromptProps {
  userTier: "explorer" | "sovereign" | "family";
  messagesUsed: number;
  messagesLimit: number;
  daysActive: number;
  totalMessages: number;
  triggerType: "messages" | "feature" | "memory" | "streak";
  featureName?: string;
}

export function SmartUpgradePrompt({
  userTier,
  messagesUsed,
  messagesLimit,
  daysActive,
  totalMessages,
  triggerType,
  featureName,
}: SmartUpgradePromptProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { addToast } = useToast();

  useEffect(() => {
    // Check if already dismissed recently
    const dismissed = localStorage.getItem(`upgrade-dismissed-${triggerType}`);
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      if (Date.now() - dismissedTime < 24 * 60 * 60 * 1000) {
        return; // Don't show if dismissed within 24h
      }
    }

    // Determine if we should show
    let shouldShow = false;
    
    if (triggerType === "messages" && messagesUsed >= messagesLimit * 0.8) {
      shouldShow = true;
    } else if (triggerType === "feature" && featureName) {
      shouldShow = true;
    } else if (triggerType === "memory" && totalMessages > 100) {
      shouldShow = true;
    } else if (triggerType === "streak" && daysActive >= 7) {
      shouldShow = true;
    }

    if (shouldShow) {
      setIsVisible(true);
      
      // Set countdown for urgency
      if (triggerType === "messages" && messagesUsed >= messagesLimit) {
        setCountdown(300); // 5 minutes of urgency
      }
    }
  }, [triggerType, messagesUsed, messagesLimit, totalMessages, daysActive, featureName]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem(`upgrade-dismissed-${triggerType}`, Date.now().toString());
  };

  const handleUpgrade = () => {
    // Track conversion attempt
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "upgrade_click", {
        event_category: "monetization",
        event_label: triggerType,
        value: userTier === "explorer" ? 9 : 29,
      });
    }
  };

  if (!isVisible || isDismissed) return null;

  // Get appropriate prompt
  const prompt = UPGRADE_PROMPTS.find((p) => {
    if (triggerType === "messages" && p.id === "message_limit_warning") return true;
    if (triggerType === "feature" && p.id.includes("ralph")) return true;
    if (triggerType === "memory" && p.id === "memory_milestone") return true;
    if (triggerType === "streak" && p.id === "power_user") return true;
    return false;
  }) || UPGRADE_PROMPTS[0];

  const isUrgent = triggerType === "messages" && messagesUsed >= messagesLimit;
  const discount = isUrgent ? 20 : prompt.discount || 0;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 w-[400px] max-w-[calc(100vw-2rem)] animate-toast-in ${
        isUrgent ? "animate-pulse" : ""
      }`}
    >
      <div
        className={`rounded-2xl border p-5 shadow-2xl ${
          isUrgent
            ? "bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-500/30"
            : "bg-gradient-to-r from-[#c9a84c]/20 to-[#c9a84c]/10 border-[#c9a84c]/30"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                isUrgent ? "bg-red-500/20" : "bg-[#c9a84c]/20"
              }`}
            >
              {isUrgent ? (
                <Clock className="w-6 h-6 text-red-400" />
              ) : (
                <Crown className="w-6 h-6 text-[#c9a84c]" />
              )}
            </div>
            <div>
              <h3 className={`font-bold text-lg ${isUrgent ? "text-red-400" : "text-white"}`}>
                {isUrgent ? "Messages Exhausted!" : prompt.headline}
              </h3>
              {countdown > 0 && (
                <p className="text-red-400 text-sm font-medium">
                  {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, "0")} left for discount
                </p>
              )}
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="p-1.5 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-white/70 mt-3 leading-relaxed">
          {isUrgent
            ? `You've used all ${messagesLimit} messages today. Your companion is resting. Upgrade now for unlimited access.`
            : prompt.description}
        </p>

        {discount > 0 && (
          <div className="mt-3 flex items-center gap-2">
            <Gift className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[#c9a84c] font-semibold text-sm">
              {discount}% off your first month!
            </span>
          </div>
        )}

        <div className="mt-4 flex gap-3">
          <Link
            href="/pricing"
            onClick={handleUpgrade}
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              isUrgent
                ? "bg-red-500 text-white hover:bg-red-400"
                : "bg-[#c9a84c] text-[#0d0c18] hover:bg-[#d4b85c]"
            }`}
          >
            {isUrgent ? "Upgrade Now" : prompt.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={handleDismiss}
            className="px-4 py-2.5 rounded-lg border border-white/20 text-white/60 text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Maybe Later
          </button>
        </div>

        {userTier === "explorer" && (
          <p className="mt-3 text-xs text-white/40 text-center">
            Join 2,000+ users who upgraded this week
          </p>
        )}
      </div>
    </div>
  );
}

// Mini prompt for inline use
export function MiniUpgradePrompt({
  feature,
  className = "",
}: {
  feature: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-xs ${className}`}
    >
      <Sparkles className="w-3 h-3 text-[#c9a84c]" />
      <span className="text-white/70">{feature} requires</span>
      <Link
        href="/pricing"
        className="text-[#c9a84c] font-semibold hover:underline"
      >
        Sovereign
      </Link>
    </div>
  );
}

// Feature gate with preview
export function FeatureGate({
  children,
  requiredTier,
  userTier,
  preview,
}: {
  children: React.ReactNode;
  requiredTier: "sovereign" | "family";
  userTier: "explorer" | "sovereign" | "family";
  preview?: React.ReactNode;
}) {
  const hasAccess =
    (requiredTier === "sovereign" && userTier !== "explorer") ||
    (requiredTier === "family" && userTier === "family");

  if (hasAccess) return <>{children}</>;

  return (
    <div className="relative">
      {preview && (
        <div className="opacity-50 pointer-events-none filter blur-[2px]">
          {preview}
        </div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#13121f]/80 backdrop-blur-sm rounded-xl p-6">
        <Zap className="w-8 h-8 text-[#c9a84c] mb-2" />
        <p className="text-white font-semibold mb-1">Upgrade to unlock</p>
        <p className="text-white/50 text-sm text-center mb-4">
          This feature requires {requiredTier === "family" ? "Family" : "Sovereign"} tier
        </p>
        <Link
          href="/pricing"
          className="px-4 py-2 rounded-lg bg-[#c9a84c] text-[#0d0c18] font-semibold text-sm hover:bg-[#d4b85c] transition-colors"
        >
          Upgrade Now
        </Link>
      </div>
    </div>
  );
}
