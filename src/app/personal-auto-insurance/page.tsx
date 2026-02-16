import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Insurance Long Island | Compare & Save 30% | FHIA',
  description: 'Affordable and dependable personal auto insurance for New York drivers. Compare top carriers and save up to 30%.',
};

const coverageTypes = [
  {
    title: 'Liability Coverage',
    description: 'Covers damages to others if you\'re at fault in an accident.',
  },
  {
    title: 'Collision Coverage',
    description: 'Pays for repairs to your vehicle after an accident, regardless of fault.',
  },
  {
    title: 'Comprehensive Coverage',
    description: 'Protects against theft, vandalism, weather damage, and more.',
  },
  {
    title: 'Uninsured/Underinsured Motorist',
    description: 'Covers you if hit by a driver with insufficient insurance.',
  },
  {
    title: 'Medical Payments',
    description: 'Covers medical expenses for you and your passengers.',
  },
  {
    title: 'Roadside Assistance',
    description: 'Help when you need it: towing, flat tires, lockouts, and more.',
  },
];

const benefits = [
  'Save up to 30% for most applicants',
  'Compare multiple top-rated carriers',
  'Strong approvals even with blemishes on your record',
  'Fast, same-day quotes available',
  'SR22 coverage available',
  'Multi-policy discounts',
];

export default function PersonalAutoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
              Drive Confidently with the Right Coverage
            </h1>
            <p className="text-gold text-xl font-semibold mb-4">
              Affordable and dependable personal auto insurance for New York drivers
            </p>
            <p className="text-gray-300 text-lg mb-8">
              We compare rates from multiple carriers to find you the best coverage at the best price. Save up to 30% on your auto insurance.
            </p>
            <Link href="/quote" className="btn-primary">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-3xl font-bold text-navy mb-6">
                The FHIA You-First Approach
              </h2>
              <p className="text-gray-600 mb-6">
                Finding the right auto insurance shouldn&apos;t be complicated. We take the time to understand your needs and compare options from multiple carriers to find the policy that works for you.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gold/10 rounded-2xl p-8">
              <div className="text-center">
                <p className="text-gold font-poppins text-6xl font-bold mb-2">30%</p>
                <p className="text-navy text-xl font-semibold mb-4">Average Savings</p>
                <p className="text-gray-600">
                  Most of our applicants save up to 30% when switching to a policy through FHIA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="font-poppins text-3xl font-bold text-navy mb-12 text-center">
            Coverage Options
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((coverage) => (
              <div key={coverage.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                  {coverage.title}
                </h3>
                <p className="text-gray-600 text-sm">{coverage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container-custom text-center">
          <h2 className="font-poppins text-3xl font-bold text-white mb-4">
            Ready to Save on Auto Insurance?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a personalized quote in minutes. No obligation, no pressure.
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
