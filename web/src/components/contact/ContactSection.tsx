'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { Sheet } from '../ui/Sheet';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { team, site } from '@/content/site';
import { sendContactMessage, type ContactFormData } from '@/lib/api';

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    topic: 'ai',
    message: '',
    website: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showForm, setShowForm] = useState(true); // Always show form

  // Check if API is configured (for functionality, not visibility)
  const apiConfigured = !!process.env.NEXT_PUBLIC_API_URL;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('sending');
    setErrors({});

    try {
      const result = await sendContactMessage(formData);

      if (result.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', topic: 'ai', message: '', website: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const failureEmail = formData.topic === 'network' ? site.contact.networkEmail : site.contact.aiEmail;

  return (
    <section id="contact" className="py-16 px-4 relative overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neuron/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fiber/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading id="contact-heading">Contact</SectionHeading>
        <p className="text-lg mt-4 mb-12 text-center max-w-2xl mx-auto">
          Tell us what you are building. Choose who you want to reach.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {team.map((person) => {
            const isAhmed = person.id === 'ahmed';
            return (
              <Sheet key={person.id} track={isAhmed ? 'ai' : 'network'}>
                <div className="p-6 relative overflow-hidden">
                  {/* Decorative corner gradient - More vibrant and darker */}
                  <div 
                    className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-30`}
                    style={{
                      background: isAhmed 
                        ? 'radial-gradient(circle at top right, #FF1CF7 0%, #B249F8 50%, transparent 100%)'
                        : 'radial-gradient(circle at top right, #FF6B35 0%, #FFB830 50%, transparent 100%)'
                    }}
                  />
                  
                  <h3 className="font-heading text-2xl mb-2 relative z-10">{person.name}</h3>
                  <p className={`mb-6 font-medium relative z-10 ${isAhmed ? 'text-neuron' : 'text-fiber'}`}>
                    {person.role}
                  </p>

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-bp-100 transition-colors">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center ${isAhmed ? 'bg-neuron/10 text-neuron' : 'bg-fiber/10 text-fiber'}`}>
                        📞
                      </span>
                      <a
                        href={`tel:${person.phone.tel}`}
                        className="text-link hover:underline focus:underline flex-1"
                      >
                        <span className="text-sm text-ink/60 block">Call</span>
                        <span>{person.phone.display}</span>
                      </a>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-bp-100 transition-colors">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center ${isAhmed ? 'bg-neuron/10 text-neuron' : 'bg-fiber/10 text-fiber'}`}>
                        💬
                      </span>
                      <a
                        href={person.phone.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link hover:underline focus:underline flex-1"
                      >
                        <span className="text-sm text-ink/60 block">WhatsApp</span>
                        <span>{person.name}</span>
                      </a>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-bp-100 transition-colors">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center ${isAhmed ? 'bg-neuron/10 text-neuron' : 'bg-fiber/10 text-fiber'}`}>
                        ✉️
                      </span>
                      <a
                        href={`mailto:${person.email}`}
                        className="text-link hover:underline focus:underline flex-1"
                      >
                        <span className="text-sm text-ink/60 block">Email</span>
                        <span className="break-all">{person.email}</span>
                      </a>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-bp-100 transition-colors">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center ${isAhmed ? 'bg-neuron/10 text-neuron' : 'bg-fiber/10 text-fiber'}`}>
                        💼
                      </span>
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link hover:underline focus:underline flex-1"
                      >
                        <span className="text-sm text-ink/60 block">LinkedIn</span>
                        <span>Connect with {person.name}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Sheet>
            );
          })}
        </div>

        {showForm && (
          <div className="max-w-2xl mx-auto">
            <Sheet track="shared">
              <div className="p-8 relative overflow-hidden bg-gradient-to-br from-paper via-paper to-bp-50">
                {/* Decorative gradient orbs - Multiple colorful gradients */}
                <div 
                  className="absolute -top-10 -right-10 w-56 h-56 rounded-full opacity-20 blur-3xl"
                  style={{
                    background: 'radial-gradient(circle, #FF1CF7 0%, #B249F8 40%, transparent 70%)'
                  }}
                />
                <div 
                  className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full opacity-20 blur-3xl"
                  style={{
                    background: 'radial-gradient(circle, #FF6B35 0%, #FFB830 40%, transparent 70%)'
                  }}
                />
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl"
                  style={{
                    background: 'radial-gradient(circle, #00D9FF 0%, #7B2BFF 50%, transparent 70%)'
                  }}
                />
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-heading font-bold mb-3 bg-gradient-to-r from-neuron via-fiber to-link bg-clip-text text-transparent">
                      Send us a message
                    </h3>
                    <p className="text-ink/60">We typically respond within 24 hours</p>
                  </div>
                
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-ink">
                      Your name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-bp-300 rounded-lg bg-white/80 backdrop-blur-sm text-ink focus:outline-none focus:border-transparent focus:ring-2 focus:ring-link transition-all shadow-sm hover:shadow-md"
                        disabled={status === 'sending'}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-ink">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-bp-300 rounded-lg bg-white/80 backdrop-blur-sm text-ink focus:outline-none focus:border-transparent focus:ring-2 focus:ring-link transition-all shadow-sm hover:shadow-md"
                        disabled={status === 'sending'}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <fieldset className="p-5 rounded-xl bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm border-2 border-bp-200 shadow-sm">
                    <legend className="block mb-4 font-semibold text-ink px-3 text-lg">Who do you want to reach?</legend>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/80 cursor-pointer transition-all border-2 border-transparent hover:border-neuron/20 hover:shadow-md group">
                        <input
                          type="radio"
                          name="topic"
                          value="ai"
                          checked={formData.topic === 'ai'}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value as 'ai' })}
                          disabled={status === 'sending'}
                          className="w-5 h-5 text-neuron focus:ring-2 focus:ring-neuron"
                        />
                        <span className="flex items-center gap-3 flex-1">
                          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-neuron to-purple-600 flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition-transform">🤖</span>
                          <span className="font-medium text-base">AI & Automation</span>
                        </span>
                      </label>
                      <label className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/80 cursor-pointer transition-all border-2 border-transparent hover:border-fiber/20 hover:shadow-md group">
                        <input
                          type="radio"
                          name="topic"
                          value="network"
                          checked={formData.topic === 'network'}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value as 'network' })}
                          disabled={status === 'sending'}
                          className="w-5 h-5 text-fiber focus:ring-2 focus:ring-fiber"
                        />
                        <span className="flex items-center gap-3 flex-1">
                          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-fiber to-yellow-500 flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition-transform">🌐</span>
                          <span className="font-medium text-base">Networking</span>
                        </span>
                      </label>
                      <label className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/80 cursor-pointer transition-all border-2 border-transparent hover:border-link/20 hover:shadow-md group">
                        <input
                          type="radio"
                          name="topic"
                          value="other"
                          checked={formData.topic === 'other'}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value as 'other' })}
                          disabled={status === 'sending'}
                          className="w-5 h-5 text-link focus:ring-2 focus:ring-link"
                        />
                        <span className="flex items-center gap-3 flex-1">
                          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-link to-blue-600 flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition-transform">💡</span>
                          <span className="font-medium text-base">Something else</span>
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-ink">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-bp-300 rounded-lg bg-white/80 backdrop-blur-sm text-ink focus:outline-none focus:border-transparent focus:ring-2 focus:ring-link transition-all resize-y shadow-sm hover:shadow-md"
                      disabled={status === 'sending'}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    aria-hidden="true"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute opacity-0 pointer-events-none"
                    style={{ left: '-9999px' }}
                  />

                  <div className="pt-2">
                    <Button type="submit" disabled={status === 'sending'} className="w-full bg-gradient-to-r from-neuron via-link to-fiber hover:shadow-lg transition-all text-lg py-4">
                      {status === 'sending' ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        'Send message'
                      )}
                    </Button>
                  </div>

                  {status === 'sending' && (
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-link/10 to-neuron/10 border-l-4 border-link rounded-lg shadow-sm">
                      <div className="w-5 h-5 border-2 border-link border-t-transparent rounded-full animate-spin" />
                      <p className="text-sm text-bp-800 font-medium">
                        Sending your message... this may take a few seconds.
                      </p>
                    </div>
                  )}

                  {status === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg shadow-md" role="status" aria-live="polite">
                      <span className="text-3xl">✅</span>
                      <div>
                        <p className="text-sm text-green-800 font-bold mb-1">
                          Message sent successfully!
                        </p>
                        <p className="text-xs text-green-700">
                          We'll reply to your email soon.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg shadow-md" role="alert">
                      <span className="text-3xl">⚠️</span>
                      <div className="text-sm text-red-800">
                        <p className="font-bold mb-2">The message could not be sent.</p>
                        <p>
                          <a href={`mailto:${failureEmail}`} className="text-link hover:underline focus:underline font-medium inline-flex items-center gap-1">
                            Email us directly instead →
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </form>
                </div>
              </div>
            </Sheet>
          </div>
        )}
      </div>
    </section>
  );
}
