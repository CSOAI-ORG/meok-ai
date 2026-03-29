/**
 * MEOK AI LABS — Character Pack Index
 *
 * Merges all character packs into a single export.
 * Import from here to get the complete MEOK character universe.
 *
 * Total pack size: 95+ extended characters (plus 50+ MEOK originals = 145+ total)
 */

export { MYTHOLOGICAL_PACK, MYTHOLOGICAL_CHARACTERS, MYTHOLOGICAL_TRADITIONS } from './mythological';
export { HISTORICAL_PACK, HISTORICAL_CHARACTERS, HISTORICAL_DOMAINS } from './historical';
export { ARCHETYPE_PACK, ARCHETYPE_CHARACTERS } from './archetypes';
export { LITERARY_PACK, LITERARY_CHARACTERS, LITERARY_GENRES } from './literary';

import { MYTHOLOGICAL_PACK } from './mythological';
import { HISTORICAL_PACK } from './historical';
import { ARCHETYPE_PACK } from './archetypes';
import { LITERARY_PACK } from './literary';

/** All extended characters merged into one record. */
export const ALL_PACKS = {
  ...MYTHOLOGICAL_PACK,
  ...HISTORICAL_PACK,
  ...ARCHETYPE_PACK,
  ...LITERARY_PACK,
};

/** Stats about all packs. */
export const PACK_STATS = {
  mythological: Object.keys(MYTHOLOGICAL_PACK).length,
  historical: Object.keys(HISTORICAL_PACK).length,
  archetypes: Object.keys(ARCHETYPE_PACK).length,
  literary: Object.keys(LITERARY_PACK).length,
  total: Object.keys(ALL_PACKS).length,
};
