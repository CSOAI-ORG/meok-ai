import Link from "next/link";

const FEATURES = [
  {
    icon: "🛡️",
    title: "Real-Time Safety Monitoring",
    desc: "Monitor every AI interaction for safety violations, bias indicators, and policy breaches. Instant alerts.",
  },
  {
    icon: "⚖️",
    title: "EU AI Act Compliance",
    desc: "Automated compliance reporting for EU AI Act requirements. High-risk system classification and documentation.",
  },
  {
    icon: "🔍",
    title: "Bias Detection Engine",
    desc: "Advanced ML models detect demographic bias, fairness violations, and discriminatory patterns in AI outputs.",
  },
  {
    icon: "📊",
    title: "Audit Trail & Logging",
    desc: "Immutable audit logs for every AI decision. SOC2, GDPR, and HIPAA compliant from day one.",
  },
  {
    icon: "🤖",
    title: "Governance Integration",
    desc: "Connect with MEOK's Byzantine Council for multi-agent governance. 33 agents, fault-tolerant consensus.",
  },
  {
    icon: "📈",
    title: "Risk Scoring",
    desc: "Real-time risk assessment for each AI interaction. Proactive mitigation recommendations.",
  },
];

const COMPLIANCE = [
  { name: "EU AI Act", desc: "Full Article 9 compliance for high-risk systems" },
  { name: "GDPR", desc: "Data protection impact assessments and consent management" },
  { name: "SOC 2 Type II", desc: "Security, availability, and confidentiality controls" },
  { name: "HIPAA", desc: "Healthcare AI compliance with PHI protection" },
  { name: "NIST AI RMF", desc: "National AI Risk Management Framework alignment" },
  { name: "ISO 42001", desc: "AI management system certification support" },
];

export default function AgisafePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Enterprise AI Safety Platform
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                AGISafe.ai
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Real-time AI safety monitoring and compliance automation.
              <br className="hidden md:block" />
              Deploy AI with confidence. Stay compliant. Protect your users.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-400 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/25"
              >
                Request Demo
              </Link>
              <Link 
                href="#features"
                className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
              >
                View Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-slate-800/50 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-slate-400">Threat detection rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">&lt;50ms</div>
              <div className="text-slate-400">Real-time monitoring latency</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-slate-400">Compliance frameworks supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-slate-400">Continuous safety monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade AI Safety
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive monitoring and governance tools to keep your AI systems safe and compliant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance Ready
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Automated compliance for the regulations that matter to your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPLIANCE.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">{item.name}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Built on MEOK's Byzantine Council
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                AGISafe uses MEOK's proprietary 33-agent governance architecture to ensure every safety decision is validated by fault-tolerant consensus.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Byzantine Fault Tolerance</h4>
                    <p className="text-slate-400">System remains safe even if up to 10 agents are compromised.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Human-in-the-Loop</h4>
                    <p className="text-slate-400">Critical decisions require human confirmation before execution.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Immutable Audit Trail</h4>
                    <p className="text-slate-400">Every decision logged, timestamped, and verifiable.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/30 to-teal-500/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/40 flex items-center justify-center text-2xl font-bold text-emerald-400">
                      33
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">33 Specialist Agents</h3>
                <p className="text-slate-400">Memory, Security, Care Validation, Research, Guardian, and more</p>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["Memory", "Security", "Care", "Research", "Guardian", "Consensus"].map((role) => (
                  <span key={role} className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pricing
            </h2>
            <p className="text-xl text-slate-400">
              Flexible plans for organisations of any size.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
              <div className="text-4xl font-bold text-white mb-4">£99<span className="text-lg text-slate-400">/mo</span></div>
              <p className="text-slate-400 mb-6">For small teams getting started with AI safety.</p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>✓ 10,000 AI interactions/month</li>
                <li>✓ Real-time monitoring</li>
                <li>✓ Basic bias detection</li>
                <li>✓ Email support</li>
              </ul>
              <Link href="#contact" className="block text-center py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                Get Started
              </Link>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-b from-emerald-500/20 to-teal-500/10 border border-emerald-500/40 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-emerald-500 rounded-full text-sm font-medium text-white">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
              <div className="text-4xl font-bold text-white mb-4">£999<span className="text-lg text-slate-400">/mo</span></div>
              <p className="text-slate-400 mb-6">For organisations with serious AI deployments.</p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>✓ 100,000 AI interactions/month</li>
                <li>✓ Full compliance suite</li>
                <li>✓ EU AI Act reporting</li>
                <li>✓ Priority support</li>
              </ul>
              <Link href="#contact" className="block text-center py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 transition-all">
                Get Started
              </Link>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-4">Custom</div>
              <p className="text-slate-400 mb-6">For large-scale AI operations with complex requirements.</p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>✓ Unlimited interactions</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated success manager</li>
                <li>✓ 24/7 SLA support</li>
              </ul>
              <Link href="#contact" className="block text-center py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Secure Your AI?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Schedule a demo to see AGISafe in action with your specific use case.
          </p>
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Work email"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
              />
              <input 
                type="text" 
                placeholder="Company name"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
              />
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-400 hover:to-teal-500 transition-all"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
