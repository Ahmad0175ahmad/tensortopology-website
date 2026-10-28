import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectsSection } from '../projects/ProjectsSection';
import { projects } from '@/content/projects';

const ai = projects.filter((p) => p.track === 'ai');
const net = projects.filter((p) => p.track === 'network');

describe('ProjectsSection filters', () => {
  it('shows every project by default', () => {
    render(<ProjectsSection />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(projects.length);
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('shows only networking projects when Networking is chosen', async () => {
    const user = userEvent.setup();
    render(<ProjectsSection />);
    await user.click(screen.getByRole('button', { name: 'Networking' }));
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(net.length);
    expect(
      screen.queryByRole('heading', { level: 3, name: 'SQL Agent' })
    ).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Networking' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('shows only AI projects when AI & Automation is chosen', async () => {
    const user = userEvent.setup();
    render(<ProjectsSection />);
    await user.click(screen.getByRole('button', { name: 'AI & Automation' }));
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(ai.length);
    expect(screen.getByRole('heading', { level: 3, name: 'RAG System' })).toBeInTheDocument();
  });
});

describe('ProjectCard content', () => {
  it('shows the eyebrow, technologies and the right label for each track', () => {
    render(<ProjectsSection />);
    const cards = Array.from(document.querySelectorAll('[data-track]')) as HTMLElement[];
    expect(cards).toHaveLength(projects.length);
    for (const card of cards) {
      expect(within(card).getByText('Technologies')).toBeInTheDocument();
      const track = card.getAttribute('data-track');
      expect(
        within(card).getByText(track === 'ai' ? 'What it does' : 'What we did')
      ).toBeInTheDocument();
    }
    expect(screen.getAllByText(/Quick Shop Private Limited/).length).toBe(net.length);
  });

  it('labels every illustrated cover as illustrative, and nothing else', async () => {
    const user = userEvent.setup();
    render(<ProjectsSection />);
    const illustratedCovers = projects.filter((p) => p.images[0].kind === 'illustration').length;
    expect(screen.getAllByText('Illustrative image')).toHaveLength(illustratedCovers);
    await user.click(screen.getByRole('button', { name: 'AI & Automation' }));
    expect(screen.queryByText('Illustrative image')).not.toBeInTheDocument();
  });

  it('shows the Netflix disclaimer on the RAG project', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/not affiliated with netflix/i)).toBeInTheDocument();
  });

  it('shows the software screenshots inside window frames', () => {
    render(<ProjectsSection />);
    const aiCards = Array.from(document.querySelectorAll('[data-track="ai"]')) as HTMLElement[];
    expect(aiCards).toHaveLength(ai.length);
    for (const card of aiCards) {
      expect(card.querySelector('[data-window-frame]')).toBeInTheDocument();
    }
  });
});

describe('Lightbox', () => {
  it('opens with the image and alt text, closes with Escape, and returns focus', async () => {
    const user = userEvent.setup();
    render(<ProjectsSection />);
    const first = projects[0];
    const opener = screen.getByRole('button', { name: `View images of ${first.title}` });
    await user.click(opener);
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('img', { name: first.images[0].alt })).toBeInTheDocument();
    expect(within(dialog).getByText(`1 of ${first.images.length}`)).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(opener).toHaveFocus();
  });

  it('moves between images of a project and wraps around', async () => {
    const user = userEvent.setup();
    render(<ProjectsSection />);
    const multi = projects.find((p) => p.images.length > 1)!;
    await user.click(screen.getByRole('button', { name: `View images of ${multi.title}` }));
    const dialog = screen.getByRole('dialog');
    await user.click(within(dialog).getByRole('button', { name: /next image/i }));
    expect(within(dialog).getByRole('img', { name: multi.images[1].alt })).toBeInTheDocument();
    expect(within(dialog).getByText(`2 of ${multi.images.length}`)).toBeInTheDocument();
    await user.click(within(dialog).getByRole('button', { name: /previous image/i }));
    expect(within(dialog).getByRole('img', { name: multi.images[0].alt })).toBeInTheDocument();
  });

  it('shows the illustration label inside the viewer for illustrations only', async () => {
    const user = userEvent.setup();
    render(<ProjectsSection />);
    const illustrated = projects.find((p) => p.images[0].kind === 'illustration')!;
    await user.click(screen.getByRole('button', { name: `View images of ${illustrated.title}` }));
    expect(
      within(screen.getByRole('dialog')).getByText('Illustrative image')
    ).toBeInTheDocument();
    await user.keyboard('{Escape}');

    const photo = projects.find((p) => p.images[0].kind !== 'illustration')!;
    await user.click(screen.getByRole('button', { name: `View images of ${photo.title}` }));
    expect(
      within(screen.getByRole('dialog')).queryByText('Illustrative image')
    ).not.toBeInTheDocument();
  });

  it('can be closed with the Close button', async () => {
    const user = userEvent.setup();
    render(<ProjectsSection />);
    await user.click(screen.getAllByRole('button', { name: /^view images of/i })[0]);
    await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: /close/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
