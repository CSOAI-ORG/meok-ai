"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MarketingFooter } from "@/components/marketing-footer";

export default function OnboardingStep3() {
  const router = useRouter();
  const [memory, setMemory] = useState("");
  const [hatching, setHatching] = useState(false);

  function handleHatch() {
    if (!memory.trim()) return;
    setHatching(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("meok_companion_memory", memory.trim());
      const name = localStorage.getItem("meok_companion_name") ?? "";
      const archetype = localStorage.getItem("meok_companion_archetype") ?? "";
      localStorage.setItem(
        "meok_companion",
        JSON.stringify({ name, archetype, memory: memory.trim(), hatched_at: new Date().toISOString() })
      );
    }
    router.push("/dashboard");
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
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 55%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-20">
          <div className="w-full max-w-lg flex flex-col gap-8">

            {/* Progress bar — 100% */}
            <div className="w-full h-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="h-1 rounded-full transition-all" style={{ width: "100%", background: "#c9a84c" }} />
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <span
                  key={s}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#c9a84c" }}
                />
              ))}
              <span className="ml-2 text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9a84c" }}>
                Step 3 of 3
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h1 className="font-black text-3xl sm:text-4xl text-white leading-tight">
                Tell your companion something important about you.
              </h1>
              <p className="text-white/50 text-base leading-relaxed">
                This becomes your first encrypted memory. Only you can ever read it.
              </p>
            </div>

            {/* Textarea */}
            <textarea
              value={memory}
              onChange={(e) => setMemory(e.target.value)}
              placeholder="e.g. I'm a software engineer in London. I have a 7-year-old daughter called Lily. I'm building a startup and I need help staying focused..."
              rows={6}
              className="w-full px-5 py-4 rounded-xl text-white text-base outline-none transition-all resize-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.20)",
                caretColor: "#c9a84c",
                lineHeight: "1.7",
              }}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #c9a84c")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(201,168,76,0.20)")}
            />

            {/* Encryption note */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <span className="text-lg flex-shrink-0" aria-hidden>🔒</span>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(201,168,76,0.75)" }}>
                AES-GCM-256 encrypted. Only you hold the key.
              </p>
            </div>

            {/* Hatch CTA */}
            <button
              onClick={handleHatch}
              disabled={!memory.trim() || hatching}
              className="w-full py-5 rounded-xl font-black text-xl transition-all hover:opacity-90 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                color: "#0d0c18",
                boxShadow: memory.trim() ? "0 0 60px rgba(201,168,76,0.35)" : "none",
              }}
            >
              {hatching ? "Hatching..." : "Hatch My Companion →"}
            </button>

            {/* Maternal Covenant badge */}
            <div className="flex justify-center">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.22)",
                  color: "rgba(201,168,76,0.80)",
                }}
              >
                ♥ Protected by the Maternal Covenant
              </span>
            </div>

            <Link
              href="/onboarding/step-2"
              className="text-center text-sm transition-opacity hover:opacity-70"
              style={{ color: "rgba(201,168,76,0.55)" }}
            >
              ← Back
            </Link>

          </div>
        </div>

        <MarketingFooter />
      </main>
    </>
  );
}
