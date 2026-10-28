'use client';

import { supportPlans } from '@/content/skills';
import { Sheet } from '../ui/Sheet';
import { Shield, Zap, Crown } from 'lucide-react';
import { useState } from 'react';

const icons = [Shield, Zap, Crown];

export function SupportPlans() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-heading font-bold text-fiber mb-8 flex items-center gap-3">
        <span className="w-2 h-2 bg-fiber rounded-full animate-pulse" />
        Support plans
        <span className="w-2 h-2 bg-fiber rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {supportPlans.map((plan, idx) => {
          const Icon = icons[idx];
          return (
            <div
              key={plan.name}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              className="group relative flex"
            >
              {/* Animated glow effect - reduced intensity */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-fiber/30 via-fiber/20 to-fiber/30 opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-500 rounded-xl`} />
              
              {/* Card with fixed height */}
              <div className="relative flex-1 p-6 rounded-xl border-2 border-fiber/30 bg-gradient-to-br from-fiber/10 via-fiber/5 to-transparent transition-all duration-300 group-hover:scale-105 group-hover:border-fiber group-hover:shadow-2xl group-hover:shadow-fiber/20 flex flex-col">
                {/* Icon with glow */}
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-fiber/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-3 bg-fiber/15 rounded-full border-2 border-fiber/40 group-hover:border-fiber transition-all duration-300">
                    <Icon className="text-fiber" size={32} />
                  </div>
                </div>

                <h4 className="text-2xl font-heading font-bold mb-4 text-fiber group-hover:text-fiber/90 transition-colors">
                  {plan.name}
                </h4>
                
                {/* Flex-grow to push content evenly */}
                <p className="text-paper/90 leading-relaxed flex-grow">{plan.summary}</p>

                {/* Animated corner accent */}
                <div className={`absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-fiber/0 group-hover:border-fiber/50 rounded-bl-2xl transition-all duration-500`} />
              </div>

              {/* Floating particles on hover */}
              {hoveredPlan === plan.name && (
                <>
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-fiber rounded-full animate-ping" />
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-fiber rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
                </>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="text-center pt-6">
        <p className="text-paper/80 text-lg mb-4">
          Annual Maintenance Contracts (AMC) and monthly IT support contracts are available.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-fiber hover:text-fiber/80 transition-colors font-medium"
        >
          <span>Get in touch for custom plans</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
