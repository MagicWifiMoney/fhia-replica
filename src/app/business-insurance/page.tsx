import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Insurance Long Island | BOP, GL, WC Quotes | FHIA',
  description: 'All-in-one business insurance for Long Island companies. General liability, workers comp, commercial property, and more.',
};

const coverageTypes = [
  {
    title: 'General Liability Insurance',
    description: 'Protection against bodily injury, property damage, and legal defense costs.',
    icon: '🛡️',
  },
  {
    title: 'Commercial Property Insurance',
    description: 'Covers your building, equipment, inventory, and business property.',
    icon: '🏢',
  },
  {
    title: 'Workers Compensation',
    description: 'Required coverage for employee injuries and illnesses on the job.',
    icon: '👷',
  },
  {
    title: 'Commercial Auto Insurance',
    description: 'Protection for your business vehicles and drivers.',
    icon: '🚚',
  },
  {
    title: 'Commercial Umbrella',
    description: 'Extra liability coverage beyond your primary policies.',
    icon: '☂️',
  },
  {
    title: 'Business Owner\'s Policy (BOP)',
    description: 'Bundled coverage combining property and liability at a discount.',
    icon: '📦',
  },
];

const industries = [
  'Contractors & Construction',
  'Retail & Restaurants',
  'Professional Services',
  'Healthcare & Medical',
  'Manufacturing',
  'Technology',
  'Real Estate',
  'Nonprofits',
];

export default function BusinessInsurancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
              All-in-One Business Insurance
            </h1>
            <p className="text-gold text-xl font-semibold mb-4">
              Smart coverage. Local expertise. Peace of mind.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Protect your Long Island business with comprehensive coverage tailored to your industry. We compare options from multiple carriers to find the right fit.
            </p>
            <Link href="/quote" className="btn-primary">
              Get Your Business Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="font-poppins text-3xl font-bold text-navy mb-12 text-center">
            Business Coverage Options
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((coverage) => (
              <div key={coverage.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{coverage.icon}</div>
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                  {coverage.title}
                </h3>
                <p className="text-gray-600 text-sm">{coverage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-3xl font-bold text-navy mb-6">
                We Serve All Industries
              </h2>
              <p className="text-gray-600 mb-6">
                No matter what business you&apos;re in, we have the expertise to find the right coverage. Our team understands the unique risks faced by different industries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-2xl p-8 text-center text-white">
              <p className="text-gold font-poppins text-5xl font-bold mb-2">1000+</p>
              <p className="text-xl font-semibold mb-4">Businesses Protected</p>
              <p className="text-gray-300">
                Long Island businesses trust FHIA for their commercial insurance needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container-custom text-center">
          <h2 className="font-poppins text-3xl font-bold text-white mb-4">
            Protect Your Business Today
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a customized quote for your business. Our experts will help you find the right coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:631-659-0189" className="btn-outline">
              Call 631-659-0189
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
