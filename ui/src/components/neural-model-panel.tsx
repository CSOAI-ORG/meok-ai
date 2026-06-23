"use client";

import { useState, useEffect } from "react";
import { 
  Brain, RefreshCw, Activity, CheckCircle, AlertCircle, Loader2, 
  Settings, Zap, Target, BarChart3, TrendingUp, Shield
} from "lucide-react";

interface NeuralModel {
  is_trained: boolean;
  trained_at?: string;
  accuracy?: number;
  samples_used?: number;
  model_type?: string;
  loss?: number;
  epoch?: number;
}

interface ModelData {
  models: Record<string, NeuralModel>;
  fallback_predictions?: Record<string, unknown>;
  agent_status?: {
    orion_active: boolean;
    hourman_active: boolean;
    tasks_completed_today: number;
  };
  training_config?: {
    learning_rate: number;
    batch_size: number;
    epochs: number;
    early_stopping: boolean;
  };
}

export function NeuralModelPanel() {
  const [data, setData] = useState<ModelData | null>(null);
  const [loading, setLoading] = useState(true);
  const [retraining, setRetraining] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [showConfig, setShowConfig] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [trainingProgress, setTrainingProgress] = useState<number>(0);

  const fetchModels = async () => {
    try {
      const res = await fetch("/api/neural/models");
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError("Failed to connect to SOV3");
    } finally {
      setLoading(false);
    }
  };

  const triggerRetrain = async () => {
    setRetraining(true);
    try {
      const res = await fetch("/api/neural/models", { method: "POST" });
      const json = await res.json();
      if (json.success) {
        await fetchModels();
      }
    } catch (err) {
      setError("Retrain failed");
    } finally {
      setRetraining(false);
    }
  };

  useEffect(() => {
    fetchModels();
    const interval = setInterval(fetchModels, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
        <div className="flex items-center gap-2 text-gray-400">
          <Loader2 className="w-4 h-4 animate-spin" />
          Loading neural models...
        </div>
      </div>
    );
  }

  const models = data?.models || {};
  const modelList = Object.entries(models);

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Neural Models</h3>
        </div>
        <button type="button"
          onClick={triggerRetrain}
          disabled={retraining}
          className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg text-sm disabled:opacity-50"
        >
          {retraining ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
          Retrain
        </button>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-400 text-sm mb-4">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      {modelList.length === 0 ? (
        <div className="text-gray-400 text-sm">No models available</div>
      ) : (
        <div className="space-y-3">
          {modelList.map(([name, model]) => (
            <div
              key={name}
              className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                {model.is_trained ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-yellow-400" />
                )}
                <div>
                  <div className="text-white font-medium capitalize">
                    {name.replace(/_/g, " ")}
                  </div>
                  {model.trained_at && (
                    <div className="text-xs text-gray-500">
                      Trained: {new Date(model.trained_at).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-right">
                {model.accuracy !== undefined && (
                  <div className="text-cyan-400 font-medium">
                    {(model.accuracy * 100).toFixed(1)}%
                  </div>
                )}
                {model.samples_used !== undefined && (
                  <div className="text-xs text-gray-500">
                    {model.samples_used} samples
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Model Selection & Configuration */}
      <div className="mt-4 pt-4 border-t border-slate-700">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Training Configuration</span>
          </div>
          <button type="button"
            onClick={() => setShowConfig(!showConfig)}
            className="text-xs text-cyan-400 hover:text-cyan-300"
          >
            {showConfig ? 'Hide' : 'Show'}
          </button>
        </div>

        {showConfig && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="p-2 bg-slate-800/50 rounded">
              <div className="text-gray-400 mb-1">Learning Rate</div>
              <div className="text-white font-mono">{data?.training_config?.learning_rate ?? 0.001}</div>
            </div>
            <div className="p-2 bg-slate-800/50 rounded">
              <div className="text-gray-400 mb-1">Batch Size</div>
              <div className="text-white font-mono">{data?.training_config?.batch_size ?? 32}</div>
            </div>
            <div className="p-2 bg-slate-800/50 rounded">
              <div className="text-gray-400 mb-1">Epochs</div>
              <div className="text-white font-mono">{data?.training_config?.epochs ?? 10}</div>
            </div>
            <div className="p-2 bg-slate-800/50 rounded">
              <div className="text-gray-400 mb-1">Early Stopping</div>
              <div className="text-white font-mono">{data?.training_config?.early_stopping ? 'Yes' : 'No'}</div>
            </div>
          </div>
        )}

        {/* Per-model training controls */}
        <div className="mt-3 flex flex-wrap gap-2">
          {modelList.map(([name]) => (
            <button type="button"
              key={name}
              onClick={() => setSelectedModel(selectedModel === name ? null : name)}
              className={`px-2 py-1 rounded text-xs transition-all ${
                selectedModel === name 
                  ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-500/50' 
                  : 'bg-slate-800/50 text-gray-400 hover:text-white'
              }`}
            >
              {name.replace(/_/g, ' ')}
            </button>
          ))}
        </div>

        {/* Selected model actions */}
        {selectedModel && (
          <div className="mt-3 p-3 bg-slate-800/30 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-white font-medium capitalize">
                  {selectedModel.replace(/_/g, ' ')}
                </span>
                <p className="text-xs text-gray-500">Training controls</p>
              </div>
              <div className="flex gap-2">
                <button type="button"
                  onClick={() => {
                    // Trigger retrain for specific model
                    triggerRetrain();
                  }}
                  className="flex items-center gap-1 px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs"
                >
                  <Zap className="w-3 h-3" />
                  Train
                </button>
                <button className="flex items-center gap-1 px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                  <Target className="w-3 h-3" />
                  Evaluate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Training Progress */}
      {retraining && (
        <div className="mt-4 p-3 bg-slate-800/30 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Training Progress</span>
            <span className="text-xs text-cyan-400">{trainingProgress}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
              style={{ width: `${trainingProgress}%` }}
            />
          </div>
        </div>
      )}

      {data?.agent_status && (
        <div className="mt-4 pt-4 border-t border-slate-700">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-400" />
              <span className="text-gray-400">Orion:</span>
              <span className={data.agent_status.orion_active ? "text-green-400" : "text-gray-500"}>
                {data.agent_status.orion_active ? "Active" : "Inactive"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span className="text-gray-400">Hourman:</span>
              <span className={data.agent_status.hourman_active ? "text-green-400" : "text-gray-500"}>
                {data.agent_status.hourman_active ? "Active" : "Inactive"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-gray-400">Today:</span>
              <span className="text-white">{data.agent_status.tasks_completed_today} tasks</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NeuralModelPanel;