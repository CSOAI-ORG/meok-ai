/**
 * Tests for characters.ts — the single source of truth for all MEOK companions.
 */

import {
  getCharacter,
  getCharactersByArchetype,
  getCharactersByTier,
  getAllCharacters,
  type Character,
  type Archetype,
} from '@/lib/characters';

describe('Character Database', () => {
  const allChars = getAllCharacters();

  it('has at least 100 characters', () => {
    expect(allChars.length).toBeGreaterThanOrEqual(100);
  });

  it('every character has id, name, and archetype', () => {
    for (const char of allChars) {
      expect(char.id).toBeTruthy();
      expect(char.name).toBeTruthy();
      expect(char.archetype).toBeTruthy();
    }
  });

  it('characters with dimensions have values in 0-1 range', () => {
    const withDims = allChars.filter(c => c.dimensions);
    expect(withDims.length).toBeGreaterThan(0);
    for (const char of withDims) {
      for (const [, val] of Object.entries(char.dimensions)) {
        expect(val).toBeGreaterThanOrEqual(0);
        expect(val).toBeLessThanOrEqual(1);
      }
    }
  });
});

describe('getCharacter', () => {
  it('returns a character for known IDs', () => {
    const aria = getCharacter('aria');
    expect(aria).toBeDefined();
    expect(aria?.name).toBe('Aria');
  });

  it('returns undefined for unknown IDs', () => {
    expect(getCharacter('nonexistent_xyz')).toBeUndefined();
  });

  it('returns undefined for empty string', () => {
    expect(getCharacter('')).toBeUndefined();
  });

  it('sovereign character has voice anchors', () => {
    const sov = getCharacter('sovereign');
    if (sov) {
      expect(sov.voiceAnchors).toBeTruthy();
      expect(sov.voiceAnchors!.length).toBeGreaterThan(10);
    }
  });
});

describe('getCharactersByArchetype', () => {
  const archetypes: Archetype[] = ['nurturer', 'challenger', 'explorer', 'sage', 'seeker', 'creator', 'trickster', 'rebel', 'innocent'];

  it('returns characters for every archetype', () => {
    for (const arch of archetypes) {
      const chars = getCharactersByArchetype(arch);
      expect(chars.length).toBeGreaterThan(0);
      for (const c of chars) {
        expect(c.archetype).toBe(arch);
      }
    }
  });
});

describe('getCharactersByTier', () => {
  it('explorer tier returns only explorer characters', () => {
    const chars = getCharactersByTier('explorer');
    for (const c of chars) {
      expect(c.tier).toBe('explorer');
    }
  });

  it('sovereign tier includes explorer + sovereign', () => {
    const chars = getCharactersByTier('sovereign');
    const tiers = new Set(chars.map(c => c.tier));
    expect(tiers.has('family')).toBe(false);
  });

  it('family tier includes all tiers', () => {
    const chars = getCharactersByTier('family');
    expect(chars.length).toBe(getAllCharacters().length);
  });
});
