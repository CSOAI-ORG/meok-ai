"use client";

import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function characterIcon(emoji: string) {
  return L.divIcon({
    className: "custom-character-marker",
    html: `<div style="font-size:28px;line-height:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.4));">${emoji}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}

function dataNodeIcon() {
  return L.divIcon({
    className: "custom-data-marker",
    html: `<div style="width:18px;height:18px;border-radius:50%;background:#c9a84c;box-shadow:0 0 0 4px rgba(201,168,76,0.3),0 0 20px #c9a84c;"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
}

function plotIcon() {
  return L.divIcon({
    className: "custom-plot-marker",
    html: `<div style="width:22px;height:22px;border-radius:4px;background:rgba(45,155,138,0.25);border:2px solid #2d9b8a;box-shadow:0 0 0 4px rgba(45,155,138,0.15);"></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    if (center[0] !== 0 || center[1] !== 0) {
      map.setView(center, 16, { animate: true });
    }
  }, [center, map]);
  return null;
}

const CHARACTERS = [
  { emoji: "🧙", name: "Sage", archetype: "Mystic" },
  { emoji: "🛡️", name: "Marcus", archetype: "Guardian" },
  { emoji: "🔭", name: "Scout", archetype: "Explorer" },
  { emoji: "🎨", name: "Aria", archetype: "Creator" },
  { emoji: "⚔️", name: "Orion", archetype: "Strategist" },
  { emoji: "🌸", name: "Shanti", archetype: "Healer" },
];

function randomOffset(lat: number, lng: number, radiusMeters: number): [number, number] {
  const r = radiusMeters / 111320;
  const angle = Math.random() * Math.PI * 2;
  return [lat + r * Math.cos(angle), lng + r * Math.sin(angle)];
}

export default function MEOKGoMap() {
  const [pos, setPos] = useState<[number, number]>([51.5074, -0.1278]); // London default
  const [status, setStatus] = useState<"locating" | "ready" | "denied">("locating");
  const [caught, setCaught] = useState<{ type: string; label: string; value: string }[]>([]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("ready");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setPos([p.coords.latitude, p.coords.longitude]);
        setStatus("ready");
      },
      () => {
        setStatus("denied");
      },
      { enableHighAccuracy: true }
    );
  }, []);

  const characters = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => {
        const char = CHARACTERS[i % CHARACTERS.length];
        const [lat, lng] = randomOffset(pos[0], pos[1], 80 + Math.random() * 250);
        return { id: `char-${i}`, ...char, lat, lng };
      }),
    [pos]
  );

  const dataNodes = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => {
        const [lat, lng] = randomOffset(pos[0], pos[1], 30 + Math.random() * 200);
        return { id: `data-${i}`, lat, lng, label: ["Air quality", "Traffic pattern", "Noise level", "Footfall", "Energy use"][i % 5] };
      }),
    [pos]
  );

  const plots = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, i) => {
        const [lat, lng] = randomOffset(pos[0], pos[1], 40 + Math.random() * 150);
        return { id: `plot-${i}`, lat, lng, name: `Plot ${String.fromCharCode(65 + i)}` };
      }),
    [pos]
  );

  return (
    <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-2xl border border-white/10">
      <MapContainer
        center={pos}
        zoom={16}
        scrollWheelZoom
        className="h-full w-full"
        style={{ background: "#0d0c18" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController center={pos} />

        {/* Player */}
        <Circle
          center={pos}
          radius={20}
          pathOptions={{ color: "#c9a84c", fillColor: "#c9a84c", fillOpacity: 0.3 }}
        />
        <Marker position={pos} icon={DefaultIcon}>
          <Popup>You are here</Popup>
        </Marker>

        {/* Characters */}
        {characters.map((c) => (
          <Marker
            key={c.id}
            position={[c.lat, c.lng]}
            icon={characterIcon(c.emoji)}
            eventHandlers={{
              click: () => setCaught((prev) => [{ type: "character", label: c.name, value: c.archetype }, ...prev].slice(0, 12)),
            }}
          >
            <Popup>
              <div className="text-slate-900">
                <strong>{c.name}</strong> — {c.archetype}
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Data nodes */}
        {dataNodes.map((d) => (
          <Marker
            key={d.id}
            position={[d.lat, d.lng]}
            icon={dataNodeIcon()}
            eventHandlers={{
              click: () => setCaught((prev) => [{ type: "data", label: d.label, value: "scanned" }, ...prev].slice(0, 12)),
            }}
          >
            <Popup>
              <div className="text-slate-900">{d.label} data node</div>
            </Popup>
          </Marker>
        ))}

        {/* Plots */}
        {plots.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]} icon={plotIcon()}>
            <Popup>
              <div className="text-slate-900">
                <strong>{p.name}</strong>
                <br />
                Unclaimed digital real estate
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* HUD */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4">
        <div className="rounded-xl border border-white/10 bg-[#0d0c18]/90 px-4 py-2 text-xs text-white/80 backdrop-blur">
          {status === "locating" ? "Locating…" : status === "denied" ? "Using demo location (London)" : "Live overlay"}
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0d0c18]/90 px-4 py-2 text-xs text-white/80 backdrop-blur">
          Scanned: {caught.length}
        </div>
      </div>

      {caught.length > 0 && (
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#0d0c18]/95 p-4 backdrop-blur">
          <h4 className="text-sm font-bold text-[#c9a84c]">Latest scans</h4>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {caught.map((item, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs"
              >
                <span>{item.type === "character" ? "🧬" : "📡"}</span>
                <span className="text-white">{item.label}</span>
                <span className="text-white/50">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
