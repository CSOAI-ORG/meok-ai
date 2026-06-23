import type { Metadata } from "next";
import {
  Globe,
  Cpu,
  Fish,
  Tractor,
  Truck,
  HeartPulse,
  Landmark,
  Wrench,
  Factory,
  Gamepad2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PricingCard, STRIPE_PRODUCTS } from "@meok/ui";

export const metadata: Metadata = {
  title: "Apps — MEOK Product Directory",
  description:
    "Explore the MEOK product surface: flagship sovereign AI OS, vertical apps, and standalone properties. Pre-announcing /apps/loopfactory, /apps/pokerhud, and /apps/diyhelp.",
  alternates: { canonical: "https://meok.ai/apps" },
  openGraph: {
    title: "MEOK Apps Directory",
    description:
      "Flagship surface, sovereign OS shell, vertical apps, and future merged routes.",
    url: "https://meok.ai/apps",
    siteName: "MEOK.AI",
    type: "website",
  },
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Apps", item: "https://meok.ai/apps" },
  ],
};

interface AppTileProps {
  href: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  external?: boolean;
  badge?: string;
}

function AppTile({ href, label, desc, icon, external, badge }: AppTileProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col gap-3 rounded-2xl border border-meok-border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-meok-gold/40"
    >
      <div className="flex items-start justify-between">
        <div className="icon-gold flex h-10 w-10 items-center justify-center rounded-xl">
          {icon}
        </div>
        {badge && (
          <span className="rounded-full bg-meok-gold/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-meok-gold">
            {badge}
          </span>
        )}
      </div>
      <div>
        <div className="flex items-center gap-2 text-base font-bold text-meok-navy">
          {label}
          {external && <ArrowRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-meok-muted">{desc}</p>
      </div>
    </a>
  );
}

export default function AppsDirectoryPage() {
  return (
    <div className="meok-light-page min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <header className="mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-meok-gold/30 bg-meok-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-meok-gold mb-6">
            <Sparkles size={14} />
            Product Directory
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-meok-navy leading-tight mb-5">
            Every MEOK surface, <br className="hidden md:block" />
            <span className="text-gradient-gold">one directory.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-meok-muted leading-relaxed">
            Flagship sovereign AI, the local-first OS shell, standalone vertical
            properties, and the routes we are folding into meok.ai next.
          </p>
        </header>

        {/* Flagship surface */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-meok-gold" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-meok-muted">
              Flagship Surface
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AppTile
              href="/"
              label="meok.ai"
              desc="Public marketing, conversion, and the sovereign AI companion."
              icon={<Globe size={20} />}
            />
            <AppTile
              href="/dashboard"
              label="Dashboard"
              desc="Signed-in home for memory, agents, and Work OS."
              icon={<Cpu size={20} />}
            />
            <AppTile
              href="/universe"
              label="Universe"
              desc="The sovereign AI world vision and 3D town explorer."
              icon={<Globe size={20} />}
            />
            <AppTile
              href="/town"
              label="MEOK Town"
              desc="MCP buildings, A2A roads, and live council chambers."
              icon={<Landmark size={20} />}
            />
            <AppTile
              href="/ai-os"
              label="AI OS Story"
              desc="The warm-sovereign visual narrative from signal to sovereign."
              icon={<Sparkles size={20} />}
            />
          </div>
        </section>

        {/* Sovereign OS shell */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-meok-teal" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-meok-muted">
              Sovereign OS Shell
            </h2>
          </div>
          <div className="rounded-3xl border border-meok-border bg-white p-8 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-black text-meok-navy mb-3">
                  Local-first power-user OS
                </h3>
                <p className="text-meok-muted leading-relaxed mb-6">
                  The MMO shell hosts the 12-Generals council, 25 product hives,
                  the memory lake, and the MCP hub. It is self-hosted at{" "}
                  <code className="rounded bg-meok-cream-dark px-1.5 py-0.5 text-sm">:3003</code>{" "}
                  and kept in sync with the flagship surface.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/os-overview"
                    className="inline-flex items-center gap-2 rounded-xl bg-meok-navy px-5 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110"
                  >
                    Explore OS <ArrowRight size={16} />
                  </a>
                  <a
                    href="/dashboard"
                    className="inline-flex items-center gap-2 rounded-xl border border-meok-border px-5 py-2.5 text-sm font-bold text-meok-navy transition-all hover:border-meok-gold/40"
                  >
                    Open dashboard
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "12-Generals council",
                  "25 product hives",
                  "Memory lake",
                  "MCP hub",
                  "Signed evidence chain",
                  "BFT governance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-meok-cream px-4 py-3 text-sm font-semibold text-meok-navy"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-meok-teal" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vertical apps */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-meok-orange" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-meok-muted">
              Vertical Apps
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AppTile
              href="https://councilof.ai"
              external
              label="Council of AI"
              desc="Public CSOAI site and BFT governance launch track."
              icon={<Landmark size={20} />}
            />
            <AppTile
              href="https://fishkeeper-ai.vercel.app"
              external
              label="Fishkeeper AI"
              desc="Aquaculture companion, tank telemetry, and welfare alerts."
              icon={<Fish size={20} />}
            />
            <AppTile
              href="https://koikeeper-ai.vercel.app"
              external
              label="KoiKeeper AI"
              desc="Koi pond health, feeding schedules, and water analytics."
              icon={<Fish size={20} />}
            />
            <AppTile
              href="https://grabhire.vercel.app"
              external
              label="GrabHire"
              desc="Heavy machinery hiring and logistics matching."
              icon={<Truck size={20} />}
            />
            <AppTile
              href="https://planthire.vercel.app"
              external
              label="PlantHire"
              desc="Construction plant rental and fleet optimisation."
              icon={<Tractor size={20} />}
            />
            <AppTile
              href="https://care-ai.vercel.app"
              external
              label="Care"
              desc="Care-home compliance, rostering, and family updates."
              icon={<HeartPulse size={20} />}
            />
            <AppTile
              href="https://cobolbridge.ai"
              external
              label="COBOL Bridge"
              desc="Legacy-to-modern migration with signed parity."
              icon={<Cpu size={20} />}
            />
            <AppTile
              href="https://proofof.ai"
              external
              label="ProofOf.AI"
              desc="AI safety certification and scorecards."
              icon={<Sparkles size={20} />}
            />
          </div>
        </section>

        {/* Future merged routes */}
        <section className="mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-meok-gold" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-meok-muted">
              Merging into meok.ai
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <AppTile
              href="/apps/loopfactory"
              label="LoopFactory"
              desc="Automated business workflow generator. Coming as /apps/loopfactory."
              icon={<Factory size={20} />}
              badge="Soon"
            />
            <AppTile
              href="/apps/pokerhud"
              label="PokerHUD"
              desc="Live poker analytics and AI coaching. Coming as /apps/pokerhud."
              icon={<Gamepad2 size={20} />}
              badge="Soon"
            />
            <AppTile
              href="/apps/diyhelp"
              label="DIY Help"
              desc="Expert guidance for physical maintenance. Coming as /apps/diyhelp."
              icon={<Wrench size={20} />}
              badge="Soon"
            />
          </div>
        </section>

        {/* Warm Sovereign — AI OS Origin Story gallery */}
        <section className="meok-warm mb-20 overflow-hidden rounded-[2rem] border border-[#e8e4dc] bg-[#f7f3ee] p-8 md:p-12">
          <div className="mb-10 text-center">
            <span className="meok-pill meok-pill-gold mb-4 inline-flex">Warm Sovereign</span>
            <h2 className="meok-title-lg mb-3">The AI OS origin story</h2>
            <p className="meok-body mx-auto max-w-2xl">
              From first signal to sovereign companion — the nine-stage visual narrative that powers every MEOK surface.
            </p>
          </div>
          <div className="meok-grid-3">
            {[
              { src: "/assets/warm-sovereign/ai-os/slide-01-orb.png", title: "The Orb", desc: "The first signal — warm, alive, waiting." },
              { src: "/assets/warm-sovereign/ai-os/slide-02-logo.png", title: "The Mark", desc: "The sovereign seal emerges." },
              { src: "/assets/warm-sovereign/ai-os/slide-03-seed.png", title: "The Seed", desc: "A tiny kernel of persistent memory." },
            ].map((slide) => (
              <div key={slide.src} className="meok-card meok-card-solid p-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-[var(--meok-radius-lg)]">
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="meok-image-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="meok-title-md text-lg">{slide.title}</h3>
                  <p className="meok-body-muted text-sm">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/ai-os"
              className="inline-flex items-center gap-2 rounded-full border border-meok-gold/30 bg-meok-gold/10 px-5 py-2 text-sm font-bold text-meok-gold transition-colors hover:bg-meok-gold/20"
            >
              View the full AI OS origin story
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Pricing section */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black text-meok-navy mb-3">
              Canonical pricing
            </h2>
            <p className="mx-auto max-w-xl text-meok-muted">
              Every property points back to the same live Stripe products.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STRIPE_PRODUCTS.map((product) => (
              <PricingCard key={product.id} product={product} theme="light" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
