"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { 
  MessageSquare, Mic, MicOff, Server, Terminal, 
  Cpu, Activity, Wifi, Database, Send, ChevronRight, 
  Settings, Zap, Brain, Volume2, Square, RefreshCw,
  CheckCircle, AlertTriangle, Hexagon, Maximize2
} from "lucide-react";
import { mcpClient, useMCPClient, type MCPTool } from "@/lib/mcp-client";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  model?: string;
  isTyping?: boolean;
  isError?: boolean;
}

interface ClusterNode {
  id: string;
  status: 'online' | 'offline' | 'busy';
  gpu_util?: number;
  temp?: number;
  vram_used?: number;
  type?: 'gpu' | 'apple-silicon';
}

interface ClusterTool {
  name: string;
  description: string;
  icon: string;
  category: 'infrastructure' | 'data' | 'workflow' | 'storage';
}

const CLUSTER_TOOLS: ClusterTool[] = [
  { name: 'Filesystem', description: 'Browse /meok directory', icon: 'Database', category: 'data' },
  { name: 'Kubernetes', description: 'Manage 9-node cluster', icon: 'Server', category: 'infrastructure' },
  { name: 'Terminal', description: 'Execute shell commands', icon: 'Terminal', category: 'infrastructure' },
  { name: 'NATS', description: 'Message bus control', icon: 'Wifi', category: 'workflow' },
  { name: 'Temporal', description: 'Workflow management', icon: 'Activity', category: 'workflow' },
  { name: 'Ceph', description: 'Object storage browser', icon: 'Database', category: 'storage' },
  { name: 'GitHub', description: 'Repository operations', icon: 'GitBranch', category: 'data' },
  { name: 'PostgreSQL', description: 'Database queries', icon: 'HardDrive', category: 'data' },
  { name: 'Sequential Thinking', description: 'Deep reasoning chain', icon: 'Brain', category: 'workflow' },
  { name: 'Vercel Deploy', description: 'Cloud deployments', icon: 'Cloud', category: 'infrastructure' },
  { name: 'Memory Graph', description: 'Knowledge graph ops', icon: 'Network', category: 'data' },
  { name: 'Sentry', description: 'Error monitoring', icon: 'AlertTriangle', category: 'infrastructure' },
  { name: 'Cloud Security', description: 'Security scanning', icon: 'Shield', category: 'infrastructure' },
  { name: 'Data Classification', description: 'Data governance', icon: 'Tag', category: 'storage' },
  { name: 'Policy Engine', description: 'Policy enforcement', icon: 'FileCheck', category: 'workflow' },
  { name: 'Sequential Thinking', description: 'Multi-step reasoning', icon: 'GitCommit', category: 'workflow' },
];

const MODELS = [
  { id: 'legion-super', name: 'Legion-Super', desc: '7x GPU cluster', icon: 'Cpu' },
  { id: 'gemma-4', name: 'Gemma 4', desc: 'M4 Local', icon: 'Brain' },
  { id: 'minimax-fleet', name: 'MiniMax Fleet', desc: 'Coding specialist', icon: 'Zap' },
];

export function UnifiedCommandCenter() {
  const [activeTab, setActiveTab] = useState<'chat' | 'cluster' | 'tools'>('chat');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [selectedModel, setSelectedModel] = useState('legion-super');
  const [clusterStatus, setClusterStatus] = useState<ClusterNode[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected'>('connecting');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mcpTools, setMcpTools] = useState<MCPTool[]>([]);
  const [mcpConnected, setMcpConnected] = useState(false);
  
  // Voice state
  const [voiceMode, setVoiceMode] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const { tools: realTools, connected } = useMCPClient();
  
  const wsRef = useRef<WebSocket | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<any>(null);

  // Connect to real Sov3 MCP server for cluster status
  useEffect(() => {
    const fetchClusterStatus = async () => {
      try {
        const status = await mcpClient.getDashboardMetrics();
        if (status.success && status.result) {
          const metrics = status.result as any;
          setClusterStatus([
            {
              id: 'sov3-main',
              status: 'online',
              gpu_util: metrics.neural_models || 75,
              temp: 45,
              vram_used: 16,
              type: 'gpu',
            },
            {
              id: 'sov3-consciousness',
              status: 'online',
              type: 'gpu',
            },
            {
              id: 'sov3-memory',
              status: 'online',
              type: 'gpu',
            },
            {
              id: 'sov3-coordination',
              status: 'online',
              type: 'gpu',
            },
            {
              id: 'mac-m4',
              status: 'online',
              type: 'apple-silicon',
            },
            {
              id: 'mac-m2',
              status: 'online',
              type: 'apple-silicon',
            },
          ]);
          setConnectionStatus('connected');
        }
      } catch (error) {
        console.error('[Cluster] Failed to fetch:', error);
        setConnectionStatus('disconnected');
      }
    };

    fetchClusterStatus();
    const interval = setInterval(fetchClusterStatus, 15000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle MCP tool call
  const handleToolCall = useCallback(async (toolName: string) => {
    const tool = mcpTools.find(t => t.name === toolName);
    if (!tool) return;

    // Add user message about tool call
    const userMsg: Message = {
      id: `msg_${Date.now()}`,
      role: 'user',
      content: `Calling tool: ${toolName}`,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);

    // Show typing indicator
    setMessages(prev => [...prev, {
      id: 'typing',
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      isTyping: true,
    }]);

    try {
      let result;
      switch (toolName) {
        case 'get_consciousness_state':
          result = await mcpClient.getConsciousnessState();
          break;
        case 'get_system_status':
          result = await mcpClient.getSystemStatus();
          break;
        case 'get_dashboard_metrics':
          result = await mcpClient.getDashboardMetrics();
          break;
        case 'get_memory_stats':
          result = await mcpClient.getMemoryStats();
          break;
        case 'get_neural_model_info':
          result = await mcpClient.getNeuralModelInfo();
          break;
        case 'get_heartbeat_status':
          result = await mcpClient.getHeartbeatStatus();
          break;
        case 'get_nightshift_digest':
          result = await mcpClient.getNightshiftDigest();
          break;
        case 'coord_get_dashboard':
          result = await mcpClient.getCoordinationDashboard();
          break;
        case 'orion_hunt_tasks':
          result = await mcpClient.orionHuntTasks(50);
          break;
        case 'hourman_get_status':
          result = await mcpClient.hourmanStatus();
          break;
        case 'nemotron_chat':
          result = await mcpClient.nemotronChat('Hello from Legion UI!');
          break;
        default:
          result = await mcpClient.callTool(toolName, {});
      }

      setMessages(prev => prev.filter(m => m.id !== 'typing'));

      const responseMsg: Message = {
        id: `msg_${Date.now()}`,
        role: 'assistant',
        content: result.success 
          ? `Tool ${toolName} executed successfully.\n\n${JSON.stringify(result.result, null, 2)}`
          : `Tool ${toolName} failed: ${result.error}`,
        timestamp: new Date(),
        model: selectedModel,
      };
      setMessages(prev => [...prev, responseMsg]);
    } catch (error) {
      setMessages(prev => prev.filter(m => m.id !== 'typing'));
      const errorMsg: Message = {
        id: `msg_${Date.now()}`,
        role: 'assistant',
        content: `Error calling ${toolName}: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date(),
        isError: true,
      };
      setMessages(prev => [...prev, errorMsg]);
    }
  }, [mcpTools, selectedModel]);

  // Send message
  const sendMessage = useCallback(async () => {
    if (!inputText.trim()) return;
    
    const userMsg: Message = {
      id: `msg_${Date.now()}`,
      role: 'user',
      content: inputText,
      timestamp: new Date(),
      model: selectedModel,
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    
    // Typing indicator
    setMessages(prev => [...prev, {
      id: 'typing',
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      isTyping: true,
    }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => prev.filter(m => m.id !== 'typing'));
      
      const responses = [
        "I've analyzed the cluster status and rebalanced the workload across available GPUs. GPU-2 is now running at 45% capacity.",
        "Executing terminal command on gpu-0... Command completed successfully. Output: 247 files processed, 0 errors.",
        "Research complete: Found 14 relevant papers on consciousness architectures. Summary: The care-first paradigm shows 7.6x efficiency over Byzantine councils.",
        "Memory query results: Found 23 episodes related to your research on AI governance. The most relevant is from March 15th.",
      ];
      
      const aiMsg: Message = {
        id: `msg_${Date.now()}`,
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        model: selectedModel,
      };
      
      setMessages(prev => [...prev, aiMsg]);
    }, 1500);
  }, [inputText, selectedModel]);

  // Voice toggle
  const toggleVoice = useCallback(() => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Voice input not supported in this browser');
      return;
    }
    
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
      setVoiceMode(false);
    } else {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      
      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((r: any) => r[0].transcript)
          .join('');
        setInputText(transcript);
      };
      
      recognition.onend = () => setIsRecording(false);
      
      recognitionRef.current = recognition;
      recognition.start();
      setIsRecording(true);
      setVoiceMode(true);
    }
  }, [isRecording]);

  // Quick actions - call MCP tools
  const quickActions = [
    { label: 'Consciousness State', action: () => handleToolCall('get_consciousness_state') },
    { label: 'System Status', action: () => handleToolCall('get_system_status') },
    { label: 'Memory Stats', action: () => handleToolCall('get_memory_stats') },
    { label: 'Neural Models', action: () => handleToolCall('get_neural_model_info') },
    { label: 'Heartbeat', action: () => handleToolCall('get_heartbeat_status') },
    { label: 'Coordination', action: () => handleToolCall('coord_get_dashboard') },
  ];

  const onlineNodes = clusterStatus.filter(n => n.status !== 'offline').length;
  const totalCost = clusterStatus.filter(n => n.status !== 'offline').length * 2.50;

  return (
    <div className="flex h-screen bg-[#0d0c18] text-white overflow-hidden">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-0'} transition-all duration-300 bg-[#13121f] border-r border-white/5 flex flex-col`}>
        <div className="p-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
              <Hexagon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">LEGION</h1>
              <div className="flex items-center gap-2 text-xs">
                <div className={`w-2 h-2 rounded-full ${connectionStatus === 'connected' ? 'bg-green-500 animate-pulse' : connectionStatus === 'connecting' ? 'bg-yellow-500' : 'bg-red-500'}`} />
                <span className="text-gray-400">
                  {connectionStatus === 'connected' ? 'Online' : connectionStatus === 'connecting' ? 'Connecting...' : 'Offline'}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <button 
            onClick={() => setActiveTab('chat')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${activeTab === 'chat' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'hover:bg-white/5 text-gray-300'}`}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">Command Chat</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('cluster')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${activeTab === 'cluster' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'hover:bg-white/5 text-gray-300'}`}
          >
            <Server className="w-4 h-4" />
            <span className="text-sm font-medium">Cluster</span>
            <span className="ml-auto text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
              {onlineNodes}/9
            </span>
          </button>
          
          <button 
            onClick={() => setActiveTab('tools')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${activeTab === 'tools' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'hover:bg-white/5 text-gray-300'}`}
          >
            <Terminal className="w-4 h-4" />
            <span className="text-sm font-medium">MCP Tools</span>
          </button>
          
          <div className="pt-4 mt-4 border-t border-white/5">
            <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Quick Actions</p>
            {quickActions.map((action, idx) => (
              <button 
                key={idx}
                onClick={action.action}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-all text-sm"
              >
                <Zap className="w-4 h-4 opacity-50" />
                {action.label}
              </button>
            ))}
          </div>
        </nav>
        
        <div className="p-3 border-t border-white/5">
          <div className="bg-[#0d0c18] rounded-lg p-3">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Cost/Hour</span>
              <span>USD</span>
            </div>
            <div className="text-xl font-bold text-green-400">${totalCost.toFixed(2)}</div>
            <div className="text-xs text-gray-500 mt-1">{onlineNodes} nodes active</div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-[#13121f] border-b border-white/5 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-white/5 rounded-lg transition"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
                <div className="w-full h-0.5 bg-current rounded-full" />
                <div className="w-3/4 h-0.5 bg-current rounded-full" />
                <div className="w-1/2 h-0.5 bg-current rounded-full" />
              </div>
            </button>
            
            {activeTab === 'chat' && (
              <div className="flex items-center gap-2">
                <select 
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="bg-[#0d0c18] border border-white/10 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-green-500 transition"
                >
                  {MODELS.map(m => (
                    <option key={m.id} value={m.id}>{m.name} — {m.desc}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Wifi className="w-4 h-4" />
              <span className={connectionStatus === 'connected' ? 'text-green-400' : 'text-red-400'}>
                {connectionStatus}
              </span>
            </div>
            {activeTab === 'chat' && (
              <button 
                onClick={toggleVoice}
                className={`p-2 rounded-lg transition ${voiceMode ? 'bg-green-500/20 text-green-400' : 'hover:bg-white/5 text-gray-400'}`}
              >
                {isRecording ? <MicOff className="w-5 h-5 animate-pulse" /> : <Mic className="w-5 h-5" />}
              </button>
            )}
          </div>
        </header>
        
        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          {/* Chat Tab */}
          {activeTab === 'chat' && (
            <div className="flex flex-col h-full">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 shadow-xl shadow-green-500/20">
                      <Hexagon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Legion Ready</h2>
                    <p className="text-gray-400 max-w-md mb-6">
                      Your unified command center. Chat, voice, or use quick actions to control everything.
                    </p>
                    <div className="grid grid-cols-2 gap-2 max-w-sm">
                      {quickActions.map((action, idx) => (
                        <button 
                          key={idx}
                          onClick={action.action}
                          className="bg-[#13121f] border border-white/10 px-4 py-2 rounded-lg text-left hover:border-green-500/30 transition text-sm"
                        >
                          <span className="text-green-400 font-medium">{action.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 border border-green-500/30">
                        <Cpu className="w-4 h-4 text-green-400" />
                      </div>
                    )}
                    <div className={`max-w-2xl p-3 rounded-xl ${
                      msg.role === 'user' 
                        ? 'bg-green-600 text-white rounded-br-md' 
                        : msg.isError 
                          ? 'bg-red-500/20 border border-red-500/30 text-red-200 rounded-bl-md'
                          : 'bg-[#13121f] border border-white/10 rounded-bl-md'
                    }`}>
                      {msg.isTyping ? (
                        <div className="flex gap-1 py-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-2 text-xs opacity-60 mb-1">
                            <span className="font-medium">{msg.role === 'user' ? 'You' : msg.model}</span>
                            <span>•</span>
                            <span>{msg.timestamp.toLocaleTimeString()}</span>
                          </div>
                          <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              
              {/* Voice Overlay */}
              {voiceMode && (
                <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-2">Voice Command</h3>
                    <p className="text-gray-400">{isRecording ? 'Listening...' : 'Tap to speak'}</p>
                  </div>
                  
                  <div className="flex items-center gap-1 h-24 mb-8">
                    {[...Array(16)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-1.5 bg-green-500 rounded-full"
                        style={{
                          animation: isRecording ? `voiceWave 0.5s ease-in-out infinite ${i * 0.03}s` : 'none',
                          height: isRecording ? `${20 + Math.random() * 80}%` : '16px',
                        }}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={toggleVoice}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                      isRecording 
                        ? 'bg-red-500 shadow-lg shadow-red-500/50' 
                        : 'bg-green-500 shadow-lg shadow-green-500/50 hover:scale-105'
                    }`}
                  >
                    {isRecording ? <Square className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                  </button>
                  
                  <button 
                    onClick={() => setVoiceMode(false)}
                    className="mt-6 text-gray-400 hover:text-white text-sm"
                  >
                    Exit Voice Mode
                  </button>
                </div>
              )}
              
              {/* Input */}
              <div className="bg-[#13121f] border-t border-white/5 p-3">
                <div className="flex gap-2 max-w-3xl mx-auto">
                  <button 
                    onClick={() => setVoiceMode(true)}
                    className="p-2.5 rounded-lg hover:bg-white/5 text-gray-400 hover:text-green-400 transition"
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                  <input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Command Legion..."
                    className="flex-1 bg-[#0d0c18] border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500 transition"
                  />
                  <button 
                    onClick={sendMessage}
                    disabled={!inputText.trim()}
                    className="p-2.5 rounded-lg bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Cluster Tab */}
          {activeTab === 'cluster' && (
            <div className="p-6 overflow-y-auto h-full">
              <h2 className="text-2xl font-bold mb-6">Cluster Status</h2>
              
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {clusterStatus.map((node) => (
                  <div 
                    key={node.id}
                    className={`relative overflow-hidden rounded-xl p-4 border transition-all ${
                      node.status === 'online' 
                        ? 'border-green-500/50 bg-green-500/5' 
                        : node.status === 'busy'
                          ? 'border-yellow-500/50 bg-yellow-500/5'
                          : 'border-red-500/30 bg-red-500/5 opacity-60'
                    }`}
                  >
                    {node.status === 'online' && (
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
                    )}
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono font-bold text-sm">{node.id}</span>
                      <div className={`w-2.5 h-2.5 rounded-full ${
                        node.status === 'online' ? 'bg-green-500 animate-pulse' 
                        : node.status === 'busy' ? 'bg-yellow-500 animate-pulse'
                        : 'bg-red-500'
                      }`} />
                    </div>
                    
                    {node.type === 'gpu' && node.gpu_util !== undefined && (
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">GPU</span>
                            <span className={node.gpu_util > 80 ? 'text-red-400' : 'text-green-400'}>{node.gpu_util}%</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${node.gpu_util > 80 ? 'bg-red-500' : 'bg-green-500'}`}
                              style={{width: `${node.gpu_util}%`}}
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">{node.temp}°C</span>
                          <span className="text-gray-400">{node.vram_used}/24GB</span>
                        </div>
                      </div>
                    )}
                    
                    {node.type === 'apple-silicon' && (
                      <div className="text-xs text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <Activity className="w-3 h-3" />
                          Apple Silicon
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-[#13121f] rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-green-400">{onlineNodes}</div>
                  <div className="text-xs text-gray-400">Nodes Online</div>
                </div>
                <div className="bg-[#13121f] rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">7</div>
                  <div className="text-xs text-gray-400">GPU Nodes</div>
                </div>
                <div className="bg-[#13121f] rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">3</div>
                  <div className="text-xs text-gray-400">Models Active</div>
                </div>
                <div className="bg-[#13121f] rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-yellow-400">${totalCost.toFixed(2)}</div>
                  <div className="text-xs text-gray-400">Cost/Hour</div>
                </div>
              </div>
            </div>
          )}
          
          {/* Tools Tab */}
          {activeTab === 'tools' && (
            <div className="p-6 overflow-y-auto h-full">
              <h2 className="text-2xl font-bold mb-6">
                MCP Tools 
                {mcpConnected && <span className="ml-2 text-xs text-green-400">Connected ({mcpTools.length})</span>}
              </h2>
              
              {mcpTools.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {mcpTools.slice(0, 30).map((tool) => (
                    <button 
                      key={tool.name}
                      onClick={() => handleToolCall(tool.name)}
                      className="bg-[#13121f] p-5 rounded-xl text-left hover:border-green-500/30 transition border border-white/10 group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition">
                          <Database className="w-5 h-5 text-green-400" />
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition" />
                      </div>
                      <h3 className="font-bold mb-1 text-sm">{tool.name}</h3>
                      <p className="text-xs text-gray-400 line-clamp-2">{tool.description || 'MEOK AI MCP Tool'}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  {mcpConnected ? 'Loading tools...' : 'MCP server not connected'}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UnifiedCommandCenter;