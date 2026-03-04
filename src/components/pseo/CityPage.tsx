import Link from 'next/link';
import { CityData, COVERAGE_TYPES, getCityBySlug } from '@/lib/pseo-commercial-auto';
import { InsuranceServiceSchema, BreadcrumbSchema, WebPageSchema, AggregateRatingSchema } from '@/components/StructuredData';
import TLDRBlock from '@/components/TLDRBlock';
import QuoteFormEmbed from '@/components/QuoteFormEmbed';

// ── FAQ data per city (generated dynamically) ──

function getCityFAQs(city: CityData) {
    return [
        {
            q: `How much does commercial auto insurance cost in ${city.name}, NY?`,
            a: `Commercial auto insurance in ${city.name} typically costs $1,800\u2013$6,000 per vehicle per year, depending on vehicle type, driver history, and coverage limits. Pickup trucks and vans are on the lower end, while dump trucks and semi-trucks cost more. FHIA compares quotes from 50+ carriers to find the best rate for ${city.name} businesses.`,
        },
        {
            q: `What are the minimum auto insurance requirements for commercial vehicles in ${city.name}?`,
            a: `New York State requires all commercially registered vehicles in ${city.name} to carry minimum 25/50/10 liability coverage ($25,000 per person/$50,000 per accident bodily injury, $10,000 property damage), plus $50,000 PIP no-fault and 25/50 uninsured motorist coverage. Most ${city.name} businesses should carry higher limits for adequate protection.`,
        },
        {
            q: `Does FHIA serve businesses in ${city.name}, ${city.county} County?`,
            a: `Yes. FHIA\u2019s office is located at 445 Broadhollow Rd, Suite 25, Melville, NY 11747 \u2014 serving all of ${city.county} County including ${city.name} (ZIP ${city.zip}). We\u2019ve been insuring Long Island businesses since 2003. Call (631) 659-0189 for a free quote.`,
        },
        {
            q: `Can I get same-day proof of insurance for my ${city.name} business?`,
            a: `Yes. FHIA provides same-day certificates of insurance (COIs) for ${city.name} businesses. Many contractors and fleet operators need COIs urgently for job sites or contracts \u2014 we handle these requests daily. Call (631) 659-0189 or request your COI online.`,
        },
        {
            q: `What types of commercial vehicles can FHIA insure in ${city.name}?`,
            a: `FHIA insures all commercial vehicle types in ${city.name}: pickup trucks, cargo vans, box trucks, dump trucks, flatbed trucks, semi-trucks, tow trucks, food trucks, ambulettes, and specialty vehicles. Whether you have a single work truck or a fleet of 100+, we compare rates from 50+ carriers.`,
        },
    ];
}

// ── Coverage comparison table data ──

const COVERAGE_COMPARISON = [
    { coverage: 'Liability (25/50/10)', minimum: true, recommended: true, fleet: true, note: 'NY state minimum requirement' },
    { coverage: 'Collision', minimum: false, recommended: true, fleet: true, note: 'Covers your vehicle in accidents' },
    { coverage: 'Comprehensive', minimum: false, recommended: true, fleet: true, note: 'Theft, weather, vandalism' },
    { coverage: 'Uninsured Motorist', minimum: true, recommended: true, fleet: true, note: 'NY requires 25/50 UM' },
    { coverage: 'Medical Payments', minimum: false, recommended: true, fleet: true, note: 'Driver & passenger medical' },
    { coverage: 'Hired & Non-Owned', minimum: false, recommended: false, fleet: true, note: 'Rented/employee vehicles' },
    { coverage: 'Umbrella ($1M+)', minimum: false, recommended: false, fleet: true, note: 'Extra liability protection' },
];

export default function CityPage({ city }: { city: CityData }) {
    const faqs = getCityFAQs(city);
    const nearbyCities = city.nearbyCities
        .map(slug => getCityBySlug(slug))
        .filter((c): c is CityData => c !== undefined);

    // FAQ schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
            },
        })),
    };

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
            <WebPageSchema
                url={`/commercial-auto-insurance/${city.slug}`}
                title={`Commercial Auto Insurance in ${city.name}, NY`}
                description={`Compare commercial auto insurance quotes for ${city.name}, ${city.county} County businesses. 50+ carriers, same-day COIs. Updated March 2026.`}
            />
            <AggregateRatingSchema />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero — 2 columns: text left, form right */}
            <section className="bg-navy py-16 md:py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <nav className="mb-4 flex items-center gap-2 text-sm">
                                <Link href="/commercial-auto-insurance" className="text-gray-400 hover:text-gold transition-colors">Commercial Auto Insurance</Link>
                                <span className="text-gray-500">/</span>
                                <span className="text-gold">{city.name}, NY</span>
                            </nav>
                            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                                Commercial Auto Insurance in {city.name}, NY
                            </h1>
                            <p className="text-gray-300 text-lg mb-2">
                                {city.description}
                            </p>
                            <p className="text-gray-400 text-base">
                                FHIA provides commercial auto and fleet insurance for businesses in {city.name} and throughout {city.county} County. We compare quotes from 50+ carriers to find you the best coverage at the lowest price.
                            </p>
                            <div className="flex gap-4 mt-8 flex-wrap">
                                <Link href="/quote" className="btn-primary">Get a Free Quote</Link>
                                <a href="tel:631-659-0189" className="btn-outline">Call (631) 659-0189</a>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <QuoteFormEmbed variant="hero" />
                        </div>
                    </div>
                </div>
            </section>

            {/* TL;DR Citation Block */}
            <section className="py-8">
                <div className="container-custom">
                    <TLDRBlock content={city.tldr} />
                </div>
            </section>

            {/* Coverage Types */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-3">
                        What Commercial Auto Coverage Do {city.name} Businesses Need?
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-3xl">
                        Every {city.name} business has different fleet insurance needs. New York requires minimum 25/50/10 liability for all commercially registered vehicles, but most businesses need more. Here are the core coverages we customize for your operation:
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

            {/* Coverage Comparison Table */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-3">
                        How Do Coverage Levels Compare for {city.name} Businesses?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-3xl">
                        Not sure how much coverage your {city.name} fleet needs? Here&apos;s how the three most common coverage tiers compare:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl border border-gray-200 text-sm">
                            <thead>
                                <tr className="bg-navy text-white">
                                    <th className="text-left p-4 font-poppins font-semibold">Coverage</th>
                                    <th className="text-center p-4 font-poppins font-semibold">NY Minimum</th>
                                    <th className="text-center p-4 font-poppins font-semibold">Recommended</th>
                                    <th className="text-center p-4 font-poppins font-semibold">Fleet Policy</th>
                                    <th className="text-left p-4 font-poppins font-semibold hidden md:table-cell">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COVERAGE_COMPARISON.map((row) => (
                                    <tr key={row.coverage} className="border-t border-gray-100">
                                        <td className="p-4 font-medium text-navy">{row.coverage}</td>
                                        <td className="p-4 text-center">{row.minimum ? '\u2705' : '\u2014'}</td>
                                        <td className="p-4 text-center">{row.recommended ? '\u2705' : '\u2014'}</td>
                                        <td className="p-4 text-center">{row.fleet ? '\u2705' : '\u2014'}</td>
                                        <td className="p-4 text-gray-500 hidden md:table-cell">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Why FHIA */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-6">
                                Why Do {city.name} Businesses Choose FHIA?
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: 'Local Expertise Since 2003', desc: `We've been insuring businesses across ${city.county} County for over 20 years. We know the roads, the risks, and the carriers that work best for ${city.name} fleets.` },
                                    { title: 'In-House Underwriting', desc: 'Our exclusive commercial auto program means faster approvals, competitive rates, and coverage tailored to how your fleet actually operates.' },
                                    { title: '50+ Carrier Comparison', desc: `We compare quotes from over 50 top-rated carriers to find ${city.name} businesses the best coverage at the lowest price \u2014 no obligation.` },
                                    { title: 'Same-Day COIs', desc: `Need a certificate of insurance for a job site or contract? ${city.name} businesses get same-day COIs from FHIA \u2014 just call (631) 659-0189.` },
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
                                Our office is located at 445 Broadhollow Rd, Suite 25, Melville, NY 11747 &mdash; just a short drive from {city.name}.
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

            {/* Industries Served — expanded */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-3">
                        What Industries Need Commercial Auto Insurance in {city.name}?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-3xl">
                        {city.name} is home to a diverse business community. These industries rely on commercial vehicle coverage to keep their operations running:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: 'Construction', href: '/commercial-auto-insurance/construction-fleets', desc: 'Dump trucks, haulers, crew vans' },
                            { name: 'HVAC', href: '/commercial-auto-insurance/hvac-contractors', desc: 'Service vans, refrigerant transport' },
                            { name: 'Plumbing', href: '/commercial-auto-insurance/plumbing-companies', desc: 'Service vans, utility trucks' },
                            { name: 'Electrical', href: '/commercial-auto-insurance/electrical-contractors', desc: 'Bucket trucks, cable pullers' },
                            { name: 'Landscaping', href: '/commercial-auto-insurance/landscaping-companies', desc: 'Pickups, trailers, dump trucks' },
                            { name: 'Delivery', href: '/commercial-auto-insurance/delivery-courier', desc: 'Cargo vans, box trucks' },
                            { name: 'Trucking', href: '/commercial-auto-insurance/trucking-companies', desc: 'Semis, tractor-trailers' },
                            { name: 'Moving', href: '/commercial-auto-insurance/moving-companies', desc: 'Moving trucks, cargo vans' },
                            { name: 'Food Service', href: '/commercial-auto-insurance/food-service-catering', desc: 'Refrigerated vans, food trucks' },
                            { name: 'Tow Trucks', href: '/commercial-auto-insurance/tow-truck-operators', desc: 'Flatbed, wheel-lift wreckers' },
                            { name: 'Cleaning', href: '/commercial-auto-insurance/cleaning-services', desc: 'Cargo vans, pressure washers' },
                            { name: 'Medical Transport', href: '/commercial-auto-insurance/medical-transport', desc: 'Ambulettes, wheelchair vans' },
                        ].map((industry) => (
                            <Link
                                key={industry.name}
                                href={industry.href}
                                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gold hover:shadow-md transition-all"
                            >
                                <span className="font-poppins font-semibold text-navy text-sm block">{industry.name}</span>
                                <span className="text-gray-500 text-xs">{industry.desc}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-8">
                        Frequently Asked Questions About Commercial Auto Insurance in {city.name}
                    </h2>
                    <div className="max-w-3xl space-y-6">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="font-poppins font-semibold text-navy mb-2">{faq.q}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nearby Areas We Serve */}
            {nearbyCities.length > 0 && (
                <section className="py-12 bg-gray-50">
                    <div className="container-custom">
                        <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-3">
                            Nearby Areas We Serve
                        </h2>
                        <p className="text-gray-600 mb-6">
                            FHIA provides commercial auto insurance across {city.county} County. Explore coverage in nearby communities:
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {nearbyCities.map((nearby) => (
                                <Link
                                    key={nearby.slug}
                                    href={`/commercial-auto-insurance/${nearby.slug}`}
                                    className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gold hover:shadow-md transition-all"
                                >
                                    <span className="font-poppins font-semibold text-navy block">{nearby.name}, NY</span>
                                    <span className="text-gray-500 text-xs">{nearby.county} County &middot; ZIP {nearby.zip}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Popular Coverage Types cross-links */}
                        <div className="mt-10">
                            <h3 className="font-poppins font-semibold text-navy mb-4">Popular Coverage Types</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { name: 'Truck Insurance', href: '/commercial-auto-insurance/trucking-companies' },
                                    { name: 'Fleet Insurance', href: '/commercial-auto-insurance/construction-fleets' },
                                    { name: 'Delivery Insurance', href: '/commercial-auto-insurance/delivery-courier' },
                                    { name: 'Contractor Insurance', href: '/commercial-auto-insurance/hvac-contractors' },
                                    { name: 'Tow Truck Insurance', href: '/commercial-auto-insurance/tow-truck-operators' },
                                    { name: 'Medical Transport', href: '/commercial-auto-insurance/medical-transport' },
                                ].map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="bg-white border border-gray-200 hover:bg-gold/10 hover:text-gold hover:border-gold px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Bottom Quote Form */}
            <QuoteFormEmbed variant="standalone" />
        </>
    );
}
