"use client";

import { useState } from "react";
import { AlertTriangle, Share2, Zap, Shield, TrendingUp, Lock } from "lucide-react";

const GOLD = "#c9a84c";
const NAVY = "#0a0e27";
const SURFACE = "#0f1425";
const CREAM = "#f5f1ed";

interface ScamExample {
  id: string;
  title: string;
  category: string;
  text: string;
  riskScore: number;
  patterns: string[];
}

// 6 example scams covering different categories
const SCAM_EXAMPLES: ScamExample[] = [
  {
    id: "phishing",
    title: "Phishing Email",
    category: "Email Fraud",
    text: "Hi, we noticed unusual activity on your PayPal account. Please verify your information immediately by clicking this link: paypa1-security.com/verify. Your account will be limited in 24 hours if you don't act now.",
    riskScore: 92,
    patterns: [
      "Urgent language with deadline",
      "Lookalike domain (paypa1 vs paypal)",
      "Requests sensitive information",
      "Creates artificial scarcity/fear",
    ],
  },
  {
    id: "romance",
    title: "Romance Scam",
    category: "Relationship Fraud",
    text: "Hi beautiful 😊 I saw your profile and felt instant connection. I'm a wealthy engineer working overseas, miss human connection. Would love to get to know you better. Maybe we could video call soon? No, my company blocked video but I can send photos. Can you help me with an urgent situation?",
    riskScore: 88,
    patterns: [
      "Quick relationship building",
      "Financial request following trust-building",
      "Technical excuses to avoid verification",
      "Generic compliments",
    ],
  },
  {
    id: "lottery",
    title: "Lottery/Prize Scam",
    category: "Prize Fraud",
    text: "Congratulations! You've won $500,000 in the National Lottery! You didn't enter? That's OK, we selected you at random. To claim your prize, please send a processing fee of $99 to confirm your identity and your winnings will be sent immediately via wire transfer.",
    riskScore: 95,
    patterns: [
      "Unsolicited prize announcement",
      "Claiming you didn't enter yet won",
      "Upfront payment required",
      "Unrealistic prize amount",
    ],
  },
  {
    id: "tech-support",
    title: "Tech Support Scam",
    category: "Technical Fraud",
    text: "ALERT: Your Windows PC has been infected with malware! Do not ignore this. Click here immediately to run our free security scan. DO NOT CLOSE THIS WINDOW. Your personal data is at risk. Call 1-888-TECH-FIX for immediate assistance.",
    riskScore: 86,
    patterns: [
      "Urgent pop-up style messaging",
      "Fake security threats",
      "Phone number for 'support'",
      "Pressure to take immediate action",
    ],
  },
  {
    id: "investment",
    title: "Investment Scam",
    category: "Financial Fraud",
    text: "Exclusive opportunity: Invest in our guaranteed 45% annual return cryptocurrency fund. Minimum investment $500. Limited slots available (only 3 left!). Past performance: $100 → $145 in 90 days. We're fully regulated and insured. Your money is guaranteed safe. Investment closes Friday.",
    riskScore: 89,
    patterns: [
      "Guaranteed returns promise",
      "Unrealistic ROI claims",
      "Artificial scarcity/urgency",
      "Lack of regulatory transparency",
    ],
  },
  {
    id: "job",
    title: "Job Scam",
    category: "Employment Fraud",
    text: "We loved your resume! No interview needed. You're hired! Start date: Monday. Role: Remote Data Entry. Salary: $50/hr + bonuses. Before we send you the laptop, please pay $199 for shipping and insurance. Refundable after 90 days. Send payment via gift card or crypto.",
    riskScore: 84,
    patterns: [
      "No interview process",
      "Upfront payment required",
      "Request for payment via untraceable method",
      "Too-good-to-be-true salary",
    ],
  },
];

// Animated risk meter component
function RiskMeter({ score }: { score: number }) {
  const rotation = (score / 100) * 180 - 90;
  const getColor = (s: number) => {
    if (s >= 80) return "#ef4444";
    if (s >= 60) return "#f97316";
    if (s >= 40) return "#eab308";
    return "#22c55e";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32">
        {/* Background arc */}
        <svg className="absolute w-full h-full" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
          {/* Risk zones */}
          <path d="M 100 10 A 90 90 0 0 1 190 100" fill="none" stroke="#22c55e" strokeWidth="8" opacity="0.3" />
          <path d="M 190 100 A 90 90 0 0 1 145 168" fill="none" stroke="#eab308" strokeWidth="8" opacity="0.3" />
          <path d="M 145 168 A 90 90 0 0 1 55 168" fill="none" stroke="#f97316" strokeWidth="8" opacity="0.3" />
          <path d="M 55 168 A 90 90 0 0 1 10 100" fill="none" stroke="#ef4444" strokeWidth="8" opacity="0.3" />
        </svg>

        {/* Needle */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <div
            className="absolute w-1 h-12 origin-bottom rounded-full transition-transform duration-500"
            style={{
              background: getColor(score),
              transform: `rotate(${rotation}deg)`,
            }}
          />
        </div>

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white" />
      </div>

      <div className="text-center">
        <div className="text-3xl font-bold" style={{ color: getColor(score) }}>
          {score}%
        </div>
        <div className="text-xs mt-1 text-gray-400">
          {score >= 80 && "Critical Risk"}
          {score >= 60 && score < 80 && "High Risk"}
          {score >= 40 && score < 60 && "Medium Risk"}
          {score < 40 && "Low Risk"}
        </div>
      </div>
    </div>
  );
}

export default function ScamStopPage() {
  const [selectedScam, setSelectedScam] = useState<ScamExample | null>(null);
  const [copied, setCopied] = useState(false);

  const handleTryScam = (scam: ScamExample) => {
    setSelectedScam(scam);
  };

  const handleShare = async () => {
    if (!selectedScam) return;
    const text = `I analyzed this scam with Scam Stop: "${selectedScam.title}" - Risk Score: ${selectedScam.riskScore}%. ${selectedScam.patterns.length} suspicious patterns detected.`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  return (
    <div className="min-h-screen p-6" style={{ background: NAVY }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8" style={{ color: GOLD }} />
            <h1 className="text-3xl font-bold text-white">Scam Stop Demo</h1>
          </div>
          <p className="text-gray-400">Learn to recognize common scams with interactive examples</p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Scam examples */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" style={{ color: GOLD }} />
              Example Scams (Try any)
            </h2>

            {SCAM_EXAMPLES.map((scam) => (
              <button
                key={scam.id}
                onClick={() => handleTryScam(scam)}
                className="w-full text-left p-4 rounded-xl border-2 transition-all"
                style={{
                  borderColor: selectedScam?.id === scam.id ? GOLD : "rgba(255,255,255,0.1)",
                  background: selectedScam?.id === scam.id ? `rgba(201,168,76,0.1)` : SURFACE,
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{scam.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{scam.category}</p>
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full"
                    style={{
                      background: scam.riskScore >= 80 ? "rgba(239,68,68,0.2)" : "rgba(249,115,22,0.2)",
                      color: scam.riskScore >= 80 ? "#ef4444" : "#f97316",
                    }}
                  >
                    <TrendingUp className="w-3 h-3" />
                    {scam.riskScore}%
                  </div>
                </div>

                <p className="text-sm text-gray-300 line-clamp-2">{scam.text}</p>
              </button>
            ))}
          </div>

          {/* Risk meter and details */}
          <div className="lg:col-span-1">
            {selectedScam ? (
              <div
                className="rounded-2xl p-6 border"
                style={{
                  background: SURFACE,
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                {/* Risk meter */}
                <RiskMeter score={selectedScam.riskScore} />

                {/* Scam message */}
                <div className="mt-8 mb-8 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <h3 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Message Content</h3>
                  <p className="text-sm leading-relaxed" style={{ color: CREAM }}>
                    {selectedScam.text}
                  </p>
                </div>

                {/* Patterns breakdown */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" style={{ color: GOLD }} />
                    Suspicious Patterns
                  </h3>
                  <div className="space-y-2">
                    {selectedScam.patterns.map((pattern, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: GOLD }} />
                        <span className="text-gray-300">{pattern}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Share button */}
                <button
                  onClick={handleShare}
                  className="w-full mt-6 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: GOLD,
                    color: NAVY,
                  }}
                >
                  <Share2 className="w-4 h-4" />
                  {copied ? "Copied!" : "Share Result"}
                </button>
              </div>
            ) : (
              <div
                className="rounded-2xl p-6 border-2 border-dashed flex flex-col items-center justify-center h-full text-center min-h-96"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <Lock className="w-12 h-12 text-gray-500 mb-3" />
                <p className="text-sm text-gray-400">Select a scam example to see the pattern breakdown and risk assessment</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Shield, label: "6 Categories", desc: "Email, romance, prizes, tech, investment, jobs" },
            { icon: TrendingUp, label: "Risk Analysis", desc: "Real-time pattern detection & scoring" },
            { icon: AlertTriangle, label: "Learn Patterns", desc: "Recognize red flags before you act" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border"
              style={{
                background: SURFACE,
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <item.icon className="w-5 h-5 mb-2" style={{ color: GOLD }} />
              <h3 className="font-semibold text-sm text-white mb-1">{item.label}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
