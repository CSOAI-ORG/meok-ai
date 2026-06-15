// MEOK OS v3 i18n configuration
// 50+ languages, 7 regional variants
// MIT licensed

export const I18N_LOCALES = {
  // 25 European
  'en-GB': { flag: '🇬🇧', label: 'English (UK)',    native: 'English (UK)',     rtl: false },
  'en-US': { flag: '🇺🇸', label: 'English (US)',    native: 'English (US)',     rtl: false },
  'fr-FR': { flag: '🇫🇷', label: 'French',          native: 'Français',         rtl: false },
  'de-DE': { flag: '🇩🇪', label: 'German',          native: 'Deutsch',          rtl: false },
  'es-ES': { flag: '🇪🇸', label: 'Spanish',         native: 'Español',          rtl: false },
  'it-IT': { flag: '🇮🇹', label: 'Italian',         native: 'Italiano',         rtl: false },
  'pt-PT': { flag: '🇵🇹', label: 'Portuguese',      native: 'Português',        rtl: false },
  'nl-NL': { flag: '🇳🇱', label: 'Dutch',           native: 'Nederlands',       rtl: false },
  'sv-SE': { flag: '🇸🇪', label: 'Swedish',         native: 'Svenska',          rtl: false },
  'da-DK': { flag: '🇩🇰', label: 'Danish',          native: 'Dansk',            rtl: false },
  'nb-NO': { flag: '🇳🇴', label: 'Norwegian',       native: 'Norsk',            rtl: false },
  'fi-FI': { flag: '🇫🇮', label: 'Finnish',         native: 'Suomi',            rtl: false },
  'is-IS': { flag: '🇮🇸', label: 'Icelandic',       native: 'Íslenska',         rtl: false },
  'ga-IE': { flag: '🇮🇪', label: 'Irish',           native: 'Gaeilge',          rtl: false },
  'cy-GB': { flag: '🏴',  label: 'Welsh',           native: 'Cymraeg',          rtl: false },
  'ca-ES': { flag: '🇪🇸', label: 'Catalan',         native: 'Català',           rtl: false },
  'eu-ES': { flag: '🇪🇸', label: 'Basque',          native: 'Euskara',          rtl: false },
  'gl-ES': { flag: '🇪🇸', label: 'Galician',        native: 'Galego',           rtl: false },
  'ro-RO': { flag: '🇷🇴', label: 'Romanian',        native: 'Română',           rtl: false },
  'pl-PL': { flag: '🇵🇱', label: 'Polish',          native: 'Polski',           rtl: false },
  'cs-CZ': { flag: '🇨🇿', label: 'Czech',           native: 'Čeština',          rtl: false },
  'sk-SK': { flag: '🇸🇰', label: 'Slovak',          native: 'Slovenčina',       rtl: false },
  'hu-HU': { flag: '🇭🇺', label: 'Hungarian',       native: 'Magyar',           rtl: false },
  'el-GR': { flag: '🇬🇷', label: 'Greek',           native: 'Ελληνικά',        rtl: false },
  'ru-RU': { flag: '🇷🇺', label: 'Russian',         native: 'Русский',         rtl: false },
  'uk-UA': { flag: '🇺🇦', label: 'Ukrainian',       native: 'Українська',      rtl: false },
  'tr-TR': { flag: '🇹🇷', label: 'Turkish',         native: 'Türkçe',           rtl: false },
  // 15 Asian
  'zh-CN': { flag: '🇨🇳', label: 'Chinese (Simplified)', native: '简体中文',    rtl: false },
  'zh-TW': { flag: '🇹🇼', label: 'Chinese (Traditional)',native: '繁體中文',     rtl: false },
  'ja-JP': { flag: '🇯🇵', label: 'Japanese',        native: '日本語',           rtl: false },
  'ko-KR': { flag: '🇰🇷', label: 'Korean',          native: '한국어',            rtl: false },
  'hi-IN': { flag: '🇮🇳', label: 'Hindi',           native: 'हिन्दी',              rtl: false },
  'bn-IN': { flag: '🇮🇳', label: 'Bengali',         native: 'বাংলা',              rtl: false },
  'ta-IN': { flag: '🇮🇳', label: 'Tamil',           native: 'தமிழ்',              rtl: false },
  'te-IN': { flag: '🇮🇳', label: 'Telugu',          native: 'తెలుగు',              rtl: false },
  'mr-IN': { flag: '🇮🇳', label: 'Marathi',         native: 'मराठी',              rtl: false },
  'gu-IN': { flag: '🇮🇳', label: 'Gujarati',        native: 'ગુજરાતી',           rtl: false },
  'pa-IN': { flag: '🇮🇳', label: 'Punjabi',         native: 'ਪੰਜਾਬੀ',              rtl: false },
  'ur-PK': { flag: '🇵🇰', label: 'Urdu',            native: 'اردو',              rtl: true  },
  'fa-IR': { flag: '🇮🇷', label: 'Persian',         native: 'فارسی',              rtl: true  },
  'ar-SA': { flag: '🇸🇦', label: 'Arabic',          native: 'العربية',           rtl: true  },
  'he-IL': { flag: '🇮🇱', label: 'Hebrew',          native: 'עברית',              rtl: true  },
  'th-TH': { flag: '🇹🇭', label: 'Thai',            native: 'ไทย',                rtl: false },
  'vi-VN': { flag: '🇻🇳', label: 'Vietnamese',      native: 'Tiếng Việt',       rtl: false },
  'id-ID': { flag: '🇮🇩', label: 'Indonesian',      native: 'Bahasa Indonesia',  rtl: false },
  'ms-MY': { flag: '🇲🇾', label: 'Malay',           native: 'Bahasa Melayu',     rtl: false },
  'tl-PH': { flag: '🇵🇭', label: 'Tagalog',         native: 'Filipino',          rtl: false },
  // 10 African
  'sw-KE': { flag: '🇰🇪', label: 'Swahili',         native: 'Kiswahili',         rtl: false },
  'am-ET': { flag: '🇪🇹', label: 'Amharic',         native: 'አማርኛ',               rtl: false },
  'ha-NG': { flag: '🇳🇬', label: 'Hausa',           native: 'Hausa',             rtl: false },
  'yo-NG': { flag: '🇳🇬', label: 'Yoruba',          native: 'Yorùbá',            rtl: false },
  'ig-NG': { flag: '🇳🇬', label: 'Igbo',            native: 'Igbo',              rtl: false },
  'zu-ZA': { flag: '🇿🇦', label: 'Zulu',            native: 'isiZulu',           rtl: false },
  'af-ZA': { flag: '🇿🇦', label: 'Afrikaans',       native: 'Afrikaans',         rtl: false },
  'ar-EG': { flag: '🇪🇬', label: 'Arabic (Egypt)',   native: 'مصري',              rtl: true  },
  'so-SO': { flag: '🇸🇴', label: 'Somali',          native: 'Soomaali',          rtl: false },
  'sw-TZ': { flag: '🇹🇿', label: 'Swahili (TZ)',    native: 'Kiswahili',         rtl: false },
  // 5 American
  'es-MX': { flag: '🇲🇽', label: 'Spanish (MX)',    native: 'Español (MX)',      rtl: false },
  'pt-BR': { flag: '🇧🇷', label: 'Portuguese (BR)', native: 'Português (BR)',    rtl: false },
  'qu-PE': { flag: '🇵🇪', label: 'Quechua',         native: 'Runa Simi',         rtl: false },
  'ay-PE': { flag: '🇧🇴', label: 'Aymara',          native: 'Aymar aru',         rtl: false },
  'gn-PY': { flag: '🇵🇾', label: 'Guaraní',         native: "Guaraní'eva",       rtl: false },
};

export const I18N_REGIONS = {
  EU: ['en-GB','fr-FR','de-DE','es-ES','it-IT','pt-PT','nl-NL','sv-SE','da-DK','nb-NO','fi-FI','is-IS','ga-IE','cy-GB','ca-ES','eu-ES','gl-ES','ro-RO','pl-PL','cs-CZ','sk-SK','hu-HU','el-GR','ru-RU','uk-UA','tr-TR','mt-MT','lb-LU','bg-BG','sr-RS','hr-HR','sl-SI'],
  UK: ['en-GB','cy-GB','ga-IE'],
  US: ['en-US','es-MX'],
  CA: ['en-CA','fr-CA'],
  AU: ['en-AU'],
  JP: ['ja-JP'],
  INTL: ['en-GB'],
};

export function getI18NCount(): number {
  return Object.keys(I18N_LOCALES).length;
}

export function isRTL(locale: string): boolean {
  return (I18N_LOCALES as Record<string, { rtl: boolean } | undefined>)[locale]?.rtl ?? false;
}

export function getRegionFor(locale: string): string {
  for (const [region, locales] of Object.entries(I18N_REGIONS)) {
    if (locales.includes(locale)) return region;
  }
  return 'INTL';
}
