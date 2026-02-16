import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nassau County Insurance | Auto Home Business | FHIA',
    description: 'Insurance services for Nassau County, Long Island. Serving Garden City, Hicksville, Massapequa, Mineola, and surrounding areas since 2003.',
};

const towns = [
    { name: 'Garden City', description: 'Premium insurance solutions for Garden City residents.' },
    { name: 'Carle Place', description: 'Personalized coverage for families in Carle Place.' },
    { name: 'Hicksville', description: 'Affordable auto, home, and business insurance.' },
    { name: 'Massapequa', description: 'Comprehensive coverage for the Massapequa community.' },
    { name: 'Mineola', description: 'Full-service insurance near the Nassau County seat.' },
    { name: 'Freeport', description: 'Marine, auto, and homeowners insurance for Freeport.' },
    { name: 'Hempstead', description: 'Serving one of Long Island\'s largest towns.' },
    { name: 'Levittown', description: 'Trusted insurance for Levittown families.' },
];

const services = [
    { name: 'Commercial Auto Insurance', href: '/commercial-auto-insurance', desc: 'Fleet and commercial vehicle coverage' },
    { name: 'Personal Auto Insurance', href: '/personal-auto-insurance', desc: 'Affordable car insurance' },
    { name: 'Business Insurance', href: '/business-insurance', desc: 'Liability, property, and more' },
    { name: 'Home Insurance', href: '/home-insurance', desc: 'Protect your biggest investment' },
];

export default function NassauCountyPage() {
    return (
        <>
            <section className="bg-navy py-20">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <nav className="mb-4">
                            <Link href="/locations" className="text-gold hover:underline text-sm">← All Locations</Link>
                        </nav>
                        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
                            Nassau County Insurance Services
                        </h1>
                        <p className="text-gray-300 text-lg">
                            While our office is based in Melville, we proudly serve clients throughout Nassau County. From Garden City to Massapequa, we provide personalized insurance solutions to families and businesses across the county.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <h2 className="font-poppins text-3xl font-bold text-navy mb-8 text-center">
                        Towns We Serve in Nassau County
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {towns.map((town) => (
                            <div key={town.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-3">
                                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-poppins font-semibold text-lg text-navy mb-1">{town.name}</h3>
                                <p className="text-gray-600 text-sm">{town.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container-custom">
                    <h2 className="font-poppins text-3xl font-bold text-navy mb-8 text-center">
                        Insurance Services Available
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {services.map((service) => (
                            <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
                            >
                                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-navy group-hover:text-gold transition-colors">{service.name}</h3>
                                    <p className="text-gray-500 text-sm">{service.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-navy">
                <div className="container-custom text-center">
                    <h2 className="font-poppins text-3xl font-bold text-white mb-4">
                        Get Nassau County Insurance Coverage Today
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact us for a free, no-obligation quote. We&apos;re just a short drive from anywhere in Nassau County.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/quote" className="btn-primary">Get a Free Quote</Link>
                        <a href="tel:631-659-0189" className="btn-outline">Call 631-659-0189</a>
                    </div>
                </div>
            </section>
        </>
    );
}
