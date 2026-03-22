import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Youtube, Twitch, Radio, CalendarDays, Code2 } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "Watch MEOK Build Live — Building in Public | MEOK.AI",
  description:
    "Watch Nicholas Templeman build MEOK live on YouTube and Twitch. Sovereign AI built in public — every architectural decision, every care-system commit, streamed live.",
  alternates: { canonical: "https://meok.ai/live" },
};

const STREAM_TOPICS = [
  {
    icon: Code2,
    title: "Sovereign architecture sessions",
    desc: "Live walkthroughs of pgvector memory design, Byzantine Council consensus logic, and the Maternal Covenant enforcement layer.",
  },
  {
    icon: Radio,
    title: "Build sprints",
    desc: "Real-time feature development — from blank file to deployed. Watch the sovereign AI OS take shape, commit by commit.",
  },
  {
    icon: CalendarDays,
    title: "Easter countdown specials",
    desc: "Weekly live builds counting down to the Easter Sunday launch. Every stream is a milestone. Every commit matters.",
  },
];

const STREAM_LINKS = [
  {
    platform: "YouTube",
    handle: "@meok-ai",
    url: "https://youtube.com/@meok-ai",
    icon: Youtube,
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20",
    desc: "Full stream archives, feature demos, and architectural deep-dives.",
    cta: "Subscribe on YouTube",
  },
  {
    platform: "Twitch",
    handle: "meok_ai",
    url: "https://twitch.tv/meok_ai",
    icon: Twitch,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    desc: "Live coding sessions with chat — ask questions as the system gets built.",
    cta: "Follow on Twitch",
  },
];

// Easter countdown — April 5 2026
const EASTER_DATE = new Date("2026-04-05T00:00:00Z");
const TODAY = new Date("2026-03-21T00:00:00Z");
const daysUntilEaster = Math.ceil(
  (EASTER_DATE.getTime() - TODAY.getTime()) / (1000 * 60 * 60 * 24)
);

export default function LivePage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <MarketingNav />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/15 border border-red-400/30 text-red-400 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Building in public
          </div>

          <h1
            className="font-black leading-[1.0] mb-6 text-white tracking-tight"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "3.75rem" }}
          >
            Watch MEOK{" "}
            <span className="text-[#c9a84c]">build live.</span>
          </h1>

          <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
            Every architectural decision, every sovereign AI commit, every late-night debugging
            session — streamed publicly. This is how you build something that earns trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com/@meok-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm"
            >
              <Youtube className="w-4 h-4" />
              Watch on YouTube
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://twitch.tv/meok_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white/70 border border-white/15 hover:border-purple-400/40 hover:text-white transition-all text-sm"
            >
              <Twitch className="w-4 h-4 text-purple-400" />
              Follow on Twitch
            </a>
          </div>
        </div>
      </section>

      {/* ─── EASTER COUNTDOWN ──────────────────────────────────── */}
      <section className="py-12 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-[#c9a84c]/5 border border-[#c9a84c]/20 p-8 text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3">
              Easter Sunday Launch — April 5, 2026
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-center">
                <span
                  className="block font-black text-white"
                  style={{ fontFamily: "var(--font-dm-sans)", fontSize: "3.5rem", lineHeight: 1 }}
                >
                  {daysUntilEaster}
                </span>
                <span className="text-white/40 text-xs uppercase tracking-wider">days</span>
              </div>
              <span className="text-[#c9a84c] text-4xl font-black">🥚</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto">
              The egg hatches on Easter Sunday. Every live build stream brings us one commit closer.
              Join the streams to watch sovereign AI born in real time.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BUILD IN PUBLIC NARRATIVE ─────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c]/70 mb-3">
              Why build in public?
            </p>
            <h2
              className="font-black text-white text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Transparency is part of{" "}
              <span className="text-[#c9a84c]">the sovereignty.</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              MEOK asks you to trust it with your most private thoughts and memories. The least
              we can do is build it in front of you — every architectural decision, visible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STREAM_TOPICS.map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.title}
                  className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-7 hover:border-[#c9a84c]/30 transition-all"
                >
                  <Icon className="w-6 h-6 text-[#c9a84c] mb-5" />
                  <h3 className="font-black text-white text-base mb-3">{topic.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{topic.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── STREAM PLATFORMS ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-black text-white text-3xl"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Where to watch.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STREAM_LINKS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.platform}
                  className={`rounded-2xl bg-white/[0.03] border ${s.border} p-8 hover:bg-white/[0.05] transition-all`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <h3 className={`font-black text-xl mb-1 ${s.color}`}>{s.platform}</h3>
                  <p className="font-mono text-white/30 text-xs mb-4">{s.handle}</p>
                  <p className="text-white/55 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold ${s.bg} ${s.color} border ${s.border} hover:opacity-80 transition-opacity`}
                  >
                    {s.cta} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL SEE ───────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white/[0.02] border border-[#c9a84c]/15 p-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-6">
              What you&apos;ll see in the streams
            </p>
            <ul className="space-y-4">
              {[
                "The Byzantine Council consensus logic — how 43 agents reach agreement",
                "Sovereign memory architecture built live in pgvector",
                "The Maternal Covenant care-scoring system, written and tested in real time",
                "Multi-LLM routing decisions — why we chose each model for each task",
                "Full infrastructure: Supabase, Redis, Next.js, deployed on Vercel",
                "Mistakes, debugging, and the honest reality of building a sovereign AI OS solo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-2" />
                  <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] border-t border-white/[0.05] text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-black text-white text-3xl sm:text-4xl mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Watch it being born. Then hatch yours.
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            The egg hatches on Easter Sunday. Watch the streams — then be first in line when
            sovereign AI is live for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm"
            >
              Join the waitlist 🥚
            </Link>
            <a
              href="https://youtube.com/@meok-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white/70 border border-white/15 hover:border-white/30 hover:text-white transition-all text-sm"
            >
              <Youtube className="w-4 h-4 text-red-400" />
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
