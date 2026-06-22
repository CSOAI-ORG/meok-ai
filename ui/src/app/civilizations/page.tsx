import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock, Globe, Landmark } from "lucide-react";
import { Surface } from "@/components/design-system/surface";
import { StatCard } from "@/components/design-system/stat-card";
import { CIVILIZATIONS } from "@/lib/civilizations";
import AethelgardPanel from "./aethelgard-panel";
import DebateSection from "./debate-section";
import { PheromoneMatrix, PheromoneMessage } from "@/components/sov-town/PheromoneMatrix";
import { WaitlistCount } from "@/components/waitlist-count";

export const metadata: Metadata = {
  title: "MEOK Civilizations — 12 Worlds, One Sovereign Temple",
  description:
    "Explore the 12 civilizations of MEOK. Aethelgard (EU Finance Hive) is live now; the remaining eleven unlock as the world grows.",
  alternates: { canonical: "https://meok.ai/civilizations" },
};

const FINANCE_MINISTERS = [
  "Von Weber",
  "Draghi",
  "Lagarde",
  "Scholz",
  "Macron",
  "Sunak",
  "Meloni",
  "Rutte",
  "Andersson",
  "Costa",
  "Kallas",
  "Orbán",
];

const MOCK_TOPICS = [
  "bond yield",
  "AI Act fine",
  "budget transfer",
  "stress test",
  "liquidity alert",
  "green taxonomy",
  "CBDC pilot",
  "fiscal rule",
  "crypto framework",
  "sovereign debt",
];

function generateMockMessages(agents: string[]): PheromoneMessage[] {
  const messages: PheromoneMessage[] = [];
  for (let i = 0; i < 36; i++) {
    const from = agents[Math.floor(Math.random() * agents.length)];
    const to = agents[Math.floor(Math.random() * agents.length)];
    messages.push({
      from,
      to,
      intensity: Math.max(0.2, Math.round((Math.random() * 1 + Number(from !== to) * 0.5) * 10) / 10),
      topic: MOCK_TOPICS[Math.floor(Math.random() * MOCK_TOPICS.length)],
    });
  }
  return messages;
}

const MOCK_MESSAGES = generateMockMessages(FINANCE_MINISTERS);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MEOK Civilizations",
  url: "https://meok.ai/civilizations",
  description: "12 AI-governed civilizations. Aethelgard is live; others unlock post-launch.",
};

export default function CivilizationsPage() {
  const live = CIVILIZATIONS.filter((c) => c.live);
  const locked = CIVILIZATIONS.filter((c) => !c.live);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative px-6 pt-28 pb-20 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.10)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
          <Globe size={14} /> 12 Civilizations
        </div>

        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          One map. <span className="text-[#c9a84c]">Twelve civilizations.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          MEOK is governed by 12 sovereign regions, each with its own economy, culture, and AI ministers.
          Only Aethelgard is live today — the rest awaken as the world proves itself.
        </p>

        <div className="mx-auto mt-6 flex justify-center">
          <WaitlistCount fallback={847} />
        </div>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#aethelgard"
            className="rounded-xl bg-[#c9a84c] px-8 py-3.5 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
          >
            Enter Aethelgard
          </Link>
          <Link
            href="/sov-town"
            className="rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            OpenGridWorks View <ArrowRight size={16} />
          </Link>
          <Link
            href="/town"
            className="rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            Visit MEOK Town <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Civilizations" value="12" glow="gold" />
          <StatCard label="Live Now" value={String(live.length)} glow="green" />
          <StatCard label="Agents in Aethelgard" value="12" glow="blue" />
          <StatCard label="Total Planned Agents" value="26,508" change="dormant simulation" changeType="positive" glow="purple" />
        </div>
      </section>

      {/* 12 CIV MAP */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">The Sovereign Map</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Each civilization specialises in two industry hives. Click Aethelgard to enter the live capital.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CIVILIZATIONS.map((civ) => {
            const isLive = civ.live;
            return (
              <Surface
                key={civ.id}
                variant={isLive ? "glass" : "elevated"}
                glow={isLive ? "blue" : undefined}
                className={`relative p-5 transition ${isLive ? "border-[#3b82f6]/30" : "opacity-80"}`}
              >
                {!isLive && (
                  <div className="absolute right-3 top-3 rounded-full bg-white/10 p-1.5 text-white/60">
                    <Lock size={12} />
                  </div>
                )}
                {isLive && (
                  <div className="absolute right-3 top-3 rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-bold text-green-400">
                    LIVE
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{civ.emoji}</span>
                  <div>
                    <div className="font-semibold">{civ.name}</div>
                    <div className="text-xs text-white/50">{civ.region}</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-white/60">{civ.governance}</div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {civ.hives.map((hive) => (
                    <span key={hive} className="rounded-full bg-white/[0.05] px-2 py-0.5 text-[10px] text-white/70">
                      {hive}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-white/70 line-clamp-3">{civ.description}</p>
                {!isLive && (
                  <div className="mt-3 text-xs text-white/40">Unlocks {civ.unlockDate}</div>
                )}
                {isLive && (
                  <a
                    href="#aethelgard"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#3b82f6] hover:underline"
                  >
                    Enter capital <ArrowRight size={14} />
                  </a>
                )}
              </Surface>
            );
          })}
        </div>
      </section>

      {/* AETHELGARD LIVE PANEL */}
      <section id="aethelgard" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="text-3xl">🔵</span>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Aethelgard — Frankfurt-Prime</h2>
            <p className="text-white/60">EU Finance Hive • Parliamentary Democracy • 5 founding ministers</p>
          </div>
          <span className="ml-auto rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">LIVE</span>
        </div>

        <AethelgardPanel />

        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/70">
          <Landmark size={18} className="text-[#c9a84c]" />
          <span>
            Ministers debate fiscal policy in the BFT Council chamber. Every response is streamed from a local or free-tier LLM backend —
            keeping the Phase 0 showcase running at $0.
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Link
            href="/character-creator"
            className="inline-flex items-center gap-1 text-sm font-bold text-[#c9a84c] hover:underline"
          >
            Create your own agent →
          </Link>
        </div>
      </section>

      {/* WATCH AGENTS DEBATE */}
      <DebateSection />

      {/* PHEROMONE MATRIX */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="text-2xl">🐜</span>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Pheromone Matrix</h2>
            <p className="text-white/60">Live ministerial signalling intensity across the Finance Hive</p>
          </div>
        </div>
        <Surface variant="glass" className="p-4">
          <PheromoneMatrix messages={MOCK_MESSAGES} />
        </Surface>
      </section>

      {/* ROADMAP */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Civilization Roadmap</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            The 12-civilization universe scales in phases. No premature simulation: each region activates only when the previous one is stable.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { phase: "Phase 0 — Jul 4 2026", title: "Aethelgard Finance Hive", status: "Live", desc: "5 ministers, BFT voting, EU AI Act compliance page." },
            { phase: "Phase 1 — Jul 2026", title: "4 Capitals + 12 Regionals", status: "Locked", desc: "Aethelgard, Sino-Nova, Pan-America, Nubia Prime." },
            { phase: "Phase 2 — Aug 2026", title: "6 Civilizations", status: "Locked", desc: "Add Brasilia and Indo-Sphere." },
            { phase: "Phase 3 — Sep 2026", title: "Full Globe (12 Capitals)", status: "Locked", desc: "All 12 capitals active with dormancy for satellites." },
            { phase: "Phase 4 — Nov 2026+", title: "Deep Simulation", status: "Locked", desc: "Player-driven dormancy; 26,508 agents exist as state." },
          ].map((p) => (
            <div key={p.phase} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className={`shrink-0 rounded-full px-2 py-1 text-xs font-bold ${p.status === 'Live' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/50'}`}>
                {p.status}
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">{p.phase}</div>
                <div className="mt-1 font-semibold">{p.title}</div>
                <p className="text-sm text-white/60">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Witness the first civilization.</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Aethelgard is live today. Talk to its ministers, watch them vote, and help shape the roadmap for the remaining eleven.
        </p>
        <Link
          href="#aethelgard"
          className="mx-auto mt-8 inline-block rounded-xl bg-[#c9a84c] px-10 py-4 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
        >
          Enter the Finance Hive
        </Link>
      </section>
    </main>
  );
}
