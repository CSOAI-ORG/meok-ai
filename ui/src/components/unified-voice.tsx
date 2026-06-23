"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface VoiceOptions {
  sttProvider: "webspeech" | "whisper" | "cloud";
  ttsProvider: "webspeech" | "kokoro" | "vibevoice" | "cloud";
  cloudSTTUrl?: string;
  cloudTTSUrl?: string;
}

const DEFAULT_OPTIONS: VoiceOptions = {
  sttProvider: "webspeech",
  ttsProvider: "webspeech",
};

// Check for local Whisper support
function checkWhisperSupport(): boolean {
  return typeof window !== "undefined" && "webkitSpeechRecognition" in window;
}

// Unified voice engine
export function useVoiceEngine(options: VoiceOptions = DEFAULT_OPTIONS) {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize Web Speech API (for browsers)
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.log("[Voice] Web Speech API not available");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onresult = (event: any) => {
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        }
      }
      if (final) {
        setTranscript(final);
      }
    };

    recognitionRef.current.onerror = (event: any) => {
      console.error("[Voice] STT error:", event.error);
      setError(event.error);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  // Start listening
  const startListening = useCallback(async () => {
    setError(null);
    setTranscript("");

    if (options.sttProvider === "whisper" && options.cloudSTTUrl) {
      // Use cloud whisper endpoint (our MCP server)
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        const chunks: Blob[] = [];

        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = async () => {
          const blob = new Blob(chunks, { type: "audio/webm" });
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64 = (reader.result as string).split(",")[1];
            fetch(options.cloudSTTUrl!, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ audio_base64: base64 }),
            })
              .then((r) => r.json())
              .then((data) => {
                if (data.transcript) {
                  setTranscript(data.transcript);
                }
              })
              .catch(setError);
          };
          reader.readAsDataURL(blob);
          stream.getTracks().forEach((t) => t.stop());
        };

        mediaRecorder.start();
        setIsListening(true);

        // Auto-stop after 30 seconds
        setTimeout(() => {
          if (mediaRecorder.state === "recording") {
            mediaRecorder.stop();
            setIsListening(false);
          }
        }, 30000);

        return;
      } catch (e) {
        setError(String(e));
        // Fall back to Web Speech API
      }
    }

    // Default: Web Speech API
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        // Already started
        setIsListening(true);
      }
    } else {
      setError("Speech recognition not available");
    }
  }, [options.sttProvider, options.cloudSTTUrl]);

  // Stop listening
  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  // Speak text
  const speak = useCallback(async (text: string) => {
    setError(null);
    setIsSpeaking(true);

    if (options.ttsProvider === "kokoro" && options.cloudTTSUrl) {
      // Use local Kokoro TTS via MCP
      try {
        const response = await fetch(options.cloudTTSUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });
        const blob = await response.blob();
        const audio = new Audio(URL.createObjectURL(blob));
        audio.onended = () => setIsSpeaking(false);
        audio.onerror = () => {
          setError("TTS playback failed");
          setIsSpeaking(false);
        };
        await audio.play();
        return;
      } catch (e) {
        setError(String(e));
        // Fall back to Web Speech
      }
    }

    // Default: Web Speech API TTS
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      // Try to find a good voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (v) => v.name.includes("Samantha") || v.name.includes("Daniel") || v.name.includes("Microsoft")
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => {
        setError("TTS failed");
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      setError("Text-to-speech not available");
      setIsSpeaking(false);
    }
  }, [options.ttsProvider, options.cloudTTSUrl]);

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  return {
    isListening,
    isSpeaking,
    transcript,
    error,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
    isSupported: !!recognitionRef.current || !!options.cloudSTTUrl,
  };
}

// Voice button component for chat
interface VoiceButtonProps {
  onTranscript?: (text: string) => void;
  disabled?: boolean;
  className?: string;
}

export function VoiceButton({ onTranscript, disabled, className }: VoiceButtonProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      let final = "";
      for (let i = 0; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        }
      }
      setTranscript(final);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
      if (transcript && onTranscript) {
        onTranscript(transcript);
        setTranscript("");
      }
    };

    return () => recognitionRef.current?.stop();
  }, [onTranscript, transcript]);

  const toggle = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setTranscript("");
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={disabled || !recognitionRef.current}
      className={`p-2 rounded-full transition-all ${
        isListening
          ? "bg-red-500 animate-pulse"
          : "bg-gray-100 hover:bg-gray-200"
      } ${disabled ? "opacity-50" : ""} ${className || ""}`}
      title={isListening ? "Stop recording" : "Voice input"}
    >
      {isListening ? "⏹️" : "🎤"}
    </button>
  );
}

// TTS button for reading aloud
interface SpeakButtonProps {
  text: string;
  disabled?: boolean;
}

export function SpeakButton({ text, disabled }: SpeakButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = async () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Try MCP /speak first
    try {
      const res = await fetch("http://localhost:3200/speak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (res.ok) {
        const blob = await res.blob();
        const audio = new Audio(URL.createObjectURL(blob));
        audio.onended = () => setIsSpeaking(false);
        audio.onerror = () => setIsSpeaking(false);
        setIsSpeaking(true);
        await audio.play();
        return;
      }
    } catch {
      // Fall back to Web Speech
    }

    // Fallback: Web Speech API
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsSpeaking(false);
    speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <button type="button"
      onClick={speak}
      disabled={disabled || !text}
      className={`p-1 rounded ${isSpeaking ? "text-red-500" : "text-gray-400 hover:text-gray-600"}`}
      title={isSpeaking ? "Stop" : "Read aloud"}
    >
      {isSpeaking ? "⏹️" : "🔊"}
    </button>
  );
}

export default useVoiceEngine;
