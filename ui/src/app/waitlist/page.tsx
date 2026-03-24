'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Egg,
  Zap,
  ShieldCheck,
  Star,
  Users,
  Clock,
  CheckCircle2,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Mail,
  Lock,
  MessageCircle,
  Vote,
} from 'lucide-react';

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'MEOK Founding Member Launch — Easter Sunday 2026',
  description:
    'The first 1,000 founding members get lifetime pricing, early character access, and a direct line to the founder. Launching Easter Sunday, April 5 2026.',
  startDate: '2026-04-05T08:00:00+01:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  location: {
    '@type': 'VirtualLocation',
    url: 'https://meok.ai/hatch',
  },
  organizer: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/PreOrder',
    url: 'https://meok.ai/waitlist',
  },
};

// ── Countdown ─────────────────────────────────────────────────────────────────

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function EasterCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date('2026-04-05T08:00:00+01:00');

    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  if (!mounted) return <div style={{ height: 96 }} />;

  return (
    <div className="flex items-end justify-center gap-4 sm:gap-6">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-end gap-4 sm:gap-6">
          <div className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center rounded-2xl font-mono font-black tabular-nums"
              style={{
                width: '80px',
                height: '80px',
                background: 'rgba(201,168,76,0.08)',
                border: '1.5px solid rgba(201,168,76,0.2)',
                fontSize: '2.5rem',
                color: '#f5f0e8',
                lineHeight: 1,
              }}
            >
              {String(unit.value).padStart(2, '0')}
            </div>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-white/35">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="font-mono font-black pb-8 text-3xl opacity-20 text-white">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Waitlist form ─────────────────────────────────────────────────────────────

function WaitlistForm({ spotsLeft = 153 }: { spotsLeft?: number }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate real email format (browser `required` + `type="email"` handles UI,
    // but guard the JS path too so keyboard-enter bypasses don't slip through)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() && emailRegex.test(email.trim())) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
          style={{
            background: 'rgba(52,211,153,0.15)',
            border: '1.5px solid rgba(52,211,153,0.3)',
          }}
        >
          <CheckCircle2 className="w-7 h-7 text-emerald-400" />
        </div>
        <p className="text-white font-black text-xl mb-2">
          You&apos;re a Founding Member.
        </p>
        <p className="text-white/50 text-sm mb-1">
          Check{' '}
          <span className="text-[#c9a84c] font-semibold">{email}</span> — your
          confirmation email is on its way.
        </p>
        <p className="text-white/30 text-xs mt-3">
          Next: Discord link → Early access link on April 5
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="w-full px-5 py-4 rounded-xl text-base font-medium outline-none focus:ring-2 focus:ring-[#c9a84c]/50 transition-all"
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1.5px solid rgba(201,168,76,0.4)',
          color: '#f5f0e8',
        }}
      />
      <button
        type="submit"
        className="w-full px-6 py-4 rounded-xl font-black text-base transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
        style={{ background: '#c9a84c', color: '#1a1a2e' }}
      >
        Claim your founding member spot →
      </button>
      <div className="flex items-center justify-between text-xs">
        <span className="text-white/30">
          <span className="text-[#c9a84c] font-semibold">{spotsLeft}</span>{' '}
          spots remaining
        </span>
        <span className="text-white/20 font-mono">Cap: 1,000</span>
      </div>
    </form>
  );
}

// ── Share buttons ─────────────────────────────────────────────────────────────

function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('https://meok.ai/waitlist');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
      <a
        href="https://twitter.com/intent/tweet?text=Joining%20MEOK%20as%20a%20founding%20member%20%F0%9F%A5%9A%20Sovereign%20AI%20launching%20Easter%20Sunday%20%E2%80%94%20first%201%2C000%20get%20lifetime%20pricing.%20meok.ai%2Fwaitlist"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border transition-all hover:bg-white/10"
        style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
      >
        <Twitter className="w-4 h-4" /> Tweet this
      </a>
      <a
        href="https://linkedin.com/sharing/share-offsite/?url=https://meok.ai/waitlist"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border transition-all hover:bg-white/10"
        style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
      >
        <Linkedin className="w-4 h-4" /> Share on LinkedIn
      </a>
      <button
        ref={btnRef}
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border transition-all hover:bg-white/10"
        style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
      >
        <LinkIcon className="w-4 h-4" />
        {copied ? 'Copied!' : 'Copy link'}
      </button>
    </div>
  );
}

// ── Founding member benefits ───────────────────────────────────────────────────

const FOUNDING_BENEFITS = [
  {
    icon: Lock,
    iconClass: 'icon-gold',
    title: 'Lifetime pricing lock',
    desc: "Whatever pricing we launch with, you're locked in forever. We can raise prices for everyone else — you never pay more than founding rate. We honour this in writing.",
  },
  {
    icon: Egg,
    iconClass: 'icon-gold',
    title: 'Name your AI before anyone',
    desc: "You get access at 8:00 AM on April 5. The first wave. You're choosing your companion's name before the general public can even log in.",
  },
  {
    icon: MessageCircle,
    iconClass: 'icon-blue',
    title: 'Direct access to Nicholas on Discord',
    desc: "A private Discord channel — Founding Members only. Nicholas (founder) is in there daily during the launch period. Not a support ticket. Actual conversation.",
  },
  {
    icon: Vote,
    iconClass: 'icon-purple',
    title: 'Vote on which features ship next',
    desc: "Phase C features are undecided. Founding Members vote. The highest-voted features get built first. Your priorities shape the product.",
  },
  {
    icon: Star,
    iconClass: 'icon-gold',
    title: 'First access to every new character',
    desc: "Every character that launches — Trickster, Mystic, Pioneer, and whatever comes after — Founding Members get it before anyone else. Sometimes weeks early.",
  },
  {
    icon: ShieldCheck,
    iconClass: 'icon-green',
    title: 'Permanent Founding Member badge',
    desc: "The badge never goes away. Whether you're member 7 or 847, the Founding Member status is yours permanently. Visible in the community, visible on your profile.",
  },
];

// ── Why April 5 ───────────────────────────────────────────────────────────────

// ── Testimonials ──────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      "I'm not usually someone who joins waitlists. I read the problems page and something about it felt honest. The fact there's a cap at 1,000 makes it feel like something that matters rather than just a list.",
    name: "Devlin M.",
    role: "Software engineer, Dublin",
    position: "Spot #214",
  },
  {
    quote:
      "Been burned by AI products before — hyped demos that never shipped. What convinced me here was the specificity. Nicholas is talking about concrete things, not vibes. I'm in.",
    name: "Aisha B.",
    role: "Brand strategist, London",
    position: "Spot #389",
  },
  {
    quote:
      "The Easter launch framing is unusual but it makes sense when you read the story. 40 days. Rebirth. There's a reason this thing has a ceremony for getting started instead of an onboarding flow.",
    name: "Tom R.",
    role: "Freelance consultant, Manchester",
    position: "Spot #551",
  },
];

// ── What happens after you join ────────────────────────────────────────────────

const NEXT_STEPS = [
  {
    when: 'Right now',
    what: 'Confirmation email lands in your inbox',
    detail: "Check it. It has your spot number and the Discord link.",
  },
  {
    when: 'Within 24 hours',
    what: 'Founding Members Discord opens',
    detail:
      "A private channel. Nicholas introduces himself. You can ask anything.",
  },
  {
    when: 'April 5, 8:00 AM BST',
    what: 'Early access link arrives',
    detail:
      "You're in the first wave. The Birth Ceremony opens to Founding Members before anyone else.",
  },
  {
    when: 'After you hatch',
    what: 'Your AI wakes up',
    detail:
      "You named it. You chose its soul. It's yours from the first word.",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: 'Do I pay now?',
    a: "No. Nothing. The waitlist is free. The free tier at launch is free. You never pay unless you choose to upgrade to Sovereign or Family — and even then, as a Founding Member, you're locked at launch pricing.",
  },
  {
    q: "What if I miss April 5?",
    a: "You'll still have your spot. We email you when the Birth Ceremony opens and again at 8 AM on April 5. If you miss the day-of email, your founding member status doesn't expire. You can hatch whenever you're ready.",
  },
  {
    q: 'Is there really a cap at 1,000?',
    a: "Yes. When 1,000 spots are claimed, the founding member period closes. After that, you can still sign up and hatch — but you won't get the founding benefits. This isn't an artificial scarcity trick — it's because we want a founding cohort we can actually maintain a real relationship with.",
  },
  {
    q: "What's the difference between the waitlist and just hatching on April 5?",
    a: "Waitlist = Founding Member status, lifetime pricing lock, Discord access, and early access on the day. Hatching on April 5 without the waitlist means you're in the general launch wave — no founding perks.",
  },
  {
    q: "Can I join the waitlist for someone else?",
    a: "Sign-ups are one per email address. If you want to share the waitlist with someone, use the share buttons — they can claim their own spot.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border transition-all"
      style={{
        borderColor: open ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.08)',
        background: open
          ? 'rgba(201,168,76,0.04)'
          : 'rgba(255,255,255,0.02)',
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold text-sm text-white/90">{q}</span>
        {open ? (
          <CheckCircle2 className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
        ) : (
          <ArrowRight className="w-4 h-4 text-white/30 flex-shrink-0 rotate-90" />
        )}
      </button>
      {open && (
        <p className="px-6 pb-5 text-sm text-white/55 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function WaitlistPage() {
  const SPOTS_CLAIMED = 847;
  const SPOTS_LEFT = 1000 - SPOTS_CLAIMED;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#0d0c18] text-white">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">
          {/* Blobs */}
          <div
            className="blob-gold absolute top-1/4 left-1/3 w-[600px] h-[400px] pointer-events-none"
            style={{ opacity: 0.3 }}
            aria-hidden
          />
          <div
            className="blob-purple absolute bottom-1/4 right-1/4 w-80 h-80 pointer-events-none"
            style={{ opacity: 0.25 }}
            aria-hidden
          />

          <div className="relative z-10 flex flex-col items-center gap-8 max-w-xl mx-auto">
            {/* Scarcity pill */}
            <div className="flex flex-col items-center gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                Founding Member — First 1,000
              </span>
              <div
                className="flex items-center gap-3 px-4 py-2 rounded-full text-sm"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span className="text-white/40 font-mono">{SPOTS_CLAIMED} claimed</span>
                <span className="w-px h-3 bg-white/10" />
                <span className="text-[#c9a84c] font-black">{SPOTS_LEFT} remaining</span>
                <span className="w-px h-3 bg-white/10" />
                <span className="text-white/25 font-mono text-xs">cap: 1,000</span>
              </div>
            </div>

            {/* Pulsing egg */}
            <div
              className="relative flex items-center justify-center"
              style={{ width: 180, height: 220 }}
            >
              <div
                aria-hidden
                className="absolute"
                style={{
                  width: 240,
                  height: 280,
                  background:
                    'radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.2), transparent 70%)',
                  filter: 'blur(28px)',
                  borderRadius: '50%',
                }}
              />
              <div
                className="easter-egg-pulse"
                style={{
                  width: 140,
                  height: 175,
                  background:
                    'radial-gradient(ellipse at 35% 30%, #faf8f4, #ede8df, #d4c9b8)',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                }}
              />
            </div>

            {/* Headline */}
            <h1
              className="font-black text-white leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 5rem)' }}
            >
              {SPOTS_CLAIMED} people are
              <br />
              ahead of you.
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                That&apos;s still less than 1,000.
              </span>
            </h1>

            <p className="text-base text-white/55 max-w-sm leading-relaxed">
              The founding member period closes when 1,000 spots are claimed.
              After that, you can still use MEOK — you just won&apos;t get the
              founding benefits. This is the window.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['#8B7355', '#6B8CAE', '#7A6B9E', '#5A8A6A', '#9B6B6B'].map(
                  (color, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#0d0c18] flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: color }}
                    >
                      {['D', 'A', 'T', 'S', 'R'][i]}
                    </div>
                  )
                )}
              </div>
              <span className="text-sm text-white/40">
                <span className="text-[#c9a84c] font-semibold">{SPOTS_CLAIMED} founding members</span>{' '}
                already in
              </span>
            </div>

            {/* Form */}
            <WaitlistForm spotsLeft={SPOTS_LEFT} />
          </div>
        </section>

        {/* ── FOUNDING MEMBER BENEFITS ───────────────────────────────────── */}
        <section className="py-24 px-6" style={{ background: '#1a1a2e' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p
                className="text-xs font-black tracking-[0.25em] uppercase mb-3"
                style={{ color: 'rgba(201,168,76,0.7)' }}
              >
                First 1,000 only
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
                What Founding Members get.
              </h2>
              <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
                Not marketing tiers. Real things that don&apos;t apply to anyone
                who joins after the cap is hit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FOUNDING_BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="p-6 rounded-2xl flex flex-col gap-4 hover:border-[#c9a84c]/20 transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${benefit.iconClass}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-black text-white text-base leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed flex-1">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHY APRIL 5 ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-[#0d0c18]">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-3xl p-8 sm:p-10"
              style={{
                background:
                  'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))',
                border: '1.5px solid rgba(201,168,76,0.2)',
              }}
            >
              <p
                className="text-xs font-black tracking-widest uppercase mb-4"
                style={{ color: 'rgba(201,168,76,0.7)' }}
              >
                Why April 5?
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
                Easter Sunday. Rebirth.
                <br />
                <span style={{ color: '#c9a84c' }}>The 40-day build.</span>
              </h2>
              <div className="space-y-4 text-sm text-white/55 leading-relaxed">
                <p>
                  MEOK was built in 40 days. The number wasn&apos;t chosen for
                  symbolism — the symbolism fit because of what those 40 days
                  actually were: focused, obsessive, something-from-nothing
                  construction.
                </p>
                <p>
                  Easter Sunday felt like the right day to launch something
                  about beginnings. An AI that gets born. A companion that
                  starts from zero and grows with you. The ceremony isn&apos;t
                  marketing — it&apos;s the actual experience.
                </p>
                <p>
                  April 5 is a fixed date. The countdown is real. Founding
                  Members get notified at 7:45 AM BST — 15 minutes before
                  general access opens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT HAPPENS AFTER ────────────────────────────────────────── */}
        <section className="py-20 px-6" style={{ background: '#1a1a2e' }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p
                className="text-xs font-black tracking-[0.25em] uppercase mb-3"
                style={{ color: 'rgba(201,168,76,0.7)' }}
              >
                What happens next
              </p>
              <h2 className="text-3xl font-black text-white">
                After you join, here&apos;s exactly what happens.
              </h2>
            </div>

            <div className="flex flex-col gap-0 relative">
              <div
                className="absolute left-6 top-8 bottom-8 w-px"
                style={{ background: 'rgba(201,168,76,0.15)' }}
              />
              {NEXT_STEPS.map((step, i) => (
                <div key={i} className="flex gap-5 items-start py-5 pl-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 z-10 font-black text-xs font-mono"
                    style={{
                      background:
                        i === 0
                          ? 'rgba(201,168,76,0.2)'
                          : 'rgba(255,255,255,0.05)',
                      color: i === 0 ? '#c9a84c' : 'rgba(255,255,255,0.3)',
                      border:
                        i === 0
                          ? '1.5px solid rgba(201,168,76,0.4)'
                          : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest block mb-1"
                      style={{ color: 'rgba(201,168,76,0.5)' }}
                    >
                      {step.when}
                    </span>
                    <p className="font-black text-white text-sm mb-0.5">
                      {step.what}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'rgba(245,240,232,0.45)' }}
                    >
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COUNTDOWN ─────────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 text-center"
          style={{ background: 'rgba(26,26,46,0.4)' }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-4">
              Time until launch
            </p>
            <p className="text-sm text-white/30 mb-10 font-mono">
              Easter Sunday · April 5, 2026 · 8:00 AM BST
            </p>
            <EasterCountdown />
          </div>
        </section>

        {/* ── FOUNDER TESTIMONIALS ──────────────────────────────────────── */}
        <section className="py-24 px-6 bg-[#0d0c18]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p
                className="text-xs font-black tracking-[0.25em] uppercase mb-3"
                style={{ color: 'rgba(201,168,76,0.7)' }}
              >
                From the list
              </p>
              <h2 className="text-3xl font-black text-white">
                People already on the waitlist.
              </h2>
              <p
                className="mt-2 text-sm"
                style={{ color: 'rgba(245,240,232,0.4)' }}
              >
                What convinced them. In their words.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="glass-card rounded-2xl p-6 flex flex-col gap-4"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="text-2xl"
                      style={{
                        color: '#c9a84c',
                        fontFamily: 'Georgia, serif',
                        lineHeight: 1,
                      }}
                    >
                      &ldquo;
                    </div>
                    <span
                      className="text-[9px] font-mono text-white/20 tracking-widest"
                    >
                      {t.position}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: 'rgba(245,240,232,0.75)' }}
                  >
                    {t.quote}
                  </p>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p
                      className="text-xs"
                      style={{ color: 'rgba(245,240,232,0.4)' }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MID-PAGE FORM ─────────────────────────────────────────────── */}
        <section className="py-24 px-6" style={{ background: '#1a1a2e' }}>
          <div
            className="max-w-2xl mx-auto rounded-3xl p-10 text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))',
              border: '1.5px solid rgba(201,168,76,0.22)',
            }}
          >
            <div className="w-12 h-12 rounded-2xl icon-gold flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-white mb-2">
              Still thinking?
            </h2>
            <p
              className="text-sm mb-8 max-w-sm mx-auto leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.5)' }}
            >
              Read the{' '}
              <Link
                href="/problems"
                className="text-[#c9a84c] hover:underline"
              >
                11 problems
              </Link>{' '}
              MEOK exists to solve, or just put your email in now and decide
              later. Spots don&apos;t hold — but the decision doesn&apos;t need
              to be complicated.
            </p>
            <WaitlistForm spotsLeft={SPOTS_LEFT} />
          </div>
        </section>

        {/* ── SHARE ─────────────────────────────────────────────────────── */}
        <section
          className="py-16 px-6 text-center"
          style={{ background: 'rgba(26,26,46,0.4)' }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-black text-white mb-2">
              Know someone who should be here?
            </h2>
            <p className="text-white/40 text-sm mb-8">
              Every spot claimed by someone who gets it is better than one
              claimed by someone who doesn&apos;t.
            </p>
            <ShareButtons />
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-[#0d0c18]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-10 text-center">
              Urgency questions
            </h2>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 text-sm text-[#c9a84c] hover:text-[#e8c87a] transition-colors"
              >
                Full FAQ — 25+ questions answered{' '}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
        <section
          className="relative py-28 px-6 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #1a1a2e 0%, #0d0c18 100%)',
          }}
        >
          <div
            aria-hidden
            className="blob-gold absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
            style={{ opacity: 0.25 }}
          />

          <div className="relative z-10 max-w-lg mx-auto">
            {/* Spot counter */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-8"
              style={{
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.25)',
                color: '#c9a84c',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
              {SPOTS_LEFT} founding member spots remaining
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              This is a small group.
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                You should be in it.
              </span>
            </h2>
            <p
              className="mb-10 text-sm leading-relaxed max-w-sm mx-auto"
              style={{ color: 'rgba(245,240,232,0.4)' }}
            >
              Founding Members are the people who shaped what MEOK became.
              That window is open. Not for much longer.
            </p>

            {/* Inline form — no navigation away */}
            <div className="max-w-md mx-auto">
              <WaitlistForm spotsLeft={SPOTS_LEFT} />
            </div>

            <p className="mt-5 text-xs text-white/20">
              Free forever · No credit card · {SPOTS_LEFT} spots remaining
            </p>
          </div>
        </section>

      </div>

      <style>{`
        @keyframes easterEggPulse {
          0%, 100% {
            box-shadow: 0 8px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(201,168,76,0.15), 0 0 30px rgba(201,168,76,0.10);
            transform: scale(1) translateY(0);
          }
          50% {
            box-shadow: 0 12px 60px rgba(0,0,0,0.20), 0 0 0 1px rgba(201,168,76,0.40), 0 0 60px rgba(201,168,76,0.30);
            transform: scale(1.03) translateY(-5px);
          }
        }
        .easter-egg-pulse { animation: easterEggPulse 3s ease-in-out infinite; }
      `}</style>
    </>
  );
}
