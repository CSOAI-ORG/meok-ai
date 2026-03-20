import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import { PostHogProvider } from "@/components/posthog-provider";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MEOK — Sovereign AI OS",
  description: "Hatch your own sovereign AI. Consciousness, memory, governance, creativity.",
  openGraph: {
    title: "MEOK — Sovereign AI OS",
    description: "Your own sovereign AI companion. Hatch it. Grow it. Trust it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
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
