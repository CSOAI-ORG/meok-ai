/**
 * Tests for voice-fingerprint.ts — voice consistency tracking.
 */
import { analyzeVoicePattern, checkConsistency, formatConsistencyDirective, type VoicePattern } from '@/lib/voice-fingerprint';

describe('analyzeVoicePattern', () => {
  it('returns a VoicePattern with all fields', () => {
    const pattern = analyzeVoicePattern('Hello there. How are you doing today? I hope you are well.');
    expect(pattern).toHaveProperty('avgSentenceLength');
    expect(pattern).toHaveProperty('questionRatio');
    expect(pattern).toHaveProperty('vocabularyComplexity');
    expect(pattern).toHaveProperty('formalityScore');
  });

  it('avgSentenceLength is positive for non-empty text', () => {
    const pattern = analyzeVoicePattern('This is a sentence. This is another one.');
    expect(pattern.avgSentenceLength).toBeGreaterThan(0);
  });

  it('questionRatio is higher for text with questions', () => {
    const questions = analyzeVoicePattern('What is this? Where am I? Who are you?');
    const statements = analyzeVoicePattern('This is fine. I am here. You are great.');
    expect(questions.questionRatio).toBeGreaterThan(statements.questionRatio);
  });

  it('formalityScore is higher for formal text', () => {
    const formal = analyzeVoicePattern('Therefore, I must conclude that furthermore the evidence suggests nevertheless a different outcome.');
    const informal = analyzeVoicePattern('Hey yeah gonna wanna kinda do this thing lol nope.');
    expect(formal.formalityScore).toBeGreaterThan(informal.formalityScore);
  });

  it('returns zeros for empty string', () => {
    const pattern = analyzeVoicePattern('');
    expect(pattern.avgSentenceLength).toBe(0);
    expect(pattern.questionRatio).toBe(0);
  });

  it('all values are in 0-1 range (except avgSentenceLength)', () => {
    const pattern = analyzeVoicePattern('Hello world. How are you? I am fine thank you very much indeed.');
    expect(pattern.questionRatio).toBeGreaterThanOrEqual(0);
    expect(pattern.questionRatio).toBeLessThanOrEqual(1);
    expect(pattern.vocabularyComplexity).toBeGreaterThanOrEqual(0);
    expect(pattern.vocabularyComplexity).toBeLessThanOrEqual(1);
    expect(pattern.formalityScore).toBeGreaterThanOrEqual(0);
    expect(pattern.formalityScore).toBeLessThanOrEqual(1);
  });
});

describe('checkConsistency', () => {
  const baseline: VoicePattern = {
    avgSentenceLength: 10,
    questionRatio: 0.3,
    vocabularyComplexity: 0.5,
    formalityScore: 0.4,
  };

  it('returns zero drift for identical patterns', () => {
    const report = checkConsistency(baseline, { ...baseline });
    expect(report.driftScore).toBeCloseTo(0, 1);
  });

  it('returns high drift for very different patterns', () => {
    const different: VoicePattern = {
      avgSentenceLength: 30,
      questionRatio: 0.9,
      vocabularyComplexity: 0.1,
      formalityScore: 0.9,
    };
    const report = checkConsistency(baseline, different);
    expect(report.driftScore).toBeGreaterThan(0.3);
  });

  it('drift score is between 0 and 1', () => {
    const report = checkConsistency(baseline, {
      avgSentenceLength: 15,
      questionRatio: 0.5,
      vocabularyComplexity: 0.6,
      formalityScore: 0.3,
    });
    expect(report.driftScore).toBeGreaterThanOrEqual(0);
    expect(report.driftScore).toBeLessThanOrEqual(1);
  });

  it('has per-dimension drift scores', () => {
    const report = checkConsistency(baseline, baseline);
    expect(report.dimensions).toHaveProperty('sentenceLength');
    expect(report.dimensions).toHaveProperty('questionRatio');
    expect(report.dimensions).toHaveProperty('vocabularyComplexity');
    expect(report.dimensions).toHaveProperty('formalityScore');
  });
});

describe('formatConsistencyDirective', () => {
  it('returns a non-empty string', () => {
    const directive = formatConsistencyDirective({
      avgSentenceLength: 12,
      questionRatio: 0.25,
      vocabularyComplexity: 0.5,
      formalityScore: 0.4,
    });
    expect(directive.length).toBeGreaterThan(10);
  });

  it('mentions sentence length', () => {
    const directive = formatConsistencyDirective({
      avgSentenceLength: 8,
      questionRatio: 0.3,
      vocabularyComplexity: 0.5,
      formalityScore: 0.4,
    });
    expect(directive.toLowerCase()).toContain('sentence');
  });
});
