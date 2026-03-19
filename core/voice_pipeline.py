"""
Voice Pipeline — MEOK.AI
From Extended Technical Research Brief (Section 13)

Full local voice pipeline: VAD → STT → LLM → TTS
Target: <500ms end-to-end on Apple M4

Components:
  VAD   — Silero VAD (<1MB, 95%+ accuracy, <50ms)
  STT   — faster-whisper (Whisper medium, 2x RT recommended)
  TTS   — Coqui XTTS v2 (primary) / Piper (fast notifications)
  Wake  — Porcupine or OpenWakeWord

Character voices: each MEOK character has distinct TTS profile
  Riri    — energetic, warm, fast pace
  Kimi    — precise, calm, moderate pace
  Orion   — bold, confident, deep
  Hourman — rhythmic, measured, steady
"""

from __future__ import annotations

import asyncio
import io
import logging
import os
import queue
import threading
import time
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Callable, Dict, List, Optional, Tuple

logger = logging.getLogger(__name__)


# ── Character voice profiles ────────────────────────────────────────────────────

class CharacterVoice(Enum):
    RIRI    = "riri"
    KIMI    = "kimi"
    ORION   = "orion"
    HOURMAN = "hourman"
    SOVEREIGN = "sovereign"


CHARACTER_TTS_PROFILES: Dict[CharacterVoice, Dict[str, Any]] = {
    CharacterVoice.RIRI: {
        "speaking_rate": 1.15,           # 15% faster than neutral
        "pitch_shift": 0.1,              # slight upward pitch
        "energy": 0.85,                  # expressive
        "emotion": "excited",
        "voice_id": "riri_v1",
        "description": "Energetic builder — warm, fast, enthusiastic",
    },
    CharacterVoice.KIMI: {
        "speaking_rate": 0.95,           # slightly slower, more precise
        "pitch_shift": 0.0,
        "energy": 0.65,                  # calm
        "emotion": "neutral",
        "voice_id": "kimi_v1",
        "description": "Scholar — precise, calm, knowledgeable",
    },
    CharacterVoice.ORION: {
        "speaking_rate": 1.05,
        "pitch_shift": -0.1,             # deeper
        "energy": 0.9,                   # assertive
        "emotion": "confident",
        "voice_id": "orion_v1",
        "description": "Hunter — bold, confident, decisive",
    },
    CharacterVoice.HOURMAN: {
        "speaking_rate": 1.0,            # metronomic
        "pitch_shift": -0.05,
        "energy": 0.7,
        "emotion": "calm",
        "voice_id": "hourman_v1",
        "description": "Timekeeper — rhythmic, measured, steady",
    },
    CharacterVoice.SOVEREIGN: {
        "speaking_rate": 1.0,
        "pitch_shift": 0.0,
        "energy": 0.75,
        "emotion": "caring",
        "voice_id": "sovereign_v1",
        "description": "Orchestrator — wise, caring, authoritative",
    },
}


# ── Pipeline stages ────────────────────────────────────────────────────────────

@dataclass
class VoiceConfig:
    """Runtime configuration for the voice pipeline."""
    # STT
    whisper_model: str = "medium"        # tiny/base/small/medium/large-v3
    whisper_device: str = "auto"         # auto, cpu, cuda, mps (Apple Silicon)
    whisper_compute_type: str = "auto"   # float16 (GPU), int8 (CPU)
    whisper_language: Optional[str] = None  # None = auto-detect

    # TTS
    tts_engine: str = "piper"            # piper (fast) or coqui (quality)
    tts_model_path: Optional[str] = None
    default_character: CharacterVoice = CharacterVoice.SOVEREIGN

    # VAD
    vad_threshold: float = 0.5
    vad_sampling_rate: int = 16000
    vad_min_silence_ms: int = 500        # ms of silence before end-of-utterance
    vad_min_speech_ms: int = 250         # min speech duration to process

    # Pipeline
    streaming: bool = True               # stream TTS output before LLM completes
    target_latency_ms: int = 500         # alert if exceeded


@dataclass
class STTResult:
    text: str
    language: str = "en"
    confidence: float = 1.0
    segments: List[Dict] = field(default_factory=list)
    processing_ms: float = 0.0


@dataclass
class TTSResult:
    audio_bytes: bytes
    sample_rate: int = 22050
    character: CharacterVoice = CharacterVoice.SOVEREIGN
    text_spoken: str = ""
    processing_ms: float = 0.0


@dataclass
class PipelineMetrics:
    vad_ms: float = 0.0
    stt_ms: float = 0.0
    llm_ms: float = 0.0
    tts_ms: float = 0.0
    total_ms: float = 0.0

    @property
    def meets_target(self) -> bool:
        return self.total_ms < 500.0

    def summary(self) -> str:
        return (
            f"VAD={self.vad_ms:.0f}ms | STT={self.stt_ms:.0f}ms | "
            f"LLM={self.llm_ms:.0f}ms | TTS={self.tts_ms:.0f}ms | "
            f"TOTAL={self.total_ms:.0f}ms {'✅' if self.meets_target else '⚠️ OVER TARGET'}"
        )


# ── VAD ───────────────────────────────────────────────────────────────────────

class VoiceActivityDetector:
    """
    Silero VAD wrapper — <1MB model, 95%+ accuracy, <50ms.
    Falls back to energy-based VAD if silero not installed.
    """

    def __init__(self, config: VoiceConfig):
        self.config = config
        self._model = None
        self._available = False
        self._try_load_silero()

    def _try_load_silero(self):
        try:
            import torch
            model, _ = torch.hub.load(
                repo_or_dir="snakers4/silero-vad",
                model="silero_vad",
                force_reload=False,
                onnx=False,
                verbose=False,
            )
            self._model = model
            self._available = True
            logger.info("Silero VAD loaded")
        except Exception as e:
            logger.warning("Silero VAD unavailable — using energy fallback: %s", e)
            self._available = False

    def is_speech(self, audio_chunk: bytes, sample_rate: int = 16000) -> Tuple[bool, float]:
        """Return (is_speech, confidence). Audio chunk: 16-bit PCM."""
        t0 = time.monotonic()

        if self._available and self._model is not None:
            try:
                import torch
                import numpy as np
                audio_np = np.frombuffer(audio_chunk, dtype=np.int16).astype(np.float32) / 32768.0
                audio_tensor = torch.FloatTensor(audio_np)
                confidence = float(self._model(audio_tensor, sample_rate).item())
                is_speech = confidence > self.config.vad_threshold
                vad_ms = (time.monotonic() - t0) * 1000
                if vad_ms > 50:
                    logger.warning("VAD exceeded 50ms: %.1fms", vad_ms)
                return is_speech, confidence
            except Exception as e:
                logger.debug("Silero VAD inference failed: %s", e)

        # Energy fallback
        import struct
        try:
            samples = struct.unpack(f"{len(audio_chunk)//2}h", audio_chunk)
            rms = (sum(s*s for s in samples) / len(samples)) ** 0.5
            energy_threshold = 800  # tune per environment
            return rms > energy_threshold, min(1.0, rms / 3000)
        except Exception:
            return True, 0.5  # assume speech if all else fails


# ── STT ───────────────────────────────────────────────────────────────────────

class SpeechToText:
    """
    faster-whisper STT — 4x faster than OpenAI Whisper via CTranslate2.
    Recommended: medium model on M4 for <300ms latency.
    """

    def __init__(self, config: VoiceConfig):
        self.config = config
        self._model = None
        self._available = False
        self._try_load()

    def _try_load(self):
        try:
            from faster_whisper import WhisperModel

            device = self.config.whisper_device
            if device == "auto":
                try:
                    import torch
                    device = "mps" if torch.backends.mps.is_available() else \
                             "cuda" if torch.cuda.is_available() else "cpu"
                except ImportError:
                    device = "cpu"

            compute = self.config.whisper_compute_type
            if compute == "auto":
                compute = "float16" if device in ("cuda", "mps") else "int8"

            self._model = WhisperModel(
                self.config.whisper_model,
                device=device,
                compute_type=compute,
            )
            self._available = True
            logger.info("faster-whisper loaded: model=%s device=%s compute=%s",
                        self.config.whisper_model, device, compute)
        except ImportError:
            logger.warning("faster-whisper not installed — STT unavailable. pip install faster-whisper")
        except Exception as e:
            logger.warning("STT load failed: %s", e)

    def transcribe(self, audio_bytes: bytes, sample_rate: int = 16000) -> STTResult:
        """Transcribe audio bytes (16-bit PCM) to text."""
        t0 = time.monotonic()

        if not self._available or self._model is None:
            return STTResult(text="[STT unavailable]", processing_ms=(time.monotonic()-t0)*1000)

        try:
            import numpy as np
            audio_np = np.frombuffer(audio_bytes, dtype=np.int16).astype(np.float32) / 32768.0

            segments, info = self._model.transcribe(
                audio_np,
                language=self.config.whisper_language,
                beam_size=5,
                word_timestamps=True,
            )

            text_parts = []
            seg_data = []
            for seg in segments:
                text_parts.append(seg.text.strip())
                seg_data.append({"text": seg.text, "start": seg.start, "end": seg.end})

            text = " ".join(text_parts)
            ms = (time.monotonic() - t0) * 1000
            return STTResult(
                text=text,
                language=info.language,
                confidence=info.language_probability,
                segments=seg_data,
                processing_ms=ms,
            )

        except Exception as e:
            logger.error("STT transcription failed: %s", e)
            return STTResult(text="", processing_ms=(time.monotonic()-t0)*1000)

    @property
    def available(self) -> bool:
        return self._available


# ── TTS ───────────────────────────────────────────────────────────────────────

class TextToSpeech:
    """
    TTS engine with character voice profiles.
    Primary: Coqui XTTS v2 (quality, emotional control)
    Fast: Piper (50x RT, notifications)
    Falls back to system TTS if neither available.
    """

    def __init__(self, config: VoiceConfig):
        self.config = config
        self._coqui = None
        self._piper_available = False
        self._try_load()

    def _try_load(self):
        if self.config.tts_engine == "coqui":
            self._try_load_coqui()
        elif self.config.tts_engine == "piper":
            self._try_load_piper()
        else:
            # Try coqui first, then piper
            self._try_load_coqui()
            if not self._coqui:
                self._try_load_piper()

    def _try_load_coqui(self):
        try:
            from TTS.api import TTS
            self._coqui = TTS("tts_models/multilingual/multi-dataset/xtts_v2")
            logger.info("Coqui XTTS v2 loaded")
        except ImportError:
            logger.info("Coqui TTS not installed — pip install TTS")
        except Exception as e:
            logger.warning("Coqui TTS load failed: %s", e)

    def _try_load_piper(self):
        try:
            import piper
            self._piper_available = True
            logger.info("Piper TTS available")
        except ImportError:
            logger.info("Piper not installed — pip install piper-tts")
        except Exception as e:
            logger.warning("Piper load failed: %s", e)

    def synthesize(
        self,
        text: str,
        character: CharacterVoice = CharacterVoice.SOVEREIGN,
    ) -> TTSResult:
        """Convert text to speech with character voice profile."""
        t0 = time.monotonic()
        profile = CHARACTER_TTS_PROFILES[character]

        if self._coqui is not None:
            return self._synthesize_coqui(text, profile, character, t0)

        if self._piper_available:
            return self._synthesize_piper(text, profile, character, t0)

        # System TTS fallback
        return self._synthesize_system(text, character, t0)

    def _synthesize_coqui(self, text: str, profile: Dict, character: CharacterVoice, t0: float) -> TTSResult:
        try:
            buf = io.BytesIO()
            self._coqui.tts_to_file(
                text=text,
                file_path=buf,
                speaker=profile.get("voice_id"),
                speed=profile.get("speaking_rate", 1.0),
            )
            ms = (time.monotonic() - t0) * 1000
            return TTSResult(
                audio_bytes=buf.getvalue(),
                character=character,
                text_spoken=text,
                processing_ms=ms,
            )
        except Exception as e:
            logger.error("Coqui synthesis failed: %s", e)
            return TTSResult(audio_bytes=b"", text_spoken=text, character=character,
                           processing_ms=(time.monotonic()-t0)*1000)

    def _synthesize_piper(self, text: str, profile: Dict, character: CharacterVoice, t0: float) -> TTSResult:
        try:
            import piper
            voice = piper.PiperVoice.load(
                self.config.tts_model_path or "en_US-lessac-medium.onnx"
            )
            buf = io.BytesIO()
            with wave.open(buf, "w") as wf:
                wf.setnchannels(1)
                wf.setsampwidth(2)
                wf.setframerate(voice.config.sample_rate)
                for audio_bytes in voice.synthesize_stream_raw(text):
                    wf.writeframes(audio_bytes)
            ms = (time.monotonic() - t0) * 1000
            return TTSResult(
                audio_bytes=buf.getvalue(),
                sample_rate=voice.config.sample_rate,
                character=character,
                text_spoken=text,
                processing_ms=ms,
            )
        except Exception as e:
            logger.error("Piper synthesis failed: %s", e)
            return TTSResult(audio_bytes=b"", text_spoken=text, character=character,
                           processing_ms=(time.monotonic()-t0)*1000)

    def _synthesize_system(self, text: str, character: CharacterVoice, t0: float) -> TTSResult:
        """macOS 'say' command fallback."""
        try:
            import subprocess
            import tempfile
            with tempfile.NamedTemporaryFile(suffix=".aiff", delete=False) as f:
                tmp_path = f.name
            subprocess.run(["say", "-o", tmp_path, text], check=True, capture_output=True)
            with open(tmp_path, "rb") as f:
                audio = f.read()
            os.unlink(tmp_path)
            ms = (time.monotonic() - t0) * 1000
            return TTSResult(audio_bytes=audio, character=character, text_spoken=text, processing_ms=ms)
        except Exception as e:
            logger.debug("System TTS failed: %s", e)
            return TTSResult(audio_bytes=b"", text_spoken=text, character=character,
                           processing_ms=(time.monotonic()-t0)*1000)

    @property
    def available(self) -> bool:
        return self._coqui is not None or self._piper_available


# ── Full pipeline ─────────────────────────────────────────────────────────────

class VoicePipeline:
    """
    End-to-end voice pipeline: audio_in → text → response → audio_out.
    Target: <500ms total on Apple M4.

    Usage:
        pipeline = VoicePipeline(config)
        pipeline.start()
        pipeline.feed_audio(pcm_bytes)   # from microphone
        # pipeline.on_response called with TTSResult
    """

    def __init__(
        self,
        config: Optional[VoiceConfig] = None,
        on_transcript: Optional[Callable[[str], None]] = None,
        on_response: Optional[Callable[[TTSResult], None]] = None,
        llm_fn: Optional[Callable[[str], str]] = None,
    ):
        self.config = config or VoiceConfig()
        self.on_transcript = on_transcript
        self.on_response = on_response
        self.llm_fn = llm_fn or (lambda text: f"[LLM not configured — heard: {text}]")

        self.vad = VoiceActivityDetector(self.config)
        self.stt = SpeechToText(self.config)
        self.tts = TextToSpeech(self.config)

        self._audio_buffer = bytearray()
        self._silence_frames = 0
        self._speaking = False
        self._metrics_history: List[PipelineMetrics] = []

    def feed_audio(self, pcm_chunk: bytes) -> Optional[PipelineMetrics]:
        """
        Feed a chunk of 16-bit PCM audio.
        When VAD detects end-of-utterance, processes full utterance.
        Returns metrics if utterance was processed, else None.
        """
        t_total = time.monotonic()

        # VAD check
        t0 = time.monotonic()
        is_speech, confidence = self.vad.is_speech(pcm_chunk)
        vad_ms = (time.monotonic() - t0) * 1000

        if is_speech:
            self._audio_buffer.extend(pcm_chunk)
            self._speaking = True
            self._silence_frames = 0
            return None

        if self._speaking:
            self._silence_frames += 1
            # 500ms of silence = end of utterance
            frames_for_500ms = int(self.config.vad_min_silence_ms / 30)  # ~30ms per frame
            if self._silence_frames >= frames_for_500ms and len(self._audio_buffer) > 0:
                # Process utterance
                return self._process_utterance(bytes(self._audio_buffer), vad_ms, t_total)

        return None

    def _process_utterance(self, audio: bytes, vad_ms: float, t_total: float) -> PipelineMetrics:
        """Full pipeline: audio → STT → LLM → TTS."""
        metrics = PipelineMetrics(vad_ms=vad_ms)

        # STT
        t0 = time.monotonic()
        stt_result = self.stt.transcribe(audio)
        metrics.stt_ms = (time.monotonic() - t0) * 1000

        if not stt_result.text.strip():
            self._reset_buffer()
            return metrics

        # Notify transcript
        if self.on_transcript:
            try:
                self.on_transcript(stt_result.text)
            except Exception:
                pass

        # LLM
        t0 = time.monotonic()
        try:
            response_text = self.llm_fn(stt_result.text)
        except Exception as e:
            response_text = "I'm having trouble processing that right now."
            logger.error("LLM in voice pipeline failed: %s", e)
        metrics.llm_ms = (time.monotonic() - t0) * 1000

        # TTS
        t0 = time.monotonic()
        tts_result = self.tts.synthesize(response_text, self.config.default_character)
        metrics.tts_ms = (time.monotonic() - t0) * 1000

        metrics.total_ms = (time.monotonic() - t_total) * 1000

        if not metrics.meets_target:
            logger.warning("Voice pipeline exceeded 500ms target: %s", metrics.summary())

        # Deliver response
        if self.on_response and tts_result.audio_bytes:
            try:
                self.on_response(tts_result)
            except Exception:
                pass

        self._metrics_history.append(metrics)
        self._reset_buffer()
        return metrics

    def _reset_buffer(self):
        self._audio_buffer = bytearray()
        self._speaking = False
        self._silence_frames = 0

    def get_metrics(self) -> Dict[str, Any]:
        if not self._metrics_history:
            return {"samples": 0, "avg_total_ms": 0}
        totals = [m.total_ms for m in self._metrics_history]
        return {
            "samples": len(totals),
            "avg_total_ms": sum(totals) / len(totals),
            "max_total_ms": max(totals),
            "min_total_ms": min(totals),
            "below_500ms_pct": 100 * sum(1 for t in totals if t < 500) / len(totals),
            "stt_available": self.stt.available,
            "tts_available": self.tts.available,
            "vad_mode": "silero" if self.vad._available else "energy_fallback",
        }

    def status(self) -> Dict[str, Any]:
        return {
            "stt": {"available": self.stt.available, "model": self.config.whisper_model},
            "tts": {"available": self.tts.available, "engine": self.config.tts_engine},
            "vad": {"mode": "silero" if self.vad._available else "energy"},
            "character": self.config.default_character.value,
            "streaming": self.config.streaming,
            "target_ms": self.config.target_latency_ms,
            "characters": list(CharacterVoice.__members__.keys()),
        }


# ── Install helper ────────────────────────────────────────────────────────────

def install_dependencies():
    """Print installation instructions for voice pipeline deps."""
    print("""
Voice Pipeline Dependencies:

  STT (faster-whisper):
    pip install faster-whisper
    # On Apple M4: uses MPS acceleration automatically

  TTS (Piper — fast):
    pip install piper-tts

  TTS (Coqui XTTS v2 — quality):
    pip install TTS
    # First run downloads ~1.8GB model

  VAD (Silero):
    pip install torch torchaudio
    # Model auto-downloads on first use (~1MB)

  Audio capture (microphone):
    pip install pyaudio sounddevice

Recommended for MEOK on Apple M4:
    pip install faster-whisper piper-tts torch torchaudio pyaudio sounddevice
""")
