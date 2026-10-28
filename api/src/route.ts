import type { MailAccount, Config } from './env';

export function resolveAccount(
  topic: 'ai' | 'network' | 'other',
  cfg: Pick<Config, 'ai' | 'network'>
): MailAccount {
  if (topic === 'network' && cfg.network) {
    return cfg.network;
  }
  return cfg.ai;
}
