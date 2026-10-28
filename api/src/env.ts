export type MailAccount = { to: string; apiKey: string };

export type Config = {
  port: number;
  allowedOrigins: string[];
  from: string;
  ai: MailAccount;
  network?: MailAccount;
};

export function loadEnv(env: Record<string, string | undefined> = process.env): Config {
  // Required: ALLOWED_ORIGINS
  const originsStr = env.ALLOWED_ORIGINS;
  if (!originsStr) {
    throw new Error('ALLOWED_ORIGINS is required');
  }
  const allowedOrigins = originsStr.split(',').map((s) => s.trim());
  for (const origin of allowedOrigins) {
    if (origin.endsWith('/')) {
      throw new Error('ALLOWED_ORIGINS must not have trailing slashes');
    }
    if (origin.includes('/', 8)) {
      throw new Error('ALLOWED_ORIGINS must not include paths');
    }
  }

  // Required: AI_INBOX and AI_RESEND_KEY
  const aiInbox = env.AI_INBOX;
  const aiKey = env.AI_RESEND_KEY;
  if (!aiInbox || !aiInbox.includes('@')) {
    throw new Error('AI_INBOX is required and must be a valid email');
  }
  if (!aiKey) {
    throw new Error('AI_RESEND_KEY is required');
  }

  // Optional: NETWORK_INBOX and NETWORK_RESEND_KEY (both or neither)
  const networkInbox = env.NETWORK_INBOX;
  const networkKey = env.NETWORK_RESEND_KEY;
  if (!!networkInbox !== !!networkKey) {
    throw new Error('NETWORK_INBOX and NETWORK_RESEND_KEY must both be set or both be empty');
  }

  const network: MailAccount | undefined = networkInbox && networkKey
    ? { to: networkInbox, apiKey: networkKey }
    : undefined;

  return {
    port: Number(env.PORT) || 4000,
    allowedOrigins,
    from: env.MAIL_FROM || 'TensorTopology <onboarding@resend.dev>',
    ai: { to: aiInbox, apiKey: aiKey },
    network,
  };
}
