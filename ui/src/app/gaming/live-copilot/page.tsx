"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Headphones, Monitor, Target, Zap, Swords, Cpu } from "lucide-react";
import { Surface, IconOrb, FeatureCard, GlowText, StatCard } from "@/components/design-system";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does MEOK Live Co-Pilot violate anti-cheat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK does not read game memory, inject into processes, or interact with game clients directly. It works through screen capture (with your permission) and voice input — the same as a friend watching your stream and giving callouts. This approach is compliant with Valorant's Vanguard, VAC, and all major anti-cheat systems.",
      },
    },
    {
      "@type": "Question",
      name: "How fast does MEOK respond mid-game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "120ms median from voice input to spoken response. Human reaction time is around 250ms. MEOK's response lands before you'd consciously register you asked.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK observe my game — screen capture, API, or overlay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Currently MEOK uses two methods: (1) screen capture — you share your game window and MEOK reads what's visible, the same as a spectator; (2) platform APIs where available (Riot API for League/Valorant, Steam API for CS2) for match context, rank, and stats. MEOK does not use a game overlay or inject into any process. You describe situations verbally for anything not visible on screen.",
      },
    },
    {
      "@type": "Question",
      name: "Won't a voice in my ear mid-game be distracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's the right question to ask. MEOK's default mode is not a running commentary — it only speaks when you ask, or when it detects a specific pattern you've told it to flag. You can also choose post-round popups or phone notifications instead of live voice. Most players run voice mode only for pre-fight checks and let post-round mode handle the analysis.",
      },
    },
    {
      "@type": "Question",
      name: "Which games does Live Co-Pilot support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep knowledge for Valorant, League of Legends, CS2, Apex Legends, Fortnite, Dota 2, Overwatch 2, and TFT. For any other game, MEOK uses its general gaming knowledge base — less specific, still useful.",
      },
    },
  ],
};

const GAME_EXAMPLES = [
  {
    game: "CS2",
    color: "#e07340",
    scenario: "You've died to the same AWP angle from CT spawn three times this half.",
    whisper: "Smoke that corner before you push. B3 box blocks the angle completely — you have the utility.",
    context: "MEOK noticed the pattern after death #2. By death #3 it flags it automatically.",
    tag: "Pattern detection",
  },
  {
    game: "Valorant",
    color: "#e07340",
    scenario: "Your team has lost three eco rounds in a row. Enemy is reading your pistol pushes.",
    whisper: "They're holding aggressive off spawn. Full-buy next round — your economy can support it and they won't expect rifles.",
    context: "MEOK cross-references enemy buy patterns with your team's loss history to time the swing.",
    tag: "Economy read",
  },
  {
    game: "League",
    color: "#2d9b8a",
    scenario: "Enemy jungler has dived you twice. You're playing under tower with no vision.",
    whisper: "Ward river bush at 4:30 — they rotate for dragon at 5 every game. You'll see the dive coming 15 seconds early.",
    context: "Based on their jungler's route pattern across the last four games MEOK has observed.",
    tag: "Vision timing",
  },
];

const FEATURES = [
  {
    icon: Headphones,
    title: "Voice whisper mode",
    description: "Sub-150ms voice callouts directly to your headset. Push-to-talk or always-on. MEOK speaks like a teammate, not a robot.",
  },
  {
    icon: Monitor,
    title: "Screen capture observation",
    description: "No overlays. No injection. MEOK reads your game window visually — the same as a spectator — and stays completely anti-cheat safe.",
  },
  {
    icon: Target,
    title: "Pattern detection",
    description: "Dying to the same angle? Missing the same rotation? MEOK flags patterns after just a few repetitions and whispers the fix before the next round.",
  },
  {
    icon: Zap,
    title: "Post-round & phone modes",
    description: "Prefer zero interruption? Get a one-sentence summary between rounds, or analysis pushed to your phone for lobby review.",
  },
];

const CAPABILITIES = [
  "120ms median voice response time",
  "Anti-cheat compliant — no injection, no overlays",
  "Works with Valorant, League, CS2, Apex, Fortnite, Dota 2, Overwatch 2, TFT",
  "Learns your personal habits, not just generic tips",
];

const FAQS = [
  {
    q: "Does MEOK Live Co-Pilot violate anti-cheat?",
    a: "No. MEOK does not read game memory, inject into processes, or interact with game clients directly. It works through screen capture (with your permission) and voice input — the same as a friend watching your stream and giving callouts. This approach is compliant with Valorant's Vanguard, VAC, and all major anti-cheat systems.",
  },
  {
    q: "How does MEOK observe my game — screen capture, API, or overlay?",
    a: "Currently MEOK uses two methods: (1) screen capture — you share your game window and MEOK reads what's visible, the same as a spectator; (2) platform APIs where available (Riot API for League/Valorant, Steam API for CS2) for match context, rank, and stats. MEOK does not use a game overlay or inject into any process. You describe situations verbally for anything not visible on screen.",
  },
  {
    q: "Won't a voice in my ear mid-game be distracting?",
    a: "That's the right question to ask. MEOK's default mode is not a running commentary — it only speaks when you ask, or when it detects a specific pattern you've told it to flag. You can also choose post-round popups or phone notifications instead of live voice. Most players run voice mode only for pre-fight checks and let post-round mode handle the analysis.",
  },
  {
    q: "How fast does MEOK respond mid-game?",
    a: "120ms median from voice input to spoken response. Human reaction time is around 250ms. MEOK's response lands before you'd consciously register you asked.",
  },
  {
    q: "Which games does Live Co-Pilot support?",
    a: "Deep knowledge for Valorant, League of Legends, CS2, Apex Legends, Fortnite, Dota 2, Overwatch 2, and TFT. For any other game, MEOK uses its general gaming knowledge base — less specific, still useful.",
  },
];

function PixelStrategyChat() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<{ question: string; answer: string; ts: string }[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const question = input.trim();
    setInput("");
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: question }],
          companionId: 'pixel',
        }),
      });
      if (res.status === 401 || res.status === 403) {
        setError("Sign in to use Pixel's live strategy console.");
        return;
      }
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const text = await res.text();
      setHistory((prev) => [{ question, answer: text, ts: new Date().toLocaleTimeString() }, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your gaming scenario... e.g. 'Enemy team rushes B every round in CS2'"
          disabled={loading}
          className="flex-1 px-5 py-4 rounded-2xl border border-white/[0.1] bg-white/[0.03] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-orange-400/40 transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="flex items-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          style={{ boxShadow: "0 0 20px rgba(201,168,76,0.2)" }}
        >
          {loading ? (
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          ) : (
            "Get Strategy"
          )}
        </button>
      </form>

      {error && (
        <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-red-500/25 bg-red-500/5 text-red-400 text-sm">
          <span className="flex-shrink-0">!</span>
          {error}
        </div>
      )}

      {history.length > 0 && (
        <div className="space-y-4">
          {history.map((entry, i) => (
            <Surface key={i} variant="glass" className="overflow-hidden" style={{ animation: "fadeSlideIn 0.4s ease-out forwards" }}>
              <div className="flex items-start gap-3 px-5 py-4 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="text-orange-400 text-xs font-black tracking-wider uppercase flex-shrink-0 pt-0.5">YOU</span>
                <p className="text-sm text-white/70">{entry.question}</p>
                <span className="ml-auto text-[10px] font-mono text-white/20 flex-shrink-0">{entry.ts}</span>
              </div>
              <div className="px-5 py-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#c9a84c] text-xs font-black tracking-wider uppercase">PIXEL</span>
                  <span className="text-[10px] text-white/20 italic">Gamer-native, tactically sharp</span>
                </div>
                <div className="text-sm text-white/60 leading-relaxed whitespace-pre-wrap break-words max-h-64 overflow-y-auto">
                  {entry.answer}
                </div>
              </div>
            </Surface>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof FAQS }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <Surface key={i} variant="glass" className="overflow-hidden">
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-bold text-white/80 text-sm sm:text-base">{faq.q}</span>
            <span
              className="text-[#c9a84c] text-lg flex-shrink-0 transition-transform duration-200"
              style={{ transform: open === i ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              ›
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 pt-1">
              <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
            </div>
          )}
        </Surface>
      ))}
    </div>
  );
}

export default function LiveCopilotPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(224,115,64,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(224,115,64,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(224,115,64,0.10) 0%, rgba(45,155,138,0.06) 60%, transparent 80%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: "#2d9b8a" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-black tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            MEOK GAMING OS — LIVE CO-PILOT
          </div>

          <div className="flex justify-center mb-6">
            <IconOrb icon={Swords} variant="orange" size="lg" pulse />
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 text-white">
            The callout you needed{" "}
            <br className="hidden sm:block" />
            <GlowText variant="orange" as="span">
              three rounds ago.
            </GlowText>
          </h1>

          <p className="text-xl sm:text-2xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-4">
            MEOK watches your game, spots the pattern you keep missing, and whispers the right call
            before the next round starts. 120ms. Voice, popup, or phone.
          </p>
          <p className="text-sm text-white/30 max-w-xl mx-auto mb-10">
            Not a running commentary. Not an overlay. A co-pilot that speaks when it has something worth saying.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#1a1a2e] bg-[#e07340] hover:bg-[#e5804d] transition-all text-base"
              style={{ boxShadow: "0 0 24px rgba(224,115,64,0.35), 0 0 48px rgba(224,115,64,0.12)" }}
            >
              Hatch your gaming companion
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/gaming"
              className="text-white/35 hover:text-white/60 text-sm font-medium transition-colors"
            >
              ← Back to Gaming OS
            </Link>
          </div>

          <Surface variant="elevated" glow="orange" className="inline-flex items-center gap-6 px-6 py-3">
            {[
              { label: "Response time", value: "120ms" },
              { label: "vs. human reaction time", value: "250ms" },
              { label: "Games with deep knowledge", value: "50+" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-xl font-black text-[#e07340]">{stat.value}</div>
                  <div className="text-xs text-white/30 mt-0.5">{stat.label}</div>
                </div>
                {i < 2 && <div className="h-8 w-px bg-white/10" />}
              </div>
            ))}
          </Surface>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05] animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              How it works
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Real-time coaching.{" "}
              <GlowText variant="orange" as="span">
                Zero distraction.
              </GlowText>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((feat) => (
              <FeatureCard
                key={feat.title}
                title={feat.title}
                description={feat.description}
                icon={feat.icon}
                iconVariant="orange"
                glow="orange"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          GAME EXAMPLES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Real examples
            </span>
            <h2 className="text-4xl font-black text-white">
              What MEOK actually{" "}
              <GlowText variant="orange" as="span">says.</GlowText>
            </h2>
            <p className="text-white/35 mt-4 text-sm max-w-lg mx-auto">
              Specific callouts. Not &ldquo;play better.&rdquo; Not &ldquo;improve your positioning.&rdquo; The actual words.
            </p>
          </div>

          <div className="space-y-5">
            {GAME_EXAMPLES.map((ex) => (
              <Surface key={ex.game} variant="elevated" glow="orange" className="overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.06] bg-black/20">
                  <span className="text-xs font-black tracking-[0.2em] uppercase" style={{ color: ex.color }}>
                    {ex.game}
                  </span>
                  <span className="ml-auto text-[10px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400">
                    {ex.tag}
                  </span>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-white/30 font-black tracking-[0.15em] uppercase mb-2">
                      Situation
                    </div>
                    <p className="text-white/65 text-sm leading-relaxed">{ex.scenario}</p>
                  </div>
                  <div>
                    <div className="text-xs font-black tracking-[0.15em] uppercase mb-2 text-orange-400">
                      MEOK whispers
                    </div>
                    <p className="text-white text-sm leading-relaxed font-medium">
                      &ldquo;{ex.whisper}&rdquo;
                    </p>
                    <p className="text-white/30 text-xs mt-3 leading-relaxed">{ex.context}</p>
                  </div>
                </div>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CAPABILITIES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05] animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
                Built for speed.
                <br />
                <GlowText variant="orange" as="span">
                  Built for gamers.
                </GlowText>
              </h2>
              <p className="text-white/50 leading-relaxed text-sm">
                Live Co-Pilot is not a generic AI assistant reading patch notes.
                It watches your screen, understands your match state, and speaks
                in the language of your game. Every callout is tuned to what is
                actually happening on your monitor.
              </p>
            </div>
            <Surface variant="elevated" glow="orange" className="p-7">
              <ul className="space-y-4">
                {CAPABILITIES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <Cpu className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ ACCORDION
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Common questions
            </span>
            <h2 className="text-4xl font-black text-white">FAQ</h2>
          </div>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PIXEL STRATEGY CHAT — Interactive
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05] animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 text-[#c9a84c] text-xs font-black tracking-[0.25em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
              LIVE STRATEGY CONSOLE
            </div>
            <h2 className="text-4xl font-black text-white mb-3">
              Ask Pixel for a{" "}
              <GlowText variant="orange" as="span">callout.</GlowText>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
              Describe your in-game situation and get tactical analysis. Gamer-native, tactically sharp.
            </p>
          </div>
          <PixelStrategyChat />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0a0a0f] animate-fade-in-up">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(224,115,64,0.07) 0%, rgba(45,155,138,0.04) 50%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <IconOrb icon={Zap} variant="orange" size="lg" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black leading-[0.95] mb-6 text-white tracking-tight">
            Your co-pilot is{" "}
            <GlowText variant="orange" as="span">waiting</GlowText>{" "}
            in the lobby.
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            120ms. Anti-cheat compliant. No overlay. Just the right call when it matters.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#e07340] hover:bg-[#e5804d] transition-all text-base sm:text-lg"
            style={{ boxShadow: "0 0 24px rgba(224,115,64,0.3), 0 0 48px rgba(224,115,64,0.1)" }}
          >
            Hatch your gaming companion
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <div className="mt-6">
            <Link
              href="/gaming"
              className="text-white/30 hover:text-white/50 text-sm transition-colors"
            >
              ← Back to Gaming OS overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
