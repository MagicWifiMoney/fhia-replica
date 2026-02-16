'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
                setErrorMsg(result.error || 'Something went wrong.');
            }
        } catch {
            setStatus('error');
            setErrorMsg('Network error. Please try again or call us at 631-659-0189.');
        }
    }

    if (status === 'success') {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-poppins font-semibold text-xl text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">
                    Thank you! One of our agents will contact you within 24 hours.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-gold hover:text-gold-600 font-semibold text-sm"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="contact-firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                    </label>
                    <input
                        type="text"
                        id="contact-firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="contact-lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                    </label>
                    <input
                        type="text"
                        id="contact-lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                </label>
                <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                />
            </div>
            <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                </label>
                <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                />
            </div>
            <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                </label>
                <select
                    id="contact-subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                >
                    <option value="">Select a topic...</option>
                    <option value="quote">Request a Quote</option>
                    <option value="policy">Policy Question</option>
                    <option value="claim">Claims Help</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors resize-none"
                ></textarea>
            </div>

            {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                    {errorMsg}
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                    </span>
                ) : (
                    'Send Message'
                )}
            </button>
        </form>
    );
}
