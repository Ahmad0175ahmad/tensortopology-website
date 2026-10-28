import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactSection } from '../contact/ContactSection';
import { site, team } from '@/content/site';

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

function checkDirectLinks() {
  for (const p of team) {
    const esc = p.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    expect(screen.getByRole('link', { name: new RegExp(`^call ${esc}`, 'i') }))
      .toHaveAttribute('href', `tel:${p.phone.tel}`);
    const wa = screen.getByRole('link', { name: new RegExp(`^whatsapp ${esc}`, 'i') });
    expect(wa.getAttribute('href')).toMatch(new RegExp(`^${p.phone.whatsapp}`));
    expect(wa).toHaveAttribute('target', '_blank');
    expect(wa.getAttribute('rel')).toContain('noopener');
    expect(screen.getByRole('link', { name: new RegExp(`^email ${esc}`, 'i') }))
      .toHaveAttribute('href', `mailto:${p.email}`);
    expect(screen.getByRole('link', { name: `${p.name} on LinkedIn` }))
      .toHaveAttribute('href', p.linkedin);
  }
}

async function fillAndSend(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/your name/i), 'Sara Khan');
  await user.type(screen.getByLabelText(/^email/i), 'sara@example.test');
  await user.click(screen.getByRole('radio', { name: /ai & automation/i }));
  await user.type(screen.getByLabelText(/message/i), 'We want a SQL agent for our weekly reports.');
  await user.click(screen.getByRole('button', { name: /send message/i }));
}

describe('ContactSection without an API', () => {
  beforeEach(() => vi.stubEnv('NEXT_PUBLIC_API_URL', ''));

  it('shows direct contact links for both people and no form', () => {
    render(<ContactSection />);
    checkDirectLinks();
    expect(screen.queryByRole('button', { name: /send message/i })).not.toBeInTheDocument();
  });

  it('shows the real phone numbers', () => {
    render(<ContactSection />);
    expect(screen.getByText('0307 5298122')).toBeInTheDocument();
    expect(screen.getByText('0349 5710923')).toBeInTheDocument();
  });
});

describe('ContactSection with the API configured', () => {
  beforeEach(() => vi.stubEnv('NEXT_PUBLIC_API_URL', 'https://api.example.test'));

  it('still shows the direct links', () => {
    render(<ContactSection />);
    checkDirectLinks();
  });

  it('posts the form to the API and confirms', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 202, json: async () => ({ ok: true }) });
    vi.stubGlobal('fetch', fetchMock);
    const user = userEvent.setup();
    render(<ContactSection />);
    await fillAndSend(user);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://api.example.test/api/contact');
    expect(init.method).toBe('POST');
    const body = JSON.parse(init.body);
    expect(body).toMatchObject({ name: 'Sara Khan', email: 'sara@example.test', topic: 'ai' });
    expect(await screen.findByText(/message sent/i)).toBeInTheDocument();
  });

  it('shows the direct-email fallback when sending fails, and keeps the text', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down')));
    const user = userEvent.setup();
    render(<ContactSection />);
    await fillAndSend(user);

    expect(await screen.findByText(/the message did not send/i)).toBeInTheDocument();
    const link = screen.getByRole('link', { name: /email us directly/i });
    expect(link.getAttribute('href')).toMatch(/^mailto:/);
    expect(link.getAttribute('href')).toContain(site.contact.aiEmail);
    expect(screen.getByLabelText(/message/i)).toHaveValue('We want a SQL agent for our weekly reports.');
  });

  it('sends networking enquiries to the networking email when sending fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 502, json: async () => ({ ok: false }) }));
    const user = userEvent.setup();
    render(<ContactSection />);
    await user.type(screen.getByLabelText(/your name/i), 'Sara Khan');
    await user.type(screen.getByLabelText(/^email/i), 'sara@example.test');
    await user.click(screen.getByRole('radio', { name: /^networking$/i }));
    await user.type(screen.getByLabelText(/message/i), 'We need CCTV for a new shop.');
    await user.click(screen.getByRole('button', { name: /send message/i }));
    const link = await screen.findByRole('link', { name: /email us directly/i });
    expect(link.getAttribute('href')).toContain(site.contact.networkEmail);
  });

  it('validates the email before sending', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const user = userEvent.setup();
    render(<ContactSection />);
    await user.type(screen.getByLabelText(/your name/i), 'Sara Khan');
    await user.type(screen.getByLabelText(/^email/i), 'nope');
    await user.type(screen.getByLabelText(/message/i), 'A message that is long enough.');
    await user.click(screen.getByRole('button', { name: /send message/i }));
    expect(await screen.findByText(/enter a valid email address/i)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('has a hidden honeypot field', () => {
    const { container } = render(<ContactSection />);
    const trap = container.querySelector('input[name="website"]');
    expect(trap).toBeInTheDocument();
    expect(trap).toHaveAttribute('tabindex', '-1');
  });
});
