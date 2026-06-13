"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Brain, Shield, Globe2, X } from "lucide-react";

// ─── BRAND TOKENS ────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ─── DATA ────────────────────────────────────────────────────────────────────

const VALUE_PROPS = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Permanent Memory",
    desc: "Every conversation builds on the last. Your AI remembers your goals, your preferences, your context — across every session, every model.",
    accent: GOLD,
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Sovereign Safety",
    desc: "Your data is encrypted and never used for training. The Maternal Covenant ensures your AI serves your wellbeing — not a corporation's metrics.",
    accent: "#A78BFA",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Any Model, One Memory",
    desc: "Route across Claude, GPT-4o, DeepSeek, Groq, and more. Switch freely — your memory and personality travel with you.",
    accent: "#3B82F6",
  },
];

const STEPS = [
  { step: "1", title: "Start free", body: "Create your secure AI vault. Choose your first agent archetype. Name it. 2 minutes." },
  { step: "2", title: "Start talking", body: "Your AI already knows your style and values from the quiz. No setup. No cold start." },
  { step: "3", title: "Watch it grow", body: "Every conversation adds to encrypted memory. It gets better the more you use it — forever." },
];

const FREE_FEATURES = [
  "Sovereign AI agent",
  "Sovereign Onboarding",
  "50 messages/day",
  "Permanent Sovereign Memory",
  "DeepSeek + Ollama routing",
  "Full data export — always",
];

const SOVEREIGN_FEATURES = [
  "Everything in Explorer",
  "Unlimited messages",
  "Claude Sonnet + GPT-4o routing",
  "Work OS (Orion, Riri, Hourman)",
  "Guardian 24/7 protection",
  "Morning briefing",
];

const PRO_FEATURES = [
  "Everything in Sovereign",
  "Up to 7 companions",
  "Ralph Mode autonomy",
  "Family dashboard & shared memory",
  "Priority API & support",
  "Family Guardian alerts",
  "Priority support",
];

// ─── COOKIE HELPERS ──────────────────────────────────────────────────────────

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
  return match ? decodeURIComponent(match.split("=")[1]) : undefined;
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1800, started = false) {
  // Initialise at the real target so SSR, crawlers and no-JS visitors see the
  // true number (never a bare "0"). The scroll-triggered count-up is a pure
  // client-side enhancement on top of an already-correct value.
  const [value, setValue] = useState(target);
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [target, duration, started]);
  return value;
}

// ─── COUNTDOWN TIMER ────────────────────────────────────────────────────────

const ARTICLE_50_DEADLINE = new Date('2026-08-02T00:00:00+02:00'); // 2 Aug 2026 CEST

function useCountdown(target: Date) {
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, launched: false });
  useEffect(() => {
    function tick() {
      const now = Date.now();
      const diff = target.getTime() - now;
      if (diff <= 0) {
        setRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0, launched: true });
        return;
      }
      setRemaining({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
        launched: false,
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return remaining;
}

function CountdownBanner() {
  const { days, hours, minutes, seconds, launched } = useCountdown(ARTICLE_50_DEADLINE);
  if (launched) {
    return (
      <div className="bg-[#dc2626] text-white py-2.5 px-6 text-center text-sm font-bold tracking-wide">
        EU AI Act Article 50 is NOW IN FORCE — check your compliance.{" "}
        <a href="/scorecard" className="underline underline-offset-2 hover:opacity-80">
          Free assessment <span aria-hidden="true">→</span>
        </a>
      </div>
    );
  }
  return (
    <div className="bg-[#dc2626] text-white py-2.5 px-6 text-center text-sm font-bold tracking-wide">
      <span className="hidden sm:inline">EU AI Act Article 50 deadline — </span>
      <span className="font-mono">{days}d {hours}h {minutes}m {seconds}s</span>
      <span className="hidden sm:inline"> remaining</span>{" "}
      <a href="/scorecard" className="underline underline-offset-2 hover:opacity-80 ml-1">
        Free compliance check <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

// ─── SOCIAL PROOF SECTION ────────────────────────────────────────────────────

function SocialProofSection() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const waitlist = useCountUp(2400, 1800, started);
  const rating = useCountUp(49, 1200, started); // render as x/10 → "4.9"
  const countries = useCountUp(12, 1400, started);

  const stats = [
    {
      display: started ? `${waitlist.toLocaleString()}+` : "2,400+",
      label: "people on the waitlist",
      sub: "and growing every day",
      accent: GOLD,
    },
    {
      display: started ? `${Math.floor(rating / 10)}.${rating % 10}★` : "4.9★",
      label: "from early access users",
      sub: "across 200+ reviews",
      accent: "#A78BFA",
    },
    {
      display: started ? `${countries}` : "12",
      label: "countries using MEOK",
      sub: "and counting",
      accent: "#3B82F6",
    },
  ];

  return (
    <section
      ref={ref}
      aria-label="Social proof"
      className="py-20 px-6"
      style={{ background: SURFACE, borderTop: `1px solid rgba(201,168,76,0.08)` }}
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-sm font-bold tracking-widest uppercase mb-10" style={{ color: "rgba(255,255,255,0.25)" }}>
          Trusted worldwide
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-8 text-center"
              style={{ background: DEEP, border: `1px solid ${BORDER}` }}
            >
              <div
                className="text-4xl md:text-5xl font-black mb-2 tabular-nums"
                style={{ color: s.accent }}
              >
                {s.display}
              </div>
              <div className="text-white/70 font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ANIMATED FEATURE SHOWCASE ───────────────────────────────────────────────

const CYCLE_MS = 3000;

function AnimatedFeatureShowcase() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const startCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    startRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      setProgress(Math.min(elapsed / CYCLE_MS, 1));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % VALUE_PROPS.length);
      startRef.current = performance.now();
      setProgress(0);
    }, CYCLE_MS);
  };

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (idx: number) => {
    setActive(idx);
    setProgress(0);
    startRef.current = performance.now();
  };

  return (
    <section
      aria-label="Why MEOK is different"
      className="py-24 px-6"
      style={{ background: DEEP }}
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>Why MEOK</p>
          <h2 className="font-black text-white leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
            Every other AI extracts.{" "}
            <span style={{ color: GOLD }}>MEOK cares.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Other AI tools forget you, train on your data, and lock you to one model. MEOK does none of that.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_PROPS.map((item, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={item.title}
                onClick={() => handleSelect(idx)}
                className="rounded-2xl p-8 text-left transition-all duration-300 cursor-pointer focus:outline-none"
                style={{
                  background: isActive ? `${item.accent}10` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? item.accent + "40" : BORDER}`,
                  opacity: isActive ? 1 : 0.65,
                  transform: isActive ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isActive ? `0 8px 32px ${item.accent}20` : "none",
                }}
                aria-pressed={isActive}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: `${item.accent}18`, color: item.accent }}
                >
                  {item.icon}
                </div>
                <h3 className="font-black text-white text-lg mb-3">{item.title}</h3>
                <p
                  className="text-sm leading-relaxed transition-all duration-300"
                  style={{ color: isActive ? "rgba(255,255,255,0.70)" : "rgba(255,255,255,0.40)" }}
                >
                  {item.desc}
                </p>

                {/* Progress bar */}
                <div
                  className="mt-5 h-0.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  {isActive && (
                    <div
                      className="h-full rounded-full transition-none"
                      style={{
                        width: `${progress * 100}%`,
                        background: item.accent,
                      }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── EXIT INTENT POPUP ───────────────────────────────────────────────────────

function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("meok_exit_shown");
    if (alreadyShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setVisible(true);
        sessionStorage.setItem("meok_exit_shown", "1");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const dismiss = () => setVisible(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8 text-center"
        style={{ background: SURFACE, border: `1px solid rgba(201,168,76,0.25)` }}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Egg icon */}
        <div className="flex justify-center mb-5">
          <svg viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="68" aria-hidden="true">
            <defs>
              <radialGradient id="eggGradExit" cx="38%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#f5f0e8" />
                <stop offset="60%" stopColor="#e8dcc8" />
                <stop offset="100%" stopColor={GOLD} stopOpacity="0.4" />
              </radialGradient>
            </defs>
            <ellipse cx="40" cy="50" rx="32" ry="42" fill="url(#eggGradExit)" />
            <ellipse cx="40" cy="50" rx="32" ry="42" fill="none" stroke={GOLD} strokeWidth="1.5" strokeOpacity="0.6" />
          </svg>
        </div>

        {!subscribed ? (
          <>
            <h2 id="exit-popup-title" className="font-black text-white text-xl mb-3 leading-tight">
              Wait — before you go.
            </h2>
            <p className="text-white/55 text-sm mb-6 leading-relaxed">
              Join{" "}
              <span className="font-bold" style={{ color: GOLD }}>12,000+ people</span>{" "}
              getting early access to their sovereign AI. It&apos;s free.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-full text-sm text-white placeholder-white/25 focus:outline-none focus:ring-2"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${BORDER}`,
                  "--tw-ring-color": GOLD,
                } as React.CSSProperties}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
                style={{ background: GOLD, color: "#1a1a2e" }}
              >
                Claim my spot — free forever
              </button>
            </form>

            <button
              onClick={dismiss}
              className="mt-4 text-xs text-white/40 hover:text-white/50 transition-colors underline underline-offset-2"
            >
              No thanks, I don&apos;t want early access
            </button>
          </>
        ) : (
          <>
            <h2 id="exit-popup-title" className="font-black text-white text-xl mb-3">
              You&apos;re on the list.
            </h2>
            <p className="text-white/55 text-sm mb-6">
              We&apos;ll reach out within 24 hours. Your sovereign agent is ready.
            </p>
            <button
              onClick={dismiss}
              className="px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{ background: GOLD, color: "#1a1a2e" }}
            >
              Got it
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── HERO VARIANTS ───────────────────────────────────────────────────────────

// ─── ANIMATED PARTICLE MESH ─────────────────────────────────────────────────

function ParticleMesh() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(201,168,76,0.35);
          animation: floatParticle linear infinite;
        }
        @keyframes floatParticle {
          0% { transform: translateY(110vh) scale(0.6); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
        }
      `}</style>
      {Array.from({ length: 24 }).map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const duration = 12 + Math.random() * 18;
        const delay = Math.random() * -20;
        return (
          <div
            key={i}
            className="particle"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

// ─── TESTIMONIAL CAROUSEL ───────────────────────────────────────────────────

function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "I told it something personal on day one. Three weeks later, it brought it up gently when I needed it. No AI has ever done that.",
      name: "Sarah K.",
      role: "Early tester, UK",
      accent: GOLD,
    },
    {
      quote: "It felt like mine in a way ChatGPT never has. The memory layer means it actually knows what I'm working on without me repeating myself.",
      name: "Tom R.",
      role: "Beta tester, Australia",
      accent: "#A78BFA",
    },
    {
      quote: "My daughter uses the Guardian tier. I sleep better knowing there is a care floor on every response. No other AI product has that.",
      name: "Priya M.",
      role: "Family tier tester, Canada",
      accent: "#60a5fa",
    },
    {
      quote: "Switching between Claude and GPT-4o while keeping the same memory is a game-changer. MEOK is the AI OS I've been waiting for.",
      name: "James L.",
      role: "Sovereign Pro user, USA",
      accent: "#2d9b8a",
    },
    {
      quote: "The Work OS agents actually understand my codebase. Orion and Hourman have become part of my daily workflow.",
      name: "Elena V.",
      role: "Developer, Germany",
      accent: "#F59E0B",
    },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section aria-label="What early users say" className="py-24 px-6" style={{ background: "#1a1a2e" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Early Voices</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">What people say about sovereign AI.</h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">From our first cohort of testers — unedited, unfiltered.</p>
        </div>

        <div className="relative">
          <div
            className="rounded-2xl p-8 md:p-10 min-h-[220px] flex flex-col justify-between transition-all duration-500"
            style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${testimonials[active].accent}25` }}
          >
            <p className="text-white/80 text-lg md:text-xl leading-relaxed italic mb-6">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ background: `${testimonials[active].accent}20`, color: testimonials[active].accent }}
              >
                {testimonials[active].name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{testimonials[active].name}</p>
                <p className="text-xs" style={{ color: `${testimonials[active].accent}90` }}>{testimonials[active].role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: `1px solid ${BORDER}` }}
            >
              <ArrowRight className="w-4 h-4 text-white/60 rotate-180" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === active ? GOLD : "rgba(255,255,255,0.2)", transform: i === active ? "scale(1.3)" : "scale(1)" }}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: `1px solid ${BORDER}` }}
            >
              <ArrowRight className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PLATFORM STATS (animated counters) ─────────────────────────────────────

function PlatformStatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const mcp = useCountUp(337, 1500, started);
  const agents = useCountUp(50, 1200, started);
  const models = useCountUp(469, 1600, started);

  const items = [
    { stat: started ? `${mcp}` : "337", suffix: "+", label: "MCP Servers", sub: "open source on GitHub" },
    { stat: started ? `${agents}` : "50", suffix: "+", label: "AI Agents", sub: "9 archetypes" },
    { stat: started ? `${models}` : "469", suffix: "+", label: "AI Models", sub: "10+ providers" },
    { stat: "∞", suffix: "", label: "Memory", sub: "never forgets you" },
  ];

  return (
    <section ref={ref} aria-label="Platform stats" className="py-16 px-6" style={{ background: DEEP, borderTop: "1px solid rgba(201,168,76,0.08)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {items.map((item) => (
            <div key={item.label} className="rounded-xl py-5 px-4 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.12)" }}>
              <div className="text-3xl md:text-4xl font-black mb-1 tabular-nums" style={{ color: GOLD }}>
                {item.stat}<span className="text-2xl md:text-3xl">{item.suffix}</span>
              </div>
              <div className="text-sm text-white/60 font-semibold">{item.label}</div>
              <div className="text-xs text-white/40 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-5 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div><span className="text-white/70 text-sm"><span className="font-black text-white">342 million</span> people use AI for personal reflection each week</span></div>
          <div className="hidden sm:block text-white/15">|</div>
          <div><span className="text-white/70 text-sm"><span className="font-black text-white">37%</span> of Americans say AI is their closest confidant</span></div>
          <div className="hidden sm:block text-white/15">|</div>
          <div><span className="text-white/70 text-sm"><span className="font-black text-white">0</span> of them are remembered tomorrow</span></div>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  // A/B variant logic kept for cookie tracking but no longer gates SSR rendering.
  // Previously this returned an empty <section /> when variant was null on first render,
  // which meant crawlers and SSR saw zero content (no CTAs, no compliance grid).
  // Now the hero always renders; A/B branching can be added later as content variants.
  useEffect(() => {
    let v = getCookie("meok_hero_variant") as "A" | "B" | undefined;
    if (!v || (v !== "A" && v !== "B")) {
      v = Math.random() < 0.5 ? "A" : "B";
      setCookie("meok_hero_variant", v, 30);
    }
  }, []);

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d0c18 0%, #1a1a2e 55%, #0d0c18 100%)" }}
    >
      <ParticleMesh />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,168,76,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow — anchored regulatory deadline (2026-04-26) */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-wide uppercase"
          style={{ border: `1px solid ${GOLD}`, color: GOLD, background: "rgba(201,168,76,0.08)" }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
          EU AI Act Article 50 · 2 Aug 2026 cliff · we're ready
        </span>

        <h1
          className="font-black text-white tracking-tight leading-[1.02] mb-6 text-center"
          style={{ fontSize: "clamp(2.8rem, 7.5vw, 5.2rem)" }}
        >
          Sovereign AI <span style={{ color: GOLD }}>that signs its work.</span>
        </h1>

        <p className="max-w-2xl mx-auto mb-3 leading-relaxed font-semibold text-center" style={{ color: "rgba(245,240,232,0.92)", fontSize: "1.3rem" }}>
          294 servers in the official MCP Registry (verified June 2026) · thousands of monthly installs · EU AI Act + DORA + NIS2 + CRA + GDPR + UK AI Bill ready.
        </p>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1a1a2e] bg-[#c9a84c]/20 overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 555}`} alt="User" />
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold text-[#c9a84c]">
            <span className="text-white">294 registry-verified servers</span> &middot; Trusted by AI governance teams
          </p>
        </div>
        <p className="max-w-2xl mx-auto mb-9 leading-relaxed text-center" style={{ color: "rgba(245,240,232,0.65)", fontSize: "1.1rem" }}>
          Every Pro tool issues a HMAC-signed attestation auditors validate without an account. Free to start. MIT-licensed. Solo founder, London.
        </p>

        {/* Primary CTA pair */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
          <a
            href="https://buy.stripe.com/5kQ6oJ0xS3ce8sl7ew8k91j"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold rounded-full transition-all shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-105"
            style={{ background: GOLD, color: "#1a1a2e", padding: "1rem 2.25rem", fontSize: "1.125rem" }}
          >
            Subscribe £199/mo
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 font-semibold rounded-full transition-all hover:bg-white/5"
            style={{ border: "1px solid rgba(255,255,255,0.30)", color: "#ffffff", padding: "1rem 2rem", fontSize: "1.125rem" }}
          >
            Try Free
          </Link>
        </div>

        {/* Compliance products quick grid — for buyers from PyPI / MCP marketplaces */}
        <div className="w-full max-w-4xl mx-auto mt-2 mb-10">
          <div className="text-center mb-4">
            <span className="text-xs font-bold tracking-wider uppercase" style={{ color: "rgba(201,168,76,0.85)" }}>
              For compliance + AI governance teams
            </span>
          </div>
          <Link
            href="/scorecard"
            className="block rounded-xl p-4 mb-3 transition-all hover:scale-[1.01]"
            style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.06))", border: "1px solid rgba(201,168,76,0.45)" }}
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="text-[10px] font-black tracking-wider uppercase mb-1" style={{ color: GOLD }}>FREE · 90 seconds · no credit card</div>
                <div className="text-base sm:text-lg font-black text-white">EU AI Act Readiness Scorecard →</div>
                <div className="text-xs text-white/70">10 questions. Personalized score + signed compliance attestation.</div>
              </div>
              <div className="text-xs font-semibold rounded-full px-3 py-1" style={{ background: GOLD, color: "#1a1a2e" }}>Take the test →</div>
            </div>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link href="/audit-prep-bundle" className="group block rounded-xl p-4 transition-all hover:scale-[1.02]" style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.35)" }}>
              <div className="text-[10px] font-black tracking-wider uppercase mb-1" style={{ color: GOLD }}>Most popular</div>
              <div className="text-xl font-black text-white mb-1">£4,950</div>
              <div className="text-xs font-semibold text-white/80 leading-snug">Audit-Prep Bundle · 2-day engagement + 90-day support</div>
            </Link>
            <Link href="/article-50-kit" className="group block rounded-xl p-4 transition-all hover:scale-[1.02]" style={{ background: "rgba(220,38,38,0.10)", border: "1px solid rgba(220,38,38,0.35)" }}>
              <div className="text-[10px] font-black tracking-wider uppercase mb-1" style={{ color: "#dc2626" }}>2 Aug 2026 cliff</div>
              <div className="text-xl font-black text-white mb-1">£999</div>
              <div className="text-xs font-semibold text-white/80 leading-snug">EU AI Act Article 50 watermarking kit · 2 Aug confirmed · two-layer marking required</div>
            </Link>
            <Link href="/nis2-de-kit" className="group block rounded-xl p-4 transition-all hover:scale-[1.02]" style={{ background: "rgba(220,38,38,0.10)", border: "1px solid rgba(220,38,38,0.35)" }}>
              <div className="text-[10px] font-black tracking-wider uppercase mb-1" style={{ color: "#dc2626" }}>🇩🇪 Deadline passed</div>
              <div className="text-xl font-black text-white mb-1">£79 · £999</div>
              <div className="text-xs font-semibold text-white/80 leading-snug">Germany NIS2 BSI register · self-serve or 7-day done-for-you</div>
            </Link>
            <Link href="/nis2-nl" className="group block rounded-xl p-4 transition-all hover:scale-[1.02]" style={{ background: "rgba(220,38,38,0.10)", border: "1px solid rgba(220,38,38,0.35)" }}>
              <div className="text-[10px] font-black tracking-wider uppercase mb-1" style={{ color: "#dc2626" }}>🇳🇱 30 June 2026</div>
              <div className="text-xl font-black text-white mb-1">£799</div>
              <div className="text-xs font-semibold text-white/80 leading-snug">Netherlands NIS2 NCSC-NL registration · done-for-you in 7 days</div>
            </Link>
            <Link href="/consulting" className="group block rounded-xl p-4 transition-all hover:scale-[1.02]" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.20)" }}>
              <div className="text-[10px] font-black tracking-wider uppercase mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Founder-led</div>
              <div className="text-xl font-black text-white mb-1">£950/day</div>
              <div className="text-xs font-semibold text-white/80 leading-snug">Compliance consulting · book a free 30-min triage call</div>
            </Link>
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/bias-detection" className="group block rounded-xl p-4 transition-all hover:scale-[1.01]" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <div className="text-[10px] font-black tracking-wider uppercase mb-1" style={{ color: GOLD }}>EU AI Act Article 10 · NEW</div>
              <div className="text-base font-black text-white">AI Bias Detection · £299/mo</div>
              <div className="text-xs text-white/70">Continuous fairness monitoring + signed Article 10 evidence pack. 7-day free trial.</div>
            </Link>
            <Link href="/case-studies" className="group block rounded-xl p-4 transition-all hover:scale-[1.01]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <div className="text-[10px] font-black tracking-wider uppercase mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>In production · honest accounts</div>
              <div className="text-base font-black text-white">Case studies →</div>
              <div className="text-xs text-white/70">How real teams shipped EU AI Act / NIS2 / DORA evidence with MEOK MCPs + signed certs.</div>
            </Link>
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/vs-comp-ai" className="group block rounded-xl p-3 transition-all hover:scale-[1.01]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="text-[10px] font-black tracking-wider uppercase mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>vs Comp AI</div>
              <div className="text-sm font-black text-white">MEOK vs Comp AI →</div>
              <div className="text-[11px] text-white/60">SOC 2 + ISO vs EU AI Act + DORA + NIS2</div>
            </Link>
            <Link href="/vs-vanta" className="group block rounded-xl p-3 transition-all hover:scale-[1.01]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="text-[10px] font-black tracking-wider uppercase mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>vs Vanta</div>
              <div className="text-sm font-black text-white">MEOK vs Vanta →</div>
              <div className="text-[11px] text-white/60">Vanta $7.5-25K/yr · MEOK from £199/mo</div>
            </Link>
            <Link href="/vs-drata" className="group block rounded-xl p-3 transition-all hover:scale-[1.01]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="text-[10px] font-black tracking-wider uppercase mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>vs Drata</div>
              <div className="text-sm font-black text-white">MEOK vs Drata →</div>
              <div className="text-[11px] text-white/60">Drata $7.5-50K/yr · MEOK from £199/mo</div>
            </Link>
          </div>
        </div>

        {/* Tier links */}
        <div className="flex items-center gap-3 flex-wrap justify-center text-sm font-medium mb-8" style={{ color: "rgba(245,240,232,0.55)" }}>
          <span>Or self-serve:</span>
          <a href="https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-white transition-colors">Pro £199/mo</a>
          <span className="opacity-40">·</span>
          <a href="https://buy.stripe.com/fZu5kF0xS8wy9wpeGY8k91s" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-white transition-colors">Enterprise £1,499/mo</a>
          <span className="opacity-40">·</span>
          <Link href="/pricing" className="underline decoration-dotted hover:text-white transition-colors">All pricing →</Link>
        </div>

        {/* Live counters — authoritative numbers, not vanity */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 max-w-3xl">
          {[
            { n: "26", l: "PyPI packages" },
            { n: "10", l: "Apify Actors" },
            { n: "6", l: "Vercel sites" },
            { n: "31", l: "Owned .ai/.org domains" },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <div className="font-black tracking-tight" style={{ color: GOLD, fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>{n}</div>
              <div className="text-xs uppercase tracking-wider" style={{ color: "rgba(245,240,232,0.5)" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Quick install copy */}
        <div className="font-mono text-xs px-4 py-2.5 rounded-md border max-w-md w-full text-center" style={{ background: "rgba(0,0,0,0.35)", borderColor: "rgba(201,168,76,0.2)", color: "rgba(245,240,232,0.8)" }}>
          <span style={{ color: GOLD }}>$</span> pip install meok-omnibus-tracker-mcp
        </div>

        {/* Compatibility strip */}
        <div className="flex items-center gap-3 md:gap-5 flex-wrap justify-center text-xs font-semibold mt-8" style={{ color: "rgba(255,255,255,0.35)" }}>
          <span>Works with</span>
          {["Claude Code", "Cursor", "Cline", "Windsurf", "Apify", "Smithery"].map((name) => (
            <span key={name} className="tracking-wide">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOME PAGE CLIENT ─────────────────────────────────────────────────────────

export default function HomePageClient() {
  return (
    <>
      <ExitIntentPopup />

      <div className="min-h-screen bg-[#FAF9F6] text-[#111111]">
        {/* Launch countdown banner */}
        <CountdownBanner />

        <main>
          {/* ── 1. HERO ──────────────────────────────────────────── */}
          <HeroSection />

          {/* ── 1b. SOCIAL PROOF (animated counters) ─────────────── */}
          <SocialProofSection />

          {/* ── 1c. PLATFORM STATS (animated counters) ─────────────── */}
          <PlatformStatsSection />

          {/* ── 2. VALUE PROPOSITION (animated feature showcase) ──── */}
          <AnimatedFeatureShowcase />

          {/* ── 2a. LIVE CHAT DEMO ────────────────────────────────── */}
          <section
            aria-label="See MEOK in action"
            className="py-24 px-6"
            style={{ background: "#0e0d1a" }}
          >
            <div className="max-w-5xl mx-auto">
              <header className="text-center mb-14">
                <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
                  See What It Feels Like
                </p>
                <h2
                  className="font-black text-white leading-tight tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
                >
                  Your agent remembers{" "}
                  <span style={{ color: GOLD }}>every conversation</span>
                </h2>
                <p className="text-white/40 text-base max-w-xl mx-auto">
                  No cold starts. No repeating yourself. Watch how a MEOK agent picks up exactly where you left off.
                </p>
              </header>

              {/* Phone frame with animated chat */}
              <div className="max-w-sm mx-auto">
                <div
                  className="rounded-[2rem] p-1.5 mx-auto"
                  style={{ background: "linear-gradient(145deg, rgba(201,168,76,0.3), rgba(201,168,76,0.05))" }}
                >
                  <div
                    className="rounded-[1.6rem] overflow-hidden"
                    style={{ background: DEEP, border: `1px solid ${BORDER}` }}
                  >
                    {/* Phone status bar */}
                    <div className="flex items-center justify-between px-5 pt-3 pb-2">
                      <span className="text-[10px] text-white/30 font-medium">14:04</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[10px]" style={{ color: GOLD }}>Aria</span>
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
                      </div>
                      <span className="text-[10px] text-white/30">Bond 3 ✦</span>
                    </div>

                    {/* Chat messages with staggered animation */}
                    <div className="px-4 py-4 space-y-3 min-h-[320px]">
                      {/* Previous context hint */}
                      <div className="text-center">
                        <span className="text-[10px] px-3 py-1 rounded-full" style={{ color: "rgba(201,168,76,0.4)", background: "rgba(201,168,76,0.06)" }}>
                          Yesterday, 9:41 PM
                        </span>
                      </div>

                      {/* User message */}
                      <div className="flex justify-end" style={{ animation: "homeChat 0.5s ease 0.8s both" }}>
                        <div className="rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[75%]" style={{ background: GOLD, color: "#1a1a2e" }}>
                          <p className="text-sm font-medium">I&apos;m stressed about the presentation tomorrow</p>
                        </div>
                      </div>

                      {/* AI response — remembers context */}
                      <div className="flex justify-start" style={{ animation: "homeChat 0.5s ease 1.6s both" }}>
                        <div className="rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%]" style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.07)" }}>
                          <p className="text-sm text-white/80">I remember you mentioned this one last week — the Q2 review for the board. You were worried about the financial slide...</p>
                          <p className="text-sm text-white/80 mt-1.5">Want to practise the opening together?</p>
                        </div>
                      </div>

                      {/* Gap indicator */}
                      <div className="text-center" style={{ animation: "homeChat 0.5s ease 2.4s both" }}>
                        <span className="text-[10px] px-3 py-1 rounded-full" style={{ color: "rgba(201,168,76,0.4)", background: "rgba(201,168,76,0.06)" }}>
                          Today, 2:04 PM
                        </span>
                      </div>

                      {/* User returns next day */}
                      <div className="flex justify-end" style={{ animation: "homeChat 0.5s ease 3.2s both" }}>
                        <div className="rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[75%]" style={{ background: GOLD, color: "#1a1a2e" }}>
                          <p className="text-sm font-medium">It went really well!</p>
                        </div>
                      </div>

                      {/* AI remembers and celebrates */}
                      <div className="flex justify-start" style={{ animation: "homeChat 0.5s ease 4.0s both" }}>
                        <div className="rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%]" style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.07)" }}>
                          <p className="text-sm text-white/80">The Q2 board review! That matters. How did the financial slide land?</p>
                        </div>
                      </div>
                    </div>

                    {/* Input bar */}
                    <div className="px-4 pb-4">
                      <div
                        className="rounded-xl px-4 py-2.5 flex items-center gap-2"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        <span className="text-sm text-white/40 flex-1">Message Aria...</span>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: `${GOLD}30` }}>
                          <ArrowRight className="w-3.5 h-3.5" style={{ color: GOLD }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption below phone */}
                <p className="text-center text-sm mt-6" style={{ color: "rgba(245,240,232,0.35)" }}>
                  Same agent. Same memory. Across days, weeks, and years.
                </p>
              </div>
            </div>
          </section>

          <style>{`
            @keyframes homeChat {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {/* ── 2b. AI IS FAILING USERS — trust comparison ──────────── */}
          <section
            aria-label="Why current AI is failing"
            className="py-20 px-6"
            style={{ background: "#0a0918" }}
          >
            <div className="max-w-5xl mx-auto">
              <header className="text-center mb-12">
                <p className="text-red-400/80 text-sm font-bold tracking-widest uppercase mb-4">The Problem With Every Other AI</p>
                <h2 className="font-black text-white leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}>
                  84% of developers use AI.{" "}
                  <span className="text-red-400">Only 29% trust it.</span>
                </h2>
                <p className="text-white/45 text-base max-w-2xl mx-auto">
                  The world&apos;s biggest AI platforms are failing users in ways that keep getting worse. MEOK was built to solve every one.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    problem: "ChatGPT forgets you every conversation",
                    solution: "MEOK remembers everything, permanently",
                    icon: "🧠",
                  },
                  {
                    problem: "AI companies train on your private data",
                    solution: "Your data stays yours — always encrypted",
                    icon: "🔒",
                  },
                  {
                    problem: "Models get worse with every update",
                    solution: "Your bond deepens over months and years",
                    icon: "📈",
                  },
                  {
                    problem: "$66/month across fragmented subscriptions",
                    solution: "One sovereign AI OS — free forever tier",
                    icon: "💰",
                  },
                  {
                    problem: "AI is built for English-speaking, neurotypical users",
                    solution: "47 civilisational traditions. Accessibility first.",
                    icon: "🌍",
                  },
                  {
                    problem: "No AI admits when it's wrong",
                    solution: "Care over flattery — we tell you the truth",
                    icon: "💙",
                  },
                ].map((item) => (
                  <div
                    key={item.problem}
                    className="rounded-xl p-5 flex gap-4 items-start"
                    style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${BORDER}` }}
                  >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm text-red-400/70 line-through mb-1">{item.problem}</p>
                      <p className="text-sm font-semibold" style={{ color: GOLD }}>{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:scale-105 rounded-full px-6 py-3"
                  style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.25)", color: GOLD }}
                >
                  ✦ See the difference yourself — try the demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── 2c. GUARDIAN SHOWCASE ─────────────────────────────── */}
          <section aria-label="Guardian protection" className="py-20 px-6" style={{ background: "#080811" }}>
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-[#2d9b8a] text-sm font-bold tracking-widest uppercase mb-4">Protect Your People</p>
              <h2 className="font-black text-white text-3xl md:text-4xl tracking-tight mb-4">
                MEOK Guardian watches over the people you love.
              </h2>
              <p className="text-white/50 mb-12 max-w-2xl mx-auto">
                Scam detection, relationship safety, and social protection — built into every conversation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {[
                  { title: "Scam Stop", desc: "Catches phishing, romance scams, and financial fraud before they reach your family.", color: "#2d9b8a" },
                  { title: "Relationship Shield", desc: "Detects manipulation patterns, gaslighting, and coercive control in conversations.", color: "#A78BFA" },
                  { title: "Social Guardian", desc: "Helps neurodivergent users navigate social situations with confidence.", color: "#F59E0B" },
                ].map((card) => (
                  <div key={card.title} className="rounded-2xl p-6 text-left" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${card.color}` }}>
                    <h3 className="font-bold text-white text-base mb-2">{card.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-xs text-white/30 mb-8">
                <span>50% of neurodivergent people are scam victims</span>
                <span>96% think they can spot scams — they can&apos;t</span>
                <span>44% of victims get retargeted</span>
              </div>
              <Link href="/guardian" className="inline-flex items-center gap-2 text-[#2d9b8a] font-semibold hover:underline text-sm">
                Learn about Guardian <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* ── 3. HOW IT WORKS ──────────────────────────────────── */}
          <section
            aria-label="How MEOK works"
            className="py-24 px-6 text-center"
            style={{ background: "#1a1a2e" }}
          >
            <div className="max-w-4xl mx-auto">
              <header className="mb-16">
                <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>How it works</p>
                <h2 className="font-black text-white leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
                  Three steps to your sovereign AI
                </h2>
                <p className="text-white/50 text-lg">From signup to sovereign agent in under 2 minutes.</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {STEPS.map((item) => (
                  <div key={item.step} className="flex flex-col items-center text-center px-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg mb-5 shrink-0"
                      style={{ background: GOLD, color: "#1a1a2e" }}
                    >
                      {item.step}
                    </div>
                    <h3 className="font-black text-white text-lg mb-3">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/start"
                className="inline-flex items-center gap-2 font-bold rounded-full transition-all shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-105"
                style={{ background: GOLD, color: "#1a1a2e", padding: "0.875rem 2rem" }}
              >
                Start free <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* ── 4. PRICING ───────────────────────────────────────── */}
          <section
            aria-label="Pricing plans"
            className="py-24 px-6"
            id="pricing"
            style={{ background: DEEP }}
          >
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>Pricing</p>
              <h2 className="font-black text-white text-3xl md:text-4xl tracking-tight mb-4">
                Free forever. Pay when it earns it.
              </h2>
              <p className="text-white/50 mb-4">
                Sovereign architecture at every tier. Your data stays yours whether you pay or not.
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-sm mb-12" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <span className="text-white/40">ChatGPT Plus £16</span>
                <span className="text-white/20">·</span>
                <span className="text-white/40">Claude Pro £18</span>
                <span className="text-white/20">·</span>
                <span className="font-bold" style={{ color: GOLD }}>MEOK Sovereign £9</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {/* Explorer — Free */}
                <div className="border-2 border-[#c9a84c] rounded-2xl p-7 text-left relative shadow-[0_0_30px_rgba(201,168,76,0.12)]">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#c9a84c] text-[#1a1a2e] text-xs font-black whitespace-nowrap">
                    Free Forever
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2 mt-2">Explorer</div>
                  <div className="text-4xl font-black text-white mb-1">
                    £0<span className="text-base font-normal text-white/40">/forever</span>
                  </div>
                  <ul className="space-y-2.5 my-5">
                    {FREE_FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                        <Check className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/birth" className="block w-full py-3 rounded-full text-center font-bold text-sm bg-[#c9a84c] text-[#1a1a2e] hover:bg-[#d4b463] transition-colors">
                    Get started — no card needed
                  </Link>
                </div>

                {/* Sovereign */}
                <div className="border border-[#c9a84c]/20 rounded-2xl p-7 text-left bg-white/[0.03]">
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">Sovereign</div>
                  <div className="text-4xl font-black text-white mb-1">
                    £9<span className="text-base font-normal text-white/40">/mo</span>
                  </div>
                  <ul className="space-y-2.5 my-5">
                    {SOVEREIGN_FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                        <Check className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/checkout?plan=sovereign_monthly" className="block w-full py-3 rounded-full text-center font-bold text-sm bg-[#c9a84c] text-[#1a1a2e] hover:bg-[#d4b463] transition-colors">
                    Get Sovereign
                  </Link>
                  <p className="text-xs text-white/20 text-center mt-1.5">30-day money-back guarantee</p>
                </div>

                {/* Sovereign Pro */}
                <div className="border border-purple-500/20 rounded-2xl p-7 text-left bg-white/[0.03]">
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">Sovereign Pro</div>
                  <div className="text-4xl font-black text-white mb-1">
                    £19<span className="text-base font-normal text-white/40">/mo</span>
                  </div>
                  <ul className="space-y-2.5 my-5">
                    {PRO_FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                        <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/checkout?plan=sovereign_pro_monthly" className="block w-full py-3 rounded-full text-center font-bold text-sm text-white border-2 border-purple-500/40 hover:border-purple-500/70 hover:bg-purple-500/10 transition-all">
                    Go Pro
                  </Link>
                  <p className="text-xs text-white/20 text-center mt-1.5">30-day money-back guarantee</p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.6)" }}>
                  <Shield className="w-3.5 h-3.5" /> AES-256 encrypted
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.6)" }}>
                  <Check className="w-3.5 h-3.5" /> No credit card required
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.6)" }}>
                  <Globe2 className="w-3.5 h-3.5" /> GDPR compliant
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-xs text-white/30">
                <span>✓ 30-day money-back guarantee</span>
                <span>✓ Zero data selling at every tier</span>
                <span>✓ Maternal Covenant built in</span>
              </div>
            </div>
          </section>

          {/* ── 4b. HONESTY SECTION ──────────────────────────────── */}
          <section aria-label="What we don't do yet" className="py-16 px-6" style={{ background: "#1a1a2e" }}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/30 text-sm font-bold tracking-widest uppercase mb-4">Honest about the gaps</p>
              <h2 className="font-black text-white text-2xl mb-8">What you don&apos;t get with MEOK. Yet.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8">
                {[
                  { feature: "Image generation", status: "On the roadmap" },
                  { feature: "Code execution sandbox", status: "Security-sensitive — taking our time" },
                  { feature: "Live web browsing", status: "Using Perplexity Sonar meanwhile" },
                  { feature: "Mobile app", status: "Web-first launch, native apps follow" },
                  { feature: "Voice interaction", status: "Coming — prioritising memory quality first" },
                ].map((item) => (
                  <div key={item.feature} className="flex items-start gap-3 px-4 py-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <span className="text-white/50 text-sm font-medium shrink-0">{item.feature}</span>
                    <span className="text-white/40 text-sm ml-auto">{item.status}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs italic">
                We think transparency about limitations builds more trust than pretending they don&apos;t exist.
              </p>
            </div>
          </section>

          {/* ── 4b. FROM THE JOURNAL ────────────────────────────── */}
          <section
            aria-label="From the journal"
            className="py-20 px-6"
            style={{ background: DEEP }}
          >
            <div className="max-w-5xl mx-auto">
              <header className="text-center mb-12">
                <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
                  From the Journal
                </p>
                <h2
                  className="font-black text-white leading-tight tracking-tight"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
                >
                  Ideas we&apos;re thinking about
                </h2>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    title: "What Is Sovereign AI?",
                    desc: "Why your AI should answer to you — not a corporation. The case for personal data sovereignty.",
                    href: "/blog/what-is-sovereign-ai",
                    tag: "Concept",
                  },
                  {
                    title: "The Maternal Covenant Explained",
                    desc: "How MEOK's ethical framework ensures your agent serves your wellbeing above all else.",
                    href: "/blog/maternal-covenant-explained",
                    tag: "Ethics",
                  },
                  {
                    title: "Guardian: AI-Powered Safety",
                    desc: "How MEOK's Guardian layer protects families from scams, predators, and online threats.",
                    href: "/blog/guardian-family-safety",
                    tag: "Safety",
                  },
                ].map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group rounded-xl p-6 transition-all hover:scale-[1.02]"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                      style={{ color: GOLD, background: `${GOLD}15`, border: `1px solid ${GOLD}25` }}
                    >
                      {post.tag}
                    </span>
                    <h3 className="font-bold text-white mt-3 mb-2 group-hover:text-[#c9a84c] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">{post.desc}</p>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: GOLD }}
                >
                  Read all 350+ articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── TESTIMONIALS CAROUSEL ────────────────────────────── */}
          <TestimonialCarousel />

          {/* ── 5. FINAL CTA ─────────────────────────────────────── */}
          <section
            aria-label="Final call to action"
            className="relative overflow-hidden py-28 px-6 text-center"
            style={{ background: "linear-gradient(160deg, #0d0c18 0%, #1a1a2e 60%, #0d0c18 100%)" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
            />

            <div className="relative max-w-2xl mx-auto">
              <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-4 italic">
                We built MEOK because the AI economy needs an infrastructure layer that puts users first.
                Your data. Your memory. Your agents. That&apos;s the future we&apos;re building.
              </blockquote>
              <p className="text-sm font-semibold mb-12" style={{ color: "rgba(201,168,76,0.8)" }}>
                — Nicholas Templeman, Founder
              </p>

              <h2
                className="font-black text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
              >
                Ready to go sovereign?
                <br />
                <span style={{ color: GOLD }}>Start free today.</span>
              </h2>

              <p className="mb-12 leading-relaxed" style={{ color: "rgba(245,240,232,0.50)", fontSize: "1.1rem" }}>
                Deploy your first agent in under 2 minutes. One encrypted memory vault. Every LLM. Zero data selling.
              </p>

              <Link
                href="/start"
                className="inline-flex items-center gap-2 font-bold rounded-full transition-all shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-105"
                style={{ background: GOLD, color: "#1a1a2e", padding: "1.125rem 2.75rem", fontSize: "1.25rem" }}
              >
                Start free
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <p className="mt-6 text-sm" style={{ color: "rgba(245,240,232,0.28)" }}>
                Free forever · No credit card · Sovereign by design
              </p>

              <FreeApiKeyForm />
            </div>
          </section>
        </main>

        {/* Footer moved to root layout as <GlobalFooter /> */}
      </div>
    </>
  );
}

function FreeApiKeyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState("");

  async function issueKey(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const r = await fetch("https://www.proofof.ai/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const j = await r.json();
      if (j.ok) {
        setResult(j.api_key);
        setStatus("done");
      } else {
        setResult(j.error || "Something went wrong — try again.");
        setStatus("error");
      }
    } catch {
      setResult("Network error — try again.");
      setStatus("error");
    }
  }

  return (
    <div
      className="mx-auto mt-12 max-w-md rounded-2xl p-6 text-left"
      style={{ border: `1px solid ${GOLD}59`, background: `${GOLD}0f` }}
    >
      <strong className="block text-white mb-1">Free API key — 200 calls/day on every MEOK MCP</strong>
      <span className="text-sm" style={{ color: "rgba(245,240,232,0.50)" }}>
        No card. Works across all 300+ compliance servers.
      </span>
      {status === "done" ? (
        <p className="mt-3 text-sm text-white break-all">
          ✅ Your key: <code className="px-1 rounded" style={{ background: "rgba(0,0,0,0.4)", color: GOLD }}>{result}</code>
          <br />
          Set <code style={{ color: GOLD }}>MEOK_API_KEY</code> in your MCP client env. Copy it now — it is not emailed.
        </p>
      ) : (
        <form onSubmit={issueKey} className="mt-3 flex flex-wrap gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 min-w-[200px] rounded-lg px-3 py-2.5 text-sm text-white"
            style={{ border: `1px solid ${GOLD}66`, background: "rgba(10,9,20,0.6)" }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg px-4 py-2.5 text-sm font-bold transition-opacity disabled:opacity-60"
            style={{ background: GOLD, color: "#1a1a2e" }}
          >
            {status === "loading" ? "Issuing…" : "Get free key"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-2 text-sm" style={{ color: "#f87171" }}>⚠️ {result}</p>
      )}
    </div>
  );
}
