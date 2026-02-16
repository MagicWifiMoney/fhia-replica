import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Not Found | First Heritage Insurance Agency',
    description: 'The page you are looking for could not be found. Return to FHIA homepage.',
};

export default function NotFound() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center bg-gray-50">
            <div className="container-custom text-center py-20">
                <div className="max-w-lg mx-auto">
                    {/* Shield icon */}
                    <div className="mb-8">
                        <svg className="w-24 h-24 mx-auto text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>

                    <h1 className="font-poppins text-6xl font-bold text-navy mb-4">404</h1>
                    <h2 className="font-poppins text-2xl font-semibold text-navy mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Let us help you find the right coverage instead.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/" className="btn-primary">
                            Back to Home
                        </Link>
                        <Link href="/quote" className="btn-secondary">
                            Get a Free Quote
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-gray-500 text-sm mb-1">Need help? Call us directly:</p>
                        <a href="tel:631-659-0189" className="text-navy font-semibold text-xl hover:text-gold transition-colors">
                            631-659-0189
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
