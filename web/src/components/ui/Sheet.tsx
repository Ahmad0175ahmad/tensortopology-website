import { ReactNode } from 'react';

type SheetProps = {
  track: 'ai' | 'network' | 'shared';
  titleBlock?: {
    name: string;
    owner: string;
    revision?: string;
  };
  children: ReactNode;
  className?: string;
};

export function Sheet({ track, titleBlock, children, className = '' }: SheetProps) {
  return (
    <div
      data-track={track}
      className={`relative bg-paper text-ink rounded-[2px] border border-paper/20 p-6 ${className}`}
    >
      {children}
      {titleBlock && (
        <div className="absolute bottom-4 right-4 text-xs text-ink/60 text-right space-y-0.5">
          <div className="font-medium">{titleBlock.name}</div>
          <div>{titleBlock.owner}</div>
          {titleBlock.revision && <div>{titleBlock.revision}</div>}
        </div>
      )}
    </div>
  );
}
