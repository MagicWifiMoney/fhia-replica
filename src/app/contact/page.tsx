import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact FHIA Insurance | Melville NY Office',
  description: 'Connect with New York\'s trusted insurance experts. Policy details, quote requests, claims help, and more.',
};

const contactMethods = [
  {
    icon: '📞',
    title: 'Call Us',
    description: 'Speak directly with an agent',
    value: '631-659-0189',
    href: 'tel:631-659-0189',
  },
  {
    icon: '✉️',
    title: 'Email Us',
    description: 'We respond within 24 hours',
    value: 'service@fhia.net',
    href: 'mailto:service@fhia.net',
  },
  {
    icon: '📍',
    title: 'Visit Us',
    description: 'Our Melville office',
    value: '324 S. Service Rd, Suite 101, Melville, NY 11747',
    href: 'https://maps.google.com/?q=324+S+Service+Rd+Suite+101+Melville+NY+11747',
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
              Tailored coverage for New York drivers, families & businesses. We&apos;re here to help with policy details, quotes, claims, and more.
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
                <div className="text-5xl mb-4">{method.icon}</div>
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
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option value="quote">Request a Quote</option>
                    <option value="policy">Policy Question</option>
                    <option value="claim">Claims Help</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
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
