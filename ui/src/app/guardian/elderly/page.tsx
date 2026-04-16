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
  Brain,
  Clock,
} from "lucide-react";
import { Surface, IconOrb, FeatureCard, GlowText } from "@/components/design-system";

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
    word: "Independence",
    desc: "Guardian never takes over. It supports — gently, in the background. Your parent remains in charge of their own life.",
  },
  {
    icon: Shield,
    word: "Dignity",
    desc: "No alarms, no alerts that make them feel fragile. Guardian treats your parent as the capable adult they are.",
  },
  {
    icon: Activity,
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
    title: "Weekly wellbeing summary",
    desc: "Every week, a gentle overview arrives by email: activity levels, medication adherence, social contact, any patterns worth noting. Readable in two minutes. Actionable if needed. Not overwhelming.",
  },
  {
    icon: Activity,
    title: "Pattern alerts",
    desc: "When something drifts from normal — not one missed dose, but a trend — you get a quiet notification. Not constant pings. Not anxiety-inducing alarms. A heads-up, at the right moment.",
  },
  {
    icon: Calendar,
    title: "Appointment visibility",
    desc: "Upcoming GP visits, physio, specialist appointments. Guardian coordinates reminders for your parent and lets you know what's coming up — so you can arrange transport, or just be prepared.",
  },
  {
    icon: MessageCircle,
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
            className="rounded-2xl border border-white/[0.07] bg-white/[0.03] overflow-hidden"
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
    <div className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-gold absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-20" />
          <div className="blob-gold absolute top-1/4 right-1/3 h-[300px] w-[300px] opacity-10" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#2d9b8a]/30 bg-[#2d9b8a]/10 px-4 py-2 text-xs font-mono tracking-wider text-[#2d9b8a]">
            Guardian · Elder Care · GDPR Compliant
          </div>

          <h1 className="mb-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            They raised you.<br />
            <span className="hidden sm:inline">Now you want to be there for them.</span>
            <span className="sm:hidden">Now you want to be there.</span>
            <br />
            <GlowText variant="teal" as="span">Even when you can&apos;t be.</GlowText>
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-center text-lg leading-relaxed text-white/65 sm:text-xl">
            You&apos;re not looking for a surveillance camera. You&apos;re looking for something that checks in on them, remembers what they need, notices when something&apos;s off — and lets you know, gently, when it matters.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-center text-base leading-relaxed text-white/40">
            That&apos;s Guardian. Not a monitor. A companion — for them, and peace of mind for you.
          </p>

          <div className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 rounded-full bg-[#c9a84c] px-8 py-4 text-base font-bold text-[#0d0c18] transition-opacity hover:opacity-90"
            >
              Set up Guardian for a parent
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
            <Link
              href="/guardian"
              className="text-sm font-medium text-white/35 transition-colors hover:text-white/60"
            >
              ← Back to Guardian
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Daily check-ins", "Medication reminders", "Emergency alerts", "Family dashboard", "GDPR compliant", "Consent-first"].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-white/5 px-3 py-1.5 text-xs font-medium text-white/45"
              >
                <span className="text-[#2d9b8a]">✓</span>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE GUARDIAN PROMISE ─────────────────────────── */}
      <section className="bg-[#13121f] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/70">
              The Guardian promise
            </p>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              In this order. Always.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50">
              We put dignity before safety because dignity is what makes a life worth living. Safety without dignity is just a cage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {GUARDIAN_PROMISE.map((item, i) => {
              const Icon = item.icon;
              return (
                <Surface
                  key={item.word}
                  variant="elevated"
                  glow="teal"
                  className="relative p-8 text-left"
                >
                  <div className="absolute -top-3 left-8 rounded-full border border-[#c9a84c]/50 bg-[#c9a84c] px-3 py-1 text-xs font-black text-[#0d0c18]">
                    0{i + 1}
                  </div>
                  <div className="mb-5 mt-3">
                    <IconOrb icon={Icon} variant="teal" size="lg" />
                  </div>
                  <h3 className="mb-3 text-2xl font-black text-white">{item.word}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{item.desc}</p>
                </Surface>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── A DAY WITH MARGARET ──────────────────────────── */}
      <section className="border-y border-white/[0.05] bg-[#0d0c18] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/70">
              A day in the life
            </p>
            <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
              A day with Margaret, 74.
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/55">
              Margaret is sharp, opinionated, and proud of her independence. She&apos;s not a care patient. She&apos;s a person — who happens to live alone, take three medications, and have a son who worries about her.
            </p>
          </div>

          <div className="space-y-4">
            {MARGARET_DAY.map((item, i) => (
              <Surface
                key={i}
                variant="elevated"
                className={`p-5 ${
                  item.type === "alert"
                    ? "border-[#e07340]/40 bg-[#e07340]/[0.08]"
                    : item.type === "reminder"
                    ? "border-[#22c55e]/40 bg-[#22c55e]/[0.08]"
                    : ""
                }`}
              >
                <div className="flex gap-5">
                  <div className="w-16 flex-shrink-0 text-center">
                    <div
                      className={`mt-1 text-[10px] font-mono font-bold ${
                        item.type === "alert" ? "text-[#e07340]" : "text-white/35"
                      }`}
                    >
                      {item.time}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div
                      className={`mb-1.5 text-[10px] font-bold uppercase tracking-wider ${
                        item.type === "alert"
                          ? "text-[#e07340]"
                          : item.type === "reminder"
                          ? "text-[#22c55e]"
                          : "text-white/35"
                      }`}
                    >
                      {item.label}
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        item.type === "alert" ? "text-[#fbbf24]" : "text-white/70"
                      } ${item.type === "companion" ? "italic" : ""}`}
                    >
                      {item.type === "companion" ? `"${item.message}"` : item.message}
                    </p>
                  </div>
                </div>
              </Surface>
            ))}
          </div>
          <p className="mt-5 text-center text-xs font-mono text-white/25">
            Illustrative example — not a real conversation record
          </p>
        </div>
      </section>

      {/* ─── WHAT GUARDIAN NEVER DOES ─────────────────────── */}
      <section className="bg-[#13121f] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#c9a84c]/70">
              The honest list
            </p>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              What Guardian<br />
              <GlowText variant="teal" as="span">will never do.</GlowText>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50">
              These aren&apos;t small-print caveats. They&apos;re the promises that make the rest of it worth trusting.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {NEVER_DOES.map((item) => (
              <Surface
                key={item}
                variant="elevated"
                className="flex items-start gap-3 bg-red-500/[0.04] p-5 border-red-500/15"
              >
                <XCircle size={16} className="mt-0.5 flex-shrink-0 text-red-400" />
                <p className="text-sm leading-relaxed text-white/70">{item}</p>
              </Surface>
            ))}
          </div>

          <Surface
            variant="glass"
            className="p-5 text-center text-sm leading-relaxed text-white/60"
          >
            <span className="font-bold text-[#c9a84c]">Your parent is in control. </span>
            Guardian cannot be activated without their consent. They can ask it what it tracks, pause monitoring, or stop entirely — at any moment, without your permission.
          </Surface>
        </div>
      </section>

      {/* ─── WHAT YOU&apos;LL KNOW ─────────────────────────────── */}
      <section className="bg-[#13121f] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/70">
                For the family
              </p>
              <h2 className="mb-5 text-3xl font-black text-white sm:text-4xl">
                What you&apos;ll know,<br />
                <GlowText variant="teal" as="span">and how.</GlowText>
              </h2>
              <p className="mb-6 text-base leading-relaxed text-white/60">
                You get a gentle picture of how your parent is doing — not a surveillance feed. The goal is to reduce your anxiety, not to give you more things to worry about.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-white/50">
                Their conversations with Guardian are theirs. Private. Not shared with you. What you see is a summary — written for human eyes, not a data dashboard.
              </p>
              <Link
                href="/hatch"
                className="group inline-flex items-center gap-2 rounded-full bg-[#c9a84c] px-7 py-3.5 text-sm font-bold text-[#0d0c18] transition-opacity hover:opacity-90"
              >
                Set up family account
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="space-y-4">
              {WHAT_YOU_KNOW.map((item) => (
                <FeatureCard
                  key={item.title}
                  title={item.title}
                  description={item.desc}
                  icon={item.icon}
                  iconVariant="teal"
                  glow="teal"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW TO INTRODUCE MEOK ────────────────────────── */}
      <section className="border-t border-white/[0.05] bg-[#0d0c18] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/70">
              Practical guidance
            </p>
            <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
              Talking to your parent about MEOK.
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/55">
              The conversation can feel awkward. Here&apos;s how to have it in a way that doesn&apos;t make them feel managed.
            </p>
          </div>

          <div className="space-y-4">
            {HOW_TO_INTRODUCE.map((step) => (
              <Surface
                key={step.step}
                variant="elevated"
                glow="teal"
                className="flex gap-5 p-6"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#2d9b8a]/25 bg-[#2d9b8a]/10 text-sm font-black text-[#2d9b8a]">
                  {step.step}
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{step.desc}</p>
                </div>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRIVACY ──────────────────────────────────────── */}
      <section className="bg-[#13121f] px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <IconOrb icon={Lock} variant="teal" size="lg" />
          </div>
          <h2 className="mb-5 text-3xl font-black text-white sm:text-4xl">
            Protected. <GlowText variant="teal" as="span">Not surveilled.</GlowText>
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/60">
            Guardian is consent-first by architecture. Your parent activates it. They control it. They can stop it. No data is sold, shared with insurers, or used for advertising. Ever.
          </p>
          <div className="grid grid-cols-1 gap-5 text-left sm:grid-cols-3">
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
            ].map((item) => (
              <Surface
                key={item.title}
                variant="elevated"
                glow="teal"
                className="p-6"
              >
                <div className="mb-3">
                  <IconOrb icon={item.icon} variant="teal" size="md" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{item.desc}</p>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────── */}
      <section className="bg-[#13121f] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/70">
              Questions
            </p>
            <h2 className="mb-3 text-4xl font-black text-white sm:text-5xl">
              What families ask.
            </h2>
            <p className="text-sm text-white/45">The questions we hear most — answered honestly.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── CORE GUARDIAN FEATURES ──────────────────────── */}
      <section className="border-t border-white/[0.05] bg-[#0d0c18] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/70">
              Intelligent care
            </p>
            <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
              Built around what matters most.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                icon: Brain,
                title: "Cognitive Pattern Tracking",
                desc: "Guardian gently tracks conversational patterns over time — word recall, topic repetition, confusion frequency. Not to diagnose, but to notice when something shifts so you can act early.",
              },
              {
                icon: Clock,
                title: "Transaction Delay Suggestions",
                desc: "If your parent mentions a large purchase or unusual financial request, Guardian can suggest they pause and talk it through with family first. A gentle safeguard against scams and pressure tactics.",
              },
              {
                icon: Users,
                title: "Caregiver Dashboard",
                desc: "A calm, readable overview for family members and professional carers. Medication adherence, activity trends, mood patterns, and upcoming appointments — all in one place.",
              },
              {
                icon: MessageCircle,
                title: "Daily Check-in Reminders",
                desc: "Warm, personalised check-ins at times that suit your parent. Not clinical pings — genuine conversations that happen to surface how they are really doing.",
              },
            ].map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.desc}
                icon={feature.icon}
                iconVariant="teal"
                glow="teal"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── EMERGENCY CONTACTS ────────────────────────── */}
      <section className="bg-[#13121f] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <IconOrb icon={Users} variant="teal" size="lg" />
          </div>
          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
            Set up trusted contacts who receive alerts
          </h2>
          <p className="mb-6 text-base leading-relaxed text-white/55">
            Choose family members, neighbours, or carers who should be notified when Guardian detects something that needs attention. Soft alerts go to your inner circle. Emergencies go to everyone on the list — instantly.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-white/40">
            Your parent approves each contact. No one is added without their knowledge. They can review and change the list at any time.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-2 rounded-full bg-[#c9a84c] px-8 py-4 text-base font-bold text-[#0d0c18] transition-opacity hover:opacity-90"
          >
            Protect someone you love
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d0c18] px-6 py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-gold absolute top-1/2 left-1/2 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-10" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <IconOrb icon={Heart} variant="teal" size="lg" />
          </div>
          <h2 className="mb-3 text-4xl font-black leading-[1.05] text-white sm:text-5xl">
            Be there for them.<br />
            <GlowText variant="teal" as="span">Even when life gets in the way.</GlowText>
          </h2>
          <p className="mb-10 text-lg font-medium text-white/55">
            Set up Guardian in 20 minutes. Your parent stays in charge of everything.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 rounded-full bg-[#c9a84c] px-10 py-4 text-base font-black text-[#0d0c18] transition-opacity hover:opacity-90 sm:text-lg"
          >
            Set up Guardian today
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <p className="mt-6 text-xs font-mono text-white/30">
            GDPR compliant · Consent-first · No surveillance · No data selling
          </p>
        </div>
      </section>

    </div>
  );
}
