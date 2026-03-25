/**
 * MEOK AI LABS — Procedural Avatar Generation
 *
 * Uses DiceBear to generate unique SVG avatars from personality quiz results.
 * The seed is deterministic: same quiz answers → same avatar every time.
 *
 * Archetype determines the art style. Personality dimensions modify features.
 * All generation happens locally — no API calls, no dependencies on external
 * services. Fully sovereign.
 */

import { createAvatar } from '@dicebear/core';
import * as collection from '@dicebear/collection';
import type { Archetype, PersonalityDimensions } from './characters';

// ── Style Mapping ────────────────────────────────────────────────────────

/** Map archetypes to DiceBear art styles that feel right. */
const ARCHETYPE_STYLES: Record<Archetype, keyof typeof collection> = {
  challenger: 'botttsNeutral',  // angular, tech, bold
  nurturer:   'lorelei',        // soft, warm, organic
  explorer:   'adventurer',     // curious, varied, playful
  sage:       'personas',       // measured, classic, grounded
  seeker:     'notionists',     // abstract, spiritual, minimal
};

// ── Avatar Generation ────────────────────────────────────────────────────

/**
 * Generates a deterministic SVG avatar from personality dimensions and archetype.
 *
 * @param dimensions  Big Five visual dimensions from the personality quiz
 * @param archetype   The computed archetype
 * @param name        Optional companion name (adds uniqueness to the seed)
 * @returns           Data URI string (image/svg+xml) ready for <img src>
 */
export function generateAvatar(
  dimensions: PersonalityDimensions,
  archetype: Archetype,
  name?: string,
): string {
  const styleName = ARCHETYPE_STYLES[archetype];
  const style = collection[styleName];

  // Build a deterministic seed from dimensions + archetype + name
  const seed = [
    archetype,
    Math.round(dimensions.warmth * 100),
    Math.round(dimensions.energy * 100),
    Math.round(dimensions.whimsy * 100),
    Math.round(dimensions.edge * 100),
    Math.round(dimensions.complexity * 100),
    name ?? 'meok',
  ].join('-');

  const avatar = createAvatar(style as Parameters<typeof createAvatar>[0], {
    seed,
    size: 256,
    // DiceBear auto-selects appropriate options based on the style
  });

  return avatar.toDataUri();
}

/**
 * Generates an avatar as a raw SVG string (useful for server-side rendering
 * or embedding directly into HTML).
 */
export function generateAvatarSVG(
  dimensions: PersonalityDimensions,
  archetype: Archetype,
  name?: string,
): string {
  const styleName = ARCHETYPE_STYLES[archetype];
  const style = collection[styleName];

  const seed = [
    archetype,
    Math.round(dimensions.warmth * 100),
    Math.round(dimensions.energy * 100),
    Math.round(dimensions.whimsy * 100),
    Math.round(dimensions.edge * 100),
    Math.round(dimensions.complexity * 100),
    name ?? 'meok',
  ].join('-');

  const avatar = createAvatar(style as Parameters<typeof createAvatar>[0], {
    seed,
    size: 256,
  });

  return avatar.toString();
}
