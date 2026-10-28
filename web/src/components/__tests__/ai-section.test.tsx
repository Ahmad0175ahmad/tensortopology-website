import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AiSection } from '../ai/AiSection';
import { AgentRunDemo } from '../ai/AgentRunDemo';

afterEach(() => vi.useRealTimers());

describe('AiSection', () => {
  it('has the section heading and all four group headings', () => {
    render(<AiSection />);
    expect(
      screen.getByRole('heading', { level: 2, name: /ai & automation/i })
    ).toBeInTheDocument();
    for (const t of [
      'AI & Machine Learning',
      'Software Development',
      'Automation & Testing',
      'DevOps & Deployment',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: t })).toBeInTheDocument();
    }
  });

  it('shows a default skill detail', () => {
    render(<AiSection />);
    const region = screen.getByRole('region', { name: /skill details/i });
    expect(region).toHaveTextContent(/autonomous ai agents/i);
  });

  it('shows the detail of a clicked skill and marks it pressed', async () => {
    const user = userEvent.setup();
    render(<AiSection />);
    const chip = screen.getByRole('button', { name: 'SQL Agents' });
    await user.click(chip);
    expect(chip).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('region', { name: /skill details/i })).toHaveTextContent(
      /natural-language queries/i
    );
    expect(screen.getByRole('button', { name: 'Agentic AI & AI Agents' })).toHaveAttribute(
      'aria-pressed',
      'false'
    );
  });

  it('works with the keyboard', async () => {
    const user = userEvent.setup();
    render(<AiSection />);
    screen.getByRole('button', { name: 'Multi-Agent Systems' }).focus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('region', { name: /skill details/i })).toHaveTextContent(
      /multi-agent/i
    );
  });

  it('shows the five pipeline stages in order', () => {
    render(<AiSection />);
    const items = screen.getAllByRole('listitem').map((li) => li.textContent);
    const stages = ['Data processing', 'Model development', 'Evaluation', 'Integration', 'Deployment'];
    const found = stages.map((s) => items.findIndex((t) => t?.includes(s)));
    expect(found.every((i) => i >= 0)).toBe(true);
    expect([...found].sort((a, b) => a - b)).toEqual(found);
  });

  it('links to the AI projects', () => {
    render(<AiSection />);
    expect(screen.getByRole('link', { name: /see the ai projects/i })).toHaveAttribute(
      'href',
      '#projects'
    );
  });
});

describe('AgentRunDemo', () => {
  it('plays the scripted run and ends with the answer', () => {
    vi.useFakeTimers();
    render(<AgentRunDemo />);
    expect(screen.queryByText(/^Answer:/)).not.toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    expect(screen.getByText(/which three customers spent the most/i)).toBeInTheDocument();
    expect(screen.getByText(/run_sql/i)).toBeInTheDocument();
    expect(screen.getByText(/^Answer:/)).toBeInTheDocument();
  });

  it('says it is a scripted illustration', () => {
    render(<AgentRunDemo />);
    expect(
      screen.getByText(/scripted run with sample data, not a live model/i)
    ).toBeInTheDocument();
  });

  it('replays from the start', () => {
    vi.useFakeTimers();
    render(<AgentRunDemo />);
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    act(() => {
      screen.getByRole('button', { name: /replay/i }).click();
    });
    expect(screen.queryByText(/^Answer:/)).not.toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    expect(screen.getByText(/^Answer:/)).toBeInTheDocument();
  });
});
