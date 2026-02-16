import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Personal and Commercial Insurance | FHIA',
  description: 'Get your free insurance quote today. Personal auto, commercial auto, home, business, and more.',
};

const insuranceTypes = [
  'Personal Auto Insurance',
  'Commercial Auto & Fleet Insurance',
  'Homeowners & Renters Insurance',
  'Business & Liability Insurance',
  'Captive Insurance',
  'Customized Plans',
];

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16">
        <div className="container-custom text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Insurance Quote
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Fill out the form below and one of our agents will reach out with personalized coverage options. No obligation, no pressure.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="font-poppins text-2xl font-bold text-navy mb-6">
                  Tell Us About Your Insurance Needs
                </h2>
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-navy rounded-xl p-8 text-white mb-8">
                <h3 className="font-poppins font-semibold text-xl mb-4">
                  What We Offer
                </h3>
                <ul className="space-y-3">
                  {insuranceTypes.map((type) => (
                    <li key={type} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gold/10 rounded-xl p-8">
                <h3 className="font-poppins font-semibold text-xl text-navy mb-4">
                  Why Choose FHIA?
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>20+ years serving Long Island</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Compare multiple carriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No pressure, no obligation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Fast & friendly service</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-2">Prefer to call?</p>
                <a href="tel:631-659-0189" className="text-navy font-semibold text-xl hover:text-gold transition-colors">
                  631-659-0189
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
