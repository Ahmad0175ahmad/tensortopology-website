import { z } from 'zod';

export const ContactInputSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(80, 'Name is too long'),
  email: z.string().email('Enter a valid email address'),
  topic: z.enum(['ai', 'network', 'infrastructure', 'cloud', 'security', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message is too long'),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof ContactInputSchema>;
