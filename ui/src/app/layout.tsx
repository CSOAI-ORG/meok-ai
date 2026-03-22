import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import { PostHogProvider } from "@/components/posthog-provider";
import { CookieConsent } from "@/components/cookie-consent";
import { SovereignWidget } from "@/components/sovereign-widget";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MEOK.AI — Personal Sovereign AI That Remembers You",
    template: "%s | MEOK.AI",
  },
  description:
    "Every AI forgets you. MEOK remembers. The world's first sovereign AI OS — hatches from an egg, grows with you, works across every LLM. Free forever.",
  keywords: [
    "personal sovereign AI",
    "sovereign AI OS",
    "AI that remembers you",
    "AI with memory",
    "care-aligned AI",
    "AI companion",
    "personal AI operating system",
    "MEOK AI",
    "Maternal Covenant",
    "Byzantine AI governance",
    "private AI",
    "multi-LLM AI",
    "AI data ownership",
    "sovereign AI",
  ],
  metadataBase: new URL("https://meok.ai"),
  alternates: { canonical: "https://meok.ai" },
  openGraph: {
    title: "MEOK.AI — Personal Sovereign AI That Remembers You",
    description:
      "Every AI forgets you. MEOK remembers. The world's first personal sovereign AI OS — hatches from an egg, grows with care, works with every LLM. Free forever.",
    type: "website",
    url: "https://meok.ai",
    siteName: "MEOK.AI",
    locale: "en_GB",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK.AI&desc=Your+sovereign+AI.+Built+to+remember.+Designed+to+care.",
        width: 1200,
        height: 630,
        alt: "MEOK.AI — Personal Sovereign AI That Remembers You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK.AI — Personal Sovereign AI That Remembers You",
    description:
      "Every AI forgets you. MEOK remembers. Sovereign AI OS — hatches, grows, works with every LLM. Free forever.",
    site: "@meok_ai",
    images: ["https://meok.ai/api/og?title=MEOK.AI&desc=Your+sovereign+AI.+Built+to+remember.+Designed+to+care."],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "MEOK.AI",
    statusBarStyle: "black-translucent",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MEOK AI LTD",
  url: "https://meok.ai",
  logo: "https://meok.ai/logo.png",
  description:
    "The world's first personal sovereign AI operating system. Your AI hatches from an egg, grows with care, works with every LLM, and answers only to you. Free forever.",
  foundingDate: "2026",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "GB",
    addressRegion: "England and Wales",
  },
  sameAs: [],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MEOK Sovereign AI OS",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Web, iOS, Android",
  url: "https://meok.ai",
  description:
    "A personal sovereign AI OS with persistent semantic memory, Byzantine fault-tolerant governance, care-aligned responses, and the Maternal Covenant ethical framework.",
  offers: [
    {
      "@type": "Offer",
      name: "Explorer",
      price: "0",
      priceCurrency: "GBP",
      description: "Free tier: 100 messages/day, 7-day encrypted memory, sovereign AI companion",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "9.99",
      priceCurrency: "GBP",
      billingIncrement: "month",
      description: "Permanent memory, unlimited messages, Work OS, custom character evolution",
    },
    {
      "@type": "Offer",
      name: "Elite",
      price: "19",
      priceCurrency: "GBP",
      billingIncrement: "month",
      description: "Family OS for 5 companions, Guardian 24/7, all LLM models, family memory vault",
    },
  ],
  featureList: [
    "220-node Byzantine fault-tolerant council",
    "pgvector semantic memory",
    "6 care dimensions scored on every response",
    "Maternal Covenant ethical framework",
    "7 AI archetypes",
    "Dream Engine overnight synthesis",
    "Multi-LLM routing",
    "Full data export and deletion",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <head>
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="theme-color" content="#1a1a2e" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
          />
        </head>
        <body className={`${dmSans.variable} font-sans antialiased bg-[#FAF9F6] text-[#111111] min-h-screen`}>
          <Suspense>
            <PostHogProvider>{children}</PostHogProvider>
          </Suspense>
          <CookieConsent />
          <SovereignWidget />
        </body>
      </html>
    </ClerkProvider>
  );
}
