"use client";

import { useState } from "react";

const INTEREST_AREAS = [
  { value: "research", label: "Human-in-the-loop research" },
  { value: "gaming", label: "Gaming & MMO worlds" },
  { value: "robotics", label: "Robotics & physical AI" },
  { value: "space", label: "Space & orbital systems" },
  { value: "governance", label: "AI governance & policy" },
  { value: "economy", label: "Agent-driven economy" },
];

const SEASONS = [
  { value: "30-day", label: "30-day Pioneer Season" },
  { value: "90-day", label: "90-day Research Season" },
  { value: "founding", label: "Founding Citizen (first 1,000)" },
];

export default function PioneerSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    area: "research",
    season: "30-day",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email.includes("@")) {
      setStatus("err");
      setErrMsg("Please enter a valid email address");
      return;
    }
    if (!form.consent) {
      setStatus("err");
      setErrMsg("Please agree to the research participation terms");
      return;
    }
    setStatus("loading");
    setErrMsg("");
    try {
      const r = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          interest: "pioneer",
          metadata: {
            area: form.area,
            season: form.season,
            source: window.location.pathname,
            consent: form.consent,
          },
        }),
      });
      if (r.ok) {
        setStatus("ok");
        setForm({ name: "", email: "", area: "research", season: "30-day", consent: false });
      } else {
        const data = await r.json().catch(() => ({}));
        setStatus("err");
        setErrMsg(data.error || "Signup failed. Try again or email hello@meok.ai");
      }
    } catch {
      setStatus("err");
      setErrMsg("Network error. Try again or email hello@meok.ai");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-[#c9a84c]/30 bg-[#c9a84c]/10 p-8 text-center">
        <div className="text-4xl">🎉</div>
        <h3 className="mt-4 text-2xl font-bold text-white">Welcome, Pioneer.</h3>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          You&apos;re on the founding list. We&apos;ll email you when the first MEOK TOWN simulation
          opens and send your character birth link.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Ada Lovelace"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#c9a84c] focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#c9a84c] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">Primary interest</label>
          <select
            value={form.area}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#c9a84c] focus:outline-none"
          >
            {INTEREST_AREAS.map((a) => (
              <option key={a.value} value={a.value} className="bg-[#1a1a2e]">
                {a.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">Season</label>
          <select
            value={form.season}
            onChange={(e) => setForm({ ...form, season: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#c9a84c] focus:outline-none"
          >
            {SEASONS.map((s) => (
              <option key={s.value} value={s.value} className="bg-[#1a1a2e]">
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-1 h-4 w-4 accent-[#c9a84c]"
        />
        <span className="text-sm text-white/70">
          I agree to participate in MEOK Universe research. My data will be anonymized and used to
          produce governance, economic, and social-dynamics white papers under CSOAI consent
          frameworks.
        </span>
      </label>

      {status === "err" && <p className="text-sm text-red-400">{errMsg}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl bg-[#c9a84c] py-4 font-bold text-[#0d0c18] transition hover:bg-[#b8963e] disabled:opacity-70"
      >
        {status === "loading" ? "Joining…" : "Join the Pioneer Program"}
      </button>
    </form>
  );
}
