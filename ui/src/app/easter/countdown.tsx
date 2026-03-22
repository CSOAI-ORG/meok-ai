"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function EasterCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const easter = new Date("2026-04-05T08:00:00+01:00"); // 8 AM BST

    const tick = () => {
      const now = new Date();
      const diff = easter.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Don't render until client-side to avoid hydration mismatch
  if (!mounted) {
    return <div style={{ height: 96 }} />;
  }

  const units: { label: string; value: number }[] = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-end gap-3 sm:gap-6 justify-center">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-end gap-3 sm:gap-6">
          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center rounded-2xl font-mono font-black tabular-nums"
              style={{
                width: 80,
                height: 80,
                background: "rgba(201,168,76,0.08)",
                border: "1.5px solid rgba(201,168,76,0.2)",
                fontSize: "2.5rem",
                color: "#f5f0e8",
                lineHeight: 1,
                minWidth: "2ch",
              }}
            >
              {String(unit.value).padStart(2, "0")}
            </div>
            <span
              className="text-[10px] font-semibold tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}
            >
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span
              className="font-mono font-black pb-8 opacity-20 text-3xl"
              style={{ color: "#ffffff" }}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
