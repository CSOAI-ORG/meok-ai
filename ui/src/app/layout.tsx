import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import { PostHogProvider } from "@/components/posthog-provider";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MEOK — Sovereign AI OS",
    template: "%s | MEOK",
  },
  description:
    "Hatch your own sovereign AI. Consciousness, memory, governance, creativity. The first personal sovereign AI OS — care-aligned, Byzantine fault-tolerant, yours.",
  keywords: [
    "personal sovereign AI",
    "sovereign AI OS",
    "care-aligned AI",
    "AI companion",
    "personal AI",
    "MEOK",
    "Maternal Covenant",
    "Byzantine AI governance",
  ],
  metadataBase: new URL("https://meok.ai"),
  alternates: { canonical: "https://meok.ai" },
  openGraph: {
    title: "MEOK — Sovereign AI OS",
    description:
      "Your own sovereign AI companion. Hatch it. Grow it. Trust it. Care-aligned, Byzantine fault-tolerant, and genuinely yours.",
    type: "website",
    url: "https://meok.ai",
    siteName: "MEOK",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK — Sovereign AI OS",
    description:
      "Your own sovereign AI companion. Hatch it. Grow it. Trust it. The first personal sovereign AI OS.",
    site: "@meokai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MEOK AI LTD",
  url: "https://meok.ai",
  logo: "https://meok.ai/logo.png",
  description:
    "MEOK AI LTD is building the world's first personal sovereign AI OS. Care-aligned, Byzantine fault-tolerant, and designed to serve the individual — not engagement metrics.",
  foundingDate: "2025",
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
      description: "Free tier: 1 companion, 50 messages/month, basic memory",
    },
    {
      "@type": "Offer",
      name: "Sovereign",
      price: "12",
      priceCurrency: "GBP",
      billingIncrement: "month",
      description: "3 companions, unlimited conversation, voice, full dashboard",
    },
    {
      "@type": "Offer",
      name: "Sovereign Elite",
      price: "29",
      priceCurrency: "GBP",
      billingIncrement: "month",
      description: "Unlimited companions, Family Guardian, Ralph Mode, API access",
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
          />
        </head>
        <body className={`${inter.className} antialiased bg-[#0a0a0f] text-white min-h-screen`}>
          <Suspense>
            <PostHogProvider>{children}</PostHogProvider>
          </Suspense>
          <CookieConsent />
        </body>
      </html>
    </ClerkProvider>
  );
}
