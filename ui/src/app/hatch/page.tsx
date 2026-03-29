"use client";

import { useReducer, useEffect, useRef, useState } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────

type ArchetypeKey = "Scholar" | "Guardian" | "Healer" | "Trickster" | "Pioneer" | "Mystic";

interface Archetype {
  emoji: string;
  color: string;
  trait: string;
  desc: string;
  free: boolean;
}

interface TraitSpark {
  id: number;
  x: number;
  y: number;
  color: string;
  label: string;
}

type QuizStep = "intro" | "quiz" | "reveal";

interface QuizState {
  step: QuizStep;
  currentQuestion: number; // 0-indexed, 0-6
  answers: (number | null)[];
  scores: Record<ArchetypeKey, number>;
  eggColor: string;
  traitSparks: TraitSpark[];
  sparkCounter: number;
  eggHeartbeat: boolean;
  eggCracked: boolean;
  revealed: boolean;
  winner: ArchetypeKey | null;
}

type QuizAction =
  | { type: "START" }
  | { type: "ANSWER"; questionIndex: number; optionIndex: number; scoreDeltas: Record<ArchetypeKey, number>; eggColor?: string; sparkLabel: string; sparkColor: string }
  | { type: "BACK" }
  | { type: "HEARTBEAT_DONE" }
  | { type: "CRACK_EGG" }
  | { type: "REVEAL_DONE" }
  | { type: "RESET" };

// ── Constants ─────────────────────────────────────────────────────────────────

const ARCHETYPES: Record<ArchetypeKey, Archetype> = {
  Scholar:  { emoji: "🎓", color: "#c9a84c", trait: "Curious & precise",        desc: "Turns chaos into clarity. Your thinking partner.",      free: true  },
  Guardian: { emoji: "🛡️", color: "#3b82f6", trait: "Protective & steady",      desc: "Watches over what matters most. Your anchor.",          free: true  },
  Healer:   { emoji: "🌿", color: "#22c55e", trait: "Empathic & restorative",    desc: "Holds space for the hard days. Your safe place.",       free: true  },
  Trickster:{ emoji: "⚡", color: "#f59e0b", trait: "Playful & subversive",      desc: "Breaks patterns. Your creative disruptor.",             free: true  },
  Pioneer:  { emoji: "🚀", color: "#ef4444", trait: "Bold & action-oriented",    desc: "Moves first, learns fast. Your momentum.",              free: true  },
  Mystic:   { emoji: "🔮", color: "#7c3aed", trait: "Intuitive & deep",          desc: "Sees beneath the surface. Your inner voice.",           free: false },
};

type QuestionOption = {
  text: string;
  scores: Partial<Record<ArchetypeKey, number>>;
  eggColor?: string;
  sparkLabel: string;
  sparkColor: string;
};

type Question = {
  text: string;
  options: QuestionOption[];
};

const QUESTIONS: Question[] = [
  {
    text: "Right now, what does your inner world feel like?",
    options: [
      { text: "Deep and still",       scores: { Mystic: 3, Scholar: 1 },    sparkLabel: "still",    sparkColor: "#7c3aed" },
      { text: "Charged and searching",scores: { Pioneer: 3, Trickster: 1 }, sparkLabel: "charged",  sparkColor: "#ef4444" },
      { text: "Foggy and finding",    scores: { Guardian: 3, Healer: 1 },   sparkLabel: "finding",  sparkColor: "#3b82f6" },
      { text: "Clear and ready",      scores: { Scholar: 3, Pioneer: 1 },   sparkLabel: "ready",    sparkColor: "#c9a84c" },
    ],
  },
  {
    text: "What do you most need right now?",
    options: [
      { text: "Direction",            scores: { Scholar: 3, Guardian: 1 },  sparkLabel: "direction",sparkColor: "#c9a84c" },
      { text: "Someone who gets it",  scores: { Healer: 3, Guardian: 2 },   sparkLabel: "seen",     sparkColor: "#22c55e" },
      { text: "Courage",              scores: { Pioneer: 3, Trickster: 2 }, sparkLabel: "courage",  sparkColor: "#ef4444" },
      { text: "Inspiration",          scores: { Trickster: 3, Mystic: 2 },  sparkLabel: "spark",    sparkColor: "#f59e0b" },
    ],
  },
  {
    text: "Which colour pulls you in?",
    options: [
      { text: "Blue-teal",     scores: { Scholar: 2, Guardian: 2 },  eggColor: "#0891b2", sparkLabel: "clarity",     sparkColor: "#0891b2" },
      { text: "Green-gold",    scores: { Healer: 2, Guardian: 2 },   eggColor: "#84cc16", sparkLabel: "growth",      sparkColor: "#84cc16" },
      { text: "Violet-indigo", scores: { Mystic: 3, Trickster: 1 },  eggColor: "#7c3aed", sparkLabel: "mystery",     sparkColor: "#7c3aed" },
      { text: "Red-amber",     scores: { Pioneer: 3, Trickster: 1 }, eggColor: "#f59e0b", sparkLabel: "fire",        sparkColor: "#f59e0b" },
    ],
  },
  {
    text: "Where do you feel most alive?",
    options: [
      { text: "Wild and quiet",        scores: { Mystic: 3 },                sparkLabel: "solitude",  sparkColor: "#7c3aed" },
      { text: "Deep in a problem",     scores: { Scholar: 3, Pioneer: 1 },   sparkLabel: "focus",     sparkColor: "#c9a84c" },
      { text: "With people",           scores: { Guardian: 3, Healer: 2 },   sparkLabel: "presence",  sparkColor: "#3b82f6" },
      { text: "In ideas and stories",  scores: { Trickster: 3, Mystic: 1 },  sparkLabel: "story",     sparkColor: "#f59e0b" },
    ],
  },
  {
    text: "What do you most want to move beyond?",
    options: [
      { text: "Being controlled",  scores: { Pioneer: 3, Trickster: 2 }, sparkLabel: "freedom",   sparkColor: "#ef4444" },
      { text: "The dark I carry",  scores: { Healer: 3, Mystic: 2 },     sparkLabel: "release",   sparkColor: "#22c55e" },
      { text: "Feeling lost",      scores: { Guardian: 3, Scholar: 1 },  sparkLabel: "ground",    sparkColor: "#3b82f6" },
      { text: "Not being seen",    scores: { Trickster: 3, Healer: 1 },  sparkLabel: "witness",   sparkColor: "#f59e0b" },
    ],
  },
  {
    text: "If your companion had one superpower for you, what would it be?",
    options: [
      { text: "See what I can't see", scores: { Scholar: 3, Mystic: 2 },    sparkLabel: "vision",  sparkColor: "#c9a84c" },
      { text: "Give me courage",      scores: { Pioneer: 3, Guardian: 1 },  sparkLabel: "bold",    sparkColor: "#ef4444" },
      { text: "Help me transform",    scores: { Healer: 3, Mystic: 2 },     sparkLabel: "bloom",   sparkColor: "#22c55e" },
      { text: "Help me create",       scores: { Trickster: 3, Pioneer: 1 }, sparkLabel: "create",  sparkColor: "#f59e0b" },
    ],
  },
  {
    text: "How do you want your companion to speak to you?",
    options: [
      { text: "Direct and honest",    scores: { Scholar: 2, Pioneer: 2 },   sparkLabel: "truth",   sparkColor: "#c9a84c" },
      { text: "Gentle and warm",      scores: { Guardian: 3, Healer: 2 },   sparkLabel: "warmth",  sparkColor: "#3b82f6" },
      { text: "Deep and poetic",      scores: { Mystic: 3, Healer: 1 },     sparkLabel: "depth",   sparkColor: "#7c3aed" },
      { text: "Energetic and playful",scores: { Trickster: 3, Pioneer: 1 }, sparkLabel: "play",    sparkColor: "#f59e0b" },
    ],
  },
];

const ARCHETYPE_KEYS: ArchetypeKey[] = ["Scholar", "Guardian", "Healer", "Trickster", "Pioneer", "Mystic"];

function buildInitialScores(): Record<ArchetypeKey, number> {
  return { Scholar: 0, Guardian: 0, Healer: 0, Trickster: 0, Pioneer: 0, Mystic: 0 };
}

function getWinner(scores: Record<ArchetypeKey, number>): ArchetypeKey {
  let best: ArchetypeKey = "Scholar";
  let bestScore = -1;
  for (const key of ARCHETYPE_KEYS) {
    if (scores[key] > bestScore) {
      bestScore = scores[key];
      best = key;
    }
  }
  return best;
}

// ── Reducer ───────────────────────────────────────────────────────────────────

const initialState: QuizState = {
  step: "intro",
  currentQuestion: 0,
  answers: Array(7).fill(null),
  scores: buildInitialScores(),
  eggColor: "#c9a84c",
  traitSparks: [],
  sparkCounter: 0,
  eggHeartbeat: false,
  eggCracked: false,
  revealed: false,
  winner: null,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "START":
      return { ...state, step: "quiz", currentQuestion: 0 };

    case "ANSWER": {
      const newAnswers = [...state.answers];
      newAnswers[action.questionIndex] = action.optionIndex;

      const newScores = { ...state.scores };
      for (const [key, delta] of Object.entries(action.scoreDeltas)) {
        newScores[key as ArchetypeKey] = (newScores[key as ArchetypeKey] ?? 0) + (delta ?? 0);
      }

      const newEggColor = action.eggColor ?? state.eggColor;

      const spark: TraitSpark = {
        id: state.sparkCounter,
        x: 40 + Math.random() * 120,
        y: 40 + Math.random() * 120,
        color: action.sparkColor,
        label: action.sparkLabel,
      };

      const isLastQuestion = action.questionIndex === 6;
      const winner = isLastQuestion ? getWinner(newScores) : null;

      return {
        ...state,
        answers: newAnswers,
        scores: newScores,
        eggColor: newEggColor,
        traitSparks: [...state.traitSparks, spark].slice(-12),
        sparkCounter: state.sparkCounter + 1,
        eggHeartbeat: true,
        currentQuestion: isLastQuestion ? 6 : state.currentQuestion + 1,
        step: isLastQuestion ? "reveal" : "quiz",
        winner,
      };
    }

    case "BACK": {
      if (state.currentQuestion === 0) return state;
      const prevIndex = state.currentQuestion - 1;
      const prevOption = state.answers[prevIndex];
      const newAnswers = [...state.answers];
      newAnswers[prevIndex] = null;

      // Remove the score deltas from that answer
      const newScores = { ...state.scores };
      if (prevOption !== null) {
        const prevScores = QUESTIONS[prevIndex].options[prevOption].scores;
        for (const [key, delta] of Object.entries(prevScores)) {
          newScores[key as ArchetypeKey] = Math.max(0, (newScores[key as ArchetypeKey] ?? 0) - (delta ?? 0));
        }
      }

      return {
        ...state,
        currentQuestion: prevIndex,
        answers: newAnswers,
        scores: newScores,
        traitSparks: state.traitSparks.slice(0, -1),
      };
    }

    case "HEARTBEAT_DONE":
      return { ...state, eggHeartbeat: false };

    case "CRACK_EGG":
      return { ...state, eggCracked: true };

    case "REVEAL_DONE":
      return { ...state, revealed: true };

    case "RESET":
      return { ...initialState };

    default:
      return state;
  }
}

// ── Egg Component ─────────────────────────────────────────────────────────────

interface EggProps {
  color: string;
  heartbeat: boolean;
  cracked: boolean;
  revealed: boolean;
  winnerEmoji: string;
  sparks: TraitSpark[];
  onHeartbeatDone: () => void;
  onCrackDone: () => void;
  onClick?: () => void;
}

function Egg({ color, heartbeat, cracked, revealed, winnerEmoji, sparks, onHeartbeatDone, onCrackDone, onClick }: EggProps) {
  const eggRef = useRef<HTMLDivElement>(null);
  const [flashVisible, setFlashVisible] = useState(false);
  const [emojiVisible, setEmojiVisible] = useState(false);
  const [eggHovered, setEggHovered] = useState(false);

  // Trigger heartbeat animation via class toggle
  useEffect(() => {
    if (heartbeat && eggRef.current) {
      eggRef.current.classList.remove("egg-heartbeat");
      void eggRef.current.offsetWidth; // reflow
      eggRef.current.classList.add("egg-heartbeat");
      const timer = setTimeout(() => {
        onHeartbeatDone();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [heartbeat, onHeartbeatDone]);

  // Crack sequence
  useEffect(() => {
    if (cracked) {
      const flashTimer = setTimeout(() => {
        setFlashVisible(true);
        setTimeout(() => {
          setFlashVisible(false);
          setEmojiVisible(true);
          onCrackDone();
        }, 600);
      }, 800);
      return () => clearTimeout(flashTimer);
    }
  }, [cracked, onCrackDone]);

  return (
    <div style={{ position: "relative", width: "200px", height: "240px", margin: "0 auto" }}>
      {/* Glow behind egg */}
      <div
        style={{
          position: "absolute",
          inset: "-30px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse at center, ${color}44 0%, transparent 70%)`,
          transition: "background 1.2s ease",
          animation: "eggGlowPulse 3s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Egg body */}
      <div
        ref={eggRef}
        onClick={onClick}
        onMouseEnter={() => { if (onClick) setEggHovered(true); }}
        onMouseLeave={() => setEggHovered(false)}
        style={{
          position: "relative",
          width: "200px",
          height: "240px",
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          background: `radial-gradient(ellipse at 35% 35%, ${color}bb 0%, #1a1a2e 60%, #0d0c18 100%)`,
          boxShadow: `0 0 40px ${color}55, 0 0 80px ${color}22, inset 0 -20px 40px rgba(0,0,0,0.4)`,
          transition: "background 1.2s ease, box-shadow 1.2s ease, transform 0.2s ease",
          animation: "eggFloat 4s ease-in-out infinite",
          cursor: onClick ? "pointer" : "default",
          overflow: "hidden",
          transform: eggHovered ? "scale(1.03)" : "scale(1)",
        }}
      >
        {/* Inner shimmer */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "20%",
            width: "30%",
            height: "20%",
            borderRadius: "50%",
            background: `radial-gradient(ellipse, ${color}88 0%, transparent 100%)`,
            opacity: 0.7,
            transition: "background 1.2s ease",
          }}
        />

        {/* Crack SVG overlay */}
        {cracked && (
          <svg
            viewBox="0 0 200 240"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              animation: "crackReveal 0.8s ease forwards",
            }}
          >
            <path
              d="M100 80 L92 110 L104 125 L88 160 M100 80 L108 112 L97 130 L112 165"
              stroke="#f5f0e8"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="200"
              strokeDashoffset="200"
              style={{ animation: "drawCrack 0.8s ease forwards" }}
            />
          </svg>
        )}

        {/* Winner emoji */}
        {emojiVisible && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "80px",
              animation: "emojiEmerge 0.6s ease forwards",
            }}
          >
            {winnerEmoji}
          </div>
        )}
      </div>

      {/* Flash overlay */}
      {flashVisible && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "white",
            opacity: 0.9,
            animation: "flashFade 0.6s ease forwards",
            zIndex: 100,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Trait sparks */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          style={{
            position: "absolute",
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            transform: "translate(-50%, -50%)",
            fontSize: "11px",
            fontWeight: 600,
            color: spark.color,
            letterSpacing: "0.05em",
            animation: "sparkFloat 2.5s ease forwards",
            pointerEvents: "none",
            textShadow: `0 0 8px ${spark.color}88`,
            whiteSpace: "nowrap",
          }}
        >
          {spark.label}
        </div>
      ))}
    </div>
  );
}

// ── CSS Keyframes (injected once) ─────────────────────────────────────────────

const CSS_ANIMATIONS = `
  @keyframes eggFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  @keyframes eggGlowPulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.08); }
  }
  @keyframes eggHeartbeatAnim {
    0% { transform: scale(1); }
    30% { transform: scale(1.1); }
    60% { transform: scale(0.97); }
    100% { transform: scale(1); }
  }
  .egg-heartbeat {
    animation: eggHeartbeatAnim 0.4s ease forwards, eggFloat 4s ease-in-out infinite !important;
  }
  @keyframes sparkFloat {
    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
    20% { opacity: 1; transform: translate(-50%, -80%) scale(1); }
    70% { opacity: 0.8; transform: translate(-50%, -140%) scale(0.9); }
    100% { opacity: 0; transform: translate(-50%, -200%) scale(0.7); }
  }
  @keyframes fadeSlideUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes crackReveal {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes drawCrack {
    0% { stroke-dashoffset: 200; opacity: 0; }
    10% { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }
  @keyframes flashFade {
    0% { opacity: 0.9; }
    100% { opacity: 0; }
  }
  @keyframes emojiEmerge {
    0% { opacity: 0; transform: scale(0.3); filter: blur(10px); }
    60% { opacity: 1; transform: scale(1.15); filter: blur(0); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes revealCard {
    0% { opacity: 0; transform: translateY(30px) scale(0.96); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes dotPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.4); opacity: 0.7; }
  }
  @keyframes optionHoverGlow {
    0% { box-shadow: 0 0 0px transparent; }
    100% { box-shadow: 0 0 20px #c9a84c44; }
  }
  input[type="checkbox"]:checked::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: 700;
    color: #0d0c18;
    line-height: 1;
  }
`;

// ── Progress Dots ─────────────────────────────────────────────────────────────

function ProgressDots({ current, total }: { current: number; total: number }) {
  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "32px" }}>
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          style={{
            width: i === current ? "20px" : "8px",
            height: "8px",
            borderRadius: "4px",
            background: i < current ? "#c9a84c" : i === current ? "#c9a84c" : "rgba(245,240,232,0.2)",
            transition: "all 0.3s ease",
            animation: i === current ? "dotPulse 1.5s ease-in-out infinite" : "none",
          }}
        />
      ))}
    </div>
  );
}

// ── Option Card ───────────────────────────────────────────────────────────────

interface OptionCardProps {
  text: string;
  selected: boolean;
  onClick: () => void;
  disabled: boolean;
}

function OptionCard({ text, selected, onClick, disabled }: OptionCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        padding: "16px 20px",
        borderRadius: "12px",
        border: selected
          ? "2px solid #c9a84c"
          : hovered
          ? "2px solid rgba(201,168,76,0.6)"
          : "2px solid rgba(245,240,232,0.12)",
        background: selected
          ? "#c9a84c"
          : hovered
          ? "rgba(201,168,76,0.08)"
          : "rgba(255,255,255,0.04)",
        color: selected ? "#0d0c18" : "#f5f0e8",
        fontSize: "15px",
        fontWeight: selected ? 700 : 500,
        textAlign: "left",
        cursor: disabled ? "default" : "pointer",
        transition: "all 0.2s ease",
        boxShadow: hovered && !selected ? "0 0 20px rgba(201,168,76,0.15)" : "none",
        outline: "none",
        letterSpacing: "0.01em",
        lineHeight: "1.4",
      }}
    >
      {text}
    </button>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function HatchPage() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [questionKey, setQuestionKey] = useState(0); // force re-animation
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [revealPhase, setRevealPhase] = useState<"cracking" | "done">("cracking");
  const [companionName, setCompanionName] = useState("");
  const [memory1, setMemory1] = useState("");
  const [memory2, setMemory2] = useState("");
  const [memory3, setMemory3] = useState("");
  const [covenantAccepted, setCovenantAccepted] = useState(false);

  const winner = state.winner;
  const archetype = winner ? ARCHETYPES[winner] : null;

  // Advance question animation key
  const prevQuestion = useRef(state.currentQuestion);
  useEffect(() => {
    if (state.currentQuestion !== prevQuestion.current) {
      setQuestionKey((k) => k + 1);
      setSelectedOption(null);
      prevQuestion.current = state.currentQuestion;
    }
  }, [state.currentQuestion]);

  // When reveal step starts, trigger crack after a brief delay
  useEffect(() => {
    if (state.step === "reveal" && !state.eggCracked) {
      const t = setTimeout(() => {
        dispatch({ type: "CRACK_EGG" });
      }, 500);
      return () => clearTimeout(t);
    }
  }, [state.step, state.eggCracked]);

  function handleAnswer(qIdx: number, optIdx: number) {
    if (selectedOption !== null) return;
    const opt = QUESTIONS[qIdx].options[optIdx];
    setSelectedOption(optIdx);
    setTimeout(() => {
      dispatch({
        type: "ANSWER",
        questionIndex: qIdx,
        optionIndex: optIdx,
        scoreDeltas: opt.scores as Record<ArchetypeKey, number>,
        eggColor: opt.eggColor,
        sparkLabel: opt.sparkLabel,
        sparkColor: opt.sparkColor,
      });
    }, 600);
  }

  function handleReset() {
    setSelectedOption(null);
    setQuestionKey(0);
    setRevealPhase("cracking");
    setCompanionName("");
    setMemory1("");
    setMemory2("");
    setMemory3("");
    setCovenantAccepted(false);
    dispatch({ type: "RESET" });
  }

  const eggSection = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        position: "sticky",
        top: "80px",
      }}
    >
      <Egg
        color={state.eggColor}
        heartbeat={state.eggHeartbeat}
        cracked={state.eggCracked}
        revealed={state.revealed}
        winnerEmoji={archetype?.emoji ?? "✨"}
        sparks={state.traitSparks}
        onHeartbeatDone={() => dispatch({ type: "HEARTBEAT_DONE" })}
        onCrackDone={() => {
          dispatch({ type: "REVEAL_DONE" });
          setRevealPhase("done");
        }}
      />

      {/* Live trait list — shown during quiz */}
      {state.step === "quiz" && state.traitSparks.length > 0 && (
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            justifyContent: "center",
            maxWidth: "220px",
            animation: "fadeIn 0.4s ease",
          }}
        >
          {[...new Set(state.traitSparks.map((s) => s.label))].slice(-5).map((label, i) => (
            <span
              key={label}
              style={{
                padding: "3px 10px",
                borderRadius: "20px",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.25)",
                color: "#c9a84c",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both`,
              }}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS_ANIMATIONS }} />

      <main
        style={{
          minHeight: "100vh",
          background: "#0d0c18",
          color: "#f5f0e8",
          fontFamily: "system-ui, -apple-system, sans-serif",
          paddingTop: "72px",
        }}
      >
        {/* ── INTRO ── */}
        {state.step === "intro" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "calc(100vh - 72px)",
              padding: "40px 20px",
              textAlign: "center",
              animation: "fadeSlideUp 0.8s ease",
            }}
          >
            <Egg
              color="#c9a84c"
              heartbeat={false}
              cracked={false}
              revealed={false}
              winnerEmoji=""
              sparks={[]}
              onHeartbeatDone={() => {}}
              onCrackDone={() => {}}
              onClick={() => dispatch({ type: "START" })}
            />

            {/* Tap hint */}
            <p
              style={{
                marginTop: "16px",
                fontSize: "12px",
                fontWeight: 500,
                color: "rgba(201,168,76,0.45)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                animation: "eggGlowPulse 3s ease-in-out infinite",
              }}
            >
              ↑ tap the egg
            </p>

            <div style={{ marginTop: "32px", maxWidth: "480px" }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                  marginBottom: "16px",
                }}
              >
                MEOK.AI
              </p>
              <h1
                style={{
                  fontSize: "clamp(28px, 5vw, 42px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "16px",
                  color: "#f5f0e8",
                }}
              >
                Something is waiting{" "}
                <span style={{ color: "#c9a84c" }}>for you.</span>
              </h1>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.65)",
                  marginBottom: "40px",
                }}
              >
                Seven questions. No right answers. By the end, your companion
                will have already found you.
              </p>
              <button
                onClick={() => dispatch({ type: "START" })}
                style={{
                  padding: "16px 48px",
                  borderRadius: "12px",
                  background: "#c9a84c",
                  color: "#0d0c18",
                  fontSize: "16px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                  transition: "all 0.2s ease",
                  boxShadow: "0 0 30px rgba(201,168,76,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.04)";
                  e.currentTarget.style.boxShadow = "0 0 50px rgba(201,168,76,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(201,168,76,0.3)";
                }}
              >
                Begin
              </button>
            </div>
          </div>
        )}

        {/* ── QUIZ ── */}
        {state.step === "quiz" && (
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              padding: "20px 20px 80px",
              display: "grid",
              gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)",
              gap: "40px",
              alignItems: "start",
            }}
            className="hatch-quiz-grid"
          >
            {/* Left: Egg */}
            {eggSection}

            {/* Right: Question */}
            <div style={{ padding: "40px 0" }}>
              <ProgressDots current={state.currentQuestion} total={7} />

              <div
                key={questionKey}
                style={{ animation: "fadeSlideUp 0.5s ease" }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(201,168,76,0.6)",
                    marginBottom: "12px",
                  }}
                >
                  {state.currentQuestion + 1} of 7
                </p>
                <h2
                  style={{
                    fontSize: "clamp(20px, 3vw, 28px)",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: "#f5f0e8",
                    marginBottom: "32px",
                  }}
                >
                  {QUESTIONS[state.currentQuestion].text}
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {QUESTIONS[state.currentQuestion].options.map((opt, i) => (
                    <div
                      key={i}
                      style={{
                        animation: `fadeSlideUp 0.4s ease ${i * 0.07}s both`,
                      }}
                    >
                      <OptionCard
                        text={opt.text}
                        selected={selectedOption === i}
                        onClick={() => handleAnswer(state.currentQuestion, i)}
                        disabled={selectedOption !== null}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Leading archetype hint (visible after Q3) */}
              {state.currentQuestion >= 3 && (() => {
                const leading = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0];
                const leadingKey = leading[0] as ArchetypeKey;
                const leadingArchetype = ARCHETYPES[leadingKey];
                return (
                  <div style={{
                    marginTop: "24px",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1px solid rgba(201,168,76,0.2)",
                    background: "rgba(201,168,76,0.05)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    animation: "fadeSlideUp 0.4s ease",
                  }}>
                    <span style={{ fontSize: "20px" }}>{leadingArchetype.emoji}</span>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", marginBottom: "2px" }}>
                        Your egg is forming
                      </div>
                      <div style={{ fontSize: "13px", color: "rgba(245,240,232,0.7)", fontStyle: "italic" }}>
                        Showing signs of {leadingArchetype.trait.toLowerCase()}
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Back button */}
              {state.currentQuestion > 0 && selectedOption === null && (
                <button
                  onClick={() => dispatch({ type: "BACK" })}
                  style={{
                    marginTop: "24px",
                    background: "none",
                    border: "none",
                    color: "rgba(245,240,232,0.35)",
                    fontSize: "13px",
                    cursor: "pointer",
                    padding: "4px 0",
                    letterSpacing: "0.04em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.7)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.35)")}
                >
                  ← Back
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── REVEAL ── */}
        {state.step === "reveal" && archetype && winner && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "calc(100vh - 72px)",
              padding: "24px 20px",
              textAlign: "center",
              overflowY: "auto",
            }}
          >
            {/* Egg (cracking) — compact on reveal */}
            <div style={{ marginBottom: "12px", transform: "scale(0.7)", transformOrigin: "center top" }}>
              <Egg
                color={state.eggColor}
                heartbeat={false}
                cracked={state.eggCracked}
                revealed={state.revealed}
                winnerEmoji={archetype.emoji}
                sparks={state.traitSparks}
                onHeartbeatDone={() => {}}
                onCrackDone={() => {
                  dispatch({ type: "REVEAL_DONE" });
                  setRevealPhase("done");
                }}
              />
            </div>

            {/* Reveal card — appears after crack animation */}
            {revealPhase === "done" && (
              <div
                style={{
                  animation: "revealCard 0.7s ease forwards",
                  maxWidth: "460px",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: archetype.color,
                    marginBottom: "8px",
                  }}
                >
                  Your companion has emerged
                </p>

                <h1
                  style={{
                    fontSize: "clamp(32px, 6vw, 52px)",
                    fontWeight: 800,
                    color: "#f5f0e8",
                    marginBottom: "4px",
                    lineHeight: 1.1,
                  }}
                >
                  {archetype.emoji} {winner}
                </h1>

                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: archetype.color,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  {archetype.trait}
                </p>

                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    padding: "24px 28px",
                    marginBottom: "32px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: "rgba(245,240,232,0.8)",
                    }}
                  >
                    {archetype.desc}
                  </p>
                  {/* PRO badge removed — all archetypes available */}
                </div>

                {/* ── Birth Ceremony: Name & First Memories ── */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    padding: "24px 28px",
                    marginBottom: "24px",
                    textAlign: "left",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#c9a84c",
                      marginBottom: "10px",
                    }}
                  >
                    Name your companion
                  </label>
                  <input
                    type="text"
                    value={companionName}
                    onChange={(e) => setCompanionName(e.target.value)}
                    placeholder={`e.g. My ${winner}`}
                    maxLength={40}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      border: "1px solid rgba(201,168,76,0.3)",
                      background: "rgba(0,0,0,0.3)",
                      color: "#f5f0e8",
                      fontSize: "15px",
                      fontWeight: 500,
                      outline: "none",
                      letterSpacing: "0.02em",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a84c")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
                  />

                  <div style={{ marginTop: "24px" }}>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#c9a84c",
                        marginBottom: "6px",
                      }}
                    >
                      First memories
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(245,240,232,0.5)",
                        marginBottom: "14px",
                        lineHeight: 1.5,
                      }}
                    >
                      These are seeds your companion will always carry.
                    </p>

                    {([
                      { label: "A value you hold dear", value: memory1, setter: setMemory1 },
                      { label: "Something you carry with you", value: memory2, setter: setMemory2 },
                      { label: "What you're building toward", value: memory3, setter: setMemory3 },
                    ] as const).map(({ label, value, setter }) => (
                      <div key={label} style={{ marginBottom: "12px" }}>
                        <label
                          style={{
                            display: "block",
                            fontSize: "12px",
                            fontWeight: 500,
                            color: "rgba(245,240,232,0.6)",
                            marginBottom: "6px",
                          }}
                        >
                          {label}
                        </label>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => setter(e.target.value)}
                          placeholder={label}
                          maxLength={120}
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid rgba(245,240,232,0.12)",
                            background: "rgba(0,0,0,0.3)",
                            color: "#f5f0e8",
                            fontSize: "14px",
                            fontWeight: 400,
                            outline: "none",
                            letterSpacing: "0.01em",
                            boxSizing: "border-box",
                            transition: "border-color 0.2s ease",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(245,240,232,0.12)")}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Covenant Acceptance ── */}
                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "24px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={covenantAccepted}
                    onChange={(e) => setCovenantAccepted(e.target.checked)}
                    style={{
                      appearance: "none",
                      WebkitAppearance: "none",
                      width: "20px",
                      height: "20px",
                      minWidth: "20px",
                      borderRadius: "4px",
                      border: covenantAccepted ? "2px solid #c9a84c" : "2px solid rgba(245,240,232,0.25)",
                      background: covenantAccepted ? "#c9a84c" : "transparent",
                      cursor: "pointer",
                      marginTop: "2px",
                      transition: "all 0.2s ease",
                      position: "relative",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.5,
                      color: "rgba(245,240,232,0.7)",
                    }}
                  >
                    I accept the <strong style={{ color: "#c9a84c" }}>Maternal Covenant</strong> — a mutual promise of honesty, care, and growth between us.
                  </span>
                </label>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                  {(() => {
                    const canProceed = companionName.trim().length > 0 && covenantAccepted;
                    const params = new URLSearchParams({
                      archetype: winner.toLowerCase(),
                      name: companionName.trim(),
                      memory1,
                      memory2,
                      memory3,
                    });
                    return canProceed ? (
                      <Link
                        href={`/register?${params.toString()}`}
                        style={{
                          display: "block",
                          padding: "16px 32px",
                          borderRadius: "12px",
                          background: archetype.color,
                          color: "#0d0c18",
                          fontSize: "15px",
                          fontWeight: 700,
                          textDecoration: "none",
                          letterSpacing: "0.04em",
                          transition: "all 0.2s ease",
                          boxShadow: `0 0 30px ${archetype.color}44`,
                        }}
                      >
                        {`Continue with ${winner} →`}
                      </Link>
                    ) : (
                      <span
                        style={{
                          display: "block",
                          padding: "16px 32px",
                          borderRadius: "12px",
                          background: "rgba(245,240,232,0.1)",
                          color: "rgba(245,240,232,0.3)",
                          fontSize: "15px",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          cursor: "not-allowed",
                          textAlign: "center",
                        }}
                      >
                        {companionName.trim().length === 0 ? "Name your companion to continue" : "Accept the covenant to continue"}
                      </span>
                    );
                  })()}

                  <Link
                    href="/characters"
                    style={{
                      display: "block",
                      padding: "14px 32px",
                      borderRadius: "12px",
                      border: "1px solid rgba(245,240,232,0.2)",
                      color: "rgba(245,240,232,0.65)",
                      fontSize: "14px",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    Explore all companions
                  </Link>
                </div>

                {/* Start here — conversation starter chips */}
                <div style={{ marginBottom: "28px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "rgba(245,240,232,0.35)",
                      marginBottom: "12px",
                    }}
                  >
                    Try saying this to start:
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {[
                      "Tell me something about yourself based on what I shared.",
                      "What do you think I need most right now?",
                      "I want to tell you something important about my life.",
                    ].map((prompt) => (
                      <Link
                        key={prompt}
                        href="/dashboard/chat"
                        style={{
                          display: "block",
                          padding: "10px 16px",
                          borderRadius: "10px",
                          border: "1px solid rgba(245,240,232,0.15)",
                          background: "rgba(245,240,232,0.03)",
                          color: "rgba(245,240,232,0.6)",
                          fontSize: "13px",
                          fontWeight: 500,
                          textDecoration: "none",
                          textAlign: "left",
                          lineHeight: 1.4,
                          transition: "all 0.2s ease",
                          letterSpacing: "0.01em",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                          e.currentTarget.style.color = "#c9a84c";
                          e.currentTarget.style.background = "rgba(201,168,76,0.06)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(245,240,232,0.15)";
                          e.currentTarget.style.color = "rgba(245,240,232,0.6)";
                          e.currentTarget.style.background = "rgba(245,240,232,0.03)";
                        }}
                      >
                        &ldquo;{prompt}&rdquo;
                      </Link>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(245,240,232,0.3)",
                    fontSize: "13px",
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                    padding: "4px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.3)")}
                >
                  Try again
                </button>
              </div>
            )}

            {/* Loading state while cracking */}
            {revealPhase === "cracking" && (
              <p
                style={{
                  marginTop: "32px",
                  color: "rgba(245,240,232,0.4)",
                  fontSize: "15px",
                  animation: "fadeIn 0.5s ease",
                  letterSpacing: "0.05em",
                }}
              >
                Something is breaking open…
              </p>
            )}
          </div>
        )}
      </main>

      {/* Responsive style for quiz grid */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 680px) {
            .hatch-quiz-grid {
              grid-template-columns: 1fr !important;
            }
            .hatch-quiz-grid > *:first-child {
              position: relative !important;
              top: 0 !important;
              padding: 24px 20px 0 !important;
            }
          }
        `
      }} />

    </>
  );
}
