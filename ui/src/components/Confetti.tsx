"use client";

import { useEffect, useState, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  velocityX: number;
  velocityY: number;
  rotationSpeed: number;
}

interface ConfettiProps {
  trigger: boolean;
  onComplete?: () => void;
  particleCount?: number;
  duration?: number;
}

const colors = [
  "#c9a84c", // Gold
  "#22c55e", // Green
  "#3b82f6", // Blue
  "#a855f7", // Purple
  "#f472b6", // Pink
  "#fbbf24", // Yellow
];

export function Confetti({
  trigger,
  onComplete,
  particleCount = 100,
  duration = 3000,
}: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isActive, setIsActive] = useState(false);

  const createParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
      const velocity = 5 + Math.random() * 10;

      newParticles.push({
        id: i,
        x: centerX,
        y: centerY,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 6 + Math.random() * 8,
        rotation: Math.random() * 360,
        velocityX: Math.cos(angle) * velocity,
        velocityY: Math.sin(angle) * velocity - 5, // Initial upward burst
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }

    setParticles(newParticles);
    setIsActive(true);

    // Stop after duration
    setTimeout(() => {
      setIsActive(false);
      setParticles([]);
      onComplete?.();
    }, duration);
  }, [particleCount, duration, onComplete]);

  useEffect(() => {
    if (trigger && !isActive) {
      createParticles();
    }
  }, [trigger, isActive, createParticles]);

  // Animation frame for physics
  useEffect(() => {
    if (!isActive || particles.length === 0) return;

    let animationId: number;
    const gravity = 0.3;
    const drag = 0.98;

    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: p.x + p.velocityX,
          y: p.y + p.velocityY,
          velocityX: p.velocityX * drag,
          velocityY: p.velocityY * drag + gravity,
          rotation: p.rotation + p.rotationSpeed,
        }))
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isActive, particles.length]);

  if (!isActive || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            boxShadow: `0 0 6px ${p.color}50`,
          }}
        />
      ))}
    </div>
  );
}

// Hook for easy confetti triggering
export function useConfetti() {
  const [trigger, setTrigger] = useState(false);

  const fire = useCallback(() => {
    setTrigger(true);
    setTimeout(() => setTrigger(false), 100);
  }, []);

  return { trigger, fire };
}
