'use client';

import { useEffect, useState, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export function SignalLine() {
  const [sections, setSections] = useState<{ id: string; top: number }[]>([]);
  const [endY, setEndY] = useState(1000);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Initialize client-side values
  useEffect(() => {
    setEndY(window.innerHeight);
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // Calculate path length based on sections
  useEffect(() => {
    const updateSections = () => {
      const ids = ['about', 'ai-automation', 'networking', 'projects', 'contact'];
      const positions = ids
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          return { id, top: el.offsetTop };
        })
        .filter((s) => s !== null) as { id: string; top: number }[];

      setSections(positions);
    };

    updateSections();

    const resizeObserver = new ResizeObserver(updateSections);
    if (mainRef.current) {
      resizeObserver.observe(mainRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const pathLength = prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [1, 0]);

  if (sections.length === 0) return null;

  // Simple vertical line path
  const startY = 100;
  const pathData = `M 50 ${startY} L 50 ${endY}`;

  return (
    <div ref={mainRef} className="pointer-events-none">
      <svg
        className="fixed left-6 md:left-12 top-0 w-24 h-screen z-10"
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
      >
        <defs>
          {/* Gradient from pink (dotted) to orange (solid) */}
          <linearGradient id="signal-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF5CA8" />
            <stop offset="40%" stopColor="#FF5CA8" />
            <stop offset="60%" stopColor="#FFAE42" />
            <stop offset="100%" stopColor="#FFAE42" />
          </linearGradient>
        </defs>

        {/* The signal line */}
        <motion.path
          d={pathData}
          stroke="url(#signal-gradient)"
          strokeWidth="2"
          strokeDasharray="4 8"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength: prefersReducedMotion ? 1 : pathLength,
          }}
        />

        {/* RJ45 connector at bottom */}
        <g transform={`translate(35, ${endY - 40})`}>
          <rect
            width="30"
            height="20"
            rx="2"
            fill="none"
            stroke="#FFAE42"
            strokeWidth="1.5"
          />
          <circle cx="15" cy="10" r="2" fill="#4FE3C8" />
          <line x1="8" y1="5" x2="8" y2="15" stroke="#FFAE42" strokeWidth="1" />
          <line x1="15" y1="5" x2="15" y2="15" stroke="#FFAE42" strokeWidth="1" />
          <line x1="22" y1="5" x2="22" y2="15" stroke="#FFAE42" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
