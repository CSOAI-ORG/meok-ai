import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Technology Stack · MEOK AI Labs",
  description: "100+ sovereign tools. 11 master hives. 178 meok.ai routes. 977 Vercel functions. 200+ MCP servers.",
  openGraph: {
    title: "MEOK Technology Stack · MEOK AI Labs",
    description: "100+ sovereign tools. 11 master hives. 178 meok.ai routes. 977 Vercel functions. 200+ MCP servers.",
    type: "website",
  },
};

const TECH_ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "MEOK Technology Stack",
  name: "MEOK Technology Stack",
  description:
    "100+ sovereign tools, 11 master hives, 178 meok.ai routes, 977 Vercel functions, 200+ MCP servers. SOV3 sovereign substrate, 13-framework compliance substrate, and Ed25519 sigil-chain audit substrate.",
  url: "https://meok.ai/technology",
  author: { "@type": "Organization", name: "MEOK AI Labs" },
  publisher: { "@type": "Organization", name: "MEOK AI Labs" },
  about: [
    { "@type": "Thing", name: "Sovereign AI substrate" },
    { "@type": "Thing", name: "Regulatory compliance substrate" },
    { "@type": "Thing", name: "Cryptographic audit substrate" },
  ],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(TECH_ARTICLE_JSONLD) }} />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Technology Stack</h1>
        <p className="text-xl text-slate-600 mt-6">100+ sovereign tools. 11 master hives. 178 meok.ai routes. 977 Vercel functions. 200+ MCP servers.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>Sovereign substrate</h2>
          <p>SOV3 sovereign-temple v2.0.0 - 182 agents, 56+ tasks, 146+ attestations.</p>
          <h2>Compliance substrate</h2>
          <p>13 regulatory frameworks: EU AI Act, GDPR, ISO 42001, SOC 2, HIPAA, DORA, NIS2, CRA, FDA, MDR.</p>
          <h2>Audit substrate</h2>
          <p>Ed25519 sigil chain + COAI v1.0.0 manifest + meok-attestation-api keystone v1.2.0.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/fleet" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">See the stack</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
