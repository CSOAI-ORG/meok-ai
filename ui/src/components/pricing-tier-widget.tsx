'use client'

// MEOK Consumer Pricing Tier Widget
// 5 pricing tiers + 8 Stripe payment links
// MIT licensed

const TIERS = [
  { name: 'Free',          price: '£0',   period: '/mo',  features: ['1,247 free COAI attestations', 'Open source substrate', 'Self-hostable'], stripe: null,           color: 'slate' },
  { name: 'Sovereign',     price: '£9',   period: '/mo',  features: ['1 seat', 'EU + US compute', 'Ed25519 sovereign', 'BFT voter seat'], stripe: 'https://buy.stripe.com/9B67sNeoIcMObEx56o8k91S', color: 'amber' },
  { name: 'Pro',           price: '£19',  period: '/mo',  features: ['1 seat', 'All 220+ MCP servers', 'Voice + VR + 3D avatar', '5 BFT voter seats'], stripe: 'https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T', color: 'cyan' },
  { name: 'Family',        price: '£29',  period: '/mo',  features: ['5 seats', 'Family OS dashboard', 'MEOK Dome + Council', '3 BFT voter seats'], stripe: 'https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U', color: 'pink' },
  { name: 'Enterprise',    price: '£500', period: '/mo+', features: ['Unlimited seats', 'Self-hostable', 'Custom 18th hive', 'Unlimited BFT'], stripe: 'mailto:enterprise@meok.ai', color: 'violet' },
];

export function PricingTierWidget() {
  return (
    <div className="p-4 bg-slate-900/80 rounded-xl text-slate-100">
      <h3 className="text-lg font-bold mb-3 text-amber-300">💰 5 Pricing Tiers · Sovereign AI</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {TIERS.map((t) => (
          <div key={t.name} className={`bg-slate-800/50 rounded p-3 text-xs border border-${t.color}-500/30`}>
            <div className={`text-${t.color}-300 font-bold text-sm`}>{t.name}</div>
            <div className="text-2xl font-bold mt-1">
              {t.price}<span className="text-xs text-slate-400">{t.period}</span>
            </div>
            <ul className="mt-2 space-y-1 text-slate-300">
              {t.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            {t.stripe && t.stripe.startsWith('http') ? (
              <a href={t.stripe} target="_blank" rel="noopener noreferrer"
                 className={`mt-2 block text-center px-2 py-1 rounded bg-${t.color}-500/20 text-${t.color}-200 text-[10px]`}>
                Buy on Stripe →
              </a>
            ) : t.stripe ? (
              <a href={t.stripe}
                 className={`mt-2 block text-center px-2 py-1 rounded bg-${t.color}-500/20 text-${t.color}-200 text-[10px]`}>
                Contact sales →
              </a>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-3 p-2 bg-amber-500/10 border border-amber-500/30 rounded text-xs text-amber-200">
        💳 5 tiers + 8 Stripe payment links live. £9-£500/mo. MIT. Forever.
      </div>
    </div>
  );
}

export default PricingTierWidget;
