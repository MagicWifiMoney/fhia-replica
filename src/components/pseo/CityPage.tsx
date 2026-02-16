import Link from 'next/link';
import { CityData, COVERAGE_TYPES } from '@/lib/pseo-commercial-auto';
import { InsuranceServiceSchema, BreadcrumbSchema } from '@/components/StructuredData';

export default function CityPage({ city }: { city: CityData }) {
    return (
        <>
            <InsuranceServiceSchema
                name={`Commercial Auto Insurance in ${city.name}, NY`}
                description={`Affordable commercial auto and fleet insurance for businesses in ${city.name}, ${city.county} County, Long Island. Compare quotes from multiple carriers.`}
                url={`/commercial-auto-insurance/${city.slug}`}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', href: '/' },
                { name: 'Commercial Auto Insurance', href: '/commercial-auto-insurance' },
                { name: city.name, href: `/commercial-auto-insurance/${city.slug}` },
            ]} />

            {/* Hero */}
            <section className="bg-navy py-16 md:py-20">
                <div className="container-custom">
                    <nav className="mb-4 flex items-center gap-2 text-sm">
                        <Link href="/commercial-auto-insurance" className="text-gray-400 hover:text-gold transition-colors">Commercial Auto Insurance</Link>
                        <span className="text-gray-500">/</span>
                        <span className="text-gold">{city.name}, NY</span>
                    </nav>
                    <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                        Commercial Auto Insurance in {city.name}, NY
                    </h1>
                    <p className="text-gray-300 text-lg max-w-3xl mb-2">
                        {city.description}
                    </p>
                    <p className="text-gray-400 text-base max-w-3xl">
                        FHIA provides commercial auto and fleet insurance for businesses in {city.name} and throughout {city.county} County. We compare quotes from multiple carriers to find you the best coverage at the lowest price.
                    </p>
                    <div className="flex gap-4 mt-8 flex-wrap">
                        <Link href="/quote" className="btn-primary">Get a Free Quote</Link>
                        <a href="tel:631-659-0189" className="btn-outline">Call (631) 659-0189</a>
                    </div>
                </div>
            </section>

            {/* Coverage Types */}
            <section className="py-16 md:py-20">
                <div className="container-custom">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-3">
                        Commercial Auto Coverage for {city.name} Businesses
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-3xl">
                        Every {city.name} business has different fleet insurance needs. Here are the core coverages we customize for your operation:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {COVERAGE_TYPES.map((coverage) => (
                            <div key={coverage.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="font-poppins font-bold text-navy mb-2">{coverage.name}</h3>
                                <p className="text-gray-600 text-sm">{coverage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why FHIA */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-6">
                                Why {city.name} Businesses Choose FHIA
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: 'Local Expertise', desc: `We've been insuring businesses across ${city.county} County since 2003. We know the roads, the risks, and the carriers that work best for ${city.name} fleets.` },
                                    { title: 'In-House Underwriting', desc: 'Our exclusive commercial auto program means faster approvals, competitive rates, and coverage tailored to how your fleet actually operates.' },
                                    { title: 'Multi-Carrier Comparison', desc: `We compare quotes from top-rated carriers to find ${city.name} businesses the best coverage at the lowest price — no obligation.` },
                                    { title: 'One Policy, Simple Management', desc: 'Cover all your vehicles under one fleet policy. Add or remove vehicles anytime. One renewal date, one point of contact.' },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4">
                                        <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-poppins font-semibold text-navy">{item.title}</h3>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-navy rounded-xl p-8 text-center">
                            <h3 className="font-poppins text-2xl font-bold text-white mb-4">
                                Serving {city.name} &amp; {city.county} County
                            </h3>
                            <p className="text-gray-300 mb-2">ZIP Code: {city.zip}</p>
                            <p className="text-gray-300 mb-6">
                                Our office is located at 445 Broadhollow Rd, Suite 25, Melville, NY 11747 — just a short drive from {city.name}.
                            </p>
                            <Link href="/quote" className="btn-primary block mb-3">Get a Free Quote</Link>
                            <Link href="/contact-us" className="btn-outline block text-sm">Visit Our Office</Link>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <p className="text-gray-400 text-xs mb-1">Call us directly</p>
                                <a href="tel:631-659-0189" className="text-gold font-semibold text-lg hover:underline">(631) 659-0189</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="py-16">
                <div className="container-custom">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-8">
                        Industries We Insure in {city.name}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: 'Construction', href: '/commercial-auto-insurance/construction-fleets' },
                            { name: 'HVAC', href: '/commercial-auto-insurance/hvac-contractors' },
                            { name: 'Plumbing', href: '/commercial-auto-insurance/plumbing-companies' },
                            { name: 'Electrical', href: '/commercial-auto-insurance/electrical-contractors' },
                            { name: 'Landscaping', href: '/commercial-auto-insurance/landscaping-companies' },
                            { name: 'Delivery', href: '/commercial-auto-insurance/delivery-courier' },
                            { name: 'Trucking', href: '/commercial-auto-insurance/trucking-companies' },
                            { name: 'Moving', href: '/commercial-auto-insurance/moving-companies' },
                        ].map((industry) => (
                            <Link
                                key={industry.name}
                                href={industry.href}
                                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gold hover:shadow-md transition-all text-center"
                            >
                                <span className="font-poppins font-semibold text-navy text-sm">{industry.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gold py-12">
                <div className="container-custom text-center">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-4">
                        Get Commercial Auto Insurance in {city.name} Today
                    </h2>
                    <p className="text-navy/80 mb-6 max-w-2xl mx-auto">
                        Compare quotes from multiple carriers and save up to 30% on fleet insurance. No obligation, no pressure.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/quote" className="btn-secondary">Get a Free Quote</Link>
                        <a href="tel:631-659-0189" className="bg-white text-navy font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300">Call (631) 659-0189</a>
                    </div>
                </div>
            </section>
        </>
    );
}
