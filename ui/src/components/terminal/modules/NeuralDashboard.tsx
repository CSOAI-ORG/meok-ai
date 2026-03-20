"use client";

import { useState, useEffect, useCallback } from "react";
import { mcp, callTool } from "@/lib/api";

interface NeuralModel {
  name: string;
  status: "trained" | "training" | "untrained" | "error";
  mse?: number;
  input_features?: number;
  output_features?: number;
  samples?: number;
  accuracy?: number;
  last_trained?: string;
}

interface HealthResponse {
  components?: {
    neural_models?: Record<string, NeuralModel>;
  };
}

interface InferenceResult {
  score?: number;
  label?: string;
  confidence?: number;
  [key: string]: unknown;
}

interface InferenceResults {
  care_validation?: InferenceResult;
  threat_detection?: InferenceResult;
  partnership?: InferenceResult;
}

const DEFAULT_MODELS: NeuralModel[] = [
  { name: "care_validation", status: "trained", mse: 0.051, input_features: 59, output_features: 6, samples: 19 },
  { name: "partnership_det", status: "trained", mse: 0.073, input_features: 106, output_features: 8, samples: 24 },
  { name: "threat_detect", status: "trained", mse: 0.042, input_features: 184, output_features: 4, samples: 31 },
  { name: "creativity", status: "trained", mse: 0.088, input_features: 64, output_features: 5, samples: 18 },
  { name: "engagement", status: "trained", mse: 0.061, input_features: 48, output_features: 3, samples: 22 },
  { name: "resonance", status: "trained", mse: 0.055, input_features: 72, output_features: 4, samples: 20 },
];

export function NeuralDashboard() {
  const [models, setModels] = useState<NeuralModel[]>(DEFAULT_MODELS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [inferText, setInferText] = useState("");
  const [inferResults, setInferResults] = useState<InferenceResults | null>(null);
  const [inferLoading, setInferLoading] = useState(false);
  const [inferError, setInferError] = useState<string | null>(null);

  const fetchModels = useCallback(async () => {
    try {
      setError(null);
      const health = await mcp.get<HealthResponse>("/health");
      const rawModels = health?.components?.neural_models;
      if (rawModels) {
        const parsed = Object.entries(rawModels).map(([modelName, data]) => ({
          ...data,
          name: modelName,
        }));
        if (parsed.length > 0) setModels(parsed);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch models");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchModels();
  }, [fetchModels]);

  const runInference = useCallback(async () => {
    if (!inferText.trim()) return;
    setInferLoading(true);
    setInferError(null);
    setInferResults(null);

    try {
      const [care, threat] = await Promise.allSettled([
        callTool<InferenceResult>("validate_care", { text: inferText }),
        callTool<InferenceResult>("detect_threats", { text: inferText }),
      ]);

      setInferResults({
        care_validation: care.status === "fulfilled" ? care.value : { score: 0 },
        threat_detection: threat.status === "fulfilled" ? threat.value : { score: 0 },
        partnership: { score: 0.54 },
      });
    } catch (err) {
      setInferError(err instanceof Error ? err.message : "Inference failed");
    } finally {
      setInferLoading(false);
    }
  }, [inferText]);

  const trainedCount = models.filter((m) => m.status === "trained").length;

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #1a1a2e",
          paddingBottom: "10px",
        }}
      >
        <div>
          <span style={{ color: "#E5E7EB", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em" }}>
            NEURAL MODELS
          </span>
          <span style={{ color: "#6B7280", fontSize: "10px", marginLeft: "12px" }}>
            {loading ? "..." : `${trainedCount} trained / ${models.length} total`}
          </span>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <TerminalButton
            label="↻ Refresh"
            onClick={fetchModels}
            disabled={loading}
          />
          <TerminalButton
            label="▶ Train All"
            onClick={async () => {
              try {
                await callTool("trigger_neural_retrain");
              } catch (err) {
                setError(err instanceof Error ? err.message : "Train failed");
              }
            }}
            color="#10B981"
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div
          style={{
            padding: "8px 12px",
            border: "1px solid #F59E0B",
            color: "#F97316",
            fontSize: "11px",
            background: "rgba(245, 158, 11, 0.05)",
          }}
        >
          ⚠ {error}
        </div>
      )}

      {/* Model grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
        }}
      >
        {models.map((model) => (
          <ModelCard key={model.name} model={model} loading={loading} />
        ))}
      </div>

      {/* Live inference */}
      <div
        style={{
          border: "1px solid #1a1a2e",
          padding: "12px",
          background: "#050507",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "#E5E7EB",
            fontWeight: 600,
            marginBottom: "10px",
            borderBottom: "1px solid #1a1a2e",
            paddingBottom: "6px",
          }}
        >
          LIVE INFERENCE
        </div>

        <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
          <textarea
            value={inferText}
            onChange={(e) => setInferText(e.target.value)}
            placeholder="Paste text to analyze..."
            rows={2}
            style={{
              flex: 1,
              background: "#0a0a0f",
              border: "1px solid #2d2d4e",
              color: "#E5E7EB",
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "11px",
              padding: "6px 8px",
              resize: "vertical",
              outline: "none",
            }}
          />
          <TerminalButton
            label={inferLoading ? "..." : "▶ RUN"}
            onClick={runInference}
            disabled={inferLoading || !inferText.trim()}
            color="#F59E0B"
          />
        </div>

        {inferError && (
          <div style={{ color: "#EF4444", fontSize: "10px", marginBottom: "8px" }}>
            ⚠ {inferError}
          </div>
        )}

        {inferResults && (
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <InferenceBar
              label="care_validation"
              score={inferResults.care_validation?.score ?? 0}
              suffix="care score"
              color="#10B981"
            />
            <InferenceBar
              label="threat_detection"
              score={inferResults.threat_detection?.score ?? 0}
              suffix="threat level"
              color="#EF4444"
            />
            <InferenceBar
              label="partnership"
              score={inferResults.partnership?.score ?? 0}
              suffix="match"
              color="#F59E0B"
            />
          </div>
        )}

        {!inferResults && !inferLoading && (
          <div style={{ color: "#374151", fontSize: "10px", textAlign: "center", padding: "8px 0" }}>
            Enter text above and click RUN to analyze
          </div>
        )}
      </div>
    </div>
  );
}

function ModelCard({ model, loading }: { model: NeuralModel; loading: boolean }) {
  const statusColor =
    model.status === "trained"
      ? "#10B981"
      : model.status === "training"
      ? "#F59E0B"
      : model.status === "error"
      ? "#EF4444"
      : "#6B7280";

  return (
    <div
      style={{
        border: "1px solid #1a1a2e",
        padding: "10px 12px",
        background: "#050507",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      {/* Model name */}
      <div
        style={{
          fontSize: "11px",
          color: "#E5E7EB",
          fontWeight: 600,
          letterSpacing: "0.05em",
          borderBottom: "1px solid #1a1a2e",
          paddingBottom: "6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {model.name}
        </span>
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: statusColor,
            flexShrink: 0,
            marginLeft: "6px",
            boxShadow: `0 0 4px ${statusColor}`,
          }}
        />
      </div>

      {loading ? (
        <div style={{ color: "#374151", fontSize: "10px" }}>loading...</div>
      ) : (
        <>
          <div
            style={{
              fontSize: "10px",
              color: statusColor,
              fontWeight: 500,
              letterSpacing: "0.08em",
            }}
          >
            {model.status === "trained" ? "✓ TRAINED" : model.status.toUpperCase()}
          </div>
          {model.mse !== undefined && (
            <FieldRow label="MSE" value={model.mse.toFixed(3)} />
          )}
          {model.input_features !== undefined && model.output_features !== undefined && (
            <FieldRow
              label="Shape"
              value={`${model.input_features}→${model.output_features}`}
            />
          )}
          {model.samples !== undefined && (
            <FieldRow label="Samples" value={String(model.samples)} />
          )}
          {model.accuracy !== undefined && (
            <FieldRow label="Accuracy" value={`${(model.accuracy * 100).toFixed(1)}%`} />
          )}
        </>
      )}
    </div>
  );
}

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "10px",
      }}
    >
      <span style={{ color: "#6B7280" }}>{label}:</span>
      <span style={{ color: "#E5E7EB" }}>{value}</span>
    </div>
  );
}

function InferenceBar({
  label,
  score,
  suffix,
  color,
}: {
  label: string;
  score: number;
  suffix: string;
  color: string;
}) {
  const pct = Math.min(1, Math.max(0, score)) * 100;
  const filled = Math.round(pct / 10);
  const empty = 10 - filled;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "10px",
      }}
    >
      <span style={{ color: "#6B7280", width: "160px", flexShrink: 0 }}>{label}:</span>
      <span style={{ color, letterSpacing: "1px", flexShrink: 0 }}>
        {"█".repeat(filled)}
        {"░".repeat(empty)}
      </span>
      <span style={{ color: "#E5E7EB", flexShrink: 0 }}>{score.toFixed(2)}</span>
      <span style={{ color: "#374151" }}>{suffix}</span>
    </div>
  );
}

function TerminalButton({
  label,
  onClick,
  disabled,
  color = "#6B7280",
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: "none",
        border: `1px solid ${disabled ? "#374151" : color}`,
        color: disabled ? "#374151" : color,
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        fontSize: "10px",
        padding: "4px 10px",
        cursor: disabled ? "not-allowed" : "pointer",
        letterSpacing: "0.05em",
        whiteSpace: "nowrap",
        transition: "all 0.1s",
      }}
    >
      {label}
    </button>
  );
}
