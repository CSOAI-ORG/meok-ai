"use client";

/**
 * MEOK Analytics React Hooks
 * 
 * Client-side hooks for analytics tracking. Must be used in client components only.
 */

import { useEffect, useRef } from "react";
import { getAnalytics } from "@/lib/analytics";

export function useAnalytics() {
  return getAnalytics();
}

export function usePageView(path: string) {
  const analytics = useAnalytics();
  const startTime = useRef(Date.now());

  useEffect(() => {
    startTime.current = Date.now();
    
    analytics.track("page_view", { path });

    return () => {
      const timeOnPage = Date.now() - startTime.current;
      analytics.track("page_view", { path, timeOnPage });
    };
  }, [path, analytics]);
}

export function useFeatureTracking(feature: string) {
  const analytics = useAnalytics();

  return {
    trackUse: (context?: string) => {
      analytics.track("feature_used", { feature, context });
    },
  };
}

export function useSessionTracking() {
  const analytics = useAnalytics();
  const messageCount = useRef(0);

  useEffect(() => {
    return () => {
      analytics.trackSessionEnd(messageCount.current);
    };
  }, [analytics]);

  return {
    incrementMessageCount: () => {
      messageCount.current += 1;
    },
  };
}
