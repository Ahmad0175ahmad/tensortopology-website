import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { About } from '../about/About';
import { team } from '@/content/site';

describe('About', () => {
  it('renders one card per team member with name and role', () => {
    render(<About />);
    for (const person of team) {
      expect(screen.getByRole('heading', { level: 3, name: person.name })).toBeInTheDocument();
      expect(screen.getByText(person.role)).toBeInTheDocument();
    }
  });

  it('marks the AI and network tracks', () => {
    const { container } = render(<About />);
    expect(container.querySelector('[data-track="ai"]')).toBeInTheDocument();
    expect(container.querySelector('[data-track="network"]')).toBeInTheDocument();
  });

  it('lists three highlights in each card', () => {
    render(<About />);
    document.querySelectorAll('[data-track]').forEach((card) => {
      expect(within(card as HTMLElement).getAllByRole('listitem')).toHaveLength(3);
    });
  });

  it('links to LinkedIn for both people, safely', () => {
    render(<About />);
    for (const person of team) {
      const link = screen.getByRole('link', { name: `${person.name} on LinkedIn` });
      expect(link).toHaveAttribute('href', person.linkedin);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link.getAttribute('rel')).toContain('noopener');
    }
  });

  it('points each person to the contact section and shows no phone numbers', () => {
    render(<About />);
    for (const person of team) {
      expect(screen.getByRole('link', { name: `Contact ${person.name}` })).toHaveAttribute(
        'href',
        '#contact'
      );
    }
    expect(document.body.textContent).not.toMatch(/0307|0349|\+92/);
  });

  it('has the shared line', () => {
    render(<About />);
    expect(screen.getByText(/the ai runs on the network/i)).toBeInTheDocument();
  });
});
