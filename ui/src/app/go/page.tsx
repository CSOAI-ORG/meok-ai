"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const MEOKGoMap = dynamic(() => import("./meok-go-map"), { ssr: false });

const FEATURES = [
  {
    emoji: "🧬",
    title: "Catch Characters",
    desc: "MEOK agents appear in parks, streets, and buildings based on real-world context.",
  },
  {
    emoji: "📡",
    title: "Scan Data Nodes",
    desc: "Tap real-world locations to contribute anonymized environmental and social data.",
  },
  {
    emoji: "🏡",
    title: "Claim Digital Real Estate",
    desc: "Own a plot tied to your home, garden, or neighbourhood and govern it through the council.",
  },
  {
    emoji: "🗺️",
    title: "5D World Stack",
    desc: "Reality + digital twin + AI agents + economy + governance layered on top of each other.",
  },
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
          Pokémon GO for sovereign AI citizens. Characters, data nodes, and digital real estate
          layered over your streets, gardens, and cities — governed by the MEOK Council.
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
          Prototype: characters and data nodes are simulated around your location. Real sensor data
          and character AI integration coming in Month 1.
        </p>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">The 5D Stack</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Reality is just Layer 0. On top of it we build the digital twin, the AI citizens, the
            economy, and the governance layer.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#c9a84c]/30"
            >
              <div className="text-3xl">{f.emoji}</div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DATA LOOP */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <h2 className="text-center text-3xl font-bold">Catch Data, Not Just Characters</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
            Every tap is consented research. Air quality, footfall, traffic, noise, energy — players
            become citizen scientists, and the world becomes a dataset.
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
