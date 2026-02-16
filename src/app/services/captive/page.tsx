import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Captive Insurance Long Island | FHIA Melville NY Experts',
  description: 'Form your own licensed insurance company. Greater control, cost savings, and profit potential for mid-sized and growing companies.',
};

const benefits = [
  {
    title: 'Reduced Total Cost of Risk',
    description: 'Take control of your insurance costs and reduce the total cost of risk (TCOR).',
  },
  {
    title: 'Stronger Cash Flow',
    description: 'Better cash flow management through controlled premium payments.',
  },
  {
    title: 'Retained Profits',
    description: 'Keep underwriting profits from favorable loss performance instead of giving them to insurers.',
  },
  {
    title: 'Claims Control',
    description: 'More control over claims handling and underwriting decisions.',
  },
  {
    title: 'Customized Coverage',
    description: 'Design coverage that aligns perfectly with your operations and risk profile.',
  },
  {
    title: 'Tax Advantages',
    description: 'Potential tax benefits through proper captive structure and operation.',
  },
];

const expertise = [
  {
    title: 'Deep Industry Expertise',
    description: 'We understand the unique needs of mid-sized and growing companies.',
  },
  {
    title: 'Data-Driven Strategy',
    description: 'Our approach is backed by detailed analysis of your risk profile.',
  },
  {
    title: 'Regulatory Knowledge',
    description: 'We navigate complex insurance regulations to ensure compliance.',
  },
  {
    title: 'Integrated Programs',
    description: 'Bundle Workers\' Comp and Commercial Auto for maximum efficiency.',
  },
];

export default function CaptiveInsurancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
              Captive Insurance Solutions
            </h1>
            <p className="text-gold text-xl font-semibold mb-4">
              Form your own licensed insurance company
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Captive insurance gives mid-sized and growing companies greater control, significant cost savings, and profit potential. Take charge of your risk management strategy.
            </p>
            <Link href="/quote" className="btn-primary">
              Explore Captive Options
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="font-poppins text-3xl font-bold text-navy mb-12 text-center">
            Benefits of Captive Insurance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="font-poppins text-3xl font-bold text-navy mb-12 text-center">
            Why Work with FHIA
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {expertise.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container-custom text-center">
          <h2 className="font-poppins text-3xl font-bold text-white mb-4">
            Is Captive Insurance Right for You?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to learn if a captive structure makes sense for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
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
