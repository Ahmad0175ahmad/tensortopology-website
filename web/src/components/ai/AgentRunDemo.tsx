'use client';

import { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

const demoLines = [
  { speaker: 'You', text: 'Which three customers spent the most last month?' },
  { speaker: 'Router agent', text: 'This needs the database. Handing over to the SQL agent.' },
  {
    speaker: 'SQL agent',
    text: "Calling run_sql with: SELECT customer, SUM(total) AS spent FROM orders WHERE month = 'last_month' GROUP BY customer ORDER BY spent DESC LIMIT 3",
  },
  { speaker: 'Tool', text: '3 rows returned.' },
  {
    speaker: 'Answer',
    text: 'The top three customers last month were: Orchid Pharmacy ($12,450), Kestrel Logistics ($9,820), and Harbor Cafe ($7,340).',
  },
];

export function AgentRunDemo() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVisibleLines(demoLines.length);
      setIsPlaying(false);
      return;
    }

    if (visibleLines >= demoLines.length) {
      setIsPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [visibleLines, isPlaying]);

  const handleReplay = () => {
    setVisibleLines(0);
    setIsPlaying(true);
  };

  return (
    <div className="space-y-4">
      <div className="bg-bp-900 border border-neuron/30 rounded-lg p-6 font-mono text-sm space-y-3 min-h-[300px]">
        {demoLines.slice(0, visibleLines).map((line, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-neuron font-medium">{line.speaker}:</div>
            <div className="text-paper/80 pl-4">{line.text}</div>
          </div>
        ))}
        {visibleLines === 0 && (
          <div className="text-paper/40 italic">Starting agent run...</div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-paper/60">
          Illustration: a scripted run with sample data, not a live model.
        </p>
        <button
          onClick={handleReplay}
          className="flex items-center gap-2 px-4 py-2 bg-neuron/10 text-neuron rounded-md hover:bg-neuron/20 transition-colors"
        >
          <RotateCcw size={16} />
          Replay
        </button>
      </div>
    </div>
  );
}
