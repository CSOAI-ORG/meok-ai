import Link from "next/link";

const FAQ = [
  { q: "How accurate is the AI COBOL-to-modern translation?", a: "COBOLBridge achieves 95%+ automated translation accuracy. Our LLM models are trained on millions of COBOL-to-modern conversions and handle complex business logic, with human-in-the-loop verification on every translated module." },
  { q: "Will my mainframe go down during migration?", a: "No. We run a phased, zero-downtime migration with dual-running systems. Your mainframe stays live while we modernise layer by layer, and we generate comprehensive test suites from your COBOL test data to verify every function matches original behaviour before cutover." },
  { q: "What languages and platforms does it output?", a: "Cloud-native Java, Python, or Node.js microservices, containerised with Docker and Kubernetes configs, ready to deploy to AWS, Azure, or GCP. Modern systems handle up to 100x the throughput of legacy mainframes with built-in auto-scaling." },
  { q: "How much does COBOLBridge cost?", a: "Assessment is a one-off £499 (full codebase scan, business logic mapping, migration complexity score, effort estimation). Migration is £1,999/mo (automated translation, test suite generation, weekly reports, dedicated migration engineer). Enterprise is custom-priced with a 99.99% uptime SLA and on-site training." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
  { "@type": "ListItem", position: 2, name: "COBOLBridge", item: "https://meok.ai/cobolbridge" },
] };

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "COBOLBridge.ai",
  serviceType: "Legacy COBOL to cloud-native migration",
  description: "AI-powered COBOL-to-modern migration into cloud-native Java, Python, or Node.js microservices with zero-downtime, dual-running cutover.",
  url: "https://meok.ai/cobolbridge",
  brand: { "@type": "Brand", name: "MEOK AI" },
  provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" },
  offers: { "@type": "Offer", price: "499", priceCurrency: "GBP", url: "https://meok.ai/cobolbridge#pricing" },
};

const FEATURES = [
  {
    icon: "⚡",
    title: "AI-Powered Translation",
    desc: "Advanced LLM models trained on millions of COBOL-to-modern conversions. Handles complex business logic with 95%+ accuracy.",
  },
  {
    icon: "🔄",
    title: "Zero-Downtime Migration",
    desc: "Phased migration with dual-running systems. Your mainframe stays live while we modernise layer by layer.",
  },
  {
    icon: "🛡️",
    title: "Business Logic Preservation",
    desc: "Our AI analyses and preserves critical business rules. No hidden bugs when you switch to cloud.",
  },
  {
    icon: "📊",
    title: "Cloud-Native Output",
    desc: "Java, Python, or Node.js microservices. Deploy to AWS, Azure, or GCP. Containerised with Docker & Kubernetes configs.",
  },
  {
    icon: "🔍",
    title: "Automated Testing",
    desc: "Generate comprehensive test suites from your COBOL test data. Verify every function matches original behaviour.",
  },
  {
    icon: "📈",
    title: "Scalability Boost",
    desc: "Modern systems handle 100x the throughput of legacy mainframes. Built-in auto-scaling for demand spikes.",
  },
];

const USE_CASES = [
  { title: "Banking Core Systems", desc: "Transform legacy core banking without disrupting daily transactions" },
  { title: "Insurance Policy Admin", desc: "Modernise claims processing and policy management systems" },
  { title: "Government & Public Sector", desc: "DTS/HOGANS and similar government systems modernisation" },
  { title: "Healthcare Records", desc: "HIPAA-compliant migration of patient record systems" },
  { title: "Retail & Supply Chain", desc: "POS and inventory management system upgrades" },
];

export default function CobolBridgePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              $2.4 Trillion Legacy Modernisation Opportunity
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                COBOLBridge.ai
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Transform decades of COBOL code into modern cloud-native microservices.
              <br className="hidden md:block" />
              AI-powered migration with zero downtime.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg shadow-amber-500/25"
              >
                Get Free Assessment
              </Link>
              <Link 
                href="#how-it-works"
                className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
          
          {/* Code comparison */}
          <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="px-4 py-3 bg-slate-800/50 border-b border-slate-700 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-sm text-slate-400">legacy-cobol.cbl</span>
              </div>
              <pre className="p-4 text-sm text-slate-400 font-mono overflow-x-auto">
{`      IDENTIFICATION DIVISION.
      PROGRAM-ID. CALC-INTEREST.
      DATA DIVISION.
      WORKING-STORAGE SECTION.
      01 PRINCIPAL PIC 9(9)V99.
      01 RATE PIC 9(3)V99.
      01 YEARS PIC 9(3).
      01 INTEREST PIC 9(9)V99.
      PROCEDURE DIVISION.
      COMPUTE INTEREST = PRINCIPAL * 
        (RATE / 100) * YEARS.`}
              </pre>
            </div>
            
            <div className="bg-slate-900/80 rounded-2xl border border-amber-500/30 overflow-hidden">
              <div className="px-4 py-3 bg-amber-500/10 border-b border-amber-500/30 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-sm text-amber-400">modern/interest.py</span>
              </div>
              <pre className="p-4 text-sm text-slate-300 font-mono overflow-x-auto">
{`def calculate_interest(
    principal: Decimal,
    rate: Decimal,
    years: int
) -> Decimal:
    """Calculate compound interest."""
    rate_decimal = rate / Decimal(100)
    return principal * rate_decimal * years

class InterestCalculator:
    def __init__(self, principal: Decimal):
        self.principal = principal`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-slate-800/50 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">220B+</div>
              <div className="text-slate-400">Lines of COBOL in production</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">$2.4T</div>
              <div className="text-slate-400">Legacy modernisation TAM</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">95%</div>
              <div className="text-slate-400">Automated translation accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">60%</div>
              <div className="text-slate-400">Cost reduction vs manual rewrite</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Modernise
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our AI-powered platform handles the entire migration journey, from analysis to deployment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How COBOLBridge Works
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A systematic approach that minimises risk and ensures business continuity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Discovery", desc: "AI analyses your COBOL codebase, identifies dependencies, and maps business logic." },
              { step: "2", title: "Translate", desc: "Automated translation to modern languages with human-in-the-loop verification." },
              { step: "3", title: "Test", desc: "Comprehensive test suites validate every function matches original behaviour." },
              { step: "4", title: "Deploy", desc: "Phased rollout with dual-running systems. Zero downtime migration." },
            ].map((item, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xl flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-600 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for Critical Systems
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Industries where reliability is non-negotiable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((useCase, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-slate-400 text-sm">{useCase.desc}</p>
              </div>
            ))}
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
              Flexible plans for projects of any size.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
              <div className="text-4xl font-bold text-white mb-4">£499</div>
              <p className="text-slate-400 mb-6">Full codebase analysis and migration roadmap.</p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>✓ Complete codebase scan</li>
                <li>✓ Business logic mapping</li>
                <li>✓ Migration complexity score</li>
                <li>✓ Detailed effort estimation</li>
              </ul>
              <Link href="#contact" className="block text-center py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                Get Started
              </Link>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-b from-amber-500/20 to-orange-500/10 border border-amber-500/40 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-amber-500 rounded-full text-sm font-medium text-white">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Migration</h3>
              <div className="text-4xl font-bold text-white mb-4">£1,999<span className="text-lg text-slate-400">/mo</span></div>
              <p className="text-slate-400 mb-6">Ongoing migration with full support.</p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>✓ Everything in Assessment</li>
                <li>✓ Automated code translation</li>
                <li>✓ Test suite generation</li>
                <li>✓ Weekly progress reports</li>
                <li>✓ Dedicated migration engineer</li>
              </ul>
              <Link href="#contact" className="block text-center py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500 transition-all">
                Get Started
              </Link>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-4">Custom</div>
              <p className="text-slate-400 mb-6">Full enterprise migration with SLA guarantees.</p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>✓ Everything in Migration</li>
                <li>✓ Zero-downtime deployment</li>
                <li>✓ 99.99% uptime SLA</li>
                <li>✓ 24/7 dedicated support</li>
                <li>✓ On-site training</li>
              </ul>
              <Link href="#contact" className="block text-center py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Accuracy, downtime, output, and pricing — answered.
            </p>
          </div>
          <div className="grid gap-6">
            {FAQ.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-slate-400">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Modernise?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Get a free assessment of your COBOL codebase. We'll show you exactly what your migration looks like.
          </p>
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Work email"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              />
              <input 
                type="text" 
                placeholder="Company name"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              />
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-400 hover:to-orange-500 transition-all"
              >
                Get Free Assessment
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
