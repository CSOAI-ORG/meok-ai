"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-02T00:00:00Z").getTime();
const GOLD = "#c9a84c";

export function Article50Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000 * 60);
    return () => clearInterval(id);
  }, []);

  if (now === null) return null;
  const diff = TARGET - now;
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return (
    <div
      style={{
        background: "#dc2626",
        color: "white",
        padding: "10px 16px",
        textAlign: "center",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.02em",
        borderRadius: 12,
        marginBottom: 24,
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>
        ⏳ EU AI Act Article 50 deadline · <strong>{days}d {hours}h</strong> · 2 August 2026
      </span>
      <Link
        href="/article-50-kit"
        style={{
          color: GOLD,
          fontWeight: 900,
          textDecoration: "none",
          background: "rgba(255,255,255,0.1)",
          padding: "4px 10px",
          borderRadius: 8,
        }}
      >
        £99 starter kit →
      </Link>
    </div>
  );
}
