import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Services Long Island | Auto Home Business | FHIA',
  description: 'Comprehensive insurance solutions for individuals, families, and businesses across New York. Commercial auto, personal auto, business, home, and captive insurance.',
};

const services = [
  {
    title: 'Commercial Auto Insurance',
    description: 'Exclusive coverage built for NY fleets. In-house underwriting, faster approvals, and coverage designed around how your fleet operates.',
    image: '/images/services/commercial.png',
    href: '/services/commercial-auto',
    features: ['Fleet coverage 3-100+ vehicles', 'Local delivery & trucking', 'Construction & HVAC fleets'],
  },
  {
    title: 'Personal Auto Insurance',
    description: 'Drive confidently with affordable and dependable personal auto insurance for New York drivers. Save up to 30%.',
    image: '/images/services/auto.png',
    href: '/services/personal-auto',
    features: ['Full coverage options', 'Multi-policy discounts', 'SR22 coverage available'],
  },
  {
    title: 'Business Insurance',
    description: 'All-in-one business insurance with smart coverage, local expertise, and peace of mind for Long Island businesses.',
    image: '/images/services/business.png',
    href: '/services/business',
    features: ['General liability', 'Workers compensation', 'Commercial property'],
  },
  {
    title: 'Home Insurance',
    description: 'Protect your livelihood with affordable and dependable homeowners insurance in NY. Customized policies, expert guidance.',
    image: '/images/services/home.png',
    href: '/services/home',
    features: ['Standard & high-value homes', 'Flood insurance options', 'Personal property coverage'],
  },
  {
    title: 'Captive Insurance',
    description: 'Form your own licensed insurance company. Greater control, cost savings, and profit potential for mid-sized and growing companies.',
    image: '/images/services/business.png',
    href: '/services/captive',
    features: ['Reduced total cost of risk', 'Retained profits', 'Custom underwriting'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
              Personal and Commercial Insurance Services
            </h1>
            <p className="text-gray-300 text-lg">
              Tailored plans for individuals, families, and businesses across New York. We work with top-rated carriers to compare options and explain coverage in plain language.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="btn-primary inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-poppins text-3xl font-bold text-navy mb-8">
            Why New York Trusts First Heritage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-gold text-4xl mb-4">20+</div>
              <h3 className="font-semibold text-navy mb-2">Years of Experience</h3>
              <p className="text-gray-600">Serving Long Island families and businesses since 2003.</p>
            </div>
            <div className="p-6">
              <div className="text-gold text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-navy mb-2">Personalized Service</h3>
              <p className="text-gray-600">Real people who know your name and understand your needs.</p>
            </div>
            <div className="p-6">
              <div className="text-gold text-4xl mb-4">✓</div>
              <h3 className="font-semibold text-navy mb-2">Reliable Coverage</h3>
              <p className="text-gray-600">Top-rated carriers with proven track records.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
