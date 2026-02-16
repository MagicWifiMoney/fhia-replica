import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | FHIA - Licensed NY Insurance Agency Since 2003',
  description: 'Get to know the people behind your coverage. With over 20 years of experience serving Long Island and beyond.',
};

const values = [
  {
    title: 'Integrity',
    description: 'We believe in honest, transparent communication in every interaction.',
  },
  {
    title: 'Excellence',
    description: 'We strive to deliver the best possible coverage and service to every client.',
  },
  {
    title: 'Community',
    description: 'We\'re proud Long Island neighbors, invested in the communities we serve.',
  },
  {
    title: 'Innovation',
    description: 'We leverage technology to provide faster, smarter insurance solutions.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-2xl text-gold font-semibold mb-4">
              Get to Know the People Behind Your Coverage
            </p>
            <p className="text-gray-300 text-lg">
              With over 20 years of experience serving Long Island and beyond, we&apos;re committed to protecting what matters most to you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-navy mb-6">
                We Are the Insurance Agency That Puts Your Needs First
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Since 2003, First Heritage Insurance Agency has helped thousands of clients find the right coverage at the right price. Our mission is simple: provide personalized insurance solutions without the corporate runaround.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We combine big-agency resources with a neighborhood mindset. When you call us, you&apos;ll talk to real people who know your name and understand your needs — not an automated system.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team compares rates from multiple top-rated carriers to ensure you get the best coverage at competitive prices. We explain your options in plain language, so you can make informed decisions about your protection.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gold/10 px-4 py-2 rounded-lg">
                  <span className="text-gold font-semibold">Licensed in NY, NJ, CT, PA, FL</span>
                </div>
                <div className="bg-gold/10 px-4 py-2 rounded-lg">
                  <span className="text-gold font-semibold">Based in Melville, NY</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about.png"
                alt="FHIA Team"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600">
              Guiding every policy, every interaction, every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value) => (
              <div key={value.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-poppins font-semibold text-xl text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-poppins text-3xl font-bold text-white mb-4">
              Ready to Experience the FHIA Difference?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get a personalized quote from our team today. No pressure, no obligation — just honest guidance from people who care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote" className="btn-primary">
                Get a Free Quote
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
