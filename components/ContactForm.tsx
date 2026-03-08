// components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    phone: '',
    message: '',
    website: '', // Honeypot
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website.trim() !== '') {
      setStatus('success');
      setFormData({ name: '', email: '', institution: '', phone: '', message: '', website: '' });
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setStatus('success');
      setFormData({ name: '', email: '', institution: '', phone: '', message: '', website: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dark-text">Full Name</label>
        <input id="name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark-text">Email</label>
        <input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2" />
      </div>
      <div>
        <label htmlFor="institution" className="block text-sm font-medium text-dark-text">Institution/School Name (or &apos;Individual&apos;)</label>
        <input id="institution" type="text" value={formData.institution} onChange={(e) => setFormData({ ...formData, institution: e.target.value })} required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-dark-text">Phone (Optional)</label>
        <input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark-text">Quick Question (Optional)</label>
        <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="What’s the biggest advising challenge you’re facing?" />
      </div>
      <div className="hidden">
        <input id="website" type="text" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" disabled={status === 'sending'} className="w-full rounded-lg bg-primary px-6 py-3 text-white font-medium hover:bg-primary-hover disabled:opacity-50">
        {status === 'sending' ? 'Sending...' : 'Reserve My Free 30-Min Session'}
      </button>
      {status === 'success' && <p className="text-center text-accent2">Request sent! We&apos;ll be in touch soon.</p>}
      {status === 'error' && <p className="text-center text-red-500">{errorMessage}</p>}
    </form>
  );
}