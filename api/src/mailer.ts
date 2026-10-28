import type { Config } from './env';
import { resolveAccount } from './route';

type ContactInput = {
  name: string;
  email: string;
  topic: 'ai' | 'network' | 'other';
  message: string;
};

export async function sendContactMail(
  input: ContactInput,
  cfg: Pick<Config, 'from' | 'ai' | 'network'>
): Promise<void> {
  const account = resolveAccount(input.topic, cfg);

  // Build subject line (remove line breaks to prevent injection)
  const cleanName = input.name.replace(/[\r\n]/g, '');
  const topicLabel = input.topic === 'ai' ? 'AI & Automation' : input.topic === 'network' ? 'Networking' : 'General';
  const subject = `Portfolio enquiry (${topicLabel}): ${cleanName}`;

  // Build text body
  const text = `
Name: ${input.name}
Email: ${input.email}
Topic: ${input.topic}

Message:
${input.message}
  `.trim();

  // Send via Resend HTTPS API
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${account.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: cfg.from,
      to: [account.to],
      reply_to: input.email,
      subject,
      text,
    }),
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    throw new Error(`Resend API returned status ${response.status}`);
  }
}
