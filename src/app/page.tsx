import Link from 'next/link';
import Image from 'next/image';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

const services = [
  {
    title: 'Commercial Auto Insurance',
    description: 'Exclusive coverage for NY fleets. Faster approvals, smarter underwriting.',
    image: '/images/services/commercial.png',
    href: '/services/commercial-auto',
  },
  {
    title: 'Personal Auto Insurance',
    description: 'Drive confidently with affordable, dependable coverage for NY drivers.',
    image: '/images/services/auto.png',
    href: '/services/personal-auto',
  },
  {
    title: 'Business Insurance',
    description: 'All-in-one coverage. Smart protection, local expertise, peace of mind.',
    image: '/images/services/business.png',
    href: '/services/business',
  },
  {
    title: 'Home Insurance',
    description: 'Protect your livelihood with affordable homeowners insurance in NY.',
    image: '/images/services/home.png',
    href: '/services/home',
  },
];

const features = [
  {
    title: 'Dependable Protection',
    description: 'Coverage you can count on when you need it most.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Honest Guidance',
    description: 'Clear explanations without pressure or jargon.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Real People Who Care',
    description: 'Work with local agents who know your community.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Quick Response Times',
    description: 'Same-day quotes and fast claim support.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Competitive Rates',
    description: 'Compare top carriers to find the best value.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Personalized Service',
    description: 'Big-agency resources with neighborhood mindset.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy min-h-[600px] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/backgrounds/hero-bg.webp)' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/70 z-10" />
        {/* Hexagonal pattern overlay */}
        <div className="absolute inset-0 z-10 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container-custom relative z-20 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-sm">4.9 Rating • 1000+ 5-Star Reviews</span>
            </div>

            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Long Island Insurance Agency in Melville, NY
            </h1>
            <p className="text-2xl text-gold font-semibold mb-2">Auto, Home, Business</p>
            <p className="text-xl text-gray-200 mb-4">
              Trusted by Businesses and Families Across Long Island Since 2003
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Licensed. Experienced. Focused on What Matters Most — You.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                'Licensed & Insured',
                '20+ Years in Business',
                'Proudly Serving Long Island & Beyond',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/quote" className="btn-primary text-lg">
                Get a Free Quote
              </Link>
              <Link href="/contact" className="btn-outline text-lg">
                Speak to an Agent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-12 border-b">
        <div className="container-custom">
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider">
            Trusted Partners
          </p>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-70">
            <Image src="/images/partners/geico.png" alt="Geico" width={120} height={40} className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <Image src="/images/partners/hartford.png" alt="The Hartford" width={120} height={40} className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-navy mb-6">
                Your Local Insurance Experts – Protecting What Matters Most Since 2003
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                For over 20 years, we&apos;ve been serving families, individuals, and business owners across Long Island with personalized insurance solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Licensed across NY, NJ, CT, PA &amp; FL with a focus on Long Island communities, we combine big-agency resources with a neighborhood mindset. No pressure, no red tape — just honest guidance from people who care.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/about.png"
                alt="FHIA Team"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-lg">
                <p className="font-poppins text-4xl font-bold text-navy">20+</p>
                <p className="text-navy font-medium">Years Serving LI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-navy mb-4">
              Comprehensive Insurance Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From personal auto to commercial fleets, we offer tailored coverage options to protect what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-lg text-navy mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-navy">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-4">
              Why Long Island Trusts First Heritage
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We&apos;re not just an insurance agency — we&apos;re your neighbors, committed to protecting your family and business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-xl hover:bg-white/5 transition-colors">
                <div className="text-gold mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="font-poppins font-semibold text-xl text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carousel */}
      <TestimonialsCarousel />

      {/* Blog / Insights Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-navy mb-4">
              Insurance Insights for New York Businesses &amp; Families
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with expert advice, industry updates, and practical guides.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'General Liability Insurance in Long Island vs E&O: What\u2019s the Difference?',
                category: 'Business Insurance',
                href: '/blogs/general-liability-vs-eo',
              },
              {
                title: 'Windstorm Insurance in Long Island: How Deductibles Work and What to Expect',
                category: 'Home Insurance',
                href: '/blogs/windstorm-insurance-deductibles',
              },
              {
                title: 'Commercial Auto Insurance in Long Island: What Your Policy Covers',
                category: 'Commercial Auto',
                href: '/blogs/commercial-auto-coverage',
              },
            ].map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-navy">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-gold/20 flex items-center justify-center">
                    <span className="text-gold text-sm font-semibold uppercase tracking-wider">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="bg-gold/10 text-gold-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="font-poppins font-semibold text-lg text-navy mt-3 mb-3 group-hover:text-gold transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <span className="text-gold font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blogs" className="btn-secondary inline-block">
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gold">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-poppins text-4xl md:text-5xl font-bold text-navy">20+</p>
              <p className="text-navy/80 font-medium">Years in Business</p>
            </div>
            <div>
              <p className="font-poppins text-4xl md:text-5xl font-bold text-navy">5</p>
              <p className="text-navy/80 font-medium">States Licensed</p>
            </div>
            <div>
              <p className="font-poppins text-4xl md:text-5xl font-bold text-navy">50k+</p>
              <p className="text-navy/80 font-medium">Clients Served</p>
            </div>
            <div>
              <p className="font-poppins text-4xl md:text-5xl font-bold text-navy">4.9</p>
              <p className="text-navy/80 font-medium">Star Rating</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
