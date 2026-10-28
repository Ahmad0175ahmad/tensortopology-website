import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { sendContactMail } from '../mailer';
import { resolveAccount } from '../route';

const cfg = {
  from: 'TensorTopology <onboarding@resend.dev>',
  ai: { to: 'ahmed@x.test', apiKey: 're_ai_key' },
  network: { to: 'najam@x.test', apiKey: 're_net_key' },
};
const input = {
  name: 'Sara Khan',
  email: 'sara@example.test',
  topic: 'network' as const,
  message: 'We need CCTV and Wi-Fi for a new office.',
};

const fetchMock = vi.fn();
beforeEach(() => {
  fetchMock.mockReset();
  fetchMock.mockResolvedValue({ ok: true, status: 200, text: async () => '{}' });
  vi.stubGlobal('fetch', fetchMock);
});
afterEach(() => vi.unstubAllGlobals());

function lastCall() {
  const [url, init] = fetchMock.mock.calls[0];
  return { url, init, body: JSON.parse(init.body) };
}

describe('resolveAccount', () => {
  it('routes by topic', () => {
    expect(resolveAccount('ai', cfg).to).toBe('ahmed@x.test');
    expect(resolveAccount('network', cfg).to).toBe('najam@x.test');
    expect(resolveAccount('other', cfg).to).toBe('ahmed@x.test');
  });

  it('falls back to the AI account when the network account is not configured', () => {
    expect(resolveAccount('network', { ai: cfg.ai }).to).toBe('ahmed@x.test');
  });
});

describe('sendContactMail', () => {
  it('sends a networking enquiry through the network account', async () => {
    await sendContactMail(input, cfg);
    const { url, init, body } = lastCall();
    expect(url).toBe('https://api.resend.com/emails');
    expect(init.method).toBe('POST');
    expect(init.headers.Authorization).toBe('Bearer re_net_key');
    expect(body.to).toEqual(['najam@x.test']);
    expect(body.from).toBe(cfg.from);
    expect(body.reply_to).toBe('sara@example.test');
    expect(body.subject).toContain('Networking');
    expect(body.text).toContain('We need CCTV and Wi-Fi');
  });

  it('sends AI and general enquiries through the AI account', async () => {
    await sendContactMail({ ...input, topic: 'ai' }, cfg);
    expect(lastCall().init.headers.Authorization).toBe('Bearer re_ai_key');
    expect(lastCall().body.to).toEqual(['ahmed@x.test']);
    expect(lastCall().body.subject).toContain('AI & Automation');
  });

  it('strips line breaks from the subject', async () => {
    await sendContactMail({ ...input, name: 'Sara\r\nBcc: spy@evil.test' }, cfg);
    expect(lastCall().body.subject).not.toMatch(/[\r\n]/);
  });

  it('throws on a Resend error without leaking the key', async () => {
    fetchMock.mockResolvedValueOnce({ ok: false, status: 403, text: async () => 'forbidden' });
    const err = await sendContactMail(input, cfg).catch((e) => e as Error);
    expect(err).toBeInstanceOf(Error);
    expect(String(err.message)).not.toContain('re_net_key');
  });

  it('throws when the network request fails', async () => {
    fetchMock.mockRejectedValueOnce(new Error('timeout'));
    await expect(sendContactMail(input, cfg)).rejects.toThrow();
  });
});
