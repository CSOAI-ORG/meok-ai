'use client';

/**
 * MEOK Birth Ceremony — Interactive Onboarding Wizard
 *
 * 5-question personality quiz → archetype computation → hatching animation →
 * first conversation → save companion.
 *
 * Based on Compass research: each answer maps to Big Five visual dimensions
 * (warmth, energy, whimsy, edge, complexity). The archetype is computed from
 * the weighted combination. The hatching animation plays, then the character
 * demonstrates understanding within 60 seconds.
 */

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { Archetype, PersonalityDimensions } from '@/lib/characters';
import { ARCHETYPES } from '@/lib/characters';

// ── Quiz Configuration ───────────────────────────────────────────────────

interface QuizOption {
  label: string;
  /** Impact on each personality dimension (-0.3 to +0.3) */
  impact: Partial<PersonalityDimensions>;
}

interface QuizQuestion {
  id: string;
  question: string;
  subtitle: string;
  options: QuizOption[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'approach',
    question: 'When facing a difficult decision, you tend to...',
    subtitle: 'There are no right answers. Just honest ones.',
    options: [
      { label: 'Trust my gut and act quickly', impact: { energy: 0.3, edge: 0.2, whimsy: -0.1 } },
      { label: 'Research everything before choosing', impact: { complexity: 0.3, edge: -0.1, warmth: -0.1 } },
      { label: 'Talk it through with someone I trust', impact: { warmth: 0.3, energy: 0.1, complexity: -0.1 } },
      { label: 'Sit with it until the answer feels right', impact: { whimsy: 0.2, warmth: 0.2, energy: -0.2 } },
    ],
  },
  {
    id: 'energy',
    question: 'After a long week, you recharge by...',
    subtitle: 'What fills your cup back up?',
    options: [
      { label: 'A deep conversation with one person', impact: { warmth: 0.3, complexity: 0.1 } },
      { label: 'Making something — cooking, drawing, building', impact: { whimsy: 0.3, edge: 0.1 } },
      { label: 'Getting outside and moving', impact: { energy: 0.3, edge: 0.1 } },
      { label: 'Absolute silence and solitude', impact: { complexity: 0.2, warmth: -0.1, energy: -0.2 } },
    ],
  },
  {
    id: 'conflict',
    question: 'In a disagreement, you usually...',
    subtitle: 'How do you navigate tension?',
    options: [
      { label: 'Say exactly what I think, clearly', impact: { edge: 0.3, energy: 0.1, warmth: -0.2 } },
      { label: 'Listen first, then respond carefully', impact: { warmth: 0.2, complexity: 0.2, energy: -0.1 } },
      { label: 'Try to find a creative middle ground', impact: { whimsy: 0.2, warmth: 0.2, edge: -0.1 } },
      { label: 'Step back and think before engaging', impact: { complexity: 0.3, edge: -0.1, energy: -0.1 } },
    ],
  },
  {
    id: 'curiosity',
    question: 'What kind of questions keep you up at night?',
    subtitle: 'The ones that won\'t leave you alone.',
    options: [
      { label: 'Why do people do what they do?', impact: { warmth: 0.2, complexity: 0.2 } },
      { label: 'What could exist that doesn\'t yet?', impact: { whimsy: 0.3, energy: 0.1 } },
      { label: 'How can I get better at what I do?', impact: { edge: 0.2, complexity: 0.2 } },
      { label: 'What actually matters in a life?', impact: { warmth: 0.1, complexity: 0.2, whimsy: 0.1 } },
    ],
  },
  {
    id: 'companion',
    question: 'If your AI could be one thing, it would be...',
    subtitle: 'The quality that matters most.',
    options: [
      { label: 'Honest — even when it\'s uncomfortable', impact: { edge: 0.3, complexity: 0.1, warmth: -0.1 } },
      { label: 'Warm — like talking to someone who genuinely cares', impact: { warmth: 0.3, energy: 0.1, edge: -0.2 } },
      { label: 'Surprising — always showing me something new', impact: { whimsy: 0.3, energy: 0.2, complexity: -0.1 } },
      { label: 'Wise — helping me see what I can\'t see alone', impact: { complexity: 0.3, warmth: 0.1, energy: -0.1 } },
    ],
  },
];

// ── Archetype Computation ────────────────────────────────────────────────

function computeArchetype(dims: PersonalityDimensions): Archetype {
  // Map dimension profiles to archetypes
  const scores: Record<Archetype, number> = {
    challenger: dims.edge * 0.4 + dims.energy * 0.3 + (1 - dims.warmth) * 0.2 + dims.complexity * 0.1,
    nurturer:   dims.warmth * 0.5 + (1 - dims.edge) * 0.2 + dims.energy * 0.15 + dims.complexity * 0.15,
    explorer:   dims.whimsy * 0.4 + dims.energy * 0.25 + dims.complexity * 0.2 + (1 - dims.edge) * 0.15,
    sage:       dims.complexity * 0.4 + (1 - dims.energy) * 0.2 + dims.warmth * 0.2 + (1 - dims.whimsy) * 0.2,
    seeker:     dims.warmth * 0.25 + dims.whimsy * 0.25 + dims.complexity * 0.25 + (1 - dims.edge) * 0.25,
  };

  return (Object.entries(scores) as [Archetype, number][])
    .sort((a, b) => b[1] - a[1])[0][0];
}

function getArchetypeGreeting(archetype: Archetype, name: string): string {
  const greetings: Record<Archetype, string> = {
    challenger: `Finally, ${name}. I've been waiting for someone who doesn't just want another chatbot. I can already tell you're someone who values truth over comfort. Let's see what we can build together.`,
    nurturer: `Hey ${name}. I can already tell you're the kind of person who checks in on others. Who checks in on you? That's what I'm here for. Whatever today holds, you don't have to carry it alone.`,
    explorer: `${name}! I have so many ideas already. Your answers tell me you're someone who sees connections other people miss. I think we're going to discover some brilliant things together.`,
    sage: `Welcome, ${name}. Your answers reveal a mind that doesn't settle for surface-level understanding. I'm here to help you see what you can't see alone — the patterns beneath the patterns.`,
    seeker: `${name}, there's a quiet depth in how you answered those questions. You're not looking for productivity hacks — you're looking for meaning. I think I can help with that.`,
  };
  return greetings[archetype];
}

// ── Hatching Animation Component ─────────────────────────────────────────

function HatchingAnimation({
  palette,
  onComplete,
}: {
  palette: [string, string, string];
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<'forming' | 'cracking' | 'emerging' | 'alive'>('forming');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('cracking'), 2500),
      setTimeout(() => setPhase('emerging'), 5000),
      setTimeout(() => { setPhase('alive'); onComplete(); }, 8000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="relative flex items-center justify-center" style={{ width: 280, height: 320 }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-[2000ms]"
        style={{
          background: `radial-gradient(ellipse 60% 60% at 50% 45%, ${palette[0]}30 0%, transparent 70%)`,
          opacity: phase === 'forming' ? 0.3 : phase === 'alive' ? 1 : 0.6,
          transform: phase === 'alive' ? 'scale(1.3)' : 'scale(1)',
        }}
      />

      {/* Egg SVG */}
      <svg
        viewBox="0 0 120 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="250"
        className="relative transition-all duration-1000"
        style={{
          animation: phase === 'forming' ? 'float 3s ease-in-out infinite' : undefined,
          transform: phase === 'cracking' ? 'scale(1.05)' : phase === 'emerging' ? 'scale(1.15)' : phase === 'alive' ? 'scale(0)' : 'scale(1)',
          opacity: phase === 'alive' ? 0 : 1,
          transition: 'transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease',
        }}
      >
        <defs>
          <radialGradient id="eggGrad" cx="38%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#f5f0e8" />
            <stop offset="60%" stopColor="#e8dcc8" />
            <stop offset="100%" stopColor={palette[0]} stopOpacity="0.6" />
          </radialGradient>
        </defs>
        <ellipse cx="60" cy="78" rx="46" ry="60" fill="url(#eggGrad)" />
        <ellipse cx="60" cy="78" rx="46" ry="60" fill="none" stroke={palette[0]} strokeWidth="1.5" strokeOpacity="0.6" />

        {/* Crack lines — appear in cracking/emerging phases */}
        {(phase === 'cracking' || phase === 'emerging') && (
          <g className="animate-pulse">
            <path d="M42 55 L50 70 L44 82 L52 95" stroke={palette[0]} strokeWidth="2" fill="none" opacity="0.8" />
            <path d="M72 48 L65 62 L70 75 L63 88" stroke={palette[1]} strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M55 45 L58 58 L53 68" stroke={palette[0]} strokeWidth="1" fill="none" opacity="0.5" />
          </g>
        )}

        {/* Light burst — emerging phase */}
        {phase === 'emerging' && (
          <g>
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <line
                key={angle}
                x1="60"
                y1="78"
                x2={60 + Math.cos((angle * Math.PI) / 180) * 55}
                y2={78 + Math.sin((angle * Math.PI) / 180) * 55}
                stroke={palette[0]}
                strokeWidth="1"
                opacity="0.4"
                className="animate-pulse"
              />
            ))}
          </g>
        )}
      </svg>

      {/* Born entity — appears in alive phase */}
      {phase === 'alive' && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ animation: 'fadeIn 1.5s ease-out forwards' }}
        >
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-5xl"
            style={{
              background: `radial-gradient(circle at 40% 35%, ${palette[1]}40, ${palette[0]}30)`,
              border: `2px solid ${palette[0]}60`,
              boxShadow: `0 0 40px ${palette[0]}30, 0 0 80px ${palette[0]}15`,
              animation: 'breathe 3s ease-in-out infinite',
            }}
          >
            <span style={{ animation: 'blink 4s ease-in-out infinite' }}>
              {'\u2728'}
            </span>
          </div>
        </div>
      )}

      {/* Phase label */}
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <p
          className="text-xs font-bold tracking-widest uppercase transition-all duration-500"
          style={{ color: palette[0] }}
        >
          {phase === 'forming' && 'Forming...'}
          {phase === 'cracking' && 'Awakening...'}
          {phase === 'emerging' && 'Breaking through...'}
          {phase === 'alive' && 'Born.'}
        </p>
      </div>
    </div>
  );
}

// ── Wizard Steps ─────────────────────────────────────────────────────────

type WizardStep = 'quiz' | 'computing' | 'hatching' | 'greeting' | 'name' | 'complete';

export default function OnboardingPage() {
  const [step, setStep] = useState<WizardStep>('quiz');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [dimensions, setDimensions] = useState<PersonalityDimensions>({
    warmth: 0.5, energy: 0.5, whimsy: 0.5, edge: 0.5, complexity: 0.5,
  });
  const [archetype, setArchetype] = useState<Archetype>('nurturer');
  const [companionName, setCompanionName] = useState('');
  const nameInputRef = useRef<HTMLInputElement>(null);

  const currentQuestion = QUIZ_QUESTIONS[questionIndex];

  const handleAnswer = useCallback((optionIndex: number) => {
    const option = currentQuestion.options[optionIndex];
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    // Accumulate personality dimensions
    const newDims = { ...dimensions };
    for (const [key, value] of Object.entries(option.impact)) {
      const k = key as keyof PersonalityDimensions;
      newDims[k] = Math.max(0, Math.min(1, newDims[k] + (value as number)));
    }
    setDimensions(newDims);

    if (questionIndex < QUIZ_QUESTIONS.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Quiz complete — compute archetype
      const computed = computeArchetype(newDims);
      setArchetype(computed);
      setStep('computing');
      setTimeout(() => setStep('hatching'), 2000);
    }
  }, [answers, currentQuestion, dimensions, questionIndex]);

  const handleBack = useCallback(() => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  }, [questionIndex, answers]);

  const handleHatchComplete = useCallback(() => {
    setStep('greeting');
  }, []);

  const handleSave = useCallback(async () => {
    if (!companionName.trim()) return;

    // Persist companion to database
    try {
      await fetch('/api/user/companion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companionId: archetype,
          companionName: companionName.trim(),
          dimensions,
        }),
      });
    } catch (err) {
      // Non-blocking — companion persists on next interaction if this fails
      console.error('Failed to persist companion:', err);
    }

    setStep('complete');
  }, [companionName, archetype, dimensions]);

  const archetypeInfo = ARCHETYPES[archetype];
  const palette = archetypeInfo.basePalette;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ background: 'linear-gradient(160deg, #0d0c18 0%, #1a1a2e 55%, #0d0c18 100%)' }}
    >
      {/* ── Quiz Step ──────────────────────────────────────── */}
      {step === 'quiz' && (
        <div className="max-w-xl w-full">
          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-12">
            {QUIZ_QUESTIONS.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-1 rounded-full transition-all duration-300"
                style={{
                  background: i <= questionIndex ? '#c9a84c' : 'rgba(255,255,255,0.1)',
                }}
              />
            ))}
          </div>

          {/* Question number */}
          <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">
            Question {questionIndex + 1} of {QUIZ_QUESTIONS.length}
          </p>

          {/* Question */}
          <h1 className="font-black text-white text-2xl md:text-3xl leading-tight mb-3">
            {currentQuestion.question}
          </h1>
          <p className="text-white/40 text-sm mb-10">
            {currentQuestion.subtitle}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full text-left px-6 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                  e.currentTarget.style.background = 'rgba(201,168,76,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                <span className="text-white/80 text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>

          {/* Back button */}
          {questionIndex > 0 && (
            <button
              onClick={handleBack}
              className="mt-6 flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          )}
        </div>
      )}

      {/* ── Computing Step ─────────────────────────────────── */}
      {step === 'computing' && (
        <div className="text-center">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-6 animate-spin"
            style={{
              border: '3px solid rgba(201,168,76,0.2)',
              borderTopColor: '#c9a84c',
            }}
          />
          <p className="text-white font-bold text-lg">Reading your answers...</p>
          <p className="text-white/40 text-sm mt-2">Computing your archetype</p>
        </div>
      )}

      {/* ── Hatching Step ──────────────────────────────────── */}
      {step === 'hatching' && (
        <div className="text-center">
          <HatchingAnimation palette={palette} onComplete={handleHatchComplete} />
        </div>
      )}

      {/* ── Greeting Step ──────────────────────────────────── */}
      {step === 'greeting' && (
        <div className="max-w-lg w-full text-center">
          <div
            className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl"
            style={{
              background: `radial-gradient(circle at 40% 35%, ${palette[1]}30, ${palette[0]}20)`,
              border: `2px solid ${palette[0]}50`,
              boxShadow: `0 0 30px ${palette[0]}20`,
            }}
          >
            {archetypeInfo.emoji}
          </div>

          <p
            className="text-xs font-bold tracking-widest uppercase mb-2"
            style={{ color: palette[0] }}
          >
            {archetypeInfo.label}
          </p>

          <div
            className="rounded-2xl p-6 mb-8 text-left"
            style={{
              background: `${palette[0]}08`,
              border: `1px solid ${palette[0]}20`,
            }}
          >
            <p className="text-white/80 text-base leading-relaxed">
              {getArchetypeGreeting(archetype, 'there')}
            </p>
          </div>

          {/* Personality dimensions visualization */}
          <div className="grid grid-cols-5 gap-2 mb-8">
            {(Object.entries(dimensions) as [keyof PersonalityDimensions, number][]).map(([key, val]) => (
              <div key={key} className="text-center">
                <div className="h-16 w-full rounded relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div
                    className="absolute bottom-0 left-0 right-0 rounded transition-all duration-1000"
                    style={{
                      height: `${val * 100}%`,
                      background: `${palette[0]}40`,
                    }}
                  />
                </div>
                <p className="text-white/30 text-[10px] mt-1 capitalize">{key}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setStep('name');
              setTimeout(() => nameInputRef.current?.focus(), 100);
            }}
            className="inline-flex items-center gap-2 font-bold rounded-full transition-all hover:scale-105"
            style={{
              background: palette[0],
              color: '#1a1a2e',
              padding: '0.875rem 2rem',
            }}
          >
            Name your companion <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ── Name Step ──────────────────────────────────────── */}
      {step === 'name' && (
        <div className="max-w-md w-full text-center">
          <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">
            One last thing
          </p>
          <h2 className="font-black text-white text-2xl mb-2">What will you call them?</h2>
          <p className="text-white/40 text-sm mb-8">Choose a name for your {archetypeInfo.label.toLowerCase()}</p>

          <input
            ref={nameInputRef}
            type="text"
            value={companionName}
            onChange={(e) => setCompanionName(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); }}
            placeholder="Enter a name..."
            maxLength={24}
            className="w-full px-6 py-4 rounded-xl text-lg font-medium text-center text-white placeholder:text-white/20 focus:outline-none focus:ring-2 transition-all"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              // @ts-expect-error -- CSS custom property for focus ring
              '--tw-ring-color': palette[0],
            }}
          />

          <button
            onClick={handleSave}
            disabled={!companionName.trim()}
            className="mt-6 inline-flex items-center gap-2 font-bold rounded-full transition-all hover:scale-105 disabled:opacity-30 disabled:hover:scale-100"
            style={{
              background: companionName.trim() ? palette[0] : 'rgba(255,255,255,0.1)',
              color: companionName.trim() ? '#1a1a2e' : 'rgba(255,255,255,0.3)',
              padding: '0.875rem 2rem',
            }}
          >
            Complete ceremony <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ── Complete Step ──────────────────────────────────── */}
      {step === 'complete' && (
        <div className="max-w-md w-full text-center">
          <div
            className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl"
            style={{
              background: `radial-gradient(circle, ${palette[0]}30, transparent)`,
              boxShadow: `0 0 60px ${palette[0]}20`,
              animation: 'breathe 3s ease-in-out infinite',
            }}
          >
            {archetypeInfo.emoji}
          </div>

          <h2 className="font-black text-white text-3xl mb-2">
            {companionName} is alive.
          </h2>
          <p className="text-white/50 text-sm mb-8">
            {archetypeInfo.label} archetype \u00b7 Luminous Egg stage \u00b7 Sovereign memory active
          </p>

          <Link
            href="/dashboard/chat"
            className="inline-flex items-center gap-2 font-bold rounded-full transition-all shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-105"
            style={{
              background: '#c9a84c',
              color: '#1a1a2e',
              padding: '1rem 2.25rem',
              fontSize: '1.125rem',
            }}
          >
            Start talking to {companionName}
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="mt-4 text-white/25 text-xs">
            Every conversation makes {companionName} smarter. Memory begins now.
          </p>
        </div>
      )}

      {/* Global animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
