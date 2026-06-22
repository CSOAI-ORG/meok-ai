"use client";

import { useEffect, useState } from "react";

export interface SovTownStatus {
  hives: number;
  passports: number;
  cum_episodes: number;
  governed_crimes: number;
  ungoverned_crimes: number;
  models_trained: number;
}

export interface SovTownHive {
  key: string;
  name: string;
  domain: string;
  lat?: number;
  lng?: number;
  episodes?: number;
  agents?: number;
  readiness?: number;
}

export interface SovTownCharacter {
  id: string;
  name: string;
  hive: string;
  archetype?: string;
}

export function useSovTownStatus() {
  const [status, setStatus] = useState<SovTownStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/sov-town/api/status", { cache: "no-store" });
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = (await res.json()) as SovTownStatus;
        if (!cancelled) setStatus(data);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err));
      }
    }
    void load();
    const timer = setInterval(load, 10_000);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  return { status, error };
}

export function useSovTownHives() {
  const [hives, setHives] = useState<SovTownHive[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/sov-town/api/hives", { cache: "no-store" });
        if (!res.ok) throw new Error(`Hives ${res.status}`);
        const data = (await res.json()) as SovTownHive[];
        if (!cancelled) setHives(data);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err));
      }
    }
    void load();
  }, []);

  return { hives, error };
}

export function useSovTownCharacters() {
  const [characters, setCharacters] = useState<SovTownCharacter[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/sov-town/api/characters", { cache: "no-store" });
        if (!res.ok) throw new Error(`Characters ${res.status}`);
        const data = (await res.json()) as SovTownCharacter[];
        if (!cancelled) setCharacters(data.slice(0, 100));
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err));
      }
    }
    void load();
  }, []);

  return { characters, error };
}
