"use client";

import { useEffect, useState } from "react";

interface WaitlistCountProps {
  fallback?: number;
  className?: string;
}

export function WaitlistCount({ fallback = 0, className = "" }: WaitlistCountProps) {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function fetchCount() {
      try {
        const res = await fetch("/api/waitlist", { cache: "no-store" });
        if (!res.ok) throw new Error("Status " + res.status);
        const data = await res.json();
        if (!cancelled) setCount(typeof data.count === "number" ? data.count : fallback);
      } catch (err) {
        console.error("[WaitlistCount] failed to fetch count:", err);
        if (!cancelled) setCount(fallback);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchCount();
    return () => {
      cancelled = true;
    };
  }, [fallback]);

  if (loading || count === null) {
    return (
      <span className={`inline-block align-middle ${className}`}>
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="tabular-nums">— pioneers waiting</span>
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#2d9b8a] animate-pulse" />
      <span className="tabular-nums font-semibold text-[#c9a84c]">
        {count.toLocaleString()}
      </span>
      <span className="text-white/60">pioneers waiting</span>
    </span>
  );
}
