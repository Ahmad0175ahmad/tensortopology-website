'use client';

const stages = [
  'Data processing',
  'Model development',
  'Evaluation',
  'Integration',
  'Deployment',
];

export function PipelineStrip() {
  return (
    <div className="py-12 relative">
      <h3 className="text-3xl font-heading font-bold text-neuron mb-12 text-center flex items-center justify-center gap-3">
        <span className="w-2 h-2 bg-neuron rounded-full animate-pulse" />
        AI Pipeline
        <span className="w-2 h-2 bg-neuron rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </h3>
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Pipeline container */}
        <div className="overflow-x-auto pb-4">
          <ol className="flex items-center justify-between gap-4 min-w-max mx-auto relative">
            {stages.map((stage, idx) => (
              <li key={stage} className="flex flex-col items-center gap-3 relative z-10 group">
                {/* Node with glow effect */}
                <div className="relative">
                  <div className="absolute inset-0 bg-neuron/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-neuron/30 to-neuron/10 border-2 border-neuron flex items-center justify-center text-neuron font-bold text-xl shadow-lg group-hover:scale-110 group-hover:shadow-neuron/50 transition-all duration-300">
                    {idx + 1}
                  </div>
                </div>
                
                {/* Label */}
                <div className="text-center max-w-[120px]">
                  <span className="text-paper font-semibold text-sm block group-hover:text-neuron transition-colors duration-300">
                    {stage}
                  </span>
                </div>

                {/* Animated arrow (except after last) */}
                {idx < stages.length - 1 && (
                  <div className="absolute left-full top-8 flex items-center w-16 lg:w-24 mx-4 z-0">
                    {/* Static dashed line */}
                    <svg
                      width="100%"
                      height="3"
                      className="text-neuron/30"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="0"
                        y1="1.5"
                        x2="100%"
                        y2="1.5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray="6 6"
                      />
                    </svg>
                    
                    {/* Animated flow particles - BIGGER */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div 
                        className="w-3 h-3 bg-neuron rounded-full absolute animate-flow shadow-lg shadow-neuron/50"
                        style={{ 
                          left: '-12px',
                          animationDelay: `${idx * 0.8}s`,
                          animationDuration: '3s'
                        }}
                      />
                      <div 
                        className="w-2.5 h-2.5 bg-neuron/80 rounded-full absolute animate-flow shadow-md shadow-neuron/40"
                        style={{ 
                          left: '-12px',
                          animationDelay: `${idx * 0.8 + 0.3}s`,
                          animationDuration: '3s'
                        }}
                      />
                      <div 
                        className="w-2 h-2 bg-neuron/60 rounded-full absolute animate-flow shadow-sm shadow-neuron/30"
                        style={{ 
                          left: '-12px',
                          animationDelay: `${idx * 0.8 + 0.6}s`,
                          animationDuration: '3s'
                        }}
                      />
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
        
        {/* Link to projects */}
        <div className="text-center mt-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-neuron hover:text-neuron/80 transition-colors font-medium group"
          >
            <span>See how we build</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          0% {
            left: -8px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: calc(100% + 8px);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-flow {
          animation: flow linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-flow,
          .animate-pulse-slow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
