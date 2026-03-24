import Link from "next/link";
import { ArrowRight, PenLine, Code2, Palette, Mail, BookOpen, RefreshCw } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

/* ─── DATA ─────────────────────────────────────────────── */

const CAPABILITIES = [
  {
    emoji: "✍️",
    Icon: PenLine,
    title: "Content drafting",
    desc: "Blog posts, emails, social threads, press releases — drafted from your brief and ready for review.",
  },
  {
    emoji: "💻",
    Icon: Code2,
    title: "Code generation",
    desc: "Functions, tests, documentation, bug fixes from your backlog — written overnight in TypeScript, Python, and more.",
  },
  {
    emoji: "🎨",
    Icon: Palette,
    title: "Creative assets",
    desc: "Copy variants, product descriptions, landing page sections — built to your spec while you sleep.",
  },
  {
    emoji: "📧",
    Icon: Mail,
    title: "Email sequences",
    desc: "Nurture flows, outreach sequences, and follow-up campaigns drafted from your goals and voice.",
  },
  {
    emoji: "📝",
    Icon: BookOpen,
    title: "Documentation",
    desc: "Technical docs, user guides, README files — Riri works through your documentation backlog overnight.",
  },
  {
    emoji: "🔄",
    Icon: RefreshCw,
    title: "Refactoring tasks",
    desc: "Code cleanup, migration scripts, and dependency updates queued from your backlog and delivered for review.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Riri — The Builder Agent | MEOK AI LABS",
  description:
    "Riri is MEOK's overnight builder. She drafts content, writes code, builds assets, and delivers them to your inbox before you wake up.",
  url: "https://meok.ai/work/riri",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── PAGE ─────────────────────────────────────────────── */

export default function RiriPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/40 hover:text-[#d4af37] transition-colors mb-8"
          >
            ← Work OS
          </Link>

          <div className="block mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              Work OS · Agent
            </div>
          </div>

          <h1
            className="font-black text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Riri — The Builder
          </h1>

          <p className="text-[#d4af37] text-xl font-semibold mb-6">
            She builds while you sleep.
          </p>

          <p className="text-white/55 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Riri is your overnight builder. She takes your backlog — code, copy, docs, emails —
            and works through it during your sleep window. You wake up to completed assets,
            ready for review and ship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/birth"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#0a0a0a] bg-[#d4af37] hover:bg-[#b8963e] transition-all text-sm shadow-lg"
              aria-label="Start your free trial and access Riri"
            >
              Start free trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="text-sm text-white/40 hover:text-white/70 transition-colors font-medium"
            >
              See all Work OS agents →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT RIRI BUILDS ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37]/60 block mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              What Riri builds while you sleep
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-[#1a1a1a] border border-white/[0.07] p-7 hover:border-[#d4af37]/20 transition-colors"
              >
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="font-black text-white text-base mb-3">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GEO H2s ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
              What is Riri in MEOK AI?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Riri is MEOK&apos;s overnight creative and technical builder agent. She takes your task
              backlog and works through it during your sleep window — drafting content, writing
              code, building assets, and producing documentation. By morning, completed work is
              waiting in your brief for review. Riri handles the building; you handle the decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
              Can Riri write code?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Yes. Riri handles TypeScript, Python, and common web languages. She writes functions,
              tests, and documentation from your backlog — pulling tasks you&apos;ve queued and
              working through them autonomously. Results are delivered for human review, never
              committed autonomously. You stay in control of what ships.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
              Which tier unlocks Riri?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Riri is available on the Sovereign tier at £12/mo. All three agents — Orion, Riri,
              and Hourman — are included in a single subscription. No per-task fees. No add-ons.
              Everything you need to build overnight, every night.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Put Riri to work tonight.
          </h2>
          <p className="text-white/45 max-w-md mx-auto mb-10 leading-relaxed">
            Queue your backlog before bed. Riri builds overnight. Wake up to completed work,
            ready for review.
          </p>
          <Link
            href="/ralph"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#0a0a0a] bg-[#d4af37] hover:bg-[#b8963e] transition-all text-base shadow-xl"
            aria-label="Open Ralph Mode to configure Riri"
          >
            Put Riri to work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-5 text-xs text-white/25 font-mono">
            Sovereign tier · £12/mo · Orion + Riri + Hourman included
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
