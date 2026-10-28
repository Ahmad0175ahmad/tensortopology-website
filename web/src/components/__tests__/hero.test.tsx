import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../hero/Hero';

afterEach(() => vi.restoreAllMocks());

describe('Hero', () => {
  it('shows the headline as the only h1', () => {
    render(<Hero />);
    const h1 = screen.getAllByRole('heading', { level: 1 });
    expect(h1).toHaveLength(1);
    expect(h1[0]).toHaveTextContent(/one of us builds the ai/i);
    expect(h1[0]).toHaveTextContent(/the network it runs on/i);
  });

  it('has one link into each section', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /see ai & automation/i })).toHaveAttribute(
      'href',
      '#ai-automation'
    );
    expect(screen.getByRole('link', { name: /see networking/i })).toHaveAttribute(
      'href',
      '#networking'
    );
  });

  it('hides decorative art from assistive tech', () => {
    const { container } = render(<Hero />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(2);
    svgs.forEach((s) => expect(s).toHaveAttribute('aria-hidden', 'true'));
  });

  it('runs the full sequence by default', () => {
    const { container } = render(<Hero />);
    expect(container.querySelector('[data-hero]')).toHaveAttribute('data-motion', 'full');
  });

  it('skips animation when reduced motion is requested', () => {
    vi.spyOn(window, 'matchMedia').mockImplementation(
      (q: string) =>
        ({
          matches: q.includes('prefers-reduced-motion'),
          media: q,
          addEventListener() {},
          removeEventListener() {},
          addListener() {},
          removeListener() {},
          onchange: null,
          dispatchEvent: () => false,
        }) as unknown as MediaQueryList
    );
    const { container } = render(<Hero />);
    expect(container.querySelector('[data-hero]')).toHaveAttribute('data-motion', 'reduced');
  });
});
