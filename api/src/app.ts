import express, { type Request, type Response, type NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { ContactInputSchema, type ContactInput } from './schema';

export type SendMail = (input: ContactInput) => Promise<void>;

export function createApp(opts: { allowedOrigins: string[]; sendMail: SendMail }) {
  const app = express();

  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  // Security middleware
  app.use(helmet());
  app.use(cors({ origin: opts.allowedOrigins }));
  app.use(express.json({ limit: '10kb' }));

  // Health check
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  // Rate limiter for contact endpoint
  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (_req, res) => {
      res.status(429).json({ ok: false, error: 'rate_limited' });
    },
  });

  // Contact endpoint
  app.post('/api/contact', contactLimiter, async (req: Request, res: Response) => {
    // Validate input
    const parsed = ContactInputSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const input = parsed.data;

    // Honeypot check
    if (input.website) {
      return res.status(202).json({ ok: true });
    }

    // Send email
    try {
      await opts.sendMail(input);
      return res.status(202).json({ ok: true });
    } catch (error) {
      return res.status(502).json({ ok: false, error: 'mail_failed' });
    }
  });

  // Malformed JSON handler
  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    if (err instanceof SyntaxError && 'body' in err) {
      return res.status(400).json({ ok: false, error: 'bad_json' });
    }
    if (err.type === 'entity.too.large') {
      return res.status(413).json({ ok: false, error: 'too_large' });
    }
    next(err);
  });

  // 404 handler
  app.use((_req, res) => {
    res.status(404).json({ ok: false, error: 'not_found' });
  });

  return app;
}
