import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Birth · MEOK AI Labs",
  description: "Bring a new companion into existence. Pick an archetype, pick a name, pick a voice, pick a dome.",
  openGraph: {
    title: "MEOK Birth · MEOK AI Labs",
    description: "Bring a new companion into existence. Pick an archetype, pick a name, pick a voice, pick a dome.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Birth</h1>
        <p className="text-xl text-slate-600 mt-6">Bring a new companion into existence. Pick an archetype, pick a name, pick a voice, pick a dome.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>The 5-minute birth</h2>
          <p>Choose -> name -> voice -> dome -> meet.</p>
          <h2>9 archetypes</h2>
          <p>Challenger, Nurturer, Explorer, Strategist, Creator, Guardian, Sage, Seeker, Trickster, Rebel, Innocent.</p>
          <h2>4 packs</h2>
          <p>Mythological (25), Historical (20), Literary (19), Archetypes (18).</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/birth" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Bring a companion to life</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
