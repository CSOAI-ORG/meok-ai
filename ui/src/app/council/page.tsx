"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Vote,
  Calendar,
  MessageCircle,
  Heart,
  BookMarked,
  Shield,
  Egg,
  Building2,
  Sparkles,
  Users,
  ChevronDown,
  ChevronUp,
  Lock,
  Zap,
} from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MEOK Character Council — Family AI OS",
  url: "https://meok.ai/council",
  description:
    "The MEOK Character Council links multiple sovereign AI companions within a family or team. Each companion stays private — but the council enables shared decisions, collective memory, and family care coordination.",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Character Council?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Character Council is formed when multiple MEOK companions are linked within a family or team. Each member's AI remains sovereign — private, personal, answerable only to them. But the council allows members to share what they choose to share, ask the collective for guidance, and build shared memory that belongs to the family as a whole.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Character Council the same as the Sovereign Temple?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — they operate at different scales. The Sovereign Temple is MEOK's internal Byzantine fault-tolerant council of 33 AI agents that governs every decision MEOK's system makes. The Character Council is your personal family feature: it links your family members' companions together so they can collaborate, share decisions, and care for each other. The Sovereign Temple is the safety architecture underneath everything. The Character Council is the family experience built on top.",
        },
      },
      {
        "@type": "Question",
        name: "Can other family members see my private conversations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Your companion's conversations are cryptographically private. The council only receives what you explicitly choose to share. Your AI can contribute insights and advice to council discussions without ever revealing the source conversation.",
        },
      },
      {
        "@type": "Question",
        name: "How many members can join a council?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Family plan supports up to 5 council members. The Family Premium plan supports up to 8. Each council member must have their own MEOK companion — meaning each person hatches their own egg and activates their personal AI first.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if a family member leaves the council?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If a member leaves the council, their companion disconnects from the shared council space. Their private memory stays entirely with them. Any shared council memory they contributed remains, but future contributions stop. The council admin can invite a replacement member at any time.",
        },
      },
      {
        "@type": "Question",
        name: "Can the council replace family communication apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The council complements rather than replaces communication apps. It adds a layer of AI-mediated family intelligence — helping synthesise decisions, coordinate care, and maintain shared memory — on top of however your family already communicates. Think of it as the nervous system beneath your family's communications.",
        },
      },
    ],
  },
};

const PRINCIPLES = [
  {
    num: "1",
    icon: Lock,
    title: "Individual sovereignty first",
    desc: "Your companion answers only to you. The council never has access to your private conversations.",
  },
  {
    num: "2",
    icon: Sparkles,
    title: "Shared wisdom on request",
    desc: "You choose what to share with the council. Your AI can contribute insights without revealing the source conversation.",
  },
  {
    num: "3",
    icon: Heart,
    title: "Collective care",
    desc: "The council can alert the whole family when someone needs support — but only with that person's consent.",
  },
];

const COUNCIL_FEATURES = [
  {
    icon: Vote,
    color: "icon-gold",
    title: "Council decisions",
    desc: "Put a family decision to the council. Each companion advises from its member's perspective. The council synthesises a recommendation.",
  },
  {
    icon: Calendar,
    color: "icon-blue",
    title: "Shared calendar",
    desc: "Family events, appointments, and commitments visible to all council members who opt in.",
  },
  {
    icon: MessageCircle,
    color: "icon-green",
    title: "Cross-companion messaging",
    desc: "Send messages through the council — filtered, care-aligned, never raw data dumps.",
  },
  {
    icon: Heart,
    color: "icon-red",
    title: "Wellbeing network",
    desc: "When one family member is struggling, the council can (with their consent) send care from the whole family.",
  },
  {
    icon: BookMarked,
    color: "icon-gold",
    title: "Collective memory",
    desc: "Shared family history, stories, milestones, and traditions — remembered by the council forever.",
  },
  {
    icon: Shield,
    color: "icon-blue",
    title: "Crisis protocol",
    desc: "If any council member's companion detects a crisis, the whole family is mobilised with the right information.",
  },
];

const BUILD_STEPS = [
  {
    num: "01",
    icon: Egg,
    color: "icon-gold",
    title: "Each member hatches their companion",
    desc: "Every family member creates their own sovereign MEOK companion — personalised to them, private to them. Their own egg. Their own character.",
  },
  {
    num: "02",
    icon: Building2,
    color: "icon-blue",
    title: "The family admin creates a council",
    desc: "One family member sets up the council, invites others, and configures sharing permissions. Everyone controls what their companion shares.",
  },
  {
    num: "03",
    icon: Zap,
    color: "icon-green",
    title: "Companions introduce themselves",
    desc: "The companions introduce themselves to each other. Shared calendar, collective memory, and care network all come online.",
  },
  {
    num: "04",
    icon: Users,
    color: "icon-gold",
    title: "Your council is live",
    desc: "From this moment, your family has a collective intelligence — making better decisions, remembering what matters, and caring for each other.",
  },
];

const USE_CASES = [
  {
    title: "Planning Dad's 70th birthday",
    detail: "The council helps everyone coordinate secretly — without Mum's companion leaking the surprise.",
    who: "All 5 family members",
    outcome: "Perfectly co-ordinated. Dad never found out early.",
    color: "#c9a84c",
    bg: "rgba(201,168,76,0.07)",
    border: "rgba(201,168,76,0.2)",
  },
  {
    title: "Mum's hospital appointment",
    detail: "Guardian alerts the council when Mum's check-in is missed. Companions mobilise family support within minutes.",
    who: "Guardian + Council",
    outcome: "Family rallied. Mum wasn't alone.",
    color: "#7BC47F",
    bg: "rgba(123,196,127,0.07)",
    border: "rgba(123,196,127,0.2)",
  },
  {
    title: "Family decisions",
    detail: "Moving house, choosing a school, planning a holiday — the council provides balanced advice from every member's perspective.",
    who: "Council synthesis",
    outcome: "Better decisions. Less conflict.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.07)",
    border: "rgba(96,165,250,0.2)",
  },
];

const FAQS = [
  {
    q: "What is a Character Council?",
    a: "A Character Council is formed when multiple MEOK companions are linked within a family or team. Each member's AI remains sovereign — private, personal, answerable only to them. But the council allows members to share what they choose to share, ask the collective for guidance, and build shared memory that belongs to the family as a whole.",
  },
  {
    q: "Is this the same as the Sovereign Temple?",
    a: "No — they operate at completely different scales. The Sovereign Temple is MEOK's internal governance architecture: a Byzantine fault-tolerant council of 33 AI agents that evaluates every decision the system makes before acting. You never interact with it directly — it's the safety layer running underneath everything. The Character Council is your personal family feature: it links your family members' companions so they can collaborate, share decisions, and care for each other. One is infrastructure. The other is for you.",
  },
  {
    q: "Can other family members see my private conversations?",
    a: "No. Your companion's conversations are cryptographically private. The council only receives what you explicitly choose to share. Your AI can contribute insights and advice to council discussions without ever revealing the source conversation.",
  },
  {
    q: "How many members can join a council?",
    a: "The Family plan supports up to 5 council members. The Family Premium plan supports up to 8. Each council member must have their own MEOK companion — meaning each person hatches their own egg and activates their personal AI first.",
  },
  {
    q: "What happens if a family member leaves the council?",
    a: "If a member leaves the council, their companion disconnects from the shared council space. Their private memory stays entirely with them. Any shared council memory they contributed remains, but future contributions stop. The council admin can invite a replacement member at any time.",
  },
  {
    q: "Can the council replace family communication apps?",
    a: "The council complements rather than replaces communication apps. It adds a layer of AI-mediated family intelligence — helping synthesise decisions, coordinate care, and maintain shared memory — on top of however your family already communicates. Think of it as the nervous system beneath your family's communications.",
  },
];

const EGG_MEMBERS = [
  { angle: -90, label: "Mum",  color: "#c9a84c" },
  { angle: -18, label: "Dad",  color: "#d4b463" },
  { angle:  54, label: "Lily", color: "#e8c97a" },
  { angle: 126, label: "Tom",  color: "#b8963e" },
  { angle: 198, label: "Gran", color: "#f0d89a" },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={faq.q}
          className="rounded-2xl border border-white/[0.08] overflow-hidden transition-all"
          style={{ background: open === i ? "rgba(201,168,76,0.06)" : "rgba(255,255,255,0.03)" }}
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

export default function CouncilPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingNav />

      {/* ═══════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 pb-24 overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[800px] h-[600px] top-[-15%] left-[-15%]" />
          <div className="blob-purple w-[500px] h-[500px] bottom-[5%] right-[-10%]" />
          <div className="blob-blue w-[350px] h-[350px] top-[35%] right-[15%]" style={{ animationDelay: "2s" }} />
        </div>

        {/* Pill label */}
        <div className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold tracking-widest uppercase">
          Your Family&apos;s AI Network · Not a technical system
        </div>

        {/* Premium council ring SVG */}
        <div className="relative mb-12 w-52 h-52 flex items-center justify-center">
          {/* Outer glow ring */}
          <div
            className="absolute w-52 h-52 rounded-full"
            style={{ border: "1px solid rgba(201,168,76,0.15)", boxShadow: "0 0 40px rgba(201,168,76,0.08), inset 0 0 40px rgba(201,168,76,0.04)" }}
          />
          <div
            className="absolute w-40 h-40 rounded-full animate-pulse"
            style={{ border: "1px solid rgba(201,168,76,0.08)" }}
          />

          {/* Center icon */}
          <div
            className="absolute w-16 h-16 rounded-2xl z-10 flex items-center justify-center gold-glow"
            style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.35)" }}
          >
            <Building2 size={26} color="#c9a84c" strokeWidth={1.5} />
          </div>

          {/* 5 eggs around ring */}
          {EGG_MEMBERS.map(({ angle, label, color }) => {
            const rad = (angle * Math.PI) / 180;
            const r = 80;
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <div
                key={label}
                className="absolute flex flex-col items-center gap-1"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center float-slow"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}40`,
                    boxShadow: `0 0 12px ${color}20`,
                    animationDelay: `${EGG_MEMBERS.findIndex(m => m.label === label) * 0.7}s`,
                  }}
                >
                  <svg width="18" height="22" viewBox="0 0 48 60" fill="none" aria-hidden>
                    <ellipse cx="24" cy="32" rx="20" ry="26" fill={color} fillOpacity="0.7" stroke={color} strokeWidth="1.5" />
                    <ellipse cx="18" cy="20" rx="6" ry="8" fill="white" fillOpacity="0.25" transform="rotate(-15 18 20)" />
                  </svg>
                </div>
                <span className="text-[9px] text-white/40 font-medium">{label}</span>
              </div>
            );
          })}

          {/* Connecting lines SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden>
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c9a84c" stopOpacity="0" />
                <stop offset="50%" stopColor="#c9a84c" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
              </linearGradient>
            </defs>
            {EGG_MEMBERS.map(({ angle }) => {
              const rad = (angle * Math.PI) / 180;
              const r = 80;
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              const innerR = 10;
              const xi = 50 + innerR * Math.cos(rad);
              const yi = 50 + innerR * Math.sin(rad);
              return (
                <line
                  key={angle}
                  x1={`${xi}`} y1={`${yi}`}
                  x2={`${x}`}  y2={`${y}`}
                  stroke="#c9a84c"
                  strokeOpacity="0.3"
                  strokeWidth="0.5"
                  strokeDasharray="2 3"
                />
              );
            })}
          </svg>
        </div>

        <h1
          className="relative text-[4rem] sm:text-6xl lg:text-7xl font-black text-center leading-[0.95] tracking-tight max-w-4xl mb-6 text-white"
          style={{ fontWeight: 900 }}
        >
          Your family. One council.<br />
          <span className="text-gradient-gold">Infinite wisdom.</span>
        </h1>

        <p className="relative text-lg sm:text-xl text-[#f5f0e8]/70 text-center max-w-2xl leading-relaxed mb-10">
          Every family member hatches their own sovereign AI. Together, those AIs form a Character Council —
          a collective that helps your family communicate, decide, and care for each other.
        </p>

        <div className="relative flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/hatch"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] text-sm sm:text-base"
          >
            Build Your Council — Start free
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/family"
            className="text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4"
          >
            Learn about Family OS
          </Link>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ═══════════════════════════════════════════════
          2. WHAT IS A CHARACTER COUNCIL (cream)
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "#1a1a2e60" }}>
              What is a Character Council
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#1a1a2e", fontWeight: 900 }}>
              Not one AI. <span style={{ color: "#c9a84c" }}>A council.</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#1a1a2e70" }}>
              A Character Council is formed when multiple MEOK companions are linked within a family or team.
              Each member&apos;s AI remains sovereign — private, personal, answerable only to them. But the council
              allows members to share what they choose, ask the collective for guidance, and build shared
              memory that belongs to the family as a whole.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="p-7 rounded-2xl bg-white border-t-4 hover:shadow-md transition-shadow"
                  style={{ borderTopColor: "#c9a84c", boxShadow: "0 1px 8px rgba(26,26,46,0.05)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 icon-gold"
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="font-black text-base mb-2" style={{ color: "#1a1a2e" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#1a1a2e60" }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. WHAT YOUR COUNCIL CAN DO (dark)
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[600px] h-[400px] top-[-20%] right-[-10%]" style={{ opacity: 0.5 }} />
          <div className="blob-purple w-[400px] h-[400px] bottom-[-10%] left-[-5%]" style={{ opacity: 0.6 }} />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "#c9a84c80" }}>
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-gradient-gold" style={{ fontWeight: 900 }}>
              What your Council can do
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COUNCIL_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="premium-card p-6 rounded-2xl">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-black text-base text-white/90 mb-2">{f.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. HOW TO BUILD YOUR COUNCIL — 4 steps (cream)
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "#1a1a2e60" }}>
              Getting started
            </p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight" style={{ color: "#1a1a2e", fontWeight: 900 }}>
              How to build your council
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden sm:block absolute left-[1.75rem] top-8 bottom-8 w-px" style={{ background: "linear-gradient(to bottom, #c9a84c50, #c9a84c10)" }} />

            <div className="space-y-5">
              {BUILD_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="flex gap-5 p-7 rounded-2xl bg-white border border-[#e8e4dc] hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 relative">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${step.color}`}>
                        <Icon size={18} />
                      </div>
                      <span
                        className="absolute -top-2 -right-3 text-[9px] font-black px-1 rounded"
                        style={{ background: "#1a1a2e", color: "#c9a84c" }}
                      >
                        {step.num}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-black text-base mb-1.5" style={{ color: "#1a1a2e" }}>{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#1a1a2e60" }}>{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. USE CASES (dark)
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-blue w-[500px] h-[400px] top-[-10%] left-[10%]" style={{ opacity: 0.5 }} />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-3">In practice</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-2" style={{ fontWeight: 900 }}>
              Real council moments
            </h2>
            <p className="text-white/40 text-base max-w-lg mx-auto">
              How families use the council day to day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="p-7 rounded-2xl flex flex-col gap-4 border hover:scale-[1.02] transition-transform"
                style={{ background: uc.bg, borderColor: uc.border }}
              >
                <h3 className="font-black text-base leading-tight" style={{ color: uc.color }}>
                  {uc.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed flex-1">{uc.detail}</p>
                <div className="pt-2 border-t border-white/[0.07] space-y-1.5">
                  <div className="text-[11px] text-white/30 font-mono uppercase tracking-wide">{uc.who}</div>
                  <div className="text-xs font-semibold" style={{ color: uc.color }}>{uc.outcome}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#c9a84c]/70 tracking-widest uppercase mb-3">Questions</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Common questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          7. CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="blob-gold w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.6 }} />
          <div className="blob-purple w-[400px] h-[400px] bottom-0 right-0" style={{ opacity: 0.4 }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          {/* Mini council ring */}
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center gold-glow float-slow"
              style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.35)" }}
            >
              <Building2 size={30} color="#c9a84c" strokeWidth={1.5} />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black leading-[0.95] mb-4 text-white" style={{ fontWeight: 900 }}>
            Build your<br />
            <span className="text-gradient-gold">family&apos;s council.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-3 leading-relaxed">
            Every family member hatches their companion. Together, you form something greater.
          </p>
          <p className="text-sm text-white/25 mb-10 font-mono">
            Family plan includes up to 5 council members.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#e0bb60] transition-all text-base sm:text-lg hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
          >
            Build Your Council — Start free
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <p className="mt-6 text-xs text-white/20 font-mono">
            Private by default · Sovereign companions · Family plan
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
