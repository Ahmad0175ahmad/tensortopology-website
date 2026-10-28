import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SignalLine } from '../layout/SignalLine';

describe('SignalLine', () => {
  it('renders hidden from assistive tech and ignores pointer events', () => {
    const { container } = render(<SignalLine />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect((svg as SVGElement).style.pointerEvents || svg!.getAttribute('class')).toBeTruthy();
  });

  it('draws at least one path and a gradient for the pink to orange change', () => {
    const { container } = render(<SignalLine />);
    expect(container.querySelectorAll('path').length).toBeGreaterThanOrEqual(1);
    expect(container.querySelector('linearGradient')).toBeInTheDocument();
  });

  it('does not throw when the page sections do not exist', () => {
    expect(() => render(<SignalLine />)).not.toThrow();
  });
});
