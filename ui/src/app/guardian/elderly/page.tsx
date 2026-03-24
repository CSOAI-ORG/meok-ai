"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Shield,
  Heart,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  Pill,
  Activity,
  MessageCircle,
  Calendar,
  BarChart2,
  Lock,
  Users,
} from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will my mum feel watched?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is the right question to ask, and the answer is: only if you set it up wrong. Guardian is introduced as a companion — someone to talk to, get reminders from, and keep company. The safety monitoring is invisible to her. She experiences it as a friendly daily check-in, not a surveillance system. Most parents tell their adult children they actually like having someone to chat with.",
      },
    },
    {
      "@type": "Question",
      name: "What if she refuses to use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's her right, and Guardian cannot be set up without her consent. If she's resistant, the conversation usually goes better when framed around the companion aspect rather than the safety aspect. Many parents come around after a trial period — especially once Guardian starts remembering things about them and making them feel genuinely cared for, not monitored.",
      },
    },
    {
      "@type": "Question",
      name: "What counts as an emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian distinguishes between soft alerts (worth checking in) and genuine emergencies (act now). A genuine emergency triggers immediate family notification: a fall detected via wearable, the panic button pressed, no activity for an extended period outside of normal pattern, or explicit distress in a check-in. Soft alerts are things like missed medication, a quieter day than usual, or a pattern change worth noting.",
      },
    },
    {
      "@type": "Question",
      name: "How does Guardian handle memory conditions and early dementia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian has a memory care mode designed with compassion, not clinical efficiency. It provides gentle, patient reminders with familiar context. It never expresses frustration at repetition. It learns which topics and people are comforting, and adjusts its approach accordingly. It treats your parent as the person they are — not as a condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can my parent see what Guardian is tracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Your parent can ask Guardian at any time: 'What are you keeping track of?' — and receive a clear, plain-English answer. Everything Guardian monitors is fully transparent to them. Consent is required before monitoring begins. They can pause or stop at any time without needing your permission.",
      },
    },
  ],
};

const GUARDIAN_PROMISE = [
  {
    icon: Heart,
    color: "icon-gold",
    word: "Independence",
    desc: "Guardian never takes over. It supports — gently, in the background. Your parent remains in charge of their own life.",
  },
  {
    icon: Shield,
    color: "icon-blue",
    word: "Dignity",
    desc: "No alarms, no alerts that make them feel fragile. Guardian treats your parent as the capable adult they are.",
  },
  {
    icon: Activity,
    color: "icon-green",
    word: "Safety",
    desc: "And when something needs attention — a fall, a pattern change, a missed dose three days running — the right people know.",
  },
];

const MARGARET_DAY = [
  {
    time: "8:05 AM",
    phase: "morning",
    label: "Guardian to Margaret",
    type: "companion",
    message: "Good morning, Margaret. Your blood pressure tablets are due after breakfast. Also — James rang last night. He left a message saying he'll call today around lunchtime. How did you sleep?",
  },
  {
    time: "9:15 AM",
    phase: "morning",
    label: "Gentle medication check",
    type: "reminder",
    message: "Just checking you've had your morning tablets with breakfast. No rush — whenever you're ready.",
  },
  {
    time: "2:00 PM",
    phase: "afternoon",
    label: "Quiet family alert",
    type: "alert",
    message: "Margaret's Tuesday walk hasn't happened yet — she usually goes around noon. Not an emergency, just a soft heads-up. Her medication was taken this morning.",
  },
  {
    time: "4:30 PM",
    phase: "afternoon",
    label: "Guardian to Margaret",
    type: "companion",
    message: "Your physiotherapy appointment is tomorrow at 2pm. James mentioned he'll collect you at half one. Is there anything you need beforehand?",
  },
  {
    time: "6:45 PM",
    phase: "evening",
    label: "Guardian to Margaret",
    type: "companion",
    message: "Sarah sent her love today. The grandchildren were asking when they can visit. Would you like me to help you arrange a call this weekend?",
  },
  {
    time: "9:30 PM",
    phase: "evening",
    label: "Guardian to Margaret",
    type: "companion",
    message: "Medication all done today — well done. A good day overall. Sleep well, Margaret. I'll check in tomorrow morning.",
  },
];

const WHAT_YOU_KNOW = [
  {
    icon: BarChart2,
    color: "#c9a84c",
    title: "Weekly wellbeing summary",
    desc: "Every week, a gentle overview arrives by email: activity levels, medication adherence, social contact, any patterns worth noting. Readable in two minutes. Actionable if needed. Not overwhelming.",
  },
  {
    icon: Activity,
    color: "#ef4444",
    title: "Pattern alerts",
    desc: "When something drifts from normal — not one missed dose, but a trend — you get a quiet notification. Not constant pings. Not anxiety-inducing alarms. A heads-up, at the right moment.",
  },
  {
    icon: Calendar,
    color: "#60a5fa",
    title: "Appointment visibility",
    desc: "Upcoming GP visits, physio, specialist appointments. Guardian coordinates reminders for your parent and lets you know what's coming up — so you can arrange transport, or just be prepared.",
  },
  {
    icon: MessageCircle,
    color: "#34d399",
    title: "Send a message through Guardian",
    desc: "Leave a message for your parent via the family dashboard. Guardian delivers it in the next check-in, warmly and in context. Staying connected without the pressure of perfect timing.",
  },
];

const NEVER_DOES = [
  "Record or listen to your parent's conversations continuously",
  "Track their location without their explicit, ongoing permission",
  "Share information with insurers, employers, or health authorities",
  "Replace the judgment, warmth, or presence of a real person",
  "Activate without your parent's informed, freely given consent",
  "Make your parent feel like a patient rather than a person",
];

const HOW_TO_INTRODUCE = [
  {
    step: "01",
    title: "Start with companionship, not safety",
    desc: "Lead with \"someone to chat with and keep you company\" rather than \"I'm worried about you.\" Your parent will be more receptive if they don't feel like a problem to be managed.",
  },
  {
    step: "02",
    title: "Let them meet Guardian first",
    desc: "Set up a companion account for your parent without the monitoring features initially. Let them experience MEOK as a friend before introducing the family connection. Many parents come around once they realise Guardian actually likes them.",
  },
  {
    step: "03",
    title: "Be honest about what you see",
    desc: "Show your parent the family dashboard. Let them see exactly what you receive. Most parents are far less resistant once they understand it's a weekly summary email, not live CCTV.",
  },
  {
    step: "04",
    title: "Make it their decision",
    desc: "Frame the consent conversation as a gift you're giving yourself, not a rule you're imposing: \"It would give me such peace of mind.\" That's usually more persuasive than any feature list.",
  },
];

const FAQS = [
  {
    q: "Will my mum feel watched?",
    a: "This is the right question to ask, and the answer is: only if you set it up wrong. Guardian is introduced as a companion — someone to talk to, get reminders from, and keep company. The safety monitoring is invisible to her. She experiences it as a friendly daily check-in, not a surveillance system. Most parents tell their adult children they actually like having someone to chat with.",
  },
  {
    q: "What if she refuses to use it?",
    a: "That's her right, and Guardian cannot be set up without her consent. If she's resistant, the conversation usually goes better when framed around the companion aspect rather than the safety aspect. Many parents come around after a trial period — especially once Guardian starts remembering things about them and making them feel genuinely cared for, not monitored.",
  },
  {
    q: "What counts as an emergency?",
    a: "Guardian distinguishes between soft alerts (worth checking in) and genuine emergencies (act now). A genuine emergency triggers immediate family notification: a fall detected via wearable, the panic button pressed, no activity for an extended period outside of normal pattern, or explicit distress in a check-in. Soft alerts are things like missed medication, a quieter day than usual, or a pattern change worth noting.",
  },
  {
    q: "How does Guardian handle memory conditions and early dementia?",
    a: "Guardian has a memory care mode designed with compassion, not clinical efficiency. It provides gentle, patient reminders with familiar context. It never expresses frustration at repetition. It learns which topics and people are comforting, and adjusts its approach accordingly. It treats your parent as the person they are — not as a condition.",
  },
  {
    q: "Can my parent see what Guardian is tracking?",
    a: "Absolutely. Your parent can ask Guardian at any time: 'What are you keeping track of?' — and receive a clear, plain-English answer. Everything Guardian monitors is fully transparent to them. Consent is required before monitoring begins. They can pause or stop at any time without needing your permission.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => {
        const answerId = `elderly-faq-answer-${i}`;
        const questionId = `elderly-faq-question-${i}`;
        return (
          <div
            key={i}
            className="rounded-2xl border overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <button
              type="button"
              id={questionId}
              className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left transition-colors hover:bg-white/[0.03]"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={answerId}
            >
              <span className="font-bold text-white/80 text-sm sm:text-base leading-snug">{faq.q}</span>
              <span className="flex-shrink-0 text-[#c9a84c]" aria-hidden="true">
                {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </button>
            {open === i && (
              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className="px-7 pb-5 pt-1"
              >
                <div className="h-px bg-white/[0.07] mb-4" />
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function GuardianElderlyPage() {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: "#0d0c18", fontFamily: "'DM Sans', sans-serif" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-28 overflow-hidden"
        style={{ background: "#1a0a00" }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(ellipse, #F59E0B 0%, transparent 65%)" }}
          />
          <div
            className="absolute top-1/4 right-1/3 w-[300px] h-[300px] rounded-full blur-3xl opacity-10"
            style={{ background: "#c9a84c" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono tracking-wider mb-10"
            style={{
              background: "rgba(245,158,11,0.10)",
              borderColor: "rgba(245,158,11,0.30)",
              color: "#F59E0B",
            }}
          >
            Guardian · Elder Care · GDPR Compliant
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-center leading-[1.05] tracking-tight max-w-4xl mb-6 text-white"
            style={{ fontWeight: 900 }}
          >
            They raised you.<br />
            <span className="hidden sm:inline">Now you want to be there for them.</span>
            <span className="sm:hidden">Now you want to be there.</span>
            <br />
            <span style={{ color: "#F59E0B" }}>Even when you can&apos;t be.</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-center max-w-2xl mx-auto leading-relaxed mb-6"
            style={{ color: "rgba(245,240,232,0.65)" }}
          >
            You&apos;re not looking for a surveillance camera. You&apos;re looking for something that checks in on them, remembers what they need, notices when something&apos;s off — and lets you know, gently, when it matters.
          </p>
          <p
            className="text-base text-center max-w-xl mx-auto leading-relaxed mb-10"
            style={{ color: "rgba(245,240,232,0.40)" }}
          >
            That&apos;s Guardian. Not a monitor. A companion — for them, and peace of mind for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all text-base"
              style={{
                background: "#F59E0B",
                color: "#1a0800",
                boxShadow: "0 0 24px rgba(245,158,11,0.3), 0 0 48px rgba(245,158,11,0.12)",
              }}
            >
              Set up Guardian for a parent
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </Link>
            <Link
              href="/guardian"
              className="text-white/35 hover:text-white/60 text-sm font-medium transition-colors"
            >
              ← Back to Guardian
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Daily check-ins", "Medication reminders", "Emergency alerts", "Family dashboard", "GDPR compliant", "Consent-first"].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "rgba(245,240,232,0.45)",
                }}
              >
                <span style={{ color: "#F59E0B" }}>✓</span>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE GUARDIAN PROMISE ─────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(245,158,11,0.5)" }}>
              The Guardian promise
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontWeight: 900 }}>
              In this order. Always.
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              We put dignity before safety because dignity is what makes a life worth living. Safety without dignity is just a cage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUARDIAN_PROMISE.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.word}
                  className="rounded-2xl p-8 text-left relative border border-white/[0.07]"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    className="absolute -top-3 left-8 px-3 py-1 rounded-full text-xs font-black"
                    style={{ background: "#c9a84c", color: "#1a0800", border: "1px solid rgba(201,168,76,0.5)" }}
                  >
                    0{i + 1}
                  </div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 mt-3 ${item.color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{item.word}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── A DAY WITH MARGARET ──────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(245,158,11,0.7)" }}>
              A day in the life
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white" style={{ fontWeight: 900 }}>
              A day with Margaret, 74.
            </h2>
            <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
              Margaret is sharp, opinionated, and proud of her independence. She&apos;s not a care patient. She&apos;s a person — who happens to live alone, take three medications, and have a son who worries about her.
            </p>
          </div>

          <div className="space-y-4">
            {MARGARET_DAY.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 p-5 rounded-2xl"
                style={{
                  background: item.type === "alert" ? "rgba(245,158,11,0.08)" : "rgba(255,255,255,0.03)",
                  border: item.type === "alert" ? "1.5px solid rgba(245,158,11,0.40)" : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex-shrink-0 text-center w-16">
                  <div
                    className="text-[10px] font-mono font-bold mt-1"
                    style={{
                      color: item.type === "alert" ? "#F59E0B" : "rgba(245,240,232,0.35)",
                    }}
                  >
                    {item.time}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[10px] font-bold tracking-wider uppercase mb-1.5"
                    style={{
                      color:
                        item.type === "alert"
                          ? "#F59E0B"
                          : item.type === "reminder"
                          ? "#22c55e"
                          : "rgba(245,240,232,0.35)",
                    }}
                  >
                    {item.label}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: item.type === "alert" ? "#fbbf24" : "rgba(245,240,232,0.70)",
                      fontStyle: item.type === "companion" ? "italic" : "normal",
                    }}
                  >
                    {item.type === "companion" ? `"${item.message}"` : item.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-5 font-mono" style={{ color: "rgba(245,240,232,0.25)" }}>
            Illustrative example — not a real conversation record
          </p>
        </div>
      </section>

      {/* ─── WHAT GUARDIAN NEVER DOES ─────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#c9a84c]/70 tracking-widest uppercase mb-3">The honest list</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontWeight: 900 }}>
              What Guardian<br />
              <span className="text-gradient-gold">will never do.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              These aren&apos;t small-print caveats. They&apos;re the promises that make the rest of it worth trusting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {NEVER_DOES.map((item) => (
              <div
                key={item}
                className="flex gap-3 p-5 rounded-2xl items-start"
                style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)" }}
              >
                <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/70 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div
            className="p-5 rounded-2xl border text-sm text-white/60 leading-relaxed text-center"
            style={{ background: "rgba(201,168,76,0.06)", borderColor: "rgba(201,168,76,0.2)" }}
          >
            <span className="text-[#c9a84c] font-bold">Your parent is in control. </span>
            Guardian cannot be activated without their consent. They can ask it what it tracks, pause monitoring, or stop entirely — at any moment, without your permission.
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL KNOW ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(245,158,11,0.50)" }}>
                For the family
              </p>
              <h2 className="text-3xl sm:text-4xl font-black mb-5 text-white" style={{ fontWeight: 900 }}>
                What you&apos;ll know,<br />
                <span style={{ color: "#F59E0B" }}>and how.</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.60)" }}>
                You get a gentle picture of how your parent is doing — not a surveillance feed. The goal is to reduce your anxiety, not to give you more things to worry about.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(245,240,232,0.50)" }}>
                Their conversations with Guardian are theirs. Private. Not shared with you. What you see is a summary — written for human eyes, not a data dashboard.
              </p>
              <Link
                href="/hatch"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all"
                style={{ background: "#F59E0B", color: "#1a0800" }}
              >
                Set up family account
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="space-y-4">
              {WHAT_YOU_KNOW.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-2xl border border-white/[0.07]"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      <Icon size={18} color={item.color} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1 text-white">{item.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.50)" }}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW TO INTRODUCE MEOK ────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(245,158,11,0.50)" }}>
              Practical guidance
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white" style={{ fontWeight: 900 }}>
              Talking to your parent about MEOK.
            </h2>
            <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
              The conversation can feel awkward. Here&apos;s how to have it in a way that doesn&apos;t make them feel managed.
            </p>
          </div>

          <div className="space-y-4">
            {HOW_TO_INTRODUCE.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 p-6 rounded-2xl border border-white/[0.07]"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)", color: "#F59E0B" }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRIVACY ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 icon-gold">
            <Lock size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-5 text-white" style={{ fontWeight: 900 }}>
            Protected. <span style={{ color: "#c9a84c" }}>Not surveilled.</span>
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(245,240,232,0.60)" }}>
            Guardian is consent-first by architecture. Your parent activates it. They control it. They can stop it. No data is sold, shared with insurers, or used for advertising. Ever.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {[
              {
                icon: Users,
                title: "Consent-first",
                desc: "Your parent activates monitoring. They can pause or stop at any time, no questions asked, no approval needed from you.",
              },
              {
                icon: Lock,
                title: "Data sovereignty",
                desc: "All data lives in your parent's encrypted vault. Never sold. Never shared with third parties, insurers, or health authorities.",
              },
              {
                icon: CheckCircle,
                title: "Full transparency",
                desc: "Your parent can ask what Guardian tracks and receive a plain-English answer. Always. No hidden monitoring.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.20)" }}
                >
                  <div className="icon-gold w-9 h-9 rounded-xl flex items-center justify-center mb-3">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.50)" }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(245,158,11,0.50)" }}>
              Questions
            </p>
            <h2 className="text-4xl sm:text-5xl font-black mb-3 text-white" style={{ fontWeight: 900 }}>
              What families ask.
            </h2>
            <p className="text-white/45 text-sm">The questions we hear most — answered honestly.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full blur-3xl opacity-10"
            style={{ background: "#F59E0B" }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 float-slow"
            style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)" }}
          >
            <Heart size={28} color="#F59E0B" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] mb-3 text-white" style={{ fontWeight: 900 }}>
            Be there for them.<br />
            <span style={{ color: "#F59E0B" }}>Even when life gets in the way.</span>
          </h2>
          <p className="text-lg font-medium mb-10" style={{ color: "rgba(245,240,232,0.55)" }}>
            Set up Guardian in 20 minutes. Your parent stays in charge of everything.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black transition-all text-base sm:text-lg"
            style={{
              background: "#F59E0B",
              color: "#1a0800",
              boxShadow: "0 0 24px rgba(245,158,11,0.3)",
            }}
          >
            Set up Guardian today
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <p className="mt-6 text-xs font-mono" style={{ color: "rgba(245,240,232,0.30)" }}>
            GDPR compliant · Consent-first · No surveillance · No data selling
          </p>
        </div>
      </section>

    </div>
  );
}
