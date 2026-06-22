import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldAlert, Clock, FileCheck } from "lucide-react";
import { Article50CountdownFull } from "@/components/Article50CountdownFull";
import { Article50RiskClassifier } from "@/components/Article50RiskClassifier";
import { Surface } from "@/components/design-system/surface";

export const metadata: Metadata = {
  title: "EU AI Act Article 50 Countdown — 2 August 2026",
  description:
    "Countdown to the EU AI Act Article 50 deadline: machine-readable marking of AI-generated content becomes mandatory on 2 August 2026. Check your scope and get the Article 50 Kit.",
  alternates: { canonical: "https://meok.ai/eu-ai-act-countdown" },
  openGraph: {
    title: "EU AI Act Article 50 Countdown — 2 August 2026",
    description:
      "Days, hours and minutes until AI-generated content must be machine-readable. Scope check, kit and certification links.",
    type: "website",
    url: "https://meok.ai/eu-ai-act-countdown",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "EU AI Act Article 50 Countdown",
  url: "https://meok.ai/eu-ai-act-countdown",
  description:
    "Countdown to the EU AI Act Article 50 deadline and a quick scope classifier for AI-generated content obligations.",
};

const REQUIREMENTS = [
  {
    title: "Machine-readable marking",
    desc: "Providers must ensure AI-generated images, audio, video and text carry technical provenance data such as C2PA manifests and invisible watermarks.",
    icon: <FileCheck size={18} className="text-[#2d9b8a]" />,
  },
  {
    title: "Visible disclosure",
    desc: "Deployers must tell natural persons when they are exposed to AI-generated content. A small icon in the corner is not enough.",
    icon: <ShieldAlert size={18} className="text-[#c9a84c]" />,
  },
  {
    title: "Deepfake & biometric labels",
    desc: "Manipulated content resembling real people, places or events, plus emotion recognition systems, need explicit, accessible labels.",
    icon: <Clock size={18} className="text-[#c9a84c]" />,
  },
];

export default function EuAiActCountdownPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative px-6 pt-28 pb-20 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.12)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(45,155,138,0.08)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
          <Clock size={14} /> EU AI Act Article 50
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          The deadline did <span className="text-[#c9a84c]">not</span> move.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          Machine-readable marking of AI-generated content becomes mandatory for new systems on{" "}
          <strong className="text-white">2 August 2026 at 00:00 CEST</strong>. Countdown, scope check
          and next steps below.
        </p>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/50">Time remaining</p>
          <Article50CountdownFull />
        </div>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/article-50-kit"
            className="inline-flex items-center gap-2 rounded-xl bg-[#c9a84c] px-8 py-3.5 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
          >
            Get the Article 50 Kit <ArrowRight size={16} />
          </Link>
          <Link
            href="/certification"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            CSOAI Certification <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What Article 50 requires</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Three obligations, one hard cliff. The Code of Practice expects at least two active layers of
            machine-readable marking.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {REQUIREMENTS.map((req) => (
            <Surface key={req.title} variant="elevated" className="p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.05]">
                {req.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{req.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{req.desc}</p>
            </Surface>
          ))}
        </div>
      </section>

      {/* CLASSIFIER */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Are you in scope?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Article 50 applies to providers and deployers of generative AI systems, chatbots, deepfakes
            and certain biometric systems.
          </p>
        </div>
        <Article50RiskClassifier />
      </section>

      {/* PENALTY + CTAS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">Penalties up to €15M or 3% global turnover</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Article 99 enforcement begins 2 August 2026 for new systems. Non-compliance can be per
            infringement and cumulative across outputs.
          </p>
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/article-50-kit"
              className="inline-flex items-center gap-2 rounded-xl bg-[#c9a84c] px-8 py-3.5 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
            >
              Buy Article 50 Kit — £999 <ArrowRight size={16} />
            </Link>
            <Link
              href="/certification"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore CSOAI Certification <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
