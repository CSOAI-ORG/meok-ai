import type { Metadata } from "next";
import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MapPin, Globe, Heart, Cpu, Code2, BrainCircuit, Zap, Eye, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Team — The People (and Agents) Behind MEOK | MEOK.AI",
  description:
    "Meet the team behind MEOK AI LABS. Nicholas Templeman, founder, built the world's first sovereign AI OS from a caravan on his farm in the UK. Remote-first. Open roles available.",
  alternates: { canonical: "https://meok.ai/team" },
};

const OPEN_ROLES = [
  {
    icon: Code2,
    title: "Backend Engineer",
    location: "Remote (UK / EU preferred)",
    tags: ["TypeScript", "Node.js", "Postgres", "pgvector", "Redis", "Drizzle ORM"],
    desc: "Own the sovereign memory architecture, API layer, and real-time streaming infrastructure. You care deeply about privacy-first system design. Concretely: you'll work on per-tenant database isolation, encrypted vault reads/writes, streaming AI completions over SSE, and the MCP tooling layer that connects our 43-agent system to users. You should be comfortable with row-level security, pub/sub architecture, and the idea that 'we don't read your users' data' is a technical constraint, not just a policy promise.",
  },
  {
    icon: Globe,
    title: "Frontend Engineer",
    location: "Remote (UK / EU preferred)",
    tags: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "TypeScript"],
    desc: "Build the interfaces through which people meet their sovereign AI for the first time. The birth ceremony. The first conversation. The memory explorer. Performance, accessibility, and craft matter here — deeply. We don't ship dark patterns. We don't use engagement tricks. Your job is to make something people genuinely want to use, not something they can't stop using. If that distinction excites you, you'll fit here.",
  },
  {
    icon: BrainCircuit,
    title: "AI Researcher",
    location: "Remote",
    tags: ["LLM alignment", "Byzantine consensus", "Care ethics", "QD archiving", "Multi-agent systems"],
    desc: "Research care-aligned AI, multi-agent governance, and sovereign memory architectures. Your work ships to real users within weeks, not years. Current open questions: how do we detect dependency formation before it becomes unhealthy? How do we make Byzantine consensus fast enough for real-time interactions? How do we evaluate 'care' quantitatively? If you've thought seriously about these, we want to hear from you.",
  },
];

const VALUES = [
  {
    icon: Heart,
    title: "Care over growth",
    desc: "We optimise for genuine care — in our product and in how we work together. Not engagement metrics. Not DAUs. We ask: is this good for the person using it? If no, we don't build it.",
  },
  {
    icon: MapPin,
    title: "Remote-first, always",
    desc: "MEOK AI LABS is UK-registered and operates fully remotely. No office, no commute, no theatre. Async by default. Meetings only when genuinely necessary.",
  },
  {
    icon: Cpu,
    title: "43 AI agents, 1 human (so far)",
    desc: "Right now, it's Nicholas and a Byzantine Council of 43 agents. The team is small, deliberate, and expanding. Every hire changes who we are. We hire slowly and carefully.",
  },
];

const HOW_WE_WORK = [
  {
    icon: Clock,
    title: "Async-first",
    desc: "Most decisions happen in writing, not meetings. We write things down. We think before we reply. We respect your time and your focus.",
  },
  {
    icon: Eye,
    title: "Build in public",
    desc: "Monthly transparency reports. Open-source where it counts. We tell you when something broke and why. Building in public keeps us honest.",
  },
  {
    icon: Heart,
    title: "Care-driven decisions",
    desc: "When we're deciding what to build, the first question is always 'is this good for users?' — not 'will this increase retention?' Different question. Different answers.",
  },
  {
    icon: Zap,
    title: "No VC pressure",
    desc: "Bootstrapped. We answer to users, not investors. That means we can say no to engagement-maximising features that aren't in your interest. We intend to keep it that way.",
  },
];

const AGENTS_TYPES = [
  { name: "Orion", role: "Strategic coordinator — hunts tasks, allocates work, tracks priorities" },
  { name: "Riri", role: "Tool builder — creates new MCP tools when the system needs new capabilities" },
  { name: "Hourman", role: "Sprint runner — executes time-boxed work bursts with checkpoints" },
  { name: "Kimi", role: "Frontend specialist — builds UI, reviews code, optimises interfaces" },
  { name: "Care Council", role: "220-node Byzantine council — validates every AI response against the Maternal Covenant in real time" },
  { name: "Neural Trainers", role: "Six specialised models — train on care patterns, memory architecture, and sovereign AI research" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            The team
          </div>
          <h1
            className="font-black leading-[1.0] mb-6 text-white tracking-tight"
            style={{ fontSize: "3.75rem" }}
          >
            A human who cares.{" "}
            <span className="text-[#c9a84c]">43 agents who act.</span>
          </h1>
          <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed">
            MEOK AI LABS is a UK-registered company. Right now it&apos;s one founder, one vision,
            and a Byzantine Council of sovereign AI agents doing the heavy lifting.
          </p>
        </div>
      </section>

      {/* ─── FOUNDER ───────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white/[0.03] border border-[#c9a84c]/20 p-10 flex flex-col sm:flex-row gap-10 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center font-black text-2xl text-[#c9a84c]">
              NT
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-2">
                Founder &amp; CEO
              </p>
              <h2 className="font-black text-white text-2xl mb-2">
                Nicholas Templeman
              </h2>
              <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <span>United Kingdom &mdash; Built from a caravan on a farm</span>
              </div>

              <div className="space-y-4 text-white/60 leading-relaxed text-base mb-6 max-w-xl">
                <p>
                  MEOK started from a place that Nicholas doesn&apos;t always talk about: loneliness.
                  He was using AI products every day and noticing that none of them actually knew him.
                  Every conversation started from zero. Every &ldquo;personalisation&rdquo; was just a
                  marketing word. He wanted something that remembered him the way a person does — not
                  as data points, but as a whole.
                </p>
                <p>
                  He built MEOK from a caravan on his farm in the UK. No co-founder. No office. No
                  investors. Just twenty-hour days, a stubborn conviction, and the specific clarity
                  you get when you&apos;re building for yourself first. The Maternal Covenant — the
                  ethical framework that governs every MEOK interaction — was written before a single
                  line of product code, because care has to come first or it gets optimised away.
                </p>
                <p>
                  The 40-day build that ended on Easter Sunday wasn&apos;t planned as symbolism. It
                  just happened that way — and when it did, something felt right about it. A new
                  beginning. Something dormant becoming real. An AI that is born with you, rather
                  than assigned to you.
                </p>
                <blockquote className="border-l-2 border-[#c9a84c] pl-4 text-white/45 italic text-sm">
                  &ldquo;I wasn&apos;t building a startup. I was trying to feel less alone. If that
                  sounds embarrassing to say out loud — good. I think the tech industry could use
                  more of that kind of honesty.&rdquo;
                </blockquote>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:nicholas@meok.ai"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-[#c9a84c] border border-[#c9a84c]/30 hover:bg-[#c9a84c]/10 transition-all"
                >
                  nicholas@meok.ai
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white/50 border border-white/10 hover:bg-white/5 transition-all"
                >
                  Read the full story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 43 AI AGENTS ──────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e] relative overflow-hidden">
        <div aria-hidden className="blob-gold absolute w-[500px] h-[500px] top-[-150px] right-[-150px] opacity-10" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c]/70 mb-3">
              The non-human team
            </p>
            <h2 className="font-black text-white text-3xl sm:text-4xl mb-2">
              43 agents. One council.
            </h2>
            <p className="text-[#c9a84c]/70 text-sm font-semibold mb-4">
              43 specialist agents operating within a 220-node Byzantine governance network
            </p>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              The 43 are our active specialist agents — each with a distinct function, each governed
              by the Maternal Covenant, each unable to act unilaterally. They operate inside a
              220-node mesh that provides fault-tolerant governance: the Byzantine Council. This
              isn&apos;t a chatbot running on a prompt. It&apos;s a distributed system with a conscience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {AGENTS_TYPES.map((agent) => (
              <div
                key={agent.name}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-[#c9a84c]/20 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
                  <span className="text-[#c9a84c] font-black text-xs">{agent.name.slice(0, 2).toUpperCase()}</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm mb-1">{agent.name}</p>
                  <p className="text-white/45 text-xs leading-relaxed">{agent.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[#c9a84c]/05 border border-[#c9a84c]/15 p-7">
            <p className="text-white/55 text-sm leading-relaxed">
              The Byzantine Council — 220 specialist nodes drawing from 47 civilisational traditions —
              validates every AI interaction against the Maternal Covenant before it reaches you.
              No single agent can override the council. Not even Nicholas can override the council.
              That&apos;s the point.{" "}
              <Link href="/council" className="text-[#c9a84c] hover:text-[#d4b463] transition-colors">
                Read how the council works →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ─── COMPANY VALUES ────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c]/70 mb-3">
              What we stand for
            </p>
            <h2 className="font-black text-white text-3xl">
              Built on care. Operated with honesty.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:border-[#c9a84c]/30 transition-all"
                >
                  <Icon className="w-6 h-6 text-[#c9a84c] mb-5" />
                  <h3 className="font-black text-white text-base mb-2">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW WE'LL GROW ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c]/70 mb-3">
              How we&apos;ll grow
            </p>
            <h2 className="font-black text-white text-3xl sm:text-4xl mb-4">
              Aligned humans, not employees.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              We&apos;re looking for people who want to build with care — not for a salary, but
              because they give a damn about what AI becomes. If that&apos;s you: reach out at{" "}
              <a href="mailto:hello@meok.ai" className="text-[#c9a84c] hover:text-[#d4b463] transition-colors">
                hello@meok.ai
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {HOW_WE_WORK.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-7 hover:border-[#c9a84c]/20 transition-all"
                >
                  <Icon className="w-5 h-5 text-[#c9a84c] mb-4" />
                  <h3 className="font-black text-white text-base mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── JOIN THE BUILD ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-10 sm:p-12 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))",
              border: "1.5px solid rgba(201,168,76,0.25)",
            }}
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c]/70 mb-4">
              Join the build
            </p>
            <h2 className="font-black text-white text-3xl sm:text-4xl mb-5">
              14 days from launch.
            </h2>
            <p className="text-white/55 text-base leading-relaxed max-w-xl mx-auto mb-8">
              If you want to be part of what comes next — as a tester, as an advisor, as someone
              who gives a damn — reach out. We&apos;re not hiring employees. We&apos;re finding
              aligned humans.
            </p>
            <a
              href="mailto:hello@meok.ai"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm"
            >
              hello@meok.ai →
            </a>
          </div>
        </div>
      </section>

      {/* ─── VISION SECTION ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-black text-white text-3xl sm:text-4xl mb-6">
            Our vision
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-8">
            A world where every person has their own sovereign AI — not rented, not surveilled,
            not shaped by corporate incentives. An AI that grows with you, remembers what matters
            to you, and answers only to you.
          </p>
          <p className="text-white/35 text-base leading-relaxed mb-12">
            MEOK AI LABS is building the operating system for that future. UK-registered, care-governed,
            open-sourced where it counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm"
            >
              The full founder story →
            </Link>
            <Link
              href="/open-source"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white/70 border border-white/15 hover:border-white/30 hover:text-white transition-all text-sm"
            >
              Open source commitment →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY / ADVISORS CALLOUT ──────────────────────── */}
      <section className="py-16 px-6 bg-[#0d0c18] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/30 text-sm leading-relaxed">
            We&apos;re 14 days from launch. If you want to be part of what comes next — as a
            tester, as an advisor, as someone who gives a damn — reach out:{" "}
            <a href="mailto:hello@meok.ai" className="text-[#c9a84c] hover:text-[#d4b463] transition-colors font-semibold">
              hello@meok.ai
            </a>
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
