import type { Metadata } from "next";
import Link from "next/link";
import { Home, Mountain, Cloud, Orbit, Sparkles, Scale, Users, Landmark, MapPin, ScrollText, Rocket, Gamepad2, Bot, Plane, Satellite, Anchor, ArrowRight, Globe, Cpu, Wallet, TrendingUp } from "lucide-react";
import { FeatureCard } from "@/components/design-system/feature-card";
import { StatCard } from "@/components/design-system/stat-card";
import { Surface } from "@/components/design-system/surface";
import PioneerSignup from "../pioneer/pioneer-signup";

export const metadata: Metadata = {
  title: "MEOK DOME — The Sovereign World Simulation",
  description:
    "MEOK DOME is the persistent simulation layer of MEOK Universe: town, underground, sky, orbit, and deep space — all governed by the MEOK Council.",
  alternates: { canonical: "https://meok.ai/dome" },
  openGraph: {
    title: "MEOK DOME — The Sovereign World Simulation",
    description:
      "From the town square to deep space, MEOK DOME is a living simulation where humans, AI agents, and machines coexist under CSOAI governance.",
    type: "website",
    url: "https://meok.ai/dome",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MEOK DOME — The Sovereign World Simulation",
  url: "https://meok.ai/dome",
  description:
    "MEOK DOME is the persistent simulation layer of MEOK Universe: town, underground, sky, orbit, and deep space.",
};

import { DomeWorldMap, DomeLiveFeed } from "./dome-interactive";

const LAYERS = [
  {
    title: "MEOK TOWN",
    subtitle: "Surface Layer",
    description: "Residential, governance, market, industrial, agriculture, innovation, and entertainment districts. Where daily life happens.",
    iconVariant: "gold" as const,
    Icon: Home,
    details: ["Player housing", "Town Hall & BFT Council", "Shops & auctions", "Factories & farms"],
    href: "#districts",
  },
  {
    title: "MEOK DOME",
    subtitle: "Underground Layer",
    description: "Mining networks, utility tunnels, secret factions, and archaeological sites. The resource foundation of the economy.",
    iconVariant: "teal" as const,
    Icon: Mountain,
    details: ["Ore & rare materials", "Power & data grids", "Underground economy", "World-history artifacts"],
    href: "#layers",
  },
  {
    title: "MEOK SKY",
    subtitle: "Transport Layer",
    description: "Air traffic, weather systems, surveillance, and communication networks. The connective tissue above the town.",
    iconVariant: "blue" as const,
    Icon: Cloud,
    details: ["Delivery drones", "Air taxis", "Weather events", "Radio & data networks"],
    href: "#vehicles",
  },
  {
    title: "MEOK ORBIT",
    subtitle: "Space Layer",
    description: "Space stations, asteroid mining, satellite networks, and the lunar base. The first sovereign off-world economy.",
    iconVariant: "purple" as const,
    Icon: Orbit,
    details: ["Research stations", "Asteroid mining", "Satellite comms", "Lunar colony"],
    href: "#space",
  },
  {
    title: "MEOK DEEP SPACE",
    subtitle: "Exploration Layer",
    description: "Procedural star systems, alien factions, anomalies, and terraforming. The long-horizon frontier.",
    iconVariant: "orange" as const,
    Icon: Sparkles,
    details: ["Procedural planets", "Alien diplomacy", "Anomaly research", "Terraforming projects"],
    href: "#space",
  },
  {
    title: "MEOK COUNCIL",
    subtitle: "Governance Layer",
    description: "Hybrid AI-human governance. 47 CSOAI agents + elected human seats. Byzantine-fault-tolerant consensus on every law.",
    iconVariant: "green" as const,
    Icon: Scale,
    details: ["47 CSOAI agents", "Elected human seats", "BFT consensus", "Audit trail"],
    href: "/council",
  },
];

const DISTRICTS = [
  { name: "Residential", icon: "🏠", count: "1,240 plots", href: "/pioneer" },
  { name: "Governance", icon: "🏛️", count: "Town Hall", href: "/council" },
  { name: "Market", icon: "🛒", count: "Open 24/7", href: "/pioneer" },
  { name: "Industrial", icon: "🏭", count: "47 factories", href: "/pioneer" },
  { name: "Agriculture", icon: "🌾", count: "312 farms", href: "/pioneer" },
  { name: "Innovation", icon: "🔬", count: "88 labs", href: "/universe" },
  { name: "Entertainment", icon: "🎭", count: "16 venues", href: "/gaming" },
  { name: "Spaceport", icon: "🚀", count: "3 pads", href: "/go" },
];

const PORTALS = [
  { href: "/universe", icon: "🌍", label: "MEOK Universe", desc: "The sovereign AI world vision", color: "#c9a84c" },
  { href: "/go", icon: "🗺️", label: "MEOK GO", desc: "Real-world character overlay", color: "#2d9b8a" },
  { href: "/pioneer", icon: "🚀", label: "Pioneer Program", desc: "Become a founding citizen", color: "#3b82f6" },
  { href: "/council", icon: "🏛️", label: "MEOK Council", desc: "Hybrid AI-human governance", color: "#22c55e" },
  { href: "/characters", icon: "🧬", label: "Characters", desc: "Meet the AI citizens", color: "#F472B6" },
  { href: "/gaming", icon: "🎮", label: "Gaming Hive", desc: "AI-powered gaming infrastructure", color: "#FB923C" },
];

const VEHICLES = [
  { icon: Bot, name: "Humanoid Bot", role: "Companion & labor unit", status: "Prototyping", color: "#c9a84c" },
  { icon: Plane, name: "Delivery Drone", role: "Sky-layer logistics", status: "Flight tests", color: "#3b82f6" },
  { icon: Anchor, name: "Ground Rover", role: "Industrial transport", status: "In simulation", color: "#22c55e" },
  { icon: Satellite, name: "Orbital Shuttle", role: "Town-to-orbit cargo", status: "Design review", color: "#8b5cf6" },
];

const RESEARCH_LINKS = [
  { label: "MEOK Universe Whitepaper", url: "https://github.com/CSOAI-ORG/clawd-workspace/blob/main/MEOK_UNIVERSE_WHITEPAPER.md" },
  { label: "Pioneer Program 90-Day Roadmap", url: "https://github.com/CSOAI-ORG/clawd-workspace/blob/main/MEOK_PIONEER_PROGRAM_90DAY.md" },
  { label: "Research seeds", url: "https://github.com/CSOAI-ORG/clawd-workspace/tree/main/meok-universe/research" },
  { label: "Earth + Space master doc", url: "https://github.com/CSOAI-ORG/clawd-workspace/blob/main/meok-universe/research/meok_earth_space_master.md" },
];

export default function DomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative px-6 pt-28 pb-20 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(45,155,138,0.12)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.08)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#2d9b8a]/30 bg-[#2d9b8a]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2d9b8a]">
          <span>🌐</span> Persistent Simulation
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          MEOK <span className="text-[#2d9b8a]">DOME</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          The sovereign world simulation. Five layers from the town square to deep space, governed by
          the MEOK Council, inhabited by AI citizens, and open to human pioneers.
        </p>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/pioneer"
            className="rounded-xl bg-[#c9a84c] px-8 py-3.5 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
          >
            Claim Your Plot
          </Link>
          <Link
            href="#world-map"
            className="rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            Explore the Map
          </Link>
        </div>
      </section>

      {/* STATUS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="AI Agents Online" value="47+" glow="teal" icon={<Users size={20} />} />
          <StatCard label="Council Sessions" value="Live" glow="gold" icon={<Landmark size={20} />} />
          <StatCard label="Pioneer Plots" value="1,240 / 10,000" glow="blue" icon={<MapPin size={20} />} />
          <StatCard label="Research Seeds" value="8" change="whitepapers in progress" changeType="positive" glow="purple" icon={<ScrollText size={20} />} />
        </div>
      </section>

      {/* INTERACTIVE MAP */}
      <section id="world-map" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">The Living World Map</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Click any node to explore. Agent blips, district zoning, council jurisdictions, and orbital tracks.
          </p>
        </div>
        <DomeWorldMap />
      </section>

      {/* PORTALS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Explore the Universe</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            The DOME is the hub. Every doorway leads to a different layer of MEOK.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PORTALS.map((p) => (
            <Link key={p.href} href={p.href}>
              <Surface variant="glass" hover className="flex h-full items-start gap-4 p-5">
                <span className="text-3xl">{p.icon}</span>
                <div>
                  <h3 className="font-semibold" style={{ color: p.color }}>{p.label}</h3>
                  <p className="mt-1 text-sm text-white/60">{p.desc}</p>
                </div>
                <ArrowRight size={16} className="ml-auto shrink-0 text-white/30" />
              </Surface>
            </Link>
          ))}
        </div>
      </section>

      {/* LAYERS */}
      <section id="layers" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Five Layers, One World</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Each layer has its own economy, governance needs, and research output.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LAYERS.map((layer) => (
            <FeatureCard
              key={layer.title}
              title={layer.title}
              icon={layer.Icon}
              iconVariant={layer.iconVariant}
              glow={layer.iconVariant}
              description={
                <>
                  <span className="block text-xs font-bold uppercase tracking-widest text-[#c9a84c]">{layer.subtitle}</span>
                  <span className="mt-2 block">{layer.description}</span>
                  <ul className="mt-3 space-y-1 text-sm text-white/50">
                    {layer.details.map((d) => (
                      <li key={d}>• {d}</li>
                    ))}
                  </ul>
                </>
              }
              action={
                <Link href={layer.href} className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#c9a84c" }}>
                  Explore {layer.title.split(" ")[1]} <ArrowRight size={14} />
                </Link>
              }
            />
          ))}
        </div>
      </section>

      {/* VEHICLES & ROBOTS */}
      <section id="vehicles" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Vehicles & Robots</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            The machines that move between layers. Some already in simulation; others coming to pioneers first.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VEHICLES.map((v) => (
            <Surface key={v.name} variant="elevated" className="p-5">
              <div className="flex items-center justify-between">
                <v.icon size={24} style={{ color: v.color }} />
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/50">{v.status}</span>
              </div>
              <h3 className="mt-4 font-semibold">{v.name}</h3>
              <p className="mt-1 text-sm text-white/60">{v.role}</p>
            </Surface>
          ))}
        </div>
      </section>

      {/* SPACE LAYERS */}
      <section id="space" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Space Layers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Beyond the town, the economy extends upward — first to orbit, then to the stars.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: "MEOK ORBIT", desc: "Stations, asteroid mining, satellite networks, and the lunar base.", icon: <Satellite size={24} className="text-[#8b5cf6]" /> },
            { title: "MEOK DEEP SPACE", desc: "Procedural star systems, alien factions, anomalies, and terraforming.", icon: <Sparkles size={24} className="text-[#e07340]" /> },
            { title: "The GATE", desc: "Long-range travel hub for multiplayer expeditions and first contact.", icon: <Rocket size={24} className="text-[#c9a84c]" /> },
          ].map((s) => (
            <Surface key={s.title} variant="glass" className="p-6">
              <div className="rounded-xl bg-white/[0.03] p-3 w-fit">{s.icon}</div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
            </Surface>
          ))}
        </div>
      </section>

      {/* EARTH + SPACE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">MEOK Earth + MEOK Space</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Your real address is the spawn point. From there, build upward — rooftop, underground, orbital station, Moon, Mars, and beyond.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <Surface variant="elevated" className="p-6 md:p-8">
            <div className="flex items-center gap-3 text-[#2d9b8a]">
              <Globe size={24} />
              <h3 className="text-xl font-semibold">MEOK Earth</h3>
            </div>
            <p className="mt-3 text-white/70">
              A digital twin built on CesiumJS, OpenStreetMap, NASA terrain, and Mapillary street photos. Your house, your street,
              your neighborhood — populated with AI citizens and governed by the MEOK Council.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>• Property ownership tied to real addresses</li>
              <li>• GTA-style wanted/witness systems</li>
              <li>• Real weather, wildlife, and emergent events</li>
              <li>• AI radio news about your town</li>
            </ul>
          </Surface>
          <Surface variant="elevated" className="p-6 md:p-8">
            <div className="flex items-center gap-3 text-[#8b5cf6]">
              <Rocket size={24} />
              <h3 className="text-xl font-semibold">MEOK Space</h3>
            </div>
            <p className="mt-3 text-white/70">
              Real NASA/ESA data for the Moon, Mars, asteroids, and exoplanets. Build rockets, mine Helium-3, establish colonies,
              and encounter alien factions — all part of the same persistent economy.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>• Earth → Orbit → Moon → Mars gameplay loop</li>
              <li>• OpenSpace + NASA Horizons orbital mechanics</li>
              <li>• Asteroid mining & rare minerals</li>
              <li>• First contact & alien diplomacy</li>
            </ul>
          </Surface>
        </div>
      </section>

      {/* OPEN SOURCE STACK */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">$0 Open-Source Stack</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Real-world data, 3D worlds, AI characters, and orbital mechanics — all free or open-source.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Globe, label: "Real Earth", value: "CesiumJS + OSM", color: "#2d9b8a" },
            { icon: Cpu, label: "AI Backend", value: "Ollama + OpenRouter", color: "#c9a84c" },
            { icon: Satellite, label: "Space", value: "OpenSpace + NASA", color: "#8b5cf6" },
            { icon: Bot, label: "Characters", value: "MetaHuman + UE5", color: "#F472B6" },
          ].map((s) => (
            <Surface key={s.label} variant="glass" className="p-5">
              <s.icon size={22} style={{ color: s.color }} />
              <div className="mt-3 text-xs font-bold uppercase tracking-widest text-white/40">{s.label}</div>
              <div className="mt-1 font-semibold">{s.value}</div>
            </Surface>
          ))}
        </div>
      </section>

      {/* VALUE EXCHANGE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Play Free. Earn as You Go.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Governance votes, research surveys, and world-building contributions earn real x402 micropayments.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Wallet, label: "Governance Vote", value: "$0.001", desc: "Per council vote" },
            { icon: ScrollText, label: "Research Survey", value: "$0.01", desc: "Per completed survey" },
            { icon: Cpu, label: "World Building", value: "$0.10", desc: "Per white-paper contribution" },
            { icon: TrendingUp, label: "Data Revenue", value: "Revenue share", desc: "From licensed datasets" },
          ].map((v) => (
            <Surface key={v.label} variant="elevated" className="p-5">
              <v.icon size={20} className="text-[#c9a84c]" />
              <div className="mt-3 text-xs font-bold uppercase tracking-widest text-white/40">{v.label}</div>
              <div className="mt-1 text-xl font-semibold">{v.value}</div>
              <p className="mt-1 text-sm text-white/60">{v.desc}</p>
            </Surface>
          ))}
        </div>
      </section>

      {/* LIVE FEED + PIONEER SIGNUP */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Live World Feed</h2>
            <p className="mt-4 max-w-md text-white/60">
              Simulated council votes, agent trades, pioneer arrivals, and research outputs — the pulse of the dome.
            </p>
            <div className="mt-8">
              <DomeLiveFeed />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Join the Pioneers</h2>
            <p className="mt-4 max-w-md text-white/60">
              Apply here for early access. Claim a plot, raise a character, and vote in the first council election.
            </p>
            <Surface variant="elevated" className="mt-8 p-6 md:p-8">
              <PioneerSignup />
            </Surface>
          </div>
        </div>
      </section>

      {/* DISTRICTS */}
      <section id="districts" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Town Districts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Every district is a specialized economic and social zone. Players and agents own, work, and govern them.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DISTRICTS.map((d) => (
            <Link key={d.name} href={d.href}>
              <div className="flex h-full items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#c9a84c]/30">
                <span className="text-3xl">{d.icon}</span>
                <div>
                  <div className="font-semibold">{d.name}</div>
                  <div className="text-sm text-white/50">{d.count}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* RESEARCH & WHITEPAPER */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Surface variant="elevated" className="p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Built on Research</h2>
              <p className="mt-4 text-white/70">
                MEOK Universe is backed by 9+ research seeds, 160+ searches, 20 games analyzed, and a publishable whitepaper roadmap.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {RESEARCH_LINKS.map((r) => (
                  <a
                    key={r.url}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#c9a84c]/30 hover:bg-white/[0.07]"
                  >
                    {r.label} ↗
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-[#c9a84c]/20 bg-[#c9a84c]/5 p-6">
              <div className="text-sm font-bold uppercase tracking-widest text-[#c9a84c]">Pioneer Program</div>
              <h3 className="mt-2 text-xl font-semibold">90-Day Roadmap</h3>
              <p className="mt-2 text-sm text-white/70">
                From waitlist to the first sovereign AI world: 1,000 pioneers, 1 published paper, and a public demo by Day 90.
              </p>
              <a
                href="https://github.com/CSOAI-ORG/clawd-workspace/blob/main/MEOK_PIONEER_PROGRAM_90DAY.md"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#c9a84c]"
              >
                Read the roadmap <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Surface>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Step inside the dome.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
          Pioneer sign-ups get first access to the town simulation, a starter character, and a vote in the first council election.
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
