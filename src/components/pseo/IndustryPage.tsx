import Link from 'next/link';
import { IndustryData, COVERAGE_TYPES } from '@/lib/pseo-commercial-auto';
import { InsuranceServiceSchema, BreadcrumbSchema } from '@/components/StructuredData';

export default function IndustryPage({ industry }: { industry: IndustryData }) {
    return (
        <>
            <InsuranceServiceSchema
                name={`${industry.name} Commercial Auto Insurance — Long Island`}
                description={industry.description.slice(0, 160)}
                url={`/commercial-auto-insurance/${industry.slug}`}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', href: '/' },
                { name: 'Commercial Auto Insurance', href: '/commercial-auto-insurance' },
                { name: industry.name, href: `/commercial-auto-insurance/${industry.slug}` },
            ]} />

            {/* Hero */}
            <section className="bg-navy py-16 md:py-20">
                <div className="container-custom">
                    <nav className="mb-4 flex items-center gap-2 text-sm">
                        <Link href="/commercial-auto-insurance" className="text-gray-400 hover:text-gold transition-colors">Commercial Auto Insurance</Link>
                        <span className="text-gray-500">/</span>
                        <span className="text-gold">{industry.name}</span>
                    </nav>
                    <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                        {industry.headline}
                    </h1>
                    <p className="text-gray-300 text-lg max-w-3xl">
                        {industry.description}
                    </p>
                    <div className="flex gap-4 mt-8 flex-wrap">
                        <Link href="/quote" className="btn-primary">{industry.ctaText}</Link>
                        <a href="tel:631-659-0189" className="btn-outline">Call (631) 659-0189</a>
                    </div>
                </div>
            </section>

            {/* Vehicle Types */}
            <section className="py-16 md:py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-6">
                                Vehicles We Cover
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Our {industry.name.toLowerCase()} commercial auto policies cover all the vehicle types your operation depends on:
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {industry.vehicleTypes.map((vehicle) => (
                                    <div key={vehicle} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                                        <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-sm font-medium">{vehicle}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-6">
                                Coverage Your Fleet Needs
                            </h2>
                            <p className="text-gray-600 mb-6">
                                {industry.name} operations have unique insurance requirements. Here&#39;s what we recommend:
                            </p>
                            <div className="space-y-3">
                                {industry.coverageNeeds.map((need) => (
                                    <div key={need} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                                        <div className="w-6 h-6 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-sm">{need}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points / Challenges */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-3">
                        Common {industry.name} Insurance Challenges
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-3xl">
                        We&#39;ve worked with {industry.name.toLowerCase()} businesses across Long Island and understand the specific challenges you face:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {industry.painPoints.map((point, index) => (
                            <div key={point} className="bg-white rounded-xl p-6 border border-gray-200">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="font-poppins font-bold text-gold">{index + 1}</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-700">{point}</p>
                                        <p className="text-gray-500 text-sm mt-2">
                                            FHIA&#39;s in-house underwriting addresses this with customized solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Standard Coverage Grid */}
            <section className="py-16">
                <div className="container-custom">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-3">
                        Core Commercial Auto Coverages
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-3xl">
                        In addition to industry-specific coverages, every {industry.name.toLowerCase()} policy includes these essential protections:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {COVERAGE_TYPES.map((coverage) => (
                            <div key={coverage.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
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
                    <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-6">
                                Why {industry.name} Choose FHIA
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: 'Industry-Specific Expertise', desc: `We insure ${industry.name.toLowerCase()} operations across Long Island and understand the unique risks your fleet faces.` },
                                    { title: 'In-House Underwriting', desc: 'Our exclusive commercial auto program means faster approvals and coverage designed around how your business operates.' },
                                    { title: 'Multi-Carrier Comparison', desc: 'We shop your coverage across top-rated carriers to find the best rate — saving our clients up to 30%.' },
                                    { title: 'Licensed in 5 States', desc: 'NY, NJ, CT, PA & FL. If your fleet crosses state lines, we have you covered.' },
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
                        <div className="lg:col-span-2">
                            <div className="bg-navy rounded-xl p-6 sticky top-24">
                                <h3 className="font-poppins text-xl font-bold text-white mb-3">{industry.ctaText}</h3>
                                <p className="text-gray-300 text-sm mb-4">Compare quotes from multiple carriers. Our local agents find you the best coverage at the best price.</p>
                                <Link href="/quote" className="btn-primary block text-center mb-3">{industry.ctaText}</Link>
                                <Link href="/contact-us" className="btn-outline block text-center text-sm">Talk to an Agent</Link>
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <p className="text-gray-400 text-xs mb-1">Call us directly</p>
                                    <a href="tel:631-659-0189" className="text-gold font-semibold text-lg hover:underline">(631) 659-0189</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Service Areas */}
            <section className="py-16">
                <div className="container-custom">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-8">
                        Serving {industry.name} Across Long Island
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-poppins font-semibold text-navy mb-4">Nassau County</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Hempstead', 'Freeport', 'Valley Stream', 'Long Beach', 'Garden City', 'Mineola', 'Rockville Centre', 'Hicksville', 'Massapequa', 'Levittown'].map((city) => (
                                    <Link
                                        key={city}
                                        href={`/commercial-auto-insurance/${city.toLowerCase().replace(/\s+/g, '-')}-ny`}
                                        className="bg-gray-100 hover:bg-gold/10 hover:text-gold px-3 py-1.5 rounded-full text-sm text-gray-700 transition-colors"
                                    >
                                        {city}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-poppins font-semibold text-navy mb-4">Suffolk County</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Huntington', 'Babylon', 'Islip', 'Smithtown', 'Bay Shore', 'Patchogue', 'Commack', 'Melville', 'Brentwood', 'Lindenhurst'].map((city) => (
                                    <Link
                                        key={city}
                                        href={`/commercial-auto-insurance/${city.toLowerCase().replace(/\s+/g, '-')}-ny`}
                                        className="bg-gray-100 hover:bg-gold/10 hover:text-gold px-3 py-1.5 rounded-full text-sm text-gray-700 transition-colors"
                                    >
                                        {city}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gold py-12">
                <div className="container-custom text-center">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-4">
                        Protect Your {industry.name} Fleet Today
                    </h2>
                    <p className="text-navy/80 mb-6 max-w-2xl mx-auto">
                        Compare quotes from multiple carriers and save up to 30% on your commercial auto insurance. No obligation, no pressure.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/quote" className="btn-secondary">{industry.ctaText}</Link>
                        <a href="tel:631-659-0189" className="bg-white text-navy font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300">Call (631) 659-0189</a>
                    </div>
                </div>
            </section>
        </>
    );
}
