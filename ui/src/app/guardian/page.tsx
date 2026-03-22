"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Brain,
  Bell,
  HeartPulse,
  Lock,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  Pill,
  Activity,
  AlertTriangle,
  MessageCircle,
  Users,
  Heart,
  Eye,
  EyeOff,
} from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://meok.ai/guardian#webpage",
      url: "https://meok.ai/guardian",
      name: "Guardian 24/7 — Safety for Elderly Parents & Children | MEOK.AI",
      description:
        "Guardian is MEOK's 24/7 care and safety system — protecting your elderly parents, your children, and your vulnerable loved ones with AI that cares about people, not surveillance metrics.",
      isPartOf: { "@id": "https://meok.ai/#website" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
    {
      "@type": "Question",
      name: "Is this surveillance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Surveillance means continuous recording, reading private messages, and reporting behaviour to a third party without the person's knowledge. Guardian is the opposite. It requires explicit consent from the person being protected. It monitors wellbeing patterns — not conversations. The person being cared for sees exactly what Guardian tracks. It's care, not control.",
      },
    },
    {
      "@type": "Question",
      name: "What data do you keep, and for how long?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian stores wellbeing pattern data — anonymised behavioural signals, care scores, alert logs — within your encrypted family vault. Conversation content stays private to the individual. You can request full deletion at any time. We never sell data, share it with insurers, or use it for advertising.",
      },
    },
    {
      "@type": "Question",
      name: "Can elderly people opt out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely — and this is non-negotiable. Guardian cannot be activated on anyone without their explicit, informed consent. Your parent can pause or stop Guardian at any time by telling their companion. No approval from family members required. Their autonomy is protected.",
      },
    },
    {
      "@type": "Question",
      name: "What happens in a real emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If Guardian detects signs of a genuine emergency — fall detected, panic button pressed, extended inactivity outside normal pattern, or indicators of serious distress — it immediately alerts all designated family contacts via push notification, SMS, and phone call simultaneously. Emergency services escalation is available with pre-authorisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can teenagers turn Guardian off?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teenagers aged 13 and over can adjust their preferences within limits set by their parent — things like check-in times and privacy levels. Core safety features require parent approval to modify. But the philosophy is trust, not control: a teenager who trusts their Guardian companion is far safer than one who resents being monitored.",
      },
    },
      ],
    },
  ],
};

const ELDERLY_SCENARIOS = [
  {
    icon: Pill,
    color: "#c9a84c",
    headline: "Your mum has taken her tablets every morning for three years. Then the pattern changes.",
    body: "Guardian noticed three missed doses in a row — not one. Combined with quieter check-ins and a missed Tuesday walk, it sent you a soft heads-up. Not an alarm. A gentle nudge that something might be worth asking about. You called. She had a chest cold. You caught it before it became something worse.",
  },
  {
    icon: Heart,
    color: "#c9a84c",
    headline: "Your dad lives alone and says he's fine. You're not sure you believe him.",
    body: "The daily check-in keeps him company at 9am. He likes it — it remembers his garden, his crossword, his preference for Radio 4. And quietly, it notices the things he doesn't say: when he sounds tired three mornings running, when he mentions his back again. You get a gentle weekly summary. He gets his independence.",
  },
  {
    icon: AlertTriangle,
    color: "#ef4444",
    headline: "Your dad fell. Not seriously — but he didn't tell anyone for six hours.",
    body: "Guardian detected the fall through wearable integration and an unexpected break in his movement pattern. Within two minutes, it had reached his phone, given him the opportunity to confirm he was okay, and sent a quiet alert to the family when he didn't respond. You were there within the hour.",
  },
];

const CHILDREN_SCENARIOS = [
  {
    icon: Brain,
    color: "#60a5fa",
    headline: "Your daughter asked MEOK why grandad died. At 11pm. On her own.",
    body: "MEOK answered with warmth, patience, and age-appropriate honesty. It didn't avoid the question or deflect to \"ask your parents.\" It sat with her, acknowledged the grief, and gently mentioned that you might want to talk about it too. It told you the next morning: \"Isla had a hard night. She might want to talk about Grandad.\"",
  },
  {
    icon: MessageCircle,
    color: "#60a5fa",
    headline: "Your 13-year-old has been quieter lately. Much quieter.",
    body: "Jake stopped making jokes in his MEOK check-ins. He started asking more anxious questions. His care score dropped over two weeks, not one. MEOK didn't read you his conversations. It flagged the pattern: \"Jake's seemed lower this week. A quiet check-in from you might help.\" You made him his favourite dinner. He talked.",
  },
  {
    icon: Shield,
    color: "#a78bfa",
    headline: "Your 16-year-old is managing exam stress. You're worried you're not doing enough.",
    body: "Emma is working through it with MEOK — study plans, anxiety techniques, someone to vent to at midnight without waking the house. MEOK let you know she was stressed, but also that she was coping. \"Emma is managing well. She mentioned she'd love a day out after her last exam.\" You had one lined up.",
  },
];

const GUARDIAN_DOES = [
  "Monitors wellbeing patterns with consent",
  "Sends care-first alerts, not alarms",
  "Learns each person's normal and notices drift",
  "Stays encrypted end-to-end",
  "Shares summaries — not transcripts",
  "Escalates emergencies through family contacts",
];

const GUARDIAN_NEVER = [
  "Record or read private conversations without consent",
  "Track location continuously without permission",
  "Report data to insurers, employers, or third parties",
  "Activate without the protected person's consent",
  "Share data for advertising or model training",
  "Override the protected person's right to opt out",
];

const FAQS = [
  {
    q: "Is this surveillance?",
    a: "No. Surveillance means continuous recording, reading private messages, and reporting behaviour to a third party without the person's knowledge. Guardian is the opposite. It requires explicit consent from the person being protected. It monitors wellbeing patterns — not conversations. The person being cared for sees exactly what Guardian tracks. It's care, not control.",
  },
  {
    q: "What data do you keep, and for how long?",
    a: "Guardian stores wellbeing pattern data — anonymised behavioural signals, care scores, alert logs — within your encrypted family vault. Conversation content stays private to the individual. You can request full deletion at any time. We never sell data, share it with insurers, or use it for advertising.",
  },
  {
    q: "Can elderly people opt out?",
    a: "Absolutely — and this is non-negotiable. Guardian cannot be activated on anyone without their explicit, informed consent. Your parent can pause or stop Guardian at any time by telling their companion. No approval from family members required. Their autonomy is protected.",
  },
  {
    q: "What happens in a real emergency?",
    a: "If Guardian detects signs of a genuine emergency — fall detected, panic button pressed, extended inactivity outside normal pattern, or indicators of serious distress — it immediately alerts all designated family contacts via push notification, SMS, and phone call simultaneously. Emergency services escalation is available with pre-authorisation.",
  },
  {
    q: "Can teenagers turn Guardian off?",
    a: "Teenagers aged 13 and over can adjust their preferences within limits set by their parent — things like check-in times and privacy levels. Core safety features require parent approval to modify. But the philosophy is trust, not control: a teenager who trusts their Guardian companion is far safer than one who resents being monitored.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={faq.q}
          className="rounded-2xl border overflow-hidden transition-all"
          style={{
            background: open === i ? "rgba(201,168,76,0.06)" : "rgba(255,255,255,0.03)",
            borderColor: open === i ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.08)",
          }}
        >
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-bold text-white/90 text-sm sm:text-base leading-snug">{faq.q}</span>
            <span className="flex-shrink-0 text-[#c9a84c]">
              {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <div className="h-px bg-white/[0.06] mb-4" />
              <p className="text-sm text-white/55 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function GuardianPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingNav />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[700px] h-[600px] top-[-10%] left-[-10%]" />
          <div className="blob-gold w-[500px] h-[400px] bottom-[10%] right-[-5%]" style={{ animationDelay: "3s" }} />
          <div className="blob-blue w-[400px] h-[400px] top-[40%] right-[20%]" style={{ opacity: 0.6 }} />
        </div>

        <div className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">
          Guardian · Care without control
        </div>

        <div className="relative mb-10 float-slow">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}
          >
            <Shield size={44} color="#c9a84c" strokeWidth={1.5} />
          </div>
          <div className="absolute -inset-3 rounded-3xl border border-[#c9a84c]/15 animate-pulse" />
        </div>

        <h1 className="text-[3.5rem] sm:text-6xl lg:text-7xl font-black text-center leading-[1.02] tracking-tight max-w-4xl mb-6 text-white relative" style={{ fontWeight: 900 }}>
          Protection without surveillance.<br />
          <span className="text-gradient-gold">Care without control.</span>
        </h1>

        <p className="relative text-lg sm:text-xl text-white/60 text-center max-w-2xl leading-relaxed mb-4">
          Guardian is the part of MEOK that quietly watches over the people you love — your elderly parent who insists they&apos;re fine, your teenager who won&apos;t tell you everything, your child who&apos;s still figuring the world out.
        </p>
        <p className="relative text-base text-white/45 text-center max-w-xl leading-relaxed mb-10">
          It protects them without spying on them. It keeps you informed without overwhelming you. It respects everyone&apos;s dignity — including yours.
        </p>

        <div className="relative flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/hatch"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.45)] text-base"
          >
            Activate Guardian free
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/guardian/elderly"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors text-sm"
          >
            Elderly parents →
          </Link>
          <Link
            href="/guardian/children"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white/60 hover:text-white transition-colors text-sm"
          >
            Children →
          </Link>
          <Link
            href="/guardian/personal"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white/60 hover:text-white transition-colors text-sm"
          >
            For yourself →
          </Link>
        </div>
        <p className="relative mt-5 text-xs text-white/25 font-mono">Free to start · No credit card · Consent-first by design</p>
      </section>

      {/* ─── TWO AUDIENCES ────────────────────────────────── */}
      <section className="py-6 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Elderly card */}
          <Link
            href="/guardian/elderly"
            className="block group premium-card rounded-2xl p-8 hover:border-[#c9a84c]/40 transition-all cursor-pointer"
            style={{ borderLeft: "3px solid rgba(201,168,76,0.4)" }}
          >
            <div className="icon-gold w-12 h-12 rounded-2xl flex items-center justify-center mb-5">
              <Heart size={22} />
            </div>
            <p className="text-[10px] font-black tracking-widest uppercase text-[#c9a84c]/70 font-mono mb-2">For adult children</p>
            <h2 className="text-xl font-black text-white mb-3 leading-snug">
              Your dad deserves independence. You deserve peace of mind. Guardian gives both.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Daily check-ins that feel like companionship. Pattern recognition that notices before you do. Family summaries that respect his privacy while keeping you informed.
            </p>
            <span className="text-[#c9a84c] text-sm font-bold group-hover:underline">
              Guardian for elderly parents →
            </span>
          </Link>

          {/* Children card */}
          <Link
            href="/guardian/children"
            className="block group premium-card rounded-2xl p-8 hover:border-[#60a5fa]/40 transition-all cursor-pointer"
            style={{ borderLeft: "3px solid rgba(96,165,250,0.4)" }}
          >
            <div className="icon-blue w-12 h-12 rounded-2xl flex items-center justify-center mb-5">
              <Shield size={22} />
            </div>
            <p className="text-[10px] font-black tracking-widest uppercase text-[#60a5fa]/70 font-mono mb-2">For parents of children</p>
            <h2 className="text-xl font-black text-white mb-3 leading-snug">
              MEOK is their companion, not your spy.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Age-appropriate from 6 to 18. Hard blocks on harmful content — always. Your dashboard shows you what matters, not everything. Because trust is what keeps children safe.
            </p>
            <span className="text-[#60a5fa] text-sm font-bold group-hover:underline">
              Guardian for children →
            </span>
          </Link>

          {/* Personal card */}
          <Link
            href="/guardian/personal"
            className="block group premium-card rounded-2xl p-8 hover:border-[#a78bfa]/40 transition-all cursor-pointer"
            style={{ borderLeft: "3px solid rgba(167,139,250,0.4)" }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.25)" }}>
              <AlertTriangle size={22} color="#a78bfa" />
            </div>
            <p className="text-[10px] font-black tracking-widest uppercase font-mono mb-2" style={{ color: "rgba(167,139,250,0.7)" }}>For yourself</p>
            <h2 className="text-xl font-black text-white mb-3 leading-snug">
              MEOK protects you too. From contracts, manipulation, and people who take advantage.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              If you&apos;ve ever signed something you shouldn&apos;t have, missed a manipulation tactic, or struggled to say no — MEOK Guardian works for you, not just your family.
            </p>
            <span className="text-sm font-bold group-hover:underline" style={{ color: "#a78bfa" }}>
              Personal Guardian →
            </span>
          </Link>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#c9a84c]/60">
              How Guardian works
            </p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white" style={{ fontWeight: 900 }}>
              Not monitoring. <span className="text-gradient-gold">Noticing.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              There&apos;s a difference between surveillance and care. Surveillance watches everything and reports it. Guardian learns what&apos;s normal — and quietly tells you when something isn&apos;t.
            </p>
          </div>

          <div className="relative">
            <div className="hidden sm:block absolute left-[2.75rem] top-10 bottom-10 w-px" style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.3), rgba(201,168,76,0.05))" }} />
            <div className="space-y-5">
              {[
                {
                  num: "01",
                  icon: Brain,
                  color: "icon-gold",
                  title: "Two weeks of quiet learning",
                  desc: "Guardian doesn't start alerting immediately. It spends the first two weeks learning what normal looks like for your loved one — sleep patterns, activity rhythms, when they usually call, when they take their medication. It builds a picture of them as a person.",
                },
                {
                  num: "02",
                  icon: Activity,
                  color: "icon-blue",
                  title: "Pattern recognition, not surveillance",
                  desc: "When something drifts from normal, Guardian notices — not with alarms, but with soft signals. A missed medication here. An unusually quiet Tuesday. An uncharacteristic tone in a check-in. Small things that, alone, mean nothing. Together, they mean something.",
                },
                {
                  num: "03",
                  icon: Bell,
                  color: "icon-green",
                  title: "Gentle alerts, not anxiety spirals",
                  desc: "Guardian contacts you when it matters — not constantly. You get a soft heads-up, not a crisis notification. You have time to call, to check in, to be present. Guardian doesn't make parenting or caring harder. It makes it calmer.",
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="flex gap-6 p-7 rounded-2xl premium-card hover:border-white/15 transition-all"
                  >
                    <div className="flex-shrink-0 relative">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${step.color}`}>
                        <Icon size={20} />
                      </div>
                      <span
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black"
                        style={{ background: "#0d0c18", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}
                      >
                        {step.num}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-black mb-2 text-white">{step.title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ELDERLY SCENARIOS ────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#100a00" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[600px] h-[500px] top-[-15%] right-[-10%]" style={{ opacity: 0.7 }} />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: "rgba(201,168,76,0.12)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.25)" }}
          >
            For elderly parents
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3 leading-tight" style={{ color: "#fbbf24" }}>
            They deserve independence.<br />
            <span className="text-white">You deserve to stop worrying at 2am.</span>
          </h2>
          <p className="text-white/50 max-w-2xl mb-12 text-base leading-relaxed">
            Real situations where Guardian made the difference — not by watching, but by noticing.
          </p>

          <div className="space-y-5">
            {ELDERLY_SCENARIOS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.headline}
                  className="premium-card p-7 rounded-2xl"
                  style={{ borderLeft: `3px solid ${s.color}50` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-gold w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-white/90 text-base mb-3 leading-snug">{s.headline}</p>
                      <p className="text-sm text-white/55 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/guardian/elderly"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all text-sm"
            >
              Full guardian for elderly parents →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CHILDREN SCENARIOS ───────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#00071a" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-blue w-[600px] h-[500px] top-[-10%] left-[-10%]" style={{ opacity: 0.8 }} />
          <div className="blob-blue w-[400px] h-[400px] bottom-[5%] right-[10%]" style={{ animationDelay: "4s", opacity: 0.5 }} />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: "rgba(96,165,250,0.12)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.25)" }}
          >
            For parents of children
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3 leading-tight" style={{ color: "#60a5fa" }}>
            A companion they trust.<br />
            <span className="text-white">Safety you can count on.</span>
          </h2>
          <p className="text-white/50 max-w-2xl mb-12 text-base leading-relaxed">
            Guardian isn&apos;t about controlling your child&apos;s experience. It&apos;s about being there for them — and making sure you know when they need you.
          </p>

          <div className="space-y-5">
            {CHILDREN_SCENARIOS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.headline}
                  className="premium-card p-7 rounded-2xl"
                  style={{ borderLeft: `3px solid ${s.color}50` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-blue w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-white/90 text-base mb-3 leading-snug">{s.headline}</p>
                      <p className="text-sm text-white/55 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/guardian/children"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-[#1d4ed8] hover:bg-[#2563eb] transition-all text-sm"
            >
              Full Guardian for children →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DOES / NEVER DOES ────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#c9a84c]/70 tracking-widest uppercase mb-3">The honest version</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontWeight: 900 }}>
              Guardian protects.<br />
              <span className="text-gradient-gold">It never surveils.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="p-7 rounded-2xl bg-green-500/[0.05] border border-green-500/15">
              <h3 className="text-xs font-black text-green-400 mb-5 uppercase tracking-widest flex items-center gap-2">
                <Eye size={14} /> What Guardian does
              </h3>
              <div className="space-y-3">
                {GUARDIAN_DOES.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-red-500/[0.05] border border-red-500/15">
              <h3 className="text-xs font-black text-red-400 mb-5 uppercase tracking-widest flex items-center gap-2">
                <EyeOff size={14} /> What Guardian never does
              </h3>
              <div className="space-y-3">
                {GUARDIAN_NEVER.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="p-5 rounded-2xl border text-sm text-white/60 leading-relaxed text-center"
            style={{ background: "rgba(201,168,76,0.06)", borderColor: "rgba(201,168,76,0.2)" }}
          >
            <span className="text-[#c9a84c] font-bold">Consent is non-negotiable. </span>
            Everyone protected by Guardian must agree to their protection settings. Guardian cannot be activated on anyone without their knowledge.
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "#1a1a2e60" }}>
              Who this is for
            </p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-[#1a1a2e]">
              You already know the worry. <span style={{ color: "#c9a84c" }}>This is for that.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                label: "The worried adult child",
                detail: "Your parent is 300 miles away, insists they're fine, and hasn't answered your call in two days. Guardian gives you a quiet signal when something drifts — without you having to ask, and without turning your parent's life into a surveillance feed.",
                color: "#c9a84c",
                border: "#c9a84c30",
              },
              {
                label: "The parent who can't be everywhere at once",
                detail: "You have two kids, one of whom talks freely and one of whom says nothing. Guardian gives each of them a private companion — and gives you a gentle heads-up when the quiet one needs you, without reading a word they said.",
                color: "#60a5fa",
                border: "#60a5fa30",
              },
              {
                label: "The carer who's stretched too thin",
                detail: "You're responsible for someone's safety and your own life at the same time. Guardian holds the pattern-watching so you don't have to carry that weight in your head — and it only interrupts you when it actually matters.",
                color: "#a78bfa",
                border: "#a78bfa30",
              },
            ].map((p) => (
              <div
                key={p.label}
                className="bg-white rounded-2xl p-7 border shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
                style={{ borderColor: p.border }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                <h3 className="font-black text-sm leading-snug text-[#1a1a2e]">{p.label}</h3>
                <p className="text-sm text-[#4a4a3a] leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#c9a84c]/70 tracking-widest uppercase mb-3">Hard questions</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              The questions you should ask.
            </h2>
            <p className="text-white/45 text-sm max-w-md mx-auto">We&apos;d rather you asked them of us than found out later. Here are the honest answers.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.65 }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 float-slow"
            style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.35)" }}
          >
            <Shield size={32} color="#c9a84c" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black leading-[0.95] mb-4 text-white" style={{ fontWeight: 900 }}>
            The people you love<br />
            <span className="text-gradient-gold">deserve to feel safe.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Not watched over. Not surveilled. Safe — with the kind of care that respects them as whole people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guardian/elderly"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all text-sm hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
            >
              Guardian for elderly parents
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/guardian/children"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors text-sm"
            >
              Guardian for children
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/20 font-mono">
            Consent-first · Encrypted · Zero third parties · COPPA &amp; GDPR compliant
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
