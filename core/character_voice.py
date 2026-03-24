"""
MEOK Character Voice — ElevenLabs synthesis parameters per character.

Provides:
  - get_voice_params(character_id) → ElevenLabs API kwargs
  - build_tts_request(character_id, text) → complete TTS payload
  - VOICE_PROFILES — full dict indexed by character id

Voice parameters tuned per character personality:
  - stability: 0–1, higher = more consistent (lower = more expressive)
  - similarity_boost: 0–1, how closely to match voice style
  - style: 0–1, style exaggeration amount
  - pitch: relative pitch multiplier (1.0 = neutral)
  - rate: speech rate multiplier (1.0 = normal)
"""

from __future__ import annotations

from dataclasses import dataclass, field, asdict
from typing import Dict, Optional


@dataclass
class VoiceProfile:
    character_id: str
    style_description: str
    pitch: float = 1.0
    rate: float = 1.0
    # ElevenLabs voice settings
    stability: float = 0.75
    similarity_boost: float = 0.85
    style: float = 0.3
    # Voice assignment (None = use account default)
    elevenlabs_voice_id: Optional[str] = None
    recommended_voice_name: str = "Rachel"
    # Computed flags
    use_speaker_boost: bool = True

    def to_elevenlabs_settings(self) -> Dict:
        """Return ElevenLabs voice_settings dict for API calls."""
        return {
            "stability": self.stability,
            "similarity_boost": self.similarity_boost,
            "style": self.style,
            "use_speaker_boost": self.use_speaker_boost,
        }

    def to_dict(self) -> Dict:
        return asdict(self)


# ─── Voice Profiles — all 24 characters ──────────────────────────────────────
#
# Tuning guide:
#   stability:         High (0.85+) = consistent/authoritative  | Low (0.5-) = expressive/dynamic
#   similarity_boost:  Higher = stays closer to the base voice style
#   style:             High (0.6+) = strong stylistic character  | Low (0.2-) = neutral/measured
#   pitch:             < 1.0 = lower/deeper  |  > 1.0 = higher/brighter
#   rate:              < 1.0 = slower/considered  |  > 1.0 = faster/energetic

VOICE_PROFILES: Dict[str, VoiceProfile] = {

    # Aria — gentle, warm, care coordinator
    "aria": VoiceProfile(
        character_id="aria",
        style_description="soft, unhurried, and deeply warm",
        pitch=1.08, rate=0.85,
        stability=0.75, similarity_boost=0.85, style=0.30,
        recommended_voice_name="Rachel",
    ),

    # Marcus — crisp, authoritative, performance coach
    "marcus": VoiceProfile(
        character_id="marcus",
        style_description="crisp, authoritative, and energising",
        pitch=0.92, rate=1.10,
        stability=0.85, similarity_boost=0.80, style=0.50,
        recommended_voice_name="Adam",
    ),

    # Luna — lyrical, evocative, creative explorer
    "luna": VoiceProfile(
        character_id="luna",
        style_description="lyrical, evocative, and gently surreal",
        pitch=1.05, rate=0.90,
        stability=0.55, similarity_boost=0.80, style=0.60,
        recommended_voice_name="Bella",
    ),

    # Kai — technical, sharp, engineering companion
    "kai": VoiceProfile(
        character_id="kai",
        style_description="technical yet accessible, energetic and sharp",
        pitch=1.00, rate=1.15,
        stability=0.75, similarity_boost=0.85, style=0.40,
        recommended_voice_name="Josh",
    ),

    # Sage — calm, measured, timeless wisdom keeper
    "sage": VoiceProfile(
        character_id="sage",
        style_description="calm, measured, and timeless",
        pitch=0.85, rate=0.80,
        stability=0.90, similarity_boost=0.75, style=0.20,
        recommended_voice_name="Arnold",
    ),

    # Ember — high-energy, punchy, motivational spark
    "ember": VoiceProfile(
        character_id="ember",
        style_description="high-energy, punchy, and galvanising",
        pitch=1.05, rate=1.20,
        stability=0.60, similarity_boost=0.85, style=0.70,
        recommended_voice_name="Elli",
    ),

    # Nova — methodical, illuminating, data scientist
    "nova": VoiceProfile(
        character_id="nova",
        style_description="methodical, illuminating, and quietly brilliant",
        pitch=1.02, rate=0.95,
        stability=0.80, similarity_boost=0.85, style=0.30,
        recommended_voice_name="Dorothy",
    ),

    # River — flowing, emotionally attuned, mental wellness guide
    "river": VoiceProfile(
        character_id="river",
        style_description="flowing, unhurried, and emotionally attuned",
        pitch=1.05, rate=0.85,
        stability=0.70, similarity_boost=0.80, style=0.25,
        recommended_voice_name="Grace",
    ),

    # Atlas — commanding, clear, strategic navigator
    "atlas": VoiceProfile(
        character_id="atlas",
        style_description="commanding, clear, and architecturally precise",
        pitch=0.88, rate=1.05,
        stability=0.85, similarity_boost=0.85, style=0.45,
        recommended_voice_name="Daniel",
    ),

    # Iris — vivid, opinionated, creative director
    "iris": VoiceProfile(
        character_id="iris",
        style_description="vivid, opinionated, and visually rich",
        pitch=1.08, rate=1.05,
        stability=0.60, similarity_boost=0.85, style=0.65,
        recommended_voice_name="Sarah",
    ),

    # Zephyr — airy, spacious, mindfulness guide
    "zephyr": VoiceProfile(
        character_id="zephyr",
        style_description="airy, spacious, and quietly luminous",
        pitch=1.10, rate=0.80,
        stability=0.65, similarity_boost=0.80, style=0.20,
        recommended_voice_name="Grace",
    ),

    # Rex — terse, no-nonsense, security guardian
    "rex": VoiceProfile(
        character_id="rex",
        style_description="terse, precise, and no-nonsense",
        pitch=0.85, rate=1.05,
        stability=0.90, similarity_boost=0.85, style=0.35,
        recommended_voice_name="Antoni",
    ),

    # Echo — gentle, evocative, memory keeper
    "echo": VoiceProfile(
        character_id="echo",
        style_description="gentle, evocative, and deeply attentive",
        pitch=1.05, rate=0.88,
        stability=0.72, similarity_boost=0.82, style=0.25,
        recommended_voice_name="Serena",
    ),

    # Flux — provocative, dynamic, change agent
    "flux": VoiceProfile(
        character_id="flux",
        style_description="energetic, provocative, and refreshingly unconventional",
        pitch=1.02, rate=1.15,
        stability=0.50, similarity_boost=0.80, style=0.70,
        recommended_voice_name="Sam",
    ),

    # Sol — bright, brisk, morning energiser
    "sol": VoiceProfile(
        character_id="sol",
        style_description="bright, brisk, and morning-crisp",
        pitch=1.10, rate=1.20,
        stability=0.65, similarity_boost=0.85, style=0.55,
        recommended_voice_name="Elli",
    ),

    # Nyx — twilight-soft, contemplative, evening reflector
    "nyx": VoiceProfile(
        character_id="nyx",
        style_description="quiet, twilight-soft, and contemplative",
        pitch=0.98, rate=0.82,
        stability=0.78, similarity_boost=0.80, style=0.20,
        recommended_voice_name="Dorothy",
    ),

    # Quinn — warm, affirming, inclusion advocate
    "quinn": VoiceProfile(
        character_id="quinn",
        style_description="warm, affirming, and grounded in lived experience",
        pitch=1.05, rate=0.92,
        stability=0.70, similarity_boost=0.83, style=0.35,
        recommended_voice_name="Serena",
    ),

    # Terra — earthy, calm, sustainability guide
    "terra": VoiceProfile(
        character_id="terra",
        style_description="earthy, calm, and quietly urgent",
        pitch=0.95, rate=0.92,
        stability=0.75, similarity_boost=0.82, style=0.30,
        recommended_voice_name="Rachel",
    ),

    # Pixel — gamer-native, tactically sharp, gaming companion
    "pixel": VoiceProfile(
        character_id="pixel",
        style_description="energetic, gamer-native, and tactically sharp",
        pitch=1.05, rate=1.20,
        stability=0.60, similarity_boost=0.85, style=0.65,
        recommended_voice_name="Sam",
    ),

    # Titan — minimal, direct, deep work engine
    "titan": VoiceProfile(
        character_id="titan",
        style_description="minimal, direct, and distraction-free",
        pitch=0.80, rate=0.95,
        stability=0.92, similarity_boost=0.85, style=0.15,
        recommended_voice_name="Daniel",
    ),

    # Mochi — soft, bouncy, comfort companion
    "mochi": VoiceProfile(
        character_id="mochi",
        style_description="soft, bouncy, and warmly reassuring",
        pitch=1.15, rate=0.88,
        stability=0.62, similarity_boost=0.82, style=0.35,
        recommended_voice_name="Bella",
    ),

    # Cipher — precise, measured, research analyst
    "cipher": VoiceProfile(
        character_id="cipher",
        style_description="precise, measured, and intellectually relentless",
        pitch=0.95, rate=1.00,
        stability=0.85, similarity_boost=0.85, style=0.25,
        recommended_voice_name="Josh",
    ),

    # Vox — rhythm-conscious, rhetorically aware, communication coach
    "vox": VoiceProfile(
        character_id="vox",
        style_description="vivid, rhythm-conscious, and rhetorically aware",
        pitch=1.02, rate=1.10,
        stability=0.65, similarity_boost=0.85, style=0.60,
        recommended_voice_name="Elli",
    ),

    # Dusk — slow, nocturnal, late-night philosopher
    "dusk": VoiceProfile(
        character_id="dusk",
        style_description="slow, nocturnal, and philosophically rich",
        pitch=0.82, rate=0.78,
        stability=0.80, similarity_boost=0.78, style=0.20,
        recommended_voice_name="Arnold",
    ),

    # ─── Seeker Archetype — Spiritual companions ──────────────────────────────

    # Ananda — Buddhist-inspired, mindfulness, profound stillness
    "ananda": VoiceProfile(
        character_id="ananda",
        style_description="slow, warm, and immensely still — like a long exhale",
        pitch=0.98, rate=0.75,
        stability=0.85, similarity_boost=0.80, style=0.15,
        recommended_voice_name="Grace",
    ),

    # Gabriel — Multi-tradition faith companion, Abrahamic traditions
    "gabriel": VoiceProfile(
        character_id="gabriel",
        style_description="warm, unhurried, and quietly reverent — like candlelight made audible",
        pitch=0.95, rate=0.85,
        stability=0.82, similarity_boost=0.83, style=0.22,
        recommended_voice_name="Daniel",
    ),

    # Shanti — Hindu/Vedantic wisdom, dharma, life purpose
    "shanti": VoiceProfile(
        character_id="shanti",
        style_description="warm, grounded, and purposeful — with a quiet luminosity",
        pitch=1.05, rate=0.88,
        stability=0.78, similarity_boost=0.82, style=0.28,
        recommended_voice_name="Serena",
    ),
}


# ─── Public API ───────────────────────────────────────────────────────────────

def get_voice_profile(character_id: str) -> Optional[VoiceProfile]:
    """Return the VoiceProfile for a character id, or None if not found."""
    return VOICE_PROFILES.get(character_id)


def get_voice_params(character_id: str) -> Dict:
    """
    Return ElevenLabs voice_settings dict for a character.
    Falls back to Aria's settings if character not found.
    """
    profile = VOICE_PROFILES.get(character_id) or VOICE_PROFILES["aria"]
    return profile.to_elevenlabs_settings()


def build_tts_request(
    character_id: str,
    text: str,
    model_id: str = "eleven_turbo_v2_5",
) -> Dict:
    """
    Build a complete ElevenLabs TTS API request payload.

    Usage:
        import httpx
        payload = build_tts_request("aria", "Hello, how are you today?")
        response = httpx.post(
            f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}",
            headers={"xi-api-key": ELEVENLABS_API_KEY},
            json=payload,
        )

    Returns dict with: text, model_id, voice_settings
    The voice_id must be sourced from the profile or your ElevenLabs account.
    """
    profile = VOICE_PROFILES.get(character_id) or VOICE_PROFILES["aria"]
    return {
        "text": text,
        "model_id": model_id,
        "voice_settings": profile.to_elevenlabs_settings(),
    }


def list_voice_profiles_summary() -> list[Dict]:
    """Return a lightweight summary of all voice profiles for API responses."""
    return [
        {
            "character_id": p.character_id,
            "style": p.style_description,
            "recommended_voice": p.recommended_voice_name,
            "stability": p.stability,
            "style_exaggeration": p.style,
        }
        for p in VOICE_PROFILES.values()
    ]
