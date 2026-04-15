import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGISafe.ai — AI Safety Monitoring & Compliance Platform | MEOK AI",
  description:
    "AGISafe.ai provides real-time AI safety monitoring, compliance automation, and governance tools for enterprises deploying AI systems. Built on MEOK's fault-tolerant Byzantine Council architecture.",
  alternates: { canonical: "https://agisafe.ai" },
  openGraph: {
    title: "AGISafe.ai — AI Safety & Compliance",
    description:
      "Real-time AI safety monitoring for enterprise AI deployments. GDPR, SOC2, and EU AI Act compliant.",
    type: "website",
    url: "https://agisafe.ai",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AGISafe.ai — AI Safety Platform",
  url: "https://agisafe.ai",
  description:
    "Enterprise AI safety monitoring and compliance platform. Real-time threat detection, bias monitoring, and regulatory compliance.",
};

export default function AgisafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950">
        <header className="border-b border-emerald-800/30 backdrop-blur-sm bg-emerald-950/80 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="https://meok.ai" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/20">
                M
              </div>
              <span className="text-xl font-bold text-white">MEOK</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-slate-300 hover:text-white transition-colors">Features</Link>
              <Link href="#compliance" className="text-slate-300 hover:text-white transition-colors">Compliance</Link>
              <Link href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</Link>
              <Link href="https://meok.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">MEOK Platform</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-emerald-800/30 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
            <p>AGISafe.ai is a MEOK AI Labs product. Built with MCP infrastructure.</p>
            <p className="mt-2 text-sm">© 2026 MEOK AI Labs. UK-based independent research lab.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
