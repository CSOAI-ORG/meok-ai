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

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50">
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
