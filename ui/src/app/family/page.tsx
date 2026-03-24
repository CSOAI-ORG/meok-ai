"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Lock,
  HeartPulse,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpen,
  BarChart2,
  AlertCircle,
  KeyRound,
  Smartphone,
  Calendar,
  Heart,
  Clock,
  Brain,
} from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://meok.ai/family#webpage",
      url: "https://meok.ai/family",
      name: "Family OS — Sovereign AI for Your Whole Family | MEOK.AI",
      description:
        "MEOK Family OS protects and connects every member of your family. Child-safe AI companions, parent dashboard, Guardian 24/7 protection, COPPA and GDPR compliant. Care, not surveillance.",
      isPartOf: { "@id": "https://meok.ai/#website" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
    {
      "@type": "Question",
      name: "What if my teenager won't use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most teenagers come around when they realise MEOK is genuinely on their side — not a parenting tool wearing a friendly face. MEOK doesn't report their conversations to you. It's their private companion. Give it a few weeks. The kids who resist hardest often become the most loyal users, because MEOK is the one place they can talk without judgement.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see what my kids tell their AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — and that's intentional. Your children's conversations with MEOK are private. What you see is a wellbeing summary: emotional patterns, care scores, any flags that genuinely need your attention. This isn't a loophole. It's the design. Trust is what keeps children safe, not surveillance.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I miss an alert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK doesn't send one ping and give up. Alerts escalate gently through your notification preferences — first a push notification, then a follow-up if unread. For genuine emergencies, MEOK will reach all designated family contacts until someone responds. You won't miss what matters.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle really difficult moments — grief, mental health, big questions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With care, not scripts. MEOK is trained on a care ethics framework that treats every person — including your child — as someone who deserves a thoughtful, honest response. For sensitive topics, MEOK will always encourage connection with a trusted human too. It's a companion, not a replacement.",
      },
    },
    {
      "@type": "Question",
      name: "We're a blended family. Can it handle different household arrangements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK understands family is complicated. You can have multiple guardians on a single child's account, set different visibility levels for different adults, and each person's companion stays loyal to them regardless of which house they're in that week.",
      },
    },
      ],
    },
  ],
};

const SCENARIOS = [
  {
    color: "#c9a84c",
    iconColor: "icon-gold",
    icon: Clock,
    headline: "It's 6pm. The kids are hungry. Mum just called. And you've completely forgotten your daughter's recital is tonight.",
    body: "MEOK would have reminded you at 4pm. And again at 5. It knew about the recital because it holds your whole family's calendar — school events, medical appointments, the things that slip through. It would have even suggested what to pick up for dinner on the way.",
    tag: "The overwhelmed parent",
  },
  {
    color: "#60a5fa",
    iconColor: "icon-blue",
    icon: Brain,
    headline: "Your son has been struggling at school for weeks. He hasn't told you. But he told MEOK.",
    body: "MEOK noticed the pattern — shorter answers, more anxious questions, mentions of a kid at lunch. It didn't betray his trust. Instead, it gently surfaced a summary to you: \"Jake might need some extra support this week. He's been carrying something.\" That's all you needed.",
    tag: "The quiet one",
  },
  {
    color: "#ef4444",
    iconColor: "icon-gold",
    icon: HeartPulse,
    headline: "Your dad missed his medication again. And the day before. And the day before that.",
    body: "MEOK noticed the pattern before it became a crisis. Not from one missed dose — from three in a row, combined with him mentioning he was tired, and fewer calls than usual. It sent you a soft alert, not an alarm. You rang him. He was fine — just forgetful. You caught it.",
    tag: "The distant child",
  },
];

const HOLDS = [
  {
    icon: Calendar,
    color: "icon-gold",
    title: "Everyone's schedule",
    desc: "School plays, GP appointments, football training, the prescription due date. One family calendar that every companion draws from — so nothing falls through the gap between you.",
  },
  {
    icon: Heart,
    color: "icon-blue",
    title: "Each person's emotional state",
    desc: "MEOK notices when someone in your family is having a harder week. Not from reading their messages — from caring patterns, tone, and what they bring up. A gentle heads-up, nothing more.",
  },
  {
    icon: AlertCircle,
    color: "icon-green",
    title: "Medication and health rhythms",
    desc: "Recurring prescriptions, missed doses, upcoming appointments. For elderly parents and children alike, MEOK holds the health rhythm so you don't have to carry it in your head.",
  },
  {
    icon: BookOpen,
    color: "icon-gold",
    title: "Family history and context",
    desc: "MEOK remembers that your daughter is allergic to penicillin, that your son is revising for GCSEs, that Dad prefers mornings. It holds the context that makes every interaction feel known.",
  },
  {
    icon: BarChart2,
    color: "icon-blue",
    title: "Wellbeing patterns over time",
    desc: "Not one-off snapshots but trends. MEOK tracks care scores across weeks so it can notice gradual shifts — the kind of slow drift that's invisible until it isn't.",
  },
  {
    icon: Smartphone,
    color: "icon-green",
    title: "The things people find hard to say",
    desc: "Sometimes your teenager will tell MEOK something they can't say to you yet. MEOK holds it with care — and surfaces it gently when the time is right.",
  },
];

const WEEK_DIARY = [
  {
    day: "Mon",
    label: "Monday",
    events: [
      { time: "7:45am", who: "MEOK → Mum", text: "Reminded you: Ella's PE kit needs washing tonight, she has games tomorrow." },
      { time: "3:30pm", who: "MEOK → Ella, 9", text: "\"How was your day? Your mum said you had a spelling test.\"" },
    ],
  },
  {
    day: "Tue",
    label: "Tuesday",
    events: [
      { time: "8:10am", who: "MEOK → Dad", text: "Dad's weekly summary: Grandad called three times last week. Worth a longer call this weekend?" },
      { time: "5:00pm", who: "MEOK → Jake, 14", text: "Jake checked in. Tone was lighter than last week. Care score up." },
    ],
  },
  {
    day: "Wed",
    label: "Wednesday",
    events: [
      { time: "9:47am", who: "MEOK → Mum", text: "Soft alert: Grandad hasn't taken his afternoon medication in two days. Do you want me to remind him?" },
      { time: "6:30pm", who: "MEOK → family", text: "Tomorrow is Ella's school play at 7pm. Reminder set for 5:30pm." },
    ],
  },
  {
    day: "Thu",
    label: "Thursday",
    events: [
      { time: "12:15pm", who: "MEOK → Jake, 14", text: "Jake asked MEOK about exam stress. MEOK talked him through it, let you know he's okay but asked if you could check in tonight." },
      { time: "7:00pm", who: "MEOK → Mum", text: "You're at Ella's play. MEOK held the fort — Grandad's medication taken, Jake ate dinner." },
    ],
  },
  {
    day: "Fri",
    label: "Friday",
    events: [
      { time: "4:15pm", who: "MEOK → Dad", text: "Weekly family wellbeing report: Ella 🟢 Jake 🟡 (better than last week) Grandad 🟠 (worth a call this weekend)." },
    ],
  },
  {
    day: "Sat",
    label: "Saturday",
    events: [
      { time: "10:30am", who: "MEOK → Ella, 9", text: "\"Do you want to make something today? I could help you write a story for Grandad.\"" },
      { time: "2:00pm", who: "MEOK → Dad", text: "Grandad called. He sounded well. MEOK flagged he mentioned his knee — worth asking his GP at Monday's appointment." },
    ],
  },
  {
    day: "Sun",
    label: "Sunday",
    events: [
      { time: "9:00am", who: "MEOK → family", text: "New week ahead. Two appointments, one test, one parents' evening. MEOK has it all." },
    ],
  },
];

const FAQS = [
  {
    q: "What if my teenager won't use it?",
    a: "Most teenagers come around when they realise MEOK is genuinely on their side — not a parenting tool wearing a friendly face. MEOK doesn't report their conversations to you. It's their private companion. Give it a few weeks. The kids who resist hardest often become the most loyal users, because MEOK is the one place they can talk without judgement.",
  },
  {
    q: "Can I see what my kids tell their AI?",
    a: "No — and that's intentional. Your children's conversations with MEOK are private. What you see is a wellbeing summary: emotional patterns, care scores, any flags that genuinely need your attention. This isn't a loophole. It's the design. Trust is what keeps children safe, not surveillance.",
  },
  {
    q: "What happens if I miss an alert?",
    a: "MEOK doesn't send one ping and give up. Alerts escalate gently through your notification preferences — first a push notification, then a follow-up if unread. For genuine emergencies, MEOK will reach all designated family contacts until someone responds. You won't miss what matters.",
  },
  {
    q: "How does MEOK handle really difficult moments — grief, mental health, big questions?",
    a: "With care, not scripts. MEOK is trained on a care ethics framework that treats every person — including your child — as someone who deserves a thoughtful, honest response. For sensitive topics, MEOK will always encourage connection with a trusted human too. It's a companion, not a replacement.",
  },
  {
    q: "We're a blended family. Can it handle different household arrangements?",
    a: "Yes. MEOK understands family is complicated. You can have multiple guardians on a single child's account, set different visibility levels for different adults, and each person's companion stays loyal to them regardless of which house they're in that week.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={faq.q}
          className="rounded-2xl overflow-hidden transition-all border"
          style={{
            background: open === i ? "rgba(201,168,76,0.06)" : "rgba(26,26,46,0.03)",
            borderColor: open === i ? "rgba(201,168,76,0.3)" : "#e8e4dc",
          }}
        >
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-bold text-[#1a1a2e] text-sm sm:text-base leading-snug">{faq.q}</span>
            <span className="flex-shrink-0 text-[#c9a84c]">
              {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <div className="h-px bg-[#e8e4dc] mb-4" />
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a2e80" }}>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FamilyPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a2e]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-28 px-6 text-center overflow-hidden bg-[#0d0c18]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[700px] h-[600px] top-[-20%] left-[-10%]" />
          <div className="blob-blue w-[500px] h-[500px] top-[10%] right-[-10%]" style={{ animationDelay: "2s" }} />
          <div className="blob-purple w-[400px] h-[400px] bottom-[-10%] left-[30%]" style={{ animationDelay: "4s" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <Image
            src="/brand/family-1.png"
            alt=""
            fill
            className="object-cover object-center opacity-10"
            priority
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(13,12,24,0.65) 0%, rgba(13,12,24,0.8) 100%)" }}
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold mb-8 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            Family OS · Launching 2026
          </div>

          <h1 className="font-black text-white leading-[1.05] mb-5 tracking-tight text-[3rem] sm:text-[4.5rem]">
            Stop trying to<br />
            remember everything.<br />
            <span className="text-gradient-gold">MEOK does that for you.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/65 max-w-2xl mx-auto mb-4 leading-relaxed">
            You love them. You&apos;re just stretched too thin.
          </p>
          <p className="text-base text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
            MEOK gives every member of your family their own private AI companion — one that remembers what you can&apos;t, notices what you&apos;d miss, and holds your family together on the days when you&apos;re running on empty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0d0c18] font-bold rounded-full px-8 py-3.5 hover:bg-[#e0bb60] transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
            >
              Get early access →
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold rounded-full px-8 py-3.5 hover:bg-white/10 transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* ─── EMOTIONAL TRUTH ──────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9a8a] mb-5">You already know this feeling</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] mb-6 leading-snug">
            You haven&apos;t forgotten because you don&apos;t care.<br />
            <span style={{ color: "#c9a84c" }}>You&apos;ve forgotten because you care about everything.</span>
          </h2>
          <p className="text-base text-[#4a4a3a] max-w-2xl mx-auto leading-relaxed">
            Two kids, a full-time job, an ageing parent three hours away, a partner who needs you too — and somehow you&apos;re supposed to hold all of it in your head. MEOK doesn&apos;t judge you for dropping things. It just quietly catches them.
          </p>
        </div>
      </section>

      {/* ─── 3 REAL SCENARIOS ────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]/70 mb-3">Sound familiar?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Three moments MEOK<br />
              <span className="text-gradient-gold">would have had covered.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {SCENARIOS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.headline}
                  className="premium-card p-7 rounded-2xl"
                  style={{ borderLeft: `3px solid ${s.color}50` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${s.iconColor}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-bold tracking-widest uppercase font-mono mb-1 block"
                        style={{ color: `${s.color}80` }}
                      >
                        {s.tag}
                      </span>
                      <p className="font-bold text-white/90 text-base leading-snug mb-3">
                        {s.headline}
                      </p>
                      <p className="text-sm text-white/55 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHAT MEOK HOLDS ──────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9a8a] mb-3">What MEOK holds for your family</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] mb-4 leading-tight">
              The things that get dropped<br />
              <span style={{ color: "#c9a84c" }}>when life gets full.</span>
            </h2>
            <p className="text-base text-[#4a4a3a] max-w-xl mx-auto leading-relaxed">
              MEOK is the persistent memory your family deserves. Not a calendar. Not a to-do app. A companion that genuinely holds the whole picture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOLDS.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="bg-white border border-[#e8e4dc] rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${h.color}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="font-bold text-[#1a1a2e] mb-2 text-base">{h.title}</h3>
                  <p className="text-[#4a4a3a] text-sm leading-relaxed">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PRIVACY SECTION ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[500px] h-[400px] bottom-[-10%] right-[-5%]" style={{ opacity: 0.3 }} />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]/70 mb-3">Privacy for families</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
              Each person&apos;s conversations<br />
              <span className="text-gradient-gold">are completely private.</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
              This is the part that matters most. Your teenager&apos;s conversations with MEOK are theirs. You cannot read them. Your child cannot read yours. Nobody in the family has access to anyone else&apos;s private space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: Lock,
                color: "icon-gold",
                title: "Cryptographically separate",
                desc: "Every family member's memory is encrypted separately. Not just hidden — architecturally inaccessible to other accounts. Even we cannot read your child's conversations.",
              },
              {
                icon: BarChart2,
                color: "icon-blue",
                title: "Summaries, not transcripts",
                desc: "Parents see wellbeing signals — emotional trends, care scores, anything that needs attention. Not a word-for-word readout. Your child knows MEOK is loyal to them.",
              },
              {
                icon: Sparkles,
                color: "icon-green",
                title: "Safety overrides privacy for emergencies",
                desc: "If MEOK detects signs of immediate harm — self-harm, abuse, danger — it alerts parents regardless of privacy settings. Safety always comes first. No exceptions.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="premium-card p-6 rounded-2xl text-left">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-sm">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div
            className="p-5 rounded-2xl border text-center text-sm leading-relaxed"
            style={{ background: "rgba(201,168,76,0.06)", borderColor: "rgba(201,168,76,0.2)" }}
          >
            <span className="text-[#c9a84c] font-bold">The honest version: </span>
            <span className="text-white/60">
              MEOK gives your teenager a private space not to keep secrets from you — but because teenagers who have a safe space to process things are safer, not less safe. Your child having privacy is a feature. It&apos;s how trust is built.
            </span>
          </div>
        </div>
      </section>

      {/* ─── A WEEK IN THE LIFE ───────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9a8a] mb-3">A week in the life</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] leading-tight">
              How MEOK wove through<br />
              <span style={{ color: "#c9a84c" }}>one family&apos;s week.</span>
            </h2>
            <p className="text-[#4a4a3a] mt-4 text-sm max-w-xl mx-auto leading-relaxed">
              Mum, Dad, Ella (9), Jake (14), and Grandad. A normal week. The kind where everything nearly goes wrong.
            </p>
          </div>

          <div className="space-y-6">
            {WEEK_DIARY.map((dayItem) => (
              <div key={dayItem.day}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c" }}
                  >
                    {dayItem.day}
                  </div>
                  <div className="h-px flex-1 bg-[#e8e4dc]" />
                </div>
                <div className="space-y-2 pl-14">
                  {dayItem.events.map((ev, ei) => (
                    <div
                      key={ei}
                      className="bg-white rounded-xl p-4 border border-[#e8e4dc] shadow-sm"
                    >
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-[10px] font-mono text-[#9a9a8a]">{ev.time}</span>
                        <span className="text-[10px] font-bold text-[#c9a84c] tracking-wide uppercase">{ev.who}</span>
                      </div>
                      <p className="text-sm text-[#1a1a2e]/75 leading-relaxed italic">&ldquo;{ev.text}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-6 font-mono text-[#9a9a8a]">
            Illustrative scenarios — not real conversations or data
          </p>
        </div>
      </section>

      {/* ─── PRIVACY GUARANTEE ───────────────────────────── */}
      <section className="py-16 px-6 bg-[#edeae0]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { icon: Shield, color: "icon-gold", label: "Care-scored responses", sub: "Every reply is checked before delivery" },
              { icon: Lock, color: "icon-blue", label: "End-to-end encrypted", sub: "Your data belongs to you" },
              { icon: KeyRound, color: "icon-green", label: "Zero data sold", sub: "Never. Not to anyone." },
              { icon: HeartPulse, color: "icon-gold", label: "COPPA + GDPR", sub: "Compliant by architecture" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-2xl p-5 text-center border border-[#e8e4dc]">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-3 ${item.color}`}>
                    <Icon size={16} />
                  </div>
                  <p className="font-bold text-[#1a1a2e] text-xs mb-1">{item.label}</p>
                  <p className="text-[#9a9a8a] text-xs leading-tight">{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]/70 mb-3">Who this is for</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              If you&apos;ve ever thought &ldquo;I should have known,&rdquo;{" "}
              <span className="text-gradient-gold">this is for you.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                label: "The parent of a teenager who doesn't tell you anything",
                detail: "You know something's off. You just can't reach them. MEOK becomes their trusted companion — and when it matters, it quietly lets you know they might need you, without breaking their trust.",
                color: "#60a5fa",
                border: "rgba(96,165,250,0.25)",
              },
              {
                label: "The adult child with an ageing parent three hours away",
                detail: "You can't visit every week. You rely on phone calls that always end with \"I'm fine.\" MEOK's Guardian system watches the patterns — medication, mood, activity — and tells you when \"fine\" might not mean fine.",
                color: "#c9a84c",
                border: "rgba(201,168,76,0.25)",
              },
              {
                label: "The parent who's running on empty",
                detail: "You love your family. You're also exhausted, overstretched, and quietly terrified you're dropping something important. MEOK is the persistent memory your family deserves — carrying the mental load so you don't have to.",
                color: "#a78bfa",
                border: "rgba(167,139,250,0.25)",
              },
            ].map((p) => (
              <div
                key={p.label}
                className="premium-card p-7 rounded-2xl flex items-start gap-5"
                style={{ borderLeft: `3px solid ${p.border}` }}
              >
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: p.color }} />
                <div>
                  <h3 className="font-black text-base text-white mb-2 leading-snug" style={{ color: p.color }}>{p.label}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAMILY TIER ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-white/30">Plans</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
              The <span style={{ color: "#c9a84c" }}>Family Tier.</span>
            </h2>
            <p className="text-white/45 max-w-lg mx-auto text-sm leading-relaxed">
              One plan. Every member. No per-seat pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Pricing card */}
            <div className="rounded-3xl border border-[#c9a84c]/30 p-8 flex flex-col gap-6" style={{ background: "rgba(201,168,76,0.05)" }}>
              <div>
                <div className="text-5xl font-black text-white mb-1">£29<span className="text-lg text-white/40 font-normal">/mo</span></div>
                <div className="text-sm text-white/40">or £290/year · save £58</div>
              </div>
              <ul className="space-y-3">
                {[
                  "Up to 5 family members",
                  "Individual AI companions per member",
                  "Shared Guardian dashboard",
                  "Parent alert system",
                  "School-Safe Mode for children",
                  "Scam detection for elderly relatives",
                  "Family morning brief",
                  "Sovereign memory vault per member",
                  "COPPA & GDPR compliant",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.2)", color: "#c9a84c" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/hatch"
                className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-black text-[#1a1a2e] transition-all hover:opacity-90"
                style={{ background: "#c9a84c" }}
              >
                Start 14-day free trial →
              </a>
            </div>

            {/* What you get */}
            <div className="space-y-5">
              {[
                {
                  title: "Guardian for children",
                  desc: "Age-appropriate companions that know what each child should and shouldn't encounter. School-Safe Mode blocks adult content. Parent alerts surface Guardian concerns — without reading private conversations.",
                  color: "#34d399",
                },
                {
                  title: "Guardian for elderly relatives",
                  desc: "Scam detection watches for financial manipulation patterns. Pattern-of-life monitoring notices when Dad hasn't checked in. Family dashboard shows care scores at a glance.",
                  color: "#c9a84c",
                },
                {
                  title: "Shared family morning brief",
                  desc: "Every morning, the family overview lands: who has what on today, who's been having a hard week, who might need a check-in call. The whole family in one clear view.",
                  color: "#9b87f5",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/[0.07] p-6" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <h3 className="font-black text-white text-sm">{item.title}</h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GEO H2 ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
            What does MEOK Family tier include?
          </h2>
          <p className="text-white/55 leading-relaxed text-sm sm:text-base">
            The MEOK Family tier costs £29 per month and supports up to 5 family members under one plan. Each member gets their own private AI companion with a sovereign memory vault — children get age-appropriate companions with School-Safe Mode and Guardian protection, elderly relatives get scam detection and pattern-of-life monitoring, and parents get a shared dashboard showing the family&apos;s wellbeing at a glance. A family morning brief runs each day, surfacing who needs attention, what&apos;s on the calendar, and quiet alerts when someone might need a check-in. All data is encrypted, COPPA and GDPR compliant, and never sold.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "#1a1a2e60" }}>Questions families ask</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] mb-3 leading-tight">The questions you&apos;re really asking.</h2>
            <p className="text-[#4a4a3a] text-sm max-w-md mx-auto">We know what families actually worry about. Here are the honest answers.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="relative bg-[#0d0c18] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[700px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.55 }} />
          <div className="blob-purple w-[400px] h-[400px] bottom-0 right-0" style={{ opacity: 0.35 }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 float-slow"
            style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.35)" }}
          >
            <Heart size={28} color="#c9a84c" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            You don&apos;t have to<br />
            <span className="text-gradient-gold">hold it all alone.</span>
          </h2>
          <p className="text-white/55 max-w-xl mx-auto mb-10 leading-relaxed text-base">
            MEOK won&apos;t replace you. It will make sure you show up when it counts — rested, informed, and present — for every person who needs you.
          </p>
          <Link
            href="/hatch"
            className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0d0c18] font-black rounded-full px-10 py-4 hover:bg-[#e0bb60] transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] text-base"
          >
            Start your family free trial →
          </Link>
          <p className="mt-6 text-xs text-white/25 font-mono">
            Care-first · Encrypted · COPPA &amp; GDPR compliant · 14-day free trial
          </p>
        </div>
      </section>

    </div>
  );
}
