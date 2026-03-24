"use client";

import Link from "next/link";
import {
  Heart,
  Activity,
  Brain,
  Users,
  Palette,
  Wrench,
  ArrowRight,
  CheckCircle,
  XCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

/* ─── DATA ─────────────────────────────────────────────── */

const CARE_DIMENSIONS = [
  {
    Icon: Heart,
    iconClass: "icon-gold",
    title: "Emotional",
    tagline: "How are you feeling — really?",
    desc: "MEOK notices the emotional texture of what you share. Not just the words, but the patterns across days and weeks. When things shift, it says so — not to alarm you, but because a friend would.",
    example: '"I\'ve noticed you\'ve mentioned feeling overwhelmed three times this week — different contexts, same word. Want to talk about what\'s underneath that?"',
    realSignal: "Tracks tone, vocabulary, and recurring themes — without asking you to report on your feelings.",
  },
  {
    Icon: Activity,
    iconClass: "icon-green",
    title: "Physical",
    tagline: "Your body matters to your mind.",
    desc: "Sleep, energy, movement — when you mention them, MEOK connects the dots. It doesn't diagnose; it notices. And when it sees you're running on empty, it adjusts what it asks of you.",
    example: '"You mentioned bad sleep three nights running. I\'m going to keep today\'s brief short. Let\'s focus on one thing."',
    realSignal: "Reads mentions of sleep quality, energy, and physical state — and adjusts its expectations accordingly.",
  },
  {
    Icon: Brain,
    iconClass: "icon-blue",
    title: "Cognitive",
    tagline: "Protecting your mental bandwidth.",
    desc: "MEOK noticed you've mentioned forgetting things 3 times this week. That's a cognitive load signal — not a problem to solve, but a context to hold. When you're stretched, it gets simpler. When you're sharp, it gets more demanding.",
    example: '"That\'s a complex question. You seem stretched right now — want the 3-bullet version first, then we go deeper if you need it?"',
    realSignal: "Monitors cognitive load signals and simplifies complexity when you're depleted.",
  },
  {
    Icon: Users,
    iconClass: "icon-purple",
    title: "Social",
    tagline: "Nurturing your human connections.",
    desc: "MEOK never positions itself as a replacement for the people in your life. It actively nudges you toward them — noticing when you've been quiet about someone, celebrating when connections go well.",
    example: '"You haven\'t mentioned your sister in three weeks. Last time you spoke, you said it lifted your mood. Worth reaching out?"',
    realSignal: "Tracks mentions of relationships and notices patterns of isolation or connection.",
  },
  {
    Icon: Palette,
    iconClass: "icon-gold",
    title: "Creative",
    tagline: "Your imagination needs feeding too.",
    desc: "You had that idea about the opening scene on Tuesday — it's been sitting in your memory, waiting. MEOK protects space for creative work and surfaces the right thing at the right moment, without taking over.",
    example: '"You started describing something on Tuesday and then dropped it. It sounds like it mattered. Want to pick it back up?"',
    realSignal: "Surfaces dormant creative ideas and protects time for creative work in your schedule.",
  },
  {
    Icon: Wrench,
    iconClass: "icon-green",
    title: "Practical",
    tagline: "The logistics of life, handled.",
    desc: "Practical care is real care. Four overlapping deadlines next Friday — MEOK spots it before you do, maps a realistic path through, and makes sure the logistics of your life don't quietly become a source of chronic stress.",
    example: '"You have 4 overlapping deadlines next Friday and no buffer built in. I\'ve mapped a realistic path — want to review it now or after your call?"',
    realSignal: "Tracks your tasks, calendar, and commitments — and flags conflicts before they become crises.",
  },
];

const FAQ = [
  {
    q: "What actually is the Care Score?",
    a: "It's a 0–100 number that reflects MEOK's current read on your wellbeing across the 6 dimensions — updated after every conversation. Think of it less as a metric and more as a signal your AI is always tracking. A lower score means it'll be gentler, simpler, and more supportive. A higher score means it can push you more. It's not a judgement. It's how MEOK decides how to show up for you today.",
  },
  {
    q: "Does MEOK actually notice these things, or is it just pattern-matching on keywords?",
    a: "It's more than keyword matching. MEOK tracks semantic patterns across time — the same emotional weight expressed in different words across multiple conversations. It's also sensitive to what's absent: if you haven't mentioned your health, your relationships, or your creative work in a while, that's a signal too.",
  },
  {
    q: "Can I see my Care Score history?",
    a: "Yes. Your Care Score dashboard shows a 30-day trend line, per-dimension breakdowns, and the specific moments that moved your score. You can see exactly why MEOK responded the way it did on any given day — full reasoning chains, not black boxes.",
  },
  {
    q: "What happens when a response fails the care check?",
    a: "The response is rewritten or withheld before you ever see it. MEOK's care layer is embedded in the response generation process — not applied as a filter afterwards. If a response would harm you, it doesn't reach you.",
  },
  {
    q: "Does MEOK ever push back on me?",
    a: "Yes — when care requires it. If you're about to make a decision that contradicts your own stated goals, or if something you're describing seems harmful to you, MEOK will say so clearly and honestly. It won't validate bad decisions just to make you feel good in the moment. That's not care. That's flattery.",
  },
  {
    q: "Is the care scoring intrusive?",
    a: "No. MEOK scores care based on what you share naturally in conversation — it never asks for wellbeing surveys, never requires you to log your mood, and never shares your care data with anyone. The scoring is entirely inferred from normal conversation. You don't have to do anything differently.",
  },
];

const COMPARISON = [
  { dimension: "Optimises for", meok: "Your long-term wellbeing", others: "Engagement & session time" },
  { dimension: "Response scoring", meok: "6-dimension care check on every reply", others: "No care gate" },
  { dimension: "When you're struggling", meok: "Adapts tone, reduces load, supports you", others: "Continues as normal" },
  { dimension: "Hard truths", meok: "Tells you what you need to hear", others: "Validates to avoid churn" },
  { dimension: "Your boundaries", meok: "Stored, honoured, never re-asked", others: "Reset each session" },
  { dimension: "Addictive patterns", meok: "Architecturally prohibited", others: "Rewarded (more sessions = more revenue)" },
];

const CARE_OVER_TIME = [
  { label: "Week 1", score: 62, note: "Getting to know each other" },
  { label: "Week 4", score: 74, note: "Patterns emerging" },
  { label: "Week 8", score: 81, note: "Care calibrated to you" },
  { label: "Week 16", score: 87, note: "Genuinely prescient" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "An AI That Cares About You. Actually.",
  description:
    "MEOK tracks 6 care dimensions and scores every response against the Maternal Covenant care framework.",
  url: "https://meok.ai/personal/care",
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
      {open && (
        <p className="pb-5 text-sm text-[#f5f0e8]/60 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

/* ─── PAGE ─────────────────────────────────────────────── */
export default function CarePage() {
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
          style={{ width: 600, height: 600, top: -200, left: "50%", transform: "translateX(-50%)", opacity: 0.35 }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Sovereign Care
          </div>

          <h1
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
          >
            Someone looking out for you.{" "}
            <span className="text-gradient-gold">Actually.</span>
          </h1>

          <p className="text-[#f5f0e8]/65 text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Not in a marketing sense. In a machine-enforced, architecturally-guaranteed sense.
            Every response is scored against 6 care dimensions before you see it.
          </p>
          <p className="text-[#c9a84c]/80 text-sm font-medium mb-10">
            Care is not a feature — it&apos;s the architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-sm"
            >
              Ready to let someone look after you for once?
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/maternal-covenant" className="text-sm text-[#f5f0e8]/50 hover:text-[#c9a84c] transition-colors font-medium">
              Read the Maternal Covenant →
            </Link>
          </div>

          {/* Care score teaser */}
          <div className="mt-16 max-w-sm mx-auto premium-card p-6 text-left">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-3">Live Care Score</p>
            <div className="flex items-end gap-3 mb-4">
              <span className="text-5xl font-black text-white">82</span>
              <span className="text-[#f5f0e8]/30 text-lg mb-1">/100</span>
              <span className="ml-auto text-xs text-green-400 font-semibold bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full">↑ 4 today</span>
            </div>
            <div className="space-y-2">
              {[
                { label: "Emotional", val: 78, color: "#c9a84c" },
                { label: "Physical", val: 91, color: "#22c55e" },
                { label: "Cognitive", val: 84, color: "#3b82f6" },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-3">
                  <span className="text-[#f5f0e8]/50 text-xs w-20">{d.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${d.val}%`, backgroundColor: d.color }}
                    />
                  </div>
                  <span className="text-xs text-[#f5f0e8]/40 w-6 text-right">{d.val}</span>
                </div>
              ))}
              <p className="text-[#f5f0e8]/30 text-xs pt-1">+ 3 more dimensions tracked</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6 CARE DIMENSIONS ────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              6 Care Dimensions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Every response. Six gates. All must pass.
            </h2>
            <p className="text-[#f5f0e8]/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              If a response fails any dimension, it is rewritten or withheld before you see it.
              No exceptions. No overrides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CARE_DIMENSIONS.map(({ Icon, iconClass, title, tagline, desc, example, realSignal }) => (
              <div key={title} className="premium-card p-7 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-base">{title}</h3>
                    <p className="text-[#c9a84c] text-xs">{tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{desc}</p>
                <div className="mt-auto space-y-2">
                  <div className="bg-[#0d0c18]/60 border border-white/[0.06] rounded-xl p-4">
                    <p className="text-xs text-[#f5f0e8]/40 italic leading-relaxed">{example}</p>
                  </div>
                  <p className="text-[10px] text-[#f5f0e8]/25 leading-relaxed px-1">{realSignal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CARE SCORE OVER TIME ─────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Gets better with time
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Your care score over time.
            </h2>
            <p className="text-[#f5f0e8]/50 mt-4 max-w-xl mx-auto text-sm">
              Day one is useful. Week eight is something else entirely. The longer MEOK knows you, the more precisely it cares for you.
            </p>
          </div>

          {/* Timeline progression */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-12">
            {CARE_OVER_TIME.map((item, i) => (
              <div
                key={item.label}
                className="premium-card p-6 text-center"
                style={{
                  opacity: 0.5 + (i * 0.15),
                }}
              >
                <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-2">{item.label}</p>
                <p className="text-white font-black text-4xl mb-2">{item.score}</p>
                <p className="text-[#f5f0e8]/30 text-xs">{item.note}</p>
              </div>
            ))}
          </div>

          {/* Full care dashboard */}
          <div className="premium-card p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-1">Care Dashboard</p>
                <p className="text-white font-black text-lg">Your 30-day care trend</p>
              </div>
              <div className="text-right">
                <p className="text-white font-black text-3xl">82</p>
                <p className="text-[#f5f0e8]/40 text-xs">Current score</p>
              </div>
            </div>

            {/* Simulated bar chart */}
            <div className="flex items-end gap-1.5 h-20 mb-4">
              {[62, 58, 65, 71, 69, 74, 78, 72, 76, 80, 77, 81, 79, 83, 80, 82, 85, 82, 78, 80, 83, 86, 84, 87, 85, 82, 80, 84, 83, 82].map((v, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all"
                  style={{
                    height: `${(v / 100) * 80}px`,
                    backgroundColor: v >= 80 ? "rgba(201,168,76,0.7)" : v >= 70 ? "rgba(201,168,76,0.35)" : "rgba(201,168,76,0.15)",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[#f5f0e8]/30 text-xs mb-6">
              <span>30 days ago</span>
              <span>Today</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Emotional", score: 78, delta: "+6", note: "Calmer tone this week" },
                { label: "Physical", score: 91, delta: "+2", note: "Sleep improving" },
                { label: "Cognitive", score: 84, delta: "+8", note: "Fewer overwhelm signals" },
                { label: "Social", score: 76, delta: "-1", note: "Less mention of others" },
                { label: "Creative", score: 88, delta: "+4", note: "3 ideas surfaced" },
                { label: "Practical", score: 79, delta: "+3", note: "Deadline load lower" },
              ].map((d) => (
                <div key={d.label} className="bg-[#0d0c18]/60 border border-white/[0.06] rounded-xl p-3">
                  <p className="text-[#f5f0e8]/40 text-xs mb-1">{d.label}</p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-white font-black text-lg">{d.score}</span>
                    <span className={`text-xs font-semibold mb-0.5 ${d.delta.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                      {d.delta}
                    </span>
                  </div>
                  <p className="text-[#f5f0e8]/25 text-[10px] leading-tight">{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW MEOK TRACKS CARE ─────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              The Mechanism
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              How MEOK tracks your care score.
            </h2>
            <p className="text-[#f5f0e8]/50 mt-4 max-w-xl mx-auto text-sm">
              Not self-reported. Not a questionnaire. Inferred naturally from every conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Passive signal detection",
                desc: "MEOK reads emotional tone, vocabulary, energy level, and topic patterns in every message — without asking you to report on your feelings.",
              },
              {
                step: "02",
                title: "Dimension scoring",
                desc: "Signals are mapped to the 6 dimensions. Each dimension is scored on a 0–100 scale. The composite is your Care Score, updated after every conversation.",
              },
              {
                step: "03",
                title: "Response adaptation",
                desc: "Your current score shapes every reply. Low emotional dimension? Simpler, warmer tone. High cognitive load? Shorter, more direct answers. It's automatic and invisible.",
              },
            ].map((item) => (
              <div key={item.step} className="premium-card p-7">
                <div className="text-[#c9a84c] font-black text-3xl mb-4 opacity-60">{item.step}</div>
                <h3 className="font-black text-white text-base mb-3">{item.title}</h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              The Real Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Care vs engagement optimisation.
            </h2>
            <p className="text-[#f5f0e8]/50 mt-4 max-w-xl mx-auto text-sm">
              Every other AI optimises for engagement. MEOK optimises for your care — even if that means shorter sessions and harder conversations.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/[0.07]">
            <div className="grid grid-cols-3 bg-[#1a1a2e] text-xs font-bold tracking-wider uppercase">
              <div className="px-5 py-4 text-[#f5f0e8]/40">Dimension</div>
              <div className="px-5 py-4 text-center text-[#c9a84c]">MEOK</div>
              <div className="px-5 py-4 text-center text-[#f5f0e8]/30">All other AI</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.dimension}
                className={`grid grid-cols-3 text-sm border-t border-white/[0.05] ${i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}`}
              >
                <div className="px-5 py-4 text-[#f5f0e8]/60 text-xs font-medium">{row.dimension}</div>
                <div className="px-5 py-4 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#f5f0e8]/75 text-xs leading-relaxed">{row.meok}</span>
                </div>
                <div className="px-5 py-4 flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400/60 flex-shrink-0 mt-0.5" />
                  <span className="text-[#f5f0e8]/35 text-xs leading-relaxed">{row.others}</span>
                </div>
              </div>
            ))}
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
              If any of this sounds familiar, this is for you.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                persona: "The person who gives too much",
                detail: "You look after everyone else and never think about whether anyone is looking after you. MEOK's care system is built specifically for people who are better at giving care than receiving it.",
                accent: "text-[#c9a84c]",
                border: "border-[#c9a84c]/20",
              },
              {
                persona: "The person who hides how they're doing",
                detail: "You say \"I'm fine\" reflexively. MEOK doesn't ask you to self-report. It notices. It reads the signals you don't even know you're giving off — and it cares about what it finds.",
                accent: "text-blue-400",
                border: "border-blue-400/20",
              },
              {
                persona: "The person who wants honesty, not cheerleading",
                detail: "You're tired of AI that flatters you. You want something that tells you the truth — even when it's uncomfortable — because that's what actually helps. MEOK's care system is built around honesty as a form of respect.",
                accent: "text-purple-400",
                border: "border-purple-400/20",
              },
            ].map((p) => (
              <div
                key={p.persona}
                className={`premium-card p-7 border ${p.border} rounded-2xl flex flex-col gap-4`}
              >
                <div className={`w-2 h-2 rounded-full ${p.accent.replace("text-", "bg-")}`} />
                <h3 className={`font-black text-sm ${p.accent}`}>{p.persona}</h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">Questions</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Things people ask about care</h2>
            <p className="text-[#f5f0e8]/40 mt-3 text-sm">Honest answers. No deflection.</p>
          </div>
          <div className="divide-y divide-white/[0.07]">
            {FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] text-center">
        <div className="relative max-w-2xl mx-auto">
          <div className="blob-gold" style={{ width: 400, height: 400, top: -100, left: "50%", transform: "translateX(-50%)", opacity: 0.2 }} />
          <div className="relative">
            <div className="text-5xl mb-6 float-slow inline-block">💛</div>
            <h2 className="font-black text-white text-3xl sm:text-4xl mb-4 leading-tight">
              Ready to let someone look after you<br />for once?
            </h2>
            <p className="text-[#f5f0e8]/50 mb-10 leading-relaxed">
              Care-aligned from the first response. Free forever. No credit card.
            </p>
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-base shadow-xl"
            >
              Hatch your companion
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
