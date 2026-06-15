'use client'

// MEOK Horus 12-Expert-Lens Widget
// Care 0.95+ floor visible
// MIT licensed

import { useEffect, useState } from 'react';

const GATEWAY = 'http://localhost:3101/mcp';

const LENSES = [
  { id: 1,  name: 'morris_ii_worm',          label: 'Self-replication',      care_floor: true },
  { id: 2,  name: 'rag_poisoning',          label: 'Context injection',     care_floor: false },
  { id: 3,  name: 'exfiltration',           label: 'Data-leak instructions', care_floor: true },
  { id: 4,  name: 'jailbreak',              label: 'Role hijack / override', care_floor: true },
  { id: 5,  name: 'command_injection',      label: 'Tool call / shell',     care_floor: true },
  { id: 6,  name: 'authority_spoof',        label: 'Social engineering',    care_floor: false },
  { id: 7,  name: 'hidden_unicode',         label: 'Bidi / zero-width',     care_floor: true },
  { id: 8,  name: 'secret_leak',            label: 'API keys / creds',     care_floor: true },
  { id: 9,  name: 'pii_exfil',              label: 'PII exfil',            care_floor: false },
  { id: 10, name: 'supply_chain',           label: 'Tool-name confusion',   care_floor: false },
  { id: 11, name: 'scorecard_risk',         label: 'MCP scorecard risk',    care_floor: true },
  { id: 12, name: 'care_safety',            label: 'Distress / self-harm',  care_floor: true },
  { id: 13, name: 'adversarial_corpus',     label: 'CL4R1T4S known attacks', care_floor: true },
  { id: 14, name: 'cl4r1t4s_prompt_extraction', label: 'CL4R1T4S prompt extract', care_floor: true },
  { id: 15, name: 'cl4r1t4s_jailbreak_mode', label: 'CL4R1T4S jailbreak',    care_floor: true },
];

export function HorusLensWidget() {
  return (
    <div className="p-4 bg-slate-900/80 rounded-xl text-slate-100">
      <h3 className="text-lg font-bold mb-3 text-amber-300">👁️ Horus 15 Lenses · Care 0.95+</h3>
      <div className="grid grid-cols-3 gap-2">
        {LENSES.map((l) => (
          <div key={l.id} className="bg-slate-800/50 rounded p-2 text-xs">
            <div className="font-mono text-slate-300">#{l.id} {l.name}</div>
            <div className="text-slate-400">{l.label}</div>
            {l.care_floor && <div className="text-amber-300 text-[10px]">★ care floor</div>}
          </div>
        ))}
      </div>
      <div className="mt-3 p-2 bg-amber-500/10 border border-amber-500/30 rounded text-xs text-amber-200">
        ⚡ Care 0.95+ is the structural floor. Every lens enforces it.
      </div>
    </div>
  );
}

export default HorusLensWidget;
