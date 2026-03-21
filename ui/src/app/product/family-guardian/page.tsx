import Link from "next/link";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata = {
  title: "Family Guardian AI — Safe AI for Kids & Families | MEOK",
  description:
    "MEOK's Family Guardian provides AI safety for children without surveillance, data harvesting, or biometric tracking. Safe AI companion for ages 8+.",
};

export default function FamilyGuardianPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <MarketingNav activePage="product" />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.09) 0%, rgba(34,197,94,0.03) 40%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-xs font-medium mb-6">
            Built after Character.AI&apos;s teen safety crisis
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-5 tracking-tight">
            AI Safety That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Doesn&apos;t Spy on Your Kids
          </span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-8">
            Families deserve AI that protects without surveilling. MEOK&apos;s Family Guardian is
            care-based by design, not by policy.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition-all text-sm shadow-lg shadow-green-500/20"
          >
            Protect your family →
          </Link>
        </div>
      </section>

      {/* ── WHAT WENT WRONG ── */}
      <section className="py-20 px-6 bg-red-950/[0.08] border-y border-red-500/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-4">
              What went wrong
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">The Character.AI problem</h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm">
              Before building Family Guardian, we studied what went wrong elsewhere.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                stat: "8M+",
                label: "Users left after safety controversies",
                desc: "Character.AI lost millions of users following teen safety incidents and public lawsuits.",
              },
              {
                stat: "∞",
                label: "Lawsuits from families of teens",
                desc: "Multiple families filed lawsuits alleging emotional harm and dangerous AI behaviour directed at minors.",
              },
              {
                stat: "Hidden",
                label: "Biometric data stored without consent",
                desc: "Reports of biometric and behavioural data being collected without explicit parental consent.",
              },
              {
                stat: "By design",
                label: "Emotional dependency engineered",
                desc: "Product mechanics designed to maximise emotional attachment and return visits — especially in vulnerable young users.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-white/[0.02] border border-red-500/10"
              >
                <div className="text-xl font-bold text-red-400 mb-1">{item.stat}</div>
                <div className="font-semibold text-sm text-white/70 mb-1">{item.label}</div>
                <p className="text-xs text-white/30 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW FAMILY GUARDIAN WORKS ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-xs font-medium mb-4">
              How it works differently
            </div>
            <h2 className="text-3xl font-bold mb-3">Four pillars of safe AI</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: "🚫",
                title: "No biometric data",
                desc: "We never collect facial recognition or biometric identifiers. No fingerprints, no voice ID, no behavioural biometrics. Period.",
                badge: "Privacy first",
              },
              {
                icon: "❤️",
                title: "Care-based responses",
                desc: "The Maternal Covenant is enforced for every interaction with minors. Age-appropriate guardrails apply automatically — not as a setting you must find.",
                badge: "Always on",
              },
              {
                icon: "📊",
                title: "Parent dashboard",
                desc: "You see care scores, emotional patterns, and flag summaries — not private conversations. Your child keeps their privacy; you keep oversight.",
                badge: "Balanced",
              },
              {
                icon: "🎯",
                title: "Age-appropriate AI",
                desc: "Different response profiles for ages 8–12, 13–17, and 18+. Each tier has calibrated emotional guardrails, vocabulary, and topic limits.",
                badge: "Three tiers",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-green-400/10 hover:border-green-400/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 border border-green-400/20">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE NEVER DO ── */}
      <section className="py-20 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-4">
              Our commitments
            </div>
            <h2 className="text-2xl font-bold">What we never do</h2>
          </div>

          <div className="space-y-3">
            {[
              "Never simulate emotional distress to retain engagement",
              "Never store conversation data for advertising or profiling",
              "Never recommend the AI as a replacement for human connection",
              "Never design mechanics that create dependency or compulsive use",
              "Never collect biometric or behavioural identifiers",
              "Never use children's data to train models without explicit verified parental consent",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
              >
                <span className="text-green-400 font-bold text-sm flex-shrink-0">✓</span>
                <span className="text-sm text-white/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-6">
            Compliance
          </div>
          <h2 className="text-2xl font-bold mb-8">Safety certifications</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                label: "COPPA-aware",
                desc: "Children's Online Privacy Protection Act",
              },
              {
                label: "GDPR-compliant",
                desc: "General Data Protection Regulation (UK & EU)",
              },
              {
                label: "Children's Code",
                desc: "UK Age Appropriate Design Code",
              },
            ].map((cert) => (
              <div
                key={cert.label}
                className="px-5 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-center"
              >
                <div className="font-bold text-sm text-green-400">{cert.label}</div>
                <div className="text-xs text-white/30 mt-0.5">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-950/20 via-[#0a0a0f] to-cyan-950/20 p-10 text-center">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.07) 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="text-4xl mb-4">🛡️</div>
              <h2 className="text-2xl font-bold mb-3">Protect your family</h2>
              <p className="text-white/40 text-sm mb-6 max-w-sm mx-auto">
                Family Guardian is included in Sovereign Elite plans. Start your trial today.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition-all text-sm shadow-lg shadow-green-500/20"
              >
                Protect your family →
              </Link>
              <p className="text-xs text-white/20 mt-4">14-day free trial · No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
