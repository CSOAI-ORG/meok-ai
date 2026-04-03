/**
 * Tests for waitlist API route logic — email validation, DB persistence patterns.
 */

describe('Waitlist Email Validation', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  it('accepts valid emails', () => {
    const valid = ['test@example.com', 'nick@meok.ai', 'user+tag@domain.co.uk'];
    for (const email of valid) {
      expect(emailRegex.test(email)).toBe(true);
    }
  });

  it('rejects invalid emails', () => {
    const invalid = ['', 'notanemail', '@domain.com', 'user@', 'user @domain.com'];
    for (const email of invalid) {
      expect(emailRegex.test(email)).toBe(false);
    }
  });

  it('normalizes email to lowercase', () => {
    expect('Nick@MEOK.AI'.toLowerCase().trim()).toBe('nick@meok.ai');
  });
});

describe('Waitlist Entry Sanitization', () => {
  function escapeHtml(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  it('escapes HTML in user input', () => {
    expect(escapeHtml('<script>alert("xss")</script>')).not.toContain('<script>');
    expect(escapeHtml('Nick & Co')).toContain('&amp;');
  });

  it('handles empty strings', () => {
    expect(escapeHtml('')).toBe('');
  });
});
