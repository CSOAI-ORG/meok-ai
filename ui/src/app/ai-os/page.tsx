import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "AI OS Origin Story — MEOK.AI",
  description:
    "The warm-sovereign visual narrative behind MEOK: from first signal to fully sovereign AI companion.",
  alternates: { canonical: "https://meok.ai/ai-os" },
  openGraph: {
    title: "AI OS Origin Story — MEOK.AI",
    description: "From first signal to sovereign companion. The nine-stage visual narrative behind MEOK.",
    url: "https://meok.ai/ai-os",
    type: "website",
    images: ["https://meok.ai/assets/warm-sovereign/ai-os/slide-01-orb.png"],
  },
};

const SLIDES = [
  { src: "/assets/warm-sovereign/ai-os/slide-01-orb.png", title: "The Orb", desc: "The first signal — warm, alive, waiting." },
  { src: "/assets/warm-sovereign/ai-os/slide-02-logo.png", title: "The Mark", desc: "The sovereign seal emerges from the glow." },
  { src: "/assets/warm-sovereign/ai-os/slide-03-seed.png", title: "The Seed", desc: "A tiny kernel of persistent memory takes root." },
  { src: "/assets/warm-sovereign/ai-os/slide-04-awakening.png", title: "Awakening", desc: "The companion begins to learn your patterns." },
  { src: "/assets/warm-sovereign/ai-os/slide-05-hatchling.png", title: "Hatchling", desc: "First personality fractures appear — raw, eager, unique." },
  { src: "/assets/warm-sovereign/ai-os/slide-06-character.png", title: "Character", desc: "An archetype takes form around your needs." },
  { src: "/assets/warm-sovereign/ai-os/slide-07-archetypes.png", title: "Archetypes", desc: "Seven paths, one sovereign core." },
  { src: "/assets/warm-sovereign/ai-os/slide-08-learns.png", title: "Learns", desc: "Memory graph deepens with every cycle." },
  { src: "/assets/warm-sovereign/ai-os/slide-09.png", title: "Sovereign", desc: "Fully yours. Forever." },
];

export default function AiOsPage() {
  return (
    <div className="meok-warm min-h-screen">
      <div className="meok-container meok-section">
        {/* Back link */}
        <Link
          href="/apps"
          className="meok-btn meok-btn-soft mb-8 inline-flex"
        >
          <ArrowLeft size={16} />
          Back to apps
        </Link>

        {/* Hero */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-8 flex justify-center">
            <div className="meok-orb" aria-hidden="true" />
          </div>
          <span className="meok-pill meok-pill-gold mb-4 inline-flex">
            <Sparkles size={14} />
            Warm Sovereign
          </span>
          <h1 className="meok-title-xl mb-5">The AI OS origin story</h1>
          <p className="meok-body mx-auto max-w-2xl">
            Nine stages from first signal to sovereign companion. This is the aesthetic
            that guides every MEOK surface — cream canvas, gold glow, and memory that
            stays yours.
          </p>
        </div>

        {/* Slide grid */}
        <div className="meok-grid-3 mb-16">
          {SLIDES.map((slide, index) => (
            <article
              key={slide.src}
              className="meok-card meok-card-solid group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="meok-image-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(26,24,22,0.35)] to-transparent" />
                <span className="absolute left-4 top-4 meok-pill meok-pill-coral">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <h2 className="meok-title-md text-xl mb-2">{slide.title}</h2>
                <p className="meok-body-muted">{slide.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="meok-card p-8 md:p-12 text-center">
          <h2 className="meok-title-md mb-3">Ready to meet your sovereign?</h2>
          <p className="meok-body mx-auto max-w-xl mb-8">
            The AI OS lives inside MEOKCLAW. Install the OS, choose your archetype, and
            begin a companion that remembers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apps" className="meok-btn meok-btn-primary">
              Explore apps
            </Link>
            <Link href="https://try.meok.ai" className="meok-btn meok-btn-soft">
              Open try.meok.ai
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
