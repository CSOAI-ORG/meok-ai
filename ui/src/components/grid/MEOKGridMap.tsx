'use client';

import { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  DOMAIN_NODES,
  INDUSTRY_HIVES,
  REGIONAL_HIVES,
  PROTOCOL_HIVES,
  TOOL_NODES,
  KING_HIVE,
  CROSS_LINKS,
  LAYER0_LINKS,
  FARM_TELEMETRY,
  FIRES,
  getEntityPosition,
  type DomainNode,
} from '@/lib/sov3-topology';

// Fix Leaflet default icons in Next.js
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function createPulseIcon(color: string) {
  return L.divIcon({
    className: 'custom-pulse-marker',
    html: `<div style="background:${color};width:14px;height:14px;border-radius:50%;box-shadow:0 0 0 0 ${color};animation:pulse 2s infinite;"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

function MapController({
  center,
  zoom,
  selected,
}: {
  center: [number, number];
  zoom: number;
  selected?: string;
}) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true });
  }, [center, zoom, map]);

  useEffect(() => {
    if (!selected) return;
    const node = DOMAIN_NODES.find((d) => d.id === selected);
    if (node) {
      map.flyTo([node.lat, node.lng], 10, { duration: 1.5 });
    }
  }, [selected, map]);

  return null;
}

function DomainPopupContent({ node }: { node: DomainNode }) {
  return (
    <div className="min-w-[220px] p-1 font-sans">
      <h3 className="font-bold text-slate-900">{node.name}</h3>
      <p className="text-xs text-slate-500">{node.domain}</p>
      <div className="mt-2 space-y-1 text-xs">
        <div className="flex justify-between">
          <span>Category</span>
          <span className="font-medium">{node.category}</span>
        </div>
        <div className="flex justify-between">
          <span>Readiness</span>
          <span className="font-medium">{node.readiness}%</span>
        </div>
        <div className="flex justify-between">
          <span>Status</span>
          <span
            className={`font-medium capitalize ${
              node.status === 'live'
                ? 'text-green-600'
                : node.status === 'down'
                  ? 'text-red-600'
                  : 'text-amber-600'
            }`}
          >
            {node.status}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Valuation</span>
          <span className="font-medium">{node.valuation}</span>
        </div>
        {node.mcpEndpoint && (
          <div className="pt-1">
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600">
              MCP
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function MEOKGridMap({
  layers,
  selected,
  onSelect,
  center,
  zoom,
}: {
  layers: string[];
  selected?: string;
  onSelect: (id: string) => void;
  center: [number, number];
  zoom: number;
}) {
  const showDomains = layers.includes('domains');
  const showHives = layers.includes('hives');
  const showTools = layers.includes('tools');
  const showLinks = layers.includes('links');
  const showLayer0 = layers.includes('layer0');
  const showFarm = layers.includes('farm');
  const showFires = layers.includes('fires');

  const fireCentroids = useMemo(() => {
    return FIRES.map((fire) => {
      const nodes = DOMAIN_NODES.filter((d) => fire.domainIds.includes(d.id));
      if (nodes.length === 0) return null;
      const lat = nodes.reduce((s, d) => s + d.lat, 0) / nodes.length;
      const lng = nodes.reduce((s, d) => s + d.lng, 0) / nodes.length;
      return { fire, lat, lng, count: nodes.length };
    }).filter(Boolean);
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-full w-full bg-slate-950" />;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      className="h-full w-full"
      style={{ background: '#0f172a' }}
    >
      <MapController center={center} zoom={zoom} selected={selected} />
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {/* King Hive */}
      {showTools && (
        <Marker
          position={[KING_HIVE.lat, KING_HIVE.lng]}
          icon={createPulseIcon('#f59e0b')}
          eventHandlers={{ click: () => onSelect('sov3') }}
        >
          <Popup>
            <div className="min-w-[180px]">
              <h3 className="font-bold">{KING_HIVE.name}</h3>
              <p className="text-xs text-slate-500">{KING_HIVE.endpoint}</p>
              <ul className="mt-1 list-disc pl-4 text-xs">
                {KING_HIVE.functions.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </Popup>
        </Marker>
      )}

      {/* Farm */}
      {showFarm && (
        <Marker
          position={[FARM_TELEMETRY.location.lat, FARM_TELEMETRY.location.lng]}
          icon={createPulseIcon('#10b981')}
        >
          <Popup>
            <div className="min-w-[180px]">
              <h3 className="font-bold">{FARM_TELEMETRY.location.name}</h3>
              <div className="mt-2 space-y-1 text-xs">
                {FARM_TELEMETRY.sensors.map((s) => (
                  <div key={s.id} className="flex justify-between">
                    <span>{s.name}</span>
                    <span className="font-medium">
                      {s.value}
                      {s.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Popup>
        </Marker>
      )}

      {/* Industry Hives */}
      {showHives &&
        INDUSTRY_HIVES.map((hive) => (
          <Marker
            key={hive.id}
            position={[hive.lat, hive.lng]}
            icon={createPulseIcon(hive.color)}
            eventHandlers={{ click: () => onSelect(hive.id) }}
          >
            <Popup>
              <div className="min-w-[160px]">
                <h3 className="font-bold">{hive.name}</h3>
                <p className="text-xs text-slate-500">{hive.domains.length} domains</p>
              </div>
            </Popup>
          </Marker>
        ))}

      {/* Regional Hives */}
      {showHives &&
        REGIONAL_HIVES.map((hive) => (
          <Marker
            key={hive.id}
            position={[hive.lat, hive.lng]}
            icon={createPulseIcon(hive.color)}
            eventHandlers={{ click: () => onSelect(hive.id) }}
          >
            <Popup>
              <div className="min-w-[160px]">
                <h3 className="font-bold">{hive.name}</h3>
                <p className="text-xs text-slate-500">Regional compliance node</p>
              </div>
            </Popup>
          </Marker>
        ))}

      {/* Protocol Hives */}
      {showHives &&
        PROTOCOL_HIVES.map((hive) => (
          <Marker
            key={hive.id}
            position={[hive.lat, hive.lng]}
            icon={createPulseIcon(hive.color)}
            eventHandlers={{ click: () => onSelect(hive.id) }}
          >
            <Popup>
              <div className="min-w-[160px]">
                <h3 className="font-bold">{hive.name}</h3>
                <p className="text-xs text-slate-500">Protocol hive</p>
                <p className="text-[10px] text-slate-400">{hive.domains.length} linked domains</p>
              </div>
            </Popup>
          </Marker>
        ))}

      {/* Tool Nodes */}
      {showTools &&
        TOOL_NODES.map((tool, idx) => {
          const angle = (idx / TOOL_NODES.length) * 2 * Math.PI;
          const radius = 0.8;
          const lat = KING_HIVE.lat + radius * Math.cos(angle);
          const lng = KING_HIVE.lng + radius * Math.sin(angle);
          return (
            <Marker
              key={tool.id}
              position={[lat, lng]}
              icon={createPulseIcon(tool.status === 'running' ? '#10b981' : '#f59e0b')}
              eventHandlers={{ click: () => onSelect(tool.id) }}
            >
              <Popup>
                <div className="min-w-[180px]">
                  <h3 className="font-bold">{tool.name}</h3>
                  <p className="text-xs text-slate-500">{tool.role}</p>
                  <p className="mt-1 text-xs">
                    Status:{' '}
                    <span
                      className={
                        tool.status === 'running' ? 'text-green-600' : 'text-amber-600'
                      }
                    >
                      {tool.status}
                    </span>
                  </p>
                  {tool.models && (
                    <p className="text-xs text-slate-500">
                      Models: {tool.models.join(', ')}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}

      {/* Domain Nodes */}
      {showDomains &&
        DOMAIN_NODES.map((node) => (
          <Marker
            key={node.id}
            position={[node.lat, node.lng]}
            icon={createPulseIcon(node.color)}
            eventHandlers={{ click: () => onSelect(node.id) }}
            opacity={selected && selected !== node.id ? 0.4 : 1}
          >
            <Popup>
              <DomainPopupContent node={node} />
            </Popup>
          </Marker>
        ))}

      {/* Cross-links */}
      {showLinks &&
        CROSS_LINKS.map((link) => {
          const from = DOMAIN_NODES.find((d) => d.id === link.from);
          const to = DOMAIN_NODES.find((d) => d.id === link.to);
          if (!from || !to) return null;
          return (
            <Polyline
              key={`${link.from}-${link.to}`}
              positions={[
                [from.lat, from.lng],
                [to.lat, to.lng],
              ]}
              pathOptions={{
                color: link.active ? '#10b981' : '#64748b',
                weight: link.active ? 3 : 1,
                dashArray: link.active ? undefined : '5, 5',
                opacity: 0.7,
              }}
            />
          );
        })}

      {/* Layer 0 audit links */}
      {showLayer0 &&
        LAYER0_LINKS.map((link) => {
          const from = getEntityPosition(link.from);
          const to = getEntityPosition(link.to);
          if (!from || !to) return null;
          return (
            <Polyline
              key={`layer0-${link.from}-${link.to}`}
              positions={[
                [from.lat, from.lng],
                [to.lat, to.lng],
              ]}
              pathOptions={{
                color: link.active ? '#f43f5e' : '#94a3b8',
                weight: link.active ? 2 : 1,
                dashArray: '3, 6',
                opacity: 0.8,
              }}
            />
          );
        })}

      {/* Five Fires strategy overlay */}
      {showFires &&
        fireCentroids.map(
          (entry) =>
            entry && (
              <CircleMarker
                key={entry.fire.id}
                center={[entry.lat, entry.lng]}
                radius={18 + entry.count * 1.5}
                pathOptions={{
                  color: entry.fire.color,
                  fillColor: entry.fire.color,
                  fillOpacity: 0.12,
                  weight: 2,
                  dashArray: '4, 4',
                }}
              >
                <Popup>
                  <div className="min-w-[220px] p-1 font-sans">
                    <h3 className="font-bold text-slate-900" style={{ color: entry.fire.color }}>
                      {entry.fire.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">{entry.fire.description}</p>
                    <div className="mt-2 text-xs text-slate-500">
                      {entry.count} domain{entry.count === 1 ? '' : 's'} stoking this fire
                    </div>
                  </div>
                </Popup>
              </CircleMarker>
            )
        )}
    </MapContainer>
  );
}
