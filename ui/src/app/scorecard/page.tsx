import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Scorecard · MEOK AI Labs",
  description: "Tracks every product against the 100/100 master stack criteria.",
  openGraph: {
    title: "MEOK Scorecard · MEOK AI Labs",
    description: "Tracks every product against the 100/100 master stack criteria.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Scorecard</h1>
        <p className="text-xl text-slate-600 mt-6">Tracks every product against the 100/100 master stack criteria.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>100/100 master stack</h2>
          <p>Sovereign coordinator + COAI manifest + Ed25519 sigil + BFT Council + landing page + attestation.</p>
          <h2>The top 100</h2>
          <p>Every flagship product scores 100/100.</p>
          <h2>Live attestations</h2>
          <p>146+ free attestations issued.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/scorecard" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">View the scorecard</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
