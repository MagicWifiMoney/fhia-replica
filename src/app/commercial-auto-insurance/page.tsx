import Link from 'next/link';
import type { Metadata } from 'next';
import { INDUSTRIES, CITIES } from '@/lib/pseo-commercial-auto';

export const metadata: Metadata = {
  title: 'Commercial Auto Insurance Long Island | FHIA',
  description: 'Exclusive commercial auto coverage built for New York fleets. Tailored protection, faster approvals, smarter underwriting. Browse by industry, vehicle type, or coverage.',
};

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

// Group industries by category for the hub page
const INDUSTRY_CATEGORIES: { label: string; slugs: string[] }[] = [
  {
    label: 'Trades & Contractors',
    slugs: [
      'construction-fleets',
      'hvac-contractors',
      'plumbing-companies',
      'electrical-contractors',
      'landscaping-companies',
      'cleaning-services',
      'contractor-vehicle-insurance',
    ],
  },
  {
    label: 'Delivery & Transport',
    slugs: [
      'delivery-courier',
      'trucking-companies',
      'moving-companies',
      'food-service-catering',
      'tow-truck-operators',
      'medical-transport',
      'last-mile-delivery-insurance',
      'owner-operator-truck-insurance',
    ],
  },
  {
    label: 'Fleet Size',
    slugs: [
      'small-business-fleet-insurance',
      'commercial-fleet-insurance',
    ],
  },
  {
    label: 'Vehicle Type',
    slugs: [
      'box-truck-insurance',
      'dump-truck-insurance',
      'food-truck-insurance',
      'work-van-insurance',
    ],
  },
  {
    label: 'Coverage Types',
    slugs: [
      'hired-non-owned-auto-insurance',
      'employee-driving-insurance',
      'motor-truck-cargo-insurance',
      'commercial-auto-umbrella-insurance',
      'trailer-interchange-insurance',
      'rental-reimbursement-commercial-auto',
      'physical-damage-commercial-auto',
    ],
  },
];

const industryMap = new Map(INDUSTRIES.map((i) => [i.slug, i]));

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

      {/* Industries by Category */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-navy mb-4">
              Find Coverage for Your Industry
            </h2>
            <p className="text-gray-600">
              From single work vans to 100+ vehicle fleets, we have specialized coverage for every type of commercial vehicle operation on Long Island.
            </p>
          </div>

          <div className="space-y-12">
            {INDUSTRY_CATEGORIES.map((category) => (
              <div key={category.label}>
                <h3 className="font-poppins text-xl font-bold text-navy mb-4 border-b-2 border-gold pb-2">
                  {category.label}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.slugs.map((slug) => {
                    const industry = industryMap.get(slug);
                    if (!industry) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/commercial-auto-insurance/${slug}`}
                        className="group bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-gold transition-all"
                      >
                        <h4 className="font-poppins font-semibold text-navy group-hover:text-gold transition-colors mb-2">
                          {industry.name}
                        </h4>
                        <p className="text-gray-500 text-sm line-clamp-2">
                          {industry.description.slice(0, 100)}...
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Pages Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-navy mb-4">
              Commercial Auto Insurance by Location
            </h2>
            <p className="text-gray-600">
              We serve businesses across Nassau and Suffolk counties. Find coverage specific to your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {(['Nassau', 'Suffolk'] as const).map((county) => (
              <div key={county}>
                <h3 className="font-poppins text-xl font-bold text-navy mb-4 border-b-2 border-gold pb-2">
                  {county} County
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {CITIES.filter((c) => c.county === county).map((city) => (
                    <Link
                      key={city.slug}
                      href={`/commercial-auto-insurance/${city.slug}`}
                      className="text-gray-600 hover:text-gold transition-colors text-sm py-1"
                    >
                      {city.name}, NY
                    </Link>
                  ))}
                </div>
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
