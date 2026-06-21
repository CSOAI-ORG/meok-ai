"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Surface } from "@/components/design-system/surface";

const MEOKGoMap = dynamic(() => import("./meok-go-map"), { ssr: false });

const STACK_LAYERS = [
  { dim: "5D", name: "Time", desc: "World evolves 24/7 — seasons, history, persistent consequences", color: "#c9a84c" },
  { dim: "4D", name: "AI", desc: "47 agents, your MEOK character, and AI companions", color: "#2d9b8a" },
  { dim: "3D", name: "AR Overlay", desc: "Digital twin rendered over your camera view", color: "#8b5cf6" },
  { dim: "2D", name: "Map", desc: "Google Maps + OpenStreetMap + GPS + property boundaries", color: "#3b82f6" },
  { dim: "1D", name: "Real World", desc: "Your actual house, street, garden, and city", color: "#22c55e" },
];

const CATCH_DATA = [
  { type: "Location Data", action: "Walk your neighborhood", value: "Urban planning", earn: "$0.001 / 100m" },
  { type: "Environmental", action: "Scan air, noise, light", value: "Climate research", earn: "$0.01 / scan" },
  { type: "Behavioral", action: "Interact with AI NPCs", value: "AI training data", earn: "$0.05 / interaction" },
  { type: "Governance", action: "Vote in town elections", value: "Compliance research", earn: "$0.10 / vote" },
  { type: "Discovery", action: "Find new locations & anomalies", value: "Mapping data", earn: "$0.50 / discovery" },
  { type: "Social", action: "Help AI citizens, mediate disputes", value: "Social dynamics", earn: "$0.25 / resolution" },
  { type: "Research", action: "Complete surveys & studies", value: "Academic research", earn: "$1-10 / study" },
  { type: "Creative", action: "Build structures & design content", value: "UGC training data", earn: "Revenue share" },
];

const PROPERTY_TYPES = [
  { name: "Residential", income: "Rent rooms to AI tenants", example: "AI pays monthly rent" },
  { name: "Commercial", income: "Sell items to players", example: "Virtual cafe, tool shop" },
  { name: "Industrial", income: "Manufacture goods", example: "Weapon crafting, tech lab" },
  { name: "Governance", income: "Host elections & trials", example: "Event fees, prestige" },
  { name: "Entertainment", income: "Host events & concerts", example: "Ticket sales" },
  { name: "Research", income: "Data collection bonus", example: "2x data earnings" },
  { name: "Space", income: "Rocket launches & travel", example: "Spaceport revenue" },
];

const AR_STACK = [
  { layer: "VPS Positioning", tool: "Google Geospatial API", cost: "Free", desc: "Anchor digital objects to real world" },
  { layer: "AR Framework", tool: "Unity AR Foundation", cost: "Free", desc: "Cross-platform AR (ARKit + ARCore)" },
  { layer: "Web Fallback", tool: "AR.js", cost: "Free", desc: "Browser AR, no app download" },
  { layer: "Multiplayer AR", tool: "Photon PUN2", cost: "Free tier", desc: "Shared AR experiences" },
  { layer: "Persistent Anchors", tool: "Google Cloud Anchors", cost: "Free", desc: "Objects stay in place permanently" },
  { layer: "3D Buildings", tool: "Cesium for Unity", cost: "Free", desc: "Real-world 3D buildings" },
];

export default function GoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      {/* HERO */}
      <section className="relative px-6 pt-28 pb-10 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.12)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
          <span>🗺️</span> Real-World Overlay
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          MEOK <span className="text-[#c9a84c]">GO</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          Pokémon GO for sovereign AI citizens. Characters, data nodes, and digital real estate layered over your streets,
          gardens, and cities — governed by the MEOK Council.
        </p>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#map"
            className="rounded-xl bg-[#c9a84c] px-8 py-3.5 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
          >
            Open Map
          </a>
          <Link
            href="/pioneer"
            className="rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            Join Pioneer Program
          </Link>
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="mx-auto max-w-6xl px-6 py-10">
        <MEOKGoMap />
        <p className="mt-3 text-center text-xs text-white/40">
          Prototype: characters and data nodes are simulated around your location. Real sensor data and character AI integration coming in Month 1.
        </p>
      </section>

      {/* 5D STACK */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">The 5D Stack</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Reality is Layer 1. On top of it we build the map, the AR overlay, the AI citizens, and persistent time.
          </p>
        </div>
        <div className="relative space-y-4">
          {STACK_LAYERS.map((layer, i) => (
            <Surface key={layer.name} variant="elevated" className="flex items-center gap-5 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-black" style={{ backgroundColor: `${layer.color}20`, color: layer.color }}>
                {layer.dim}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{layer.name}</h3>
                <p className="text-sm text-white/60">{layer.desc}</p>
              </div>
            </Surface>
          ))}
        </div>
      </section>

      {/* CATCH DATA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Catch Data, Get Paid</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Every real-world interaction is consented research. The world is the dataset, and you earn x402 micropayments for contributing.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-4 gap-4 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white/50">
            <div>Data Type</div>
            <div>How</div>
            <div>Value</div>
            <div className="text-right">Earn</div>
          </div>
          {CATCH_DATA.map((row) => (
            <div key={row.type} className="grid grid-cols-4 gap-4 border-b border-white/[0.05] px-5 py-3 text-sm transition hover:bg-white/[0.03]">
              <div className="font-medium text-white/90">{row.type}</div>
              <div className="text-white/60">{row.action}</div>
              <div className="text-white/60">{row.value}</div>
              <div className="text-right font-semibold text-[#c9a84c]">{row.earn}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-white/50">
          Daily earning potential: <span className="text-white/80">$2-10</span> casual, <span className="text-white/80">$20-50</span> active.
        </p>
      </section>

      {/* DIGITAL REAL ESTATE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Own Your World</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Your real address is your MEOK property. Build on it, rent it, run a business, or launch to space.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROPERTY_TYPES.map((p) => (
            <Surface key={p.name} variant="glass" className="p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">{p.name}</div>
              <p className="mt-2 text-sm text-white/80">{p.income}</p>
              <p className="mt-1 text-xs text-white/50">{p.example}</p>
            </Surface>
          ))}
        </div>
      </section>

      {/* AR TECH STACK */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">AR Tech Stack</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Cross-platform AR built on free tools. MVP cost: <span className="text-white/80">$0</span>. Scale cost: <span className="text-white/80">$300-1,500/mo</span>.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AR_STACK.map((s) => (
            <Surface key={s.layer} variant="elevated" className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">{s.layer}</span>
                <span className="rounded-full bg-[#22c55e]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#22c55e]">{s.cost}</span>
              </div>
              <div className="mt-2 font-semibold">{s.tool}</div>
              <p className="mt-1 text-sm text-white/60">{s.desc}</p>
            </Surface>
          ))}
        </div>
      </section>

      {/* BUILD REALITY */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Build Reality</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            June 2026 made this economically viable. UE5.8 has native MCP support, Vercel EVE makes agents durable, and DeepSeek cuts agent costs by 10×.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <Surface variant="elevated" className="p-5">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">Tier 1 Integrations</div>
            <div className="mt-4 space-y-3">
              {[
                { tool: "Unreal Engine 5.8 + MCP", fit: "3D world for 47 agents", effort: "2-3 days" },
                { tool: "Vercel EVE", fit: "Filesystem-first durable agents", effort: "1-2 days" },
                { tool: "DeepSeek API", fit: "$0.14/M tokens vs $10/M GPT-4", effort: "1 hour" },
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
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">Monthly Cost Reality</div>
            <div className="mt-4 space-y-3">
              {[
                { approach: "GPT-4 class (47 agents)", cost: "$15K-25K" },
                { approach: "DeepSeek API", cost: "$1.5K-2.5K" },
                { approach: "DeepSeek + local ASR", cost: "$1.8K-3K" },
                { approach: "Total realistic run cost", cost: "$2K-3K" },
              ].map((c) => (
                <div key={c.approach} className="flex items-center justify-between border-b border-white/[0.05] pb-3 last:border-0 last:pb-0">
                  <div className="text-sm text-white/80">{c.approach}</div>
                  <div className="text-sm font-semibold text-[#c9a84c]">{c.cost}</div>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </section>

      {/* DATA LOOP */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <h2 className="text-center text-3xl font-bold">Scan → Attest → Publish</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
            Every tap is consented research. Air quality, footfall, traffic, noise, energy — players become citizen scientists,
            CSOAI signs the observation, and aggregated data becomes white papers.
          </p>
          <div className="mt-10 grid gap-4 text-center sm:grid-cols-3">
            {[
              { label: "Scan", desc: "Tap a nearby data node" },
              { label: "Attest", desc: "CSOAI signs the observation" },
              { label: "Publish", desc: "Aggregated into white papers" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">{s.label}</div>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
