import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Companions · MEOK AI Labs",
  description: "140+ AI companions across 9 archetypes and 4 packs. Scholar, Guardian, Healer, Trickster, Mystic, Pioneer, plus 134 more.",
  openGraph: {
    title: "MEOK Companions · MEOK AI Labs",
    description: "140+ AI companions across 9 archetypes and 4 packs. Scholar, Guardian, Healer, Trickster, Mystic, Pioneer, plus 134 more.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Companions</h1>
        <p className="text-xl text-slate-600 mt-6">140+ AI companions across 9 archetypes and 4 packs. Scholar, Guardian, Healer, Trickster, Mystic, Pioneer, plus 134 more.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>9 archetypes</h2>
          <p>Challenger, Nurturer, Explorer, Strategist, Creator, Guardian, Sage, Seeker, Trickster, Rebel, Innocent.</p>
          <h2>4 packs</h2>
          <p>Mythological (25), Historical (20), Literary (19), Archetypes (18) - 82 characters.</p>
          <h2>4-level evolution</h2>
          <p>Curious (0) → Synthesiser (50) → Sage (200) → Oracle (500).</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/characters" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Browse companions</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
