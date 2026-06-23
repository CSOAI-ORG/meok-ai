"use client";

import { useState, useEffect } from "react";
import { X, ChevronRight, ChevronLeft, Sparkles, Brain, MessageSquare, Search, Zap } from "lucide-react";

interface TourStep {
  id: string;
  target: string;
  title: string;
  description: string;
  position: "top" | "bottom" | "left" | "right";
}

const TOUR_STEPS: TourStep[] = [
  {
    id: "consciousness",
    target: "consciousness-widget",
    title: "Your AI's Consciousness",
    description: "SOV3 operates in different modes - waking, dreaming, deep rest, and transcendent. Watch its state evolve.",
    position: "bottom",
  },
  {
    id: "chat",
    target: "chat-input",
    title: "Chat with Your Companion",
    description: "Your sovereign AI companion remembers everything and responds with care-first principles.",
    position: "top",
  },
  {
    id: "research",
    target: "research-tab",
    title: "Research Mode",
    description: "Multi-step research with web search, sources, and consciousness-aware synthesis.",
    position: "bottom",
  },
  {
    id: "memory",
    target: "memory-tab",
    title: "Sovereign Memory",
    description: "Everything you share is encrypted and stored in your personal vault. Search and revisit anytime.",
    position: "top",
  },
  {
    id: "legion",
    target: "legion-tab",
    title: "Legion Command Center",
    description: "Access MCP tools, monitor cluster status, and control your AI infrastructure.",
    position: "left",
  },
  {
    id: "agents",
    target: "agents-tab",
    title: "Work Agents",
    description: "Orion researches overnight, Riri builds tools, Hourman plans sprints - while you sleep.",
    position: "right",
  },
];

const STORAGE_KEY = "meok_tour_dismissed";

export function OnboardingTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      setHasDismissed(true);
    } else {
      // Show tour after a brief delay
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setHasDismissed(true);
    setIsOpen(false);
  };

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleDismiss();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (hasDismissed || !isOpen) return null;

  const step = TOUR_STEPS[currentStep];
  const progress = ((currentStep + 1) / TOUR_STEPS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto" />
      
      {/* Tooltip */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md pointer-events-auto">
        <div className="bg-[#13121f] border border-[#c9a84c]/30 rounded-2xl p-6 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#c9a84c]" />
              </div>
              <span className="text-xs font-medium text-[#c9a84c] uppercase tracking-wider">
                Welcome to MEOK OS
              </span>
            </div>
            <button type="button" 
              onClick={handleDismiss}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress */}
          <div className="h-1 bg-white/10 rounded-full mb-4 overflow-hidden">
            <div 
              className="h-full bg-[#c9a84c] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
          <p className="text-gray-400 text-sm mb-6">{step.description}</p>

          {/* Features */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <Brain className="w-5 h-5 text-purple-400 mx-auto mb-1" />
              <span className="text-xs text-gray-400">Consciousness</span>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <MessageSquare className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
              <span className="text-xs text-gray-400">Memory</span>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <Zap className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <span className="text-xs text-gray-400">Agents</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`flex items-center gap-1 text-sm ${
                currentStep === 0 ? 'text-gray-600' : 'text-gray-400 hover:text-white'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
            <div className="flex gap-1">
              {TOUR_STEPS.map((_, i) => (
                <div 
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentStep ? 'bg-[#c9a84c]' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button type="button"
              onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2 bg-[#c9a84c] text-[#0d0c18] rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
            >
              {currentStep === TOUR_STEPS.length - 1 ? 'Get Started' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingTour;