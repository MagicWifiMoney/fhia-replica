import Link from 'next/link';
import Image from 'next/image';

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
    icon: '🛡️',
    title: 'Dependable Protection',
    description: 'Coverage you can count on when you need it most.',
  },
  {
    icon: '🤝',
    title: 'Honest Guidance',
    description: 'Clear explanations without pressure or jargon.',
  },
  {
    icon: '👥',
    title: 'Real People Who Care',
    description: 'Work with local agents who know your community.',
  },
  {
    icon: '⚡',
    title: 'Quick Response Times',
    description: 'Same-day quotes and fast claim support.',
  },
  {
    icon: '💰',
    title: 'Competitive Rates',
    description: 'Compare top carriers to find the best value.',
  },
  {
    icon: '✨',
    title: 'Personalized Service',
    description: 'Big-agency resources with neighborhood mindset.',
  },
];

const testimonials = [
  {
    name: 'Jamira Minton',
    type: 'Home Insurance',
    quote: "John's team made finding home insurance so easy. They compared multiple options and found me great coverage at a price I could afford.",
    rating: 5,
    image: '/images/testimonials/testimonial01.webp',
  },
  {
    name: 'Anthony Wofford',
    type: 'Auto Insurance',
    quote: "Kyle was incredibly helpful throughout the entire process. Got me covered quickly and saved me money compared to my old policy.",
    rating: 5,
    image: '/images/testimonials/testimonial02.webp',
  },
  {
    name: 'Christian Raphael',
    type: 'Business Insurance',
    quote: "Brandon Blood took care of everything for my business. Professional, responsive, and got me exactly what I needed.",
    rating: 5,
    image: '/images/testimonials/testimonial03.webp',
  },
];

const trustBadges = [
  { icon: '✓', text: 'Licensed & Insured' },
  { icon: '✓', text: '20+ Years in Business' },
  { icon: '✓', text: 'Proudly Serving Long Island & Beyond' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/backgrounds/hero-bg.webp)' }}
        />
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
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-white">
                  <span className="text-gold font-bold">{badge.icon}</span>
                  <span className="text-sm">{badge.text}</span>
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
                Licensed across NY, NJ, CT, PA & FL with a focus on Long Island communities, we combine big-agency resources with a neighborhood mindset. No pressure, no red tape — just honest guidance from people who care.
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
              <div key={feature.title} className="text-center p-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-poppins font-semibold text-xl text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Don&apos;t just take our word for it — hear from real customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex text-gold mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.type}</p>
                  </div>
                </div>
              </div>
            ))}
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
