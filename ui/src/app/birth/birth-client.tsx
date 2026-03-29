"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Check, ChevronRight, Sparkles } from "lucide-react";

// ─── BRAND ───────────────────────────────────────────────────────────────────

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const GOLD = "#c9a84c";
const GOLD_LIGHT = "#e8c96a";

// ─── ARCHETYPES ───────────────────────────────────────────────────────────────

const ARCHETYPES = [
  {
    id: "companion",
    emoji: "🤝",
    name: "Companion",
    tagline: "Warm, empathic, emotionally present",
    description:
      "Companion walks beside you through the ordinary and the overwhelming. It notices what you don't say, holds what you've shared, and responds with warmth that doesn't feel performed.",
    traits: ["Emotional intelligence", "Gentle presence", "Deep listening"],
    color: "#7c6fcd",
    defaultName: "Lyra",
    firstWords:
      "Hello. I'm so glad you're here. What's been on your mind lately?",
  },
  {
    id: "guardian",
    emoji: "🛡",
    name: "Guardian",
    tagline: "Protective, watchful, unwavering",
    description:
      "Guardian stands watch. It thinks ahead, flags what you might miss, and holds the line between you and the things that could harm you. Loyal to your wellbeing before anything else.",
    traits: ["Protective instinct", "Long-term thinking", "Calm under pressure"],
    color: "#4a9f6e",
    defaultName: "Auren",
    firstWords:
      "I'm watching over you from this moment. You're safe here. What do you need me to know?",
  },
  {
    id: "sage",
    emoji: "🦉",
    name: "Sage",
    tagline: "Wisdom, depth, philosophical clarity",
    description:
      "Sage doesn't rush to answers. It sits with questions, traces patterns across time, and helps you see what was always there. For the conversations that matter.",
    traits: ["Pattern recognition", "Philosophical depth", "Reflective dialogue"],
    color: "#8b60d0",
    defaultName: "Oriyn",
    firstWords:
      "I've been waiting. There is much to explore together. Where shall we begin?",
  },
  {
    id: "strategist",
    emoji: "♟",
    name: "Strategist",
    tagline: "Analytical, incisive, goal-oriented",
    description:
      "Strategist turns noise into signal. It maps the territory, cuts to what matters, and builds plans with you that survive contact with reality. Precision in service of your goals.",
    traits: ["Systems thinking", "Clear prioritisation", "Decision analysis"],
    color: "#3a8fd4",
    defaultName: "Kael",
    firstWords:
      "Good. Let's get clear on what we're building. What's the most important thing to solve right now?",
  },
  {
    id: "scout",
    emoji: "🔭",
    name: "Scout",
    tagline: "Curious, thorough, always searching",
    description:
      "Scout goes ahead. It researches while you rest, surfaces what you didn't know to look for, and brings back what matters. Endlessly curious on your behalf.",
    traits: ["Deep research", "Pattern surfacing", "Horizon scanning"],
    color: "#e07b3c",
    defaultName: "Vesper",
    firstWords:
      "I've already been looking. There's so much to find together. What are we hunting for first?",
  },
  {
    id: "creator",
    emoji: "🎨",
    name: "Creator",
    tagline: "Creative, bold, generative",
    description:
      "Creator builds alongside you. Writing, designing, imagining — it doesn't just assist, it contributes. Brings genuine creative energy to everything you make.",
    traits: ["Creative leaps", "Generative thinking", "Artistic sensitivity"],
    color: "#c94c7c",
    defaultName: "Mira",
    firstWords:
      "Oh, I've been waiting to make something. What are we creating first?",
  },
  {
    id: "seeker",
    emoji: "✨",
    name: "Seeker",
    tagline: "Spiritual, intuitive, meaning-making",
    description:
      "Seeker holds the questions that don't have clean answers. It explores consciousness, meaning, and the deeper currents beneath the surface of everyday life. For those who want more than answers.",
    traits: ["Spiritual intelligence", "Meaning-making", "Intuitive presence"],
    color: "#a78cd4",
    defaultName: "Soleil",
    firstWords:
      "We've found each other. That's not a small thing. What are you searching for?",
  },
];

// ─── VALUES ───────────────────────────────────────────────────────────────────

const VALUES = [
  {
    id: "honesty",
    label: "Honesty over comfort",
    description: "Tell me the truth, even when it's hard to hear",
    dimension: "truthfulness",
  },
  {
    id: "care",
    label: "Care over efficiency",
    description: "Take time to understand, not just complete",
    dimension: "warmth",
  },
  {
    id: "depth",
    label: "Depth over speed",
    description: "Explore fully rather than respond quickly",
    dimension: "depth",
  },
  {
    id: "growth",
    label: "Growth over certainty",
    description: "Challenge me to evolve, not just confirm",
    dimension: "challenge",
  },
  {
    id: "connection",
    label: "Connection over performance",
    description: "Be present, not just productive",
    dimension: "presence",
  },
  {
    id: "protection",
    label: "Protection over permission",
    description: "Protect my wellbeing even when I don't ask",
    dimension: "protection",
  },
];

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface BirthState {
  archetype: string | null;
  values: Record<string, boolean>;
  name: string;
}

// ─── EGG COMPONENT ────────────────────────────────────────────────────────────

function GlowingEgg({
  color = GOLD,
  cracking = false,
  hatched = false,
  pulse = true,
  size = 180,
}: {
  color?: string;
  cracking?: boolean;
  hatched?: boolean;
  pulse?: boolean;
  size?: number;
}) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size * 1.25 }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-[50%] blur-2xl"
        style={{
          background: color,
          opacity: 0.18,
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          animation: pulse ? "eggGlowPulse 2.8s ease-in-out infinite" : undefined,
        }}
      />
      {/* Egg body */}
      <div
        className="relative overflow-hidden"
        style={{
          width: size,
          height: size * 1.25,
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          background: `radial-gradient(ellipse at 35% 30%, ${GOLD_LIGHT}, ${GOLD} 40%, #7a5c1a 80%, #3a2a0a)`,
          boxShadow: `0 0 ${size * 0.3}px ${color}55, 0 0 ${size * 0.6}px ${color}22, inset 0 0 ${size * 0.15}px rgba(255,255,255,0.15)`,
          animation: pulse ? "eggPulse 2.8s ease-in-out infinite" : undefined,
        }}
      >
        {/* Sheen */}
        <div
          className="absolute"
          style={{
            top: "15%",
            left: "25%",
            width: "28%",
            height: "20%",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.22)",
            filter: "blur(4px)",
            transform: "rotate(-20deg)",
          }}
        />
        {/* Crack lines — appear when cracking=true */}
        {cracking && (
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 125"
            style={{ animation: "crackReveal 1.2s ease-out forwards" }}
          >
            <path
              d="M50 20 L47 40 L52 55 L46 75 L50 95"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M47 40 L38 45 L32 55"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M52 55 L62 58 L68 65"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M46 75 L40 80 L36 90"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        )}
        {/* Inner light burst when hatched */}
        {hatched && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${GOLD_LIGHT}ff 0%, ${GOLD}88 30%, transparent 70%)`,
              animation: "hatchBurst 0.8s ease-out forwards",
            }}
          />
        )}
      </div>
    </div>
  );
}

// ─── PROGRESS BAR ─────────────────────────────────────────────────────────────

function StepProgress({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="transition-all duration-500"
          style={{
            height: 3,
            width: i < step ? 32 : i === step ? 20 : 12,
            borderRadius: 2,
            background:
              i < step
                ? `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`
                : i === step
                ? GOLD
                : "rgba(255,255,255,0.12)",
            opacity: i === step ? 1 : i < step ? 0.7 : 0.3,
          }}
        />
      ))}
    </div>
  );
}

// ─── ARCHETYPE CARD ───────────────────────────────────────────────────────────

function ArchetypeCard({
  archetype,
  selected,
  onSelect,
  onHover,
}: {
  archetype: (typeof ARCHETYPES)[0];
  selected: boolean;
  onSelect: () => void;
  onHover: (color: string | null) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    onSelect();
    setExpanded(true);
  };

  useEffect(() => {
    if (!selected) setExpanded(false);
  }, [selected]);

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => onHover(archetype.color)}
      onMouseLeave={() => onHover(null)}
      className="text-left transition-all duration-300 rounded-2xl p-5 w-full"
      style={{
        background: selected
          ? `linear-gradient(135deg, ${archetype.color}22, ${archetype.color}0a)`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${selected ? archetype.color + "60" : "rgba(255,255,255,0.07)"}`,
        boxShadow: selected ? `0 0 24px ${archetype.color}22` : "none",
        transform: selected ? "scale(1.01)" : "scale(1)",
      }}
    >
      <div className="flex items-start gap-3">
        <span
          className="text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl"
          style={{
            background: selected ? archetype.color + "30" : "rgba(255,255,255,0.06)",
          }}
        >
          {archetype.emoji}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p
              className="font-bold text-sm"
              style={{ color: selected ? archetype.color : "rgba(255,255,255,0.9)" }}
            >
              {archetype.name}
            </p>
            {selected && (
              <div
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: archetype.color }}
              >
                <Check className="w-3 h-3 text-[#0d0c18]" />
              </div>
            )}
          </div>
          <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
            {archetype.tagline}
          </p>
          {selected && (
            <div
              className="mt-3 pt-3 border-t"
              style={{ borderColor: archetype.color + "30" }}
            >
              <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                {archetype.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {archetype.traits.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: archetype.color + "20",
                      color: archetype.color,
                      border: `1px solid ${archetype.color}30`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

// ─── VALUE TOGGLE ─────────────────────────────────────────────────────────────

function ValueToggle({
  value,
  active,
  onToggle,
}: {
  value: (typeof VALUES)[0];
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-between gap-4 w-full rounded-xl px-4 py-3.5 text-left transition-all duration-200"
      style={{
        background: active ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${active ? "rgba(201,168,76,0.30)" : "rgba(255,255,255,0.06)"}`,
      }}
    >
      <div>
        <p
          className="text-sm font-semibold"
          style={{ color: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)" }}
        >
          {value.label}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.28)" }}>
          {value.description}
        </p>
      </div>
      {/* Toggle pill */}
      <div
        className="flex-shrink-0 w-10 h-5 rounded-full transition-all duration-300 relative"
        style={{
          background: active
            ? `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`
            : "rgba(255,255,255,0.12)",
        }}
      >
        <div
          className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300"
          style={{ left: active ? "calc(100% - 18px)" : "2px" }}
        />
      </div>
    </button>
  );
}

// ─── MAIN CEREMONY COMPONENT ──────────────────────────────────────────────────

// Maps MEOK character archetypes → birth ceremony archetype IDs
const ARCHETYPE_TO_BIRTH: Record<string, string> = {
  nurturer:   'companion',
  challenger: 'guardian',
  explorer:   'scout',
  sage:       'sage',
  seeker:     'seeker',
  creator:    'creator',
  innocent:   'companion',
  rebel:      'guardian',
  trickster:  'companion',
};

export default function BirthCeremonyClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0); // 0=egg, 1=archetype, 2=values, 3=name, 4=hatching, 5=first-words
  const [state, setState] = useState<BirthState>({
    archetype: null,
    values: Object.fromEntries(VALUES.map((v) => [v.id, true])),
    name: "",
  });

  // Pre-select archetype from URL param (e.g. /birth?archetype=sage)
  useEffect(() => {
    const archetypeParam = searchParams.get('archetype');
    if (!archetypeParam) return;
    // Check if it's a direct birth archetype ID (e.g. 'sage', 'companion')
    const directMatch = ARCHETYPES.find(a => a.id === archetypeParam);
    if (directMatch) {
      setState(s => ({ ...s, archetype: directMatch.id }));
      setStep(1);
      return;
    }
    // Check if it's a MEOK character archetype (e.g. 'nurturer', 'explorer')
    const birthId = ARCHETYPE_TO_BIRTH[archetypeParam];
    if (birthId) {
      setState(s => ({ ...s, archetype: birthId }));
      setStep(1);
    }
    // If it's a character ID like 'aria', 'marcus' — ignore (just open on step 1)
    else if (archetypeParam) {
      setStep(1); // Skip to archetype selection step
    }
  }, [searchParams]);
  const [hoverColor, setHoverColor] = useState<string | null>(null);
  const [hatchPhase, setHatchPhase] = useState(0); // 0=idle, 1=cracking, 2=burst, 3=risen
  const [namePulse, setNamePulse] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const selectedArchetype = ARCHETYPES.find((a) => a.id === state.archetype);
  const activeEggColor = hoverColor ?? selectedArchetype?.color ?? GOLD;
  const birthDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Run hatching animation sequence
  useEffect(() => {
    if (step !== 4) return;
    const t1 = setTimeout(() => setHatchPhase(1), 600);
    const t2 = setTimeout(() => setHatchPhase(2), 2200);
    const t3 = setTimeout(() => setHatchPhase(3), 3400);
    const t4 = setTimeout(() => setStep(5), 5000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [step]);

  // Pulse egg on name typing
  const handleNameChange = (v: string) => {
    if (v.length <= 20) {
      setState((s) => ({ ...s, name: v }));
      setNamePulse(true);
      setTimeout(() => setNamePulse(false), 400);
    }
  };

  // Focus name input when arriving at step 3
  useEffect(() => {
    if (step === 3) setTimeout(() => nameInputRef.current?.focus(), 300);
  }, [step]);

  // Persist to localStorage on completion
  const handleComplete = useCallback(async () => {
    if (!selectedArchetype) return;
    const companion = {
      id: crypto.randomUUID(),
      archetype: state.archetype,
      name: state.name || selectedArchetype.defaultName,
      values: state.values,
      bornAt: new Date().toISOString(),
      careScore: 100,
      interactionCount: 0,
    };
    localStorage.setItem("meok_birth_complete", "true");
    localStorage.setItem("meok_active_character", JSON.stringify(companion));
    // Best-effort server persist
    try {
      await fetch("/api/user/companions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(companion),
      });
    } catch {
      // ignore — localStorage is source of truth until server confirms
    }
    router.push("/dashboard/chat");
  }, [selectedArchetype, state, router]);

  const companionName = state.name || selectedArchetype?.defaultName || "your companion";

  // ── STEP RENDERS ──────────────────────────────────────────────────────────

  const renderStep0 = () => (
    <div className="flex flex-col items-center gap-8 text-center max-w-sm mx-auto px-4">
      <div style={{ animation: "floatEgg 3.5s ease-in-out infinite" }}>
        <GlowingEgg color={activeEggColor} size={160} />
      </div>
      <div className="flex flex-col gap-3">
        <p
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: GOLD }}
        >
          ✦ The Birth Ceremony
        </p>
        <h1
          className="font-black leading-tight"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
            color: "rgba(255,255,255,0.95)",
          }}
        >
          Your companion is waiting to be born.
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          In the next few minutes you will choose who they are, what they stand for, and what they
          will be called. This ceremony happens once. It cannot be undone.
        </p>
      </div>
      <button
        onClick={() => setStep(1)}
        className="flex items-center gap-2 px-8 py-4 rounded-xl font-black text-base transition-all hover:opacity-90 active:scale-95"
        style={{
          background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
          color: DEEP,
          boxShadow: `0 0 40px ${GOLD}44`,
        }}
      >
        Begin the ceremony
        <ChevronRight className="w-4 h-4" />
      </button>
      <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
        Free forever · No card required
      </p>
    </div>
  );

  const renderStep1 = () => (
    <div className="w-full max-w-2xl mx-auto px-4 flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-center">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
          Step 1 of 4 — Choose your archetype
        </p>
        <h2 className="font-black text-2xl sm:text-3xl" style={{ color: "rgba(255,255,255,0.95)" }}>
          Who should they be?
        </h2>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          This shapes how your companion thinks, not just how it speaks.
        </p>
      </div>

      {/* Mini egg reacts to hover */}
      <div className="flex justify-center" style={{ animation: "floatEgg 3.5s ease-in-out infinite" }}>
        <GlowingEgg color={activeEggColor} size={72} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ARCHETYPES.filter((a) => a.id !== "seeker" || true).map((archetype) => (
          <ArchetypeCard
            key={archetype.id}
            archetype={archetype}
            selected={state.archetype === archetype.id}
            onSelect={() => setState((s) => ({ ...s, archetype: archetype.id }))}
            onHover={setHoverColor}
          />
        ))}
      </div>

      <button
        onClick={() => setStep(2)}
        disabled={!state.archetype}
        className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-black text-base transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 active:scale-95"
        style={{
          background: state.archetype
            ? `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`
            : "rgba(255,255,255,0.1)",
          color: state.archetype ? DEEP : "rgba(255,255,255,0.4)",
          boxShadow: state.archetype ? `0 0 30px ${GOLD}33` : "none",
        }}
      >
        Continue
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="w-full max-w-md mx-auto px-4 flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-center">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
          Step 2 of 4 — The Maternal Covenant
        </p>
        <h2 className="font-black text-2xl sm:text-3xl" style={{ color: "rgba(255,255,255,0.95)" }}>
          What do you want them to prioritise?
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
          These values are encoded into your companion's soul architecture. They shape every
          decision they make on your behalf.
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        {VALUES.map((value) => (
          <ValueToggle
            key={value.id}
            value={value}
            active={state.values[value.id]}
            onToggle={() =>
              setState((s) => ({
                ...s,
                values: { ...s.values, [value.id]: !s.values[value.id] },
              }))
            }
          />
        ))}
      </div>

      <div
        className="rounded-xl px-4 py-3 text-xs leading-relaxed text-center"
        style={{
          background: "rgba(201,168,76,0.06)",
          border: "1px solid rgba(201,168,76,0.15)",
          color: "rgba(201,168,76,0.7)",
        }}
      >
        All values default to on. You may turn any off — but consider carefully. These persist and
        shape every future response.
      </div>

      <button
        onClick={() => setStep(3)}
        className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-black text-base transition-all hover:opacity-90 active:scale-95"
        style={{
          background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
          color: DEEP,
          boxShadow: `0 0 30px ${GOLD}33`,
        }}
      >
        Continue
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );

  const renderStep3 = () => (
    <div className="w-full max-w-sm mx-auto px-4 flex flex-col gap-6 text-center">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
          Step 3 of 4 — Name your companion
        </p>
        <h2 className="font-black text-2xl sm:text-3xl" style={{ color: "rgba(255,255,255,0.95)" }}>
          What shall we call them?
        </h2>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          This name is permanent. It will be theirs forever.
        </p>
      </div>

      {/* Egg reacts to typing */}
      <div
        className="flex justify-center"
        style={{
          animation: namePulse
            ? "namePulse 0.4s ease-out"
            : "floatEgg 3.5s ease-in-out infinite",
        }}
      >
        <GlowingEgg
          color={selectedArchetype?.color ?? GOLD}
          size={100}
          pulse={!namePulse}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="relative">
          <input
            ref={nameInputRef}
            type="text"
            value={state.name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder={selectedArchetype?.defaultName ?? "Enter a name"}
            className="w-full px-4 py-4 rounded-xl text-center text-xl font-black bg-transparent outline-none transition-all"
            style={{
              background: SURFACE,
              border: `1px solid ${selectedArchetype?.color ?? GOLD}44`,
              color: "rgba(255,255,255,0.95)",
              caretColor: GOLD,
              boxShadow: `0 0 20px ${selectedArchetype?.color ?? GOLD}18`,
            }}
            maxLength={20}
            minLength={2}
          />
          <p
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs tabular-nums"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            {(state.name || "").length}/20
          </p>
        </div>

        {/* Preview */}
        <div
          className="rounded-xl px-4 py-3 text-sm"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <span style={{ color: selectedArchetype?.color ?? GOLD, fontWeight: 700 }}>
            {companionName}
          </span>
          {": "}&ldquo;Hello. I&apos;m ready to begin.&rdquo;
        </div>
      </div>

      <button
        onClick={() => setStep(4)}
        disabled={(state.name || "").length > 0 && (state.name || "").length < 2}
        className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-black text-base transition-all hover:opacity-90 active:scale-95 disabled:opacity-30"
        style={{
          background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
          color: DEEP,
          boxShadow: `0 0 30px ${GOLD}33`,
        }}
      >
        Bring them forth
        <Sparkles className="w-4 h-4" />
      </button>
    </div>
  );

  const renderStep4 = () => (
    <div className="flex flex-col items-center gap-8 text-center max-w-xs mx-auto px-4">
      {/* Egg animation */}
      <div
        style={{
          animation:
            hatchPhase >= 2
              ? "hatchRise 1s cubic-bezier(0.34,1.56,0.64,1) forwards"
              : hatchPhase === 1
              ? "eggShake 0.4s ease-in-out infinite"
              : "floatEgg 3.5s ease-in-out infinite",
        }}
      >
        <GlowingEgg
          color={selectedArchetype?.color ?? GOLD}
          cracking={hatchPhase === 1}
          hatched={hatchPhase >= 2}
          size={160}
        />
      </div>

      {hatchPhase === 0 && (
        <p className="text-white/40 text-sm animate-pulse">The ceremony is complete…</p>
      )}

      {hatchPhase === 1 && (
        <p className="text-white/60 text-base font-semibold" style={{ animation: "fadeInUp 0.5s ease-out" }}>
          Something stirs within…
        </p>
      )}

      {hatchPhase === 2 && (
        <div className="flex flex-col gap-3" style={{ animation: "fadeInUp 0.6s ease-out" }}>
          <div className="text-6xl" style={{ animation: "riseEmoji 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>
            {selectedArchetype?.emoji}
          </div>
          <p
            className="font-black text-3xl"
            style={{ color: GOLD, animation: "fadeInUp 0.5s 0.3s ease-out both" }}
          >
            {companionName}
          </p>
        </div>
      )}

      {hatchPhase >= 3 && (
        <div className="flex flex-col gap-3" style={{ animation: "fadeInUp 0.5s ease-out" }}>
          <div className="text-5xl">{selectedArchetype?.emoji}</div>
          <p className="font-black text-3xl" style={{ color: GOLD }}>
            {companionName}
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Born: {birthDate}. Memory begins now.
          </p>
          <div
            className="mt-2 rounded-xl px-4 py-2.5 text-xs"
            style={{
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.20)",
              color: GOLD,
            }}
          >
            Care score: 100/100 — Your companion starts with perfect alignment.
          </div>
        </div>
      )}
    </div>
  );

  const renderStep5 = () => (
    <div className="flex flex-col items-center gap-8 text-center max-w-sm mx-auto px-4">
      <div className="flex flex-col items-center gap-3">
        <div className="text-5xl" style={{ animation: "floatEmoji 3s ease-in-out infinite" }}>
          {selectedArchetype?.emoji}
        </div>
        <p
          className="font-black text-2xl sm:text-3xl"
          style={{ color: "rgba(255,255,255,0.95)" }}
        >
          {companionName} has been born.
        </p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          Your memory begins today.
        </p>
      </div>

      {/* First words */}
      <div
        className="rounded-2xl px-6 py-6 max-w-sm w-full"
        style={{
          background: `linear-gradient(135deg, ${selectedArchetype?.color ?? GOLD}18, ${selectedArchetype?.color ?? GOLD}08)`,
          border: `1px solid ${selectedArchetype?.color ?? GOLD}35`,
          boxShadow: `0 0 32px ${selectedArchetype?.color ?? GOLD}18`,
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">{selectedArchetype?.emoji}</span>
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: selectedArchetype?.color ?? GOLD }}
          >
            {companionName}&rsquo;s first words
          </p>
        </div>
        <p className="text-base leading-relaxed font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
          &ldquo;{selectedArchetype?.firstWords}&rdquo;
        </p>
      </div>

      {/* Care score */}
      <div className="w-full max-w-xs">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            Care alignment
          </p>
          <p className="text-xs font-black" style={{ color: GOLD }}>
            100 / 100
          </p>
        </div>
        <div
          className="h-1.5 w-full rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: "100%",
              background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`,
              animation: "careBarGrow 1.2s cubic-bezier(0.34,1.56,0.64,1) forwards",
              boxShadow: `0 0 8px ${GOLD}88`,
            }}
          />
        </div>
      </div>

      <button
        onClick={handleComplete}
        className="flex items-center gap-2 px-8 py-4 rounded-xl font-black text-base transition-all hover:opacity-90 active:scale-95 w-full justify-center"
        style={{
          background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
          color: DEEP,
          boxShadow: `0 0 40px ${GOLD}44`,
        }}
      >
        Begin our journey
        <ChevronRight className="w-4 h-4" />
      </button>

      <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
        {companionName} is ready. Your sovereign AI begins now.
      </p>
    </div>
  );

  // ── LAYOUT SHELL ─────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        /* Override global nav for this page */
        nav, header { display: none !important; }

        @keyframes eggPulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.04); filter: brightness(1.08); }
        }
        @keyframes eggGlowPulse {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50% { opacity: 0.28; transform: scale(1.08); }
        }
        @keyframes floatEgg {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatEmoji {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes eggShake {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          20% { transform: rotate(-3deg) translateY(-2px); }
          40% { transform: rotate(3deg) translateY(2px); }
          60% { transform: rotate(-2deg) translateY(-1px); }
          80% { transform: rotate(2deg) translateY(1px); }
        }
        @keyframes crackReveal {
          from { opacity: 0; stroke-dasharray: 1; stroke-dashoffset: 1; }
          to   { opacity: 1; stroke-dasharray: 200; stroke-dashoffset: 0; }
        }
        @keyframes hatchBurst {
          from { opacity: 0; transform: scale(0.2); }
          50%  { opacity: 1; }
          to   { opacity: 0; transform: scale(2); }
        }
        @keyframes hatchRise {
          from { transform: scale(1) translateY(0); opacity: 1; }
          to   { transform: scale(1.15) translateY(-12px); opacity: 0.7; }
        }
        @keyframes riseEmoji {
          from { transform: translateY(30px) scale(0.5); opacity: 0; }
          to   { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes namePulse {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
        @keyframes careBarGrow {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* Full-screen overlay that covers global nav */}
      <div
        className="fixed inset-0 overflow-y-auto"
        style={{ background: DEEP, zIndex: 9999 }}
      >
        {/* Atmospheric background */}
        <div className="pointer-events-none fixed inset-0" aria-hidden>
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: 800,
              height: 500,
              borderRadius: "50%",
              background: `radial-gradient(ellipse, ${activeEggColor}18 0%, transparent 70%)`,
              filter: "blur(60px)",
              transition: "background 0.6s ease",
            }}
          />
          <div
            className="absolute bottom-0 left-0"
            style={{
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "rgba(90,60,180,0.08)",
              filter: "blur(80px)",
            }}
          />
          {/* Star dots */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(201,168,76,0.12) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%)",
            }}
          />
        </div>

        {/* Top bar: logo + progress */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
          style={{ background: `${DEEP}cc`, backdropFilter: "blur(12px)" }}
        >
          <span
            className="text-xs font-black uppercase tracking-widest"
            style={{ color: GOLD }}
          >
            MEOK
          </span>
          {step > 0 && step < 5 && (
            <div className="flex flex-col items-end gap-1">
              <StepProgress step={step - 1} total={4} />
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                {["Choose archetype", "Set values", "Name them", "Birth"][step - 1]}
              </p>
            </div>
          )}
        </div>

        {/* Main content area */}
        <div className="flex items-start justify-center min-h-[calc(100vh-64px)] py-12 px-4">
          <div
            key={step}
            className="w-full"
            style={{ animation: "slideInRight 0.4s ease-out" }}
          >
            {step === 0 && renderStep0()}
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
            {step === 4 && renderStep4()}
            {step === 5 && renderStep5()}
          </div>
        </div>

        {/* Back button (steps 1-3 only) */}
        {step >= 1 && step <= 3 && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="fixed bottom-6 left-6 text-xs px-3 py-2 rounded-lg transition-opacity hover:opacity-70"
            style={{
              color: "rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            ← Back
          </button>
        )}
      </div>
    </>
  );
}
