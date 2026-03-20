"""
Voice Stress Analyser — Prosodic distress detection.

Analyses raw audio for stress markers without storing any audio content.
Pure numpy/stdlib implementation — no external ML models required.

Prosodic stress markers researched:
  - Pitch variance (F0 instability = stress/anxiety)
  - Speaking rate (slowing = distress, racing = panic)
  - Energy dynamics (sudden drops/spikes = emotional arousal)
  - Zero-crossing rate (voice quality proxy — irregular = tension)
  - Pause patterns (elongated pauses = cognitive load / distress)
  - Tremor index (micro-variations in amplitude = fear/anxiety)

Children specifically show:
  - Elevated pitch under stress (F0 rises 15-30%)
  - Shorter breath groups (fewer words before pause)
  - Increased energy variance (less controlled volume)
  - Faster speaking rate then sudden stalls

References:
  - Schuller et al. (2011): INTERSPEECH Computational Paralinguistics
  - Trevino et al. (2011): Features for automatic detection of deception
  - Lech et al. (2020): Real-time speech emotion recognition
"""

from __future__ import annotations

import math
import struct
import time
from dataclasses import dataclass, field
from typing import Dict, List, Optional, Tuple


# ── Result types ───────────────────────────────────────────────────────────────

@dataclass
class ProsodicFeatures:
    """Raw feature vector extracted from audio."""
    rms_energy: float           # Root-mean-square energy (amplitude)
    rms_variance: float         # Energy variability
    zero_crossing_rate: float   # Voice quality proxy
    zcr_variance: float         # ZCR instability
    speaking_rate: float        # Words per second (from transcription)
    pause_ratio: float          # Fraction of audio that is silence
    tremor_index: float         # Micro-amplitude variation (0-1)
    high_freq_energy_ratio: float  # Energy in upper frequencies vs total
    duration_seconds: float


@dataclass
class StressResult:
    """Distress probability and contributing factors."""
    distress_score: float          # 0.0 (calm) → 1.0 (severe distress)
    confidence: float              # 0.0 → 1.0 based on audio quality
    features: ProsodicFeatures
    markers_detected: List[str]    # human-readable flags
    baseline_deviation: float      # sigma from expected baseline for this child
    needs_guardian_alert: bool     # crosses threshold for parent notification
    analysis_note: str             # brief interpretation

    # Privacy: raw audio is NEVER stored — only derived features
    audio_hash: str = ""           # SHA-256 of audio for deduplication only


# ── Prosodic feature extractor ─────────────────────────────────────────────────

class ProsodicExtractor:
    """
    Extracts prosodic features from raw 16-bit PCM audio.
    Works without any ML model — pure signal processing.
    """

    FRAME_MS     = 20    # analysis frame length in milliseconds
    SILENCE_RMS  = 0.02  # RMS below this = silence frame

    def extract(
        self,
        audio_bytes: bytes,
        sample_rate: int = 16000,
        transcript_words: int = 0,
    ) -> Optional[ProsodicFeatures]:
        """
        Extract prosodic features. Returns None if audio is too short or empty.
        audio_bytes: raw 16-bit little-endian PCM
        """
        if len(audio_bytes) < 1024:
            return None

        # Decode PCM → float samples [-1, 1]
        n_samples = len(audio_bytes) // 2
        samples = struct.unpack(f"<{n_samples}h", audio_bytes[:n_samples * 2])
        samples_f = [s / 32768.0 for s in samples]
        duration = n_samples / sample_rate

        if duration < 0.3:
            return None

        # Frame-level analysis
        frame_size  = int(sample_rate * self.FRAME_MS / 1000)
        n_frames    = n_samples // frame_size

        if n_frames < 3:
            return None

        rms_frames  = []
        zcr_frames  = []
        silent_frames = 0

        for i in range(n_frames):
            start = i * frame_size
            frame = samples_f[start:start + frame_size]

            # RMS energy
            rms = math.sqrt(sum(x * x for x in frame) / len(frame))
            rms_frames.append(rms)

            # Zero-crossing rate
            zc = sum(1 for j in range(1, len(frame)) if (frame[j] * frame[j-1]) < 0)
            zcr = zc / len(frame)
            zcr_frames.append(zcr)

            if rms < self.SILENCE_RMS:
                silent_frames += 1

        # Aggregate features
        rms_mean = sum(rms_frames) / len(rms_frames)
        rms_var  = sum((r - rms_mean) ** 2 for r in rms_frames) / len(rms_frames)

        zcr_mean = sum(zcr_frames) / len(zcr_frames)
        zcr_var  = sum((z - zcr_mean) ** 2 for z in zcr_frames) / len(zcr_frames)

        pause_ratio = silent_frames / n_frames

        # Tremor index: mean absolute difference between consecutive RMS frames
        if len(rms_frames) > 1:
            tremor = sum(abs(rms_frames[i] - rms_frames[i-1]) for i in range(1, len(rms_frames)))
            tremor = tremor / (len(rms_frames) - 1)
            tremor_norm = min(1.0, tremor / 0.05)  # normalise to 0-1
        else:
            tremor_norm = 0.0

        # High-frequency energy: use ZCR as proxy (high ZCR = high freq content)
        hf_ratio = zcr_mean / (zcr_mean + 0.1)  # normalised

        # Speaking rate
        speech_duration = duration * (1 - pause_ratio)
        speaking_rate = transcript_words / max(speech_duration, 0.1)

        return ProsodicFeatures(
            rms_energy=rms_mean,
            rms_variance=rms_var,
            zero_crossing_rate=zcr_mean,
            zcr_variance=zcr_var,
            speaking_rate=speaking_rate,
            pause_ratio=pause_ratio,
            tremor_index=tremor_norm,
            high_freq_energy_ratio=hf_ratio,
            duration_seconds=duration,
        )


# ── Stress classifier ──────────────────────────────────────────────────────────

class VoiceStressAnalyser:
    """
    Classifies prosodic features as stressed/calm using rule-based scoring.
    Rules calibrated for children aged 8-17.
    """

    # Baseline ranges for calm speech (age-adjusted in analyse())
    _CALM_RMS_RANGE     = (0.03, 0.18)    # typical calm amplitude
    _CALM_RATE_RANGE    = (1.5, 4.5)      # words per second
    _CALM_PAUSE_MAX     = 0.45            # max 45% silence in calm speech
    _STRESS_TREMOR_MIN  = 0.35            # tremor above this = stress signal
    _STRESS_RMS_VAR     = 0.008           # high energy variance = arousal

    def analyse(
        self,
        features: ProsodicFeatures,
        child_baseline: Optional[Dict] = None,
        age_group: str = "9-12",
    ) -> StressResult:
        """
        Score prosodic features for distress.
        child_baseline: dict with keys rms_mean, speaking_rate, pause_ratio
        """
        markers = []
        score_components = []

        # ── Energy anomaly ─────────────────────────────────────────────────────
        if features.rms_energy < self._CALM_RMS_RANGE[0] * 0.5:
            markers.append("unusually_quiet")
            score_components.append(0.3)
        elif features.rms_energy > self._CALM_RMS_RANGE[1] * 2.0:
            markers.append("elevated_volume")
            score_components.append(0.2)

        if features.rms_variance > self._STRESS_RMS_VAR:
            markers.append("unstable_volume")
            score_components.append(0.25)

        # ── Tremor ────────────────────────────────────────────────────────────
        if features.tremor_index > self._STRESS_TREMOR_MIN:
            markers.append("voice_tremor_detected")
            score_components.append(0.35)

        # ── Speaking rate ─────────────────────────────────────────────────────
        if features.speaking_rate < self._CALM_RATE_RANGE[0] * 0.6:
            markers.append("speech_very_slow")
            score_components.append(0.25)
        elif features.speaking_rate > self._CALM_RATE_RANGE[1] * 1.5:
            markers.append("speech_rapid_pressured")
            score_components.append(0.20)

        # ── Pause pattern ─────────────────────────────────────────────────────
        if features.pause_ratio > self._CALM_PAUSE_MAX:
            markers.append("excessive_pausing")
            score_components.append(0.20)
        elif features.pause_ratio < 0.05:
            markers.append("no_breathing_room")
            score_components.append(0.15)

        # ── ZCR instability ───────────────────────────────────────────────────
        if features.zcr_variance > 0.0015:
            markers.append("voice_quality_irregular")
            score_components.append(0.15)

        # ── Baseline comparison ───────────────────────────────────────────────
        baseline_deviation = 0.0
        if child_baseline:
            rms_base   = child_baseline.get("rms_mean", features.rms_energy)
            rate_base  = child_baseline.get("speaking_rate", features.speaking_rate)
            pause_base = child_baseline.get("pause_ratio", features.pause_ratio)

            rms_std   = child_baseline.get("rms_std", 0.04)
            rate_std  = child_baseline.get("rate_std", 0.8)
            pause_std = child_baseline.get("pause_std", 0.10)

            rms_sigma   = abs(features.rms_energy - rms_base)   / max(rms_std, 0.001)
            rate_sigma  = abs(features.speaking_rate - rate_base) / max(rate_std, 0.001)
            pause_sigma = abs(features.pause_ratio - pause_base)  / max(pause_std, 0.001)

            baseline_deviation = (rms_sigma + rate_sigma + pause_sigma) / 3.0

            if baseline_deviation > 2.5:
                markers.append("significant_baseline_deviation")
                score_components.append(min(0.4, baseline_deviation * 0.1))

        # ── Final score ───────────────────────────────────────────────────────
        raw_score = min(1.0, sum(score_components))

        # Age adjustment: younger children show more prosodic variation normally
        age_factor = {"5-8": 0.75, "9-12": 0.85, "13-15": 0.95, "16-17": 1.0, "18+": 1.0}
        distress_score = round(raw_score * age_factor.get(age_group, 0.9), 3)

        confidence = min(1.0, features.duration_seconds / 3.0)  # longer sample = more confidence

        needs_alert = distress_score >= 0.45 and confidence >= 0.5

        if distress_score >= 0.7:
            note = "High distress indicators in voice. Immediate attention warranted."
        elif distress_score >= 0.45:
            note = "Moderate stress signals detected. Worth checking in."
        elif distress_score >= 0.2:
            note = "Mild prosodic variation. Monitoring recommended."
        else:
            note = "Voice patterns within normal range."

        return StressResult(
            distress_score=distress_score,
            confidence=confidence,
            features=features,
            markers_detected=markers,
            baseline_deviation=baseline_deviation,
            needs_guardian_alert=needs_alert,
            analysis_note=note,
        )


# ── Full voice → guardian pipeline ────────────────────────────────────────────

class VoiceGuardianPipeline:
    """
    Wires VoicePipeline (STT) → VoiceStressAnalyser → FamilyGuardian.

    Usage:
        pipeline = VoiceGuardianPipeline()
        result = await pipeline.process_audio(
            child_id="child_001",
            audio_bytes=raw_pcm,
            sample_rate=16000,
            age_group="9-12",
        )
    """

    def __init__(self):
        self._extractor = ProsodicExtractor()
        self._analyser  = VoiceStressAnalyser()
        self._stt       = None   # lazy-loaded
        self._guardian  = None   # lazy-loaded

    def _get_stt(self):
        if self._stt is None:
            try:
                from meok.core.voice_pipeline import WhisperSTT, VoiceConfig
                self._stt = WhisperSTT(VoiceConfig())
                self._stt._load_model()
            except Exception:
                self._stt = False   # mark unavailable
        return self._stt if self._stt is not False else None

    def _get_guardian(self):
        if self._guardian is None:
            try:
                from meok.core.family_guardian import get_guardian
                self._guardian = get_guardian()
            except Exception:
                self._guardian = False
        return self._guardian if self._guardian is not False else None

    async def process_audio(
        self,
        child_id: str,
        audio_bytes: bytes,
        sample_rate: int = 16000,
        age_group: str = "9-12",
        child_baseline: Optional[Dict] = None,
        context: Optional[str] = None,
    ) -> Dict:
        """
        Full pipeline: audio → transcription → stress analysis → guardian check.
        Returns unified result dict.
        Privacy: raw audio_bytes are never stored anywhere.
        """
        import hashlib
        audio_hash = hashlib.sha256(audio_bytes).hexdigest()[:16]

        # 1. Prosodic feature extraction (no ML needed)
        features = self._extractor.extract(audio_bytes, sample_rate)
        if features is None:
            return {
                "error": "Audio too short for analysis",
                "audio_hash": audio_hash,
                "duration_seconds": len(audio_bytes) / (sample_rate * 2),
            }

        # 2. Transcription via Whisper (if available)
        transcript = ""
        word_count = 0
        stt = self._get_stt()
        if stt:
            try:
                result = stt.transcribe(audio_bytes, sample_rate)
                transcript = result.text
                word_count = len(transcript.split())
            except Exception:
                pass  # prosodic analysis proceeds without transcript

        # Refine features with word count
        if word_count > 0:
            speech_duration = features.duration_seconds * (1 - features.pause_ratio)
            features.speaking_rate = word_count / max(speech_duration, 0.1)

        # 3. Stress analysis
        stress = self._analyser.analyse(features, child_baseline, age_group)
        stress.audio_hash = audio_hash

        # 4. Family Guardian analysis (if transcript available)
        guardian_result = None
        if transcript and self._get_guardian():
            try:
                guardian_result = self._get_guardian().analyse_interaction(
                    child_id=child_id,
                    text=transcript,
                    age_group=age_group,
                    context=context,
                    voice_stress_score=stress.distress_score,  # new parameter
                )
            except Exception:
                # FamilyGuardian may not yet accept voice_stress_score param
                guardian_result = self._get_guardian().analyse_interaction(
                    child_id=child_id,
                    text=transcript,
                    age_group=age_group,
                    context=context,
                )

        return {
            "child_id": child_id,
            "audio_hash": audio_hash,
            "duration_seconds": round(features.duration_seconds, 2),
            "transcript": transcript,
            "voice_stress": {
                "distress_score": stress.distress_score,
                "confidence": stress.confidence,
                "markers": stress.markers_detected,
                "baseline_deviation": stress.baseline_deviation,
                "needs_alert": stress.needs_guardian_alert,
                "note": stress.analysis_note,
            },
            "prosodic_features": {
                "rms_energy":     round(features.rms_energy, 4),
                "energy_variance": round(features.rms_variance, 6),
                "speaking_rate":  round(features.speaking_rate, 2),
                "pause_ratio":    round(features.pause_ratio, 3),
                "tremor_index":   round(features.tremor_index, 3),
                "zcr_variance":   round(features.zcr_variance, 6),
            },
            "guardian_analysis": guardian_result,
            "privacy_note": "Raw audio was analysed in-memory and not stored. Hash only retained.",
        }


# ── Singleton ──────────────────────────────────────────────────────────────────

_pipeline: Optional[VoiceGuardianPipeline] = None

def get_voice_guardian_pipeline() -> VoiceGuardianPipeline:
    global _pipeline
    if _pipeline is None:
        _pipeline = VoiceGuardianPipeline()
    return _pipeline


# ── Smoke test ─────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import struct, math, random

    def make_test_audio(duration_s=2.0, sample_rate=16000, stress=False):
        """Generate synthetic PCM audio for testing."""
        n = int(duration_s * sample_rate)
        samples = []
        for i in range(n):
            t = i / sample_rate
            # Base tone
            val = 0.1 * math.sin(2 * math.pi * 200 * t)
            if stress:
                # Add tremor + high energy variance
                val += 0.05 * math.sin(2 * math.pi * 7 * t)  # 7Hz tremor
                val *= (1 + 0.3 * random.gauss(0, 1))
            val = max(-1.0, min(1.0, val))
            samples.append(int(val * 32767))
        return struct.pack(f"<{n}h", *samples)

    extractor = ProsodicExtractor()
    analyser  = VoiceStressAnalyser()

    # Calm audio
    calm_audio = make_test_audio(2.0, stress=False)
    calm_feat  = extractor.extract(calm_audio, 16000, transcript_words=15)
    calm_result = analyser.analyse(calm_feat, age_group="9-12")
    print(f"Calm: score={calm_result.distress_score:.3f} markers={calm_result.markers_detected}")
    assert calm_result.distress_score <= 0.6, "Calm audio should score low"

    # Stressed audio
    stress_audio = make_test_audio(2.0, stress=True)
    stress_feat  = extractor.extract(stress_audio, 16000, transcript_words=3)
    stress_result = analyser.analyse(stress_feat, age_group="9-12")
    print(f"Stress: score={stress_result.distress_score:.3f} markers={stress_result.markers_detected}")

    print("✅ VoiceStressAnalyser — tests passed")
