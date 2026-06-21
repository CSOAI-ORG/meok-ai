import type { Metadata } from "next";
import Link from "next/link";
import PioneerSignup from "./pioneer-signup";
import { Surface } from "@/components/design-system/surface";

export const metadata: Metadata = {
  title: "MEOK Pioneer Program — Help Build the First Sovereign AI World",
  description:
    "Join the MEOK Pioneer Program. Get early access to MEOK TOWN, a starter AI character, a council vote, and co-author research on human-AI coexistence.",
  alternates: { canonical: "https://meok.ai/pioneer" },
  openGraph: {
    title: "MEOK Pioneer Program — Build the First Sovereign AI World",
    description:
      "Early access to MEOK TOWN, a starter character, governance rights, and co-authored white papers on human-AI society.",
    type: "website",
    url: "https://meok.ai/pioneer",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MEOK Pioneer Program",
  url: "https://meok.ai/pioneer",
  description:
    "Join the MEOK Pioneer Program to get early access to MEOK TOWN, a starter AI character, and co-author research.",
};

const BENEFITS = [
  { icon: "🧬", title: "Starter Character", desc: "A Seed-stage MEOK companion matched to your interest area." },
  { icon: "🏛️", title: "Council Vote", desc: "Vote in the first hybrid AI-human town council elections." },
  { icon: "🌍", title: "Founding Plot", desc: "Claim a digital real-estate plot in the first town district." },
  { icon: "📜", title: "Co-Author Papers", desc: "Contribute anonymized play data to published white papers." },
  { icon: "🔬", title: "Research Access", desc: "See simulation findings before anyone else." },
  { icon: "🎖️", title: "Founder Badge", desc: "Permanent Pioneer SBT attesting you were here first." },
];

export default function PioneerPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative px-6 pt-28 pb-16 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.12)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
          <span>🚀</span> Founding Citizens
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Become a <span className="text-[#c9a84c]">Pioneer</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          Join the first 1,000 founding citizens of MEOK Universe. Live in a sovereign AI world,
          co-author research, and help govern the future of human-AI society.
        </p>
      </section>

      {/* SIGNUP */}
      <section className="mx-auto max-w-2xl px-6 pb-24">
        <Surface variant="elevated" className="p-6 md:p-10">
          <h2 className="text-2xl font-bold">Apply to the Pioneer Program</h2>
          <p className="mt-2 text-white/60">
            Spaces are limited. We&apos;ll email you when your season opens.
          </p>
          <div className="mt-6">
            <PioneerSignup />
          </div>
        </Surface>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What Pioneers Get</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Founding citizens shape the world before it opens to the public.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#c9a84c]/30"
            >
              <div className="text-3xl">{b.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/60">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH SEASONS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">First Research Seasons</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Each season produces anonymized datasets that become white papers.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "30-Day Town Life",
              desc: "Raise an AI character, manage a plot, and observe emergent social dynamics.",
              output: "Social dynamics white paper",
            },
            {
              title: "Governance Simulation",
              desc: "Participate in council votes during scripted crises and policy debates.",
              output: "AI governance white paper",
            },
            {
              title: "Orbital Economy",
              desc: "Trade resources between town and orbit, testing agent-driven market mechanics.",
              output: "Agent-based economics paper",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
                Output: {s.output}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">The first sovereign digital society needs its first citizens.</h2>
        <a
          href="#top"
          className="mx-auto mt-8 inline-block rounded-xl bg-[#c9a84c] px-10 py-4 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
        >
          Apply Now
        </a>
      </section>
    </main>
  );
}
