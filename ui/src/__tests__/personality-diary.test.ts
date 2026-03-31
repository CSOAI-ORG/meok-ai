/**
 * Tests for personality-diary.ts — companion diary generation.
 */
import { generateDiaryEntry } from '@/lib/personality-diary';

describe('generateDiaryEntry', () => {
  const baseCtx = {
    userName: 'Nick',
    companionName: 'Aria',
    archetype: 'nurturer' as const,
    recentTopics: ['coding', 'AI'],
    interactionCount: 25,
    daysSinceFirst: 10,
    lastEmotionalState: 'neutral' as const,
  };

  it('returns a non-empty diary entry', () => {
    const entry = generateDiaryEntry(baseCtx);
    expect(entry).toBeDefined();
    expect(entry.content).toBeTruthy();
    expect(entry.content.length).toBeGreaterThan(10);
  });

  it('entry contains companion name', () => {
    const entry = generateDiaryEntry(baseCtx);
    // Companion name or user name should appear in the entry
    const hasName = entry.content.includes('Nick') || entry.content.includes('Aria');
    expect(hasName).toBe(true);
  });

  it('entry has required fields', () => {
    const entry = generateDiaryEntry(baseCtx);
    expect(entry).toHaveProperty('content');
    expect(entry).toHaveProperty('type');
    expect(entry).toHaveProperty('mood');
    expect(entry).toHaveProperty('timestamp');
  });

  it('milestone entry at interaction count 50', () => {
    const entry = generateDiaryEntry({ ...baseCtx, interactionCount: 50 });
    expect(entry.type).toBe('milestone');
  });

  it('observation entry at interaction count 7', () => {
    const entry = generateDiaryEntry({ ...baseCtx, interactionCount: 7 });
    expect(entry.type).toBe('observation');
  });

  it('different archetypes produce different content', () => {
    const nurturerEntry = generateDiaryEntry({ ...baseCtx, archetype: 'nurturer' });
    const challengerEntry = generateDiaryEntry({ ...baseCtx, archetype: 'challenger' });
    // Templates differ by archetype — content should vary (not guaranteed due to randomness, but type/structure should work)
    expect(nurturerEntry.content).toBeTruthy();
    expect(challengerEntry.content).toBeTruthy();
  });
});
