import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Nav } from '../layout/Nav';
import { Footer } from '../layout/Footer';
import { Logo } from '../ui/Logo';
import { Sheet } from '../ui/Sheet';
import { WindowFrame } from '../ui/WindowFrame';
import { IllustrativeBadge } from '../ui/IllustrativeBadge';

describe('Logo', () => {
  it('is a link home named TensorTopology', () => {
    render(<Logo />);
    const link = screen.getByRole('link', { name: /tensortopology/i });
    expect(link).toHaveAttribute('href', '/');
    expect(screen.getByText('Tensor')).toBeInTheDocument();
    expect(screen.getByText('Topology')).toBeInTheDocument();
  });

  it('hides the decorative mark from assistive tech and can drop the wordmark', () => {
    const { container } = render(<Logo showWordmark={false} />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByText('Tensor')).not.toBeInTheDocument();
  });
});

describe('Nav', () => {
  it('has a skip link as the first focusable element', async () => {
    render(<Nav />);
    await userEvent.tab();
    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveFocus();
    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute('href', '#main');
  });

  it('shows the logo and links to every section', () => {
    render(<Nav />);
    expect(screen.getByRole('link', { name: /tensortopology/i })).toBeInTheDocument();
    const expected: Record<string, string> = {
      About: '#about',
      'AI & Automation': '#ai-automation',
      Networking: '#networking',
      Projects: '#projects',
      Contact: '#contact',
    };
    for (const [name, href] of Object.entries(expected)) {
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
    }
  });
});

describe('Footer', () => {
  it('is a contentinfo landmark with the brand and copyright', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} TensorTopology`))
    ).toBeInTheDocument();
  });
});

describe('Sheet', () => {
  it('marks its track and prints the title block', () => {
    const { container } = render(
      <Sheet
        track="ai"
        titleBlock={{ name: 'SQL Agent', owner: 'Muhammad Ahmed', revision: 'Rev A' }}
      >
        body
      </Sheet>
    );
    expect(container.firstChild).toHaveAttribute('data-track', 'ai');
    expect(screen.getByText('SQL Agent')).toBeInTheDocument();
    expect(screen.getByText('Muhammad Ahmed')).toBeInTheDocument();
    expect(screen.getByText('Rev A')).toBeInTheDocument();
  });

  it('renders without a title block', () => {
    render(<Sheet track="shared">plain</Sheet>);
    expect(screen.getByText('plain')).toBeInTheDocument();
  });
});

describe('WindowFrame and IllustrativeBadge', () => {
  it('wraps content in a frame with decorative dots', () => {
    const { container } = render(
      <WindowFrame>
        <img alt="shot" src="/x.webp" />
      </WindowFrame>
    );
    expect(screen.getByRole('img', { name: 'shot' })).toBeInTheDocument();
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('shows the exact illustration label', () => {
    render(<IllustrativeBadge />);
    expect(screen.getByText('Illustrative image')).toBeInTheDocument();
  });
});
