import type { Metadata, Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MEOK OS v3 — Your Sovereign AI, in One Window",
  description: "MEOK OS v3 unifies MEOK Dome, World, Council, Family OS, Gaming, Research, and all 18 hives. 100/100 master stack. MIT. PWA-capable.",
  manifest: "/meok-os-v3-manifest.json",
  appleWebApp: { capable: true, title: "MEOK OS", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#7c5cff",
};

const SOFTWARE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MEOK OS v3",
  description:
    "MEOK OS v3 unifies MEOK Dome, World, Council, Family OS, Gaming, Research, and all 18 hives into one window. 100/100 master stack. MIT-licensed. PWA-capable.",
  url: "https://meok.ai/meok-os",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web (PWA)",
  license: "https://opensource.org/licenses/MIT",
  publisher: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://meok.ai/meok-os",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_JSONLD) }} />
      <div className="w-full h-screen">
        <iframe
          src="/meok-os-v3/index.html"
          className="w-full h-full border-0"
          title="MEOK OS v3"
        />
      </div>
      <Script id="register-sw" strategy="afterInteractive">
        {`if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js').catch(() => {});
        }`}
      </Script>
    </main>
  );
}
