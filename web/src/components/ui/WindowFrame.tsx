import { ReactNode } from 'react';

type WindowFrameProps = {
  children: ReactNode;
  className?: string;
};

export function WindowFrame({ children, className = '' }: WindowFrameProps) {
  return (
    <div className={`bg-paper/5 rounded-lg overflow-hidden ${className}`} data-window-frame>
      <div className="h-8 bg-bp-700 flex items-center px-3 gap-1.5" aria-hidden="true">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      </div>
      {children}
    </div>
  );
}
