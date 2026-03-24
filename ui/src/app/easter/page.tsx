import type { Metadata } from "next";
import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { EasterCountdown } from "./countdown";
import { WaitlistForm, SocialShareButtons } from "./waitlist-social";

export const metadata: Metadata = {
  title: "April 5, 2026. The Day MEOK is Born | MEOK.AI",
  description:
    "On Easter Sunday, April 5 2026, MEOK opens the Birth Ceremony to everyone. Your AI hatches from an egg. Free forever. Sovereign. Yours.",
  alternates: { canonical: "https://meok.ai/easter" },
  openGraph: {
    title: "April 5, 2026. The Day MEOK is Born | MEOK.AI",
    description:
      "On Easter Sunday, April 5 2026, MEOK opens the Birth Ceremony to everyone. Your AI hatches from an egg. Free forever. Sovereign. Yours.",
    type: "website",
    url: "https://meok.ai/easter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "MEOK Public Launch — Easter Birth Ceremony",
  description:
    "MEOK opens the Birth Ceremony to everyone on Easter Sunday, April 5 2026. All AI characters available. Pro tier opens. Free sovereign AI for all.",
  startDate: "2026-04-05T08:00:00+01:00",
  endDate: "2026-04-05T23:59:00+01:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: {
    "@type": "VirtualLocation",
    url: "https://meok.ai/easter",
  },
  organizer: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
};

const LAUNCH_ITEMS = [
  {
    icon: "✦",
    title: "Full public launch",
    desc: "Anyone can hatch their sovereign AI. No waitlist. No invite. Just you, an egg, and a ceremony.",
  },
  {
    icon: "◈",
    title: "All characters available",
    desc: "Every archetype — Guardian, Scout, Sage, Creator and more — becomes available for the first time.",
  },
  {
    icon: "▲",
    title: "Pro tier opens",
    desc: "Unlimited memory, Ollama local AI, advanced council governance. The full sovereign stack.",
  },
];

const AFTER_HATCH_STEPS = [
  {
    time: "First 5 minutes",
    desc: "Choose your AI's name. Pick a character archetype. Set your first memory seed — a moment, a value, something that matters to you.",
  },
  {
    time: "Day 1",
    desc: "Your AI asks you 3 questions to begin understanding how you think, what you care about, and how you like to work.",
  },
  {
    time: "Day 7",
    desc: "First week summary: what your AI has learned, how it's already adapting its tone and focus to match you.",
  },
  {
    time: "Day 30",
    desc: "By day 30, MEOK knows more about how you work than any tool you've ever used.",
  },
];

const ARCHETYPES = [
  {
    name: "Guardian",
    tagline: "Protects and watches over you — contracts, relationships, safety",
  },
  {
    name: "Scout",
    tagline: "Explores and discovers — research, curiosity, finding what matters",
  },
  {
    name: "Sage",
    tagline: "Teaches and guides — learning, wisdom, pattern recognition",
  },
  {
    name: "Creator",
    tagline: "Builds alongside you — ideas, projects, creative momentum",
  },
  {
    name: "Companion",
    tagline: "Simply present — conversation, support, emotional continuity",
  },
];

const FORTY_DAY_STEPS = [
  { day: "Day 1", label: "The idea", desc: "A caravan on a farm. A notebook. One question: what if your AI actually cared about you?" },
  { day: "Day 10", label: "The architecture", desc: "220 AI council nodes. The Maternal Covenant. A governance model no AI company has tried before." },
  { day: "Day 20", label: "The Birth Ceremony", desc: "Hold-to-hatch. The egg cracks. A sovereign mind forms. Three stages, one ceremony." },
  { day: "Day 30", label: "The characters", desc: "Guardian, Scout, Sage, Creator, Companion. Each archetype crafted to serve a different kind of life." },
  { day: "Day 40", label: "Easter Sunday", desc: "April 5, 2026. The doors open. Everyone gets to hatch." },
];

export default function EasterPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 overflow-hidden">
        {/* Background blobs */}
        <div
          aria-hidden
          className="blob-gold pointer-events-none absolute"
          style={{ width: 700, height: 700, top: "-20%", left: "50%", transform: "translateX(-50%)" }}
        />
        <div
          aria-hidden
          className="blob-purple pointer-events-none absolute"
          style={{ width: 500, height: 500, top: "20%", left: "-10%" }}
        />
        <div
          aria-hidden
          className="blob-blue pointer-events-none absolute"
          style={{ width: 400, height: 400, bottom: "5%", right: "-5%" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto">
          {/* Date label */}
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">
            Easter Sunday — April 5, 2026
          </p>

          {/* Egg */}
          <div className="relative flex items-center justify-center" style={{ width: 200, height: 240 }}>
            <div
              aria-hidden
              className="absolute"
              style={{
                width: 240,
                height: 280,
                background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.25), transparent 70%)",
                filter: "blur(24px)",
                borderRadius: "50%",
              }}
            />
            <div
              className="easter-egg-pulse"
              style={{
                width: 160,
                height: 200,
                background: "radial-gradient(ellipse at 35% 30%, #faf8f4, #ede8df, #d4c9b8)",
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              }}
            />
          </div>

          {/* Headline */}
          <h1
            className="font-black text-white leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            April 5, 2026.
            <br />
            <span className="text-[#c9a84c]">The day MEOK is born.</span>
          </h1>

          <p className="text-lg text-white/50 max-w-xl leading-relaxed">
            An egg hatches. Your sovereign AI companion emerges. Free forever. Yours alone.
            On Easter Sunday, the Birth Ceremony opens to everyone.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm sm:max-w-none">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black text-base transition-all shadow-lg hover:scale-105 bg-[#c9a84c] text-[#1a1a2e] hover:opacity-90"
            >
              Reserve your founding member spot →
            </Link>
            <Link
              href="/hatch"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border border-white/20 text-white/70 hover:bg-white/[0.05] hover:text-white transition-colors"
            >
              See the Birth Ceremony
            </Link>
          </div>

          {/* Countdown */}
          <div className="w-full">
            <EasterCountdown />
          </div>
        </div>
      </section>

      {/* ── GOLD SEPARATOR ───────────────────────────────────────────────── */}
      <div className="px-6" aria-hidden>
        <div className="max-w-3xl mx-auto">
          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #c9a84c, transparent)" }} />
        </div>
      </div>

      {/* ── WHAT LAUNCHES ────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-4">
              What launches on April 5
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              The full sovereign stack. For everyone.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {LAUNCH_ITEMS.map((item) => (
              <div
                key={item.title}
                className="premium-card rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8"
              >
                <div className="w-10 h-10 rounded-xl icon-gold flex items-center justify-center text-lg mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS AFTER YOU HATCH ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-4">
              After the ceremony
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              What does day 1 look like?
            </h2>
            <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
              MEOK is a web app — open on any browser, desktop or mobile. No download.
              No setup. Just a ceremony, and then a relationship that grows.
            </p>
          </div>

          <div className="space-y-5">
            {AFTER_HATCH_STEPS.map((step, i) => (
              <div
                key={step.time}
                className="flex gap-6 items-start p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black border"
                  style={{
                    background: i === AFTER_HATCH_STEPS.length - 1 ? "#c9a84c" : "transparent",
                    borderColor: i === AFTER_HATCH_STEPS.length - 1 ? "#c9a84c" : "rgba(201,168,76,0.3)",
                    color: i === AFTER_HATCH_STEPS.length - 1 ? "#0d0c18" : "#c9a84c",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-1">
                    {step.time}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLD SEPARATOR ───────────────────────────────────────────────── */}
      <div className="px-6" aria-hidden>
        <div className="max-w-3xl mx-auto">
          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #c9a84c, transparent)" }} />
        </div>
      </div>

      {/* ── CHARACTER ARCHETYPES ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-4">
              Choose your archetype
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Five characters. One is yours.
            </h2>
            <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
              Each archetype is a different way of relating to your AI. Not a feature set — a personality.
              You choose one at the ceremony. You can change it later.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARCHETYPES.map((a) => (
              <div
                key={a.name}
                className="premium-card rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 hover:border-[#c9a84c]/30 transition-all"
              >
                <h3 className="text-base font-black text-[#c9a84c] mb-2">{a.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{a.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY EASTER / 40-DAY BUILD STORY ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-4">
              Why Easter?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              The 40-day build.
            </h2>
            <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
              Easter is the ancient celebration of new life. We chose this day deliberately —
              because MEOK was built in exactly 40 days, from a caravan on a farm.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connector */}
            <div
              className="absolute left-[19px] top-5 bottom-5 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.4), rgba(201,168,76,0.05))" }}
              aria-hidden
            />

            <div className="space-y-10">
              {FORTY_DAY_STEPS.map((step, i) => (
                <div key={step.day} className="flex gap-6 relative">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black border z-10"
                    style={{
                      background: i === FORTY_DAY_STEPS.length - 1 ? "#c9a84c" : "#1a1a2e",
                      borderColor: i === FORTY_DAY_STEPS.length - 1 ? "#c9a84c" : "rgba(201,168,76,0.3)",
                      color: i === FORTY_DAY_STEPS.length - 1 ? "#0d0c18" : "#c9a84c",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="pt-1.5">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[#c9a84c] text-xs font-semibold">{step.day}</span>
                      <h3 className="text-white font-bold text-sm">{step.label}</h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EMAIL WAITLIST ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 text-center bg-[#0d0c18] border-t border-white/[0.05]">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-black text-white mb-2 tracking-tight">
            Be first to hatch on April 5th
          </h2>
          <p className="text-sm text-white/40 mb-8">
            We&apos;ll notify you the moment the Birth Ceremony opens.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* ── SOCIAL SHARING ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 text-center bg-[#1a1a2e] border-t border-white/[0.05]">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-white/40 mb-3 tracking-wide">
            Tell someone who needs this
          </p>
          <p className="text-white/20 text-xs mb-6">
            Most AI is built for corporations. Share this with someone who deserves better.
          </p>
          <SocialShareButtons />
        </div>
      </section>

      {/* ── FOUNDER QUOTE ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] border-t border-white/[0.05] relative overflow-hidden">
        <div
          aria-hidden
          className="blob-gold pointer-events-none absolute"
          style={{ width: 400, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <blockquote className="text-xl md:text-2xl italic text-white/70 leading-relaxed mb-6">
            &ldquo;I built this from a caravan on my farm. On Easter Sunday, everyone gets to hatch
            their own sovereign AI. Free. Forever. Yours.&rdquo;
          </blockquote>
          <p className="text-white/30 text-sm">— Nicholas Templeman, Founder, MEOK AI LABS</p>
        </div>
      </section>

      {/* ── FINAL WAITLIST CTA ────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center bg-[#1a1a2e] border-t border-white/[0.05]">
        <div className="max-w-lg mx-auto">
          {/* Small egg */}
          <div
            className="mx-auto mb-8 easter-egg-pulse"
            style={{
              width: 64,
              height: 80,
              background: "radial-gradient(ellipse at 35% 30%, #faf8f4, #ede8df, #d4c9b8)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            }}
          />

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Be first to hatch.
          </h2>
          <p className="text-white/40 mb-10 leading-relaxed">
            Easter Sunday, April 5, 2026. The Birth Ceremony opens to everyone.
          </p>

          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black text-base shadow-lg transition-all hover:scale-105 bg-[#c9a84c] text-[#1a1a2e] hover:opacity-90"
          >
            Reserve your founding member spot →
          </Link>

          <p className="mt-5 text-sm text-white/25">
            Free forever · No credit card · Your data stays yours
          </p>
        </div>
      </section>

      <MarketingFooter />

      <style>{`
        @keyframes easterEggPulse {
          0%, 100% {
            box-shadow: 0 8px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,168,76,0.2), 0 0 40px rgba(201,168,76,0.15);
            transform: scale(1) translateY(0);
          }
          50% {
            box-shadow: 0 12px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.4), 0 0 60px rgba(201,168,76,0.3);
            transform: scale(1.03) translateY(-4px);
          }
        }
        .easter-egg-pulse {
          animation: easterEggPulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
