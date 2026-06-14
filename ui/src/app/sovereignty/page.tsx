import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Sovereignty · MEOK AI Labs",
  description: "Your data, your rules, your export, your deletion. SOV3-signed. COAI-attested. Ed25519-audited.",
  openGraph: {
    title: "MEOK Sovereignty · MEOK AI Labs",
    description: "Your data, your rules, your export, your deletion. SOV3-signed. COAI-attested. Ed25519-audited.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Sovereignty</h1>
        <p className="text-xl text-slate-600 mt-6">Your data, your rules, your export, your deletion. SOV3-signed. COAI-attested. Ed25519-audited.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>Data sovereignty</h2>
          <p>Your memories, your chats, your research, your IP - all owned by you.</p>
          <h2>Sovereign compute</h2>
          <p>Runs on your machine, your data center, your sovereign cloud.</p>
          <h2>Sovereign licensing</h2>
          <p>MIT-licensed. The full source is auditable.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/charter" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Read the sovereignty charter</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
