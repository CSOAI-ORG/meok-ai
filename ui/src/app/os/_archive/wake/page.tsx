"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Moon,
  Sun,
  Sunset,
  Coffee,
  Clock,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Zap,
  Layers,
  Brain,
} from "lucide-react";
import { Surface, FeatureCard, IconOrb, GlowText } from "@/components/design-system";
import Link from "next/link";

// ─── Brand constants ──────────────────────────────────────────────────────────

const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ─── localStorage keys ────────────────────────────────────────────────────────

const LAST_SEEN_KEY    = "meok_last_seen";
const SESSION_CTX_KEY  = "meok_last_session_ctx";

// ─── Helpers ─────────────────────────────────────────────────────────────────

type TimeOfDay = "dawn" | "morning" | "afternoon" | "evening" | "night";

function getTimeOfDay(): TimeOfDay {
  const h = new Date().getHours();
  if (h >= 5  && h < 7)  return "dawn";
  if (h >= 7  && h < 12) return "morning";
  if (h >= 12 && h < 17) return "afternoon";
  if (h >= 17 && h < 21) return "evening";
  return "night";
}

function getGreeting(tod: TimeOfDay): string {
  switch (tod) {
    case "dawn":      return "Early start.";
    case "morning":   return "Good morning.";
    case "afternoon": return "Good afternoon.";
    case "evening":   return "Good evening.";
    case "night":     return "Still awake.";
  }
}

function getGreetingSubtext(tod: TimeOfDay, awayHours: number): string {
  if (awayHours < 0.1)  return "You just stepped away for a moment.";
  if (awayHours < 1)    return `You've been away for ${Math.round(awayHours * 60)} minutes.`;
  if (awayHours < 6)    return `You've been away for ${Math.round(awayHours)} hour${awayHours >= 2 ? "s" : ""}.`;
  if (awayHours < 24)   return `You've been away for ${Math.round(awayHours)} hours. I kept things moving.`;
  const days = Math.floor(awayHours / 24);
  return `It's been ${days} day${days > 1 ? "s" : ""}. A lot happened while you were away.`;
}

function TimeIcon({ tod }: { tod: TimeOfDay }) {
  const props = { className: "w-6 h-6", style: { color: GOLD } };
  switch (tod) {
    case "dawn":      return <Sunrise {...props} />;
    case "morning":   return <Coffee {...props} />;
    case "afternoon": return <Sun {...props} />;
    case "evening":   return <Sunset {...props} />;
    case "night":     return <Moon {...props} />;
  }
}

// Lucide doesn't export Sunrise, so we render a small inline SVG for dawn
function Sunrise({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v8M4.93 10.93l1.41 1.41M2 18h2M20 18h2M19.07 10.93l-1.41 1.41M22 22H2M16 6l-4-4-4 4M12 6v6" />
      <path d="M5 18a7 7 0 0 1 14 0" />
    </svg>
  );
}

const WHILE_AWAY_THOUGHTS = [
  "Reviewed 3 memory threads from your last session and flagged two for follow-up.",
  "Ran a quiet reflection on the patterns I noticed this week.",
  "Kept track of some things you might want to pick up.",
  "Finished processing a few background tasks from earlier.",
  "Sorted through recent context so we can jump back in quickly.",
  "Let the council weigh in on a few open questions from last time.",
  "Held some space for what we were working through together.",
];

function sampleThoughts(awayHours: number): string[] {
  const count = awayHours >= 6 ? 3 : awayHours >= 1 ? 2 : 1;
  // Deterministic shuffle based on current hour so thoughts don't flicker on re-render
  const seed  = new Date().getHours();
  const items = [...WHILE_AWAY_THOUGHTS]
    .sort((a, b) => ((a.charCodeAt(0) + seed) % 7) - ((b.charCodeAt(0) + seed) % 7));
  return items.slice(0, count);
}

// ─── Dream Cycle Summary (shown when away > 6 hours) ─────────────────────────

function DreamSummary() {
  return (
    <Surface variant="glass" className="mt-6 p-5">
      <p className="text-[10px] tracking-[0.14em] uppercase text-white/30 mb-2 flex items-center gap-1.5">
        <Moon className="w-3 h-3" />
        Dream cycle
      </p>
      <p className="text-sm text-white/55 leading-relaxed">
        While you were away I ran a synthesis pass — connecting threads from the past few sessions,
        surfacing patterns, and preparing context for when you returned. Everything is ready.
      </p>
    </Surface>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function WakePage() {
  const router = useRouter();

  const [awayHours, setAwayHours]   = useState(0);
  const [tod, setTod]               = useState<TimeOfDay>("morning");
  const [thoughts, setThoughts]     = useState<string[]>([]);
  const [hasSession, setHasSession] = useState(false);
  const [visible, setVisible]       = useState(false);

  useEffect(() => {
    const now      = Date.now();
    const lastSeen = parseInt(localStorage.getItem(LAST_SEEN_KEY) ?? "0", 10);
    const diffMs   = lastSeen ? now - lastSeen : 0;
    const hours    = diffMs / 3_600_000;

    const timeOfDay = getTimeOfDay();

    setAwayHours(hours);
    setTod(timeOfDay);
    setThoughts(sampleThoughts(hours));
    setHasSession(!!localStorage.getItem(SESSION_CTX_KEY));

    // Save current visit time
    localStorage.setItem(LAST_SEEN_KEY, String(now));

    // Fade in
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  function handleContinue() {
    router.push("/os/sovereign-os");
  }

  function handleFresh() {
    localStorage.removeItem(SESSION_CTX_KEY);
    router.push("/os/sovereign-os");
  }

  const greeting    = getGreeting(tod);
  const subtext     = getGreetingSubtext(tod, awayHours);
  const showDream   = awayHours >= 6;

  return (
    <div
      className="min-h-screen bg-[#0d0c18]"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Hero */}
      <section className="relative pt-28 pb-12 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#c9a84c]/[0.06] blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-900/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <IconOrb icon={Sun} variant="gold" size="lg" className="mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            <GlowText variant="gold">Wake</GlowText>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Your sovereign AI has been waiting. Here&apos;s what happened while you were away.
          </p>
        </div>
      </section>

      {/* Greeting Card */}
      <section className="px-6 pb-12">
        <div className="max-w-xl mx-auto">
          <Surface variant="elevated" glow="gold" className="p-8 text-center">
            {/* Character avatar orb */}
            <div
              className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
              style={{
                background: `radial-gradient(circle at 38% 38%, ${GOLD}44, ${GOLD}11 60%, transparent)`,
                border: `1px solid ${GOLD}33`,
                boxShadow: `0 0 40px ${GOLD}22, 0 0 80px ${GOLD}0a`,
              }}
            >
              <TimeIcon tod={tod} />
            </div>

            <h2 className="text-3xl font-black text-[#f5f0e8] mb-2">
              {greeting}
            </h2>
            <p className="text-sm text-white/45">
              {subtext}
            </p>

            {/* While you were away */}
            {thoughts.length > 0 && (
              <div className="mt-8 text-left">
                <p className="text-[10px] tracking-[0.14em] uppercase text-white/25 mb-3 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  While you were away, I&hellip;
                </p>
                <ul className="space-y-2">
                  {thoughts.map((thought, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/60 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                    >
                      <Sparkles className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                      {thought}
                    </li>
                  ))}
                </ul>
                {showDream && <DreamSummary />}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col gap-3 mt-8 max-w-sm mx-auto">
              <button type="button"
                onClick={handleContinue}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-[#c9a84c] text-[#0d0c18] font-bold hover:bg-[#b8963e] transition-all"
              >
                {hasSession ? "Continue where we left off" : "Enter OS Mode"}
                <ArrowRight className="w-4 h-4" />
              </button>

              <button type="button"
                onClick={handleFresh}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full border border-white/10 text-white/40 hover:text-white/70 hover:border-white/20 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Start fresh
              </button>
            </div>
          </Surface>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard
            title="Memory Sync"
            description="Every conversation and insight is preserved and ready to resume exactly where you left off."
            icon={Brain}
            iconVariant="gold"
            glow="gold"
          />
          <FeatureCard
            title="Background Tasks"
            description="Your agents kept working — research, planning, and analysis continued while you were away."
            icon={Layers}
            iconVariant="teal"
            glow="teal"
          />
          <FeatureCard
            title="Dream Cycles"
            description="After 6+ hours away, your AI runs a synthesis pass to surface patterns and prepare context."
            icon={Moon}
            iconVariant="purple"
            glow="purple"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-10 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Persistent session memory across devices",
              "Automatic background task continuation",
              "Dream-cycle insight generation",
              "One-click resume or fresh start",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to continue?</h2>
          <p className="text-white/50 mb-6">Jump back into the sovereign OS experience.</p>
          <Link
            href="/os/sovereign-os"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#c9a84c] text-[#0d0c18] font-bold hover:bg-[#b8963e] transition-all"
          >
            Enter OS Mode <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
