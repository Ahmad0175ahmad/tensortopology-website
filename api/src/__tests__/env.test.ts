import { describe, it, expect } from 'vitest';
import { loadEnv } from '../env';

const base = {
  ALLOWED_ORIGINS: 'https://tensortopology.vercel.app,http://localhost:3000',
  AI_INBOX: 'ahmed@x.test',
  AI_RESEND_KEY: 're_ai_key',
};

describe('loadEnv', () => {
  it('reads a valid configuration with defaults', () => {
    const cfg = loadEnv(base);
    expect(cfg.port).toBe(4000);
    expect(cfg.allowedOrigins).toEqual(['https://tensortopology.vercel.app', 'http://localhost:3000']);
    expect(cfg.from).toBe('TensorTopology <onboarding@resend.dev>');
    expect(cfg.ai).toEqual({ to: 'ahmed@x.test', apiKey: 're_ai_key' });
    expect(cfg.network).toBeUndefined();
  });

  it('reads the optional network account', () => {
    const cfg = loadEnv({ ...base, NETWORK_INBOX: 'najam@x.test', NETWORK_RESEND_KEY: 're_net_key' });
    expect(cfg.network).toEqual({ to: 'najam@x.test', apiKey: 're_net_key' });
  });

  it('names the missing variable', () => {
    expect(() => loadEnv({ ...base, ALLOWED_ORIGINS: undefined })).toThrow(/ALLOWED_ORIGINS/);
    expect(() => loadEnv({ ...base, AI_RESEND_KEY: undefined })).toThrow(/AI_RESEND_KEY/);
    expect(() => loadEnv({ ...base, AI_INBOX: 'nope' })).toThrow(/AI_INBOX/);
  });

  it('rejects origins with a trailing slash or a path', () => {
    expect(() => loadEnv({ ...base, ALLOWED_ORIGINS: 'https://x.vercel.app/' })).toThrow(/ALLOWED_ORIGINS/);
    expect(() => loadEnv({ ...base, ALLOWED_ORIGINS: 'https://x.vercel.app/path' })).toThrow(/ALLOWED_ORIGINS/);
  });

  it('requires both network values or neither', () => {
    expect(() => loadEnv({ ...base, NETWORK_INBOX: 'najam@x.test' })).toThrow(/NETWORK/);
    expect(() => loadEnv({ ...base, NETWORK_RESEND_KEY: 're_net_key' })).toThrow(/NETWORK/);
  });
});
