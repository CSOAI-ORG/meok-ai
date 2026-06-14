import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Legion · MEOK AI Labs",
  description: "Multi-character coordination. The Scholar researches, the Pioneer explores, the Guardian protects, the Builder executes.",
  openGraph: {
    title: "MEOK Legion · MEOK AI Labs",
    description: "Multi-character coordination. The Scholar researches, the Pioneer explores, the Guardian protects, the Builder executes.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Legion</h1>
        <p className="text-xl text-slate-600 mt-6">Multi-character coordination. The Scholar researches, the Pioneer explores, the Guardian protects, the Builder executes.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>5-person team</h2>
          <p>Scholar + Pioneer + Builder + Guardian + Storyteller. 1 PI + 4 specialists.</p>
          <h2>50-person lab</h2>
          <p>1 PI + 5 postdocs + 20 grad students + 5 engineers + 5 lab managers + 14 admin.</p>
          <h2>VETO power</h2>
          <p>Safety lenses all have VETO. The Legion cannot accidentally harm the user.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/characters" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Build a Legion</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
