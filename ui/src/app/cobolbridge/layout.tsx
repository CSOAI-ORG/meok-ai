import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "COBOLBridge.ai — Modernize Legacy COBOL Systems with AI | MEOK AI",
  description:
    "Bridge the gap between legacy COBOL and modern cloud infrastructure. COBOLBridge.ai uses AI-powered migration tools to transform mainframe code into modern, maintainable systems. Built on MEOK's MCP infrastructure.",
  alternates: { canonical: "https://cobolbridge.ai" },
  openGraph: {
    title: "COBOLBridge.ai — Legacy COBOL Modernization",
    description:
      "Transform decades of COBOL code into modern microservices. AI-powered migration with zero downtime.",
    type: "website",
    url: "https://cobolbridge.ai",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "COBOLBridge.ai",
  url: "https://cobolbridge.ai",
  description:
    "AI-powered COBOL to modern language migration platform. Transforms legacy mainframe code into cloud-native microservices.",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "199",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "199",
      priceCurrency: "USD",
      unitCode: "MON",
    },
  },
};

export default function CobolBridgeLayout({
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
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <header className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/80 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="https://meok.ai" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-500/20">
                M
              </div>
              <span className="text-xl font-bold text-white">MEOK</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-slate-400 hover:text-white transition-colors">Features</Link>
              <Link href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</Link>
              <Link href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link>
              <Link href="https://meok.ai" className="text-amber-400 hover:text-amber-300 transition-colors">MEOK Platform</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-800/50 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
            <p>COBOLBridge.ai is a MEOK AI Labs product. Built with MCP infrastructure.</p>
            <p className="mt-2 text-sm">© 2026 MEOK AI Labs. UK-based independent research lab.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
