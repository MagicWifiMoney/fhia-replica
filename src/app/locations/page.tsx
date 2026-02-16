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
    areas: ['Melville', 'Smithtown', 'Hauppauge', 'Commack', 'Huntington', 'Babylon', 'Islip', 'Brookhaven'],
    href: '/locations/suffolk-county',
  },
  {
    name: 'Nassau County',
    description: 'Serving one of Long Island\'s most densely populated counties with personalized insurance solutions.',
    areas: ['Garden City', 'Carle Place', 'Hicksville', 'Massapequa', 'Mineola', 'Freeport', 'Hempstead', 'Levittown'],
    href: '/locations/nassau-county',
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
                <p className="text-gray-600">150 Broadhollow Rd, Suite 10</p>
                <p className="text-gray-600">Melville, NY 11747</p>
                <p className="text-gray-600 mt-4">
                  <a href="tel:631-659-0189" className="text-gold hover:underline">631-659-0189</a>
                </p>
                <p className="text-gray-600">
                  <a href="mailto:service@fhia.net" className="text-gold hover:underline">service@fhia.net</a>
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact-us" className="btn-primary inline-block">
                  Contact Us
                </Link>
                <a
                  href="https://www.google.com/maps/dir//150+Broadhollow+Rd+Suite+10+Melville+NY+11747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-block"
                >
                  Get Directions
                </a>
              </div>
            </div>
            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5!2d-73.415!3d40.785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8282e9f8a3a3b%3A0x123456789!2s150+Broadhollow+Rd+Suite+10%2C+Melville%2C+NY+11747!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="First Heritage Insurance Agency - Melville, NY Office"
                className="w-full"
              />
            </div>
          </div>

          {/* Service Areas */}
          <h2 className="font-poppins text-3xl font-bold text-navy mb-8 text-center">
            Service Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {locations.map((location) => (
              <Link
                key={location.name}
                href={location.href}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <h3 className="font-poppins text-2xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
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
                <span className="text-gold font-semibold text-sm inline-flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
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
