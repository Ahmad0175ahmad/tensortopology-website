export type ContactFormData = {
  name: string;
  email: string;
  topic: 'ai' | 'network' | 'other';
  message: string;
  website?: string;
};

export type ContactResponse = {
  ok: boolean;
  error?: string;
};

export async function sendContactMessage(data: ContactFormData): Promise<ContactResponse> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  if (!apiUrl) {
    throw new Error('API URL not configured');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(`${apiUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const result = await response.json();
    return result;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}
