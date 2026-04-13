"use client";

import { useEffect, useState, Suspense } from "react";
import { PostHogProvider } from "@/components/posthog-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

type ConsentLevel = "all" | "essential" | null;

const STORAGE_KEY = "meok_cookie_consent";

function getConsent(): ConsentLevel {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw).level ?? null;
  } catch {
    return null;
  }
}

export function ConsentAwareProviders({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentLevel>(null);

  useEffect(() => {
    setConsent(getConsent());
    const handler = () => setConsent(getConsent());
    window.addEventListener("meok-consent-changed", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("meok-consent-changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const allowAnalytics = consent === "all";

  return (
    <>
      {allowAnalytics ? (
        <Suspense>
          <PostHogProvider>{children}</PostHogProvider>
        </Suspense>
      ) : (
        children
      )}
      {allowAnalytics && <Analytics />}
      {allowAnalytics && <SpeedInsights />}
    </>
  );
}
