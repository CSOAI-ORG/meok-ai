"use client";

import { useState, useRef } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 py-4 text-[#c9a84c] font-semibold text-lg">
        <span>✓</span>
        <span>You&apos;re on the list!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-5 py-3 rounded-full text-sm font-medium outline-none focus:ring-2 focus:ring-[#c9a84c]/60"
        style={{
          background: "#1a1a2e",
          border: "1.5px solid #c9a84c",
          color: "#f5f0e8",
        }}
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-full font-bold text-sm transition-colors whitespace-nowrap hover:bg-[#b8963e]"
        style={{ background: "#c9a84c", color: "#1a1a2e" }}
      >
        Notify me →
      </button>
    </form>
  );
}

export function SocialShareButtons() {
  const [copied, setCopied] = useState(false);
  const linkRef = useRef<HTMLButtonElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("https://meok.ai/easter");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select text manually
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
      <a
        href="https://twitter.com/intent/tweet?text=Your%20AI%20is%20about%20to%20be%20born.%20MEOK%20launches%20Easter%20Sunday%20%F0%9F%A5%9A%20meok.ai/easter"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border transition-colors hover:bg-white/10"
        style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
      >
        🐦 Tweet this
      </a>
      <a
        href="https://linkedin.com/sharing/share-offsite/?url=https://meok.ai/easter"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border transition-colors hover:bg-white/10"
        style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
      >
        📘 Share on LinkedIn
      </a>
      <button
        ref={linkRef}
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border transition-colors hover:bg-white/10"
        style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
      >
        {copied ? "✓ Copied!" : "🔗 Copy link"}
      </button>
    </div>
  );
}
