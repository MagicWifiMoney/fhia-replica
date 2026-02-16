'use client';

import { useState } from 'react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Expanded panel */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-3 animate-in">
                    {/* Header */}
                    <div className="bg-navy p-5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">FHIA Support</p>
                                <p className="text-gray-300 text-xs flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
                                    Available now
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <p className="text-gray-700 text-sm mb-5">
                            Hi there! 👋 How can we help you today? Reach us instantly:
                        </p>

                        {/* Text Us */}
                        <a
                            href="sms:+16316590189"
                            className="flex items-center gap-3 p-3 rounded-xl bg-gold/10 hover:bg-gold/20 transition-colors mb-3 group"
                        >
                            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-navy font-semibold text-sm group-hover:text-gold transition-colors">Text Us</p>
                                <p className="text-gray-500 text-xs">631-659-0189</p>
                            </div>
                        </a>

                        {/* Call Us */}
                        <a
                            href="tel:631-659-0189"
                            className="flex items-center gap-3 p-3 rounded-xl bg-navy/5 hover:bg-navy/10 transition-colors mb-3 group"
                        >
                            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-navy font-semibold text-sm group-hover:text-gold transition-colors">Call Us</p>
                                <p className="text-gray-500 text-xs">631-659-0189</p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:service@fhia.net"
                            className="flex items-center gap-3 p-3 rounded-xl bg-navy/5 hover:bg-navy/10 transition-colors group"
                        >
                            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-navy font-semibold text-sm group-hover:text-gold transition-colors">Email Us</p>
                                <p className="text-gray-500 text-xs">service@fhia.net</p>
                            </div>
                        </a>
                    </div>
                </div>
            )}

            {/* FAB Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-gray-600 rotate-0' : 'bg-gold hover:bg-gold-600'
                    }`}
                aria-label={isOpen ? 'Close chat' : 'Text us'}
            >
                {isOpen ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )}
            </button>

            {/* Pulse ring when closed */}
            {!isOpen && (
                <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-gold/40 animate-ping pointer-events-none" />
            )}
        </div>
    );
}
