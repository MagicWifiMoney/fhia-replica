import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact FHIA Insurance | Melville NY Office',
  description: 'Connect with New York\'s trusted insurance experts. Policy details, quote requests, claims help, and more.',
};

const contactMethods = [
  {
    title: 'Call Us',
    description: 'Speak directly with an agent',
    value: '631-659-0189',
    href: 'tel:631-659-0189',
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Email Us',
    description: 'We respond within 24 hours',
    value: 'service@fhia.net',
    href: 'mailto:service@fhia.net',
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Visit Us',
    description: 'Our Melville office',
    value: '150 Broadhollow Rd, Suite 10, Melville, NY 11747',
    href: 'https://www.google.com/maps/dir//150+Broadhollow+Rd+Suite+10+Melville+NY+11747',
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const helpTopics = [
  'Policy details and coverage questions',
  'Quote requests for new coverage',
  'Claims assistance and filing',
  'Payment and billing inquiries',
  'Policy changes and updates',
  'General questions',
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
              Connect with New York&apos;s Trusted Insurance Experts
            </h1>
            <p className="text-gray-300 text-lg">
              Tailored coverage for New York drivers, families &amp; businesses. We&apos;re here to help with policy details, quotes, claims, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('https') ? '_blank' : undefined}
                rel={method.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="font-poppins font-semibold text-xl text-navy mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{method.description}</p>
                <p className="text-gold font-semibold">{method.value}</p>
              </a>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="font-poppins text-2xl font-bold text-navy mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Help Topics */}
            <div>
              <h2 className="font-poppins text-2xl font-bold text-navy mb-6">
                How Can We Help?
              </h2>
              <p className="text-gray-600 mb-6">
                Our team is ready to assist with any insurance questions or needs:
              </p>
              <ul className="space-y-3 mb-8">
                {helpTopics.map((topic) => (
                  <li key={topic} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-navy rounded-xl p-8 text-white">
                <h3 className="font-poppins font-semibold text-xl mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-300 mb-4">
                  Our agents are available during business hours to help with urgent matters.
                </p>
                <a href="tel:631-659-0189" className="btn-primary inline-block">
                  Call 631-659-0189
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
