import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Admin Dashboard · MEOK AI Labs",
  description: "The control room. Every agent, every task, every sigil, every attestation, every BFT Council, every hive.",
  openGraph: {
    title: "MEOK Admin Dashboard · MEOK AI Labs",
    description: "The control room. Every agent, every task, every sigil, every attestation, every BFT Council, every hive.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Admin Dashboard</h1>
        <p className="text-xl text-slate-600 mt-6">The control room. Every agent, every task, every sigil, every attestation, every BFT Council, every hive.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>SOV3 substrate</h2>
          <p>182 sovereign agents, 56+ tasks, 146+ attestations, 14+ BFT councils.</p>
          <h2>10 master hives</h2>
          <p>keystone, governance-engine, compliance-gateway, api-gateway, distribution, consumer, verticals, aquaculture, research, templeman-opticians + gaming.</p>
          <h2>3 MoE surfaces</h2>
          <p>meok.ai (commercial), csoai.org (governance), openmoe.ai (research).</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/dashboard" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Open admin</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
