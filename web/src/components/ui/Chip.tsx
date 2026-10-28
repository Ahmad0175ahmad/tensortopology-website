import { ReactNode } from 'react';

type ChipProps = {
  track: 'ai' | 'network' | 'shared';
  children: ReactNode;
  className?: string;
};

export function Chip({ track, children, className = '' }: ChipProps) {
  const colors = {
    ai: 'bg-neuron/10 text-neuron border-neuron/30',
    network: 'bg-fiber/10 text-fiber border-fiber/30',
    shared: 'bg-link/10 text-link border-link/30',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm border ${colors[track]} ${className}`}
    >
      {children}
    </span>
  );
}
