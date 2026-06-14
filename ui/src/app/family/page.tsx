import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Family OS · MEOK AI Labs",
  description: "The family operating system. Multi-companion coordination, child-safe mode, elder-care mode.",
  openGraph: {
    title: "MEOK Family OS · MEOK AI Labs",
    description: "The family operating system. Multi-companion coordination, child-safe mode, elder-care mode.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Family OS</h1>
        <p className="text-xl text-slate-600 mt-6">The family operating system. Multi-companion coordination, child-safe mode, elder-care mode.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>5 family archetypes</h2>
          <p>The Guardian, the Healer, the Scholar, the Storyteller, the Connector.</p>
          <h2>Child-safe mode</h2>
          <p>Age-appropriate communication filtering. No adult content. Full parental visibility.</p>
          <h2>Elder-care mode</h2>
          <p>Medication reminders, activity monitoring, fall detection via sensors.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/family" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Get the family OS</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
