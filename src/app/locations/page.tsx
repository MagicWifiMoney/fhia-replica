import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Services Long Island | Auto Home Business | FHIA',
  description: 'Serving Nassau County, Suffolk County, and all of Long Island. 20+ years, 5 states licensed, same-day quotes available.',
};

const stats = [
  { value: '20+', label: 'Years Serving Long Island' },
  { value: '5', label: 'States Licensed' },
  { value: '1,500+', label: 'Five-Star Reviews' },
  { value: 'Same-Day', label: 'Quotes Available' },
];

const locations = [
  {
    name: 'Suffolk County',
    description: 'Our home base since 2003. Serving Melville, Smithtown, Hauppauge, Commack, and surrounding areas.',
    areas: ['Melville', 'Smithtown', 'Hauppauge', 'Commack', 'Huntington'],
  },
  {
    name: 'Nassau County',
    description: 'Serving one of Long Island\'s most densely populated counties with personalized insurance solutions.',
    areas: ['Garden City', 'Carle Place', 'Hicksville', 'Massapequa', 'Mineola'],
  },
];

const otherStates = [
  { name: 'Connecticut', abbr: 'CT' },
  { name: 'New Jersey', abbr: 'NJ' },
  { name: 'Pennsylvania', abbr: 'PA' },
  { name: 'Florida', abbr: 'FL' },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
              Serving Long Island and Beyond
            </h1>
            <p className="text-gray-300 text-lg">
              From our Melville office, we serve families and businesses across Nassau County, Suffolk County, and all of Long Island. Plus, we&apos;re licensed in Connecticut, New Jersey, Pennsylvania, and Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gold">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-poppins text-3xl md:text-4xl font-bold text-navy">{stat.value}</p>
                <p className="text-navy/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Office */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-poppins text-3xl font-bold text-navy mb-4">
                Our Melville Office
              </h2>
              <p className="text-gray-600 mb-4">
                Located off Route 110 between corporate campuses and Walt Whitman Shops, our Suffolk County office has been our home base since 2003.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="font-semibold text-navy mb-2">First Heritage Insurance Agency</p>
                <p className="text-gray-600">324 S. Service Rd, Suite 101</p>
                <p className="text-gray-600">Melville, NY 11747</p>
                <p className="text-gray-600 mt-4">
                  <a href="tel:631-659-0189" className="text-gold hover:underline">631-659-0189</a>
                </p>
                <p className="text-gray-600">
                  <a href="mailto:service@fhia.net" className="text-gold hover:underline">service@fhia.net</a>
                </p>
              </div>
              <Link href="/contact" className="btn-primary inline-block">
                Contact Us
              </Link>
            </div>
            <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
              <p className="text-gray-500">Map coming soon</p>
            </div>
          </div>

          {/* Service Areas */}
          <h2 className="font-poppins text-3xl font-bold text-navy mb-8 text-center">
            Service Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {locations.map((location) => (
              <div key={location.name} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-poppins text-2xl font-bold text-navy mb-3">
                  {location.name}
                </h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <div className="flex flex-wrap gap-2">
                  {location.areas.map((area) => (
                    <span key={area} className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Other States */}
          <div className="text-center">
            <h2 className="font-poppins text-2xl font-bold text-navy mb-6">
              Also Licensed In
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {otherStates.map((state) => (
                <div key={state.abbr} className="bg-navy text-white px-6 py-3 rounded-lg">
                  <span className="font-semibold">{state.name}</span>
                  <span className="text-gold ml-2">({state.abbr})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container-custom text-center">
          <h2 className="font-poppins text-3xl font-bold text-white mb-4">
            Need Coverage in Your Area?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re on Long Island or in one of our other licensed states, we&apos;re here to help.
          </p>
          <Link href="/quote" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
