'use client';

import { useState } from 'react';

export default function QuoteForm() {
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
                body: JSON.stringify({ ...data, subject: 'Quote Request' }),
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
                <h3 className="font-poppins font-semibold text-xl text-green-800 mb-2">Quote Request Sent!</h3>
                <p className="text-green-700">
                    Thank you! One of our licensed agents will reach out within 24 hours with personalized coverage options.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-gold hover:text-gold-600 font-semibold text-sm"
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Insurance Type */}
            <div>
                <label htmlFor="quote-insuranceType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Insurance *
                </label>
                <select
                    id="quote-insuranceType"
                    name="insuranceType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                >
                    <option value="">Select insurance type...</option>
                    <option value="personal-auto">Personal Auto Insurance</option>
                    <option value="commercial-auto">Commercial Auto / Fleet Insurance</option>
                    <option value="home">Homeowners Insurance</option>
                    <option value="renters">Renters Insurance</option>
                    <option value="business">Business Insurance</option>
                    <option value="captive">Captive Insurance</option>
                    <option value="other">Other / Multiple</option>
                </select>
            </div>

            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="quote-firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                    </label>
                    <input
                        type="text"
                        id="quote-firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="quote-lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                    </label>
                    <input
                        type="text"
                        id="quote-lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="quote-email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                    </label>
                    <input
                        type="tel"
                        id="quote-phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    />
                </div>
            </div>

            {/* Address */}
            <div>
                <label htmlFor="quote-address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                </label>
                <input
                    type="text"
                    id="quote-address"
                    name="address"
                    placeholder="Street address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <div>
                    <label htmlFor="quote-city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                    </label>
                    <input
                        type="text"
                        id="quote-city"
                        name="city"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="quote-state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                    </label>
                    <select
                        id="quote-state"
                        name="state"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    >
                        <option value="">Select...</option>
                        <option value="NY">New York</option>
                        <option value="NJ">New Jersey</option>
                        <option value="CT">Connecticut</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="FL">Florida</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="quote-zip" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                    </label>
                    <input
                        type="text"
                        id="quote-zip"
                        name="zip"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    />
                </div>
            </div>

            {/* Additional Info */}
            <div>
                <label htmlFor="quote-details" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Details
                </label>
                <textarea
                    id="quote-details"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your specific needs, current coverage, or any questions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors resize-none"
                ></textarea>
            </div>

            {/* Preferred Contact */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                </label>
                <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="contactMethod" value="phone" className="text-gold focus:ring-gold" defaultChecked />
                        <span className="text-gray-700">Phone</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="contactMethod" value="email" className="text-gold focus:ring-gold" />
                        <span className="text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="contactMethod" value="either" className="text-gold focus:ring-gold" />
                        <span className="text-gray-700">Either</span>
                    </label>
                </div>
            </div>

            {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                    {errorMsg}
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                    </span>
                ) : (
                    'Get My Free Quote'
                )}
            </button>

            <p className="text-center text-gray-500 text-sm">
                By submitting this form, you agree to be contacted by a licensed agent.
            </p>
        </form>
    );
}
