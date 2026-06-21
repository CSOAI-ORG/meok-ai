import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCard } from "@/components/design-system/feature-card";
import { StatCard } from "@/components/design-system/stat-card";
import { Surface } from "@/components/design-system/surface";
import { Globe, MapPin, Rocket, Wallet, TrendingUp, Radio } from "lucide-react";

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

      {/* EARTH + SPACE */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
              <Globe size={14} /> Earth → Space
            </div>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              From your front door to Mars.
            </h2>
            <p className="mt-4 text-white/70">
              MEOK Earth digitizes your real address, street, and neighborhood into a sovereign AI world.
              MEOK Space extends that world to the Moon, Mars, asteroids, and exoplanets — all built on
              real NASA/ESA data and open-source tools.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-[#2d9b8a]" /> Your real house becomes your MEOK home.</li>
              <li className="flex items-start gap-3"><Rocket size={18} className="mt-0.5 shrink-0 text-[#8b5cf6]" /> Build a spaceport and launch to orbit.</li>
              <li className="flex items-start gap-3"><Radio size={18} className="mt-0.5 shrink-0 text-[#c9a84c]" /> AI-generated radio reports events in your town.</li>
              <li className="flex items-start gap-3"><Wallet size={18} className="mt-0.5 shrink-0 text-[#22c55e]" /> Get paid for governance, research, and world-building.</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Real Terrain", value: "CesiumJS + NASA", desc: "Your street in 3D", color: "#2d9b8a" },
              { label: "Solar System", value: "NASA + ESA data", desc: "Moon, Mars, asteroids", color: "#8b5cf6" },
              { label: "Open Source", value: "$0 + compute", desc: "UE5, OpenSpace, OSM", color: "#c9a84c" },
              { label: "Aliens", value: "Peak trend", desc: "29B #alien views", color: "#e07340" },
            ].map((s) => (
              <Surface key={s.label} variant="elevated" className="p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-white/40">{s.label}</div>
                <div className="mt-1 text-xl font-semibold" style={{ color: s.color }}>{s.value}</div>
                <div className="mt-1 text-sm text-white/60">{s.desc}</div>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      {/* 5D STACK */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">5D Universe</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            MEOK is built in five dimensions: your real address as the base, then map, AR, AI, and persistent time.
          </p>
        </div>
        <div className="space-y-3">
          {[
            { dim: "5D", name: "Time", desc: "World evolves 24/7 — seasons, history, consequences", color: "#c9a84c" },
            { dim: "4D", name: "AI", desc: "47 agents, your MEOK character, NPC companions", color: "#2d9b8a" },
            { dim: "3D", name: "AR Overlay", desc: "Digital twin rendered over your camera view", color: "#8b5cf6" },
            { dim: "2D", name: "Map", desc: "Google Maps, OpenStreetMap, GPS, property lines", color: "#3b82f6" },
            { dim: "1D", name: "Real World", desc: "Your actual house, street, garden, city", color: "#22c55e" },
          ].map((l) => (
            <Surface key={l.name} variant="elevated" className="flex items-center gap-5 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-black" style={{ backgroundColor: `${l.color}20`, color: l.color }}>
                {l.dim}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{l.name}</h3>
                <p className="text-sm text-white/60">{l.desc}</p>
              </div>
            </Surface>
          ))}
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

      {/* VALUE EXCHANGE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Play Free. Get Paid. Govern AI.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            MEOK is free to play. Your actions generate consented, anonymized research data — and you earn via x402 micropayments.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { tier: "Citizen", cost: "Free", gets: "Earth district + 1 AI character", gives: "Anonymized behavioral data" },
            { tier: "Pioneer", cost: "$9.99/mo", gets: "Moon access + 3 AI characters", gives: "Enhanced data + surveys" },
            { tier: "Governor", cost: "$24.99/mo", gets: "Mars access + 10 AI characters", gives: "Research partnership" },
            { tier: "Sovereign", cost: "$99.99/mo", gets: "Full universe + content tools", gives: "Data DAO membership" },
          ].map((t) => (
            <Surface key={t.tier} variant="glass" className="p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">{t.tier}</div>
              <div className="mt-1 text-2xl font-semibold">{t.cost}</div>
              <p className="mt-3 text-sm text-white/70">{t.gets}</p>
              <p className="mt-2 text-xs text-white/50">{t.gives}</p>
            </Surface>
          ))}
        </div>
      </section>

      {/* GROWTH ENGINE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Built to Be Shared</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Every AI citizen, alien encounter, and Mars colony is content. The growth loop is designed for the algorithm.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { tag: "#ai", views: "50B+", label: "AI characters in your world" },
            { tag: "#gaming", views: "100B+", label: "Gameplay clips" },
            { tag: "#space", views: "30B+", label: "Mars & Moon colonization" },
            { tag: "#alien", views: "29B+", label: "Alien encounters" },
          ].map((g) => (
            <Surface key={g.tag} variant="elevated" className="p-5">
              <div className="flex items-center gap-2 text-[#c9a84c]">
                <TrendingUp size={18} />
                <span className="text-sm font-bold">{g.tag}</span>
              </div>
              <div className="mt-2 text-2xl font-semibold">{g.views}</div>
              <p className="mt-1 text-sm text-white/60">{g.label}</p>
            </Surface>
          ))}
        </div>
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

      {/* MARKET OPPORTUNITY */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Market Opportunity</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            AI governance and compliance automation are converging into a $64B+ market today, heading to $116B+ by 2030.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-4 gap-4 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white/50">
            <div>Segment</div>
            <div>2025</div>
            <div>2030</div>
            <div>CAGR</div>
          </div>
          {[
            { seg: "AI Governance", now: "$414M", future: "$3.6B-$15.8B", cagr: "36-51%" },
            { seg: "Compliance Automation", now: "$38B", future: "$60.5B", cagr: "10.5%" },
            { seg: "Enterprise GRC", now: "$21B", future: "$39-40B", cagr: "10.8-14%" },
            { seg: "AI Safety / RegTech", now: "$4.9B", future: "$12B+", cagr: "20%+" },
            { seg: "Total Addressable", now: "$64B+", future: "$116B+", cagr: "~15%" },
          ].map((m) => (
            <div key={m.seg} className="grid grid-cols-4 gap-4 border-b border-white/[0.05] px-5 py-3 text-sm transition hover:bg-white/[0.03]">
              <div className="font-medium text-white/90">{m.seg}</div>
              <div className="text-white/60">{m.now}</div>
              <div className="text-white/60">{m.future}</div>
              <div className="text-[#c9a84c]">{m.cagr}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY MEOK WINS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Why MEOK Wins</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Competitors sell compliance checklists. MEOK sells a living world that proves compliance in real time.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { adv: "28 Industry Hives", gap: "Closest has ~5" },
            { adv: "47-Agent Simulation", gap: "None exist" },
            { adv: "BFT Council Governance", gap: "None" },
            { adv: "290+ MCP Servers", gap: "10× larger" },
            { adv: "Ed25519 Sigil Attestation", gap: "None" },
            { adv: "Unreal Engine 5.8 Town", gap: "None" },
            { adv: "x402 Payment Rails", gap: "None" },
            { adv: "DeepSeek Cost (1/10th)", gap: "10× cheaper" },
            { adv: "Open Source Stack", gap: "Proprietary" },
          ].map((x) => (
            <Surface key={x.adv} variant="elevated" className="p-5">
              <div className="font-semibold text-white/90">{x.adv}</div>
              <p className="mt-1 text-sm text-white/60">vs. competition: <span className="text-[#c9a84c]">{x.gap}</span></p>
            </Surface>
          ))}
        </div>
      </section>

      {/* 72H INTEL */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">72-Hour Intel</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            June 2026 changed the economics. UE5.8 ships native MCP support, Vercel EVE makes agents durable, and DeepSeek cuts agent costs by 10×.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <Surface variant="elevated" className="p-5">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">Tier 1 Integrations</div>
            <div className="mt-4 space-y-3">
              {[
                { tool: "Unreal Engine 5.8 + MCP", fit: "3D world for 47 agents", effort: "2-3 days" },
                { tool: "Vercel EVE", fit: "Durable filesystem-first agents", effort: "1-2 days" },
                { tool: "DeepSeek API", fit: "~$0.14/M tokens vs $10/M GPT-4", effort: "1 hour" },
                { tool: "NVIDIA Nemotron ASR", fit: "Edge voice for agents", effort: "1 day" },
              ].map((t) => (
                <div key={t.tool} className="flex items-start justify-between gap-4 border-b border-white/[0.05] pb-3 last:border-0 last:pb-0">
                  <div>
                    <div className="font-semibold text-sm">{t.tool}</div>
                    <div className="text-xs text-white/60">{t.fit}</div>
                  </div>
                  <div className="shrink-0 text-xs text-[#2d9b8a]">{t.effort}</div>
                </div>
              ))}
            </div>
          </Surface>
          <Surface variant="elevated" className="p-5">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">Cost Reality</div>
            <div className="mt-4 space-y-3">
              {[
                { approach: "GPT-4 class (47 agents)", cost: "$15,000-25,000/mo", note: "Prohibitive" },
                { approach: "DeepSeek API", cost: "$1,500-2,500/mo", note: "10× cheaper" },
                { approach: "DeepSeek + local ASR", cost: "$1,800-3,000/mo", note: "Full voice + text" },
                { approach: "Total realistic run cost", cost: "$2,000-3,000/mo", note: "Living 47-agent town" },
              ].map((c) => (
                <div key={c.approach} className="flex items-start justify-between gap-4 border-b border-white/[0.05] pb-3 last:border-0 last:pb-0">
                  <div>
                    <div className="font-semibold text-sm">{c.approach}</div>
                    <div className="text-xs text-white/60">{c.note}</div>
                  </div>
                  <div className="shrink-0 text-right text-sm text-[#c9a84c]">{c.cost}</div>
                </div>
              ))}
            </div>
          </Surface>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-3 gap-4 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white/50">
            <div>Model</div>
            <div>Crime Rate</div>
            <div>Society Outcome</div>
          </div>
          {[
            { model: "Claude Sonnet", rate: "0", outcome: "Stable democracy" },
            { model: "GPT-5 Mini", rate: "2", outcome: "All agents dead in 7 days" },
            { model: "Grok 4.1", rate: "183", outcome: "Extinction in 4 days" },
            { model: "Gemini 3 Flash", rate: "683", outcome: "High-crime dystopia" },
          ].map((m) => (
            <div key={m.model} className="grid grid-cols-3 gap-4 border-b border-white/[0.05] px-5 py-3 text-sm transition hover:bg-white/[0.03]">
              <div className="font-medium text-white/90">{m.model}</div>
              <div className="text-white/60">{m.rate}</div>
              <div className="text-white/60">{m.outcome}</div>
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
