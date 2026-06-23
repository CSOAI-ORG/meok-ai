"use client";

import { useEffect, useRef, useState } from "react";
import { Scan, Camera, MapPin, X, Zap } from "lucide-react";
import { Surface } from "@/components/design-system/surface";

const OVERLAYS = [
  { id: "aria", name: "Aria", emoji: "✨", color: "#F472B6", x: 28, y: 34, distance: "12m" },
  { id: "marcus", name: "Marcus", emoji: "⚡", color: "#F59E0B", x: 62, y: 28, distance: "8m" },
  { id: "luna", name: "Luna", emoji: "🌙", color: "#A5F3FC", x: 45, y: 58, distance: "22m" },
  { id: "sov3-node", name: "SOV3 Node", emoji: "📡", color: "#2d9b8a", x: 74, y: 66, distance: "41m" },
];

export default function ARCamera() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [discovered, setDiscovered] = useState<Set<string>>(new Set());

  const startCamera = async () => {
    try {
      setError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (e) {
      setError("Camera access denied or unavailable. Try a mobile device with HTTPS.");
    }
  };

  const stopCamera = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  useEffect(() => {
    void startCamera();
    return () => stopCamera();
  }, []);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      const next = new Set(discovered);
      OVERLAYS.forEach((o) => {
        if (Math.random() > 0.35) next.add(o.id);
      });
      setDiscovered(next);
      setScanning(false);
    }, 1200);
  };

  return (
    <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black md:h-[80vh]">
      {stream ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center bg-[#0d0c18] p-6 text-center">
          <Camera className="mb-4 text-white/30" size={64} />
          <p className="max-w-md text-white/70">
            {error ?? "Enable your camera to see MEOK characters and data nodes overlaid on your world."}
          </p>
          <button type="button"
            onClick={startCamera}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#c9a84c] px-6 py-3 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
          >
            <Camera size={18} /> Start Camera
          </button>
        </div>
      )}

      {/* Scan reticle */}
      {stream && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative h-48 w-48 rounded-full border-2 border-dashed border-white/20">
            <div className="absolute -inset-2 rounded-full border border-white/5" />
            {scanning && (
              <div className="absolute inset-0 animate-ping rounded-full bg-[#2d9b8a]/20" />
            )}
          </div>
        </div>
      )}

      {/* Overlays */}
      {stream &&
        OVERLAYS.map((o) => (
          <div
            key={o.id}
            className={`absolute transition-all duration-500 ${discovered.has(o.id) ? "opacity-100" : "opacity-0"}`}
            style={{ left: `${o.x}%`, top: `${o.y}%` }}
          >
            <div className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 text-2xl shadow-lg"
                style={{ backgroundColor: `${o.color}30`, boxShadow: `0 0 24px ${o.color}40` }}
              >
                {o.emoji}
              </div>
              <Surface variant="glass" className="mt-2 px-3 py-1.5 text-center">
                <div className="text-sm font-semibold">{o.name}</div>
                <div className="flex items-center gap-1 text-xs text-white/50">
                  <MapPin size={10} /> {o.distance}
                </div>
              </Surface>
            </div>
          </div>
        ))}

      {/* HUD controls */}
      {stream && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-6">
          <button type="button"
            onClick={handleScan}
            disabled={scanning}
            className="inline-flex items-center gap-2 rounded-full bg-[#2d9b8a] px-6 py-3 font-bold text-white shadow-lg transition hover:bg-[#268a7b] disabled:opacity-70"
          >
            <Scan size={18} /> {scanning ? "Scanning..." : "Scan Area"}
          </button>
          <button type="button"
            onClick={stopCamera}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Status badge */}
      {stream && (
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white/70 backdrop-blur">
          <Zap size={12} className="text-[#c9a84c]" /> AR Overlay Active
        </div>
      )}
    </div>
  );
}
