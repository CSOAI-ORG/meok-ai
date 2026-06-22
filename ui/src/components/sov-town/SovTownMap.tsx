"use client";

import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { SovTownHive, SovTownCharacter } from "@/hooks/useSovTown";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function createPulseIcon(color: string) {
  return L.divIcon({
    className: "custom-pulse-marker",
    html: `<div style="background:${color};width:14px;height:14px;border-radius:50%;box-shadow:0 0 0 0 ${color};animation:pulse 2s infinite;"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

function MapReset({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true });
  }, [center, zoom, map]);
  return null;
}

function pseudoCoordinate(seed: string): [number, number] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  const lat = 35 + ((h & 0xffff) / 0xffff) * 20;
  const lng = -20 + (((h >>> 16) & 0xffff) / 0xffff) * 80;
  return [lat, lng];
}

interface SovTownMapProps {
  hives: SovTownHive[];
  characters: SovTownCharacter[];
  selectedHive?: string;
  onSelectHive: (key: string) => void;
}

export default function SovTownMap({ hives, characters, selectedHive, onSelectHive }: SovTownMapProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const center: [number, number] = [45, 10];
  const zoom = 3;

  const positionedHives = useMemo(() => {
    return hives.map((hive) => {
      const [lat, lng] = hive.lat !== undefined && hive.lng !== undefined
        ? [hive.lat, hive.lng]
        : pseudoCoordinate(hive.key);
      return { ...hive, lat, lng };
    });
  }, [hives]);

  if (!mounted) return <div className="h-full w-full bg-slate-950" />;

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} className="h-full w-full" style={{ background: "#0f172a" }}>
      <MapReset center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {positionedHives.map((hive) => {
        const isSelected = selectedHive === hive.key;
        return (
          <Marker
            key={hive.key}
            position={[hive.lat, hive.lng]}
            icon={createPulseIcon(isSelected ? "#3b82f6" : "#f59e0b")}
            eventHandlers={{ click: () => onSelectHive(hive.key) }}
          >
            <Popup>
              <div className="min-w-[180px] font-sans">
                <h3 className="font-bold text-slate-900">{hive.name}</h3>
                <p className="text-xs text-slate-500">{hive.domain}</p>
                <div className="mt-2 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Episodes</span>
                    <span className="font-medium">{hive.episodes ?? "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Agents</span>
                    <span className="font-medium">{hive.agents ?? "—"}</span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}

      {characters.slice(0, 50).map((char) => {
        const hive = positionedHives.find((h) => h.key === char.hive);
        if (!hive) return null;
        const [baseLat, baseLng] = [hive.lat, hive.lng];
        const jitter = pseudoCoordinate(char.id);
        const lat = baseLat + (jitter[0] - 45) * 0.3;
        const lng = baseLng + (jitter[1] - 20) * 0.3;
        return (
          <CircleMarker
            key={char.id}
            center={[lat, lng]}
            radius={4}
            pathOptions={{ fillColor: "#2d9b8a", color: "#0f172a", weight: 1, fillOpacity: 0.8 }}
          >
            <Popup>
              <div className="font-sans text-xs">
                <div className="font-bold text-slate-900">{char.name}</div>
                <div className="text-slate-500">{char.hive}</div>
                {char.archetype && <div className="italic text-slate-600">{char.archetype}</div>}
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
