'use client';

import { quickShop } from '@/content/projects';
import { Sheet } from '../ui/Sheet';
import { TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function CaseStats() {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-fiber/10 via-fiber/5 to-transparent border border-fiber/20 shadow-2xl">
      {/* Animated background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-fiber/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-fiber/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-fiber/20 rounded-lg">
            <TrendingUp className="text-fiber" size={32} />
          </div>
          <h3 className="text-3xl font-heading font-bold text-fiber">Quick Shop by the numbers</h3>
        </div>
        <p className="text-paper/80 mb-10 leading-relaxed text-lg">
          {quickShop.blurb} — <span className="font-semibold text-fiber">{quickShop.place}</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {quickShop.stats.map((stat) => (
            <div
              key={stat.label}
              onMouseEnter={() => setHoveredStat(stat.label)}
              onMouseLeave={() => setHoveredStat(null)}
              className="group text-center relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-fiber/20 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ${
                hoveredStat === stat.label ? 'opacity-100' : ''
              }`} />

              <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 bg-gradient-to-br ${
                hoveredStat === stat.label
                  ? 'border-fiber from-fiber/15 to-fiber/5 scale-110 shadow-2xl shadow-fiber/30'
                  : 'border-fiber/30 from-fiber/10 to-transparent'
              }`}>
                <div className="text-6xl font-heading font-bold text-fiber mb-3 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-sm text-paper/90 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-fiber hover:bg-fiber/90 text-bp-900 rounded-xl font-bold text-lg shadow-xl hover:shadow-fiber/50 hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            See the Quick Shop project
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
