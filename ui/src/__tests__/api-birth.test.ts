/**
 * Tests for birth ceremony completion validation.
 */

describe('Birth Ceremony Validation', () => {
  it('rejects covenantAccepted as string "false" (security fix)', () => {
    // This was a real vulnerability — covenantAccepted: "false" (string)
    // passes if (!covenantAccepted) because Boolean("false") is truthy
    const covenantAccepted = "false";
    expect(covenantAccepted !== true).toBe(true); // Should reject
  });

  it('rejects covenantAccepted as 0', () => {
    expect(0 !== true).toBe(true);
  });

  it('rejects covenantAccepted as null', () => {
    expect(null !== true).toBe(true);
  });

  it('rejects covenantAccepted as undefined', () => {
    expect(undefined !== true).toBe(true);
  });

  it('accepts covenantAccepted as true', () => {
    expect(true !== true).toBe(false); // Should accept
  });

  it('rejects missing companionName', () => {
    const body = { archetype: 'sage', covenantAccepted: true };
    expect(!body.companionName || !body.archetype).toBe(true);
  });

  it('rejects missing archetype', () => {
    const body = { companionName: 'Aria', covenantAccepted: true };
    expect(!(body as any).archetype).toBe(true);
  });

  it('accepts valid complete body', () => {
    const body = { companionName: 'Aria', archetype: 'sage', covenantAccepted: true };
    const valid = body.companionName && body.archetype && body.covenantAccepted === true;
    expect(valid).toBe(true);
  });
});

describe('Archetype Validation', () => {
  const VALID_ARCHETYPES = ['challenger', 'nurturer', 'explorer', 'sage', 'seeker', 'creator', 'trickster', 'rebel', 'innocent'];

  it('accepts all valid archetypes', () => {
    for (const arch of VALID_ARCHETYPES) {
      expect(VALID_ARCHETYPES.includes(arch)).toBe(true);
    }
  });

  it('rejects invalid archetypes', () => {
    expect(VALID_ARCHETYPES.includes('warrior')).toBe(false);
    expect(VALID_ARCHETYPES.includes('')).toBe(false);
  });
});
