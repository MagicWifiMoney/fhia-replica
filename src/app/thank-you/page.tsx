import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Thank You | First Heritage Insurance Agency',
    description: 'Thank you for contacting First Heritage Insurance Agency. Our team will be in touch shortly.',
};

export default function ThankYouPage() {
    return (
        <section className="py-20 md:py-32">
            <div className="container-custom text-center max-w-2xl mx-auto">
                {/* Success Icon */}
                <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                <h1 className="font-poppins text-3xl md:text-4xl font-bold text-navy mb-4">
                    Thank You!
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                    Your message has been received. One of our insurance specialists will review your information and get back to you shortly — typically within one business day.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
                    <h3 className="font-poppins font-semibold text-navy mb-3">What happens next?</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-navy text-sm font-bold">1</span>
                            <span>Our team reviews your information and insurance needs</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-navy text-sm font-bold">2</span>
                            <span>We compare quotes from multiple top-rated carriers</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-navy text-sm font-bold">3</span>
                            <span>A dedicated agent contacts you with personalized options</span>
                        </li>
                    </ul>
                </div>

                <div className="flex justify-center gap-4 flex-wrap">
                    <Link href="/" className="btn-primary">
                        Back to Home
                    </Link>
                    <a href="tel:631-659-0189" className="btn-outline">
                        Call (631) 659-0189
                    </a>
                </div>
            </div>
        </section>
    );
}
