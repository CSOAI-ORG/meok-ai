"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-02T00:00:00+02:00").getTime();
const GOLD = "#c9a84c";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

function getTimeLeft(now: number): TimeLeft {
  const diff = TARGET - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, minutes };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[4.5rem] flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <span className="text-3xl font-extrabold tabular-nums" style={{ color: GOLD }}>
        {pad(value)}
      </span>
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{label}</span>
    </div>
  );
}

export function Article50CountdownFull() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTime(getTimeLeft(Date.now()));
    tick();
    const id = setInterval(tick, 1000 * 60);
    return () => clearInterval(id);
  }, []);

  if (time === null) {
    return (
      <div className="flex justify-center gap-3">
        <Unit value={0} label="days" />
        <Unit value={0} label="hours" />
        <Unit value={0} label="minutes" />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Unit value={time.days} label="days" />
      <Unit value={time.hours} label="hours" />
      <Unit value={time.minutes} label="minutes" />
    </div>
  );
}
