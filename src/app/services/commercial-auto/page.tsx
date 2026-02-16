import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Auto Insurance Long Island | FHIA',
  description: 'Exclusive commercial auto coverage built for New York fleets. Tailored protection, faster approvals, smarter underwriting.',
};

const industries = [
  'Local Delivery Services',
  'Unionized Transportation',
  'Beverage and Food Distributors',
  'Plumbing, HVAC, and Construction Fleets',
  'Private Sanitation and Carting Fleets',
  'Security and Patrol Firms',
  'Moving Companies',
  'Building Supply Companies',
  '3 to 100+ Vehicle Fleets',
];

const benefits = [
  {
    title: 'In-House Underwriting',
    description: 'We underwrite and manage our exclusive commercial auto program internally, meaning faster decisions and direct communication.',
  },
  {
    title: 'Faster Approvals',
    description: 'No waiting weeks for quotes. Our streamlined process gets you covered quickly so your fleet stays on the road.',
  },
  {
    title: 'Tailored Coverage',
    description: 'Coverage designed around how your fleet actually operates, not one-size-fits-all policies.',
  },
  {
    title: 'Local Expertise',
    description: 'We know Long Island roads, regulations, and businesses. That local knowledge makes a difference.',
  },
];

export default function CommercialAutoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
              Exclusive Commercial Auto Coverage Built for New York Fleets
            </h1>
            <p className="text-gold text-xl font-semibold mb-4">
              Tailored protection. Faster approvals. Smarter underwriting.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              We underwrite and manage our exclusive commercial auto program in-house, giving you faster decisions, direct communication, and coverage designed around how your fleet operates.
            </p>
            <Link href="/quote" className="btn-primary">
              Get Your Fleet Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="font-poppins text-3xl font-bold text-navy mb-12 text-center">
            Why Choose FHIA for Commercial Auto
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-poppins font-semibold text-xl text-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-navy mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600">
              From small local businesses to large fleets, we have the expertise to protect your vehicles and drivers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-navy">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container-custom text-center">
          <h2 className="font-poppins text-3xl font-bold text-white mb-4">
            Ready to Protect Your Fleet?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a customized quote for your commercial vehicles today. Our team specializes in NY fleet coverage.
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
