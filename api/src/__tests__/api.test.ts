import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import { createApp } from '../app';

const ORIGIN = 'http://localhost:3000';
const sendMail = vi.fn();
const makeApp = () => createApp({ allowedOrigins: [ORIGIN], sendMail });

const valid = {
  name: 'Sara Khan',
  email: 'sara@example.test',
  topic: 'ai',
  message: 'We would like to talk about a SQL agent for our reports.',
};

beforeEach(() => {
  sendMail.mockReset();
  sendMail.mockResolvedValue(undefined);
});

describe('GET /health', () => {
  it('returns ok', async () => {
    const res = await request(makeApp()).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('does not reveal the framework', async () => {
    const res = await request(makeApp()).get('/health');
    expect(res.headers['x-powered-by']).toBeUndefined();
  });
});

describe('POST /api/contact', () => {
  it('accepts a valid message and sends one email', async () => {
    const res = await request(makeApp()).post('/api/contact').set('Origin', ORIGIN).send(valid);
    expect(res.status).toBe(202);
    expect(res.body).toEqual({ ok: true });
    expect(sendMail).toHaveBeenCalledTimes(1);
    expect(sendMail).toHaveBeenCalledWith(expect.objectContaining({ topic: 'ai', email: valid.email }));
  });

  it('rejects an invalid email', async () => {
    const res = await request(makeApp()).post('/api/contact').send({ ...valid, email: 'not-an-email' });
    expect(res.status).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('rejects a short message and an unknown topic', async () => {
    const app = makeApp();
    expect((await request(app).post('/api/contact').send({ ...valid, message: 'hi' })).status).toBe(400);
    expect((await request(app).post('/api/contact').send({ ...valid, topic: 'sales' })).status).toBe(400);
  });

  it('silently ignores honeypot submissions', async () => {
    const res = await request(makeApp()).post('/api/contact').send({ ...valid, website: 'http://spam.test' });
    expect(res.status).toBe(202);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('returns 502 without leaking details when mail fails', async () => {
    sendMail.mockRejectedValueOnce(new Error('resend key re_secret rejected'));
    const res = await request(makeApp()).post('/api/contact').send(valid);
    expect(res.status).toBe(502);
    expect(res.body).toEqual({ ok: false, error: 'mail_failed' });
    expect(JSON.stringify(res.body)).not.toMatch(/resend|re_secret|key/i);
  });

  it('rate limits after 5 requests', async () => {
    const app = makeApp();
    for (let i = 0; i < 5; i++) {
      expect((await request(app).post('/api/contact').send(valid)).status).toBe(202);
    }
    const res = await request(app).post('/api/contact').send(valid);
    expect(res.status).toBe(429);
    expect(res.body).toEqual({ ok: false, error: 'rate_limited' });
  });

  it('only allows configured origins through CORS', async () => {
    const app = makeApp();
    const ok = await request(app).options('/api/contact')
      .set('Origin', ORIGIN).set('Access-Control-Request-Method', 'POST');
    expect(ok.headers['access-control-allow-origin']).toBe(ORIGIN);
    const bad = await request(app).options('/api/contact')
      .set('Origin', 'https://evil.test').set('Access-Control-Request-Method', 'POST');
    expect(bad.headers['access-control-allow-origin']).toBeUndefined();
  });

  it('rejects oversized bodies', async () => {
    const res = await request(makeApp()).post('/api/contact').send({ ...valid, message: 'x'.repeat(20000) });
    expect(res.status).toBe(413);
    expect(res.body).toEqual({ ok: false, error: 'too_large' });
  });

  it('rejects malformed JSON', async () => {
    const res = await request(makeApp())
      .post('/api/contact').set('Content-Type', 'application/json').send('{"name": ');
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ ok: false, error: 'bad_json' });
  });
});

describe('unknown routes', () => {
  it('return a JSON 404', async () => {
    const res = await request(makeApp()).get('/nope');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ ok: false, error: 'not_found' });
  });
});
