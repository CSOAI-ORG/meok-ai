import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardian for Children — Safe AI Companion That Grows With Your Child | MEOK.AI",
  description:
    "MEOK Guardian is a safe AI companion for children aged 6-18. Age-appropriate for every stage, with hard blocks on harmful content, parental controls, and zero data profiling of minors. Ever.",
  openGraph: {
    title: "Guardian for Children — Safe AI Companion That Grows With Your Child | MEOK.AI",
    description:
      "A safe AI companion that grows with your child. Age-appropriate from 6 to 18. No data profiling of minors. Ever.",
    type: "website",
  },
  alternates: {
    canonical: "https://meok.ai/guardian/children",
  },
};

export default function GuardianChildrenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
