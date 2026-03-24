"use client";

import Link from "next/link";
import {
  Sun,
  Cloud,
  CheckSquare,
  Heart,
  Brain,
  Calendar,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Clock,
  MapPin,
  TrendingDown,
} from "lucide-react";
import { useState } from "react";

/* ─── DATA ─────────────────────────────────────────────── */

const BRIEF_SECTIONS = [
  {
    Icon: Cloud,
    iconClass: "icon-blue",
    title: "Weather & mood",
    desc: "Context matters. Your brief opens with the weather, your commute, and how yesterday ended — setting the emotional frame for the day ahead.",
  },
  {
    Icon: CheckSquare,
    iconClass: "icon-gold",
    title: "Today's 3 priorities",
    desc: "Not your full task list. Three things that actually matter today — chosen based on your goals, your deadlines, and your current care score.",
  },
  {
    Icon: Brain,
    iconClass: "icon-purple",
    title: "Memory from yesterday",
    desc: "Important things from your conversations, decisions you made, ideas you had — surfaced at exactly the right moment so nothing falls through the cracks.",
  },
  {
    Icon: Heart,
    iconClass: "icon-gold",
    title: "Care check-in",
    desc: "Your overnight care score, sleep signals, and any emotional patterns worth noting. Honest, not cheerful. Your AI tells you what it actually sees.",
  },
  {
    Icon: Calendar,
    iconClass: "icon-green",
    title: "Day plan",
    desc: "Your calendar synthesised into a clear arc: when to focus, when to meet, when to rest. Conflicts flagged before they become crises.",
  },
  {
    Icon: Sparkles,
    iconClass: "icon-blue",
    title: "Sovereign insight",
    desc: "One unexpected connection or idea your AI noticed while you slept. Not productivity advice — something genuinely worth thinking about.",
  },
];

const RALPH_TIMELINE = [
  { time: "12AM", label: "Reviews your day's conversations and any connected email or calendar changes" },
  { time: "2AM", label: "Processes tasks, care signals, and overnight memory — running pattern analysis" },
  { time: "4AM", label: "Writes your personalised brief — tailored to exactly where you are today" },
  { time: "6:30AM", label: "Brief is waiting. Ready before you open your eyes." },
];

const FAQ = [
  {
    q: "What if I don't want it every day?",
    a: "You choose the frequency. Daily is the default, but you can set it to weekdays only, or specific days, or on-demand only. Settings → Morning Brief → Delivery Schedule. You can also pause it entirely without losing any configuration.",
  },
  {
    q: "Can I customise what's in it?",
    a: "Yes, fully. Settings → Morning Brief → Sections. You can turn any section on or off, reorder them, and set a length preference (Short / Standard / Full). If you never want weather or care check-ins, remove them. Your brief, your design.",
  },
  {
    q: "What time is my brief ready?",
    a: "By 6:30AM every morning by default — processing starts at midnight and finishes by 4AM. You can set a custom delivery time in settings, from 5AM to 10AM. The brief is always written fresh each morning, never recycled.",
  },
  {
    q: "Does the brief get smarter over time?",
    a: "Significantly. After 30 days, your brief knows which tasks you avoid, what meetings drain you, when you do your best work, and which days you tend to be less energetic. The longer you use MEOK, the more precisely your brief serves you.",
  },
  {
    q: "What if I haven't connected any tools?",
    a: "You'll still get a brief based on your MEOK conversations, care score, and whatever you've shared. Connecting calendar and email dramatically improves it — but it works from day one with zero integrations.",
  },
  {
    q: "Can I receive the brief by email or push notification?",
    a: "Both. Push notification, email digest, or read it in the MEOK app when you wake up. You can also ask your companion to read it to you when you first open the app each morning.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Morning Brief — Your Day, Summarised Before Coffee",
  description:
    "MEOK's Morning Brief reads your calendar, emails, tasks, and memory overnight — delivered before you wake up.",
  url: "https://meok.ai/personal/morning-brief",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── FAQ ITEM ─────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.07]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-[#f5f0e8] text-sm leading-relaxed">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#c9a84c] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-5 text-sm text-[#f5f0e8]/60 leading-relaxed">{a}</p>}
    </div>
  );
}

/* ─── MOCK BRIEF ────────────────────────────────────────── */
function MockBrief() {
  return (
    <div className="max-w-lg mx-auto premium-card text-left overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-[#c9a84c]/10 border-b border-[#c9a84c]/20 px-6 py-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <Sun className="w-5 h-5 text-[#c9a84c] flex-shrink-0" />
            <div>
              <p className="text-white font-black text-base">Good morning, Nicholas.</p>
              <p className="text-[#f5f0e8]/40 text-xs mt-0.5">Tuesday, 21 March · 6:31 AM</p>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-[#c9a84c] font-black text-2xl leading-none">82</p>
            <p className="text-[#f5f0e8]/30 text-[10px]">care score</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-[#f5f0e8]/40">
          <span className="flex items-center gap-1">
            <Cloud className="w-3 h-3" /> 9°C · overcast
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" /> London
          </span>
          <span className="flex items-center gap-1 text-amber-400/70">
            <TrendingDown className="w-3 h-3" /> energy low this week
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Priorities */}
        <div>
          <p className="text-[#c9a84c] text-[10px] font-black tracking-[0.2em] uppercase mb-3">
            Today&apos;s 3 priorities
          </p>
          <ol className="space-y-2.5">
            {[
              { n: 1, text: "Investor deck — due Thursday. 2 sections still incomplete.", urgent: true },
              { n: 2, text: "Reply to Sarah re: launch delay. She asked twice. Don't let it go another day.", urgent: false },
              { n: 3, text: "Prep Q1 numbers before your 11AM board call. 45 mins should be enough.", urgent: false },
            ].map((item) => (
              <li key={item.n} className="flex gap-3 items-start">
                <span
                  className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black mt-0.5 ${
                    item.urgent ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "bg-[#c9a84c]/15 text-[#c9a84c]"
                  }`}
                >
                  {item.n}
                </span>
                <p className="text-sm text-[#f5f0e8]/75 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Insight */}
        <div className="border-t border-white/[0.07] pt-5">
          <p className="text-[#c9a84c] text-[10px] font-black tracking-[0.2em] uppercase mb-2">
            What I noticed overnight
          </p>
          <p className="text-sm text-[#f5f0e8]/70 leading-relaxed">
            You tend to have less energy on Tuesdays — it&apos;s shown up in your care score
            consistently for 6 weeks. Consider protecting your 3-hour morning window for the
            investor deck before anything interrupts it.
          </p>
        </div>

        {/* Memory */}
        <div className="border-t border-white/[0.07] pt-5">
          <p className="text-[#c9a84c] text-[10px] font-black tracking-[0.2em] uppercase mb-2">
            Memory from yesterday
          </p>
          <p className="text-sm text-[#f5f0e8]/70 leading-relaxed">
            You said you were anxious about the launch. Your team hasn&apos;t heard from you
            since Thursday — that silence may be adding to the pressure on both sides.
          </p>
        </div>

        {/* Care check-in */}
        <div className="border-t border-white/[0.07] pt-5">
          <p className="text-[#c9a84c] text-[10px] font-black tracking-[0.2em] uppercase mb-2">
            Care check-in
          </p>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-1 space-y-1.5">
              {[
                { label: "Emotional", val: 78, color: "#c9a84c" },
                { label: "Cognitive", val: 71, color: "#3b82f6" },
                { label: "Physical", val: 85, color: "#22c55e" },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-2">
                  <span className="text-[#f5f0e8]/35 text-[10px] w-16">{d.label}</span>
                  <div className="flex-1 h-1 rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${d.val}%`, backgroundColor: d.color }}
                    />
                  </div>
                  <span className="text-[10px] text-[#f5f0e8]/30 w-5 text-right">{d.val}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-[#f5f0e8]/40 leading-relaxed">
            Cognitive load is lower than Monday. Good window for deep work before 1PM.
          </p>
        </div>

        {/* Day plan */}
        <div className="border-t border-white/[0.07] pt-5">
          <p className="text-[#c9a84c] text-[10px] font-black tracking-[0.2em] uppercase mb-2">
            Today&apos;s arc
          </p>
          <div className="space-y-1.5">
            {[
              { time: "7–10AM", label: "Deep work window · investor deck", type: "focus" },
              { time: "11AM", label: "Board call — Q1 numbers", type: "meeting" },
              { time: "12–1PM", label: "Lunch · no screens if possible", type: "rest" },
              { time: "2–4PM", label: "Emails · Sarah reply · admin", type: "admin" },
              { time: "4PM", label: "⚠️ Conflict — two calls scheduled", type: "warning" },
            ].map((slot) => (
              <div key={slot.time} className="flex items-center gap-3 text-xs">
                <span className="text-[#f5f0e8]/30 w-16 flex-shrink-0 font-mono">{slot.time}</span>
                <span
                  className={
                    slot.type === "warning"
                      ? "text-amber-400"
                      : slot.type === "focus"
                      ? "text-[#c9a84c]"
                      : slot.type === "rest"
                      ? "text-green-400/70"
                      : "text-[#f5f0e8]/55"
                  }
                >
                  {slot.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sovereign insight */}
        <div
          className="border-t border-[#c9a84c]/15 pt-5 bg-[#c9a84c]/[0.03] -mx-6 px-6 pb-1 mt-1"
        >
          <p className="text-[#c9a84c] text-[10px] font-black tracking-[0.2em] uppercase mb-2">
            Sovereign insight
          </p>
          <p className="text-sm text-[#f5f0e8]/60 italic leading-relaxed">
            &ldquo;The investor deck problem you mentioned in October and the launch anxiety you
            described yesterday — they trace back to the same root concern. Worth naming it
            today before the board call.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ─────────────────────────────────────────────── */
export default function MorningBriefPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div
          className="blob-gold"
          style={{ width: 700, height: 500, top: -150, left: "50%", transform: "translateX(-50%)", opacity: 0.25 }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-8">
            <Clock className="w-3 h-3" />
            Sovereign Morning Brief
          </div>

          <h1
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Wake up knowing{" "}
            <span className="text-gradient-gold">exactly what matters.</span>
          </h1>

          <p className="text-[#f5f0e8]/65 text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
            Your AI reads your calendar, emails, tasks, goals, and memory overnight — then writes
            a personalised briefing ready when you wake up. Not a summary. An understanding.
          </p>
          <p className="text-[#f5f0e8]/35 text-sm max-w-xl mx-auto mb-10">
            Fully customisable. Delivered daily, or whenever you want it.
          </p>

          <Link
            href="/hatch"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-sm mb-16"
          >
            Start your mornings right
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Full realistic mock brief */}
          <MockBrief />
        </div>
      </section>

      {/* ─── WHAT'S IN A BRIEF ────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              What&apos;s inside
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Six sections. Every morning. Without fail.
            </h2>
            <p className="text-[#f5f0e8]/45 mt-4 max-w-xl mx-auto text-sm">
              Turn any section off in settings. Reorder them. Make it yours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BRIEF_SECTIONS.map(({ Icon, iconClass, title, desc }) => (
              <div key={title} className="premium-card p-7">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${iconClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-black text-white text-base mb-3">{title}</h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT PERSONALISES ──────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Gets smarter every day
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Day one is good. Day 90 is extraordinary.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                period: "Day 1",
                title: "Immediately useful",
                desc: "From day one, your brief draws on your conversations, goals, and any connected tools. It knows what you've shared and what matters to you.",
                color: "text-[#f5f0e8]/60",
              },
              {
                period: "Day 30",
                title: "Knows your patterns",
                desc: "After a month, MEOK knows which tasks you delay, what meetings drain you, and when your focus is sharpest. The brief anticipates you.",
                color: "text-[#c9a84c]",
              },
              {
                period: "Day 90+",
                title: "Genuinely prescient",
                desc: "Long-term memory means your brief can surface connections across months — the idea you had in January that applies perfectly to today. The insight you didn't know you needed.",
                color: "text-[#c9a84c]",
              },
            ].map((item) => (
              <div key={item.period} className="premium-card p-7">
                <div className={`font-black text-2xl mb-2 ${item.color}`}>{item.period}</div>
                <h3 className="font-black text-white text-base mb-3">{item.title}</h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RALPH TIMELINE ───────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Written while you sleep
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Your AI works the night shift.
            </h2>
            <p className="text-[#f5f0e8]/50 mt-4 max-w-xl mx-auto text-sm">
              From midnight to 6AM, your companion processes your day and writes your brief —
              so it&apos;s ready the moment you open your eyes.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[28px] top-6 bottom-6 w-0.5 bg-[#c9a84c]/20" />
            <div className="space-y-6">
              {RALPH_TIMELINE.map((item, i) => (
                <div key={item.time} className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black z-10"
                    style={{
                      backgroundColor: i === RALPH_TIMELINE.length - 1 ? "#c9a84c" : "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: i === RALPH_TIMELINE.length - 1 ? "#1a1a2e" : "#c9a84c",
                    }}
                  >
                    {item.time}
                  </div>
                  <div className="pt-3.5">
                    <p className={`text-sm leading-relaxed ${i === RALPH_TIMELINE.length - 1 ? "text-white font-semibold" : "text-[#f5f0e8]/60"}`}>
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ──────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Who this is for
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              If your mornings feel reactive, not intentional.
            </h2>
            <p className="text-[#f5f0e8]/40 mt-4 max-w-xl mx-auto text-sm">
              The Morning Brief is built for the specific moment when you open your eyes and realise you have no idea where today starts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                label: "The person who checks their phone before they're fully awake",
                detail: "You're scanning emails before 7am trying to work out what's urgent. The Morning Brief means your first intentional thought of the day is \"here is what matters today\" — not a flood of other people's priorities.",
                accent: "text-[#c9a84c]",
                dot: "bg-[#c9a84c]",
              },
              {
                label: "The person who loses things between conversations",
                detail: "You said something important yesterday and you know it mattered — but it's already gone. MEOK reviews your conversations overnight and surfaces exactly that. Nothing falls through.",
                accent: "text-blue-400",
                dot: "bg-blue-400",
              },
              {
                label: "The person who wants one source of truth in the morning",
                detail: "Calendar, tasks, emails, goals, care state — you check five apps before coffee. The Morning Brief pulls all of it into one clear briefing. One read. Then you start the day.",
                accent: "text-purple-400",
                dot: "bg-purple-400",
              },
            ].map((p) => (
              <div key={p.label} className="premium-card p-7 rounded-2xl flex flex-col gap-4">
                <div className={`w-2 h-2 rounded-full ${p.dot}`} />
                <h3 className={`font-black text-sm leading-snug ${p.accent}`}>{p.label}</h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">Common questions</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Questions about the Morning Brief</h2>
            <p className="text-[#f5f0e8]/35 mt-3 text-sm">Everything you need to know before you switch it on.</p>
          </div>
          <div className="divide-y divide-white/[0.07]">
            {FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e] text-center">
        <div className="relative max-w-2xl mx-auto">
          <div
            className="blob-gold"
            style={{ width: 400, height: 400, top: -100, left: "50%", transform: "translateX(-50%)", opacity: 0.2 }}
          />
          <div className="relative">
            <Sun className="w-10 h-10 text-[#c9a84c] mx-auto mb-6 float-slow" />
            <h2 className="font-black text-white text-3xl sm:text-4xl mb-4 leading-tight">
              Start every morning<br />already knowing the plan.
            </h2>
            <p className="text-[#f5f0e8]/50 mb-10">
              Free forever. Fully customisable. No credit card.
            </p>
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-base shadow-xl"
            >
              Start your mornings right
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-4 text-xs text-[#f5f0e8]/25 font-mono">
              Free forever · No credit card · Your brief, your way
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
