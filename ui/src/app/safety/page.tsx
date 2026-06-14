import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Safety Plane · MEOK AI Labs",
  description: "The MEOK Safety Plane is a 7-layer rainbow defense with Horus as the watcher. Every action is audited, every action is signed, every action is sovereign.",
  openGraph: {
    title: "MEOK Safety Plane · MEOK AI Labs",
    description: "The MEOK Safety Plane is a 7-layer rainbow defense with Horus as the watcher. Every action is audited, every action is signed, every action is sovereign.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Safety Plane</h1>
        <p className="text-xl text-slate-600 mt-6">The MEOK Safety Plane is a 7-layer rainbow defense with Horus as the watcher. Every action is audited, every action is signed, every action is sovereign.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>The 7 layers</h2>
          <p>RED (perimeter) · ORANGE (identity) · YELLOW (Horus, agent safety) · GREEN (data) · BLUE (surveillance via gods-eye) · INDIGO (audit + compliance) · VIOLET (kill switch).</p>
          <h2>Horus sees bad, Horus acts</h2>
          <p>3 BFT replicas audit every tool invocation. 2-of-3 VETO blocks the action, emits a sigil, issues a COAI attestation, submits a BFT Council charter for ratification.</p>
          <h2>Care 0.95</h2>
          <p>Safety is a floor, not a ceiling. The 5 safety lenses (security, compliance, care, injection, hallucination) all have VETO power.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/attestations" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Get the Safety Plane</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
