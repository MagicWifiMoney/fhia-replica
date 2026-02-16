import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homeowners Insurance Long Island | Compare & Save | FHIA',
  description: 'Protect your home with affordable and dependable homeowners insurance in NY. Customized policies and expert guidance.',
};

const coverageTypes = [
  {
    title: 'Dwelling Coverage',
    description: 'Covers the structure of your home against damage from covered perils.',
  },
  {
    title: 'Personal Property',
    description: 'Protects your belongings inside your home, including furniture, electronics, and clothing.',
  },
  {
    title: 'Liability Protection',
    description: 'Covers legal costs if someone is injured on your property.',
  },
  {
    title: 'Additional Living Expenses',
    description: 'Pays for temporary housing if your home is uninhabitable after a covered loss.',
  },
  {
    title: 'Other Structures',
    description: 'Covers detached garages, sheds, fences, and other structures on your property.',
  },
  {
    title: 'Flood Insurance',
    description: 'Optional coverage for flood damage, essential for many Long Island homes.',
  },
];

const highValueFeatures = [
  'Higher dwelling coverage for full rebuild costs',
  'Expanded personal property (jewelry, art, antiques)',
  'Coverage for secondary structures',
  'Enhanced liability protection',
  'Premium carrier options (Chubb, AIG, PURE)',
];

export default function HomeInsurancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
              Protect Your Home with Confidence
            </h1>
            <p className="text-gold text-xl font-semibold mb-4">
              Affordable and dependable homeowners insurance in NY
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Your home is your biggest investment. We help you find the right coverage to protect it, with customized policies and expert guidance.
            </p>
            <Link href="/quote" className="btn-primary">
              Get Your Home Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="font-poppins text-3xl font-bold text-navy mb-12 text-center">
            Coverage Options
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((coverage) => (
              <div key={coverage.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                  {coverage.title}
                </h3>
                <p className="text-gray-600 text-sm">{coverage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Value Homes */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-3xl font-bold text-navy mb-6">
                High-Value Home Insurance
              </h2>
              <p className="text-gray-600 mb-6">
                Luxury homes require specialized coverage. We work with premium carriers to protect high-value properties in Oyster Bay, Huntington, Garden City, the Hamptons, and beyond.
              </p>
              <ul className="space-y-3">
                {highValueFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gold/10 rounded-2xl p-8 text-center">
              <p className="text-navy font-poppins text-xl font-bold mb-4">
                Serving Long Island&apos;s Premium Markets
              </p>
              <p className="text-gray-600">
                Oyster Bay • Huntington • Melville • Garden City • The Hamptons
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container-custom text-center">
          <h2 className="font-poppins text-3xl font-bold text-white mb-4">
            Ready to Protect Your Home?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a personalized homeowners insurance quote today.
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
