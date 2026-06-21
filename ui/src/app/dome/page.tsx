import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCard } from "@/components/design-system/feature-card";
import { Surface } from "@/components/design-system/surface";

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

const LAYERS = [
  {
    title: "MEOK TOWN",
    subtitle: "Surface Layer",
    description:
      "Residential, governance, market, industrial, agriculture, innovation, and entertainment districts. Where daily life happens.",
    iconVariant: "gold" as const,
    details: ["Player housing", "Town Hall & BFT Council", "Shops & auctions", "Factories & farms"],
  },
  {
    title: "MEOK DOME",
    subtitle: "Underground Layer",
    description:
      "Mining networks, utility tunnels, secret factions, and archaeological sites. The resource foundation of the economy.",
    iconVariant: "teal" as const,
    details: ["Ore & rare materials", "Power & data grids", "Underground economy", "World-history artifacts"],
  },
  {
    title: "MEOK SKY",
    subtitle: "Transport Layer",
    description:
      "Air traffic, weather systems, surveillance, and communication networks. The connective tissue above the town.",
    iconVariant: "blue" as const,
    details: ["Delivery drones", "Air taxis", "Weather events", "Radio & data networks"],
  },
  {
    title: "MEOK ORBIT",
    subtitle: "Space Layer",
    description:
      "Space stations, asteroid mining, satellite networks, and the lunar base. The first sovereign off-world economy.",
    iconVariant: "purple" as const,
    details: ["Research stations", "Asteroid mining", "Satellite comms", "Lunar colony"],
  },
  {
    title: "MEOK DEEP SPACE",
    subtitle: "Exploration Layer",
    description:
      "Procedural star systems, alien factions, anomalies, and terraforming. The long-horizon frontier.",
    iconVariant: "orange" as const,
    details: ["Procedural planets", "Alien diplomacy", "Anomaly research", "Terraforming projects"],
  },
  {
    title: "MEOK COUNCIL",
    subtitle: "Governance Layer",
    description:
      "Hybrid AI-human governance. 47 CSOAI agents + elected human seats. Byzantine-fault-tolerant consensus on every law.",
    iconVariant: "green" as const,
    details: ["47 CSOAI agents", "Elected human seats", "BFT consensus", "Audit trail"],
  },
];

const DISTRICTS = [
  { name: "Residential", icon: "🏠", count: "1,240 plots" },
  { name: "Governance", icon: "🏛️", count: "Town Hall" },
  { name: "Market", icon: "🛒", count: "Open 24/7" },
  { name: "Industrial", icon: "🏭", count: "47 factories" },
  { name: "Agriculture", icon: "🌾", count: "312 farms" },
  { name: "Innovation", icon: "🔬", count: "88 labs" },
  { name: "Entertainment", icon: "🎭", count: "16 venues" },
  { name: "Spaceport", icon: "🚀", count: "3 pads" },
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
            href="/universe"
            className="rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            Read the Vision
          </Link>
        </div>
      </section>

      {/* WORLD MAP PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Surface variant="elevated" className="relative overflow-hidden p-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #2d9b8a 0%, transparent 60%)" }} />
          <div className="relative flex min-h-[320px] flex-col items-center justify-center p-10 text-center">
            <div className="text-6xl">🗺️</div>
            <h2 className="mt-4 text-2xl font-bold">Interactive World Map</h2>
            <p className="mx-auto mt-2 max-w-lg text-white/60">
              Live agent blips, district zoning, council jurisdictions, and orbital tracks. Prototype
              coming to pioneers in Month 1.
            </p>
          </div>
        </Surface>
      </section>

      {/* LAYERS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
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
              description={
                <>
                  <span className="block text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
                    {layer.subtitle}
                  </span>
                  <span className="mt-2 block">{layer.description}</span>
                  <ul className="mt-3 space-y-1 text-sm text-white/50">
                    {layer.details.map((d) => (
                      <li key={d}>• {d}</li>
                    ))}
                  </ul>
                </>
              }
              iconVariant={layer.iconVariant}
              glow={layer.iconVariant}
            />
          ))}
        </div>
      </section>

      {/* DISTRICTS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Town Districts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Every district is a specialized economic and social zone. Players and agents own, work, and
            govern them.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DISTRICTS.map((d) => (
            <div
              key={d.name}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#c9a84c]/30"
            >
              <span className="text-3xl">{d.icon}</span>
              <div>
                <div className="font-semibold">{d.name}</div>
                <div className="text-sm text-white/50">{d.count}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Step inside the dome.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
          Pioneer sign-ups get first access to the town simulation, a starter character, and a vote in
          the first council election.
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
