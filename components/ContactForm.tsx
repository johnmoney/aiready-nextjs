// components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '',           // ← honeypot field
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check – if filled → likely spam
    if (formData.website.trim() !== '') {
      // Silently "succeed" for bots (don't reveal it's spam detection)
      setStatus('success');
      setFormData({ name: '', email: '', message: '', website: '' });
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '', website: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dark-text">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-dark-text focus:border-primary focus:ring-primary"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark-text">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-dark-text focus:border-primary focus:ring-primary"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark-text">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={4}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-dark-text focus:border-primary focus:ring-primary"
          placeholder="Your message"
        />
      </div>

      {/* Honeypot field – hidden from humans */}
      <div className="hidden">
        <label htmlFor="website" className="sr-only">
          Website (do not fill this out)
        </label>
        <input
          id="website"
          type="text"
          name="website"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-hover disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-center text-sm text-accent2">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-center text-sm text-red-500">{errorMessage}</p>
      )}
    </form>
  );
}