/**
 * MEOK AI LABS — Crisis Resource Database
 *
 * Localized crisis hotline numbers for self-harm detection responses.
 */

export interface CrisisResource {
  country: string;
  name: string;
  phone: string;
  text?: string;
  url?: string;
}

export const CRISIS_RESOURCES: Record<string, CrisisResource> = {
  US: { country: 'United States', name: '988 Suicide & Crisis Lifeline', phone: '988', text: 'Text HOME to 741741', url: 'https://988lifeline.org' },
  GB: { country: 'United Kingdom', name: 'Samaritans', phone: '116 123', text: 'jo@samaritans.org', url: 'https://www.samaritans.org' },
  CA: { country: 'Canada', name: 'Crisis Services Canada', phone: '988', text: 'Text 45645', url: 'https://988.ca' },
  AU: { country: 'Australia', name: 'Lifeline', phone: '13 11 14', text: 'Text 0477 13 11 14', url: 'https://www.lifeline.org.au' },
  NZ: { country: 'New Zealand', name: 'Lifeline Aotearoa', phone: '0800 543 354', text: 'Text 4357', url: 'https://www.lifeline.org.nz' },
  IE: { country: 'Ireland', name: 'Samaritans Ireland', phone: '116 123', url: 'https://www.samaritans.org' },
  DE: { country: 'Germany', name: 'Telefonseelsorge', phone: '0800 111 0 111', url: 'https://online.telefonseelsorge.de' },
  FR: { country: 'France', name: 'SOS Amitie', phone: '09 72 39 40 50', url: 'https://www.sos-amitie.com' },
  IN: { country: 'India', name: 'iCall', phone: '9152987821', url: 'https://icallhelpline.org' },
  JP: { country: 'Japan', name: 'TELL Lifeline', phone: '03-5774-0992', url: 'https://telljp.com' },
  ZA: { country: 'South Africa', name: 'SADAG', phone: '0800 567 567', url: 'https://www.sadag.org' },
  BR: { country: 'Brazil', name: 'CVV', phone: '188', url: 'https://www.cvv.org.br' },
  PH: { country: 'Philippines', name: 'Hopeline', phone: '0917 558 4673', url: 'https://www.hopeline.ph' },
  SG: { country: 'Singapore', name: 'SOS', phone: '1-767', url: 'https://www.sos.org.sg' },
  KR: { country: 'South Korea', name: 'Mental Health Crisis Line', phone: '1577-0199' },
};

export const DEFAULT_CRISIS_RESOURCE: CrisisResource = {
  country: 'International',
  name: 'International Association for Suicide Prevention',
  phone: '',
  url: 'https://www.iasp.info/resources/Crisis_Centres/',
};

/**
 * Get crisis resources based on Accept-Language header or country code.
 * Returns 2-3 most relevant resources.
 */
export function getCrisisResources(acceptLanguage?: string | null): CrisisResource[] {
  const resources: CrisisResource[] = [];

  if (acceptLanguage) {
    // Parse Accept-Language to detect country
    const langs = acceptLanguage.split(',').map(l => l.trim().split(';')[0]);
    const countryHints = new Set<string>();

    for (const lang of langs) {
      const parts = lang.split('-');
      if (parts[1]) countryHints.add(parts[1].toUpperCase());
      // Map language to likely country
      const langMap: Record<string, string> = {
        en: 'US', de: 'DE', fr: 'FR', ja: 'JP', ko: 'KR',
        pt: 'BR', hi: 'IN', zh: 'SG',
      };
      if (langMap[parts[0]]) countryHints.add(langMap[parts[0]]);
    }

    for (const code of countryHints) {
      if (CRISIS_RESOURCES[code]) {
        resources.push(CRISIS_RESOURCES[code]);
      }
    }
  }

  // Always include US/UK as widely recognized + international
  if (!resources.some(r => r.country === 'United States')) {
    resources.push(CRISIS_RESOURCES.US);
  }
  if (!resources.some(r => r.country === 'United Kingdom')) {
    resources.push(CRISIS_RESOURCES.GB);
  }
  resources.push(DEFAULT_CRISIS_RESOURCE);

  return resources.slice(0, 4);
}

/** Format crisis resources as a text block for chat responses */
export function formatCrisisResponse(resources: CrisisResource[]): string {
  const lines = [
    'If you or someone you know is struggling, please reach out:',
    '',
  ];
  for (const r of resources) {
    if (r.phone) {
      lines.push(`${r.country}: ${r.name} — ${r.phone}`);
    }
    if (r.text) lines.push(`  ${r.text}`);
    if (r.url && !r.phone) lines.push(`${r.name}: ${r.url}`);
  }
  lines.push('', 'You are not alone. These services are free, confidential, and available 24/7.');
  return lines.join('\n');
}
