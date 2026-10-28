'use client';

import { SectionHeading } from '../ui/SectionHeading';
import { SkillMap } from './SkillMap';
import { PipelineStrip } from './PipelineStrip';

export function AiSection() {
  return (
    <section id="ai-automation" className="relative py-20 bg-gradient-to-b from-transparent via-bp-700/10 to-bp-700/20 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-neuron rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-neuron rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }} />
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-neuron rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }} />
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-neuron rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '9s' }} />
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-neuron rounded-full animate-float" style={{ animationDelay: '3s', animationDuration: '11s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading id="ai-automation-heading">AI & Automation</SectionHeading>
        <p className="text-xl text-paper/80 mb-16 max-w-3xl mx-auto text-center">
          We design AI agents that reason, query data and complete tasks, then ship them to
          production.
        </p>

        {/* Skill Map */}
        <div className="mb-20">
          <SkillMap />
        </div>

        {/* Pipeline with better spacing */}
        <div className="mb-16">
          <PipelineStrip />
        </div>

        {/* Link to projects */}
        <div className="text-center">
          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-neuron hover:bg-neuron/90 text-bp-900 rounded-lg font-semibold shadow-lg hover:shadow-neuron/50 hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            See the AI projects
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-100vh) translateX(20px);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}
