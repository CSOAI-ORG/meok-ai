import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scan, MapPin, Sparkles } from "lucide-react";
import { FeatureCard } from "@/components/design-system/feature-card";
import { Surface } from "@/components/design-system/surface";
import ARCamera from "./ar-camera";

export const metadata: Metadata = {
  title: "MEOK AR — See Agents & Data Nodes in Your World",
  description:
    "MEOK AR overlays sovereign AI characters, data nodes, and claimable plots onto your camera feed. Catch characters, scan landmarks, and earn rewards.",
  alternates: { canonical: "https://meok.ai/ar" },
  openGraph: {
    title: "MEOK AR — AI Characters in Your Camera",
    description:
      "Turn your phone into a window into MEOK Universe. Spot AI agents, scan data nodes, and claim digital real estate through your camera.",
    type: "website",
    url: "https://meok.ai/ar",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MEOK AR — Camera Overlay",
  url: "https://meok.ai/ar",
  description: "Browser-based AR demo that overlays MEOK characters and data nodes onto your camera feed.",
};

const FEATURES = [
  {
    title: "Character Radar",
    description: "Nearby MEOK agents appear as glowing pins. Tap to chat, capture, or add to your party.",
    icon: Sparkles,
    iconVariant: "gold" as const,
  },
  {
    title: "Data Node Scanner",
    description: "Scan real-world locations to discover protocol data nodes and improve MCP building health.",
    icon: Scan,
    iconVariant: "teal" as const,
  },
  {
    title: "Plot Claim Overlay",
    description: "See claimable MEOK plots mapped onto your actual neighborhood. Anchor a digital twin to your address.",
    icon: MapPin,
    iconVariant: "purple" as const,
  },
];

export default function ARPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative px-6 pt-28 pb-12 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(139,92,246,0.12)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8b5cf6]">
          <span>✨</span> Demo
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          MEOK <span className="text-[#8b5cf6]">AR</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          Point your camera and see MEOK characters, data nodes, and claimable plots appear in your real world.
          This browser demo uses your camera + GPS; full AR.js / Geospatial API integration is next.
        </p>
      </section>

      {/* CAMERA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <ARCamera />
        <p className="mt-4 text-center text-xs text-white/40">
          Camera feed never leaves your device. Overlays are simulated for this demo.
        </p>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What You Can See</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            AR turns every street, park, and room into a MEOK layer.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              icon={f.icon}
              iconVariant={f.iconVariant}
              glow={f.iconVariant}
              description={f.description}
            />
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <Surface variant="elevated" className="p-6 md:p-8">
          <h3 className="text-xl font-semibold">Roadmap to Real-World AR</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-[#c9a84c]">●</span>
              <span><strong>Now:</strong> Browser camera overlay with simulated characters and data nodes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/30">●</span>
              <span><strong>Next:</strong> GPS + device orientation via AR.js for location-based anchors.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/30">●</span>
              <span><strong>Then:</strong> Google Geospatial API for persistent AR content tied to real-world geometry.</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/go"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore MEOK GO <ArrowRight size={16} />
            </Link>
            <Link
              href="/town"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Visit MEOK Town <ArrowRight size={16} />
            </Link>
          </div>
        </Surface>
      </section>
    </main>
  );
}
