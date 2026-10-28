import { loadEnv } from './env';
import { createApp } from './app';
import { sendContactMail } from './mailer';

let config;
try {
  config = loadEnv();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

const app = createApp({
  allowedOrigins: config.allowedOrigins,
  sendMail: (input) => sendContactMail(input, config),
});

const server = app.listen(config.port, () => {
  console.log(`API listening on port ${config.port}`);
});

process.on('SIGTERM', () => {
  server.close();
});
