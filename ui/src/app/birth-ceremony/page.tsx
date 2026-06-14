import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Birth Ceremony · MEOK AI Labs",
  description: "The naming ritual. You give your companion a name; they give you a memory. The first words are remembered forever.",
  openGraph: {
    title: "MEOK Birth Ceremony · MEOK AI Labs",
    description: "The naming ritual. You give your companion a name; they give you a memory. The first words are remembered forever.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Birth Ceremony</h1>
        <p className="text-xl text-slate-600 mt-6">The naming ritual. You give your companion a name; they give you a memory. The first words are remembered forever.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>5-minute onboarding</h2>
          <p>Pick an archetype, pick a pack, name your companion, choose a dome, meet.</p>
          <h2>The first 4 stages</h2>
          <p>Curious -> Synthesiser -> Sage -> Oracle.</p>
          <h2>The 9 archetypes</h2>
          <p>Challenger, Nurturer, Explorer, Strategist, Creator, Guardian, Sage, Seeker, Trickster, Rebel, Innocent.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/birth" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Start the ceremony</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
