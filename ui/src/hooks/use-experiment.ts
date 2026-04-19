"use client";

/**
 * MEOK A/B Testing React Hooks
 * 
 * Client-side hooks for A/B testing. These use browser APIs and React hooks,
 * so they must be used in client components only.
 */

import { useState, useEffect, useCallback } from "react";
import {
  ACTIVE_EXPERIMENTS,
  assignVariant,
  getExperimentById,
  type Experiment,
} from "@/lib/ab-testing";

// ── Types ───────────────────────────────────────────────────────────────────

interface UserContext {
  userId?: string;
  tier: string;
  daysSinceSignup: number;
  country?: string;
  device?: string;
  referrer?: string;
}

// ── Experiment Store ────────────────────────────────────────────────────────

class ExperimentStore {
  private assignments: Map<string, string> = new Map();
  private userId: string | null = null;

  setUserId(userId: string) {
    this.userId = userId;
    this.loadAssignments();
  }

  getVariant(experimentId: string): string | null {
    const key = this.getKey(experimentId);
    
    // Check stored assignment
    let variant = this.assignments.get(key);
    if (variant) return variant;

    // Check localStorage
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(key);
      if (stored) {
        this.assignments.set(key, stored);
        return stored;
      }
    }

    // New assignment
    const experiment = ACTIVE_EXPERIMENTS.find((e) => e.id === experimentId);
    if (!experiment) return null;

    const userContext: UserContext = {
      userId: this.userId || "anonymous",
      tier: "explorer",
      daysSinceSignup: 0,
    };

    // Check if user qualifies for experiment
    if (experiment.targetAudience && !experiment.targetAudience(userContext)) {
      return null;
    }

    variant = assignVariant(experimentId, this.userId || "anonymous", experiment);
    this.assignments.set(key, variant);
    
    if (typeof window !== "undefined") {
      localStorage.setItem(key, variant);
    }

    // Track assignment
    this.trackAssignment(experimentId, variant);

    return variant;
  }

  getVariantConfig(experimentId: string): Record<string, unknown> | null {
    const variantId = this.getVariant(experimentId);
    if (!variantId) return null;

    const experiment = ACTIVE_EXPERIMENTS.find((e) => e.id === experimentId);
    if (!experiment) return null;

    return experiment.variants[variantId]?.config || null;
  }

  private getKey(experimentId: string): string {
    return `ab_test:${experimentId}:${this.userId || "anonymous"}`;
  }

  private loadAssignments() {
    if (typeof window === "undefined") return;
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("ab_test:")) {
        const value = localStorage.getItem(key);
        if (value) {
          this.assignments.set(key, value);
        }
      }
    }
  }

  private trackAssignment(experimentId: string, variant: string) {
    // Send to analytics
    if (typeof window !== "undefined" && (window as unknown as { gtag?: (event: string, name: string, params: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (event: string, name: string, params: Record<string, unknown>) => void }).gtag("event", "experiment_assignment", {
        experiment_id: experimentId,
        variant,
      });
    }

    // Store in DB via API
    fetch("/api/experiments/assignment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        experimentId,
        variant,
        userId: this.userId,
        timestamp: new Date().toISOString(),
      }),
    }).catch(console.error);
  }
}

// Singleton
const experimentStore = new ExperimentStore();

export function getExperimentStore(): ExperimentStore {
  return experimentStore;
}

// ── React Hooks ─────────────────────────────────────────────────────────────

export function useExperiment(experimentId: string) {
  const [variant, setVariant] = useState<string | null>(null);
  const [config, setConfig] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    const store = getExperimentStore();
    setVariant(store.getVariant(experimentId));
    setConfig(store.getVariantConfig(experimentId));
  }, [experimentId]);

  const trackEvent = useCallback((event: string, value?: number) => {
    if (!variant) return;

    fetch("/api/experiments/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        experimentId,
        variant,
        event,
        value,
        timestamp: new Date().toISOString(),
      }),
    }).catch(console.error);
  }, [experimentId, variant]);

  return { variant, config, trackEvent };
}

export function useFeatureFlag(flagName: string): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Check URL override
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get(`flag_${flagName}`) === "true") {
        setEnabled(true);
        return;
      }
    }

    // Check localStorage
    const stored = localStorage.getItem(`feature_flag:${flagName}`);
    if (stored) {
      setEnabled(stored === "true");
      return;
    }

    // Default based on environment
    setEnabled(process.env.NODE_ENV === "development");
  }, [flagName]);

  return enabled;
}

export function useExperiments() {
  const [experiments, setExperiments] = useState<Experiment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch active experiments from server
    fetch("/api/experiments/assignment")
      .then(res => res.json())
      .then(data => {
        setExperiments(data.experiments || ACTIVE_EXPERIMENTS);
        setIsLoading(false);
      })
      .catch(() => {
        setExperiments(ACTIVE_EXPERIMENTS);
        setIsLoading(false);
      });
  }, []);

  return { experiments, isLoading };
}
