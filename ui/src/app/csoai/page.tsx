import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Globe, Code, Users, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "CSOAI — Corporate Sovereign Open AI | MEOK AI Labs",
  description:
    "CSOAI is the open research collective behind MEOK. We build sovereign AI infrastructure that puts humans first.",
  alternates: { canonical: "https://meok.ai/csoai" },
  openGraph: {
    title: "CSOAI — Corporate Sovereign Open AI",
    description: "The open research collective behind MEOK. Sovereign AI infrastructure that puts humans first.",
    type: "website",
    url: "https://meok.ai/csoai",
    siteName: "MEOK.AI",
  },
};

const VALUES = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Human Sovereignty",
    desc: "AI should serve human flourishing, not corporate metrics or engagement optimization.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Radical Transparency",
    desc: "Open source by default. Auditable by design. No black boxes in systems that affect human lives.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Care-First Design",
    desc: "The Maternal Covenant isn't marketing — it's architecture. Every system prioritizes wellbeing.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Infrastructure for All",
    desc: "Enterprise-grade AI governance shouldn't be limited to Fortune 500 budgets.",
  },
];

const STATS = [
  { value: "208", label: "MCP Servers" },
  { value: "1,054", label: "Governance Tools" },
  { value: "12", label: "Frameworks" },
  { value: "∞", label: "Human Potential" },
];

export default function CSOAIPage() {
  return (
    <main className="min-h-screen bg-[#0d0c18] text-white">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4">
        {/* Background glow */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)",
            top: "-400px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Robot */}
            <div className="w-full max-w-md lg:max-w-lg order-2 lg:order-1">
              <img
                src="/brand/csoai-robot.png"
                alt="CSOAI Robot Mascot"
                className="w-full h-auto rounded-2xl"
                style={{
                  filter: "drop-shadow(0 0 60px rgba(201,168,76,0.25))",
                }}
              />
            </div>

            {/* Right: Content */}
            <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-[#c9a84c] text-sm font-medium mb-8">
                <Zap className="w-4 h-4" />
                Corporate Sovereign Open AI
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                We build{" "}
                <span className="text-gradient-gold">sovereign AI.</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                CSOAI is the open research collective behind MEOK. We believe AI should
                serve human flourishing — not extract from it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="https://github.com/CSOAI-ORG"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#c9a84c] text-black font-semibold hover:opacity-90 transition-opacity"
                >
                  <Code className="w-4 h-4" />
                  View on GitHub
                </Link>
                <Link
                  href="/labs/mcp"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                >
                  Explore MCP Servers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#c9a84c] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Principles</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These aren't slogans. They're constraints we build within.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[rgba(201,168,76,0.3)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#c9a84c] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is CSOAI ────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is CSOAI?</h2>
          </div>

          <div className="prose prose-invert prose-lg mx-auto text-gray-300">
            <p>
              <strong className="text-white">Corporate Sovereign Open AI (CSOAI)</strong> is a 
              research collective and open-source organization dedicated to building AI infrastructure 
              that prioritizes human agency, data sovereignty, and wellbeing.
            </p>
            <p>
              Unlike traditional AI labs focused on capability at any cost, CSOAI operates under the 
              <span className="text-[#c9a84c]"> Maternal Covenant</span> — a design philosophy that 
              treats user wellbeing as a first-class constraint, not an afterthought.
            </p>
            <p>
              CSOAI maintains MEOK, the world's most comprehensive MCP server infrastructure for 
              AI governance, and contributes to open standards for ethical AI deployment.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Collective</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            CSOAI is built by contributors who believe AI can be both powerful and humane. 
            Whether you're a developer, researcher, or advocate — there's a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/CSOAI-ORG"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#c9a84c] text-black font-semibold hover:opacity-90 transition-opacity"
            >
              <Code className="w-5 h-5" />
              Contribute on GitHub
            </Link>
            <Link
              href="/open-source"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
            >
              <Users className="w-5 h-5" />
              Open Source Program
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
