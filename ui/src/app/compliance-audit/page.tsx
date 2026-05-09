import type { Metadata } from "next";
import ComplianceAuditClient from "./compliance-audit-client";

export const metadata: Metadata = {
  title: "EU AI Act Compliance Audit — MEOK Enterprise",
  description: "Automated EU AI Act gap analysis. £5K one-time audit. 48-hour delivery. High-risk AI system compliance for finance, healthcare, and critical infrastructure.",
};

export default function ComplianceAuditPage() {
  return <ComplianceAuditClient />;
};
