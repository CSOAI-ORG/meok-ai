"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MarketingFooter } from "@/components/marketing-footer";

const SUGGESTIONS = ["Atlas", "Mira", "Sol", "Sage", "Nova", "Echo", "Lumen", "Wren"];

export default function OnboardingStep1() {
  const router = useRouter();
  const [name, setName] = useState("");

  function handleContinue() {
    if (!name.trim()) return;
    if (typeof window !== "undefined") {
      localStorage.setItem("meok_companion_name", name.trim());
    }
    router.push("/onboarding/step-2");
  }

  return (
    <>
      <main className="min-h-screen bg-[#0d0c18] text-white flex flex-col">

        {/* Starfield */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        {/* Egg glow at top */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 55%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-20">
          <div className="w-full max-w-lg flex flex-col gap-8">

            {/* Progress bar */}
            <div className="w-full h-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="h-1 rounded-full transition-all" style={{ width: "33%", background: "#c9a84c" }} />
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <span
                  key={s}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: s === 1 ? "#c9a84c" : "rgba(201,168,76,0.25)" }}
                />
              ))}
              <span className="ml-2 text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9a84c" }}>
                Step 1 of 3
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h1 className="font-black text-3xl sm:text-4xl text-white leading-tight">
                What will you call your companion?
              </h1>
              <p className="text-white/50 text-base leading-relaxed">
                This is the first act of your covenant. Choose with intention.
              </p>
            </div>

            {/* Input */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleContinue()}
              placeholder="e.g. Atlas, Mira, Sol, Sage..."
              className="w-full px-5 py-4 rounded-xl text-white text-base outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.20)",
                caretColor: "#c9a84c",
              }}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #c9a84c")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(201,168,76,0.20)")}
            />

            {/* Suggestion chips */}
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setName(s)}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all hover:opacity-80 active:scale-95"
                  style={{
                    background: name === s ? "rgba(201,168,76,0.20)" : "rgba(255,255,255,0.05)",
                    border: name === s ? "1px solid #c9a84c" : "1px solid rgba(255,255,255,0.10)",
                    color: name === s ? "#c9a84c" : "rgba(255,255,255,0.60)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={handleContinue}
              disabled={!name.trim()}
              className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:opacity-90 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                color: "#0d0c18",
                boxShadow: name.trim() ? "0 0 40px rgba(201,168,76,0.25)" : "none",
              }}
            >
              Continue →
            </button>

            {/* Back link */}
            <Link
              href="/birth"
              className="text-center text-sm transition-opacity hover:opacity-70"
              style={{ color: "rgba(201,168,76,0.55)" }}
            >
              ← Back to Birth Ceremony
            </Link>

          </div>
        </div>

        <MarketingFooter />
      </main>
    </>
  );
}
