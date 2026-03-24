"use client";

import { useState } from "react";

interface SubscribeBarProps {
  dark?: boolean;
}

export function SubscribeBar({ dark = false }: SubscribeBarProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  if (dark) {
    // Compact inline version for dark backgrounds
    return submitted ? (
      <div className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold" style={{ background: "rgba(201,168,76,0.1)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}>
        ✓
        You&apos;re subscribed!
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-52 px-4 py-3 rounded-full text-sm outline-none transition-all"
          style={{
            background: "rgba(255,255,255,0.06)",
            color: "#f5f0e8",
            border: "1px solid rgba(255,255,255,0.12)",
            caretColor: "#c9a84c",
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-full font-bold text-sm flex-shrink-0 transition-all hover:scale-[1.02]"
          style={{ background: "#c9a84c", color: "#1a1a2e" }}
        >
          Subscribe
        </button>
      </form>
    );
  }

  // Light version (original)
  return (
    <div className="mb-12 p-6 rounded-2xl bg-white border border-[#1a1a2e]/[0.08] flex flex-col sm:flex-row items-center gap-4">
      <div className="flex-1">
        <p className="text-sm font-bold text-[#1a1a2e] mb-0.5">Get new posts by email</p>
        <p className="text-xs text-[#1a1a2e]/40">No spam. Unsubscribe any time.</p>
      </div>
      {submitted ? (
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style={{ background: "rgba(201,168,76,0.1)", color: "#c9a84c" }}>
          ✓
          Subscribed!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="flex-1 sm:w-56 px-4 py-2.5 rounded-full border border-[#1a1a2e]/[0.12] bg-[#f5f0e8] text-[#1a1a2e] text-sm placeholder:text-[#1a1a2e]/30 focus:outline-none focus:border-[#c9a84c]"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-full font-bold text-sm flex-shrink-0 transition-colors hover:bg-[#d4b463]"
            style={{ background: "#c9a84c", color: "#1a1a2e" }}
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
