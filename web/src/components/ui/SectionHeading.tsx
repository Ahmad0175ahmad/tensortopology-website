import { ReactNode } from 'react';

type SectionHeadingProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionHeading({ id, children, className = '' }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`text-4xl md:text-5xl font-heading font-bold text-paper mb-6 ${className}`}
    >
      {children}
    </h2>
  );
}
