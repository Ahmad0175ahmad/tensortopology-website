'use client';

import { useState, useEffect } from 'react';
import { AgentGraph } from './AgentGraph';
import { TopologyArt } from './TopologyArt';

export function Hero() {
  const [motionMode, setMotionMode] = useState<'full' | 'reduced'>('full');
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMotionMode(mediaQuery.matches ? 'reduced' : 'full');

    if (mediaQuery.matches) {
      setAnimationComplete(true);
    } else {
      // Animation duration is about 2 seconds
      const timer = setTimeout(() => setAnimationComplete(true), 2000);
      return () => clearTimeout(timer);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setMotionMode(e.matches ? 'reduced' : 'full');
      if (e.matches) setAnimationComplete(true);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section
      data-hero
      data-motion={motionMode}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Split halves container */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        {/* Left half - AI & Automation */}
        <div className="group relative flex-1 flex items-center justify-center p-8 transition-all duration-500 hover:flex-[1.14] cursor-pointer overflow-hidden">
          {/* Background with glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-bp-700/60 via-bp-700/40 to-bp-900/60 group-hover:from-neuron/20 group-hover:via-bp-700/50 transition-all duration-500" />
          
          {/* Glow overlay on hover */}
          <div className="absolute inset-0 bg-neuron/0 group-hover:bg-neuron/10 transition-all duration-500" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-64 h-64 bg-neuron/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neuron/20 rounded-full blur-3xl" />
          </div>

          {/* Diagram - NOT clickable */}
          <div className="absolute inset-0 flex items-end justify-center pb-8">
            <div className="w-full max-w-md opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none">
              <AgentGraph />
            </div>
          </div>

          {/* Content - ABOVE the diagram */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-20 w-full px-4">
            <p className="text-paper/90 mb-4 text-xs lg:text-sm drop-shadow-lg font-medium">
              Agents, RAG and automation that do real work.
            </p>
            <a
              href="#ai-automation"
              className="inline-block px-6 py-3 bg-neuron hover:bg-neuron/90 text-bp-900 rounded-lg font-semibold shadow-lg hover:shadow-neuron/50 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              See AI & Automation
            </a>
          </div>

          {/* Pink pulse animation (from far left) */}
          {motionMode === 'full' && !animationComplete && (
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-neuron rounded-full blur-lg animate-pulse-right z-30"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Seam - where the pulses meet */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-paper/30 to-transparent z-20" />

        {/* Right half - Networking */}
        <div className="group relative flex-1 flex items-center justify-center p-8 transition-all duration-500 hover:flex-[1.14] cursor-pointer overflow-hidden">
          {/* Background with glow effect */}
          <div className="absolute inset-0 bg-gradient-to-bl from-bp-700/40 via-bp-700/30 to-bp-900/60 group-hover:from-fiber/20 group-hover:via-bp-700/50 transition-all duration-500" />
          
          {/* Glow overlay on hover */}
          <div className="absolute inset-0 bg-fiber/0 group-hover:bg-fiber/10 transition-all duration-500" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fiber/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-fiber/20 rounded-full blur-3xl" />
          </div>

          {/* Content - ABOVE the topology, same as AI side */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-20 w-full px-4">
            <p className="text-paper/90 mb-4 text-xs lg:text-sm drop-shadow-lg font-medium">
              Networks, security and infrastructure that stay up.
            </p>
            <a
              href="#networking"
              className="inline-block px-6 py-3 bg-fiber hover:bg-fiber/90 text-bp-900 rounded-lg font-semibold shadow-lg hover:shadow-fiber/50 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              See Networking
            </a>
          </div>

          {/* Topology art - lower down to make room for text above */}
          <div className="absolute inset-0 flex items-end justify-center pb-8">
            <div className="w-full max-w-md opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none">
              <TopologyArt />
            </div>
          </div>

          {/* Orange pulse animation (from far right) */}
          {motionMode === 'full' && !animationComplete && (
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-fiber rounded-full blur-lg animate-pulse-left z-30"
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse-right {
          0% {
            left: 0;
            opacity: 1;
          }
          45% {
            left: 50%;
            opacity: 1;
          }
          50% {
            left: 50%;
            opacity: 0;
          }
          100% {
            left: 50%;
            opacity: 0;
          }
        }

        @keyframes pulse-left {
          0% {
            right: 0;
            opacity: 1;
          }
          45% {
            right: 50%;
            opacity: 1;
          }
          50% {
            right: 50%;
            opacity: 0;
          }
          100% {
            right: 50%;
            opacity: 0;
          }
        }

        .animate-pulse-right {
          animation: pulse-right 2s ease-in-out forwards;
        }

        .animate-pulse-left {
          animation: pulse-left 2s ease-in-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-right,
          .animate-pulse-left {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
