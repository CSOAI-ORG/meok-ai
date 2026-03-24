"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ARCHETYPES = [
  {
    id: "pioneer",
    name: "Pioneer",
    description: "Action, accountability, momentum. For those who need to move.",
    icon: "⚡",
    color: "#f97316",
  },
  {
    id: "healer",
    name: "Healer",
    description: "Emotional depth, grief support, somatic awareness. For the hard days.",
    icon: "🌿",
    color: "#7BC47F",
  },
  {
    id: "scholar",
    name: "Scholar",
    description: "Socratic questioning, cross-domain synthesis. For the curious.",
    icon: "🏛️",
    color: "#c9a84c",
  },
  {
    id: "guardian",
    name: "Guardian",
    description: "Family safety, scam protection, Maternal Covenant. For the vigilant.",
    icon: "⚔️",
    color: "#f59e0b",
  },
  {
    id: "trickster",
    name: "Trickster",
    description: "Creative disruption, reframing, breaking blocks. For the stuck.",
    icon: "🎭",
    color: "#ec4899",
  },
  {
    id: "mystic",
    name: "Mystic",
    description: "Philosophical inquiry, meaning, traditions. For the seeking.",
    icon: "🌊",
    color: "#8b5cf6",
  },
];

export default function OnboardingStep2() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");

  function handleContinue() {
    if (!selected) return;
    if (typeof window !== "undefined") {
      localStorage.setItem("meok_companion_archetype", selected);
    }
    router.push("/onboarding/step-3");
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
            background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 55%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-20">
          <div className="w-full max-w-lg flex flex-col gap-8">

            {/* Progress bar */}
            <div className="w-full h-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="h-1 rounded-full transition-all" style={{ width: "66%", background: "#c9a84c" }} />
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <span
                  key={s}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: s <= 2 ? "#c9a84c" : "rgba(201,168,76,0.25)" }}
                />
              ))}
              <span className="ml-2 text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9a84c" }}>
                Step 2 of 3
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h1 className="font-black text-3xl sm:text-4xl text-white leading-tight">
                What kind of companion do you need?
              </h1>
              <p className="text-white/50 text-base leading-relaxed">
                Your archetype shapes how your AI thinks, speaks, and cares for you.
              </p>
            </div>

            {/* Archetype cards — 2×3 grid */}
            <div className="grid grid-cols-2 gap-3">
              {ARCHETYPES.map((arch) => {
                const isSelected = selected === arch.id;
                return (
                  <button
                    key={arch.id}
                    onClick={() => setSelected(arch.id)}
                    className="flex flex-col items-start gap-3 rounded-2xl p-4 text-left transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: isSelected ? `${arch.color}18` : "rgba(255,255,255,0.03)",
                      border: isSelected ? `1px solid ${arch.color}` : "1px solid rgba(201,168,76,0.12)",
                      boxShadow: isSelected ? `0 0 20px ${arch.color}25` : "none",
                    }}
                  >
                    <span
                      className="text-xl flex items-center justify-center w-10 h-10 rounded-xl"
                      style={{ background: isSelected ? `${arch.color}28` : "rgba(201,168,76,0.08)" }}
                    >
                      {arch.icon}
                    </span>
                    <div>
                      <p
                        className="font-bold text-sm"
                        style={{ color: isSelected ? arch.color : "white" }}
                      >
                        {arch.name}
                      </p>
                      <p className="text-white/50 text-xs mt-1 leading-relaxed">{arch.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sovereign note */}
            <p className="text-center text-xs" style={{ color: "rgba(201,168,76,0.45)" }}>
              ✦ Your Sovereign archetype unlocks after 50 interactions
            </p>

            {/* CTA */}
            <button
              onClick={handleContinue}
              disabled={!selected}
              className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:opacity-90 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                color: "#0d0c18",
                boxShadow: selected ? "0 0 40px rgba(201,168,76,0.25)" : "none",
              }}
            >
              Continue →
            </button>

            <Link
              href="/onboarding/step-1"
              className="text-center text-sm transition-opacity hover:opacity-70"
              style={{ color: "rgba(201,168,76,0.55)" }}
            >
              ← Back
            </Link>

          </div>
        </div>

      </main>
    </>
  );
}
