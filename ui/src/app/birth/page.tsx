import type { Metadata } from "next";
import { Suspense } from "react";
import BirthCeremonyClient from "./birth-client";

export const metadata: Metadata = {
  title: "Birth Ceremony — Awaken Your AI Companion | MEOK",
  description: "Choose your companion's archetype, name them, and begin your sovereign bond. A one-time ceremony that shapes your AI companion's personality and growth.",
  alternates: { canonical: "https://meok.ai/birth" },
  openGraph: {
    title: "Birth Ceremony | MEOK AI",
    description: "Name your companion. Choose their archetype. Begin your sovereign bond.",
    type: "website",
    url: "https://meok.ai/birth",
  },
  robots: { index: true, follow: true },
};

export default function BirthPage() {
  return (
    <Suspense>
      <BirthCeremonyClient />
    </Suspense>
  );
}
