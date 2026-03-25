/**
 * Language detection unit tests
 */
import { detectLanguage, getLanguageDirective, languageToCountry } from '../lib/language';

describe('detectLanguage', () => {
  describe('English', () => {
    it('detects English text', () => {
      const result = detectLanguage('How do I implement a binary search tree in TypeScript?');
      expect(result.language).toBe('en');
      expect(result.script).toBe('latin');
    });

    it('detects English with high confidence for longer text', () => {
      const result = detectLanguage(
        'The quick brown fox jumps over the lazy dog. This is a longer sentence that should give more confidence in the detection result.',
      );
      expect(result.language).toBe('en');
      expect(result.confidence).toBeGreaterThan(0.3);
    });
  });

  describe('French', () => {
    it('detects French text', () => {
      const result = detectLanguage('Bonjour, comment puis-je ameliorer mon code Python?');
      expect(result.language).toBe('fr');
      expect(result.script).toBe('latin');
    });

    it('detects French with reasonable confidence', () => {
      const result = detectLanguage('Je cherche des conseils pour gerer mon stress au travail');
      expect(result.language).toBe('fr');
      expect(result.confidence).toBeGreaterThan(0.2);
    });
  });

  describe('German', () => {
    it('detects German text', () => {
      const result = detectLanguage('Kannst du mir bei meinem JavaScript-Projekt helfen?');
      expect(result.language).toBe('de');
      expect(result.script).toBe('latin');
    });

    it('detects German with reasonable confidence', () => {
      const result = detectLanguage('Ich bin sehr gestresst wegen der Arbeit und brauche Hilfe');
      expect(result.language).toBe('de');
    });
  });

  describe('Spanish', () => {
    it('detects Spanish text', () => {
      const result = detectLanguage('Hola, necesito ayuda con mi proyecto de programacion');
      expect(result.language).toBe('es');
      expect(result.script).toBe('latin');
    });
  });

  describe('Portuguese', () => {
    it('detects Portuguese text', () => {
      const result = detectLanguage('Como posso melhorar meu codigo para ficar mais eficiente?');
      expect(result.language).toBe('pt');
      expect(result.script).toBe('latin');
    });
  });

  describe('Japanese (non-Latin script)', () => {
    it('detects Japanese text with hiragana', () => {
      const result = detectLanguage('Pythonでデータ分析をしたいのですが、どうすればいいですか？');
      expect(result.language).toBe('ja');
      expect(result.script).toBe('cjk');
      expect(result.confidence).toBeGreaterThan(0.8);
    });
  });

  describe('Korean (Hangul script)', () => {
    it('detects Korean text', () => {
      const result = detectLanguage('안녕하세요, 도움이 필요합니다');
      expect(result.language).toBe('ko');
      expect(result.script).toBe('hangul');
      expect(result.confidence).toBeGreaterThan(0.8);
    });
  });

  describe('Chinese (CJK without hiragana)', () => {
    it('detects Chinese text', () => {
      const result = detectLanguage('我需要帮助解决这个编程问题');
      expect(result.language).toBe('zh');
      expect(result.script).toBe('cjk');
    });
  });

  describe('Arabic script', () => {
    it('detects Arabic text', () => {
      const result = detectLanguage('مرحبا، أحتاج مساعدة في مشروعي');
      expect(result.language).toBe('ar');
      expect(result.script).toBe('arabic');
    });
  });

  describe('Hindi (Devanagari)', () => {
    it('detects Hindi text', () => {
      const result = detectLanguage('मुझे अपने प्रोजेक्ट में मदद चाहिए');
      expect(result.language).toBe('hi');
      expect(result.script).toBe('devanagari');
    });
  });

  describe('Russian (Cyrillic)', () => {
    it('detects Russian text', () => {
      const result = detectLanguage('Мне нужна помощь с моим проектом');
      expect(result.language).toBe('ru');
      expect(result.script).toBe('cyrillic');
    });
  });

  describe('Edge cases', () => {
    it('returns English with low confidence for very short text', () => {
      const result = detectLanguage('Hi');
      expect(result.language).toBe('en');
      expect(result.confidence).toBeLessThan(0.5);
    });

    it('returns English for empty string', () => {
      const result = detectLanguage('');
      expect(result.language).toBe('en');
      expect(result.confidence).toBe(0);
    });

    it('handles code snippets as English/neutral', () => {
      const result = detectLanguage('const x = arr.map(i => i * 2).filter(Boolean)');
      expect(result.script).toBe('latin');
    });

    it('handles emoji-only input', () => {
      const result = detectLanguage('😀🎉🔥');
      expect(result.confidence).toBeLessThan(0.5);
    });
  });
});

describe('getLanguageDirective', () => {
  it('returns empty string for English', () => {
    const directive = getLanguageDirective({ language: 'en', confidence: 0.9, script: 'latin' });
    expect(directive).toBe('');
  });

  it('returns empty string for low confidence', () => {
    const directive = getLanguageDirective({ language: 'fr', confidence: 0.2, script: 'latin' });
    expect(directive).toBe('');
  });

  it('returns directive for French with high confidence', () => {
    const directive = getLanguageDirective({ language: 'fr', confidence: 0.85, script: 'latin' });
    expect(directive).toContain('French');
    expect(directive).toContain('LANGUAGE');
  });

  it('returns directive for Japanese', () => {
    const directive = getLanguageDirective({ language: 'ja', confidence: 0.9, script: 'cjk' });
    expect(directive).toContain('Japanese');
  });
});

describe('languageToCountry', () => {
  it('maps common languages to countries', () => {
    expect(languageToCountry('en')).toBe('US');
    expect(languageToCountry('de')).toBe('DE');
    expect(languageToCountry('fr')).toBe('FR');
    expect(languageToCountry('ja')).toBe('JP');
  });

  it('returns null for unknown languages', () => {
    expect(languageToCountry('xx')).toBeNull();
  });
});
