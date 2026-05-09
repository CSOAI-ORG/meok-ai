"use client";

import { useState } from "react";
import { ShieldCheck, Clock, FileText, CheckCircle, ArrowRight, Building2, AlertTriangle, ChevronDown } from "lucide-react";

const packages = [
  {
    name: "Starter Audit",
    price: "£5,000",
    desc: "One-time EU AI Act gap analysis + board-ready PDF report",
    features: ["42-point compliance checklist", "Risk classification (high/low/minimal)", "Penalty exposure assessment", "Remediation roadmap", "48-hour delivery"],
    cta: "Start Starter Audit",
    stripe: "price_starter_audit",
  },
  {
    name: "Professional Audit",
    price: "£12,000",
    desc: "Full compliance + DORA + GDPR crosswalk for financial services",
    features: ["Everything in Starter", "DORA compliance check", "GDPR Article 22 AI analysis", "Technical documentation pack", "24-hour delivery", "Priority support"],
    cta: "Start Professional Audit",
    stripe: "price_pro_audit",
    featured: true,
  },
  {
    name: "Enterprise Audit",
    price: "£25,000",
    desc: "Multi-jurisdiction compliance. Executive briefing + ongoing monitoring.",
    features: ["Everything in Professional", "ISO 42001 alignment", "NIST AI RMF crosswalk", "Quarterly monitoring", "Board presentation", "Dedicated compliance consultant"],
    cta: "Contact Sales",
    stripe: "contact",
  },
];

const faqs = [
  { q: "What happens after I purchase?", a: "You'll receive a secure intake form within 2 hours. Complete it with your AI system details, risk classification, and company info. Our compliance engine generates your report in 48 hours." },
  { q: "Is the report legally binding?", a: "No — this is an automated gap analysis to support your compliance journey, not legal advice. For legally binding assessments, we recommend engaging a qualified legal firm alongside our analysis." },
  { q: "What if my system is already compliant?", a: "We'll tell you. If you're already compliant, you get a clean report and full documentation — useful for regulators and board-level assurance." },
  { q: "Do you offer payment plans?", a: "Yes — Enterprise audits can be split across quarterly payments. Contact us to arrange." },
];

export default function ComplianceAuditClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  async function handlePurchase(stripePrice: string) {
    if (stripePrice === "contact") {
      window.location.href = "mailto:sales@meok.ai?subject=Enterprise Audit Inquiry";
      return;
    }
    setLoading(stripePrice);
    try {
      const res = await fetch("/api/compliance-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: stripePrice }),
      });
      if (res.ok) {
        const { url } = await res.json();
        window.location.href = url;
      } else {
        alert("Checkout unavailable. Please email sales@meok.ai");
      }
    } catch {
      alert("Checkout unavailable. Please email sales@meok.ai");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            EU AI Act Article 50 watermarking: 2 November 2026
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            EU AI Act Compliance<br />
            <span className="text-blue-600">Delivered in 48 Hours</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            The only automated compliance audit for high-risk AI systems. 42-point analysis, risk classification, penalty assessment, and board-ready PDF — from £5,000.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative border rounded-2xl p-8 ${pkg.featured ? "border-blue-600 shadow-xl shadow-blue-100 ring-2 ring-blue-600" : "border-gray-200"}`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <div className="text-4xl font-extrabold mt-2">{pkg.price}</div>
                <div className="text-sm text-gray-400 mt-1">one-time</div>
              </div>
              <p className="text-gray-600 text-sm mb-6">{pkg.desc}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePurchase(pkg.stripe)}
                disabled={loading !== null}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
                  pkg.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {loading === pkg.stripe ? "Processing..." : pkg.cta}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">What our audit covers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">EU AI Act Annex III</h4>
                  <p className="text-sm text-gray-500">Risk classification for prohibited, high-risk, and limited-risk AI systems. Includes biometric categorization, critical infrastructure, and employment AI.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">42-Point Technical Audit</h4>
                  <p className="text-sm text-gray-500">Data governance, transparency, human oversight, accuracy, robustness, and cybersecurity. Each point scored against enforcement standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Penalty Exposure Analysis</h4>
                  <p className="text-sm text-gray-500">Up to €35M or 7% global annual turnover — whichever is higher. Calculate your exact exposure based on company size and violation type.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-semibold">DORA Crosswalk (Financial Services)</h4>
                  <p className="text-sm text-gray-500">Digital Operational Resilience Act overlap analysis. ICT risk management, incident reporting, and third-party risk mapped to EU AI Act requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Board-Ready PDF Report</h4>
                  <p className="text-sm text-gray-500">Executive summary, compliance score, gap matrix, remediation roadmap, and compliance timeline. Ready for board presentation within 48 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-medium"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 transition-transform ${faqOpen === i ? "rotate-180" : ""}`} />
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-6 text-gray-600 text-sm">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}