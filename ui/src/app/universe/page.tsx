import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCard } from "@/components/design-system/feature-card";
import { StatCard } from "@/components/design-system/stat-card";
import { Surface } from "@/components/design-system/surface";

export const metadata: Metadata = {
  title: "MEOK UNIVERSE — A Sovereign World for Humans, AI & Machines",
  description:
    "MEOK UNIVERSE is a persistent AI world where humans, AI agents, robotics, and space systems coexist under CSOAI governance. Play, research, and build the first sovereign digital society.",
  alternates: { canonical: "https://meok.ai/universe" },
  openGraph: {
    title: "MEOK UNIVERSE — A Sovereign World for Humans, AI & Machines",
    description:
      "The first AI-governed digital nation. Humans, AI characters, robots, and spacecraft sharing one persistent world — generating real research and white papers.",
    type: "website",
    url: "https://meok.ai/universe",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MEOK UNIVERSE — A Sovereign World for Humans, AI & Machines",
  url: "https://meok.ai/universe",
  description:
    "MEOK UNIVERSE is a persistent AI world where humans, AI agents, robotics, and space systems coexist under CSOAI governance.",
};

const PILLARS = [
  {
    title: "MEOK TOWN",
    description:
      "Surface life-simulation layer. AI citizens with needs, memories, jobs, and relationships live in persistent districts.",
    iconVariant: "gold" as const,
  },
  {
    title: "MEOK DOME",
    description:
      "Underground resource and industrial layer. Mining, power, data, and secret factions beneath the streets.",
    iconVariant: "teal" as const,
  },
  {
    title: "MEOK SKY",
    description:
      "Transport and weather layer. Drones, air taxis, surveillance, and communication networks above the town.",
    iconVariant: "blue" as const,
  },
  {
    title: "MEOK ORBIT",
    description:
      "Space stations, asteroid mining, satellite networks, and the lunar base — humanity's first sovereign off-world colony.",
    iconVariant: "purple" as const,
  },
  {
    title: "MEOK DEEP SPACE",
    description:
      "Procedural star systems, alien factions, anomalies, and terraforming projects for long-horizon exploration.",
    iconVariant: "orange" as const,
  },
  {
    title: "MEOK COUNCIL",
    description:
      "Hybrid AI-human governance. 47 CSOAI agents + elected human seats reach Byzantine-fault-tolerant consensus on every law.",
    iconVariant: "green" as const,
  },
];

const INSPIRATIONS = [
  { game: "The Sims", steal: "Needs, emotions, daily routines" },
  { game: "EVE Online", steal: "Player-driven economy, real trade" },
  { game: "Dwarf Fortress", steal: "Emergent world history & legends" },
  { game: "RimWorld", steal: "AI Storyteller dynamic difficulty" },
  { game: "Pokémon", steal: "Collection & evolution paths" },
  { game: "Animal Crossing", steal: "Real-time persistence" },
  { game: "No Man's Sky", steal: "Procedural planets" },
  { game: "Character.AI", steal: "Deep AI relationships" },
];

export default function UniversePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative px-6 pt-28 pb-20 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.10)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(45,155,138,0.08)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
          <span>🌍</span> Category of One
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          MEOK <span className="text-[#c9a84c]">UNIVERSE</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          A persistent AI world where thousands of humans live alongside thousands of AI agents in a
          self-governing digital society — powered by CSOAI&apos;s 28-industry governance engine.
        </p>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/pioneer"
            className="rounded-xl bg-[#c9a84c] px-8 py-3.5 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
          >
            Become a Pioneer
          </Link>
          <Link
            href="/dome"
            className="rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            Explore the World
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="AI Agents" value="47+" glow="gold" />
          <StatCard label="Industry Domains" value="28" glow="teal" />
          <StatCard label="World Layers" value="5" glow="purple" />
          <StatCard label="Games Analyzed" value="20" change="for design DNA" changeType="positive" glow="blue" />
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">World Architecture</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Six interlocking systems. From the town square to deep space, every layer is governed,
            attested, and alive.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <FeatureCard key={p.title} title={p.title} description={p.description} iconVariant={p.iconVariant} glow={p.iconVariant} />
          ))}
        </div>
      </section>

      {/* FLYWHEEL */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Surface variant="elevated" className="p-8 md:p-12">
          <h2 className="text-center text-3xl font-bold">The Sovereign Flywheel</h2>
          <div className="mt-10 grid gap-6 text-center sm:grid-cols-2 md:grid-cols-3">
            {[
              "More Human Players",
              "More AI Agent Interactions",
              "More Research Data Generated",
              "Better White Papers Published",
              "More Regulatory & Enterprise Interest",
              "More Funding → Bigger World",
            ].map((step, i) => (
              <div key={step} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">Step {i + 1}</div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      {/* INSPIRATIONS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What We Steal From the Best Games</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            8 parallel agents. 160+ searches. 20 games analyzed. 455+ sources. Then we add sovereign
            governance.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INSPIRATIONS.map((item) => (
            <div
              key={item.game}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#c9a84c]/30"
            >
              <div className="text-sm font-bold text-[#c9a84c]">{item.game}</div>
              <p className="mt-2 text-sm text-white/70">{item.steal}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">The world needs pioneers.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
          Join the first sovereign digital society. Get early access, co-author research, and help
          govern a world where humans and AI coexist.
        </p>
        <Link
          href="/pioneer"
          className="mx-auto mt-8 inline-block rounded-xl bg-[#c9a84c] px-10 py-4 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
        >
          Join the Pioneer Program
        </Link>
      </section>
    </main>
  );
}
