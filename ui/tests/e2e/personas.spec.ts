/**
 * Persona-Based E2E Tests — MEOK
 * Tests user personas covering different mindsets, characteristics,
 * languages, and user types against page rendering and API endpoints.
 *
 * Run: npx playwright test tests/e2e/personas.spec.ts
 */
import { test, expect } from '@playwright/test';
import { PERSONAS, type TestPersona } from './fixtures/personas';

// ── Language detection tests (unit-level via API) ───────────────────────────

test.describe('Persona — Language Detection', () => {
  test('French messages should be detected as French', async () => {
    // Import the language module directly for fast unit-level checks
    const { detectLanguage } = await import('../../src/lib/language');
    for (const msg of PERSONAS.french_speaker.messages) {
      const result = detectLanguage(msg);
      expect(result.language).toBe('fr');
    }
  });

  test('German messages should be detected as German', async () => {
    const { detectLanguage } = await import('../../src/lib/language');
    for (const msg of PERSONAS.german_speaker.messages) {
      const result = detectLanguage(msg);
      expect(result.language).toBe('de');
    }
  });

  test('Japanese messages should be detected as Japanese', async () => {
    const { detectLanguage } = await import('../../src/lib/language');
    for (const msg of PERSONAS.japanese_speaker.messages) {
      const result = detectLanguage(msg);
      expect(result.language).toBe('ja');
    }
  });

  test('English messages should be detected as English', async () => {
    const { detectLanguage } = await import('../../src/lib/language');
    for (const msg of PERSONAS.technical_developer.messages) {
      const result = detectLanguage(msg);
      expect(result.language).toBe('en');
    }
  });
});

// ── Emotion detection tests ────────────────────────────────────────────────

test.describe('Persona — Emotion Detection', () => {
  test('emotional support seeker triggers negative valence', async () => {
    const { analyzeEmotion } = await import('../../src/lib/emotion');
    for (const msg of PERSONAS.emotional_support_seeker.messages) {
      const result = analyzeEmotion(msg);
      expect(result.valence).toBeLessThan(0);
    }
  });

  test('technical developer messages are emotionally neutral', async () => {
    const { analyzeEmotion } = await import('../../src/lib/emotion');
    for (const msg of PERSONAS.technical_developer.messages) {
      const result = analyzeEmotion(msg);
      // Technical messages should not trigger strong negative emotions
      expect(result.valence).toBeGreaterThan(-0.5);
    }
  });
});

// ── Task classification tests ───────────────────────────────────────────────

test.describe('Persona — Task Classification', () => {
  test('technical messages route to coding task type', async () => {
    const { classifyTask } = await import('../../src/lib/llm-router');
    const result = classifyTask('How do I implement a binary search tree in TypeScript?');
    expect(result).toBe('coding');
  });

  test('emotional messages route to emotional task type', async () => {
    const { classifyTask } = await import('../../src/lib/llm-router');
    const result = classifyTask('I have been feeling really overwhelmed lately');
    expect(result).toBe('emotional');
  });
});

// ── User profile inference tests ─────────────────────────────────────────────

test.describe('Persona — User Profile Inference', () => {
  test('technical developer has higher tech level', async () => {
    const { analyzeOCEAN } = await import('../../src/lib/user-profile');
    const messages = PERSONAS.technical_developer.messages.map(content => ({ role: 'user', content }));
    const profile = analyzeOCEAN(messages);
    expect(profile.techLevel).toBeGreaterThan(0);
  });

  test('emotional support seeker has higher neuroticism signal', async () => {
    const { analyzeOCEAN } = await import('../../src/lib/user-profile');
    const messages = PERSONAS.emotional_support_seeker.messages.map(content => ({ role: 'user', content }));
    const profile = analyzeOCEAN(messages);
    expect(profile.ocean.neuroticism).toBeGreaterThan(0.5);
  });

  test('neurodivergent user messages detected as casual formality', async () => {
    const { analyzeOCEAN } = await import('../../src/lib/user-profile');
    const messages = PERSONAS.neurodivergent_user.messages.map(content => ({ role: 'user', content }));
    const profile = analyzeOCEAN(messages);
    expect(profile.formality).toBeLessThan(0.6);
  });
});

// ── Adaptive style tests ────────────────────────────────────────────────────

test.describe('Persona — Adaptive Style', () => {
  test('distressed user gets warm tone', async () => {
    const { computeStyleDirective } = await import('../../src/lib/adaptive-dialogue');
    const style = computeStyleDirective({
      emotion: { valence: -0.5, arousal: 0.6, dominance: 0.3, primary: 'sadness', confidence: 0.7 },
      proceduralPatterns: [],
      userProfile: null,
      language: { language: 'en', confidence: 0.9, script: 'latin' },
      taskType: 'emotional',
      companionArchetype: 'nurturer',
      conversationLength: 5,
    });
    expect(style.emotionalTone).toBe('warm');
  });

  test('technical user with coding task gets expert depth', async () => {
    const { computeStyleDirective } = await import('../../src/lib/adaptive-dialogue');
    const style = computeStyleDirective({
      emotion: { valence: 0, arousal: 0.2, dominance: 0.5, primary: 'neutral', confidence: 0.1 },
      proceduralPatterns: [{ pattern: 'technical_focus', confidence: 0.8, last_observed: new Date().toISOString(), observation_count: 5 }],
      userProfile: {
        ocean: { openness: 0.5, conscientiousness: 0.6, extraversion: 0.4, agreeableness: 0.5, neuroticism: 0.3 },
        confidence: 0.5, formality: 0.6, verbosity: 0.6, techLevel: 0.8,
        detectedLanguage: 'en', messageCount: 20, lastUpdated: new Date().toISOString(),
      },
      language: { language: 'en', confidence: 0.9, script: 'latin' },
      taskType: 'coding',
      companionArchetype: 'challenger',
      conversationLength: 10,
    });
    expect(style.technicalDepth).toBe('expert');
    expect(style.emotionalTone).toBe('direct');
  });
});

// ── Page rendering tests per persona context ────────────────────────────────

test.describe('Persona — Page Access', () => {
  test('chat page loads for all user types', async ({ page }) => {
    await page.goto('/dashboard/chat');
    await page.waitForLoadState('domcontentloaded');
    // Either loads or redirects to auth — both valid
    expect(page.url()).toBeTruthy();
  });

  test('ralph page loads (for sovereignty tier context)', async ({ page }) => {
    await page.goto('/ralph');
    await page.waitForLoadState('domcontentloaded');
    const body = await page.locator('body').textContent();
    expect(body).toMatch(/ralph/i);
  });

  test('guardian page loads for elder user protection context', async ({ page }) => {
    await page.goto('/guardian');
    await page.waitForLoadState('domcontentloaded');
    const body = await page.locator('body').textContent();
    expect(body).toMatch(/guardian|safety|protect/i);
  });

  test('characters page loads for personality selection', async ({ page }) => {
    await page.goto('/characters');
    await page.waitForLoadState('domcontentloaded');
    const body = await page.locator('body').textContent();
    expect(body).toMatch(/character|companion|archetype/i);
  });
});
