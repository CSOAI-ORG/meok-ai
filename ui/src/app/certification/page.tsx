import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "CSOAI Certification",
  description:
    "Signed, verifier-checkable CSOAI certifications in AI compliance, governance and audit.",
  alternates: { canonical: "https://meok.ai/certification" },
};

export default function CertificationRedirectPage() {
  redirect("/council/certifications");
}
