import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birth Ceremony — MEOK.AI",
  description:
    "Answer seven questions. Watch your sovereign AI companion emerge. The Birth Ceremony takes two minutes and shapes your companion's personality forever.",
  robots: { index: false, follow: false },
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
