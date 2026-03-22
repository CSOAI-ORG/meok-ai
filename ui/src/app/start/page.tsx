"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

// ── Types ──────────────────────────────────────────────────────────────────────

type OsKey = "personal" | "work" | "family" | "gaming" | "team";
type ArchetypeKey = "Scholar" | "Healer" | "Pioneer" | "Guardian" | "Trickster" | "Mystic";

interface QuizOption {
  label: string;
  osBoost?: Partial<Record<OsKey, number>>;
  archetype?: ArchetypeKey;
}

interface Question {
  id: number;
  heading: string;
  options: QuizOption[];
}

// ── Data ───────────────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    id: 1,
    heading: "What do you need most right now?",
    options: [
      { label: "Someone who remembers me", osBoost: { personal: 2 } },
      { label: "Help with work, projects, priorities", osBoost: { work: 2 } },
      { label: "Keep my family safe and connected", osBoost: { family: 2 } },
      { label: "Level up my gaming performance", osBoost: { gaming: 2 } },
      { label: "Collaborate with my team", osBoost: { team: 2 } },
    ],
  },
  {
    id: 2,
    heading: "Who are you bringing this to?",
    options: [
      { label: "Just me", osBoost: {} },
      { label: "Me and my partner or family", osBoost: { family: 1 } },
      { label: "My team or colleagues", osBoost: { team: 1, work: 1 } },
      { label: "I'm building something bigger", osBoost: { team: 1 } },
    ],
  },
  {
    id: 3,
    heading: "How do you prefer to communicate?",
    options: [
      { label: "Direct and focused — just the facts", archetype: "Scholar" },
      { label: "Warm and supportive — I want to feel heard", archetype: "Healer" },
      { label: "Bold and challenging — push me harder", archetype: "Pioneer" },
      { label: "Curious and explorative — let's think together", archetype: "Scholar" },
    ],
  },
];

const OS_INFO: Record<OsKey, { label: string; description: string; learnHref: string; emoji: string; color: string }> = {
  personal: {
    label: "Personal OS",
    description: "Your sovereign AI companion for growth, memory, and wellbeing.",
    learnHref: "/personal",
    emoji: "🥚",
    color: "#c9a84c",
  },
  work: {
    label: "Work OS",
    description: "Your professional AI that remembers your projects, priorities, and people.",
    learnHref: "/work",
    emoji: "⚡",
    color: "#3B82F6",
  },
  family: {
    label: "Family OS",
    description: "Safety, coordination, and care for the people who matter most.",
    learnHref: "/family",
    emoji: "🛡️",
    color: "#7BC47F",
  },
  gaming: {
    label: "Gaming OS",
    description: "Your performance coach, strategist, and squad companion.",
    learnHref: "/gaming",
    emoji: "🎮",
    color: "#FB923C",
  },
  team: {
    label: "Team OS",
    description: "Shared intelligence, coordination, and care across your whole team.",
    learnHref: "/team",
    emoji: "👥",
    color: "#a78bfa",
  },
};

const ARCHETYPE_INFO: Record<ArchetypeKey, { description: string; emoji: string }> = {
  Scholar: { description: "Precise, thoughtful, analytical. Turns chaos into clarity.", emoji: "📚" },
  Guardian: { description: "Protective and steady. Watches over what matters most.", emoji: "🛡️" },
  Healer: { description: "Empathic and restorative. Holds space for the hard days.", emoji: "💛" },
  Pioneer: { description: "Bold, action-oriented. Moves first, learns fast.", emoji: "⚡" },
  Trickster: { description: "Playful and subversive. Breaks your patterns.", emoji: "🃏" },
  Mystic: { description: "Intuitive and reflective. Finds meaning in the unexpected.", emoji: "🌙" },
};

// Archetype implied by Q3 answer index (mirrors the archetype field on Q3 options)
const Q3_ARCHETYPE_MAP: ArchetypeKey[] = ["Scholar", "Healer", "Pioneer", "Scholar"];

// OS tie-break order (personal wins first)
const OS_TIEBREAK_ORDER: OsKey[] = ["personal", "work", "family", "gaming", "team"];

// ── Scoring ────────────────────────────────────────────────────────────────────

function computeResult(
  answers: (number | null)[],
): { os: OsKey; archetype: ArchetypeKey } {
  const scores: Record<OsKey, number> = { personal: 0, work: 0, family: 0, gaming: 0, team: 0 };

  answers.forEach((answerIdx, qIdx) => {
    if (answerIdx === null) return;
    const option = QUESTIONS[qIdx].options[answerIdx];
    if (option.osBoost) {
      (Object.keys(option.osBoost) as OsKey[]).forEach((key) => {
        scores[key] += option.osBoost![key] ?? 0;
      });
    }
  });

  // Pick top OS, tie-break by tiebreak order
  let topOs: OsKey = OS_TIEBREAK_ORDER[0];
  let topScore = -1;
  OS_TIEBREAK_ORDER.forEach((os) => {
    if (scores[os] > topScore) {
      topScore = scores[os];
      topOs = os;
    }
  });

  // Archetype from Q3 answer
  const q3Answer = answers[2];
  const archetype: ArchetypeKey =
    q3Answer !== null ? Q3_ARCHETYPE_MAP[q3Answer] : "Scholar";

  return { os: topOs, archetype };
}

// ── Option Card ────────────────────────────────────────────────────────────────

function OptionCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative w-full rounded-2xl px-5 py-5 text-left transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c]"
      style={{
        background: selected ? "rgba(201,168,76,0.10)" : "rgba(255,255,255,0.04)",
        border: selected
          ? "1.5px solid rgba(201,168,76,0.70)"
          : "1.5px solid rgba(245,240,232,0.14)",
        transform: selected ? "scale(1.01)" : "scale(1)",
      }}
      onMouseEnter={(e) => {
        if (!selected) {
          (e.currentTarget as HTMLButtonElement).style.border =
            "1.5px solid rgba(201,168,76,0.45)";
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(201,168,76,0.06)";
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          (e.currentTarget as HTMLButtonElement).style.border =
            "1.5px solid rgba(245,240,232,0.14)";
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(255,255,255,0.04)";
        }
      }}
    >
      {/* Gold dot when selected */}
      <span
        className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full transition-opacity duration-150"
        style={{
          background: "#c9a84c",
          opacity: selected ? 1 : 0,
        }}
        aria-hidden="true"
      />
      <span
        className="text-sm font-semibold leading-snug"
        style={{ color: selected ? "#c9a84c" : "rgba(245,240,232,0.85)" }}
      >
        {label}
      </span>
    </button>
  );
}

// ── Step dots ──────────────────────────────────────────────────────────────────

function StepDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-2 justify-center mb-10" aria-label={`Step ${current + 1} of ${total}`}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className="rounded-full transition-all duration-300"
          style={{
            width: i === current ? "28px" : "8px",
            height: "8px",
            background: i === current ? "#c9a84c" : "rgba(245,240,232,0.18)",
          }}
        />
      ))}
    </div>
  );
}

// ── Recommendation Card ────────────────────────────────────────────────────────

function RecommendationCard({
  os,
  archetype,
  onReset,
}: {
  os: OsKey;
  archetype: ArchetypeKey;
  onReset: () => void;
}) {
  const osInfo = OS_INFO[os];
  const archetypeInfo = ARCHETYPE_INFO[archetype];

  return (
    <div
      className="animate-fade-in w-full max-w-xl mx-auto rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.06) 100%)",
        border: "1.5px solid rgba(201,168,76,0.45)",
        boxShadow: "0 24px 80px rgba(201,168,76,0.12)",
      }}
    >
      {/* Header accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, #c9a84c, rgba(201,168,76,0.3))" }}
      />

      <div className="px-8 py-10 flex flex-col items-center text-center gap-6">
        {/* Big emoji */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
          style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.30)" }}
        >
          {osInfo.emoji}
        </div>

        {/* Label */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-[#c9a84c] mb-2">
            Your match
          </p>
          <h2
            className="font-black text-white mb-1 leading-tight"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
          >
            {osInfo.label}
          </h2>
          <p className="text-sm text-white/55 leading-relaxed max-w-xs mx-auto">
            {osInfo.description}
          </p>
        </div>

        {/* Archetype badge */}
        <div
          className="flex items-start gap-3 rounded-2xl px-5 py-4 text-left w-full max-w-sm"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <span className="text-2xl flex-shrink-0 mt-0.5">{archetypeInfo.emoji}</span>
          <div>
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">
              Companion archetype
            </p>
            <p className="text-sm font-black text-white mb-1">{archetype}</p>
            <p className="text-xs text-white/55 leading-relaxed">{archetypeInfo.description}</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mt-2">
          <Link
            href="/hatch"
            className="flex-1 inline-flex items-center justify-center gap-2 font-black rounded-full px-6 py-3.5 text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: "#c9a84c",
              color: "#1a1a2e",
              boxShadow: "0 8px 28px rgba(201,168,76,0.25)",
            }}
          >
            Hatch free <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </Link>
          <Link
            href={osInfo.learnHref}
            className="flex-1 inline-flex items-center justify-center gap-1 font-bold rounded-full px-6 py-3.5 text-sm transition-all hover:border-white/30 hover:text-white"
            style={{
              background: "transparent",
              border: "1.5px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Learn more
          </Link>
        </div>

        {/* Redo */}
        <button
          onClick={onReset}
          className="text-xs text-white/30 hover:text-white/60 transition-colors mt-1"
        >
          ← Start over
        </button>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function FindYourMeokPage() {
  const [step, setStep] = useState(0); // 0-2 = questions, 3 = result
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null]);
  const [animating, setAnimating] = useState(false);

  const TOTAL_STEPS = QUESTIONS.length;

  function selectOption(optionIdx: number) {
    const next = [...answers];
    next[step] = optionIdx;
    setAnswers(next);

    // Brief delay so the selection is visible before advancing
    setTimeout(() => {
      setAnimating(true);
      setTimeout(() => {
        setStep((s) => s + 1);
        setAnimating(false);
      }, 180);
    }, 220);
  }

  function reset() {
    setAnswers([null, null, null]);
    setStep(0);
    setAnimating(false);
  }

  const isResult = step >= TOTAL_STEPS;
  const result = isResult ? computeResult(answers) : null;
  const currentQuestion = !isResult ? QUESTIONS[step] : null;

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <MarketingNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-8 px-6 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/50 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            3 questions · Free to start
          </span>
          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5.5vw, 3.25rem)" }}
          >
            Find Your MEOK
          </h1>
          <p className="text-base text-white/50 max-w-md mx-auto leading-relaxed">
            Three questions. We&apos;ll match you to the right OS and companion
            archetype for where you are right now.
          </p>
        </div>
      </section>

      {/* ── Wizard ────────────────────────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Step dots — only during questions */}
          {!isResult && <StepDots total={TOTAL_STEPS} current={step} />}

          {/* Question or Result */}
          <div
            className="transition-opacity duration-180"
            style={{ opacity: animating ? 0 : 1 }}
          >
            {isResult && result ? (
              <RecommendationCard
                os={result.os}
                archetype={result.archetype}
                onReset={reset}
              />
            ) : currentQuestion ? (
              <div className="animate-fade-in">
                {/* Question label */}
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest text-center mb-3">
                  Question {currentQuestion.id} of {TOTAL_STEPS}
                </p>

                {/* Question heading */}
                <h2
                  className="font-black text-white text-center mb-8 leading-tight tracking-tight"
                  style={{ fontSize: "clamp(1.3rem, 3.5vw, 1.9rem)" }}
                >
                  {currentQuestion.heading}
                </h2>

                {/* Options — 2-column grid, last odd item spans full if needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQuestion.options.map((option, i) => {
                    const isOdd =
                      currentQuestion.options.length % 2 !== 0 &&
                      i === currentQuestion.options.length - 1;
                    return (
                      <div
                        key={i}
                        className={isOdd ? "sm:col-span-2" : ""}
                      >
                        <OptionCard
                          label={option.label}
                          selected={answers[step] === i}
                          onClick={() => selectOption(i)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          {/* "Not sure?" fallback — shown during questions */}
          {!isResult && (
            <div className="mt-12 text-center">
              <p className="text-white/25 text-xs">
                Not sure?{" "}
                <Link
                  href="/chat"
                  className="text-white/45 hover:text-[#c9a84c] transition-colors font-semibold underline underline-offset-2"
                >
                  Talk to MEOK directly
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── OS Overview strip (shown on result page) ───────────────────────── */}
      {isResult && (
        <section className="py-16 px-6 bg-[#1a1a2e]">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-xs font-bold tracking-widest uppercase text-white/30 mb-8">
              Explore all MEOK OS variants
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {(Object.keys(OS_INFO) as OsKey[]).map((key) => {
                const info = OS_INFO[key];
                const isMatch = result?.os === key;
                return (
                  <Link
                    key={key}
                    href={info.learnHref}
                    className="flex flex-col items-center gap-2 rounded-2xl px-3 py-5 text-center transition-all hover:-translate-y-0.5"
                    style={{
                      background: isMatch
                        ? `${info.color}14`
                        : "rgba(255,255,255,0.03)",
                      border: isMatch
                        ? `1.5px solid ${info.color}50`
                        : "1.5px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span className="text-2xl">{info.emoji}</span>
                    <span
                      className="text-xs font-black leading-tight"
                      style={{ color: isMatch ? info.color : "rgba(255,255,255,0.65)" }}
                    >
                      {info.label}
                    </span>
                    {isMatch && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: `${info.color}20`,
                          color: info.color,
                          border: `1px solid ${info.color}40`,
                        }}
                      >
                        Your match
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <MarketingFooter />

      {/* Inline fade animation (no tailwind plugin dependency) */}
      <style jsx global>{`
        @keyframes meok-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: meok-fade-in 0.28s ease both;
        }
      `}</style>
    </div>
  );
}
