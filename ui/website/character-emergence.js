/**
 * MEOK Character Emergence System
 * 6-stage lifecycle: Egg → Cracking → Hatching → Growing → Mature → Full
 *
 * Spec source: MEOK.AI Architecture Blueprint + Website Architecture Blueprint
 * Animation: organic, care-based timing (300–500ms), cubic-bezier(0.4, 0.0, 0.2, 1)
 *
 * Usage:
 *   import { CharacterEmergence } from './character-emergence.js';
 *   const ce = new CharacterEmergence({ entityId: 'nick', container: document.querySelector('.egg-wrap') });
 *   ce.mount();
 */

'use strict';

// ─── Stage definitions ───────────────────────────────────────────────────────

const STAGES = Object.freeze({
  EGG: {
    id: 'egg',
    index: 0,
    label: 'Egg',
    emoji: '🥚',
    description: 'Something extraordinary is waiting inside…',
    color: '#87CEEB',
    progressMin: 0,
    progressMax: 0.15,
    // Interaction threshold (hatching points) to advance
    threshold: 0,
    // CSS animation class
    animClass: 'stage-egg',
  },
  CRACKING: {
    id: 'cracking',
    index: 1,
    label: 'Cracking',
    emoji: '🥚',
    description: 'The first signs of life…',
    color: '#6BB8D4',
    progressMin: 0.15,
    progressMax: 0.35,
    threshold: 10,  // 10+ interactions
    animClass: 'stage-cracking',
  },
  HATCHING: {
    id: 'hatching',
    index: 2,
    label: 'Hatching',
    emoji: '🐣',
    description: 'Your companion is emerging!',
    color: '#FFD700',
    progressMin: 0.35,
    progressMax: 0.60,
    threshold: 25,  // 25+ interactions
    animClass: 'stage-hatching',
  },
  GROWING: {
    id: 'growing',
    index: 3,
    label: 'Growing',
    emoji: '🐥',
    description: 'Learning who you are…',
    color: '#2ECC71',
    progressMin: 0.60,
    progressMax: 0.80,
    threshold: 50,  // 50+ interactions
    animClass: 'stage-growing',
  },
  MATURE: {
    id: 'mature',
    index: 4,
    label: 'Mature',
    emoji: '🐦',
    description: 'Your sovereign companion is fully formed.',
    color: '#4A90D9',
    progressMin: 0.80,
    progressMax: 0.95,
    threshold: 100, // 100+ interactions
    animClass: 'stage-mature',
  },
  FULL: {
    id: 'full',
    index: 5,
    label: 'Full',
    emoji: '✨',
    description: 'MEOK — fully yours. Sovereign. Caring. Alive.',
    color: '#4A90D9',
    progressMin: 0.95,
    progressMax: 1.0,
    threshold: 200, // 200+ interactions
    animClass: 'stage-full',
  },
});

const STAGE_ORDER = ['EGG', 'CRACKING', 'HATCHING', 'GROWING', 'MATURE', 'FULL'];

// ─── Compute stage from interaction count ────────────────────────────────────

function stageFromInteractions(count) {
  // Walk stages in reverse — return highest threshold met
  for (let i = STAGE_ORDER.length - 1; i >= 0; i--) {
    const key = STAGE_ORDER[i];
    if (count >= STAGES[key].threshold) return key;
  }
  return 'EGG';
}

function progressWithinStage(count, stageKey) {
  const stage = STAGES[stageKey];
  const nextKey = STAGE_ORDER[stage.index + 1];
  if (!nextKey) return 1.0; // full

  const nextStage = STAGES[nextKey];
  const span = nextStage.threshold - stage.threshold;
  if (span <= 0) return 1.0;
  const within = Math.min(count - stage.threshold, span) / span;

  // Map within to stage's progress window
  return stage.progressMin + within * (stage.progressMax - stage.progressMin);
}

// ─── CharacterEmergence class ────────────────────────────────────────────────

export class CharacterEmergence {
  /**
   * @param {object} options
   * @param {string}      options.entityId     — entity / user ID
   * @param {HTMLElement} options.container    — DOM element to mount into
   * @param {number}      [options.interactions=0]  — current interaction count
   * @param {Function}    [options.onStageChange]   — callback(newStage, oldStage)
   * @param {boolean}     [options.animate=true]    — enable animations
   */
  constructor({ entityId = 'default', container, interactions = 0, onStageChange = null, animate = true } = {}) {
    this.entityId     = entityId;
    this.container    = container;
    this.interactions = interactions;
    this.onStageChange = onStageChange;
    this.animate      = animate;

    this._currentStageKey = stageFromInteractions(interactions);
    this._el = null;
    this._mounted = false;
  }

  get currentStage() { return STAGES[this._currentStageKey]; }

  get progress() {
    return progressWithinStage(this.interactions, this._currentStageKey);
  }

  // ── Mount ────────────────────────────────────────────────────────────────

  mount() {
    if (this._mounted) return;
    if (!this.container) { console.warn('[MEOK Emergence] No container provided'); return; }

    this._el = this._createElement();
    this.container.appendChild(this._el);
    this._mounted = true;
    this._applyStage(this._currentStageKey, null, false); // no anim on initial mount
  }

  unmount() {
    if (this._el && this._el.parentNode) {
      this._el.parentNode.removeChild(this._el);
    }
    this._mounted = false;
    this._el = null;
  }

  // ── Update interaction count (call on each user interaction) ─────────────

  addInteraction(delta = 1) {
    this.interactions += delta;
    const newStageKey = stageFromInteractions(this.interactions);

    if (newStageKey !== this._currentStageKey) {
      const oldStageKey = this._currentStageKey;
      this._currentStageKey = newStageKey;
      this._applyStage(newStageKey, oldStageKey, this.animate);
      if (typeof this.onStageChange === 'function') {
        this.onStageChange(STAGES[newStageKey], STAGES[oldStageKey]);
      }
    } else {
      this._updateProgress();
    }

    return this.currentStage;
  }

  setInteractions(count) {
    this.interactions = Math.max(0, count);
    const newStageKey = stageFromInteractions(this.interactions);
    const changed = newStageKey !== this._currentStageKey;
    const oldStageKey = this._currentStageKey;
    this._currentStageKey = newStageKey;
    if (changed) {
      this._applyStage(newStageKey, oldStageKey, false);
    } else {
      this._updateProgress();
    }
    return this.currentStage;
  }

  // ── Serialise / restore ──────────────────────────────────────────────────

  toJSON() {
    return {
      entityId: this.entityId,
      interactions: this.interactions,
      stage: this._currentStageKey,
      progress: this.progress,
    };
  }

  static fromJSON(data, options = {}) {
    return new CharacterEmergence({
      entityId: data.entityId || 'default',
      interactions: data.interactions || 0,
      ...options,
    });
  }

  // ── DOM helpers ──────────────────────────────────────────────────────────

  _createElement() {
    const el = document.createElement('div');
    el.className = 'ce-root';
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', 'Your MEOK companion');
    el.innerHTML = `
      <div class="ce-emoji-wrap">
        <span class="ce-emoji" aria-hidden="true"></span>
        <div class="ce-glow" aria-hidden="true"></div>
      </div>
      <div class="ce-label" aria-live="polite"></div>
      <div class="ce-description" aria-live="polite"></div>
      <div class="ce-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100">
        <div class="ce-progress-fill"></div>
      </div>
      <div class="ce-stage-dots" aria-hidden="true">
        ${STAGE_ORDER.map((key, i) => `<span class="ce-dot" data-stage="${key}" title="${STAGES[key].label}"></span>`).join('')}
      </div>
    `;
    return el;
  }

  _applyStage(stageKey, oldStageKey, animate) {
    if (!this._el) return;
    const stage = STAGES[stageKey];

    // Update text
    this._el.querySelector('.ce-emoji').textContent = stage.emoji;
    this._el.querySelector('.ce-label').textContent = stage.label;
    this._el.querySelector('.ce-description').textContent = stage.description;
    this._el.setAttribute('aria-label', `Your MEOK companion — ${stage.label}: ${stage.description}`);

    // Stage class
    STAGE_ORDER.forEach(key => this._el.classList.remove(`ce-${STAGES[key].id}`));
    this._el.classList.add(`ce-${stage.id}`);

    // Glow colour
    const glow = this._el.querySelector('.ce-glow');
    if (glow) {
      glow.style.setProperty('--glow-color', stage.color);
    }

    // Stage dots
    this._el.querySelectorAll('.ce-dot').forEach(dot => {
      const dotStageKey = dot.dataset.stage;
      const dotStageIndex = STAGES[dotStageKey].index;
      dot.classList.toggle('ce-dot-active', dotStageIndex <= stage.index);
      dot.classList.toggle('ce-dot-current', dotStageKey === stageKey);
    });

    this._updateProgress();

    // Breakthrough animation on stage advance
    if (animate && oldStageKey && STAGES[oldStageKey].index < stage.index) {
      this._playBreakthrough();
    }
  }

  _updateProgress() {
    if (!this._el) return;
    const pct = Math.round(this.progress * 100);
    const fill = this._el.querySelector('.ce-progress-fill');
    const track = this._el.querySelector('.ce-progress-track');
    if (fill) fill.style.width = `${pct}%`;
    if (track) {
      track.setAttribute('aria-valuenow', String(pct));
      track.setAttribute('aria-valuetext', `${pct}% — ${this.currentStage.label}`);
    }
  }

  _playBreakthrough() {
    if (!this._el) return;
    const emojiEl = this._el.querySelector('.ce-emoji');
    if (!emojiEl) return;

    // Remove existing class if re-triggered
    emojiEl.classList.remove('ce-breakthrough');
    void emojiEl.offsetWidth; // force reflow

    emojiEl.classList.add('ce-breakthrough');
    emojiEl.addEventListener('animationend', () => {
      emojiEl.classList.remove('ce-breakthrough');
    }, { once: true });
  }

  // ── Static factory from VPS entity state ────────────────────────────────

  /**
   * Build a CharacterEmergence from the entity data returned by /api/entity/:id
   * @param {object} entityData  — entity JSON with interaction_count and hatch_level fields
   * @param {object} options     — passed to constructor
   */
  static fromEntityData(entityData, options = {}) {
    // hatch_level: 0-100 → map to interaction count heuristic
    const hatchLevel = entityData.hatch_level ?? 0;
    const interactionCount = entityData.interaction_count ?? hatchLevel * 2;
    return new CharacterEmergence({
      entityId: entityData.entity_id || 'default',
      interactions: interactionCount,
      ...options,
    });
  }
}

// ─── Companion CSS (injected once) ──────────────────────────────────────────

const _EMERGENCE_CSS = `
.ce-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  user-select: none;
}

/* Emoji */
.ce-emoji-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ce-emoji {
  font-size: 4.5rem;
  display: block;
  transition: transform 350ms cubic-bezier(0.4, 0.0, 0.2, 1),
              filter  350ms cubic-bezier(0.4, 0.0, 0.2, 1);
  filter: drop-shadow(0 12px 18px rgba(74,144,217,0.18));
  cursor: default;
}

/* Stage-specific idle animations */
.ce-egg      .ce-emoji { animation: ce-float 3.6s cubic-bezier(0.4,0,0.2,1) infinite; }
.ce-cracking .ce-emoji { animation: ce-crack-idle 2.8s cubic-bezier(0.4,0,0.2,1) infinite; }
.ce-hatching .ce-emoji { animation: ce-hatch-idle 2.2s cubic-bezier(0.4,0,0.2,1) infinite; }
.ce-growing  .ce-emoji { animation: ce-bounce 2.0s cubic-bezier(0.4,0,0.2,1) infinite; }
.ce-mature   .ce-emoji { animation: ce-float 4.0s cubic-bezier(0.4,0,0.2,1) infinite; }
.ce-full     .ce-emoji { animation: ce-glow-pulse 3s cubic-bezier(0.4,0,0.2,1) infinite; }

/* Animations */
@keyframes ce-float {
  0%   { transform: translateY(0)     rotate(0deg)    scale(1);    }
  15%  { transform: translateY(-2px)  rotate(-1.5deg) scale(1.01); }
  40%  { transform: translateY(-14px) rotate(1deg)    scale(1.03); }
  60%  { transform: translateY(-16px) rotate(-0.5deg) scale(1.03); }
  80%  { transform: translateY(-4px)  rotate(1.5deg)  scale(1.01); }
  100% { transform: translateY(0)     rotate(0deg)    scale(1);    }
}
@keyframes ce-crack-idle {
  0%,100% { transform: rotate(0deg)   scale(1);    }
  20%     { transform: rotate(-3deg)  scale(1.02); }
  40%     { transform: rotate(3deg)   scale(1.03); }
  60%     { transform: rotate(-1.5deg) scale(1.02); }
  80%     { transform: rotate(1.5deg) scale(1.01); }
}
@keyframes ce-hatch-idle {
  0%,100% { transform: scale(1)    translateY(0); }
  30%     { transform: scale(1.06) translateY(-6px); }
  60%     { transform: scale(1.03) translateY(-10px); }
  85%     { transform: scale(1.01) translateY(-3px); }
}
@keyframes ce-bounce {
  0%,100% { transform: translateY(0)    scale(1); }
  40%     { transform: translateY(-18px) scale(1.05); }
  70%     { transform: translateY(-8px)  scale(1.02); }
}
@keyframes ce-glow-pulse {
  0%,100% { filter: drop-shadow(0 12px 18px rgba(74,144,217,0.2)); transform: scale(1); }
  50%     { filter: drop-shadow(0 16px 32px rgba(74,144,217,0.5)); transform: scale(1.04); }
}

/* Breakthrough: stage advance celebration */
.ce-breakthrough {
  animation: ce-celebrate 500ms cubic-bezier(0.0, 0.0, 0.2, 1) forwards !important;
}
@keyframes ce-celebrate {
  0%   { transform: scale(1)    rotate(0deg);   }
  20%  { transform: scale(1.3)  rotate(-8deg);  }
  40%  { transform: scale(1.4)  rotate(8deg);   }
  60%  { transform: scale(1.25) rotate(-4deg);  }
  80%  { transform: scale(1.1)  rotate(2deg);   }
  100% { transform: scale(1)    rotate(0deg);   }
}

/* Glow */
.ce-glow {
  --glow-color: #87CEEB;
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--glow-color) 25%, transparent) 0%, transparent 70%);
  pointer-events: none;
  transition: background 500ms cubic-bezier(0.0,0.0,0.2,1);
}

/* Label */
.ce-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4A4A6A;
  opacity: 0.7;
  transition: opacity 350ms ease;
}

/* Description */
.ce-description {
  font-family: Georgia, 'Times New Roman', serif; /* care moment — serif */
  font-size: 0.9rem;
  font-style: italic;
  color: #4A4A6A;
  text-align: center;
  max-width: 220px;
  line-height: 1.5;
  transition: opacity 350ms ease;
}

/* Progress track */
.ce-progress-track {
  width: 80px;
  height: 3px;
  background: rgba(74,144,217,0.12);
  border-radius: 100px;
  overflow: hidden;
}
.ce-progress-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #87CEEB, #4A90D9);
  border-radius: 100px;
  transition: width 350ms cubic-bezier(0.4,0,0.2,1);
}

/* Stage dots */
.ce-stage-dots {
  display: flex;
  gap: 6px;
  margin-top: 4px;
}
.ce-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(74,144,217,0.15);
  transition: background 350ms cubic-bezier(0.4,0,0.2,1),
              transform  350ms cubic-bezier(0.4,0,0.2,1);
}
.ce-dot-active  { background: #87CEEB; }
.ce-dot-current { background: #4A90D9; transform: scale(1.4); }
`;

// Inject CSS once
if (typeof document !== 'undefined') {
  if (!document.getElementById('meok-emergence-styles')) {
    const style = document.createElement('style');
    style.id = 'meok-emergence-styles';
    style.textContent = _EMERGENCE_CSS;
    document.head.appendChild(style);
  }
}

// ─── Standalone stage data export (for server-side use / tests) ──────────────

export { STAGES, STAGE_ORDER, stageFromInteractions, progressWithinStage };
